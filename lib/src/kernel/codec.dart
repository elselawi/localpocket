/// Row codec: converts between logical records (`Map<String, Object?>` as the
/// app sees them) and the DB row shape.
///
/// - Declared fields own typed columns; undeclared fields live only in `extra`.
/// - Booleans are stored as INTEGER 0/1; `json`/`jsonList` as canonical JSON
///   TEXT; dates as INTEGER epoch ms.
library;

import 'dart:convert';

import 'canonical_json.dart';
import 'cipher.dart';
import 'errors.dart';
import 'hashing.dart';
import 'schema.dart';

/// The single reason a [FieldKind] rejects a value.
///
/// Local writes wrap the reason in a [ValidationException] with local wording;
/// remote mapping wraps the same reason in a [MapFailure] with wire wording.
/// Sharing the *reason* (the rule) keeps the field-kind acceptance rules in one
/// place so a new [FieldKind] cannot be added to one path and forgotten in the
/// other.
enum KindViolation {
  /// Text is required but a non-string value was provided.
  textExpected,

  /// An integer is required for this field type.
  intExpected,

  /// A numeric value is required for this field type.
  numberExpected,

  /// A boolean is required for this field type.
  boolExpected,

  /// A JSON object or array is required for this field type.
  jsonExpected,

  /// A JSON list is required for this field type.
  jsonListExpected,

  /// The provided enum value is not in the schema’s accepted set.
  enumValueRejected,
}

/// Returns the rule violation ([KindViolation]) if [value] is not acceptable
/// for [f], or `null` when it is well-typed. [value] must be non-null; callers
/// short-circuit `null` (or the required check) before invoking this.
///
/// This is the single source of truth for which Dart type each [FieldKind]
/// admits, shared by the local write validator and the remote payload
/// normalizer so they cannot drift apart.
KindViolation? fieldKindViolation(Field f, Object? value) {
  switch (f.kind) {
    case FieldKind.text:
    case FieldKind.enumValue:
    case FieldKind.ref:
      if (value is! String) return KindViolation.textExpected;
      if (f.kind == FieldKind.enumValue && !f.enumValues!.contains(value)) {
        return KindViolation.enumValueRejected;
      }
      return null;
    case FieldKind.int:
    case FieldKind.date:
      return value is! int ? KindViolation.intExpected : null;
    case FieldKind.real:
      if (value is! num) return KindViolation.numberExpected;
      // Non-finite reals cannot be persisted losslessly: canonical JSON has
      // no NaN/Infinity literal, so a NaN `real` would store bytes that fail
      // every later jsonDecode and dead-letter as corrupt. Reject here.
      if (value is double && !value.isFinite) {
        return KindViolation.numberExpected;
      }
      return null;
    case FieldKind.bool:
      return value is! bool ? KindViolation.boolExpected : null;
    case FieldKind.json:
      return (value is! Map && value is! List)
          ? KindViolation.jsonExpected
          : null;
    case FieldKind.jsonList:
      return value is! List ? KindViolation.jsonListExpected : null;
  }
}

/// Encodes a logical record into a DB row map (including system columns).
Map<String, Object?> encodeDbRow(
  CollectionSchema<Object?> schema, {
  required String id,
  required Map<String, Object?> logical,
  required bool archived,
  FieldCipher? cipher,
  CryptoProvider? cryptoProvider,
}) {
  final declared = schema.declaredFieldNames;
  final row = <String, Object?>{'id': id};
  for (final f in schema.fields) {
    final fc = cipher ?? cryptoProvider?.getFieldCipher(schema.name, f.name);
    row[f.name] = _encodeValue(f, logical[f.name],
        cipher: fc, aad: fieldAad(schema.name, f.name, id));
  }
  final extra = <String, Object?>{};
  for (final e in logical.entries) {
    if (e.key == 'id' || e.key == 'archived' || declared.contains(e.key)) {
      continue;
    }
    extra[e.key] = e.value;
  }
  row['extra'] = extra.isEmpty ? '' : canonicalize(extra);
  row['archived'] = archived ? 1 : 0;
  row['hidden'] = 0;
  return row;
}

/// Encodes a single declared field's value exactly as [encodeDbRow] would
/// store it (same cipher resolution and kind rules), for targeted
/// single-column UPDATEs on the dirty-patch fast path.
Object? encodeFieldValue(
  CollectionSchema<Object?> schema,
  Field field,
  Object? value, {
  required String recordId,
  FieldCipher? cipher,
  CryptoProvider? cryptoProvider,
}) {
  final fc = cipher ?? cryptoProvider?.getFieldCipher(schema.name, field.name);
  return _encodeValue(field, value,
      cipher: fc, aad: fieldAad(schema.name, field.name, recordId));
}

