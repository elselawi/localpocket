# Public API inventory and dispositions

Every public symbol reachable from the four current entry points, with its
destination disposition. Committed at Phase 0; updated (never deleted) as
phases complete.

Dispositions:

- **KEEP** — the name and its meaning survive into the final API (possibly
  re-homed).
- **REPLACE** — superseded by a named destination type; deleted after the
  replacement's conformance is green.
- **INTERNALIZE** — stays, but stops being public application API (kernel /
  storage / platform internal).
- **DELETE** — no destination; behavior is rejected by policy (e.g. callbacks
  crossing the worker) or absorbed by a replacement.

## 1. `lib/localpocket.dart` (raw core + re-exports)

### `src/core/canonical_json.dart`
| Symbol | Disposition | Destination |
|---|---|---|
| `canonicalize` | INTERNALIZE | `kernel/storage/canonical_json.dart` |

### `src/core/codec.dart`
| Symbol | Disposition | Destination |
|---|---|---|
| `buildPayload`, `canonicalPayload`, `payloadHash` | INTERNALIZE | `kernel/mutation_service.dart` + `storage/row_codec.dart` |
| `encodeDbRow(s)`, `decodeDbRow(s)`, `encodeDbRowsAsync`, `decodeDbRowsAsync` | INTERNALIZE | `kernel/storage/row_codec.dart` |

### `src/core/ids.dart`
| Symbol | Disposition | Destination |
|---|---|---|
| `generateRecordId`, `isValidRecordId`, `recordIdPattern` | INTERNALIZE | `kernel/storage/ids.dart` (test-visible via src import) |

### `src/core/hashing.dart`
| Symbol | Disposition | Destination |
|---|---|---|
| `sha256Hex` | INTERNALIZE | `kernel/storage/hashing.dart` |

### `src/core/cipher.dart`
| Symbol | Disposition | Destination |
|---|---|---|
| `FieldCipher`, `CryptoProvider`, `SingleKeyCryptoProvider`, `AesGcmFieldCipher`, `fieldAad` | KEEP | `schema/` (config) + `kernel/storage/cipher.dart` (impl); worker-safe path via `platform/web/crypto.dart` |

### `src/core/errors.dart`
| Symbol | Disposition | Destination |
|---|---|---|
| `LocalPocketError` hierarchy (`ValidationException`, `UniqueConstraintException`, `NotNullConstraintException`, `CheckConstraintException`, `PrimaryKeyConstraintException`, `ForeignKeyConstraintException`, `StorageError`, `RecordNotFoundException`, `SchemaTooNewError`, `FtsUnavailableError`, `SchemaRegistrationError`, `StaleCursorError`, `MissingLimitError`, `ConflictBlockedError`, `DestructiveMigrationRefusedError`, `ReadOnlyTxError`, `UnsupportedSchemaFeatureError` when introduced) | KEEP | `api/errors.dart` — one public error hierarchy; codec maps wire errors onto exactly these |
| `FieldNotSelectedError` (new in final API) | KEEP (new) | `api/errors.dart` |

### `src/core/capabilities.dart`
| Symbol | Disposition | Destination |
|---|---|---|
| `SqliteCapabilities`, `PlatformProfile` | INTERNALIZE | `kernel/storage/capabilities.dart`; public truth becomes `CapabilitiesSnapshot` (`api/capabilities.dart`) |

### `src/core/perf_counters.dart`
| Symbol | Disposition | Destination |
|---|---|---|
| `PerfCounters` and friends | INTERNALIZE | `kernel/` diagnostics |

