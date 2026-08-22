import 'package:localpocket/localpocket.dart';
import 'package:localpocket/sync.dart';
import 'package:test/test.dart';

import 'engine_helpers.dart';

/// "Seen-vs-applied watermarks".
///
/// A conflict is recorded while the pull cursor keeps advancing (the record
/// WAS seen), but the sync row's `remote_updated` must never advance past the
/// version actually applied to the domain. The conflicted remote version is
/// captured as the resolution base (`base_updated`) instead, so resolution
/// still writes the correct base and the row converges.
void main() {
  Map<String, Object?> doc(String id, String name, [int qty = 0]) => {
        if (id.isNotEmpty) 'id': id,
        'name': name,
        'qty': qty,
      };

  Future<SyncRowState?> sr(LocalPocket pocket, String id) =>
      pocket.outbox.readSyncRow(pocket.db, 'widgets', id);

  /// A schema whose merges always escalate to a conflict (needs review), so
  /// a dirty row whose remote moves deterministically opens a conflict.
  CollectionSchema conflictSchema() => CollectionSchema(
        name: 'widgets',
        version: 1,
        fields: [
          Field.text('name', required: true),
          Field.int('qty'),
        ],
        conflictPolicy: ConflictPolicy(
          collectionResolver: CustomResolver((ctx) => null), // force escalation
        ),
      );

  group('seen-vs-applied watermarks (#31)', () {
    test(
        'a pull conflict never advances remote_updated past the applied '
        'version; the conflicted remote becomes the base', () async {
      final h = await EngineHarness.create(stores: [conflictSchema()]);
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: doc('', 'v1', 1));
      await h.engine.syncNow();
      final appliedV1 = h.mock.records[id]!.updated;
      expect((await sr(h.pocket, id))!.remoteUpdated, appliedV1);

      // Local edit on `name`, then the remote edits the SAME field -> conflict.
      await h.pocket.collection('widgets').patch(id, {'name': 'local'});
      h.mock.mutate(id, {'id': id, 'name': 'remote', 'qty': 1});
      final conflictedV2 = h.mock.records[id]!.updated;
      expect(conflictedV2, isNot(appliedV1));

      await h.engine.syncNow();

      final row = await sr(h.pocket, id);
      expect(row!.syncState, SyncState.conflict);
      // The applied watermark stays at the version actually applied (v1)...
      expect(row.remoteUpdated, appliedV1,
          reason: 'remote_updated must never advance past what is applied');
      // ...while the conflicted remote (v2) is captured as the resolution base.
      expect(row.baseUpdated, conflictedV2,
          reason: 'the conflicted remote is the resolution base');
      // The domain row still reflects the local edit, not the remote.
      final local = await h.pocket.collection('widgets').get(id);
      expect(local!['name'], 'local');
      // And the conflict row carries the conflicted remote payload.
      final open = await h.pocket.conflicts.listOpen(store: 'widgets');
      expect(open.map((c) => c.recordId), contains(id));
    });

    test('resolution uses the conflicted remote as the new base (regression)',
        () async {
      final h = await EngineHarness.create(stores: [conflictSchema()]);
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: doc('', 'v1', 1));
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'local'});
      h.mock.mutate(id, {'id': id, 'name': 'remote', 'qty': 1});
      await h.engine.syncNow();
      final conflictedV2 = h.mock.records[id]!.updated;
      expect((await sr(h.pocket, id))!.syncState, SyncState.conflict);

      // Resolve to a merged value.
      await h.pocket.conflicts.resolve(
          store: 'widgets', id: id, merged: {'name': 'merged', 'qty': 1});

      final row = await sr(h.pocket, id);
      expect(row!.syncState, SyncState.dirty);
      expect(row.baseUpdated, conflictedV2,
          reason: 'the resolution base is the CONFLICTED remote, not the '
              'pre-conflict applied version');
      expect(row.baseJson, contains('remote'),
          reason: 'base payload is the conflicted remote');
      final op = await h.pocket.outbox.readOp(h.pocket.db, 'widgets', id);
      expect(op, isNotNull);
      expect(op!.baseUpdated, conflictedV2,
          reason: 'the outbox op inherits the conflicted remote base');

      // The resolved edit pushes and the row converges.
      final report = await h.engine.syncNow();
      expect(report.pushed, 1);
      expect(h.mock.records[id]!.data['name'], 'merged');
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
    });

    test(
        'the pull cursor tracks the SEEN watermark while the applied '
        'watermark stays behind', () async {
      final h = await EngineHarness.create(stores: [conflictSchema()]);
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: doc('', 'v1', 1));
      await h.engine.syncNow();
      final appliedV1 = h.mock.records[id]!.updated;
      await h.pocket.collection('widgets').patch(id, {'name': 'local'});
      h.mock.mutate(id, {'id': id, 'name': 'remote', 'qty': 1});
      final conflictedV2 = h.mock.records[id]!.updated;

      await h.engine.syncNow();

      final row = await sr(h.pocket, id);
      expect(row!.remoteUpdated, appliedV1);
      final cursor = await h.engine.syncStore.readCursor('widgets');
      expect(cursor!.updated, conflictedV2,
          reason: 'the cursor is the seen watermark: the conflict was seen '
              'even though it was not applied');
    });

    test('a clean row still uses the watermark for fast-path staleness',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: doc('', 'v1', 1));
      await h.engine.syncNow();
      h.mock.mutate(id, {'id': id, 'name': 'v2', 'qty': 2});
      await h.engine.syncNow();
      final v2 = h.mock.records[id]!.updated;
      expect((await sr(h.pocket, id))!.remoteUpdated, v2);
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);

      // A stale event (<= watermark) is rejected.
      final stale = RemoteRecord(
          id: id,
          store: 'widgets',
          updated: '2026-01-01 00:00:00.000Z', // before v2
          data: {'name': 'stale'});
      expect(await h.engine.puller.fastPathApply(stale), isFalse);
      expect((await h.pocket.collection('widgets').get(id))!['name'], 'v2');

      // A newer event is applied.
      h.mock.mutate(id, {'id': id, 'name': 'v3', 'qty': 3});
      final v3 = h.mock.records[id]!.updated;
      final fresh = h.mock.records[id]!.toRemote();
      expect(fresh.updated, v3);
      expect(await h.engine.puller.fastPathApply(fresh), isTrue);
      expect((await h.pocket.collection('widgets').get(id))!['name'], 'v3');
      expect((await sr(h.pocket, id))!.remoteUpdated, v3);
    });

    test('an event with EXACTLY the applied watermark is stale (not applied)',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: doc('', 'v1', 1));
      await h.engine.syncNow();
      final v1 = h.mock.records[id]!.updated;
      expect((await sr(h.pocket, id))!.remoteUpdated, v1);

      // `remote.updated == sr.remoteUpdated` (not strictly newer) is stale:
      // the rewind-window re-delivery of the same version must never apply.
      final equal = RemoteRecord(
          id: id,
          store: 'widgets',
          updated: v1,
          data: {'name': 'should-not-apply'});
      expect(await h.engine.puller.fastPathApply(equal), isFalse);
      expect((await h.pocket.collection('widgets').get(id))!['name'], 'v1',
          reason: 'equal watermark never overwrites the row');
      expect((await sr(h.pocket, id))!.remoteUpdated, v1,
          reason: 'the applied watermark is unchanged');
    });

    test('a fast-path event for an unknown record applies regardless of age',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      // No local row: a create event is safe to insert even with a very old
      // timestamp (there is no watermark to be stale against).
      final id = generateRecordId();
      final rec = RemoteRecord(
          id: id,
          store: 'widgets',
          updated: '2020-01-01 00:00:00.000Z',
          data: {'name': 'born-remote'});
      expect(await h.engine.puller.fastPathApply(rec), isTrue);
      expect((await h.pocket.collection('widgets').get(id))!['name'],
          'born-remote');
    });
  });
}
