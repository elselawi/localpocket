/// The kernel hub: the composition root that owns the engine's services and
/// the sealed-command dispatcher.
///
/// Library-structure posture: every service (`kernel_context`, the mutation,
/// read, transaction, and file-session services, and the command dispatcher)
/// is a real library receiving [KernelContext] explicitly — none of them is
/// a `part` of this hub, so each depends only on the dependency set it
/// declares. The dispatcher is one exhaustive `switch` over the sealed
/// request family, each case a one-liner delegating to a per-family private
/// method.
library;

import 'dart:async';
import 'dart:typed_data';

import 'package:meta/meta.dart';
import 'database_adapter.dart';
import 'database_factory.dart';

import 'capabilities.dart';
import 'change_bus.dart';
import 'cipher.dart';
import 'command_handler.dart';
import 'ddl_compiler.dart';
import 'kernel_context.dart';
import 'maintenance_service.dart';
import 'schema_service.dart';
import 'mutation_service.dart';
import 'page_callbacks.dart' show CallbackInvoker;
import 'perf_counters.dart';
import 'read_service.dart';
import 'schema.dart';
import 'schema_manifest.dart';
import 'store.dart';
import 'system_tables.dart';
import 'transaction.dart';
import 'transaction_coordinator.dart';
import 'write_queue.dart';
import 'sync/op_queue.dart';
import 'sync/outbox.dart';
import 'sync/conflicts.dart';
import 'sync/sync_tables.dart';
import 'sync/sync_backend.dart' show SyncBackendFactory;
import 'files/blob_store.dart';
import 'file_service.dart';
import '../contract/contract.dart';

/// Default clock: wall-clock epoch milliseconds.
int _defaultNow() => DateTime.now().millisecondsSinceEpoch;

/// {@template localpocket.test_hooks}
/// Test-only hooks for crash injection and statement tracing. Internal:
/// carried by [KernelContext] and consumed by kernel services; not part of
/// the public API.
/// {@endtemplate}
class TestHooks {
  /// Creates a collection of optional test hooks.
  ///
  /// {@macro localpocket.test_hooks}
  TestHooks({
    this.migrationCrashPoint,
    this.mutationCrashPoint,
    this.applyRemoteCrashPoint,
    this.commitCrashPoint,
    this.rollbackCrashPoint,
    this.onExecute,
    this.onQuery,
  });

  /// Called after each migration backfill chunk commit; throw to simulate a
  /// crash.
  void Function(String marker)? migrationCrashPoint;

  /// Called inside the mutation transaction at statement boundaries; throw to
  /// simulate a crash.
  void Function(String marker)? mutationCrashPoint;

  /// Called at the top of every remote apply; throw to roll back
  /// the page transaction.
  void Function(String store, String id)? applyRemoteCrashPoint;

  /// Called right before COMMIT executes (after a successful body); throw
  /// to simulate a COMMIT failure — every caller observes the thrown error
  /// instead of a false success.
  void Function()? commitCrashPoint;

  /// Called when a solo transaction body throws, right before ROLLBACK;
  /// throw to simulate a ROLLBACK failure the caller must observe.
  void Function()? rollbackCrashPoint;

  /// Called for every `execute` routed through [LocalPocket.traceExecute]
  /// (pragma spy).
  void Function(String sql)? onExecute;

  /// Called for every `rawQuery` routed through [LocalPocket.traceQuery]
  /// (requery counting).
  void Function(String sql)? onQuery;
}

/// {@template localpocket.store_table}
/// The compiled per-store table descriptor.
/// {@endtemplate}
class StoreTable {
  /// Creates a table descriptor from a schema and its compiled SQL.
  ///
  /// {@macro localpocket.store_table}
  StoreTable(this.schema, this.compiled, {required this.manifest})
      : warnings = compiled.warnings;

  /// The collection schema represented by this table.
  final CollectionSchema<Object?> schema;

  /// The compiled SQL representation of the schema.
  final CompiledSchema compiled;

  /// The complete, versioned schema manifest for this store.
  final SchemaManifest manifest;

  /// Warnings produced while compiling the schema.
  final List<String> warnings;

  /// Cache for point reads from this collection.
  final PointReadCache readCache = PointReadCache();

