/// The worker-side proxy for a page-executed sync backend.
///
/// The page hosts the caller's real `SyncBackend` (the object and everything
/// it closes over cannot cross the worker boundary); the worker receives a
/// [ProxySyncBackend] that forwards every `SyncBackend` method over the
/// callback channel ([callbackChannelSyncBackend], one multiplexed channel
/// with a `method` field — see `sync_wire.dart` for the wire scheme).
///
/// - [ProxySyncBackendFactory] implements `SyncBackendFactory`: `create`
///   asks the page to build the user's backend and caches the negotiated
///   [BackendCapabilities] and [scopeId] (they are synchronous getters on
///   the seam), answering the kernel exactly as a native factory would.
/// - [ProxySyncBackend] forwards pull, push, files (chunked at
///   [proxyChunkBytes] in both directions), and `prepare()`. Idempotency is
///   transparent: `PushOp.opId` and client record ids cross untouched — no
///   re-keying, no retries of its own.
/// - [ProxyBackendHub] routes the page→worker pushes (realtime
///   [BackendHint]s and the page-side token reads) to the right proxy
///   instance. The worker engine holds the hub (wired through
///   `controller.dart`, never a global) and dispatches `WireOp.backendCall`
///   requests into it.
library;

import 'dart:async';
import 'dart:typed_data' show BytesBuilder;

import '../errors.dart';
import '../page_callbacks.dart' show CallbackInvoker;
import 'sync_backend.dart';
import 'sync_wire.dart';

/// Routes page→worker backend pushes to the proxy instances the factory
/// created.
///
/// The hub is kernel-pure: it holds no transport and no global state — the
/// worker's engine owns it and dispatches `WireOp.backendCall` requests into
/// [pageCall].
final class ProxyBackendHub {
  final Map<int, ProxySyncBackend> _backends = {};
  int _nextId = 0;

  /// Reserves the id for the next backend the page will build. Reserved
  /// before `create` so the page's first answer can already reference it.
  int reserveId() => _nextId++;

  /// Registers a created proxy (called by the factory after `create`
  /// answers).
  void register(int id, ProxySyncBackend backend) {
    _backends[id] = backend;
  }

  /// Drops a disposed backend (stale page pushes for it are then ignored —
  /// the engine has stopped and can no longer consume them).
  void unregister(int id) => _backends.remove(id);

  /// Serves one page→worker backend call.
  ///
  /// `call: 'hint'` forwards an encoded [BackendHint] into the proxy's
  /// realtime stream; `call: 'currentToken'` reads the kernel's token source
  /// and answers with the result envelope (typed sync errors ride back as
  /// values — the page's token source rethrows them exactly).
  Future<Object?> pageCall(Map<String, Object?> args) async {
    final backendId = args['backend'];
    if (backendId is! int) {
      throw ValidationException('Backend call "backend" must be an int.');
    }
    final backend = _backends[backendId];
    if (backend == null) {
      throw ValidationException(
          'No proxy sync backend #$backendId is running (it was stopped or '
          'never started).');
    }
    final call = args['call'];
    if (call is! String) {
      throw ValidationException('Backend call "call" must be a string.');
    }
    switch (call) {
      case 'hint':
        backend.acceptHint(
            decodeBackendHint(args['hint'], where: 'backend hint'));
        return const {'ok': true};
      case 'currentToken':
        try {
          return encodeBackendResult(await backend.tokenSource.currentToken());
        } on SyncError catch (e) {
          return encodeBackendError(e);
        } catch (e) {
          return encodeBackendPageError(e);
        }
      default:
        throw ValidationException('Unknown backend call "$call".');
    }
  }
}

/// The worker-side stand-in for the page-hosted [SyncBackend].
///
/// Every method is one multiplexed-channel invocation; typed sync errors
/// reconstruct as their exact subtypes (see `sync_wire.dart`). File methods
/// stream in [proxyChunkBytes] chunks via a begin → N-chunk → finish
/// session, mirroring the facade file-upload chunking.
final class ProxySyncBackend implements SyncBackend {
  ProxySyncBackend._({
    required this.backendId,
    required CallbackInvoker invoker,
    required ProxyBackendHub hub,
    required this.tokenSource,
    required this.capabilities,
    required this.scopeId,
  })  : _invoker = invoker,
        _hub = hub;

