import 'package:localpocket/src/contract/contract.dart' as contract;
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

  contract.WatchRequest watchEnvelope() {
    final (op, args) =
        fake.sent.where((s) => s.$1 == WireOp.contractRequest).last;
    expect(op, WireOp.contractRequest);
    final encoded = args['request']! as Map;
    final req =
        contract.ContractCodec.decodeRequest(encoded.cast<String, Object?>());
    expect(req, isA<contract.WatchRequest>());
    return req as contract.WatchRequest;
  }

  Map<String, Object?> startedReply(String subscription) =>
      FakeFacadeHost.contractReply(
          contract.WatchStartedResult(subscription: subscription));

  test('an unbounded watch lowers the spec with the native default limit 50',
      () async {
    fake.responses[WireOp.contractRequest] = startedReply('sub-1');

    final emissions = <List<Map<String, Object?>>>[];
    final sub = builder.watch().listen(emissions.add);
    await pumpEventQueue();

    final req = watchEnvelope();
    expect(req.store, 'widgets');
    expect(req.spec.limit, 50);
    expect(req.spec.all, isFalse);

    await sub.cancel();
  });

  test('an all() watch keeps the spec unbounded', () async {
    fake.responses[WireOp.contractRequest] = startedReply('sub-1');
    final sub = builder.all().watch().listen((_) {});
    await pumpEventQueue();

    final req = watchEnvelope();
    expect(req.spec.all, isTrue);
    expect(req.spec.limit, isNull);
    await sub.cancel();
  });

  test('an explicit limit(n) watch keeps that limit in the spec', () async {
    fake.responses[WireOp.contractRequest] = startedReply('sub-1');
    final sub = builder.limit(7).watch().listen((_) {});
    await pumpEventQueue();

    final req = watchEnvelope();
    expect(req.spec.limit, 7);
    await sub.cancel();
  });

  List<String> cancelSubscriptions() => fake.sent
      .where((s) => s.$1 == WireOp.contractRequest)
      .map((s) => contract.ContractCodec.decodeRequest(
          (s.$2['request']! as Map).cast<String, Object?>()))
      .whereType<contract.WatchCancelRequest>()
      .map((r) => r.subscription)
      .toList();

  test('each registration is answered with its own kernel subscription',
      () async {
    var next = 0;
    fake.onSend = (op, args) async {
      if (op != WireOp.contractRequest) return null;
      final req = contract.ContractCodec.decodeRequest(
          (args['request']! as Map).cast<String, Object?>());
      if (req is contract.WatchRequest) {
        return startedReply('sub-${++next}');
      }
      return FakeFacadeHost.contractReply(const contract.OkResult());
    };

    final sub1 = builder.watch().listen((_) {});
    await pumpEventQueue();
    await sub1.cancel();
    await pumpEventQueue();
    expect(cancelSubscriptions(), ['sub-1']);

    final sub2 = builder.watch().listen((_) {});
    await pumpEventQueue();
    await sub2.cancel();
    await pumpEventQueue();
    expect(cancelSubscriptions(), ['sub-1', 'sub-2']);
  });

  test('the initial snapshot and later emissions ride the event stream',
      () async {
    final r1 = {'id': 'a', 'name': 'apple'};
    final r2 = {'id': 'b', 'name': 'banana'};
    fake.responses[WireOp.contractRequest] = startedReply('sub-1');

    final emissions = <List<Map<String, Object?>>>[];
    final sub = builder.limit(50).watch().listen(emissions.add);
    await pumpEventQueue();

    fake.deliverContractEvent(
        contract.WatchSnapshot(subscription: 'sub-1', items: [r1, r2]));
    await pumpEventQueue();
    expect(emissions, hasLength(1));
    expect(emissions.single, hasLength(2));
    expect(emissions.single[0]['name'], 'apple');
    expect(emissions.single[1]['id'], 'b');

    // A later snapshot for the same subscription is delivered too.
    final r3 = {'id': 'c', 'name': 'cherry'};
    fake.deliverContractEvent(
        contract.WatchSnapshot(subscription: 'sub-1', items: [r3]));
    await pumpEventQueue();
    expect(emissions, hasLength(2));
    expect(emissions.last.single['name'], 'cherry');

    // Snapshots for another subscription never leak into this stream.
    fake.deliverContractEvent(
        contract.WatchSnapshot(subscription: 'other', items: [r1]));
    await pumpEventQueue();
    expect(emissions, hasLength(2));

    await sub.cancel();
  });

  test('cancelling the watch sends a typed watch-cancel and drops the stream',
      () async {
    fake.responses[WireOp.contractRequest] = startedReply('sub-1');
    final sub = builder.watch().listen((_) {});
    await pumpEventQueue();

    await sub.cancel();
    await pumpEventQueue();

    final cancels = fake.sent
        .map((s) => s.$1 == WireOp.contractRequest && s.$2['request'] is Map
            ? contract.ContractCodec.decodeRequest(
                (s.$2['request']! as Map).cast<String, Object?>())
            : null)
        .whereType<contract.WatchCancelRequest>()
        .toList();
    expect(cancels.single.subscription, 'sub-1');

    // Emissions after cancel are dropped.
    fake.deliverContractEvent(
        contract.WatchSnapshot(subscription: 'sub-1', items: [
      {'id': 'z', 'name': 'zebra'}
    ]));
    await pumpEventQueue();
  });
}
