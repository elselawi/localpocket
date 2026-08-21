import 'dart:async';

import 'package:localpocket/localpocket.dart';
import 'package:localpocket/sync.dart';
import 'package:test/test.dart';

import 'engine_helpers.dart';
import 'mock_backend.dart';

/// A mock whose `listChanges` can be gated (to hold a pull mid-flight) and
/// whose realtime `hints()` stream is test-driven.
class _GatedListHintBackend extends MockSyncBackend {
  final StreamController<BackendHint> _hints =
      StreamController<BackendHint>.broadcast();
  Completer<void>? gate;

  @override
  Stream<BackendHint> hints() => _hints.stream;

  void emit(BackendHint hint) => _hints.add(hint);

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

void main() {
  Future<SyncRowState?> sr(LocalPocket pocket, String id) =>
      pocket.outbox.readSyncRow(pocket.db, 'widgets', id);

  Map<String, Object?> doc(String id, String name, [int qty = 0]) => {
        if (id.isNotEmpty) 'id': id,
        'name': name,
        'qty': qty,
      };

  group('fast-path / lifecycle races', () {
    test(
        'stop drains an in-flight fast-path apply: no work outlives stop and '
        'restart is clean', () async {
      final mock = _GatedListHintBackend();
      final h = await EngineHarness.create(mock: mock, start: false);
      addTearDown(h.close);
      await h.engine.start();
      final id = mock.seed(store: 'widgets', data: doc('', 'v1'));
      await h.engine.syncNow(); // clean at v1
      mock.mutate(id, {'id': id, 'name': 'v2'});

      // Hold the write queue with a user transaction so the fast-path apply
      // is genuinely in flight (queued behind it) when stop() is called.
      final gate = Completer<void>();
      final held = h.pocket.transaction((tx) async {
        await gate.future;
      });
      mock.emit(BackendHint(
          'widgets', BackendHintKind.changed, mock.records[id]!.toRemote()));
      await Future<void>.delayed(const Duration(milliseconds: 10));

      var stoppedDone = false;
      final stopped = h.engine.stop().then((_) => stoppedDone = true);
      await Future<void>.delayed(const Duration(milliseconds: 10));
      expect(stoppedDone, isFalse,
          reason: 'stop waits for the in-flight fast-path apply');

      gate.complete();
      await held;
      await stopped;
      expect(stoppedDone, isTrue);

      // The in-flight apply was drained before stop returned (it completed,
      // so no DB work outlives stop) and the engine is cleanly closed.
      final applied = await h.pocket.collection('widgets').get(id);
      expect(applied!['name'], 'v2',
          reason: 'the in-flight apply completed as part of the drain');
      expect(h.engine.state, SyncEngineState.closed);

      // A restart is clean and functional.
      await h.engine.start();
      expect(h.engine.isRunning, isTrue);
      final id2 = mock.seed(store: 'widgets', data: doc('', 'n2'));
      await h.engine.syncNow();
      expect(await h.pocket.collection('widgets').get(id2), isNotNull);
    });

    test(
        'a realtime hint arriving while stop() is draining is dropped: no '
        'apply, no crash', () async {
      final mock = _GatedListHintBackend();
      final h = await EngineHarness.create(mock: mock, start: false);
      addTearDown(h.close);
      await h.engine.start();
      final id = mock.seed(store: 'widgets', data: doc('', 'v1'));
      await h.engine.syncNow(); // clean at v1
      mock.mutate(id, {'id': id, 'name': 'v2'});

      // Hold a pull so stop() blocks while draining it; the hint then arrives
      // mid-drain (the subscription is still live, but the engine is stopped).
      final gate = Completer<void>();
      mock.gate = gate;
      final cycle = h.engine.syncNow();
      await Future<void>.delayed(const Duration(milliseconds: 5));
      var stoppedDone = false;
      final stopped = h.engine.stop().then((_) => stoppedDone = true);
      await Future<void>.delayed(const Duration(milliseconds: 5));
      expect(stoppedDone, isFalse, reason: 'stop is draining the cycle');

      mock.emit(BackendHint(
          'widgets', BackendHintKind.changed, mock.records[id]!.toRemote()));
      await Future<void>.delayed(const Duration(milliseconds: 10));

      gate.complete();
      await stopped;
      await cycle;
      expect(h.engine.state, SyncEngineState.closed);

      // The hint was dropped, not applied: no fast-path was ever scheduled.
      expect(h.engine.debugActions.where((a) => a.startsWith('fast:')), isEmpty,
          reason: 'a hint during the stop drain is dropped before any apply');
      final row = await h.pocket.collection('widgets').get(id);
      expect(row, isNotNull, reason: 'no crash, DB healthy');
      final pullsAfterStop = mock.listChangesCalls;
      await Future<void>.delayed(const Duration(milliseconds: 20));
      expect(mock.listChangesCalls, pullsAfterStop,
          reason: 'no cycle ran after stop');
    });

    test('a realtime hint right after a restart is applied exactly once',
        () async {
      final mock = _GatedListHintBackend();
      final hooks = TestHooks();
      var deliveries = 0;
      hooks.applyRemoteCrashPoint = (store, id) => deliveries++;
      final h = await EngineHarness.create(
          mock: mock, testHooks: hooks, start: false);
      addTearDown(h.close);
      final id = mock.seed(store: 'widgets', data: doc('', 'v1'));
      await h.engine.start(); // initial pull applies v1
      await h.engine.stop();
      await h.engine.start(); // fresh lifecycle

      deliveries = 0;
      final pullsBefore = mock.listChangesCalls;
      mock.mutate(id, {'id': id, 'name': 'v2'});
      mock.emit(BackendHint(
          'widgets', BackendHintKind.changed, mock.records[id]!.toRemote()));
      await Future<void>.delayed(const Duration(milliseconds: 20));

      final row = await h.pocket.collection('widgets').get(id);
      expect(row!['name'], 'v2',
          reason: 'the post-restart hint applied the newer remote');
      expect(deliveries, 1, reason: 'applied exactly once');
      expect(mock.listChangesCalls, pullsBefore,
          reason: 'the fast-path did not schedule a pull');
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
    });

    test(
        'a fast-path hint and a concurrent pull on the same record never '
        'double-apply or diverge', () async {
      final mock = _GatedListHintBackend();
      final h = await EngineHarness.create(mock: mock, start: false);
      addTearDown(h.close);
      await h.engine.start();
      final id = mock.seed(store: 'widgets', data: doc('', 'v1'));
      await h.engine.syncNow(); // clean at v1

      final changes = <ChangeSet>[];
      final sub = h.pocket.changeBus.stream.listen(changes.add);
      addTearDown(sub.cancel);

      mock.mutate(id, {'id': id, 'name': 'v2'});
      // Hold the pull's fetch so the cycle is in flight.
      final gate = Completer<void>();
      mock.gate = gate;
      final cycle = h.engine.syncNow();
      await Future<void>.delayed(const Duration(milliseconds: 5));

      // Fire a fast-path hint for the same record while the pull is blocked.
      mock.emit(BackendHint(
          'widgets', BackendHintKind.changed, mock.records[id]!.toRemote()));
      await Future<void>.delayed(const Duration(milliseconds: 10));

      gate.complete();
      await cycle;

      final applied = changes
          .where((c) => c.store == 'widgets' && c.ids.contains(id))
          .length;
      expect(applied, 1,
          reason: 'pull and fast-path never both apply the same record');
      final row = await h.pocket.collection('widgets').get(id);
      expect(row!['name'], 'v2', reason: 'converged, no divergent row');
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
      expect(await h.pocket.collection('widgets').query().count(), 1,
          reason: 'no duplicate row');
    });
  });
}
