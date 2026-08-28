import 'dart:async';

import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';
import 'engine_helpers.dart';
import 'mock_backend.dart';

/// A backend whose `prepare` explodes (adapter warm-up failure).
class _ThrowingPrepareBackend extends MockSyncBackend {
  @override
  Future<void> prepare() async => throw StateError('prepare boom');
}

/// A backend whose `hints()` throws synchronously (subscription failure).
class _ThrowingHintsBackend extends MockSyncBackend {
  bool hintsThrows = true;
  @override
  Stream<BackendHint> hints() {
    if (hintsThrows) throw StateError('hints boom');
    return super.hints();
  }
}

/// A backend whose `prepare` blocks until [gate] completes.
class _GatedPrepareBackend extends MockSyncBackend {
  Completer<void>? gate;
  @override
  Future<void> prepare() async {
    await gate?.future;
  }
}

/// A backend whose `listChanges` blocks until [gate] completes.
class _GatedListBackend extends MockSyncBackend {
  Completer<void>? gate;
  @override
  Future<List<RemoteRecord>> listChanges(
    String store, {
    String? fromUpdated,
    String? fromId,
    String? idPrefix,
    int perPage = 200,
  }) async {
    await gate?.future;
    return super.listChanges(store,
        fromUpdated: fromUpdated,
        fromId: fromId,
        idPrefix: idPrefix,
        perPage: perPage);
  }
}

