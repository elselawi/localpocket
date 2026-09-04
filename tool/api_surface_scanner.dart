import 'dart:io';

import 'find_repo_root.dart';

/// One public callable that accepts a record-shaped map input.
final class RecordMapInput {
  const RecordMapInput({
    required this.path,
    required this.owner,
    required this.member,
    required this.parameters,
    required this.line,
  });

  final String path;
  final String owner;
  final String member;
  final List<String> parameters;
  final int line;

  String get key => '$path::$owner.$member(${parameters.join(',')})';

  String get location => '$path:$line';
}

const _writeNames = <String>{
  'applyLocalMutation',
  'commit',
  'commitRecord',
  'create',
  'enqueue',
  'insert',
  'mutate',
  'patch',
  'patchAll',
  'persist',
  'put',
  'putAll',
  'replace',
  'resolve',
  'save',
  'submit',
  'update',
  'upsert',
  'upsertAll',
  'write',
};

/// Scans public class/mixin/extension members in [source].
///
/// This deliberately recognizes only record-shaped maps with string keys and
/// nullable object values. Configuration maps and return-only maps are not
/// candidates. Comments and strings are blanked before parsing, and balanced
/// delimiters make multiline generic signatures deterministic.
List<RecordMapInput> scanRecordMapInputs(
  String source, {
  required String path,
  Set<String>? owners,
}) {
  final clean = _blankCommentsAndStrings(source);
  final results = <RecordMapInput>[];
  final ownerPattern = RegExp(
    r'\b(?:abstract\s+|base\s+|final\s+|sealed\s+|interface\s+)*'
    r'(?:class|mixin|extension(?:\s+type)?)\s+(\w+)[^{]*\{',
  );

  for (final match in ownerPattern.allMatches(clean)) {
    final owner = match.group(1)!;
    if (owner.startsWith('_') || (owners != null && !owners.contains(owner))) {
      continue;
    }
    final openBrace = clean.indexOf('{', match.start);
    final closeBrace = _matching(clean, openBrace, '{', '}');
    if (closeBrace < 0) continue;
    final body = clean.substring(openBrace + 1, closeBrace);
    var braceDepth = 0;
    for (var i = 0; i < body.length; i++) {
      final char = body[i];
      if (char == '{') {
        braceDepth++;
        continue;
      }
      if (char == '}') {
        braceDepth--;
        continue;
      }
      if (char != '(' || braceDepth != 0) continue;

      final member = _identifierBefore(body, i);
      if (member == null || member.startsWith('_') || member == owner) continue;
      final closeParen = _matching(body, i, '(', ')');
      if (closeParen < 0) continue;
      final tail = body.substring(closeParen + 1).trimLeft();
      if (!(tail.startsWith(';') ||
          tail.startsWith('{') ||
          tail.startsWith('=>') ||
          tail.startsWith('async') ||
          tail.startsWith('sync'))) {
        continue;
      }

      final params = _splitTopLevel(body.substring(i + 1, closeParen));
      final recordParams = <String>[];
      for (final raw in params) {
        final normalized = _normalizeParameter(raw);
        if (normalized == null || !_containsRecordMap(normalized)) continue;
        if (_writeNames.contains(member)) recordParams.add(normalized);
      }
      if (recordParams.isEmpty) continue;
      final absoluteOffset = openBrace + 1 + i;
      results.add(RecordMapInput(
        path: path.replaceAll('\\', '/'),
        owner: owner,
        member: member,
        parameters: recordParams,
        line: '\n'.allMatches(clean.substring(0, absoluteOffset)).length + 1,
      ));
      i = closeParen;
    }
  }
  results.sort((a, b) => a.key.compareTo(b.key));
  return results;
}

