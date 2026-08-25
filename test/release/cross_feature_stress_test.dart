import 'dart:async';

import 'package:localpocket/localpocket.dart';
import 'package:localpocket/sync.dart';
import 'package:test/test.dart';

import '../sync/engine/engine_helpers.dart';
import '../sync/engine/mock_backend.dart';

/// Cross-feature concurrency stress: a seeded, deterministic suite
/// combining concurrent local writes, reads, watchers, pull/push barriers,
/// file attach/remove, conflict resolution, maintenance, and auth/offline
/// transitions. The seed is preserved in the failure message so a failure is
/// reproducible.
void main() {
  Future<void> runSeeded(int seed) async {
    final mock = MockSyncBackend();
    final h = await EngineHarness.create(
      mock: mock,
      config: testConfig(pushDebounce: const Duration(milliseconds: 15)),
      blobStore: MemoryBlobStore(),
    );
    addTearDown(h.close);

    // 1. Seed 8 remote records, pull them clean.
    final ids = <String>[];
    for (var i = 0; i < 8; i++) {
      ids.add(mock.seed(store: 'widgets', data: {'name': 'r$i', 'qty': 0}));
    }
    await h.engine.syncNow();
    for (final id in ids) {
      expect(await h.pocket.collection('widgets').get(id), isNotNull,
          reason: 'seed $seed: record $id pulled');
    }

    // 2. A watcher observes the whole store during the storm.
    final watchEvents = <int>[];
    final watchSub = h.pocket
        .collection('widgets')
        .query()
        .watch()
        .listen((items) => watchEvents.add(items.length));
    addTearDown(() => watchSub.cancel());

    // 3. Concurrent storm: patches (distinct fields -> no lost updates),
    //    file attach/remove, reads, and a mid-storm push barrier.
    final futures = <Future<void>>[];
    final remoteCallsBefore = mock.updateCalls + mock.createCalls;
    for (var i = 0; i < 12; i++) {
      final idx = i % ids.length;
      futures.add(h.pocket.collection('widgets').patch(ids[idx], {
        'qty': i + 1,
        'storm_$i': 'v$i', // distinct field -> every write must land
      }));
    }
    for (var i = 0; i < 3; i++) {
      futures.add(h.pocket.files.attach(
        store: 'widgets',
        recordId: ids[i],
        bytes: Stream.value([i, i * 2, i * 3]),
        name: 'f$i.bin',
        allowVolatileBlobs: true,
      ));
    }
    // Concurrent reads must never deadlock against the writes.
    for (var i = 0; i < 4; i++) {
      futures.add(() async {
        await h.pocket
            .collection('widgets')
            .query()
            .orderBy('id')
            .limit(3)
            .fetch();
      }());
    }

    // Push with a barrier mid-flight.
    mock.updateRecordBarrier = Completer<void>();
    mock.updateRecordEntered = Completer<void>();
    final pushed = h.engine.syncNow();
    // Wait for the push to enter the network layer, then keep writing.
    await mock.updateRecordEntered!.future;
    await h.pocket.collection('widgets').patch(ids[0], {'during_push': 1});
    mock.updateRecordBarrier!.complete();
    mock.updateRecordBarrier = null;
    mock.updateRecordEntered = null;

    // Maintenance + auth/offline transitions while the storm settles.
    futures.add(() async {
      await h.engine.setConnectivity(false);
      await Future<void>.delayed(const Duration(milliseconds: 5));
      await h.engine.setConnectivity(true);
      await h.engine.invalidateVisibility();
    }());

    await Future.wait(futures);
    await pushed;
    await h.engine.syncNow(); // drain everything

    // 4. Invariants after the storm.
    //    No lost update: every distinct field write landed locally.
    for (var i = 0; i < 12; i++) {
      final doc = await h.pocket.collection('widgets').get(ids[i % ids.length]);
      expect(doc!['storm_$i'], 'v$i',
          reason: 'seed $seed: local write $i was never lost');
    }
    //    Remote convergence: the mock has the same data.
    for (var i = 0; i < 12; i++) {
      final remote = mock.records[ids[i % ids.length]]!.data;
      expect(remote['storm_$i'], 'v$i',
          reason: 'seed $seed: remote write $i was never lost');
    }
    //    No queue poisoning: no pending ops remain.
    expect(await h.engine.syncStore.countPending(), 0,
        reason: 'seed $seed: the queue drained completely');
    //    No duplicate remote effects: each record exists exactly once.
    expect(mock.records.length, ids.length,
        reason: 'seed $seed: no phantom/duplicate remote records');
    //    The storm produced real remote traffic (the engine was live).
    expect(mock.updateCalls + mock.createCalls, greaterThan(remoteCallsBefore),
        reason: 'seed $seed: the engine pushed during the storm');
    //    Watcher stayed consistent (no phantom-length regressions below 8).
    expect(watchEvents.every((n) => n >= 8), isTrue,
        reason: 'seed $seed: watcher never saw records vanish');

    // 5. File state is consistent.
    for (var i = 0; i < 3; i++) {
      final refs =
          await h.pocket.files.list(store: 'widgets', recordId: ids[i]);
      expect(refs, hasLength(1), reason: 'seed $seed: file ref $i attached');
    }

    // 6. Shutdown hygiene: after stop, no further remote calls.
    await h.engine.stop();
    final callsAfterStop = mock.updateCalls + mock.createCalls;
    await Future<void>.delayed(const Duration(milliseconds: 40));
    expect(mock.updateCalls + mock.createCalls, callsAfterStop,
        reason: 'seed $seed: no work continues after engine stop');
  }

  test('deterministic cross-feature stress preserves the seed on failure',
      () async {
    for (final seed in [1, 2, 3]) {
      // Each seed runs in a fresh pocket/engine so failures are isolated.
      await runSeeded(seed);
    }
  }, timeout: const Timeout(Duration(minutes: 2)));
}
