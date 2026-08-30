import 'dart:typed_data';

import 'package:localpocket/src/contract/contract.dart';
import 'package:test/test.dart';

void main() {
  group('stable tags', () {
    test('every request tag is unique', () {
      final tags = ContractCodec.requestSamples.map((r) => r.tag).toSet();
      expect(tags.length, ContractCodec.requestSamples.length,
          reason: 'duplicate tags would let one command be decoded as another');
    });

    test('every request declares the result family that answers it', () {
      final resultTags = ContractCodec.resultSamples.map((r) => r.tag).toSet();
      for (final request in ContractCodec.requestSamples) {
        expect(resultTags, contains(request.resultTag),
            reason: '${request.tag} names an unknown result family');
      }
    });

    test('request/result tag pairs are consistent', () {
      // Two requests may share a result family, but one request tag must map
      // to exactly one result tag.
      final map = ContractCodec.requestResultTags;
      expect(map.length, ContractCodec.requestSamples.length);
    });
  });

  group('request round-trips', () {
    for (final sample in ContractCodec.requestSamples) {
      test('round-trips ${sample.tag}', () {
        final wire = ContractCodec.encodeRequest(sample);
        final decoded = ContractCodec.decodeRequest(wire);
        expect(decoded.tag, sample.tag);
        expect(decoded.toJson(), sample.toJson());
      });
    }

    test('decoding an unknown tag fails with a typed wire error', () {
      expect(
        () => ContractCodec.decodeRequest({
          'tag': 'timeTravel',
          'payload': <String, Object?>{},
        }),
        throwsA(isA<WireException>()),
      );
    });

    test('decoding with a missing payload fails', () {
      expect(
        () => ContractCodec.decodeRequest({'tag': 'health'}),
        throwsA(isA<WireException>()),
      );
    });

    test('decoding with malformed typed fields fails', () {
      expect(
        () => ContractCodec.decodeRequest({
          'tag': 'get',
          'payload': encodeWireValue({'store': 3, 'id': 'x'}),
        }),
        throwsA(isA<WireException>()),
      );
      expect(
        () => ContractCodec.decodeRequest({
          'tag': 'txBegin',
          'payload': encodeWireValue({'readOnly': 'yes'}),
        }),
        throwsA(isA<WireException>()),
      );
      expect(
        () => ContractCodec.decodeRequest({
          'tag': 'query',
          'payload': encodeWireValue({
            'store': 's',
            'spec': {
              'where': [
                {'field': 'qty', 'op': 'bogus'},
              ],
            },
          }),
        }),
        throwsA(isA<WireException>()),
      );
    });
  });

  group('result round-trips with correlation', () {
    test('each result decodes against its matching request', () {
      // Build one request per result family and check the pair decodes.
      final byResultTag = {
        for (final r in ContractCodec.requestSamples) r.resultTag: r,
      };
      for (final sample in ContractCodec.resultSamples) {
        final request = byResultTag[sample.tag];
        expect(request, isNotNull,
            reason: 'no request sample produces ${sample.tag}');
        final decoded = ContractCodec.decodeResult(
          request!,
          ContractCodec.encodeResult(sample),
        );
        expect(decoded.tag, sample.tag);
      }
    });

    test('a result for the wrong operation is rejected', () {
      const request = GetRequest(store: 's', id: 'i');
      expect(
        () => ContractCodec.decodeResult(
          request,
          ContractCodec.encodeResult(
              const HealthResult(ok: true, sqliteVersion: '3')),
        ),
        throwsA(isA<WireException>()),
      );
    });

    test('malformed result payloads fail', () {
      const request = CountRequest(store: 's', spec: QuerySpecData());
      expect(
        () => ContractCodec.decodeResult(
          request,
          {
            'tag': 'count',
            'payload': encodeWireValue({'value': 'many'})
          },
        ),
        throwsA(isA<WireException>()),
      );
    });
  });

  group('event round-trips', () {
    for (final sample in ContractCodec.eventSamples) {
      test('round-trips ${sample.tag}', () {
        final decoded =
            ContractCodec.decodeEvent(ContractCodec.encodeEvent(sample));
        expect(decoded.tag, sample.tag);
        expect(decoded.toJson(), sample.toJson());
      });
    }

    test('unknown events fail', () {
      expect(
        () => ContractCodec.decodeEvent({'tag': 'mystery', 'payload': {}}),
        throwsA(isA<WireException>()),
      );
    });
  });

  group('wire values', () {
    test('datetime and bytes round-trip exactly', () {
      final at = DateTime.utc(2026, 8, 30, 12, 34, 56);
      final bytes = Uint8List.fromList(const [1, 2, 3, 255]);
      final decoded = decodeWireValue(encodeWireValue([at, bytes]))! as List;
      expect(decoded[0], at);
      expect(decoded[1], bytes);
    });

    test('nested maps get string keys and deep decoding', () {
      final decoded = decodeWireValue(encodeWireValue({
        'a': {
          'b': 1,
          'c': [true, null]
        },
      }))! as Map;
      expect(decoded['a']['b'], 1);
      expect(decoded['a']['c'], [true, null]);
    });

    test('non-representable values are rejected', () {
      expect(
        () => encodeWireValue(Object()),
        throwsA(isA<WireException>()),
      );
    });
  });

  group('error codec', () {
    test('typed kernel errors keep their identity', () {
      final encoded = encodeError(StorageError('disk full'));
      final decoded = decodeError(encoded);
      expect(decoded,
          isA<StorageError>().having((e) => e.message, 'message', 'disk full'));
    });

    test('validation errors keep their field detail', () {
      final decoded =
          decodeError(encodeError(ValidationException('bad', field: 'qty')));
      expect(decoded, isA<ValidationException>());
      expect((decoded as ValidationException).field, 'qty');
    });

    test('unknown errors degrade to a typed wire error', () {
      final decoded = decodeError(encodeError(const FormatException('nope')));
      expect(decoded, isA<WireException>());
    });
  });
}