  /// The SQLite table name.
  String get tableName => schema.name;
}

/// LRU point read cache with negative caching and targeted key invalidation.
class PointReadCache {
  static const int _maxSize = 256;
  final Map<String, Map<String, Object?>?> _cache = {};

  /// Whether [id] has an entry, including a cached miss.
  bool containsKey(String id) => _cache.containsKey(id);

  /// Returns the cached record for [id], or null for a miss.
  Map<String, Object?>? get(String id) {
    if (!_cache.containsKey(id)) return null;
    // Refresh LRU order
    final val = _cache.remove(id);
    _cache[id] = val;
    return val == null ? null : _deepClone(val);
  }

  /// Stores [value] for [id], defensively copying nested values.
  void set(String id, Map<String, Object?>? value) {
    if (_cache.length >= _maxSize) {
      _cache.remove(_cache.keys.first);
    }
    // Deep copy on the way in: a shallow store leaked caller mutations of
    // nested maps/lists into the cache.
    _cache[id] = value == null ? null : _deepClone(value);
  }

  /// Removes the entries identified by [ids], or clears all entries when
  /// [ids] is empty.
  void invalidate(Iterable<String> ids) {
    if (ids.isEmpty) {
      _cache.clear();
      return;
    }
    // When the change set is at least as large as the cache (e.g. bulk
    // putAll), clearing everything is cheaper and strictly safe: extra
    // misses cost only future reads.
    if (ids.length >= _cache.length) {
      _cache.clear();
      return;
    }
    for (final id in ids) {
      _cache.remove(id);
    }
  }

  /// Removes every cached entry.
  void clear() => _cache.clear();

  Map<String, Object?> _deepClone(Map<String, Object?> map) =>
      _copyValue(map)! as Map<String, Object?>;
}

/// Deep structural copy for cache isolation: maps and lists are rebuilt
/// recursively; immutable JSON values are shared. Uint8List (mutable blob
/// bytes) is copied defensively.
Object? _copyValue(Object? v) {
  if (v is Map<String, Object?>) {
    return {
      for (final e in v.entries) e.key: _copyValue(e.value),
    };
  }
  if (v is Map) {
    return {
      for (final e in v.entries) e.key: _copyValue(e.value),
    };
  }
  if (v is List) {
    return [for (final e in v) _copyValue(e)];
  }
  if (v is Uint8List) return Uint8List.fromList(v);
  return v;
}

/// The semantic kernel owner: the concrete database implementation driven
/// directly on native and through the worker on web (the public facade is a
/// separate class over a private `RuntimeClient`).
///
/// Open a database by injecting the platform's [DatabaseFactory], register one
/// or more [CollectionSchema] objects, and then access data through
/// [collection]:
///
/// ```dart
/// final db = await LocalPocket.open(
///   path: '/app/data/local.db',
///   factory: databaseFactory,
///   stores: [taskSchema],
/// );
/// final tasks = db.collection('tasks');
/// final page = await tasks.query().limit(20).fetch();
/// ```
///
/// The database owns the SQLite connection and serializes writes. Always call
/// [close] when the application or test no longer needs the database.
class KernelDatabase with ChangeBusAwareLP {
  KernelDatabase._({
    required this.path,
    required this.db,
    required this.capabilities,
    required this.maxDocBytes,
    required this.destructiveBackup,
    required this.now,
    this.testHooks,
    this.blobStore,
    this.fieldCipher,
    this.cryptoProvider,
    this.groupCommitWindow = Duration.zero,
    this.txSessionTtl = defaultTxSessionTtl,
    this.syncBackendFactory,
    this.callbackInvoker,
  }) : perf = PerfCounters() {
    writeQueue = WriteQueue(onQueueDepthChanged: perf.queueChanged);
    kernel = KernelContext(
      database: this,
      db: db,
      capabilities: capabilities,
      writeQueue: writeQueue,
      perf: perf,
      maxDocBytes: maxDocBytes,
      destructiveBackup: destructiveBackup,
      now: now,
      testHooks: testHooks,
      blobStore: blobStore,
      fieldCipher: fieldCipher,
      cryptoProvider: cryptoProvider,
      groupCommitWindow: groupCommitWindow,
      txSessionTtl: txSessionTtl,
      callbackInvoker: callbackInvoker,
    );
    _transactions = TransactionCoordinator(kernel);
    mutations = MutationService(kernel);
    reads = ReadService(kernel);
    outbox = Outbox.internal(this);
    opQueue = OpQueue.internal(this);
    conflicts = Conflicts.internal(this);
    files = LocalPocketFiles.internal(this, blobStore: blobStore);
    maintenance = MaintenanceService(kernel);
    schemaService = SchemaService(kernel);
    commands = KernelCommandHandler(kernel);
  }

