import 'dart:async';
import 'dart:typed_data' show BytesBuilder;

import '../../../kernel/errors.dart';
import '../../../kernel/page_callbacks.dart' show stringKeyedDeepMap;
import '../../../kernel/sync/sync_backend.dart';
import '../../../kernel/sync/sync_wire.dart';
import 'protocol.dart';

/// Serves the page side of the proxy sync backend channel: executes the
/// caller's real [SyncBackend] (the one the open carried in
/// `PageCallbacks.syncBackendFactory`) and answers the worker's multiplexed
/// invocations (see `kernel/sync/sync_wire.dart` for the wire scheme).
///
/// Modeled on [PageCallbackServer]: pure Dart (no `dart:js_interop`), the
/// web open wires [serve] into the page-side custom-request handler, and VM
/// tests drive it directly. Answers always succeed at the callback-envelope
/// level — method failures ride INSIDE the answer as typed values
/// (`encodeBackendError` / `encodeBackendPageError`) so the worker's proxy
/// can reconstruct the exact [SyncError] subtype.
///
/// Realtime [BackendHint]s flow the other way: the page subscribes to the
/// backend's hint stream after `create` and pushes each hint to the worker
/// as a `WireOp.backendCall` request through [push]. The same push path
/// serves the page-side token source (`call: 'currentToken'`), so auth
/// updates made through the kernel's token source reach the page backend
/// without a rebuild.
final class SyncBackendServer {
  /// Creates a server over [factory]; [push] sends one page→worker request
  /// envelope and resolves with the dartified worker response.
  SyncBackendServer({
    required this.factory,
    required Future<Object?> Function(Map<String, Object?> envelope) push,
  }) : _push = push;

  /// The caller-supplied factory the open carried in the container.
  final SyncBackendFactory factory;
  final Future<Object?> Function(Map<String, Object?> envelope) _push;

  final Map<int, SyncBackend> _backends = {};
  final Map<int, StreamSubscription<BackendHint>> _hintSubscriptions = {};
  final Map<String, _UploadSession> _uploads = {};
  final Map<String, StreamIterator<List<int>>> _downloads = {};
  int _nextPushId = 0;
  int _nextSessionId = 0;

  /// Whether [channel] belongs to this server (the open's dispatch routes
  /// by channel before calling [serve]).
  bool handles(String channel) => channel == callbackChannelSyncBackend;

  /// Serves one worker callback request and returns the reply envelope, or
  /// null when [message] is not a request for this channel.
  Future<Map<String, Object?>?> serve(Map<Object?, Object?> message) async {
    final request = stringKeyedDeepMap(message);
    if (request['kind'] != CallbackRpc.requestKind) return null;
    final channel = request[CallbackRpc.channel];
    if (channel is! String || !handles(channel)) return null;
    final rpcId = request[CallbackRpc.rpcId];
    final argsRaw = request[CallbackRpc.args];
    try {
      if (argsRaw is! Map) {
        throw ValidationException('Backend request "args" must be a map.');
      }
      final value = await _execute(stringKeyedDeepMap(argsRaw));
      return _reply(rpcId, encodeBackendResult(value));
    } catch (e) {
      return _reply(
        rpcId,
        e is SyncError ? encodeBackendError(e) : encodeBackendPageError(e),
      );
    }
  }

  Map<String, Object?> _reply(Object? rpcId, Object? value) => {
        'kind': CallbackRpc.resultKind,
        CallbackRpc.rpcId: rpcId,
        CallbackRpc.ok: true,
        CallbackRpc.value: value,
      };

