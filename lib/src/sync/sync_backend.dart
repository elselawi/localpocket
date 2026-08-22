/// The sync backend seam plus wire types, typed errors,
/// and PocketBase-compatible timestamp helpers.
library;

// ---------------------------------------------------------------------------
// Typed sync errors. The engine maps these to retry / dead-letter
// decisions; they are never strings.
// ---------------------------------------------------------------------------

/// Base class for typed synchronization failures.
sealed class SyncError implements Exception {
  /// Human-readable failure description.
  final String message;

  /// Creates a synchronization failure.
  SyncError([this.message = 'sync error']);
  @override
  String toString() => '$runtimeType: $message';
}

/// Timeout / connection reset / DNS — retry with backoff.
class TransientNetworkError extends SyncError {
  TransientNetworkError([super.message = 'network error']);
}

/// 408 / 429 — honor Retry-After; 429 throttles the whole lane.
class ServerBusyError extends SyncError {
  /// Retry-After seconds, when provided by the server.
  final String? retryAfter;
  ServerBusyError([this.retryAfter, super.message = 'server busy']);
}

/// 5xx — retry with backoff, escalate after N attempts.
class ServerError extends SyncError {
  ServerError([super.message = 'server error']);
}

/// 401 — refresh once, then AuthRequired (never rewrites rows).
class AuthError extends SyncError {
  AuthError([super.message = 'auth required']);
}

/// 403 — quarantine, no retry.
class ForbiddenError extends SyncError {
  ForbiddenError([super.message = 'forbidden']);
}

/// 404 on a targeted fetch is AMBIGUOUS — never a delete.
class NotFoundError extends SyncError {
  NotFoundError([super.message = 'not found']);
}

/// 400 validation / too large — dead-letter with the server message.
class PayloadError extends SyncError {
  PayloadError([super.message = 'invalid payload']);
}

/// Unparseable / contract violation — log loudly.
class ProtocolError extends SyncError {
  ProtocolError([super.message = 'protocol error']);
}

/// A create retried after a lost response (duplicate-id).
class DuplicateIdError extends SyncError {
  DuplicateIdError([super.message = 'duplicate id']);
}

/// A transactional batch failed as a whole (poison item).
class BatchFailedError extends SyncError {
  BatchFailedError([super.message = 'batch failed']);
}

/// A write was rejected because the record's remote version moved since the
/// client's optimistic-concurrency read (the GET before a PATCH, or the batch
/// preflight GET). The pusher re-fetches, re-merges against [current] and
/// retries instead of blindly overwriting the concurrent edit.
class RemoteVersionConflict extends SyncError {
  /// The remote record at the version that caused the rejection, when the
  /// backend can provide it.
  final RemoteRecord? current;

  RemoteVersionConflict({String message = 'version conflict', this.current})
      : super(message);
}

// ---------------------------------------------------------------------------
// Capabilities & wire types
// ---------------------------------------------------------------------------

/// Capabilities negotiated with a synchronization backend.
class BackendCapabilities {
  /// Whether transactional remote batch writes are available.
  final bool batchEnabled;

  /// Maximum backend batch size.
  final int maxBatch;

  /// Maximum remote page size.
  final int maxPage;

  /// Creates a backend capability snapshot.
  const BackendCapabilities({
    this.batchEnabled = false,
    this.maxBatch = 25,
    this.maxPage = 200,
  });
}

/// Replayable file source for streamed backend uploads.
class StreamFileUpload {
  /// Filename sent to the remote service.
  final String filename;

  /// Number of bytes emitted by [streamFactory].
  final int length;

  /// Creates a fresh stream for each upload attempt.
  final Future<Stream<List<int>>> Function() streamFactory;

  /// Creates a streamed upload description.
  const StreamFileUpload({
    required this.filename,
    required this.length,
    required this.streamFactory,
  });
}

/// A record received from or sent to a synchronization backend.
class RemoteRecord {
  /// Remote record ID.
  final String id;

  /// LocalPocket collection name.
  final String store;

  /// Server update timestamp used by the pull cursor.
  final String updated;

  /// Remote record payload.
  final Map<String, Object?> data;

  /// Remote attachment filenames.
  final List<String> imgs;

  /// Creates a remote record value.
  const RemoteRecord({
    required this.id,
    required this.store,
    required this.updated,
    required this.data,
    this.imgs = const [],
  });

  /// Copies this record while replacing selected fields.
  RemoteRecord copyWith({String? updated, Map<String, Object?>? data}) =>
      RemoteRecord(
        id: id,
        store: store,
        updated: updated ?? this.updated,
        data: data ?? this.data,
        imgs: imgs,
      );
}

/// An outbox op encoded for a single push (create vs update by [baseUpdated]).
/// One desired record state prepared for a backend push.
class PushOp {
  /// Stable local operation ID — the server-side idempotency key for batch
  /// pushes (see [SyncBackend.pushBatch]).
  final String opId;

