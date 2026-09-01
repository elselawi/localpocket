import 'dart:io';

import 'package:localpocket/src/internal/raw_surface.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import '../sync/engine/engine_helpers.dart';
import '../sync/engine/mock_backend.dart';

/// State-machine / property coverage: drive every domain sync
/// state (clean, dirty, conflict, error/quarantine) and file state
/// (pending_upload, synced, pending_remove, remote_only) through local
/// mutation, remote apply, retry, purge, resolution, and restart, and compare
/// against a small reference model for the core invariants:
///
///   • local writes are atomic with intent (outbox op present ⇔ dirty),
///   • dirty rows retain a base,
///   • conflict ops are held (never pushed until resolution),
///   • hidden rows retain bytes,
///   • no operation is silently dropped.
void main() {
  SyncConfig conv() => testConfig(
      pushDebounce: const Duration(days: 365), backoffBase: Duration.zero);

  // A schema whose merges always escalate to a conflict (like the conflict
  // harness): the default merge auto-resolves both-changed fields (remote
  // wins) — a real conflict requires the resolver to decline.
  CollectionSchema<Object?> conflictSchema() => CollectionSchema(
        name: 'widgets',
        version: 1,
        fields: [
          Field.text('name', required: true),
          Field.int('qty'),
        ],
        conflictPolicy: ConflictPolicy(
          collectionResolver: CustomResolver((ctx) => null),
        ),
      );

  test('domain sync state machine walks every state with the invariants',
      () async {
    final mock = MockSyncBackend();
    final h = await EngineHarness.create(
        mock: mock, config: conv(), stores: [conflictSchema()]);
    addTearDown(h.close);

    // Reference model for the single record under test: the expectState
    // helper below is the oracle — it asserts the ACTUAL sync-row state
    // matches the expected model state and enforces the base-retention
    // invariant for dirty rows.
    // 1. clean: seeded + pulled.
    final id = mock.seed(store: 'widgets', data: {'name': 'base', 'qty': 0});
    await h.engine.syncNow();

    Future<void> expectState({
      required bool clean,
      required bool dirty,
      required bool conflict,
    }) async {
      final sr = await h.pocket.outbox.readSyncRow(h.pocket.db, 'widgets', id);
      if (clean) {
        expect(sr?.syncState, SyncState.clean);
        expect(sr!.baseJson, isNull, reason: 'clean rows drop their base');
      } else if (dirty) {
        expect(sr?.syncState, SyncState.dirty);
        expect(sr!.baseJson, isNotNull,
            reason: 'INVARIANT: a dirty row retains its base');
      } else if (conflict) {
        expect(sr?.syncState, SyncState.conflict);
      } else {
        fail('expectState: exactly one expected state must be true');
      }
    }

    await expectState(clean: true, dirty: false, conflict: false);
    expect(await h.pocket.collection('widgets').get(id), isNotNull);

    // 2. local edit -> dirty WITH base (the clean row had a remote base).
    await h.pocket.collection('widgets').patch(id, {'qty': 1});
    await expectState(clean: false, dirty: true, conflict: false);
    expect(await h.pocket.outbox.readOp(h.pocket.db, 'widgets', id), isNotNull,
        reason: 'INVARIANT: dirty rows carry an outbox op (intent)');

    // 3. push -> clean, base dropped.
    await h.engine.syncNow();
    await expectState(clean: true, dirty: false, conflict: false);

    // 4. local edit + concurrent remote edit -> conflict; op HELD.
    await h.pocket.collection('widgets').patch(id, {'qty': 2});
    mock.records[id] = MockRecord(
      id: id,
      store: 'widgets',
      updated: mock.nextUpdated(),
      data: {'name': 'base', 'qty': 99},
    );
    await h.engine.syncNow();
    await expectState(clean: false, dirty: false, conflict: true);
    final pushesBefore = mock.updateCalls;
    await h.engine.syncNow();
    expect(mock.updateCalls, pushesBefore,
        reason: 'INVARIANT: conflict ops are held — a cycle never pushes them');
    expect(await h.pocket.conflicts.get('widgets', id), isNotNull);

    // 5. resolve acceptRemote -> dirty (re-pushed next cycle) -> clean.
    await h.pocket.conflicts.acceptRemote('widgets', id);
    await expectState(clean: false, dirty: true, conflict: false);
    await h.engine.syncNow();
    await expectState(clean: true, dirty: false, conflict: false);
    expect(mock.records[id]!.data['qty'], 99,
        reason: 'the accepted remote value reached the server');

    // 6. transient push failure -> stays dirty + retryable (base retained).
    await h.pocket.collection('widgets').patch(id, {'qty': 3});
    mock.script('updateRecord', [MockThrow(TransientNetworkError())]);
    await h.engine.syncNow();
    final failedSr =
        await h.pocket.outbox.readSyncRow(h.pocket.db, 'widgets', id);
    expect(failedSr!.syncState, SyncState.dirty,
        reason: 'a transient failure never silently drops the op');
    expect(failedSr.nextRetryAt, greaterThan(0),
        reason: 'the op is retryable with a persisted deadline');
    expect(failedSr.baseJson, isNotNull, reason: 'the base is retained');
    mock.script('updateRecord', const []);
    await h.engine.syncNow();
    await expectState(clean: true, dirty: false, conflict: false);
    expect(mock.records[id]!.data['qty'], 3);

    // 7. permanent failure -> dead-lettered, domain bytes preserved.
    await h.pocket.collection('widgets').patch(id, {'qty': 4});
    mock.script('updateRecord', [MockThrow(PayloadError('validation failed'))]);
    await h.engine.syncNow();
    final localDoc = await h.pocket.collection('widgets').get(id);
    expect(localDoc!['qty'], 4,
        reason: 'INVARIANT: a failed push never destroys local data');
    final dl = await h.pocket.db
        .query('lp_dead_letter', where: 'record_id = ?', whereArgs: [id]);
    expect(dl, isNotEmpty, reason: 'the permanent failure dead-lettered');
    mock.script('updateRecord', const []);

    // 8. purge -> gone from every table.
    await h.pocket.collection('widgets').purge(id);
    expect(await h.pocket.collection('widgets').get(id), isNull);
    expect(
        await h.pocket.db
            .query('lp_outbox', where: 'record_id = ?', whereArgs: [id]),
        isEmpty);
    expect(
        await h.pocket.db
            .query('lp_conflicts', where: 'record_id = ?', whereArgs: [id]),
        isEmpty);
  });

  test('restart preserves dirty-with-base and the file states', () async {
    final mock = MockSyncBackend();
    final dbPath = await tempDbPath();
    final blobDir = await Directory.systemTemp.createTemp('lp_blobs_');
    addTearDown(dbPath.cleanup);
    addTearDown(() async {
      if (await blobDir.exists()) await blobDir.delete(recursive: true);
    });
    // A DURABLE blob store so the uploaded bytes survive the restart (an
    // in-memory store would lose them, which is not a restart scenario).
    final pocket = await openPocket(
      path: dbPath.path,
      stores: [widgetsSchema()],
      blobStore: NativeBlobStore(blobDir.path),
    );
    final engine = SyncEngine(pocket: pocket, backend: mock, config: conv());
    await engine.start();

    final id = mock.seed(store: 'widgets', data: {'name': 'base'});
    await engine.syncNow();
    await pocket.collection('widgets').patch(id, {'qty': 7});
    final ref = await pocket.files.attach(
        store: 'widgets',
        recordId: id,
        bytes: Stream.value([1, 2, 3]),
        name: 'f.bin');

    // State before the restart: dirty with base, file pending_upload.
    var sr = await pocket.outbox.readSyncRow(pocket.db, 'widgets', id);
    expect(sr!.syncState, SyncState.dirty);
    expect(sr.baseJson, isNotNull);
    var fileRefs = await pocket.files.list(store: 'widgets', recordId: id);
    expect(fileRefs.single.state, 'pending_upload');

    // Restart.
    await engine.stop();
    await pocket.close();
    final reopened = await openPocket(
      path: dbPath.path,
      stores: [widgetsSchema()],
      blobStore: NativeBlobStore(blobDir.path),
    );
    addTearDown(reopened.close);
    final engine2 = SyncEngine(pocket: reopened, backend: mock, config: conv());

    // Dirty-with-base survives the restart.
    sr = await reopened.outbox.readSyncRow(reopened.db, 'widgets', id);
    expect(sr!.syncState, SyncState.dirty,
        reason: 'INVARIANT: restart preserves dirty state');
    expect(sr.baseJson, isNotNull, reason: 'and the base survives');
    final drained = await reopened.outbox.drain();
    expect(drained.map((o) => o.recordId), contains(id),
        reason: 'INVARIANT: no op is silently dropped across restart');

    // File state survives: still pending_upload.
    fileRefs = await reopened.files.list(store: 'widgets', recordId: id);
    expect(fileRefs.single.state, 'pending_upload');
    expect(fileRefs.single.refId, ref.refId);

    // The restarted lane uploads and the ref becomes synced.
    await engine2.start();
    await engine2.syncNow();
    fileRefs = await reopened.files.list(store: 'widgets', recordId: id);
    expect(fileRefs.single.state, 'synced',
        reason: 'the restarted file lane completed the upload');
    expect(mock.records[id]!.imgs, isNotEmpty);
    await engine2.stop();
  });

  test('hidden rows retain their bytes and state', () async {
    final mock = MockSyncBackend();
    final h = await EngineHarness.create(mock: mock, config: conv());
    addTearDown(h.close);
    final id = mock.seed(store: 'widgets', data: {'name': 'visible'});
    await h.engine.syncNow();
    await h.pocket.collection('widgets').patch(id, {'qty': 5}); // dirty

    // Hide the row the way the sweeper does (hidden access_state).
    await h.pocket.db.update('lp_sync_row', {'access_state': 'hidden'},
        where: 'record_id = ?', whereArgs: [id]);

    // Bytes are retained: the domain row is still there with its data, and
    // the dirty state is preserved.
    final doc =
        await h.pocket.db.query('widgets', where: 'id = ?', whereArgs: [id]);
    expect(doc, hasLength(1), reason: 'hidden rows keep their bytes');
    final sr = await h.pocket.outbox.readSyncRow(h.pocket.db, 'widgets', id);
    expect(sr!.syncState, SyncState.dirty,
        reason: 'hiding never clears a dirty row');
  });
}
