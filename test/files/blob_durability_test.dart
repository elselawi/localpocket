import 'dart:async';
import 'dart:io';

import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';

/// Blob-storage durability surfacing (finding: "Web blob store's in-memory
/// fallback is volatile but not surfaced to the app").
///
/// The durability contract:
/// - [BlobStore.isDurable] reports whether stored bytes survive restarts;
/// - [LocalPocketFiles.isBlobStorageDurable] propagates it to the app;
/// - `attach` refuses volatile storage unless `allowVolatileBlobs: true`.
///
/// `WebBlobStore` itself cannot be imported by VM tests (it transitively
/// imports sqlite3's wasm JS-interop layer, which compiles only for web), so
/// its OPFS-unavailable path — the exact case this finding is about — is
/// pinned structurally below (repo convention, see
/// `web_blob_conditional_test.dart`) and its behavior is exercised through
/// the identical in-memory fallback semantics of [MemoryBlobStore].
void main() {
  group('WebBlobStore durability wiring (structural)', () {
    final source = File('lib/src/files/web_blob_store.dart').readAsStringSync();

    test('reports durability from a cached OPFS probe', () {
      expect(source, contains('Future<bool> get isDurable'));
      expect(source, contains('_isOpfsAvailable()'));
      expect(source, contains('_opfsAvailable ??= await _probeOpfs()'),
          reason: 'the probe result is cached so repeated reads are cheap and '
              'stable for the worker lifetime');
      expect(source, contains('storageManager'),
          reason: 'the real probe uses the worker-safe OPFS storage manager');
    });

    test('degrades to the in-memory fallback when OPFS is unavailable', () {
      expect(source, contains('if (!await _isOpfsAvailable()) return null;'),
          reason: '_getOpfsDir short-circuits to null (=> memory fallback) '
              'when the probe fails');
      expect(source, contains('_memoryFallback[result.hash] = data;'),
          reason: 'put() writes bytes only to memory when no OPFS dir exists');
      expect(source, contains('_memoryFallback.containsKey(hash)'),
          reason: 'open()/exists()/size() serve bytes from the fallback');
    });
  });

  group('MemoryBlobStore (the volatile fallback semantics)', () {
    test('reports non-durable', () async {
      expect(await MemoryBlobStore().isDurable, isFalse);
    });
  });

  group('LocalPocketFiles durability flag (native)', () {
    Future<LocalPocket> pocketWithStore({BlobStore? blobStore}) async {
      final dbPath = await tempDbPath();
      final pocket = await openPocket(
        path: dbPath.path,
        blobStore: blobStore,
      );
      addTearDown(() async {
        await pocket.close();
        await dbPath.cleanup();
      });
      return pocket;
    }

    test('reports false when no blob store is configured', () async {
      final pocket = await pocketWithStore();
      expect(await pocket.files.isBlobStorageDurable, isFalse);
    });

    test('reports false for a volatile in-memory store', () async {
      final pocket = await pocketWithStore(blobStore: MemoryBlobStore());
      expect(await pocket.files.isBlobStorageDurable, isFalse);
    });

    test('reports true for a native disk-backed store', () async {
      final dir = await Directory.systemTemp.createTemp('lp_durable_');
      addTearDown(() => dir.delete(recursive: true));
      final pocket =
          await pocketWithStore(blobStore: NativeBlobStore(dir.path));
      expect(await pocket.files.isBlobStorageDurable, isTrue);
    });

    test('attach refuses a volatile store unless allowVolatileBlobs is set',
        () async {
      final store = MemoryBlobStore();
      final pocket = await pocketWithStore(blobStore: store);
      final rec = generateRecordId();
      await pocket.collection('widgets').put({'id': rec, 'name': 'w'});

      // Refused before any bytes are stored.
      await expectLater(
        pocket.files.attach(
            store: 'widgets', recordId: rec, bytes: Stream.value([1, 2, 3])),
        throwsA(isA<StateError>()),
      );
      expect(await store.listHashes(), isEmpty,
          reason: 'nothing may be written when the attach is refused');

      // The explicit opt-in accepts the volatile store.
      final ref = await pocket.files.attach(
        store: 'widgets',
        recordId: rec,
        bytes: Stream.value([4, 5, 6]),
        allowVolatileBlobs: true,
      );
      expect(ref.state, 'pending_upload');
      expect(await store.exists(ref.hash), isTrue);
    });

    test('attach works without the opt-in on a durable store', () async {
      final dir = await Directory.systemTemp.createTemp('lp_durable2_');
      addTearDown(() => dir.delete(recursive: true));
      final pocket =
          await pocketWithStore(blobStore: NativeBlobStore(dir.path));
      final rec = generateRecordId();
      await pocket.collection('widgets').put({'id': rec, 'name': 'w'});

      final ref = await pocket.files.attach(
          store: 'widgets', recordId: rec, bytes: Stream.value([7, 8]));
      expect(ref.state, 'pending_upload');
    });
  });
}
