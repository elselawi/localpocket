import 'dart:async';
import 'dart:io';

import 'package:crypto/crypto.dart' show sha256;
import 'package:localpocket/localpocket.dart';
import 'package:localpocket/sync.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import '../sync/engine/engine_helpers.dart';
import '../sync/engine/mock_backend.dart';

/// Crash/restart matrix completion: durable file-backed scenarios
/// where a crash (process kill or interrupted I/O) happens mid-operation and a
/// reopen must resume without partial state, duplicate remote effects, or
/// deadlock.
///
/// Local-write boundary crashes, migration backfill resumption, and the
/// post-commit/pre-push case are covered in `invariant_test.dart`,
/// `migrate_test.dart`, and `retry_test.dart`; this file fills the remaining
/// gaps (merged-push settlement, queued-close reopen, interrupted blob puts,
/// and interrupted downloads).
void main() {
  SyncConfig conv() => testConfig(pushDebounce: const Duration(days: 365));

  test('merged push interrupted by close: durable retry, no duplicate remote',
      () async {
    final mock = MockSyncBackend();
    final dbPath = await tempDbPath();
    addTearDown(dbPath.cleanup);
    final pocket =
        await openPocket(path: dbPath.path, stores: [widgetsSchema()]);
    final engine = SyncEngine(pocket: pocket, backend: mock, config: conv());
    await engine.start();

    // Seed remotely, pull clean, then edit locally -> dirty with a base.
    final recId = mock.seed(store: 'widgets', data: {'name': 'remote'});
    await engine.syncNow();
    await pocket.collection('widgets').patch(recId, {'name': 'local-edit'});

    // Hold the push mid-request.
    mock.updateRecordBarrier = Completer<void>();
    mock.updateRecordEntered = Completer<void>();
    unawaited(engine.syncNow());
    await mock.updateRecordEntered!.future; // the PATCH is now in flight
    expect(mock.records[recId]!.data['name'], 'remote',
        reason: 'the remote is not yet updated');

    // "Crash": kill the process — close the DB while the push is in flight.
    await pocket.close();

    // Reopen: the op must still be dirty and retryable.
    final reopened =
        await openPocket(path: dbPath.path, stores: [widgetsSchema()]);
    addTearDown(reopened.close);
    final sr = await reopened.outbox.readSyncRow(reopened.db, 'widgets', recId);
    expect(sr!.syncState, SyncState.dirty,
        reason: 'the interrupted push never settled the row');
    final ops = await reopened.outbox.drain();
    expect(ops.map((o) => o.recordId), contains(recId));

    // The abandoned in-flight request finally lands on the server AFTER the
    // local process was "killed" (the settlement could not have happened).
    mock.updateRecordBarrier!.complete();

    // A fresh engine converges exactly one record (no duplicate remote
    // effect) and settles the row clean.
    final engine2 = SyncEngine(pocket: reopened, backend: mock, config: conv());
    await engine2.start();
    await engine2.syncNow();
    expect(mock.records.length, 1,
        reason: 'exactly one remote record — never a duplicate');
    expect(mock.records[recId]!.data['name'], 'local-edit');
    final sr2 =
        await reopened.outbox.readSyncRow(reopened.db, 'widgets', recId);
    expect(sr2!.syncState, SyncState.clean);
    await engine2.stop();
  });

  test('close with many queued ops: reopen drains every op exactly once',
      () async {
    final dbPath = await tempDbPath();
    addTearDown(dbPath.cleanup);
    final pocket =
        await openPocket(path: dbPath.path, stores: [widgetsSchema()]);
    final ids = <String>[];
    for (var i = 0; i < 25; i++) {
      final id = generateRecordId();
      ids.add(id);
      await pocket.collection('widgets').put(record(id: id, name: 'n$i'));
    }
    // "Crash" with the ops still queued.
    await pocket.close();

    final reopened =
        await openPocket(path: dbPath.path, stores: [widgetsSchema()]);
    addTearDown(reopened.close);
    final drained = await reopened.outbox.drain();
    expect(drained.map((o) => o.recordId).toSet(), ids.toSet(),
        reason: 'every queued op survived the close');
    expect(drained.length, ids.length, reason: 'no duplicates on drain');
  });

  test('interrupted blob put leaves no partial blob; retry succeeds', () async {
    final tempDir = await Directory.systemTemp.createTemp('lp_crash_');
    addTearDown(() async {
      if (await tempDir.exists()) await tempDir.delete(recursive: true);
    });
    final store = NativeBlobStore(tempDir.path);
    final data = List<int>.generate(10000, (i) => i % 251);

    // A stream that dies partway through the write.
    var attempts = 0;
    Stream<List<int>> flakyStream() async* {
      attempts++;
      yield data.sublist(0, 4000);
      if (attempts == 1) throw StateError('crash mid-write');
      yield data.sublist(4000);
    }

    await expectLater(store.put(flakyStream()), throwsA(isA<StateError>()));
    expect(await store.listHashes(), isEmpty,
        reason: 'no partial blob is ever published');
    final tmpDir = Directory('${tempDir.path}/tmp');
    final leftovers =
        tmpDir.existsSync() ? tmpDir.listSync() : <FileSystemEntity>[];
    expect(leftovers, isEmpty,
        reason: 'no tmp file is left behind by the interrupted put');

    // Restart (same store) retries cleanly.
    final hash = await store.put(flakyStream());
    expect(hash, sha256.convert(data).toString());
    expect(await store.listHashes(), [hash]);
    expect(attempts, 2, reason: 'the restart got a fresh stream');
  });

  test('download interrupted mid-stream resumes after restart', () async {
    final mock = MockSyncBackend();
    final dbPath = await tempDbPath();
    addTearDown(dbPath.cleanup);
    final store = MemoryBlobStore();
    final pocket = await openPocket(
      path: dbPath.path,
      stores: [
        CollectionSchema(
          name: 'widgets',
          version: 1,
          fields: [Field.text('name')],
          prefetchFiles: true,
        ),
      ],
      blobStore: store,
    );
    final engine = SyncEngine(pocket: pocket, backend: mock, config: conv());
    await engine.start();
    final recId =
        mock.seed(store: 'widgets', data: {'name': 'w'}, imgs: ['f.bin']);

    // First pass: the download dies mid-stream.
    Stream<List<int>> flaky() async* {
      yield List<int>.generate(10, (i) => i);
      throw StateError('connection lost');
    }

    mock.script('downloadFile', [MockThrow(TransientNetworkError())]);
    await engine.syncNow(); // observe -> remote_only, prefetch fails
    var ref =
        (await pocket.files.list(store: 'widgets', recordId: recId)).single;
    expect(ref.state, 'remote_only');
    expect(ref.hash, startsWith('unknown_'));

    // "Crash": close and reopen (same on-disk DB).
    await engine.stop();
    await pocket.close();
    final reopened = await openPocket(
      path: dbPath.path,
      stores: [
        CollectionSchema(
          name: 'widgets',
          version: 1,
          fields: [Field.text('name')],
          prefetchFiles: true,
        ),
      ],
      blobStore: store,
    );
    addTearDown(reopened.close);
    final engine2 = SyncEngine(pocket: reopened, backend: mock, config: conv());
    // NOTE: no engine2.start() — start() runs an immediate cycle that would
    // consume the scripted flaky download; drive the file lane directly.

    // The restarted engine attempts the download and fails mid-stream.
    mock.script('downloadFile', [MockReturn(flaky())]);
    final report = await engine2.fileLane.syncFiles();
    expect(report.hadError, isTrue, reason: 'the flaky download failed again');
    ref = (await reopened.files.list(store: 'widgets', recordId: recId)).single;
    expect(ref.state, 'remote_only',
        reason: 'a failed download never marks the ref synced');

    // A healthy retry after restart succeeds.
    mock.serverFiles['$recId/f.bin'] = List<int>.generate(64, (i) => i % 251);
    await engine2.fileLane.syncFiles();
    ref = (await reopened.files.list(store: 'widgets', recordId: recId)).single;
    expect(ref.state, 'synced', reason: 'the restart resumed the download');
    expect(ref.hash, isNot(startsWith('unknown_')));
  });
}
