/// Pure-Dart parsing of the web worker `openDatabase` additional options.
///
/// The JS-bound controller receives `JSAny?`; this library operates on the
/// already-dartified value so the parsing (and the encrypted-store rejection
/// decision) is unit-testable on the VM. The parsing behavior is unchanged:
/// [parseOpenOptions] swallows malformed options and returns defaults, while
/// [rawOpenOption] reads a raw key WITHOUT swallowing (used for the cipher
/// envelope, whose malformed value must fail loudly).
library;

import '../core/schema.dart';
import 'worker_engine.dart' show deepStringMap, parseSchema;

/// Parses the dartified `additionalData` map into typed open options.
///
/// Malformed input (non-map data, wrong-typed values, throws from schema
/// parsing) is swallowed and yields only the well-formed keys — callers fall
/// back to defaults for anything missing, exactly as the controller does.
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
/// swallowing errors. Used for options whose malformed values must fail
/// loudly (e.g. the field-cipher envelope) rather than silently degrading to
/// defaults. Returns null when the key is absent (or the data is not a map).
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
/// opened without a [fieldCipher]. The web open must never silently produce
/// stores that cannot be written, so the worker's `openDatabase` rejects this
/// with a [ValidationException].
bool hasEncryptedFieldsWithoutCipher(
    Iterable<CollectionSchema<Object?>> stores, Object? fieldCipher) {
  if (fieldCipher != null) return false;
  return stores.any((s) => s.fields.any((f) => f.encrypted));
}
