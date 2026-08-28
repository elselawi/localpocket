/// The typed data-model slice: declare each store's fields once as typed
/// descriptors that are simultaneously the schema declaration and the
/// compile-time-typed accessor, so wrong-type and wrong-store usage become
/// compile errors.
///
/// Tip: `package:localpocket/localpocket.dart` already includes everything
/// exported here, plus the raw map API, sync, and the PocketBase adapter —
/// prefer that single import unless you want the typed slice only.
library;

export 'src/typed/typed.dart';
