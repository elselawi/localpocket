## Unreleased

### BREAKING

- **`LocalPocketOptions.pageCallbacks` is now a `PageCallbacks` container
  instead of a per-store map.** The container carries the per-store
  executable-feature registry under `stores` (whose entries work exactly
  like the old map values — auto-registration, id-conflict merge, and
  coverage checks are unchanged) plus database-level slots for the sync
  backend and blob store that execute on the page
  (`PageCallbacks.syncBackendFactory`, `PageCallbacks.blobStore`).
  Migration: replace the map literal with the container —

  ```dart
  // before
  pageCallbacks: {
    'posts': StorePageCallbacks(validator: validatePost),
  },
  // after
  pageCallbacks: PageCallbacks(
    stores: {
      'posts': StorePageCallbacks(validator: validatePost),
    },
  ),
  ```

- **Removed the deprecated resolver aliases `SetUnionResolver` and
  `AppendOnlyResolver`.** Migration: use
  `SetUnionWithDeletionWinsResolver` instead of `SetUnionResolver`; use
  `AppendOnlyListResolver` (list values) or `AppendOnlyLinesResolver`
  (string values) instead of `AppendOnlyResolver`.
- **Removed `ConflictPolicy.defaults`.** It was a non-const duplicate of
  the constructor. Migration: replace
  `ConflictPolicy.defaults(collectionResolver: r, ...)` with
  `ConflictPolicy(collectionResolver: r, ...)` (the constructor is const).
- **Removed the synchronous merge entry points `merge3Way` and
  `MergeEngine.runSync`.** Production merge paths (pull/push) already used
  the async engine; the sync wrappers rejected async resolvers loudly and
  duplicated the surface. Migration: replace `merge3Way(...)` with
  `await merge3WayAsync(...)` and `MergeEngine.runSync(...)` with
  `await MergeEngine.runAsync(...)` (make the enclosing function async).
- **Removed `LocalPocketOptions.now`.** The injectable clock closure was
  native-only (code cannot cross the worker boundary) and duplicated what
  `clockOffsetMs` already provides as data on every platform. Migration:
  replace `now: () => fixedTime` with the equivalent offset
  (`clockOffsetMs: fixedTime.millisecondsSinceEpoch -
  DateTime.now().millisecondsSinceEpoch`) — a shift composes with the real
  clock identically on web and native. Kernel-level tests that need an
  absolute fixed clock keep the internal engine seam (`LocalPocket.open`
  in `src/kernel`, `now:` parameter).

### Fixed

- **Web: `groupCommitWindow` and `txSessionTtl` are honored on the worker
  runtime.** Both options were silently dropped at the worker boundary and
  the worker booted the kernel with defaults. They now cross the open
  envelope as millisecond integers and are strict-parsed (a present
  wrong-typed or out-of-range value fails the open with a typed error).
- **Web: the page-callback channel honors `bootstrap.requestTimeout`.**
  Worker→page callback invocations used a hardcoded 30-second bound; they
  now use the same request timeout the page applies to its own worker
  requests (`callbackTimeoutMs` in the open envelope). A non-positive
  timeout is rejected; absent falls back to the documented default.
- **Web: conflict policies no longer fail the open.** The page→worker schema
  reconstruction dropped the whole `conflictPolicy` (including the pure-data
  `editsUnarchive` and `missingRemote` options), so any non-default policy
  failed the manifest fingerprint handshake with a misleading
  "different schemas" error. Policies now cross in a dedicated wire
  envelope and both sides compile identical manifests again.

### Added

- **Web: caller-supplied blob stores now run on the page.** A store
  configured in `PageCallbacks.blobStore` executes entirely on the page;
  the worker receives a transparent proxy that forwards every `BlobStore`
  method over the callback channel. Bytes cross chunked (256 KiB) in both
  directions; `expectedSha256`/`expectedSize` are verified where the bytes
  are reassembled on the page; `modifiedAt` keeps its honest null (GC
  orphan-aging depends on it) and `isDurable` reflects the page store's
  durability, not the worker's. `BlobMissingError` (with its hash) and
  `BlobStorageException` reconstruct as the same types, so callers
  classify via `isBlobMissing` exactly as on native. Without the container
  slot the worker keeps its OPFS-backed store; the top-level
  `LocalPocketOptions.blobStore` field stays rejected on web.

