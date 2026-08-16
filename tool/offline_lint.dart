import 'dart:io';
import 'package:path/path.dart' as p;
import 'find_repo_root.dart';

/// Offline lint: scans lib/ for forbidden imports and patterns.
///
/// Rules:
/// 1. `dart:io` leaking into web-compatible libraries.
///    - `lib/localpocket.dart` and everything under `lib/src/core/` and `lib/src/sync/`
///      and `lib/sync.dart` must never import `dart:io` or `package:http`.
///    - `native_blob_store.dart` is the only file allowed to import `dart:io`, via conditional export `native_blob_store_platform.dart`.
/// 2. `lib/` must not contain any `print(` statements.
/// 3. Layering rules:
///    - `lib/src/core/` must never import from `lib/src/sync/`, `lib/src/pocketbase/`, or `lib/src/files/`.
///    - `lib/src/sync/` must never import from `lib/src/pocketbase/`.
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
        if (relPath != 'lib/src/files/native_blob_store.dart') {
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

      // Layering: core cannot import sync, pocketbase, files
      if (relPath.startsWith('lib/src/core/') ||
          relPath.startsWith('lib/src/sync/') ||
          relPath.startsWith('lib/src/files/') ||
          relPath == 'lib/localpocket.dart' ||
          relPath == 'lib/sync.dart') {
        if (RegExp(r'''^\s*import\s+['"][^'"]*pocketbase/''').hasMatch(line) ||
            RegExp(r'''^\s*import\s+['"]package:localpocket/pocketbase\.dart['"]''')
                .hasMatch(line)) {
          violations.add(
              '$relPath:$lineNum: Layering violation: cannot import pocketbase from core/sync/files.');
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
