import 'package:flutter/foundation.dart';

/// Small platform abstraction so the app can treat web and native uniformly.
///
/// The core `localpocket` package handles the actual SQLite engine differences
/// (native FFI vs. web worker); this keeps the playground's demo-mode path
/// persistent on web (OPFS) while using `:memory:` on native with zero extra
/// dependencies.
class PlaygroundPlatform {
  PlaygroundPlatform._();

  static bool get isWeb => kIsWeb;

  /// The database identity used for the playground's local demo store.
  /// - On web this is a named database persisted in the browser (OPFS).
  /// - On native this is `:memory:` so the demo needs no file paths or
  ///   plugins and always starts clean.
  static String get demoDatabasePath => isWeb ? 'localpocket_demo' : ':memory:';

  /// True when sync can be driven through the in-process native engine
  /// (`SyncEngine`). On web the engine runs inside the worker, so the app
  /// goes through the facade's `startSync`/`syncStatus` surface instead.
  static bool get nativeSyncEngine => !isWeb;
}
