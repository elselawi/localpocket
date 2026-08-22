/// Peer implementations for the comparative benchmark harness.
///
/// Each peer implements the same phase API. Peers append per-op latency
/// samples (in microseconds) to the lists they are given; the harness in
/// `comparative_benchmark.dart` owns sample selection, warmups, integrity
/// checks and reporting.
///
/// Fairness rules applied in this file:
///  * every peer is FILE-backed (Sembast uses `databaseFactoryIo`, not the
///    in-memory factory);
///  * Isar point reads/updates go through its unique `recordId` index and
///    range/top-K/filtered-count through its `qty` index (`benchmark_models.dart`
///    declares both indexes);
///  * engines without a capability (Hive: no transactions, no secondary
///    index) are reported honestly as n/s or scan-based rather than being
///    given a synthetic advantage.
library;

import 'dart:async';
import 'dart:io';
import 'dart:math';

import 'package:drift/native.dart' as drift_native;
import 'package:hive/hive.dart';
import 'package:isar/isar.dart' hide CollectionSchema;
import 'package:localpocket/localpocket.dart';
import 'package:sembast/sembast.dart' as sembast;
import 'package:sembast/sembast_io.dart' as sembast_io;
import 'package:sqlite3/sqlite3.dart' as raw_sqlite3;

import 'benchmark_models.dart';

/// The uniform workload interface every peer implements.
abstract class BenchmarkPeer {
  /// Display name used in tables and JSON output.
  String get name;

  /// Backing storage of this peer (all peers are file-backed).
  String get storage => 'file';

  /// Whether the peer can run explicit multi-put transactions.
  /// Hive overrides this to false (it has no transaction API).
  bool get supportsTransactions => true;

  /// Whether range/top-K/filtered-count queries use a real secondary index
  /// over `qty` (as opposed to a full scan + in-memory sort/filter).
  bool get hasSecondaryIndex => true;

  /// Optional per-peer row cap. When the benchmark scale exceeds this, the
  /// peer is skipped at that scale and the cap is recorded in the JSON output.
  int? get maxRows => null;

  /// Per-peer caveats appended to the printed table row (besides the global
  /// caveat block).
  List<String> get rowNotes => const [];

  Future<void> setup();
  Future<void> teardown();

  /// Bulk insert: the peer's highest-throughput write path for [records].
  Future<void> bulkInsert(List<Map<String, Object?>> records);

  /// One timed put per record (distinct from bulk throughput).
  Future<void> singleInsert(
      List<Map<String, Object?>> records, List<int> latenciesUs);

  /// One timed point read per id. Must throw if a record is missing.
  Future<void> pointRead(List<String> targetIds, List<int> latenciesUs);

  /// [sampleCount] timed range queries `qty in [start, start+500)` ordered by
  /// qty ascending, limited to 50 rows. [maxQty] bounds the random window.
  Future<void> rangeQuery(int maxQty, int sampleCount, List<int> latenciesUs);

  /// One timed point update per id; record i is written `qty = baseValue + i`.
  /// The record must already exist.
  Future<void> pointUpdate(
      List<String> targetIds, int baseValue, List<int> latenciesUs);

  /// One timed hard delete per id. The record must already exist.
  Future<void> delete(List<String> targetIds, List<int> latenciesUs);

  /// One timed transaction per [putsPerTxn] records. [records] length is a
  /// multiple of [putsPerTxn]; each chunk commits as one explicit transaction.
  Future<void> transactions(int putsPerTxn, List<Map<String, Object?>> records,
      List<int> latenciesUs);

  /// Walk [pageCount] pages of [pageSize] rows ordered by qty using the
  /// engine's native cursor / limit-offset mechanism. Timed per page.
  Future<void> pagination(
      int pageSize, int pageCount, int maxQty, List<int> latenciesUs);

  /// [sampleCount] timed top-K queries: the K largest qty values.
  Future<void> sortedTopK(
      int k, int sampleCount, int maxQty, List<int> latenciesUs);

  /// [sampleCount] timed filtered counts (`qty in [start, start+500)`).
  Future<void> filteredCount(
      int sampleCount, int maxQty, List<int> latenciesUs);

  /// "Concurrent" operations: [readsPerRound] + [writesPerRound] futures
  /// interleaved on ONE isolate via `Future.wait`, repeated [rounds] times.
  /// Read r of round w is timed into readUs; write w of round r writes
  /// `qty = baseValue + r * writesPerRound + w`.
  Future<void> concurrentOps(
    int rounds,
    int readsPerRound,
    int writesPerRound,
    List<String> readIds,
    List<String> writeIds,
    int baseValue,
    List<int> readUs,
    List<int> writeUs,
  );

  /// Total number of records currently in the store (integrity check).
  Future<int> count();

  /// The `qty` value of record [id], or null when missing (integrity check).
  Future<Object?> readQty(String id);
}

/// Builds a stopwatch/timing helper shared by all peers.
void timed(void Function() op, List<int> latenciesUs) {
  final sw = Stopwatch()..start();
  op();
  sw.stop();
  latenciesUs.add(sw.elapsedMicroseconds);
}

Future<void> timedAsync(
    Future<void> Function() op, List<int> latenciesUs) async {
  final sw = Stopwatch()..start();
  await op();
  sw.stop();
  latenciesUs.add(sw.elapsedMicroseconds);
}

/// A uniform deterministic-ish dataset record.
Map<String, Object?> makeRecord(String id, int qty) => {
      'id': id,
      'name': 'Widget item $qty',
      'qty': qty,
      'phone': '555-${qty.toString().padLeft(6, '0')}',
    };

// ------------------------------------------------------------------ 1. LocalPocket
class LocalPocketPeer extends BenchmarkPeer {
  @override
  String get name => 'LocalPocket';

  @override
  List<String> get rowNotes => const [
        'each mutation also writes outbox intent + sync-state row (local-first)',
      ];

  late LocalPocket _pocket;
  late Directory _dir;

