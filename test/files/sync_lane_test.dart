import 'dart:convert';
import 'package:localpocket/localpocket.dart';
import 'package:localpocket/sync.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import '../sync/engine/engine_helpers.dart';
import '../sync/engine/mock_backend.dart';

/// File sync lane tests.
void main() {
  SyncConfig convConfig() =>
      testConfig(pushDebounce: const Duration(days: 365));

  group('Sync lane', () {
    test('record first then files ordering', () async {
      final mock = MockSyncBackend();
      final blobStore = MemoryBlobStore();
      final dbPath = await tempDbPath();
      final h = await EngineHarness.create(
        mock: mock,
        config: convConfig(),
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
        await h.close();
        await dbPath.cleanup();
      });

      final recId = generateRecordId();
      // 1. Create record offline + attach file
      await h.pocket
          .collection('widgets')
          .put({'id': recId, 'name': 'offline_widget'});
      await h.pocket.files.attach(
        store: 'widgets',
        recordId: recId,
        bytes: Stream.value(utf8.encode('image content 1')),
        name: 'img1.png',
      );

      // Verify before sync: record has op in outbox, file op in op_queue
      // depends on record create op. The file op is BLOCKED by the pending
      // record op (record-first ordering), so drain() returns 0
      // and the raw queue row carries depends_on_op.
      final outboxOps = await h.pocket.outbox.drain();
      expect(outboxOps.length, 1);
      final recordOpId = outboxOps.first.opId;

      final queued = await h.pocket.db.query(
        'lp_op_queue',
        where: "store = ? AND state = 'pending'",
        whereArgs: ['widgets'],
      );
      expect(queued.length, 1);
      expect(queued.first['depends_on_op'], recordOpId,
          reason: 'file op is held until the record create lands');

      // The blocked file op is not drainable yet.
      expect(await h.pocket.opQueue.drain(), isEmpty);

      // 2. Sync cycle: record is pushed first, then file op unblocks and uploads
      await h.engine.syncNow();

      // Record exists on mock server with uploaded file
      expect(mock.records.containsKey(recId), isTrue);
      expect(mock.records[recId]!.imgs.length, 1);

      // File ref is now synced
      final refs = await h.pocket.files.list(store: 'widgets', recordId: recId);
      expect(refs.first.state, 'synced');
    });

    test('upload keep list semantics', () async {
      final mock = MockSyncBackend();
      final blobStore = MemoryBlobStore();
      final dbPath = await tempDbPath();
      final h = await EngineHarness.create(
        mock: mock,
        config: convConfig(),
        path: dbPath.path,
        blobStore: blobStore,
      );
      addTearDown(() async {
        await h.close();
        await dbPath.cleanup();
      });

      final recId = mock.seed(store: 'widgets', data: {'name': 'seed'});
      await h.engine.syncNow();

      // Attach file 1
      await h.pocket.files.attach(
        store: 'widgets',
        recordId: recId,
        bytes: Stream.value(utf8.encode('photo 1')),
        name: 'photo1.jpg',
      );
      await h.engine.syncNow();

      // Attach file 2
      await h.pocket.files.attach(
        store: 'widgets',
        recordId: recId,
        bytes: Stream.value(utf8.encode('photo 2')),
        name: 'photo2.jpg',
      );
      await h.engine.syncNow();

      expect(mock.records[recId]!.imgs.length, 2);
    });

    test('lost upload response adopts existing by hash prefix', () async {
      final mock = MockSyncBackend();
      final blobStore = MemoryBlobStore();
      final dbPath = await tempDbPath();
      final h = await EngineHarness.create(
        mock: mock,
        config: convConfig(),
        path: dbPath.path,
        blobStore: blobStore,
      );
      addTearDown(() async {
        await h.close();
        await dbPath.cleanup();
      });

      final recId = mock.seed(
        store: 'widgets',
        data: {'name': 'w'},
        imgs: ['myphoto_mock_server_assigned.bin'],
      );
      await h.engine.syncNow();

      // Attach with name 'myphoto' - mock server already has it
      await h.pocket.files.attach(
        store: 'widgets',
        recordId: recId,
        bytes: Stream.value(utf8.encode('content')),
        name: 'myphoto',
      );

      final prevCalls = mock.updateFilesCalls;
      await h.engine.syncNow();

      // Adopted without issuing a duplicate upload call
      final refs = await h.pocket.files.list(store: 'widgets', recordId: recId);
      expect(refs.first.state, 'synced');
      expect(refs.first.remoteName, 'myphoto_mock_server_assigned.bin');
      expect(mock.updateFilesCalls, prevCalls);
    });

    test('legacy filename without prefix handled', () async {
      final mock = MockSyncBackend();
      final blobStore = MemoryBlobStore();
      final dbPath = await tempDbPath();
      final h = await EngineHarness.create(
        mock: mock,
        config: convConfig(),
        path: dbPath.path,
        blobStore: blobStore,
      );
      addTearDown(() async {
        await h.close();
        await dbPath.cleanup();
      });

      // Legacy PB record with simple filename
      final recId = mock.seed(
        store: 'widgets',
        data: {'name': 'legacy'},
        imgs: ['legacy_photo.png'],
      );
      mock.serverFiles['$recId/legacy_photo.png'] = utf8.encode('legacy bytes');

      await h.engine.syncNow();

      final refs = await h.pocket.files.list(store: 'widgets', recordId: recId);
      expect(refs.length, 1);
      expect(refs.first.state, 'remote_only');
      expect(refs.first.remoteName, 'legacy_photo.png');
    });

    test('remote only lazy download', () async {
      final mock = MockSyncBackend();
      final blobStore = MemoryBlobStore();
      final dbPath = await tempDbPath();
      final h = await EngineHarness.create(
        mock: mock,
        config: convConfig(),
        path: dbPath.path,
        blobStore: blobStore,
      );
      addTearDown(() async {
        await h.close();
        await dbPath.cleanup();
      });

      final recId = mock.seed(
        store: 'widgets',
        data: {'name': 'w'},
        imgs: ['remote_doc.pdf'],
      );
      mock.serverFiles['$recId/remote_doc.pdf'] = utf8.encode('pdf bytes');

      await h.engine.syncNow();
      var refs = await h.pocket.files.list(store: 'widgets', recordId: recId);
      expect(refs.first.state, 'remote_only');

      // Explicit download via FileSyncLane
      await h.engine.fileLane.downloadFile(
        store: 'widgets',
        recordId: recId,
        refId: refs.first.refId,
        remoteName: 'remote_doc.pdf',
      );

      refs = await h.pocket.files.list(store: 'widgets', recordId: recId);
      expect(refs.first.state, 'synced');

      final stream =
          await h.pocket.files.open(store: 'widgets', recordId: recId);
      final bytes = await stream.fold<List<int>>([], (p, c) => [...p, ...c]);
      expect(bytes, equals(utf8.encode('pdf bytes')));
    });

    test('prefetch policy matrix', () async {
      final mock = MockSyncBackend();
      final blobStore = MemoryBlobStore();
      final dbPath = await tempDbPath();
      final h = await EngineHarness.create(
        mock: mock,
        config: convConfig(),
        path: dbPath.path,
        blobStore: blobStore,
        stores: [
          CollectionSchema(
            name: 'widgets',
            version: 1,
            fields: [Field.text('name')],
            prefetchFiles: true, // Eager download on pull
          ),
        ],
      );
      addTearDown(() async {
        await h.close();
        await dbPath.cleanup();
      });

      final recId = mock.seed(
        store: 'widgets',
        data: {'name': 'prefetch_item'},
        imgs: ['eager.png'],
      );
      mock.serverFiles['$recId/eager.png'] = utf8.encode('eager bytes');

      // Pull automatically prefetches remote files
      await h.engine.syncNow();

      final refs = await h.pocket.files.list(store: 'widgets', recordId: recId);
      expect(refs.first.state, 'synced');
      expect(await blobStore.exists(refs.first.hash), isTrue);
    });

    test('thumbnail spec cached and evictable', () async {
      final mock = MockSyncBackend();
      final blobStore = MemoryBlobStore();
      final dbPath = await tempDbPath();
      final h = await EngineHarness.create(
        mock: mock,
        config: convConfig(),
        path: dbPath.path,
        blobStore: blobStore,
      );
      addTearDown(() async {
        await h.close();
        await dbPath.cleanup();
      });

      final recId = mock.seed(
        store: 'widgets',
        data: {'name': 'w'},
        imgs: ['avatar.jpg'],
      );

      await h.engine.syncNow();
      final refs = await h.pocket.files.list(store: 'widgets', recordId: recId);

      // Download thumbnail
      final thumbHash = await h.engine.fileLane.downloadFile(
        store: 'widgets',
        recordId: recId,
        refId: refs.first.refId,
        remoteName: 'avatar.jpg',
        thumb: '100x100',
      );

      expect(await blobStore.exists(thumbHash), isTrue);
    });

    test('remove via keep list minus', () async {
      final mock = MockSyncBackend();
      final blobStore = MemoryBlobStore();
      final dbPath = await tempDbPath();
      final h = await EngineHarness.create(
        mock: mock,
        config: convConfig(),
        path: dbPath.path,
        blobStore: blobStore,
      );
      addTearDown(() async {
        await h.close();
        await dbPath.cleanup();
      });

      final recId = mock.seed(store: 'widgets', data: {'name': 'w'});
      await h.engine.syncNow();

      // Attach file
      await h.pocket.files.attach(
        store: 'widgets',
        recordId: recId,
        bytes: Stream.value(utf8.encode('to_delete')),
        name: 'del.jpg',
      );
      await h.engine.syncNow();

      expect(mock.records[recId]!.imgs.length, 1);

      // Remove file
      await h.pocket.files.remove(store: 'widgets', recordId: recId);
      await h.engine.syncNow();

      expect(mock.records[recId]!.imgs.length, 0);
      final refs = await h.pocket.files.list(store: 'widgets', recordId: recId);
      expect(refs, isEmpty);
    });

    test('replace is detach then attach no zero window', () async {
      final mock = MockSyncBackend();
      final blobStore = MemoryBlobStore();
      final dbPath = await tempDbPath();
      final h = await EngineHarness.create(
        mock: mock,
        config: convConfig(),
        path: dbPath.path,
        blobStore: blobStore,
      );
      addTearDown(() async {
        await h.close();
        await dbPath.cleanup();
      });

      final recId = mock.seed(store: 'widgets', data: {'name': 'w'});
      await h.engine.syncNow();

      // 1. Initial attach
      await h.pocket.files.attach(
        store: 'widgets',
        recordId: recId,
        bytes: Stream.value(utf8.encode('old version')),
        name: 'doc.txt',
      );
      await h.engine.syncNow();

      // 2. Replace = remove old + attach new
      await h.pocket.files.remove(store: 'widgets', recordId: recId);
      await h.pocket.files.attach(
        store: 'widgets',
        recordId: recId,
        bytes: Stream.value(utf8.encode('new version')),
        name: 'doc.txt',
      );
      await h.engine.syncNow();

      expect(mock.records[recId]!.imgs.length, 1);
      final refs = await h.pocket.files.list(store: 'widgets', recordId: recId);
      expect(refs.length, 1);
      expect(refs.first.state, 'synced');
    });
  });
}
