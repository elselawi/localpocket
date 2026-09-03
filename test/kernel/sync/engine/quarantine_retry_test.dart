import 'package:localpocket/src/kernel/ids.dart' show generateRecordId;
import 'package:localpocket/src/kernel/local_pocket.dart';
import 'package:localpocket/src/kernel/sync/sync_tables.dart';
import 'package:test/test.dart';

import '../../../support/engine_helpers.dart';

/// "Quarantine can permanently advance the cursor".
///
/// A malformed remote record is quarantined (the store never stalls), but the
/// pull cursor advances past it — so a dedicated, backoff-gated retry must
/// re-fetch quarantined records out-of-band: a now-valid record is re-applied
/// and cleared, a still-malformed one is re-quarantined with a longer delay.
void main() {
  // An id in sweep bucket 0 (first char 'a').
  String bucketAId() => 'a${generateRecordId().substring(1)}';

  Future<SyncRowState?> sr(LocalPocket pocket, String id) =>
      pocket.outbox.readSyncRow(pocket.db, 'widgets', id);

  group('quarantine retry', () {
    test('pull quarantine records attempt_count=1 and a future next_retry_at',
        () async {
      const clock = 1000000;
      final h =
          await EngineHarness.create(config: testConfig(now: () => clock));
      addTearDown(h.close);
      final id = bucketAId();
      // Missing required `name` -> map failure -> quarantined.
      h.mock.seed(store: 'widgets', data: {'qty': 1}, id: id);

      await h.engine.syncNow();

      final row = await sr(h.pocket, id);
      expect(row!.syncState, SyncState.quarantine);
      expect(row.attemptCount, 1, reason: 'first quarantine is attempt 1');
      expect(row.nextRetryAt, clock + 1000,
          reason: 'delayFor(1) = 1s with backoffBase 1s, jitter 1.0');
      expect(row.lastError, isNotEmpty);
      // The quarantine records the remote version it saw (seen watermark).
      expect(row.remoteUpdated, isNotNull);
    });

    test('sweeper skips quarantined records whose backoff has not elapsed',
        () async {
      const clock = 1000000;
      final h =
          await EngineHarness.create(config: testConfig(now: () => clock));
      addTearDown(h.close);
      final id = bucketAId();
      h.mock.seed(store: 'widgets', data: {'qty': 1}, id: id);
      await h.engine.syncNow();
      final before = await sr(h.pocket, id);
      expect(before!.nextRetryAt, greaterThan(clock));

      final report = await h.engine.sweeper.sweepBucket('widgets', 0);

      expect(report.fetched, 0, reason: 'not yet due -> no re-fetch');
      expect((await sr(h.pocket, id))!.attemptCount, 1,
          reason: 'no state change while the backoff is unexpired');
    });

    test(
        'sweeper re-fetches due quarantined records and re-quarantines '
        'still-malformed ones with a longer backoff', () async {
      var clock = 1000000;
      final h =
          await EngineHarness.create(config: testConfig(now: () => clock));
      addTearDown(h.close);
      final id = bucketAId();
      h.mock.seed(store: 'widgets', data: {'qty': 1}, id: id);
      await h.engine.syncNow();
      expect((await sr(h.pocket, id))!.nextRetryAt, clock + 1000);

      // Backoff elapses.
      clock = 2000000;
      final report = await h.engine.sweeper.sweepBucket('widgets', 0);

      expect(report.fetched, greaterThanOrEqualTo(1),
          reason: 'the due quarantined record is re-fetched out-of-band');
      final row = await sr(h.pocket, id);
      expect(row!.syncState, SyncState.quarantine,
          reason: 'still malformed -> still quarantined');
      expect(row.attemptCount, 2, reason: 'attempt escalated');
      expect(row.nextRetryAt, 2002000,
          reason: 'delayFor(2) = 2s -> longer backoff');
      expect(row.lastError, isNotEmpty);
    });

    test('a now-valid quarantined record is re-applied and cleared', () async {
      var clock = 1000000;
      final h =
          await EngineHarness.create(config: testConfig(now: () => clock));
      addTearDown(h.close);
      final id = bucketAId();
      h.mock.seed(store: 'widgets', data: {'qty': 1}, id: id);
      await h.engine.syncNow();
      expect((await sr(h.pocket, id))!.syncState, SyncState.quarantine);
      expect(await h.pocket.collection('widgets').get(id), isNull,
          reason: 'never applied while malformed');

      // The remote payload becomes valid (another writer fixed it).
      h.mock.mutate(id, {'id': id, 'name': 'fixed', 'qty': 5});
      clock = 2000000;

      final report = await h.engine.sweeper.sweepBucket('widgets', 0);
      expect(report.fetched, greaterThanOrEqualTo(1));

      final row = await sr(h.pocket, id);
      expect(row!.syncState, SyncState.clean,
          reason: 'quarantine cleared by re-application');
      expect(row.attemptCount, 0, reason: 'attempt counter reset');
      final local = await h.pocket.collection('widgets').get(id);
      expect(local!['name'], 'fixed');
      expect(local['qty'], 5);
    });

    test('quarantine parks a record once the attempt budget is exhausted',
        () async {
      var clock = 1000000;
      final h = await EngineHarness.create(
          config: testConfig(now: () => clock, maxAttempts: 2));
      addTearDown(h.close);
      final id = bucketAId();
      h.mock.seed(store: 'widgets', data: {'qty': 1}, id: id);
      await h.engine.syncNow();
      expect((await sr(h.pocket, id))!.attemptCount, 1);

      // Backoff elapses; the second quarantine exhausts the budget and parks
      // the record (quarantine kept, but never due again).
      clock = 2000000;
      await h.engine.sweeper.sweepBucket('widgets', 0);
      final row = await sr(h.pocket, id);
      expect(row!.attemptCount, 2);
      expect(row.nextRetryAt, greaterThan(clock + 1000000000),
          reason: 'parked: never due again after the budget is exhausted');

      // Parked records are never re-fetched by the sweep.
      clock = 3000000;
      final report = await h.engine.sweeper.sweepBucket('widgets', 0);
      expect(report.fetched, 0, reason: 'parked record is not re-fetched');

      // One dead-letter audit row per record (upsert, no accumulation).
      final dead = await h.pocket.db
          .query('lp_dead_letter', where: 'record_id = ?', whereArgs: [id]);
      expect(dead, hasLength(1),
          reason: 'repeated quarantines replace, never accumulate, the row');
    });

    test('quarantine does not stall the store or block later records',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final bad = bucketAId();
      h.mock.seed(store: 'widgets', data: {'qty': 1}, id: bad);
      final goodA = h.mock
          .seed(store: 'widgets', data: {'name': 'after'}, id: bucketAId());

      await h.engine.syncNow();

      expect(await h.pocket.collection('widgets').get(goodA), isNotNull,
          reason: 'later records still applied');
      expect((await sr(h.pocket, bad))!.syncState, SyncState.quarantine);
      // The pull cursor advanced past the malformed record (seen watermark),
      // so the store never stalls on it.
      final cursor = await h.engine.syncStore.readCursor('widgets');
      expect(cursor, isNotNull);
      expect(cursor!.updated, isNotEmpty);
    });
  });
}
