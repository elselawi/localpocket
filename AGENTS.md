# AGENTS.md — conventions and gotchas for working on LocalPocket

Read this before changing anything. It records the invariants that are
machine-enforced (breaking them fails the test suite) and the ones that are
only written down here (breaking them fails silently in production).

## What this package is

`localpocket` — a local-first Dart/Flutter embedded database (SQLite under the
hood) with optional two-way sync to PocketBase. One public barrel
(`lib/localpocket.dart`); everything else is internal. The same facade runs
in-process on native and behind a dedicated web worker on web — identical
typed contract commands on both paths.

## Commands

```sh
dart analyze lib test tool example   # must be error/warning-clean
dart test                            # full suite, ~2.5k tests, ~15 s
dart test test/<dir>                 # layer-scoped runs during development
dart run tool/web_worker_compile.dart          # recompile the web worker (see Gotchas)
dart run tool/web_asset_gate.dart              # verify shipped asset checksums
dart run tool/worker_asset_current_gate.dart   # verify shipped worker is current
```

The full release gate set lives in `test/release/` and `tool/` (api surface,
dependency policy, compile-fail corpus, doc examples, readme version, asset
integrity). `dart test` runs the test-embedded ones.

## Architecture (do not fight it)

Layering, outermost to innermost: `api/` (facade) → `runtime/` (typed contract
clients) → `kernel/` (the engine) → `platform/` (I/O). `schema/` holds the
typed descriptor layer; `contract/` is the wire vocabulary; `adapters/pocketbase/`
is the only remote backend.

The import-boundary rules are pinned in `test/kernel/layering_test.dart`:

- **R1** — kernel/ and runtime/ never import the PocketBase adapter.
- **R2** — kernel/ never imports `dart:io`, `dart:html`, `dart:js*`, or
  `package:http`. Kernel must stay web-clean and transport-free.
- **R3** — exactly TWO adapter touch-points exist outside
  `adapters/pocketbase/`: `platform/web/worker/controller.dart` (wires the
  factory) and `platform/web/open_web.dart` (rejects foreign factories).
  Adding a third requires updating the layering test deliberately.
- **R4** — one public barrel, no auxiliary barrels; the barrel stays web-clean.