/// Returns public owner names reachable from a Dart entrypoint's exports.
Set<String> exportedOwners(Directory root, String entrypoint) {
  final visited = <String>{};
  final owners = <String>{};

  void visit(String relative, {Set<String>? show, Set<String>? hide}) {
    final normalized = relative.replaceAll('\\', '/');
    if (!visited.add('$normalized|$show|$hide')) return;
    final file = File(
        '${root.path}${Platform.pathSeparator}${normalized.replaceAll('/', Platform.pathSeparator)}');
    if (!file.existsSync()) return;
    final source = file.readAsStringSync();
    final clean = _blankCommentsAndStrings(source);
    final declarationPattern = RegExp(
      r'\b(?:abstract\s+|base\s+|final\s+|sealed\s+|interface\s+)*'
      r'(?:class|mixin|extension(?:\s+type)?)\s+(\w+)',
    );
    for (final match in declarationPattern.allMatches(clean)) {
      final name = match.group(1)!;
      if (name.startsWith('_')) continue;
      if (show != null && !show.contains(name)) continue;
      if (hide != null && hide.contains(name)) continue;
      owners.add(name);
    }

    final exportPattern = RegExp(
      r"export\s+'([^']+)'\s*((?:show|hide)\s+[^;]+)?;",
      multiLine: true,
    );
    final parent = normalized.contains('/')
        ? normalized.substring(0, normalized.lastIndexOf('/'))
        : '';
    for (final match in exportPattern.allMatches(source)) {
      final target = _normalizePath('$parent/${match.group(1)!}');
      final clause = match.group(2) ?? '';
      Set<String>? childShow;
      Set<String>? childHide;
      final clauseMatch =
          RegExp(r'\b(show|hide)\s+(.+)$').firstMatch(clause.trim());
      if (clauseMatch != null) {
        final names = clauseMatch
            .group(2)!
            .split(',')
            .map((value) => value.trim())
            .where((value) => value.isNotEmpty)
            .toSet();
        if (clauseMatch.group(1) == 'show') {
          childShow = names;
        } else {
          childHide = names;
        }
      }
      visit(target, show: childShow, hide: childHide);
    }
  }

  visit(entrypoint);
  return owners;
}

/// Index just after the previous top-of-body terminator (`;` or `}`) before
/// [offset] — the presumed start of the declaration containing [offset].
int _lastDeclarationStart(String body, int offset) {
  for (var i = offset - 1; i >= 0; i--) {
    final ch = body[i];
    if (ch == ';' || ch == '}') return i + 1;
  }
  return 0;
}

String _normalizePath(String value) {
  final parts = <String>[];
  for (final part in value.replaceAll('\\', '/').split('/')) {
    if (part.isEmpty || part == '.') continue;
    if (part == '..') {
      if (parts.isNotEmpty) parts.removeLast();
    } else {
      parts.add(part);
    }
  }
  return parts.join('/');
}

bool _containsRecordMap(String parameter) => RegExp(
      r'Map<String,((Object\?)|(Map<String,Object\?>))>',
    ).hasMatch(parameter);

String? _normalizeParameter(String raw) {
  var value = raw.trim();
  value = value.replaceAll(RegExp(r'^[\[{]\s*'), '');
  value = value.replaceAll(RegExp(r'\s*[\]}]$'), '');
  value = value.replaceAll(RegExp(r'\brequired\s+'), '');
  value = value.replaceAll(RegExp(r'\b(?:covariant|final)\s+'), '');
  value = value.split('=').first.trim();
  if (value.isEmpty) return null;
  value = value.replaceAll(RegExp(r'\s+'), ' ');
  value = value.replaceAllMapped(
    RegExp(r'\s*([<>,?()])\s*'),
    (match) => match.group(1)!,
  );
  value = value.replaceFirstMapped(
    RegExp(r'([>?])([A-Za-z_]\w*)$'),
    (match) => '${match.group(1)} ${match.group(2)}',
  );
  return value;
}

List<String> _splitTopLevel(String value) {
  final result = <String>[];
  var start = 0;
  var angle = 0;
  var round = 0;
  var square = 0;
  var curly = 0;
  for (var i = 0; i < value.length; i++) {
    switch (value[i]) {
      case '<':
        angle++;
      case '>':
        if (angle > 0) angle--;
      case '(':
        round++;
      case ')':
        round--;
      case '[':
        square++;
      case ']':
        square--;
      case '{':
        curly++;
      case '}':
        curly--;
      case ',':
        if (angle == 0 && round == 0 && square == 0 && curly == 0) {
          result.add(value.substring(start, i));
          start = i + 1;
        }
    }
  }
  result.add(value.substring(start));
  return result;
}

String? _identifierBefore(String value, int offset) {
  var end = offset;
  while (end > 0 && RegExp(r'\s').hasMatch(value[end - 1])) {
    end--;
  }
  var start = end;
  while (start > 0 && RegExp(r'[A-Za-z0-9_]').hasMatch(value[start - 1])) {
    start--;
  }
  if (start == end) return null;
  return value.substring(start, end);
}

int _matching(String value, int start, String open, String close) {
  var depth = 0;
  for (var i = start; i < value.length; i++) {
    if (value[i] == open) depth++;
    if (value[i] == close && --depth == 0) return i;
  }
  return -1;
}

