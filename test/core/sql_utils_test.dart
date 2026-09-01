import 'package:localpocket/src/kernel/sql_utils.dart';
import 'package:test/test.dart';

/// First-value result helpers used by the raw-SQL layers (counts, keyset
/// page rows, compiled-query scalars).
void main() {
  group('firstStringValue', () {
    test('returns null for an empty result set', () {
      expect(firstStringValue(const []), isNull);
    });

    test('returns the first column of the first row as a string', () {
      expect(
          firstStringValue(const [
            {'v': 'text'}
          ]),
          'text');
      expect(
          firstStringValue(const [
            {'v': 42}
          ]),
          '42');
      expect(
          firstStringValue(const [
            {'v': 3.5}
          ]),
          '3.5');
      expect(
          firstStringValue(const [
            {'v': true}
          ]),
          'true');
    });

    test('a null first value stays null rather than "null"', () {
      expect(
          firstStringValue(const [
            {'v': null}
          ]),
          isNull);
    });

    test('ignores later rows and later columns', () {
      expect(
          firstStringValue(const [
            {'v': 'first', 'ignored': 'other'},
            {'v': 'second'},
          ]),
          'first');
    });
  });

  group('firstIntValue', () {
    test('returns null for an empty result set', () {
      expect(firstIntValue(const []), isNull);
    });

    test('passes through ints and parses numeric strings', () {
      expect(
          firstIntValue(const [
            {'v': 7}
          ]),
          7);
      expect(
          firstIntValue(const [
            {'v': '7'}
          ]),
          7);
    });

    test('non-integer and non-numeric values coerce to null', () {
      expect(
          firstIntValue(const [
            {'v': 1.5}
          ]),
          isNull);
      expect(
          firstIntValue(const [
            {'v': 'not-a-number'}
          ]),
          isNull);
      expect(
          firstIntValue(const [
            {'v': null}
          ]),
          isNull);
    });
  });
}
