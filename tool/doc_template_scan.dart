// Scans the package for classes whose constructor doc comments shadow the
// richer class-level documentation. In the IDE, hovering a constructor call
// resolves to the most specific element (the constructor), so only the short
// constructor doc is shown even when the class carries detailed prose.
//
// Reports the places where the single-source fix applies: wrap the class docs
// in `{@template <id>} … {@endtemplate}` and reference it from each documented
// constructor with `{@macro <id>}` so dartdoc expands the identical text in
// generated docs and editor hovers.
//
// With `--apply`, the fix is rewritten in place (idempotent): pending classes
// get the template wrapper and every public constructor gains/keeps a macro
// reference. Classes whose suggested ids collide are left untouched for a
// manual rename.
//
// Known limitations of the lightweight scanner:
//  - multi-line signatures are attributed on the line containing `Name(`;
//  - only single-line annotations (`@Deprecated('…')`) may sit between a doc
//    block and its declaration;
//  - non-ASCII identifier letters are not matched by declaration regexes.

import 'dart:convert';
import 'dart:io';

void main(List<String> args) {
  var roots = ['lib'];
  var jsonOutput = false;
  var failOnCandidates = false;
  var includePrivate = false;
  var includeGenerated = false;
  var applyEdits = false;
  String? idPrefix;

  for (final arg in args) {
    if (arg.startsWith('--roots=')) {
      roots = arg
          .substring('--roots='.length)
          .split(',')
          .map(_normalizeRoot)
          .toList();
    } else if (arg == '--json') {
      jsonOutput = true;
    } else if (arg == '--apply') {
      applyEdits = true;
    } else if (arg.startsWith('--id-prefix=')) {
      idPrefix = arg.substring('--id-prefix='.length);
    } else if (arg == '--include-private') {
      includePrivate = true;
    } else if (arg == '--include-generated') {
      includeGenerated = true;
    } else if (arg == '--fail-on-candidates') {
      failOnCandidates = true;
    } else {
      stderr.writeln('Unknown argument: $arg');
      stderr.write(_usage);
      exitCode = 64;
      return;
    }
  }

  idPrefix ??= _packageName() ?? 'localpocket';

  final classes = <_ClassInfo>[];
  final templatedByFile = <String, Set<String>>{};
  final macroByFile = <String, Set<String>>{};
  var filesScanned = 0;
  final unreadable = <String>[];

  for (final root in roots) {
    final dir = Directory(root);
    if (!dir.existsSync()) {
      stderr.writeln('Warning: root "$root" does not exist, skipping.');
      continue;
    }
    for (final path in _collectDartFiles(root, includeGenerated)) {
      try {
        final scanner = _FileScanner(path);
        classes.addAll(scanner.scan());
        templatedByFile[path] = scanner.seenTemplateIds;
        macroByFile[path] = scanner.seenMacroIds;
        filesScanned++;
      } catch (_) {
        unreadable.add(path);
      }
    }
  }

  var report = _analyze(
    classes,
    idPrefix: idPrefix,
    includePrivate: includePrivate,
    templatedByFile: templatedByFile,
    macroByFile: macroByFile,
  );

  if (applyEdits) {
    final skipped = <String, String>{};
    final touchedIds = _applyDocTemplates(
      report,
      skipped,
      includePrivate: includePrivate,
    );
    for (final entry in touchedIds.entries) {
      (templatedByFile[entry.key] ??= {}).addAll(entry.value.templated);
      (macroByFile[entry.key] ??= {}).addAll(entry.value.macroed);
    }
    // Recompute statuses so the report below reflects the written files.
    report = _analyze(
      classes,
      idPrefix: idPrefix,
      includePrivate: includePrivate,
      templatedByFile: templatedByFile,
      macroByFile: macroByFile,
    );
    if (skipped.isNotEmpty) {
      stderr.writeln('Skipped classes (id collision — rename manually):');
      for (final e in skipped.entries) {
        stderr.writeln('  ${e.key}: ${e.value}');
      }
    }
  }

  if (jsonOutput) {
    stdout.writeln(const JsonEncoder.withIndent('  ').convert(report.toJson()));
  } else {
    _printReport(
        report, 'roots: ${roots.join(", ")} — $filesScanned files scanned');
  }

  for (final path in unreadable) {
    stderr.writeln('Warning: could not decode $path, skipped.');
  }

  if (failOnCandidates && report.pendingFindings.isNotEmpty) exitCode = 1;
}

