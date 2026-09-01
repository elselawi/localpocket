/// Platform seam for [LocalPocket]: the same conditional export the main
/// barrel uses, so the typed layer references ONE name that resolves to the
/// core engine on the VM and to the worker-backed web facade under
/// `dart.library.js_interop`.
///
/// Importing the core `local_pocket.dart` directly would pin the typed layer
/// to the native engine (whose database factory throws on the web — the
/// facade must own the worker there). This file is the only place the typed
/// layer decides "which LocalPocket".
library;

export '../kernel/local_pocket.dart'
    if (dart.library.js_interop) '../web/facade.dart' show LocalPocket;
