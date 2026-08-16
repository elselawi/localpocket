import 'dart:io';
import 'package:path/path.dart' as p;
import 'find_repo_root.dart';

/// Version and CHANGELOG consistency check:
/// Verifies that the version in `pubspec.yaml` matches the topmost version entry in `CHANGELOG.md`.
void main(List<String> args) {
  final root = findRepoRoot();
  final pubspecFile = File(p.join(root.path, 'pubspec.yaml'));
  final changelogFile = File(p.join(root.path, 'CHANGELOG.md'));

  if (!pubspecFile.existsSync() || !changelogFile.existsSync()) {
    stderr.writeln('pubspec.yaml or CHANGELOG.md missing.');
    exitCode = 1;
    return;
  }

  final pubspecContent = pubspecFile.readAsStringSync();
  final changelogContent = changelogFile.readAsStringSync();

  final versionMatch = RegExp(
          r'^\s*version:\s*([0-9]+\.[0-9]+\.[0-9]+[^\r\n]*)',
          multiLine: true)
      .firstMatch(pubspecContent);
  if (versionMatch == null) {
    stderr.writeln('Could not parse version from pubspec.yaml.');
    exitCode = 1;
    return;
  }
  final pubspecVersion = versionMatch.group(1)!.trim();

  final changelogMatch =
      RegExp(r'^##\s+([0-9]+\.[0-9]+\.[0-9]+[^\r\n]*)', multiLine: true)
          .firstMatch(changelogContent);
  if (changelogMatch == null) {
    stderr.writeln(
        'Could not find top version heading in CHANGELOG.md (expected ## X.Y.Z).');
    exitCode = 1;
    return;
  }
  final changelogVersion = changelogMatch.group(1)!.trim();

  if (pubspecVersion != changelogVersion) {
    stderr.writeln(
        'Version mismatch: pubspec.yaml ($pubspecVersion) != CHANGELOG.md ($changelogVersion)');
    exitCode = 1;
  } else {
    stdout.writeln(
        'PASS: Version consistency (v$pubspecVersion matches CHANGELOG.md).');
  }
}
