import 'dart:io';
import 'package:path/path.dart' as p;

/// Locates the repository root directory by walking up from [startDir] (or current directory)
/// looking for `pubspec.yaml` containing `name: localpocket` and the `tool/` directory.
Directory findRepoRoot([Directory? startDir]) {
  var dir = (startDir ?? Directory.current).absolute;
  while (true) {
    final pubspec = File(p.join(dir.path, 'pubspec.yaml'));
    final toolDir = Directory(p.join(dir.path, 'tool'));

    if (pubspec.existsSync() && toolDir.existsSync()) {
      try {
        final content = pubspec.readAsStringSync();
        if (RegExp(r'^name:\s*localpocket\b', multiLine: true)
            .hasMatch(content)) {
          return dir;
        }
      } catch (_) {}
    }

    final parent = dir.parent;
    if (parent.path == dir.path) {
      throw StateError(
          'Could not find localpocket repo root from: ${(startDir ?? Directory.current).path}');
    }
    dir = parent;
  }
}
