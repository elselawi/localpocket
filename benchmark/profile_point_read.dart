/// Point-read (`Collection.get`) stage-attribution profile.
///
/// Isolates where a point read spends its time on a 100K file-backed store:
///   - full `col.get(id)` (the public API — 2 SQL round-trips + decode),
///   - the raw domain `SELECT ... WHERE id = ?`,
///   - `decodeDbRow` alone,
///   - `readSyncRow` (the second round-trip, used only for the lazy-migration
///     `schema_ver` check),
///   - a hypothetical single-round-trip `LEFT JOIN lp_sync_row` read that
///     returns `schema_ver` in the same query.
///
/// Also counts exact SQL statements per `get()` via the sqflite logger.
/// Run: `dart run benchmark/profile_point_read.dart`
library;

import 'dart:io';

import 'package:localpocket/src/kernel/codec.dart' show decodeDbRow;
import 'package:localpocket/src/kernel/database_adapter.dart' show DirectSqliteDatabase;
import 'package:localpocket/src/kernel/ids.dart' show generateRecordId;
import 'package:localpocket/src/kernel/local_pocket.dart' show LocalPocket;

import 'persist.dart';
import 'profile_util.dart';

Future<void> main() async {
  final counter = StatementCounter();
  final tmp = await Directory.systemTemp.createTemp('lp_pr_');
  final db = await LocalPocket.open(
      path: '${tmp.path}/p.db', stores: [profileSchema()]);
  final col = db.collection('widgets');

  const n = 100000;
  final ids = <String>[];
  for (var start = 0; start < n; start += 10000) {
    final recs = [
      for (var i = start; i < start + 10000; i++)
        profileRec(generateRecordId(), i),
    ];
    await db.transaction((tx) async {
      await tx.collection('widgets').putAll(recs);
      ids.addAll(recs.map((r) => r['id']! as String));
    });
  }

  // Warm up (also lets SQLite settle page cache).
  for (var i = 0; i < 500; i++) {
    await col.get(ids[i]);
  }

  const samples = 10000;
  final tGet = <int>[];
  final tDomain = <int>[];
  final tSyncRow = <int>[];
  final tDecode = <int>[];
  final tCombined = <int>[];

  for (var i = 0; i < samples; i++) {
    final id = ids[i];

    var sw = Stopwatch()..start();
    await col.get(id);
    sw.stop();
    tGet.add(sw.elapsedMicroseconds);

    sw = Stopwatch()..start();
    final rows = await db.db
        .rawQuery('SELECT * FROM widgets WHERE id = ? LIMIT 1', [id]);
    sw.stop();
    tDomain.add(sw.elapsedMicroseconds);

    sw = Stopwatch()..start();
    await db.db.rawQuery(
        'SELECT * FROM lp_sync_row WHERE store = ? AND record_id = ? LIMIT 1',
        ['widgets', id]);
    sw.stop();
    tSyncRow.add(sw.elapsedMicroseconds);

    sw = Stopwatch()..start();
    decodeDbRow(profileSchema(), rows.first);
    sw.stop();
    tDecode.add(sw.elapsedMicroseconds);

    // Hypothetical combined single-round-trip read (domain + schema_ver).
    sw = Stopwatch()..start();
    await db.db.rawQuery(
        'SELECT w.*, s.schema_ver AS lp_schema_ver FROM widgets w '
        'LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id '
        'WHERE w.id = ? LIMIT 1',
        ['widgets', id]);
    sw.stop();
    tCombined.add(sw.elapsedMicroseconds);
  }

  // Exact statement count per get() (log the API only).
  counter.clear();
  final rawDb = db.db as DirectSqliteDatabase;
  rawDb.onExecute = counter.onExecute;
  rawDb.onQuery = counter.onQuery;
  await col.get(ids[0]);
  await col.get(ids[1]);
  final perGet = counter.countWhere((s) => !s.startsWith('PRAGMA')) ~/ 2;

  final sGet = Stats.from(tGet);
  final sDomain = Stats.from(tDomain);
  final sSync = Stats.from(tSyncRow);
  final sDecode = Stats.from(tDecode);
  final sCombined = Stats.from(tCombined);

  stdout.writeln('=== point-read profile ($samples samples, 100K store) ===');
  stdout.writeln('full get()          : ${sGet.line}');
  stdout.writeln('  domain SELECT     : ${sDomain.line}');
  stdout.writeln('  sync-row SELECT   : ${sSync.line}');
  stdout.writeln('  decodeDbRow       : ${sDecode.line}');
  stdout.writeln('combined LEFT JOIN  : ${sCombined.line}');
  stdout.writeln('SQL statements per get(): $perGet '
      '(domain + sync-row round-trips)');
  stdout.writeln('projected saving (combined replaces 2 round-trips with 1): '
      'get p50 ${sGet.p50}us -> est ${sGet.p50 - sSync.p50}us');

  await db.close();
  try {
    await tmp.delete(recursive: true);
  } catch (_) {}

  await persistProfile('point_read', {
    'meta': buildMeta(sqliteVersion: '3.53.4'),
    'samples': samples,
    'stats': {
      'get': sGet.toJson(),
      'domainSelect': sDomain.toJson(),
      'syncRowSelect': sSync.toJson(),
      'decode': sDecode.toJson(),
      'combinedLeftJoin': sCombined.toJson(),
    },
    'statementsPerGet': perGet,
  });
}
