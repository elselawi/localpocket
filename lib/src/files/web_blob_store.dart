import 'dart:async';
import 'dart:js_interop';
import 'dart:typed_data';
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

  WebBlobStore({String rootPrefix = 'localpocket_blobs'})
      : _rootPrefix = rootPrefix;
  final String _rootPrefix;
  final Map<String, Uint8List> _memoryFallback = {};

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
    final result = await processAndValidateBlobStream(
      bytes,
      onChunk: (chunk) => builder.add(chunk),
      expectedSha256: expectedSha256,
      expectedSize: expectedSize,
      key: key,
    );
    final data = builder.takeBytes();

    final opfs = await _getOpfsDir();
    if (opfs != null) {
      final fileHandle = await opfs.openFile(result.hash, create: true);
      final writable = await fileHandle.createWritable().toDart;
      await writable.write(data.buffer.toJS).toDart;
      await writable.close().toDart;
    } else {
      _memoryFallback[result.hash] = data;
    }

    return result.hash;
  }

  @override
  Future<Stream<List<int>>> open(String hash) async {
    BlobStore.validateHash(hash);
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
    BlobStore.validateHash(hash);
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
    BlobStore.validateHash(hash);
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
    BlobStore.validateHash(hash);
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
          if (BlobStore.validHashPattern.hasMatch(name)) result.add(name);
        }
      } catch (_) {}
    }
    return result.toList();
  }
}
