/// Wire codecs for the page-executed sync backend proxy.
///
/// The worker's [ProxySyncBackend] forwards every `SyncBackend` method over
/// the callback channel (`callbackChannelSyncBackend`); the page's
/// `SyncBackendServer` executes the caller's real backend and answers. This
/// library owns the entire vocabulary of that channel so both sides share
/// one scheme:
///
/// - **One multiplexed channel.** Every invocation carries a `method` field
///   (see the per-method `encode*`/`decode*` pairs below); there is no
///   per-method channel name to keep in sync.
/// - **Errors ride as values, never as failed callback envelopes.** A method
///   answer is `{'ok': true, 'result': ...}` or `{'ok': false, 'error': ...}`
///   ([decodeBackendResponse]); a page failure that is not a `SyncError`
///   travels as `{'ok': false, 'pageError': ...}` and reconstructs as a
///   typed [ValidationException] on the worker. Sync errors ALWAYS
///   reconstruct as their exact [SyncError] subtype — never as strings.
/// - **Strict decoding.** Absent values take their documented default;
///   present-but-wrong-typed values throw [ValidationException] naming the
///   failing field. There is no `x is T ? x : fallback` anywhere here.
/// - **Bytes are base64** (`encodeBytes`), chunked at [proxyChunkBytes] in
///   both directions by a begin → N-chunk → finish session (see
///   `sync_proxy.dart` and `platform/web/page/sync_server.dart`).
///
/// Idempotency is transparent: `PushOp.opId` and the client-supplied record
/// id cross untouched — the proxy never re-keys, reinterprets, or retries.
library;

import 'dart:convert' show base64Decode, base64Encode;
import 'dart:typed_data';

import '../errors.dart';
import '../page_callbacks.dart' show stringKeyedDeepMap;
import 'sync_backend.dart';

/// The callback channel the proxy sync backend multiplexes on.
const String callbackChannelSyncBackend = 'syncBackend';

/// Chunk size for byte transfers across the channel (uploads and
/// downloads), matching the facade file-upload chunking precedent.
const int proxyChunkBytes = 256 * 1024;

// ---------------------------------------------------------------------------
// Bytes
// ---------------------------------------------------------------------------

/// Encodes a byte chunk as base64 for the channel.
String encodeBytes(List<int> bytes) => base64Encode(bytes);

/// Decodes a strict base64 byte chunk. Absent is a caller decision (checked
/// before calling); a present non-string value throws.
Uint8List decodeBytes(Object? raw, {required String where}) {
  if (raw is String) return Uint8List.fromList(base64Decode(raw));
  throw ValidationException('"$where" must be a base64 string.');
}

// ---------------------------------------------------------------------------
// Response envelope
// ---------------------------------------------------------------------------

/// Wraps a successful method result as the channel's answer envelope.
Map<String, Object?> encodeBackendResult(Object? result) =>
    {'ok': true, 'result': result};

/// Wraps a typed [SyncError] as the channel's answer envelope.
Map<String, Object?> encodeBackendError(SyncError error) =>
    {'ok': false, 'error': encodeSyncError(error)};

/// Wraps a page-side failure that is not a [SyncError] (a bug, a malformed
/// request) as the channel's answer envelope. The worker reconstructs a
/// [ValidationException] — the original class cannot cross the boundary.
Map<String, Object?> encodeBackendPageError(Object error) =>
    {'ok': false, 'pageError': error.toString()};

/// Decodes one method answer: returns the result on success, throws the
/// decoded error (exact subtype — sync errors by default, or whatever
/// [decodeError] reconstructs, e.g. the blob-store errors) for encoded
/// failures, and a [ValidationException] for page-side failures or a
/// malformed envelope.
Object? decodeBackendResponse(
  Object? raw, {
  required String where,
  Object Function(Object? raw, {required String where}) decodeError =
      decodeSyncError,
}) {
  final map = _requireMap(raw, where);
  final ok = map['ok'];
  if (ok is! bool) {
    throw ValidationException('"ok" at $where must be a bool.');
  }
  if (ok) return map['result'];
  final hasError = map.containsKey('error');
  final hasPageError = map.containsKey('pageError');
  if (hasError == hasPageError) {
    throw ValidationException(
        'A failed answer at $where must carry exactly one of "error" '
        '(typed error) or "pageError".');
  }
  if (hasError) {
    throw decodeError(map['error'], where: where);
  }
  final pageError = map['pageError'];
  if (pageError is! String) {
    throw ValidationException('"pageError" at $where must be a string.');
  }
  throw ValidationException(
      'The page-side $where failed: $pageError');
}

