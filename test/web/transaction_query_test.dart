import 'package:localpocket/src/web/protocol.dart';
import 'package:test/test.dart';

void main() {
  test('transaction reads travel as compiled query plans', () {
    final request = WebRequest(
      version: webProtocolVersion,
      requestId: 1,
      op: WireOp.compiledQuery,
      args: {
        'sessionId': 1,
        'operation': 'count',
        'compilerVersion': 1,
        'store': 'items',
        'schemaVersion': 1,
        'schemaFingerprint': 'a' * 64,
        'argumentCount': 0,
        'sql': 'SELECT COUNT(*) AS c FROM "items"',
        'args': <Object?>[],
      },
    );
    final decoded = WebRequest.fromJson(request.toJson());
    expect(decoded.op, WireOp.compiledQuery);
    expect(decoded.args['sessionId'], 1);
    expect(decoded.args['operation'], 'count');
  });

  test('descriptor-based query ops were removed in protocol v2', () {
    for (final op in [
      'tx_query',
      'tx_count',
      'tx_count_distinct',
      'tx_distinct',
      'tx_ids',
      'tx_explain',
      'tx_aggregate',
      'tx_search',
      'query',
      'count',
      'count_distinct',
      'distinct',
      'ids',
      'explain',
      'aggregate',
      'search',
    ]) {
      expect(WireOp.isKnown(op), isFalse, reason: '$op must be gone in v2');
    }
    expect(WireOp.isKnown(WireOp.compiledQuery), isTrue);
  });
}
