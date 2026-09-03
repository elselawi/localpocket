import 'dart:async';
import 'dart:js_interop';
import 'dart:typed_data';
// ignore: implementation_imports
import 'package:sqlite3/src/wasm/js_interop/new_file_system_access.dart';
import 'package:meta/meta.dart';
import 'package:web/web.dart' show DOMException, FileSystemDirectoryHandle;

import '../../../kernel/files/blob_store.dart';

/// Default ceiling for ONE blob (bytes), enforced mid-stream during [put] so
/// an unbounded or lying source stream can never OOM the worker. Mirrors the
/// worker's per-upload-session ceiling.
const int defaultWebMaxBlobBytes = 268435456; // 256 MiB

/// Default ceiling for the aggregate volatile (in-memory) fallback (bytes).
/// The fallback is only used when OPFS is unavailable; bounding it keeps a
/// long-lived memory-only worker from growing without bound.
const int defaultWebVolatileCapBytes = 134217728; // 128 MiB

/// {@template localpocket.web_blob_store}
/// Web [BlobStore] backed by async OPFS, with an in-memory fallback when OPFS
/// is unavailable. Uses the same worker-safe OPFS interop (`storageManager` →
/// `directory`, via `@JS('navigator')`) as `sqlite3_web`'s VFS, so it can back
/// a worker-owned engine.
///
/// Streams bytes, validates SHA-256 and expected size, and writes to the final
/// hash name only after validation — a failed/short write never leaves a
/// published-looking blob. Does NOT create object URLs (window-scope work).
///
/// Genuine storage failures (permission denied, quota, corruption, ...) are
/// rethrown as [BlobStorageException] preserving the original error; the
/// `Blob not found` [StateError] is reserved exclusively for the true
/// missing-blob case, so callers can distinguish "storage is broken" from
/// "blob is missing".
/// {@endtemplate}
class WebBlobStore extends BlobStore {
  /// Creates a store backed by OPFS when available. Pass [opfsDir] only in
  /// tests to inject a pure-Dart backend and bypass the `storageManager` probe
  /// (which returns `null` under the VM); production callers leave it unset.
  ///
  /// [maxBlobBytes] caps a single blob (enforced mid-stream so oversized
  /// content is rejected before it is buffered); [volatileCapBytes] bounds
  /// the aggregate in-memory fallback.
  ///
  /// {@macro localpocket.web_blob_store}
  WebBlobStore({
    String rootPrefix = 'localpocket_blobs',
    this.maxBlobBytes = defaultWebMaxBlobBytes,
    this.volatileCapBytes = defaultWebVolatileCapBytes,
    @visibleForTesting this.opfsDir,
  }) : _rootPrefix = rootPrefix;

  /// Ceiling for one blob's byte count; see [defaultWebMaxBlobBytes].
  final int maxBlobBytes;

  /// Ceiling for the aggregate volatile fallback byte count.
  final int volatileCapBytes;

  final String _rootPrefix;
  final Map<String, Uint8List> _memoryFallback = {};
  int _volatileBytes = 0;

  /// Test seam: use this backend directly instead of probing
  /// `navigator.storage`. See [WebBlobStore.new].
  @visibleForTesting
  final OpfsDir? opfsDir;

  /// Cached OPFS availability probe; `null` until first use. Decided once for
  /// the worker's lifetime — a context that loses OPFS cannot regain it, so a
  /// cached `false` is stable. Ignored when [opfsDir] is set.
  bool? _opfsAvailable;

  /// Set once OPFS has been probed available but has since failed to resolve
  /// or operate, so [isDurable] stops claiming a durability the store no
  /// longer has.
  bool _opfsUnavailable = false;

  /// The resolved OPFS backend, cached after the first successful resolution
  /// so each subsequent operation skips the redundant directory probe.
  OpfsDir? _opfsDir;

  /// Probes whether the OPFS root for this store's blobs is reachable.
  Future<bool> _probeOpfs() async {
    try {
      final storage = storageManager;
      if (storage == null) return false;
      final root = await storage.directory;
      await root.getDirectory(_rootPrefix, create: true);
      return true;
    } catch (_) {
      return false;
    }
  }

  /// Returns the cached OPFS availability, probing on first use. A store that
  /// has degraded (probe succeeded but resolution/operation failed) reports
  /// unavailable from then on.
  Future<bool> _isOpfsAvailable() async {
    if (_opfsUnavailable) return false;
    return _opfsAvailable ??= await _probeOpfs();
  }

