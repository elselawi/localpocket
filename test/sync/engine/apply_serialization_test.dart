import 'dart:async';

import 'package:localpocket/localpocket.dart';
import 'package:localpocket/src/sync/apply_lane.dart';
import 'package:localpocket/sync.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';
import 'engine_helpers.dart';
import 'mock_backend.dart';

/// Pins for the shared remote-application lane (#10/#41).
///
/// Every transaction that writes remote state (pull pages, sweep fetch
/// batches, hidden marks, realtime fast-path applies) is serialized through
/// ONE lane owned by the engine, so remote application is a single logical
/// stream across cycles, sweeps, and realtime events — while network work
/// stays outside the lane and stays concurrent.
///
/// Pinned properties:
/// - the pull's apply transaction and a fast-path apply share the SAME lane
///   (a fast path waits for an in-flight apply, and vice versa);
/// - network fetches (listChanges) are NOT inside the lane: they run while an
///   apply is still queued;
/// - a fast path is never queued behind a whole cycle — it applies promptly
///   while a cycle is blocked on network push work;
/// - `stop()` drains the lane, so no remote apply outlives the engine;
/// - a failing apply never poisons the lane.
void main() {
  RemoteRecord event(String store, String id, String updated,
          {String name = 'remote-write'}) =>
      RemoteRecord(
          id: id, store: store, updated: updated, data: {'name': name});

  group('puller apply lane', () {
    test('network fetch runs outside the lane while the apply is queued',
        () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final mock = MockSyncBackend();
      mock.seed(store: 'widgets', data: {'name': 'v1'});
      final lane = ApplyLane();
      final puller = Puller(
          pocket, mock, testConfig(), SyncStore(pocket, mock.scopeId),
          applyLane: lane);

      // Hold the lane open: applies queue behind this slot.
      final hold = Completer<void>();
      unawaited(lane.run(() => hold.future));

      var pullDone = false;
      final pull = puller.pullStore('widgets').then((r) {
        pullDone = true;
        return r;
      });
      await Future<void>.delayed(const Duration(milliseconds: 20));

      expect(mock.listChangesCalls, greaterThanOrEqualTo(1),
          reason: 'the page fetch is network work and must NOT wait for the '
              'lane');
      expect(pullDone, isFalse,
          reason: 'the apply transaction is queued on the held lane');

      hold.complete();
      final report = await pull;
      expect(report.applied, 1);
      // The seeded record must have landed in the domain.
      final rows =
          await pocket.db.rawQuery('SELECT COUNT(*) AS c FROM widgets');
      expect(rows.first['c'], 1);
    });

    test('a fast-path apply waits for an in-flight apply on the shared lane',
        () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final mock = MockSyncBackend();
      final lane = ApplyLane();
      final puller = Puller(
          pocket, mock, testConfig(), SyncStore(pocket, mock.scopeId),
          applyLane: lane);

      final hold = Completer<void>();
      unawaited(lane.run(() => hold.future));

      final id = generateRecordId();
      var applied = false;
      final fast = puller
          .fastPathApply(event('widgets', id, mock.nextUpdated(), name: 'born'))
          .then((v) {
        applied = true;
        return v;
      });
      await Future<void>.delayed(const Duration(milliseconds: 20));

      expect(applied, isFalse,
          reason: 'the fast path queued behind the held lane slot');
      expect(await pocket.collection('widgets').get(id), isNull);

      hold.complete();
      expect(await fast, isTrue,
          reason: 'once the lane frees, the event applies');
      expect((await pocket.collection('widgets').get(id))!['name'], 'born');
    });

    test('a failed apply does not poison the puller lane', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final mock = MockSyncBackend();
      final lane = ApplyLane();
      final puller = Puller(
          pocket, mock, testConfig(), SyncStore(pocket, mock.scopeId),
          applyLane: lane);

      // An event for a store that does not exist fails inside the apply.
      await expectLater(
          puller.fastPathApply(
              event('bogus', generateRecordId(), mock.nextUpdated())),
          throwsA(anything));

      // The same lane serves the next apply.
      final id = generateRecordId();
      expect(
          await puller.fastPathApply(
              event('widgets', id, mock.nextUpdated(), name: 'ok')),
          isTrue);
      expect((await pocket.collection('widgets').get(id))!['name'], 'ok');
    });
  });

  group('engine apply lane', () {
    test(
        'a fast path applies promptly while a full cycle is blocked on '
        'network push work', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final idA = h.mock.seed(store: 'widgets', data: {'name': 'v1'});
      await h.engine.syncNow(); // clean at v1
      await h.pocket.collection('widgets').patch(idA, {'name': 'local'});

      // Hold the cycle's PATCH in flight: network work, NOT inside the lane.
      final entered = Completer<void>();
      final release = Completer<void>();
      h.mock.updateRecordEntered = entered;
      h.mock.updateRecordBarrier = release;
      var cycleDone = false;
      final cycle = h.engine.syncNow().then((r) {
        cycleDone = true;
        return r;
      });
      await entered.future;

      // A realtime event for a NEW record: it must apply through the lane
      // immediately, without waiting for the blocked cycle to finish.
      final idB = generateRecordId();
      h.engine.handleHint(BackendHint(
        'widgets',
        BackendHintKind.changed,
        event('widgets', idB, h.mock.nextUpdated(), name: 'realtime'),
      ));
      await Future<void>.delayed(const Duration(milliseconds: 30));

      expect(
          (await h.pocket.collection('widgets').get(idB))!['name'], 'realtime',
          reason: 'the fast path only waits for the apply lane, never for '
              'the whole cycle');
      expect(cycleDone, isFalse,
          reason: 'the cycle is still blocked on its network push');

      release.complete();
      final report = await cycle;
      expect(report.hadError, isFalse);
      expect(report.pushed, 1);
      expect(h.mock.updateCalls, 1);
    });

    test('stop drains an in-flight fast-path apply held on the shared lane',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);

      // Hold the engine's lane open.
      final hold = Completer<void>();
      unawaited(h.engine.puller.applyLane.run(() => hold.future));

      // A realtime event enqueues a fast-path apply behind the held slot.
      final id = generateRecordId();
      h.engine.handleHint(BackendHint(
        'widgets',
        BackendHintKind.changed,
        event('widgets', id, h.mock.nextUpdated(), name: 'in-flight'),
      ));
      // Let the fast path start and queue its apply on the lane BEFORE stop
      // flips the lifecycle flag (a trigger fired while stopping is inert by
      // design — see generation_test.dart).
      await Future<void>.delayed(Duration.zero);

      var stopped = false;
      final stopFuture = h.engine.stop().then((_) => stopped = true);
      await Future<void>.delayed(const Duration(milliseconds: 20));
      expect(stopped, isFalse,
          reason: 'stop waits for the queued apply instead of abandoning it');

      hold.complete();
      await stopFuture;
      expect(stopped, isTrue);
      // The apply completed during stop: no DB work outlives the engine.
      expect(
          (await h.pocket.collection('widgets').get(id))!['name'], 'in-flight');
    });

    test(
        'a wrong-store hint is dropped at the door; later realtime applies work',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);

      // An event for an unknown store is dropped BEFORE it can enter the
      // apply lane (a fast-path for an unregistered store throws StateError
      // from requireTable — the engine ignores such hints outright).
      h.engine.handleHint(BackendHint(
        'bogus',
        BackendHintKind.changed,
        event('bogus', generateRecordId(), h.mock.nextUpdated()),
      ));

      // The next realtime event still applies.
      final id = generateRecordId();
      h.engine.handleHint(BackendHint(
        'widgets',
        BackendHintKind.changed,
        event('widgets', id, h.mock.nextUpdated(), name: 'after'),
      ));
      await Future<void>.delayed(const Duration(milliseconds: 30));

      expect(h.engine.debugActions, isNot(contains('fast:bogus')),
          reason: 'the wrong-store hint never entered the apply lane');
      expect(h.engine.debugActions, contains('fast:widgets'));
      expect((await h.pocket.collection('widgets').get(id))!['name'], 'after');
    });
  });
}
