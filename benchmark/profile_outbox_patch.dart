/// Outbox/edit-processing profile (B7 path): put → ack → N patches.
///
/// Isolates per-patch cost with the dirty-row fast-path active:
///   - first patch (clean → dirty): base capture + outbox payload rewrite;
///   - subsequent patches (already dirty): fast path (no domain read);
///   - exact SQL statements per patch via the sqflite logger;
///   - FULL vs NORMAL durability delta (per-commit fsync is the dominant cost).
/// Run: `dart run benchmark/profile_outbox_patch.dart`
library;

import 'dart:io';

import 'package:localpocket/localpocket.dart';

import 'persist.dart';
import 'profile_util.dart';

Future<void> main() async {
  final counter = StatementCounter();
  final tmp = await Directory.systemTemp.createTemp('lp_op_');

  // ---- FULL durability (default), B7-shaped ----
  var db = await LocalPocket.open(
      path: '${tmp.path}/full.db', stores: [profileSchema()]);
  final rawDb1 = db.db as DirectSqliteDatabase;
  rawDb1.onExecute = counter.onExecute;
  rawDb1.onQuery = counter.onQuery;
  var col = db.collection('widgets');
  var id = generateRecordId();
  await col.put(profileRec(id, 0));
  await db.outbox.ack('widgets', id, serverUpdated: '2026-01-01 00:00:00.000Z');

  final firstPatch = <int>[];
  final dirtyPatches = <int>[];
  counter.clear();
  var sw = Stopwatch()..start();
  for (var i = 0; i < 1000; i++) {
    final s = Stopwatch()..start();
    await col.patch(id, {'qty': i});
    s.stop();
    (i == 0 ? firstPatch : dirtyPatches).add(s.elapsedMicroseconds);
  }
  sw.stop();
  final fullMs = sw.elapsedMilliseconds;
  final fullStmts = counter.count;
  await db.close();

  // ---- NORMAL durability (explicit) ----
  db = await LocalPocket.open(
      path: '${tmp.path}/norm.db', stores: [profileSchema()]);
  col = db.collection('widgets');
  id = generateRecordId();
  await col.put(profileRec(id, 0));
  await db.outbox.ack('widgets', id, serverUpdated: '2026-01-01 00:00:00.000Z');
  final normPatches = <int>[];
  sw = Stopwatch()..start();
  for (var i = 0; i < 1000; i++) {
    final s = Stopwatch()..start();
    await db.transaction((tx) => tx.collection('widgets').patch(id, {'qty': i}),
        durability: DurabilityClass.normal);
    s.stop();
    normPatches.add(s.elapsedMicroseconds);
  }
  sw.stop();
  final normMs = sw.elapsedMilliseconds;
  await db.close();

  try {
    await tmp.delete(recursive: true);
  } catch (_) {}

  final sFirst = Stats.from(firstPatch);
  final sDirty = Stats.from(dirtyPatches);
  final sNorm = Stats.from(normPatches);
  stdout.writeln('=== outbox/edit profile (1000 patches, B7 shape) ===');
  stdout.writeln('first patch (clean->dirty, FULL): ${sFirst.line}');
  stdout.writeln('dirty patches (fast path, FULL)  : ${sDirty.line}');
  stdout.writeln('dirty patches (fast path, NORMAL): ${sNorm.line}');
  stdout.writeln('total FULL: ${fullMs}ms, statements=$fullStmts '
      '(${fullStmts ~/ 1000}/patch)');
  stdout.writeln('total NORMAL: ${normMs}ms');
  stdout.writeln('FULL vs NORMAL per dirty patch : '
      '${(sDirty.p50 / sNorm.p50).toStringAsFixed(1)}x');

  await persistProfile('outbox_patch', {
    'meta': buildMeta(sqliteVersion: '3.53.4'),
    'firstPatchFull': sFirst.toJson(),
    'dirtyPatchFull': sDirty.toJson(),
    'dirtyPatchNormal': sNorm.toJson(),
    'totalFullMs': fullMs,
    'totalNormalMs': normMs,
    'statementsPerPatchFull': fullStmts ~/ 1000,
  });
}
