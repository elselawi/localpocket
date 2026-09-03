import 'dart:async';
import 'dart:convert';
import 'package:crypto/crypto.dart' show sha256;
import 'package:localpocket/src/kernel/files/blob_store.dart';
import 'package:localpocket/src/kernel/ids.dart';
import 'package:localpocket/src/kernel/schema.dart';
import 'package:localpocket/src/kernel/sync/engine.dart';
import 'package:localpocket/src/kernel/sync/sync_backend.dart';
import 'package:localpocket/src/kernel/sync/sync_config.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';
import '../../support/engine_helpers.dart';
import '../../support/mock_backend.dart';

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
        allowVolatileBlobs: true,
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
      expect(mock.records[recId]!.attachments.length, 1);

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
        allowVolatileBlobs: true,
      );
      await h.engine.syncNow();

      // Attach file 2
      await h.pocket.files.attach(
        store: 'widgets',
        recordId: recId,
        bytes: Stream.value(utf8.encode('photo 2')),
        name: 'photo2.jpg',
        allowVolatileBlobs: true,
      );
      await h.engine.syncNow();

      expect(mock.records[recId]!.attachments.length, 2);
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
        attachments: ['myphoto_mock_server_assigned.bin'],
      );
      await h.engine.syncNow();

      // Attach with name 'myphoto' - mock server already has it
      await h.pocket.files.attach(
        store: 'widgets',
        recordId: recId,
        bytes: Stream.value(utf8.encode('content')),
        name: 'myphoto',
        allowVolatileBlobs: true,
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
        attachments: ['legacy_photo.png'],
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
        attachments: ['remote_doc.pdf'],
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
        attachments: ['eager.png'],
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
        attachments: ['avatar.jpg'],
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
        allowVolatileBlobs: true,
      );
      await h.engine.syncNow();

      expect(mock.records[recId]!.attachments.length, 1);

      // Remove file
      await h.pocket.files.remove(store: 'widgets', recordId: recId);
      await h.engine.syncNow();

      expect(mock.records[recId]!.attachments.length, 0);
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
        allowVolatileBlobs: true,
      );
      await h.engine.syncNow();

      // 2. Replace = remove old + attach new
      await h.pocket.files.remove(store: 'widgets', recordId: recId);
      await h.pocket.files.attach(
        store: 'widgets',
        recordId: recId,
        bytes: Stream.value(utf8.encode('new version')),
        name: 'doc.txt',
        allowVolatileBlobs: true,
      );
      await h.engine.syncNow();

      expect(mock.records[recId]!.attachments.length, 1);
      final refs = await h.pocket.files.list(store: 'widgets', recordId: recId);
      expect(refs.length, 1);
      expect(refs.first.state, 'synced');
    });
  });

  group('file-op retry persistence', () {
    Future<EngineHarness> harness(
            MockSyncBackend mock, BlobStore blobStore, TempDb dbPath) =>
        EngineHarness.create(
          mock: mock,
          config: testConfig(
              pushDebounce: const Duration(days: 365),
              backoffBase: const Duration(minutes: 5)),
          path: dbPath.path,
          blobStore: blobStore,
        );

    Future<Map<String, Object?>> queueOpRow(
        EngineHarness h, String kind) async {
      final rows = await h.pocket.db.query('lp_op_queue',
          where: 'kind = ?', whereArgs: [kind], orderBy: 'seq DESC', limit: 1);
      return rows.single;
    }

    test('upload transient failure is retried with backoff, never lost',
        () async {
      final mock = MockSyncBackend();
      final blobStore = MemoryBlobStore();
      final dbPath = await tempDbPath();
      final h = await harness(mock, blobStore, dbPath);
      addTearDown(() async {
        await h.close();
        await dbPath.cleanup();
      });

      final recId = mock.seed(store: 'widgets', data: {'name': 'w'});
      await h.engine.syncNow();
      await h.pocket.files.attach(
        store: 'widgets',
        recordId: recId,
        bytes: Stream.value(utf8.encode('retry bytes')),
        name: 'retry.png',
        allowVolatileBlobs: true,
      );

      // Transient failure on the first upload attempt.
      mock.script('updateRecordFiles', [MockThrow(TransientNetworkError())]);
      final report = await h.engine.syncNow();
      expect(report.hadError, isTrue);

      // The op is marked failed but retryable: attempt + deadline persisted.
      final op = await queueOpRow(h, 'fileUpload');
      expect(op['state'], 'failed', reason: 'not silently dropped');
      expect(op['attempt_count'], 1);
      expect(op['next_retry_at'],
          greaterThan(DateTime.now().millisecondsSinceEpoch),
          reason: 'persisted backoff deadline');
      expect(op['last_error'], isNotEmpty);
      expect(op['payload_json'], contains('retry.png'));

      // The ref keeps its pending-upload state.
      var refs = await h.pocket.files.list(store: 'widgets', recordId: recId);
      expect(refs.single.state, 'pending_upload');

      // Backoff honored: an immediate cycle does not retry.
      final calls = mock.updateFilesCalls;
      await h.engine.syncNow();
      expect(mock.updateFilesCalls, calls, reason: 'still inside backoff');

      // Deadline passes: the op is retried and completes.
      await h.pocket.db.execute(
          "UPDATE lp_op_queue SET next_retry_at = 0 WHERE kind = 'fileUpload'");
      final report2 = await h.engine.syncNow();
      expect(report2.hadError, isFalse);
      expect(mock.updateFilesCalls, calls + 1);
      refs = await h.pocket.files.list(store: 'widgets', recordId: recId);
      expect(refs.single.state, 'synced');
      expect((await queueOpRow(h, 'fileUpload'))['state'], 'done');
      expect(mock.records[recId]!.attachments.length, 1);
    });

    test('remove transient failure is retried with backoff', () async {
      final mock = MockSyncBackend();
      final blobStore = MemoryBlobStore();
      final dbPath = await tempDbPath();
      final h = await harness(mock, blobStore, dbPath);
      addTearDown(() async {
        await h.close();
        await dbPath.cleanup();
      });

      final recId = mock.seed(store: 'widgets', data: {'name': 'w'});
      await h.engine.syncNow();
      await h.pocket.files.attach(
        store: 'widgets',
        recordId: recId,
        bytes: Stream.value(utf8.encode('remove me')),
        name: 'del.png',
        allowVolatileBlobs: true,
      );
      await h.engine.syncNow();
      expect(mock.records[recId]!.attachments.length, 1);

      await h.pocket.files.remove(store: 'widgets', recordId: recId);

      mock.script('updateRecordFiles', [MockThrow(TransientNetworkError())]);
      final report = await h.engine.syncNow();
      expect(report.hadError, isTrue);

      final op = await queueOpRow(h, 'fileRemove');
      expect(op['state'], 'failed');
      expect(op['attempt_count'], 1);
      expect(op['next_retry_at'],
          greaterThan(DateTime.now().millisecondsSinceEpoch));

      var refs = await h.pocket.files.list(store: 'widgets', recordId: recId);
      expect(refs.single.state, 'pending_remove',
          reason: 'ref waits for the remove to land');

      await h.pocket.db.execute(
          "UPDATE lp_op_queue SET next_retry_at = 0 WHERE kind = 'fileRemove'");
      await h.engine.syncNow();
      expect(mock.records[recId]!.attachments, isEmpty,
          reason: 'remove applied');
      refs = await h.pocket.files.list(store: 'widgets', recordId: recId);
      expect(refs, isEmpty);
      expect((await queueOpRow(h, 'fileRemove'))['state'], 'done');
    });

    test('download transient failure is retryable', () async {
      final mock = MockSyncBackend();
      final blobStore = MemoryBlobStore();
      final dbPath = await tempDbPath();
      final h = await harness(mock, blobStore, dbPath);
      addTearDown(() async {
        await h.close();
        await dbPath.cleanup();
      });

      final recId = mock.seed(
          store: 'widgets',
          data: {'name': 'w'},
          attachments: ['remote_doc.pdf']);
      mock.serverFiles['$recId/remote_doc.pdf'] = utf8.encode('pdf bytes');
      await h.engine.syncNow();

      var refs = await h.pocket.files.list(store: 'widgets', recordId: recId);
      expect(refs.single.state, 'remote_only');

      // First download attempt fails transiently.
      mock.script('downloadFile', [MockThrow(TransientNetworkError())]);
      await expectLater(
        h.engine.fileLane.downloadFile(
          store: 'widgets',
          recordId: recId,
          refId: refs.single.refId,
          remoteName: 'remote_doc.pdf',
        ),
        throwsA(isA<TransientNetworkError>()),
      );
      refs = await h.pocket.files.list(store: 'widgets', recordId: recId);
      expect(refs.single.state, 'remote_only',
          reason: 'failed download keeps the ref remote_only');

      // Retry succeeds and materializes the blob.
      await h.engine.fileLane.downloadFile(
        store: 'widgets',
        recordId: recId,
        refId: refs.single.refId,
        remoteName: 'remote_doc.pdf',
      );
      refs = await h.pocket.files.list(store: 'widgets', recordId: recId);
      expect(refs.single.state, 'synced');
      final stream =
          await h.pocket.files.open(store: 'widgets', recordId: recId);
      final bytes = await stream.fold<List<int>>([], (p, c) => [...p, ...c]);
      expect(utf8.decode(bytes), 'pdf bytes');
    });

    test('restart resumes a failed upload after its deadline', () async {
      final mock = MockSyncBackend();
      final blobStore = MemoryBlobStore();
      final dbPath = await tempDbPath();
      final config = testConfig(
          pushDebounce: const Duration(days: 365),
          backoffBase: const Duration(minutes: 5));

      final pocket = await openPocket(
          path: dbPath.path, stores: [widgetsSchema()], blobStore: blobStore);
      final engineA = SyncEngine(pocket: pocket, backend: mock, config: config);
      await engineA.start();
      SyncEngine? engineB;
      addTearDown(() async {
        await engineA.stop();
        await engineB?.stop();
        await pocket.close();
        await dbPath.cleanup();
      });

      final recId = mock.seed(store: 'widgets', data: {'name': 'w'});
      await engineA.syncNow();
      await pocket.files.attach(
        store: 'widgets',
        recordId: recId,
        bytes: Stream.value(utf8.encode('restart bytes')),
        name: 'restart.png',
        allowVolatileBlobs: true,
      );
      mock.script('updateRecordFiles', [MockThrow(TransientNetworkError())]);
      await engineA.syncNow();

      var op =
          await queueOpRow(EngineHarness(pocket, mock, engineA), 'fileUpload');
      expect(op['state'], 'failed');

      // Simulate restart: same pocket, fresh engine.
      await engineA.stop();
      engineB = SyncEngine(pocket: pocket, backend: mock, config: config);
      await engineB.start();

      // The new engine respects the persisted deadline.
      final calls = mock.updateFilesCalls;
      await engineB.syncNow();
      expect(mock.updateFilesCalls, calls, reason: 'backoff survives restart');

      // Deadline passes; the op resumes and completes.
      await pocket.db.execute(
          "UPDATE lp_op_queue SET next_retry_at = 0 WHERE kind = 'fileUpload'");
      await engineB.syncNow();
      expect(mock.updateFilesCalls, calls + 1);
      final refs = await pocket.files.list(store: 'widgets', recordId: recId);
      expect(refs.single.state, 'synced');
      op = await queueOpRow(EngineHarness(pocket, mock, engineB), 'fileUpload');
      expect(op['state'], 'done');
    });
  });

  group('remote file-list shrink reconciliation', () {
    Future<EngineHarness> shrinkHarness(
            MockSyncBackend mock, BlobStore blobStore, TempDb dbPath) =>
        EngineHarness.create(
          mock: mock,
          config: convConfig(),
          path: dbPath.path,
          blobStore: blobStore,
        );

    test('synced refs shrink: the gone file is removed with refcount release',
        () async {
      final mock = MockSyncBackend();
      final blobStore = MemoryBlobStore();
      final dbPath = await tempDbPath();
      final h = await shrinkHarness(mock, blobStore, dbPath);
      addTearDown(() async {
        await h.close();
        await dbPath.cleanup();
      });

      final recId = mock.seed(
          store: 'widgets',
          data: {'name': 'w'},
          attachments: ['a.png', 'b.png']);
      mock.serverFiles['$recId/a.png'] = utf8.encode('bytes a');
      mock.serverFiles['$recId/b.png'] = utf8.encode('bytes b');
      await h.engine.syncNow();

      var refs = await h.pocket.files.list(store: 'widgets', recordId: recId);
      expect(refs.length, 2);
      for (final r in refs) {
        await h.engine.fileLane.downloadFile(
            store: 'widgets',
            recordId: recId,
            refId: r.refId,
            remoteName: r.remoteName!);
      }
      refs = await h.pocket.files.list(store: 'widgets', recordId: recId);
      expect(refs.every((r) => r.state == 'synced'), isTrue);
      final bRef = refs.firstWhere((r) => r.remoteName == 'b.png');
      final bHash = bRef.hash;

      // b is removed remotely.
      mock.records[recId]!.attachments = ['a.png'];
      mock.mutate(recId, {'id': recId, 'name': 'w'});
      await h.engine.syncNow();

      refs = await h.pocket.files.list(store: 'widgets', recordId: recId);
      expect(refs.map((r) => r.remoteName), ['a.png'],
          reason: 'b ref removed, a untouched');
      final blob = await h.pocket.db
          .query('lp_blobs', where: 'hash = ?', whereArgs: [bHash]);
      expect(blob.single['refcount'], 0,
          reason: 'b blob refcount released on shrink');
      final aRef = refs.single;
      expect(aRef.state, 'synced', reason: 'a unchanged');
      expect(await blobStore.exists(aRef.hash), isTrue);
    });

    test('remote_only refs shrink without touching siblings', () async {
      final mock = MockSyncBackend();
      final blobStore = MemoryBlobStore();
      final dbPath = await tempDbPath();
      final h = await shrinkHarness(mock, blobStore, dbPath);
      addTearDown(() async {
        await h.close();
        await dbPath.cleanup();
      });

      final recId = mock.seed(
          store: 'widgets',
          data: {'name': 'w'},
          attachments: ['a.png', 'b.png']);
      mock.serverFiles['$recId/a.png'] = utf8.encode('bytes a');
      mock.serverFiles['$recId/b.png'] = utf8.encode('bytes b');
      await h.engine.syncNow();

      var refs = await h.pocket.files.list(store: 'widgets', recordId: recId);
      expect(refs.length, 2);
      expect(refs.every((r) => r.state == 'remote_only'), isTrue);

      mock.records[recId]!.attachments = ['a.png'];
      mock.mutate(recId, {'id': recId, 'name': 'w'});
      await h.engine.syncNow();

      refs = await h.pocket.files.list(store: 'widgets', recordId: recId);
      expect(refs.map((r) => r.remoteName), ['a.png'],
          reason: 'remote_only b shrunk away');
    });

    test('pending-upload refs are untouched by remote shrink', () async {
      final mock = MockSyncBackend();
      final blobStore = MemoryBlobStore();
      final dbPath = await tempDbPath();
      final h = await shrinkHarness(mock, blobStore, dbPath);
      addTearDown(() async {
        await h.close();
        await dbPath.cleanup();
      });

      final recId = mock.seed(store: 'widgets', data: {'name': 'w'});
      await h.engine.syncNow();
      await h.pocket.files.attach(
        store: 'widgets',
        recordId: recId,
        bytes: Stream.value(utf8.encode('local bytes')),
        name: 'local.png',
        allowVolatileBlobs: true,
      );
      // Block the upload so the ref stays pending_upload.
      mock.script('updateRecordFiles', [MockThrow(TransientNetworkError())]);
      await h.engine.syncNow();

      // The remote list does not contain the pending upload.
      mock.mutate(recId, {'id': recId, 'name': 'w'});
      await h.engine.syncNow();

      final refs = await h.pocket.files.list(store: 'widgets', recordId: recId);
      expect(refs.single.state, 'pending_upload',
          reason: 'a local upload is never shrunk by the remote list');
      expect(refs.single.remoteName, isNull,
          reason: 'remote_name is set only by upload completion');
    });

    test('pending-remove refs are untouched by remote shrink', () async {
      final mock = MockSyncBackend();
      final blobStore = MemoryBlobStore();
      final dbPath = await tempDbPath();
      final h = await shrinkHarness(mock, blobStore, dbPath);
      addTearDown(() async {
        await h.close();
        await dbPath.cleanup();
      });

      final recId = mock.seed(
          store: 'widgets',
          data: {'name': 'w'},
          attachments: ['a.png', 'b.png']);
      mock.serverFiles['$recId/a.png'] = utf8.encode('bytes a');
      mock.serverFiles['$recId/b.png'] = utf8.encode('bytes b');
      await h.engine.syncNow();

      // Download + then remove a -> pending_remove ref + fileRemove op.
      var refs = await h.pocket.files.list(store: 'widgets', recordId: recId);
      final aRef = refs.firstWhere((r) => r.remoteName == 'a.png');
      await h.engine.fileLane.downloadFile(
          store: 'widgets',
          recordId: recId,
          refId: aRef.refId,
          remoteName: 'a.png');
      await h.pocket.files
          .remove(store: 'widgets', recordId: recId, refId: aRef.refId);
      // Block the remove op so the ref stays pending_remove.
      mock.script('updateRecordFiles', [MockThrow(TransientNetworkError())]);
      await h.engine.syncNow();

      // Remote also no longer lists a.png.
      mock.records[recId]!.attachments = ['b.png'];
      mock.mutate(recId, {'id': recId, 'name': 'w'});
      await h.engine.syncNow();

      refs = await h.pocket.files.list(store: 'widgets', recordId: recId);
      final stillPending = refs.firstWhere((r) => r.remoteName == 'a.png',
          orElse: () => refs.first);
      expect(stillPending.state, 'pending_remove',
          reason: 'an in-flight remove is left alone by the shrink');
    });
  });

  group('file lane operation/error matrix', () {
    test('malformed queue payload marks the op failed', () async {
      final mock = MockSyncBackend();
      final h = await EngineHarness.create(
        mock: mock,
        config: convConfig(),
        blobStore: MemoryBlobStore(),
      );
      addTearDown(h.close);
      final recId = generateRecordId();
      await h.pocket.collection('widgets').put({'id': recId, 'name': 'w'});
      await h.pocket.db.insert('lp_op_queue', {
        'op_id': generateRecordId(),
        'store': 'widgets',
        'record_id': recId,
        'kind': 'fileUpload',
        'payload_json': 'not-json',
        'state': 'pending',
        'created_at': DateTime.now().millisecondsSinceEpoch,
      });

      final report = await h.engine.fileLane.syncFiles();
      expect(report.hadError, isTrue);
      final op = (await h.pocket.db.query('lp_op_queue',
              where: "record_id = ? AND kind = 'fileUpload'",
              whereArgs: [recId]))
          .single;
      expect(op['state'], 'failed');
      expect(op['next_retry_at'], greaterThan(0));
    });

    test('missing blob fails the upload retryably', () async {
      final mock = MockSyncBackend();
      final store = MemoryBlobStore();
      final h = await EngineHarness.create(
        mock: mock,
        config: convConfig(),
        blobStore: store,
      );
      addTearDown(h.close);
      final recId = mock.seed(store: 'widgets', data: {'name': 'w'});
      await h.engine.syncNow();

      final ref = await h.pocket.files.attach(
          store: 'widgets',
          recordId: recId,
          bytes: Stream.value(utf8.encode('bytes')),
          name: 'f.bin',
          allowVolatileBlobs: true);
      // Simulate lost bytes: the blob disappears before the lane runs.
      await store.delete(ref.hash);

      final report = await h.engine.fileLane.syncFiles();
      expect(report.hadError, isTrue);
      final op = (await h.pocket.db.query('lp_op_queue',
              where: "record_id = ? AND kind = 'fileUpload'",
              whereArgs: [recId]))
          .single;
      expect(op['state'], 'failed');
      expect(op['attempt_count'], 1);
      expect(op['next_retry_at'], greaterThan(0));
    });

    test('remote GET failure during adoption falls back to upload', () async {
      final mock = MockSyncBackend();
      final h = await EngineHarness.create(
        mock: mock,
        config: convConfig(),
        blobStore: MemoryBlobStore(),
      );
      addTearDown(h.close);
      final recId = mock.seed(store: 'widgets', data: {'name': 'w'});
      await h.engine.syncNow();
      await h.pocket.files.attach(
          store: 'widgets',
          recordId: recId,
          bytes: Stream.value(utf8.encode('data')),
          name: 'img.png',
          allowVolatileBlobs: true);
      // The adoption GET fails; the upload must still go through.
      mock.script('getRecord', [MockThrow(TransientNetworkError())]);

      final report = await h.engine.fileLane.syncFiles();
      expect(report.hadError, isFalse);
      expect(report.uploaded, 1);
      expect(
          (await h.pocket.files.list(store: 'widgets', recordId: recId))
              .single
              .state,
          'synced');
      expect(mock.records[recId]!.attachments, isNotEmpty);
    });

    test('adoption GET throwing a non-SyncError still falls back to upload',
        () async {
      final mock = MockSyncBackend();
      final h = await EngineHarness.create(
        mock: mock,
        config: convConfig(),
        blobStore: MemoryBlobStore(),
      );
      addTearDown(h.close);
      final recId = mock.seed(store: 'widgets', data: {'name': 'w'});
      await h.engine.syncNow();
      await h.pocket.files.attach(
          store: 'widgets',
          recordId: recId,
          bytes: Stream.value(utf8.encode('data')),
          name: 'img.png',
          allowVolatileBlobs: true);
      // The adoption GET throws a raw Error (not a SyncError): the catch-all
      // in _processUploadOp swallows every exception, not just 404/SyncError.
      mock.script('getRecord', [MockThrow(StateError('backend wedged'))]);

      final report = await h.engine.fileLane.syncFiles();
      expect(report.hadError, isFalse);
      expect(report.uploaded, 1);
      expect(
          (await h.pocket.files.list(store: 'widgets', recordId: recId))
              .single
              .state,
          'synced');
      expect(mock.records[recId]!.attachments, isNotEmpty);
    });

    test('upload response with no attachments falls back to the requested name',
        () async {
      final mock = MockSyncBackend();
      final h = await EngineHarness.create(
        mock: mock,
        config: convConfig(),
        blobStore: MemoryBlobStore(),
      );
      addTearDown(h.close);
      final recId = mock.seed(store: 'widgets', data: {'name': 'w'});
      await h.engine.syncNow();
      await h.pocket.files.attach(
          store: 'widgets',
          recordId: recId,
          bytes: Stream.value(utf8.encode('data')),
          name: 'fallback.png',
          allowVolatileBlobs: true);
      mock.script('updateRecordFiles', [
        MockReturn(RemoteRecord(
            id: recId,
            store: 'widgets',
            updated: '2026-08-15 00:00:00.000Z',
            data: {'id': recId, 'name': 'w'},
            attachments: const [])),
      ]);

      final report = await h.engine.fileLane.syncFiles();
      expect(report.hadError, isFalse);
      expect(report.uploaded, 1);
      final ref =
          (await h.pocket.files.list(store: 'widgets', recordId: recId)).single;
      expect(ref.state, 'synced');
      expect(ref.remoteName, 'fallback.png',
          reason: 'empty attachments -> the requested name is adopted');
    });

    test('remove op with a null remote name never calls the backend', () async {
      final mock = MockSyncBackend();
      final h = await EngineHarness.create(
        mock: mock,
        config: convConfig(),
        blobStore: MemoryBlobStore(),
      );
      addTearDown(h.close);
      final recId = mock.seed(store: 'widgets', data: {'name': 'w'});
      await h.engine.syncNow();
      // A ref with no remote_name + a crafted fileRemove op (null remote).
      final refId = generateRecordId();
      await h.pocket.db.insert('lp_file_refs', {
        'ref_id': refId,
        'store': 'widgets',
        'record_id': recId,
        'field': 'attachments',
        'hash': 'c' * 64,
        'state': 'pending_remove',
      });
      await h.pocket.db.insert('lp_op_queue', {
        'op_id': generateRecordId(),
        'store': 'widgets',
        'record_id': recId,
        'kind': 'fileRemove',
        'payload_json': jsonEncode({
          'ref_id': refId,
          'field': 'attachments',
          'remote_name': null,
          'hash': 'c' * 64,
        }),
        'state': 'pending',
        'created_at': DateTime.now().millisecondsSinceEpoch,
      });
      final callsBefore = mock.updateFilesCalls;

      final report = await h.engine.fileLane.syncFiles();
      expect(report.hadError, isFalse);
      expect(report.removed, 1);
      expect(mock.updateFilesCalls, callsBefore,
          reason: 'no remote call for a null remote name');
      expect(await h.pocket.files.list(store: 'widgets', recordId: recId),
          isEmpty);
    });

    test('remote record 404 during upload fails retryably', () async {
      final mock = MockSyncBackend();
      final h = await EngineHarness.create(
        mock: mock,
        config: convConfig(),
        blobStore: MemoryBlobStore(),
      );
      addTearDown(h.close);
      // Attach to a record that never reached the server (attach tolerates a
      // missing local record, so no record op exists to gate the file op).
      final ghost = generateRecordId();
      await h.pocket.files.attach(
          store: 'widgets',
          recordId: ghost,
          bytes: Stream.value(utf8.encode('data')),
          name: 'x.bin',
          allowVolatileBlobs: true);
      mock.script('getRecord', [MockThrow(NotFoundError())]);

      final report = await h.engine.fileLane.syncFiles();
      expect(report.hadError, isTrue);
      final op = (await h.pocket.db.query('lp_op_queue',
              where: "record_id = ? AND kind = 'fileUpload'",
              whereArgs: [ghost]))
          .single;
      expect(op['state'], 'failed');
      expect(op['next_retry_at'], greaterThan(0),
          reason: 'retried on a later pass, never silently dropped');
    });

    test('download stream failure after partial bytes flags hadError',
        () async {
      final mock = MockSyncBackend();
      final h = await EngineHarness.create(
        mock: mock,
        config: convConfig(),
        blobStore: MemoryBlobStore(),
        stores: [
          CollectionSchema(
            name: 'widgets',
            version: 1,
            fields: [Field.text('name')],
            prefetchFiles: true,
          ),
        ],
      );
      addTearDown(h.close);
      final recId = mock
          .seed(store: 'widgets', data: {'name': 'w'}, attachments: ['f.bin']);
      // First pass: the prefetch download fails outright, so the ref stays
      // remote_only (observation happens in the same pass as prefetch).
      mock.script('downloadFile', [MockThrow(TransientNetworkError())]);
      await h.engine.syncNow();
      var ref =
          (await h.pocket.files.list(store: 'widgets', recordId: recId)).single;
      expect(ref.state, 'remote_only');

      // Second pass: the download stream emits bytes then errors.
      Stream<List<int>> erroringStream() async* {
        yield utf8.encode('partial');
        throw StateError('stream died');
      }

      mock.script('downloadFile', [MockReturn(erroringStream())]);
      final report = await h.engine.fileLane.syncFiles();
      expect(report.hadError, isTrue);
      expect(report.downloaded, 0);
      ref =
          (await h.pocket.files.list(store: 'widgets', recordId: recId)).single;
      expect(ref.state, 'remote_only',
          reason: 'the ref stays remote-only after a failed download');
    });

    test('prefetch skips remote_only refs with no remote name', () async {
      final mock = MockSyncBackend();
      final h = await EngineHarness.create(
        mock: mock,
        config: convConfig(),
        blobStore: MemoryBlobStore(),
        stores: [
          CollectionSchema(
            name: 'widgets',
            version: 1,
            fields: [Field.text('name')],
            prefetchFiles: true,
          ),
        ],
      );
      addTearDown(h.close);
      final recId = mock
          .seed(store: 'widgets', data: {'name': 'w'}, attachments: ['f.bin']);
      await h.engine.syncNow(); // pull observes + prefetches the named file
      final downloadsBefore = mock.downloadFileCalls;

      // A remote_only ref WITHOUT a remote name can never be downloaded: the
      // prefetch loop must skip it silently (no download, no error).
      await h.pocket.db.insert('lp_file_refs', {
        'ref_id': generateRecordId(),
        'store': 'widgets',
        'record_id': recId,
        'field': 'attachments',
        'hash': 'unknown_ghost.bin',
        'remote_name': null,
        'state': 'remote_only',
      });

      final report = await h.engine.fileLane.syncFiles();
      expect(report.hadError, isFalse,
          reason: 'a null remote name is skipped, not an error');
      expect(report.downloaded, 0);
      expect(mock.downloadFileCalls, downloadsBefore,
          reason: 'no download attempt for a ref with no remote name');
      final ghost = (await h.pocket.db.query('lp_file_refs',
              where: "record_id = ? AND hash = 'unknown_ghost.bin'",
              whereArgs: [recId]))
          .single;
      expect(ghost['state'], 'remote_only',
          reason: 'the nameless ref stays untouched');
    });

    test('zero-row ref update completes the op without crashing', () async {
      final mock = MockSyncBackend();
      final h = await EngineHarness.create(
        mock: mock,
        config: convConfig(),
        blobStore: MemoryBlobStore(),
      );
      addTearDown(h.close);
      final recId = mock.seed(store: 'widgets', data: {'name': 'w'});
      await h.engine.syncNow();
      // Queue an upload whose ref does not exist.
      final opId = generateRecordId();
      final hash = sha256.convert(utf8.encode('orphan')).toString();
      await h.pocket.db.insert('lp_op_queue', {
        'op_id': opId,
        'store': 'widgets',
        'record_id': recId,
        'kind': 'fileUpload',
        'payload_json': jsonEncode({
          'ref_id': 'missing-ref',
          'field': 'attachments',
          'hash': hash,
          'name': '$hash.bin',
        }),
        'state': 'pending',
        'created_at': DateTime.now().millisecondsSinceEpoch,
      });
      // Ensure the blob exists so the upload path is reached.
      final store = h.pocket.blobStore!;
      await store.put(Stream.value(utf8.encode('orphan')));

      final report = await h.engine.fileLane.syncFiles();
      expect(report.hadError, isFalse);
      // The upload was performed; the missing ref update was a zero-row no-op.
      expect(
          (await h.pocket.db
                  .query('lp_op_queue', where: 'op_id = ?', whereArgs: [opId]))
              .single['state'],
          'done');
    });
  });

  group('remote file observation reconciliation', () {
    test('unknown remote files create remote_only refs (no dupes)', () async {
      final mock = MockSyncBackend();
      final h = await EngineHarness.create(
        mock: mock,
        config: convConfig(),
        blobStore: MemoryBlobStore(),
      );
      addTearDown(h.close);
      final recId = mock.seed(
          store: 'widgets',
          data: {'name': 'w'},
          attachments: ['a.bin', 'a.bin', 'b.bin']);
      await h.engine.syncNow();

      final refs = await h.pocket.files.list(store: 'widgets', recordId: recId);
      expect(refs.map((r) => r.remoteName).toSet(), {'a.bin', 'b.bin'},
          reason: 'duplicate remote filenames collapse to one ref');
      expect(refs.every((r) => r.state == 'remote_only'), isTrue);
      expect(refs.every((r) => r.hash.startsWith('unknown_')), isTrue);
      expect(
          await h.pocket.db.query('lp_file_refs',
              where: "record_id = ? AND remote_name = 'a.bin'",
              whereArgs: [recId]),
          hasLength(1));
    });

    test('prefetchFiles downloads remote_only refs and records the real hash',
        () async {
      final mock = MockSyncBackend();
      final h = await EngineHarness.create(
        mock: mock,
        config: convConfig(),
        blobStore: MemoryBlobStore(),
        stores: [
          CollectionSchema(
            name: 'widgets',
            version: 1,
            fields: [Field.text('name')],
            prefetchFiles: true,
          ),
        ],
      );
      addTearDown(h.close);
      final bytes = utf8.encode('prefetched content');
      final recId = mock
          .seed(store: 'widgets', data: {'name': 'w'}, attachments: ['pf.bin']);
      mock.serverFiles['$recId/pf.bin'] = bytes;
      await h.engine.syncNow();

      final refs = await h.pocket.files.list(store: 'widgets', recordId: recId);
      expect(refs.single.state, 'synced',
          reason: 'prefetch downloaded the remote_only ref');
      expect(refs.single.hash, sha256.convert(bytes).toString(),
          reason: 'the ref now carries the real content hash');
      expect(refs.single.hash.startsWith('unknown_'), isFalse);
    });

    test('local pending upload adopts an existing remote filename', () async {
      final mock = MockSyncBackend();
      final h = await EngineHarness.create(
        mock: mock,
        config: convConfig(),
        blobStore: MemoryBlobStore(),
      );
      addTearDown(h.close);
      final recId = mock.seed(
          store: 'widgets', data: {'name': 'w'}, attachments: ['photo.png']);
      await h.engine.syncNow();
      await h.pocket.files.attach(
          store: 'widgets',
          recordId: recId,
          bytes: Stream.value(utf8.encode('content')),
          name: 'photo.png',
          allowVolatileBlobs: true);

      final report = await h.engine.fileLane.syncFiles();
      expect(report.uploaded, 1);
      // The remote already lists photo.png; the upload adopts it (no dup).
      expect(mock.records[recId]!.attachments, ['photo.png']);
      final refs = await h.pocket.files.list(store: 'widgets', recordId: recId);
      expect(refs.length, 2,
          reason: 'remote_only observation ref + the adopted upload ref');
      final adopted = refs.firstWhere((r) => r.state == 'synced');
      expect(adopted.remoteName, 'photo.png');
      expect(adopted.hash.startsWith('unknown_'), isFalse);
    });
  });
}
