/// The transaction coordinator: write-queue slot, durability pragma
/// transitions, group commit, read transactions, and post-commit WAL
/// bounding.
library;

import 'dart:async';

import 'change_bus.dart' show ChangeSet, RecordChangeEvent;
import 'kernel_context.dart';
import 'transaction.dart' show Tx;

/// Durability class for a transaction.
///
/// - [normal]: `synchronous=NORMAL` (default, app-crash-safe under WAL).
/// - [full]: `synchronous=FULL` for the local-first invariant — transactions
///   that write domain rows + outbox intent must not lose the tail commit.
enum DurabilityClass {
  /// Use `synchronous=NORMAL`, which is app-crash-safe under WAL.
  normal,

  /// Use `synchronous=FULL` for commits that must survive power loss.
  full,
}

/// {@template localpocket.transaction_coordinator}
/// The transaction owner. Every transaction entry point on the kernel
/// database delegates here; the coordinator receives the shared
/// [KernelContext] explicitly — never the public facade.
/// {@endtemplate}
class TransactionCoordinator {
  /// Creates a coordinator over the shared kernel dependencies.
  ///
  /// {@macro localpocket.transaction_coordinator}
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
      unawaited(context.database.maintenance
          .walCheckpointPassive()
          .catchError((Object _) {}));
    });
  }
}

/// {@template localpocket.__commit_group}
/// One group-commit unit: mutations submitted in the same event-loop turn
/// share a single SQLite transaction (one fsync). Members run under the
/// group-level Tx; in a multi-member group each member additionally runs
/// inside a SAVEPOINT so one failing member rolls back only itself.
/// {@endtemplate}
class _CommitGroup {
  /// {@macro localpocket.__commit_group}
  _CommitGroup(this.coordinator, this.durability);
  final TransactionCoordinator coordinator;
  KernelContext get context => coordinator.context;
  final DurabilityClass durability;
  final members = <_CommitMember>[];

  /// Set once [flush] has started: later arrivals open their own group.
  bool sealed = false;

  Completer<void>? _barrier;
  bool _barrierDone = false;

  /// Takes the single-writer slot immediately (preserving submission-order
  /// FIFO for reads and later writes) and waits for the end-of-turn barrier
  /// before committing, so sibling mutations in the same turn (or, with a
  /// coalescing window configured, within the window) can join.
  void reserve() {
    final barrier = Completer<void>();
    _barrier = barrier;
    unawaited(context.writeQueue.run(() async {
      await barrier.future;
      // Member completers already received any per-member error; swallow
      // the queue-level rethrow so it never becomes unhandled.
      try {
        await flush();
      } catch (_) {}
    }));
    // Timer(Duration.zero) (not scheduleMicrotask) defers past sibling
    // awaits in the same turn so the whole burst joins the group. A positive
    // window keeps the barrier open longer; a read or different-durability
    // submission flushes it early.
    final window = context.groupCommitWindow;
    if (window > Duration.zero) {
      Timer(window, flushEarly);
    } else {
      Timer.run(flushEarly);
    }
  }

  /// Completes the barrier early (a read arrived — read-your-writes must not
  /// wait out the window — or a different-durability submission needs its
  /// own group). Idempotent.
  void flushEarly() {
    if (_barrierDone) return;
    _barrierDone = true;
    if (identical(coordinator._pendingGroup, this)) {
      coordinator._pendingGroup = null;
    }
    _barrier?.complete();
  }

  /// Runs all joined members inside ONE write transaction. In multi-member
  /// groups a failing member rolls back to its savepoint and completes with
  /// the error alone; the rest commit. A solo member runs directly.
  Future<void> flush() async {
    sealed = true;
    if (members.isEmpty) return;
    final solo = members.length == 1;
    if (!solo) {
      context.perf.groupCommits++;
      context.perf.groupCommitMembers += members.length;
    }
    // Already inside the WriteQueue slot taken by [reserve]; re-entering
    // would deadlock on our own reserved slot.
    final sw = Stopwatch()..start();
    final inMemory = context.database.path == ':memory:';
    final useFull = durability == DurabilityClass.full && !inMemory;
    if (useFull && coordinator._synchronous != 'FULL') {
      await context.traceExecute('PRAGMA synchronous=FULL');
      coordinator._synchronous = 'FULL';
    }
    final changes = <ChangeSet>[];
    final recordEvents = <RecordChangeEvent>[];
    // Outcomes are surfaced only AFTER the transaction resolves: completing
    // inside the callback would resume callers BEFORE COMMIT executes, letting
    // them observe pre-commit state.
    final outcomes = <(_CommitMember, Object?, Object?, StackTrace?)>[];
    try {
      await context.db.transaction((txn) async {
        final tx = Tx.internal(context.database, txn, changes,
            recordEvents: recordEvents);
        if (solo) {
          try {
            final result = await tx.runInZone(() => members.single.action(tx));
            outcomes.add((members.single, result, null, null));
          } catch (e, st) {
            outcomes.add((members.single, null, e, st));
            // Right before the transaction ROLLBACKs: throw to simulate a
            // ROLLBACK failure (disk I/O, quota) so the caller observes a
            // failure instead of a false success.
            context.testHooks?.rollbackCrashPoint?.call();
            rethrow;
          }
        } else {
          for (final member in members) {
            try {
              final result = await tx
                  .runInZone(() => tx.transaction((m) => member.action(m)));
              outcomes.add((member, result, null, null));
            } catch (e, st) {
              outcomes.add((member, null, e, st));
            }
          }
        }
        // Right before COMMIT executes: throw to simulate a COMMIT failure
        // (OPFS quota, disk I/O, corruption) — the whole transaction rolls
        // back and every caller observes the thrown error.
        context.testHooks?.commitCrashPoint?.call();
      });
      // COMMIT has executed: now resolve every caller.
      for (final (m, result, err, st) in outcomes) {
        if (err != null) {
          m.completer.completeError(err, st);
        } else {
          m.completer.complete(result);
        }
      }
      for (final cs in changes) {
        context.tables[cs.store]?.readCache.invalidate(cs.ids);
        context.changeBus.emit(cs);
      }
      for (final event in recordEvents) {
        context.changeBus.emitEvent(event);
      }
    } catch (e, st) {
      // The transaction failed at BEGIN/COMMIT/rollback level; every
      // member's writes roll back with it. A member whose body failed keeps
      // its error only when that error IS the settle failure; otherwise
      // callers must learn the settle error, not a false success.
      for (final (m, _, err, mst) in outcomes) {
        if (m.completer.isCompleted) continue;
        if (err != null && identical(e, err)) {
          m.completer.completeError(err, mst);
        } else {
          m.completer.completeError(e, st);
        }
      }
      rethrow;
    } finally {
      if (useFull && coordinator._synchronous != 'NORMAL') {
        try {
          await context.traceExecute('PRAGMA synchronous=NORMAL');
          coordinator._synchronous = 'NORMAL';
        } catch (_) {}
      }
      context.perf.recordWriteTransaction(sw.elapsedMicroseconds);
      // Auto-checkpointing is disabled; opportunistically bound the WAL off
      // the writer's critical path.
      coordinator._noteWriteCommitted();
      // Safety net: a BEGIN-level failure unwinds before any member ran; no
      // caller may hang on an uncompleted completer.
      for (final member in members) {
        if (!member.completer.isCompleted) {
          member.completer.completeError(StateError('Group commit failed.'));
        }
      }
    }
  }
}

class _CommitMember {
  _CommitMember(this.action);
  final Future<dynamic> Function(Tx tx) action;
  final completer = Completer<dynamic>();
}
