import 'dart:async';
import 'dart:typed_data';

import 'package:localpocket/localpocket.dart';
import 'package:localpocket/src/web/conversions.dart';
import 'package:localpocket/src/web/facade/facade_host.dart';
import 'package:localpocket/src/web/lifecycle.dart';
import 'package:localpocket/src/web/protocol.dart';

/// A recorded `filesUpload` call.
class RecordedFileUpload {
  final String store;
  final String recordId;
  final List<int> bytes;
  final String field;
  final String name;
  final int? expectedSize;
  final String? expectedSha256;

  RecordedFileUpload({
    required this.store,
    required this.recordId,
    required this.bytes,
    required this.field,
    required this.name,
    this.expectedSize,
    this.expectedSha256,
  });
}

/// In-memory [WebFacadeHost] for driving the facade proxy classes on the VM.
///
/// Records every sent envelope, returns canned responses (either a fixed
/// per-op map or a per-call handler), and exposes the same worker-event
/// delivery path the production facade uses (via `handleWorkerEventEnvelope`),
/// so watch tests exercise the real decode/dispatch logic.
class FakeFacadeHost implements WebFacadeHost {
  FakeFacadeHost(this.schemas);

  final Map<String, CollectionSchema> schemas;

  /// Every envelope sent through [send], in order: (op, args).
  final List<(String, Map<String, Object?>)> sent = [];

  /// Fixed per-op responses. A missing key makes [send] return null (which
  /// mirrors the worker's null result, e.g. a `get` of a missing record).
  final Map<String, Object?> responses = {};

  /// Per-call responder; when set it takes precedence over [responses].
  Future<Object?> Function(String op, Map<String, Object?> args)? onSend;

  @override
  final Map<int, StreamController<dynamic>> workerStreams = {};
  @override
  final Map<int, Object? Function(Object?)> workerEventDecoders = {};
  @override
  final WatchSubscriptionTracker watchTracker = WatchSubscriptionTracker();
  final ChangeBus changeBus = ChangeBus();

  final StreamController<Map<String, Object?>> syncStatusController =
      StreamController<Map<String, Object?>>.broadcast();
  final StreamController<void> authRequiredController =
      StreamController<void>.broadcast();

  @override
  int nextRequestId = 1000;

  @override
  Stream<RecordChangeEvent> get events => changeBus.events;

  @override
  Future<Object?> send(String op,
      [Map<String, Object?> args = const {}]) async {
    sent.add((op, args));
    if (onSend != null) return onSend!(op, args);
    return responses[op];
  }

  @override
  CollectionSchema schemaFor(String store) {
    final s = schemas[store];
    if (s == null) {
      throw StateError('No store "$store" registered in this LocalPocket.');
    }
    return s;
  }

  /// Delivers a raw worker-event value to [watchId] through the same
  /// `handleWorkerEventEnvelope` path the production facade runs.
  void deliverWorkerEvent(int watchId, Object? rawValue, {Object? error}) {
    handleWorkerEventEnvelope(
      {
        'v': webProtocolVersion,
        'op': WireOp.workerEvent,
        'watchId': watchId,
        if (error != null)
          'error': error
        else
          'value': encodeWireValue(rawValue),
      },
      workerStreams: workerStreams,
      workerEventDecoders: workerEventDecoders,
      authRequiredController: authRequiredController,
      syncStatusController: syncStatusController,
      changeBus: changeBus,
    );
  }

  // ---- file RPCs (recorded) ----

  final List<RecordedFileUpload> filesUploadCalls = [];
  Map<String, Object?> filesUploadResult = const {};
  int filesGcCalls = 0;
  int filesEnforceStorageCapCalls = 0;

  @override
  Future<Map<String, Object?>> filesUpload({
    required String store,
    required String recordId,
    required List<int> bytes,
    String field = 'imgs',
    String name = 'blob.bin',
    int? expectedSize,
    String? expectedSha256,
  }) async {
    filesUploadCalls.add(RecordedFileUpload(
      store: store,
      recordId: recordId,
      bytes: bytes,
      field: field,
      name: name,
      expectedSize: expectedSize,
      expectedSha256: expectedSha256,
    ));
    return filesUploadResult;
  }

  @override
  Future<List<Map<String, Object?>>> filesList({
    required String store,
    required String recordId,
    String field = 'imgs',
  }) async =>
      const [];

  @override
  Future<Uint8List> filesOpen({
    required String store,
    required String recordId,
    String field = 'imgs',
    int index = 0,
    String? refId,
  }) async =>
      Uint8List(0);

  @override
  Future<void> filesRemove({
    required String store,
    required String recordId,
    String field = 'imgs',
    int index = 0,
    String? refId,
  }) async {}

  @override
  Future<int> filesGc({
    Duration blobGrace = const Duration(days: 7),
    Duration tmpGrace = const Duration(hours: 24),
  }) async {
    filesGcCalls++;
    return 0;
  }

  @override
  Future<int> filesEnforceStorageCap({required int maxBytes}) async {
    filesEnforceStorageCapCalls++;
    return 0;
  }

  /// The ops sent so far (shorthand for assertions).
  List<String> get sentOps => [for (final (op, _) in sent) op];
}
