import 'dart:async';

import 'package:localpocket/localpocket.dart';
import 'package:localpocket/sync.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';
import 'engine_helpers.dart';
import 'mock_backend.dart';

/// OCC / idempotency / delete-conflict contract
///
/// `RemoteVersionConflict` and the `baseUpdated` conditional-write parameter
/// are IMPLEMENTED (not targets): these tests pin the retry bound when the
/// conflict repeats, the whole-batch fallback when a multi-op batch conflicts,
/// the pre-policy `missing_target` baseline (the MissingRemotePolicy matrix is
/// still a target), and that duplicate-create recovery leaves exactly one
/// remote record in every branch.
///
/// A batch-enabled mock whose `pushBatch` is gateable in flight so tests can
/// land a concurrent edit after the preflight GETs but before the send.
class _GatedBatchBackend extends MockSyncBackend {
  Completer<void>? entered;
  Completer<void>? barrier;

  @override
  Future<List<PushResult>> pushBatch(List<PushOp> ops) async {
    entered?.complete();
    await barrier?.future;
    return super.pushBatch(ops);
  }
}

void main() {
  Future<SyncRowState?> sr(LocalPocket pocket, String id) =>
      pocket.outbox.readSyncRow(pocket.db, 'widgets', id);

  Future<List<Map<String, Object?>>> deadLetters(LocalPocket pocket) =>
      pocket.db.query('lp_dead_letter', orderBy: 'at ASC');

  group('version-conflict merge-and-retry', () {
    test(
        'a repeated version conflict during the re-merge write backs off '
        'with bounded attempts, then converges', () async {
      var clock = 1000000000;
      final h = await EngineHarness.create(
          config: testConfig(jitter: (_) => 1.0, now: () => clock));
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'local'});

      // Hold the first version-checked PATCH in flight (the GET already ran).
      final entered1 = Completer<void>();
      final release1 = Completer<void>();
      h.mock.updateRecordEntered = entered1;
      h.mock.updateRecordBarrier = release1;
      final syncFuture = h.engine.syncNow();
      await entered1.future;

      // Concurrent edit lands after the GET: conflict #1 -> re-fetch + merge.
      h.mock.mutate(id, {'id': id, 'name': 'v1', 'qty': 2});
      // Re-arm the barrier for the pusher's re-merge write.
      final entered2 = Completer<void>();
      final release2 = Completer<void>();
      h.mock.updateRecordEntered = entered2;
      h.mock.updateRecordBarrier = release2;
      release1.complete();
      await entered2.future; // the re-merge write is now in flight

      // The remote moves AGAIN while the re-merge write is in flight:
      // conflict #2 -> the pusher must back off, never loop.
      h.mock.mutate(id, {'id': id, 'name': 'v1', 'qty': 3});
      release2.complete();
      final report = await syncFuture;
      h.mock.updateRecordBarrier = null;
      h.mock.updateRecordEntered = null;

      expect(report.hadError, isTrue,
          reason: 'the second conflict is not retried in a loop; it backs off');
      expect(h.mock.updateCalls, 2,
          reason: 'bounded: exactly the initial PATCH plus one re-merge '
              'attempt in this cycle — no infinite retry');
      final row = await sr(h.pocket, id);
      expect(row!.syncState, SyncState.dirty,
          reason: 'the op is retained for the next cycle');
      expect(row.attemptCount, 1);
      expect(row.nextRetryAt, greaterThan(clock),
          reason: 'a backoff deadline is persisted');
      expect(
          await h.pocket.outbox.readOp(h.pocket.db, 'widgets', id), isNotNull);
      expect(h.mock.records[id]!.data['qty'], 3,
          reason: 'the latest concurrent remote edit is never overwritten');
      expect((await h.pocket.collection('widgets').get(id))!['name'], 'local',
          reason: 'the local edit is preserved');
      expect(h.mock.records.length, 1, reason: 'exactly one remote record');

      // Once the backoff elapses the next cycle re-merges and converges.
      clock = row.nextRetryAt + 1000;
      final second = await h.engine.syncNow();
      expect(second.hadError, isFalse);
      expect(h.mock.records[id]!.data['qty'], 3,
          reason: 'the concurrent edit survives the retry');
      expect(h.mock.records[id]!.data['name'], 'local',
          reason: 'the local edit survives the retry');
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
      expect(h.mock.records.length, 1,
          reason: 'still exactly one remote record');
    });
  });

  group('batch per-op version conflict', () {
    test(
        'a whole-batch version conflict re-runs every op through the '
        'per-record path in the same cycle', () async {
      final mock = _GatedBatchBackend()..batchEnabled = true;
      final h = await EngineHarness.create(mock: mock);
      addTearDown(h.close);
      final a = h.mock.seed(store: 'widgets', data: {'name': 'a1', 'qty': 1});
      final b = h.mock.seed(store: 'widgets', data: {'name': 'b1', 'qty': 1});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(a, {'name': 'a-local'});
      await h.pocket.collection('widgets').patch(b, {'name': 'b-local'});

      // Gate the batch send; when entered, both preflight GETs are done.
      final entered = Completer<void>();
      final release = Completer<void>();
      mock.entered = entered;
      mock.barrier = release;
      final syncFuture = h.engine.syncNow();
      await entered.future;

      // A concurrent edit lands after the preflight GET for B only.
      h.mock.mutate(b, {'id': b, 'name': 'b1', 'qty': 7});
      release.complete();
      final report = await syncFuture;
      mock.entered = null;
      mock.barrier = null;

      expect(report.hadError, isFalse);
      expect(report.pushed, 2,
          reason: 'the whole-batch conflict re-runs BOTH ops through the '
              'per-record OCC path in the same cycle');
      expect(report.deadLettered, 0);
      expect(mock.batchCalls, 1, reason: 'only one batch attempt');
      expect((await sr(h.pocket, a))!.syncState, SyncState.clean);
      expect((await sr(h.pocket, b))!.syncState, SyncState.clean);
      expect(h.mock.records[a]!.data['name'], 'a-local',
          reason: 'the healthy op settles normally');
      expect(h.mock.records[b]!.data['qty'], 7,
          reason: 'the concurrent edit on the conflicted op is preserved');
      expect(h.mock.records[b]!.data['name'], 'b-local',
          reason: 'the conflicted op re-merges; the local edit survives');
      expect(h.mock.records.length, 2,
          reason: 'exactly one remote record per op');
      expect(await deadLetters(h.pocket), isEmpty);
    });
  });

  group('missing-remote default policy', () {
    test(
        'a vanished update target escalates a delete-vs-edit conflict with '
        'all local work intact', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'edited'});
      // The target has vanished remotely (GET answers null).
      h.mock.script('getRecord', [MockReturn(null)]);

      final report = await h.engine.syncNow();
      expect(report.deadLettered, 0);
      expect(await deadLetters(h.pocket), isEmpty,
          reason: 'the default policy escalates instead of dead-lettering');
      final conflict = await h.pocket.conflicts.get('widgets', id);
      expect(conflict!.remoteDeleted, isTrue,
          reason: 'the remote side is recorded as a deletion tombstone');
      final row = await sr(h.pocket, id);
      expect(row!.syncState, SyncState.conflict);
      expect(row.accessState, AccessState.visible,
          reason: 'the row is NOT hidden or cleaned by the escalation');
      expect(
          await h.pocket.outbox.readOp(h.pocket.db, 'widgets', id), isNotNull,
          reason: 'the op is retained for resolution');
      expect((await h.pocket.collection('widgets').get(id))!['name'], 'edited',
          reason: 'the local edit is preserved — nothing silently discarded');
      expect(h.mock.records.length, 1,
          reason: 'the vanished target is never recreated remotely');
    });
  });

  group('duplicate-create recovery leaves exactly one remote record', () {
    test('in every branch: settle, merge, and dead-letter', () async {
      // (a) fetched == local -> GET verifies and settles once.
      {
        final h = await EngineHarness.create();
        addTearDown(h.close);
        final id = generateRecordId();
        h.mock.seed(
            store: 'widgets',
            id: id,
            data: {'id': id, 'name': 'same', 'qty': 1});
        h.mock.script('listChanges', [MockReturn(const <RemoteRecord>[])]);
        await h.pocket
            .collection('widgets')
            .put(record(id: id, name: 'same', qty: 1));

        final report = await h.engine.syncNow();
        expect(report.pushed, 1, reason: 'recovered via GET + ACK');
        expect(report.deadLettered, 0);
        expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
        expect(h.mock.records.length, 1,
            reason: 'exactly one remote record — never a duplicate');
        expect(h.mock.records[id]!.data['name'], 'same');
        expect(await deadLetters(h.pocket), isEmpty);
      }

      // (b) fetched differs -> GET then merge-and-update, one record.
      {
        final h = await EngineHarness.create();
        addTearDown(h.close);
        final id = generateRecordId();
        h.mock.seed(
            store: 'widgets',
            id: id,
            data: {'id': id, 'name': 'remote', 'qty': 3});
        h.mock.script('listChanges', [MockReturn(const <RemoteRecord>[])]);
        await h.pocket.collection('widgets').put(record(id: id, name: 'local'));

        final report = await h.engine.syncNow();
        expect(report.deadLettered, 0,
            reason: 'a different-content duplicate converts to an update');
        expect(h.mock.updateCalls, greaterThanOrEqualTo(1));
        expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
        expect(h.mock.records.length, 1,
            reason: 'exactly one remote record — merged, never duplicated');
        expect(h.mock.records[id]!.data['name'], 'remote',
            reason: 'the merge resolved the overlap (remote wins)');
        expect(h.mock.records[id]!.data['qty'], 3);
        expect(await deadLetters(h.pocket), isEmpty);
      }

      // (c) GET 404 -> duplicate_id_missing dead-letter, no remote record.
      {
        final h = await EngineHarness.create();
        addTearDown(h.close);
        final id = generateRecordId();
        await h.pocket.collection('widgets').put(record(id: id, name: 'x'));
        h.mock.script('createRecord', [MockThrow(DuplicateIdError())]);
        h.mock.script('getRecord', [MockReturn(null)]);
        h.mock.script('listChanges', [MockReturn(const <RemoteRecord>[])]);

        final report = await h.engine.syncNow();
        expect(report.deadLettered, 1);
        expect(report.pushed, 0);
        final dl = await deadLetters(h.pocket);
        expect(dl.single['kind'], 'duplicate_id_missing');
        expect(h.mock.records, isEmpty,
            reason: 'no remote record exists for the dead letter');
        expect((await sr(h.pocket, id))!.syncState, SyncState.error);
      }
    });
  });
}
