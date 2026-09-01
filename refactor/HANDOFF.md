# HANDOFF — Phase 8 + Phase 9 COMPLETE; next: Phase 10 (file-tree moves)

Read this file top to bottom before touching anything. It is written so an
agent with no prior session memory can continue the work safely.

---

## 0. Mission

The package `localpocket` (local-first SQLite with PocketBase sync) is being
restructured toward a single destination architecture:

> One public API. One semantic kernel. Two runtimes (native direct, browser
> worker remote). One sealed typed command contract.

The destination **public** API is specified by two fixtures — they are the
executable definition of the target:

- `test/compile_fixtures/final_api_vm.dart` — VM target, **ACTIVE** (the
  analyzer is its gate; it imports `lib/src/api/api.dart` until the barrel
  switch, then flips to `package:localpocket/localpocket.dart` unchanged in
  body);
- `refactor/fixtures/final_api_web.dart` — web/worker target, still pending;
  it activates when the web remote cutover lands.

Your stage: ~~make the public facade (`LocalPocket`, `Store<S>`, `Row<S>`,
`Page<S>`, `Transaction`, events, watches, sync attachment) exist and run
**over the runtime contract** (`RuntimeClient`)~~ — **DONE (2026-08-30)**:
the facade exists in `lib/src/api/`, runs over both runtimes, and is proven
by `test/conformance/facade_conformance_test.dart`. See the facade section
at the end of `refactor/contract-runtime.md` for everything that landed.

**Your stage now: Phase 10 — move files and delete the old architecture.**

