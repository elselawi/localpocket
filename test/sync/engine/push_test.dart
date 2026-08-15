import 'package:localpocket/localpocket.dart';
import 'package:localpocket/sync.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';
import 'engine_helpers.dart';
import 'mock_backend.dart';

/// Pusher tests.
void main() {
  Future<SyncRowState?> sr(LocalPocket pocket, String id) =>
      pocket.outbox.readSyncRow(pocket.db, 'widgets', id);

  Future<List<Map<String, Object?>>> deadLetters(LocalPocket pocket) =>
      pocket.db.query('lp_dead_letter', orderBy: 'at ASC');

  group('pusher', () {
    test('create posts with client id', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);

      await h.pocket.collection('widgets').put(record(name: 'hello', qty: 3));
      final id =
          (await h.pocket.collection('widgets').query().all().ids()).single;
      expect(id, matches(RegExp(r'^[a-z0-9]{15}$')));

      final report = await h.engine.syncNow();
      expect(report.pushed, 1);

      expect(h.mock.records.containsKey(id), isTrue);
      expect(h.mock.records[id]!.data['name'], 'hello');
      expect(await sr(h.pocket, id), isNotNull);
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
      expect(await h.pocket.outbox.readOp(h.pocket.db, 'widgets', id), isNull,
          reason: 'op acked after push');
    });

    test('duplicate id then get then ack', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);

      // Server already holds the id with IDENTICAL content (lost-create retry).
      // The pull is scripted away so the create actually reaches the pusher.
      final id = generateRecordId();
      h.mock.seed(
          store: 'widgets', id: id, data: {'id': id, 'name': 'same', 'qty': 1});
      h.mock.script('listChanges', [MockReturn(const <RemoteRecord>[])]);
      await h.pocket
          .collection('widgets')
          .put(record(id: id, name: 'same', qty: 1));

      final report = await h.engine.syncNow();
      expect(report.pushed, 1,
          reason: 'create recovered via GET+ACK, not dead-lettered');

      expect(h.mock.createCalls, 1);
      expect(h.mock.getCalls, 1, reason: 'verify by GET after the duplicate');
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
      expect(await h.pocket.outbox.readOp(h.pocket.db, 'widgets', id), isNull);
      expect(h.mock.records[id]!.data['name'], 'same');
    });

    test('duplicate id different content falls to update', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);

      // Server already holds the id with DIFFERENT content: the create is
      // converted to an update (PATCH), never dead-lettered.
      final id = generateRecordId();
      h.mock.seed(
          store: 'widgets',
          id: id,
          data: {'id': id, 'name': 'remote', 'qty': 3});
      await h.pocket.collection('widgets').put(record(id: id, name: 'local'));

      final report = await h.engine.syncNow();
      expect(report.deadLettered, 0);
      expect(h.mock.updateCalls, greaterThanOrEqualTo(1),
          reason: 'create-vs-existing converted to an update');
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
      // D4 default: on the overlapping field the remote value wins; the local
      // write is adopted and pushed as a merge.
      expect(h.mock.records[id]!.data['name'], 'remote');
    });

    test('update gets before patch', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);

      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow(); // pull -> clean
      final getBefore = h.mock.getCalls;

      await h.pocket.collection('widgets').patch(id, {'name': 'v2'});
      await h.engine.syncNow();

      expect(h.mock.getCalls, greaterThan(getBefore),
          reason: 'GET before write (optimistic concurrency)');
      expect(h.mock.updateCalls, 1);
      expect(h.mock.records[id]!.data['name'], 'v2');
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
    });

    test('base match patches', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);

      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow();
      final rowBefore = await sr(h.pocket, id);
      final baseUpdated = rowBefore!.remoteUpdated;

      await h.pocket.collection('widgets').patch(id, {'qty': 5});
      await h.engine.syncNow();

      // Base matched the server, so this is a plain PATCH (no merge needed).
      expect(h.mock.updateCalls, 1);
      expect(h.mock.records[id]!.data['qty'], 5);
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
      expect(baseUpdated, isNotNull);
    });

    test('concurrent change merges then patches', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);

      final id = h.mock.seed(store: 'widgets', data: {'name': 'n0', 'qty': 1});
      await h.engine.syncNow();

      // Another writer changes qty while the local user changes name.
      h.mock.mutate(id, {'id': id, 'name': 'n0', 'qty': 99});
      await h.pocket.collection('widgets').patch(id, {'name': 'local-new'});

      await h.engine.syncNow();

      // Non-overlapping fields: both survive the 3-way merge.
      expect(h.mock.records[id]!.data['name'], 'local-new');
      expect(h.mock.records[id]!.data['qty'], 99);
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
      // The merged outcome was written back locally too.
      final local = await h.pocket.collection('widgets').get(id);
      expect(local!['qty'], 99);
    });

    test('end state hash ack noop', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);

      final id = h.mock.seed(store: 'widgets', data: {'name': 'x', 'qty': 1});
      await h.engine.syncNow();

      // Local edit and a concurrent remote edit reach the SAME end state.
      await h.pocket.collection('widgets').patch(id, {'qty': 2});
      h.mock.mutate(id, {'id': id, 'name': 'x', 'qty': 2});

      await h.engine.syncNow();

      expect(h.mock.updateCalls, 0,
          reason: 'end-state hash matched; nothing to write');
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
      expect(await h.pocket.outbox.readOp(h.pocket.db, 'widgets', id), isNull);
    });

    test('push 404 errors dead letter keeps payload', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);

      final id = h.mock.seed(store: 'widgets', data: {'name': 'x'});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'edited'});

      h.mock.delete(id); // hard-deleted server-side before the push
      await h.engine.syncNow();

      final dl = await deadLetters(h.pocket);
      expect(dl.any((r) => r['kind'] == 'missing_target'), isTrue);
      // Payload is preserved for inspection / recovery.
      final local = await h.pocket.collection('widgets').get(id);
      expect(local!['name'], 'edited');
    });

    test('push 403 errors keeps local', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);

      final id = generateRecordId();
      await h.pocket.collection('widgets').put(record(id: id, name: 'mine'));
      h.mock.script('createRecord', [MockThrow(ForbiddenError())]);
      await h.engine.syncNow();

      final dl = await deadLetters(h.pocket);
      expect(dl.any((r) => r['kind'] == 'forbidden_push'), isTrue);
      final local = await h.pocket.collection('widgets').get(id);
      expect(local!['name'], 'mine', reason: 'local copy kept');
      expect(h.mock.records.containsKey(id), isFalse);
    });

    test('batch off per record fallback', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);

      for (var i = 0; i < 3; i++) {
        await h.pocket.collection('widgets').put(record(name: 'n$i', qty: i));
      }
      final report = await h.engine.syncNow();

      expect(h.mock.batchEnabled, isFalse);
      expect(h.mock.batchCalls, 0);
      expect(h.mock.createCalls, 3, reason: 'per-record fallback');
      expect(report.pushed, 3);
      expect(await h.engine.syncStore.countPending(), 0);
    });

    test('batch on upsert put encoding', () async {
      final h = await EngineHarness.create(
          mock: MockSyncBackend()..batchEnabled = true);
      addTearDown(h.close);

      await h.pocket.collection('widgets').put(record(name: 'a'));
      await h.pocket.collection('widgets').put(record(name: 'b'));
      await h.engine.syncNow();

      expect(h.mock.batchCalls, 1);
      expect(h.mock.lastBatchOps, everyElement('upsert'),
          reason: 'batch writes encode as upserts');
      expect(h.mock.createCalls, 0,
          reason: 'no per-record fallback in batch mode');
      expect(h.mock.records.length, 2);
      expect(await h.engine.syncStore.countPending(), 0);

      // A later update also travels through the batch as an upsert.
      final aId = h.mock.records.keys.first;
      await h.pocket.collection('widgets').patch(aId, {'qty': 9});
      await h.engine.syncNow();
      expect(h.mock.batchCalls, 2);
      expect(h.mock.lastBatchOps, everyElement('upsert'));
      expect(h.mock.records[aId]!.data['qty'], 9);
    });

    test('poison batch binary split isolation', () async {
      final h = await EngineHarness.create(
          mock: MockSyncBackend()..batchEnabled = true);
      addTearDown(h.close);

      await h.pocket.collection('widgets').put(record(name: 'good'));
      await h.pocket
          .collection('widgets')
          .put(record(name: 'bad', meta: {'x': 'poison'}));
      await h.engine.syncNow();

      // The clean record landed; the poison one is isolated to a dead letter.
      final good = h.mock.records.entries
          .firstWhere((e) => e.value.data['name'] == 'good');
      expect(good.value.data['name'], 'good');
      expect(
          h.mock.records.values.where((r) => r.data['name'] == 'bad'), isEmpty);

      final dl = await deadLetters(h.pocket);
      expect(dl.any((r) => r['kind'] == 'batch_poison'), isTrue);
      // The good op was settled (clean), not blocked by the poison sibling.
      expect(await h.engine.syncStore.countPending(), 0);
    });
  });
}