String _normalizeRoot(String raw) => raw.trim().isEmpty ? '.' : raw.trim();

const String _usage = '''
usage: dart run tool/doc_template_scan.dart [options]

options:
  --roots=<dirs>        comma-separated scan roots (default: lib)
  --json                machine-readable output
  --apply               rewrite files: wrap class docs in {@template} and wire
                        every public constructor to {@macro}. Idempotent.
  --id-prefix=<name>    prefix for suggested {@template} ids
                        (default: pubspec "name", else "localpocket")
  --include-private     also consider private constructors (default: skip)
  --include-generated   also scan *.g.dart / *.freezed.dart (default: skip)
  --fail-on-candidates  exit 1 when pending (unapplied) candidates exist
''';

// ---------------------------------------------------------------------------
// Model
// ---------------------------------------------------------------------------

class _DocLine {
  const _DocLine(this.lineNo, this.text);

  /// Zero-based line number in the source file.
  final int lineNo;
  final String text;
}

class _CtorInfo {
  const _CtorInfo({
    required this.displayName,
    required this.line,
    required this.isFactory,
    required this.isPrivate,
    required this.doc,
  });

  /// `new` for the unnamed constructor, `Class.named` otherwise.
  final String displayName;
  final int line; // 1-based
  final bool isFactory;
  final bool isPrivate;
  final List<_DocLine> doc;
}

class _ClassInfo {
  _ClassInfo({
    required this.filePath,
    required this.name,
    required this.line,
    required this.doc,
  });

  final String filePath;
  final String name;
  final int line; // 1-based
  final List<_DocLine> doc;
  final List<_CtorInfo> ctors = <_CtorInfo>[];
}

enum _Category { macro, fallback, ctorOnly }

class _Finding {
  const _Finding(
    this.category,
    this.info,
    this.suggestedId,
    this.idConflict, {
    required this.alreadyTemplated,
    required this.alreadyMacroed,
  });

  final _Category category;
  final _ClassInfo info;
  final String suggestedId;

  /// True when another class generates the same template id.
  final bool idConflict;

  /// The target file already references this id from `{@template …}`.
  final bool alreadyTemplated;

  /// The target file already references this id from `{@macro …}`.
  final bool alreadyMacroed;

  bool get isMacro => category == _Category.macro;

  bool get isCtorOnly => category == _Category.ctorOnly;

  bool get isIdCollision => idConflict;

  /// Applied = the target file already carries both the `{@template …}`
  /// wrapper on the class docs and a `{@macro …}` reference. Always false for
  /// ctorOnly findings (manual action).
  bool get isApplied => !isCtorOnly && alreadyTemplated && alreadyMacroed;
}

class _Report {
  const _Report(this.findings);

  final List<_Finding> findings;

  Iterable<_Finding> get pendingFindings => findings
      .where((f) => f.isIdCollision || (!f.isApplied && !f.isCtorOnly))
      .toList();

  Map<String, Object?> toJson() => {
        'findings': [
          for (final f in findings)
            {
              'category': f.category.name,
              'status': f.isApplied
                  ? 'applied'
                  : (f.isCtorOnly ? 'manual' : 'pending'),
              'file': f.info.filePath,
              'class': f.info.name,
              'classLine': f.info.line,
              'suggestedTemplateId': f.suggestedId,
              'templateIdAvailable': !f.idConflict,
              'ctors': [
                for (final c in f.info.ctors)
                  {
                    'name': c.displayName,
                    'line': c.line,
                    'factory': c.isFactory,
                    'private': c.isPrivate,
                    'documented': c.doc.isNotEmpty,
                  },
              ],
            },
        ],
      };
}

// ---------------------------------------------------------------------------
// Analysis
// ---------------------------------------------------------------------------

