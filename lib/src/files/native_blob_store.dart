import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'dart:math';
import 'package:crypto/crypto.dart';
import 'package:path/path.dart' as p;

import 'blob_store.dart';

/// Native filesystem implementation of [BlobStore].
///
/// Layout:
/// `{rootDir}/blobs/{h[0:2]}/{sha256}`
/// `{rootDir}/tmp/{uuid}`
class NativeBlobStore extends BlobStore {
  final String rootDir;

  NativeBlobStore(this.rootDir) {
    Directory(_blobsDir).createSync(recursive: true);
    Directory(_tmpDir).createSync(recursive: true);
  }

  String get _blobsDir => p.join(rootDir, 'blobs');
  String get _tmpDir => p.join(rootDir, 'tmp');

  /// A stored blob identity must be a full lowercase hex SHA-256. Anything else
  /// (short keys, path separators, traversal) is rejected so a hostile key can
  /// never escape the blob shard directories.
  static final RegExp _hashRe = RegExp(r'^[0-9a-f]{64}$');

  void _validateHash(String hash) {
    if (!_hashRe.hasMatch(hash)) {
      throw ArgumentError('Invalid blob hash "$hash": must be 64 hex chars.');
    }
  }

  String _shardDir(String hash) => p.join(_blobsDir, hash.substring(0, 2));
  String _blobPath(String hash) => p.join(_shardDir(hash), hash);

  // Monotonic counter so concurrent puts never collide on a tmp filename even
  // when they start in the same microsecond.
  int _tmpCounter = 0;
  final Random _tmpRandom = Random();

  String _nextTmpId() => 'tmp_${DateTime.now().microsecondsSinceEpoch}_'
      '${pid}_${_tmpCounter++}_${_tmpRandom.nextInt(0x7fffffff)}';

  @override
  Future<String> put(
    Stream<List<int>> bytes, {
    String? expectedSha256,
    int? expectedSize,
    String? key,
  }) async {
    final tmpFile = File(p.join(_tmpDir, _nextTmpId()));
    final sink = tmpFile.openWrite();
    final output = <Digest>[];
    final byteSink = sha256.startChunkedConversion(
      ChunkedConversionSink<Digest>.withCallback((d) => output.addAll(d)),
    );

    var totalBytes = 0;
    try {
      await for (final chunk in bytes) {
        sink.add(chunk);
        byteSink.add(chunk);
        totalBytes += chunk.length;
      }
      byteSink.close();
      await sink.flush();
      await sink.close();

      if (expectedSize != null && totalBytes != expectedSize) {
        throw StateError(
            'Size mismatch: expected $expectedSize but got $totalBytes');
      }

      final computedHash = key ?? output.single.toString();
      _validateHash(computedHash);
      if (expectedSha256 != null && computedHash != expectedSha256) {
        throw StateError(
            'SHA-256 mismatch: expected $expectedSha256 but got $computedHash');
      }

      final targetDir = Directory(_shardDir(computedHash));
      if (!await targetDir.exists()) {
        await targetDir.create(recursive: true);
      }

      final targetPath = _blobPath(computedHash);
      final targetFile = File(targetPath);

      // Atomic publish: rename into destination. On platforms where rename
      // cannot overwrite an existing file (Windows), a concurrent put that
      // published the same hash first makes the loser's rename fail; that is
      // a dedup win, not an error.
      if (await targetFile.exists()) {
        // Dedup: already exists, remove tmp file
        await tmpFile.delete();
      } else {
        try {
          await tmpFile.rename(targetPath);
        } on FileSystemException {
          if (await targetFile.exists()) {
            // A concurrent writer published the same hash first.
            if (await tmpFile.exists()) {
              await tmpFile.delete();
            }
          } else {
            rethrow;
          }
        }
      }
      return computedHash;
    } catch (e) {
      // Deterministic cleanup: never leave a partially-written tmp file behind
      // on size/SHA mismatch or a stream failure.
      try {
        await sink.close();
      } catch (_) {}
      try {
        if (await tmpFile.exists()) {
          await tmpFile.delete();
        }
      } catch (_) {}
      rethrow;
    }
  }

  @override
  Future<Stream<List<int>>> open(String hash) async {
    _validateHash(hash);
    final path = _blobPath(hash);
    final file = File(path);
    if (!await file.exists()) {
      throw StateError('Blob not found: $hash');
    }
    return file.openRead();
  }

  @override
  Future<void> delete(String hash) async {
    _validateHash(hash);
    final path = _blobPath(hash);
    final file = File(path);
    if (await file.exists()) {
      await file.delete();
    }
  }

  @override
  Future<bool> exists(String hash) async {
    _validateHash(hash);
    return File(_blobPath(hash)).exists();
  }

  @override
  Future<int?> size(String hash) async {
    _validateHash(hash);
    final file = File(_blobPath(hash));
    if (!await file.exists()) return null;
    return file.length();
  }

  @override
  Future<int> cleanTmp({Duration olderThan = const Duration(hours: 24)}) async {
    final tmpDir = Directory(_tmpDir);
    if (!await tmpDir.exists()) return 0;
    final now = DateTime.now();
    var cleaned = 0;
    await for (final entity in tmpDir.list()) {
      if (entity is File) {
        final stat = await entity.stat();
        if (now.difference(stat.modified) > olderThan) {
          try {
            await entity.delete();
            cleaned++;
          } catch (_) {}
        }
      }
    }
    return cleaned;
  }

  @override
  Future<List<String>> listHashes() async {
    final blobsDir = Directory(_blobsDir);
    if (!await blobsDir.exists()) return [];
    final hashes = <String>[];
    await for (final shard in blobsDir.list()) {
      if (shard is Directory) {
        await for (final file in shard.list()) {
          if (file is File) {
            final name = p.basename(file.path);
            // Malformed/non-hash files in a shard are ignored, never returned
            // as (or confused with) real blob identities.
            if (_hashRe.hasMatch(name)) hashes.add(name);
          }
        }
      }
    }
    return hashes;
  }
}
