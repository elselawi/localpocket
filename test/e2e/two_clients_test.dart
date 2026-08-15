import 'package:localpocket/localpocket.dart';
import 'package:localpocket/sync.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import '../pocketbase/mock_pb_server.dart';
import '../pocketbase/pb_helpers.dart';

/// Two full adapter-backed clients (LocalPocket + PocketBaseBackend +
/// SyncEngine) against the in-process PocketBase-wire server, exercising the
/// REAL HTTP stack end-to-end (pull/push/batch/SSE/auth).
void main() {
  SyncConfig e2eConfig({int maxBatch = 250, Duration? pushDebounce}) =>
      SyncConfig(
        maxPage: 200,
        maxPagesPerPass: 100,
        rewind: const Duration(seconds: 5),
        sweepInterval: const Duration(days: 365),
        syncInterval: const Duration(days: 365),
        pushDebounce: pushDebounce ?? const Duration(days: 365),
        connectivitySettle: Duration.zero,
        maxBatch: maxBatch,
        maxAttempts: 8,
        backoffBase: const Duration(milliseconds: 50),
        backoffCap: const Duration(minutes: 5),
        jitter: (_) => 1.0,
      );

  group('E2E two clients vs PocketBase wire server', () {
    test('offline 1000 op drain converges', () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());

      // Client A writes 1000 records while offline (engine not started).
      final a = await PbEngineHarness.create(
          server: server, start: false, config: e2eConfig());
      addTearDown(a.close);
      for (var i = 0; i < 1000; i++) {
        await a.pocket.collection('widgets').put(record(name: 'op$i', qty: i));
      }
      expect(await a.engine.syncStore.countPending(), 1000);

      // Reconnect: cycles drain the outbox to the server (bounded per cycle).
      await a.engine.start();
      var guard = 0;
      while (await a.engine.syncStore.countPending() > 0) {
        await a.engine.syncNow();
        guard++;
        if (guard > 50) fail('drain did not converge');
      }
      expect(server.records.length, 1000);
      expect(await a.engine.syncStore.countPending(), 0);

      // Client B pulls and converges on the same set.
      final b =
          await PbEngineHarness.create(server: server, config: e2eConfig());
      addTearDown(b.close);
      await b.engine.syncNow();
      expect(await b.pocket.collection('widgets').query().all().count(), 1000);
      expect(await a.pocket.collection('widgets').query().all().count(), 1000);
    });

    test('concurrent disjoint edits converge', () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      final dbA = await tempDbPath();
      final dbB = await tempDbPath();
      final a = await PbEngineHarness.create(
          server: server, config: e2eConfig(), path: dbA.path);
      final b = await PbEngineHarness.create(
          server: server, config: e2eConfig(), path: dbB.path);
      addTearDown(() async {
        await a.close();
        await b.close();
        await dbA.cleanup();
        await dbB.cleanup();
      });

      final id = server.seed(store: 'widgets', data: {'name': 'n0', 'qty': 1});
      await a.engine.syncNow();
      await b.engine.syncNow();

      await a.pocket.collection('widgets').patch(id, {'name': 'from-A'});
      await b.pocket.collection('widgets').patch(id, {'qty': 99});
      await a.engine.syncNow();
      await b.engine.syncNow();
      await a.engine.syncNow();

      final sa = await a.pocket.collection('widgets').get(id);
      final sb = await b.pocket.collection('widgets').get(id);
      expect(sa!['name'], 'from-A');
      expect(sa['qty'], 99);
      expect(sb!['name'], 'from-A');
      expect(sb['qty'], 99);
      expect(server.records[id]!.data['name'], 'from-A');
      expect(server.records[id]!.data['qty'], 99);
    });

    test('concurrent overlap remote wins default', () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      final dbA = await tempDbPath();
      final dbB = await tempDbPath();
      final a = await PbEngineHarness.create(
          server: server, config: e2eConfig(), path: dbA.path);
      final b = await PbEngineHarness.create(
          server: server, config: e2eConfig(), path: dbB.path);
      addTearDown(() async {
        await a.close();
        await b.close();
        await dbA.cleanup();
        await dbB.cleanup();
      });

      final id = server.seed(store: 'widgets', data: {'name': 'n0'});
      await a.engine.syncNow();
      await b.engine.syncNow();

      await a.pocket.collection('widgets').patch(id, {'name': 'from-A'});
      await b.pocket.collection('widgets').patch(id, {'name': 'from-B'});
      await a.engine.syncNow(); // A lands first
      await b.engine.syncNow(); // B merges -> D4 remote wins
      await a.engine.syncNow(); // A re-pulls

      final sa = await a.pocket.collection('widgets').get(id);
      final sb = await b.pocket.collection('widgets').get(id);
      expect(sa!['name'], 'from-A');
      expect(sb!['name'], 'from-A', reason: 'both converge on the winner');
      expect(server.records[id]!.data['name'], 'from-A');
    });

    test('permission flip hidden then restore', () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      final a = await PbEngineHarness.create(server: server);
      addTearDown(a.close);
      // Bucket 0 so a normal cycle's first sweep buckets (0,1) reach it.
      final id = server.seed(
          store: 'widgets',
          id: 'a${generateRecordId().substring(1)}',
          data: {'name': 'v1'});
      await a.engine.syncNow();
      expect(await a.pocket.collection('widgets').get(id), isNotNull);

      // Permission revoked: list + view hide the record.
      server.hideServerSide(id);
      await a.engine.invalidateVisibility(); // forced full sweep
      expect(await a.pocket.collection('widgets').get(id), isNotNull,
          reason: 'hidden, never deleted');
      expect(await a.pocket.collection('widgets').query().all().count(), 0,
          reason: 'hidden rows are out of the default scope');

      // Permission restored with a STALE updated: the sweep re-sees it.
      server.restoreServerSide(id);
      await a.engine.invalidateVisibility();
      expect(await a.pocket.collection('widgets').query().all().count(), 1,
          reason: 'unhidden and applied');
      expect((await a.pocket.collection('widgets').get(id))!['name'], 'v1');
    });

    test('sse gap healed by pull', () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      final a = await PbEngineHarness.create(
          server: server,
          config: e2eConfig(pushDebounce: const Duration(milliseconds: 20)));
      addTearDown(a.close);
      await a.backend.startRealtime();
      await Future<void>.delayed(const Duration(milliseconds: 200));

      // A server-side create happens while the SSE is down: never assume
      // nothing happened — the reconnect re-pulls every store.
      server.closeSse();
      final id = server.seed(store: 'widgets', data: {'name': 'during-gap'});
      await Future<void>.delayed(const Duration(milliseconds: 700));

      expect(await a.pocket.collection('widgets').get(id), isNotNull,
          reason: 'gap healed by the reconnect pull');
      expect((await a.pocket.collection('widgets').get(id))!['name'],
          'during-gap');
    });

    test('batch on off produce identical remote state', () async {
      final on = await MockPbServer().start(); // batchEnabled = true
      final off = await MockPbServer().start();
      off.batchEnabled = false; // probe answers 403 -> per-record fallback
      addTearDown(() async {
        await on.stop();
        await off.stop();
      });

      Future<void> drive(MockPbServer server) async {
        // Each client needs its OWN database — `:memory:` is cached per path
        // by the FFI factory, so two clients would share one SQLite file.
        final db = await tempDbPath();
        final h = await PbEngineHarness.create(server: server, path: db.path);
        addTearDown(() async {
          await h.close();
          await db.cleanup();
        });
        await h.pocket.collection('widgets').put(record(name: 'a', qty: 1));
        await h.pocket.collection('widgets').put(record(name: 'b', qty: 2));
        await h.engine.syncNow();
        // Patch the record named 'a' deterministically (ids() order is not
        // guaranteed).
        final all = await h.pocket.collection('widgets').query().all().fetch();
        final aId =
            all.items.firstWhere((r) => r['name'] == 'a')['id'] as String;
        await h.pocket.collection('widgets').patch(aId, {'qty': 10});
        await h.engine.syncNow();
      }

      await drive(on);
      await drive(off);

      // Both servers were probed once; the enabled one then uses batch.
      expect(on.batchCalls, greaterThan(1), reason: 'batch was used');
      expect(off.batchCalls, lessThanOrEqualTo(1),
          reason: 'per-record fallback used (probe only)');
      expect(on.createCalls, 0, reason: 'creates went through the batch');
      expect(off.createCalls, 2, reason: 'per-record creates');

      // Identical remote CONTENT (ids are client-generated and legitimately
      // differ between the two servers).
      Map<String, Object?> content(Map<String, Object?> d) => {
            for (final e in d.entries)
              if (e.key != 'id') e.key: e.value,
          };
      final onState = on.records.values.map((r) => content(r.data)).toList()
        ..sort((x, y) => (x['name'] as String).compareTo(y['name'] as String));
      final offState = off.records.values.map((r) => content(r.data)).toList()
        ..sort((x, y) => (x['name'] as String).compareTo(y['name'] as String));
      expect(onState, offState, reason: 'identical remote state');
    });

    test('native client and web client interop', () async {
      // Two clients, each with its OWN transport instance (simulating
      // separate platform runtimes), interop over the same server.
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      final dbA = await tempDbPath();
      final dbB = await tempDbPath();
      final a = await PbEngineHarness.create(
          server: server, config: e2eConfig(), path: dbA.path);
      final b = await PbEngineHarness.create(
          server: server, config: e2eConfig(), path: dbB.path);
      addTearDown(() async {
        await a.close();
        await b.close();
        await dbA.cleanup();
        await dbB.cleanup();
      });
      expect(identical(a.backend.transport, b.backend.transport), isFalse,
          reason: 'independent transports');

      final id = server.seed(store: 'widgets', data: {'name': 'shared'});
      await a.engine.syncNow();
      await b.engine.syncNow();
      await a.pocket.collection('widgets').patch(id, {'qty': 5});
      await a.engine.syncNow();
      await b.engine.syncNow();
      expect((await b.pocket.collection('widgets').get(id))!['qty'], 5,
          reason: 'clients interoperate through the shared server');
    });

    test('2mb boundary push fails cleanly', () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      // Local ceiling lifted so the write succeeds; the SERVER (2 MB) rejects.
      final a = await PbEngineHarness.create(
          server: server, config: e2eConfig(), maxDocBytes: 3000000);
      addTearDown(a.close);

      final big = 'x' * 2100000; // ~2.1 MB > server ceiling
      final id = generateRecordId();
      await a.pocket
          .collection('widgets')
          .put(record(id: id, name: 'big', meta: {'blob': big}));
      await a.engine.syncNow();

      // The push fails cleanly: dead-lettered, local payload kept, no server
      // record, and the store is not stalled. (Batch mode fails the whole
      // batch -> batch_poison; per-record mode -> validation_push.)
      expect(server.records.containsKey(id), isFalse);
      final local = await a.pocket.collection('widgets').get(id);
      expect(local!['name'], 'big', reason: 'local copy kept');
      final dl = await a.pocket.db
          .query('lp_dead_letter', where: 'record_id = ?', whereArgs: [id]);
      expect(dl.length, 1);
      expect(dl.single['kind'], anyOf('validation_push', 'batch_poison'));
    });
  });
}
