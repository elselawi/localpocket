import 'dart:io';
import 'package:crypto/crypto.dart';

Future<void> main() async {
  final assets = <String, String>{
    'assets/sqlite3.wasm': 'assets/sqlite3.wasm.sha256',
    'assets/localpocket_worker.js': 'assets/localpocket_worker.js.sha256',
  };

  for (final entry in assets.entries) {
    final asset = File(entry.key);
    final manifest = File(entry.value);
    if (!asset.existsSync() || !manifest.existsSync()) {
      throw StateError('Missing asset or checksum: ${entry.key}');
    }
    final line = (await manifest.readAsLines()).firstWhere(
      (line) => line.trim().isNotEmpty,
      orElse: () => '',
    );
    final parts = line.trim().split(RegExp(r'\s+'));
    if (parts.length < 2) {
      throw StateError('Malformed checksum manifest: ${entry.value}');
    }
    // Raw bytes, never eol-normalized: the manifest was computed over the
    // byte-exact artifact, and `.gitattributes` pins the assets as binary so
    // a checkout can never convert them.
    final actual = sha256.convert(await asset.readAsBytes()).toString();
    if (parts[0].toLowerCase() != actual) {
      throw StateError(
          '${entry.key} checksum mismatch: expected ${parts[0]}, actual $actual');
    }
    stdout.writeln('PASS ${entry.key} $actual');
  }
}
