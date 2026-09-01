import 'dart:async';
import 'dart:convert';

import 'package:localpocket/src/internal/raw_surface.dart';
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

    test(
        'duplicate id with a vanished remote dead-letters duplicate_id_missing',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = generateRecordId();
      await h.pocket.collection('widgets').put(record(id: id, name: 'x'));
      // create -> duplicate -> GET finds nothing: the id is not recoverable.
      h.mock.script('createRecord', [MockThrow(DuplicateIdError())]);
      h.mock.script('getRecord', [MockReturn(null)]);
      h.mock.script('listChanges', [MockReturn(const <RemoteRecord>[])]);

      final report = await h.engine.syncNow();
      expect(report.deadLettered, 1,
          reason: 'an unrecoverable duplicate create dead-letters');
      expect(report.pushed, 0);
      expect(h.mock.records.containsKey(id), isFalse,
          reason: 'no remote record is created for the dead letter');

      final dl = await deadLetters(h.pocket);
      expect(dl.single['kind'], 'duplicate_id_missing');
      expect(dl.single['record_id'], id);
      expect((await sr(h.pocket, id))!.syncState, SyncState.error,
          reason: 'the sync row parks in error (never retried in a loop)');
      // The dead-letter contract preserves the op for audit.
      expect(
          await h.pocket.outbox.readOp(h.pocket.db, 'widgets', id), isNotNull);
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

    test('push 404 escalates to a delete-vs-edit conflict (default policy)',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);

      final id = h.mock.seed(store: 'widgets', data: {'name': 'x'});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'edited'});

      h.mock.delete(id); // hard-deleted server-side before the push
      final report = await h.engine.syncNow();

      expect(report.deadLettered, 0);
      expect(await deadLetters(h.pocket), isEmpty,
          reason: 'the default policy escalates, never dead-letters');
      final conflict = await h.pocket.conflicts.get('widgets', id);
      expect(conflict, isNotNull);
      expect(conflict!.remoteDeleted, isTrue,
          reason: 'the remote side is recorded as a deletion tombstone');
      expect(conflict.local['name'], 'edited',
          reason: 'the local payload is preserved for resolution');
      expect((await sr(h.pocket, id))!.syncState, SyncState.conflict);
      // Payload is preserved for inspection / recovery.
      final local = await h.pocket.collection('widgets').get(id);
      expect(local!['name'], 'edited');
    });

    test('push 403 parks the op in blocked and requeues on recovery', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);

      final id = generateRecordId();
      await h.pocket.collection('widgets').put(record(id: id, name: 'mine'));
      h.mock.script('createRecord', [MockThrow(ForbiddenError())]);
      final report = await h.engine.syncNow();

      // A 403 is recoverable: the op is parked in `blocked`, never dead-lettered.
      expect(report.blocked, 1,
          reason: '403 parks the op in blocked, reported by the engine');
      expect(report.deadLettered, 0,
          reason: 'forbidden pushes are recoverable, never dead-lettered');
      expect(await deadLetters(h.pocket), isEmpty);
      expect((await sr(h.pocket, id))!.syncState, SyncState.blocked);
      final op = await h.pocket.outbox.readOp(h.pocket.db, 'widgets', id);
      expect(op, isNotNull, reason: 'op retained for requeue');
      final local = await h.pocket.collection('widgets').get(id);
      expect(local!['name'], 'mine', reason: 'local copy kept');
      expect(h.mock.records.containsKey(id), isFalse,
          reason: 'nothing hit the server while forbidden');

      // Drain excludes blocked ops: a second cycle must not retry or move it.
      await h.engine.syncNow();
      expect(h.mock.createCalls, 1, reason: 'blocked op is not retried');
      expect((await sr(h.pocket, id))!.syncState, SyncState.blocked);

      // Once permissions recover, requeue and push succeeds.
      expect(await h.pocket.outbox.requeueBlocked(), 1);
      expect((await sr(h.pocket, id))!.syncState, SyncState.dirty);
      await h.engine.syncNow();
      expect(h.mock.records.containsKey(id), isTrue);
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
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

    test('merged push publishes a ChangeSet for the merged domain write',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);

      final id = h.mock.seed(store: 'widgets', data: {'name': 'n0', 'qty': 1});
      await h.engine.syncNow(); // pull -> clean

      await h.pocket.collection('widgets').patch(id, {'name': 'local'});
      h.mock.mutate(id, {'id': id, 'name': 'n0', 'qty': 99});

      final changes = <ChangeSet>[];
      final sub = h.pocket.changeBus.stream.listen(changes.add);
      addTearDown(sub.cancel);

      await h.engine.syncNow();

      // The merge landed locally and the row went clean.
      final local = await h.pocket.collection('widgets').get(id);
      expect(local!['name'], 'local');
      expect(local['qty'], 99, reason: 'merged remote value written locally');
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);

      // The merged domain write must have published a ChangeSet.
      await Future<void>.delayed(Duration.zero);
      await Future<void>.delayed(Duration.zero);
      expect(changes.any((c) => c.store == 'widgets' && c.ids.contains(id)),
          isTrue,
          reason: 'merged domain write emitted a ChangeSet');
    });

    test('merged push settlement race keeps a newer edit and stays dirty',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);

      final id = h.mock.seed(store: 'widgets', data: {'name': 'n0', 'qty': 1});
      await h.engine.syncNow(); // pull -> clean

      // Local edit (name) + concurrent remote edit (qty) -> merge on push.
      await h.pocket.collection('widgets').patch(id, {'name': 'local'});
      h.mock.mutate(id, {'id': id, 'name': 'n0', 'qty': 99});

      final changes = <ChangeSet>[];
      final sub = h.pocket.changeBus.stream.listen(changes.add);
      addTearDown(sub.cancel);

      // Block the remote update request after the merge is computed.
      final entered = Completer<void>();
      final release = Completer<void>();
      h.mock.updateRecordEntered = entered;
      h.mock.updateRecordBarrier = release;

      final syncFuture = h.engine.syncNow();
      await entered.future;

      // Edit the same row again while the request is in flight.
      await h.pocket.collection('widgets').patch(id, {'qty': 5});
      expect((await sr(h.pocket, id))!.syncState, SyncState.dirty);

      release.complete();
      final report = await syncFuture;
      expect(report.hadError, isFalse);
      h.mock.updateRecordBarrier = null;
      h.mock.updateRecordEntered = null;

      // The second edit survives: the stale merge must not overwrite it.
      final local = await h.pocket.collection('widgets').get(id);
      expect(local!['qty'], 5,
          reason: 'second edit not overwritten by the stale merge');
      expect(local['name'], 'local');
      final op = await h.pocket.outbox.readOp(h.pocket.db, 'widgets', id);
      expect(op, isNotNull, reason: 'outbox row retained');
      expect(jsonDecode(op!.payloadJson)['qty'], 5);
      expect((await sr(h.pocket, id))!.syncState, SyncState.dirty,
          reason: 'sync row stays dirty');

      // The settlement still publishes a ChangeSet (advance-base branch).
      await Future<void>.delayed(Duration.zero);
      await Future<void>.delayed(Duration.zero);
      expect(changes.any((c) => c.store == 'widgets' && c.ids.contains(id)),
          isTrue,
          reason: 'settlement emitted a ChangeSet');

      // A subsequent cycle converges: the newer edit is pushed.
      await h.engine.syncNow();
      expect(h.mock.records[id]!.data['qty'], 5);
      expect(h.mock.records[id]!.data['name'], 'local');
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
    });
  });

  /// A `widgets`-shaped schema carrying a custom conflict policy (used by the
  /// resolver-failure matrix).
  CollectionSchema schemaWithPolicy(ConflictPolicy policy) => CollectionSchema(
        name: 'widgets',
        version: 1,
        fields: [
          Field.text('name', required: true),
          Field.int('qty'),
          Field.real('price'),
          Field.bool('active'),
          Field.date('made_on'),
          Field.enumValue('size', ['S', 'M', 'L']),
          Field.json('meta'),
          Field.jsonList('tags'),
          Field.ref('owner_id', to: 'owners'),
          Field.text('phone', uniqueWhenActive: true),
        ],
        indexes: const [
          IndexSpec(['name', 'qty'])
        ],
        conflictPolicy: policy,
      );

  group('pusher targeted-fetch result matrix', () {
    test('getRecord returns null: vanished update escalates, no crash',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'edited'});
      h.mock.script('getRecord', [MockReturn(null)]);

      final report = await h.engine.syncNow();
      expect(report.deadLettered, 0,
          reason: 'vanished target escalates a conflict, never a null crash');
      expect(report.hadError, isFalse);
      expect(await deadLetters(h.pocket), isEmpty);
      final conflict = await h.pocket.conflicts.get('widgets', id);
      expect(conflict!.remoteDeleted, isTrue);
      final local = await h.pocket.collection('widgets').get(id);
      expect(local!['name'], 'edited', reason: 'local copy preserved');
      expect((await sr(h.pocket, id))!.syncState, SyncState.conflict);
    });

    test('getRecord auth error parks the engine and keeps the op', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'edited'});
      h.mock.script('getRecord', [MockThrow(AuthError('401'))]);

      final report = await h.engine.syncNow();
      expect(report.hadError, isTrue);
      expect(h.engine.state, SyncEngineState.authRequired);
      expect((await sr(h.pocket, id))!.syncState, SyncState.dirty,
          reason: 'op retained, never dead-lettered on auth');
      expect(
          await h.pocket.outbox.readOp(h.pocket.db, 'widgets', id), isNotNull);
    });

    test('getRecord not-found escalates a delete conflict', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'edited'});
      h.mock.script('getRecord', [MockThrow(NotFoundError())]);

      final report = await h.engine.syncNow();
      expect(report.deadLettered, 0);
      expect(await deadLetters(h.pocket), isEmpty);
      final conflict = await h.pocket.conflicts.get('widgets', id);
      expect(conflict!.remoteDeleted, isTrue);
      final local = await h.pocket.collection('widgets').get(id);
      expect(local!['name'], 'edited');
    });

    test('getRecord forbidden parks the op in blocked (no dead letter)',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'edited'});
      h.mock.script('getRecord', [MockThrow(ForbiddenError())]);

      final report = await h.engine.syncNow();
      expect(report.blocked, 1, reason: '403 parks the op in blocked');
      expect(report.deadLettered, 0,
          reason: 'forbidden pushes are recoverable, never dead-lettered');
      expect(await deadLetters(h.pocket), isEmpty);
      final local = await h.pocket.collection('widgets').get(id);
      expect(local!['name'], 'edited');
      expect((await sr(h.pocket, id))!.syncState, SyncState.blocked);
      final op = await h.pocket.outbox.readOp(h.pocket.db, 'widgets', id);
      expect(op, isNotNull);

      // Requeue + retry: the now-permitted update reaches the server.
      expect(await h.pocket.outbox.requeueBlocked(), 1);
      await h.engine.syncNow();
      expect(h.mock.records[id]!.data['name'], 'edited');
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
    });

    test('getRecord busy throttles the lane and honors retry-after', () async {
      var clock = 1000000;
      final h =
          await EngineHarness.create(config: testConfig(now: () => clock));
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'edited'});
      h.mock.script('getRecord', [MockThrow(ServerBusyError('7'))]);

      await h.engine.syncNow();
      final row = await sr(h.pocket, id);
      expect(row!.attemptCount, 1);
      expect(row.nextRetryAt, clock + 7000,
          reason: 'retry-after honored on the targeted fetch');
      expect(row.syncState, SyncState.dirty);

      // Still inside the window: no retry.
      clock += 3000;
      await h.engine.syncNow();
      expect(h.mock.getCalls, 1);

      // Past the deadline: retried.
      clock += 5000;
      await h.engine.syncNow();
      expect(h.mock.getCalls, 2);
    });

    test('getRecord transient/5xx/protocol/payload errors retry with backoff',
        () async {
      final errors = <SyncError>[
        TransientNetworkError(),
        ServerError('500'),
        ProtocolError('bad json'),
        PayloadError('400'),
        DuplicateIdError(),
      ];
      for (final err in errors) {
        final h = await EngineHarness.create();
        final id =
            h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
        await h.engine.syncNow();
        await h.pocket.collection('widgets').patch(id, {'name': 'edited'});
        h.mock.script('getRecord', [MockThrow(err)]);

        final report = await h.engine.syncNow();
        expect(report.hadError, isTrue, reason: '${err.runtimeType}');
        final row = await sr(h.pocket, id);
        expect(row!.attemptCount, 1, reason: '${err.runtimeType}');
        expect(row.syncState, SyncState.dirty,
            reason: '${err.runtimeType}: op retained for retry');
        expect(
            await h.pocket.outbox.readOp(h.pocket.db, 'widgets', id), isNotNull,
            reason: '${err.runtimeType}: never silently dropped');
        await h.close();
      }
    });

    test('getRecord returning a foreign id wedges the op (never dropped)',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'edited'});

      // A misbehaving backend answers a DIFFERENT record than requested.
      final foreign = generateRecordId();
      h.mock.script('getRecord', [
        MockReturn(RemoteRecord(
            id: foreign,
            store: 'widgets',
            updated: '2025-06-01 00:00:00.000Z',
            data: {'id': foreign, 'name': 'foreign', 'qty': 1}))
      ]);

      // The mismatched-id response surfaces loudly (MapFailure) and the op is
      // retained for the next attempt — never silently acked.
      await expectLater(h.engine.syncNow(), throwsA(isA<MapFailure>()));
      expect(
          await h.pocket.outbox.readOp(h.pocket.db, 'widgets', id), isNotNull,
          reason: 'op retained for the next attempt');
      expect((await sr(h.pocket, id))!.syncState, SyncState.dirty);
      expect(await deadLetters(h.pocket), isEmpty);
    });
  });

  group('pusher normalization and resolver failures', () {
    test('async collection resolver is awaited during push merge', () async {
      final policy = ConflictPolicy(
        collectionResolver: CustomResolver((ctx) async {
          final l = ctx.local['qty'] as num;
          final r = ctx.remote['qty'] as num;
          return MergeResult(merged: {
            'id': ctx.recordId,
            'name': ctx.local['name'],
            'qty': l + r
          });
        }),
      );
      final h = await EngineHarness.create(stores: [schemaWithPolicy(policy)]);
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'n0', 'qty': 10});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'qty': 5});
      h.mock.mutate(id, {'id': id, 'name': 'n0', 'qty': 12});

      await h.engine.syncNow();
      expect(h.mock.records[id]!.data['qty'], 17,
          reason: 'async resolver output (5+12) was applied');
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
    });

    test('async field resolver is awaited during push merge', () async {
      final policy = ConflictPolicy(fieldOverrides: {
        'qty': CustomResolver((ctx) async {
          final l = ctx.local['qty'] as num;
          final r = ctx.remote['qty'] as num;
          return MergeResult(merged: {'qty': l * r});
        }),
      });
      final h = await EngineHarness.create(stores: [schemaWithPolicy(policy)]);
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'n0', 'qty': 10});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'qty': 5});
      h.mock.mutate(id, {'id': id, 'name': 'n0', 'qty': 12});

      await h.engine.syncNow();
      expect(h.mock.records[id]!.data['qty'], 60,
          reason: 'async field resolver output (5*12) was applied');
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
    });

    test('sync collection resolver still works through the push path',
        () async {
      final policy = ConflictPolicy(
        collectionResolver: CustomResolver((ctx) => MergeResult(
            merged: {'id': ctx.recordId, 'name': 'sync-merged', 'qty': 42})),
      );
      final h = await EngineHarness.create(stores: [schemaWithPolicy(policy)]);
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'n0', 'qty': 10});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'local'});
      h.mock.mutate(id, {'id': id, 'name': 'n0', 'qty': 12});

      await h.engine.syncNow();
      expect(h.mock.records[id]!.data['name'], 'sync-merged');
      expect(h.mock.records[id]!.data['qty'], 42);
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
    });

    test('resolver returning null escalates to a conflict', () async {
      final policy =
          ConflictPolicy(collectionResolver: CustomResolver((ctx) => null));
      final h = await EngineHarness.create(stores: [schemaWithPolicy(policy)]);
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'n0', 'qty': 10});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'local'});
      h.mock.mutate(id, {'id': id, 'name': 'n0', 'qty': 12});

      await h.engine.syncNow();
      final conflicts = await h.pocket.db
          .query('lp_conflicts', where: 'record_id = ?', whereArgs: [id]);
      expect(conflicts, isNotEmpty, reason: 'conflict row written');
      expect((await sr(h.pocket, id))!.syncState, SyncState.conflict);
    });

    test('resolver needsReview escalates to a conflict', () async {
      final policy = ConflictPolicy(
        collectionResolver:
            CustomResolver((ctx) => MergeResult(merged: {}, needsReview: true)),
      );
      final h = await EngineHarness.create(stores: [schemaWithPolicy(policy)]);
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'n0', 'qty': 10});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'local'});
      h.mock.mutate(id, {'id': id, 'name': 'n0', 'qty': 12});

      await h.engine.syncNow();
      final conflicts = await h.pocket.db
          .query('lp_conflicts', where: 'record_id = ?', whereArgs: [id]);
      expect(conflicts, isNotEmpty);
      expect((await sr(h.pocket, id))!.syncState, SyncState.conflict);
    });

    test('resolver merged map omitting id still patches via the URL', () async {
      final policy = ConflictPolicy(
        collectionResolver: CustomResolver((ctx) => MergeResult(merged: {
              'name': 'merged-name',
              'qty': 99,
              'price': 1.5,
              'active': true,
              'size': 'M',
            })),
      );
      final h = await EngineHarness.create(stores: [schemaWithPolicy(policy)]);
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'n0', 'qty': 10});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'local'});
      h.mock.mutate(id, {'id': id, 'name': 'n0', 'qty': 12});

      await h.engine.syncNow();
      // The merged payload reached the server (PATCH carries the id in URL).
      expect(h.mock.records[id]!.data['name'], 'merged-name');
      expect(h.mock.records[id]!.data['qty'], 99);
      expect(await deadLetters(h.pocket), isEmpty,
          reason: 'never dead-lettered for a missing id in the merge');
    });

    test('resolver throwing synchronously keeps the op pending', () async {
      final policy = ConflictPolicy(
        collectionResolver: CustomResolver((ctx) {
          throw StateError('resolver boom');
        }),
      );
      final h = await EngineHarness.create(stores: [schemaWithPolicy(policy)]);
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'n0', 'qty': 10});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'local'});
      h.mock.mutate(id, {'id': id, 'name': 'n0', 'qty': 12});

      // The resolver failure is loud (never silently swallowed) and the op is
      // retained for the next attempt.
      await expectLater(h.engine.syncNow(), throwsA(isA<StateError>()));
      expect(
          await h.pocket.outbox.readOp(h.pocket.db, 'widgets', id), isNotNull,
          reason: 'op never silently dropped');
      expect((await sr(h.pocket, id))!.syncState, SyncState.dirty);
      expect(await deadLetters(h.pocket), isEmpty);
    });

    test('resolver throwing asynchronously keeps the op pending', () async {
      final policy = ConflictPolicy(
        collectionResolver: CustomResolver((ctx) async {
          throw ArgumentError('async boom');
        }),
      );
      final h = await EngineHarness.create(stores: [schemaWithPolicy(policy)]);
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'n0', 'qty': 10});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'local'});
      h.mock.mutate(id, {'id': id, 'name': 'n0', 'qty': 12});

      await expectLater(h.engine.syncNow(), throwsA(isA<ArgumentError>()));
      expect(
          await h.pocket.outbox.readOp(h.pocket.db, 'widgets', id), isNotNull);
      expect((await sr(h.pocket, id))!.syncState, SyncState.dirty);
      expect(await deadLetters(h.pocket), isEmpty);
    });

    test('malformed remote during update normalization keeps the op pending',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'n0', 'qty': 10});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'local'});

      // Remote now carries an invalid `name` type (a misbehaving server).
      h.mock.script('getRecord', [
        MockReturn(RemoteRecord(
            id: id,
            store: 'widgets',
            updated: '2025-06-01 00:00:00.000Z',
            data: {'id': id, 'name': 7, 'qty': 10}))
      ]);

      // Normalization failure is loud (MapFailure) and the op stays pending.
      await expectLater(h.engine.syncNow(), throwsA(isA<MapFailure>()));
      expect(
          await h.pocket.outbox.readOp(h.pocket.db, 'widgets', id), isNotNull,
          reason: 'op retained');
      expect((await sr(h.pocket, id))!.syncState, SyncState.dirty);
      expect(await deadLetters(h.pocket), isEmpty);
    });

    test('malformed remote during create recovery keeps the op pending',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = generateRecordId();
      await h.pocket.collection('widgets').put(record(id: id, name: 'x'));
      // create -> duplicate -> GET returns a malformed record.
      h.mock.script('createRecord', [MockThrow(DuplicateIdError())]);
      h.mock.script('getRecord', [
        MockReturn(RemoteRecord(
            id: id,
            store: 'widgets',
            updated: '2026-01-01 00:00:00.000Z',
            data: {'id': id, 'name': 7}))
      ]);
      h.mock.script('listChanges', [MockReturn(const <RemoteRecord>[])]);

      await expectLater(h.engine.syncNow(), throwsA(isA<MapFailure>()));
      expect(
          await h.pocket.outbox.readOp(h.pocket.db, 'widgets', id), isNotNull,
          reason: 'op retained for recovery');
      expect(await deadLetters(h.pocket), isEmpty);
    });
  });

  group('push settlement server-response variants', () {
    test('server transforms the payload: push ACKed, next pull converges',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = generateRecordId();
      await h.pocket.collection('widgets').put(record(id: id, name: 'mine'));

      // The server normalizes the payload (renames, bumps qty) and stamps a
      // server-side updated time.
      const serverUpdated = '2026-02-03 04:05:06.000Z';
      h.mock.script('createRecord', [
        MockReturn(RemoteRecord(
            id: id,
            store: 'widgets',
            updated: serverUpdated,
            data: {'id': id, 'name': 'server-renamed', 'qty': 7}))
      ]);

      final report = await h.engine.syncNow();
      expect(report.pushed, 1);
      final row = await sr(h.pocket, id);
      expect(row!.syncState, SyncState.clean);
      expect(row.remoteUpdated, serverUpdated,
          reason: 'settlement trusts the server updated timestamp');
      // The transformed server value is not silently dropped: the next pull
      // brings it in.
      h.mock.records[id] = MockRecord(
          id: id,
          store: 'widgets',
          data: {'id': id, 'name': 'server-renamed', 'qty': 7},
          updated: serverUpdated);
      await h.engine.syncNow();
      final local = await h.pocket.collection('widgets').get(id);
      expect(local!['name'], 'server-renamed');
    });

    test('server omits id in response data: settle injects the record id',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = generateRecordId();
      await h.pocket.collection('widgets').put(record(id: id, name: 'mine'));

      h.mock.script('createRecord', [
        MockReturn(RemoteRecord(
            id: id,
            store: 'widgets',
            updated: '2026-02-03 04:05:06.000Z',
            data: {'name': 'mine', 'qty': 2}))
      ]);

      final report = await h.engine.syncNow();
      expect(report.pushed, 1);
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean,
          reason: 'missing id in data is normalized, not quarantined');
      expect(await deadLetters(h.pocket), isEmpty);
    });

    test('server adds extra remote keys: adopted without corrupting the settle',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = generateRecordId();
      await h.pocket.collection('widgets').put(record(id: id, name: 'mine'));

      h.mock.script('createRecord', [
        MockReturn(RemoteRecord(
            id: id,
            store: 'widgets',
            updated: '2026-02-03 04:05:06.000Z',
            data: {'id': id, 'name': 'mine', 'secret_server_only': 'x'}))
      ]);

      await h.engine.syncNow();
      // The settle handled the extra key: the row is clean and the server's
      // transformed content (extra key included) was preserved locally.
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
      expect(await deadLetters(h.pocket), isEmpty);
      final local = await h.pocket.collection('widgets').get(id);
      expect(local!['name'], 'mine');
      expect(local['secret_server_only'], 'x',
          reason: 'server extras are preserved via the settlement adoption');
    });

    test('different updated timestamps between requests are respected',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'n0', 'qty': 1});
      await h.engine.syncNow();
      final before = (await sr(h.pocket, id))!.remoteUpdated;

      // Server bumps its updated time on the PATCH response.
      const serverUpdated = '2026-03-04 05:06:07.000Z';
      h.mock.script('updateRecord', [
        MockReturn(RemoteRecord(
            id: id,
            store: 'widgets',
            updated: serverUpdated,
            data: {'id': id, 'name': 'patched', 'qty': 1}))
      ]);
      await h.pocket.collection('widgets').patch(id, {'qty': 5});
      await h.engine.syncNow();

      final row = await sr(h.pocket, id);
      expect(row!.syncState, SyncState.clean);
      expect(row.remoteUpdated, serverUpdated);
      expect(row.remoteUpdated, isNot(before));
    });

    test('batch push with pushedJson null falls back to the requested payload',
        () async {
      final h = await EngineHarness.create(
          mock: MockSyncBackend()..batchEnabled = true);
      addTearDown(h.close);
      final id = generateRecordId();
      await h.pocket.collection('widgets').put(record(id: id, name: 'mine'));
      final opId =
          (await h.pocket.outbox.readOp(h.pocket.db, 'widgets', id))!.opId;

      h.mock.script('pushBatch', [
        MockReturn([
          PushResult(
            opId: opId,
            ok: true,
            record: RemoteRecord(
                id: id,
                store: 'widgets',
                updated: '2026-02-03 04:05:06.000Z',
                data: {'id': id, 'name': 'mine'}),
            pushedJson: null,
          )
        ])
      ]);

      await h.engine.syncNow();
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean,
          reason: 'pushedJson null falls back to the requested payload');
      expect(await deadLetters(h.pocket), isEmpty);
    });
  });
}
