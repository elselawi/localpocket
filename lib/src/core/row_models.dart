/// Shared row-model parsing helpers for the system tables.
///
/// Every `lp_*` row-model factory (`SyncRowState`, `OutboxOp`, `OpQueueRow`,
/// `ConflictRecord`, `FileRef`, …) routes through these so corruption handling
/// is identical across tables: malformed values surface as a typed
/// [StorageError] naming the table, never a raw `TypeError`/`ArgumentError`/
/// `FormatException`.
library;

import 'dart:convert';

import 'errors.dart';

/// Parses [row] into [T], converting any malformed value (wrong SQLite type,
/// unknown enum string, broken JSON, …) into a typed [StorageError]
/// corruption failure instead of leaking a raw `TypeError`/`ArgumentError`/
/// `FormatException`. These tables are written exclusively by the package, so
/// a row that fails to parse indicates disk corruption or a version mismatch.
T parseRowModel<T>(String table, T Function() build) {
  try {
    return build();
  } on StorageError {
    rethrow;
  } catch (e) {
    throw StorageError('Corrupt $table row: $e');
  }
}

/// Decodes a JSON-encoded map column into a `Map<String, Object?>`.
///
/// Lenient by contract: a null/empty/absent value and valid JSON of the wrong
/// shape (e.g. a JSON array where a map is expected) decode to an empty map —
/// a structurally-invalid payload must never poison the row. Malformed JSON
/// (unparseable) raises a typed [StorageError] naming the table and column.
Map<String, Object?> decodeJsonMap(
  Object? val, {
  required String table,
  required String column,
}) {
  if (val is! String || val.isEmpty) return const {};
  try {
    final decoded = jsonDecode(val);
    if (decoded is Map) return Map<String, Object?>.from(decoded);
    return const {};
  } catch (e) {
    throw StorageError('Corrupt $table row: $column: $e');
  }
}

/// Decodes a JSON-encoded string-array column into a `Set<String>`.
///
/// Same leniency contract as [decodeJsonMap]: wrong-shape JSON decodes to an
/// empty set; malformed JSON or a non-string member raises a typed
/// [StorageError].
Set<String> decodeJsonStringSet(
  Object? val, {
  required String table,
  required String column,
}) {
  if (val is! String || val.isEmpty) return const {};
  try {
    final decoded = jsonDecode(val);
    if (decoded is List) {
      return decoded.cast<String>().toSet();
    }
    return const {};
  } catch (e) {
    throw StorageError('Corrupt $table row: $column: $e');
  }
}

/// Strict JSON string-array decode for `dirty_fields` columns.
///
/// Unlike the lenient [decodeJsonStringSet], a JSON value that is not an array
/// of strings raises a [FormatException] (wrapped by [parseRowModel] at the
/// call site) — sync-table rows treat wrong-shape `dirty_fields` as
/// corruption.
List<String> decodeJsonStringList(Object? val) {
  if (val == null) return const [];
  final s = val as String;
  if (s.isEmpty) return const [];
  final decoded = jsonDecode(s);
  if (decoded is! List) {
    throw FormatException('expected a JSON array, got ${decoded.runtimeType}');
  }
  return [
    for (final item in decoded)
      if (item is String)
        item
      else
        throw FormatException(
            'dirty-field member is ${item.runtimeType}, expected String')
  ];
}
