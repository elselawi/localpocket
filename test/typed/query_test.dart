/// Typed queries, FTS search, and watch.
library;

import 'dart:async';

import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import 'support/secrets.dart';
import 'support/tasks.dart';
import 'support/users.dart';

final class SearchTasks extends StoreDef<SearchTasks> {
  SearchTasks._() : super(name: 'searchtasks');

  static final SearchTasks store = SearchTasks._();

  late final _title = schema.text('title').req();

  static TextFieldReq<SearchTasks> get title => store._title;

  @override
  List<FieldDef<SearchTasks, Object?>> get fields => [_title];

  @override
  FtsSpec get fts => ftsSpec<SearchTasks>([_title]);
}

Future<LocalPocket> openTyped({
  bool includeSecrets = false,
  bool includeSearch = false,
}) =>
    LocalPocket.open(
      path: ':memory:',
      stores: <CollectionSchema<Object?>>[
        Tasks.store.collectionSchema,
        Users.store.collectionSchema,
        if (includeSecrets) SecretNotes.store.collectionSchema,
        if (includeSearch) SearchTasks.store.collectionSchema,
      ],
    );

void expectCompiledEqual(
    (String, List<Object?>) actual, (String, List<Object?>) expected) {
  expect(actual.$1, expected.$1);
  expect(actual.$2, expected.$2);
}

void expectCompileParity((String, List<Object?>) typed, QueryBuilder raw) {
  expectCompiledEqual(typed, raw.debugCompile());
}

Future<void> seedTasks(LocalPocket db) async {
  final tasks = db.store(Tasks.store);
  await tasks.putAll([
    [
      Writes.id(rid('qt', 1)),
      Tasks.title.set('Ship alpha'),
      Tasks.priority.set(Priority.high),
      Tasks.role.set(Role.admin),
      Tasks.done.set(false),
      Tasks.dueDay.set(10),
      Tasks.dueAt.set(DateTime.utc(2026, 1, 2)),
      Tasks.estimate.set(2.5),
      Tasks.count.set(2),
    ],
    [
      Writes.id(rid('qt', 2)),
      Tasks.title.set('Ship beta'),
      Tasks.priority.set(Priority.low),
      Tasks.role.set(Role.member),
      Tasks.done.set(true),
      Tasks.dueDay.set(20),
      Tasks.dueAt.set(DateTime.utc(2026, 1, 3)),
      Tasks.estimate.set(4),
      Tasks.count.set(4),
    ],
    [
      Writes.id(rid('qt', 3)),
      Tasks.title.set('Review gamma'),
      Tasks.done.set(false),
    ],
  ]);
}

