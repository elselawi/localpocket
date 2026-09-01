import 'package:localpocket/src/internal/raw_surface.dart';
import 'package:localpocket/src/contract/contract.dart' as contract;
import 'package:localpocket/src/web/facade/web_transactions.dart';
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

/// Decodes the contract request carried by [fake]'s i-th sent envelope.
contract.Request sentRequest(FakeFacadeHost fake, int i) =>
    contract.ContractCodec.decodeRequest(
        (fake.sent[i].$2['request']! as Map).cast<String, Object?>());

/// Answers every contract request with a canned reply chosen by request tag
/// (the same kernel-shaped results the worker would produce).
void answerByTag(FakeFacadeHost fake) {
  fake.onSend = (op, args) async {
    final req = contract.ContractCodec.decodeRequest(
        (args['request']! as Map).cast<String, Object?>());
    final result = switch (req) {
      contract.MutateRequest() => const contract.MutationResult(ids: []),
      contract.GetRequest() => contract.RowResult({'id': 'a', 'title': 'Ship'}),
      contract.CountRequest() => const contract.CountResult(3),
      contract.CountDistinctRequest() => const contract.CountResult(2),
      contract.DistinctRequest() => const contract.DistinctResult(['low']),
      contract.IdsRequest() => const contract.IdsResult(['a', 'b']),
      contract.ExplainRequest() => const contract.ExplainResult('SCAN tasks'),
      contract.AggregateRequest() => const contract.AggregateResult(9.5),
      contract.SearchRequest() => const contract.SearchHitsResult([]),
      contract.QueryRequest() => const contract.QueryRowsResult(
          items: [],
          hasNext: false,
          hasPrev: false,
          nextCursor: null,
          prevCursor: null,
        ),
      _ => const contract.OkResult(),
    };
    return FakeFacadeHost.contractReply(result);
  };
}

