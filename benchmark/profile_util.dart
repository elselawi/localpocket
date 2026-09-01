/// Shared helpers for the committed profiling micro-benchmarks
/// (`benchmark/profile_*.dart`). These are reproducible, persisted to
/// `benchmark/results/`, and intentionally kept dependency-light.
library;

import 'dart:io';

import 'package:localpocket/src/internal/raw_surface.dart';

import 'persist.dart';

CollectionSchema<Object?> profileSchema() => CollectionSchema(
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
    );

var _seq = 0;
Map<String, Object?> profileRec(String id, int i) {
  final n = _seq++;
  return {'id': id, 'name': 'name-$n', 'qty': n, 'phone': 'p$n'};
}

class Stats {
  Stats(this.count, this.p50, this.p95, this.p99, this.mean);

  factory Stats.from(List<int> us) {
    final s = [...us]..sort();
    int p(double q) => s[(s.length * q).floor().clamp(0, s.length - 1)];
    final mean = us.fold<int>(0, (a, b) => a + b) / us.length;
    return Stats(us.length, p(0.50), p(0.95), p(0.99), mean);
  }
  final int count;
  final int p50;
  final int p95;
  final int p99;
  final double mean;

  String get line =>
      'n=$count p50=${p50}us p95=${p95}us p99=${p99}us mean=${mean.toStringAsFixed(0)}us';

  Map<String, Object?> toJson() => {
        'count': count,
        'p50Us': p50,
        'p95Us': p95,
        'p99Us': p99,
        'meanUs': mean
      };
}

/// Statement counter for profiling (exact per-statement counts).
class StatementCounter {
  final List<String> stmts = [];

  void onExecute(String sql, List<Object?> params) {
    stmts.add(sql);
  }

  void onQuery(String sql, List<Object?> params) {
    stmts.add(sql);
  }

  void clear() => stmts.clear();

  int get count => stmts.length;
  int countWhere(bool Function(String) f) => stmts.where(f).length;
}

/// Writes a profile report as a timestamped JSON under `benchmark/results/`.
Future<File> persistProfile(String name, Map<String, Object?> payload) => writeJsonResults(name, {
    'benchmark': 'localpocket/profile_$name',
    ...payload,
  });