/// Appends a full DB row's values in [encodeDbRow]'s exact column order
/// (`id`, declared fields in schema order, `extra`, `archived`, `hidden`)
/// onto [target] — the bulk-insert binding form that skips the intermediate
/// row map entirely.
void appendDomainValues(
  List<Object?> target,
  CollectionSchema<Object?> schema, {
  required String id,
  required Map<String, Object?> logical,
  required bool archived,
  FieldCipher? cipher,
  CryptoProvider? cryptoProvider,
}) {
  final declared = schema.declaredFieldNames;
  target.add(id);
  for (final f in schema.fields) {
    final fc = cipher ?? cryptoProvider?.getFieldCipher(schema.name, f.name);
    target.add(_encodeValue(f, logical[f.name],
        cipher: fc, aad: fieldAad(schema.name, f.name, id)));
  }
  final extra = <String, Object?>{};
  for (final e in logical.entries) {
    if (e.key == 'id' || e.key == 'archived' || declared.contains(e.key)) {
      continue;
    }
    extra[e.key] = e.value;
  }
  target
    ..add(extra.isEmpty ? '' : canonicalize(extra))
    ..add(archived ? 1 : 0)
    ..add(0);
}

/// Encodes a batch of logical records synchronously.
List<Map<String, Object?>> encodeDbRows(
  CollectionSchema<Object?> schema,
  List<Map<String, Object?>> logicalRecords, {
  FieldCipher? cipher,
  CryptoProvider? cryptoProvider,
}) =>
    [
      for (final l in logicalRecords)
        encodeDbRow(
          schema,
          id: (l['id'] as String?) ?? '',
          logical: l,
          archived: l['archived'] == true,
          cipher: cipher,
          cryptoProvider: cryptoProvider,
        ),
    ];

/// Encodes a batch of logical records asynchronously.
///
/// Runs inline (no isolate offload exists); [isolateThreshold] is accepted
/// for interface compatibility and ignored.
Future<List<Map<String, Object?>>> encodeDbRowsAsync(
  CollectionSchema<Object?> schema,
  List<Map<String, Object?>> logicalRecords, {
  FieldCipher? cipher,
  CryptoProvider? cryptoProvider,
  int isolateThreshold = 50,
}) async =>
    encodeDbRows(
      schema,
      logicalRecords,
      cipher: cipher,
      cryptoProvider: cryptoProvider,
    );

/// Decodes a DB row into the logical record the app sees (declared fields plus
/// `extra` keys merged at the top level, plus `id` and `archived`).
Map<String, Object?> decodeDbRow(
  CollectionSchema<Object?> schema,
  Map<String, Object?> dbRow, {
  FieldCipher? cipher,
  CryptoProvider? cryptoProvider,
}) {
  final logical = <String, Object?>{};
  // Extra keys are merged FIRST so a declared field (or `id`/`archived`)
  // promoted from an older schema revision's extra column always decodes
  // from its typed physical column — the declared column wins, never the
  // stale extra copy. Reserved engine columns never enter the logical row
  // from extra.
  final extra = dbRow['extra'];
  if (extra is String && extra.isNotEmpty) {
    final parsed = jsonDecode(extra);
    if (parsed is Map) {
      for (final entry in Map<String, Object?>.from(parsed).entries) {
        if (Field.reservedColumns.contains(entry.key)) continue;
        logical[entry.key] = entry.value;
      }
    }
  }
  logical['id'] = dbRow['id'];
  for (final f in schema.fields) {
    logical[f.name] = _decodeStoredValue(f, dbRow[f.name],
        cipher: cipher,
        cryptoProvider: cryptoProvider,
        store: schema.name,
        recordId: (dbRow['id'] as String?) ?? '');
  }
  logical['archived'] = dbRow['archived'] == 1;
  return logical;
}

/// Decodes a batch of DB rows synchronously.
List<Map<String, Object?>> decodeDbRows(
  CollectionSchema<Object?> schema,
  List<Map<String, Object?>> dbRows, {
  FieldCipher? cipher,
  CryptoProvider? cryptoProvider,
}) =>
    [
      for (final r in dbRows)
        decodeDbRow(
          schema,
          r,
          cipher: cipher,
          cryptoProvider: cryptoProvider,
        ),
    ];

