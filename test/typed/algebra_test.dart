/// The typed condition algebra: `&` (AND), `|` (OR), `~` (NOT) over every
/// predicate operator.
///
/// Coverage layout:
/// 1. node types, flattening, and construction rejections,
/// 2. compile parity with the raw builder for every shape the raw builder
///    can express (AND chains, OR groups, OR-of-AND groups, mixed lists),
/// 3. pinned SQL for the typed-only shapes (NOT, OR-of-ranges, eq(null)
///    alternatives, precedence),
/// 4. execution semantics, including SQL three-valued NULL behavior,
/// 5. the algebra inside every other engine feature: keyset pagination,
///    cursor shape-fingerprinting, watch, aggregates, scopes, and LIKE
///    escaping inside OR arms.
library;

import 'dart:async';

import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import 'support/tasks.dart';

late LocalPocket db;

TypedCollection<Tasks> get tasks => db.store(Tasks.instance);

void expectCompileParity((String, List<Object?>) typed, QueryBuilder raw) {
  final compiled = raw.debugCompile();
  expect(typed.$1, compiled.$1);
  expect(typed.$2, compiled.$2);
}

Future<LocalPocket> openAlgebra() => LocalPocket.open(
      path: ':memory:',
      stores: <CollectionSchema<Object?>>[Tasks.instance.collectionSchema],
    );

/// Five canonical rows:
/// - a1  'Ship alpha'    admin,  done=false, count=2, estimate=2.5, dueDay=10, dueAt=Jan 2, priority=high
/// - a2  'Ship beta'     member, done=true,  count=4, estimate=4,   dueDay=20, dueAt=Jan 3, priority=low
/// - a3  'Review gamma'  role/count/estimate/dueDay/dueAt/priority all NULL, done=false
/// - a4  '100% special'  done=false, count=0   (LIKE wildcard row)
/// - a5  '100x plain'    done=false, count=1   (LIKE wildcard decoy)
Future<void> seedAlgebra(LocalPocket db) async {
  await db.store(Tasks.instance).putAll([
    [
      Writes.id(rid('alg', 1)),
      Tasks.title.set('Ship alpha'),
      Tasks.role.set(Role.admin),
      Tasks.done.set(false),
      Tasks.count.set(2),
      Tasks.estimate.set(2.5),
      Tasks.dueDay.set(10),
      Tasks.dueAt.set(DateTime.utc(2026, 1, 2)),
      Tasks.priority.set(Priority.high),
    ],
    [
      Writes.id(rid('alg', 2)),
      Tasks.title.set('Ship beta'),
      Tasks.role.set(Role.member),
      Tasks.done.set(true),
      Tasks.count.set(4),
      Tasks.estimate.set(4),
      Tasks.dueDay.set(20),
      Tasks.dueAt.set(DateTime.utc(2026, 1, 3)),
      Tasks.priority.set(Priority.low),
    ],
    [
      Writes.id(rid('alg', 3)),
      Tasks.title.set('Review gamma'),
      Tasks.done.set(false),
    ],
    [
      Writes.id(rid('alg', 4)),
      Tasks.title.set('100% special'),
      Tasks.done.set(false),
      Tasks.count.set(0),
    ],
    [
      Writes.id(rid('alg', 5)),
      Tasks.title.set('100x plain'),
      Tasks.done.set(false),
      Tasks.count.set(1),
    ],
  ]);
}

String _at(int n) => rid('alg', n);

