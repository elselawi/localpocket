import 'package:localpocket/src/kernel/ids.dart';
import 'package:localpocket/src/kernel/local_pocket.dart';
import 'package:localpocket/src/kernel/sync/status.dart';
import 'package:localpocket/src/kernel/sync/sync_backend.dart';
import 'package:localpocket/src/kernel/sync/sync_tables.dart';
import 'package:test/test.dart';

import '../../../support/helpers.dart';
import '../../../support/engine_helpers.dart';
import '../../../support/mock_backend.dart';

/// "Forbidden operations can become permanently stranded".
///
/// A 403 (permission failure) is RECOVERABLE: the op is parked in the
/// `blocked` state (kept in the outbox, never dead-lettered) so a later
/// permission change can requeue and push it. These tests pin the whole
/// lifecycle: create-path, targeted-fetch path, batch preflight, drain
/// exclusion, status accounting, prune survival, and requeue entry points.
void main() {
  Future<SyncRowState?> sr(LocalPocket pocket, String id) =>
      pocket.outbox.readSyncRow(pocket.db, 'widgets', id);

  Future<List<Map<String, Object?>>> deadLetters(LocalPocket pocket) =>
      pocket.db
          .rawQuery('SELECT kind, store, record_id, error FROM lp_dead_letter');

  group('blocked lifecycle', () {
    test('create 403 parks op in blocked; no dead letter; local kept',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = generateRecordId();
      await h.pocket.collection('widgets').put(record(id: id, name: 'mine'));
      h.mock.script('createRecord', [MockThrow(ForbiddenError())]);

      final report = await h.engine.syncNow();

      expect(report.blocked, 1, reason: 'PushReport carries the blocked count');
      expect(report.deadLettered, 0, reason: 'a 403 is never dead-lettered');
      expect(report.pushed, 0);
      expect(await deadLetters(h.pocket), isEmpty);
      expect((await sr(h.pocket, id))!.syncState, SyncState.blocked);
      expect(
          await h.pocket.outbox.readOp(h.pocket.db, 'widgets', id), isNotNull,
          reason: 'the outbox op survives for requeue');
      final local = await h.pocket.collection('widgets').get(id);
      expect(local!['name'], 'mine', reason: 'local copy untouched');
      expect(h.mock.records.containsKey(id), isFalse);
    });

    test('update 403 (targeted fetch) parks in blocked', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1'});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'edited'});
      h.mock.script('getRecord', [MockThrow(ForbiddenError())]);

      final report = await h.engine.syncNow();

      expect(report.blocked, 1);
      expect(report.deadLettered, 0);
      expect((await sr(h.pocket, id))!.syncState, SyncState.blocked);
      final local = await h.pocket.collection('widgets').get(id);
      expect(local!['name'], 'edited', reason: 'local edit preserved');
    });

    test('batch preflight 403 parks every preflighted op in blocked', () async {
      final h = await EngineHarness.create(
          mock: MockSyncBackend()..batchEnabled = true);
      addTearDown(h.close);
      for (var i = 0; i < 3; i++) {
        await h.pocket.collection('widgets').put(record(name: 'n$i', qty: i));
      }
      h.mock.script('getRecord', [
        MockThrow(ForbiddenError()),
        MockThrow(ForbiddenError()),
        MockThrow(ForbiddenError()),
      ]);

      final report = await h.engine.syncNow();

      expect(report.blocked, 3,
          reason: 'every preflight 403 parks its op in blocked');
      expect(report.deadLettered, 0);
      expect(await deadLetters(h.pocket), isEmpty);
      expect(await h.engine.syncStore.countPending(), 0,
          reason: 'blocked ops are never counted as pending');
      for (final entry in h.mock.records.values) {
        expect((await sr(h.pocket, entry.id))!.syncState, SyncState.blocked);
      }
    });

    test('drain excludes blocked ops: no retry, no state change', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = generateRecordId();
      await h.pocket.collection('widgets').put(record(id: id, name: 'mine'));
      h.mock.script('createRecord', [MockThrow(ForbiddenError())]);
      await h.engine.syncNow();
      expect((await sr(h.pocket, id))!.syncState, SyncState.blocked);
      expect(h.mock.createCalls, 1);

      // A later cycle must not re-attempt the blocked op.
      await h.engine.syncNow();
      await h.engine.syncNow();
      expect(h.mock.createCalls, 1, reason: 'blocked op is never retried');
      expect((await sr(h.pocket, id))!.syncState, SyncState.blocked);
      expect(await h.engine.syncStore.countPending(), 0);
    });

    test('requeueBlocked moves blocked -> dirty and returns the count',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final idA = generateRecordId();
      final idB = generateRecordId();
      await h.pocket.collection('widgets').put(record(id: idA, name: 'a'));
      await h.pocket.collection('widgets').put(record(id: idB, name: 'b'));
      h.mock.script('createRecord', [
        MockThrow(ForbiddenError()),
        MockThrow(ForbiddenError()),
      ]);
      await h.engine.syncNow();
      expect((await sr(h.pocket, idA))!.syncState, SyncState.blocked);
      expect((await sr(h.pocket, idB))!.syncState, SyncState.blocked);

      // Store-scoped requeue only touches that store's blocked rows.
      expect(await h.pocket.outbox.requeueBlocked(store: 'widgets'), 2);
      expect((await sr(h.pocket, idA))!.syncState, SyncState.dirty);
      expect((await sr(h.pocket, idB))!.syncState, SyncState.dirty);
      // Nothing left blocked.
      expect(await h.pocket.outbox.requeueBlocked(), 0);
    });

    test('after requeue the op pushes successfully', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = generateRecordId();
      await h.pocket.collection('widgets').put(record(id: id, name: 'mine'));
      h.mock.script('createRecord', [MockThrow(ForbiddenError())]);
      await h.engine.syncNow();
      expect((await sr(h.pocket, id))!.syncState, SyncState.blocked);

      // Permission restored: requeue, then the default mock accepts.
      expect(await h.pocket.outbox.requeueBlocked(), 1);
      final report = await h.engine.syncNow();
      expect(report.pushed, 1);
      expect(h.mock.records[id]!.data['name'], 'mine');
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
      expect(await h.engine.syncStore.countPending(), 0);
    });

    test('invalidateVisibility requeues blocked ops and pushes them', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = generateRecordId();
      await h.pocket.collection('widgets').put(record(id: id, name: 'mine'));
      h.mock.script('createRecord', [MockThrow(ForbiddenError())]);
      await h.engine.syncNow();
      expect((await sr(h.pocket, id))!.syncState, SyncState.blocked);

      // Permissions changed (e.g. user joined a clinic): invalidateVisibility
      // requeues the blocked op and the next cycle pushes it.
      await h.engine.invalidateVisibility();
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
      expect(h.mock.records.containsKey(id), isTrue);
    });

    test('markAuthValid requeues blocked ops after auth recovery', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);

      // Park one op in blocked via a 403.
      final blockedId = generateRecordId();
      await h.pocket
          .collection('widgets')
          .put(record(id: blockedId, name: 'blocked'));
      h.mock.script('createRecord', [MockThrow(ForbiddenError())]);
      await h.engine.syncNow();
      expect((await sr(h.pocket, blockedId))!.syncState, SyncState.blocked);

      // Then the token lapses: an auth error parks the engine.
      final authId = generateRecordId();
      await h.pocket
          .collection('widgets')
          .put(record(id: authId, name: 'auth'));
      h.mock.script('createRecord', [MockThrow(AuthError('401'))]);
      await h.engine.syncNow();
      expect(h.engine.state, SyncEngineState.authRequired);
      expect((await sr(h.pocket, blockedId))!.syncState, SyncState.blocked,
          reason: 'blocked state survives the auth failure');

      // Token restored: markAuthValid requeues blocked and pushes everything.
      await h.engine.markAuthValid();
      expect(h.engine.state, SyncEngineState.idle);
      expect((await sr(h.pocket, blockedId))!.syncState, SyncState.clean);
      expect((await sr(h.pocket, authId))!.syncState, SyncState.clean);
      expect(h.mock.records.containsKey(blockedId), isTrue);
      expect(h.mock.records.containsKey(authId), isTrue);
    });

    test('status and store accounting expose the blocked count', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = generateRecordId();
      await h.pocket.collection('widgets').put(record(id: id, name: 'mine'));
      h.mock.script('createRecord', [MockThrow(ForbiddenError())]);
      await h.engine.syncNow();

      final counts = await h.engine.syncStore.countAllStatus();
      expect(counts.blocked, 1);
      expect(counts.pending, 0, reason: 'blocked is not pending');

      // SyncStatus surfaces it too.
      SyncStatus? last;
      final sub = h.engine.status.listen((s) => last = s);
      addTearDown(sub.cancel);
      await h.engine.syncNow(); // status emission after a cycle
      await Future<void>.delayed(Duration.zero);
      await Future<void>.delayed(Duration.zero);
      expect(last, isNotNull);
      expect(last!.blocked, 1);
    });

    test('pruneOutbox preserves blocked ops', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = generateRecordId();
      await h.pocket.collection('widgets').put(record(id: id, name: 'mine'));
      h.mock.script('createRecord', [MockThrow(ForbiddenError())]);
      await h.engine.syncNow();
      expect((await sr(h.pocket, id))!.syncState, SyncState.blocked);

      await h.pocket.pruneOutbox();
      expect((await sr(h.pocket, id))!.syncState, SyncState.blocked,
          reason: 'prune must never drop a blocked op');
      expect(
          await h.pocket.outbox.readOp(h.pocket.db, 'widgets', id), isNotNull);

      // Still pushable after pruning.
      expect(await h.pocket.outbox.requeueBlocked(), 1);
      await h.engine.syncNow();
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
    });

    test('blocked state survives an engine restart', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = generateRecordId();
      await h.pocket.collection('widgets').put(record(id: id, name: 'mine'));
      h.mock.script('createRecord', [MockThrow(ForbiddenError())]);
      await h.engine.syncNow();
      expect((await sr(h.pocket, id))!.syncState, SyncState.blocked);

      // Full stop + restart: the blocked op is still parked, still recoverable.
      await h.engine.stop();
      await h.engine.start();
      expect((await sr(h.pocket, id))!.syncState, SyncState.blocked);
      expect(await h.pocket.outbox.requeueBlocked(), 1);
      await h.engine.syncNow();
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
      expect(h.mock.records.containsKey(id), isTrue);
    });
  });
}
