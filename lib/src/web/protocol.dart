/// Wire protocol between the web facade (main thread) and the engine worker.
///
/// Only public-API envelopes cross this boundary. SQL never crosses it.
/// Values are structured-clone-safe Dart values; the transport layer converts
/// them to and from JSAny.
///
/// Every envelope carries the integer [webProtocolVersion]. A mismatch must
/// fail open with a typed [ProtocolMismatchException], never a generic error.
library;

/// Protocol version for every envelope. Bump on any incompatible change.
/// v2: all reads are compiled query plans (`compiled_query`); descriptor-based
/// query operations were removed.
const int webProtocolVersion = 2;

/// Names of supported operations. Unknown operations are rejected with a
/// typed [ProtocolEnvelopeException] rather than silently ignored.
class WireOp {
  static const String open = 'open';
  static const String close = 'close';
  static const String health = 'health';
  static const String workerEvent = 'worker_event';
  static const String capabilities = 'capabilities';

  // Collection CRUD & Mutation Batches
  static const String get = 'get';
  static const String mutateBatch = 'mutate_batch';

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

  // Interactive Transaction Sessions (§7.1)
  static const String txBegin = 'tx_begin';
  static const String txGet = 'tx_get';
  static const String txMutateBatch = 'tx_mutate_batch';
  static const String txSavepoint = 'tx_savepoint';
  static const String txRollbackTo = 'tx_rollback_to';
  static const String txRelease = 'tx_release';
  static const String txCommit = 'tx_commit';
  static const String txRollback = 'tx_rollback';

  // Reactive Watchers
  static const String watchQuery = 'watch_query';
  static const String watchOne = 'watch_one';
  static const String watchCancel = 'watch_cancel';
  // Sync & Auth (§8, §12)
  static const String syncStart = 'sync_start';
  static const String syncStop = 'sync_stop';
  static const String syncNow = 'sync_now';
  static const String syncStatus = 'sync_status';
  static const String authRequired = 'auth_required';
  static const String syncPause = 'sync_pause';
  static const String syncResume = 'sync_resume';
  static const String syncUpdateAuth = 'sync_update_auth';
  static const String syncSetConnectivity = 'sync_set_connectivity';

  static bool isKnown(String op) => _known.contains(op);

  /// Immutable list of operations used by worker dispatch tables.
  static Iterable<String> get allKnown => _known;

  static const Set<String> _known = {
    open,
    close,
    health,
    capabilities,
    get,
    mutateBatch,
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
    watchQuery,
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
}

/// A request envelope sent from the facade to the worker.
class WebRequest {
  final int version;
  final int requestId;
  final String op;
  final Map<String, Object?> args;

  const WebRequest({
    required this.version,
    required this.requestId,
    required this.op,
    this.args = const {},
  });

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
    if (requestId is! int) {
      throw ProtocolEnvelopeException('Request "i" must be an int.');
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

/// A response envelope sent from the worker back to the facade.
class WebResponse {
  final int version;
  final int requestId;

  /// The structured-clone-safe result on success, or null.
  final Object? result;

  /// Non-null when this response carries an error.
  final WebError? error;

  const WebResponse.success({
    required this.version,
    required this.requestId,
    this.result,
  }) : error = null;

  const WebResponse.error({
    required this.version,
    required this.requestId,
    required this.error,
  }) : result = null;

  bool get isError => error != null;

  Map<String, Object?> toJson() => {
        'v': version,
        'i': requestId,
        if (isError) 'e': error!.toJson() else 'r': result,
      };

  /// Parses a wire-safe Dart map into a response. Throws
  /// [ProtocolEnvelopeException] on any malformed field.
  static WebResponse fromJson(Map<String, Object?> json) {
    final version = json['v'];
    final requestId = json['i'];
    if (version is! int) {
      throw ProtocolEnvelopeException('Response "v" must be an int.');
    }
    if (requestId is! int) {
      throw ProtocolEnvelopeException('Response "i" must be an int.');
    }
    if (json.containsKey('e')) {
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

/// Structured error payload carried inside a [WebResponse].
class WebError {
  final String code;
  final String message;
  final Map<String, Object?>? details;

  const WebError({
    required this.code,
    required this.message,
    this.details,
  });

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
    final details =
        d is Map ? d.map((k, v) => MapEntry(k.toString(), v)) : null;
    return WebError(code: code, message: message, details: details);
  }
}

/// The worker or tab hosting the database is gone. Maps to the upstream
/// `Channel to database worker is closed` condition.
final class DatabaseWorkerClosedException implements Exception {
  final String message;
  DatabaseWorkerClosedException(
      [this.message = 'The database worker is closed.']);

  @override
  String toString() => 'DatabaseWorkerClosedException: $message';
}

/// The other end speaks a different protocol version.
final class ProtocolMismatchException implements Exception {
  final int expected;
  final int actual;
  ProtocolMismatchException({required this.expected, required this.actual});

  @override
  String toString() =>
      'ProtocolMismatchException: expected version $expected, got $actual';
}

/// A malformed envelope, an unknown operation, or an invalid field.
final class ProtocolEnvelopeException implements Exception {
  final String message;
  ProtocolEnvelopeException(this.message);

  @override
  String toString() => 'ProtocolEnvelopeException: $message';
}

/// A typed LocalPocket error that crossed the wire from the worker.
final class RemoteLocalPocketException implements Exception {
  final String code;
  final String message;
  final Map<String, Object?>? details;
  RemoteLocalPocketException({
    required this.code,
    required this.message,
    this.details,
  });

  @override
  String toString() => 'RemoteLocalPocketException[$code]: $message';
}

/// Converts a wire error into the closest typed local exception.
Object decodeError(WebError error) {
  switch (error.code) {
    case WireErrorCode.protocolMismatch:
      final details = error.details;
      return ProtocolMismatchException(
        expected: (details?['expected'] as int?) ?? webProtocolVersion,
        actual: (details?['actual'] as int?) ?? -1,
      );
    case WireErrorCode.workerClosed:
      return DatabaseWorkerClosedException(error.message);
    case WireErrorCode.aborted:
      return ProtocolEnvelopeException('Operation aborted.');
    case WireErrorCode.localpocket:
      return RemoteLocalPocketException(
        code: (error.details?['type'] as String?) ?? 'unknown',
        message: error.message,
        details: error.details,
      );
    default:
      return RemoteLocalPocketException(
          code: error.code, message: error.message);
  }
}
