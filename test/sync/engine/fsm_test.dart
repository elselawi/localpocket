import 'package:localpocket/localpocket.dart';
import 'package:localpocket/sync.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';
import 'engine_helpers.dart';

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
      h.engine.setConnectivity(false);
      await Future<void>.delayed(const Duration(milliseconds: 5));
      expect(h.engine.state, SyncEngineState.offline);
      h.engine.setConnectivity(true);
      await Future<void>.delayed(const Duration(milliseconds: 30));
      expect(h.engine.state, SyncEngineState.idle);

      // Pause / resume.
      h.engine.pause();
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

      h.engine.setConnectivity(false);
      await Future<void>.delayed(const Duration(milliseconds: 5));
      expect(h.engine.state, SyncEngineState.offline);

      // Writes while offline stay pending locally.
      await h.pocket.collection('widgets').put(record(name: 'off'));
      await h.engine.syncNow();
      expect(h.mock.records, isEmpty, reason: 'nothing leaves while offline');

      // Reconnect: settle timer (zero in tests) returns to idle and syncs.
      h.engine.setConnectivity(true);
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
}
