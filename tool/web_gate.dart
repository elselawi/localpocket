import 'dart:io';

/// The web compile gate: proves the supported web entrypoints compile for the
/// web target without native-only imports leaking through conditional exports.
/// The production worker/facade and the core+sync public compile smoke are
/// validated by separate checks in the unified release runner.
///
/// Usage:
///   dart run tool/web_gate.dart
///
/// Exits 0 when every supported entrypoint compiles to JS.
Future<void> main(List<String> args) async {
  final outDir = Directory.systemTemp.createTempSync('lp_web_gate_');
  var failures = 0;
  try {
    final result = await Process.run('dart', [
      'compile',
      'js',
      'tool/web_blob_compile_smoke.dart',
      '-o',
      '${outDir.path}/blob_platform.js',
    ]);
    final ok = result.exitCode == 0;
    stdout.writeln('${ok ? 'PASS' : 'FAIL'}  web compile blob platform');
    if (!ok) {
      failures++;
      stdout.writeln(result.stdout);
      stdout.writeln(result.stderr);
    }
  } finally {
    try {
      outDir.deleteSync(recursive: true);
    } catch (_) {}
  }
  stdout.writeln('(core DB web compilation is deferred: needs a WASM sqlite '
      'factory; see web_gate_test.dart for the pinned limitation)');
  if (failures > 0) {
    stderr.writeln('web gate failed: $failures target(s) did not compile.');
    exitCode = 1;
  } else {
    stdout.writeln('web gate: supported web surface compiles.');
  }
}
