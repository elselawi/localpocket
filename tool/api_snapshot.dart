import 'dart:io';
import 'package:path/path.dart' as p;
import 'find_repo_root.dart';

/// Generates or checks the public API surface snapshot.
///
/// Usage:
///   dart run tool/api_snapshot.dart          # check / print snapshot
///   dart run tool/api_snapshot.dart --update # overwrite tool/api_snapshot.txt
void main(List<String> args) {
  final root = findRepoRoot();
  final snapshotPath = p.join(root.path, 'tool', 'api_snapshot.txt');
  final update = args.contains('--update');

  // The single curated public barrel. The auxiliary barrels (typed.dart,
  // sync.dart, pocketbase.dart) were deleted at the Phase 9 barrel switch;
  // they must stay deleted (see test/kernel/layering_test.dart).
  final entrypoints = [
    'lib/localpocket.dart',
  ];
  final buffer = StringBuffer();
  buffer.writeln('# LocalPocket Public API Snapshot');
  buffer.writeln('# Format: <entrypoint> -> <export lines sorted>');
  buffer.writeln();

  for (final ep in entrypoints) {
    final epFile = File(p.join(root.path, ep));
    if (!epFile.existsSync()) continue;
    buffer.writeln('=== $ep ===');
    final lines = epFile
        .readAsLinesSync()
        .map((l) => l.trim())
        .where((l) => l.startsWith('export'))
        .toList()
      ..sort();
    for (final l in lines) {
      buffer.writeln(l);
    }
    buffer.writeln();
  }

  final generated = buffer.toString().replaceAll('\r\n', '\n');

  if (update) {
    File(snapshotPath).writeAsStringSync(generated);
    stdout.writeln('Updated API snapshot at tool/api_snapshot.txt');
    return;
  }

  final existingFile = File(snapshotPath);
  if (!existingFile.existsSync()) {
    stderr.writeln(
        'tool/api_snapshot.txt does not exist. Run with --update to generate it.');
    exitCode = 1;
    return;
  }

  final existing = existingFile.readAsStringSync().replaceAll('\r\n', '\n');
  if (existing != generated) {
    stderr.writeln(
        'Public API surface changed without updating tool/api_snapshot.txt!');
    stderr.writeln(
        'Run `dart run tool/api_snapshot.dart --update` if intentional.');
    exitCode = 1;
  } else {
    stdout.writeln('PASS: API snapshot is up-to-date.');
  }
}
