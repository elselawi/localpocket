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
  textExpected,
  intExpected,
  numberExpected,
  boolExpected,
  jsonExpected,
  jsonListExpected,
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
      return value is! num ? KindViolation.numberExpected : null;
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
  CollectionSchema schema, {
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
    row[f.name] = _encodeValue(f, logical[f.name], cipher: fc);
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

/// Encodes a batch of logical records synchronously.
List<Map<String, Object?>> encodeDbRows(
  CollectionSchema schema,
  List<Map<String, Object?>> logicalRecords, {
  FieldCipher? cipher,
  CryptoProvider? cryptoProvider,
}) {
  return [
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
}

/// Encodes a batch of logical records, offloading to an isolate if batch is large
/// or contains encrypted fields to avoid UI jank.
Future<List<Map<String, Object?>>> encodeDbRowsAsync(
  CollectionSchema schema,
  List<Map<String, Object?>> logicalRecords, {
  FieldCipher? cipher,
  CryptoProvider? cryptoProvider,
  int isolateThreshold = 50,
}) async {
  // Preserve the async API but execute inline. One-shot Isolate.run is not
  // available on dart2js and is slower than the synchronous codec for the
  // tested batch sizes because rows and schema maps must be copied.
  return encodeDbRows(schema, logicalRecords,
      cipher: cipher, cryptoProvider: cryptoProvider);
}

/// Decodes a DB row into the logical record the app sees (declared fields plus
/// `extra` keys merged at the top level, plus `id` and `archived`).
Map<String, Object?> decodeDbRow(
  CollectionSchema schema,
  Map<String, Object?> dbRow, {
  FieldCipher? cipher,
  CryptoProvider? cryptoProvider,
}) {
  final logical = <String, Object?>{'id': dbRow['id']};
  for (final f in schema.fields) {
    logical[f.name] = _decodeStoredValue(f, dbRow[f.name],
        cipher: cipher, cryptoProvider: cryptoProvider, store: schema.name);
  }
  logical['archived'] = dbRow['archived'] == 1;
  final extra = dbRow['extra'];
  if (extra is String && extra.isNotEmpty) {
    final parsed = jsonDecode(extra);
    if (parsed is Map) {
      logical.addAll(Map<String, Object?>.from(parsed));
    }
  }
  return logical;
}

/// Decodes a batch of DB rows synchronously.
List<Map<String, Object?>> decodeDbRows(
  CollectionSchema schema,
  List<Map<String, Object?>> dbRows, {
  FieldCipher? cipher,
  CryptoProvider? cryptoProvider,
}) {
  return [
    for (final r in dbRows)
      decodeDbRow(schema, r, cipher: cipher, cryptoProvider: cryptoProvider),
  ];
}

/// Projection-aware batch decode: only the requested
/// [columns] are unpacked; all other declared fields and `extra` are left
/// untouched. `id` is always present (it is needed for keyset cursors);
/// `archived` is included only when requested. Callers must ensure every
/// requested column is a declared field (`schema.declaredFieldNames`) or one
/// of the synthetic `id`/`archived` keys — otherwise [decodeDbRows] should be
/// used so undeclared `extra` keys are merged as today.
List<Map<String, Object?>> decodeDbRowsProjected(
  CollectionSchema schema,
  List<Map<String, Object?>> dbRows, {
  required List<String> columns,
  FieldCipher? cipher,
  CryptoProvider? cryptoProvider,
}) {
  return [
    for (final r in dbRows)
      _decodeDbRowProjected(schema, r, columns,
          cipher: cipher, cryptoProvider: cryptoProvider),
  ];
}

Map<String, Object?> _decodeDbRowProjected(
  CollectionSchema schema,
  Map<String, Object?> dbRow,
  List<String> columns, {
  FieldCipher? cipher,
  CryptoProvider? cryptoProvider,
}) {
  final logical = <String, Object?>{'id': dbRow['id']};
  for (final name in columns) {
    if (name == 'id' || name == 'archived') continue;
    final f = schema.fieldByName(name);
    if (f == null) continue;
    logical[name] = _decodeStoredValue(f, dbRow[name],
        cipher: cipher, cryptoProvider: cryptoProvider, store: schema.name);
  }
  if (columns.contains('archived')) {
    logical['archived'] = dbRow['archived'] == 1;
  }
  return logical;
}

/// Decodes a batch of DB rows, offloading to an isolate if batch is large
/// or contains encrypted fields to avoid UI frame drops.
Future<List<Map<String, Object?>>> decodeDbRowsAsync(
  CollectionSchema schema,
  List<Map<String, Object?>> dbRows, {
  FieldCipher? cipher,
  CryptoProvider? cryptoProvider,
  int isolateThreshold = 50,
}) async {
  // Preserve the async API but execute inline. This is web-safe and avoids
  // one-shot isolate transfer overhead for ordinary query pages.
  return decodeDbRows(schema, dbRows,
      cipher: cipher, cryptoProvider: cryptoProvider);
}

/// Decodes a single stored value (plaintext typed column or base64 ciphertext)
/// into its logical form for [f]. [store] is the owning store name, used to
/// resolve a per-field [CryptoProvider] cipher.
///
/// This is the single source of the "stored value → logical value" coercion
/// rules, shared by the full [decodeDbRow] and projection-aware
/// [_decodeDbRowProjected] paths so they cannot drift.
Object? _decodeStoredValue(
  Field f,
  Object? stored, {
  FieldCipher? cipher,
  CryptoProvider? cryptoProvider,
  required String store,
}) {
  if (stored == null) return null;
  if (f.encrypted) {
    final fc = cipher ?? cryptoProvider?.getFieldCipher(store, f.name);
    if (fc == null) {
      throw StateError(
          'Field "${f.name}" is encrypted but no FieldCipher was provided.');
    }
    final plainStr = utf8.decode(fc.decrypt(base64Decode(stored as String)));
    return switch (f.kind) {
      FieldKind.bool => plainStr == '1' || plainStr == 'true',
      FieldKind.int || FieldKind.date => int.parse(plainStr),
      FieldKind.real => double.parse(plainStr),
      FieldKind.json || FieldKind.jsonList => jsonDecode(plainStr),
      _ => plainStr,
    };
  }
  return switch (f.kind) {
    FieldKind.bool => stored == 1,
    FieldKind.json || FieldKind.jsonList => jsonDecode(stored as String),
    _ => stored,
  };
}

Object? _encodeValue(Field f, Object? v, {FieldCipher? cipher}) {
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
    final cipherBytes = cipher.encrypt(plainBytes);
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
Map<String, Object?> buildPayload(
    CollectionSchema schema, Map<String, Object?> logical) {
  final declared = schema.declaredFieldNames;
  final data = <String, Object?>{'id': logical['id']};
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

String canonicalPayload(
        CollectionSchema schema, Map<String, Object?> logical) =>
    canonicalize(buildPayload(schema, logical));

String payloadHash(CollectionSchema schema, Map<String, Object?> logical) =>
    sha256Hex(canonicalPayload(schema, logical));
