import 'dart:io';
import 'package:path/path.dart' as p;
import 'find_repo_root.dart';

/// Offline lint: scans lib/ for forbidden imports and patterns.
///
/// Rules:
/// 1. `dart:io` leaking into web-compatible libraries.
///    - `lib/localpocket.dart`, `lib/typed.dart`, and everything under
///      `lib/src/core/`, `lib/src/sync/`, and `lib/src/typed/` must never
///      import `dart:io` or `package:http`.
///    - `native_blob_store.dart` and `native_backup_file.dart` are the only
///      files allowed to import `dart:io` — the designated platform-I/O home
///      in the files layer (see `test/core/layering_test.dart`).
/// 2. `lib/` must not contain any `print(` statements.
/// 3. Layering rules:
///    - `lib/src/core/` must never import from `lib/src/sync/`, `lib/src/pocketbase/`, or `lib/src/files/`.
///    - `lib/src/sync/` must never import from `lib/src/pocketbase/`.
///    - `lib/src/typed/` (and `lib/typed.dart`) must never import from
///      `lib/src/pocketbase/` or `package:localpocket/pocketbase.dart` — the
///      typed layer imports only the public core surface.
void main(List<String> args) {
  final root = findRepoRoot();
  final libDir = Directory(p.join(root.path, 'lib'));

  final violations = <String>[];

  final dartFiles = libDir
      .listSync(recursive: true)
      .whereType<File>()
      .where((f) => f.path.endsWith('.dart'))
      .toList();

  for (final file in dartFiles) {
    final relPath =
        p.relative(file.path, from: root.path).replaceAll(r'\', '/');
    final lines = file.readAsLinesSync();

    for (var i = 0; i < lines.length; i++) {
      final lineNum = i + 1;
      final line = lines[i];

      // Check print statements
      if (RegExp(r'\bprint\s*\(').hasMatch(line) &&
          !line.trim().startsWith('//')) {
        violations.add(
            '$relPath:$lineNum: Forbidden print() statement in production code.');
      }

      // Check forbidden dart:io imports
      if (RegExp(r'''^\s*import\s+['"]dart:io['"]''').hasMatch(line)) {
        final isPlatformIo =
            relPath == 'lib/src/files/native_blob_store.dart' ||
                relPath == 'lib/src/files/native_backup_file.dart';
        if (!isPlatformIo) {
          violations
              .add('$relPath:$lineNum: Forbidden direct import of dart:io.');
        }
      }

      // Check forbidden http imports
      if (RegExp(r'''^\s*import\s+['"]package:http/''').hasMatch(line)) {
        if (!relPath.startsWith('lib/src/pocketbase/')) {
          violations.add(
              '$relPath:$lineNum: Forbidden import of package:http outside pocketbase adapter.');
        }
      }

      // Layering: core/sync/files/typed cannot import pocketbase
      if (relPath.startsWith('lib/src/core/') ||
          relPath.startsWith('lib/src/sync/') ||
          relPath.startsWith('lib/src/files/') ||
          relPath.startsWith('lib/src/typed/') ||
          relPath == 'lib/localpocket.dart' ||
          relPath == 'lib/typed.dart' ||
          relPath == 'lib/sync.dart') {
        if (RegExp(r'''^\s*import\s+['"][^'"]*pocketbase/''').hasMatch(line) ||
            RegExp(r'''^\s*import\s+['"]package:localpocket/pocketbase\.dart['"]''')
                .hasMatch(line)) {
          violations.add(
              '$relPath:$lineNum: Layering violation: cannot import pocketbase from core/sync/files/typed.');
        }
      }
    }
  }

  if (violations.isNotEmpty) {
    stderr
        .writeln('Offline lint failed with ${violations.length} violation(s):');
    for (final v in violations) {
      stderr.writeln('  $v');
    }
    exitCode = 1;
  } else {
    stdout.writeln(
        'PASS: Offline lint (${dartFiles.length} files checked, 0 violations).');
  }
}
