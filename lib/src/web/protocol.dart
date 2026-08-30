/// Wire protocol between the web facade (main thread) and the engine worker.
///
/// Only public-API envelopes cross this boundary. SQL never crosses it.
/// Values are structured-clone-safe Dart values; the transport layer converts
/// them to and from JSAny.
///
/// Every envelope carries the integer [webProtocolVersion]. A mismatch must
/// fail open with a typed [ProtocolMismatchException], never a generic error.
library;

// Wire constants and envelope fields are documented by their protocol
// comments above; documenting every individual constant would add noise.
// ignore_for_file: public_member_api_docs

import '../core/errors.dart';
import '../sync/sync_backend.dart';

/// Protocol version for every envelope. Bump on any incompatible change.
/// v2: all reads are compiled query plans (`compiled_query`); descriptor-based
/// query operations were removed.
/// v3: the compiled-query response envelope renames `hasMore` to `hasNext`
/// (bidirectional pagination — the flag is direction-explicit) and adds
/// `firstRow` alongside `lastRow` for backward cursor minting.
const int webProtocolVersion = 3;

/// Names of supported operations. Unknown operations are rejected with a
/// typed [ProtocolEnvelopeException] rather than silently ignored.
class WireOp {
  static const String open = 'open';
  static const String close = 'close';
  static const String health = 'health';
  static const String workerEvent = 'worker_event';
  static const String recordEvent = 'record_event';
  static const String capabilities = 'capabilities';

  /// The single read operation: an engine-compiled query plan (SQL + bound
  /// args + schema fingerprint). Every query, aggregate, search, and
  /// transaction read travels as this envelope.
  static const String compiledQuery = 'compiled_query';

  // Maintenance
  static const String analyze = 'analyze';
  static const String walCheckpoint = 'wal_checkpoint';
  static const String vacuum = 'vacuum';
  static const String pruneOutbox = 'prune_outbox';
  static const String compact = 'compact';
  static const String runMaintenance = 'run_maintenance';

  // Interactive transaction sessions
  static const String txBegin = 'tx_begin';
  static const String txGet = 'tx_get';
  static const String txMutateBatch = 'tx_mutate_batch';
  static const String txSavepoint = 'tx_savepoint';
  static const String txRollbackTo = 'tx_rollback_to';
  static const String txRelease = 'tx_release';
  static const String txCommit = 'tx_commit';
  static const String txRollback = 'tx_rollback';

  // Reactive Watchers
  static const String watchOne = 'watch_one';
  static const String watchCancel = 'watch_cancel';
  // Sync & auth
  static const String syncStart = 'sync_start';
  static const String syncStop = 'sync_stop';
  static const String syncNow = 'sync_now';
  static const String syncStatus = 'sync_status';
  static const String authRequired = 'auth_required';
  static const String syncPause = 'sync_pause';
  static const String syncResume = 'sync_resume';
  static const String syncUpdateAuth = 'sync_update_auth';
  static const String syncSetConnectivity = 'sync_set_connectivity';

  // File operations (§ files). Bounded chunked upload, then metadata RPC
  // delegating to the worker-owned pocket.files.
  static const String fileUploadBegin = 'file_upload_begin';
  static const String fileUploadChunk = 'file_upload_chunk';
  static const String fileUploadFinish = 'file_upload_finish';
  static const String fileUploadAbort = 'file_upload_abort';
  static const String fileList = 'file_list';
  static const String fileOpen = 'file_open';
  static const String fileRemove = 'file_remove';
  static const String fileGc = 'file_gc';
  static const String fileEnforceStorageCap = 'file_enforce_storage_cap';

  /// Reports whether the worker-owned blob store is durable (OPFS-backed)
  /// rather than a volatile in-memory fallback. `db.files.isBlobStorageDurable`
  /// on the facade.
  static const String fileStorageStatus = 'file_storage_status';

  // Conflicts API (§ conflicts). Delegates to the engine's `pocket.conflicts`.
  static const String conflictsList = 'conflicts_list';
  static const String conflictsGet = 'conflicts_get';
  static const String conflictsResolve = 'conflicts_resolve';
  static const String conflictsAcceptLocal = 'conflicts_accept_local';
  static const String conflictsAcceptRemote = 'conflicts_accept_remote';
  static const String conflictsWatch = 'conflicts_watch';

  /// The typed contract envelope: the request travels exactly as the contract
  /// codec encodes it and the kernel answers through the same command handler
  /// the direct runtime uses. Coexists with the string-op registry until every
  /// family routes through it; the two envelopes share one kernel.
  static const String contractRequest = 'contract_request';

