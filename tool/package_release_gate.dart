import 'dart:io';

/// Verifies package metadata and required web assets are present before release.
Future<void> main() async {
  final required = [
    'assets/sqlite3.wasm',
    'assets/sqlite3.wasm.sha256',
    'assets/localpocket_worker.js',
    'assets/localpocket_worker.js.sha256',
  ];
  final missing = required.where((path) => !File(path).existsSync()).toList();
  if (missing.isNotEmpty) {
    stderr.writeln('Missing release assets: ${missing.join(', ')}');
    exitCode = 1;
    return;
  }
  final pubspec = File('pubspec.yaml').readAsStringSync();
  for (final asset in required) {
    if (!pubspec.contains(asset)) {
      stderr.writeln('pubspec.yaml does not declare required asset: $asset');
      exitCode = 1;
      return;
    }
  }
  if (!File('README.md').existsSync() || !File('CHANGELOG.md').existsSync()) {
    stderr.writeln('README.md and CHANGELOG.md are required for release.');
    exitCode = 1;
    return;
  }
  stdout.writeln('PASS package metadata and required web assets.');
}
