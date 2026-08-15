import 'package:sqlite3/common.dart';

/// Root of all typed errors thrown by localpocket.
sealed class LocalPocketError implements Exception {
  /// Human-readable description of the failure.
  final String message;

  /// Creates a LocalPocket error.
  LocalPocketError(this.message);

  /// Includes the concrete error type and message.
  @override
  String toString() => '$runtimeType: $message';
}

/// Caller bug / bad input — never retried.
class ValidationException extends LocalPocketError {
  final String? field;
  ValidationException(super.message, {this.field});
}

/// A SQLite unique constraint was violated.
class UniqueConstraintException extends LocalPocketError {
  final String field;
  final Object? value;
  UniqueConstraintException({required this.field, this.value, String? message})
      : super(message ?? 'Unique constraint violated on "$field".');
}

class NotNullConstraintException extends LocalPocketError {
  final String field;
  NotNullConstraintException({required this.field, String? message})
      : super(message ?? 'NOT NULL constraint violated on "$field".');
}

class CheckConstraintException extends LocalPocketError {
  CheckConstraintException([String? message]) : super(message ?? 'CHECK constraint violated.');
}

class PrimaryKeyConstraintException extends LocalPocketError {
  PrimaryKeyConstraintException([String? message]) : super(message ?? 'PRIMARY KEY constraint violated.');
}

class ForeignKeyConstraintException extends LocalPocketError {
  ForeignKeyConstraintException([String? message]) : super(message ?? 'FOREIGN KEY constraint violated.');
}

/// Storage-level failure (SQLITE_FULL, IOERR, BUSY, CORRUPT, ...).
class StorageError extends LocalPocketError {
  StorageError(super.message);
}

/// A record the caller expected to exist does not.
class RecordNotFoundException extends LocalPocketError {
  RecordNotFoundException(super.message);
}

/// The on-disk schema is newer than this package version supports.
class SchemaTooNewError extends LocalPocketError {
  SchemaTooNewError(super.message);
}

/// A schema declaration is invalid (reserved column, encrypted+indexed, ...).
class SchemaRegistrationError extends LocalPocketError {
  SchemaRegistrationError(super.message);
}

/// FTS5 is not available on this SQLite engine or FTS is not configured for
/// the store.
class FtsUnavailableError extends SchemaRegistrationError {
  FtsUnavailableError(super.message);
}

/// A keyset cursor was replayed against a different query shape.
class StaleCursorError extends LocalPocketError {
  StaleCursorError(super.message);
}

/// Thrown when a subscriber's pending change queue overflows its buffer cap.
class ChangeBusOverflowError extends LocalPocketError {
  final int queueSize;
  ChangeBusOverflowError(this.queueSize, [String? message])
      : super(message ?? 'ChangeBus queue overflowed with $queueSize pending events.');
}

/// A query was executed without a limit and without `.all()`.
class MissingLimitError extends LocalPocketError {
  MissingLimitError([String? message])
      : super(message ?? 'A limit is required unless .all() is called.');
}

/// A mutation was attempted on a record held in conflict.
class ConflictBlockedError extends LocalPocketError {
  ConflictBlockedError(super.message);
}

/// A destructive migration was refused because the backup step is unavailable.
class DestructiveMigrationRefusedError extends LocalPocketError {
  DestructiveMigrationRefusedError(super.message);
}

/// A write was attempted through a read-only Tx handle.
class ReadOnlyTxError extends LocalPocketError {
  ReadOnlyTxError([String? message]) : super(message ?? 'This Tx is read-only.');
}

/// Translates a SQLite exception or error into a typed [LocalPocketError].
/// `record` (if given) is used to extract the offending value for unique
/// violations.
LocalPocketError translateConstraintError(Object e,
    {Map<String, Object?>? record}) {
  final text = e.toString();
  final extendedCode = e is SqliteException ? e.extendedResultCode : null;
  final resultCode = e is SqliteException ? e.resultCode : null;
  if (extendedCode == 2067 || extendedCode == 1555 || text.contains('UNIQUE constraint failed')) {
    final m = RegExp(r'UNIQUE constraint failed: (\w+)\.(\w+)').firstMatch(text);
    final field = m?.group(2) ?? '?';
    return UniqueConstraintException(
      field: field,
      value: record?[field],
      message: 'Unique constraint violated on "$field".',
    );
  }
  if (extendedCode == 1299 || text.contains('NOT NULL constraint failed')) {
    final m = RegExp(r'NOT NULL constraint failed: (\w+)\.(\w+)').firstMatch(text);
    return NotNullConstraintException(field: m?.group(2) ?? '?');
  }
  if (text.contains('CHECK constraint failed') || extendedCode == 275 || resultCode == 275) {
    return CheckConstraintException();
  }
  if (text.contains('PRIMARY KEY') || extendedCode == 1555) {
    return PrimaryKeyConstraintException();
  }
  if (text.contains('FOREIGN KEY') || extendedCode == 787 || resultCode == 787) {
    return ForeignKeyConstraintException();
  }
  if (text.contains('database or disk is full')) {
    return StorageError('Database full: $e');
  }
  return StorageError('SQLite error: $e');
}
