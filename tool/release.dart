import 'dart:io';

import 'package:path/path.dart' as p;

import 'find_repo_root.dart';

/// The single LocalPocket pre-release quality runner.
///
/// Default mode runs deterministic analysis, policy, API, documentation,
/// compatibility, web, test, and coverage checks. Optional flags add long,
/// performance, live-server, and package-publish validation.
///
/// Usage:
///   dart run tool/release.dart
///   dart run tool/release.dart --long
///   dart run tool/release.dart --perf
///   dart run tool/release.dart --real
///   dart run tool/release.dart --publish
///   dart run tool/release.dart --no-coverage
///   dart run tool/release.dart --list
class ReleaseStep {
  final String id;
  final String label;
  final List<String> argv;
  final Map<String, String>? env;
  final void Function(Directory root)? setup;

  const ReleaseStep({
    required this.id,
    required this.label,
    required this.argv,
    this.env,
    this.setup,
  });
}

void printHelp() {
  stdout.writeln('''
LocalPocket Release Runner — the single pre-release quality command.

Usage:
  dart run tool/release.dart [flags]

Flags:
  --help, -h       Show this help message and exit.
  --list           Print the ordered list of checks and exit.
  --long           Add soak, large-data, crash/restart, and gate tests.
  --perf           Add performance stability checks against committed baselines.
  --real           Add the live PocketBase test suite.
  --publish        Add `dart pub publish --dry-run`.
  --no-publish     Skip package publish dry-run (fast local mode).
  --no-coverage    Skip coverage collection and the coverage threshold gate.
''');
}

List<ReleaseStep> buildReleaseSteps({
  bool isLong = false,
  bool isPerf = false,
  bool withReal = false,
  bool withPublish = true,
  bool noCoverage = false,
}) {
  return [
    const ReleaseStep(
      id: 'analyze',
      label: 'Static analysis',
      argv: ['analyze', 'lib', 'test', 'tool'],
    ),
    const ReleaseStep(
      id: 'offline_lint',
      label: 'Offline lint and layering checks',
      argv: ['run', 'tool/offline_lint.dart'],
    ),
    const ReleaseStep(
      id: 'security_review',
      label: 'Security review',
      argv: ['run', 'tool/security_review.dart'],
    ),
    const ReleaseStep(
      id: 'traceability',
      label: 'Public API traceability',
      argv: ['run', 'tool/traceability_check.dart'],
    ),
    const ReleaseStep(
      id: 'api_snapshot',
      label: 'API snapshot generation/check',
      argv: ['run', 'tool/api_snapshot.dart'],
    ),
    const ReleaseStep(
      id: 'snapshot_clean',
      label: 'API snapshot is clean in Git',
      argv: ['git', 'diff', '--exit-code', '--', 'tool/api_snapshot.txt'],
    ),
    const ReleaseStep(
      id: 'api_contract_gate',
      label: 'Public API contract gate',
      argv: ['run', 'tool/api_contract_gate.dart', '--base=HEAD'],
    ),
    const ReleaseStep(
      id: 'dependency_bounds',
      label: 'Dependency bounds and lockfile compatibility',
      argv: ['run', 'tool/dependency_check.dart'],
    ),
    const ReleaseStep(
      id: 'docs_examples',
      label: 'Documentation and examples drift',
      argv: ['run', 'tool/docs_examples_test.dart'],
    ),
    const ReleaseStep(
      id: 'version_check',
      label: 'Version and CHANGELOG consistency',
      argv: ['run', 'tool/version_check.dart'],
    ),
    const ReleaseStep(
      id: 'core_web_smoke',
      label: 'Core web compilation smoke',
      argv: ['run', 'tool/core_web_compile_smoke.dart'],
    ),
    const ReleaseStep(
      id: 'web_gate',
      label: 'Supported web surface gate',
      argv: ['run', 'tool/web_gate.dart'],
    ),
    const ReleaseStep(
      id: 'local_web_gate',
      label: 'Production web worker, facade, and asset gate',
      argv: ['run', 'tool/local_web_gate.dart'],
    ),
    const ReleaseStep(
      id: 'package_assets',
      label: 'Package metadata and web assets',
      argv: ['run', 'tool/package_release_gate.dart'],
    ),
    const ReleaseStep(
      id: 'browser_web_matrix',
      label: 'Chromium, Firefox, and WebKit browser smoke matrix',
      argv: ['run', 'tool/browser_web_gate.dart'],
    ),
    const ReleaseStep(
      id: 'browser_sync_matrix',
      label: 'Browser sync/auth/realtime lifecycle smoke',
      argv: ['run', 'tool/sync_web_gate.dart'],
    ),
    ReleaseStep(
      id: isLong ? 'test_suite_long' : 'test_suite',
      label: isLong
          ? 'Full suite with long tests enabled'
          : 'Full hermetic test suite',
      argv: ['test', 'test', '--reporter=compact'],
      env: isLong ? const {'LONG_TEST': '1', 'LP_LIVE': '1'} : null,
    ),
    const ReleaseStep(
      id: 'release_tests',
      label: 'Release and web gate tests',
      argv: [
        'test',
        '--tags',
        'gate',
        '--run-skipped',
        '-j',
        '1',
        'test/release/',
        'test/web/'
      ],
    ),
    if (!noCoverage) ...[
      ReleaseStep(
        id: 'coverage_collect',
        label: 'Coverage collection',
        argv: ['test', 'test', '--coverage=coverage', '--reporter=compact'],
        setup: (root) {
          final coverage = Directory(p.join(root.path, 'coverage'));
          if (coverage.existsSync()) coverage.deleteSync(recursive: true);
        },
      ),
      const ReleaseStep(
        id: 'coverage_format',
        label: 'Coverage LCOV formatting',
        argv: [
          'run',
          'coverage:format_coverage',
          '--lcov',
          '--in=coverage',
          '-o',
          'coverage/lcov.info',
          '--report-on=lib'
        ],
      ),
      const ReleaseStep(
        id: 'coverage_gate',
        label: 'Coverage threshold gate',
        argv: [
          'run',
          'tool/coverage_gate.dart',
          'coverage/lcov.info',
          '--min-line=90.0'
        ],
      ),
    ],
    if (isPerf)
      const ReleaseStep(
        id: 'perf_gate',
        label: 'Performance stability gate',
        argv: ['run', 'tool/perf_gate.dart'],
      ),
    if (withReal)
      const ReleaseStep(
        id: 'live_suite',
        label: 'Live PocketBase suite',
        argv: ['test', '--tags', 'real', '--run-skipped', 'test/e2e/real/'],
      ),
    const ReleaseStep(
      id: 'release_baseline',
      label: 'Release baseline evidence',
      argv: ['run', 'tool/release_baseline.dart'],
    ),
    if (withPublish)
      const ReleaseStep(
        id: 'publish_dry_run',
        label: 'Package publish dry-run',
        argv: ['pub', 'publish', '--dry-run'],
      ),
  ];
}

