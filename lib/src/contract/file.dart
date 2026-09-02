part of 'contract.dart';

/// An immutable snapshot of one file attachment: the same shape both
/// platforms expose as `FileRef`. This is the wire-safe form of the kernel's
/// `lp_file_refs` row; it carries no behavior.
final class FileRefData {
  const FileRefData({
    required this.refId,
    required this.store,
    required this.recordId,
    required this.field,
    required this.hash,
    required this.state,
    this.remoteName,
    this.nextRetryAt = 0,
    this.attemptCount = 0,
    this.lastError,
  });

  factory FileRefData.fromJson(Map<String, Object?> json) => FileRefData(
        refId: json['refId']! as String,
        store: json['store']! as String,
        recordId: json['recordId']! as String,
        field: json['field']! as String,
        hash: json['hash']! as String,
        state: json['state']! as String,
        remoteName: json['remoteName'] as String?,
        nextRetryAt: json['nextRetryAt'] as int? ?? 0,
        attemptCount: json['attemptCount'] as int? ?? 0,
        lastError: json['lastError'] as String?,
      );

  /// Stable local file-reference ID.
  final String refId;

  /// Collection containing the owning record.
  final String store;

  /// Record containing the attachment.
  final String recordId;

  /// Attachment field name.
  final String field;

  /// Content hash used to locate the blob.
  final String hash;

  /// Remote filename, when known.
  final String? remoteName;

  /// Lifecycle state: pending upload, synced, pending remove, remote-only, or
  /// orphaned.
  final String state;

  /// Persisted retry deadline.
  final int nextRetryAt;

  /// Number of attempted file operations.
  final int attemptCount;

  /// Most recent file-operation error.
  final String? lastError;

  Map<String, Object?> toJson() => {
        'refId': refId,
        'store': store,
        'recordId': recordId,
        'field': field,
        'hash': hash,
        if (remoteName != null) 'remoteName': remoteName,
        'state': state,
        'nextRetryAt': nextRetryAt,
        'attemptCount': attemptCount,
        if (lastError != null) 'lastError': lastError,
      };
}

// ---------------------------------------------------------------------------
// bounded upload sessions
// ---------------------------------------------------------------------------

/// Begins a bounded upload session for one attachment. The session id is
/// kernel-minted; the accepted chunk limit rides the result so the caller can
/// chunk correctly without guessing. No catalog row exists until the finish
/// request, so an interrupted upload leaves no durable state.
final class FileBeginUploadRequest extends Request<FileUploadSessionResult> {
  const FileBeginUploadRequest({
    required this.store,
    required this.recordId,
    required this.size,
    this.field = attachmentFieldDefault,
    this.name = 'blob.bin',
    this.expectedSha256,
    this.allowVolatileBlobs = false,
  });

  final String store;
  final String recordId;

  /// Declared upload size in bytes.
  final int size;
  final String field;
  final String name;

  /// Optional expected SHA-256 checksum.
  final String? expectedSha256;

  /// Whether the caller accepts a volatile (in-memory) blob store for this
  /// attachment — forwarded to the kernel file service at finish time.
  final bool allowVolatileBlobs;

  @override
  String get tag => 'fileBeginUpload';
  @override
  String get resultTag => FileUploadSessionResult.tagValue;

  @override
  Map<String, Object?> toJson() => {
        'store': store,
        'recordId': recordId,
        'size': size,
        'field': field,
        'name': name,
        if (expectedSha256 != null) 'expectedSha256': expectedSha256,
        if (allowVolatileBlobs) 'allowVolatileBlobs': true,
      };
}

/// Hands one bounded chunk to an open upload session.
final class FileChunkRequest extends Request<OkResult> {
  const FileChunkRequest({required this.session, required this.chunk});

  final String session;
  final Uint8List chunk;

  @override
  String get tag => 'fileChunk';
  @override
  String get resultTag => OkResult.tagValue;

  @override
  Map<String, Object?> toJson() => {'session': session, 'chunk': chunk};
}

/// Completes an upload session: the kernel reassembles the chunks, hashes and
/// stores the bytes, and creates the durable file reference.
final class FileFinishRequest extends Request<FileRefResult> {
  const FileFinishRequest({required this.session});

  final String session;

  @override
  String get tag => 'fileFinish';
  @override
  String get resultTag => FileRefResult.tagValue;

