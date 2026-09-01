import 'package:localpocket/src/kernel/change_bus.dart';
import 'package:localpocket/src/kernel/local_pocket.dart';
import 'package:localpocket/src/kernel/sync/sync_tables.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';
import 'engine_helpers.dart';
import 'mock_backend.dart';

void main() {
  Future<SyncRowState?> sr(LocalPocket pocket, String id) =>
      pocket.outbox.readSyncRow(pocket.db, 'widgets', id);

  Map<String, Object?> doc(String id, String name, [int qty = 0]) => {
        if (id.isNotEmpty) 'id': id,
        'name': name,
        'qty': qty,
      };

  group('pull cursor ordering and crash races', () {
    test(
        'an unordered backend page applies every record exactly once and the '
        'cursor advances to the max tuple', () async {
      final hooks = TestHooks();
      var deliveries = 0;
      hooks.applyRemoteCrashPoint = (store, id) => deliveries++;
      final h = await EngineHarness.create(testHooks: hooks);
      addTearDown(h.close);
      final ids = <String>[];
      for (var i = 0; i < 6; i++) {
        ids.add(h.mock.seed(store: 'widgets', data: doc('', 'n$i', i)));
      }
      // Serve the whole page in REVERSE (updated, id) order: the max tuple is
      // the first element, not the last.
      final reversed = ids.map((id) => h.mock.records[id]!.toRemote()).toList()
        ..sort((a, b) {
          final u = b.updated.compareTo(a.updated);
          return u != 0 ? u : b.id.compareTo(a.id);
        });
      h.mock.script('listChanges', [MockReturn(reversed)]);

      final report = await h.engine.syncNow();

      expect(report.pulled['widgets'], 6,
          reason: 'every record in the unordered page applied — none skipped');
      expect(await h.pocket.collection('widgets').query().count(), 6);
      expect(deliveries, 6,
          reason: 'each record was delivered exactly once (idempotent)');

      // The cursor advanced to the MAXIMUM (updated, id) tuple of the page,
      // not the page's last element.
      final cursor = await h.engine.syncStore.readCursor('widgets');
      final maxRec = reversed.reduce((a, b) =>
          (b.updated.compareTo(a.updated) > 0 ||
                  (b.updated == a.updated && b.id.compareTo(a.id) > 0))
              ? b
              : a);
      expect(cursor!.updated, maxRec.updated);
      expect(cursor.id, maxRec.id);
      for (final id in ids) {
        final row = await sr(h.pocket, id);
        expect(row!.remoteUpdated, h.mock.records[id]!.updated,
            reason: 'the applied watermark matches the seed version');
      }
    });

    test(
        'records sharing a timestamp across a page boundary both apply; the '
        'cursor tie-breaks on the max id', () async {
      final h = await EngineHarness.create(config: testConfig(maxPage: 1));
      addTearDown(h.close);
      const t = '2026-01-01 00:00:00.000Z';
      final idA = h.mock.seed(store: 'widgets', data: doc('', 'a'), updated: t);
      final idB = h.mock.seed(store: 'widgets', data: doc('', 'b'), updated: t);

      await h.engine.syncNow();

      expect(await h.pocket.collection('widgets').get(idA), isNotNull);
      expect(await h.pocket.collection('widgets').get(idB), isNotNull,
          reason: 'a shared timestamp across a page boundary applies both');
      final cursor = await h.engine.syncStore.readCursor('widgets');
      expect(cursor!.updated, t);
      final maxId = [idA, idB]..sort();
      expect(cursor.id, maxId.last,
          reason: 'the cursor tie-break is the max id at the shared timestamp');
    });

    test(
        'crash just after the cursor commits: reopen never re-applies the '
        'rewind re-delivery', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final mock = MockSyncBackend();
      final h = await EngineHarness.create(mock: mock, path: t.path);
      final ids = <String>[];
      for (var i = 0; i < 3; i++) {
        ids.add(mock.seed(store: 'widgets', data: doc('', 'n$i', i)));
      }
      await h.engine.syncNow(); // page + cursor committed
      expect(await h.pocket.collection('widgets').query().count(), 3);
      expect(await h.engine.syncStore.readCursor('widgets'), isNotNull);
      await h.close(); // "crash" AFTER the cursor commit

      final reopened =
          await EngineHarness.create(mock: mock, path: t.path, start: false);
      addTearDown(reopened.close);
      final changes = <ChangeSet>[];
      final sub = reopened.pocket.changeBus.stream.listen(changes.add);
      addTearDown(sub.cancel);
      await reopened.engine.start(); // rewind window re-delivers

      expect(changes.where((c) => c.store == 'widgets'), isEmpty,
          reason: 're-delivery inside the rewind window re-applies nothing '
              '(no ChangeSet, no domain write)');
      expect(await reopened.pocket.collection('widgets').query().count(), 3,
          reason: 'no duplicate rows after the reopen');
      final report = await reopened.engine.syncNow();
      expect(report.pulled['widgets'], 0,
          reason: 'the committed cursor prevents any re-apply');
    });
  });
}
