import 'dart:async';

import 'database_adapter.dart';

import 'change_bus.dart';
import 'local_pocket.dart';
import 'store.dart';

/// A transaction handle. All mutation/read calls inside a
/// transaction must go through [Tx]; calling `LocalPocket.*` directly inside a
/// transaction is a programming error and throws.
class Tx {
  static final Object _zoneKey = Object();

  final LocalPocket _pocket;
  final DatabaseExecutor _executor;
  final List<ChangeSet> _changes;
  /// Whether this handle rejects mutations.
  final bool readOnly;
  final _SavepointCounter _sp;

  /// Internal: constructed by [LocalPocket].
  Tx.internal(this._pocket, this._executor, this._changes, {this.readOnly = false})
      : _sp = _SavepointCounter();

  DatabaseExecutor get executor => _executor;

  /// Returns the currently active [Tx] for [pocket], or null outside a
  /// transaction.
  static Tx? current(LocalPocket pocket) {
    final v = Zone.current[_zoneKey];
    if (v is Tx && identical(v._pocket, pocket)) return v;
    return null;
  }

  /// Runs [body] inside this transaction's zone so that nested
  /// `LocalPocket.*` calls are detected and rejected.
  T runInZone<T>(T Function() body) => runZoned(body, zoneValues: {_zoneKey: this});

  /// Buffers a post-commit change notification (emitted after commit only).
  void addChange(ChangeSet change) {
    _changes.add(change);
    _pocket.perf.recordRowsWritten(change.ids.length);
  }

  /// Scoped collection access bound to this transaction.
  Collection collection(String name) =>
      Collection.internal(_pocket, _pocket.requireTable(name), exec: _executor, tx: this);

  /// Nested transaction = SAVEPOINT.
  /// `SAVEPOINT` / `ROLLBACK TO` / `RELEASE` explicitly.
  Future<T> transaction<T>(Future<T> Function(Tx tx) action) {
    if (readOnly) {
      throw StateError('Cannot open a nested transaction in a read-only Tx.');
    }
    final name = _sp.next();
    return _withSavepoint<T>(name, action);
  }

  Future<T> _withSavepoint<T>(
    String name,
    Future<T> Function(Tx tx) action,
  ) async {
    await _executor.execute('SAVEPOINT $name');
    try {
      final nested = Tx.internal(_pocket, _executor, _changes).._sp.chain(_sp);
      final result = await nested.runInZone(() => action(nested));
      await _executor.execute('RELEASE $name');
      return result;
    } catch (e) {
      try {
        await _executor.execute('ROLLBACK TO $name');
        await _executor.execute('RELEASE $name');
      } catch (_) {}
      rethrow;
    }
  }
}

/// Monotonic savepoint-name generator shared across nested Txs so sibling
/// savepoints never collide.
class _SavepointCounter {
  int _n = 0;
  _SavepointCounter? _parent;

  String next() {
    final id = _parent != null ? '${_parent!.next()}_$_n' : '$_n';
    _n++;
    return 'lp_sp$id';
  }

  void chain(_SavepointCounter parent) => _parent = parent;
}