  /// Collection name.
  final String store;

  /// Record ID.
  final String id;

  /// Canonical JSON payload.
  final String dataJson;

  /// Null => the record was never created remotely (create path).
  final String? baseUpdated;

  /// Batch mode: encode as PUT upsert (create-or-update by existence).
  final bool upsert;

  const PushOp({
    required this.opId,
    required this.store,
    required this.id,
    required this.dataJson,
    this.baseUpdated,
    this.upsert = false,
  });
}

/// Result of one remote push operation.
class PushResult {
  /// Operation ID supplied in the corresponding [PushOp].
  final String opId;

  /// Whether the remote operation succeeded.
  final bool ok;

  /// Server record returned after success.
  final RemoteRecord? record;

  /// Server-provided error message (for dead letters / observability).
  final String? error;

  /// When a concurrent change forced a merge, the payload actually pushed.
  final String? pushedJson;

  const PushResult({
    required this.opId,
    required this.ok,
    this.record,
    this.error,
    this.pushedJson,
  });
}

/// Kind of event signaled by a backend realtime hint.
enum BackendHintKind { changed, deleted, authChanged }

/// Backend event hint that triggers pull or fast-path processing.
class BackendHint {
  /// Affected collection.
  final String store;

  /// Event category.
  final BackendHintKind kind;

  /// Fast-path payload: a `changed` hint MAY carry the full
  /// embedded record so the engine can apply it directly when the local row
  /// is clean and the event is newer — without a pull and without advancing
  /// the cursor. Null => a plain doorbell (the engine pulls).
  final RemoteRecord? record;

  const BackendHint(this.store,
      [this.kind = BackendHintKind.changed, this.record]);
}

// ---------------------------------------------------------------------------
// PocketBase timestamp helpers: 'YYYY-MM-DD HH:MM:SS.mmmZ'.
// Lexicographic string comparison equals chronological order for this format.
// ---------------------------------------------------------------------------

final RegExp _pbTimestampRe =
    RegExp(r'^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})\.(\d{3})Z$');

/// Parses a PocketBase UTC timestamp (`YYYY-MM-DD HH:MM:SS.mmmZ`).
///
/// The regex is anchored, so trailing garbage, extra text, timezone suffixes
/// and missing zero padding are all rejected. Out-of-range months/days/times
/// are rejected too (rather than silently normalized by `DateTime.utc`).
/// Every failure raises a typed [ProtocolError].
DateTime pbTimestampToDateTime(String s) {
  final m = _pbTimestampRe.firstMatch(s);
  if (m == null) throw ProtocolError('Bad timestamp "$s"');
  final year = int.parse(m.group(1)!);
  final month = int.parse(m.group(2)!);
  final day = int.parse(m.group(3)!);
  final hour = int.parse(m.group(4)!);
  final minute = int.parse(m.group(5)!);
  final second = int.parse(m.group(6)!);
  final millis = int.parse(m.group(7)!);
  if (month < 1 || month > 12 || hour > 23 || minute > 59 || second > 59) {
    throw ProtocolError('Bad timestamp "$s"');
  }
  final lastDay = DateTime.utc(
          month == 12 ? year + 1 : year, month == 12 ? 1 : month + 1, 0)
      .day;
  if (day < 1 || day > lastDay) throw ProtocolError('Bad timestamp "$s"');
  return DateTime.utc(year, month, day, hour, minute, second, millis);
}

/// Formats [dt] using PocketBase's millisecond UTC timestamp format.
///
/// [dt] is converted to UTC first, so a local (non-UTC) `DateTime` still
/// produces a correct instant-based timestamp ending in `Z`.
String formatPbTimestamp(DateTime dt) {
  final u = dt.toUtc();
  String p(int n, [int w = 2]) => n.toString().padLeft(w, '0');
  return '${p(u.year, 4)}-${p(u.month)}-${p(u.day)} '
      '${p(u.hour)}:${p(u.minute)}:${p(u.second)}.${p(u.millisecond, 3)}Z';
}

/// The rewind window start: cursor − Δ.
String rewindUpdated(String updated, Duration delta) =>
    formatPbTimestamp(pbTimestampToDateTime(updated).subtract(delta));

// ---------------------------------------------------------------------------
// The seam. File methods are omitted here.
// ---------------------------------------------------------------------------

/// Backend contract used by [SyncEngine] for pull, push, realtime, and files.
///
/// Idempotency: every push retry is safe to repeat, and backends MUST honor
/// the keys that make that true — batch ops key on their stable [PushOp.opId],
/// creates key on the client-supplied record id, and updates re-send the full
/// desired state guarded by [updateRecord]'s [baseUpdated] check. See the
/// per-method contracts below.
abstract class SyncBackend {
  /// Negotiated backend capabilities.
  BackendCapabilities get capabilities;

