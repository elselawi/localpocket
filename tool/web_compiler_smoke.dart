import 'dart:io';

Future<void> main() async {
  final outDir = Directory('build/web/compiler-smoke')
    ..createSync(recursive: true);
  final js = File('${outDir.path}/app.js');
  final wasm = File('${outDir.path}/app.wasm');

  final jsResult = await Process.run('dart', [
    'compile',
    'js',
    '-O4',
    'tool/web_smoke/cipher_smoke_main.dart',
    '-o',
    js.path,
  ]);
  stdout.write(jsResult.stdout);
  stderr.write(jsResult.stderr);
  if (jsResult.exitCode != 0) exit(jsResult.exitCode);

  final wasmResult = await Process.run('dart', [
    'compile',
    'wasm',
    'tool/web_smoke/cipher_smoke_main.dart',
    '-o',
    wasm.path,
  ]);
  stdout.write(wasmResult.stdout);
  stderr.write(wasmResult.stderr);
  if (wasmResult.exitCode != 0) {
    stderr.writeln('dart2wasm smoke compile failed');
    exit(wasmResult.exitCode);
  }

  stdout.writeln('PASS dart2js and dart2wasm app compiler smoke');
}
