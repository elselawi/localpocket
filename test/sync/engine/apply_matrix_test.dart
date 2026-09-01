import 'package:localpocket/src/internal/raw_surface.dart';
import 'package:test/test.dart';

import 'engine_helpers.dart';
import 'mock_backend.dart';

/// remote apply state matrix.
///
/// Every existing sync state receiving a remote record: same-base no-op,
/// clean fast-forward, merge, conflict openness, error/quarantine preservation,
/// hidden unhide, and missing-sync-row recovery. Domain, sync, outbox,
/// conflict, hidden and notification state are asserted per transition.
void main() {
  Map<String, Object?> doc(String id, String name, [int qty = 0]) => {
        if (id.isNotEmpty) 'id': id,
        'name': name,
        'qty': qty,
      };

  group('remote apply state matrix', () {
    Future<String> seedClean(EngineHarness h, [String name = 'orig']) async {
      final id = h.mock.seed(store: 'widgets', data: doc('', name));
      await h.engine.syncNow();
      expect(
          (await h.pocket.outbox.readSyncRow(h.pocket.db, 'widgets', id))!
              .syncState,
          SyncState.clean);
      return id;
    }

    Future<SyncRowState?> sr(EngineHarness h, String id) =>
        h.pocket.outbox.readSyncRow(h.pocket.db, 'widgets', id);

    test('clean row same-base redelivery is a no-op', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = await seedClean(h);
      final before = await h.pocket.collection('widgets').get(id);

      // Re-deliver the exact same remote (same updated).
      await h.engine.syncNow();

      final after = await h.pocket.collection('widgets').get(id);
      expect(after!['name'], before!['name']);
      expect((await sr(h, id))!.syncState, SyncState.clean);
    });

    test('clean row fast-forward applies and notifies', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = await seedClean(h, 'v1');

      final changes = <ChangeSet>[];
      final sub = h.pocket.changeBus.stream.listen(changes.add);
      addTearDown(sub.cancel);

      h.mock.mutate(id, doc(id, 'v2', 9));
      await h.engine.syncNow();

      final r = await h.pocket.collection('widgets').get(id);
      expect(r!['name'], 'v2');
      expect(r['qty'], 9);
      expect((await sr(h, id))!.syncState, SyncState.clean);
      await Future<void>.delayed(Duration.zero);
      expect(changes.any((c) => c.store == 'widgets' && c.ids.contains(id)),
          isTrue,
          reason: 'fast-forward publishes a ChangeSet');
    });

    test('in-flight rows merge like dirty rows', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = await seedClean(h);
      await h.pocket.collection('widgets').patch(id, {'name': 'local'});
      await h.pocket.outbox.setSyncState('widgets', id, SyncState.inFlight);
      h.mock.mutate(id, doc(id, 'remote', 5));
      h.mock.script('updateRecord', [MockThrow(TransientNetworkError())]);

      await h.engine.syncNow();

      final r = await h.pocket.collection('widgets').get(id);
      // Remote-wins on the overlapping field; merge is written locally.
      expect(r!['name'], 'remote');
      expect(r['qty'], 5);
      final row = await sr(h, id);
      expect(row!.baseUpdated, isNotNull, reason: 'base advanced');
    });

    test('conflict row stays open after a converged remote payload', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = await seedClean(h);
      // Local edit, then simulate a conflict needing review.
      await h.pocket.collection('widgets').patch(id, {'name': 'local-v2'});
      await h.pocket.outbox.setSyncState('widgets', id, SyncState.conflict);

      // Remote converges to exactly the local payload.
      h.mock.mutate(id, doc(id, 'local-v2', 0));
      await h.engine.syncNow();

      final row = await sr(h, id);
      expect(row!.syncState, SyncState.conflict,
          reason: 'a conflict is only resolved by explicit user action');
      expect(
          (await h.pocket.collection('widgets').get(id))!['name'], 'local-v2');
    });

    test('conflict row stays open after a changed remote payload', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = await seedClean(h);
      await h.pocket.collection('widgets').patch(id, {'name': 'local-v2'});
      await h.pocket.outbox.setSyncState('widgets', id, SyncState.conflict);

      h.mock.mutate(id, doc(id, 'another-remote', 42));
      await h.engine.syncNow();

      expect((await sr(h, id))!.syncState, SyncState.conflict,
          reason: 'remote changes never silently clear a conflict');
    });

    test('error and quarantine rows are preserved on remote delivery',
        () async {
      for (final state in [SyncState.error, SyncState.quarantine]) {
        final h = await EngineHarness.create();
        addTearDown(h.close);
        final id = await seedClean(h);
        await h.pocket.outbox.setSyncState('widgets', id, state);

        h.mock.mutate(id, doc(id, 'remote-change', 1));
        await h.engine.syncNow();

        expect((await sr(h, id))!.syncState, state,
            reason: '${state.name} rows are never silently rewritten');
        final r = await h.pocket.collection('widgets').get(id);
        expect(r!['name'], 'orig', reason: 'domain untouched');
      }
    });

    test('hidden row is unhidden and notified on redelivery', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = await seedClean(h);

      await h.pocket.db.execute(
          "UPDATE lp_sync_row SET access_state = 'hidden' WHERE record_id = ?",
          [id]);
      await h.pocket.db
          .execute('UPDATE widgets SET hidden = 1 WHERE id = ?', [id]);

      final changes = <ChangeSet>[];
      final sub = h.pocket.changeBus.stream.listen(changes.add);
      addTearDown(sub.cancel);

      // Targeted fetch of the still-existing record with the SAME timestamp
      // exercises _touchSeen, which unhides and publishes a ChangeSet.
      await h.engine.puller.fetchOne('widgets', id);

      final rows = await h.pocket.db
          .rawQuery('SELECT hidden FROM widgets WHERE id = ?', [id]);
      expect(rows.single['hidden'], 0, reason: 'unhidden');
      expect((await sr(h, id))!.accessState, AccessState.visible);
      await Future<void>.delayed(Duration.zero);
      expect(changes.any((c) => c.store == 'widgets' && c.ids.contains(id)),
          isTrue,
          reason: 'unhide publishes a ChangeSet');
    });

    test('missing sync row is recreated on remote delivery', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = await seedClean(h);
      await h.pocket.db
          .execute('DELETE FROM lp_sync_row WHERE record_id = ?', [id]);
      expect(await sr(h, id), isNull);

      // A NEWER remote delivery re-creates the missing sync row (records at or
      // behind the cursor are intentionally skipped by the pull).
      h.mock.mutate(id, doc(id, 'recreated', 3));
      await h.engine.syncNow();

      final row = await sr(h, id);
      expect(row, isNotNull, reason: 'sync row recreated');
      expect(row!.syncState, SyncState.clean);
      expect(row.remoteUpdated, isNotEmpty);
    });

    test('unknown record (no domain, no sync) is inserted clean', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: doc('', 'brand-new'));
      await h.engine.syncNow();

      final r = await h.pocket.collection('widgets').get(id);
      expect(r!['name'], 'brand-new');
      expect((await sr(h, id))!.syncState, SyncState.clean);
    });
  });
}
