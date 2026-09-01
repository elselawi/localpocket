/// Sync-apply profile: isolates the per-record cost of applying a pulled page.
///
/// `Puller.applyNormalizedRemote` for an unknown record does, per record:
///   insert domain row + `_upsertSyncRow` (which itself re-reads
///   `lp_sync_row` before deciding insert-vs-update).
/// In a page pull the sync row was ALREADY batch-probed, so that re-read is
/// redundant. This benchmark measures three variants so the win is quantified
/// before changing code:
///   A. current apply-equivalent   : readSyncRow + insert domain + insert sync (3 stmts/rec)
///   B. prefetch-optimized         : insert domain + insert sync (2 stmts/rec)
///   C. B6-style local puts        : the existing benchmark "sync apply" path
/// Exact statement counts come from the sqflite logger.
/// Run: `dart run benchmark/profile_sync_apply.dart`
library;

import 'dart:io';

import 'package:localpocket/src/kernel/codec.dart' show encodeDbRow;
import 'package:localpocket/src/kernel/database_adapter.dart' show DirectSqliteDatabase;
import 'package:localpocket/src/kernel/ids.dart' show generateRecordId;
import 'package:localpocket/src/kernel/local_pocket.dart' show LocalPocket;

import 'persist.dart';
import 'profile_util.dart';

Future<void> main() async {
  final counter = StatementCounter();
  final tmp = await Directory.systemTemp.createTemp('lp_sa_');
  const n = 1000;

  // ---- A. current apply-equivalent (3 stmts/record) ----
  var db = await LocalPocket.open(
      path: '${tmp.path}/a.db', stores: [profileSchema()]);
  final rawDbA = db.db as DirectSqliteDatabase;
  rawDbA.onExecute = counter.onExecute;
  rawDbA.onQuery = counter.onQuery;
  final ids = <String>[];
  counter.clear();
  var sw = Stopwatch()..start();
  await db.transaction((tx) async {
    final exec = tx.executor;
    for (var i = 0; i < n; i++) {
      final id = generateRecordId();
      ids.add(id);
      // _upsertSyncRow's re-read (redundant when the puller already probed).
      await exec.rawQuery(
          'SELECT * FROM lp_sync_row WHERE store = ? AND record_id = ? LIMIT 1',
          ['widgets', id]);
      final row = encodeDbRow(profileSchema(),
          id: id, logical: profileRec(id, i), archived: false);
      await exec.insert('widgets', row);
      await exec.insert('lp_sync_row', {
        'store': 'widgets',
        'record_id': id,
        'remote_updated': '2026-01-01 00:00:00.000Z',
        'last_seen_at': 0,
        'sync_state': 'clean',
        'access_state': 'visible',
        'dirty_fields': '[]',
      });
    }
  });
  sw.stop();
  final aMs = sw.elapsedMilliseconds;
  final aStmts = counter.count;
  await db.close();

  // ---- B. prefetch-optimized (2 stmts/record) ----
  db = await LocalPocket.open(
      path: '${tmp.path}/b.db', stores: [profileSchema()]);
  final rawDbB = db.db as DirectSqliteDatabase;
  rawDbB.onExecute = counter.onExecute;
  rawDbB.onQuery = counter.onQuery;
  counter.clear();
  sw = Stopwatch()..start();
  await db.transaction((tx) async {
    final exec = tx.executor;
    for (var i = 0; i < n; i++) {
      final id = generateRecordId();
      final row = encodeDbRow(profileSchema(),
          id: id, logical: profileRec(id, i), archived: false);
      await exec.insert('widgets', row);
      await exec.insert('lp_sync_row', {
        'store': 'widgets',
        'record_id': id,
        'remote_updated': '2026-01-01 00:00:00.000Z',
        'last_seen_at': 0,
        'sync_state': 'clean',
        'access_state': 'visible',
        'dirty_fields': '[]',
      });
    }
  });
  sw.stop();
  final bMs = sw.elapsedMilliseconds;
  final bStmts = counter.count;
  await db.close();

  // ---- C. B6-style local puts (existing benchmark path) ----
  db = await LocalPocket.open(
      path: '${tmp.path}/c.db', stores: [profileSchema()]);
  counter.clear();
  sw = Stopwatch()..start();
  await db.transaction((tx) async {
    for (var i = 0; i < n; i++) {
      await tx.collection('widgets').put(profileRec(generateRecordId(), i));
    }
  });
  sw.stop();
  final cMs = sw.elapsedMilliseconds;
  final cStmts = counter.count;
  await db.close();

  try {
    await tmp.delete(recursive: true);
  } catch (_) {}

  stdout.writeln('=== sync-apply profile ($n records, one txn) ===');
  stdout.writeln(
      'A current (3 stmts/rec)   : ${aMs}ms  stmts=$aStmts (${aStmts ~/ n}/rec)');
  stdout.writeln(
      'B prefetch-opt (2 stmts)  : ${bMs}ms  stmts=$bStmts (${bStmts ~/ n}/rec)');
  stdout.writeln(
      'C B6-style puts           : ${cMs}ms  stmts=$cStmts (${cStmts ~/ n}/rec)');
  stdout.writeln(
      'A->B statement reduction : ${aStmts - bStmts} (${((aStmts - bStmts) / aStmts * 100).toStringAsFixed(0)}%)');

  await persistProfile('sync_apply', {
    'meta': buildMeta(sqliteVersion: '3.53.4'),
    'records': n,
    'currentMs': aMs,
    'prefetchOptMs': bMs,
    'b6StyleMs': cMs,
    'currentStmts': aStmts,
    'prefetchOptStmts': bStmts,
    'b6StyleStmts': cStmts,
  });
}
