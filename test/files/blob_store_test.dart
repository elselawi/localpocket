import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';
import 'package:crypto/crypto.dart';
import 'package:localpocket/localpocket.dart';
// `processAndValidateBlobStream` is internal (not on the public export list).
import 'package:localpocket/src/files/blob_store.dart';
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

    test('interrupted put leaves no published blob and no tmp file', () async {
      final controller = StreamController<List<int>>();

      final putFuture = store.put(controller.stream);
      controller.add(utf8.encode('chunk 1'));
      controller.addError(Exception('simulated connection crash'));
      await controller.close();

      await expectLater(putFuture, throwsA(isA<Exception>()));

      // Blobs folder has 0 published blobs
      final hashes = await store.listHashes();
      expect(hashes, isEmpty);

      // Deterministic cleanup: the partially-written tmp file is removed.
      final tmpDir = Directory(p.join(tempDir.path, 'tmp'));
      final tmpFiles = await tmpDir.list().toList();
      expect(tmpFiles, isEmpty,
          reason: 'a failed put never leaves a partial tmp file behind');
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

  group('BlobStore hash/key matrix', () {
    late Directory groupTemp;

    setUp(() async {
      groupTemp = await Directory.systemTemp.createTemp('lp_blob_matrix_');
    });

    tearDown(() async {
      if (await groupTemp.exists()) await groupTemp.delete(recursive: true);
    });

    for (final (label, make) in [
      ('Native', (String root) => NativeBlobStore(root)),
      ('Memory', (String root) => MemoryBlobStore()),
    ]) {
      BlobStore? bs;

      setUp(() {
        bs = make(groupTemp.path);
      });

      test('$label: empty stream roundtrips with the empty-SHA hash', () async {
        final store = bs!;
        final emptySha = sha256.convert(const []).toString();
        final hash = await store.put(const Stream.empty());
        expect(hash, emptySha);
        expect(await store.exists(hash), isTrue);
        expect(await store.size(hash), 0);
        final open = await store.open(hash);
        final bytes = await open.fold<List<int>>([], (a, b) => [...a, ...b]);
        expect(bytes, isEmpty);
        expect(await store.listHashes(), [hash]);
      });

      test('$label: chunked streams hash identically to a one-shot put',
          () async {
        final store = bs!;
        final data = List<int>.generate(10000, (i) => i % 251);
        final oneShot = await store.put(Stream.value(data));

        final chunked = Stream.fromIterable([
          data.sublist(0, 1000),
          data.sublist(1000, 5000),
          data.sublist(5000),
        ]);
        final chunkedHash = await store.put(chunked);

        expect(chunkedHash, oneShot);
        expect(chunkedHash, sha256.convert(data).toString());
      });

      test('$label: expected sha256 success/failure', () async {
        final store = bs!;
        final data = utf8.encode('digest check');
        final good = sha256.convert(data).toString();
        final h = await store.put(Stream.value(data), expectedSha256: good);
        expect(h, good);
        await expectLater(
          store.put(Stream.value(data), expectedSha256: 'f' * 64),
          throwsA(isA<StateError>()),
        );
      });

      test('$label: expected size success/failure', () async {
        final store = bs!;
        final data = utf8.encode('size check payload');
        final h =
            await store.put(Stream.value(data), expectedSize: data.length);
        expect(await store.size(h), data.length);
        await expectLater(
          store.put(Stream.value(data), expectedSize: data.length + 1),
          throwsA(isA<StateError>()),
        );
      });

      test('$label: explicit key is trusted as the blob identity', () async {
        final store = bs!;
        final data = utf8.encode('keyed content');
        final contentHash = sha256.convert(data).toString();
        final key = 'a' * 64;

        final hash = await store.put(Stream.value(data), key: key);
        // The key wins: the blob is addressed by it, not by the content hash.
        expect(hash, key);
        expect(await store.exists(key), isTrue);
        expect(await store.exists(contentHash), isFalse,
            reason:
                'an explicit key is trusted; the digest is not re-verified');
        final open = await store.open(key);
        final bytes = await open.fold<List<int>>([], (a, b) => [...a, ...b]);
        expect(bytes, equals(data));
        expect(await store.listHashes(), [key]);
      });

      test('$label: explicit key with expectedSha256 must equal the key',
          () async {
        final store = bs!;
        final key = 'b' * 64;
        final h = await store.put(Stream.value([1, 2, 3]),
            key: key, expectedSha256: key);
        expect(h, key);
        await expectLater(
          store.put(Stream.value([1, 2, 3]),
              key: key, expectedSha256: 'c' * 64),
          throwsA(isA<StateError>()),
        );
      });

      test('$label: invalid / short / non-hex / traversal hashes are rejected',
          () async {
        final store = bs!;
        for (final bad in [
          '../evil',
          'abc',
          'not-hex-at-all',
          'A' * 64,
          'z' * 64,
          'a' * 63,
          'a' * 65,
        ]) {
          await expectLater(store.open(bad), throwsA(isA<ArgumentError>()),
              reason: 'open rejects "$bad"');
          await expectLater(store.exists(bad), throwsA(isA<ArgumentError>()));
          await expectLater(store.size(bad), throwsA(isA<ArgumentError>()));
          await expectLater(store.delete(bad), throwsA(isA<ArgumentError>()));
        }
        // A put with a traversal key must never escape the shard layout.
        await expectLater(
          store.put(Stream.value([1]), key: '../evil'),
          throwsA(isA<ArgumentError>()),
        );
        // Nothing was published outside the blobs directory.
        expect(await store.listHashes(), isEmpty);
      });
    }

    test('Memory and Native stores agree on hash, size, and content', () async {
      final mem = MemoryBlobStore();
      final native = NativeBlobStore(groupTemp.path);
      final data = utf8.encode('cross-implementation consistency');
      final memHash = await mem.put(Stream.value(data));
      final nativeHash = await native.put(Stream.value(data));
      expect(memHash, nativeHash);
      expect(await mem.size(memHash), await native.size(nativeHash));
      final nativeOpen = await native.open(nativeHash);
      final nativeBytes =
          await nativeOpen.fold<List<int>>([], (a, b) => [...a, ...b]);
      expect(nativeBytes, equals(data));
      expect(await mem.listHashes(), await native.listHashes());
    });
  });

  group('NativeBlobStore concurrency and filesystem failures', () {
    late Directory tempDir;
    late NativeBlobStore store;

    setUp(() async {
      tempDir = await Directory.systemTemp.createTemp('lp_blob_native_');
      store = NativeBlobStore(tempDir.path);
    });

    tearDown(() async {
      if (await tempDir.exists()) await tempDir.delete(recursive: true);
    });

    test('concurrent puts of the same hash dedup to one published blob',
        () async {
      final data = utf8.encode('concurrent identical bytes');
      final results = await Future.wait([
        for (var i = 0; i < 5; i++) store.put(Stream.value(data)),
      ]);
      expect(results.toSet().length, 1);
      final hashes = await store.listHashes();
      expect(hashes, [results.first],
          reason: 'exactly one blob file, no partial publishes');
      // No tmp files left behind.
      final tmpFiles = Directory(p.join(tempDir.path, 'tmp')).listSync();
      expect(tmpFiles, isEmpty);
    });

    test('concurrent puts with the same explicit key publish atomically',
        () async {
      final key = 'd' * 64;
      final a = utf8.encode('first writer content');
      final b = utf8.encode('second writer content');
      final results = await Future.wait([
        store.put(Stream.value(a), key: key),
        store.put(Stream.value(b), key: key),
      ]);
      expect(results, everyElement(key));
      // Exactly one blob exists, and it is a complete payload (never a mix).
      expect(await store.listHashes(), [key]);
      final open = await store.open(key);
      final bytes = await open.fold<List<int>>([], (acc, c) => [...acc, ...c]);
      expect(bytes, anyOf(equals(a), equals(b)),
          reason: 'atomic publish: the winner is one full payload');
    });

    test('open/delete/size/exists on missing blobs behave predictably',
        () async {
      final missing = 'e' * 64;
      expect(await store.exists(missing), isFalse);
      expect(await store.size(missing), isNull);
      await expectLater(store.open(missing), throwsA(isA<StateError>()));
      // delete of a missing blob is a silent no-op.
      await store.delete(missing);
      expect(await store.listHashes(), isEmpty);
    });

    test('future-dated tmp files are never cleaned; old ones are', () async {
      final now = DateTime.now();
      final futureFile = File(p.join(tempDir.path, 'tmp', 'future.tmp'));
      await futureFile.writeAsString('future');
      await futureFile.setLastModified(now.add(const Duration(hours: 2)));

      final oldFile = File(p.join(tempDir.path, 'tmp', 'old.tmp'));
      await oldFile.writeAsString('old');
      await oldFile.setLastModified(now.subtract(const Duration(hours: 48)));

      // A future mtime makes now.difference negative -> not older than 24h.
      final cleaned =
          await store.cleanTmp(olderThan: const Duration(hours: 24));
      expect(cleaned, 1, reason: 'only the old file is cleaned');
      expect(await futureFile.exists(), isTrue,
          reason: 'future-dated tmp is retained');
      expect(await oldFile.exists(), isFalse);
    });

    test('malformed files in blob shards are ignored by listHashes', () async {
      final data = utf8.encode('real blob');
      final hash = await store.put(Stream.value(data));

      // Drop a non-hash file directly into a shard directory.
      final shard =
          Directory(p.join(tempDir.path, 'blobs', hash.substring(0, 2)));
      final junk = File(p.join(shard.path, 'not-a-hash.txt'));
      await junk.writeAsString('junk');

      final hashes = await store.listHashes();
      expect(hashes, [hash],
          reason: 'malformed shard files are never surfaced as blobs');
    });

    test('size mismatch cleans the tmp file (deterministic cleanup)', () async {
      await expectLater(
        store.put(Stream.value(utf8.encode('short')), expectedSize: 999),
        throwsA(isA<StateError>()),
      );
      expect(await store.listHashes(), isEmpty, reason: 'no blob published');
      final tmpFiles = Directory(p.join(tempDir.path, 'tmp')).listSync();
      expect(tmpFiles, isEmpty,
          reason: 'the partial tmp file was removed on failure');
    });

    test('an unexpected stream error leaves no blob and no tmp file', () async {
      final controller = StreamController<List<int>>();
      final put = store.put(controller.stream);
      controller.add(utf8.encode('partial'));
      controller.addError(StateError('boom'));
      await controller.close();
      await expectLater(put, throwsA(isA<StateError>()));
      expect(await store.listHashes(), isEmpty);
      expect(Directory(p.join(tempDir.path, 'tmp')).listSync(), isEmpty);
    });
  });

  group('EncryptingBlobStore integrity and memory behavior', () {
    late BlobStore inner;

    setUp(() {
      inner = MemoryBlobStore();
    });

    List<int> xorEnc(List<int> p) => p.map((b) => (b + 7) % 256).toList();
    List<int> xorDec(List<int> c) => c.map((b) => (b - 7 + 256) % 256).toList();

    EncryptingBlobStore encStore() =>
        EncryptingBlobStore(inner, encrypt: xorEnc, decrypt: xorDec);

    test('large chunked plaintext keeps plaintext hash/size and roundtrips',
        () async {
      final store = encStore();
      final big = List<int>.generate(1 << 20, (i) => i % 256);
      final expectedHash = sha256.convert(big).toString();

      final chunks = <List<int>>[];
      for (var i = 0; i < big.length; i += 16384) {
        chunks.add(big.sublist(i, (i + 16384).clamp(0, big.length)));
      }
      final hash = await store.put(Stream.fromIterable(chunks),
          expectedSha256: expectedHash, expectedSize: big.length);
      expect(hash, expectedHash, reason: 'hash is the PLAINTEXT digest');
      // The inner store holds ciphertext (content differs, though the XOR
      // transform keeps the length).
      final cipher = await (await inner.open(hash))
          .fold<List<int>>([], (a, b) => [...a, ...b]);
      expect(cipher, isNot(equals(big)),
          reason: 'ciphertext at rest differs from the plaintext');

      final open = await store.open(hash);
      final out = await open.fold<List<int>>([], (a, b) => [...a, ...b]);
      expect(out.length, big.length);
      expect(out, equals(big));
    });

    test('expected plaintext hash/size are validated before encryption',
        () async {
      final store = encStore();
      await expectLater(
        store.put(Stream.value([1, 2, 3]), expectedSha256: 'f' * 64),
        throwsA(isA<StateError>()),
      );
      await expectLater(
        store.put(Stream.value([1, 2, 3]), expectedSize: 999),
        throwsA(isA<StateError>()),
      );
      expect(await inner.listHashes(), isEmpty,
          reason: 'no ciphertext published on a validation failure');
    });

    test('empty plaintext roundtrips', () async {
      final store = encStore();
      final hash = await store.put(const Stream.empty());
      expect(hash, sha256.convert(const []).toString());
      final open = await store.open(hash);
      final out = await open.fold<List<int>>([], (a, b) => [...a, ...b]);
      expect(out, isEmpty);
    });

    test('wrong decrypt key fails authentication', () async {
      final keyA = AesGcmFieldCipher(List.filled(32, 1));
      final keyB = AesGcmFieldCipher(List.filled(32, 2));
      final encA = EncryptingBlobStore.withCipher(inner, keyA);
      final encB = EncryptingBlobStore.withCipher(inner, keyB);

      final hash = await encA.put(Stream.value(utf8.encode('secret')));
      // Reading through a store configured with the wrong key must fail the
      // AES-GCM MAC check rather than return garbage.
      await expectLater(encB.open(hash), throwsA(isA<StateError>()));
    });

    test('ciphertext corruption fails authentication', () async {
      final cipher = AesGcmFieldCipher(List.filled(32, 3));
      final store = EncryptingBlobStore.withCipher(inner, cipher);
      final plaintext = utf8.encode('tamper me');
      final hash = await store.put(Stream.value(plaintext));

      // Corrupt the stored ciphertext in place.
      final cipherBytes = await (await inner.open(hash))
          .fold<List<int>>([], (a, b) => [...a, ...b]);
      final corrupted = List<int>.from(cipherBytes)..[5] ^= 0xff;
      await inner.put(Stream.value(corrupted), key: hash);

      await expectLater(store.open(hash), throwsA(isA<StateError>()));
    });

    test('memory behavior documented: full plaintext is buffered', () async {
      // The decorator buffers the whole plaintext before encrypting (and the
      // whole ciphertext before decrypting) — this is the documented contract;
      // there is no bounded-memory streaming promise.
      final store = encStore();
      final streamed = Stream<List<int>>.fromIterable([
        for (var i = 0; i < 100; i++) List<int>.filled(1000, i % 256),
      ]);
      final hash = await store.put(streamed);
      final open = await store.open(hash);
      // The decrypted result is emitted as a single buffered value.
      final firstChunk = await open.first;
      expect(firstChunk.length, 100 * 1000,
          reason: 'open returns the buffered full plaintext as one value');
    });

    test('encrypted store always keys by the plaintext hash (key ignored)',
        () async {
      final store = encStore();
      final data = utf8.encode('ignored-key data');
      // The caller-supplied key is ignored: the encrypting store derives its
      // storage identity from the plaintext SHA-256 (so dedup/refcount logic
      // stays on the plaintext digest).
      final hash = await store.put(Stream.value(data), key: 'bad/key');
      expect(hash, sha256.convert(data).toString());
      expect(await store.open(hash), isA<Stream<List<int>>>());
      // The bad key was never used as a storage identity.
      expect(await inner.listHashes(), isNot(contains('bad/key')));
    });
  });

  group('MemoryBlobStore', () {
    test('cleanTmp is inert: _tmpFiles is never populated', () async {
      final store = MemoryBlobStore();
      final data = utf8.encode('data');
      await store.put(Stream.value(data));
      final hash = sha256.convert(data).toString();

      expect(await store.cleanTmp(), 0,
          reason: 'the in-memory store never registers tmp files');
      expect(await store.cleanTmp(olderThan: Duration.zero), 0,
          reason: 'the age threshold is irrelevant when nothing is tracked');
      expect(await store.listHashes(), [hash],
          reason: 'cleanTmp never removes blobs');
      expect(await store.exists(hash), isTrue);
    });
  });

  group('processAndValidateBlobStream error paths', () {
    test('a source stream error mid-way propagates', () async {
      Stream<List<int>> boom() async* {
        yield [1, 2];
        throw StateError('source down');
      }

      await expectLater(
          processAndValidateBlobStream(boom()), throwsA(isA<StateError>()));
    });

    test('an onChunk error propagates and stops consumption', () async {
      var chunks = 0;
      await expectLater(
        processAndValidateBlobStream(Stream.value([1, 2, 3]), onChunk: (_) {
          chunks++;
          throw StateError('sink failed');
        }),
        throwsA(isA<StateError>()),
      );
      expect(chunks, 1, reason: 'the first chunk aborts the pass');
    });

    test('size and hash mismatches are validated after a clean stream',
        () async {
      final data = [1, 2, 3];
      final hash = sha256.convert(data).toString();
      await expectLater(
        processAndValidateBlobStream(Stream.value(data), expectedSize: 4),
        throwsA(isA<StateError>()),
      );
      await expectLater(
        processAndValidateBlobStream(Stream.value(data),
            expectedSha256: 'f' * 64),
        throwsA(isA<StateError>()),
      );
      final ok = await processAndValidateBlobStream(Stream.value(data),
          expectedSize: 3, expectedSha256: hash);
      expect(ok.hash, hash);
      expect(ok.totalBytes, 3);
    });
  });
}