// ---------------------------------------------------------------------------
// SyncError taxonomy
// ---------------------------------------------------------------------------

/// Encodes any [SyncError] as a typed wire map (`kind` + fields). Every
/// subtype has an exact case — a new taxonomy member must extend this
/// switch or it cannot cross the channel.
Map<String, Object?> encodeSyncError(SyncError error) => switch (error) {
      TransientNetworkError() => _syncErrorMap('transientNetwork', error),
      ServerError() => _syncErrorMap('serverError', error),
      final ServerBusyError e => {
          ..._syncErrorMap('serverBusy', e),
          if (e.retryAfter != null) 'retryAfter': e.retryAfter!,
        },
      AuthError() => _syncErrorMap('auth', error),
      ForbiddenError() => _syncErrorMap('forbidden', error),
      NotFoundError() => _syncErrorMap('notFound', error),
      PayloadError() => _syncErrorMap('payload', error),
      ProtocolError() => _syncErrorMap('protocol', error),
      DuplicateIdError() => _syncErrorMap('duplicateId', error),
      SyncIdentityError() => _syncErrorMap('syncIdentity', error),
      BatchFailedError() => _syncErrorMap('batchFailed', error),
      final RemoteVersionConflict e => {
          ..._syncErrorMap('remoteVersionConflict', e),
          if (e.current != null) 'current': encodeRemoteRecord(e.current!),
        },
    };

Map<String, Object?> _syncErrorMap(String kind, SyncError error) =>
    {'kind': kind, 'message': error.message};

/// Decodes a strict [SyncError] of the exact encoded subtype. Unknown kinds
/// and wrong-typed fields throw [ValidationException] — an error never
/// degrades to a string or to a different subtype.
SyncError decodeSyncError(Object? raw, {required String where}) {
  final map = _requireMap(raw, where);
  final kind = _requireString(map['kind'], where, 'kind');
  final message = map['message'];
  if (message != null && message is! String) {
    throw ValidationException('"message" at $where must be a string.');
  }
  final m = message as String?;
  switch (kind) {
    case 'transientNetwork':
      return TransientNetworkError(m ?? 'network error');
    case 'serverError':
      return ServerError(m ?? 'server error');
    case 'serverBusy':
      final retryAfter = map['retryAfter'];
      if (retryAfter != null && retryAfter is! String) {
        throw ValidationException('"retryAfter" at $where must be a string.');
      }
      return ServerBusyError(retryAfter as String?, m ?? 'server busy');
    case 'auth':
      return AuthError(m ?? 'auth required');
    case 'forbidden':
      return ForbiddenError(m ?? 'forbidden');
    case 'notFound':
      return NotFoundError(m ?? 'not found');
    case 'payload':
      return PayloadError(m ?? 'invalid payload');
    case 'protocol':
      return ProtocolError(m ?? 'protocol error');
    case 'duplicateId':
      return DuplicateIdError(m ?? 'duplicate id');
    case 'syncIdentity':
      return SyncIdentityError(m ?? 'missing sync identity');
    case 'batchFailed':
      return BatchFailedError(m ?? 'batch failed');
    case 'remoteVersionConflict':
      final current =
          map.containsKey('current') && map['current'] != null
              ? decodeRemoteRecord(map['current'], where: '$where.current')
              : null;
      return RemoteVersionConflict(
          message: m ?? 'version conflict', current: current);
    default:
      throw ValidationException('Unknown sync error kind "$kind" at $where.');
  }
}

