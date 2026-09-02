import 'dart:async';

import 'database_adapter.dart';

import 'change_bus.dart';
import 'execution_context.dart';
import 'local_pocket.dart';
import 'store.dart';

/// {@template localpocket.tx}
/// A transaction handle. All mutation/read calls inside a
/// transaction must go through [Tx]; calling `LocalPocket.*` directly inside a
/// transaction is a programming error and throws.
/// {@endtemplate}
class Tx {
  /// Internal: constructed by [LocalPocket].
  ///
  /// {@macro localpocket.tx}
  Tx.internal(
    this._pocket,
    this._executor,
    this._changes, {
    List<RecordChangeEvent>? recordEvents,
    this.readOnly = false,
  })  : _recordEvents = recordEvents ?? [],
        _sp = _SavepointCounter();

  static final Object _zoneKey = Object();

  final LocalPocket _pocket;
  final DatabaseExecutor _executor;
  final List<ChangeSet> _changes;
  final List<RecordChangeEvent> _recordEvents;

  /// Whether this handle rejects mutations.
  final bool readOnly;
  final _SavepointCounter _sp;

  /// The database executor scoped to this transaction.
  DatabaseExecutor get executor => _executor;

  /// The explicit execution context for this transaction.
  ///
  /// Every operation legal inside a transaction routes through this context:
  /// the transaction executor — never the outer database executor. Queries
  /// and searches created from this handle (`tx.collection(...).query()`,
  /// `.search()`) carry this context with them.
  ExecutionContext get context => ExecutionContext.transaction(
        executor: _executor,
        readOnly: readOnly,
      );

  /// Returns the currently active [Tx] for [pocket], or null outside a
  /// transaction.
  static Tx? current(LocalPocket pocket) {
    final v = Zone.current[_zoneKey];
    if (v is Tx && identical(v._pocket, pocket)) return v;
    return null;
  }

  /// Runs [body] inside this transaction's zone so that nested
  /// `LocalPocket.*` calls are detected and rejected.
  T runInZone<T>(T Function() body) =>
      runZoned(body, zoneValues: {_zoneKey: this});

  /// Buffers a post-commit change notification (emitted after commit only).
  void addChange(ChangeSet change) {
    _changes.add(change);
    _pocket.perf.recordRowsWritten(change.ids.length);
  }

  /// Buffers a detailed post-commit record change event (emitted after commit only).
  void addRecordEvent(RecordChangeEvent event) {
    // Nobody is listening: drop before it ever reaches a list. Broadcast
    // streams never replay history, so a listener attaching later could not
    // have received this event anyway.
    if (!_pocket.changeBus.hasEventListeners) return;
    _recordEvents.add(event);
  }

  /// Whether any record-event listener is currently attached. Mutation paths
  /// consult this BEFORE building [RecordChangeEvent] objects (old/new maps,
  /// changed-field sets) so an unwatched bulk write allocates nothing for
  /// notifications.
  bool get wantsRecordEvents => _pocket.changeBus.hasEventListeners;

  /// Scoped collection access bound to this transaction. The returned
  /// collection permanently carries this transaction's execution context.
  Collection collection(String name) => Collection.internal(
      _pocket, _pocket.requireTable(name),
      context: ExecutionContext.transaction(
          executor: _executor, readOnly: readOnly),
      tx: this);

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
    // Rolled-back savepoint work must not leak post-commit notifications or
    // rows-written accounting: snapshot both before running the nested body.
    final changeCountBefore = _changes.length;
    final eventCountBefore = _recordEvents.length;
    final rowsBefore = _pocket.perf.rowsWritten;
    try {
      final nested = Tx.internal(
        _pocket,
        _executor,
        _changes,
        recordEvents: _recordEvents,
      ).._sp.setParentName(name);
      final result = await nested.runInZone(() => action(nested));
      await _executor.execute('RELEASE $name');
      return result;
    } catch (e) {
      try {
        await _executor.execute('ROLLBACK TO $name');
        await _executor.execute('RELEASE $name');
      } catch (_) {}
      // Drop any ChangeSet and RecordChangeEvent buffered by the rolled-back savepoint and revert
      // the rows-written counter to its pre-savepoint value.
      if (_changes.length > changeCountBefore) {
        _changes.removeRange(changeCountBefore, _changes.length);
      }
      if (_recordEvents.length > eventCountBefore) {
        _recordEvents.removeRange(eventCountBefore, _recordEvents.length);
      }
      _pocket.perf.recordRowsWritten(rowsBefore - _pocket.perf.rowsWritten);
      rethrow;
    }
  }
}

/// Monotonic savepoint-name generator shared across nested Txs so sibling
/// savepoints never collide. Names are hierarchical: a savepoint nested under
/// `lp_sp1` is `lp_sp1_0`, `lp_sp1_1`, ...
class _SavepointCounter {
  int _n = 0;
  String? _parentName;

  String next() {
    final name = _parentName != null ? '${_parentName!}_$_n' : 'lp_sp$_n';
    _n++;
    return name;
  }

  /// Captures the enclosing savepoint name so nested names stay unique and
  /// hierarchical without consuming the parent's own sequence.
  void setParentName(String parentName) {
    _parentName = parentName;
  }
}
