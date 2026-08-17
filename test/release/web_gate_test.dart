/// Real web/WASM/OPFS gate.
///
/// A real browser CI suite (opening WASM/IndexedDB, OPFS multi-megabyte blob
/// I/O, persistence across reload) cannot run inside this hermetic suite. These
/// tests pin the supported web compilation gates and the current browser
/// capability contract.
///
/// These tests spawn nested `dart` processes and are therefore `gate`-tagged;
/// run them sequentially with `dart test --tags gate --run-skipped -j 1
/// test/release/` or through `tool/release.dart --long`."}},{
@Tags(['gate'])
library;

import 'dart:io';

import 'package:test/test.dart';

void main() {
  test('web gate: the supported web surface compiles to JS', () async {
    final result = await Process.run('dart', ['run', 'tool/web_gate.dart']);
    expect(result.exitCode, 0,
        reason:
            'tool/web_gate.dart output:\n${result.stdout}\n${result.stderr}');
    expect(
        result.stdout as String, contains('PASS  web compile blob platform'));
    expect(result.stdout as String,
        contains('web gate: supported web surface compiles.'));
  }, timeout: const Timeout(Duration(minutes: 3)));

  test('core+sync public entrypoint compiles to JavaScript', () async {
    final outDir = Directory.systemTemp.createTempSync('lp_web_core_');
    addTearDown(() {
      try {
        outDir.deleteSync(recursive: true);
      } catch (_) {}
    });
    final result = await Process.run('dart', [
      'compile',
      'js',
      'tool/core_web_compile_smoke.dart',
      '-o',
      '${outDir.path}/core.js',
    ]);
    expect(result.exitCode, 0, reason: '${result.stdout}\n${result.stderr}');
    expect(result.exitCode, 0, reason: '${result.stdout}\n${result.stderr}');
  }, timeout: const Timeout(Duration(minutes: 3)));
}