/// Engine state machine tests.
void main() {
  Future<List<SyncEngineState>> collectStates(
      SyncEngine engine, Future<void> Function() act) async {
    final seen = <SyncEngineState>[];
    final sub = engine.stateChanges.listen(seen.add);
    await act();
    // Let any timer-scheduled transitions (settle, debounce) land.
    await Future<void>.delayed(const Duration(milliseconds: 30));
    await sub.cancel();
    return seen;
  }

  group('engine state machine', () {
    test('full state graph walked', () async {
      final h = await EngineHarness.create(start: false);
      addTearDown(h.close);

      expect(h.engine.state, SyncEngineState.closed);
      final states = <SyncEngineState>[];
      final sub = h.engine.stateChanges.listen(states.add);

      await h.engine.start();
      // Broadcast stream events land one microtask later.
      await Future<void>.delayed(Duration.zero);
      expect(h.engine.state, SyncEngineState.idle);

      // Start-up: opening -> idle -> pulling -> pushing -> idle.
      expect(
          states,
          containsAllInOrder([
            SyncEngineState.opening,
            SyncEngineState.idle,
            SyncEngineState.pulling,
            SyncEngineState.pushing,
            SyncEngineState.idle,
          ]));

      // Offline park, then reconnect back to idle.
      states.clear();
      await h.engine.setConnectivity(false);
      await Future<void>.delayed(const Duration(milliseconds: 5));
      expect(h.engine.state, SyncEngineState.offline);
      await h.engine.setConnectivity(true);
      await Future<void>.delayed(const Duration(milliseconds: 30));
      expect(h.engine.state, SyncEngineState.idle);

      // Pause / resume.
      await h.engine.pause();
      await Future<void>.delayed(const Duration(milliseconds: 5));
      expect(h.engine.state, SyncEngineState.paused);
      await h.engine.resume();
      expect(h.engine.state, SyncEngineState.idle);

      // Auth loss.
      h.mock.authValid = false;
      await h.engine.syncNow();
      expect(h.engine.state, SyncEngineState.authRequired);

      // Full resync.
      h.mock.authValid = true;
      await h.engine.markAuthValid();
      final seen = states..clear();
      final sub2 = h.engine.stateChanges.listen(seen.add);
      await h.engine.fullResync();
      expect(seen, contains(SyncEngineState.fullResync));
      await sub2.cancel();
      await sub.cancel();
    });

    test('auth pause resume', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);

      await h.pocket.collection('widgets').put(record(name: 'x'));
      h.mock.authValid = false;
      final states = await collectStates(h.engine, () => h.engine.syncNow());
      expect(states.last, SyncEngineState.authRequired);
      expect(h.engine.state, SyncEngineState.authRequired);

      // Edits are still local-first while auth is broken.
      await h.pocket.collection('widgets').put(record(name: 'y'));
      expect(await h.pocket.collection('widgets').query().all().count(), 2);

      // Resume: markAuthValid runs a forced sweep + cycle back to idle.
      h.mock.authValid = true;
      final resumed =
          await collectStates(h.engine, () => h.engine.markAuthValid());
      expect(resumed, contains(SyncEngineState.idle));
      expect(h.engine.state, SyncEngineState.idle);

      // Pause blocks cycles; resume restarts them.
      await h.engine.pause();
      expect(h.engine.state, SyncEngineState.paused);
      await h.engine.syncNow();
      expect(h.engine.state, SyncEngineState.paused,
          reason: 'no cycle while paused');
      await h.engine.resume();
      expect(h.engine.state, SyncEngineState.idle);
    });

    test('offline idle transitions', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);

      await h.engine.setConnectivity(false);
      await Future<void>.delayed(const Duration(milliseconds: 5));
      expect(h.engine.state, SyncEngineState.offline);

      // Writes while offline stay pending locally.
      await h.pocket.collection('widgets').put(record(name: 'off'));
      await h.engine.syncNow();
      expect(h.mock.records, isEmpty, reason: 'nothing leaves while offline');

      // Reconnect: settle timer (zero in tests) returns to idle and syncs.
      await h.engine.setConnectivity(true);
      await Future<void>.delayed(const Duration(milliseconds: 30));
      expect(h.engine.state, SyncEngineState.idle);
      expect(h.mock.records.length, 1,
          reason: 'pending push flushed after reconnect');
    });

    test('single coordinator no overlapping pulls', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);

      for (var i = 0; i < 10; i++) {
        h.mock.seed(store: 'widgets', data: {'name': 'r$i'});
      }
      // Fire many cycles without awaiting: the coordinator serializes them.
      final futures = <Future<SyncReport>>[
        for (var i = 0; i < 6; i++) h.engine.syncNow(),
      ];
      await Future.wait(futures);
      expect(h.mock.maxConcurrentListChanges, 1,
          reason: 'cycles are chained, never overlapping');
      expect(await h.pocket.collection('widgets').query().all().count(), 10);
    });

    test('trigger policy matrix', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      h.engine.debugActions.clear();

      h.engine.handleLocalWrite(const ChangeSet('widgets', {'r1'}));
      h.engine.handleHint(const BackendHint('widgets'));
      h.engine.handleTimer();
      await h.engine.syncNow();

      expect(
          h.engine.debugActions,
          containsAllInOrder([
            'push', // local write -> debounced push
            'pull:widgets', // hint -> debounced pull of that store
            'cycle', // timer -> full cycle
            'cycle', // syncNow -> full cycle
          ]));
    });
  });

  group('engine start/stop/restart failures', () {
    test('double start and double stop are idempotent no-ops', () async {
      final h = await EngineHarness.create(start: false);
      addTearDown(h.close);
      await h.engine.start();
      final afterFirst = h.engine.state;
      // A second start must not restart or throw.
      await h.engine.start();
      expect(h.engine.state, afterFirst);
      await h.engine.stop();
      expect(h.engine.state, SyncEngineState.closed);
      expect(h.engine.isRunning, isFalse);
      // A second stop is a no-op, not an error.
      await h.engine.stop();
      expect(h.engine.state, SyncEngineState.closed);
    });

    test('prepare failure is tolerated; the engine still runs a cycle',
        () async {
      final mock = _ThrowingPrepareBackend();
      final h = await EngineHarness.create(mock: mock);
      addTearDown(h.close);
      // prepare() threw, but start() swallowed it and the engine is running.
      expect(h.engine.isRunning, isTrue);
      expect(h.engine.state, SyncEngineState.idle);

      await h.pocket.collection('widgets').put(record(name: 'x'));
      final report = await h.engine.syncNow();
      expect(report.pushed, 1, reason: 'push works despite the failed probe');
    });

    test('hints subscription failure rolls back to closed and can retry',
        () async {
      final mock = _ThrowingHintsBackend();
      final pocket = await openPocket(stores: [widgetsSchema()]);
      final engine = SyncEngine(pocket: pocket, backend: mock);
      addTearDown(() async {
        await engine.stop();
        await pocket.close();
      });

      await expectLater(engine.start(), throwsA(isA<StateError>()));
      expect(engine.isRunning, isFalse,
          reason: 'a half-started engine is rolled back to closed');
      expect(engine.state, SyncEngineState.closed);

      // A well-behaved backend on the same engine recovers.
      mock.hintsThrows = false;
      await engine.start();
      expect(engine.isRunning, isTrue);
      expect(engine.state, SyncEngineState.idle);
    });

    test('same engine can restart after stop with fresh streams', () async {
      final h = await EngineHarness.create(start: false);
      addTearDown(h.close);

      await h.engine.start();
      expect(h.engine.isRunning, isTrue);
      await h.engine.stop();
      expect(h.engine.state, SyncEngineState.closed);

      // Restart the SAME instance.
      await h.engine.start();
      expect(h.engine.isRunning, isTrue);
      expect(h.engine.state, SyncEngineState.idle);

      // The restarted engine delivers events on a FRESH stream.
      final states = <SyncEngineState>[];
      final sub = h.engine.stateChanges.listen(states.add);
      await h.engine.pause();
      await Future<void>.delayed(Duration.zero);
      expect(states, contains(SyncEngineState.paused),
          reason: 'restarted engine emits state on a fresh stream');
      await h.engine.resume();
      await sub.cancel();
    });

    test('stop drains an in-flight push cycle before completing', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);

      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'edited'});
      h.mock.mutate(id, {'id': id, 'name': 'v1', 'qty': 99});

      // Block the merge PATCH; the cycle hangs in flight.
      final entered = Completer<void>();
      final release = Completer<void>();
      h.mock.updateRecordEntered = entered;
      h.mock.updateRecordBarrier = release;
      final cycle = h.engine.syncNow();
      await entered.future;

      // stop() must wait for the in-flight cycle, then complete cleanly.
      var stoppedDone = false;
      final stopped = h.engine.stop().then((_) => stoppedDone = true);
      await Future<void>.delayed(const Duration(milliseconds: 10));
      expect(stoppedDone, isFalse,
          reason: 'stop waits for the in-flight cycle');
      release.complete();
      await stopped;
      await cycle;
      h.mock.updateRecordBarrier = null;
      h.mock.updateRecordEntered = null;
      expect(h.engine.state, SyncEngineState.closed);
      // The pocket is still usable after the drained stop.
      await h.pocket.collection('widgets').put(record(name: 'after-stop'));
      expect(await h.pocket.collection('widgets').query().all().count(), 2);
    });

    test(
        'a push cycle held open across stop and restart pushes once and the '
        'restart pushes cleanly', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);

      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'edited'});

      // Hold the PATCH in flight; the cycle hangs across the stop.
      final entered = Completer<void>();
      final release = Completer<void>();
      h.mock.updateRecordEntered = entered;
      h.mock.updateRecordBarrier = release;
      final cycle = h.engine.syncNow();
      await entered.future;

      var stoppedDone = false;
      final stopped = h.engine.stop().then((_) => stoppedDone = true);
      await Future<void>.delayed(const Duration(milliseconds: 10));
      expect(stoppedDone, isFalse, reason: 'stop waits for the in-flight push');
      release.complete();
      await stopped;
      await cycle;
      h.mock.updateRecordBarrier = null;
      h.mock.updateRecordEntered = null;

      expect(h.engine.state, SyncEngineState.closed);
      expect(h.mock.updateCalls, 1,
          reason: 'the held cycle pushed exactly once before completing');
      expect(h.mock.records[id]!.data['name'], 'edited');

      // A fresh lifecycle pushes the next edit cleanly — the drained old
      // cycle can never run again in the new lifecycle.
      await h.pocket.collection('widgets').patch(id, {'name': 'again'});
      await h.engine.start();
      await h.engine.syncNow();
      expect(h.mock.updateCalls, 2, reason: 'exactly one more push');
      expect(h.mock.records[id]!.data['name'], 'again');
      expect(
          (await h.pocket.outbox.readSyncRow(h.pocket.db, 'widgets', id))!
              .syncState,
          SyncState.clean);
    });

    test('stop cancels a pending debounce so no cycle touches a closed pocket',
        () async {
      final h = await EngineHarness.create(
          config: testConfig(pushDebounce: const Duration(milliseconds: 10)));
      addTearDown(h.close);

      // Schedule a debounced pull, then stop before it fires.
      final callsBefore = h.mock.listChangesCalls;
      h.engine.handleHint(const BackendHint('widgets'));
      await h.engine.stop();
      expect(h.engine.state, SyncEngineState.closed);

      // No pull ran after stop (the debounce timer was cancelled).
      await Future<void>.delayed(const Duration(milliseconds: 40));
      expect(h.mock.listChangesCalls, callsBefore,
          reason: 'no cycle after stop');
    });

    test('stop during connectivity settle cancels the settle timer', () async {
      final h = await EngineHarness.create(
          config:
              testConfig(connectivitySettle: const Duration(milliseconds: 30)));
      addTearDown(h.close);

      await h.engine.setConnectivity(false);
      await Future<void>.delayed(const Duration(milliseconds: 5));
      expect(h.engine.state, SyncEngineState.offline);
      await h.engine.setConnectivity(true); // schedules the settle timer
      await h.engine.stop();

      // The settle timer was cancelled: no cycle after stop.
      final listCalls = h.mock.listChangesCalls;
      await Future<void>.delayed(const Duration(milliseconds: 60));
      expect(h.mock.listChangesCalls, listCalls,
          reason: 'no settle-triggered cycle after stop');
      expect(h.engine.state, SyncEngineState.closed);
    });

    test('stop during an active pull drains and never double-runs', () async {
      final mock = _GatedListBackend();
      final h = await EngineHarness.create(mock: mock, start: false);
      addTearDown(h.close);
      await h.engine.start(); // startup completes (gate null)
      mock.gate = Completer<void>();
      for (var i = 0; i < 5; i++) {
        h.mock.seed(store: 'widgets', data: {'name': 'r$i'});
      }

      final cycle = h.engine.syncNow(); // blocked on the gate
      await Future<void>.delayed(const Duration(milliseconds: 5));
      final stopped = h.engine.stop(); // drains the blocked cycle
      mock.gate!.complete();
      await stopped;
      await cycle;

      expect(h.engine.state, SyncEngineState.closed);
      expect(mock.maxConcurrentListChanges, 1,
          reason: 'never overlapped, even across stop');
    });

    test('a pull cycle held open across stop and restart applies exactly once',
        () async {
      final mock = _GatedListBackend();
      final h = await EngineHarness.create(mock: mock, start: false);
      addTearDown(h.close);
      await h.engine.start(); // startup completes (gate null)
      final id = mock.seed(store: 'widgets', data: {'name': 'v1'});
      mock.gate = Completer<void>();

      final cycle = h.engine.syncNow(); // blocked on the gate
      await Future<void>.delayed(const Duration(milliseconds: 5));
      var stoppedDone = false;
      final stopped = h.engine.stop().then((_) => stoppedDone = true);
      await Future<void>.delayed(const Duration(milliseconds: 5));
      expect(stoppedDone, isFalse, reason: 'stop drains the held pull');
      mock.gate!.complete();
      await stopped;
      await cycle;

      expect(h.engine.state, SyncEngineState.closed);
      expect((await h.pocket.collection('widgets').get(id))!['name'], 'v1',
          reason: 'the old cycle applied exactly once');
      expect(mock.maxConcurrentListChanges, 1,
          reason: 'never overlapped, even across stop');

      // The new lifecycle is independent: it pulls fresh work and never
      // re-runs the drained old cycle.
      final id2 = mock.seed(store: 'widgets', data: {'name': 'v2'});
      await h.engine.start(); // fresh lifecycle pulls v2
      expect(await h.pocket.collection('widgets').get(id2), isNotNull);
      expect((await h.pocket.collection('widgets').get(id))!['name'], 'v1',
          reason: 'the drained cycle never re-applied in the new lifecycle');
    });

    test('stop during start() prepare does not leave zombie timers or workers',
        () async {
      final mock = _GatedPrepareBackend();
      final gate = Completer<void>();
      mock.gate = gate;

      final h = await EngineHarness.create(
        mock: mock,
        start: false,
        config: const SyncConfig(
          syncInterval: Duration(milliseconds: 20),
          pushDebounce: Duration(milliseconds: 10),
        ),
      );
      addTearDown(h.close);

      // Start the engine - it will suspend in prepare()
      final startFuture = h.engine.start();
      expect(h.engine.state, SyncEngineState.opening);
      expect(h.engine.isRunning, isTrue);

      // Stop while start() is awaiting prepare()
      await h.engine.stop();
      expect(h.engine.state, SyncEngineState.closed);
      expect(h.engine.isRunning, isFalse);

      // Release backend.prepare()
      gate.complete();
      await startFuture;

      // Verify engine remains closed and is not running
      expect(h.engine.state, SyncEngineState.closed);
      expect(h.engine.isRunning, isFalse);

      // Add a write and wait longer than syncInterval to ensure no zombie timers or listeners fire
      final listCallsBefore = mock.listChangesCalls;
      await h.pocket.collection('widgets').put(record(name: 'test_zombie'));
      await Future<void>.delayed(const Duration(milliseconds: 60));

      expect(mock.listChangesCalls, listCallsBefore,
          reason:
              'no background timer or local write trigger should run after stop');
    });
  });

  group('engine trigger coalescing and store routing', () {
    test('two store hints in one debounce window both pull their stores',
        () async {
      final h = await EngineHarness.create(
          stores: [widgetsSchema(), widgetsSchema(name: 'gadgets')],
          config: testConfig(pushDebounce: const Duration(milliseconds: 30)));
      addTearDown(h.close);

      h.mock.seed(store: 'widgets', data: {'name': 'w1'});
      h.mock.seed(store: 'gadgets', data: {'name': 'g1'});
      h.engine.debugActions.clear();

      h.engine.handleHint(const BackendHint('widgets'));
      h.engine.handleHint(const BackendHint('gadgets'));
      await Future<void>.delayed(const Duration(milliseconds: 90));

      expect(h.engine.debugActions, contains('pull:widgets'));
      expect(h.engine.debugActions, contains('pull:gadgets'));
      expect(await h.pocket.collection('widgets').query().all().count(), 1,
          reason: 'widgets hint not lost to the gadgets hint');
      expect(await h.pocket.collection('gadgets').query().all().count(), 1,
          reason: 'gadgets hint not lost to the widgets hint');
    });

    test('local write + store hint coalesce to a full cycle (superset)',
        () async {
      final h = await EngineHarness.create(
          stores: [widgetsSchema(), widgetsSchema(name: 'gadgets')],
          config: testConfig(pushDebounce: const Duration(milliseconds: 30)));
      addTearDown(h.close);

      h.mock.seed(store: 'gadgets', data: {'name': 'g1'});
      await h.pocket.collection('widgets').put(record(name: 'local'));
      h.engine.debugActions.clear();

      // Local write (full intent) then a widgets hint (pull-only).
      h.engine.handleLocalWrite(const ChangeSet('widgets', {'r1'}));
      h.engine.handleHint(const BackendHint('widgets'));
      await Future<void>.delayed(const Duration(milliseconds: 90));

      // The full cycle won: the local write pushed AND both stores pulled
      // (gadgets proves it was a full cycle, not a widgets-only pull).
      expect(
          h.mock.records.values.any((r) => r.data['name'] == 'local'), isTrue,
          reason: 'local write pushed');
      expect(await h.pocket.collection('gadgets').query().all().count(), 1,
          reason: 'full cycle also pulled the unhinted store');
    });

    test('hints for the same store in one window coalesce to a single pull',
        () async {
      final mock = MockSyncBackend();
      final h = await EngineHarness.create(
          mock: mock,
          config: testConfig(pushDebounce: const Duration(milliseconds: 30)));
      addTearDown(h.close);

      // No remote records: pulls apply nothing, so no applied-record cycle
      // interferes with counting the debounced pull.
      final callsBefore = mock.listChangesCalls;
      h.engine.handleHint(const BackendHint('widgets'));
      h.engine.handleHint(const BackendHint('widgets'));
      h.engine.handleHint(const BackendHint('widgets'));
      await Future<void>.delayed(const Duration(milliseconds: 90));

      expect(mock.listChangesCalls, callsBefore + 1,
          reason: 'three hints coalesced into exactly one pull');
    });

    test('repeated connectivity flapping settles exactly once', () async {
      final mock = MockSyncBackend();
      final h = await EngineHarness.create(
          mock: mock,
          config:
              testConfig(connectivitySettle: const Duration(milliseconds: 40)));
      addTearDown(h.close);

      await h.pocket.collection('widgets').put(record(name: 'x'));
      await h.engine.setConnectivity(false);
      await h.engine.setConnectivity(true);
      await h.engine.setConnectivity(false);
      await h.engine.setConnectivity(true);
      await Future<void>.delayed(const Duration(milliseconds: 120));

      expect(h.engine.state, SyncEngineState.idle);
      expect(mock.records.length, 1,
          reason: 'pending push flushed exactly once after reconnect');
    });

    test('full cycle scheduled after a pull-only hint wins (no hint lost)',
        () async {
      final h = await EngineHarness.create(
          stores: [widgetsSchema(), widgetsSchema(name: 'gadgets')],
          config: testConfig(pushDebounce: const Duration(milliseconds: 30)));
      addTearDown(h.close);

      h.mock.seed(store: 'gadgets', data: {'name': 'g1'});
      // Pull-only hint first, then a full trigger (timer) in the same window.
      h.engine.handleHint(const BackendHint('gadgets'));
      h.engine.handleTimer();
      await Future<void>.delayed(const Duration(milliseconds: 90));

      expect(await h.pocket.collection('gadgets').query().all().count(), 1,
          reason: 'the pull-only hint was not dropped by the full cycle');
    });
  });

  group('engine auth/offline/pause concurrency', () {
    test('concurrent forced-sweep triggers produce one sweep, no overlap',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      for (var i = 0; i < 6; i++) {
        h.mock.seed(store: 'widgets', data: {'name': 'r$i'});
      }
      h.mock.authValid = false;
      await h.engine.syncNow();
      expect(h.engine.state, SyncEngineState.authRequired);

      h.mock.authValid = true;
      // markAuthValid + invalidateVisibility + syncNow race together.
      await Future.wait([
        h.engine.markAuthValid(),
        h.engine.invalidateVisibility(),
        h.engine.syncNow(),
      ]);
      expect(h.engine.state, SyncEngineState.idle);
      expect(h.mock.maxConcurrentListChanges, 1,
          reason: 'cycles and forced sweeps never overlap');
      expect(await h.pocket.collection('widgets').query().all().count(), 6);
    });

    test('double markAuthValid does not double-sweep', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      for (var i = 0; i < 4; i++) {
        h.mock.seed(store: 'widgets', data: {'name': 'r$i'});
      }
      h.mock.authValid = false;
      await h.engine.syncNow();
      expect(h.engine.state, SyncEngineState.authRequired);
      h.mock.authValid = true;

      // Three racing markAuthValid calls: only the first should sweep.
      final before = h.mock.sweepListChangesCalls;
      await Future.wait([
        h.engine.markAuthValid(),
        h.engine.markAuthValid(),
        h.engine.markAuthValid(),
      ]);
      final raced = h.mock.sweepListChangesCalls - before;
      expect(raced, greaterThan(0), reason: 'one forced sweep ran');
      expect(h.engine.state, SyncEngineState.idle);

      // Prove it was ONE sweep: a single markAuthValid costs the same.
      h.mock.authValid = false;
      await h.engine.syncNow();
      h.mock.authValid = true;
      final before2 = h.mock.sweepListChangesCalls;
      await h.engine.markAuthValid();
      expect(h.mock.sweepListChangesCalls - before2, raced,
          reason: 'three racing calls swept exactly once, like one call');
      expect(await h.pocket.collection('widgets').query().all().count(), 4);
    });

    test('pause/resume racing a cycle stays deterministic', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      for (var i = 0; i < 5; i++) {
        h.mock.seed(store: 'widgets', data: {'name': 'r$i'});
      }

      await Future.wait([
        h.engine.syncNow(),
        h.engine.pause(),
        h.engine.resume(),
        h.engine.syncNow(),
      ]);
      expect(h.mock.maxConcurrentListChanges, 1);
      expect(await h.pocket.collection('widgets').query().all().count(), 5,
          reason: 'records applied deterministically across the race');
    });

    test('offline flag racing a cycle parks cleanly', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      h.mock.seed(store: 'widgets', data: {'name': 'r1'});

      await Future.wait([
        h.engine.syncNow(),
        h.engine.setConnectivity(false),
        h.engine.setConnectivity(true),
      ]);
      await Future<void>.delayed(const Duration(milliseconds: 30));
      expect(h.engine.state, isIn([SyncEngineState.idle]));
      expect(h.mock.maxConcurrentListChanges, 1);
    });
  });
}
