import 'dart:convert';
import 'dart:io';

/// Records release evidence metadata without claiming platform coverage that
/// was not actually run. Output is written to build/release-baseline.json.
Future<void> main() async {
  final output = File('build/release-baseline.json')
    ..parent.createSync(recursive: true);
  final result = {
    'date': DateTime.now().toUtc().toIso8601String(),
    'platform': Platform.operatingSystem,
    'dart': Platform.version,
    'browserMatrix':
        'Chromium/Firefox/WebKit via Playwright; real Safari not run',
    'coverage': 'Dart/VM library coverage only; browser JavaScript excluded',
    'webAssets': [
      'assets/sqlite3.wasm',
      'assets/localpocket_worker.js',
    ],
    'gitStatus': (await Process.run('git', ['status', '--short'])).stdout,
  };
  output.writeAsStringSync(const JsonEncoder.withIndent('  ').convert(result));
  stdout.writeln('PASS release evidence written to ${output.path}');
}
