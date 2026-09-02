import 'package:localpocket/src/kernel/local_pocket.dart' as kernel
    show KernelDatabase;
import 'package:localpocket/src/kernel/query/query_builder/predicate_tree.dart';
import 'package:localpocket/src/kernel/query/query_builder/query_builder.dart';
import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import 'tasks_store.dart';

/// Seeds the same logical dataset through the facade and through the raw
/// kernel, so parity checks compare identical stores.
Future<(LocalPocket, kernel.KernelDatabase)> _seedPair() async {
  final facade = await LocalPocket.open(
      LocalPocketOptions(path: ':memory:', stores: [Tasks.store]));
  final raw = await kernel.KernelDatabase.open(
    path: ':memory:',
    stores: [Tasks.store.compiledSchema],
  );
  final tasks = facade.store(Tasks.store);
  final col = raw.collection('tasks');
  for (var i = 0; i < 5; i++) {
    final id = rid('t', i);
    await tasks.put([
      Writes.id(id),
      Tasks.title.set('task $i'),
      Tasks.done.set(i.isEven),
      Tasks.priority.set(i),
      Tasks.tags.set(<String>['t$i']),
    ]);
    await col.put({
      'id': id,
      'title': 'task $i',
      'done': i.isEven,
      'priority': i,
      'tags': <String>['t$i'],
    });
  }
  return (facade, raw);
}

/// The raw builder equivalent of the facade spec used by the parity test:
/// `done = false OR (priority >= 2 AND title != 'task 4')`, priority desc.
QueryBuilder _parityBuilder(kernel.KernelDatabase raw) => raw
    .collection('tasks')
    .query()
    .wherePredicate(AnyPredicate([
      LeafPredicate('done', 'eq', <Object?>[false]),
      AllPredicate([
        LeafPredicate('priority', 'gte', <Object?>[2]),
        NotPredicate(LeafPredicate('title', 'eq', <Object?>['task 4'])),
      ]),
    ]))
    .orderBy('priority', desc: true)
    .limit(2);

QuerySpec<Tasks> _paritySpec() => QuerySpec<Tasks>(
      where: [
        Tasks.done.eq(false) |
            (Tasks.priority.gte(2) & ~Tasks.title.eq('task 4')),
      ],
      orderBy: [Tasks.priority.desc],
      limit: 2,
    );

