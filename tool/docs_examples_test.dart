import 'dart:io';
import 'package:path/path.dart' as p;
import 'find_repo_root.dart';

/// Docs/Examples drift test:
/// 1. Every example file in example/ (if directory exists) must compile/run.
/// 2. Every doc mention of `dart run <file>` in README.md must point to a real file.
void main(List<String> args) {
  final root = findRepoRoot();
  final readmeFile = File(p.join(root.path, 'README.md'));
  final exampleDir = Directory(p.join(root.path, 'example'));

  final errors = <String>[];

  // 1. Check example/ directory if present
  if (exampleDir.existsSync()) {
    final examples = exampleDir
        .listSync(recursive: true)
        .whereType<File>()
        .where((f) => f.path.endsWith('.dart'))
        .toList();
    for (final ex in examples) {
      final res = Process.runSync('dart', ['analyze', ex.path],
          workingDirectory: root.path);
      if (res.exitCode != 0) {
        errors.add('Example file failed analysis: ${ex.path}');
      }
    }
  }

  // 2. Check doc mentions of `dart run <file>`
  if (readmeFile.existsSync()) {
    final content = readmeFile.readAsStringSync();
    final matches = RegExp(r'dart run ([\w\-/\\.]+\.dart)').allMatches(content);
    for (final m in matches) {
      final fileRef = m.group(1)!;
      final file = File(p.join(root.path, fileRef));
      if (!file.existsSync()) {
        errors.add(
            'README mentions "dart run $fileRef", but file does not exist.');
      }
    }
  }

  if (errors.isNotEmpty) {
    stderr.writeln('Docs/Examples drift test FAILED:');
    for (final e in errors) {
      stderr.writeln('  - $e');
    }
    exitCode = 1;
  } else {
    stdout.writeln('PASS: Docs & examples drift checks passed.');
  }
}
