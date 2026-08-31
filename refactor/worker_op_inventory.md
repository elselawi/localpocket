# Worker operation inventory → destination command contract

Complete inventory of `lib/src/web/protocol.dart` string operations (the
`WireOp`-style registry), the worker event stream, and the destination sealed
command each becomes. This is the checklist for Phase 7 family cutovers.

Current wire envelope: `{v, i, op, a}` — version, request id, op string, args
map. Destination envelope: `{protocolVersion, requestId, sessionId?,
requestTag, typed payload}` with a named result and a typed error codec (§7.4).

## 1. Lifecycle (6 ops + 2 events)

| Op / event | Destination command → result | Notes |
|---|---|---|
| `open` | `OpenRequest` → `OpenResult` | manifest replaces schema JSON registration; capabilities authoritative |
| `capabilities` | folded into `CapabilitiesRequest` → `CapabilitiesResult` | ✔ CUT OVER (2026-08-31) — the contract's `CapabilitiesResult` now carries the storage facts (`storage`/`durable`/`journal`) alongside the engine snapshot; the facade reconciles over the contract |
| `health` | folded into lifecycle ping on `OpenRequest` (DELETE as separate op) | ✔ |
| `close` | `CloseRequest` → `CloseResult` | fails all pending + streams with `DatabaseWorkerClosedException`; consolidates with the files/lifecycle collapse (family 8) |
| event `worker_event` | `Event` stream (sealed `Event` variants) | query/single-record watches now cancel over the contract; the envelope remains for `conflicts_watch` until that family cuts over (recorded deviation) |
| event `record_event` | `CommittedChange` | ✔ CUT OVER (2026-08-31) — the contract's `CommittedChange` now carries per-record detail (origin, action, old/new payloads, changedFields); one committed envelope feeds every record-event stream. Old stream deleted. |
| event `auth_required` | `AuthRequiredEvent` | rides with the sync family |

Error tags `protocol_mismatch`, `worker_closed`, `protocol_envelope`, `aborted`
→ typed errors `ProtocolMismatchError`, `DatabaseWorkerClosedException`,
`ProtocolDecodeError`; `localpocket`/`unknown` are envelope constants (deleted
with the string registry).

## 2. Store family (3 ops)

| Op | Destination command → result | Notes |
|---|---|---|
| `get` | `GetRequest(store, id, select?, context?)` → `RowResult` | ✔ CUT OVER (2026-08-31) — old op carried no projection facts (audit in ledger); deleted with `_handleGet`. |
| `mutate_batch` | `MutateRequest(store, mutation, context?)` → `MutationResult` | ✔ CUT OVER (2026-08-31) — facade batches map to `MutationPutAll`/`MutationUpsertAll`/`MutationPatchAll`; explicit `DurabilityClass.full` rides a contract tx session. Deleted with `_handleMutateBatch`/`_parseDurability`. |
| `compiled_query` | `QueryRequest(store, ir, context?)` → `QueryPageResult` | ✔ RETIRED (2026-08-31) — tx-scoped reads ride the contract's session-aware `QueryRequest`/`SearchRequest`; plan shipping across the runtime boundary is gone. |

## 3. Maintenance family (6 ops)

All six CUT OVER (2026-08-31); the old ops are deleted:

| Op | Destination command → result | Notes |
|---|---|---|
| `analyze` | `AnalyzeRequest(store)` → `OkResult` | ✔ |
| `wal_checkpoint` | `WalCheckpointRequest` → `OkResult` | ✔ |
| `vacuum` | `VacuumRequest` → `OkResult` | ✔ — `pages` hint not carried (deferred field, no callers) |
| `prune_outbox` | `PruneOutboxRequest` → `PruneOutboxResult` | ✔ — `maxEntries` already a no-op |
| `compact` | `CompactRequest(store, olderThanMs)` → `CompactResult` | ✔ — `nowMs` not carried (deferred field, no callers) |
| `run_maintenance` | `RunMaintenanceRequest(compactOlderThanMs)` → `OkResult` | ✔ — NEW contract variant added by this family |

## 4. Transaction family (8 ops)

| Op | Destination command | Notes |
|---|---|---|
| `tx_begin` | `BeginTransactionRequest(readOnly, durability)` → `BeginTransactionResult(contextId)` | ✔ CUT OVER (2026-08-31) — kernel-minted string sessions; the int-id worker handshake is deleted |
| `tx_get` | `GetRequest` + `context` | ✔ CUT OVER (2026-08-31) |
| `tx_mutate_batch` | `MutateRequest` + `context` | ✔ CUT OVER (2026-08-31) |
| `tx_savepoint` | `SavepointRequest(context, name)` | ✔ CUT OVER (2026-08-31) — facade mints names |
| `tx_rollback_to` | `RollbackToRequest(context, name)` | ✔ CUT OVER (2026-08-31) |
| `tx_release` | `ReleaseRequest(context, name)` | ✔ CUT OVER (2026-08-31) |
| `tx_commit` | `CommitTransactionRequest(context)` → `CommitResult` | ✔ CUT OVER (2026-08-31) |
| `tx_rollback` | `RollbackTransactionRequest(context)` | ✔ CUT OVER (2026-08-31) |

## 5. Watch family (3 ops)

