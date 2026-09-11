# LocalPocket

<p align="center">
  <img src="graphics/logo.svg" alt="LocalPocket" width="180">
</p>

- **Fast & Embedded**: Powered by SQLite with built-in in-memory caching.
- **Strongly Typed**: Schema-first design with complete compile-time type safety.
- **Cross-Platform**: Unified API across mobile, desktop, and web with zero boilerplate.
- **Durable**: Full ACID transactions via interactive `Transaction` objects and crash resilience.
- **Reactive**: Watchable streams for queries and store changes.
- **Synchronized**: Seamless two-way sync with PocketBase and realtime SSE updates.
- **Search**: Built-in full-text search with SQLite FTS5.
- **Encrypted**: Field-level AES-256-GCM encryption everywhere, plus whole-database encryption on native.
- **Binary Attachments**: File storage with automatic deduplication and background streaming.
- **Schema Migrations**: Declarative schema evolution with automatic backfills and safe rebuilds.
- **Conflict-aware**: Deterministic 3-way conflict resolution with field-level resolvers.

---

## Installation

Add `localpocket` to your `pubspec.yaml`:

```yaml
dependencies:
  localpocket: ^0.3.1
```

---

## Quick Start

### Step 1: Store & Schema

```dart
import 'package:localpocket/localpocket.dart';

enum TaskStatus { todo, inProgress, done }

final class Tasks extends StoreDef<Tasks> {
  // ----- start with defining store name ----- //
  // Singleton pattern ensures a single, stable store instance across your app:
  Tasks._private() : super(name: 'tasks', version: 1);
  static final Tasks store = Tasks._private();

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
  // Declares which fields exist in this store.
  // Each field descriptor is created via the store's `schema` (`Fields<Tasks>`).
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
  // true: keep it in the local store (soft archive).
  // false: delete it from the local store.
  // default: true
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

- **Enums**: Stored as strings. Unmapped values use `Enum.name`; provide the optional `wire` map to customize stored string representations (e.g. `'in_progress'`).
- **`schema.dateTime` vs `schema.date`**: Use `schema.dateTime` for timestamps (`DateTime?`, automatically stored in UTC). Use `schema.date` when working directly with epoch-millisecond integers (`int?`) or computing numeric aggregates (`sum`/`min`/`max`).
- **`schema.integer` vs `schema.real`**: Use `schema.integer` (`int?`) for whole numbers and counts, and `schema.real` (`num?`) for fractional measurements. Both support `.req()`, comparisons, and numeric aggregates.
- **`schema.ref`**: Stores a record id (`String?`) referencing another store. Pass `enforceFk: true` to enforce foreign key constraints. References are automatically indexed for fast lookups.

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

  // Compose conditions by combining & and |
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
  final openDB = await LocalPocket.open(
    LocalPocketOptions(
      path: ':memory:', // memory, not persisted
      stores: [Tasks.store],
    ),
  );
  final tasks = openDB.store(Tasks.store);

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
- Binary attachments

and more...

## CRUD

Every mutation is a list composed of `Write` commands —
`Tasks.title.set(...)` builds one, and `Writes` provides the id
and extra-field helpers. Writes apply inside a transaction:
either all of them or none.

```dart
  await tasks.put([
    // Put operations are upserts:
    // if an ID is provided and the record exists, it is replaced;
    // if not found, it is inserted;
    // if omitted, a new ID is generated automatically.
    Writes.id('my15charlongid0'),

    // Field write syntax:
    Tasks.title.set('My new task'),
    Tasks.done.set(true),
    Tasks.priority.set(1),
    Tasks.status.set(TaskStatus.todo),
    Tasks.dueAt.set(DateTime.now().add(const Duration(days: 14))),

    // Extra untyped fields are supported if needed:
    Writes.extra('extra key', 'extra value')
  ]);

  // Batch put:
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

  // Upsert: updates only the specified fields,
  // leaving all other existing fields untouched.
  await tasks.upsert([
    Writes.id('my15charlongid0'),
    Tasks.title.set('My new task'),
    Tasks.done.set(true),
    Tasks.priority.set(1),
    Tasks.status.set(TaskStatus.todo),
    Tasks.dueAt.set(DateTime.now().add(const Duration(days: 14))),
    Writes.extra('extra key', 'extra value')
  ]);

  // Batch upsert:
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

  // Patch: updates an existing record without touching unspecified fields.
  // Throws RecordNotFoundException if the record does not exist.
  // Record IDs are immutable, so Writes.id inside patch is rejected.
  await tasks.patch('my15charlongid1', [
    Writes.id('my15charlongid2'), // <- throws
    Tasks.title.set('title gets updated')
  ]);

  // Batch patch with a map of id -> writes:
  await tasks.patchAll({
    'my15charlongid1': [Tasks.title.set('title gets updated')],
    'my15charlongid2': [Tasks.title.set('title gets updated')],
  });

  // Batch point-read: fetches multiple records in a single query.
  // Rows return in the requested id order; missing records drop out.
  await tasks.getAll([
    'my15charlongid1',
    'my15charlongid2',
  ]);

  // Soft-deletes a record by archiving it.
  // A never-synced archive is soft-deleted too (default).
  // Set keepUnsyncedArchives: false to hard-delete it locally instead.
  await tasks.archive('my15charlongid1');

  // Restores an archived record.
  await tasks.restore('my15charlongid1');

  // Permanently deletes a record locally along with its metadata and attachments.
  await tasks.purge('my15charlongid1');
