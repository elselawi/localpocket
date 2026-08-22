/// Sync layer exports: the engine, the backend
/// seam, the 3-way merge, and the status model.
///
/// The sync layer never imports `dart:io` or any HTTP client; it talks to
/// [SyncBackend] and to core's `LocalPocket`/`Tx` APIs.
library;

export 'src/sync/sync_backend.dart';
export 'src/sync/mapping.dart'
    show
        MapFailure,
        normalizeRemote,
        NormalizedRemoteRecord,
        normalizeSingleRemote,
        normalizeRemoteBatch,
        normalizeRemoteBatchAsync;
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
        MergePolicy,
        MergeEngine,
        computeDirtyFields,
        deepEquals,
        merge3Way,
        merge3WayAsync;
export 'src/sync/conflicts.dart'
    show Conflicts, ConflictRecord, remoteDeletedKey;
export 'src/sync/sync_config.dart' show SyncConfig;
export 'src/sync/status.dart' show SyncEngineState, SyncReport, SyncStatus;
export 'src/sync/sync_store.dart' show PullCursor, SweepState, SyncStore;
export 'src/sync/puller.dart' show PullReport, Puller;
export 'src/sync/sweeper.dart' show SweepReport, Sweeper;
export 'src/sync/pusher.dart' show PushReport, Pusher;
export 'src/files/file_sync_lane.dart' show FileSyncLane, FileSyncReport;
export 'src/files/blob_store.dart'
    show BlobStore, MemoryBlobStore, EncryptingBlobStore;
export 'src/files/native_blob_store_platform.dart' show NativeBlobStore;
export 'src/files/files_api.dart' show LocalPocketFiles, FileRef;
export 'src/sync/engine.dart' show SyncEngine;
