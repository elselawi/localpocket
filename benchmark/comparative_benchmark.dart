/// Comparative benchmark comparing LocalPocket against peer databases:
/// - Drift (SQLite ORM)
/// - Sembast (Document NoSQL, file-backed)
/// - SQLite Vanilla (raw sqlite3)
/// - Hive (Key-Value NoSQL)
/// - Isar (NoSQL Object DB)
///
/// Tested at scales: 1K (1,000), 10K (10,000), and 100K (100,000) records.
///
/// Phases (every phase is preceded by unmeasured warmup ops):
///  1. Bulk Insert      — total ms, docs/sec
///  2. Single-row Insert— one put per timed op (µs/op)
///  3. Point Read       — p50/p95/p99 (µs)
///  4. Range Query      — p50/p95/p99 (µs)
///  5. Sorted Top-K     — p50/p95/p99 (µs)
///  6. Filtered Count   — p50/p95/p99 (µs)
///  7. Pagination       — p50/p95/p99 per page (µs)
///  8. Point Update     — p50/p95/p99 (µs)
///  9. Delete           — p50/p95/p99 (µs)
/// 10. Transactions     — N puts in one explicit txn, timed per txn (µs)
/// 11. Concurrent Ops   — 10 reads + 5 writes interleaved per round (µs/op)
///
/// Integrity: after every mutating phase the harness verifies the store row
/// count against the expected count and spot-checks written `qty` values, so a
/// backend with a broken write path fails loudly instead of publishing
/// numbers from corrupt state.
///
/// Fairness rules (see the printed caveat block):
///  * every peer is file-backed;
///  * Isar point reads/updates use its unique recordId index and range/top-K/
///    count use its qty index;
///  * peers with no capability (Hive: no transactions, no secondary index)
///    are reported honestly as n/s or scan-based.
///
/// Output: colored ASCII tables + bar graphs + a leaderboard, plus a
/// timestamped JSON file under `benchmark/results/` (schemaVersion 2).
///
/// Usage: `dart run benchmark/comparative_benchmark.dart [--no-color]`
library;

import 'dart:async';
import 'dart:io';
import 'dart:math';

import 'package:localpocket/localpocket.dart';
import 'package:sqlite3/sqlite3.dart' as raw_sqlite3;

import 'comparative_peers.dart';
import 'persist.dart';

/// Results schema version. Bumped to 2 when the new phases (single insert,
/// delete, transactions, pagination, top-K, filtered count, concurrency),
/// caveats, warmup config and skip records were added. The four original
/// fields keep their names and semantics so older result files stay
/// comparable.
const schemaVersion = 2;

// ------------------------------------------------------------- phase config --
// Warmup: unmeasured ops run before each phase's timing starts, so JIT
// compilation, first-touch IO and page-cache misses do not land inside the
// measured percentiles. Warmup ops either touch already-sampled keys (reads,
// ranges) or are overwritten/deleted later (writes); repeat touches of
// already-sampled keys are acceptable because repeat reads are part of real
// workloads.
const warmupConfig = <String, int>{
  'bulkInsertRows': 100, // inserted then deleted before the timed batch
  'singleInsertOps': 10, // kept and deleted in the delete phase
  'pointReadOps': 40,
  'rangeQueryOps': 20,
  'pointUpdateOps': 25, // overwritten by the measured pass
  'deleteOps': 10, // scratch records inserted and deleted unmeasured
  'transactions': 2, // kept; counted in the final row count
  'paginationPages': 10,
  'topKOps': 10,
  'countFilteredOps': 10,
  'concurrentRounds': 1,
};

// Measured sample sizes. The first four mirror the original benchmark so
// old JSON result files stay comparable.
int readSamples(int scale) => min(500, scale);
int rangeSamples(int scale) => min(100, scale ~/ 10 + 10);
int updateSamples(int scale) => min(200, scale ~/ 5 + 10);
int singleSamples(int scale) => min(100, scale ~/ 10 + 10);
int deleteSamples(int scale) => min(100, scale ~/ 10 + 10);
int txnCount(int scale) => min(50, scale ~/ 100 + 5);
int pageCount(int scale) => min(50, scale ~/ pageSize);
int topKSamples(int scale) => min(50, scale ~/ 100 + 5);
int countSamples(int scale) => min(50, scale ~/ 100 + 5);

const putsPerTxn = 100;
const pageSize = 50;
const topK = 50;
const concurrentReadsPerRound = 10;
const concurrentWritesPerRound = 5;
const concurrentRounds = 20;

