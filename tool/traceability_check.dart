import 'dart:io';

import 'package:path/path.dart' as p;

import 'find_repo_root.dart';

/// Traceability check:
/// Every registered public, user-facing API symbol must be referenced by at
/// least one test file in test/ AND mentioned in README.md.
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

  // Public typed-layer symbols are registered here as they are introduced
  // (phased rollout, see _modelling_plan.md). Phase 1 adds the definition
  // core: StoreDef, FieldDef, Fields, TypedStoreMismatchError, and the
  // per-kind descriptor classes. Each registered symbol must be referenced
  // by at least one test file in test/ AND in README.md before the check
  // can pass.

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
    // Typed consumer surface. Per-kind descriptors are represented by
    // FieldDef/Fields; hidden native/web adapter seams are intentionally not
    // package API and therefore are not registered.
    'StoreDef',
    'Fields',
    'FieldDef',
    'Draft',
    'TypedRow',
    'TypedCollection',
    'Cond',
    'TypedQuery',
    'TypedPage',
    'TypedSearch',
    'TypedSearchHit',
    'TypedStoreRegistry',
    'TypedStoreMismatchError',
    'indexSpec',
    'ftsSpec',
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
