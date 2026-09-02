@Tags(['gate'])

import 'dart:io';

import 'package:test/test.dart';

void main() {
  test('pinned sqlite3.wasm passes the checksum gate', () async {
    final result = await Process.run('dart', [
      'run',
      'tool/web_asset_verify.dart',
    ]);
    expect(result.exitCode, 0, reason: '${result.stdout}\n${result.stderr}');
    expect(result.stdout, contains('PASS sqlite3.wasm SHA-256'));
  }, timeout: const Timeout(Duration(minutes: 1)));
}