String _blankCommentsAndStrings(String source) {
  final out = StringBuffer();
  var i = 0;
  while (i < source.length) {
    if (i + 1 < source.length && source[i] == '/' && source[i + 1] == '/') {
      while (i < source.length && source[i] != '\n') {
        out.write(' ');
        i++;
      }
      continue;
    }
    if (i + 1 < source.length && source[i] == '/' && source[i + 1] == '*') {
      out.write('  ');
      i += 2;
      while (i + 1 < source.length &&
          !(source[i] == '*' && source[i + 1] == '/')) {
        out.write(source[i] == '\n' ? '\n' : ' ');
        i++;
      }
      if (i + 1 < source.length) {
        out.write('  ');
        i += 2;
      }
      continue;
    }
    if (source[i] == "'" || source[i] == '"') {
      final quote = source[i];
      final triple = i + 2 < source.length &&
          source[i + 1] == quote &&
          source[i + 2] == quote;
      final width = triple ? 3 : 1;
      out.write(' ' * width);
      i += width;
      while (i < source.length) {
        if (source[i] == '\n') {
          out.write('\n');
          i++;
          if (!triple) break;
          continue;
        }
        if (source[i] == '\\') {
          out.write(' ');
          i++;
          if (i < source.length) {
            out.write(source[i] == '\n' ? '\n' : ' ');
            i++;
          }
          continue;
        }
        final closes = triple
            ? i + 2 < source.length &&
                source[i] == quote &&
                source[i + 1] == quote &&
                source[i + 2] == quote
            : source[i] == quote;
        if (closes) {
          out.write(' ' * width);
          i += width;
          break;
        }
        out.write(' ');
        i++;
      }
      continue;
    }
    out.write(source[i]);
    i++;
  }
  return out.toString();
}

// ---------------------------------------------------------------------------
// Public API inventory (plan §14.1)
// ---------------------------------------------------------------------------

/// Builds the public API inventory of [entrypoint]: every declaration that is
/// reachable through the export graph (respecting `show`/`hide` clauses) plus
/// the public members of every exported type.
///
/// The inventory is the analyzer-comparable structural check that complements
/// the export-line snapshot: the snapshot proves WHICH files the barrel
/// re-exports, the inventory proves WHICH names an application can actually
/// name. It catches accidental export additions/removals that keep the export
/// lines identical (e.g. a `show` list that no longer matches the file).
List<String> publicInventory(Directory root, String entrypoint) {
  final lines = <String>{};
  final visited = <String>{};

  void visit(String relative, {Set<String>? show, Set<String>? hide}) {
    final normalized = relative.replaceAll('\\', '/');
    final showKey = (show ?? const <String>{}).toList()..sort();
    final hideKey = (hide ?? const <String>{}).toList()..sort();
    final visitKey = '$normalized|${showKey.join(',')}|${hideKey.join(',')}';
    if (!visited.add(visitKey)) return;

    final file = File(
        '${root.path}${Platform.pathSeparator}${normalized.replaceAll('/', Platform.pathSeparator)}');
    if (!file.existsSync()) return;
    final source = file.readAsStringSync();
    final clean = _blankCommentsAndStrings(source);

    void addDecl(String name) {
      if (name.startsWith('_')) return;
      if (show != null && !show.contains(name)) return;
      if (hide != null && hide.contains(name)) return;
      lines.add('$normalized::$name');
    }

    final declPattern = RegExp(
      r'\b(?:abstract\s+|base\s+|final\s+|sealed\s+|interface\s+)*'
      r'(?:class|mixin|enum|extension(?:\s+type)?)\s+(\w+)',
    );
    for (final match in declPattern.allMatches(clean)) {
      final name = match.group(1)!;
      final visible = !name.startsWith('_') &&
          (show == null || show.contains(name)) &&
          (hide == null || !hide.contains(name));
      addDecl(name);
      if (!visible) continue;
      // Members of the type body (classes/mixins/extensions/enums).
      final openBrace = clean.indexOf('{', match.start);
      if (openBrace < 0) continue;
      final closeBrace = _matching(clean, openBrace, '{', '}');
      if (closeBrace < 0) continue;
      final body = clean.substring(openBrace + 1, closeBrace);
      // Constructors (`Name(...)` / `Name.named(...)`), methods, and
      // getters/setters at the top brace level of the body.
      var depth = 0;
      for (var i = 0; i < body.length; i++) {
        final ch = body[i];
        if (ch == '{') depth++;
        if (ch == '}') depth--;
        if (depth != 0) continue;
        if (ch != '(') continue;
        final name = _identifierBefore(body, i);
        if (name == null ||
            name.startsWith('_') ||
            name == 'if' ||
            name == 'for') {
          continue;
        }
        // `@internal` members are library-internal seams, not public API.
        final declStart = _lastDeclarationStart(body, i);
        if (body.substring(declStart, i).contains('@internal')) {
          final closeParen = _matching(body, i, '(', ')');
          if (closeParen > 0) i = closeParen;
          continue;
        }
        // Skip generic type parameter lists (`Foo<T>(...)` style anchors are
        // handled by _identifierBefore which stops at non-identifier chars).
        lines.add('$normalized::${match.group(1)}.$name');
        final closeParen = _matching(body, i, '(', ')');
        if (closeParen > 0) i = closeParen;
      }
      // Getters/setters without parens.
      final accessorPattern = RegExp(r'\b(get|set)\s+(\w+)');
      for (final m in accessorPattern.allMatches(body)) {
        final name = m.group(2)!;
        if (name.startsWith('_')) continue;
        final declStart = _lastDeclarationStart(body, m.start);
        if (body.substring(declStart, m.end).contains('@internal')) continue;
        lines.add('$normalized::${match.group(1)}.$name');
      }
    }

    final typedefPattern = RegExp(r'\btypedef\s+(\w+)');
    for (final m in typedefPattern.allMatches(clean)) {
      addDecl(m.group(1)!);
    }

    final exportPattern = RegExp(
      r"export\s+'([^']+)'\s*((?:show|hide)\s+[^;]+)?;",
      multiLine: true,
    );
    final parent = normalized.contains('/')
        ? normalized.substring(0, normalized.lastIndexOf('/'))
        : '';
    for (final match in exportPattern.allMatches(source)) {
      final target = _normalizePath('$parent/${match.group(1)!}');
      final clause = match.group(2) ?? '';
      Set<String>? childShow;
      Set<String>? childHide;
      final clauseMatch =
          RegExp(r'\b(show|hide)\s+(.+)$').firstMatch(clause.trim());
      if (clauseMatch != null) {
        final names = clauseMatch
            .group(2)!
            .split(',')
            .map((value) => value.trim())
            .where((value) => value.isNotEmpty)
            .toSet();
        if (clauseMatch.group(1) == 'show') {
          childShow = names;
        } else {
          childHide = names;
        }
      }
      visit(target, show: childShow, hide: childHide);
    }
  }

  visit(entrypoint);
  final sorted = lines.toList()..sort();
  return sorted;
}

