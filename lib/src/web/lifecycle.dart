import 'dart:typed_data';
import 'dart:async';

import '../core/change_bus.dart';
import '../core/errors.dart';
import 'conversions.dart';
import 'protocol.dart';

/// Terminates worker-owned stream controllers upon worker termination or unexpected close.
///
/// Adds [DatabaseWorkerClosedException] (via [failWorkerStreams]) and closes
/// every active stream controller ensuring deterministic "error then done"
/// terminal semantics.
void terminateWorkerStreams({
  required Map<int, StreamController<dynamic>> workerStreams,
  required Map<int, Object? Function(Object?)> workerEventDecoders,
  required StreamController<Map<String, Object?>> syncStatusController,
  required StreamController<void> authRequiredController,
  Object? error,
}) {
  final streamsToClose = workerStreams.values.toList();
  failWorkerStreams(
    workerStreams: workerStreams,
    workerEventDecoders: workerEventDecoders,
    syncStatusController: syncStatusController,
    authRequiredController: authRequiredController,
    error: error,
  );
  for (final stream in streamsToClose) {
    if (!stream.isClosed) stream.close();
  }
  if (!syncStatusController.isClosed) syncStatusController.close();
  if (!authRequiredController.isClosed) authRequiredController.close();
}

/// Fails every worker-owned stream with a [DatabaseWorkerClosedException]
/// WITHOUT closing the controllers.
///
/// This mirrors the facade's `_markWorkerClosed` teardown: the facade's own
/// graceful `close()` closes the controllers itself, so an unexpected worker
/// close must not double-close them (which would make a later `close()` throw
/// on an already-closed controller).
void failWorkerStreams({
  required Map<int, StreamController<dynamic>> workerStreams,
  required Map<int, Object? Function(Object?)> workerEventDecoders,
  required StreamController<Map<String, Object?>> syncStatusController,
  required StreamController<void> authRequiredController,
  Object? error,
}) {
  final terminalError = error ??
      DatabaseWorkerClosedException('The database worker closed unexpectedly.');
  for (final stream in workerStreams.values) {
    if (!stream.isClosed) stream.addError(terminalError);
  }
  workerStreams.clear();
  workerEventDecoders.clear();
  if (!syncStatusController.isClosed) {
    syncStatusController.addError(terminalError);
  }
  if (!authRequiredController.isClosed) {
    authRequiredController.addError(terminalError);
  }
}

/// Dispatches one decoded worker→client event envelope to the matching watch
/// stream / status controller / change bus.
///
/// Mirrors the facade's `_handleWorkerEvent` core: `worker_event` events are
/// wire-decoded and added to the watch's [workerStreams] controller (through
/// its optional [workerEventDecoders] transform); `sync_status`/`auth_required`
/// events update the status controllers; `record_event` events are re-emitted
/// on the [ChangeBus]. Unknown ops, version mismatches, and malformed shapes
/// are ignored (a malformed unsolicited event must not tear down unrelated
/// requests).
void handleWorkerEventEnvelope(
  Map<String, Object?> event, {
  required Map<int, StreamController<dynamic>> workerStreams,
  required Map<int, Object? Function(Object?)> workerEventDecoders,
  required StreamController<void> authRequiredController,
  required StreamController<Map<String, Object?>> syncStatusController,
  required ChangeBus changeBus,
}) {
  if (event['v'] != webProtocolVersion) {
    return;
  }
  if (event['op'] == WireOp.authRequired) {
    if (!authRequiredController.isClosed) {
      authRequiredController.add(null);
    }
    return;
  }
  if (event['op'] == WireOp.syncStatus) {
    final status = event['status'];
    if (status is Map && !syncStatusController.isClosed) {
      syncStatusController.add(
          status.map((k, v) => MapEntry(k.toString(), decodeWireValue(v))));
    }
    return;
  }
  if (event['op'] == WireOp.recordEvent) {
    final rawEvent = event['event'];
    if (rawEvent is Map) {
      final decoded = (decodeWireValue(rawEvent) as Map)
          .map((k, v) => MapEntry(k.toString(), v));
      final recordEvent = RecordChangeEvent.fromJson(decoded);
      changeBus.emitEvent(recordEvent);
    }
    return;
  }
  if (event['op'] != WireOp.workerEvent) {
    return;
  }
  final watchId = event['watchId'];
  if (watchId is! int) return;
  final stream = workerStreams[watchId];
  if (stream == null || stream.isClosed) return;
  if (event['error'] != null) {
    stream.addError(RemoteLocalPocketException(
      code: 'watch',
      message: event['error'].toString(),
    ));
    return;
  }
  final eventValue = decodeWireValue(event['value']);
  final decoder = workerEventDecoders[watchId];
  stream.add(decoder != null ? decoder(eventValue) : eventValue);
}

/// Validates web open configuration before asset loading and worker initialization.
///
/// Throws [UnsupportedError] if unsupported options (like whole-database encryption
/// via SQLCipher) are requested on web.
void validateWebOpenConfig({required String path, required bool encrypted}) {
  if (encrypted) {
    throw UnsupportedError('SQLCipher is unsupported on web platform.');
  }
  if (path == ':memory:') {
    throw UnsupportedError(
      'Web platform does not support in-memory databases (:memory:). '
      'Use an explicitly named database path instead.',
    );
  }
}

/// Coordinates web database shutdown so the worker receives its close request
/// before the page-side facade becomes closed.
Future<void> closeWebResources({
  required Future<void> Function() sendWorkerClose,
  required void Function() markClosed,
  required Future<void> Function() disposePageResources,
}) async {
  try {
    await sendWorkerClose();
  } catch (_) {
    // Page-side disposal must still run when the worker is already gone or
    // rejects the close request.
  } finally {
    markClosed();
  }
  await disposePageResources();
}

