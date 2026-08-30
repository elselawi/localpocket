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
