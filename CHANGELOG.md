## Unreleased

- **Typed data models (phase 5): documentation and enforcement.** The README
  and Flutter playground are now typed-first, including canonical
  `StoreDef` definitions, descriptor/draft CRUD, typed query/search/watch,
  enum wire strings, UTC `DateTime`, consumer-owned domain wrappers, and
  intent-named mutation helpers. Raw and typed handles remain interoperable
  over unchanged SQLite storage and worker wire formats. New raw-API
  allowlist, typed-surface, and compile-checked README gates are release
  requirements. Deterministic benchmarks verify the one-wrapper/no-map-copy
  point-read boundary and the one-draft-map/existing-engine batch-write path.
  The typed API is verified under native, JavaScript, WASM, and the production
  worker facade.

- **Typed data models (phase 1): the definition core.** `lib/typed.dart`
  now exports a typed boundary layer for declaring stores: `FieldDef` with
  per-kind descriptor pairs (`TextFieldOpt`/`TextFieldReq`,
  `IntFieldOpt`/`IntFieldReq`, `RealFieldOpt`/`RealFieldReq`,
  `BoolFieldOpt`/`BoolFieldReq`, `DateFieldOpt`/`DateFieldReq`,
  `DateTimeFieldOpt`/`DateTimeFieldReq`, `EnumFieldOpt`/`EnumFieldReq`,
  `JsonField`, `JsonListField`, `RefField`), the per-store `Fields` factory
  (`f.text('title').req()`), and `StoreDef` — the store definition base with
  an explicit ordered `fields` list, schema extras overrides
  (`indexes`/`fts`/`migrations`/`conflictPolicy`/`documentMigrations`/
  `validator`), built-in `id`/`archived` system descriptors, a memoized
  `schema` property compiling to the engine `CollectionSchema`, and `verify()`
  rejecting duplicate columns, foreign descriptors, and fields omitted from
  the `fields` list. `TypedStoreRegistry` binds each store name to its one
  canonical definition instance by **reference identity**; a non-identical
  same-name bind throws the new `TypedStoreMismatchError`. Descriptors wrap
  the engine's public `Field` factories, so storage, encoding, validation,
  sync, and the worker wire protocol are unchanged; typed CRUD, rows, and
  queries arrive in the next phase.

- **Typed data models (phase 2): typed CRUD and rows.** `db.store(def)` /
  `tx.store(def)` (native and web facade) return a `TypedCollection<S>` bound
  to the canonical definition instance; reads come back as `TypedRow<S>`
  (`rec(field)` call form, `.get`, `id`/`archived`/`extra`/`asMap`) and writes
  go through a mutable `Draft<S>` builder (`set`/`setId`/`setExtra`) that
  delegates straight to the engine's `put`/`putAll`/`patch`/`patchAll`/
  `archive`/`restore`/`purge`. `setExtra` accepts undeclared keys but rejects
  declared and engine-owned names, while required-missing, enum-membership,
  size-cap, and id-format validation remains in the engine and surfaces as its
  existing `ValidationException`s. Binding verifies the definition against the
  registered engine schema (a same-name schema with different fields,
  constraints, or version throws `TypedStoreMismatchError`) and resolves the
  store before touching the identity registry. Corrupt rows read
  through the raw path surface as typed `ValidationException`s (never silent
  wrong-typed values); cross-store misuse is a compile error and a
  `TypedStoreMismatchError` where casts defeat the type system. System
  fields (`id`, `archived`) are readable but not settable — `Draft.set`
  rejects them at compile time. A gate-tagged compile-fail harness
  (`test/typed/compile_fail/`) pins the compile-time guarantees.

