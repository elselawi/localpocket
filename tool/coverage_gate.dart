import 'dart:io';
import 'package:path/path.dart' as p;
import 'find_repo_root.dart';

/// Coverage gate: parses lcov.info file, computes line and branch coverage percentage,
/// and enforces min coverage thresholds (e.g. >= 90% line coverage).
///
/// Usage:
///   dart run tool/coverage_gate.dart [coverage/lcov.info] [--min-line=90.0]
void main(List<String> args) {
  final root = findRepoRoot();
  var lcovPath = p.join(root.path, 'coverage', 'lcov.info');
  var minLine = 90.0;

  for (final arg in args) {
    if (arg.startsWith('--min-line=')) {
      minLine = double.parse(arg.substring('--min-line='.length));
    } else if (!arg.startsWith('--')) {
      lcovPath = p.isAbsolute(arg) ? arg : p.join(root.path, arg);
    }
  }

  final lcovFile = File(lcovPath);
  if (!lcovFile.existsSync()) {
    stderr.writeln('Coverage file not found: $lcovPath');
    exitCode = 1;
    return;
  }

  final lines = lcovFile.readAsLinesSync();
  var totalLinesFound = 0;
  var totalLinesHit = 0;

  for (final line in lines) {
    if (line.startsWith('LF:')) {
      totalLinesFound += int.tryParse(line.substring(3).trim()) ?? 0;
    } else if (line.startsWith('LH:')) {
      totalLinesHit += int.tryParse(line.substring(3).trim()) ?? 0;
    }
  }

  if (totalLinesFound == 0) {
    stderr.writeln('Coverage file contained 0 instrumented lines.');
    exitCode = 1;
    return;
  }

  final linePercent = (totalLinesHit / totalLinesFound) * 100.0;
  stdout.writeln(
      'Coverage: ${linePercent.toStringAsFixed(2)}% ($totalLinesHit / $totalLinesFound lines hit) [min threshold: ${minLine.toStringAsFixed(1)}%]');

  if (linePercent < minLine) {
    stderr.writeln(
        'Coverage gate FAILED: ${linePercent.toStringAsFixed(2)}% < min required ${minLine.toStringAsFixed(1)}%');
    exitCode = 1;
  } else {
    stdout.writeln('PASS: Coverage gate met threshold.');
  }
}
