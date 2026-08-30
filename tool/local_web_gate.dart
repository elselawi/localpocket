import 'dart:io';

Future<void> main() async {
  final checks = <String, List<String>>{
    'core typed web compile (JS)': [
      'compile',
      'js',
      '-O4',
      'tool/core_web_compile_smoke.dart',
      '-o',
      '${Directory.systemTemp.path}/localpocket_core_web.js'
    ],
    'core typed web compile (WASM)': [
      'compile',
      'wasm',
      'tool/core_web_compile_smoke.dart',
      '-o',
      '${Directory.systemTemp.path}/localpocket_core_web.wasm'
    ],
    'facade web compile': [
      'compile',
      'js',
      '-O4',
      'tool/web_smoke/facade_smoke_main.dart',
      '-o',
      '${Directory.systemTemp.path}/localpocket_facade_web.js'
    ],
    'destination facade web compile': [
      'compile',
      'js',
      '-O4',
      'tool/web_smoke/api_smoke_main.dart',
      '-o',
      '${Directory.systemTemp.path}/localpocket_api_web.js'
    ],
    'production worker compile': ['run', 'tool/web_worker_compile.dart'],
    'shipped worker asset is current': [
      'run',
      'tool/worker_asset_current_gate.dart'
    ],
    'web asset hashes': ['run', 'tool/web_asset_gate.dart'],
  };
  var failed = 0;
  for (final entry in checks.entries) {
    final result = await Process.run('dart', entry.value);
    if (result.exitCode != 0) {
      failed++;
      stdout.writeln('FAIL ${entry.key}');
      stdout.write(result.stdout);
      stderr.write(result.stderr);
    } else {
      stdout.writeln('PASS ${entry.key}');
    }
  }
  if (failed != 0) {
    stderr.writeln('local web gate failed: $failed check(s).');
    exitCode = 1;
  } else {
    stdout.writeln('local web gate: all checks passed.');
  }
}