| Op | Destination command | Notes |
|---|---|---|
| `watch_query` | `WatchRequest(ir)` → subscription id; snapshot events are kernel-shaped pages | ordered query ⇒ order-sensitive digest (§10.5) |
| `watch_one` | `WatchOneRequest(store, id)` | ✔ CUT OVER (2026-08-31) — snapshots are single-row `WatchSnapshot` events on the contract stream (an empty item list means "absent"); the kernel validates the record decodes before registering |
| `watch_cancel` | `CancelWatchRequest(subscriptionId)` | ✔ CUT OVER (2026-08-31) — the int-id op is deleted; every watch cancels over the contract |

Watches inside transactions are rejected with the same typed error on both
runtimes (§6.7).

## 6. Sync family (9 ops / events)

| Op | Destination command → result | Notes |
|---|---|---|
| `sync_start` | `SyncStartRequest` → `SyncStartResult` | starts sync **and** realtime (§6.9) |
| `sync_stop` | `SyncStopRequest` → `SyncStopResult` | |
| `sync_now` | `SyncNowRequest` → `SyncReportResult` | full report incl. `blocked`, `discarded`, quarantine counters |
| `sync_status` | `SyncStatusRequest` → `SyncStatusResult` (or status rides the event stream) | complete codec test required (§4.9) |
| `sync_pause` / `sync_resume` | `SyncPauseRequest` / `SyncResumeRequest` | |
| `sync_update_auth` | `SyncUpdateAuthRequest(token)` | dedicated typed auth bridge; token never persisted (§6.9) |
| `sync_set_connectivity` | `SyncSetConnectivityRequest(online)` | |
| event `auth_required` | `AuthRequiredEvent` | page calls its token provider |

## 7. File family (10 ops)

All eleven CUT OVER (2026-08-31); the old ops are deleted. Bounded upload
sessions live in the KERNEL now (`kernel/file_sessions.dart`), and downloads
stream under caller-driven credit.

| Op | Destination command | Notes |
|---|---|---|
| `file_upload_begin` | `FileBeginUpload` → `FileUploadSessionResult` | ✔ kernel-minted string session + accepted `maxChunkBytes` |
| `file_upload_chunk` | `FileChunk(session, bytes)` | ✔ binary-aware value codec (base64 tag) |
| `file_upload_finish` | `FileFinish(session)` → `FileRefResult` | ✔ typed `FileRefData` |
| `file_upload_abort` | `FileAbort(session)` | ✔ |
| `file_list` | `FilesListRequest(recordId, field?)` → `FileRefsResult` | ✔ |
| `file_open` | `FileOpen(ref)` → `FileOpenResult` | ✔ stream id; chunks flow as events |
| (download chunks) | `FileChunkEvent` + `FileCreditRequest` flow control | ✔ the page never receives a whole buffered file in one reply |
| `file_remove` | `FileRemoveRequest(ref)` | ✔ |
| `file_gc` | `FileGcRequest(cutoff)` → `FileGcResult` | ✔ |
| `file_enforce_storage_cap` | `EnforceStorageCapRequest(bytes)` → `FileCapResult` | ✔ |
| `file_storage_status` | `StorageStatusRequest` → `StorageStatusResult` | ✔ honest volatile-storage reporting |

## 8. Conflict family (6 ops)

All six CUT OVER (2026-08-31); the old ops are deleted.

| Op | Destination command → result | Notes |
|---|---|---|
| `conflicts_list` | `ConflictsListRequest(store)` → `ConflictsResult` | ✔ typed `ConflictData` snapshots |
| `conflicts_get` | `ConflictGetRequest(store, id)` → `ConflictResult` | ✔ |
| `conflicts_resolve` | `ResolveConflictRequest(store, id, merged)` → `OkResult` | ✔ explicit typed command, never a closure (§6.10) |
| `conflicts_accept_local` | `AcceptLocalRequest(store, id)` → `OkResult` | ✔ uses common mutation/event path |
| `conflicts_accept_remote` | `AcceptRemoteRequest(store, id)` → `OkResult` | ✔ |
| `conflicts_watch` | `ConflictsWatchRequest(store)` → `WatchStartedResult` + `ConflictsSnapshot` events | ✔ |

## 9. Known wire-surface gaps to close during cutovers

- `getAll` / bulk reads are native-only today; the destination contract has
  `RowsRequest` from the start.
- Search (`search`) has no dedicated wire op (folded into `compiled_query`);
  destination: `SearchRequest(SearchIR)`.
- Aggregates / distinct / ids / count ride `compiled_query` today; destination:
  `QueryIR` terminal kinds (§10.2).
- Projection decode info travels as `decodeColumns` today; the IR carries
  projection field identifiers and the kernel decodes (§4.5).
- Coarse `worker_event` vs detailed `record_event` are separate streams today;
  destination: one `CommittedChange` envelope with typed views (§4.4).
- Explanatory/diagnostics (`explain`) does not exist on the wire; destination:
  `ExplainRequest` → internal explain result.

## Phase 7 cutover order (fixed)

CRUD/batch ✔ (2026-08-31) → query/search/cursors ✔ (2026-08-30) → watches/events ✔
(2026-08-31) → transactions ✔ (2026-08-31; `QueryPlan` stays kernel-internal) →
maintenance/capabilities ✔ (2026-08-31; storage facts joined the contract and
`capabilities` retired with the files family) → conflicts ✔ (2026-08-31;
`worker_event` is fully retired) → files/streams ✔ (2026-08-31; upload sessions
and download flow control are kernel-owned) → sync/auth/status/realtime →
close/lifecycle. Old and new envelopes may coexist per family; both must call
the same kernel services.
