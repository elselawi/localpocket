import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';

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

      expect(perf.writeTransactions, greaterThanOrEqualTo(20));
      expect(perf.maxQueueDepth, greaterThanOrEqualTo(2),
          reason: 'concurrent submissions must deepen the queue');
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
}