_Report _analyze(
  List<_ClassInfo> infos, {
  required String idPrefix,
  required bool includePrivate,
  Map<String, Set<String>> templatedByFile = const {},
  Map<String, Set<String>> macroByFile = const {},
}) {
  final idCounts = <String, int>{};
  for (final info in infos) {
    final id = '$idPrefix.${_snake(info.name)}';
    idCounts[id] = (idCounts[id] ?? 0) + 1;
  }

  final findings = <_Finding>[];
  for (final info in infos) {
    final publicCtors =
        info.ctors.where((c) => includePrivate || !c.isPrivate).toList();
    if (publicCtors.isEmpty) continue;

    final classHasDocs = info.doc.isNotEmpty;
    final hasDocumentedCtor = publicCtors.any((c) => c.doc.isNotEmpty);
    final id = '$idPrefix.${_snake(info.name)}';
    final conflict = (idCounts[id] ?? 0) > 1;
    final templated = templatedByFile[info.filePath]?.contains(id) ?? false;
    final macroed = macroByFile[info.filePath]?.contains(id) ?? false;

    late final _Category category;
    if (classHasDocs && hasDocumentedCtor) {
      category = _Category.macro;
    } else if (classHasDocs) {
      category = _Category.fallback;
    } else if (hasDocumentedCtor) {
      category = _Category.ctorOnly;
    } else {
      continue;
    }
    findings.add(
      _Finding(
        category,
        info,
        id,
        conflict,
        alreadyTemplated: templated,
        alreadyMacroed: macroed,
      ),
    );
  }

  const categoryRank = <_Category, int>{
    _Category.macro: 0,
    _Category.fallback: 1,
    _Category.ctorOnly: 2,
  };
  findings.sort((a, b) {
    final byCat = (categoryRank[a.category] ?? 9)
        .compareTo(categoryRank[b.category] ?? 9);
    if (byCat != 0) return byCat;
    final byPath = a.info.filePath.compareTo(b.info.filePath);
    return byPath != 0 ? byPath : a.info.line.compareTo(b.info.line);
  });

  return _Report(findings);
}

void _printReport(_Report report, String header) {
  const titles = <_Category, String>{
    _Category.macro: 'MACRO-INJECTION CANDIDATES — class docs shadowed by '
        'constructor docs (apply Option 1)',
    _Category.fallback: 'FALLBACK-ONLY — undocumented constructors rely on the '
        'implicit class-doc hover fallback',
    _Category.ctorOnly: 'CTORS-CARRY-THE-DOCS — no class-level prose; consider '
        'promoting it upward',
  };

  final counts = <_Category, int>{for (final c in _Category.values) c: 0};
  final appliedCounts = <_Category, int>{
    for (final c in _Category.values) c: 0
  };

  // Details are printed only for actionable items; applied entries roll up
  // into the summary below.
  final actionable = <_Finding>[];
  for (final f in report.findings) {
    counts[f.category] = counts[f.category]! + 1;
    if (f.isCtorOnly) {
      actionable.add(f);
    } else if (f.isApplied) {
      appliedCounts[f.category] = appliedCounts[f.category]! + 1;
    } else {
      actionable.add(f);
    }
  }

  stdout.writeln('doc_template_scan — $header');
  stdout.writeln('');

  if (report.findings.isEmpty) {
    stdout.writeln('No class/constructor documentation conflicts found.');
  } else if (actionable.isEmpty) {
    stdout.writeln(
        'All macro/fallback findings were previously applied (see summary). '
        'Only manual items remain, if any.');
  }

  _Category? currentSection;
  for (final f in actionable) {
    if (currentSection != f.category) {
      currentSection = f.category;
      stdout.writeln('=' * 78);
      stdout.writeln(titles[f.category]);
      stdout.writeln('=' * 78);
    }
    _printFinding(f);
  }

  stdout.writeln('');
  stdout.writeln('-' * 78);
  stdout.writeln(
      'summary: ${counts[_Category.macro]} macro-injection candidate(s), '
      '${counts[_Category.fallback]} fallback-only, '
      '${counts[_Category.ctorOnly]} ctor-carries-docs');
  final total = report.findings.length;
  final done = appliedCounts.values.fold<int>(0, (a, b) => a + b);
  final pending = report.pendingFindings.length;
  stdout.writeln('         status ..................................... '
      '$done/$total applied, $pending pending');
  if (pending == 0 && total > 0) {
    stdout.writeln('         nothing left to do ✓');
  }
}

