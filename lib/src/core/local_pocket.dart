import 'dart:async';
import 'dart:convert';
import 'dart:typed_data';

import 'package:collection/collection.dart' show ListEquality;
import 'package:meta/meta.dart';
import 'database_adapter.dart';
import 'database_factory.dart';

import 'capabilities.dart';
import 'codec.dart';
import 'change_bus.dart';
import 'cipher.dart';
import 'ddl_compiler.dart';
import 'compiled_query_runner.dart';
import 'errors.dart';
import 'fts_normalizer.dart';
import 'migrator.dart';
import 'perf_counters.dart';
import 'query_plan.dart';
import 'schema.dart';
import 'schema_manifest.dart';
import 'store.dart';
import 'system_tables.dart';
import 'transaction.dart';
import 'write_queue.dart';
import '../sync/op_queue.dart';
import '../sync/outbox.dart';
import '../sync/conflicts.dart';
import '../sync/sync_tables.dart';
import '../files/blob_store.dart';
import '../files/files_api.dart';
import '../typed/typed.dart';

part 'kernel_context.dart';

part 'read_service.dart';

part 'transaction_coordinator.dart';

/// Default clock: wall-clock epoch milliseconds.
int _defaultNow() => DateTime.now().millisecondsSinceEpoch;

/// Durability class for a transaction.
///
/// - [normal]: `synchronous=NORMAL` (default, app-crash-safe under WAL).
/// - [full]: `synchronous=FULL` for the local-first invariant — transactions
///   that write domain rows + outbox intent must not lose the tail commit.
enum DurabilityClass {
  /// Use `synchronous=NORMAL`, which is app-crash-safe under WAL.
  normal,

  /// Use `synchronous=FULL` for commits that must survive power loss.
  full,
}

