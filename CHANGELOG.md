## Unreleased

- Native opens now default to durable attachment storage. With no `blobStore`,
  `LocalPocket.open` installs the content-addressed `NativeBlobStore` rooted
  beside the database file (`<database file name>.blobs`, so two databases in
  one directory never share bytes): `files.attach` works without importing
  anything from `src/`, and the bytes survive close → reopen. A caller-supplied
  `blobStore` still wins (and the default root is not even created), and an
  in-memory database (`:memory:`) keeps failing typed without an explicit store.
- `NativeBlobStore` is exported from the package barrel, so apps that want a
  non-default root (one directory per tenant, say) no longer need an
  `implementation_imports` ignore pinned to an internal path. The export is
  conditional — the class stays native-only and a web build still never pulls
  `dart:io`.
- README: the native storage seam now names the concrete store per platform
  instead of deferring to "a persistent `BlobStore`".

## 0.3.1

- Fixed: a field promoted out of `extra` could never be cleared. The migration
  now removes the promoted key from the blob and every write re-encodes
  `extra`, so a stale copy can no longer resurrect the old value after
  `patch(field, null)` (the read path's NULL-column fallback used to serve it,
  and the next read-modify-write re-committed it).
- README: attachment deduplication is documented as byte-keyed identity —
  re-attaching identical bytes to the same record/field returns the stored
  reference and ignores the new `name`/`group`, and `field` is the scope that
  keeps two byte-identical files distinct.

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
