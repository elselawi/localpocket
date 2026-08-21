### E. Web (`web`) — the structural gap

**E1. The big one: no web *execution* tests.** Everything in `test/web/*` stops at the wire envelope. None of the facade classes, none of the worker `_handle*` handlers, and none of the compiled-plan execution paths run against a real engine. All real behavior lives in browser smokes under `web_smoke`, which are **not** part of `dart test`. A unit-level worker harness (feed `WebRequest`s to `LocalPocketDatabaseController` with a real in-memory engine) would unlock dozens of tests:

**E2. `LocalPocket.open()`** — asset fetch/fallback, `_requestPersistence` timeout, capability reconciliation. **E3. `filesUpload()`** — chunking loop + `expectedSize` mismatch `StateError`. **E4. `_handleWorkerEvent`** — `recordEvent`→ChangeBus emission, `syncStatus` decode, `authRequired` dispatch, malformed events. **E5. `send()` worker-closed detection.** **E6. `WebCollection`** full CRUD + `watchOne`. **E7. `WebQueryBuilder.watch()`** default-50 plan. **E8. `WebQueryForwarder`** all ops (`fetch/keysetAfter/count/countDistinct/distinct/ids/explain/sum/avg/min/max`). **E9. `pageFromCompiled`** cursor construction. **E10. `WebSearchBuilder`/`WebSearchForwarder.fetch()`**. **E11. `WebTx`** savepoint/release/rollback. **E12. `WebLocalPocketFiles.attach`** with the `bytes`-stream path (vs `byteArray`). **E13. `WebConflicts`** `watch/listOpen/get/resolve/acceptLocal/acceptRemote`. **E14. `web_storage_capabilities.toJson`**.

**E15. Controller handlers** (each untested): `_handleMutateBatch` unknown-action `ValidationException`; `_handleCompiledQuery`/`_parseCompiledPlan` validation (op vocabulary, compiler version, schema version + fingerprint, argument count, `SELECT ` prefix, stale-plan rejection); `_handleTxSavepoint/RollbackTo/Release/Commit/Rollback` savepoint bookkeeping; `_handleSyncStart` (baseUrl validation, engine construction, realtime start) and `_handleSyncUpdateAuth`; `_handleFileUploadBegin/Chunk/Finish/Abort` chunk reassembly; `_handleConflicts*`; `_requireSession` `StateError`.

**E16. Controller `openDatabase`** — journal-mode `TRUNCATE` assertion, `_parseOpenOptions`/`_rawOpenOption`, cipher-envelope parse, and encrypted-store-without-cipher rejection.

**E17. `CompiledWatcher` normal emission path** — only error-forwarding is tested; initial snapshot, digest dedupe, projection + `decodeColumns` are not.

**E18. `sendCompiledPlan`** (`send_plan.dart`) and **`loadAssetAsBlobUrl`** (`assets.dart`) — no unit tests.

### F. Cross-cutting


**F1. `prefetchFiles: true` silently lost across the web boundary** — `schema_model_test` *pins* that `prefetchFiles` isn't serialized, but no test checks the runtime consequence (file lane won't prefetch on web). Add a web-side behavioral test or document the limitation.

**F2. `DurabilityClass.normal` end-to-end** (see A1) plus a sync-engine variant: normal-durability outbox commits surviving restart.

---

### G. Adversarial sync races (audit Part XIII — the missing race suite)

These are the scenarios that would **verify (or break) the still-open audit items** — #10/#41 single lane, #32/#33 OCC, #35 delete-conflict policy, #37 batch idempotency, #15/#16 cursor ordering, #44 invariants. None of them exist today.

