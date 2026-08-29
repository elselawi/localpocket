## Unreleased

- **Pagination is captured, not restated: `next()`/`prev()` on the page,
  `queryAfter` removed, `hasMore` renamed to `hasNext` end to end.**
  `TypedPage` now carries `hasNext`/`hasPrev` — snapshot facts about what
  the database observed on each side of the window when the page was built —
  plus `next()`/`prev()`, which re-run the exact captured query shape with
  no slots to re-state, so a shape mismatch cannot happen by construction.
  `next()`/`prev()` never throw: they return `null` at a terminal page and
  a terminal empty page when the observed rows vanished in between.
  `queryAfter` is gone: in-session continuation uses the page methods, and
  resuming a persisted cursor (app restart, deep link) re-states the shape
  once via `query(after: cursor)` — a cursor minted by a different shape
  still throws `StaleCursorError`. The rename goes all the way down: the
  raw `Page` field, the compiled-query worker envelope key (`hasMore` →
  `hasNext`, plus `firstRow` alongside `lastRow` for backward cursor
  minting — **web protocol v3**, stale cached workers fail the version
  handshake loudly), and every facade, harness, and smoke tool. Cursors are
  now bidirectional: one payload carries both boundary tuples, and backward
  pages walk the flipped order with an exact `hasPrev` (limit+1 check)
  while `hasNext` is answered by a one-row forward probe. Watchable
  queries are live snapshots and have no pagination surface.

- **Fixed: uniform-DESC continuation pages silently dropped NULL-sorted
  rows.** The row-value keyset fast path `(a, b) < (?, ?)` evaluates to NULL
  for rows whose sort value is NULL, so under a uniform-DESC order (e.g.
  `orderBy('qty', desc: true).orderBy('id', desc: true)`) a nullable sort
  column's trailing NULL group vanished from every continuation page. The
  fast path is now uniform-ASC only; uniform-DESC uses the NULL-aware
  OR-chain, which keeps the trailing NULL group.

- **Typed reads: `limit` is now required at compile time.** `query`,
  `ids`, `explain`, `watch`, `debugCompile`, and `search`
  take `required int limit`, and the `all:` flag is gone. Pass
  `Limits.unbounded` to run a read without a page size — the sentinel
  expands to the no-LIMIT path at the typed surface boundary, so the raw
  value never reaches compiled SQL or the worker wire. `distinct` keeps
  its 1000-value default cap (`Limits.distinctDefault`);
  `Limits.unbounded` lifts it. The runtime `MissingLimitError` remains
  reachable only through the raw builder API.

- **One import for the whole package.**
  `import 'package:localpocket/localpocket.dart';` now gives you everything:
  the typed data-model layer, the raw map API underneath it, the sync
  engine, the PocketBase adapter, and the files layer. The narrower
  entrypoints (`typed.dart`, `sync.dart`, `pocketbase.dart`) remain valid
  slices, and every symbol is exported from exactly one barrel — the sync
  state types (`SyncState`, `OutboxOp`, …), the merge engine, and the files
  API that used to be re-listed in two places now flow through `sync.dart`
  alone. The raw record-map seam interfaces stay package-internal by
  design.

- **Typed queries: one grammar, zero chaining.** Conditions and order terms
  are values built beside the descriptors — `Tasks.done.eq(false)`,
  `Tasks.priority.gt(0)`, `Tasks.dueAt.desc` — and every terminal lives on
  `TypedCollection` with the same named-argument slots: `query(where:,
  orderBy:, limit:, all:, includeArchived:, includeHidden:, select:)`
  returns its page directly, and `queryAfter`, `count`, `countDistinct`,
  `distinct`, `ids`, `explain`, `sum`/`min`/`max`/`avg`, `watch`, and
  `debugCompile` accept the same predicate shape. There is no query builder
  to lose or double-apply; the previous curried `query().where(field)(...)`
  form and the `TypedQuery`/`TypedSearch` builder classes are gone.
  Conditions compose into boolean trees with `&` (AND), `|` (OR), and
  `~` (NOT) — every predicate operator participates in every position, so
  `where:` is an AND-list of arbitrarily deep expressions and no separate
  OR parameter exists.

- **Typed writes: field-native values.** Writes are built beside the
  descriptors — `Tasks.title.set('Ship it')` — and collected into
  `put([...])`, `putAll([[...]])`, `patch(id, [...])`, and
  `patchAll({...})`. Wrong types, wrong stores, and writes to engine-owned
  columns are compile errors; `null` clears an optional field and cannot be
  spelled on a `.req()` field; explicit ids travel through `Writes.id` and
  undeclared keys through `Writes.extra`. The `Draft` builder and the
  curried `set(field)(value)` form are removed — there is exactly one write
  path.

- **`upsert` / `upsertAll`: create-or-merge writes.** `upsert` creates the
  record when it does not exist and, when it does, merges only the listed
  fields into it — unlike `put` (full replace) and unlike `patch` (throws
  when the record is missing). `upsertAll` batches the same semantics into
  one transaction with all-or-nothing rollback and in-order merging on
  duplicate ids. Available on the raw `Collection`, the typed surface
  (`tasks.upsert([Writes.id(id), Tasks.done.set(true)])`), and the web
  facade; sync behavior is unchanged — the outbox op carries the full
  merged payload, so a merge pushes like any other local edit.

- **Fixed: unrouted typed operators silently dropped their predicate.**
  `TypedQuery.whereCond` only routed `eq` and the range/text operators; a
  condition with operator `inValues`, `between`, or `isNull` fell through
  to the raw builder as an all-null no-op and the predicate vanished from
  the compiled SQL. Every operator the descriptors can build now has an
  explicit route with a per-operator compile parity test, and an unknown
  operator throws instead of silently no-oping.

