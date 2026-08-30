import 'package:localpocket/src/core/query/query_builder/query_builder.dart';
import 'package:localpocket/src/core/query/search_builder/search_builder.dart';
import 'package:localpocket/src/core/query_plan.dart';
import 'package:localpocket/src/core/schema.dart';
import 'package:localpocket/src/web/conversions.dart';
import 'package:localpocket/src/web/facade/send_plan.dart';
import 'package:localpocket/src/web/protocol.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import 'support/fake_facade_host.dart';

void main() {
  late FakeFacadeHost fake;

  setUp(() {
    fake = FakeFacadeHost({'widgets': widgetsSchema()});
  });

  QueryPlan buildPlan() => QueryBuilder.compileOnly(widgetsSchema())
      .where('qty', eq: 3)
      .select(['id', 'name'])
      .orderBy('name')
      .limit(5)
      .compilePlan();

  test('sends the exact plan payload with wire-encoded args', () async {
    final plan = buildPlan();
    fake.responses[WireOp.compiledQuery] = {'items': <Object?>[]};

    final result = await sendCompiledPlan(fake, plan);

    expect(result, {'items': <Object?>[]});
    final (op, args) = fake.sent.single;
    expect(op, WireOp.compiledQuery);

    expect(args['type'], 'query_plan');
    expect(args['operation'], 'query');
    expect(args['compilerVersion'], queryCompilerVersion);
    expect(args['store'], 'widgets');
    expect(args['schemaVersion'], 1);
    expect(args['schemaFingerprint'], plan.schemaFingerprint);
    expect(args['argumentCount'], 1);
    expect(args['sql'], plan.sql);
    expect(args['args'], plan.args.map(encodeWireValue).toList());
    expect(args['args'], [3]);
    expect(args['limit'], 5);
    expect(args['projection'], ['id', 'name']);
    expect(args['decodeColumns'], ['id', 'name']);
    expect(args['shape'], plan.shape);
  });

  test('the envelope carries exactly the plan keys plus the ordered flag',
      () async {
    fake.responses[WireOp.compiledQuery] = {'items': <Object?>[]};
    await sendCompiledPlan(fake, buildPlan());
    final (_, args) = fake.sent.single;
    expect(
      args.keys.toSet(),
      {
        'type',
        'operation',
        'compilerVersion',
        'store',
        'schemaVersion',
        'schemaFingerprint',
        'argumentCount',
        'sql',
        'args',
        'limit',
        'projection',
        'decodeColumns',
        'shape',
        'ordered',
      },
      reason: 'the payload key set is the bridge contract: adding a key '
          'changes the wire the worker parses',
    );
    expect(args['ordered'], isFalse,
        reason: 'the ordered digest flag defaults to false');
  });

  test('the ordered flag rides the envelope when requested', () async {
    fake.responses[WireOp.watchQuery] = {'items': <Object?>[]};
    await sendCompiledPlan(fake, buildPlan(), watchId: 3, ordered: true);
    final (_, args) = fake.sent.single;
    expect(args['ordered'], isTrue);
  });

  test('tagged wire values in args are encoded on the way out', () async {
    final plan = QueryPlan(
      operation: 'query',
      compilerVersion: 2,
      store: 'widgets',
      schemaVersion: 1,
      schemaFingerprint: 'deadbeef',
      sql: 'SELECT * FROM "widgets"',
      args: [
        DateTime.utc(2026, 1, 2, 3, 4, 5),
        BigInt.from(7),
        null,
        [
          1,
          'two',
        ],
      ],
      limit: 5,
      projection: null,
      shape: '{}',
    );
    fake.responses[WireOp.compiledQuery] = {'items': <Object?>[]};
    await sendCompiledPlan(fake, plan);
    final (_, args) = fake.sent.single;
    expect(args['argumentCount'], 4);
    expect(args['args'], plan.args.map(encodeWireValue).toList());
    final wireArgs = (args['args']! as List).cast<Object?>();
    expect(wireArgs[0], {
      'lp:datetime': DateTime.utc(2026, 1, 2, 3, 4, 5).microsecondsSinceEpoch
    });
    expect(wireArgs[1], {'lp:bigint': '7'});
    expect(wireArgs[2], isNull);
    expect(wireArgs[3], [
      1,
      'two',
    ]);
  });

  test('unbounded plans send null limit / projection / decodeColumns',
      () async {
    final plan = QueryBuilder.compileOnly(widgetsSchema()).all().compilePlan();
    expect(plan.limit, isNull);
    expect(plan.projection, isNull);
    expect(plan.decodeColumns, isNull);
    fake.responses[WireOp.compiledQuery] = {'items': <Object?>[]};
    await sendCompiledPlan(fake, plan);
    final (_, args) = fake.sent.single;
    expect(args['limit'], isNull);
    expect(args['projection'], isNull);
    expect(args['decodeColumns'], isNull);
  });

  test('count / ids / aggregate / distinct / explain operation payloads',
      () async {
    fake.responses[WireOp.compiledQuery] = {'value': 1};
    final q = QueryBuilder.compileOnly(widgetsSchema()).limit(50);

    Future<Map<String, Object?>> sendOne(QueryPlan plan) async {
      fake.sent.clear();
      await sendCompiledPlan(fake, plan);
      return fake.sent.single.$2;
    }

    final count = await sendOne(q.compileCountPlan());
    expect(count['operation'], 'count');
    expect(count['limit'], isNull, reason: 'count plans carry no SQL limit');

    final ids = await sendOne(q.compileIdsPlan());
    expect(ids['operation'], 'ids');
    expect(ids['projection'], ['id']);

    final sum = await sendOne(q.compileAggregatePlan('SUM', 'qty'));
    expect(sum['operation'], 'sum');
    expect(sum['argumentCount'], 0);
    expect(sum['limit'], isNull);

    final distinct = await sendOne(
        QueryBuilder.compileOnly(widgetsSchema()).compileDistinctPlan('size'));
    expect(distinct['operation'], 'distinct');
    expect(distinct['limit'], isNull,
        reason: 'distinct plans leave the plan-level limit null — the 1000-row '
            'default is baked into the SQL, not the limit field');

    final explain = await sendOne(q.compileExplainPlan());
    expect(explain['operation'], 'explain');
  });

  test('search plans carry the term shape', () async {
    final ftsFake = FakeFacadeHost({
      'widgets': widgetsSchema(fts: const FtsSpec(['name']))
    });
    final plan = SearchBuilder.compileOnly(
            widgetsSchema(fts: const FtsSpec(['name'])), 'engines')
        .limit(10)
        .compilePlan();
    ftsFake.responses[WireOp.compiledQuery] = {'results': <Object?>[]};
    await sendCompiledPlan(ftsFake, plan);
    final (_, args) = ftsFake.sent.single;
    expect(args['operation'], 'search');
    expect(args['shape'], contains('engines'));
    expect(args['projection'], isNull);
    expect(args['sql'], contains('MATCH ?'));
  });

  test('sessionId/pageLimit/watchId are omitted when not provided', () async {
    fake.responses[WireOp.compiledQuery] = {'items': <Object?>[]};
    await sendCompiledPlan(fake, buildPlan());
    final (_, args) = fake.sent.single;
    expect(args, isNot(contains('sessionId')));
    expect(args, isNot(contains('pageLimit')));
    expect(args, isNot(contains('watchId')));
  });

  test('sessionId/pageLimit/watchId are included only when provided', () async {
    fake.responses[WireOp.watchQuery] = {'items': <Object?>[]};
    await sendCompiledPlan(fake, buildPlan(),
        sessionId: 7, pageLimit: 10, watchId: 3);

    final (op, args) = fake.sent.single;
    expect(op, WireOp.watchQuery,
        reason: 'a watch id routes to watch_query, not compiled_query');
    expect(args['sessionId'], 7);
    expect(args['pageLimit'], 10);
    expect(args['watchId'], 3);
  });

  test('without a watch id the plan routes to compiled_query', () async {
    fake.responses[WireOp.compiledQuery] = {'value': 1};
    await sendCompiledPlan(fake, buildPlan(), sessionId: 7, pageLimit: 10);
    expect(fake.sent.single.$1, WireOp.compiledQuery);
  });
}
