@Tags(['gate'])

import 'dart:io';

import 'package:test/test.dart';

void main() {
  test('sqlite3_web worker entrypoint compiles to JavaScript', () async {
    final result = await Process.run('dart', [
      'run',
      'tool/web_worker_compile.dart',
    ]);
    expect(result.exitCode, 0, reason: '${result.stdout}\n${result.stderr}');
    expect(File('build/web/localpocket_worker.js').existsSync(), isTrue);
  }, timeout: const Timeout(Duration(minutes: 3)));
}