  /// Identity fingerprint; a change invalidates all cursors.
  String get scopeId;

  /// Adapter warm-up (e.g. the batch probe). Called by the engine on
  /// `start()` before the first cycle. Default is a no-op.
  Future<void> prepare() async {}

  /// Ordered, resumable change feed for one store (pull) or an id-range scan
  /// (sweep, when [idPrefix] is set). Ties resolved by the `(updated, id)`
  /// tuple keyset.
  Future<List<RemoteRecord>> listChanges(
    String store, {
    String? fromUpdated,
    String? fromId,
    String? idPrefix,
    int perPage = 200,
  });

  /// Ambiguous 404 => throws [NotFoundError].
  Future<RemoteRecord?> getRecord(String id);

  /// Creates a remote record with the client-supplied ID.
  ///
  /// The client may retry this call after a lost response. Implementations
  /// MUST treat the client-supplied [id] as an idempotency key: a retry with
  /// the same [id] either creates the record once or fails with
  /// [DuplicateIdError] when it already exists — never a second copy.
  Future<RemoteRecord> createRecord({
    required String id,
    required String store,
    required String dataJson,
  });

  /// Updates a remote record after the pusher's concurrency check.
  ///
  /// [baseUpdated] is the remote version the write is based on (captured by
  /// the pusher's GET). A backend that enforces optimistic concurrency may
  /// reject the write with [RemoteVersionConflict] when the remote moved past
  /// that version; backends without conditional writes (e.g. PocketBase) may
  /// ignore it.
  ///
  /// Retry contract: the client may retry this call after a lost response.
  /// [dataJson] is the FULL desired record state (never a diff), so
  /// re-applying it while the remote record still matches [baseUpdated] is
  /// idempotent. Implementations SHOULD reject the write with
  /// [RemoteVersionConflict] when the remote moved past [baseUpdated] so the
  /// pusher re-merges instead of overwriting a concurrent edit.
  Future<RemoteRecord> updateRecord({
    required String id,
    required String dataJson,
    String? baseUpdated,
  });

  /// Updates record files using the modifier matrix.
  Future<RemoteRecord> updateRecordFiles({
    required String id,
    String? dataJson,
    Map<String, List<int>>? uploads,
    List<String>? keepNames,
    List<String>? removeNames,
  }) async {
    throw UnimplementedError(
        'updateRecordFiles not implemented on this backend');
  }

  /// Streamed counterpart used by large-file sync. The default implementation
  /// preserves compatibility with older backends by buffering only when the
  /// backend has no streaming implementation.
  Future<RemoteRecord> updateRecordFilesStream({
    required String id,
    String? dataJson,
    Map<String, StreamFileUpload>? uploads,
    List<String>? keepNames,
    List<String>? removeNames,
  }) async {
    if (uploads == null || uploads.isEmpty) {
      return updateRecordFiles(
        id: id,
        dataJson: dataJson,
        keepNames: keepNames,
        removeNames: removeNames,
      );
    }
    final bytes = <String, List<int>>{};
    for (final entry in uploads.entries) {
      final builder = <int>[];
      final stream = await entry.value.streamFactory();
      await for (final chunk in stream) {
        builder.addAll(chunk);
      }
      bytes[entry.value.filename] = builder;
    }
    return updateRecordFiles(
      id: id,
      dataJson: dataJson,
      uploads: bytes,
      keepNames: keepNames,
      removeNames: removeNames,
    );
  }

  /// Downloads a file for a record.
  Future<Stream<List<int>>> downloadFile({
    required String recordId,
    required String filename,
    String? thumb,
  }) async {
    throw UnimplementedError('downloadFile not implemented on this backend');
  }

  /// Transactional batch. Throws [BatchFailedError] when the whole batch
  /// fails as a unit.
  ///
  /// Idempotency contract (REQUIRED — the binary-split retry depends on it):
  /// implementations MUST treat ([scopeId], [PushOp.opId]) as an idempotency
  /// key. A network failure after the server committed a batch but before the
  /// client received the response must be safe: retrying the same [opId]
  /// returns the original result (or an equivalent no-op success) and never
  /// applies the mutation twice or fabricates a conflict.
  ///
  /// Response contract:
  /// - Every returned [PushResult.opId] MUST reference an op in [ops] and be
  ///   unique. Violations raise [ProtocolError]; the engine retries the batch
  ///   per-op with backoff (nothing is settled or dead-lettered).
  /// - Partial responses ARE allowed and explicitly defined: the engine
  ///   settles exactly the ops the response names and leaves the unnamed ops
  ///   pending for the next cycle. Returning a subset therefore declares that
  ///   only the named ops were processed.
  Future<List<PushResult>> pushBatch(List<PushOp> ops);

  /// Realtime doorbell; may be an empty stream (polling fallback).
  Stream<BackendHint> hints();
}
