import 'dart:io';

import 'find_repo_root.dart';

/// Conformance runner (plan Phase 9 item 4).
///
/// The public conformance suite proves every facade behavior over all three
/// runtimes — the direct local runtime, the VM codec loopback, and the remote
/// runtime over a scripted worker transport:
///
///   dart run tool/conformance_runner.dart
///
/// Thin wrapper over `dart test` kept as a named tool so the plan's runner
/// surface exists without remembering the exact suite paths and flags.
Future<void> main(List<String> args) async {
  final root = findRepoRoot();
  final result = await Process.run(
    Platform.resolvedExecutable,
    [
      'test',
      '-j',
      '1',
      'test/conformance/',
      'test/contract/',
      // Structural/boundary pins dissolved from the old test/refactor/ bucket
      // into their production-code homes under test/kernel/.
      'test/kernel/query/ir_test.dart',
      'test/kernel/schema_manifest_test.dart',
      'test/kernel/execution_context_test.dart',
      'test/kernel/change_bus/',
      'test/kernel/tx/transaction_reads_test.dart',
      'test/kernel/watch/watch_order_test.dart',
      'test/kernel/schema/schema_transport_test.dart',
      ...args,
    ],
    workingDirectory: root.path,
    runInShell: Platform.isWindows,
  );
  stdout.write(result.stdout);
  stderr.write(result.stderr);
  exitCode = result.exitCode;
}
