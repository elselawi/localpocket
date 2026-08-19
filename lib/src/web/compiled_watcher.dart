import 'dart:async';

import 'package:localpocket/src/core/canonical_json.dart';
import 'package:localpocket/src/core/change_bus.dart';
import 'package:localpocket/src/core/codec.dart';
import 'package:localpocket/src/core/hashing.dart';
import 'package:localpocket/src/core/local_pocket.dart';
import 'package:localpocket/src/core/schema.dart';

/// Compiled query plan watcher for web worker engine.
/// Watches a compiled SQL query by subscribing to [ChangeBus] and re-running
/// the compiled plan whenever matching stores are mutated.
class CompiledWatcher {
  final LocalPocket _pocket;
  final CollectionSchema _schema;
  final String _sql;
  final List<Object?> _params;
  final List<String>? _projection;
  final List<String>? _decodeColumns;
  final void Function(List<Map<String, Object?>> items) _emit;
  final void Function(Object error, StackTrace stackTrace)? _onError;
  final Duration coalesceWindow;

  StreamSubscription<ChangeSet>? _sub;
  Timer? _timer;
  bool _running = false;
  bool _dirty = false;
  String? _digest;

  CompiledWatcher(
    this._pocket,
    this._schema,
    this._sql,
    this._params,
    this._projection,
    this._decodeColumns,
    this._emit, {
    void Function(Object error, StackTrace stackTrace)? onError,
    this.coalesceWindow = const Duration(milliseconds: 16),
  }) : _onError = onError;

  void start() {
    _sub = _pocket.changes.listen(_onChange);
  }

  Future<List<Map<String, Object?>>> initial() async {
    final items = await _run();
    _digest = _digestOf(items);
    return items;
  }

  void _onChange(ChangeSet cs) {
    if (cs.store != _schema.name) return;
    if (_running) {
      _dirty = true;
      return;
    }
    _timer?.cancel();
    _timer = Timer(coalesceWindow, _refresh);
  }

  Future<void> _refresh() async {
    _running = true;
    _pocket.perf.watchRefreshes++;
    try {
      final items = await _run();
      final digest = _digestOf(items);
      if (digest != _digest) {
        _digest = digest;
        _pocket.perf.watchEmissions++;
        _emit(items);
      }
    } catch (e, stack) {
      // Forward the error via the diagnostic/error path if configured.
      // A failed refresh does not kill the watcher subscription;
      // subsequent changes will retry the refresh.
      _onError?.call(e, stack);
    } finally {
      _running = false;
      if (_dirty) {
        _dirty = false;
        _timer?.cancel();
        _timer = Timer(coalesceWindow, _refresh);
      }
    }
  }

  Future<List<Map<String, Object?>>> _run() async {
    final rows = await _pocket.traceQuery(_sql, _params);
    final columns = _decodeColumns;
    final decoded = columns != null
        ? decodeDbRowsProjected(_schema, rows,
            columns: columns,
            cipher: _pocket.fieldCipher,
            cryptoProvider: _pocket.cryptoProvider)
        : decodeDbRows(_schema, rows,
            cipher: _pocket.fieldCipher,
            cryptoProvider: _pocket.cryptoProvider);
    final projection = _projection;
    if (projection == null) return decoded;
    return [
      for (final row in decoded)
        {
          for (final k in projection)
            if (row.containsKey(k)) k: row[k]
        }
    ];
  }

  String _digestOf(List<Map<String, Object?>> items) {
    final parts = <String>[];
    for (final r in items) {
      parts.add(canonicalize(r));
    }
    final joined = parts.join('|');
    _pocket.perf.watchDigestBytes += joined.length;
    return sha256Hex(joined);
  }

  void dispose() {
    _timer?.cancel();
    _sub?.cancel();
  }
}
