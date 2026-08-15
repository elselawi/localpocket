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
      final hostile = "x') OR 1=1 --";
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