void _printFinding(_Finding f) {
  final info = f.info;
  stdout.writeln('');
  stdout.writeln('${info.filePath}:${info.line}  ${info.name}');
  stdout.writeln('    template id       : ${f.suggestedId}'
      '${f.idConflict ? "   (!) id reused across files — add a unique suffix" : ""}');

  if (info.doc.isEmpty) {
    stdout.writeln('    class docs        : none');
  } else {
    stdout.writeln('    class docs        : lines '
        '${info.doc.first.lineNo + 1}-${info.doc.last.lineNo + 1}');
  }

  final documented =
      info.ctors.where((c) => c.doc.isNotEmpty).map(_ctorLabel).join(', ');
  final undocumented =
      info.ctors.where((c) => c.doc.isEmpty).map(_ctorLabel).join(', ');
  stdout.writeln(
      '    documented ctors  : ${documented.isEmpty ? '-' : documented}');
  stdout.writeln(
      '    undocumented ctors: ${undocumented.isEmpty ? '-' : undocumented}');

  if (f.category == _Category.macro && !f.idConflict) {
    stdout.writeln('    action            : wrap the class doc block in '
        '{@template ${f.suggestedId}} … {@endtemplate},');
    stdout.writeln('                        then append '
        '{@macro ${f.suggestedId}} under each constructor summary.');
  }
}

String _ctorLabel(_CtorInfo c) =>
    '${c.displayName} (:${c.line})${c.isFactory ? ' [factory]' : ''}${c.isPrivate ? ' [private]' : ''}';

// ---------------------------------------------------------------------------
// Applier (--apply)
// ---------------------------------------------------------------------------

class _Insert {
  _Insert(this.row, this.text, this.seq);

  /// Insert BEFORE this zero-based line index.
  final int row;
  final String text;

  /// Monotonic tie-breaker for equal rows: larger seq wins the later slot
  /// (insertion loop processes rows/seqs in descending order).
  final int seq;
}

class _FilePatch {
  _FilePatch(this.path);

  final String path;
  final List<_Insert> inserts = <_Insert>[];
  final Set<String> templated = <String>{};
  final Set<String> macroed = <String>{};
}

String _indentOf(String raw) {
  final m = RegExp(r'^[ \t]*').firstMatch(raw);
  return m?[0] ?? '';
}

/// Rewrites pending findings in place:
///
/// - class doc block wrapped with `{@template id}` / `{@endtemplate}`;
/// - every documented public constructor gains `\n{@macro id}` below its
///   summary;
/// - every undocumented public constructor gains a fresh `{@macro id}` doc.
///
/// Classes whose suggested ids collide across files are skipped (reported via
/// [skipped]) and left for a manual rename. Returns per-file records of the
/// ids that were written so the caller can refresh usage caches.
Map<String, _FilePatch> _applyDocTemplates(
  _Report report,
  Map<String, String> skipped, {
  required bool includePrivate,
}) {
  // Group pending targets by file to batch one read/write per file.
  final patches = <String, _FilePatch>{};
  var seq = 0;

  void recordSkip(String path, String cls, String reason) {
    skipped['$path — $cls'] = reason;
  }

  for (final f in report.findings.where((f) => !f.isCtorOnly && !f.isApplied)) {
    if (f.isIdCollision) {
      recordSkip(
        f.info.filePath,
        f.info.name,
        'template id "${f.suggestedId}" is reused — rename manually',
      );
      continue;
    }
    if (!f.suggestedId.contains('.') || f.suggestedId.startsWith('.')) {
      continue; // defensive: never write a malformed directive
    }

    final patch =
        patches.putIfAbsent(f.info.filePath, () => _FilePatch(f.info.filePath));
    final lines = File(patch.path).readAsStringSync().split('\n');
    final info = f.info;
    final id = f.suggestedId;

    if (info.doc.isEmpty) continue; // defensive

    final openRow = info.doc.first.lineNo;
    final closeRow = info.doc.last.lineNo + 1;
    final indent = _indentOf(lines[openRow]);
    patch.inserts.add(_Insert(openRow, '$indent/// {@template $id}', seq++));
    patch.inserts.add(_Insert(closeRow, '$indent/// {@endtemplate}', seq++));
    patch.templated.add(id);

    for (final ctor
        in info.ctors.where((c) => includePrivate || !c.isPrivate)) {
      if (ctor.doc.isNotEmpty) {
        // Defensive: don't double-inject when a macro reference already sits
        // inside this block for another id.
        final alreadyRefsMacro =
            ctor.doc.any((d) => d.text.contains('{@macro'));
        if (alreadyRefsMacro) continue;
        final docIndent = _indentOf(lines[ctor.doc.first.lineNo]);
        final lastRow = ctor.doc.last.lineNo + 1;
        patch.inserts.add(
          _Insert(lastRow, '$docIndent///\n$docIndent/// {@macro $id}', seq++),
        );
        patch.macroed.add(id);
      } else {
        // Fresh doc above the declaration head, skipping annotation lines.
        var row = ctor.line - 1;
        while (row > 0 && _annotationRe.hasMatch(lines[row - 1])) {
          row--;
        }
        final declIndent = _indentOf(lines[ctor.line - 1]);
        patch.inserts.add(
          _Insert(row, '$declIndent/// {@macro $id}', seq++),
        );
        patch.macroed.add(id);
      }
    }
  }

  for (final patch in patches.values) {
    try {
      // Splitting/joining on '\n' preserves any trailing newline naturally
      // (a final '' element joins back to one).
      final out = File(patch.path).readAsStringSync().split('\n');
      final ordered = [...patch.inserts]..sort((a, b) {
          final byRow = b.row.compareTo(a.row);
          return byRow != 0 ? byRow : b.seq.compareTo(a.seq);
        });
      for (final ins in ordered) {
        final at = ins.row.clamp(0, out.length);
        out.insert(at, ins.text);
      }
      File(patch.path).writeAsStringSync(out.join('\n'));
    } catch (e) {
      stderr.writeln('Warning: failed to rewrite ${patch.path}: $e');
    }
  }

  return patches;
}

