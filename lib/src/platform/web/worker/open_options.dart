/// Pure-Dart parsing of the web worker `openDatabase` additional options.
///
/// The JS-bound controller receives `JSAny?`; this operates on the
/// already-dartified value so parsing is VM-testable. [parseOpenOptions]
/// swallows malformed options and returns defaults, while [rawOpenOption]
/// reads a raw key WITHOUT swallowing (for the cipher envelope, whose
/// malformed value must fail loudly).
library;

import '../../../kernel/schema.dart';
import 'worker_engine.dart' show deepStringMap, parseSchema;

/// Parses the dartified `additionalData` map into typed open options.
/// Malformed input (non-map data, wrong-typed values, schema-parse throws) is
/// swallowed and yields only well-formed keys; callers default the rest.
Map<String, Object?> parseOpenOptions(Object? data) {
  if (data == null) return {};
  try {
    if (data is Map) {
      final stringMap = deepStringMap(data);
      final result = <String, Object?>{};
      if (stringMap['stores'] is List) {
        result['stores'] =
            (stringMap['stores']! as List).map((s) => parseSchema(s)).toList();
      }
      if (stringMap['maxDocBytes'] is int) {
        result['maxDocBytes'] = stringMap['maxDocBytes'];
      }
      if (stringMap['destructiveBackup'] is bool) {
        result['destructiveBackup'] = stringMap['destructiveBackup'];
      }
      return result;
    }
  } catch (_) {}
  return {};
}

/// Reads a single raw option from the dartified `additionalData` WITHOUT
/// swallowing errors — for options whose malformed values must fail loudly
/// (e.g. the field-cipher envelope). Returns null when the key is absent
/// (or the data is not a map).
Object? rawOpenOption(Object? data, String key) {
  if (data == null) return null;
  try {
    if (data is Map) {
      return deepStringMap(data)[key];
    }
  } catch (_) {}
  return null;
}

/// Whether [stores] declare encrypted fields that would be unwritable when
/// opened without a [fieldCipher]; the worker's `openDatabase` rejects this
/// with a [ValidationException] (a web open must never silently produce
/// unwritable stores).
bool hasEncryptedFieldsWithoutCipher(
    Iterable<CollectionSchema<Object?>> stores, Object? fieldCipher) {
  if (fieldCipher != null) return false;
  return stores.any((s) => s.fields.any((f) => f.encrypted));
}