  /// The id the page and the hub use to route calls for this backend.
  final int backendId;

  /// The kernel's token source captured at `create`; the page's backend
  /// reads it through the channel, so auth updates propagate without a
  /// rebuild.
  final SyncTokenSource tokenSource;

  final CallbackInvoker _invoker;
  final ProxyBackendHub _hub;
  final StreamController<BackendHint> _hints =
      StreamController<BackendHint>.broadcast();
  int _nextSession = 0;

  @override
  final BackendCapabilities capabilities;

  @override
  final String scopeId;

  /// Feeds one page-pushed hint into the realtime stream (called by the
  /// hub). Hints arriving after disposal are dropped — the stream is closed
  /// and the engine has stopped.
  void acceptHint(BackendHint hint) {
    if (!_hints.isClosed) _hints.add(hint);
  }

  @override
  Stream<BackendHint> hints() => _hints.stream;

  @override
  Future<void> prepare() => _answer(
        'prepare',
        const {},
        where: 'prepare()',
      );

  @override
  Future<List<RemoteRecord>> listChanges(
    String store, {
    String? fromUpdated,
    String? fromId,
    String? idPrefix,
    int perPage = 200,
  }) async {
    final result = await _answer('listChanges', {
      'store': store,
      if (fromUpdated != null) 'fromUpdated': fromUpdated,
      if (fromId != null) 'fromId': fromId,
      if (idPrefix != null) 'idPrefix': idPrefix,
      'perPage': perPage,
    }, where: 'listChanges("$store")');
    return decodeRemoteRecordList(result, where: 'listChanges("$store")');
  }

  @override
  Future<RemoteRecord?> getRecord(String id) async {
    final result = await _answer('getRecord', {'id': id},
        where: 'getRecord("$id")');
    // Absent result = the record does not exist remotely (the page encodes
    // null explicitly); a present record decodes strictly.
    return result == null
        ? null
        : decodeRemoteRecord(result, where: 'getRecord("$id")');
  }

  @override
  Future<RemoteRecord> createRecord({
    required String id,
    required String store,
    required String dataJson,
  }) async {
    final result = await _answer('createRecord', {
      'id': id,
      'store': store,
      'dataJson': dataJson,
    }, where: 'createRecord("$id")');
    return decodeRemoteRecord(result, where: 'createRecord("$id")');
  }

  @override
  Future<RemoteRecord> updateRecord({
    required String id,
    required String dataJson,
    String? baseUpdated,
  }) async {
    final result = await _answer('updateRecord', {
      'id': id,
      'dataJson': dataJson,
      if (baseUpdated != null) 'baseUpdated': baseUpdated,
    }, where: 'updateRecord("$id")');
    return decodeRemoteRecord(result, where: 'updateRecord("$id")');
  }

  @override
  Future<RemoteRecord> updateRecordFiles({
    required String id,
    String? dataJson,
    Map<String, List<int>>? uploads,
    List<String>? keepNames,
    List<String>? removeNames,
  }) async {
    final session = uploads == null || uploads.isEmpty
        ? null
        : await _uploadSession(
            files: [
              for (final e in uploads.entries)
                _UploadDescriptor(
                    field: e.key,
                    filename: e.key,
                    bytes: e.value),
            ],
          );
    try {
      final result = await _answer('updateRecordFiles', {
        'id': id,
        if (dataJson != null) 'dataJson': dataJson,
        if (session != null) 'session': session,
        if (keepNames != null) 'keepNames': keepNames,
        if (removeNames != null) 'removeNames': removeNames,
      }, where: 'updateRecordFiles("$id")');
      return decodeRemoteRecord(result, where: 'updateRecordFiles("$id")');
    } catch (e) {
      await _abortUpload(session);
      rethrow;
    }
  }