void main() {
  setUp(() async {
    db = await openAlgebra();
    await seedAlgebra(db);
  });
  tearDown(() => db.close());

  Future<Set<String>> matchingIds(Cond<Tasks> condition) async =>
      (await tasks.query(where: [condition], limit: 10))
          .items
          .map((row) => row.id)
          .toSet();

  Set<String> rows(int one, [int? two, int? three, int? four, int? five]) => {
        _at(one),
        if (two != null) _at(two),
        if (three != null) _at(three),
        if (four != null) _at(four),
        if (five != null) _at(five),
      };

  group('algebra node shapes', () {
    test('operators build the documented node types', () {
      final Cond<Tasks> leaf = Tasks.done.eq(false);
      final Cond<Tasks> and = leaf & Tasks.count.gt(1);
      final Cond<Tasks> or = leaf | Tasks.count.gt(1);
      final Cond<Tasks> not = ~leaf;

      expect(leaf, isA<FieldCond<Tasks>>());
      expect(and, isA<AllCond<Tasks>>());
      expect(or, isA<AnyCond<Tasks>>());
      expect(not, isA<NotCond<Tasks>>());
      expect((not as NotCond<Tasks>).child, same(leaf));
    });

    test('chained & and | flatten into one node with N children', () {
      final AllCond<Tasks> and = Tasks.done.eq(false) &
          Tasks.count.gt(1) &
          Tasks.count.lt(9) &
          Tasks.title.startsWith('S');
      expect(and.children, hasLength(4));

      final AnyCond<Tasks> or = Tasks.role.eq(Role.admin) |
          Tasks.done.eq(true) |
          Tasks.priority.eq(Priority.low);
      expect(or.children, hasLength(3));

      // Nesting flattens in every association order.
      final AllCond<Tasks> rightAssoc =
          Tasks.done.eq(false) & (Tasks.count.gt(1) & Tasks.count.lt(9));
      expect(rightAssoc.children, hasLength(3));
      final AnyCond<Tasks> orRight = Tasks.role.eq(Role.admin) |
          (Tasks.done.eq(true) | Tasks.priority.eq(Priority.low));
      expect(orRight.children, hasLength(3));
    });

    test('nested composites of the other kind are NOT flattened', () {
      // (a | b) & c keeps the disjunction as one child.
      final AllCond<Tasks> mixed =
          (Tasks.role.eq(Role.admin) | Tasks.done.eq(true)) & Tasks.count.gt(1);
      expect(mixed.children, hasLength(2));
      expect(mixed.children.first, isA<AnyCond<Tasks>>());
      expect(mixed.children.last, isA<FieldCond<Tasks>>());
    });

    test('empty composites are rejected at construction', () {
      expect(
        () => AllCond<Tasks>(<Cond<Tasks>>[]),
        throwsArgumentError,
      );
      expect(
        () => AnyCond<Tasks>(<Cond<Tasks>>[]),
        throwsArgumentError,
      );
    });

    test('conditions carry their store for the runtime identity backstop', () {
      final FieldCond<Tasks> cond = Tasks.done.eq(false);
      expect(identical(cond.owner, Tasks.instance), isTrue);
    });
  });

  group('algebra compiles exactly like the raw builder', () {
    test('an AND tree as one element equals the clause chain', () {
      expectCompileParity(
        tasks.debugCompile(
          where: [Tasks.done.eq(false) & Tasks.count.gt(1)],
          limit: 5,
        ),
        db
            .collection('tasks')
            .query()
            .where('done', eq: false)
            .where('count', gt: 1)
            .limit(5),
      );
    });

    test('a flattened AND chain equals the clause chain', () {
      expectCompileParity(
        tasks.debugCompile(
          where: [
            Tasks.done.eq(false) & Tasks.count.gt(1) & Tasks.count.lt(9),
          ],
          limit: 5,
        ),
        db
            .collection('tasks')
            .query()
            .where('done', eq: false)
            .where('count', gt: 1)
            .where('count', lt: 9)
            .limit(5),
      );
    });

    test('an OR of two leaves equals one raw orWhere call', () {
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
    });

    test('a chained OR equals one raw orWhere call with all groups', () {
      expectCompileParity(
        tasks.debugCompile(
          where: [
            Tasks.role.eq(Role.admin) |
                Tasks.done.eq(true) |
                Tasks.priority.eq(Priority.low),
          ],
          limit: 5,
        ),
        db.collection('tasks').query().orWhere(<Map<String, Object?>>[
          <String, Object?>{'role': 'admin'},
          <String, Object?>{'done': true},
          <String, Object?>{'priority': 'low'},
        ]).limit(5),
      );
    });

    test('an OR of ANDs equals raw multi-field OR groups', () {
      expectCompileParity(
        tasks.debugCompile(
          where: [
            (Tasks.done.eq(true) & Tasks.count.eq(4)) |
                (Tasks.role.eq(Role.member) & Tasks.dueDay.eq(20)),
          ],
          limit: 5,
        ),
        db.collection('tasks').query().orWhere(<Map<String, Object?>>[
          <String, Object?>{'done': true, 'count': 4},
          <String, Object?>{'role': 'member', 'dueDay': 20},
        ]).limit(5),
      );
    });

    test('an AND whose arm is an OR equals where + orWhere in order', () {
      expectCompileParity(
        tasks.debugCompile(
          where: [
            Tasks.count.gt(1),
            Tasks.role.eq(Role.admin) | Tasks.done.eq(true),
          ],
          limit: 5,
        ),
        db
            .collection('tasks')
            .query()
            .where('count', gt: 1)
            .orWhere(<Map<String, Object?>>[
          <String, Object?>{'role': 'admin'},
          <String, Object?>{'done': true},
        ]).limit(5),
      );
    });

    test('a between leaf stays unparenthesized at the top level', () {
      expectCompileParity(
        tasks.debugCompile(
          where: [Tasks.dueDay.between(5, 30)],
          limit: 5,
        ),
        db
            .collection('tasks')
            .query()
            .where('dueDay', between: (5, 30)).limit(5),
      );
    });
  });

  group('algebra SQL contract (typed-only shapes)', () {
    test('NOT of a leaf', () {
      final (sql, args) =
          tasks.debugCompile(where: [~Tasks.done.eq(true)], limit: 5);
      expect(sql, contains('AND NOT ("done" = ?)'));
      expect(args, <Object?>[true]);
    });

    test('NOT of an AND', () {
      final (sql, args) = tasks.debugCompile(
        where: [~(Tasks.done.eq(false) & Tasks.count.gt(1))],
        limit: 5,
      );
      expect(sql, contains('NOT ("done" = ? AND "count" > ?)'));
      expect(args, <Object?>[false, 1]);
    });

    test('NOT of an OR', () {
      final (sql, args) = tasks.debugCompile(
        where: [~(Tasks.role.eq(Role.admin) | Tasks.done.eq(true))],
        limit: 5,
      );
      expect(sql, contains('NOT (("role" = ?) OR ("done" = ?))'));
      expect(args, <Object?>['admin', true]);
    });

    test('double negation is preserved verbatim', () {
      final (sql, args) =
          tasks.debugCompile(where: [~~Tasks.count.eq(2)], limit: 5);
      expect(sql, contains('NOT NOT ("count" = ?)'));
      expect(args, <Object?>[2]);
    });

    test('Dart precedence groups & before | (AND arms inside the OR)', () {
      final (sql, args) = tasks.debugCompile(
        where: [Tasks.count.gt(0) & Tasks.count.lt(3) | Tasks.done.eq(true)],
        limit: 5,
      );
      expect(sql, contains('(("count" > ? AND "count" < ?) OR ("done" = ?))'));
      expect(args, <Object?>[0, 3, true]);
    });

    test('an OR arm with a between is self-parenthesized', () {
      final (sql, args) = tasks.debugCompile(
        where: [Tasks.dueDay.between(5, 15) | Tasks.done.eq(false)],
        limit: 5,
      );
      expect(
        sql,
        contains('(("dueDay" >= ? AND "dueDay" <= ?) OR ("done" = ?))'),
      );
      expect(args, <Object?>[5, 15, false]);
    });

    test('eq(null) is a legal OR alternative and lowers to IS NULL', () {
      final (sql, args) = tasks.debugCompile(
        where: [Tasks.estimate.eq(null) | Tasks.done.eq(true)],
        limit: 5,
      );
      expect(sql, contains('(("estimate" IS NULL) OR ("done" = ?))'));
      expect(args, <Object?>[true]);
    });

    test('inValues inside an OR arm keeps its placeholders', () {
      final (sql, args) = tasks.debugCompile(
        where: [
          Tasks.role.inValues(<Role>[Role.admin, Role.member]) |
              Tasks.done.eq(true),
        ],
        limit: 5,
      );
      expect(sql, contains('(("role" IN (?, ?)) OR ("done" = ?))'));
      expect(args, <Object?>['admin', 'member', true]);
    });

    test('a full composite is one parenthesized clause in the WHERE chain', () {
      final (sql, args) = tasks.debugCompile(
        where: [
          (Tasks.count.gt(0) & Tasks.count.lt(3)) | Tasks.done.eq(true),
        ],
        limit: 7,
      );
      expect(
        sql,
        'SELECT * FROM "tasks" '
        'WHERE archived = 0 AND hidden = 0 '
        'AND (("count" > ? AND "count" < ?) OR ("done" = ?)) '
        'ORDER BY "id" ASC '
        'LIMIT 7',
      );
      expect(args, <Object?>[0, 3, true]);
    });
  });

  group('algebra execution semantics', () {
    test('OR of equality leaves', () async {
      expect(
        await matchingIds(Tasks.role.eq(Role.admin) | Tasks.done.eq(true)),
        rows(1, 2),
      );
    });

    test('OR of range leaves — every operator kind participates', () async {
      expect(
        await matchingIds(Tasks.count.gt(3) | Tasks.count.lt(3)),
        // a3 is NULL: both arms are NULL, so the row is excluded.
        rows(1, 2, 4, 5),
      );
    });

    test('NOT of a range excludes NULL rows (three-valued logic)', () async {
      expect(
        await matchingIds(~Tasks.count.gt(3)),
        // a2 fails the negation, a3 is NULL -> NOT NULL -> excluded.
        rows(1, 4, 5),
      );
    });

    test('NOT of an eq excludes NULL-valued rows, like `<>` did', () async {
      // The documented replacement for the removed not-equal operator:
      // `role <> 'admin'` and `NOT (role = 'admin')` match the same rows.
      expect(
        await matchingIds(~Tasks.role.eq(Role.admin)),
        // a2 (member) only: a3's NULL role never matches an equality.
        rows(2),
      );
      expect(
        await matchingIds(~Tasks.role.eq(Role.admin) | Tasks.role.isNull()),
        // Combine with IS NULL when NULL rows must match: a3, a4, a5 all
        // omit role.
        rows(2, 3, 4, 5),
      );
    });

    test('NOT of an OR', () async {
      // Three-valued logic: for a3/a4/a5 the role arm is NULL and the done
      // arm is false, so the OR is NULL and NOT NULL never matches. Only
      // rows with a non-NULL role could pass, and a2 is done — empty.
      expect(
        await matchingIds(
          ~(Tasks.done.eq(true) | Tasks.role.eq(Role.admin)),
        ),
        isEmpty,
      );
    });

    test('AND of two ORs', () async {
      expect(
        await matchingIds(
          (Tasks.role.eq(Role.admin) | Tasks.role.eq(Role.member)) &
              Tasks.done.eq(false),
        ),
        rows(1),
      );
    });

    test('OR of two ANDs — deeper than any OR group could express', () async {
      expect(
        await matchingIds(
          (Tasks.done.eq(true) & Tasks.count.gte(4)) | Tasks.estimate.isNull(),
        ),
        // a2 passes the AND arm; a3, a4, a5 omit estimate.
        rows(2, 3, 4, 5),
      );
      expect(
        await matchingIds(
          (Tasks.done.eq(true) & Tasks.count.gte(4)) |
              (Tasks.role.eq(Role.member) & Tasks.dueDay.eq(20)),
        ),
        rows(2),
      );
    });

    test('eq(null) as an OR alternative matches missing values', () async {
      expect(
        await matchingIds(Tasks.estimate.eq(null) | Tasks.done.eq(true)),
        // a2 is done; a3, a4, a5 omit estimate.
        rows(2, 3, 4, 5),
      );
    });

    test('isNull and NOT isNull inside OR arms', () async {
      expect(
        await matchingIds(Tasks.estimate.isNull() | Tasks.done.eq(false)),
        rows(1, 3, 4, 5),
      );
      expect(
        await matchingIds(~Tasks.estimate.isNull()),
        rows(1, 2),
      );
    });

    test('deep nesting with mixed precedence', () async {
      final condition = (~Tasks.role.eq(Role.admin) |
              (Tasks.done.eq(false) & Tasks.count.gt(1))) &
          ~Tasks.done.eq(true);
      // a1: (false | (true & true)) & true -> true.
      // a2: (true | ...) & false -> false.
      // a3: (NULL | NULL) & true -> NULL -> excluded.
      expect(await matchingIds(condition), rows(1));
    });

    test('a chained OR over three alternatives', () async {
      expect(
        await matchingIds(
          Tasks.title.startsWith('Ship') |
              Tasks.title.contains('gamma') |
              Tasks.done.eq(true),
        ),
        rows(1, 2, 3),
      );
    });

    test('chained AND over three alternatives', () async {
      expect(
        await matchingIds(
          Tasks.done.eq(false) & Tasks.count.gte(1) & Tasks.count.lt(2),
        ),
        rows(5),
      );
    });

    test('between inside OR arms', () async {
      expect(
        await matchingIds(
          Tasks.dueDay.between(5, 15) | Tasks.dueDay.between(16, 30),
        ),
        rows(1, 2),
      );
    });

    test('date-time and date fields inside OR arms keep their encoding',
        () async {
      expect(
        await matchingIds(
          Tasks.dueAt.lt(DateTime.utc(2026, 1, 3)) | Tasks.dueAt.eq(null),
        ),
        // a1 is before the cutoff; a3, a4, a5 have no dueAt.
        rows(1, 3, 4, 5),
      );
      expect(
        await matchingIds(Tasks.dueDay.gte(15) | Tasks.dueDay.eq(null)),
        rows(2, 3, 4, 5),
      );
    });

    test('real and boolean fields inside OR arms', () async {
      expect(
        await matchingIds(Tasks.estimate.gt(3) | Tasks.estimate.isNull()),
        // a2 has 4; a3, a4, a5 omit estimate.
        rows(2, 3, 4, 5),
      );
      expect(
        await matchingIds(Tasks.done.eq(true) | Tasks.done.eq(false)),
        rows(1, 2, 3, 4, 5),
      );
    });

    test('enum fields inside OR arms use their wire encoding', () async {
      expect(
        await matchingIds(
          Tasks.priority.eq(Priority.high) | Tasks.priority.eq(Priority.low),
        ),
        rows(1, 2),
      );
    });

    test('a dynamic AND-list composes like a tree', () async {
      // Filters assembled at runtime AND together, exactly like `&`.
      final filters = <Cond<Tasks>>[
        if (true) Tasks.done.eq(false),
        Tasks.count.lt(3),
      ];
      expect(
        (await tasks.query(where: filters, limit: 10)).items.map((r) => r.id),
        rows(1, 4, 5),
      );
    });

    test('runtime builder: the same predicate value runs on every terminal',
        () async {
      final Cond<Tasks> openOrOverdue =
          Tasks.done.eq(false) | Tasks.dueAt.lt(DateTime.utc(2026, 1, 3));
      expect(await matchingIds(openOrOverdue), rows(1, 3, 4, 5));
      expect(await tasks.count(where: [openOrOverdue]), 4);
      expect(
        await tasks.ids(where: [openOrOverdue], limit: 10),
        containsAll(rows(1, 3, 4, 5)),
      );
      expect(
        await tasks.sum(Tasks.count, where: [openOrOverdue]),
        2 + 0 + 1, // a1 + a4 + a5; a3's NULL contributes nothing.
      );
      expect(
        await tasks.distinct(Tasks.priority, where: [openOrOverdue]),
        hasLength(2), // high and low.
      );
    });
  });

  group('LIKE escaping inside the algebra', () {
    test('a wildcard needle matches literally inside an OR arm', () async {
      // Unescaped, '100%' would also match '100x plain'; escaping keeps it
      // literal.
      expect(
        await matchingIds(Tasks.title.startsWith('100%')),
        rows(4),
      );
      expect(
        await matchingIds(Tasks.title.contains('%')),
        rows(4),
      );
      expect(
        await matchingIds(Tasks.title.startsWith('100%') | Tasks.count.eq(1)),
        rows(4, 5),
      );
    });

    test('the escaped pattern is the bound argument', () {
      final (sql, args) = tasks.debugCompile(
        where: [Tasks.title.startsWith('100%') | Tasks.title.contains(r'\')],
        limit: 5,
      );
      expect(sql, contains('LIKE ?'));
      expect(args[0], '100\\%%');
      expect(args[1], '%\\\\%');
    });
  });

  group('the algebra inside the rest of the engine', () {
    test('keyset pagination walks a composite tree', () async {
      final condition = Tasks.count.gte(1) | Tasks.done.eq(true);
      // Matches a1 (count 2), a2 (done), a5 (count 1); a4's count 0 and
      // a3's NULL fail both arms. Ordered by title:
      // '100x plain', 'Ship alpha', 'Ship beta'.
      final firstPage = await tasks.query(
        where: [condition],
        orderBy: [Tasks.title.asc],
        limit: 2,
      );
      expect(firstPage.items.map((r) => r.id), [_at(5), _at(1)]);
      expect(firstPage.hasMore, isTrue);

      final secondPage = await tasks.queryAfter(
        firstPage.nextCursor!,
        where: [condition],
        orderBy: [Tasks.title.asc],
        limit: 2,
      );
      expect(secondPage.items.map((r) => r.id), [_at(2)]);
      expect(secondPage.hasMore, isFalse);

      final union = <String>[
        ...firstPage.items.map((r) => r.id),
        ...secondPage.items.map((r) => r.id),
      ];
      expect(union, hasLength(union.toSet().length));
      expect(
        union,
        unorderedEquals(
          (await tasks.query(
            where: [condition],
            orderBy: [Tasks.title.asc],
            limit: 10,
          ))
              .items
              .map((r) => r.id),
        ),
      );
    });

    test('a cursor is bound to the exact tree shape', () async {
      final firstPage = await tasks.query(
        where: [Tasks.count.gte(1) | Tasks.done.eq(true)],
        orderBy: [Tasks.title.asc],
        limit: 2,
      );
      // Same rows but a different tree: the cursor must be rejected instead
      // of silently resuming a differently-filtered page.
      await expectLater(
        tasks.queryAfter(
          firstPage.nextCursor!,
          where: [Tasks.count.gte(1)],
          orderBy: [Tasks.title.asc],
          limit: 2,
        ),
        throwsA(isA<StaleCursorError>()),
      );
    });

    test('watch re-evaluates a composite tree on writes', () async {
      final emissions = <List<TypedRow<Tasks>>>[];
      final Stream<List<TypedRow<Tasks>>> stream = tasks.watch(
        where: [Tasks.role.eq(Role.admin) | Tasks.done.eq(true)],
        orderBy: [Tasks.title.asc],
        limit: 10,
      );
      final sub = stream.listen(emissions.add);
      addTearDown(sub.cancel);
      await Future<void>.delayed(const Duration(milliseconds: 25));
      expect(emissions, isNotEmpty);
      expect(emissions.first.map((r) => r.id), rows(1, 2));

      // a3 gains a `done` value, so the OR tree now matches it.
      await tasks.patch(_at(3), [Tasks.done.set(true)]);
      await Future<void>.delayed(const Duration(milliseconds: 45));
      expect(emissions.last.map((r) => r.id), rows(1, 2, 3));
    });

    test('explain accepts a composite tree', () async {
      final plan = await tasks.explain(
        where: [Tasks.count.gte(1) | Tasks.done.eq(true)],
        orderBy: [Tasks.title.asc],
        limit: 5,
      );
      expect(plan, isNotEmpty);
    });

    test('scope flags AND with the tree', () {
      // The scope terms are the outermost AND chain; the tree clause is one
      // self-contained fragment ANDed after them. Widening the scope drops
      // the scope terms but never touches the tree.
      final (defaultSql, defaultArgs) = tasks.debugCompile(
        where: [Tasks.count.gte(1) | Tasks.done.eq(true)],
        limit: 5,
      );
      expect(
        defaultSql,
        contains('WHERE archived = 0 AND hidden = 0 '
            'AND (("count" >= ?) OR ("done" = ?))'),
      );
      expect(defaultArgs, <Object?>[1, true]);

      final (widenedSql, widenedArgs) = tasks.debugCompile(
        where: [Tasks.count.gte(1) | Tasks.done.eq(true)],
        includeArchived: true,
        includeHidden: true,
        limit: 5,
      );
      expect(widenedSql, isNot(contains('archived = 0')));
      expect(widenedSql, isNot(contains('hidden = 0')));
      expect(widenedSql, contains('WHERE (("count" >= ?) OR ("done" = ?))'));
      expect(widenedArgs, defaultArgs);
    });

    test('projections and countDistinct compose with the tree', () async {
      final page = await tasks.query(
        where: [Tasks.count.gte(2) | Tasks.done.eq(true)],
        select: [Tasks.title],
        limit: 10,
      );
      // Projected rows expose only the selected field — even the id getter
      // is unavailable (use ids() when ids are needed).
      expect(page.items, hasLength(2));
      final TypedRow<Tasks> projectedRow = page.items.first;
      expect(projectedRow(Tasks.title), 'Ship alpha');
      Object? thrown;
      try {
        projectedRow(Tasks.count);
      } catch (e) {
        thrown = e;
      }
      expect(thrown, isA<ValidationException>());
      expect(
        await tasks.countDistinct(
          Tasks.priority,
          where: [Tasks.role.eq(Role.admin) | Tasks.done.eq(true)],
        ),
        2,
      );
    });

    test('debugCompile composes the tree with order, scope, and keyset args',
        () {
      final (sql, args) = tasks.debugCompile(
        where: [
          Tasks.count.gt(0) & Tasks.count.lt(3) | Tasks.done.eq(true),
        ],
        orderBy: [Tasks.title.asc],
        limit: 3,
      );
      expect(
        sql,
        'SELECT * FROM "tasks" '
        'WHERE archived = 0 AND hidden = 0 '
        'AND (("count" > ? AND "count" < ?) OR ("done" = ?)) '
        'ORDER BY "title" ASC, "id" ASC '
        'LIMIT 3',
      );
      expect(args, <Object?>[0, 3, true]);
    });
  });
}
