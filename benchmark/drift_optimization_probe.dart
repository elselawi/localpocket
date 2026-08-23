/// Drift-vs-LocalPocket optimization probe.
///
/// Answers, with measured evidence: WHERE does drift (which uses the SAME
/// sqlite3 native library) get its speed advantage over localpocket?
///
/// Stages:
///   A. Raw sqlite3 floor — prepare-once + step loop (what the engine allows).
///   B. Statement cache ON  — drift-style: one cached PreparedStatement per SQL,
///      reset/bind/step per op (drift's `runWithArgsSync`).
///   C. Statement cache OFF — `_db.prepare(sql)` + execute per op
///      (sqlite3 `execute()` compiles fresh every call; what a no-cache layer
///      pays when its statement cache misses or is bypassed).
///   D. LocalPocket `col.get(id)`    — full public point read.
///   E. LocalPocket `col.patch(...)` — full public point update.
///   F. Per-op SQL statement counts for D/E (via TestHooks tracing) to
///      attribute overhead to round-trips vs engine work.
///   G. LocalPocket WITHOUT prepared-statement reuse: every SELECT/UPDATE goes
///      through `db.rawQuery`/`db.execute` on the RAW CommonDatabase — i.e.
///      sqlite3's `Database.select/execute`, which PREPARE FRESH EVERY CALL.
///      This isolates "how much of our gap is statement compilation" vs
///      "how much is bookkeeping".
///
/// Run: `dart run benchmark/drift_optimization_probe.dart`
library;

import 'dart:io';

import 'package:localpocket/localpocket.dart';
import 'package:localpocket/src/core/canonical_json.dart' show canonicalizeInto;

import 'persist.dart';
import 'profile_util.dart';

const scale = 10000;
const samplesRead = 2000;
const samplesWrite = 1000;
const warmup = 200;