/// Distinct qty ranges per phase so phases never interfere with each other
/// (main dataset: 0..scale-1; singles: negative; warmups/txns: > 10M).
const qtyBaseBulkWarmup = 10000000;
const qtyBaseSingleWarmup = -10000000;
const qtyBaseSingle = -20000000;
const qtyBaseDeleteWarmup = -30000000;
const qtyBaseTxnWarmup = 12000000;
const qtyBaseTxn = 13000000;
const qtyBaseUpdateWarmup = 800000;
const qtyBaseUpdate = 900000;
const qtyBaseConcurrent = 700000;

/// Machine-generated caveats that accompany every printed table and are
/// persisted in the JSON payload so downstream consumers see them.
Map<String, Object?> buildCaveats() => {
      'storage': 'Every peer is file-backed (Sembast was switched from the '
          'in-memory factory to the file-based io factory on 2026-08-22).',
      'secondaryIndexes': {
        'indexed': ['LocalPocket', 'SQLite (vanilla)', 'Drift', 'Isar'],
        'scan': ['Sembast', 'Hive'],
        'note': 'Peers under "indexed" answer range/top-K/filtered-count via a '
            'real secondary index on qty; peers under "scan" simulate those '
            'queries with full scans (Hive also sorts in memory).',
      },
      'transactions':
          'Supported by all peers except Hive, which has no transaction API '
              'and is reported as n/s.',
      'concurrency':
          '"Concurrent" means async operations interleaved on ONE isolate via '
              'Future.wait. Synchronous engines (SQLite vanilla, Isar, Hive\'s '
              'hot path) effectively serialize; LocalPocket serializes writes '
              'through its write queue and group-commits same-turn mutations.',
      'localpocketWriteCosts':
          'Every LocalPocket mutation also writes an outbox intent row and a '
              'sync-state row in the same transaction (the local-first '
              'invariant) at the default durability class (NORMAL). Other '
              'peers only write their domain row, so LocalPocket write costs '
              'are not directly comparable 1:1.',
      'isarIndexes':
          'Isar point reads/updates go through the generated by-index API on '
              'the unique recordId index (getByRecordId); range/top-K/'
              'filtered-count go through the qty index '
              '(benchmark_models.dart declares both).',
      'warmup': 'Every phase runs unmeasured warmup ops before timing starts '
          '(see the "warmup" block in the JSON payload).',
      'dataset':
          'One dataset is generated per scale and given to every peer. qty '
              'values are the deterministic integers 0..scale-1; names and '
              'phones are deterministic strings; record ids come from '
              'generateRecordId() and therefore differ across runs, but are '
              'structurally identical 15-char ids. Sample selection is seeded '
              '(Random(42) for targets, Random(12345) for range windows).',
    };

Map<String, Object?> buildSamples(int scale) => {
      'readSamples': readSamples(scale),
      'rangeSamples': rangeSamples(scale),
      'updateSamples': updateSamples(scale),
      'singleInsertSamples': singleSamples(scale),
      'deleteSamples': deleteSamples(scale),
      'txnCount': txnCount(scale),
      'putsPerTxn': putsPerTxn,
      'pageSize': pageSize,
      'pageCount': pageCount(scale),
      'topK': topK,
      'topKSamples': topKSamples(scale),
      'countSamples': countSamples(scale),
      'concurrentReadsPerRound': concurrentReadsPerRound,
      'concurrentWritesPerRound': concurrentWritesPerRound,
      'concurrentRounds': concurrentRounds,
    };

// ----------------------------------------------------------------- stats ----
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

  // Original four phases (names/semantics unchanged for old-file parity).
  final int insertMs;
  final LatencyStats pointRead;
  final LatencyStats rangeQuery;
  final LatencyStats pointUpdate;

  // New phases (schemaVersion 2).
  final LatencyStats? singleInsert;
  final LatencyStats? delete;
  final LatencyStats? transactions;
  final LatencyStats? pagination;
  final LatencyStats? topK;
  final LatencyStats? countFiltered;
  final LatencyStats? concurrentRead;
  final LatencyStats? concurrentWrite;

  final int? maxRows;
  final List<String> notes;
  final String? error;

  const BenchmarkResult({
    required this.peer,
    required this.scale,
    required this.insertMs,
    required this.pointRead,
    required this.rangeQuery,
    required this.pointUpdate,
    this.singleInsert,
    this.delete,
    this.transactions,
    this.pagination,
    this.topK,
    this.countFiltered,
    this.concurrentRead,
    this.concurrentWrite,
    this.maxRows,
    this.notes = const [],
    this.error,
  });

  factory BenchmarkResult.error(String peer, int scale, Object error) {
    return BenchmarkResult(
      peer: peer,
      scale: scale,
      insertMs: 0,
      pointRead:
          const LatencyStats(count: 0, p50Us: 0, p95Us: 0, p99Us: 0, meanUs: 0),
      rangeQuery:
          const LatencyStats(count: 0, p50Us: 0, p95Us: 0, p99Us: 0, meanUs: 0),
      pointUpdate:
          const LatencyStats(count: 0, p50Us: 0, p95Us: 0, p99Us: 0, meanUs: 0),
      notes: const ['run failed'],
      error: error.toString(),
    );
  }

  Map<String, Object?> toJson() => {
        'peer': peer,
        'scale': scale,
        'insertMs': insertMs,
        'pointRead': pointRead.toJson(),
        'rangeQuery': rangeQuery.toJson(),
        'pointUpdate': pointUpdate.toJson(),
        'singleInsert': singleInsert?.toJson(),
        'delete': delete?.toJson(),
        'transactions': transactions?.toJson(),
        'pagination': pagination?.toJson(),
        'topK': topK?.toJson(),
        'countFiltered': countFiltered?.toJson(),
        'concurrentRead': concurrentRead?.toJson(),
        'concurrentWrite': concurrentWrite?.toJson(),
        if (maxRows != null) 'maxRows': maxRows,
        if (notes.isNotEmpty) 'notes': notes,
        if (error != null) 'error': error,
      };
}

