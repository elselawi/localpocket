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
