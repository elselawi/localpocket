# LocalPocket

**LocalPocket is a fast, local-first SQLite database for Dart and Flutter with automatic synchronization to PocketBase.**

```text
Flutter / Dart Application
       │
       ▼ (Sub-microsecond cached point reads & transactional local writes)
  LocalPocket (Direct SQLite FFI + In-Memory LRU Read Cache + Statement Pool)
       │
       ▼ (Eventually-consistent background sync via REST + SSE Realtime)
  PocketBase Backend (Centralized Envelope Storage in `data` Collection)
```

---

## Table of Contents

- [Why LocalPocket?](#why-localpocket)
- [Installation](#installation)
- [Step-by-Step Usage Guide](#step-by-step-usage-guide)
  - [Step 1: Define a Typed Store](#step-1-define-a-typed-store)
  - [Step 2: Open and Bind](#step-2-open-and-bind)
  - [Step 3: Typed CRUD](#step-3-typed-crud)
  - [Step 4: Typed Queries](#step-4-typed-queries)
  - [Step 5: FTS Search & Reactive Watches](#step-5-fts-search--reactive-watches)
  - [Domain Models Without Code Generation](#domain-models-without-code-generation)
  - [Typed Best Practices](#typed-best-practices)
  - [Typed Model Limits](#typed-model-limits)
  - [Advanced: Raw Maps and Coexistence](#advanced-raw-maps-and-coexistence)
  - [Step 6: Local & Remote Change Hooks](#step-6-local--remote-change-hooks)
  - [Step 7: Synchronize with PocketBase](#step-7-synchronize-with-pocketbase)
- [PocketBase Server Requirements & Setup](#pocketbase-server-requirements--setup)
- [Conflict Resolution & 3-Way Merge](#conflict-resolution--3-way-merge)
  - [Precedence & Built-in Resolvers](#precedence--built-in-resolvers)
  - [Configuring Conflict Policies](#configuring-conflict-policies)
  - [Manual Conflict Review UI](#manual-conflict-review-ui)
- [Schema Evolution & Migrations](#schema-evolution--migrations)
- [Field-Level Encryption (AES-256-GCM)](#field-level-encryption-aes-256-gcm)
- [Binary Files & Blob Attachments](#binary-files--blob-attachments)
- [Storage Maintenance & Compaction](#storage-maintenance--compaction)
- [Transactions & Durability Modes](#transactions--durability-modes)
- [Running Tests & Benchmarks](#running-tests--benchmarks)
- [License](#license)

---

## Why LocalPocket?

- **Typed data models:** One descriptor defines each field for compile-checked reads, writes, queries, projections, search, and watches without generators or reflection.
- **Local-First & Offline-Ready:** Instant sub-microsecond point reads via LRU caching, ACID-compliant local transactions, and reactive UI watches that work without network connectivity.
- **Direct SQLite FFI:** Zero message-passing overhead, automatic statement caching, and native aggregate pushdown (`COUNT`, `DISTINCT`, `SUM`, `MIN`, `MAX`, `AVG`).
- **PocketBase Sync Engine:** Bidirectional sync over REST with SSE realtime change feeds, field-level conflict resolvers, and atomic outbox guarantees.
- **Full-Text Search (FTS5):** Native BM25-ranked full-text indexing and querying.
- **Durable File Blobs:** Content-addressed binary attachment storage with deduplication and dedicated background transfer lanes.
- **Zero Platform Boilerplate:** Runs directly on SQLite via native FFI on mobile/desktop and automatically manages Web Workers on the web.

---

## Installation

Add `localpocket` to your `pubspec.yaml`:

```yaml
dependencies:
  localpocket: ^0.1.0
```

---

## Step-by-Step Usage Guide

### Step 1: Define your schemas and store types

Use one canonical `StoreDef` instance. Each descriptor is both the engine schema declaration and the typed accessor. The `indexSpec([...])` and `ftsSpec([...])` helpers derive schema-extra names from those descriptors; they are intentionally non-`const` because descriptors are runtime objects. When a declaration combines different field kinds, an explicit list type such as `<FieldDef<Tasks, Object?>>[...]` may be needed under strict inference.

<!-- localpocket-compile: typed-readme -->
```dart

import '../localpocket/lib/localpocket.dart';
import '../localpocket/lib/typed.dart';

enum TaskStatus { todo, inProgress, done }

final class Tasks extends StoreDef<Tasks> {
  // core definitions and instantiation
  Tasks._() : super(name: 'tasks', version: 1);
  static final Tasks instance = Tasks._();

  // ------  define the schema ------ //
  // Text field can be:
  late final _title = f
      .text(
        // field title
        'title',
        // constraint: unique when active
        // (active = not deleted/archived)
        // default is false
        uniqueWhenActive: true,
        // field-level encryption
        // default is false
        encrypted: false,
      )
      .req();

  // Enum field can be:
  late final _status = f.enumOf(
    // field title
    'status',
    // enum values
    TaskStatus.values,
    // optional: mapping enum values to custom strings
    wire: const {
      TaskStatus.inProgress: 'in_progress',
      TaskStatus.done: 'done!!',
    },
  );

  // ... rest of the fields ...
  late final _priority = f.integer('priority');
  late final _done = f.boolean('done');
  late final _dueAt = f.dateTime('due_at');

  // ------  define static accessors ------ //
  // P.S. forgive the redundancy but this will
  // give you stronger typing and better API
  static TextFieldReq<Tasks> get title => instance._title;
  static EnumFieldOpt<Tasks, TaskStatus> get status => instance._status;
  static IntFieldOpt<Tasks> get priority => instance._priority;
  static BoolFieldOpt<Tasks> get done => instance._done;
  static DateTimeFieldOpt<Tasks> get dueAt => instance._dueAt;

  // ----- define the ordered registry ----- //
  // declares which fields exist and in
  // what order they become columns
  @override
  List<FieldDef<Tasks, Object?>> get fields => [
    _title,
    _status,
    _priority,
    _done,
    _dueAt,
  ];

  // ----- define indexes ----- //
  // for faster querying
  @override
  List<IndexSpec> get indexes => [
    index<Tasks>([status, priority]),
    index<Tasks>([title], unique: true),
  ];

  @override
  FtsSpec get fts => ftsSpec<Tasks>(
    // fields to search into
    [title],
    // "fuzzy: true" searches arbitrary substring
    fuzzy: true,
    // normalization example:
    normalize: const FtsNormalization(
      rules: {'à': 'a', 'á': 'a', 'â': 'a', 'ä': 'a'},
    ),
  );
}

```


#### Supported Typed Field Types

| Descriptor factory | Typed value | SQLite storage |
|---|---|---|
| `f.text` | `String?` / `String` after `.req()` | `TEXT` |
| `f.integer` | `int?` / `int` after `.req()` | `INTEGER` |
| `f.real` | `num?` / `num` after `.req()` | `REAL` |
| `f.boolean` | `bool?` / `bool` after `.req()` | `INTEGER` (`0`/`1`) |
| `f.date` | epoch-millisecond `int?` | `INTEGER` |
| `f.dateTime` | UTC `DateTime?` | `INTEGER` |
| `f.enumOf` | Dart enum value | wire `TEXT` |
| `f.json` | `Map<String, Object?>?` | canonical JSON `TEXT` |
| `f.jsonList<T>` | `List<T>?` | canonical JSON `TEXT` |
| `f.ref` | record-id `String?` | `TEXT` |

#### Field Type Notes

- Enums are stored as strings. Unmapped values use `Enum.name`; the optional `wire` map pins stable alternatives such as `in_progress`.
- **`f.date` vs `f.dateTime`** — Both store the same epoch-**milliseconds** integer in an `INTEGER` column; only the boundary codec differs. `f.date` is a pass-through adapter typed as `int?` (raw epoch ms, no conversion — you manage timezones) and supports numeric aggregates. `f.dateTime` is typed as `DateTime?` and is **UTC-pinned in both directions**: local inputs are converted to UTC before storage and decoded values always have `isUtc == true`. The two adapters share the same column and are interchangeable on the wire. Prefer `f.dateTime` for timestamps; use `f.date` when you already hold epoch-ms integers or want `sum`/`min`/`max` over a date column.
- **`f.integer` vs `f.real`** — `f.integer` is typed `int?` and stored as `INTEGER`; `f.real` is typed `num?` (not `double` — Dart `int` values are accepted) and stored as `REAL`. Both support `.req()`, comparison operators, and numeric aggregates. Use `f.integer` for counts/ids/whole numbers and `f.real` for fractional measurements and percentages.
- **`f.ref`** — Stores a **record id** (`String?`) pointing at a record in another collection. There is no `.req()` (always optional) and no join/fetch API: read the id and fetch the target row from its own store.
- `enforceFk: true` adds a SQLite `REFERENCES` constraint on the column; ref fields not covered by a declared index are auto-indexed for lookups.

---

### Step 2: Open and Bind

Open with the compiled schema, then bind the same canonical definition instance:

<!-- localpocket-compile: typed-readme -->
```dart
Future<void> typedReadmeExample() async {
  final db = await LocalPocket.open(
    path: ':memory:',
    stores: [Tasks.instance.schema],
  );
  final tasks = db.store(Tasks.instance);
```

`StoreDef.schema` is memoized. Binding is name-keyed and checked by **reference identity**, not structural equality: `Tasks.instance` must be the same object used throughout the application. A second definition object with the same fields and name throws `TypedStoreMismatchError` rather than silently sharing a typed registry entry.

---

### Step 3: Typed CRUD

`put` is an upsert (the engine generates an id when `setId` is omitted), `patch` touches only the listed fields, and lifecycle state stays on `archive`/`restore`/`purge`.

<!-- localpocket-compile: typed-readme -->
```dart
  await tasks.put((draft) => draft
    ..setId('tsk1234567890ab')
    ..set(Tasks.title)('Ship version 1.0')
    ..set(Tasks.status)(TaskStatus.inProgress)
    ..set(Tasks.priority)(1)
    ..set(Tasks.done)(false)
    ..set(Tasks.dueAt)(DateTime.utc(2026, 9, 1)));

  await tasks.patch(
    'tsk1234567890ab',
    (draft) => draft..set(Tasks.title)('Ship version 1.0.1'),
  );

  // Reads are the call form row(Tasks.title), or the .get alias.
  final task = await tasks.get('tsk1234567890ab');
  final String? title = task?.call(Tasks.title);

  await tasks.archive('tsk1234567890ab');
  await tasks.restore('tsk1234567890ab');

  // Hard purge: permanently removes the local row and its blob references.
  await tasks.purge('tsk1234567890ab');
```

Draft setters and predicates are intentionally **curried** — `draft.set(Tasks.title)('value')`,
`query.where(Tasks.done)(eq: false)` — so a wrong value type or a foreign store's descriptor
fails at compile time instead of silently widening the generic parameter.

---

### Step 4: Typed Queries

Equality-family predicates work on every descriptor; kind-scoped operators exist only where they make sense; everything compiles to the engine's parameterized SQL.

<!-- localpocket-compile: typed-readme -->
```dart
  // Equality family: eq, neq, inValues, between, isNull, isNotNull.
  final donePage = await tasks
      .query()
      .where(Tasks.done)(eq: false)
      .where(Tasks.status)(inValues: [TaskStatus.todo, TaskStatus.done])
      .where(Tasks.priority)(between: (1, 5))
      .where(Tasks.title)(isNotNull: true)
      .fetch();

  // Kind-scoped operators: .gt/.gte/.lt/.lte on comparable descriptors,
  // .startsWith/.endsWith/.contains on text. whereCond consumes them.
  final urgentPage = await tasks
      .query()
      .whereCond(Tasks.priority.gte(4))
      .whereCond(Tasks.title.startsWith('Ship'))
      .orderBy(Tasks.dueAt, desc: true)
      .limit(20)
      .fetch();

  // OR groups and projections. Reading an unselected descriptor throws.
  final firstPage = await tasks
      .query()
      .orWhere([eqCond(Tasks.done, true), eqCond(Tasks.priority, 5)])
      .select(<FieldDef<Tasks, Object?>>[Tasks.title, Tasks.priority])
      .fetch();

  // Keyset pagination with the engine's opaque cursor.
  final nextPage = firstPage.hasMore
      ? await tasks
          .query()
          .orderBy(Tasks.priority)
          .keysetAfter(firstPage.nextCursor!)
      : null;

  // Aggregates: sum/min/max/avg accept numeric descriptors only.
  final activeCount = await tasks.query().where(Tasks.done)(eq: false).count();
  final priorityCount = await tasks.query().countDistinct(Tasks.priority);
  final priorities = await tasks.query().distinct(Tasks.priority);
  final priorityTotal = await tasks.query().sum(Tasks.priority);
```

Set the page size with `limit(n)` or opt out with `all()`; `includeArchived()`/`includeHidden()` widen
the default visibility scope; `ids()` and `explain()` mirror the raw builder verbatim.

---

### Step 5: FTS Search & Reactive Watches

Search requires an `FtsSpec` on the store. Hits carry `id`/`score` plus `fetch()` for the current row. Watches wrap the engine streams one-to-one — coalescing and invalidation are unchanged.

<!-- localpocket-compile: typed-readme -->
```dart
  final hits = await tasks.search('ship version').limit(10).fetch();
  for (final hit in hits) {
    final TypedRow<Tasks>? current = await hit.fetch();
    if (current != null) {
      current(Tasks.title);
    }
  }

  final querySub = tasks
      .query()
      .where(Tasks.done)(eq: false)
      .limit(50)
      .watch()
      .listen((List<TypedRow<Tasks>> rows) {});

  final rowSub =
      tasks.watchOne('tsk1234567890ab').listen((TypedRow<Tasks>? row) {});

  await querySub.cancel();
  await rowSub.cancel();
  await db.close();

  // Keep analyzed values live in this complete documentation fixture.
  title;
  donePage;
  urgentPage;
  nextPage;
  activeCount;
  priorityCount;
  priorities;
  priorityTotal;
}
```

---

### Domain Models Without Code Generation

`TypedRow` intentionally uses descriptor access instead of generated properties. Consumers can restore domain-oriented dot reads with a small wrapper, and can hide generic drafts behind intent-named mutations. These are application recipes, not new LocalPocket APIs.

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

  Future<void> markDone(String id) =>
      patch(id, (draft) => draft..set(Tasks.done)(true));

  Future<void> rename(String id, String title) =>
      patch(id, (draft) => draft..set(Tasks.title)(title));
}
```

Changing a descriptor type makes incompatible wrapper getters and helpers fail analysis. No mirrors, macros, extension types, or package code generation are involved.

The principal typed building blocks are `StoreDef`, `Fields`, `FieldDef`,
`Draft`, `TypedRow`, `TypedCollection`, `Cond`, `TypedQuery`, `TypedPage`,
`TypedSearch`, `TypedSearchHit`, and the identity-enforcing
`TypedStoreRegistry`. Identity failures surface as `TypedStoreMismatchError`.

### Typed Best Practices

- **One definition instance per store, ever.** The private constructor plus static accessors (`Tasks.instance`, `Tasks.title`) is the canonical pattern; sharing that single object is how every file gets the same typed handle. A second instance with the same name throws `TypedStoreMismatchError`.
- **Typed handles for application code.** Use `db.store(...)` everywhere; keep raw maps for engine-boundary surfaces only — migrations, `DocumentMigration`, conflict records/resolvers, and codecs.
- **Wrap rows in a domain class** (see above) and express mutations as intent-named helpers, so call sites read like business operations instead of builder chains.
- **Never cast descriptors across stores or through `dynamic`.** The runtime identity check still throws, but the compile-time check is the product.
- **Use `indexSpec([...])` and `ftsSpec([...])` for typed schema extras.** They derive names from descriptors, remain non-`const`, and leave raw `IndexSpec`/`FtsSpec` available at engine boundaries.
- **Prefer `f.dateTime` for timestamps** (UTC-pinned in both directions) and give enums explicit `wire:` names when a persisted value must survive enum renames.
- **Use `select` projections only on hot paths** — reading an unselected descriptor throws by design.
- **`setExtra` accepts only undeclared keys**; declared and system names (`id`, `archived`, `hidden`, `extra`) are rejected so legacy keys cannot shadow schema fields.

### Typed Model Limits

- Required descriptor **types** are non-nullable, but a draft cannot prove that every required field was set. Required-field presence remains engine-enforced at runtime.
- `TypedRow` is a thin wrapper, not a `Map`; it wraps one engine map without copying. `extra` exposes undeclared read values and `asMap()` is the advanced escape hatch.
- `f.json` intentionally narrows the typed value to `Map<String, Object?>?`; raw `Field.json` also accepts lists. `jsonList<T>` validates/casts elements while decoding.
- `.req()`, encryption, and uniqueness exist only for field kinds supported by the engine schema factories.
- Normal cross-store descriptor misuse fails at compile time. Casts or `dynamic` can defeat that protection, in which case runtime identity checks throw `TypedStoreMismatchError`.
- The typed v1 API has no create-only operation or per-write durability argument; use `put` for upsert and transactions for durability selection.

### Advanced: Raw Maps and Coexistence

Typed and raw access can coexist over the same registered store. Both use the same SQLite rows, validation, encryption, outbox, synchronization, and worker wire operations; adopting typed models changes neither storage nor wire formats.

```dart
final typedTasks = db.store(Tasks.instance);
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
import 'package:localpocket/pocketbase.dart';
import 'package:localpocket/sync.dart';

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
