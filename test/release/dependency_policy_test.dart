import 'dart:io';

import 'package:test/test.dart';

import '../../tool/dependency_policy.dart';

/// Dependency hygiene gate.
///
/// Mirrors `tool/dependency_check.dart` (a required release step): no runtime
/// dependency constraint in `pubspec.yaml` may float across more than one
/// major version. A foundational dependency that can jump a major boundary
/// between resolutions (e.g. the `sqlite3` FFI foundation moving 2.x ↔ 3.x)
/// weakens reproducibility audits. The parser tests below pin the policy
/// itself so the gate and the real `pubspec.yaml` cannot drift.
void main() {
  group('dependency major-span policy', () {
    test('pubspec.yaml has no runtime dependency spanning multiple majors',
        () async {
      final pubspec = await File('pubspec.yaml').readAsString();
      final violations = majorSpanViolations(pubspec);
      expect(violations, isEmpty,
          reason: 'runtime dependencies must stay within a single major '
              'version:\n${violations.join('\n')}');
      // The specific finding that prompted this gate: sqlite3 was floating
      // across 2.x ↔ 3.x. It must now be pinned to a single major.
      expect(pubspec, isNot(contains('>=2.4.0 <4.0.0')),
          reason: 'sqlite3 must be pinned to a single major version');
      expect(pubspec, contains('sqlite3: ^3.5.1'),
          reason: 'sqlite3 must be pinned to the tested 3.x major');
    });

    test('tool/dependency_check.dart (release gate) passes', () async {
      final result =
          await Process.run('dart', ['run', 'tool/dependency_check.dart']);
      expect(result.exitCode, 0,
          reason: 'tool output:\n${result.stdout}\n${result.stderr}');
      expect(result.stdout as String, contains('PASS'));
    }, timeout: const Timeout(Duration(minutes: 2)), tags: ['gate']);

    group('constraint parser', () {
      test('caret and exact pins are single-major', () {
        expect(
          majorSpanViolations('dependencies:\n'
              '  a: ^1.2.3\n'
              '  b: 1.2.3\n'
              '  c: ^0.9.4\n'
              '  d: ^2.9.0\n'),
          isEmpty,
        );
      });

      test('a two-major range is flagged', () {
        final violations =
            majorSpanViolations('dependencies:\n  a: ">=2.4.0 <4.0.0"\n');
        expect(violations, hasLength(1));
        expect(violations.single, contains('a'));
        expect(violations.single, contains('2 major versions'));
      });

      test('a single-major range is accepted', () {
        expect(
          majorSpanViolations('dependencies:\n  a: ">=3.5.0 <4.0.0"\n'),
          isEmpty,
        );
      });

      test('any and unbounded constraints are flagged', () {
        expect(majorSpanViolations('dependencies:\n  a: any\n'), hasLength(1));
        expect(majorSpanViolations('dependencies:\n  a: ">=1.0.0"\n'),
            hasLength(1));
      });

      test('dev_dependencies are not checked', () {
        expect(
          majorSpanViolations('dependencies:\n'
              '  a: ^1.0.0\n'
              'dev_dependencies:\n'
              '  b: ">=1.0.0 <3.0.0"\n'),
          isEmpty,
        );
      });

      test('explicit exemptions are respected', () {
        expect(
          majorSpanViolations('dependencies:\n  a: ">=1.0.0 <3.0.0"\n',
              exemptions: const {'a'}),
          isEmpty,
        );
      });
    });
  });
}
