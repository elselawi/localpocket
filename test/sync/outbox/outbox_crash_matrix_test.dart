import 'package:localpocket/src/kernel/ids.dart';
import 'package:localpocket/src/kernel/local_pocket.dart';
import 'package:localpocket/src/kernel/sync/engine.dart';
import 'package:localpocket/src/kernel/sync/sync_tables.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';
import '../engine/engine_helpers.dart';
import '../engine/mock_backend.dart';

/// Crash/restart matrix for the outbox: a crash at any point inside the
/// local-mutation transaction (which writes the domain row, the outbox op and
/// the sync row atomically) must leave nothing behind, and a crash inside a
/// pull page transaction must leave no partial rows and no committed cursor.
/// In every case a reopen must recover with no lost edit and no double-push.
void main() {
  Future<SyncRowState?> sr(LocalPocket pocket, String id) =>
      pocket.outbox.readSyncRow(pocket.db, 'widgets', id);

  Map<String, Object?> doc(String id, String name, [int qty = 0]) => {
        if (id.isNotEmpty) 'id': id,
        'name': name,
        'qty': qty,
      };

  group('outbox crash matrix', () {
    for (final marker in ['after-domain-write', 'after-outbox']) {
      test(
          'a crash $marker rolls back the mutation: reopen shows no partial '
          'state and a retried edit pushes exactly once', () async {
        final t = await tempDbPath();
        addTearDown(t.cleanup);
        final hooks = TestHooks()
          ..mutationCrashPoint = (m) {
            if (m == marker) throw StateError('crash@$marker');
          };
        final pocket = await openPocket(
            path: t.path, stores: [widgetsSchema()], testHooks: hooks);
        final id = generateRecordId();
        await expectLater(
            pocket.collection('widgets').put(record(id: id, name: 'x')),
            throwsA(isA<StateError>()));
        // The whole mutation transaction rolled back: nothing persisted.
        expect(await pocket.collection('widgets').get(id), isNull);
        expect(await pocket.outbox.readOp(pocket.db, 'widgets', id), isNull);
        expect(await sr(pocket, id), isNull);
        await pocket.close();

        // Reopen: no orphaned op, no half-applied sync row.
        final reopened =
            await openPocket(path: t.path, stores: [widgetsSchema()]);
        addTearDown(reopened.close);
        expect(await reopened.collection('widgets').get(id), isNull);
        expect(await reopened.outbox.drain(), isEmpty);

        // The retried edit is pushed exactly once.
        final mock = MockSyncBackend();
        final engine =
            SyncEngine(pocket: reopened, backend: mock, config: testConfig());
        await engine.start();
        await reopened.collection('widgets').put(record(id: id, name: 'x'));
        await engine.syncNow();
        expect(mock.records.length, 1,
            reason:
                'exactly one remote record — the retry never double-pushes');
        expect((await sr(reopened, id))!.syncState, SyncState.clean);
        await engine.stop();
      });
    }

    test(
        'a crash mid-pull-apply rolls back the page: reopen finds no partial '
        'rows and the re-pull applies each record exactly once', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final mock = MockSyncBackend();
      final hooks = TestHooks();
      final h = await EngineHarness.create(
          mock: mock, testHooks: hooks, path: t.path);
      // Seed AFTER create so the startup cycle pulled nothing.
      final ids = <String>[];
      for (var i = 0; i < 5; i++) {
        ids.add(mock.seed(store: 'widgets', data: doc('', 'n$i', i)));
      }
      hooks.applyRemoteCrashPoint = (store, id) {
        if (id == ids[2]) throw StateError('crash@apply');
      };
      await expectLater(h.engine.syncNow(), throwsA(isA<StateError>()));
      // The page transaction rolled back: no partial rows, no committed cursor.
      expect(await h.pocket.collection('widgets').query().count(), 0);
      expect(await h.engine.syncStore.readCursor('widgets'), isNull);
      await h.close();

      // Reopen and re-pull: every record applies exactly once.
      final reopened =
          await EngineHarness.create(mock: mock, path: t.path, start: false);
      addTearDown(reopened.close);
      await reopened.engine.start();
      expect(await reopened.pocket.collection('widgets').query().count(), 5,
          reason: 'the re-pull applied every record, none lost');
      for (final id in ids) {
        final row = await sr(reopened.pocket, id);
        expect(row!.remoteUpdated, mock.records[id]!.updated,
            reason: 'each record applied once from its seed version');
      }
      final report = await reopened.engine.syncNow();
      expect(report.pulled['widgets'], 0,
          reason: 'nothing left to pull after the re-pull');
    });
  });
}
