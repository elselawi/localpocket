import 'package:localpocket/src/internal/raw_surface.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';
import '../engine/engine_helpers.dart';
import '../engine/mock_backend.dart';

/// Conflicts UI and resolution tests.
void main() {
  SyncConfig convConfig() =>
      testConfig(pushDebounce: const Duration(days: 365));

  CollectionSchema conflictSchema(
          {String name = 'widgets', bool strict = true}) =>
      CollectionSchema(
        name: name,
        version: 1,
        fields: [
          Field.text('name', required: strict),
          Field.int('qty'),
        ],
        conflictPolicy: ConflictPolicy(
          collectionResolver: CustomResolver((ctx) => null), // force escalation
        ),
      );

  /// A harness whose collections always escalate a merge to a conflict.
  /// Provides both a `widgets` and a `gadgets` store for filter tests.
  Future<EngineHarness> makeConflictHarness() async {
    final mock = MockSyncBackend();
    final dbA = await tempDbPath();
    final a = await EngineHarness.create(
      mock: mock,
      config: convConfig(),
      path: dbA.path,
      stores: [
        conflictSchema(name: 'widgets'),
        conflictSchema(name: 'gadgets'),
      ],
    );
    addTearDown(() async {
      await a.close();
      await dbA.cleanup();
    });
    return a;
  }

  /// Creates an open conflict on [h] for a fresh record; returns its id.
  Future<String> makeConflict(EngineHarness h,
      {String store = 'widgets', String base = 'base'}) async {
    final id = h.mock.seed(store: store, data: {'name': base});
    await h.engine.syncNow();
    await h.pocket.collection(store).patch(id, {'name': 'local'});
    // Use the mock clock so repeated conflicts always move the pull cursor
    // forward (a fixed past timestamp would be skipped by the keyset).
    h.mock.records[id] = MockRecord(
      id: id,
      store: store,
      updated: h.mock.nextUpdated(),
      data: {'name': 'remote', 'qty': 1},
    );
    await h.engine.syncNow();
    return id;
  }

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
      const remoteUpdated = '2026-08-14 14:00:00.000Z';
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

  group('conflict parsing and resolution validation', () {
    test('malformed conflict JSON columns raise a typed StorageError',
        () async {
      final a = await makeConflictHarness();
      final id = await makeConflict(a);
      await a.pocket.db.execute(
        "UPDATE lp_conflicts SET base_json = '{invalid' "
        "WHERE store = 'widgets' AND record_id = ?",
        [id],
      );

      await expectLater(
          a.pocket.conflicts.listOpen(), throwsA(isA<StorageError>()));
      await expectLater(
          a.pocket.conflicts.get('widgets', id), throwsA(isA<StorageError>()));
    });

    test('malformed dirty-set columns raise a typed StorageError', () async {
      final a = await makeConflictHarness();
      final id = await makeConflict(a);
      await a.pocket.db.execute(
        "UPDATE lp_conflicts SET dirty_local = '[\"a\", 5]' "
        "WHERE store = 'widgets' AND record_id = ?",
        [id],
      );

      await expectLater(
          a.pocket.conflicts.listOpen(), throwsA(isA<StorageError>()));
      await expectLater(
          a.pocket.conflicts.get('widgets', id), throwsA(isA<StorageError>()));
    });

    test('valid JSON of the wrong shape decodes to empty (not an error)',
        () async {
      final a = await makeConflictHarness();
      final id = await makeConflict(a);
      await a.pocket.db.execute(
        "UPDATE lp_conflicts SET base_json = '[1,2]' "
        "WHERE store = 'widgets' AND record_id = ?",
        [id],
      );

      final open = await a.pocket.conflicts.listOpen();
      expect(open.single.base, isEmpty,
          reason: 'non-map JSON becomes an empty map, never a crash');
    });

    test('resolved rows are excluded from listOpen but returned by get',
        () async {
      final a = await makeConflictHarness();
      final id = await makeConflict(a);
      // Simulate a stored resolution (e.g. written by a future version): the
      // row is excluded from listOpen but get() returns it with `resolved`.
      await a.pocket.db.execute(
        "UPDATE lp_conflicts SET resolved_json = '{\"name\":\"done\"}' "
        "WHERE store = 'widgets' AND record_id = ?",
        [id],
      );

      expect(await a.pocket.conflicts.listOpen(), isEmpty,
          reason: 'resolved_json rows are not open');
      final record = await a.pocket.conflicts.get('widgets', id);
      expect(record, isNotNull, reason: 'get returns resolved rows too');
      expect(record!.resolved, isNotNull);
      expect(record.resolved!['name'], 'done');
    });

    test('resolution is validated by the STRICT domain table', () async {
      final a = await makeConflictHarness();
      final id = await makeConflict(a);

      // Missing the required `name` field -> the NOT NULL column rejects it
      // with a typed database exception, and the whole resolution rolls back.
      var rejected = false;
      try {
        await a.pocket.conflicts
            .resolve(store: 'widgets', id: id, merged: {'qty': 1});
      } catch (e) {
        rejected = e is Exception;
      }
      expect(rejected, isTrue,
          reason: 'NOT NULL column rejects the missing required field');
      expect(await a.pocket.conflicts.listOpen(), hasLength(1),
          reason: 'the failed resolution rolled back; the conflict stays open');

      // Wrong-type values are NOT type-validated by resolution: the domain
      // table accepts them (SQLite stores the value) and the conflict clears.
      await a.pocket.conflicts
          .resolve(store: 'widgets', id: id, merged: {'name': 7});
      expect(await a.pocket.conflicts.listOpen(), isEmpty,
          reason: 'a wrong-type resolution applies without type validation');
      final doc = await a.pocket.collection('widgets').get(id);
      expect(doc!['name'], '7',
          reason: 'SQLite coerces the int into the TEXT column on read');
    });

    test('wrong id inside merged is overridden by the resolution id', () async {
      final a = await makeConflictHarness();
      final id = await makeConflict(a);

      await a.pocket.conflicts.resolve(
          store: 'widgets', id: id, merged: {'name': 'x', 'id': 'other-id'});

      // The domain row kept its real id.
      expect(await a.pocket.collection('widgets').get(id), isNotNull);
      expect(await a.pocket.collection('widgets').get('other-id'), isNull);
      // The outbox payload carries the real id, never the bogus one.
      final op = await a.pocket.outbox.readOp(a.pocket.db, 'widgets', id);
      expect(op, isNotNull);
      expect(op!.payloadJson, contains('"id":"$id"'));
      expect(op.payloadJson, isNot(contains('other-id')));
    });

    test('resolve/accept on a missing conflict throws StateError', () async {
      final a = await makeConflictHarness();
      await a.pocket.collection('widgets').put(record(name: 'nope', qty: 1));
      final id =
          (await a.pocket.collection('widgets').query().all().ids()).single;

      await expectLater(
          a.pocket.conflicts
              .resolve(store: 'widgets', id: id, merged: {'name': 'x'}),
          throwsA(isA<StateError>()));
      await expectLater(a.pocket.conflicts.acceptLocal('widgets', id),
          throwsA(isA<StateError>()));
      await expectLater(a.pocket.conflicts.acceptRemote('widgets', id),
          throwsA(isA<StateError>()));
    });

    test('resolving a purged record cleans up without an orphan op', () async {
      final a = await makeConflictHarness();
      final id = await makeConflict(a);

      // The record is hard-deleted while the conflict remains.
      await a.pocket.db.execute('DELETE FROM widgets WHERE id = ?', [id]);

      await a.pocket.conflicts
          .resolve(store: 'widgets', id: id, merged: {'name': 'x'});

      // No stale conflict, no dangling sync/outbox rows.
      expect(await a.pocket.conflicts.listOpen(), isEmpty);
      expect(
          await a.pocket.db.rawQuery(
              'SELECT COUNT(*) AS c FROM lp_sync_row WHERE record_id = ?',
              [id]),
          [
            (<String, Object?>{'c': 0})
          ]);
      expect(
          await a.pocket.db.rawQuery(
              'SELECT COUNT(*) AS c FROM lp_outbox WHERE record_id = ?', [id]),
          [
            (<String, Object?>{'c': 0})
          ]);
    });

    test('simultaneous accept-local and accept-remote: one wins, one throws',
        () async {
      final a = await makeConflictHarness();
      final id = await makeConflict(a);

      final results = await Future.wait([
        a.pocket.conflicts.acceptLocal('widgets', id).then((_) => 'ok'),
        a.pocket.conflicts
            .acceptRemote('widgets', id)
            .then((_) => 'ok', onError: (Object _) => 'err'),
      ]);
      expect(results.where((r) => r == 'ok'), hasLength(1),
          reason: 'exactly one resolution applies');
      expect(results.where((r) => r == 'err'), hasLength(1),
          reason: 'the second one sees the conflict is gone');
      expect(await a.pocket.conflicts.listOpen(), isEmpty);
    });
  });

  group('conflict outbox insertion path', () {
    test('insert path writes all NOT NULL outbox columns with a valid op id',
        () async {
      final a = await makeConflictHarness();
      final id = await makeConflict(a);

      // Force the existingOp.isEmpty branch: drop the held outbox row.
      await a.pocket.db
          .execute('DELETE FROM lp_outbox WHERE record_id = ?', [id]);
      expect(await a.pocket.outbox.readOp(a.pocket.db, 'widgets', id), isNull);

      await a.pocket.conflicts.resolve(
          store: 'widgets', id: id, merged: {'name': 'merged', 'qty': 9});

      final rows = await a.pocket.db
          .rawQuery('SELECT * FROM lp_outbox WHERE record_id = ?', [id]);
      expect(rows, hasLength(1));
      final row = rows.single;
      expect(row['store'], 'widgets');
      expect(row['record_id'], id);
      expect(row['kind'], 'upsert');
      expect(row['payload_json'], isNotNull);
      expect(row['base_hash'], isNotEmpty, reason: 'NOT NULL base_hash set');
      expect(row['dirty_fields'], isNotNull,
          reason: 'NOT NULL dirty_fields set');
      expect(row['created_at'], isA<int>());
      expect(row['updated_at'], isA<int>(), reason: 'NOT NULL updated_at set');
      final opId = row['op_id'] as String;
      expect(opId, matches(RegExp(r'^[0-9a-f]{32}$')),
          reason: 'a valid generated op id');
    });

    test('inserted op retains the remote base and drains to the server',
        () async {
      final a = await makeConflictHarness();
      final id = await makeConflict(a);

      await a.pocket.db
          .execute('DELETE FROM lp_outbox WHERE record_id = ?', [id]);
      final remoteUpdated = a.mock.records[id]!.updated;
      await a.pocket.conflicts.resolve(
          store: 'widgets', id: id, merged: {'name': 'merged', 'qty': 9});

      // Remote base retained on the inserted op.
      final op = await a.pocket.outbox.readOp(a.pocket.db, 'widgets', id);
      expect(op!.baseUpdated, remoteUpdated);
      expect(op.baseHash, isNotEmpty);
      expect(op.payloadJson, contains('"name":"merged"'));

      // The op drains and reaches the server.
      await a.engine.syncNow();
      expect(await a.engine.syncStore.countPending(), 0);
      expect(a.mock.records[id]!.data['name'], 'merged');
      expect(a.mock.records[id]!.data['qty'], 9);
    });

    test('dirty fields are recomputed from the merged resolution', () async {
      final a = await makeConflictHarness();
      final id = await makeConflict(a);

      // Remote was {'name': 'remote', 'qty': 1}; merge sets name only.
      await a.pocket.conflicts
          .resolve(store: 'widgets', id: id, merged: {'name': 'final'});

      final sr = await a.pocket.outbox.readSyncRow(a.pocket.db, 'widgets', id);
      final dirty = (sr!.dirtyFields as List).cast<String>()..sort();
      expect(dirty, ['name', 'qty'],
          reason: 'fields differing between remote and the merge');
    });

    test('missing sync row: resolution still writes a remote-based op',
        () async {
      final a = await makeConflictHarness();
      final id = await makeConflict(a);
      await a.pocket.db
          .execute('DELETE FROM lp_sync_row WHERE record_id = ?', [id]);

      // Resolve: the sync-row update is a no-op, but the conflict is cleared
      // and the outbox op is written. The remote timestamp is read from the
      // (now missing) sync row, so it is null here (documented).
      await a.pocket.conflicts
          .resolve(store: 'widgets', id: id, merged: {'name': 'x', 'qty': 1});
      expect(await a.pocket.conflicts.listOpen(), isEmpty);
      final op = await a.pocket.outbox.readOp(a.pocket.db, 'widgets', id);
      expect(op, isNotNull);
      expect(op!.baseUpdated, isNull,
          reason: 'no sync row -> no remote timestamp to use as base');
      expect(await a.pocket.collection('widgets').get(id), isNotNull);
    });
  });

  group('conflict watch ordering/lifecycle', () {
    test('rapid add/resolve/add emits ordered snapshots, never regressing',
        () async {
      final a = await makeConflictHarness();
      final emissions = <List<ConflictRecord>>[];
      final sub = a.pocket.conflicts.watch().listen(emissions.add);
      addTearDown(sub.cancel);
      await Future<void>.delayed(const Duration(milliseconds: 40));
      expect(emissions.last, isEmpty);

      final id = await makeConflict(a); // add
      await Future<void>.delayed(const Duration(milliseconds: 40));
      await a.pocket.conflicts
          .resolve(store: 'widgets', id: id, merged: {'name': 'r'}); // resolve
      await Future<void>.delayed(const Duration(milliseconds: 40));
      final id2 = await makeConflict(a); // add again
      await Future<void>.delayed(const Duration(milliseconds: 40));

      // Collapse consecutive duplicates, then the open-count walk must be
      // exactly [0, 1, 0, 1] — an older snapshot never appears after a newer
      // one (no regression).
      final counts = emissions.map((e) => e.length).toList();
      final changes = <int>[];
      for (final c in counts) {
        if (changes.isEmpty || changes.last != c) changes.add(c);
      }
      expect(changes, [0, 1, 0, 1]);
      expect(emissions.last.single.recordId, id2);
    });

    test('store filters isolate per-store watch streams', () async {
      final a = await makeConflictHarness();
      final widgetsEmissions = <List<ConflictRecord>>[];
      final gadgetsEmissions = <List<ConflictRecord>>[];
      final wSub = a.pocket.conflicts
          .watch(store: 'widgets')
          .listen(widgetsEmissions.add);
      final gSub = a.pocket.conflicts
          .watch(store: 'gadgets')
          .listen(gadgetsEmissions.add);
      addTearDown(wSub.cancel);
      addTearDown(gSub.cancel);
      await Future<void>.delayed(const Duration(milliseconds: 40));

      await makeConflict(a, store: 'widgets'); // widgets conflict
      await Future<void>.delayed(const Duration(milliseconds: 40));
      await makeConflict(a, store: 'gadgets'); // gadgets conflict
      await Future<void>.delayed(const Duration(milliseconds: 40));

      expect(widgetsEmissions.last.length, 1,
          reason: 'widgets watch saw the widgets conflict');
      expect(gadgetsEmissions.last.length, 1,
          reason: 'gadgets watch saw the gadgets conflict');
      expect(
          widgetsEmissions.every((e) => e.every((c) => c.store == 'widgets')),
          isTrue);
      expect(
          gadgetsEmissions.every((e) => e.every((c) => c.store == 'gadgets')),
          isTrue);
    });

    test('multiple listeners each receive every emission', () async {
      final a = await makeConflictHarness();
      final l1 = <List<ConflictRecord>>[];
      final l2 = <List<ConflictRecord>>[];
      final s1 = a.pocket.conflicts.watch().listen(l1.add);
      final s2 = a.pocket.conflicts.watch().listen(l2.add);
      addTearDown(s1.cancel);
      addTearDown(s2.cancel);
      await Future<void>.delayed(const Duration(milliseconds: 40));

      final id = await makeConflict(a);
      await Future<void>.delayed(const Duration(milliseconds: 40));
      await a.pocket.conflicts
          .resolve(store: 'widgets', id: id, merged: {'name': 'r'});
      await Future<void>.delayed(const Duration(milliseconds: 40));

      // Both listeners observe the SAME sequence of snapshots, ending at an
      // empty list, and both saw the conflict appear.
      expect(
          l1.map((e) => e.length).toList(), l2.map((e) => e.length).toList());
      expect(l1.any((e) => e.length == 1), isTrue,
          reason: 'both listeners saw the conflict');
      expect(l1.last, isEmpty, reason: 'both listeners saw the resolution');
    });

    test('cancellation stops further emissions without errors', () async {
      final a = await makeConflictHarness();
      final emissions = <List<ConflictRecord>>[];
      final sub = a.pocket.conflicts.watch().listen(emissions.add);
      await Future<void>.delayed(const Duration(milliseconds: 40));
      final countAfterInitial = emissions.length;

      await sub.cancel();
      await makeConflict(a); // a conflict is added after cancellation
      await Future<void>.delayed(const Duration(milliseconds: 60));

      expect(emissions.length, countAfterInitial,
          reason: 'no emission after cancellation');
    });

    test('concurrent listOpen queries return consistent snapshots', () async {
      final a = await makeConflictHarness();
      final id1 = await makeConflict(a);
      final id2 = await makeConflict(a);

      final results = await Future.wait([
        a.pocket.conflicts.listOpen(),
        a.pocket.conflicts.listOpen(),
        a.pocket.conflicts.listOpen(),
        a.pocket.conflicts.get('widgets', id1),
        a.pocket.conflicts.get('widgets', id2),
      ]);
      final lists = results.whereType<List<ConflictRecord>>().toList();
      expect(lists.every((l) => l.length == 2), isTrue,
          reason: 'all concurrent list snapshots agree');
      expect(results.whereType<ConflictRecord>().length, 2);
    });

    test('watch errors surface on the stream (bad conflict row)', () async {
      final a = await makeConflictHarness();
      final id = await makeConflict(a);
      await a.pocket.db.execute(
        "UPDATE lp_conflicts SET local_json = '{oops' "
        "WHERE store = 'widgets' AND record_id = ?",
        [id],
      );

      final errors = <Object>[];
      final emissions = <List<ConflictRecord>>[];
      final sub =
          a.pocket.conflicts.watch().listen(emissions.add, onError: errors.add);
      addTearDown(sub.cancel);
      await Future<void>.delayed(const Duration(milliseconds: 60));

      expect(errors, isNotEmpty,
          reason: 'a corrupt conflict row surfaces as an error, not a hang');
      expect(errors.every((e) => e is StorageError), isTrue);
    });
  });
}