// ---------------------------------------------------------------------------
// File collection and helpers
// ---------------------------------------------------------------------------

const Set<String> _skippedDirs = {
  '.git',
  '.dart_tool',
  'build',
  'coverage',
  '_site',
  'node_modules',
};

List<String> _collectDartFiles(String root, bool includeGenerated) {
  final results = <String>[];
  final entities =
      Directory(root).listSync(recursive: true, followLinks: false);
  for (final entity in entities) {
    if (entity is! File) continue;
    final p = entity.path.replaceAll('\\', '/');
    var skip = false;
    for (final seg in p.split('/')) {
      if (_skippedDirs.contains(seg) || seg.startsWith('.')) {
        skip = true;
        break;
      }
    }
    if (skip || !p.endsWith('.dart')) continue;
    if (!includeGenerated &&
        (p.endsWith('.g.dart') ||
            p.endsWith('.freezed.dart') ||
            p.endsWith('.gr.dart'))) {
      continue;
    }
    results.add(p);
  }
  results.sort();
  return results;
}

String? _packageName() {
  final file = File('pubspec.yaml');
  if (!file.existsSync()) return null;
  final match = RegExp(r'^name:\s*([A-Za-z_$][\w$]*)', multiLine: true)
      .firstMatch(file.readAsStringSync());
  return match?.group(1);
}

String _snake(String camel) {
  final b = StringBuffer();
  for (var i = 0; i < camel.length; i++) {
    final ch = camel[i];
    final isUpperLetter =
        ch.toUpperCase() != ch.toLowerCase() && ch == ch.toUpperCase();
    if (i > 0 && isUpperLetter) b.write('_');
    b.write(ch.toLowerCase());
  }
  return b.toString();
}

// ---------------------------------------------------------------------------
// Scanner
// ---------------------------------------------------------------------------

/// Single-line annotation such as `@Deprecated('use x instead')`. The argument
/// matcher uses a greedy span so arguments that themselves contain parentheses
/// (very common in messages like 'use Foo() instead') still match; only
/// single-line annotations are supported.
final RegExp _annotationRe = RegExp(r'^\s*@[A-Za-z_$][\w$.]*(\s*\(.+\))?\s*$');

/// dartdoc directives of interest: `{@macro <id>}` and `{@template <id>}`.
final RegExp _directiveIdRe = RegExp(
  r'\{@(macro|template)\s+([A-Za-z0-9_.\-]+)\s*\}',
);

