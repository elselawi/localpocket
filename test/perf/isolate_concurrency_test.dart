import 'dart:convert';
import 'dart:typed_data';

import 'package:localpocket/localpocket.dart';
import 'package:localpocket/sync.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import '../sync/engine/engine_helpers.dart';
import '../sync/engine/mock_backend.dart';

void main() {
  group('Isolates — Delta Pull Normalization & Document Batch Decrypt/Encrypt', () {
    final keyBytes = List<int>.generate(32, (i) => (i * 11 + 19) % 256);
    final cipher = AesGcmFieldCipher(keyBytes);

    final schema = CollectionSchema<Object?>(
      name: 'patients',
      version: 1,
      fields: [
        Field.text('full_name', required: true),
        Field.int('birth_year'),
        Field.text('notes', encrypted: true),
        Field.json('vitals', encrypted: true),
      ],
    );

    test('isolate_delta_pull_normalization_parity_and_quarantine', () async {
      // 1. Generate 50 remote records, 3 of which are malformed (missing required field or wrong type)
      final remotes = <RemoteRecord>[];
      for (var i = 0; i < 50; i++) {
        final id = generateRecordId();
        if (i == 13) {
          // Missing required full_name
          remotes.add(RemoteRecord(
            id: id,
            store: 'patients',
            updated: '2026-01-01 00:00:00.000Z',
            data: {'birth_year': 1990},
          ));
        } else if (i == 27) {
          // Wrong type for birth_year
          remotes.add(RemoteRecord(
            id: id,
            store: 'patients',
            updated: '2026-01-01 00:00:00.000Z',
            data: {'full_name': 'Patient $i', 'birth_year': 'invalid_string'},
          ));
        } else {
          remotes.add(RemoteRecord(
            id: id,
            store: 'patients',
            updated: '2026-01-01 00:00:00.000Z',
            data: {
              'full_name': 'Patient $i',
              'birth_year': 1980 + (i % 30),
              'notes': 'Clinical history for patient $i',
              'vitals': {'bp': '120/80', 'pulse': 70 + (i % 20)},
            },
          ));
        }
      }

      // 2. Synchronous normalization vs Isolate-offloaded normalization
      final syncBatch = normalizeRemoteBatch(schema, remotes);
      final asyncBatch = await normalizeRemoteBatchAsync(schema, remotes, isolateThreshold: 10);

      expect(asyncBatch.length, syncBatch.length);
      for (var i = 0; i < syncBatch.length; i++) {
        final s = syncBatch[i];
        final a = asyncBatch[i];
        expect(a.isSuccess, equals(s.isSuccess));
        expect(a.error, equals(s.error));
        expect(a.remotePayloadJson, equals(s.remotePayloadJson));
        expect(a.remoteHash, equals(s.remoteHash));
        expect(a.logical, equals(s.logical));
      }

      expect(asyncBatch[13].isSuccess, isFalse);
      expect(asyncBatch[13].error, contains('Required field "full_name" is missing'));

      expect(asyncBatch[27].isSuccess, isFalse);
      expect(asyncBatch[27].error, contains('must be an integer'));
    });

    test('isolate_delta_pull_in_engine_sync_with_large_page', () async {
      final mock = MockSyncBackend();
      final dbPath = await tempDbPath();
      final h = await EngineHarness.create(
        mock: mock,
        stores: [schema],
        fieldCipher: cipher,
        config: testConfig(maxPage: 100),
        path: dbPath.path,
      );
      addTearDown(() async {
        await h.close();
        await dbPath.cleanup();
      });

      // Seed 80 records on the mock server
      final seededIds = <String>[];
      for (var i = 0; i < 80; i++) {
        final id = mock.seed(
          store: 'patients',
          data: {
            'full_name': 'Remote Patient $i',
            'birth_year': 1970 + i,
            'notes': 'Notes $i',
            'vitals': {'hr': 60 + (i % 30)},
          },
        );
        seededIds.add(id);
      }

      // Run pull (triggers isolate batch normalization for the 80 records)
      final report = await h.engine.puller.pullStore('patients');
      expect(report.applied, 80);

      // Verify records stored and readable
      final count = await h.pocket.collection('patients').query().count();
      expect(count, 80);

      final p0 = await h.pocket.collection('patients').get(seededIds.first);
      expect(p0!['full_name'], 'Remote Patient 0');
      expect(p0['birth_year'], 1970);
    });

    test('isolate_batch_encrypt_and_decrypt_documents', () async {
      final docs = <Map<String, Object?>>[];
      for (var i = 0; i < 60; i++) {
        docs.add({
          'id': generateRecordId(),
          'full_name': 'Encrypted Person $i',
          'birth_year': 1990 + (i % 10),
          'notes': 'Confidential diagnostic records $i' * 5,
          'vitals': {'heartRate': 70, 'bloodPressure': '125/82', 'details': 'Record $i'},
        });
      }

      // Batch encode (encrypts in isolate)
      final dbRows = await encodeDbRowsAsync(
        schema,
        docs,
        cipher: cipher,
        isolateThreshold: 10,
      );
      expect(dbRows.length, docs.length);

      // Ensure fields on disk rows are encrypted base64 strings
      for (final row in dbRows) {
        expect(row['notes'], isA<String>());
        expect(row['notes'], isNot(contains('Confidential')));
        expect(row['vitals'], isA<String>());
        expect(row['vitals'], isNot(contains('heartRate')));
      }

      // Batch decode (decrypts in isolate)
      final decodedDocs = await decodeDbRowsAsync(
        schema,
        dbRows,
        cipher: cipher,
        isolateThreshold: 10,
      );
      expect(decodedDocs.length, docs.length);

      for (var i = 0; i < docs.length; i++) {
        expect(decodedDocs[i]['id'], docs[i]['id']);
        expect(decodedDocs[i]['full_name'], docs[i]['full_name']);
        expect(decodedDocs[i]['birth_year'], docs[i]['birth_year']);
        expect(decodedDocs[i]['notes'], docs[i]['notes']);
        expect(decodedDocs[i]['vitals'], docs[i]['vitals']);
      }
    });

    test('isolate_batch_decrypt_in_query_fetch', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);

      final pocket = await openPocket(
        path: t.path,
        stores: [schema],
        fieldCipher: cipher,
      );
      addTearDown(pocket.close);

      final col = pocket.collection('patients');
      const total = 75;
      await pocket.transaction((tx) async {
        for (var i = 0; i < total; i++) {
          await tx.collection('patients').put({
            'id': generateRecordId(),
            'full_name': 'Patient Name $i',
            'birth_year': 1980 + i,
            'notes': 'Secret notes $i',
            'vitals': {'pulse': 72, 'i': i},
          });
        }
      });

      // fetch() with limit 50 triggers decodeDbRowsAsync across isolate
      final page = await col.query().limit(50).fetch();
      expect(page.items.length, 50);
      expect(page.hasMore, isTrue);

      for (var i = 0; i < page.items.length; i++) {
        final item = page.items[i];
        expect(item['full_name'], startsWith('Patient Name'));
        expect(item['notes'], startsWith('Secret notes'));
        expect(item['vitals'], isA<Map>());
      }
    });

    test('isolate_aes_gcm_async_large_payload_and_batch_methods', () async {
      // 1. Large single payload (> 64 KB) offloaded to isolate
      final largePlaintext = utf8.encode('A' * (128 * 1024));
      final ciphertext = await cipher.encryptAsync(largePlaintext, isolateThresholdBytes: 32 * 1024);
      final decrypted = await cipher.decryptAsync(ciphertext, isolateThresholdBytes: 32 * 1024);
      expect(decrypted, equals(largePlaintext));

      // 2. Batch encrypt & decrypt
      final plaintexts = List.generate(20, (i) => utf8.encode('Batch message $i with some padding content'));
      final batchCiphertexts = await cipher.batchEncrypt(plaintexts, isolateThreshold: 5);
      expect(batchCiphertexts.length, 20);

      final batchDecrypted = await cipher.batchDecrypt(batchCiphertexts, isolateThreshold: 5);
      expect(batchDecrypted.length, 20);
      for (var i = 0; i < 20; i++) {
        expect(utf8.decode(batchDecrypted[i]), 'Batch message $i with some padding content');
      }
    });

    test('isolate_encrypting_blob_store_with_cipher', () async {
      final mem = MemoryBlobStore();
      final encStore = EncryptingBlobStore.withCipher(mem, cipher);

      // 128 KB binary blob
      final payload = Uint8List.fromList(List.generate(128 * 1024, (i) => (i * 13) % 256));
      final hash = await encStore.put(Stream.value(payload));

      // Blob on inner store is encrypted
      final innerStream = await mem.open(hash);
      final innerBytes = await innerStream.fold<BytesBuilder>(BytesBuilder(), (b, chunk) => b..add(chunk)).then((b) => b.takeBytes());
      expect(innerBytes, isNot(equals(payload)));

      // Opening through encStore decrypts back to original payload
      final openStream = await encStore.open(hash);
      final decryptedBytes = await openStream.fold<BytesBuilder>(BytesBuilder(), (b, chunk) => b..add(chunk)).then((b) => b.takeBytes());
      expect(decryptedBytes, equals(payload));
    });
  });
}