/// A run skipped because the scale exceeds the peer's [maxRows] cap.
class SkippedRun {
  final String peer;
  final int scale;
  final int maxRows;

  const SkippedRun(this.peer, this.scale, this.maxRows);

  Map<String, Object?> toJson() => {
        'peer': peer,
        'scale': scale,
        'maxRows': maxRows,
        'reason': 'scale $scale exceeds peer maxRows cap $maxRows',
      };
}

// ------------------------------------------------------------ integrity -----
/// Asserts the store holds exactly [expected] rows (loud failure otherwise).
Future<void> assertCount(
    BenchmarkPeer peer, int expected, String afterPhase) async {
  final actual = await peer.count();
  if (actual != expected) {
    throw StateError('Integrity failure after $afterPhase on ${peer.name}: '
        'expected $expected rows, found $actual');
  }
}

/// Asserts the recorded qty values actually landed (loud failure otherwise).
Future<void> assertQty(BenchmarkPeer peer, Map<String, Object?> expected,
    String afterPhase) async {
  for (final e in expected.entries) {
    final actual = await peer.readQty(e.key);
    if (actual != e.value) {
      throw StateError('Integrity failure after $afterPhase on ${peer.name}: '
          'record ${e.key} has qty $actual, expected ${e.value}');
    }
  }
}

// ------------------------------------------------------------- dataset ------
/// Deterministic per-scale dataset: qty values are the integers
/// [qtyBase]..[qtyBase]+n-1; names/phones derive from qty. Record ids use
/// [generateRecordId] (unique 15-char ids; identical structure for every
/// peer since the same list is reused).
List<Map<String, Object?>> makeDataset(int n, int qtyBase) =>
    List.generate(n, (i) => makeRecord(generateRecordId(), qtyBase + i));

List<String> idsOf(List<Map<String, Object?>> records) =>
    [for (final r in records) r['id'] as String];

