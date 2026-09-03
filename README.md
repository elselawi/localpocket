# LocalPocket

<p align="center">
  <img src="logo.svg" alt="LocalPocket" width="180">
</p>

- **A database**: SQLite FFI with an in-memory LRU point-read cache.
- **Strongly typed**: Schema-first strictly typed API.
- **Cross Platform**: One API on mobile/desktop/web — 0 boilerplate.
- **Durable**: ACID transactions via interactive `Transaction` objects, WAL mode (native), pluggable crash-safety levels.
- **Reactive**: Queries and single-record reads are watchable streams.
- **Synchronized**: Two-way sync with PocketBase over REST + SSE realtime.
- **Search**: Full-text search with SQLite FTS5.
- **Encrypted**: Built-in field-level encryption; encryption via SQLCipher (native).
- **Durable File Blobs**: content-addressed attachment storage with dedup and background lanes.
- **Battle-tested**: ~2000 unit/integration tests, 100+ live-server e2e scenarios, 45+ browser matrix runs on Chromium/Firefox/WebKit.
- **Migrations**: versioned, forward-only ledgers with safe destructive rebuilds and backups.
- **Conflict-aware**: deterministic 3-way merge engine with field-level resolvers.

---

## Installation

Add `localpocket` to your `pubspec.yaml`:

```yaml
dependencies:
  localpocket: ^0.1.1
```

---

## Quick Start

### Step 1: Store & Schema

```dart
import 'package:localpocket/localpocket.dart';

enum TaskStatus { todo, inProgress, done }

final class Tasks extends StoreDef<Tasks> {
  // ----- start with defining store name ----- //
  // define store name and schema version
  Tasks._private() : super(name: 'tasks', version: 1);
  // instantiate store as a static member
  static final Tasks store = Tasks._private();

  // Note:
  // Please note how we are constructing the class using
  // a private constructor (_private), accessed from static public property.
  // One Tasks per app: the private constructor means no code outside this
  // file can create a second instance. LocalPocket identifies stores by
  // identity, so a look-alike definition would compile but be rejected with
  // a store-mismatch error at open time — the private ctor makes that
  // failure impossible instead of just unlikely.

  // ----- define the schema per field ----- //
  static final title = store.schema
      .text(
        // field name
        'title',
        // unique constraint
        uniqueWhenActive: true,
      )
      .req(); // makes it required

  // Enums:
  static final status = store.schema.enumOf(
    'status',
    TaskStatus.values,
    wire: const {
      // overwriting the textual (string) representation of the enum
      TaskStatus.inProgress: 'in_progress',
      TaskStatus.todo: 'to_do'
      // unmapped values fallback to `.name`
    },
  );

  // ... defining schema for the rest of the fields ...
  static final priority = store.schema.integer('priority');
  static final done = store.schema.boolean('done');
  static final dueAt = store.schema.dateTime('due_at');
  // please refer to the table below for more field types

  // ----- define the ordered registry ----- //
  // declares which fields exist and in
  // what order they become columns
  // (`fields` is the ordered registry; each descriptor is built by the
  // store's `schema`, a `Fields<S>` factory)
  @override
  get fields => [title, status, priority, done, dueAt];

  // ----- define indexing (indexSpec builds an `IndexSpec`) ----- //
  @override
  get indexes => [
        indexSpec<Tasks>(
          [status, priority],
          scope: IndexScope.notArchived,
          unique: true,
        ),
      ];

  // ----- define search specs (ftsSpec builds an `FtsSpec`) ----- //
  @override
  get fts => ftsSpec<Tasks>(
        [title],
        fuzzy: true,
        normalize: const FtsNormalization(rules: {'à': 'a', 'ä': 'a'}),
      );

  // if an archived record hasn't syched yet
  // true: keep it in the local store.
  // false: delete it from the local store.
  // default: false
  @override
  bool get keepUnsyncedArchives => true;

  // Whether remote file references on this
  // store should be prefetched during sync pulls.
  // default: false
  @override
  bool get prefetchFiles => true;
}
```

#### Supported Field Types

| Descriptor factory   | value                               | SQLite storage        |
| -------------------- | ----------------------------------- | --------------------- |
| `schema.text`        | `String?` / `String` after `.req()` | `TEXT`                |
| `schema.integer`     | `int?` / `int` after `.req()`       | `INTEGER`             |
| `schema.real`        | `num?` / `num` after `.req()`       | `REAL`                |
| `schema.boolean`     | `bool?` / `bool` after `.req()`     | `INTEGER` (`0`/`1`)   |
| `schema.date`        | epoch-millisecond `int?`            | `INTEGER`             |
| `schema.dateTime`    | UTC `DateTime?`                     | `INTEGER`             |
| `schema.enumOf`      | Dart enum value                     | wire `TEXT`           |
| `schema.json`        | `Map<String, Object?>?`             | canonical JSON `TEXT` |
| `schema.jsonList<T>` | `List<T>?`                          | canonical JSON `TEXT` |
| `schema.ref`         | record-id `String?`                 | `TEXT`                |

#### Notes on field types:

