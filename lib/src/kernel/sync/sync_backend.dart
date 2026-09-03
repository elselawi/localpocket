/// The sync backend seam plus wire types, typed errors,
/// and PocketBase-compatible timestamp helpers.
library;

/// PocketBase's hard per-page ceiling: a list `perPage` above this is
/// rejected with a 400 (and an absent `perPage` defaults to 30). The engine
/// clamps every page size to this so a configured `maxPage` above the cap
/// still converges.
const int pbMaxPage = 500;

// ---------------------------------------------------------------------------
// Typed sync errors. The engine maps these to retry / dead-letter
// decisions; they are never strings.
// ---------------------------------------------------------------------------

/// {@template localpocket.sync_error}
/// Base class for typed synchronization failures.
/// {@endtemplate}
sealed class SyncError implements Exception {
  /// Creates a synchronization failure.
  ///
  /// {@macro localpocket.sync_error}
  SyncError([this.message = 'sync error']);

  /// Human-readable failure description.
  final String message;
  @override
  String toString() => '$runtimeType: $message';
}

/// {@template localpocket.transient_network_error}
/// Timeout / connection reset / DNS — retry with backoff.
/// {@endtemplate}
class TransientNetworkError extends SyncError {
  /// {@macro localpocket.transient_network_error}
  TransientNetworkError([super.message = 'network error']);
}

/// {@template localpocket.server_busy_error}
/// 408 / 429 — honor Retry-After; 429 throttles the whole lane.
/// {@endtemplate}
class ServerBusyError extends SyncError {
  /// {@macro localpocket.server_busy_error}
  ServerBusyError([this.retryAfter, super.message = 'server busy']);

  /// Retry-After seconds, when provided by the server.
  final String? retryAfter;
}

/// {@template localpocket.server_error}
/// 5xx — retry with backoff, escalate after N attempts.
/// {@endtemplate}
class ServerError extends SyncError {
  /// {@macro localpocket.server_error}
  ServerError([super.message = 'server error']);
}

/// {@template localpocket.auth_error}
/// 401 — refresh once, then AuthRequired (never rewrites rows).
/// {@endtemplate}
class AuthError extends SyncError {
  /// {@macro localpocket.auth_error}
  AuthError([super.message = 'auth required']);
}

/// {@template localpocket.forbidden_error}
/// 403 — quarantine, no retry.
/// {@endtemplate}
class ForbiddenError extends SyncError {
  /// {@macro localpocket.forbidden_error}
  ForbiddenError([super.message = 'forbidden']);
}

/// {@template localpocket.not_found_error}
/// 404 on a targeted fetch is AMBIGUOUS — never a delete.
/// {@endtemplate}
class NotFoundError extends SyncError {
  /// {@macro localpocket.not_found_error}
  NotFoundError([super.message = 'not found']);
}

/// {@template localpocket.payload_error}
/// 400 validation / too large — dead-letter with the server message.
/// {@endtemplate}
class PayloadError extends SyncError {
  /// {@macro localpocket.payload_error}
  PayloadError([super.message = 'invalid payload']);
}

/// {@template localpocket.protocol_error}
/// Unparseable / contract violation — log loudly.
/// {@endtemplate}
class ProtocolError extends SyncError {
  /// {@macro localpocket.protocol_error}
  ProtocolError([super.message = 'protocol error']);
}

/// {@template localpocket.duplicate_id_error}
/// A create retried after a lost response (duplicate-id).
/// {@endtemplate}
class DuplicateIdError extends SyncError {
  /// {@macro localpocket.duplicate_id_error}
  DuplicateIdError([super.message = 'duplicate id']);
}

/// {@template localpocket.sync_identity_error}
/// Sync start refused: no stable per-account identity is available. Sharing
/// one sync scope across accounts would silently bleed cursors and
/// watermarks, so the backend fails loudly instead.
/// {@endtemplate}
class SyncIdentityError extends SyncError {
  /// {@macro localpocket.sync_identity_error}
  SyncIdentityError([super.message = 'missing sync identity']);
}

/// {@template localpocket.batch_failed_error}
/// A transactional batch failed as a whole (poison item).
/// {@endtemplate}
class BatchFailedError extends SyncError {
  /// {@macro localpocket.batch_failed_error}
  BatchFailedError([super.message = 'batch failed']);
}

/// {@template localpocket.remote_version_conflict}
/// A write was rejected because the record's remote version moved since the
/// client's optimistic-concurrency read. The pusher re-fetches, re-merges
/// against [current], and retries instead of overwriting the concurrent edit.
/// {@endtemplate}
class RemoteVersionConflict extends SyncError {
  /// {@macro localpocket.remote_version_conflict}
  RemoteVersionConflict({String message = 'version conflict', this.current})
      : super(message);

  /// The remote record at the version that caused the rejection, when the
  /// backend can provide it.
  final RemoteRecord? current;
}

