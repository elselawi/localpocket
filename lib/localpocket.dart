/// LocalPocket — a local-first SQLite database with PocketBase sync.
///
/// One import gives you the whole destination API: open a [LocalPocket],
/// declare each store once as a [StoreDef], and work with typed [Store]s,
/// immutable [Row] snapshots, declarative [QuerySpec]/[SearchSpec]s,
/// interactive [Transaction]s, committed-change events, store-scoped
/// [Files]/[StoreConflicts], and the [PocketBaseSync] attachment. The same
/// import compiles on mobile, desktop, and web — the facade runs over the
/// direct runtime on native targets and the worker contract runtime on web.
///
/// ```dart
/// import 'package:localpocket/localpocket.dart';
///
/// final db = await LocalPocket.open(
///   LocalPocketOptions(path: 'app.db', stores: [Tasks.store]),
/// );
/// final tasks = db.store(Tasks.store);
/// await tasks.put([Tasks.title.set('Ship it')]);
/// ```
library;

// The destination public API: the facade barrel plus the schema declaration
// layer (typed descriptors ARE the destination schema source).
export 'src/api/api.dart';
export 'src/schema/cond.dart';
export 'src/schema/field_def.dart';
export 'src/api/limits.dart';
export 'src/schema/schema_helpers.dart';
export 'src/schema/store_def.dart';
export 'src/api/writes.dart';

// The sync attachment surfaces the engine's status/report models through the
// same import (`PocketBaseSync.status` emits SyncStatus, `syncNow` returns a
// SyncReport), so the public sync surface is usable from the one barrel. The
// names are type aliases of the one codec-backed class per concept
// (`SyncStatusData` / `SyncReportData` in the contract layer).
export 'src/kernel/sync/status.dart'
    show SyncEngineState, SyncReport, SyncStatus;

// The blob-store types the facade's file configuration names
// (`LocalPocketOptions.blobStore`): the interface plus the in-memory store
// that backs native demos and tests. Real applications inject their own
// platform store here.
export 'src/kernel/files/blob_store.dart' show BlobStore, MemoryBlobStore;

// The Database adapter type `LocalPocketOptions.nativeDatabaseFactory`
// builds: apps supplying a whole-file-encrypted engine (SQLCipher-style)
// implement it by wrapping their cipher-enabled `package:sqlite3`
// connection. The kernel internals behind the adapter stay internal.
export 'src/kernel/database_adapter.dart' show Database, DirectSqliteDatabase;

// The schema helper types store declarations name. The raw schema types
// (CollectionSchema, Field, ...) are kernel-internal and not exported.
export 'src/kernel/schema.dart'
    show
        ConflictPolicy,
        FtsSpec,
        FtsNormalization,
        IndexScope,
        IndexSpec,
        MissingRemotePolicy,
        StoreMigration;

// The conflict-resolution vocabulary store declarations name
// (`StoreDef.conflictPolicy`): the merge context/result a resolver sees,
// the resolver interface, the five built-in resolvers, and the custom
// wrapper. The kernel's `MergePolicy` mirror and the engine internals stay
// internal. Closure-free built-in resolvers run in the web worker as-is;
// anything executable must be registered per store in `pageCallbacks` (see
// UnsupportedSchemaFeatureError, which still fails a worker runtime when no
// callback channel serves the store's executable features).
export 'src/kernel/sync/merge.dart'
    show
        AppendOnlyLinesResolver,
        AppendOnlyListResolver,
        ConflictResolver,
        CounterResolver,
        CustomResolver,
        LocalWinsResolver,
        MergeContext,
        MergeResult,
        RemoteWinsResolver,
        SetUnionWithDeletionWinsResolver;

// The page-callback registry: on the worker runtime, executable schema
// features (custom resolvers, validators, document migrations, backfill
// transforms) resolve to these per-store declarations.
export 'src/kernel/page_callbacks.dart' show StorePageCallbacks;

// The typed error hierarchy: the public API throws these (Row.get throws
// FieldNotSelectedError, stale cursors throw StaleCursorError, unsupported
// schema features throw UnsupportedSchemaFeatureError), so applications must
// be able to name and catch them from the one import.
export 'src/kernel/errors.dart';

// The committed-change vocabulary: origins and actions ride the public
// change/event notifications.
export 'src/kernel/change_bus.dart' show ChangeAction, ChangeOrigin;
