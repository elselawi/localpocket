/// Comparative benchmark comparing LocalPocket against peer databases:
/// - Drift (SQLite ORM)
/// - Sembast (Document NoSQL)
/// - SQLite Vanilla (Raw sqflite/sqlite3)
/// - Hive (Key-Value NoSQL)
/// - Isar (NoSQL Object DB)
///
/// Tested at scales: 1K (1,000), 10K (10,000), and 100K (100,000) records.
/// Measures and compares:
/// - Bulk Insert (Total ms, docs/sec)
/// - Point Read Latency (p50, p95, p99)
/// - Range Query Latency (p50, p95, p99)
/// - Point Update Latency (p50, p95, p99)
///
/// Usage: `dart run benchmark/comparative_benchmark.dart`
library;

import 'dart:async';
import 'dart:io';
import 'dart:math';

import 'package:drift/native.dart' as drift_native;
import 'package:hive/hive.dart';
import 'package:isar/isar.dart' hide CollectionSchema;
import 'package:localpocket/localpocket.dart';
import 'package:sembast/sembast.dart' as sembast;
import 'package:sembast/sembast_memory.dart' as sembast_mem;
import 'package:sqlite3/sqlite3.dart' as raw_sqlite3;

import 'benchmark_models.dart';
import 'persist.dart';

class LatencyStats {
  final int count;
  final int p50Us;
  final int p95Us;
  final int p99Us;
  final double meanUs;

  const LatencyStats({
    required this.count,
    required this.p50Us,
    required this.p95Us,
    required this.p99Us,
    required this.meanUs,
  });

  static LatencyStats fromMicros(List<int> samples) {
    if (samples.isEmpty) {
      return const LatencyStats(
          count: 0, p50Us: 0, p95Us: 0, p99Us: 0, meanUs: 0);
    }
    final sorted = List<int>.from(samples)..sort();
    final n = sorted.length;
    final p50 = sorted[(n * 0.50).floor().clamp(0, n - 1)];
    final p95 = sorted[(n * 0.95).floor().clamp(0, n - 1)];
    final p99 = sorted[(n * 0.99).floor().clamp(0, n - 1)];
    final sum = sorted.fold<int>(0, (a, b) => a + b);
    return LatencyStats(
      count: n,
      p50Us: p50,
      p95Us: p95,
      p99Us: p99,
      meanUs: sum / n,
    );
  }

  String format(int us) {
    if (us < 1000) return '$usµs';
    return '${(us / 1000).toStringAsFixed(2)}ms';
  }

  String get summary =>
      'p50: ${format(p50Us)} | p95: ${format(p95Us)} | p99: ${format(p99Us)}';

  Map<String, Object?> toJson() => {
        'count': count,
        'p50Us': p50Us,
        'p95Us': p95Us,
        'p99Us': p99Us,
        'meanUs': meanUs,
      };
}

class BenchmarkResult {
  final String peer;
  final int scale;
  final int insertMs;
  final LatencyStats pointRead;
  final LatencyStats rangeQuery;
  final LatencyStats pointUpdate;

  const BenchmarkResult({
    required this.peer,
    required this.scale,
    required this.insertMs,
    required this.pointRead,
    required this.rangeQuery,
    required this.pointUpdate,
  });

  Map<String, Object?> toJson() => {
        'peer': peer,
        'scale': scale,
        'insertMs': insertMs,
        'pointRead': pointRead.toJson(),
        'rangeQuery': rangeQuery.toJson(),
        'pointUpdate': pointUpdate.toJson(),
      };
}

abstract class BenchmarkPeer {
  String get name;
  Future<void> setup();
  Future<void> bulkInsert(int count, List<Map<String, Object?>> records);
  Future<void> pointRead(List<String> targetIds, List<int> latenciesUs);
  Future<void> rangeQuery(int maxQty, int sampleCount, List<int> latenciesUs);
  Future<void> pointUpdate(List<String> targetIds, List<int> latenciesUs);
  Future<void> teardown();
}

