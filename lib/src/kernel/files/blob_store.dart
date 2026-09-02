import 'dart:async';
import 'dart:convert' show ChunkedConversionSink;
import 'dart:typed_data';
import 'package:crypto/crypto.dart';

import '../cipher.dart';

/// {@template localpocket.blob_store}
/// BlobStore interface.
///
/// Implemented natively with `dart:io` or in-memory/OPFS on web.
/// {@endtemplate}
abstract class BlobStore {
  /// Creates a blob-store implementation.
  ///
  /// {@macro localpocket.blob_store}
  const BlobStore();

  /// Pattern matching lowercase hexadecimal SHA-256 digests.
  static final RegExp validHashPattern = RegExp(r'^[0-9a-f]{64}$');

  /// Validates that [hash] is a 64-character lowercase hex SHA-256 digest.
  static void validateHash(String hash) {
    if (!validHashPattern.hasMatch(hash)) {
      throw ArgumentError('Invalid blob hash "$hash": must be 64 hex chars.');
    }
  }

  /// Puts bytes into the blob store atomically.
  /// Computes SHA-256 while streaming.
  /// If [expectedSha256] or [expectedSize] is provided, validates and throws if mismatch.
  Future<String> put(
    Stream<List<int>> bytes, {
    String? expectedSha256,
    int? expectedSize,
    String? key,
  });

  /// Opens a readable stream of the blob's bytes for [hash].
  Future<Stream<List<int>>> open(String hash);

  /// Deletes the blob for [hash] from storage.
  Future<void> delete(String hash);

  /// Checks if a blob exists.
  Future<bool> exists(String hash);

  /// Gets the size of a blob in bytes.
  Future<int?> size(String hash);

  /// Cleans temporary files older than [olderThan].
  Future<int> cleanTmp({Duration olderThan = const Duration(hours: 24)});

  /// Lists all stored blob hashes.
  Future<List<String>> listHashes();

  /// Returns the last-modified timestamp of the stored [hash] in epoch
  /// milliseconds, or `null` if unknown/unsupported.
  ///
  /// Used by GC to age orphaned blobs (files on disk without an `lp_blobs`
  /// metadata row) so a crash mid-attach is never raced.
  Future<int?> modifiedAt(String hash) => Future.value(null);

  /// Whether bytes stored here survive process/worker restarts.
  ///
  /// `true` for durable backends (native disk, OPFS); `false` for volatile
  /// in-memory fallbacks whose bytes disappear when the process ends.
  ///
  /// Attachments stored in a non-durable store are effectively ephemeral even
  /// though their SQLite metadata (`lp_blobs` / `lp_file_refs`) persists —
  /// callers should treat `false` as "these blobs may vanish without notice"
  /// and refuse (or explicitly opt into) attaching files (see
  /// `LocalPocketFiles.attach(allowVolatileBlobs: ...)`).
  Future<bool> get isDurable => Future.value(true);
}

/// {@template localpocket.blob_missing_error}
/// Sentinel error signalling that a blob entry is genuinely absent — the
/// platform-neutral "file not found" condition. Backends translate native
/// not-found signals (e.g. OPFS `NotFoundError`) into this type so callers
/// can classify it uniformly without JS-interop dependencies.
/// {@endtemplate}
class BlobMissingError implements Exception {
  /// Creates a not-found signal for [hash].
  ///
  /// {@macro localpocket.blob_missing_error}
  BlobMissingError(this.hash);

  /// The blob hash that was not found.
  final String hash;

  @override
  String toString() => 'BlobMissingError: $hash';
}

/// {@template localpocket.blob_storage_exception}
/// A blob-store operation failed for a reason other than absence (permission
/// denial, quota, corruption). Unlike the `Blob not found` [StateError], this
/// preserves the original platform error in [cause] so callers can tell
/// "storage is broken" from "blob is missing".
/// {@endtemplate}
class BlobStorageException implements Exception {
  /// Creates a blob-storage exception wrapping [cause] for [hash].
  ///
  /// {@macro localpocket.blob_storage_exception}
  BlobStorageException(this.cause, this.hash);

  /// The original platform error (e.g. a `DOMException` name, an `IOError`,
  /// or whatever the backend raised). Never `null`.
  final Object cause;

  /// The blob hash the failed operation targeted.
  final String hash;

  @override
  String toString() => 'BlobStorageException($hash): $cause';
}