  /// Returns the OPFS backend directory, or `null` when OPFS is unavailable
  /// (callers fall back to [_memoryFallback]). The [opfsDir] test seam is
  /// returned directly, skipping the probe. The resolved directory is cached;
  /// a resolution failure after a successful probe is remembered so
  /// [isDurable] cannot keep claiming durability for a store that silently
  /// degraded to memory.
  Future<OpfsDir?> _getOpfsDir() async {
    final seam = opfsDir;
    if (seam != null) return seam;
    final cached = _opfsDir;
    if (cached != null) return cached;
    if (!await _isOpfsAvailable()) return null;
    try {
      final storage = storageManager;
      if (storage == null) return null;
      final root = await storage.directory;
      final dir =
          _RealOpfsDir(await root.getDirectory(_rootPrefix, create: true));
      _opfsDir = dir;
      return dir;
    } catch (_) {
      _opfsUnavailable = true;
      return null;
    }
  }

  /// Whether blob bytes are persisted to OPFS. `false` means bytes live only
  /// in the volatile in-memory fallback, which disappears when the worker
  /// terminates or reloads. Reports the STORE'S CURRENT backend — once OPFS
  /// has been probed but cannot actually be used, this reports `false` rather
  /// than a stale probe result. The app can surface this to users or gate
  /// `attach` behind `allowVolatileBlobs`.
  @override
  Future<bool> get isDurable async {
    final seam = opfsDir;
    if (seam != null) return true;
    return await _getOpfsDir() != null;
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
      maxBytes: maxBlobBytes,
    );
    final data = builder.takeBytes();

    final opfs = await _getOpfsDir();
    if (opfs != null) {
      // Publish in two steps: stage under a `tmp_` name (each write is
      // verified after it lands), promote to the final content-addressed
      // name, then drop the staging entry. A quota failure or crash between
      // staging and promote leaves only a `tmp_` file that [cleanTmp]
      // removes — never corrupt bytes under the hash itself.
      final staged = 'tmp_${result.hash}';
      try {
        await opfs.write(staged, data);
        await opfs.write(result.hash, data);
      } finally {
        try {
          await opfs.remove(staged);
        } catch (_) {
          // Best-effort: a leftover tmp_ file is reclaimed by cleanTmp.
        }
      }
    } else {
      _putVolatile(result.hash, data);
    }

    return result.hash;
  }

  /// Stores [data] in the volatile in-memory fallback, refusing once the
  /// aggregate byte cap is reached so the fallback stays bounded.
  void _putVolatile(String hash, Uint8List data) {
    if (_volatileBytes + data.length > volatileCapBytes) {
      throw BlobStorageException(
          StateError('volatile blob memory cap exceeded: would reach '
              '${_volatileBytes + data.length} of $volatileCapBytes bytes'),
          hash);
    }
    _memoryFallback[hash] = data;
    _volatileBytes += data.length;
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
        final uint8 = await opfs.read(hash);
        return Stream.value(uint8);
      } catch (e) {
        // Only the genuine "file does not exist" case falls through to the
        // `Blob not found` error below; every other failure (permission,
        // quota, corruption, ...) is preserved as a [BlobStorageException]
        // so a broken backend is distinguishable from a missing blob.
        if (!isBlobMissing(e)) {
          throw BlobStorageException(e, hash);
        }
      }
    }

    throw StateError('Blob not found: $hash');
  }

  @override
  Future<void> delete(String hash) async {
    BlobStore.validateHash(hash);
    final removed = _memoryFallback.remove(hash);
    if (removed != null) _volatileBytes -= removed.length;

    final opfs = await _getOpfsDir();
    if (opfs != null) {
      try {
        await opfs.remove(hash);
      } catch (e) {
        // Best-effort for a genuinely missing entry (concurrent removal), but
        // a real storage failure (permission, quota, ...) must surface as a
        // [BlobStorageException], not be silently swallowed.
        if (!isBlobMissing(e)) {
          throw BlobStorageException(e, hash);
        }
      }
    }
  }

  @override
  Future<bool> exists(String hash) async {
    BlobStore.validateHash(hash);
    if (_memoryFallback.containsKey(hash)) return true;

    final opfs = await _getOpfsDir();
    if (opfs != null) {
      return opfs.exists(hash);
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
      return opfs.size(hash);
    }
    return null;
  }

  @override
  Future<int> cleanTmp({Duration olderThan = const Duration(hours: 24)}) async {
    final opfs = await _getOpfsDir();
    if (opfs == null) return 0;
    var cleaned = 0;
    try {
      for (final name in await opfs.list()) {
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
        for (final name in await opfs.list()) {
          if (BlobStore.validHashPattern.hasMatch(name)) result.add(name);
        }
      } catch (_) {}
    }
    return result.toList();
  }

  /// True when [error] is the File System Access API's "entry does not exist"
  /// `DOMException`; used by [_RealOpfsDir] to signal missing entries via the
  /// platform-neutral [BlobMissingError].
  static bool _isNotFoundDomException(Object error) =>
      error is DOMException &&
      (error.name == 'NotFoundError' || error.name == 'TypeMismatchError');
}

