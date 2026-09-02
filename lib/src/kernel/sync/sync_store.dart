/// Per-(scope, store) sync state: pull cursors and sweep rotation
/// (`lp_sync_state`). Cursors are identity-scoped.
library;

import '../../kernel/database_adapter.dart';

import '../../kernel/local_pocket.dart';
import '../../kernel/sql_utils.dart';

/// {@template localpocket.pull_cursor}
/// Identity-scoped pull cursor.
/// {@endtemplate}
class PullCursor {
  /// {@macro localpocket.pull_cursor}
  const PullCursor(this.updated, this.id);

  /// Last remote update timestamp.
  final String updated;

  /// ID tie-breaker at [updated].
  final String id;
}

/// {@template localpocket.sweep_state}
/// Rotating anti-entropy sweep state.
/// {@endtemplate}
class SweepState {
  /// {@macro localpocket.sweep_state}
  const SweepState(this.bucket, this.lastSweepAt);

  /// Last bucket visited, or `-1` before the first sweep.
  final int bucket;

  /// Time of the last completed sweep.
  final int? lastSweepAt;
}

/// {@template localpocket.sync_store}
/// Persists pull cursors, sweep progress, and aggregate sync status.
/// {@endtemplate}
class SyncStore {
  /// {@macro localpocket.sync_store}
  SyncStore(this.pocket, this.scope);

  /// Pocket handle backing `lp_sync_state`.
  final LocalPocket pocket;

  /// Sync identity scope the rows are keyed by.
  final String scope;

  /// Reads the pull cursor for [store], or null when the store was never
  /// pulled.
  Future<PullCursor?> readCursor(String store) async {
    final rows = await pocket.db.query('lp_sync_state',
        columns: ['cursor_updated', 'cursor_id'],
        where: 'scope = ? AND store = ?',
        whereArgs: [scope, store],
        limit: 1);
    if (rows.isEmpty) return null;
    final updated = rows.first['cursor_updated'] as String?;
    final id = rows.first['cursor_id'] as String?;
    if (updated == null || id == null) return null;
    return PullCursor(updated, id);
  }

  /// Writes the pull cursor for [store] without touching the sweep columns.
  Future<void> writeCursor(DatabaseExecutor exec, String store,
      {required String updated, required String id}) async {
    // Read-modify-write: never clobber the sweep columns (and vice versa).
    final existing = await exec.query('lp_sync_state',
        where: 'scope = ? AND store = ?', whereArgs: [scope, store], limit: 1);
    if (existing.isEmpty) {
      await exec.insert('lp_sync_state', {
        'scope': scope,
        'store': store,
        'cursor_updated': updated,
        'cursor_id': id,
        'sweep_bucket': -1,
      });
    } else {
      await exec.update(
          'lp_sync_state', {'cursor_updated': updated, 'cursor_id': id},
          where: 'scope = ? AND store = ?', whereArgs: [scope, store]);
    }
  }

  /// Clears the pull cursor for [store] (the next pull starts from scratch).
  Future<void> clearCursor(String store) async {
    await pocket.db.update(
        'lp_sync_state', {'cursor_updated': null, 'cursor_id': null},
        where: 'scope = ? AND store = ?', whereArgs: [scope, store]);
  }

  /// Reads the rotating sweep state for [store] (fresh state when absent).
  Future<SweepState> readSweep(String store) async {
    final rows = await pocket.db.query('lp_sync_state',
        columns: ['sweep_bucket', 'sweep_at'],
        where: 'scope = ? AND store = ?',
        whereArgs: [scope, store],
        limit: 1);
    if (rows.isEmpty) return const SweepState(-1, null);
    return SweepState(
      (rows.first['sweep_bucket'] as int?) ?? -1,
      rows.first['sweep_at'] as int?,
    );
  }

  /// Writes the sweep state for [store] without touching the cursor columns.
  Future<void> writeSweep(DatabaseExecutor exec, String store,
      {required int bucket, required int sweepAt}) async {
    // Read-modify-write: never clobber the cursor columns.
    final existing = await exec.query('lp_sync_state',
        where: 'scope = ? AND store = ?', whereArgs: [scope, store], limit: 1);
    if (existing.isEmpty) {
      await exec.insert('lp_sync_state', {
        'scope': scope,
        'store': store,
        'sweep_bucket': bucket,
        'sweep_at': sweepAt,
      });
    } else {
      await exec.update(
          'lp_sync_state', {'sweep_bucket': bucket, 'sweep_at': sweepAt},
          where: 'scope = ? AND store = ?', whereArgs: [scope, store]);
    }
  }

  // -------------------------------------------------------------- status ---

  /// Number of records with pending local work.
  Future<int> countPending() async =>
      firstIntValue(await pocket.db.rawQuery(
          "SELECT COUNT(*) AS c FROM lp_sync_row WHERE sync_state IN ('dirty','in_flight')")) ??
      0;

  /// Number of records with an open conflict.
  Future<int> countConflicts() async =>
      firstIntValue(await pocket.db.rawQuery(
          "SELECT COUNT(*) AS c FROM lp_sync_row WHERE sync_state = 'conflict'")) ??
      0;

  /// Number of records hidden from the default query scope.
  Future<int> countHidden() async =>
      firstIntValue(await pocket.db.rawQuery(
          "SELECT COUNT(*) AS c FROM lp_sync_row WHERE access_state = 'hidden'")) ??
      0;

  /// All status counters in one query.
  Future<({int pending, int conflicts, int hidden, int blocked})>
      countAllStatus() async {
    final rows = await pocket.db.rawQuery('''
      SELECT
        SUM(CASE WHEN sync_state IN ('dirty', 'in_flight') THEN 1 ELSE 0 END) AS pending,
        SUM(CASE WHEN sync_state = 'conflict' THEN 1 ELSE 0 END) AS conflicts,
        SUM(CASE WHEN access_state = 'hidden' THEN 1 ELSE 0 END) AS hidden,
        SUM(CASE WHEN sync_state = 'blocked' THEN 1 ELSE 0 END) AS blocked
      FROM lp_sync_row
    ''');
    final row = rows.isEmpty ? const <String, Object?>{} : rows.first;
    return (
      pending: (row['pending'] as int?) ?? 0,
      conflicts: (row['conflicts'] as int?) ?? 0,
      hidden: (row['hidden'] as int?) ?? 0,
      blocked: (row['blocked'] as int?) ?? 0,
    );
  }
}