```

**Key Points:**

1. **`put` replaces the whole record.** Any existing field not explicitly listed is reset to `null`.
2. **`upsert` updates only specified fields.** Existing fields not listed remain untouched. If the record does not exist, it is inserted.
3. **`patch` updates existing records only.** `patch` throws `RecordNotFoundException` if the record does not exist.
4. **Summary of write operations:**

| Op | If record missing | If record exists | Behavior |
| --- | --- | --- | --- |
| `put` | Inserts new record | Replaces the whole record | Create or replace |
| `upsert` | Inserts new record | Updates only specified fields | Create or merge |
| `patch` | **Throws** `RecordNotFoundException` | Updates only specified fields | Update only |

5. **Record IDs are immutable.** Record IDs cannot be changed once created.
6. **Custom IDs format:** Custom IDs must be exactly 15 characters drawn from letters, digits, or underscore (PocketBase's system `id` pattern, `^[a-zA-Z0-9_]{15}$`). If omitted, LocalPocket generates a valid ID automatically.
7. **Batches are atomic.** `putAll` and `patchAll` commit as a single transaction. If any write in `patchAll` fails, the entire batch rolls back.
8. **Archiving unsynced records:** If a record is archived before it has synced to the server, it is kept as a soft-deleted local row by default, so a user "delete" before the first sync is never lost. Set `keepUnsyncedArchives: false` on your store to hard-delete such records locally instead (they have no remote delete to push).
9. **`archive` and `restore` throw on missing records.** Calling `archive` or `restore` on a non-existent ID throws `RecordNotFoundException`. Calling `purge` on a missing ID is a safe no-op.
10. **`purge` is a local hard delete.** `purge` is a **hard purge**: the row, its sync metadata, and its attachments are permanently removed locally. The server copy (if synced) remains intact unless deleted on the server.
11. **Clearing optional fields:** Setting an optional field to `null` clears its value. Required fields (`.req()`) cannot be set to `null`. In `put`, omitting an optional field also clears it.
12. **`Row.toJson()` is not the pushed payload.** `toJson()` is the local logical snapshot: it always carries `archived` and every declared field, including declared-but-null ones. The sync payload omits nulls and only emits `archived` when it is true, so a pushed record can be a strict subset (e.g. `{id, title}`). Use `toJson()` for local reads; inspect `db.changes`/`SyncBackend` payloads when you need the wire form.

### Adopting existing JSON documents

A store may declare **zero fields** and still hold arbitrary JSON: undeclared keys travel through `Writes.extra` and round-trip losslessly. That is the supported way to migrate an existing JSON collection in phases.

- **Write a document as-is:** `db.store(Legacy.store).put([...])` with `Writes.id(doc['id'])` plus `Writes.extra(key, value)` for every other key — or in one call, `Writes.fromJson(Legacy.store, doc)`, which splits `id` into `Writes.id`, declared keys into typed writes (encoding ISO dates and enum wire strings for you), and unknown keys into `Writes.extra`. `archived` is skipped: call `store.archive(id)` yourself if the source document was archived.
- **Promote keys later:** declare the keys you want to query on and add a `StoreMigration(toVersion: n, addedFields: [...])` (bump the store `version`). The migration **backfills the new columns from `extra`**, so no value is lost when a key becomes a typed column. A value in `extra` that does not match the declared field kind fails the migration loudly, naming the record and field.
- **Convert single values by hand** with the boundary codec pair `FieldDef.encode` / `FieldDef.decode`, e.g. `FieldWrite(owner, name, field.encode(value))`.

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

**Key Points:**

1. **`limit` is required on `query` and `ids`.** Every query requires an explicit limit to ensure fast performance. Pass `limit: Limits.unbounded` if you explicitly want to retrieve all rows.
2. **The `where` list defaults to AND.** Every condition in the list must match. To combine conditions with OR, use `|`. Operator precedence: `&` binds tighter than `|` (use parentheses for clarity).
3. **Conditions are strictly typed per store.** `Cond<S>` prevents accidentally mixing conditions from different stores into the same query at compile time.
4. **Checking for empty or null fields:** Use `.isNull()` or `.eq(null)` to check optional fields. Required fields (`.req()`) cannot be null.
5. **Keyset pagination:** Calling `page.next()` or `page.prev()` navigates through results using cursor tokens. `hasNext` and `hasPrev` indicate whether adjacent rows exist. If persisting cursors across app sessions, supply the cursor token via `after:`.
6. **`get` point reads:** Fetches a single record by ID and returns `null` if not found. Unlike queries, `get` also returns archived or hidden rows.
7. **Numeric aggregates:** `sum`, `min`, `max`, and `avg` work with numeric fields (`integer`, `real`, `date`) and return `null` if no rows match.
8. **`distinct` value limit:** `distinct` defaults to at most 1,000 unique values unless you provide an explicit `limit`. `countDistinct` counts all unique values directly.
9. **Field projection:** Specifying `select:` populates only the chosen fields in the returned `Row`, keeping queries lightweight. Accessing unselected fields throws an error.
10. **Consistent query options:** Parameters like `where`, `orderBy`, `limit`, `includeArchived:`, and `includeHidden:` work consistently across `query`, `ids`, `count`, `distinct`, and `watch`.

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
    print('task ${change.id} changed in ${change.storeName}');
  });
  await changeSub.cancel();
```

**Key Points:**

1. **Initial emission:** A watch query emits the current matching results immediately upon subscription.
2. **Coalesced updates:** Rapid consecutive writes (e.g. within a transaction) are batched so listeners receive the latest state without redundant re-renders.
3. **Change-driven:** New events are emitted only when the actual result set changes.
4. **Record change notifications:** To observe individual record mutations instead of query sets, listen to `store.changes`, which emits a `ChangeNotification` on every write.
5. **Visibility flags:** Soft-deleted or hidden records are omitted from watch results by default. Pass `includeArchived:` or `includeHidden:` to include them.
6. **Limit on watches:** `watch` streams respect the specified `limit`. Pass `Limits.unbounded` to watch the full matching set.
   - **Performance warning:** an unbounded watch re-runs its query and re-emits the WHOLE result set on every change. On a 20 000-row store the first emission took ~730 ms and a single `patch` triggered two further emissions totalling ~805 ms. If you are using `watch` to maintain a cache of a large store, prefer `store.changes` (one notification per committed change, ids only) and refresh incrementally.
7. **Clean lifecycle:** Each call to `watch()` creates an independent stream. Cancelling your subscription immediately frees all listeners and resources.
8. **Sync integration:** Updates pulled from PocketBase automatically update active query streams.

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

**Key Points:**

1. **FTS configuration required:** Stores must declare search fields using `ftsSpec` in their schema. Calling `search` on a store without FTS configured throws an error.
2. **Relevance ranking:** `search` returns hits sorted by search relevance score (`hit.score`).
3. **Batch fetching rows:** Hits provide record IDs and scores. Use `tasks.getAll(hits.map((h) => h.id).toList())` to load the full records in a single query.
4. **Visibility filtering:** `search` automatically excludes archived and hidden records by default.

## Synchronization

### token provider

First you need to define a token provider. LocalPocket doesn't ship an
auth layer — you own the credentials. The following example signs in
over PocketBase's plain HTTP auth endpoints:

```dart
import 'package:http/http.dart' as http;
import 'dart:convert';

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

Then define the sync options and attach the sync layer. The returned
`PocketBaseSync` handle exposes the lifecycle, status stream, and control
methods for the synced store.

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
  await sync.setConnectivity(false);
  await sync.setConnectivity(true);

  // Replaces the bearer token the engine holds after a refresh or login.
  await sync.updateAuth('new token');

  // stops the sync engine
  // and closes the realtime connection
  await sync.stop();

  // Runs one full pull → sweep → push cycle immediately and returns its complete report.
  final report = await sync.syncNow();

  report.pulled; // number of records pulled from the server
  report.pushed; // number of records pushed to the server
  report.discarded; // Local edits discarded in favor of the remote.
```


**Key Points:**

