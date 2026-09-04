/// The worker-side proxy for a page-executed blob store.
///
/// The page hosts the caller's `BlobStore` (the object and its storage
/// backend cannot cross the worker boundary); the worker receives a
/// [ProxyBlobStore] that forwards every method over the callback channel
/// ([callbackChannelBlobStore], one multiplexed channel — see
/// `blob_wire.dart` for the wire scheme, shared with the sync proxy).
///
/// Bytes cross chunked ([proxyChunkBytes]) in BOTH directions: `put`
/// streams the caller's bytes to the page through a begin → N-chunk →
/// finish session; `open` returns a lazy stream that pulls one chunk at a
/// time from the page. The page validates the reassembled bytes (declared
/// length vs expectedSize, and the user's store verifies the SHA-256), so
/// validation happens where the bytes are reassembled.
///
/// Honesty contracts preserved across the channel: `modifiedAt` keeps its
/// null (a null never becomes a fabricated timestamp — GC orphan-aging
/// depends on it) and `isDurable` reflects the PAGE store's durability,
/// not the worker's.
library;

import 'dart:async';

import '../errors.dart';
import '../page_callbacks.dart' show CallbackInvoker;
import '../sync/sync_wire.dart'
    show decodeBackendResponse, decodeBytes, encodeBytes;
import 'blob_store.dart';
import 'blob_wire.dart';

/// The worker-side stand-in for the page-hosted [BlobStore].
final class ProxyBlobStore extends BlobStore {
  /// Creates a proxy over [invoker]; the page's `BlobStoreServer` answers.
  ProxyBlobStore({required CallbackInvoker invoker}) : _invoker = invoker;

  final CallbackInvoker _invoker;
  int _nextSession = 0;

  @override
  Future<String> put(
    Stream<List<int>> bytes, {
    String? expectedSha256,
    int? expectedSize,
    String? key,
  }) async {
    final sessionId = 'p${_nextSession++}';
    await _answer('putBegin', {
      'sessionId': sessionId,
      if (expectedSha256 != null) 'expectedSha256': expectedSha256,
      if (expectedSize != null) 'expectedSize': expectedSize,
      if (key != null) 'key': key,
    }, where: 'put()');
    var sent = 0;
    try {
      await for (final chunk in bytes) {
        for (var offset = 0; offset < chunk.length; offset += proxyChunkBytes) {
          final end = offset + proxyChunkBytes > chunk.length
              ? chunk.length
              : offset + proxyChunkBytes;
          final slice = chunk.sublist(offset, end);
          await _answer('putChunk', {
            'sessionId': sessionId,
            'index': sent++,
            'bytes': encodeBytes(slice),
          }, where: 'put() chunk');
        }
      }
      final raw = await _answer('putFinish', {'sessionId': sessionId},
          where: 'put()');
      return decodeBlobString(raw, where: 'put().hash');
    } catch (e) {
      // Best-effort: the original failure propagates; this only releases
      // the page-side session buffers.
      try {
        await _answer('putAbort', {'sessionId': sessionId}, where: 'put()');
      } catch (_) {}
      rethrow;
    }
  }

  @override
  Future<Stream<List<int>>> open(String hash) async {
    final raw = await _answer('openBegin', {'hash': hash}, where: 'open()');
    final map = _requireMapAt(raw, 'open()');
    final sessionId =
        decodeBlobString(map['sessionId'], where: 'open().sessionId');
    return _openChunks(hash, sessionId);
  }

  /// Pulls the page-hosted open session chunk by chunk; the worker keeps
  /// only one chunk in memory at a time (plus the consumer's buffering).
  Stream<List<int>> _openChunks(String hash, String sessionId) async* {
    try {
      while (true) {
        final raw = await _answer('openChunk', {'sessionId': sessionId},
            where: 'open("$hash") chunk');
        final map = _requireMapAt(raw, 'open("$hash") chunk');
        if (map['done'] == true) break;
        if (map['done'] != false) {
          throw ValidationException(
              '"done" at open("$hash") chunk must be a bool.');
        }
        yield decodeBytes(map['bytes'],
            where: 'open("$hash") chunk bytes');
      }
    } finally {
      // Releases the page's stream iterator; a lost release leaks one
      // session server-side, never bytes — cleanup is best-effort.
      try {
        await _answer('openEnd', {'sessionId': sessionId},
            where: 'open("$hash") end');
      } catch (_) {}
    }
  }

  @override
  Future<void> delete(String hash) async {
    await _answer('delete', {'hash': hash}, where: 'delete()');
  }

  @override
  Future<bool> exists(String hash) async {
    final raw = await _answer('exists', {'hash': hash}, where: 'exists()');
    return decodeBlobBool(raw, where: 'exists()');
  }

  @override
  Future<int?> size(String hash) async {
    final raw = await _answer('size', {'hash': hash}, where: 'size()');
    return decodeBlobNullableInt(raw, where: 'size()');
  }

  @override
  Future<int> cleanTmp({Duration olderThan = const Duration(hours: 24)}) async {
    final raw = await _answer('cleanTmp', {
      'olderThanMs': olderThan.inMilliseconds,
    }, where: 'cleanTmp()');
    return decodeBlobInt(raw, where: 'cleanTmp()');
  }

  @override
  Future<List<String>> listHashes() async {
    final raw = await _answer('listHashes', const {}, where: 'listHashes()');
    return decodeBlobHashList(raw, where: 'listHashes()');
  }

  @override
  Future<int?> modifiedAt(String hash) async {
    final raw =
        await _answer('modifiedAt', {'hash': hash}, where: 'modifiedAt()');
    return decodeBlobNullableInt(raw, where: 'modifiedAt()');
  }

  @override
  Future<bool> get isDurable async {
    final raw = await _answer('isDurable', const {}, where: 'isDurable');
    return decodeBlobBool(raw, where: 'isDurable');
  }

  Future<Object?> _answer(
    String method,
    Map<String, Object?> args, {
    required String where,
  }) async {
    final raw = await _invoker.invoke(callbackChannelBlobStore, {
      'method': method,
      ...args,
    });
    return decodeBackendResponse(raw, where: where, decodeError: decodeBlobError);
  }
}

Map<String, Object?> _requireMapAt(Object? raw, String where) {
  if (raw is Map) {
    return raw.map((k, v) => MapEntry(k.toString(), v));
  }
  throw ValidationException('The value at $where must be a map.');
}
