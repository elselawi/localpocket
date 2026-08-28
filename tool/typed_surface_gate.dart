import 'dart:io';

import 'api_surface_scanner.dart';
import 'find_repo_root.dart';

List<RecordMapInput> scanTypedSurface(Directory root) {
  final owners = exportedOwners(root, 'lib/typed.dart');
  final typedDir = Directory(
    '${root.path}${Platform.pathSeparator}lib${Platform.pathSeparator}src${Platform.pathSeparator}typed',
  );
  final files = typedDir
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
        owners: owners,
      ),
  ];
}

List<String> typedSurfaceViolations(List<RecordMapInput> inputs) => [
      for (final input in inputs)
        '${input.location}: typed entrypoint exposes record-map write input ${input.key}; use descriptors and field-native writes instead.',
    ]..sort();

void main() {
  final root = findRepoRoot();
  final violations = typedSurfaceViolations(scanTypedSurface(root));
  if (violations.isNotEmpty) {
    stderr.writeln('FAIL: typed public surface accepts raw record writes:');
    for (final violation in violations) {
      stderr.writeln('  - $violation');
    }
    exitCode = 1;
    return;
  }
  stdout.writeln('PASS: typed public surface is descriptor/draft-based.');
}