- **Descriptor-side condition family with a full boolean algebra.** Every
  field descriptor carries `eq`, `inValues`, and `between` (plus
  `asc`/`desc` order terms), optional descriptors expose `isNull()`, and
  required (`NOT NULL`) columns make that unspellable. Conditions compose
  with `&`/`|`/`~`: `~field.eq(v)` replaces not-equal — it matches the same
  rows `field <> v` did, NULLs included — `~field.isNull()` replaces
  IS NOT NULL, and `field.eq(null)` reads as SQL `IS NULL` (SQL `= NULL`
  never matches, so the null form never reaches the builder as an equality
  binding); on required fields the null case is a compile error. Composite
  trees lower to one parenthesized WHERE clause on the engine side, so
  keyset pagination, watch, aggregates, and the web facade compose with
  them unchanged.

- **Engine-level typed-wrapper caching.** `TypedStoreRegistry` now memoizes
  the non-transactional wrappers it hands out: repeated `db.store(def)` /
  `facade.store(def)` calls return the identical `TypedCollection`, so any
  call site can grab handles once and hold them. Keys are definition
  instances (identity), failed builds are never memoized, and name bindings
  deliberately outlive close — `close()` on either facade expires only the
  dead connection's wrappers (`clearHandles`). `tx.store` bypasses the
  cache as before: transaction surfaces stay scoped to their transaction.

- **`openTyped(...)`: defs-first opening sugar.** Forwards each canonical
  definition's memoized schema to `LocalPocket.open`, so step-one wiring
  reads `stores: [Tasks.store]` without `.collectionSchema` ceremony on
  every platform (the conditional exports route the call to the right
  facade). The new `StoreDefs` list typedef keeps those declarations short
  and carries the manifest-role documentation (fresh-install creation,
  migrations, web worker pre-registration).

- **`TypedPocket`: application wiring as a base class.** Subclass once,
  override `path` (+ `stores`) and declare one-line typed getters through
  `handle(def)`; the base owns the hand-rolled mechanics:
  future-memoized `open()` that never double-opens under concurrency,
  failure-retryable opens, a guarded `pocket` getter with an actionable
  error instead of a crashing null assertion, idempotent `close()` with
  clean re-opening, and engine-backed handle sharing (handles expire on
  close; pre-close captures remain valid immutable snapshots). Advanced
  knobs stay one override away via `doOpen()` (worker assets, cipher, blob
  store, clocks). Both native and web facades are covered — the class sits
  on top of the public core seam only.

- **`StoreDef.keepUnsyncedArchives` + `StoreDef.prefetchFiles`.** The typed
  layer now mirrors the engine's last two schema-extra knobs: both overrides
  flow into the compiled schema verbatim (JSON-identical to a raw
  `CollectionSchema`), so every engine knob is now reachable without
  dropping to a raw declaration — soft-archived rows and file-ref
  prefetching included.

- **Typed index and FTS declarations.** The typed layer now provides
  `indexSpec([...])` and `ftsSpec([...])` helpers that derive column names from
  store-owned descriptors, preventing typos and cross-store declarations at
  compile time. The helpers preserve the raw `IndexSpec`/`FtsSpec` JSON and
  wire shapes and are intentionally non-const because descriptors are runtime
  objects. `DdlCompiler` now rejects undeclared raw index columns with a clear
  `SchemaRegistrationError`; the engine-owned `id`, `archived`, `hidden`, and
  `extra` columns remain valid index targets.

- **Typed data models (phase 1): the definition core.** `lib/typed.dart`
  now exports a typed boundary layer for declaring stores: `FieldDef` with
  per-kind descriptor pairs (`TextFieldOpt`/`TextFieldReq`,
  `IntFieldOpt`/`IntFieldReq`, `RealFieldOpt`/`RealFieldReq`,
  `BoolFieldOpt`/`BoolFieldReq`, `DateFieldOpt`/`DateFieldReq`,
  `DateTimeFieldOpt`/`DateTimeFieldReq`, `EnumFieldOpt`/`EnumFieldReq`,
  `JsonField`, `JsonListField`, `RefField`), the per-store `Fields` factory
  (`schema.text('title').req()`), and `StoreDef` — the store definition base with
  an explicit ordered `fields` list, schema extras overrides
  (`indexes`/`fts`/`migrations`/`conflictPolicy`/`documentMigrations`/
  `validator`), built-in `id`/`archived` system descriptors, a memoized
  `schema` getter compiling to the engine `CollectionSchema`, and `verify()`
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
  `archive`/`restore`/`purge` — no validation of its own, so
  required-missing, enum-membership, size-cap, and id-format violations
  surface as the engine's existing `ValidationException`s. Corrupt rows read
  through the raw path surface as typed `ValidationException`s (never silent
  wrong-typed values); cross-store misuse is a compile error and a
  `TypedStoreMismatchError` where casts defeat the type system. System
  fields (`id`, `archived`) are readable but not settable — `Draft.set`
  rejects them at compile time. A gate-tagged compile-fail harness
  (`test/typed/compile_fail/`) pins the compile-time guarantees.

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
- The README installation instructions are now version-gated:
  `tool/readme_version_check.dart` (release step `readme_version`) fails the
  release when the `localpocket:` constraint in the README's
  `## Installation` section does not name exactly the `pubspec.yaml`
  version, so the documented install snippet can no longer drift from the
  released package.

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