import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';
import 'package:crypto/crypto.dart';
import 'package:localpocket/localpocket.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import '../support/helpers.dart';

/// Blob store tests.
void main() {
  group('BlobStore', () {
    late Directory tempDir;
    late NativeBlobStore store;

    setUp(() async {
      tempDir = await Directory.systemTemp.createTemp('lp_blob_test_');
      store = NativeBlobStore(tempDir.path);
    });

    tearDown(() async {
      if (await tempDir.exists()) {
        await tempDir.delete(recursive: true);
      }
    });

    test('put open delete roundtrip and hash verify', () async {
      final data = utf8.encode('hello blob store world');
      final expectedHash = sha256.convert(data).toString();

      final hash = await store.put(Stream.value(data));
      expect(hash, expectedHash);
      expect(await store.exists(hash), isTrue);
      expect(await store.size(hash), data.length);

      final openStream = await store.open(hash);
      final builder = BytesBuilder();
      await for (final chunk in openStream) {
        builder.add(chunk);
      }
      expect(builder.takeBytes(), equals(data));

      await store.delete(hash);
      expect(await store.exists(hash), isFalse);
    });

    test('size mismatch fails', () async {
      final data = utf8.encode('short data');
      expect(
        () => store.put(Stream.value(data), expectedSize: 999),
        throwsA(isA<StateError>()),
      );
    });

    test('interrupted put leaves only tmp', () async {
      final controller = StreamController<List<int>>();

      final putFuture = store.put(controller.stream);
      controller.add(utf8.encode('chunk 1'));
      controller.addError(Exception('simulated connection crash'));
      await controller.close();

      await expectLater(putFuture, throwsA(isA<Exception>()));

      // Blobs folder has 0 published blobs
      final hashes = await store.listHashes();
      expect(hashes, isEmpty);

      // Tmp folder has orphaned tmp file
      final tmpDir = Directory(p.join(tempDir.path, 'tmp'));
      final tmpFiles = await tmpDir.list().toList();
      expect(tmpFiles, isNotEmpty);
    });

    test('atomic publish no partial reads', () async {
      final data = Uint8List.fromList(List.generate(100000, (i) => i % 256));
      final hash = await store.put(Stream.value(data));

      final readStream = await store.open(hash);
      final builder = BytesBuilder();
      await for (final chunk in readStream) {
        builder.add(chunk);
      }
      expect(builder.takeBytes().length, 100000);
    });

    test('dedup same hash one blob refcount two', () async {
      final dbPath = await tempDbPath();
      final pocket = await openPocket(
        path: dbPath.path,
        blobStore: store,
        stores: [
          CollectionSchema(
            name: 'widgets',
            version: 1,
            fields: [Field.text('name')],
          ),
        ],
      );
      addTearDown(() async {
        await pocket.close();
        await dbPath.cleanup();
      });

      final bytes = utf8.encode('shared duplicate content');
      final rec1 = generateRecordId();
      final rec2 = generateRecordId();

      await pocket.collection('widgets').put({'id': rec1, 'name': 'w1'});
      await pocket.collection('widgets').put({'id': rec2, 'name': 'w2'});

      final ref1 = await pocket.files.attach(
        store: 'widgets',
        recordId: rec1,
        bytes: Stream.value(bytes),
      );
      final ref2 = await pocket.files.attach(
        store: 'widgets',
        recordId: rec2,
        bytes: Stream.value(bytes),
      );

      expect(ref1.hash, equals(ref2.hash));

      // In database, only 1 blob row with refcount = 2
      final blobRows = await pocket.db
          .query('lp_blobs', where: 'hash = ?', whereArgs: [ref1.hash]);
      expect(blobRows.length, 1);
      expect(blobRows.first['refcount'], 2);

      // On disk, exactly 1 blob file
      final diskHashes = await store.listHashes();
      expect(diskHashes.length, 1);
      expect(diskHashes.first, ref1.hash);
    });

    test('delete refused while referenced', () async {
      final dbPath = await tempDbPath();
      final pocket = await openPocket(
        path: dbPath.path,
        blobStore: store,
        stores: [
          CollectionSchema(
            name: 'widgets',
            version: 1,
            fields: [Field.text('name')],
          ),
        ],
      );
      addTearDown(() async {
        await pocket.close();
        await dbPath.cleanup();
      });

      final bytes = utf8.encode('active content');
      final rec = generateRecordId();
      await pocket.collection('widgets').put({'id': rec, 'name': 'w'});
      final ref = await pocket.files.attach(
        store: 'widgets',
        recordId: rec,
        bytes: Stream.value(bytes),
      );

      // GC run does not delete active blob with refcount > 0
      final cleaned = await pocket.files.gc(blobGrace: Duration.zero);
      expect(cleaned, 0);
      expect(await store.exists(ref.hash), isTrue);
    });

    test('encrypting store ciphertext at rest plaintext hash', () async {
      // Simple XOR / Caesar cipher mock
      List<int> enc(List<int> plain) =>
          plain.map((b) => (b + 42) % 256).toList();
      List<int> dec(List<int> cipher) =>
          cipher.map((b) => (b - 42 + 256) % 256).toList();

      final encStore = EncryptingBlobStore(store, encrypt: enc, decrypt: dec);
      final plaintext = utf8.encode('secret patient diagnosis');
      final expectedPlainHash = sha256.convert(plaintext).toString();

      final hash = await encStore.put(Stream.value(plaintext));
      expect(hash, expectedPlainHash,
          reason: 'hash must match plaintext SHA-256');

      // Check ciphertext on disk in inner store
      final diskStream = await store.open(hash);
      final diskBytes =
          await diskStream.fold<List<int>>([], (p, c) => [...p, ...c]);
      expect(diskBytes, equals(enc(plaintext)),
          reason: 'disk content is encrypted');
      expect(diskBytes, isNot(equals(plaintext)));

      // Open via EncryptingBlobStore returns decrypted plaintext
      final decryptedStream = await encStore.open(hash);
      final decryptedBytes =
          await decryptedStream.fold<List<int>>([], (p, c) => [...p, ...c]);
      expect(decryptedBytes, equals(plaintext));
    });

    test('shard path never derived from remote name', () async {
      final bytes = utf8.encode('arbitrary data');
      final hash = await store.put(Stream.value(bytes));

      // The shard path is purely hash[0:2] / hash, regardless of any user/remote name
      expect(hash.length, 64);
      final shard = hash.substring(0, 2);
      final expectedPath = p.join(tempDir.path, 'blobs', shard, hash);
      expect(File(expectedPath).existsSync(), isTrue);
    });

    test('5mb web opfs roundtrip', () async {
      // Test MemoryBlobStore / OPFS stand-in with 5MB data
      final memStore = MemoryBlobStore();
      final fiveMb = Uint8List(5 * 1024 * 1024);
      for (var i = 0; i < fiveMb.length; i++) {
        fiveMb[i] = i % 256;
      }
      final hash = await memStore.put(Stream.value(fiveMb));
      expect(await memStore.size(hash), 5 * 1024 * 1024);

      final openStream = await memStore.open(hash);
      var totalRead = 0;
      await for (final chunk in openStream) {
        totalRead += chunk.length;
      }
      expect(totalRead, 5 * 1024 * 1024);
    });
  });
}
