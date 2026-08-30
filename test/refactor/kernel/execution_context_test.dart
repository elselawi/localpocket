import 'package:localpocket/localpocket.dart';
import 'package:localpocket/src/core/execution_context.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';

/// Structural pins:
///
/// 1. The outer-executor fallback is GONE for transaction reads: query and
///    search builders created from a `Tx` carry the transaction's executor
///    (`debugExecutor != null`); builders created from the root context carry
///    null and use the outer database. A transaction context can never select
///    the outer executor by accident.
/// 2. `KernelContext` is the shared dependency set: native (and, by the same
///    construction, the web worker) services receive the context, not the
///    concrete facade.
/// 3. `MutationService` is a working mutation owner: a put through the service
///    is behaviorally identical to a put through the collection.
void main() {
  group('ExecutionContext', () {
    test('root context has no executor and is not read-only', () {
      const root = ExecutionContext.root();
      expect(root.isRoot, isTrue);
      expect(root.isTransaction, isFalse);
      expect(root.executor, isNull);
      expect(root.readOnly, isFalse);
    });

    test('transaction context carries its executor and read-only flag', () {
      final ctx =
          ExecutionContext.transaction(executor: _FakeExec(), readOnly: true);
      expect(ctx.isTransaction, isTrue);
      expect(ctx.executor, isNotNull);
      expect(ctx.readOnly, isTrue);
    });
  });

  group('tx-built query/search use the transaction executor (§4.2 fixed)', () {
    late LocalPocket db;

    setUp(() async => db = await openPocket());
    tearDown(() => db.close());

    test('query builder from Tx carries the tx executor', () async {
      QueryBuilder? fromTx;
      QueryBuilder? fromRoot;
      await db.transaction((tx) async {
        fromTx = tx.collection('widgets').query();
        return null;
      });
      fromRoot = db.collection('widgets').query();

      expect(fromTx!.debugExecutor, isNotNull,
          reason: 'transaction query must be bound to the tx executor');
      expect(fromRoot.debugExecutor, isNull,
          reason: 'root-context query uses the outer database');
    });

    test('search builder from Tx carries the tx executor', () async {
      final schema = widgetsSchema(fts: const FtsSpec(['name']));
      final ftsDb = await openPocket(stores: [schema]);
      addTearDown(ftsDb.close);

      SearchBuilder? fromTx;
      SearchBuilder? fromRoot;
      await ftsDb.transaction((tx) async {
        fromTx = tx.collection('widgets').search('apple');
        return null;
      });
      fromRoot = ftsDb.collection('widgets').search('apple');

      expect(fromTx!.debugExecutor, isNotNull);
      expect(fromRoot.debugExecutor, isNull);
    });

    test('tx query executor survives builder chaining', () async {
      await db.transaction((tx) async {
        final builder = tx
            .collection('widgets')
            .query()
            .where('name', eq: 'x')
            .orderBy('qty')
            .limit(5);
        expect(builder.debugExecutor, isNotNull,
            reason: 'copyWith must preserve the execution context');
        return null;
      });
    });
  });

  group('KernelContext and services', () {
    late LocalPocket db;

    setUp(() async => db = await openPocket());
    tearDown(() => db.close());

    test('kernel context exposes the shared dependencies', () {
      final kernel = db.kernel;
      expect(identical(kernel.database, db), isTrue);
      expect(identical(kernel.db, db.db), isTrue);
      expect(identical(kernel.changeBus, db.changeBus), isTrue);
      expect(identical(kernel.outbox, db.outbox), isTrue);
      expect(identical(kernel.opQueue, db.opQueue), isTrue);
      expect(kernel.tables.keys, contains('widgets'));
      expect(kernel.capabilities, same(db.capabilities));
    });

    test('MutationService.put is behaviorally identical to Collection.put',
        () async {
      final col = db.collection('widgets');
      final id = generateRecordId();

      await db.mutations.put(col, record(name: 'via-service', qty: 4, id: id));

      final row = await col.get(id);
      expect(row?['name'], 'via-service');
      expect(row?['qty'], 4);
      // The full mutation pipeline ran: outbox intent + sync row exist.
      final outboxRows = await db.db.rawQuery(
          'SELECT kind FROM lp_outbox WHERE store = ? AND record_id = ?',
          ['widgets', id]);
      expect(outboxRows, hasLength(1));
      final syncRow = await db.db.rawQuery(
          'SELECT sync_state FROM lp_sync_row WHERE store = ? AND record_id = ?',
          ['widgets', id]);
      expect(syncRow.single['sync_state'], SyncState.dirty.name);
    });

    test('ReadService executes a compiled plan identically to the worker',
        () async {
      final col = db.collection('widgets');
      final id = generateRecordId();
      await col.put(record(name: 'plan', qty: 2, id: id));

      final plan =
          col.query().where('name', eq: 'plan').limit(10).compilePlan();
      final result = await db.reads.executeCompiled(
        plan,
        run: (sql, params) => db.db.rawQuery(sql, params),
      );
      expect(result['items'], hasLength(1));
      expect((result['items']! as List).first['id'], id);
    });
  });
}

class _FakeExec implements DatabaseExecutor {
  @override
  dynamic noSuchMethod(Invocation invocation) => throw UnimplementedError();
}