### `src/core/schema.dart`
| Symbol | Disposition | Destination |
|---|---|---|
| `CollectionSchema`, `Field`, `FieldKind` | REPLACE | `schema/store_def.dart` (`StoreDef<S>`) + `schema/field_def.dart` (`FieldDef<S,V>` family); two-registration problem disappears |
| `IndexSpec`, `IndexScope`, `FtsSpec`, `FtsNormalization` | KEEP | `schema/schema_helpers.dart` (descriptor-owned) |
| `StoreMigration` | REPLACE | `schema/migration_spec.dart` — closed serializable migration DSL (§9.4) |
| `ConflictPolicy`, `MissingRemotePolicy` | REPLACE | `schema/conflict_policy_spec.dart` — serializable built-in policy descriptors |
| `DocumentMigration`, `applyDocumentMigrations` | DELETE | Rule 4 violation: arbitrary `Map` transforms cannot cross the worker. Unsupported legacy use fails with `UnsupportedSchemaFeatureError` before open |
| Custom resolvers (`CustomResolver` and resolver classes, via sync barrel) | DELETE | Rule 4; built-in policies are manifest descriptors, custom decisions are explicit resolution commands |

### `src/core/ddl_compiler.dart`, `database_adapter.dart`, `query_plan.dart`
| Symbol | Disposition | Destination |
|---|---|---|
| `DdlCompiler`, `CompiledSchema` | INTERNALIZE | `kernel/storage/ddl_compiler.dart` |
| `Database`, `DatabaseExecutor`, `ConflictAlgorithm`, `DirectSqliteDatabase` | INTERNALIZE | `kernel/storage/database.dart` (narrow ports) + `platform/native/sqlite.dart` |
| `QueryPlan` | DELETE (public) | private `kernel/query/compiled_query.dart`; no page-side plan shipping (§16) |

### `src/core/local_pocket.dart`, `transaction.dart`, `store.dart`
| Symbol | Disposition | Destination |
|---|---|---|
| `LocalPocket` (native) | REPLACE | one concrete `api/local_pocket.dart` class (no conditional export of public semantics) |
| `LocalPocket` (web, `src/web/facade.dart`) | DELETE | replaced by the same concrete class over `RemoteRuntimeClient` |
| `DurabilityClass` | KEEP | `api/` |
| `TestHooks` | KEEP (internalized from barrel) | `kernel/` test surface; imported from `src/` by tests |
| `Tx` | REPLACE | `api/transaction.dart` (`Transaction`); savepoints/group-commit behavior preserved |
| `Collection` | REPLACE | `api/store.dart` (`Store<S>`) |
| `Page` | REPLACE | `api/page.dart` (`Page<S>` with complete facts: `hasNext`/`hasPrev`/cursors) |
| `MutationAction` | INTERNALIZE | `kernel/mutation_service.dart` |

### `src/core/query/**` builders and DSLs
| Symbol | Disposition | Destination |
|---|---|---|
| `QueryBuilder`, `query_dsl`, `query_forwarder`, `SearchBuilder`, `search_dsl`, `search_forwarder` | REPLACE | `api/query.dart` (`QuerySpec<S>`) + `api/search.dart` (`SearchSpec<S>`); immutable specs, no builders. Cursor corpus and compile-fail corpus port |
| `SearchResult` (from search_builder) | REPLACE | `api/search.dart` (`SearchHit<S>`) |

### `src/core/change_bus.dart`, `watch.dart`
| Symbol | Disposition | Destination |
|---|---|---|
| `ChangeSet`, `ChangeBus`, `ChangeOrigin`, `ChangeAction` | INTERNALIZE | `kernel/change_publisher.dart` (one `CommittedChange` envelope) |
| `RecordChangeEvent`, `RecordChangeEventStreamExtension` | REPLACE | `api/events.dart` typed record events derived from the one committed envelope; one omitted-value sentinel |
| `watch.dart` watch helpers (`watchQuery`, `watchOne` shapes) | REPLACE | `api/store.dart` `Store<S>.watch(QuerySpec)` / `.events` |

## 2. `lib/typed.dart` → `lib/src/typed/typed.dart`

