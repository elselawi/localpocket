import 'package:localpocket/src/kernel/sync/sync_config.dart';
import 'package:test/test.dart';
import 'dart:math';

import '../../../support/helpers.dart';
import '../../../support/engine_helpers.dart';
import '../../../support/mock_backend.dart';

/// Two mock clients converge under concurrent edits (remote-wins merge).
///
/// The push debounce is disabled: all cycles are driven explicitly so the
/// interleaving is deterministic.
void main() {
  SyncConfig convConfig() =>
      testConfig(pushDebounce: const Duration(days: 365));

  group('two-client convergence', () {
    test('disjoint fields merge both survive', () async {
      final mock = MockSyncBackend();
      final dbA = await tempDbPath();
      final dbB = await tempDbPath();
      final a = await EngineHarness.create(
          mock: mock, config: convConfig(), path: dbA.path);
      final b = await EngineHarness.create(
          mock: mock, config: convConfig(), path: dbB.path);
      addTearDown(() async {
        await a.close();
        await b.close();
        await dbA.cleanup();
        await dbB.cleanup();
      });

      final id = mock.seed(store: 'widgets', data: {'name': 'n0', 'qty': 1});
      await a.engine.syncNow();
      await b.engine.syncNow();
      expect(await a.pocket.collection('widgets').get(id), isNotNull);
      expect(await b.pocket.collection('widgets').get(id), isNotNull);

      // Concurrent edits on disjoint fields, both based on the same version.
      await a.pocket.collection('widgets').patch(id, {'name': 'A-name'});
      await b.pocket.collection('widgets').patch(id, {'qty': 99});

      // B's push merges A's change in (3-way, disjoint fields: both survive).
      await a.engine.syncNow();
      await b.engine.syncNow();

      // A fast-forwards to the merged end state on its next pull.
      await a.engine.syncNow();

      final server = mock.records[id]!.data;
      final localA = await a.pocket.collection('widgets').get(id);
      final localB = await b.pocket.collection('widgets').get(id);
      expect(server['name'], 'A-name');
      expect(server['qty'], 99);
      expect(localA!['name'], 'A-name');
      expect(localA['qty'], 99);
      expect(localB!['name'], 'A-name');
      expect(localB['qty'], 99);
      expect(await a.engine.syncStore.countPending(), 0);
      expect(await b.engine.syncStore.countPending(), 0);
    });

    test('same field remote wins converges', () async {
      final mock = MockSyncBackend();
      final dbA = await tempDbPath();
      final dbB = await tempDbPath();
      final a = await EngineHarness.create(
          mock: mock, config: convConfig(), path: dbA.path);
      final b = await EngineHarness.create(
          mock: mock, config: convConfig(), path: dbB.path);
      addTearDown(() async {
        await a.close();
        await b.close();
        await dbA.cleanup();
        await dbB.cleanup();
      });

      final id = mock.seed(store: 'widgets', data: {'name': 'n0'});
      await a.engine.syncNow();
      await b.engine.syncNow();

      // Concurrent edits to the SAME field: D4 default = remote wins.
      await a.pocket.collection('widgets').patch(id, {'name': 'from-A'});
      await b.pocket.collection('widgets').patch(id, {'name': 'from-B'});

      await a.engine.syncNow(); // A lands first
      await b.engine.syncNow(); // B merges -> remote (A) wins
      await a.engine.syncNow(); // A re-pulls

      final localA = await a.pocket.collection('widgets').get(id);
      final localB = await b.pocket.collection('widgets').get(id);
      expect(localA!['name'], 'from-A');
      expect(localB!['name'], 'from-A', reason: 'both converge on the winner');
      expect(mock.records[id]!.data['name'], 'from-A');
      expect(await a.engine.syncStore.countPending(), 0);
      expect(await b.engine.syncStore.countPending(), 0);
    });
  });

  group('n-client random convergence', () {
    test('n client random interleavings converge', () async {
      // 3 simulated clients, random op interleavings, 1 000 iterations -> identical final documents
      final mock = MockSyncBackend();
      final db1 = await tempDbPath();
      final db2 = await tempDbPath();
      final db3 = await tempDbPath();

      final c1 = await EngineHarness.create(
          mock: mock, config: convConfig(), path: db1.path);
      final c2 = await EngineHarness.create(
          mock: mock, config: convConfig(), path: db2.path);
      final c3 = await EngineHarness.create(
          mock: mock, config: convConfig(), path: db3.path);
      final clients = [c1, c2, c3];

      addTearDown(() async {
        await c1.close();
        await c2.close();
        await c3.close();
        await db1.cleanup();
        await db2.cleanup();
        await db3.cleanup();
      });

      final id = mock.seed(store: 'widgets', data: {'name': 'root', 'qty': 0});
      for (final c in clients) {
        await c.engine.syncNow();
      }

      final rng = Random(12345);
      final fields = ['name', 'qty'];

      for (var round = 0; round < 1000; round++) {
        final action = rng.nextInt(6);
        if (action < 3) {
          final client = clients[action];
          final f = fields[rng.nextInt(fields.length)];
          if (f == 'name') {
            await client.pocket
                .collection('widgets')
                .patch(id, {'name': 'c$action-r$round'});
          } else {
            await client.pocket.collection('widgets').patch(id, {'qty': round});
          }
        } else {
          final client = clients[action - 3];
          await client.engine.syncNow();
        }
      }

      // Final quiescence sync: flush all clients
      for (var i = 0; i < 4; i++) {
        for (final c in clients) {
          await c.engine.syncNow();
        }
      }

      final doc1 = await c1.pocket.collection('widgets').get(id);
      final doc2 = await c2.pocket.collection('widgets').get(id);
      final doc3 = await c3.pocket.collection('widgets').get(id);
      final serverDoc = mock.records[id]!.data;

      expect(doc1, isNotNull);
      expect(doc2, isNotNull);
      expect(doc3, isNotNull);

      expect(doc1!['name'], equals(doc2!['name']));
      expect(doc2['name'], equals(doc3!['name']));
      expect(doc1['name'], equals(serverDoc['name']));

      expect(doc1['qty'], equals(doc2['qty']));
      expect(doc2['qty'], equals(doc3['qty']));
      expect(doc1['qty'], equals(serverDoc['qty']));

      expect(await c1.engine.syncStore.countPending(), 0);
      expect(await c2.engine.syncStore.countPending(), 0);
      expect(await c3.engine.syncStore.countPending(), 0);
    });
  });
}
