import 'dart:async';

import 'package:localpocket/localpocket.dart';
import 'package:localpocket/src/contract/contract.dart' as contract;
import 'package:localpocket/src/web/conversions.dart';
import 'package:localpocket/src/web/facade/web_collections.dart';
import 'package:localpocket/src/web/protocol.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import 'support/fake_facade_host.dart';

/// Decodes the contract request carried by [fake]'s i-th sent envelope and
/// asserts it really traveled as a `contract_request`.
contract.Request sentRequest(FakeFacadeHost fake, int i) {
  final (op, args) = fake.sent[i];
  expect(op, WireOp.contractRequest);
  return contract.ContractCodec.decodeRequest(
      (args['request']! as Map).cast<String, Object?>());
}

void main() {
  late FakeFacadeHost fake;
  late WebCollection col;

  setUp(() {
    fake = FakeFacadeHost({'widgets': widgetsSchema()});
    col = WebCollection.ins(fake, widgetsSchema());
    // Default reply for mutation requests; individual tests override it.
    fake.responses[WireOp.contractRequest] =
        FakeFacadeHost.contractReply(const contract.MutationResult(ids: []));
  });

  group('WebCollection CRUD envelopes', () {
    test('put sends one typed mutate request carrying the record', () async {
      final record = {'id': 'abc', 'name': 'apple', 'qty': 3};
      await col.put(record);

      final req = sentRequest(fake, 0) as contract.MutateRequest;
      expect(req.store, 'widgets');
      expect(req.session, isNull,
          reason: 'the root path lets the kernel open its own transaction');
      expect((req.mutation as contract.MutationPut).record, record);
    });

    test('putAll sends one batch mutation with every record', () async {
      final r1 = {'id': 'a', 'name': 'apple'};
      final r2 = {'id': 'b', 'name': 'banana'};
      await col.putAll([r1, r2]);

      final req = sentRequest(fake, 0) as contract.MutateRequest;
      expect((req.mutation as contract.MutationPutAll).records, [r1, r2]);
    });

    test('patch sends a typed patch mutation with the changes', () async {
      final changes = {'name': 'updated', 'made_on': DateTime.utc(2026, 1, 1)};
      await col.patch('abc', changes);

      final req = sentRequest(fake, 0) as contract.MutateRequest;
      final patch = req.mutation as contract.MutationPatch;
      expect(patch.id, 'abc');
      expect(patch.changes, changes);
    });

    test('upsert sends a typed upsert mutation', () async {
      final record = {'id': 'abc', 'name': 'apple', 'qty': 3};
      await col.upsert(record);

      final req = sentRequest(fake, 0) as contract.MutateRequest;
      expect((req.mutation as contract.MutationUpsert).record, record);
    });

    test('upsertAll sends one batch upsert mutation', () async {
      final r1 = {'id': 'a', 'name': 'apple'};
      final r2 = {'id': 'b', 'name': 'banana'};
      await col.upsertAll([r1, r2]);

      final req = sentRequest(fake, 0) as contract.MutateRequest;
      expect((req.mutation as contract.MutationUpsertAll).records, [r1, r2]);
    });

    test('archive/restore/purge send the typed variants', () async {
      await col.archive('a1');
      await col.restore('a2');
      await col.purge('a3');

      expect(fake.sent, hasLength(3));
      expect(sentRequest(fake, 0) as contract.MutateRequest,
          isA<contract.MutateRequest>());
      expect(
          ((sentRequest(fake, 0) as contract.MutateRequest).mutation
                  as contract.MutationArchive)
              .id,
          'a1');
      expect(
          ((sentRequest(fake, 1) as contract.MutateRequest).mutation
                  as contract.MutationRestore)
              .id,
          'a2');
      expect(
          ((sentRequest(fake, 2) as contract.MutateRequest).mutation
                  as contract.MutationPurge)
              .id,
          'a3');
    });

    test('get decodes the row result with nested wire types', () async {
      fake.responses[WireOp.contractRequest] = FakeFacadeHost.contractReply(
        contract.RowResult({
          'id': 'abc',
          'name': 'apple',
          'made_on': DateTime.utc(2026, 1, 1),
        }),
      );
      final row = await col.get('abc');

      final req = sentRequest(fake, 0) as contract.GetRequest;
      expect(req.store, 'widgets');
      expect(req.id, 'abc');
      expect(row, isNotNull);
      expect(row!['id'], 'abc');
      expect(row['name'], 'apple');
      expect(row['made_on'], DateTime.utc(2026, 1, 1));
    });

    test('get returns null for an absent record', () async {
      fake.responses[WireOp.contractRequest] =
          FakeFacadeHost.contractReply(const contract.RowResult(null));
      final row = await col.get('missing');
      expect(row, isNull);
      expect(sentRequest(fake, 0) as contract.GetRequest,
          isA<contract.GetRequest>());
    });

    test(
        'put at full durability commits through a contract transaction '
        'session', () async {
      fake.onSend = (op, args) async {
        final req = contract.ContractCodec.decodeRequest(
            (args['request']! as Map).cast<String, Object?>());
        return switch (req) {
          contract.TransactionBeginRequest() => FakeFacadeHost.contractReply(
              const contract.TransactionBeginResult(session: 'tx1')),
          contract.MutateRequest() => FakeFacadeHost.contractReply(
              const contract.MutationResult(ids: [])),
          contract.TransactionCommitRequest() =>
            FakeFacadeHost.contractReply(const contract.OkResult()),
          _ => throw StateError('unexpected contract request ${req.tag}'),
        };
      };

      await col.put({'id': 'abc', 'name': 'apple'},
          durability: DurabilityClass.full);

      expect(fake.sent, hasLength(3));
      final begin = sentRequest(fake, 0) as contract.TransactionBeginRequest;
      expect(begin.durability, contract.TransactionDurability.full);
      expect(begin.readOnly, isFalse);
      final mutate = sentRequest(fake, 1) as contract.MutateRequest;
      expect(mutate.session, 'tx1');
      expect((mutate.mutation as contract.MutationPut).record, {
        'id': 'abc',
        'name': 'apple',
      });
      final commit = sentRequest(fake, 2) as contract.TransactionCommitRequest;
      expect(commit.session, 'tx1');
    });

    test(
        'a failing durable write rolls the session back and rethrows the '
        'typed error', () async {
      fake.onSend = (op, args) async {
        final req = contract.ContractCodec.decodeRequest(
            (args['request']! as Map).cast<String, Object?>());
        return switch (req) {
          contract.TransactionBeginRequest() => FakeFacadeHost.contractReply(
              const contract.TransactionBeginResult(session: 'tx1')),
          contract.MutateRequest() => FakeFacadeHost.contractErrorReply(
              contract.ValidationException('record rejected')),
          contract.TransactionRollbackRequest() =>
            FakeFacadeHost.contractReply(const contract.OkResult()),
          _ => throw StateError('unexpected contract request ${req.tag}'),
        };
      };

      await expectLater(
        col.put({'id': 'abc', 'name': 'apple'},
            durability: DurabilityClass.full),
        throwsA(isA<ValidationException>()),
      );

      expect(fake.sent, hasLength(3));
      final rollback =
          sentRequest(fake, 2) as contract.TransactionRollbackRequest;
      expect(rollback.session, 'tx1',
          reason: 'the failed session is settled before the error rethrows');
    });
  });

  group('WebCollection.watchOne', () {
    test(
        'registers a watch id, sends watch_one, decodes the initial item, '
        'delivers later worker events, and cancels via watch_cancel', () async {
      final record = {
        'id': 'abc',
        'name': 'apple',
        'made_on': DateTime.utc(2026, 2, 3),
      };
      fake.responses[WireOp.watchOne] = {'item': encodeWireValue(record)};

      final watchId = fake.nextRequestId;
      final events = <Map<String, Object?>?>[];
      final sub = col.watchOne('abc').listen(events.add);

      await pumpEventQueue();

      // Registration sent the watch_one envelope with store/id.
      final watchOne = fake.sent.where((s) => s.$1 == WireOp.watchOne).single;
      expect(watchOne.$2, {
        'watchId': watchId,
        'store': 'widgets',
        'id': 'abc',
      });
      expect(fake.workerStreams.containsKey(watchId), isTrue);

      // The initial item was decoded (including the wire DateTime) and added.
      expect(events, hasLength(1));
      expect(events.single!['id'], 'abc');
      expect(events.single!['name'], 'apple');
      expect(events.single!['made_on'], DateTime.utc(2026, 2, 3));

      // A later worker event is decoded and delivered.
      final updated = {...record, 'name': 'apple-2'};
      fake.deliverWorkerEvent(watchId, updated);
      await pumpEventQueue();
      expect(events, hasLength(2));
      expect(events.last!['name'], 'apple-2');

      // Cancelling unregisters the watch and sends watch_cancel.
      await sub.cancel();
      await pumpEventQueue();
      expect(fake.workerStreams.containsKey(watchId), isFalse);
      final cancel = fake.sent.where((s) => s.$1 == WireOp.watchCancel).single;
      expect(cancel.$2, {'watchId': watchId});
    });

    test('a null initial item is delivered as null (record absent)', () async {
      fake.responses[WireOp.watchOne] = {'item': null};
      final events = <Map<String, Object?>?>[];
      final sub = col.watchOne('gone').listen(events.add);
      await pumpEventQueue();
      expect(events, hasLength(1));
      expect(events.single, isNull);
      await sub.cancel();
    });

    test('malformed watch_one payloads are treated as null instead of crashing',
        () async {
      fake.responses[WireOp.watchOne] = 'unexpected';
      final events = <Map<String, Object?>?>[];
      final sub = col.watchOne('broken').listen(events.add);
      await pumpEventQueue();
      expect(events, hasLength(1));
      expect(events.single, isNull);
      await sub.cancel();
    });

    test('a failing watch_one send surfaces as a stream error', () async {
      final boom = StateError('worker down');
      fake.onSend = (op, args) async {
        if (op == WireOp.watchOne) throw boom;
        return fake.responses[op];
      };
      final events = <Object?>[];
      final errors = <Object?>[];
      final sub = col.watchOne('abc').listen(events.add, onError: errors.add);
      await pumpEventQueue();
      expect(events, isEmpty);
      expect(errors, [boom],
          reason: 'the send failure is delivered as an '
              'error, never swallowed');
      await sub.cancel();
    });

    test(
        'cancelling before registration completes runs the delayed '
        'unregister', () async {
      // Hold the watch_one send open so the registration stays in-flight.
      final gate = Completer<void>();
      fake.onSend = (op, args) async {
        if (op == WireOp.watchOne) await gate.future;
        return fake.responses[op];
      };
      fake.responses[WireOp.watchOne] = {
        'item': encodeWireValue({'id': 'a'})
      };

      final sub = col.watchOne('abc').listen((_) {});
      await sub.cancel();
      // The unregistration was requested while registration was in-flight, so
      // it must be deferred and run once the registration settles.
      gate.complete();
      await pumpEventQueue();

      final cancels =
          fake.sent.where((s) => s.$1 == WireOp.watchCancel).toList();
      expect(cancels, hasLength(1),
          reason: 'the deferred unregister cancels the watch');
      expect(cancels.single.$2, {'watchId': fake.nextRequestId - 1});
    });
  });

  group('WebCollection misc facade surface', () {
    test('recordEvents streams the host change-bus events', () async {
      final events = <RecordChangeEvent>[];
      final sub = col.recordEvents.listen(events.add);
      addTearDown(sub.cancel);

      fake.changeBus.emitEvent(RecordChangeEvent(
        store: 'widgets',
        id: 'a',
        origin: ChangeOrigin.local,
        action: ChangeAction.create,
        newRecord: {'name': 'x'},
        changedFields: {'name'},
      ));
      await pumpEventQueue();
      expect(events, hasLength(1),
          reason: 'recordEvents is backed by the host event stream');
      expect(events.single.id, 'a');
    });

    test('query() returns a usable query builder', () async {
      fake.responses[WireOp.contractRequest] =
          FakeFacadeHost.contractReply(const contract.CountResult(2));
      final n = await col.query().count();
      expect(n, 2);
      expect(fake.sent.single.$1, WireOp.contractRequest);
    });

    test('search() returns a search builder bound to the schema', () async {
      final fts = widgetsSchema(fts: FtsSpec(['name']));
      final ftsFake = FakeFacadeHost({'widgets': fts});
      final ftsCol = WebCollection.ins(ftsFake, fts);
      ftsFake.responses[WireOp.contractRequest] =
          FakeFacadeHost.contractReply(const contract.SearchHitsResult([]));

      final results = await ftsCol.search('engines').limit(5).fetch();
      expect(results, isEmpty);
      expect(ftsFake.sent.single.$1, WireOp.contractRequest);
    });
  });
}
