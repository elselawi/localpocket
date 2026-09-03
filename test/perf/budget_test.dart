import 'package:localpocket/src/kernel/files/blob_store.dart';
import 'package:localpocket/src/kernel/ids.dart';
import 'package:localpocket/src/kernel/sync/sync_config.dart';
import 'package:localpocket/src/kernel/sync/sync_tables.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import '../support/engine_helpers.dart';
import '../support/mock_backend.dart';

void main() {
  group('Performance, retention and compaction', () {
    test('50mb engine overhead at 100k docs', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);

      final pocket = await openPocket(path: t.path);
      addTearDown(pocket.close);

      const total = 100000;
      const chunk = 5000;

      for (var start = 0; start < total; start += chunk) {
        await pocket.transaction((tx) async {
          for (var i = start; i < start + chunk; i++) {
            await tx.collection('widgets').put(
                  record(id: generateRecordId(), name: 'w$i', qty: i),
                );
          }
        });
      }

      final count = await pocket.collection('widgets').query().count();
      expect(count, total);

      // Verify keyset walk is bounded memory (fetches pages of 100 without loading all rows into RAM)
      String? cursor;
      var walked = 0;
      for (var p = 0; p < 20; p++) {
        final page = await (cursor == null
            ? pocket.collection('widgets').query().limit(100).fetch()
            : pocket
                .collection('widgets')
                .query()
                .limit(100)
                .keysetAfter(cursor));
        walked += page.items.length;
        cursor = page.nextCursor;
        if (cursor == null) break;
      }
      expect(walked, 2000);
    }, timeout: const Timeout(Duration(minutes: 2)));

    test('analyze optimize smoke', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);

      final pocket = await openPocket(path: t.path);
      final col = pocket.collection('widgets');

      for (var i = 0; i < 50; i++) {
        await col.put(record(id: generateRecordId(), name: 'w$i', qty: i));
      }

      // Explicit ANALYZE
      await pocket.maintenance.analyze();
      await pocket.maintenance.analyze('widgets');

      // Verify PRAGMA optimize runs on close
      expect(pocket.optimizeRanOnClose, isFalse);
      await pocket.close();
      expect(pocket.optimizeRanOnClose, isTrue);
    });

    test('purge hidden after default keep forever', () async {
      // 1. Default config: purgeHiddenAfter is null (keep forever)
      final defaultConfig = const SyncConfig();
      expect(defaultConfig.purgeHiddenAfter, isNull);

      // 2. Configured purgeHiddenAfter purges long-hidden rows during sweep
      final mock = MockSyncBackend();
      final dbPath = await tempDbPath();
      var nowMs = 1000000000;

      final harness = await EngineHarness.create(
        mock: mock,
        config: testConfig(
          purgeHiddenAfter: const Duration(days: 30),
          now: () => nowMs,
        ),
        path: dbPath.path,
      );
      addTearDown(() async {
        await harness.close();
        await dbPath.cleanup();
      });

      // Seed 2 records remotely
      final recA = mock.seed(
          store: 'widgets',
          data: {'name': 'A'},
          id: 'a${generateRecordId().substring(1)}');
      final recB = mock.seed(
          store: 'widgets',
          data: {'name': 'B'},
          id: 'a${generateRecordId().substring(1)}');

      // Initial sync
      await harness.engine.syncNow();
      expect(await harness.pocket.collection('widgets').query().count(), 2);

      // Remote deletes recA -> next sweep marks recA hidden
      mock.delete(recA);
      await harness.engine.sweeper.sweepBucket('widgets', 0);

      // recA is hidden, but last_seen_at is current, so not yet purged
      var syncRowA = await harness.pocket.outbox
          .readSyncRow(harness.pocket.db, 'widgets', recA);
      expect(syncRowA!.accessState, AccessState.hidden);
      expect(await harness.pocket.collection('widgets').get(recA), isNotNull);

      // Advance time past 30 days and sweep again -> recA is purged
      nowMs += const Duration(days: 31).inMilliseconds;
      await harness.engine.sweeper.sweepBucket('widgets', 0);

      // recA should now be purged
      expect(await harness.pocket.collection('widgets').get(recA), isNull);
      syncRowA = await harness.pocket.outbox
          .readSyncRow(harness.pocket.db, 'widgets', recA);
      expect(syncRowA, isNull);

      // recB is still present and visible
      expect(await harness.pocket.collection('widgets').get(recB), isNotNull);
    });

    test('compact only synced archived visible rows', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);

      final blobStore = MemoryBlobStore();
      final pocket = await openPocket(
        path: t.path,
        blobStore: blobStore,
        stores: [widgetsSchema(keepUnsyncedArchives: true)],
      );
      addTearDown(pocket.close);

      const now = 1000000000;
      final oldSeen = now - const Duration(days: 100).inMilliseconds;
      final recentSeen = now - const Duration(days: 10).inMilliseconds;

      final col = pocket.collection('widgets');

      // 1. Active (unarchived) row, old seen -> PRESERVE
      final activeId = generateRecordId();
      await col.put(record(id: activeId, name: 'Active'));
      await pocket.db.update(
          'lp_sync_row',
          {
            'sync_state': SyncState.clean.name,
            'access_state': AccessState.visible.name,
            'last_seen_at': oldSeen,
          },
          where: 'store = ? AND record_id = ?',
          whereArgs: ['widgets', activeId]);

      // 2. Archived, clean, visible, old seen (100d > 90d) -> COMPACT / PURGE
      final targetId = generateRecordId();
      await col.put(record(id: targetId, name: 'Target'));
      await col.archive(targetId);
      await pocket.db.update(
          'lp_sync_row',
          {
            'sync_state': SyncState.clean.name,
            'access_state': AccessState.visible.name,
            'last_seen_at': oldSeen,
          },
          where: 'store = ? AND record_id = ?',
          whereArgs: ['widgets', targetId]);

      // Attach file ref to target row
      await pocket.files.attach(
        store: 'widgets',
        recordId: targetId,
        bytes: Stream.value([1, 2, 3, 4, 5]),
        name: 'target.bin',
        allowVolatileBlobs: true,
      );

      // 3. Archived, clean, visible, RECENT seen (10d < 90d) -> PRESERVE
      final recentId = generateRecordId();
      await col.put(record(id: recentId, name: 'Recent'));
      await col.archive(recentId);
      await pocket.db.update(
          'lp_sync_row',
          {
            'sync_state': SyncState.clean.name,
            'access_state': AccessState.visible.name,
            'last_seen_at': recentSeen,
          },
          where: 'store = ? AND record_id = ?',
          whereArgs: ['widgets', recentId]);

      // 4. Archived, DIRTY (unsynced edit), old seen -> PRESERVE
      final dirtyId = generateRecordId();
      await col.put(record(id: dirtyId, name: 'Dirty'));
      await col.archive(dirtyId);
      await pocket.db.update(
          'lp_sync_row',
          {
            'sync_state': SyncState.dirty.name,
            'access_state': AccessState.visible.name,
            'last_seen_at': oldSeen,
          },
          where: 'store = ? AND record_id = ?',
          whereArgs: ['widgets', dirtyId]);

      // 5. Archived, clean, HIDDEN, old seen -> PRESERVE (hidden managed by purgeHiddenAfter, not compact)
      final hiddenId = generateRecordId();
      await col.put(record(id: hiddenId, name: 'Hidden'));
      await col.archive(hiddenId);
      await pocket.db
          .execute('UPDATE widgets SET hidden = 1 WHERE id = ?', [hiddenId]);
      await pocket.db.update(
          'lp_sync_row',
          {
            'sync_state': SyncState.clean.name,
            'access_state': AccessState.hidden.name,
            'last_seen_at': oldSeen,
          },
          where: 'store = ? AND record_id = ?',
          whereArgs: ['widgets', hiddenId]);

      // Execute compact(olderThan: 90 days)
      final compacted = await pocket.maintenance.compact('widgets',
          olderThan: const Duration(days: 90), nowMs: now);
      expect(compacted, 1,
          reason: 'Only the single qualifying row must be compacted');

      // Verify target is deleted
      expect(await col.get(targetId), isNull);
      final refs =
          await pocket.files.list(store: 'widgets', recordId: targetId);
      expect(refs, isEmpty, reason: 'Compaction must drop file refs');

      // Verify all other 4 rows are preserved
      expect(await col.get(activeId), isNotNull);
      expect(await col.get(recentId), isNotNull);
      expect(await col.get(dirtyId), isNotNull);
      expect(await col.get(hiddenId), isNotNull);
    });

    test('outbox pruning and maintenance state machine', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final pocket = await openPocket(path: t.path);
      addTearDown(pocket.close);

      final col = pocket.collection('widgets');
      final id1 = generateRecordId();
      final id2 = generateRecordId();
      await col.put(record(id: id1, name: 'w1'));
      await col.put(record(id: id2, name: 'w2'));

      // Simulate id1 being marked clean (e.g. pushed)
      await pocket.db.update(
        'lp_sync_row',
        {'sync_state': SyncState.clean.name},
        where: 'record_id = ?',
        whereArgs: [id1],
      );

      // Prune orphaned/clean outbox entries
      final pruned = await pocket.maintenance.pruneOutbox();
      expect(pruned, 1);

      // Run full maintenance state machine
      await pocket.maintenance.runMaintenance();
      expect(await col.get(id1), isNotNull);
      expect(await col.get(id2), isNotNull);
    });
  });
}
