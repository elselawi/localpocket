import 'dart:async';
import 'dart:io';
import 'dart:math';
import 'package:path/path.dart' as p;

import '../kernel/files/blob_store.dart';

/// Native filesystem implementation of [BlobStore].
///
/// Layout:
/// `{rootDir}/blobs/{h[0:2]}/{sha256}`
/// `{rootDir}/tmp/{uuid}`
class NativeBlobStore extends BlobStore {
  /// Creates a native blob store rooted at [rootDir].
  NativeBlobStore(this.rootDir) {
    Directory(_blobsDir).createSync(recursive: true);
    Directory(_tmpDir).createSync(recursive: true);
  }

  /// Root directory containing the blob and temporary-file directories.
  final String rootDir;

  String get _blobsDir => p.join(rootDir, 'blobs');
  String get _tmpDir => p.join(rootDir, 'tmp');

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

    try {
      final result = await processAndValidateBlobStream(
        bytes,
        onChunk: (chunk) => sink.add(chunk),
        expectedSha256: expectedSha256,
        expectedSize: expectedSize,
        key: key,
      );
      await sink.flush();
      await sink.close();

      final computedHash = result.hash;
      final targetDir = Directory(_shardDir(computedHash));
      if (!targetDir.existsSync()) {
        targetDir.createSync(recursive: true);
      }

      final targetPath = _blobPath(computedHash);
      final targetFile = File(targetPath);

      // Atomic publish: rename into destination. On platforms where rename
      // cannot overwrite an existing file (Windows), a concurrent put that
      // published the same hash first makes the loser's rename fail; that is
      // a dedup win, not an error.
      if (targetFile.existsSync()) {
        // Dedup: already exists, remove tmp file
        tmpFile.deleteSync();
      } else {
        try {
          await tmpFile.rename(targetPath);
        } on FileSystemException {
          if (targetFile.existsSync()) {
            // A concurrent writer published the same hash first.
            if (tmpFile.existsSync()) {
              tmpFile.deleteSync();
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
        if (tmpFile.existsSync()) {
          tmpFile.deleteSync();
        }
      } catch (_) {}
      rethrow;
    }
  }

  @override
  Future<Stream<List<int>>> open(String hash) async {
    BlobStore.validateHash(hash);
    final path = _blobPath(hash);
    final file = File(path);
    if (!file.existsSync()) {
      throw StateError('Blob not found: $hash');
    }
    return file.openRead();
  }

  @override
  Future<void> delete(String hash) async {
    BlobStore.validateHash(hash);
    final path = _blobPath(hash);
    final file = File(path);
    if (file.existsSync()) {
      file.deleteSync();
    }
  }

  @override
  Future<bool> exists(String hash) async {
    BlobStore.validateHash(hash);
    return File(_blobPath(hash)).existsSync();
  }

  @override
  Future<int?> size(String hash) async {
    BlobStore.validateHash(hash);
    final file = File(_blobPath(hash));
    if (!file.existsSync()) return null;
    return file.lengthSync();
  }

  @override
  Future<int?> modifiedAt(String hash) async {
    BlobStore.validateHash(hash);
    final file = File(_blobPath(hash));
    if (!file.existsSync()) return null;
    try {
      return file.lastModifiedSync().millisecondsSinceEpoch;
    } catch (_) {
      return null;
    }
  }

  @override
  Future<int> cleanTmp({Duration olderThan = const Duration(hours: 24)}) async {
    final tmpDir = Directory(_tmpDir);
    if (!tmpDir.existsSync()) return 0;
    final now = DateTime.now();
    var cleaned = 0;
    await for (final entity in tmpDir.list()) {
      if (entity is File) {
        final stat = entity.statSync();
        if (now.difference(stat.modified) > olderThan) {
          try {
            entity.deleteSync();
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
    if (!blobsDir.existsSync()) return [];
    final hashes = <String>[];
    await for (final shard in blobsDir.list()) {
      if (shard is Directory) {
        await for (final file in shard.list()) {
          if (file is File) {
            final name = p.basename(file.path);
            // Malformed/non-hash files in a shard are ignored, never returned
            // as (or confused with) real blob identities.
            if (BlobStore.validHashPattern.hasMatch(name)) hashes.add(name);
          }
        }
      }
    }
    return hashes;
  }
}