**G1. OCC: GET → remote edit → PATCH** (#32) — barrier between `getRecord` and `updateRecord`; another writer mutates the record after the GET. Pin that the pusher **merges against the fresh version** (no lost update) rather than overwriting. (The existing 'merged push settlement race' covers *local* edit during push — this is the *remote* edit case.)

**G2. Batch OCC: preflight GET → other-client edit → batch PATCH** (#33) — after the batch preflight GETs, `mock.mutate` a record; assert the batch merge path re-merges against the new version instead of settling stale content.

**G3. Response lost after server commit** (#37) — `lostCreateResponse`/`lostUpdateResponse` already exist on the mock; assert GET-recovery settles exactly once with **no duplicate remote record** (create variant is partially covered; add **update** + **batch** variants).

**G4. Retry the same `opId` after an unknown server outcome** (#37) — the server already applied the op; a retry returns the original result and the client settles once (no double-apply, no misleading conflict).

**G5. Local edit during push — batch variant** (#32/#44) — edit a record mid-batch (not just mid-single-update); assert the newer edit is never overwritten by the stale batch settlement.

**G6. Unordered backend page** (#15/#16) — `listChanges` returns a page in non-`(updated,id)` order; pin that the MAX-tuple compensation + idempotent re-delivery means **no record is skipped and none is applied twice**.

**G7. Duplicate / identical timestamps across pages** (#15) — two records share `updated` (id tiebreak); assert both apply and the cursor is `(updated, maxId)`.

**G8. Crash just AFTER cursor commit** (#15) — reopen with the cursor already committed; assert no re-delivery re-applies anything (the mid-page crash 'cursor advances only with page commit' already exists).

**G9. Outbox crash matrix** (#44) — granular crash points: after enqueue before sync-row; after sync-row before settlement; after settle before clean. Assert reopen **never loses an edit and never double-pushes**. (Partial: `crash_restart_matrix_test.dart` covers close-with-queued-ops + merged-push-close.)

**G10. Remote delete during local edit** (#35) — local offline edit + remote hard delete; pin today's `missing_target` dead-letter behavior, and guard whichever `MissingRemotePolicy` is chosen when #35 is implemented.

**G11. Stop during pull / push / fast-path** (#10/#41) — barrier-based stop mid-operation; assert no DB work outlives `stop()` and restart is clean. (Partial: `generation_test.dart` covers triggers *after* stop, not stop *mid*-operation.)

**G12. SSE hint while stopping / immediately after restart** (#10/#11) — a hint arrives while `stop()` is draining (no apply after stop, no crash); a hint right after `start()` is applied exactly once.

**G13. Old cycle completes after restart** (#11) — ✅ **COVERED** by `generation_test.dart`.

**G14. Forbidden → permission restored** (#34) — ✅ **COVERED** by `blocked_test.dart` (requeue → push).

**G15. Fast-path and pull never interleave on the same record** (#10/#41) — with the pull's apply blocked on a barrier, fire a fast-path hint for the same record; assert the fast-path apply is **deferred/serialized** behind the pull (never applied concurrently, never producing a divergent row). After the single-lane lands, assert strict ordering: pull-apply fully completes before fast-path-apply starts.

### H. Migrations (`core/migrate`)

`migrate_test.dart` has 11 tests but **zero FTS, zero encrypted-field, zero NOT NULL** coverage — and no failing-migration atomicity test. `migrator.dart` is a rewrite-heavy hotspot (additive + destructive rebuild paths).

**H1. Destructive rebuild with FTS5** — the 12-step path drops and recreates `…_fts`; construct an FTS store, destructively migrate, assert rows + `Collection.search()` still work after the rename.

**H2. Additive migration of an encrypted field** — `Field.sqlType` returns `TEXT` when encrypted; assert `ADD COLUMN` emits TEXT and ciphertext round-trips across reopen.

**H3. Additive NOT NULL column with no default on a populated table** — pin the typed error / backfill contract (or the deliberate failure) instead of a raw `SqliteException`.

**H4. Failing migration is retryable and ledger-consistent** — a migration that throws mid-way leaves `schema_ver` unchanged, no half-applied ledger state, and a retry completes exactly once.

**H5. Destructive migration with a live second connection** — backup/rename while another connection holds the DB; pin the failure mode (refused vs retried) rather than a half-renamed table or lost backup.

### Status cross-reference (don't re-write these)

- **B1** → `generation_test.dart` · **B8** → `watermark_test.dart` (strictly-less only) · **G13** → `generation_test.dart` · **G14** → `blocked_test.dart`
- **G5 (single-op)** → `push_test.dart` 'merged push settlement race' · **G8 (mid-page)** → `pull_test.dart` 'cursor advances only with page commit' · **G9 (close/reopen)** → `crash_restart_matrix_test.dart`
- The **E1 web worker harness** remains the single highest-value addition in this file.

---

### I. Merge-policy contract pins (audit #23–#26, #28/#29)

These audit items are "pin the exact semantics" problems — the fix **is** a contract-pinning test so the documented behavior is enforced and any refactor that changes it fails loudly. Most merge semantics are already tested; these pin the specific edges the audit called out.

**I1. Collection resolver replaces the whole merge** (#23) — a collection `RemoteWinsResolver` on a record with a *local-only* change: assert the resolver's output wins wholesale (local-only field IS dropped — that's the contract). Also assert `MergeContext.dirtyLocal`/`dirtyRemote` are exposed and provide a canonical field-aware collection resolver that preserves local-only fields; pin its output (remote wins conflicts, local-only changes survive).

**I2. Policies are top-level only** (#24) — with a nested `meta` conflict, assert a `fieldOverrides['meta.name']` entry is **never** consulted (dotted paths are inert; `meta` is atomic and remote-wins as a whole). Pin both: a top-level `meta` override fires; a dotted-path override does nothing.

**I3. SetUnion delete/re-add identity** (#25) — base `[A]`, local removes A, remote re-adds A → assert deletion wins (no tombstone, so a re-added element is indistinguishable from the original). Pin that a *new* element with the same value is treated the same as a re-add.

**I4. SetUnion equality edge** (#26) — `2` vs `2.0` in a set union are the **same** element (canonical/deep identity); nested map elements compare structurally. Pin the canonical-identity behavior so a switch to `canonicalize`-based identity is enforced.

**I5. AppendOnly identical-event dedup** (#28) — `["approved"]` + `["approved"]` → one element (pinned as the contract); document the "distinct events need an identity hook" gap, and pin the hook once it exists.

**I6. AppendOnly text transforms** (#29) — pin the exact trim / split-lines / dedup behavior: leading & trailing whitespace, embedded newlines, blank lines dropped, and the string-mode vs list-mode difference.

### J. Fast-path & visibility semantics (audit #19, #20, #39)

**J1. Fast-path event kinds** (#19) — pin the CURRENT contract: a `changed` hint with a record applies on a clean row; on a dirty/conflict/error/quarantine row it is NEVER applied (deferred to the pull); an unknown-row `changed` hint inserts. Then, when #19 is implemented, add `created`/`updated`/`deleted` kinds and assert each is handled explicitly (a `deleted` hint marks hidden — never a domain write).

**J2. Fast-path staleness matrix** (#19) — full tuple matrix on a clean row: `remote.updated < / == / > sr.remoteUpdated` — only `>` applies. (Complements B8.)

**J3. 404 → hide, never delete** (#20) — a targeted GET 404 (push `getRecord` / sweep `fetchBatch`) hides the row: `AccessState.hidden`, domain row + local edits retained, **nothing destroyed**. Make the AccessState assertion explicit.

**J4. Re-visible recovery cycle** (#39) — hidden → remote re-lists → sweep unhides (`hidden → visible`, ChangeSet published) → row refreshed → clean. Pin the full cycle end-to-end.

**J5. Inaccessible ≠ delete: no local work is ever destroyed** (#20/#39) — a record absent from a full sweep is hidden (not purged) while it carries ANY local work (dirty/conflict/error/quarantine/blocked); purge only fires for clean rows past `purgeHiddenAfter`. Assert across all five non-clean states explicitly.

### K. Sync invariants oracle (audit #44) — the crown jewel

The strongest coverage for the remaining sync work: a reusable `expectSyncInvariants(pocket, store, id)` helper asserting the 9-state invariants after **every** sync mutation, invoked from the soak/chaos/race tests so a regression anywhere in the state machine fails the oracle immediately.

**K1. Invariant helper** — for a given record, assert:
1. domain row exists ⇔ sync row exists (no orphan on either side);
2. `sync_state` ⇔ outbox consistency: `clean` ⇒ no outbox op; `dirty`/`inFlight`/`conflict`/`error`/`quarantine`/`blocked` ⇒ op present (or an explicit, documented exception);
3. `remote_updated` (applied watermark) never exceeds what was applied — on conflict/quarantine/skip it stays ≤ the last applied version;
4. `base_updated`/`base_json`/`base_hash` present iff the row is `dirty`/`inFlight`/`conflict` (or a valid partial state);
5. `access_state == visible` ⇔ `hidden = 0`; `hidden` ⇔ `access_state == hidden`;
6. `blocked`/`quarantine`/`error` rows carry `last_error` and a valid `next_retry_at` (or 0 when retry is disabled);
7. no `lp_op_queue` op depends on an outbox op in a terminal state (done/absent);
8. `last_seen_at` never regresses;
9. every `lp_conflicts` row has a matching sync row in `conflict` state and no dangling outbox op.

**K2. Invariant fuzz under chaos** — run `expectSyncInvariants` across **all** rows after every step of a multi-record chaos/soak run (concurrent patches, fast-path hints, sweep, maintenance/compact, restart) and assert no step leaves any record violating an invariant. This is the test that makes the remaining audit work (single lane, OCC, delete-policy) *safe to implement* — the oracle catches any state-machine regression the moment it appears.

### L. Transaction / durability / concurrency (audit #7, #8)

**L1. PRAGMA synchronous restored on the error path** (#8) — a transaction that throws mid-body must restore `synchronous = NORMAL` (finally-guarded). Assert the connection's `synchronous` is NORMAL after a successful transaction, a failed transaction, and a savepoint rollback.

**L2. No leaked FULL-synchronous interleaving** (#8) — while a FULL-durability transaction is open, a queued concurrent read must not observe the temporary setting (assert it reads the last committed value, and the connection pragma is unchanged for the interleaved op).

**L3. Write-fairness under a long read** (#7) — a barrier-gated long read followed by a queued write: assert the write completes after the read and ordering is FIFO (no starvation, no reorder, nothing lost). Pins the current serialize-through-write-queue contract.

**L4. Normal-durability + WAL restart** (#7) — `DurabilityClass.normal` outbox commits survive restart and a WAL-mode DB reopens cleanly. (Cross-ref F2; make the WAL-variant explicit.)

### M. OCC / idempotency / delete-conflict contract (audit #32/#33/#35/#37)

These define the **target behavior** for when the server enforces conditional writes — write them now so the implementation has a spec. Mark the not-yet-existing error type/API as `TARGET`.

**M1. Version-conflict → merge-and-retry** (#32) — `TARGET` error `RemoteVersionConflict(current)`: mock `updateRecord` throws it once; assert the pusher re-fetches, re-merges against `current`, retries, and converges exactly once — no lost edit, no duplicate remote record. Pin the retry bound (≤ N attempts then backoff).

**M2. Batch per-op version-conflict** (#33) — a batch response distinguishes `versionConflict` per op: assert the conflicted op is re-fetched/merged/retried while the healthy ops settle in the same cycle.

**M3. MissingRemotePolicy matrix** (#35) — for each policy value, the target behavior:
- `discardLocal` → local edit dropped, outbox op removed, row hidden/cleaned, no dead letter;
- `recreate` → the op becomes a create and re-pushes;
- `conflict` (recommended default) → an explicit conflict row opens, local edit preserved, nothing silently discarded.
Pin today's `missing_target` dead-letter as the pre-policy baseline so the change is visible.

**M4. opId idempotent retry** (#37) — retry of an already-applied opId returns "already applied" and the client settles exactly once (no duplicate, no misleading conflict) — both per-record and batch. (Complements G4.)

**M5. Duplicate-create recovery matrix** (#37/#36) — `DuplicateIdError` → GET → (a) fetched == local → settle; (b) fetched differs → merge; (c) GET 404 → `duplicate_id_missing` dead-letter (B9). Assert all three branches end with **exactly one** remote record.

---


