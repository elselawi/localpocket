/// Part of `worker_engine.dart` — reactive watchers.
///
/// Wire handlers for `watch_one` (single-record watch) and `watch_cancel`.
/// Watcher emissions are forwarded to the client as `worker_event` envelopes
/// via the shared `WorkerEngineHost._emitWorkerEvent` (main file), so all
/// watcher kinds share one envelope shape and cannot drift. Query watches
/// travel the typed contract (`WatchRequest`/`WatchSnapshot`), answered by
/// the kernel command handler.
part of 'worker_engine.dart';

/// {@template localpocket.__active_watcher}
/// Active watcher registration in the worker.
/// {@endtemplate}
class _ActiveWatcher {
  /// {@macro localpocket.__active_watcher}
  _ActiveWatcher(this.cancel);
  final Future<void> Function() cancel;
}

/// Reactive-watcher handlers (see the file doc above).
mixin WorkerWatchHandlers on WorkerEngineHost {
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
