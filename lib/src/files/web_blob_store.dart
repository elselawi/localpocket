import 'dart:async';
import 'dart:convert' show ChunkedConversionSink;
import 'dart:js_interop';
import 'dart:typed_data';
import 'package:crypto/crypto.dart';
// ignore: implementation_imports
import 'package:sqlite3/src/wasm/js_interop/new_file_system_access.dart';
import 'package:web/web.dart' show FileSystemDirectoryHandle;

import 'blob_store.dart';

/// Web implementation of [BlobStore] backed by async OPFS, with an in-memory
/// fallback when OPFS is unavailable.
///
/// Uses the same worker-safe OPFS interop (`storageManager` -> `directory`,
/// via `@JS('navigator')`) that `sqlite3_web` uses for its VFS, so this store
/// can back a worker-owned `LocalPocket` engine.
///
/// Features:
/// - Streams bytes, computes and validates SHA-256 and expected size.
/// - Writes to the final hash name only after validation, so a failed/short
///   write never leaves a published-looking blob.
/// - Does NOT create object URLs (window-scope work); see
///   [web_blob_object_url.dart].
class WebBlobStore extends BlobStore {
  final String _rootPrefix;
  final Map<String, Uint8List> _memoryFallback = {};

  static final RegExp _hashRe = RegExp(r'^[0-9a-f]{64}$');

  WebBlobStore({String rootPrefix = 'localpocket_blobs'})
      : _rootPrefix = rootPrefix;

  void _validateHash(String hash) {
    if (!_hashRe.hasMatch(hash)) {
      throw ArgumentError('Invalid blob hash "$hash": must be 64 hex chars.');
    }
  }

  /// The OPFS root directory for this store's blobs, or `null` when OPFS is
  /// unavailable (for example in a worker without storage, or non-secure
  /// context). Callers fall back to [_memoryFallback] in that case.
  Future<FileSystemDirectoryHandle?> _getOpfsDir() async {
    try {
      final storage = storageManager;
      if (storage == null) return null;
      final root = await storage.directory;
      return await root.getDirectory(_rootPrefix, create: true);
    } catch (_) {
      return null;
    }
  }

  @override
  Future<String> put(
    Stream<List<int>> bytes, {
    String? expectedSha256,
    int? expectedSize,
    String? key,
  }) async {
    final builder = BytesBuilder(copy: false);
    final output = <Digest>[];
    final byteSink = sha256.startChunkedConversion(
      ChunkedConversionSink<Digest>.withCallback(
          (List<Digest> d) => output.addAll(d)),
    );

    var totalBytes = 0;
    try {
      await for (final chunk in bytes) {
        builder.add(chunk);
        byteSink.add(chunk);
        totalBytes += chunk.length;
      }
      byteSink.close();

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

      final data = builder.takeBytes();

      final opfs = await _getOpfsDir();
      if (opfs != null) {
        final fileHandle = await opfs.openFile(computedHash, create: true);
        final writable = await fileHandle.createWritable().toDart;
        await writable.write(data.buffer.toJS).toDart;
        await writable.close().toDart;
      } else {
        _memoryFallback[computedHash] = data;
      }

      return computedHash;
    } catch (e) {
      rethrow;
    }
  }

  @override
  Future<Stream<List<int>>> open(String hash) async {
    _validateHash(hash);
    if (_memoryFallback.containsKey(hash)) {
      return Stream.value(_memoryFallback[hash]!);
    }

    final opfs = await _getOpfsDir();
    if (opfs != null) {
      try {
        final fileHandle = await opfs.openFile(hash);
        final file = await fileHandle.getFile().toDart;
        final arrayBuffer = await file.arrayBuffer().toDart;
        final uint8 = arrayBuffer.toDart.asUint8List();
        return Stream.value(uint8);
      } catch (_) {}
    }

    throw StateError('Blob not found: $hash');
  }

  @override
  Future<void> delete(String hash) async {
    _validateHash(hash);
    _memoryFallback.remove(hash);

    final opfs = await _getOpfsDir();
    if (opfs != null) {
      try {
        await opfs.remove(hash);
      } catch (_) {}
    }
  }

  @override
  Future<bool> exists(String hash) async {
    _validateHash(hash);
    if (_memoryFallback.containsKey(hash)) return true;

    final opfs = await _getOpfsDir();
    if (opfs != null) {
      try {
        await opfs.openFile(hash);
        return true;
      } catch (_) {
        return false;
      }
    }
    return false;
  }

  @override
  Future<int?> size(String hash) async {
    _validateHash(hash);
    if (_memoryFallback.containsKey(hash)) {
      return _memoryFallback[hash]!.length;
    }

    final opfs = await _getOpfsDir();
    if (opfs != null) {
      try {
        final fileHandle = await opfs.openFile(hash);
        final file = await fileHandle.getFile().toDart;
        return file.size;
      } catch (_) {}
    }
    return null;
  }

  @override
  Future<int> cleanTmp({Duration olderThan = const Duration(hours: 24)}) async {
    final opfs = await _getOpfsDir();
    if (opfs == null) return 0;
    var cleaned = 0;
    try {
      await for (final entry in opfs.list()) {
        final name = entry.name;
        if (!name.startsWith('tmp_')) continue;
        try {
          await opfs.remove(name);
          cleaned++;
        } catch (_) {}
      }
    } catch (_) {}
    return cleaned;
  }

  @override
  Future<List<String>> listHashes() async {
    final result = <String>{..._memoryFallback.keys};
    final opfs = await _getOpfsDir();
    if (opfs != null) {
      try {
        await for (final element in opfs.list()) {
          final entry = element;
          final name = entry.name;
          if (_hashRe.hasMatch(name)) result.add(name);
        }
      } catch (_) {}
    }
    return result.toList();
  }
}
