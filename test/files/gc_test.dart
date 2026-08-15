import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';
import 'package:localpocket/localpocket.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import '../support/helpers.dart';

/// Blob garbage-collection tests.
void main() {
  group('GC and orphan cleanup', () {
    test('orphan blob reclaimed after grace', () async {
      final dbPath = await tempDbPath();
      final blobStore = MemoryBlobStore();
      final pocket = await openPocket(
        path: dbPath.path,
        blobStore: blobStore,
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

      final recId = generateRecordId();
      await pocket.collection('widgets').put({'id': recId, 'name': 'w'});
      final ref = await pocket.files.attach(
        store: 'widgets',
        recordId: recId,
        bytes: Stream.value(utf8.encode('short-lived content')),
      );

      expect(await blobStore.exists(ref.hash), isTrue);

      // Remove attachment -> refcount becomes 0
      await pocket.files.remove(store: 'widgets', recordId: recId);

      // GC with 0 grace cleans the dead blob
      final cleaned = await pocket.files.gc(blobGrace: Duration.zero);
      expect(cleaned, 1);
      expect(await blobStore.exists(ref.hash), isFalse);
    });

    test('never evict pending upload bytes', () async {
      final dbPath = await tempDbPath();
      final blobStore = MemoryBlobStore();
      final pocket = await openPocket(
        path: dbPath.path,
        blobStore: blobStore,
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

      final recId = generateRecordId();
      await pocket.collection('widgets').put({'id': recId, 'name': 'w'});
      final ref = await pocket.files.attach(
        store: 'widgets',
        recordId: recId,
        bytes: Stream.value(utf8.encode('pending upload data')),
      );

      // Even if storage cap is 0, pending_upload blobs are never evicted
      final evicted = await pocket.files.enforceStorageCap(maxBytes: 0);
      expect(evicted, 0);
      expect(await blobStore.exists(ref.hash), isTrue);
    });

    test('tmp older 24h cleaned', () async {
      final tempDir = await Directory.systemTemp.createTemp('lp_tmp_test_');
      addTearDown(() async {
        if (await tempDir.exists()) await tempDir.delete(recursive: true);
      });

      final nativeStore = NativeBlobStore(tempDir.path);
      final tmpFile = File(p.join(tempDir.path, 'tmp', 'old_tmp_file.tmp'));
      await tmpFile.writeAsString('stale tmp content');

      // Set last modified date to 48 hours ago
      final oldDate = DateTime.now().subtract(const Duration(hours: 48));
      await tmpFile.setLastModified(oldDate);

      final cleaned =
          await nativeStore.cleanTmp(olderThan: const Duration(hours: 24));
      expect(cleaned, 1);
      expect(await tmpFile.exists(), isFalse);
    });

    test('record purge drops refs and refcounts', () async {
      final dbPath = await tempDbPath();
      final blobStore = MemoryBlobStore();
      final pocket = await openPocket(
        path: dbPath.path,
        blobStore: blobStore,
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

      final recId = generateRecordId();
      await pocket.collection('widgets').put({'id': recId, 'name': 'to_purge'});
      final ref = await pocket.files.attach(
        store: 'widgets',
        recordId: recId,
        bytes: Stream.value(utf8.encode('purgeable content')),
      );

      // Hard delete / purge the record
      await pocket.collection('widgets').purge(recId);

      // File ref and refcount were dropped by purge trigger/handler
      final refs = await pocket.files.list(store: 'widgets', recordId: recId);
      expect(refs, isEmpty);

      // GC cleans blob
      final cleaned = await pocket.files.gc(blobGrace: Duration.zero);
      expect(cleaned, 1);
      expect(await blobStore.exists(ref.hash), isFalse);
    });

    test('storage cap lru evicts synced only', () async {
      final dbPath = await tempDbPath();
      final blobStore = MemoryBlobStore();
      final pocket = await openPocket(
        path: dbPath.path,
        blobStore: blobStore,
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

      // Attach and mark as synced
      final rec1 = generateRecordId();
      final rec2 = generateRecordId();
      await pocket.collection('widgets').put({'id': rec1, 'name': 'w1'});
      await pocket.collection('widgets').put({'id': rec2, 'name': 'w2'});

      // Distinct content so the two blobs do NOT dedup (same bytes would
      // collide to one sha256 with refcount 2).
      final bytes1 = Uint8List.fromList(List.generate(1000, (i) => i % 251));
      final bytes2 =
          Uint8List.fromList(List.generate(1000, (i) => 251 + (i % 4)));

      final ref1 = await pocket.files.attach(
        store: 'widgets',
        recordId: rec1,
        bytes: Stream.value(bytes1),
      );
      final ref2 = await pocket.files.attach(
        store: 'widgets',
        recordId: rec2,
        bytes: Stream.value(bytes2),
      );

      expect(ref1.hash, isNot(ref2.hash),
          reason: 'distinct content -> distinct blobs');

      // Simulate both synced
      await pocket.db.update('lp_file_refs', {'state': 'synced'});

      // Touch rec2 so rec1 is LRU
      await pocket.db.execute(
        'UPDATE lp_blobs SET last_access = ? WHERE hash = ?',
        [DateTime.now().millisecondsSinceEpoch - 100000, ref1.hash],
      );
      await pocket.db.execute(
        'UPDATE lp_blobs SET last_access = ? WHERE hash = ?',
        [DateTime.now().millisecondsSinceEpoch, ref2.hash],
      );

      // Enforce cap of 1500 bytes (total is 2000 bytes) -> evicts ref1
      final evicted = await pocket.files.enforceStorageCap(maxBytes: 1500);
      expect(evicted, 1);
      expect(await blobStore.exists(ref1.hash), isFalse);
      expect(await blobStore.exists(ref2.hash), isTrue);

      // ref1 becomes remote_only
      final refs1 = await pocket.files.list(store: 'widgets', recordId: rec1);
      expect(refs1.first.state, 'remote_only');
    });
  });
}
