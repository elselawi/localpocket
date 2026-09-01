# Runtime contract and loopback — ledger (2026-08-30)

The sealed runtime contract is now the single parity boundary between the
public API and the kernel. Everything here is committed and green
(full suite `+2689 ~83`, `dart analyze` clean, web gate + API snapshot PASS).

## The contract library (`lib/src/contract/`)

One library, `part` files, sealed hierarchies — exhaustiveness is a compile
error, not a convention:

- `request.dart` — sealed `Request<R extends Result>` and the operation
  inventory: lifecycle (`open`/`capabilities`/`health`/`close`), store reads
  (`get`/`rows`), writes (`mutate` over a sealed `Mutation`), reads
  (`query`/`count`/`countDistinct`/`distinct`/`ids`/`aggregate`/`explain`/
  `search`), interactive transactions (`txBegin`/`txCommit`/`txRollback`/
  `txSavepoint`/`txRollbackTo`/`txRelease`), watches (`watch`/`watchCancel`),
  maintenance (`analyze`/`walCheckpoint`/`vacuum`/`pruneOutbox`/`compact`).
- `result.dart` — sealed `Result` families, one per request; runtimes verify
  the correlation so a valid result for the wrong operation is rejected.
- `query_spec.dart` — fully serializable read specs (conditions, OR-groups,
  order, projection, scope, limit/cursor, direction) + `SearchSpecData` +
  `AggregateFn`. The kernel compiles specs; **no SQL crosses the boundary**.
- `mutation.dart` — sealed mutation variants; records remain the wire-safe
  data language until the typed write layer replaces them.
- `event.dart` — `CommittedChange` (post-commit only, one envelope) and
  `WatchSnapshot` (kernel-shaped rows).
- `codec.dart` — exhaustive encode/decode with strict payload validation
  (missing fields, wrong types, unknown tags → `WireException`), stable tags,
  and the `requestSamples`/`resultSamples`/`eventSamples` fixtures used by the
  contract tests.
- `error_codec.dart` — typed kernel errors keep their identity across the
  boundary (incl. field details on validation errors); unknown errors degrade
  to a typed wire error, never a raw crash.
- `wire_values.dart` — tagged value codec (datetime, bytes) with string-key
  normalization and deep decode.

## The kernel dispatcher (`lib/src/kernel/command_handler.dart`)

`KernelCommandHandler implements CommandHandler` — one exhaustive `switch`
over every request variant, delegating to the kernel services:

- root-context mutations go through the public collection mutators (which
  open their own transactions); session-scoped mutations run the mutation
  pipeline on the session's executor;
- interactive transactions use held-open sessions (release-completer pattern,
  mirroring the worker's approach) with a savepoint stack; rolled-back
  savepoints leak neither rows nor events;
- watches are kernel-owned: the spec is compiled by the same read path, and
  snapshots flow as events until cancelled;
- the open command validates schema manifests before registering (same
  fingerprint discipline as the worker handshake).

## The runtimes (`lib/src/runtime/runtime_client.dart`)

- `RuntimeClient` — the interface the public API will use (never the kernel
  directly): `send<R extends Result>(Request<R>)`, `events`, `close`.
- `LocalRuntimeClient` — direct in-process calls with result-family
  correlation.
- `LoopbackRuntimeClient` — **the VM conformance harness**: every command is
  encoded into its wire envelope, decoded back, executed as the decoded
  value, and the result returns through the codec with tag correlation. This
  tests the real remote contract without a browser.

## Tests

- `test/contract/wire_contract_test.dart` (30): tag uniqueness, per-variant
  round-trips, malformed payloads/unknown tags, wrong-result correlation,
  event round-trips, wire value codec, error codec identity.
- `test/runtime/loopback_test.dart` (9): identical canonical results for
  health/capabilities/CRUD/pages (forward+backward)/count/ids/aggregate/
  explain/search on BOTH runtimes; typed errors survive the loopback;
  interactive transactions with savepoint rollback leak nothing; committed
  changes and watch snapshots flow as events; watch cancel stops emissions.

## Next steps (handoff)

1. Cut the public facade over to `RuntimeClient` (one concrete `LocalPocket`,
   `Store<S>`, `Row<S>`, `Transaction`) — the vertical slice first, then the
   remaining vocabulary.
2. Point the web page at the same contract (replace the string-op registry
   family by family; the old wire stays as a temporary adapter).
3. Lower the read path to versioned query IR (replacing the compiled-plan
   bridge) — the spec model here is the seed.
4. Remaining command families for the typed contract: files (bounded
   upload/download sessions), conflicts, sync/auth/realtime, and the
   `getAll`-style bulk reads beyond `rows`.
5. Delete the planning artifacts (`refactor/`, `final_refactoring_plan.md`)
   once the destination API is in place; keep `refactor/` ledgers only as
   long as they are useful.

---

# Facade over the contract — ledger (2026-08-30)

The public facade now exists and runs the vertical slice through both
runtimes (direct + loopback), proven by a factory-parameterized conformance
suite. Full suite `+2733 ~83` green, `dart analyze lib test tool` clean,
web gate + API snapshot PASS.

## What landed

### Contract extensions (`lib/src/contract/`)
- `query_spec.dart`: serializable predicate tree — sealed
  `PredicateSpecData` with `LeafSpecData` (wraps `QueryConditionData`),
  `NotSpecData`, `AllSpecData`, `AnySpecData`; wired into
  `QuerySpecData.predicate` (authoritative when present; the flat
  `where`/`orGroups` lists remain for compatibility). Codec round-trips it.
- `request.dart`: `DistinctRequest.limit` (the facade's `distinct(limit:)`
  forced it), `TransactionDurability { normal, full }` +
  `TransactionBeginRequest.durability`.
- `error_codec.dart` + `core/errors.dart`: new `FieldNotSelectedError`
  (carries `field` in wire details) — the projection-miss error for the
  facade's `Row`.

### Kernel (`lib/src/kernel/command_handler.dart`, `core/local_pocket.dart`)
- `_query` compiles `spec.predicate` into the builder via
  `predicateNode(...)` → `builder.wherePredicate(node)`. Contract operators
  the tree compiler does not spell lower to negations: `neq` → `NOT (eq)`,
  `isNotNull` → `NOT (isNull)`. `neq(null)` is rejected (matches no rows).
- `_distinct` honors the request limit (builder default 1000 when absent).
- `_begin` maps `TransactionDurability` onto the kernel's `DurabilityClass`.

### Facade (`lib/src/api/`, new; common Dart only)
- `options.dart` — `LocalPocketOptions`, `EncryptionConfig.aesGcm256`
  (→ `AesGcmFieldCipher`; key never leaves the object), `BootstrapOptions`
  (worker/wasm assets + request timeout), re-exports `DurabilityClass`.
- `local_pocket.dart` — one concrete `LocalPocket` (private ctor);
  `open(options)` uses the direct runtime, `openWith(options, factory)` is
  the conformance seam; `capabilities` getter, `changes` stream, maintenance
  (`analyze`/`walCheckpoint`/`vacuum`/`pruneOutbox`/`compact`), `close()`
  (subsequent sends fail with `StateError`, idempotent), `transaction()`
  resolving only after commit succeeds, `read()` (readOnly session →
  kernel `ReadOnlyTxError` on writes).
- `store.dart` — `Store<S>`: put/upsert return the written `Row` (facade
  generates the record id when the writes do not supply one, so the row can
  be fetched; kernel `MutationResult.ids` only echoes provided ids); putAll/
  upsertAll/patch/patchAll/archive/restore/purge; get/getAll (one row per id
  occurrence, misses null); query/count/countDistinct/distinct/ids/explain/
  sum/avg/min/max; search (hits with lazy typed fetch); watch (limit
  required; rejected inside sessions with `ValidationException`; cancel
  sends `WatchCancelRequest`); per-store `changes`. Write lowering ports the
  typed layer's `_buildRecord` exactly (owner backstop, duplicate-id and
  reserved-extra-key checks).
- `query.dart` — `QuerySpec<S>`/`SearchSpec<S>`/`Cursor<S>`/`Page<S>`/
  `SearchHit<S>`; lowering to `QuerySpecData` (AND-list of `Cond` trees →
  one `AllSpecData`/single-node tree; `Limits.unbounded` → `all: true`;
  paging terminals require a limit → `MissingLimitError`; owner checks on
  every leaf/order/projection). `Page.next()/prev()` re-issue the same spec
  with the kernel-minted cursor (`backward: true` for prev).
- `row.dart` — immutable snapshot; deep defensive copies; `extra`/`toJson()`
  unmodifiable; projected-out reads → `FieldNotSelectedError`; required-miss
  and wrong-stored-type → `ValidationException` (port of the typed reader).
- `transaction.dart` — `Transaction.store(S)` (session-bound views),
  `savepoint()` (facade-generated names)/`rollbackTo`/`release`.
- Cross-file seams use public `.internal` constructors (private named
  parameters are library-private in Dart).

### Tests
- `test/api/` — facade shell acceptance, CRUD/rows/ownership, immutable
  rows + projection errors, corruption via out-of-band UPDATE, query parity
  against the raw builder (pages, cursors, facts), missing-limit and
  unbounded semantics, search, transactions/savepoints/read-only/watch-in-tx.
- `test/conformance/facade_conformance_test.dart` — the same bodies over
  direct and loopback runtimes (CRUD+batch, projection, forward/backward
  cursors + shape-mismatch stale rejection, transactions+savepoints,
  ordered-watch reorder re-emit, committed-change events, typed error
  survival, corrupt-row decoding, aggregates/distinct/ids/explain, search).
- `test/compile_fixtures/final_api_vm.dart` — the destination-API compile
  fixture activated (analyzer is the gate), trimmed to contract-backed
  vocabulary; imports `src/api/api.dart` until the barrel switch.

## Decisions and deviations
- The `typedef LocalPocket = KernelDatabase` stays for now (the barrel must
  not change this stage, and the api snapshot pins it); the api facade
  coexists with it. The typedef dies at the barrel switch, together with the
  web facade's claim on the name.
- The full VM fixture (sync attachment, files, conflicts, per-store record
  events with old/new records, change revisions, search snippets, sync
  `hit.fetch()`) cannot compile yet — that vocabulary is not in the
  contract. It activates with the web remote cutover. The activated fixture
  covers everything the contract carries.
- `db.flush()`/`db.backup()` are not in the contract; omitted.
- The typed layer still throws `ValidationException` for projected-out
  reads (pinned behavior); only the new facade `Row` throws
  `FieldNotSelectedError`. Unifying is a follow-up.

