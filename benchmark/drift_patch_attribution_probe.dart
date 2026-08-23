/// Stage-attribution probe for LocalPocket's point-update (`patch`) path,
/// compared against drift-style raw mechanics on the SAME connection.
///
/// Stages (each measured independently, file-backed, warm):
///   1. empty `db.transaction()`          -> BEGIN IMMEDIATE + COMMIT +
///                                           WriteQueue hop floor
///   2. `_patch`'s sync/outbox LEFT JOIN  -> the state-probe round-trip
///   3. canonicalizeInto + buildPayload    -> per-op serialization
///   4. encodeDbRow                        -> row materialization
///   5. domain UPDATE (prepared, direct)   -> the actual data change
///   6. outbox.applyLocalMutation          -> dirty-row bookkeeping
///      (outbox upsert + sync-row upsert, pre-computed inputs)
///   7. full col.patch()                   -> the sum
///   8. col.patch() under an EXPLICIT outer transaction (amortizes 1)
///   9. WAL frame growth per 1000 patches  -> explains checkpoint stalls
///                                           (p99 tail)
///
/// Run: `dart run benchmark/drift_patch_attribution_probe.dart`
library;

import 'dart:io';
import 'dart:convert';

import 'package:localpocket/localpocket.dart';
import 'package:localpocket/src/core/canonical_json.dart' show canonicalizeInto;

import 'persist.dart';
import 'profile_util.dart';

const scale = 10000;
const samplesWrite = 1000;
const warmup = 200;

