import 'dart:async';

import '../../kernel/files/blob_store.dart';

/// The web half of the `NativeBlobStore` conditional export.
///
/// The real `NativeBlobStore` is `dart:io`-backed: it cannot exist in a
/// browser, and the one public barrel has to keep compiling for JS, so
/// `lib/src/api/blob_store_platform.dart` swaps this declaration in on web.
///
/// This declaration is what lets shared application code spell "durable
/// attachments rooted here" exactly once instead of behind a conditional
/// import:
///
/// ```dart
/// blobStore: NativeBlobStore(rootDir)   // compiles on native AND web
/// ```
///
/// On web, `LocalPocket.open` DROPS a `NativeBlobStore` and leaves the
/// worker's own OPFS-backed store in place (see
/// `lib/src/platform/web/open_web.dart`). Dropping it does not change what the
/// caller asked for — durable attachment bytes — because the worker's store is
/// durable; only the native filesystem ROOT is meaningless in a browser. That
/// is why this one is dropped while any other supplied store is rejected typed:
/// ignoring a `MemoryBlobStore`, say, would silently grant durability the
/// caller did not ask for.
///
/// It is `final` so nothing can extend the inert web declaration and then be
/// dropped by that rule by surprise.
final class NativeBlobStore extends BlobStore {
  /// Creates the web stand-in for a native store rooted at [rootDir].
  ///
  /// [rootDir] is kept for signature parity with the native store and is never
  /// touched: the web runtime has no filesystem, and the web open drops the
  /// object before anything could read it.
  NativeBlobStore(this.rootDir);

  /// The root directory the NATIVE store would use; unused on web.
  final String rootDir;

  /// Always `false`: this stand-in stores nothing itself.
  ///
  /// The web open drops it before the kernel sees it, so durability observed
  /// through `files.isBlobStorageDurable` comes from the worker's own store.
  @override
  Future<bool> get isDurable async => false;

  @override
  Future<String> put(
    Stream<List<int>> bytes, {
    String? expectedSha256,
    int? expectedSize,
    String? key,
  }) =>
      _webUnavailable();

  @override
  Future<Stream<List<int>>> open(String hash) => _webUnavailable();

  @override
  Future<void> delete(String hash) => _webUnavailable();

  @override
  Future<bool> exists(String hash) => _webUnavailable();

  @override
  Future<int?> size(String hash) => _webUnavailable();

  @override
  Future<int> cleanTmp({Duration olderThan = const Duration(hours: 24)}) =>
      _webUnavailable();

  @override
  Future<List<String>> listHashes() => _webUnavailable();

  /// Every member fails loudly instead of quietly pretending to store bytes:
  /// this declaration exists to be passed to `LocalPocketOptions.blobStore`
  /// (where it is dropped), never to be used as a store.
  Never _webUnavailable() {
    throw UnsupportedError(
        'NativeBlobStore is native-only: on web the worker stores attachment '
        'bytes in its own OPFS-backed store, and LocalPocket drops a '
        'NativeBlobStore passed to LocalPocketOptions. Host a custom store on '
        'the page with PageCallbacks.blobStore instead.');
  }
}
