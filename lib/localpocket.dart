/// localpocket — a local-first SQLite database with eventually-consistent
/// PocketBase sync.
///
/// Core (`localpocket.dart`) must not import `dart:io` or any HTTP client.
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
export 'src/sync/sync_tables.dart'
    show
        SyncState,
        AccessState,
        OutboxKind,
        OpQueueKind,
        OutboxOp,
        SyncRowState,
        OpQueueRow;
export 'src/sync/outbox.dart'
    show Outbox, LocalWriteResult, BaseSnapshot, PushSettlement;
export 'src/sync/sync_backend.dart' show StreamFileUpload;
export 'src/sync/op_queue.dart' show OpQueue;
export 'src/sync/conflicts.dart' show Conflicts, ConflictRecord;
export 'src/files/blob_store.dart'
    show BlobStore, MemoryBlobStore, EncryptingBlobStore;
export 'src/files/native_blob_store_platform.dart' show NativeBlobStore;
export 'src/files/files_api.dart' show LocalPocketFiles, FileRef;
export 'src/sync/merge.dart'
    show
        ConflictResolver,
        RemoteWinsResolver,
        LocalWinsResolver,
        SetUnionWithDeletionWinsResolver,
        CounterResolver,
        AppendOnlyListResolver,
        AppendOnlyLinesResolver,
        CustomResolver,
        MergeContext,
        MergeResult,
        MergeOutcome,
        computeDirtyFields;
