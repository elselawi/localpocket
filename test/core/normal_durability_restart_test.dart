import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import '../sync/engine/engine_helpers.dart';
import '../sync/engine/mock_backend.dart';

/// `DurabilityClass.normal` end-to-end: a write committed without the
/// `synchronous=FULL` toggle must actually reach the SQLite file, so a close
/// (or app crash) followed by a reopen reads the committed data back.
/// `durability_test.dart` pins the pragma behaviour only (no FULL toggle is
/// issued); these tests go one step further and prove the commits are durable
/// across restart — both for direct collection writes and for sync-engine
/// settlements (outbox/dirty state committed by `SyncEngine.syncNow`).
void main() {
  Future<LocalPocket> openFileBacked(String path) =>
      openPocket(path: path, stores: [widgetsSchema()]);

  group('direct writes with normal durability survive reopen', () {
    test('put commits without the FULL toggle and survives close/reopen',
        () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final recorder = StatementRecorder();
      final pocket = await openPocket(
          path: t.path,
          stores: [widgetsSchema()],
          testHooks: TestHooks(onExecute: recorder.record));

      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'kept'),
          durability: DurabilityClass.normal);
      expect(
          recorder.statements
              .where((s) => s.contains('PRAGMA synchronous'))
              .toList(),
          isEmpty,
          reason: 'sanity: the write ran without the FULL toggle');
      await pocket.close();

      final reopened = await openFileBacked(t.path);
      addTearDown(reopened.close);
      final doc = await reopened.collection('widgets').get(id);
      expect(doc, isNotNull,
          reason: 'the normal-durability commit survived the restart');
      expect(doc!['name'], 'kept');
    });

    test('patch and archive committed with normal durability survive reopen',
        () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final pocket = await openPocket(
          path: t.path, stores: [widgetsSchema(keepUnsyncedArchives: true)]);

      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'a'));
      await pocket
          .collection('widgets')
          .patch(id, {'qty': 41}, durability: DurabilityClass.normal);
      await pocket
          .collection('widgets')
          .archive(id, durability: DurabilityClass.normal);
      await pocket.close();

      final reopened = await openFileBacked(t.path);
      addTearDown(reopened.close);
      final rows =
          await reopened.db.query('widgets', where: 'id = ?', whereArgs: [id]);
      expect(rows, hasLength(1),
          reason: 'the archived row survived the restart (the schema keeps '
              'never-remote archived rows) — Collection.get() itself filters '
              'archived rows, so assert on the table');
      expect(rows.single['archived'], 1);
      expect(rows.single['qty'], 41);
    });

    test(
        'a batch of normal-durability writes survives reopen with nothing '
        'duplicated', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final pocket = await openFileBacked(t.path);
      final ids = List.generate(10, (_) => generateRecordId()).toList()..sort();
      for (final id in ids) {
        await pocket
            .collection('widgets')
            .put(record(id: id, name: 'n'), durability: DurabilityClass.normal);
      }
      await pocket.close();

      final reopened = await openFileBacked(t.path);
      addTearDown(reopened.close);
      final count = await reopened.collection('widgets').query().all().count();
      expect(count, ids.length,
          reason: 'exactly the committed rows survive — no loss, no dupes');
    });

    test(
        'normal-durability transaction commits (with outbox rows) survive '
        'reopen', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final pocket = await openFileBacked(t.path);

      final id = generateRecordId();
      await pocket.transaction((tx) async {
        await tx.collection('widgets').put(record(id: id, name: 'tx'));
      }, durability: DurabilityClass.normal);
      await pocket.close();

      final reopened = await openFileBacked(t.path);
      addTearDown(reopened.close);
      expect(await reopened.collection('widgets').get(id), isNotNull,
          reason: 'the domain row committed');
      final outs = await reopened.outbox.drain();
      expect(outs.map((o) => o.recordId), [id],
          reason: 'the atomically-committed outbox op survives the restart '
              '(the local-first sync intent is never orphaned)');
    });

    test(
        'WAL journaling stays active: normal-durability writes commit into '
        'WAL and reopen cleanly', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final pocket = await openFileBacked(t.path);

      // Sanity on the restart precondition: the connection opened in WAL
      // mode and writes journal through the WAL.
      final journal = await pocket.db.rawQuery('PRAGMA journal_mode');
      expect(journal.single.values.single, 'wal');
      await pocket.collection('widgets').put(
          record(id: generateRecordId(), name: 'w'),
          durability: DurabilityClass.normal);
      await pocket.close();

      final reopened = await openFileBacked(t.path);
      addTearDown(reopened.close);
      final reopenedJournal = await reopened.db.rawQuery('PRAGMA journal_mode');
      expect(reopenedJournal.single.values.single, 'wal',
          reason: 'the WAL-mode DB reopens cleanly (not corrupted, not '
              'forced into another journal mode)');
      final count = await reopened.collection('widgets').query().all().count();
      expect(count, 1);
    });
  });

  group('sync-engine settlements with normal durability survive restart', () {
    test('push-settled rows reopen clean, outbox empty, remote intact',
        () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final mock = MockSyncBackend();
      final h = await EngineHarness.create(
          mock: mock, config: testConfig(), path: t.path);
      addTearDown(h.close);

      // Create + push with normal durability: the local create and the
      // engine's settlement transaction both commit without the FULL toggle
      // and must remain durable.
      final id = generateRecordId();
      await h.pocket.collection('widgets').put(record(id: id, name: 'synced'),
          durability: DurabilityClass.normal);
      await h.engine.syncNow();
      final sr = await h.pocket.outbox.readSyncRow(h.pocket.db, 'widgets', id);
      expect(sr!.syncState, SyncState.clean,
          reason: 'sanity: fully settled before the restart');

      await h.close();

      final createsBeforeReopen = mock.createCalls;
      final reopened =
          await openPocket(path: t.path, stores: [widgetsSchema()]);
      addTearDown(reopened.close);

      final sr2 = await reopened.outbox.readSyncRow(reopened.db, 'widgets', id);
      expect(sr2!.syncState, SyncState.clean,
          reason: 'the normal-durability push settlement (clean + outbox '
              'delete) survived the restart');
      expect(await reopened.outbox.drain(), isEmpty,
          reason: 'no op is resurrected: the settlement removed it durably');
      expect(mock.records[id]!.data['name'], 'synced');
      expect(mock.createCalls, createsBeforeReopen,
          reason: 'exactly one remote record — the settled op is never '
              're-pushed after the restart');
    });

    test('dirty rows pushed after reopen converge from the settled base',
        () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final mock = MockSyncBackend();
      final h = await EngineHarness.create(
          mock: mock, config: testConfig(), path: t.path);
      addTearDown(h.close);

      final id = generateRecordId();
      await h.pocket
          .collection('widgets')
          .put(record(id: id, name: 'v1'), durability: DurabilityClass.normal);
      await h.engine.syncNow();
      // A second normal-durability edit is left UNSYNCED at close time.
      await h.pocket
          .collection('widgets')
          .patch(id, {'name': 'v2'}, durability: DurabilityClass.normal);

      await h.close();

      final reopened =
          await openPocket(path: t.path, stores: [widgetsSchema()]);
      addTearDown(reopened.close);
      final sr = await reopened.outbox.readSyncRow(reopened.db, 'widgets', id);
      expect(sr!.syncState, SyncState.dirty,
          reason: 'the pending edit survived the restart');
      expect(await reopened.collection('widgets').get(id), isNotNull);

      // A fresh engine picks up the surviving op and converges.
      final engine2 =
          SyncEngine(pocket: reopened, backend: mock, config: testConfig());
      addTearDown(engine2.stop);
      await engine2.start();
      await engine2.syncNow();
      expect(mock.records[id]!.data['name'], 'v2');
      final sr2 = await reopened.outbox.readSyncRow(reopened.db, 'widgets', id);
      expect(sr2!.syncState, SyncState.clean);
    });

    test('pull-apply commits with normal durability survive restart', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final mock = MockSyncBackend();
      final recId = mock.seed(store: 'widgets', data: {'name': 'remote'});
      final h = await EngineHarness.create(
          mock: mock, config: testConfig(), path: t.path);
      await h.engine.syncNow();
      final sr =
          await h.pocket.outbox.readSyncRow(h.pocket.db, 'widgets', recId);
      expect(sr!.syncState, SyncState.clean,
          reason: 'sanity: the pull applied the remote row');
      await h.close();

      final reopened =
          await openPocket(path: t.path, stores: [widgetsSchema()]);
      addTearDown(reopened.close);
      final sr2 =
          await reopened.outbox.readSyncRow(reopened.db, 'widgets', recId);
      expect(sr2!.syncState, SyncState.clean,
          reason: 'the pulled-in remote row and its sync state survived');
      final doc = await reopened.collection('widgets').get(recId);
      expect(doc, isNotNull);
      expect(doc!['name'], 'remote');
    });
  });
}
