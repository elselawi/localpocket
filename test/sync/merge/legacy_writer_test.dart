import 'package:localpocket/src/internal/raw_surface.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';
import '../engine/engine_helpers.dart';
import '../engine/mock_backend.dart';

/// Legacy writer merge and detection tests.
void main() {
  SyncConfig convConfig() =>
      testConfig(pushDebounce: const Duration(days: 365));

  group('legacy writer merge & detection', () {
    test('detection works without any writer cooperation', () async {
      // A legacy writer directly mutates the server row without version headers/vectors
      final mock = MockSyncBackend();
      final dbA = await tempDbPath();
      final a = await EngineHarness.create(
        mock: mock,
        config: convConfig(),
        path: dbA.path,
        stores: [
          CollectionSchema(
            name: 'widgets',
            version: 1,
            fields: [
              Field.text('name'),
              Field.int('qty'),
            ],
          ),
        ],
      );
      addTearDown(() async {
        await a.close();
        await dbA.cleanup();
      });

      final id = mock.seed(store: 'widgets', data: {'name': 'orig', 'qty': 1});
      await a.engine.syncNow();

      // Client A makes local offline edit
      await a.pocket.collection('widgets').patch(id, {'name': 'clientA_name'});

      // Legacy direct server modification (e.g. admin UI or another tool)
      mock.records[id] = MockRecord(
        id: id,
        store: 'widgets',
        updated: '2026-08-14 17:00:00.000Z',
        data: {'name': 'orig', 'qty': 999}, // changed qty only
      );

      // Client A syncs: detect concurrent change via base compare + 3-way merge
      await a.engine.syncNow();

      final localDoc = await a.pocket.collection('widgets').get(id);
      final serverDoc = mock.records[id]!.data;

      // Disjoint edits merged successfully without writer cooperation
      expect(localDoc!['name'], 'clientA_name');
      expect(localDoc['qty'], 999);
      expect(serverDoc['name'], 'clientA_name');
      expect(serverDoc['qty'], 999);
      expect(await a.engine.syncStore.countPending(), 0);
    });

    test('unknown keys preserved through merge', () {
      final base = {
        'id': 'rec1',
        'name': 'base_name',
        'legacy_unknown_key': 'legacy_val',
        'extra_blob': {'unmodeled': true},
      };
      final local = {
        'id': 'rec1',
        'name': 'local_edit',
        'legacy_unknown_key': 'legacy_val',
        'extra_blob': {'unmodeled': true},
      };
      final remote = {
        'id': 'rec1',
        'name': 'base_name',
        'legacy_unknown_key': 'remote_updated_legacy_val',
        'extra_blob': {'unmodeled': true, 'server_added': 42},
        'another_unknown': 'from_server',
      };

      final res = merge3Way(base: base, local: local, remote: remote);

      // Local changed 'name'
      expect(res.merged['name'], 'local_edit');
      // Remote changed 'legacy_unknown_key'
      expect(res.merged['legacy_unknown_key'], 'remote_updated_legacy_val');
      // Remote added 'another_unknown'
      expect(res.merged['another_unknown'], 'from_server');
      // Remote modified 'extra_blob'
      expect(res.merged['extra_blob'], {'unmodeled': true, 'server_added': 42});
    });
  });
}