Future<void> main() async {
  stdout.writeln('=== patch stage-attribution probe ===');
  final tmp = await Directory.systemTemp.createTemp('lp_patch_attr_');
  final db = await LocalPocket.open(
      path: '${tmp.path}/probe.db', stores: [profileSchema()]);
  final col = db.collection('widgets');

  // ---- seed ----
  final ids = <String>[];
  var seq = 0;
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

  // Make every target row DIRTY once (so timed patches use the dirty fast
  // path, which the comparative benchmark measures after its own phases).
  await db.transaction((tx) async {
    for (var i = 0; i < warmup + samplesWrite; i++) {
      await tx.collection('widgets').patch(ids[i], {'qty': i});
    }
  });

  final writeIds = [for (var i = 0; i < samplesWrite; i++) ids[i]];
  const joinSql = 'SELECT s.*, '
      'o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, '
      'o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, '
      'o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, '
      'o.op_id AS o_op_id, o.created_at AS o_created_at, '
      'o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op '
      'FROM lp_sync_row s '
      'LEFT JOIN lp_outbox o '
      '  ON o.store = s.store AND o.record_id = s.record_id '
      'WHERE s.store = ? AND s.record_id = ? LIMIT 1';

  // ---- capture one real dirty-state snapshot for stages 2/3/6 -------------
  final joined = await db.db.rawQuery(joinSql, ['widgets', writeIds[0]]);
  final srRow = Map<String, Object?>.from(joined.first)
    ..removeWhere((k, v) => k.startsWith('o_'));
  final sr = SyncRowState.fromRow(srRow);
  final opRow = <String, Object?>{
    for (final e in joined.first.entries)
      if (e.key.startsWith('o_')) e.key.substring(2): e.value,
  };
  final op = OutboxOp.fromRow(opRow);
  final Map<String, Object?> currentPayload = (op.payloadJson.isEmpty)
      ? <String, Object?>{}
      : Map<String, Object?>.from(_decodeJson(op.payloadJson) as Map);

  var sw = Stopwatch()..start();

  // ---- 1: empty transaction floor -----------------------------------------
  final tEmptyTx = <int>[];
  for (var i = 0; i < samplesWrite; i++) {
    final s = Stopwatch()..start();
    await db.transaction<void>((tx) async {});
    s.stop();
    tEmptyTx.add(s.elapsedMicroseconds);
  }

  // ---- 2: the state-probe LEFT JOIN ---------------------------------------
  final tJoin = <int>[];
  for (var i = 0; i < samplesWrite; i++) {
    final s = Stopwatch()..start();
    await db.db.rawQuery(joinSql, ['widgets', writeIds[i]]);
    s.stop();
    tJoin.add(s.elapsedMicroseconds);
  }

  // ---- 3: canonicalizeInto(buildPayload(...)) ------------------------------
  const iters = 20000;
  final buf = StringBuffer();
  sw.reset();
  for (var i = 0; i < iters; i++) {
    buf.clear();
    canonicalizeInto(buf, <String, Object?>{...currentPayload, 'qty': i});
  }
  final canonicalUsPerOp = sw.elapsedMicroseconds / iters;

  // ---- 4: encodeDbRow ------------------------------------------------------
  sw.reset();
  for (var i = 0; i < iters; i++) {
    encodeDbRow(profileSchema(),
        id: writeIds[0],
        logical: <String, Object?>{...currentPayload, 'qty': i},
        archived: false);
  }
  final encodeUsPerOp = sw.elapsedMicroseconds / iters;

  // ---- 5: bare domain UPDATE (prepared statement, direct) ------------------
  final updSql = 'UPDATE "widgets" SET "id" = ?, "name" = ?, "qty" = ?, '
      '"phone" = ?, "extra" = ?, "archived" = ?, "hidden" = ? WHERE id = ?';
  final tDomainUpd = <int>[];
  for (var i = 0; i < samplesWrite; i++) {
    final row = encodeDbRow(profileSchema(),
        id: writeIds[i],
        logical: <String, Object?>{...currentPayload, 'qty': 500000 + i},
        archived: false);
    final s = Stopwatch()..start();
    db.db.execute(updSql, [...row.values, writeIds[i]]);
    s.stop();
    tDomainUpd.add(s.elapsedMicroseconds);
  }

  // ---- 6: applyLocalMutation with precomputed everything -------------------
  final tBookkeep = <int>[];
  for (var i = 0; i < samplesWrite; i++) {
    final merged = <String, Object?>{...currentPayload, 'qty': 600000 + i};
    final pb = StringBuffer();
    canonicalizeInto(pb, merged);
    final pj = pb.toString();
    final row = encodeDbRow(profileSchema(),
        id: writeIds[i], logical: merged, archived: false);
    final s = Stopwatch()..start();
    await db.outbox.applyLocalMutation(
      table: db.requireTable('widgets'),
      exec: db.db,
      id: writeIds[i],
      action: MutationAction.update,
      row: row,
      oldRow: currentPayload,
      logical: merged,
      dirtyFields: const ['qty'],
      base: null,
      syncRow: sr,
      outboxOp: OutboxOp(
        store: op.store,
        recordId: op.recordId,
        kind: op.kind,
        payloadJson: pj,
        baseUpdated: op.baseUpdated,
        baseHash: op.baseHash,
        dirtyFields: const ['qty'],
        opId: db.outbox.generateOpId(),
        createdAt: op.createdAt,
        updatedAt: db.now(),
      ),
      precomputedPayload: pj,
    );
    s.stop();
    tBookkeep.add(s.elapsedMicroseconds);
  }

  // ---- 7: full public col.patch() ------------------------------------------
  final tPatch = <int>[];
  for (var i = 0; i < samplesWrite; i++) {
    final s = Stopwatch()..start();
    await col.patch(writeIds[i], {'qty': 400000 + i});
    s.stop();
    tPatch.add(s.elapsedMicroseconds);
  }

  // ---- 8: patches inside ONE explicit outer transaction --------------------
  final tPatchInTx = <int>[];
  await db.transaction((tx) async {
    final txCol = tx.collection('widgets');
    for (var i = 0; i < samplesWrite; i++) {
      final s = Stopwatch()..start();
      await txCol.patch(writeIds[i], {'qty': 300000 + i});
      s.stop();
      tPatchInTx.add(s.elapsedMicroseconds);
    }
  });

  // ---- 9: WAL size after this workload -------------------------------------
  final walFile = File('${tmp.path}/probe.db-wal');
  final walBytes = await walFile.exists() ? await walFile.length() : 0;

  // ---- report ---------------------------------------------------------------
  final sEmptyTx = Stats.from(tEmptyTx);
  final sJoin = Stats.from(tJoin);
  final sDom = Stats.from(tDomainUpd);
  final sBook = Stats.from(tBookkeep);
  final sPatch = Stats.from(tPatch);
  final sPatchTx = Stats.from(tPatchInTx);

  stdout.writeln('1 empty db.transaction()   : ${sEmptyTx.line}');
  stdout.writeln('2 state-probe LEFT JOIN    : ${sJoin.line}');
  stdout.writeln(
      '3 canonicalizeInto         : ${canonicalUsPerOp.toStringAsFixed(1)}us/op');
  stdout.writeln(
      '4 encodeDbRow              : ${encodeUsPerOp.toStringAsFixed(1)}us/op');
  stdout.writeln('5 bare domain UPDATE       : ${sDom.line}');
  stdout.writeln('6 applyLocalMutation       : ${sBook.line}');
  stdout.writeln('7 full col.patch()         : ${sPatch.line}');
  stdout.writeln('8 patch inside open Tx     : ${sPatchTx.line}');
  stdout.writeln(
      '9 WAL size after workload  : ${(walBytes / 1024).toStringAsFixed(0)}KB');
  stdout.writeln();
  final sum = sEmptyTx.mean +
      sJoin.mean +
      canonicalUsPerOp +
      encodeUsPerOp +
      sDom.mean +
      sBook.mean;
  stdout.writeln(
      'sum of stages 1-6 ≈ ${sum.toStringAsFixed(0)}us vs measured full patch ${sPatch.mean.toStringAsFixed(0)}us');
  stdout.writeln('(stage 1 amortized away when inside an open Tx: '
      '${(sPatch.mean - sPatchTx.mean).toStringAsFixed(0)}us saved)');

  await persistProfile('drift_patch_attribution', {
    'meta': buildMeta(),
    'scale': scale,
    'emptyTransactionUs': sEmptyTx.toJson(),
    'stateProbeJoinUs': sJoin.toJson(),
    'canonicalizeUsPerOp': canonicalUsPerOp,
    'encodeDbRowUsPerOp': encodeUsPerOp,
    'bareDomainUpdateUs': sDom.toJson(),
    'applyLocalMutationUs': sBook.toJson(),
    'fullPatchUs': sPatch.toJson(),
    'patchInsideTxUs': sPatchTx.toJson(),
    'walBytesAfterWorkload': walBytes,
  });
  await db.close();
  try {
    await tmp.delete(recursive: true);
  } catch (_) {}
  stdout.writeln('\nprofile persisted to benchmark/results/');
}

Object? _decodeJson(String s) {
  return jsonDecode(s);
}