- Enums are stored as strings. Unmapped values use `Enum.name`; the optional `wire` map pins stable alternatives such as `in_progress`.
- **`schema.date` vs `schema.dateTime`** — Both store the same epoch-**milliseconds** integer in an `INTEGER` column; only the boundary codec differs. `schema.date` is a pass-through adapter typed as `int?` (raw epoch ms, no conversion — you manage timezones) and supports numeric aggregates. `schema.dateTime` is typed as `DateTime?` and is **UTC-pinned in both directions**: local inputs are converted to UTC before storage and decoded values always have `isUtc == true`. The two adapters share the same column and are interchangeable on the wire. Prefer `schema.dateTime` for timestamps; use `schema.date` when you already hold epoch-ms integers or want `sum`/`min`/`max` over a date column.
- **`schema.integer` vs `schema.real`** — `schema.integer` is typed `int?` and stored as `INTEGER`; `schema.real` is typed `num?` (not `double` — Dart `int` values are accepted) and stored as `REAL`. Both support `.req()`, comparison operators, and numeric aggregates. Use `schema.integer` for counts/ids/whole numbers and `schema.real` for fractional measurements and percentages.
- **`schema.ref`** — Stores a **record id** (`String?`) pointing at a record in another store. There is no `.req()` (always optional) and no join/fetch API: read the id and fetch the target row from its own store.
- `enforceFk: true` adds a SQLite `REFERENCES` constraint on the column; ref fields not covered by a declared index are auto-indexed for lookups.

---

### Step 2: Models & Operations

While this step is optional, it is recommended to have a cleaner and more concise API.

```dart
// define a helper type for the row
typedef Task = Row<Tasks>;

// define and extension that maps each field in the row to a class member

extension TaskReads on Row<Tasks> {
  String get title => this(Tasks.title);

  // this can also have default values
  TaskStatus get status => this(Tasks.status) ?? TaskStatus.todo;
  bool get isDone => this(Tasks.done) ?? false;
  int get priority => this(Tasks.priority) ?? 0;

  // nullable fields can be accessed directly
  DateTime? get dueAt => this(Tasks.dueAt);

  // you can add fields based on whatever computations you want
  String get taskColor => status == TaskStatus.todo ? 'red' : 'blue';
}


// finally ...
// define common operations on your store
// the following example is quite verbose
// to show you the syntax and composability of the queries

extension TaskStore on Store<Tasks> {

  // ---- point reads
  Future<Task?> readTask(String id) => get(id);


  // ---- helper condiitions
  Cond<Tasks> get notDone => ~Tasks.done.eq(true);
  Cond<Tasks> get shipped => Tasks.done.eq(true);
  Cond<Tasks> get openOrOverdue =>
      (~Tasks.done.eq(true)) | Tasks.dueAt.lt(DateTime.now());

  // ---- queries: one shape, every terminal, any boolean tree
  Future<List<Task>> notDoneTasks({int limit = 50}) async => (await query(
        QuerySpec(
          where: [notDone],
          orderBy: [Tasks.priority.desc],
          limit: limit,
        ),
      ))
          .items;

  Future<List<Task>> highPriority({int limit = 50}) async => (await query(
        QuerySpec(
          where: [
            // Precedence: & binds tighter than | — parens make it explicit.
            (Tasks.priority.gt(0) & Tasks.priority.lt(2)) | shipped,
            Tasks.dueAt.lt(DateTime.now()) | Tasks.dueAt.eq(null),
          ],
          orderBy: [Tasks.priority.desc],
          limit: limit,
        ),
      ))
          .items;

  // An OR of ANDs — the shape a separate "OR group" could never express.
  Future<List<Task>> workable({int limit = 50}) async => (await query(
        QuerySpec(
          where: [
            Tasks.title.startsWith('Draft') |
                (Tasks.status.eq(TaskStatus.inProgress) & notDone),
          ],
          limit: limit,
        ),
      ))
          .items;

  Future<List<Task>> dueThisWeek() async {
    final now = DateTime.now().toUtc();
    return (await query(
      QuerySpec(
        where: [
          Tasks.dueAt.between(now, now.add(const Duration(days: 7))),
          notDone,
        ],
        orderBy: [Tasks.dueAt.asc],
        limit: Limits.unbounded,
      ),
    ))
        .items;
  }

  // Runtime-assembled filters: the where list ANDs its elements, and each
  // element may itself be a composed tree.
  Future<List<Task>> matching(
    List<Cond<Tasks>> filters, {
    int limit = 50,
  }) async =>
      (await query(
        QuerySpec(
          where: filters,
          orderBy: [Tasks.priority.desc],
          limit: limit,
        ),
      ))
          .items;

  // ---- writes: field-native values
  Future<void> newTask(String title, {int priority = 0}) => put([
        Tasks.title.set(title),
        Tasks.priority.set(priority),
        Tasks.done.set(false),
      ]);

  Future<void> newTaskWithId(String id, String title) =>
      put([Writes.id<Tasks>(id), Tasks.title.set(title)]);

  Future<void> markDone(String id) => patch(id, [Tasks.done.set(true)]);

  // null clears an optional field; on a .req() field it would not compile.
  Future<void> clearPriority(String id) =>
      patch(id, [Tasks.priority.set(null)]);

  Future<void> rename(String id, String newTitle) =>
      patch(id, [Tasks.title.set(newTitle)]);

  Future<void> seed(List<String> titles) => putAll([
        for (var i = 0; i < titles.length; i++)
          [
            Writes.id<Tasks>('task${(i + 1).toString().padLeft(11, '0')}'),
            Tasks.title.set(titles[i]),
            Tasks.priority.set(i),
            Tasks.status.set(TaskStatus.todo),
            Tasks.done.set(false),
          ],
      ]);

  Future<void> markAllDone(List<String> ids) => patchAll({
        for (final id in ids) id: [Tasks.done.set(true)],
      });

  // ---- lifecycle
  Future<void> archiveTask(String id) => archive(id);
  Future<void> restoreTask(String id) => restore(id);
  Future<void> deleteTask(String id) => purge(id);

  // ---- search: hits come straight back
  Future<void> printSearch(String term) async {
    for (final hit in await search(SearchSpec(term: term, limit: 10))) {
      final row = await hit.fetch();
      print(
        '  hit id=${hit.id} score=${hit.score.toStringAsFixed(3)} '
        'title=${row?.title}',
      );
    }
  }

  // ---- stats: the same predicate slots on every terminal
  Future<void> printStats() async {
    final open = await count(QuerySpec(where: [notDone]));
    final load = await sum(Tasks.priority, where: [notDone]);
    final states = await distinct(Tasks.status);
    final hot = await ids(
      QuerySpec(
        where: [Tasks.priority.gt(0) & ~Tasks.title.startsWith('Draft')],
        limit: 100,
      ),
    );
    print('open=$open load=$load states=$states hot=${hot.length}');
  }

  // ---- reactive: the same trees drive watches
  Stream<List<Task>> watchOpen() => watch(
        QuerySpec(
          where: [openOrOverdue],
          orderBy: [Tasks.dueAt.asc],
          limit: 50,
        ),
      );

  // ---- keyset pagination
  Future<void> printAllPages() async {
    var page = await query(QuerySpec(orderBy: [Tasks.priority.asc], limit: 2));
    while (true) {
      for (final t in page.items) {
        print('  ${t.id}: ${t.title}');
      }
      if (!page.hasNext) break;
      page = (await page.next())!;
    }
  }

  // ---- projection: reading an unselected field throws
  Future<List<String>> openTitles() async => [
        for (final row in (await query(
          QuerySpec(
            where: [notDone],
            select: [Tasks.title],
            limit: 100,
          ),
        ))
            .items)
          row.title,
      ];
}
```

