/// Bounded file upload sessions and download flow-control state for the
/// command handler.
///
/// Uploads bound worst-case in-memory buffering (per-file, aggregate, chunk,
/// and sliding-TTL limits, all injectable); no durable state exists until the
/// finish request commits. Downloads track un-credited bytes so the source
/// stream pauses when the caller's credit window fills.
library;

import 'dart:async';
import 'dart:typed_data';

import 'errors.dart';
import 'files/attachment_field.dart';

/// Maximum chunk size for bounded file uploads (256 KiB).
const int defaultMaxUploadChunkBytes = 262144;

/// Maximum concurrent uploads allowed simultaneously.
const int defaultMaxConcurrentUploads = 16;

/// Maximum upload file size (256 MiB).
const int defaultMaxUploadFileBytes = 268435456;

/// Maximum total declared bytes across all active upload sessions (512 MiB).
///
/// Bounds the worst-case in-memory buffering: 16 concurrent sessions may not
/// jointly reserve more than this, no matter how large each individual file
/// is.
const int defaultMaxTotalUploadBytes = 536870912;

/// Time an upload session may stay idle (no accepted chunk) before it is
/// considered abandoned and its buffered bytes are reclaimed.
const Duration defaultUploadSessionTtl = Duration(minutes: 30);

/// Initial download credit window: bytes the kernel may push before the
/// consumer grants more via a credit request (1 MiB).
const int defaultFileDownloadWindowBytes = 1048576;

/// An active bounded-chunk upload session.
class FileUploadSession {
  /// Creates an upload session record.
  FileUploadSession({
    required this.sessionId,
    required this.store,
    required this.recordId,
    required this.expectedSize,
    required this.expiresAt,
    this.field = attachmentFieldDefault,
    this.name = 'blob.bin',
    this.expectedSha256,
    this.allowVolatileBlobs = false,
  });

  /// Kernel-minted session id; every chunk/finish/abort request carries it.
  final String sessionId;

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

  /// Whether the caller accepted a volatile blob store for this attachment
  /// (forwarded to the file service at finish time).
  final bool allowVolatileBlobs;

  /// Number of bytes received so far.
  int receivedBytes = 0;

  /// Chunks accumulated for this upload.
  final List<Uint8List> chunks = [];

  /// Deadline after which the session is abandoned and reclaimed. Refreshed
  /// by the registry on every accepted chunk (sliding TTL).
  DateTime expiresAt;
}

/// Registry that manages upload sessions and guarantees memory cleanup on
/// session error, abort, or completion.
class FileUploadSessionRegistry {
  /// Creates a bounded upload registry. Every limit is constructor-injectable
  /// so tests and embedders can tune the memory envelope without touching the
  /// production defaults.
  FileUploadSessionRegistry({
    this.maxConcurrentUploads = defaultMaxConcurrentUploads,
    this.maxFileBytes = defaultMaxUploadFileBytes,
    this.maxTotalBytes = defaultMaxTotalUploadBytes,
    this.maxChunkBytes = defaultMaxUploadChunkBytes,
    this.sessionTtl = defaultUploadSessionTtl,
    DateTime Function()? now,
  }) : now = now ?? _systemClock;

  /// Maximum number of uploads accepted at once.
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

  final Map<String, FileUploadSession> _sessions = {};

  /// Number of active upload sessions currently tracked.
  int get activeSessionCount => _sessions.length;

  /// Sum of the declared [FileUploadSession.expectedSize] bytes reserved by
  /// the active sessions against [maxTotalBytes].
  int get totalDeclaredBytes =>
      _sessions.values.fold(0, (sum, session) => sum + session.expectedSize);

  /// Returns the active session for [sessionId], if any.
  FileUploadSession? get(String sessionId) => _sessions[sessionId];

  /// Starts a new upload session for the given file metadata.
  FileUploadSession begin({
    required String sessionId,
    required String store,
    required String recordId,
    required int expectedSize,
    String field = attachmentFieldDefault,
    String name = 'blob.bin',
    String? expectedSha256,
    bool allowVolatileBlobs = false,
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
    final session = FileUploadSession(
      sessionId: sessionId,
      store: store,
      recordId: recordId,
      field: field,
      name: name,
      expectedSize: expectedSize,
      expectedSha256: expectedSha256,
      allowVolatileBlobs: allowVolatileBlobs,
      expiresAt: now().add(sessionTtl),
    );
    _sessions[sessionId] = session;
    return session;
  }

  /// Adds a chunk to the tracked upload for [sessionId].
  void addChunk({
    required String sessionId,
    required Uint8List chunk,
  }) {
    final session = _sessions[sessionId];
    if (session == null) {
      throw ValidationException('Unknown upload session: $sessionId');
    }
    if (!session.expiresAt.isAfter(now())) {
      // Reclaim the abandoned session so its bytes and quota do not leak.
      _sessions.remove(sessionId);
      throw ValidationException('Upload session expired: $sessionId');
    }
    if (chunk.length > maxChunkBytes) {
      // Remove the session so partial memory does not leak on invalid chunk.
      _sessions.remove(sessionId);
      throw ValidationException(
          'Chunk too large: ${chunk.length} > $maxChunkBytes');
    }
    if (session.receivedBytes + chunk.length > session.expectedSize) {
      // Remove the session on overflow error.
      _sessions.remove(sessionId);
      throw ValidationException(
          'Upload exceeds declared size ${session.expectedSize}');
    }
    session.chunks.add(chunk);
    session.receivedBytes += chunk.length;
    // A session that keeps receiving chunks stays alive (sliding TTL).
    session.expiresAt = now().add(sessionTtl);
  }

  /// Finalizes the upload and validates that the total payload matches.
  FileUploadSession takeForFinish(String sessionId) {
    final session = _sessions.remove(sessionId);
    if (session == null) {
      throw ValidationException('Unknown upload session: $sessionId');
    }
    if (!session.expiresAt.isAfter(now())) {
      throw ValidationException('Upload session expired: $sessionId');
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
        .map((session) => session.sessionId)
        .toList();
    for (final id in expiredIds) {
      _sessions.remove(id);
    }
    return expiredIds.length;
  }

  /// Cancels a pending upload and releases any partial state.
  bool abort(String sessionId) => _sessions.remove(sessionId) != null;

  /// Removes all tracked upload sessions.
  void clear() {
    _sessions.clear();
  }
}

DateTime _systemClock() => DateTime.now();

/// Internal: flow-control state of one open download stream. Owned by the
/// command handler's download registry.
class FileDownloadState {
  /// Creates the flow-control record for one download.
  FileDownloadState(this.id);

  /// The download stream id this state belongs to.
  final String id;

  /// Bytes pushed to the consumer that have not been credited back yet.
  int outstanding = 0;

  /// The source stream subscription; paused while [outstanding] fills the
  /// credit window, resumed by a credit request. Cancelled on handler close.
  // ignore: cancel_subscriptions
  late final StreamSubscription<List<int>> subscription;
}