1. **`start()` owns realtime.** Calling `sync.start()` launches the sync engine and opens the realtime SSE connection — there is no separate realtime command. Periodic background sync keeps data consistent even if realtime disconnects.
2. **Web support:** On the web, sync runs in a dedicated web worker to keep the user interface responsive.
3. **Realtime updates:** The engine receives realtime notifications from PocketBase and immediately pulls new changes.
4. **Manual sync:** Calling `sync.syncNow()` runs an immediate sync cycle and returns a `SyncReport` detailing pulled, pushed, and resolved records.
5. **Lifecycle management:** Use `pause()` and `resume()` to control periodic background cycles, or `setConnectivity(false)` when the device goes offline.
6. **`report.pulled` counts records APPLIED, not candidates read.** A record the realtime fast path already applied before the cycle started (or a re-delivered record recognized as already applied) is `skipped`, so `pulled` can legitimately be `{store: 0}` on a cycle whose data is present locally. Use `db.changes` when you need every applied change.
7. **Quarantined records are visible.** A remote record the engine rejects (malformed payload, foreign id) is set aside instead of applied. `SyncReport.quarantined` reports the count per store, and `SyncStatus.quarantined` / `SyncStatus.quarantineError` carry the count and the stored reason, so a dropped record never looks like a successful empty pull.
8. **Anonymous/pre-login reads:** `identity` is required and must be stable per account. For data readable without auth (e.g. rendering a login screen), pass an explicit constant such as `identity: 'anonymous'` — it is a real sync scope like any other, just one you manage deliberately.

## Conflict Resolution

LocalPocket uses a deterministic **3-way merge engine**: each edit resolves
against the shared pre-edit base, `base → (local, remote)`. A store declares
its policy on the schema (`StoreDef.conflictPolicy`): per-field resolvers
(`fieldOverrides`), a whole-record resolver (`collectionResolver`), or
neither. Anything undeclared falls through to the default
(`RemoteWinsResolver`). Built-ins cover the common shapes; `CustomResolver`
handles anything else.

Conflicts that need a human are held in `store.conflicts` through the
`StoreConflicts` API; it exposes the backlog, per-record inspection, and
manual resolution actions.

### How merging decides

When changes occur concurrently on a local device and the server:
- **Non-overlapping edits merge automatically**: If you edit field A and the server edits field B, both changes are kept.
- **Overlapping edits use resolvers**: If both sides edited the same field, the declared `ConflictPolicy` resolves which value to keep.
- **Unresolved conflicts escalate for review**: If a resolver declines or needs manual review, the conflict is placed in `store.conflicts` (`StoreConflicts`).

![Conflict-resolution decision flow](graphics/merge.png)

### Declaring resolution policies

```dart
final class Posts extends StoreDef<Posts> {
  Posts._() : super(name: 'posts', version: 1);
  static final Posts store = Posts._();

  static final title = store.schema.text('title').req();
  static final views = store.schema.integer('views');
  static final tags = store.schema.jsonList<String>('tags');

  @override
  List<FieldDef<Posts, Object?>> get fields => [title, views, tags];

  static final reviewResolver = CustomResolver(customResolver);

  @override
  ConflictPolicy? get conflictPolicy => ConflictPolicy(
        // Whole-record resolver: runs when both sides changed the record.
        // Returning null escalates the conflict for manual review.
        collectionResolver: reviewResolver,
        // Field-level overrides:
        fieldOverrides: {
          'views': CounterResolver(max: 1000000), // base + Δlocal + Δremote
          'tags': SetUnionWithDeletionWinsResolver(), // union; deletions win
          'title': LocalWinsResolver(),
        },
        // Editing a locally-archived record unarchives it:
        editsUnarchive: true,
        // When a local edit targets a record deleted remotely:
        // conflict (default) | recreate | discardLocal.
        missingRemote: MissingRemotePolicy.recreate,
      );

  // A custom resolver inspects base, local, and remote values,
  // and returns a merged result — or null to escalate for manual review.
  static MergeResult? customResolver(MergeContext ctx) {
    if (ctx.dirtyLocal.contains('title') &&
        ctx.dirtyRemote.contains('title')) {
      return MergeResult(merged: {
        ...ctx.remote,
        'title': '${ctx.local['title']} / ${ctx.remote['title']}',
      });
    }
    return null; // decline: escalate for review
  }
}
```

> Note: **if a store declares no policy**, that IS the default configuration, overlapping fields take the remote value, and delete races escalate to `store.conflicts`.

#### Available policies

Every resolver below is deterministic — it always produces a value and never
escalates to a human. The only resolver that can is `CustomResolver`, by
returning `null` or `needsReview`.

| Resolver                      | Field type        | What it decides                                                                                                                                    |
| ----------------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `LocalWinsResolver`           | any               | Your local edit wins on contested fields. |
| `RemoteWinsResolver`          | any               | The server's edit wins on contested fields (default policy). |
| `CounterResolver`             | numbers           | Adds up both sides' *changes*: `base + Δlocal + Δremote`. Optional `min`/`max` clamp the result. |
| `SetUnionWithDeletionWinsResolver` | list/set    | Combines elements added by either side; deletions take precedence over re-additions. |
| `AppendOnlyListResolver`      | lists             | Combines items from both sides, dropping duplicates. Pass `identity:` to keep distinct items with identical content. |
| `AppendOnlyLinesResolver`     | text              | Merges newline-delimited text, trimming blank lines and removing duplicate lines. |
| `CustomResolver`              | any               | Custom function returning a merged result map, or `null` to escalate for manual review. |

A note on the union resolver: elements compare by ordinary Dart set
equality — numbers match by value (`2` == `2.0`), and maps/lists match by
identity only, so two equal-content maps count as different elements. If you
need structural identity for list items, `AppendOnlyListResolver` with an
`identity` function is the closer fit.

### Open conflicts

```dart
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

  // don't forget to cancel
  await sub.cancel();

  // Or enumerate the backlog on demand instead of streaming.
  // open is a List<Conflict<Tasks>> sorted by detection time (ascending).
  final open = await tasks.conflicts.listOpen();
  print('there are ${open.length} open conflicts');

  // get the conflict for a specific record
  final conflict = await tasks.conflicts.get("task00000000001");
  conflict?.base; // Row<Task>
  conflict?.local; // Row<Task>
  conflict?.remote; // Row<Task>
  conflict?.detectedAt; // detection time
  conflict?.dirtyLocal; // Set<String> of field names
  conflict?.dirtyRemote; // Set<String> of field names
  conflict?.resolved; // the stored resolution once resolved (null while open)
  conflict?.remoteDeleted; // Whether the remote side is a deletion tombstone

  // Resolve one by id: accept a side wholesale ...
  await tasks.conflicts.acceptLocal('task00000000001');
  await tasks.conflicts.acceptRemote('task00000000002');

  // ... or hand-merge the fields you decide
  // (fields you don't mention keep their local values).
  await tasks.conflicts.resolve('task00000000003', merged: [
    Tasks.title.set('Chosen by the user'),
    Tasks.done.set(true),
  ]);
```