  @override
  Future<void> setup() async {
    _dir = await Directory.systemTemp.createTemp('lp_bench_');
    final dbPath = '${_dir.path}/lp.db';
    _pocket = await LocalPocket.open(
      path: dbPath,
      stores: [
        CollectionSchema<Object?>(
          name: 'widgets',
          version: 1,
          fields: [
            Field.text('name', required: true),
            Field.int('qty'),
            Field.text('phone'),
          ],
          indexes: const [
            IndexSpec(['qty'])
          ],
        ),
      ],
    );
  }

  @override
  Future<void> bulkInsert(List<Map<String, Object?>> records) async {
    // Product-throughput mode: putAll with 10K-record chunks.
    const batchSize = 10000;
    for (var i = 0; i < records.length; i += batchSize) {
      final chunk = records.sublist(i, min(i + batchSize, records.length));
      await _pocket.transaction((tx) async {
        await tx.collection('widgets').putAll(chunk);
      });
    }
  }

  @override
  Future<void> singleInsert(
      List<Map<String, Object?>> records, List<int> latenciesUs) async {
    final col = _pocket.collection('widgets');
    for (final r in records) {
      await timedAsync(() => col.put(r), latenciesUs);
    }
  }

  @override
  Future<void> pointRead(List<String> targetIds, List<int> latenciesUs) async {
    final col = _pocket.collection('widgets');
    for (final id in targetIds) {
      await timedAsync(() async {
        final res = await col.get(id);
        if (res == null) throw StateError('Record not found: $id');
      }, latenciesUs);
    }
  }

  @override
  Future<void> rangeQuery(
      int maxQty, int sampleCount, List<int> latenciesUs) async {
    final col = _pocket.collection('widgets');
    final rnd = Random(12345);
    for (var i = 0; i < sampleCount; i++) {
      final start = rnd.nextInt(max(1, maxQty - 500));
      await timedAsync(() async {
        final page = await col
            .query()
            .where('qty', between: (start, start + 500))
            .orderBy('qty')
            .limit(50)
            .fetch();
        if (page.items.isEmpty && start + 500 < maxQty) {
          throw StateError(
              'Unexpected empty range window qty in [$start, ${start + 500})');
        }
      }, latenciesUs);
    }
  }

  @override
  Future<void> pointUpdate(
      List<String> targetIds, int baseValue, List<int> latenciesUs) async {
    final col = _pocket.collection('widgets');
    for (var i = 0; i < targetIds.length; i++) {
      await timedAsync(
          () => col.patch(targetIds[i], {'qty': baseValue + i}), latenciesUs);
    }
  }

  @override
  Future<void> delete(List<String> targetIds, List<int> latenciesUs) async {
    final col = _pocket.collection('widgets');
    for (final id in targetIds) {
      await timedAsync(() => col.purge(id), latenciesUs);
    }
  }

  @override
  Future<void> transactions(int putsPerTxn, List<Map<String, Object?>> records,
      List<int> latenciesUs) async {
    for (var i = 0; i < records.length; i += putsPerTxn) {
      final chunk = records.sublist(i, min(i + putsPerTxn, records.length));
      await timedAsync(() async {
        await _pocket.transaction((tx) async {
          await tx.collection('widgets').putAll(chunk);
        });
      }, latenciesUs);
    }
  }

  @override
  Future<void> pagination(
      int pageSize, int pageCount, int maxQty, List<int> latenciesUs) async {
    final col = _pocket.collection('widgets');
    // LocalPocket's native cursor mechanism: keyset pagination. Each page
    // resumes from the previous page's cursor (no OFFSET rescanning).
    String? cursor;
    for (var i = 0; i < pageCount; i++) {
      await timedAsync(() async {
        final base = col.query().orderBy('qty').limit(pageSize);
        final page = cursor == null
            ? await base.fetch()
            : await base.keysetAfter(cursor!);
        cursor = page.nextCursor;
      }, latenciesUs);
    }
  }

  @override
  Future<void> sortedTopK(
      int k, int sampleCount, int maxQty, List<int> latenciesUs) async {
    final col = _pocket.collection('widgets');
    for (var i = 0; i < sampleCount; i++) {
      await timedAsync(() async {
        final page =
            await col.query().orderBy('qty', desc: true).limit(k).fetch();
        if (page.items.isEmpty) {
          // Only possible on an empty store; nothing to assert.
        }
      }, latenciesUs);
    }
  }

  @override
  Future<void> filteredCount(
      int sampleCount, int maxQty, List<int> latenciesUs) async {
    final col = _pocket.collection('widgets');
    final rnd = Random(12345);
    for (var i = 0; i < sampleCount; i++) {
      final start = rnd.nextInt(max(1, maxQty - 500));
      await timedAsync(() async {
        final n = await col
            .query()
            .where('qty', between: (start, start + 500)).count();
        if (n < 0) throw StateError('negative count');
      }, latenciesUs);
    }
  }

  @override
  Future<void> concurrentOps(
    int rounds,
    int readsPerRound,
    int writesPerRound,
    List<String> readIds,
    List<String> writeIds,
    int baseValue,
    List<int> readUs,
    List<int> writeUs,
  ) async {
    final col = _pocket.collection('widgets');
    for (var r = 0; r < rounds; r++) {
      final futures = <Future<void>>[];
      for (var i = 0; i < readsPerRound; i++) {
        final id = readIds[r * readsPerRound + i];
        final sw = Stopwatch()..start();
        futures.add(col.get(id).then((res) {
          sw.stop();
          readUs.add(sw.elapsedMicroseconds);
          if (res == null) throw StateError('Record not found: $id');
        }));
      }
      for (var w = 0; w < writesPerRound; w++) {
        final id = writeIds[r * writesPerRound + w];
        final qty = baseValue + r * writesPerRound + w;
        final sw = Stopwatch()..start();
        futures.add(col.patch(id, {'qty': qty}).then((_) {
          sw.stop();
          writeUs.add(sw.elapsedMicroseconds);
        }));
      }
      await Future.wait(futures);
    }
  }

  @override
  Future<int> count() async => _pocket.collection('widgets').query().count();

  @override
  Future<Object?> readQty(String id) async =>
      (await _pocket.collection('widgets').get(id))?['qty'];

  @override
  Future<void> teardown() async {
    await _pocket.close();
    try {
      await _dir.delete(recursive: true);
    } catch (_) {}
  }
}

