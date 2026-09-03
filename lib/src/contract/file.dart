part of 'contract.dart';

/// Wire-safe snapshot of one file attachment (the kernel's `lp_file_refs` row
/// without behavior).
///
/// {@template localpocket.file_ref_data}
/// {@endtemplate}
final class FileRefData {
  /// {@macro localpocket.file_ref_data}
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

  /// Decodes from its wire map; malformed required fields throw [WireException].
  factory FileRefData.fromJson(Map<String, Object?> json) => FileRefData(
        refId: _wireString(json['refId'], 'refId'),
        store: _wireString(json['store'], 'store'),
        recordId: _wireString(json['recordId'], 'recordId'),
        field: _wireString(json['field'], 'field'),
        hash: _wireString(json['hash'], 'hash'),
        state: _wireString(json['state'], 'state'),
        remoteName: _optWireString(json['remoteName'], 'remoteName'),
        nextRetryAt: _optWireInt(json['nextRetryAt'], 'nextRetryAt', 0),
        attemptCount: _optWireInt(json['attemptCount'], 'attemptCount', 0),
        lastError: _optWireString(json['lastError'], 'lastError'),
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

  /// Lifecycle state: pending_upload, synced, pending_remove, remote_only,
  /// orphaned.
  final String state;

  /// Persisted retry deadline.
  final int nextRetryAt;

  /// Number of attempted file operations.
  final int attemptCount;

  /// Most recent file-operation error.
  final String? lastError;

  /// Serializes the reference into its wire map.
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

// bounded upload sessions

/// Begins a bounded upload session for one attachment. The session id is
/// kernel-minted; the accepted chunk limit rides the result. No catalog row
/// exists until finish, so an interrupted upload leaves no durable state.
///
/// {@template localpocket.file_begin_upload_request}
/// {@endtemplate}
final class FileBeginUploadRequest extends Request<FileUploadSessionResult> {
  /// {@macro localpocket.file_begin_upload_request}
  const FileBeginUploadRequest({
    required this.store,
    required this.recordId,
    required this.size,
    this.field = attachmentFieldDefault,
    this.name = 'blob.bin',
    this.expectedSha256,
    this.allowVolatileBlobs = false,
  });

  /// Store owning the record the attachment belongs to.
  final String store;

  /// Record the attachment belongs to.
  final String recordId;

  /// Attachment field name.
  final String field;

  /// Remote filename for the uploaded blob.
  final String name;

  /// Declared upload size in bytes.
  final int size;

  /// Optional expected SHA-256 checksum.
  final String? expectedSha256;

  /// Whether a volatile (in-memory) blob store is acceptable; forwarded to
  /// the kernel at finish time.
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
///
/// {@template localpocket.file_chunk_request}
/// {@endtemplate}
final class FileChunkRequest extends Request<OkResult> {
  /// {@macro localpocket.file_chunk_request}
  const FileChunkRequest({required this.session, required this.chunk});

  /// Upload session id returned by the begin request.
  final String session;

  /// The next bytes of the upload.
  final Uint8List chunk;

  @override
  String get tag => 'fileChunk';
  @override
  String get resultTag => OkResult.tagValue;

  @override
  Map<String, Object?> toJson() => {'session': session, 'chunk': chunk};
}

/// Completes an upload: the kernel reassembles chunks, hashes and stores the
/// bytes, and creates the durable file reference.
///
/// {@template localpocket.file_finish_request}
/// {@endtemplate}
final class FileFinishRequest extends Request<FileRefResult> {
  /// {@macro localpocket.file_finish_request}
  const FileFinishRequest({required this.session});

  /// Upload session id returned by the begin request.
  final String session;

  @override
  String get tag => 'fileFinish';
  @override
  String get resultTag => FileRefResult.tagValue;

  @override
  Map<String, Object?> toJson() => {'session': session};
}

/// Closes (cancels) an in-progress download stream, releasing its subscription
/// and credit window. Idempotent — unknown/finished streams answer Ok.
///
/// {@template localpocket.file_close_request}
/// {@endtemplate}
final class FileCloseRequest extends Request<OkResult> {
  /// {@macro localpocket.file_close_request}
  const FileCloseRequest({required this.stream});

  /// Download stream id to close.
  final String stream;

  @override
  String get tag => 'fileClose';
  @override
  String get resultTag => OkResult.tagValue;

  @override
  Map<String, Object?> toJson() => {'stream': stream};
}

/// Aborts an upload session and releases its buffered bytes.
///
/// {@template localpocket.file_abort_request}
/// {@endtemplate}
final class FileAbortRequest extends Request<OkResult> {
  /// {@macro localpocket.file_abort_request}
  const FileAbortRequest({required this.session});

  /// Upload session id to abort.
  final String session;

  @override
  String get tag => 'fileAbort';
  @override
  String get resultTag => OkResult.tagValue;

  @override
  Map<String, Object?> toJson() => {'session': session};
}

// metadata + download

/// Lists the file references attached to a record field.
///
/// {@template localpocket.files_list_request}
/// {@endtemplate}
final class FilesListRequest extends Request<FileRefsResult> {
  /// {@macro localpocket.files_list_request}
  const FilesListRequest({
    required this.store,
    required this.recordId,
    this.field = attachmentFieldDefault,
  });

  /// Store owning the record.
  final String store;

  /// Record to list attachments for.
  final String recordId;

  /// Attachment field name.
  final String field;

  @override
  String get tag => 'filesList';
  @override
  String get resultTag => FileRefsResult.tagValue;

  @override
  Map<String, Object?> toJson() =>
      {'store': store, 'recordId': recordId, 'field': field};
}

/// Opens a download stream for one attachment: chunks arrive as
/// [FileChunkEvent] envelopes under a caller-driven credit budget
/// ([FileCreditRequest]); the stream ends with a terminal (`last`) event.
///
/// {@template localpocket.file_open_request}
/// {@endtemplate}
final class FileOpenRequest extends Request<FileOpenResult> {
  /// {@macro localpocket.file_open_request}
  const FileOpenRequest({
    required this.store,
    required this.recordId,
    this.field = attachmentFieldDefault,
    this.index = 0,
    this.refId,
  });

  /// Store owning the record.
  final String store;

  /// Record holding the attachment.
  final String recordId;

  /// Attachment field name.
  final String field;

  /// Zero-based attachment index within the field.
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

/// Grants [bytes] of download credit to an open stream. The kernel pauses the
/// stream when outstanding (un-credited) bytes reach the credit window.
///
/// {@template localpocket.file_credit_request}
/// {@endtemplate}
final class FileCreditRequest extends Request<OkResult> {
  /// {@macro localpocket.file_credit_request}
  const FileCreditRequest({required this.stream, required this.bytes});

  /// Download stream id to credit.
  final String stream;

  /// Additional bytes the stream may push.
  final int bytes;

  @override
  String get tag => 'fileCredit';
  @override
  String get resultTag => OkResult.tagValue;

  @override
  Map<String, Object?> toJson() => {'stream': stream, 'bytes': bytes};
}

/// Removes a file reference from a record.
///
/// {@template localpocket.file_remove_request}
/// {@endtemplate}
final class FileRemoveRequest extends Request<OkResult> {
  /// {@macro localpocket.file_remove_request}
  const FileRemoveRequest({
    required this.store,
    required this.recordId,
    this.field = attachmentFieldDefault,
    this.index = 0,
    this.refId,
  });

  /// Store owning the record.
  final String store;

  /// Record holding the attachment.
  final String recordId;

  /// Attachment field name.
  final String field;

  /// Zero-based attachment index within the field.
  final int index;

  /// Selects a specific reference instead of the [index]-th.
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
///
/// {@template localpocket.file_gc_request}
/// {@endtemplate}
final class FileGcRequest extends Request<FileGcResult> {
  /// {@macro localpocket.file_gc_request}
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
///
/// {@template localpocket.enforce_storage_cap_request}
/// {@endtemplate}
final class EnforceStorageCapRequest extends Request<FileCapResult> {
  /// {@macro localpocket.enforce_storage_cap_request}
  const EnforceStorageCapRequest({required this.maxBytes});

  /// Maximum stored attachment bytes to keep.
  final int maxBytes;

  @override
  String get tag => 'fileEnforceStorageCap';
  @override
  String get resultTag => FileCapResult.tagValue;

  @override
  Map<String, Object?> toJson() => {'maxBytes': maxBytes};
}

/// Reports whether the runtime-owned blob store is durable.
///
/// {@template localpocket.storage_status_request}
/// {@endtemplate}
final class StorageStatusRequest extends Request<StorageStatusResult> {
  /// {@macro localpocket.storage_status_request}
  const StorageStatusRequest();

  @override
  String get tag => 'fileStorageStatus';
  @override
  String get resultTag => StorageStatusResult.tagValue;

  @override
  Map<String, Object?> toJson() => const {};
}

// file results

/// A freshly opened (or accepted) upload session.
///
/// {@template localpocket.file_upload_session_result}
/// {@endtemplate}
final class FileUploadSessionResult extends Result {
  /// {@macro localpocket.file_upload_session_result}
  const FileUploadSessionResult({
    required this.session,
    required this.maxChunkBytes,
  });

  /// Stable wire tag for this result type.
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
///
/// {@template localpocket.file_ref_result}
/// {@endtemplate}
final class FileRefResult extends Result {
  /// {@macro localpocket.file_ref_result}
  const FileRefResult(this.ref);

  /// Stable wire tag for this result type.
  static const String tagValue = 'fileRef';
  @override
  String get tag => tagValue;

  /// The created reference, or null when the session was unknown.
  final FileRefData? ref;

  @override
  Map<String, Object?> toJson() => {'ref': ref?.toJson()};
}

/// The file references attached to a record field.
///
/// {@template localpocket.file_refs_result}
/// {@endtemplate}
final class FileRefsResult extends Result {
  /// {@macro localpocket.file_refs_result}
  const FileRefsResult(this.refs);

  /// Stable wire tag for this result type.
  static const String tagValue = 'fileRefs';
  @override
  String get tag => tagValue;

  /// The references attached to the field.
  final List<FileRefData> refs;

  @override
  Map<String, Object?> toJson() => {
        'refs': [for (final r in refs) r.toJson()],
      };
}

/// A opened download stream: chunks arrive as events until the terminal one.
///
/// {@template localpocket.file_open_result}
/// {@endtemplate}
final class FileOpenResult extends Result {
  /// {@macro localpocket.file_open_result}
  const FileOpenResult({required this.stream});

  /// Stable wire tag for this result type.
  static const String tagValue = 'fileOpen';
  @override
  String get tag => tagValue;

  /// Kernel-minted stream id; credit and close requests carry it.
  final String stream;

  @override
  Map<String, Object?> toJson() => {'stream': stream};
}

/// Number of unreferenced blobs and stale files removed.
///
/// {@template localpocket.file_gc_result}
/// {@endtemplate}
final class FileGcResult extends Result {
  /// {@macro localpocket.file_gc_result}
  const FileGcResult({required this.cleaned});

  /// Stable wire tag for this result type.
  static const String tagValue = 'fileGc';
  @override
  String get tag => tagValue;

  /// Number of blobs and stale files removed.
  final int cleaned;

  @override
  Map<String, Object?> toJson() => {'cleaned': cleaned};
}

/// Number of blobs evicted by the storage cap.
///
/// {@template localpocket.file_cap_result}
/// {@endtemplate}
final class FileCapResult extends Result {
  /// {@macro localpocket.file_cap_result}
  const FileCapResult({required this.evicted});

  /// Stable wire tag for this result type.
  static const String tagValue = 'fileCap';
  @override
  String get tag => tagValue;

  /// Number of blobs evicted.
  final int evicted;

  @override
  Map<String, Object?> toJson() => {'evicted': evicted};
}

/// Honest blob-store durability: `false` means bytes vanish on restart.
///
/// {@template localpocket.storage_status_result}
/// {@endtemplate}
final class StorageStatusResult extends Result {
  /// {@macro localpocket.storage_status_result}
  const StorageStatusResult({required this.durable});

  /// Stable wire tag for this result type.
  static const String tagValue = 'storageStatus';
  @override
  String get tag => tagValue;

  /// Whether attachment bytes survive a restart.
  final bool durable;

  @override
  Map<String, Object?> toJson() => {'durable': durable};
}

// file events

/// One chunk of an open download stream; the terminal event has [last] set
/// (empty [chunk], or [error] on failure).
///
/// {@template localpocket.file_chunk_event}
/// {@endtemplate}
final class FileChunkEvent extends Event {
  /// {@macro localpocket.file_chunk_event}
  const FileChunkEvent({
    required this.stream,
    required this.chunk,
    this.last = false,
    this.error,
  });

  /// Stable wire tag for this event type.
  static const String tagValue = 'fileChunk';
  @override
  String get tag => tagValue;

  /// Download stream the chunk belongs to.
  final String stream;

  /// The next bytes of the download (empty on the terminal event).
  final Uint8List chunk;

  /// Whether this is the terminal event of the stream.
  final bool last;

  /// Failure description when the stream ends with an error.
  final String? error;

  @override
  Map<String, Object?> toJson() => {
        'stream': stream,
        'chunk': chunk,
        'last': last,
        if (error != null) 'error': error,
      };
}
