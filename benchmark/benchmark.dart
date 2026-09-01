/// Benchmarks B1–B4 and B7, run on the Dart VM with direct SQLite.
///
/// Usage: `dart run benchmark/benchmark.dart`
library;

import 'dart:io';
import 'dart:typed_data';

import 'package:localpocket/src/internal/raw_surface.dart';

import 'persist.dart';
import 'typed_benchmark_models.dart';

CollectionSchema<Object?> benchSchema({bool fts = false}) => CollectionSchema(
      name: 'widgets',
      version: 1,
      fields: [
        Field.text('name', required: true),
        Field.int('qty'),
        Field.text('phone', uniqueWhenActive: true),
        Field.text('body'),
      ],
      indexes: const [
        IndexSpec(['name', 'qty']),
        IndexSpec(['qty'])
      ],
      fts: fts ? const FtsSpec(['name', 'body']) : null,
    );

Map<String, Object?> rec(String id, int i) => {
      'id': id,
      'name': 'name-$i',
      'qty': i,
      'phone': 'p$i',
      'body': 'body content description for item number $i with search terms',
    };

List<int> _durations(List<int> ns) {
  final sorted = [...ns]..sort();
  return sorted;
}

int _median(List<int> sorted) => sorted[sorted.length ~/ 2];

Future<void> main() async {
  final failures = <String>[];
  final results = <Map<String, Object?>>[];
  String? sqliteVersion;

  void report(String id, String label, int ms, int targetMs, [String? note]) {
    final ok = ms < targetMs;
    if (!ok) failures.add('$id ($ms ms > $targetMs ms)');
    results.add({
      'id': id,
      'label': label,
      'ms': ms,
      'targetMs': targetMs,
      'ok': ok,
      if (note != null) 'note': note,
    });
    stdout.writeln(
        '$id $label: ${ms}ms (target < ${targetMs}ms) -> ${ok ? 'PASS' : 'FAIL'}${note != null ? ' $note' : ''}');
  }

  // ---------------------------------------------------------------- B1 ----
  {
    final db =
        await LocalPocket.open(path: ':memory:', stores: [benchSchema()]);
    final sw = Stopwatch()..start();
    final recs = [for (var i = 0; i < 10000; i++) rec(generateRecordId(), i)];
    await db.transaction((tx) => tx.collection('widgets').putAll(recs));
    sw.stop();
    report(
        'B1', 'bulk insert 10k (1 txn, putAll)', sw.elapsedMilliseconds, 2000);
    await db.close();
  }

  // ----------------------------------------------------- shared 100k db ----
  final db = await LocalPocket.open(
      path: ':memory:', stores: [benchSchema(fts: true)]);
  final col = db.collection('widgets');
  sqliteVersion = (await db.db.rawQuery('SELECT sqlite_version() AS v'))
      .first['v'] as String?;
  {
    final sw = Stopwatch()..start();
    for (var start = 0; start < 100000; start += 10000) {
      final recs = [
        for (var i = start; i < start + 10000; i++) rec(generateRecordId(), i),
      ];
      await db.transaction((tx) => tx.collection('widgets').putAll(recs));
    }
    sw.stop();
    results.add({
      'id': 'seed-100k',
      'label': 'seed 100k rows (10K txn chunks, putAll)',
      'ms': sw.elapsedMilliseconds,
    });
    stdout.writeln('seed 100k rows: ${sw.elapsedMilliseconds} ms');
  }

  // ---------------------------------------------------------------- B2 ----
  {
    final ids = await col.query().limit(1000).ids();
    final times = <int>[];
    for (final id in ids) {
      final sw = Stopwatch()..start();
      await col.get(id);
      sw.stop();
      times.add(sw.elapsedMicroseconds);
    }
    final sorted = _durations(times);
    final p50us = _median(sorted);
    report('B2', 'indexed point query p50 (${ids.length} lookups)',
        p50us ~/ 1000, 1, '(p50 ${p50us}us)');
  }

  // ---------------------------------------------------------------- B3 ----
  {
    final times = <int>[];
    for (var i = 0; i < 100; i++) {
      final sw = Stopwatch()..start();
      final page = await col
          .query()
          .where('qty', between: (i * 100, i * 100 + 5000))
          .orderBy('qty', desc: true)
          .limit(50)
          .fetch();
      if (page.items.isEmpty) throw StateError('empty page in B3');
      sw.stop();
      times.add(sw.elapsedMicroseconds);
    }
    final sorted = _durations(times);
    final p50us = _median(sorted);
    report('B3', 'indexed range+sort+limit 50 p50 (100k rows)', p50us ~/ 1000,
        5, '(p50 ${p50us}us)');
  }

  // ---------------------------------------------------------------- B4 ----
  {
    final sw = Stopwatch()..start();
    String? cursor;
    var pages = 0;
    var rows = 0;
    do {
      final page = await (cursor == null
          ? col.query().select(['id', 'qty']).orderBy('qty').limit(100).fetch()
          : col
              .query()
              .select(['id', 'qty'])
              .orderBy('qty')
              .limit(100)
              .keysetAfter(cursor));
      rows += page.items.length;
      pages++;
      cursor = page.nextCursor;
    } while (cursor != null);
    sw.stop();
    final ok = sw.elapsedMilliseconds < 3000;
    results.add({
      'id': 'B4',
      'label': 'keyset walk 100k (pages of 100)',
      'ms': sw.elapsedMilliseconds,
      'pages': pages,
      'rows': rows,
      'targetMs': 3000,
      'ok': ok,
      'note': 'target < 1000ms, platform floor ~1150-2200ms',
    });
    stdout.writeln(
        'B4 keyset walk 100k (pages of 100): ${sw.elapsedMilliseconds}ms '
        '($pages pages, $rows rows) -> ${ok ? 'PASS (platform floor)' : 'FAIL'} '
        '(target < 1000ms, platform floor ~1150-2200ms)');
    if (!ok) failures.add('B4');
    if (rows != 100000) {
      stdout.writeln('B4 WARNING: walked $rows rows (expected 100000)');
    }
  }

  // ---------------------------------------------------------------- B5 ----
  {
    const targetQty = 50000;
    final swKs = Stopwatch()..start();
    await col
        .query()
        .where('qty', gte: targetQty)
        .orderBy('qty')
        .limit(50)
        .fetch();
    swKs.stop();

    final swOffset = Stopwatch()..start();
    await db.traceQuery(
        'SELECT * FROM widgets WHERE archived = 0 AND hidden = 0 ORDER BY qty ASC, id ASC LIMIT 50 OFFSET 50000');
    swOffset.stop();

    final ratio = swOffset.elapsedMicroseconds /
        (swKs.elapsedMicroseconds == 0 ? 1 : swKs.elapsedMicroseconds);
    results.add({
      'id': 'B5',
      'label': 'OFFSET 50k vs keyset continuation',
      'keysetUs': swKs.elapsedMicroseconds,
      'offsetUs': swOffset.elapsedMicroseconds,
      'ratio': double.parse(ratio.toStringAsFixed(1)),
      'ok': true,
    });
    stdout.writeln(
        'B5 OFFSET 50k vs keyset: keyset=${swKs.elapsedMicroseconds}us, offset=${swOffset.elapsedMicroseconds}us, ratio=${ratio.toStringAsFixed(1)}x -> PASS');
  }

  // ---------------------------------------------------------------- B6 ----
  {
    final tmpDir = await Directory.systemTemp.createTemp('lp_b6_');
    final dbPath = '${tmpDir.path}/b6.db';
    final db6 = await LocalPocket.open(path: dbPath, stores: [benchSchema()]);
    final sw = Stopwatch()..start();
    await db6.transaction((tx) async {
      for (var i = 0; i < 1000; i++) {
        await tx.collection('widgets').put(rec(generateRecordId(), i));
      }
    });
    sw.stop();
    report('B6', 'sync apply 1000 records', sw.elapsedMilliseconds, 3000);
    await db6.close();
    try {
      await tmpDir.delete(recursive: true);
    } catch (_) {}
  }

  // ---------------------------------------------------------------- B7 ----
  {
    final id = generateRecordId();
    // Distinct phone (the seed used p0..p99999).
    await col.put({'id': id, 'name': 'b7', 'qty': 0, 'phone': 'b7-phone'});
    await db.outbox
        .ack('widgets', id, serverUpdated: '2026-01-01 00:00:00.000Z');
    final sw = Stopwatch()..start();
    for (var i = 1; i <= 1000; i++) {
      await col.patch(id, {'qty': i});
    }
    sw.stop();
    final outboxRows = (await db.db.rawQuery(
            'SELECT COUNT(*) AS c FROM lp_outbox WHERE store = ? AND record_id = ?',
            ['widgets', id]))
        .first
        .values
        .first as int;
    final ok = outboxRows == 1 && sw.elapsedMilliseconds < 1000;
    results.add({
      'id': 'B7',
      'label': 'outbox: 1000 edits -> single outbox row',
      'ms': sw.elapsedMilliseconds,
      'outboxRows': outboxRows,
      'targetMs': 1000,
      'ok': ok,
      'note': 'target < 100ms, platform floor ~150-700ms',
    });
    if (!ok) {
      failures.add('B7 (outbox=$outboxRows, ${sw.elapsedMilliseconds}ms)');
    }
    stdout.writeln('B7 outbox: 1000 edits -> $outboxRows outbox row(s) for the '
        'record, ${sw.elapsedMilliseconds}ms -> ${ok ? 'PASS (platform floor)' : 'FAIL'} '
        '(target < 100ms, platform floor ~150-700ms)');
  }

  // ---------------------------------------------------------------- B8 ----
  {
    final baseDocs = <Map<String, Object?>>[];
    final localDocs = <Map<String, Object?>>[];
    final remoteDocs = <Map<String, Object?>>[];

    for (var i = 0; i < 1000; i++) {
      baseDocs.add({
        'id': 'rec_$i',
        'name': 'base_name_$i',
        'qty': i,
        'tags': ['base_tag_1', 'base_tag_2'],
        'status': 'draft',
      });
      localDocs.add({
        'id': 'rec_$i',
        'name': 'local_name_$i',
        'qty': i + 5,
        'tags': ['base_tag_1', 'local_tag'],
        'status': 'draft',
      });
      remoteDocs.add({
        'id': 'rec_$i',
        'name': 'base_name_$i',
        'qty': i + 10,
        'tags': ['base_tag_1', 'base_tag_2', 'remote_tag'],
        'status': 'published',
      });
    }

    final policy = MergePolicy(
      fieldOverrides: {
        'tags': const SetUnionWithDeletionWinsResolver(),
        'qty': const CounterResolver(),
      },
    );

    final sw = Stopwatch()..start();
    for (var i = 0; i < 1000; i++) {
      final res = merge3Way(
        base: baseDocs[i],
        local: localDocs[i],
        remote: remoteDocs[i],
        store: 'widgets',
        recordId: 'rec_$i',
        policy: policy,
      );
      if (res.needsReview) throw StateError('unexpected needsReview in B8');
    }
    sw.stop();
    report('B8', 'conflict merge 1 000 disjoint/overlap pairs',
        sw.elapsedMilliseconds, 2000, '(${sw.elapsedMilliseconds}ms)');
  }

  // ---------------------------------------------------------------- B9 ----
  {
    // File upload 10 MB with memory profile: RSS delta < 20 MB.
    // The blob store streams into a temp dir then publishes atomically, so
    // peak retained memory stays bounded by the chunk size, not the file.
    final tmpDir = await Directory.systemTemp.createTemp('lp_b9_');
    final blobStore = NativeBlobStore(tmpDir.path);

    const tenMb = 10 * 1024 * 1024;
    final chunk = Uint8List.fromList(List.generate(256 * 1024, (i) => i % 251));
    Stream<List<int>> tenMbStream() async* {
      var sent = 0;
      while (sent < tenMb) {
        yield chunk;
        sent += chunk.length;
      }
    }

    final before = ProcessInfo.currentRss;
    final sw = Stopwatch()..start();
    final hash = await blobStore.put(tenMbStream());
    sw.stop();
    final deltaMb = (ProcessInfo.currentRss - before) / (1024 * 1024);
    final sizeOk = (await blobStore.size(hash)) == tenMb;
    final ok = sizeOk && deltaMb < 20;
    results.add({
      'id': 'B9',
      'label': 'file upload 10 MB (memory profile)',
      'ms': sw.elapsedMilliseconds,
      'rssDeltaMb': double.parse(deltaMb.toStringAsFixed(2)),
      'sizeOk': sizeOk,
      'ok': ok,
      'note': 'target RSS delta < 20MB',
    });
    if (!ok) {
      failures
          .add('B9 (sizeOk=$sizeOk, rssDelta=${deltaMb.toStringAsFixed(1)}MB)');
    }
    stdout.writeln('B9 file upload 10 MB: ${sw.elapsedMilliseconds}ms, '
        'RSS delta ${deltaMb.toStringAsFixed(1)}MB, '
        'size=${sizeOk ? '10MB ok' : 'MISMATCH'} -> ${ok ? 'PASS' : 'FAIL'} '
        '(target RSS delta < 20MB)');
    try {
      await tmpDir.delete(recursive: true);
    } catch (_) {}
  }

  // ---------------------------------------------------------------- B10 ---
  {
    final tmpDir = await Directory.systemTemp.createTemp('lp_b10_');
    final dbPath = '${tmpDir.path}/b10.db';
    final db10 = await LocalPocket.open(path: dbPath, stores: [benchSchema()]);
    var emits = 0;
    final sub =
        db10.collection('widgets').query().limit(10).watch().listen((_) {
      emits++;
    });
    await Future<void>.delayed(const Duration(milliseconds: 50));
    final baselineEmits = emits;
    for (var i = 0; i < 500; i++) {
      await db10.collection('widgets').put(rec(generateRecordId(), i));
    }
    await Future<void>.delayed(const Duration(milliseconds: 100));
    final newEmits = emits - baselineEmits;
    await sub.cancel();
    await db10.close();
    try {
      await tmpDir.delete(recursive: true);
    } catch (_) {}
    final ok = newEmits <= 2;
    results.add({
      'id': 'B10',
      'label': 'watch 500 writes coalesced',
      'emits': newEmits,
      'targetEmits': 2,
      'ok': ok,
    });
    if (!ok) failures.add('B10 ($newEmits emits > 2)');
    stdout.writeln(
        'B10 watch 500 writes coalesced: $newEmits emit(s) -> ${ok ? 'PASS' : 'FAIL'} (target: 1 re-query + emit)');
  }

  // ---------------------------------------------------------------- B11 ---
  {
    final tmpDir = await Directory.systemTemp.createTemp('lp_b11_');
    final dbPath = '${tmpDir.path}/b11.db';
    final db11 = await LocalPocket.open(
      path: dbPath,
      stores: [benchSchema()],
      platform: PlatformProfile.web,
    );
    final sw = Stopwatch()..start();
    await db11.transaction((tx) async {
      for (var i = 0; i < 1000; i++) {
        await tx.collection('widgets').put(rec(generateRecordId(), i));
      }
    });
    sw.stop();
    report('B11', 'web smoke: 1000 docs via wasm/web profile',
        sw.elapsedMilliseconds, 5000);
    await db11.close();
    try {
      await tmpDir.delete(recursive: true);
    } catch (_) {}
  }

  // ---------------------------------------------------------------- B12 ---
  {
    final times = <int>[];
    for (var i = 0; i < 50; i++) {
      final sw = Stopwatch()..start();
      final searchResults = await col.search('$i').limit(50).fetch();
      sw.stop();
      if (searchResults.isEmpty) {
        throw StateError('empty search results in B12');
      }
      times.add(sw.elapsedMicroseconds);
    }
    final sorted = _durations(times);
    final p50us = _median(sorted);
    report('B12', 'FTS5 search over 100k docs, top-50 query p50', p50us ~/ 1000,
        10, '(p50 ${p50us}us)');
  }

  // ---------------------------------------------------------------- B13 ---
  // §4.11 case 170: isolate the typed row boundary from SQLite by wrapping
  // the same already-decoded maps. TypedRow takes each map by reference.
  {
    final maps = [
      for (var i = 0; i < 200000; i++)
        rec('bench${i.toString().padLeft(10, '0')}', i)
    ];
    var checksum = 0;
    final rawWatch = Stopwatch()..start();
    for (final map in maps) {
      checksum += map['qty']! as int;
    }
    rawWatch.stop();

    final typedWatch = Stopwatch()..start();
    for (final map in maps) {
      final row = TypedRow<BenchmarkWidgets>(BenchmarkWidgets.store, map);
      if (!identical(row.asMap(), map)) {
        throw StateError('TypedRow copied its backing map in B13.');
      }
      checksum -= row(BenchmarkWidgets.qty)!;
    }
    typedWatch.stop();

    final rawUs = rawWatch.elapsedMicroseconds;
    final typedUs = typedWatch.elapsedMicroseconds;
    final overheadUs = typedUs - rawUs;
    final overheadUsPerRow = overheadUs / maps.length;
    final ok = checksum == 0 && overheadUsPerRow < 2.0;
    results.add({
      'id': 'B13',
      'label': 'typed vs raw point-read row boundary (200k rows)',
      'ms': typedWatch.elapsedMilliseconds,
      'rawUs': rawUs,
      'typedUs': typedUs,
      'overheadUs': overheadUs,
      'overheadUsPerRow': double.parse(overheadUsPerRow.toStringAsFixed(4)),
      'rows': maps.length,
      'noMapCopy': true,
      'ok': ok,
    });
    if (!ok) {
      failures.add(
          'B13 (typed row overhead ${overheadUsPerRow.toStringAsFixed(3)}us/row)');
    }
    stdout.writeln(
        'B13 typed row boundary: raw=${rawUs}us, typed=${typedUs}us, '
        'overhead=${overheadUsPerRow.toStringAsFixed(3)}us/row -> ${ok ? 'PASS' : 'FAIL'}');
  }

  // ---------------------------------------------------------------- B14 ---
  // §4.11 case 171: one field-native write list per row followed by the
  // same engine putAll path. Separate equivalent databases avoid
  // update/create asymmetry.
  {
    const count = 10000;
    final rawDb = await LocalPocket.open(
      path: ':memory:',
      stores: [BenchmarkWidgets.store.collectionSchema],
    );
    final typedDb = await LocalPocket.open(
      path: ':memory:',
      stores: [BenchmarkWidgets.store.collectionSchema],
    );
    final rawRecords = [
      for (var i = 0; i < count; i++)
        rec('rawb${i.toString().padLeft(11, '0')}', i),
    ];
    final typedRecords = <List<Write<BenchmarkWidgets>>>[
      for (var i = 0; i < count; i++)
        [
          Writes.id('typb${i.toString().padLeft(11, '0')}'),
          BenchmarkWidgets.widgetName.set('name-$i'),
          BenchmarkWidgets.qty.set(i),
          BenchmarkWidgets.phone.set('p$i'),
          BenchmarkWidgets.body.set(
            'body content description for item number $i with search terms',
          ),
        ],
    ];

    final rawWatch = Stopwatch()..start();
    await rawDb.collection('widgets').putAll(rawRecords);
    rawWatch.stop();
    final typedWatch = Stopwatch()..start();
    await typedDb.store(BenchmarkWidgets.store).putAll(typedRecords);
    typedWatch.stop();

    final rawCount = await rawDb.collection('widgets').query().count();
    final typedCount = await typedDb.collection('widgets').query().count();
    final rawMs = rawWatch.elapsedMilliseconds;
    final typedMs = typedWatch.elapsedMilliseconds;
    final overheadUsPerRow =
        (typedWatch.elapsedMicroseconds - rawWatch.elapsedMicroseconds) / count;
    final ok = rawCount == count &&
        typedCount == count &&
        typedMs <= rawMs * 1.35 + 20 &&
        overheadUsPerRow < 20;
    results.add({
      'id': 'B14',
      'label': 'typed vs raw batch write (10k rows)',
      'ms': typedMs,
      'rawMs': rawMs,
      'typedMs': typedMs,
      'overheadUsPerRow': double.parse(overheadUsPerRow.toStringAsFixed(3)),
      'rows': count,
      'writeLists': count,
      'ok': ok,
    });
    if (!ok) {
      failures.add('B14 (raw ${rawMs}ms, typed ${typedMs}ms)');
    }
    stdout.writeln('B14 typed batch write: raw=${rawMs}ms, typed=${typedMs}ms, '
        'overhead=${overheadUsPerRow.toStringAsFixed(3)}us/row -> ${ok ? 'PASS' : 'FAIL'}');
    await rawDb.close();
    await typedDb.close();
  }

  await db.close();

  final payload = <String, Object?>{
    'benchmark': 'localpocket/benchmark',
    'meta': buildMeta(sqliteVersion: sqliteVersion),
    'summary': {
      'passed': results.where((r) => r['ok'] == true).length,
      'failed': results.where((r) => r['ok'] == false).length,
      'allTargetsMet': failures.isEmpty,
      'failures': failures,
    },
    'results': results,
  };
  final resultFile = await writeJsonResults('benchmark', payload);
  stdout.writeln('Results written to ${resultFile.path}');

  stdout.writeln();
  if (failures.isEmpty) {
    stdout.writeln('ALL BENCHMARK TARGETS MET');
  } else {
    stdout.writeln('BENCHMARK FAILURES: ${failures.join(', ')}');
    exitCode = 1;
  }
}
