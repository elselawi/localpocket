import 'dart:io';
import 'package:path/path.dart' as p;
import 'find_repo_root.dart';

/// Representation of a single release checklist step.
class ChecklistStep {
  final String id;
  final String label;
  final List<String> argv;
  final Map<String, String>? env;
  final String? workingDirectory;
  final void Function(Directory root)? setup;

  const ChecklistStep({
    required this.id,
    required this.label,
    required this.argv,
    this.env,
    this.workingDirectory,
    this.setup,
  });
}

void printHelp() {
  stdout.writeln('''
LocalPocket Release Checklist — Pre-release quality gate runner.

Usage:
  dart run tool/release_checklist.dart [flags]

Flags:
  --help, -h       Show this help message and exit.
  --list           Print the ordered list of checklist steps and exit.
  --long           Run heavy/slow test suites (soak, randomized/fuzz,
                   large-data, crash-ish, e2e) with LONG_TEST=1 and include
                   skipped live tests. Note: some heavy tests spawn native OS
                   processes and must not run concurrently with other suites.
  --perf           Run benchmark and performance stability gate comparing
                   against committed baseline JSON with 15% tolerance.
  --no-coverage    Skip coverage collection and coverage gate.
''');
}

/// Builds the ordered checklist steps based on active flags.
List<ChecklistStep> buildChecklistSteps({
  bool isLong = false,
  bool isPerf = false,
  bool noCoverage = false,
}) {
  return [
    // 1. Static analysis
    const ChecklistStep(
      id: 'analyze',
      label: 'Static Analysis (dart analyze lib test tool)',
      argv: ['dart', 'analyze', 'lib', 'test', 'tool'],
    ),

    // 2. Offline lint (no dart:io leaks, no prints, layering)
    const ChecklistStep(
      id: 'offline_lint',
      label: 'Offline Lint (tool/offline_lint.dart)',
      argv: ['dart', 'run', 'tool/offline_lint.dart'],
    ),

    // 3. Security review (parameter binding, LIKE escaping, cipher invariants)
    const ChecklistStep(
      id: 'security_review',
      label: 'Security Review (tool/security_review.dart)',
      argv: ['dart', 'run', 'tool/security_review.dart'],
    ),

    // 4. Traceability check (public symbols covered by tests & docs)
    const ChecklistStep(
      id: 'traceability',
      label: 'Traceability Check (tool/traceability_check.dart)',
      argv: ['dart', 'run', 'tool/traceability_check.dart'],
    ),

    // 5. API snapshot check (verifies tool/api_snapshot.txt is fresh)
    const ChecklistStep(
      id: 'api_snapshot',
      label: 'API Snapshot Up-to-Date (tool/api_snapshot.dart)',
      argv: ['dart', 'run', 'tool/api_snapshot.dart'],
    ),

    // 6. Snapshot clean (git diff --exit-code -- tool/api_snapshot.txt)
    const ChecklistStep(
      id: 'snapshot_clean',
      label:
          'API Snapshot Clean in Git (git diff --exit-code -- tool/api_snapshot.txt)',
      argv: ['git', 'diff', '--exit-code', '--', 'tool/api_snapshot.txt'],
    ),

    // 7. API contract gate (diff vs HEAD)
    const ChecklistStep(
      id: 'api_contract_gate',
      label: 'API Contract Gate (tool/api_contract_gate.dart --base=HEAD)',
      argv: ['dart', 'run', 'tool/api_contract_gate.dart', '--base=HEAD'],
    ),

    // 8. Dependency bounds & sqlite3 lockfile compatibility
    const ChecklistStep(
      id: 'dependency_bounds',
      label:
          'Dependency Bounds & Lockfile Compatibility (tool/dependency_check.dart)',
      argv: ['dart', 'run', 'tool/dependency_check.dart'],
    ),

    // 9. Docs & examples drift
    const ChecklistStep(
      id: 'docs_examples',
      label: 'Docs & Examples Drift Check (tool/docs_examples_test.dart)',
      argv: ['dart', 'run', 'tool/docs_examples_test.dart'],
    ),

    // 10. Version & CHANGELOG consistency
    const ChecklistStep(
      id: 'version_check',
      label: 'Version & CHANGELOG Consistency (tool/version_check.dart)',
      argv: ['dart', 'run', 'tool/version_check.dart'],
    ),

    // 11. Core web compile smoke
    const ChecklistStep(
      id: 'core_web_smoke',
      label: 'Core Web Compilation Smoke (tool/core_web_compile_smoke.dart)',
      argv: ['dart', 'run', 'tool/core_web_compile_smoke.dart'],
    ),

    // 12. Web gate (supported web surface compile)
    const ChecklistStep(
      id: 'web_gate',
      label: 'Web Gate Compile (tool/web_gate.dart)',
      argv: ['dart', 'run', 'tool/web_gate.dart'],
    ),

    // 13. Test suite
    if (!isLong)
      const ChecklistStep(
        id: 'test_suite',
        label: 'Full Test Suite (dart test test --reporter=compact)',
        argv: ['dart', 'test', 'test', '--reporter=compact'],
      )
    else ...[
      const ChecklistStep(
        id: 'test_suite_long',
        label:
            'Full Test Suite with Long/Soak Enabled (dart test test --reporter=compact)',
        argv: ['dart', 'test', 'test', '--reporter=compact'],
        env: {'LONG_TEST': '1', 'LP_LIVE': '1'},
      ),
      const ChecklistStep(
        id: 'gate_tests_long',
        label:
            'Child Process & Gate Tests (dart test --tags gate --run-skipped -j 1 test/release/)',
        argv: [
          'dart',
          'test',
          '--tags',
          'gate',
          '--run-skipped',
          '-j',
          '1',
          'test/release/'
        ],
        env: {'LONG_TEST': '1'},
      ),
    ],

    // 14. Coverage block (unless --no-coverage)
    if (!noCoverage) ...[
      ChecklistStep(
        id: 'coverage_collect',
        label: 'Coverage Collection (dart test test --coverage=coverage)',
        argv: [
          'dart',
          'test',
          'test',
          '--coverage=coverage',
          '--reporter=compact'
        ],
        setup: (root) {
          final covDir = Directory(p.join(root.path, 'coverage'));
          if (covDir.existsSync()) {
            covDir.deleteSync(recursive: true);
          }
        },
      ),
      const ChecklistStep(
        id: 'coverage_format',
        label: 'Coverage LCOV Format (dart run coverage:format_coverage)',
        argv: [
          'dart',
          'run',
          'coverage:format_coverage',
          '--lcov',
          '--in=coverage',
          '-o',
          'coverage/lcov.info',
          '--report-on=lib',
        ],
      ),
      const ChecklistStep(
        id: 'coverage_gate',
        label: 'Coverage Gate (tool/coverage_gate.dart coverage/lcov.info)',
        argv: [
          'dart',
          'run',
          'tool/coverage_gate.dart',
          'coverage/lcov.info',
          '--min-line=90.0'
        ],
      ),
    ],

    // 15. Performance stability (if --perf)
    if (isPerf)
      const ChecklistStep(
        id: 'perf_gate',
        label: 'Performance Stability Gate (tool/perf_gate.dart)',
        argv: ['dart', 'run', 'tool/perf_gate.dart'],
      ),
  ];
}

