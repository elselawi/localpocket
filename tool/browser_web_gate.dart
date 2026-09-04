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
  // SINGLE SOURCE of truth: the page manifest shared with run_smoke.cjs
  // (tool/web_smoke/pages.json). Compiling the smoke mains and counting the
  // expected scenarios derive from the same entries the runner executes, so
  // a page added to one side but not the other fails loudly instead of
  // passing vacuously.
  final manifest = jsonDecode(
          File('tool/web_smoke/pages.json').readAsStringSync()) as Map<String, dynamic>;
  final pages = (manifest['pages']! as List).cast<Map<String, dynamic>>();
  final matrixPages =
      pages.where((p) => p['browserMatrix'] == true).toList();
  final smokeSources = [
    for (final page in matrixPages) page['main']! as String,
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
    final browserPageCount = matrixPages.length;
    const browserCount = 3;
    stdout.writeln(
        'BROWSER MATRIX Chromium Firefox WebKit × $browserPageCount smoke pages ($browserCount browsers, ${browserPageCount * browserCount} scenarios)');
    final runExitCode = await _runStreamed(
      'npm',
      ['run', 'web-smoke'],
      environment: {
        ...Platform.environment,
        'SMOKE_EXPECTED_PAGES': '$browserPageCount',
        'SMOKE_EXPECTED_SCENARIOS': '${browserPageCount * browserCount}',
        // The sync pages need their own fixture server (port 8125) and are
        // run separately by sync_web_gate.dart; keep them out of the shared
        // matrix.
        'SMOKE_EXCLUDE_PAGE': 'sync',
      },
      workingDirectory: root.path,
    );
    if (runExitCode != 0) {
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
    if (Platform.isWindows) {
      Process.runSync('taskkill', ['/F', '/T', '/PID', '${server.pid}']);
    }
    await server.exitCode
        .timeout(const Duration(seconds: 5), onTimeout: () => -1);
  }
}

/// Streams a child process's stdout/stderr straight to the console (raw
/// chunks, so the smoke runner's per-scenario `Chromium web_*.html: PASS`
/// lines print live, one by one, per browser) and returns its exit code.
Future<int> _runStreamed(
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

void _writeFailure(String name, ProcessResult result) {
  stderr.writeln('$name failed with exit code ${result.exitCode}.');
  stdout.write(result.stdout);
  stderr.write(result.stderr);
}
