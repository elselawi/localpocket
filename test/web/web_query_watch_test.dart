import 'package:localpocket/src/web/conversions.dart';
import 'package:localpocket/src/web/facade/query/web_query_builder.dart';
import 'package:localpocket/src/web/protocol.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import 'support/fake_facade_host.dart';

void main() {
  late FakeFacadeHost fake;
  late WebQueryBuilder builder;

  setUp(() {
    fake = FakeFacadeHost({'widgets': widgetsSchema()});
    builder = WebQueryBuilder(fake, widgetsSchema());
  });

  Map<String, Object?> watchEnvelope() {
    final (op, args) =
        fake.sent.where((s) => s.$1 == WireOp.watchQuery).last;
    expect(op, WireOp.watchQuery);
    return args;
  }

  test('an unbounded watch compiles the plan with the native default limit 50',
      () async {
    final watchId = fake.nextRequestId;
    fake.responses[WireOp.watchQuery] = {'items': <Object?>[]};

    final emissions = <List<Map<String, Object?>>>[];
    final sub = builder.watch().listen(emissions.add);
    await pumpEventQueue();

    final args = watchEnvelope();
    expect(args['watchId'], watchId);
    expect(args['limit'], 50);
    expect(args['operation'], 'query');
    expect(args['store'], 'widgets');
    expect(args['sql'], contains('LIMIT 50'));
    expect(args, isNot(contains('pageLimit')));

    await sub.cancel();
  });

  test('an all() watch compiles the plan without any limit override', () async {
    fake.responses[WireOp.watchQuery] = {'items': <Object?>[]};
    final sub = builder.all().watch().listen((_) {});
    await pumpEventQueue();

    final args = watchEnvelope();
    expect(args['limit'], isNull);
    expect(args['sql'], isNot(contains('LIMIT')));
    await sub.cancel();
  });

  test('an explicit limit(n) watch keeps that limit in the plan', () async {
    fake.responses[WireOp.watchQuery] = {'items': <Object?>[]};
    final sub = builder.limit(7).watch().listen((_) {});
    await pumpEventQueue();

    final args = watchEnvelope();
    expect(args['limit'], 7);
    expect(args['sql'], contains('LIMIT 7'));
    await sub.cancel();
  });

  test('watch ids increment across registrations', () async {
    fake.responses[WireOp.watchQuery] = {'items': <Object?>[]};
    final sub1 = builder.watch().listen((_) {});
    await pumpEventQueue();
    final id1 = watchEnvelope()['watchId'] as int;
    await sub1.cancel();

    final sub2 = builder.watch().listen((_) {});
    await pumpEventQueue();
    final id2 = watchEnvelope()['watchId'] as int;

    expect(id2, id1 + 1);
    await sub2.cancel();
  });

  test('the initial snapshot is wire-decoded and added to the stream',
      () async {
    final r1 = {'id': 'a', 'name': 'apple', 'made_on': DateTime.utc(2026, 1, 1)};
    final r2 = {'id': 'b', 'name': 'banana'};
    fake.responses[WireOp.watchQuery] = {
      'items': [encodeWireValue(r1), encodeWireValue(r2)],
    };

    final emissions = <List<Map<String, Object?>>>[];
    final watchId = fake.nextRequestId;
    final sub = builder.limit(50).watch().listen(emissions.add);
    await pumpEventQueue();

    expect(emissions, hasLength(1));
    expect(emissions.single, hasLength(2));
    expect(emissions.single[0]['name'], 'apple');
    expect(emissions.single[0]['made_on'], DateTime.utc(2026, 1, 1));
    expect(emissions.single[1]['id'], 'b');

    // Later worker events (a fresh snapshot list) are delivered too.
    final r3 = {'id': 'c', 'name': 'cherry'};
    fake.deliverWorkerEvent(watchId, [r3]);
    await pumpEventQueue();
    expect(emissions, hasLength(2));
    expect(emissions.last.single['name'], 'cherry');

    await sub.cancel();
  });

  test('cancelling the watch sends watch_cancel and drops the stream',
      () async {
    fake.responses[WireOp.watchQuery] = {'items': <Object?>[]};
    final watchId = fake.nextRequestId;
    final sub = builder.watch().listen((_) {});
    await pumpEventQueue();

    expect(fake.workerStreams.containsKey(watchId), isTrue);
    await sub.cancel();
    await pumpEventQueue();

    expect(fake.workerStreams.containsKey(watchId), isFalse);
    final cancel = fake.sent.where((s) => s.$1 == WireOp.watchCancel).single;
    expect(cancel.$2, {'watchId': watchId});
  });
}
