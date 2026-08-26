# LocalPocket Playground

An interactive Flutter showcase for LocalPocket CRUD, queries, watches, FTS,
transactions, files, maintenance, and optional PocketBase synchronization.

The `tasks` store is declared with the canonical typed definition in
`lib/core/tasks.dart`. Its CRUD page uses `db.store(PlaygroundTasks.instance)`
and typed drafts. Seeding, joined reads, and several advanced pages deliberately
use `db.collection('tasks')` against that same store, while `users`, `posts`,
`metrics`, and `secrets` retain raw schemas. This demonstrates gradual adoption:
typed and raw access share unchanged SQLite storage and wire formats.

Run the app with the normal Flutter workflow for the selected platform.
