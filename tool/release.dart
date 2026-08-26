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
  const ReleaseStep({
    required this.id,
    required this.label,
    required this.argv,
    this.env,
    this.setup,
    this.retryOnFailure = false,
  });
  final String id;
  final String label;
  final List<String> argv;
  final Map<String, String>? env;
  final void Function(Directory root)? setup;

  /// When true, a failed step is re-run once. Used for the full `dart test`
  /// steps, which intermittently trip a pre-existing timing-sensitive flake
  /// in the full parallel run (always passes on re-run; a real regression
  /// fails twice and still blocks the gate).
  final bool retryOnFailure;
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
  --color          Force ANSI colors even when output is piped.
  --no-color       Disable ANSI colors.
''');
}

/// Minimal ANSI palette. Colors are stripped when the output is not a
/// terminal (or `NO_COLOR` is set / `--no-color` passed), so piping the
/// runner to a file stays clean.
class _Palette {
  _Palette(this.enabled);
  final bool enabled;

  String _wrap(String code, String s) => enabled ? '$code$s\x1B[0m' : s;

  String red(String s) => _wrap('\x1B[31m', s);
  String green(String s) => _wrap('\x1B[32m', s);
  String yellow(String s) => _wrap('\x1B[33m', s);
  String cyan(String s) => _wrap('\x1B[36m', s);
  String magenta(String s) => _wrap('\x1B[35m', s);
  String bold(String s) => _wrap('\x1B[1m', s);
  String dim(String s) => _wrap('\x1B[2m', s);
}

/// Human-friendly duration: `421ms`, `12.4s`, `3m05s`.
String _fmtDuration(Duration d) {
  final ms = d.inMilliseconds;
  if (ms < 1000) {
    return '${ms}ms';
  }
  if (d.inSeconds < 60) {
    return '${d.inSeconds}.${(d.inMilliseconds % 1000) ~/ 100}s';
  }
  final m = d.inMinutes;
  final s = d.inSeconds % 60;
  return '${m}m${s.toString().padLeft(2, '0')}s';
}

/// Streams a step's stdout/stderr straight to the console (raw chunks, so the
/// child's own `\r` progress updates and ANSI colors survive) and returns its
/// exit code. This is what makes long steps feel alive — `dart test`'s
/// `+1987 ~76` counter and the browser matrix's per-scenario PASS lines print
/// as they happen instead of after 45 silent minutes.
Future<int> _runStep(
  String executable,
  List<String> args, {
  required String workingDirectory,
  required Map<String, String> environment,
}) async {
  final process = await Process.start(
    executable,
    args,
    workingDirectory: workingDirectory,
    environment: environment,
    runInShell: Platform.isWindows,
  );
  await Future.wait([
    _pump(process.stdout, stdout),
    _pump(process.stderr, stderr),
  ]);
  return process.exitCode;
}

Future<void> _pump(Stream<List<int>> source, IOSink sink) async {
  await for (final chunk in source) {
    sink.add(chunk);
  }
  await sink.flush();
}

List<ReleaseStep> buildReleaseSteps({
  bool isLong = false,
  bool isPerf = false,
  bool withReal = false,
  bool withPublish = true,
  bool noCoverage = false,
}) =>
    [
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
        id: 'raw_api_gate',
        label: 'Raw record-map API growth gate',
        argv: ['run', 'tool/raw_api_gate.dart'],
      ),
      const ReleaseStep(
        id: 'typed_surface_gate',
        label: 'Typed descriptor/draft surface gate',
        argv: ['run', 'tool/typed_surface_gate.dart'],
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
        retryOnFailure: true,
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
          'test/web/',
          'test/typed/compile_fail_test.dart'
        ],
        retryOnFailure: true,
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
          retryOnFailure: true,
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

  final forceColor = args.contains('--color')
      ? true
      : args.contains('--no-color')
          ? false
          : null;
  final c = _Palette(
    forceColor ??
        (stdout.supportsAnsiEscapes &&
            !Platform.environment.containsKey('NO_COLOR')),
  );

  final total = Stopwatch()..start();
  stdout.writeln();
  stdout.writeln(c.bold(c.cyan('LocalPocket release checks')));
  stdout.writeln(c.dim('  ${steps.length} steps · ${root.path}'));
  stdout.writeln();

  var failures = 0;
  for (var i = 0; i < steps.length; i++) {
    final step = steps[i];
    final sw = Stopwatch()..start();
    final num = (i + 1).toString().padLeft(2, '0');
    stdout.writeln('${c.dim('[$num/${steps.length}]')} ${c.bold(step.label)}');
    try {
      step.setup?.call(root);
    } catch (e) {
      sw.stop();
      failures++;
      stdout.writeln(
          '${c.red('  ✗ FAIL')} ${c.bold(step.label)} ${c.dim('(${_fmtDuration(sw.elapsed)})')}');
      stdout.writeln(c.red('    setup error: $e'));
      break;
    }

    final environment = <String, String>{
      ...Platform.environment,
      if (step.env != null) ...step.env!,
    };
    final command = List<String>.of(step.argv);
    // The child runs through a pipe (not a TTY), so `dart test` would
    // disable its own colors; force them when our palette is on so the
    // progress counters stay readable.
    if (c.enabled && command.isNotEmpty && command.first == 'test') {
      command.insert(1, '--color');
    }
    final executable = command.first == 'git' ? 'git' : 'dart';
    final cmd = command.first == 'git' ? command.skip(1).toList() : command;

    var exitCode = await _runStep(
      executable,
      cmd,
      workingDirectory: root.path,
      environment: environment,
    );
    if (exitCode != 0 && step.retryOnFailure) {
      stdout.writeln(c.yellow(
          '  ⚠ failed — retrying once (intermittent flake in the full parallel '
          'run; passes on re-run)'));
      exitCode = await _runStep(
        executable,
        cmd,
        workingDirectory: root.path,
        environment: environment,
      );
    }
    sw.stop();

    if (exitCode != 0) {
      failures++;
      stdout.writeln(
          '${c.red('  ✗ FAIL')} ${c.bold(step.label)} ${c.dim('(${_fmtDuration(sw.elapsed)})')}');
      break;
    }
    stdout.writeln(
        '${c.green('  ✓ PASS')} ${c.bold(step.label)} ${c.dim('(${_fmtDuration(sw.elapsed)})')}');
  }

  total.stop();
  stdout.writeln();
  if (failures > 0) {
    stdout.writeln(c.red(c.bold(
        '✗ RELEASE BLOCKED: $failures check failed. (${_fmtDuration(total.elapsed)})')));
    exitCode = 1;
  } else {
    stdout.writeln(c.green(c.bold(
        '✓ RELEASE READY: all ${steps.length} checks passed. (${_fmtDuration(total.elapsed)})')));
  }
}
