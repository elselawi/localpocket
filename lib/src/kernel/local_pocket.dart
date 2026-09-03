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
import 'dart:convert';
import 'dart:typed_data';

import 'package:collection/collection.dart' show ListEquality;
import 'package:meta/meta.dart';
import 'database_adapter.dart';
import 'execution_context.dart';
import 'database_factory.dart';

import 'capabilities.dart';
import 'codec.dart';
import 'change_bus.dart';
import 'cipher.dart';
import 'ddl_compiler.dart';
import 'fts_normalizer.dart';
import 'kernel_context.dart';
import 'file_sessions.dart';
import 'migrator.dart';
import 'mutation_service.dart';
import 'perf_counters.dart';
import 'read_service.dart';
import 'schema.dart';
import 'schema_manifest.dart';
import 'store.dart';
import 'system_tables.dart';
import 'transaction.dart';
import 'transaction_coordinator.dart';
import 'watch.dart';
import 'write_queue.dart';
import 'query/ir.dart';
import 'query/query_builder/query_builder.dart';
import 'query/query_builder/predicate_tree.dart';
import 'query/search_builder/search_builder.dart';
import 'sync/engine.dart';
import 'sync/op_queue.dart';
import 'sync/outbox.dart';
import 'sync/conflicts.dart';
import 'sync/sync_tables.dart';
import 'sync/sync_backend.dart' show SyncBackendFactory, SyncTokenSource;
import 'files/blob_store.dart';
import 'file_service.dart';
import '../contract/contract.dart';

part 'command_handler.dart';

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
    );
    _transactions = TransactionCoordinator(kernel);
    mutations = MutationService(kernel);
    reads = ReadService(kernel);
    commands = KernelCommandHandler(kernel);
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

  /// The exhaustive command dispatcher over the runtime contract.
  late final KernelCommandHandler commands;

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

  /// The adapter-supplied sync backend factory, or null when no sync adapter
  /// is configured (sync start commands fail typed). Depends only on the
  /// seam in `sync/sync_backend.dart`.
  final SyncBackendFactory? syncBackendFactory;

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
    Duration txSessionTtl = defaultTxSessionTtl,
    SyncBackendFactory? syncBackendFactory,
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
        txSessionTtl: txSessionTtl,
        syncBackendFactory: syncBackendFactory,
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

  /// Registers [schema], creating or migrating its SQLite table.
  ///
  /// Before any DDL the schema is compiled into a [SchemaManifest] and
  /// validated: duplicate store names are rejected; the worker runtime
  /// rejects executable features that cannot cross the worker boundary; and
  /// a behavior change at the SAME version (fingerprint mismatch) is
  /// rejected — bump the version and provide a migration.
  Future<void> registerStore(CollectionSchema<Object?> schema) async {
    // Store identity must be unambiguous.
    if (_tables.containsKey(schema.name)) {
      throw SchemaRegistrationError(
          'Duplicate store name "${schema.name}" in this open call.');
    }
    // Reject unrepresentable behavior before anything touches disk.
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
      persisted =
          SchemaManifest.fromJson(raw is String ? jsonDecode(raw) : raw);
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
    final existing =
        await db.query('lp_meta', where: 'k = ?', whereArgs: [key], limit: 1);
    if (existing.isEmpty) {
      await db.insert('lp_meta', {'k': key, 'v': json});
    } else {
      await db.update('lp_meta', {'v': json}, where: 'k = ?', whereArgs: [key]);
    }
  }

  /// Whether the destructive-migration backup file at [path] exists, via the
  /// platform file hooks. Returns false when none is wired.
  Future<bool> backupFileExists(String path) async {
    final d = db;
    if (d is DirectSqliteDatabase && d.backupFileExists != null) {
      return await d.backupFileExists!(path);
    }
    return false;
  }

  /// Recreates the FTS index when the persisted configuration differs from
  /// the registered schema (tokenizer, fields, or normalization rules); a
  /// ledger row records the rebuild.
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
      // The fts5 'rebuild' command re-tokenizes RAW text and bypasses the
      // trigger normalizers; repopulate through the same trigger expressions
      // so reindexed terms match query-side normalization.
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

  /// Removes the destructive-migration backup file at [path] via the
  /// platform file hooks. No-op when none is wired.
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

  /// Runs a non-blocking `PRAGMA wal_checkpoint(PASSIVE)`; with
  /// `wal_autocheckpoint=0` this is the WAL-bounding knob invoked after
  /// write bursts (see `_noteWriteCommitted`).
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
  /// Only outbox rows whose sync row is `clean` (edit settled) or absent
  /// (orphaned) are removed — every other state is retained because the op
  /// is the only record of a pending edit, and evicting it would lose
  /// unsynced data and leave a dangling `op_id`. [maxEntries] is kept for
  /// API compatibility but not enforced.
  Future<int> pruneOutbox({int maxEntries = 10000}) async {
    var pruned = 0;
    await transaction((tx) async {
      final exec = tx.executor;
      // Never evict the op of a dirty/inFlight/conflict/blocked/error/
      // quarantine row: it is the only record of the unsynced edit.
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
          // Revalidate eligibility inside the transaction: a concurrent
          // write between the candidate SELECT and here must prevent a
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
