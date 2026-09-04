/// The one canonical error taxonomy shared by every wire projection.
///
/// [canonicalErrorType] maps ANY error object to a stable category string:
/// exact subtype names for both sealed typed families ([LocalPocketError],
/// [SyncError]), the [WireException] envelope decode family, the worker
/// transport exceptions, and standard runtime errors. Anything unclassified
/// falls to [unknownErrorCategory].
///
/// The two wire projections — the contract error codec's `type` field and the
/// worker protocol's minification-stable `c` category — derive from this
/// function, so a new typed subtype fails to COMPILE in the classifier until
/// it is classified (sealed switches), and wire vocabulary drift between the
/// projections is structurally impossible.
part of 'contract.dart';

/// The fallback category for an error object nothing recognizes.
const String unknownErrorCategory = 'unknown';

/// Maps [error] to its stable wire category — the one classifier both wire
/// projections share.
String canonicalErrorType(Object error) {
  // Typed kernel errors: the sealed switch names every subtype, so the
  // compiler rejects the classifier the moment a variant is added unclassified.
  if (error is LocalPocketError) {
    return switch (error) {
      ValidationException() => 'ValidationException',
      UniqueConstraintException() => 'UniqueConstraintException',
      NotNullConstraintException() => 'NotNullConstraintException',
      CheckConstraintException() => 'CheckConstraintException',
      PrimaryKeyConstraintException() => 'PrimaryKeyConstraintException',
      ForeignKeyConstraintException() => 'ForeignKeyConstraintException',
      UnsupportedSchemaFeatureError() => 'UnsupportedSchemaFeatureError',
      FtsUnavailableError() => 'FtsUnavailableError',
      SchemaRegistrationError() => 'SchemaRegistrationError',
      SchemaTooNewError() => 'SchemaTooNewError',
      StorageError() => 'StorageError',
      RemoteOnlyError() => 'RemoteOnlyError',
      RecordNotFoundException() => 'RecordNotFoundException',
      ConflictNotFoundException() => 'ConflictNotFoundException',
      StaleCursorError() => 'StaleCursorError',
      MissingLimitError() => 'MissingLimitError',
      ConflictBlockedError() => 'ConflictBlockedError',
      DestructiveMigrationRefusedError() => 'DestructiveMigrationRefusedError',
      ReadOnlyTxError() => 'ReadOnlyTxError',
      TypedStoreMismatchError() => 'TypedStoreMismatchError',
      FieldNotSelectedError() => 'FieldNotSelectedError',
    };
  }
  // RangeError before ArgumentError: it extends it, so a later check would be
  // unreachable and range failures would be mislabeled.
  if (error is RangeError) return 'RangeError';
  if (error is ArgumentError) return 'ArgumentError';
  if (error is StateError) return 'StateError';
  if (error is FormatException) return 'FormatException';
  if (error is UnsupportedError) return 'UnsupportedError';
  // Sync failures keep their subtype identity so the engine's retry and
  // dead-letter decisions survive the boundary on every runtime.
  if (error is SyncError) {
    return switch (error) {
      TransientNetworkError() => 'TransientNetworkError',
      ServerBusyError() => 'ServerBusyError',
      ServerError() => 'ServerError',
      AuthError() => 'AuthError',
      ForbiddenError() => 'ForbiddenError',
      NotFoundError() => 'NotFoundError',
      PayloadError() => 'PayloadError',
      ProtocolError() => 'ProtocolError',
      DuplicateIdError() => 'DuplicateIdError',
      BatchFailedError() => 'BatchFailedError',
      RemoteVersionConflict() => 'RemoteVersionConflict',
      SyncIdentityError() => 'SyncIdentityError',
    };
  }
  if (error is ProtocolEnvelopeException) return 'ProtocolEnvelopeException';
  if (error is DatabaseWorkerClosedException) {
    return 'DatabaseWorkerClosedException';
  }
  if (error is ProtocolMismatchException) return 'ProtocolMismatchException';
  if (error is WireException) return 'WireException';
  return unknownErrorCategory;
}

/// {@template localpocket.database_worker_closed_exception}
/// The worker or tab hosting the database is gone. Maps to the upstream
/// `Channel to database worker is closed` condition.
/// {@endtemplate}
final class DatabaseWorkerClosedException implements Exception {
  /// {@macro localpocket.database_worker_closed_exception}
  DatabaseWorkerClosedException(
      [this.message = 'The database worker is closed.']);

  /// Human-readable description of the close condition.
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

  /// The request id of the abandoned round-trip.
  final int requestId;

  /// The operation that timed out.
  final String op;

  /// The applied timeout.
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

  /// The protocol version this end speaks.
  final int expected;

  /// The version the other end reported.
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

  /// Human-readable description of the malformed-envelope condition.
  final String message;

  @override
  String toString() => 'ProtocolEnvelopeException: $message';
}
