import 'dart:async';

import 'package:localpocket/src/kernel/ids.dart';
import 'package:localpocket/src/kernel/local_pocket.dart';
import 'package:localpocket/src/kernel/sync/sync_backend.dart';
import 'package:localpocket/src/kernel/sync/sync_tables.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';
import 'engine_helpers.dart';
import 'mock_backend.dart';

/// A batch-enabled mock whose `pushBatch` is scriptable for in-flight race
/// tests: it records the opIds sent, can gate the request in flight, can
/// simulate a dropped request (server never saw it) and a lost response
/// (server applied but the client never learned).
class _ScriptedBatchBackend extends MockSyncBackend {
  final List<List<String>> sentOpIds = [];
  bool dropNextBatch = false;
  bool loseNextBatchResponse = false;
  Completer<void>? entered;
  Completer<void>? barrier;

  @override
  Future<List<PushResult>> pushBatch(List<PushOp> ops) async {
    sentOpIds.add([for (final o in ops) o.opId]);
    entered?.complete();
    await barrier?.future;
    if (dropNextBatch) {
      dropNextBatch = false;
      throw TransientNetworkError();
    }
    final results = await super.pushBatch(ops);
    if (loseNextBatchResponse) {
      loseNextBatchResponse = false;
      throw TransientNetworkError();
    }
    return results;
  }
}