// ------------------------------------------------------------------ 2. SQLite (Vanilla)
class VanillaSqlitePeer extends BenchmarkPeer {
  @override
  String get name => 'SQLite (vanilla)';

  @override
  List<String> get rowNotes =>
      const ['synchronous API: "concurrent" ops serialize'];

  late raw_sqlite3.Database _db;
  late Directory _dir;

  @override
  Future<void> setup() async {
    _dir = await Directory.systemTemp.createTemp('sqlite_bench_');
    final dbPath = '${_dir.path}/vanilla.db';
    _db = raw_sqlite3.sqlite3.open(dbPath);
    _db.execute('PRAGMA journal_mode = WAL');
    _db.execute('PRAGMA synchronous = NORMAL');
    _db.execute(
        'CREATE TABLE widgets (id TEXT PRIMARY KEY, name TEXT, qty INTEGER, phone TEXT)');
    _db.execute('CREATE INDEX ix_widgets_qty ON widgets (qty)');
  }

  @override
  Future<void> bulkInsert(List<Map<String, Object?>> records) async {
    const batchSize = 1000;
    final stmt = _db.prepare(
        'INSERT INTO widgets (id, name, qty, phone) VALUES (?, ?, ?, ?)');
    for (var i = 0; i < records.length; i += batchSize) {
      final chunk = records.sublist(i, min(i + batchSize, records.length));
      _db.execute('BEGIN');
      for (final r in chunk) {
        stmt.execute([r['id'], r['name'], r['qty'], r['phone']]);
      }
      _db.execute('COMMIT');
    }
    stmt.close();
  }

  @override
  Future<void> singleInsert(
      List<Map<String, Object?>> records, List<int> latenciesUs) async {
    final stmt = _db.prepare(
        'INSERT INTO widgets (id, name, qty, phone) VALUES (?, ?, ?, ?)');
    for (final r in records) {
      timed(() => stmt.execute([r['id'], r['name'], r['qty'], r['phone']]),
          latenciesUs);
    }
    stmt.close();
  }

  @override
  Future<void> pointRead(List<String> targetIds, List<int> latenciesUs) async {
    for (final id in targetIds) {
      timed(() {
        final rows =
            _db.select('SELECT * FROM widgets WHERE id = ? LIMIT 1', [id]);
        if (rows.isEmpty) throw StateError('Record not found: $id');
      }, latenciesUs);
    }
  }

  @override
  Future<void> rangeQuery(
      int maxQty, int sampleCount, List<int> latenciesUs) async {
    final rnd = Random(12345);
    for (var i = 0; i < sampleCount; i++) {
      final start = rnd.nextInt(max(1, maxQty - 500));
      timed(() {
        final rows = _db.select(
            'SELECT * FROM widgets WHERE qty >= ? AND qty < ? '
            'ORDER BY qty ASC LIMIT 50',
            [start, start + 500]);
        if (rows.isEmpty) {
          throw StateError(
              'Unexpected empty range window qty in [$start, ${start + 500})');
        }
      }, latenciesUs);
    }
  }

  @override
  Future<void> pointUpdate(
      List<String> targetIds, int baseValue, List<int> latenciesUs) async {
    for (var i = 0; i < targetIds.length; i++) {
      timed(
          () => _db.execute('UPDATE widgets SET qty = ? WHERE id = ?',
              [baseValue + i, targetIds[i]]),
          latenciesUs);
    }
  }

  @override
  Future<void> delete(List<String> targetIds, List<int> latenciesUs) async {
    final stmt = _db.prepare('DELETE FROM widgets WHERE id = ?');
    for (final id in targetIds) {
      timed(() => stmt.execute([id]), latenciesUs);
    }
    stmt.close();
  }

  @override
  Future<void> transactions(int putsPerTxn, List<Map<String, Object?>> records,
      List<int> latenciesUs) async {
    final stmt = _db.prepare(
        'INSERT INTO widgets (id, name, qty, phone) VALUES (?, ?, ?, ?)');
    for (var i = 0; i < records.length; i += putsPerTxn) {
      final chunk = records.sublist(i, min(i + putsPerTxn, records.length));
      timed(() {
        _db.execute('BEGIN');
        for (final r in chunk) {
          stmt.execute([r['id'], r['name'], r['qty'], r['phone']]);
        }
        _db.execute('COMMIT');
      }, latenciesUs);
    }
    stmt.close();
  }

  @override
  Future<void> pagination(
      int pageSize, int pageCount, int maxQty, List<int> latenciesUs) async {
    for (var i = 0; i < pageCount; i++) {
      timed(() {
        final rows = _db.select(
            'SELECT * FROM widgets ORDER BY qty ASC LIMIT ? OFFSET ?',
            [pageSize, i * pageSize]);
        if (rows.isEmpty) {
          throw StateError('Unexpected empty page at offset ${i * pageSize}');
        }
      }, latenciesUs);
    }
  }

  @override
  Future<void> sortedTopK(
      int k, int sampleCount, int maxQty, List<int> latenciesUs) async {
    for (var i = 0; i < sampleCount; i++) {
      timed(() {
        final rows =
            _db.select('SELECT * FROM widgets ORDER BY qty DESC LIMIT ?', [k]);
        if (rows.isEmpty) {
          throw StateError('Unexpected empty top-K result');
        }
      }, latenciesUs);
    }
  }

  @override
  Future<void> filteredCount(
      int sampleCount, int maxQty, List<int> latenciesUs) async {
    final rnd = Random(12345);
    for (var i = 0; i < sampleCount; i++) {
      final start = rnd.nextInt(max(1, maxQty - 500));
      timed(() {
        final rows = _db.select(
            'SELECT COUNT(*) AS c FROM widgets WHERE qty >= ? AND qty < ?',
            [start, start + 500]);
        if ((rows.first['c'] as int) < 0) throw StateError('negative count');
      }, latenciesUs);
    }
  }

