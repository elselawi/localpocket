import 'package:localpocket/src/kernel/database_adapter.dart'
    show DatabaseExecutor;
import 'package:localpocket/src/kernel/execution_context.dart';
import 'package:localpocket/src/kernel/local_pocket.dart' as kernel;
import 'package:test/test.dart';

import '../support/fixtures/tasks_store.dart';

/// The [kernel.KernelContext] is the shared dependency set every kernel
/// service receives. These pins hold the delegation wiring honest: the
/// context never re-implements a service, it only routes.
void main() {
  late kernel.KernelDatabase db;

  setUp(() async {
    db = await kernel.KernelDatabase.open(
      path: ':memory:',
      stores: [Tasks.store.compiledSchema],
    );
  });
  tearDown(() => db.close());

  test('the context exposes the same service instances as the database',
      () async {
    expect(identical(db.kernel.reads, db.reads), isTrue);
    expect(identical(db.kernel.mutations, db.mutations), isTrue);
    expect(identical(db.kernel.conflicts, db.conflicts), isTrue);
    expect(identical(db.kernel.files, db.files), isTrue);
    expect(identical(db.kernel.outbox, db.outbox), isTrue);
    expect(identical(db.kernel.opQueue, db.opQueue), isTrue);
    expect(
        identical(db.kernel.transactions, db.transactionCoordinator), isTrue);
    expect(identical(db.kernel.changeBus, db.changeBus), isTrue);
  });

  test('tables exposes the compiled per-store registry', () {
    expect(db.kernel.tables.keys, contains('tasks'));
  });

  test('traceExecute and traceQuery run raw SQL through the context', () async {
    await db.kernel.traceExecute(
        'INSERT INTO tasks (id, title, archived) VALUES (?, ?, 0)',
        ['ctx-trace-1', 'traced']);
    final rows = await db.kernel
        .traceQuery('SELECT id FROM tasks WHERE id = ?', ['ctx-trace-1']);
    expect(rows.single['id'], 'ctx-trace-1');
  });

  test('guardOutsideTx allows handle-level work outside a transaction', () {
    expect(db.kernel.guardOutsideTx, returnsNormally);
  });

  test('guardOutsideTx rejects work attempted on a tx-bound context', () async {
    await db.transaction((tx) async {
      expect(db.kernel.guardOutsideTx, throwsStateError);
    });
  });

  test('execution contexts carry their kind and executor explicitly', () async {
    final root = ExecutionContext.root(_Executor());
    expect(root.isRoot, isTrue);
    expect(root.isTransaction, isFalse);
    expect(root.readOnly, isFalse);
    expect(identical(root.queryExecutor, root.executor), isTrue);

    final txContext = ExecutionContext.transaction(
      executor: _Executor(),
      readOnly: true,
    );
    expect(txContext.isRoot, isFalse);
    expect(txContext.isTransaction, isTrue);
    expect(txContext.readOnly, isTrue);
  });

  test('a transaction handle exposes a transaction execution context',
      () async {
    await db.transaction((tx) async {
      expect(tx.context.isTransaction, isTrue);
      expect(tx.context.isRoot, isFalse);
    });
  });
}

/// Minimal stand-in executor: the kind pins never run queries through it.
class _Executor implements DatabaseExecutor {
  @override
  dynamic noSuchMethod(Invocation invocation) => super.noSuchMethod(invocation);
}