  /// The shared dependency set every kernel service receives. Native and the
  /// web worker construct it identically; services depend on this context,
  /// never on the concrete database facade.
  late final KernelContext kernel;

  /// The transaction coordinator: write queue settlement, durability
  /// transitions, group commit, and read transactions.
  late final TransactionCoordinator _transactions;

  /// Internal kernel access to the transaction coordinator.
  TransactionCoordinator get transactionCoordinator => _transactions;

  /// The kernel mutation owner (the only domain mutation path).
  late final MutationService mutations;

  /// The kernel read owner (compiled-plan execution and result shaping).
  late final ReadService reads;

  /// The kernel maintenance owner (housekeeping, compaction, tracing).
  late final MaintenanceService maintenance;

  /// The kernel schema owner (registration, migrations dispatch, manifests).
  late final SchemaService schemaService;

  /// The exhaustive command dispatcher over the runtime contract.
  late final KernelCommandHandler commands;

  /// The database path supplied to [open].
  final String path;

  /// The injected SQLite database connection.
  final Database db;

  /// Capabilities detected for the active SQLite connection.
  final SqliteCapabilities capabilities;

  /// Serializes write-side operations that use the owned SQLite connection
  /// (mutations, transaction sessions, maintenance). Point reads outside a
  /// transaction run directly on the connection and are not queued — the
  /// documented write-queue + direct-read-snapshot model.
  late final WriteQueue writeQueue;

  /// Performance counters for this database handle.
  final PerfCounters perf;

  /// Maximum canonical document size accepted by local writes.
  final int maxDocBytes;

  /// Whether destructive migrations may create their backup copy.
  final bool destructiveBackup;

  /// The adapter-supplied sync backend factory, or null when no sync adapter
  /// is configured (sync start commands fail typed). Depends only on the
  /// seam in `sync/sync_backend.dart`.
  final SyncBackendFactory? syncBackendFactory;

  /// The page-callback channel for executable schema features on the worker
  /// runtime (conflict resolvers, validators, migration hooks), or null when
  /// hooks execute in-process.
  final CallbackInvoker? callbackInvoker;

  /// Optional test-only crash and tracing hooks.
  final TestHooks? testHooks;

  /// Blob store used by [files], when configured.
  final BlobStore? blobStore;

  /// Default field cipher, when configured.
  final FieldCipher? fieldCipher;

  /// Per-field cipher provider, when configured.
  final CryptoProvider? cryptoProvider;

  /// Injectable clock (epoch ms) for persistence bookkeeping (outbox,
  /// conflicts, last-seen, compaction cutoffs). Defaults to the wall clock;
  /// inject for deterministic tests. The sync engine's clock should match.
  final int Function() now;

  /// Durable record-state synchronization queue.
  late final Outbox outbox;

  /// Durable queue for effects such as file uploads and removals.
  late final OpQueue opQueue;

  /// Conflict inspection and resolution API.
  late final Conflicts conflicts;

  /// File attachment and blob lifecycle API.
  late final LocalPocketFiles files;

  final Map<String, StoreTable> _tables = {};
  bool _closed = false;

  /// Tracked `synchronous` pragma state lives on the [TransactionCoordinator]
  /// (durability transitions are a transaction concern).

  /// Whether `PRAGMA optimize` completed during [close].
  @visibleForTesting
  bool optimizeRanOnClose = false;

  /// Coalescing window for group commit (default zero = end-of-turn only).
  ///
  /// When positive, mutations from separate turns may share one SQLite
  /// transaction (one fsync) if they arrive within the window. A read during
  /// the window flushes the pending group first (read-your-writes). Latency
  /// of the last write in a burst grows up to the window.
  final Duration groupCommitWindow;

