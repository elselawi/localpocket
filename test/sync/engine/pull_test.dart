import 'package:localpocket/localpocket.dart';
import 'package:localpocket/sync.dart';
import 'package:test/test.dart';

import 'engine_helpers.dart';
import 'mock_backend.dart';

/// Pull and applyRemote tests.
void main() {
  Map<String, Object?> doc(String id, String name, [int qty = 0]) => {
        if (id.isNotEmpty) 'id': id,
        'name': name,
        'qty': qty,
      };

  group('pull & applyRemote', () {
    test('first pull bootstraps in pages', () async {
      final h = await EngineHarness.create(config: testConfig(maxPage: 200));
      addTearDown(h.close);
      final ids = <String>[];
      for (var i = 0; i < 450; i++) {
        final id = h.mock.seed(store: 'widgets', data: doc('', 'n$i', i));
        ids.add(id);
      }

      final report = await h.engine.syncNow();
      expect(report.pulled['widgets'], 450);
      expect(await h.pocket.collection('widgets').query().count(), 450);
      expect(h.mock.listChangesCalls, greaterThanOrEqualTo(3));

      final cursor = await h.engine.syncStore.readCursor('widgets');
      expect(cursor, isNotNull);
      expect(cursor!.updated, isNotEmpty);
    });

    test('rewind redelivery is noop', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      for (var i = 0; i < 50; i++) {
        h.mock.seed(store: 'widgets', data: doc('', 'n$i', i));
      }
      await h.engine.syncNow();
      expect(await h.pocket.collection('widgets').query().count(), 50);

      final report = await h.engine.syncNow();
      expect(report.pulled['widgets'], 0,
          reason: 'rewind re-deliveries are no-ops');
      expect(await h.pocket.collection('widgets').query().count(), 50);
    });

    test('updated tie tuple cursor no skip no dup', () async {
      const t = '2026-01-01 00:00:00.000Z';
      final h = await EngineHarness.create(config: testConfig(maxPage: 5));
      addTearDown(h.close);
      for (var i = 0; i < 20; i++) {
        h.mock.seed(store: 'widgets', data: doc('', 'n$i', i), updated: t);
      }
      await h.engine.syncNow();
      final count = await h.pocket.collection('widgets').query().count();
      expect(count, 20, reason: 'ties resolved by (updated, id) keyset');
    });

    test('page boundary mid tie', () async {
      const t = '2026-01-01 00:00:00.000Z';
      final h = await EngineHarness.create(config: testConfig(maxPage: 3));
      addTearDown(h.close);
      for (var i = 0; i < 7; i++) {
        h.mock.seed(store: 'widgets', data: doc('', 'n$i', i), updated: t);
      }
      await h.engine.syncNow();
      expect(await h.pocket.collection('widgets').query().count(), 7);
    });

    test('pass cap 100 pages resumes next pass', () async {
      final h = await EngineHarness.create(
          config: testConfig(maxPage: 10, maxPagesPerPass: 3));
      addTearDown(h.close);
      for (var i = 0; i < 100; i++) {
        h.mock.seed(store: 'widgets', data: doc('', 'n$i', i));
      }

      final first = await h.engine.syncNow();
      expect(first.pulled['widgets'], 30, reason: '3 pages of 10 per pass');
      expect(await h.pocket.collection('widgets').query().count(), 30);

      // Resumes from the cursor across further passes (rewind re-deliveries
      // are skipped but the cursor never regresses).
      var count = 30;
      var passes = 1;
      while (count < 100 && passes < 20) {
        await h.engine.syncNow();
        count = await h.pocket.collection('widgets').query().count();
        passes++;
      }
      expect(count, 100, reason: 'resumed passes drain the store');
      expect(passes, greaterThan(1), reason: 'it actually resumed');
    });

    test('cursor advances only with page commit', () async {
      final hooks = TestHooks();
      final h = await EngineHarness.create(testHooks: hooks);
      addTearDown(h.close);
      final ids = <String>[];
      for (var i = 0; i < 5; i++) {
        ids.add(h.mock.seed(store: 'widgets', data: doc('', 'n$i', i)));
      }

      // Crash while applying the 3rd record of the page.
      hooks.applyRemoteCrashPoint = (store, id) {
        if (id == ids[2]) throw StateError('simulated crash mid-page');
      };
      await expectLater(h.engine.syncNow(), throwsA(isA<StateError>()));

      // The whole page transaction rolled back: nothing applied, no cursor.
      expect(await h.pocket.collection('widgets').query().count(), 0);
      expect(await h.engine.syncStore.readCursor('widgets'), isNull);

      // Recover and re-pull idempotently.
      hooks.applyRemoteCrashPoint = null;
      final report = await h.engine.syncNow();
      expect(report.pulled['widgets'], 5);
      expect(await h.pocket.collection('widgets').query().count(), 5);
    });

    test('apply idempotent double delivery', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final a = h.mock.seed(store: 'widgets', data: doc('', 'a'));
      final b = h.mock.seed(store: 'widgets', data: doc('', 'b'));
      final c = h.mock.seed(store: 'widgets', data: doc('', 'c'));

      // Deliver a page with a duplicated record.
      h.mock.script('listChanges', [
        MockReturn([
          h.mock.records[a]!.toRemote(),
          h.mock.records[b]!.toRemote(),
          h.mock.records[b]!.toRemote(),
          h.mock.records[c]!.toRemote(),
        ]),
      ]);
      await h.engine.syncNow();
      expect(await h.pocket.collection('widgets').query().count(), 3,
          reason: 'double delivery is a no-op');
    });

    test('clean row fast forward', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: doc('', 'original'));
      await h.engine.syncNow();

      // Another writer updates the record.
      h.mock.mutate(id, doc(id, 'rewritten', 9));
      await h.engine.syncNow();

      final r = await h.pocket.collection('widgets').get(id);
      expect(r!['name'], 'rewritten');
      expect(r['qty'], 9);
      final sr = await h.pocket.outbox.readSyncRow(h.pocket.db, 'widgets', id);
      expect(sr!.syncState, SyncState.clean);
    });

    test('dirty row same base noop', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: doc('', 'original'));
      await h.engine.syncNow();

      // Local edit: dirty with base = remote @ T1.
      await h.pocket.collection('widgets').patch(id, {'name': 'local-edit'});
      expect(
          (await h.pocket.outbox.readSyncRow(h.pocket.db, 'widgets', id))!
              .syncState,
          SyncState.dirty);

      // Block the push so we can observe the pull's no-op.
      h.mock.script('updateRecord', [MockThrow(TransientNetworkError())]);
      await h.engine.syncNow();

      final r = await h.pocket.collection('widgets').get(id);
      expect(r!['name'], 'local-edit', reason: 'pull did not clobber the edit');
      final sr = await h.pocket.outbox.readSyncRow(h.pocket.db, 'widgets', id);
      expect(sr!.syncState, SyncState.dirty,
          reason: 'same-base remote delivery is a no-op');
    });

    test('converged local remote clears dirty', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: doc('', 'original'));
      await h.engine.syncNow();

      await h.pocket.collection('widgets').patch(id, {'qty': 42});
      // Another client pushed exactly the same content.
      h.mock.mutate(id, doc(id, 'original', 42));

      await h.engine.syncNow();
      final sr = await h.pocket.outbox.readSyncRow(h.pocket.db, 'widgets', id);
      expect(sr!.syncState, SyncState.clean,
          reason: 'converged content clears the dirty state');
      expect(await h.pocket.outbox.readOp(h.pocket.db, 'widgets', id), isNull);
    });

    test('conflict merge writes merged stays dirty', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: doc('', 'orig', 0));
      await h.engine.syncNow();

      // Local edit + concurrent remote edit on the same fields.
      await h.pocket.collection('widgets').patch(id, {'name': 'local'});
      h.mock.mutate(id, doc(id, 'remote', 5));

      // Block the push so the merged-but-dirty state is observable.
      h.mock.script('updateRecord', [MockThrow(TransientNetworkError())]);
      await h.engine.syncNow();

      final r = await h.pocket.collection('widgets').get(id);
      // Default remote-wins: conflicting 'name' -> remote; 'qty' (only remote
      // changed) -> remote; the merged row is written locally.
      expect(r!['name'], 'remote');
      expect(r['qty'], 5);
      final sr = await h.pocket.outbox.readSyncRow(h.pocket.db, 'widgets', id);
      expect(sr!.syncState, SyncState.dirty, reason: 'merge keeps it dirty');
      // Base advanced to the remote version.
      expect(sr.baseUpdated, isNotNull);
    });

    test('invalid record quarantined without stalling store', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      h.mock.seed(store: 'widgets', data: doc('', 'ok1'));
      final bad = h.mock.seed(store: 'widgets', data: {'qty': 1}); // no name
      h.mock.seed(store: 'widgets', data: doc('', 'ok2'));

      await h.engine.syncNow();

      expect(await h.pocket.collection('widgets').query().count(), 2,
          reason: 'the rest of the store still applied');
      final dead = await h.pocket.db.query('lp_dead_letter',
          where: 'kind = ?', whereArgs: ['map_failure']);
      expect(dead, hasLength(1));
      expect(dead.single['record_id'], bad);
      final sr = await h.pocket.outbox.readSyncRow(h.pocket.db, 'widgets', bad);
      expect(sr!.syncState, SyncState.quarantine);
    });
  });
}
