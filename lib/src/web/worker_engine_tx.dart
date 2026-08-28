/// Part of `worker_engine.dart` — interactive transaction sessions (§7.1).
///
/// Wire handlers for `tx_begin/get/mutate_batch/savepoint/rollback_to/
/// release/commit/rollback`. There is exactly one active session at a time
/// (`_activeSession` on the engine base); `WorkerEngineHost._requireSession`
/// (main file) rejects requests that target a missing or foreign session id.
///
/// Savepoint bookkeeping stays in lockstep with core `Tx` nested-transaction
/// semantics: `ROLLBACK TO` also `RELEASE`s (see `_handleTxRollbackTo`) so
/// savepoint names can never accumulate or collide across nested
/// transactions. Mutations reuse `WorkerEngineHost._applyMutation` (main
/// file) so the action vocabulary matches `mutate_batch` exactly.
part of 'worker_engine.dart';

/// {@template localpocket.__tx_session}
/// Active interactive transaction session state in the worker (§7.1).
/// {@endtemplate}
class _TxSession {
  /// {@macro localpocket.__tx_session}
  _TxSession({
    required this.sessionId,
    required this.completer,
    required this.tx,
    required this.done,
  });
  final int sessionId;

  /// Unblocks the held-open transaction body (the `tx_commit`/`tx_rollback`
  /// signal). Completing it lets the real SQL COMMIT/ROLLBACK run.
  final Completer<void> completer;
  final Tx tx;

  /// Resolves with the transaction's terminal outcome only after the real
  /// SQL COMMIT/ROLLBACK has executed: success after COMMIT, or the error
  /// when COMMIT/ROLLBACK failed (OPFS quota, disk I/O, corruption).
  /// `tx_commit`/`tx_rollback` await this before replying so a failed settle
  /// surfaces as a [WorkerError] instead of a false success.
  final Completer<void> done;

  final List<String> savepoints = [];
}

