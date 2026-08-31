import 'dart:async';

import 'package:localpocket/localpocket.dart' show ConflictRecord;
import 'package:localpocket/src/contract/contract.dart' as contract;
import 'package:localpocket/src/web/facade/facade_host.dart';

/// {@template localpocket.web_conflicts}
/// Main-thread conflicts API over the worker-owned engine.
///
/// Mirrors the native `Conflicts` surface exactly: listing, point reads,
/// a broadcast watch stream, and the three resolution paths. Every method
/// dispatches a typed wire op that delegates to `pocket.conflicts` in the
/// worker.
/// {@endtemplate}
class WebConflicts {
  /// Creates a web conflicts facade bound to [pocket].
  ///
  /// {@macro localpocket.web_conflicts}
  WebConflicts.ins(this._pocket);

  final WebFacadeHost _pocket;

  /// Lists all currently open / unresolved conflicts, optionally filtered by
  /// [store]. Sorted by detection time (ascending), matching native.
  Future<List<ConflictRecord>> listOpen({String? store}) async {
    final res = await _pocket.contractRuntime
        .send(contract.ConflictsListRequest(store: store));
    return [for (final c in res.conflicts) _record(c)];
  }

  /// Returns the conflict for [store]/[id], or null when none is open.
  Future<ConflictRecord?> get(String store, String id) async {
    final res = await _pocket.contractRuntime
        .send(contract.ConflictGetRequest(store: store, id: id));
    return res.conflict == null ? null : _record(res.conflict!);
  }

  /// Watches open conflicts, emitting a new [List<ConflictRecord>] whenever
  /// conflicts are added, resolved, or modified. The kernel mints the
  /// subscription id and emits [ConflictsSnapshot] events on the shared
  /// runtime stream; the initial list arrives with the first snapshot.
  Stream<List<ConflictRecord>> watch({String? store}) {
    late final StreamController<List<ConflictRecord>> controller;
    final watchId = _pocket.nextRequestId++;

    controller = StreamController<List<ConflictRecord>>.broadcast(
      onListen: () => _pocket.watchTracker.runRegistration(
        watchId: watchId,
        register: () async {
          try {
            final started = await _pocket.contractRuntime
                .send(contract.ConflictsWatchRequest(store: store));
            _subscriptions[watchId] = (
              subscription: started.subscription,
              // ignore: cancel_subscriptions
              listener: _pocket.contractRuntime.events.listen((e) {
                if (e is contract.ConflictsSnapshot &&
                    e.subscription == started.subscription &&
                    !controller.isClosed) {
                  controller.add([for (final c in e.conflicts) _record(c)]);
                }
              }),
            );
          } catch (e) {
            if (!controller.isClosed) controller.addError(e);
          }
        },
        unregister: () => _cancelWatch(watchId),
      ),
      onCancel: () async {
        await _pocket.watchTracker.requestUnregistration(
          watchId: watchId,
          unregister: () async {
            await _cancelWatch(watchId);
            if (!controller.isClosed) {
              await controller.close();
            }
          },
        );
      },
    );
    return controller.stream;
  }

  Future<void> _cancelWatch(int watchId) async {
    final registration = _subscriptions.remove(watchId);
    if (registration == null) return;
    await registration.listener.cancel();
    try {
      await _pocket.contractRuntime.send(
          contract.WatchCancelRequest(subscription: registration.subscription));
    } catch (_) {}
  }

  /// Contract subscription registration per facade watch id (id + listener).
  final Map<int,
          ({String subscription, StreamSubscription<contract.Event> listener})>
      _subscriptions = {};

  ConflictRecord _record(contract.ConflictData c) => ConflictRecord(
        store: c.store,
        recordId: c.recordId,
        base: Map<String, Object?>.of(c.base),
        local: Map<String, Object?>.of(c.local),
        remote: Map<String, Object?>.of(c.remote),
        dirtyLocal: Set<String>.of(c.dirtyLocal),
        dirtyRemote: Set<String>.of(c.dirtyRemote),
        detectedAt: c.detectedAt,
        resolved:
            c.resolved == null ? null : Map<String, Object?>.of(c.resolved!),
      );

  /// Resolves the open conflict for [store]/[id] with [merged].
  Future<void> resolve({
    required String store,
    required String id,
    required Map<String, Object?> merged,
  }) async {
    await _pocket.contractRuntime.send(
        contract.ResolveConflictRequest(store: store, id: id, merged: merged));
  }

  /// Accepts the local version to resolve the conflict.
  Future<void> acceptLocal(String store, String id) async {
    await _pocket.contractRuntime
        .send(contract.AcceptLocalRequest(store: store, id: id));
  }

  /// Accepts the remote version to resolve the conflict.
  Future<void> acceptRemote(String store, String id) async {
    await _pocket.contractRuntime
        .send(contract.AcceptRemoteRequest(store: store, id: id));
  }
}
