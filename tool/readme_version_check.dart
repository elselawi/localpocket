import 'dart:io';
import 'package:path/path.dart' as p;

import 'find_repo_root.dart';

/// README installation-version consistency check:
/// Verifies that the `localpocket:` dependency version documented in the
/// `## Installation` section of `README.md` names exactly the version in
/// `pubspec.yaml`, so the documented install instructions cannot drift from
/// the released package.
///
/// Accepted README forms are the documented caret constraint
/// `localpocket: ^X.Y.Z` and the exact `localpocket: X.Y.Z`; anything else —
/// an older/newer version, `any`, or a missing line — fails the gate.

/// Extracts the top-level `version:` value from pubspec content (`null` when
/// absent). Indented keys (e.g. nested blocks) are not the package version.
String? parsePubspecVersion(String pubspecContent) {
  final match = RegExp(
    r'^version:\s*([0-9]+\.[0-9]+\.[0-9]+[^\r\n]*)',
    multiLine: true,
  ).firstMatch(pubspecContent);
  return match?.group(1)?.trim();
}

/// Finds the `localpocket:` dependency constraint inside the `## Installation`
/// section of README content (e.g. `^0.1.1`), or `null` when the section or
/// its dependency line is missing. Only lines between the `## Installation`
/// heading and the next markdown heading are considered, so dependency
/// snippets elsewhere in the document cannot satisfy the gate.
String? findReadmeInstallConstraint(String readmeContent) {
  final lines = readmeContent.split('\n');
  var start = -1;
  for (var i = 0; i < lines.length; i++) {
    if (RegExp(r'^##\s+Installation\s*$').hasMatch(lines[i])) {
      start = i;
      break;
    }
  }
  if (start < 0) return null;
  final constraint = RegExp(r'^\s*localpocket:\s*(\S+)\s*$');
  for (var i = start + 1; i < lines.length; i++) {
    final line = lines[i];
    // The next markdown heading ends the section.
    if (RegExp(r'^#{1,6}\s').hasMatch(line)) break;
    final match = constraint.firstMatch(line);
    if (match != null) return match.group(1);
  }
  return null;
}

/// Whether [constraint] (`^X.Y.Z` or `X.Y.Z`) names exactly [version].
bool constraintMatchesVersion(String constraint, String version) {
  final stripped =
      constraint.startsWith('^') ? constraint.substring(1) : constraint;
  return stripped == version;
}

void main() {
  final root = findRepoRoot();
  final pubspecFile = File(p.join(root.path, 'pubspec.yaml'));
  final readmeFile = File(p.join(root.path, 'README.md'));

  if (!pubspecFile.existsSync() || !readmeFile.existsSync()) {
    stderr.writeln('pubspec.yaml or README.md missing.');
    exitCode = 1;
    return;
  }

  final pubspecVersion = parsePubspecVersion(pubspecFile.readAsStringSync());
  if (pubspecVersion == null) {
    stderr.writeln('Could not parse version from pubspec.yaml.');
    exitCode = 1;
    return;
  }

  final constraint = findReadmeInstallConstraint(readmeFile.readAsStringSync());
  if (constraint == null) {
    stderr.writeln(
        'Could not find a `localpocket: ^$pubspecVersion` dependency line '
        'inside the `## Installation` section of README.md.');
    exitCode = 1;
    return;
  }

  if (!constraintMatchesVersion(constraint, pubspecVersion)) {
    stderr.writeln('Version mismatch: README.md installation instructions '
        '($constraint) != pubspec.yaml ($pubspecVersion).');
    stderr.writeln(
        'Update the `localpocket:` line in the README installation block '
        'to ^$pubspecVersion.');
    exitCode = 1;
    return;
  }

  stdout.writeln('PASS: README installation version ($constraint) matches '
      'pubspec.yaml (v$pubspecVersion).');
}