/// Backend-neutral view of a blob directory (OPFS on web, a disk dir
/// natively). Plain Dart types (not JS-interop handles) keep the store logic
/// testable under the VM with pure-Dart fakes.
///
/// Contract for [read] and [remove]: throw [BlobMissingError] when [name] is
/// genuinely absent (translate native not-found signals into it), any other
/// error for a real storage failure — callers classify via [isBlobMissing].
abstract class OpfsDir {
  /// Opens [name] for reading and returns its full byte content.
  ///
  /// Throws [BlobMissingError] when [name] does not exist; any other thrown
  /// error represents a genuine storage failure.
  Future<Uint8List> read(String name);

  /// Writes [bytes] to [name], creating it if absent.
  Future<void> write(String name, Uint8List bytes);

  /// Removes [name]. Throws [BlobMissingError] when [name] is absent; other
  /// errors are genuine storage failures.
  Future<void> remove(String name);

  /// Returns `true` when [name] exists.
  Future<bool> exists(String name);

  /// Returns the size in bytes of [name], or `null` when it is absent.
  Future<int?> size(String name);

  /// Returns the names of every entry in this directory.
  Future<List<String>> list();
}

/// Whether [error] is a genuinely absent blob (platform-neutral "file not
/// found") as opposed to a real storage failure.
bool isBlobMissing(Object error) => error is BlobMissingError;

/// {@template localpocket.stream_validation_result}
/// Result of streaming validation containing the verified hash and byte count.
/// {@endtemplate}
class StreamValidationResult {
  /// Creates a stream-validation result.
  ///
  /// {@macro localpocket.stream_validation_result}
  const StreamValidationResult({required this.hash, required this.totalBytes});

  /// Verified SHA-256 hash, or the supplied storage key.
  final String hash;

  /// Number of bytes consumed from the input stream.
  final int totalBytes;
}

/// Consumes a byte stream while computing its SHA-256 digest, verifying size
/// and expected hash constraints, and optionally piping chunks to [onChunk].
Future<StreamValidationResult> processAndValidateBlobStream(
  Stream<List<int>> bytes, {
  FutureOr<void> Function(List<int> chunk)? onChunk,
  String? expectedSha256,
  int? expectedSize,
  String? key,
}) async {
  final output = <Digest>[];
  final byteSink = sha256.startChunkedConversion(
    ChunkedConversionSink<Digest>.withCallback((d) => output.addAll(d)),
  );

  var totalBytes = 0;
  await for (final chunk in bytes) {
    if (onChunk != null) {
      await onChunk(chunk);
    }
    byteSink.add(chunk);
    totalBytes += chunk.length;
  }
  byteSink.close();

  if (expectedSize != null && totalBytes != expectedSize) {
    throw StateError(
        'Size mismatch: expected $expectedSize but got $totalBytes');
  }

  final computedHash = key ?? output.single.toString();
  BlobStore.validateHash(computedHash);

  if (expectedSha256 != null && computedHash != expectedSha256) {
    throw StateError(
        'SHA-256 mismatch: expected $expectedSha256 but got $computedHash');
  }

  return StreamValidationResult(hash: computedHash, totalBytes: totalBytes);
}

/// {@template localpocket.memory_blob_store}
/// In-memory implementation of BlobStore, useful for hermetic testing and web mock.
/// {@endtemplate}
class MemoryBlobStore extends BlobStore {
  /// Creates an empty in-memory blob store.
  ///
  /// {@macro localpocket.memory_blob_store}
  MemoryBlobStore();

  final Map<String, Uint8List> _blobs = {};
  final Map<String, int> _lastModified = {};
  final List<String> _tmpFiles = [];

  @override
  Future<String> put(
    Stream<List<int>> bytes, {
    String? expectedSha256,
    int? expectedSize,
    String? key,
  }) async {
    final builder = BytesBuilder(copy: false);
    final result = await processAndValidateBlobStream(
      bytes,
      onChunk: (chunk) => builder.add(chunk),
      expectedSha256: expectedSha256,
      expectedSize: expectedSize,
      key: key,
    );
    _blobs[result.hash] = builder.takeBytes();
    _lastModified[result.hash] = DateTime.now().millisecondsSinceEpoch;
    return result.hash;
  }

  @override
  Future<Stream<List<int>>> open(String hash) async {
    BlobStore.validateHash(hash);
    final data = _blobs[hash];
    if (data == null) {
      throw StateError('Blob not found: $hash');
    }
    return Stream.value(data);
  }

  @override
  Future<void> delete(String hash) async {
    BlobStore.validateHash(hash);
    _blobs.remove(hash);
    _lastModified.remove(hash);
  }

