import 'package:localpocket/localpocket.dart';
import 'package:localpocket/sync.dart';
import 'package:test/test.dart';

import 'engine_helpers.dart';
import 'mock_backend.dart';

/// Anti-entropy sweep tests.
void main() {
  // An id in bucket 0 (first char 'a').
  String bucketAId() => 'a${generateRecordId().substring(1)}';

  Future<int> hiddenColumn(LocalPocket pocket, String id) async {
    final rows = await pocket.db
        .rawQuery('SELECT hidden FROM widgets WHERE id = ?', [id]);
    return rows.isEmpty ? -1 : rows.first['hidden'] as int;
  }

  Future<SyncRowState?> sr(LocalPocket pocket, String id) =>
      pocket.outbox.readSyncRow(pocket.db, 'widgets', id);

  group('anti-entropy sweep', () {
    test('bucket rotation wraps 0 to 35', () async {
      final h = await EngineHarness.create(
          config: testConfig(sweepInterval: Duration.zero));
      addTearDown(h.close);

      // `start()` already swept buckets 0,1 -> cursor at 1.
      var st = await h.engine.syncStore.readSweep('widgets');
      expect(st.bucket, 1);

      // 17 more cycles x 2 buckets = 34 -> reaches 35 (the last bucket).
      for (var i = 0; i < 17; i++) {
        await h.engine.syncNow();
      }
      st = await h.engine.syncStore.readSweep('widgets');
      expect(st.bucket, 35, reason: '36 buckets rotate through 35');

      await h.engine.syncNow();
      final wrapped = await h.engine.syncStore.readSweep('widgets');
      expect(wrapped.bucket, 1, reason: 'wraps back to the start');
    });

    test('missing from bucket hides never deletes', () async {
      final h = await EngineHarness.create(
          config: testConfig(sweepInterval: Duration.zero));
      addTearDown(h.close);
      final id =
          h.mock.seed(store: 'widgets', data: {'name': 'x'}, id: bucketAId());
      await h.engine.syncNow();
      expect(await hiddenColumn(h.pocket, id), 0);

      // Server-side hard delete (indistinguishable from permission loss).
      h.mock.delete(id);
      await h.engine.sweeper.sweepBucket('widgets', 0);

      expect(await h.pocket.collection('widgets').get(id), isNotNull,
          reason: 'hidden, never deleted');
      expect(await hiddenColumn(h.pocket, id), 1);
      expect((await sr(h.pocket, id))!.accessState, AccessState.hidden);
    });

    test('reappear with stale updated unhides and applies', () async {
      final h = await EngineHarness.create(
          config: testConfig(sweepInterval: Duration.zero));
      addTearDown(h.close);
      final id =
          h.mock.seed(store: 'widgets', data: {'name': 'v1'}, id: bucketAId());
      await h.engine.syncNow();

      // Hide it.
      h.mock.delete(id);
      await h.engine.sweeper.sweepBucket('widgets', 0);
      expect(await hiddenColumn(h.pocket, id), 1);

      // Re-appears with the SAME (stale) updated timestamp.
      final oldUpdated = h.mock.records[id]?.updated;
      final reseeded = h.mock.seed(
          store: 'widgets', data: {'name': 'v2'}, id: id, updated: oldUpdated);
      expect(reseeded, id);

      await h.engine.sweeper.sweepBucket('widgets', 0);
      expect(await hiddenColumn(h.pocket, id), 0, reason: 'unhidden');
      final r = await h.pocket.collection('widgets').get(id);
      expect(r!['name'], 'v2', reason: 'stale-updated re-appearance applied');
    });

    test('updated mismatch self heals via fetch', () async {
      final h = await EngineHarness.create(
          config: testConfig(sweepInterval: Duration.zero));
      addTearDown(h.close);
      final id =
          h.mock.seed(store: 'widgets', data: {'name': 'old'}, id: bucketAId());
      await h.engine.syncNow();

      // Another writer changes it; the sweep (not the delta pull) repairs.
      h.mock.mutate(id, {'id': id, 'name': 'new', 'qty': 7});
      await h.engine.sweeper.sweepBucket('widgets', 0);

      final r = await h.pocket.collection('widgets').get(id);
      expect(r!['name'], 'new');
      expect(r['qty'], 7);
      final row = await sr(h.pocket, id);
      expect(row!.remoteUpdated, h.mock.records[id]!.updated);
    });

    test('targeted 404 marks hidden', () async {
      final h = await EngineHarness.create(
          config: testConfig(sweepInterval: Duration.zero));
      addTearDown(h.close);
      final id =
          h.mock.seed(store: 'widgets', data: {'name': 'x'}, id: bucketAId());
      await h.engine.syncNow();

      // Listed by the sweep but the targeted view 404s (rule hides it).
      h.mock.mutate(id, {'id': id, 'name': 'x2'});
      h.mock.script('getRecord', [MockThrow(NotFoundError())]);
      await h.engine.sweeper.sweepBucket('widgets', 0);

      expect(await hiddenColumn(h.pocket, id), 1);
      // Bytes retained.
      expect(await h.pocket.collection('widgets').get(id), isNotNull);
    });

    test('auth 401 pauses without rewrites', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'x'});
      await h.engine.syncNow();
      expect(await h.pocket.collection('widgets').get(id), isNotNull);

      h.mock.authValid = false;
      await h.engine.syncNow();
      expect(h.engine.state, SyncEngineState.authRequired);
      // No rewrites: the local row and its sync state are untouched.
      expect((await h.pocket.collection('widgets').get(id))!['name'], 'x');
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
      expect(await h.pocket.collection('widgets').query().count(), 1);
    });

    test('forced sweep on auth change', () async {
      final h = await EngineHarness.create(
          config: testConfig(sweepInterval: Duration.zero));
      addTearDown(h.close);
      final id = h.mock.seed(
          store: 'widgets',
          data: {'name': 'x'},
          id: 'c${generateRecordId().substring(1)}'); // bucket 2
      await h.engine.syncNow();
      expect(await hiddenColumn(h.pocket, id), 0);

      // While unauthorized, the record vanishes server-side.
      h.mock.delete(id);
      h.mock.authValid = false;
      await h.engine.syncNow();
      expect(h.engine.state, SyncEngineState.authRequired);

      // Auth restored -> markAuthValid forces a FULL sweep which
      // catches the loss regardless of bucket rotation position.
      h.mock.authValid = true;
      await h.engine.markAuthValid();
      expect(await hiddenColumn(h.pocket, id), 1);
    });

    test('sweep only changes hidden bit', () async {
      final h = await EngineHarness.create(
          config: testConfig(sweepInterval: Duration.zero));
      addTearDown(h.close);
      final id = h.mock.seed(
          store: 'widgets', id: bucketAId(), data: {'name': 'kept', 'qty': 42});
      await h.engine.syncNow();

      final before = await h.pocket.collection('widgets').get(id);
      h.mock.delete(id);
      await h.engine.sweeper.sweepBucket('widgets', 0);

      final after = await h.pocket.collection('widgets').get(id);
      expect(after!['name'], 'kept', reason: 'content untouched');
      expect(after['qty'], 42);
      expect(await hiddenColumn(h.pocket, id), 1);
      expect(before!['name'], after['name']);
    });
  });
}