Phase 8 (destination surfaces for files/conflicts/sync) and Phase 9 (the
barrel switch) are COMPLETE (2026-09-01). The wire registry is ONLY `open` +
`contract_request`/`contract_event` (Phase 7, 2026-08-31), the destination
facade in `lib/src/api/` exposes every family over the contract, and
`lib/localpocket.dart` is now the ONE supported application barrel (see the
ledger's "Phase 9 — barrel switch" section). What remains is Phase 10:
file-tree moves and deleting the old architecture per `final_refactoring_plan.md`.

Phase 7 history (kept for reference): the family cutovers above are the
record of the wire → contract collapse.

Cutover slices DONE (2026-08-30):

1. The worker answers `contract_request` envelopes through the kernel's own
   command handler, emits `contract_event` envelopes for committed facts,
   and `RemoteRuntimeClient` (`lib/src/runtime/remote_runtime_client.dart`)
   carries the same envelopes over the page transport. The conformance suite
   runs every facade body over a third `remote` runtime through the worker
   engine.
2. `LocalPocket.open` dispatches through a conditional platform opener
   (`lib/src/api/open_platform.dart`): native keeps the direct runtime; web
   boots the kernel in the worker and binds the page to a
   `RemoteRuntimeClient` — the destination-API web vocabulary is executable
   and proven by a browser smoke page in the matrix
   (`tool/web_smoke/api_smoke_main.dart`).
3. **Query/search/cursors family cutover**: the root web facade's query,
   search, aggregate, distinct, and watch paths run over the typed contract
   (a shared `RemoteRuntimeClient` on `WebFacadeHost`), the page no longer
   compiles SQL or mints cursors, and `WireOp.watchQuery` +
   `CompiledWatcher` are deleted. `WireOp.compiledQuery` remains ONLY for
   transaction-scoped reads — see the "Query family cutover" ledger section
   for the full account, the audit, the cursor corpus, and the asset-gate
   hardening.
4. **CRUD/batch family cutover**: `WebCollection`'s reads and mutations ride
   `GetRequest`/`MutateRequest` through the shared contract runtime; the
   `get`/`mutate_batch` wire ops and their worker handlers are deleted.
   Audit verdict: the old `get` op carried no projection facts. Explicit
   `DurabilityClass.full` writes ride a contract tx session (no
   `MutateRequest.durability` added). `WireCollectionMixin` is narrowed to
   the tx surface and dies with the tx family (recorded deviation). See the
   "CRUD/batch cutover" ledger section.
5. **Watches/committed-events family cutover**: `watchOne` rides
   `WatchOneRequest` + single-row `WatchSnapshot` events (empty items =
   absent); `CommittedChange` now carries per-record detail (origin, action,
   old/new payloads, changedFields) and the facade binds its record-event
   streams to the contract event stream. `WireOp.watchOne`,
   `WireOp.recordEvent`, `_handleWatchOne`, and the `record_event`
   broadcast are deleted; `worker_event`/int-id `watch_cancel` survive for
   `conflicts_watch` only. See the "Watches and committed events cutover"
   ledger section for the payload decision.

6. **Transaction family cutover**: `db.transaction` begins kernel-minted
   string sessions over the contract; `WebTx.session` (renamed from the
   int `sessionId`); `WebTxCollection`/builders mix the session-aware
   contract forwarders. Deleted: the eight `tx_*` wire ops +
   `worker_engine_tx.dart`, the worker's interactive-session machinery,
   `WireOp.compiledQuery` + its parse/dispatch/handler, `send_plan.dart`,
   `page_from_compiled.dart`, `web_query_forwarder.dart`,
   `web_search_forwarder.dart`, `web_collection_mixin.dart`, and the
   plan-bridge tests. Kernel rule restored: ONE interactive session at a
   time (a second begin fails typed — reads and writes share the write
   queue, so anything else would block forever). DEVIATION:
   `query_plan.dart` STAYS as the kernel-internal compiled artifact
   (ReadService + builders run the native read engine with it); what
   retired is plan shipping across the runtime boundary. The barrel
   export dies at the Phase 9 gate.

7. **Maintenance/capabilities family cutover**: the facade's
   `analyze`/`walCheckpoint`/`vacuum`/`pruneOutbox`/`compact`/
   `runMaintenance` send typed contract requests; `RunMaintenanceRequest`
   was added to the contract; the six maintenance ops and `health` are
   deleted from the wire. Deferred fields (`VacuumRequest.pages`,
   `PruneOutboxRequest.maxEntries`, `CompactRequest.nowMs`) were NOT added
   — no caller forces them; facade docs record the deferral. DEVIATIONS:
   `capabilities` keeps its rich live report (browser storage facts are not
   in the contract's `CapabilitiesResult` yet) and `close` keeps its full
   teardown (the worker still owns sync/conflicts/upload state) — both
   retire with the files/family-8 cutovers.

7. **Conflicts family cutover**: the six conflicts ops ride typed contract
   requests with immutable `ConflictData` snapshots; `ConflictsWatchRequest`
   + `ConflictsSnapshot` events replace the `worker_event` int-id channel,
   and `worker_event`/`watch_cancel`/`conflicts_*` are all deleted (the
   worker now emits ONLY `contract_event`). `workerStreams`/
   `workerEventDecoders` plumbing removed from the host, facade, and
   lifecycle helpers. `conflicts_bridge.dart` and
   `worker_engine_conflicts.dart` deleted.

Remaining: NOTHING in Phase 7 — all eight families are cut over (2026-08-31).
Phase 8 (2026-09-01) added the destination surfaces (files/conflicts/sync)
and Phase 9 (2026-09-01) switched the barrel: `lib/localpocket.dart` exports
only the destination facade + schema declaration layer, the aux barrels
(`typed.dart`/`sync.dart`/`pocketbase.dart`) are deleted, and internal tests
use `src/internal/raw_surface.dart`. The next stage is Phase 10: move files
into `api`/`kernel`/`platform` ownership and delete the old architecture.
The full destination plan (12 stages, gates, checklists) is in
`final_refactoring_plan.md`. Stages 0–9 are DONE. Stage-by-stage history
lives in `refactor/*.md`.

---

## 1. Hard rules (violating any of these is a design regression)

1. **No plan vocabulary.** Never write "phase", "stage", "step", "§N",
   "plan" references in file names, folders, or code comments. Everything
   must read as timeless architecture. (The planning files under `refactor/`
   and `final_refactoring_plan.md` are temporary; they will be deleted at the
   end and must not be referenced from code.)
2. **Behavior is moved, never rewritten.** The kernel below the contract is
   proven by ~2700 tests (durability/savepoints/group commit, keyset cursors,
   FTS normalization + Arabic parity rules, field cipher, outbox/sync-row
   atomicity, OCC + `baseUpdated`, three-way merge, MissingRemotePolicy,
   PocketBase quirks). If a test breaks because you changed behavior, you
   broke a Rule-10 invariant — fix your change, or (only for previously
   pinned DEFECTS) update the pin and document why.
3. **No code generation.** `build_runner`/`source_gen` dependencies break the
   native-assets test setup (`test 1.26.3` requires `analyzer >=7`). Do not
   add them. Use sealed types + exhaustive switches + small codecs.
4. **No SQL across the runtime boundary.** Commands carry typed payloads
   (`QuerySpecData`, `Mutation`, ids). The kernel compiles; the kernel owns
   page facts (`hasNext`/`hasPrev`/cursors).
5. **Events are committed facts.** Nothing is emitted before the causing
   transaction commits (the kernel change bus already guarantees this — do
   not bypass it).
6. **No generic argument maps on typed commands.** Records (`Map<String,
   Object?>`) are still the wire-safe data language of the interim surface —
   that is acceptable inside `Mutation` payloads — but a command itself must
   be a sealed variant with typed fields.
7. **Every stage ends green and committed** on branch
   `refactor/final-architecture`. Small commits.
8. **Tokens, key material, and SQL never leak** into logs/persisted data.
   Windows golden files are CRLF — read via `readGolden()` in
   `test/support/helpers.dart`.

---

## 2. Current state (verified 2026-09-01, Phase 10 move-only passes in progress)

Phase 10 has landed the move-only re-homes (all green, committed): `src/sync`→
`src/kernel/sync`, `src/pocketbase`→`src/adapters/pocketbase`, `src/core`→
`src/kernel` (flat), the schema split (`src/typed/{cond,field_def,
store_def,schema_helpers}`→`src/schema/`, `write`→`src/api/writes.dart`,
`limits`→`src/api/limits.dart`), and the files common re-home
(`blob_store`/`file_sync_lane`→`kernel/files/`, `files_api`→
`kernel/file_service.dart`). There is NO `lib/src/core/` or `lib/src/sync/`
any more; the barrel exports the same public names from the new homes.
Remaining Phase 10 work: the web collapse, the old typed app-surface
deletion, the `raw_surface.dart` retirement, the files platform split, the
benchmark/example migration, and the barrel re-check — see the ledger's
Phase 10 section and the ownership map ticks.

ALL EIGHT families of the Phase 7 cutover are DONE (2026-08-31), Phase 8
(2026-09-01) added the destination surfaces for files/conflicts/sync, and
Phase 9 (2026-09-01) switched the public barrel. The wire registry is ONLY
`open` + `contract_request`/`contract_event`; the worker emits ONLY
`contract_event` and is a small envelope loop whose only feature handler is
the `open` handshake. The kernel owns every feature surface — including the
sync engine (behind the `SyncBackendFactory` seam in `sync/sync_backend.dart`,
so R1/R3 hold), the bounded file upload sessions, and the download credit
windows. `lib/localpocket.dart` is now the ONE supported application barrel
(destination facade + schema declaration layer); the aux barrels are deleted.

- Branch `refactor/final-architecture`; see `git log` for the family commits.
- `dart analyze lib test tool` -> 0 issues.
- `dart test` -> `+2767 ~83` all passed (83 skips = live/gate/platform tags).
- `dart run tool/local_web_gate.dart` -> PASS (7 checks, incl. the
  byte-compare "shipped worker asset is current" gate).
- `dart run tool/api_snapshot.dart` -> PASS (snapshot regenerated at the
  barrel switch; `lib/localpocket.dart` is the only entrypoint).
- `dart run tool/browser_web_gate.dart` -> 17 pages x 3 browsers PASS.
- The destination facade (`lib/src/api/`) exposes Store/Row/QuerySpec/
  Transaction/events/watches/maintenance/files/conflicts/sync over the
  contract; `db.attachPocketBaseSync(PocketBaseSyncOptions(...))` is the sync
  attachment; `store.files` / `store.conflicts` are the record-facing surfaces.
- Internal unit tests, the benchmarks, and the example import
  `src/internal/raw_surface.dart` (internal, never exported by the barrel).
- Gotcha: `dart analyze` with several folder arguments can serve stale
  results right after large edits — verify compile state with `dart test`
  on the affected folders before trusting a clean analysis.
- Known wall-clock flakes (pass in isolation; re-run before diagnosing):
  `test/pocketbase/sse_test.dart` fast-path,
  `test/pocketbase/backend_lifecycle_test.dart` authChanged,
  `test/pocketbase/auth_test.dart` Token.isExpired.

### What already exists (DO NOT rebuild)

| Piece | Where | Notes |
|---|---|---|
| Kernel database | `lib/src/kernel/local_pocket.dart` — `class KernelDatabase` | The concrete engine. The destination `LocalPocket` (facade, `lib/src/api/`) owns the public name; the raw `KernelDatabase` is kernel-internal (the `LocalPocket = KernelDatabase` transitional typedef is no longer exported). |
| Kernel context | `lib/src/kernel/kernel_context.dart` (part) | `KernelContext`: db, tables, clock, capabilities, changeBus, outbox, opQueue, conflicts, files, typedRegistry, transactions, mutations, reads, commands, traceExecute/traceQuery. Constructed inside `KernelDatabase.open`, exposed as `db.kernel`. |
| Services | `lib/src/kernel/{mutation_service,read_service,transaction_coordinator}.dart` (parts) | `db.mutations` (put/upsert/putAll/upsertAll/patch/patchAll/archive/restore/purge — need a `Collection` bound to a tx when used in-session), `db.reads` (compiled-plan execution), `db._transactions` (write queue, durability pragma state, group commit, read transactions). |
| Command dispatcher | `lib/src/kernel/command_handler.dart` (part) | `KernelCommandHandler implements CommandHandler` — exhaustive switch over ALL 28 request variants. Constructed as `db.commands`. |
| Runtime contract | `lib/src/contract/` (one library, parts) | `Request`(28 sealed variants)/`Result`(17)/`Event`(2), `ContractCodec` (encode/decode + `requestSamples`/`resultSamples`/`eventSamples` + `requestResultTags` correlation map), error codec, wire value codec, `abstract interface class CommandHandler`. **Exports `../kernel/errors.dart`.** |
| Runtimes | `lib/src/runtime/runtime_client.dart` | `RuntimeClient` interface; `LocalRuntimeClient` (direct, with correlation check); `LoopbackRuntimeClient` (full wire encode→decode→handle→encode→decode); `RemoteRuntimeClient` (contract envelope over the page transport — `lib/src/runtime/remote_runtime_client.dart`). |
| Schema manifests | `lib/src/kernel/schema_manifest.dart` | `SchemaManifest.compile(schema)`, fingerprint over complete behavior JSON, `unsupportedFeatures` flags, persisted in `lp_meta` key `schema_manifest:<store>`, same-version change rejection, duplicate-store rejection, web rejection of unrepresentable callbacks. `StoreTable.manifest`. |
| Execution context | `lib/src/kernel/execution_context.dart` | `ExecutionContext.root()` / `.transaction(executor:, readOnly:)`. `Tx.context`. Query/search builders accept an executor — tx-built builders carry the tx executor (structural fix, pinned by `debugExecutor`). |
| Re-route seam | `WebFacadeHost.contractRuntime` | ONE shared `RemoteRuntimeClient` per facade (lazy in production, built over `send` in `FakeFacadeHost`). `FakeFacadeHost.contractReply`/`contractErrorReply`/`deliverContractEvent` are the test helpers; `WorkerHarness.customRequest` mirrors the JS boundary. |

### Contract request inventory (already implemented end-to-end)

`open`, `capabilities`, `health`, `close`,
`get`, `rows`, `mutate`, `query`, `count`, `countDistinct`, `distinct`,
`ids`, `aggregate`, `explain`, `search`,
`txBegin`, `txCommit`, `txRollback`, `txSavepoint`, `txRollbackTo`,
`txRelease`, `watch`, `watchCancel`,
`analyze`, `walCheckpoint`, `vacuum`, `pruneOutbox`, `compact`.

Events: `committedChange` (store + ids, post-commit), `watchSnapshot`
(kernel-shaped rows for a live subscription).

NOT yet in the contract — YOUR families add them in this stage:
- CRUD: audit whether `get` needs projection facts beyond what
  `GetRequest` carries today.
- Watches/events: `WatchOneRequest` + a single-row snapshot event, and the
  typed per-store record events derived from one `CommittedChange` (plan
  §6.8); `revision` numbers on `CommittedChange` are still deferred unless
  this family forces them.
- Conflicts: list/get/watch/resolve/accept-local/accept-remote variants with
  immutable typed snapshots.
- Files: bounded upload/download session variants (§11.4) + one immutable
  `FileRef` on both platforms.
- Sync: start/stop/now/status/pause/resume/updateAuth/setConnectivity +
  `AuthRequiredEvent`, with a COMPLETE `SyncStatus`/`SyncReport` codec
  (blocked/discarded/quarantine counters/timestamps).
- Maintenance: `RunMaintenanceRequest` (it is in the inventory — do it).

---

## 3. What the facade stage delivered (complete — read the ledger)

The full account (files, decisions, deviations, gotchas) is in the facade
section of `refactor/contract-runtime.md`. Quick orientation:

- `lib/src/api/api.dart` is the facade barrel (not exported from the
  package barrel yet). `LocalPocket.open` = direct runtime;
  `LocalPocket.openWith(options, factory)` is the runtime seam the
  conformance suite and (later) the worker runtime plug into.
- Contract extensions: serializable predicate tree (`QuerySpecData.predicate`,
  compiled kernel-side via `wherePredicate`), `DistinctRequest.limit`,
  `TransactionBeginRequest.durability`, `FieldNotSelectedError`.
- The original Tasks 1–8 checklist below is retained for reference; every
  item it describes is done except the pieces explicitly deferred (sync /
  files / conflicts vocabulary, `Store.events` record payloads, search
  snippets — none of which exist in the contract yet).

### Task 1 — options + facade shell (DONE)

`LocalPocketOptions` (path, `List<StoreDef<Object?>> stores`, encryption
config, `BootstrapOptions` (workerAssetPath, wasmAssetPath, requestTimeout),
maxDocumentBytes) and `LocalPocket`:

- one **concrete** class, private constructor, `static Future<LocalPocket>
  open(LocalPocketOptions options)`;
- internally: compile each `StoreDef` → `CollectionSchema` (via
  `StoreDef.collectionSchema`), open a `KernelDatabase` (reuse
  `KernelDatabase.open` — pass through fieldCipher/cryptoProvider/now/
  maxDocBytes), wrap `db.commands` in a `RuntimeClient`;
- constructor selection: a `openRuntime` step that today returns a
  `LocalRuntimeClient`; the loopback client is chosen by tests (accept a
  runtime-factory parameter on an internal constructor; the public `open`
  always uses direct);
- expose `capabilities` (from `CapabilitiesRequest`), `close()`, and the
  `changes`/record-event streams derived from `RuntimeClient.events`;
- name collision warning: the typedef `LocalPocket = KernelDatabase` exists in
  `lib/src/core/local_pocket.dart` and the WEB facade also declares a class
  named `LocalPocket`. Plan the resolution now: the new facade owns the
  public name; the typedef is renamed to an internal alias (e.g. keep
  `KernelDatabase` references inside lib) or removed by touching the ~40
  lib references. The web facade keeps its name until the remote cutover.
- Acceptance: opening with one `StoreDef`, `capabilities` matches the
  underlying engine, `close()` fails subsequent sends with a typed error.

### Task 2 — `Store<S>`

`db.store(Tasks.store)` → a `Store<S>` view over the runtime client:

- writes: `put/write` → `MutationPut`, `upsert`, `putAll`, `upsertAll`,
  `patch(id, [Write])`, `patchAll({id: [Write]})`, `archive`, `restore`,
  `purge`, `get(id)`, `getAll(ids)` (via `RowsRequest` — one row per id
  occurrence, dedup is the caller's job);
- every write accepts `Write<S>` values (typed writes from
  `lib/src/typed/write.dart` lowered to `Mutation` payloads through
  `FieldDef` codecs — see `TypedCollection`/`TypedStoreSurface` in
  `lib/src/typed/` for the existing lowering you must reuse or port);
- in-transaction usage returns context-bound views (Task 5).

### Task 3 — `Row<S>`

Immutable snapshot in `lib/src/api/row.dart`:

- `row(Tasks.title)` call syntax returns the typed value;
- projected-out fields throw the new `FieldNotSelectedError` (add to
  `lib/src/core/errors.dart` and the contract error codec);
- `id`, `archived` read-only; `extra` defensive JSON snapshot;
- never implements `Map`; a diagnostic `toJson()` returns a defensive copy;
- decode of corrupt underlying data surfaces the package's typed errors
  (mirror the existing typed reader — `lib/src/typed/typed_row.dart` and
  `test/typed/row_test.dart` are the oracle; port the corruption cases).

### Task 4 — `QuerySpec<S>` lowering

`QuerySpec<S>` (where/orderBy/select/limit/cursor/scope) lowered into
`contract.QuerySpecData`:

- the typed condition algebra lives in `lib/src/typed/cond.dart` and lowers
  to `PredicateNode` trees (`lib/src/core/query/query_builder/
  predicate_tree.dart`: sealed — `LeafPredicate`, `NotPredicate`,
  `AllPredicate` (AND), `AnyPredicate` (OR));
- **extend `contract/query_spec.dart`** with a serializable predicate tree
  mirroring those node kinds (leaf: field + operator enum + wire value;
  not/any/all children) — replace/augment the flat
  `QueryConditionData.where` list; `QueryConditionOp` already has the
  operator set (eq, neq, gt, gte, lt, lte, inValues, between, startsWith,
  endsWith, contains, isNull, isNotNull);
- kernel side (`command_handler.dart` `_query`): compile the tree into a
  `QueryBuilder` via `builder.wherePredicate(node)` for tree nodes (keep the
  flat path only if simpler — `wherePredicate` is the preferred route because
  the typed layer already compiles trees there);
- terminals: `query` (page + `next()`/`prev()` on `Page<S>` via cursor specs,
  `backward: true` for previous), `count`, `countDistinct`, `distinct`,
  `ids`, `sum/avg/min/max`, `explain`; search via `SearchSpec<S>`;
- **every page fetch needs a limit or `.all()`** — `QuerySpec` should make
  this explicit (compile-time is impossible pre-codegen; mirror the existing
  `MissingLimitError` semantics, do not silently default except where the
  destination API defines one).
- Acceptance: `QuerySpec` and `QueryBuilder` produce identical pages/cursors
  for the same logical query (add parity tests).

### Task 5 — `Transaction`

`db.transaction((tx) async {...}, durability:, readOnly:)` over contract
sessions:

- `tx.store(S)` returns a context-bound `Store<S>` (requests carry the
  session id — the dispatcher routes them to the session executor);
- `tx.savepoint()`, `tx.rollbackTo(name)`, `tx.release(name)` via the
  savepoint commands; rolled-back savepoints leak neither rows nor events
  (already pinned in `test/runtime/loopback_test.dart`);
- `db.read(...)` → `TransactionBeginRequest(readOnly: true)`;
- watches inside transactions are rejected with a typed error;
- completion semantics: the facade's `transaction()` future resolves only
  after `TransactionCommitRequest` succeeds (post-commit event ordering
  matches the kernel).

### Task 6 — conformance suite

`test/conformance/` (or extend `test/runtime/`): one
factory-parameterized suite running the SAME bodies against
`LocalRuntimeClient` and `LoopbackRuntimeClient`:

- CRUD + batch; projection + immutable rows; forward/backward cursors +
  stale-cursor rejection; transactions + savepoints; ordered-watch dedupe
  (ordered queries must re-emit on pure reorder); committed-change events;
  typed error survival; corrupt-row decoding; aggregates/distinct/ids/
  explain; search.
- Model the suite on `test/runtime/loopback_test.dart` (its helpers work).

### Task 7 — fixtures + gates

- Activate `refactor/fixtures/final_api_vm.dart` as a compile test: move it
  to `test/compile_fixtures/` (with an intentionally-failing-analysis
  strategy or `// dart compile`-style verification — the repo has no codegen;
  the analyzer itself is the gate) and fix whatever the facade is missing.
  `final_api_web.dart` activates when the web runtime cutover lands.
- Keep `dart analyze lib test tool` at zero; `dart test` fully green;
  `tool/local_web_gate.dart` PASS; `tool/api_snapshot.dart` PASS (update the
  snapshot ONLY if the barrel legitimately changed — it should not this
  stage; the new facade is not exported from the barrel yet).

### Task 8 — ledger + handoff

Append what you did (files, decisions, deviations, gotchas) to
`refactor/contract-runtime.md` or a sibling ledger, and refresh the handoff
prompt for the next agent (web remote cutover, then query-IR replacement of
the compiled-plan bridge, then family-by-family web collapse, then barrel
switch + planning-artifact deletion).

---

## 4. Gotchas learned the hard way (all verified)

1. `part of` URIs resolve **relative to the part file**:
   `lib/src/kernel/command_handler.dart` uses `part of
   '../core/local_pocket.dart';`.
2. `LocalPocketError` is **sealed** — any exhaustive switch over it must
   cover subtypes declared in other libraries (e.g. `TypedStoreMismatchError`
   from `lib/src/typed/`). Adding a subtype breaks switches in contract.
3. `UniqueConstraintException`/`NotNullConstraintException` constructors
   **require** `field`; the error codec carries it in `details`.
4. Wire errors use code `'localpocket'` with `details['type']` (see
   `stableWireType` in `lib/src/web/protocol.dart`) — the new contract error
   codec is separate; don't confuse the two.
5. `QueryBuilder.ids()/fetch()/explain()` require a limit or `.all()` —
   the kernel dispatcher must not silently guess limits.
6. `Collection.purge/put/…` **pipeline** methods require a bound `_tx`;
   the root path must call the **public** collection mutators (which open
   their own transaction). The dispatcher already splits on session presence.
7. Broadcast streams deliver asynchronously — poll with a bounded
   `waitUntil`, never fixed sleeps; `tearDown` needs a closure
   (`tearDown(() => db.close())` — a tear-off evaluates at registration and
   throws LateError for `late` setUp-assigned fields).
8. `Get-Content`/`Set-Content` in PowerShell 7 default to UTF-8, but always
   write with `[System.Text.UTF8Encoding]::new($false)` when scripting file
   rewrites; raw SQL string literals in tests need single quotes.
9. `dart fix --apply lib` is safe for const/expression-body lint churn.
10. temp DBs: `tempDbPath()` + `addTearDown(t.cleanup)` (cleans `-wal`/
    `-shm`); `:memory:` paths are distinct databases per open.
11. When a test relies on the OLD same-version schema-drift behavior, the
    fixture must delete the persisted manifest key
    (`schema_manifest:<store>` in `lp_meta`) to take the legacy adoption
    path — same-version drift is otherwise rejected by design.
12. Shipped web asset: `assets/localpocket_worker.js` + `.sha256` are checked
    in; `tool/web_worker_compile.dart` writes only `build/web/`. The local
    web gate now BYTE-COMPARES the fresh compile against the shipped asset
    (`tool/worker_asset_current_gate.dart`) — regenerate after ANY web-layer
    change. `.gitattributes` pins the assets binary; do not remove it
    (`core.autocrlf` corrupts the wasm/worker bytes on checkout).
13. The suite runs concurrently; tests that spawn `dart` processes must be
    `gate`-tagged and run with `-j 1` (see `dart_test.yaml`).
14. `(builder..all())` discards the returned copy — builders are immutable,
    so cascade `..all()` throws the new builder away and a later
    `.compilePlan()` throws `MissingLimitError`. Chain `.all()` instead.
    Record `==` does not deep-compare `List` fields — compare `.$1`/`.$2`
    separately in tuple assertions.
15. Contract-vs-web name collisions force import prefixes:
    `encodeWireValue`/`decodeWireValue` exist in BOTH `web/conversions.dart`
    and `contract/wire_values.dart`; `decodeError` in BOTH
    `web/protocol.dart` and contract `error_codec.dart`.
16. During coexistence the worker used to emit BOTH `record_event` (old)
    and `contract_event` (contract) for every committed fact. DONE: committed
    facts now flow ONLY as contract events; conflicts watches are the last
    `worker_event` producer.

---

## 5. Verification commands

```
dart analyze lib test tool
dart test                                   # full hermetic suite (+2778 ~83)
dart test test/api test/conformance test/runtime test/contract test/web
dart run tool/local_web_gate.dart           # 7 checks, incl. shipped-asset byte-compare
dart run tool/api_snapshot.dart
dart run tool/browser_web_gate.dart         # before closing the stage (17 pages × 3 browsers)
```

---

## 6. Phase 7 work plan — family cutovers and web collapse

Per-family procedure (plan §12 — repeat for EVERY family):

1. Define missing request/result/event variants in the contract (sealed,
   typed fields, stable tags). NO generic argument maps.
2. Add the exhaustive handler case in `command_handler.dart`.
3. Add codec round-trip + malformed-input tests in `test/contract/`.
4. Point the facade's family surface at the contract through
   `WebFacadeHost.contractRuntime` (mirror the query-family mixins
   `lib/src/web/facade/query/web_contract_forwarder.dart` and
   `lib/src/web/facade/search/web_contract_forwarder.dart`).
5. Run family conformance (direct + loopback + remote) and browser smoke;
   update `FakeFacadeHost`-driven pin tests in the same commit.
6. Delete the family's old wire op, worker handler, and facade mirror, and
   update the `test/typed/web_test.dart` case-160 vocabulary pin in the
   SAME commit.

Fixed order:

1. **CRUD/batch** — DONE (2026-08-31, see the ledger's "CRUD/batch cutover"
   section). Audit: the old `get` op carried NO projection/select facts, so
   `GetRequest` needed nothing. Facade batches map to `MutationPutAll`/
   `MutationUpsertAll`/`MutationPatchAll`; `DurabilityClass.full` rides a
   contract tx session. Deleted: `worker_engine_crud.dart`'s
   `_handleGet`/`_handleMutateBatch`/`_parseDurability`, `WireOp.get`,
   `WireOp.mutateBatch`. DEVIATION: `WireCollectionMixin` survives, narrowed
   to `WebTxCollection` (its int session ids come from the worker's tx
   handshake) — it is deleted with the tx family.
2. **Watches/committed events** — DONE (2026-08-31, see the ledger's
   "Watches and committed events cutover" section). `WatchOneRequest` added
   (single-row `WatchSnapshot` events; empty items = absent; kernel
   validates the record decodes before registering). `CommittedChange`
   carries per-record detail — origin/action/old/new/changedFields — and
   the kernel derives it from the detailed change-bus stream; the
   destination facade's `ChangeNotification` derives per record. Deleted:
   `WireOp.watchOne`, `WireOp.recordEvent`, `_handleWatchOne`, the
   `record_event` broadcast, `worker_engine_watch.dart`,
   `initializeWebWatch`, `watch_protocol_test.dart`,
   `watch_initialization_test.dart`. DEVIATION: `worker_event` + int-id
   `watch_cancel` survive for `conflicts_watch` only (deleted with the
   conflicts family).
3. **Transactions** — DONE (2026-08-31, see the ledger's "Transaction
   cutover" section). `db.transaction` begins kernel-minted string sessions
   over the contract; `WebTx.session` (renamed from int `sessionId`);
   `WebTxCollection`/builders mix the session-aware contract forwarders.
   Deleted: the eight `tx_*` wire ops + `worker_engine_tx.dart`, the
   worker's interactive-session machinery, `WireOp.compiledQuery` + its
   parse/dispatch/handler, `send_plan.dart`, `page_from_compiled.dart`,
   `web_query_forwarder.dart`, `web_search_forwarder.dart`,
   `web_collection_mixin.dart`, and the plan-bridge tests.
   DEVIATION: `query_plan.dart` STAYS as the kernel-internal compiled
   artifact (ReadService + builders run the native read engine with it);
   what retired is plan shipping across the runtime boundary. The barrel
   export dies at the Phase 9 gate.
4. **Maintenance/capabilities** — DONE (2026-08-31, see the ledger's
   "Maintenance/capabilities cutover" section). `RunMaintenanceRequest`
   added; the six maintenance ops + `health` deleted. Deferred fields not
   added (recorded). DEVIATIONS: `capabilities` keeps the rich live report
   until storage facts join the contract; `close` keeps full teardown until
   family 8 (the worker still owns sync/conflicts/upload state).
5. **Conflicts** — DONE (2026-08-31, see the ledger's "Conflicts cutover"
   section). `ConflictData` + `ConflictsListRequest`/`ConflictGetRequest`/
   `ResolveConflictRequest`/`AcceptLocalRequest`/`AcceptRemoteRequest`/
   `ConflictsWatchRequest` and the `ConflictsSnapshot` event added; the
   kernel dispatches to the same core `Conflicts` service. Deleted:
   `conflicts_bridge.dart`, `worker_engine_conflicts.dart`,
   `_emitWorkerEvent`, the `worker_event` envelope, the int-id
   `watch_cancel`, `workerStreams`/`workerEventDecoders` plumbing, and the
   `conflicts_protocol_test.dart`/`worker_closed_stream_test.dart` pins.
6. **Files** — DONE (2026-08-31, see the ledger's "Files cutover" section).
   Bounded upload sessions and download flow control are kernel-owned
   (`kernel/file_sessions.dart`); the ten `file_*` ops and `capabilities`
   (storage facts joined `CapabilitiesResult`) are deleted; the six host
   file RPCs are gone from `WebFacadeHost`/facade/`FakeFacadeHost`.
7. **Sync/auth/status/realtime** — DONE (2026-08-31, see the ledger's
   "Sync/auth/status cutover" section). The kernel owns the sync engine
   behind the `SyncBackendFactory` seam (R1/R3 hold); the nine sync/auth ops
   + the `sync_status`/`auth_required` wire events are deleted;
   `worker_engine_sync.dart`, `sync_status_codec.dart`, `typed_sync_web.dart`,
   and `WebSyncSurface` are gone; the typed seam's web branch is
   `typed/sync_engine_remote.dart` over `RemoteSyncSurface`.
8. **Close/lifecycle** — DONE (2026-08-31, see the ledger's
   "Close/lifecycle cutover" section). The contract `CloseRequest` is the ONE
   close behavior; the worker's registry is `open` + `contract_request`
   only; `terminateWorkerStreams` and the old close op are deleted.
   Gate met: the worker is a small envelope loop and the page holds
   transport/bootstrap code only.

Phase 7 is COMPLETE. The next stage is the barrel switch (plan Phase 9).

Expected friction (all learned the hard way):

- Re-routing trips the VM pins that drive proxy classes against
  `FakeFacadeHost`: `web_collection_crud_test.dart`, `web_tx_test.dart`,
  `web_conflicts_facade_test.dart`, `web_files_attach_test.dart`,
  `upload_session_test.dart`, `worker_event_dispatch_test.dart`,
  `worker_engine_test.dart`, `watch_protocol_test.dart`. Update them to the
  contract envelope in the same commit as the re-route.
- `WebSender` lives in `web_sender.dart`, NOT `protocol.dart`.
- `RecordingSink` in the harness is load-bearing (`byOp` assertions);
  injectable sinks must subclass it.
- Windows: write files with `[System.Text.UTF8Encoding]::new($false)` when
  scripting; golden files are CRLF via `readGolden()`.
- Record ids in tests must match `[a-z0-9]{15}` — use `rid(label, n)`.
- Every family ends with a small green commit; append files/decisions/
  deviations/gotchas to `refactor/contract-runtime.md`, tick the family in
  `refactor/worker_op_inventory.md`, and refresh this file's §2/§6 for the
  next agent.

Phase 8 + Phase 9 are DONE (2026-09-01). The next stage is Phase 10 (move
files + delete the old architecture, per `final_refactoring_plan.md` §12):
move typed code into `api`/`schema` ownership, semantic core into `kernel`,
browser code into `platform/web`, native code into `platform/native`, keep
the PocketBase adapter separate, and delete — where no longer referenced —
the raw public `Collection`/`Page`/`Tx`/query/search builders, typed map
surfaces and adapters, the conditional public `LocalPocket` implementations,
the web facade and semantic proxy directories, compiled-plan transport, the
string op registries, platform sync host duplicates, public raw file/conflict
forms, and the second schema-registration path. Move-only commits where
possible after behavior has settled. The internal test surface
(`src/internal/raw_surface.dart`) and the `test/typed`/`test/e2e` suites
retire together with the old architecture they pin.

Still out of scope: the deferred contract fields (`MutateRequest.durability`,
`VacuumRequest.pages`, `PruneOutboxRequest.maxEntries`, `CompactRequest.nowMs`),
`db.flush()`/`db.backup()`, and revision numbers on `CommittedChange`.
