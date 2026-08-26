import 'dart:io';

import 'package:path/path.dart' as p;

import 'find_repo_root.dart';

const compileMarker = '<!-- localpocket-compile: typed-readme -->';

/// Extracts and concatenates explicitly marked complete Dart documentation
/// blocks. The marker avoids pretending that every illustrative fragment is a
/// standalone program while keeping the checked source directly in README.
String extractCompileCheckedDart(String markdown) {
  final lines = markdown.replaceAll('\r\n', '\n').split('\n');
  final snippets = <String>[];
  for (var i = 0; i < lines.length; i++) {
    if (lines[i].trim() != compileMarker) continue;
    if (++i >= lines.length || lines[i].trim() != '```dart') {
      throw const FormatException(
        '$compileMarker must be followed by ```dart.',
      );
    }
    final code = StringBuffer();
    for (i++; i < lines.length && lines[i].trim() != '```'; i++) {
      code.writeln(lines[i]);
    }
    if (i == lines.length) {
      throw const FormatException('Unclosed compile-checked Dart block.');
    }
    snippets.add(code.toString());
  }
  return snippets.join('\n');
}

/// Docs/examples drift test:
/// 1. Analyze the example workspace.
/// 2. Verify README `dart run` references.
/// 3. Analyze the explicitly marked typed README program as one fixture.
void main(List<String> args) {
  final root = findRepoRoot();
  final readmeFile = File(p.join(root.path, 'README.md'));
  final exampleDir = Directory(p.join(root.path, 'example'));
  final errors = <String>[];

  if (exampleDir.existsSync()) {
    final result = Process.runSync(
      'dart',
      ['analyze', exampleDir.path],
      workingDirectory: root.path,
    );
    if (result.exitCode != 0) {
      errors.add(
          'Example directory failed analysis:\n${result.stdout}${result.stderr}');
    }
  }

  if (readmeFile.existsSync()) {
    final content = readmeFile.readAsStringSync();
    final matches = RegExp(r'dart run ([\w\-/\\.]+\.dart)').allMatches(content);
    for (final match in matches) {
      final fileRef = match.group(1)!;
      if (!File(p.join(root.path, fileRef)).existsSync()) {
        errors.add(
          'README mentions "dart run $fileRef", but file does not exist.',
        );
      }
    }

    try {
      final checked = extractCompileCheckedDart(content);
      if (checked.trim().isEmpty) {
        errors.add('README has no $compileMarker snippets.');
      } else {
        final fixtureDir =
            Directory(p.join(root.path, 'build', 'docs_examples'))
              ..createSync(recursive: true);
        final fixture = File(p.join(fixtureDir.path, 'typed_readme.dart'))
          ..writeAsStringSync(checked);
        final result = Process.runSync(
          'dart',
          ['analyze', fixture.path],
          workingDirectory: root.path,
        );
        if (result.exitCode != 0) {
          errors.add(
            'Typed README fixture failed analysis:\n${result.stdout}${result.stderr}',
          );
        }
      }
    } on FormatException catch (error) {
      errors.add('README compile marker error: ${error.message}');
    }
  }

  if (errors.isNotEmpty) {
    stderr.writeln('Docs/Examples drift test FAILED:');
    for (final error in errors) {
      stderr.writeln('  - $error');
    }
    exitCode = 1;
    return;
  }
  stdout.writeln('PASS: Docs & examples drift checks passed.');
}
