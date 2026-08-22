import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';
import '../../support/mock_pb_server.dart';
import '../support/wire_server.dart';

/// Robustness & recovery over the wire (tests.md #22-27) — a single source of
/// scenarios run against BOTH the in-process MockPbServer and the LIVE
/// PocketBase server via [wireTest].
///
/// Unified (mock + live):
/// - the pull loop is CURSOR-based: `maxPage`-sized pages are fetched with an
///   advancing `(updated,id)` keyset filter, so multi-page pulls cross pages
///   with no loss/duplication;
/// - a remote delete with NO SSE event is found by the 36-bucket anti-entropy
///   sweep on a normal cycle (not just a forced `invalidateVisibility`);
/// - a large offline drain converges with bounded retries (modest 300-record
///   seed to stay polite on the shared live server).
///
/// Mock-only (fault injection the live server cannot do):
/// - a 429 + `Retry-After` from the per-record write path is a RETRYABLE
///   backoff: the op is retained (dirty, attempt bumped, deadline in the
///   future), never dead-lettered, never retried before the deadline;
/// - a poison batch fails transactionally (whole request rolled back) and the
///   pusher BINARY-SPLITS until the poison op is isolated and dead-lettered
///   (`batch_poison`) while every healthy op still lands;
/// - a server crash MID-drain (batch held in-flight, server killed) loses no
///   op: outbox + cursor survive; restarting the mock on the same port and
///   re-syncing drains everything;
/// - hitting `maxPagesPerPass` auto-continues via an immediate catch-up pass;
/// - a 1000+ record offline drain converges with bounded retries even when
///   one op is poisoned, and `purgeHiddenAfter` retention purges aged hidden
///   rows on the next sweep.
void main() {
  Future<int> deadLetterCount(WireClient h) async =>
      (await h.pocket.db.rawQuery('SELECT COUNT(*) AS c FROM lp_dead_letter'))
          .first['c'] as int;

  Future<String?> accessStateOf(WireServer s, WireClient h, String id) async {
    final rows = await h.pocket.db.query('lp_sync_row',
        columns: ['access_state'],
        where: 'store = ? AND record_id = ?',
        whereArgs: [s.store, id]);
    return rows.isEmpty ? null : rows.single['access_state'] as String;
  }

  group('E2E robustness & recovery over the wire', () {
    wireTest('push honors Retry-After (429): deferred, then converges',
        (s) async {
      final mock = (s as MockWireServer).mock;
      // Per-record writes (batch probe answers 403) so forceWriteStatus lands
      // on the create route.
      mock.batchEnabled = false;
      mock.forceWriteStatus = 429;
      mock.forceRetryAfter = '1';

      final a = await s.createClient();
      await a.pocket.collection(s.store).put(record(name: 'throttled'));
      final first = await a.engine.syncNow();
      expect(first.hadError, isTrue,
          reason: 'the 429 surfaced as a push error');
      expect(await s.countRecords(s.store), 0,
          reason: 'nothing landed while throttled');

      // The op is RETAINED with a backoff deadline — never dead-lettered.
      expect(await a.engine.syncStore.countPending(), 1,
          reason: 'the op survives as pending work');
      expect(await deadLetterCount(a), 0,
          reason: 'a 429 is retryable, never a dead letter');
      final id =
          (await a.pocket.collection(s.store).query().all().ids()).single;
      final row = (await a.pocket.db.query('lp_sync_row',
              columns: ['attempt_count', 'next_retry_at', 'sync_state'],
              where: 'store = ? AND record_id = ?',
              whereArgs: [s.store, id]))
          .single;
      expect(row['attempt_count'], 1);
      expect(row['sync_state'], 'dirty');
      expect(row['next_retry_at'] as int,
          greaterThan(DateTime.now().millisecondsSinceEpoch),
          reason: 'the Retry-After deadline lies in the future');

      // An IMMEDIATE cycle does NOT retry before the deadline.
      await a.engine.syncNow();
      expect(await a.engine.syncStore.countPending(), 1,
          reason: 'the persisted deadline gates the retry');
      expect(await s.countRecords(s.store), 0);

      // After the deadline passes the retry lands and the op settles.
      mock.forceWriteStatus = null;
      await Future<void>.delayed(const Duration(milliseconds: 1100));
      final second = await a.engine.syncNow();
      expect(second.hadError, isFalse);
      expect(await s.countRecords(s.store), 1,
          reason: 'the deferred op converged on the next cycle');
      expect(await a.engine.syncStore.countPending(), 0);
      expect(await deadLetterCount(a), 0);
    }, live: false);

    wireTest('batch poison: transactional rollback, binary split, converges',
        (s) async {
      final mock = (s as MockWireServer).mock;
      mock.poisonEnabled = true;

      final a = await s.createClient();
      await a.pocket.collection(s.store).put(record(name: 'good-1'));
      await a.pocket.collection(s.store).put(record(name: 'good-2'));
      final poisonId = generateRecordId();
      await a.pocket
          .collection(s.store)
          .put(record(id: poisonId, name: 'poison'));

      final first = await a.engine.syncNow();
      // The whole poison batch was rolled back; the binary split isolated it.
      expect(first.deadLettered, 1,
          reason: 'exactly the poison op dead-lettered');
      expect(await s.countRecords(s.store), 2,
          reason: 'both healthy ops landed despite the poisoned batch');
      expect(await a.engine.syncStore.countPending(), 0);
      expect(await deadLetterCount(a), 1);
      final dl = await a.pocket.db.query('lp_dead_letter',
          columns: ['kind'], where: 'record_id = ?', whereArgs: [poisonId]);
      expect(dl.single['kind'], 'batch_poison');
      // The local row is retained for the user to fix.
      expect(await a.pocket.collection(s.store).get(poisonId), isNotNull);

      // "Fix the syntax": a local edit clears the error and pushes cleanly.
      await a.pocket.collection(s.store).patch(poisonId, {'name': 'fixed'});
      await a.engine.syncNow();
      expect(await a.engine.syncStore.countPending(), 0);
      expect(await s.countRecords(s.store), 3,
          reason: 'the fixed record converges after re-push');
      expect(
          (await s.readRecord(s.store, poisonId))!['data']
              as Map<String, Object?>,
          containsPair('name', 'fixed'));
    }, live: false);

    wireTest('server crash mid-drain: outbox + cursor survive, converges',
        (s) async {
      final mock = (s as MockWireServer).mock;
      await s.start();
      final port = mock.port;
      final a = await s.createClient();

      // Establish a cursor.
      await s.createRecord(s.store, {'name': 'base'});
      await a.engine.syncNow();
      expect(await s.countRecords(s.store), 1);

      // Offline edits accumulate in the outbox.
      for (var i = 0; i < 6; i++) {
        await a.pocket.collection(s.store).put(record(name: 'op$i'));
      }
      expect(await a.engine.syncStore.countPending(), 6);

      // Hold the batch in-flight, then kill the server MID-drain.
      mock.batchLatency = const Duration(milliseconds: 250);
      final fut = a.engine.syncNow();
      await Future<void>.delayed(const Duration(milliseconds: 60));
      await mock.stop();
      final report = await fut;
      expect(report.hadError, isTrue,
          reason: 'the in-flight batch died with the server');
      expect(await a.engine.syncStore.countPending(), 6,
          reason: 'no op was lost or dead-lettered by the crash');
      expect(await deadLetterCount(a), 0);

      // Restart the mock on the SAME port (fresh, empty records map).
      final mock2 = await MockPbServer().start(port: port);
      addTearDown(() => mock2.stop());

      // Backoff deadline passes; re-syncNow drains to the fresh server.
      await Future<void>.delayed(const Duration(milliseconds: 500));
      var guard = 0;
      while (await a.engine.syncStore.countPending() > 0) {
        await a.engine.syncNow();
        guard++;
        if (guard > 20) fail('drain did not converge after the restart');
      }
      expect(await a.engine.syncStore.countPending(), 0);
      expect(mock2.records.length, 6,
          reason: 'every surviving op landed on the fresh server');
      expect(await deadLetterCount(a), 0);

      // The cursor survived the crash: a new server-side record still pulls.
      final freshId =
          mock2.seed(store: 'widgets', data: {'name': 'after-restart'});
      await a.engine.syncNow();
      expect(await a.pocket.collection(s.store).get(freshId), isNotNull);
    }, live: false);

    wireTest('multi-page pull crosses pages with cursor correctness',
        (s) async {
      final a = await s.createClient();
      const total = 150; // 2 pages at perPage=100 (both backends)
      for (var i = 0; i < total; i++) {
        await a.pocket.collection(s.store).put(record(name: 'r$i', qty: i));
      }
      await a.engine.syncNow();
      expect(await a.engine.syncStore.countPending(), 0);
      expect(await s.countRecords(s.store), total,
          reason: 'the seed fully landed on the server');

      // A SECOND client with a fresh cursor pulls with perPage=100: it MUST
      // cross 2 pages to see all 150 records.
      final dbB = await tempDbPath();
      final b = await s.createClient(
          path: dbB.path, config: wireConfig(maxPage: 100));
      s.onClose(() => dbB.cleanup());
      await b.engine.syncNow();

      expect(await b.pocket.collection(s.store).query().all().count(), total,
          reason: 'B pulled every record across 2+ server pages');
      expect(await b.engine.syncStore.countPending(), 0);
      final ids = await b.pocket.collection(s.store).query().all().ids();
      expect(ids.toSet().length, total,
          reason: 'no duplicates across page boundaries');
      final sample = await b.pocket.collection(s.store).get(ids.first);
      expect(sample, isNotNull);
    });

    wireTest('page-limit auto-continuation drains across passes', (s) async {
      final mock = (s as MockWireServer).mock;
      final db = await tempDbPath();
      final a = await s.createClient(
          path: db.path, config: wireConfig(maxPage: 40, maxPagesPerPass: 1));
      s.onClose(() => db.cleanup());

      const total = 120; // 3 pages of 40
      for (var i = 0; i < total; i++) {
        mock.seed(store: 'widgets', data: {'name': 'r$i'});
      }
      await a.engine.syncNow();
      // The immediate catch-up pass (auto-continuation) finishes the pull.
      var guard = 0;
      while (await a.pocket.collection(s.store).query().all().count() < total) {
        await Future<void>.delayed(const Duration(milliseconds: 100));
        guard++;
        if (guard > 40) fail('auto-continuation never finished the pull');
      }
      expect(await a.pocket.collection(s.store).query().all().count(), total);
      expect(await a.engine.syncStore.countPending(), 0);
    }, live: false);

    wireTest('remote delete is found by the 36-bucket sweep on a normal cycle',
        (s) async {
      final a = await s.createClient(
          config:
              wireConfig(sweepInterval: Duration.zero, bucketsPerSweep: 36));
      final id = await s.createRecord(s.store, {'name': 'swept'});
      await a.engine.syncNow();
      expect(await a.pocket.collection(s.store).get(id), isNotNull);

      // Raw server-side delete: NO SSE event, so only the sweep can see it.
      await s.deleteRecord(s.store, id);

      // A NORMAL cycle's anti-entropy sweep (all 36 buckets) discovers it.
      await a.engine.syncNow();
      expect(await a.pocket.collection(s.store).get(id), isNotNull,
          reason: 'the sweep hides, never hard-deletes');
      expect(await a.pocket.collection(s.store).query().all().count(), 0);
      expect(await accessStateOf(s, a, id), AccessState.hidden.name);
    });

    wireTest('1000+ offline drain converges with a bounded-retry guard',
        (s) async {
      final mock = (s as MockWireServer).mock;
      mock.poisonEnabled =
          true; // one op dead-letters; the drain must not stall
      final db = await tempDbPath();
      final a = await s.createClient(path: db.path, autoStart: false);
      s.onClose(() => db.cleanup());

      const total = 1000;
      for (var i = 0; i < total; i++) {
        await a.pocket
            .collection(s.store)
            .put(record(name: i == 777 ? 'poison' : 'op$i', qty: i));
      }
      expect(await a.engine.syncStore.countPending(), total);
      await a.engine.start();

      // Bounded retry: fail LOUDLY if the drain does not converge.
      var guard = 0;
      while (await a.engine.syncStore.countPending() > 0) {
        await a.engine.syncNow();
        guard++;
        if (guard > 40) fail('drain did not converge after $guard cycles');
      }
      expect(await a.engine.syncStore.countPending(), 0);
      expect(await s.countRecords(s.store), total - 1,
          reason: 'the poisoned op dead-lettered; every other op landed');
      expect(await deadLetterCount(a), 1,
          reason: 'exactly the poison op dead-lettered');
      expect(await a.pocket.collection(s.store).query().all().count(), total,
          reason: 'no local rows were lost');
    }, live: false);

    wireTest('large offline drain converges (modest, both backends)',
        (s) async {
      final a = await s.createClient(autoStart: false);
      const total = 300;
      for (var i = 0; i < total; i++) {
        await a.pocket.collection(s.store).put(record(name: 'op$i', qty: i));
      }
      expect(await a.engine.syncStore.countPending(), total);

      await a.engine.start();
      // Bounded retry: fail LOUDLY if the drain does not converge.
      var guard = 0;
      while (await a.engine.syncStore.countPending() > 0) {
        await a.engine.syncNow();
        guard++;
        if (guard > 40) fail('drain did not converge after $guard cycles');
      }
      expect(await a.engine.syncStore.countPending(), 0);
      expect(await s.countRecords(s.store), total,
          reason: 'every offline record drained to the server exactly once');
      expect(await a.pocket.collection(s.store).query().all().count(), total,
          reason: 'no local rows lost');
    }, timeout: const Timeout(Duration(seconds: 180)));

    wireTest('purgeHiddenAfter retention edge: aged hidden rows are purged',
        (s) async {
      final mock = (s as MockWireServer).mock;
      final db = await tempDbPath();
      final a = await s.createClient(
          path: db.path,
          config: wireConfig(
            sweepInterval: const Duration(seconds: 1),
            bucketsPerSweep: 36,
            purgeHiddenAfter: const Duration(seconds: 2),
          ));
      s.onClose(() => db.cleanup());

      final id = await s.createRecord(s.store, {'name': 'doomed'});
      await a.engine.syncNow();
      expect(await a.pocket.collection(s.store).get(id), isNotNull);

      // Hide it via the sweep (raw delete + forced sweep).
      mock.delete(id);
      await a.engine.invalidateVisibility();
      expect(await a.pocket.collection(s.store).get(id), isNotNull,
          reason: 'hidden rows are retained within the retention window');
      expect(await a.pocket.collection(s.store).query().all().count(), 0);

      // Age it past the retention window; the next sweep purges it.
      await Future<void>.delayed(const Duration(milliseconds: 2200));
      await a.engine.syncNow();
      expect(await a.pocket.collection(s.store).get(id), isNull,
          reason: 'the aged hidden row was purged by retention');
      expect(await a.pocket.collection(s.store).query().all().count(), 0);
      expect(
          await a.pocket.outbox.readSyncRow(a.pocket.db, s.store, id), isNull,
          reason: 'sync metadata was purged with the row');
    }, live: false);
  });
}
