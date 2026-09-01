import 'package:localpocket/src/internal/raw_surface.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import '../sync/engine/engine_helpers.dart';
import '../sync/engine/mock_backend.dart';

/// Opt-in observability counters.
void main() {
  group('PerfCounters', () {
    test('tracks write transactions, queue depth and rows written', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final perf = pocket.perf;
      perf.reset();

      final futures = <Future<void>>[
        for (var i = 0; i < 20; i++)
          col.put(record(id: generateRecordId(), name: 'n$i', qty: i)),
      ];
      await Future.wait(futures);

        // Group commit: the 20 same-turn submissions coalesce into ONE write
        // transaction (that is the feature — one fsync for the burst).
        expect(perf.writeTransactions, 1);
        expect(perf.groupCommits, 1,
          reason: 'the burst was coalesced into a single group commit');
        expect(perf.groupCommitMembers, 20);
        // Group commit holds the whole burst in ONE reserved queue slot, so
        // the queue no longer deepens under concurrency (by design).
        expect(perf.maxQueueDepth, 1,
          reason: 'the burst shares one group-commit queue slot');
      expect(perf.rowsWritten, greaterThanOrEqualTo(20));
      expect(perf.totalWriteTransactionUs, greaterThan(0));
      expect(perf.avgWriteTransactionUs, greaterThan(0));
      expect(perf.currentQueueDepth, 0);
    });

    test('putAll coalesces rows into a single transaction', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final perf = pocket.perf;
      perf.reset();

      await col.putAll([
        for (var i = 0; i < 100; i++)
          record(id: generateRecordId(), name: 'x$i', qty: i),
      ]);

      expect(perf.writeTransactions, 1);
      expect(perf.rowsWritten, 100);
      // User-facing queries are observable via traceQuery; internal executor
      // reads are not counted (documented PerfCounters boundary).
      await col.query().limit(1).fetch();
      expect(perf.queries, greaterThan(0));
    });

    test('snapshot is a serializable map and reset clears it', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final perf = pocket.perf;
      await pocket
          .collection('widgets')
          .put(record(id: generateRecordId(), name: 'x'));
      final snap = perf.snapshot();
      expect(snap['writeTransactions'], greaterThanOrEqualTo(1));
      expect(snap.containsKey('maxQueueDepth'), isTrue);

      perf.reset();
      final after = perf.snapshot();
      expect(after['writeTransactions'], 0);
      expect(after['rowsWritten'], 0);
    });
  });

  group('counter completeness', () {
    test('snapshot exposes every counter and reset clears each one', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final perf = pocket.perf;
      final keys = [
        'writeTransactions',
        'totalWriteTransactionUs',
        'avgWriteTransactionUs',
        'statements',
        'queries',
        'rowsWritten',
        'maxQueueDepth',
        'currentQueueDepth',
        'watchRefreshes',
        'watchEmissions',
        'watchDigestBytes',
        'pushPreflightRequests',
        'pushSettlementItems',
        'pullPages',
        'pullAppliedRows',
      ];
      // Drive every counter family at least once.
      await pocket
          .collection('widgets')
          .put(record(id: generateRecordId(), name: 'x'));
      final sub =
          pocket.collection('widgets').query().limit(10).watch().listen((_) {});
      addTearDown(sub.cancel);
      await Future<void>.delayed(const Duration(milliseconds: 80));
      await pocket
          .collection('widgets')
          .put(record(id: generateRecordId(), name: 'y'));

      final snap = perf.snapshot();
      for (final k in keys) {
        expect(snap.containsKey(k), isTrue, reason: 'missing counter $k');
        expect(snap[k], isA<num>(), reason: '$k must be numeric');
      }

      perf.reset();
      final after = perf.snapshot();
      for (final k in keys) {
        expect(after[k], 0, reason: '$k must reset to zero');
      }
      expect(perf.avgWriteTransactionUs, 0);
    });

    test('average duration is zero before any transaction and positive after',
        () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final perf = pocket.perf;
      perf.reset();
      expect(perf.writeTransactions, 0);
      expect(perf.avgWriteTransactionUs, 0);

      await pocket
          .collection('widgets')
          .put(record(id: generateRecordId(), name: 'x'));
      expect(perf.writeTransactions, 1);
      expect(perf.totalWriteTransactionUs, greaterThan(0));
      expect(perf.avgWriteTransactionUs, greaterThan(0));
    });

    test('failed write transactions are still counted', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final perf = pocket.perf;
      perf.reset();

      await expectLater(
          pocket.collection('widgets').put({'id': 'BAD_ID!', 'name': 'x'}),
          throwsA(isA<ValidationException>()));
      expect(perf.writeTransactions, 1,
          reason: 'the attempted write counts even though it rolled back');
      expect(perf.totalWriteTransactionUs, greaterThan(0));
    });

    test('tracing hooks count traced calls but not raw executor calls',
        () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final perf = pocket.perf;
      perf.reset();

      // Raw executor access is deliberately not observable.
      await pocket.db.execute('SELECT 1');
      await pocket.db.rawQuery('SELECT 1');
      expect(perf.statements, 0, reason: 'raw execute is not traced');
      expect(perf.queries, 0, reason: 'raw query is not traced');

      // Traced statements and queries are counted exactly.
      await pocket.traceExecute('SELECT 1');
      expect(perf.statements, 1);
      await pocket.traceQuery('SELECT 1');
      expect(perf.queries, 1);

      // A user-facing query routes through traceQuery.
      await pocket.collection('widgets').query().all().count();
      expect(perf.queries, 2);
    });

    test('watch refresh, emission, and digest bytes are counted', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final perf = pocket.perf;
      perf.reset();

      final sub =
          pocket.collection('widgets').query().limit(10).watch().listen((_) {});
      addTearDown(sub.cancel);
      await Future<void>.delayed(const Duration(milliseconds: 80));
      expect(perf.watchRefreshes, 1, reason: 'initial refresh');
      expect(perf.watchEmissions, 1, reason: 'initial emission');
      // An empty snapshot digests to zero bytes.
      expect(perf.watchDigestBytes, 0);

      await pocket
          .collection('widgets')
          .put(record(id: generateRecordId(), name: 'x'));
      await Future<void>.delayed(const Duration(milliseconds: 120));
      expect(perf.watchRefreshes, 2);
      expect(perf.watchEmissions, 2);
      expect(perf.watchDigestBytes, greaterThan(0),
          reason: 'a non-empty snapshot contributes digest bytes');
    });

    test('push and pull counters reflect engine activity', () async {
      // Batch mode must be enabled before the engine starts so the Pusher
      // captures it from backend capabilities.
      final mock = MockSyncBackend()..batchEnabled = true;
      final h = await EngineHarness.create(
          config: testConfig(maxPage: 5), mock: mock);
      addTearDown(h.close);
      final perf = h.pocket.perf;
      perf.reset();

      // Pull 12 remote records across several pages.
      for (var i = 0; i < 12; i++) {
        h.mock.seed(store: 'widgets', data: {'name': 'n$i', 'qty': i});
      }
      await h.engine.syncNow();
      expect(perf.pullPages, greaterThanOrEqualTo(3),
          reason: '12 records at maxPage 5 need at least 3 pages');
      expect(perf.pullAppliedRows, 12);
      expect(await h.pocket.collection('widgets').query().count(), 12);

      // Push a local write through the batch lane.
      final id = generateRecordId();
      await h.pocket
          .collection('widgets')
          .put({'id': id, 'name': 'local', 'qty': 1});
      final preflightBefore = perf.pushPreflightRequests;
      final settledBefore = perf.pushSettlementItems;
      await h.engine.syncNow();
      expect(perf.pushPreflightRequests, greaterThan(preflightBefore),
          reason: 'batch preflight GETs are counted');
      expect(perf.pushSettlementItems, greaterThan(settledBefore),
          reason: 'settled items are counted');
    });
  });
}
