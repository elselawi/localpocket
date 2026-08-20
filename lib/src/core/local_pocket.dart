import 'dart:async';
import 'dart:convert';

import 'package:meta/meta.dart';
import 'database_adapter.dart';
import 'database_factory.dart';

import 'capabilities.dart';
import 'codec.dart';
import 'change_bus.dart';
import 'cipher.dart';
import 'ddl_compiler.dart';
import 'errors.dart';
import 'migrator.dart';
import 'perf_counters.dart';
import 'schema.dart';
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

/// Durability class for a transaction.
///
/// - [normal]: `synchronous=NORMAL` (default, app-crash-safe under WAL).
/// - [full]: `synchronous=FULL` for the local-first invariant — transactions
///   that write domain rows + outbox intent must not lose the tail commit.
enum DurabilityClass { normal, full }

/// Test-only hooks for crash injection and statement tracing.
@visibleForTesting
class TestHooks {
  /// Called after each migration backfill chunk commit; throw to simulate a
  /// crash.
  void Function(String marker)? migrationCrashPoint;

  /// Called inside the mutation transaction at statement boundaries; throw to
  /// simulate a crash.
  void Function(String marker)? mutationCrashPoint;

  /// Called at the top of every remote apply; throw to roll back
  /// the page transaction.
  void Function(String store, String id)? applyRemoteCrashPoint;

  /// Called for every `execute` routed through [LocalPocket.traceExecute]
  /// (pragma spy).
  void Function(String sql)? onExecute;

  /// Called for every `rawQuery` routed through [LocalPocket.traceQuery]
  /// (requery counting).
  void Function(String sql)? onQuery;

  TestHooks({
    this.migrationCrashPoint,
    this.mutationCrashPoint,
    this.applyRemoteCrashPoint,
    this.onExecute,
    this.onQuery,
  });
}

/// The compiled per-store table descriptor.
class StoreTable {
  final CollectionSchema schema;
  final CompiledSchema compiled;
  final List<String> warnings;
  final PointReadCache readCache = PointReadCache();

  StoreTable(this.schema, this.compiled) : warnings = compiled.warnings;

  String get tableName => schema.name;
}

/// LRU point read cache with negative caching and targeted key invalidation.
class PointReadCache {
  static const int _maxSize = 256;
  final Map<String, Map<String, Object?>?> _cache = {};

  bool containsKey(String id) => _cache.containsKey(id);

  Map<String, Object?>? get(String id) {
    if (!_cache.containsKey(id)) return null;
    // Refresh LRU order
    final val = _cache.remove(id);
    _cache[id] = val;
    return val == null ? null : _deepClone(val);
  }

  void set(String id, Map<String, Object?>? value) {
    if (_cache.length >= _maxSize) {
      _cache.remove(_cache.keys.first);
    }
    _cache[id] = value == null ? null : Map<String, Object?>.from(value);
  }

  void invalidate(Iterable<String> ids) {
    if (ids.isEmpty) {
      _cache.clear();
    } else {
      for (final id in ids) {
        _cache.remove(id);
      }
    }
  }

  void clear() => _cache.clear();

  Map<String, Object?> _deepClone(Map<String, Object?> map) {
    return jsonDecode(jsonEncode(map)) as Map<String, Object?>;
  }
}

/// The main LocalPocket database handle.
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
/// [LocalPocket] owns the SQLite connection and serializes writes. Always call
/// [close] when the application or test no longer needs the database.
class LocalPocket with ChangeBusAwareLP {
  /// The database path supplied to [open].
  final String path;

  /// The injected SQLite database connection.
  final Database db;

  /// Capabilities detected for the active SQLite connection.
  final SqliteCapabilities capabilities;
  late final WriteQueue writeQueue;
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

  /// Tracked `synchronous` pragma state so redundant transitions are skipped.
  /// Writes are serialized through the WriteQueue and the
  /// connection is LocalPocket-owned (open() applies `synchronous=NORMAL`), so
  /// this state is authoritative for all write transactions.
  String _synchronous = 'NORMAL';

  @visibleForTesting
  bool optimizeRanOnClose = false;

