/// Platform dispatch for [LocalPocket.open]. The default target is native;
/// the conditional export swaps in the worker-backed opener when compiling
/// for the web.
library;

export 'open_native.dart' if (dart.library.js_interop) 'open_web.dart';
