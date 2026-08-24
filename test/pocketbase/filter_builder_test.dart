import 'package:localpocket/pocketbase.dart';
import 'package:localpocket/sync.dart';
import 'package:test/test.dart';

/// Filter builder tests.
/// Golden strings pin the exact wire filters.
void main() {
  group('filter builder', () {
    test('pull filter golden', () {
      expect(
        pullFilter('widgets', '2026-08-14 10:00:00.000Z'),
        "(store='widgets' && updated>='2026-08-14 10:00:00.000Z')",
      );
      expect(
        pullFilter('a_store', '1970-01-01 00:00:00.000Z'),
        "(store='a_store' && updated>='1970-01-01 00:00:00.000Z')",
      );
    });

    test('sweep bucket and keyset golden', () {
      expect(
        sweepFilter('widgets', 'a'),
        "(store='widgets' && id~'a%')",
      );
      expect(
        sweepFilter('widgets', 'z', fromId: 'zabc123'),
        "(store='widgets' && id~'z%' && id>'zabc123')",
      );
      // Keyset continuation is appended to the pull filter too.
      expect(
        pullPageFilter(
            "(store='widgets' && updated>='2026-08-14 10:00:00.000Z')", 'r01'),
        "(store='widgets' && updated>='2026-08-14 10:00:00.000Z') && id>'r01'",
      );
    });

    test('quote escaping single quote backslash', () {
      expect(quote("o'brien"), "'o\\'brien'");
      expect(quote('plain'), "'plain'");
      expect(quote("a'b'c"), "'a\\'b\\'c'");
      // Empty and weird-but-legal ids round-trip.
      expect(quote(''), "''");
      expect(quote('_x'), "'_x'");
    });

    test('quote escapes quotes; backslashes pass through (real PB semantics)',
        () {
      // Real PB treats `\` as an escape ONLY before `'` (verified live):
      // `\'` -> `'`, and a backslash before any other char is LITERAL.
      expect(quote(r'back\slash'), r"'back\slash'");
      // backslash immediately before a quote: the quote is still escaped.
      expect(quote(r"a\'b"), r"'a\\'b'");
      expect(quote(r'end\\'), r"'end\\'");
      expect(quote(r"'lead"), r"'\'lead'");
      // Round-trip under PB's rule (`\'` -> `'`, other backslashes literal).
      String pbUnescape(String s) {
        final b = StringBuffer();
        for (var i = 0; i < s.length; i++) {
          if (s[i] == '\\' && i + 1 < s.length && s[i + 1] == "'") {
            b.write("'");
            i++;
          } else {
            b.write(s[i]);
          }
        }
        return b.toString();
      }

      for (final v in [r'back\slash', r"a\'b", r'end\\', r"'lead", r'a\\b']) {
        expect(pbUnescape(quote(v).substring(1, quote(v).length - 1)), v,
            reason: '"$v" round-trips under real PB escaping');
      }
    });

    test('quote preserves newlines, control chars, and unicode', () {
      // Raw control characters are passed through (never unescaped): the
      // builder quotes literals, it does not sanitize content.
      expect(quote('line1\nline2'), "'line1\nline2'");
      expect(quote('tab\there'), "'tab\there'");
      expect(quote('héllo wörld 你好'), "'héllo wörld 你好'");
      expect(quote('emoji 🚀'), "'emoji 🚀'");
      expect(quote('\u0000'), "'\u0000'", reason: 'NUL passes through');
    });

    test('all builders accept empty and filter-syntax-laden values', () {
      // Empty values.
      expect(pullFilter('', ''), "(store='' && updated>='')");
      expect(sweepFilter('', ''), "(store='' && id~'%')");
      expect(pullPageFilter("(store='s' && updated>='u')", ''),
          "(store='s' && updated>='u') && id>''");
      expect(
          sweepFilter('s', '', fromId: ''), "(store='s' && id~'%' && id>'')");

      // A store name that itself contains filter syntax.
      const trickyStore = "weird'&&name=x";
      final f = pullFilter(trickyStore, '2026-01-01 00:00:00.000Z');
      expect(f, contains("'weird\\'&&name=x'"),
          reason: 'the embedded quote is escaped, not a boundary');
      expect(f.contains("'weird'&&name=x"), isFalse);

      // Ids / buckets with filter metacharacters stay inside one literal.
      for (final v in ["a'b", 'a&&b', 'a)b', 'a)b||c', r'a\b', ' a ']) {
        final sweep = sweepFilter('widgets', v);
        expect(sweep, contains("'${v.replaceAll("'", "\\'")}%'"),
            reason: '"$v" stays inside the literal');
      }
    });

    test('keyset boundaries for every builder', () {
      // pullPageFilter appends the tuple tie-break.
      expect(pullPageFilter('(x)', 'abc'), "(x) && id>'abc'");
      expect(pullPageFilter('(x)', ''), "(x) && id>''");

      // sweepFilter: with and without the keyset continuation.
      expect(sweepFilter('widgets', 'a'), "(store='widgets' && id~'a%')");
      expect(sweepFilter('widgets', 'a', fromId: 'r1'),
          "(store='widgets' && id~'a%' && id>'r1')");
      expect(sweepFilter('widgets', 'a', fromId: ''),
          "(store='widgets' && id~'a%' && id>'')");

      // pullFilter never adds a keyset.
      expect(pullFilter('widgets', 'u'), "(store='widgets' && updated>='u')");
    });

    test('injection-like strings never escape their literal', () {
      for (final hostile in [
        "x') OR 1=1 --",
        "x' OR '1'='1",
        "'; DROP TABLE data; --",
        "x') UNION SELECT * FROM data --",
        r"x\') OR 1=1 --",
      ]) {
        final f = pullFilter('widgets', hostile);
        // Every single quote inside is escaped, so the literal cannot close.
        final inner = f.substring(f.indexOf('updated>=') + 'updated>='.length);
        final value = inner.substring(0, inner.length - 1); // strip trailing )
        expect(value.startsWith("'"), isTrue);
        expect(value.endsWith("'"), isTrue);
        // No unescaped quote may appear between the opening and closing quote.
        final body = value.substring(1, value.length - 1);
        for (var i = 0; i < body.length; i++) {
          if (body[i] == "'") {
            expect(i > 0 && body[i - 1] == '\\', isTrue,
                reason: 'quote at $i must be escaped in "$hostile"');
          }
        }
      }
    });

    test('timestamp exact millisecond formatting boundaries', () {
      expect(formatPbTimestamp(DateTime.utc(2026, 8, 15, 10, 0, 0, 0)),
          '2026-08-15 10:00:00.000Z');
      expect(formatPbTimestamp(DateTime.utc(2026, 8, 15, 10, 0, 0, 1)),
          '2026-08-15 10:00:00.001Z');
      expect(formatPbTimestamp(DateTime.utc(2026, 8, 15, 10, 0, 0, 999)),
          '2026-08-15 10:00:00.999Z');
      // A non-UTC DateTime formats as its UTC instant (never local fields).
      final utc = DateTime.utc(2026, 8, 15, 10, 0, 0, 5);
      final local = utc.toLocal(); // same instant, local representation
      expect(local.isUtc, isFalse, reason: 'the fixture is genuinely local');
      expect(formatPbTimestamp(local), '2026-08-15 10:00:00.005Z',
          reason: 'local wall-clock fields must not leak into the Z-timestamp');
      expect(formatPbTimestamp(local), formatPbTimestamp(utc),
          reason: 'same instant, same emitted string');
    });

    test('timestamp invalid dates rejected with a typed error', () {
      for (final bad in [
        '2026-02-30 00:00:00.000Z', // Feb 30
        '2026-13-01 00:00:00.000Z', // month 13
        '2026-01-01 24:00:00.000Z', // hour 24
        '2026-01-01 00:00:00.000+05:00', // timezone suffix
        'not-a-date',
        '',
      ]) {
        expect(() => pbTimestampToDateTime(bad), throwsA(isA<ProtocolError>()),
            reason: '"$bad"');
      }
    });

    test('quote output is a single-quoted literal', () {
      expect(quote('x'), "'x'");
      expect(quote("don't"), "'don\\'t'");
      // The output is always surrounded by exactly one pair of quotes.
      for (final v in ['a', "a'b", r'a\b', '']) {
        final q = quote(v);
        expect(q.startsWith("'"), isTrue);
        expect(q.endsWith("'"), isTrue);
        expect(q.length >= 2, isTrue);
      }
    });

    test('timestamp format exact pb emission', () {
      // formatPbTimestamp lives in sync.dart and is what the adapter emits.
      final t = pbTimestampToDateTime('2026-08-14 10:00:00.000Z');
      expect(formatPbTimestamp(t), '2026-08-14 10:00:00.000Z');
      expect(
        formatPbTimestamp(DateTime.utc(2026, 8, 14, 23, 59, 59, 999)),
        '2026-08-14 23:59:59.999Z',
      );
      expect(
        formatPbTimestamp(DateTime.utc(2026, 1, 2, 3, 4, 5, 6)),
        '2026-01-02 03:04:05.006Z',
      );
      // Round-trip through the parser.
      expect(pbTimestampToDateTime('2026-01-02 03:04:05.006Z'),
          DateTime.utc(2026, 1, 2, 3, 4, 5, 6));
    });

    test('operator whitelist rejects injection', () {
      // The filter builder only ever emits = / >= / > / ~ with quoted
      // literals. A hostile store/id cannot break out of the quotes.
      const hostile = "x') OR 1=1 --";
      final filter = pullFilter(hostile, '2026-01-01 00:00:00.000Z');
      // The embedded quote is escaped, so the literal cannot terminate early.
      expect(filter, contains("x\\') OR 1=1 --'"));
      expect(filter.contains("'x') OR 1=1"), isFalse,
          reason: 'no unescaped quote can close the literal');

      final sweep = sweepFilter('widgets', hostile);
      expect(sweep, contains("'x\\') OR 1=1 --%'"));
      expect(sweep.contains("'x') OR 1=1"), isFalse);
    });

    test('filter never touches data json keys', () {
      // Filters reference only system columns (store/id/updated), never
      // domain `data` keys.
      for (final f in [
        pullFilter('widgets', '2026-01-01 00:00:00.000Z'),
        sweepFilter('widgets', 'a'),
      ]) {
        expect(f.contains('data.'), isFalse);
        expect(f.contains("data'"), isFalse);
      }
    });
  });
}
