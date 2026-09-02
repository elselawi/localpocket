@Tags(['gate'])

import 'dart:io';

import 'package:test/test.dart';

void main() {
  test('web app compiles with dart2js and dart2wasm', () async {
    final result = await Process.run('dart', [
      'run',
      'tool/web_compiler_smoke.dart',
    ]);
    expect(result.exitCode, 0, reason: '${result.stdout}\n${result.stderr}');
    expect(File('build/web/compiler-smoke/app.js').existsSync(), isTrue);
    expect(File('build/web/compiler-smoke/app.wasm').existsSync(), isTrue);
  }, timeout: const Timeout(Duration(minutes: 5)));
}
