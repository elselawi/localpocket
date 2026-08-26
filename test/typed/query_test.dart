/// Typed queries, FTS search, and watch (plan §4.6, cases 92–126).
library;

import 'dart:async';

import 'package:localpocket/localpocket.dart';
import 'package:localpocket/typed.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import 'support/secrets.dart';
import 'support/tasks.dart';
import 'support/users.dart';

final class SearchTasks extends StoreDef<SearchTasks> {
  SearchTasks._() : super(name: 'searchtasks');

  static final SearchTasks instance = SearchTasks._();

  late final _title = f.text('title').req();

  static TextFieldReq<SearchTasks> get title => instance._title;

  @override
  List<FieldDef<SearchTasks, Object?>> get fields => [_title];

  @override
  FtsSpec get fts => const FtsSpec(['title']);
}

Future<LocalPocket> openTyped({
  bool includeSecrets = false,
  bool includeSearch = false,
}) =>
    LocalPocket.open(
      path: ':memory:',
      stores: <CollectionSchema<Object?>>[
        Tasks.instance.schema,
        Users.instance.schema,
        if (includeSecrets) SecretNotes.instance.schema,
        if (includeSearch) SearchTasks.instance.schema,
      ],
    );

void expectCompiledEqual(
    (String, List<Object?>) actual, (String, List<Object?>) expected) {
  expect(actual.$1, expected.$1);
  expect(actual.$2, expected.$2);
}

void expectCompileParity(TypedQuery<Tasks> typed, QueryBuilder raw) {
  expectCompiledEqual(typed.debugCompile(), raw.debugCompile());
}

