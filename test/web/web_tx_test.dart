import 'package:localpocket/src/core/schema.dart';
import 'package:localpocket/src/web/conversions.dart';
import 'package:localpocket/src/web/facade/web_transactions.dart';
import 'package:localpocket/src/web/protocol.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import 'support/fake_facade_host.dart';

void main() {
  late FakeFacadeHost fake;
  late WebTx tx;
  final schema = widgetsSchema(fts: FtsSpec(['name']));

  setUp(() {
    fake = FakeFacadeHost({'widgets': schema});
    tx = WebTx.ins(fake, 42);
  });

  group('WebTx.transaction', () {
    test('sends tx_savepoint, runs the action, then tx_release on success',
        () async {
      fake.responses[WireOp.txSavepoint] = {'savepoint': 'sp_1'};
      var actionRan = false;

      final result = await tx.transaction((t) async {
        actionRan = true;
        expect(identical(t, tx), isTrue);
        return 'done';
      });

      expect(result, 'done');
      expect(actionRan, isTrue);
      final ops = fake.sentOps;
      expect(ops, [WireOp.txSavepoint, WireOp.txRelease]);
      expect(fake.sent[0].$2, {'sessionId': 42});
      expect(fake.sent[1].$2, {'sessionId': 42, 'savepoint': 'sp_1'});
    });

    test(
        'a throwing action triggers a best-effort tx_rollback_to and the '
        'original error is rethrown', () async {
      fake.responses[WireOp.txSavepoint] = {'savepoint': 'sp_2'};
      final boom = StateError('action failed');

      await expectLater(
        tx.transaction((t) async => throw boom),
        throwsA(same(boom)),
      );

      expect(fake.sentOps, [WireOp.txSavepoint, WireOp.txRollbackTo]);
      expect(fake.sent[1].$2, {'sessionId': 42, 'savepoint': 'sp_2'});
    });

    test('a failing rollback is swallowed and the original error still '
        'propagates', () async {
      fake.responses[WireOp.txSavepoint] = {'savepoint': 'sp_3'};
      fake.onSend = (op, args) async {
        if (op == WireOp.txRollbackTo) throw StateError('rollback failed');
        return fake.responses[op];
      };
      final boom = StateError('action failed');

      await expectLater(
        tx.transaction((t) async => throw boom),
        throwsA(same(boom)),
      );
      expect(fake.sentOps, [WireOp.txSavepoint, WireOp.txRollbackTo]);
    });
  });

  group('transaction-bound proxies include sessionId in every envelope', () {
    test('WebTxCollection mutations and reads carry the session id', () async {
      final col = tx.collection('widgets');
      await col.put({'id': 'a', 'name': 'apple'});
      expect(fake.sent.single.$1, WireOp.txMutateBatch);
      expect(fake.sent.single.$2['sessionId'], 42);

      fake.sent.clear();
      fake.responses[WireOp.txGet] = encodeWireValue({'id': 'a'});
      await col.get('a');
      expect(fake.sent.single.$1, WireOp.txGet);
      expect(fake.sent.single.$2['sessionId'], 42);
    });

    test('WebTxQueryBuilder reads carry the session id', () async {
      fake.responses[WireOp.compiledQuery] = {'value': 3};
      final n = await tx.query('widgets').all().count();
      expect(n, 3);
      final (op, args) = fake.sent.single;
      expect(op, WireOp.compiledQuery);
      expect(args['sessionId'], 42);
    });

    test('WebTxSearchQueryBuilder fetch carries the session id', () async {
      fake.responses[WireOp.compiledQuery] = {'results': <Object?>[]};
      final results =
          await tx.search('widgets', 'engines').limit(5).fetch();
      expect(results, isEmpty);
      final (op, args) = fake.sent.single;
      expect(op, WireOp.compiledQuery);
      expect(args['sessionId'], 42);
      expect(args['operation'], 'search');
    });
  });
}