  @override
  Future<RemoteRecord> updateRecordFilesStream({
    required String id,
    String? dataJson,
    Map<String, StreamFileUpload>? uploads,
    List<String>? keepNames,
    List<String>? removeNames,
  }) async {
    String? session;
    if (uploads != null && uploads.isNotEmpty) {
      final descriptors = <_UploadDescriptor>[];
      for (final e in uploads.entries) {
        final stream = await e.value.streamFactory();
        final builder = BytesBuilder(copy: false);
        await for (final chunk in stream) {
          builder.add(chunk);
        }
        descriptors.add(_UploadDescriptor(
          field: e.key,
          filename: e.value.filename,
          bytes: builder.takeBytes(),
        ));
      }
      session = await _uploadSession(files: descriptors);
    }
    try {
      final result = await _answer('updateRecordFilesStream', {
        'id': id,
        if (dataJson != null) 'dataJson': dataJson,
        if (session != null) 'session': session,
        if (keepNames != null) 'keepNames': keepNames,
        if (removeNames != null) 'removeNames': removeNames,
      }, where: 'updateRecordFilesStream("$id")');
      return decodeRemoteRecord(result, where: 'updateRecordFilesStream("$id")');
    } catch (e) {
      await _abortUpload(session);
      rethrow;
    }
  }

  @override
  Future<Stream<List<int>>> downloadFile({
    required String recordId,
    required String filename,
    String? thumb,
  }) async {
    final result = await _answer('downloadBegin', {
      'recordId': recordId,
      'filename': filename,
      if (thumb != null) 'thumb': thumb,
    }, where: 'downloadFile("$recordId", "$filename")');
    final map = _requireMapAt(result, 'downloadFile("$recordId", "$filename")');
    final sessionId = _stringAt(map['sessionId'],
        'downloadFile("$recordId", "$filename").sessionId');
    return _downloadChunks(recordId, sessionId);
  }

  /// Pulls the page-hosted download session chunk by chunk; the page keeps
  /// only one chunk in memory at a time (plus the consumer's buffering).
  Stream<List<int>> _downloadChunks(String recordId, String sessionId) async* {
    try {
      while (true) {
        final chunk = await _answer('downloadChunk', {'sessionId': sessionId},
            where: 'downloadFile("$recordId") chunk');
        final chunkMap =
            _requireMapAt(chunk, 'downloadFile("$recordId") chunk');
        if (_boolAt(chunkMap['done'], 'downloadFile chunk "done"')) break;
        yield decodeBytes(chunkMap['bytes'],
            where: 'downloadFile("$recordId") chunk bytes');
      }
    } finally {
      // Releases the page's stream iterator; a lost release leaks one
      // session server-side, never bytes — cleanup is best-effort.
      try {
        await _answer('downloadEnd', {'sessionId': sessionId},
            where: 'downloadFile("$recordId") end');
      } catch (_) {}
    }
  }

  @override
  Future<List<PushResult>> pushBatch(List<PushOp> ops) async {
    final result = await _answer('pushBatch', {
      'ops': [for (final op in ops) encodePushOp(op)],
    }, where: 'pushBatch');
    return decodePushResultList(result, where: 'pushBatch');
  }

  /// Releases the page-side backend (factory `dispose`) and closes the
  /// realtime stream. Called by [ProxySyncBackendFactory.dispose].
  Future<void> close() async {
    _hub.unregister(backendId);
    try {
      await _answer('dispose', const {}, where: 'dispose()');
    } finally {
      await _hints.close();
    }
  }

  // -- upload session (worker → page bytes) --------------------------------

