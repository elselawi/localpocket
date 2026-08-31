import 'package:localpocket/localpocket.dart';
import 'package:localpocket/src/sync/sync_backend.dart';
import 'package:localpocket/src/web/protocol.dart';
import 'package:test/test.dart';

void main() {
  group('Protocol envelope rejection', () {
    test('every declared operation is known and round-trips', () {
      expect(WireOp.allKnown.toSet(), hasLength(WireOp.allKnown.length));
      for (final op in WireOp.allKnown) {
        final request = WebRequest(
          version: webProtocolVersion,
          requestId: 1,
          op: op,
        );
        expect(WebRequest.fromJson(request.toJson()).op, op);
      }
    });

    test('rejects negative request and response IDs', () {
      expect(
        () => WebRequest.fromJson({
          'v': webProtocolVersion,
          'i': -1,
          'op': WireOp.open,
          'a': <String, Object?>{},
        }),
        throwsA(isA<ProtocolEnvelopeException>()),
      );
      expect(
        () => WebResponse.fromJson({
          'v': webProtocolVersion,
          'i': -1,
          'r': null,
        }),
        throwsA(isA<ProtocolEnvelopeException>()),
      );
    });

    test('rejects malformed request shapes without cast errors', () {
      final malformed = <Map<String, Object?>>[
        {'v': webProtocolVersion, 'i': 1, 'op': WireOp.open},
        {
          'v': webProtocolVersion,
          'i': 1,
          'op': WireOp.open,
          'a': null,
        },
        {
          'v': webProtocolVersion,
          'i': 1,
          'op': 'unknown-operation',
          'a': <String, Object?>{},
        },
        {
          'v': '2',
          'i': 1,
          'op': WireOp.open,
          'a': <String, Object?>{},
        },
      ];
      for (final payload in malformed) {
        expect(
          () => WebRequest.fromJson(payload),
          throwsA(isA<ProtocolEnvelopeException>()),
          reason: 'payload should be rejected: $payload',
        );
      }
    });

    test('rejects response with neither or both result fields', () {
      expect(
        () => WebResponse.fromJson({'v': webProtocolVersion, 'i': 1}),
        throwsA(isA<ProtocolEnvelopeException>()),
      );
      expect(
        () => WebResponse.fromJson({
          'v': webProtocolVersion,
          'i': 1,
          'r': {'ok': true},
          'e': {'c': 'x', 'm': 'not both'},
        }),
        throwsA(isA<ProtocolEnvelopeException>()),
      );
    });

    test('response version mismatch is typed', () {
      expect(
        () => WebResponse.fromJson(
          {'v': webProtocolVersion + 1, 'i': 1, 'r': null},
          expectedVersion: webProtocolVersion,
        ),
        throwsA(
          isA<ProtocolMismatchException>()
              .having(
                (e) => e.expected,
                'expected',
                webProtocolVersion,
              )
              .having((e) => e.actual, 'actual', webProtocolVersion + 1),
        ),
      );
    });
  });

  group('Remote error mapping', () {
    test('maps every stable wire error category to a typed exception', () {
      expect(
          decodeError(const WebError(
              code: WireErrorCode.protocolMismatch,
              message: 'mismatch',
              details: {'expected': 2, 'actual': 3})),
          isA<ProtocolMismatchException>());
      expect(
          decodeError(const WebError(
              code: WireErrorCode.workerClosed, message: 'closed')),
          isA<DatabaseWorkerClosedException>());
      expect(
          decodeError(const WebError(
              code: WireErrorCode.protocolEnvelope, message: 'bad envelope')),
          isA<RemoteLocalPocketException>());
      expect(
          decodeError(
              const WebError(code: WireErrorCode.aborted, message: 'aborted')),
          isA<ProtocolEnvelopeException>());
      expect(
          decodeError(const WebError(
              code: WireErrorCode.localpocket,
              message: 'validation',
              details: {'type': 'ValidationException', 'field': 'name'})),
          isA<RemoteLocalPocketException>());
    });

    test('preserves remote error type, message, and details', () {
      final error = decodeError(const WebError(
        code: WireErrorCode.localpocket,
        message: 'invalid record',
        details: {'type': 'ValidationException', 'field': 'id'},
      )) as RemoteLocalPocketException;
      expect(error.code, 'ValidationException');
      expect(error.message, 'invalid record');
      expect(error.details, {'type': 'ValidationException', 'field': 'id'});
    });

    test(
        'stableWireErrorType provides deterministic categories and avoids minification artifacts',
        () {
      expect(stableWireErrorType(ValidationException('bad')),
          'ValidationException');
      expect(stableWireErrorType(StorageError('disk full')), 'StorageError');
      expect(stableWireErrorType(UniqueConstraintException(field: 'name')),
          'UniqueConstraintException');
      expect(stableWireErrorType(NotNullConstraintException(field: 'name')),
          'NotNullConstraintException');
      expect(stableWireErrorType(CheckConstraintException('check')),
          'CheckConstraintException');
      expect(stableWireErrorType(RecordNotFoundException('missing')),
          'RecordNotFoundException');
      expect(stableWireErrorType(DestructiveMigrationRefusedError('refused')),
          'DestructiveMigrationRefusedError');
      expect(stableWireErrorType(ReadOnlyTxError('ro')), 'ReadOnlyTxError');
      expect(stableWireErrorType(TransientNetworkError('net')),
          'TransientNetworkError');
      expect(stableWireErrorType(AuthError('auth')), 'AuthError');
      expect(stableWireErrorType(ProtocolError('proto')), 'ProtocolError');
      expect(stableWireErrorType(StateError('state')), 'StateError');
      expect(stableWireErrorType(ArgumentError('arg')), 'ArgumentError');
      expect(
          stableWireErrorType(const FormatException('fmt')), 'FormatException');
      expect(stableWireErrorType(RangeError('range')), 'RangeError');
      expect(stableWireErrorType(UnsupportedError('unsupported')),
          'UnsupportedError');
      // Unknown exceptions must return the stable fallback 'unknown', not minified runtimeType
      expect(stableWireErrorType(Exception('custom')), 'unknown');
    });
  });

  group('Request identity', () {
    test('duplicate request IDs remain explicit and do not mutate envelopes',
        () {
      const first = WebRequest(
        version: webProtocolVersion,
        requestId: 7,
        op: WireOp.contractRequest,
      );
      const second = WebRequest(
        version: webProtocolVersion,
        requestId: 7,
        op: WireOp.open,
        args: {'watchId': 3},
      );
      expect(first.requestId, second.requestId,
          reason: 'the id is caller-owned; the wire never rewrites it');
      expect(first.op, isNot(second.op));
      expect(WebRequest.fromJson(first.toJson()).op, WireOp.contractRequest);
      expect(WebRequest.fromJson(second.toJson()).op, WireOp.open);
      expect(WebRequest.fromJson(second.toJson()).args, {'watchId': 3});
    });
  });
}
