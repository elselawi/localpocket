import 'package:localpocket/src/kernel/change_bus.dart';
import 'package:localpocket/src/kernel/ids.dart';
import 'package:localpocket/src/kernel/local_pocket.dart';
import 'package:localpocket/src/kernel/sync/sync_backend.dart';
import 'package:localpocket/src/kernel/sync/sync_tables.dart';
import 'package:test/test.dart';

import 'engine_helpers.dart';
import 'mock_backend.dart';

/// Fast-path (realtime hint) and visibility-semantics contract pins.
///
/// Pins the CURRENT engine behaviour:
/// - a `changed` hint carrying a record applies only on a clean (or unknown)
///   row; any non-clean row is left for the pull; `deleted` hints never write
///   the domain (they are doorbells routed to a pull);
/// - fast-path staleness on a clean row: only `remote.updated >
///   sr.remoteUpdated` applies;
/// - a targeted GET 404 (sweep `fetchBatch`) hides with `AccessState.hidden`
///   and never destroys local work — while a push-side 404 dead-letters
///   without hiding;
/// - the hidden -> re-listed -> sweep-unhide recovery cycle end-to-end;
/// - hidden rows carrying ANY local work are never purged, only clean rows
///   past `purgeHiddenAfter` are.
void main() {
  String bucketAId() => 'a${generateRecordId().substring(1)}';

  Future<int> hiddenColumn(LocalPocket pocket, String id) async {
    final rows = await pocket.db
        .rawQuery('SELECT hidden FROM widgets WHERE id = ?', [id]);
    return rows.isEmpty ? -1 : rows.first['hidden'] as int;
  }

  Future<SyncRowState?> sr(LocalPocket pocket, String id) =>
      pocket.outbox.readSyncRow(pocket.db, 'widgets', id);

  RemoteRecord event(String store, String id, String updated,
          {String name = 'remote-write'}) =>
      RemoteRecord(
          id: id, store: store, updated: updated, data: {'name': name});

  group('fast-path event kinds', () {
    test(
        'a changed hint with a record is never fast-applied on a non-clean '
        'row (deferred to the pull)', () async {
      for (final state in [
        SyncState.dirty,
        SyncState.conflict,
        SyncState.error,
        SyncState.quarantine,
        SyncState.blocked,
      ]) {
        final h = await EngineHarness.create();
        addTearDown(h.close);
        final id = h.mock.seed(store: 'widgets', data: {'name': 'v1'});
        await h.engine.syncNow();
        // Genuine local work, then force the row into the target state.
        await h.pocket.collection('widgets').patch(id, {'name': 'local-edit'});
        await h.pocket.outbox.setSyncState('widgets', id, state);
        final pullsBefore = h.mock.listChangesCalls;

        // The event is strictly NEWER than the watermark, so on a clean row
        // it WOULD apply — only the non-clean state must block it.
        h.engine.handleHint(BackendHint(
          'widgets',
          BackendHintKind.changed,
          event('widgets', id, h.mock.nextUpdated()),
        ));
        await Future<void>.delayed(const Duration(milliseconds: 20));

        expect(h.engine.debugActions, contains('fast:widgets'),
            reason: '${state.name}: the fast path was attempted');
        expect((await h.pocket.collection('widgets').get(id))!['name'],
            'local-edit',
            reason: '${state.name}: the hint never wrote the domain row');
        expect((await sr(h.pocket, id))!.syncState, state,
            reason: '${state.name}: sync state untouched');
        expect(h.mock.listChangesCalls, pullsBefore,
            reason: '${state.name}: the deferred pull never ran from the '
                'hint itself');
      }
    });

    test('a changed hint with a record for an unknown row inserts it',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = generateRecordId();
      final pullsBefore = h.mock.listChangesCalls;

      h.engine.handleHint(BackendHint(
        'widgets',
        BackendHintKind.changed,
        event('widgets', id, h.mock.nextUpdated(), name: 'born'),
      ));
      await Future<void>.delayed(const Duration(milliseconds: 20));

      expect(h.engine.debugActions, contains('fast:widgets'));
      expect((await h.pocket.collection('widgets').get(id))!['name'], 'born',
          reason: 'an unknown-row create event inserts directly');
      expect(await h.engine.syncStore.readCursor('widgets'), isNull,
          reason: 'the fast path never advances the pull cursor');
      expect(h.mock.listChangesCalls, pullsBefore,
          reason: 'an applied insert schedules no pull');
    });

    test('a deleted hint never writes the domain (it routes to a pull)',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1'});
      await h.engine.syncNow();
      final pullsBefore = h.mock.listChangesCalls;

      // Even WITH an embedded record, a deleted hint is a doorbell — it is
      // never applied directly and never marks hidden by itself.
      h.engine.handleHint(BackendHint(
        'widgets',
        BackendHintKind.deleted,
        event('widgets', id, h.mock.nextUpdated(), name: 'ignored'),
      ));
      await Future<void>.delayed(const Duration(milliseconds: 20));

      expect(h.engine.debugActions, contains('pull:widgets'),
          reason: 'a deleted hint is routed to a pull');
      expect(h.engine.debugActions, isNot(contains('fast:widgets')));
      expect((await h.pocket.collection('widgets').get(id))!['name'], 'v1',
          reason: 'no domain write from a deleted hint');
      expect((await sr(h.pocket, id))!.accessState, AccessState.visible);
      expect(await hiddenColumn(h.pocket, id), 0,
          reason: 'a deleted hint never hides by itself either');
      expect(h.mock.listChangesCalls, pullsBefore,
          reason: 'the pull is deferred by the debounce, not executed by the '
              'hint');
    });
  });

  group('fast-path staleness matrix on a clean row', () {
    test('only a strictly newer event applies (older and equal are stale)',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1'});
      await h.engine.syncNow();
      final v1 = (await sr(h.pocket, id))!.remoteUpdated!;
      final pullsBefore = h.mock.listChangesCalls;

      // remote.updated < watermark -> stale, never applied.
      h.engine.handleHint(BackendHint(
        'widgets',
        BackendHintKind.changed,
        event('widgets', id, '2020-01-01 00:00:00.000Z', name: 'older'),
      ));
      await Future<void>.delayed(const Duration(milliseconds: 10));
      expect((await h.pocket.collection('widgets').get(id))!['name'], 'v1',
          reason: 'an older event never overwrites a clean row');

      // remote.updated == watermark -> stale (rewind-window re-delivery).
      h.engine.handleHint(BackendHint(
        'widgets',
        BackendHintKind.changed,
        event('widgets', id, v1, name: 'equal'),
      ));
      await Future<void>.delayed(const Duration(milliseconds: 10));
      expect((await h.pocket.collection('widgets').get(id))!['name'], 'v1',
          reason: 'an equal-watermark event never overwrites a clean row');

      // remote.updated > watermark -> the only tuple that applies.
      final v2 = h.mock.nextUpdated();
      h.engine.handleHint(BackendHint(
        'widgets',
        BackendHintKind.changed,
        event('widgets', id, v2, name: 'v2'),
      ));
      await Future<void>.delayed(const Duration(milliseconds: 10));
      expect((await h.pocket.collection('widgets').get(id))!['name'], 'v2',
          reason: 'only a strictly newer event applies');
      expect((await sr(h.pocket, id))!.remoteUpdated, v2);

      expect(h.engine.debugActions, contains('fast:widgets'));
      expect(h.mock.listChangesCalls, pullsBefore,
          reason: 'rejected events defer a pull that never ran here');
    });
  });

  group('targeted 404 hides, never deletes', () {
    test(
        'a sweep fetchBatch 404 hides with AccessState.hidden and keeps all '
        'local work', () async {
      final h = await EngineHarness.create(
          config: testConfig(sweepInterval: Duration.zero));
      addTearDown(h.close);
      final id =
          h.mock.seed(store: 'widgets', data: {'name': 'v1'}, id: bucketAId());
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'local-edit'});
      // The remote moves so the sweep targets a fetch, which then 404s (a
      // view rule hides the record).
      h.mock.mutate(id, {'id': id, 'name': 'v2'});
      h.mock.script('getRecord', [MockThrow(NotFoundError())]);
      await h.engine.sweeper.sweepBucket('widgets', 0);

      final row = await sr(h.pocket, id);
      expect(row!.accessState, AccessState.hidden,
          reason: 'the AccessState is explicitly hidden');
      expect(row.syncState, SyncState.dirty,
          reason: 'local work (the pending edit) is retained');
      expect(await hiddenColumn(h.pocket, id), 1);
      final doc = await h.pocket.collection('widgets').get(id);
      expect(doc, isNotNull, reason: 'the row is never deleted');
      expect(doc!['name'], 'local-edit',
          reason: 'the local edit survives the 404 hide');
      expect(
          await h.pocket.outbox.readOp(h.pocket.db, 'widgets', id), isNotNull,
          reason: 'the outbox op survives the 404 hide');
    });

    test('a push-side getRecord 404 escalates a conflict without hiding',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1'});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'edited'});
      h.mock.script('getRecord', [MockThrow(NotFoundError())]);

      final report = await h.engine.syncNow();
      expect(report.deadLettered, 0);
      expect(
          await h.pocket.db
              .query('lp_dead_letter', where: 'record_id = ?', whereArgs: [id]),
          isEmpty,
          reason: 'a vanished push target escalates, never dead-letters');

      final row = await sr(h.pocket, id);
      expect(row!.accessState, AccessState.visible,
          reason: 'unlike the sweep 404, a push 404 never hides the row');
      expect(row.syncState, SyncState.conflict);
      expect(await hiddenColumn(h.pocket, id), 0);
      expect((await h.pocket.collection('widgets').get(id))!['name'], 'edited',
          reason: 'the local edit is preserved');
    });
  });

  group('hidden rows recover visibility', () {
    test(
        'hidden -> re-listed -> sweep unhides, publishes a ChangeSet, and '
        'refreshes to clean', () async {
      final h = await EngineHarness.create(
          config: testConfig(sweepInterval: Duration.zero));
      addTearDown(h.close);
      final id =
          h.mock.seed(store: 'widgets', data: {'name': 'v1'}, id: bucketAId());
      await h.engine.syncNow();

      // Server-side loss -> the sweep hides (never deletes).
      h.mock.delete(id);
      await h.engine.sweeper.sweepBucket('widgets', 0);
      expect((await sr(h.pocket, id))!.accessState, AccessState.hidden);
      expect(await hiddenColumn(h.pocket, id), 1);
      expect(await h.pocket.collection('widgets').query().count(), 0,
          reason: 'hidden rows leave the default scope');

      final changes = <ChangeSet>[];
      final sub = h.pocket.changeBus.stream.listen(changes.add);
      addTearDown(sub.cancel);

      // The remote re-lists the record with fresh content.
      h.mock.seed(store: 'widgets', data: {'name': 'v2'}, id: id);
      await h.engine.sweeper.sweepBucket('widgets', 0);

      expect((await sr(h.pocket, id))!.accessState, AccessState.visible,
          reason: 'the sweep unhides the re-listed row');
      expect(await hiddenColumn(h.pocket, id), 0);
      expect((await h.pocket.collection('widgets').get(id))!['name'], 'v2',
          reason: 'the row is refreshed from the remote');
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
      expect(await h.pocket.collection('widgets').query().count(), 1,
          reason: 'the row re-enters the default scope');

      await Future<void>.delayed(Duration.zero);
      expect(changes.any((c) => c.store == 'widgets' && c.ids.contains(id)),
          isTrue,
          reason: 'the hidden -> visible transition published a ChangeSet');
    });
  });

  group('inaccessible records with local work are never purged', () {
    test(
        'hidden rows in every non-clean state survive purge sweeps; only '
        'clean rows are purge candidates', () async {
      for (final state in [
        SyncState.dirty,
        SyncState.conflict,
        SyncState.error,
        SyncState.quarantine,
        SyncState.blocked,
      ]) {
        var nowMs = 1000000000;
        final h = await EngineHarness.create(
          config: testConfig(
              sweepInterval: Duration.zero,
              purgeHiddenAfter: const Duration(days: 30),
              now: () => nowMs),
        );
        addTearDown(h.close);
        final id = h.mock.seed(
            store: 'widgets', data: {'name': state.name}, id: bucketAId());
        await h.engine.syncNow();
        // Real local work, then force the non-clean state.
        await h.pocket
            .collection('widgets')
            .patch(id, {'name': 'local-${state.name}'});
        await h.pocket.outbox.setSyncState('widgets', id, state);
        // The remote stops listing it -> the sweep hides it (never purges).
        h.mock.delete(id);
        await h.engine.sweeper.sweepBucket('widgets', 0);
        expect((await sr(h.pocket, id))!.accessState, AccessState.hidden);

        // Age the retention clock far past the purge cutoff.
        await h.pocket.db.execute(
            'UPDATE lp_sync_row SET last_seen_at = 1 WHERE record_id = ?',
            [id]);
        nowMs += const Duration(days: 400).inMilliseconds;
        await h.engine.sweeper.sweepBucket('widgets', 0);

        final doc = await h.pocket.collection('widgets').get(id);
        expect(doc, isNotNull,
            reason: 'hidden ${state.name} row must never be silently '
                'destroyed');
        expect(doc!['name'], 'local-${state.name}',
            reason: 'the local work is intact');
        final row = await sr(h.pocket, id);
        expect(row!.syncState, state,
            reason: '${state.name} state is preserved');
        expect(row.accessState, AccessState.hidden);
      }
    });
  });
}
