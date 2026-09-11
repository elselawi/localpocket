## 0.3.0

- Declaring a field that already lived in `extra` no longer loses the value:
  migrations backfill the new column and a NULL column no longer masks it.
- Record ids now accept every shape PocketBase accepts (`[A-Za-z0-9_]{15}`).
- `keepUnsyncedArchives` defaults to `true`: archiving a never-synced record no
  longer hard-deletes it.
- Quarantined remote records are visible in `SyncReport.quarantined` and
  `SyncStatus.quarantineError` instead of a silently "successful" pull.
- `jsonList` rejects element types JSON cannot decode at declaration time.
- Added `db.wipe()`: drops all local rows, sync bookkeeping, cursors and blob
  bytes, keeps the database identity, and re-pulls on the next cycle.
- Added `FileRef.name` / `FileRef.group`, `files.attach(group:)`,
  `files.list(group:)`, and `Writes.fromJson(store, doc)`.
- Added a default PocketBase sync backend on native, so
  `attachPocketBaseSync(...).start()` works without importing the adapter.
- README: watch-limit performance warning, `toJson()` versus the pushed payload,
  `pulled` semantics, attachment name/group semantics, quarantine visibility,
  and `db.wipe()`.

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
