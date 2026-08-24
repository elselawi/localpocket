/// Part of `worker_engine.dart` — conflict inspection + resolution.
///
/// Wire handlers for `conflicts_list/get/resolve/accept_local/accept_remote/
/// watch`. All delegate to the core `pocket.conflicts` API; records cross the
/// wire via `encodeConflictRecord` (conflicts_bridge.dart). The conflicts
/// watch stream is forwarded with the shared `WorkerEngineHost._emitWorkerEvent`
/// envelope (main file), so its wire shape matches `watch_query`/`watch_one`
/// exactly.
part of 'worker_engine.dart';

/// Conflict handlers (see the file doc above).
mixin WorkerConflictsHandlers on WorkerEngineHost {
  Future<Object?> _handleConflictsList(
      WorkerEventSink sink, WebRequest req) async {
    final store = WireArgs(req.args).optionalString('store');
    final conflicts = await pocket.conflicts.listOpen(store: store);
    return {'conflicts': conflicts.map(encodeConflictRecord).toList()};
  }

  Future<Object?> _handleConflictsGet(
      WorkerEventSink sink, WebRequest req) async {
    final w = WireArgs(req.args);
    final store = w.requireString('store', op: 'conflicts_get');
    final id = w.requireString('id', op: 'conflicts_get');
    final conflict = await pocket.conflicts.get(store, id);
    return conflict == null ? null : encodeConflictRecord(conflict);
  }

  Future<Object?> _handleConflictsResolve(
      WorkerEventSink sink, WebRequest req) async {
    final w = WireArgs(req.args);
    final store = w.requireString('store', op: 'conflicts_resolve');
    final id = w.requireString('id', op: 'conflicts_resolve');
    final merged = decodeWireValue(req.args['merged'])! as Map<String, Object?>;
    await pocket.conflicts.resolve(store: store, id: id, merged: merged);
    return {'ok': true};
  }

  Future<Object?> _handleConflictsAcceptLocal(
      WorkerEventSink sink, WebRequest req) async {
    final w = WireArgs(req.args);
    final store = w.requireString('store', op: 'conflicts_accept_local');
    final id = w.requireString('id', op: 'conflicts_accept_local');
    await pocket.conflicts.acceptLocal(store, id);
    return {'ok': true};
  }

  Future<Object?> _handleConflictsAcceptRemote(
      WorkerEventSink sink, WebRequest req) async {
    final w = WireArgs(req.args);
    final store = w.requireString('store', op: 'conflicts_accept_remote');
    final id = w.requireString('id', op: 'conflicts_accept_remote');
    await pocket.conflicts.acceptRemote(store, id);
    return {'ok': true};
  }

  Future<Object?> _handleConflictsWatch(
      WorkerEventSink sink, WebRequest req) async {
    final w = WireArgs(req.args);
    final watchId = w.requireInt('watchId', op: 'conflicts_watch');
    final store = w.optionalString('store');
    // The engine's own conflicts watch drives the stream: it emits the
    // initial list immediately on listen and then on every change (add,
    // resolve, modify), so every emission is forwarded as a worker event and
    // no initial snapshot is returned in the request response.
    final sub = pocket.conflicts.watch(store: store).listen((conflicts) {
      _emitWorkerEvent(
          sink, watchId, conflicts.map(encodeConflictRecord).toList());
    });
    _watchers[watchId] = _ActiveWatcher(() async {
      await sub.cancel();
    });
    return {'watchId': watchId};
  }
}
