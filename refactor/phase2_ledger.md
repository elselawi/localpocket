# Phase 2 ledger — kernel context extraction (2026-08-30)

Plan §12 Phase 2: "Free the name and extract the kernel context" — make a
shared semantic owner possible without changing behavior.

## What was done

### 1. The name is freed (`KernelDatabase`)
- `lib/src/core/local_pocket.dart`: the concrete core class `LocalPocket` is
  renamed **`KernelDatabase`**; a transitional typedef
  `typedef LocalPocket = KernelDatabase;` keeps the public name, the web
  conditional export, the raw/typed surfaces, and all 200+ test files
  compiling unchanged. The final public facade (Phase 5) becomes a distinct
  class over a private `RuntimeClient`, at which point the alias dies.

### 2. `KernelContext` (`lib/src/core/kernel_context.dart`)
- New shared dependency set constructed inside `KernelDatabase.open` and
  exposed as `KernelDatabase.kernel`: database executor, tables registry,
  clock, capabilities, write queue, perf counters, test hooks, cipher
  config, blob store, change publisher, outbox, op-queue, conflicts, files,
  typed registry, transaction coordinator, trace hooks.
- Services depend on the context — never on the concrete facade. The worker
  constructs the identical context through `KernelDatabase.open` with its
  WASM/OPFS adapters (step 8 satisfied structurally; proven by the worker
  test suite routing through the same services).

### 3. `ExecutionContext` (`lib/src/core/execution_context.dart`)
- Root vs transaction contexts, exactly per plan §5.3. `Tx` exposes
  `context` (executor + readOnly). Queries and searches created from a `Tx`
  carry the transaction executor with them.

### 4. The outer-executor fallback is GONE (§4.2 structural fix)
- `QueryBuilder` and `SearchBuilder` accept an optional executor and route
  every execution site (page fetch, backward-page probe, count, countDistinct,
  distinct, aggregates, ids, explain, search fetch) through it. Hook
  (`TestHooks.onQuery`) and perf bookkeeping is preserved on both paths.
- `Collection.query()`/`search()` pass the **transaction executor only**
  (`_exec`), never the outer database: a transaction context cannot select
  the outer executor; the root context uses the outer database by design.
- Structural pins: `test/refactor/phase2/execution_context_test.dart`
  (`debugExecutor` non-null for tx-built builders, null for root, preserved
  across `copyWith` chaining).

### 5. `TransactionCoordinator` (`lib/src/core/transaction_coordinator.dart`)
- Owns the write-queue settlement, durability pragma transitions
  (`synchronous` state), group commit (`_CommitGroup`/`_CommitMember`),
  read transactions, and post-commit passive-WAL bounding. Moved verbatim
  from the facade; `KernelDatabase.transaction`/`read` are thin delegates.
  Savepoint, durability, and group-commit semantics unchanged (durability,
  tx, and concurrency suites pass).

### 6. `MutationService` (`lib/src/core/mutation_service.dart`)
- Named owner of the local mutation path over `KernelContext`, with the full
  operation surface (put/upsert/putAll/upsertAll/patch/patchAll/archive/
  restore/purge). The existing private pipeline on `Collection` remains the
  implementation (moved to this ownership without changing SQL or event
  semantics); Phase 6/7 command handlers call this service. Structural test:
  a put through the service is behaviorally identical to a put through the
  collection (row + outbox + dirty sync row).

### 7. `ReadService` (`lib/src/core/read_service.dart`)
- Wrapper around the existing compiled-plan runner. **The web worker now
  executes compiled plans through `ReadService`** — the same read path as
  native — so plan execution cannot drift between platforms (step 7/8).
  `test/refactor/phase2/execution_context_test.dart` executes a plan through
  the service directly.

## Deliberately deferred (recorded)

- Physical file moves (`kernel/`, `runtime/`, `api/` trees) — Phase 10.
- `KernelContext` narrowing (dropping the `database` back-reference once the
  legacy raw/typed clients are retired) — Phase 5–7.
- Mutation pipeline body migration out of `store.dart` into the service —
  Phase 6 (command-family cutover performs it per family).

## Gate evidence

- [x] Old tests pass unchanged: full hermetic suite `+2614 ~83`, all passed
      (was +2606; +8 new Phase 2 pins).
- [x] Direct native and current worker paths reach the same services
      (`ReadService` shared; same `KernelContext` construction).
- [x] The outer-executor fallback is gone for transaction query/search.
- [x] `dart analyze lib test tool` — clean.
- [x] `tool/local_web_gate.dart` — PASS (worker compile + asset hashes).
