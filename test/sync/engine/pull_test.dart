import 'package:localpocket/src/kernel/ids.dart';
import 'package:localpocket/src/kernel/local_pocket.dart';
import 'package:localpocket/src/kernel/schema.dart';
import 'package:localpocket/src/kernel/sync/merge.dart';
import 'package:localpocket/src/kernel/sync/status.dart';
import 'package:localpocket/src/kernel/sync/sync_backend.dart';
import 'package:localpocket/src/kernel/sync/sync_tables.dart';
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

  Future<SyncRowState?> sr(LocalPocket pocket, String id) =>
      pocket.outbox.readSyncRow(pocket.db, 'widgets', id);

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

    test('page-limit exhaustion auto-continues until the store drains',
        () async {
      final h = await EngineHarness.create(
          config: testConfig(maxPage: 10, maxPagesPerPass: 3));
      addTearDown(h.close);
      for (var i = 0; i < 100; i++) {
        h.mock.seed(store: 'widgets', data: doc('', 'n$i', i));
      }

      final first = await h.engine.syncNow();
      expect(first.pulled['widgets'], 30,
          reason: 'a single pass stays bounded to 3 pages of 10');

      // Auto-continuation drains the rest without further manual cycles.
      var count = await h.pocket.collection('widgets').query().count();
      var waits = 0;
      while (count < 100 && waits < 50) {
        await Future<void>.delayed(const Duration(milliseconds: 5));
        count = await h.pocket.collection('widgets').query().count();
        waits++;
      }
      expect(count, 100,
          reason: 'the chained continuation cycles drain the store');

      // Once drained, no further pages are pulled.
      final settled = await h.engine.syncNow();
      expect(settled.pulled['widgets'], 0, reason: 'nothing left to pull');
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

  group('remote/store identity validation', () {
    test('foreign-store record is quarantined, never written to another table',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final good = h.mock.seed(store: 'widgets', data: doc('', 'good'));
      final foreignId = generateRecordId();
      h.mock.script('listChanges', [
        MockReturn([
          h.mock.records[good]!.toRemote(),
          RemoteRecord(
              id: foreignId,
              store: 'owners',
              updated: '2026-01-01 00:00:00.001Z',
              data: {'name': 'foreign'}),
        ]),
      ]);

      await h.engine.syncNow();

      expect(await h.pocket.collection('widgets').get(foreignId), isNull,
          reason: 'never routed into the widgets table');
      expect(await h.pocket.collection('widgets').get(good), isNotNull,
          reason: 'valid record still applied');
      final sr =
          await h.pocket.outbox.readSyncRow(h.pocket.db, 'widgets', foreignId);
      expect(sr!.syncState, SyncState.quarantine);
      final dl = await h.pocket.db.query('lp_dead_letter',
          where: 'kind = ?', whereArgs: ['map_failure']);
      expect(dl.any((r) => r['record_id'] == foreignId), isTrue);
      expect(
          (dl.firstWhere((r) => r['record_id'] == foreignId)['error'] as String)
              .contains('does not match requested store'),
          isTrue,
          reason: 'the security contract names the mismatch');
    });

    test('invalid remote id is quarantined, never inserted', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final good = h.mock.seed(store: 'widgets', data: doc('', 'good'));
      const badId = 'BAD-ID!!';
      h.mock.script('listChanges', [
        MockReturn([
          h.mock.records[good]!.toRemote(),
          RemoteRecord(
              id: badId,
              store: 'widgets',
              updated: '2026-01-01 00:00:00.001Z',
              data: {'name': 'x'}),
        ]),
      ]);

      await h.engine.syncNow();

      expect(await h.pocket.collection('widgets').get(badId), isNull,
          reason: 'no malformed row in the domain table');
      final dl = await h.pocket.db.query('lp_dead_letter',
          where: 'kind = ?', whereArgs: ['map_failure']);
      expect(dl.any((r) => r['record_id'] == badId), isTrue);
      final sr =
          await h.pocket.outbox.readSyncRow(h.pocket.db, 'widgets', badId);
      expect(sr!.syncState, SyncState.quarantine);
    });

    test('malformed imgs filenames are observed without crashing', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: doc('', 'w'));
      h.mock.script('listChanges', [
        MockReturn([
          RemoteRecord(
              id: id,
              store: 'widgets',
              updated: '2026-01-01 00:00:00.001Z',
              data: {'name': 'w'},
              imgs: ['weird name.png', '..%2F..traversal', 'ünïcödé.bin']),
        ]),
      ]);

      await h.engine.syncNow();

      final refs = await h.pocket.db
          .query('lp_file_refs', where: 'record_id = ?', whereArgs: [id]);
      expect(refs.map((r) => r['remote_name']).toSet(), {
        'weird name.png',
        '..%2F..traversal',
        'ünïcödé.bin',
      });
      expect(await h.pocket.collection('widgets').get(id), isNotNull);
    });
  });

  group('pull page ordering and cursor boundaries', () {
    test('unsorted page applies completely and advances to the max tuple',
        () async {
      final h = await EngineHarness.create(config: testConfig(maxPage: 100));
      addTearDown(h.close);
      final recs = <RemoteRecord>[];
      for (var i = 0; i < 6; i++) {
        recs.add(RemoteRecord(
            id: generateRecordId(),
            store: 'widgets',
            updated: '2026-01-0${i + 1} 00:00:00.000Z',
            data: {'name': 'n$i', 'qty': i}));
      }
      // Deliberately shuffled page.
      h.mock.script('listChanges', [
        MockReturn([recs[5], recs[0], recs[3], recs[2], recs[4], recs[1]]),
      ]);

      await h.engine.syncNow();

      expect(await h.pocket.collection('widgets').query().count(), 6,
          reason: 'no record skipped by an unsorted page');
      final cursor = await h.engine.syncStore.readCursor('widgets');
      expect(cursor!.updated, '2026-01-06 00:00:00.000Z',
          reason: 'cursor advanced to the true maximum tuple');

      final report = await h.engine.syncNow();
      expect(report.pulled['widgets'], 0, reason: 'nothing new after');
    });

    test('reordered multi-page pull is complete', () async {
      final h = await EngineHarness.create(config: testConfig(maxPage: 3));
      addTearDown(h.close);
      final recs = <RemoteRecord>[];
      for (var i = 0; i < 6; i++) {
        recs.add(RemoteRecord(
            id: generateRecordId(),
            store: 'widgets',
            updated: '2026-01-0${i + 1} 00:00:00.000Z',
            data: {'name': 'n$i'}));
      }
      h.mock.script('listChanges', [
        MockReturn([recs[0], recs[1], recs[2]]),
        MockReturn([recs[5], recs[4], recs[3]]),
      ]);

      await h.engine.syncNow();

      expect(await h.pocket.collection('widgets').query().count(), 6);
      final cursor = await h.engine.syncStore.readCursor('widgets');
      expect(cursor!.updated, '2026-01-06 00:00:00.000Z');
    });

    test('pages entirely inside the rewind window never regress the cursor',
        () async {
      final h = await EngineHarness.create(
          config: testConfig(maxPage: 2, rewind: const Duration(minutes: 5)));
      addTearDown(h.close);
      for (var i = 0; i < 4; i++) {
        h.mock.seed(
            store: 'widgets',
            data: doc('', 'n$i'),
            updated: '2026-01-01 00:00:0$i.000Z');
      }
      await h.engine.syncNow();
      final cursor = await h.engine.syncStore.readCursor('widgets');
      expect(cursor!.updated, '2026-01-01 00:00:03.000Z');

      // An old page (older than the cursor) is redelivered.
      final old = RemoteRecord(
          id: generateRecordId(),
          store: 'widgets',
          updated: '2026-01-01 00:00:00.000Z',
          data: {'name': 'old'});
      h.mock.script('listChanges', [
        MockReturn([old])
      ]);
      await h.engine.syncNow();

      final after = await h.engine.syncStore.readCursor('widgets');
      expect(after!.updated, cursor.updated,
          reason: 'a page inside the rewind window never regresses the cursor');
    });

    test('empty page after a partial page terminates the pull', () async {
      final h = await EngineHarness.create(config: testConfig(maxPage: 2));
      addTearDown(h.close);
      final r = RemoteRecord(
          id: generateRecordId(),
          store: 'widgets',
          updated: '2026-01-01 00:00:01.000Z',
          data: {'name': 'only'});
      h.mock.script('listChanges', [
        MockReturn([r]),
        MockReturn(const <RemoteRecord>[]),
      ]);
      final report = await h.engine.syncNow();
      expect(report.pulled['widgets'], 1);
      expect(await h.pocket.collection('widgets').get(r.id), isNotNull);
    });

    test('duplicate ids with differing payloads in one page: last wins',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final a = generateRecordId();
      final b = generateRecordId();
      h.mock.script('listChanges', [
        MockReturn([
          RemoteRecord(
              id: a,
              store: 'widgets',
              updated: '2026-01-01 00:00:00.000Z',
              data: {'name': 'v1', 'qty': 1}),
          RemoteRecord(
              id: a,
              store: 'widgets',
              updated: '2026-01-01 00:00:00.001Z',
              data: {'name': 'v2', 'qty': 2}),
          RemoteRecord(
              id: b,
              store: 'widgets',
              updated: '2026-01-01 00:00:00.002Z',
              data: {'name': 'b'}),
        ]),
      ]);

      await h.engine.syncNow();

      final docA = await h.pocket.collection('widgets').get(a);
      expect(docA!['name'], 'v2', reason: 'second delivery wins');
      expect(docA['qty'], 2);
      expect(await h.pocket.collection('widgets').get(b), isNotNull);
    });

    test('backend page larger than maxPage is fully applied', () async {
      final h = await EngineHarness.create(config: testConfig(maxPage: 3));
      addTearDown(h.close);
      final recs = <RemoteRecord>[
        for (var i = 0; i < 8; i++)
          RemoteRecord(
              id: generateRecordId(),
              store: 'widgets',
              updated: '2026-01-0${i + 1} 00:00:00.000Z',
              data: {'name': 'n$i'}),
      ];
      h.mock.script('listChanges', [MockReturn(recs)]);

      await h.engine.syncNow();
      expect(await h.pocket.collection('widgets').query().count(), 8,
          reason: 'an oversized page is accepted and fully applied');
    });
  });

  group('fast-path edge and failure behavior', () {
    RemoteRecord remoteRec(String id,
            {String store = 'widgets',
            String updated = '2026-02-01 00:00:00.000Z',
            Map<String, Object?> data = const {'name': 'x'}}) =>
        RemoteRecord(id: id, store: store, updated: updated, data: data);

    test('unknown record fast-path applies but never advances the cursor',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = generateRecordId();

      final applied = await h.engine.puller.fastPathApply(remoteRec(id));
      expect(applied, isTrue, reason: 'create event inserts directly');

      expect(await h.pocket.collection('widgets').get(id), isNotNull);
      final cursor = await h.engine.syncStore.readCursor('widgets');
      expect(cursor, isNull, reason: 'fast-path never advances the cursor');
    });

    test('clean and newer fast-path applies', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: doc('', 'v1'));
      await h.engine.syncNow();
      final row = await h.pocket.outbox.readSyncRow(h.pocket.db, 'widgets', id);
      final updated = row!.remoteUpdated!;

      h.mock.mutate(id, doc(id, 'v2'));
      final newer = h.mock.records[id]!.toRemote();
      final applied = await h.engine.puller.fastPathApply(newer);
      expect(applied, isTrue, reason: 'clean + newer event applies');
      expect((await h.pocket.collection('widgets').get(id))!['name'], 'v2');
      expect(updated, isNotEmpty);
    });

    test('stale fast-path event is ignored', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: doc('', 'v1'));
      await h.engine.syncNow();
      final row = await h.pocket.outbox.readSyncRow(h.pocket.db, 'widgets', id);
      final currentUpdated = row!.remoteUpdated!;

      // An event with an OLDER updated timestamp must not clobber.
      final stale = remoteRec(id,
          updated: '2026-01-01 00:00:00.000Z', data: doc(id, 'stale'));
      final applied = await h.engine.puller.fastPathApply(stale);
      expect(applied, isFalse, reason: 'stale event ignored');
      expect((await h.pocket.collection('widgets').get(id))!['name'], 'v1');
      expect(currentUpdated, isNotEmpty);
    });

    test('dirty, conflict, error and quarantine rows are never fast-applied',
        () async {
      for (final state in [
        SyncState.dirty,
        SyncState.inFlight,
        SyncState.conflict,
        SyncState.error,
        SyncState.quarantine,
      ]) {
        final h = await EngineHarness.create();
        addTearDown(h.close);
        final id = h.mock.seed(store: 'widgets', data: doc('', 'v1'));
        await h.engine.syncNow();
        await h.pocket.collection('widgets').patch(id, {'name': 'local-edit'});
        await h.pocket.outbox.setSyncState('widgets', id, state);

        final event = h.mock.records[id]!.toRemote();
        final applied = await h.engine.puller.fastPathApply(event);
        expect(applied, isFalse,
            reason: '${state.name} rows are left for the pull to merge');
        expect((await h.pocket.collection('widgets').get(id))!['name'],
            'local-edit',
            reason: 'local state untouched');
        expect(
            (await h.pocket.outbox.readSyncRow(h.pocket.db, 'widgets', id))!
                .syncState,
            state);
      }
    });

    test('wrong-store hints are ignored: no fast-path, no pull, no crash',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);

      // A record claiming a store that does not exist on this pocket. The
      // engine drops it at the door: a fast-path attempt or a scheduled pull
      // for an unregistered store would throw a non-SyncError StateError
      // (pocket.requireTable) that aborts the whole cycle.
      h.engine.handleHint(BackendHint('ghost-store', BackendHintKind.changed,
          remoteRec(generateRecordId(), store: 'ghost-store')));
      // A record-less hint for the same wrong store is dropped too.
      h.engine.handleHint(
          const BackendHint('ghost-store', BackendHintKind.deleted));
      await Future<void>.delayed(Duration.zero);
      expect(h.engine.debugActions, isNot(contains('fast:ghost-store')),
          reason: 'a wrong-store changed hint never fast-paths');
      expect(h.engine.debugActions, isNot(contains('pull:ghost-store')),
          reason: 'a wrong-store hint never schedules a pull cycle');
      expect(h.engine.state, isNot(SyncEngineState.closed));

      // The engine stays fully usable: a manual cycle never surfaces the
      // ghost store and never crashes.
      final report = await h.engine.syncNow();
      expect(report.hadError, isFalse);
    });

    test('hints after stop are ignored', () async {
      final h = await EngineHarness.create();
      final id = h.mock.seed(store: 'widgets', data: doc('', 'v1'));
      await h.engine.syncNow();
      await h.engine.stop();

      // No crash; nothing is applied after stop.
      h.engine.handleHint(BackendHint('widgets', BackendHintKind.changed,
          remoteRec(id, data: doc(id, 'after-stop'))));
      await Future<void>.delayed(Duration.zero);
      expect((await h.pocket.collection('widgets').get(id))!['name'], 'v1');
      await h.pocket.close();
    });

    test('fast-path falls back to a scheduled pull when not applied', () async {
      final h = await EngineHarness.create(
          config: testConfig(pushDebounce: const Duration(milliseconds: 20)));
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: doc('', 'v1'));
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'local-edit'});
      // Dirty row: the fast path cannot apply; a debounced pull is scheduled.
      h.engine.handleHint(BackendHint(
          'widgets', BackendHintKind.changed, h.mock.records[id]!.toRemote()));
      await Future<void>.delayed(const Duration(milliseconds: 80));

      expect(h.engine.debugActions, contains('fast:widgets'));
      // The debounced pull ran and left the local edit intact.
      expect((await h.pocket.collection('widgets').get(id))!['name'],
          'local-edit');
    });
  });

  group('pull failure transaction boundaries', () {
    test('failed pull defers the push until the next clean pull', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      // A local edit awaiting push.
      final id = generateRecordId();
      await h.pocket.collection('widgets').put(doc(id, 'mine'));
      // Remote data that will only be visible after the failed pull clears.
      h.mock.seed(store: 'widgets', data: doc('', 'remote'));

      // First cycle: the pull fails transiently -> the push must be deferred
      // (the local edit is NOT pushed against stale remote state).
      h.mock.script('listChanges', [MockThrow(TransientNetworkError())]);
      final report = await h.engine.syncNow();
      expect(report.hadError, isTrue);
      expect((await sr(h.pocket, id))!.syncState, SyncState.dirty,
          reason: 'push deferred when the pull failed');
      expect(h.mock.createCalls, 0,
          reason: 'nothing pushed against stale remote state');

      // Next cycle: pull succeeds; the local edit is pushed clean.
      h.mock.script('listChanges', const []);
      final report2 = await h.engine.syncNow();
      expect(report2.hadError, isFalse);
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean,
          reason: 'the deferred push runs once the pull succeeds');
      expect(h.mock.createCalls, 1);
    });

    test('transient list failure applies nothing and retries cleanly',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      for (var i = 0; i < 5; i++) {
        h.mock.seed(store: 'widgets', data: doc('', 'n$i', i));
      }
      h.mock.script('listChanges', [MockThrow(TransientNetworkError())]);
      final report = await h.engine.syncNow();
      expect(report.hadError, isTrue);

      expect(await h.pocket.collection('widgets').query().count(), 0,
          reason: 'no partial page');
      expect(await h.engine.syncStore.readCursor('widgets'), isNull,
          reason: 'cursor never advanced on a failed page');

      // Retry succeeds idempotently.
      final report2 = await h.engine.syncNow();
      expect(report2.hadError, isFalse);
      expect(await h.pocket.collection('widgets').query().count(), 5);
    });

    test('crash after the last record rolls back the whole page', () async {
      final hooks = TestHooks();
      final h = await EngineHarness.create(testHooks: hooks);
      addTearDown(h.close);
      final ids = <String>[];
      for (var i = 0; i < 4; i++) {
        ids.add(h.mock.seed(store: 'widgets', data: doc('', 'n$i')));
      }
      hooks.applyRemoteCrashPoint = (store, id) {
        if (id == ids.last) throw StateError('crash at last record');
      };

      await expectLater(h.engine.syncNow(), throwsA(isA<StateError>()));
      expect(await h.pocket.collection('widgets').query().count(), 0,
          reason: 'even already-applied page records rolled back');
      expect(await h.engine.syncStore.readCursor('widgets'), isNull);
    });

    test('structurally invalid payload is quarantined, page not stalled',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final ok = h.mock.seed(store: 'widgets', data: doc('', 'ok'));
      final poison = h.mock.seed(store: 'widgets', data: doc('', 'poison'));
      // A non-JSON-serializable extra value breaks normalization with a
      // non-MapFailure error — it must quarantine, not stall the store.
      h.mock.script('listChanges', [
        MockReturn([
          h.mock.records[ok]!.toRemote(),
          RemoteRecord(
              id: poison,
              store: 'widgets',
              updated: '2026-01-01 00:00:00.001Z',
              data: {'name': 'p', 'bad': DateTime.utc(2026)}),
        ]),
      ]);

      final report = await h.engine.syncNow();

      expect(await h.pocket.collection('widgets').get(ok), isNotNull,
          reason: 'valid sibling still applied');
      expect(await h.pocket.collection('widgets').get(poison), isNull,
          reason: 'poison record never reached the domain');
      expect(report.pulled['widgets'], 1,
          reason: 'the quarantined record is not counted as applied');
      final dl = await h.pocket.db.query('lp_dead_letter',
          where: 'kind = ?', whereArgs: ['map_failure']);
      expect(dl.any((r) => r['record_id'] == poison), isTrue,
          reason: 'quarantined as a map failure');
    });

    test('list failure after a committed page does not roll back the page',
        () async {
      final h = await EngineHarness.create(config: testConfig(maxPage: 3));
      addTearDown(h.close);
      final seeded = <String>[];
      for (var i = 0; i < 6; i++) {
        seeded.add(h.mock.seed(
            store: 'widgets',
            data: doc('', 'n$i'),
            updated: '2026-01-0${i + 1} 00:00:00.000Z'));
      }
      // Page 1 delivers 3 records, page 2 fails transiently.
      h.mock.script('listChanges', [
        MockReturn([
          h.mock.records[seeded[0]]!.toRemote(),
          h.mock.records[seeded[1]]!.toRemote(),
          h.mock.records[seeded[2]]!.toRemote(),
        ]),
        MockThrow(TransientNetworkError()),
      ]);
      final report = await h.engine.syncNow();
      expect(report.hadError, isTrue);
      expect(await h.pocket.collection('widgets').query().count(), 3,
          reason: 'the committed page survives the later failure');
      final cursor = await h.engine.syncStore.readCursor('widgets');
      expect(cursor!.updated, '2026-01-03 00:00:00.000Z',
          reason: 'cursor advanced only to the committed page');

      // The remaining records are pulled on retry.
      await h.engine.syncNow();
      expect(await h.pocket.collection('widgets').query().count(), 6);
    });
  });

  group('pull accounting', () {
    test('PullReport counts quarantined records separately', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final ok = h.mock.seed(store: 'widgets', data: doc('', 'ok'));
      // A record whose `store` does not match the requested store: quarantined.
      final foreign = RemoteRecord(
          id: generateRecordId(),
          store: 'notes',
          updated: '2026-01-01 00:00:00.001Z',
          data: {'name': 'foreign'});
      // A record with an invalid local id: quarantined.
      final badId = RemoteRecord(
          id: 'INVALID!!!',
          store: 'widgets',
          updated: '2026-01-01 00:00:00.002Z',
          data: {'name': 'bad-id'});
      h.mock.script('listChanges', [
        MockReturn([
          h.mock.records[ok]!.toRemote(),
          foreign,
          badId,
        ]),
      ]);

      final report = await h.engine.puller.pullStore('widgets');
      expect(report.applied, 1,
          reason: 'only the valid record counts as applied');
      expect(report.quarantined, 2,
          reason: 'foreign-store and invalid-id records are quarantined');
      expect(await h.pocket.collection('widgets').query().count(), 1);
    });

    test('conflict escalation is counted as conflicts, not applied', () async {
      final schema = CollectionSchema<Object?>(
        name: 'widgets',
        version: 1,
        fields: [Field.text('name', required: true), Field.int('qty')],
        conflictPolicy:
            ConflictPolicy(collectionResolver: CustomResolver((ctx) => null)),
      );
      final h = await EngineHarness.create(stores: [schema]);
      addTearDown(h.close);
      final id = generateRecordId();
      await h.pocket.collection('widgets').put(doc(id, 'local'));
      // Remote delivers a changed payload for the same id -> merge escalates.
      h.mock.script('listChanges', [
        MockReturn([
          RemoteRecord(
              id: id,
              store: 'widgets',
              updated: h.mock.nextUpdated(),
              data: {'name': 'remote'}),
        ]),
      ]);

      final report = await h.engine.puller.pullStore('widgets');
      expect(report.conflicts, 1,
          reason: 'the escalated merge is counted as a conflict');
      expect(report.applied, 0, reason: 'a conflict is not an applied record');
      final open = await h.pocket.conflicts.listOpen();
      expect(open.map((c) => c.recordId), contains(id),
          reason: 'the conflict row is open');
    });
  });
}