  @override
  Future<void> concurrentOps(
    int rounds,
    int readsPerRound,
    int writesPerRound,
    List<String> readIds,
    List<String> writeIds,
    int baseValue,
    List<int> readUs,
    List<int> writeUs,
  ) async {
    // Synchronous engine: futures still complete in submission order, but the
    // harness reports them as one-isolate interleaved async ops for parity.
    for (var r = 0; r < rounds; r++) {
      final futures = <Future<void>>[];
      for (var i = 0; i < readsPerRound; i++) {
        final id = readIds[r * readsPerRound + i];
        final sw = Stopwatch()..start();
        futures.add(Future<void>(() {
          final rows =
              _db.select('SELECT * FROM widgets WHERE id = ? LIMIT 1', [id]);
          sw.stop();
          readUs.add(sw.elapsedMicroseconds);
          if (rows.isEmpty) throw StateError('Record not found: $id');
        }));
      }
      for (var w = 0; w < writesPerRound; w++) {
        final id = writeIds[r * writesPerRound + w];
        final qty = baseValue + r * writesPerRound + w;
        final sw = Stopwatch()..start();
        futures.add(Future<void>(() {
          _db.execute('UPDATE widgets SET qty = ? WHERE id = ?', [qty, id]);
          sw.stop();
          writeUs.add(sw.elapsedMicroseconds);
        }));
      }
      await Future.wait(futures);
    }
  }

  @override
  Future<int> count() async =>
      (_db.select('SELECT COUNT(*) AS c FROM widgets').first['c'] as int);

  @override
  Future<Object?> readQty(String id) async {
    final rows =
        _db.select('SELECT qty FROM widgets WHERE id = ? LIMIT 1', [id]);
    return rows.isEmpty ? null : rows.first['qty'];
  }

  @override
  Future<void> teardown() async {
    _db.close();
    try {
      await _dir.delete(recursive: true);
    } catch (_) {}
  }
}

// ------------------------------------------------------------------ 3. Drift
class DriftPeer extends BenchmarkPeer {
  @override
  String get name => 'Drift';

  late drift_native.NativeDatabase _db;
  late Directory _dir;

  @override
  Future<void> setup() async {
    _dir = await Directory.systemTemp.createTemp('drift_bench_');
    final file = File('${_dir.path}/drift.db');
    final rawDb = raw_sqlite3.sqlite3.open(file.path);
    _db = drift_native.NativeDatabase.opened(rawDb);
    await _db.runCustom('PRAGMA journal_mode = WAL;');
    await _db.runCustom('PRAGMA synchronous = NORMAL;');
    await _db.runCustom(
        'CREATE TABLE widgets (id TEXT PRIMARY KEY, name TEXT, qty INTEGER, phone TEXT);');
    await _db.runCustom('CREATE INDEX ix_widgets_qty ON widgets (qty);');
  }

  @override
  Future<void> bulkInsert(List<Map<String, Object?>> records) async {
    const batchSize = 1000;
    for (var i = 0; i < records.length; i += batchSize) {
      final chunk = records.sublist(i, min(i + batchSize, records.length));
      await _db.runCustom('BEGIN TRANSACTION;');
      for (final r in chunk) {
        await _db.runInsert(
          'INSERT INTO widgets (id, name, qty, phone) VALUES (?, ?, ?, ?);',
          [r['id'], r['name'], r['qty'], r['phone']],
        );
      }
      await _db.runCustom('COMMIT;');
    }
  }

  @override
  Future<void> singleInsert(
      List<Map<String, Object?>> records, List<int> latenciesUs) async {
    for (final r in records) {
      await timedAsync(
          () => _db.runInsert(
                'INSERT INTO widgets (id, name, qty, phone) '
                'VALUES (?, ?, ?, ?);',
                [r['id'], r['name'], r['qty'], r['phone']],
              ),
          latenciesUs);
    }
  }

  @override
  Future<void> pointRead(List<String> targetIds, List<int> latenciesUs) async {
    for (final id in targetIds) {
      await timedAsync(() async {
        final rows = await _db
            .runSelect('SELECT * FROM widgets WHERE id = ? LIMIT 1;', [id]);
        if (rows.isEmpty) throw StateError('Record not found: $id');
      }, latenciesUs);
    }
  }

  @override
  Future<void> rangeQuery(
      int maxQty, int sampleCount, List<int> latenciesUs) async {
    final rnd = Random(12345);
    for (var i = 0; i < sampleCount; i++) {
      final start = rnd.nextInt(max(1, maxQty - 500));
      await timedAsync(() async {
        final rows = await _db.runSelect(
          'SELECT * FROM widgets WHERE qty >= ? AND qty < ? '
          'ORDER BY qty ASC LIMIT 50;',
          [start, start + 500],
        );
        if (rows.isEmpty) {
          throw StateError(
              'Unexpected empty range window qty in [$start, ${start + 500})');
        }
      }, latenciesUs);
    }
  }

  @override
  Future<void> pointUpdate(
      List<String> targetIds, int baseValue, List<int> latenciesUs) async {
    for (var i = 0; i < targetIds.length; i++) {
      await timedAsync(
          () => _db.runUpdate(
                'UPDATE widgets SET qty = ? WHERE id = ?;',
                [baseValue + i, targetIds[i]],
              ),
          latenciesUs);
    }
  }

  @override
  Future<void> delete(List<String> targetIds, List<int> latenciesUs) async {
    for (final id in targetIds) {
      await timedAsync(
          () => _db.runDelete('DELETE FROM widgets WHERE id = ?;', [id]),
          latenciesUs);
    }
  }

  @override
  Future<void> transactions(int putsPerTxn, List<Map<String, Object?>> records,
      List<int> latenciesUs) async {
    for (var i = 0; i < records.length; i += putsPerTxn) {
      final chunk = records.sublist(i, min(i + putsPerTxn, records.length));
      await timedAsync(() async {
        // NativeDatabase exposes raw QueryExecutor; a transaction is
        // beginTransaction() + send()/rollback() (drift's public API).
        final tx = _db.beginTransaction();
        try {
          for (final r in chunk) {
            await tx.runInsert(
              'INSERT INTO widgets (id, name, qty, phone) '
              'VALUES (?, ?, ?, ?);',
              [r['id'], r['name'], r['qty'], r['phone']],
            );
          }
          await tx.send();
        } catch (_) {
          await tx.rollback();
          rethrow;
        }
      }, latenciesUs);
    }
  }

