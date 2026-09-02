import 'dart:io';
import 'dart:convert';

import 'find_repo_root.dart';

/// Compile-fail corpus runner (plan §13.4).
///
/// The corpus lives in `test/compile_fail/`: standalone Dart files that MUST
/// fail to compile, each annotated with `// expect-error: <analyzer code>`
/// directives. The folder is excluded from ordinary analysis (the files are
/// broken on purpose), so this runner re-analyzes every file in isolation:
///
///   dart run tool/compile_fail_runner.dart
///
/// For every corpus file the runner:
///   1. copies it to `build/compile_fail/` (an excluded folder);
///   2. runs `dart analyze --format machine` on the copy;
///   3. compares the reported error codes against the file's directives.
///
/// A file that fails to produce its expected errors — or produces unexpected
/// ones — fails the run. The corpus is the executable proof that the typed
/// surface still rejects foreign-store fields, raw map writes, and undeclared
/// fields at compile time.
Future<void> main(List<String> args) async {
  final root = findRepoRoot();
  final corpusDir = Directory('${root.path}${Platform.pathSeparator}test'
      '${Platform.pathSeparator}support${Platform.pathSeparator}compile_fail');
  final scratchDir = Directory(
      '${root.path}${Platform.pathSeparator}.dart_tool${Platform.pathSeparator}compile_fail');

  final corpus = corpusDir.existsSync()
      ? (corpusDir
              .listSync()
              .whereType<File>()
              .where((f) => f.path.endsWith('.dart.template'))
              .toList()
            ..sort((a, b) => a.path.compareTo(b.path)))
      : <File>[];
  if (corpus.isEmpty) {
    stderr.writeln('FAIL: compile-fail corpus is empty (${corpusDir.path}).');
    exitCode = 1;
    return;
  }

  scratchDir.createSync(recursive: true);

  var failed = 0;
  final report = <String>[];
  for (final file in corpus) {
    final name = file.uri.pathSegments.last.replaceAll('.template', '');
    final expected = _expectedErrors(file.readAsStringSync());
    final copy = File('${scratchDir.path}${Platform.pathSeparator}$name');
    copy.writeAsStringSync(file.readAsStringSync());

    final result = await Process.run(
      Platform.resolvedExecutable,
      ['analyze', '--format', 'machine', copy.path],
      workingDirectory: root.path,
      stdoutEncoding: utf8,
      stderrEncoding: utf8,
    );
    final codes = _reportedErrors(result.stdout as String)
        .map((c) => c.toUpperCase())
        .toSet();
    final wanted = expected.map((e) => e.toUpperCase()).toSet();

    final missing = wanted.where((e) => !codes.contains(e)).toList();
    final unexpected = codes.where((c) => !wanted.contains(c)).toList();
    if (missing.isEmpty && unexpected.isEmpty) {
      report.add('PASS $name (${expected.length} expected error(s))');
    } else {
      failed++;
      report.add('FAIL $name');
      for (final m in missing) {
        report.add('  expected but not reported: $m');
      }
      for (final u in unexpected) {
        report.add('  reported but not expected: $u');
      }
    }
    copy.deleteSync();
  }

  for (final line in report) {
    stdout.writeln(line);
  }
  if (failed > 0) {
    stderr.writeln('FAIL: compile-fail corpus ($failed file(s) wrong).');
    exitCode = 1;
  } else {
    stdout.writeln('PASS: compile-fail corpus (${corpus.length} files).');
  }
}

Set<String> _expectedErrors(String source) => RegExp(
      r'//\s*expect-error:\s*([A-Za-z_][A-Za-z0-9_]*)',
    )
        .allMatches(source)
        .map((m) => m.group(1)!)
        .toSet();

/// Extracts the analyzer error codes from `--format machine` output.
/// Machine lines look like: `SEVERITY|TYPE|ERROR_CODE|...`.
Set<String> _reportedErrors(String machineOutput) => machineOutput
    .split('\n')
    .map((line) => line.split('|'))
    .where((parts) => parts.length > 2)
    .where((parts) => parts[0].toUpperCase() == 'ERROR')
    .map((parts) => parts[2])
    .toSet();
