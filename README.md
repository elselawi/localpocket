# LocalPocket

<p align="center">
  <img src="logo.svg" alt="LocalPocket" width="180">
</p>

- **A database**: SQLite FFI with an in-memory LRU point-read cache.
- **Strongly typed**: Schema-first strictly typed API.
- **Cross Platform**: One API on mobile/desktop/web — 0 boilerplate.
- **Durable**: ACID transactions, WAL mode (native), pluggable crash-safety levels.
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

<!-- localpocket-compile: typed-readme -->
```dart
import 'package:localpocket/localpocket.dart';

enum TaskStatus { todo, inProgress, done }

final class Tasks extends StoreDef<Tasks> {
  // ----- start with defining store name ----- //
  // define store name and schema version
  Tasks._() : super(name: 'tasks', version: 1);
  // instantiate store as a static member
  static final Tasks store = Tasks._();

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
  // refer to the table below for more field types

  // ----- define the ordered registry ----- //
  // declares which fields exist and in
  // what order they become columns
  @override
  get fields => [title, status, priority, done, dueAt];

  // ----- define indexing ----- //
  @override
  get indexes => [
        indexSpec<Tasks>(
          [status, priority],
          scope: IndexScope.notArchived,
          unique: true,
        ),
      ];

  // ----- define search specs ----- //
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

#### Supported Typed Field Types

| Descriptor factory | Typed value | SQLite storage |
|---|---|---|
| `schema.text` | `String?` / `String` after `.req()` | `TEXT` |
| `schema.integer` | `int?` / `int` after `.req()` | `INTEGER` |
| `schema.real` | `num?` / `num` after `.req()` | `REAL` |
| `schema.boolean` | `bool?` / `bool` after `.req()` | `INTEGER` (`0`/`1`) |
| `schema.date` | epoch-millisecond `int?` | `INTEGER` |
| `schema.dateTime` | UTC `DateTime?` | `INTEGER` |
| `schema.enumOf` | Dart enum value | wire `TEXT` |
| `schema.json` | `Map<String, Object?>?` | canonical JSON `TEXT` |
| `schema.jsonList<T>` | `List<T>?` | canonical JSON `TEXT` |
| `schema.ref` | record-id `String?` | `TEXT` |

#### Notes on field types:

- Enums are stored as strings. Unmapped values use `Enum.name`; the optional `wire` map pins stable alternatives such as `in_progress`.
- **`schema.date` vs `schema.dateTime`** — Both store the same epoch-**milliseconds** integer in an `INTEGER` column; only the boundary codec differs. `schema.date` is a pass-through adapter typed as `int?` (raw epoch ms, no conversion — you manage timezones) and supports numeric aggregates. `schema.dateTime` is typed as `DateTime?` and is **UTC-pinned in both directions**: local inputs are converted to UTC before storage and decoded values always have `isUtc == true`. The two adapters share the same column and are interchangeable on the wire. Prefer `schema.dateTime` for timestamps; use `schema.date` when you already hold epoch-ms integers or want `sum`/`min`/`max` over a date column.
- **`schema.integer` vs `schema.real`** — `schema.integer` is typed `int?` and stored as `INTEGER`; `schema.real` is typed `num?` (not `double` — Dart `int` values are accepted) and stored as `REAL`. Both support `.req()`, comparison operators, and numeric aggregates. Use `schema.integer` for counts/ids/whole numbers and `schema.real` for fractional measurements and percentages.
- **`schema.ref`** — Stores a **record id** (`String?`) pointing at a record in another collection. There is no `.req()` (always optional) and no join/fetch API: read the id and fetch the target row from its own store.
- `enforceFk: true` adds a SQLite `REFERENCES` constraint on the column; ref fields not covered by a declared index are auto-indexed for lookups.

---

### Step 2: Models & Operations

While this step is optional, it is recommended to have a cleaner and more concise API.

```dart
// define a helper type for the row
typedef Task = TypedRow<Tasks>;

// define and extension that maps each field in the row to a class member

extension TaskReads on TypedRow<Tasks> {
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

extension TaskStore on TypedCollection<Tasks> {

  // ---- point reads
  Future<Task?> readTask(String id) => get(id);


  // ---- helper condiitions
  Cond<Tasks> get notDone => ~Tasks.done.eq(true);
  Cond<Tasks> get shipped => Tasks.done.eq(true);
  Cond<Tasks> get openOrOverdue =>
      (~Tasks.done.eq(true)) | Tasks.dueAt.lt(DateTime.now());

  // ---- queries: one shape, every terminal, any boolean tree
  Future<List<Task>> notDoneTasks({int limit = 50}) async => (await query(
        where: [notDone],
        orderBy: [Tasks.priority.desc],
        limit: limit,
      ))
          .items;

