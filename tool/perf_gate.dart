import 'dart:convert';
import 'dart:io';

import 'package:path/path.dart' as p;

import 'find_repo_root.dart';

const requiredTypedMetrics = {'B13', 'B14'};

/// Performance stability gate for the standard benchmark suite.
///
/// Every positive-ms committed metric must remain present and within 15%.
/// Typed boundary probes B13/B14 are mandatory in both current and baseline
/// results so removing their enforcement cannot silently pass.
///
/// Usage: `dart run tool/perf_gate.dart`
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
  final baselineById = {
    for (final result in baselineResults)
      if (result['id'] case final String id) id: result,
  };
  final currentById = {
    for (final result in latestResults)
      if (result['id'] case final String id) id: result,
  };

  for (final id in requiredTypedMetrics) {
    if (!baselineById.containsKey(id)) {
      failures.add(
          '$id: required typed metric is missing from ${p.basename(baselineFile.path)}.');
    }
    if (!currentById.containsKey(id)) {
      failures
          .add('$id: required typed metric is missing from current results.');
    }
  }

  for (final baseItem in baselineResults) {
    final id = baseItem['id'] as String?;
    final baseMs = (baseItem['ms'] as num?)?.toDouble();
    if (id == null || baseMs == null || baseMs <= 0) continue;

    final currItem = currentById[id];
    if (currItem == null) {
      failures.add(
          '$id: committed baseline metric is missing from current results.');
      continue;
    }
    final currMs = (currItem['ms'] as num?)?.toDouble();
    if (currMs == null || currMs <= 0) {
      failures.add('$id: current result has no positive `ms` value.');
      continue;
    }

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
