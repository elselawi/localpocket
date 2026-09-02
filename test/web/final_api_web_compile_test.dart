import 'dart:io';

import 'package:test/test.dart';

/// Compiles the web vocabulary fixture (`final_api_web.dart`) for JavaScript.
///
/// The fixture is the executable definition of the destination public API as
/// the browser page sees it (plan Phase 5 item 8: "Add the final public
/// compile fixture to both VM and JavaScript builds"). It imports only the
/// public barrel, so a successful dart2js compile proves the whole facade —
/// including the web bootstrap paths — stays free of dart:io and compiles
/// for the worker-backed runtime.
void main() {
  test(
    'final_api_web.dart compiles for JavaScript',
    () async {
      final outDir = Directory('build/web/final-api-fixture')
        ..createSync(recursive: true);
      final result = await Process.run(
        Platform.resolvedExecutable,
        [
          'compile',
          'js',
          '-O1',
          'test/compile_fixtures/final_api_web.dart',
          '-o',
          '${outDir.path}/final_api_web.js',
        ],
        stdoutEncoding: const SystemEncoding(),
        stderrEncoding: const SystemEncoding(),
      );
      expect(
        result.exitCode,
        0,
        reason: 'dart2js compile of the web API fixture failed:\n'
            '${result.stdout}\n${result.stderr}',
      );
      expect(
        File('${outDir.path}/final_api_web.js').readAsStringSync(),
        isNotEmpty,
      );
    },
    timeout: const Timeout(Duration(minutes: 8)),
    tags: <String>['gate'],
  );
}