### Step 3: Opening the database

```dart
// one reusable app class that owns the database handle and the typed stores
final class AppDb {
  AppDb._(this.db);
  final LocalPocket db;

  // open the database with the stores this app uses
  static Future<AppDb> open(String path) async => AppDb._(
        await LocalPocket.open(
          LocalPocketOptions(path: path, stores: [Tasks.store]),
        ),
      );

  Future<void> close() => db.close();

  // optional: add one-line accessors for each store
  Store<Tasks> get tasks => db.store(Tasks.store);
}
```

Now you can use the stores in your app:

```dart
  final app = await AppDb.open('path/to/mydb.db');
  final db = app.db;
  await app.tasks.seed(['Draft it', 'Ship it', 'File taxes']);
  await app.tasks.markDone('task00000000002');
  await app.tasks.printSearch('ship');
  await app.tasks.printStats();
  await app.close();
```

You can also open the database and wire the stores to it this way:

```dart
  final db = await LocalPocket.open(
    LocalPocketOptions(
      path: ':memory:', // memory, not persisted
      stores: [Tasks.store],
    ),
  );
  final tasks = db.store(Tasks.store);

  final n = await tasks.count(QuerySpec(
    where: [
      ~Tasks.done.eq(true),
      Tasks.dueAt.lt(DateTime.now()),
    ],
  ));
  print('There are $n tasks left to do');
```

Your quickstart is over. **What you now have is:**

- A cross platform database that is durable and fast
- An ergonomic API
- strict type safety
- Watchable queries that you can consume
- Full text search

follow along the rest of the doumentation to learn more about:

- CRUD & queries
- Synchronization
- Conflict resolution
- Change hooks
- Encryption
- Binary and file attachements

and more...

## CRUD

Every mutation is a list composed of `Write` commands —
`Tasks.title.set(...)` builds one, and `Writes` provides the id
and extra-field helpers. Writes apply inside a transaction:
either all of them or none.

```dart
  await tasks.put([
    // Put operations are upserts but
    // if an ID is defined and the record exists
    // it is updated, while clearing undefined fields
    // if it's not found it will be inserted
    // if it's not defined, it will be generated
    Writes.id('my15charlongid0'),

    // field writes syntax goes like this:
    Tasks.title.set('My new task'),
    Tasks.done.set(true),
    Tasks.priority.set(1),
    Tasks.status.set(TaskStatus.todo),
    Tasks.dueAt.set(DateTime.now().add(const Duration(days: 14))),

    // extra fields are allowed, but not typed
    Writes.extra('extra key', 'extra value')
  ]);

  // same as put, but with a list of writes
  await tasks.putAll([
    [
      Writes.id('my15charlongid1'),
      Tasks.title.set('task 1'),
    ],
    [
      Writes.id('my15charlongid2'),
      Tasks.title.set('task 1'),
    ]
  ]);

  // same as put, but it doesn't clear
  // the fields that were not defined
  // i.e. it doesn't set them to null
  // i.e. updates only provided fields
  await tasks.upsert([
    Writes.id('my15charlongid0'),
    Tasks.title.set('My new task'),
    Tasks.done.set(true),
    Tasks.priority.set(1),
    Tasks.status.set(TaskStatus.todo),
    Tasks.dueAt.set(DateTime.now().add(const Duration(days: 14))),
    Writes.extra('extra key', 'extra value')
  ]);

  // same as upsert, but in batches
  await tasks.upsertAll([
    [
      Writes.id('my15charlongid1'),
      Tasks.title.set('task 1'),
    ],
    [
      Writes.id('my15charlongid2'),
      Tasks.title.set('task 1'),
    ]
  ]);


  // updates the existing record with id
  // without replacing unspecified fields.
  // Throws [RecordNotFoundException] when
  // the record does not exist;
  // a [Writes.id] value inside [writes] is rejected
  // since record ids are immutable.
  await tasks.patch('my15charlongid1', [
    Writes.id('my15charlongid2'), // <- throws
    Tasks.title.set('title gets updated')
  ]);

  // Same as patch, but accepts a map of id -> [writes]
  await tasks.patchAll({
    'my15charlongid1': [Tasks.title.set('title gets updated')],
    'my15charlongid2': [Tasks.title.set('title gets updated')],
  });

  // bulk point-read: one `id IN (...)` query instead of a fetch loop.
  // Rows come back in id-list order; missing ids drop out;
  // archived rows are included (same visibility as `get`).
  await tasks.getAll([
    'my15charlongid1',
    'my15charlongid2',
  ]);

  // Soft deletes the record with id
  // However, if it hasn't been synched yet,
  // the record will be deleted permanently.
  // unless `keepUnsyncedArchives` is set to true.
  // (see step 1 above)
  await tasks.archive('my15charlongid1');

  // Restores the record with id from the archive.
  await tasks.restore('my15charlongid1');

  // hard local deletes a record and all of its metadata
  // the remote copy (if it ever existed) will survive
  // if it ever gets updated by some other client,
  // the record will be pulled and resurrected again
  await tasks.purge('my15charlongid1');
```

