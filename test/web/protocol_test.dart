import 'package:localpocket/src/web/protocol.dart';
import 'package:test/test.dart';

void main() {
  group('WebRequest', () {
    test('round-trips through wire JSON', () {
      const request = WebRequest(
        version: webProtocolVersion,
        requestId: 7,
        op: WireOp.open,
        args: {'store': 'notes'},
      );
      final decoded = WebRequest.fromJson(request.toJson());
      expect(decoded.version, webProtocolVersion);
      expect(decoded.requestId, 7);
      expect(decoded.op, WireOp.open);
      expect(decoded.args, {'store': 'notes'});
    });

    test('rejects unknown operations with a typed error', () {
      expect(
        () => WebRequest.fromJson(
            {'v': 1, 'i': 1, 'op': 'not-real', 'a': <String, Object?>{}}),
        throwsA(isA<ProtocolEnvelopeException>()),
      );
    });

    test('rejects missing, wrong-type, and null fields', () {
      expect(
        () => WebRequest.fromJson(
            {'i': 1, 'op': WireOp.open, 'a': <String, Object?>{}}),
        throwsA(isA<ProtocolEnvelopeException>()),
      );
      expect(
        () => WebRequest.fromJson(
            {'v': 'one', 'i': 1, 'op': WireOp.open, 'a': <String, Object?>{}}),
        throwsA(isA<ProtocolEnvelopeException>()),
      );
      expect(
        () => WebRequest.fromJson(
            {'v': 1, 'i': null, 'op': WireOp.open, 'a': <String, Object?>{}}),
        throwsA(isA<ProtocolEnvelopeException>()),
      );
      expect(
        () => WebRequest.fromJson(
            {'v': 1, 'i': 1, 'op': WireOp.open, 'a': 'nope'}),
        throwsA(isA<ProtocolEnvelopeException>()),
      );
    });
  });

  group('WebResponse', () {
    test('success round-trip', () {
      const response = WebResponse.success(
        version: webProtocolVersion,
        requestId: 3,
        result: {'ok': true},
      );
      final decoded = WebResponse.fromJson(response.toJson());
      expect(decoded.isError, isFalse);
      expect(decoded.requestId, 3);
      expect(decoded.result, {'ok': true});
    });

    test('error round-trip', () {
      const response = WebResponse.error(
        version: webProtocolVersion,
        requestId: 3,
        error: WebError(code: WireErrorCode.workerClosed, message: 'gone'),
      );
      final decoded = WebResponse.fromJson(response.toJson());
      expect(decoded.isError, isTrue);
      expect(decoded.error!.code, WireErrorCode.workerClosed);
      expect(decoded.error!.message, 'gone');
      expect(decoded.result, isNull);
    });

    test('rejects malformed error payloads', () {
      expect(
        () => WebResponse.fromJson({'v': 1, 'i': 1, 'e': 'nope'}),
        throwsA(isA<ProtocolEnvelopeException>()),
      );
      expect(
        () => WebResponse.fromJson({
          'v': 1,
          'i': 1,
          'e': {'c': 5, 'm': 'x'}
        }),
        throwsA(isA<ProtocolEnvelopeException>()),
      );
    });
  });

  group('decodeError', () {
    test('maps protocol mismatch', () {
      final error = decodeError(const WebError(
        code: WireErrorCode.protocolMismatch,
        message: 'version',
        details: {'expected': 1, 'actual': 2},
      ));
      expect(error, isA<ProtocolMismatchException>());
      final typed = error as ProtocolMismatchException;
      expect(typed.expected, 1);
      expect(typed.actual, 2);
    });

    test('maps worker closed', () {
      final error = decodeError(const WebError(
          code: WireErrorCode.workerClosed, message: 'channel gone'));
      expect(error, isA<DatabaseWorkerClosedException>());
    });

    test('maps localpocket errors with type detail', () {
      final error = decodeError(const WebError(
        code: WireErrorCode.localpocket,
        message: 'boom',
        details: {'type': 'StorageError'},
      ));
      expect(error, isA<RemoteLocalPocketException>());
      expect((error as RemoteLocalPocketException).code, 'StorageError');
    });

    test('unknown codes fall back to a typed remote error', () {
      final error =
          decodeError(const WebError(code: 'mystery', message: 'what'));
      expect(error, isA<RemoteLocalPocketException>());
    });
  });
}
