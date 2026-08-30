# Current-to-final file ownership map

Every current production file in `lib/` → destination file (Phase 10 tree,
§15.1) or deletion phase. Extends the plan's §15.3 table to file granularity.
"re-home" means move + port-narrowing without behavior rewrites (Rule 10).

## `lib/` barrels

| Current | Action |
|---|---|
| `lib/localpocket.dart` | REWRITE (Phase 9) — curated exports of `src/api` + `schema` |
| `lib/typed.dart`, `lib/sync.dart`, `lib/pocketbase.dart` | DELETE (Phase 9 step 9) |

## `lib/src/core/`

| Current | Action |
|---|---|
| `local_pocket.dart` | SPLIT: orchestration → `kernel/kernel.dart` + `kernel_context.dart`; `DurabilityClass` → `api/`; `TestHooks` → `kernel/` |
| `store.dart` | `kernel/mutation_service.dart` + storage repositories; raw `Collection` role deleted (Phase 9) |
| `transaction.dart` | `kernel/transaction_coordinator.dart` + `runtime/execution_context.dart` (savepoints/group-commit preserved) |
| `write_queue.dart` | `kernel/transaction_coordinator.dart` (or stays as `kernel/storage/write_queue.dart`) — move-only |
| `schema.dart` | `schema/` split (store_def/field_def/validator_spec/conflict_policy_spec/migration_spec) + `kernel/storage/` row models |
| `ddl_compiler.dart` | `kernel/storage/ddl_compiler.dart` — move-only |
| `migrator.dart` | `kernel/storage/migrator.dart` — move-only (backup/resume behavior preserved) |
| `database_adapter.dart` | `kernel/storage/database.dart` (ports) + `platform/native/sqlite.dart` (`DirectSqliteDatabase`) |
| `database_factory.dart` / `_native.dart` / `_web.dart` | `runtime/open_runtime.dart` conditional factory + platform entries |
| `query_plan.dart` | DELETE (Phase 6 step 9); private `kernel/query/compiled_query.dart` |
| `compiled_query_runner.dart` | `kernel/query/` runner behind `ReadService` (Phase 2 step 7) |
| `query/query_builder/**`, `query/search_builder/**` | REPLACE by `api/query.dart` + `api/search.dart`; compiler/runner corpus ports to IR tests (Phase 6) |
| `codec.dart` | `kernel/storage/row_codec.dart` |
| `canonical_json.dart` | `kernel/storage/canonical_json.dart` — move-only |
| `hashing.dart` | `kernel/storage/hashing.dart` |
| `ids.dart` | `kernel/storage/ids.dart` |
| `cipher.dart` | `kernel/storage/cipher.dart` (platform-safe construction via `platform/web/crypto.dart`) |
| `fts_normalizer.dart` | `kernel/query/search_compiler.dart` neighborhood — move-only |
| `system_tables.dart` | `kernel/storage/system_tables.dart` |
| `row_models.dart` | `kernel/storage/` (internal row models) |
| `sql_utils.dart` | `kernel/storage/sql_utils.dart` (`firstIntValue` helper — keep) |
| `errors.dart` | SPLIT: public hierarchy → `api/errors.dart`; storage-only → `kernel/storage/errors.dart` |
| `capabilities.dart` | `kernel/storage/capabilities.dart` (probe) + `api/capabilities.dart` (snapshot) |
| `perf_counters.dart` | `kernel/` diagnostics |
| `change_bus.dart` | `kernel/change_publisher.dart` (one `CommittedChange` envelope, one omitted-value sentinel) |
| `watch.dart` | `kernel/watcher_service.dart` (one digest policy, §10.5) |
| `web_compat.dart` | DELETE when the last consumer is re-homed (audit before Phase 10) |

## `lib/src/typed/`

| Current | Action |
|---|---|
| `store_def.dart`, `field_def.dart`, `cond.dart`, `write.dart` | `schema/` + `api/writes.dart` — keep descriptor type system, remove map-surface deps |
| `schema_helpers.dart` | `schema/schema_helpers.dart` |
| `registry.dart` | DELETE (Phase 3) — `kernel/store_registry.dart` + manifest handshake replace `verifyRegisteredSchema` |
| `limits.dart` | `api/query.dart` (`Limits`) |
| `typed_row.dart` | `api/row.dart` (`Row<S>`) |
| `typed_model.dart` | DELETE (§16 — no model base class); migrate any used helpers |
| `typed_pocket.dart`, `typed_pocket_platform.dart` | `api/local_pocket.dart` (fold lifecycle into one facade) |
| `typed_collection.dart` | `api/store.dart` (fold lowering; delete surface adapters) |
| `typed_query.dart`, `typed_search.dart` | `api/query.dart`, `api/search.dart` (immutable specs) |
| `query_surface.dart` | DELETE — lowering happens once in common code |
| `typed_sync.dart`, `typed_sync_host.dart`, `sync_engine_native.dart`, `sync_engine_platform.dart` | `api/sync.dart` (`PocketBaseSync`) — one host, `start()` owns realtime |

## `lib/src/sync/` — re-home, do not rewrite

