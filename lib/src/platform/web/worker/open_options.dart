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
import '../../../kernel/errors.dart' show ValidationException;
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
  final storePolicies = stringMap['storePolicies'];
  if (storePolicies != null) {
    if (storePolicies is! Map) {
      throw ProtocolEnvelopeException('"storePolicies" must be a map.');
    }
    result['storePolicies'] = {
      for (final e in storePolicies.entries)
        e.key.toString(): _requirePolicyEnvelope(e.value, e.key.toString()),
    };
  }
  _parseMsOption(stringMap, 'groupCommitWindowMs', result,
      min: 0, what: 'the group-commit coalescing window');
  // Zero disables the idle sweeper on native, so it is valid here too.
  _parseMsOption(stringMap, 'txSessionTtlMs', result,
      min: 0, what: 'the interactive-transaction idle deadline');
  _parseMsOption(stringMap, 'callbackTimeoutMs', result,
      min: 1, what: 'the page-callback round-trip bound');  // The clock offset is a signed shift (negative = into the past), so only
  // the type is validated, never the sign.
  final clockOffsetMs = stringMap['clockOffsetMs'];
  if (clockOffsetMs != null) {
    if (clockOffsetMs is! int) {
      throw ProtocolEnvelopeException(
          '"clockOffsetMs" must be an int (milliseconds).');
    }
    result['clockOffsetMs'] = clockOffsetMs;
  }  return result;
}

/// Parses one millisecond-denominated integer option: absent keys are
/// omitted (the caller applies its documented default), present-but-wrong
/// values fail loudly, and a value below [min] is rejected — the wire
/// never silently clamps a mis-scaled duration.
void _parseMsOption(Map<String, Object?> source, String key,
    Map<String, Object?> result,
    {required int min, required String what}) {
  final raw = source[key];
  if (raw == null) return;
  if (raw is! int) {
    throw ProtocolEnvelopeException('"$key" must be an int (milliseconds).');
  }
  if (raw < min) {
    throw ProtocolEnvelopeException(
        '"$key" must be an int ≥ $min (milliseconds) for $what.');
  }
  result[key] = raw;
}

Map<String, Object?> _requirePolicyEnvelope(Object? raw, String store) {
  if (raw is! Map) {
    throw ProtocolEnvelopeException(
        'The store policy for "$store" must be a map.');
  }
  return deepStringMap(raw);
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