**Key Points:**

1. **Open conflicts pause edits on that record:** Calling `put`, `upsert`, or `patch` on a record with an open conflict throws `ConflictBlockedError` until resolved. Reads continue to work normally.
2. **Deterministic default:** By default, contested fields resolve to the server's version (`RemoteWinsResolver`). Conflicts only escalate to `store.conflicts` if a custom resolver returns `null` or a deletion races a local edit.
3. **Resolving conflicts:** Use `acceptLocal`, `acceptRemote`, or `resolve(id, merged: [...])` to apply resolutions.
4. **Deletion conflicts:** Calling `acceptRemote` on a deletion conflict purges the local record; `acceptLocal` recreates it on the server.

**Note: Concurrent edits on PocketBase are last-write-wins.**
PocketBase does not provide conditional writes. When concurrent edits to the same record occur simultaneously from two clients, they resolve last-write-wins on the PocketBase server: whichever request reaches the server last wins. LocalPocket's client-side 3-way merge resolves conflicts between local offline edits and updates pulled from the server.

## Change hooks

Every committed mutation delivers a `RecordChange` on
`LocalPocket.changes` (all stores) and `Store.changes` (one store).

So, while reactive queries (`.watch`) can be used to watch for mutations to
a result of specific query, `.changes` can be used to watch for any mutation
to the whole database or to a specific store.

This can be useful for invalidating caches, sending push notifications, etc.

### Whole database

```dart
  // you can subscribe to changes in the whole database
  // across multiple stores
  final dbSub = db.changes.listen((change) {
    // .id is the 'id' of the changed row
    print('db change: ${change.storeName}/${change.id}');

    // .action is an enum about the mutation type (create, edit ...etc)
    // .changedFields is a set of strings of changed fields
    print('action=${change.action.name}, fields=${change.changedFields}');
    if (change.action == ChangeAction.update) {
      print('updated row: ${change.id}');
    }

    // could be `local` or `remote` or `resolution`
    print('origin: ${change.origin.name}');
    if (change.origin == ChangeOrigin.remote) {
      print('this change was pushed from another device');
    }

    // .oldRecord and .newRecord are both generic Row<dynamic>
    if (change.oldRecord != null && change.newRecord != null) {
      print('before=${change.oldRecord}');
      print('after=${change.newRecord}');

      // you can certainly cast them to your store's row type
      if (change.newRecord is Row<Tasks>) {
        final newTask = change.newRecord as Row<Tasks>;
        print('newTask.priority=${newTask.priority}');
      }

      // or using switch statements pattern matching:
      switch (change.newRecord) {
        case final Row<Tasks> task:
          print('New task title: ${task(Tasks.title)}');
        case final Row<Posts> post:
          print('New post tags: ${post(Posts.tags)!.length}');
        case null:
          print('Record was purged/deleted');
        default:
          break;
      }
    }
  });

  // don't forget to cancel
  await dbSub.cancel();
```

### Single store

```dart
  // Or watch only one store; each event is a committed record mutation.
  final taskSub = tasks.changes.listen((change) {
    // .id is the 'id' of the changed row
    print('db change: ${change.storeName}/${change.id}');

    // .action is an enum about the mutation type (create, edit ...etc)
    // .changedFields is a set of strings of changed fields
    print('action=${change.action.name}, fields=${change.changedFields}');
    if (change.action == ChangeAction.update) {
      print('updated row: ${change.id}');
    }

    // could be `local` or `remote` or `resolution`
    print('origin: ${change.origin.name}');
    if (change.origin == ChangeOrigin.remote) {
      print('this change was pushed from another device');
    }

    // no type casting / pattern matching needed
    // we can infer the type from the store we are listening to
    if (change.newRecord != null) {
      print('newTask.priority=${change.newRecord!.priority}');
    }
  });

  // don't forget to cancel
  await taskSub.cancel();
```

**Key Points:**

1. **Post-commit notifications:** Events fire after transactions commit, reflecting the latest persisted state in the database.
2. **Payloads:** New records provide `.newRecord`; deleted or purged records provide `.oldRecord`.
3. **Field diffs:** `changedFields` lists the specific fields modified by the write.
4. **Origin tracking:** `change.origin` distinguishes between `local` writes, `remote` sync updates, and conflict `resolution`.

## Binary attachments

LocalPocket manages binary attachments through the `Files` service on each
store (`store.files`) backed by a configured `BlobStore`. File bytes stream in
bounded chunks rather than loading whole files into memory. The database manages
file metadata, deduplication by SHA-256 hash, and two-way sync with remote
PocketBase file fields, while the underlying byte blobs stay in your storage backend.

```dart
  // Check whether underlying blob storage persists on disk
  final durable = await tasks.files.isBlobStorageDurable;
  print('Storage is durable: $durable');

  // Attachments belong to an existing record
  final myTask = await tasks.put([Tasks.title.set('Trip Photos')]);

  // Attach bytes from memory
  final ref = await tasks.files.attach(
    recordId: myTask.id,
    source: FileSource.bytes(
      // you can use [FileSource.stream] as well
      [0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A],
      name: 'avatar.png',
    ),

    // Target field defaults to store's declared `attachmentField` (or 'imgs')
    field: 'imgs',

    // Optional local grouping label: pair related files that share one remote
    // field (e.g. an original plus its generated preview).
    group: 'avatar-set',

    // Set true when using a non-durable/volatile blob store (e.g. MemoryBlobStore)
    allowVolatileBlobs: true,
  );

  print('Attached: ${ref.refId}, state: ${ref.state}, hash: ${ref.hash}');
  // The caller's filename is kept on the reference: PocketBase rewrites the
  // REMOTE name (random suffix), so `ref.name` is the only record of yours.
  print('Local name: ${ref.name} (remote: ${ref.remoteName ?? 'not uploaded'})');
  // ref.state starts as 'pending_upload' until the next sync cycle completes

  // List attachments for a specific record
  final List<FileRef> attachments = await tasks.files.list(recordId: myTask.id);
  for (final file in attachments) {
    print('File ${file.refId}: ${file.field} (${file.state})');
  }

  // ...or read one group back: the pairing primitive for files in one field
  final List<FileRef> set =
      await tasks.files.list(recordId: myTask.id, group: 'avatar-set');
  print('${set.length} files carry the avatar-set label');

  // Stream attachment bytes in chunks without buffering the whole file in memory
  final Stream<List<int>> chunkStream = await tasks.files.open(ref);
  await for (final chunk in chunkStream) {
    print('Received ${chunk.length} bytes');
  }

  // If an attachment is remote-only, fetch it transparently before opening
  await tasks.files.open(ref, fetch: true);

  // Or explicitly download first, then open
  await tasks.files.download(ref);
  await tasks.files.open(ref);

  // Delete an attachment
  await tasks.files.remove(ref);

  // Maintenance: delete unreferenced blobs and enforce storage limits
  final cleanedCount = await tasks.files.gc(
    // grace period for orphaned blobs
    blobGrace: const Duration(days: 7),
    // grace period for temp files
    tmpGrace: const Duration(hours: 24),
  );
  print('Cleaned $cleanedCount unreferenced/tmp blobs');

  // Evict synced blobs (LRU) to respect storage budget (pending uploads are NEVER evicted)
  final evictedCount =
      await tasks.files.enforceStorageCap(maxBytes: 50 * 1024 * 1024);
  print('Evicted $evictedCount bytes of synced blobs');

  // Evicted files can be re-downloaded explicitly or fetched on open
  await tasks.files.open(ref, fetch: true);
```

