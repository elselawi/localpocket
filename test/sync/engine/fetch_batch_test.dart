import 'package:localpocket/localpocket.dart';
import 'package:localpocket/sync.dart';
import 'package:sqlite3/sqlite3.dart' as sqlite;
import 'package:test/test.dart';

import '../../support/helpers.dart';
import 'engine_helpers.dart';
import 'mock_backend.dart';

/// Sweep self-heal full fetches are chunked so no single statement or
/// transaction balloons:
/// - `Puller.fetchBatch` processes `batchSize` (default 200) records per
///   transaction; a larger id set runs one probe pass + one apply transaction
///   per chunk.
/// - the internal row probe (`_probeBatchRows`) never builds an `IN` clause
///   with more than 500 ids, even when a single batch is much larger.
///
/// The probe statements are observable through the injected database's
/// `onQuery` hook: every probe emits one `lp_sync_row` + one domain-table
/// query per chunk, each carrying exactly the chunk's ids.
void main() {
  Future<(LocalPocket, SyncEngine, MockSyncBackend, List<int>)>
      harness() async {
    final probeSizes = <int>[];
    final db = DirectSqliteDatabase(sqlite.sqlite3.openInMemory());
    db.onQuery = (sql, _) {
      // Count the placeholders inside each `IN (...)` group. The lp_sync_row
      // probe also binds `store` before the group, so params.length would be
      // ids + 1 — the SQL text is the unambiguous source of the chunk size.
      final inIdx = sql.indexOf(' IN (');
      if (inIdx == -1) return;
      final start = inIdx + ' IN ('.length;
      final end = sql.indexOf(')', start);
      probeSizes.add('?'.allMatches(sql.substring(start, end)).length);
    };
    final pocket = await openPocket(database: db);
    final mock = MockSyncBackend();
    final engine =
        SyncEngine(pocket: pocket, backend: mock, config: testConfig());
    return (pocket, engine, mock, probeSizes);
  }

  List<String> seedIds(MockSyncBackend mock, int n) => [
        for (var i = 0; i < n; i++)
          mock.seed(store: 'widgets', data: {'name': 'n$i', 'qty': i}),
      ];

  Future<int> domainCount(LocalPocket pocket) async =>
      firstInt(await pocket.db.rawQuery('SELECT COUNT(*) AS c FROM widgets'))!;

  Future<int> cleanCount(LocalPocket pocket) async =>
      firstInt(await pocket.db.rawQuery(
          "SELECT COUNT(*) AS c FROM lp_sync_row WHERE sync_state = 'clean'"))!;

  test('fetchBatch applies every id in batchSize-sized chunks', () async {
    final (pocket, engine, mock, probeSizes) = await harness();
    addTearDown(pocket.close);
    final ids = seedIds(mock, 450);

    await engine.puller.fetchBatch('widgets', ids);

    expect(await domainCount(pocket), 450,
        reason: 'every fetched record is applied to the domain table');
    expect(await cleanCount(pocket), 450,
        reason: 'every applied record settles as clean');
    // 450 ids with the default batchSize of 200 -> 3 chunks, one probe pass
    // (2 IN statements) per chunk.
    expect(probeSizes, hasLength(6),
        reason: 'one lp_sync_row + one domain probe per chunk');
    expect(probeSizes.reduce((a, b) => a > b ? a : b), 200,
        reason: 'no probe statement ever carries more than batchSize ids');
    expect(probeSizes.where((n) => n == 200), hasLength(4),
        reason: 'two full chunks of 200 ids');
    expect(probeSizes.where((n) => n == 50), hasLength(2),
        reason: 'one trailing chunk of 50 ids');
  });

  test('the row probe never exceeds 500 ids per statement', () async {
    final (pocket, engine, mock, probeSizes) = await harness();
    addTearDown(pocket.close);
    final ids = seedIds(mock, 1200);

    // A single batch of 1200 ids still probes in 500-id slices.
    await engine.puller.fetchBatch('widgets', ids, batchSize: 1200);

    expect(await domainCount(pocket), 1200,
        reason: 'all 1200 records applied despite the oversized batch');
    expect(await cleanCount(pocket), 1200);
    expect(probeSizes.reduce((a, b) => a > b ? a : b), 500,
        reason: 'the probe chunks at 500 ids, never the full batch');
    expect(probeSizes.where((n) => n == 500), hasLength(4),
        reason: 'two probe passes of two statements each at the 500-id cap');
    expect(probeSizes.where((n) => n == 200), hasLength(2),
        reason: 'the trailing 200-id slice');
  });

  test('fetchBatch with no ids is a no-op', () async {
    final (pocket, engine, mock, probeSizes) = await harness();
    addTearDown(pocket.close);

    await engine.puller.fetchBatch('widgets', const []);

    expect(await domainCount(pocket), 0);
    expect(probeSizes, isEmpty, reason: 'no probe runs for an empty id set');
  });
}
