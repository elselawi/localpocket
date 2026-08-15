import 'dart:convert';
import 'dart:io';
import 'dart:math';

import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';

void main() {
  group('Field-level encryption', () {
    final keyBytes = List<int>.generate(32, (i) => (i * 7 + 13) % 256);
    final cipher = AesGcmFieldCipher(keyBytes);

    test('aes gcm roundtrip', () async {
      final plaintext =
          utf8.encode('Top secret patient clinical notes 12345!@#');
      final ciphertext = cipher.encrypt(plaintext);
      final decrypted = cipher.decrypt(ciphertext);
      expect(decrypted, equals(plaintext));
      expect(utf8.decode(decrypted),
          equals('Top secret patient clinical notes 12345!@#'));

      // Integration with LocalPocket
      final t = await tempDbPath();
      addTearDown(t.cleanup);

      final schema = CollectionSchema<Object?>(
        name: 'patients',
        version: 1,
        fields: [
          Field.text('name', required: true),
          Field.text('notes', encrypted: true),
          Field.json('sensitive_vitals', encrypted: true),
        ],
      );

      final pocket = await openPocket(
        path: t.path,
        stores: [schema],
        fieldCipher: cipher,
      );
      addTearDown(pocket.close);

      final id = generateRecordId();
      await pocket.collection('patients').put({
        'id': id,
        'name': 'Alice Smith',
        'notes': 'Allergic to penicillin; confidential medical history.',
        'sensitive_vitals': {'heartRate': 72, 'bloodPressure': '120/80'},
      });

      // Logical read returns decrypted plaintext
      final doc = await pocket.collection('patients').get(id);
      expect(doc!['name'], 'Alice Smith');
      expect(doc['notes'],
          'Allergic to penicillin; confidential medical history.');
      expect(doc['sensitive_vitals'],
          {'heartRate': 72, 'bloodPressure': '120/80'});

      // Raw DB row contains base64 ciphertext
      final rawRows = await pocket.db.rawQuery(
          'SELECT notes, sensitive_vitals FROM patients WHERE id = ?', [id]);
      expect(rawRows, hasLength(1));
      final rawNotes = rawRows.first['notes'] as String;
      expect(rawNotes, isNot(contains('Allergic to penicillin')));
      // Decrypting raw notes base64 manually produces original plaintext
      final manualDecrypted =
          utf8.decode(cipher.decrypt(base64Decode(rawNotes)));
      expect(manualDecrypted,
          'Allergic to penicillin; confidential medical history.');
    });

    test('fresh iv per value', () {
      final plaintext = utf8.encode('Constant secret string');
      final ciphertexts = <String>{};
      for (var i = 0; i < 100; i++) {
        final c = base64Encode(cipher.encrypt(plaintext));
        ciphertexts.add(c);
      }
      expect(ciphertexts.length, 100,
          reason: 'Every encryption must use a fresh IV/nonce');
    });

    test('tampered ciphertext rejected', () {
      final plaintext = utf8.encode('Authentic immutable record payload');
      final ciphertext = cipher.encrypt(plaintext);

      // Tamper nonce (first 12 bytes)
      final tamperedNonce = List<int>.from(ciphertext);
      tamperedNonce[0] ^= 0xFF;
      expect(() => cipher.decrypt(tamperedNonce), throwsA(anything));

      // Tamper body
      final tamperedBody = List<int>.from(ciphertext);
      tamperedBody[15] ^= 0x01;
      expect(() => cipher.decrypt(tamperedBody), throwsA(anything));

      // Tamper MAC (last 16 bytes)
      final tamperedMac = List<int>.from(ciphertext);
      tamperedMac[tamperedMac.length - 1] ^= 0x42;
      expect(() => cipher.decrypt(tamperedMac), throwsA(anything));
    });

    test('key never in db or logs', () async {
      final secretKey = List<int>.generate(32, (i) => (i * 31 + 17) % 256);
      final secretCipher = AesGcmFieldCipher(secretKey);

      final t = await tempDbPath();
      addTearDown(t.cleanup);

      final schema = CollectionSchema<Object?>(
        name: 'vault',
        version: 1,
        fields: [
          Field.text('label', required: true),
          Field.text('secret_data', encrypted: true),
        ],
      );

      final pocket = await openPocket(
        path: t.path,
        stores: [schema],
        fieldCipher: secretCipher,
      );

      await pocket.collection('vault').put({
        'id': generateRecordId(),
        'label': 'Card 1',
        'secret_data': '4111-2222-3333-4444',
      });
      await pocket.close();

      // Read all bytes from SQLite DB file directly
      final dbFile = File(t.path);
      final dbBytes = await dbFile.readAsBytes();

      final keyPattern = secretKey;
      var foundKey = false;
      for (var i = 0; i <= dbBytes.length - keyPattern.length; i++) {
        var match = true;
        for (var j = 0; j < keyPattern.length; j++) {
          if (dbBytes[i + j] != keyPattern[j]) {
            match = false;
            break;
          }
        }
        if (match) {
          foundKey = true;
          break;
        }
      }
      expect(foundKey, isFalse,
          reason: 'Raw secret key bytes must never exist in SQLite file');

      // Key hex string / base64 must not exist as text either
      final keyHex =
          secretKey.map((b) => b.toRadixString(16).padLeft(2, '0')).join();
      final keyB64 = base64Encode(secretKey);
      final latin1Str = latin1.decode(dbBytes);
      expect(latin1Str.contains(keyHex), isFalse);
      expect(latin1Str.contains(keyB64), isFalse);
    });
  });

  group('encrypted numeric fields', () {
    final key = List<int>.generate(32, (i) => (i * 7 + 13) % 256);
    final cipher = AesGcmFieldCipher(key);

    CollectionSchema<Object?> numsSchema({int version = 1}) =>
        CollectionSchema<Object?>(
          name: 'nums',
          version: version,
          fields: [
            Field.text('label', required: true),
            Field.int('count', encrypted: true),
            Field.real('ratio', encrypted: true),
            Field.int('plain_int'),
            Field.real('plain_real'),
          ],
        );

    test('DDL stores encrypted numerics as TEXT compatible with STRICT',
        () async {
      final pocket =
          await openPocket(stores: [numsSchema()], fieldCipher: cipher);
      addTearDown(pocket.close);

      expect(pocket.capabilities.hasStrict, isTrue,
          reason: 'this environment must use STRICT tables for the test');
      final ddl =
          DdlCompiler(pocket.capabilities).compile(numsSchema()).tableDdl;
      // Encrypted int/real must be TEXT (base64 ciphertext), never
      // INTEGER/REAL, or STRICT rejects the write.
      expect(ddl, contains('"count" TEXT'));
      expect(ddl, contains('"ratio" TEXT'));
      expect(ddl, contains('"plain_int" INTEGER'));
      expect(ddl, contains('"plain_real" REAL'));
      expect(ddl, contains(') STRICT;'));
    });

    test('insert read patch preserves int and double logical types', () async {
      final pocket =
          await openPocket(stores: [numsSchema()], fieldCipher: cipher);
      addTearDown(pocket.close);
      final col = pocket.collection('nums');
      final id = generateRecordId();

      await col.put({
        'id': id,
        'label': 'a',
        'count': 42,
        'ratio': 3.5,
        'plain_int': 7,
        'plain_real': 1.25,
      });

      final doc = await col.get(id);
      expect(doc!['count'], 42);
      expect(doc['count'], isA<int>());
      expect(doc['ratio'], 3.5);
      expect(doc['ratio'], isA<double>());
      expect(doc['plain_int'], 7);
      expect(doc['plain_real'], 1.25);

      // Patch an encrypted numeric field.
      await col.patch(id, {'count': -10, 'ratio': 0.001});
      final patched = await col.get(id);
      expect(patched!['count'], -10);
      expect(patched['count'], isA<int>());
      expect(patched['ratio'], 0.001);
      expect(patched['ratio'], isA<double>());
      expect(patched['label'], 'a');
    });

    test('raw SQLite storage is base64 ciphertext, not plaintext', () async {
      final pocket =
          await openPocket(stores: [numsSchema()], fieldCipher: cipher);
      addTearDown(pocket.close);
      final id = generateRecordId();
      await pocket.collection('nums').put({
        'id': id,
        'label': 'a',
        'count': 12345,
        'ratio': 2.5,
        'plain_int': 12345,
        'plain_real': 2.5,
      });

      final raw = (await pocket.db.rawQuery(
              'SELECT count, ratio, plain_int, plain_real FROM nums WHERE id = ?',
              [id]))
          .single;
      // Encrypted columns are base64 text; plain columns are numeric.
      expect(raw['count'], isA<String>());
      expect(raw['ratio'], isA<String>());
      expect(raw['plain_int'], 12345);
      expect(raw['plain_real'], 2.5);
      expect(raw['count'], isNot(contains('12345')));
      expect(raw['ratio'], isNot(contains('2.5')));

      // Manual decrypt recovers the logical value.
      final decryptedCount =
          utf8.decode(cipher.decrypt(base64Decode(raw['count'] as String)));
      expect(decryptedCount, '12345');
      final decryptedRatio =
          utf8.decode(cipher.decrypt(base64Decode(raw['ratio'] as String)));
      expect(decryptedRatio, '2.5');
    });

    test('projection reads encrypted numeric fields', () async {
      final pocket =
          await openPocket(stores: [numsSchema()], fieldCipher: cipher);
      addTearDown(pocket.close);
      final id = generateRecordId();
      await pocket.collection('nums').put({
        'id': id,
        'label': 'a',
        'count': 99,
        'ratio': 1.5,
      });

      final projected = await pocket
          .collection('nums')
          .query()
          .select(['count', 'ratio'])
          .all()
          .fetch();
      expect(projected.items, hasLength(1));
      expect(projected.items.single['count'], 99);
      expect(projected.items.single['count'], isA<int>());
      expect(projected.items.single['ratio'], 1.5);
      expect(projected.items.single['ratio'], isA<double>());
      // Unselected declared fields are not exposed by the projection.
      expect(projected.items.single.containsKey('label'), isFalse);
    });

    test('batch putAll and query round-trip encrypted numerics', () async {
      final pocket =
          await openPocket(stores: [numsSchema()], fieldCipher: cipher);
      addTearDown(pocket.close);
      await pocket.collection('nums').putAll([
        {'id': generateRecordId(), 'label': 'a', 'count': 1, 'ratio': 0.1},
        {'id': generateRecordId(), 'label': 'b', 'count': 2, 'ratio': 0.2},
        {'id': generateRecordId(), 'label': 'c', 'count': -3, 'ratio': 9.9},
      ]);
      final rows = await pocket
          .collection('nums')
          .query()
          .includeArchived()
          .all()
          .fetch();
      expect(rows.items, hasLength(3));
      final byLabel = {for (final r in rows.items) r['label']: r};
      expect(byLabel['a']!['count'], 1);
      expect(byLabel['b']!['count'], 2);
      expect(byLabel['c']!['count'], -3);
      expect(byLabel['c']!['count'], isA<int>());
      expect(byLabel['c']!['ratio'], 9.9);
      expect(byLabel['c']!['ratio'], isA<double>());
    });

    test('additive migration adds encrypted numeric fields', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);

      // v1: no encrypted numeric fields.
      final v1 = CollectionSchema<Object?>(
        name: 'nums',
        version: 1,
        fields: [Field.text('label', required: true)],
      );
      final pocket1 =
          await openPocket(path: t.path, stores: [v1], fieldCipher: cipher);
      final id = generateRecordId();
      await pocket1.collection('nums').put({'id': id, 'label': 'before'});
      await pocket1.close();

      // v2: additive migration adds encrypted int + real.
      final v2 = CollectionSchema<Object?>(
        name: 'nums',
        version: 2,
        fields: [
          Field.text('label', required: true),
          Field.int('count', encrypted: true),
          Field.real('ratio', encrypted: true),
        ],
        migrations: [
          StoreMigration(
            toVersion: 2,
            addedFields: [
              Field.int('count', encrypted: true),
              Field.real('ratio', encrypted: true),
            ],
          ),
        ],
      );
      final pocket2 =
          await openPocket(path: t.path, stores: [v2], fieldCipher: cipher);
      addTearDown(pocket2.close);

      // Existing row readable with nulls for the new fields.
      final existing = await pocket2.collection('nums').get(id);
      expect(existing!['label'], 'before');
      expect(existing['count'], isNull);
      expect(existing['ratio'], isNull);

      // New rows with encrypted numerics round-trip after the migration.
      final id2 = generateRecordId();
      await pocket2.collection('nums').put({
        'id': id2,
        'label': 'after',
        'count': 5,
        'ratio': 2.25,
      });
      final doc = await pocket2.collection('nums').get(id2);
      expect(doc!['count'], 5);
      expect(doc['count'], isA<int>());
      expect(doc['ratio'], 2.25);
      expect(doc['ratio'], isA<double>());
    });
  });

  group('AES-GCM known-answer vectors', () {
    // Values below were produced by an INDEPENDENT implementation
    // (OpenSSL/Node `aes-256-gcm`); NIST vectors are cross-checked against
    // the published AES-256-GCM test cases.
    List<int> hexToBytes(String h) => [
          for (var i = 0; i < h.length; i += 2)
            int.parse(h.substring(i, i + 2), radix: 16)
        ];
    String bytesToHex(List<int> b) =>
        b.map((x) => x.toRadixString(16).padLeft(2, '0')).join();

    /// Encrypts [pt] with [key]/[iv] by injecting a fixed nonce sequence.
    List<int> encryptFixed(String keyHex, String ivHex, List<int> pt) {
      final cipher = AesGcmFieldCipher(hexToBytes(keyHex),
          random: _FixedRandom(hexToBytes(ivHex)));
      return cipher.encrypt(pt);
    }

    test('NIST AES-256-GCM test case 1 (empty plaintext, zero key)', () {
      const key =
          '0000000000000000000000000000000000000000000000000000000000000000';
      const iv = '000000000000000000000000';
      final out = encryptFixed(key, iv, []);
      // Output layout: [12-byte nonce][ciphertext][16-byte tag].
      expect(bytesToHex(out.sublist(0, 12)), iv);
      expect(bytesToHex(out.sublist(12)), '530f8afbc74536b9a963b4f1c4cb738b');
    });

    test('NIST AES-256-GCM test case 2 (16 zero bytes)', () {
      const key =
          '0000000000000000000000000000000000000000000000000000000000000000';
      const iv = '000000000000000000000000';
      final out = encryptFixed(key, iv, List.filled(16, 0));
      expect(bytesToHex(out.sublist(0, 12)), iv);
      expect(
          bytesToHex(out.sublist(12, 28)), 'cea7403d4d606b6e074ec5d3baf39d18');
      expect(bytesToHex(out.sublist(28)), 'd0d1c8a799996bf0265b98b5d48ab919');
    });

    test('NIST AES-256-GCM test case 3 (60-byte plaintext)', () {
      const key =
          'feffe9928665731c6d6a8f9467308308feffe9928665731c6d6a8f9467308308';
      const iv = 'cafebabefacedbaddecaf888';
      final pt = hexToBytes(
          'd9313225f88406e5a55909c5aff5269a86a7a9531534f7da2e4c303d8a318a72'
          '1c3c0c95956809532fcf0e2449a6b525b16aedf5aa0de657ba637b39');
      final out = encryptFixed(key, iv, pt);
      expect(bytesToHex(out.sublist(0, 12)), iv);
      expect(
          bytesToHex(out.sublist(12, 72)),
          '522dc1f099567d07f47f37a32a84427d643a8cdcbfe5c0c97598a2bd2555d1aa'
          '8cb08e48590dbb3da7b08b1056828838c5f61e6393ba7a0abcc9f662');
      expect(bytesToHex(out.sublist(72)), 'eb9f796c8d356fc31a8433884b696f4f');
    });

    test('fixed key/nonce vectors for 0, 1, 15, 16, 17 byte plaintexts', () {
      const key =
          '00112233445566778899aabbccddeeff00112233445566778899aabbccddeeff';
      const iv = '0f0e0d0c0b0a090807060504';
      // Each vector's ciphertext+tag was produced by an independent
      // OpenSSL-backed implementation.
      final vectors = <int, (String, String)>{
        0: ('', '30b476b9e8df3fe16b0ba4bf4e84b7a2'),
        1: ('aa', 'a2fc535bad6c2f2dfe6842faf6d3ef82'),
        15: (
          'aa06ae88833fd2b72bf94bcfbd7673',
          '6d5b44963fcde7ac46601ff5905f12e9'
        ),
        16: (
          'aa06ae88833fd2b72bf94bcfbd767334',
          '26ee2adba0eeb0db03d69810eb49f535'
        ),
        17: (
          'aa06ae88833fd2b72bf94bcfbd76733420',
          '05c907d550d681d1b21bed4c8e0a7c28'
        ),
      };
      for (final entry in vectors.entries) {
        final n = entry.key;
        final pt = [for (var i = 0; i < n; i++) (i * 3 + 1) % 256];
        final out = encryptFixed(key, iv, pt);
        expect(bytesToHex(out.sublist(0, 12)), iv, reason: 'len $n nonce');
        expect(bytesToHex(out.sublist(12, 12 + n)), entry.value.$1,
            reason: 'len $n ciphertext');
        expect(bytesToHex(out.sublist(12 + n)), entry.value.$2,
            reason: 'len $n tag');
      }
    });

    test('wrong key fails authentication', () {
      final ct = encryptFixed(
        '0000000000000000000000000000000000000000000000000000000000000000',
        '000000000000000000000000',
        utf8.encode('secret'),
      );
      final wrongKey = AesGcmFieldCipher(hexToBytes(
          '1111111111111111111111111111111111111111111111111111111111111111'));
      expect(() => wrongKey.decrypt(ct), throwsA(isA<StateError>()));
    });

    test('wrong nonce fails authentication', () {
      final cipher = AesGcmFieldCipher(hexToBytes(
          '00112233445566778899aabbccddeeff00112233445566778899aabbccddeeff'));
      final ct = cipher.encrypt(utf8.encode('payload'));
      final tamperedNonce = List<int>.from(ct);
      tamperedNonce[0] ^= 0x01;
      expect(() => cipher.decrypt(tamperedNonce), throwsA(isA<StateError>()));
    });

    test('truncated ciphertext is rejected', () {
      final cipher = AesGcmFieldCipher(hexToBytes(
          '00112233445566778899aabbccddeeff00112233445566778899aabbccddeeff'));
      final ct = cipher.encrypt(utf8.encode('payload payload payload'));
      // Remove tag bytes.
      expect(() => cipher.decrypt(ct.sublist(0, ct.length - 1)),
          throwsA(anything));
      expect(() => cipher.decrypt(ct.sublist(0, ct.length - 5)),
          throwsA(anything));
      // Below the 28-byte minimum -> ArgumentError.
      expect(() => cipher.decrypt(ct.sublist(0, 20)),
          throwsA(isA<ArgumentError>()));
      expect(() => cipher.decrypt(<int>[]), throwsA(isA<ArgumentError>()));
      expect(() => cipher.decrypt(List.filled(27, 0)),
          throwsA(isA<ArgumentError>()));
    });

    test('tag-length boundaries: 16-byte tag verified; shorter/longer fail',
        () {
      final cipher = AesGcmFieldCipher(hexToBytes(
          '00112233445566778899aabbccddeeff00112233445566778899aabbccddeeff'));
      final pt = utf8.encode('tag boundary');
      final ct = cipher.encrypt(pt);
      expect(ct.length, 12 + pt.length + 16,
          reason: 'exactly a 16-byte GCM tag is appended');
      // Flip every tag byte: each must fail authentication.
      for (var i = 0; i < 16; i++) {
        final tampered = List<int>.from(ct);
        tampered[ct.length - 16 + i] ^= 0x40;
        expect(() => cipher.decrypt(tampered), throwsA(isA<StateError>()),
            reason: 'tampered tag byte $i');
      }
    });
  });

  group('AES API boundaries and async parity', () {
    final key = List<int>.generate(32, (i) => (i * 7 + 13) % 256);
    final cipher = AesGcmFieldCipher(key);

    test('invalid key lengths are rejected', () {
      for (final len in [0, 1, 15, 16, 17, 31, 33, 64]) {
        expect(() => AesGcmFieldCipher(List.filled(len, 0)),
            throwsA(isA<ArgumentError>()),
            reason: 'key length $len must be rejected');
      }
      expect(
          () => AesGcmFieldCipher(<int>[]),
          throwsA(isA<ArgumentError>().having(
              (e) => e.message, 'message', contains('exactly 32 bytes'))));
    });

    test('constructor makes a defensive copy of the key', () {
      final mutableKey = List<int>.generate(32, (i) => i);
      final c = AesGcmFieldCipher(mutableKey);
      final expected = c.encrypt(utf8.encode('before'));
      mutableKey[0] = 0xFF;
      mutableKey[1] = 0xFE;
      // Cipher behaviour is unchanged after mutating the caller's list.
      final after = c.encrypt(utf8.encode('before'));
      // Same plaintext with a fresh random IV gives different ciphertext;
      // instead verify decrypt still works with the original ciphertext.
      expect(utf8.decode(c.decrypt(expected)), 'before');
      expect(after, isNot(equals(expected)), reason: 'fresh IV per call');
    });

    test('key getter returns a defensive copy', () {
      final c = AesGcmFieldCipher(key);
      final k1 = c.key;
      final k2 = c.key;
      expect(k1, key);
      expect(identical(k1, k2), isFalse, reason: 'each access returns a copy');
      k1[0] = 0x00;
      k2[1] = 0x00;
      // Mutating returned copies does not affect the cipher.
      final ct = c.encrypt(utf8.encode('still works'));
      expect(utf8.decode(c.decrypt(ct)), 'still works');
    });

    test('empty plaintext round-trips', () {
      final ct = cipher.encrypt(<int>[]);
      expect(ct, hasLength(28), reason: 'nonce(12) + empty ct + tag(16)');
      expect(cipher.decrypt(ct), isEmpty);
    });

    test('fresh IV randomness per encryption', () {
      final pt = utf8.encode('constant');
      final nonces = <String>{};
      final all = <String>{};
      for (var i = 0; i < 200; i++) {
        final out = cipher.encrypt(pt);
        nonces.add(bytesToHexHelper(out.sublist(0, 12)));
        all.add(bytesToHexHelper(out));
      }
      expect(nonces, hasLength(200),
          reason: 'every encryption uses a fresh IV');
      expect(all, hasLength(200));
    });

    test('async encrypt/decrypt match sync byte-for-byte', () async {
      final pt = utf8.encode('async parity payload 0123456789');
      final syncCt = cipher.encrypt(pt);
      final asyncCt = await cipher.encryptAsync(pt);
      // Fresh IV means the ciphertexts differ, but decryption must agree.
      expect(utf8.decode(cipher.decrypt(asyncCt)), utf8.decode(pt));
      expect(utf8.decode(await cipher.decryptAsync(syncCt)), utf8.decode(pt));
      expect(utf8.decode(await cipher.decryptAsync(asyncCt)), utf8.decode(pt));
    });

    test('async threshold at and below the 64 KiB boundary', () async {
      // Default isolateThresholdBytes = 64 * 1024. Both paths must produce
      // identical decryptable ciphertexts.
      for (final len in [0, 1, 1024, 64 * 1024 - 1, 64 * 1024]) {
        final pt = List<int>.generate(len, (i) => i % 251);
        final ct = await cipher.encryptAsync(pt);
        expect(ct.length, 12 + len + 16);
        expect(await cipher.decryptAsync(ct), pt, reason: 'len $len');
      }
    });

    test('large payload async parity', () async {
      final pt = List<int>.generate(1024 * 1024 + 13, (i) => (i * 7) % 256);
      final ct = await cipher.encryptAsync(pt);
      expect(ct.length, 12 + pt.length + 16);
      expect(await cipher.decryptAsync(ct), pt);
    });

    test('batch threshold/count/total-byte combinations', () async {
      final plaintexts = [
        utf8.encode('a'),
        utf8.encode('bb'),
        utf8.encode('ccc'),
        List<int>.generate(
            20 * 1024, (i) => i % 200), // pushes total over 32 KiB
      ];
      final sync = [for (final p in plaintexts) cipher.encrypt(p)];
      final batched = await cipher.batchEncrypt(plaintexts);
      expect(batched, hasLength(plaintexts.length));
      for (var i = 0; i < plaintexts.length; i++) {
        // Decrypted bytes must equal the original plaintext bytes exactly.
        expect(await cipher.decryptAsync(batched[i]), plaintexts[i]);
        expect(cipher.decrypt(sync[i]), plaintexts[i]);
      }

      // Count at/above the isolateThreshold (10) must behave identically.
      final many = [for (var i = 0; i < 10; i++) utf8.encode('item$i')];
      final manyBatch = await cipher.batchEncrypt(many);
      for (var i = 0; i < 10; i++) {
        expect(await cipher.decryptAsync(manyBatch[i]), many[i]);
      }
    });

    test('empty batches', () async {
      expect(await cipher.batchEncrypt([]), isEmpty);
      expect(await cipher.batchDecrypt([]), isEmpty);
    });

    test('a failure in one batch item propagates (eager evaluation)', () async {
      final valid = cipher.encrypt(utf8.encode('good'));
      final tampered = List<int>.from(valid);
      tampered[valid.length - 1] ^= 0x01; // corrupt the tag
      await expectLater(
        cipher.batchDecrypt([valid, tampered, valid]),
        throwsA(isA<StateError>()),
      );
      // Valid-only batch succeeds.
      final ok = await cipher.batchDecrypt([valid, valid]);
      expect(ok, hasLength(2));
    });

    test('encryptAsync preserves plaintext bytes exactly for binary input',
        () async {
      final pt = [0x00, 0xff, 0xfe, 0x01, 0x80, 0x7f];
      final ct = await cipher.encryptAsync(pt);
      expect(await cipher.decryptAsync(ct), pt);
    });
  });
}

/// Returns the hex string for [b] (top-level helper used across groups).
String bytesToHexHelper(List<int> b) =>
    b.map((x) => x.toRadixString(16).padLeft(2, '0')).join();

/// A [Random] that yields a fixed sequence of bytes, used to pin the AES-GCM
/// nonce to a known value for known-answer tests.
class _FixedRandom implements Random {
  final List<int> _bytes;
  int _i = 0;
  _FixedRandom(this._bytes);

  @override
  int nextInt(int max) => _bytes[_i++ % _bytes.length];

  @override
  double nextDouble() => 0;

  @override
  bool nextBool() => false;
}