  @override
  Map<String, Object?> toJson() => {'session': session};
}

/// Closes (cancels) an in-progress download stream: the kernel releases the
/// stream's subscription and credit window, so an abandoned download stops
/// pushing chunks instead of starving until close. Idempotent — an unknown or
/// already-finished stream answers Ok.
final class FileCloseRequest extends Request<OkResult> {
  const FileCloseRequest({required this.stream});

  final String stream;

  @override
  String get tag => 'fileClose';
  @override
  String get resultTag => OkResult.tagValue;

  @override
  Map<String, Object?> toJson() => {'stream': stream};
}

/// Aborts an upload session and releases its buffered bytes.
final class FileAbortRequest extends Request<OkResult> {
  const FileAbortRequest({required this.session});

  final String session;

  @override
  String get tag => 'fileAbort';
  @override
  String get resultTag => OkResult.tagValue;

  @override
  Map<String, Object?> toJson() => {'session': session};
}

// ---------------------------------------------------------------------------
// metadata + download
// ---------------------------------------------------------------------------

/// Lists the file references attached to a record field.
final class FilesListRequest extends Request<FileRefsResult> {
  const FilesListRequest({
    required this.store,
    required this.recordId,
    this.field = attachmentFieldDefault,
  });

  final String store;
  final String recordId;
  final String field;

  @override
  String get tag => 'filesList';
  @override
  String get resultTag => FileRefsResult.tagValue;

  @override
  Map<String, Object?> toJson() =>
      {'store': store, 'recordId': recordId, 'field': field};
}

/// Opens a download stream for one attachment. Chunks arrive as
/// [FileChunkEvent] envelopes under a caller-provided credit budget
/// ([FileCreditRequest]); the stream ends with a terminal (`last`) event. The
/// file is never buffered whole on the caller side of the runtime boundary.
final class FileOpenRequest extends Request<FileOpenResult> {
  const FileOpenRequest({
    required this.store,
    required this.recordId,
    this.field = attachmentFieldDefault,
    this.index = 0,
    this.refId,
  });

  final String store;
  final String recordId;
  final String field;
  final int index;

  /// Selects a specific reference instead of the [index]-th.
  final String? refId;

  @override
  String get tag => 'fileOpen';
  @override
  String get resultTag => FileOpenResult.tagValue;

  @override
  Map<String, Object?> toJson() => {
        'store': store,
        'recordId': recordId,
        'field': field,
        'index': index,
        if (refId != null) 'refId': refId,
      };
}

/// Grants [bytes] of download credit to an open file stream. Flow control is
/// caller-driven: the kernel pauses the stream when its outstanding
/// (un-credited) bytes reach the credit window.
final class FileCreditRequest extends Request<OkResult> {
  const FileCreditRequest({required this.stream, required this.bytes});

  final String stream;
  final int bytes;

  @override
  String get tag => 'fileCredit';
  @override
  String get resultTag => OkResult.tagValue;

  @override
  Map<String, Object?> toJson() => {'stream': stream, 'bytes': bytes};
}

/// Removes a file reference from a record.
final class FileRemoveRequest extends Request<OkResult> {
  const FileRemoveRequest({
    required this.store,
    required this.recordId,
    this.field = attachmentFieldDefault,
    this.index = 0,
    this.refId,
  });

  final String store;
  final String recordId;
  final String field;
  final int index;
  final String? refId;

  @override
  String get tag => 'fileRemove';
  @override
  String get resultTag => OkResult.tagValue;

  @override
  Map<String, Object?> toJson() => {
        'store': store,
        'recordId': recordId,
        'field': field,
        'index': index,
        if (refId != null) 'refId': refId,
      };
}

/// Garbage-collects unreferenced blobs and stale temporary uploads.
final class FileGcRequest extends Request<FileGcResult> {
  const FileGcRequest({
    this.blobGraceMs = 604800000,
    this.tmpGraceMs = 86400000,
  });

  /// Grace period for orphaned blobs (default 7 days).
  final int blobGraceMs;

  /// Grace period for temporary files (default 24 hours).
  final int tmpGraceMs;

  @override
  String get tag => 'fileGc';
  @override
  String get resultTag => FileGcResult.tagValue;

  @override
  Map<String, Object?> toJson() =>
      {'blobGraceMs': blobGraceMs, 'tmpGraceMs': tmpGraceMs};
}

