/// Four-mode performance harness.
///
/// Measures 100K bulk insert in the four modes with 10K-record chunks
/// (the measured sweet spot):
///   A. Bare SQLite      — one domain table, `NORMAL`, no sync metadata.
///   B. Sync-equivalent  — domain + lp_outbox + lp_sync_row, `NORMAL`, raw
///                          Batch (canonical JSON built inline, no LocalPocket
///                          logic).
///   C. LocalPocket normal — full LocalPocket, `DurabilityClass.normal`,
///                          `putAll`.
///   D. LocalPocket full   — full LocalPocket, `DurabilityClass.full`,
///                          `putAll`.
///
/// The gap A→B is the sync-journaling contract cost; B→D is removable
/// implementation overhead. Results are persisted as a timestamped JSON file
/// under `benchmark/results/`.
///
/// Run: `dart run benchmark/four_mode_harness.dart`
library;

import 'dart:io';

import 'package:localpocket/src/internal/raw_surface.dart';
import 'package:sqlite3/sqlite3.dart' as sqlite;

import 'persist.dart';

const _ddl = [
  'CREATE TABLE IF NOT EXISTS widgets ('
      'id TEXT PRIMARY KEY, name TEXT, qty INTEGER, phone TEXT, '
      'archived INTEGER, hidden INTEGER, extra TEXT)',
  'CREATE TABLE IF NOT EXISTS lp_outbox ('
      'store TEXT NOT NULL, record_id TEXT NOT NULL, kind TEXT, '
      'payload_json TEXT, base_updated TEXT, base_hash TEXT, '
      'dirty_fields TEXT, op_id TEXT, created_at INTEGER, updated_at INTEGER, '
      'depends_on_op TEXT, PRIMARY KEY (store, record_id))',
  'CREATE TABLE IF NOT EXISTS lp_sync_row ('
      'store TEXT NOT NULL, record_id TEXT NOT NULL, remote_updated TEXT, '
      'last_seen_at INTEGER, base_updated TEXT, base_hash TEXT, base_json TEXT, '
      'sync_state TEXT, dirty_fields TEXT, local_rev INTEGER, access_state TEXT, '
      'op_id TEXT, attempt_count INTEGER, next_retry_at INTEGER, '
      'last_error TEXT, schema_ver INTEGER, PRIMARY KEY (store, record_id))',
];

CollectionSchema<Object?> schema() => CollectionSchema(
      name: 'widgets',
      version: 1,
      fields: [
        Field.text('name', required: true),
        Field.int('qty'),
        Field.text('phone'),
      ],
      indexes: const [
        IndexSpec(['qty'])
      ],
    );

Map<String, Object?> rec(String id, int i) =>
    {'id': id, 'name': 'name-$i', 'qty': i, 'phone': 'p$i'};

const int n = 100000;
const int chunk = 10000;

