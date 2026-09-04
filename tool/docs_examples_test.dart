import 'dart:io';

import 'package:path/path.dart' as p;

import 'find_repo_root.dart';

const _dartFenceStart = '```dart';
const _dartFenceEnd = '```';

bool _isPaddedBlock(String code) {
  final lines = code.replaceAll('\r\n', '\n').split('\n');
  final firstNonEmpty = lines.firstWhere(
    (line) => line.trim().isNotEmpty,
    orElse: () => '',
  );
  return firstNonEmpty.startsWith('  ');
}

String _stripMarkdownPadding(String code) {
  final lines = code.replaceAll('\r\n', '\n').split('\n');
  return lines
      .map((line) => line.startsWith('  ') ? line.substring(2) : line)
      .join('\n');
}

List<String> _extractDartBlocks(String markdown) {
  final lines = markdown.replaceAll('\r\n', '\n').split('\n');
  final blocks = <String>[];

  for (var i = 0; i < lines.length; i++) {
    if (lines[i].trim() != _dartFenceStart) continue;

    final code = StringBuffer();
    for (i++; i < lines.length && lines[i].trim() != _dartFenceEnd; i++) {
      code.writeln(lines[i]);
    }

    if (i >= lines.length) {
      throw const FormatException('Unclosed Dart block in README.md.');
    }

    blocks.add(code.toString());
  }

  return blocks;
}

({Set<String> imports, String body}) _splitImports(String code) {
  final imports = <String>{};
  final bodyLines = <String>[];

  for (final rawLine in code.split('\n')) {
    final trimmed = rawLine.trim();
    if (trimmed.startsWith('import ')) {
      imports.add(trimmed);
      continue;
    }
    bodyLines.add(rawLine);
  }

  return (imports: imports, body: bodyLines.join('\n').trim());
}

String _indentBlock(String code) =>
    code.split('\n').map((line) => line.isEmpty ? line : '  $line').join('\n');

String _buildReadmeProbe(String markdown) {
  final blocks = _extractDartBlocks(markdown);
  final topLevel = <String>[];
  final inMain = <String>[];
  final imports = <String>{};

  for (final block in blocks) {
    final normalized = _stripMarkdownPadding(block);
    final split = _splitImports(normalized);
    final body = split.body;
    if (body.isEmpty) continue;

    imports.addAll(split.imports);

    if (_isPaddedBlock(block)) {
      inMain.add(body);
    } else {
      topLevel.add(body);
    }
  }

  final buffer = StringBuffer();
  final importBlock = imports.toList();
  if (importBlock.isNotEmpty) {
    buffer.writeln(importBlock.join('\n'));
    buffer.writeln();
  }

  final topLevelSource = topLevel.join('\n\n');
  if (topLevelSource.isNotEmpty) {
    buffer.writeln(topLevelSource);
    buffer.writeln();
  }

  final mainBody = inMain.join('\n\n');
  if (mainBody.isNotEmpty) {
    final signature = RegExp(r'\bawait\b').hasMatch(mainBody)
        ? 'Future<void> main() async {'
        : 'void main() {';
    buffer.writeln(signature);
    buffer.writeln(_indentBlock(mainBody));
    buffer.writeln('}');
  }

  return '${buffer.toString().trimRight()}\n';
}

void main(List<String> args) {
  final root = findRepoRoot();
  final readmeFile = File(p.join(root.path, 'README.md'));

  if (!readmeFile.existsSync()) {
    stderr.writeln('README.md was not found at ${readmeFile.path}.');
    exitCode = 1;
    return;
  }

  final outputDir = Directory(p.join(root.path, '_probe'))
    ..createSync(recursive: true);
  final outputFile = File(p.join(outputDir.path, 'readme.md.dart'));

  try {
    final generated = _buildReadmeProbe(readmeFile.readAsStringSync());
    outputFile.writeAsStringSync(generated);
    stdout.writeln('Generated README probe: ${outputFile.path}');

    final analyzeResult = Process.runSync(
      'dart',
      ['analyze', outputFile.path],
      workingDirectory: root.path,
    );

    if (analyzeResult.exitCode != 0) {
      stderr.writeln('README probe analysis failed:');
      if (analyzeResult.stdout.toString().trim().isNotEmpty) {
        stderr.writeln(analyzeResult.stdout);
      }
      if (analyzeResult.stderr.toString().trim().isNotEmpty) {
        stderr.writeln(analyzeResult.stderr);
      }
      exitCode = 1;
      return;
    }

    stdout.writeln('PASS: README probe analysis found 0 issues.');
  } on FormatException catch (error) {
    stderr.writeln('README parsing failed: ${error.message}');
    exitCode = 1;
    return;
  }

  if (exitCode != 0) {
    return;
  }
}
