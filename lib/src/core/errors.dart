import 'package:sqlite3/common.dart';

/// {@template localpocket.local_pocket_error}
/// Root of all typed errors thrown by localpocket.
/// {@endtemplate}
sealed class LocalPocketError implements Exception {
  /// {@macro localpocket.local_pocket_error}
  LocalPocketError(this.message);

  /// Human-readable description of the failure.
  final String message;

  /// Includes the concrete error type and message.
  @override
  String toString() => '$runtimeType: $message';
}

/// {@template localpocket.validation_exception}
/// Caller bug / bad input — never retried.
/// {@endtemplate}
class ValidationException extends LocalPocketError {
  /// {@macro localpocket.validation_exception}
  ValidationException(super.message, {this.field});
  final String? field;
}

/// {@template localpocket.unique_constraint_exception}
/// A SQLite unique constraint was violated.
/// {@endtemplate}
class UniqueConstraintException extends LocalPocketError {
  /// {@macro localpocket.unique_constraint_exception}
  UniqueConstraintException({required this.field, this.value, String? message})
      : super(message ?? 'Unique constraint violated on "$field".');
  final String field;
  final Object? value;
}

class NotNullConstraintException extends LocalPocketError {
  NotNullConstraintException({required this.field, String? message})
      : super(message ?? 'NOT NULL constraint violated on "$field".');
  final String field;
}

class CheckConstraintException extends LocalPocketError {
  CheckConstraintException([String? message])
      : super(message ?? 'CHECK constraint violated.');
}

class PrimaryKeyConstraintException extends LocalPocketError {
  PrimaryKeyConstraintException([String? message])
      : super(message ?? 'PRIMARY KEY constraint violated.');
}

class ForeignKeyConstraintException extends LocalPocketError {
  ForeignKeyConstraintException([String? message])
      : super(message ?? 'FOREIGN KEY constraint violated.');
}

/// {@template localpocket.storage_error}
/// Storage-level failure (SQLITE_FULL, IOERR, BUSY, CORRUPT, ...).
/// {@endtemplate}
class StorageError extends LocalPocketError {
  /// {@macro localpocket.storage_error}
  StorageError(super.message);
}

/// {@template localpocket.record_not_found_exception}
/// A record the caller expected to exist does not.
/// {@endtemplate}
class RecordNotFoundException extends LocalPocketError {
  /// {@macro localpocket.record_not_found_exception}
  RecordNotFoundException(super.message);
}

/// {@template localpocket.schema_too_new_error}
/// The on-disk schema is newer than this package version supports.
/// {@endtemplate}
class SchemaTooNewError extends LocalPocketError {
  /// {@macro localpocket.schema_too_new_error}
  SchemaTooNewError(super.message);
}

/// {@template localpocket.schema_registration_error}
/// A schema declaration is invalid (reserved column, encrypted+indexed, ...).
/// {@endtemplate}
class SchemaRegistrationError extends LocalPocketError {
  /// {@macro localpocket.schema_registration_error}
  SchemaRegistrationError(super.message);
}

/// {@template localpocket.fts_unavailable_error}
/// FTS5 is not available on this SQLite engine or FTS is not configured for
/// the store.
/// {@endtemplate}
class FtsUnavailableError extends SchemaRegistrationError {
  /// {@macro localpocket.fts_unavailable_error}
  FtsUnavailableError(super.message);
}

/// {@template localpocket.stale_cursor_error}
/// A keyset cursor was replayed against a different query shape.
/// {@endtemplate}
class StaleCursorError extends LocalPocketError {
  /// {@macro localpocket.stale_cursor_error}
  StaleCursorError(super.message);
}

/// {@template localpocket.missing_limit_error}
/// A query was executed without a limit and without `.all()`.
/// {@endtemplate}
class MissingLimitError extends LocalPocketError {
  /// {@macro localpocket.missing_limit_error}
  MissingLimitError([String? message])
      : super(message ?? 'A limit is required unless .all() is called.');
}

/// {@template localpocket.conflict_blocked_error}
/// A mutation was attempted on a record held in conflict.
/// {@endtemplate}
class ConflictBlockedError extends LocalPocketError {
  /// {@macro localpocket.conflict_blocked_error}
  ConflictBlockedError(super.message);
}