Future<void> main(List<String> args) async {
  if (args.contains('--help') || args.contains('-h')) {
    printHelp();
    return;
  }

  final root = findRepoRoot();
  final isLong = args.contains('--long');
  final isPerf = args.contains('--perf');
  final noCoverage = args.contains('--no-coverage');
  final listOnly = args.contains('--list');

  final steps = buildChecklistSteps(
    isLong: isLong,
    isPerf: isPerf,
    noCoverage: noCoverage,
  );

  if (listOnly) {
    stdout.writeln('Release checklist steps (${steps.length} total):');
    for (var i = 0; i < steps.length; i++) {
      stdout.writeln('  ${i + 1}. [${steps[i].id}] ${steps[i].label}');
    }
    return;
  }

  stdout.writeln(
      '================================================================');
  stdout.writeln('Running LocalPocket Release Checklist in: ${root.path}');
  stdout.writeln('Flags: long=$isLong, perf=$isPerf, no-coverage=$noCoverage');
  stdout.writeln(
      '================================================================\n');

  final stopwatch = Stopwatch()..start();

  for (var i = 0; i < steps.length; i++) {
    final step = steps[i];
    final stepNum = i + 1;
    stdout.writeln('[$stepNum/${steps.length}] ${step.label}...');

    if (step.setup != null) {
      try {
        step.setup!(root);
      } catch (e) {
        stderr.writeln('  [SETUP ERROR]: $e');
        exitCode = 1;
        return;
      }
    }

    final cmd = step.argv.first;
    final cmdArgs = step.argv.skip(1).toList();
    final workDir = step.workingDirectory ?? root.path;

    final stepEnv = <String, String>{
      ...Platform.environment,
      if (step.env != null) ...step.env!,
    };

    final result = await Process.run(
      cmd,
      cmdArgs,
      workingDirectory: workDir,
      environment: stepEnv,
      runInShell: Platform.isWindows,
    );

    if (result.exitCode != 0) {
      stderr.writeln(
          '\n❌ FAIL: Step [$stepNum/${steps.length}] "${step.label}" exited with code ${result.exitCode}.\n');

      final stdoutStr = result.stdout.toString().trim();
      final stderrStr = result.stderr.toString().trim();
      final allOutput = [
        if (stdoutStr.isNotEmpty) stdoutStr,
        if (stderrStr.isNotEmpty) stderrStr,
      ].join('\n');

      final lines = allOutput.split(RegExp(r'\r?\n'));
      final tail = lines.length > 30 ? lines.sublist(lines.length - 30) : lines;

      stderr.writeln(
          '--- Tail of failing command output (${tail.length} lines) ---');
      for (final line in tail) {
        stderr.writeln('  | $line');
      }
      stderr.writeln(
          '------------------------------------------------------------\n');
      stderr.writeln('Release checklist stopped at first failure.');
      exitCode = 1;
      return;
    } else {
      stdout.writeln('  -> PASS');
    }
  }

  stopwatch.stop();
  final elapsedSec = (stopwatch.elapsedMilliseconds / 1000).toStringAsFixed(1);
  stdout.writeln(
      '\n================================================================');
  stdout.writeln(
      '🎉 ALL ${steps.length} RELEASE CHECKLIST STEPS PASSED in ${elapsedSec}s!');
  stdout.writeln(
      '================================================================');
}