Future<void> main(List<String> args) async {
  if (args.contains('--help') || args.contains('-h')) {
    printHelp();
    return;
  }

  final root = findRepoRoot();
  final steps = buildReleaseSteps(
    isLong: args.contains('--long'),
    isPerf: args.contains('--perf'),
    withReal: args.contains('--real') || Platform.environment['LP_LIVE'] == '1',
    withPublish: !args.contains('--no-publish') || args.contains('--publish'),
    noCoverage: args.contains('--no-coverage'),
  );

  if (args.contains('--list')) {
    stdout.writeln('Release checks (${steps.length} total):');
    for (var i = 0; i < steps.length; i++) {
      stdout.writeln('  ${i + 1}. [${steps[i].id}] ${steps[i].label}');
    }
    return;
  }

  stdout.writeln('Running LocalPocket release checks in ${root.path}');
  var failures = 0;
  for (var i = 0; i < steps.length; i++) {
    final step = steps[i];
    stdout.writeln('[${i + 1}/${steps.length}] ${step.label}...');
    try {
      step.setup?.call(root);
    } catch (e) {
      stderr.writeln('FAIL  ${step.id}: setup error: $e');
      exitCode = 1;
      return;
    }

    final environment = <String, String>{
      ...Platform.environment,
      if (step.env != null) ...step.env!,
    };
    final executable = step.argv.first == 'git' ? 'git' : 'dart';
    final command =
        step.argv.first == 'git' ? step.argv.skip(1).toList() : step.argv;
    final result = await Process.run(
      executable,
      command,
      workingDirectory: root.path,
      environment: environment,
      runInShell: Platform.isWindows,
    );
    if (result.exitCode != 0) {
      failures++;
      stdout.writeln('FAIL  ${step.id}');
      final output = '${result.stdout}\n${result.stderr}'.trim();
      final lines = output.split(RegExp(r'\r?\n'));
      final tail = lines.length > 30 ? lines.sublist(lines.length - 30) : lines;
      for (final line in tail) {
        stdout.writeln('  | $line');
      }
      break;
    }
    stdout.writeln('PASS  ${step.id}');
  }

  if (failures > 0) {
    stderr.writeln('RELEASE BLOCKED: $failures check failed.');
    exitCode = 1;
  } else {
    stdout.writeln('RELEASE READY: all ${steps.length} checks passed.');
  }
}
