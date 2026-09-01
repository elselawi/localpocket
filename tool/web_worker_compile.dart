import 'dart:io';

/// Compiles the production sqlite3_web worker used by the web database.
Future<void> main() async {
  final output = File('build/web/localpocket_worker.js');
  output.parent.createSync(recursive: true);
  final result = await Process.run('dart', [
    'compile',
    'js',
    '-O4',
    'lib/src/platform/web/worker/main.dart',
    '-o',
    output.path,
  ]);
  stdout.write(result.stdout);
  stderr.write(result.stderr);
  if (result.exitCode != 0) exit(result.exitCode);
  stdout.writeln('PASS compiled ${output.path}');
}