| Symbol | Disposition | Destination |
|---|---|---|
| `StoreDef<S>`, `StoreDefs` | KEEP | `schema/store_def.dart` — becomes the only schema source (§6.2) |
| `FieldDef<S,V>` family + field operators (`.eq`, `.gte`, `.startsWith`, `.set`, …) | KEEP | `schema/field_def.dart` (descriptors/operators) + `api/writes.dart` (`Write<S>`) |
| `Cond`, `OrderTerm` | KEEP (renamed into) | `api/query.dart` (`QuerySpec` value types) |
| `Write`, `Writes` | KEEP | `api/writes.dart` |
| `Limits` (incl. `Limits.unbounded`) | KEEP | `api/query.dart` |
| `TypedRow<S>` | REPLACE | `api/row.dart` (`Row<S>`, immutable, defensive) |
| `TypedModel` helpers | DELETE | no mandatory model base class (§16) |
| `TypedPocket`, `TypedPocketPlatform`, `openTyped` | REPLACE | `api/local_pocket.dart` (`LocalPocket.open(LocalPocketOptions)`) |
| `TypedCollection` | REPLACE | `api/store.dart` (`Store<S>`) |
| `TypedQuerySurface` surface types (hidden exports today) | DELETE | duplication seams; lowering happens once in common code |
| `TypedSearchSurface` | DELETE | `api/search.dart` |
| `TypedSync`, `PocketBaseSyncHost`, `sync_engine_platform` | REPLACE | `api/sync.dart` (`PocketBaseSync`) — one host, `start()` owns realtime everywhere |
| `Registry` / store registration + `verifyRegisteredSchema` | DELETE | manifest-based open handshake replaces second registration (§4.17, §9) |
| `schema_helpers.dart` (`indexSpec`, `ftsSpec`) | KEEP | `schema/schema_helpers.dart` |

## 3. `lib/sync.dart`

| Symbol | Disposition | Destination |
|---|---|---|
| `SyncBackend` (+ capabilities) | KEEP as port | `kernel/sync/backend.dart` — adapter-facing contract, not storage-coupled |
| `SyncState`, `AccessState`, `OutboxKind`, `OpQueueKind`, `OutboxOp`, `SyncRowState`, `OpQueueRow` | INTERNALIZE | `kernel/sync/` tables (`sync/repositories.dart` ports) |
| `Outbox`, `LocalWriteResult`, `BaseSnapshot`, `PushSettlement`, `OpQueue` | INTERNALIZE | `kernel/sync/outbox.dart`, `op_queue.dart` |
| `MapFailure`, `normalizeRemote*`, `NormalizedRemoteRecord` | INTERNALIZE | `kernel/sync/` (mapping stays an internal concern of apply paths) |
| `MergeEngine`, `merge3Way`, `merge3WayAsync`, `computeDirtyFields`, `deepEquals`, `MergeContext`, `MergeResult`, `MergeOutcome` | INTERNALIZE | `kernel/sync/merge.dart` — behavior preserved verbatim (Rule 10) |
| `RemoteWinsResolver`, `LocalWinsResolver`, `SetUnionWithDeletionWinsResolver`, `CounterResolver`, `AppendOnlyListResolver`, `AppendOnlyLinesResolver` | REPLACE | `schema/conflict_policy_spec.dart` — serializable built-in policy descriptors (manifest data) |
| `CustomResolver`, `ConflictResolver` | DELETE | Rule 4 (callback crossing worker); replaced by explicit resolution commands |
| `MergePolicy` (with collectionResolver/fieldOverrides) | REPLACE | `ConflictPolicySpec` (field overrides stay as serializable descriptors) |
| `Conflicts`, `ConflictRecord`, `remoteDeletedKey` | REPLACE | `api/conflicts.dart` (`StoreConflicts<S>`, typed conflict snapshots); tombstone key internal |
| `SyncConfig` | REPLACE | `api/sync.dart` (`PocketBaseSyncOptions`) |
| `SyncEngineState`, `SyncReport`, `SyncStatus` | KEEP | `api/sync.dart` — complete model incl. `blocked`, `discarded`, quarantine counts, timestamps (§4.9) |
| `PullCursor`, `SweepState`, `SyncStore` | INTERNALIZE | `kernel/sync/sync_store.dart` |
| `Puller`, `PullReport`, `Sweeper`, `SweepReport`, `Pusher`, `PushReport` | INTERNALIZE (classes) / KEEP (reports) | `kernel/sync/` + `api/sync.dart` |
| `FileSyncLane`, `FileSyncReport` | INTERNALIZE | `kernel/files/file_sync.dart` |
| `BlobStore`, `MemoryBlobStore`, `EncryptingBlobStore` | INTERNALIZE | `kernel/files/blob_store.dart` port + `platform/*/blob_store.dart` |
| `NativeBlobStore` | INTERNALIZE | `platform/native/blob_store.dart` |
| `LocalPocketFiles` | REPLACE | `api/files.dart` (`Files<S>`) |
| `FileRef` | KEEP | `api/files.dart` — same immutable type on native and web (§4.7) |
| `SyncEngine` | REPLACE | `api/sync.dart` (`PocketBaseSync` facade); engine internals move to `kernel/sync/engine.dart` |