## Gotchas learned this pass
- Set the facade `_closed` flag only AFTER the close request resolves —
  the guard otherwise fails the close call itself.
- `QueryBuilder.keysetAfter(cursor)` fetches; for raw-side parity, restate
  the builder and call `keysetAfter` on it (there is no public cursor
  setter).
- Record ids must match `[a-z0-9]{15}` — use `rid(label, n)` in tests.
- Archive drops never-synced records unless the store sets
  `keepUnsyncedArchives` — test stores must set it to assert archive/restore.
- Strict tables block most out-of-band column corruption; corrupting a JSON
  column with a JSON *map* passes kernel decode and fails the typed list
  codec at the row boundary.
- `close_sinks` needs an ignore on the watch controller (the stream owner
  controls its lifetime); broadcast event streams deliver asynchronously, so
  watches attach their event listener immediately after the start request.

---

# Remote cutover — contract envelope in the worker (2026-08-30)

The first cutover slice is in: the worker speaks the typed contract alongside
the old string-op registry, and the conformance suite runs every facade body
over a third runtime (`remote`) that reaches the kernel through the worker
engine. Full suite `+2744 ~83` green, analyze clean, web gate + API snapshot
PASS. Commit `feat(web): typed contract envelope in the worker and a
RemoteRuntimeClient`.

## What landed

- `lib/src/web/protocol.dart` — two new registry entries:
  `contract_request` (page → worker, carries the `ContractCodec.encodeRequest`
  output) and `contract_event` (worker → page emission only: committed facts
  and watch snapshots, contract-event encoded). Both documented as the
  destination envelope coexisting with the string-op registry.
- `lib/src/web/worker_engine.dart` — `_handleContract` on the host: decodes
  the request with `ContractCodec.decodeRequest` and dispatches it to
  `pocket.commands.handle` — the same `KernelCommandHandler` the direct
  runtime calls, so there is no worker-side reinterpretation of payloads and
  no second error vocabulary. Application failures are returned inside the
  success reply as `{'error': encodeError(e)}` (contract codec) so the caller
  reconstructs typed kernel errors; envelope-level failures (malformed
  payload) throw and fall through to the transport error framing. A parallel
  subscription on `pocket.commands.events` emits `contract_event` envelopes to
  every connection; cancelled in `_handleClose`.
- `lib/src/runtime/remote_runtime_client.dart` (new) — `RemoteRuntimeClient
  implements RuntimeClient`: one contract envelope per send over the injectable
  transport, composed on top of `WebSender` (per-request timeout,
  worker-closed classification, response-version checking are reused, not
  reimplemented). `send` verifies result/request tag correlation via
  `ContractCodec.decodeResult`; `handleWorkerEvent` filters `contract_event`
  envelopes and decodes them, dropping malformed ones instead of killing the
  broadcast stream; `close()` marks the sender closed locally (the embedder
  tears down page resources itself) and ends the event stream.
- `test/web/support/worker_harness.dart` — `customRequest(envelope)` mirrors
  the JS boundary's exact path (parse → dispatch → reply → `WebResponse`
  encoding), plus `path` (file-backed engine) and `sink` (injectable
  `RecordingSink`) options for the conformance suite.
- `test/conformance/facade_conformance_test.dart` — third group
  `over remote runtime`: the SAME bodies (CRUD/batch, projection, cursors +
  stale rejection, transactions/savepoints, ordered watches, committed-change
  events, typed error survival, corrupt rows, aggregates, search) run through
  `RemoteRuntimeClient` → worker engine → kernel.
- `test/typed/web_test.dart` — the wire-vocabulary pin now includes the two
  `contract_*` ops, with a comment stating their nature (contract-codec
  payloads, never new string-op argument shapes).

## Decisions and deviations

- The freeze pin on the `WireOp` registry was updated rather than bypassed:
  the two envelope ops are the sanctioned mechanism of the cutover, not new
  string-op surface. No `wire_args.dart` shapes were added; the old handlers
  are untouched.
- `contract_event` is in the known-op set but is never a *request*: an
  incoming `contract_request` dispatches, an incoming `contract_event` fails
  dispatch with "Unhandled operation". This is intentional — the op exists so
  the emission envelope is versioned like every other.
- Double emission during coexistence: the worker now emits BOTH
  `record_event` (old codec) and `contract_event` (contract codec) for every
  committed fact. The old facade listens to the former, the new runtime to
  the latter. The old stream dies with its last family.
- Close semantics differ between the two envelopes by design: the old `close`
  op runs full worker teardown (`_handleClose`); a contract `CloseRequest`
  goes through the kernel command handler (kernel close only). Worker-level
  teardown consolidates when the lifecycle family cuts over.
- The conformance `remote` entry opens a throwaway local kernel via
  `openWith` (the only public construction seam) and closes it immediately;
  the real kernel lives in the worker harness. On the browser destination the
  conditional import makes the "local open" itself the worker open, so this
  seam exists only in VM tests.

## Gotchas learned this pass

- `conversions.dart` and `contract/wire_values.dart` both define
  `encodeWireValue`/`decodeWireValue`, and `protocol.dart` and
  `error_codec.dart` both define `decodeError` — any file that needs both
  worlds must prefix one import (the worker engine prefixes `contract`, the
  remote runtime prefixes `wire`).
- `WebSender` lives in `web_sender.dart`, not `protocol.dart`.
- The `RecordingSink` type is load-bearing in harness tests (`byOp`
  assertions), so the injectable-sink option is typed as a `RecordingSink`
  subclass rather than the interface.

---

# Web runtime for the destination facade (2026-08-30)

