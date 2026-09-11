## Unreleased

### Fixed

- **Promoting an undeclared key to a declared field no longer loses data.**
  Declaring a field that previously lived only in `extra` used to leave the new
  column NULL, which masked the real value on every read and then dropped it
  from `extra` on the next write — silent local loss. Additive migrations now
  backfill the new column from `extra`, `decodeDbRow` prefers a non-null `extra`
  value over a NULL column (so the destructive-rebuild copy is lossless too),
  and a promoted value that does not match the declared field kind fails the
  migration with a typed error instead of being dropped.
- **Quarantined remote records are visible.** `SyncReport.quarantined` reports
  the per-store count and `SyncStatus.quarantined` / `SyncStatus.quarantineError`
  carry the count and the stored reason, so a record rejected during a pull no
  longer disappears behind a "successful" cycle.
- **Record ids now accept every shape PocketBase accepts.** The pattern is
  `^[A-Za-z0-9_]{15}$` (PocketBase's system `id` field: `min`/`max` 15,
  `^[a-zA-Z0-9_]+$`) instead of the narrower `^[a-z0-9]{15}$`. Ids such as
  `currency_______` or `ISO_country____` — accepted by a live server — were
  rejected locally and silently quarantined on pull. Generated ids remain
  lowercase alphanumeric. The docstring that claimed PocketBase enforces the
  narrower shape was wrong and is corrected.
- **Native sync works with no adapter import.** The native open path now
  installs the canonical PocketBase backend as the default, exactly as the web
  worker already did, so `db.attachPocketBaseSync(...).start()` works out of the
  box. `LocalPocketOptions.syncBackendFactory` still overrides it.
- `jsonList` rejects an element type JSON cannot decode (e.g.
  `jsonList<List<String>>`) at declaration time, naming the field and pointing
  at `jsonList<Object?>`, instead of failing on the first read with an opaque
  cast error.

### Changed

- **`keepUnsyncedArchives` now defaults to `true`.** Archiving a record that has
  never synced no longer hard-deletes it; set `keepUnsyncedArchives: false` on a
  store to restore the old delete-on-archive behavior.
- `SyncReportData.pulled` is documented as "records applied", not "candidates
  read": a record already applied by the realtime fast path is `skipped`.

### Added

- `db.wipe()` — a local reset. It drops every row of every store (archived and
  hidden included), all sync bookkeeping (outbox, sync rows, conflicts, dead
  letters, file references, blob metadata) and the sync cursors, then deletes the
  tracked blob bytes. Store registrations, schema versions and the migration
  ledger survive, so the handle stays usable and the next sync cycle re-pulls
  everything — the "restore from the server" / "switch accounts" / "clear local
  cache" operation. Local only: nothing is deleted on the server.
- `FileRef.name` and `FileRef.group`, plus `files.attach(group:)` and
  `files.list(group:)`. The caller's filename used to survive only inside the
  pending upload op, and PocketBase rewrites remote filenames with a random
  suffix, so the name a caller chose was unrecoverable after the upload. Both are
  now persisted on `lp_file_refs` as local metadata (never sent remote), and the
  group label is the pairing primitive for files that share one remote field
  (e.g. a DICOM original and its generated `.png` preview).
- `Writes.fromJson(store, doc)` maps a JSON document onto typed writes: declared
  keys become typed field writes (ISO-8601 dates and enum wire strings included),
  unknown keys become `Writes.extra`, `id` becomes `Writes.id`, and `archived` is
  left to `archive()`/`restore()`.
- README: the unsynced-archive default, the `watch(limit: unbounded)` performance
  trap, `Row.toJson()` versus the pushed payload, attachment field/filename
  semantics, quarantine visibility, the anonymous sync scope, `db.wipe()`, and an
  "Adopting existing JSON documents" recipe.

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