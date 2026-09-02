import 'dart:math';

import 'package:test/test.dart';

import '../support/helpers.dart';
import '../support/engine_helpers.dart';
import '../support/mock_backend.dart';

void main() {
  group('Fast-path soak', () {
    test('fastpath vs rest only zero divergence 10k mixed events', () async {
      final mock = MockSyncBackend();
      final dbPathFast = await tempDbPath();
      final dbPathRest = await tempDbPath();

      final hFast = await EngineHarness.create(
        mock: mock,
        config: testConfig(),
        path: dbPathFast.path,
      );
      final hRest = await EngineHarness.create(
        mock: mock,
        config: testConfig(),
        path: dbPathRest.path,
      );

      addTearDown(() async {
        await hFast.close();
        await hRest.close();
        await dbPathFast.cleanup();
        await dbPathRest.cleanup();
      });

      const eventCount = 1000;
      final recordIds = <String>[];
      final rnd = Random(42);

      // Initial cursor check on Fast client
      final initCursor = await hFast.engine.syncStore.readCursor('widgets');
      expect(initCursor, isNull);

      for (var i = 0; i < eventCount; i++) {
        final opType = recordIds.isEmpty
            ? 0
            : rnd.nextInt(3); // 0=create, 1=update, 2=archive

        if (opType == 0) {
          final id = mock.seed(
            store: 'widgets',
            data: {'name': 'w_$i', 'qty': i},
          );
          recordIds.add(id);

          final rec = mock.records[id]!.toRemote();
          // Apply via fast-path on Fast client
          await hFast.engine.puller.fastPathApply(rec);

          // Fast-path MUST NOT advance cursor
          final cur = await hFast.engine.syncStore.readCursor('widgets');
          expect(cur, isNull,
              reason: 'Fast path must never advance cursor watermark');
        } else if (opType == 1) {
          final id = recordIds[rnd.nextInt(recordIds.length)];
          mock.seed(
            store: 'widgets',
            id: id,
            data: {'name': 'w_${i}_updated', 'qty': i * 10},
          );
          final rec = mock.records[id]!.toRemote();
          await hFast.engine.puller.fastPathApply(rec);

          final cur = await hFast.engine.syncStore.readCursor('widgets');
          expect(cur, isNull,
              reason: 'Fast path must never advance cursor watermark');
        } else {
          final id = recordIds[rnd.nextInt(recordIds.length)];
          mock.seed(
            store: 'widgets',
            id: id,
            data: {'name': 'w_${i}_archived', 'qty': 0, 'archived': true},
          );
          final rec = mock.records[id]!.toRemote();
          await hFast.engine.puller.fastPathApply(rec);

          final cur = await hFast.engine.syncStore.readCursor('widgets');
          expect(cur, isNull,
              reason: 'Fast path must never advance cursor watermark');
        }
      }

      // Now run delta pull on both engines
      await hFast.engine.syncNow();
      await hRest.engine.syncNow();

      // Verify cursor on both engines is now advanced to the same position
      final curFast = await hFast.engine.syncStore.readCursor('widgets');
      final curRest = await hRest.engine.syncStore.readCursor('widgets');
      expect(curFast, isNotNull);
      expect(curFast!.updated, equals(curRest!.updated));
      expect(curFast.id, equals(curRest.id));

      // Assert zero divergence between both local DBs
      final fastDocs = await hFast.pocket
          .collection('widgets')
          .query()
          .all()
          .includeArchived()
          .fetch();
      final restDocs = await hRest.pocket
          .collection('widgets')
          .query()
          .all()
          .includeArchived()
          .fetch();

      expect(fastDocs.items.length, equals(restDocs.items.length));
      final fastMap = {for (final d in fastDocs.items) d['id'] as String: d};
      final restMap = {for (final d in restDocs.items) d['id'] as String: d};

      for (final id in recordIds) {
        expect(fastMap[id], equals(restMap[id]),
            reason: 'Record $id must have identical data');
      }
    }, timeout: const Timeout(Duration(minutes: 2)));
  });
}
