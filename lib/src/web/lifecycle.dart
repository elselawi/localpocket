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
    if (!stream.isClosed) unawaited(stream.close());
  }
  if (!syncStatusController.isClosed) unawaited(syncStatusController.close());
  if (!authRequiredController.isClosed) {
    unawaited(authRequiredController.close());
  }
}

/// Fails every worker-owned stream with a [DatabaseWorkerClosedException]
/// without closing the controllers.
///
/// The facade's graceful `close()` owns controller disposal. An unexpected
/// worker close only reports the terminal error and clears registrations, so
/// the later graceful teardown can close each controller exactly once.
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
    if (rawEvent is! Map) {
      return;
    }
    final decoded = decodeWireValue(rawEvent);
    if (decoded is! Map) {
      return;
    }
    final recordMap = decoded.map((k, v) => MapEntry(k.toString(), v));
    try {
      final recordEvent = RecordChangeEvent.fromJson(recordMap);
      changeBus.emitEvent(recordEvent);
    } catch (_) {
      // Ignore malformed or incompatible unsolicited record events so unrelated
      // watcher traffic continues unaffected.
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
    if (!stream.isClosed) {
      unawaited(stream.close());
    }
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
  try {
    start();
    register();
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

  /// Returns whether [watchId] is still in the middle of registration.
  bool isRegistrationInFlight(int watchId) =>
      _inFlightRegistrations.contains(watchId);

  /// Returns whether an unregistration request is pending for [watchId].
  bool isUnregistrationPending(int watchId) =>
      _inFlightUnregistrations.contains(watchId);
}

/// Active bounded-chunk upload session (§ file upload).
class UploadSession {
  /// Creates an upload session for the worker-owned file upload stream.
  UploadSession({
    required this.uploadId,
    required this.store,
    required this.recordId,
    required this.expectedSize,
    required this.expiresAt,
    this.field = 'imgs',
    this.name = 'blob.bin',
    this.expectedSha256,
  });

  /// Stable upload id assigned by the engine.
  final int uploadId;

  /// Store receiving the file payload.
  final String store;

  /// Record id receiving the file payload.
  final String recordId;

  /// Field name used for the attachment.
  final String field;

  /// File name reported to the storage backend.
  final String name;

  /// Declared upload size in bytes.
  final int expectedSize;

  /// Optional expected SHA-256 checksum.
  final String? expectedSha256;

  /// Number of bytes received so far.
  int receivedBytes = 0;

  /// Chunks accumulated for this upload.
  final List<Uint8List> chunks = [];

  /// Deadline after which the session is abandoned and reclaimed. Refreshed
  /// by the registry on every accepted chunk (sliding TTL).
  DateTime expiresAt;
}

/// Maximum chunk size for bounded file uploads (256 KiB).
const int defaultMaxUploadChunkBytes = 262144;

/// Maximum concurrent uploads allowed simultaneously in worker.
const int defaultMaxConcurrentUploads = 16;

/// Maximum upload file size (256 MiB).
const int defaultMaxUploadFileBytes = 268435456;

/// Maximum total declared bytes across all active upload sessions (512 MiB).
///
/// Bounds the worker's worst-case in-memory buffering: 16 concurrent
/// sessions may not jointly reserve more than this, no matter how large
/// each individual file is.
const int defaultMaxTotalUploadBytes = 536870912;

/// Default time an upload session may stay idle (no accepted chunk) before
/// it is considered abandoned and its buffered bytes are reclaimed.
const Duration defaultUploadSessionTtl = Duration(minutes: 30);

/// Wall-clock source used by [UploadSessionRegistry] unless a clock is
/// injected for deterministic tests.
DateTime _systemClock() => DateTime.now();

/// Registry that manages upload sessions and guarantees memory cleanup
/// on session error, abort, or completion.
class UploadSessionRegistry {
  /// Creates a bounded upload registry for the worker file upload path.
  ///
  /// Every limit is constructor-injectable so tests and embedders can tune
  /// the memory envelope without touching the production defaults.
  UploadSessionRegistry({
    this.maxConcurrentUploads = defaultMaxConcurrentUploads,
    this.maxFileBytes = defaultMaxUploadFileBytes,
    this.maxTotalBytes = defaultMaxTotalUploadBytes,
    this.maxChunkBytes = defaultMaxUploadChunkBytes,
    this.sessionTtl = defaultUploadSessionTtl,
    DateTime Function()? now,
  }) : now = now ?? _systemClock;

  /// Maximum number of uploads the worker may accept at once.
  final int maxConcurrentUploads;

  /// Largest accepted file size in bytes.
  final int maxFileBytes;

  /// Aggregate quota across all active sessions in declared bytes.
  final int maxTotalBytes;

  /// Largest accepted chunk size in bytes.
  final int maxChunkBytes;

  /// Time a session may stay alive without receiving an accepted chunk
  /// before it is considered abandoned and reclaimed.
  final Duration sessionTtl;

  /// Clock used for expiry decisions (injectable for deterministic tests).
  final DateTime Function() now;

  final Map<int, UploadSession> _sessions = {};

  /// Number of active upload sessions currently tracked.
  int get activeSessionCount => _sessions.length;

  /// Sum of the declared [UploadSession.expectedSize] bytes reserved by the
  /// active sessions against [maxTotalBytes].
  int get totalDeclaredBytes =>
      _sessions.values.fold(0, (sum, session) => sum + session.expectedSize);

  /// Returns the active session for [uploadId], if any.
  UploadSession? get(int uploadId) => _sessions[uploadId];

  /// Starts a new upload session for the given file metadata.
  UploadSession begin({
    required int uploadId,
    required String store,
    required String recordId,
    required int expectedSize,
    String field = 'imgs',
    String name = 'blob.bin',
    String? expectedSha256,
  }) {
    // Reclaim abandoned sessions first so they stop reserving aggregate
    // quota and concurrency slots.
    expireStaleSessions();
    if (_sessions.length >= maxConcurrentUploads) {
      throw ValidationException(
          'Maximum concurrent uploads exceeded ($maxConcurrentUploads).');
    }
    if (expectedSize < 0 || expectedSize > maxFileBytes) {
      throw ValidationException('Invalid file size: $expectedSize');
    }
    if (totalDeclaredBytes + expectedSize > maxTotalBytes) {
      throw ValidationException('Aggregate upload quota exceeded: '
          '$totalDeclaredBytes + $expectedSize > $maxTotalBytes');
    }
    final session = UploadSession(
      uploadId: uploadId,
      store: store,
      recordId: recordId,
      field: field,
      name: name,
      expectedSize: expectedSize,
      expectedSha256: expectedSha256,
      expiresAt: now().add(sessionTtl),
    );
    _sessions[uploadId] = session;
    return session;
  }

  /// Adds a chunk to the tracked upload for [uploadId].
  void addChunk({
    required int uploadId,
    required Uint8List chunk,
  }) {
    final session = _sessions[uploadId];
    if (session == null) {
      throw ValidationException('Unknown upload session: $uploadId');
    }
    if (!session.expiresAt.isAfter(now())) {
      // Reclaim the abandoned session so its bytes and quota do not leak.
      _sessions.remove(uploadId);
      throw ValidationException('Upload session expired: $uploadId');
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
    // A session that keeps receiving chunks stays alive (sliding TTL).
    session.expiresAt = now().add(sessionTtl);
  }

  /// Finalizes the upload and validates that the total payload matches.
  UploadSession takeForFinish(int uploadId) {
    final session = _sessions.remove(uploadId);
    if (session == null) {
      throw ValidationException('Unknown upload session: $uploadId');
    }
    if (!session.expiresAt.isAfter(now())) {
      throw ValidationException('Upload session expired: $uploadId');
    }
    if (session.receivedBytes != session.expectedSize) {
      throw ValidationException(
          'Upload size mismatch: expected ${session.expectedSize} '
          'but got ${session.receivedBytes}');
    }
    return session;
  }

  /// Removes every session whose TTL has elapsed, releasing its buffered
  /// bytes and its reservation against [maxTotalBytes].
  ///
  /// Returns the number of sessions removed.
  int expireStaleSessions() {
    final cutoff = now();
    final expiredIds = _sessions.values
        .where((session) => !session.expiresAt.isAfter(cutoff))
        .map((session) => session.uploadId)
        .toList();
    for (final id in expiredIds) {
      _sessions.remove(id);
    }
    return expiredIds.length;
  }

  /// Cancels a pending upload and releases any partial state.
  bool abort(int uploadId) => _sessions.remove(uploadId) != null;

  /// Removes all tracked upload sessions.
  void clear() {
    _sessions.clear();
  }
}