**Gotchas:**

1. **`put` replaces the whole record — not just the fields you list.** On a
   record that already exists, every field you don't include is __cleared__.

2. **`upsert` replaces the defined fields only — and insert if the record doesn't exist.**
   On a record that already exists, every field you don't include is kept __untouched__.

3. **`patch` throws if the record doesn't exist; `put` silently upserts.**
   `patch`/`patchAll` raise `RecordNotFoundException` for a missing id, while
   `put` creates or replaces without complaining. So a `patch` right after a
   `purge` (or for an id that was never created) will throw.

| Op       | Record missing? | Record exists?                | Named-axis            |
| -------- | --------------- | ----------------------------- | --------------------- |
| `put`    | inserts         | **replaces the whole record** | create-or-**replace** |
| `upsert` | inserts         | **merges only listed fields** | create-or-**merge**   |
| `patch`  | **throws**      | merges only listed fields     | update-only (strict)  |

3. **Record ids can't change once created.** A `Writes.id` inside a `patch` is
   rejected. To "change" an id, create a new record with the new id and purge
   the old one.

4. **Custom ids must be exactly 15 lowercase letters/numbers.** Anything else
   is rejected — including PocketBase-style ids that contain uppercase letters.
   Leave the id out and the engine generates a valid one.

5. **Batches are all-or-nothing.** `putAll` and `patchAll` each commit as one
   transaction. In `patchAll`, the first entry that fails (missing record, bad
   value) throws and rolls back the whole batch. Duplicate ids inside a
   `putAll` resolve last-write-wins.

6. **Archiving a record that never synced deletes it for good — by default.**
   If you create a record and archive it before it ever reaches the server, it
   is removed permanently (no undo). Turn on `keepUnsyncedArchives: true` to
   keep it as a soft-deleted local row instead.

7. **`archive`/`restore` throw on a missing record**. `purge` is a silent
   no-op. Archiving or restoring an id that isn't there throws
   `RecordNotFoundException`. Purging a missing id does nothing and doesn't
   throw.

8. **`purge` only deletes on your device — the server copy survives.** The
   remote copy is untouched, and if another device updates it later it gets
   pulled back and reappears. To delete it everywhere, delete the record in
   PocketBase. `purge` is a **hard purge**: the row, its sync metadata, and
   its blob references are removed locally in one transaction.