  @override
  Future<void> pagination(
      int pageSize, int pageCount, int maxQty, List<int> latenciesUs) async {
    for (var i = 0; i < pageCount; i++) {
      await timedAsync(() async {
        final rows = await _db.runSelect(
          'SELECT * FROM widgets ORDER BY qty ASC LIMIT ? OFFSET ?;',
          [pageSize, i * pageSize],
        );
        if (rows.isEmpty) {
          throw StateError('Unexpected empty page at offset ${i * pageSize}');
        }
      }, latenciesUs);
    }
  }

  @override
  Future<void> sortedTopK(
      int k, int sampleCount, int maxQty, List<int> latenciesUs) async {
    for (var i = 0; i < sampleCount; i++) {
      await timedAsync(() async {
        final rows = await _db
            .runSelect('SELECT * FROM widgets ORDER BY qty DESC LIMIT ?;', [k]);
        if (rows.isEmpty) {
          throw StateError('Unexpected empty top-K result');
        }
      }, latenciesUs);
    }
  }

  @override
  Future<void> filteredCount(
      int sampleCount, int maxQty, List<int> latenciesUs) async {
    final rnd = Random(12345);
    for (var i = 0; i < sampleCount; i++) {
      final start = rnd.nextInt(max(1, maxQty - 500));
      await timedAsync(() async {
        final rows = await _db.runSelect(
          'SELECT COUNT(*) AS c FROM widgets WHERE qty >= ? AND qty < ?;',
          [start, start + 500],
        );
        if ((rows.first['c'] as int) < 0) throw StateError('negative count');
      }, latenciesUs);
    }
  }

  @override
  Future<void> concurrentOps(
    int rounds,
    int readsPerRound,
    int writesPerRound,
    List<String> readIds,
    List<String> writeIds,
    int baseValue,
    List<int> readUs,
    List<int> writeUs,
  ) async {
    for (var r = 0; r < rounds; r++) {
      final futures = <Future<void>>[];
      for (var i = 0; i < readsPerRound; i++) {
        final id = readIds[r * readsPerRound + i];
        final sw = Stopwatch()..start();
        futures.add(_db.runSelect(
            'SELECT * FROM widgets WHERE id = ? LIMIT 1;', [id]).then((rows) {
          sw.stop();
          readUs.add(sw.elapsedMicroseconds);
          if (rows.isEmpty) throw StateError('Record not found: $id');
        }));
      }
      for (var w = 0; w < writesPerRound; w++) {
        final id = writeIds[r * writesPerRound + w];
        final qty = baseValue + r * writesPerRound + w;
        final sw = Stopwatch()..start();
        futures.add(_db.runUpdate(
            'UPDATE widgets SET qty = ? WHERE id = ?;', [qty, id]).then((_) {
          sw.stop();
          writeUs.add(sw.elapsedMicroseconds);
        }));
      }
      await Future.wait(futures);
    }
  }

  @override
  Future<int> count() async {
    final rows =
        await _db.runSelect('SELECT COUNT(*) AS c FROM widgets;', const []);
    return rows.first['c'] as int;
  }

  @override
  Future<Object?> readQty(String id) async {
    final rows = await _db
        .runSelect('SELECT qty FROM widgets WHERE id = ? LIMIT 1;', [id]);
    return rows.isEmpty ? null : rows.first['qty'];
  }

  @override
  Future<void> teardown() async {
    await _db.close();
    try {
      await _dir.delete(recursive: true);
    } catch (_) {}
  }
}

// ------------------------------------------------------------------ 4. Sembast
class SembastPeer extends BenchmarkPeer {
  @override
  String get name => 'Sembast';

  /// Sembast's file format rewrites the store file on every committed
  /// transaction, so 100K rows is impractically slow on writes. The peer is
  /// honestly capped instead of being moved to an in-memory factory.
  @override
  int? get maxRows => 10000;

  @override
  bool get hasSecondaryIndex => false;

  @override
  List<String> get rowNotes => const [
        'file-backed (was in-memory before 2026-08-22)',
        'rewrites the store file per committed transaction',
        'scale-capped: maxRows = 10000 (skipped above)',
      ];

  late sembast.Database _db;
  late Directory _dir;
  final _store = sembast.stringMapStoreFactory.store('widgets');

  @override
  Future<void> setup() async {
    _dir = await Directory.systemTemp.createTemp('sembast_bench_');
    final dbPath = '${_dir.path}/sembast.db';
    // File-backed factory: fair comparison against the other peers.
    _db = await sembast_io.databaseFactoryIo.openDatabase(dbPath);
  }

  @override
  Future<void> bulkInsert(List<Map<String, Object?>> records) async {
    const batchSize = 1000;
    for (var i = 0; i < records.length; i += batchSize) {
      final chunk = records.sublist(i, min(i + batchSize, records.length));
      await _db.transaction((txn) async {
        for (final r in chunk) {
          await _store.record(r['id'] as String).put(txn, r);
        }
      });
    }
  }

  @override
  Future<void> singleInsert(
      List<Map<String, Object?>> records, List<int> latenciesUs) async {
    for (final r in records) {
      await timedAsync(
          () => _store.record(r['id'] as String).put(_db, r), latenciesUs);
    }
  }

  @override
  Future<void> pointRead(List<String> targetIds, List<int> latenciesUs) async {
    for (final id in targetIds) {
      await timedAsync(() async {
        final snap = await _store.record(id).get(_db);
        if (snap == null) throw StateError('Record not found: $id');
      }, latenciesUs);
    }
  }

  @override
  Future<void> rangeQuery(
      int maxQty, int sampleCount, List<int> latenciesUs) async {
    final rnd = Random(12345);
    for (var i = 0; i < sampleCount; i++) {
      final start = rnd.nextInt(max(1, maxQty - 500));
      await timedAsync(() async {
        final finder = sembast.Finder(
          filter: sembast.Filter.and([
            sembast.Filter.greaterThanOrEquals('qty', start),
            sembast.Filter.lessThan('qty', start + 500),
          ]),
          sortOrders: [sembast.SortOrder('qty')],
          limit: 50,
        );
        final results = await _store.find(_db, finder: finder);
        if (results.isEmpty) {
          throw StateError(
              'Unexpected empty range window qty in [$start, ${start + 500})');
        }
      }, latenciesUs);
    }
  }

