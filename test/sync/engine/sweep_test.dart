import 'package:localpocket/localpocket.dart';
import 'package:localpocket/sync.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';
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

    test('sweep self-heals batch into one full-durability transaction',
        () async {
      final db = await tempDbPath();
      addTearDown(() async => db.cleanup());
      final recorder = <String>[];
      final hooks = TestHooks(onExecute: recorder.add);
      final h = await EngineHarness.create(
        config: testConfig(sweepInterval: Duration.zero, maxPage: 25),
        testHooks: hooks,
        path: db.path,
      );
      addTearDown(h.close);

      final ids = <String>[];
      for (var i = 0; i < 12; i++) {
        final id = h.mock.seed(
          store: 'widgets',
          data: {'name': 'v$i'},
          id: bucketAId(),
        );
        ids.add(id);
      }
      await h.engine.syncNow();
      recorder.clear();

      for (final id in ids) {
        h.mock.mutate(id, {'id': id, 'name': 'server-v2-$id'});
      }

      await h.engine.sweeper.sweepBucket('widgets', 0);

      final fullCount =
          recorder.where((sql) => sql == 'PRAGMA synchronous=FULL').length;
      expect(fullCount, lessThanOrEqualTo(2),
          reason: 'self-heals should batch a once-per-page transaction');
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

  group('hidden-state notification and timestamp policy', () {
    Future<String> seedBucketA(EngineHarness h, [String name = 'v1']) async {
      final id =
          h.mock.seed(store: 'widgets', data: {'name': name}, id: bucketAId());
      await h.engine.syncNow();
      expect(await hiddenColumn(h.pocket, id), 0);
      return id;
    }

    test('markHidden publishes, hides from default query, retains bytes',
        () async {
      final h = await EngineHarness.create(
          config: testConfig(sweepInterval: Duration.zero));
      addTearDown(h.close);
      final id = await seedBucketA(h);
      await h.engine.syncNow();
      expect(await h.pocket.collection('widgets').query().count(), 1);

      final changes = <ChangeSet>[];
      final sub = h.pocket.changeBus.stream.listen(changes.add);
      addTearDown(sub.cancel);

      h.mock.delete(id);
      await h.engine.sweeper.sweepBucket('widgets', 0);

      // Default scope excludes the hidden row; bytes are retained.
      expect(await h.pocket.collection('widgets').query().count(), 0);
      expect(await h.pocket.collection('widgets').get(id), isNotNull,
          reason: 'hidden never deletes local bytes');

      // markHidden publishes a ChangeSet for the affected record.
      await Future<void>.delayed(Duration.zero);
      expect(changes.any((c) => c.store == 'widgets' && c.ids.contains(id)),
          isTrue,
          reason: 'markHidden published a ChangeSet');
    });

    test('reappearance via touchSeen unhides and publishes', () async {
      final h = await EngineHarness.create(
          config: testConfig(sweepInterval: Duration.zero));
      addTearDown(h.close);
      final id = await seedBucketA(h);

      // Hide it.
      h.mock.delete(id);
      await h.engine.sweeper.sweepBucket('widgets', 0);
      expect(await hiddenColumn(h.pocket, id), 1);
      expect(await h.pocket.collection('widgets').query().count(), 0);

      final changes = <ChangeSet>[];
      final sub = h.pocket.changeBus.stream.listen(changes.add);
      addTearDown(sub.cancel);

      // Re-seed with the SAME (stale) timestamp, then a targeted fetch.
      final oldUpdated = h.mock.records[id]?.updated;
      h.mock.seed(
          store: 'widgets', data: {'name': 'v2'}, id: id, updated: oldUpdated);
      await h.engine.puller.fetchOne('widgets', id);

      expect(await hiddenColumn(h.pocket, id), 0, reason: 'unhidden');
      expect(await h.pocket.collection('widgets').query().count(), 1);
      expect((await h.pocket.collection('widgets').get(id))!['name'], 'v2');
      expect((await sr(h.pocket, id))!.accessState, AccessState.visible);
      await Future<void>.delayed(Duration.zero);
      expect(changes.any((c) => c.store == 'widgets' && c.ids.contains(id)),
          isTrue,
          reason: 'unhide published a ChangeSet');
    });

    test('hidden rows are exempt from repeated re-hiding', () async {
      final h = await EngineHarness.create(
          config: testConfig(sweepInterval: Duration.zero));
      addTearDown(h.close);
      final id = await seedBucketA(h);
      h.mock.delete(id);
      await h.engine.sweeper.sweepBucket('widgets', 0);
      expect(await hiddenColumn(h.pocket, id), 1);

      // Sweep again: already-hidden row must not be re-hidden (no double work,
      // no churn) and the hidden count stays at exactly 1.
      final report = await h.engine.sweeper.sweepBucket('widgets', 0);
      expect(report.hidden, 0, reason: 'already hidden rows are not re-hidden');
      expect(await hiddenColumn(h.pocket, id), 1);
    });

    test('markHidden updates last_seen_at retention semantics', () async {
      final h = await EngineHarness.create(
          config: testConfig(sweepInterval: Duration.zero));
      addTearDown(h.close);
      final id = await seedBucketA(h);

      // Simulate an old last_seen_at.
      await h.pocket.db.execute(
          'UPDATE lp_sync_row SET last_seen_at = 1 WHERE record_id = ?', [id]);
      h.mock.delete(id);
      await h.engine.sweeper.sweepBucket('widgets', 0);

      final row = await sr(h.pocket, id);
      expect(row!.accessState, AccessState.hidden);
      // markHidden does not touch last_seen_at (the retention clock is the
      // last WIRE observation, not the hiding time).
      expect(row.lastSeenAt, 1);
    });
  });

  group('sweep page and bucket failure matrix', () {
    test('reordered bucket pages still complete', () async {
      final h = await EngineHarness.create(
          config: testConfig(sweepInterval: Duration.zero));
      addTearDown(h.close);
      final ids = <String>[];
      for (var i = 0; i < 6; i++) {
        ids.add(h.mock
            .seed(store: 'widgets', data: {'name': 'n$i'}, id: bucketAId()));
      }
      await h.engine.syncNow();

      // Reorder the remote list for the bucket (page order != id order).
      final shuffled =
          ids.reversed.map((id) => h.mock.records[id]!.toRemote()).toList();
      h.mock.script('listChanges', [MockReturn(shuffled)]);
      final report = await h.engine.sweeper.sweepBucket('widgets', 0);
      expect(report.scanned, 6, reason: 'all records seen despite reorder');
      expect(await hiddenColumn(h.pocket, ids.first), 0);
    });

    test('transient failure after a page commits no sweep progress', () async {
      final h = await EngineHarness.create(
          config: testConfig(sweepInterval: Duration.zero, maxPage: 1));
      addTearDown(h.close);
      h.mock.seed(store: 'widgets', data: {'name': 'x'}, id: bucketAId());
      await h.engine.syncNow();
      final before = await h.engine.syncStore.readSweep('widgets');

      h.mock.script('listChanges', [
        MockReturn([h.mock.records.values.first.toRemote()]),
        MockThrow(TransientNetworkError()),
      ]);
      await expectLater(h.engine.sweeper.sweepBucket('widgets', 0),
          throwsA(isA<TransientNetworkError>()));

      // No sweep state was committed by the failed attempt.
      final after = await h.engine.syncStore.readSweep('widgets');
      expect(after.bucket, before.bucket, reason: 'no progress committed');
      expect(after.lastSweepAt, before.lastSweepAt);
    });

    test('forbidden targeted fetch leaves the row as-is', () async {
      final h = await EngineHarness.create(
          config: testConfig(sweepInterval: Duration.zero));
      addTearDown(h.close);
      final id =
          h.mock.seed(store: 'widgets', data: {'name': 'x'}, id: bucketAId());
      await h.engine.syncNow();
      h.mock.script('getRecord', [MockThrow(ForbiddenError())]);
      await h.engine.puller.fetchOne('widgets', id);
      expect(await hiddenColumn(h.pocket, id), 0,
          reason: 'forbidden is transient-ish: row left visible');
      expect(await h.pocket.collection('widgets').get(id), isNotNull);
    });

    test('invalid bucket index is a clear error', () async {
      final h = await EngineHarness.create(
          config: testConfig(sweepInterval: Duration.zero));
      addTearDown(h.close);
      expect(() => h.engine.sweeper.sweepBucket('widgets', 36),
          throwsA(isA<ArgumentError>()));
      expect(() => h.engine.sweeper.sweepBucket('widgets', -1),
          throwsA(isA<ArgumentError>()));
    });

    test('bucket count above the 36-letter alphabet is clamped', () async {
      final config = SyncConfig(
        sweepBucketCount: 100,
        bucketsPerSweep: 1,
        sweepInterval: Duration.zero,
        syncInterval: const Duration(days: 365),
        pushDebounce: const Duration(days: 365),
        connectivitySettle: Duration.zero,
      );
      final h = await EngineHarness.create(config: config);
      addTearDown(h.close);
      // A forced full sweep must not crash with a >36 bucket count.
      await h.engine.sweeper.sweepIfDue(force: true);
      final st = await h.engine.syncStore.readSweep('widgets');
      expect(st.bucket, inInclusiveRange(0, 35),
          reason: 'buckets clamped to the real 36-letter alphabet');
    });

    test('one store failing does not prevent other stores sweeping', () async {
      final h = await EngineHarness.create(
          config: testConfig(sweepInterval: Duration.zero),
          stores: [widgetsSchema(), widgetsSchema(name: 'widgets2')]);
      addTearDown(h.close);
      // Both stores have a record in bucket 0.
      h.mock.seed(store: 'widgets', data: {'name': 'a'}, id: bucketAId());
      h.mock.seed(store: 'widgets2', data: {'name': 'b'}, id: bucketAId());
      await h.engine.syncNow();
      final w2before = (await h.engine.syncStore.readSweep('widgets2')).bucket;
      final w1before = (await h.engine.syncStore.readSweep('widgets')).bucket;

      // widgets' listChanges fails; widgets2's works.
      h.mock.script('listChanges', [MockThrow(TransientNetworkError())]);
      await expectLater(
          h.engine.sweeper.sweepIfDue(), throwsA(isA<TransientNetworkError>()));

      // widgets2 still swept and committed progress.
      final w2 = await h.engine.syncStore.readSweep('widgets2');
      expect(w2.bucket, greaterThan(w2before),
          reason: 'widgets2 progressed despite the failure');
      final w1 = await h.engine.syncStore.readSweep('widgets');
      expect(w1.bucket, w1before,
          reason: 'failing store committed nothing on the failed pass');
    });

    test('a non-Exception store Error is rethrown after the other stores sweep',
        () async {
      final h = await EngineHarness.create(
          config: testConfig(sweepInterval: Duration.zero),
          stores: [widgetsSchema(), widgetsSchema(name: 'widgets2')]);
      addTearDown(h.close);
      h.mock.seed(store: 'widgets', data: {'name': 'a'}, id: bucketAId());
      h.mock.seed(store: 'widgets2', data: {'name': 'b'}, id: bucketAId());
      await h.engine.syncNow();
      final w1before = (await h.engine.syncStore.readSweep('widgets')).bucket;
      final w2before = (await h.engine.syncStore.readSweep('widgets2')).bucket;

      // A store fails with a raw Error (StateError is NOT an Exception, so it
      // takes the `throw firstError as Error` rethrow branch).
      final boom = StateError('listChanges blew up');
      h.mock.script('listChanges', [MockThrow(boom)]);
      await expectLater(h.engine.sweeper.sweepIfDue(), throwsA(same(boom)));

      // The other store still swept and committed progress; the failing store
      // committed nothing.
      final w2 = await h.engine.syncStore.readSweep('widgets2');
      expect(w2.bucket, greaterThan(w2before),
          reason: 'the healthy store still sweeps despite the Error');
      final w1 = await h.engine.syncStore.readSweep('widgets');
      expect(w1.bucket, w1before);
    });
  });

  group('hidden retention and purge safety', () {
    test('clean hidden row past the cutoff is purged', () async {
      var nowMs = 1000000000;
      final h = await EngineHarness.create(
        config: testConfig(
            sweepInterval: Duration.zero,
            purgeHiddenAfter: const Duration(days: 30),
            now: () => nowMs),
      );
      addTearDown(h.close);
      final id = h.mock
          .seed(store: 'widgets', data: {'name': 'clean'}, id: bucketAId());
      await h.engine.syncNow();
      await h.pocket.db.execute(
          'UPDATE lp_sync_row SET last_seen_at = 1 WHERE record_id = ?', [id]);
      h.mock.delete(id);
      await h.engine.sweeper.sweepBucket('widgets', 0);
      expect(await hiddenColumn(h.pocket, id), 1);

      nowMs += const Duration(days: 31).inMilliseconds;
      await h.engine.sweeper.sweepBucket('widgets', 0);

      expect(await h.pocket.collection('widgets').get(id), isNull,
          reason: 'clean hidden row purged past the cutoff');
    });

    test('hidden rows with pending local work are never purged', () async {
      for (final state in [
        SyncState.dirty,
        SyncState.inFlight,
        SyncState.conflict,
        SyncState.error,
        SyncState.quarantine,
      ]) {
        var nowMs = 1000000000;
        final h = await EngineHarness.create(
          config: testConfig(
              sweepInterval: Duration.zero,
              purgeHiddenAfter: const Duration(days: 30),
              now: () => nowMs),
        );
        addTearDown(h.close);
        final id = h.mock.seed(
            store: 'widgets', data: {'name': state.name}, id: bucketAId());
        await h.engine.syncNow();
        await h.pocket.outbox.setSyncState('widgets', id, state);
        await h.engine.puller.markHidden('widgets', id);
        await h.pocket.db.execute(
            'UPDATE lp_sync_row SET last_seen_at = 1 WHERE record_id = ?',
            [id]);
        expect(await hiddenColumn(h.pocket, id), 1);
        // Remove the remote so the sweep cannot converge it via fetchOne.
        h.mock.delete(id);

        nowMs += const Duration(days: 100).inMilliseconds;
        await h.engine.sweeper.sweepBucket('widgets', 0);

        expect(await h.pocket.collection('widgets').get(id), isNotNull,
            reason: 'hidden ${state.name} row must not be silently destroyed');
        final row = await sr(h.pocket, id);
        expect(row!.syncState, state);
        expect(row.accessState, AccessState.hidden);
      }
    });

    test('last_seen_at null is never purged', () async {
      var nowMs = 1000000000;
      final h = await EngineHarness.create(
        config: testConfig(
            sweepInterval: Duration.zero,
            purgeHiddenAfter: const Duration(days: 30),
            now: () => nowMs),
      );
      addTearDown(h.close);
      final id = h.mock
          .seed(store: 'widgets', data: {'name': 'null-seen'}, id: bucketAId());
      await h.engine.syncNow();
      // Force an unknown retention clock.
      await h.pocket.db.execute(
          'UPDATE lp_sync_row SET last_seen_at = NULL WHERE record_id = ?',
          [id]);
      await h.engine.puller.markHidden('widgets', id);
      h.mock.delete(id);

      nowMs += const Duration(days: 400).inMilliseconds;
      await h.engine.sweeper.sweepBucket('widgets', 0);

      expect(await h.pocket.collection('widgets').get(id), isNotNull,
          reason: 'unknown retention clock is never purged');
    });

    test('exact cutoff boundary is not purged (strict <)', () async {
      var nowMs = 1000000000;
      final h = await EngineHarness.create(
        config: testConfig(
            sweepInterval: Duration.zero,
            purgeHiddenAfter: const Duration(days: 30),
            now: () => nowMs),
      );
      addTearDown(h.close);
      final id = h.mock
          .seed(store: 'widgets', data: {'name': 'boundary'}, id: bucketAId());
      await h.engine.syncNow();
      // last_seen_at exactly at the sweep-time cutoff (nowMs before advancing).
      await h.pocket.db.execute(
          'UPDATE lp_sync_row SET last_seen_at = ? WHERE record_id = ?',
          [nowMs, id]);
      await h.engine.puller.markHidden('widgets', id);
      h.mock.delete(id);

      nowMs += const Duration(days: 30).inMilliseconds;
      await h.engine.sweeper.sweepBucket('widgets', 0);

      expect(await h.pocket.collection('widgets').get(id), isNotNull,
          reason: 'last_seen_at exactly at the cutoff is kept (strict <)');
    });

    test('file-attached clean hidden row purges with ref cleanup', () async {
      var nowMs = 1000000000;
      final h = await EngineHarness.create(
        config: testConfig(
            sweepInterval: Duration.zero,
            purgeHiddenAfter: const Duration(days: 30),
            now: () => nowMs),
      );
      addTearDown(h.close);
      final id = h.mock
          .seed(store: 'widgets', data: {'name': 'filed'}, id: bucketAId());
      await h.engine.syncNow();
      await h.pocket.outbox.registerFileRef(
          store: 'widgets',
          recordId: id,
          field: 'imgs',
          hash: 'refhash',
          size: 10);
      await h.pocket.db.execute(
          'UPDATE lp_sync_row SET last_seen_at = 1 WHERE record_id = ?', [id]);
      await h.engine.puller.markHidden('widgets', id);
      h.mock.delete(id);

      nowMs += const Duration(days: 31).inMilliseconds;
      await h.engine.sweeper.sweepBucket('widgets', 0);

      expect(await h.pocket.collection('widgets').get(id), isNull,
          reason: 'clean hidden file-attached row purged');
      final refs = await h.pocket.db
          .query('lp_file_refs', where: 'record_id = ?', whereArgs: [id]);
      expect(refs, isEmpty, reason: 'file refs cleaned by purge');
      final blobs = await h.pocket.db
          .query('lp_blobs', where: 'hash = ?', whereArgs: ['refhash']);
      expect(blobs.single['refcount'], 0, reason: 'blob refcount released');
    });
  });

  group('batched sweep and fetch operations (SWP-01)', () {
    test('mass server deletion batches markHidden in single transaction',
        () async {
      final db = await tempDbPath();
      addTearDown(() async => db.cleanup());
      final recorder = <String>[];
      final hooks = TestHooks(onExecute: recorder.add);
      final h = await EngineHarness.create(
        config: testConfig(sweepInterval: Duration.zero, maxPage: 50),
        testHooks: hooks,
        path: db.path,
      );
      addTearDown(h.close);

      final ids = <String>[];
      for (var i = 0; i < 20; i++) {
        ids.add(h.mock.seed(
          store: 'widgets',
          data: {'name': 'del_$i'},
          id: bucketAId(),
        ));
      }
      await h.engine.syncNow();
      for (final id in ids) {
        expect(await hiddenColumn(h.pocket, id), 0);
      }

      // Delete all 20 records server-side.
      for (final id in ids) {
        h.mock.delete(id);
      }
      recorder.clear();

      final report = await h.engine.sweeper.sweepBucket('widgets', 0);
      expect(report.hidden, 20);

      for (final id in ids) {
        expect(await hiddenColumn(h.pocket, id), 1);
        expect(await h.pocket.collection('widgets').get(id), isNotNull,
            reason: 'local bytes retained');
      }

      final fullCount =
          recorder.where((sql) => sql == 'PRAGMA synchronous=FULL').length;
      expect(fullCount, lessThanOrEqualTo(2),
          reason: 'mass hiding should commit in a batched transaction');
    });

    test('fetchBatch handles mixed outcomes (success, 404, transient error)',
        () async {
      final h = await EngineHarness.create(
          config: testConfig(sweepInterval: Duration.zero));
      addTearDown(h.close);

      final okId1 = h.mock
          .seed(store: 'widgets', data: {'name': 'ok1_v1'}, id: bucketAId());
      final okId2 = h.mock
          .seed(store: 'widgets', data: {'name': 'ok2_v1'}, id: bucketAId());
      final notFoundId = h.mock
          .seed(store: 'widgets', data: {'name': 'nf_v1'}, id: bucketAId());
      final transId = h.mock
          .seed(store: 'widgets', data: {'name': 'trans_v1'}, id: bucketAId());
      await h.engine.syncNow();

      // Mutate remote records.
      h.mock.mutate(okId1, {'id': okId1, 'name': 'ok1_v2'});
      h.mock.mutate(okId2, {'id': okId2, 'name': 'ok2_v2'});
      h.mock.delete(notFoundId); // 404 on getRecord

      // Script getRecord: transId throws transient error, notFoundId throws 404
      h.mock.script('getRecord', [
        MockReturn(h.mock.records[okId1]!.toRemote()),
        MockThrow(NotFoundError()),
        MockThrow(TransientNetworkError()),
        MockReturn(h.mock.records[okId2]!.toRemote()),
      ]);

      await h.engine.puller
          .fetchBatch('widgets', [okId1, notFoundId, transId, okId2]);

      // okId1 and okId2 applied
      expect(
          (await h.pocket.collection('widgets').get(okId1))!['name'], 'ok1_v2');
      expect(
          (await h.pocket.collection('widgets').get(okId2))!['name'], 'ok2_v2');

      // notFoundId marked hidden
      expect(await hiddenColumn(h.pocket, notFoundId), 1);

      // transId left unchanged and visible
      expect((await h.pocket.collection('widgets').get(transId))!['name'],
          'trans_v1');
      expect(await hiddenColumn(h.pocket, transId), 0);
    });

    test('fetchBatch respects batchSize chunking across transactions',
        () async {
      final db = await tempDbPath();
      addTearDown(() async => db.cleanup());
      final recorder = <String>[];
      final hooks = TestHooks(onExecute: recorder.add);
      final h = await EngineHarness.create(
        config: testConfig(sweepInterval: Duration.zero),
        testHooks: hooks,
        path: db.path,
      );
      addTearDown(h.close);

      final ids = <String>[];
      for (var i = 0; i < 15; i++) {
        ids.add(h.mock.seed(
          store: 'widgets',
          data: {'name': 'chunk_$i'},
          id: bucketAId(),
        ));
      }
      await h.engine.syncNow();

      for (final id in ids) {
        h.mock.mutate(id, {'id': id, 'name': 'updated_$id'});
      }
      recorder.clear();

      // Fetch with batchSize = 5 -> should run 3 chunk transactions.
      await h.engine.puller.fetchBatch('widgets', ids, batchSize: 5);

      for (final id in ids) {
        expect((await h.pocket.collection('widgets').get(id))!['name'],
            'updated_$id');
      }

      final fullCount =
          recorder.where((sql) => sql == 'PRAGMA synchronous=FULL').length;
      expect(fullCount, equals(3),
          reason:
              '15 items in chunks of 5 should execute exactly 3 write transactions');
    });

    test('markHiddenMany emits ChangeSet and RecordChangeEvents for all items',
        () async {
      final h = await EngineHarness.create(
          config: testConfig(sweepInterval: Duration.zero));
      addTearDown(h.close);

      final ids = <String>[];
      for (var i = 0; i < 5; i++) {
        ids.add(h.mock.seed(
          store: 'widgets',
          data: {'name': 'item_$i'},
          id: bucketAId(),
        ));
      }
      await h.engine.syncNow();

      final changeSets = <ChangeSet>[];
      final recordEvents = <RecordChangeEvent>[];
      final sub1 = h.pocket.changeBus.stream.listen(changeSets.add);
      final sub2 = h.pocket.changeBus.events.listen(recordEvents.add);
      addTearDown(sub1.cancel);
      addTearDown(sub2.cancel);

      await h.engine.puller.markHiddenMany('widgets', ids);
      await Future<void>.delayed(Duration.zero);

      expect(changeSets.any((c) => c.ids.containsAll(ids)), isTrue);
      final hideEvents = recordEvents
          .where((e) => e.store == 'widgets' && e.action == ChangeAction.hide)
          .toList();
      expect(hideEvents.length, equals(5));
      expect(hideEvents.map((e) => e.id).toSet(), equals(ids.toSet()));
    });

    test('fetchBatch resolves 3-way merge on dirty record in batch', () async {
      final h = await EngineHarness.create(
          config: testConfig(sweepInterval: Duration.zero));
      addTearDown(h.close);

      final cleanId = h.mock.seed(
          store: 'widgets',
          data: {'name': 'clean', 'qty': 10, 'price': 5.0},
          id: bucketAId());
      final dirtyId = h.mock.seed(
          store: 'widgets',
          data: {'name': 'dirty', 'qty': 10, 'price': 5.0},
          id: bucketAId());
      await h.engine.syncNow();

      // Locally edit dirtyId (name -> 'dirty_local', qty -> 10)
      await h.pocket
          .collection('widgets')
          .patch(dirtyId, {'name': 'dirty_local'});

      // Server updates price on dirtyId, and name on cleanId
      h.mock.mutate(dirtyId, {
        'id': dirtyId,
        'name': 'dirty',
        'qty': 10,
        'price': 99.0,
      });
      h.mock.mutate(cleanId, {
        'id': cleanId,
        'name': 'clean_v2',
        'qty': 10,
        'price': 5.0,
      });

      await h.engine.puller.fetchBatch('widgets', [cleanId, dirtyId]);

      // cleanId updated cleanly
      expect((await h.pocket.collection('widgets').get(cleanId))!['name'],
          'clean_v2');

      // dirtyId 3-way merged: local 'dirty_local' name preserved + server price 99.0 accepted
      final merged = await h.pocket.collection('widgets').get(dirtyId);
      expect(merged!['name'], 'dirty_local');
      expect(merged['price'], 99.0);
      final syncRow = await sr(h.pocket, dirtyId);
      expect(syncRow!.syncState, SyncState.dirty,
          reason: 'still dirty with pending push');
    });

    test('fetchBatch quarantines map failure without breaking valid siblings',
        () async {
      final h = await EngineHarness.create(
          config: testConfig(sweepInterval: Duration.zero));
      addTearDown(h.close);

      final validId = h.mock
          .seed(store: 'widgets', data: {'name': 'valid_v1'}, id: bucketAId());
      final badId = bucketAId();
      await h.engine.syncNow();

      h.mock.mutate(validId, {'id': validId, 'name': 'valid_v2'});
      // Record with invalid schema value (e.g. integer for string field 'name')
      final badRecord = RemoteRecord(
        id: badId,
        store: 'widgets',
        updated: h.mock.nextUpdated(),
        data: {'id': badId, 'name': 12345}, // type mismatch for 'name'
      );

      h.mock.script('getRecord', [
        MockReturn(h.mock.records[validId]!.toRemote()),
        MockReturn(badRecord),
      ]);

      await h.engine.puller.fetchBatch('widgets', [validId, badId]);

      // Valid record applied
      expect((await h.pocket.collection('widgets').get(validId))!['name'],
          'valid_v2');

      // Bad record quarantined
      final badSyncRow = await sr(h.pocket, badId);
      expect(badSyncRow!.syncState, SyncState.quarantine);
      final deadLetters = await h.pocket.db
          .query('lp_dead_letter', where: 'record_id = ?', whereArgs: [badId]);
      expect(deadLetters, isNotEmpty);
    });

    test('fetchBatch handles duplicate ids within the same batch idempotently',
        () async {
      final h = await EngineHarness.create(
          config: testConfig(sweepInterval: Duration.zero));
      addTearDown(h.close);

      final id = h.mock
          .seed(store: 'widgets', data: {'name': 'initial'}, id: bucketAId());
      await h.engine.syncNow();

      h.mock.mutate(id, {'id': id, 'name': 'dup_updated'});

      // Deliver duplicate id in fetch list
      await h.engine.puller.fetchBatch('widgets', [id, id]);

      expect((await h.pocket.collection('widgets').get(id))!['name'],
          'dup_updated');
      final rows = await h.pocket.db
          .rawQuery('SELECT COUNT(*) c FROM widgets WHERE id = ?', [id]);
      expect(rows.first['c'], 1);
    });

    test(
        'full sweep with mixed unchanged, drifted, revived, and deleted records',
        () async {
      final h = await EngineHarness.create(
          config: testConfig(sweepInterval: Duration.zero));
      addTearDown(h.close);

      final unchangedId = h.mock
          .seed(store: 'widgets', data: {'name': 'unchanged'}, id: bucketAId());
      final driftedId = h.mock
          .seed(store: 'widgets', data: {'name': 'drift_v1'}, id: bucketAId());
      final reviveId = h.mock
          .seed(store: 'widgets', data: {'name': 'revive_v1'}, id: bucketAId());
      final deletedId = h.mock
          .seed(store: 'widgets', data: {'name': 'deleted'}, id: bucketAId());
      await h.engine.syncNow();

      // 1. Hide reviveId locally
      h.mock.delete(reviveId);
      await h.engine.sweeper.sweepBucket('widgets', 0);
      expect(await hiddenColumn(h.pocket, reviveId), 1);

      // 2. Server states for bucket 0:
      // - unchangedId: untouched
      // - driftedId: modified
      // - reviveId: re-seeded on server (revived)
      // - deletedId: deleted on server
      h.mock.mutate(driftedId, {'id': driftedId, 'name': 'drift_v2'});
      h.mock.seed(
          store: 'widgets',
          data: {'name': 'revive_v2'},
          id: reviveId,
          updated: h.mock.nextUpdated());
      h.mock.delete(deletedId);

      final report = await h.engine.sweeper.sweepBucket('widgets', 0);
      expect(report.scanned, 3); // unchanged, drifted, revive
      expect(report.fetched, 2); // drifted + revive
      expect(report.hidden, 1); // deleted

      expect((await h.pocket.collection('widgets').get(unchangedId))!['name'],
          'unchanged');
      expect(await hiddenColumn(h.pocket, unchangedId), 0);

      expect((await h.pocket.collection('widgets').get(driftedId))!['name'],
          'drift_v2');
      expect(await hiddenColumn(h.pocket, driftedId), 0);

      expect((await h.pocket.collection('widgets').get(reviveId))!['name'],
          'revive_v2');
      expect(await hiddenColumn(h.pocket, reviveId), 0);

      expect(await hiddenColumn(h.pocket, deletedId), 1);
    });
  });
}