// -------------------------------------------------------------- runner -----
Future<BenchmarkResult> runBenchmarkForPeer(
    BenchmarkPeer peer, int scale) async {
  stdout.write('  Running ${peer.name.padRight(16)} '
      '@ ${scale.toString().padLeft(6)} rows... ');
  await peer.setup();
  var expected = 0;
  try {
    // -- 0. bulk-insert warmup: tiny unmeasured batch, deleted afterwards.
    final warmBulk =
        makeDataset(warmupConfig['bulkInsertRows']!, qtyBaseBulkWarmup);
    await peer.bulkInsert(warmBulk);
    await peer.delete(idsOf(warmBulk), <int>[]);
    await assertCount(peer, expected, 'bulk warmup cleanup');

    // -- 1. bulk insert (timed).
    final records = makeDataset(scale, 0);
    final swInsert = Stopwatch()..start();
    await peer.bulkInsert(records);
    swInsert.stop();
    expected += scale;
    await assertCount(peer, expected, 'bulk insert');
    final insertMs = swInsert.elapsedMilliseconds;

    final rnd = Random(42);
    final readIds = List.generate(
      readSamples(scale),
      (_) => records[rnd.nextInt(scale)]['id'] as String,
    );

    // -- 2. single-row insert: warmup kept in place (deleted in the delete
    //    phase so the count comes back to scale) + measured samples.
    final warmSingles =
        makeDataset(warmupConfig['singleInsertOps']!, qtyBaseSingleWarmup);
    await peer.singleInsert(warmSingles, <int>[]);
    expected += warmSingles.length;
    final singles = makeDataset(singleSamples(scale), qtyBaseSingle);
    final singleUs = <int>[];
    await peer.singleInsert(singles, singleUs);
    expected += singles.length;
    await assertCount(peer, expected, 'single insert');

    // -- 3. point read (warmup = repeated touches of sampled keys).
    await peer.pointRead(
        readIds.take(warmupConfig['pointReadOps']!).toList(), <int>[]);
    final readUs = <int>[];
    await peer.pointRead(readIds, readUs);

    // -- 4. range query.
    await peer.rangeQuery(scale, warmupConfig['rangeQueryOps']!, <int>[]);
    final rangeUs = <int>[];
    await peer.rangeQuery(scale, rangeSamples(scale), rangeUs);

    // -- 5. sorted top-K.
    await peer.sortedTopK(topK, warmupConfig['topKOps']!, scale, <int>[]);
    final topKUs = <int>[];
    await peer.sortedTopK(topK, topKSamples(scale), scale, topKUs);

    // -- 6. filtered count.
    await peer.filteredCount(warmupConfig['countFilteredOps']!, scale, <int>[]);
    final countUs = <int>[];
    await peer.filteredCount(countSamples(scale), scale, countUs);

    // -- 7. pagination.
    await peer
        .pagination(pageSize, warmupConfig['paginationPages']!, scale, <int>[]);
    final pageUs = <int>[];
    await peer.pagination(pageSize, pageCount(scale), scale, pageUs);

    // -- 8. point update (warmup overwritten by the measured pass).
    final updateIds = List.generate(
      updateSamples(scale),
      (_) => records[rnd.nextInt(scale)]['id'] as String,
    );
    await peer.pointUpdate(
        updateIds.take(warmupConfig['pointUpdateOps']!).toList(),
        qtyBaseUpdateWarmup, <int>[]);
    final updateUs = <int>[];
    await peer.pointUpdate(updateIds, qtyBaseUpdate, updateUs);
    final finalUpdated = <String, Object?>{};
    for (var i = 0; i < updateIds.length; i++) {
      finalUpdated[updateIds[i]] = qtyBaseUpdate + i;
    }
    final spotUpdate = <String, Object?>{};
    final updateEntries = finalUpdated.entries.toList();
    for (var i = 0; i < min(20, updateEntries.length); i++) {
      spotUpdate[updateEntries[i].key] = updateEntries[i].value;
    }
    await assertQty(peer, spotUpdate, 'point update');

    // -- 9. delete: warmup scratch + the single-insert phase records.
    final warmDel =
        makeDataset(warmupConfig['deleteOps']!, qtyBaseDeleteWarmup);
    await peer.singleInsert(warmDel, <int>[]);
    expected += warmDel.length;
    await peer.delete(idsOf(warmDel), <int>[]);
    expected -= warmDel.length;
    final deleteIds = idsOf([...warmSingles, ...singles]);
    final deleteUs = <int>[];
    await peer.delete(deleteIds, deleteUs);
    expected -= deleteIds.length;
    await assertCount(peer, expected, 'delete');

    // -- 10. transactions (n/s for peers without a transaction API).
    final txnUs = <int>[];
    if (peer.supportsTransactions) {
      final warmTxns = makeDataset(
          warmupConfig['transactions']! * putsPerTxn, qtyBaseTxnWarmup);
      await peer.transactions(putsPerTxn, warmTxns, <int>[]);
      expected += warmTxns.length;
      final txns = makeDataset(txnCount(scale) * putsPerTxn, qtyBaseTxn);
      await peer.transactions(putsPerTxn, txns, txnUs);
      expected += txns.length;
      await assertCount(peer, expected, 'transactions');
    }

    // -- 11. concurrent ops (10 reads + 5 writes per round, Future.wait).
    final totalConcurrentRounds =
        warmupConfig['concurrentRounds']! + concurrentRounds;
    final cReadIds = List.generate(
      totalConcurrentRounds * concurrentReadsPerRound,
      (_) => records[rnd.nextInt(scale)]['id'] as String,
    );
    final cWriteIds = <String>[];
    for (var r = 0; r < totalConcurrentRounds; r++) {
      final roundIds = <String>{};
      while (roundIds.length < concurrentWritesPerRound) {
        roundIds.add(records[rnd.nextInt(scale)]['id'] as String);
      }
      cWriteIds.addAll(roundIds);
    }
    final cReadUs = <int>[];
    final cWriteUs = <int>[];
    await peer.concurrentOps(
      totalConcurrentRounds,
      concurrentReadsPerRound,
      concurrentWritesPerRound,
      cReadIds,
      cWriteIds,
      qtyBaseConcurrent,
      cReadUs,
      cWriteUs,
    );
    final finalConcurrent = <String, Object?>{};
    for (var r = 0; r < totalConcurrentRounds; r++) {
      for (var w = 0; w < concurrentWritesPerRound; w++) {
        final idx = r * concurrentWritesPerRound + w;
        finalConcurrent[cWriteIds[idx]] = qtyBaseConcurrent + idx;
      }
    }
    final concurrentSpot = <String, Object?>{};
    final cEntries = finalConcurrent.entries.toList();
    for (var i = 0; i < min(10, cEntries.length); i++) {
      concurrentSpot[cEntries[i].key] = cEntries[i].value;
    }
    await assertQty(peer, concurrentSpot, 'concurrent writes');

    // -- 12. final full count before teardown.
    await assertCount(peer, expected, 'final count');

    final measuredReadUs = readUs;
    final measuredUpdateUs = updateUs;
    stdout.writeln('DONE '
        '(insert ${insertMs}ms | read p50 '
        '${LatencyStats.fromMicros(measuredReadUs).format(LatencyStats.fromMicros(measuredReadUs).p50Us)} | '
        'update p50 '
        '${LatencyStats.fromMicros(measuredUpdateUs).format(LatencyStats.fromMicros(measuredUpdateUs).p50Us)} | '
        'verified count=$expected)');

    final notes = List<String>.from(peer.rowNotes);
    if (!peer.supportsTransactions) {
      notes.add('transactions: n/s (no transaction API)');
    }
    if (!peer.hasSecondaryIndex) {
      notes.add('secondary index: none (queries are scans)');
    }

    return BenchmarkResult(
      peer: peer.name,
      scale: scale,
      insertMs: insertMs,
      pointRead: LatencyStats.fromMicros(readUs),
      rangeQuery: LatencyStats.fromMicros(rangeUs),
      pointUpdate: LatencyStats.fromMicros(updateUs),
      singleInsert: LatencyStats.fromMicros(singleUs),
      delete: LatencyStats.fromMicros(deleteUs),
      transactions:
          peer.supportsTransactions ? LatencyStats.fromMicros(txnUs) : null,
      pagination: LatencyStats.fromMicros(pageUs),
      topK: LatencyStats.fromMicros(topKUs),
      countFiltered: LatencyStats.fromMicros(countUs),
      concurrentRead: LatencyStats.fromMicros(cReadUs
          .skip(warmupConfig['concurrentRounds']! * concurrentReadsPerRound)
          .toList()),
      concurrentWrite: LatencyStats.fromMicros(cWriteUs
          .skip(warmupConfig['concurrentRounds']! * concurrentWritesPerRound)
          .toList()),
      maxRows: peer.maxRows,
      notes: notes,
    );
  } catch (e, st) {
    stdout.writeln('FAILED: $e');
    stderr.writeln('  ${peer.name} @ $scale failed: $e');
    stderr.writeln(st);
    return BenchmarkResult.error(peer.name, scale, e);
  } finally {
    try {
      await peer.teardown();
    } catch (_) {}
  }
}

