import 'dart:io';

import 'package:test/test.dart';

/// Runs the compile-fail corpus through `tool/compile_fail_runner.dart`.
///
/// The corpus (`test/support/compile_fail/`) pins the plan's compile-time pressure:
/// foreign-store fields, raw map writes, and undeclared fields must stay
/// COMPILE errors on the typed surface. Spawned as a subprocess because each
/// corpus file needs its own analyzer invocation.
void main() {
  test('compile-fail corpus rejects what must not compile',
      () async {
        final root = Directory.current.path;
        final result = await Process.run(
          Platform.resolvedExecutable,
          ['run', 'tool/compile_fail_runner.dart'],
          workingDirectory: root,
          stdoutEncoding: const SystemEncoding(),
          stderrEncoding: const SystemEncoding(),
        );
        expect(
          result.exitCode,
          0,
          reason: 'compile-fail corpus failed:\n${result.stdout}\n'
              '${result.stderr}',
        );
        expect(result.stdout as String, contains('PASS: compile-fail corpus'));
      },
      timeout: const Timeout(Duration(minutes: 5)),
      tags: <String>['gate'],
    );
}
