import 'package:localpocket/src/internal/raw_surface.dart';
import 'package:test/test.dart';

import 'engine_helpers.dart';

/// "Sync lifecycle generation token".
///
/// A monotonic generation is bumped on every start/stop so stale async work
/// from a previous lifecycle (a cycle, a realtime fast-path apply, a status
/// emission) can never mutate the current lifecycle after a restart.
void main() {
  Map<String, Object?> doc(String id, String name, [int qty = 0]) => {
        if (id.isNotEmpty) 'id': id,
        'name': name,
        'qty': qty,
      };

  Future<SyncRowState?> sr(LocalPocket pocket, String id) =>
      pocket.outbox.readSyncRow(pocket.db, 'widgets', id);

  group('lifecycle generation token (#11)', () {
    test('a restarted engine runs a fresh lifecycle and works', () async {
      final h = await EngineHarness.create(start: false);
      addTearDown(h.close);

      await h.engine.start();
      expect(h.engine.isRunning, isTrue);
      await h.engine.stop();
      expect(h.engine.state, SyncEngineState.closed);

      // Seed a record while stopped: only the NEW lifecycle may pull it.
      final id = h.mock.seed(store: 'widgets', data: doc('', 'fresh'));
      await h.engine.start();
      expect(h.engine.state, SyncEngineState.idle);
      expect(await h.pocket.collection('widgets').get(id), isNotNull,
          reason: 'the restarted lifecycle pulled the new record');
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
    });

    test('cycles triggered while stopped are inert (no DB work)', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      h.mock.seed(store: 'widgets', data: doc('', 'v1'));
      await h.engine.syncNow();
      final pullsBefore = h.mock.listChangesCalls;

      await h.engine.stop();
      final stateAfterStop = h.engine.state;

      // Fire every trigger while the engine is stopped.
      h.engine.handleTimer(); // periodic -> full cycle
      await h.engine.syncNow(); // manual cycle
      expect(h.mock.listChangesCalls, pullsBefore,
          reason: 'a stale cycle after stop must not pull');
      expect(h.engine.state, stateAfterStop,
          reason: 'a stale cycle must not transition state');

      // After restart the same engine is functional again.
      await h.engine.start();
      expect(h.engine.isRunning, isTrue);
      final id2 = h.mock.seed(store: 'widgets', data: doc('', 'v2'));
      await h.engine.syncNow();
      expect(await h.pocket.collection('widgets').get(id2), isNotNull);
    });

    test('the periodic sync timer never fires after stop', () async {
      final h = await EngineHarness.create(
          config: const SyncConfig(
        syncInterval: Duration(milliseconds: 10),
        sweepInterval: Duration(days: 365),
        pushDebounce: Duration(days: 365),
      ));
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: doc('', 'v1'));
      await h.engine.syncNow();
      await h.engine.stop();

      // Seed AFTER stop: a stray periodic timer firing would pull it.
      final pullsBefore = h.mock.listChangesCalls;
      h.mock.seed(store: 'widgets', data: doc('', 'v2'));
      await Future<void>.delayed(const Duration(milliseconds: 60));

      expect(h.mock.listChangesCalls, pullsBefore,
          reason: 'the periodic timer was cancelled at stop and never fired');
      expect(await h.pocket.collection('widgets').get(id), isNotNull);
    });

    test('fast-path hint while stopped never applies or schedules work',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: doc('', 'v1'));
      await h.engine.syncNow();
      await h.engine.stop();

      // A realtime hint arriving after stop must not write the DB.
      h.engine.handleHint(BackendHint(
          'widgets',
          BackendHintKind.changed,
          RemoteRecord(
            id: id,
            store: 'widgets',
            updated: '2099-01-01 00:00:00.000Z',
            data: {'name': 'should-not-apply'},
          )));
      await Future<void>.delayed(const Duration(milliseconds: 10));

      final local = await h.pocket.collection('widgets').get(id);
      expect(local!['name'], 'v1',
          reason: 'a stale fast-path must not apply after stop');
    });

    test('local-write debounce scheduled before stop never fires', () async {
      final h = await EngineHarness.create(
          config: testConfig(pushDebounce: const Duration(milliseconds: 5)));
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: doc('', 'v1'));
      await h.engine.syncNow();

      // A local write arms the push debounce timer...
      await h.pocket.collection('widgets').patch(id, {'name': 'edited'});
      // ...but stop cancels it before it can fire.
      await h.engine.stop();
      await Future<void>.delayed(const Duration(milliseconds: 30));
      expect(h.mock.updateCalls, 0,
          reason: 'the debounced push was cancelled by stop');
      expect((await sr(h.pocket, id))!.syncState, SyncState.dirty,
          reason: 'local edit preserved for the next lifecycle');
    });

    test('double start/stop and stop-before-start are safe with generations',
        () async {
      final h = await EngineHarness.create(start: false);
      addTearDown(h.close);

      // stop before any start: no-op.
      await h.engine.stop();
      expect(h.engine.state, SyncEngineState.closed);

      // start -> stop -> start -> stop: every lifecycle is independent.
      for (var i = 0; i < 3; i++) {
        await h.engine.start();
        expect(h.engine.isRunning, isTrue);
        expect(h.engine.state, SyncEngineState.idle);
        await h.engine.stop();
        expect(h.engine.state, SyncEngineState.closed);
      }
    });
  });
}
