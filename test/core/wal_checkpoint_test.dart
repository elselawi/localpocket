import 'package:localpocket/localpocket.dart';
import 'package:sqlite3/sqlite3.dart' as sqlite3;
import 'package:test/test.dart';

import '../support/helpers.dart';

/// P0 checkpoint behavior: `wal_autocheckpoint=0` at open (no inline
/// checkpoints on the committing connection) and opportunistic
/// `wal_checkpoint(PASSIVE)` scheduled off the writer's path once enough
/// write transactions have committed.
void main() {
  group('wal autocheckpoint', () {
    test('open disables auto-checkpointing', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final pocket = await openPocket(path: t.path);
      addTearDown(pocket.close);

      final rows = await pocket.db.rawQuery('PRAGMA wal_autocheckpoint');
      expect(rows, isNotEmpty);
      expect(rows.first.values.first, 0,
          reason: 'auto-checkpointing must be off so commits never stall');
    });

    test('passive checkpoints are scheduled off the writer path', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final executed = <String>[];
      final db = DirectSqliteDatabase(sqlite3.sqlite3.open(t.path));
      db.onExecute = (sql, _) => executed.add(sql);
      final pocket = await openPocket(path: t.path, database: db);
      addTearDown(pocket.close);

      expect(pocket.capabilities.walSupported, isTrue,
          reason: 'native file-backed engine runs WAL');

      final col = pocket.collection('widgets');
      executed.clear();
      final ids = <String>[];
      for (var i = 0; i < 64; i++) {
        final id = generateRecordId();
        ids.add(id);
        await col.put(record(id: id, name: 'n$i', qty: i));
      }
      // The checkpoint is deferred to a later event-loop turn.
      expect(
        executed.where((s) => s.contains('wal_checkpoint')).toList(),
        isEmpty,
        reason: 'no checkpoint may run inline on the write path',
      );
      // Pump the loop so the scheduled passive checkpoint fires.
      await Future<void>.delayed(Duration.zero);
      await Future<void>.delayed(Duration.zero);
      expect(
        executed.where((s) => s.contains('wal_checkpoint(PASSIVE)')).toList(),
        isNotEmpty,
        reason: 'a passive checkpoint must be scheduled after a write burst',
      );

      // The database stays fully usable after the checkpoint.
      final r = await col.get(ids.first);
      expect(r, isNotNull);
    });

    test('explicit walCheckpointPassive is a no-op without WAL', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final executed = <String>[];
      final db = DirectSqliteDatabase(sqlite3.sqlite3.open(t.path));
      db.onExecute = (sql, _) => executed.add(sql);
      final pocket = await openPocket(
          path: t.path, database: db, platform: PlatformProfile.web);
      addTearDown(pocket.close);

      await pocket.walCheckpointPassive();
      expect(
        executed.where((s) => s.contains('wal_checkpoint')).toList(),
        isEmpty,
        reason: 'passive checkpoint must not touch an engine without WAL',
      );
    });
  });
}
