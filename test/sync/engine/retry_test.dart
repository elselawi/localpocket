import 'dart:math';

import 'package:localpocket/localpocket.dart';
import 'package:localpocket/sync.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';
import 'engine_helpers.dart';
import 'mock_backend.dart';

/// Backoff, retry, and dead-letter tests.
void main() {
  Future<SyncRowState?> sr(LocalPocket pocket, String id) =>
      pocket.outbox.readSyncRow(pocket.db, 'widgets', id);

  Future<List<Map<String, Object?>>> deadLetters(LocalPocket pocket) =>
      pocket.db.query('lp_dead_letter', orderBy: 'at ASC');

  group('backoff, retries, dead letters', () {
    test('backoff schedule bounds and jitter', () {
      const base = SyncConfig(backoffBase: Duration(seconds: 1));

      // Deterministic jitter of 1.0: pure exponential schedule.
      final noJitter = SyncConfig(
          backoffBase: const Duration(seconds: 1), jitter: (_) => 1.0);
      expect(noJitter.delayFor(1), const Duration(seconds: 1));
      expect(noJitter.delayFor(2), const Duration(seconds: 2));
      expect(noJitter.delayFor(3), const Duration(seconds: 4));
      expect(noJitter.delayFor(4), const Duration(seconds: 8));

      // Jitter scales within 0.5..1.5.
      expect(
          SyncConfig(
              backoffBase: const Duration(seconds: 1),
              jitter: (_) => 0.5).delayFor(1),
          const Duration(milliseconds: 500));
      expect(
          SyncConfig(
              backoffBase: const Duration(seconds: 1),
              jitter: (_) => 1.5).delayFor(1),
          const Duration(milliseconds: 1500));

      // Cap: min(base * 2^(n-1), cap).
      final capped = SyncConfig(
          backoffBase: const Duration(seconds: 1),
          backoffCap: const Duration(seconds: 3),
          jitter: (_) => 1.0);
      expect(capped.delayFor(3), const Duration(seconds: 3),
          reason: '4s capped to 3s');
      expect(capped.delayFor(10), const Duration(seconds: 3));

      // Default jitter stays within bounds.
      for (var n = 1; n <= 6; n++) {
        final d = base.delayFor(n).inMilliseconds;
        expect(d, greaterThanOrEqualTo(500 * pow(2, n - 1)));
        expect(d, lessThanOrEqualTo(1500 * pow(2, n - 1).toInt()));
      }
    });

    test('retry after honored', () {
      final cfg = SyncConfig(
          backoffBase: const Duration(seconds: 30), jitter: (_) => 0.5);
      expect(cfg.delayFor(1, retryAfter: '7'), const Duration(seconds: 7),
          reason: 'Retry-After wins over the schedule');
      expect(cfg.delayFor(5, retryAfter: '1'), const Duration(seconds: 1));
      expect(cfg.delayFor(3, retryAfter: 'not-a-number'),
          const Duration(seconds: 1),
          reason: 'malformed -> 1s fallback');
    });

    test('429 throttles lane', () async {
      // A fake clock makes the backoff deadline deterministic under load.
      var clock = 1000000;
      final h = await EngineHarness.create(
          config: testConfig(
              backoffBase: const Duration(seconds: 1),
              pushDebounce: const Duration(days: 365),
              now: () => clock));
      addTearDown(h.close);

      final id = generateRecordId();
      await h.pocket.collection('widgets').put(record(id: id, name: 'x'));
      h.mock.script('createRecord', [MockThrow(ServerBusyError())]);
      await h.engine.syncNow();

      var row = await sr(h.pocket, id);
      expect(row!.attemptCount, 1);
      expect(row.nextRetryAt, greaterThan(clock),
          reason: 'persisted backoff deadline set');

      // Still inside the backoff window: the lane stays throttled.
      clock += 500;
      await h.engine.syncNow();
      expect(h.mock.createCalls, 1);
      row = await sr(h.pocket, id);
      expect(row!.attemptCount, 1);

      // Past the deadline: the lane retries.
      clock += 1000;
      await h.engine.syncNow();
      expect(h.mock.createCalls, 2);
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
    });

    test('permanent errors no retry', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);

      final id = generateRecordId();
      await h.pocket.collection('widgets').put(record(id: id, name: 'x'));
      h.mock.script('createRecord', [MockThrow(PayloadError('bad shape'))]);
      await h.engine.syncNow();

      final dl = await deadLetters(h.pocket);
      expect(dl.any((r) => r['kind'] == 'validation_push'), isTrue);
      final row = await sr(h.pocket, id);
      expect(row!.syncState, SyncState.error,
          reason: 'permanent -> error state');
      expect(
          await h.pocket.outbox.readOp(h.pocket.db, 'widgets', id), isNotNull);

      // error rows are never retried in a loop.
      final before = h.mock.createCalls;
      await h.engine.syncNow();
      await h.engine.syncNow();
      expect(h.mock.createCalls, before,
          reason: 'no retry for permanent errors');
    });

    test('dead letter contents', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);

      final id = generateRecordId();
      await h.pocket
          .collection('widgets')
          .put(record(id: id, name: 'bob', qty: 7));
      h.mock.script('createRecord', [MockThrow(PayloadError('boom'))]);
      await h.engine.syncNow();

      final dl = await deadLetters(h.pocket);
      expect(dl.length, 1);
      final entry = dl.single;
      expect(entry['kind'], 'validation_push');
      expect(entry['store'], 'widgets');
      expect(entry['record_id'], id);
      expect(entry['error'], 'boom');
      final payload = (entry['payload_json'] as String);
      expect(payload, contains('"name":"bob"'));
      expect(payload, contains('"qty":7'));
      expect(payload, contains('"id":"$id"'), reason: 'payload carries the id');
    });

    test('poison record does not block others', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);

      final bad = generateRecordId();
      await h.pocket.collection('widgets').put(record(id: bad, name: 'poison'));
      await h.pocket.collection('widgets').put(record(name: 'fine'));
      // First op (earliest created_at) hits a permanent error; the second must
      // still be delivered.
      h.mock.script('createRecord', [MockThrow(PayloadError('nope'))]);
      final report = await h.engine.syncNow();

      expect(report.deadLettered, 1);
      expect(report.pushed, 1, reason: 'sibling not blocked by the failure');
      expect(h.mock.records.length, 1);
      expect(h.mock.records.values.single.data['name'], 'fine');
      expect(await h.engine.syncStore.countPending(), 0);
      final dl = await deadLetters(h.pocket);
      expect(dl.single['record_id'], bad);
    });

    test('restart resumes pending with persisted backoff', () async {
      var clock = 2000000;
      final config = testConfig(
          backoffBase: const Duration(seconds: 1),
          pushDebounce: const Duration(days: 365),
          now: () => clock);
      final mock = MockSyncBackend();
      final pocket = await openPocket(stores: [widgetsSchema()]);
      final engineA = SyncEngine(pocket: pocket, backend: mock, config: config);
      await engineA.start();
      SyncEngine? engineB;
      addTearDown(() async {
        await engineA.stop();
        await engineB?.stop();
        await pocket.close();
      });

      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'x'));
      mock.script('createRecord', [MockThrow(TransientNetworkError())]);
      await engineA.syncNow();

      var row = await sr(pocket, id);
      expect(row!.attemptCount, 1);
      expect(row.nextRetryAt, greaterThan(clock));

      // Simulate an app restart: same pocket, fresh engine.
      await engineA.stop();
      engineB = SyncEngine(pocket: pocket, backend: mock, config: config);
      await engineB.start();

      // Backoff is persisted: the new engine must not retry before the deadline.
      clock += 500;
      await engineB.syncNow();
      expect(mock.createCalls, 1,
          reason: 'persisted backoff respected after restart');
      row = await sr(pocket, id);
      expect(row!.attemptCount, 1);

      clock += 1000;
      await engineB.syncNow();
      expect(mock.createCalls, 2, reason: 'resumed after the deadline');
      expect((await sr(pocket, id))!.syncState, SyncState.clean);
    });
  });
}
