import 'dart:io';
import 'package:path/path.dart' as p;
import 'find_repo_root.dart';

/// Offline lint: scans lib/ for forbidden imports and patterns.
///
/// Rules:
/// 1. `dart:io` leaking into web-compatible libraries.
///    - `lib/localpocket.dart` and everything under `lib/src/kernel/` (including
///      `lib/src/kernel/sync/` and `lib/src/kernel/files/`) must never import
///      `dart:io` or `package:http`.
///    - `lib/src/platform/native/blob_store.dart` and
///      `lib/src/platform/native/backup_store.dart` are the only files allowed
///      to import `dart:io` — the designated platform-I/O home (see
///      `test/kernel/layering_test.dart`).
/// 2. `lib/` must not contain any `print(` statements.
/// 3. Layering rules:
///    - `lib/src/kernel/` must never import from `lib/src/adapters/pocketbase/`.
///    - `lib/src/kernel/sync/` and `lib/src/kernel/files/` must never import
///      from `lib/src/adapters/pocketbase/`.
///    - `lib/localpocket.dart` is the composition root: it may EXPORT the
///      pocketbase surface (the single-import requirement) but must never
///      IMPORT pocketbase internals.
/// 4. No web SDK imports (`dart:html`, `dart:js`, `dart:js_interop`,
///    `package:web`) outside `lib/src/platform/` — the browser-page and worker
///    concerns live only in the platform layer.
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
            relPath == 'lib/src/platform/native/blob_store.dart' ||
                relPath == 'lib/src/platform/native/backup_store.dart';
        if (!isPlatformIo) {
          violations
              .add('$relPath:$lineNum: Forbidden direct import of dart:io.');
        }
      }

      // Check forbidden http imports
      if (RegExp(r'''^\s*import\s+['"]package:http/''').hasMatch(line)) {
        if (!relPath.startsWith('lib/src/adapters/pocketbase/')) {
          violations.add(
              '$relPath:$lineNum: Forbidden import of package:http outside pocketbase adapter.');
        }
      }

      // Layering: kernel (incl. sync/files) cannot import pocketbase
      if (relPath.startsWith('lib/src/kernel/') ||
          relPath == 'lib/localpocket.dart') {
        if (RegExp(r'''^\s*import\s+['"][^'"]*pocketbase/''').hasMatch(line) ||
            RegExp(r'''^\s*import\s+['"]package:localpocket/pocketbase\.dart['"]''')
                .hasMatch(line)) {
          violations.add(
              '$relPath:$lineNum: Layering violation: cannot import pocketbase from the kernel or the barrel.');
        }
      }

      // Web SDK imports belong to the platform layer only.
      if (RegExp(
              r'''^\s*import\s+['"](dart:html|dart:js|dart:js_interop|dart:web_sql|package:web/)''')
          .hasMatch(line)) {
        if (!relPath.startsWith('lib/src/platform/')) {
          violations.add(
              '$relPath:$lineNum: Layering violation: web SDK imports are only allowed under lib/src/platform/.');
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
