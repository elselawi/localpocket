import 'dart:async';
import 'dart:convert';
import 'dart:io';

Future<void> main() async {
  final root = Directory.current.absolute;
  final output = File('build/web/sync_lifecycle_smoke_main.js')
    ..parent.createSync(recursive: true);
  final compile = await Process.run(
      'dart',
      [
        'compile',
        'js',
        '-O4',
        'tool/web_smoke/sync_lifecycle_smoke_main.dart',
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

  final pageServer = await Process.start(
    'dart',
    ['run', 'tool/web_smoke_server.dart', root.path, '8124'],
    workingDirectory: root.path,
  );
  final syncServer = await Process.start(
    'node',
    ['tool/web_smoke/sync_fixture_server.cjs', '8125'],
    workingDirectory: root.path,
    runInShell: Platform.isWindows,
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
    final result = await Process.run(
      'node',
      ['tool/web_smoke/run_smoke.cjs'],
      workingDirectory: root.path,
      environment: {
        ...Platform.environment,
        'SMOKE_PAGE': 'sync_lifecycle',
      },
      runInShell: Platform.isWindows,
    );
    stdout.write(result.stdout);
    stderr.write(result.stderr);
    if (result.exitCode != 0) {
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
