/// Interactive transactions over the runtime contract.
///
/// A transaction holds one kernel session open across an async body: every
/// store view handed out by [store] carries the session id, so its reads see
/// its own uncommitted writes and its writes join the session's single
/// commit. Savepoints nest inside the body and roll back without leaking
/// rows or events.
library;

import '../contract/contract.dart';
import '../runtime/runtime_client.dart';
import '../typed/store_def.dart';
import 'store.dart';

/// {@template localpocket.transaction}
/// One open interactive transaction session.
/// {@endtemplate}
final class Transaction {
  Transaction.internal({
    required RuntimeClient runtime,
    required this.session,
    required void Function() ensureOpen,
  })  : _runtime = runtime,
        _ensureOpen = ensureOpen;

  /// The kernel session id carried by every request of this transaction.
  final String session;

  final RuntimeClient _runtime;
  final void Function() _ensureOpen;
  int _savepoints = 0;

  /// A store view bound to this transaction.
  Store<S> store<S extends StoreDef<S>>(S def) => Store<S>.internal(
        runtime: _runtime,
        def: def,
        ensureOpen: _ensureOpen,
        session: session,
      );

  /// Opens a named savepoint and returns its name.
  ///
  /// Savepoints nest; [rollbackTo] undoes everything after the named one
  /// (including it), and [release] commits the innermost one into its
  /// parent.
  Future<String> savepoint() async {
    _ensureOpen();
    final name = 'sp${++_savepoints}';
    await _runtime
        .send(TransactionSavepointRequest(session: session, name: name));
    return name;
  }

  /// Rolls the transaction back to [name], undoing every later savepoint.
  Future<void> rollbackTo(String name) {
    _ensureOpen();
    return _send(TransactionRollbackToRequest(session: session, name: name));
  }

  /// Releases the innermost savepoint (it must be [name]), merging its work
  /// into the parent scope.
  Future<void> release(String name) {
    _ensureOpen();
    return _send(TransactionReleaseRequest(session: session, name: name));
  }

  Future<void> _send(Request<OkResult> request) {
    _ensureOpen();
    return _runtime.send(request);
  }
}
