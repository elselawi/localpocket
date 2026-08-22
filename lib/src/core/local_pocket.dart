import 'dart:async';
import 'dart:convert';
import 'dart:typed_data';

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

/// Default clock: wall-clock epoch milliseconds.
int _defaultNow() => DateTime.now().millisecondsSinceEpoch;

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
    // Deep copy on the way in as well: a shallow store let a caller's
    // mutation of a nested map/list leak INTO the cache (the returned doc
    // aliased the stored nested values).
    _cache[id] = value == null ? null : _deepClone(value);
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
    return _copyValue(map) as Map<String, Object?>;
  }
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
    required this.now,
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
    int Function()? now,
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
        now: now ?? _defaultNow,
        testHooks: testHooks,
        blobStore: blobStore,
        fieldCipher: fieldCipher,
        cryptoProvider: cryptoProvider,
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
      await db.execute('PRAGMA wal_autocheckpoint=1000');
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
        'created_at': now(),
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
    // BISECT: no coalescing — each transaction flushes immediately.
    if (const bool.fromEnvironment('LP_BISECT', defaultValue: false)) {
      final group = _CommitGroup(this, durability);
      final member = _CommitMember(action);
      group.members.add(member);
      final done = group.flush();
      unawaited(done.catchError((Object _) {}));
      return member.completer.future.then((value) => value as T);
    }
    final group = _pendingGroup;
    if (group != null && group.durability == durability && !group.sealed) {
      final member = _CommitMember(action);
      group.members.add(member);
      return member.completer.future.then((value) => value as T);
    }
    return _startGroup(action, durability);
  }

  /// The currently open (not yet flushed) commit group, if any.
  _CommitGroup? _pendingGroup;

  /// Starts a new commit group and schedules its flush at the end of the
  /// current event-loop turn, giving concurrently-submitted mutations the
  /// chance to join before the transaction opens.
  Future<T> _startGroup<T>(
      Future<dynamic> Function(Tx tx) action, DurabilityClass durability) {
    final group = _CommitGroup(this, durability);
    _pendingGroup = group;
    group.reserve();
    final member = _CommitMember(action);
    group.members.add(member);
    return member.completer.future.then((value) => value as T);
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
          "WHERE s.sync_state NOT IN ('dirty', 'conflict', 'blocked') "
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
          final id = r['id'] as String;
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

/// One group-commit unit: mutations submitted in the same event-loop turn
/// share a single SQLite transaction (one fsync). Members run under the
/// group-level Tx; in a multi-member group each member additionally runs
/// inside a SAVEPOINT so one failing member rolls back only itself.
class _CommitGroup {
  final LocalPocket pocket;
  final DurabilityClass durability;
  final members = <_CommitMember>[];

  /// Set once [flush] has started: later arrivals open their own group.
  bool sealed = false;

  _CommitGroup(this.pocket, this.durability);

  /// Takes the single-writer slot immediately (preserving submission-order
  /// FIFO for reads and later writes) and waits for the end-of-turn barrier
  /// before committing, so sibling mutations in the same turn can join.
  void reserve() {
    final barrier = Completer<void>();
    unawaited(pocket.writeQueue.run(() async {
      await barrier.future;
      // Member completers already received any per-member error; swallow the
      // queue-level rethrow so it never becomes an unhandled async error.
      try {
        await flush();
      } catch (_) {}
    }));
    // scheduleMicrotask would close the group BEFORE sibling awaits in the
    // same turn run; Timer(Duration.zero) defers past them, capturing the
    // whole burst.
    Timer.run(() {
      if (identical(pocket._pendingGroup, this)) pocket._pendingGroup = null;
      barrier.complete();
    });
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
      pocket.perf.groupCommits++;
      pocket.perf.groupCommitMembers += members.length;
    }
    // Already inside the WriteQueue slot taken by [reserve] — never re-enter
    // the queue here (it would deadlock on our own reserved slot).
    final sw = Stopwatch()..start();
    final inMemory = pocket.path == ':memory:';
    final useFull = durability == DurabilityClass.full && !inMemory;
    if (useFull && pocket._synchronous != 'FULL') {
      await pocket.traceExecute('PRAGMA synchronous=FULL');
      pocket._synchronous = 'FULL';
    }
    final changes = <ChangeSet>[];
    final recordEvents = <RecordChangeEvent>[];
    // Member outcomes are stashed and surfaced only AFTER the transaction
    // callback resolves: completing inside the callback would resume the
    // awaiting caller BEFORE COMMIT executes, letting it observe pre-commit
    // state (a real bug: the sync engine drained an empty outbox).
    final outcomes = <(_CommitMember, Object?, Object?, StackTrace?)>[];
    try {
      await pocket.db.transaction((txn) async {
        final tx =
            Tx.internal(pocket, txn, changes, recordEvents: recordEvents);
        if (solo) {
          try {
            final result = await tx.runInZone(() => members.single.action(tx));
            outcomes.add((members.single, result, null, null));
          } catch (e, st) {
            outcomes.add((members.single, null, e, st));
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
        pocket._tables[cs.store]?.readCache.invalidate(cs.ids);
        pocket.changeBus.emit(cs);
      }
      for (final event in recordEvents) {
        pocket.changeBus.emitEvent(event);
      }
    } catch (e) {
      // The transaction failed at BEGIN/COMMIT/rollback level. Members whose
      // own body already failed must still receive THEIR error (not a generic
      // group failure); members with a stashed success keep it — their writes
      // are rolled back with the transaction and the caller learns via the
      // rethrown error below.
      for (final (m, _, err, mst) in outcomes) {
        if (err != null && !m.completer.isCompleted) {
          m.completer.completeError(err, mst);
        }
      }
      rethrow;
    } finally {
      if (useFull && pocket._synchronous != 'NORMAL') {
        try {
          await pocket.traceExecute('PRAGMA synchronous=NORMAL');
          pocket._synchronous = 'NORMAL';
        } catch (_) {}
      }
      pocket.perf.recordWriteTransaction(sw.elapsedMicroseconds);
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
  final Future<dynamic> Function(Tx tx) action;
  final completer = Completer<dynamic>();
  _CommitMember(this.action);
}