// -------------------------------------------------------------- console -----
/// ANSI escape helper; disabled for non-TTY output or `--no-color`.
class Color {
  final bool enabled;
  const Color(this.enabled);

  String _wrap(String s, int code) => enabled ? '\x1B[${code}m$s\x1B[0m' : s;
  String green(String s) => _wrap(s, 32);
  String red(String s) => _wrap(s, 31);
  String yellow(String s) => _wrap(s, 33);
  String cyan(String s) => _wrap(s, 36);
  String gray(String s) => _wrap(s, 90);
  String bold(String s) => _wrap(s, 1);
}

late Color color;

String _cell(String text, int width) => text.padRight(width);

/// Core table: the original four phases, kept byte-compatible in semantics.
void printCoreTable(String title, List<BenchmarkResult> results) {
  stdout.writeln();
  stdout.writeln(
      '========================================================================================================================');
  stdout.writeln(' ${color.bold(title)}');
  stdout.writeln(
      '========================================================================================================================');
  stdout.writeln(
    '| ${_cell('Database Peer', 18)} '
    '| ${_cell('Bulk Insert', 12)} '
    '| ${_cell('Point Read (p50 / p95 / p99)', 30)} '
    '| ${_cell('Range Query (p50 / p95 / p99)', 30)} '
    '| ${_cell('Point Update (p50 / p95 / p99)', 30)} |',
  );
  stdout.writeln(
      '|--------------------|--------------|--------------------------------|--------------------------------|--------------------------------|');

  for (final r in results) {
    if (r.error != null) {
      final msg = r.error!.length > 30 ? r.error!.substring(0, 30) : r.error!;
      stdout.writeln(
        '| ${color.red(_cell(r.peer, 18))} '
        '| ${color.red(_cell('ERROR', 12))} '
        '| ${color.red(_cell(msg, 30))} '
        '| ${_cell('', 30)} | ${_cell('', 30)} |',
      );
      continue;
    }
    final insertStr = '${r.insertMs}ms';
    final readStr =
        '${r.pointRead.p50Us}µs / ${r.pointRead.p95Us}µs / ${r.pointRead.p99Us}µs';
    final rangeStr =
        '${r.rangeQuery.p50Us}µs / ${r.rangeQuery.p95Us}µs / ${r.rangeQuery.p99Us}µs';
    final updateStr =
        '${r.pointUpdate.p50Us}µs / ${r.pointUpdate.p95Us}µs / ${r.pointUpdate.p99Us}µs';

    stdout.writeln(
      '| ${color.cyan(_cell(r.peer, 18))} '
      '| ${insertStr.padLeft(12)} '
      '| ${_cell(readStr, 30)} '
      '| ${_cell(rangeStr, 30)} '
      '| ${_cell(updateStr, 30)} |',
    );
  }
  stdout.writeln(
      '========================================================================================================================');
}

