/// INTERNAL TEST SURFACE — not part of the public API.
///
/// Re-exports the raw (pre-final) kernel/storage/query/sync/pocketbase/files
/// types for internal unit tests that pin kernel behavior directly
/// (`test/core`, `test/sync`, `test/files`, `test/pocketbase`, `test/fts`,
/// `test/security`, `test/e2e`, `test/web`, benchmarks, and the example).
/// The public barrel `package:localpocket/localpocket.dart` is the
/// destination API; nothing here is exported by it.
///
/// Applications must import the public barrel, never this file.
library;

// -- kernel / storage ---------------------------------------------------------
export '../core/canonical_json.dart';
export '../core/codec.dart';
export '../core/ids.dart';
export '../core/hashing.dart';
export '../core/cipher.dart';
export '../core/errors.dart';
export '../core/capabilities.dart';
export '../core/perf_counters.dart';
export '../core/schema.dart';
export '../core/ddl_compiler.dart';
export '../core/database_adapter.dart';
// ONE `LocalPocket` name: the raw kernel on the VM, the web facade under
// `dart.library.js_interop` — the same conditional the old barrel used, so
// web smoke pages (which open through the facade) and VM tests (which open
// the raw kernel) both keep working.
export '../core/local_pocket.dart'
    show DurabilityClass, TestHooks, KernelDatabase, PointReadCache;
export '../core/local_pocket.dart'
    if (dart.library.js_interop) '../web/facade.dart' show LocalPocket;
export '../core/transaction.dart';
export '../core/store.dart';
export '../core/query_plan.dart';
export '../core/change_bus.dart';
export '../core/watch.dart';
export '../core/query/query_builder/query_builder.dart';
export '../core/query/query_builder/query_dsl.dart';
export '../core/query/query_builder/query_forwarder.dart';
export '../core/query/search_builder/search_builder.dart';
export '../core/query/search_builder/search_dsl.dart';
export '../core/query/search_builder/search_forwarder.dart';

// -- typed (interim app surface) ---------------------------------------------
export '../typed/typed.dart';

// -- sync engine --------------------------------------------------------------
export '../kernel/sync/sync_backend.dart';
export '../kernel/sync/sync_tables.dart';
export '../kernel/sync/outbox.dart';
export '../kernel/sync/op_queue.dart';
export '../kernel/sync/mapping.dart';
export '../kernel/sync/merge.dart';
export '../kernel/sync/conflicts.dart';
export '../kernel/sync/sync_config.dart';
export '../kernel/sync/status.dart';
export '../kernel/sync/sync_store.dart';
export '../kernel/sync/puller.dart';
export '../kernel/sync/sweeper.dart';
export '../kernel/sync/pusher.dart';
export '../kernel/sync/engine.dart';

// -- files --------------------------------------------------------------------
export '../files/file_sync_lane.dart';
export '../files/blob_store.dart';
export '../files/native_blob_store_platform.dart';
export '../files/files_api.dart';

// -- PocketBase adapter --------------------------------------------------------
export '../pocketbase/backend.dart';
export '../pocketbase/auth.dart';
export '../pocketbase/filter_builder.dart';
export '../pocketbase/pb_client.dart';
export '../pocketbase/sse.dart';
export '../pocketbase/transport.dart';