Direction rules that are convention-enforced: `api/` talks to the kernel hub
(`KernelDatabase`, `DurabilityClass`) and to `schema/` — never to kernel
internals (no `ddl_compiler`, `ids`, `store.dart` imports from `api/`). Facade
seams exist for the things the facade needs: `LocalPocket.newRecordId()`,
`Field.reservedColumns` (schema layer), `Token`/`TokenProvider` (on
`kernel/sync/sync_backend.dart` — the sync boundary's vocabulary, NOT the
adapter's).

`kernel/local_pocket.dart` is a part-library hub (five parts sharing its
private surface). New command families and services go through `KernelContext`
and hub-owned services — never as new library globals inside a part.

## Hard conventions

**Errors.** One sealed family: `LocalPocketError` (`kernel/errors.dart`) for
everything caller-facing; `WireException` (`contract/wire_values.dart`) for
anything malformed crossing the wire; `SyncError` subtypes for sync engine
decisions. Never throw a raw `StateError`/`TypeError`/cast from a boundary —
raw errors escaping the worker/contract boundary are undiagnosable.

**Wire decoders.** Every contract decoder must reject wrong-typed values with
`WireException`. Use the helpers in `wire_values.dart` (`_wireString`,
`_wireInt`, `_optWireString`, `_optWireInt`, `_optWireDateTime`,
`_wireStringSet`) instead of `as` casts. A present-but-wrong-typed value is
NEVER silently defaulted (that's how a filtered query once became unfiltered);
absence may legitimately default.

**Sealed request/result/event families.** Adding a contract variant requires:
a case in `KernelCommandHandler.handle` (the switch is exhaustive — the
compiler enforces it), a case in `ContractCodec` encode/decode for requests,
results, AND events, a representative instance in `requestSamples` /
`eventSamples` (the wire-contract tests round-trip every sample), and an entry
in `requestResultTags` (derived automatically from samples).

**Sync identity.** `syncStart` REQUIRES a stable per-account `identity`
(`PocketBaseSyncOptions.identity`). Never reintroduce a shared default — the
sync scope (cursors/watermarks) collapses across accounts and the failure is
silent. Backends deriving scope from identity MUST fail loudly when it's null.

**Backend idempotency.** Any `SyncBackend` implementation MUST treat
`(scopeId, PushOp.opId)` as an idempotency key — the binary-split retry
depends on it. PocketBase's hard per-page ceiling is 500 (`pbMaxPage`).

**Concurrency model.** One writer: mutations serialize through the
single-writer queue; record-id counters are per-isolate (kernel lives in one
isolate everywhere, including the web worker). Don't add shared mutable
globals.

**Docs.** Public types use `{@template}`/`{@macro}` doc macros and are gated
by doc tests (`docs_examples_gate_test`, `traceability_check`,
`readme_version_check`). README code samples must compile. Keep doc claims
equal to code reality — when a trade-off exists, document it as a decision in
the library doc comment, don't let the doc promise more separation than the
code delivers.

**Changelog.** User-visible changes go in the `Unreleased` section of
`CHANGELOG.md`; the readme version check pins pubspec/README agreement.

**Style.** `dart format` (2-space). `dart analyze` must stay error/warning
clean — don't add new infos. Scratch probes and planning notes go in
`build/` (gitignored) or `_*.md` (gitignored). Do not leave audit/planning
references in code comments.

## Gotchas (things that will bite you)

1. **The shipped web worker goes stale on every kernel/contract change.**
   `assets/localpocket_worker.js` embeds the compiled kernel. After touching
   `lib/src/kernel/**` or `lib/src/contract/**`:
   `dart run tool/web_worker_compile.dart` → copy `build/web/localpocket_worker.js`
   to `assets/localpocket_worker.js` → rewrite
   `assets/localpocket_worker.js.sha256` (`<sha256>  localpocket_worker.js`)
   → run both asset gates. `dart test` alone will NOT catch staleness for all
   worker behaviors — run the gates.

2. **dart2js pitfalls in kernel/contract code.** `1 << 32` constant-folds to 0
   under dart2js — write large bounds as decimal literals (see
   `Outbox.generateOpId`). One-shot `Isolate.run` is unavailable/unprofitable
   under dart2js — `encryptAsync` runs inline by design.

3. **The web worker boundary carries data, not code.** `LocalPocketOptions
   .syncBackendFactory` and `.blobStore` cannot cross it: the worker configures
   its own. `open_web.dart` rejects a foreign factory with a typed error —
   never "silently ignore on web".

4. **New facade behavior must run over ALL runtimes.** The conformance suites
   (`test/conformance/`) drive the same bodies through `LocalRuntimeClient`,
   `LoopbackRuntimeClient` (full codec round-trip), and the worker harness
   (`test/support/worker_harness.dart`). A feature that only works on the
   direct runtime is a bug — add it to the conformance body, not just a unit
   test.

5. **Fake transports must speak the real envelope.** Tests faking
   `RemoteRuntimeClient` transports must return a full `WebResponse` shape
   (`{'v': webProtocolVersion, 'i': <request id>, 'r': ...}` or `'e': ...`) —
   the sender validates version and id before anything else. Likewise the
   worker path validates the request envelope version on both sides.

6. **`RowsResult`-style list payloads.** List decode errors name the failing
   index (`rows[2]`). Preserve that when touching `ContractCodec`.

7. **`put`/`upsert`/`patch` return post-write reads.** The write commits
   first; if a concurrent sync apply hides the row before the read, the
   failure is `RecordNotFoundException` for ALL of them — one contract, don't
   split it per-method.

8. **Windows: interrupted test runs leave dart processes holding
   `sqlite3.dll`, and the next `dart test` dies with "Access is denied" while
   bundling native assets.** `Get-Process dart` and kill the strays before
   rerunning. Not a code problem.

9. **Known flaky tests (pre-existing; pass standalone):**
   `auth_test` "Token.isExpired: exact expiry..." (wall-clock race —
   `DateTime.now()` sampled twice), and `sse_test` fast-path timing under
   heavy parallel load. Run the file standalone before treating a failure as
   a regression.

10. **Never downgrade wire/config values silently.** The pattern is always:
    absent → documented default; present-but-wrong → typed error. If you find
    yourself writing `x is T ? x : fallback` on a wire map in the contract
    layer, stop.

11. **`example/` and `tool/web_smoke/` must keep compiling** — they exercise
    the public surface (and the sync drivers must pass `identity:` like any
    caller). Fixtures in `test/support/compile_fixtures/` are compile gates;
    changing the public API means updating them.

## Testing conventions

- `test/` mirrors `lib/src/` one directory per layer; `e2e/`, `perf/`,
  `release/`, `conformance/`, and a single `test/support/` for shared helpers
  (`openPocket` engine helpers, `MockPbServer`, fake transports, fixtures).
- Tests use the real in-memory engine (`openPocket()` helpers); no mocking of
  the kernel itself. Sync tests run against `MockPbServer` (a faithful local
  mock) or the fake HTTP transport; real-server tests under `test/e2e/real/`
  are opt-in.
- Perf tests assert budgets (`test/perf/budget_test.dart`), not vibes — if a
  change legitimately shifts a budget, update it with a comment saying why,
  don't delete it.
- Add tests to the relevant EXISTING file; a new test file needs a new
  directory justification.
