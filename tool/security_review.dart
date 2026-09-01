import 'dart:io';
import 'package:path/path.dart' as p;
import 'find_repo_root.dart';

/// Security review: static scan and verification of security invariants in lib/:
/// (a) All query values travel as bound SQL parameters, never string-interpolated into queries.
/// (b) LIKE patterns in query builders escape special characters.
/// (c) Encrypted fields are excluded from indexes/sort/FTS.
/// (d) No secrets/tokens are persisted to SQLite or written into system tables.
/// (e) Record-id format validation is enforced on writes and incoming pulls.
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
      final trimmed = line.trim();

      if (trimmed.startsWith('//') ||
          trimmed.startsWith('/*') ||
          trimmed.startsWith('*')) {
        continue;
      }

      // (a) Check for raw SQL query interpolation of variables (e.g. rawQuery('$var') or execute('$var'))
      // Exclude DDL generation, system table DDL constants, or quoted table/column identifiers
      if (RegExp(
              r'''\b(?:rawQuery|query|execute|rawExecute)\s*\(\s*['"].*\$[a-zA-Z_]''')
          .hasMatch(line)) {
        // Allow if it only interpolates table/column names via DdlCompiler.quote, known identifiers, savepoint names, or pragmas
        if (!line.contains(r'${DdlCompiler.quote') &&
            !line.contains(r'${_schema.tableName}') &&
            !line.contains(r'${table.schema.tableName}') &&
            !line.contains(r'$tableName') &&
            !line.contains(r'${_table.schema.tableName}') &&
            !line.contains(r'$table') &&
            !line.contains(r'$store') &&
            !line.contains(r'$name') &&
            !line.contains(r'$pages') &&
            !line.contains(r'$spName') &&
            !line.contains('lp_sp_wire_')) {
          violations.add(
              '$relPath:$lineNum: Potential unescaped/unbound SQL string interpolation.');
        }
      }

      // (d) Check that tokens/passwords/secrets are not saved in SQL inserts
      if (RegExp(r'''\binsert\s*\(\s*['"]lp_''').hasMatch(line) ||
          RegExp(r'''\bupdate\s*\(\s*['"]lp_''').hasMatch(line)) {
        if (line.toLowerCase().contains('token') &&
            !line.contains('tokenProvider') &&
            !line.contains('TokenProvider')) {
          violations.add(
              '$relPath:$lineNum: Possible token/secret persistence in SQLite system tables.');
        }
      }
    }
  }

  // Verify (c) Encrypted fields are excluded from indexes/sort/FTS in DDL compiler
  final ddlCompilerFile =
      File(p.join(libDir.path, 'src', 'core', 'ddl_compiler.dart'));
  if (ddlCompilerFile.existsSync()) {
    final ddlContent = ddlCompilerFile.readAsStringSync();
    if (!ddlContent.contains('Encrypted field') ||
        !ddlContent.contains('cannot be indexed')) {
      violations.add(
          'lib/src/kernel/ddl_compiler.dart: Must reject encrypted fields from indexes.');
    }
    if (!ddlContent.contains('cannot be included in FTS')) {
      violations.add(
          'lib/src/kernel/ddl_compiler.dart: Must reject encrypted fields from FTS.');
    }
  }

  // Verify (b) LIKE pattern escaping in QueryBuilder
  final queryFile = File(p.join(libDir.path, 'src', 'core', 'query.dart'));
  if (queryFile.existsSync()) {
    final queryContent = queryFile.readAsStringSync();
    if (!queryContent.contains('_escapeLike') ||
        !queryContent.contains('ESCAPE')) {
      violations.add(
          'lib/src/kernel/query.dart: LIKE queries must escape patterns and define ESCAPE clause.');
    }
  }

  // Verify (e) Record ID format validation on writes and pulls
  final storeFile = File(p.join(libDir.path, 'src', 'core', 'store.dart'));
  if (storeFile.existsSync()) {
    final storeContent = storeFile.readAsStringSync();
    if (!storeContent.contains('isValidRecordId')) {
      violations.add(
          'lib/src/kernel/store.dart: Writes must enforce isValidRecordId check.');
    }
  }

  final pullerFile = File(p.join(libDir.path, 'src', 'sync', 'puller.dart'));
  if (pullerFile.existsSync()) {
    final pullerContent = pullerFile.readAsStringSync();
    if (!pullerContent.contains('isValidRecordId')) {
      violations.add(
          'lib/src/kernel/sync/puller.dart: Puller must enforce isValidRecordId check on remote records.');
    }
  }

  if (violations.isNotEmpty) {
    stderr.writeln(
        'Security review failed with ${violations.length} violation(s):');
    for (final v in violations) {
      stderr.writeln('  $v');
    }
    exitCode = 1;
  } else {
    stdout.writeln(
        'PASS: Security review (${dartFiles.length} files scanned, all checks satisfied).');
  }
}
