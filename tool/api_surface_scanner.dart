import 'dart:io';

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
