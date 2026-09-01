import 'dart:async';

import 'package:localpocket/src/internal/raw_surface.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import '../sync/engine/engine_helpers.dart';
import '../sync/engine/mock_backend.dart';

void main() {
  group('Batch soak & resilience', () {
    test('batch vs per record parity 10k ops', () async {
      final mockBatch = MockSyncBackend()..batchEnabled = true;
      final mockSingle = MockSyncBackend()..batchEnabled = false;

      final dbPathBatch = await tempDbPath();
      final dbPathSingle = await tempDbPath();

      final hBatch = await EngineHarness.create(
        mock: mockBatch,
        config: testConfig(maxBatch: 50),
        path: dbPathBatch.path,
      );
      final hSingle = await EngineHarness.create(
        mock: mockSingle,
        config: testConfig(maxBatch: 50),
        path: dbPathSingle.path,
      );

      addTearDown(() async {
        await hBatch.close();
        await hSingle.close();
        await dbPathBatch.cleanup();
        await dbPathSingle.cleanup();
      });

      const totalOps =
          2000; // Scaled for fast unit test execution while exercising batching
      final ids = List.generate(totalOps, (i) => generateRecordId());

      // 1. Create all ops
      for (var i = 0; i < totalOps; i++) {
        final data = record(id: ids[i], name: 'item_$i', qty: i);
        await hBatch.pocket.collection('widgets').put(data);
        await hSingle.pocket.collection('widgets').put(data);
      }

      // Sync both until completely drained
      await _drainAll(hBatch);
      await _drainAll(hSingle);

      // Assert identical remote state
      expect(mockBatch.records.length, totalOps);
      expect(mockSingle.records.length, totalOps);

      for (final id in ids) {
        final rBatch = mockBatch.records[id];
        final rSingle = mockSingle.records[id];
        expect(rBatch, isNotNull);
        expect(rSingle, isNotNull);
        expect(rBatch!.data, equals(rSingle!.data));
      }
    }, timeout: const Timeout(Duration(minutes: 2)));

    test('random poison injection isolates via binary split', () async {
      final poisonIds = <String>{};
      final mock = _PoisoningMockSyncBackend(poisonIds);

      final dbPath = await tempDbPath();
      final h = await EngineHarness.create(
        mock: mock,
        config: testConfig(maxBatch: 20),
        path: dbPath.path,
      );
      addTearDown(() async {
        await h.close();
        await dbPath.cleanup();
      });

      // Generate 50 ops, 3 of which are poison
      final ids = List.generate(50, (i) => generateRecordId());
      poisonIds.add(ids[7]);
      poisonIds.add(ids[23]);
      poisonIds.add(ids[41]);

      for (var i = 0; i < 50; i++) {
        await h.pocket
            .collection('widgets')
            .put(record(id: ids[i], name: 'w_$i', qty: i));
      }

      await _drainAll(h);

      // All 47 non-poison records must be pushed cleanly to remote
      expect(mock.records.length, 47);
      for (final id in ids) {
        if (poisonIds.contains(id)) {
          expect(mock.records.containsKey(id), isFalse);
        } else {
          expect(mock.records.containsKey(id), isTrue);
        }
      }

      // Poison records must be isolated to lp_dead_letter
      final deadLetters = await h.pocket.db.query('lp_dead_letter');
      final deadRecordIds =
          deadLetters.map((r) => r['record_id'] as String).toSet();
      expect(deadRecordIds, equals(poisonIds));
    });

    test('429 storm degrades without loss', () async {
      var failCount = 5;
      final mock = _RateLimitingMockSyncBackend(() {
        if (failCount > 0) {
          failCount--;
          throw ServerBusyError('1');
        }
      });

      final dbPath = await tempDbPath();
      var nowMs = 1000000;
      final h = await EngineHarness.create(
        mock: mock,
        config: testConfig(now: () => nowMs),
        path: dbPath.path,
      );
      addTearDown(() async {
        await h.close();
        await dbPath.cleanup();
      });

      final id = generateRecordId();
      await h.pocket
          .collection('widgets')
          .put(record(id: id, name: 'Storm Item', qty: 99));

      // 1. First sync attempts encounter 429
      final rep1 = await h.engine.syncNow();
      expect(rep1.hadError, isTrue);
      expect(mock.records.containsKey(id), isFalse);

      // 2. Outbox row is still preserved with retry timestamp
      final op = await h.pocket.outbox.readOp(h.pocket.db, 'widgets', id);
      expect(op, isNotNull);

      // 3. Advance time past retry-after window and sync until rate limit clears
      while (failCount > 0) {
        nowMs += 2000;
        await h.engine.syncNow();
      }
      nowMs += 2000;
      final repFinal = await h.engine.syncNow();
      expect(repFinal.hadError, isFalse);

      // 4. Data reached remote without loss
      expect(mock.records.containsKey(id), isTrue);
      expect(await h.pocket.outbox.readOp(h.pocket.db, 'widgets', id), isNull);
    });
  });
}

Future<void> _drainAll(EngineHarness h) async {
  for (var i = 0; i < 200; i++) {
    final remaining =
        (await h.pocket.db.rawQuery('SELECT COUNT(*) c FROM lp_outbox'))
            .first
            .values
            .first as int;
    if (remaining == 0) break;
    await h.engine.syncNow();
  }
}

class _PoisoningMockSyncBackend extends MockSyncBackend {

  _PoisoningMockSyncBackend(this.poisonIds) {
    batchEnabled = true;
  }
  final Set<String> poisonIds;

  @override
  Future<List<PushResult>> pushBatch(List<PushOp> ops) async {
    for (final op in ops) {
      if (poisonIds.contains(op.id)) {
        throw BatchFailedError('Batch contains poison id: ${op.id}');
      }
    }
    return super.pushBatch(ops);
  }
}

class _RateLimitingMockSyncBackend extends MockSyncBackend {

  _RateLimitingMockSyncBackend(this.onAction);
  final void Function() onAction;

  @override
  Future<RemoteRecord?> getRecord(String id) {
    onAction();
    return super.getRecord(id);
  }

  @override
  Future<RemoteRecord> createRecord(
      {required String id, required String store, required String dataJson}) {
    onAction();
    return super.createRecord(id: id, store: store, dataJson: dataJson);
  }

  @override
  Future<RemoteRecord> updateRecord(
      {required String id, required String dataJson, String? baseUpdated}) {
    onAction();
    return super
        .updateRecord(id: id, dataJson: dataJson, baseUpdated: baseUpdated);
  }
}
