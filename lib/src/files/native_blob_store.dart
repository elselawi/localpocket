import 'dart:async';
import 'dart:convert';
import 'dart:io';
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

  String _shardDir(String hash) => p.join(_blobsDir, hash.substring(0, 2));
  String _blobPath(String hash) => p.join(_shardDir(hash), hash);

  @override
  Future<String> put(
    Stream<List<int>> bytes, {
    String? expectedSha256,
    int? expectedSize,
    String? key,
  }) async {
    final tmpId = 'tmp_${DateTime.now().microsecondsSinceEpoch}_$pid';
    final tmpFile = File(p.join(_tmpDir, tmpId));
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
        throw StateError('Size mismatch: expected $expectedSize but got $totalBytes');
      }

      final computedHash = key ?? output.single.toString();
      if (expectedSha256 != null && computedHash != expectedSha256) {
        throw StateError('SHA-256 mismatch: expected $expectedSha256 but got $computedHash');
      }

      final targetDir = Directory(_shardDir(computedHash));
      if (!await targetDir.exists()) {
        await targetDir.create(recursive: true);
      }

      final targetPath = _blobPath(computedHash);
      final targetFile = File(targetPath);

      // Atomic publish: rename into destination
      if (await targetFile.exists()) {
        // Dedup: already exists, remove tmp file
        await tmpFile.delete();
      } else {
        await tmpFile.rename(targetPath);
      }

      return computedHash;
    } catch (e) {
      // Ensure sink is closed and tmp file cleaned on failure (or left as tmp).
      try {
        await sink.close();
      } catch (_) {}
      rethrow;
    }
  }

  @override
  Future<Stream<List<int>>> open(String hash) async {
    final path = _blobPath(hash);
    final file = File(path);
    if (!await file.exists()) {
      throw StateError('Blob not found: $hash');
    }
    return file.openRead();
  }

  @override
  Future<void> delete(String hash) async {
    final path = _blobPath(hash);
    final file = File(path);
    if (await file.exists()) {
      await file.delete();
    }
  }

  @override
  Future<bool> exists(String hash) async {
    return File(_blobPath(hash)).exists();
  }

  @override
  Future<int?> size(String hash) async {
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
            hashes.add(p.basename(file.path));
          }
        }
      }
    }
    return hashes;
  }
}
