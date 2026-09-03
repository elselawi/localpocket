/// Wire protocol between the web facade (main thread) and the engine worker.
///
/// Only public-API envelopes cross this boundary; SQL never does. Values are
/// structured-clone-safe Dart values. Every envelope carries the integer
/// [webProtocolVersion]; a mismatch must fail with a typed exception.
library;

// Envelope fields are documented above; per-constant docs would add noise.
// ignore_for_file: public_member_api_docs

import '../../../contract/contract.dart' show WireException;
import '../../../kernel/errors.dart';
import '../../../kernel/sync/sync_backend.dart';

/// Protocol version for every envelope. Bump on incompatible changes.
/// v2: all reads are compiled query plans. v3: response `hasMore` → `hasNext`
/// (direction-explicit pagination) plus `firstRow` for backward cursor minting.
const int webProtocolVersion = 3;

/// Names of supported operations. Unknown operations are rejected with a
/// typed [ProtocolEnvelopeException] rather than silently ignored.
class WireOp {
  static const String open = 'open';

  /// Typed contract envelope: requests travel as the contract codec encodes
  /// them, and the kernel answers through the same handler the direct runtime
  /// uses. The only other op is `open` (worker-side store re-registration).
  static const String contractRequest = 'contract_request';

  /// Committed facts and watch snapshots, contract-event encoded.
  static const String contractEvent = 'contract_event';

  static bool isKnown(String op) => _known.contains(op);

  /// Immutable list of operations used by worker dispatch tables.
  static Iterable<String> get allKnown => _known;

  static const Set<String> _known = {
    open,
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
    if (error is ConflictNotFoundException) {
      return 'ConflictNotFoundException';
    }
    if (error is SchemaTooNewError) return 'SchemaTooNewError';
    if (error is FtsUnavailableError) return 'FtsUnavailableError';
    // Checked before SchemaRegistrationError: it is a subtype of it, so
    // this must come first to be reachable.
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
    if (error is TypedStoreMismatchError) return 'TypedStoreMismatchError';
    if (error is FieldNotSelectedError) return 'FieldNotSelectedError';
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
    if (error is RemoteVersionConflict) return 'RemoteVersionConflict';
    if (error is SyncIdentityError) return 'SyncIdentityError';
    return 'SyncError';
  }

  // Malformed contract envelope: classified consistently across legs so a
  // decode failure on web matches the loopback behavior.
  if (error is WireException) return 'WireException';

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

  /// Parses a wire-safe Dart map; throws [ProtocolEnvelopeException] on any
  /// malformed field — never a cast error.
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

  /// Parses a wire-safe Dart map, checking [expectedVersion] here so every
  /// response path enforces the protocol version, not just the worker path.
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
/// A request to the worker did not complete within the per-request timeout.
///
/// The sender stays usable; a late response is abandoned.
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
