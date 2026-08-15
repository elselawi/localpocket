import 'package:localpocket/localpocket.dart';
import 'package:localpocket/sync.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';
import '../engine/engine_helpers.dart';
import '../engine/mock_backend.dart';

/// Conflicts UI and resolution tests.
void main() {
  SyncConfig convConfig() =>
      testConfig(pushDebounce: const Duration(days: 365));

  group('conflicts UI and resolution', () {
    test('conflict row carries base local remote dirty sets', () async {
      final mock = MockSyncBackend();
      final dbA = await tempDbPath();
      final a = await EngineHarness.create(
        mock: mock,
        config: convConfig(),
        path: dbA.path,
        stores: [
          CollectionSchema(
            name: 'widgets',
            version: 1,
            fields: [
              Field.text('name'),
              Field.int('qty'),
            ],
            conflictPolicy: ConflictPolicy(
              collectionResolver:
                  CustomResolver((ctx) => null), // force escalation
            ),
          ),
        ],
      );
      addTearDown(() async {
        await a.close();
        await dbA.cleanup();
      });

      final id =
          mock.seed(store: 'widgets', data: {'name': 'base_name', 'qty': 10});
      await a.engine.syncNow();

      // Local edit
      await a.pocket.collection('widgets').patch(id, {'name': 'local_name'});

      // Remote concurrent edit
      mock.records[id] = MockRecord(
        id: id,
        store: 'widgets',
        updated: '2026-08-14 12:00:00.000Z',
        data: {'name': 'remote_name', 'qty': 20},
      );

      // Trigger push/pull cycle -> hits conflict -> escalates to lp_conflicts
      await a.engine.syncNow();

      final openConflicts = await a.pocket.conflicts.listOpen();
      expect(openConflicts.length, 1);
      final c = openConflicts.first;
      expect(c.store, 'widgets');
      expect(c.recordId, id);
      expect(c.base['name'], 'base_name');
      expect(c.local['name'], 'local_name');
      expect(c.remote['name'], 'remote_name');
      expect(c.dirtyLocal, contains('name'));
      expect(c.dirtyRemote, containsAll(['name', 'qty']));
    });

    test('conflicts watch stream emits', () async {
      final mock = MockSyncBackend();
      final dbA = await tempDbPath();
      final a = await EngineHarness.create(
        mock: mock,
        config: convConfig(),
        path: dbA.path,
        stores: [
          CollectionSchema(
            name: 'widgets',
            version: 1,
            fields: [Field.text('name')],
            conflictPolicy: ConflictPolicy(
              collectionResolver: CustomResolver((ctx) => null),
            ),
          ),
        ],
      );
      addTearDown(() async {
        await a.close();
        await dbA.cleanup();
      });

      final id = mock.seed(store: 'widgets', data: {'name': 'base'});
      await a.engine.syncNow();

      final emissions = <List<ConflictRecord>>[];
      final sub = a.pocket.conflicts.watch().listen(emissions.add);
      addTearDown(sub.cancel);

      await Future<void>.delayed(const Duration(milliseconds: 50));
      expect(emissions.length, 1);
      expect(emissions.last.isEmpty, isTrue);

      // Introduce conflict
      await a.pocket.collection('widgets').patch(id, {'name': 'local_val'});
      mock.records[id] = MockRecord(
        id: id,
        store: 'widgets',
        updated: '2026-08-14 13:00:00.000Z',
        data: {'name': 'remote_val'},
      );

      await a.engine.syncNow();
      await Future<void>.delayed(const Duration(milliseconds: 50));

      expect(emissions.any((list) => list.length == 1), isTrue);

      // Resolve conflict -> watch emits 0 open conflicts
      await a.pocket.conflicts.resolve(
        store: 'widgets',
        id: id,
        merged: {'name': 'resolved_val'},
      );
      await Future<void>.delayed(const Duration(milliseconds: 50));

      expect(emissions.last.isEmpty, isTrue);
    });

    test('resolve sets dirty with remote as new base', () async {
      final mock = MockSyncBackend();
      final dbA = await tempDbPath();
      final a = await EngineHarness.create(
        mock: mock,
        config: convConfig(),
        path: dbA.path,
        stores: [
          CollectionSchema(
            name: 'widgets',
            version: 1,
            fields: [Field.text('name')],
            conflictPolicy: ConflictPolicy(
              collectionResolver: CustomResolver((ctx) => null),
            ),
          ),
        ],
      );
      addTearDown(() async {
        await a.close();
        await dbA.cleanup();
      });

      final id = mock.seed(store: 'widgets', data: {'name': 'base'});
      await a.engine.syncNow();

      await a.pocket.collection('widgets').patch(id, {'name': 'local_val'});
      final remoteUpdated = '2026-08-14 14:00:00.000Z';
      mock.records[id] = MockRecord(
        id: id,
        store: 'widgets',
        updated: remoteUpdated,
        data: {'name': 'remote_val'},
      );

      await a.engine.syncNow();
      expect(await a.pocket.conflicts.listOpen(), hasLength(1));

      // Resolve with custom merged payload
      await a.pocket.conflicts.resolve(
        store: 'widgets',
        id: id,
        merged: {'name': 'manually_merged'},
      );

      expect(await a.pocket.conflicts.listOpen(), isEmpty);

      // Verify sync row state is dirty with remote as base
      final sr = await a.pocket.outbox.readSyncRow(a.pocket.db, 'widgets', id);
      expect(sr, isNotNull);
      expect(sr!.syncState, SyncState.dirty);
      expect(sr.baseUpdated, remoteUpdated);
      expect(sr.baseJson, contains('remote_val'));

      // Domain row updated to merged
      final doc = await a.pocket.collection('widgets').get(id);
      expect(doc!['name'], 'manually_merged');

      // Next push succeeds against server
      await a.engine.syncNow();
      expect(mock.records[id]!.data['name'], 'manually_merged');
      expect(await a.engine.syncStore.countPending(), 0);
    });

    test('accept local accept remote', () async {
      final mock = MockSyncBackend();
      final dbA = await tempDbPath();
      final a = await EngineHarness.create(
        mock: mock,
        config: convConfig(),
        path: dbA.path,
        stores: [
          CollectionSchema(
            name: 'widgets',
            version: 1,
            fields: [Field.text('name')],
            conflictPolicy: ConflictPolicy(
              collectionResolver: CustomResolver((ctx) => null),
            ),
          ),
        ],
      );
      addTearDown(() async {
        await a.close();
        await dbA.cleanup();
      });

      final id1 = mock.seed(store: 'widgets', data: {'name': 'b1'});
      final id2 = mock.seed(store: 'widgets', data: {'name': 'b2'});
      await a.engine.syncNow();

      // Create conflicts on both
      await a.pocket.collection('widgets').patch(id1, {'name': 'loc1'});
      await a.pocket.collection('widgets').patch(id2, {'name': 'loc2'});

      mock.records[id1] = MockRecord(
        id: id1,
        store: 'widgets',
        updated: '2026-08-14 15:00:00.000Z',
        data: {'name': 'rem1'},
      );
      mock.records[id2] = MockRecord(
        id: id2,
        store: 'widgets',
        updated: '2026-08-14 15:00:00.000Z',
        data: {'name': 'rem2'},
      );

      await a.engine.syncNow();
      expect(await a.pocket.conflicts.listOpen(), hasLength(2));

      // acceptLocal on id1
      await a.pocket.conflicts.acceptLocal('widgets', id1);
      // acceptRemote on id2
      await a.pocket.conflicts.acceptRemote('widgets', id2);

      expect(await a.pocket.conflicts.listOpen(), isEmpty);

      final doc1 = await a.pocket.collection('widgets').get(id1);
      final doc2 = await a.pocket.collection('widgets').get(id2);
      expect(doc1!['name'], 'loc1');
      expect(doc2!['name'], 'rem2');

      await a.engine.syncNow();
      expect(mock.records[id1]!.data['name'], 'loc1');
      expect(mock.records[id2]!.data['name'], 'rem2');
      expect(await a.engine.syncStore.countPending(), 0);
    });

    test('archive vs edit policies', () async {
      // 1. Default: archive vs edit -> both apply (record archived with merged fields)
      {
        final base = {'title': 'v0', 'archived': false};
        final local = {'title': 'v0', 'archived': true};
        final remote = {'title': 'v1_remote', 'archived': false};

        final res = merge3Way(base: base, local: local, remote: remote);
        expect(res.merged['archived'], true);
        expect(res.merged['title'], 'v1_remote');
      }

      // 2. editsUnarchive: true -> local edit unarchives
      {
        final base = {'title': 'v0', 'archived': true};
        final local = {'title': 'v1_edited', 'archived': true};
        final remote = {'title': 'v0', 'archived': true};

        final policy = MergePolicy(editsUnarchive: true);
        final res =
            merge3Way(base: base, local: local, remote: remote, policy: policy);
        expect(res.merged['archived'], false);
        expect(res.merged['title'], 'v1_edited');
      }

      // 3. Both change archived concurrently -> field resolver or default remote wins
      {
        final base = {'archived': false};
        final local = {'archived': true};
        final remote = {
          'archived': false
        }; // unchanged relative to base, local wins
        final res1 = merge3Way(base: base, local: local, remote: remote);
        expect(res1.merged['archived'], true);

        final base2 = {'archived': false};
        final local2 = {'archived': true};
        final remote2 = {'archived': false};
        final policy2 = MergePolicy(
            fieldOverrides: {'archived': const LocalWinsResolver()});
        final res2 = merge3Way(
            base: base2, local: local2, remote: remote2, policy: policy2);
        expect(res2.merged['archived'], true);
      }
    });

    test('held op never dropped until resolution', () async {
      final mock = MockSyncBackend();
      final dbA = await tempDbPath();
      final a = await EngineHarness.create(
        mock: mock,
        config: convConfig(),
        path: dbA.path,
        stores: [
          CollectionSchema(
            name: 'widgets',
            version: 1,
            fields: [Field.text('name')],
            conflictPolicy: ConflictPolicy(
              collectionResolver: CustomResolver((ctx) => null),
            ),
          ),
        ],
      );
      addTearDown(() async {
        await a.close();
        await dbA.cleanup();
      });

      final id = mock.seed(store: 'widgets', data: {'name': 'base'});
      await a.engine.syncNow();

      await a.pocket.collection('widgets').patch(id, {'name': 'held_edit'});
      mock.records[id] = MockRecord(
        id: id,
        store: 'widgets',
        updated: '2026-08-14 16:00:00.000Z',
        data: {'name': 'remote_concurrent'},
      );

      // Run multiple sync passes while in conflict
      await a.engine.syncNow();
      await a.engine.syncNow();
      await a.engine.syncNow();

      // Op is still in outbox, not dropped!
      final outboxCount = (await a.pocket.db.rawQuery(
        'SELECT COUNT(*) AS c FROM lp_outbox WHERE store = ? AND record_id = ?',
        ['widgets', id],
      ))
          .first
          .values
          .first as int;
      expect(outboxCount, 1, reason: 'held op never dropped while in conflict');

      // Local mutations are blocked while in conflict.
      expect(
        () => a.pocket.collection('widgets').patch(id, {'name': 'blocked'}),
        throwsA(isA<ConflictBlockedError>()),
      );

      // Resolve it
      await a.pocket.conflicts.resolve(
        store: 'widgets',
        id: id,
        merged: {'name': 'final_merged'},
      );

      // Now sync succeeds and drains outbox
      await a.engine.syncNow();
      expect(await a.engine.syncStore.countPending(), 0);
      expect(mock.records[id]!.data['name'], 'final_merged');
    });
  });
}