/// {@template localpocket.__real_opfs_dir}
/// Real OPFS backend: adapts a `FileSystemDirectoryHandle` to [OpfsDir], so
/// [WebBlobStore] never touches `dart:js_interop` outside this adapter and
/// stays unit-testable under the VM.
/// {@endtemplate}
class _RealOpfsDir implements OpfsDir {
  /// {@macro localpocket.__real_opfs_dir}
  _RealOpfsDir(this._handle);

  final FileSystemDirectoryHandle _handle;

  @override
  Future<Uint8List> read(String name) async {
    try {
      final fileHandle = await _handle.openFile(name);
      final file = await fileHandle.getFile().toDart;
      final arrayBuffer = await file.arrayBuffer().toDart;
      return arrayBuffer.toDart.asUint8List();
    } catch (e) {
      // Translate the platform "file not found" DOMException into the
      // platform-neutral [BlobMissingError] so [isBlobMissing] can classify it
      // uniformly without JS interop at the store layer; other errors rethrow
      // so the store can wrap them as [BlobStorageException].
      if (WebBlobStore._isNotFoundDomException(e)) throw BlobMissingError(name);
      rethrow;
    }
  }

  @override
  Future<void> write(String name, Uint8List bytes) async {
    final fileHandle = await _handle.openFile(name, create: true);
    final writable = await fileHandle.createWritable().toDart;
    try {
      await writable.write(bytes.buffer.toJS).toDart;
      await writable.close().toDart;
    } catch (e) {
      // Never leave a half-written entry behind: abort the writable
      // best-effort, then surface the original failure typed (a real storage
      // failure, not an absence).
      try {
        await writable.abort().toDart;
      } catch (_) {}
      throw BlobStorageException(e, name);
    }
    // Verify-after-write: a partial OPFS write (quota, interrupted close)
    // must never publish corrupt bytes under a content-addressed name. Re-open
    // and confirm the persisted length; on mismatch delete the entry and fail.
    try {
      final check = await _handle.openFile(name);
      final file = await check.getFile().toDart;
      if (file.size != bytes.length) {
        try {
          await _handle.remove(name);
        } catch (_) {}
        throw BlobStorageException(
            StateError('write verification failed: persisted ${file.size} of '
                '${bytes.length} bytes'),
            name);
      }
    } on BlobStorageException {
      rethrow;
    } catch (e) {
      // Could not re-open for verification: the entry is unreliable.
      try {
        await _handle.remove(name);
      } catch (_) {}
      throw BlobStorageException(e, name);
    }
  }

  @override
  Future<void> remove(String name) async {
    try {
      await _handle.remove(name);
    } catch (e) {
      // Same translation as [read]: a genuinely missing entry is not a
      // failure, but a real storage error must propagate.
      if (WebBlobStore._isNotFoundDomException(e)) throw BlobMissingError(name);
      rethrow;
    }
  }

  @override
  Future<bool> exists(String name) async {
    try {
      await _handle.openFile(name);
      return true;
    } catch (_) {
      return false;
    }
  }

  @override
  Future<int?> size(String name) async {
    try {
      final fileHandle = await _handle.openFile(name);
      final file = await fileHandle.getFile().toDart;
      return file.size;
    } catch (_) {
      return null;
    }
  }

  @override
  Future<List<String>> list() async {
    final names = <String>[];
    await for (final entry in _handle.list()) {
      names.add(entry.name);
    }
    return names;
  }
}