/// {@template localpocket.test_hooks}
/// Test-only hooks for crash injection and statement tracing.
/// {@endtemplate}
@visibleForTesting
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

  /// Called right before COMMIT executes (after a successful transaction
  /// body); throw to simulate a COMMIT failure (OPFS quota, disk I/O,
  /// corruption) — the whole transaction rolls back and every caller
  /// observes the thrown error instead of a false success.
  void Function()? commitCrashPoint;

  /// Called when a solo transaction body throws, right before the enclosing
  /// transaction ROLLBACKs; throw to simulate a ROLLBACK failure — the
  /// caller observes the thrown error instead of a false success.
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

  /// The complete, versioned schema manifest for this store (Phase 3).
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
    // Deep copy on the way in as well: a shallow store let a caller's
    // mutation of a nested map/list leak INTO the cache (the returned doc
    // aliased the stored nested values).
    _cache[id] = value == null ? null : _deepClone(value);
  }

  /// Removes the entries identified by [ids], or clears all entries when
  /// [ids] is empty.
  void invalidate(Iterable<String> ids) {
    if (ids.isEmpty) {
      _cache.clear();
      return;
    }
    // Invalidation is conservative: when the change set is at least as large
    // as the cache (e.g. a bulk putAll), clearing the whole cache is cheaper
    // than removing every id one by one and strictly safe — extra misses
    // only cost future reads, never correctness.
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

/// Deep structural copy for cache isolation: plain maps and Lists are
/// rebuilt recursively; every other JSON-representable value is immutable in
/// Dart (String/num/bool/null) and shared by reference. Uint8List values
/// (blob bytes surfaced through the files API) are copied defensively since
/// they are mutable.
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

/// The semantic kernel owner (Phase 2 of the final refactoring plan).
///
/// This is the concrete database implementation that previously rode under
/// the public name `LocalPocket`. The public name is now a transitional
/// alias; the final public facade (Phase 5) will be a separate class over a
/// private `RuntimeClient`, and `KernelDatabase` becomes the internal
/// kernel-facing owner constructed identically by native and the web worker.
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
    );
    _transactions = TransactionCoordinator(kernel);
    mutations = MutationService(kernel);
    reads = ReadService(kernel);
    outbox = Outbox.internal(this);
    opQueue = OpQueue.internal(this);
    conflicts = Conflicts.internal(this);
    files = LocalPocketFiles.internal(this, blobStore: blobStore);
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

  /// The database path supplied to [open].
  final String path;

  /// The injected SQLite database connection.
  final Database db;

  /// Capabilities detected for the active SQLite connection.
  final SqliteCapabilities capabilities;

  /// Serializes all operations that use the owned SQLite connection.
  late final WriteQueue writeQueue;

  /// Performance counters for this database handle.
  final PerfCounters perf;

  /// Maximum canonical document size accepted by local writes.
  final int maxDocBytes;

  /// Whether destructive migrations may create their backup copy.
  final bool destructiveBackup;

  /// Optional test-only crash and tracing hooks.
  final TestHooks? testHooks;

  /// Blob store used by [files], when configured.
  final BlobStore? blobStore;

  /// Default field cipher, when configured.
  final FieldCipher? fieldCipher;

  /// Per-field cipher provider, when configured.
  final CryptoProvider? cryptoProvider;

  /// Injectable clock (epoch ms) for persistence bookkeeping: outbox/op-queue
  /// timestamps, conflict timestamps, last-seen/settlement, compaction cutoffs
  /// and file bookkeeping. Defaults to the wall clock; inject for deterministic
  /// tests. The sync engine's [SyncConfig] clock is expected to match (or be
  /// derived from) this one.
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

  /// The typed store registry backing [store] (and `Tx.store`): one per
  /// [LocalPocket], keyed by store name, enforced by reference identity.
  final TypedStoreRegistry typedRegistry = TypedStoreRegistry();

  /// Tracked `synchronous` pragma state lives on the [TransactionCoordinator]
  /// (durability transitions are a transaction concern).

  /// Whether `PRAGMA optimize` completed during [close].
  @visibleForTesting
  bool optimizeRanOnClose = false;

  /// Coalescing window for group commit (default zero = end-of-turn only).
  ///
  /// When positive, mutations submitted from separate event-loop turns may
  /// still share one SQLite transaction (one fsync) as long as they arrive
  /// within [groupCommitWindow] of each other. A read arriving during the
  /// window flushes the pending group first, preserving read-your-writes and
  /// FIFO. Callers of the LAST write in a burst observe latency up to the
  /// window; set it to the maximum fsync latency you are willing to trade
  /// for batch throughput.
  final Duration groupCommitWindow;

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
    bool encrypted = false,
    FieldCipher? fieldCipher,
    CryptoProvider? cryptoProvider,
    int maxDocBytes = 1900000,
    bool destructiveBackup = true,
    TestHooks? testHooks,
    BlobStore? blobStore,
    String? wasmAssetPath,
    String? workerAssetPath,
    int Function()? now,
    Duration groupCommitWindow = Duration.zero,
  }) async {
    if (encrypted && platform == PlatformProfile.web) {
      throw UnsupportedError('SQLCipher is unsupported on web platform.');
    }
    final Database db;
    if (database != null) {
      db = database;
    } else {
      db = await openPlatformDatabase(path);
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
      );
      await _recordCoreMigration(db, pocket.now);
      for (final schema in stores) {
        await pocket.registerStore(schema);
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
      // Auto-checkpointing is DISABLED: with the default 1000 pages the
      // committing connection checkpoints INLINE, stalling writes for
      // milliseconds once the WAL crosses ~4 MB (measured p99 5-6 ms).
      // Instead, `_noteWriteCommitted` schedules non-blocking
      // `wal_checkpoint(PASSIVE)` off the writer's path after write bursts,
      // and `runMaintenance`/`walCheckpoint` retain the truncating variant.
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

  /// Registers [schema], creating or migrating its SQLite table.
  ///
  /// Phase 3 (plan §9 / §12): before ANY DDL, migration, or mutation, the
  /// schema is compiled into a complete [SchemaManifest] and validated:
  ///
  /// - duplicate store names within one open are rejected;
  /// - on the worker/web runtime, executable features that cannot cross the
  ///   worker boundary (resolvers, validator callbacks, migration transforms,
  ///   document migrations) are rejected — the schema is never silently
  ///   reduced (native keeps executing them until Phase 8 removes them);
  /// - a behavior-affecting change at the SAME schema version (manifest
  ///   fingerprint mismatch against the persisted manifest) is rejected —
  ///   the application must bump the version and provide a migration.
  Future<void> registerStore(CollectionSchema<Object?> schema) async {
    // §4.17: store identity must be unambiguous — duplicates never resolve to
    // "first table wins, last definition wins".
    if (_tables.containsKey(schema.name)) {
      throw SchemaRegistrationError(
          'Duplicate store name "${schema.name}" in this open call.');
    }
    // Compile the complete manifest and reject unrepresentable behavior
    // before anything is created or changed on disk.
    final manifest = SchemaManifest.compile(schema);
    if (capabilities.platform == PlatformProfile.web &&
        manifest.unsupportedFeatures.isNotEmpty) {
      throw UnsupportedSchemaFeatureError(
          'Store "${schema.name}" declares executable features that cannot '
          'run on the worker runtime: ${manifest.unsupportedFeatures.join(', ')}.');
    }
    await _assertSameVersionManifestUnchanged(schema, manifest);

    final compiled = DdlCompiler(capabilities).compile(schema);
    // The write-side normalizer must exist before ANY trigger can fire
    // (fresh create below, or the FTS-rebuild / destructive paths).
    if (schema.fts != null) {
      registerFtsNormalizer(db, schema.name, schema.fts!.normalize);
    }
    final existing = await db.query('lp_stores',
        where: 'store = ?', whereArgs: [schema.name], limit: 1);
    if (existing.isEmpty) {
      await db.execute(compiled.tableDdl);
      for (final ix in compiled.indexDdl) {
        await db.execute(ix);
      }
      for (final f in compiled.ftsDdl) {
        await db.execute(f);
      }
      await db.insert('lp_stores', {
        'store': schema.name,
        'table_name': schema.name,
        'schema_ver': schema.version,
        'definition_json': jsonEncode(schema.toJson()),
        'created_at': now(),
      });
      await Migrator.recordMigration(db,
          name: 'create:${schema.name}', from: 0, to: schema.version, now: now);
    } else {
      final current = existing.first['schema_ver']! as int;
      if (current > schema.version) {
        throw SchemaTooNewError(
            'Store "${schema.name}" on disk is schema v$current, but this package supports v${schema.version}.');
      }
      if (current < schema.version) {
        await Migrator.migrateStore(this, schema, fromVersion: current);
      }
      await _rebuildFtsIfConfigChanged(schema);
      await db.update(
          'lp_stores',
          {
            'definition_json': jsonEncode(schema.toJson()),
            'schema_ver': schema.version
          },
          where: 'store = ?',
          whereArgs: [schema.name]);
    }
    _tables[schema.name] = StoreTable(schema, compiled, manifest: manifest);
    // Persist the manifest so the NEXT open can compare behavior, not just
    // version numbers.
    await _persistSchemaManifest(schema.name, manifest);
  }

  /// The persisted manifest key for [store].
  static String _manifestMetaKey(String store) => 'schema_manifest:$store';

  /// Rejects a behavior-affecting manifest change at the SAME schema version.
  /// Legacy databases without a persisted manifest adopt the current one.
  Future<void> _assertSameVersionManifestUnchanged(
      CollectionSchema<Object?> schema, SchemaManifest manifest) async {
    final rows = await db.query('lp_meta',
        where: 'k = ?', whereArgs: [_manifestMetaKey(schema.name)], limit: 1);
    if (rows.isEmpty) return; // adoption: first open of a manifest-era store
    SchemaManifest? persisted;
    try {
      final raw = rows.first['v'];
      persisted = SchemaManifest.fromJson(
          raw is String ? jsonDecode(raw) : raw);
    } on LocalPocketError {
      // Unreadable/corrupt persisted manifest: treat as adoption so the
      // store can recover; the corrupt value is overwritten below.
      return;
    }
    if (persisted.version != schema.version) return; // version change: legal
    if (persisted.fingerprint != manifest.fingerprint) {
      throw SchemaRegistrationError(
          'Store "${schema.name}" changed behavior at the SAME schema '
          'version ${schema.version}. Bump the store version and provide a '
          'migration description.');
    }
  }

  /// Persists the manifest (and its fingerprint) for the NEXT open.
  Future<void> _persistSchemaManifest(
      String store, SchemaManifest manifest) async {
    final key = _manifestMetaKey(store);
    final json = manifest.encodedJson;
    final existing = await db.query('lp_meta',
        where: 'k = ?', whereArgs: [key], limit: 1);
    if (existing.isEmpty) {
      await db.insert('lp_meta', {'k': key, 'v': json});
    } else {
      await db.update('lp_meta', {'v': json},
          where: 'k = ?', whereArgs: [key]);
    }
  }

  /// Reports whether the destructive-migration backup file at [path] exists,
  /// delegating to the platform database's file hooks (native `dart:io`, web
  /// OPFS). Returns false when the platform did not wire an existence hook.
  Future<bool> backupFileExists(String path) async {
    final d = db;
    if (d is DirectSqliteDatabase && d.backupFileExists != null) {
      return await d.backupFileExists!(path);
    }
    return false;
  }

  /// Recreates the FTS index when the persisted configuration differs from
  /// the newly registered schema (tokenizer change, different fields, or new
  /// normalization rules). The FTS table and its triggers are dropped and
  /// rebuilt from the live rows, and a ledger row records the rebuild.
  Future<void> _rebuildFtsIfConfigChanged(
      CollectionSchema<Object?> schema) async {
    final stored = await db.query('lp_stores',
        columns: ['definition_json'],
        where: 'store = ?',
        whereArgs: [schema.name],
        limit: 1);
    if (stored.isEmpty) return;
    CollectionSchema<Object?>? old;
    try {
      final raw = stored.first['definition_json'];
      final decoded = raw is String ? jsonDecode(raw) as Object? : raw;
      old = CollectionSchema<Object?>.fromJson(
          Map<String, Object?>.from(decoded! as Map));
    } on StorageError {
      // Unreadable definition: leave the existing index alone; a later
      // destructive migration is the recovery path.
      return;
    }
    final before = old.fts;
    final after = schema.fts;
    final same = identical(before, after) ||
        (before == null && after == null) ||
        (before != null &&
            after != null &&
            const ListEquality<String>().equals(before.fields, after.fields) &&
            before.fuzzy == after.fuzzy &&
            before.normalize == after.normalize);
    if (same) return;

    final sw = Stopwatch()..start();
    // Drop old triggers first: they are recreated by compiled.ftsDdl below
    // and CREATE TRIGGER fails if an old one is still present.
    for (final suffix in ['_ai', '_ad', '_au']) {
      await db.execute(
          'DROP TRIGGER IF EXISTS ${DdlCompiler.quote(schema.name + suffix)}');
    }
    if (before != null) {
      await db.execute(
          'DROP TABLE IF EXISTS ${DdlCompiler.quote('${schema.name}_fts')}');
    }
    if (after != null) {
      for (final f in DdlCompiler(capabilities).compile(schema).ftsDdl) {
        await db.execute(f);
      }
      // NOTE: the fts5 'rebuild' command re-tokenizes RAW content-table text
      // and would bypass the trigger normalizers entirely. Repopulate
      // explicitly through the same lp_norm_<store> expressions the triggers
      // use so the reindexed terms match query-side normalization.
      await db.execute("INSERT INTO ${DdlCompiler.quote('${schema.name}_fts')}"
          "(${DdlCompiler.quote('${schema.name}_fts')}) VALUES('delete-all')");
      final fts = schema.fts!;
      final colList = fts.fields.map(DdlCompiler.quote).join(', ');
      final selectList = fts.fields
          .map((c) => ftsTriggerExpr(schema.name, fts.normalize, '', c))
          .join(', ');
      await db.execute('INSERT INTO ${DdlCompiler.quote('${schema.name}_fts')}'
          '(rowid, $colList) SELECT rowid, $selectList FROM '
          '${DdlCompiler.quote(schema.name)}');
    }
    sw.stop();
    await Migrator.recordMigration(db,
        name: 'fts:${schema.name}',
        from: schema.version,
        to: schema.version,
        durationMs: sw.elapsedMilliseconds,
        now: now);
  }

  /// Removes the destructive-migration backup file at [path] if it exists,
  /// delegating to the platform database's file hooks (native `dart:io`, web
  /// OPFS). No-op when the platform did not wire a deleter.
  Future<void> deleteBackupFile(String path) async {
    final d = db;
    if (d is DirectSqliteDatabase && d.backupFileDeleter != null) {
      await d.backupFileDeleter!(path);
    }
  }

  /// Returns the registered table for [name], or throws if it is unknown.
  StoreTable requireTable(String name) {
    final t = _tables[name];
    if (t == null) {
      throw StateError('No store "$name" registered in this LocalPocket.');
    }
    return t;
  }

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
    return Collection.internal(this, requireTable(name));
  }

  /// Returns a typed handle for the store definition [def].
  ///
  /// The first `store` call binds [def] in this pocket's typed registry
  /// (name-keyed, reference identity): re-binding the identical instance is
  /// idempotent, and binding a different instance under an already-bound
  /// name throws [TypedStoreMismatchError] naming the store. The store's
  /// schema must have been registered at [LocalPocket.open] (`stores:`);
  /// otherwise the engine's "no store registered" error surfaces unchanged.
  ///
  /// The returned wrapper is cached per pocket: repeated calls with the
  /// same canonical definition return the identical object until
  /// [close]. Inside a transaction, use `tx.store(def)` instead.
  TypedCollection<S> store<S extends StoreDef<S>>(S def) {
    _guardOutsideTx();
    // Verify structure and existence BEFORE binding so a failed lookup leaves
    // the typed registry untouched (matching tx.store and the web facades).
    final table = requireTable(def.name);
    def.verifyRegisteredSchema(table.schema);
    typedRegistry.bind(def);
    return typedRegistry.cachedCollection<S>(
      def,
      () => TypedCollection<S>.native(
        def,
        Collection.internal(this, table),
      ),
    );
  }

  /// Runs [action] in a serialized, single-writer transaction.
  ///
  /// All domain, outbox, and sync-state changes performed through the [Tx]
  /// handle commit atomically. Change notifications are emitted only after a
  /// successful commit.
  ///
  /// ```dart
  /// await db.transaction((tx) async {
  ///   await tx.collection('orders').put(order);
  ///   await tx.collection('audit').put(auditEntry);
  /// });
  /// ```
  ///
  /// [DurabilityClass.normal] is the default: under WAL it is app-crash-safe
  /// (no torn files, no lost committed transactions on process death) while
  /// avoiding a disk flush per commit. Pass [DurabilityClass.full] for
  /// writes that must survive an OS/power failure (the tail commit of a
  /// payment, an irreplaceable edit). See the README "Transactions &
  /// Durability Modes" section for the trade-off table.
  ///
  /// Group commit: mutations submitted from the SAME event-loop turn (e.g. a
  /// `Future.wait` burst or fire-and-forget writes) are coalesced into ONE
  /// SQLite transaction — one fsync for the whole group — without changing
  /// observable semantics. Each member's body runs inside a savepoint, so a
  /// failing member rolls back only itself; its error propagates to that
  /// caller alone while the rest of the group commits. A mutation submitted
  /// alone still commits at the end of the current event-loop turn with no
  /// added wait. Members with different durability classes never share a
  /// group.
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

  /// Executes SQL, notifying the test [TestHooks.onExecute] observer.
  Future<void> traceExecute(String sql, [List<Object?>? arguments]) {
    testHooks?.onExecute?.call(sql);
    perf.recordStatement();
    return db.execute(sql, arguments ?? const []);
  }

  /// Runs a raw query, notifying the test [TestHooks.onQuery] observer.
  Future<List<Map<String, Object?>>> traceQuery(String sql,
      [List<Object?>? arguments]) {
    testHooks?.onQuery?.call(sql);
    perf.recordQuery();
    return db.rawQuery(sql, arguments ?? const []);
  }

  /// Runs SQLite `ANALYZE` to refresh query-planner statistics.
  ///
  /// Pass [store] to analyze one collection, or omit it to analyze the whole
  /// database. This is normally maintenance work rather than a per-request
  /// operation.
  Future<void> analyze([String? store]) async {
    if (store == null) {
      await db.execute('ANALYZE');
    } else {
      await db.execute('ANALYZE ${DdlCompiler.quote(store)}');
    }
  }

  /// Runs SQLite `PRAGMA wal_checkpoint(TRUNCATE)` to checkpoint and truncate the WAL.
  Future<void> walCheckpoint() async {
    if (capabilities.walSupported) {
      await db.execute('PRAGMA wal_checkpoint(TRUNCATE)');
    }
  }

  /// Runs a non-blocking `PRAGMA wal_checkpoint(PASSIVE)` — checkpoints as
  /// many WAL frames as possible without blocking readers or writers, and
  /// returns immediately otherwise. With `wal_autocheckpoint=0` this is the
  /// WAL-bounding knob invoked opportunistically after write bursts (see
  /// `_noteWriteCommitted`); [walCheckpoint] remains the truncating,
  /// user-visible variant.
  Future<void> walCheckpointPassive() async {
    if (capabilities.walSupported) {
      await db.execute('PRAGMA wal_checkpoint(PASSIVE)');
    }
  }

  /// Runs SQLite `VACUUM` or `PRAGMA incremental_vacuum` to reclaim unused database pages.
  Future<void> vacuum({int? pages}) async {
    if (pages != null) {
      await db.execute('PRAGMA incremental_vacuum($pages)');
    } else {
      await db.execute('VACUUM');
    }
  }

  /// Prunes orphaned or superseded outbox operations.
  ///
  /// Only outbox rows whose sync row is `clean` (the edit has settled) or that
  /// have no sync row at all (orphaned) are removed. Ops in every other state —
  /// `dirty`, `inFlight`, `conflict`, `blocked`, `error`, `quarantine` — are
  /// always retained: the op is the only record of that pending edit, and
  /// evicting it would silently lose unsynced local data and leave the sync
  /// row with a dangling `op_id` (violating the sync-invariants oracle).
  ///
  /// [maxEntries] is retained for API compatibility but is no longer enforced:
  /// bounding the outbox by evicting non-clean ops deletes pending local
  /// edits, so pruning is strictly clean-only.
  Future<int> pruneOutbox({int maxEntries = 10000}) async {
    var pruned = 0;
    await transaction((tx) async {
      final exec = tx.executor;
      // Remove outbox entries whose sync row is clean (the edit settled) or
      // absent (orphaned). Never evict the op of a dirty/inFlight/conflict/
      // blocked/error/quarantine row: the op is the only record of the
      // unsynced edit, and removing it would create a dangling op_id.
      final orphaned = await exec.rawQuery(
        'SELECT o.store, o.record_id FROM lp_outbox o '
        'LEFT JOIN lp_sync_row s ON s.store = o.store AND s.record_id = o.record_id '
        "WHERE s.record_id IS NULL OR s.sync_state = 'clean'",
      );
      for (final r in orphaned) {
        final st = r['store']! as String;
        final id = r['record_id']! as String;
        await exec.delete('lp_outbox',
            where: 'store = ? AND record_id = ?', whereArgs: [st, id]);
        pruned++;
      }
    });
    return pruned;
  }

  /// Runs the complete maintenance state machine:
  /// 1. Compacts eligible archived rows across all stores
  /// 2. Prunes the outbox
  /// 3. Executes WAL checkpointing
  /// 4. Optimizes planner statistics
  Future<void> runMaintenance(
      {Duration compactOlderThan = const Duration(days: 90)}) async {
    for (final store in storeNames) {
      await compact(store, olderThan: compactOlderThan);
    }
    await pruneOutbox();
    await walCheckpoint();
    await analyze();
  }

  /// Compacts synced archived rows older than [olderThan].
  ///
  /// Deletes ONLY rows that are `archived=1 AND sync_state='clean' AND hidden=0 AND last_seen < now−olderThan`
  /// and drops their file refs and blob refcounts.
  Future<int> compact(String store,
      {required Duration olderThan, int? nowMs}) async {
    final current = nowMs ?? now();
    final cutoff = current - olderThan.inMilliseconds;
    var count = 0;
    const chunkSize = 250;
    final schema = requireTable(store).schema;
    while (true) {
      final rows = await db.rawQuery(
        'SELECT b.id FROM ${DdlCompiler.quote(store)} b '
        'JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id '
        'WHERE b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? '
        'AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? '
        'ORDER BY b.id LIMIT ?',
        [store, SyncState.clean.name, cutoff, chunkSize],
      );
      if (rows.isEmpty) break;
      await transaction((tx) async {
        final exec = tx.executor;
        for (final r in rows) {
          final id = r['id']! as String;
          // Revalidate eligibility INSIDE the transaction, immediately before
          // the delete: a concurrent write between the candidate SELECT and
          // here (unarchive, unhide, dirty/conflict transition) must prevent a
          // stale deletion.
          final stillEligible = await exec.rawQuery(
            'SELECT b.id FROM ${DdlCompiler.quote(store)} b '
            'JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id '
            'WHERE b.id = ? AND b.archived = 1 AND b.hidden = 0 '
            'AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL '
            'AND sr.last_seen_at < ? LIMIT 1',
            [store, id, SyncState.clean.name, cutoff],
          );
          if (stillEligible.isEmpty) continue;
          final existingRows = await exec.rawQuery(
              'SELECT * FROM ${DdlCompiler.quote(store)} WHERE id = ? LIMIT 1',
              [id]);
          final existing = existingRows.isNotEmpty
              ? decodeDbRow(schema, existingRows.first,
                  cipher: fieldCipher, cryptoProvider: cryptoProvider)
              : null;
          await vanishRecordMetadata(exec, store, id,
              deleteSyncAndOutbox: true);
          await exec.delete(store, where: 'id = ?', whereArgs: [id]);
          tx.addChange(ChangeSet(store, {id}));
          if (existing != null) {
            final changed = existing.keys.where((k) => k != 'id').toSet();
            tx.addRecordEvent(RecordChangeEvent(
              store: store,
              id: id,
              origin: ChangeOrigin.local,
              action: ChangeAction.purge,
              oldRecord: existing,
              newRecord: null,
              changedFields: changed,
            ));
          }
          count++;
        }
      });
    }
    return count;
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

  /// Invalidates watchers after changes made outside this [LocalPocket]
  /// connection.
  ///
  /// Use this when another process, isolate, or database connection changes
  /// one of the collections. Because affected IDs are unknown, watchers
  /// conservatively re-check their queries.
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
    typedRegistry.clearHandles();
    try {
      await db.execute('PRAGMA optimize');
      optimizeRanOnClose = true;
    } catch (_) {}
    await db.close();
  }
}

