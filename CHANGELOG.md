## Unreleased

- **Web uploads now enforce an aggregate memory quota and a session TTL.** The
  worker's `UploadSessionRegistry` previously buffered every upload chunk in memory with a
  4 GiB per-file cap, no aggregate quota, and no expiry — concurrent or wedged uploads could
  pin the whole file stream in RAM until the worker died. The default per-file cap is lowered
  to 256 MiB, a new aggregate declared-byte quota (default 512 MiB) rejects `file_upload_begin`
  requests that would exceed it, and each session expires after an idle TTL (default 30 min,
  refreshed on every accepted chunk). Expired sessions are reclaimed lazily on access and by a
  periodic worker sweep. All limits are constructor-injectable on `UploadSessionRegistry`.

- **BREAKING (realtime):** `PbRealtime.reconnectDelay` was replaced by exponential reconnect
  backoff. The SSE reconnect loop now grows the delay across consecutive failed connects
  (`backoffBase`, default 200 ms, doubling up to `backoffCap`, default 5 min) with `0.5..1.5`
  jitter, and resets to the base delay after any successful connect — a down server no longer
  triggers a fixed 5×/s reconnect storm. New constructor knobs: `backoffBase`, `backoffCap`,
  `jitter`, and `delayFor` (injectable for deterministic tests).

- **`TokenProvider.identity` no longer has a shared constant default.** The
  old default `'token-identity'` silently collapsed every provider that did
  not override `identity` into one sync scope per server — cursors,
  watermarks, and sync state could bleed across accounts (and account
  switching could apply one user's sync state to another). `identity` now
  defaults to `null`; when neither the provider nor `PocketBaseBackend.identity`
  provides one, accessing `scopeId` throws a clear `StateError` instead of
  sharing a scope. Pass a stable per-account id (`identity: 'user-123'` on
  the backend, or override `TokenProvider.identity`). Note: token values
  rotate on refresh, so a fingerprint of the current token value is NOT a
  stable identity.
- **BREAKING: `between` is now inclusive on both ends.**
  `where(field, between: (start, end))` compiles to `>= start AND <= end`
  (SQL `BETWEEN` semantics). Previously it was half-open `[start, end)`,
  silently dropping every record whose value equaled `end` — e.g. a
  date-range filter losing records stamped exactly at the range's upper
  bound. To keep the old behavior, replace
  `where(f, between: (a, b))` with `where(f, gte: a, lt: b)`. Pinned by the
  query-edge corpus, the predicate SQL golden, and the compiled-plan tests.
- `pruneOutbox` no longer evicts non-clean outbox ops under the `maxEntries`
  cap: evicting `error`/`inFlight`/`quarantine` ops silently deleted unsynced
  local edits and left dangling `op_id`s. Pruning is now strictly clean-only
  (settled or orphaned ops are removed; every pending op is retained).
  `maxEntries` is kept for API compatibility but is no longer enforced.

## 0.1.1

- Using sqlite3 instead of sqflite
- Added dedicated-worker web support with OPFS/IndexedDB storage, compiled
  query plans, browser smoke coverage, FTS5, files, field encryption, and
  conflicts bridges.
- Added unified release validation through `tool/release.dart`.
- Documented current web limits: TRUNCATE journaling, SQLCipher exclusion,
  single-tab sync, unsupported dedicated-worker `:memory:` mode, and the
  distinction between Playwright WebKit and real Safari.

## 0.1.0

- Initial release of localpocket.