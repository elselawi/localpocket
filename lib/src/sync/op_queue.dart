import 'dart:convert';
import 'dart:math';

import '../core/local_pocket.dart';
import 'sync_tables.dart';

/// Durable queue for operations that are not expressible as row state, such
/// as file uploads and removals.
class OpQueue {
  /// Database owning this queue.
  final LocalPocket pocket;
  final Random _rng = Random.secure();

  /// Internal: constructed by [LocalPocket].
  OpQueue.internal(this.pocket);

  /// Adds a pending effect operation, optionally after another operation.
  Future<void> enqueue({
    required String store,
    required String recordId,
    required OpQueueKind kind,
    required Map<String, Object?> payload,
    String? dependsOnOp,
  }) {
    return pocket.transaction((tx) async {
      await tx.executor.insert('lp_op_queue', {
        'op_id': _newOpId(),
        'store': store,
        'record_id': recordId,
        'kind': kind.name,
        'payload_json': jsonEncode(payload),
        'state': 'pending',
        'depends_on_op': dependsOnOp,
        'created_at': DateTime.now().millisecondsSinceEpoch,
      });
    });
  }

  /// Returns pending ops ready to run, FIFO by seq, skipping blocked ones.
  Future<List<OpQueueRow>> drain({String? store, int limit = 25}) async {
    final now = DateTime.now().millisecondsSinceEpoch;
    final rows = await pocket.db.query('lp_op_queue',
        where: 'state = ? AND next_retry_at <= ?${store == null ? '' : ' AND store = ?'}',
        whereArgs: [
          'pending',
          now,
          if (store != null) store,
        ],
        orderBy: 'seq ASC',
        limit: limit * 4 + 16);

    final candidates = [for (final row in rows) OpQueueRow.fromRow(row)];
    final dependencyIds = {
      for (final op in candidates)
        if (op.dependsOnOp != null) op.dependsOnOp!,
    };
    final blocked = <String>{};
    if (dependencyIds.isNotEmpty) {
      final ids = dependencyIds.toList();
      final placeholders = List.filled(ids.length, '?').join(', ');
      final outboxRows = await pocket.db.rawQuery(
          'SELECT op_id FROM lp_outbox WHERE op_id IN ($placeholders)', ids);
      blocked.addAll(outboxRows.map((row) => row['op_id'] as String));
      final queueRows = await pocket.db.rawQuery(
          "SELECT op_id FROM lp_op_queue WHERE op_id IN ($placeholders) AND state = 'pending'",
          ids);
      blocked.addAll(queueRows.map((row) => row['op_id'] as String));
    }

    final result = <OpQueueRow>[];
    for (final op in candidates) {
      if (result.length >= limit) break;
      if (op.dependsOnOp != null && blocked.contains(op.dependsOnOp)) continue;
      result.add(op);
    }
    return result;
  }

  /// Marks [opId] completed and releases dependents.
  Future<void> markDone(String opId) {
    return pocket.transaction((tx) async {
      await tx.executor.update('lp_op_queue', {'state': 'done'},
          where: 'op_id = ?', whereArgs: [opId]);
    });
  }

  /// Marks [opId] failed and stores [error] for inspection.
  Future<void> markFailed(String opId, String error) {
    return pocket.transaction((tx) async {
      await tx.executor.update('lp_op_queue', {
        'state': 'failed',
        'last_error': error,
      }, where: 'op_id = ?', whereArgs: [opId]);
    });
  }

  String _newOpId() {
    final rng = _rng;
    return List.generate(32, (_) => rng.nextInt(16).toRadixString(16)).join();
  }
}