/// {@template localpocket.__commit_group}
/// One group-commit unit: mutations submitted in the same event-loop turn
/// share a single SQLite transaction (one fsync). Members run under the
/// group-level Tx; in a multi-member group each member additionally runs
/// inside a SAVEPOINT so one failing member rolls back only itself.
/// {@endtemplate}
class _CommitGroup {
  /// {@macro localpocket.__commit_group}
  _CommitGroup(this.coordinator, this.durability);
  final TransactionCoordinator coordinator;
  KernelContext get context => coordinator.context;
  final DurabilityClass durability;
  final members = <_CommitMember>[];

  /// Set once [flush] has started: later arrivals open their own group.
  bool sealed = false;

  Completer<void>? _barrier;
  bool _barrierDone = false;

  /// Takes the single-writer slot immediately (preserving submission-order
  /// FIFO for reads and later writes) and waits for the end-of-turn barrier
  /// before committing, so sibling mutations in the same turn (or, with a
  /// coalescing window configured, within the window) can join.
  void reserve() {
    final barrier = Completer<void>();
    _barrier = barrier;
    unawaited(context.writeQueue.run(() async {
      await barrier.future;
      // Member completers already received any per-member error; swallow the
      // queue-level rethrow so it never becomes an unhandled async error.
      try {
        await flush();
      } catch (_) {}
    }));
    // scheduleMicrotask would close the group BEFORE sibling awaits in the
    // same turn run; Timer(Duration.zero) defers past them, capturing the
    // whole burst. A positive coalescing window keeps the barrier open even
    // longer so bursts across turns can join (a read or a
    // different-durability submission flushes it early).
    final window = context.groupCommitWindow;
    if (window > Duration.zero) {
      Timer(window, flushEarly);
    } else {
      Timer.run(flushEarly);
    }
  }

