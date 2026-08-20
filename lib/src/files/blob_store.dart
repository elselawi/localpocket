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
}

/// Result of streaming validation containing the verified hash and byte count.
class StreamValidationResult {
  final String hash;
  final int totalBytes;

  const StreamValidationResult({required this.hash, required this.totalBytes});
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
}

/// EncryptingBlobStore decorator.
///
/// Encrypts bytes at rest; `put` hashes the **plaintext** stream,
/// so dedup, refcount, and remote-name logic are untouched.
/// Decorates a [BlobStore] with encryption at rest.
class EncryptingBlobStore extends BlobStore {
  final BlobStore _inner;
  final List<int> Function(List<int> plaintext) _encrypt;
  final List<int> Function(List<int> ciphertext) _decrypt;
  final FieldCipher? _cipher;

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
    // Put ciphertext into inner store under the plaintext hash
    await _inner.put(Stream.value(ciphertext),
        expectedSha256: null, expectedSize: null, key: hash);
    return hash;
  }

  @override
  Future<Stream<List<int>>> open(String hash) async {
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
  Future<int?> size(String hash) => _inner.size(hash);

  @override
  Future<int> cleanTmp({Duration olderThan = const Duration(hours: 24)}) =>
      _inner.cleanTmp(olderThan: olderThan);

  @override
  Future<List<String>> listHashes() => _inner.listHashes();
}