void main() {
  group('typed query compile parity', () {
    late LocalPocket db;

    setUp(() async {
      db = await openTyped(includeSecrets: true);
      await seedTasks(db);
    });
    tearDown(() => db.close());

    test('cases 92–99 and 113: predicate/order matrix matches raw SQL+args',
        () {
      final typed = db.store(Tasks.store).debugCompile(
        where: [
          Tasks.done.eq(false),
          Tasks.role.inValues(<Role>[Role.admin, Role.member]),
          Tasks.estimate.gt(2),
          Tasks.title.startsWith('Ship'),
          Tasks.dueDay.between(5, 30),
          Tasks.count.lt(9),
          Tasks.dueDay.gte(10),
          Tasks.ownerId.isNull(),
          Tasks.role.eq(Role.admin),
          Tasks.dueAt.gt(DateTime.utc(2026)),
        ],
        orderBy: [Tasks.dueAt.desc],
        limit: 20,
      );
      final raw = db
          .collection('tasks')
          .query()
          .where('done', eq: false)
          .where('role', inValues: <Object?>['admin', 'member'])
          .where('estimate', gt: 2)
          .where('title', startsWith: 'Ship')
          .where('dueDay', between: (5, 30))
          .where('count', lt: 9)
          .where('dueDay', gte: 10)
          .where('ownerId', isNull: true)
          .where('role', eq: 'admin')
          .where('dueAt', gt: DateTime.utc(2026).millisecondsSinceEpoch)
          .orderBy('dueAt', desc: true)
          .limit(20);
      expectCompileParity(typed, raw);
      expect(typed.$2, contains('admin'));
      expect(typed.$2, contains(DateTime.utc(2026).millisecondsSinceEpoch));
    });

    test('case 100: select wraps projection and rejects unselected reads',
        () async {
      final page = await db.store(Tasks.store).query(
        select: <FieldDef<Tasks, Object?>>[Tasks.title, Tasks.done],
        limit: 1,
      );
      expect(page.items.single(Tasks.title), isNotEmpty);
      expect(page.items.single(Tasks.done), isA<bool>());
      expect(
          () => page.items.single(Tasks.role),
          throwsA(isA<ValidationException>()
              .having((e) => e.field, 'field', 'role')));
    });

    test('case 101: limit/all and visibility flags compile like raw', () {
      expectCompileParity(
        db.store(Tasks.store).debugCompile(
              includeArchived: true,
              includeHidden: true,
              limit: Limits.unbounded,
            ),
        db.collection('tasks').query().includeArchived().includeHidden().all(),
      );
      expectCompileParity(
        db.store(Tasks.store).debugCompile(limit: 3),
        db.collection('tasks').query().limit(3),
      );
    });

    test('cases 102–103: typed page/keyset cursor metadata is unchanged',
        () async {
      final raw = db.collection('tasks').query().orderBy('title').limit(1);
      final TypedPage<Tasks> typedFirst = await db
          .store(Tasks.store)
          .query(orderBy: [Tasks.title.asc], limit: 1);
      final rawFirst = await raw.fetch();
      expect(typedFirst.items.single.id, rawFirst.items.single['id']);
      expect(typedFirst.hasNext, rawFirst.hasNext);
      expect(typedFirst.nextCursor, rawFirst.nextCursor);
      final typedSecond = await typedFirst.next();
      final rawSecond = await raw.keysetAfter(rawFirst.nextCursor!);
      expect(typedSecond!.items.single.id, rawSecond.items.single['id']);
      // `after:` resumes a persisted cursor under the re-stated shape; a
      // shape mismatch is rejected loudly.
      final resumed = await db.store(Tasks.store).query(
        orderBy: [Tasks.title.asc],
        limit: 1,
        after: typedFirst.nextCursor!,
      );
      expect(resumed.items.single.id, rawSecond.items.single['id']);
      expect(
        () => db.store(Tasks.store).query(
          orderBy: [Tasks.dueDay.asc],
          limit: 1,
          after: typedFirst.nextCursor!,
        ),
        throwsA(isA<StaleCursorError>()),
      );
    });

    test('cases 104–107: count/distinct/aggregates/ids/explain delegate',
        () async {
      final typed = db.store(Tasks.store);
      final raw = db.collection('tasks').query().all();
      expect(await typed.count(), await raw.count());
      expect(await typed.countDistinct(Tasks.priority),
          await raw.countDistinct('priority'));
      final priorities = await typed.distinct(Tasks.priority);
      expect(priorities, everyElement(anyOf(isNull, isA<Priority>())));
      expect(await typed.sum(Tasks.estimate), await raw.sum('estimate'));
      expect(await typed.min(Tasks.estimate), await raw.min('estimate'));
      expect(await typed.max(Tasks.estimate), await raw.max('estimate'));
      expect(await typed.avg(Tasks.estimate), await raw.avg('estimate'));
      expect(await typed.ids(limit: Limits.unbounded), await raw.ids());
      expect(await typed.explain(limit: Limits.unbounded), await raw.explain());
    });

    test('case 108: an OR element compiles like the raw OR group', () {
      expectCompileParity(
        db.store(Tasks.store).debugCompile(
          where: <Cond<Tasks>>[
            Tasks.role.eq(Role.admin) | Tasks.done.eq(false),
          ],
          limit: 5,
        ),
        db.collection('tasks').query().orWhere(<Map<String, Object?>>[
          <String, Object?>{'role': 'admin'},
          <String, Object?>{'done': false},
        ]).limit(5),
      );
    });

    test('case 109: encrypted predicate rejection is engine-owned', () async {
      await expectLater(
        db.store(SecretNotes.store).query(
          where: [SecretNotes.note.eq('x')],
          limit: 1,
        ),
        throwsA(isA<SchemaRegistrationError>()),
      );
    });

    test('cases 114–117: LIKE escaping, no predicate, null, empty IN parity',
        () {
      final needle = r'a%_\b';
      expectCompileParity(
        db.store(Tasks.store).debugCompile(
          where: [
            Tasks.title.startsWith(needle),
            Tasks.title.contains(needle),
          ],
          limit: 2,
        ),
        db
            .collection('tasks')
            .query()
            .where('title', startsWith: needle)
            .where('title', contains: needle)
            .limit(2),
      );
      expectCompileParity(
        db.store(Tasks.store).debugCompile(limit: 2),
        db.collection('tasks').query().limit(2),
      );
      // eq(null) is the IS NULL shorthand.
      expectCompileParity(
        db.store(Tasks.store).debugCompile(
          where: [Tasks.done.eq(null)],
          limit: 2,
        ),
        db.collection('tasks').query().where('done', isNull: true).limit(2),
      );
      // An empty IN list is rejected at construction on the typed side;
      // the raw builder's `IN ()` fragment is the raw API's own quirk.
    });

    test('cases 118–122: cursor/distinct/aggregate/null ordering edges',
        () async {
      final first = await db
          .store(Tasks.store)
          .query(orderBy: [Tasks.dueDay.asc], limit: 1);
      final rawSecond = await db
          .collection('tasks')
          .query()
          .orderBy('dueDay')
          .limit(1)
          .keysetAfter(first.nextCursor!);
      expect(
          (await first.next())!.items.single.id, rawSecond.items.single['id']);

      final typedDistinct =
          await db.store(Tasks.store).distinct(Tasks.priority);
      final rawDistinct =
          await db.collection('tasks').query().all().distinct('priority');
      expect(typedDistinct.whereType<Priority>().map((e) => e.name).toSet(),
          rawDistinct.whereType<String>().toSet());
      expect(typedDistinct, contains(null));

      expect(
        await db.store(Tasks.store).sum(
          Tasks.estimate,
          where: [Tasks.title.eq('missing')],
        ),
        await db
            .collection('tasks')
            .query()
            .where('title', eq: 'missing')
            .all()
            .sum('estimate'),
      );
      expect(
        await db.store(Tasks.store).sum(
          Tasks.estimate,
          where: [Tasks.estimate.isNull()],
        ),
        await db
            .collection('tasks')
            .query()
            .where('estimate', isNull: true)
            .all()
            .sum('estimate'),
      );
      final typedOrdered = await db
          .store(Tasks.store)
          .query(orderBy: [Tasks.dueDay.asc], limit: Limits.unbounded);
      final rawOrdered =
          await db.collection('tasks').query().orderBy('dueDay').all().fetch();
      expect(typedOrdered.items.map((e) => e.id),
          rawOrdered.items.map((e) => e['id']));
    });
  });

  group('universal condition family (descriptor-side grammar)', () {
    late LocalPocket db;

    setUp(() async {
      db = await openTyped();
      await seedTasks(db);
    });
    tearDown(() => db.close());

    test('v3: descriptor conditions compile exactly like the raw builder', () {
      final tasks = db.store(Tasks.store);
      expectCompileParity(
        tasks.debugCompile(where: [Tasks.done.eq(false)], limit: 2),
        db.collection('tasks').query().where('done', eq: false).limit(2),
      );
      expectCompileParity(
        tasks.debugCompile(
          where: [
            Tasks.role.inValues(<Role>[Role.admin, Role.member])
          ],
          limit: 2,
        ),
        db
            .collection('tasks')
            .query()
            .where('role', inValues: <Object?>['admin', 'member']).limit(2),
      );
      expectCompileParity(
        tasks.debugCompile(where: [Tasks.dueDay.between(5, 30)], limit: 2),
        db
            .collection('tasks')
            .query()
            .where('dueDay', between: (5, 30)).limit(2),
      );
      expectCompileParity(
        tasks.debugCompile(where: [Tasks.estimate.isNull()], limit: 2),
        db.collection('tasks').query().where('estimate', isNull: true).limit(2),
      );
      expectCompileParity(
        tasks.debugCompile(where: [Tasks.count.lte(9)], limit: 2),
        db.collection('tasks').query().where('count', lte: 9).limit(2),
      );
      expectCompileParity(
        tasks.debugCompile(where: [Tasks.title.contains('hip')], limit: 2),
        db.collection('tasks').query().where('title', contains: 'hip').limit(2),
      );
    });

    test('v3: eq(null) is IS NULL and ~eq(null) is IS NOT NULL', () {
      final tasks = db.store(Tasks.store);
      expectCompileParity(
        tasks.debugCompile(where: [Tasks.estimate.eq(null)], limit: 2),
        db.collection('tasks').query().where('estimate', isNull: true).limit(2),
      );
      // The negated form compiles to NOT (IS NULL) — the raw builder has no
      // NOT, so this is a direct SQL pin rather than a raw parity check.
      final (sql, args) =
          tasks.debugCompile(where: [~Tasks.estimate.eq(null)], limit: 2);
      expect(sql, contains('NOT ("estimate" IS NULL)'));
      expect(args, isEmpty);
    });

    test('v3: routed conditions actually filter (the silent no-op fix)',
        () async {
      final tasks = db.store(Tasks.store);
      expect(
        // ~eq replaces the old not-equal operator: not-done tasks.
        await tasks.count(where: [~Tasks.done.eq(true)]),
        2,
      ); // qt1 and qt3 are not done.
      expect(
        await tasks.count(
          where: [Tasks.role.eq(Role.admin) | Tasks.done.eq(true)],
        ),
        2, // qt1 is admin, qt2 is done.
      );
      expect(
        await tasks.count(where: [Tasks.estimate.isNull()]),
        1, // only qt3 omits estimate.
      );
    });

    test('v3: OR elements accept every operator kind and compile like raw', () {
      final tasks = db.store(Tasks.store);
      // Equality alternatives still compile exactly like the raw OR group.
      expectCompileParity(
        tasks.debugCompile(
          where: [Tasks.role.eq(Role.admin) | Tasks.done.eq(true)],
          limit: 5,
        ),
        db.collection('tasks').query().orWhere(<Map<String, Object?>>[
          <String, Object?>{'role': 'admin'},
          <String, Object?>{'done': true},
        ]).limit(5),
      );
      // A range alternative has no raw equivalent — pin the compiled shape.
      final (sql, args) = tasks.debugCompile(
        where: [Tasks.count.gt(9) | Tasks.done.eq(false)],
        limit: 5,
      );
      expect(sql, contains('(("count" > ?) OR ("done" = ?))'));
      expect(args, <Object?>[9, false]);
    });

    test('v3: the named-argument query entry compiles like the raw builder',
        () {
      final List<Cond<Tasks>> where = [
        Tasks.done.eq(false),
        Tasks.priority.eq(Priority.high),
        Tasks.count.gt(1),
      ];
      final List<OrderTerm<Tasks>> order = [
        Tasks.dueDay.desc,
        Tasks.title.asc,
      ];
      expectCompileParity(
        db.store(Tasks.store).debugCompile(
          where: [
            ...where,
            Tasks.title.eq('Ship alpha') | Tasks.role.eq(Role.admin),
          ],
          orderBy: order,
          limit: 10,
        ),
        db
            .collection('tasks')
            .query()
            .where('done', eq: false)
            .where('priority', eq: 'high')
            .where('count', gt: 1)
            .orWhere(<Map<String, Object?>>[
              <String, Object?>{'title': 'Ship alpha'},
              <String, Object?>{'role': 'admin'},
            ])
            .orderBy('dueDay', desc: true)
            .orderBy('title')
            .limit(10),
      );
    });

    test('v3: inValues rejects an empty list at construction', () {
      expect(() => Tasks.role.inValues(const <Role>[]), throwsArgumentError);
    });
  });

  group('typed watch and search', () {
    test('cases 110 and 124: watchOne wraps rows and missing id emits null',
        () async {
      final db = await openTyped();
      addTearDown(db.close);
      final missing =
          await db.store(Tasks.store).watchOne(rid('missing', 1)).first;
      expect(missing, isNull);

      final id = rid('watch', 1);
      final values = <TypedRow<Tasks>?>[];
      final sub = db.store(Tasks.store).watchOne(id).listen(values.add);
      addTearDown(sub.cancel);
      await db.store(Tasks.store).put([
        Writes.id(id),
        Tasks.title.set('watched'),
      ]);
      await Future<void>.delayed(const Duration(milliseconds: 25));
      await db.store(Tasks.store).purge(id);
      await Future<void>.delayed(const Duration(milliseconds: 40));
      expect(values, contains(isA<TypedRow<Tasks>>()));
      expect(values.last, isNull);
    });

    test('cases 111 and 123: query watch wraps rows and coalesces a burst',
        () async {
      final db = await openTyped();
      addTearDown(db.close);
      final emissions = <List<TypedRow<Tasks>>>[];
      final sub = db
          .store(Tasks.store)
          .watch(orderBy: [Tasks.title.asc], limit: 20).listen(emissions.add);
      addTearDown(sub.cancel);
      await Future<void>.delayed(const Duration(milliseconds: 25));
      final before = emissions.length;
      await db.transaction((tx) async {
        final tasks = tx.store(Tasks.store);
        for (var i = 0; i < 3; i++) {
          await tasks.put([
            Writes.id(rid('burst', i)),
            Tasks.title.set('burst $i'),
          ]);
        }
      });
      await Future<void>.delayed(const Duration(milliseconds: 45));
      expect(emissions.length, before + 1);
      expect(emissions.last, hasLength(3));
      expect(emissions.last, everyElement(isA<TypedRow<Tasks>>()));
    });

    test('cases 112 and 126: typed search hit fetches, then returns null',
        () async {
      final db = await openTyped(includeSearch: true);
      addTearDown(db.close);
      final id = rid('search', 1);
      await db.store(SearchTasks.store).put([
        Writes.id(id),
        SearchTasks.title.set('ship searchable'),
      ]);
      final hits = await db.store(SearchTasks.store).search('ship', limit: 5);
      final TypedSearchHit<SearchTasks> hit = hits.single;
      expect(hit.id, id);
      expect(hit.score, isA<double>());
      expect((await hit.fetch())!(SearchTasks.title), 'ship searchable');
      await db.store(SearchTasks.store).purge(id);
      expect(await hit.fetch(), isNull);
    });

    test('v3: search returns its hits directly and matches the raw builder',
        () async {
      final db = await openTyped(includeSearch: true);
      addTearDown(db.close);
      final id = rid('search', 2);
      await db.store(SearchTasks.store).put([
        Writes.id(id),
        SearchTasks.title.set('ship searchable'),
      ]);
      final hits = await db.store(SearchTasks.store).search('ship', limit: 5);
      final raw =
          await db.collection('searchtasks').search('ship').limit(5).fetch();
      expect(hits.map((h) => h.id), raw.map((r) => r.id));
      expect(hits.map((h) => h.id), contains(id));
    });

    test('search forwards all/includeArchived/includeHidden to the surface',
        () async {
      final db = await openTyped(includeSearch: true);
      addTearDown(db.close);
      final id = rid('search', 3);
      await db.store(SearchTasks.store).put([
        Writes.id(id),
        SearchTasks.title.set('ship scope flags'),
      ]);

      // `Limits.unbounded` opts out of the result limit; the archived/hidden
      // flags pass through to the underlying FTS surface and the hit still
      // fetches.
      final hits = await db.store(SearchTasks.store).search(
            'ship',
            limit: Limits.unbounded,
            includeArchived: true,
            includeHidden: true,
          );
      expect(hits.map((h) => h.id), contains(id));
      expect(
          (await hits.single.fetch())!(SearchTasks.title), 'ship scope flags');
    });

    test('case 125: FtsUnavailableError passes through unchanged', () async {
      final db = await openTyped();
      addTearDown(db.close);
      expect(
        () => db.store(Users.store).search(
              'x',
              limit: Limits.unbounded,
            ),
        throwsA(isA<FtsUnavailableError>()),
      );
    });
  });
}