// ---------------------------------------------------------------------------
// RemoteRecord
// ---------------------------------------------------------------------------

/// Encodes a [RemoteRecord] for the channel.
Map<String, Object?> encodeRemoteRecord(RemoteRecord record) => {
      'id': record.id,
      'store': record.store,
      'updated': record.updated,
      'data': record.data,
      'attachments': record.attachments,
    };

/// Decodes a strict [RemoteRecord]. `attachments` is absent-optional (the
/// documented default is the empty list); every other field is required and
/// wrong-typed values throw.
RemoteRecord decodeRemoteRecord(Object? raw, {required String where}) {
  final map = _requireMap(raw, where);
  final attachments = map['attachments'];
  final List<Object?>? rawAttachments =
      attachments == null ? null : _requireList(attachments, where, 'attachments');
  return RemoteRecord(
    id: _requireString(map['id'], where, 'id'),
    store: _requireString(map['store'], where, 'store'),
    updated: _requireString(map['updated'], where, 'updated'),
    data: _requireDocument(map['data'], where, 'data'),
    attachments: [
      if (rawAttachments != null)
        for (final item in rawAttachments)
          if (item is String) item else throw ValidationException(
              '"attachments" at $where must contain only strings.'),
    ],
  );
}

// ---------------------------------------------------------------------------
// PushOp / PushResult
// ---------------------------------------------------------------------------

/// Encodes a [PushOp] for the channel. `opId` crosses untouched — it is the
/// backend's idempotency key.
Map<String, Object?> encodePushOp(PushOp op) => {
      'opId': op.opId,
      'store': op.store,
      'id': op.id,
      'dataJson': op.dataJson,
      if (op.baseUpdated != null) 'baseUpdated': op.baseUpdated!,
      'upsert': op.upsert,
    };

/// Decodes a strict [PushOp]. `baseUpdated` is absent-optional (null means
/// the create path); `upsert` defaults to false when absent.
PushOp decodePushOp(Object? raw, {required String where}) {
  final map = _requireMap(raw, where);
  final baseUpdated = map['baseUpdated'];
  if (baseUpdated != null && baseUpdated is! String) {
    throw ValidationException('"baseUpdated" at $where must be a string.');
  }
  final upsert = map['upsert'];
  if (upsert != null && upsert is! bool) {
    throw ValidationException('"upsert" at $where must be a bool.');
  }
  return PushOp(
    opId: _requireString(map['opId'], where, 'opId'),
    store: _requireString(map['store'], where, 'store'),
    id: _requireString(map['id'], where, 'id'),
    dataJson: _requireString(map['dataJson'], where, 'dataJson'),
    baseUpdated: baseUpdated as String?,
    upsert: upsert as bool? ?? false,
  );
}

/// Encodes a [PushResult] for the channel.
Map<String, Object?> encodePushResult(PushResult result) => {
      'opId': result.opId,
      'ok': result.ok,
      if (result.record != null) 'record': encodeRemoteRecord(result.record!),
      if (result.error != null) 'error': result.error!,
      if (result.pushedJson != null) 'pushedJson': result.pushedJson!,
    };

/// Decodes a strict [PushResult]; optional fields are absent-optional.
PushResult decodePushResult(Object? raw, {required String where}) {
  final map = _requireMap(raw, where);
  final record = map['record'];
  final error = map['error'];
  final pushedJson = map['pushedJson'];
  if (record != null && record is! Map) {
    throw ValidationException('"record" at $where must be a map.');
  }
  if (error != null && error is! String) {
    throw ValidationException('"error" at $where must be a string.');
  }
  if (pushedJson != null && pushedJson is! String) {
    throw ValidationException('"pushedJson" at $where must be a string.');
  }
  return PushResult(
    opId: _requireString(map['opId'], where, 'opId'),
    ok: _requireBool(map['ok'], where, 'ok'),
    record: record == null
        ? null
        : decodeRemoteRecord(record, where: '$where.record'),
    error: error as String?,
    pushedJson: pushedJson as String?,
  );
}

