/// LocalPocket — a local-first SQLite database with eventually-consistent
/// PocketBase sync.
///
/// One import gives you the whole package: the typed data-model layer
/// (schema declaration + strictly typed CRUD, queries, and search), the raw
/// map API underneath it, the sync engine, the PocketBase adapter, and the
/// files layer:
///
/// ```dart
/// import 'package:localpocket/localpocket.dart';
///
/// final db = await openTyped(path: 'app.db', stores: [Tasks.store]);
/// await db.store(Tasks.store).put([Tasks.title.set('Ship it')]);
/// ```
///
/// Narrower entry points exist if you want a single slice only —
/// `typed.dart`, `sync.dart`, `pocketbase.dart` — and everything they
/// export is already included here.
///
/// The same import compiles on mobile, desktop, and web: the conditional
/// exports below pick the right implementation per target.
library;

export 'src/core/canonical_json.dart' show canonicalize;
export 'src/core/codec.dart'
    show
        buildPayload,
        canonicalPayload,
        payloadHash,
        encodeDbRow,
        encodeDbRows,
        encodeDbRowsAsync,
        decodeDbRow,
        decodeDbRows,
        decodeDbRowsAsync;
export 'src/core/ids.dart'
    show generateRecordId, isValidRecordId, recordIdPattern;
export 'src/core/hashing.dart' show sha256Hex;
export 'src/core/cipher.dart'
    show
        FieldCipher,
        CryptoProvider,
        SingleKeyCryptoProvider,
        AesGcmFieldCipher,
        fieldAad;
export 'src/core/errors.dart';
export 'src/core/capabilities.dart' show SqliteCapabilities, PlatformProfile;
export 'src/core/perf_counters.dart';
export 'src/core/schema.dart'
    show
        CollectionSchema,
        Field,
        FieldKind,
        IndexSpec,
        IndexScope,
        FtsSpec,
        FtsNormalization,
        StoreMigration,
        ConflictPolicy,
        MissingRemotePolicy,
        DocumentMigration,
        applyDocumentMigrations;
export 'src/core/ddl_compiler.dart' show DdlCompiler, CompiledSchema;
export 'src/core/database_adapter.dart'
    show Database, DatabaseExecutor, ConflictAlgorithm, DirectSqliteDatabase;
export 'src/core/local_pocket.dart' show DurabilityClass, TestHooks;
export 'src/core/local_pocket.dart'
    if (dart.library.js_interop) 'src/web/facade.dart' show LocalPocket;
export 'src/core/transaction.dart' show Tx;
export 'src/core/store.dart' show Collection, Page, MutationAction;
export 'src/core/query/query_builder/query_builder.dart';
export 'src/core/query/query_builder/query_dsl.dart';
export 'src/core/query/query_builder/query_forwarder.dart';
export 'src/core/query/search_builder/search_builder.dart';
export 'src/core/query/search_builder/search_dsl.dart';
export 'src/core/query/search_builder/search_forwarder.dart';
export 'src/core/query_plan.dart' show QueryPlan;
export 'src/core/change_bus.dart'
    show
        ChangeSet,
        ChangeBus,
        RecordChangeEvent,
        ChangeOrigin,
        ChangeAction,
        RecordChangeEventStreamExtension;
export 'src/core/watch.dart';

// ---------------------------------------------------------------------------
// the rest of the package: typed layer, sync engine, PocketBase adapter
// (each domain's barrel is the single source of truth for its exports)
// ---------------------------------------------------------------------------
export 'typed.dart';
export 'sync.dart';
export 'pocketbase.dart';