/// Interactive-transaction handlers (see the file doc above).
mixin WorkerTxHandlers on WorkerEngineHost {
  Future<Object?> _handleTxBegin(WorkerEventSink sink, WebRequest req) async {
    if (_activeSession != null) {
      throw StateError(
          'A transaction session is already active on this database.');
    }
    final sessId = _nextSessionId++;
    final completer = Completer<void>();
    final done = Completer<void>();
    final readyCompleter = Completer<void>();

    unawaited(_runTxSession(
      sessionId: sessId,
      bodyCompleter: completer,
      done: done,
      ready: readyCompleter,
    ));

    await readyCompleter.future;
    return {'sessionId': sessId};
  }

  /// Drives one interactive transaction session to completion.
  ///
  /// Holds a real `pocket.transaction(...)` open on [bodyCompleter] so the
  /// client can interleave reads and mutations over the wire, then resolves
  /// [done] with the transaction's terminal outcome: success only after the
  /// real SQL COMMIT has executed, or the error if COMMIT/ROLLBACK failed.
  /// `tx_commit`/`tx_rollback` await [done] so they never acknowledge before
  /// persistence is settled. The session is always released, even when the
  /// transaction fails. [ready] signals that the session is installed (or
  /// that begin failed outright, e.g. a BEGIN-level failure).
  Future<void> _runTxSession({
    required int sessionId,
    required Completer<void> bodyCompleter,
    required Completer<void> done,
    required Completer<void> ready,
  }) async {
    // The outcome is normally awaited by tx_commit/tx_rollback. When the
    // worker is closed mid-transaction nobody awaits it, so attach a guard
    // listener to keep a settle failure from surfacing as an unhandled error.
    unawaited(done.future.then((_) {}, onError: (_) {}));
    try {
      await pocket.transaction((tx) async {
        final session = _TxSession(
          sessionId: sessionId,
          completer: bodyCompleter,
          tx: tx,
          done: done,
        );
        _activeSession = session;
        ready.complete();
        await bodyCompleter.future;
      });
      if (!done.isCompleted) done.complete();
    } catch (e, st) {
      if (!done.isCompleted) done.completeError(e, st);
      if (!ready.isCompleted) ready.completeError(e, st);
    } finally {
      _activeSession = null;
    }
  }

  Future<Object?> _handleTxGet(WorkerEventSink sink, WebRequest req) async {
    final sess = _requireSession(WireArgs(req.args).optionalInt('sessionId'));
    final w = WireArgs(req.args);
    final store = w.requireString('store', op: 'tx_get');
    final id = w.requireString('id', op: 'tx_get');
    final doc = await sess.tx.collection(store).get(id);
    return encodeWireValue(doc);
  }

  Future<Object?> _handleTxMutateBatch(
      WorkerEventSink sink, WebRequest req) async {
    final sess = _requireSession(WireArgs(req.args).optionalInt('sessionId'));
    final w = WireArgs(req.args);
    final store = w.requireString('store', op: 'tx_mutate_batch');
    final mutations = w.requireList('mutations', op: 'tx_mutate_batch');
    final txCol = sess.tx.collection(store);
    for (final m in mutations) {
      await _applyMutation(txCol, m);
    }
    return {'ok': true};
  }

  Future<Object?> _handleTxSavepoint(
      WorkerEventSink sink, WebRequest req) async {
    final sess = _requireSession(WireArgs(req.args).optionalInt('sessionId'));
    final spName = 'lp_sp_wire_${sess.savepoints.length}';
    sess.savepoints.add(spName);
    await sess.tx.executor.execute('SAVEPOINT $spName');
    return {'savepoint': spName};
  }

  Future<Object?> _handleTxRollbackTo(
      WorkerEventSink sink, WebRequest req) async {
    final sess = _requireSession(WireArgs(req.args).optionalInt('sessionId'));
    final spName =
        WireArgs(req.args).requireString('savepoint', op: 'tx_rollback_to');
    // Mirror the native nested-transaction failure path (Tx._withSavepoint):
    // ROLLBACK TO discards the savepoint's work but leaves the savepoint
    // active, so it must also be RELEASEd and dropped from bookkeeping.
    // Otherwise stale names accumulate in sess.savepoints and subsequent
    // nested transactions (`lp_sp_wire_${sess.savepoints.length}`) can
    // collide or grow unbounded.
    await sess.tx.executor.execute('ROLLBACK TO $spName');
    await sess.tx.executor.execute('RELEASE $spName');
    sess.savepoints.remove(spName);
    return {'ok': true};
  }

  Future<Object?> _handleTxRelease(WorkerEventSink sink, WebRequest req) async {
    final sess = _requireSession(WireArgs(req.args).optionalInt('sessionId'));
    final spName =
        WireArgs(req.args).requireString('savepoint', op: 'tx_release');
    await sess.tx.executor.execute('RELEASE $spName');
    sess.savepoints.remove(spName);
    return {'ok': true};
  }

  Future<Object?> _handleTxCommit(WorkerEventSink sink, WebRequest req) async {
    final sess = _requireSession(WireArgs(req.args).optionalInt('sessionId'));
    try {
      // Release the session first so no late tx_* request can route to a
      // closing transaction, then unblock the held-open body and await the
      // real COMMIT: a failed COMMIT (quota, I/O, corruption) throws here so
      // the dispatcher replies with a WorkerError instead of a false success.
      if (identical(_activeSession, sess)) _activeSession = null;
      sess.completer.complete();
      await sess.done.future;
      return {'ok': true};
    } finally {
      if (identical(_activeSession, sess)) _activeSession = null;
    }
  }

  Future<Object?> _handleTxRollback(
      WorkerEventSink sink, WebRequest req) async {
    final sess = _requireSession(WireArgs(req.args).optionalInt('sessionId'));
    try {
      // Release the session and fail the held-open body so the transaction
      // rolls back, then await the rollback's terminal outcome so the reply
      // is only sent after the rollback has actually executed.
      if (identical(_activeSession, sess)) _activeSession = null;
      final signal = RemoteLocalPocketException(
          code: 'rollback', message: 'Transaction rolled back.');
      sess.completer.completeError(signal);
      try {
        await sess.done.future;
      } catch (e) {
        // The transaction rolls back by throwing [signal] out of the body;
        // that exact object is the successful-rollback signal. Any other
        // error means the rollback itself failed (I/O, quota, corruption)
        // and must reach the client as a WorkerError.
        if (!identical(e, signal)) rethrow;
      }
      return {'ok': true};
    } finally {
      if (identical(_activeSession, sess)) _activeSession = null;
    }
  }
}
