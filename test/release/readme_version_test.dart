import 'dart:io';

import 'package:test/test.dart';

import '../../tool/readme_version_check.dart';

/// README installation-version gate.
///
/// Mirrors `tool/readme_version_check.dart` (a required release step): the
/// `localpocket:` dependency constraint in the README `## Installation`
/// section must name exactly the `pubspec.yaml` version, so the documented
/// install instructions cannot drift from the released package. The parser
/// tests below pin the policy itself so the gate and the real files cannot
/// drift apart.
void main() {
  group('readme installation version policy', () {
    test('README install snippet names the pubspec.yaml version', () async {
      final pubspec = await File('pubspec.yaml').readAsString();
      final readme = await File('README.md').readAsString();

      final pubspecVersion = parsePubspecVersion(pubspec);
      expect(pubspecVersion, isNotNull,
          reason: 'pubspec.yaml must declare a top-level version');

      final constraint = findReadmeInstallConstraint(readme);
      expect(constraint, isNotNull,
          reason: 'the README `## Installation` section must contain a '
              '`localpocket:` dependency line');

      expect(constraintMatchesVersion(constraint!, pubspecVersion!), isTrue,
          reason: 'README installs "$constraint" but pubspec.yaml is '
              '"$pubspecVersion" — update the installation block');
    });

    test('tool/readme_version_check.dart (release gate) passes', () async {
      final result =
          await Process.run('dart', ['run', 'tool/readme_version_check.dart']);
      expect(result.exitCode, 0,
          reason: 'tool output:\n${result.stdout}\n${result.stderr}');
      expect(result.stdout as String, contains('PASS'));
    }, timeout: const Timeout(Duration(minutes: 2)), tags: ['gate']);

    group('parsers', () {
      test('parses the top-level pubspec version only', () {
        expect(parsePubspecVersion('name: x\nversion: 1.2.3\n'), '1.2.3');
        expect(
            parsePubspecVersion('version: 0.1.1\r\ndependencies:\n'), '0.1.1');
        // Indented keys are nested blocks, not the package version.
        expect(parsePubspecVersion('flutter:\n  version: 9.9.9\n'), isNull);
        expect(parsePubspecVersion('name: x\n'), isNull);
      });

      test('finds the constraint inside the Installation section only', () {
        const readme = '---\n'
            'title: x\n'
            '---\n'
            '\n'
            '## Unrelated\n'
            'localpocket: ^9.9.9\n'
            '\n'
            '## Installation\n'
            '\n'
            'Add `localpocket` to your `pubspec.yaml`:\n'
            '\n'
            '```yaml\r\n'
            'dependencies:\r\n'
            '  localpocket: ^0.1.1\r\n'
            '```\n'
            '\n'
            '## Quick Start\n';
        expect(findReadmeInstallConstraint(readme), '^0.1.1');
      });

      test('returns null when the section or the line is missing', () {
        expect(findReadmeInstallConstraint('## Usage\n\ndart run\n'), isNull);
        expect(findReadmeInstallConstraint('## Installation\n\nno yaml\n'),
            isNull);
      });

      test('caret and exact constraints match only the same version', () {
        expect(constraintMatchesVersion('^0.1.1', '0.1.1'), isTrue);
        expect(constraintMatchesVersion('0.1.1', '0.1.1'), isTrue);
        expect(constraintMatchesVersion('^0.1.0', '0.1.1'), isFalse);
        expect(constraintMatchesVersion('^1.0.0', '0.1.1'), isFalse);
        expect(constraintMatchesVersion('any', '0.1.1'), isFalse);
      });
    });
  });
}