Future<Map<String, Object?>> main() async {
  final tmp = await Directory.systemTemp.createTemp('lp_4mode_');

  // ---- A. Bare SQLite (1 table, NORMAL) ----
  final aDb = sqlite.sqlite3.open('${tmp.path}/a.db');
  aDb.execute('PRAGMA journal_mode=WAL');
  aDb.execute('PRAGMA synchronous=NORMAL');
  aDb.execute(_ddl[0]);
  final aStmt = aDb.prepare(
      'INSERT INTO widgets (id, name, qty, phone, archived, hidden, extra) VALUES (?, ?, ?, ?, ?, ?, ?)');
  var sw = Stopwatch()..start();
  for (var start = 0; start < n; start += chunk) {
    aDb.execute('BEGIN');
    for (var i = start; i < start + chunk && i < n; i++) {
      aStmt.execute([
        generateRecordId(),
        'name-$i',
        i,
        'p$i',
        0,
        0,
        '',
      ]);
    }
    aDb.execute('COMMIT');
  }
  sw.stop();
  aStmt.close();
  final aMs = sw.elapsedMilliseconds;
  aDb.close();

  // ---- B. Sync-equivalent (3 tables, NORMAL, raw Batch) ----
  final bDb = sqlite.sqlite3.open('${tmp.path}/b.db');
  bDb.execute('PRAGMA journal_mode=WAL');
  bDb.execute('PRAGMA synchronous=NORMAL');
  for (final d in _ddl) {
    bDb.execute(d);
  }
  final bStmt1 = bDb.prepare(
      'INSERT INTO widgets (id, name, qty, phone, archived, hidden, extra) VALUES (?, ?, ?, ?, ?, ?, ?)');
  final bStmt2 = bDb.prepare(
      'INSERT INTO lp_outbox (store, record_id, kind, payload_json, base_updated, base_hash, dirty_fields, op_id, created_at, updated_at, depends_on_op) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
  final bStmt3 = bDb.prepare(
      'INSERT INTO lp_sync_row (store, record_id, remote_updated, last_seen_at, base_updated, base_hash, base_json, sync_state, dirty_fields, local_rev, access_state, op_id, attempt_count, next_retry_at, last_error, schema_ver) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
  sw = Stopwatch()..start();
  for (var start = 0; start < n; start += chunk) {
    bDb.execute('BEGIN');
    for (var i = start; i < start + chunk && i < n; i++) {
      final id = generateRecordId();
      final payload =
          '{"archived":false,"id":"$id","name":"name-$i","qty":$i,"phone":"p$i"}';
      bStmt1.execute([id, 'name-$i', i, 'p$i', 0, 0, '']);
      bStmt2.execute([
        'widgets',
        id,
        'upsert',
        payload,
        null,
        '',
        '["*"]',
        id,
        0,
        0,
        null
      ]);
      bStmt3.execute([
        'widgets',
        id,
        null,
        0,
        null,
        '',
        null,
        'dirty',
        '["*"]',
        1,
        'visible',
        id,
        0,
        0,
        null,
        1
      ]);
    }
    bDb.execute('COMMIT');
  }
  sw.stop();
  bStmt1.close();
  bStmt2.close();
  bStmt3.close();
  final bMs = sw.elapsedMilliseconds;
  bDb.close();

  // ---- C. LocalPocket, DurabilityClass.normal, putAll ----
  final cDb =
      await LocalPocket.open(path: '${tmp.path}/c.db', stores: [schema()]);
  sw = Stopwatch()..start();
  for (var start = 0; start < n; start += chunk) {
    final recs = [
      for (var i = start; i < start + chunk && i < n; i++)
        rec(generateRecordId(), i),
    ];
    await cDb.transaction((tx) => tx.collection('widgets').putAll(recs),
        durability: DurabilityClass.normal);
  }
  sw.stop();
  final cMs = sw.elapsedMilliseconds;
  final cRows =
      (await cDb.db.rawQuery('SELECT COUNT(*) AS c FROM widgets')).first['c'];
  await cDb.close();

  // ---- D. LocalPocket, DurabilityClass.full (default), putAll ----
  final dDb =
      await LocalPocket.open(path: '${tmp.path}/d.db', stores: [schema()]);
  sw = Stopwatch()..start();
  for (var start = 0; start < n; start += chunk) {
    final recs = [
      for (var i = start; i < start + chunk && i < n; i++)
        rec(generateRecordId(), i),
    ];
    await dDb.transaction((tx) => tx.collection('widgets').putAll(recs));
  }
  sw.stop();
  final dMs = sw.elapsedMilliseconds;
  final dRows =
      (await dDb.db.rawQuery('SELECT COUNT(*) AS c FROM widgets')).first['c'];
  await dDb.close();

  try {
    await tmp.delete(recursive: true);
  } catch (_) {}

  int perSec(int ms) => (n / (ms / 1000)).round();
  stdout.writeln('=== 100K bulk insert, four-mode harness (10K chunks) ===');
  stdout.writeln('A bare 1-table NORMAL      : ${aMs}ms (${perSec(aMs)}/s)');
  stdout.writeln('B sync-equiv 3-table NORMAL: ${bMs}ms (${perSec(bMs)}/s)');
  stdout.writeln(
      'C LocalPocket NORMAL       : ${cMs}ms (${perSec(cMs)}/s) rows=$cRows');
  stdout.writeln(
      'D LocalPocket FULL         : ${dMs}ms (${perSec(dMs)}/s) rows=$dRows');
  stdout.writeln('B/A contract cost  : ${(bMs / aMs).toStringAsFixed(1)}x');
  stdout.writeln(
      'D/B impl overhead  : ${(dMs / bMs).toStringAsFixed(1)}x (LocalPocket vs raw 3-table)');
  stdout.writeln('C/D durability     : ${(dMs / cMs).toStringAsFixed(1)}x');

  final payload = <String, Object?>{
    'benchmark': 'localpocket/four_mode_harness',
    'meta': buildMeta(sqliteVersion: '3.53.4'),
    'records': n,
    'chunk': chunk,
    'results': {
      'A_bare_1table_NORMAL_ms': aMs,
      'B_sync_equiv_3table_NORMAL_ms': bMs,
      'C_localpocket_NORMAL_ms': cMs,
      'D_localpocket_FULL_ms': dMs,
    },
    'ratios': {
      'B_over_A_contract': double.parse((bMs / aMs).toStringAsFixed(2)),
      'D_over_B_impl': double.parse((dMs / bMs).toStringAsFixed(2)),
      'D_over_C_durability': double.parse((dMs / cMs).toStringAsFixed(2)),
    },
  };
  final f = await writeJsonResults('four_mode', payload);
  stdout.writeln('Results written to ${f.path}');
  return payload;
}
