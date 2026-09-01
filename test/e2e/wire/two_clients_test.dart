import 'package:localpocket/src/kernel/ids.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';
import '../support/wire_server.dart';

/// The canonical two-client suite, written ONCE against the [WireServer]
/// facade and run against BOTH the in-process MockPbServer and the live
/// PocketBase server (`test/secret.dart`, tagged `real`) — see [wireTest].
///
/// Focus: cross-client concurrency no single-batch file owns — disjoint and
/// overlapping concurrent edits, independent transports, multi-round
/// interleaved races, a fresh client converging on a large seeded set, and
/// offline-disjoint writes. (Batch-owned scenarios — delete-as-hide, purge,
/// archive/restore, custom-id/id-minting, SSE gap healing, large drains —
/// live in mutations_test.dart / sse_test.dart / robustness_test.dart and
/// are NOT duplicated here.) Scenarios that REQUIRE mock-only fault
/// injection (permission flips, batch toggling, payload ceilings) are
/// registered `live: false`.
void main() {
  /// Two isolated clients (separate file DBs + transports) bound to [s].
  Future<(WireClient, WireClient)> twoClients(WireServer s) async {
    final dbA = await tempDbPath();
    final dbB = await tempDbPath();
    final a = await s.createClient(path: dbA.path);
    final b = await s.createClient(path: dbB.path);
    s.onClose(() => dbA.cleanup());
    s.onClose(() => dbB.cleanup());
    return (a, b);
  }

  /// Drives both clients through one shared cycle.
  Future<void> syncBoth(WireClient a, WireClient b) async {
    await a.engine.syncNow();
    await b.engine.syncNow();
  }

  /// The `data` map of a server-side record (from [WireServer.readRecord]).
  Map<String, Object?> dataOf(Map<String, Object?>? rec) =>
      (rec!['data']! as Map).cast<String, Object?>();

  /// Drains [c]'s outbox with a loud bounded guard.
  Future<void> drain(WireClient c) async {
    var guard = 0;
    while (await c.engine.syncStore.countPending() > 0) {
      await c.engine.syncNow();
      guard++;
      if (guard > 60) fail('${c.pocket.path}: drain did not converge');
    }
  }

  group('E2E two clients (mock + live)', () {
    wireTest('concurrent disjoint edits converge', (s) async {
      final (a, b) = await twoClients(s);
      final id = await s.createRecord(s.store, {'name': 'n0', 'qty': 1});
      await syncBoth(a, b);

      await a.pocket.collection(s.store).patch(id, {'name': 'from-A'});
      await b.pocket.collection(s.store).patch(id, {'qty': 99});
      await syncBoth(a, b);
      await a.engine.syncNow();

      final sa = await a.pocket.collection(s.store).get(id);
      final sb = await b.pocket.collection(s.store).get(id);
      expect(sa!['name'], 'from-A');
      expect(sa['qty'], 99);
      expect(sb!['name'], 'from-A');
      expect(sb['qty'], 99);
      final remote = await s.readRecord(s.store, id);
      expect(dataOf(remote)['name'], 'from-A');
      expect(dataOf(remote)['qty'], 99);
    });

    wireTest('concurrent overlap: default remote wins', (s) async {
      final (a, b) = await twoClients(s);
      final id = await s.createRecord(s.store, {'name': 'n0'});
      await syncBoth(a, b);

      await a.pocket.collection(s.store).patch(id, {'name': 'from-A'});
      await b.pocket.collection(s.store).patch(id, {'name': 'from-B'});
      await a.engine.syncNow(); // A lands first
      await b.engine.syncNow(); // B merges -> remote wins
      await a.engine.syncNow();

      final sa = await a.pocket.collection(s.store).get(id);
      final sb = await b.pocket.collection(s.store).get(id);
      expect(sa!['name'], 'from-A');
      expect(sb!['name'], 'from-A', reason: 'both converge on the winner');
      expect(dataOf(await s.readRecord(s.store, id))['name'], 'from-A');
    });

    wireTest('independent transports interoperate', (s) async {
      final (a, b) = await twoClients(s);
      expect(identical(a.backend.transport, b.backend.transport), isFalse,
          reason: 'independent transport instances (separate runtimes)');

      final id = await s.createRecord(s.store, {'name': 'shared'});
      await syncBoth(a, b);
      await a.pocket.collection(s.store).patch(id, {'qty': 5});
      await a.engine.syncNow();
      await b.engine.syncNow();
      expect((await b.pocket.collection(s.store).get(id))!['qty'], 5,
          reason: 'clients interoperate through the shared server');
    });

    wireTest('multi-round interleaved edits converge', (s) async {
      final (a, b) = await twoClients(s);
      final id = await s.createRecord(s.store, {'name': 'v0', 'qty': 0});
      await syncBoth(a, b);

      for (var round = 0; round < 5; round++) {
        await a.pocket.collection(s.store).patch(id, {'name': 'A$round'});
        await b.pocket.collection(s.store).patch(id, {'qty': round});
        await a.engine.syncNow();
        await b.engine.syncNow();
        await a.engine.syncNow();
        final la = await a.pocket.collection(s.store).get(id);
        final lb = await b.pocket.collection(s.store).get(id);
        expect(la!['name'], 'A$round');
        expect(la['qty'], round);
        expect(lb!['name'], 'A$round');
        expect(lb['qty'], round);
      }
      expect(await s.countRecords(s.store), 1);
    });

    wireTest('fresh client pulls a large seeded set', (s) async {
      final dbA = await tempDbPath();
      final a = await s.createClient(path: dbA.path, autoStart: false);
      s.onClose(() => dbA.cleanup());
      const total = 150;
      for (var i = 0; i < total; i++) {
        await a.pocket.collection(s.store).put(record(name: 'r$i', qty: i));
      }
      await a.engine.start();
      await drain(a);

      final b = await s.createClient();
      await b.engine.syncNow();
      expect(await b.pocket.collection(s.store).query().all().count(), total);
      final ids = await b.pocket.collection(s.store).query().all().ids();
      expect(ids.toSet().length, total);
    }, timeout: const Timeout(Duration(seconds: 90)));

    wireTest('both clients offline-write disjoint sets, then converge',
        (s) async {
      final dbA = await tempDbPath();
      final dbB = await tempDbPath();
      final a = await s.createClient(path: dbA.path, autoStart: false);
      final b = await s.createClient(path: dbB.path, autoStart: false);
      s.onClose(() => dbA.cleanup());
      s.onClose(() => dbB.cleanup());

      for (var i = 0; i < 25; i++) {
        await a.pocket.collection(s.store).put(record(name: 'a$i', qty: i));
        await b.pocket
            .collection(s.store)
            .put(record(name: 'b$i', qty: 100 + i));
      }
      await a.engine.start();
      await b.engine.start();
      await drain(a);
      await drain(b);
      await syncBoth(a, b);

      expect(await s.countRecords(s.store), 50);
      expect(await a.pocket.collection(s.store).query().all().count(), 50);
      expect(await b.pocket.collection(s.store).query().all().count(), 50);
    }, timeout: const Timeout(Duration(seconds: 90)));

    // ---------------------------------------------------------- mock only --
    wireTest('permission flip hidden then restored', (s) async {
      final mock = (s as MockWireServer).mock;
      final a = await s.createClient();
      final id = mock.seed(
          store: 'widgets',
          id: 'a${generateRecordId().substring(1)}', // bucket 0
          data: {'name': 'v1'});
      await a.engine.syncNow();
      expect(await a.pocket.collection('widgets').get(id), isNotNull);

      mock.hideServerSide(id);
      await a.engine.invalidateVisibility();
      expect(await a.pocket.collection('widgets').get(id), isNotNull,
          reason: 'hidden, never deleted');
      expect(await a.pocket.collection('widgets').query().all().count(), 0);

      mock.restoreServerSide(id);
      await a.engine.invalidateVisibility();
      expect(await a.pocket.collection('widgets').query().all().count(), 1);
      expect((await a.pocket.collection('widgets').get(id))!['name'], 'v1');
    }, live: false);

    wireTest('batch on/off produce identical remote state', (s) async {
      Future<void> drive(MockWireServer ws) async {
        final db = await tempDbPath();
        final h = await ws.createClient(path: db.path);
        ws.onClose(() => db.cleanup());
        await h.pocket.collection('widgets').put(record(name: 'a', qty: 1));
        await h.pocket.collection('widgets').put(record(name: 'b', qty: 2));
        await h.engine.syncNow();
        final all = await h.pocket.collection('widgets').query().all().fetch();
        final aId =
            all.items.firstWhere((r) => r['name'] == 'a')['id'] as String;
        await h.pocket.collection('widgets').patch(aId, {'qty': 10});
        await h.engine.syncNow();
      }

      final on = MockWireServer();
      final off = MockWireServer();
      addTearDown(() => on.close());
      addTearDown(() => off.close());
      await on.start();
      await off.start();
      off.mock.batchEnabled = false;

      await drive(on);
      await drive(off);

      expect(on.mock.batchCalls, greaterThan(1), reason: 'batch was used');
      expect(off.mock.batchCalls, lessThanOrEqualTo(1),
          reason: 'per-record fallback used (probe only)');
      expect(on.mock.createCalls, 0, reason: 'creates went through the batch');
      expect(off.mock.createCalls, 2, reason: 'per-record creates');

      Map<String, Object?> content(Map<String, Object?> d) => {
            for (final e in d.entries)
              if (e.key != 'id') e.key: e.value,
          };
      final onState = on.mock.records.values
          .map((r) => content(r.data))
          .toList()
        ..sort((x, y) => (x['name']! as String).compareTo(y['name']! as String));
      final offState = off.mock.records.values
          .map((r) => content(r.data))
          .toList()
        ..sort((x, y) => (x['name']! as String).compareTo(y['name']! as String));
      expect(onState, offState, reason: 'identical remote state');
    }, live: false);

    wireTest('2MB boundary push fails cleanly', (s) async {
      final mock = (s as MockWireServer).mock;
      // Local ceiling lifted so the write succeeds; the SERVER (2 MB) rejects.
      final a = await s.createClient(maxDocBytes: 3000000);
      final big = 'x' * 2100000; // ~2.1 MB > server ceiling
      final id = generateRecordId();
      await a.pocket
          .collection('widgets')
          .put(record(id: id, name: 'big', meta: {'blob': big}));
      await a.engine.syncNow();

      // The push fails cleanly: dead-lettered, local payload kept, no server
      // record, and the store is not stalled. (Batch mode fails the whole
      // batch -> batch_poison; per-record mode -> validation_push.)
      expect(mock.records.containsKey(id), isFalse,
          reason: 'the oversized record never landed');
      final local = await a.pocket.collection('widgets').get(id);
      expect(local!['name'], 'big', reason: 'local copy kept');
      final dl = await a.pocket.db
          .query('lp_dead_letter', where: 'record_id = ?', whereArgs: [id]);
      expect(dl.length, 1);
      expect(dl.single['kind'], anyOf('validation_push', 'batch_poison'));
    }, live: false);
  });
}
