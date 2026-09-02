/// Platform dispatch for [LocalPocket.open]: the default target is native;
/// the conditional export swaps in the worker-backed opener on web.
///
/// The single place the api layer references platform open implementations.
/// Every other file under `lib/src/api/` must stay free of
/// `dart:js_interop`, `package:web`, and `platform/web` imports (enforced
/// by `test/core/layering_test.dart` and `tool/offline_lint.dart`).
library;

export '../platform/native/open_native.dart'
    if (dart.library.js_interop) '../platform/web/open_web.dart';
