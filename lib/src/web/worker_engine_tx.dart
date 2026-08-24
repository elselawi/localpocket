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

/// Active interactive transaction session state in the worker (§7.1).
class _TxSession {
  _TxSession({
    required this.sessionId,
    required this.completer,
    required this.tx,
  });
  final int sessionId;
  final Completer<void> completer;
  final Tx tx;
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
    final readyCompleter = Completer<void>();

    unawaited(pocket.transaction((tx) async {
      _activeSession = _TxSession(
        sessionId: sessId,
        completer: completer,
        tx: tx,
      );
      readyCompleter.complete();
      await completer.future;
    }).catchError((_) {
      _activeSession = null;
    }));

    await readyCompleter.future;
    return {'sessionId': sessId};
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
    final mutations = w
        .requireList('mutations', op: 'tx_mutate_batch')
        .cast<Map<String, Object?>>();
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
    _activeSession = null;
    sess.completer.complete();
    return {'ok': true};
  }

  Future<Object?> _handleTxRollback(
      WorkerEventSink sink, WebRequest req) async {
    final sess = _requireSession(WireArgs(req.args).optionalInt('sessionId'));
    _activeSession = null;
    sess.completer.completeError(RemoteLocalPocketException(
        code: 'rollback', message: 'Transaction rolled back.'));
    return {'ok': true};
  }
}
