import 'package:path/path.dart' as p;

import '../../adapters/pocketbase/backend.dart'
    show PocketBaseSyncBackendFactory;
import '../../api/local_pocket.dart';
import '../../api/options.dart';
import '../../runtime/runtime_client.dart';
import 'blob_store.dart' show NativeBlobStore;

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

/// The default blob-store root for a database at [dbPath]: a directory beside
/// the database file, named after it (`<database file name>.blobs`) — the same
/// sibling-of-the-database convention the destructive-migration backup uses.
///
/// Two databases never share bytes through this default: the root is derived
/// from the database FILE, so `clinic-a.db` and `clinic-b.db` in one directory
/// get `clinic-a.db.blobs/` and `clinic-b.db.blobs/`. A relative database path
/// keeps the root relative (a `app.db` database gets `app.db.blobs/` in the
/// working directory).
///
/// Returns `null` for an in-memory database (`:memory:`): there is no file for
/// a root to sit beside, and silently substituting a volatile store would make
/// attachment bytes disappear without the caller opting into that (the files
/// API refuses volatile stores unless `allowVolatileBlobs` is set). Callers who
/// want in-memory attachments pass `MemoryBlobStore` explicitly.
String? defaultNativeBlobRoot(String dbPath) {
  if (dbPath.isEmpty || dbPath == ':memory:') return null;
  final name = '${p.basename(dbPath)}.blobs';
  final dir = p.dirname(dbPath);
  return dir == '.' ? name : p.join(dir, name);
}

/// Opens the facade with the direct in-process runtime: the kernel runs in
/// this process, requests never serialize, and events deliver in-process.
/// Selected by the conditional export in `lib/src/api/open_platform.dart`;
/// the api layer never imports platform code directly.
///
/// The opener supplies the platform defaults the kernel needs to be usable
/// without importing anything from `src/`: the canonical PocketBase sync
/// backend, and the durable `NativeBlobStore` rooted beside the database file.
/// Both are built ONLY when the caller configured none, so an explicit
/// `blobStore`/`syncBackendFactory` always wins — and an app that supplies its
/// own blob store never pays for (or gets) the default root directory.
Future<LocalPocket> openPlatform(LocalPocketOptions options) =>
    LocalPocket.openWith(
      options,
      LocalRuntimeClient.new,
      defaultSyncBackendFactory: defaultNativeSyncBackendFactory,
      defaultBlobStoreFactory: () {
        final root = defaultNativeBlobRoot(options.path);
        return root == null ? null : NativeBlobStore(root);
      },
    );
