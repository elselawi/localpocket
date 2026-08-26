/// Compile-fail harness (plan §4.8): each fixture in
/// `test/typed/compile_fail/` pins a compile-time failure the typed layer
/// guarantees.
///
/// The fixtures are intentionally invalid Dart and are excluded from the
/// main `dart analyze` run by their own `analysis_options.yaml`; this test
/// (gate-tagged, run sequentially with `-j 1`) analyzes each one explicitly
/// and asserts the annotated diagnostic codes — the exact codes only, so a
/// typo that breaks a fixture differently also fails the gate.
///
/// Convention: one `// expect: <code>` comment per expected error. A fixture
/// without `expect:` lines must analyze clean (e.g. the §4.8 case-156
/// "known limit" fixture).
@Tags(['gate'])
library;

import 'dart:io';

import 'package:test/test.dart';

void main() {
  final fixturesDir = Directory('test/typed/compile_fail');
  final fixtures = fixturesDir
      .listSync()
      .whereType<File>()
      .where((f) => f.path.endsWith('.dart'))
      .toList()
    ..sort((a, b) => a.path.compareTo(b.path));

  group('compile-fail fixtures', () {
    for (final fixture in fixtures) {
      final name = fixture.uri.pathSegments.last;
      test(name, () async {
        final source = fixture.readAsStringSync().replaceAll('\r\n', '\n');
        final expected = <String>{
          for (final line in source.split('\n'))
            if (line.trim().startsWith('// expect:'))
              line.substring(line.indexOf('// expect:') + 10).trim(),
        };

        final result = await Process.run(
          'dart',
          ['analyze', '--format', 'machine', fixture.path],
          workingDirectory: Directory.current.path,
        );
        final reported = <String>{
          for (final raw in '${result.stdout}'.split('\n'))
            if (raw.contains('|'))
              if (raw.split('|')[0] == 'ERROR') raw.split('|')[2].toLowerCase(),
        };

        expect(
          reported,
          expected,
          reason: expected.isEmpty
              ? 'this fixture must analyze clean but reported errors; '
                  'analyzer output:\n${result.stdout}'
              : 'the fixture must report exactly the annotated diagnostics; '
                  'analyzer output:\n${result.stdout}',
        );
      }, timeout: const Timeout(Duration(minutes: 3)));
    }
  });
}