  @override
  Future<bool> exists(String hash) async {
    BlobStore.validateHash(hash);
    return _blobs.containsKey(hash);
  }

  @override
  Future<int?> size(String hash) async {
    BlobStore.validateHash(hash);
    return _blobs[hash]?.length;
  }

  @override
  Future<int> cleanTmp({Duration olderThan = const Duration(hours: 24)}) async {
    final count = _tmpFiles.length;
    _tmpFiles.clear();
    return count;
  }

  @override
  Future<List<String>> listHashes() async => _blobs.keys.toList();

  @override
  Future<int?> modifiedAt(String hash) async {
    BlobStore.validateHash(hash);
    return _lastModified[hash];
  }

  @override
  Future<bool> get isDurable => Future.value(false);
}

/// {@template localpocket.encrypting_blob_store}
/// EncryptingBlobStore decorator: encrypts bytes at rest; `put` hashes the
/// **plaintext** stream so dedup, refcount, and remote-name logic are
/// untouched.
/// {@endtemplate}
class EncryptingBlobStore extends BlobStore {
  /// Creates an encrypting store from explicit byte transformation callbacks.
  ///
  /// {@macro localpocket.encrypting_blob_store}
  EncryptingBlobStore(
    this._inner, {
    required List<int> Function(List<int> plaintext) encrypt,
    required List<int> Function(List<int> ciphertext) decrypt,
  })  : _encrypt = encrypt,
        _decrypt = decrypt,
        _cipher = null;

  /// Creates an encrypting store backed by [cipher].
  ///
  /// {@macro localpocket.encrypting_blob_store}
  EncryptingBlobStore.withCipher(
    this._inner,
    FieldCipher cipher,
  )   : _encrypt = cipher.encrypt,
        _decrypt = cipher.decrypt,
        _cipher = cipher;

  final BlobStore _inner;
  final List<int> Function(List<int> plaintext) _encrypt;
  final List<int> Function(List<int> ciphertext) _decrypt;
  final FieldCipher? _cipher;

  @override
  Future<String> put(
    Stream<List<int>> bytes, {
    String? expectedSha256,
    int? expectedSize,
    String? key,
  }) async {
    // Buffer and hash plaintext stream
    final builder = BytesBuilder(copy: false);
    await for (final chunk in bytes) {
      builder.add(chunk);
    }
    final plaintext = builder.takeBytes();
    if (expectedSize != null && plaintext.length != expectedSize) {
      throw StateError(
          'Size mismatch: expected $expectedSize but got ${plaintext.length}');
    }
    final hash = sha256.convert(plaintext).toString();
    if (expectedSha256 != null && hash != expectedSha256) {
      throw StateError(
          'SHA-256 mismatch: expected $expectedSha256 but got $hash');
    }

    final ciphertext = _cipher != null
        ? await _cipher!.encryptAsync(plaintext)
        : _encrypt(plaintext);
    // The decorator deliberately ignores [key] so encrypted blobs retain the
    // plaintext-derived identity used for deduplication and references.
    await _inner.put(Stream.value(ciphertext),
        expectedSha256: null, expectedSize: null, key: hash);
    return hash;
  }

  @override
  Future<Stream<List<int>>> open(String hash) async {
    BlobStore.validateHash(hash);
    final cipherStream = await _inner.open(hash);
    final builder = BytesBuilder(copy: false);
    await for (final chunk in cipherStream) {
      builder.add(chunk);
    }
    final ciphertext = builder.takeBytes();
    final plaintext = _cipher != null
        ? await _cipher!.decryptAsync(ciphertext)
        : _decrypt(ciphertext);
    return Stream.value(plaintext);
  }

  @override
  Future<void> delete(String hash) => _inner.delete(hash);

  @override
  Future<bool> exists(String hash) => _inner.exists(hash);

  @override
  Future<int?> size(String hash) async {
    BlobStore.validateHash(hash);
    if (!await _inner.exists(hash)) return null;

    final stream = await open(hash);
    var plaintextSize = 0;
    await for (final chunk in stream) {
      plaintextSize += chunk.length;
    }
    return plaintextSize;
  }

  @override
  Future<int> cleanTmp({Duration olderThan = const Duration(hours: 24)}) =>
      _inner.cleanTmp(olderThan: olderThan);

  @override
  Future<List<String>> listHashes() => _inner.listHashes();

  @override
  Future<bool> get isDurable => _inner.isDurable;
}
