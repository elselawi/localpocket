import 'package:localpocket/localpocket.dart';
import 'package:localpocket/src/web/conversions.dart';
import 'package:localpocket/src/web/facade/web_transactions.dart';
import 'package:localpocket/src/web/protocol.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import '../typed/support/tasks.dart';
import 'support/fake_facade_host.dart';

/// A typed store definition with FTS enabled — the web transaction search
/// surface requires a schema whose `fts` is set.
final class _FtsTasks extends StoreDef<_FtsTasks> {
  _FtsTasks() : super(name: 'ftstasks');

  static final _FtsTasks store = _FtsTasks();

  late final _title = schema.text('title').req();

  static TextFieldReq<_FtsTasks> get title => store._title;

  @override
  List<FieldDef<_FtsTasks, Object?>> get fields => [_title];

  @override
  FtsSpec get fts => ftsSpec<_FtsTasks>([_title]);
}

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

    test(
        'a failing rollback is swallowed and the original error still '
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
      final results = await tx.search('widgets', 'engines').limit(5).fetch();
      expect(results, isEmpty);
      final (op, args) = fake.sent.single;
      expect(op, WireOp.compiledQuery);
      expect(args['sessionId'], 42);
      expect(args['operation'], 'search');
    });
  });

  group('WebTx.transaction malformed savepoint replies', () {
    late FakeFacadeHost fake;
    late WebTx tx;

    setUp(() {
      fake = FakeFacadeHost({'widgets': schema});
      tx = WebTx.ins(fake, 42);
    });

    test('a non-map savepoint response fails with StateError', () async {
      fake.responses[WireOp.txSavepoint] = <Object?>[];
      await expectLater(
        tx.transaction((t) async => 'unreachable'),
        throwsA(isA<StateError>()
            .having((e) => e.message, 'message', contains('malformed'))),
      );
      expect(fake.sentOps, [WireOp.txSavepoint],
          reason: 'the action never runs on a malformed reply');
    });

    test('a non-string savepoint value fails with StateError', () async {
      fake.responses[WireOp.txSavepoint] = {'savepoint': 42};
      await expectLater(
        tx.transaction((t) async => 'unreachable'),
        throwsA(isA<StateError>()
            .having((e) => e.message, 'message', contains('malformed'))),
      );
    });
  });

  group('WebTx typed store surface', () {
    late FakeFacadeHost fake;
    late WebTx tx;

    setUp(() {
      fake = FakeFacadeHost({
        'widgets': schema,
        'tasks': Tasks.store.collectionSchema,
        'ftstasks': _FtsTasks.store.collectionSchema,
      });
      tx = WebTx.ins(fake, 42);
    });

    test(
        'store binds the canonical definition and reads through the typed '
        'row', () async {
      final col = tx.store(Tasks.store);
      expect(col.def, same(Tasks.store));

      fake.responses[WireOp.txGet] =
          encodeWireValue({'id': 'a', 'title': 'Ship'});
      final row = await col.get('a');
      expect(row, isNotNull);
      expect(row!(Tasks.title), 'Ship');

      // A missing record decodes to null.
      fake.sent.clear();
      fake.responses[WireOp.txGet] = null;
      expect(await col.get('missing'), isNull);
      expect(fake.sent.single.$2['sessionId'], 42);
    });

    test(
        'put/putAll/patch/patchAll/archive/restore/purge route through '
        'txMutateBatch with the session id', () async {
      final col = tx.store(Tasks.store);
      await col.put([Tasks.title.set('x')]);
      await col.putAll([
        [Writes.id('a'), Tasks.title.set('y')],
      ]);
      await col.patch('a', [Tasks.done.set(true)]);
      await col.patchAll({
        'a': [Tasks.done.set(false)],
      });
      await col.archive('a');
      await col.restore('a');
      await col.purge('a');

      expect(fake.sentOps, everyElement(WireOp.txMutateBatch));
      expect(fake.sent.every((s) => s.$2['sessionId'] == 42), isTrue);
      final actions = [
        for (final s in fake.sent)
          ((s.$2['mutations']! as List).first as Map)['action'],
      ];
      expect(actions,
          ['put', 'put', 'patch', 'patch', 'archive', 'restore', 'purge']);
    });

    test('watchOne is unsupported inside a transaction session', () {
      final col = tx.store(Tasks.store);
      expect(() => col.watchOne('a'), throwsA(isA<UnsupportedError>()));
    });

    test(
        'typed query surface terminals forward to the worker with the '
        'session id', () async {
      final col = tx.store(Tasks.store);

      fake.responses[WireOp.compiledQuery] = {'value': 3};
      expect(await col.count(where: [Tasks.done.eq(false)]), 3);

      fake.responses[WireOp.compiledQuery] = {'value': 2};
      expect(await col.countDistinct(Tasks.priority), 2);

      fake.responses[WireOp.compiledQuery] = {
        'values': [encodeWireValue('low')],
      };
      expect(await col.distinct(Tasks.priority), [Priority.low],
          reason: 'the typed layer decodes distinct values through the '
              'descriptor, so an enum wire string becomes the enum value');

      fake.responses[WireOp.compiledQuery] = {
        'ids': ['a', 'b']
      };
      expect(await col.ids(limit: 5), ['a', 'b']);

      fake.responses[WireOp.compiledQuery] = {'plan': 'SCAN tasks'};
      expect(await col.explain(limit: 5), 'SCAN tasks');

      fake.responses[WireOp.compiledQuery] = {'value': 9.5};
      expect(await col.sum(Tasks.count), 9.5);
      expect(await col.min(Tasks.count), 9.5);
      expect(await col.max(Tasks.count), 9.5);
      expect(await col.avg(Tasks.count), 9.5);

      expect(fake.sent.every((s) => s.$2['sessionId'] == 42), isTrue);
    });

    test(
        'typed query() runs the full compose path (select, pageOptions, '
        'fetch)', () async {
      final col = tx.store(Tasks.store);
      fake.responses[WireOp.compiledQuery] = {
        'items': <Object?>[],
        'hasMore': false,
      };
      final page = await col.query(
        where: [Tasks.done.eq(false)],
        orderBy: [Tasks.title.asc],
        limit: Limits.unbounded,
        includeArchived: true,
        includeHidden: true,
        select: [Tasks.title],
      );
      expect(page.items, isEmpty);
      final (op, args) = fake.sent.last;
      expect(op, WireOp.compiledQuery);
      expect(args['sessionId'], 42);
      // The select projection and the scope flags reached the compiled plan.
      expect(args['projection'], contains('title'));
      expect(args['sql'], isNot(contains('archived = 0')));
      expect(args['sql'], isNot(contains('hidden = 0')));
    });

    test('typed query surface keyset, debugCompile, and watch', () async {
      final col = tx.store(Tasks.store);

      final (sql, args) =
          col.debugCompile(where: [Tasks.done.eq(false)], limit: 5);
      expect(sql, contains('"done" = ?'));
      expect(args, [false]);

      // Build a real cursor with the same query shape the typed terminal
      // composes (orderBy title asc, limit 5).
      final core = QueryBuilder.compileOnly(Tasks.store.collectionSchema)
          .orderBy('title')
          .limit(5);
      final cursor = core.cursorForCompiledRow({'title': 'Ship', 'id': 'a'});

      fake.responses[WireOp.compiledQuery] = {
        'items': <Object?>[],
        'hasMore': false,
      };
      final page =
          await col.queryAfter(cursor, orderBy: [Tasks.title.asc], limit: 5);
      expect(page.items, isEmpty);
      expect(fake.sent.last.$2['sessionId'], 42);

      // Watch is unavailable inside a web transaction session.
      expect(
        () => col.watch(limit: 5),
        throwsA(isA<UnsupportedError>()),
      );
    });

    test(
        'typed search surface forwards flags and fetches hits through the '
        'transaction', () async {
      final col = tx.store(_FtsTasks.store);

      fake.responses[WireOp.compiledQuery] = {'results': <Object?>[]};
      final empty = await col.search('engines',
          limit: Limits.unbounded, includeArchived: true, includeHidden: true);
      expect(empty, isEmpty);
      final (op, args) = fake.sent.single;
      expect(op, WireOp.compiledQuery);
      expect(args['sessionId'], 42);
      expect(args['operation'], 'search');

      // A hit fetches its row through the tx-bound surface.
      fake.sent.clear();
      fake.responses[WireOp.compiledQuery] = {
        'results': [
          {'id': 'a', 'score': 1},
        ],
      };
      fake.responses[WireOp.txGet] =
          encodeWireValue({'id': 'a', 'title': 'Ship'});
      final hits = await col.search('engines', limit: 5);
      expect(hits, hasLength(1));
      expect(hits.single.id, 'a');
      final row = await hits.single.fetch();
      expect(row!(_FtsTasks.title), 'Ship');
    });
  });
}