// ---------------------------------------------------------------------------
// Capabilities & wire types
// ---------------------------------------------------------------------------

/// {@template localpocket.backend_capabilities}
/// Capabilities negotiated with a synchronization backend.
/// {@endtemplate}
class BackendCapabilities {
  /// Creates a backend capability snapshot.
  ///
  /// {@macro localpocket.backend_capabilities}
  const BackendCapabilities({
    this.batchEnabled = false,
    this.maxBatch = 25,
    this.maxPage = 200,
  });

  /// Whether transactional remote batch writes are available.
  final bool batchEnabled;

  /// Maximum backend batch size.
  final int maxBatch;

  /// Maximum remote page size.
  final int maxPage;
}

/// {@template localpocket.stream_file_upload}
/// Replayable file source for streamed backend uploads.
/// {@endtemplate}
class StreamFileUpload {
  /// Creates a streamed upload description.
  ///
  /// {@macro localpocket.stream_file_upload}
  const StreamFileUpload({
    required this.filename,
    required this.length,
    required this.streamFactory,
  });

  /// Filename sent to the remote service.
  final String filename;

  /// Number of bytes emitted by [streamFactory].
  final int length;

  /// Creates a fresh stream for each upload attempt.
  final Future<Stream<List<int>>> Function() streamFactory;
}

/// {@template localpocket.remote_record}
/// A record received from or sent to a synchronization backend.
/// {@endtemplate}
class RemoteRecord {
  /// Creates a remote record value.
  ///
  /// {@macro localpocket.remote_record}
  const RemoteRecord({
    required this.id,
    required this.store,
    required this.updated,
    required this.data,
    this.attachments = const [],
  });

  /// Remote record ID.
  final String id;

  /// LocalPocket collection name.
  final String store;

  /// Server update timestamp used by the pull cursor.
  final String updated;

  /// Remote record payload.
  final Map<String, Object?> data;

  /// Remote attachment filenames for the backend's attachment field. The
  /// backend owns the mapping to its own wire field; the kernel sees only
  /// the generic attachment list.
  final List<String> attachments;

  /// Copies this record while replacing selected fields.
  RemoteRecord copyWith({String? updated, Map<String, Object?>? data}) =>

      /// {@macro localpocket.remote_record}
      RemoteRecord(
        id: id,
        store: store,
        updated: updated ?? this.updated,
        data: data ?? this.data,
        attachments: attachments,
      );
}

/// {@template localpocket.push_op}
/// An outbox op encoded for a single push (create vs update by [baseUpdated]).
/// One desired record state prepared for a backend push.
/// {@endtemplate}
class PushOp {
  /// {@macro localpocket.push_op}
  const PushOp({
    required this.opId,
    required this.store,
    required this.id,
    required this.dataJson,
    this.baseUpdated,
    this.upsert = false,
  });

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
}

/// {@template localpocket.push_result}
/// Result of one remote push operation.
/// {@endtemplate}
class PushResult {
  /// {@macro localpocket.push_result}
  const PushResult({
    required this.opId,
    required this.ok,
    this.record,
    this.error,
    this.pushedJson,
  });

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
}

/// Kind of event signaled by a backend realtime hint.
enum BackendHintKind {
  /// A record changed remotely (fast path / pull).
  changed,

  /// A record was deleted remotely (pull; the local copy is hidden).
  deleted,

  /// The auth token was rejected; the caller must provide a fresh one.
  authChanged,
}

/// {@template localpocket.backend_hint}
/// Backend event hint that triggers pull or fast-path processing.
/// {@endtemplate}
class BackendHint {
  /// {@macro localpocket.backend_hint}
  const BackendHint(this.store,
      [this.kind = BackendHintKind.changed, this.record]);

  /// Affected collection.
  final String store;

  /// Event category.
  final BackendHintKind kind;

  /// Fast-path payload: a `changed` hint MAY carry the full
  /// embedded record so the engine can apply it directly when the local row
  /// is clean and the event is newer — without a pull and without advancing
  /// the cursor. Null => a plain doorbell (the engine pulls).
  final RemoteRecord? record;
}

// ---------------------------------------------------------------------------
// PocketBase timestamp helpers: 'YYYY-MM-DD HH:MM:SS.mmmZ'.
// Lexicographic string comparison equals chronological order for this format.
// ---------------------------------------------------------------------------

final RegExp _pbTimestampRe =
    RegExp(r'^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})\.(\d{3})Z$');