void main() {
  group('QuerySpec lowering', () {
    test('facade pages match raw builder pages and cursors', () async {
      final (facade, raw) = await _seedPair();
      addTearDown(facade.close);
      addTearDown(raw.close);
      final tasks = facade.store(Tasks.store);

      var facadePage = await tasks.query(_paritySpec());
      var rawPage = await _parityBuilder(raw).fetch();
      expect(facadePage.items.map((r) => r.id).toList(),
          rawPage.items.map((m) => m['id']).toList(),
          reason: 'same logical query → same rows in the same order');
      expect(facadePage.hasNext, rawPage.hasNext);
      expect(facadePage.hasPrev, rawPage.hasPrev);

      // Continuation parity: next() consumes the kernel-minted cursor and
      // the raw keyset walk lands on identical windows and facts.
      var rawCursor = rawPage.nextCursor;
      while (facadePage.nextCursor != null && rawCursor != null) {
        facadePage = (await facadePage.next())!;
        rawPage = await _parityBuilder(raw).keysetAfter(rawCursor);
        expect(facadePage.items.map((r) => r.id).toList(),
            rawPage.items.map((m) => m['id']).toList());
        expect(facadePage.hasNext, rawPage.hasNext);
        expect(facadePage.hasPrev, rawPage.hasPrev);
        rawCursor = rawPage.nextCursor;
      }
      expect(facadePage.nextCursor, isNull, reason: 'the walk ended together');
    });

    test('backward continuation walks the pages in reverse', () async {
      final (facade, _) = await _seedPair();
      addTearDown(facade.close);
      final tasks = facade.store(Tasks.store);

      final first = await tasks.query(QuerySpec<Tasks>(
        orderBy: [Tasks.priority.asc],
        limit: 2,
      ));
      expect(first.hasPrev, isFalse);
      final second = await first.next();
      expect(second, isNotNull);
      expect(second!.hasPrev, isTrue);

      final back = await second.prev();
      expect(back, isNotNull);
      expect(back!.items.map((r) => r.id), first.items.map((r) => r.id),
          reason: 'prev() returns the earlier window');

      expect(await back.prev(), isNull, reason: 'nothing precedes the first');
    });

    test('missing limit is a typed error, never a silent default', () async {
      final (facade, _) = await _seedPair();
      addTearDown(facade.close);
      final tasks = facade.store(Tasks.store);

      await expectLater(
        tasks.query(const QuerySpec<Tasks>()),
        throwsA(isA<MissingLimitError>()),
      );
      await expectLater(
        tasks.ids(const QuerySpec<Tasks>()),
        throwsA(isA<MissingLimitError>()),
      );
      await expectLater(
        tasks.explain(const QuerySpec<Tasks>()),
        throwsA(isA<MissingLimitError>()),
      );
      await expectLater(
        tasks.search(const SearchSpec<Tasks>(term: 'task')),
        throwsA(isA<MissingLimitError>()),
      );
    });

    test('unbounded runs without a page size', () async {
      final (facade, _) = await _seedPair();
      addTearDown(facade.close);
      final tasks = facade.store(Tasks.store);

      expect(await tasks.ids(const QuerySpec<Tasks>(limit: Limits.unbounded)),
          hasLength(5));
      expect(
          await tasks.count(QuerySpec<Tasks>(
              where: [Tasks.done.eq(true)], limit: Limits.unbounded)),
          3,
          reason: 'seeds 0, 2, 4 are done');
      expect(await tasks.sum(Tasks.priority, where: [Tasks.done.eq(true)]), 6);
      expect(await tasks.min(Tasks.priority, where: [Tasks.done.eq(true)]), 0);
      expect(await tasks.max(Tasks.priority, where: [Tasks.done.eq(true)]), 4);
      expect(await tasks.avg(Tasks.priority, where: [Tasks.done.eq(true)]), 2);
      expect((await tasks.distinct(Tasks.priority, limit: 100)).toSet(),
          hasLength(5));
      expect(
          await tasks
              .countDistinct(Tasks.priority, where: [Tasks.done.eq(true)]),
          3);
      expect(
          await tasks.explain(
              QuerySpec<Tasks>(limit: 5, orderBy: [Tasks.priority.asc])),
          isNotEmpty);
    });

    test('projection matches the raw builder column set', () async {
      final (facade, raw) = await _seedPair();
      addTearDown(facade.close);
      addTearDown(raw.close);
      final tasks = facade.store(Tasks.store);

      final page = await tasks.query(QuerySpec<Tasks>(
        where: [Tasks.done.eq(true)],
        orderBy: [Tasks.priority.asc],
        select: [Tasks.title, Tasks.priority],
        limit: 5,
      ));
      final rawPage = await raw
          .collection('tasks')
          .query()
          .where('done', eq: true)
          .orderBy('priority')
          .select(['title', 'priority'])
          .limit(5)
          .fetch();
      expect(page.items.map((r) => r.toJson()), rawPage.items);
      expect(
        () => page.items.first(Tasks.done),
        throwsA(isA<FieldNotSelectedError>()),
      );
    });

    test('search returns scored hits with typed fetches', () async {
      final facade = await LocalPocket.open(
          LocalPocketOptions(path: ':memory:', stores: [Tasks.store]));
      addTearDown(facade.close);
      final tasks = facade.store(Tasks.store);

      final alpha = await tasks.put([Tasks.title.set('alpha kernel')]);
      final beta = await tasks.put([Tasks.title.set('beta search kernel')]);

      final hits = await tasks
          .search(const SearchSpec<Tasks>(term: 'kernel', limit: 10));
      expect(hits.map((h) => h.id), containsAll([alpha.id, beta.id]));
      expect(hits.first.score, isA<double>(),
          reason: 'BM25 scores may be negative; they are ordered by rank');

      final fetched = await hits.first.fetch();
      expect(fetched, isNotNull);
      expect(fetched!.id, hits.first.id);
      expect(fetched(Tasks.title), isNotEmpty);
      // ignore: unnecessary_statements
      beta;
    });
  });
}
