import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

/// A selectable, nicely formatted code block used by every "View Code" section.
/// Provides lightweight Dart syntax coloring and a quick copy button.
class CodeBlock extends StatefulWidget {
  final String code;
  final String? title;

  const CodeBlock({super.key, required this.code, this.title});

  @override
  State<CodeBlock> createState() => _CodeBlockState();
}

class _CodeBlockState extends State<CodeBlock> {
  bool _copied = false;

  static const _codeFontFamilyFallback = [
    'Fira Code',
    'JetBrains Mono',
    'Cascadia Code',
    'Consolas',
    'Source Code Pro',
    'Menlo',
    'Monaco',
    'Courier New',
    'monospace',
  ];

  static const _codeFont = TextStyle(
    fontFamily: 'Consolas',
    fontFamilyFallback: _codeFontFamilyFallback,
    fontSize: 13,
    height: 1.55,
    letterSpacing: -0.2,
  );

  static const _keywords = {
    'import',
    'class',
    'const',
    'final',
    'static',
    'Future',
    'Stream',
    'required',
    'this',
    'return',
    'void',
    'await',
    'async',
    'var',
    'throw',
    'if',
    'else',
    'enum',
    'abstract',
    'extends',
    'implements',
    'typedef',
    'with',
    'on',
    'in',
    'for',
    'package',
    'show',
  };

  @override
  Widget build(BuildContext context) {
    final scheme = Theme.of(context).colorScheme;
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bg = isDark ? const Color(0xFF161A22) : const Color(0xFF0D1117);
    final fg = isDark ? const Color(0xFFE6EDF3) : const Color(0xFFE6EDF3);
    final comment = isDark ? const Color(0xFF8B949E) : const Color(0xFF8B949E);
    final keyword = isDark ? const Color(0xFFFF7B72) : const Color(0xFFFF7B72);
    final string = isDark ? const Color(0xFFA5D6FF) : const Color(0xFFA5D6FF);
    final function = isDark ? const Color(0xFFD2A8FF) : const Color(0xFFD2A8FF);
    final number = isDark ? const Color(0xFF79C0FF) : const Color(0xFF79C0FF);

    return Container(
      width: double.infinity,
      decoration: BoxDecoration(
        color: bg,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: scheme.outlineVariant.withValues(alpha: 0.3)),
      ),
      clipBehavior: Clip.antiAlias,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            width: double.infinity,
            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 6),
            color: Colors.black.withValues(alpha: 0.3),
            child: Row(
              children: [
                Icon(Icons.code_rounded, size: 14, color: scheme.primary),
                const SizedBox(width: 8),
                Text(
                  widget.title ?? 'Dart',
                  style: _codeFont.copyWith(
                    fontSize: 12,
                    fontWeight: FontWeight.w600,
                    color: fg.withValues(alpha: 0.75),
                  ),
                ),
                const Spacer(),
                IconButton(
                  iconSize: 16,
                  visualDensity: VisualDensity.compact,
                  tooltip: _copied ? 'Copied!' : 'Copy code',
                  icon: Icon(
                    _copied ? Icons.check_rounded : Icons.copy_rounded,
                    color: _copied
                        ? Colors.greenAccent
                        : fg.withValues(alpha: 0.6),
                  ),
                  onPressed: () async {
                    await Clipboard.setData(ClipboardData(text: widget.code));
                    if (mounted) {
                      setState(() => _copied = true);
                      Future.delayed(const Duration(seconds: 2), () {
                        if (mounted) setState(() => _copied = false);
                      });
                    }
                  },
                ),
              ],
            ),
          ),
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
            child: SelectableText.rich(
              TextSpan(
                style: _codeFont.copyWith(color: fg),
                children: _tokenize(
                  widget.code,
                  fg,
                  comment,
                  keyword,
                  string,
                  function,
                  number,
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  List<TextSpan> _tokenize(
    String src,
    Color fg,
    Color comment,
    Color keyword,
    Color string,
    Color function,
    Color number,
  ) {
    final spans = <TextSpan>[];
    final regex = RegExp(
      r"""(//.*$)|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")|(\b\d+(?:\.\d+)?\b)|([A-Za-z_][A-Za-z0-9_]*\s*\()|([A-Za-z_][A-Za-z0-9_]*)""",
      multiLine: true,
    );
    var last = 0;
    for (final m in regex.allMatches(src)) {
      if (m.start > last) {
        spans.add(TextSpan(text: src.substring(last, m.start)));
      }
      final g = m.group(0)!;
      final style = _codeFont.copyWith(color: fg);
      Color? color;
      FontWeight? weight;
      if (m.group(1) != null) {
        color = comment;
      } else if (m.group(2) != null) {
        color = string;
      } else if (m.group(3) != null) {
        color = number;
      } else if (m.group(4) != null) {
        final name = g.substring(0, g.length - 1).trimRight();
        final trailing = g.substring(g.length - 1);
        spans.add(
          TextSpan(
            text: name,
            style: _codeFont.copyWith(color: function),
          ),
        );
        spans.add(TextSpan(text: trailing, style: style));
        last = m.end;
        continue;
      } else if (m.group(5) != null) {
        if (_keywords.contains(g)) {
          color = keyword;
          weight = FontWeight.w600;
        } else {
          color = fg;
        }
      }
      spans.add(
        TextSpan(
          text: g,
          style: _codeFont.copyWith(color: color ?? fg, fontWeight: weight),
        ),
      );
      last = m.end;
    }
    if (last < src.length) {
      spans.add(TextSpan(text: src.substring(last)));
    }
    return spans;
  }
}
