import 'dart:typed_data';

import 'package:localpocket/src/web/conversions.dart';
import 'package:test/test.dart';

void main() {
  group('wire value round-trips', () {
    test('primitives pass through', () {
      for (final value in [null, true, false, 0, -1, 1.5, 'text', '', 2 ^ 53]) {
        expect(decodeWireValue(encodeWireValue(value)), value);
      }
    });

    test('nested lists and maps', () {
      final original = <String, Object?>{
        'a': [1, 2, 'three'],
        'b': {'c': null, 'd': false},
        'e': <String, Object?>{},
      };
      expect(decodeWireValue(encodeWireValue(original)), original);
    });

    test('maps with non-string keys use toString on encode', () {
      final encoded = encodeWireValue({1: 'one', 2.0: 'two'});
      final decoded = decodeWireValue(encoded) as Map;
      expect(decoded['1'], 'one');
      expect(decoded['2.0'], 'two');
    });

    test('rejects unsupported objects with a typed error', () {
      expect(() => encodeWireValue(Object()), throwsArgumentError);
      expect(
        () => encodeWireValue(const Stream<int>.empty()),
        throwsArgumentError,
      );
      expect(() => encodeWireValue([Object()]), throwsArgumentError);
    });
  });

  group('DateTime', () {
    test('round-trips with equality and isUtc', () {
      final now = DateTime.utc(2026, 8, 16, 12, 34, 56, 789, 123);
      final decoded = decodeWireValue(encodeWireValue(now)) as DateTime;
      expect(decoded, now); // DateTime == compares instants and isUtc.
      expect(decoded.isUtc, isTrue);
    });

    test('handles pre-epoch, zero, and microseconds', () {
      for (final value in [
        DateTime.utc(1969, 12, 31, 23, 59, 59, 999, 999),
        DateTime.utc(0),
        DateTime.utc(2020, 1, 1),
      ]) {
        expect(decodeWireValue(encodeWireValue(value)), value);
      }
    });

    test('rejects malformed tagged dates', () {
      expect(
          () => decodeWireValue({'lp:datetime': 'nope'}), throwsArgumentError);
      expect(() => decodeWireValue({'lp:datetime': null}), throwsArgumentError);
    });
  });

  group('BigInt', () {
    test('decoded values satisfy is BigInt', () {
      for (final value in [
        BigInt.zero,
        BigInt.one,
        BigInt.from(-42),
        BigInt.parse('999999999999999999999999999999')
      ]) {
        final decoded = decodeWireValue(encodeWireValue(value));
        expect(decoded, isA<BigInt>());
      }
    });

    test('decoded values support arithmetic', () {
      final decoded = decodeWireValue(
              encodeWireValue(BigInt.parse('123456789012345678901234567890')))
          as BigInt;
      expect(
          decoded + BigInt.one, BigInt.parse('123456789012345678901234567891'));
      expect(
          decoded - BigInt.one, BigInt.parse('123456789012345678901234567889'));
      expect(
          decoded * BigInt.two, BigInt.parse('246913578024691357802469135780'));
    });

    test('decoded values support compareTo', () {
      final decoded =
          decodeWireValue(encodeWireValue(BigInt.from(-7))) as BigInt;
      expect(decoded.compareTo(BigInt.zero), lessThan(0));
      expect(BigInt.zero.compareTo(decoded), greaterThan(0));
      expect(decoded.compareTo(BigInt.from(-7)), 0);
    });

    test('decodeBigInt always parses from string', () {
      // Simulates a value reconstructed off the wire that is not a real BigInt.
      final decoded = decodeBigInt(BigInt.parse('9007199254740993').toString());
      expect(decoded, isA<BigInt>());
      expect(decoded + BigInt.one, BigInt.parse('9007199254740994'));
    });

    test('rejects malformed BigInt tags', () {
      expect(() => decodeWireValue({'lp:bigint': 5}), throwsArgumentError);
    });
  });

  group('Uint8List', () {
    test('round-trips byte-for-byte', () {
      final bytes = Uint8List.fromList([0, 1, 2, 255, 127, 128]);
      final decoded = decodeWireValue(encodeWireValue(bytes)) as Uint8List;
      expect(decoded, bytes);
      expect(decoded.length, bytes.length);
      for (var i = 0; i < bytes.length; i++) {
        expect(decoded[i], bytes[i]);
      }
    });

    test('round-trips empty and large buffers', () {
      expect(decodeWireValue(encodeWireValue(Uint8List(0))), isEmpty);
      final large = Uint8List(10000);
      for (var i = 0; i < large.length; i++) {
        large[i] = (i * 7) & 0xff;
      }
      final decoded = decodeWireValue(encodeWireValue(large)) as Uint8List;
      expect(decoded, large);
    });

    test('rejects invalid bytes and wrong tags', () {
      expect(
          () => decodeWireValue({
                'lp:bytes': [256]
              }),
          throwsArgumentError);
      expect(
          () => decodeWireValue({
                'lp:bytes': [-1]
              }),
          throwsArgumentError);
      expect(() => decodeWireValue({'lp:bytes': 'nope'}), throwsArgumentError);
    });
  });
}