`LocalPocket.open` now dispatches through a conditional platform opener, and
on web the page binds to the worker over the typed contract. The
`final_api_web` fixture vocabulary is executable. Gates: analyze 0, suite
`+2744 ~83`, local web gate PASS (including the new "destination facade web
compile" check), API snapshot PASS, full browser matrix 17 pages x 3
browsers PASS.

## What landed

- `lib/src/api/open_platform.dart` — conditional export dispatch
  (`open_native.dart` default, `open_web.dart` under `dart.library.js_interop`).
- `lib/src/api/open_native.dart` — direct runtime; just
  `openWith(options, LocalRuntimeClient.new)`.
- `lib/src/api/open_web.dart` — the worker bootstrap: asset resolution
  (reuses `resolveAssetAsBlobUrl`/`loadAssetAsBlobUrl`), cipher envelope
  (reuses `buildFieldCipherEnvelope`; an unserializable cipher config fails
  typed at open), serialized open options (stores, maxDocBytes,
  destructiveBackup, backupDbName, fieldCipher) through
  `connectToRecommended`, then `LocalPocket.internal(RemoteRuntimeClient(...))`
  over `Database.customRequest`. Worker events flow through the
  `handleCustomRequest` tap into `runtime.handleWorkerEvent`; `database.closed`
  closes the runtime. No kernel opens in-process and no SQL is compiled on
  the page.
- `lib/src/api/local_pocket.dart` — `LocalPocket._` became
  `LocalPocket.internal(runtime)`, the cross-library seam for the platform
  openers; `open` delegates to `openPlatform`; `openWith` unchanged (kernel-
  backed, used by the conformance harness).
- `tool/web_smoke/api_smoke_main.dart` + `pages/web_api_smoke.html` — the
  destination-facade browser smoke: open via `LocalPocketOptions(bootstrap:
  ...)`, capabilities.isWeb, CRUD/batch/upsert, query with kernel-minted
  cursors + `page.next()`, count, FTS search, full-durability transaction
  with savepoint rollback, ordered watch with reorder re-emission,
  committed-change events, close + typed post-close failure.
- `tool/local_web_gate.dart` — new "destination facade web compile" check;
  `tool/browser_web_gate.dart` — the new page in the matrix (17 pages).
- `lib/src/web/controller.dart` — BUG FIX: one `WorkerEventSink` per client
  connection (see below); shipped worker asset regenerated + hash updated.

## Bug found by the browser smoke: N-times event delivery

The worker broadcasts events to every sink in its `_connections` set, but
the JS boundary created a fresh `_ConnectionSink` per `customRequest` call —
the set grew with every request and each event was delivered N times (N =
request count so far). Latent since the old stack: duplicate deliveries were
content-identical, so old consumers (which assert on content, not counts)
never noticed. The destination smoke asserted exact reorder behavior and
caught it: a duplicate of the pre-patch window satisfied the wait predicate
before the reordered emission arrived. A raw event-envelope probe page (run
against the worker in Chromium, then deleted after diagnosis) attributed the
duplication to the boundary: the kernel watcher emitted each snapshot exactly
once (VM probes with the same scenario, web profile and contract client
included, were correct), and the transport delivered each envelope N times.
Fix: `_connectionSinks.putIfAbsent(connection, ...)` in
`LocalPocketWorkerDatabase`.

## Decisions and deviations

- The worker boot handshake stays where it is: the kernel opens from the
  serialized open options at worker start (manifest checks run there), so no
  contract `OpenRequest` is sent. The contract variant remains for runtimes
  that register stores after open.
- `EngineCapabilities` stays contract-shaped (`isWeb` from the kernel's
  platform profile); the old facade's storage-capability reconciliation
  (`WebStorageCapabilities`, persistence probe) does not exist on the new
  facade yet — it belongs to the files family (`durableBlobs` semantics).
- Blob URL revocation and worker teardown on close are deferred to the
  close/lifecycle family; `db.close()` currently closes the kernel and marks
  the runtime closed, and the transport dies with the page.
- The browser diagnostic probe page was deleted after diagnosis; the
  finding lives here and in the commit message.

---

# Query family cutover over the contract (2026-08-30)

The query/search/cursors family is re-routed onto the typed contract: the
root web facade's query, search, aggregate, distinct, and watch paths now
issue `QueryRequest`/`CountRequest`/`CountDistinctRequest`/`DistinctRequest`/
`IdsRequest`/`AggregateRequest`/`ExplainRequest`/`SearchRequest`/
`WatchRequest` through a shared `RemoteRuntimeClient`; the page no longer
compiles SQL, shapes pages, or mints cursors. The compiled-plan watch op is
gone. Gates: analyze 0, suite `+2778 ~83`, local web gate 7/7 (new "shipped
worker asset is current" byte-compare), API snapshot PASS, browser matrix
17 pages × 3 browsers PASS.

## What landed

### Bridge characterization (before any deletion)
- `test/web/plan_bridge_test.dart` — per-operation round-trip parity: the
  same plan object executed through the worker's parse → dispatch → runner
  must equal the direct runner's result (count/countDistinct/distinct/ids/
  sum/avg/min/max/explain/search, session-scoped, projected, unbounded).
  Validation pins: missing optional fields execute; non-string shape /
  non-int limit / non-list projection are tolerated; args-not-a-list and
  malformed tagged args are rejected at the envelope.
- `test/web/send_compiled_plan_test.dart` — the exact payload key set, tagged
  wire args (datetime/bigint/null/list), null limit/projection/decodeColumns,
  and per-operation payload facts.

### Contract audit + extension
- Field-by-field `QuerySpecData` vs `QueryPlan` audit: every fact the kernel
  needs is already carried (projection via `select`, scope flags, `cursor` +
  `backward`, limit/all, search term + options, full predicate tree, order).
  `compilerVersion`/`schemaVersion`/`schemaFingerprint`/`decodeColumns`/
  `shape`/`pageLimit` are N/A or kernel-owned by design: the kernel is the
  only compiler, manifests are checked at open, cursor bags carry
  schema/shape (replayed-shape mismatch throws `StaleCursorError`), and the
  ordered-watch digest derives from `spec.order`.
- The ONE gap: `DistinctRequest` carried only a bare limit, but the old
  facade's `distinct(field)` honors builder filters/scope. It now carries a
  full `QuerySpecData spec` (codec round-trip + malformed-input tests in
  `test/contract/wire_contract_test.dart`; the kernel compiles the spec).

### Builder snapshot (temporary lowering bridge)
- `QueryBuilder` records a structured mirror of its DSL calls
  (`filterNodes`: leaves/negations/or-groups as `PredicateNode`s in call
  order; `orderNodes`, `selectFields`, `includeArchivedFlag`,
  `includeHiddenFlag`). `neq`/`isNotNull` capture as negations (the tree
  compiler has no such spellings). Pinned by
  `test/core/query/spec_snapshot_test.dart` (single-leaf byte-identity +
  execution parity for composite/interleaved cases).
- `SearchBuilder` gained `store`/`limitValue`/`allMode`/scope getters.

### The re-route
- `lib/src/web/facade/query/web_contract_forwarder.dart` — `lowerPredicateNode`
  (core tree → contract tree), `lowerBuilderToSpec`, `pageFromContractRows`,
  and the `WebContractQueryForwarder` mixin (fetch/keysetAfter/keysetBefore/
  count/countDistinct/distinct/ids/explain/sum/avg/min/max over the shared
  runtime). `keysetBefore` is now ONE round trip (the kernel walks the
  flipped order and probes itself).
- `lib/src/web/facade/search/web_contract_forwarder.dart` — search over
  `SearchRequest`; the blank-term early return (no send) is preserved.
- `WebQueryBuilder` uses the contract mixin and watches over `WatchRequest` +
  `WatchSnapshot` events (kernel-minted subscription ids; cancellation sends
  `WatchCancelRequest`; the registration tracker still guards async races;
  the unbounded-watch default of 50 rows rides in the spec). `WebSearchBuilder`
  uses the contract search mixin.
- `WebFacadeHost.contractRuntime` — one shared `RemoteRuntimeClient` per
  facade. The production facade builds it lazily over the same worker channel
  and feeds every worker event into it; `FakeFacadeHost` builds one over its
  own `send` plus `contractReply`/`contractErrorReply`/`deliverContractEvent`
  test helpers.
- Worker deletions: `WireOp.watchQuery` + `_handleWatchQuery` +
  `CompiledWatcher` + `compiled_watcher_test.dart` are gone; the wire
  vocabulary pin (case 160) updated in the same commit. Watch coverage moved
  to contract-driven tests in `worker_engine_test.dart` (initial snapshot,
  digest dedupe, ordered reorder re-emission, projection, typed
  unknown-field error, cancel).

### Cursor corpus (all three runtimes)
- `test/conformance/facade_conformance_test.dart` now walks nullable sorts
  (NULLs first ASC / last DESC), uniform descending + implicit id
  tie-break, mixed directions (paged walk == unbounded sequence), empty
  terminal pages after the table shrinks (an empty page has no facts),
  stale projection/shape rejection, and cursors persisted across
  close/reopen (file-backed) — on direct, loopback, and remote.

### Gate hardening
- `tool/worker_asset_current_gate.dart` (new, wired into
  `tool/local_web_gate.dart`): the freshly compiled
  `build/web/localpocket_worker.js` must match `assets/localpocket_worker.js`
  (CRLF-normalized byte comparison) or the gate fails — a stale shipped
  asset silently served old worker code before.
- `.gitattributes` (new): `assets/sqlite3.wasm binary` and
  `assets/localpocket_worker.js -text` — `core.autocrlf=true` was corrupting
  the checked-out wasm/worker bytes (the committed blobs were pristine; only
  checkout converted them). `web_asset_gate` hashes raw bytes, which is
  correct now that checkout is byte-exact.

## Decisions and deviations
- **`compiled_query` stays in the registry.** Its last callers are
  transaction-scoped reads (`WebTxQueryBuilder`/`WebTxSearchQueryBuilder`
  through `sendCompiledPlan` with `sessionId`); the transaction family cuts
  over later. `send_plan.dart`, `page_from_compiled.dart`,
  `_parseCompiledPlan`/`_dispatchCompiledQuery`/`_compiledOperations`, and
  public `QueryPlan` construction all stay for the same reason and die with
  the transaction family. The checklist items about deleting them are
  therefore partial: watchQuery is gone; compiledQuery waits for its last
  caller.
- `WatchRequest` needs no `ordered` flag: the kernel derives the
  order-sensitive digest from `spec.order` (the page-side flag existed only
  because the worker saw bare SQL).
- The facade's `keysetBefore` now costs one round trip (was two: window +
  probe). Behavior preserved; mechanics moved into the kernel.
- Old-wire and contract envelopes coexist: `record_event` (old) and
  `contract_event` (contract) both broadcast until the remaining families
  move.

## Gotchas learned this pass
- `(builder..all())` discards the returned copy — `all()` returns a NEW
  immutable builder, so a cascade drops it. Chain instead.
- Record equality is structural except for `List` fields: comparing
  `debugCompile()` tuples with `expect` fails on different list instances;
  compare `.$1`/`.$2` separately.
- `core.autocrlf=true` + no `.gitattributes` corrupts binary assets on
  checkout (the wasm gained CRLFs; the manifest is computed over raw bytes).
  Pin assets binary; hash raw bytes in asset gates.
- PowerShell piping binary to `Get-FileHash` treats the piped input as a
  PATH; hash via a temp file instead.
- The `QueryPlan`-era `shape` fingerprint included where-clause SQL — with
  page-side compilation gone only the kernel validates cursor shapes, so
  page-side fingerprint differences are irrelevant.
