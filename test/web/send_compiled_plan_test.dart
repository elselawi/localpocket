import 'package:localpocket/src/core/query/query_builder/query_builder.dart';
import 'package:localpocket/src/core/query_plan.dart';
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

  test('sessionId/pageLimit/watchId are omitted when not provided', () async {
    fake.responses[WireOp.compiledQuery] = {'items': <Object?>[]};
    await sendCompiledPlan(fake, buildPlan());
    final (_, args) = fake.sent.single;
    expect(args, isNot(contains('sessionId')));
    expect(args, isNot(contains('pageLimit')));
    expect(args, isNot(contains('watchId')));
  });

  test('sessionId/pageLimit/watchId are included only when provided',
      () async {
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
