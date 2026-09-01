import 'dart:async';

import 'package:localpocket/src/kernel/change_bus.dart';
import 'package:localpocket/src/kernel/errors.dart';
import 'package:localpocket/src/kernel/local_pocket.dart';
import 'package:localpocket/src/kernel/schema.dart';
import 'package:localpocket/src/kernel/sync/conflicts.dart';
import 'package:localpocket/src/kernel/sync/sync_backend.dart';
import 'package:localpocket/src/kernel/sync/sync_tables.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';
import '../invariants_oracle.dart';
import 'engine_helpers.dart';
import 'mock_backend.dart';

/// `MissingRemotePolicy` matrix: what happens when a pushed update's target
/// no longer exists remotely (a remote deletion raced a local offline edit).
///
/// Covers all three policies on the per-record path AND the batch-preflight
/// path, the null-GET and conflict-re-fetch variants, the recreate loop
/// guard, the conflicts-UI resolution of tombstones (acceptLocal / custom /
/// acceptRemote), edit blocking, watch emissions, and oracle compliance.
/// The whole feature is client-side: no new wire calls beyond the existing
/// `getRecord`/`createRecord`/`updateRecord` contract.
void main() {
  CollectionSchema<Object?> policySchema(MissingRemotePolicy policy) =>
      CollectionSchema(
        name: 'widgets',
        version: 1,
        fields: [
          Field.text('name', required: true),
          Field.int('qty'),
        ],
        conflictPolicy: ConflictPolicy(missingRemote: policy),
      );

  Future<SyncRowState?> sr(LocalPocket pocket, String id) =>
      pocket.outbox.readSyncRow(pocket.db, 'widgets', id);

  Future<List<Map<String, Object?>>> deadLetters(LocalPocket pocket) =>
      pocket.db.query('lp_dead_letter', orderBy: 'at ASC');

  group('policy surface', () {
    test('the default policy is conflict', () {
      expect(widgetsSchema().conflictPolicy.missingRemote,
          MissingRemotePolicy.conflict);
      expect(
          const ConflictPolicy().missingRemote, MissingRemotePolicy.conflict);
    });

    test('ConflictPolicy.defaults carries the policy', () {
      final policy =
          ConflictPolicy.defaults(missingRemote: MissingRemotePolicy.recreate);
      expect(policy.missingRemote, MissingRemotePolicy.recreate);
    });

    test('every policy round-trips through its name', () {
      for (final policy in MissingRemotePolicy.values) {
        expect(MissingRemotePolicy.values.byName(policy.name), policy);
      }
    });
  });

  group('per-record push: default conflict policy', () {
    test('a vanished target escalates a tombstone conflict (oracle-clean)',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'edited'});
      final op = await h.pocket.outbox.readOp(h.pocket.db, 'widgets', id);
      final baseUpdated = op!.baseUpdated;
      h.mock.delete(id); // hard-deleted server-side before the push
      final report = await h.engine.syncNow();

      expect(report.deadLettered, 0);
      expect(await deadLetters(h.pocket), isEmpty);
      expect(h.mock.records, isEmpty,
          reason: 'the vanished target is never recreated remotely');

      final conflict = await h.pocket.conflicts.get('widgets', id);
      expect(conflict, isNotNull);
      expect(conflict!.remoteDeleted, isTrue,
          reason: 'the remote side is recorded as a tombstone');
      expect(conflict.remote, {remoteDeletedKey: true});
      expect(conflict.local['name'], 'edited',
          reason: 'the local payload is preserved for resolution');
      expect(conflict.base['name'], 'v1',
          reason: 'the base is the shared pre-edit document');
      expect(conflict.dirtyLocal, contains('name'));
      expect(conflict.dirtyRemote, isEmpty,
          reason: 'the remote side changed nothing field-wise: it vanished');

      final row = await sr(h.pocket, id);
      expect(row!.syncState, SyncState.conflict);
      expect(row.accessState, AccessState.visible,
          reason: 'a push-side 404 never hides the row');
      expect(row.baseUpdated, baseUpdated,
          reason: 'the resolution base stays the last known remote version');
      expect(
          await h.pocket.outbox.readOp(h.pocket.db, 'widgets', id), isNotNull,
          reason: 'the op is retained for resolution');
      expect((await h.pocket.collection('widgets').get(id))!['name'], 'edited',
          reason: 'nothing is silently discarded');
      await expectSyncInvariants(h.pocket, 'widgets', id);
    });

    test('the conflicts API surfaces it and the watch emits', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1'});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'edited'});

      final emitted = <List<ConflictRecord>>[];
      final sub = h.pocket.conflicts.watch().listen(emitted.add);
      addTearDown(sub.cancel);
      await Future<void>.delayed(const Duration(milliseconds: 10));

      h.mock.delete(id);
      await h.engine.syncNow();
      await Future<void>.delayed(const Duration(milliseconds: 20));

      final open = await h.pocket.conflicts.listOpen();
      expect(open, hasLength(1));
      expect(open.single.remoteDeleted, isTrue);
      expect(emitted, isNotEmpty);
      expect(
          emitted.last.any((c) => c.recordId == id && c.remoteDeleted), isTrue);
    });

    test('acceptLocal recreates the record remotely with the local content',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1'});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'edited'});
      h.mock.delete(id);
      await h.engine.syncNow();
      expect((await sr(h.pocket, id))!.syncState, SyncState.conflict);

      await h.pocket.conflicts.acceptLocal('widgets', id);
      final row = await sr(h.pocket, id);
      expect(row!.syncState, SyncState.dirty);
      expect(row.baseUpdated, isNull,
          reason: 'resolving a tombstone produces a create-path op');
      expect(await h.pocket.conflicts.get('widgets', id), isNull);

      final report = await h.engine.syncNow();
      expect(report.pushed, 1);
      expect(h.mock.createCalls, 1, reason: 'the record is recreated');
      expect(h.mock.records.length, 1);
      expect(h.mock.records[id]!.data['name'], 'edited');
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
      expect(await h.pocket.outbox.readOp(h.pocket.db, 'widgets', id), isNull);
    });

    test('acceptRemote discards the local copy and mirrors the deletion',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1'});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'edited'});
      h.mock.delete(id);
      await h.engine.syncNow();

      final changes = <ChangeSet>[];
      final sub = h.pocket.changes.listen(changes.add);
      addTearDown(sub.cancel);

      await h.pocket.conflicts.acceptRemote('widgets', id);

      expect(await h.pocket.collection('widgets').get(id), isNull,
          reason: 'the local row is gone');
      expect(await h.pocket.conflicts.get('widgets', id), isNull);
      expect(await sr(h.pocket, id), isNull);
      expect(await h.pocket.outbox.readOp(h.pocket.db, 'widgets', id), isNull);
      expect(changes.any((cs) => cs.store == 'widgets' && cs.ids.contains(id)),
          isTrue,
          reason: 'the discard publishes a ChangeSet for watchers');
    });

    test('resolve with a custom document recreates with the merged content',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'edited'});
      h.mock.delete(id);
      await h.engine.syncNow();

      await h.pocket.conflicts
          .resolve(store: 'widgets', id: id, merged: {'name': 'merged'});

      final report = await h.engine.syncNow();
      expect(report.pushed, 1);
      expect(h.mock.records[id]!.data['name'], 'merged');
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
    });

    test('local edits stay blocked while the delete conflict is open',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1'});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'edited'});
      h.mock.delete(id);
      await h.engine.syncNow();

      await expectLater(
          h.pocket.collection('widgets').patch(id, {'name': 'blocked'}),
          throwsA(isA<ConflictBlockedError>()));
      expect((await h.pocket.collection('widgets').get(id))!['name'], 'edited',
          reason: 'the blocked edit never landed');
    });

    test('a 404 on the OCC re-fetch after a version conflict also escalates',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1'});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'edited'});

      // First GET succeeds (unchanged), the PATCH is rejected as a version
      // conflict, and the re-fetch answers 404 (the record vanished).
      final v1 = h.mock.records[id]!.toRemote();
      h.mock.script('getRecord', [MockReturn(v1), MockThrow(NotFoundError())]);
      h.mock.script('updateRecord', [MockThrow(RemoteVersionConflict())]);

      final report = await h.engine.syncNow();
      expect(report.deadLettered, 0);
      final conflict = await h.pocket.conflicts.get('widgets', id);
      expect(conflict!.remoteDeleted, isTrue);
      expect((await sr(h.pocket, id))!.syncState, SyncState.conflict);
    });
  });

  group('per-record push: recreate policy', () {
    test('recreates the record remotely and settles clean', () async {
      final h = await EngineHarness.create(
          stores: [policySchema(MissingRemotePolicy.recreate)]);
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1'});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'edited'});

      h.mock.delete(id);
      final report = await h.engine.syncNow();

      expect(report.pushed, 1);
      expect(h.mock.createCalls, 1);
      expect(h.mock.records.length, 1, reason: 'exactly one remote record');
      expect(h.mock.records[id]!.data['name'], 'edited');
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
      expect(await h.pocket.conflicts.get('widgets', id), isNull);
      expect(await deadLetters(h.pocket), isEmpty);
    });

    test(
        'an oscillating backend can never loop: the second miss '
        'dead-letters', () async {
      final h = await EngineHarness.create(
          stores: [policySchema(MissingRemotePolicy.recreate)]);
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1'});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'edited'});

      // Pathological server: the GET succeeds, every PATCH answers 404, and
      // the recreate is refused as a duplicate — the record keeps oscillating
      // between "exists" and "gone" from the client's point of view.
      h.mock.script('updateRecord',
          [MockThrow(NotFoundError()), MockThrow(NotFoundError())]);
      h.mock.script('createRecord', [MockThrow(DuplicateIdError())]);

      final report = await h.engine.syncNow();

      expect(report.deadLettered, 1,
          reason: 'the re-entrant miss dead-letters instead of looping');
      expect(h.mock.updateCalls, 2);
      expect(h.mock.createCalls, 1, reason: 'exactly one recreate attempt');
      final dl = await deadLetters(h.pocket);
      expect(dl.single['kind'], 'missing_target');
      expect((await sr(h.pocket, id))!.syncState, SyncState.error);
      expect(
          await h.pocket.outbox.readOp(h.pocket.db, 'widgets', id), isNotNull,
          reason: 'the op is retained');
      expect(h.mock.records[id]!.data['name'], 'v1',
          reason: 'the remote record was never overwritten');
    });
  });

  group('per-record push: discardLocal policy', () {
    test('discards the local edit and mirrors the remote deletion', () async {
      final h = await EngineHarness.create(
          stores: [policySchema(MissingRemotePolicy.discardLocal)]);
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1'});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'edited'});

      final changes = <ChangeSet>[];
      final sub = h.pocket.changes.listen(changes.add);
      addTearDown(sub.cancel);

      h.mock.delete(id);
      final report = await h.engine.syncNow();

      expect(report.discarded, 1);
      expect(report.pushed, 0);
      expect(await deadLetters(h.pocket), isEmpty);
      expect(await h.pocket.collection('widgets').get(id), isNull,
          reason: 'the local row is gone');
      expect(await sr(h.pocket, id), isNull);
      expect(await h.pocket.outbox.readOp(h.pocket.db, 'widgets', id), isNull);
      expect(await h.pocket.conflicts.get('widgets', id), isNull);
      expect(h.mock.records, isEmpty, reason: 'nothing was recreated');
      expect(changes.any((cs) => cs.store == 'widgets' && cs.ids.contains(id)),
          isTrue,
          reason: 'the discard publishes a ChangeSet for watchers');
    });
  });

  group('batch preflight: policy dispatch', () {
    MockSyncBackend batchMock() => MockSyncBackend()..batchEnabled = true;

    test('conflict: the preflight 404 escalates and nothing is batched',
        () async {
      final h = await EngineHarness.create(
          mock: batchMock(),
          stores: [policySchema(MissingRemotePolicy.conflict)]);
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1'});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'edited'});

      h.mock.delete(id);
      final report = await h.engine.syncNow();

      expect(report.deadLettered, 0);
      expect(h.mock.batchCalls, 0, reason: 'the vanished op never batched');
      expect(h.mock.createCalls, 0);
      final conflict = await h.pocket.conflicts.get('widgets', id);
      expect(conflict!.remoteDeleted, isTrue);
      expect((await sr(h.pocket, id))!.syncState, SyncState.conflict);
    });

    test('recreate: the preflight 404 recreates the record', () async {
      final h = await EngineHarness.create(
          mock: batchMock(),
          stores: [policySchema(MissingRemotePolicy.recreate)]);
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1'});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'edited'});

      h.mock.delete(id);
      final report = await h.engine.syncNow();

      expect(report.pushed, 1);
      expect(h.mock.createCalls, 1);
      expect(h.mock.records[id]!.data['name'], 'edited');
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
    });

    test('discardLocal: the preflight 404 discards the local edit', () async {
      final h = await EngineHarness.create(
          mock: batchMock(),
          stores: [policySchema(MissingRemotePolicy.discardLocal)]);
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1'});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'edited'});

      h.mock.delete(id);
      final report = await h.engine.syncNow();

      expect(report.discarded, 1);
      expect(h.mock.batchCalls, 0);
      expect(await h.pocket.collection('widgets').get(id), isNull);
    });
  });
}
