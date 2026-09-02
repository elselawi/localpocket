import 'package:localpocket/src/kernel/errors.dart';
import 'package:localpocket/src/kernel/sync/sync_backend.dart';
import 'package:localpocket/src/platform/web/page/protocol.dart';
import 'package:test/test.dart';

/// The wire error vocabulary must be minification-stable: every category the
/// page can receive maps to a fixed string, and every exception the page can
/// reconstruct carries its diagnostic surface. These pins lock both halves.
void main() {
  group('stableWireErrorType', () {
    test('every typed kernel error keeps its category name', () {
      final cases = <Object, String>{
        ValidationException('x'): 'ValidationException',
        UniqueConstraintException(field: 'q'): 'UniqueConstraintException',
        NotNullConstraintException(field: 't'): 'NotNullConstraintException',
        CheckConstraintException('x'): 'CheckConstraintException',
        PrimaryKeyConstraintException('x'): 'PrimaryKeyConstraintException',
        ForeignKeyConstraintException('x'): 'ForeignKeyConstraintException',
        StorageError('x'): 'StorageError',
        RecordNotFoundException('x'): 'RecordNotFoundException',
        SchemaTooNewError('x'): 'SchemaTooNewError',
        FtsUnavailableError('x'): 'FtsUnavailableError',
        // Checked before its supertype on purpose: it is a subtype of
        // SchemaRegistrationError.
        UnsupportedSchemaFeatureError('x'): 'UnsupportedSchemaFeatureError',
        SchemaRegistrationError('x'): 'SchemaRegistrationError',
        StaleCursorError('x'): 'StaleCursorError',
        MissingLimitError('x'): 'MissingLimitError',
        ConflictBlockedError('x'): 'ConflictBlockedError',
        DestructiveMigrationRefusedError('x'):
            'DestructiveMigrationRefusedError',
        ReadOnlyTxError('x'): 'ReadOnlyTxError',
      };
      cases.forEach((error, expected) {
        expect(stableWireErrorType(error), expected,
            reason: '${error.runtimeType} must keep its wire category');
      });
    });

    test('kernel errors without a dedicated category degrade to the family',
        () {
      expect(stableWireErrorType(TypedStoreMismatchError('x')),
          'LocalPocketError');
      expect(
          stableWireErrorType(FieldNotSelectedError('x')), 'LocalPocketError');
    });

    test('every sync error keeps its category name', () {
      final cases = <Object, String>{
        TransientNetworkError('x'): 'TransientNetworkError',
        ServerBusyError(null, 'x'): 'ServerBusyError',
        ServerError('x'): 'ServerError',
        AuthError('x'): 'AuthError',
        ForbiddenError('x'): 'ForbiddenError',
        NotFoundError('x'): 'NotFoundError',
        PayloadError('x'): 'PayloadError',
        ProtocolError('x'): 'ProtocolError',
        DuplicateIdError('x'): 'DuplicateIdError',
        BatchFailedError('x'): 'BatchFailedError',
      };
      cases.forEach((error, expected) {
        expect(stableWireErrorType(error), expected,
            reason: '${error.runtimeType} must keep its wire category');
      });
    });

    test('standard exceptions and the unknown fallback', () {
      expect(stableWireErrorType(ProtocolEnvelopeException('x')),
          'ProtocolEnvelopeException');
      expect(stableWireErrorType(DatabaseWorkerClosedException('x')),
          'DatabaseWorkerClosedException');
      expect(
          stableWireErrorType(
              ProtocolMismatchException(expected: 1, actual: 2)),
          'ProtocolMismatchException');
      expect(stableWireErrorType(RangeError('x')), 'RangeError');
      expect(stableWireErrorType(StateError('x')), 'StateError');
      expect(stableWireErrorType(ArgumentError('x')), 'ArgumentError');
      expect(stableWireErrorType(FormatException('x')), 'FormatException');
      expect(stableWireErrorType(UnsupportedError('x')), 'UnsupportedError');
      expect(stableWireErrorType(Object()), WireErrorCode.unknown);
    });
  });

  group('WebResponse.fromJson validation', () {
    Map<String, Object?> ok(int v, int i) => {
          'v': v,
          'i': i,
          'r': {'ok': true}
        };

    test('a valid success envelope round-trips', () {
      final response = WebResponse.fromJson(ok(3, 7));
      expect(response.version, 3);
      expect(response.requestId, 7);
      expect(response.isError, isFalse);
    });

    test('"v" must be an int', () {
      expect(() => WebResponse.fromJson({'v': '3', 'i': 1, 'r': 1}),
          throwsA(isA<ProtocolEnvelopeException>()));
    });

    test('a version mismatch is a ProtocolMismatchException', () {
      expect(
        () => WebResponse.fromJson(ok(2, 1), expectedVersion: 3),
        throwsA(isA<ProtocolMismatchException>()
            .having((e) => e.expected, 'expected', 3)
            .having((e) => e.actual, 'actual', 2)),
      );
    });

    test('"i" must be a non-negative int', () {
      expect(() => WebResponse.fromJson({'v': 1, 'i': -1, 'r': 1}),
          throwsA(isA<ProtocolEnvelopeException>()));
      expect(() => WebResponse.fromJson({'v': 1, 'i': 'x', 'r': 1}),
          throwsA(isA<ProtocolEnvelopeException>()));
    });

    test('exactly one of "r" or "e" must be present', () {
      expect(() => WebResponse.fromJson({'v': 1, 'i': 1}),
          throwsA(isA<ProtocolEnvelopeException>()));
      expect(
          () => WebResponse.fromJson({
                'v': 1,
                'i': 1,
                'r': 1,
                'e': {'c': 'x', 'm': 'y'},
              }),
          throwsA(isA<ProtocolEnvelopeException>()));
    });

    test('an error envelope reconstructs the WebError', () {
      final response = WebResponse.fromJson({
        'v': 1,
        'i': 2,
        'e': {
          'c': 'localpocket',
          'm': 'boom',
          'd': {'type': 'StorageError'},
        },
      });
      expect(response.isError, isTrue);
      expect(response.error!.code, 'localpocket');
      expect(response.error!.details, {'type': 'StorageError'});
    });

    test('"e" must be a map', () {
      expect(() => WebResponse.fromJson({'v': 1, 'i': 1, 'e': 'boom'}),
          throwsA(isA<ProtocolEnvelopeException>()));
    });
  });

  group('WebError.fromJson validation', () {
    test('"c" and "m" must be strings', () {
      expect(() => WebError.fromJson({'c': 1, 'm': 'x'}),
          throwsA(isA<ProtocolEnvelopeException>()));
      expect(() => WebError.fromJson({'c': 'x', 'm': 2}),
          throwsA(isA<ProtocolEnvelopeException>()));
    });

    test('a non-map "d" is rejected; a map one is stringified per key', () {
      expect(() => WebError.fromJson({'c': 'x', 'm': 'y', 'd': 'nope'}),
          throwsA(isA<ProtocolEnvelopeException>()));
      final error = WebError.fromJson({
        'c': 'x',
        'm': 'y',
        'd': {1: 'a', 'b': 2},
      });
      expect(error.details, {'1': 'a', 'b': 2});
    });

    test('toJson/fromJson round-trips details', () {
      const error = WebError(
          code: 'localpocket', message: 'm', details: {'type': 'StorageError'});
      final back = WebError.fromJson(error.toJson());
      expect(back.code, error.code);
      expect(back.message, error.message);
      expect(back.details, error.details);
    });
  });

  group('page exception diagnostics', () {
    test('toString carries the diagnostic payload', () {
      expect(DatabaseWorkerClosedException('gone').toString(),
          'DatabaseWorkerClosedException: gone');
      expect(ProtocolMismatchException(expected: 1, actual: 2).toString(),
          'ProtocolMismatchException: expected version 1, got 2');
      expect(ProtocolEnvelopeException('bad').toString(),
          'ProtocolEnvelopeException: bad');
      expect(
          DatabaseWorkerTimeoutException(
                  requestId: 9, op: 'get', timeout: const Duration(seconds: 2))
              .toString(),
          'DatabaseWorkerTimeoutException: "get" (request 9) did not '
          'complete within 2000 ms.');
      expect(
          RemoteLocalPocketException(code: 'StorageError', message: 'full')
              .toString(),
          'RemoteLocalPocketException[StorageError]: full');
    });
  });

  group('decodeError', () {
    test('a protocol mismatch reconstructs from details or defaults', () {
      final decoded = decodeError(const WebError(
        code: WireErrorCode.protocolMismatch,
        message: 'm',
        details: {'expected': 2, 'actual': 1},
      ));
      expect(
          decoded,
          isA<ProtocolMismatchException>()
              .having((e) => e.expected, 'expected', 2)
              .having((e) => e.actual, 'actual', 1));

      final fallback = decodeError(
          const WebError(code: WireErrorCode.protocolMismatch, message: 'm'));
      expect(
          fallback,
          isA<ProtocolMismatchException>()
              .having((e) => e.expected, 'expected', webProtocolVersion)
              .having((e) => e.actual, 'actual', -1));
    });

    test('worker-closed and aborted map to their exceptions', () {
      expect(
          decodeError(const WebError(
              code: WireErrorCode.workerClosed, message: 'gone')),
          isA<DatabaseWorkerClosedException>());
      expect(
          decodeError(
              const WebError(code: WireErrorCode.aborted, message: 'x')),
          isA<ProtocolEnvelopeException>());
    });

    test('localpocket errors keep their remote type code', () {
      final decoded = decodeError(const WebError(
        code: WireErrorCode.localpocket,
        message: 'full',
        details: {'type': 'StorageError'},
      ));
      expect(
          decoded,
          isA<RemoteLocalPocketException>()
              .having((e) => e.code, 'code', 'StorageError')
              .having((e) => e.message, 'message', 'full'));
    });

    test('an unknown category still yields a typed remote error', () {
      final decoded = decodeError(
          const WebError(code: WireErrorCode.unknown, message: 'm'));
      expect(
          decoded,
          isA<RemoteLocalPocketException>()
              .having((e) => e.code, 'code', WireErrorCode.unknown));
    });
  });

  group('WireOp and error codes', () {
    test('isKnown accepts exactly the three wire operations', () {
      for (final op in WireOp.allKnown) {
        expect(WireOp.isKnown(op), isTrue, reason: '$op must be known');
      }
      expect(WireOp.isKnown('bogus_op'), isFalse);
    });

    test('the stable error codes are distinct', () {
      final codes = [
        WireErrorCode.protocolMismatch,
        WireErrorCode.workerClosed,
        WireErrorCode.protocolEnvelope,
        WireErrorCode.aborted,
        WireErrorCode.localpocket,
        WireErrorCode.unknown,
      ];
      expect(codes.toSet(), hasLength(codes.length));
    });
  });
}
