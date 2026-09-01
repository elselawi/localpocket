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
export '../kernel/canonical_json.dart';
export '../kernel/codec.dart';
export '../kernel/ids.dart';
export '../kernel/hashing.dart';
export '../kernel/cipher.dart';
export '../kernel/errors.dart';
export '../kernel/capabilities.dart';
export '../kernel/perf_counters.dart';
export '../kernel/schema.dart';
export '../kernel/ddl_compiler.dart';
export '../kernel/database_adapter.dart';
// ONE `LocalPocket` name: the raw kernel on the VM, the web facade under
// `dart.library.js_interop` — the same conditional the old barrel used, so
// web smoke pages (which open through the facade) and VM tests (which open
// the raw kernel) both keep working.
export '../kernel/local_pocket.dart'
    show DurabilityClass, TestHooks, KernelDatabase, PointReadCache;
export '../kernel/local_pocket.dart'
    if (dart.library.js_interop) '../web/facade.dart' show LocalPocket;
export '../kernel/transaction.dart';
export '../kernel/store.dart';
export '../kernel/query_plan.dart';
export '../kernel/change_bus.dart';
export '../kernel/watch.dart';
export '../kernel/query/query_builder/query_builder.dart';
export '../kernel/query/query_builder/query_dsl.dart';
export '../kernel/query/query_builder/query_forwarder.dart';
export '../kernel/query/search_builder/search_builder.dart';
export '../kernel/query/search_builder/search_dsl.dart';
export '../kernel/query/search_builder/search_forwarder.dart';

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
export '../kernel/files/file_sync.dart';
export '../kernel/files/blob_store.dart';
export '../files/native_blob_store_platform.dart';
export '../kernel/file_service.dart';

// -- PocketBase adapter --------------------------------------------------------
export '../adapters/pocketbase/backend.dart';
export '../adapters/pocketbase/auth.dart';
export '../adapters/pocketbase/filter_builder.dart';
export '../adapters/pocketbase/pb_client.dart';
export '../adapters/pocketbase/sse.dart';
export '../adapters/pocketbase/transport.dart';
