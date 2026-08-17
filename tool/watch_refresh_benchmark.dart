import 'dart:convert';

import 'package:localpocket/localpocket.dart';
import 'package:localpocket/src/core/compiled_query_runner.dart';

/// Compares watch-refresh cost at growing result sizes.
///
/// The web `_CompiledWatcher` re-executes the plan and hashes every result row
/// on each change. The native `QueryWatcher` does the same: it re-runs the
/// query (`fetch()`) and hashes every row (`_digestOf`). This benchmark
/// quantifies both paths at N = 100 / 1k / 10k to confirm the shared O(N)
/// refresh semantics and the constant factors, before relying on compiled
/// watches for large result sets.
///
/// Run: `dart run tool/watch_refresh_benchmark.dart`
Future<void> main() async {
  final schema = CollectionSchema<Object?>(
    name: 'items',
    version: 1,
    fields: [
      Field.text('name', required: true),
      Field.int('v'),
    ],
  );
  final pocket = await LocalPocket.open(path: ':memory:', stores: [schema]);
  try {
    final col = pocket.collection('items');

    String digest(List<Map<String, Object?>> rows) =>
        sha256Hex([for (final r in rows) canonicalize(r)].join('|'));

    final results = <Map<String, Object?>>[];
    for (final n in [100, 1000, 10000]) {
      final prefix = 'b$n';
      for (var i = 0; i < n; i++) {
        await col.put({
          'id': '$prefix${i.toString().padLeft(15 - prefix.length, '0')}',
          'name': '$prefix-name-$i',
          'v': i,
        });
      }

      // Native-style refresh: QueryBuilder.fetch() + full digest.
      final nativeQ = col.query().where('name', startsWith: prefix).limit(n);
      var sw = Stopwatch()..start();
      for (var i = 0; i < 20; i++) {
        final page = await nativeQ.fetch();
        final rows = page.items;
        if (digest(rows).isEmpty) throw StateError('empty native page');
      }
      sw.stop();
      final nativeUs = sw.elapsedMicroseconds / 20;

      // Compiled-style refresh: raw plan SQL + decode + full digest.
      final core = QueryBuilder.compileOnly(schema)
        ..where('name', startsWith: prefix)
        ..limit(n);
      final plan = core.compilePlan(limitOverride: n);
      sw = Stopwatch()..start();
      for (var i = 0; i < 20; i++) {
        final res = await executeCompiledQuery(
          pocket,
          (sql, args) => pocket.traceQuery(sql, args),
          plan,
          pageLimit: n,
        );
        final rows = (res['items'] as List).cast<Map<String, Object?>>();
        if (digest(rows).isEmpty) throw StateError('empty compiled page');
      }
      sw.stop();
      final compiledUs = sw.elapsedMicroseconds / 20;

      results.add({
        'rows': n,
        'nativeRefreshAvgUs': nativeUs.round(),
        'compiledRefreshAvgUs': compiledUs.round(),
        'compiledVsNativeRatio': (compiledUs / nativeUs).toStringAsFixed(2),
      });
    }

    print(const JsonEncoder.withIndent('  ').convert(results));
  } finally {
    await pocket.close();
  }
}
