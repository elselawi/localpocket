/// Part of `local_pocket.dart` — the transaction coordinator: write-queue
/// slot, durability pragma transitions, group commit, read transactions, and
/// post-commit WAL bounding.
part of 'local_pocket.dart';

/// The transaction owner. Every transaction entry point on the kernel
/// database delegates here; the coordinator receives the shared
/// [KernelContext] explicitly — never the public facade.
class TransactionCoordinator {
  /// Creates a coordinator over the shared kernel dependencies.
  TransactionCoordinator(this.context);

  /// The shared kernel dependencies.
  final KernelContext context;

  /// Tracked `synchronous` pragma state so redundant transitions are skipped.
  /// Writes are serialized through the WriteQueue and the connection is
  /// kernel-owned (open() applies `synchronous=NORMAL`), so this state is
  /// authoritative for all write transactions.
  String _synchronous = 'NORMAL';

  /// The currently open (not yet flushed) commit group, if any.
  _CommitGroup? _pendingGroup;

  /// Write transactions committed since the last opportunistic passive WAL
  /// checkpoint (auto-checkpointing is off — see `_applyPragmas`).
  int _writesSinceCheckpoint = 0;

  /// Committed write transactions between opportunistic
  /// `wal_checkpoint(PASSIVE)` attempts; keeps the WAL bounded without
  /// inline checkpointing.
  static const int _passiveCheckpointEveryWrites = 64;

  /// Runs [action] in a serialized, single-writer transaction.
  ///
  /// Group commit: mutations from the same event-loop turn are coalesced
  /// into one SQLite transaction (one fsync). Each member runs in a
  /// savepoint, so a failing member rolls back only itself. Members with
  /// different durability classes never share a group.
  Future<T> transaction<T>(
    Future<T> Function(Tx tx) action, {
    DurabilityClass durability = DurabilityClass.normal,
  }) {
    // BISECT: no coalescing — each transaction flushes immediately.
    if (const bool.fromEnvironment('LP_BISECT', defaultValue: false)) {
      final group = _CommitGroup(this, durability);
      final member = _CommitMember(action);
      group.members.add(member);
      final done = group.flush();
      unawaited(done.catchError((Object _) {}));
      return member.completer.future.then((value) => value as T);
    }
    final group = _pendingGroup;
    if (group != null && group.durability == durability && !group.sealed) {
      final member = _CommitMember(action);
      group.members.add(member);
      return member.completer.future.then((value) => value as T);
    }
    return _startGroup(action, durability);
  }

  /// Starts a new commit group, flushed at end-of-turn (or after the
  /// coalescing window) so concurrently-submitted mutations can join.
  Future<T> _startGroup<T>(
      Future<dynamic> Function(Tx tx) action, DurabilityClass durability) {
    // A different-durability submission cannot join the pending group; with a
    // coalescing window enabled, flush the pending group early so this call
    // does not stall behind the other group's window (FIFO is preserved — the
    // pending group holds the queue slot first).
    if (context.groupCommitWindow > Duration.zero) {
      _pendingGroup?.flushEarly();
    }
    final group = _CommitGroup(this, durability);
    _pendingGroup = group;
    group.reserve();
    final member = _CommitMember(action);
    group.members.add(member);
    return member.completer.future.then((value) => value as T);
  }

  /// Runs [action] in a read-only transaction.
  ///
  /// Reads must serialize with writes through the same queue (a held-open
  /// read would make a queued write's BEGIN IMMEDIATE fail). A read also
  /// flushes a pending group first so read-your-writes holds.
  Future<T> read<T>(Future<T> Function(Tx tx) action) {
    if (context.groupCommitWindow > Duration.zero) {
      _pendingGroup?.flushEarly();
    }
    return context.writeQueue.run(() => context.db.transaction((txn) async {
          final changes = <ChangeSet>[];
          final tx =
              Tx.internal(context.database, txn, changes, readOnly: true);
          return tx.runInZone(() => action(tx));
        }));
  }

  /// Called after every committed write transaction. Once enough writes have
  /// accumulated, schedules a non-blocking passive checkpoint off the
  /// writer's path: PASSIVE never blocks, so this cannot stall the next
  /// commit, and a closed/unavailable handle is swallowed silently.
  void _noteWriteCommitted() {
    if (++_writesSinceCheckpoint < _passiveCheckpointEveryWrites) return;
    _writesSinceCheckpoint = 0;
    Timer.run(() {
      unawaited(
          context.database.walCheckpointPassive().catchError((Object _) {}));
    });
  }
}
