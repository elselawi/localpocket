import '../../adapters/pocketbase/backend.dart'
    show PocketBaseSyncBackendFactory;
import '../../api/local_pocket.dart';
import '../../api/options.dart';
import '../../runtime/runtime_client.dart';

/// The canonical sync backend on native: the PocketBase adapter.
///
/// The open path supplies it when the caller configured none, so
/// `db.attachPocketBaseSync(...).start()` works out of the box on native
/// exactly as it does on web — the adapter stays internal and no caller has
/// to import it (or `PbFieldNames`) from `src/`. A caller-supplied
/// [LocalPocketOptions.syncBackendFactory] still wins, so custom backends and
/// custom field names keep working.
const PocketBaseSyncBackendFactory defaultNativeSyncBackendFactory =
    PocketBaseSyncBackendFactory();

/// Opens the facade with the direct in-process runtime: the kernel runs in
/// this process, requests never serialize, and events deliver in-process.
/// Selected by the conditional export in `lib/src/api/open_platform.dart`;
/// the api layer never imports platform code directly.
Future<LocalPocket> openPlatform(LocalPocketOptions options) =>
    LocalPocket.openWith(
      options,
      LocalRuntimeClient.new,
      defaultSyncBackendFactory: defaultNativeSyncBackendFactory,
    );
