/// Per-(scope, store) sync state: pull cursors and sweep rotation
/// (`lp_sync_state`). Cursors are identity-scoped.
library;

import '../core/database_adapter.dart';

import '../core/local_pocket.dart';
import '../core/sql_utils.dart';

/// Identity-scoped pull cursor.
class PullCursor {
  /// Last remote update timestamp.
  final String updated;

  /// ID tie-breaker at [updated].
  final String id;

  /// Creates a pull cursor.
  const PullCursor(this.updated, this.id);
}

/// Rotating anti-entropy sweep state.
class SweepState {
  /// Last bucket visited, or `-1` before the first sweep.
  final int bucket;

  /// Time of the last completed sweep.
  final int? lastSweepAt;

  /// Creates sweep state.
  const SweepState(this.bucket, this.lastSweepAt);
}

/// Persists pull cursors, sweep progress, and aggregate sync status.
class SyncStore {
  final LocalPocket pocket;
  final String scope;

  SyncStore(this.pocket, this.scope);

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
      await exec.update('lp_sync_state',
          {'cursor_updated': updated, 'cursor_id': id},
          where: 'scope = ? AND store = ?', whereArgs: [scope, store]);
    }
  }

  Future<void> clearCursor(String store) async {
    await pocket.db.update('lp_sync_state', {'cursor_updated': null, 'cursor_id': null},
        where: 'scope = ? AND store = ?', whereArgs: [scope, store]);
  }

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
      await exec.update('lp_sync_state',
          {'sweep_bucket': bucket, 'sweep_at': sweepAt},
          where: 'scope = ? AND store = ?', whereArgs: [scope, store]);
    }
  }

  // -------------------------------------------------------------- status ---

  Future<int> countPending() async =>
      firstIntValue(await pocket.db.rawQuery(
              "SELECT COUNT(*) AS c FROM lp_sync_row WHERE sync_state IN ('dirty','in_flight')")) ??
      0;

  Future<int> countConflicts() async =>
      firstIntValue(await pocket.db.rawQuery(
              "SELECT COUNT(*) AS c FROM lp_sync_row WHERE sync_state = 'conflict'")) ??
      0;

  Future<int> countHidden() async =>
      firstIntValue(await pocket.db.rawQuery(
              "SELECT COUNT(*) AS c FROM lp_sync_row WHERE access_state = 'hidden'")) ??
      0;

  Future<({int pending, int conflicts, int hidden})> countAllStatus() async {
    final rows = await pocket.db.rawQuery('''
      SELECT
        SUM(CASE WHEN sync_state IN ('dirty', 'in_flight') THEN 1 ELSE 0 END) AS pending,
        SUM(CASE WHEN sync_state = 'conflict' THEN 1 ELSE 0 END) AS conflicts,
        SUM(CASE WHEN access_state = 'hidden' THEN 1 ELSE 0 END) AS hidden
      FROM lp_sync_row
    ''');
    final row = rows.isEmpty ? const <String, Object?>{} : rows.first;
    return (
      pending: (row['pending'] as int?) ?? 0,
      conflicts: (row['conflicts'] as int?) ?? 0,
      hidden: (row['hidden'] as int?) ?? 0,
    );
  }
}
