import 'package:localpocket/src/kernel/ids.dart';
import 'package:localpocket/src/kernel/local_pocket.dart';
import 'package:localpocket/src/kernel/sync/sync_backend.dart';
import 'package:localpocket/src/kernel/sync/sync_tables.dart';
import 'package:test/test.dart';

import '../../../support/engine_helpers.dart';
import '../../../support/mock_backend.dart';

/// Corrupt persisted payloads (`base_json` / `payload_json`) must surface as
/// a quarantine (pull) or a dead letter (push), never as a silent empty-map
/// merge ("record with no fields" / "remote deleted everything").
void main() {
  Future<SyncRowState?> sr(LocalPocket pocket, String id) =>
      pocket.outbox.readSyncRow(pocket.db, 'widgets', id);

  Future<List<Map<String, Object?>>> deadLetters(LocalPocket pocket,
          {String? kind}) =>
      pocket.db.query('lp_dead_letter',
          where: kind == null ? null : 'kind = ?',
          whereArgs: kind == null ? null : [kind],
          orderBy: 'at ASC');

  Future<void> corruptBaseJson(LocalPocket pocket, String id) =>
      pocket.db.execute(
          "UPDATE lp_sync_row SET base_json = '{broken' "
          "WHERE store = 'widgets' AND record_id = ?",
          [id]);

  group('pull with a corrupt base', () {
    test('quarantines instead of merging as an empty record', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);

      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow(); // pull -> clean local v1

      await h.pocket.collection('widgets').patch(id, {'name': 'local_v2'});
      h.mock.mutate(id, {'name': 'remote_v2', 'qty': 2});
      await corruptBaseJson(h.pocket, id);

      await h.engine.syncNow();

      // The local edit survives: no empty-payload merge overwrote the domain.
      final local = await h.pocket.collection('widgets').get(id);
      expect(local!['name'], 'local_v2',
          reason: 'the domain row was never merged against an empty base');

      final row = await sr(h.pocket, id);
      expect(row!.syncState, SyncState.quarantine,
          reason: 'corrupt base quarantines the record');
      expect(row.lastError, contains('Corrupt payload JSON'));

      final dl = await deadLetters(h.pocket, kind: 'map_failure');
      expect(dl.single['record_id'], id);
      expect(dl.single['error'], contains('Corrupt payload JSON'));
    });
  });

  group('push with a corrupt base', () {
    Future<void> seedDirtyWithCorruptBase(EngineHarness h, String id) async {
      h.mock.seed(store: 'widgets', id: id, data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow(); // pull -> clean
      await h.pocket.collection('widgets').patch(id, {'name': 'local_v2'});
      // Keep the pull from seeing the concurrent change (push-only isolation).
      h.mock.script('listChanges', [MockReturn(const <RemoteRecord>[])]);
      h.mock.mutate(id, {'name': 'remote_v2', 'qty': 2});
      await corruptBaseJson(h.pocket, id);
    }

    test('per-record path dead-letters instead of pushing an empty merge',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);

      final id = generateRecordId();
      await seedDirtyWithCorruptBase(h, id);

      final report = await h.engine.syncNow();

      expect(report.deadLettered, 1,
          reason: 'corrupt base dead-letters the local op');
      expect(report.pushed, 0);

      final row = await sr(h.pocket, id);
      expect(row!.syncState, SyncState.error);
      expect(row.lastError, contains('Corrupt payload JSON'));

      final dl = await deadLetters(h.pocket, kind: 'corrupt_payload');
      expect(dl.single['record_id'], id);

      // The remote record was NOT overwritten with an empty merge.
      expect(h.mock.records[id]!.data['name'], 'remote_v2');
      expect(h.mock.records[id]!.data['qty'], 2);
    });

    test('batch preflight path dead-letters instead of an empty merge',
        () async {
      final mock = MockSyncBackend()..batchEnabled = true;
      final h = await EngineHarness.create(mock: mock);
      addTearDown(h.close);

      final id = generateRecordId();
      await seedDirtyWithCorruptBase(h, id);

      final report = await h.engine.syncNow();

      expect(report.deadLettered, 1,
          reason: 'corrupt base dead-letters during batch preflight');
      expect(report.pushed, 0);

      final row = await sr(h.pocket, id);
      expect(row!.syncState, SyncState.error);
      expect(row.lastError, contains('Corrupt payload JSON'));

      final dl = await deadLetters(h.pocket, kind: 'corrupt_payload');
      expect(dl.single['record_id'], id);

      expect(h.mock.records[id]!.data['name'], 'remote_v2',
          reason: 'the remote record was not overwritten with an empty merge');
    });
  });
}
