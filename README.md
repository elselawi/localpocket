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
  - [Step 1: Define Schemas](#step-1-define-schemas)
  - [Step 2: Open the Database](#step-2-open-the-database)
  - [Step 3: CRUD & Keyset Queries](#step-3-crud--keyset-queries)
  - [Step 4: Native Aggregates & FTS5 Search](#step-4-native-aggregates--fts5-search)
  - [Step 5: Reactive Live Watches](#step-5-reactive-live-watches)
  - [Step 6: Synchronize with PocketBase](#step-6-synchronize-with-pocketbase)
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

### Step 1: Define Schemas

Define local collections with typed fields, secondary indexes, and optional full-text search:

```dart
import 'package:localpocket/localpocket.dart';

final taskSchema = CollectionSchema(
  name: 'tasks',
  version: 1,
  fields: [
    Field.text('title', required: true),
    Field.text('description'),
    Field.text('status'),
    Field.int('priority'),
    Field.date('due_at'),
    Field.bool('completed'),
    Field.json('metadata'),
    Field.ref('assigned_to', to: 'users'),
  ],
  indexes: const [IndexSpec(['status', 'priority'])],
  fts: const FtsSpec(['title', 'description']),
);
```

#### Supported Field Types

| Field Declaration | Dart Type | SQLite Storage | Description |
|---|---|---|---|
| `Field.text` | `String` | `TEXT` | Plain string text |
| `Field.int` | `int` | `INTEGER` | 64-bit signed integer |
| `Field.real` | `num` / `double` | `REAL` | Floating-point value |
| `Field.bool` | `bool` | `INTEGER` (`0`/`1`) | Boolean flag |
| `Field.date` | `int` (epoch ms) | `INTEGER` | Milliseconds since epoch |
| `Field.enumValue` | `String` | `TEXT` | Restricted string enum |
| `Field.json` | `Map` or `List` | `TEXT` | Canonical JSON string |
| `Field.jsonList` | `List` | `TEXT` | JSON list array |
| `Field.ref` | `String` | `TEXT` | Record reference / Foreign key |

---

### Step 2: Open the Database

Open an in-memory database for tests or a file-backed database on disk:

```dart
// In-memory (ideal for tests and ephemeral state)
final db = await LocalPocket.open(
  path: ':memory:',
  stores: [taskSchema],
);

// File-backed (persistent across app launches)
final persistentDb = await LocalPocket.open(
  path: '/path/to/app.db',
  stores: [taskSchema],
);
```

---

### Step 3: CRUD & Keyset Queries

```dart
final tasks = db.collection('tasks');

// 1. Create or Replace (ID is auto-generated if omitted)
await tasks.put({
  'id': 'tsk1234567890ab',
  'title': 'Ship version 1.0',
  'priority': 1,
  'status': 'in_progress',
  'completed': false,
});

// 2. Sub-microsecond Point Read (served from in-memory LRU cache)
final task = await tasks.get('tsk1234567890ab');

// 3. Targeted Partial Update
await tasks.patch('tsk1234567890ab', {'completed': true});

// 4. Soft Delete (archived=true; hidden from normal queries, preserved for sync)
await tasks.archive('tsk1234567890ab');
await tasks.restore('tsk1234567890ab');

// 5. Hard Purge (permanently removes local row and blob references)
await tasks.purge('tsk1234567890ab');

// 6. Keyset Pagination Query
final firstPage = await tasks.query()
    .where('completed', eq: false)
    .orderBy('priority')
    .select(['id', 'title', 'priority'])
    .limit(20)
    .fetch();

if (firstPage.hasMore) {
  final nextPage = await tasks.query()
      .where('completed', eq: false)
      .orderBy('priority')
      .select(['id', 'title', 'priority'])
      .limit(20)
      .keysetAfter(firstPage.nextCursor!)
      .fetch();
}
```

---

### Step 4: Native Aggregates & FTS5 Search

Aggregates compile directly to native SQLite queries for maximum speed:

```dart
// Native Count & Distinct
final totalCount = await tasks.query().where('completed', eq: false).count();
final uniqueStatuses = await tasks.query().distinct('status');
final distinctCount = await tasks.query().countDistinct('status');

// Numeric Aggregates
final minPriority = await tasks.query().min('priority');
final maxPriority = await tasks.query().max('priority');
final sumPriority = await tasks.query().sum('priority');
final avgPriority = await tasks.query().avg('priority');

// Full-Text Search (BM25 ranked)
final results = await tasks.search('ship version').limit(10).fetch();
for (final hit in results) {
  print('Found record ${hit.id} with score ${hit.score}');
}
```

---

### Step 5: Reactive Live Watches

Watch individual records or whole queries. The watcher uses diff-first ID tracking and debounced execution:

```dart
// Watch a filtered query
final querySub = tasks.query()
    .where('completed', eq: false)
    .orderBy('priority')
    .limit(50)
    .watch()
    .listen((items) {
      print('Active tasks updated: ${items.length}');
    });

// Watch a single record
final recordSub = tasks.watchOne('tsk1234567890ab').listen((doc) {
  print('Task changed: $doc');
});

// Cancel subscriptions when done
await querySub.cancel();
await recordSub.cancel();
```

---

### Step 6: Synchronize with PocketBase

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

// Start background synchronization (REST Pull/Push + SSE Realtime)
await engine.start();

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
| `SetUnionResolver` | Preserves 2-way additions; drops removals | Tag lists, categorizations, multi-select IDs |
| `AppendOnlyResolver` | Concatenates text or list items with deduplication | Audit logs, conversation threads, history |
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
      'tags': const SetUnionResolver(),
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

---

## Binary Files & Blob Attachments

Attach files with streaming SHA-256 hashing and automatic deduplication:

```dart
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

// Explicit durability tuning:
// - DurabilityClass.full (default): PRAGMA synchronous=FULL for crash resilience
// - DurabilityClass.normal: PRAGMA synchronous=NORMAL for high throughput
await tasks.patch(
  'tsk1234567890ab',
  {'completed': true},
  durability: DurabilityClass.normal,
);
```

---

## Running Tests & Benchmarks

```bash
# Run static analysis
dart analyze

# Run unit & integration tests
dart test

# Run performance benchmark suite
dart run benchmark/benchmark.dart
```

---

## License

MIT License (see `LICENSE`).