/// Projection-aware batch decode: only the requested [columns] are unpacked.
/// `id` is always present (needed for keyset cursors); `archived` only when
/// requested. Every requested column must be declared or `id`/`archived` —
/// otherwise use [decodeDbRows] so `extra` keys merge.
List<Map<String, Object?>> decodeDbRowsProjected(
  CollectionSchema<Object?> schema,
  List<Map<String, Object?>> dbRows, {
  required List<String> columns,
  FieldCipher? cipher,
  CryptoProvider? cryptoProvider,
}) {
  // Resolve the field for each requested column once per page, not per
  // cell — pages decode hundreds of rows per call.
  final resolved = <(String, Field?)>[];
  var wantArchived = false;
  for (final name in columns) {
    if (name == 'id') continue;
    if (name == 'archived') {
      wantArchived = true;
      continue;
    }
    resolved.add((name, schema.fieldByName(name)));
  }
  return [
    for (final r in dbRows)
      _decodeDbRowProjectedResolved(
        r,
        resolved,
        wantArchived,
        store: schema.name,
        cipher: cipher,
        cryptoProvider: cryptoProvider,
      ),
  ];
}

Map<String, Object?> _decodeDbRowProjectedResolved(
  Map<String, Object?> dbRow,
  List<(String, Field?)> resolved,
  bool wantArchived, {
  required String store,
  FieldCipher? cipher,
  CryptoProvider? cryptoProvider,
}) {
  final logical = <String, Object?>{'id': dbRow['id']};
  for (final (name, f) in resolved) {
    if (f == null) continue;
    logical[name] = _decodeStoredValue(f, dbRow[name],
        cipher: cipher,
        cryptoProvider: cryptoProvider,
        store: store,
        recordId: (dbRow['id'] as String?) ?? '');
  }
  if (wantArchived) {
    logical['archived'] = dbRow['archived'] == 1;
  }
  return logical;
}

/// Decodes a batch of DB rows asynchronously.
///
/// Runs inline on the calling isolate and returns exactly what [decodeDbRows]
/// returns. [isolateThreshold] is accepted for interface compatibility and
/// ignored; see [encodeDbRowsAsync] for the rationale.
Future<List<Map<String, Object?>>> decodeDbRowsAsync(
  CollectionSchema<Object?> schema,
  List<Map<String, Object?>> dbRows, {
  FieldCipher? cipher,
  CryptoProvider? cryptoProvider,
  int isolateThreshold = 50,
}) async =>
    decodeDbRows(
      schema,
      dbRows,
      cipher: cipher,
      cryptoProvider: cryptoProvider,
    );

/// Decodes a single stored value (plaintext typed column or base64
/// ciphertext) into its logical form for [f]. [recordId] is bound into the
/// AAD of encrypted values. Single source of the stored→logical coercion
/// rules, shared by both decode paths.
Object? _decodeStoredValue(
  Field f,
  Object? stored, {
  required String store,
  required String recordId,
  FieldCipher? cipher,
  CryptoProvider? cryptoProvider,
}) {
  if (stored == null) return null;
  if (f.encrypted) {
    final fc = cipher ?? cryptoProvider?.getFieldCipher(store, f.name);
    if (fc == null) {
      throw StateError(
          'Field "${f.name}" is encrypted but no FieldCipher was provided.');
    }
    if (stored is! String) {
      throw StorageError(
          'Corrupt $store row: encrypted field "${f.name}" must be TEXT '
          'ciphertext but is ${stored.runtimeType}.');
    }
    String plainStr;
    try {
      plainStr = utf8.decode(fc.decrypt(base64Decode(stored),
          aad: fieldAad(store, f.name, recordId)));
    } catch (e) {
      // Corrupt ciphertext (bad base64 or a failed auth check) must surface
      // as a typed storage error, not a raw FormatException from get().
      throw StorageError(
          'Corrupt $store row: encrypted field "${f.name}" failed to decrypt '
          '($e).');
    }
    return switch (f.kind) {
      FieldKind.bool => plainStr == '1' || plainStr == 'true',
      FieldKind.int || FieldKind.date => int.parse(plainStr),
      FieldKind.real => double.parse(plainStr),
      FieldKind.json || FieldKind.jsonList => jsonDecode(plainStr),
      _ => plainStr,
    };
  }
  if (f.kind == FieldKind.bool) return stored == 1;
  if (f.kind == FieldKind.json || f.kind == FieldKind.jsonList) {
    if (stored is! String) {
      throw StorageError(
          'Corrupt $store row: field "${f.name}" must be TEXT JSON but is '
          '${stored.runtimeType}.');
    }
    return jsonDecode(stored);
  }
  return stored;
}