/// Runs watch initialization with cleanup ownership established before the
/// first snapshot is requested. If initialization fails, the registration is
/// removed by [cleanup] before the error is allowed to escape.
Future<T> initializeWebWatch<T>({
  required void Function() start,
  required void Function() register,
  required Future<T> Function() initialize,
  required Future<void> Function() cleanup,
}) async {
  start();
  register();
  try {
    return await initialize();
  } catch (_) {
    await cleanup();
    rethrow;
  }
}

/// Tracks pending watch registrations and unregistrations across the asynchronous
/// worker boundary to prevent watcher leaks on early subscription cancellation.
class WatchSubscriptionTracker {
  final Set<int> _inFlightRegistrations = {};
  final Set<int> _inFlightUnregistrations = {};

  /// Runs [register] while tracking [watchId] as in-flight. If an unregistration
  /// request occurred while [register] was awaiting, [unregister] is invoked immediately.
  Future<void> runRegistration({
    required int watchId,
    required Future<void> Function() register,
    required Future<void> Function() unregister,
  }) async {
    _inFlightRegistrations.add(watchId);
    try {
      await register();
    } finally {
      _inFlightRegistrations.remove(watchId);
      if (_inFlightUnregistrations.remove(watchId)) {
        await unregister();
      }
    }
  }

  /// Requests unregistration for [watchId]. If [watchId] is currently in-flight
  /// during registration, delays cancellation until registration finishes.
  Future<void> requestUnregistration({
    required int watchId,
    required Future<void> Function() unregister,
  }) async {
    if (_inFlightRegistrations.contains(watchId)) {
      _inFlightUnregistrations.add(watchId);
      return;
    }
    await unregister();
  }

  bool isRegistrationInFlight(int watchId) =>
      _inFlightRegistrations.contains(watchId);

  bool isUnregistrationPending(int watchId) =>
      _inFlightUnregistrations.contains(watchId);
}

/// Active bounded-chunk upload session (§ file upload).
class UploadSession {
  final int uploadId;
  final String store;
  final String recordId;
  final String field;
  final String name;
  final int expectedSize;
  final String? expectedSha256;
  int receivedBytes = 0;
  final List<Uint8List> chunks = [];

  UploadSession({
    required this.uploadId,
    required this.store,
    required this.recordId,
    this.field = 'imgs',
    this.name = 'blob.bin',
    required this.expectedSize,
    this.expectedSha256,
  });
}

/// Maximum chunk size for bounded file uploads (256 KiB).
const int defaultMaxUploadChunkBytes = 262144;

/// Maximum concurrent uploads allowed simultaneously in worker.
const int defaultMaxConcurrentUploads = 16;

/// Maximum upload file size (~4 GiB).
const int defaultMaxUploadFileBytes = 4294967296;

/// Registry that manages upload sessions and guarantees memory cleanup
/// on session error, abort, or completion.
class UploadSessionRegistry {
  final int maxConcurrentUploads;
  final int maxFileBytes;
  final int maxChunkBytes;
  final Map<int, UploadSession> _sessions = {};

  UploadSessionRegistry({
    this.maxConcurrentUploads = defaultMaxConcurrentUploads,
    this.maxFileBytes = defaultMaxUploadFileBytes,
    this.maxChunkBytes = defaultMaxUploadChunkBytes,
  });

  int get activeSessionCount => _sessions.length;

  UploadSession? get(int uploadId) => _sessions[uploadId];

  UploadSession begin({
    required int uploadId,
    required String store,
    required String recordId,
    String field = 'imgs',
    String name = 'blob.bin',
    required int expectedSize,
    String? expectedSha256,
  }) {
    if (_sessions.length >= maxConcurrentUploads) {
      throw ValidationException(
          'Maximum concurrent uploads exceeded ($maxConcurrentUploads).');
    }
    if (expectedSize < 0 || expectedSize > maxFileBytes) {
      throw ValidationException('Invalid file size: $expectedSize');
    }
    final session = UploadSession(
      uploadId: uploadId,
      store: store,
      recordId: recordId,
      field: field,
      name: name,
      expectedSize: expectedSize,
      expectedSha256: expectedSha256,
    );
    _sessions[uploadId] = session;
    return session;
  }

  void addChunk({
    required int uploadId,
    required Uint8List chunk,
  }) {
    final session = _sessions[uploadId];
    if (session == null) {
      throw ValidationException('Unknown upload session: $uploadId');
    }
    if (chunk.length > maxChunkBytes) {
      // Remove the session so partial memory does not leak on invalid chunk.
      _sessions.remove(uploadId);
      throw ValidationException(
          'Chunk too large: ${chunk.length} > $maxChunkBytes');
    }
    if (session.receivedBytes + chunk.length > session.expectedSize) {
      // Remove the session on overflow error.
      _sessions.remove(uploadId);
      throw ValidationException(
          'Upload exceeds declared size ${session.expectedSize}');
    }
    session.chunks.add(chunk);
    session.receivedBytes += chunk.length;
  }

  UploadSession takeForFinish(int uploadId) {
    final session = _sessions.remove(uploadId);
    if (session == null) {
      throw ValidationException('Unknown upload session: $uploadId');
    }
    if (session.receivedBytes != session.expectedSize) {
      throw ValidationException(
          'Upload size mismatch: expected ${session.expectedSize} '
          'but got ${session.receivedBytes}');
    }
    return session;
  }

  bool abort(int uploadId) {
    return _sessions.remove(uploadId) != null;
  }

  void clear() {
    _sessions.clear();
  }
}
