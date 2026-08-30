# Refactor workspace — final architecture migration

Working artifacts for `final_refactoring_plan.md` (the destination architecture).
Everything in this directory is documentation and fixtures; it is not compiled,
exported, or shipped.

## Feature freeze (Phase 0, Rule of the ledger)

**The old public surface is frozen as of 2026-08-30 (commit after Phase 0):**

- No new features on the raw map API (`Collection`, `QueryBuilder`,
  `SearchBuilder`, `Tx`, `QueryPlan`).
- No new features on the typed surface (`TypedPocket`, `TypedCollection`,
  `TypedRow`, `typed.dart` exports).
- No new `WireOp` operations, `wire_args.dart` argument shapes, or
  `worker_engine_*` handler semantics. Bug fixes only.
- New capability requests are recorded in the ledger as destination-API items,
  not implemented on the old surface.

## Contents

| File | Purpose | Plan section |
|---|---|---|
| `phase0_baseline.md` | Recorded pre-refactor results (analyze, suite, gates, benchmarks, coverage, known flakes) | §12 Phase 0.1–0.2 |
| `public_api_inventory.md` | Every public symbol from the four entry points, with KEEP / REPLACE / INTERNALIZE / DELETE disposition | §12 Phase 0.3–0.4 |
| `worker_op_inventory.md` | Every worker string operation, event, file command, and sync command, mapped to its destination command | §12 Phase 0.3 |
| `file_ownership_map.md` | Every current production file → destination file or deletion phase | §12 Phase 0.7, §15.3 |
| `naming_and_policy.md` | Final naming table + manifest/callback policy | §12 Phase 0.5–0.6 |
| `phase1_ledger.md` | §4 item-by-item disposition: named test, FIX/PIN/EXISTS/DESTINATION, owner phase | §12 Phase 1, §4 |
| `fixtures/final_api_vm.dart` | Destination-API compile fixture (VM) | §12 Phase 0.5 |
| `fixtures/final_api_web.dart` | Destination-API compile fixture (JavaScript/worker) | §12 Phase 0.5 |

The fixtures are intentionally plain `.dart` files outside `lib/`, `test/`, and
`tool/` so the analyzer does not compile them yet. They become executable
compile tests in Phase 5 (when the destination API exists) and permanent
compile-gate fixtures in Phase 9.

## Phase gate checklist (§12 Phase 0)

- [x] `dart analyze lib test tool` — clean (0 issues).
- [x] Full hermetic suite — `dart test` → `+2569 ~83` (all passed).
- [x] `tool/api_snapshot.dart` — PASS (export snapshot unchanged).
- [x] `tool/raw_api_gate.dart` — PASS (26 reviewed declarations).
- [x] `tool/typed_surface_gate.dart` — PASS.
- [x] Benchmark / coverage artifacts cited from last recorded runs
      (`benchmark/results/`, `coverage/lcov.info`); full regeneration deferred
      to Phase 11 (§12 Phase 0.1 records the command matrix, not a re-run).
- [x] Public symbol inventory with dispositions committed.
- [x] Worker operation inventory committed.
- [x] File ownership map committed.
- [x] Naming table + manifest/callback policy committed.
- [x] Final API compile fixtures (VM + JS) committed.
- [x] Feature freeze declared (this file).