  Future<String> _uploadSession(
      {required List<_UploadDescriptor> files}) async {
    final sessionId = 'u$backendId-${_nextSession++}';
    await _answer('uploadBegin', {
      'sessionId': sessionId,
      'files': [
        for (final f in files)
          {'field': f.field, 'filename': f.filename, 'length': f.bytes.length},
      ],
    }, where: 'uploadBegin');
    for (final f in files) {
      for (var offset = 0; offset < f.bytes.length; offset += proxyChunkBytes) {
        final end = offset + proxyChunkBytes > f.bytes.length
            ? f.bytes.length
            : offset + proxyChunkBytes;
        await _answer('uploadChunk', {
          'sessionId': sessionId,
          'field': f.field,
          'bytes': encodeBytes(f.bytes.sublist(offset, end)),
        }, where: 'uploadChunk("${f.field}")');
      }
    }
    return sessionId;
  }

  Future<void> _abortUpload(String? sessionId) async {
    if (sessionId == null) return;
    // Best-effort: the original failure propagates; this only releases the
    // page-side session buffers.
    try {
      await _answer('uploadAbort', {'sessionId': sessionId},
          where: 'uploadAbort');
    } catch (_) {}
  }

  Future<Object?> _answer(
    String method,
    Map<String, Object?> args, {
    required String where,
  }) async {
    final raw = await _invoker.invoke(callbackChannelSyncBackend, {
      'method': method,
      'backend': backendId,
      ...args,
    });
    return decodeBackendResponse(raw, where: where);
  }
}

/// One file crossing an upload session: the map key the engine uses
/// (`field`), the filename the backend's [StreamFileUpload] carries, and the
/// buffered bytes sliced into [proxyChunkBytes] chunks.
class _UploadDescriptor {
  _UploadDescriptor({
    required this.field,
    required this.filename,
    required this.bytes,
  });

  final String field;
  final String filename;
  final List<int> bytes;
}

/// Builds page-proxied backends for the kernel's sync start: `create` asks
/// the page to construct the caller's backend and caches the negotiated
/// capabilities and scope id; `dispose` releases the page-side instance and
/// closes the realtime stream.
final class ProxySyncBackendFactory implements SyncBackendFactory {
  /// Creates a proxy factory over [invoker]; created backends register in
  /// [hub] so the worker engine can route page pushes to them.
  ProxySyncBackendFactory({required CallbackInvoker invoker, required ProxyBackendHub hub})
      : _invoker = invoker,
        _hub = hub;

  final CallbackInvoker _invoker;
  final ProxyBackendHub _hub;

  @override
  Future<SyncBackend> create({
    required Uri baseUrl,
    required SyncTokenSource tokenSource,
    required List<String> stores,
    required String identity,
  }) async {
    final backendId = _hub.reserveId();
    final raw = await _invoker.invoke(callbackChannelSyncBackend, {
      'method': 'create',
      'backend': backendId,
      'baseUrl': baseUrl.toString(),
      'identity': identity,
      'stores': stores,
    });
    final result =
        decodeBackendResponse(raw, where: 'sync backend create()');
    final map = _requireMapAt(result, 'sync backend create()');
    final backend = ProxySyncBackend._(
      backendId: backendId,
      invoker: _invoker,
      hub: _hub,
      tokenSource: tokenSource,
      capabilities: decodeBackendCapabilities(map['capabilities'],
          where: 'create().capabilities'),
      scopeId: _stringAt(map['scopeId'], 'create().scopeId'),
    );
    _hub.register(backendId, backend);
    return backend;
  }

  @override
  Future<void> dispose(SyncBackend backend) async {
    if (backend is! ProxySyncBackend) {
      throw ValidationException(
          'The proxy sync factory can only dispose backends it created.');
    }
    await backend.close();
  }
}

Map<String, Object?> _requireMapAt(Object? raw, String where) {
  if (raw is Map) {
    return raw.map((k, v) => MapEntry(k.toString(), v));
  }
  throw ValidationException('The value at $where must be a map.');
}

String _stringAt(Object? raw, String where) {
  if (raw is String) return raw;
  throw ValidationException('The value at $where must be a string.');
}

bool _boolAt(Object? raw, String where) {
  if (raw is bool) return raw;
  throw ValidationException('The value at $where must be a bool.');
}