// ---------------------------------------------------------------------------
// Capabilities & hints
// ---------------------------------------------------------------------------

/// Encodes [BackendCapabilities] for the channel.
Map<String, Object?> encodeBackendCapabilities(BackendCapabilities caps) => {
      'batchEnabled': caps.batchEnabled,
      'maxBatch': caps.maxBatch,
      'maxPage': caps.maxPage,
    };

/// Decodes strict [BackendCapabilities]; absent fields take the documented
/// constructor defaults.
BackendCapabilities decodeBackendCapabilities(Object? raw,
    {required String where}) {
  final map = _requireMap(raw, where);
  return BackendCapabilities(
    batchEnabled:
        map.containsKey('batchEnabled') && map['batchEnabled'] != null
            ? _requireBool(map['batchEnabled'], where, 'batchEnabled')
            : false,
    maxBatch: map.containsKey('maxBatch') && map['maxBatch'] != null
        ? _requireInt(map['maxBatch'], where, 'maxBatch')
        : 25,
    maxPage: map.containsKey('maxPage') && map['maxPage'] != null
        ? _requireInt(map['maxPage'], where, 'maxPage')
        : 200,
  );
}

/// Encodes a [BackendHint] for the channel.
Map<String, Object?> encodeBackendHint(BackendHint hint) => {
      'store': hint.store,
      'kind': hint.kind.name,
      if (hint.record != null) 'record': encodeRemoteRecord(hint.record!),
    };

/// Decodes a strict [BackendHint]; the record payload is absent-optional
/// (null means a plain doorbell).
BackendHint decodeBackendHint(Object? raw, {required String where}) {
  final map = _requireMap(raw, where);
  final kind = _requireString(map['kind'], where, 'kind');
  final known = BackendHintKind.values.map((k) => k.name).contains(kind);
  if (!known) {
    throw ValidationException('"kind" at $where is not a known '
        'BackendHintKind: $kind');
  }
  final record = map['record'];
  return BackendHint(
    _requireString(map['store'], where, 'store'),
    BackendHintKind.values.firstWhere((k) => k.name == kind),
    record == null
        ? null
        : decodeRemoteRecord(record, where: '$where.record'),
  );
}

// ---------------------------------------------------------------------------
// Strict field helpers
// ---------------------------------------------------------------------------

/// Decodes a strict list of [RemoteRecord]s (rows of a change page).
List<RemoteRecord> decodeRemoteRecordList(Object? raw,
    {required String where}) {
  final list = _requireList(raw, where, 'records');
  return [
    for (final (i, item) in list.indexed)
      decodeRemoteRecord(item, where: '$where.rows[$i]'),
  ];
}

/// Decodes a strict list of [PushResult]s (a batch push answer).
List<PushResult> decodePushResultList(Object? raw, {required String where}) {
  final list = _requireList(raw, where, 'results');
  return [
    for (final (i, item) in list.indexed)
      decodePushResult(item, where: '$where.results[$i]'),
  ];
}

Map<String, Object?> _requireMap(Object? raw, String where) {
  if (raw is Map) return stringKeyedDeepMap(raw);
  throw ValidationException('The value at $where must be a map.');
}

Map<String, Object?> _requireDocument(Object? raw, String where, String what) {
  if (raw is Map) return stringKeyedDeepMap(raw);
  throw ValidationException('"$what" at $where must be a map.');
}

List<Object?> _requireList(Object? raw, String where, String what) {
  if (raw is List) return raw;
  throw ValidationException('"$what" at $where must be a list.');
}

String _requireString(Object? raw, String where, String what) {
  if (raw is String) return raw;
  throw ValidationException('"$what" at $where must be a string.');
}

bool _requireBool(Object? raw, String where, String what) {
  if (raw is bool) return raw;
  throw ValidationException('"$what" at $where must be a bool.');
}

int _requireInt(Object? raw, String where, String what) {
  if (raw is int) return raw;
  throw ValidationException('"$what" at $where must be an int.');
}
