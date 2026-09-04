## Unreleased

### Fixed

- **Web: conflict policies no longer fail the open.** The page→worker schema
  reconstruction dropped the whole `conflictPolicy` (including the pure-data
  `editsUnarchive` and `missingRemote` options), so any non-default policy
  failed the manifest fingerprint handshake with a misleading
  "different schemas" error. Policies now cross in a dedicated wire
  envelope and both sides compile identical manifests again.

### Added

- **Executable schema features on web.** Custom conflict resolvers, store
  validators, document migrations, and migration backfill transforms now
  run on the worker runtime: closure-free built-in resolvers cross as data
  and execute in the worker; everything else executes on the page through a
  new callback channel and must be registered per store in
  `LocalPocketOptions.pageCallbacks` (matched by identity / coverage).
  Unregistered executable features still fail the web open with
  `UnsupportedSchemaFeatureError`; native platforms are unchanged and
  ignore the registry.

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