import 'dart:math';

import 'package:localpocket/src/internal/raw_surface.dart';
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

    test('429 on one op throttles it but sibling ops flow in the same lane',
        () async {
      var clock = 1000000;
      final h = await EngineHarness.create(
          config: testConfig(
              backoffBase: const Duration(seconds: 1), now: () => clock));
      addTearDown(h.close);

      final throttled = generateRecordId();
      await h.pocket
          .collection('widgets')
          .put(record(id: throttled, name: 'busy'));
      await h.pocket.collection('widgets').put(record(name: 'a'));
      await h.pocket.collection('widgets').put(record(name: 'b'));

      // Only the first create (earliest created_at) is throttled.
      h.mock.script('createRecord', [MockThrow(ServerBusyError('9'))]);
      await h.engine.syncNow();

      // The throttled op recorded its deadline; the siblings were delivered.
      expect((await sr(h.pocket, throttled))!.nextRetryAt, clock + 9000);
      expect(h.mock.records.length, 2, reason: 'siblings pushed same cycle');
      expect(h.mock.createCalls, 3,
          reason: 'all three ops got one attempt in the first cycle');

      // Before the deadline the throttled op stays deferred.
      clock += 4000;
      await h.engine.syncNow();
      expect((await sr(h.pocket, throttled))!.attemptCount, 1,
          reason: 'no retry inside the window');
      expect(h.mock.createCalls, 3,
          reason: 'throttled op not re-attempted before its deadline');

      // Past the deadline it drains.
      clock += 6000;
      await h.engine.syncNow();
      expect((await sr(h.pocket, throttled))!.syncState, SyncState.clean);
      expect(h.mock.records.length, 3);
    });

    test('429 storm on the whole lane defers every op until the deadline',
        () async {
      var clock = 1000000;
      final h = await EngineHarness.create(
          config: testConfig(
              backoffBase: const Duration(seconds: 2), now: () => clock));
      addTearDown(h.close);

      final ids = <String>[];
      for (var i = 0; i < 3; i++) {
        final id = generateRecordId();
        ids.add(id);
        await h.pocket.collection('widgets').put(record(id: id, name: 'n$i'));
      }
      // Every create answers 429.
      h.mock.script('createRecord', [
        MockThrow(ServerBusyError()),
        MockThrow(ServerBusyError()),
        MockThrow(ServerBusyError()),
      ]);
      await h.engine.syncNow();

      for (final id in ids) {
        final row = await sr(h.pocket, id);
        expect(row!.attemptCount, 1, reason: '$id recorded a retry');
        expect(row.nextRetryAt, greaterThan(clock));
      }

      // The whole lane is deferred: no later op bypasses the earlier deadline.
      clock += 500;
      await h.engine.syncNow();
      expect(h.mock.createCalls, 3, reason: 'no retry inside the window');
      for (final id in ids) {
        expect((await sr(h.pocket, id))!.attemptCount, 1,
            reason: 'later op did not bypass the lane deadline');
      }

      // Past the shared deadline every op drains.
      clock += 3000;
      await h.engine.syncNow();
      expect(h.mock.createCalls, 6);
      for (final id in ids) {
        expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
      }
      expect(await h.engine.syncStore.countPending(), 0);
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
      final payload = (entry['payload_json']! as String);
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

  group('config validation and backoff boundaries', () {
    test('construction is permissive (const contract), delayFor clamps', () {
      // The constructor never throws: invalid values are clamped at use.
      const cfg = SyncConfig(
        maxPage: 0,
        maxBatch: -5,
        sweepBucketCount: 0,
        bucketsPerSweep: -1,
        maxAttempts: -3,
        backoffBase: Duration(seconds: 1),
        backoffCap: Duration(minutes: 5),
        jitter: _one,
      );
      expect(cfg.maxPage, 0);
      expect(cfg.delayFor(1), const Duration(seconds: 1));
    });

    test('attempts below 1 are treated as attempt 1', () {
      final cfg = SyncConfig(
          backoffBase: const Duration(seconds: 1), jitter: (_) => 1.0);
      expect(cfg.delayFor(0), const Duration(seconds: 1));
      expect(cfg.delayFor(-1), const Duration(seconds: 1));
      expect(cfg.delayFor(-100), const Duration(seconds: 1));
      expect(cfg.delayFor(0), cfg.delayFor(1));
    });

    test('zero and negative base/cap behave as zero', () {
      final zeroBase = SyncConfig(
          backoffBase: Duration.zero,
          backoffCap: const Duration(minutes: 5),
          jitter: (_) => 1.0);
      expect(zeroBase.delayFor(1), Duration.zero);
      expect(zeroBase.delayFor(50), Duration.zero);

      final negBase = SyncConfig(
          backoffBase: const Duration(seconds: -3),
          backoffCap: const Duration(minutes: 5),
          jitter: (_) => 1.0);
      expect(negBase.delayFor(1), Duration.zero, reason: 'negative base -> 0');

      final negCap = SyncConfig(
          backoffBase: const Duration(seconds: 1),
          backoffCap: const Duration(seconds: -2),
          jitter: (_) => 1.0);
      expect(negCap.delayFor(1), Duration.zero, reason: 'negative cap -> 0');
      expect(negCap.delayFor(10), Duration.zero);

      final zeroCap = SyncConfig(
          backoffBase: const Duration(seconds: 1),
          backoffCap: Duration.zero,
          jitter: (_) => 1.0);
      expect(zeroCap.delayFor(1), Duration.zero);
    });

    test('base above cap is capped immediately', () {
      final cfg = SyncConfig(
          backoffBase: const Duration(minutes: 10),
          backoffCap: const Duration(seconds: 5),
          jitter: (_) => 1.0);
      expect(cfg.delayFor(1), const Duration(seconds: 5),
          reason: 'attempt 1 already above cap');
      expect(cfg.delayFor(7), const Duration(seconds: 5));
    });

    test('huge attempts never overflow and stay capped', () {
      final cfg = SyncConfig(
          backoffBase: const Duration(seconds: 1),
          backoffCap: const Duration(seconds: 30),
          jitter: (_) => 1.0);
      expect(cfg.delayFor(100), const Duration(seconds: 30));
      expect(cfg.delayFor(1000000), const Duration(seconds: 30));
      expect(cfg.delayFor(1 << 62), const Duration(seconds: 30));

      // Huge base with a cap: integer doubling stays safe.
      final huge = SyncConfig(
          backoffBase: const Duration(days: 10000),
          backoffCap: const Duration(days: 20000),
          jitter: (_) => 1.0);
      expect(huge.delayFor(200), const Duration(days: 20000));
      expect(huge.delayFor(1 << 40), const Duration(days: 20000));
    });

    test('jitter outside the documented range is clamped to 0.5..1.5', () {
      final cfg = SyncConfig(
          backoffBase: const Duration(seconds: 1),
          backoffCap: const Duration(minutes: 5),
          jitter: (_) => 0.0);
      expect(cfg.delayFor(1), const Duration(milliseconds: 500),
          reason: 'jitter 0 clamps to 0.5');

      final high = SyncConfig(
          backoffBase: const Duration(seconds: 1),
          backoffCap: const Duration(minutes: 5),
          jitter: (_) => 100.0);
      expect(high.delayFor(1), const Duration(milliseconds: 1500),
          reason: 'jitter 100 clamps to 1.5');

      final neg = SyncConfig(
          backoffBase: const Duration(seconds: 1),
          backoffCap: const Duration(minutes: 5),
          jitter: (_) => -5.0);
      expect(neg.delayFor(1), const Duration(milliseconds: 500));

      // Documented formula: min(base*2^(n-1), cap) * jitter. The cap bounds
      // the raw exponential; jitter (clamped to 1.5) multiplies on top.
      final capped = SyncConfig(
          backoffBase: const Duration(seconds: 1),
          backoffCap: const Duration(seconds: 3),
          jitter: (_) => 100.0);
      expect(capped.delayFor(3), const Duration(milliseconds: 4500),
          reason: '3s raw * 1.5 jitter');
    });

    test('cap boundary is exactly cap on the raw exponential', () {
      // delayFor = min(base*2^(n-1), cap) * jitter, so the capped raw value
      // (with jitter 1.0) is exactly the cap from attempt 3 onward.
      final cfg = SyncConfig(
          backoffBase: const Duration(seconds: 1),
          backoffCap: const Duration(seconds: 7),
          jitter: (_) => 1.0);
      expect(cfg.delayFor(1), const Duration(seconds: 1));
      expect(cfg.delayFor(2), const Duration(seconds: 2));
      expect(cfg.delayFor(3), const Duration(seconds: 4));
      expect(cfg.delayFor(4), const Duration(seconds: 7));
      expect(cfg.delayFor(5), const Duration(seconds: 7));
      expect(cfg.delayFor(12), const Duration(seconds: 7));

      // With max jitter the final delay is cap * 1.5, never above.
      final jit = SyncConfig(
          backoffBase: const Duration(seconds: 1),
          backoffCap: const Duration(seconds: 7),
          jitter: (_) => 1.5);
      for (var attempt = 1; attempt <= 12; attempt++) {
        expect(jit.delayFor(attempt),
            lessThanOrEqualTo(const Duration(milliseconds: 10500)),
            reason: 'attempt $attempt');
      }
    });
  });

  group('retry-after parsing', () {
    test('integer, signed, zero, and whitespace forms', () {
      final cfg =
          SyncConfig(backoffBase: const Duration(days: 1), jitter: (_) => 1.0);
      expect(cfg.delayFor(1, retryAfter: '7'), const Duration(seconds: 7));
      expect(cfg.delayFor(1, retryAfter: '+7'), const Duration(seconds: 7));
      expect(cfg.delayFor(1, retryAfter: ' 7 '), const Duration(seconds: 7),
          reason: 'surrounding whitespace trimmed');
      expect(cfg.delayFor(1, retryAfter: '0'), Duration.zero);
      expect(cfg.delayFor(1, retryAfter: '0007'), const Duration(seconds: 7));
    });

    test('negative, decimal, and malformed fall back safely', () {
      final cfg =
          SyncConfig(backoffBase: const Duration(days: 1), jitter: (_) => 1.0);
      expect(cfg.delayFor(1, retryAfter: '-5'), Duration.zero,
          reason: 'negative seconds clamp to zero');
      expect(cfg.delayFor(1, retryAfter: '7.5'), const Duration(seconds: 1),
          reason: 'decimal -> 1s fallback');
      expect(cfg.delayFor(1, retryAfter: 'abc'), const Duration(seconds: 1),
          reason: 'garbage -> 1s fallback');
      expect(cfg.delayFor(1, retryAfter: ''), const Duration(seconds: 1),
          reason: 'empty -> 1s fallback');
      expect(cfg.delayFor(1, retryAfter: '1.2.3'), const Duration(seconds: 1));
    });

    test('rfc1123 http-date resolves to an absolute delay', () {
      final target = DateTime.utc(2015, 10, 21, 7, 28).millisecondsSinceEpoch;
      var clock = target - 60000;
      final cfg = SyncConfig(
          backoffBase: const Duration(days: 1),
          jitter: (_) => 1.0,
          now: () => clock);

      final d = cfg.delayFor(1, retryAfter: 'Wed, 21 Oct 2015 07:28:00 GMT');
      expect(d, const Duration(minutes: 1));

      // Case-insensitive day/month names.
      final d2 = cfg.delayFor(1, retryAfter: 'wed, 21 OCT 2015 07:28:00 GMT');
      expect(d2, const Duration(minutes: 1));

      // A date in the past clamps to zero.
      clock = target + 5000;
      expect(cfg.delayFor(1, retryAfter: 'Wed, 21 Oct 2015 07:28:00 GMT'),
          Duration.zero);
    });

    test('rfc850 and asctime http-dates resolve', () {
      final rfc850 =
          DateTime.utc(1994, 11, 6, 8, 49, 37).millisecondsSinceEpoch;
      final asctime =
          DateTime.utc(1994, 11, 6, 8, 49, 37).millisecondsSinceEpoch;
      final cfg = SyncConfig(
          backoffBase: const Duration(days: 1),
          jitter: (_) => 1.0,
          now: () => rfc850 - 37000);

      final d = cfg.delayFor(1, retryAfter: 'Sunday, 06-Nov-94 08:49:37 GMT');
      expect(d, const Duration(seconds: 37));

      final cfg2 = SyncConfig(
          backoffBase: const Duration(days: 1),
          jitter: (_) => 1.0,
          now: () => asctime - 37000);
      final d2 = cfg2.delayFor(1, retryAfter: 'Sun Nov  6 08:49:37 1994');
      expect(d2, const Duration(seconds: 37));
    });

    test('malformed http-dates fall back to 1 second', () {
      final cfg = SyncConfig(
          backoffBase: const Duration(days: 1),
          jitter: (_) => 1.0,
          now: () => DateTime.utc(2026, 1, 1).millisecondsSinceEpoch);
      for (final bad in [
        'Wed, 21 Oct 2015 07:28:00', // missing GMT
        'Wed 21 Oct 2015 07:28:00 GMT', // missing comma
        'Funday, 21 Oct 2015 07:28:00 GMT', // bad day name
        'Wed, 21 Foo 2015 07:28:00 GMT', // bad month
        'Wed, 32 Oct 2015 07:28:00 GMT', // day out of range
        'Wed, 21 Oct 2015 25:28:00 GMT', // hour out of range
        'Wed, 21 Oct 2015 07:28:00 GMT extra', // trailing text
        '21 Oct 2015 07:28:00 GMT', // no weekday
        '99999999999999999999999', // overflows int.tryParse
      ]) {
        expect(cfg.delayFor(1, retryAfter: bad), const Duration(seconds: 1),
            reason: '"$bad" -> 1s fallback');
      }
    });
  });

  group('pb timestamp parse and format', () {
    test('formatPbTimestamp formats UTC and converts non-UTC to UTC', () {
      expect(formatPbTimestamp(DateTime.utc(2026, 1, 2, 3, 4, 5, 6)),
          '2026-01-02 03:04:05.006Z');

      // Non-UTC DateTime: local fields must NOT leak into the Z-timestamp.
      final local = DateTime(2026, 1, 2, 3, 4, 5, 6); // local wall time
      final expected = formatPbTimestamp(local.toUtc());
      final got = formatPbTimestamp(local);
      expect(got, expected, reason: 'non-UTC converted to the UTC instant');
      expect(got.endsWith('Z'), isTrue);
    });

    test('formatPbTimestamp pads to fixed width', () {
      expect(formatPbTimestamp(DateTime.utc(2026, 1, 1)),
          '2026-01-01 00:00:00.000Z');
      expect(formatPbTimestamp(DateTime.utc(999, 1, 1)),
          '0999-01-01 00:00:00.000Z');
      expect(formatPbTimestamp(DateTime.utc(2026, 12, 31, 23, 59, 59, 999)),
          '2026-12-31 23:59:59.999Z');
    });

    test('pbTimestampToDateTime parses valid input', () {
      final dt = pbTimestampToDateTime('2026-01-02 03:04:05.006Z');
      expect(dt, DateTime.utc(2026, 1, 2, 3, 4, 5, 6));
      expect(dt.isUtc, isTrue);
    });

    test('pbTimestampToDateTime rejects invalid calendars and times', () {
      for (final bad in [
        '2026-13-01 00:00:00.000Z', // month 13
        '2026-00-01 00:00:00.000Z', // month 0
        '2026-01-32 00:00:00.000Z', // day 32
        '2026-02-30 00:00:00.000Z', // Feb 30
        '2026-04-31 00:00:00.000Z', // Apr 31
        '2026-01-00 00:00:00.000Z', // day 0
        '2026-01-01 24:00:00.000Z', // hour 24
        '2026-01-01 23:60:00.000Z', // minute 60
        '2026-01-01 23:59:60.000Z', // second 60
      ]) {
        expect(
          () => pbTimestampToDateTime(bad),
          throwsA(isA<ProtocolError>()),
          reason: bad,
        );
      }
    });

    test('pbTimestampToDateTime rejects format violations', () {
      for (final bad in [
        '', // empty
        '2026-1-01 00:00:00.000Z', // missing zero padding (month)
        '2026-01-1 00:00:00.000Z', // missing zero padding (day)
        '2026-01-01 0:00:00.000Z', // missing zero padding (hour)
        '2026-01-01 00:00:00.00Z', // two-digit millis
        '2026-01-01 00:00:00.000Z+05:00', // timezone suffix
        '2026-01-01 00:00:00.000Z extra', // trailing garbage
        'x2026-01-01 00:00:00.000Z', // leading text
        '2026-01-01 00:00:00Z', // missing .mmm
        '2026-01-01 00:00:00.000', // missing Z
        '2026-01-01 00:00:00.000z', // lowercase z
      ]) {
        expect(
          () => pbTimestampToDateTime(bad),
          throwsA(isA<ProtocolError>()),
          reason: '"$bad"',
        );
      }
    });

    test('rewindUpdated subtracts the rewind window from a cursor', () {
      expect(
          rewindUpdated('2026-03-01 12:00:00.000Z', const Duration(seconds: 5)),
          '2026-03-01 11:59:55.000Z');
      expect(
          rewindUpdated(
              '2026-03-01 12:00:00.000Z', const Duration(milliseconds: 250)),
          '2026-03-01 11:59:59.750Z');
    });

    test('rewindUpdated stays fixed-width across date boundaries', () {
      // Sub-second / hour / day / month / year rollovers must all stay in the
      // fixed-width format so lexicographic ordering still equals time order.
      expect(
          rewindUpdated(
              '2026-03-01 00:00:00.000Z', const Duration(milliseconds: 1)),
          '2026-02-28 23:59:59.999Z');
      expect(
          rewindUpdated('2026-01-01 00:00:00.000Z', const Duration(seconds: 1)),
          '2025-12-31 23:59:59.000Z');
      expect(
          rewindUpdated('2026-03-01 12:00:00.000Z', const Duration(hours: 12)),
          '2026-03-01 00:00:00.000Z');
    });

    test('the rewind start always sorts at or before the cursor', () {
      const t = '2026-08-15 10:00:00.000Z';
      for (final delta in [
        const Duration(milliseconds: 1),
        const Duration(seconds: 5),
        const Duration(minutes: 90),
        const Duration(days: 400),
      ]) {
        final rewound = rewindUpdated(t, delta);
        expect(rewound.compareTo(t), lessThanOrEqualTo(0),
            reason: '$delta keeps the window start <= cursor');
      }
    });

    test('rewindUpdated round-trips through pbTimestampToDateTime', () {
      const t = '2026-08-15 10:30:45.123Z';
      final base = pbTimestampToDateTime(t);
      final rewound =
          pbTimestampToDateTime(rewindUpdated(t, const Duration(minutes: 90)));
      expect(rewound, base.subtract(const Duration(minutes: 90)));
    });

    test('rewindUpdated rejects a malformed cursor', () {
      expect(
        () => rewindUpdated('not-a-timestamp', const Duration(seconds: 1)),
        throwsA(isA<ProtocolError>()),
      );
    });
  });
}

double _one(int attempt) => 1.0;