| Current | Action |
|---|---|
| `engine.dart` | `kernel/sync/engine.dart` (kernel-owned; web worker hosts it) |
| `sync_backend.dart` | `kernel/sync/backend.dart` (port incl. `baseUpdated` OCC + file members) |
| `sync_config.dart` | `kernel/sync/config.dart` (public options live in `api/sync.dart`) |
| `status.dart` | `kernel/sync/status.dart` (public models re-exported by `api/sync.dart`, complete codec) |
| `sync_tables.dart` | `kernel/sync/repositories.dart` neighborhood (internal row models) |
| `sync_store.dart` | `kernel/sync/repositories.dart` (cursor/sweep state ports) |
| `outbox.dart` | `kernel/sync/outbox.dart` |
| `op_queue.dart` | `kernel/sync/op_queue.dart` |
| `mapping.dart` | `kernel/sync/mapping.dart` (internal) |
| `merge.dart` | `kernel/sync/merge.dart` — move-only; `CustomResolver` path rejected at compile-time of schema (Rule 4) |
| `conflicts.dart` | `kernel/conflict_service.dart` + `api/conflicts.dart` snapshots |
| `puller.dart` | `kernel/sync/puller.dart` (cursor max-tuple, quarantine, hidden-unhide behavior preserved) |
| `pusher.dart` | `kernel/sync/pusher.dart` (OCC/`baseUpdated`, MissingRemotePolicy, recreate loop guard preserved) |
| `sweeper.dart` | `kernel/sync/sweeper.dart` |
| `apply_lane.dart` | `kernel/sync/apply_lane.dart` — move-only |

## `lib/src/files/`

| Current | Action |
|---|---|
| `blob_store.dart` | `kernel/files/blob_store.dart` (port + memory impl) |
| `native_blob_store.dart` | `platform/native/blob_store.dart` (dart:io stays here) |
| `native_blob_store_platform.dart` / `_web.dart` | conditional export collapses into `platform/*/blob_store.dart` entries |
| `web_blob_store.dart` | `platform/web/worker/blob_store.dart` (OPFS / volatile fallback) |
| `web_blob_object_url.dart` | `platform/web/page/object_urls.dart` |
| `native_backup_file.dart` | `platform/native/backup_store.dart` |
| `files_api.dart` | `kernel/file_service.dart` + `api/files.dart` (`Files<S>`, `FileRef`) |
| `file_sync_lane.dart` | `kernel/files/file_sync.dart` |

## `lib/src/pocketbase/` — adapter isolation (§8.6)

| Current | Action |
|---|---|
| `backend.dart` | `adapters/pocketbase/backend.dart` (implements sync ports only) |
| `pb_client.dart` | `adapters/pocketbase/client.dart` (REST + batch ordering + `imgs` attachment mapping lives with the adapter) |
| `auth.dart` | `adapters/pocketbase/auth.dart` (`TokenProvider` re-exported by `api/sync.dart`) |
| `transport.dart` | `adapters/pocketbase/transport.dart` |
| `realtime`/SSE (`sse.dart`) | `adapters/pocketbase/realtime.dart` (SSE handshake/reconnect/gap hints) |
| `filter_builder.dart` | `adapters/pocketbase/filter_builder.dart` (space-separated timestamp literals; quote-escape rule) |

## `lib/src/web/` — the big collapse (Phase 7)

| Current | Action |
|---|---|
| `facade/**`, `facade.dart` (collections/query/search/tx mirrors) | DELETE per family cutover |
| `controller.dart` | DELETE — page holds only `platform/web/page/*` transport |
| `connector.dart` | `platform/web/page/worker_transport.dart` |
| `web_sender.dart` | DELETE (request bookkeeping moves to `runtime/remote_runtime.dart` + `platform/web/page/lifecycle.dart`) |
| `lifecycle.dart` (pending requests, upload sessions) | `platform/web/page/lifecycle.dart` (transport bookkeeping only; upload session limits live in worker `FileService`) |
| `assets.dart` | `platform/web/page/assets.dart` |
| `open_options.dart` | `api/options.dart` (`BootstrapOptions`) |
| `protocol.dart`, `wire_args.dart` | `contract/` (sealed request/result/event + codecs + stable tags) |
| `conversions.dart` | `contract/wire_values.dart` (binary/dates/JSON value codec) |
| `sync_status_codec.dart` | `contract/result_sync.dart` codec (complete report model) |
| `worker_main.dart` | `platform/web/worker/main.dart` |
| `worker_engine.dart` + 7 `worker_engine_*.dart` part files | `platform/web/worker/runtime.dart` (envelope → codec → `CommandHandler`); per-feature semantics deleted as families cut over |
| `compiled_watcher.dart`, `send_plan`/`page_from_compiled` machinery | DELETE at Phase 6/7 (page no longer compiles SQL, shapes pages, or mints cursors) |
| `cipher_bridge.dart` | `platform/web/crypto.dart` (worker-safe cipher construction) |
| `typed_sync_web.dart` | DELETE (superseded by common `PocketBaseSync` over `RemoteRuntimeClient`) |
| `conflicts_bridge.dart` | DELETE at conflicts family cutover |

## Deletion ledger (verify with the public API gate, §14.1)

Each deletion is done only after the replacing family passes direct + loopback
(+ browser where relevant) conformance, and each records the gate evidence in
this file (a ✔ + phase number).