  LocalPocket._({
    required this.path,
    required this.db,
    required this.capabilities,
    required this.maxDocBytes,
    required this.destructiveBackup,
    this.testHooks,
    this.blobStore,
    this.fieldCipher,
    this.cryptoProvider,
  }) : perf = PerfCounters() {
    writeQueue = WriteQueue(onQueueDepthChanged: perf.queueChanged);
    outbox = Outbox.internal(this);
    opQueue = OpQueue.internal(this);
    conflicts = Conflicts.internal(this);
    files = LocalPocketFiles.internal(this, blobStore: blobStore);
  }

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
  static Future<LocalPocket> open({
    required String path,
    Database? database,
    required List<CollectionSchema> stores,
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
      final pocket = LocalPocket._(
        path: path,
        db: db,
        capabilities: caps,
        maxDocBytes: maxDocBytes,
        destructiveBackup: destructiveBackup,
        testHooks: testHooks,
        blobStore: blobStore,
        fieldCipher: fieldCipher,
        cryptoProvider: cryptoProvider,
      );
      await _recordCoreMigration(db);
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
      await db.execute('PRAGMA wal_autocheckpoint=1000');
      await db.execute('PRAGMA mmap_size=67108864');
    }
    await db.execute('PRAGMA synchronous=NORMAL');
    await db.execute('PRAGMA foreign_keys=ON');
    await db.execute('PRAGMA busy_timeout=5000');
    await db.execute('PRAGMA cache_size=-8000');
    await db.execute('PRAGMA temp_store=MEMORY');
  }

  static Future<void> _recordCoreMigration(Database db) async {
    final rows =
        await db.query('lp_migrations', where: 'version = ?', whereArgs: [1]);
    if (rows.isNotEmpty) return;
    await db.insert('lp_migrations', {
      'version': 1,
      'name': 'core:v1',
      'applied_at': DateTime.now().millisecondsSinceEpoch,
      'duration_ms': 0,
    });
  }

