/// Part of `worker_engine.dart` — bounded chunked upload + file metadata.
///
/// Wire handlers for `file_upload_begin/chunk/finish/abort` (bounded chunk
/// reassembly via `UploadSessionRegistry`, then `pocket.files.attach`) and
/// the metadata RPCs `file_list/open/remove/gc/enforce_storage_cap`.
///
/// No catalog row exists until `finish`, so a crash mid-upload leaves no
/// durable state.
part of 'worker_engine.dart';

/// File upload + metadata handlers (see the file doc above).
mixin WorkerFilesHandlers on WorkerEngineHost {
  Future<Object?> _handleFileUploadBegin(
      WorkerEventSink sink, WebRequest req) async {
    final w = WireArgs(req.args);
    final uploadId = _nextUploadId++;
    _uploadSessions.begin(
      uploadId: uploadId,
      store: w.requireString('store', op: 'file_upload_begin'),
      recordId: w.requireString('recordId', op: 'file_upload_begin'),
      field: w.optionalString('field') ?? 'imgs',
      name: w.optionalString('name') ?? 'blob.bin',
      expectedSize: w.requireInt('size', op: 'file_upload_begin'),
      expectedSha256: w.optionalString('expectedSha256'),
    );
    return {'uploadId': uploadId};
  }

  Future<Object?> _handleFileUploadChunk(
      WorkerEventSink sink, WebRequest req) async {
    final uploadId =
        WireArgs(req.args).requireInt('uploadId', op: 'file_upload_chunk');
    final bytes = decodeWireValue(req.args['chunk'])! as List<int>;
    _uploadSessions.addChunk(
      uploadId: uploadId,
      chunk: Uint8List.fromList(bytes),
    );
    return {'ok': true};
  }

  Future<Object?> _handleFileUploadFinish(
      WorkerEventSink sink, WebRequest req) async {
    final uploadId =
        WireArgs(req.args).requireInt('uploadId', op: 'file_upload_finish');
    final session = _uploadSessions.takeForFinish(uploadId);

    // Reassemble the byte stream from the bounded chunks.
    Stream<List<int>> stream() async* {
      for (final chunk in session.chunks) {
        yield chunk;
      }
    }

    final ref = await pocket.files.attach(
      store: session.store,
      recordId: session.recordId,
      bytes: stream(),
      field: session.field,
      name: session.name,
      expectedSize: session.expectedSize,
      expectedSha256: session.expectedSha256,
    );

    return {
      'refId': ref.refId,
      'hash': ref.hash,
      'state': ref.state,
      'remoteName': ref.remoteName,
    };
  }

  Future<Object?> _handleFileUploadAbort(
      WorkerEventSink sink, WebRequest req) async {
    final uploadId =
        WireArgs(req.args).requireInt('uploadId', op: 'file_upload_abort');
    _uploadSessions.abort(uploadId);
    return {'ok': true};
  }

  Future<Object?> _handleFileList(WorkerEventSink sink, WebRequest req) async {
    final w = WireArgs(req.args);
    final refs = await pocket.files.list(
      store: w.requireString('store', op: 'file_list'),
      recordId: w.requireString('recordId', op: 'file_list'),
      field: w.optionalString('field') ?? 'imgs',
    );
    return {'refs': refs.map(_encodeFileRef).toList()};
  }

  Future<Object?> _handleFileOpen(WorkerEventSink sink, WebRequest req) async {
    final w = WireArgs(req.args);
    final stream = await pocket.files.open(
      store: w.requireString('store', op: 'file_open'),
      recordId: w.requireString('recordId', op: 'file_open'),
      field: w.optionalString('field') ?? 'imgs',
      index: w.optionalInt('index') ?? 0,
      refId: w.optionalString('refId'),
    );
    final allBytes = <int>[];
    await for (final chunk in stream) {
      allBytes.addAll(chunk);
    }
    return {
      'bytes': encodeWireValue(Uint8List.fromList(allBytes)),
      'size': allBytes.length,
    };
  }

  Future<Object?> _handleFileRemove(
      WorkerEventSink sink, WebRequest req) async {
    final w = WireArgs(req.args);
    await pocket.files.remove(
      store: w.requireString('store', op: 'file_remove'),
      recordId: w.requireString('recordId', op: 'file_remove'),
      field: w.optionalString('field') ?? 'imgs',
      index: w.optionalInt('index') ?? 0,
      refId: w.optionalString('refId'),
    );
    return {'ok': true};
  }

  Future<Object?> _handleFileGc(WorkerEventSink sink, WebRequest req) async {
    final w = WireArgs(req.args);
    final cleaned = await pocket.files.gc(
      blobGrace: Duration(
          milliseconds: w.optionalInt('blobGraceMs') ??
              const Duration(days: 7).inMilliseconds),
      tmpGrace: Duration(
          milliseconds: w.optionalInt('tmpGraceMs') ??
              const Duration(hours: 24).inMilliseconds),
    );
    return {'cleaned': cleaned};
  }

  Future<Object?> _handleFileEnforceStorageCap(
      WorkerEventSink sink, WebRequest req) async {
    final w = WireArgs(req.args);
    final evicted = await pocket.files.enforceStorageCap(
        maxBytes: w.requireInt('maxBytes', op: 'file_enforce_storage_cap'));
    return {'evicted': evicted};
  }

  static Map<String, Object?> _encodeFileRef(FileRef ref) => {
        'refId': ref.refId,
        'store': ref.store,
        'recordId': ref.recordId,
        'field': ref.field,
        'hash': ref.hash,
        if (ref.remoteName != null) 'remoteName': ref.remoteName,
        'state': ref.state,
        'nextRetryAt': ref.nextRetryAt,
        'attemptCount': ref.attemptCount,
        if (ref.lastError != null) 'lastError': ref.lastError,
      };
}
