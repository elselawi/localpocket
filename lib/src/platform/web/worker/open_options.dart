/// Pure-Dart parsing of the web worker `openDatabase` additional options.
///
/// The JS-bound controller receives `JSAny?`; this operates on the
/// already-dartified value so parsing is VM-testable. [parseOpenOptions]
/// applies the strict wire rule — an absent key takes its documented
/// default, a present wrong-typed value fails loudly with a
/// [ProtocolEnvelopeException] — so a malformed `stores` list can never
/// silently open the database with no stores at all. [rawOpenOption] reads a
/// single raw key without validation (for the cipher envelope, which also
/// fails loudly on malformed values).
library;

import '../../../kernel/schema.dart';
import '../page/protocol.dart';
import 'worker_engine.dart' show deepStringMap, parseSchema;

/// Parses the dartified `additionalData` map into typed open options.
///
/// Absent keys are omitted (the caller defaults them); present-but-wrong
/// values throw [ProtocolEnvelopeException] — notably a malformed store
/// descriptor fails the open instead of dropping every store.
Map<String, Object?> parseOpenOptions(Object? data) {
  if (data == null) return {};
  if (data is! Map) {
    throw ProtocolEnvelopeException('Open options must be a map.');
  }
  final stringMap = deepStringMap(data);
  final result = <String, Object?>{};
  final stores = stringMap['stores'];
  if (stores != null) {
    if (stores is! List) {
      throw ProtocolEnvelopeException('"stores" must be a list.');
    }
    result['stores'] = [for (final s in stores) parseSchema(s)];
  }
  final maxDocBytes = stringMap['maxDocBytes'];
  if (maxDocBytes != null) {
    if (maxDocBytes is! int) {
      throw ProtocolEnvelopeException('"maxDocBytes" must be an int.');
    }
    result['maxDocBytes'] = maxDocBytes;
  }
  final destructiveBackup = stringMap['destructiveBackup'];
  if (destructiveBackup != null) {
    if (destructiveBackup is! bool) {
      throw ProtocolEnvelopeException('"destructiveBackup" must be a bool.');
    }
    result['destructiveBackup'] = destructiveBackup;
  }
  return result;
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