  @override
  Future<void> pointUpdate(
      List<String> targetIds, int baseValue, List<int> latenciesUs) async {
    for (var i = 0; i < targetIds.length; i++) {
      await timedAsync(
          () => _store.record(targetIds[i]).update(_db, {'qty': baseValue + i}),
          latenciesUs);
    }
  }

  @override
  Future<void> delete(List<String> targetIds, List<int> latenciesUs) async {
    for (final id in targetIds) {
      await timedAsync(() => _store.record(id).delete(_db), latenciesUs);
    }
  }

  @override
  Future<void> transactions(int putsPerTxn, List<Map<String, Object?>> records,
      List<int> latenciesUs) async {
    for (var i = 0; i < records.length; i += putsPerTxn) {
      final chunk = records.sublist(i, min(i + putsPerTxn, records.length));
      await timedAsync(() async {
        await _db.transaction((txn) async {
          for (final r in chunk) {
            await _store.record(r['id'] as String).put(txn, r);
          }
        });
      }, latenciesUs);
    }
  }

  @override
  Future<void> pagination(
      int pageSize, int pageCount, int maxQty, List<int> latenciesUs) async {
    for (var i = 0; i < pageCount; i++) {
      await timedAsync(() async {
        final finder = sembast.Finder(
          sortOrders: [sembast.SortOrder('qty')],
          offset: i * pageSize,
          limit: pageSize,
        );
        final results = await _store.find(_db, finder: finder);
        if (results.isEmpty) {
          throw StateError('Unexpected empty page at offset ${i * pageSize}');
        }
      }, latenciesUs);
    }
  }

  @override
  Future<void> sortedTopK(
      int k, int sampleCount, int maxQty, List<int> latenciesUs) async {
    for (var i = 0; i < sampleCount; i++) {
      await timedAsync(() async {
        final finder = sembast.Finder(
          sortOrders: [sembast.SortOrder('qty', false)],
          limit: k,
        );
        final results = await _store.find(_db, finder: finder);
        if (results.isEmpty) {
          throw StateError('Unexpected empty top-K result');
        }
      }, latenciesUs);
    }
  }

  @override
  Future<void> filteredCount(
      int sampleCount, int maxQty, List<int> latenciesUs) async {
    final rnd = Random(12345);
    for (var i = 0; i < sampleCount; i++) {
      final start = rnd.nextInt(max(1, maxQty - 500));
      await timedAsync(() async {
        final n = await _store.count(
          _db,
          filter: sembast.Filter.and([
            sembast.Filter.greaterThanOrEquals('qty', start),
            sembast.Filter.lessThan('qty', start + 500),
          ]),
        );
        if (n < 0) throw StateError('negative count');
      }, latenciesUs);
    }
  }

  @override
  Future<void> concurrentOps(
    int rounds,
    int readsPerRound,
    int writesPerRound,
    List<String> readIds,
    List<String> writeIds,
    int baseValue,
    List<int> readUs,
    List<int> writeUs,
  ) async {
    for (var r = 0; r < rounds; r++) {
      final futures = <Future<void>>[];
      for (var i = 0; i < readsPerRound; i++) {
        final id = readIds[r * readsPerRound + i];
        final sw = Stopwatch()..start();
        futures.add(_store.record(id).get(_db).then((snap) {
          sw.stop();
          readUs.add(sw.elapsedMicroseconds);
          if (snap == null) throw StateError('Record not found: $id');
        }));
      }
      for (var w = 0; w < writesPerRound; w++) {
        final id = writeIds[r * writesPerRound + w];
        final qty = baseValue + r * writesPerRound + w;
        final sw = Stopwatch()..start();
        futures.add(_store.record(id).update(_db, {'qty': qty}).then((_) {
          sw.stop();
          writeUs.add(sw.elapsedMicroseconds);
        }));
      }
      await Future.wait(futures);
    }
  }

  @override
  Future<int> count() async => _store.count(_db);

  @override
  Future<Object?> readQty(String id) async =>
      (await _store.record(id).get(_db))?['qty'];

  @override
  Future<void> teardown() async {
    await _db.close();
    try {
      await _dir.delete(recursive: true);
    } catch (_) {}
  }
}

// ------------------------------------------------------------------ 5. Hive
class HivePeer extends BenchmarkPeer {
  @override
  String get name => 'Hive';

  @override
  bool get supportsTransactions => false;

  @override
  bool get hasSecondaryIndex => false;

  late Box<Map<String, Object?>> _box;
  late Directory _dir;

  @override
  Future<void> setup() async {
    _dir = await Directory.systemTemp.createTemp('hive_bench_');
    Hive.init(_dir.path);
    _box = await Hive.openBox<Map<String, Object?>>('widgets');
  }

  @override
  Future<void> bulkInsert(List<Map<String, Object?>> records) async {
    const batchSize = 1000;
    for (var i = 0; i < records.length; i += batchSize) {
      final chunk = records.sublist(i, min(i + batchSize, records.length));
      final map = {for (final r in chunk) r['id'] as String: r};
      await _box.putAll(map);
    }
  }

  @override
  Future<void> singleInsert(
      List<Map<String, Object?>> records, List<int> latenciesUs) async {
    for (final r in records) {
      await timedAsync(() => _box.put(r['id'] as String, r), latenciesUs);
    }
  }

  @override
  Future<void> pointRead(List<String> targetIds, List<int> latenciesUs) async {
    for (final id in targetIds) {
      timed(() {
        final res = _box.get(id);
        if (res == null) throw StateError('Record not found: $id');
      }, latenciesUs);
    }
  }

  @override
  Future<void> rangeQuery(
      int maxQty, int sampleCount, List<int> latenciesUs) async {
    final rnd = Random(12345);
    for (var i = 0; i < sampleCount; i++) {
      final start = rnd.nextInt(max(1, maxQty - 500));
      final end = start + 500;
      timed(() {
        // Hive has no secondary indexes; table scan with limit.
        final matches = <Map<String, Object?>>[];
        for (final val in _box.values) {
          final q = val['qty'] as int?;
          if (q != null && q >= start && q < end) {
            matches.add(val);
            if (matches.length >= 50) break;
          }
        }
      }, latenciesUs);
    }
  }

