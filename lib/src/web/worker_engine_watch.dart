/// Part of `worker_engine.dart` — reactive watchers (§7.2).
///
/// Wire handlers for `watch_query` (compiled-plan watch), `watch_one`
/// (single-record watch) and `watch_cancel`. Watcher emissions are forwarded
/// to the client as `worker_event` envelopes via the shared
/// `WorkerEngineHost._emitWorkerEvent` (main file), so all watcher kinds
/// share one envelope shape and cannot drift.
///
/// The compiled-plan validation shared with `compiled_query` lives in
/// `WorkerEngineHost._parseCompiledPlan` (main file) — it is never duplicated
/// here, so watcher refreshes and on-demand fetches validate plans
/// identically.
part of 'worker_engine.dart';

/// {@template localpocket.__active_watcher}
/// Active watcher registration in the worker (§7.2).
/// {@endtemplate}
class _ActiveWatcher {

  /// {@macro localpocket.__active_watcher}
  _ActiveWatcher(this.cancel);
  final Future<void> Function() cancel;
}

/// Reactive-watcher handlers (see the file doc above).
mixin WorkerWatchHandlers on WorkerEngineHost {
  Future<Object?> _handleWatchQuery(
      WorkerEventSink sink, WebRequest req) async {
    final watchId = WireArgs(req.args).requireInt('watchId', op: 'watch_query');
    final plan = _parseCompiledPlan(req.args);
    final watcher = CompiledWatcher(
      pocket,
      pocket.requireTable(plan.store).schema,
      plan.sql,
      plan.args,
      plan.projection,
      plan.decodeColumns,
      (items) => _emitWorkerEvent(sink, watchId, items),
    );
    final registration = _ActiveWatcher(() async {
      watcher.dispose();
    });
    final initialItems = await initializeWebWatch<List<Map<String, Object?>>>(
      start: watcher.start,
      register: () => _watchers[watchId] = registration,
      initialize: watcher.initial,
      cleanup: () async {
        if (identical(_watchers[watchId], registration)) {
          _watchers.remove(watchId);
        }
        await registration.cancel();
      },
    );
    return {
      'watchId': watchId,
      'items': initialItems.map(encodeWireValue).toList(),
    };
  }

  Future<Object?> _handleWatchOne(WorkerEventSink sink, WebRequest req) async {
    final aw = WireArgs(req.args);
    final watchId = aw.requireInt('watchId', op: 'watch_one');
    final store = aw.requireString('store', op: 'watch_one');
    final id = aw.requireString('id', op: 'watch_one');
    final table = pocket.requireTable(store);
    final watcher = OneWatcher(pocket, table, id);
    late final StreamSubscription<Map<String, Object?>?> sub;
    final registration = _ActiveWatcher(() async {
      await sub.cancel();
    });
    final doc = await initializeWebWatch<Map<String, Object?>?>(
      start: () {
        sub = watcher.startStream().listen((item) {
          _emitWorkerEvent(sink, watchId, item);
        });
      },
      register: () => _watchers[watchId] = registration,
      initialize: () => pocket.collection(store).get(id),
      cleanup: () async {
        if (identical(_watchers[watchId], registration)) {
          _watchers.remove(watchId);
        }
        await registration.cancel();
      },
    );
    return {
      'watchId': watchId,
      'item': encodeWireValue(doc),
    };
  }

  Future<Object?> _handleWatchCancel(
      WorkerEventSink sink, WebRequest req) async {
    final wid = WireArgs(req.args).requireInt('watchId', op: 'watch_cancel');
    final watcher = _watchers.remove(wid);
    if (watcher != null) {
      await watcher.cancel();
    }
    return {'ok': true};
  }
}
