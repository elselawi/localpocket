import 'package:localpocket/src/platform/web/page/protocol.dart';
import 'package:localpocket/src/platform/web/worker/wire_args.dart';
import 'package:test/test.dart';

/// Edge coverage for [WireArgs]: every accessor's happy path plus the
/// malformed-shape paths that must surface as a stable
/// [ProtocolEnvelopeException] instead of a cast error.
void main() {
  group('require<T>', () {
    test('returns the typed value when present', () {
      const args = WireArgs({'a': 'x', 'b': 5, 'c': true});
      expect(args.require<String>('a'), 'x');
      expect(args.require<int>('b'), 5);
      expect(args.require<bool>('c'), isTrue);
    });

    test('an absent or wrong-typed value is a typed protocol error', () {
      expect(() => const WireArgs({}).require<String>('a'),
          throwsA(isA<ProtocolEnvelopeException>()));
      expect(() => const WireArgs({'a': 5}).require<String>('a'),
          throwsA(isA<ProtocolEnvelopeException>()));
    });

    test('the operation name decorates the message', () {
      expect(
        () => const WireArgs({}).require<String>('store', op: 'get'),
        throwsA(isA<ProtocolEnvelopeException>()
            .having((e) => e.message, 'message', contains('for get'))),
      );
      expect(
        () => const WireArgs({'store': 5}).require<String>('store', op: 'get'),
        throwsA(isA<ProtocolEnvelopeException>()
            .having((e) => e.message, 'message', contains('got int'))),
      );
    });
  });

  group('optional<T>', () {
    test('null and absent both yield null', () {
      expect(const WireArgs({}).optional<int>('a'), isNull);
      expect(const WireArgs({'a': null}).optional<int>('a'), isNull);
    });

    test('a wrong-typed value is a typed protocol error', () {
      expect(() => const WireArgs({'a': 'x'}).optional<int>('a'),
          throwsA(isA<ProtocolEnvelopeException>()));
    });

    test('a present value of the right type passes through', () {
      expect(const WireArgs({'a': 5}).optional<int>('a'), 5);
    });
  });

  group('typed convenience accessors', () {
    test('int/string/bool required forms read their values', () {
      const args = WireArgs({'i': 1, 's': 'x', 'b': false});
      expect(args.requireInt('i'), 1);
      expect(args.requireString('s'), 'x');
      expect(args.requireBool('b'), isFalse);
    });

    test('int/string/bool optional forms default to null', () {
      const args = WireArgs({});
      expect(args.optionalInt('i'), isNull);
      expect(args.optionalString('s'), isNull);
      expect(args.optionalBool('b'), isNull);
    });

    test('lists and maps are validated as their exact shapes', () {
      const args = WireArgs({
        'list': [1, 'x'],
        'map': {'k': 'v'},
      });
      expect(args.requireList('list'), [1, 'x']);
      expect(args.requireMap('map'), {'k': 'v'});
      expect(args.optionalList('missing'), isNull);
    });

    test('wrong-shaped lists and maps are typed protocol errors', () {
      expect(() => const WireArgs({'list': 'x'}).requireList('list'),
          throwsA(isA<ProtocolEnvelopeException>()));
      expect(() => const WireArgs({'map': 'x'}).requireMap('map'),
          throwsA(isA<ProtocolEnvelopeException>()));
      expect(() => const WireArgs({'list': 'x'}).optionalList('list'),
          throwsA(isA<ProtocolEnvelopeException>()));
    });
  });

  test('errors name the offending key and describe both sides', () {
    try {
      const WireArgs({'count': 'many'}).require<int>('count', op: 'page');
      fail('expected a ProtocolEnvelopeException');
    } on ProtocolEnvelopeException catch (e) {
      expect(e.message, contains('"count"'));
      expect(e.message, contains('for page'));
      expect(e.message, contains('expected int'));
      expect(e.message, contains('got String'));
    }
  });
}
