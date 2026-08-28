import 'dart:convert';
import 'dart:math';

import '../core/local_pocket.dart';
import 'sync_tables.dart';

/// {@template localpocket.op_queue}
/// Durable queue for operations that are not expressible as row state, such
/// as file uploads and removals.
/// {@endtemplate}
class OpQueue {

  /// Internal: constructed by [LocalPocket].
  ///
  /// {@macro localpocket.op_queue}
  OpQueue.internal(this.pocket);
  /// Database owning this queue.
  final LocalPocket pocket;
  final Random _rng = Random.secure();

  /// Adds a pending effect operation, optionally after another operation.
  Future<void> enqueue({
    required String store,
    required String recordId,
    required OpQueueKind kind,
    required Map<String, Object?> payload,
    String? dependsOnOp,
  }) => pocket.transaction((tx) async {
      await tx.executor.insert('lp_op_queue', {
        'op_id': _newOpId(),
        'store': store,
        'record_id': recordId,
        'kind': kind.name,
        'payload_json': jsonEncode(payload),
        'state': 'pending',
        'depends_on_op': dependsOnOp,
        'created_at': pocket.now(),
      });
    });

  /// Returns ops ready to run, FIFO by seq, skipping blocked ones.
  ///
  /// Both `pending` and retryable `failed` ops (whose persisted `next_retry_at`
  /// deadline has passed) are selected, so a transiently-failed op is never
  /// lost — it is retried with backoff until it succeeds or the record it
  /// belongs to is purged.
  Future<List<OpQueueRow>> drain({String? store, int limit = 25}) async {
    final now = pocket.now();
    final rows = await pocket.db.query('lp_op_queue',
        where: "state IN ('pending','failed') AND next_retry_at <= ?"
            '${store == null ? '' : ' AND store = ?'}',
        whereArgs: [
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
    final blocked = await queryBlockedDependencyOpIds(pocket.db, dependencyIds);

    final result = <OpQueueRow>[];
    for (final op in candidates) {
      if (result.length >= limit) break;
      if (op.dependsOnOp != null && blocked.contains(op.dependsOnOp)) continue;
      result.add(op);
    }
    return result;
  }

  /// Marks [opId] completed and releases dependents.
  Future<void> markDone(String opId) => pocket.transaction((tx) async {
      await tx.executor.update('lp_op_queue', {'state': 'done'},
          where: 'op_id = ?', whereArgs: [opId]);
    });

  /// Marks [opId] failed and stores [error] for inspection.
  ///
  /// The op stays retryable: it transitions to `failed` with an incremented
  /// attempt count and a persisted backoff deadline, and [drain] will select
  /// it again once the deadline passes. [attempts] is the total attempt count
  /// (including this failure) and [nextRetryAt] the epoch-ms deadline.
  Future<void> markFailed(String opId, String error,
      {int attempts = 1, int nextRetryAt = 0}) => pocket.transaction((tx) async {
      await tx.executor.update(
          'lp_op_queue',
          {
            'state': 'failed',
            'attempt_count': attempts,
            'next_retry_at': nextRetryAt,
            'last_error': error,
          },
          where: 'op_id = ?',
          whereArgs: [opId]);
    });

  String _newOpId() {
    final rng = _rng;
    return List.generate(32, (_) => rng.nextInt(16).toRadixString(16)).join();
  }
}
