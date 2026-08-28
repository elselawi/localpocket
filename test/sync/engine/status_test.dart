import 'package:localpocket/localpocket.dart';
import 'package:sqlite3/sqlite3.dart' as sqlite;
import 'package:test/test.dart';

import '../../support/helpers.dart';
import 'engine_helpers.dart';
import 'mock_backend.dart';

/// Status stream and lifecycle-state coverage.
void main() {
  Future<SyncRowState?> sr(LocalPocket pocket, String id) =>
      pocket.outbox.readSyncRow(pocket.db, 'widgets', id);

  group('status stream and state coverage', () {
    test('a transient error parks the engine in backoff with lastError set',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = generateRecordId();
      await h.pocket.collection('widgets').put(record(id: id, name: 'x'));
      h.mock.script('createRecord', [MockThrow(TransientNetworkError('boom'))]);

      final statuses = <SyncStatus>[];
      final sub = h.engine.status.listen(statuses.add);
      await h.engine.syncNow();
      await Future<void>.delayed(Duration.zero);

      expect(h.engine.state, SyncEngineState.backoff,
          reason: 'transient failure parks the engine in backoff');
      final last = statuses.isNotEmpty ? statuses.last : null;
      expect(last, isNotNull);
      expect(last!.state, SyncEngineState.backoff);
      expect(last.lastError, isNotNull,
          reason: 'lastError surfaced on the status');
      expect(last.lastSyncAt, isNotNull,
          reason: 'lastSyncAt stamped at cycle completion');
      expect(last.pending, greaterThanOrEqualTo(1));

      // A healthy cycle returns to idle and clears the error.
      statuses.clear();
      h.mock.script('createRecord', const []);
      await h.engine.syncNow();
      await Future<void>.delayed(Duration.zero);
      expect(h.engine.state, SyncEngineState.idle);
      expect(statuses.last.lastError, isNull,
          reason: 'lastError cleared after an error-free cycle');
      await sub.cancel();
    });

    test('status counts reflect pending and lastSyncAt advances', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);

      // Two pending local creates.
      final a = generateRecordId();
      final b = generateRecordId();
      await h.pocket.collection('widgets').put(record(id: a, name: 'a'));
      await h.pocket.collection('widgets').put(record(id: b, name: 'b'));

      final statuses = <SyncStatus>[];
      final sub = h.engine.status.listen(statuses.add);
      await h.engine.syncNow(); // pushes both clean
      await Future<void>.delayed(Duration.zero);

      expect(statuses.last.pending, 0, reason: 'pending drained by the cycle');
      expect(statuses.last.conflicts, 0);
      expect(statuses.last.hidden, 0);
      expect(statuses.last.lastSyncAt, isNotNull);

      // A subsequent cycle with pending work reports it before draining.
      final id = generateRecordId();
      await h.pocket.collection('widgets').put(record(id: id, name: 'c'));
      statuses.clear();
      await h.engine.syncNow();
      await Future<void>.delayed(Duration.zero);
      expect(statuses.last.pending, 0);
      expect(statuses.last.lastSyncAt, isNotNull);
      expect(statuses.last.state, isNot(SyncEngineState.closed));
      await sub.cancel();
      expect((await sr(h.pocket, a))!.syncState, SyncState.clean);
    });

    test('lastSuccessfulSyncAt only advances on error-free cycles', () async {
      // A controllable clock keeps every cycle's completion instant distinct
      // (wall-clock runs can land two cycles in the same millisecond).
      var clock = 1000000;
      final h = await EngineHarness.create(now: () => clock);
      addTearDown(h.close);
      final id = generateRecordId();
      await h.pocket.collection('widgets').put(record(id: id, name: 'x'));

      final statuses = <SyncStatus>[];
      final sub = h.engine.status.listen(statuses.add);

      // Error cycle: lastSyncAt advances; lastSuccessfulSyncAt does not (it
      // either stays null or keeps the previous success time).
      clock += 1000;
      h.mock.script('createRecord', [MockThrow(TransientNetworkError('boom'))]);
      await h.engine.syncNow();
      await Future<void>.delayed(Duration.zero);
      final afterError = statuses.last;
      expect(afterError.lastSyncAt, isNotNull);
      expect(afterError.lastError, isNotNull, reason: 'the cycle had an error');
      expect(
        afterError.lastSuccessfulSyncAt,
        anyOf(isNull, isNot(equals(afterError.lastSyncAt))),
        reason: 'an error cycle never advances lastSuccessfulSyncAt to the '
            'attempt time',
      );

      // Healthy cycle: both timestamps are stamped at the same completion
      // instant.
      clock += 1000;
      h.mock.script('createRecord', const []);
      await h.engine.syncNow();
      await Future<void>.delayed(Duration.zero);
      final afterHealthy = statuses.last;
      expect(afterHealthy.lastSuccessfulSyncAt, isNotNull,
          reason: 'an error-free cycle stamps lastSuccessfulSyncAt');
      expect(afterHealthy.lastSuccessfulSyncAt, afterHealthy.lastSyncAt,
          reason: 'success and attempt share the same completion instant');
      await sub.cancel();
    });

    test('lastSuccessfulSyncAt holds the last success across error cycles',
        () async {
      // A controllable clock keeps every cycle's completion instant distinct
      // (wall-clock runs can land two cycles in the same millisecond).
      var clock = 1000000;
      final h = await EngineHarness.create(now: () => clock);
      addTearDown(h.close);
      final id = generateRecordId();
      await h.pocket.collection('widgets').put(record(id: id, name: 'x'));

      final statuses = <SyncStatus>[];
      final sub = h.engine.status.listen(statuses.add);

      // Healthy cycle -> a success timestamp is stamped.
      clock += 1000;
      await h.engine.syncNow();
      await Future<void>.delayed(Duration.zero);
      final success = statuses.last.lastSuccessfulSyncAt;
      expect(success, isNotNull);

      // Add fresh pending work, then make the next cycle fail on push.
      clock += 1000;
      final id2 = generateRecordId();
      await h.pocket.collection('widgets').put(record(id: id2, name: 'y'));
      h.mock.script('createRecord', [MockThrow(TransientNetworkError('boom'))]);
      await h.engine.syncNow();
      await Future<void>.delayed(Duration.zero);

      final afterError = statuses.last;
      expect(afterError.lastError, isNotNull,
          reason: 'the error cycle surfaced an error');
      expect(afterError.lastSyncAt!.isAfter(success!), isTrue,
          reason: 'the attempt advances past the last success');
      expect(afterError.lastSuccessfulSyncAt, success,
          reason: 'the success timestamp does not move on an error cycle');
      await sub.cancel();
    });

    test('stop emits a final closed state on the stream', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);

      final states = <SyncEngineState>[];
      final sub = h.engine.stateChanges.listen(states.add);
      await h.engine.stop();
      await Future<void>.delayed(Duration.zero);
      expect(states.last, SyncEngineState.closed,
          reason: 'terminal closed transition is observable');
      expect(h.engine.state, SyncEngineState.closed);
      await sub.cancel();
    });

    test('closed state is never re-emitted after stop', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      await h.engine.stop();
      // The stream is closed; no further events are delivered.
      var events = 0;
      await expectLater(
          h.engine.stateChanges.drain<void>().then((_) => events = 1),
          completes);
      expect(events, 1);
    });

    test('status chain stays healthy across consecutive transitions', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);

      final statuses = <SyncStatus>[];
      final sub = h.engine.status.listen(statuses.add);
      // A burst of rapid transitions must each be delivered (the status tail
      // serializes them without dropping or poisoning).
      await Future.wait([
        h.engine.pause(),
        h.engine.resume(),
        h.engine.syncNow(),
      ]);
      await Future<void>.delayed(Duration.zero);
      expect(statuses, isNotEmpty);
      expect(statuses.last.state, isNot(SyncEngineState.closed));
      expect(statuses.every((s) => s.pending >= 0), isTrue);
      await sub.cancel();
    });

    test('backoff clears and fullResync/pause states are reachable', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);

      final id = generateRecordId();
      await h.pocket.collection('widgets').put(record(id: id, name: 'x'));
      h.mock.script('createRecord', [MockThrow(TransientNetworkError())]);
      await h.engine.syncNow();
      expect(h.engine.state, SyncEngineState.backoff);

      // Pause overrides backoff (parked states win).
      await h.engine.pause();
      expect(h.engine.state, SyncEngineState.paused);

      // Resume returns to idle (no pending error).
      await h.engine.resume();
      expect(h.engine.state, SyncEngineState.idle);

      // fullResync is observable on the stream.
      final states = <SyncEngineState>[];
      final sub = h.engine.stateChanges.listen(states.add);
      await h.engine.fullResync();
      expect(states, contains(SyncEngineState.fullResync));
      expect(h.engine.state, SyncEngineState.idle);
      await sub.cancel();
    });

    test('a failing status count query still emits status with zero counts',
        () async {
      // Inject a database whose aggregate status query throws. Every other
      // statement (migration, pull, push) still works.
      final db = DirectSqliteDatabase(sqlite.sqlite3.openInMemory());
      var failedQueries = 0;
      db.onQuery = (sql, _) {
        if (sql.contains('SUM(CASE WHEN')) {
          failedQueries++;
          throw StateError('count query down');
        }
      };
      final pocket = await openPocket(database: db);
      final mock = MockSyncBackend();
      final engine = SyncEngine(
        pocket: pocket,
        backend: mock,
        config: testConfig(),
      );
      addTearDown(() async {
        await engine.stop();
        await pocket.close();
      });

      // A pending local op: a healthy count query would report it as
      // `pending` at the transitions fired during the cycle.
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'x'));
      // Keep it pending so the real count would be non-zero at emit time.
      mock.script('createRecord', [MockThrow(TransientNetworkError('down'))]);

      final statuses = <SyncStatus>[];
      final sub = engine.status.listen(statuses.add);
      await engine.start();
      await Future<void>.delayed(const Duration(milliseconds: 10));

      expect(failedQueries, greaterThan(0),
          reason: 'the injected count-query failure was actually exercised');
      expect(statuses, isNotEmpty,
          reason: 'status must still emit when the count query fails');
      for (final s in statuses) {
        expect(s.pending, 0,
            reason: 'a failed count query falls back to zeros, not the real '
                'pending count');
        expect(s.conflicts, 0);
        expect(s.hidden, 0);
        expect(s.blocked, 0);
      }
      expect(engine.state, isNot(SyncEngineState.closed),
          reason: 'the failed count query must not poison the engine');

      // The engine stays usable once the count query recovers.
      mock.script('createRecord', const []);
      await engine.syncNow();
      expect(engine.state, isNot(SyncEngineState.closed));
      await sub.cancel();
    });
  });
}
