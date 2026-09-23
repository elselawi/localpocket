/// Platform dispatch for [LocalPocket.claimSingleInstance]: the default target
/// is native (returns `true` unconditionally); the conditional export swaps in
/// the Web Locks API implementation on web.
library;

export '../platform/native/single_instance.dart'
    if (dart.library.js_interop) '../platform/web/single_instance.dart';
