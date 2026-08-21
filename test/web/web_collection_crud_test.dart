import 'package:localpocket/src/web/conversions.dart';
import 'package:localpocket/src/web/facade/web_collections.dart';
import 'package:localpocket/src/web/protocol.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import 'support/fake_facade_host.dart';

void main() {
  late FakeFacadeHost fake;
  late WebCollection col;

  setUp(() {
    fake = FakeFacadeHost({'widgets': widgetsSchema()});
    col = WebCollection.ins(fake, widgetsSchema());
  });

  group('WebCollection CRUD envelopes', () {
    test('put sends a single put mutation with a wire-encoded record', () async {
      final record = {'id': 'abc', 'name': 'apple', 'qty': 3};
      await col.put(record);

      final (op, args) = fake.sent.single;
      expect(op, WireOp.mutateBatch);
      expect(args['store'], 'widgets');
      expect(args, isNot(contains('sessionId')));
      final mutations = (args['mutations'] as List).cast<Map>();
      expect(mutations.single, {
        'action': 'put',
        'record': encodeWireValue(record),
      });
    });

    test('putAll sends one put mutation per record', () async {
      final r1 = {'id': 'a', 'name': 'apple'};
      final r2 = {'id': 'b', 'name': 'banana'};
      await col.putAll([r1, r2]);

      final (op, args) = fake.sent.single;
      expect(op, WireOp.mutateBatch);
      final mutations = (args['mutations'] as List).cast<Map>();
      expect(mutations, hasLength(2));
      expect(mutations[0], {'action': 'put', 'record': encodeWireValue(r1)});
      expect(mutations[1], {'action': 'put', 'record': encodeWireValue(r2)});
    });

    test('patch sends a patch action with the wire-encoded changes', () async {
      final changes = {'name': 'updated', 'made_on': DateTime.utc(2026, 1, 1)};
      await col.patch('abc', changes);

      final (op, args) = fake.sent.single;
      expect(op, WireOp.mutateBatch);
      final mutations = (args['mutations'] as List).cast<Map>();
      expect(mutations.single, {
        'action': 'patch',
        'id': 'abc',
        'record': encodeWireValue(changes),
      });
    });

    test('archive/restore/purge send the correct action strings', () async {
      await col.archive('a1');
      await col.restore('a2');
      await col.purge('a3');

      expect(fake.sent, hasLength(3));
      final archiveArgs = fake.sent[0].$2;
      final restoreArgs = fake.sent[1].$2;
      final purgeArgs = fake.sent[2].$2;

      expect(
          (archiveArgs['mutations'] as List).cast<Map>().single,
          {'action': 'archive', 'id': 'a1'});
      expect(
          (restoreArgs['mutations'] as List).cast<Map>().single,
          {'action': 'restore', 'id': 'a2'});
      expect(
          (purgeArgs['mutations'] as List).cast<Map>().single,
          {'action': 'purge', 'id': 'a3'});
    });

    test('get decodes the wire result into a map with nested types', () async {
      fake.responses[WireOp.get] =
          encodeWireValue({'id': 'abc', 'name': 'apple', 'made_on': 1});
      final row = await col.get('abc');

      expect(fake.sent.single.$1, WireOp.get);
      expect(fake.sent.single.$2, {'store': 'widgets', 'id': 'abc'});
      expect(row, isNotNull);
      expect(row!['id'], 'abc');
      expect(row['name'], 'apple');
    });

    test('get returns null for a null wire result', () async {
      fake.responses[WireOp.get] = null;
      final row = await col.get('missing');
      expect(row, isNull);
      expect(fake.sent.single.$1, WireOp.get);
    });
  });

  group('WebCollection.watchOne', () {
    test(
        'registers a watch id, sends watch_one, decodes the initial item, '
        'delivers later worker events, and cancels via watch_cancel',
        () async {
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
  });
}
