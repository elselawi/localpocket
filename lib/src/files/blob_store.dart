import 'dart:async';
import 'dart:convert' show ChunkedConversionSink;
import 'dart:typed_data';
import 'package:crypto/crypto.dart';

import '../core/cipher.dart';

/// BlobStore interface.
///
/// Implemented natively with `dart:io` or in-memory/OPFS on web.
abstract class BlobStore {
  /// Creates a blob-store implementation.
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

/// Sentinel error signalling that a blob entry is genuinely absent — the
/// platform-neutral "file not found" condition.
///
/// Backends whose native API distinguishes "missing entry" from "storage
/// failure" (e.g. OPFS, where `getFileHandle` rejects with a `DOMException`
/// whose name is `'NotFoundError'`) translate that native signal into this
/// type so [WebBlobStore] (and any other [BlobStore]) can classify it
/// uniformly and without depending on JS interop types.
class BlobMissingError implements Exception {
  /// Creates a not-found signal for [hash].
  BlobMissingError(this.hash);

  /// The blob hash that was not found.
  final String hash;

  @override
  String toString() => 'BlobMissingError: $hash';
}

/// A blob-store backend operation failed for a reason other than the blob
/// being absent — for example an OPFS permission denial, quota-exceeded
/// error, or read corruption.
///
/// Unlike the `Blob not found` [StateError] thrown when a blob is genuinely
/// missing, this preserves the original platform error in [cause] so callers
/// (the files API, the file-sync lane) can distinguish "storage is broken"
/// from "blob is missing" and avoid misleading re-download attempts or
/// masking the real failure during debugging.
class BlobStorageException implements Exception {
  /// Creates a blob-storage exception wrapping [cause] for [hash].
  BlobStorageException(this.cause, this.hash);

  /// The original platform error (e.g. a `DOMException` name, an `IOError`,
  /// or whatever the backend raised). Never `null`.
  final Object cause;

  /// The blob hash the failed operation targeted.
  final String hash;

  @override
  String toString() => 'BlobStorageException($hash): $cause';
}

/// Backend-neutral view of a blob directory (OPFS on web, a disk dir natively).
///
/// Exposing blob operations as plain Dart types — rather than raw JS-interop
/// handles — keeps the store logic testable under the VM: tests inject a
/// pure-Dart [OpfsDir] fake that throws [BlobMissingError] for absent entries
/// and a platform-specific error for real failures, exercising the
/// not-found-vs-failure classification without a browser or OPFS dependency.
///
/// Contract for [read] and [remove]:
/// - Throw [BlobMissingError] when [name] is genuinely absent.
/// - Throw any other error for a real storage failure (permission, quota,
///   corruption, ...). Backends whose native API surfaces a "not found"
///   signal (e.g. OPFS `DOMException` name `'NotFoundError'`) translate it
///   into [BlobMissingError] before throwing, so callers can classify it
///   uniformly via [isBlobMissing].
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

/// Returns `true` when [error] represents a genuinely absent blob entry —
/// the platform-neutral "file not found" condition — as opposed to a real
/// storage failure (permission, quota, corruption, ...).
///
/// Recognizes [BlobMissingError], which backends throw (after translating any
/// native "not found" signal, such as an OPFS `NotFoundError` `DOMException`)
/// so [WebBlobStore] (and any other [BlobStore]) can classify it uniformly
/// and without depending on JS-interop types.
///
/// Used by `WebBlobStore.open`/`delete` to decide between falling through to
/// the documented `Blob not found` [StateError] (genuinely missing) and
/// rethrowing as a typed [BlobStorageException] (real failure).
bool isBlobMissing(Object error) => error is BlobMissingError;

/// Result of streaming validation containing the verified hash and byte count.
class StreamValidationResult {
  /// Creates a stream-validation result.
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

/// In-memory implementation of BlobStore, useful for hermetic testing and web mock.
class MemoryBlobStore extends BlobStore {
  /// Creates an empty in-memory blob store.
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

/// EncryptingBlobStore decorator.
///
/// Encrypts bytes at rest; `put` hashes the **plaintext** stream,
/// so dedup, refcount, and remote-name logic are untouched.
/// Decorates a [BlobStore] with encryption at rest.
class EncryptingBlobStore extends BlobStore {
  /// Creates an encrypting store from explicit byte transformation callbacks.
  EncryptingBlobStore(
    this._inner, {
    required List<int> Function(List<int> plaintext) encrypt,
    required List<int> Function(List<int> ciphertext) decrypt,
  })  : _encrypt = encrypt,
        _decrypt = decrypt,
        _cipher = null;

  /// Creates an encrypting store backed by [cipher].
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