  /// Committed facts and watch snapshots, contract-event encoded.
  static const String contractEvent = 'contract_event';

  static bool isKnown(String op) => _known.contains(op);

  /// Immutable list of operations used by worker dispatch tables.
  static Iterable<String> get allKnown => _known;

  static const Set<String> _known = {
    open,
    close,
    health,
    workerEvent,
    recordEvent,
    capabilities,
    compiledQuery,
    analyze,
    walCheckpoint,
    vacuum,
    pruneOutbox,
    compact,
    runMaintenance,
    txBegin,
    txGet,
    txMutateBatch,
    txSavepoint,
    txRollbackTo,
    txRelease,
    txCommit,
    txRollback,
    watchOne,
    watchCancel,
    syncStart,
    syncStop,
    syncNow,
    syncStatus,
    authRequired,
    syncPause,
    syncResume,
    syncUpdateAuth,
    syncSetConnectivity,
    fileUploadBegin,
    fileUploadChunk,
    fileUploadFinish,
    fileUploadAbort,
    fileList,
    fileOpen,
    fileRemove,
    fileGc,
    fileEnforceStorageCap,
    fileStorageStatus,
    conflictsList,
    conflictsGet,
    conflictsResolve,
    conflictsAcceptLocal,
    conflictsAcceptRemote,
    conflictsWatch,
    contractRequest,
    contractEvent,
  };
}

/// Stable error codes sent across the wire.
class WireErrorCode {
  /// The other end speaks a different protocol version.
  static const String protocolMismatch = 'protocol_mismatch';

  /// The worker or tab hosting the database is gone.
  static const String workerClosed = 'worker_closed';

  /// The envelope was malformed or requested an unknown operation.
  static const String protocolEnvelope = 'protocol_envelope';

  /// The operation was aborted.
  static const String aborted = 'aborted';

  /// A typed LocalPocket error (validation, storage, ...) was thrown remotely.
  static const String localpocket = 'localpocket';

  /// Fallback category when an unclassified remote exception occurs.
  static const String unknown = 'unknown';
}

/// Maps an arbitrary error object to a stable, minification-safe wire error
/// category string.
String stableWireErrorType(Object error) {
  // LocalPocket core errors
  if (error is LocalPocketError) {
    if (error is ValidationException) return 'ValidationException';
    if (error is UniqueConstraintException) return 'UniqueConstraintException';
    if (error is NotNullConstraintException) {
      return 'NotNullConstraintException';
    }
    if (error is CheckConstraintException) return 'CheckConstraintException';
    if (error is PrimaryKeyConstraintException) {
      return 'PrimaryKeyConstraintException';
    }
    if (error is ForeignKeyConstraintException) {
      return 'ForeignKeyConstraintException';
    }
    if (error is StorageError) return 'StorageError';
    if (error is RecordNotFoundException) return 'RecordNotFoundException';
    if (error is SchemaTooNewError) return 'SchemaTooNewError';
    if (error is FtsUnavailableError) return 'FtsUnavailableError';
    // UnsupportedSchemaFeatureError is a SchemaRegistrationError subtype, so
    // this must be checked FIRST or it is never reached.
    if (error is UnsupportedSchemaFeatureError) {
      return 'UnsupportedSchemaFeatureError';
    }
    if (error is SchemaRegistrationError) return 'SchemaRegistrationError';
    if (error is StaleCursorError) return 'StaleCursorError';
    if (error is MissingLimitError) return 'MissingLimitError';
    if (error is ConflictBlockedError) return 'ConflictBlockedError';
    if (error is DestructiveMigrationRefusedError) {
      return 'DestructiveMigrationRefusedError';
    }
    if (error is ReadOnlyTxError) return 'ReadOnlyTxError';
    return 'LocalPocketError';
  }

  // Sync & transport errors
  if (error is SyncError) {
    if (error is TransientNetworkError) return 'TransientNetworkError';
    if (error is ServerBusyError) return 'ServerBusyError';
    if (error is ServerError) return 'ServerError';
    if (error is AuthError) return 'AuthError';
    if (error is ForbiddenError) return 'ForbiddenError';
    if (error is NotFoundError) return 'NotFoundError';
    if (error is PayloadError) return 'PayloadError';
    if (error is ProtocolError) return 'ProtocolError';
    if (error is DuplicateIdError) return 'DuplicateIdError';
    if (error is BatchFailedError) return 'BatchFailedError';
    return 'SyncError';
  }

  // Standard Dart exceptions
  if (error is ProtocolEnvelopeException) return 'ProtocolEnvelopeException';
  if (error is DatabaseWorkerClosedException) {
    return 'DatabaseWorkerClosedException';
  }
  if (error is ProtocolMismatchException) return 'ProtocolMismatchException';
  if (error is RangeError) return 'RangeError';
  if (error is StateError) return 'StateError';
  if (error is ArgumentError) return 'ArgumentError';
  if (error is FormatException) return 'FormatException';
  if (error is UnsupportedError) return 'UnsupportedError';

  return WireErrorCode.unknown;
}

