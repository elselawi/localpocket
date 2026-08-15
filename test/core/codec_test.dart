import 'dart:convert';

import 'package:localpocket/localpocket.dart';
import 'package:localpocket/src/core/codec.dart' show decodeDbRowsProjected;
import 'package:test/test.dart';

import '../support/helpers.dart';

/// Plain-row codec matrix plus codec type/provider failure tests.
void main() {
  final schema = widgetsSchema();

  group('encodeDbRow', () {
    test('encodes every field kind with correct storage types', () {
      final id = generateRecordId();
      final row = encodeDbRow(
        schema,
        id: id,
        logical: record(
          id: id,
          name: 'gadget',
          qty: 7,
          price: 9.99,
          active: true,
          madeOn: 1700000000000,
          size: 'M',
          meta: {'k': 'v'},
          tags: ['a', 'b'],
          ownerId: 'owner-1',
          phone: '555-0100',
        ),
        archived: false,
      );

      expect(row['id'], id);
      expect(row['name'], 'gadget');
      expect(row['qty'], 7);
      expect(row['price'], 9.99);
      expect(row['active'], 1, reason: 'bool true stored as INTEGER 1');
      expect(row['made_on'], 1700000000000, reason: 'date stored as epoch ms');
      expect(row['size'], 'M');
      expect(row['meta'], '{"k":"v"}', reason: 'json stored as canonical TEXT');
      expect(row['tags'], '["a","b"]');
      expect(row['owner_id'], 'owner-1');
      expect(row['phone'], '555-0100');
      expect(row['archived'], 0);
      expect(row['hidden'], 0);
      expect(row['extra'], '', reason: 'no undeclared keys => empty extra');
    });

    test('bool false stored as 0', () {
      final row = encodeDbRow(schema,
          id: generateRecordId(),
          logical: record(active: false),
          archived: false);
      expect(row['active'], 0);
    });

    test('null values are preserved as null for every field kind', () {
      final row = encodeDbRow(schema,
          id: generateRecordId(), logical: record(name: 'x'), archived: false);
      for (final name in [
        'qty',
        'price',
        'active',
        'made_on',
        'size',
        'meta',
        'tags',
        'owner_id',
        'phone'
      ]) {
        expect(row[name], isNull, reason: '$name must be null');
        expect(row.containsKey(name), isTrue);
      }
    });

    test('archived flag maps to 1', () {
      final row = encodeDbRow(schema,
          id: generateRecordId(), logical: record(name: 'x'), archived: true);
      expect(row['archived'], 1);
    });

    test('extra keys are canonicalized and id/archived/declared are excluded',
        () {
      final row = encodeDbRow(
        schema,
        id: 'aaaaaaaaaaaaaaa',
        logical: {
          'id': 'aaaaaaaaaaaaaaa',
          'archived': true,
          'name': 'x', // declared field
          'qty': 1, // declared field
          'color': 'red', // extra
          'nested': {
            'deep': [
              1,
              2,
              {'ok': true}
            ]
          }, // extra
        },
        archived: false,
      );
      expect(
          row['extra'], '{"color":"red","nested":{"deep":[1,2,{"ok":true}]}}');
      // id / archived / declared fields never leak into extra.
      expect(row['extra'], isNot(contains('aaaaaaaaaaaaaaa')));
      expect(row['extra'], isNot(contains('"name"')));
      expect(row['extra'], isNot(contains('"qty"')));
    });

    test('extra with only reserved keys is empty', () {
      final row = encodeDbRow(schema,
          id: 'aaaaaaaaaaaaaaa',
          logical: {'id': 'aaaaaaaaaaaaaaa', 'archived': false, 'name': 'x'},
          archived: false);
      expect(row['extra'], '');
    });

    test('json values are stored canonically (sorted keys, compact)', () {
      final row = encodeDbRow(schema,
          id: generateRecordId(),
          logical: record(name: 'x', meta: {
            'b': 1,
            'a': 2,
            'nested': {'z': 1, 'y': 2}
          }),
          archived: false);
      expect(row['meta'], '{"a":2,"b":1,"nested":{"y":2,"z":1}}');
    });

    test('jsonList preserves order', () {
      final row = encodeDbRow(schema,
          id: generateRecordId(),
          logical: record(name: 'x', tags: [3, 1, 2, 'z', null]),
          archived: false);
      expect(row['tags'], '[3,1,2,"z",null]');
    });
  });

  group('encodeDbRows (batch)', () {
    test('uses logical id and archived flag per record', () {
      final rows = encodeDbRows(schema, [
        record(id: 'a1', name: 'one', archived: true),
        record(name: 'two', archived: false),
      ]);
      expect(rows, hasLength(2));
      expect(rows[0]['id'], 'a1');
      expect(rows[0]['archived'], 1);
      expect(rows[1]['id'], '', reason: 'missing id encodes as empty string');
      expect(rows[1]['archived'], 0);
    });

    test('empty batch yields empty list', () {
      expect(encodeDbRows(schema, []), isEmpty);
    });

    test('async batch matches synchronous batch', () async {
      final records = [
        record(id: 'b1', name: 'one', qty: 1, active: true),
        record(id: 'b2', name: 'two', meta: {'x': 1}),
        record(id: 'b3', name: 'three', tags: ['t']),
      ];
      final sync = encodeDbRows(schema, records);
      final async = await encodeDbRowsAsync(schema, records);
      expect(async, sync);
    });
  });

  group('decodeDbRow', () {
    test('round-trips a full encode', () {
      final id = generateRecordId();
      final logical = record(
        id: id,
        name: 'gadget',
        qty: 7,
        price: 9.99,
        active: true,
        madeOn: 1700000000000,
        size: 'M',
        meta: {'k': 'v'},
        tags: ['a', 'b'],
        ownerId: 'owner-1',
        phone: '555-0100',
        extra: {
          'color': 'red',
          'nested': {'n': 1}
        },
      );
      final row =
          encodeDbRow(schema, id: id, logical: logical, archived: false);
      final decoded = decodeDbRow(schema, row);
      expect(decoded['id'], id);
      expect(decoded['name'], 'gadget');
      expect(decoded['qty'], 7);
      expect(decoded['price'], 9.99);
      expect(decoded['active'], true, reason: 'INTEGER 1 decodes to bool true');
      expect(decoded['made_on'], 1700000000000);
      expect(decoded['size'], 'M');
      expect(decoded['meta'], {'k': 'v'});
      expect(decoded['tags'], ['a', 'b']);
      expect(decoded['owner_id'], 'owner-1');
      expect(decoded['phone'], '555-0100');
      expect(decoded['archived'], false);
      expect(decoded['color'], 'red');
      expect(decoded['nested'], {'n': 1});
    });

    test('bool INTEGER 0 decodes to false', () {
      final row = encodeDbRow(schema,
          id: generateRecordId(),
          logical: record(name: 'x', active: false),
          archived: false);
      expect(decodeDbRow(schema, row)['active'], false);
    });

    test('nulls decode as null keys', () {
      final row = encodeDbRow(schema,
          id: generateRecordId(), logical: record(name: 'x'), archived: false);
      final decoded = decodeDbRow(schema, row);
      expect(decoded['qty'], isNull);
      expect(decoded.containsKey('qty'), isTrue);
      expect(decoded['active'], isNull);
    });

    test('archived INTEGER 1 decodes to true', () {
      final row = encodeDbRow(schema,
          id: generateRecordId(), logical: record(name: 'x'), archived: true);
      expect(decodeDbRow(schema, row)['archived'], true);
    });

    test('extra keys merge at the top level', () {
      final row = {
        'id': 'aaaaaaaaaaaaaaa',
        'name': 'x',
        'extra': '{"color":"red","deep":{"a":[1,2]}}',
        'archived': 0,
        'hidden': 0,
      };
      final decoded = decodeDbRow(schema, row);
      expect(decoded['color'], 'red');
      expect(decoded['deep'], {
        'a': [1, 2]
      });
      expect(decoded['archived'], false);
    });

    test('missing extra and empty extra are ignored', () {
      final rowNoExtra = {
        'id': 'aaaaaaaaaaaaaaa',
        'name': 'x',
        'archived': 0,
      };
      final rowEmptyExtra = {
        'id': 'aaaaaaaaaaaaaaa',
        'name': 'x',
        'extra': '',
        'archived': 0,
      };
      final a = decodeDbRow(schema, rowNoExtra);
      final b = decodeDbRow(schema, rowEmptyExtra);
      expect(a['id'], 'aaaaaaaaaaaaaaa');
      expect(a['name'], 'x');
      // `extra` is a storage column and is never exposed as a logical key.
      expect(a.keys.any((k) => k == 'extra'), isFalse);
      expect(b.keys.any((k) => k == 'extra'), isFalse);
    });

    test('non-map extra JSON is silently ignored (documented)', () {
      final row = {
        'id': 'aaaaaaaaaaaaaaa',
        'name': 'x',
        'extra': '[1,2,3]',
        'archived': 0,
      };
      final decoded = decodeDbRow(schema, row);
      expect(decoded['id'], 'aaaaaaaaaaaaaaa');
      expect(decoded.containsKey('0'), isFalse);
      expect(decoded.keys.where((k) => k == 'extra'), isEmpty);
    });

    test('extra as non-string db value is ignored (documented)', () {
      final row = {
        'id': 'aaaaaaaaaaaaaaa',
        'name': 'x',
        'extra': 42,
        'archived': 0,
      };
      expect(() => decodeDbRow(schema, row), returnsNormally);
      expect(decodeDbRow(schema, row)['id'], 'aaaaaaaaaaaaaaa');
    });
  });

  group('decodeDbRows (batch and async)', () {
    test('batch decode matches individual decodes', () {
      final rows = [
        encodeDbRow(schema,
            id: 'c1',
            logical: record(id: 'c1', name: 'one', active: true),
            archived: false),
        encodeDbRow(schema,
            id: 'c2',
            logical: record(id: 'c2', name: 'two', tags: ['x']),
            archived: true),
      ];
      final decoded = decodeDbRows(schema, rows);
      expect(decoded, hasLength(2));
      expect(decoded[0]['name'], 'one');
      expect(decoded[0]['active'], true);
      expect(decoded[1]['archived'], true);
      expect(decoded[1]['tags'], ['x']);
    });

    test('async batch decode matches synchronous', () async {
      final rows = [
        encodeDbRow(schema,
            id: 'd1', logical: record(id: 'd1', name: 'one'), archived: false),
        encodeDbRow(schema,
            id: 'd2', logical: record(id: 'd2', name: 'two'), archived: false),
      ];
      expect(await decodeDbRowsAsync(schema, rows), decodeDbRows(schema, rows));
    });

    test('empty batch decode', () async {
      expect(decodeDbRows(schema, []), isEmpty);
      expect(await decodeDbRowsAsync(schema, []), isEmpty);
    });
  });

  group('projection-aware decode', () {
    test('only requested columns are unpacked', () {
      final id = generateRecordId();
      final row = encodeDbRow(
        schema,
        id: id,
        logical: record(
            id: id,
            name: 'proj',
            qty: 5,
            active: true,
            extra: {'color': 'red'}),
        archived: false,
      );
      final decoded = decodeDbRowsProjected(schema, [row], columns: ['name']);
      expect(decoded.single['id'], id);
      expect(decoded.single['name'], 'proj');
      expect(decoded.single.containsKey('qty'), isFalse);
      expect(decoded.single.containsKey('active'), isFalse);
      expect(decoded.single.containsKey('color'), isFalse,
          reason: 'extra keys are not projected');
      expect(decoded.single.containsKey('archived'), isFalse);
    });

    test('archived included only when requested', () {
      final id = generateRecordId();
      final row = encodeDbRow(schema,
          id: id, logical: record(id: id, name: 'a'), archived: true);
      final without =
          decodeDbRowsProjected(schema, [row], columns: ['name']).single;
      final withArchived =
          decodeDbRowsProjected(schema, [row], columns: ['name', 'archived'])
              .single;
      expect(without.containsKey('archived'), isFalse);
      expect(withArchived['archived'], true);
    });

    test('unknown column names are skipped', () {
      final id = generateRecordId();
      final row = encodeDbRow(schema,
          id: id, logical: record(id: id, name: 'a'), archived: false);
      final decoded =
          decodeDbRowsProjected(schema, [row], columns: ['ghost']).single;
      expect(decoded['id'], id);
      expect(decoded.containsKey('ghost'), isFalse);
    });
  });

  group('buildPayload / canonicalPayload / payloadHash', () {
    test('buildPayload includes id, declared, extra and archived-when-true',
        () {
      final id = generateRecordId();
      final logical = record(
        id: id,
        name: 'x',
        qty: 3,
        active: true,
        extra: {'color': 'red'},
      );
      final payload = buildPayload(schema, logical);
      expect(payload['id'], id);
      expect(payload['name'], 'x');
      expect(payload['qty'], 3);
      expect(payload['active'], true, reason: 'bools restored to logical true');
      expect(payload['color'], 'red');
      expect(payload.containsKey('archived'), isFalse,
          reason: 'archived omitted when false');
    });

    test('archived true is included', () {
      final payload = buildPayload(
          schema, record(id: 'aaaaaaaaaaaaaaa', name: 'x', archived: true));
      expect(payload['archived'], true);
    });

    test('null declared values are omitted from the payload', () {
      final payload = buildPayload(
          schema, record(id: 'aaaaaaaaaaaaaaa', name: 'x', qty: null));
      expect(payload.containsKey('qty'), isFalse);
    });

    test('canonicalPayload is deterministic and compact', () {
      final a = canonicalPayload(schema,
          record(id: 'aaaaaaaaaaaaaaa', name: 'x', meta: {'b': 1, 'a': 2}));
      final b = canonicalPayload(schema,
          record(id: 'aaaaaaaaaaaaaaa', name: 'x', meta: {'a': 2, 'b': 1}));
      expect(a, b);
      expect(a, '{"id":"aaaaaaaaaaaaaaa","meta":{"a":2,"b":1},"name":"x"}');
    });

    test('payloadHash is the sha256 of the canonical payload', () {
      final logical = record(id: 'aaaaaaaaaaaaaaa', name: 'x', qty: 1);
      final hash = payloadHash(schema, logical);
      expect(hash, sha256Hex(canonicalPayload(schema, logical)));
      expect(hash, hasLength(64));
      expect(hash,
          isNot(payloadHash(schema, record(id: 'aaaaaaaaaaaaaaa', name: 'y'))));
    });

    test('lossless round-trip preserves payload hash', () {
      final id = generateRecordId();
      final written = record(
        id: id,
        name: 'lossless',
        qty: 42,
        price: 3.5,
        active: true,
        madeOn: 1700000000000,
        size: 'L',
        meta: {
          'nested': {
            'a': [1, 2]
          }
        },
        tags: ['x', 'y'],
        ownerId: 'owner',
        phone: '555',
        extra: {
          'extra_key': {'deep': true}
        },
      );
      final row =
          encodeDbRow(schema, id: id, logical: written, archived: false);
      final decoded = decodeDbRow(schema, row);
      expect(canonicalPayload(schema, decoded),
          canonicalPayload(schema, {...written, 'id': id}));
      expect(payloadHash(schema, decoded),
          payloadHash(schema, {...written, 'id': id}));
    });
  });

  group('codec provider failures', () {
    final encSchema = CollectionSchema<Object?>(
      name: 'secrets',
      version: 1,
      fields: [
        Field.text('name'),
        Field.text('secret', encrypted: true),
        Field.int('code', encrypted: true),
        Field.json('blob', encrypted: true),
      ],
    );
    final key = List<int>.generate(32, (i) => (i * 7 + 13) % 256);
    final cipher = AesGcmFieldCipher(key);

    Map<String, Object?> encryptedRow(
            String id, Map<String, Object?> logical) =>
        encodeDbRow(encSchema,
            id: id, logical: logical, archived: false, cipher: cipher);

    test('encrypted field encode without cipher throws StateError', () {
      expect(
        () => encodeDbRow(encSchema,
            id: 'aaaaaaaaaaaaaaa', logical: {'secret': 'v'}, archived: false),
        throwsA(isA<StateError>().having((e) => e.message, 'message',
            contains('no FieldCipher was provided'))),
      );
    });

    test('encrypted field decode without cipher throws StateError', () {
      final row = encryptedRow('aaaaaaaaaaaaaaa', {'secret': 'v'});
      expect(
        () => decodeDbRow(encSchema, row),
        throwsA(isA<StateError>().having((e) => e.message, 'message',
            contains('no FieldCipher was provided'))),
      );
    });

    test('projected decode of encrypted field without cipher throws StateError',
        () {
      final row = encryptedRow('aaaaaaaaaaaaaaa', {'secret': 'v'});
      expect(
        () => decodeDbRowsProjected(encSchema, [row], columns: ['secret']),
        throwsA(isA<StateError>()),
      );
    });

    test('async variants also require the cipher', () async {
      expect(
        () => encodeDbRows(encSchema, [
          {'secret': 'v'}
        ]),
        throwsA(isA<StateError>()),
      );
      final row = encryptedRow('aaaaaaaaaaaaaaa', {'secret': 'v'});
      await expectLater(
        decodeDbRowsAsync(encSchema, [row]),
        throwsA(isA<StateError>()),
      );
    });

    test('invalid base64 ciphertext throws FormatException', () {
      final row = {
        'id': 'aaaaaaaaaaaaaaa',
        'name': null,
        'secret': '!!!not-base64!!!',
        'code': null,
        'blob': null,
        'archived': 0,
        'hidden': 0,
        'extra': '',
      };
      expect(
        () => decodeDbRow(encSchema, row, cipher: cipher),
        throwsA(isA<FormatException>()),
      );
    });

    test('malformed plaintext number for encrypted int throws FormatException',
        () {
      final row = {
        'id': 'aaaaaaaaaaaaaaa',
        'name': null,
        'secret': null,
        // ciphertext whose decrypted plaintext is not an integer
        'code': base64Encode(cipher.encrypt(utf8.encode('not-an-int'))),
        'blob': null,
        'archived': 0,
        'hidden': 0,
        'extra': '',
      };
      expect(
        () => decodeDbRow(encSchema, row, cipher: cipher),
        throwsA(isA<FormatException>()),
      );
    });

    test('malformed plaintext JSON for encrypted json throws FormatException',
        () {
      final row = {
        'id': 'aaaaaaaaaaaaaaa',
        'name': null,
        'secret': null,
        'code': null,
        'blob': base64Encode(cipher.encrypt(utf8.encode('{invalid json'))),
        'archived': 0,
        'hidden': 0,
        'extra': '',
      };
      expect(
        () => decodeDbRow(encSchema, row, cipher: cipher),
        throwsA(isA<FormatException>()),
      );
    });

    test('malformed extra JSON throws FormatException', () {
      final row = {
        'id': 'aaaaaaaaaaaaaaa',
        'name': null,
        'secret': null,
        'code': null,
        'blob': null,
        'archived': 0,
        'hidden': 0,
        'extra': '{not json',
      };
      expect(
        () => decodeDbRow(encSchema, row, cipher: cipher),
        throwsA(isA<FormatException>()),
      );
    });

    test('non-string json db value throws TypeError (documented)', () {
      final row = {
        'id': 'aaaaaaaaaaaaaaa',
        'name': null,
        'secret': null,
        'code': null,
        'blob': 123, // INTEGER instead of canonical TEXT
        'archived': 0,
        'hidden': 0,
        'extra': '',
      };
      expect(
        () => decodeDbRow(encSchema, row, cipher: cipher),
        throwsA(isA<TypeError>()),
      );
    });

    test(
        'encrypted text field with a non-string logical value throws TypeError',
        () {
      expect(
        () => encodeDbRow(encSchema,
            id: 'aaaaaaaaaaaaaaa',
            logical: {'secret': 123},
            archived: false,
            cipher: cipher),
        throwsA(isA<TypeError>()),
      );
    });

    test('SingleKeyCryptoProvider supplies the same cipher to every field',
        () async {
      final provider = SingleKeyCryptoProvider(cipher);
      expect(provider.getFieldCipher('secrets', 'secret'), same(cipher));
      expect(provider.getFieldCipher('other', 'anything'), same(cipher));

      final id = generateRecordId();
      final row = encodeDbRow(
        encSchema,
        id: id,
        logical: {
          'name': 'n',
          'secret': 's',
          'code': 42,
          'blob': {'a': 1}
        },
        archived: false,
        cryptoProvider: provider,
      );
      // Raw storage is base64 text for each encrypted field.
      expect(row['secret'], isA<String>());
      expect(row['code'], isA<String>());
      expect(row['blob'], isA<String>());

      final decoded = decodeDbRow(encSchema, row, cryptoProvider: provider);
      expect(decoded['secret'], 's');
      expect(decoded['code'], 42);
      expect(decoded['blob'], {'a': 1});
    });

    test('provider returning different ciphers per store/field', () {
      final keyA = List<int>.generate(32, (i) => i);
      final keyB = List<int>.generate(32, (i) => (i * 3 + 1) % 256);
      final cipherA = AesGcmFieldCipher(keyA);
      final cipherB = AesGcmFieldCipher(keyB);

      final provider = _PerFieldProvider({
        ('secrets', 'secret'): cipherA,
        ('secrets', 'code'): cipherB,
        ('secrets', 'blob'): cipherA,
      });

      // Encoding uses the per-field cipher; decoding with the same provider
      // must recover each field with its own key.
      final id = generateRecordId();
      final row = encodeDbRow(
        encSchema,
        id: id,
        logical: {
          'name': 'n',
          'secret': 's',
          'code': 7,
          'blob': [1, 2]
        },
        archived: false,
        cryptoProvider: provider,
      );
      final decoded = decodeDbRow(encSchema, row, cryptoProvider: provider);
      expect(decoded['secret'], 's');
      expect(decoded['code'], 7);
      expect(decoded['blob'], [1, 2]);

      // Decoding with a wrong provider (all fields under cipherA) fails for
      // the field encrypted under cipherB.
      expect(
        () => decodeDbRow(encSchema, row,
            cryptoProvider: SingleKeyCryptoProvider(cipherA)),
        throwsA(anything),
      );
    });

    test('missing cipher provider for an encrypted field throws StateError',
        () {
      final id = generateRecordId();
      final row = encodeDbRow(
        encSchema,
        id: id,
        logical: {'name': 'n', 'secret': 's', 'code': 1, 'blob': {}},
        archived: false,
        cryptoProvider: SingleKeyCryptoProvider(cipher),
      );
      expect(
        () => decodeDbRow(encSchema, row), // no provider at all
        throwsA(isA<StateError>()),
      );
    });
  });
}

/// A [CryptoProvider] that returns a different cipher per (store, field).
class _PerFieldProvider implements CryptoProvider {
  final Map<(String, String), FieldCipher> _byField;
  _PerFieldProvider(this._byField);

  @override
  FieldCipher? getFieldCipher(String storeName, String fieldName) =>
      _byField[(storeName, fieldName)];
}
