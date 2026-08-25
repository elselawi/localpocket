import 'dart:convert';

import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

/// Canonical JSON serialization boundary tests.
///
/// `canonicalize()` is load-bearing: it backs document hashing, conflict base
/// snapshots, and payload generation, so the exact byte output matters.
void main() {
  group('canonicalize()', () {
    test('scalar goldens', () {
      expect(canonicalize(null), 'null');
      expect(canonicalize(true), 'true');
      expect(canonicalize(false), 'false');
      expect(canonicalize(42), '42');
      expect(canonicalize(-7), '-7');
      expect(canonicalize(0), '0');
    });

    test('integral doubles print as integers below the 1e15 boundary', () {
      expect(canonicalize(1.0), '1');
      expect(canonicalize(42.0), '42');
      expect(canonicalize(-3.0), '-3');
      expect(canonicalize(123456789012345.0), '123456789012345');
      expect(canonicalize(0.0), '0');
    });

    test('negative zero canonicalizes to 0', () {
      expect(canonicalize(-0.0), '0');
      expect(canonicalize(0.0), '0');
      // -0.0 and 0.0 produce identical canonical forms.
      expect(canonicalize(-0.0), canonicalize(0.0));
    });

    test('integral doubles print as full integers at any magnitude', () {
      expect(canonicalize(1e14), '100000000000000');
      expect(canonicalize(1e15), '1000000000000000');
      expect(canonicalize(1e16), '10000000000000000');
      expect(canonicalize(1234567890123456.0), '1234567890123456');
      // Doubles at 2^53 lose precision; the canonical form reflects the
      // stored double value.
      expect(canonicalize(9007199254740993.0), '9007199254740992');
      expect(canonicalize(-1e15), '-1000000000000000');
      // Integral reals never carry a `.0` suffix: the server echoes the same
      // number as a full decimal integer.
      expect(canonicalize(1.5e15), '1500000000000000');
    });

    test('integral reals at/above 1e15 match the server echo', () {
      // The server parses the JSON number and echoes its ES6-style string
      // form (full decimal, no `.0`). The canonical form must agree so the
      // payload hash matches and pushes do not take the "server transformed
      // payload" rewrite path.
      expect(canonicalize(1e15), '1000000000000000');
      expect(canonicalize(1e15), canonicalize(jsonDecode('1000000000000000')));
      expect(
          canonicalize(1.5e15), canonicalize(jsonDecode('1500000000000000')));
      expect(canonicalize(1e16), canonicalize(jsonDecode('10000000000000000')));
      expect(
          canonicalize(-1e15), canonicalize(jsonDecode('-1000000000000000')));
    });

    test('finite doubles are a fixed point under the server echo round-trip',
        () {
      // canonicalize -> jsonDecode (the local form of the server echo) ->
      // canonicalize must be stable.
      for (final v in <double>[
        1e14,
        1e15,
        1e16,
        1.5e15,
        -1e15,
        0.1,
        1e-7,
        42.0,
        -0.0,
        9007199254740993.0,
        1234567890123456.0,
      ]) {
        final first = canonicalize(v);
        expect(canonicalize(jsonDecode(first)), first,
            reason: '$v: "$first" is not a fixed point');
      }
    });

    test('non-integral doubles keep toString', () {
      expect(canonicalize(1.5), '1.5');
      expect(canonicalize(-2.5), '-2.5');
      expect(canonicalize(0.1), '0.1');
      expect(canonicalize(1e-7), '1e-7');
    });

    test('NaN and infinities are preserved verbatim', () {
      expect(canonicalize(double.nan), 'NaN');
      expect(canonicalize(double.infinity), 'Infinity');
      expect(canonicalize(double.negativeInfinity), '-Infinity');
    });

    test('unsupported Dart objects are rejected', () {
      expect(() => canonicalize(Duration.zero), throwsA(isA<ArgumentError>()));
      expect(() => canonicalize(const Object()), throwsA(isA<ArgumentError>()));
      expect(() => canonicalize(DateTime.now()), throwsA(isA<ArgumentError>()));
      expect(
        () => canonicalize(Duration.zero),
        throwsA(isA<ArgumentError>().having(
            (e) => e.message.toString(), 'message', contains('Duration'))),
      );
    });

    test('object keys are sorted lexicographically', () {
      expect(canonicalize({'b': 1, 'a': 2}), '{"a":2,"b":1}');
      expect(canonicalize({'z': 1, 'A': 2, 'a': 3}), '{"A":2,"a":3,"z":1}');
      expect(
          canonicalize({
            'b': {'d': 1, 'c': 2},
            'a': {'f': 1, 'e': 2}
          }),
          '{"a":{"e":2,"f":1},"b":{"c":2,"d":1}}');
    });

    test('non-string map keys are stringified, sorted, and keep their values',
        () {
      // Value lookup must use the ORIGINAL key; the stringified form never
      // matches a non-string key.
      expect(canonicalize({1: 'a'}), '{"1":"a"}');
      expect(canonicalize({2: 'b', 1: 'a'}), '{"1":"a","2":"b"}');
      expect(canonicalize({true: 'x', false: 'y'}), '{"false":"y","true":"x"}');
      expect(
          canonicalize({
            1: {'nested': 2}
          }),
          '{"1":{"nested":2}}');
    });

    test('non-string keys round-trip stably through the canonical form', () {
      // canonicalize -> jsonDecode -> canonicalize is fixed-point.
      final first = canonicalize({2: 'b', 1: 'a'});
      final decoded = jsonDecode(first) as Map<String, Object?>;
      expect(canonicalize(decoded), first,
          reason: 'the canonical form is a stable fixed point');
      expect(canonicalize({1: 'a'}), canonicalize(jsonDecode('{"1":"a"}')),
          reason: 'int key 1 and string key "1" agree when alone');
    });

    test('distinct keys that stringify identically are rejected', () {
      // `1` (int) and `'1'` (String) both stringify to "1" and cannot be
      // represented losslessly in JSON; silently merging would corrupt the
      // load-bearing hash, so the canonicalizer must fail loudly.
      expect(
        () => canonicalize({1: 'a', '1': 'b'}),
        throwsA(isA<ArgumentError>().having((e) => e.message.toString(),
            'message', contains('collide after toString'))),
      );
      expect(() => canonicalize({true: 'a', 'true': 'b'}),
          throwsA(isA<ArgumentError>()));
    });

    test('output is compact with no insignificant whitespace', () {
      expect(
          canonicalize({
            'a': [
              1,
              2,
              {'b': null}
            ]
          }),
          '{"a":[1,2,{"b":null}]}');
      expect(canonicalize({'a': ' x ', 'b': ' y '}), '{"a":" x ","b":" y "}');
      expect(canonicalize({'a': 1}), isNot(contains(' ')));
      expect(
          canonicalize([
            1,
            {'b': 2, 'a': 1}
          ]),
          '[1,{"a":1,"b":2}]');
    });

    test('string escaping matches JSON', () {
      expect(canonicalize(''), '""');
      expect(canonicalize('plain'), '"plain"');
      expect(canonicalize('a\n"b"\t\\c'), '"a\\n\\"b\\"\\t\\\\c"');
      expect(canonicalize('a"b'), '"a\\"b"');
      expect(canonicalize('\\'), '"\\\\"');
      expect(canonicalize('\b\f\r'), '"\\b\\f\\r"');
      expect(canonicalize('\u0000\u0001\u001f'), '"\\u0000\\u0001\\u001f"');
      // Dart's jsonEncode does not escape DEL (0x7f); it is emitted literally.
      expect(canonicalize('\u007f'), '"\u007f"');
    });

    test('unicode and control characters', () {
      // Non-ASCII characters are preserved literally (Dart jsonEncode).
      expect(canonicalize('héllo 🎉'), '"héllo 🎉"');
      expect(canonicalize('名前'), '"名前"');
      expect(canonicalize('\u00e9'), '"\u00e9"');
      expect(canonicalize('\u0000'), '"\\u0000"');
      expect(canonicalize('\n'), '"\\n"');
      // A control character inside an object value.
      expect(canonicalize({'k': '\u0001'}), '{"k":"\\u0001"}');
    });

    test('empty and deeply nested structures', () {
      expect(canonicalize(<String, Object?>{}), '{}');
      expect(canonicalize(<Object?>[]), '[]');
      expect(canonicalize({'a': <String, Object?>{}}), '{"a":{}}');
      expect(canonicalize({'a': <Object?>[]}), '{"a":[]}');
      expect(
          canonicalize([
            1,
            [
              2,
              [
                3,
                [
                  4,
                  [5, <Object?>[]]
                ]
              ]
            ]
          ]),
          '[1,[2,[3,[4,[5,[]]]]]]');
      expect(
          canonicalize({
            'a': {
              'b': {
                'c': {
                  'd': {
                    'e': [
                      1,
                      2,
                      {'f': null}
                    ]
                  }
                }
              }
            }
          }),
          '{"a":{"b":{"c":{"d":{"e":[1,2,{"f":null}]}}}}}');
    });

    test('lists preserve order and types', () {
      expect(canonicalize([1, 'x', null, true, 2.0]), '[1,"x",null,true,2]');
      expect(canonicalize([]), '[]');
      expect(canonicalize([<String, Object?>{}]), '[{}]');
    });

    test('map with null values keeps explicit nulls', () {
      expect(canonicalize({'a': null}), '{"a":null}');
      expect(canonicalize({'a': null, 'b': 1}), '{"a":null,"b":1}');
    });

    test('round-trip equality with jsonDecode', () {
      // Canonical output must always be valid JSON that decodes to the same
      // logical value.
      final values = <Object?>[
        null,
        true,
        42,
        -3.5,
        'text',
        {
          'a': 1,
          'b': [1, 2, null]
        },
        [
          1,
          {'x': false},
          'y'
        ],
        <String, Object?>{},
        <Object?>[],
        {
          '深い': {
            'nested': [1, 2, 3]
          }
        },
      ];
      for (final v in values) {
        expect(() => canonicalize(v), returnsNormally);
      }
      expect(
          jsonDecode(canonicalize({
            'a': 1,
            'b': [1, 2, null]
          })),
          {
            'a': 1,
            'b': [1, 2, null]
          });
    });
  });
}