/// Checks (default) or regenerates `tool/api_inventory.txt`.
///
/// Usage:
///   dart run tool/api_surface_scanner.dart            # check
///   dart run tool/api_surface_scanner.dart --update   # regenerate
void main(List<String> args) {
  final root = findRepoRoot();
  final goldenPath =
      '${root.path}${Platform.pathSeparator}tool${Platform.pathSeparator}api_inventory.txt';
  final update = args.contains('--update');

  final inventory =
      publicInventory(Directory(root.path), 'lib/localpocket.dart');
  final buffer = StringBuffer()
    ..writeln('# LocalPocket public API inventory (barrel-reachable names).')
    ..writeln('# Format: <file>::<Declaration>[.<member>] — sorted; regenerate')
    ..writeln('# with `dart run tool/api_surface_scanner.dart --update`.')
    ..writeln();
  for (final line in inventory) {
    buffer.writeln(line);
  }
  final generated = buffer.toString();

  if (update) {
    File(goldenPath).writeAsStringSync(generated);
    stdout.writeln('Updated public API inventory (${inventory.length} names).');
    return;
  }

  final goldenFile = File(goldenPath);
  if (!goldenFile.existsSync()) {
    stderr.writeln(
        'tool/api_inventory.txt does not exist. Run with --update to generate it.');
    exitCode = 1;
    return;
  }
  final existing = goldenFile.readAsStringSync().replaceAll('\r\n', '\n');
  if (existing != generated) {
    final existingNames =
        existing.split('\n').where((l) => l.contains('::')).toSet();
    final currentNames = inventory.toSet();
    final added = currentNames.difference(existingNames).toList()..sort();
    final removed = existingNames.difference(currentNames).toList()..sort();
    stderr.writeln('Public API inventory changed without updating '
        'tool/api_inventory.txt!');
    for (final a in added) {
      stderr.writeln('  + $a');
    }
    for (final r in removed) {
      stderr.writeln('  - $r');
    }
    stderr.writeln('Run `dart run tool/api_surface_scanner.dart --update` '
        'if intentional.');
    exitCode = 1;
  } else {
    stdout.writeln(
        'PASS: public API inventory up-to-date (${inventory.length} names).');
  }
}
