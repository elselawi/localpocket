/// Platform seam for the typed sync host: one name, two thin adapters.
///
/// Consumers import this through `typed.dart` (and the main barrel) and
/// never see the conditional. The native branch wraps a real in-process
/// [SyncEngine]; the remote branch drives the worker-side engine through the
/// facade's shared contract runtime. The sync logic itself stays
/// single-sourced in [SyncEngine] either way.
library;

export 'sync_engine_native.dart'
    if (dart.library.js_interop) 'sync_engine_remote.dart'
    show PocketBaseSyncEngine, attachPocketBaseSync;