  Future<Object?> _execute(Map<String, Object?> args) async {
    final method = _string(args, 'method');
    switch (method) {
      case 'create':
        return _create(args);
      case 'dispose':
        return _dispose(args);
      case 'capabilities':
        return encodeBackendCapabilities(_backend(args).capabilities);
      case 'scopeId':
        return _backend(args).scopeId;
      case 'prepare':
        await _backend(args).prepare();
        return null;
      case 'listChanges':
        return _listChanges(args);
      case 'getRecord':
        return _getRecord(args);
      case 'createRecord':
        return _createRecord(args);
      case 'updateRecord':
        return _updateRecord(args);
      case 'updateRecordFiles':
        return _updateRecordFiles(args, stream: false);
      case 'updateRecordFilesStream':
        return _updateRecordFiles(args, stream: true);
      case 'downloadBegin':
        return _downloadBegin(args);
      case 'downloadChunk':
        return _downloadChunk(args);
      case 'downloadEnd':
        return _downloadEnd(args);
      case 'uploadBegin':
        return _uploadBegin(args);
      case 'uploadChunk':
        return _uploadChunk(args);
      case 'uploadAbort':
        return _uploadAbort(args);
      case 'pushBatch':
        return _pushBatch(args);
      default:
        throw ValidationException('Unknown sync backend method "$method".');
    }
  }

  // -- factory lifecycle ----------------------------------------------------

  Future<Object?> _create(Map<String, Object?> args) async {
    final backendId = _int(args, 'backend');
    final baseUrl = Uri.parse(_string(args, 'baseUrl'));
    final identity = _string(args, 'identity');
    final stores = _stringList(args, 'stores');
    final backend = await factory.create(
      baseUrl: baseUrl,
      // Token reads round-trip to the worker's kernel-owned token source, so
      // syncUpdateAuth reaches the page backend without a rebuild.
      tokenSource: _ChannelTokenSource(backendId, _push, () => _nextPushId++),
      stores: stores,
      identity: identity,
    );
    _backends[backendId] = backend;
    _hintSubscriptions[backendId] = backend.hints().listen((hint) {
      unawaited(_pushHint(backendId, hint));
    }, onError: (Object _) {
      // The backend's realtime stream failed: the hint channel is
      // best-effort by design (the engine falls back to polling), so the
      // failure must not surface as an unhandled page error.
    });
    return {
      'capabilities': encodeBackendCapabilities(backend.capabilities),
      'scopeId': backend.scopeId,
    };
  }

  Future<Object?> _dispose(Map<String, Object?> args) async {
    final backendId = _int(args, 'backend');
    final backend = _requireBackend(backendId);
    final subscription = _hintSubscriptions.remove(backendId);
    if (subscription != null) unawaited(subscription.cancel());
    _backends.remove(backendId);
    await factory.dispose(backend);
    return null;
  }

  // -- pull -----------------------------------------------------------------

  Future<Object?> _listChanges(Map<String, Object?> args) async {
    final store = _string(args, 'store');
    final perPage = args['perPage'];
    if (perPage != null && perPage is! int) {
      throw ValidationException('"perPage" must be an int.');
    }
    final records = await _backend(args).listChanges(
      store,
      fromUpdated: _optString(args, 'fromUpdated'),
      fromId: _optString(args, 'fromId'),
      idPrefix: _optString(args, 'idPrefix'),
      perPage: perPage as int? ?? 200,
    );
    return [for (final r in records) encodeRemoteRecord(r)];
  }

  Future<Object?> _getRecord(Map<String, Object?> args) async {
    final record = await _backend(args).getRecord(_string(args, 'id'));
    return record == null ? null : encodeRemoteRecord(record);
  }

  // -- push -----------------------------------------------------------------

  Future<Object?> _createRecord(Map<String, Object?> args) async {
    final record = await _backend(args).createRecord(
      id: _string(args, 'id'),
      store: _string(args, 'store'),
      dataJson: _string(args, 'dataJson'),
    );
    return encodeRemoteRecord(record);
  }

  Future<Object?> _updateRecord(Map<String, Object?> args) async {
    final record = await _backend(args).updateRecord(
      id: _string(args, 'id'),
      dataJson: _string(args, 'dataJson'),
      baseUpdated: _optString(args, 'baseUpdated'),
    );
    return encodeRemoteRecord(record);
  }

  Future<Object?> _pushBatch(Map<String, Object?> args) async {
    final opsRaw = args['ops'];
    if (opsRaw is! List) {
      throw ValidationException('"ops" must be a list.');
    }
    final ops = [
      for (var i = 0; i < opsRaw.length; i++)
        decodePushOp(opsRaw[i], where: 'pushBatch.ops[$i]'),
    ];
    final results = await _backend(args).pushBatch(ops);
    return [for (final r in results) encodePushResult(r)];
  }

