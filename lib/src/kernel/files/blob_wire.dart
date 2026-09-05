/// Wire codecs for the page-executed blob store proxy.
///
/// The worker's [ProxyBlobStore] forwards every `BlobStore` method over the
/// callback channel (`callbackChannelBlobStore`); the page's
/// `BlobStoreServer` executes the caller's store and answers. This shares
/// ONE envelope scheme with the sync proxy (see `sync_wire.dart`): a method
/// answer is `{'ok': true, 'result': ...}` or
/// `{'ok': false, 'error': ...}` / `{'ok': false, 'pageError': ...}`, and
/// bytes cross base64-chunked at [proxyChunkBytes] via a begin → N-chunk →
/// finish session. Only the error reconstruction differs: blob failures
/// reconstruct as the exact [BlobMissingError] / [BlobStorageException]
/// types, never as strings.
///
/// Strict decoding throughout: absent values take their documented default;
/// present-but-wrong-typed values throw [ValidationException].
library;

import '../errors.dart';
import '../page_callbacks.dart' show stringKeyedDeepMap;
import '../sync/sync_wire.dart' show proxyChunkBytes;
import 'blob_store.dart' show BlobMissingError, BlobStorageException;

export '../sync/sync_wire.dart' show proxyChunkBytes;

/// The callback channel the proxy blob store multiplexes on.
const String callbackChannelBlobStore = 'blobStore';

/// Encodes a blob-store failure as the channel's error map (the `error`
/// field of a failed answer envelope). Anything that is not one of the two
/// blob error types cannot cross — the server wraps other failures as
/// pageError instead.
Map<String, Object?> encodeBlobError(Object error) {
  if (error is BlobMissingError) {
    return {'kind': 'blobMissing', 'hash': error.hash};
  }
  if (error is BlobStorageException) {
    return {
      'kind': 'blobStorage',
      'hash': error.hash,
      'cause': error.cause.toString(),
    };
  }
  throw ValidationException(
      'The error of type ${error.runtimeType} is not a blob-store error.');
}

/// Wraps a typed blob failure as the channel's answer envelope — the same
/// envelope shape the sync proxy uses, with the blob error kinds as the
/// error payload.
Map<String, Object?> encodeBackendBlobError(Object error) =>
    {'ok': false, 'error': encodeBlobError(error)};

/// Decodes a strict blob-store error map, reconstructing the exact type:
/// [BlobMissingError] (with its hash) or [BlobStorageException] (with the
/// page-rendered cause text). Callers classify via `isBlobMissing`.
Object decodeBlobError(Object? raw, {required String where}) {
  final map = _requireMap(raw, where);
  final kind = _requireString(map['kind'], where, 'kind');
  switch (kind) {
    case 'blobMissing':
      return BlobMissingError(_requireString(map['hash'], where, 'hash'));
    case 'blobStorage':
      final cause = map['cause'];
      if (cause is! String) {
        throw ValidationException('"cause" at $where must be a string.');
      }
      return BlobStorageException(
          cause, _requireString(map['hash'], where, 'hash'));
    default:
      throw ValidationException('Unknown blob error kind "$kind" at $where.');
  }
}

/// Decodes a strict string method result (e.g. the `put` hash, the `open`
/// session id).
String decodeBlobString(Object? raw, {required String where}) {
  if (raw is String) return raw;
  throw ValidationException('The result at $where must be a string.');
}

/// Decodes a strict bool method result (`exists`, `isDurable`).
bool decodeBlobBool(Object? raw, {required String where}) {
  if (raw is bool) return raw;
  throw ValidationException('The result at $where must be a bool.');
}

/// Decodes a strict nullable-int method result (`size`, `modifiedAt`).
/// A present null stays null — the honest "unknown" answer, never
/// fabricated.
int? decodeBlobNullableInt(Object? raw, {required String where}) {
  if (raw == null) return null;
  if (raw is int) return raw;
  throw ValidationException('The result at $where must be an int or null.');
}

/// Decodes a strict int method result (`cleanTmp`).
int decodeBlobInt(Object? raw, {required String where}) {
  if (raw is int) return raw;
  throw ValidationException('The result at $where must be an int.');
}

/// Decodes a strict hash-list result (`listHashes`).
List<String> decodeBlobHashList(Object? raw, {required String where}) {
  if (raw is! List) {
    throw ValidationException('The result at $where must be a list.');
  }
  return [
    for (final item in raw)
      if (item is String)
        item
      else
        throw ValidationException(
            'The result at $where must contain only strings.'),
  ];
}

Map<String, Object?> _requireMap(Object? raw, String where) {
  if (raw is Map) return stringKeyedDeepMap(raw);
  throw ValidationException('The value at $where must be a map.');
}

String _requireString(Object? raw, String where, String what) {
  if (raw is String) return raw;
  throw ValidationException('"$what" at $where must be a string.');
}