/// {@template localpocket.web_request}
/// A request envelope sent from the facade to the worker.
/// {@endtemplate}
class WebRequest {
  /// {@macro localpocket.web_request}
  const WebRequest({
    required this.version,
    required this.requestId,
    required this.op,
    this.args = const {},
  });

  final int version;
  final int requestId;
  final String op;
  final Map<String, Object?> args;

  Map<String, Object?> toJson() => {
        'v': version,
        'i': requestId,
        'op': op,
        'a': args,
      };

  /// Parses a wire-safe Dart map into a request. Throws
  /// [ProtocolEnvelopeException] on any malformed field — never a cast error.
  static WebRequest fromJson(Map<String, Object?> json) {
    final version = json['v'];
    final requestId = json['i'];
    final op = json['op'];
    final args = json['a'];
    if (version is! int) {
      throw ProtocolEnvelopeException('Request "v" must be an int.');
    }
    if (requestId is! int || requestId < 0) {
      throw ProtocolEnvelopeException(
          'Request "i" must be a non-negative int.');
    }
    if (op is! String || !WireOp.isKnown(op)) {
      throw ProtocolEnvelopeException('Unknown request operation: $op');
    }
    if (args is! Map) {
      throw ProtocolEnvelopeException('Request "a" must be a map.');
    }
    return WebRequest(
      version: version,
      requestId: requestId,
      op: op,
      args: args.map((k, v) => MapEntry(k.toString(), v)),
    );
  }
}

/// {@template localpocket.web_response}
/// A response envelope sent from the worker back to the facade.
/// {@endtemplate}
class WebResponse {
  /// {@macro localpocket.web_response}
  const WebResponse.success({
    required this.version,
    required this.requestId,
    this.result,
  }) : error = null;

  /// {@macro localpocket.web_response}
  const WebResponse.error({
    required this.version,
    required this.requestId,
    required this.error,
  }) : result = null;

  final int version;
  final int requestId;

  /// The structured-clone-safe result on success, or null.
  final Object? result;

  /// Non-null when this response carries an error.
  final WebError? error;

  bool get isError => error != null;

  Map<String, Object?> toJson() => {
        'v': version,
        'i': requestId,
        if (isError) 'e': error!.toJson() else 'r': result,
      };

  /// Parses a wire-safe Dart map into a response. Throws
  /// [ProtocolEnvelopeException] on any malformed field. When supplied,
  /// [expectedVersion] is checked here so every response path enforces the
  /// protocol version, not only the worker request path.
  static WebResponse fromJson(Map<String, Object?> json,
      {int? expectedVersion}) {
    final version = json['v'];
    final requestId = json['i'];
    if (version is! int) {
      throw ProtocolEnvelopeException('Response "v" must be an int.');
    }
    if (expectedVersion != null && version != expectedVersion) {
      throw ProtocolMismatchException(
          expected: expectedVersion, actual: version);
    }
    if (requestId is! int || requestId < 0) {
      throw ProtocolEnvelopeException(
          'Response "i" must be a non-negative int.');
    }
    final hasError = json.containsKey('e');
    final hasResult = json.containsKey('r');
    if (hasError == hasResult) {
      throw ProtocolEnvelopeException(
          'Response must contain exactly one of "r" or "e".');
    }
    if (hasError) {
      final e = json['e'];
      if (e is! Map) {
        throw ProtocolEnvelopeException('Response "e" must be a map.');
      }
      return WebResponse.error(
        version: version,
        requestId: requestId,
        error: WebError.fromJson(e.map((k, v) => MapEntry(k.toString(), v))),
      );
    }
    return WebResponse.success(
        version: version, requestId: requestId, result: json['r']);
  }
}

/// {@template localpocket.web_error}
/// Structured error payload carried inside a [WebResponse].
/// {@endtemplate}
class WebError {
  /// {@macro localpocket.web_error}
  const WebError({
    required this.code,
    required this.message,
    this.details,
  });

