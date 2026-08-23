/// Tail-latency probe: are the multi-millisecond write p99s caused by
/// SQLite's automatic WAL checkpointing (default: checkpoint at 1000 pages
/// ≈ 4MB, done INLINE on a committing connection)?
///
/// Method: run the identical dirty-patch workload twice on fresh DBs —
///   (a) stock pragmas (wal_autocheckpoint=1000)
///   (b) wal_autocheckpoint=0 (auto-checkpointing disabled)
/// and compare p99/max. If (b)'s tail collapses, checkpoint stalls are
/// the tail. Also records how often the WAL crossed the threshold.
///
/// Run: `dart run benchmark/drift_tail_probe.dart`
library;

import 'dart:io';

import 'package:localpocket/localpocket.dart';

import 'persist.dart';
import 'profile_util.dart';

const scale = 10000;
const samplesWrite = 2000;

Future<Stats> runWorkload(Directory tmp, String name,
    {required bool noCkpt}) async {
  final db = await LocalPocket.open(
      path: '${tmp.path}/$name.db', stores: [profileSchema()]);
  if (noCkpt) {
    await db.db.execute('PRAGMA wal_autocheckpoint=0');
  }
  final col = db.collection('widgets');

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

  // Dirty the targets once.
  await db.transaction((tx) async {
    for (var i = 0; i < samplesWrite; i++) {
      await tx.collection('widgets').patch(ids[i], {'qty': i});
    }
  });

  final us = <int>[];
  for (var i = 0; i < samplesWrite; i++) {
    final s = Stopwatch()..start();
    await col.patch(ids[i], {'qty': 100000 + i});
    s.stop();
    us.add(s.elapsedMicroseconds);
  }

  final stats = Stats.from(us);
  await db.close();
  return stats;
}

Future<void> main() async {
  stdout.writeln('=== WAL auto-checkpoint tail probe ===');
  final tmp = await Directory.systemTemp.createTemp('lp_tail_');
  final a = await runWorkload(tmp, 'ckpt_on', noCkpt: false);
  final b = await runWorkload(tmp, 'ckpt_off', noCkpt: true);
  stdout.writeln('stock   wal_autocheckpoint : ${a.line}');
  stdout.writeln('disabled (autocheckpoint=0): ${b.line}');
  try {
    await tmp.delete(recursive: true);
  } catch (_) {}
  await persistProfile('drift_wal_tail', {
    'meta': buildMeta(),
    'scale': scale,
    'samples': samplesWrite,
    'autocheckpointOn': a.toJson(),
    'autocheckpointOff': b.toJson(),
  });
}