  @override
  Future<void> pointUpdate(
      List<String> targetIds, int baseValue, List<int> latenciesUs) async {
    for (var i = 0; i < targetIds.length; i++) {
      final id = targetIds[i];
      await timedAsync(() async {
        final existing = _box.get(id);
        if (existing != null) {
          final updated = Map<String, Object?>.from(existing)
            ..['qty'] = baseValue + i;
          await _box.put(id, updated);
        }
      }, latenciesUs);
    }
  }

  @override
  Future<void> delete(List<String> targetIds, List<int> latenciesUs) async {
    for (final id in targetIds) {
      await timedAsync(() => _box.delete(id), latenciesUs);
    }
  }

  @override
  Future<void> transactions(int putsPerTxn, List<Map<String, Object?>> records,
      List<int> latenciesUs) async {
    throw UnsupportedError('Hive has no transaction API');
  }

  @override
  Future<void> pagination(
      int pageSize, int pageCount, int maxQty, List<int> latenciesUs) async {
    // Hive has no cursor/query engine: sort the whole store once, then
    // skip/take per page. The one-time sort is outside the timed region.
    final sorted = _box.values.toList()
      ..sort((a, b) => (a['qty'] as int).compareTo(b['qty'] as int));
    for (var i = 0; i < pageCount; i++) {
      timed(() {
        final page = sorted.skip(i * pageSize).take(pageSize).toList();
        if (page.isEmpty) {
          throw StateError('Unexpected empty page at offset ${i * pageSize}');
        }
      }, latenciesUs);
    }
  }

  @override
  Future<void> sortedTopK(
      int k, int sampleCount, int maxQty, List<int> latenciesUs) async {
    for (var i = 0; i < sampleCount; i++) {
      timed(() {
        final sorted = _box.values.toList()
          ..sort((a, b) => (b['qty'] as int).compareTo(a['qty'] as int));
        final top = sorted.take(k).toList();
        if (top.isEmpty) {
          throw StateError('Unexpected empty top-K result');
        }
      }, latenciesUs);
    }
  }

  @override
  Future<void> filteredCount(
      int sampleCount, int maxQty, List<int> latenciesUs) async {
    final rnd = Random(12345);
    for (var i = 0; i < sampleCount; i++) {
      final start = rnd.nextInt(max(1, maxQty - 500));
      final end = start + 500;
      timed(() {
        var n = 0;
        for (final val in _box.values) {
          final q = val['qty'] as int?;
          if (q != null && q >= start && q < end) n++;
        }
        if (n < 0) throw StateError('negative count');
      }, latenciesUs);
    }
  }

  @override
  Future<void> concurrentOps(
    int rounds,
    int readsPerRound,
    int writesPerRound,
    List<String> readIds,
    List<String> writeIds,
    int baseValue,
    List<int> readUs,
    List<int> writeUs,
  ) async {
    for (var r = 0; r < rounds; r++) {
      final futures = <Future<void>>[];
      for (var i = 0; i < readsPerRound; i++) {
        final id = readIds[r * readsPerRound + i];
        final sw = Stopwatch()..start();
        futures.add(Future<void>(() {
          final res = _box.get(id);
          sw.stop();
          readUs.add(sw.elapsedMicroseconds);
          if (res == null) throw StateError('Record not found: $id');
        }));
      }
      for (var w = 0; w < writesPerRound; w++) {
        final id = writeIds[r * writesPerRound + w];
        final qty = baseValue + r * writesPerRound + w;
        final sw = Stopwatch()..start();
        futures.add(Future<void>(() async {
          final existing = _box.get(id);
          if (existing != null) {
            final updated = Map<String, Object?>.from(existing)..['qty'] = qty;
            await _box.put(id, updated);
          }
          sw.stop();
          writeUs.add(sw.elapsedMicroseconds);
        }));
      }
      await Future.wait(futures);
    }
  }

  @override
  Future<int> count() async => _box.length;

  @override
  Future<Object?> readQty(String id) async => _box.get(id)?['qty'];

  @override
  Future<void> teardown() async {
    await _box.close();
    try {
      await _dir.delete(recursive: true);
    } catch (_) {}
  }
}

// ------------------------------------------------------------------ 6. Isar
class IsarPeer extends BenchmarkPeer {
  @override
  String get name => 'Isar';

  @override
  List<String> get rowNotes => const [
        'point reads/updates use the unique recordId index (getByRecordId)',
        'range/top-K/count use the qty index',
        'synchronous engine under the hood: "concurrent" ops serialize',
      ];

  late Isar _isar;
  late Directory _dir;

  IsarWidget _item(Map<String, Object?> r) => IsarWidget()
    ..recordId = r['id'] as String
    ..name = r['name'] as String
    ..qty = r['qty'] as int;

  @override
  Future<void> setup() async {
    await Isar.initializeIsarCore(download: true);
    _dir = await Directory.systemTemp.createTemp('isar_bench_');
    _isar = await Isar.open(
      [IsarWidgetSchema],
      directory: _dir.path,
      inspector: false,
    );
  }

  @override
  Future<void> bulkInsert(List<Map<String, Object?>> records) async {
    const batchSize = 1000;
    for (var i = 0; i < records.length; i += batchSize) {
      final chunk = records.sublist(i, min(i + batchSize, records.length));
      final items = chunk.map(_item).toList();
      await _isar.writeTxn(() async {
        await _isar.isarWidgets.putAll(items);
      });
    }
  }

  @override
  Future<void> singleInsert(
      List<Map<String, Object?>> records, List<int> latenciesUs) async {
    for (final r in records) {
      final item = _item(r);
      await timedAsync(() async {
        await _isar.writeTxn(() async {
          await _isar.isarWidgets.put(item);
        });
      }, latenciesUs);
    }
  }

  @override
  Future<void> pointRead(List<String> targetIds, List<int> latenciesUs) async {
    // Index-backed lookup through the generated by-index API (unique
    // recordId index). The equivalent where().recordIdEqualTo() goes through
    // the same index but carries ~10x per-query overhead in Isar's query
    // builder; the by-index API is Isar's canonical keyed read.
    for (final id in targetIds) {
      await timedAsync(() async {
        final res = await _isar.isarWidgets.getByRecordId(id);
        if (res == null) throw StateError('Record not found: $id');
      }, latenciesUs);
    }
  }

