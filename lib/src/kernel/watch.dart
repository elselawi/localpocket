import 'dart:async';

import 'package:localpocket/src/kernel/query/query_builder/query_builder.dart';

import 'canonical_json.dart';
import 'change_bus.dart';
import 'codec.dart';
import 'hashing.dart';
import 'local_pocket.dart';

/// Watch implementation: transaction-scoped invalidation + re-query.
/// Emissions only ever happen after commit; identical snapshots do not emit;
/// bursts coalesce on a 16 ms latest-wins window.

/// {@template localpocket.query_watcher}
/// A [Stream] of query results that emits whenever the query results change.
/// {@endtemplate}
class QueryWatcher extends CoalescedWatcher<List<Map<String, Object?>>> {
  /// Creates a watcher for a query.
  ///
  /// {@macro localpocket.query_watcher}
  QueryWatcher(super.pocket, this._query, {super.coalesceWindow});

  /// Query being tracked by this watcher.
  final QueryBuilder _query;

  /// Controller for the produced stream, initialized when the stream starts.
  StreamController<List<Map<String, Object?>>>? _controller;

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
          ordered: _query.hasExplicitOrder,
          onDigestBytes: (b) => pocket.perf.watchDigestBytes += b);

  @override
  void onEmit(List<Map<String, Object?>> data) => _controller?.add(data);

  @override
  void onError(Object error, StackTrace stackTrace) =>
      _controller?.addError(error, stackTrace);

  /// Starts the query stream and subscribes it to the change bus.
  Stream<List<Map<String, Object?>>> startStream() {
    _controller = StreamController<List<Map<String, Object?>>>(
      onListen: () async {
        start();
        await _refresh();
      },
      onCancel: dispose,
    );
    return _controller!.stream;
  }

  @override
  void dispose() {
    super.dispose();
    unawaited(_controller?.close());
  }
}

/// {@template localpocket.one_watcher}
/// `watchOne` fast path: re-fetches only when the ChangeSet mentions the id
/// (or is an unknown/external change).
/// {@endtemplate}
class OneWatcher extends CoalescedWatcher<Map<String, Object?>?> {
  /// Creates a watcher for a single record by id.
  ///
  /// {@macro localpocket.one_watcher}
  OneWatcher(super.pocket, this._table, this.id, {super.coalesceWindow});

  /// Store table being watched.
  final StoreTable _table;

  /// Record id being watched.
  final String id;

  /// Controller for the produced stream, initialized when the stream starts.
  StreamController<Map<String, Object?>?>? _controller;

  @override
  bool shouldInvalidate(ChangeSet cs) {
    if (cs.store != _table.schema.name) return false;
    if (cs.ids.isNotEmpty && !cs.ids.contains(id)) return false;
    return true;
  }

  @override
  Future<Map<String, Object?>?> fetchSnapshot() async {
    // Watchers are root-scoped: the snapshot read runs through the explicit
    // root execution context (plan Rule 5 — no direct outer-db access).
    final rows = await pocket.kernel.executionContext.executor
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

  /// Starts the single-record stream and subscribes it to the change bus.
  Stream<Map<String, Object?>?> startStream() {
    _controller = StreamController<Map<String, Object?>?>(
      onListen: () async {
        start();
        await _refresh();
      },
      onCancel: dispose,
    );
    return _controller!.stream;
  }

  @override
  void dispose() {
    super.dispose();
    unawaited(_controller?.close());
  }
}

/// Computes a deterministic digest for a snapshot of record rows.
///
/// [items] contains the current materialized snapshot. When [ordered] is false,
/// the rows are sorted before hashing so the digest is stable regardless of the
/// original iteration order.
String computeSnapshotDigest(
  List<Map<String, Object?>> items, {
  bool ordered = false,
  void Function(int bytes)? onDigestBytes,
}) {
  final parts = <String>[
    for (final r in items) canonicalize(r),
  ];
  if (!ordered) {
    parts.sort();
  }
  final joined = parts.join('|');
  onDigestBytes?.call(joined.length);
  return sha256Hex(joined);
}

/// {@template localpocket.coalesced_watcher}
/// Base implementation for watchers that coalesce repeated invalidations.
///
/// Subclasses fetch a fresh snapshot after relevant change notifications and
/// emit only when the computed digest differs from the previous snapshot.
/// {@endtemplate}
abstract class CoalescedWatcher<T> {
  /// Creates a watcher with the provided pocket and coalescing window.
  ///
  /// {@macro localpocket.coalesced_watcher}
  CoalescedWatcher(
    this.pocket, {
    this.coalesceWindow = const Duration(milliseconds: 16),
  });

  /// Pocket instance backing this watcher.
  final LocalPocket pocket;

  /// Delay used to coalesce bursty invalidations before reloading.
  final Duration coalesceWindow;

  StreamSubscription<ChangeSet>? _sub;
  Timer? _timer;
  bool _running = false;
  bool _dirty = false;
  bool _disposed = false;
  String? _digest;

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

  /// Subscribes this watcher to the change bus so it can react to invalidations.
  void start() {
    _sub = pocket.changes.listen(_onChange);
  }

  /// Fetches and caches the initial snapshot used for future change detection.
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
    if (_disposed) return;
    _running = true;
    pocket.perf.watchRefreshes++;
    try {
      final data = await fetchSnapshot();
      // A cancel raced in while the snapshot fetch was in flight: the
      // controller is closed (or closing), so never emit on it.
      if (_disposed) return;
      final digest = computeDigest(data);
      if (digest != _digest) {
        _digest = digest;
        pocket.perf.watchEmissions++;
        onEmit(data);
      }
    } catch (e, stack) {
      // onError must not run on a closed controller (addError would throw
      // again, escaping as a zone error when scheduled by the coalesce
      // timer); drop the error once the watcher is disposed.
      if (!_disposed) {
        onError(e, stack);
      }
    } finally {
      _running = false;
      if (!_disposed && _dirty) {
        _dirty = false;
        _timer?.cancel();
        _timer = Timer(coalesceWindow, _refresh);
      }
    }
  }

  /// Stops the watcher and cancels any queued refresh timers.
  void dispose() {
    _disposed = true;
    _timer?.cancel();
    _dirty = false;
    unawaited(_sub?.cancel());
  }
}
