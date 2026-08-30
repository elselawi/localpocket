# Phase 0 baseline — recorded 2026-08-30

All results from a clean checkout on branch `refactor/final-architecture`
(commit `7ffc5db`, "readme", on top of `3975bf2` "Typed API sync with web
support"). Working tree contained only this `refactor/` workspace and
`final_refactoring_plan.md`.

## Analyzer

```
dart analyze lib test tool
→ No issues found!
```

## Hermetic test suite

```
dart test
→ All tests passed!  +2569 ~83
```

2569 passed, 83 skipped (skips are `real`-tagged live tests, `gate`-tagged
process-spawning tests, and platform-conditional web tests). 0 failures.

Test tree: 207 `*_test.dart` files in 14 directories
(`contract core e2e files fts goldens perf pocketbase release security support
sync typed web`).

## Surface gates

| Gate | Result |
|---|---|
| `dart run tool/api_snapshot.dart` | PASS (export snapshot up to date) |
| `dart run tool/raw_api_gate.dart` | PASS (26 reviewed declarations) |
| `dart run tool/typed_surface_gate.dart` | PASS |

Gates not run here but part of the release runner (recorded as green at last
full release pass): `layering_test.dart`, `web_asset_gate.dart`,
`coverage_gate.dart` (90.0% threshold; last recorded 94.38%),
`dependency_check.dart`, `readme_version_check.dart`, `docs_examples_test.dart`,
`offline_lint.dart`, `security_review.dart`, `traceability_check.dart`,
`version_check.dart`.

## Known timing-sensitive flakes (recorded, not hidden)

These pass in isolation and on re-run; they are wall-clock sensitive under the
concurrent full-suite run. They are pre-existing and unrelated to this
refactor. During Phase 1+, treat a failure in these files as a re-run first:

- `test/pocketbase/sse_test.dart` — "realtime SSE fast path applies only clean
  and newer" (timing dependent).
- `test/pocketbase/backend_lifecycle_test.dart` — "authChanged hints..."
  (timing dependent).
- `test/pocketbase/auth_test.dart` — "Token.isExpired: exact expiry is not
  expired, past is" (wall-clock boundary).

No new flakes observed in the Phase 0 run.

## Benchmarks

Full re-baselining is a Phase 11 activity (§17). The pre-refactor record lives
in `benchmark/results/` (latest: `localpocket_put_path_probe_2026-08-23_*.json`,
`localpocket_sync_apply_2026-08-15_*.json`) and `benchmark/baseline/`.
Documented platform floors that are NOT regressions (see repo memory /
README trade-off table):

- raw keyset walk 100k ≈ 1159 ms (B4 floor),
- 1000 empty full-durability transactions ≈ 146 ms (B7 floor).

Phase 11 must compare against these files, not against aspirational targets.

## Coverage

`coverage/lcov.info` exists from the last generation (94.38% line coverage,
6393/6774 lines at the time of the 2026-08-21 regeneration; threshold 90.0%).
Weak spots are web worker bridges (`worker_engine_sync.dart`,
`worker_engine_conflicts.dart`) — these files are deleted by Phase 7, which is
the fix; coverage is re-baselined only after deletions (§12 Phase 11.10).

## Live server / browser matrices

Not executed in Phase 0 (require a live PocketBase instance and browser
binaries). Recorded commands, for Phase 11:

```
dart test --tags real --run-skipped test/e2e/          # live wire suite
dart run tool/browser_web_gate.dart                     # browser web matrix
dart run tool/package_release_gate.dart                 # full release runner
```

Last recorded live results (2026-08-23 sessions): hermetic +1978 ~70 /
live e2e +71 all pass; subsequent batches kept both matrices green.

## Source shape at freeze

| Area | Files | LOC |
|---|---|---|
| `lib/` barrels | 4 | 193 |
| `lib/src/core` | 28 | 6505 |
| `lib/src/core/query/*` (builders) | 7 | 1591 |
| `lib/src/sync` | 15 | 6173 |
| `lib/src/web` (incl. facade dirs) | 39 | 5479 |
| `lib/src/typed` | 20 | 2908 |
| `lib/src/files` | 9 | 1731 |
| `lib/src/pocketbase` | 6 | 1531 |
| **Total lib** | **128** | **~26,100** |
