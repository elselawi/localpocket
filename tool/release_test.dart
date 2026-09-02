import 'dart:io';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import 'find_repo_root.dart';
import 'release.dart';

void main() {
  group('Release checklist unit & harness tests', () {
    test('repo root discovery finds directory with pubspec.yaml and tool/', () {
      final root = findRepoRoot();
      expect(File(p.join(root.path, 'pubspec.yaml')).existsSync(), isTrue);
      expect(Directory(p.join(root.path, 'tool')).existsSync(), isTrue);

      // Verify discovery from subfolder
      final toolDir = Directory(p.join(root.path, 'tool'));
      final foundFromTool = findRepoRoot(toolDir);
      expect(foundFromTool.path, equals(root.path));
    });

    test('step ordering and flag variations', () {
      final defaultSteps = buildReleaseSteps();
      expect(
          defaultSteps.map((s) => s.id).toList(),
          equals([
            'analyze',
            'offline_lint',
            'security_review',
            'traceability',
            'api_snapshot',
            'snapshot_clean',
            'api_contract_gate',
            'api_inventory',
            'raw_api_gate',
            'dependency_bounds',
            'docs_examples',
            'version_check',
            'readme_version',
            'core_web_smoke',
            'web_gate',
            'local_web_gate',
            'package_assets',
            'browser_web_matrix',
            'browser_sync_matrix',
            'test_suite',
            'release_tests',
            'coverage_collect',
            'coverage_format',
            'coverage_gate',
            'release_baseline',
            'publish_dry_run',
          ]));

      final noCovSteps = buildReleaseSteps(noCoverage: true);
      expect(noCovSteps.any((s) => s.id.startsWith('coverage')), isFalse);

      final perfSteps = buildReleaseSteps(isPerf: true);
      expect(perfSteps.any((s) => s.id == 'perf_gate'), isTrue);

      final longSteps = buildReleaseSteps(isLong: true);
      expect(longSteps.any((s) => s.id == 'test_suite_long'), isTrue);
      expect(longSteps.any((s) => s.id == 'release_tests'), isTrue);

      expect(
        defaultSteps.singleWhere((s) => s.id == 'raw_api_gate').argv,
        ['run', 'tool/raw_api_gate.dart'],
      );
    });

    test('release gate step includes all gate-tagged suites', () {
      final releaseTests =
          buildReleaseSteps().singleWhere((s) => s.id == 'release_tests');

      expect(
          releaseTests.argv,
          containsAll([
            'test',
            '--tags',
            'gate',
            '--run-skipped',
            '-j',
            '1',
            'test/release/',
            'test/web/',
          ]));

      final liveSuite = buildReleaseSteps(withReal: true)
          .singleWhere((s) => s.id == 'live_suite');
      expect(
          liveSuite.argv,
          containsAll([
            'test',
            '--tags',
            'real',
            '--run-skipped',
            'test/e2e/real/',
          ]));
    });

    test('--list output execution smoke', () {
      final root = findRepoRoot();
      final result = Process.runSync(
        'dart',
        ['run', 'tool/release.dart', '--list'],
        workingDirectory: root.path,
      );
      expect(result.exitCode, equals(0));
      expect(result.stdout, contains('Release checks'));
      expect(result.stdout, contains('[analyze]'));
      expect(result.stdout, contains('[security_review]'));
      expect(result.stdout, contains('[traceability]'));
      expect(result.stdout, contains('[raw_api_gate]'));
      expect(result.stdout, contains('[docs_examples]'));
    });

    test('fail-fast stops at first error with tail output printed', () {
      final root = findRepoRoot();
      final tempScript =
          File(p.join(root.path, 'tool', '_fake_failing_check.dart'));
      tempScript.writeAsStringSync('''
import 'dart:io';
void main() {
  for (var i = 1; i <= 40; i++) {
    stderr.writeln('Fake check log line \$i');
  }
  exit(1);
}
''');
      addTearDown(() {
        if (tempScript.existsSync()) tempScript.deleteSync();
      });

      final result = Process.runSync(
        'dart',
        ['run', 'tool/_fake_failing_check.dart'],
        workingDirectory: root.path,
      );
      expect(result.exitCode, equals(1));
      expect(result.stderr, contains('Fake check log line 40'));
    });
  });
}
