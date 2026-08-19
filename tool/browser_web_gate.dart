import 'dart:async';
import 'dart:convert';
import 'dart:io';

/// Builds and runs the complete browser smoke matrix used by the web support
/// implementation: Chromium, Firefox, and WebKit across every smoke page.
///
/// The helper intentionally reuses the checked-in browser runner rather than
/// duplicating Playwright logic in the Dart release runner.
Future<void> main() async {
  final root = Directory.current.absolute;
  final smokeSources = <String>[
    'facade_smoke_main.dart',
    'watch_smoke_main.dart',
    'parity_smoke_main.dart',
    'blob_smoke_main.dart',
    'files_worker_spike_main.dart',
    'cipher_smoke_main.dart',
    'conflicts_smoke_main.dart',
    'lifecycle_error_smoke_main.dart',
    'wire_values_smoke_main.dart',
    'query_migration_smoke_main.dart',
    'transaction_watch_lifecycle_smoke_main.dart',
    'durability_reopen_smoke_main.dart',
    'file_lifecycle_smoke_main.dart',
    'compatibility_environment_smoke_main.dart',
    'performance_resource_smoke_main.dart',
  ];

  // Smoke HTML pages load these files from /build/web/<name>.js.
  final buildDir = Directory('build/web')..createSync(recursive: true);
  for (final source in smokeSources) {
    final output =
        File('${buildDir.path}/${source.replaceFirst('.dart', '.js')}');
    stdout.writeln('BROWSER BUILD $source');
    final result = await Process.run(
        'dart',
        [
          'compile',
          'js',
          '-O4',
          'tool/web_smoke/$source',
          '-o',
          output.path,
        ],
        workingDirectory: root.path,
        runInShell: Platform.isWindows);
    if (result.exitCode != 0) {
      _writeFailure('browser build $source', result);
      exitCode = 1;
      return;
    }
  }

  final server = await Process.start(
    'dart',
    ['run', 'tool/web_smoke_server.dart', root.path, '8124'],
    workingDirectory: root.path,
  );
  final serverReady = Completer<void>();
  final serverOutput = <String>[];
  final subscription = server.stdout
      .transform(utf8.decoder)
      .transform(const LineSplitter())
      .listen((String line) {
    serverOutput.add(line);
    stdout.writeln('WEB SERVER $line');
    if (line.contains('WEB_SMOKE_SERVER')) serverReady.complete();
  });
  final errorSubscription = server.stderr
      .transform(utf8.decoder)
      .transform(const LineSplitter())
      .listen((String line) {
    serverOutput.add(line);
    stderr.writeln('WEB SERVER ERROR $line');
  });

  try {
    await serverReady.future.timeout(const Duration(seconds: 10));
    const browserPageCount = 15;
    const browserCount = 3;
    stdout.writeln(
        'BROWSER MATRIX Chromium Firefox WebKit × $browserPageCount smoke pages ($browserCount browsers, ${browserPageCount * browserCount} scenarios)');
    final result = await Process.run(
      'npm',
      ['run', 'web-smoke'],
      environment: {
        ...Platform.environment,
        'SMOKE_EXPECTED_PAGES': '$browserPageCount',
        'SMOKE_EXPECTED_SCENARIOS': '${browserPageCount * browserCount}',
      },
      workingDirectory: root.path,
      runInShell: Platform.isWindows,
    );
    stdout.write(result.stdout);
    stderr.write(result.stderr);
    if (result.exitCode != 0) {
      stderr.writeln('browser matrix failed. Server output: $serverOutput');
      exitCode = 1;
    } else {
      stdout.writeln('browser matrix: all smoke pages passed.');
    }
  } catch (e) {
    stderr.writeln('browser matrix could not start: $e');
    stderr.writeln('Server output: $serverOutput');
    exitCode = 1;
  } finally {
    await subscription.cancel();
    await errorSubscription.cancel();
    server.kill();
    if (Platform.isWindows) Process.runSync('taskkill', ['/F', '/T', '/PID', '${server.pid}']);
    await server.exitCode
        .timeout(const Duration(seconds: 5), onTimeout: () => -1);
  }
}

void _writeFailure(String name, ProcessResult result) {
  stderr.writeln('$name failed with exit code ${result.exitCode}.');
  stdout.write(result.stdout);
  stderr.write(result.stderr);
}
