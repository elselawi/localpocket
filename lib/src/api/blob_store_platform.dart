/// Platform dispatch for the durable native blob store: the default target is
/// the `dart:io` implementation; the conditional export swaps in the web stub
/// that keeps the one public barrel compilable for JS.
///
/// `NativeBlobStore` is filesystem-backed, so the barrel cannot export it
/// directly without pulling `dart:io` into every web build. This seam is the
/// blob-store counterpart of `open_platform.dart`: the api layer is the only
/// layer that references platform implementations, and it does so through a
/// conditional export that resolves on both targets.
library;

export '../platform/native/blob_store.dart'
    if (dart.library.js_interop) '../platform/web/native_blob_store_stub.dart'
    show NativeBlobStore;
