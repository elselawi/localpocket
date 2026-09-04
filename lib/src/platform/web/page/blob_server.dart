import 'dart:async';
import 'dart:typed_data' show BytesBuilder;

import '../../../kernel/errors.dart';
import '../../../kernel/files/blob_store.dart';
import '../../../kernel/files/blob_wire.dart';
import '../../../kernel/page_callbacks.dart' show stringKeyedDeepMap;
import '../../../kernel/sync/sync_wire.dart'
    show decodeBytes, encodeBackendPageError, encodeBackendResult, encodeBytes;
import 'protocol.dart';

/// Serves the page side of the proxy blob store channel: executes the
/// caller's real [BlobStore] (the one the open carried in
/// `PageCallbacks.blobStore`) and answers the worker's multiplexed
/// invocations. Modeled on [SyncBackendServer] and shares its answer
/// envelope (see `kernel/files/blob_wire.dart` for the wire scheme): blob
/// failures ride INSIDE the answer as typed values so the worker's proxy
/// reconstructs the exact [BlobMissingError] / [BlobStorageException].
///
/// `put` reassembles the uploaded chunks on the page — this is where the
/// declared-vs-reassembled length check runs, before the bytes reach the
/// caller's store (which verifies the expected SHA-256 itself).
final class BlobStoreServer {
  /// Creates a server over the caller's [store].
  BlobStoreServer({required BlobStore store}) : _store = store;

  final BlobStore _store;
  final Map<String, _PutSession> _puts = {};
  final Map<String, StreamIterator<List<int>>> _opens = {};
  int _nextSessionId = 0;
  /// Whether [channel] belongs to this server (the open's dispatch routes
  /// by channel before calling [serve]).
  bool handles(String channel) => channel == callbackChannelBlobStore;

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
        throw ValidationException('Blob request "args" must be a map.');
      }
      final value = await _execute(stringKeyedDeepMap(argsRaw));
      return _reply(rpcId, encodeBackendResult(value));
    } catch (e) {
      // Blob errors cross typed through the same envelope the sync proxy
      // uses; other failures reconstruct as validation errors worker-side.
      final value = (e is BlobMissingError || e is BlobStorageException)
          ? encodeBackendBlobError(e)
          : encodeBackendPageError(e);
      return _reply(rpcId, value);
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
      case 'putBegin':
        return _putBegin(args);
      case 'putChunk':
        return _putChunk(args);
      case 'putFinish':
        return _putFinish(args);
      case 'putAbort':
        _puts.remove(_string(args, 'sessionId'));
        return null;
      case 'openBegin':
        return _openBegin(args);
      case 'openChunk':
        return _openChunk(args);
      case 'openEnd':
        final iterator = _opens.remove(_string(args, 'sessionId'));
        if (iterator != null) await iterator.cancel();
        return null;
      case 'delete':
        await _store.delete(_string(args, 'hash'));
        return null;
      case 'exists':
        return await _store.exists(_string(args, 'hash'));
      case 'size':
        return await _store.size(_string(args, 'hash'));
      case 'cleanTmp':
        final olderThanMs = args['olderThanMs'];
        if (olderThanMs is! int) {
          throw ValidationException('"olderThanMs" must be an int.');
        }
        return _store.cleanTmp(
            olderThan: Duration(milliseconds: olderThanMs));
      case 'listHashes':
        return await _store.listHashes();
      case 'modifiedAt':
        // Honest pass-through: a null (unknown) MUST stay null — GC
        // orphan-aging depends on it.
        return await _store.modifiedAt(_string(args, 'hash'));
      case 'isDurable':
        // The PAGE store's durability, not the worker's.
        return await _store.isDurable;
      default:
        throw ValidationException('Unknown blob store method "$method".');
    }
  }

  Future<Object?> _putBegin(Map<String, Object?> args) async {
    // The worker proxy mints the session id and correlates on it; honor it.
    final sessionId = _string(args, 'sessionId');
    final expectedSha256 = _optString(args, 'expectedSha256');
    final expectedSizeRaw = args['expectedSize'];
    if (expectedSizeRaw != null && expectedSizeRaw is! int) {
      throw ValidationException('"expectedSize" must be an int.');
    }
    _puts[sessionId] = _PutSession(
      expectedSha256: expectedSha256,
      expectedSize: expectedSizeRaw as int?,
      key: _optString(args, 'key'),
    );
    return null;
  }

  Future<Object?> _putChunk(Map<String, Object?> args) async {
    final session = _requireSession(_string(args, 'sessionId'));
    final index = args['index'];
    if (index is! int) {
      throw ValidationException('"index" must be an int.');
    }
    if (index != session.nextIndex) {
      throw ValidationException(
          'Chunk index $index arrived out of order '
          '(expected ${session.nextIndex}).');
    }
    session.builder.add(decodeBytes(args['bytes'], where: 'putChunk bytes'));
    session.nextIndex++;
    return null;
  }

  Future<Object?> _putFinish(Map<String, Object?> args) async {
    final session = _puts.remove(_string(args, 'sessionId'));
    if (session == null) {
      throw ValidationException(
          'Unknown upload session "${args['sessionId']}" (never begun or '
          'aborted).');
    }
    final bytes = session.builder.takeBytes();
    // Validation happens where the bytes are reassembled: the declared size
    // is checked here, and the user's store verifies the expected SHA-256.
    final expectedSize = session.expectedSize;
    if (expectedSize != null && bytes.length != expectedSize) {
      throw ValidationException(
          'Blob upload was declared $expectedSize bytes but reassembled '
          '${bytes.length}.');
    }
    return _store.put(
      Stream.value(bytes),
      expectedSha256: session.expectedSha256,
      expectedSize: session.expectedSize,
      key: session.key,
    );
  }

  Future<Object?> _openBegin(Map<String, Object?> args) async {
    final stream = await _store.open(_string(args, 'hash'));
    final sessionId = 'o${_nextSessionId++}';
    _opens[sessionId] = StreamIterator(stream);
    return {'sessionId': sessionId};
  }

  Future<Object?> _openChunk(Map<String, Object?> args) async {
    final sessionId = _string(args, 'sessionId');
    final iterator = _opens[sessionId];
    if (iterator == null) {
      throw ValidationException(
          'Unknown download session "$sessionId" (never begun or finished).');
    }
    if (!await iterator.moveNext()) {
      _opens.remove(sessionId);
      return {'done': true};
    }
    return {'done': false, 'bytes': encodeBytes(iterator.current)};
  }

  _PutSession _requireSession(String sessionId) {
    final session = _puts[sessionId];
    if (session == null) {
      throw ValidationException(
          'Unknown upload session "$sessionId" (never begun or aborted).');
    }
    return session;
  }

  String _string(Map<String, Object?> args, String key) {
    final value = args[key];
    if (value is String) return value;
    throw ValidationException('Blob argument "$key" must be a string.');
  }

  String? _optString(Map<String, Object?> args, String key) {
    final value = args[key];
    if (value == null) return null;
    if (value is String) return value;
    throw ValidationException('Blob argument "$key" must be a string.');
  }
}

class _PutSession {
  _PutSession({
    required this.expectedSha256,
    required this.expectedSize,
    required this.key,
  });

  final String? expectedSha256;
  final int? expectedSize;
  final String? key;
  final BytesBuilder builder = BytesBuilder(copy: false);
  int nextIndex = 0;
}