/// Parses a PocketBase UTC timestamp (`YYYY-MM-DD HH:MM:SS.mmmZ`).
///
/// Anchored regex, so trailing garbage and missing padding are rejected, as
/// are out-of-range values (not silently normalized by `DateTime.utc`).
/// Failure raises a typed [ProtocolError].
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
  /// Safe to retry after a lost response: [id] is an idempotency key — a
  /// retry creates once or fails with [DuplicateIdError], never a second copy.
  Future<RemoteRecord> createRecord({
    required String id,
    required String store,
    required String dataJson,
  });

  /// Updates a remote record after the pusher's concurrency check.
  ///
  /// [baseUpdated] is the remote version the write is based on; an OCC-enforcing
  /// backend may reject with [RemoteVersionConflict] when the remote moved
  /// past it. Safe to retry after a lost response: [dataJson] is the FULL
  /// desired state (never a diff), so re-applying against the same version
  /// is idempotent.
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
  /// ([scopeId], [PushOp.opId]) is an idempotency key; retrying after a lost
  /// response returns the original result and never applies twice.
  ///
  /// Response contract: every [PushResult.opId] MUST reference an op in
  /// [ops] and be unique (violations raise [ProtocolError]). Partial
  /// responses are allowed: the engine settles exactly the named ops and
  /// leaves the rest pending.
  Future<List<PushResult>> pushBatch(List<PushOp> ops);

  /// Realtime doorbell; may be an empty stream (polling fallback).
  Stream<BackendHint> hints();
}

/// The neutral credential source the runtime owns: adapters bridge it onto
/// their own credential types. The bearer value never persists or logs.
abstract interface class SyncTokenSource {
  /// The current bearer value (empty when the caller has none).
  Future<String> currentToken();

  /// Identity used for sync-scoped bookkeeping, or `null` when the source
  /// cannot expose one. Backends deriving their sync scope from it MUST fail
  /// loudly on null — never share one scope across accounts.
  String? get identity;
}

/// The sync-boundary token vocabulary.
///
/// {@template localpocket.token}
/// A bearer token with an optional expiry. [expiresAt] may be null when the
/// token has no server-declared lifetime.
/// {@endtemplate}
class Token {
  /// Creates a bearer token value with optional lifetime metadata.
  ///
  /// {@macro localpocket.token}
  Token(this.value, {this.expiresAt, DateTime? issuedAt})
      : issuedAt = issuedAt ?? DateTime.now();

  /// Bearer token value.
  final String value;

  /// Expiration time, when known.
  final DateTime? expiresAt;

  /// When the token was issued (defaults to now); used to compute the
  /// remaining-fraction for proactive refresh.
  final DateTime issuedAt;

  /// Whether the token has passed its expiration time.
  bool get isExpired => expiresAt != null && DateTime.now().isAfter(expiresAt!);

  /// 1.0 (fresh) → 0.0 (expired). Used for the 75 % proactive refresh rule.
  double get remainingFraction {
    final exp = expiresAt;
    if (exp == null) return 1.0;
    final total = exp.difference(issuedAt).inMilliseconds;
    if (total <= 0) return 0.0;
    final left = exp.difference(DateTime.now()).inMilliseconds;
    return (left < 0 ? 0.0 : left / total).clamp(0.0, 1.0);
  }

  /// Refresh when 75 % of the token lifetime has elapsed.
  bool get needsProactiveRefresh => remainingFraction < 0.25;
}

/// Supplies and refreshes authentication tokens for a synchronization
/// backend. This is the vocabulary of the sync boundary — concrete backends
/// implement it; the facade consumes it; the runtime owns the bridging
/// onto [SyncTokenSource].
///
/// Implementations normally delegate to platform-secure storage and the
/// application's auth service:
///
/// ```dart
/// class MyTokens implements TokenProvider {
///   @override
///   Future<Token> currentToken() => secureStorage.readToken();
///
///   @override
///   Future<Token> refreshToken(Token current) => authApi.refresh(current);
///
///   @override
///   String get identity => 'user-123';
/// }
/// ```
///
/// Tokens are never persisted by LocalPocket in SQLite, logs, or outbox
/// payloads.
abstract class TokenProvider {
  /// The currently stored token (may be expired; the caller refreshes).
  Future<Token> currentToken();

  /// Exchange [current] (expired or near-expiry) for a fresh token.
  Future<Token> refreshToken(Token current);

  /// The stable identity the token belongs to (used for the sync scope id).
  ///
  /// Must be stable across refreshes and account switches — token values
  /// rotate, so return a stable account id (e.g. `'user-123'`), never a
  /// token fingerprint. Defaults to `null`; sync start then fails instead
  /// of sharing one scope across all accounts.
  String? get identity => null;
}

/// Builds a [SyncBackend] for the runtime's sync start command and releases
/// adapter-owned state (realtime connection, HTTP client) on stop. The
/// adapter layer supplies the implementation; the runtime depends only on
/// this seam, never on a concrete adapter.
abstract interface class SyncBackendFactory {
  /// Creates the backend and opens its realtime connection: sync start OWNS
  /// realtime, so construction and connection are one step.
  Future<SyncBackend> create({
    required Uri baseUrl,
    required SyncTokenSource tokenSource,
    required List<String> stores,
    required String identity,
  });

  /// Releases backend resources created by [create]. Safe to call once per
  /// stopped engine; a no-op for backends with nothing to release.
  Future<void> dispose(SyncBackend backend);
}
