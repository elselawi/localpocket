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
dart test --tags web --run-skipped -j 1
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
dart test --tags real --run-skipped test/e2e/
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