- `watch()` attaches its event listener only after `WatchRequest` resolves
  (same pattern as the destination facade's `store.watch`); the kernel
  watcher emits the initial snapshot as an event, matching that pattern.

---

# CRUD/batch cutover over the contract (2026-08-31)

The root web collection's reads and mutations ride the typed contract: every
`WebCollection` get/put/putAll/upsert/upsertAll/patch/patchAll/archive/
restore/purge now issues `GetRequest`/`MutateRequest` through the shared
`RemoteRuntimeClient`, and the wire ops `get`/`mutate_batch` are deleted.
Gates: analyze 0, suite `+2775 ~83`, local web gate 7/7 (asset regenerated),
API snapshot PASS, browser matrix PASS.

## Contract audit (family 1 checklist item)
- Projection/select facts: the old `get` op carried only `store` + `id` —
  no projection exists on the old path, so `GetRequest` needs none.
- Batch semantics: the old `mutate_batch` multi-op path opened ONE
  transaction over the element list. The contract expresses each facade
  batch as one typed mutation (`MutationPutAll`/`MutationUpsertAll`/
  `MutationPatchAll`), which the kernel executes through the same
  collection mutators in one transaction — atomicity preserved. Mixed-kind
  batches have no single contract variant (by design); the tx family's
  session commands are the atomic multi-step channel.
- Reply shape: `{'ok': true}` becomes `MutationResult(ids)`; the facade
  ignores it (void methods), and the id list is now available to callers.
- Errors: contract application failures ride a SUCCESS reply
  (`r.error`); `RemoteRuntimeClient` reconstructs the typed kernel error.
  The old envelope turned them into `WorkerError` — pins updated.

## The re-route
- `lib/src/web/facade/web_contract_crud_forwarder.dart` —
  `WebContractCrudForwarder` mixin: one contract envelope per CRUD call over
  `WebFacadeHost.contractRuntime`. `DurabilityClass.full` writes begin a
  contract transaction session (`TransactionBeginRequest(readOnly: false,
  durability: full)`) -> session-bound `MutateRequest` -> commit, with a
  guaranteed rollback before rethrow — this preserves the old worker
  behavior ("explicit durability must ride the transaction path") WITHOUT
  adding the deferred `MutateRequest.durability` field.
- `WebCollection` mixes the contract forwarder; `WireCollectionMixin` is
  narrowed to `WebTxCollection` (its int session ids are minted by the
  worker's tx handshake, so it cannot move until the tx family re-routes
  sessions as kernel-minted strings). DEVIATION from the plan text: the
  mixin dies with the tx family, not this one — the ops it spoke for the
  root collection (`get`/`mutate_batch`) are gone now.
- Worker deletions: `WireOp.get`, `WireOp.mutateBatch`, `_handleGet`,
  `_handleMutateBatch`, `_parseDurability`; `worker_engine_crud.dart`
  keeps only the `open` handshake (store registration + manifest
  fingerprint check). `_applyMutation` stays (tx-only now).

## Tests moved in the same commit
- `web_collection_crud_test.dart` pins the decoded contract requests
  (`sentRequest` helper), the null-row get miss, the durable-session
  request sequence, and the rollback-and-rethrow path.
- `worker_engine_test.dart`: the CRUD group drives `MutateRequest`/
  `GetRequest`/session commands through `h.runtime` (a
  `RemoteRuntimeClient` bound to `customRequest` — the same binding the
  page facade uses). Atomic multi-step batches and the durable commit pin
  moved to contract tx sessions; the old envelope's malformed-input pins
  (unknown/non-string action, non-map element, missing store arg, unknown
  durability string) died with their machinery — their typed-decode
  coverage lives in `test/contract/wire_contract_test.dart` (unknown
  mutation kind, non-map record, patch without id).
- Harness `put`/`get` helpers now speak the contract (all call sites
  unchanged); `controller_test.dart` pins the `contract_request` envelope
  JSON round-trip; the case-160 vocabulary pin drops `get`/`mutate_batch`.
---

# Watches and committed events cutover over the contract (2026-08-31)

Single-record watches and committed facts ride the typed contract: the web
facade's `watchOne` sends `WatchOneRequest` and consumes single-row
`WatchSnapshot` events on the shared runtime stream, and every committed fact
travels as one contract `CommittedChange` envelope (the old `record_event`
stream and the `watch_one` op are deleted). Gates: analyze 0, suite
`+2768 ~83`, local web gate 7/7 (asset regenerated), API snapshot PASS,
browser matrix PASS.

## Payload decision (recorded, per the family checklist)
`CommittedChange` is now ONE PER RECORD and carries the full detail:
`store`, `id`, `origin` (local/remote/resolution), `action`
(create/update/archive/restore/purge/hide), `oldRecord`, `newRecord`,
`changedFields`. The kernel command handler now derives the contract event
stream from the change bus's DETAILED record-event stream instead of the
coarse store+ids stream — the old/new payloads ride the envelope, so no
second detailed stream exists or is needed (plan 6.8's "one committed
envelope feeds both"). Consequences:
- The destination facade's `ChangeNotification` derives per record
  (`ids == [event.id]`); its doc records that payloads ride the contract
  event. Revision numbers remain deferred (not forced).
- The kernel-side `wantsRecordEvents` gate is now effectively always true
  inside a kernel database (the command handler is a permanent detailed-bus
  listener); the cost is constructing record payloads per commit even when
  no one listens — accepted, since the web worker always needed them.

## WatchOneRequest design
- `WatchOneRequest(store, id)` -> `WatchStartedResult` (kernel-minted
  string subscription, same as query watches); snapshots arrive as
  `WatchSnapshot(subscription, items)` with at most one row; an EMPTY item
  list means the record is absent (null on the facade stream) — no new
  single-row event variant was needed.
- The kernel handler validates the record decodes (one root read) BEFORE
  registering, so a corrupt record fails the request typed instead of
  poisoning the event stream; a later refresh failure cancels the
  subscription (no broken-stream leak). This preserves the old
  "undecodable record fails and cleans up" pin.

## The re-route
- `WebCollection.watchOne` mirrors the query-watch pattern: registration
  tracker guards async races, contract snapshot listener per watch id,
  cancellation sends `WatchCancelRequest`. `workerStreams`/
  `workerEventDecoders` no longer participate in record watches.
- Committed facts: the facade builds its contract runtime EAGERLY at
  construction (committed facts always flow) and binds its event stream to
  the change bus via `web_contract_events.dart`
  (`bindRecordEventStream` + `recordEventFromContract`).
  `FakeFacadeHost` uses the same binding, so tests drive record events
  through `deliverContractEvent`.
- Worker deletions: `WireOp.watchOne`, `WireOp.recordEvent`,
  `_handleWatchOne`, the `record_event` broadcast subscription, and
  `worker_engine_watch.dart` (with `initializeWebWatch` in lifecycle.dart).
  The contract-event broadcast subscription is unchanged.
- DEVIATION (recorded): `worker_event` and the int-id `watch_cancel` op
  survive ONLY for `conflicts_watch` (its handlers moved into
  `worker_engine_conflicts.dart`); both die with the conflicts family.

## Tests moved in the same commit
- `web_collection_crud_test.dart`: watchOne pins are contract-driven
  (typed request, snapshot delivery incl. subscription filtering, empty
  snapshot -> null, typed cancel, deferred unregister); the recordEvents
  pin drives `deliverContractEvent(CommittedChange(...))`.
- `worker_engine_test.dart`: watch_one tests run over `h.runtime` +
  contract-event snapshots; the E4 broadcast pin now asserts the decoded
  contract `CommittedChange`.
- `worker_event_dispatch_test.dart`: the record_event branch pins are
  replaced by `bindRecordEventStream` unit coverage; the retired
  `record_event` envelope is asserted to be ignored as unknown-op noise.
- `loopback_test.dart`: committed-change pins updated to the per-record
  envelope (id, action, payload).
- Contract codec: malformed committedChange payloads (unknown origin,
  unknown action, missing id) fail typed.
- Deleted: `watch_protocol_test.dart` (old-envelope pins),
  `watch_initialization_test.dart` (helper deleted with watch_one).
---

# Transaction cutover over the contract (2026-08-31)

The web facade's interactive transactions ride the kernel's contract session
commands, and the last compiled-plan shipping path is gone: `tx_begin`,
`tx_get`, `tx_mutate_batch`, `tx_savepoint`, `tx_rollback_to`, `tx_release`,
`tx_commit`, `tx_rollback`, and `compiled_query` are all deleted from the
wire registry. Gates: analyze 0, suite `+2721 ~83`, local web gate 7/7
(asset regenerated), API snapshot PASS, browser matrix PASS.

## The re-route
- `db.transaction(...)` sends `TransactionBeginRequest(readOnly: false)` over
  the shared contract runtime and carries the kernel-minted STRING session
  (`WebTx.session`, formerly the worker-minted int `sessionId` — the public
  field is renamed; the worker's one-active-session rule is superseded by
  the kernel's session table). Commit/rollback semantics are unchanged and
  the settle only completes after the real SQL commit/rollback ran (kernel
  `_settle`).
- `WebTxCollection` mixes the (now session-aware) `WebContractCrudForwarder`;
  `WebTxQueryBuilder`/`WebTxSearchQueryBuilder` mix the (now session-aware)
  `WebContractQueryForwarder`/`WebContractSearchForwarder`. In-session
  writes ignore the `durability` parameter (fixed at begin), matching the
  old wire's effective behavior (`tx_mutate_batch` never parsed it).
- Nested transactions mint facade-side savepoint names (`sp1`, `sp2`, ...)
  and ride `TransactionSavepointRequest`/`RollbackTo`/`Release`. Kernel
  semantics preserved: ROLLBACK TO also RELEASEs, so names are reusable.
- Worker deletions: the whole `worker_engine_tx.dart` (interactive session
  machinery `_TxSession`/`_runTxSession`/`_activeSession`, all 8 handlers),
  `_handleCompiledQuery`/`_parseCompiledQuery`/`_compiledOperations`,
  `_requireSession`, `_applyMutation` (their last callers died together).
  Facade deletions: `send_plan.dart`, `page_from_compiled.dart`,
  `web_query_forwarder.dart`, `web_search_forwarder.dart`,
  `web_collection_mixin.dart`.
- DEVIATION (recorded): `QueryPlan`/`query_plan.dart` STAY as the
  kernel-internal compiled artifact — `ReadService` and the builders'
  compile paths run the native read engine with it, and rewriting that
  engine is not this family's job (Rule 10). What dies here is plan
  SHIPPING across the runtime boundary. The barrel export of `QueryPlan`
  is the Phase 9 gate's business.

## Tests moved in the same commit
- `web_tx_test.dart` re-pinned to decoded contract requests (savepoint/
  release/rollback-to sequence, session on every request, typed mutation
  kinds, keyset cursor in the spec, typed search hit fetch through the
  session).
- `worker_engine_test.dart`: the compiled-plan group and the two old tx
  groups are replaced by a compact contract-session group (CRUD + commit,
  rollback, savepoint bookkeeping, unknown-session typed failure, commit
  fault surfacing typed, close mid-transaction). Deeper session coverage
  already lives in `test/runtime/loopback_test.dart` over the loopback
  codec path.
- Deleted: `plan_bridge_test.dart`, `send_compiled_plan_test.dart`,
  `page_from_compiled_test.dart`, `transaction_query_test.dart` (all pinned
  machinery that no longer exists). The case-160 vocabulary pin drops the
  nine ops.
### Concurrency rule discovered by the browser smoke (added in this pass)
The transaction smoke hung on its "concurrent transaction is rejected" pin:
the kernel's `db.read` and `db.transaction` share the write queue, so a
second session (write OR read-only) could never begin while one was held
open — its `TransactionBeginRequest` blocked forever instead of failing.
Fix: the kernel `_begin` now rejects any second session while one is active
(`StateError`), restoring the old worker's single-session rule uniformly for
direct, loopback, and remote runtimes. The facade's savepoint error path is
unaffected; the smoke now expects the contract-decoded `StateError` (the
contract error codec replaces the old `RemoteLocalPocketException` envelope
mapping).
---

# Maintenance/capabilities cutover over the contract (2026-08-31)

The maintenance surface rides the typed contract: `analyze`,
`wal_checkpoint`, `vacuum`, `prune_outbox`, `compact`, and `run_maintenance`
are deleted from the wire registry, and the facade methods send
`AnalyzeRequest`/`WalCheckpointRequest`/`VacuumRequest`/`PruneOutboxRequest`/
`CompactRequest`/`RunMaintenanceRequest` through the shared contract runtime.
`health` folds away (deleted). Gates: analyze 0, suite `+2722 ~83`, local web
gate 7/7 (asset regenerated), API snapshot PASS, browser matrix PASS.

## New contract variant
`RunMaintenanceRequest(compactOlderThanMs)` -> `OkResult`, answered by the
kernel's `runMaintenance` (the exact method the old worker handler called).
Codec round-trip coverage rides the request-sample matrix; malformed
`compactOlderThanMs` fails typed.

## Deferred fields: NOT added (recorded decision)
- `VacuumRequest.pages`: the web facade keeps its `vacuum({int? pages})`
  parameter but the typed surface runs the kernel's full `VACUUM`; no
  caller (tests, examples, smokes) passes `pages`, and the hint is not a
  correctness fact. Doc records the deferral.
- `CompactRequest.nowMs`: the facade keeps the parameter; the kernel clock
  decides "older than". No caller passes it over the wire.
- `PruneOutboxRequest.maxEntries`: already documented as no longer bounding
  the outbox — the contract's omission matches current behavior.

## Capabilities and close: recorded deviations
- `capabilities` STAYS on the old wire (this family): the live report
  carries browser storage facts (opfs/durable/persistent/journal) that the
  contract's `CapabilitiesResult` does not model yet, and the facade
  reconciles them at open. It retires when storage capabilities join the
  contract (files family / worker collapse).
- `close` STAYS the full-teardown op: the worker still owns the sync
  engine, conflicts watchers, and upload sessions, and the kernel's
  `CloseRequest` cannot tear those down. One close behavior lands with the
  worker collapse (family 8), when nothing worker-owned remains.

## Worker deletions
`_handleHealth`, `_handleAnalyze`, `_handleWalCheckpoint`, `_handleVacuum`,
`_handlePruneOutbox`, `_handleCompact`, `_handleRunMaintenance`;
`worker_engine_maintenance.dart` keeps only `_handleCapabilities`.

## Tests moved in the same commit
- `worker_engine_test.dart`: the maintenance pin drives contract requests;
  the envelope/protocol tests use `capabilities` instead of the deleted
  `health` op.
- `web_sender_test.dart`/`wire_protocol_error_test.dart`/`controller_test.dart`:
  filler ops switched to still-live ops; the case-160 vocabulary pin drops
  the seven deleted ops.
---

# Conflicts cutover over the contract (2026-08-31)

The conflicts surface rides the typed contract, and the old `worker_event`
envelope is gone entirely: all six conflicts wire ops
(`conflicts_list/get/resolve/accept_local/accept_remote/watch`) plus
`worker_event` and the int-id `watch_cancel` are deleted from the registry.
Gates: analyze 0, suite `+2704 ~83`, local web gate 7/7 (asset regenerated),
API snapshot PASS, browser matrix PASS.

## Contract additions
- `ConflictData` (contract/conflict.dart): the immutable wire-safe conflict
  snapshot - store, recordId, base/local/remote documents, dirtyLocal/
  dirtyRemote sets, detectedAt, optional resolved document. It carries the
  exact field facts the kernel's `lp_conflicts` row model carries; nested
  documents cross as wire values, so DateTime/BigInt survive.
- Requests: `ConflictsListRequest(store?)` -> `ConflictsResult`,
  `ConflictGetRequest(store, id)` -> `ConflictResult(ConflictData?)`,
  `ResolveConflictRequest(store, id, merged)` -> `OkResult`,
  `AcceptLocalRequest`/`AcceptRemoteRequest(store, id)` -> `OkResult`,
  `ConflictsWatchRequest(store?)` -> `WatchStartedResult`.
- Event: `ConflictsSnapshot(subscription, conflicts)` - the kernel emits the
  initial list on registration and the full current list on every add,
  resolve, or modify (the core conflicts watch semantics, unchanged).

## The re-route
- `WebConflicts` mirrors the query-watch pattern: kernel-minted string
  subscription, `ConflictsSnapshot` events on the shared runtime stream
  filtered by subscription id, typed `WatchCancelRequest` on cancel, and a
  ConflictData -> ConflictRecord mapping at the facade boundary. The
  workerEventDecoders transform is gone - the contract decodes conflicts
  directly.
- Kernel: conflict cases dispatch to the SAME core `Conflicts` service the
  old handlers called (`listOpen/get/resolve/acceptLocal/acceptRemote/
  watch`); `_watchConflicts` registers in the kernel watch registry so
  `watch_cancel` and handler `close()` settle it.
- Worker deletions: `worker_engine_conflicts.dart` (all six handlers +
  `_ActiveWatcher`), `_emitWorkerEvent` (its last caller), the
  `record_event`-era conflict bridge `conflicts_bridge.dart`, and the
  `watch_cancel` int-id op. The worker now emits ONLY `contract_event`.
- Page deletions: `workerStreams`/`workerEventDecoders` removed from
  `WebFacadeHost`, the production facade, and `FakeFacadeHost`;
  `handleWorkerEventEnvelope` keeps only `sync_status`/`auth_required`
  (their families retire those too); `failWorkerStreams`/
  `terminateWorkerStreams` shrink accordingly.

## Tests moved in the same commit
- `web_conflicts_facade_test.dart` rewritten against decoded contract
  requests (list/get/resolve/accept sequence, snapshot delivery with
  subscription filtering, typed cancel, stream errors).
- `worker_engine_test.dart`: both old conflicts groups replaced by one
  contract-driven group (typed list/get snapshots, resolve writes the
  merged doc, accept_local/accept_remote/remote-deletion purge, watch
  snapshot + cancel).
- `worker_event_dispatch_test.dart` rewritten: only the status dispatch and
  the contract committed-fact binding remain; `worker_closed_stream_test.dart`
  and `conflicts_protocol_test.dart` deleted with their machinery; case-160
  pin drops the eight deleted ops.
---

# Files cutover over the contract (2026-08-31)

The whole file surface rides the typed contract: the ten `file_*` wire ops and
the `capabilities` op are deleted from the registry. Bounded upload sessions
and download flow control are now KERNEL-owned (`kernel/file_sessions.dart`),
the web facade speaks contract envelopes, and the worker answers only `open`,
the nine sync/auth ops (until the sync cutover), `contract_request`, and
`close`. Gates: analyze 0, suite `+2730 ~83`, local web gate 7/7 (asset
regenerated), API snapshot PASS, browser matrix PASS.

## Contract additions (contract/file.dart)
- `FileRefData`: the immutable wire-safe snapshot of one attachment — the same
  field facts both platforms use (`refId/store/recordId/field/hash/remoteName/
  state/nextRetryAt/attemptCount/lastError`). The kernel maps its
  `files_api.FileRef` rows onto it at the boundary (mirror of `ConflictData`).
- Upload session: `FileBeginUploadRequest(store, recordId, size, field, name,
  expectedSha256?, allowVolatileBlobs?)` -> `FileUploadSessionResult(session,
  maxChunkBytes)` (kernel-minted string session + the accepted chunk limit so
  the caller never guesses); `FileChunkRequest(session, chunk)` -> `OkResult`
  (binary chunk via the tagged bytes codec); `FileFinishRequest(session)` ->
  `FileRefResult`; `FileAbortRequest(session)` -> `OkResult`.
- Metadata: `FilesListRequest` -> `FileRefsResult`, `FileRemoveRequest` ->
  `OkResult`, `FileGcRequest(blobGraceMs, tmpGraceMs)` -> `FileGcResult`,
  `EnforceStorageCapRequest(maxBytes)` -> `FileCapResult`,
  `StorageStatusRequest` -> `StorageStatusResult(durable)` (honest reporting).
- Download with flow control: `FileOpenRequest` -> `FileOpenResult(stream)`;
  chunks arrive as `FileChunkEvent(stream, chunk, last, error?)` events while
  the caller's credit window has room (`FileCreditRequest(stream, bytes)` ->
  `OkResult` grants more). The kernel pauses the source subscription when
  outstanding (un-credited) bytes reach the window (1 MiB default) and ends
  every stream with a terminal (`last`) event; a failed stream ends with the
  error carried on the terminal event. The page never receives a whole
  buffered file in one reply.
- `CapabilitiesResult` gained the storage facts (`storage`/`durable`/
  `journal`) the old live capabilities op reported, so that op retired with
  this family (the recorded deviation from the maintenance cutover is closed).

## Kernel
- `kernel/file_sessions.dart` (new part of the kernel library): the bounded
  upload-session registry (`FileUploadSession`/`FileUploadSessionRegistry`)
  MOVED from `web/lifecycle.dart` — same limits, validations, sliding TTL, and
  error messages, with kernel-minted string session ids (`u1`, `u2`, ...) —
  plus the download-stream state. The expiry sweeper timer, session cleanup,
  and download cancellation all live in the command handler's `close()`.
- Dispatch: every file request goes to the SAME `pocket.files` service the old
  worker handlers called (`attach/list/open/remove/gc/enforceStorageCap/
  isBlobStorageDurable`) — no worker-side reinterpretation remains.
- `_capabilities()` is now async and reports the live journal mode
  (`PRAGMA journal_mode` via the adapter port's `selectSync`), the platform
  storage kind, and honest blob-store durability (a volatile fallback reports
  `durable: false`).
- DEVIATION (recorded): the kernel command handler now reports `storage`/
  `durable`/`journal` but not `persistent`/`multiTab*`/`worker` — those are
  PAGE facts (navigator.storage.persist, tab topology); the facade keeps its
  own measurements and `reconcileOpenCapabilities` falls back to them for the
  keys the contract does not carry.

## The re-route
- `WebLocalPocketFiles` speaks the contract over `WebFacadeHost.contractRuntime`:
  metadata RPCs are single requests; `attach` begins a session, chunks at the
  accepted `maxChunkBytes`, finishes, and best-effort aborts on failure; `open`
  subscribes to chunk events BEFORE sending the open request (events can
  overtake the reply across channels — they are buffered per stream), consumes
  and credits chunks, and ends on the terminal event (a terminal event with
  `error` throws typed).
- The six file RPCs (`filesUpload/filesList/filesOpen/filesRemove/filesGc/
  filesEnforceStorageCap`) are GONE from `WebFacadeHost`, the production
  facade, and `FakeFacadeHost` — the page-side chunking helper moved into
  `WebLocalPocketFiles.attach`.
- Open-path capability reconciliation now sends the contract
  `CapabilitiesRequest` and feeds the typed result into the same
  `reconcileOpenCapabilities` map shape.

## Worker deletions
`worker_engine_files.dart` (all ten handlers + `_encodeFileRef` + the sweeper),
`worker_engine_maintenance.dart` (`_handleCapabilities` — the file is gone),
`WireOp.capabilities`, the ten `WireOp.file*` constants, the upload-session
registry + expiry timer from `WorkerEngineHost`, and the `close` handler's
upload cleanup (sessions are kernel state now, settled by the kernel close).

## Tests moved in the same commit
- `test/conformance/file_family_conformance_test.dart` (new): bounded upload +
  list, credit-windowed download with terminal event, honest storage status,
  remove/gc/cap, and unknown-session/stream typed failures over direct,
  loopback, AND remote runtimes.
- `web_files_attach_test.dart` rewritten against decoded contract requests
  (session begin/chunk/finish sequence, chunk sizing at the accepted limit,
  abort-on-failure, early-chunk buffering, credit-back, typed stream error).
- `upload_session_test.dart` re-homed to the kernel registry (string session
  ids; every quota/TTL pin preserved).
- `worker_engine_test.dart`: the file group drives `h.runtime`; the
  capabilities pin drives the contract request (and asserts the harness's
  volatile store reports `durable: false`); envelope pins use `open` as the
  filler op. `controller_test.dart` pins the binary fileChunk contract request
  through the JS-boundary round-trip. `manifest_handshake_test.dart` reads
  capabilities over the contract. Case-160 pin drops the eleven deleted ops.

## Gotchas learned this pass
- `replace_string_in_file` with a non-string `newString` inserts the literal
  text into the file — verify every edit that grows a file by duplicate
  content (`facade.dart` briefly carried the file RPC block twice; caught by
  re-reading the region).
- Contract sample lists must stay `const`-clean: binary (`Uint8List`) samples
  cannot be const, so they ride OUTSIDE a `...const <T>[...]` spread in
  `requestSamples`/`eventSamples` (the result samples are all const-able).
- `dart test` on a single test name (`-N`) passes while the whole group fails
  when a `late final` group-local is reassigned per test — group-local mutable
  state must be nullable/cleared in `setUp`.

---

# Sync/auth/status cutover over the contract (2026-08-31)

The whole sync surface rides the typed contract and the KERNEL owns the sync
engine: the nine `sync_*`/auth string ops, the `sync_status` wire event, the
`auth_required` wire event, `worker_engine_sync.dart`, `sync_status_codec.dart`,
`typed_sync_web.dart`, and `WebSyncSurface` are all deleted. The worker now
answers only `open`, `contract_request`, and `close`. Gates: analyze 0, suite
`+2735 ~83`, local web gate 7/7 (asset regenerated), API snapshot PASS,
browser matrix PASS.

## Contract additions (contract/sync.dart)
- `SyncStatusData` / `SyncReportData`: COMPLETE wire-safe mirrors of the sync
  status/report models (state machine position, pending/conflicts/hidden/
  blocked counters, dead-letter and discarded counts, `lastError`, and both
  sync timestamps). `SyncStatusData.of`/`toSyncStatus` (and the report pair)
  map at the boundary; the contract library re-exports `sync/status.dart` so
  the models ride its public surface. Decoding is STRICT: unknown engine
  states, non-int counters, and non-map payloads fail with `WireException`.
- Requests: `SyncStartRequest(baseUrl, scopeId?, token?)` ->
  `SyncStartResult(state)`, `SyncStopRequest`/`SyncPauseRequest`/
  `SyncResumeRequest`/`SyncSetConnectivityRequest(online)`/`SyncUpdateAuthRequest(token?)`
  -> `OkResult`, `SyncNowRequest` -> `SyncReportResult`, `SyncStatusRequest` ->
  `SyncStatusResult` (closed-state data when sync never started — the old op's
  shape).
- Events: `SyncStatusEvent(status)` and `AuthRequiredEvent()`. Status is BOTH
  request-pullable and event-pushed (recorded choice per inventory §6): the
  page's status stream needs push semantics; the request gives a bootstrap
  snapshot. The event's status map travels PRE-ENCODED through
  `encodeWireValue` so the DateTime timestamps survive the JSON/JS transport.
- `start()` semantics: sync start OWNS realtime — the backend factory opens
  the SSE connection as part of the start command; there is no separate
  realtime command and the page cannot open a second connection. The token
  crosses ONLY via `SyncUpdateAuthRequest` (and the start command's optional
  initial token) — never persisted, never logged.

## Kernel ownership + the adapter seam (layering)
- The kernel command handler now owns the engine lifecycle: `_syncStart`
  builds the engine, subscribes its status stream into the contract event
  stream (`SyncStatusEvent`), and forwards `onAuthRequired` as
  `AuthRequiredEvent`; `_stopSync` (shared by `SyncStopRequest` and handler
  close) stops the engine, releases the adapter backend, and clears the
  token bridge. One implementation, no drift between stop and close.
- LAYERING (R1/R3 forbid core→pocketbase): the runtime depends on the new
  `SyncBackendFactory`/`SyncTokenSource` seam in `sync/sync_backend.dart` —
  `create` builds the backend AND opens realtime (one step, because sync
  start owns realtime), `dispose` releases adapter state (stopRealtime +
  client close). The adapter supplies `PocketBaseSyncBackendFactory`
  (pocketbase/backend.dart), which bridges the runtime-owned token source
  onto its `TokenProvider` by reading the current value fresh on every token
  request. `KernelDatabase.open` takes the optional factory; the web worker
  boot (`controller.dart`) and the test harness pass it. A runtime without a
  factory fails sync start typed (`StateError('No sync backend is configured
  for this runtime.')`).
- The kernel token bridge (`_KernelTokenSource`) replaces the value via the
  auth-update command; the value is never persisted or logged.

## The re-route
- Facade verbs (`startSync/stopSync/syncNow/pauseSync/resumeSync/
  setConnectivity/updateAuth`) send typed requests; `syncNow` returns the
  typed `SyncReport` from `SyncReportData`. `startSync` validates baseUrl
  first with the same `ValidationException('syncStart requires baseUrl.')`
  the old worker threw (a null baseUrl cannot cross a typed field).
- `_syncStatusController` is now `StreamController<SyncStatus>` and
  `syncStatus` is `Stream<SyncStatus>` — both controllers are fed from the
  shared contract event stream (subscribed at construction, one listener).
  `handleWorkerEventEnvelope` is DELETED: `_handleWorkerEvent` only forwards
  to the contract runtime. `failWorkerStreams`/`terminateWorkerStreams` keep
  failing the (retyped) controllers on unexpected worker close.
- The typed platform seam's web branch moved from the deleted
  `typed_sync_web.dart` to `typed/sync_engine_remote.dart`: a
  `PocketBaseSyncEngine` implementing `PocketBaseSyncHost` over the new
  `RemoteSyncSurface` seam (`RuntimeClient get contractRuntime`, satisfied by
  the facade). start → `SyncStartRequest`; auth events trigger an in-page
  token refresh pushed back via `SyncUpdateAuthRequest`; `startRealtime` stays
  a documented no-op. The old map-shaped `WebSyncSurface` and
  `sync_status_codec.dart` are gone.

## Worker deletions
`worker_engine_sync.dart` (all nine handlers + `_WebTokenProvider`),
`_stopSync` from `WorkerEngineHost`, the nine `WireOp.sync*`/`authRequired`
constants, `sync_status_codec.dart`, `typed_sync_web.dart`,
`web_sync_surface.dart`. The `close` handler no longer stops sync — the
kernel close settles it (the first consolidation step toward the envelope
loop).

## Tests moved in the same commit
- `test/contract/sync_contract_test.dart` (new): complete status/report codec
  round-trips (every field), timestamp survival through a JSON round trip of
  the event envelope, and malformed-payload typed failures.
- `worker_engine_test.dart`: both sync groups drive `h.runtime` — validation
  (typed StateError before start, closed status), the mock-server lifecycle
  (start/status-pull/status-push/syncNow report/pause/resume/connectivity/
  auth update/restart/stop), and the auth-required `AuthRequiredEvent` pin.
- `sync_auth_test.dart` rewritten: contract envelope round-trips for every
  sync request + both events + the `contract_request` carrier.
- `typed_sync_remote_test.dart` (new, replaces `typed_sync_web_test.dart`):
  the remote `PocketBaseSyncEngine` pins over a fake `RemoteSyncSurface`
  (typed start command, status mapping, auth-refresh push-back, no-op
  realtime, stop/restart).
- `worker_event_dispatch_test.dart`: the envelope-dispatch group is deleted
  with `handleWorkerEventEnvelope`; the committed-fact binding pins remain
  plus a pin that the retired `sync_status`/`auth_required` envelopes are
  unknown-op noise.
- `web_sender_test.dart`'s `failWorkerStreams` group retyped to
  `StreamController<SyncStatus>`; the case-160 pin drops the ten deleted ops;
  the wire_smoke/lifecycle smokes were updated for the retyped status stream
  and the typed (non-wrapped) `StateError`.

---

# Close/lifecycle cutover over the contract (2026-08-31)

The wire registry is now ONLY `open` + `contract_request`/`contract_event`:
the old `close` op is deleted, the contract `CloseRequest` is the ONE close
behavior for every runtime, and the worker is a small envelope loop (parse ->
dispatch (`open` handshake or one typed contract request through the kernel's
own command handler) -> reply; broadcast `contract_event`). The page holds
transport/bootstrap code only. Gates: analyze 0, suite `+2735 ~83`, local web
gate 7/7 (asset regenerated), API snapshot PASS, browser matrix PASS.

## The consolidation
- `close()` on the web facade sends the contract `CloseRequest` over the
  shared runtime (then closes the runtime's own sender/event stream) and
  disposes page resources through the existing `closeWebResources` ordering
  helper — worker-close first, facade-closed marker second, page disposal
  last, disposal guaranteed even when the worker close fails.
- The kernel close settles EVERYTHING worker-side that used to be torn down
  by the old op: sync engine + realtime (via the adapter factory's dispose),
  watches, upload sessions + expiry sweeper, download streams, transaction
  sessions. Nothing worker-owned remains to tear down — the envelope loop
  only keeps serving (a post-close contract request surfaces the kernel's
  typed failure inside the reply, pinned in `worker_engine_test.dart`).
- The worker's `open` handshake STAYS: the boot handshake is transport, not a
  feature surface.

## Deletions
- `WireOp.close` + `WorkerEngineHost._handleClose` (the registry is
  `{open, contract_request}`); the worker engine docs now describe the
  envelope loop, not feature areas.
- `terminateWorkerStreams` (no callers after the sync family moved status
  onto the contract event stream). `failWorkerStreams` STAYS — it is the
  unexpected-worker-close path for the page's status/auth controllers, and
  `closeWebResources` STAYS — the facade's close uses it (the ordering pins
  in `facade_close_test.dart` remain meaningful).
- The harness's `close()` now sends the contract `CloseRequest` through the
  JS-boundary path (`customRequest`), so VM tests exercise the same close
  behavior the browser runs.
- Filler ops in envelope tests moved to the remaining registry (`open`/
  `contract_request`); the case-160 pin drops `close`.

## Gate: page contains transport/bootstrap code only
The worker's feature handlers are exactly the `open` handshake (schema
registration + manifest fingerprint check — part of boot). Every feature
surface is a typed contract command answered by the kernel; the worker owns
no feature state. Remaining `web/` surface is transport (`web_sender.dart`,
`connector.dart`), bootstrap (`assets.dart`, `open_options.dart`,
`cipher_bridge.dart`), and the transitional page facade the barrel switch
retires.

## Gotchas learned this pass
- The mock sync server is not reachable from the browser smokes, so the
  browser matrix exercises the sync verbs only over the error paths — the
  `lifecycle_error_smoke`'s `expectRemoteError` had to learn that contract
  errors decode as TYPED kernel errors (`StateError` stays `StateError`, the
  old `RemoteLocalPocketException[StateError]` wrapper is dead).

---

# Stage A — destination surfaces for files, conflicts, and sync (2026-09-01)

The wire and kernel work for these families was DONE (the Phase 7 cutovers);
this pass put the missing typed public surfaces on the destination facade
(`lib/src/api/`) and proved them through the parameterized conformance suite
(direct + loopback + remote). No new wire vocabulary was added — every
surface rides the existing contract requests. Gates: analyze 0, suite
`+2767 ~83`, local web gate 7/7 (asset unchanged — no web-layer change),
API snapshot PASS.

## A1. Files on the store facade (`lib/src/api/files.dart`)

- `FileRef` — one immutable file reference used on both platforms; maps
  `FileRefData` ↔ `FileRef` at the boundary (mirror of `ConflictData` ↔
  `ConflictRecord`). Fields: refId/store/recordId/field/hash/remoteName/state/
  nextRetryAt/attemptCount/lastError.
- `FileSource` — the bounded attachment source: `FileSource.stream(chunks,
  {length, name})` (declare the length when known) and `FileSource.bytes(
  bytes, {name})` (always knows its length). The kernel chunker bounds the
  wire: `attach` begins a session at the accepted `maxChunkBytes` and streams
  chunks, so no single request carries a large payload.
- `Files<S>` — `store.files` is the store-scoped file service: `attach(
  recordId, {field, source, allowVolatileBlobs})`, `list(recordId,
  {field})`, `open(ref)` → `Stream<List<int>>` (assembled from the
  credit-windowed `FileChunkEvent` flow — the browser-proven consume/credit
  loop from `web_files.dart`, with buffering for events that overtake the
  open reply), `remove(ref)`, plus the store-less verbs the kernel exposes:
  `gc`, `enforceStorageCap`, and the honest `isBlobStorageDurable`.
- The api facade's `_send` seam carries the typed errors; unknown sessions
  and streams surface typed (`ValidationException`/`StateError`).
- Behavior oracle: `lib/src/files/files_api.dart` — the destination tests
  pin the volatile guard, dedup, and pending_upload/pending_remove states
  without rewriting behavior.

## A2. Conflicts on the store facade (`lib/src/api/conflicts.dart`)

- `StoreConflicts<S>` — `store.conflicts` is the store-scoped surface:
  `listOpen()`, `get(id)`, `watch()` (kernel-minted subscription,
  `ConflictsSnapshot` events on the shared runtime stream, typed
  `WatchCancelRequest` on cancel — the `Store.watch` pattern, not the web
  facade's `WatchSubscriptionTracker`, which is web-layer), `resolve(id,
  merged: [Write<S>...])`, `acceptLocal(id)`, `acceptRemote(id)`.
- `Conflict<S>` — the typed immutable snapshot: base/local/remote as `Row<S>`
  (enriched with `id: recordId` so `row.id` and the resolve base work),
  dirtyLocal/dirtyRemote as `Set<String>`, detectedAt as `DateTime`, and
  `remoteDeleted` (delete-conflict tombstone check against
  `remoteDeletedKey`).
- DECISION (resolve semantics): the final API lowers TYPED WRITES into the
  merged document — `resolve(id, merged: [Write<S>...])` fetches the
  conflict, starts from its LOCAL document, applies the lowered writes on top
  (via the store's own `_buildRecord` lowering, passed as a tear-off — no
  behavior was moved), and sends the full document as `ResolveConflictRequest`.
  The kernel's resolve writes the domain row to the given merged document, so
  a partial map would null out unmentioned fields; starting from local
  preserves them. Unmentioned fields keep their local value.
- The contract `ResolveConflictRequest` was NOT changed; `Writes.id` and
  `archived` writes are rejected by the existing lowering.

## A3. PocketBase sync attachment on the destination facade (`lib/src/api/sync.dart`)

- DECISION: adopted `PocketBaseSyncOptions` (baseUrl/tokenProvider/identity)
  — the plan §6.9 shape — rather than the typed layer's named-parameter
  `attachPocketBaseSync`. `db.attachPocketBaseSync(PocketBaseSyncOptions(...))`
  returns a concrete `PocketBaseSync` host.
- The destination `PocketBaseSync` drives the SHARED CONTRACT RUNTIME on both
  platforms (native direct and web remote): `start()` sends `SyncStartRequest`
  (sync start owns realtime — NO `startRealtime()` on this surface, per §6.9),
  `syncNow`/`pause`/`resume`/`setConnectivity`/`updateAuth` send the matching
  requests, `status`/`authRequired` derive from `SyncStatusEvent`/
  `AuthRequiredEvent`. The sync logic always lives in the kernel engine.
- Token rules unchanged: the provider stays caller-owned; its current value
  crosses only via the start command's optional token and `updateAuth`.
  Auth is an explicit bridge — `authRequired` fires and the caller pushes a
  fresh token (the plan §6.9 sketch; no automatic refresh inside the host).
- `LocalPocketOptions` gained `syncBackendFactory` (the `SyncBackendFactory`
  seam) so a native/direct kernel can accept sync start; the worker boot
  configures its own factory, so web callers never pass it. Also gained
  `blobStore` so native files work through the destination options.
- DEVIATION (layering note): `lib/src/api/sync.dart` imports the adapter's
  `TokenProvider`/`Token` and the api barrel re-exports them (`show Token,
  TokenProvider`) so `PocketBaseSyncOptions` is usable from one import — the
  same pairing the typed layer already exposes. R1/R3 (core/sync → pocketbase)
  are untouched; the layering test does not scan `lib/src/api/`.

## A4. Backoff primitive + adapter mapping (VERIFIED — no code change)

- The ONE shared backoff primitive ALREADY exists: `lib/src/sync/backoff.dart`
  (`exponentialBackoffDelay`) is the single overflow-safe exponential-backoff
  implementation. Both callers delegate to it: `SyncConfig.delayFor` (sync
  retry delays, used by puller/pusher/file lane) and the SSE reconnect loop
  (`lib/src/pocketbase/sse.dart`). Plan Phase 8 sync item 8 is satisfied —
  recorded, not rebuilt.
- PocketBase attachment field mapping ALREADY lives in the adapter:
  `lib/src/pocketbase/pb_client.dart` (`imgs+`/`imgs-` field wiring,
  `updateRecordFiles`, `downloadFile`), surfaced by `backend.dart`
  (`updateRecordFiles`/`updateRecordFilesStream`/`downloadFile`) and mapped
  by `sse.dart` (`imgs` lists). Per the ownership map, nothing moved.

## A5. Conformance (the gate)

- `test/conformance/surface_conformance_test.dart` (new): files + conflicts +
  sync groups over direct + loopback + remote runtimes. Files ride the
  destination `Files<S>` (bounded upload, streamed credit-windowed download,
  honest volatile storage, remove/gc/cap); conflicts are seeded into
  `lp_conflicts` directly and listed/watched/resolved/accept-ed through the
  typed surface (list/get/resolve merging from local, acceptLocal/acceptRemote,
  watch initial + re-emit); sync drives the destination `PocketBaseSync`
  against an in-process PocketBase wire server (`MockPbServer`) — start owns
  realtime, lifecycle verbs round-trip, report is complete. 15 cases × 3
  runtimes green.
- `test/api/files_test.dart`, `test/api/conflicts_test.dart`,
  `test/api/sync_test.dart` (new): focused destination-surface tests over the
  direct runtime (volatile guard, declared-length mismatch, no-blob-store
  failure, resolve-from-local semantics, remote-deletion accept, auth-required
  event, no-sync-backend typed failure).
- `test/compile_fixtures/final_api_vm.dart`: extended with the files/
  conflicts/sync vocabulary (analyzer is the gate) — the executable definition
  of the destination API now covers every contract family.

## Gotchas learned this pass
- `Store.conflicts.resolve` reuses the store's private `_buildRecord` lowering
  by passing it as a constructor tear-off — no behavior was moved out of
  `Store`, so the write-lowering pins stay put.
- The destination conflict `Row`s are enriched with `id: recordId`; the
  `remoteDeleted` tombstone check must ignore that injected id (the kernel's
  own check is `remote.length == 1 && remote[remoteDeletedKey] == true`).
- `addTearDown(() => db.close())` — a bare `addTearDown(db.close)` tear-off
  evaluates the `late` field at registration and throws `LateError`.
- The fixture's `TokenProvider` stub comes from the api barrel's re-export —
  the sync attachment vocabulary compiles from one import.

---

# Phase 9 — barrel switch (2026-09-01)

`lib/localpocket.dart` is now the ONE supported application barrel, exporting
the destination facade (`src/api/api.dart`) plus the schema declaration layer
(`src/typed/{cond,field_def,limits,schema_helpers,store_def,write}.dart`) and
the kept schema helper types (`IndexSpec`, `IndexScope`, `FtsSpec`,
`FtsNormalization`, `StoreMigration`). The raw `LocalPocket = KernelDatabase`
typedef and the old web facade's conditional claim on the name are no longer
exported; the destination `LocalPocket` owns the name. Gates: analyze 0, suite
`+2767 ~83`, API snapshot PASS (regenerated in this commit), local web gate
7/7 (asset unchanged), browser matrix PASS.

## The switch

- `lib/localpocket.dart` rewritten to the curated exports above; the raw
  schema/database/query/page/tx/sync-engine/PocketBase-client/file exports are
  gone. `CollectionSchema`, `Field`, `Collection`, `Page`, `QueryBuilder`,
  `SearchBuilder`, `QueryPlan`, `Database`, `DatabaseExecutor`, `Tx`,
  `ChangeSet` (and friends) are no longer public. `query_plan.dart` stays
  kernel-internal; only its barrel export died.
- The compile fixture `test/compile_fixtures/final_api_vm.dart` FLIPPED to
  `import 'package:localpocket/localpocket.dart'` (removed the `src/api/api.dart`
  import) — the executable definition of the destination API now proves one
  import gives the whole surface, unchanged in body as the plan specified.
- `lib/src/api/local_pocket.dart` no longer exports `CollectionSchema` (the
  facade-barrel leak is closed).
- `lib/src/web/facade/web_conflicts.dart` now imports `src/sync/conflicts.dart`
  directly — no lib code imports the public barrel.

## Internal test surface (decision)

- NEW `lib/src/internal/raw_surface.dart`: an INTERNAL library re-exporting the
  raw kernel/storage/query/sync/pocketbase/files types for internal unit tests
  (`test/core`, `test/sync`, `test/files`, `test/pocketbase`, `test/fts`,
  `test/security`, `test/e2e`, `test/web`), the benchmarks, and the example.
  It is NOT exported by the public barrel; applications must not import it
  (`package:localpocket/src/...` is internal by convention, and the plan
  §13.1 explicitly lets internal tests import `src/`). This was the
  highest-leverage way to move ~256 importers off the barrel without rewriting
  kernel pins (Rule 10): the internal suites stayed green on the first pass.
- `test/support/helpers.dart` imports the raw `src/` types directly.
- Application-level destination tests (`test/api`, `test/conformance`) import
  `src/api/api.dart` (they predate the barrel; they can flip later without
  behavior change).

## Auxiliary barrels deleted

- `lib/typed.dart`, `lib/sync.dart`, `lib/pocketbase.dart` are deleted; the
  internal tests that imported them now import `raw_surface.dart` (or the
  specific `src/` file — `mock_pb_server.dart` imports `src/core/ids.dart` +
  `src/sync/sync_backend.dart` because the adapter's `HttpRequest`/`HttpResponse`
  collide with `dart:io`).
- `test/core/layering_test.dart` R3/R4 pins updated: R3 now asserts
  `lib/pocketbase.dart` does NOT exist (the adapter is internal-only), R4
  asserts the single barrel is web-clean AND the three aux barrels are gone.

## Gotchas learned this pass
- The barrel switch cascades to ~256 importers; a single internal re-export
  (`raw_surface.dart`) plus one uniform package-import replacement brought the
  test error count from 6921 to 0 with no kernel edits.
- `mock_pb_server.dart` needed `dart:io`'s `HttpRequest`/`HttpResponse` — the
  adapter's transport types collide by name, so it imports the two specific
  `src/` files instead of `raw_surface.dart`.
- Files that imported the barrel AND an aux barrel ended up with duplicate
  `raw_surface.dart` imports after the uniform replace; a second pass removed
  the duplicates.
- `dart analyze` on the whole tree is green, but `example/` carries
  pre-existing `implementation_imports` infos (it imports `src/` directly);
  it now imports `raw_surface.dart` and stays error-free.

### Phase 9 gate confirmed (2026-09-01, after the raw_surface web-parity fix)

- Browser matrix PASS (17 pages × 3 browsers). The first run caught that the
  two typed smoke pages (`typed_smoke`, `typed_sync_runtime_smoke`) open
  through the WEB FACADE `LocalPocket`; `raw_surface.dart` now mirrors the
  old barrel's conditional export (raw kernel on the VM, web facade under
  `dart.library.js_interop`) and drops the `dart:io` `native_backup_file`
  export (web-hostile).
- Pair-and-keep disposition: the destination API's behavior suite
  (`test/api/` + `test/conformance/`, direct + loopback + remote) is the
  ported-intent home for CRUD/rows/queries/transactions/search/files/
  conflicts/sync/events/maintenance. Storage/migration/codec/merge/PocketBase/
  blob unit tests STAY internal on `src/internal/raw_surface.dart` (§13.1) and
  retire together with the old architecture in Phase 10.
- No application test imports a deleted public type: tests import either
  `src/api/api.dart` (destination) or `src/internal/raw_surface.dart`
  (internal).
- Final gates: analyze 0, `dart test` `+2767 ~83`, local web gate 7/7, API
  snapshot PASS, browser matrix PASS.

---

# Phase 10 — file-tree moves and old-architecture deletion (2026-09-01)

Move-only passes first (behavior is moved, never rewritten — Rule 10). Each
pass: `dart analyze lib test tool` 0, full suite `+2767 ~83`, worker asset
recompiled + checksum refreshed (moving source files changes the compiled
asset), local web gate 7/7. NOTE: the offline_lint typed-layer violations
(`lib/src/typed/*` importing the adapter's `TokenProvider`) are PRE-EXISTING
and resolve when the typed app surface is deleted below; offline_lint is not
part of the Phase 10 gate command list.

## P10.1 sync -> kernel/sync (commit de0ee66)

- `git mv lib/src/sync lib/src/kernel/sync`; `../core/`→`../../core/` and
  `../files/`→`../../files/` inside the moved files; external importers
  (`../sync/`→`../kernel/sync/`, `package:localpocket/src/sync/`→
  `.../src/kernel/sync/`) across lib, test, tool. `raw_surface.dart` exports
  re-pointed. Layering test + `offline_lint` + `idempotency_contract_test`
  file-path pins updated. Test-local `test/sync/engine/*` + `test/sync/*`
  helpers untouched (they import `raw_surface.dart`).

## P10.2 pocketbase -> adapters/pocketbase (commit 4ab577b)

- `git mv lib/src/pocketbase lib/src/adapters/pocketbase`; internal
  `../core/`→`../../core/` and `../kernel/sync/`→`../../kernel/sync/`;
  external importers re-pointed (api barrel `show Token, TokenProvider`,
  `raw_surface.dart`, typed layer, web controller, tests). Layering test R1/R3
  paths + `offline_lint` + `doc_contract_test` file-path pins updated.

## P10.3 core -> kernel (commit 02fb5cc)

- `git mv` of every `lib/src/core/**` item (including `query/` subdir) into
  `lib/src/kernel/` (flat move-only; the storage/query/ sub-splits land in
  later passes). `local_pocket.dart` part directives re-pointed
  (`part '../kernel/command_handler.dart'`→`part 'command_handler.dart'`,
  same for `file_sessions.dart`; the two kernel parts now
  `part of 'local_pocket.dart'`); the hub's `../kernel/sync/*` imports became
  sibling `sync/*`. Every `../core/`, `../../core/`, `src/core/` reference
  across lib/test/benchmark/example/tool rewritten to `kernel`. Layering test
  hub pin + R1/R2 scope (core == kernel now) updated. No `dart:io` under
  kernel (R2 holds).
- Note: `lib/src/kernel/` is currently FLAT (old core names); the plan §15.1
  storage/query organization is a later split, kept green per move.

## P10.4 schema split (commit e8a1aeb)

- `lib/src/typed/{cond,field_def,schema_helpers,store_def}.dart` →
  `lib/src/schema/`; `write.dart` → `lib/src/api/writes.dart`; `limits.dart`
  → `lib/src/api/limits.dart` (DEVIATION: kept as its own file rather than
  folded into `api/query.dart` — move-only, no code merge; can fold later).
  Barrel `lib/localpocket.dart` now exports the SAME names from
  `src/schema/*` + `src/api/{writes,limits}.dart`; `typed.dart` re-exports the
  new locations for the interim typed layer. Sibling + package-form importers
  across lib/test/tool re-pointed (incl. `test/typed/schema_parity_test.dart`
  file-path pin). API snapshot regenerated in this commit (export-source lines
  changed, public names unchanged).

## P10.5 files common re-home (commit 37913f7)

- `lib/src/files/blob_store.dart` → `kernel/files/blob_store.dart`;
  `file_sync_lane.dart` → `kernel/files/file_sync.dart`; `files_api.dart` →
  `kernel/file_service.dart` (move-only; `api/files.dart` stays the
  destination facade). Hub imports became kernel-sibling
  (`files/blob_store.dart`, `file_service.dart`); sync engine/puller import
  `../files/file_sync.dart`; the remaining platform files in `lib/src/files/`
  (`native_blob_store*`, `web_blob_store`, `web_blob_object_url`,
  `native_backup_file`) now import `../kernel/files/blob_store.dart` and stay
  until the `platform/*` split. Layering hub pin updated (hub wires
  `sync/*` + `files/*`/`file_service.dart`).

## P10.6 web collapse (commits 9eb57bb, dfa605a, 20c1f8d)

- `lib/src/web/` is GONE. `facade/`, `facade.dart`, `controller.dart`,
  `conversions.dart`, `wire_args.dart`, `open_options.dart` deleted
  (open_options was restored as the worker's pure-Dart open-args parser at
  `platform/web/worker/open_options.dart`; `wire_args.dart` restored at
  `platform/web/worker/wire_args.dart` — the worker `open` handshake still
  uses it). Surviving transport re-homed: page → `platform/web/page/`
  (`protocol`, `web_sender`, `assets`, `connector`, `lifecycle`,
  `open_core`, `web_storage_capabilities`), worker → `platform/web/worker/`
  (`main`, `controller`, `worker_engine`, `worker_engine_crud`,
  `open_options`, `wire_args`), `cipher_bridge.dart` →
  `platform/web/crypto.dart`.
- Smokes: 13 old-facade smokes retired (deleted files + HTML pages +
  `run_smoke.cjs` manifest + `browser_web_gate.dart` page list 17→5);
  `cipher`/`durability_reopen`/`compatibility_environment`/`sync_lifecycle`
  ported to the destination API (`api/api.dart` + `typed/typed.dart`
  imports, `StoreDef`/`Store`/`QuerySpec`/`PocketBaseSync`). The browser
  matrix is now 5 destination pages × 3 browsers (api, blob, cipher,
  durability_reopen, compatibility_environment) + the sync gate's
  `sync_lifecycle` page. The retired smokes' feature intent is covered by the
  destination conformance suite (direct + loopback + remote).
- Tests: 16 `test/web` facade-pinning files deleted + `fake_facade_host.dart`
  (their intent lives in `test/api` + `test/conformance`); surviving
  `test/web` transport tests re-homed to the platform paths. Full suite
  `+2632 ~83` (down from `+2767` — the deleted tests pinned the old facade).
- `raw_surface.dart` + `typed/typed_pocket_platform.dart` facade conditionals
  removed; `raw_surface` now exports the kernel `LocalPocket` typedef
  directly.
- REAL BUG FOUND + FIXED (commit 20c1f8d): the destination web close did not
  dispose the sqlite3_web worker connection, so committed BLOB data could be
  lost on WebKit when the page tore down (the old facade called
  `_remoteDb.dispose()`). `LocalPocket` gained an `onClose` hook
  (`LocalPocket.internal(runtime, onClose:)`); `open_web.dart` passes
  `() => connectResult.database.dispose()`. Proved by the cipher smoke's
  reopen-cross-instance stage, which now passes on all 3 browsers. This is a
  genuine durability fix for the destination web runtime.
- Worker asset refreshed after the re-home (paths changed the compiled JS);
  browser matrix green (5×3), local web gate green, api snapshot unchanged.

## P10.7 typed pins deleted; typed surface gate retired (commit e5c2014)

- `test/typed/` (45 files: algebra/def/get_all/model/pagination/parity/pocket/
  query/registry/row/schema_parity/upsert/web/write/sync_engine_native +
  the 27-file `compile_fail` corpus + support) DELETED. Their intent lives in
  the destination `test/api` + `test/conformance` (CRUD/query/pagination/tx/
  rows/search) and the compile fixture `test/compile_fixtures/final_api_vm.dart`;
  the old typed surface's compile-fail corpus pinned the deleted API and will
  be rebuilt against the destination API in Phase 11 (plan §13.4).
- `tool/typed_surface_gate.dart` retired (it scanned the deleted `lib/typed.dart`
  + `lib/src/typed` for record-map writes). Its `typed_surface_gate` release
  step removed from `tool/release.dart`, `tool/release_test.dart`,
  `test/release/full_gate_test.dart`, and
  `test/release/api_surface_gates_test.dart` (case 165 removed; raw_api_gate
  retained).
- Full suite `+2357 ~82` (down from `+2632` — the deleted typed pins).
- `lib/src/typed/*` STILL EXISTS (the old app surface) — its deletion is
  gated on migrating `benchmark/` + `example/` to the destination API (they
  still call the kernel's `TypedCollection`-returning `store()` / use
  `TypedRow`), which is the next sub-step. `raw_surface.dart` still re-exports
  `../typed/typed.dart` for those consumers.

