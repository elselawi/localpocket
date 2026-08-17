import 'dart:io';

import 'package:crypto/crypto.dart';

/// Verifies the checked-in sqlite3.wasm asset against its manifest.
Future<void> main() async {
  final wasm = File('assets/sqlite3.wasm');
  final manifest = File('assets/sqlite3.wasm.sha256');
  if (!wasm.existsSync() || !manifest.existsSync()) {
    stderr.writeln('FAIL missing wasm asset or checksum manifest');
    exitCode = 1;
    return;
  }

  final line = (await manifest.readAsLines())
      .map((value) => value.trim())
      .firstWhere((value) => value.isNotEmpty, orElse: () => '');
  final expected = line.split(RegExp(r'\s+')).first.toLowerCase();
  final actual = sha256.convert(await wasm.readAsBytes()).toString();
  if (!RegExp(r'^[0-9a-f]{64}$').hasMatch(expected) || expected != actual) {
    stderr.writeln('FAIL sqlite3.wasm SHA-256 mismatch');
    stderr.writeln('expected: $expected');
    stderr.writeln('actual:   $actual');
    exitCode = 1;
    return;
  }
  stdout.writeln('PASS sqlite3.wasm SHA-256 $actual');
}
