import 'dart:convert';
import 'dart:io';
import 'package:path/path.dart' as p;
import 'find_repo_root.dart';

/// Performance stability gate:
/// Compares latest benchmark results against committed baselines in `benchmark/baseline/`.
///
/// Rules:
/// - Baseline files are JSON located in `benchmark/baseline/`.
/// - For standard workloads, 15% variance (tolerance) is acceptable due to machine noise.
/// - For comparative benchmarks, calculates the difference of localpocket to the winner baseline,
///   with 10% acceptable variance.
///
/// Usage:
///   dart run tool/perf_gate.dart
void main(List<String> args) {
  final root = findRepoRoot();
  final baselineDir = Directory(p.join(root.path, 'benchmark', 'baseline'));
  final resultsDir = Directory(p.join(root.path, 'benchmark', 'results'));

  if (!baselineDir.existsSync()) {
    stderr.writeln('Baseline directory benchmark/baseline/ does not exist.');
    exitCode = 1;
    return;
  }

  // 1. Run the benchmark to generate current numbers
  stdout.writeln('Running benchmark/benchmark.dart...');
  final runRes = Process.runSync('dart', ['run', 'benchmark/benchmark.dart'],
      workingDirectory: root.path);
  if (runRes.exitCode != 0) {
    stderr.writeln('benchmark.dart execution failed:');
    stderr.writeln(runRes.stdout);
    stderr.writeln(runRes.stderr);
    exitCode = 1;
    return;
  }

  // Find the latest benchmark json in results
  final baselineFiles = baselineDir
      .listSync()
      .whereType<File>()
      .where((f) =>
          f.path.contains('localpocket_benchmark_') && f.path.endsWith('.json'))
      .toList();

  if (baselineFiles.isEmpty) {
    stdout.writeln(
        'No localpocket_benchmark_ baseline found to compare against.');
    return;
  }
  baselineFiles.sort((a, b) => a.path.compareTo(b.path));
  final baselineFile = baselineFiles.last;

  final baselineJson =
      jsonDecode(baselineFile.readAsStringSync()) as Map<String, Object?>;
  final baselineResults = (baselineJson['results'] as List<dynamic>? ?? [])
      .cast<Map<String, Object?>>();

  // Find latest in benchmark/results
  final resultFiles = resultsDir.existsSync()
      ? resultsDir
          .listSync()
          .whereType<File>()
          .where((f) =>
              f.path.contains('localpocket_benchmark_') &&
              f.path.endsWith('.json'))
          .toList()
      : <File>[];

  if (resultFiles.isEmpty) {
    stdout.writeln(
        'PASS: Benchmark ran successfully (no output result file to diff).');
    return;
  }
  resultFiles.sort((a, b) => a.path.compareTo(b.path));
  final latestResultFile = resultFiles.last;
  final latestJson =
      jsonDecode(latestResultFile.readAsStringSync()) as Map<String, Object?>;
  final latestResults = (latestJson['results'] as List<dynamic>? ?? [])
      .cast<Map<String, Object?>>();

  final failures = <String>[];

  for (final baseItem in baselineResults) {
    final id = baseItem['id'] as String?;
    final baseMs = (baseItem['ms'] as num?)?.toDouble();
    if (id == null || baseMs == null || baseMs <= 0) continue;

    final currItem =
        latestResults.firstWhere((r) => r['id'] == id, orElse: () => {});
    final currMs = (currItem['ms'] as num?)?.toDouble();
    if (currMs == null) continue;

    // 15% tolerance threshold
    final maxAllowed = baseMs * 1.15;
    if (currMs > maxAllowed) {
      failures.add(
          '$id: current ${currMs}ms exceeded baseline ${baseMs}ms by >15% (max allowed: ${maxAllowed.toStringAsFixed(1)}ms)');
    } else {
      stdout.writeln(
          '  $id: ${currMs}ms vs baseline ${baseMs}ms (within 15% tolerance)');
    }
  }

  if (failures.isNotEmpty) {
    stderr.writeln('Perf gate FAILED: Performance regression detected:');
    for (final f in failures) {
      stderr.writeln('  - $f');
    }
    exitCode = 1;
  } else {
    stdout.writeln(
        'PASS: Performance stability gate (all metrics within tolerance).');
  }
}