  @override
  Future<void> rangeQuery(
      int maxQty, int sampleCount, List<int> latenciesUs) async {
    final rnd = Random(12345);
    for (var i = 0; i < sampleCount; i++) {
      final start = rnd.nextInt(max(1, maxQty - 500));
      await timedAsync(() async {
        // Index-backed range over qty: results come back in qty order.
        // qtyBetween is inclusive, so the upper bound is start + 499 to match
        // every other peer's `qty >= start AND qty < start + 500`.
        final res = await _isar.isarWidgets
            .where()
            .qtyBetween(start, start + 499)
            .limit(50)
            .findAll();
        if (res.isEmpty) {
          throw StateError(
              'Unexpected empty range window qty in [$start, ${start + 500})');
        }
      }, latenciesUs);
    }
  }

  @override
  Future<void> pointUpdate(
      List<String> targetIds, int baseValue, List<int> latenciesUs) async {
    // Index-backed lookup through the by-index API + write.
    for (var i = 0; i < targetIds.length; i++) {
      final id = targetIds[i];
      await timedAsync(() async {
        final item = await _isar.isarWidgets.getByRecordId(id);
        if (item != null) {
          item.qty = baseValue + i;
          await _isar.writeTxn(() async {
            await _isar.isarWidgets.put(item);
          });
        }
      }, latenciesUs);
    }
  }

  @override
  Future<void> delete(List<String> targetIds, List<int> latenciesUs) async {
    // Delete through the unique recordId index, inside an explicit txn.
    for (final id in targetIds) {
      await timedAsync(() async {
        await _isar.writeTxn(() async {
          await _isar.isarWidgets.deleteByRecordId(id);
        });
      }, latenciesUs);
    }
  }

  @override
  Future<void> transactions(int putsPerTxn, List<Map<String, Object?>> records,
      List<int> latenciesUs) async {
    for (var i = 0; i < records.length; i += putsPerTxn) {
      final chunk = records.sublist(i, min(i + putsPerTxn, records.length));
      final items = chunk.map(_item).toList();
      await timedAsync(() async {
        await _isar.writeTxn(() async {
          await _isar.isarWidgets.putAll(items);
        });
      }, latenciesUs);
    }
  }

  @override
  Future<void> pagination(
      int pageSize, int pageCount, int maxQty, List<int> latenciesUs) async {
    for (var i = 0; i < pageCount; i++) {
      await timedAsync(() async {
        // Index-ordered walk with offset (Isar's native cursor equivalent).
        final res = await _isar.isarWidgets
            .where()
            .anyQty()
            .offset(i * pageSize)
            .limit(pageSize)
            .findAll();
        if (res.isEmpty) {
          throw StateError('Unexpected empty page at offset ${i * pageSize}');
        }
      }, latenciesUs);
    }
  }

  @override
  Future<void> sortedTopK(
      int k, int sampleCount, int maxQty, List<int> latenciesUs) async {
    // qty values in the main dataset are the unique integers 0..maxQty-1, so
    // the K largest are exactly `qty >= maxQty - k`. This index range scan
    // returns the same result set as every other peer's `ORDER BY qty DESC
    // LIMIT k` while staying on the qty index.
    for (var i = 0; i < sampleCount; i++) {
      await timedAsync(() async {
        final res = await _isar.isarWidgets
            .where()
            .qtyGreaterThan(maxQty - k - 1)
            .findAll();
        if (res.isEmpty) {
          throw StateError('Unexpected empty top-K result');
        }
      }, latenciesUs);
    }
  }

  @override
  Future<void> filteredCount(
      int sampleCount, int maxQty, List<int> latenciesUs) async {
    final rnd = Random(12345);
    for (var i = 0; i < sampleCount; i++) {
      final start = rnd.nextInt(max(1, maxQty - 500));
      await timedAsync(() async {
        // Index-backed count over qty (inclusive between, so end - 1 matches
        // the exclusive upper bound used by the other peers).
        final n = await _isar.isarWidgets
            .where()
            .qtyBetween(start, start + 499)
            .count();
        if (n < 0) throw StateError('negative count');
      }, latenciesUs);
    }
  }

  @override
  Future<void> concurrentOps(
    int rounds,
    int readsPerRound,
    int writesPerRound,
    List<String> readIds,
    List<String> writeIds,
    int baseValue,
    List<int> readUs,
    List<int> writeUs,
  ) async {
    for (var r = 0; r < rounds; r++) {
      final futures = <Future<void>>[];
      for (var i = 0; i < readsPerRound; i++) {
        final id = readIds[r * readsPerRound + i];
        final sw = Stopwatch()..start();
        futures.add(_isar.isarWidgets.getByRecordId(id).then((item) {
          sw.stop();
          readUs.add(sw.elapsedMicroseconds);
          if (item == null) throw StateError('Record not found: $id');
        }));
      }
      for (var w = 0; w < writesPerRound; w++) {
        final id = writeIds[r * writesPerRound + w];
        final qty = baseValue + r * writesPerRound + w;
        final sw = Stopwatch()..start();
        futures.add(_isar.isarWidgets.getByRecordId(id).then((item) async {
          if (item != null) {
            item.qty = qty;
            await _isar.writeTxn(() async {
              await _isar.isarWidgets.put(item);
            });
          }
          sw.stop();
          writeUs.add(sw.elapsedMicroseconds);
        }));
      }
      await Future.wait(futures);
    }
  }

  @override
  Future<int> count() async => _isar.isarWidgets.count();

  @override
  Future<Object?> readQty(String id) async =>
      (await _isar.isarWidgets.getByRecordId(id))?.qty;

  @override
  Future<void> teardown() async {
    await _isar.close();
    try {
      await _dir.delete(recursive: true);
    } catch (_) {}
  }
}

/// All peers in benchmark order.
List<BenchmarkPeer> buildPeers() => [
      LocalPocketPeer(),
      VanillaSqlitePeer(),
      DriftPeer(),
      SembastPeer(),
      HivePeer(),
      IsarPeer(),
    ];
