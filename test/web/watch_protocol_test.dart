import 'package:localpocket/src/web/protocol.dart';
import 'package:test/test.dart';

void main() {
  group('Watcher wire protocol envelopes', () {
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