Future<void> seedTasks(LocalPocket db) async {
  final tasks = db.store(Tasks.instance);
  await tasks.putAll(<void Function(Draft<Tasks>)>[
    (w) => w
      ..setId(rid('qt', 1))
      ..set(Tasks.title)('Ship alpha')
      ..set(Tasks.priority)(Priority.high)
      ..set(Tasks.role)(Role.admin)
      ..set(Tasks.done)(false)
      ..set(Tasks.dueDay)(10)
      ..set(Tasks.dueAt)(DateTime.utc(2026, 1, 2))
      ..set(Tasks.estimate)(2.5)
      ..set(Tasks.count)(2),
    (w) => w
      ..setId(rid('qt', 2))
      ..set(Tasks.title)('Ship beta')
      ..set(Tasks.priority)(Priority.low)
      ..set(Tasks.role)(Role.member)
      ..set(Tasks.done)(true)
      ..set(Tasks.dueDay)(20)
      ..set(Tasks.dueAt)(DateTime.utc(2026, 1, 3))
      ..set(Tasks.estimate)(4)
      ..set(Tasks.count)(4),
    (w) => w
      ..setId(rid('qt', 3))
      ..set(Tasks.title)('Review gamma')
      ..set(Tasks.done)(false),
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
      final typed = db
          .store(Tasks.instance)
          .query()
          .where(Tasks.done)(eq: false)
          .where(Tasks.role)(inValues: <Role>[Role.admin, Role.member])
          .whereCond(Tasks.estimate.gt(2))
          .whereCond(Tasks.title.startsWith('Ship'))
          .where(Tasks.dueDay)(between: (5, 30))
          .whereCond(Tasks.count.lt(9))
          .whereCond(Tasks.dueDay.gte(10))
          .where(Tasks.priority)(isNotNull: true)
          .where(Tasks.ownerId)(isNull: true)
          .where(Tasks.role)(eq: Role.admin)
          .whereCond(Tasks.dueAt.gt(DateTime.utc(2026)))
          .orderBy(Tasks.dueAt, desc: true)
          .limit(20);
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
          .where('priority', isNotNull: true)
          .where('ownerId', isNull: true)
          .where('role', eq: 'admin')
          .where('dueAt', gt: DateTime.utc(2026).millisecondsSinceEpoch)
          .orderBy('dueAt', desc: true)
          .limit(20);
      expectCompileParity(typed, raw);
      expect(typed.debugCompile().$2, contains('admin'));
      expect(typed.debugCompile().$2,
          contains(DateTime.utc(2026).millisecondsSinceEpoch));
    });

    test('case 100: select wraps projection and rejects unselected reads',
        () async {
      final page = await db
          .store(Tasks.instance)
          .query()
          .select(<FieldDef<Tasks, Object?>>[Tasks.title, Tasks.done])
          .limit(1)
          .fetch();
      expect(page.items.single(Tasks.title), isNotEmpty);
      expect(page.items.single(Tasks.done), isA<bool>());
      expect(
          () => page.items.single(Tasks.role),
          throwsA(isA<ValidationException>()
              .having((e) => e.field, 'field', 'role')));
    });

    test('case 101: limit/all and visibility flags compile like raw', () {
      expectCompileParity(
        db
            .store(Tasks.instance)
            .query()
            .includeArchived()
            .includeHidden()
            .all(),
        db.collection('tasks').query().includeArchived().includeHidden().all(),
      );
      expectCompileParity(
        db.store(Tasks.instance).query().limit(3),
        db.collection('tasks').query().limit(3),
      );
    });

    test('cases 102–103: typed page/keyset cursor metadata is unchanged',
        () async {
      final typed =
          db.store(Tasks.instance).query().orderBy(Tasks.title).limit(1);
      final raw = db.collection('tasks').query().orderBy('title').limit(1);
      final TypedPage<Tasks> typedFirst = await typed.fetch();
      final rawFirst = await raw.fetch();
      expect(typedFirst.items.single.id, rawFirst.items.single['id']);
      expect(typedFirst.hasMore, rawFirst.hasMore);
      expect(typedFirst.nextCursor, rawFirst.nextCursor);
      final typedSecond = await typed.keysetAfter(typedFirst.nextCursor!);
      final rawSecond = await raw.keysetAfter(rawFirst.nextCursor!);
      expect(typedSecond.items.single.id, rawSecond.items.single['id']);
      expect(
        () => db
            .store(Tasks.instance)
            .query()
            .orderBy(Tasks.dueDay)
            .limit(1)
            .keysetAfter(typedFirst.nextCursor!),
        throwsA(isA<StaleCursorError>()),
      );
    });

    test('cases 104–107: count/distinct/aggregates/ids/explain delegate',
        () async {
      final typed = db.store(Tasks.instance).query().all();
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
      expect(await typed.ids(), await raw.ids());
      expect(await typed.explain(), await raw.explain());
    });

    test('case 108: typed orWhere equality group compiles like raw', () {
      final typed = db.store(Tasks.instance).query().orWhere(<Cond<Tasks>>[
        eqCond(Tasks.role, Role.admin),
        eqCond(Tasks.done, false),
      ]).limit(5);
      final raw = db.collection('tasks').query().orWhere(<Map<String, Object?>>[
        <String, Object?>{'role': 'admin'},
        <String, Object?>{'done': false},
      ]).limit(5);
      expectCompileParity(typed, raw);
    });

    test('case 109: encrypted predicate rejection is engine-owned', () {
      expect(
        () => db
            .store(SecretNotes.instance)
            .query()
            .where(SecretNotes.note)(eq: 'x')
            .limit(1)
            .debugCompile(),
        throwsA(isA<SchemaRegistrationError>()),
      );
    });

    test('cases 114–117: LIKE escaping, no predicate, null, empty IN parity',
        () {
      final needle = r'a%_\b';
      expectCompileParity(
        db
            .store(Tasks.instance)
            .query()
            .whereCond(Tasks.title.startsWith(needle))
            .whereCond(Tasks.title.contains(needle))
            .limit(2),
        db
            .collection('tasks')
            .query()
            .where('title', startsWith: needle)
            .where('title', contains: needle)
            .limit(2),
      );
      expectCompileParity(
        db.store(Tasks.instance).query().limit(2),
        db.collection('tasks').query().limit(2),
      );
      expectCompileParity(
        db
            .store(Tasks.instance)
            .query()
            .where(Tasks.done)(eq: null, isNull: true)
            .limit(2),
        db
            .collection('tasks')
            .query()
            .where('done', eq: null, isNull: true)
            .limit(2),
      );
      expectCompileParity(
        db
            .store(Tasks.instance)
            .query()
            .where(Tasks.role)(inValues: <Role>[])
            .limit(2),
        db
            .collection('tasks')
            .query()
            .where('role', inValues: <Object?>[]).limit(2),
      );
    });

    test('cases 118–122: cursor/distinct/aggregate/null ordering edges',
        () async {
      final typedShape =
          db.store(Tasks.instance).query().orderBy(Tasks.dueDay).limit(1);
      final first = await typedShape.fetch();
      final rawSecond = await db
          .collection('tasks')
          .query()
          .orderBy('dueDay')
          .limit(1)
          .keysetAfter(first.nextCursor!);
      expect((await typedShape.keysetAfter(first.nextCursor!)).items.single.id,
          rawSecond.items.single['id']);

      final typedDistinct =
          await db.store(Tasks.instance).query().all().distinct(Tasks.priority);
      final rawDistinct =
          await db.collection('tasks').query().all().distinct('priority');
      expect(typedDistinct.whereType<Priority>().map((e) => e.name).toSet(),
          rawDistinct.whereType<String>().toSet());
      expect(typedDistinct, contains(null));

      expect(
        await db
            .store(Tasks.instance)
            .query()
            .where(Tasks.title)(eq: 'missing')
            .all()
            .sum(Tasks.estimate),
        await db
            .collection('tasks')
            .query()
            .where('title', eq: 'missing')
            .all()
            .sum('estimate'),
      );
      expect(
        await db
            .store(Tasks.instance)
            .query()
            .where(Tasks.estimate)(isNull: true)
            .all()
            .sum(Tasks.estimate),
        await db
            .collection('tasks')
            .query()
            .where('estimate', isNull: true)
            .all()
            .sum('estimate'),
      );
      final typedOrdered = await db
          .store(Tasks.instance)
          .query()
          .orderBy(Tasks.dueDay)
          .all()
          .fetch();
      final rawOrdered =
          await db.collection('tasks').query().orderBy('dueDay').all().fetch();
      expect(typedOrdered.items.map((e) => e.id),
          rawOrdered.items.map((e) => e['id']));
    });
  });

  group('typed watch and search', () {
    test('cases 110 and 124: watchOne wraps rows and missing id emits null',
        () async {
      final db = await openTyped();
      addTearDown(db.close);
      final missing =
          await db.store(Tasks.instance).watchOne(rid('missing', 1)).first;
      expect(missing, isNull);

      final id = rid('watch', 1);
      final values = <TypedRow<Tasks>?>[];
      final sub = db.store(Tasks.instance).watchOne(id).listen(values.add);
      addTearDown(sub.cancel);
      await db.store(Tasks.instance).put((w) => w
        ..setId(id)
        ..set(Tasks.title)('watched'));
      await Future<void>.delayed(const Duration(milliseconds: 25));
      await db.store(Tasks.instance).purge(id);
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
          .store(Tasks.instance)
          .query()
          .orderBy(Tasks.title)
          .limit(20)
          .watch()
          .listen(emissions.add);
      addTearDown(sub.cancel);
      await Future<void>.delayed(const Duration(milliseconds: 25));
      final before = emissions.length;
      await db.transaction((tx) async {
        final tasks = tx.store(Tasks.instance);
        for (var i = 0; i < 3; i++) {
          await tasks.put((w) => w
            ..setId(rid('burst', i))
            ..set(Tasks.title)('burst $i'));
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
      await db.store(SearchTasks.instance).put((w) => w
        ..setId(id)
        ..set(SearchTasks.title)('ship searchable'));
      final TypedSearch<SearchTasks> search =
          db.store(SearchTasks.instance).search('ship').limit(5);
      final raw = db.collection('searchtasks').search('ship').limit(5);
      expectCompiledEqual(search.debugCompile(), raw.debugCompile());
      final TypedSearchHit<SearchTasks> hit = (await search.fetch()).single;
      expect(hit.id, id);
      expect(hit.score, isA<double>());
      expect((await hit.fetch())!(SearchTasks.title), 'ship searchable');
      await db.store(SearchTasks.instance).purge(id);
      expect(await hit.fetch(), isNull);
    });

    test('case 125: FtsUnavailableError passes through unchanged', () async {
      final db = await openTyped();
      addTearDown(db.close);
      expect(
        () => db.store(Users.instance).search('x'),
        throwsA(isA<FtsUnavailableError>()),
      );
    });
  });
}
