/// Part of `local_pocket.dart` — the transaction coordinator (Phase 2 of the
/// final refactoring plan, plan §12 step 6).
///
/// Owns transaction settlement: the single-writer write-queue slot, durability
/// pragma transitions, group commit (end-of-turn coalescing + coalescing
/// window), read transactions, and post-commit WAL bounding. This is an
/// extraction AROUND the existing behavior — the SQL, savepoint, event, and
/// settlement semantics are unchanged; the ownership boundary moves. The
/// physical file merge into `kernel/transaction_coordinator.dart` happens in
/// Phase 10; logically this class is the transaction owner.
part of 'local_pocket.dart';

/// The transaction owner. Every transaction entry point on the kernel
/// database delegates here; the coordinator receives the shared
/// [KernelContext] explicitly — never the public facade.
class TransactionCoordinator {
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

  /// How many committed write transactions may elapse before the next
  /// opportunistic `wal_checkpoint(PASSIVE)` is attempted. Keeps the WAL
  /// bounded at ~64 × (row image + page) without ever checkpointing inline.
  static const int _passiveCheckpointEveryWrites = 64;

  /// Runs [action] in a serialized, single-writer transaction.
  ///
  /// Group commit: mutations submitted from the SAME event-loop turn (e.g. a
  /// `Future.wait` burst or fire-and-forget writes) are coalesced into ONE
  /// SQLite transaction — one fsync for the whole group — without changing
  /// observable semantics. Each member's body runs inside a savepoint, so a
  /// failing member rolls back only itself; its error propagates to that
  /// caller alone while the rest of the group commits. A mutation submitted
  /// alone still commits at the end of the current event-loop turn with no
  /// added wait. Members with different durability classes never share a
  /// group.
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

  /// Starts a new commit group and schedules its flush at the end of the
  /// current event-loop turn (or after the configured coalescing window),
  /// giving concurrently-submitted mutations the chance to join before the
  /// transaction opens.
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
  /// Reads share the single connection and therefore must be serialized with
  /// writes through the same queue: a read transaction held open on the
  /// connection would otherwise make a queued write's BEGIN IMMEDIATE fail
  /// with "cannot start a transaction within a transaction".
  /// With a coalescing window open, a read also flushes the pending group
  /// first so read-your-writes holds without waiting out the window.
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
