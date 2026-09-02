import 'package:test/test.dart';

import '../../../support/engine_helpers.dart';
import '../../../support/mock_backend.dart';

/// A single pull pass is bounded (maxPagesPerPass x maxPage) so one huge store
/// can never monopolize the engine; when the cap is hit with a full page the
/// engine immediately continues that store (auto-continuation) until it
/// drains — but never busy-loops a store that made no progress.
void main() {
  Map<String, Object?> doc(String id, String name, [int qty = 0]) => {
        if (id.isNotEmpty) 'id': id,
        'name': name,
        'qty': qty,
      };

  group('page-limit auto-continuation', () {
    test('PullReport.hitPageLimit is true when the cap is hit with a full page',
        () async {
      final h = await EngineHarness.create(
          config: testConfig(maxPage: 10, maxPagesPerPass: 3));
      addTearDown(h.close);
      for (var i = 0; i < 100; i++) {
        h.mock.seed(store: 'widgets', data: doc('', 'n$i', i));
      }

      final pr = await h.engine.puller.pullStore('widgets');
      expect(pr.applied, 30, reason: 'one pass is bounded to 3 pages of 10');
      expect(pr.pages, 3);
      expect(pr.hitPageLimit, isTrue,
          reason: 'stopped at the cap with a full page');
    });

    test('PullReport.hitPageLimit is false when the store drains within a pass',
        () async {
      final h = await EngineHarness.create(
          config: testConfig(maxPage: 10, maxPagesPerPass: 3));
      addTearDown(h.close);
      for (var i = 0; i < 5; i++) {
        h.mock.seed(store: 'widgets', data: doc('', 'n$i', i));
      }

      final pr = await h.engine.puller.pullStore('widgets');
      expect(pr.applied, 5);
      expect(pr.hitPageLimit, isFalse,
          reason: 'drained within the pass -> no continuation needed');
    });

    test('an exact multiple of full pages still reports hitPageLimit',
        () async {
      final h = await EngineHarness.create(
          config: testConfig(maxPage: 10, maxPagesPerPass: 3));
      addTearDown(h.close);
      for (var i = 0; i < 30; i++) {
        h.mock.seed(store: 'widgets', data: doc('', 'n$i', i));
      }

      final pr = await h.engine.puller.pullStore('widgets');
      expect(pr.applied, 30);
      expect(pr.hitPageLimit, isTrue,
          reason: '3 full pages = exactly the cap; a 4th pass may exist');
    });

    test('engine auto-continues until the store drains and then settles',
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
      expect(count, 100, reason: 'the chained continuation drains the store');

      // Once drained, nothing is re-pulled and no continuation loops.
      final callsAfterDrain = h.mock.listChangesCalls;
      final settled = await h.engine.syncNow();
      expect(settled.pulled['widgets'], 0, reason: 'nothing left to pull');
      await Future<void>.delayed(const Duration(milliseconds: 30));
      expect(h.mock.listChangesCalls, callsAfterDrain + 1,
          reason: 'a drained store pulls exactly once more and stops '
              '(no busy-loop after the drain)');
    });

    test(
        'a store that hits the cap with ZERO applied is not continued '
        '(no busy-loop)', () async {
      final h = await EngineHarness.create(
          config: testConfig(maxPage: 10, maxPagesPerPass: 3));
      addTearDown(h.close);
      // Bootstrap: 30 records applied; cursor at the last one.
      for (var i = 0; i < 30; i++) {
        h.mock.seed(store: 'widgets', data: doc('', 'n$i', i));
      }
      await h.engine.syncNow();
      expect(await h.pocket.collection('widgets').query().count(), 30);

      // Now the remote keeps returning the SAME already-seen records: every
      // page is full (cap hit) but nothing applies.
      final stale = [
        for (var i = 0; i < 10; i++)
          h.mock.records.values.elementAt(i).toRemote(),
      ];
      h.mock.script('listChanges', [MockReturn(stale)]);

      final before = h.mock.listChangesCalls;
      final report = await h.engine.syncNow();
      expect(report.pulled['widgets'], 0);
      expect(h.mock.listChangesCalls, before + 3,
          reason: 'the pass ran its 3 pages and stopped at the cap');

      // No continuation was scheduled: the page count stays flat afterwards.
      await Future<void>.delayed(const Duration(milliseconds: 50));
      expect(h.mock.listChangesCalls, before + 3,
          reason: 'a stuck store must not busy-loop the engine');
      expect(await h.pocket.collection('widgets').query().count(), 30);
    });

    test('continuation is per-store and bounded', () async {
      final h = await EngineHarness.create(
          config: testConfig(maxPage: 10, maxPagesPerPass: 3));
      addTearDown(h.close);
      // One huge store + one tiny store.
      for (var i = 0; i < 60; i++) {
        h.mock.seed(store: 'widgets', data: doc('', 'w$i', i));
      }
      final small = h.mock.seed(store: 'widgets', data: doc('', 'solo', 1));

      await h.engine.syncNow();
      var count = await h.pocket.collection('widgets').query().count();
      var waits = 0;
      while (count < 61 && waits < 50) {
        await Future<void>.delayed(const Duration(milliseconds: 5));
        count = await h.pocket.collection('widgets').query().count();
        waits++;
      }
      expect(count, 61, reason: 'both stores eventually applied');
      expect(await h.pocket.collection('widgets').get(small), isNotNull);
    });
  });
}