Future<void> main() async {
  stdout.writeln('=== drift optimization probe ===');
  final tmp = await Directory.systemTemp.createTemp('lp_drift_probe_');
  final db = await LocalPocket.open(
      path: '${tmp.path}/probe.db', stores: [profileSchema()]);
  final col = db.collection('widgets');
  final raw = (db.db as DirectSqliteDatabase).rawDb;

  // ---- seed via the product bulk path ----
  final ids = <String>[];
  var seq = 0;
  final sw0 = Stopwatch()..start();
  for (var start = 0; start < scale; start += 5000) {
    final recs = [
      for (var i = start; i < start + 5000 && i < scale; i++)
        {
          'id': 'a${(seq++).toRadixString(36).padLeft(14, '0')}',
          'name': 'name-$i',
          'qty': i,
          'phone': 'p$i',
        },
    ];
    ids.addAll(recs.map((r) => r['id'] as String));
    await db.transaction((tx) => tx.collection('widgets').putAll(recs));
  }
  sw0.stop();
  stdout.writeln('seeded $scale rows in ${sw0.elapsedMilliseconds}ms '
      '(putAll product path)');

  // Warm caches (prepared statements + OS page cache), like the harness does.
  for (var i = 0; i < warmup; i++) {
    await col.get(ids[i]);
    await col.query().where('qty', between: (i, i + 500)).count();
  }

  final readIds = [
    for (var i = warmup; i < warmup + samplesRead; i++) ids[i],
  ];
  final writeIds = [
    for (var i = 0; i < samplesWrite; i++) ids[(i * 7) % scale],
  ];

  // ---------------- A/B/C: raw sqlite3 floors (drift's actual mechanics) ---
  Future<List<int>> rawFloor({
    required String selectSql,
    required String updateSql,
    bool useCache = true,
  }) async {
    final selStmt = useCache ? raw.prepare(selectSql, checkNoTail: true) : null;
    final updStmt = useCache ? raw.prepare(updateSql, checkNoTail: true) : null;
    final readUs = <int>[];
    final writeUs = <int>[];
    try {
      for (var i = 0; i < samplesRead; i++) {
        final s = Stopwatch()..start();
        if (selStmt != null) {
          selStmt.execute([readIds[i]]); // step, discard rows (bind+step)
        } else {
          raw.select(selectSql, [readIds[i]]); // prepare-fresh each call
        }
        s.stop();
        readUs.add(s.elapsedMicroseconds);
        if (i < samplesWrite) {
          final s2 = Stopwatch()..start();
          final qty = 900000 + i;
          if (updStmt != null) {
            updStmt.execute([qty, 'name-$i', 'p$i', writeIds[i]]);
          } else {
            raw.execute(updateSql, [qty, 'name-$i', 'p$i', writeIds[i]]);
          }
          s2.stop();
          writeUs.add(s2.elapsedMicroseconds);
        }
      }
    } finally {
      selStmt?.close();
      updStmt?.close();
    }
    return [...readUs, ...writeUs];
  }

  const selSql = 'SELECT * FROM widgets WHERE id = ? LIMIT 1';
  const updSql = 'UPDATE widgets SET qty = ?, name = ?, phone = ? '
      'WHERE id = ?';

  final bCached = Stats.from(
      await rawFloor(selectSql: selSql, updateSql: updSql, useCache: true));
  final cUncached = Stats.from(
      await rawFloor(selectSql: selSql, updateSql: updSql, useCache: false));

  // Restore the qty values we clobbered in the raw floors.
  await db.transaction((tx) async {
    for (var i = 0; i < samplesWrite; i++) {
      await tx.collection('widgets').patch(writeIds[i], {'qty': i});
    }
  });

  // ---------------- D/E/F: public API with statement counting -------------
  final counter = StatementCounter();
  final direct = db.db as DirectSqliteDatabase;
  direct.onExecute = counter.onExecute;
  direct.onQuery = counter.onQuery;

  final tGet = <int>[];
  counter.clear();
  var sw = Stopwatch()..start();
  for (var i = 0; i < samplesRead; i++) {
    final s = Stopwatch()..start();
    final res = await col.get(readIds[i]);
    s.stop();
    if (res == null) throw StateError('missing ${readIds[i]}');
    tGet.add(s.elapsedMicroseconds);
  }
  sw.stop();
  final getStmts = counter.count;
  final getMsTotal = sw.elapsedMilliseconds;

  final tPatch = <int>[];
  counter.clear();
  sw = Stopwatch()..start();
  for (var i = 0; i < samplesWrite; i++) {
    final s = Stopwatch()..start();
    await col.patch(writeIds[i], {'qty': 800000 + i});
    s.stop();
    tPatch.add(s.elapsedMicroseconds);
  }
  sw.stop();
  final patchStmts = counter.count;

  // Sample of the exact SQL mix per patch (first patch only, clean->dirty).
  counter.clear();
  final firstPatchId = ids[scale ~/ 2];
  await db.transaction(
      (tx) => tx.collection('widgets').patch(firstPatchId, {'qty': 777}));
  final patchSqlMix = List.of(counter.stmts);
  direct.onExecute = null;
  direct.onQuery = null;

  // ---------------- G: same reads/writes with NO statement cache ----------
  // Every op goes through CommonDatabase.select/execute == prepare-per-call.
  final gGet = <int>[];
  for (var i = 0; i < samplesRead; i++) {
    final s = Stopwatch()..start();
    final rows = raw.select(selSql, [readIds[i]]);
    s.stop();
    if (rows.isEmpty) throw StateError('missing ${readIds[i]}');
    gGet.add(s.elapsedMicroseconds);
  }
  final gUpd = <int>[];
  for (var i = 0; i < samplesWrite; i++) {
    final s = Stopwatch()..start();
    raw.execute(
        'UPDATE widgets SET qty = ? WHERE id = ?', [700000 + i, writeIds[i]]);
    s.stop();
    gUpd.add(s.elapsedMicroseconds);
  }

  // ---------------- H: payload serialization cost (per-op fixed cost we pay
  // and drift never does) -----------------------------------------------
  final recForHash = {
    'id': ids[0],
    'name': 'name-x',
    'qty': 1,
    'phone': 'px',
  };
  const hIters = 20000;
  final hBuf = StringBuffer();
  sw = Stopwatch()..start();
  for (var i = 0; i < hIters; i++) {
    hBuf.clear();
    canonicalizeInto(hBuf, recForHash);
  }
  sw.stop();
  final canonicalNsPerOp = sw.elapsedMilliseconds * 1e6 / hIters;

  // ---------------- report ----------------------------------------------
  final dGet = Stats.from(tGet);
  final ePatch = Stats.from(tPatch);
  final gGetS = Stats.from(gGet);
  final gUpdS = Stats.from(gUpd);

  stdout.writeln();
  stdout.writeln('--- raw sqlite3 floors (same library drift uses) ---');
  stdout.writeln('B cached stmt (prepare once, bind+step): ${bCached.line}');
  stdout.writeln('C uncached stmt (fresh prepare per op)  : ${cUncached.line}');
  stdout.writeln(
      '    -> prepare cost ≈ ${(cUncached.mean - bCached.mean).toStringAsFixed(0)}us/op');
  stdout.writeln();
  stdout
      .writeln('--- LocalPocket public API @${scale}k rows (file-backed) ---');
  stdout.writeln(
      'D col.get()    : ${dGet.line}   stmts/get=${(getStmts / samplesRead).toStringAsFixed(2)} totalMs=$getMsTotal');
  stdout.writeln(
      'E col.patch()  : ${ePatch.line}   stmts/patch=${(patchStmts / samplesWrite).toStringAsFixed(2)}');
  stdout.writeln('G raw SELECT (no stmt cache): ${gGetS.line}');
  stdout.writeln('G raw UPDATE (no stmt cache): ${gUpdS.line}');
  stdout.writeln();
  stdout.writeln(
      'get() minus raw-SELECT floor  : ${(dGet.mean - gGetS.mean).toStringAsFixed(1)}us (decode+cache+async)');
  stdout.writeln(
      'raw-SELECT minus cached floor : ${(gGetS.mean - bCached.mean / 2).toStringAsFixed(1)}us (statement re-preparation share)');
  stdout.writeln(
      'patch() minus raw-UPDATE floor: ${(ePatch.mean - gUpdS.mean).toStringAsFixed(1)}us (outbook/sync-row bookkeeping)');
  stdout.writeln(
      'canonicalizeInto per small doc: ${canonicalNsPerOp.toStringAsFixed(1)}ns');
  stdout.writeln();
  stdout.writeln(
      '--- first-patch SQL mix (${patchSqlMix.length} statements) ---');
  for (final s in patchSqlMix) {
    stdout.writeln('  ${s.length > 110 ? '${s.substring(0, 110)}...' : s}');
  }

  await persistProfile('drift_optimization', {
    'meta': buildMeta(),
    'scale': scale,
    'rawFloor': {'cached': bCached.toJson(), 'uncached': cUncached.toJson()},
    'colGet': {...dGet.toJson(), 'stmtsPerOp': getStmts / samplesRead},
    'colPatch': {...ePatch.toJson(), 'stmtsPerOp': patchStmts / samplesWrite},
    'rawNoCacheSelect': gGetS.toJson(),
    'rawNoCacheUpdate': gUpdS.toJson(),
    'canonicalizeNsPerSmallDoc': canonicalNsPerOp,
    'firstPatchSqlMix': patchSqlMix,
  });
  await db.close();
  try {
    await tmp.delete(recursive: true);
  } catch (_) {}
  stdout.writeln('\nprofile persisted to benchmark/results/');
}