void main() {
  final schema = widgetsSchema(fts: FtsSpec(['name']));

  late FakeFacadeHost fake;
  late WebTx tx;

  setUp(() {
    fake = FakeFacadeHost({'widgets': schema});
    tx = WebTx.ins(fake, 'tx42');
    answerByTag(fake);
  });

  group('WebTx.transaction (savepoints)', () {
    test('sends a typed savepoint, runs the action, then releases on success',
        () async {
      var actionRan = false;

      final result = await tx.transaction((t) async {
        actionRan = true;
        expect(identical(t, tx), isTrue);
        return 'done';
      });

      expect(result, 'done');
      expect(actionRan, isTrue);
      expect(fake.sent, hasLength(2));
      final savepoint =
          sentRequest(fake, 0) as contract.TransactionSavepointRequest;
      expect(savepoint.session, 'tx42');
      expect(savepoint.name, 'sp1');
      final release =
          sentRequest(fake, 1) as contract.TransactionReleaseRequest;
      expect(release.session, 'tx42');
      expect(release.name, 'sp1');
    });

    test(
        'a throwing action triggers a best-effort rollback-to and the '
        'original error is rethrown', () async {
      final boom = StateError('action failed');

      await expectLater(
        tx.transaction((t) async => throw boom),
        throwsA(same(boom)),
      );

      expect(fake.sent, hasLength(2));
      final savepoint =
          sentRequest(fake, 0) as contract.TransactionSavepointRequest;
      final rollback =
          sentRequest(fake, 1) as contract.TransactionRollbackToRequest;
      expect(rollback.session, savepoint.session);
      expect(rollback.name, savepoint.name);
    });

    test(
        'a failing rollback is swallowed and the original error still '
        'propagates', () async {
      final boom = StateError('action failed');
      var calls = 0;
      fake.onSend = (op, args) async {
        calls++;
        final req = contract.ContractCodec.decodeRequest(
            (args['request']! as Map).cast<String, Object?>());
        if (req is contract.TransactionRollbackToRequest) {
          throw StateError('rollback failed');
        }
        return FakeFacadeHost.contractReply(const contract.OkResult());
      };

      await expectLater(
        tx.transaction((t) async => throw boom),
        throwsA(same(boom)),
      );
      expect(calls, 2,
          reason: 'the savepoint and the rollback-to were both attempted');
    });

    test('a failing savepoint prevents the action from running', () async {
      fake.onSend = (op, args) async => throw StateError('worker down');
      var actionRan = false;

      await expectLater(
        tx.transaction((t) async {
          actionRan = true;
          return 'unreachable';
        }),
        throwsA(isA<StateError>()),
      );
      expect(actionRan, isFalse);
      expect(fake.sent, hasLength(1),
          reason: 'only the failed savepoint was sent — no release follows');
    });
  });

  group('transaction-bound proxies carry the session in every request', () {
    test('WebTxCollection mutations and reads carry the session id', () async {
      final col = tx.collection('widgets');
      await col.put({'id': 'a', 'name': 'apple'});
      final req = sentRequest(fake, 0) as contract.MutateRequest;
      expect(req.session, 'tx42');
      expect((req.mutation as contract.MutationPut).record,
          {'id': 'a', 'name': 'apple'});

      fake.sent.clear();
      await col.get('a');
      final get = sentRequest(fake, 0) as contract.GetRequest;
      expect(get.session, 'tx42');
      expect(get.id, 'a');
    });

    test('WebTxQueryBuilder reads carry the session id', () async {
      final n = await tx.query('widgets').all().count();
      expect(n, 3);
      final req = sentRequest(fake, 0) as contract.CountRequest;
      expect(req.session, 'tx42');
      expect(req.store, 'widgets');
    });

    test('WebTxSearchQueryBuilder fetch carries the session id', () async {
      final results = await tx.search('widgets', 'engines').limit(5).fetch();
      expect(results, isEmpty);
      final req = sentRequest(fake, 0) as contract.SearchRequest;
      expect(req.session, 'tx42');
      expect(req.spec.term, 'engines');
      expect(req.spec.limit, 5);
    });
  });

  group('WebTx typed store surface', () {
    setUp(() {
      fake = FakeFacadeHost({
        'widgets': schema,
        'tasks': Tasks.store.collectionSchema,
        'ftstasks': _FtsTasks.store.collectionSchema,
      });
      tx = WebTx.ins(fake, 'tx42');
      answerByTag(fake);
    });

    test(
        'store binds the canonical definition and reads through the typed '
        'row', () async {
      final col = tx.store(Tasks.store);
      expect(col.def, same(Tasks.store));

      final row = await col.get('a');
      expect(row, isNotNull);
      expect(row!(Tasks.title), 'Ship');

      // A missing record decodes to null.
      fake.sent.clear();
      fake.onSend = (op, args) async =>
          FakeFacadeHost.contractReply(const contract.RowResult(null));
      expect(await col.get('missing'), isNull);
      final req = sentRequest(fake, 0) as contract.GetRequest;
      expect(req.session, 'tx42');
    });

    test(
        'put/putAll/patch/patchAll/archive/restore/purge ride typed mutate '
        'requests with the session id', () async {
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

      expect(fake.sent, hasLength(7));
      final kinds = <String>[];
      for (var i = 0; i < fake.sent.length; i++) {
        final req = sentRequest(fake, i) as contract.MutateRequest;
        expect(req.session, 'tx42');
        kinds.add(req.mutation.runtimeType.toString());
      }
      expect(kinds, [
        'MutationPut',
        'MutationPutAll',
        'MutationPatch',
        'MutationPatchAll',
        'MutationArchive',
        'MutationRestore',
        'MutationPurge',
      ]);
    });

    test('watchOne is unsupported inside a transaction session', () {
      final col = tx.store(Tasks.store);
      expect(() => col.watchOne('a'), throwsA(isA<UnsupportedError>()));
    });

    test(
        'typed query surface terminals forward to the worker with the '
        'session id', () async {
      final col = tx.store(Tasks.store);

      expect(await col.count(where: [Tasks.done.eq(false)]), 3);
      expect(await col.countDistinct(Tasks.priority), 2);
      expect(await col.distinct(Tasks.priority), [Priority.low],
          reason: 'the typed layer decodes distinct values through the '
              'descriptor, so an enum wire string becomes the enum value');
      expect(await col.ids(limit: 5), ['a', 'b']);
      expect(await col.explain(limit: 5), 'SCAN tasks');
      expect(await col.sum(Tasks.count), 9.5);
      expect(await col.min(Tasks.count), 9.5);
      expect(await col.max(Tasks.count), 9.5);
      expect(await col.avg(Tasks.count), 9.5);

      for (var i = 0; i < fake.sent.length; i++) {
        final req = sentRequest(fake, i);
        expect(_isTerminal(req), isTrue,
            reason: 'typed terminals ride typed read requests');
        expect((req.toJson()['session'] as String?), 'tx42');
      }
    });

    test(
        'typed query() runs the full compose path (select, pageOptions, '
        'fetch)', () async {
      final col = tx.store(Tasks.store);
      final page = await col.query(
        where: [Tasks.done.eq(false)],
        orderBy: [Tasks.title.asc],
        limit: Limits.unbounded,
        includeArchived: true,
        includeHidden: true,
        select: [Tasks.title],
      );
      expect(page.items, isEmpty);
      final req = sentRequest(fake, 0) as contract.QueryRequest;
      expect(req.session, 'tx42');
      // The projection and the scope flags reached the contract spec.
      expect(req.spec.select, contains('title'));
      expect(req.spec.includeArchived, isTrue);
      expect(req.spec.includeHidden, isTrue);
      expect(req.spec.all, isTrue,
          reason: 'the unbounded sentinel expands to the no-limit path');
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
      final cursor = core.cursorForCompiledRow(
          {'title': 'Ship', 'id': 'a'}, {'title': 'Set', 'id': 'b'});

      final page = await col.query(
        orderBy: [Tasks.title.asc],
        limit: 5,
        after: cursor,
      );
      expect(page.items, isEmpty);
      final req = sentRequest(fake, 0) as contract.QueryRequest;
      expect(req.session, 'tx42');
      expect(req.spec.cursor, isNotNull,
          reason: 'the keyset cursor rides the contract spec');

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

      final empty = await col.search('engines',
          limit: Limits.unbounded, includeArchived: true, includeHidden: true);
      expect(empty, isEmpty);
      final req = sentRequest(fake, 0) as contract.SearchRequest;
      expect(req.session, 'tx42');
      expect(req.spec.includeArchived, isTrue);
      expect(req.spec.includeHidden, isTrue);
      // A hit fetches its row through the tx-bound surface.
      fake.sent.clear();
      fake.onSend = (op, args) async {
        final r = contract.ContractCodec.decodeRequest(
            (args['request']! as Map).cast<String, Object?>());
        return FakeFacadeHost.contractReply(switch (r) {
          contract.SearchRequest() => contract.SearchHitsResult([
              contract.SearchHitData(id: 'a', score: 1),
            ]),
          contract.GetRequest() =>
            contract.RowResult({'id': 'a', 'title': 'Ship'}),
          _ => const contract.OkResult(),
        });
      };
      final hits = await col.search('engines', limit: 5);
      expect(hits, hasLength(1));
      expect(hits.single.id, 'a');
      final row = await hits.single.fetch();
      expect(row!(_FtsTasks.title), 'Ship');
      final get = sentRequest(fake, 1) as contract.GetRequest;
      expect(get.session, 'tx42');
    });
  });
}

bool _isTerminal(contract.Request req) =>
    req is contract.CountRequest ||
    req is contract.CountDistinctRequest ||
    req is contract.DistinctRequest ||
    req is contract.IdsRequest ||
    req is contract.ExplainRequest ||
    req is contract.AggregateRequest;
