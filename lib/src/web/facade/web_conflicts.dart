import 'dart:async';

import 'package:localpocket/localpocket.dart' show ConflictRecord;
import 'package:localpocket/src/web/conflicts_bridge.dart';
import 'package:localpocket/src/web/conversions.dart';
import 'package:localpocket/src/web/facade/facade_host.dart';
import 'package:localpocket/src/web/protocol.dart';

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
    final response = await _pocket.send(WireOp.conflictsList, {
      if (store != null) 'store': store,
    });
    if (response is! Map) {
      return const <ConflictRecord>[];
    }
    return ((response['conflicts'] as List?) ?? const [])
        .map((raw) => decodeConflictRecord(
            (raw as Map).map((k, v) => MapEntry(k.toString(), v))))
        .toList();
  }

  /// Returns the conflict for [store]/[id], or null when none is open.
  Future<ConflictRecord?> get(String store, String id) async {
    final res =
        await _pocket.send(WireOp.conflictsGet, {'store': store, 'id': id});
    if (res == null) return null;
    return decodeConflictRecord(
        (res as Map).map((k, v) => MapEntry(k.toString(), v)));
  }

  /// Watches open conflicts, emitting a new [List<ConflictRecord>] whenever
  /// conflicts are added, resolved, or modified. Broadcast, like native.
  Stream<List<ConflictRecord>> watch({String? store}) {
    late final StreamController<List<ConflictRecord>> controller;
    final watchId = _pocket.nextRequestId++;

    controller = StreamController<List<ConflictRecord>>.broadcast(
      onListen: () => _pocket.watchTracker.runRegistration(
        watchId: watchId,
        register: () async {
          _pocket.workerStreams[watchId] = controller;
          // Transform raw wire lists into typed ConflictRecords. The worker's
          // native conflicts watch emits the initial list immediately on
          // listen, so no initial snapshot is returned in the request response.
          _pocket.workerEventDecoders[watchId] = (raw) {
            if (raw is! List) {
              return const <ConflictRecord>[];
            }
            final list = raw.cast<Map<dynamic, dynamic>>();
            return [
              for (final m in list)
                decodeConflictRecord(m.map((k, v) => MapEntry(k.toString(), v)))
            ];
          };
          try {
            await _pocket.send(WireOp.conflictsWatch, {
              'watchId': watchId,
              if (store != null) 'store': store,
            });
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
    _pocket.workerStreams.remove(watchId);
    _pocket.workerEventDecoders.remove(watchId);
    try {
      await _pocket.send(WireOp.watchCancel, {'watchId': watchId});
    } catch (_) {}
  }

  /// Resolves the open conflict for [store]/[id] with [merged].
  Future<void> resolve({
    required String store,
    required String id,
    required Map<String, Object?> merged,
  }) async {
    await _pocket.send(WireOp.conflictsResolve, {
      'store': store,
      'id': id,
      'merged': encodeWireValue(merged),
    });
  }

  /// Accepts the local version to resolve the conflict.
  Future<void> acceptLocal(String store, String id) async {
    await _pocket.send(WireOp.conflictsAcceptLocal, {'store': store, 'id': id});
  }

  /// Accepts the remote version to resolve the conflict.
  Future<void> acceptRemote(String store, String id) async {
    await _pocket
        .send(WireOp.conflictsAcceptRemote, {'store': store, 'id': id});
  }
}
