/// The web half of the `NativeBlobStore` conditional export.
///
/// The real `NativeBlobStore` is `dart:io`-backed: it cannot exist in a
/// browser, and the one public barrel has to keep compiling for JS, so
/// `lib/src/api/blob_store_platform.dart` swaps this declaration in on web.
///
/// It is deliberately NOT constructible. The web answer to "where do durable
/// attachment bytes live?" is the worker's own OPFS-backed store (the worker
/// builds it — a store object cannot cross the worker boundary), or the
/// caller's store hosted on the page through `PageCallbacks.blobStore`. Web
/// code that reaches for `NativeBlobStore` gets a compile error instead of a
/// store whose bytes it cannot reach.
abstract class NativeBlobStore {
  /// Never callable: `NativeBlobStore` is native-only, so the web declaration
  /// only exists to keep the conditional export resolvable (see the class
  /// docs). Constructing one on the web is a compile-time error.
  NativeBlobStore(String rootDir);
}
