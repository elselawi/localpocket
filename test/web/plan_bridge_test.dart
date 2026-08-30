import 'package:localpocket/localpocket.dart';
import 'package:localpocket/src/web/conversions.dart';
import 'package:localpocket/src/web/protocol.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import 'support/worker_harness.dart';

/// Converts a [QueryPlan] into the wire payload the worker's
/// `_parseCompiledPlan` expects (mirrors `send_plan.dart`, including the
/// fields).
Map<String, Object?> planPayload(QueryPlan plan, {int? pageLimit}) => {
      'type': plan.typeName,
      'operation': plan.operation,
      'compilerVersion': plan.compilerVersion,
      'store': plan.store,
      'schemaVersion': plan.schemaVersion,
      'schemaFingerprint': plan.schemaFingerprint,
      'argumentCount': plan.argumentCount,
      'sql': plan.sql,
      'args': plan.args.map(encodeWireValue).toList(),
      'limit': plan.limit,
      'projection': plan.projection,
      'decodeColumns': plan.decodeColumns,
      'shape': plan.shape,
      if (pageLimit != null) 'pageLimit': pageLimit,
    };

/// Web compiled-plan bridge parity.
///
/// EVERY field the page sends must survive the temporary plan bridge.
/// Before the fix the worker's `_parseCompiledPlan` silently dropped
/// `decodeColumns` (the projection-aware decoder was disabled on web even
/// though the page sent it). These tests pin the field's survival through the
/// real parse → dispatch → runner path.
///
/// An explicitly ordered web watch digests its rows IN ORDER — a pure
/// re-order emits. Before the fix the compiled watcher hardcoded
/// `ordered: false`.
/// Waits (polling, deadline-bounded) until [predicate] holds.
Future<void> waitUntil(
  Future<bool> Function() predicate, {
  Duration timeout = const Duration(seconds: 5),
  String reason = 'condition',
}) async {
  final deadline = DateTime.now().add(timeout);
  while (DateTime.now().isBefore(deadline)) {
    if (await predicate()) return;
    await Future<void>.delayed(const Duration(milliseconds: 10));
  }
  fail('Timed out after $timeout waiting for: $reason');
}

void main() {
  group('plan bridge keeps projection decode metadata', () {
    late WorkerHarness h;

    setUp(() async {
      h = await WorkerHarness.open();
      addTearDown(h.close);
    });

    test('compilePlan mints decodeColumns for a declared-field projection', () {
      final plan = h.pocket
          .collection('widgets')
          .query()
          .select(['name', 'qty'])
          .limit(50)
          .compilePlan();
      expect(plan.decodeColumns, isNotNull,
          reason: 'the page relies on this field reaching the runner');
      expect(plan.decodeColumns, contains('name'));
      expect(plan.decodeColumns, contains('qty'));
    });

    test('a plan WITH decodeColumns executes and projects identically',
        () async {
      final id = generateRecordId();
      await h.put('widgets', record(name: 'apple', qty: 3, price: 1.5), id: id);

      final plan = h.pocket
          .collection('widgets')
          .query()
          .select(['name', 'qty'])
          .limit(50)
          .compilePlan();
      final result = (await h
              .sendOk(h.req(WireOp.compiledQuery, args: planPayload(plan))))!
          as Map<String, Object?>;
      final items = ((result['items'] ?? result['rows']) as List? ?? const []);
      expect(items, hasLength(1));
      final item = decodeWireValue(items.first) as Map;
      expect(item['name'], 'apple');
      expect(item['qty'], 3);
      expect(item.containsKey('price'), isFalse,
          reason: 'projection is honored on the decoded rows');
    });

    test('a plan with decodeColumns still rejects a stale fingerprint',
        () async {
      final plan = h.pocket
          .collection('widgets')
          .query()
          .select(['name', 'qty'])
          .limit(50)
          .compilePlan();
      final bad = {
        ...planPayload(plan),
        'schemaFingerprint': 'deadbeef',
      };
      await h.sendError(h.req(WireOp.compiledQuery, args: bad));
    });
  });

  group('ordered web watch', () {
    late WorkerHarness h;

    setUp(() async {
      h = await WorkerHarness.open();
      addTearDown(h.close);
    });

    test('a pure re-order emits on an ordered watch', () async {
      final a = generateRecordId();
      final b = generateRecordId();
      await h.put('widgets', record(name: 'a', qty: 1, id: a), id: a);
      await h.put('widgets', record(name: 'b', qty: 2, id: b), id: b);

      final plan = h.pocket
          .collection('widgets')
          .query()
          .orderBy('qty', desc: true)
          .limit(50)
          .compilePlan();
      const watchId = 21;
      final result = (await h.sendOk(h.req(WireOp.watchQuery, args: {
        ...planPayload(plan),
        'watchId': watchId,
        'ordered': true,
      })))! as Map<String, Object?>;
      final initial =
          (result['items']! as List).map((i) => decodeWireValue(i) as Map);
      expect(initial.map((m) => m['id']).toList(), [b, a]);

      // Pure reorder: same rows, new positions.
      await h.put('widgets', record(name: 'b', qty: 0, id: b), id: b);
      await waitUntil(() async {
        final events = h.sink.byOp(WireOp.workerEvent);
        if (events.isEmpty) return false;
        final last = decodeWireValue(events.last['value']) as List?;
        if (last == null || last.length != 2) return false;
        final ids = last.map((i) => (decodeWireValue(i) as Map)['id']);
        return ids.first == a && ids.last == b;
      }, reason: 'ordered watch must emit on a pure reorder');
    });

    test('an unordered watch stays digest-deduped for equal snapshots',
        () async {
      final a = generateRecordId();
      await h.put('widgets', record(name: 'a', qty: 1, id: a), id: a);

      final plan = h.pocket
          .collection('widgets')
          .query()
          .where('name', eq: 'a')
          .limit(50)
          .compilePlan();
      const watchId = 22;
      await h.sendOk(h.req(WireOp.watchQuery, args: {
        ...planPayload(plan),
        'watchId': watchId,
      }));

      // A mutation that rewrites the SAME content is digest-deduped.
      await h.put('widgets', record(name: 'a', qty: 1, id: a), id: a);
      await Future<void>.delayed(const Duration(milliseconds: 150));
      expect(h.sink.byOp(WireOp.workerEvent), isEmpty,
          reason: 'identical snapshots must not re-emit');
    });
  });
}
