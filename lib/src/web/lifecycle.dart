import 'dart:typed_data';
import 'dart:async';

import '../core/errors.dart';
import 'protocol.dart';

/// Terminates worker-owned stream controllers upon worker termination or unexpected close.
///
/// Adds [DatabaseWorkerClosedException] and closes every active stream controller
/// ensuring deterministic "error then done" terminal semantics.
void terminateWorkerStreams({
  required Map<int, StreamController<dynamic>> workerStreams,
  required Map<int, Object? Function(Object?)> workerEventDecoders,
  required StreamController<Map<String, Object?>> syncStatusController,
  required StreamController<void> authRequiredController,
  Object? error,
}) {
  final terminalError = error ??
      DatabaseWorkerClosedException('The database worker closed unexpectedly.');

  final streamsToClose = workerStreams.values.toList();
  workerStreams.clear();
  workerEventDecoders.clear();

  for (final stream in streamsToClose) {
    if (!stream.isClosed) {
      stream.addError(terminalError);
      stream.close();
    }
  }

  if (!syncStatusController.isClosed) {
    syncStatusController.addError(terminalError);
    syncStatusController.close();
  }

  if (!authRequiredController.isClosed) {
    authRequiredController.addError(terminalError);
    authRequiredController.close();
  }
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
