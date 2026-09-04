import 'dart:async';
import 'dart:convert';
import 'dart:io';

Future<void> main() async {
  final root = Directory.current.absolute;
  // SINGLE SOURCE of truth: the page manifest shared with run_smoke.cjs and
  // browser_web_gate.dart (tool/web_smoke/pages.json).
  final manifest = jsonDecode(
          File('tool/web_smoke/pages.json').readAsStringSync())
      as Map<String, dynamic>;
  final syncMains = [
    for (final page in (manifest['pages']! as List).cast<Map<String, dynamic>>())
      if (page['browserMatrix'] == false) page['main']! as String,
  ];
  for (final main in syncMains) {
    final output = File('build/web/${main.replaceAll('.dart', '.js')}')
      ..parent.createSync(recursive: true);
    final compile = await Process.run(
        'dart',
        [
          'compile',
          'js',
          '-O4',
          'tool/web_smoke/$main',
          '-o',
          output.path,
        ],
        workingDirectory: root.path,
        runInShell: Platform.isWindows);
    if (compile.exitCode != 0) {
      stdout.write(compile.stdout);
      stderr.write(compile.stderr);
      exitCode = compile.exitCode;
      return;
    }
  }

  final pageServer = await Process.start(
    'dart',
    ['run', 'tool/web_smoke_server.dart', root.path, '8124'],
    workingDirectory: root.path,
  );
  final syncServer = await Process.start(
    'node',
    ['tool/web_smoke/sync_fixture_server.cjs', '8125'],
    workingDirectory: root.path,
    // No runInShell: on Windows that wraps the process in `cmd /c`, making
    // `syncServer.pid` the cmd PID — kill()/taskkill then leave the child
    // node (fixture server) running and leaked on port 8125. Spawning node
    // directly keeps the PID on the actual process so kill() works.
  );
  final ready = Completer<void>();
  final outputLines = <String>[];
  final pageSub = pageServer.stdout
      .transform(utf8.decoder)
      .transform(const LineSplitter())
      .listen((line) {
    outputLines.add(line);
    if (line.contains('WEB_SMOKE_SERVER')) ready.complete();
  });
  final syncSub = syncServer.stdout
      .transform(utf8.decoder)
      .transform(const LineSplitter())
      .listen((line) => outputLines.add(line));
  try {
    await ready.future.timeout(const Duration(seconds: 10));
    final runExitCode = await _runStreamed(
      'node',
      ['tool/web_smoke/run_smoke.cjs'],
      workingDirectory: root.path,
      environment: {
        ...Platform.environment,
        'SMOKE_PAGE': 'sync',
      },
    );
    if (runExitCode != 0) {
      stderr.writeln('sync browser gate failed: $outputLines');
      exitCode = 1;
    } else {
      stdout.writeln('sync browser gate: PASS');
    }
  } finally {
    await pageSub.cancel();
    await syncSub.cancel();
    pageServer.kill();
    syncServer.kill();
    if (Platform.isWindows) {
      Process.runSync('taskkill', ['/F', '/T', '/PID', '${pageServer.pid}']);
      Process.runSync('taskkill', ['/F', '/T', '/PID', '${syncServer.pid}']);
    }
    await pageServer.exitCode
        .timeout(const Duration(seconds: 5), onTimeout: () => -1);
    await syncServer.exitCode
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
