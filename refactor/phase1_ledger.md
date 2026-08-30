# Phase 1 ledger — characterization and boundary-defect fixes (2026-08-30)

Every item from plan §4 with its named test and status. Statuses:
`FIXED` (defect corrected in Phase 1), `PINNED` (current behavior documented;
fix belongs to a named later phase), `EXISTS` (a test already covered it; kept
and referenced), `DESTINATION` (no runtime test possible before the destination
work; owned by the named phase).

| # | Plan item | Named test | Status | Owner phase |
|---|---|---|---|---|
| 1 | Schema transport can be lossy (callbacks invisible to fingerprint) | `test/refactor/phase1/schema_transport_test.dart` — resolver + transform fingerprint equality, `conflictPolicy` absent from JSON | PINNED | 3 (SchemaManifest rejects) |
| 2 | Native transaction reads can leak (outer-executor fallback) | `test/refactor/phase1/transaction_reads_test.dart` — reads-your-writes + savepoint rollback for tx-built query AND search | PINNED (structural fix = ExecutionContext) | 2 |
| 3 | Two public `LocalPocket` classes | `refactor/fixtures/final_api_vm.dart` + `final_api_web.dart` define the one-class contract | DESTINATION | 5 |
| 4 | Coarse and detailed change feeds not identical | `test/refactor/phase1/event_equivalence_test.dart` — every commit feeds both; savepoint rollback leaks neither; field-level payload equality | EXISTS (new pins; web parity rides Phase 7 event family) | 7 (wire) |
| 5 | Projection metadata can be dropped | `test/web/phase1_plan_bridge_test.dart` — decodeColumns minted → transported → executed; stale fingerprint still rejected | **FIXED** (`_parseCompiledPlan` now parses `decodeColumns`) | — (bridge deleted in 6) |
| 6 | Ordered watch snapshots must remain ordered | native: `test/refactor/phase1/watch_order_test.dart`; web: `phase1_plan_bridge_test.dart` (reorder emits on ordered watch, dedupe preserved) | **FIXED** (`CompiledWatcher.ordered`, threaded through `sendCompiledPlan` → `watch_query`) | — |
| 7 | Web file shapes differ from native | worker file RPCs already return FileRef-shaped rows (`worker_engine_test.dart` file group); same `FileRef` contract enforced at Phase 8 cutover | EXISTS/PARTIAL | 8 |
| 8 | Generic file code must not know PocketBase field names | `files.list()` defaults to `field='imgs'` — confirmed by source audit; moving the default is a behavior change on the frozen surface | PINNED | 8 (attachment_mapping.dart) |
| 9 | Reports must be complete | `test/web/phase1_sync_report_codec_test.dart` + updated `test/web/sync_status_codec_test.dart` pin — full round-trip incl. `blocked`, `discarded`, timestamps | **FIXED** (`encodeSyncReport`/`decodeSyncReport` now carry `blocked`) | — (quarantine/conflict counters added to the model in 8) |
| 10 | Realtime ownership must be consistent (`start()` owns realtime) | `test/pocketbase/realtime_ownership_test.dart` (native) EXISTS; web `startRealtime()` no-op confirmed at `typed_sync_web.dart:122` | PINNED | 8 (one `PocketBaseSync.start()`) |
| 11 | Capabilities must come from the active runtime | worker `capabilities` op serves the live engine snapshot (`worker_engine_test.dart`); page-side guessing removed at facade collapse | EXISTS/PARTIAL | 7 |
| 12 | Retry behavior must have one primitive | `test/sync/backoff_test.dart` — parity between `SyncConfig.delayFor` and the shared primitive, overflow safety, jitter clamps | **FIXED** (`lib/src/sync/backoff.dart`; `Sse` default `delayFor` delegates instead of mirroring) | — |
| 13 | One omitted-value sentinel | `test/refactor/phase1/sentinel_test.dart` — no-arg `onFieldTransition` now matches ANY transition (was dead code), explicit-null semantics, filter matrix | **FIXED** (second `_SentinelUnset` class deleted; one sentinel everywhere) | — |
| 14 | No public `QueryPlan` / raw SQL / raw point reads | raw API gate currently passes with reviewed exceptions; final absence enforced by the Phase 9 analyzer gate | DESTINATION | 6/9 |
| 15 | Sync/file services depend on the concrete facade | hub coupling pinned in `test/core/layering_test.dart` (documented exception) | PINNED | 2 (KernelContext ports) |
| 16 | Same-version schema changes must be explicit | `test/refactor/phase1/schema_transport_test.dart` — reopen with a new field at the same version leaves the column unbacked | PINNED | 3 |
| 17 | Store identity must be unambiguous | `test/refactor/phase1/schema_transport_test.dart` — duplicate names: FIRST table wins, LAST definition wins, writes through the last handle FAIL | PINNED | 3 |

## Production changes made (all behavior-preserving except where noted)

1. `lib/src/core/change_bus.dart` — one sentinel (`_sentinelUnset`); the
   duplicate `_SentinelUnset` class removed. **Behavior fix**: the no-arg
   `onFieldTransition(field)` convenience previously never matched anything.
2. `lib/src/web/worker_engine.dart` — `_parseCompiledPlan` preserves
   `decodeColumns` (the page already sent it; the runner and watcher honor it).
3. `lib/src/web/compiled_watcher.dart` + `worker_engine_watch.dart` +
   `facade/send_plan.dart` + `facade/query/web_query_builder.dart` — the
   watch bridge carries `ordered`, and the compiled watcher digests ordered
   snapshots in order (§4.6).
4. `lib/src/web/sync_status_codec.dart` — `SyncReport` wire codec carries
   `blocked` (§4.9).
5. `lib/src/sync/backoff.dart` (new) + `sync_config.dart` + `sse.dart` — one
   shared overflow-safe backoff primitive (§4.12).

## Old pins updated intentionally

- `test/web/sync_status_codec_test.dart` "blocked is not on the wire" → the pin
  documented the defect; rewritten to assert the complete codec.

## Phase 1 gate

- [x] Old public architecture still usable; no public API changes.
- [x] `dart analyze lib test tool` — clean.
- [x] Full hermetic suite — `+2606 ~83`, all passed (was +2569).
- [x] `tool/local_web_gate.dart` — PASS (worker compile + asset hashes).
- [x] All characterization tests committed with this ledger.
