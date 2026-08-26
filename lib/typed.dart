/// Typed data-model layer for localpocket.
///
/// Declares each store's fields once as typed descriptors that are
/// simultaneously the schema declaration and the compile-time-typed
/// accessor, so wrong-type and wrong-store usage become compile errors.
///
/// This entrypoint is additive: the raw map API (`localpocket.dart`) is
/// unchanged, and both layers can access the same stores.
///
/// The typed layer never imports `dart:io` or any HTTP client; it talks to
/// core's public `LocalPocket`/`Tx`/`Collection` APIs only.
library;

export 'src/typed/typed.dart';
