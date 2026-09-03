/// The kernel maintenance owner: SQLite housekeeping (analyze, WAL
/// checkpointing, vacuum), outbox pruning, sync-housekeeping GC, compaction,
/// and the maintenance state machine — plus the hook-observing trace
/// wrappers. Receives the shared [KernelContext] explicitly.
library;

import 'change_bus.dart' show ChangeAction, ChangeOrigin, ChangeSet;
import 'codec.dart';
import 'ddl_compiler.dart';
import 'kernel_context.dart';
import 'local_pocket.dart' show TestHooks;
import 'sync/sync_tables.dart' show SyncState, vanishRecordMetadata;

/// {@template localpocket.maintenance_service}
/// The kernel maintenance owner.
/// {@endtemplate}
class MaintenanceService {
  /// Internal: constructed by [KernelDatabase].
  ///
  /// {@macro localpocket.maintenance_service}
  MaintenanceService(this.context);

  /// The shared kernel dependencies.
  final KernelContext context;

  /// Executes SQL, notifying the test [TestHooks.onExecute] observer.
  Future<void> traceExecute(String sql, [List<Object?>? arguments]) {
    context.testHooks?.onExecute?.call(sql);
    context.perf.recordStatement();
    return context.db.execute(sql, arguments ?? const []);
  }

  /// Runs a raw query, notifying the test [TestHooks.onQuery] observer.
  Future<List<Map<String, Object?>>> traceQuery(String sql,
      [List<Object?>? arguments]) {
    context.testHooks?.onQuery?.call(sql);
    context.perf.recordQuery();
    return context.db.rawQuery(sql, arguments ?? const []);
  }

  /// Runs SQLite `ANALYZE` to refresh query-planner statistics.
  ///
  /// Pass [store] to analyze one collection, or omit it to analyze the whole
  /// database. This is normally maintenance work rather than a per-request
  /// operation.
  Future<void> analyze([String? store]) async {
    if (store == null) {
      await context.db.execute('ANALYZE');
    } else {
      await context.db.execute('ANALYZE ${DdlCompiler.quote(store)}');
    }
  }

  /// Runs SQLite `PRAGMA wal_checkpoint(TRUNCATE)` to checkpoint and truncate the WAL.
  Future<void> walCheckpoint() async {
    if (context.capabilities.walSupported) {
      await context.db.execute('PRAGMA wal_checkpoint(TRUNCATE)');
    }
  }

  /// Runs a non-blocking `PRAGMA wal_checkpoint(PASSIVE)`; with
  /// `wal_autocheckpoint=0` this is the WAL-bounding knob invoked after
  /// write bursts (see `_noteWriteCommitted`).
  Future<void> walCheckpointPassive() async {
    if (context.capabilities.walSupported) {
      await context.db.execute('PRAGMA wal_checkpoint(PASSIVE)');
    }
  }

  /// Runs SQLite `VACUUM` or `PRAGMA incremental_vacuum` to reclaim unused database pages.
  Future<void> vacuum({int? pages}) async {
    if (pages != null) {
      await context.db.execute('PRAGMA incremental_vacuum($pages)');
    } else {
      await context.db.execute('VACUUM');
    }
  }

  /// Prunes orphaned or superseded outbox operations.
  ///
  /// Only outbox rows whose sync row is `clean` (edit settled) or absent
  /// (orphaned) are removed — every other state is retained because the op
  /// is the only record of a pending edit, and evicting it would lose
  /// unsynced data and leave a dangling `op_id`. [maxEntries] is kept for
  /// API compatibility but not enforced.
  Future<int> pruneOutbox({int maxEntries = 10000}) async {
    var pruned = 0;
    await context.database.transaction((tx) async {
      final exec = tx.executor;
      // Never evict the op of a dirty/inFlight/conflict/blocked/error/
      // quarantine row: it is the only record of the unsynced edit.
      final orphaned = await exec.rawQuery(
        'SELECT o.store, o.record_id FROM lp_outbox o '
        'LEFT JOIN lp_sync_row s ON s.store = o.store AND s.record_id = o.record_id '
        "WHERE s.record_id IS NULL OR s.sync_state = 'clean'",
      );
      for (final r in orphaned) {
        final st = r['store']! as String;
        final id = r['record_id']! as String;
        await exec.delete('lp_outbox',
            where: 'store = ? AND record_id = ?', whereArgs: [st, id]);
        pruned++;
      }
    });
    return pruned;
  }

