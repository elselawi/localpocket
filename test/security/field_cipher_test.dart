import 'dart:convert';
import 'dart:io';

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
}
