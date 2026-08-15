import 'dart:async';

import 'canonical_json.dart';
import 'change_bus.dart';
import 'codec.dart';
import 'hashing.dart';
import 'local_pocket.dart';
import 'query.dart';

/// Watch implementation: transaction-scoped invalidation + re-query.
/// Emissions only ever happen after commit; identical snapshots do not emit;
/// bursts coalesce on a 16 ms latest-wins window.
class QueryWatcher {
  final LocalPocket _pocket;
  final QueryBuilder _query;
  final Duration coalesceWindow;

  StreamController<List<Map<String, Object?>>>? _controller;
  StreamSubscription<ChangeSet>? _sub;
  Timer? _timer;
  bool _running = false;
  bool _dirty = false;
  Set<String>? _lastKnownIds;
  String? _digest;

  QueryWatcher(
    this._pocket,
    this._query, {
    this.coalesceWindow = const Duration(milliseconds: 16),
  });

  Stream<List<Map<String, Object?>>> start() {
    _controller = StreamController<List<Map<String, Object?>>>(
      onListen: () {
        _sub = _pocket.changes.listen(_onChange);
        _refresh();
      },
      onCancel: dispose,
    );
    return _controller!.stream;
  }

  void _onChange(ChangeSet cs) {
    if (cs.store != _query.store) return;
    // If the change specified explicit IDs and we have a snapshot of IDs,
    // and the query is an ID-specific query or non-empty ID set check:
    // we still refresh if unknown (empty IDs) or if IDs might intersect.
    if (cs.ids.isNotEmpty && _lastKnownIds != null) {
      // We will perform the refresh if there's any chance of intersection or new match
    }
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
      final items = await _runQuery();
      final digest = _digestOf(items);
      if (digest != _digest) {
        _lastKnownIds = {
          for (final item in items)
            if (item['id'] is String) item['id'] as String
        };
        _digest = digest;
        _pocket.perf.watchEmissions++;
        _controller?.add(items);
      }
    } catch (e) {
      _controller?.addError(e);
    } finally {
      _running = false;
      if (_dirty) {
        _dirty = false;
        _timer?.cancel();
        _timer = Timer(coalesceWindow, _refresh);
      }
    }
  }

  Future<List<Map<String, Object?>>> _runQuery() async {
    // Watches are bounded; a query without an explicit limit defaults to 50.
    if (_query.limitValue == null && !_query.allMode) {
      _query.limit(50);
    }
    final page = await _query.fetch();
    return page.items;
  }

  String _digestOf(List<Map<String, Object?>> items) {
    // Canonicalize each result row once. The previous representation first
    // canonicalized the payload and then escaped that JSON string again inside
    // a wrapper, doubling work for every non-projection row.
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
    _controller?.close();
  }
}

/// `watchOne` fast path: re-fetches only when the ChangeSet mentions the id
/// (or is an unknown/external change).
class OneWatcher {
  final LocalPocket _pocket;
  final StoreTable _table;
  final String id;
  final Duration coalesceWindow;

  StreamController<Map<String, Object?>?>? _controller;
  StreamSubscription<ChangeSet>? _sub;
  Timer? _timer;
  bool _running = false;
  bool _dirty = false;
  String? _digest;

  OneWatcher(this._pocket, this._table, this.id,
      {this.coalesceWindow = const Duration(milliseconds: 16)});

  Stream<Map<String, Object?>?> start() {
    _controller = StreamController<Map<String, Object?>?>(
      onListen: () {
        _sub = _pocket.changes.listen(_onChange);
        _refresh();
      },
      onCancel: dispose,
    );
    return _controller!.stream;
  }

  void _onChange(ChangeSet cs) {
    if (cs.store != _table.schema.name) return;
    if (cs.ids.isNotEmpty && !cs.ids.contains(id)) return;
    if (_running) {
      _dirty = true;
      return;
    }
    _timer?.cancel();
    _timer = Timer(coalesceWindow, _refresh);
  }

  Future<void> _refresh() async {
    _running = true;
    try {
      final rows = await _pocket.db
          .query(_table.tableName, where: 'id = ?', whereArgs: [id], limit: 1);
      Map<String, Object?>? logical;
      if (rows.isNotEmpty) {
        logical = decodeDbRow(
          _table.schema,
          rows.first,
          cipher: _pocket.fieldCipher,
          cryptoProvider: _pocket.cryptoProvider,
        );
      }
      final digest =
          logical == null ? '<null>' : sha256Hex(canonicalize(logical));
      if (digest != _digest) {
        _digest = digest;
        _controller?.add(logical);
      }
    } catch (e) {
      _controller?.addError(e);
    } finally {
      _running = false;
      if (_dirty) {
        _dirty = false;
        _timer?.cancel();
        _timer = Timer(coalesceWindow, _refresh);
      }
    }
  }

  void dispose() {
    _timer?.cancel();
    _sub?.cancel();
    _controller?.close();
  }
}
