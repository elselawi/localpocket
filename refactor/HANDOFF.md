# HANDOFF — web remote cutover over the runtime contract

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

**Your stage now: the web remote cutover** — point the browser page at the
same contract (replace the `WireOp`/`wire_args` registry family by family;
the old wire stays as an adapter until each family passes), then barrel
switch. The old raw/typed surfaces still work.

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

Next: CRUD/batch and the transaction family (which retires
`compiled_query`/`send_plan.dart`/`QueryPlan`), then
maintenance/capabilities → conflicts → files → sync → close/lifecycle, then
barrel switch.

The full destination plan (12 stages, gates, checklists) is in
`final_refactoring_plan.md`. Stages 0–4 and the stage-5 facade vertical
slice (native + loopback) are DONE. You are starting stage 6: the web
remote cutover. Stage-by-stage history lives in `refactor/*.md`.

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

## 2. Current state (verified 2026-08-30, after the query-family cutover)

- Branch `refactor/final-architecture`; working tree clean; HEAD is the
  gate-hardening commit on top of the query-family commits
  (`test(web): characterize every compiled-plan bridge field …` →
  `feat(contract): DistinctRequest carries a full query spec` →
  `feat(query): structured spec snapshot …` →
  `feat(web): route root query, search, aggregate, and watch paths …` →
  `feat(web): delete the compiled-plan watch op …` →
  `test(conformance): cursor corpus …` →
  `chore(tool): worker asset gate …`).
- `dart analyze lib test tool` → 0 issues (includes the active compile
  fixture `test/compile_fixtures/final_api_vm.dart`).
- `dart test` → `+2778 ~83` all passed (83 skips = live/gate/platform tags).
- `dart run tool/local_web_gate.dart` → PASS (7 checks, now including the
  byte-compare "shipped worker asset is current" gate).
- `dart run tool/api_snapshot.dart` → PASS (snapshot unchanged).
- `dart run tool/browser_web_gate.dart` → 17 pages × 3 browsers PASS
  (includes the destination-facade smoke `web_api_smoke`).
- NEW this pass: `lib/src/web/facade/query/web_contract_forwarder.dart`,
  `lib/src/web/facade/search/web_contract_forwarder.dart`,
  `tool/worker_asset_current_gate.dart`, `.gitattributes` (binary asset
  pins), the `QueryBuilder` structured snapshot, `DistinctRequest.spec`,
  the conformance cursor corpus, and the removed watch machinery
  (`compiled_watcher.dart`, `WireOp.watchQuery`).
- Known wall-clock flakes (pass in isolation; re-run before diagnosing):
  `test/pocketbase/sse_test.dart` fast-path,
  `test/pocketbase/backend_lifecycle_test.dart` authChanged,
  `test/pocketbase/auth_test.dart` Token.isExpired.

### What already exists (DO NOT rebuild)

| Piece | Where | Notes |
|---|---|---|
| Kernel database | `lib/src/core/local_pocket.dart` — `class KernelDatabase` | The concrete engine. Public name `LocalPocket` is a **transitional typedef** to it (plus a separate web facade class at `lib/src/web/facade.dart` — both compile today). |
| Kernel context | `lib/src/core/kernel_context.dart` (part) | `KernelContext`: db, tables, clock, capabilities, changeBus, outbox, opQueue, conflicts, files, typedRegistry, transactions, mutations, reads, commands, traceExecute/traceQuery. Constructed inside `KernelDatabase.open`, exposed as `db.kernel`. |
| Services | `lib/src/core/{mutation_service,read_service,transaction_coordinator}.dart` (parts) | `db.mutations` (put/upsert/putAll/upsertAll/patch/patchAll/archive/restore/purge — need a `Collection` bound to a tx when used in-session), `db.reads` (compiled-plan execution), `db._transactions` (write queue, durability pragma state, group commit, read transactions). |
| Command dispatcher | `lib/src/kernel/command_handler.dart` (part) | `KernelCommandHandler implements CommandHandler` — exhaustive switch over ALL 28 request variants. Constructed as `db.commands`. |
| Runtime contract | `lib/src/contract/` (one library, parts) | `Request`(28 sealed variants)/`Result`(17)/`Event`(2), `ContractCodec` (encode/decode + `requestSamples`/`resultSamples`/`eventSamples` + `requestResultTags` correlation map), error codec, wire value codec, `abstract interface class CommandHandler`. **Exports `../core/errors.dart`.** |
| Runtimes | `lib/src/runtime/runtime_client.dart` | `RuntimeClient` interface; `LocalRuntimeClient` (direct, with correlation check); `LoopbackRuntimeClient` (full wire encode→decode→handle→encode→decode). |
| Schema manifests | `lib/src/core/schema_manifest.dart` | `SchemaManifest.compile(schema)`, fingerprint over complete behavior JSON, `unsupportedFeatures` flags, persisted in `lp_meta` key `schema_manifest:<store>`, same-version change rejection, duplicate-store rejection, web rejection of unrepresentable callbacks. `StoreTable.manifest`. |
| Execution context | `lib/src/core/execution_context.dart` | `ExecutionContext.root()` / `.transaction(executor:, readOnly:)`. `Tx.context`. Query/search builders accept an executor — tx-built builders carry the tx executor (structural fix, pinned by `debugExecutor`). |

