import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';

/// Outbox and op-queue drain tests.
void main() {
  const t0 = '2026-01-01 00:00:00.000Z';

  group('outbox/op-queue drain', () {
    test('fifo by created at', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final a = generateRecordId();
      final b = generateRecordId();
      final c = generateRecordId();
      await pocket.collection('widgets').put(record(id: a, name: 'a'));
      await pocket.collection('widgets').put(record(id: b, name: 'b'));
      await pocket.collection('widgets').put(record(id: c, name: 'c'));

      final ops = await pocket.outbox.drain();
      expect(ops.map((o) => o.recordId).toList(), [a, b, c],
          reason: 'FIFO by creation order');
    });

    test('depends on op blocks until acked', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final a = generateRecordId();
      final b = generateRecordId();
      await pocket.collection('widgets').put(record(id: a, name: 'a'));
      await pocket.collection('widgets').put(record(id: b, name: 'b'));

      final opA = await pocket.outbox.readOp(pocket.db, 'widgets', a);
      await pocket.outbox.setDependsOn('widgets', b, opA!.opId);

      final ops = await pocket.outbox.drain();
      expect(ops.map((o) => o.recordId).toList(), [a],
          reason: 'b is blocked until a is acked');
    });

    test('dependent released on ack', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final a = generateRecordId();
      final b = generateRecordId();
      await pocket.collection('widgets').put(record(id: a, name: 'a'));
      await pocket.collection('widgets').put(record(id: b, name: 'b'));

      final opA = await pocket.outbox.readOp(pocket.db, 'widgets', a);
      await pocket.outbox.setDependsOn('widgets', b, opA!.opId);

      await pocket.outbox.ack('widgets', a, serverUpdated: t0);
      final ops = await pocket.outbox.drain();
      expect(ops.map((o) => o.recordId).toList(), [b],
          reason: 'b released once a is acked');
    });

    test('file op gated on record create', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'a'));
      final opA = await pocket.outbox.readOp(pocket.db, 'widgets', id);

      // A file upload op waits on the record's create op.
      await pocket.opQueue.enqueue(
        store: 'widgets',
        recordId: id,
        kind: OpQueueKind.fileUpload,
        payload: {'hash': 'abc123', 'field': 'imgs'},
        dependsOnOp: opA!.opId,
      );

      // Blocked while the create op is still in the outbox.
      expect(await pocket.opQueue.drain(), isEmpty);

      // Record create acked -> file op becomes drainable.
      await pocket.outbox.ack('widgets', id, serverUpdated: t0);
      final files = await pocket.opQueue.drain();
      expect(files, hasLength(1));
      expect(files.single.kind, OpQueueKind.fileUpload);
      expect(files.single.recordId, id);

      await pocket.opQueue.markDone(files.single.opId);
      expect(await pocket.opQueue.drain(), isEmpty);
    });
  });
}
