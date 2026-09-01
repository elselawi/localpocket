import 'package:localpocket/src/platform/web/page/protocol.dart';
import 'package:localpocket/src/platform/web/worker/wire_args.dart';
import 'package:test/test.dart';

void main() {
  group('WireArgs validated argument access', () {
    test('requireString returns the typed value on well-formed input', () {
      const w = WireArgs({'store': 'tasks', 'id': 'task1'});
      expect(w.requireString('store'), 'tasks');
      expect(w.requireString('id'), 'task1');
    });

    test('requireString throws ProtocolEnvelopeException for a non-string', () {
      const w = WireArgs({'store': 123});
      expect(
        () => w.requireString('store'),
        throwsA(isA<ProtocolEnvelopeException>().having(
          (e) => e.message,
          'message',
          contains('store'),
        )),
      );
    });

    test('requireInt returns the typed value and rejects a non-int', () {
      const w = WireArgs({'watchId': 7});
      expect(w.requireInt('watchId'), 7);
      expect(
        () => w.requireInt('watchId', op: 'watch_query'),
        returnsNormally,
      );
      const bad = WireArgs({'watchId': 'seven'});
      expect(
        () => bad.requireInt('watchId'),
        throwsA(isA<ProtocolEnvelopeException>()),
        reason: 'a malformed int must be a typed protocol error, not a cast',
      );
    });

    test('requireString rejects a missing required argument', () {
      const w = WireArgs({});
      expect(
        () => w.requireString('store'),
        throwsA(isA<ProtocolEnvelopeException>()),
      );
    });

    test('optional returns null when absent and validates when present', () {
      const w = WireArgs({'field': 'imgs'});
      expect(w.optionalString('field'), 'imgs');
      expect(w.optionalString('missing'), isNull);
      const bad = WireArgs({'field': 5});
      expect(
        () => w.optionalString('field'),
        returnsNormally,
      );
      expect(
        () => bad.optionalString('field'),
        throwsA(isA<ProtocolEnvelopeException>()),
      );
    });

    test('requireList returns the typed value and rejects a non-list', () {
      const w = WireArgs({'mutations': <Object?>['a', 'b']});
      expect(w.requireList('mutations'), hasLength(2));
      const bad = WireArgs({'mutations': 'not-a-list'});
      expect(
        () => bad.requireList('mutations'),
        throwsA(isA<ProtocolEnvelopeException>()),
      );
    });

    test('requireBool validates boolean arguments', () {
      const w = WireArgs({'online': true});
      expect(w.requireBool('online'), isTrue);
      const bad = WireArgs({'online': 1});
      expect(
        () => bad.requireBool('online'),
        throwsA(isA<ProtocolEnvelopeException>()),
      );
    });

    test('always throws ProtocolEnvelopeException, never TypeError', () {
      const malformed = [
        WireArgs({'watchId': 'x'}),
        WireArgs({'store': 1, 'id': 2}),
        WireArgs({'mutations': null}),
      ];
      for (final w in malformed) {
        expect(
          () => w.requireInt('watchId'),
          throwsA(isA<ProtocolEnvelopeException>()),
        );
        expect(
          () => w.requireString('store'),
          throwsA(isA<ProtocolEnvelopeException>()),
        );
        expect(
          () => w.requireList('mutations'),
          throwsA(isA<ProtocolEnvelopeException>()),
        );
      }
    });
  });
}