import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';
import 'package:localpocket/src/platform/native/blob_store.dart';
import 'package:localpocket/src/kernel/files/blob_store.dart';
import 'package:localpocket/src/kernel/ids.dart';
import 'package:localpocket/src/kernel/local_pocket.dart';
import 'package:localpocket/src/kernel/schema.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import '../../support/helpers.dart';
import '../../support/engine_helpers.dart';
import '../../support/mock_backend.dart';

/// A BlobStore whose `delete` always fails, for failure-path tests.
class _ThrowingDeleteStore extends BlobStore {
  final MemoryBlobStore inner = MemoryBlobStore();
  @override
  Future<String> put(Stream<List<int>> bytes,
          {String? expectedSha256, int? expectedSize, String? key}) =>
      inner.put(bytes,
          expectedSha256: expectedSha256, expectedSize: expectedSize, key: key);
  @override
  Future<Stream<List<int>>> open(String hash) => inner.open(hash);
  @override
  Future<void> delete(String hash) => throw StateError('disk failure');
  @override
  Future<bool> exists(String hash) => inner.exists(hash);
  @override
  Future<int?> size(String hash) => inner.size(hash);
  @override
  Future<int> cleanTmp({Duration olderThan = const Duration(hours: 24)}) =>
      inner.cleanTmp(olderThan: olderThan);
  @override
  Future<List<String>> listHashes() => inner.listHashes();
}

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
        allowVolatileBlobs: true,
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
        allowVolatileBlobs: true,
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
        allowVolatileBlobs: true,
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
        allowVolatileBlobs: true,
      );
      final ref2 = await pocket.files.attach(
        store: 'widgets',
        recordId: rec2,
        bytes: Stream.value(bytes2),
        allowVolatileBlobs: true,
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

  group('purge cleanup completeness', () {
    test('purge drops pending upload ref, neutralizes op, refcount zero',
        () async {
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
        bytes: Stream.value(utf8.encode('pending upload content')),
        allowVolatileBlobs: true,
      );
      expect(
          (await pocket.db.query('lp_op_queue',
                  where: "kind = 'fileUpload' AND record_id = ?",
                  whereArgs: [recId]))
              .single['state'],
          'pending');

      await pocket.collection('widgets').purge(recId);

      expect(
          await pocket.files.list(store: 'widgets', recordId: recId), isEmpty);
      final op = (await pocket.db.query('lp_op_queue',
              where: "kind = 'fileUpload' AND record_id = ?",
              whereArgs: [recId]))
          .single;
      expect(op['state'], 'done',
          reason: 'the upload op is neutralized, never run later');
      expect(
          (await pocket.db
                  .query('lp_blobs', where: 'hash = ?', whereArgs: [ref.hash]))
              .single['refcount'],
          0);
      expect(await blobStore.exists(ref.hash), isTrue,
          reason: 'bytes remain until GC');
      expect(await pocket.files.gc(blobGrace: Duration.zero), 1);
      expect(await blobStore.exists(ref.hash), isFalse);
    });

    test('purged pending upload never reaches the remote', () async {
      final mock = MockSyncBackend();
      final h = await EngineHarness.create(
        mock: mock,
        config: testConfig(pushDebounce: const Duration(days: 365)),
        blobStore: MemoryBlobStore(),
      );
      addTearDown(h.close);
      final recId = mock.seed(store: 'widgets', data: {'name': 'w'});
      await h.engine.syncNow();
      await h.pocket.files.attach(
        store: 'widgets',
        recordId: recId,
        bytes: Stream.value(utf8.encode('doomed upload')),
        allowVolatileBlobs: true,
      );
      final filesCallsBefore = mock.updateFilesCalls;

      await h.pocket.collection('widgets').purge(recId);
      final report = await h.engine.fileLane.syncFiles();
      expect(report.uploaded, 0);
      expect(mock.updateFilesCalls, filesCallsBefore,
          reason: 'no upload is ever sent for a purged record');
      expect(mock.records[recId]!.attachments, isEmpty);
    });

    test('purge neutralizes failed ops and leaves done ops alone', () async {
      final dbPath = await tempDbPath();
      final pocket = await openPocket(
        path: dbPath.path,
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
      final now = DateTime.now().millisecondsSinceEpoch;
      await pocket.db.insert('lp_op_queue', {
        'op_id': generateRecordId(),
        'store': 'widgets',
        'record_id': recId,
        'kind': 'fileRemove',
        'payload_json': '{"ref_id":"r1"}',
        'state': 'failed',
        'created_at': now,
      });
      final doneOp = generateRecordId();
      await pocket.db.insert('lp_op_queue', {
        'op_id': doneOp,
        'store': 'widgets',
        'record_id': recId,
        'kind': 'fileRemove',
        'payload_json': '{"ref_id":"r2"}',
        'state': 'done',
        'created_at': now,
      });

      await pocket.collection('widgets').purge(recId);

      final ops = await pocket.db
          .query('lp_op_queue', where: 'record_id = ?', whereArgs: [recId]);
      expect(ops.every((o) => o['state'] == 'done'), isTrue,
          reason: 'failed ops are neutralized; done ops stay done');
      expect(ops.map((o) => o['op_id']), contains(doneOp));
    });

    test('purge drops open conflict, outbox, and sync rows', () async {
      final dbPath = await tempDbPath();
      final pocket = await openPocket(
        path: dbPath.path,
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
      final now = DateTime.now().millisecondsSinceEpoch;
      // put() creates the outbox + sync rows; add the conflict on top.
      await pocket.collection('widgets').put({'id': recId, 'name': 'w'});
      await pocket.db.insert('lp_conflicts', {
        'store': 'widgets',
        'record_id': recId,
        'base_json': '{}',
        'local_json': '{"name":"a"}',
        'remote_json': '{"name":"b"}',
        'dirty_local': '["name"]',
        'dirty_remote': '["name"]',
        'detected_at': now,
      });
      expect(
          await pocket.db.query('lp_conflicts',
              where: 'record_id = ?', whereArgs: [recId]),
          hasLength(1));
      expect(
          await pocket.db
              .query('lp_outbox', where: 'record_id = ?', whereArgs: [recId]),
          hasLength(1));
      expect(
          await pocket.db
              .query('lp_sync_row', where: 'record_id = ?', whereArgs: [recId]),
          hasLength(1));

      await pocket.collection('widgets').purge(recId);

      expect(
          await pocket.db.query('lp_conflicts',
              where: 'record_id = ?', whereArgs: [recId]),
          isEmpty);
      expect(
          await pocket.db
              .query('lp_outbox', where: 'record_id = ?', whereArgs: [recId]),
          isEmpty);
      expect(
          await pocket.db
              .query('lp_sync_row', where: 'record_id = ?', whereArgs: [recId]),
          isEmpty);
    });

    test('purge of a shared blob keeps the other record refcount', () async {
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

      final rec1 = generateRecordId();
      final rec2 = generateRecordId();
      await pocket.collection('widgets').put({'id': rec1, 'name': 'w1'});
      await pocket.collection('widgets').put({'id': rec2, 'name': 'w2'});
      final bytes = Uint8List.fromList(List.generate(800, (i) => i % 251));
      final ref1 = await pocket.files.attach(
          store: 'widgets',
          recordId: rec1,
          bytes: Stream.value(bytes),
          allowVolatileBlobs: true);
      final ref2 = await pocket.files.attach(
          store: 'widgets',
          recordId: rec2,
          bytes: Stream.value(bytes),
          allowVolatileBlobs: true);
      expect(ref1.hash, ref2.hash);
      expect(
          (await pocket.db
                  .query('lp_blobs', where: 'hash = ?', whereArgs: [ref1.hash]))
              .single['refcount'],
          2);

      await pocket.collection('widgets').purge(rec1);

      final refs2 = await pocket.files.list(store: 'widgets', recordId: rec2);
      expect(refs2.single.refId, ref2.refId, reason: 'the survivor is intact');
      expect(
          (await pocket.db
                  .query('lp_blobs', where: 'hash = ?', whereArgs: [ref1.hash]))
              .single['refcount'],
          1);
      expect(await blobStore.exists(ref1.hash), isTrue);
      expect(await pocket.files.gc(blobGrace: Duration.zero), 0,
          reason: 'the blob is still referenced');
    });

    test('purge drops remote_only refs without touching other records',
        () async {
      final dbPath = await tempDbPath();
      final pocket = await openPocket(
        path: dbPath.path,
        blobStore: MemoryBlobStore(),
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

      final rec1 = generateRecordId();
      final rec2 = generateRecordId();
      await pocket.collection('widgets').put({'id': rec1, 'name': 'w1'});
      await pocket.collection('widgets').put({'id': rec2, 'name': 'w2'});
      final ref = await pocket.files.attach(
          store: 'widgets',
          recordId: rec1,
          bytes: Stream.value(utf8.encode('remote content')),
          name: 'r.bin',
          allowVolatileBlobs: true);
      // A remote_only ref shares the record but references the remote file.
      await pocket.db.insert('lp_file_refs', {
        'ref_id': generateRecordId(),
        'store': 'widgets',
        'record_id': rec2,
        'field': 'imgs',
        'hash': 'unknown_r.bin',
        'remote_name': 'r.bin',
        'state': 'remote_only',
      });

      await pocket.collection('widgets').purge(rec1);

      expect(
          await pocket.files.list(store: 'widgets', recordId: rec1), isEmpty);
      final survivor =
          (await pocket.files.list(store: 'widgets', recordId: rec2)).single;
      expect(survivor.state, 'remote_only', reason: 'other record untouched');
      expect(
          (await pocket.db
                  .query('lp_blobs', where: 'hash = ?', whereArgs: [ref.hash]))
              .single['refcount'],
          0);
    });
  });

  group('GC/storage-cap races and boundaries', () {
    test('gc cutoff boundary: equal deleted, strictly newer kept', () async {
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

      final recA = generateRecordId();
      final recB = generateRecordId();
      await pocket.collection('widgets').put({'id': recA, 'name': 'a'});
      await pocket.collection('widgets').put({'id': recB, 'name': 'b'});
      final refA = await pocket.files.attach(
          store: 'widgets',
          recordId: recA,
          bytes: Stream.value(utf8.encode('alpha content')),
          allowVolatileBlobs: true);
      final refB = await pocket.files.attach(
          store: 'widgets',
          recordId: recB,
          bytes: Stream.value(utf8.encode('beta content')),
          allowVolatileBlobs: true);
      await pocket.files.remove(store: 'widgets', recordId: recA);
      await pocket.files.remove(store: 'widgets', recordId: recB);

      const grace = Duration(hours: 1);
      final now = DateTime.now().millisecondsSinceEpoch;
      final cutoff = now - grace.inMilliseconds;
      // Use a 60s margin on both sides so the boundary comparison is immune
      // to the few-ms drift between this test and the gc() call.
      await pocket.db.execute(
        'UPDATE lp_blobs SET last_access = ? WHERE hash = ?',
        [cutoff - 60000, refA.hash],
      );
      await pocket.db.execute(
        'UPDATE lp_blobs SET last_access = ? WHERE hash = ?',
        [cutoff + 60000, refB.hash],
      );

      final cleaned = await pocket.files.gc(blobGrace: grace);
      expect(cleaned, 1);
      expect(await blobStore.exists(refA.hash), isFalse,
          reason: 'older than the cutoff is eligible');
      expect(await blobStore.exists(refB.hash), isTrue,
          reason: 'newer than the cutoff is not');
    });

    test('empty tables are safe for gc and storage cap', () async {
      final dbPath = await tempDbPath();
      final pocket = await openPocket(
        path: dbPath.path,
        blobStore: MemoryBlobStore(),
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

      expect(await pocket.files.gc(blobGrace: Duration.zero), 0);
      expect(await pocket.files.enforceStorageCap(maxBytes: 0), 0);
      expect(await pocket.files.enforceStorageCap(maxBytes: -1), 0);
    });

    test('shared blob eviction marks every ref remote_only', () async {
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

      final rec1 = generateRecordId();
      final rec2 = generateRecordId();
      await pocket.collection('widgets').put({'id': rec1, 'name': 'w1'});
      await pocket.collection('widgets').put({'id': rec2, 'name': 'w2'});
      final bytes = Uint8List.fromList(List.generate(900, (i) => i % 251));
      final ref1 = await pocket.files.attach(
          store: 'widgets',
          recordId: rec1,
          bytes: Stream.value(bytes),
          allowVolatileBlobs: true);
      await pocket.files.attach(
          store: 'widgets',
          recordId: rec2,
          bytes: Stream.value(bytes),
          allowVolatileBlobs: true);
      await pocket.db.update('lp_file_refs', {'state': 'synced'});

      final evicted = await pocket.files.enforceStorageCap(maxBytes: 0);
      expect(evicted, 1, reason: 'one shared blob evicted');
      expect(await blobStore.exists(ref1.hash), isFalse);
      expect(await pocket.files.list(store: 'widgets', recordId: rec1),
          hasLength(1));
      final r1 =
          (await pocket.files.list(store: 'widgets', recordId: rec1)).single;
      final r2 =
          (await pocket.files.list(store: 'widgets', recordId: rec2)).single;
      expect(r1.state, 'remote_only');
      expect(r2.state, 'remote_only');
      expect(
          await pocket.db
              .query('lp_blobs', where: 'hash = ?', whereArgs: [ref1.hash]),
          isEmpty);
    });

    test('exact cap boundary evicts nothing', () async {
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
      final bytes = Uint8List.fromList(List.generate(640, (i) => i % 251));
      await pocket.files.attach(
          store: 'widgets',
          recordId: recId,
          bytes: Stream.value(bytes),
          allowVolatileBlobs: true);
      await pocket.db.update('lp_file_refs', {'state': 'synced'});
      final total =
          (await pocket.db.rawQuery('SELECT SUM(size) as t FROM lp_blobs'))
              .first['t'] as int;

      expect(await pocket.files.enforceStorageCap(maxBytes: total), 0);
      expect(await pocket.files.enforceStorageCap(maxBytes: total + 1), 0);
      expect(await blobStore.listHashes(), hasLength(1));
    });

    test('negative cap evicts synced but never pending_upload', () async {
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

      final recA = generateRecordId();
      final recB = generateRecordId();
      await pocket.collection('widgets').put({'id': recA, 'name': 'a'});
      await pocket.collection('widgets').put({'id': recB, 'name': 'b'});
      final pending = await pocket.files.attach(
          store: 'widgets',
          recordId: recA,
          bytes: Stream.value(utf8.encode('pending bytes')),
          allowVolatileBlobs: true);
      final synced = await pocket.files.attach(
          store: 'widgets',
          recordId: recB,
          bytes: Stream.value(utf8.encode('synced bytes')),
          allowVolatileBlobs: true);
      await pocket.db.update('lp_file_refs', {'state': 'synced'});
      await pocket.db.update('lp_file_refs', {'state': 'pending_upload'},
          where: 'record_id = ?', whereArgs: [recA]);

      final evicted = await pocket.files.enforceStorageCap(maxBytes: -1);
      expect(evicted, 1);
      expect(await blobStore.exists(synced.hash), isFalse);
      expect(await blobStore.exists(pending.hash), isTrue,
          reason: 'pending upload is never evicted, even under a negative cap');
    });

    test('blob delete failure propagates and keeps the db row', () async {
      final dbPath = await tempDbPath();
      final blobStore = _ThrowingDeleteStore();
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
          bytes: Stream.value(utf8.encode('doomed content')),
          allowVolatileBlobs: true);
      await pocket.files.remove(store: 'widgets', recordId: recId);

      await expectLater(
          pocket.files.gc(blobGrace: Duration.zero), throwsStateError);
      expect(
          await pocket.db
              .query('lp_blobs', where: 'hash = ?', whereArgs: [ref.hash]),
          hasLength(1),
          reason: 'the db row is kept when the store delete fails');

      // Storage cap takes the same failure path.
      await pocket.files.attach(
          store: 'widgets',
          recordId: recId,
          bytes: Stream.value(utf8.encode('content again')),
          allowVolatileBlobs: true);
      await pocket.db.update('lp_file_refs', {'state': 'synced'});
      await expectLater(
          pocket.files.enforceStorageCap(maxBytes: 0), throwsStateError);
      expect(
          await pocket.db
              .query('lp_blobs', where: 'hash = ?', whereArgs: [ref.hash]),
          hasLength(1));
    });

    test('pending_remove blob is evictable (only pending_upload is protected)',
        () async {
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
          bytes: Stream.value(utf8.encode('pending remove bytes')),
          allowVolatileBlobs: true);
      await pocket.db.update('lp_file_refs', {'state': 'synced'});
      await pocket.db.update('lp_file_refs', {'state': 'pending_remove'});

      final evicted = await pocket.files.enforceStorageCap(maxBytes: 0);
      expect(evicted, 1);
      expect(await blobStore.exists(ref.hash), isFalse);
      // The pending_remove ref survives as pending_remove; the fileRemove op
      // only needs the remote name, not the bytes.
      expect(
          (await pocket.files.list(store: 'widgets', recordId: recId))
              .single
              .state,
          'pending_remove');
    });

    group('orphan reconciliation (crash between bs.put and metadata tx)', () {
      late Directory tempDir;
      late NativeBlobStore blobStore;

      setUp(() async {
        tempDir = await Directory.systemTemp.createTemp('lp_orphan_test_');
        blobStore = NativeBlobStore(p.join(tempDir.path, 'blobs'));
      });
      tearDown(() async {
        if (await tempDir.exists()) await tempDir.delete(recursive: true);
      });

      Future<LocalPocket> openWithBlobs() async {
        final dbPath = await tempDbPath();
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
        return pocket;
      }

      test('gc deletes orphaned blob with no lp_blobs row', () async {
        // Simulate a crash: bytes written directly to the store, no metadata.
        final orphanBytes = utf8.encode('orphaned crash bytes');
        final orphanHash = await blobStore.put(Stream.value(orphanBytes));
        expect(await blobStore.exists(orphanHash), isTrue);

        // A referenced blob that MUST survive GC.
        final pocket = await openWithBlobs();
        addTearDown(() async => await pocket.close());
        final recId = generateRecordId();
        await pocket.collection('widgets').put({'id': recId, 'name': 'w'});
        final ref = await pocket.files.attach(
          store: 'widgets',
          recordId: recId,
          bytes: Stream.value(utf8.encode('referenced content')),
          allowVolatileBlobs: true,
        );

        final cleaned = await pocket.files.gc(blobGrace: Duration.zero);

        // Orphan is deleted from disk; referenced blob survives.
        expect(await blobStore.exists(orphanHash), isFalse);
        expect(await blobStore.listHashes(), isNot(contains(orphanHash)));
        expect(await blobStore.exists(ref.hash), isTrue);
        // Only the orphan was collected (refcount-0 loop found nothing).
        expect(cleaned, 1);
      });

      test('fresh orphan within grace period survives gc', () async {
        final orphanHash = await blobStore.put(
          Stream.value(utf8.encode('just written before crash')),
        );
        final pocket = await openWithBlobs();
        addTearDown(() async => await pocket.close());

        // Grace of one day: the just-written orphan must NOT be collected.
        final cleaned =
            await pocket.files.gc(blobGrace: const Duration(days: 1));
        expect(cleaned, 0);
        expect(await blobStore.exists(orphanHash), isTrue);
      });
    });
  });
}
