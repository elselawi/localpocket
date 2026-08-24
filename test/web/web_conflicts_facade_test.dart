import 'package:localpocket/localpocket.dart' show ConflictRecord;
import 'package:localpocket/src/web/conflicts_bridge.dart';
import 'package:localpocket/src/web/conversions.dart';
import 'package:localpocket/src/web/facade/web_conflicts.dart';
import 'package:localpocket/src/web/protocol.dart';
import 'package:test/test.dart';

import 'support/fake_facade_host.dart';

void main() {
  late FakeFacadeHost fake;
  late WebConflicts conflicts;

  setUp(() {
    fake = FakeFacadeHost({});
    conflicts = WebConflicts.ins(fake);
  });

  ConflictRecord conflict(String id) => ConflictRecord(
        store: 'widgets',
        recordId: id,
        base: {'name': 'base', 'made_on': DateTime.utc(2026, 1, 1)},
        local: {'name': 'local'},
        remote: {'name': 'remote'},
        dirtyLocal: {'name'},
        dirtyRemote: {'name'},
        detectedAt: 123,
      );

  test('listOpen decodes wire rows through decodeConflictRecord', () async {
    final c1 = conflict('a');
    final c2 = conflict('b');
    fake.responses[WireOp.conflictsList] = {
      'conflicts': [encodeConflictRecord(c1), encodeConflictRecord(c2)],
    };

    final list = await conflicts.listOpen();
    expect(list, hasLength(2));
    expect(list[0].recordId, 'a');
    expect(list[0].store, 'widgets');
    expect(list[0].base, {'name': 'base', 'made_on': DateTime.utc(2026, 1, 1)},
        reason: 'nested wire types must survive the round-trip');
    expect(list[0].dirtyLocal, {'name'});
    expect(list[1].recordId, 'b');
    expect(fake.sent.single.$2, isNot(contains('store')),
        reason: 'an omitted store filter must not be sent');
  });

  test(
      'listOpen sends the store filter when provided and tolerates an '
      'empty/missing list', () async {
    fake.responses[WireOp.conflictsList] = {'conflicts': <Object?>[]};
    expect(await conflicts.listOpen(store: 'widgets'), isEmpty);
    expect(fake.sent.single.$2, {'store': 'widgets'});

    fake.responses[WireOp.conflictsList] = {};
    expect(await conflicts.listOpen(), isEmpty);
  });

  test('get decodes the record and returns null for a null result', () async {
    fake.responses[WireOp.conflictsGet] = encodeConflictRecord(conflict('x'));
    final record = await conflicts.get('widgets', 'x');
    expect(record, isNotNull);
    expect(record!.recordId, 'x');
    expect(fake.sent.single.$2, {'store': 'widgets', 'id': 'x'});

    fake.responses[WireOp.conflictsGet] = null;
    expect(await conflicts.get('widgets', 'gone'), isNull);
  });

  test('resolve sends the merged document wire-encoded', () async {
    await conflicts.resolve(
      store: 'widgets',
      id: 'a',
      merged: {'name': 'merged', 'made_on': DateTime.utc(2026, 2, 2)},
    );
    final (op, args) = fake.sent.single;
    expect(op, WireOp.conflictsResolve);
    expect(args['store'], 'widgets');
    expect(args['id'], 'a');
    expect(
        args['merged'],
        encodeWireValue(
            {'name': 'merged', 'made_on': DateTime.utc(2026, 2, 2)}));
  });

  test('acceptLocal and acceptRemote send the right ops', () async {
    await conflicts.acceptLocal('widgets', 'a');
    expect(fake.sent.single.$1, WireOp.conflictsAcceptLocal);
    expect(fake.sent.single.$2, {'store': 'widgets', 'id': 'a'});

    fake.sent.clear();
    await conflicts.acceptRemote('widgets', 'b');
    expect(fake.sent.single.$1, WireOp.conflictsAcceptRemote);
    expect(fake.sent.single.$2, {'store': 'widgets', 'id': 'b'});
  });

  test(
      'watch registers a workerEventDecoder, sends conflicts_watch, delivers '
      'typed lists, and the cancel path removes the decoder and sends '
      'watch_cancel', () async {
    final watchId = fake.nextRequestId;
    final c1 = conflict('a');

    final emissions = <List<ConflictRecord>>[];
    final sub = conflicts.watch().listen(emissions.add);
    await pumpEventQueue();

    // Registration sent conflicts_watch and registered a decoder.
    final watch = fake.sent.where((s) => s.$1 == WireOp.conflictsWatch).single;
    expect(watch.$2, {'watchId': watchId});
    expect(fake.workerEventDecoders.containsKey(watchId), isTrue);
    expect(fake.workerStreams.containsKey(watchId), isTrue);
    final controller = fake.workerStreams[watchId]!;
    expect(controller.isClosed, isFalse);

    // A raw wire list is decoded into typed ConflictRecords.
    fake.deliverWorkerEvent(watchId, [encodeConflictRecord(c1)]);
    await pumpEventQueue();
    expect(emissions, hasLength(1));
    expect(emissions.single.single.recordId, 'a');

    // Cancelling removes the decoder and sends watch_cancel.
    await sub.cancel();
    await pumpEventQueue();
    await controller.close();
    expect(controller.isClosed, isTrue);
    expect(fake.workerEventDecoders.containsKey(watchId), isFalse);
    expect(fake.workerStreams.containsKey(watchId), isFalse);
    final cancel = fake.sent.where((s) => s.$1 == WireOp.watchCancel).single;
    expect(cancel.$2, {'watchId': watchId});
  });
}