  Future<void> registerStore(CollectionSchema schema) async {
    final compiled = DdlCompiler(capabilities).compile(schema);
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
        'created_at': DateTime.now().millisecondsSinceEpoch,
      });
      await Migrator.recordMigration(db,
          name: 'create:${schema.name}', from: 0, to: schema.version);
    } else {
      final current = existing.first['schema_ver'] as int;
      if (current > schema.version) {
        throw SchemaTooNewError(
            'Store "${schema.name}" on disk is schema v$current, but this package supports v${schema.version}.');
      }
      if (current < schema.version) {
        await Migrator.migrateStore(this, schema, fromVersion: current);
      }
      await db.update(
          'lp_stores',
          {
            'definition_json': jsonEncode(schema.toJson()),
            'schema_ver': schema.version
          },
          where: 'store = ?',
          whereArgs: [schema.name]);
    }
    _tables[schema.name] = StoreTable(schema, compiled);
  }

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

  /// Runs [action] in a serialized, single-writer transaction.
  ///
  /// All domain, outbox, and sync-state changes performed through the [Tx]
  /// handle commit atomically. Change notifications are emitted only after a
  /// successful commit. The default [DurabilityClass.full] preserves the
  /// local-first guarantee for file-backed databases.
  ///
  /// ```dart
  /// await db.transaction((tx) async {
  ///   await tx.collection('orders').put(order);
  ///   await tx.collection('audit').put(auditEntry);
  /// });
  /// ```
  ///
  /// Use [DurabilityClass.normal] only when the application accepts its
  /// weaker power-loss durability behavior.
  Future<T> transaction<T>(
    Future<T> Function(Tx tx) action, {
    DurabilityClass durability = DurabilityClass.full,
  }) {
    _guardOutsideTx();
    return writeQueue.run(() => _runTransaction(action, durability));
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
    // Reads share the single connection and therefore must be serialized with
    // writes through the same queue: a read transaction held open on the
    // connection would otherwise make a queued write's BEGIN IMMEDIATE fail
    // with "cannot start a transaction within a transaction".
    return writeQueue.run(() => db.transaction((txn) async {
          final changes = <ChangeSet>[];
          final tx = Tx.internal(this, txn, changes, readOnly: true);
          return tx.runInZone(() => action(tx));
        }));
  }

  Future<T> _runTransaction<T>(
    Future<T> Function(Tx tx) action,
    DurabilityClass durability,
  ) async {
    final sw = Stopwatch()..start();
    // On in-memory databases there is no durable storage, so the durability
    // classes are meaningless; skip the pragma toggle entirely.
    final inMemory = path == ':memory:';
    final useFull = durability == DurabilityClass.full && !inMemory;
    if (useFull && _synchronous != 'FULL') {
      await traceExecute('PRAGMA synchronous=FULL');
      _synchronous = 'FULL';
    }
    try {
      final changes = <ChangeSet>[];
      final recordEvents = <RecordChangeEvent>[];
      final result = await db.transaction((txn) async {
        final tx = Tx.internal(this, txn, changes, recordEvents: recordEvents);
        return tx.runInZone(() => action(tx));
      });
      for (final cs in changes) {
        _tables[cs.store]?.readCache.invalidate(cs.ids);
        changeBus.emit(cs);
      }
      for (final event in recordEvents) {
        changeBus.emitEvent(event);
      }
      return result;
    } finally {
      if (useFull && _synchronous != 'NORMAL') {
        try {
          await traceExecute('PRAGMA synchronous=NORMAL');
          _synchronous = 'NORMAL';
        } catch (_) {}
      }
      perf.recordWriteTransaction(sw.elapsedMicroseconds);
    }
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

  /// Runs SQLite `VACUUM` or `PRAGMA incremental_vacuum` to reclaim unused database pages.
  Future<void> vacuum({int? pages}) async {
    if (pages != null) {
      await db.execute('PRAGMA incremental_vacuum($pages)');
    } else {
      await db.execute('VACUUM');
    }
  }

  /// Prunes orphaned or superseded outbox operations, bounds maximum outbox size,
  /// and clears historical detached records while keeping un-synced dirty records.
  Future<int> pruneOutbox({int maxEntries = 10000}) async {
    var pruned = 0;
    await transaction((tx) async {
      final exec = tx.executor;
      // 1. Remove orphaned outbox entries whose corresponding sync row is clean or gone
      final orphaned = await exec.rawQuery(
        'SELECT o.store, o.record_id FROM lp_outbox o '
        'LEFT JOIN lp_sync_row s ON s.store = o.store AND s.record_id = o.record_id '
        "WHERE s.record_id IS NULL OR s.sync_state = 'clean'",
      );
      for (final r in orphaned) {
        final st = r['store'] as String;
        final id = r['record_id'] as String;
        await exec.delete('lp_outbox',
            where: 'store = ? AND record_id = ?', whereArgs: [st, id]);
        pruned++;
      }

      // 2. Bound outbox size by evicting oldest clean-eligible entries if exceeding maxEntries
      final countRow = await exec.rawQuery('SELECT COUNT(*) c FROM lp_outbox');
      final count = (countRow.first['c'] as int?) ?? 0;
      if (count > maxEntries) {
        final excess = count - maxEntries;
        final oldest = await exec.rawQuery(
          'SELECT o.store, o.record_id FROM lp_outbox o '
          'JOIN lp_sync_row s ON s.store = o.store AND s.record_id = o.record_id '
          "WHERE s.sync_state NOT IN ('dirty', 'conflict') "
          'ORDER BY o.created_at ASC LIMIT ?',
          [excess],
        );
        for (final r in oldest) {
          final st = r['store'] as String;
          final id = r['record_id'] as String;
          await exec.delete('lp_outbox',
              where: 'store = ? AND record_id = ?', whereArgs: [st, id]);
          pruned++;
        }
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
    final now = nowMs ?? DateTime.now().millisecondsSinceEpoch;
    final cutoff = now - olderThan.inMilliseconds;
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
          final id = r['id'] as String;
          final existingRows = await exec.rawQuery(
              'SELECT * FROM ${DdlCompiler.quote(store)} WHERE id = ? LIMIT 1',
              [id]);
          final existing = existingRows.isNotEmpty
              ? decodeDbRow(schema, existingRows.first,
                  cipher: fieldCipher, cryptoProvider: cryptoProvider)
              : null;
          final refs = await exec.query('lp_file_refs',
              columns: ['ref_id', 'hash'],
              where: 'store = ? AND record_id = ?',
              whereArgs: [store, id]);
          for (final ref in refs) {
            await exec.delete('lp_file_refs',
                where: 'ref_id = ?', whereArgs: [ref['ref_id']]);
            await exec.execute(
                'UPDATE lp_blobs SET refcount = MAX(refcount - 1, 0) WHERE hash = ?',
                [ref['hash']]);
          }
          // A compacted row must not leave an open conflict or queued file ops
          // behind (a later drain could otherwise act on the vanished record).
          await exec.delete('lp_conflicts',
              where: 'store = ? AND record_id = ?', whereArgs: [store, id]);
          await exec.update('lp_op_queue', {'state': 'done'},
              where:
                  "store = ? AND record_id = ? AND state IN ('pending','failed')",
              whereArgs: [store, id]);
          await exec.delete('lp_outbox',
              where: 'store = ? AND record_id = ?', whereArgs: [store, id]);
          await exec.delete('lp_sync_row',
              where: 'store = ? AND record_id = ?', whereArgs: [store, id]);
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
    try {
      await db.execute('PRAGMA optimize');
      optimizeRanOnClose = true;
    } catch (_) {}
    await db.close();
  }
}
