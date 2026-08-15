import 'package:localpocket/pocketbase.dart';
import 'package:localpocket/sync.dart';
import 'package:test/test.dart';

import 'mock_pb_server.dart';
import 'pb_helpers.dart';

/// Realtime SSE tests.
void main() {
  group('realtime SSE', () {
    test('hints debounced 300ms per store', () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      final backend = PocketBaseBackend(
        baseUrl: server.baseUrl,
        tokenProvider: TestTokenProvider(),
        stores: const ['widgets'],
        realtimeDebounce: const Duration(milliseconds: 60),
      );
      addTearDown(backend.close);
      await backend.startRealtime();
      // Let the initial gap-closed hint land, then measure a fresh burst.
      await Future<void>.delayed(const Duration(milliseconds: 120));
      final hints = <BackendHint>[];
      final sub = backend.hints().listen(hints.add);

      for (var i = 0; i < 3; i++) {
        server.pushEvent(
          record: {
            'id': 'r$i',
            'store': 'widgets',
            'data': {'name': 'n$i'},
            'updated': server.nextUpdated()
          },
          action: 'update',
        );
      }
      await Future<void>.delayed(const Duration(milliseconds: 250));
      await sub.cancel();
      expect(hints.where((h) => h.record != null).length, 1,
          reason: 'a 60 ms storm coalesces into one hint per store');
    });

    test('reconnect triggers pull all stores', () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      final backend = PocketBaseBackend(
        baseUrl: server.baseUrl,
        tokenProvider: TestTokenProvider(),
        stores: const ['widgets', 'owners'],
        realtimeDebounce: const Duration(milliseconds: 30),
      );
      addTearDown(backend.close);
      final hints = <BackendHint>[];
      final sub = backend.hints().listen(hints.add);
      await backend.startRealtime();
      await Future<void>.delayed(const Duration(milliseconds: 250));

      // First connect: a gap-closed hint for every store.
      expect(hints.where((h) => h.store == 'widgets').length,
          greaterThanOrEqualTo(1));
      expect(hints.where((h) => h.store == 'owners').length,
          greaterThanOrEqualTo(1));

      // Kill the SSE connection: the adapter reconnects and re-hints all.
      final before = hints.length;
      server.closeSse();
      await Future<void>.delayed(const Duration(milliseconds: 700));
      expect(hints.length, greaterThan(before),
          reason: 'reconnect re-pulls every store');
      expect(hints.where((h) => h.store == 'widgets').length,
          greaterThanOrEqualTo(2));
      expect(hints.where((h) => h.store == 'owners').length,
          greaterThanOrEqualTo(2));
      await sub.cancel();
    });

    test('delete hint verifies via targeted get', () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      final id = server.seed(store: 'widgets', data: {'name': 'alive'});
      final backend = PocketBaseBackend(
        baseUrl: server.baseUrl,
        tokenProvider: TestTokenProvider(),
        stores: const ['widgets'],
        realtimeDebounce: const Duration(milliseconds: 30),
      );
      addTearDown(backend.close);
      final hints = <BackendHint>[];
      final sub = backend.hints().listen(hints.add);
      await backend.startRealtime();
      await Future<void>.delayed(const Duration(milliseconds: 120));
      hints.clear(); // drop the gap-closed hint

      // Delete event for a record that still exists: verified by GET, emitted
      // as a changed hint with the current record.
      server.pushEvent(
        record: {
          'id': id,
          'store': 'widgets',
          'data': {'name': 'alive'},
          'updated': server.records[id]!.updated
        },
        action: 'delete',
      );
      await Future<void>.delayed(const Duration(milliseconds: 200));
      expect(server.viewCalls, greaterThanOrEqualTo(1),
          reason: 'delete events always verify via targeted GET');

      // Delete event for a genuinely missing record -> deleted hint.
      server.pushEvent(
        record: {
          'id': 'gone1234567890',
          'store': 'widgets',
          'data': {},
          'updated': server.nextUpdated()
        },
        action: 'delete',
      );
      await Future<void>.delayed(const Duration(milliseconds: 200));
      expect(server.viewCalls, greaterThanOrEqualTo(2));

      expect(hints.any((h) => h.kind == BackendHintKind.deleted), isTrue);
      expect(
          hints.any(
              (h) => h.kind == BackendHintKind.changed && h.record?.id == id),
          isTrue);
      await sub.cancel();
    });

    test('fast path applies only clean and newer', () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      final h = await PbEngineHarness.create(server: server);
      addTearDown(h.close);
      await h.backend.startRealtime();

      final id = server.seed(store: 'widgets', data: {'name': 'v0'});
      await h.engine.syncNow(); // clean, remoteUpdated = T0
      expect((await h.pocket.collection('widgets').get(id))!['name'], 'v0');

      // A newer update event applies directly, no pull needed.
      server.mutate(id, {'id': id, 'name': 'v1'});
      server.pushEvent(record: server.records[id]!.toJson(), action: 'update');
      await Future<void>.delayed(const Duration(milliseconds: 400));
      expect((await h.pocket.collection('widgets').get(id))!['name'], 'v1',
          reason: 'fast-path applied the embedded record');

      // A STALE event (same updated as local) is NOT applied.
      final localUpdated =
          (await h.pocket.outbox.readSyncRow(h.pocket.db, 'widgets', id))!
              .remoteUpdated;
      server.pushEvent(
        record: {
          'id': id,
          'store': 'widgets',
          'data': {'name': 'stale'},
          'updated': localUpdated,
        },
        action: 'update',
      );
      await Future<void>.delayed(const Duration(milliseconds: 250));
      expect((await h.pocket.collection('widgets').get(id))!['name'], 'v1',
          reason: 'stale event ignored');

      // A DIRTY row is never clobbered by the fast-path.
      await h.pocket.collection('widgets').patch(id, {'name': 'mine'});
      server.mutate(id, {'id': id, 'name': 'remote-v2'});
      server.pushEvent(record: server.records[id]!.toJson(), action: 'update');
      await Future<void>.delayed(const Duration(milliseconds: 250));
      expect((await h.pocket.collection('widgets').get(id))!['name'], 'mine',
          reason: 'fast-path skips dirty rows (the pull merges instead)');
    });

    test('fast path never advances cursor', () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      final h = await PbEngineHarness.create(server: server);
      addTearDown(h.close);
      await h.backend.startRealtime();

      final id = server.seed(store: 'widgets', data: {'name': 'v0'});
      await h.engine.syncNow();
      final cursorBefore = await h.engine.syncStore.readCursor('widgets');

      // Fast-path applies a newer record WITHOUT advancing the cursor.
      server.mutate(id, {'id': id, 'name': 'v1'});
      server.pushEvent(record: server.records[id]!.toJson(), action: 'update');
      await Future<void>.delayed(const Duration(milliseconds: 400));
      expect((await h.pocket.collection('widgets').get(id))!['name'], 'v1');

      final cursorAfter = await h.engine.syncStore.readCursor('widgets');
      expect(cursorAfter!.updated, cursorBefore!.updated,
          reason: 'fast-path never advances the cursor');

      // The next delta pull re-delivers it idempotently.
      await h.engine.syncNow();
      expect((await h.pocket.collection('widgets').get(id))!['name'], 'v1');
      expect(await h.pocket.collection('widgets').query().all().count(), 1);
    });

    test('hint storm collapses to periodic pulls', () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      final h = await PbEngineHarness.create(
          server: server,
          config: SyncConfig(
            maxPage: 200,
            maxPagesPerPass: 100,
            rewind: const Duration(seconds: 5),
            sweepInterval: const Duration(days: 365),
            syncInterval: const Duration(days: 365),
            pushDebounce: const Duration(milliseconds: 20),
            connectivitySettle: Duration.zero,
            maxBatch: 25,
            maxAttempts: 8,
            backoffBase: const Duration(milliseconds: 50),
            backoffCap: const Duration(minutes: 5),
            jitter: (_) => 1.0,
          ));
      addTearDown(h.close);
      final listBefore = server.listCalls;

      // A storm of doorbell hints (no record) -> the engine's debounce
      // collapses them into a single periodic pull.
      for (var i = 0; i < 20; i++) {
        h.engine.handleHint(const BackendHint('widgets'));
      }
      await Future<void>.delayed(const Duration(milliseconds: 100));
      expect(server.listCalls - listBefore, lessThanOrEqualTo(2),
          reason: '20 hints collapse to ~1 pull, not 20');
    });
  });
}