void main() {
  Future<SyncRowState?> sr(LocalPocket pocket, String id) =>
      pocket.outbox.readSyncRow(pocket.db, 'widgets', id);

  Future<List<Map<String, Object?>>> deadLetters(LocalPocket pocket) =>
      pocket.db.query('lp_dead_letter', orderBy: 'at ASC');

  group('push write-window races', () {
    test(
        'a remote edit between the pre-push GET and the PATCH is re-merged '
        'and retried, never lost', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow(); // clean at v1
      await h.pocket.collection('widgets').patch(id, {'name': 'local'});

      // Hold the PATCH in flight: once entered, the GET has already run and
      // the pusher has decided the base is unchanged.
      final entered = Completer<void>();
      final release = Completer<void>();
      h.mock.updateRecordEntered = entered;
      h.mock.updateRecordBarrier = release;
      final syncFuture = h.engine.syncNow();
      await entered.future;

      // Another writer edits the record AFTER the GET, before the PATCH.
      h.mock.mutate(id, {'id': id, 'name': 'v1', 'qty': 99});
      release.complete();
      final report = await syncFuture;
      expect(report.hadError, isFalse);
      h.mock.updateRecordBarrier = null;
      h.mock.updateRecordEntered = null;

      // The first PATCH was rejected as a version conflict; the pusher
      // re-fetched, re-merged against the CURRENT version and retried — both
      // the concurrent remote edit and the local edit survive.
      expect(h.mock.records[id]!.data['qty'], 99,
          reason: 'the concurrent remote edit is preserved, never overwritten');
      expect(h.mock.records[id]!.data['name'], 'local',
          reason: 'the local edit is preserved too');
      expect(h.mock.updateCalls, 2,
          reason: 'the conflicting write was retried once against the fresh '
              'version');
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
      expect(h.mock.records.length, 1, reason: 'exactly one remote record');
    });

    test(
        'a remote edit after the batch preflight GETs is re-merged and '
        'retried, never lost', () async {
      final mock = _ScriptedBatchBackend()..batchEnabled = true;
      final h = await EngineHarness.create(mock: mock);
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow(); // clean at v1
      await h.pocket.collection('widgets').patch(id, {'name': 'local'});
      // The remote moved BEFORE the push: the batch preflight must merge.
      h.mock.mutate(id, {'id': id, 'name': 'v1', 'qty': 99});

      // Gate the batch send; when it is entered, every preflight GET is done.
      final entered = Completer<void>();
      final release = Completer<void>();
      mock.entered = entered;
      mock.barrier = release;
      final syncFuture = h.engine.syncNow();
      await entered.future;

      // Another writer edits the record AFTER the preflight GETs.
      h.mock.mutate(id, {'id': id, 'name': 'v1', 'qty': 7});
      release.complete();
      final report = await syncFuture;
      expect(report.hadError, isFalse);
      mock.entered = null;
      mock.barrier = null;

      // The batch was rejected as a version conflict; the op was re-run
      // through the per-record OCC path and re-merged against the fresh
      // version — the concurrent remote edit (qty:7) is preserved.
      expect(h.mock.records[id]!.data['qty'], 7,
          reason: 'the concurrent remote edit is preserved, never overwritten');
      expect(h.mock.records[id]!.data['name'], 'local',
          reason: 'the local edit is preserved too');
      expect(mock.batchCalls, 1, reason: 'only one batch attempt');
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
    });

    test(
        'a local edit made mid-batch is never overwritten by the stale batch '
        'settlement', () async {
      final mock = _ScriptedBatchBackend()..batchEnabled = true;
      final h = await EngineHarness.create(mock: mock);
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow(); // clean at v1
      await h.pocket.collection('widgets').patch(id, {'name': 'local'});
      // Remote moved before the push so the batch merge is exercised.
      h.mock.mutate(id, {'id': id, 'name': 'v1', 'qty': 99});

      final entered = Completer<void>();
      final release = Completer<void>();
      mock.entered = entered;
      mock.barrier = release;
      final syncFuture = h.engine.syncNow();
      await entered.future;

      // Edit the same record again while the batch request is in flight.
      await h.pocket.collection('widgets').patch(id, {'qty': 5});
      expect((await sr(h.pocket, id))!.syncState, SyncState.dirty);

      release.complete();
      final report = await syncFuture;
      expect(report.hadError, isFalse);
      mock.entered = null;
      mock.barrier = null;

      // The newer edit survives the stale batch settlement.
      final local = await h.pocket.collection('widgets').get(id);
      expect(local!['qty'], 5,
          reason: 'the newer mid-batch edit is never overwritten');
      expect(local['name'], 'local');
      final op = await h.pocket.outbox.readOp(h.pocket.db, 'widgets', id);
      expect(op, isNotNull, reason: 'the outbox row is retained');
      expect((await sr(h.pocket, id))!.syncState, SyncState.dirty,
          reason: 'the row stays dirty for the next cycle');

      // The next cycle converges on the newer edit.
      await h.engine.syncNow();
      expect(h.mock.records[id]!.data['qty'], 5);
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
    });

    test(
        'a lost batch response is recovered by GET: the retry settles once '
        'with no second batch send and no duplicate record', () async {
      final mock = _ScriptedBatchBackend()..batchEnabled = true;
      final h = await EngineHarness.create(
          mock: mock, config: testConfig(backoffBase: Duration.zero));
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow(); // clean at v1
      await h.pocket.collection('widgets').patch(id, {'qty': 5});

      // The batch applies server-side but the response is lost.
      mock.loseNextBatchResponse = true;
      final first = await h.engine.syncNow();
      expect(first.hadError, isTrue);
      expect(h.mock.records[id]!.data['qty'], 5,
          reason: 'the batch committed server-side before the loss');
      expect((await sr(h.pocket, id))!.syncState, SyncState.dirty,
          reason: 'the client never learned; the op is retried');

      // Isolate the push recovery: the pull must not converge it first.
      h.mock.script('listChanges', [MockReturn(const <RemoteRecord>[])]);
      final second = await h.engine.syncNow();

      // GET-recovery: the preflight sees the applied content and settles
      // without a second batch send.
      expect(second.pushed, 1);
      expect(second.deadLettered, 0);
      expect(mock.batchCalls, 1,
          reason: 'the recovery settles by GET, never re-sends the batch');
      expect(h.mock.records.length, 1, reason: 'exactly one remote record');
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
      expect(await h.pocket.outbox.readOp(h.pocket.db, 'widgets', id), isNull);
      expect(await deadLetters(h.pocket), isEmpty);
    });

    test(
        'a retried opId is stable and settles once: no duplicate apply, no '
        'misleading conflict', () async {
      final mock = _ScriptedBatchBackend()..batchEnabled = true;
      final h = await EngineHarness.create(
          mock: mock, config: testConfig(backoffBase: Duration.zero));
      addTearDown(h.close);
      final ids = [for (var i = 0; i < 2; i++) generateRecordId()];
      for (final id in ids) {
        await h.pocket.collection('widgets').put(record(id: id, name: 'n'));
      }

      // Unknown server outcome: the request is dropped before reaching the
      // server; the client must retry with the SAME opIds.
      mock.dropNextBatch = true;
      final first = await h.engine.syncNow();
      expect(first.hadError, isTrue);
      expect(h.mock.records, isEmpty, reason: 'nothing reached the server');
      expect(mock.sentOpIds, hasLength(1));

      // Retry: the same opIds are re-sent, applied once, settled once.
      final second = await h.engine.syncNow();
      expect(second.pushed, 2);
      expect(second.hadError, isFalse);
      expect(mock.sentOpIds, hasLength(2));
      expect(mock.sentOpIds[1], mock.sentOpIds[0],
          reason: 'the retry reuses the original opIds (idempotent)');
      expect(h.mock.records.length, 2, reason: 'each record created once');
      for (final id in ids) {
        expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
      }
      expect(await h.pocket.conflicts.listOpen(store: 'widgets'), isEmpty,
          reason: 'no misleading conflict from the retried opIds');
      expect(await deadLetters(h.pocket), isEmpty);
    });
  });
}