  /// Idle deadline for interactive transaction sessions (see
  /// [defaultTxSessionTtl]); forwarded to [KernelContext].
  final Duration txSessionTtl;

  /// Opens or creates a database and registers the supplied collections.
  ///
  /// [factory] is intentionally required so the application can choose the
  /// correct SQLite implementation for desktop, mobile, or web. [stores] are
  /// compiled into typed SQLite tables and indexes during open.
  ///
  /// Set [platform] to [PlatformProfile.web] when using a web/WASM database
  /// factory. Set [blobStore] to enable attachment APIs. [fieldCipher] or
  /// [cryptoProvider] enables field-level encryption for encrypted fields.
  ///
  /// Web/worker asset paths are NOT kernel options: they are page/transport
  /// concerns carried by the facade's `BootstrapOptions` and consumed by the
  /// web opener. Keeping them out here is what keeps the kernel free of web
  /// vocabulary (R2).
  ///
  /// ```dart
  /// final db = await LocalPocket.open(
  ///   path: ':memory:',
  ///   stores: [
  ///     CollectionSchema(
  ///       name: 'notes',
  ///       version: 1,
  ///       fields: [Field.text('title', required: true)],
  ///     ),
  ///   ],
  /// );
  /// ```
  ///
  static Future<KernelDatabase> open({
    required String path,
    required List<CollectionSchema<Object?>> stores,
    Database? database,
    PlatformProfile platform = PlatformProfile.native,
    FieldCipher? fieldCipher,
    CryptoProvider? cryptoProvider,
    int maxDocBytes = 1900000,
    bool destructiveBackup = true,
    TestHooks? testHooks,
    BlobStore? blobStore,
    int Function()? now,
    Duration groupCommitWindow = Duration.zero,
    Duration txSessionTtl = defaultTxSessionTtl,
    SyncBackendFactory? syncBackendFactory,
    CallbackInvoker? callbackInvoker,
  }) async {
    final Database db;
    if (database != null) {
      db = database;
    } else {
      db = await openSqliteDatabase(path);
    }

    try {
      await _applyPragmas(db, platform);
      final caps = await SqliteCapabilities.probe(db, platform);
      for (final ddl in coreSystemDdl) {
        await db.execute(ddl);
      }
      for (final ddl in syncSystemDdl) {
        await db.execute(ddl);
      }
      final pocket = KernelDatabase._(
        path: path,
        db: db,
        capabilities: caps,
        maxDocBytes: maxDocBytes,
        destructiveBackup: destructiveBackup,
        now: now ?? _defaultNow,
        testHooks: testHooks,
        blobStore: blobStore,
        fieldCipher: fieldCipher,
        cryptoProvider: cryptoProvider,
        groupCommitWindow: groupCommitWindow,
        txSessionTtl: txSessionTtl,
        syncBackendFactory: syncBackendFactory,
        callbackInvoker: callbackInvoker,
      );
      await _recordCoreMigration(db, pocket.now);
      for (final schema in stores) {
        await pocket.schemaService.registerStore(schema);
      }
      return pocket;
    } catch (e) {
      try {
        await db.close();
      } catch (_) {}
      rethrow;
    }
  }

  static Future<void> _applyPragmas(
      Database db, PlatformProfile platform) async {
    if (platform == PlatformProfile.native) {
      // WAL first; may silently degrade (probe records the outcome).
      try {
        await db.execute('PRAGMA journal_mode=WAL');
      } catch (_) {}
      // Auto-checkpointing disabled: inline checkpoints stall writes (p99
      // 5-6 ms once the WAL crosses ~4 MB). `_noteWriteCommitted` schedules
      // non-blocking PASSIVE checkpoints off the writer's path instead.
      await db.execute('PRAGMA wal_autocheckpoint=0');
      await db.execute('PRAGMA mmap_size=67108864');
    }
    await db.execute('PRAGMA synchronous=NORMAL');
    await db.execute('PRAGMA foreign_keys=ON');
    await db.execute('PRAGMA busy_timeout=5000');
    await db.execute('PRAGMA cache_size=-8000');
    await db.execute('PRAGMA temp_store=MEMORY');
  }