/// Modifier keywords that may precede a declaration head.
final RegExp _modifierRe = RegExp(
  r'^(?:abstract|base|interface|final|sealed|augment|external|const|factory'
  r'|static|late)\b\s*',
);

/// Class-like declaration: allows modifier prefixes plus the `mixin class`
/// combination, then captures the declared name.
final RegExp _classDeclRe = RegExp(
  r'^((?:abstract|base|interface|final|sealed|augment)\s+)*'
  r'(?:mixin\s+class|extension\s+type|class|mixin|enum|extension)\s+'
  r'([A-Za-z_$][A-Za-z0-9_$]*)',
);

/// Constructor head after modifier stripping: `Name(` or `Name.named(` with an
/// optional type-parameter list between name and parameter list.
final RegExp _ctorHeadRe = RegExp(
  r'^([A-Za-z_$][A-Za-z0-9_$]*(?:\.[A-Za-z_$][A-Za-z0-9_$]*)?)'
  r'\s*(?:<[^(<>]*>)?\s*\(',
);

class _Scope {
  const _Scope(this.className, this.classRef, this.openDepth);

  /// Non-null when the braces opened a class/enum body directly.
  final String? className;
  final _ClassInfo? classRef;
  final int openDepth;
}

class _Frame {
  _Frame.string(this.quoteChar, this.isTriple, this.isRaw)
      : kind = kindString,
        braceBalance = 0;

  _Frame.interp()
      : kind = kindInterp,
        quoteChar = null,
        isTriple = false,
        isRaw = false,
        braceBalance = 1;

  static const kindString = 'string';
  static const kindInterp = 'interp';

  final String kind;
  final String? quoteChar;
  final bool isTriple;
  final bool isRaw;
  int braceBalance;
  bool escaped = false;
}

class _FileScanner {
  _FileScanner(this.filePath);

  final String filePath;
  late final List<String> _lines;
  late final String _src;

  /// Directive ids referenced by this file, e.g. `localpocket.fts_spec` from
  /// `{@template …}` / `{@macro …}` — used for idempotent application.
  final Set<String> seenTemplateIds = <String>{};
  final Set<String> seenMacroIds = <String>{};

  final List<_ClassInfo> _classes = [];
  String? _pendingClassName;

  int _depth = 0;
  final List<_Scope> _scopes = [];
  final List<_DocLine> _curDoc = [];
  int _lastDocEnd = -999;

  final List<_Frame> _frames = [];
  bool _inBlockComment = false;

  int _line = 0;

  /// Global source offset where the current physical line begins.
  int _lineStart = 0;

  var _sawCodeOnLine = false;
  var _firstCodeCol = -1;
  var _wsOnlySoFar = true;

  /// Brace events of the current line, applied only AFTER the line has been
  /// classified (so `class X {` registers X before its body scope opens).
  final List<bool> _pendingBraces = <bool>[];

