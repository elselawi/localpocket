/// Real web/WASM/OPFS gate.
///
/// A real browser CI suite (opening WASM/IndexedDB, OPFS multi-megabyte blob
/// I/O, persistence across reload) cannot run inside this hermetic suite; this
/// test is the CI-visible stand-in and pins the exact current state:
///
///   1. The supported web surface (the blob-store platform conditional export)
///      compiles to JS — the [tool/web_gate.dart] gate must pass.
///   2. The full core DB layer is DOCUMENTED as not-yet-web-compilable: it
///      hard-imports `package:sqlite3` (dart:ffi). If that ever changes (a
///      WASM/IndexedDB sqlite factory is wired in), this test must be updated.
///   3. The hermetic web capability facts (no-WAL, no-mmap, no-journal-mode
///      probe on the web profile) are covered in
///      `test/core/pragma/probe_test.dart`.
///
/// These tests spawn nested `dart` processes and are therefore `gate`-tagged:
/// they run explicitly via `dart test --tags gate --run-skipped -j 1 test/release/`
/// or as sequential steps of `tool/release_gate.dart` (they cannot run inside
/// the default parallel suite — see dart_test.yaml).
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
        contains('core DB web compilation is deferred'));
  }, timeout: const Timeout(Duration(minutes: 3)));

  test('pinned limitation: core DB compile for web fails on sqlite3 dart:ffi',
      () async {
    // This pins the CURRENT state so a future WASM factory flips it loudly.
    final outDir = Directory.systemTemp.createTempSync('lp_web_pin_');
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
    final combined = '${result.stdout}\n${result.stderr}';
    expect(result.exitCode, isNot(0),
        reason: 'core web compile currently fails (sqlite3 uses dart:ffi). '
            'If this starts PASSING, a WASM sqlite factory was wired in — '
            'update this test and the README. Output: $combined');
    expect(combined, contains('dart:ffi'),
        reason: 'the failure must be the documented sqlite3 FFI limitation, '
            'not a new layering leak');
  }, timeout: const Timeout(Duration(minutes: 3)));

  test('core+sync entrypoint compiles and runs independently (native)',
      () async {
    // The core+sync public API is independently usable on the native target
    // without importing the pocketbase adapter.
    final result =
        await Process.run('dart', ['run', 'tool/core_web_compile_smoke.dart']);
    expect(result.exitCode, 0, reason: '${result.stdout}\n${result.stderr}');
  }, timeout: const Timeout(Duration(minutes: 3)));
}