  // -- files ----------------------------------------------------------------

  Future<Object?> _updateRecordFiles(
    Map<String, Object?> args, {
    required bool stream,
  }) async {
    final session = _takeUpload(_string(args, 'session'));
    final dataJson = _optString(args, 'dataJson');
    final keepNames = _optStringList(args, 'keepNames');
    final removeNames = _optStringList(args, 'removeNames');
    final id = _string(args, 'id');
    final backend = _backend(args);
    // Snapshot the reassembled bytes once: streamFactory must be able to
    // serve a fresh stream per upload attempt.
    final bytesByField = {
      for (final e in session.files.entries) e.key: e.value.takeBytes(),
    };
    if (stream) {
      final record = await backend.updateRecordFilesStream(
        id: id,
        dataJson: dataJson,
        uploads: {
          for (final e in bytesByField.entries)
            e.key: StreamFileUpload(
              filename: session.filenames[e.key]!,
              length: e.value.length,
              streamFactory: () async => Stream.value(e.value),
            ),
        },
        keepNames: keepNames,
        removeNames: removeNames,
      );
      return encodeRemoteRecord(record);
    }
    final record = await backend.updateRecordFiles(
      id: id,
      dataJson: dataJson,
      uploads: bytesByField,
      keepNames: keepNames,
      removeNames: removeNames,
    );
    return encodeRemoteRecord(record);
  }

  Future<Object?> _downloadBegin(Map<String, Object?> args) async {
    final stream = await _backend(args).downloadFile(
      recordId: _string(args, 'recordId'),
      filename: _string(args, 'filename'),
      thumb: _optString(args, 'thumb'),
    );
    final sessionId = 'd${_nextSessionId++}';
    _downloads[sessionId] = StreamIterator(stream);
    return {'sessionId': sessionId};
  }

  Future<Object?> _downloadChunk(Map<String, Object?> args) async {
    final sessionId = _string(args, 'sessionId');
    final iterator = _downloads[sessionId];
    if (iterator == null) {
      throw ValidationException(
          'Unknown download session "$sessionId" (never begun or finished).');
    }
    if (!await iterator.moveNext()) {
      _downloads.remove(sessionId);
      return {'done': true};
    }
    return {'done': false, 'bytes': encodeBytes(iterator.current)};
  }

  Future<Object?> _downloadEnd(Map<String, Object?> args) async {
    final sessionId = _string(args, 'sessionId');
    final iterator = _downloads.remove(sessionId);
    if (iterator != null) {
      await iterator.cancel();
    }
    return null;
  }

  Future<Object?> _uploadBegin(Map<String, Object?> args) async {
    final sessionId = _string(args, 'sessionId');
    final files = args['files'];
    if (files is! List) {
      throw ValidationException('"files" must be a list.');
    }
    final session = _UploadSession();
    for (var i = 0; i < files.length; i++) {
      final file = files[i];
      if (file is! Map) {
        throw ValidationException('"files[$i]" must be a map.');
      }
      final entry = stringKeyedDeepMap(file);
      final length = _int(entry, 'length');
      if (length < 0) {
        throw ValidationException('"files[$i].length" must be ≥ 0.');
      }
      final field = _string(entry, 'field');
      session.filenames[field] = _string(entry, 'filename');
      session.declared[field] = length;
      session.files[field] = BytesBuilder(copy: false);
    }
    _uploads[sessionId] = session;
    return null;
  }

  Future<Object?> _uploadChunk(Map<String, Object?> args) async {
    final session = _requireSession(_string(args, 'sessionId'));
    final field = _string(args, 'field');
    final builder = session.files[field];
    if (builder == null) {
      throw ValidationException(
          'Upload session has no file at field "$field".');
    }
    builder.add(decodeBytes(args['bytes'], where: 'uploadChunk bytes'));
    return null;
  }

  Future<Object?> _uploadAbort(Map<String, Object?> args) async {
    _uploads.remove(_string(args, 'sessionId'));
    return null;
  }

  // -- session helpers ------------------------------------------------------