  /// Runs the complete maintenance state machine:
  /// 1. Compacts eligible archived rows across all stores
  /// 2. Prunes the outbox
  /// 3. Garbage-collects terminal sync bookkeeping ([gcSyncHousekeeping])
  /// 4. Executes WAL checkpointing
  /// 5. Optimizes planner statistics
  Future<void> runMaintenance(
      {Duration compactOlderThan = const Duration(days: 90),
      Duration deadLetterRetention = const Duration(days: 90)}) async {
    for (final store in context.database.storeNames) {
      await compact(store, olderThan: compactOlderThan);
    }
    await pruneOutbox();
    await gcSyncHousekeeping(deadLetterRetention: deadLetterRetention);
    await walCheckpoint();
    await analyze();
  }

  /// Bounds the sync bookkeeping tables that otherwise grow without bound:
  /// removes op-queue rows that reached the terminal `done` state (their work
  /// is complete and nothing reads them again — done rows are never blocking,
  /// only `pending`/`failed` rows are) and prunes dead-letter audit rows older
  /// than [deadLetterRetention].
  Future<void> gcSyncHousekeeping(
      {Duration deadLetterRetention = const Duration(days: 90)}) async {
    await context.database.transaction((tx) async {
      final exec = tx.executor;
      await exec.delete('lp_op_queue', where: "state = 'done'");
      final cutoff = context.now() - deadLetterRetention.inMilliseconds;
      await exec.delete('lp_dead_letter', where: 'at < ?', whereArgs: [cutoff]);
    });
  }

  /// Compacts synced archived rows older than [olderThan].
  ///
  /// Deletes ONLY rows that are `archived=1 AND sync_state='clean' AND hidden=0 AND last_seen < now−olderThan`
  /// and drops their file refs and blob refcounts.
  Future<int> compact(String store,
      {required Duration olderThan, int? nowMs}) async {
    final current = nowMs ?? context.now();
    final cutoff = current - olderThan.inMilliseconds;
    var count = 0;
    const chunkSize = 250;
    final schema = context.database.requireTable(store).schema;
    while (true) {
      final rows = await context.db.rawQuery(
        'SELECT b.id FROM ${DdlCompiler.quote(store)} b '
        'JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id '
        'WHERE b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? '
        'AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? '
        'ORDER BY b.id LIMIT ?',
        [store, SyncState.clean.name, cutoff, chunkSize],
      );
      if (rows.isEmpty) break;
      await context.database.transaction((tx) async {
        final exec = tx.executor;
        for (final r in rows) {
          final id = r['id']! as String;
          // Revalidate eligibility inside the transaction: a concurrent
          // write between the candidate SELECT and here must prevent a
          // stale deletion.
          final stillEligible = await exec.rawQuery(
            'SELECT b.id FROM ${DdlCompiler.quote(store)} b '
            'JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id '
            'WHERE b.id = ? AND b.archived = 1 AND b.hidden = 0 '
            'AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL '
            'AND sr.last_seen_at < ? LIMIT 1',
            [store, id, SyncState.clean.name, cutoff],
          );
          if (stillEligible.isEmpty) continue;
          final existingRows = await exec.rawQuery(
              'SELECT * FROM ${DdlCompiler.quote(store)} WHERE id = ? LIMIT 1',
              [id]);
          final existing = existingRows.isNotEmpty
              ? decodeDbRow(schema, existingRows.first,
                  cipher: context.fieldCipher,
                  cryptoProvider: context.cryptoProvider)
              : null;
          await vanishRecordMetadata(exec, store, id);
          await exec.delete('lp_outbox',
              where: 'store = ? AND record_id = ?', whereArgs: [store, id]);
          await exec.delete(store, where: 'id = ?', whereArgs: [id]);
          // Leave a purged sync-row marker: the sweep must treat the record
          // as known (never re-fetch it while the remote copy is unchanged),
          // otherwise every compacted row resurrects on bucket rotation.
          await exec.update('lp_sync_row', {'access_state': 'purged'},
              where: 'store = ? AND record_id = ?', whereArgs: [store, id]);
          tx.addChange(ChangeSet(store, {id}));
          if (existing != null) {
            tx.emitRecord(
              store: store,
              id: id,
              origin: ChangeOrigin.local,
              action: ChangeAction.purge,
              oldRecord: existing,
              newRecord: null,
            );
          }
          count++;
        }
      });
    }
    return count;
  }
}
