import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import '../sync/engine/engine_helpers.dart';
import '../sync/engine/mock_backend.dart';

/// Regression guards for the hot-path optimizations (point-read, sync-apply):
///  - `Collection.get` must be a single SQL round-trip (a plain indexed
///    `SELECT * WHERE id = ?` for version-1 schemas; for migrated schemas the
///    domain row carries `schema_ver` via one LEFT JOIN);
///  - a pull apply must reuse the batch-probed sync state and never issue a
///    per-record `lp_sync_row` point read, so applying a page costs exactly
///    one domain insert + one sync-row insert per record.
///
/// These are deterministic statement-count guards (no timing), so they catch
/// the shared-abstraction costs without flaky timing assertions.
void main() {
  group('hot-path statement guards', () {
    test('get() issues exactly one SQL round-trip', () async {
      final stmts = <String>[];
      final t = await tempDbPath();
      final pocket = await openPocket(
        path: t.path,
        stores: [widgetsSchema()],
      );
      final db = pocket.db as DirectSqliteDatabase;
      db.onExecute = (sql, _) => stmts.add(sql);
      db.onQuery = (sql, _) => stmts.add(sql);
      addTearDown(() async {
        await pocket.close();
        await t.cleanup();
      });
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'x', qty: 1));

      stmts.clear();
      final r = await pocket.collection('widgets').get(id);
      expect(r!['name'], 'x');

      final nonPragma = stmts.where((s) => !s.startsWith('PRAGMA')).toList();
      expect(nonPragma, hasLength(1),
          reason: 'get() must be a single SQL round-trip');
      expect(nonPragma.single, contains('SELECT * FROM'),
          reason: 'a version-1 schema needs no schema_ver join');
      expect(nonPragma.single, isNot(contains('lp_sync_row')),
          reason: 'v1 point reads skip the schema_ver join entirely');
    });

    test('get() on a migrated schema rides schema_ver in the same query',
        () async {
      final stmts = <String>[];
      final t = await tempDbPath();
      final pocket = await openPocket(
        path: t.path,
        stores: [widgetsSchema(version: 2)],
      );
      final db = pocket.db as DirectSqliteDatabase;
      db.onExecute = (sql, _) => stmts.add(sql);
      db.onQuery = (sql, _) => stmts.add(sql);
      addTearDown(() async {
        await pocket.close();
        await t.cleanup();
      });
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'x', qty: 1));

      stmts.clear();
      final r = await pocket.collection('widgets').get(id);
      expect(r!['name'], 'x');

      final nonPragma = stmts.where((s) => !s.startsWith('PRAGMA')).toList();
      expect(nonPragma, hasLength(1),
          reason: 'get() must be a single SQL round-trip');
      expect(nonPragma.single, contains('LEFT JOIN lp_sync_row'),
          reason: 'schema_ver must ride the same query as the domain row');
      expect(nonPragma.single, contains('lp_schema_ver'));
    });

    test('pull apply reuses prefetched sync state (no per-record reads)',
        () async {
      final stmts = <String>[];
      final t = await tempDbPath();
      final h = await EngineHarness.create(
        mock: MockSyncBackend(),
        path: t.path,
      );
      final db = h.pocket.db as DirectSqliteDatabase;
      db.onExecute = (sql, _) => stmts.add(sql);
      db.onQuery = (sql, _) => stmts.add(sql);
      addTearDown(() async {
        await h.close();
        await t.cleanup();
      });

      const total = 80;
      for (var i = 0; i < total; i++) {
        h.mock.seed(
            store: 'widgets', data: {'name': 'n$i', 'qty': i, 'phone': 'p$i'});
      }

      stmts.clear();
      final report = await h.engine.puller.pullStore('widgets');
      expect(report.applied, total);

      // The page probe uses `record_id IN (...)`, never a per-record point
      // read (aggregate COUNT(*) status queries are a fixed engine cost and
      // excluded). Any per-record `lp_sync_row` read during apply means the
      // prefetch was dropped.
      final pointSyncReads = stmts
          .where((s) =>
              s.contains('SELECT') &&
              s.contains('lp_sync_row') &&
              s.contains('record_id = ?') &&
              !s.contains('IN ('))
          .length;
      expect(pointSyncReads, 0,
          reason: '_upsertSyncRow must reuse the prefetched sync row');

      // Writes: exactly one domain insert + one sync-row insert per applied
      // record (2 statements/record after the redundant read was removed).
      final domainInserts = stmts
          .where((s) =>
              s.startsWith('INSERT') &&
              (s.contains('INTO widgets') || s.contains('INTO "widgets"')))
          .length;
      expect(domainInserts, total,
          reason: 'exactly one domain insert per applied record');
      final syncInserts = stmts
          .where((s) =>
              s.startsWith('INSERT') &&
              (s.contains('lp_sync_row') || s.contains('"lp_sync_row"')))
          .length;
      expect(syncInserts, total,
          reason: 'exactly one sync-row insert per applied record');
    });
  });
}