  Future<List<Task>> highPriority({int limit = 50}) async => (await query(
        where: [
          // Precedence: & binds tighter than | — parens make it explicit.
          (Tasks.priority.gt(0) & Tasks.priority.lt(2)) | shipped,
          Tasks.dueAt.lt(DateTime.now()) | Tasks.dueAt.eq(null),
        ],
        orderBy: [Tasks.priority.desc],
        limit: limit,
      ))
          .items;

  // An OR of ANDs — the shape a separate "OR group" could never express.
  Future<List<Task>> workable({int limit = 50}) async => (await query(
        where: [
          Tasks.title.startsWith('Draft') |
              (Tasks.status.eq(TaskStatus.inProgress) & notDone),
        ],
        limit: limit,
      ))
          .items;

  Future<List<Task>> dueThisWeek() async {
    final now = DateTime.now().toUtc();
    return (await query(
      where: [
        Tasks.dueAt.between(now, now.add(const Duration(days: 7))),
        notDone,
      ],
      orderBy: [Tasks.dueAt.asc],
      limit: Limits.unbounded
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
        where: filters,
        orderBy: [Tasks.priority.desc],
        limit: limit,
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
    for (final hit in await search(term, limit: 10)) {
      final row = await hit.fetch();
      print(
        '  hit id=${hit.id} score=${hit.score.toStringAsFixed(3)} '
        'title=${row?.title}',
      );
    }
  }

  // ---- stats: the same predicate slots on every terminal
  Future<void> printStats() async {
    final open = await count(where: [notDone]);
    final load = await sum(Tasks.priority, where: [notDone]);
    final states = await distinct(Tasks.status);
    final hot = await ids(
      where: [Tasks.priority.gt(0) & ~Tasks.title.startsWith('Draft')],
      limit: 100,
    );
    print('open=$open load=$load states=$states hot=${hot.length}');
  }

  // ---- reactive: the same trees drive watches
  Stream<List<Task>> watchOpen() => watch(
        where: [openOrOverdue],
        orderBy: [Tasks.dueAt.asc],
        limit: 50,
      );

  // ---- keyset pagination
  Future<void> printAllPages() async {
    var page = await query(orderBy: [Tasks.priority.asc], limit: 2);
    while (true) {
      for (final t in page.items) {
        print('  ${t.id}: ${t.title}');
      }
      if (!page.hasMore) break;
      page = await queryAfter(
        page.nextCursor!,
        orderBy: [Tasks.priority.asc],
        limit: 2,
      );
    }
  }

  // ---- projection: reading an unselected field throws
  Future<List<String>> openTitles() async => [
        for (final row in (await query(
          where: [notDone],
          select: [Tasks.title],
          limit: 100,
        ))
            .items)
          row.title,
      ];
}
```

### Step 3: Opening the database

```dart

// this class will be the main database handle

final class AppDb extends TypedPocket {
  AppDb(super.path);

  // required: define the stores this app uses
  @override
  StoreDefs get stores => [Tasks.store];

  // optional: add one-line accessors for each store
  TypedCollection<Tasks> get tasks => handle(Tasks.store);
}
```

Now you can use the stores in your app:

```dart
void main() async {
  final db = AppDb('path/to/mydb.db');
  await db.open();
  await db.tasks.seed(['Draft it', 'Ship it', 'File taxes']);
  await db.tasks.markDone('task00000000002');
  await db.tasks.printSearch('ship');
  await db.tasks.printStats();
  await db.close();
}
```

You can also open the database and wire the stores to it this way:

```dart
void main() async {
  final db = await openTyped(
    path: ':memory:', // memory, not persisted
    stores: [Tasks.store],
  );
  final tasks = db.store(Tasks.store);

  final n = await tasks.count(where: [
    ~Tasks.done.eq(true),
    Tasks.dueAt.lt(DateTime.now()),
  ]);
  print('There are $n tasks left to do');
}
```

> **Note**: The schema is built once and reused (memoized), and stores are registered by name. But LocalPocket also verifies you're passing the exact same object every time — not just an object with the same name and fields. So you must share a single `Tasks.store` everywhere in your app. If you ever create a second `Tasks.store` definition that merely looks identical, the database refuses to guess and throws `TypedStoreMismatchError`, instead of quietly treating the two look-alikes as one store.


Your quickstart is over. **What you now have is:**
- A cross platform database that is durable and fast
- An ergonomic API
- strict type safety
- Watchable queries that you can consume
- Full text search

follow along the rest of the doumentation to learn more about:

- Encryption
- Synchronization
- Change hooks
- Conflict resolution
- Binary and file attachements

and more...


## Typed CRUD

<!-- localpocket-compile: typed-readme -->
```dart
await tasks.put([
  // Put operations are upserts but
  // if an ID is defined and the record exists, it is updated
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

| Op | Record missing? | Record exists? | Named-axis |
|---|---|---|---|
| `put` | inserts | **replaces the whole record** | create-or-**replace** |
| `upsert` | inserts | **merges only listed fields** | create-or-**merge** |
| `patch` | **throws** | merges only listed fields | update-only (strict) |

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
   PocketBase.

9. **Setting a field to `null` clears it.** On optional fields, this works in
   both `put` and `patch`; on a required (schema: `.req()`) field it won't compile. And
   remember: in `put`, simply *omitting* a field also clears it (see #1).



## Typed Queries

<!-- localpocket-compile: typed-readme -->
```dart
final donePage = await tasks.query(
  where: [
    Tasks.done.eq(false), // not done
    Tasks.status.inValues([TaskStatus.todo, TaskStatus.done]), // one of these
    Tasks.priority.between(1, 5), // priority in range
    Tasks.dueAt.isNull(), // no due date set
  ],
  orderBy: [Tasks.priority.desc], // sort, then take the page
  limit: 20,
);

final allDone = await tasks.query(
  // to make the query return all the results
  // although not recommended
  // but you can explicitly use `Limits.unbounded`
  limit: Limits.unbounded,
  where: [Tasks.done.eq(true)],
);

// conditions compose into bigger ones with
// & (and), | (or) and ~ (not). parentheses
// decide the order, like in arithmetic
final matching = await tasks.query(
  where: [
    (Tasks.done.eq(true) | Tasks.priority.eq(5)) &
        ~Tasks.title.startsWith('Draft'),
  ],
  // select trims every row down to these fields.
  // reading anything else from these rows throws
  select: [Tasks.title, Tasks.priority],
  limit: 20,
);

// queryAfter continues a listing from the cursor
// the previous page returned. same `where`, same
// `orderBy` — just the next slice of results.
// check hasMore before asking for the next page
final firstPage = await tasks.query(
  where: [Tasks.done.eq(false)],
  orderBy: [Tasks.priority.desc],
  limit: 20,
);
final nextPage = firstPage.hasMore
    ? await tasks.queryAfter(
        firstPage.nextCursor!,
        where: [Tasks.done.eq(false)], // same shape as firstPage
        orderBy: [Tasks.priority.desc],
        limit: 20,
      )
    : null;

// get reads one record by id.
// null when there is no such record — it doesn't throw
final oneTask = await tasks.get('tsk1234567890ab');

// fields are read through the descriptor: row(Tasks.field)
final oneTitle = oneTask?.call(Tasks.title);

// count returns how many rows match. nothing else
final activeCount = await tasks.count(where: [Tasks.done.eq(false)]);

// ids returns the matching record ids
// instead of whole rows
final openIds = await tasks.ids(
  where: [Tasks.done.eq(false)],
  orderBy: [Tasks.priority.desc],
  limit: 100,
);

// sum / min / max / avg work on number fields only
// (integer, real, date) — anything else won't compile.
// they return null when no rows match
final priorityTotal = await tasks.sum(Tasks.priority);
final heaviest = await tasks.max(Tasks.priority);
final lightest = await tasks.min(Tasks.priority);
final average =
    await tasks.avg(Tasks.priority, where: [Tasks.done.eq(false)]);

// distinct lists the unique values a field holds
final priorities = await tasks.distinct(Tasks.priority);

// countDistinct counts them instead of listing them
final priorityCount = await tasks.countDistinct(Tasks.priority);
```

**Gotchas:**

1. **`limit` is required on `query`, `queryAfter` and `ids`.** A read without
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

4. **A pagination cursor is locked to the query shape it came from.**
   `queryAfter` must repeat the same `where`, `orderBy` and `select` as the
   page that produced the cursor — anything different throws
   `StaleCursorError` instead of returning a wrong page. `limit` may change
   between pages. `nextCursor` is `null` on the last page, so check `hasMore`.

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
   `query`, `queryAfter`, `ids`, `count`, `distinct`, the aggregates and
   `watch` — build a condition once and reuse it on all of them (`count`
   simply has no ordering or paging slots).





---

### Step 4: Typed Queries


---

### Step 5: FTS Search & Reactive Watches

Search requires an `FtsSpec` on the store. Hits carry `id`/`score` plus `fetch()` for the current row. Watches wrap the engine streams one-to-one — coalescing and invalidation are unchanged.

<!-- localpocket-compile: typed-readme -->
```dart
  final hits = await tasks.search('ship version', limit: 10);
  for (final hit in hits) {
    final TypedRow<Tasks>? current = await hit.fetch();
    if (current != null) {
      current(Tasks.title);
    }
  }

  final querySub = tasks
      .watch(where: [Tasks.done.eq(false)], limit: 50)
      .listen((List<TypedRow<Tasks>> rows) {});

  final rowSub =
      tasks.watchOne('tsk1234567890ab').listen((TypedRow<Tasks>? row) {});

  await querySub.cancel();
  await rowSub.cancel();
  await db.close();

  // Keep analyzed values live in this complete documentation fixture.
  Tasks.title;
  donePage;
  matching;
  firstPage;
  nextPage;
  oneTitle;
  activeCount;
  openIds;
  heaviest;
  lightest;
  average;
  priorityCount;
  priorities;
  priorityTotal;
```

---

### Domain Models Without Code Generation

`TypedRow` intentionally uses descriptor access instead of generated properties. Consumers
can restore domain-oriented dot reads with a small wrapper and hide the write values behind
intent-named mutations. These are application recipes, not new LocalPocket APIs.

<!-- localpocket-compile: typed-readme -->
```dart
final class Task {
  const Task(this._row);

  final TypedRow<Tasks> _row;

  String get id => _row.id;
  String get title => _row(Tasks.title);
  TaskStatus? get status => _row(Tasks.status);
  bool get isDone => _row(Tasks.done) ?? false;
  DateTime? get dueAt => _row(Tasks.dueAt);
}

extension TaskOperations on TypedCollection<Tasks> {
  Future<Task?> readTask(String id) async {
    final row = await get(id);
    return row == null ? null : Task(row);
  }

  // WRITES are field-native values — `Tasks.done.set(true)` is typed by the
  // field: wrong values and wrong stores are compile errors. `null` clears
  // an optional field.
  Future<void> markDone(String id) => patch(id, [Tasks.done.set(true)]);

  Future<void> rename(String id, String newTitle) =>
      patch(id, [Tasks.title.set(newTitle)]);
}
```

Changing a descriptor type makes incompatible wrapper getters and helpers fail analysis. No mirrors, macros, extension types, or package code generation are involved.

The principal typed building blocks are `StoreDef`, `Fields`, `FieldDef`,
`Write`, `Writes`, `TypedRow`, `TypedCollection`, `Cond` (with the
`FieldCond`, `AllCond`, `AnyCond`, and `NotCond` node types),
`OrderTerm`, `TypedPage`, `TypedSearchHit`, and the identity-enforcing
`TypedStoreRegistry`. Identity failures surface as
`TypedStoreMismatchError`.

### Typed Best Practices

- **One definition instance per store, ever.** The private constructor plus static accessors (`Tasks.store`, `Tasks.title`) is the canonical pattern; sharing that single object is how every file gets the same typed handle. A second instance with the same name throws `TypedStoreMismatchError`.
- **Typed handles for application code.** Use `db.store(...)` everywhere; keep raw maps for engine-boundary surfaces only — migrations, `DocumentMigration`, conflict records/resolvers, and codecs.
- **Wrap rows in a domain class** (see above) and express mutations as intent-named helpers, so call sites read like business operations instead of builder chains.
- **Writes are values too.** `Tasks.title.set('x')` collected into `put([...])` / `patch(id, [...])` keeps every write compile-checked against its field — the same values build single writes and batches.
- **Compose filters with the algebra.** `&`, `|`, and `~` build boolean trees you can store in a variable and reuse on every terminal; NOT replaces not-equal (`~field.eq(v)` matches the same rows `field <> v` did).
- **Never cast descriptors across stores or through `dynamic`.** The runtime identity check still throws, but the compile-time check is the product.
- **Use `indexSpec([...])` and `ftsSpec([...])` for typed schema extras.** They derive names from descriptors, remain non-`const`, and leave raw `IndexSpec`/`FtsSpec` available at engine boundaries.
- **Prefer `schema.dateTime` for timestamps** (UTC-pinned in both directions) and give enums explicit `wire:` names when a persisted value must survive enum renames.
- **Use `select` projections only on hot paths** — reading an unselected descriptor throws by design.
- **`setExtra` accepts only undeclared keys**; declared and system names (`id`, `archived`, `hidden`, `extra`) are rejected so legacy keys cannot shadow schema fields.

### Typed Model Limits

- Required descriptor **types** are non-nullable, but a write list cannot prove that every required field was set. Required-field presence remains engine-enforced at runtime.
- `TypedRow` is a thin wrapper, not a `Map`; it wraps one engine map without copying. `extra` exposes undeclared read values and `asMap()` is the advanced escape hatch.
- `schema.json` intentionally narrows the typed value to `Map<String, Object?>?`; raw `Field.json` also accepts lists. `jsonList<T>` validates/casts elements while decoding.
- `.req()`, encryption, and uniqueness exist only for field kinds supported by the engine schema factories.
- Normal cross-store descriptor misuse fails at compile time. Casts or `dynamic` can defeat that protection, in which case runtime identity checks throw `TypedStoreMismatchError`.
- The typed v1 API has no create-only operation or per-write durability argument; use `put` for upsert and transactions for durability selection.

### Advanced: Raw Maps and Coexistence

Typed and raw access can coexist over the same registered store. Both use the same SQLite rows, validation, encryption, outbox, synchronization, and worker wire operations; adopting typed models changes neither storage nor wire formats.

```dart
final typedTasks = db.store(Tasks.store);
final rawTasks = db.collection('tasks');

await rawTasks.patch('tsk1234567890ab', {'done': false});
final typedRow = await typedTasks.get('tsk1234567890ab');
final rawMap = typedRow?.asMap();
```

Raw collections remain supported for interoperability, dynamic schemas, migrations, codecs, conflict records/resolvers, and gradual adoption. They are not deprecated in this release.

---

### Step 6: Local & Remote Change Hooks

While `watch()` provides query snapshot streams for UI rendering, **Change Hooks** (`events`, `onLocal`, `onRemote`, `onResolution`) emit post-commit discrete mutation events carrying `oldRecord`, `newRecord`, `changedFields`, `origin`, and `action`.

Use hooks to trigger out-of-band side effects like sending push notifications, displaying local alerts, driving analytics, or logging audit trails.

```dart
final tasks = db.collection('tasks');

// 1. Listen for LOCAL changes (e.g. user completes a task -> send push notification to server)
tasks.onFieldTransition('completed', from: false, to: true, origin: ChangeOrigin.local)
    .listen((event) {
      print('Task ${event.id} marked done locally by user.');
      print('Old: ${event.oldRecord}');
      print('New: ${event.newRecord}');
      // Trigger out-of-band push notification or analytics...
    });

// 2. Listen for REMOTE changes (e.g. task updated from another client -> show local device notification)
tasks.onRemote(field: 'status').listen((event) {
  final oldStatus = event.oldValue('status');
  final newStatus = event.newValue('status');
  print('Task "${event.newRecord?['title']}" moved from $oldStatus to $newStatus on server.');
  // NotificationService.show(...);
});

// 3. Listen for 3-WAY MERGE / CONFLICT resolutions
tasks.onResolution().listen((event) {
  print('Task ${event.id} was merged/resolved. Modified fields: ${event.changedFields}');
});

// 4. Global database event stream across all stores
db.events.whereLocal().whereField('priority').listen((event) {
  print('Local priority change in store "${event.store}" for record ${event.id}');
});
```

#### Event Model (`RecordChangeEvent`)

| Property / Method | Type | Description |
|---|---|---|
| `store` | `String` | Collection name |
| `id` | `String` | Record ID |
| `origin` | `ChangeOrigin` | `local` (user code), `remote` (sync pull), or `resolution` (3-way merge / conflict resolution) |
| `action` | `ChangeAction` | `create`, `update`, `archive`, `restore`, `purge`, `hide` |
| `oldRecord` | `Map<String, Object?>?` | Logical state before mutation (`null` on creation) |
| `newRecord` | `Map<String, Object?>?` | Logical state after mutation (`null` on purge) |
| `changedFields` | `Set<String>` | Set of modified field names |
| `hasFieldChange(field)` | `bool` | Checks if `field` was modified |
| `isFieldTransition(field, {from, to})` | `bool` | Checks for a specific `from` $\rightarrow$ `to` transition |
| `oldValue(field)` / `newValue(field)` | `Object?` | Field value before and after the change |

---

### Step 7: Synchronize with PocketBase

Connect your database to a remote PocketBase server:

```dart
import 'package:localpocket/localpocket.dart';

// Configure PocketBase wire backend
final backend = PocketBaseBackend(
  baseUrl: Uri.parse('https://pocketbase.example.com'),
  tokenProvider: TokenProvider.staticToken('YOUR_USER_AUTH_TOKEN'),
  stores: const ['tasks'],
);

// Initialize sync engine
final engine = SyncEngine(
  pocket: db,
  backend: backend,
  config: SyncConfig(
    syncInterval: const Duration(seconds: 15),
    pushDebounce: const Duration(milliseconds: 300),
  ),
);

// Listen to sync engine status
engine.status.listen((status) {
  print('Sync State: ${status.state}, Pending Ops: ${status.pending}');
});

// Start background synchronization (REST Pull/Push)
await engine.start();

// SSE Realtime is application-managed: start it explicitly to receive
// live change hints (polling/anti-entropy sweeps remain the backstop).
await backend.startRealtime();

// Or trigger an immediate one-shot sync cycle
final report = await engine.syncNow();
print('Sync completed. Pushed: ${report.pushed}, Pulled: ${report.pulled}');
```

---

## PocketBase Server Requirements & Setup

LocalPocket uses an envelope-based storage pattern on the server to guarantee conflict-free, multi-collection synchronization.

### PocketBase Collection Schema

Create a single **Base** collection named **`data`** in your PocketBase Admin UI with the following fields:

| Field Name | Type | Options / Rules | Description |
|---|---|---|---|
| `id` | `text` | 15 alphanumeric characters (default PB ID) | Matches the LocalPocket record ID |
| `store` | `text` | **Required**, Plain Text | Name of the local collection (e.g. `tasks`) |
| `data` | `json` | **Required**, JSON | Document attributes and schema-less overflow fields |
| `created` | `autodate` | Default | Creation timestamp |
| `updated` | `autodate` | Default | Update timestamp for incremental watermarks |

### Recommended API Rules

Set API rules on the `data` collection (e.g. `@request.auth.id != ""` or user ownership checks) to restrict read/write access to authenticated users.

### Concurrent Edits on PocketBase Are Last-Write-Wins

PocketBase offers no conditional (compare-and-swap) writes, so **concurrent edits to the same record from two clients resolve last-write-wins on the server**: the final stored value is the one whose write arrived last, whichever client that was. The client-side 3-way merge only protects pushes that are time-serialized; apps needing strict optimistic concurrency must enforce it server-side (a record hook or custom endpoint) — the client's `RemoteVersionConflict` re-merge machinery exists for backends that *can* throw it.

---

## Conflict Resolution & 3-Way Merge

LocalPocket uses a deterministic **3-Way Merge Engine** that inspects divergence against the shared pre-edit base:

$$\text{Base} \xrightarrow{\text{divergence}} (\text{Local}, \text{Remote})$$

### Precedence & Built-in Resolvers

Precedence hierarchy:
1. **Field-Level Overrides** (`fieldOverrides` on the schema's `ConflictPolicy`)
2. **Collection-Level Resolver** (`collectionResolver`)
3. **Package Default:** `RemoteWinsResolver` (non-overlapping field edits from both sides are preserved automatically)

| Resolver | Strategy | Ideal Use Case |
|---|---|---|
| `RemoteWinsResolver` *(Default)* | Takes the remote value on overlapping fields | Standard editable text / status fields |
| `LocalWinsResolver` | Preserves the local value on overlapping fields | Client-local preferences, drafts |
| `CounterResolver` | Computes $\text{Base} + (\text{Local} - \text{Base}) + (\text{Remote} - \text{Base})$ | View counts, numeric tallies, likes |
| `SetUnionWithDeletionWinsResolver` | Preserves 2-way additions; drops removals from either side | Tag lists, categorizations, multi-select IDs |
| `AppendOnlyListResolver` | Concatenates list items with deduplication (deep-equality, or per-item `identity`) | Event logs, audit trails, history |
| `AppendOnlyLinesResolver` | Concatenates text line-by-line (trims, skips blanks, dedups lines) | Multi-line notes, thread messages |
| `CustomResolver` | Custom Dart callback `(MergeContext ctx) => ...` | Complex business logic, manual review escalation |

### Configuring Conflict Policies

```dart
final postSchema = CollectionSchema(
  name: 'posts',
  version: 1,
  fields: [
    Field.text('title', required: true),
    Field.int('views'),
    Field.jsonList('tags'),
  ],
  conflictPolicy: ConflictPolicy(
    fieldOverrides: {
      'views': const CounterResolver(),
      'tags': const SetUnionWithDeletionWinsResolver(),
    },
    editsUnarchive: true, // Auto-restores archived records on local edits
  ),
);
```

### Manual Conflict Review UI

When a resolver sets `needsReview: true`, the conflict is held in `lp_conflicts` for review:

```dart
final pendingConflicts = await db.conflicts.list();

for (final c in pendingConflicts) {
  print('Conflict on ${c.store}/${c.recordId}: Local=${c.localData} vs Remote=${c.remoteData}');

  // Option A: Accept local version
  await db.conflicts.acceptLocal(c.store, c.recordId);

  // Option B: Accept remote version
  // await db.conflicts.acceptRemote(c.store, c.recordId);

  // Option C: Resolve with a custom merged payload
  // await db.conflicts.resolve(c.store, c.recordId, {'title': 'Resolved Title'});
}
```

---

## Schema Evolution & Migrations

LocalPocket supports versioned schema migrations with forward-only ledgers:

```dart
final v2Schema = CollectionSchema(
  name: 'tasks',
  version: 2,
  fields: [
    Field.text('title', required: true),
    Field.text('status'),
    Field.int('priority'),
    Field.text('category'), // New field added in v2
  ],
  migrations: [
    StoreMigration(
      toVersion: 2,
      addedFields: [Field.text('category')],
      // Optional chunked backfill transform (10,000 rows/txn)
      transform: (oldRow) => {'category': 'general'},
    ),
  ],
);
```

For destructive changes (dropping columns or modifying constraints), LocalPocket executes a safe **12-step table rebuild** with automated backup copies.

---

## Field-Level Encryption (AES-256-GCM)

Mark sensitive fields as `encrypted: true` and supply a `FieldCipher`:

```dart
import 'package:localpocket/localpocket.dart';

final cipher = AesGcmFieldCipher(List<int>.filled(32, 7)); // 256-bit key

final patientSchema = CollectionSchema(
  name: 'patients',
  version: 1,
  fields: [
    Field.text('name', required: true),
    Field.text('ssn', encrypted: true),
    Field.json('medical_notes', encrypted: true),
  ],
);

final db = await LocalPocket.open(
  path: '/path/to/app.db',
  stores: [patientSchema],
  fieldCipher: cipher,
);
```

*Encrypted fields use fresh 12-byte random nonces per write and are stored as ciphertext in SQLite while decrypting transparently during reads.*

### Threat model and ciphertext format

Field-level encryption protects values **at rest** (against a reader who can open the raw
database file or its backups). It is *not* full-database encryption: schema, row ids, `extra`
keys, and the set of encrypted fields remain visible, and the key must be supplied on every
open. It does not defend against a local attacker who can read the process's memory.

Each encrypted value is an AES-256-GCM box (`0x01 ‖ nonce(12) ‖ ciphertext ‖ tag(16)`)
encrypted through `package:cryptography` — the Web Crypto API on browsers, and the package's
audited pure-Dart engine on native and as the non-secure web-worker fallback. The format
version byte is the migration hook: `decrypt` rejects unknown versions loudly instead of
silently misreading them. The authenticated data is bound to the exact
`store \x00 field \x00 recordId` triple the value belongs to (see `fieldAad`), so a ciphertext
captured from one cell cannot be transplanted into another same-shaped field or record.

Two caveats worth knowing:

- **Blob attachments** encrypted via `EncryptingBlobStore.withCipher` reuse the same
  `AesGcmFieldCipher`, but blob identity is the plaintext hash, not a record — so blob bytes
  are NOT AAD-bound to a store/record. To bind blobs to a record, encrypt them in your
  application layer with a per-record AAD before `attach`.
- **Legacy ciphertext (≤ v0.1.x, unversioned and AAD-free) does not decrypt** under the new
  format. Re-encrypt existing encrypted stores with the v1 cipher before upgrading; reads of
  legacy bytes throw a `StateError` naming the version.

---

## Binary Files & Blob Attachments

Attach files with streaming SHA-256 hashing and automatic deduplication:

```dart
// Pluggable blob storage: BlobStore, MemoryBlobStore, NativeBlobStore, EncryptingBlobStore
// 1. Attach a file
final fileRef = await db.files.attach(
  store: 'tasks',
  recordId: 'tsk1234567890ab',
  field: 'attachments',
  bytes: fileStream,
  name: 'document.pdf',
);

// 2. Open a local file stream
final stream = await db.files.open(
  store: 'tasks',
  recordId: 'tsk1234567890ab',
  refId: fileRef.refId,
);

// 3. Garbage-collect unreferenced blobs and enforce storage limits
await db.files.gc();
await db.files.enforceStorageCap(maxBytes: 500 * 1024 * 1024); // 500 MB cap
```

### Blob Storage Durability

`attach` refuses to store bytes in a **volatile** blob store (bytes held only
in memory, which vanish on restart — e.g. on web when OPFS is unavailable and
`WebBlobStore` falls back to memory) unless you explicitly opt in:

```dart
// Reports whether the configured store survives restarts (web: OPFS-backed).
final durable = await db.files.isBlobStorageDurable;

// Attaching to a volatile store throws unless you accept the trade-off:
final ref = await db.files.attach(
  store: 'tasks',
  recordId: taskId,
  bytes: fileStream,
  allowVolatileBlobs: true, // bytes may not survive a reload
);
```

With a volatile store, the SQLite metadata (`lp_blobs` / `lp_file_refs`)
survives but the attachment bytes disappear on worker termination or reload —
check `isBlobStorageDurable` to surface this to users instead of silently
losing attachments.

---

## Storage Maintenance & Compaction

Keep disk usage bounded on long-running clients:

```dart
// Checkpoints WAL, prunes settled outbox rows, and compacts old archived data
await db.runMaintenance();

// Or run targeted maintenance tasks
await db.walCheckpoint(); // PRAGMA wal_checkpoint(TRUNCATE)
await db.vacuum();        // VACUUM or PRAGMA incremental_vacuum
await db.pruneOutbox();   // Prunes superseded or settled outbox entries
```

---

## Transactions & Durability Modes

All domain rows, outbox entries, and sync rows commit atomically within a single serialized write transaction:

```dart
// Bulk writes via putAll
await db.transaction((tx) async {
  await tx.collection('tasks').putAll([
    {'title': 'Task 1', 'priority': 1},
    {'title': 'Task 2', 'priority': 2},
  ]);
});

// Durability tuning (per mutation or per transaction):
//
// - DurabilityClass.normal (DEFAULT): PRAGMA synchronous=NORMAL. Under WAL
//   this is app-crash-safe — a process crash never corrupts the database and
//   all commits up to the last checkpoint are durable — while avoiding a disk
//   flush on every commit (~5x faster writes). Only an OS-level power loss /
//   kernel panic can lose the most recent commits.
// - DurabilityClass.full: PRAGMA synchronous=FULL. Every commit is flushed to
//   disk before the call returns; survives power loss. Use it for writes whose
//   loss would be unacceptable (payments, irreplaceable user edits).
await tasks.patch(
  'tsk1234567890ab',
  {'completed': true},
  durability: DurabilityClass.full,
);

// The same knob governs whole transactions:
await db.transaction(
  (tx) async {
    await tx.collection('orders').put(order);
    await tx.collection('audit').put(entry);
  },
  durability: DurabilityClass.full,
);
```
---

## Running Tests & Benchmarks

Run **all** tests with these three commands — the first runs the fast hermetic
suite, the other two runs everything else (the live-server and web-gate
suites):

```bash
# 1. Fast suite — unit, integration, and hermetic wire E2E. The `real` (live
#    PocketBase, test/secret.dart) and `gate` (release) suites are tagged and
#    skipped by default, so this stays offline and quick.
dart test

# 2. The rest — every skipped suite: the live PocketBase E2E plus the
#    release/web gates.
dart test --tags real --run-skipped -j 1
dart test --tags gate --run-skipped -j 1
```

> **Why `-j 1`:** the gate suites spawn `dart run` subprocesses that re-stage
> the native `sqlite3.dll` via the native-assets build hook. On Windows a
> loaded DLL cannot be deleted, so running those subprocesses while the same
> test VM still has `sqlite3.dll` loaded fails with `Access is denied` — which
> is exactly why the gates are run on their own (this second command).

Optional extras:

```bash
# Static analysis
dart analyze

# Performance benchmark suite
dart run benchmark/benchmark.dart

# Live PocketBase E2E alone (without the release gates) — the same
# backend-swapped scenarios run against pb.apexo.app
dart test --tags real --run-skipped -j 1
dart test --tags gate --run-skipped -j 1
```

## Update & test coverage

```bash
# Update coverage baseline
dart test --coverage=coverage

# then
dart run tool/coverage_gate.dart
```

---

## Release Checklist

LocalPocket includes a single-command local pre-release checklist runner:

```bash
# Run the single pre-release decision (analysis, policy, API, web, browser matrix, tests, coverage)
dart run tool/release.dart

# Fast run skipping coverage and package publish validation
dart run tool/release.dart --no-coverage --no-publish

# Run heavy/soak and release-gate tests
dart run tool/release.dart --long

# Run performance benchmarks against committed baseline
dart run tool/release.dart --perf

# Add live PocketBase validation and package publish validation
dart run tool/release.dart --real --publish

# List all ordered release checks
dart run tool/release.dart --list
```

The release runner includes Dart/VM tests, web compilation and asset gates,
the Chromium/Firefox/WebKit Playwright matrix, package asset validation, and
release baseline evidence. Browser JavaScript execution is not included in
Dart coverage. Playwright WebKit is not real Safari validation. Web uses
`TRUNCATE` journaling, SQLCipher is unsupported, and sync is currently a
single-tab configuration. The web `:memory:` path is currently unsupported
with the dedicated-worker connector because sqlite3_web's worker memory mode
requires a SharedWorker.

---

## License

MIT License (see `LICENSE`).