/// New-phases table (schemaVersion 2 phases).
void printExtendedTable(List<BenchmarkResult> results) {
  const w = 23;
  stdout.writeln();
  stdout.writeln(
      '${color.bold('Extended phases')} (p50 / p95 / p99 µs; txns = per txn, pagination = per page):');
  stdout.writeln('-' * (18 + w * 8 + 2));
  stdout.writeln(
    '| ${_cell('Database Peer', 18)} '
    '| ${_cell('Single Insert', w)} '
    '| ${_cell('Delete', w)} '
    '| ${_cell('Transactions', w)} '
    '| ${_cell('Pagination', w)} '
    '| ${_cell('Top-K', w)} '
    '| ${_cell('Count (filter)', w)} '
    '| ${_cell('Concur. Read', w)} '
    '| ${_cell('Concur. Write', w)} |',
  );
  stdout.writeln('-' * (18 + w * 8 + 2));

  String cell3(LatencyStats? s) => s == null || s.count == 0
      ? 'n/s'
      : '${s.p50Us} / ${s.p95Us} / ${s.p99Us}';

  for (final r in results) {
    if (r.error != null) {
      stdout.writeln('| ${color.red(_cell(r.peer, 18))} | '
          '${color.red(_cell('ERROR', w))} ${_cell('', w * 6)} |');
      continue;
    }
    stdout.writeln(
      '| ${color.cyan(_cell(r.peer, 18))} '
      '| ${_cell(cell3(r.singleInsert), w)} '
      '| ${_cell(cell3(r.delete), w)} '
      '| ${_cell(cell3(r.transactions), w)} '
      '| ${_cell(cell3(r.pagination), w)} '
      '| ${_cell(cell3(r.topK), w)} '
      '| ${_cell(cell3(r.countFiltered), w)} '
      '| ${_cell(cell3(r.concurrentRead), w)} '
      '| ${_cell(cell3(r.concurrentWrite), w)} |',
    );
  }
  stdout.writeln('-' * (18 + w * 8 + 2));
}

/// Horizontal bar graph for one phase (linear scale, log-friendly labels).
void printBars(String phase,
    List<({String label, double value, String display})> entries) {
  final valid = entries.where((e) => e.value > 0).toList();
  if (valid.isEmpty) return;
  final maxV = valid.map((e) => e.value).reduce(max);
  final best = valid.reduce((a, b) => a.value <= b.value ? a : b);
  final sorted = List.of(valid)..sort((a, b) => b.value.compareTo(a.value));
  stdout.writeln();
  stdout.writeln(' ${color.bold(phase)} (lower is better)');
  for (final e in sorted) {
    final ratio = e.value / maxV;
    final filled = max(1, (ratio * 40).round());
    final bar = '█' * filled + '░' * (40 - filled);
    final isBest = identical(e, best);
    final isWorst = identical(e, sorted.first);
    var label = _cell(e.label, 18);
    if (e.label == 'LocalPocket') {
      label = color.cyan(color.bold(_cell(e.label, 18)));
    }
    var barStr = bar;
    var display = _cell(e.display, 14);
    if (isBest) {
      barStr = color.green(bar);
      display = color.green(display);
    } else if (isWorst) {
      display = color.red(display);
    }
    stdout.writeln('  $label $barStr $display');
  }
}