  List<_ClassInfo> scan() {
    final bytes = File(filePath).readAsBytesSync();
    _src = utf8.decode(bytes, allowMalformed: true);
    _lines = _src.split('\n');

    // Directive ids are collected from `///` doc-comment lines only. Scanning
    // raw source would false-positive on example code or prose that merely
    // MENTIONS an id (e.g. fixture header comments describing their own
    // ids), causing the applier to wrongly treat classes as already-applied.
    for (final l in _lines) {
      if (!l.trimLeft().startsWith('///')) continue;
      for (final m in _directiveIdRe.allMatches(l)) {
        (m.group(1) == 'macro' ? seenMacroIds : seenTemplateIds)
            .add(m.group(2)!);
      }
    }

    var i = 0;
    final n = _src.length;
    while (i < n) {
      final ch = _src[i];

      // Physical newline: classify the finished line BEFORE applying its
      // brace events, so `class X {` registers X before its body scope opens.
      if (ch == '\n') {
        if (_sawCodeOnLine && _firstCodeCol >= 0) _classifyCurrentLine();
        // Recover from an unterminated single-line string at EOL.
        if (_frames.isNotEmpty &&
            _frames.last.kind == _Frame.kindString &&
            !_frames.last.isTriple) {
          _frames.removeLast();
        }
        for (final isOpen in _pendingBraces) {
          if (isOpen) {
            _depth++;
            if (_pendingClassName != null) {
              _scopes.add(
                _Scope(
                  _pendingClassName!,
                  _latestClassNamed(_pendingClassName!),
                  _depth,
                ),
              );
              _pendingClassName = null;
            } else {
              _scopes.add(_Scope(null, null, _depth));
            }
          } else if (_depth > 0) {
            while (_scopes.isNotEmpty && _scopes.last.openDepth == _depth) {
              _scopes.removeLast();
            }
            _depth--;
          }
        }
        _pendingBraces.clear();
        _sawCodeOnLine = false;
        _firstCodeCol = -1;
        _wsOnlySoFar = true;
        _line++;
        _lineStart = i + 1;
        i++;
        continue;
      }

      if (_inBlockComment) {
        if (ch == '*' && i + 1 < n && _src[i + 1] == '/') {
          _inBlockComment = false;
          i += 2;
          continue;
        }
        i++;
        continue;
      }

      // String / interpolation interior.
      if (_frames.isNotEmpty) {
        i = _consumeInsideFrame(i, n, ch);
        continue;
      }

      // Comments at code position.
      if (ch == '/' && i + 1 < n) {
        final nxt = _src[i + 1];
        if (nxt == '/') {
          if (_wsOnlySoFar && i + 2 < n && _src[i + 2] == '/') {
            i = _captureDocLine(i + 3, n);
          } else {
            i = _skipToEol(i + 2, n);
          }
          continue;
        }
        if (nxt == '*') {
          _inBlockComment = true;
          i += 2;
          continue;
        }
        _markCodeAt(i);
        i++;
        continue;
      }

      // String starts.
      if (ch == '\'' || ch == '"') {
        final isRaw = _precededByRawMarker(i);
        final triple = i + 2 < n && _src[i + 1] == ch && _src[i + 2] == ch;
        _frames.add(_Frame.string(ch, triple, isRaw));
        _markCodeAt(i);
        i += triple ? 3 : 1;
        continue;
      }

      if (ch == '{') {
        _markCodeAt(i);
        _pendingBraces.add(true);
        i++;
        continue;
      }
      if (ch == '}') {
        _markCodeAt(i);
        _pendingBraces.add(false);
        i++;
        continue;
      }

      if (ch == ' ' || ch == '\t' || ch == '\r' || ch == '\uFEFF') {
        i++;
        continue;
      }

      _markCodeAt(i);
      i++;
    }

    return _classes;
  }

  /// Consumes one character while inside a string/interpolation frame. The
  /// caller intercepts `'\n'` before this runs, so no newline handling is
  /// needed here; single-line-string recovery happens at the newline check.
  int _consumeInsideFrame(int i, int n, String ch) {
    final frame = _frames.last;
    if (frame.kind == _Frame.kindInterp) {
      if (ch == '{') {
        frame.braceBalance++;
        return i + 1;
      }
      if (ch == '}') {
        frame.braceBalance--;
        if (frame.braceBalance <= 0) _frames.removeLast();
        return i + 1;
      }
    } else {
      // String interior.
      if (frame.escaped) {
        frame.escaped = false;
        return i + 1;
      }
      if (!frame.isRaw && ch == '\\') {
        frame.escaped = true;
        return i + 1;
      }
      final q = frame.quoteChar!;
      if (ch == q) {
        if (frame.isTriple) {
          if (i + 2 < n && _src[i + 1] == q && _src[i + 2] == q) {
            _frames.removeLast();
            return i + 3;
          }
        } else {
          _frames.removeLast();
          return i + 1;
        }
      }
      if (!frame.isRaw && ch == r'$' && i + 1 < n && _src[i + 1] == '{') {
        _frames.add(_Frame.interp());
        return i + 2;
      }
    }

    return i + 1;
  }

  /// Consumes to end-of-line as a doc fragment starting after `///`.
  int _captureDocLine(int start, int n) {
    var j = start;
    while (j < n && _src[j] != '\n') {
      j++;
    }
    final text = _src.substring(start, j).trim();
    if (_curDoc.isNotEmpty && _line != _lastDocEnd + 1) _curDoc.clear();
    _curDoc.add(_DocLine(_line, text));
    _lastDocEnd = _line;
    return j; // loop then hits '\n' for housekeeping
  }

  int _skipToEol(int from, int n) {
    var j = from;
    while (j < n && _src[j] != '\n') {
      j++;
    }
    return j;
  }

