import 'package:localpocket/src/internal/raw_surface.dart';
import 'package:localpocket/src/contract/contract.dart' as contract;
import 'package:localpocket/src/web/facade/web_conflicts.dart';
import 'package:localpocket/src/web/protocol.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import 'support/fake_facade_host.dart';

ConflictRecord conflict(String id) => ConflictRecord(
      store: 'widgets',
      recordId: id,
      base: {'id': id, 'name': 'base'},
      local: {'id': id, 'name': 'local'},
      remote: {'id': id, 'name': 'remote'},
      dirtyLocal: {'name'},
      dirtyRemote: {'name'},
      detectedAt: 1700000000000,
    );

/// Decodes the contract request carried by [fake]'s i-th sent envelope.
contract.Request sentRequest(FakeFacadeHost fake, int i) =>
    contract.ContractCodec.decodeRequest(
        (fake.sent[i].$2['request']! as Map).cast<String, Object?>());

void main() {
  late FakeFacadeHost fake;
  late WebConflicts conflicts;

  setUp(() {
    fake = FakeFacadeHost({'widgets': widgetsSchema()});
    conflicts = WebConflicts.ins(fake);
    // Default reply for resolution commands; individual tests override it.
    fake.responses[WireOp.contractRequest] =
        FakeFacadeHost.contractReply(const contract.OkResult());
  });

  group('WebConflicts envelopes', () {
    test('listOpen sends a typed list request and decodes the snapshots',
        () async {
      final c = conflict('x');
      fake.onSend = (op, args) async {
        final req = contract.ContractCodec.decodeRequest(
            (args['request']! as Map).cast<String, Object?>());
        expect(req, isA<contract.ConflictsListRequest>());
        return FakeFacadeHost.contractReply(
            contract.ConflictsResult([_data(c)]));
      };

      final list = await conflicts.listOpen(store: 'widgets');
      expect(list, hasLength(1));
      expect(list.single.store, 'widgets');
      expect(list.single.recordId, 'x');
      expect(list.single.local, {'id': 'x', 'name': 'local'});
      expect(list.single.dirtyRemote, {'name'});
    });

    test('get decodes a snapshot; an empty reply decodes to null', () async {
      fake.onSend = (op, args) async {
        final req = contract.ContractCodec.decodeRequest(
            (args['request']! as Map).cast<String, Object?>());
        return FakeFacadeHost.contractReply(
            contract.ConflictResult(_data(conflict('y'))));
      };
      final got = await conflicts.get('widgets', 'y');
      expect(got, isNotNull);
      expect(got!.recordId, 'y');

      fake.onSend = (op, args) async =>
          FakeFacadeHost.contractReply(const contract.ConflictResult(null));
      expect(await conflicts.get('widgets', 'none'), isNull);
    });

    test('resolve/acceptLocal/acceptRemote ride the typed commands', () async {
      await conflicts.resolve(
          store: 'widgets', id: 'x', merged: {'id': 'x', 'name': 'merged'});
      await conflicts.acceptLocal('widgets', 'x');
      await conflicts.acceptRemote('widgets', 'x');

      expect(fake.sent, hasLength(3));
      final resolve = sentRequest(fake, 0) as contract.ResolveConflictRequest;
      expect(resolve.store, 'widgets');
      expect(resolve.id, 'x');
      expect(resolve.merged, {'id': 'x', 'name': 'merged'});
      expect(sentRequest(fake, 1) as contract.AcceptLocalRequest,
          isA<contract.AcceptLocalRequest>());
      expect(sentRequest(fake, 2) as contract.AcceptRemoteRequest,
          isA<contract.AcceptRemoteRequest>());
    });
  });

  group('WebConflicts.watch', () {
    test(
        'sends a typed watch request and decodes conflicts snapshots; '
        'cancel sends the typed cancel', () async {
      fake.onSend = (op, args) async {
        final req = contract.ContractCodec.decodeRequest(
            (args['request']! as Map).cast<String, Object?>());
        return switch (req) {
          contract.ConflictsWatchRequest() => FakeFacadeHost.contractReply(
              const contract.WatchStartedResult(subscription: 'c1')),
          contract.WatchCancelRequest() =>
            FakeFacadeHost.contractReply(const contract.OkResult()),
          _ => const contract.OkResult(),
        };
      };

      final received = <List<ConflictRecord>>[];
      final sub = conflicts.watch(store: 'widgets').listen(received.add);
      await pumpEventQueue();

      final watch = sentRequest(fake, 0) as contract.ConflictsWatchRequest;
      expect(watch.store, 'widgets');

      fake.deliverContractEvent(contract.ConflictsSnapshot(
        subscription: 'c1',
        conflicts: [_data(conflict('x'))],
      ));
      await pumpEventQueue();
      expect(received, hasLength(1));
      expect(received.single.single.recordId, 'x');

      // Snapshots of other subscriptions are ignored.
      fake.deliverContractEvent(const contract.ConflictsSnapshot(
        subscription: 'c2',
        conflicts: [],
      ));
      await pumpEventQueue();
      expect(received, hasLength(1));

      await sub.cancel();
      await pumpEventQueue();
      final cancel = sentRequest(fake, fake.sent.length - 1)
          as contract.WatchCancelRequest;
      expect(cancel.subscription, 'c1');
    });

    test('a failing watch request surfaces as a stream error', () async {
      final boom = StateError('worker down');
      fake.onSend = (op, args) async {
        if (op == WireOp.contractRequest) throw boom;
        return fake.responses[op];
      };
      final errors = <Object?>[];
      final sub = conflicts.watch().listen((_) {}, onError: errors.add);
      await pumpEventQueue();
      expect(errors, [boom]);
      await sub.cancel();
    });
  });
}

contract.ConflictData _data(ConflictRecord c) => contract.ConflictData(
      store: c.store,
      recordId: c.recordId,
      base: c.base,
      local: c.local,
      remote: c.remote,
      dirtyLocal: c.dirtyLocal,
      dirtyRemote: c.dirtyRemote,
      detectedAt: c.detectedAt,
      resolved: c.resolved,
    );