- **Web: caller-supplied sync backends now run on the page.** A backend
  configured in `PageCallbacks.syncBackendFactory` executes entirely on the
  page (its HTTP client, token provider, and realtime connection never
  cross the worker boundary); the worker receives a transparent proxy that
  forwards every `SyncBackend` method over the callback channel. Typed sync
  errors reconstruct as their exact subtypes across the channel, file
  uploads and downloads cross chunked (256 KiB), realtime `BackendHint`s
  stream page→worker, and the page backend reads the kernel's live token
  source (so `syncUpdateAuth` reaches it without a rebuild). The proxy is
  idempotency-transparent: `PushOp.opId` and client record ids cross
  untouched, and no retries are added. The top-level
  `LocalPocketOptions.syncBackendFactory` field remains rejected on web
  (the worker configures its canonical PocketBase factory there). The
  sync seam types (`SyncBackend`, `SyncBackendFactory`, `SyncTokenSource`,
  `RemoteRecord`, `PushOp`, `PushResult`, `BackendHint`, the `SyncError`
  taxonomy, `pbMaxPage`) are now exported from the package barrel, since
  custom backends are a public extension point.

- **`LocalPocketOptions.clockOffsetMs` — an injectable clock that works on
  web.** The injectable `now` closure remains native-only (code cannot
  cross the worker boundary), but this data-style millisecond shift
  crosses the open envelope on every platform: the worker applies it on
  top of its system clock, and native applies it on top of whichever clock
  is configured. Strict-parsed (a present wrong-typed value fails the
  open with a typed error; negative offsets are valid).
- **Web: page callbacks auto-register.** Executable schema features
  (custom conflict resolvers, store validators, document migrations, and
  migration backfill transforms) no longer require an explicit
  `LocalPocketOptions.pageCallbacks` registry: the web open auto-collects
  every executable member each schema declares and serves it under a
  deterministic id (`'<store>:collectionResolver'`,
  `'<store>:field:<dotted.path>'`, `'<store>:validator'`,
  `'<store>:documentMigration:<version>'`, `'<store>:transform:<toVersion>'`).
  An explicit registry merges over the auto-collected one — explicit
  entries win on id conflict, auto-collected entries fill the gaps — and
  all existing strictness (coverage equality, unused-registry rejection,
  identity matching) still applies to the merged result. Existing code
  that registers everything explicitly behaves exactly as before.
- **Executable schema features on web.** Custom conflict resolvers, store
  validators, document migrations, and migration backfill transforms now
  run on the worker runtime: closure-free built-in resolvers cross as data
  and execute in the worker; everything else executes on the page through a
  new callback channel and must be registered per store in
  `LocalPocketOptions.pageCallbacks` (matched by identity / coverage).
  Unregistered executable features still fail the web open with
  `UnsupportedSchemaFeatureError`; native platforms are unchanged and
  ignore the registry.

### Changed

- **Web: schema manifest mismatches name the divergence.** The worker's
  generic "compiled different schemas" error now diffs the manifest
  descriptors of both sides (`hasValidatorCallback`,
  `hasCollectionResolver`, `fieldOverrides`, `editsUnarchive`,
  `missingRemote`, `documentMigrationVersions`, `hasTransform`,
  `transformVersions`, `keepUnsyncedArchives`, version) and lists exactly
  what disagrees — plus an explicit note when no store-policy envelope was
  received (the stale-worker-asset signature).
- **`WebCipherUnsupportedError` is now a typed kernel error.** It extends
  `ValidationException` in the sealed `LocalPocketError` family, so one
  `catch (LocalPocketError)` covers it like every other caller-facing
  failure. The class name, message, and `toString()` are unchanged;
  existing `is WebCipherUnsupportedError` handlers keep working.

## 0.2.0

- major refactors, prepearing for release

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