Object? _encodeValue(Field f, Object? v,
    {FieldCipher? cipher, List<int> aad = const []}) {
  if (v == null) return null;
  if (f.encrypted) {
    if (cipher == null) {
      throw StateError(
          'Field "${f.name}" is encrypted but no FieldCipher was provided.');
    }
    String plainStr;
    switch (f.kind) {
      case FieldKind.bool:
        plainStr = v == true ? '1' : '0';
      case FieldKind.int:
      case FieldKind.date:
      case FieldKind.real:
        plainStr = v.toString();
      case FieldKind.json:
      case FieldKind.jsonList:
        plainStr = canonicalize(v);
      default:
        plainStr = v as String;
    }
    final plainBytes = utf8.encode(plainStr);
    final cipherBytes = cipher.encrypt(plainBytes, aad: aad);
    return base64Encode(cipherBytes);
  }
  switch (f.kind) {
    case FieldKind.bool:
      return v == true ? 1 : 0;
    case FieldKind.json:
    case FieldKind.jsonList:
      return canonicalize(v);
    default:
      return v;
  }
}

/// Builds the full remote payload map for a logical record:
/// `{id, ...declared, ...extra, archived?}`. `archived` is `true` or omitted.
///
/// [idOverride] replaces `logical['id']` without requiring a separate
/// spread-copy of the logical map (bulk-insert fast path passes the record
/// id directly).
Map<String, Object?> buildPayload(
    CollectionSchema<Object?> schema, Map<String, Object?> logical,
    {Object? idOverride}) {
  final declared = schema.declaredFieldNames;
  final data = <String, Object?>{'id': idOverride ?? logical['id']};
  for (final f in schema.fields) {
    final v = logical[f.name];
    if (v != null) {
      data[f.name] = f.kind == FieldKind.bool ? (v == true) : v;
    }
  }
  for (final e in logical.entries) {
    if (e.key == 'id' || e.key == 'archived' || declared.contains(e.key)) {
      continue;
    }
    data[e.key] = e.value;
  }
  if (logical['archived'] == true) data['archived'] = true;
  return data;
}

/// Writes the canonical JSON payload of [logical] directly into [out],
/// byte-identical to canonicalizing [buildPayload], without the intermediate
/// map. Returns the exact UTF-8 byte length written.
int canonicalizePayloadInto(
  StringBuffer out,
  CollectionSchema<Object?> schema,
  Map<String, Object?> logical, {
  Object? idOverride,
}) {
  final declared = schema.declaredFieldNames;
  final entries = <(String, Object?)>[];
  entries.add(('id', idOverride ?? logical['id']));
  for (final f in schema.fields) {
    final v = logical[f.name];
    if (v != null) {
      entries.add((f.name, f.kind == FieldKind.bool ? (v == true) : v));
    }
  }
  for (final e in logical.entries) {
    if (e.key == 'id' || e.key == 'archived' || declared.contains(e.key)) {
      continue;
    }
    entries.add((e.key, e.value));
  }
  if (logical['archived'] == true) entries.add(('archived', true));
  // Canonical key order: sorted lexicographically (all keys are Strings).
  entries.sort((a, b) => a.$1.compareTo(b.$1));
  out.write('{');
  var bytes = 1;
  var first = true;
  for (final (key, value) in entries) {
    if (!first) {
      out.write(',');
      bytes++;
    }
    first = false;
    final k = jsonEncode(key);
    out.write(k);
    bytes += utf8BytesOf(k);
    out.write(':');
    bytes++;
    bytes += writeCanonicalValue(out, value);
  }
  out.write('}');
  return bytes + 1;
}

/// Serializes the logical record into the canonical remote payload JSON.
String canonicalPayload(
        CollectionSchema<Object?> schema, Map<String, Object?> logical) =>
    canonicalize(buildPayload(schema, logical));

/// Returns the hash of the canonical remote payload for this record.
String payloadHash(
        CollectionSchema<Object?> schema, Map<String, Object?> logical) =>
    sha256Hex(canonicalPayload(schema, logical));