  /// Completes the end-of-turn / end-of-window barrier early. Called when a
  /// read arrives (read-your-writes must not wait out the window) or when a
  /// different-durability submission needs its own group. Idempotent — the
  /// window timer and explicit flushes race harmlessly.
  void flushEarly() {
    if (_barrierDone) return;
    _barrierDone = true;
    if (identical(coordinator._pendingGroup, this)) {
      coordinator._pendingGroup = null;
    }
    _barrier?.complete();
  }

  /// Runs all joined members inside ONE write transaction. In multi-member
  /// groups a member whose body throws rolls back to its savepoint and that
  /// member alone completes with the error; the rest still commit. A SOLO
  /// member runs directly — identical to the pre-group-commit path, so
  /// savepoint naming and rollback semantics are unchanged for sequential
  /// writes.
  Future<void> flush() async {
    sealed = true;
    if (members.isEmpty) return;
    final solo = members.length == 1;
    if (!solo) {
      context.perf.groupCommits++;
      context.perf.groupCommitMembers += members.length;
    }
    // Already inside the WriteQueue slot taken by [reserve] — never re-enter
    // the queue here (it would deadlock on our own reserved slot).
    final sw = Stopwatch()..start();
    final inMemory = context.database.path == ':memory:';
    final useFull = durability == DurabilityClass.full && !inMemory;
    if (useFull && coordinator._synchronous != 'FULL') {
      await context.traceExecute('PRAGMA synchronous=FULL');
      coordinator._synchronous = 'FULL';
    }
    final changes = <ChangeSet>[];
    final recordEvents = <RecordChangeEvent>[];
    // Member outcomes are stashed and surfaced only AFTER the transaction
    // callback resolves: completing inside the callback would resume the
    // awaiting caller BEFORE COMMIT executes, letting it observe pre-commit
    // state (a real bug: the sync engine drained an empty outbox).
    final outcomes = <(_CommitMember, Object?, Object?, StackTrace?)>[];
    try {
      await context.db.transaction((txn) async {
        final tx = Tx.internal(context.database, txn, changes,
            recordEvents: recordEvents);
        if (solo) {
          try {
            final result = await tx.runInZone(() => members.single.action(tx));
            outcomes.add((members.single, result, null, null));
          } catch (e, st) {
            outcomes.add((members.single, null, e, st));
            // Right before the transaction ROLLBACKs: throw to simulate a
            // ROLLBACK failure (disk I/O, quota) so the caller observes a
            // failure instead of a false success.
            context.testHooks?.rollbackCrashPoint?.call();
            rethrow;
          }
        } else {
          for (final member in members) {
            try {
              final result = await tx
                  .runInZone(() => tx.transaction((m) => member.action(m)));
              outcomes.add((member, result, null, null));
            } catch (e, st) {
              outcomes.add((member, null, e, st));
            }
          }
        }
        // Right before COMMIT executes: throw to simulate a COMMIT failure
        // (OPFS quota, disk I/O, corruption) — the whole transaction rolls
        // back and every caller observes the thrown error.
        context.testHooks?.commitCrashPoint?.call();
      });
      // COMMIT has executed: now resolve every caller.
      for (final (m, result, err, st) in outcomes) {
        if (err != null) {
          m.completer.completeError(err, st);
        } else {
          m.completer.complete(result);
        }
      }
      for (final cs in changes) {
        context.tables[cs.store]?.readCache.invalidate(cs.ids);
        context.changeBus.emit(cs);
      }
      for (final event in recordEvents) {
        context.changeBus.emitEvent(event);
      }
    } catch (e, st) {
      // The transaction failed at BEGIN/COMMIT/rollback level and every
      // member's writes are rolled back with it. A member whose own body
      // already failed keeps that error when it IS the settle failure (the
      // ordinary rethrow); when the settle failed with a different error (a
      // COMMIT/ROLLBACK failure after a body threw, or a body that succeeded
      // before a COMMIT failure), the caller must learn the settle error
      // rather than a false success. The generic fallback in `finally` below
      // only covers BEGIN failures that unwound before any member ran.
      for (final (m, _, err, mst) in outcomes) {
        if (m.completer.isCompleted) continue;
        if (err != null && identical(e, err)) {
          m.completer.completeError(err, mst);
        } else {
          m.completer.completeError(e, st);
        }
      }
      rethrow;
    } finally {
      if (useFull && coordinator._synchronous != 'NORMAL') {
        try {
          await context.traceExecute('PRAGMA synchronous=NORMAL');
          coordinator._synchronous = 'NORMAL';
        } catch (_) {}
      }
      context.perf.recordWriteTransaction(sw.elapsedMicroseconds);
      // WAL auto-checkpointing is disabled; opportunistically bound the WAL
      // from here (off the writer's critical path — the schedule is deferred
      // to the next event-loop turn).
      coordinator._noteWriteCommitted();
      // Safety net: a BEGIN-level failure (e.g. closed handle) unwinds before
      // any member ran. No caller may hang on an uncompleted completer.
      for (final member in members) {
        if (!member.completer.isCompleted) {
          member.completer.completeError(StateError('Group commit failed.'));
        }
      }
    }
  }
}

class _CommitMember {
  _CommitMember(this.action);
  final Future<dynamic> Function(Tx tx) action;
  final completer = Completer<dynamic>();
}

/// Transitional alias: the public name `LocalPocket` previously referred to
/// the concrete class above (and still does on the web via a separate
/// facade). The final public facade (Phase 5) becomes a distinct class over a
/// private `RuntimeClient`; at that point this alias dies with the raw
/// surface. All legacy raw/typed clients and tests keep compiling through it.
typedef LocalPocket = KernelDatabase;