**Key Points:**

1. **Upload ordering:** File attachments upload automatically once the parent record exists on PocketBase.
2. **Volatile stores safety:** In-memory stores (`MemoryBlobStore`) require `allowVolatileBlobs: true` when attaching files to prevent accidental data loss.
3. **Automatic deduplication:** Files sharing the same SHA-256 hash share a single stored blob, saving disk space.
4. **Remote-only files:** If an attachment only exists remotely or was evicted by a storage cap, call `files.download(ref)` to download it first, or pass `files.open(ref, fetch: true)` to download and open in one step. Calling `files.open` on a `remote_only` reference without downloading it first throws `RemoteOnlyError`.
5. **Storage budget management:** `enforceStorageCap` evicts least-recently-used local files to meet a disk budget while preserving their metadata and remote links.
6. **Clean stream lifecycle:** Cancelling an open byte stream immediately closes the file handle and frees memory.
7. **`FileRef.name` is the filename YOU supplied, and `FileRef.group` is your own label.** Both are local metadata persisted on the reference: they never cross to the server, and they survive the upload. Read a set back with `files.list(recordId: id, group: 'label')` to pair files that share one remote field (e.g. a DICOM original plus its generated `.png` preview). `FileRef.field` is also a LOCAL label — every reference of a store maps to ONE remote PocketBase file field (the adapter's, default `imgs`), so it is not a remote sub-field name.
8. **PocketBase rewrites filenames.** Every upload is stored server-side with a random 10-character suffix (`img001_intraoral.jpg` → `img001_intraoral_pu2g7u5gov.jpg`), even for a first, unique upload. `FileRef.remoteName` is the server's name and is NOT derivable from `FileRef.name` (nor the reverse), so never derive pairing from filenames — use `group`.
9. **Dedup keys on bytes, not metadata.** Re-attaching identical bytes to the same record/field returns the EXISTING reference and ignores the new `name`/`group` — see [Deduplication is byte-keyed](#deduplication-is-byte-keyed).

### Deduplication is byte-keyed

An attachment is deduplicated on `(record, field, SHA-256 of the bytes)`. Metadata
is not part of that key, which has three consequences worth planning around:

- **You cannot re-label by re-attaching.** Attaching the same bytes again to the
  same record and field returns the existing reference carrying its **stored**
  `name` and `group`; the new `name`/`group` arguments are discarded. To change
  them, `files.remove(ref)` and attach again.
- **Identical bytes collapse into one reference.** Two logically-distinct files
  with identical content (a re-export, a second copy of the same scan) are one
  reference — and different `group` labels do not separate them.
- **`field` IS part of the key.** Distinct local `field` labels keep distinct
  references, which is the way to pair an original with a generated file that
  happens to share its bytes (e.g. an uncompressed export plus its byte-identical
  preview): attach the second one under its own `field`, then read each back with
  `files.list(recordId: id, field: 'photos')` / `files.list(recordId: id, field: 'previews')`.
  Use `group` — not `field` — when the pairing is a filename-level label over one
  shared remote field (see [Key Points](#binary-attachments) 7 and 8).

The stored blob is shared either way: one SHA-256, one set of bytes on disk.

## Encryption

LocalPocket supports two separate encryption layers:

1. **Field-level encryption** — the built-in public API. Mark a field with
   `encrypted: true` and open the database with
   `EncryptionConfig.aesGcm256(key: keyBytes)`. LocalPocket stores each field's
   value as AES-256-GCM ciphertext with a fresh random nonce, and decrypts it
   transparently when a row is read back.
2. **Database-level encryption (native only)** — whole-file at-rest encryption provided by
  the database engine supplied by the application (such as SQLCipher). Configured through
  `LocalPocketOptions.nativeDatabaseFactory` and `LocalPocketOptions.databaseEncryption`.


### Field-level

In your schema, mark a field as encrypted with `encrypted: true`.

```dart
import 'dart:typed_data';

final class Vault extends StoreDef<Vault> {
  static final Vault store = Vault._();
  Vault._() : super(name: 'vault', version: 1);

  static final userId = store.schema.text('user_id').req();
  static final label = store.schema.text('label');
  // this field will be encrypted in the database
  static final secret = store.schema.text('secret', encrypted: true);

  @override
  List<FieldDef<Vault, Object?>> get fields => [userId, label, secret];
}


// Fill with 32 random bytes in production and keep the same key for every
// later open — the app owns the cipher key, and the database never stores it.
final keyBytes = Uint8List(32);
```

then define a cipher key and open the database with encryption enabled:

```dart
  final myEncrpytedDB = await LocalPocket.open(
    LocalPocketOptions(
      path: ':memory:',
      stores: [Vault.store],
      encryption: EncryptionConfig.aesGcm256(key: keyBytes),
    ),
  );

  final secretKeys = myEncrpytedDB.store(Vault.store);

  // Writes are encrypted automatically before saving to disk:
  await secretKeys.put([
    Vault.userId.set('user-id-1234567'),
    Vault.label.set('prod token'),
    Vault.secret.set('sk_live_010203...'),
  ]);

  // Reads decrypt transparently:
  final row = await secretKeys.get('user-id-1234567');

  print(row?.get(Vault.secret)); // => sk_live_010203...

  // Filtering and sorting on an encrypted field are not supported:
  // await secretKeys.query(
  //   QuerySpec(where: [Vault.secret.eq("sk_live_010203...")]),
  // ); // <- throws: encrypted fields cannot be queried or sorted
```

**Key Points:**

1. **Encrypted at rest:** Field encryption seals individual field values. Structural metadata (table name, record IDs) remains unencrypted.
2. **Stable key required:** The 32-byte AES key must be securely stored in your app keystore and supplied on open.
3. **Query restrictions:** Because ciphertext is stored, encrypted fields cannot be queried via `where`, sorted via `orderBy`, or included in indexes or FTS specs. Store filterable values in separate, unencrypted fields.


### Database-level (Native Only)

For native platforms (mobile and desktop), LocalPocket supports whole-database encryption at rest using a cipher-enabled SQLite binary (such as SQLCipher or SQLite3MultipleCiphers).

Enabling it takes three steps:

#### Step 1: Configure a cipher build in pubspec.yaml

Add `user_defines` to your app's `pubspec.yaml` to bundle a cipher-enabled SQLite binary:

```yaml
hooks:
  user_defines:
    sqlite3:
      source: sqlite3mc   # SQLite3MultipleCiphers build
      # or:
      # source: sqlcipher # SQLCipher build
```

#### Step 2: Define your database adapter class

Subclass `DirectSqliteDatabase` to open the database connection through your cipher-enabled build:

```dart
import 'package:sqlite3/sqlite3.dart' as sqlite;

/// Opens the database through the cipher-enabled sqlite3 binary.
/// [DirectSqliteDatabase] is provided by localpocket.
final class MyCipherDatabase extends DirectSqliteDatabase {
  MyCipherDatabase._(super.rawDb);

  /// Factory passed to `LocalPocketOptions.nativeDatabaseFactory`.
  static Database open(String path) =>
      MyCipherDatabase._(sqlite.sqlite3.open(path));
}
```

#### Step 3: Open the database with encryption options

Pass your custom factory and passphrase configuration to `LocalPocket.open`:

```dart
  final wholeDBEncrypted = await LocalPocket.open(
    LocalPocketOptions(
      path: 'vault.db',
      stores: [Tasks.store],
      nativeDatabaseFactory: (path) => MyCipherDatabase.open(path),
      databaseEncryption: DatabaseEncryptionConfig(
        engineCipher: 'sqlcipher', // or 'sqlite3mc' to match Step 1
        key: 'master-passphrase',
      ),
    ),
  );

  await wholeDBEncrypted.store(Tasks.store).query(QuerySpec(/* ... */));
```

**Key Points:**

1. **Cipher binary required:** Ensure you bundle a cipher-enabled SQLite binary via the `user_defines` hook. A standard SQLite binary will not encrypt data.
2. **Matching cipher configuration:** Specify the matching `engineCipher` (`'sqlcipher'` or `'sqlite3mc'`) in `DatabaseEncryptionConfig`.
3. **Passphrase persistence:** Keep your encryption passphrase in a secure platform keystore.
4. **Native-only:** Whole-database encryption is available on native platforms (mobile/desktop). For web platforms, use field-level encryption.
5. **Composability:** You can combine database-level encryption with field-level encryption for defense in depth.

### Comparison

| Feature | Field-level | Database-level |
|---|---|---|
| **Scope** | Individual field values | The entire database file |
| **Granularity** | Per field (`encrypted: true`) | Whole database file |
| **Encryption method** | AES-256-GCM (Dart-side) | SQLite cipher binary (SQLCipher / SQLite3MultipleCiphers) |
| **Configuration** | `encrypted: true` on field + `EncryptionConfig.aesGcm256` at open | `nativeDatabaseFactory` + `DatabaseEncryptionConfig` at open |
| **Supported platforms** | All platforms (mobile, desktop, web) | Native only (mobile, desktop) |
| **Querying & indexing** | Encrypted fields cannot be filtered or indexed | All query, filter, sort, and index features work normally |
| **File exposure** | Schema and unencrypted fields are readable; marked fields are ciphertext | Entire file is ciphertext with no readable data or metadata |
| **Dependencies** | Built-in, no external dependencies | Requires cipher build hook in `pubspec.yaml` |

- **Choose field-level** when you only need to protect specific sensitive attributes, or when deploying to the web.
- **Choose database-level** when the entire database at rest must be encrypted, and you are targeting native platforms.

## Schema migration

LocalPocket manages schema evolution through forward-only versioned migrations (`StoreMigration`). Each store tracks its own version (`super(version: ...)`), and migrations run automatically when `LocalPocket.open` detects that the code's version is higher than what is stored on disk.

Two kinds of migrations are supported:

1. **Additive migrations (`destructive: false`, default)**: Adds new optional columns in place, with an optional data backfill (`transform`).
2. **Destructive migrations (`destructive: true`)**: Safely rebuilds the table with an automated backup to rename or drop columns, change constraints, or restructure rows.

### Defining migrations

When you add a new field or change existing schema layout, increment your
store's `version` and register the corresponding `StoreMigration` steps in
the `migrations` getter.

```dart
final class TasksV2 extends StoreDef<TasksV2> {
  TasksV2._() : super(name: 'tasks', version: 2);
  static final TasksV2 store = TasksV2._();

  // Existing fields from v1
  static final title = store.schema.text('title').req();
  static final priority = store.schema.integer('priority');
  static final done = store.schema.boolean('done');

  // Newly added optional field in v2
  static final notes = store.schema.text('notes');

  // Newly added field with backfilled default data
  static final tag = store.schema.text('tag');

  @override
  List<FieldDef<TasksV2, Object?>> get fields => [
        title,
        priority,
        done,
        notes,
        tag,
      ];

  // ---- forward schema migrations ----
  @override
  List<StoreMigration> get migrations => [
        // Step 1 -> 2: Add columns and backfill missing data
        StoreMigration(
          toVersion: 2,
          // Fields added by this step (must be optional/nullable)
          addedFields: [
            notes.toField(),
            tag.toField(),
          ],
          // Optional: backfill existing rows
          // Receives the logical row map, returns a map of updated values
          transform: (oldRow) {
            return {
              // set a default tag for any existing tasks
              'tag': 'general',
            };
          },
        ),
      ];
}
```

### Additive migrations

Additive migrations modify the existing table without rebuilding it. They are
fast, lightweight, and execute in place:

```dart
final class TasksV3 extends StoreDef<TasksV3> {
  TasksV3._() : super(name: 'tasks', version: 3);
  static final TasksV3 store = TasksV3._();

  // Fields from v1 and v2
  static final title = store.schema.text('title').req();
  static final priority = store.schema.integer('priority');
  static final done = store.schema.boolean('done');
  static final notes = store.schema.text('notes');
  static final tag = store.schema.text('tag');

  // Newly added optional field in v3
  static final estimatedHours = store.schema.real('estimated_hours');

  @override
  List<FieldDef<TasksV3, Object?>> get fields => [
        title,
        priority,
        done,
        notes,
        tag,
        estimatedHours,
      ];

  @override
  List<StoreMigration> get migrations => [
        // Historical migration from v1 -> v2
        StoreMigration(
          toVersion: 2,
          addedFields: [notes.toField(), tag.toField()],
          transform: (oldRow) => {'tag': 'general'},
        ),
        // Additive migration from v2 -> v3
        StoreMigration(
          toVersion: 3,
          addedFields: [estimatedHours.toField()],
          // Chunked backfill (10k rows/chunk with a persisted cursor)
          transform: (oldRow) => {
            'estimated_hours': (oldRow['priority'] as int? ?? 0) > 1 ? 4.0 : 1.0,
          },
        ),
      ];
}
```

### Destructive migrations (table rebuild)

When you need to drop columns, change column types, alter nullability, or
completely reshape rows, configure a destructive migration with
`destructive: true`:

```dart
final class TasksV4 extends StoreDef<TasksV4> {
  TasksV4._() : super(name: 'tasks', version: 4);
  static final TasksV4 store = TasksV4._();

  static final title = store.schema.text('title').req();
  static final done = store.schema.boolean('done');
  static final notes = store.schema.text('notes');
  static final tag = store.schema.text('tag');
  static final estimatedHours = store.schema.real('estimated_hours');

  // 'priority' was dropped in v4; 'importance' replaces it
  static final importance = store.schema.text('importance');

  @override
  List<FieldDef<TasksV4, Object?>> get fields => [
        title,
        done,
        notes,
        tag,
        estimatedHours,
        importance,
      ];

  @override
  List<StoreMigration> get migrations => [
        // Historical migration v1 -> v2 (additive)
        StoreMigration(
          toVersion: 2,
          addedFields: [notes.toField(), tag.toField()],
          transform: (oldRow) => {'tag': 'general'},
        ),
        // Historical migration v2 -> v3 (additive)
        StoreMigration(
          toVersion: 3,
          addedFields: [estimatedHours.toField()],
          transform: (oldRow) => {
            'estimated_hours': (oldRow['priority'] as int? ?? 0) > 1 ? 4.0 : 1.0,
          },
        ),
        // Destructive rebuild v3 -> v4
        StoreMigration(
          toVersion: 4,
          destructive: true,
          // Transform receives the old row (including dropped columns like 'priority')
          // and produces the complete row for the new schema layout.
          transform: (oldRow) {
            final oldPriority = oldRow['priority'] as int? ?? 0;
            return {
              ...oldRow,
              'importance': oldPriority > 2 ? 'high' : 'low',
            };
          },
        ),
      ];
}
```

Destructive migrations safely rebuild the table:
1. **Automatic backup**: Creates a safety backup file (`<dbname>.v<ver>.<store>.bak`).
2. **Staged build**: Creates a new temporary table with the target schema and indexes.
3. **Data transform**: Migrates existing rows through your `transform` function.
4. **Verification & swap**: Verifies row counts match and swaps the new table into place.

**Key Points:**

1. **Sequential versioning:** Migrations must increment versions sequentially without gaps (`toVersion: 2`, `toVersion: 3`, etc.).
2. **Additive columns must be optional:** Columns added in an additive migration cannot be required (`.req()`). To make a field required, use a destructive migration (`destructive: true`).
3. **Validating transforms:** Values returned by `transform` must correspond to fields defined in the target schema.
4. **Backup protection:** A safety backup is created automatically before running destructive rebuilds.
5. **Web worker support:** On the web, migration transforms run directly in the browser environment.

## Tests and checks

```bash
# hermetic tests
dart test

# real tests (real PB - from secret.dart + mock PB)
dart test --tags real --run-skipped -j 1

# start nested `dart` processes for the release and web checks
dart test --tags gate --run-skipped -j 1

# run the release checklist
dart tool/release.dart
```

## Advanced concepts

The sections above cover everyday usage. This section highlights advanced configurations, interactive transactions, performance tuning, and platform customization options.

### Executable features on web

On web platforms, LocalPocket runs the database inside a dedicated Web Worker to ensure a responsive UI, while your Dart application code runs in the browser context:

- **Built-in resolvers work out of the box:** Resolvers such as `LocalWinsResolver`, `RemoteWinsResolver`, `CounterResolver`, `SetUnionWithDeletionWinsResolver`, and `AppendOnlyLinesResolver` operate automatically across environments.
- **Custom callbacks run in the browser:** Custom resolvers (`CustomResolver`), validation hooks, and migration transforms run automatically in the browser thread without manual configuration.
- **Custom page callbacks:** You can provide custom callback registries or custom implementations of `SyncBackendFactory` and `BlobStore` via `PageCallbacks`.

```dart
  // Web open with optional explicit callback configuration:
  final webDb = await LocalPocket.open(
    LocalPocketOptions(
      path: 'posts.db',
      stores: [Posts.store],
      pageCallbacks: PageCallbacks(
        stores: {
          'posts': StorePageCallbacks(
            resolvers: {'posts-review': Posts.reviewResolver},
          ),
        },
      ),
    ),
  );
  await webDb.close();
```

You can also host your own sync backend and blob store on the web using `PageCallbacks.syncBackendFactory` and `PageCallbacks.blobStore`:

```dart
// Minimal sketches of custom sync and blob storage implementations:
final class MySyncBackendFactory implements SyncBackendFactory {
  @override
  Future<SyncBackend> create({
    required Uri baseUrl,
    required SyncTokenSource tokenSource,
    required List<String> stores,
    required String identity,
  }) async => throw UnimplementedError('build your backend here');

  @override
  Future<void> dispose(SyncBackend backend) async {}
}

final class MyBlobStore extends BlobStore {
  @override
  Future<String> put(Stream<List<int>> bytes,
          {String? expectedSha256, int? expectedSize, String? key}) async =>
      throw UnimplementedError('store the bytes here');

  @override
  Future<Stream<List<int>>> open(String hash) async =>
      throw UnimplementedError('read the bytes back');

  @override
  Future<void> delete(String hash) async {}

  @override
  Future<bool> exists(String hash) async => false;

  @override
  Future<int?> size(String hash) async => null;

  @override
  Future<int> cleanTmp({Duration olderThan = const Duration(hours: 24)}) async =>
      0;

  @override
  Future<List<String>> listHashes() async => const [];

  @override
  Future<int?> modifiedAt(String hash) async => null;

  @override
  Future<bool> get isDurable async => true;
}
```

```dart
  // Web open hosting a custom backend and blob store:
  final proxiedDb = await LocalPocket.open(
    LocalPocketOptions(
      path: 'posts.db',
      stores: [Posts.store],
      pageCallbacks: PageCallbacks(
        syncBackendFactory: MySyncBackendFactory(),
        blobStore: MyBlobStore(),
      ),
    ),
  );
  await proxiedDb.close();
```

### Resetting local state: `wipe()`

`db.wipe()` drops **every piece of local data**: every row of every store
(archived and hidden ones included), all sync bookkeeping (outbox ops, sync
rows, conflicts, dead letters, file references, blob metadata) and the per-scope
sync cursors. Tracked blob bytes are deleted through the blob store too, so disk
is actually reclaimed.

The database keeps its **identity**: store registrations, schema versions and the
migration ledger survive, so the same handle stays usable and the next sync cycle
re-pulls the whole remote collection. That makes it the "restore from the
server", "switch accounts" and "clear the local cache" operation. It is a local
reset only — nothing is deleted on the server.

```dart
  // Drop everything local, then pull the server state back down.
  final reset = await db.wipe();
  print('dropped ${reset.rowsCleared} rows and ${reset.blobsCleared} blobs');

  final fresh = await sync.syncNow(); // re-pulls from scratch
  print('re-pulled: ${fresh.pulled}');
```

**Key Points:**

1. **Local only.** No remote record is touched; the server still holds everything.
2. **Cursors go too.** The next cycle re-pulls from the epoch, which is what makes this the "restore from server" path.
3. **Identity survives.** Store definitions, schema versions and migrations are kept, so no reopen is required — and no schema migration re-runs.
4. **Blob bytes are deleted, best-effort.** Byte deletion happens after the metadata commit; if a byte delete fails, the leftover is unreferenced and `files.gc()` reclaims it. A wipe can never leave a reference pointing at missing bytes.
5. **Watchers refresh.** Active `watch()` streams re-run and see the emptied stores.
6. **Want a brand-new FILE instead of an emptied one?** Natively you can close the handle and delete the database path (plus its `-wal`/`-shm` siblings) yourself. `wipe()` is the portable equivalent that also works on web, where the storage entry is owned by the worker — and it needs no reopen.

### Interactive transactions

While `putAll` and `patchAll` provide atomic single-store batch operations, interactive transactions let you compose multiple reads and writes across multiple stores into a single atomic commit:

```dart
  // Execute an interactive transaction across stores:
  final movedId = await db.transaction<String?>((tx) async {
    final txTasks = tx.store(Tasks.store);
    final txNotes = tx.store(Vault.store);

    await txTasks.put([Tasks.title.set('phase one')]);

    // Reads inside the body see uncommitted writes made within this transaction:
    final draft = await txTasks.get('task00000000002');

    // Savepoints allow partial rollbacks:
    final sp = await tx.savepoint();
    await txNotes.put([Vault.label.set('tentative')]);
    await tx.rollbackTo(sp); // the tentative write is undone

    return draft?.id;
  });
  print('moved record: $movedId');
```

A **read-only** transaction guarantees isolated read snapshots where no writes can occur:

```dart
  final snapshot = await db.read((tx) async {
    final txTasks = tx.store(Tasks.store);
    return txTasks.count(QuerySpec(
      where: [Tasks.done.eq(false)],
      limit: Limits.unbounded,
    ));
  });
  print('open tasks at snapshot time: $snapshot');
```

**Key Points:**

1. **Keep transactions concise:** Interactive sessions hold exclusive write access until completion. Use `txSessionTtl` to configure idle timeout limits.
2. **Post-commit visibility:** Observers only see transaction writes after the transaction successfully commits.
3. **Session-scoped stores:** Always access stores through the transaction context (`tx.store(...)`).

### Commit batching: `groupCommitWindow`

By default, every write commits immediately. Setting `groupCommitWindow` coalesces writes arriving within that duration into a single disk commit, significantly boosting throughput for bursty write workloads while preserving read-your-writes consistency:

```dart
  final batchedDb = await LocalPocket.open(
    LocalPocketOptions(
      path: 'batched.db',
      stores: [Tasks.store],
      // writes landing within 5 ms of each other share one commit
      groupCommitWindow: const Duration(milliseconds: 5),
      // idle interactive sessions are force-rolled back after 2 minutes
      txSessionTtl: const Duration(minutes: 2),
    ),
  );
  await batchedDb.close();
```

### Document size limit: `maxDocumentBytes`

Configures the maximum allowed serialized byte size for individual records to safeguard against runaway memory usage:

```dart
  final boundedDb = await LocalPocket.open(
    LocalPocketOptions(
      path: 'bounded.db',
      stores: [Tasks.store],
      maxDocumentBytes: 64 * 1024, // reject documents over 64 KiB
    ),
  );
  await boundedDb.close();
```

### Clock control: `clockOffsetMs`

Shifts the database clock by an integer millisecond offset, useful for simulating future events, testing expiration logic, or simulating clock drift in tests:

```dart
  final clockDb = await LocalPocket.open(
    LocalPocketOptions(
      path: 'clock.db',
      stores: [Tasks.store],
      clockOffsetMs: 0, // default: system clock
    ),
  );
  await clockDb.close();
```

### Web worker bootstrap: `BootstrapOptions`

On web platforms, `bootstrap` configures custom asset paths and timeout thresholds for the dedicated worker:

```dart
  final bootstrappedDb = await LocalPocket.open(
    LocalPocketOptions(
      path: 'app.db',
      stores: [Tasks.store],
      bootstrap: BootstrapOptions(
        // custom asset paths if hosted in non-standard locations:
        // workerAssetPath: 'assets/localpocket_worker.js',
        // wasmAssetPath: 'assets/sqlite3.wasm',
        requestTimeout: const Duration(seconds: 30),
        spawnTimeout: const Duration(seconds: 60),
      ),
    ),
  );
  await bootstrappedDb.close();
```

### Storage and sync seams on native

On native platforms, custom storage and sync backend implementations can be passed directly to `LocalPocketOptions`:

- **`blobStore`**: Where attachment bytes are stored. Use a persistent `BlobStore` in production, or `MemoryBlobStore` for testing.
- **`syncBackendFactory`**: Provides a custom `SyncBackend` implementation for `attachPocketBaseSync`.

```dart
  final nativeDb = await LocalPocket.open(
    LocalPocketOptions(
      path: 'native.db',
      stores: [Tasks.store],
      blobStore: MemoryBlobStore(),
      // syncBackendFactory: MySyncBackendFactory(),
    ),
  );
  await nativeDb.close();
```

### Runtime diagnostics: `db.capabilities`

Inspect the runtime capabilities and environment detected by the database at open time:

```dart
  final caps = await db.capabilities;
  print(caps.sqliteVersion); // the engine's SQLite version
  print(caps.hasFts5); // full-text search available?
  print(caps.isWeb); // running on the worker runtime?
  print(caps.storage); // where the database lives
  print(caps.durable); // does storage survive process death?
  print(caps.journal); // journal mode ('wal' native, 'truncate' web)
```

### Options reference

Every `LocalPocketOptions` field, and where this document covers it:

| Option | Documented in |
| --- | --- |
| `path`, `stores` | Quick start |
| `encryption`, `databaseEncryption`, `nativeDatabaseFactory` | Encryption |
| `pageCallbacks` | Executable features on web (above) |
| `bootstrap` | Web worker bootstrap (above) |
| `groupCommitWindow`, `txSessionTtl` | Commit batching / Interactive transactions (above) |
| `maxDocumentBytes` | Document size limit (above) |
| `clockOffsetMs` | Clock control (above) |
| `blobStore`, `syncBackendFactory` (native) | Storage and sync seams on native (above) |

## License & Credit

- License is MIT.
- Originally created by Ali A. Saleem as the database engine for [Apexo](https://github.com/elselawi/apexo), now available as an independent open-source package.