## 4. `lib/pocketbase.dart`

| Symbol | Disposition | Destination |
|---|---|---|
| `PocketBaseRawBackend` | INTERNALIZE | `adapters/pocketbase/backend.dart` implementing sync ports |
| `AuthManager`, `Token` | INTERNALIZE | `adapters/pocketbase/auth.dart` |
| `TokenProvider` | KEEP | `api/sync.dart` — page-side token bridge (§6.9); tokens never persisted |
| `pullFilter`, `pullPageFilter`, `quote`, `sweepFilter` | INTERNALIZE | `adapters/pocketbase/filter_builder.dart` (incl. the escape-only-quotes rule) |
| `PbClient`, `PbRealtime`, `PbRealtimeEvent` | INTERNALIZE | `adapters/pocketbase/client.dart`, `realtime.dart` |
| `HttpRequest`, `HttpResponse`, `HttpTransport`, `HttpTransportException`, `PackageHttpTransport`, `StreamedHttpResponse`, `HttpMultipartFile`, `HttpMultipartRequest` | INTERNALIZE | `adapters/pocketbase/transport.dart` (port stays injectable for tests) |

## 5. Public classes on the web page (`src/web/facade/**`)

| Symbol | Disposition |
|---|---|
| Web `LocalPocket`, web `Collection`/query/search/tx mirrors, `WebTx` | DELETE — the page holds transport only; the one common API sits over `RemoteRuntimeClient` (§11.2) |
| `send_plan.dart`, `page_from_compiled.dart`, `compiled_watcher.dart` machinery | DELETE after Phase 6 IR cutover |
| `WireOp`/`WireArgs` string registry | REPLACE by `contract/` sealed types (see `worker_op_inventory.md`) |
| `startRealtime()` web no-op | DELETE — `start()` owns realtime everywhere (§4.10) |
| guessed page-side capability snapshot | DELETE — worker open handshake is authoritative (§4.11) |

## 6. Application-surface pairing (the barrel switch, 2026-09-01)

Phase 9's pair-and-keep rule: every application-level test that exercised a
raw/typed surface with a destination-API equivalent keeps the STRONGER
assertion set; its intent is ported ONCE into a destination-API test. The
destination API is proven by `test/conformance/facade_conformance_test.dart`
(one body over direct + loopback + remote runtimes), the `test/api/` facade
tests, and the active VM compile fixture (`test/compile_fixtures/final_api_vm.dart`).
Storage/migration/codec/merge/PocketBase-quirk/blob unit tests STAY internal
(plan §13.1) and move onto `src/` imports; they are never weakened.

