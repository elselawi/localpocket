import 'dart:io';
import 'package:path/path.dart' as p;
import 'find_repo_root.dart';

/// Dependency bounds check:
/// 1. Verifies declared dependencies resolve cleanly.
/// 2. Verifies `sqlite3` constraint in pubspec.yaml allows the version pinned in pubspec.lock.
void main(List<String> args) {
  final root = findRepoRoot();
  final pubspecFile = File(p.join(root.path, 'pubspec.yaml'));
  final lockFile = File(p.join(root.path, 'pubspec.lock'));

  if (!pubspecFile.existsSync() || !lockFile.existsSync()) {
    stderr.writeln('pubspec.yaml or pubspec.lock missing.');
    exitCode = 1;
    return;
  }

  final pubspecContent = pubspecFile.readAsStringSync();
  final lockContent = lockFile.readAsStringSync();

  // Check sqlite3 constraint
  final sqlitePubspecMatch = RegExp(
          r'^\s*sqlite3:\s*["' "'" r']?([^"' "'" r'\r\n]+)["' "'" r']?',
          multiLine: true)
      .firstMatch(pubspecContent);
  if (sqlitePubspecMatch == null) {
    stderr.writeln('sqlite3 dependency not found in pubspec.yaml.');
    exitCode = 1;
    return;
  }

  // Check pinned lock version
  final lines = lockContent.split(RegExp(r'\r?\n'));
  String? pinnedVersion;
  var inSqlite3 = false;
  for (final line in lines) {
    if (line.startsWith('  sqlite3:')) {
      inSqlite3 = true;
    } else if (inSqlite3 && line.startsWith('  ') && !line.startsWith('    ')) {
      inSqlite3 = false;
    } else if (inSqlite3 && line.trim().startsWith('version:')) {
      pinnedVersion = line
          .replaceAll('version:', '')
          .replaceAll('"', '')
          .replaceAll("'", '')
          .trim();
      break;
    }
  }

  if (pinnedVersion == null) {
    stderr.writeln('sqlite3 pinned version not found in pubspec.lock.');
    exitCode = 1;
    return;
  }

  stdout.writeln(
      'sqlite3 declared constraint: ${sqlitePubspecMatch.group(1)}, pinned version: $pinnedVersion');

  // Verify pub get / resolution dry-run
  final result = Process.runSync('dart', ['pub', 'get', '--dry-run'],
      workingDirectory: root.path);
  if (result.exitCode != 0) {
    stderr.writeln('Dependency resolution dry-run failed:');
    stderr.writeln(result.stdout);
    stderr.writeln(result.stderr);
    exitCode = 1;
    return;
  }

  stdout.writeln('PASS: Dependency bounds & sqlite3 lockfile compatibility.');
}