  /// Records that genuine code starts at global offset [pos]; the column
  /// relative to the physical line becomes the anchor for declaration
  /// classification of the finished line.
  void _markCodeAt(int pos) {
    if (!_sawCodeOnLine) {
      final col = pos - _lineStart;
      if (col >= 0) _firstCodeCol = col;
    }
    _sawCodeOnLine = true;
    _wsOnlySoFar = false;
  }

  bool _precededByRawMarker(int i) =>
      i > 0 &&
      _src[i - 1] == 'r' &&
      (i - 2 < 0 || !_isIdentPart(_src.codeUnitAt(i - 2)));

  static bool _isIdentPart(int rune) =>
      (rune >= 0x61 && rune <= 0x7A) ||
      (rune >= 0x41 && rune <= 0x5A) ||
      (rune >= 0x30 && rune <= 0x39) ||
      rune == 0x5F ||
      rune == 0x24;

  _ClassInfo? _latestClassNamed(String name) {
    for (var k = _classes.length - 1; k >= 0; k--) {
      if (_classes[k].name == name) return _classes[k];
    }
    return null;
  }

  /// Classifies the just-finished line (index [_line]) using its first-code
  /// column anchor and the current scope stack. Called by the newline
  /// housekeeping BEFORE that line's deferred brace events are applied, so a
  /// class declaration always registers before its own body scope opens.
  void _classifyCurrentLine() {
    var t = _lines[_line].substring(_firstCodeCol).trimRight();
    final isFactoryHead = RegExp(r'^factory\b').hasMatch(t);
    var stripped = '';
    while (stripped != t) {
      stripped = t;
      t = t.replaceFirst(_modifierRe, '');
    }
    if (t.isEmpty) return;

    // Class-like declarations bind their preceding doc block.
    final clsMatch = _classDeclRe.firstMatch(t);
    if (clsMatch != null) {
      _bindClass(clsMatch.group(2)!, _line);
      return;
    }

    // Constructors must be declared directly inside their class body.
    if (_scopes.isEmpty) return;
    final scope = _scopes.last;
    final className = scope.className;
    final classRef = scope.classRef;
    if (className == null || classRef == null) return;

    final ctorMatch = _ctorHeadRe.firstMatch(t);
    if (ctorMatch == null) return;
    final fullName = ctorMatch.group(1)!;
    final dotIdx = fullName.indexOf('.');
    final base = dotIdx < 0 ? fullName : fullName.substring(0, dotIdx);
    if (base != className) return;
    final namedPart = dotIdx < 0 ? null : fullName.substring(dotIdx + 1);

    _bindConstructor(
      displayName: namedPart == null ? 'new' : '$className.$namedPart',
      line: _line + 1,
      isFactory: isFactoryHead,
      isPrivate: namedPart != null && namedPart.startsWith('_'),
      parentRef: classRef,
    );
  }

  bool _docAdjacent(int declLine0) {
    if (_curDoc.isEmpty) return false;
    final lastDocLine0 = _curDoc.last.lineNo;
    if (lastDocLine0 > declLine0 - 1) return false;
    for (var l = lastDocLine0 + 1; l < declLine0; l++) {
      if (!_annotationRe.hasMatch(_lines[l])) return false;
    }
    return true;
  }

  void _bindClass(String name, int declLine0) {
    final doc = _docAdjacent(declLine0)
        ? List<_DocLine>.from(_curDoc)
        : const <_DocLine>[];
    _classes.add(
      _ClassInfo(
        filePath: filePath,
        name: name,
        line: declLine0 + 1,
        doc: doc,
      ),
    );
    _pendingClassName = name;
    _curDoc.clear();
  }

  void _bindConstructor({
    required String displayName,
    required int line,
    required bool isFactory,
    required bool isPrivate,
    required _ClassInfo parentRef,
  }) {
    final doc = _docAdjacent(line - 1)
        ? List<_DocLine>.from(_curDoc)
        : const <_DocLine>[];
    _curDoc.clear();
    parentRef.ctors.add(
      _CtorInfo(
        displayName: displayName,
        line: line,
        isFactory: isFactory,
        isPrivate: isPrivate,
        doc: doc,
      ),
    );
  }
}
