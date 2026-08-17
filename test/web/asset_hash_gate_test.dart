@Tags(['gate'])

import 'dart:io';
import 'package:test/test.dart';

void main() {
  test('all checked-in web assets match SHA-256 manifests', () async {
    final result =
        await Process.run('dart', ['run', 'tool/web_asset_gate.dart']);
    expect(result.exitCode, 0, reason: '${result.stdout}\n${result.stderr}');
    expect(result.stdout, contains('PASS assets/sqlite3.wasm'));
    expect(result.stdout, contains('PASS assets/localpocket_worker.js'));
  }, timeout: const Timeout(Duration(minutes: 1)));
}