  final String code;
  final String message;
  final Map<String, Object?>? details;

  Map<String, Object?> toJson() => {
        'c': code,
        'm': message,
        if (details != null) 'd': details!,
      };

  static WebError fromJson(Map<String, Object?> json) {
    final code = json['c'];
    final message = json['m'];
    if (code is! String) {
      throw ProtocolEnvelopeException('Error "c" must be a string.');
    }
    if (message is! String) {
      throw ProtocolEnvelopeException('Error "m" must be a string.');
    }
    final d = json['d'];
    Map<String, Object?>? details;
    if (d != null) {
      if (d is! Map) {
        throw ProtocolEnvelopeException('Error "d" must be a map.');
      }
      final rawDetails = d as Map<Object?, Object?>;
      details = rawDetails.map(
        (key, value) => MapEntry(key.toString(), value),
      );
    }
    return WebError(code: code, message: message, details: details);
  }
}

/// {@template localpocket.database_worker_closed_exception}
/// The worker or tab hosting the database is gone. Maps to the upstream
/// `Channel to database worker is closed` condition.
/// {@endtemplate}
final class DatabaseWorkerClosedException implements Exception {
  /// {@macro localpocket.database_worker_closed_exception}
  DatabaseWorkerClosedException(
      [this.message = 'The database worker is closed.']);

  final String message;

  @override
  String toString() => 'DatabaseWorkerClosedException: $message';
}

/// {@template localpocket.database_worker_timeout_exception}
/// A request to the worker did not complete within the sender's configured
/// per-request timeout.
///
/// The sender stays usable: the worker may still eventually respond, but that
/// response is abandoned and the caller has already failed.
/// {@endtemplate}
final class DatabaseWorkerTimeoutException implements Exception {
  /// {@macro localpocket.database_worker_timeout_exception}
  DatabaseWorkerTimeoutException({
    required this.requestId,
    required this.op,
    required this.timeout,
  });

  final int requestId;
  final String op;
  final Duration timeout;

  @override
  String toString() => 'DatabaseWorkerTimeoutException: "$op" (request '
      '$requestId) did not complete within ${timeout.inMilliseconds} ms.';
}

/// {@template localpocket.protocol_mismatch_exception}
/// The other end speaks a different protocol version.
/// {@endtemplate}
final class ProtocolMismatchException implements Exception {
  /// {@macro localpocket.protocol_mismatch_exception}
  ProtocolMismatchException({required this.expected, required this.actual});

  final int expected;
  final int actual;

  @override
  String toString() =>
      'ProtocolMismatchException: expected version $expected, got $actual';
}

/// {@template localpocket.protocol_envelope_exception}
/// A malformed envelope, an unknown operation, or an invalid field.
/// {@endtemplate}
final class ProtocolEnvelopeException implements Exception {
  /// {@macro localpocket.protocol_envelope_exception}
  ProtocolEnvelopeException(this.message);

  final String message;

  @override
  String toString() => 'ProtocolEnvelopeException: $message';
}

/// {@template localpocket.remote_local_pocket_exception}
/// A typed LocalPocket error that crossed the wire from the worker.
/// {@endtemplate}
final class RemoteLocalPocketException implements Exception {
  /// {@macro localpocket.remote_local_pocket_exception}
  RemoteLocalPocketException({
    required this.code,
    required this.message,
    this.details,
  });

  final String code;
  final String message;
  final Map<String, Object?>? details;

  @override
  String toString() => 'RemoteLocalPocketException[$code]: $message';
}

/// Converts a wire error into the closest typed local exception.
Object decodeError(WebError error) {
  switch (error.code) {
    case WireErrorCode.protocolMismatch:
      final details = error.details;
      final expected = details?['expected'];
      final actual = details?['actual'];
      return ProtocolMismatchException(
        expected: expected is int ? expected : webProtocolVersion,
        actual: actual is int ? actual : -1,
      );
    case WireErrorCode.workerClosed:
      return DatabaseWorkerClosedException(error.message);
    case WireErrorCode.aborted:
      return ProtocolEnvelopeException('Operation aborted.');
    case WireErrorCode.localpocket:
      final type = error.details?['type'];
      return RemoteLocalPocketException(
        code: type is String ? type : 'unknown',
        message: error.message,
        details: error.details,
      );
    default:
      return RemoteLocalPocketException(
          code: error.code, message: error.message);
  }
}
