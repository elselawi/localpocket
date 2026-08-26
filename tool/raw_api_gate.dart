import 'dart:io';

import 'api_surface_scanner.dart';
import 'find_repo_root.dart';

const allowlistPath = 'tool/raw_map_api.txt';

final class AllowlistEntry {
  const AllowlistEntry(this.key, this.reason);

  final String key;
  final String reason;
}

List<String> rawApiViolations({
  required List<RecordMapInput> inputs,
  required String allowlist,
}) {
  final violations = <String>[];
  final entries = <AllowlistEntry>[];
  final seen = <String>{};
  final lines = allowlist.replaceAll('\r\n', '\n').split('\n');
  for (var i = 0; i < lines.length; i++) {
    final line = lines[i].trim();
    if (line.isEmpty || line.startsWith('#')) continue;
    final commentAt = line.indexOf(' # ');
    if (commentAt < 1 || commentAt == line.length - 3) {
      violations.add('$allowlistPath:${i + 1}: malformed entry; expected '
          '`key # reason`.');
      continue;
    }
    final entry = AllowlistEntry(
      line.substring(0, commentAt).trim(),
      line.substring(commentAt + 3).trim(),
    );
    if (!seen.add(entry.key)) {
      violations
          .add('$allowlistPath:${i + 1}: duplicate entry `${entry.key}`.');
    }
    entries.add(entry);
  }

  final sorted = entries.map((entry) => entry.key).toList()..sort();
  final listed = entries.map((entry) => entry.key).toList();
  if (!_same(listed, sorted)) {
    violations.add('$allowlistPath: entries must be sorted by canonical key.');
  }

  final current = {for (final input in inputs) input.key: input};
  for (final input in inputs) {
    if (!seen.contains(input.key)) {
      violations.add('${input.location}: unallowlisted public raw record-write '
          'API `${input.key}`. Add an exact reviewed entry to $allowlistPath.');
    }
  }
  for (final entry in entries) {
    if (!current.containsKey(entry.key)) {
      violations.add('$allowlistPath: stale entry `${entry.key}` '
          '(${entry.reason}). Remove it or restore the reviewed declaration.');
    }
  }
  violations.sort();
  return violations;
}

bool _same(List<String> a, List<String> b) {
  if (a.length != b.length) return false;
  for (var i = 0; i < a.length; i++) {
    if (a[i] != b[i]) return false;
  }
  return true;
}

List<RecordMapInput> scanRawSurface(Directory root) {
  final lib = Directory('${root.path}${Platform.pathSeparator}lib');
  final files = lib
      .listSync(recursive: true)
      .whereType<File>()
      .where((file) => file.path.endsWith('.dart'))
      .toList()
    ..sort((a, b) => a.path.compareTo(b.path));
  return [
    for (final file in files)
      ...scanRecordMapInputs(
        file.readAsStringSync(),
        path: file.path.substring(root.path.length + 1).replaceAll('\\', '/'),
      ),
  ];
}

void main(List<String> args) {
  final root = findRepoRoot();
  final inputs = scanRawSurface(root);
  if (args.contains('--print-current')) {
    for (final input in inputs) {
      stdout.writeln('${input.key} # REVIEW REASON');
    }
    return;
  }
  final allowlist = File(
    '${root.path}${Platform.pathSeparator}${allowlistPath.replaceAll('/', Platform.pathSeparator)}',
  );
  if (!allowlist.existsSync()) {
    stderr.writeln('FAIL: missing $allowlistPath.');
    exitCode = 1;
    return;
  }
  final violations = rawApiViolations(
    inputs: inputs,
    allowlist: allowlist.readAsStringSync(),
  );
  if (violations.isNotEmpty) {
    stderr.writeln('FAIL: raw map API growth detected:');
    for (final violation in violations) {
      stderr.writeln('  - $violation');
    }
    exitCode = 1;
    return;
  }
  stdout
      .writeln('PASS: raw API gate (${inputs.length} reviewed declarations).');
}
