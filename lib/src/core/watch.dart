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

class QueryWatcher extends CoalescedWatcher<List<Map<String, Object?>>> {
  final QueryBuilder _query;
  StreamController<List<Map<String, Object?>>>? _controller;

  QueryWatcher(super.pocket, this._query, {super.coalesceWindow});

  @override
  bool shouldInvalidate(ChangeSet cs) => cs.store == _query.store;

  @override
  Future<List<Map<String, Object?>>> fetchSnapshot() {
    final int? internalLimit =
        _query.limitValue == null && !_query.allMode ? 50 : null;
    return _query.fetch(internalLimit: internalLimit).then((p) => p.items);
  }

  @override
  String computeDigest(List<Map<String, Object?>> data) =>
      computeSnapshotDigest(data,
          onDigestBytes: (b) => pocket.perf.watchDigestBytes += b);

  @override
  void onEmit(List<Map<String, Object?>> data) => _controller?.add(data);

  @override
  void onError(Object error, StackTrace stackTrace) =>
      _controller?.addError(error, stackTrace);

  Stream<List<Map<String, Object?>>> startStream() {
    _controller = StreamController<List<Map<String, Object?>>>(
      onListen: () {
        start();
        _refresh();
      },
      onCancel: dispose,
    );
    return _controller!.stream;
  }

  @override
  void dispose() {
    super.dispose();
    _controller?.close();
  }
}

/// `watchOne` fast path: re-fetches only when the ChangeSet mentions the id
/// (or is an unknown/external change).
class OneWatcher extends CoalescedWatcher<Map<String, Object?>?> {
  final StoreTable _table;
  final String id;
  StreamController<Map<String, Object?>?>? _controller;

  OneWatcher(super.pocket, this._table, this.id, {super.coalesceWindow});

  @override
  bool shouldInvalidate(ChangeSet cs) {
    if (cs.store != _table.schema.name) return false;
    if (cs.ids.isNotEmpty && !cs.ids.contains(id)) return false;
    return true;
  }

  @override
  Future<Map<String, Object?>?> fetchSnapshot() async {
    final rows = await pocket.db
        .query(_table.tableName, where: 'id = ?', whereArgs: [id], limit: 1);
    if (rows.isEmpty) return null;
    return decodeDbRow(
      _table.schema,
      rows.first,
      cipher: pocket.fieldCipher,
      cryptoProvider: pocket.cryptoProvider,
    );
  }

  @override
  String computeDigest(Map<String, Object?>? data) =>
      data == null ? '<null>' : sha256Hex(canonicalize(data));

  @override
  void onEmit(Map<String, Object?>? data) => _controller?.add(data);

  @override
  void onError(Object error, StackTrace stackTrace) =>
      _controller?.addError(error, stackTrace);

  Stream<Map<String, Object?>?> startStream() {
    _controller = StreamController<Map<String, Object?>?>(
      onListen: () {
        start();
        _refresh();
      },
      onCancel: dispose,
    );
    return _controller!.stream;
  }

  @override
  void dispose() {
    super.dispose();
    _controller?.close();
  }
}

String computeSnapshotDigest(
  List<Map<String, Object?>> items, {
  void Function(int bytes)? onDigestBytes,
}) {
  final parts = <String>[];
  for (final r in items) {
    parts.add(canonicalize(r));
  }
  final joined = parts.join('|');
  onDigestBytes?.call(joined.length);
  return sha256Hex(joined);
}

abstract class CoalescedWatcher<T> {
  final LocalPocket pocket;
  final Duration coalesceWindow;

  StreamSubscription<ChangeSet>? _sub;
  Timer? _timer;
  bool _running = false;
  bool _dirty = false;
  String? _digest;

  CoalescedWatcher(
    this.pocket, {
    this.coalesceWindow = const Duration(milliseconds: 16),
  });

  /// Decides if this change affects this watcher.
  bool shouldInvalidate(ChangeSet cs);

  /// Executes the query and returns the next data snapshot.
  Future<T> fetchSnapshot();

  /// Computes a hash/digest for [data] to detect changes.
  String computeDigest(T data);

  /// Called when a fresh digest is detected.
  void onEmit(T data);

  /// Optional error handler.
  void onError(Object error, StackTrace stackTrace) {}

  void start() {
    _sub = pocket.changes.listen(_onChange);
  }

  Future<T> initial() async {
    final data = await fetchSnapshot();
    _digest = computeDigest(data);
    return data;
  }

  void _onChange(ChangeSet cs) {
    if (!shouldInvalidate(cs)) return;
    if (_running) {
      _dirty = true;
      return;
    }
    _timer?.cancel();
    _timer = Timer(coalesceWindow, _refresh);
  }

  Future<void> _refresh() async {
    _running = true;
    pocket.perf.watchRefreshes++;
    try {
      final data = await fetchSnapshot();
      final digest = computeDigest(data);
      if (digest != _digest) {
        _digest = digest;
        pocket.perf.watchEmissions++;
        onEmit(data);
      }
    } catch (e, stack) {
      onError(e, stack);
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
  }
}