  /// Pops an upload session and validates each file's reassembled byte
  /// count against its declared length: the page verifies where the bytes
  /// are reassembled, before the user's backend ever sees them.
  _UploadSession _takeUpload(String sessionId) {
    final session = _uploads.remove(sessionId);
    if (session == null) {
      throw ValidationException(
          'Unknown upload session "$sessionId" (never begun, aborted, or '
          'already consumed).');
    }
    for (final e in session.files.entries) {
      final length = e.value.length;
      final declared = session.declared[e.key]!;
      if (length != declared) {
        throw ValidationException(
            'Upload for "${e.key}" was declared $declared bytes but '
            'reassembled $length.');
      }
    }
    return session;
  }

  _UploadSession _requireSession(String sessionId) {
    final session = _uploads[sessionId];
    if (session == null) {
      throw ValidationException(
          'Unknown upload session "$sessionId" (never begun or aborted).');
    }
    return session;
  }

  SyncBackend _backend(Map<String, Object?> args) =>
      _requireBackend(_int(args, 'backend'));

  SyncBackend _requireBackend(int backendId) {
    final backend = _backends[backendId];
    if (backend == null) {
      throw ValidationException(
          'No page sync backend #$backendId is running (never created or '
          'disposed).');
    }
    return backend;
  }

  // -- page → worker pushes -------------------------------------------------

  Future<void> _pushHint(int backendId, BackendHint hint) async {
    try {
      await _push({
        'v': webProtocolVersion,
        'i': _nextPushId++,
        'op': WireOp.backendCall,
        'a': {
          'backend': backendId,
          'call': 'hint',
          'hint': encodeBackendHint(hint),
        },
      });
    } catch (_) {
      // Hint delivery is a doorbell: a lost push only costs one pull cycle,
      // and a closed worker connection surfaces on the next real request.
    }
  }

  String _string(Map<String, Object?> args, String key) {
    final value = args[key];
    if (value is String) return value;
    throw ValidationException('Backend argument "$key" must be a string.');
  }

  String? _optString(Map<String, Object?> args, String key) {
    final value = args[key];
    if (value == null) return null;
    if (value is String) return value;
    throw ValidationException('Backend argument "$key" must be a string.');
  }

  int _int(Map<String, Object?> args, String key) {
    final value = args[key];
    if (value is int) return value;
    throw ValidationException('Backend argument "$key" must be an int.');
  }

  List<String> _stringList(Map<String, Object?> args, String key) {
    final value = args[key];
    if (value is! List) {
      throw ValidationException('Backend argument "$key" must be a list.');
    }
    return [
      for (final item in value)
        if (item is String)
          item
        else
          throw ValidationException(
              'Backend argument "$key" must contain only strings.'),
    ];
  }

  List<String>? _optStringList(Map<String, Object?> args, String key) {
    final value = args[key];
    if (value == null) return null;
    return _stringList(args, key);
  }
}

class _UploadSession {
  final Map<String, String> filenames = {};
  final Map<String, int> declared = {};
  final Map<String, BytesBuilder> files = {};
}

/// The page-side token source handed to the user's factory: reads the
/// current bearer from the worker's kernel-owned token source over the
/// backend-call push path, so auth updates propagate without a rebuild.
/// Sync errors from the kernel reconstruct as their exact subtypes.
class _ChannelTokenSource implements SyncTokenSource {
  _ChannelTokenSource(this._backendId, this._push, this._nextId);

  final int _backendId;
  final Future<Object?> Function(Map<String, Object?> envelope) _push;
  final int Function() _nextId;

  @override
  Future<String> currentToken() async {
    final answer = await _push({
      'v': webProtocolVersion,
      'i': _nextId(),
      'op': WireOp.backendCall,
      'a': {'backend': _backendId, 'call': 'currentToken'},
    });
    if (answer is! Map) {
      throw ValidationException(
          'The token read answer must be a map (got ${answer.runtimeType}).');
    }
    final response = WebResponse.fromJson(stringKeyedDeepMap(answer),
        expectedVersion: webProtocolVersion);
    if (response.isError) {
      throw ValidationException(
          'The token read failed: ${response.error!.message}');
    }
    final token =
        decodeBackendResponse(response.result, where: 'currentToken()');
    if (token is! String) {
      throw ValidationException('The token read answer must be a string.');
    }
    return token;
  }

  @override
  String? get identity => null;
}
