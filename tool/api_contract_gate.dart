import 'dart:io';
import 'find_repo_root.dart';

/// API contract gate: diffs the snapshot at [base] (default: HEAD) vs current working tree snapshot.
/// Fails on unannounced changes.
///
/// Usage:
///   dart run tool/api_contract_gate.dart [--base=HEAD]
void main(List<String> args) {
  final root = findRepoRoot();
  var base = 'HEAD';
  for (final arg in args) {
    if (arg.startsWith('--base=')) {
      base = arg.substring('--base='.length);
    }
  }

  // 1. Run git diff on tool/api_snapshot.txt against base
  final result = Process.runSync(
    'git',
    ['diff', '--exit-code', base, '--', 'tool/api_snapshot.txt'],
    workingDirectory: root.path,
  );

  if (result.exitCode != 0) {
    stderr.writeln(
        'API contract gate FAILED: tool/api_snapshot.txt has diff against $base.');
    stderr.writeln(result.stdout);
    stderr.writeln(result.stderr);
    exitCode = 1;
  } else {
    stdout.writeln('PASS: API contract gate (snapshot matches $base).');
  }
}
