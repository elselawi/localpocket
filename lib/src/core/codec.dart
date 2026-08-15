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
    if (e.key == 'id' || e.key == 'archived' || declared.contains(e.key)) continue;
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
    final v = dbRow[f.name];
    if (v == null) {
      logical[f.name] = null;
      continue;
    }
    if (f.encrypted) {
      final fc = cipher ?? cryptoProvider?.getFieldCipher(schema.name, f.name);
      if (fc == null) {
        throw StateError('Field "${f.name}" is encrypted but no FieldCipher was provided.');
      }
      final cipherBytes = base64Decode(v as String);
      final plainBytes = fc.decrypt(cipherBytes);
      final plainStr = utf8.decode(plainBytes);
      switch (f.kind) {
        case FieldKind.bool:
          logical[f.name] = plainStr == '1' || plainStr == 'true';
        case FieldKind.int:
        case FieldKind.date:
          logical[f.name] = int.parse(plainStr);
        case FieldKind.real:
          logical[f.name] = num.parse(plainStr);
        case FieldKind.json:
        case FieldKind.jsonList:
          logical[f.name] = jsonDecode(plainStr);
        default:
          logical[f.name] = plainStr;
      }
      continue;
    }
    switch (f.kind) {
      case FieldKind.bool:
        logical[f.name] = v == 1;
      case FieldKind.json:
      case FieldKind.jsonList:
        logical[f.name] = jsonDecode(v as String);
      default:
        logical[f.name] = v;
    }
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
    final v = dbRow[name];
    if (v == null) {
      logical[name] = null;
      continue;
    }
    if (f.encrypted) {
      final fc = cipher ?? cryptoProvider?.getFieldCipher(schema.name, f.name);
      if (fc == null) {
        throw StateError(
            'Field "${f.name}" is encrypted but no FieldCipher was provided.');
      }
      final plainStr = utf8.decode(fc.decrypt(base64Decode(v as String)));
      switch (f.kind) {
        case FieldKind.bool:
          logical[name] = plainStr == '1' || plainStr == 'true';
        case FieldKind.int:
        case FieldKind.date:
          logical[name] = int.parse(plainStr);
        case FieldKind.real:
          logical[name] = num.parse(plainStr);
        case FieldKind.json:
        case FieldKind.jsonList:
          logical[name] = jsonDecode(plainStr);
        default:
          logical[name] = plainStr;
      }
      continue;
    }
    switch (f.kind) {
      case FieldKind.bool:
        logical[name] = v == 1;
      case FieldKind.json:
      case FieldKind.jsonList:
        logical[name] = jsonDecode(v as String);
      default:
        logical[name] = v;
    }
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

Object? _encodeValue(Field f, Object? v, {FieldCipher? cipher}) {
  if (v == null) return null;
  if (f.encrypted) {
    if (cipher == null) {
      throw StateError('Field "${f.name}" is encrypted but no FieldCipher was provided.');
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
Map<String, Object?> buildPayload(CollectionSchema schema, Map<String, Object?> logical) {
  final declared = schema.declaredFieldNames;
  final data = <String, Object?>{'id': logical['id']};
  for (final f in schema.fields) {
    final v = logical[f.name];
    if (v != null) {
      data[f.name] = f.kind == FieldKind.bool ? (v == true) : v;
    }
  }
  for (final e in logical.entries) {
    if (e.key == 'id' || e.key == 'archived' || declared.contains(e.key)) continue;
    data[e.key] = e.value;
  }
  if (logical['archived'] == true) data['archived'] = true;
  return data;
}

String canonicalPayload(CollectionSchema schema, Map<String, Object?> logical) =>
    canonicalize(buildPayload(schema, logical));

String payloadHash(CollectionSchema schema, Map<String, Object?> logical) =>
    sha256Hex(canonicalPayload(schema, logical));
