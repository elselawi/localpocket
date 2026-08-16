import 'dart:io';
import 'package:path/path.dart' as p;
import 'find_repo_root.dart';

/// Traceability check:
/// Every public, user-facing API symbol exported from lib/ (localpocket.dart, pocketbase.dart, sync.dart)
/// must be referenced by at least one test file in test/ AND mentioned in doc / README.md.
/// Fails with the list of orphan symbols.
void main(List<String> args) {
  final root = findRepoRoot();
  final testDir = Directory(p.join(root.path, 'test'));
  final readmeFile = File(p.join(root.path, 'README.md'));

  if (!readmeFile.existsSync()) {
    stderr.writeln('README.md not found in ${root.path}');
    exitCode = 1;
    return;
  }

  final readmeText = readmeFile.readAsStringSync();

  final testFiles = testDir
      .listSync(recursive: true)
      .whereType<File>()
      .where((f) => f.path.endsWith('.dart'))
      .toList();

  final allTestText = StringBuffer();
  for (final f in testFiles) {
    allTestText.writeln(f.readAsStringSync());
  }
  final combinedTestText = allTestText.toString();

  // Key public, user-facing API classes and functions
  final exportedSymbols = <String>[
    'LocalPocket',
    'CollectionSchema',
    'Field',
    'IndexSpec',
    'FtsSpec',
    'StoreMigration',
    'ConflictPolicy',
    'SyncEngine',
    'PocketBaseBackend',
    'TokenProvider',
    'AesGcmFieldCipher',
    'BlobStore',
    'MemoryBlobStore',
  ];

  final missingInTest = <String>[];
  final missingInDocs = <String>[];

  for (final symbol in exportedSymbols) {
    // Check in tests
    final symbolPattern = RegExp('\\b${RegExp.escape(symbol)}\\b');
    if (!symbolPattern.hasMatch(combinedTestText)) {
      missingInTest.add(symbol);
    }

    // Check in README/docs
    if (!symbolPattern.hasMatch(readmeText)) {
      missingInDocs.add(symbol);
    }
  }

  var failed = false;
  if (missingInTest.isNotEmpty) {
    failed = true;
    stderr.writeln(
        'Traceability check: ${missingInTest.length} public symbol(s) missing test coverage:');
    for (final s in missingInTest) {
      stderr.writeln('  - $s');
    }
  }

  if (missingInDocs.isNotEmpty) {
    failed = true;
    stderr.writeln(
        'Traceability check: ${missingInDocs.length} public symbol(s) missing from README/docs:');
    for (final s in missingInDocs) {
      stderr.writeln('  - $s');
    }
  }

  if (failed) {
    exitCode = 1;
  } else {
    stdout.writeln(
        'PASS: Traceability check (${exportedSymbols.length} public symbols verified across tests and documentation).');
  }
}
