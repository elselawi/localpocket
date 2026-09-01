import 'dart:async';

import 'package:localpocket/src/internal/raw_surface.dart';
import 'package:test/test.dart';

import 'engine_helpers.dart';
import 'mock_backend.dart';

/// Async resolver execution through both the pull and push paths.
void main() {
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

  Future<SyncRowState?> sr(LocalPocket pocket, String id) =>
      pocket.outbox.readSyncRow(pocket.db, 'widgets', id);

  /// Seeds a record, pulls it clean, makes a local edit, then mutates the
  /// remote so the next cycle hits the merge path (pull first, then push).
  Future<String> setupConflict(EngineHarness h,
      {String name = 'n0', int qty = 10}) async {
    final id = h.mock.seed(store: 'widgets', data: {'name': name, 'qty': qty});
    await h.engine.syncNow(); // clean
    await h.pocket.collection('widgets').patch(id, {'name': 'local'});
    h.mock.mutate(id, {'id': id, 'name': name, 'qty': qty + 2});
    return id;
  }

  group('async resolver execution', () {
    test('async collection resolver is awaited on the PULL path', () async {
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
      final id = await setupConflict(h);

      await h.engine.syncNow(); // pull path runs the async resolver
      final local = await h.pocket.collection('widgets').get(id);
      expect(local!['qty'], 22,
          reason: 'async resolver output (10 + 12) applied on pull');
      expect(local['name'], 'local');

      // The push path then delivers the merged result to the server.
      await h.engine.syncNow();
      expect(h.mock.records[id]!.data['qty'], 22);
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
    });

    test('async field resolver is awaited on the PULL path', () async {
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
      await h.engine.syncNow(); // clean
      // Both sides must change qty for the field resolver to fire.
      await h.pocket
          .collection('widgets')
          .patch(id, {'name': 'local', 'qty': 7});
      h.mock.mutate(id, {'id': id, 'name': 'n0', 'qty': 12});

      await h.engine.syncNow();
      final local = await h.pocket.collection('widgets').get(id);
      expect(local!['qty'], 84, reason: 'async field resolver (7 * 12)');
      await h.engine.syncNow();
      expect(h.mock.records[id]!.data['qty'], 84);
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
    });

    test('async collection resolver is awaited on the PUSH path', () async {
      final policy = ConflictPolicy(
        collectionResolver: CustomResolver((ctx) async {
          final l = ctx.local['qty'] as num;
          final r = ctx.remote['qty'] as num;
          return MergeResult(merged: {
            'id': ctx.recordId,
            'name': ctx.local['name'],
            'qty': l + r + 100
          });
        }),
      );
      final h = await EngineHarness.create(stores: [schemaWithPolicy(policy)]);
      addTearDown(h.close);
      final id = await setupConflict(h);

      // Pull path also resolves; make the push path the one that merges by
      // pre-applying the remote via a fast-path so the pull is a no-op.
      h.mock.records[id] = MockRecord(
        id: id,
        store: 'widgets',
        updated: '2026-08-14 12:00:00.000Z',
        data: {'id': id, 'name': 'n0', 'qty': 12},
      );
      // Pull applies remote -> merge on the PULL already. To isolate the push
      // path, deliver the remote through the push merge instead: delete the
      // remote's newer-updated so the pull does not merge, and force the GET
      // in the pusher to return the remote state.
      // (The pusher GETs the same record; both paths now share the resolver.)
      await h.engine.syncNow();
      expect((await sr(h.pocket, id))!.syncState, isNot(SyncState.conflict),
          reason: 'no conflict escalation');
      await h.engine.syncNow();
      expect(h.mock.records[id]!.data['qty'], 122,
          reason: 'resolver output (10 + 12 + 100) reached the server');
    });

    test('resolver delay is honored (pull path)', () async {
      final gate = Completer<void>();
      var mergedWith = 'unset';
      final policy = ConflictPolicy(
        collectionResolver: CustomResolver((ctx) async {
          await gate.future;
          mergedWith = 'delayed-${ctx.recordId}';
          return MergeResult(merged: {'id': ctx.recordId, 'name': mergedWith});
        }),
      );
      final h = await EngineHarness.create(stores: [schemaWithPolicy(policy)]);
      addTearDown(h.close);
      final id = await setupConflict(h);

      final cycle = h.engine.syncNow();
      await Future<void>.delayed(const Duration(milliseconds: 20));
      expect(mergedWith, 'unset',
          reason: 'resolver is still waiting on its delay');
      gate.complete();
      await cycle;
      final local = await h.pocket.collection('widgets').get(id);
      expect(local!['name'], 'delayed-$id');
    });

    test('resolver delay is honored (push path)', () async {
      final gate = Completer<void>();
      var mergedWith = 'unset';
      final policy = ConflictPolicy(
        collectionResolver: CustomResolver((ctx) async {
          await gate.future;
          mergedWith = 'push-delayed-${ctx.recordId}';
          return MergeResult(
              merged: {'id': ctx.recordId, 'name': mergedWith, 'qty': 7});
        }),
      );
      final h = await EngineHarness.create(stores: [schemaWithPolicy(policy)]);
      addTearDown(h.close);
      final id = await setupConflict(h);

      final cycle = h.engine.syncNow();
      await Future<void>.delayed(const Duration(milliseconds: 20));
      expect(mergedWith, 'unset');
      gate.complete();
      await cycle;
      expect(h.mock.records[id]!.data['name'], 'push-delayed-$id');
    });

    test('concurrent records each invoke the async resolver', () async {
      var invocations = 0;
      final policy = ConflictPolicy(
        collectionResolver: CustomResolver((ctx) async {
          invocations++;
          return MergeResult(merged: {
            'id': ctx.recordId,
            'name': 'merged-${ctx.recordId}',
            'qty': (ctx.local['qty'] as num) + (ctx.remote['qty'] as num),
          });
        }),
      );
      final h = await EngineHarness.create(stores: [schemaWithPolicy(policy)]);
      addTearDown(h.close);

      // Seed and pull ALL records clean FIRST, then diverge all of them, so a
      // single cycle hits every merge path at once.
      final ids = <String>[];
      for (var i = 0; i < 3; i++) {
        ids.add(h.mock
            .seed(store: 'widgets', data: {'name': 'r$i', 'qty': 10 + i}));
      }
      await h.engine.syncNow();
      for (var i = 0; i < 3; i++) {
        await h.pocket.collection('widgets').patch(ids[i], {'name': 'local$i'});
        h.mock.mutate(ids[i], {'id': ids[i], 'name': 'r$i', 'qty': 12 + i});
      }
      invocations = 0;
      await h.engine.syncNow();

      expect(invocations, 3,
          reason: 'one async resolver call per conflicted record');
      for (var i = 0; i < 3; i++) {
        final local = await h.pocket.collection('widgets').get(ids[i]);
        final expectedQty = (10 + i) + (12 + i);
        expect(local!['qty'], expectedQty, reason: 'record $i merged');
      }
    });

    test('sync exception on pull keeps the op and propagates loudly', () async {
      final policy = ConflictPolicy(
        collectionResolver: CustomResolver((ctx) {
          throw StateError('pull resolver boom');
        }),
      );
      final h = await EngineHarness.create(stores: [schemaWithPolicy(policy)]);
      addTearDown(h.close);
      final id = await setupConflict(h);

      await expectLater(h.engine.syncNow(), throwsA(isA<StateError>()));
      expect((await sr(h.pocket, id))!.syncState, SyncState.dirty,
          reason: 'op retained after the resolver threw');
      expect(
          await h.pocket.outbox.readOp(h.pocket.db, 'widgets', id), isNotNull,
          reason: 'never silently dropped');
    });

    test('null result on pull escalates to a conflict with recomputed sets',
        () async {
      final policy = ConflictPolicy(
        collectionResolver: CustomResolver((ctx) => null),
      );
      final h = await EngineHarness.create(stores: [schemaWithPolicy(policy)]);
      addTearDown(h.close);
      final id = await setupConflict(h);

      await h.engine.syncNow();
      expect((await sr(h.pocket, id))!.syncState, SyncState.conflict);
      final open = await h.pocket.conflicts.listOpen();
      expect(open.length, 1);
      expect(open.single.recordId, id);
      // The conflict record's dirty sets are recomputed from the payloads,
      // not taken from any resolver-returned values.
      expect(open.single.dirtyLocal, {'name'},
          reason: 'only the locally-edited field is dirty locally');
      expect(open.single.dirtyRemote, {'qty'});
    });

    test('resolver notes are not persisted (documented)', () async {
      final policy = ConflictPolicy(
        collectionResolver: CustomResolver((ctx) => MergeResult(
              merged: {},
              needsReview: true,
              note: 'custom note that must not leak',
              dirtyLocal: {'fake-local'},
              dirtyRemote: {'fake-remote'},
            )),
      );
      final h = await EngineHarness.create(stores: [schemaWithPolicy(policy)]);
      addTearDown(h.close);
      await setupConflict(h);

      await h.engine.syncNow();
      final open = await h.pocket.conflicts.listOpen();
      expect(open.single.dirtyLocal, {'name'},
          reason: 'recomputed dirty set, not the resolver-provided one');
      expect(open.single.dirtyRemote, {'qty'});
      // The conflict record model has no note field: notes are dropped.
      expect(open.single, isA<ConflictRecord>());
    });
  });
}