// ------------------------------------------------------------------ 1. LocalPocket
class LocalPocketPeer extends BenchmarkPeer {
  @override
  String get name => 'LocalPocket';

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
  Future<void> bulkInsert(int count, List<Map<String, Object?>> records) async {
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
  Future<void> pointRead(List<String> targetIds, List<int> latenciesUs) async {
    final col = _pocket.collection('widgets');
    for (final id in targetIds) {
      final sw = Stopwatch()..start();
      final res = await col.get(id);
      sw.stop();
      if (res == null) throw StateError('Record not found: $id');
      latenciesUs.add(sw.elapsedMicroseconds);
    }
  }

  @override
  Future<void> rangeQuery(
      int maxQty, int sampleCount, List<int> latenciesUs) async {
    final col = _pocket.collection('widgets');
    final rnd = Random(12345);
    for (var i = 0; i < sampleCount; i++) {
      final start = rnd.nextInt(max(1, maxQty - 500));
      final sw = Stopwatch()..start();
      final page = await col
          .query()
          .where('qty', between: (start, start + 500))
          .orderBy('qty')
          .limit(50)
          .fetch();
      sw.stop();
      if (page.items.isEmpty && start + 500 < maxQty) {
        // empty check optional
      }
      latenciesUs.add(sw.elapsedMicroseconds);
    }
  }

  @override
  Future<void> pointUpdate(
      List<String> targetIds, List<int> latenciesUs) async {
    final col = _pocket.collection('widgets');
    var val = 1;
    for (final id in targetIds) {
      final sw = Stopwatch()..start();
      await col.patch(id, {'qty': 999999 + val++});
      sw.stop();
      latenciesUs.add(sw.elapsedMicroseconds);
    }
  }

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
  Future<void> bulkInsert(int count, List<Map<String, Object?>> records) async {
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
  Future<void> pointRead(List<String> targetIds, List<int> latenciesUs) async {
    for (final id in targetIds) {
      final sw = Stopwatch()..start();
      final rows =
          _db.select('SELECT * FROM widgets WHERE id = ? LIMIT 1', [id]);
      sw.stop();
      if (rows.isEmpty) throw StateError('Record not found: $id');
      latenciesUs.add(sw.elapsedMicroseconds);
    }
  }

  @override
  Future<void> rangeQuery(
      int maxQty, int sampleCount, List<int> latenciesUs) async {
    final rnd = Random(12345);
    for (var i = 0; i < sampleCount; i++) {
      final start = rnd.nextInt(max(1, maxQty - 500));
      final sw = Stopwatch()..start();
      final rows = _db.select(
          'SELECT * FROM widgets WHERE qty >= ? AND qty < ? ORDER BY qty ASC LIMIT 50',
          [start, start + 500]);
      sw.stop();
      if (rows.isEmpty && start + 500 < maxQty) {}
      latenciesUs.add(sw.elapsedMicroseconds);
    }
  }

  @override
  Future<void> pointUpdate(
      List<String> targetIds, List<int> latenciesUs) async {
    var val = 1;
    for (final id in targetIds) {
      final sw = Stopwatch()..start();
      _db.execute(
          'UPDATE widgets SET qty = ? WHERE id = ?', [999999 + val++, id]);
      sw.stop();
      latenciesUs.add(sw.elapsedMicroseconds);
    }
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
  Future<void> bulkInsert(int count, List<Map<String, Object?>> records) async {
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
  Future<void> pointRead(List<String> targetIds, List<int> latenciesUs) async {
    for (final id in targetIds) {
      final sw = Stopwatch()..start();
      final rows = await _db
          .runSelect('SELECT * FROM widgets WHERE id = ? LIMIT 1;', [id]);
      sw.stop();
      if (rows.isEmpty) throw StateError('Record not found: $id');
      latenciesUs.add(sw.elapsedMicroseconds);
    }
  }

  @override
  Future<void> rangeQuery(
      int maxQty, int sampleCount, List<int> latenciesUs) async {
    final rnd = Random(12345);
    for (var i = 0; i < sampleCount; i++) {
      final start = rnd.nextInt(max(1, maxQty - 500));
      final sw = Stopwatch()..start();
      final rows = await _db.runSelect(
        'SELECT * FROM widgets WHERE qty >= ? AND qty < ? ORDER BY qty ASC LIMIT 50;',
        [start, start + 500],
      );
      sw.stop();
      if (rows.isEmpty && start + 500 < maxQty) {}
      latenciesUs.add(sw.elapsedMicroseconds);
    }
  }

  @override
  Future<void> pointUpdate(
      List<String> targetIds, List<int> latenciesUs) async {
    var val = 1;
    for (final id in targetIds) {
      final sw = Stopwatch()..start();
      await _db.runUpdate(
        'UPDATE widgets SET qty = ? WHERE id = ?;',
        [999999 + val++, id],
      );
      sw.stop();
      latenciesUs.add(sw.elapsedMicroseconds);
    }
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

  late sembast.Database _db;
  late Directory _dir;
  final _store = sembast.stringMapStoreFactory.store('widgets');

  @override
  Future<void> setup() async {
    _dir = await Directory.systemTemp.createTemp('sembast_bench_');
    final dbPath = '${_dir.path}/sembast.db';
    _db = await sembast_mem.databaseFactoryMemory.openDatabase(dbPath);
  }

  @override
  Future<void> bulkInsert(int count, List<Map<String, Object?>> records) async {
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
  Future<void> pointRead(List<String> targetIds, List<int> latenciesUs) async {
    for (final id in targetIds) {
      final sw = Stopwatch()..start();
      final snap = await _store.record(id).get(_db);
      sw.stop();
      if (snap == null) throw StateError('Record not found: $id');
      latenciesUs.add(sw.elapsedMicroseconds);
    }
  }

  @override
  Future<void> rangeQuery(
      int maxQty, int sampleCount, List<int> latenciesUs) async {
    final rnd = Random(12345);
    for (var i = 0; i < sampleCount; i++) {
      final start = rnd.nextInt(max(1, maxQty - 500));
      final sw = Stopwatch()..start();
      final finder = sembast.Finder(
        filter: sembast.Filter.and([
          sembast.Filter.greaterThanOrEquals('qty', start),
          sembast.Filter.lessThan('qty', start + 500),
        ]),
        sortOrders: [sembast.SortOrder('qty')],
        limit: 50,
      );
      final results = await _store.find(_db, finder: finder);
      sw.stop();
      if (results.isEmpty && start + 500 < maxQty) {}
      latenciesUs.add(sw.elapsedMicroseconds);
    }
  }

  @override
  Future<void> pointUpdate(
      List<String> targetIds, List<int> latenciesUs) async {
    var val = 1;
    for (final id in targetIds) {
      final sw = Stopwatch()..start();
      await _store.record(id).update(_db, {'qty': 999999 + val++});
      sw.stop();
      latenciesUs.add(sw.elapsedMicroseconds);
    }
  }

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

  late Box<Map> _box;
  late Directory _dir;

  @override
  Future<void> setup() async {
    _dir = await Directory.systemTemp.createTemp('hive_bench_');
    Hive.init(_dir.path);
    _box = await Hive.openBox<Map>('widgets');
  }

  @override
  Future<void> bulkInsert(int count, List<Map<String, Object?>> records) async {
    const batchSize = 1000;
    for (var i = 0; i < records.length; i += batchSize) {
      final chunk = records.sublist(i, min(i + batchSize, records.length));
      final map = {for (final r in chunk) r['id'] as String: r};
      await _box.putAll(map);
    }
  }

  @override
  Future<void> pointRead(List<String> targetIds, List<int> latenciesUs) async {
    for (final id in targetIds) {
      final sw = Stopwatch()..start();
      final res = _box.get(id);
      sw.stop();
      if (res == null) throw StateError('Record not found: $id');
      latenciesUs.add(sw.elapsedMicroseconds);
    }
  }

  @override
  Future<void> rangeQuery(
      int maxQty, int sampleCount, List<int> latenciesUs) async {
    final rnd = Random(12345);
    for (var i = 0; i < sampleCount; i++) {
      final start = rnd.nextInt(max(1, maxQty - 500));
      final end = start + 500;
      final sw = Stopwatch()..start();
      // Hive has no secondary indexes; table scan with limit
      final matches = <Map>[];
      for (final val in _box.values) {
        final q = val['qty'] as int?;
        if (q != null && q >= start && q < end) {
          matches.add(val);
          if (matches.length >= 50) break;
        }
      }
      sw.stop();
      latenciesUs.add(sw.elapsedMicroseconds);
    }
  }

  @override
  Future<void> pointUpdate(
      List<String> targetIds, List<int> latenciesUs) async {
    var val = 1;
    for (final id in targetIds) {
      final sw = Stopwatch()..start();
      final existing = _box.get(id);
      if (existing != null) {
        final updated = Map<String, Object?>.from(existing)
          ..['qty'] = 999999 + val++;
        await _box.put(id, updated);
      }
      sw.stop();
      latenciesUs.add(sw.elapsedMicroseconds);
    }
  }

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

  late Isar _isar;
  late Directory _dir;

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
  Future<void> bulkInsert(int count, List<Map<String, Object?>> records) async {
    const batchSize = 1000;
    for (var i = 0; i < records.length; i += batchSize) {
      final chunk = records.sublist(i, min(i + batchSize, records.length));
      final items = chunk
          .map((r) => IsarWidget()
            ..recordId = r['id'] as String
            ..name = r['name'] as String
            ..qty = r['qty'] as int)
          .toList();
      await _isar.writeTxn(() async {
        await _isar.isarWidgets.putAll(items);
      });
    }
  }

  @override
  Future<void> pointRead(List<String> targetIds, List<int> latenciesUs) async {
    // Isar lookup by recordId
    for (final id in targetIds) {
      final sw = Stopwatch()..start();
      final res =
          await _isar.isarWidgets.filter().recordIdEqualTo(id).findFirst();
      sw.stop();
      if (res == null) throw StateError('Record not found: $id');
      latenciesUs.add(sw.elapsedMicroseconds);
    }
  }

  @override
  Future<void> rangeQuery(
      int maxQty, int sampleCount, List<int> latenciesUs) async {
    final rnd = Random(12345);
    for (var i = 0; i < sampleCount; i++) {
      final start = rnd.nextInt(max(1, maxQty - 500));
      final sw = Stopwatch()..start();
      final res = await _isar.isarWidgets
          .filter()
          .qtyBetween(start, start + 500)
          .sortByQty()
          .limit(50)
          .findAll();
      sw.stop();
      if (res.isEmpty && start + 500 < maxQty) {}
      latenciesUs.add(sw.elapsedMicroseconds);
    }
  }

  @override
  Future<void> pointUpdate(
      List<String> targetIds, List<int> latenciesUs) async {
    var val = 1;
    for (final id in targetIds) {
      final sw = Stopwatch()..start();
      final item =
          await _isar.isarWidgets.filter().recordIdEqualTo(id).findFirst();
      if (item != null) {
        item.qty = 999999 + val++;
        await _isar.writeTxn(() async {
          await _isar.isarWidgets.put(item);
        });
      }
      sw.stop();
      latenciesUs.add(sw.elapsedMicroseconds);
    }
  }

  @override
  Future<void> teardown() async {
    await _isar.close();
    try {
      await _dir.delete(recursive: true);
    } catch (_) {}
  }
}

// ------------------------------------------------------------------ Runner
Future<BenchmarkResult> runBenchmarkForPeer(
    BenchmarkPeer peer, int scale) async {
  stdout.write(
      '  Running ${peer.name.padRight(16)} @ ${scale.toString().padLeft(6)} rows... ');
  await peer.setup();

  // Generate test dataset with valid 15-char IDs
  final records = List.generate(
    scale,
    (i) => {
      'id': generateRecordId(),
      'name': 'Widget item $i',
      'qty': i,
      'phone': '555-${i.toString().padLeft(6, '0')}',
    },
  );

  // 1. Bulk Insert
  final swInsert = Stopwatch()..start();
  await peer.bulkInsert(scale, records);
  swInsert.stop();
  final insertMs = swInsert.elapsedMilliseconds;

  // Pick target IDs for point reads & updates
  final rnd = Random(42);
  final sampleReadCount = min(500, scale);
  final targetReadIds = List.generate(
    sampleReadCount,
    (_) => records[rnd.nextInt(scale)]['id'] as String,
  );

  // 2. Point Reads
  final readTimesUs = <int>[];
  await peer.pointRead(targetReadIds, readTimesUs);
  final readStats = LatencyStats.fromMicros(readTimesUs);

  // 3. Range Queries
  final sampleRangeCount = min(100, scale ~/ 10 + 10);
  final rangeTimesUs = <int>[];
  await peer.rangeQuery(scale, sampleRangeCount, rangeTimesUs);
  final rangeStats = LatencyStats.fromMicros(rangeTimesUs);

  // 4. Point Updates
  final sampleUpdateCount = min(200, scale ~/ 5 + 10);
  final targetUpdateIds = List.generate(
    sampleUpdateCount,
    (_) => records[rnd.nextInt(scale)]['id'] as String,
  );
  final updateTimesUs = <int>[];
  await peer.pointUpdate(targetUpdateIds, updateTimesUs);
  final updateStats = LatencyStats.fromMicros(updateTimesUs);

  await peer.teardown();
  stdout.writeln(
      'DONE (insert: ${insertMs}ms | read p50: ${readStats.p50Us}µs | range p50: ${rangeStats.p50Us}µs)');

  return BenchmarkResult(
    peer: peer.name,
    scale: scale,
    insertMs: insertMs,
    pointRead: readStats,
    rangeQuery: rangeStats,
    pointUpdate: updateStats,
  );
}

void printTable(String title, List<BenchmarkResult> results) {
  stdout.writeln();
  stdout.writeln(
      '========================================================================================================================');
  stdout.writeln(' $title');
  stdout.writeln(
      '========================================================================================================================');
  stdout.writeln(
    '| ${'Database Peer'.padRight(18)} '
    '| ${'Bulk Insert'.padRight(12)} '
    '| ${'Point Read (p50 / p95 / p99)'.padRight(30)} '
    '| ${'Range Query (p50 / p95 / p99)'.padRight(30)} '
    '| ${'Point Update (p50 / p95 / p99)'.padRight(30)} |',
  );
  stdout.writeln(
      '|--------------------|--------------|--------------------------------|--------------------------------|--------------------------------|');

  for (final r in results) {
    final insertStr = '${r.insertMs}ms';
    final readStr =
        '${r.pointRead.p50Us}µs / ${r.pointRead.p95Us}µs / ${r.pointRead.p99Us}µs';
    final rangeStr =
        '${r.rangeQuery.p50Us}µs / ${r.rangeQuery.p95Us}µs / ${r.rangeQuery.p99Us}µs';
    final updateStr =
        '${r.pointUpdate.p50Us}µs / ${r.pointUpdate.p95Us}µs / ${r.pointUpdate.p99Us}µs';

    stdout.writeln(
      '| ${r.peer.padRight(18)} '
      '| ${insertStr.padLeft(12)} '
      '| ${readStr.padRight(30)} '
      '| ${rangeStr.padRight(30)} '
      '| ${updateStr.padRight(30)} |',
    );
  }
  stdout.writeln(
      '========================================================================================================================');
}

Future<void> main(List<String> args) async {
  final scales = [1000, 10000, 100000];
  final allResults = <BenchmarkResult>[];
  stdout.writeln(
      'Starting Comparative Benchmark: LocalPocket vs Peers (Drift, Sembast, SQLite Vanilla, Hive, Isar)');
  stdout.writeln('Scales: 1K (1,000), 10K (10,000), 100K (100,000) records\n');

  for (final scale in scales) {
    final scaleLabel = scale >= 1000 ? '${scale ~/ 1000}K' : '$scale';
    stdout.writeln('\n>>> Running scale: $scaleLabel ($scale records)...');

    final peers = <BenchmarkPeer>[
      LocalPocketPeer(),
      VanillaSqlitePeer(),
      DriftPeer(),
      SembastPeer(),
      HivePeer(),
      IsarPeer(),
    ];

    final scaleResults = <BenchmarkResult>[];
    for (final p in peers) {
      try {
        final res = await runBenchmarkForPeer(p, scale);
        scaleResults.add(res);
      } catch (e, st) {
        stdout.writeln('  ERROR on ${p.name}: $e');
        stdout.writeln(st);
      }
    }

    printTable('Comparative Results at Scale: $scaleLabel ($scale records)',
        scaleResults);
    allResults.addAll(scaleResults);
  }

  final payload = <String, Object?>{
    'benchmark': 'localpocket/comparative_benchmark',
    'meta': buildMeta(sqliteVersion: raw_sqlite3.sqlite3.version.libVersion),
    'results': allResults.map((r) => r.toJson()).toList(),
  };
  final resultFile = await writeJsonResults('comparative', payload);
  stdout.writeln('\nResults written to ${resultFile.path}');

  stdout.writeln('\nComparative Benchmark Complete!');
}