9. **Setting a field to `null` clears it.** On optional fields, this works in
   both `put` and `patch`; on a required (schema: `.req()`) field it won't compile. And
   remember: in `put`, simply *omitting* a field also clears it (see #1).

## Queries

```dart
  final donePage = await tasks.query(
    QuerySpec(
      where: [
        Tasks.done.eq(false), // not done
        Tasks.status
            .inValues([TaskStatus.todo, TaskStatus.done]), // one of these
        Tasks.priority.between(1, 5), // priority in range
        Tasks.dueAt.isNull(), // no due date set
      ],
      orderBy: [Tasks.priority.desc], // sort, then take the page
      limit: 20,
    ),
  );
  print(donePage.items.length);

  final allDone = await tasks.query(
    QuerySpec(
      // to make the query return all the results
      // although not recommended
      // but you can explicitly use `Limits.unbounded`
      limit: Limits.unbounded,
      where: [Tasks.done.eq(true)],
    ),
  );
  print(allDone.items.length);

  // conditions compose into bigger ones with
  // & (and), | (or) and ~ (not). parentheses
  // decide the order, like in arithmetic
  final matching = await tasks.query(
    QuerySpec(
      where: [
        (Tasks.done.eq(true) | Tasks.priority.eq(5)) &
            ~Tasks.title.startsWith('Draft'),
      ],
      // select trims every row down to these fields.
      // reading anything else from these rows throws
      select: [Tasks.title, Tasks.priority],
      limit: 20,
    ),
  );
  print(matching.items.length);

  // pages carry their own continuation. next()/prev().
  // hasNext/hasPrev are snapshot facts: they describe what the database
  // observed when the page was built, not a promise about the next call.
  final firstPage = await tasks.query(
    QuerySpec(
      where: [Tasks.done.eq(false)],
      orderBy: [Tasks.priority.desc],
      limit: 20,
    ),
  );
  final nextPage = await firstPage.next(); // null when hasNext is false
  final again = await nextPage!.prev(); // back to the first page
  print(again!.items.length);

  // get reads one record by id.
  // null when there is no such record — it doesn't throw
  final oneTask = await tasks.get('tsk1234567890ab');

  // fields are read through the descriptor: row(Tasks.field)
  final oneTitle = oneTask?.call(Tasks.title);
  print(oneTitle);

  // count returns how many rows match. nothing else
  final activeCount = await tasks.count(QuerySpec(
    where: [Tasks.done.eq(false)],
  ));
  print(activeCount);

  // ids returns the matching record ids
  // instead of whole rows
  final openIds = await tasks.ids(
    QuerySpec(
      where: [Tasks.done.eq(false)],
      orderBy: [Tasks.priority.desc],
      limit: 100,
    ),
  );
  print(openIds);

  // sum / min / max / avg work on number fields only
  // (integer, real, date) — anything else won't compile.
  // they return null when no rows match
  final priorityTotal = await tasks.sum(Tasks.priority);
  final heaviest = await tasks.max(Tasks.priority);
  final lightest = await tasks.min(Tasks.priority);
  final average =
      await tasks.avg(Tasks.priority, where: [Tasks.done.eq(false)]);

  print("$priorityTotal $heaviest $lightest $average");

  // distinct lists the unique values a field holds
  final priorities = await tasks.distinct(Tasks.priority);

  // countDistinct counts them instead of listing them
  final priorityCount = await tasks.countDistinct(Tasks.priority);

  print("$priorityCount ${priorities.length}");
```

**Gotchas:**

1. **`limit` is required on `query` and `ids`.** A read without
   `limit` doesn't compile. If you want to get all rows, pass `limit: Limits.unbounded`.

2. **The `where` list is an AND list.** Every element must hold for a row to
   match. To say "or", build one tree with `|` and pass it as a single
   element. `&` binds tighter than `|` — parentheses decide, like in
   arithmetic. Every operator (`between`, `startsWith`, `inValues`, ...) may
   appear anywhere inside the tree.

3. **"Field is empty" is `.isNull()` (or `.eq(null)`).** A raw SQL `= NULL`
   comparison never matches anything, so the typed layer rewrites `eq(null)`
   into a proper IS NULL check for you. `.isNull()` exists on optional fields
   only — required fields can never be null.

4. **Pagination never re-states slots in-session; persisted cursors do.**
   A page captures the exact `where`/`orderBy`/`select`/scope it was fetched
   with — `next()` and `prev()` re-run it verbatim, so a shape mismatch
   cannot happen by construction, and `limit` stays fixed for the chain.
   `hasNext`/`hasPrev` are snapshot facts: they say the database *observed*
   a row on that side when the page was built. They are not a promise —
   rows can vanish before the call, and a vanished tail returns a terminal
   empty page instead of an error. To resume a cursor that outlived the
   page object (app restart, deep link), re-state the shape with `after:`;
   a cursor minted by a different shape (or a corrupted one) throws
   `StaleCursorError` instead of returning a wrong page.

5. **`get` is the odd one out.** It returns the row even when it is archived
   or hidden (every other read excludes them by default), and a missing id
   gives `null` instead of a throw — unlike `patch`, `archive` and `restore`.

6. **Aggregates take number fields only.** `sum`/`min`/`max`/`avg` accept
   `integer`, `real` and `date` descriptors; anything else won't compile.
   They return `null` when no rows match — there is nothing to add up.

7. **`distinct` quietly caps at 1000 values** unless you pass `limit:` yourself. `countDistinct` has no cap — it counts in the database.

8. **A projected row only carries what you selected.** After `select:`,
   reading any other field throws — including `row.id` — so list every field
   the call site needs. Projections are for hot paths, not everyday reads.

9. **The same slots repeat on every read.** `where`, `orderBy`, `limit`,
   `includeArchived:` and `includeHidden:` mean the same thing across
   `query`, `ids`, `count`, `distinct`, the aggregates and
   `watch` — build a condition once and reuse it on all of them (`count`
   simply has no ordering or paging slots). Watches are live snapshots and
   have no pagination surface at all.

## Reactive Queries

```dart
  final listStream = tasks.watch(
    QuerySpec(
      // takes the same predicate/order/projection as `query`
      where: [Tasks.done.eq(false) & (~Tasks.priority.eq(0))],
      orderBy: [Tasks.title.asc, Tasks.priority.desc],
      select: [Tasks.title],
      limit: 10,
    ),
  );

  // it returns a stream that you can listen to
  // or consume with Flutter StreamBuilder
  listStream.listen((rows) {
    print('tasks updated!');
    for (final task in rows) {
      // each row only carries `title` (you picked it with `select:`),
      // so reading `task.id` here would throw
      print(task(Tasks.title));
    }
  });

  // single-record changes ride the store's `changes` stream:
  // one notification per committed record change for this store.
  final changeSub = tasks.changes.listen((change) {
    print('task ${change.ids} changed in ${change.storeName}');
  });
  await changeSub.cancel();
```

**Gotchas:**

1. **The first event is what's stored right now — not a change.** Listening
   runs the query once immediately and hands you the current results, even if
   that's an empty list. To track ONE record, listen to the store's `changes`
   stream: `tasks.changes` emits a `ChangeNotification` (its `ids` list the
   records that changed) for every committed change to that store.

2. **Many writes can arrive as one update.** Updates are gathered on a short
   16 ms window: 500 writes inside one transaction come through as a single
   re-read and a single event, and a slow listener only ever gets the latest
   result. Treat each event as "here's the fresh answer", not as a list of
   what changed.

3. **Aside from the first event, nothing arrives unless something actually changed.**
   While you're listening, a write only produces an event if it
   changes the watched results: a rolled-back transaction sends nothing, and
   a write that leaves the results exactly the same sends nothing either.
   Without `orderBy`, reordering rows doesn't count as a change; with
   `orderBy`, it does.

4. **Record-level change notifications carry the affected ids.** `Store.changes`
   emits one notification per committed record change (origin, action, and
   payloads ride the committed-change event). It never hides anything: archived
   and hidden records keep producing notifications — a soft delete is still a
   change notification.

5. **List watches follow the default view.** When a watched row is archived
   or hidden, it disappears from the next list (that removal is its own
   event, not a null entry), and it comes back on restore. Pass
   `includeArchived:` / `includeHidden:` to watch those rows too — the same
   flags as `query`.

6. **`limit` caps every list — there's no paging.** `watch` needs a `limit`
   just like `query`, but it trims each list it sends; it isn't the first
   page of a longer chain. Pass `Limits.unbounded` to watch everything.
   There's no `after:` and no `next()`/`prev()` — use `query` when you need
   pages.

7. **One listener per watch, and cancel is permanent.** Every
   `watch()` call makes its own independent stream, so two
   listeners means calling `watch()` twice (or broadcasting the stream
   yourself). After `cancel()`, that watch never checks again (a check that
   was scheduled but cancelled reports nothing). Closing the database while a
   watch is running doesn't cause stray errors.

8. **Sync updates flow through.** Server pulls update watches like any local
   write — including rows a pull hides or archives.

9. **Watches survive errors.** If a re-read fails, the error arrives on the
    stream's error handler and the watch keeps going — the next successful
    read sends results normally.

## Search

```dart
  // before using search queries
  // you must have defined the FTSspec when you defined your store:

  // @override
  // get fts => ftsSpec<Tasks>(
  //   [title],
  //   fuzzy: true,
  //   normalize: const FtsNormalization(rules: {'à': 'a', 'ä': 'a'}),
  // );
  // check "STEP 1" above.

  // then:
  // you can search by term
  // but remember that your searches must have a limit
  // like `query` and `ids`
  // use `Limits.unbounded` to get all results
  final hits = await tasks.search(SearchSpec(
    term: "wash the car",
    includeArchived: false,
    includeHidden: false,
    limit: 100,
  ));

  // the hits object returns a list of Hit

  hits[0].id; // the id of the record
  hits[0].score; // search ranking score
  // and they are sorted by the `score`
  // use getAll to get the records from the hits
  final result = await tasks.getAll(hits.map((x)=>x.id).toList());

  result.first!.title; // "wash the car"
```

**Gotchas:**

1. **No `fts` spec fails at runtime, not compile time.** A store without an
   `ftsSpec` compiles fine; the first `search` call throws
   `FtsUnavailableError` instead of returning empty results — the engine's
   own error, surfaced unchanged.

2. **A search result is a flat, score-ordered list — no pages.** There is no
   `after:`/`next()` continuation here: `limit` is the entire window, and
   matches beyond it are simply not returned. Widen the limit (or pass
   `Limits.unbounded`) when you need more.

3. **Hits can go stale; rows are re-read fresh.** `id`/`score` come from the
   FTS index, while `getAll` (or `hit.fetch()`) reads the record by id at
   call time — a record purged in between silently drops out. So `result`
   can be shorter than `hits`, and positions shift: pair rows back to hits
   by `id`, never by index.

4. **`getAll` sees what `get` sees, not what `search` sees.** Search excludes
   archived and sync-hidden rows; `getAll` doesn't filter anything, so
   archived rows pass straight through. Ids that came from `search` are
   already visible — ids from any other source are not pre-filtered.

5. **One `getAll` beats N `hit.fetch()` calls.** Each `fetch()` is its own
   point read; `getAll(hits.map((h) => h.id).toList())` is a single
   `id IN (...)` query, and rows come back in the order you passed the ids —
   hit (score) order survives the round-trip.

6. **Empty is safe on one side only.** `getAll` on an empty id list (no hits,
   or every hit purged) returns `[]` without running a query.

## Synchronization

### token provider

First you need to define a token provider. LocalPocket doesn't ship an
auth layer — you own the credentials. The following example signs in
over PocketBase's plain HTTP auth endpoints:

```dart
final class PocketBaseTokens implements TokenProvider {
  PocketBaseTokens({
    required this.baseUrl,
    required this.email,
    required this.password,
    this.collection = 'users',
  });

  final Uri baseUrl;
  final String email, password, collection;

  final http.Client _http = http.Client();
  String? _token, _recordId;
  DateTime? _expiresAt;

  // fresh = at least 5 minutes of lifetime left
  bool get _fresh =>
      _expiresAt != null &&
      DateTime.now()
          .toUtc()
          .isBefore(_expiresAt!.subtract(const Duration(minutes: 5)));

  @override
  Future<Token> currentToken() async {
    if (!_fresh) await _signIn(); // first call or expired: full sign-in
    return Token(_token!, expiresAt: _expiresAt);
  }

  @override
  Future<Token> refreshToken(Token current) async {
    try {
      await _auth('auth-refresh', const {}, authorized: true);
    } on Exception {
      await _signIn(); // session revoked server-side: sign in again
    }
    return Token(_token!, expiresAt: _expiresAt);
  }

  @override
  // the auth record id: stable per account, unlike the rotating token
  String get identity =>
      _recordId ?? (throw StateError('ensureSignedIn() first'));

  /// One up-front sign-in, so `identity` is known before sync attaches.
  Future<void> ensureSignedIn() async {
    if (_recordId == null) await currentToken();
  }

  Future<void> _signIn() =>
      _auth('auth-with-password', {'identity': email, 'password': password});

  Future<void> _auth(String action, Map<String, Object?> body,
      {bool authorized = false}) async {
    final res = await _http.post(
      baseUrl.resolve('/api/collections/$collection/$action'),
      headers: {
        'Content-Type': 'application/json',
        if (authorized) 'Authorization': _token!,
      },
      body: jsonEncode(body),
    );
    if (res.statusCode != 200) {
      throw Exception('PocketBase $action failed: HTTP ${res.statusCode}');
    }
    final data = jsonDecode(res.body) as Map<String, dynamic>;
    _token = data['token'] as String;
    _recordId = (data['record'] as Map<String, dynamic>)['id'] as String;
    _expiresAt = _jwtExpiry(_token!);
  }

  // PocketBase tokens are JWTs; decoding `exp` lets LocalPocket's
  // proactive refresh fire when 75% of the token lifetime has elapsed.
  DateTime? _jwtExpiry(String jwt) {
    try {
      final claims = jsonDecode(
        utf8.decode(base64Url.decode(base64Url.normalize(jwt.split('.')[1]))),
      ) as Map<String, dynamic>;
      final exp = claims['exp'];
      return exp is int
          ? DateTime.fromMillisecondsSinceEpoch(exp * 1000, isUtc: true)
          : null;
    } on FormatException {
      return null;
    }
  }
}

final myTokenProvider = PocketBaseTokens(
  baseUrl: Uri.parse('https://pb.example.com'),
  email: 'user@example.com', // in production these come from your login flow
  password: 'app-password',
);
```

### Sync operations

Then define the sync options and attach the sync layer:

```dart
  // Sign in once up front so the stable identity is known before attach.
  await myTokenProvider.ensureSignedIn();

  // Two-way sync with PocketBase over REST,
  // with SSE realtime as an explicit opt-in hint layer.
  // `identity` must be stable per account — reuse the auth record id
  // your token provider is built on.
  final sync = db.attachPocketBaseSync(
    PocketBaseSyncOptions(
      baseUrl: Uri.parse('https://pb.example.com'),
      tokenProvider: myTokenProvider,
      identity: myTokenProvider.identity,
    ),
  );

  // this starts the sync engine
  // also opens the realtime connection
  await sync.start();

  // you can listen to the following stream
  // to get notified about sync progress
  sync.status.listen((status) {
    // what's the sync status currently?
    // check the table below for sync status states
    print('Sync status: ${status.state}');

    status.blocked; // number of operations blocked by conflicts
    status.conflicts; // number of records with open conflicts
    status.lastError; // description of the most recent engine error
    status.pending; // records with pending local work
  });

  // the following methods are available to control the sync engine
  await sync.pause();
  await sync.resume();

  // informs the engine of online/offline connectivity changes.
  sync.setConnectivity(false);
  sync.setConnectivity(true);

  // Replaces the bearer token the engine holds after a refresh or login.
  sync.updateAuth('new token');

  // stops the sync engine
  // and closes the realtime connection
  await sync.stop();

  // Runs one full pull → sweep → push cycle immediately and returns its complete report.
  final report = await sync.syncNow();

  report.pulled; // number of records pulled from the server
  report.pushed; // number of records pushed to the server
  report.discarded; // Local edits discarded in favor of the remote.
```


**Gotchas:**

1. **`start()` owns realtime.** Sync start opens the engine and its realtime
   connection on both platforms — there is no separate realtime command;
   polling and anti-entropy sweeps remain the correctness backstop either way.
2. **One tab runs sync on web.** The worker owns the engine; a second tab
   syncing the same database is not a supported configuration yet.
3. Realtime events are hints, not truth: the engine still performs
authoritative pulls after gaps and reconnects.
4. `syncNow()` returns a `SyncReport` on both platforms (pulled / swept /
pushed / dead-lettered / discarded counts).
5. `pause()`/`resume()` park and restart periodic cycles (manual
   `syncNow()` still works while parked); `setConnectivity(false)`
   parks cycle scheduling while offline.

## Conflict Resolution

LocalPocket uses a deterministic **3-way merge engine**: each edit resolves
against the shared pre-edit base, `base → (local, remote)`. Precedence:
field-level overrides on the schema's `ConflictPolicy`, then a
store-level resolver, then the default (`RemoteWinsResolver`, which
preserves non-overlapping edits from both sides automatically). Built-in
resolvers cover the common shapes — `LocalWinsResolver`, `CounterResolver`,
`SetUnionWithDeletionWinsResolver`, `AppendOnlyListResolver`,
`AppendOnlyLinesResolver` — and `CustomResolver` handles anything else.

Conflicts that need a human are held in `store.conflicts` (a
`StoreConflicts<S>`: `listOpen`, `watch`, `resolve`, `acceptLocal`,
`acceptRemote`).

### Setting resolution policies

Policies are declared on the store, not set at runtime: override
`StoreDef.conflictPolicy` once and the engine applies it to every merge.
This is where automated resolution is configured — most apps never open
a conflict by hand.

```dart
final class Posts extends StoreDef<Posts> {
  Posts._() : super(name: 'posts', version: 1);
  static final Posts store = Posts._();

  static final title = store.schema.text('title').req();
  static final views = store.schema.integer('views');
  static final tags = store.schema.jsonList<String>('tags');

  @override
  List<FieldDef<Posts, Object?>> get fields => [title, views, tags];

  // ---- automated resolution policy ----
  @override
  ConflictPolicy? get conflictPolicy => const ConflictPolicy(
        // Whole-record resolver: runs only when BOTH sides changed the
        // record; returning null declines — conservative merge plus
        // review escalation.
        collectionResolver: CustomResolver(pick),
        // Field-level overrides (top-level or dotted paths like
        // 'meta.name'; the most specific entry wins):
        fieldOverrides: {
          'views': CounterResolver(max: 1000000), // base + Δlocal + Δremote
          'tags': SetUnionWithDeletionWinsResolver(), // union; deletions win
          'title': LocalWinsResolver(),
        },
        // Editing a locally-archived record unarchives it.
        editsUnarchive: true,
        // A push whose target was deleted remotely:
        // conflict (default; never loses data) | recreate | discardLocal.
        missingRemote: MissingRemotePolicy.conflict,
      );

  // A custom resolver sees base, local, remote, and both dirty sets,
  // and returns the merged document — or null to escalate for review.
  static MergeResult? pick(MergeContext ctx) {
    if (ctx.dirtyLocal.contains('title') &&
        ctx.dirtyRemote.contains('title')) {
      return MergeResult(merged: {
        ...ctx.remote,
        'title': '${ctx.local['title']} / ${ctx.remote['title']}',
      });
    }
    return null; // decline: conservative merge + review escalation
  }
}
```

`Tasks` below declares no policy: that IS the default configuration —
three-way merge, overlapping fields take the remote value, and delete
races escalate to `store.conflicts`.

### Watching and resolving open conflicts

```dart
  final tasks = db.store(Tasks.store);

  // Stream the open conflicts as they appear — the current list arrives
  // with the first snapshot, then re-emits on every add and resolution.
  final sub = tasks.conflicts.watch().listen((open) {
    for (final c in open) {
      // base/local/remote are typed Row snapshots at detection time;
      // dirtyLocal/dirtyRemote name the fields each side changed.
      print('${c.recordId}: local=${c.local(Tasks.title)} '
          'remote=${c.remote(Tasks.title)}');
      if (c.remoteDeleted) {
        print('  ^ deleted remotely while this edit was offline');
      }
    }
  });

  // Resolve one by id: accept a side wholesale ...
  await tasks.conflicts.acceptLocal('task00000000001');
  await tasks.conflicts.acceptRemote('task00000000002');

  // ... or hand-merge the fields you decide
  // (fields you don't mention keep their local values).
  await tasks.conflicts.resolve('task00000000003', merged: [
    Tasks.title.set('Chosen by the user'),
    Tasks.done.set(true),
  ]);

  // Or enumerate the backlog on demand instead of streaming.
  final open = await tasks.conflicts.listOpen();
  print('${open.length} open conflict(s)');

  await sub.cancel();
```

**Gotchas:**

1. **An open conflict blocks edits to that record.** While a conflict is
   open, `put`/`upsert`/`patch` on the record throw
   `ConflictBlockedError` — resolve it first. Reads keep working: the
   record still appears in queries, watches, and search with its local
   state.

2. **The default policy never escalates a two-sided merge.** With no
   resolvers configured, both sides' non-overlapping edits merge
   automatically and overlapping fields take the remote value. An open
   conflict therefore means either a configured resolver declined
   (returned `null` or `needsReview`) — or a remote deletion raced a
   local edit, which escalates by default (`missingRemote: conflict`).

3. **A store-level resolver only sees genuine conflicts.** The collection
   resolver runs only when BOTH sides changed the record; one-sided edits
   merge by the classic three-way rules without consulting it. An
   always-escalate resolver (returning `null`) never fires on one-sided
   edits — by design, so routine convergence can't loop into new
   conflicts.

4. **`acceptRemote` on a deletion conflict purges the local record.** The
   remote side is a tombstone (`conflict.remoteDeleted` is `true`);
   accepting mirrors the deletion. To keep the record, `acceptLocal` —
   the resolution pushes as a create and recreates it remotely.

5. **Resolution methods throw when the conflict is gone.** `resolve`
  throws `ConflictNotFoundException`; `acceptLocal`/`acceptRemote` go
  straight to the engine and surface a `StateError`. Two racing
  resolutions: one wins, the other throws. Resolving a locally-purged
  record is not an error: the stale conflict (and its dangling sync
  rows) is cleaned up.

6. **Resolvers are native-only vocabulary.** A store carrying
   `collectionResolver` or `fieldOverrides` cannot cross the web worker —
   the open fails typed with `UnsupportedSchemaFeatureError` before any
   DDL. Declare executable resolvers on native targets only;
   `editsUnarchive` and `missingRemote` policies ride the manifest on
   every platform.

**Note: Concurrent edits on PocketBase are last-write-wins**

PocketBase has no conditional (compare-and-swap) writes, so **concurrent
edits to the same record from two clients resolve last-write-wins on the
server**: whichever write arrives last wins, silently overwriting the
other's non-overlapping edits. The client-side 3-way merge only protects
pushes that are time-serialized. Apps needing strict optimistic
concurrency against PocketBase must enforce it server-side (a record hook
rejecting stale `updated`, or a custom endpoint).

## Change hooks

Every committed mutation delivers a `ChangeNotification` on
`LocalPocket.changes` (all stores) and `Store.changes` (one store): the
notification carries the store name and the record ids the committing
transaction touched. Nothing is delivered before the transaction commits —
events are committed facts, and today the notification names what changed.

## Schema migration

Schema versions migrate forward-only. Override `StoreDef.migrations` to
declare `StoreMigration`s (added fields, optional chunked backfill
transforms), and bump the `StoreDef.version` when they change.
Destructive changes (dropping columns, tightening constraints) run a safe
table rebuild with an automatic backup copy of the old data.

## Encryption

Field-level encryption is per-field on the store, with an application-held
AES-256-GCM key:

```dart
final key = Uint8List.fromList(List<int>.filled(32, 7)); // your 256-bit key

final db = await LocalPocket.open(
  LocalPocketOptions(
    path: 'patients.db',
    stores: [Patients.store],
    encryption: EncryptionConfig.aesGcm256(key: key),
  ),
);
```

Mark individual fields `encrypted: true` in the store declaration (e.g.
`store.schema.text('ssn', encrypted: true)`) — those values are encrypted
at rest with the database key. Whole-database at-rest encryption
(SQLCipher) comes from an injected database on native platforms; the web
profile keeps storage in the browser, so use field-level encryption there.

## Binary attachments

Content-addressed attachment storage with deduplication behind each
store's `Files` API (`store.files`): `files.attach`
(byte-array or stream; chunked upload on web), `files.open`, `files.list`,
`files.remove`, and `files.gc` for capacity reclamation. Storage plugs in
through `BlobStore` — `MemoryBlobStore` for tests, a native file-backed
store on device, OPFS on web. A reference that exists only on the remote
is `remote_only` — `files.open` throws until the bytes arrive, so sync the
record (download it first) and then open.