/// Collects a bar entry for every peer and phase.
Map<String, List<({String label, double value, String display})>> barData(
    List<BenchmarkResult> results) {
  final data = <String, List<({String label, double value, String display})>>{};
  void add(String phase,
      List<({String label, double value, String display})> entries) {
    data[phase] = entries;
  }

  double p50(LatencyStats? s) =>
      (s == null || s.count == 0) ? 0 : s.p50Us.toDouble();

  add('Bulk insert (total)', [
    for (final r in results)
      if (r.error == null)
        (
          label: r.peer,
          value: r.insertMs.toDouble(),
          display: '${r.insertMs}ms'
        ),
  ]);
  add('Point read p50', [
    for (final r in results)
      if (r.error == null)
        (
          label: r.peer,
          value: p50(r.pointRead),
          display: r.pointRead.format(r.pointRead.p50Us)
        ),
  ]);
  add('Range query p50', [
    for (final r in results)
      if (r.error == null)
        (
          label: r.peer,
          value: p50(r.rangeQuery),
          display: r.rangeQuery.format(r.rangeQuery.p50Us)
        ),
  ]);
  add('Point update p50', [
    for (final r in results)
      if (r.error == null)
        (
          label: r.peer,
          value: p50(r.pointUpdate),
          display: r.pointUpdate.format(r.pointUpdate.p50Us)
        ),
  ]);
  add('Single insert p50', [
    for (final r in results)
      if (r.error == null && r.singleInsert != null)
        (
          label: r.peer,
          value: p50(r.singleInsert),
          display: r.singleInsert!.format(r.singleInsert!.p50Us)
        ),
  ]);
  add('Delete p50', [
    for (final r in results)
      if (r.error == null && r.delete != null)
        (
          label: r.peer,
          value: p50(r.delete),
          display: r.delete!.format(r.delete!.p50Us)
        ),
  ]);
  add('Transaction p50', [
    for (final r in results)
      if (r.error == null && r.transactions != null)
        (
          label: r.peer,
          value: p50(r.transactions),
          display: r.transactions!.format(r.transactions!.p50Us)
        ),
  ]);
  add('Pagination p50', [
    for (final r in results)
      if (r.error == null && r.pagination != null)
        (
          label: r.peer,
          value: p50(r.pagination),
          display: r.pagination!.format(r.pagination!.p50Us)
        ),
  ]);
  add('Top-K p50', [
    for (final r in results)
      if (r.error == null && r.topK != null)
        (
          label: r.peer,
          value: p50(r.topK),
          display: r.topK!.format(r.topK!.p50Us)
        ),
  ]);
  add('Filtered count p50', [
    for (final r in results)
      if (r.error == null && r.countFiltered != null)
        (
          label: r.peer,
          value: p50(r.countFiltered),
          display: r.countFiltered!.format(r.countFiltered!.p50Us)
        ),
  ]);
  add('Concurrent read p50', [
    for (final r in results)
      if (r.error == null && r.concurrentRead != null)
        (
          label: r.peer,
          value: p50(r.concurrentRead),
          display: r.concurrentRead!.format(r.concurrentRead!.p50Us)
        ),
  ]);
  add('Concurrent write p50', [
    for (final r in results)
      if (r.error == null && r.concurrentWrite != null)
        (
          label: r.peer,
          value: p50(r.concurrentWrite),
          display: r.concurrentWrite!.format(r.concurrentWrite!.p50Us)
        ),
  ]);
  return data;
}

/// Per-phase leaderboard: how often each peer is #1 at a phase.
void printLeaderboard(List<BenchmarkResult> results) {
  final bars = barData(results);
  final wins = <String, int>{};
  for (final r in results) {
    wins.putIfAbsent(r.peer, () => 0);
  }
  for (final entries in bars.values) {
    final valid = entries.where((e) => e.value > 0).toList();
    if (valid.length < 2) continue;
    valid.sort((a, b) => a.value.compareTo(b.value));
    wins[valid.first.label] = wins[valid.first.label]! + 1;
  }
  final ranked = wins.keys.toList()
    ..sort((a, b) => wins[b]!.compareTo(wins[a]!));
  stdout.writeln();
  stdout.writeln(
      ' ${color.bold('Leaderboard')} — phase wins (#1 finishes) at this scale');
  for (final name in ranked) {
    final w = wins[name]!;
    final line = '${name.padRight(18)} $w win(s)';
    if (name == 'LocalPocket') {
      stdout.writeln('   ${color.cyan(color.bold(line))}');
    } else if (w == 0) {
      stdout.writeln('   ${color.gray(line)}');
    } else if (w == wins[ranked.first]) {
      stdout.writeln('   ${color.green(line)}');
    } else {
      stdout.writeln('   $line');
    }
  }
}

/// Overall verdict: mean normalized cost across all phases (lower = better).
void printVerdict(List<BenchmarkResult> results) {
  final bars = barData(results);
  final scores = <String, double>{};
  final validPhases =
      bars.values.where((e) => e.any((x) => x.value > 0)).toList();
  for (final r in results) {
    if (r.error != null) continue;
    var total = 0.0;
    var n = 0;
    for (final entries in validPhases) {
      final maxV = entries.map((e) => e.value).reduce(max);
      final own = entries.where((e) => e.label == r.peer).toList();
      if (own.isEmpty || maxV <= 0) continue;
      total += own.first.value / maxV;
      n++;
    }
    if (n > 0) scores[r.peer] = total / n;
  }
  final ranked = scores.keys.toList()
    ..sort((a, b) => scores[a]!.compareTo(scores[b]!));
  stdout.writeln();
  stdout.writeln(
      ' ${color.bold('Overall verdict')} — mean normalized cost (1.0 = slowest, lower is better)');
  for (var i = 0; i < ranked.length; i++) {
    final name = ranked[i];
    final s = scores[name]!.toStringAsFixed(2);
    var line = '${(i + 1).toString().padLeft(2)}. ${name.padRight(18)} $s';
    if (i == 0) line = color.green(line);
    if (name == 'LocalPocket') line = color.cyan(color.bold(line));
    stdout.writeln('   $line');
  }
}