- **Typed data models (phase 3): typed queries, search, and watch.**
  `TypedQuery<S>` delegates filters, ordering, projections, keyset pages,
  counts, distinct values, numeric aggregates, ids, explain plans, and
  `debugCompile()` to the existing query builder; descriptor codecs encode
  enum/date-time predicate values at the boundary, while kind-scoped
  `.gt`/`.gte`/`.lt`/`.lte` and text LIKE operators make invalid query
  combinations compile errors. `TypedPage<S>` and projected `TypedRow<S>`
  wrap query results, typed FTS hits expose `id`/`score` plus `fetch()`, and
  `query().watch()` wraps the existing `QueryWatcher` stream without adding
  an invalidation path. Native and web facade seams remain additive and use
  the unchanged engine/wire plan protocol.

- **FTS: fuzzy (substring) search and consumer-declared character parity
  rules.** `FtsSpec` gains two independently toggleable options, both off by
  default: `fuzzy: true` switches the store's FTS table to SQLite's trigram
  tokenizer so queries match substrings anywhere in a value instead of whole
  tokens only (requires SQLite >= 3.34.0; terms under 3 characters throw a
  typed `ValidationException` since trigrams cannot match them), and
  `normalize: FtsNormalization(rules: {...})` applies consumer-declared
  character equivalences to BOTH the indexed text and the query — e.g.
  `{'أ': 'ا', 'إ': 'ا', 'آ': 'ا'}` makes all Arabic alef forms match each
  other. Normalization runs at write time inside generated FTS triggers via
  a per-store SQL user function and at query time in pure Dart before the
  term is bound, so the web compiled-plan transport works unchanged.
  Changing an FTS configuration on an existing store now rebuilds the index
  automatically at registration (ledgered in `lp_migrations` as
  `fts:<store>`).

- **BREAKING (field encryption):** ciphertext format is now versioned and
  AAD-bound, and the cipher no longer ships a hand-rolled AES engine.
  `AesGcmFieldCipher` output is `0x01 ‖ nonce(12) ‖ ciphertext ‖ tag(16)`
  (was `nonce‖ct‖tag`), encrypted through `package:cryptography`'s AES-256-GCM
  (Web Crypto on browsers; the package's audited pure-Dart engine on native
  and as the web-worker fallback). Every encrypted value is now authenticated
  against `store \x00 field \x00 recordId` (see `fieldAad`), so a ciphertext
  swapped between two same-shaped fields or records fails tag verification
  instead of decrypting silently. `decrypt` rejects unknown version bytes
  loudly (no silent migration), so a future algorithm change has a hook. The
  `FieldCipher` interface's `encrypt`/`decrypt` (and async/batch variants) now
  accept an optional `aad`, and `encodeFieldValue` requires `recordId`.
  **Migration:** values written by ≤0.1.x (unversioned, unbound ciphertext)
  must be re-encrypted with the new format before reading; reads of legacy
  ciphertext throw a `StateError` naming the version. See the threat-model
  note in `lib/src/core/cipher.dart` and the README.

- **BREAKING (files): volatile blob storage must now be opted into.** A blob
  store whose bytes do not survive restarts (e.g. the web in-memory fallback
  when OPFS is unavailable, or `MemoryBlobStore`) no longer accepts
  attachments silently: `LocalPocketFiles.attach` (and the web
  `WebLocalPocketFiles.attach`) throw a `StateError` before storing any bytes
  unless `allowVolatileBlobs: true` is passed. The new
  `db.files.isBlobStorageDurable` flag reports whether the configured store is
  durable (web: OPFS-backed) so apps can surface the limitation or gate their
  UI. Previously the web worker kept blob bytes only in memory while the
  SQLite metadata survived — the attachment appeared stored but vanished on
  reload with nothing in the API indicating it.

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
- The `sqlite3` dependency is now pinned to the tested 3.x major
  (`^3.5.1`, was `>=2.4.0 <4.0.0`), so the FFI foundation can no longer float
  across a major version boundary between resolutions. The release gate
  `tool/dependency_check.dart` now fails any runtime dependency constraint
  that spans more than one major version (policy shared with
  `tool/dependency_policy.dart`).

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