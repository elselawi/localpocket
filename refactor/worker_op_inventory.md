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
| `capabilities` | folded into `OpenRequest`/`CapabilitiesRequest` → `CapabilitiesResult` | page never guesses (§4.11) |
| `health` | folded into lifecycle ping on `OpenRequest` (DELETE as separate op) | |
| `close` | `CloseRequest` → `CloseResult` | fails all pending + streams with `DatabaseWorkerClosedException` |
| event `worker_event` | `Event` stream (sealed `Event` variants) | replaces generic envelope |
| event `record_event` | `CommittedChange` | one committed envelope feeds native invalidation + web events (§4.4, Rule 7) |

Error tags `protocol_mismatch`, `worker_closed`, `protocol_envelope`, `aborted`
→ typed errors `ProtocolMismatchError`, `DatabaseWorkerClosedException`,
`ProtocolDecodeError`; `localpocket`/`unknown` are envelope constants (deleted
with the string registry).

## 2. Store family (3 ops)

| Op | Destination command → result | Notes |
|---|---|---|
| `get` | `GetRequest(store, id, select?, context?)` → `RowResult` | adds `getAll` via `RowsRequest` (exists natively, missing on wire) |
| `mutate_batch` | `MutateRequest(store, mutation, context?)` → `MutationResult` | carries typed `Mutation`, not an args map |
| `compiled_query` | `QueryRequest(store, ir, context?)` → `QueryPageResult` | **page stops receiving SQL plans**; kernel shapes rows/`hasNext`/`hasPrev`/cursors (§10.3) |

## 3. Maintenance family (6 ops)

| Op | Destination command → result |
|---|---|
| `analyze` | `AnalyzeRequest(store)` → `AnalyzeResult` |
| `wal_checkpoint` | `WalCheckpointRequest` → `WalCheckpointResult` |
| `vacuum` | `VacuumRequest` → `VacuumResult` |
| `prune_outbox` | `PruneOutboxRequest` → `PruneOutboxResult` |
| `compact` | `CompactRequest(store, …)` → `CompactResult` |
| `run_maintenance` | `RunMaintenanceRequest` → `RunMaintenanceResult` |

## 4. Transaction family (8 ops)

| Op | Destination command | Notes |
|---|---|---|
| `tx_begin` | `BeginTransactionRequest(readOnly, durability)` → `BeginTransactionResult(contextId)` | worker session model (§11.3) |
| `tx_get` | `GetRequest` + `context` | context rides the request |
| `tx_mutate_batch` | `MutateRequest` + `context` | |
| `tx_savepoint` | `SavepointRequest(context, name)` | manual savepoints preserved |
| `tx_rollback_to` | `RollbackToRequest(context, name)` | |
| `tx_release` | `ReleaseRequest(context, name)` | |
| `tx_commit` | `CommitTransactionRequest(context)` → `CommitResult` | events post-commit only |
| `tx_rollback` | `RollbackTransactionRequest(context)` | page sends rollback before rethrowing |

## 5. Watch family (3 ops)

| Op | Destination command | Notes |
|---|---|---|
| `watch_query` | `WatchRequest(ir)` → subscription id; snapshot events are kernel-shaped pages | ordered query ⇒ order-sensitive digest (§10.5) |
| `watch_one` | `WatchOneRequest(store, id)` | |
| `watch_cancel` | `CancelWatchRequest(subscriptionId)` | |

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

| Op | Destination command | Notes |
|---|---|---|
| `file_upload_begin` | `FileBeginUpload` → session id + accepted limits | bounded sessions (§11.4) |
| `file_upload_chunk` | `FileChunk(sessionId, bytes)` | binary-aware value codec |
| `file_upload_finish` | `FileFinish(sessionId)` → immutable `FileRef` | |
| `file_upload_abort` | `FileAbort(sessionId)` | |
| `file_list` | `FilesListRequest(recordId, field?)` → `List<FileRef>` | same `FileRef` as native (§4.7) |
| `file_open` | `FileOpen(ref)` → stream id | |
| (download chunks) | `FileChunkEvent` + `FileCredit` flow control | page must not receive whole buffered file |
| `file_remove` | `FileRemoveRequest(ref)` | |
| `file_gc` | `FileGcRequest(cutoff)` → `GcResult` | |
| `file_enforce_storage_cap` | `EnforceStorageCapRequest(bytes)` → `CapResult` | |
| `file_storage_status` | `StorageStatusRequest` → `StorageStatusResult` | honest volatile-storage reporting |

## 8. Conflict family (6 ops)

| Op | Destination command | Notes |
|---|---|---|
| `conflicts_list` | `ConflictsListRequest(store)` → typed conflict snapshots | |
| `conflicts_get` | `ConflictGetRequest(store, id)` | |
| `conflicts_resolve` | `ResolveConflictRequest(conflictId, merged: [Write…])` | explicit typed command, never a closure (§6.10) |
| `conflicts_accept_local` | `AcceptLocalRequest(conflictId)` | uses common mutation/event path |
| `conflicts_accept_remote` | `AcceptRemoteRequest(conflictId)` | |
| `conflicts_watch` | `ConflictsWatchRequest(store)` | |

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

CRUD/batch → query/search/cursors → watches/events → transactions →
maintenance/capabilities → conflicts → files/streams → sync/auth/status/realtime
→ close/lifecycle. Old and new envelopes may coexist per family; both must call
the same kernel services.
