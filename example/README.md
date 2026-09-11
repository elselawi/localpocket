# LocalPocket Playground

An interactive Flutter showcase for LocalPocket CRUD, queries, watches, FTS,
transactions, files, maintenance, and optional PocketBase synchronization.

The `tasks` store is declared with the canonical typed definition in
`lib/core/tasks.dart`. Its CRUD page uses `db.store(PlaygroundTasks.store)`
and typed drafts, and the other stores (`users`, `posts`, `metrics`, `secrets`)
are declared as typed `StoreDef`s too, in `lib/core/schemas.dart`. All of them
share one SQLite storage layer and one wire format — the typed surface is the
only public access path (the kernel's raw `collection(name)` API is internal).
To hold JSON documents whose shape you have not declared yet, declare a
`StoreDef` with `fields => const []` and carry the document through
`Writes.extra` / `Writes.fromJson`; see the README's
"Adopting existing JSON documents" section.

Sync is optional and works on every platform out of the box: `attachPocketBaseSync`
uses the built-in PocketBase backend, so no adapter import is needed.

Run the app with the normal Flutter workflow for the selected platform.
