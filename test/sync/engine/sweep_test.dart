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
}