/// {@template localpocket.destructive_migration_refused_error}
/// A destructive migration was refused because the backup step is unavailable.
/// {@endtemplate}
class DestructiveMigrationRefusedError extends LocalPocketError {
  /// {@macro localpocket.destructive_migration_refused_error}
  DestructiveMigrationRefusedError(super.message);
}

/// {@template localpocket.read_only_tx_error}
/// A write was attempted through a read-only Tx handle.
/// {@endtemplate}
class ReadOnlyTxError extends LocalPocketError {
  /// {@macro localpocket.read_only_tx_error}
  ReadOnlyTxError([String? message])
      : super(message ?? 'This Tx is read-only.');
}

/// {@template localpocket.typed_store_mismatch_error}
/// A store definition was bound under a name already owned by a different
/// definition instance.
///
/// Declare one canonical instance per store (the `StoreDef`
/// private-constructor + static-`instance` convention) and share it across
/// the whole app. Binding a second instance under the same store name
/// throws this error naming the store.
/// {@endtemplate}
class TypedStoreMismatchError extends LocalPocketError {
  /// {@macro localpocket.typed_store_mismatch_error}
  TypedStoreMismatchError(super.message);
}

/// Translates a SQLite exception or error into a typed [LocalPocketError].
/// `record` (if given) is used to extract the offending value for unique
/// violations.
LocalPocketError translateConstraintError(Object e,
    {Map<String, Object?>? record}) {
  final text = e.toString();
  final extendedCode = e is SqliteException ? e.extendedResultCode : null;
  final resultCode = e is SqliteException ? e.resultCode : null;
  // PRIMARY KEY violations (extended code 1555 = SQLITE_CONSTRAINT_PRIMARYKEY)
  // must be checked before UNIQUE: SQLite reports them with the same
  // "UNIQUE constraint failed" wording, and code 1555 must not be classified
  // as a unique violation.
  if (extendedCode == 1555 ||
      (text.contains('PRIMARY KEY') &&
          !text.contains('UNIQUE constraint failed'))) {
    return PrimaryKeyConstraintException();
  }
  if (extendedCode == 2067 || text.contains('UNIQUE constraint failed')) {
    final field = _extractFieldName(text, 'UNIQUE constraint failed:');
    return UniqueConstraintException(
      field: field,
      value: record?[field],
      message: 'Unique constraint violated on "$field".',
    );
  }
  if (extendedCode == 1299 || text.contains('NOT NULL constraint failed')) {
    return NotNullConstraintException(
        field: _extractFieldName(text, 'NOT NULL constraint failed:'));
  }
  if (text.contains('CHECK constraint failed') ||
      extendedCode == 275 ||
      resultCode == 275) {
    return CheckConstraintException();
  }
  if (text.contains('FOREIGN KEY') ||
      extendedCode == 787 ||
      resultCode == 787) {
    return ForeignKeyConstraintException();
  }
  if (text.contains('database or disk is full')) {
    return StorageError('Database full: $e');
  }
  return StorageError('SQLite error: $e');
}

/// Extracts the field name from a constraint message such as
/// `UNIQUE constraint failed: main.widgets.phone, constraint failed (code 2067)`
/// or `NOT NULL constraint failed: "my table"."my col"`.
///
/// Handles multi-part (schema.table.field) names, trailing message text,
/// quoted identifiers with escaped quotes, and non-ASCII field names. Returns
/// `?` when no field can be identified.
String _extractFieldName(String text, String prefix) {
  final idx = text.indexOf(prefix);
  if (idx < 0) return '?';
  var rest = text.substring(idx + prefix.length);
  // Stop at trailing message text ("... phone, constraint failed (code 2067)").
  var end = rest.length;
  final comma = rest.indexOf(',');
  if (comma >= 0) end = comma;
  final paren = rest.indexOf('(');
  if (paren >= 0 && paren < end) end = paren;
  rest = rest.substring(0, end).trim();
  final lastDot = rest.lastIndexOf('.');
  if (lastDot >= 0) rest = rest.substring(lastDot + 1);
  rest = rest.trim();
  if (rest.startsWith('"') && rest.endsWith('"')) {
    rest = rest.substring(1, rest.length - 1).replaceAll('""', '"');
  }
  return rest.isEmpty ? '?' : rest;
}
