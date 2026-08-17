import 'package:localpocket/src/web/protocol.dart';
import 'package:test/test.dart';

void main() {
  group('Phase 7 Watcher Wire Protocol Envelopes', () {
    test('watchQuery envelope round-trip', () {
      final req = WebRequest(
        version: webProtocolVersion,
        requestId: 20,
        op: WireOp.watchQuery,
        args: {
          'watchId': 100,
          'operation': 'query',
          'compilerVersion': 1,
          'store': 'tasks',
          'schemaVersion': 1,
          'schemaFingerprint': 'b' * 64,
          'argumentCount': 0,
          'sql': 'SELECT * FROM "tasks" LIMIT 50',
          'args': <Object?>[],
        },
      );
      final decoded = WebRequest.fromJson(req.toJson());
      expect(decoded.op, WireOp.watchQuery);
      expect(decoded.args['watchId'], 100);
      expect(decoded.args['store'], 'tasks');
    });

    test('watchOne envelope round-trip', () {
      final req = WebRequest(
        version: webProtocolVersion,
        requestId: 21,
        op: WireOp.watchOne,
        args: {
          'store': 'tasks',
          'id': 'task00000000001',
          'watchId': 101,
        },
      );
      final decoded = WebRequest.fromJson(req.toJson());
      expect(decoded.op, WireOp.watchOne);
      expect(decoded.args['id'], 'task00000000001');
      expect(decoded.args['watchId'], 101);
    });

    test('watchCancel envelope round-trip', () {
      final req = WebRequest(
        version: webProtocolVersion,
        requestId: 22,
        op: WireOp.watchCancel,
        args: {'watchId': 101},
      );
      final decoded = WebRequest.fromJson(req.toJson());
      expect(decoded.op, WireOp.watchCancel);
      expect(decoded.args['watchId'], 101);
    });
  });
}
