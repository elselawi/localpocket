import 'package:localpocket/src/web/protocol.dart';
import 'package:test/test.dart';

void main() {
  group('Sync & auth wire protocol envelopes', () {
    test('syncStart request round-trip', () {
      const req = WebRequest(
        version: webProtocolVersion,
        requestId: 10,
        op: WireOp.syncStart,
        args: {
          'baseUrl': 'http://127.0.0.1:8090',
          'scopeId': 'user_123',
          'token': 'jwt_token_sample',
        },
      );
      final decoded = WebRequest.fromJson(req.toJson());
      expect(decoded.op, WireOp.syncStart);
      expect(decoded.args['baseUrl'], 'http://127.0.0.1:8090');
      expect(decoded.args['scopeId'], 'user_123');
      expect(decoded.args['token'], 'jwt_token_sample');
    });

    test('syncUpdateAuth request round-trip', () {
      const req = WebRequest(
        version: webProtocolVersion,
        requestId: 11,
        op: WireOp.syncUpdateAuth,
        args: {'token': 'new_refreshed_jwt'},
      );
      final decoded = WebRequest.fromJson(req.toJson());
      expect(decoded.op, WireOp.syncUpdateAuth);
      expect(decoded.args['token'], 'new_refreshed_jwt');
    });

    test('syncSetConnectivity request round-trip', () {
      const req = WebRequest(
        version: webProtocolVersion,
        requestId: 12,
        op: WireOp.syncSetConnectivity,
        args: {'online': false},
      );
      final decoded = WebRequest.fromJson(req.toJson());
      expect(decoded.op, WireOp.syncSetConnectivity);
      expect(decoded.args['online'], isFalse);
    });

    test('syncNow, syncPause, syncResume, syncStop requests', () {
      for (final op in [
        WireOp.syncNow,
        WireOp.syncPause,
        WireOp.syncResume,
        WireOp.syncStop,
      ]) {
        final req = WebRequest(
          version: webProtocolVersion,
          requestId: 13,
          op: op,
        );
        final decoded = WebRequest.fromJson(req.toJson());
        expect(decoded.op, op);
      }
    });

    test('syncStatus worker event envelope round-trip', () {
      final event = <String, Object?>{
        'v': webProtocolVersion,
        'op': WireOp.syncStatus,
        'status': {
          'state': 'idle',
          'pending': 2,
          'conflicts': 1,
          'hidden': 0,
        },
      };
      expect(event['op'], WireOp.syncStatus);
      expect((event['status']! as Map)['pending'], 2);
    });

    test('authRequired error code mapping', () {
      const err = WebError(
        code: WireErrorCode.localpocket,
        message: 'Auth expired',
        details: {'type': 'AuthError'},
      );
      final decoded = decodeError(err);
      expect(decoded, isA<RemoteLocalPocketException>());
      expect((decoded as RemoteLocalPocketException).code, 'AuthError');
    });
  });
}