| Old application surface | Destination API | Ported-into (intent kept once) |
|---|---|---|
| `openTyped(path:, stores:)` / `TypedPocket` (native + web conditional pair) | `LocalPocket.open(LocalPocketOptions(path:, stores:))` | `facade_conformance_test.dart` open() per runtime; `test/api/facade_test.dart` |
| `db.store(StoreDef)` / `TypedCollection` CRUD + batch | `Store<S>` put/upsert/putAll/upsertAll/patch/patchAll/archive/restore/purge/get/getAll | conformance "CRUD and batch writes round-trip" + `test/api/facade_test.dart` |
| `TypedRow<S>` (immutable typed snapshot) | `Row<S>` (row(field) call syntax, `FieldNotSelectedError`, defensive `toJson`) | conformance "projection yields immutable rows and typed errors" + `test/api/query_test.dart` |
| `TypedQuery` / `TypedSearch` surface | `QuerySpec<S>` / `SearchSpec<S>` (immutable specs, kernel-owned pages) | conformance query/cursor/search tests + `test/api/query_test.dart` |
| Raw `Page` reconstruction / `QueryBuilder.fetch()` | `Page<S>` with `hasNext`/`hasPrev`/`next()`/`prev()` + `Cursor<S>` | conformance cursor-corpus tests (incl. stale + persist-across-reopen) |
| `db.transaction((tx)...)` / raw `Tx` | `Transaction` + context-bound `tx.store(S)` + savepoints | conformance "transactions and savepoints behave identically" + `test/api/transaction_test.dart` |
| `db.watch(...)` / `watchOne` / `RecordChangeEvent` streams | `Store<S>.watch(QuerySpec)` + `Store.changes` / `db.changes` typed events | conformance "ordered watches re-emit on pure reorder" + "committed-change events flow through the facade" |
| `attachPocketBaseSync` / typed sync host | `PocketBaseSync` + `start()` owns realtime (through `RemoteSyncSurface` on web; sync request family in the contract) | `test/conformance/file_family_conformance_test.dart` + `test/runtime/` contract tests; web smoke under `tool/web_smoke/` |
| Raw `Conflicts` / file forms | `StoreConflicts<S>` / `Files<S>` (contract families) | contract + runtime + `test/web/` suites |
| Old web facade class `LocalPocket` (`lib/src/web/facade.dart`) | the one common `api/local_pocket.dart` `LocalPocket` over `RemoteRuntimeClient` | `tool/web_smoke/api_smoke_main.dart` + browser matrix |
| `TestHooks` from the barrel | `TestHooks` imported from `src/` by tests only (not exported) | kernel tests |
| `lib/typed.dart`, `lib/sync.dart`, `lib/pocketbase.dart` | deleted; internal tests import `src/typed/`, `src/sync/`, `src/pocketbase/` directly | internal suites listed in §1–§4 |

## Completion tracking

Every row gains a ✔ + phase number when its disposition is implemented and
conformance-tested. Rows marked DELETE must also record the gate/test that
proves absence (§14.1 public API gate).

- ✔ §1 `src/core/errors.dart` KEEP → `api/errors.dart` (the facade error
  hierarchy rides the contract codec; `FieldNotSelectedError` added) — Phase 5–7.
- ✔ §1 `DurabilityClass` KEEP → `api/` (re-exported via `options.dart`) — Phase 5.
- ✔ §1 `Collection`/`Page`/`Tx`/`QueryBuilder`/`SearchBuilder`/`QueryPlan`
  REPLACE → `Store<S>`/`Page<S>`/`Transaction`/`QuerySpec<S>`/`SearchSpec<S>` —
  the destination facade + conformance suite — Phase 5–7. Barrel export dies
  Phase 9 (this stage).
- ✔ §1 `LocalPocket` (native + web conditional pair) REPLACE/DELETE → the one
  concrete `api/local_pocket.dart` class; the `LocalPocket = KernelDatabase`
  transitional typedef stays src-internal; the web facade's barrel claim
  retires — Phase 9 (this stage, gate: `tool/api_snapshot.dart`).
- ✔ §2 typed descriptors KEEP (`StoreDef`, `FieldDef`, `Write`, `Writes`,
  `Limits`, `Cond`, `OrderTerm`, `schema_helpers`) — re-exported by the final
  barrel — Phase 9 (this stage).
- ✔ §5 web facade classes DELETE — replaced by `RemoteRuntimeClient` over the
  worker; the facade FILE survives to Phase 10 but its export claim retires
  this stage.
