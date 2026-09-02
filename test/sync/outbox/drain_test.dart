import 'package:localpocket/src/kernel/errors.dart';
import 'package:localpocket/src/kernel/ids.dart';
import 'package:localpocket/src/kernel/local_pocket.dart';
import 'package:localpocket/src/kernel/sync/sync_tables.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';

/// Outbox and op-queue drain tests.
void main() {
  const t0 = '2026-01-01 00:00:00.000Z';

  Future<void> queueOp(
    LocalPocket pocket, {
    required String opId,
    required String store,
    required String recordId,
    required OpQueueKind kind,
    String state = 'pending',
    String? dependsOnOp,
    int nextRetryAt = 0,
    int createdAt = 0,
    String payload = '{}',
  }) => pocket.db.insert('lp_op_queue', {
      'op_id': opId,
      'store': store,
      'record_id': recordId,
      'kind': kind.name,
      'payload_json': payload,
      'state': state,
      'attempt_count': 0,
      'next_retry_at': nextRetryAt,
      'depends_on_op': dependsOnOp,
      'created_at': createdAt,
    });

  Future<void> clearOutbox(LocalPocket pocket) =>
      pocket.db.execute('DELETE FROM lp_outbox');

  Future<void> clearQueue(LocalPocket pocket) =>
      pocket.db.execute('DELETE FROM lp_op_queue');

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
        payload: {'hash': 'abc123', 'field': 'attachments'},
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

  group('op-queue dependency graph', () {
    late LocalPocket pocket;

    setUp(() async {
      pocket = await openPocket();
      await clearQueue(pocket);
    });

    tearDown(() => pocket.close());

    test('store filtering and limits', () async {
      await queueOp(pocket,
          opId: 'op1',
          store: 'widgets',
          recordId: 'r1',
          kind: OpQueueKind.fileUpload);
      await queueOp(pocket,
          opId: 'op2',
          store: 'widgets',
          recordId: 'r2',
          kind: OpQueueKind.fileUpload);
      await queueOp(pocket,
          opId: 'op3',
          store: 'notes',
          recordId: 'r3',
          kind: OpQueueKind.fileRemove);

      final widgets = await pocket.opQueue.drain(store: 'widgets');
      expect(widgets.map((o) => o.opId).toList(), ['op1', 'op2']);

      final notes = await pocket.opQueue.drain(store: 'notes');
      expect(notes.map((o) => o.opId).toList(), ['op3']);

      final limited = await pocket.opQueue.drain(limit: 1);
      expect(limited, hasLength(1));
      expect(limited.single.opId, 'op1', reason: 'FIFO by seq');
    });

    test('missing dependency id does not block', () async {
      await queueOp(pocket,
          opId: 'op1',
          store: 'widgets',
          recordId: 'r1',
          kind: OpQueueKind.fileUpload,
          dependsOnOp: 'ghost-op');
      final ops = await pocket.opQueue.drain();
      expect(ops.map((o) => o.opId), ['op1'],
          reason: 'a dependency that does not exist anywhere is not pending');
    });

    test('dependencies on pending queue ops block until done', () async {
      await queueOp(pocket,
          opId: 'a',
          store: 'widgets',
          recordId: 'r1',
          kind: OpQueueKind.fileUpload);
      await queueOp(pocket,
          opId: 'b',
          store: 'widgets',
          recordId: 'r2',
          kind: OpQueueKind.fileUpload,
          dependsOnOp: 'a');

      expect((await pocket.opQueue.drain()).map((o) => o.opId), ['a'],
          reason: 'b is gated on pending a');
      await pocket.opQueue.markDone('a');
      expect((await pocket.opQueue.drain()).map((o) => o.opId), ['b'],
          reason: 'b released once a is done');
    });

    test('failed-but-retryable queue ops still block dependents', () async {
      await queueOp(pocket,
          opId: 'a',
          store: 'widgets',
          recordId: 'r1',
          kind: OpQueueKind.fileUpload);
      await queueOp(pocket,
          opId: 'b',
          store: 'widgets',
          recordId: 'r2',
          kind: OpQueueKind.fileUpload,
          dependsOnOp: 'a');
      // a failed with a FUTURE deadline: a itself is deferred and b is gated.
      await pocket.opQueue
          .markFailed('a', 'transient', attempts: 1, nextRetryAt: 1 << 62);

      expect(await pocket.opQueue.drain(), isEmpty,
          reason: 'a deferred by backoff; b must wait');

      // Once a completes, b is released.
      await pocket.opQueue.markDone('a');
      expect((await pocket.opQueue.drain()).map((o) => o.opId), ['b']);
    });

    test('dependencies on pending outbox ops block; ack releases', () async {
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'a'));
      final opA = await pocket.outbox.readOp(pocket.db, 'widgets', id);
      await queueOp(pocket,
          opId: 'q1',
          store: 'widgets',
          recordId: id,
          kind: OpQueueKind.fileUpload,
          dependsOnOp: opA!.opId);

      expect(await pocket.opQueue.drain(), isEmpty);
      await pocket.outbox.ack('widgets', id, serverUpdated: t0);
      expect((await pocket.opQueue.drain()).map((o) => o.opId), ['q1']);
    });

    test('multi-level dependencies drain in order', () async {
      await queueOp(pocket,
          opId: 'a',
          store: 'widgets',
          recordId: 'r1',
          kind: OpQueueKind.fileUpload);
      await queueOp(pocket,
          opId: 'b',
          store: 'widgets',
          recordId: 'r2',
          kind: OpQueueKind.fileUpload,
          dependsOnOp: 'a');
      await queueOp(pocket,
          opId: 'c',
          store: 'widgets',
          recordId: 'r3',
          kind: OpQueueKind.fileUpload,
          dependsOnOp: 'b');

      expect((await pocket.opQueue.drain()).map((o) => o.opId), ['a']);
      await pocket.opQueue.markDone('a');
      expect((await pocket.opQueue.drain()).map((o) => o.opId), ['b']);
      await pocket.opQueue.markDone('b');
      expect((await pocket.opQueue.drain()).map((o) => o.opId), ['c']);
      await pocket.opQueue.markDone('c');
      expect(await pocket.opQueue.drain(), isEmpty);
    });

    test('dependency cycles deadlock without crashing or infinite work',
        () async {
      await queueOp(pocket,
          opId: 'a',
          store: 'widgets',
          recordId: 'r1',
          kind: OpQueueKind.fileUpload,
          dependsOnOp: 'b');
      await queueOp(pocket,
          opId: 'b',
          store: 'widgets',
          recordId: 'r2',
          kind: OpQueueKind.fileUpload,
          dependsOnOp: 'a');

      expect(await pocket.opQueue.drain(), isEmpty,
          reason: 'cycle: both blocked, no deadlock or crash');

      // Breaking the cycle by completing one op releases the other.
      await pocket.opQueue.markDone('a');
      expect((await pocket.opQueue.drain()).map((o) => o.opId), ['b']);
    });

    test('duplicate dependencies release together', () async {
      await queueOp(pocket,
          opId: 'a',
          store: 'widgets',
          recordId: 'r1',
          kind: OpQueueKind.fileUpload);
      await queueOp(pocket,
          opId: 'b1',
          store: 'widgets',
          recordId: 'r2',
          kind: OpQueueKind.fileUpload,
          dependsOnOp: 'a');
      await queueOp(pocket,
          opId: 'b2',
          store: 'widgets',
          recordId: 'r3',
          kind: OpQueueKind.fileUpload,
          dependsOnOp: 'a');

      expect(await pocket.opQueue.drain(), hasLength(1));
      await pocket.opQueue.markDone('a');
      final released = await pocket.opQueue.drain();
      expect(released.map((o) => o.opId).toSet(), {'b1', 'b2'});
    });

    test('future retry deadlines defer retryable ops', () async {
      final now = DateTime.now().millisecondsSinceEpoch;
      await queueOp(pocket,
          opId: 'later',
          store: 'widgets',
          recordId: 'r1',
          kind: OpQueueKind.fileUpload,
          state: 'failed',
          nextRetryAt: now + 60000);
      await queueOp(pocket,
          opId: 'now',
          store: 'widgets',
          recordId: 'r2',
          kind: OpQueueKind.fileUpload);

      expect((await pocket.opQueue.drain()).map((o) => o.opId), ['now'],
          reason: 'future-deadline op deferred');
    });

    test('markDone and markFailed transitions are durable', () async {
      await queueOp(pocket,
          opId: 'ok',
          store: 'widgets',
          recordId: 'r1',
          kind: OpQueueKind.fileUpload);
      await queueOp(pocket,
          opId: 'bad',
          store: 'widgets',
          recordId: 'r2',
          kind: OpQueueKind.fileUpload);

      await pocket.opQueue.markDone('ok');
      await pocket.opQueue
          .markFailed('bad', 'boom', attempts: 3, nextRetryAt: 77);

      final rows = await pocket.db.query('lp_op_queue',
          where: 'op_id IN (?, ?)', whereArgs: ['ok', 'bad']);
      final byId = {for (final r in rows) r['op_id']: r};
      expect(byId['ok']!['state'], 'done');
      expect(byId['bad']!['state'], 'failed');
      expect(byId['bad']!['attempt_count'], 3);
      expect(byId['bad']!['next_retry_at'], 77);
      expect(byId['bad']!['last_error'], 'boom');
    });

    test('fifo skips blocked early candidates', () async {
      // 'blocker' is deferred by a future deadline; 'blocked' depends on it,
      // so both are skipped and the later FIFO candidates drain.
      final now = DateTime.now().millisecondsSinceEpoch;
      await queueOp(pocket,
          opId: 'blocker',
          store: 'widgets',
          recordId: 'r0',
          kind: OpQueueKind.fileUpload,
          nextRetryAt: now + 60000);
      await queueOp(pocket,
          opId: 'blocked',
          store: 'widgets',
          recordId: 'r1',
          kind: OpQueueKind.fileUpload,
          dependsOnOp: 'blocker');
      await queueOp(pocket,
          opId: 'free',
          store: 'widgets',
          recordId: 'r2',
          kind: OpQueueKind.fileUpload);
      await queueOp(pocket,
          opId: 'free2',
          store: 'widgets',
          recordId: 'r3',
          kind: OpQueueKind.fileUpload);

      final ops = await pocket.opQueue.drain();
      expect(ops.map((o) => o.opId).toList(), ['free', 'free2'],
          reason: 'blocked early candidate skipped, later FIFO kept');
    });

    test('malformed queue rows surface as typed corruption errors', () async {
      await pocket.db.insert('lp_op_queue', {
        'op_id': 'badkind',
        'store': 'widgets',
        'record_id': 'r1',
        'kind': 'fileDelete',
        'payload_json': '{}',
        'state': 'pending',
        'created_at': 0,
      });
      await expectLater(
        pocket.opQueue.drain(),
        throwsA(isA<StorageError>()),
      );
    });
  });

  group('outbox drain state matrix', () {
    late LocalPocket pocket;

    setUp(() async {
      pocket = await openPocket();
      await clearOutbox(pocket);
      await pocket.db.execute('DELETE FROM lp_sync_row');
    });

    tearDown(() => pocket.close());

    Future<String> seedDirty(String name) async {
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: name));
      return id;
    }

    test('dirty and in-flight drain; clean with op drains too', () async {
      final dirty = await seedDirty('dirty');
      final inflight = await seedDirty('inflight');
      final clean = await seedDirty('clean');
      await pocket.outbox.setSyncState('widgets', inflight, SyncState.inFlight);
      await pocket.outbox.ack('widgets', clean, serverUpdated: t0);
      // Re-dirty the clean row with a fresh outbox op.
      await pocket.collection('widgets').patch(clean, {'qty': 1});

      final ops = await pocket.outbox.drain();
      expect(ops.map((o) => o.recordId).toSet(), {dirty, inflight, clean});
    });

    test('conflict, error and quarantine rows never drain', () async {
      final conflict = await seedDirty('conflict');
      final error = await seedDirty('error');
      final quarantine = await seedDirty('quarantine');
      await pocket.outbox.setSyncState('widgets', conflict, SyncState.conflict);
      await pocket.outbox.setSyncState('widgets', error, SyncState.error);
      await pocket.outbox
          .setSyncState('widgets', quarantine, SyncState.quarantine);

      expect(await pocket.outbox.drain(), isEmpty);
    });

    test('future retry deadline defers', () async {
      final id = await seedDirty('later');
      await pocket.outbox.recordFailure('widgets', id,
          error: 'busy', attempts: 1, nextRetryAt: 1 << 62);

      expect(await pocket.outbox.drain(), isEmpty);

      // Past the deadline (set via direct SQL) the row drains again.
      await pocket.db.execute(
          'UPDATE lp_sync_row SET next_retry_at = 0 WHERE record_id = ?', [id]);
      expect((await pocket.outbox.drain()).single.recordId, id);
    });

    test('rows without a sync row are excluded by the join', () async {
      await pocket.db.insert('lp_outbox', {
        'store': 'widgets',
        'record_id': 'orphan',
        'kind': 'upsert',
        'payload_json': '{"name":"orphan"}',
        'base_hash': '',
        'dirty_fields': '[]',
        'op_id': 'orphan-op',
        'created_at': 1,
        'updated_at': 1,
      });
      expect(await pocket.outbox.drain(), isEmpty,
          reason: 'inner join to lp_sync_row drops orphaned outbox rows');
    });

    test('missing-outbox dependency does not block', () async {
      final id = await seedDirty('a');
      final op = await pocket.outbox.readOp(pocket.db, 'widgets', id);
      await pocket.outbox.setDependsOn('widgets', id, 'does-not-exist');
      expect((await pocket.outbox.drain()).single.opId, op!.opId);
    });

    test('per-store filtering and limit truncation', () async {
      final a = await seedDirty('a');
      final b = await seedDirty('b');
      final c = await seedDirty('c');

      final only = await pocket.outbox.drain(store: 'widgets');
      expect(only.map((o) => o.recordId).toSet(), {a, b, c});

      final other = await pocket.outbox.drain(store: 'notes');
      expect(other, isEmpty);

      final limited = await pocket.outbox.drain(limit: 2);
      expect(limited, hasLength(2));
    });

    test('stable fifo ties ordered by rowid', () async {
      await clearOutbox(pocket);
      await pocket.db.execute('DELETE FROM lp_sync_row');
      final ids = <String>[];
      for (var i = 0; i < 4; i++) {
        final id = generateRecordId();
        ids.add(id);
        await pocket.collection('widgets').put(record(id: id, name: 'n$i'));
        // Force identical created_at for a stable tie.
        await pocket.db.execute(
            'UPDATE lp_outbox SET created_at = 5 WHERE record_id = ?', [id]);
      }
      final ops = await pocket.outbox.drain();
      expect(ops.map((o) => o.recordId).toList(), ids,
          reason: 'equal created_at ties break by rowid (insertion order)');
    });

    test('malformed outbox rows surface as typed corruption errors', () async {
      final id = await seedDirty('a');
      await pocket.db.execute(
          "UPDATE lp_outbox SET kind = 'delete' WHERE record_id = ?", [id]);
      await expectLater(
        pocket.outbox.drain(),
        throwsA(isA<StorageError>()),
      );
    });

    test('dependency on failed-but-retryable queue op blocks outbox drain',
        () async {
      final a = await seedDirty('a');
      final opA = await pocket.outbox.readOp(pocket.db, 'widgets', a);
      await queueOp(pocket,
          opId: 'qa',
          store: 'widgets',
          recordId: a,
          kind: OpQueueKind.fileUpload);
      await pocket.opQueue.markFailed('qa', 'x', attempts: 1, nextRetryAt: 0);
      // outbox op depends on the failed queue op.
      await pocket.db.execute(
          "UPDATE lp_outbox SET depends_on_op = 'qa' WHERE record_id = ?", [a]);

      expect(await pocket.outbox.drain(), isEmpty,
          reason: 'failed queue op still gates the outbox op');
      await pocket.opQueue.markDone('qa');
      expect((await pocket.outbox.drain()).single.recordId, a,
          reason: 'released once the queue op completes');
      expect(opA, isNotNull);
    });
  });
}
