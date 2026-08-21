/// Minimal main-thread host surface the web facade proxy classes
/// ([WebCollection], [WebQueryBuilder], [WebTx], [WebConflicts],
/// [WebLocalPocketFiles], ...) depend on.
///
/// Declared separately from the JS-bound `LocalPocket` facade so VM tests can
/// drive every proxy class against an in-memory fake host (recording sent
/// envelopes, returning canned wire responses, delivering worker events)
/// without `dart:js_interop`. The production facade implements this
/// interface; the wire format is unchanged.
library;

import 'dart:async';
import 'dart:typed_data';

import '../../core/change_bus.dart';
import '../../core/schema.dart';
import '../lifecycle.dart';

abstract interface class WebFacadeHost {
  /// Sends a typed request envelope and returns the decoded result.
  Future<Object?> send(String op, [Map<String, Object?> args = const {}]);

  /// Monotonic id shared by watch registrations and request envelopes.
  int get nextRequestId;
  set nextRequestId(int value);

  /// Active per-watch stream controllers (watch_id → controller).
  Map<int, StreamController<dynamic>> get workerStreams;

  /// Optional per-watch transform applied before a worker event is added to
  /// its [workerStreams] controller.
  Map<int, Object? Function(Object?)> get workerEventDecoders;

  /// Tracks pending watch registrations/unregistrations across the async
  /// worker boundary.
  WatchSubscriptionTracker get watchTracker;

  /// Resolves a registered store schema by name.
  CollectionSchema schemaFor(String store);

  /// Detailed committed record change events (old vs new, origin, action).
  Stream<RecordChangeEvent> get events;

  // ---- file attachment / lifecycle RPCs (delegated to the worker) ----

  Future<Map<String, Object?>> filesUpload({
    required String store,
    required String recordId,
    required List<int> bytes,
    String field = 'imgs',
    String name = 'blob.bin',
    int? expectedSize,
    String? expectedSha256,
  });

  Future<List<Map<String, Object?>>> filesList({
    required String store,
    required String recordId,
    String field = 'imgs',
  });

  Future<Uint8List> filesOpen({
    required String store,
    required String recordId,
    String field = 'imgs',
    int index = 0,
    String? refId,
  });

  Future<void> filesRemove({
    required String store,
    required String recordId,
    String field = 'imgs',
    int index = 0,
    String? refId,
  });

  Future<int> filesGc({
    Duration blobGrace = const Duration(days: 7),
    Duration tmpGrace = const Duration(hours: 24),
  });

  Future<int> filesEnforceStorageCap({required int maxBytes});
}
