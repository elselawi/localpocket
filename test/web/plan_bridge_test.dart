import 'package:localpocket/localpocket.dart';
import 'package:localpocket/src/core/query/search_builder/search_builder.dart';
import 'package:localpocket/src/core/schema.dart';
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

  group('plan bridge round-trip: every field survives the wire', () {
    late WorkerHarness h;

    setUp(() async {
      h = await WorkerHarness.open();
      addTearDown(h.close);
      await h.put(
          'widgets',
          record(
              name: 'apple',
              qty: 3,
              price: 1.5,
              active: true,
              madeOn: 100,
              size: 'M'),
          id: generateRecordId());
      await h.put(
          'widgets',
          record(
              name: 'banana',
              qty: 8,
              price: 2.5,
              active: false,
              madeOn: 200,
              size: 'L'),
          id: generateRecordId());
      await h.put(
          'widgets',
          record(
              name: 'cherry',
              qty: 9,
              price: 3.5,
              active: true,
              madeOn: 300,
              size: 'M'),
          id: generateRecordId());
      await h.put(
          'widgets', record(name: 'apricot', qty: 8, price: 2.0, size: null),
          id: generateRecordId());
    });

    /// Sends [plan] through the real wire parse → dispatch → runner path and
    /// compares the worker's result to the direct runner's result for the
    /// identical plan object. Equality proves every execution-affecting
    /// field (operation, sql, args after wire decode, limit, projection,
    /// decodeColumns, pageLimit) survived the payload reconstruction.
    Future<void> expectBridgeParity(QueryPlan plan, {int? pageLimit}) async {
      final viaWire = (await h.sendOk(h.req(WireOp.compiledQuery,
              args: planPayload(plan, pageLimit: pageLimit))))!
          as Map<String, Object?>;
      final direct = await h.pocket.reads.executeCompiled(plan,
          run: h.pocket.traceQuery, pageLimit: pageLimit);
      expect(viaWire, equals(direct),
          reason: 'the worker result must equal the direct runner result for '
              'operation ${plan.operation}');
    }

    test('query with projection, order, and a page limit', () async {
      final plan = h.pocket
          .collection('widgets')
          .query()
          .where('qty', gte: 3)
          .orderBy('name', desc: true)
          .select(['name', 'qty'])
          .limit(10)
          .compilePlan();
      await expectBridgeParity(plan, pageLimit: 2);
    });

    test('query with rich bound args (between, inValues, null scope)',
        () async {
      final plan = h.pocket
          .collection('widgets')
          .query()
          .where('made_on', between: (100, 300))
          .where('qty', inValues: [3, 8, 9])
          .where('size', isNotNull: true)
          .orderBy('qty')
          .limit(10)
          .compilePlan();
      await expectBridgeParity(plan);
    });

    test('unbounded query (limit null, projection null)', () async {
      final plan = h.pocket.collection('widgets').query().all().compilePlan();
      expect(plan.limit, isNull);
      expect(plan.projection, isNull);
      expect(plan.decodeColumns, isNull);
      await expectBridgeParity(plan);
    });

    test('count, countDistinct, distinct, and ids plans', () async {
      final q = h.pocket.collection('widgets').query().limit(50);
      await expectBridgeParity(q.compileCountPlan());
      await expectBridgeParity(q.compileCountDistinctPlan('size'));
      await expectBridgeParity(q.compileDistinctPlan('size'));
      await expectBridgeParity(q.compileIdsPlan());
    });

    test('sum / avg / min / max aggregate plans', () async {
      final q = h.pocket.collection('widgets').query().limit(50);
      for (final fn in ['SUM', 'AVG', 'MIN', 'MAX']) {
        await expectBridgeParity(q.compileAggregatePlan(fn, 'qty'));
      }
    });

    test('explain plan', () async {
      final plan = h.pocket
          .collection('widgets')
          .query()
          .where('name', eq: 'apple')
          .limit(50)
          .compileExplainPlan();
      await expectBridgeParity(plan);
    });

    test('search plan (term shape + normalized args)', () async {
      final hFts = await WorkerHarness.open(stores: [
        widgetsSchema(fts: const FtsSpec(['name']))
      ]);
      addTearDown(hFts.close);
      await hFts.put('widgets', record(name: 'engine block', qty: 1),
          id: generateRecordId());
      await hFts.put('widgets', record(name: 'engine piston', qty: 1),
          id: generateRecordId());

      final schema = hFts.pocket.requireTable('widgets').schema;
      final plan =
          SearchBuilder.compileOnly(schema, 'engine').limit(10).compilePlan();
      expect(plan.operation, 'search');
      expect(plan.shape, contains('engine'),
          reason: 'the search shape carries the term');

      final viaWire = (await hFts
              .sendOk(hFts.req(WireOp.compiledQuery, args: planPayload(plan))))!
          as Map<String, Object?>;
      final direct = await hFts.pocket.reads
          .executeCompiled(plan, run: hFts.pocket.traceQuery);
      expect(viaWire, equals(direct));
    });

    test('session-scoped plan execution keeps parity (sessionId)', () async {
      final begin =
          (await h.sendOk(h.req(WireOp.txBegin)))! as Map<String, Object?>;
      final sessionId = begin['sessionId']! as int;

      final plan = h.pocket
          .collection('widgets')
          .query()
          .orderBy('name')
          .limit(10)
          .compilePlan();
      final viaWire = (await h.sendOk(h.req(WireOp.compiledQuery, args: {
        ...planPayload(plan, pageLimit: 2),
        'sessionId': sessionId,
      })))! as Map<String, Object?>;
      final direct = await h.pocket.reads
          .executeCompiled(plan, run: h.pocket.traceQuery, pageLimit: 2);
      expect(viaWire, equals(direct));

      await h.sendOk(h.req(WireOp.txRollback, args: {'sessionId': sessionId}));
    });
  });

  group('plan bridge validation characterization (pre-cutover pins)', () {
    late WorkerHarness h;

    setUp(() async {
      h = await WorkerHarness.open();
      addTearDown(h.close);
      await h.put('widgets', record(name: 'apple', qty: 3),
          id: generateRecordId());
    });

    QueryPlan basePlan() => h.pocket
        .collection('widgets')
        .query()
        .where('name', eq: 'apple')
        .limit(50)
        .compilePlan();

    test('missing optional fields parse as null and still execute', () async {
      final payload = planPayload(basePlan())
        ..remove('limit')
        ..remove('projection')
        ..remove('decodeColumns')
        ..remove('shape');
      final result =
          (await h.sendOk(h.req(WireOp.compiledQuery, args: payload)))!
              as Map<String, Object?>;
      expect((result['items']! as List), hasLength(1),
          reason: 'limit/projection/decodeColumns/shape are optional on the '
              'wire today');
    });

    test('a non-string shape is tolerated (parsed as empty)', () async {
      for (final badShape in [
        42,
        {'shape': true},
        ['s']
      ]) {
        final payload = planPayload(basePlan())..['shape'] = badShape;
        final result =
            (await h.sendOk(h.req(WireOp.compiledQuery, args: payload)))!
                as Map<String, Object?>;
        expect((result['items']! as List), hasLength(1),
            reason: 'non-string shape values execute with an empty shape '
                'on the current bridge');
      }
    });

    test('a non-int limit and a non-list projection are tolerated', () async {
      final badLimit = planPayload(basePlan())..['limit'] = 'ten';
      final result =
          (await h.sendOk(h.req(WireOp.compiledQuery, args: badLimit)))!
              as Map<String, Object?>;
      expect((result['items']! as List), hasLength(1));

      final badProjection = planPayload(basePlan())..['projection'] = 'name';
      await h.sendOk(h.req(WireOp.compiledQuery, args: badProjection));
    });

    test('args that are not a list are rejected at the envelope', () async {
      final badArgs = planPayload(basePlan())..['args'] = 'not-a-list';
      final err = await h.sendError(h.req(WireOp.compiledQuery, args: badArgs));
      expect(err.code, WireErrorCode.localpocket);
      expect(err.details?['type'], 'ProtocolEnvelopeException');
      expect(err.message, contains('Malformed'));
    });

    test('a malformed tagged wire arg surfaces a typed error, not a crash',
        () async {
      final badTag = planPayload(basePlan())
        ..['args'] = [
          {'lp:datetime': 'nope'}
        ];
      final err = await h.sendError(h.req(WireOp.compiledQuery, args: badTag));
      expect(err.code, WireErrorCode.localpocket);
    });
  });
}