### Contract request inventory (already implemented end-to-end)

`open`, `capabilities`, `health`, `close`,
`get`, `rows`, `mutate`, `query`, `count`, `countDistinct`, `distinct`,
`ids`, `aggregate`, `explain`, `search`,
`txBegin`, `txCommit`, `txRollback`, `txSavepoint`, `txRollbackTo`,
`txRelease`, `watch`, `watchCancel`,
`analyze`, `walCheckpoint`, `vacuum`, `pruneOutbox`, `compact`.

Events: `committedChange` (store + ids, post-commit), `watchSnapshot`
(kernel-shaped rows for a live subscription).

NOT yet in the contract (later stages — do not invent them now unless the
facade work forces it): file upload/download sessions, conflicts, sync/auth/
realtime, `getAll` beyond `rows`, revision numbers on `CommittedChange`.

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
    in; `tool/web_worker_compile.dart` writes only `build/web/`. Run the web
    gate after ANY web-layer change.
13. The suite runs concurrently; tests that spawn `dart` processes must be
    `gate`-tagged and run with `-j 1` (see `dart_test.yaml`).

---

## 5. Verification commands

```
dart analyze lib test tool
dart test                                   # full hermetic suite (~2730 tests)
dart test test/api test/conformance test/runtime test/contract   # facade inner loop
dart run tool/local_web_gate.dart
dart run tool/api_snapshot.dart
dart test --tags real --run-skipped test/e2e/        # live PocketBase (optional)
```

---

## 6. Out of scope for the query-family cutover — the NEXT agent's order of work

The query/search/cursors family cutover is done. Work the remaining
architecture in this order:

1. **CRUD/batch cutover** — re-route the old web facade's `get`/`mutate_batch`
   paths onto `GetRequest`/`MutateRequest`, then delete the old handlers.
2. **Transaction family cutover** — `txBegin`/`txGet`/`txMutateBatch`/… onto
   the contract session commands. This retires the LAST compiled-plan
   callers: session-scoped reads, `send_plan.dart`,
   `page_from_compiled.dart`, `_parseCompiledPlan`/`_dispatchCompiledQuery`,
   `WireOp.compiledQuery`, and public `QueryPlan` construction all die here.
3. **Maintenance/capabilities family** → `AnalyzeRequest`/… and the worker
   capability handshake.
4. **Conflicts family**, then **files**, then **sync/auth/status/realtime**,
   then **close/lifecycle** — activating the remaining fixture vocabulary
   (sync attachment, `Store.events` record payloads, search snippets).
5. **Barrel switch** — export `lib/src/api/api.dart` from the package
   barrel, flip the compile fixture's import to the barrel, retire the
   `LocalPocket = KernelDatabase` typedef and the web facade's claim on the
   name, re-baseline coverage, then delete `refactor/` + the plan file.

Also still out of scope until their families land: `db.flush()`/
`db.backup()`, `getAll` beyond `rows`, revision numbers on
`CommittedChange`.
