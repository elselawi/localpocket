import '../kernel/files/blob_store.dart';

/// Web-safe placeholder for the native filesystem store. Web applications
/// should inject a browser BlobStore (for example an OPFS-backed one); this
/// type prevents accidental dart:io imports from breaking web compilation.
class NativeBlobStore extends BlobStore {
  /// Creates a placeholder that reports native filesystem operations as unsupported.
  NativeBlobStore(String rootDir);

  UnsupportedError _unsupported() => UnsupportedError(
      'NativeBlobStore requires dart:io; inject a web BlobStore.');

  @override
  Future<String> put(Stream<List<int>> bytes,
      {String? expectedSha256, int? expectedSize, String? key}) async {
    throw _unsupported();
  }

  @override
  Future<Stream<List<int>>> open(String hash) async => throw _unsupported();

  @override
  Future<void> delete(String hash) async => throw _unsupported();

  @override
  Future<bool> exists(String hash) async => throw _unsupported();

  @override
  Future<int?> size(String hash) async => throw _unsupported();

  @override
  Future<int> cleanTmp({Duration olderThan = const Duration(hours: 24)}) async {
    throw _unsupported();
  }

  @override
  Future<List<String>> listHashes() async => throw _unsupported();
}