/// Evicts synced blobs (LRU) until stored attachment bytes are at most
/// [maxBytes].
final class EnforceStorageCapRequest extends Request<FileCapResult> {
  const EnforceStorageCapRequest({required this.maxBytes});

  final int maxBytes;

  @override
  String get tag => 'fileEnforceStorageCap';
  @override
  String get resultTag => FileCapResult.tagValue;

  @override
  Map<String, Object?> toJson() => {'maxBytes': maxBytes};
}

/// Reports whether the runtime-owned blob store is durable.
final class StorageStatusRequest extends Request<StorageStatusResult> {
  const StorageStatusRequest();

  @override
  String get tag => 'fileStorageStatus';
  @override
  String get resultTag => StorageStatusResult.tagValue;

  @override
  Map<String, Object?> toJson() => const {};
}

// ---------------------------------------------------------------------------
// file results
// ---------------------------------------------------------------------------

/// A freshly opened (or accepted) upload session.
final class FileUploadSessionResult extends Result {
  const FileUploadSessionResult({
    required this.session,
    required this.maxChunkBytes,
  });
  static const String tagValue = 'fileUploadSession';
  @override
  String get tag => tagValue;

  /// Kernel-minted session id; every chunk/finish/abort request carries it.
  final String session;

  /// Largest chunk the kernel accepts for this session, in bytes.
  final int maxChunkBytes;

  @override
  Map<String, Object?> toJson() =>
      {'session': session, 'maxChunkBytes': maxChunkBytes};
}

/// One file reference (the [FileFinishRequest] outcome), or a miss.
final class FileRefResult extends Result {
  const FileRefResult(this.ref);
  static const String tagValue = 'fileRef';
  @override
  String get tag => tagValue;

  final FileRefData? ref;

  @override
  Map<String, Object?> toJson() => {'ref': ref?.toJson()};
}

/// The file references attached to a record field.
final class FileRefsResult extends Result {
  const FileRefsResult(this.refs);
  static const String tagValue = 'fileRefs';
  @override
  String get tag => tagValue;

  final List<FileRefData> refs;

  @override
  Map<String, Object?> toJson() => {
        'refs': [for (final r in refs) r.toJson()],
      };
}

/// A opened download stream: chunks arrive as events until the terminal one.
final class FileOpenResult extends Result {
  const FileOpenResult({required this.stream});
  static const String tagValue = 'fileOpen';
  @override
  String get tag => tagValue;

  final String stream;

  @override
  Map<String, Object?> toJson() => {'stream': stream};
}

/// Number of unreferenced blobs and stale files removed.
final class FileGcResult extends Result {
  const FileGcResult({required this.cleaned});
  static const String tagValue = 'fileGc';
  @override
  String get tag => tagValue;

  final int cleaned;

  @override
  Map<String, Object?> toJson() => {'cleaned': cleaned};
}

/// Number of blobs evicted by the storage cap.
final class FileCapResult extends Result {
  const FileCapResult({required this.evicted});
  static const String tagValue = 'fileCap';
  @override
  String get tag => tagValue;

  final int evicted;

  @override
  Map<String, Object?> toJson() => {'evicted': evicted};
}

/// Honest blob-store durability: `false` means bytes vanish on restart.
final class StorageStatusResult extends Result {
  const StorageStatusResult({required this.durable});
  static const String tagValue = 'storageStatus';
  @override
  String get tag => tagValue;

  final bool durable;

  @override
  Map<String, Object?> toJson() => {'durable': durable};
}

// ---------------------------------------------------------------------------
// file events
// ---------------------------------------------------------------------------

/// One chunk of an open download stream. [chunk] carries the next bytes; the
/// terminal event has [last] set (and an empty [chunk]); a failed stream ends
/// with [last] set and [error] describing the failure.
final class FileChunkEvent extends Event {
  const FileChunkEvent({
    required this.stream,
    required this.chunk,
    this.last = false,
    this.error,
  });

  static const String tagValue = 'fileChunk';
  @override
  String get tag => tagValue;

  final String stream;
  final Uint8List chunk;
  final bool last;
  final String? error;

  @override
  Map<String, Object?> toJson() => {
        'stream': stream,
        'chunk': encodeWireValue(chunk),
        'last': last,
        if (error != null) 'error': error,
      };
}
