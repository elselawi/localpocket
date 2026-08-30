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