  static Future<void> _recordCoreMigration(
      Database db, int Function() now) async {
    final rows =
        await db.query('lp_migrations', where: 'version = ?', whereArgs: [1]);
    if (rows.isNotEmpty) return;
    await db.insert('lp_migrations', {
      'version': 1,
      'name': 'core:v1',
      'applied_at': now(),
      'duration_ms': 0,
    });
  }

  /// Returns the registered table for [name], or throws if it is unknown.
  StoreTable requireTable(String name) {
    final t = _tables[name];
    if (t == null) {
      throw StateError('No store "$name" registered in this LocalPocket.');
    }
    return t;
  }

  /// Returns the registered table for [name], or `null` when it is unknown.
  StoreTable? tableOrNull(String name) => _tables[name];

  /// Names of all registered collections.
  ///
  /// This is useful when a sync engine must iterate every registered store.
  Iterable<String> get storeNames => _tables.keys;

  /// Returns a collection handle for [name].
  ///
  /// Use the returned [Collection] for CRUD, queries, search, and watches.
  /// Inside a transaction, use `tx.collection(name)` instead.
  Collection collection(String name) {
    _guardOutsideTx();
    return Collection.internal(this, requireTable(name),
        context: kernel.executionContext);
  }

  /// Runs [action] in a serialized, single-writer transaction.
  ///
  /// All domain, outbox, and sync-state changes through the [Tx] handle
  /// commit atomically; notifications are emitted only after a successful
  /// commit.
  ///
  /// ```dart
  /// await db.transaction((tx) async {
  ///   await tx.collection('orders').put(order);
  ///   await tx.collection('audit').put(auditEntry);
  /// });
  /// ```
  ///
  /// [DurabilityClass.normal] (default) is app-crash-safe under WAL without
  /// a disk flush per commit; [DurabilityClass.full] survives OS/power loss.
  ///
  /// Group commit: mutations from the same event-loop turn are coalesced
  /// into one SQLite transaction (one fsync). Each member runs in a
  /// savepoint, so a failing member rolls back only itself. Members with
  /// different durability classes never share a group.
  Future<T> transaction<T>(
    Future<T> Function(Tx tx) action, {
    DurabilityClass durability = DurabilityClass.normal,
  }) {
    _guardOutsideTx();
    return _transactions.transaction(action, durability: durability);
  }

  /// Runs [action] in a read-only transaction.
  ///
  /// The callback receives a [Tx] handle backed by a consistent read snapshot.
  /// Mutations through that handle throw [ReadOnlyTxError]. No durability
  /// pragma or change notification is produced.
  ///
  /// ```dart
  /// final count = await db.read((tx) {
  ///   return tx.collection('tasks').query().count();
  /// });
  /// ```
  Future<T> read<T>(Future<T> Function(Tx tx) action) {
    _guardOutsideTx();
    return _transactions.read(action);
  }

  /// The compiled per-store tables. Internal kernel access.
  Map<String, StoreTable> get tablesForKernel => _tables;

  /// Internal kernel entry for the outside-a-transaction guard.
  void guardOutsideTxForKernel() => _guardOutsideTx();

  /// Throws when a handle-level operation is attempted inside a transaction.
  void _guardOutsideTx() {
    if (Tx.current(this) != null) {
      throw StateError(
          'LocalPocket calls are not allowed inside a transaction; use the Tx handle.');
    }
  }

  /// Invalidates watchers after changes made outside this connection
  /// (another process or isolate). Watchers conservatively re-check their
  /// queries because affected IDs are unknown.
  void notifyExternalChange(Set<String> stores) {
    for (final s in stores) {
      _tables[s]?.readCache.clear();
      changeBus.emit(ChangeSet(s, const {}));
    }
  }

  /// Optimizes SQLite statistics and closes the database connection.
  ///
  /// After calling [close], do not reuse this handle or any collection obtained
  /// from it.
  Future<void> close() async {
    if (_closed) return;
    _closed = true;
    changeBus.close();
    try {
      await db.execute('PRAGMA optimize');
      optimizeRanOnClose = true;
    } catch (_) {}
    await db.close();
  }
}

/// Internal name for [KernelDatabase]; the public `LocalPocket` is the
/// facade over the typed contract. Never exported.
typedef LocalPocket = KernelDatabase;
