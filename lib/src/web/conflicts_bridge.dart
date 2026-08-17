/// Wire bridge for the conflicts API: encodes/decodes [ConflictRecord] across
/// the worker boundary.
///
/// Pure Dart (no `dart:js_interop`, no `dart:io`) so it is VM-testable and
/// compiles for both dart2js and dart2wasm. The wire form mirrors the native
/// `lp_conflicts` row keys so the facade reconstructs [ConflictRecord] with
/// the same field names the engine uses.
library;

import '../sync/conflicts.dart';
import 'conversions.dart';

/// Encodes a native [ConflictRecord] into a wire-safe map. Nested document
/// fields (`base`/`local`/`remote`/`resolved`) are wire-encoded so
/// `DateTime`/`BigInt`/bytes survive structured clone.
Map<String, Object?> encodeConflictRecord(ConflictRecord c) => {
      'store': c.store,
      'record_id': c.recordId,
      'base': encodeWireValue(c.base),
      'local': encodeWireValue(c.local),
      'remote': encodeWireValue(c.remote),
      'dirty_local': (c.dirtyLocal.toList()..sort()),
      'dirty_remote': (c.dirtyRemote.toList()..sort()),
      'detected_at': c.detectedAt,
      if (c.resolved != null) 'resolved': encodeWireValue(c.resolved),
    };

/// Decodes a wire conflict map back into a native [ConflictRecord].
///
/// Every nested document field is wire-decoded with [decodeWireValue] (and
/// therefore every `BigInt` is re-coerced with `BigInt.parse`). Malformed
/// shapes fail loudly with a typed [FormatException]-style error rather than
/// silently producing an empty record.
ConflictRecord decodeConflictRecord(Map<String, Object?> row) {
  Map<String, Object?> decodeMapField(Object? v) {
    if (v is! Map) {
      throw FormatException('Conflict field must be a map: $v');
    }
    final out = <String, Object?>{};
    v.forEach((k, x) => out[k.toString()] = decodeWireValue(x));
    return out;
  }

  Set<String> decodeSet(Object? v, String field) {
    if (v is! List) {
      throw FormatException('Conflict "$field" must be a list: $v');
    }
    return v.cast<String>().toSet();
  }

  final store = row['store'];
  final recordId = row['record_id'];
  final detectedAt = row['detected_at'];
  if (store is! String || recordId is! String || detectedAt is! int) {
    throw FormatException('Malformed conflict record: $row');
  }
  return ConflictRecord(
    store: store,
    recordId: recordId,
    base: decodeMapField(row['base']),
    local: decodeMapField(row['local']),
    remote: decodeMapField(row['remote']),
    dirtyLocal: decodeSet(row['dirty_local'], 'dirty_local'),
    dirtyRemote: decodeSet(row['dirty_remote'], 'dirty_remote'),
    detectedAt: detectedAt,
    resolved: row['resolved'] == null ? null : decodeMapField(row['resolved']),
  );
}
