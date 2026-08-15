import 'package:localpocket/sync.dart';
import 'package:test/test.dart';

import 'mock_pb_server.dart';
import 'pb_helpers.dart';

/// Realtime startup ownership: `SyncEngine.start()` does NOT open
/// the SSE connection — realtime is application-managed via
/// `PocketBaseBackend.startRealtime()`. The engine subscribes to the backend's
/// hint stream (which realtime populates) and never leaks/duplicates the
/// connection itself.
void main() {
  group('realtime startup ownership', () {
    test('engine.start() does not open the SSE connection', () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      final h = await PbEngineHarness.create(server: server, start: false);
      addTearDown(h.close);

      expect(server.realtimeConnects, 0);
      await h.engine.start();
      expect(server.realtimeConnects, 0,
          reason: 'engine start does not own realtime; the app must start it');

      // The app explicitly starts realtime (the connection opens async).
      await h.backend.startRealtime();
      await Future<void>.delayed(const Duration(milliseconds: 120));
      expect(server.realtimeConnects, 1);
    });

    test('startRealtime is idempotent (no duplicate connections)', () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      final h = await PbEngineHarness.create(server: server);
      addTearDown(h.close);

      await h.backend.startRealtime();
      await h.backend.startRealtime();
      await h.backend.startRealtime();
      await Future<void>.delayed(const Duration(milliseconds: 120));
      expect(server.realtimeConnects, 1,
          reason: 'repeated startRealtime is a no-op');
    });

    test('realtime events flow into the engine only after startRealtime',
        () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      final h = await PbEngineHarness.create(server: server);
      addTearDown(h.close);
      // Engine started, realtime NOT yet started.
      expect(server.realtimeConnects, 0);

      // An event pushed while realtime is off reaches nobody.
      final id = server.seed(store: 'widgets', data: {'name': 'later'});
      server.pushEvent(record: server.records[id]!.toJson(), action: 'update');
      await Future<void>.delayed(const Duration(milliseconds: 100));
      expect(await h.pocket.collection('widgets').get(id), isNull,
          reason: 'no SSE connection, so no hint drove a pull');

      // Once the app starts realtime, events drive the engine (the hint is
      // debounced ~300 ms by the backend's realtime coalescing).
      await h.backend.startRealtime();
      await Future<void>.delayed(const Duration(milliseconds: 150));
      server.pushEvent(record: server.records[id]!.toJson(), action: 'update');
      await Future<void>.delayed(const Duration(milliseconds: 500));
      expect(await h.pocket.collection('widgets').get(id), isNotNull,
          reason: 'realtime hint reached the engine after startRealtime');
    });

    test('engine.stop() does not close or duplicate the app-managed realtime',
        () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      final h = await PbEngineHarness.create(server: server);
      addTearDown(h.close);
      await h.backend.startRealtime();
      await Future<void>.delayed(const Duration(milliseconds: 120));
      expect(server.realtimeConnects, 1);
      await h.engine.stop();
      expect(server.realtimeConnects, 1,
          reason:
              'engine stop never opens/closes the app-owned SSE connection');

      // The backend can still be used by a restarted engine.
      await h.engine.start();
      await Future<void>.delayed(Duration.zero);
      expect(h.engine.isRunning, isTrue);
      // Subscribe AFTER restart: the fresh stream is the live one.
      final states = <SyncEngineState>[];
      final sub = h.engine.stateChanges.listen(states.add);
      h.engine.pause();
      await Future<void>.delayed(const Duration(milliseconds: 20));
      expect(h.engine.state, SyncEngineState.paused,
          reason: 'restarted engine transitioned');
      expect(states, contains(SyncEngineState.paused),
          reason: 'restarted engine emits on the fresh stream');
      await h.engine.resume();
      await sub.cancel();
      expect(server.realtimeConnects, 1,
          reason: 'restart reuses the existing connection, no leak');
    });

    test('backend.close() releases the realtime connection', () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      final h = await PbEngineHarness.create(server: server, start: false);
      await h.backend.startRealtime();
      await Future<void>.delayed(const Duration(milliseconds: 120));
      expect(server.realtimeConnects, 1);

      // Closing the backend stops realtime and the transport.
      await h.engine.stop();
      h.backend.close();
      // No further events can drive the engine (the transport is closed).
      final id = server.seed(store: 'widgets', data: {'name': 'x'});
      server.pushEvent(record: server.records[id]!.toJson(), action: 'update');
      await Future<void>.delayed(const Duration(milliseconds: 100));
      expect(await h.pocket.collection('widgets').get(id), isNull,
          reason: 'closed backend delivers no realtime hints');
      await h.pocket.close();
    });
  });
}
