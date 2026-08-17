import 'dart:io';

/// The release gate: runs every child check and fails the whole
/// gate if ANY child fails. A single application smoke test is NOT proof that
/// the suite ran — this is the authoritative gate.
///
///   dart run tool/release_gate.dart            # hermetic checks only
///   dart run tool/release_gate.dart --real     # + live server suite
///   dart run tool/release_gate.dart --publish  # + `dart pub publish --dry-run`
///   dart run tool/release_gate.dart --list-steps
///   dart run tool/release_gate.dart --extra-command "dart analyze"
///
/// Exit code 0 iff every configured child command exits 0.
Future<void> main(List<String> args) async {
  final listOnly = args.contains('--list-steps');
  final withReal =
      args.contains('--real') || Platform.environment['LP_LIVE'] == '1';
  final withPublish = args.contains('--publish');

  final steps = <({String name, List<String> command})>[
    (name: 'analyze', command: const ['analyze']),
    (name: 'hermetic suite', command: const ['test']),
    (name: 'web gate', command: const ['run', 'tool/web_gate.dart']),
    (
      name: 'local web compile and asset gate',
      command: const ['run', 'tool/local_web_gate.dart'],
    ),
    (
      name: 'core API smoke',
      command: const ['run', 'tool/core_web_compile_smoke.dart']
    ),
    (
      name: 'production web gate',
      command: const ['run', 'tool/local_web_gate.dart'],
    ),
    if (withReal)
      (
        name: 'live suite',
        command: const [
          'test',
          '--tags',
          'real',
          '--run-skipped',
          'test/e2e/real/'
        ]
      ),
    if (withPublish)
      (name: 'publish dry-run', command: const ['pub', 'publish', '--dry-run']),
  ];

  final extras = <({String name, List<String> command})>[];
  for (var i = 0; i < args.length; i++) {
    if (args[i] == '--extra-command' && i + 1 < args.length) {
      final parts =
          args[i + 1].split(RegExp(r'\s+')).where((s) => s.isNotEmpty).toList();
      extras.add((name: parts.first, command: parts));
    }
  }

  if (listOnly) {
    for (final s in steps) {
      stdout.writeln(s.name);
    }
    for (final e in extras) {
      stdout.writeln('${e.name} (extra)');
    }
    return;
  }

  var failures = 0;
  for (final s in [...steps, ...extras]) {
    final result = await Process.run('dart', s.command);
    final ok = result.exitCode == 0;
    stdout.writeln(
        '${ok ? 'PASS' : 'FAIL'}  ${s.name}  (dart ${s.command.join(' ')})');
    if (!ok) {
      failures++;
      final out = '${result.stdout}';
      final err = '${result.stderr}';
      stdout.writeln(out.length > 1500 ? out.substring(0, 1500) : out);
      stdout.writeln(err.length > 1500 ? err.substring(0, 1500) : err);
    }
  }

  if (failures > 0) {
    stderr.writeln('release gate FAILED: $failures step(s) failed.');
    exitCode = 1;
  } else {
    stdout.writeln(
        'release gate: all ${steps.length + extras.length} steps passed.');
  }
}