/// Global caveat block so raw numbers are not misread.
void printCaveats() {
  stdout.writeln();
  stdout.writeln(
      '========================================================================================================================');
  stdout.writeln(' ${color.bold('HOW TO READ THESE NUMBERS')}');
  stdout.writeln(
      '========================================================================================================================');
  stdout.writeln(' • Storage: every peer is file-backed.');
  stdout.writeln(
      ' • Secondary index on qty: LocalPocket, SQLite (vanilla), Drift, Isar.');
  stdout.writeln(
      '   Sembast and Hive have none — their range/top-K/count numbers are full scans.');
  stdout.writeln(
      ' • Transactions: all peers except Hive (Hive is reported as n/s).');
  stdout.writeln(
      ' • "Concurrent" = futures interleaved on ONE isolate. Sync engines serialize;');
  stdout.writeln(
      '   LocalPocket serializes writes through its write queue and group-commits.');
  stdout.writeln(
      ' • LocalPocket write costs include an outbox intent row + sync-state row per');
  stdout.writeln(
      '   mutation (local-first invariant, NORMAL durability). Other peers write only');
  stdout.writeln('   their domain row.');
  stdout.writeln(
      ' • Warmups: every phase runs unmeasured warmup ops before timing.');
  stdout.writeln(
      ' • Isar: point read/update via unique recordId index; range/top-K/count via qty index.');
  stdout.writeln(
      '========================================================================================================================');
}

// ------------------------------------------------------------------ main -----
Future<void> main(List<String> args) async {
  color = Color(stdout.supportsAnsiEscapes && !args.contains('--no-color'));
  final scales = [1000, 10000, 100000];
  final allResults = <BenchmarkResult>[];
  final skipped = <SkippedRun>[];

  stdout.writeln(
      'Starting Comparative Benchmark: LocalPocket vs Peers (Drift, Sembast, SQLite Vanilla, Hive, Isar)');
  stdout.writeln('Scales: 1K (1,000), 10K (10,000), 100K (100,000) records');
  stdout.writeln(
      'Warmups: ${warmupConfig.entries.map((e) => '${e.key}=${e.value}').join(', ')}');
  printCaveats();

  for (final scale in scales) {
    final scaleLabel = scale >= 1000 ? '${scale ~/ 1000}K' : '$scale';
    stdout.writeln('\n>>> Running scale: $scaleLabel ($scale records)...');

    final scaleResults = <BenchmarkResult>[];
    for (final p in buildPeers()) {
      final cap = p.maxRows;
      if (cap != null && scale > cap) {
        final line =
            '  SKIP ${p.name} @ $scaleLabel: scale $scale exceeds maxRows cap $cap';
        stdout.writeln(color.yellow(line));
        skipped.add(SkippedRun(p.name, scale, cap));
        continue;
      }
      final res = await runBenchmarkForPeer(p, scale);
      scaleResults.add(res);
    }

    printCoreTable('Comparative Results at Scale: $scaleLabel ($scale records)',
        scaleResults);
    printExtendedTable(scaleResults);
    final bars = barData(scaleResults);
    for (final entry in bars.entries) {
      printBars(entry.key, entry.value);
    }
    printLeaderboard(scaleResults);
    printVerdict(scaleResults);

    for (final r in scaleResults) {
      if (r.notes.isNotEmpty) {
        stdout.writeln(
            '  ${color.gray('note')} ${r.peer}: ${r.notes.join('; ')}');
      }
    }

    allResults.addAll(scaleResults);
  }

  final payload = <String, Object?>{
    'benchmark': 'localpocket/comparative_benchmark',
    'schemaVersion': schemaVersion,
    'meta': buildMeta(sqliteVersion: raw_sqlite3.sqlite3.version.libVersion),
    'caveats': buildCaveats(),
    'warmup': warmupConfig,
    'samples': {
      for (final scale in scales) '$scale': buildSamples(scale),
    },
    'skipped': skipped.map((s) => s.toJson()).toList(),
    'results': allResults.map((r) => r.toJson()).toList(),
  };
  final resultFile = await writeJsonResults('comparative', payload);
  stdout.writeln('\nResults written to ${resultFile.path}');

  stdout.writeln('\nComparative Benchmark Complete!');
}
