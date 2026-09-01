import 'dart:convert';

import 'package:localpocket/src/kernel/errors.dart';
import 'package:localpocket/src/kernel/ids.dart';
import 'package:localpocket/src/kernel/local_pocket.dart';
import 'package:localpocket/src/kernel/query/query_builder/query_builder.dart';
import 'package:localpocket/src/kernel/store.dart';
import 'package:localpocket/src/kernel/compiled_query_runner.dart';
import 'package:localpocket/src/kernel/query/query_builder/predicate_tree.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';

/// Query builder tests.
void main() {
  group('query builder', () {
    late LocalPocket pocket;
    late Collection col;

    setUp(() async {
      pocket = await openPocket();
      col = pocket.collection('widgets');
    });

    test('distinct and countDistinct aggregates', () async {
      await col.put(record(id: generateRecordId(), name: 'Apple', qty: 10));
      await col.put(record(id: generateRecordId(), name: 'Banana', qty: 20));
      await col.put(record(id: generateRecordId(), name: 'Apple', qty: 30));
      await col.put(record(id: generateRecordId(), name: 'Orange', qty: 20));
      await col.put(record(id: generateRecordId(), name: 'Apple', qty: 10));

      final q = col.query();
      expect(await q.countDistinct('name'), 3);
      expect(await q.countDistinct('qty'), 3);

      final distinctNames = await q.distinct('name');
      expect(distinctNames.toSet(), {'Apple', 'Banana', 'Orange'});

      final distinctQtys = await q.distinct('qty');
      expect(distinctQtys.toSet(), {10, 20, 30});

      final scopedDistinct =
          await col.query().where('qty', gte: 20).distinct('name');
      expect(scopedDistinct.toSet(), {'Banana', 'Apple', 'Orange'});
    });
    tearDown(() => pocket.close());

    test('predicate compilation goldens', () async {
      final golden = await readGolden('test/goldens/predicate_sql.golden');

      QueryBuilder build(String name) {
        final q = col.query();
        switch (name) {
          case 'eq':
            return q.where('qty', eq: 1).limit(10);
          case 'starts_with':
            return q.where('name', startsWith: 'A').orderBy('name').limit(5);
          case 'between':
            return q.where('made_on', between: (100, 200)).limit(10);
          case 'in_values':
            return q.where('qty', inValues: [1, 2, 3]).limit(10);
          case 'or_group':
            return q.orWhere([
              {'name': 'a'},
              {'qty': 1}
            ]).limit(10);
          case 'multiple_and':
            return q.where('name', eq: 'x').where('active', eq: true).limit(10);
          case 'range_sort_desc':
            return q.where('qty', gte: 10).orderBy('qty', desc: true).limit(10);
          case 'include_archived':
            return q.where('qty', eq: 1).includeArchived().limit(10);
          default:
            throw ArgumentError(name);
        }
      }

      for (final line in golden.split('\n')) {
        final trimmed = line.trim();
        if (trimmed.isEmpty) continue;
        final sep = trimmed.indexOf(' | ');
        final name = trimmed.substring(0, trimmed.indexOf(':'));
        final sql = trimmed.substring(trimmed.indexOf(':') + 2, sep);
        final argsJson = trimmed.substring(sep + 3);

        final (actualSql, actualArgs) = build(name).debugCompile();
        expect(actualSql, sql, reason: '$name SQL golden');
        expect(jsonEncode(actualArgs), argsJson, reason: '$name args golden');
      }
    });

    test('like escaping percent underscore', () async {
      final (sql, args) = col
          .query()
          .where('name', startsWith: r'A%_B')
          .limit(5)
          .debugCompile();
      expect(args.first, r'A\%\_B%');
      expect(sql, contains(r"ESCAPE '\'"));

      final (sql2, args2) =
          col.query().where('name', contains: '50%').limit(5).debugCompile();
      expect(args2.first, r'%50\%%');

      final (sql3, args3) =
          col.query().where('name', endsWith: r'\_').limit(5).debugCompile();
      // literal backslash + literal underscore are both escaped
      expect(args3.first, r'%\\\_');
    });

    test('keyset tuple cursor sql and pagination', () async {
      final ids = <String>[];
      for (var i = 0; i < 30; i++) {
        final id = generateRecordId();
        ids.add(id);
        await col.put(record(id: id, name: 'n$i', qty: i % 7));
      }

      final page1 =
          await col.query().orderBy('qty', desc: true).limit(10).fetch();
      expect(page1.items, hasLength(10));
      expect(page1.hasNext, isTrue);
      expect(page1.nextCursor, isNotNull);

      final page2 = await col
          .query()
          .orderBy('qty', desc: true)
          .limit(10)
          .keysetAfter(page1.nextCursor!);
      final page3 = await col
          .query()
          .orderBy('qty', desc: true)
          .limit(10)
          .keysetAfter(page2.nextCursor!);
      expect(page3.hasNext, isFalse);

      final walked = [...page1.items, ...page2.items, ...page3.items];
      expect(walked.map((r) => r['id']).toSet(), hasLength(30),
          reason: 'no duplicates, no skips');

      final expected =
          await col.query().orderBy('qty', desc: true).all().fetch();
      expect([
        for (final r in walked) r['id']
      ], [
        for (final r in expected.items) r['id']
      ], reason: 'keyset order matches full fetch');
    });

    test(
        'all-null DESC keyset cursor compiles to the exhausted false predicate',
        () async {
      for (var i = 0; i < 5; i++) {
        await col.put(record(id: generateRecordId(), name: 'n$i', qty: i));
      }
      final q = col.query().orderBy('id', desc: true).limit(2);
      final page1 = await q.fetch();
      expect(page1.hasNext, isTrue);

      // Re-encode the page-1 cursor with a NULL sort value at every position:
      // NULLs sort last in DESC, so no row can follow any alternative of the
      // OR-chain and the predicate collapses to the literal false `0`.
      final decoded =
          jsonDecode(utf8.decode(base64Url.decode(page1.nextCursor!)))
              as Map<String, Object?>;
      decoded['values'] = [null];
      final degenerate = base64UrlEncode(utf8.encode(jsonEncode(decoded)));

      final compiled = QueryBuilder.compileOnly(widgetsSchema())
          .orderBy('id', desc: true)
          .limit(2);
      final plan = compiled.compilePlan(cursor: degenerate);
      expect(plan.sql, contains('AND 0'));
      expect(plan.args, isEmpty, reason: 'the false predicate binds nothing');

      final exhausted = await q.keysetAfter(degenerate);
      expect(exhausted.items, isEmpty);
      expect(exhausted.hasNext, isFalse);
      expect(exhausted.nextCursor, isNull);
    });

    test('compilePlan(cursor:) binds the keyset predicate for the web path',
        () async {
      for (var i = 0; i < 8; i++) {
        await col.put(record(id: generateRecordId(), name: 'n$i', qty: i % 3));
      }
      final q = col.query().orderBy('qty').limit(3);
      final page1 = await q.fetch();
      expect(page1.nextCursor, isNotNull);

      final compiled =
          QueryBuilder.compileOnly(widgetsSchema()).orderBy('qty').limit(3);
      final plan = compiled.compilePlan(cursor: page1.nextCursor!);

      expect(plan.operation, 'query');
      expect(plan.sql, startsWith('SELECT '));
      expect(plan.sql, contains('ORDER BY "qty" ASC, "id" ASC'));
      // The keyset predicate values are bound into the plan.
      expect(plan.args, isNotEmpty);
      expect(plan.args.first, page1.items.last['qty']);
      expect(plan.argumentCount, plan.args.length);

      // A cursor from a different sort shape is rejected at compile time.
      final otherCursor =
          (await col.query().orderBy('name').limit(3).fetch()).nextCursor!;
      expect(
        () => compiled.compilePlan(cursor: otherCursor),
        throwsA(isA<StaleCursorError>()),
      );

      // Executing the cursor plan matches the native keyset page.
      final res = await executeCompiledQuery(
        pocket,
        (sql, args) => pocket.traceQuery(sql, args),
        plan,
        pageLimit: 3,
      );
      final page2 = await q.keysetAfter(page1.nextCursor!);
      expect(
        (res['items'] as List).map((r) => (r as Map)['id']).toList(),
        page2.items.map((r) => r['id']).toList(),
      );
    });

    test('cursor rejected across sort shapes', () async {
      for (var i = 0; i < 10; i++) {
        await col.put(record(id: generateRecordId(), name: 'n$i', qty: i));
      }
      final desc =
          await col.query().orderBy('qty', desc: true).limit(5).fetch();
      expect(desc.nextCursor, isNotNull);

      // Reversed sort direction: rejected.
      await expectLater(
          col.query().orderBy('qty').limit(5).keysetAfter(desc.nextCursor!),
          throwsA(isA<StaleCursorError>()));

      // Different sort column: rejected.
      await expectLater(
          col.query().orderBy('name').limit(5).keysetAfter(desc.nextCursor!),
          throwsA(isA<StaleCursorError>()));
    });

    test('mutating a query builder leaves the original query intact', () async {
      await col.put(record(id: generateRecordId(), name: 'apple', qty: 1));
      await col.put(record(id: generateRecordId(), name: 'banana', qty: 2));

      final base = col.query().where('name', eq: 'apple').limit(10);
      final page = await base.fetch();

      expect(page.items, hasLength(1));
      expect(page.items.single['name'], 'apple');

      final mutated = base.where('qty', gt: 0);

      final originalPage = await base.fetch();
      expect(originalPage.items, hasLength(1));
      expect(originalPage.items.single['name'], 'apple');

      final mutatedPage = await mutated.fetch();
      expect(mutatedPage.items, hasLength(1));
      expect(mutatedPage.items.single['name'], 'apple');
    });

    test('cursor pagination stays tied to the original query snapshot',
        () async {
      for (var i = 0; i < 6; i++) {
        await col.put(record(id: generateRecordId(), name: 'n$i', qty: i));
      }

      final base = col.query().orderBy('qty').limit(2);
      final page1 = await base.fetch();
      expect(page1.items, hasLength(2));
      expect(page1.nextCursor, isNotNull);

      final mutated = base.where('qty', gt: 99);
      final mutatedPage = await mutated.fetch();
      expect(mutatedPage.items, isEmpty);

      final page2 = await base.keysetAfter(page1.nextCursor!);
      expect(page2.items, hasLength(2));
      expect(page2.items.first['qty'], isNot(page1.items.first['qty']));
    });

    test('limit mandatory except all', () async {
      for (var i = 0; i < 5; i++) {
        await col.put(record(id: generateRecordId(), name: 'n$i', qty: i));
      }
      await expectLater(col.query().fetch(), throwsA(isA<MissingLimitError>()));
      final all = await col.query().all().fetch();
      expect(all.items, hasLength(5));
      final limited = await col.query().limit(2).fetch();
      expect(limited.items, hasLength(2));
    });

    test('projections never read doc', () async {
      await col.put(record(id: generateRecordId(), name: 'x', qty: 1));
      final plan = await col
          .query()
          .select(['id', 'name', 'qty'])
          .where('name', eq: 'x')
          .orderBy('name')
          .limit(10)
          .explain();
      expect(plan, contains('COVERING INDEX'),
          reason:
              'projection + partial index should be index-only, got:\n$plan');
      expect(plan, isNot(contains('SCAN')));
    });

    test('aggregates count sum min max avg', () async {
      for (var i = 1; i <= 10; i++) {
        await col.put(record(id: generateRecordId(), name: 'n$i', qty: i));
      }
      final q = col.query();
      expect(await q.count(), 10);
      expect(await q.sum('qty'), 55);
      expect(await q.min('qty'), 1);
      expect(await q.max('qty'), 10);
      expect(await q.avg('qty'), 5.5);
    });

    test('compileAggregatePlan rejects an unknown aggregate function',
        () async {
      final compiled = QueryBuilder.compileOnly(widgetsSchema());
      expect(
        () => compiled.compileAggregatePlan('BOGUS', 'qty'),
        throwsA(isA<ArgumentError>()
            .having((e) => e.name, 'name', 'fn')
            .having((e) => e.invalidValue, 'invalidValue', 'BOGUS')),
      );
      // The numeric-field check runs before the function-name switch.
      expect(
        () => compiled.compileAggregatePlan('BOGUS', 'name'),
        throwsA(isA<ValidationException>()),
      );
      // Valid names still compile after a rejected one.
      expect(compiled.compileAggregatePlan('SUM', 'qty').operation, 'sum');
      expect(compiled.compileAggregatePlan('AVG', 'qty').operation, 'avg');
      expect(compiled.compileAggregatePlan('MIN', 'qty').operation, 'min');
      expect(compiled.compileAggregatePlan('MAX', 'qty').operation, 'max');
    });

    test('where with no operators is a silent no-op copy', () async {
      await col.put(record(id: generateRecordId(), name: 'apple', qty: 1));
      await col.put(record(id: generateRecordId(), name: 'banana', qty: 2));

      final base = col.query().limit(10);
      final (sqlBefore, _) = base.debugCompile();
      final noop = base.where('name');
      final (sqlAfter, argsAfter) = noop.debugCompile();

      // No predicate or argument was added for the field.
      expect(sqlAfter, sqlBefore);
      expect(argsAfter, isEmpty);

      final page = await noop.fetch();
      expect(page.items, hasLength(2), reason: 'no-op where filters nothing');

      // The field is still validated even with every operator null.
      expect(() => base.where('nope'), throwsA(isA<ValidationException>()));

      // The no-op does not poison later chained predicates.
      final filtered = noop.where('name', eq: 'apple').limit(10);
      final filteredPage = await filtered.fetch();
      expect(filteredPage.items, hasLength(1));
      expect(filteredPage.items.single['name'], 'apple');
    });

    test('empty and single row results', () async {
      final empty = await col.query().limit(5).fetch();
      expect(empty.items, isEmpty);
      expect(empty.hasNext, isFalse);
      expect(empty.nextCursor, isNull);

      await col.put(record(id: generateRecordId(), name: 'only'));
      final one = await col.query().limit(5).fetch();
      expect(one.items, hasLength(1));
      expect(one.hasNext, isFalse);
    });

    test('date range millisecond boundary is inclusive on both ends', () async {
      for (final d in [100, 199, 200, 201]) {
        await col.put(record(id: generateRecordId(), name: 'n$d', madeOn: d));
      }
      final page = await col
          .query()
          .where('made_on', between: (100, 200))
          .orderBy('made_on')
          .limit(10)
          .fetch();
      expect(page.items.map((r) => r['made_on']).toList(), [100, 199, 200],
          reason: 'inclusive [start, end] semantics');
    });
  });

  group('predicate tree structural validation', () {
    test('an unknown leaf operator is rejected before compilation', () {
      expect(
        () => compilePredicateTree(
            const LeafPredicate('name', 'bogus', <Object?>[])),
        throwsA(isA<ArgumentError>()
            .having((e) => e.message, 'message', contains('Unknown'))),
      );
    });

    test('leaves must carry the exact arity their operator needs', () {
      // eq needs exactly one argument.
      expect(
        () => compilePredicateTree(
            const LeafPredicate('name', 'eq', <Object?>['a', 'b'])),
        throwsA(isA<ArgumentError>()
            .having((e) => e.message, 'message', contains('exactly 1'))),
      );
      // between needs exactly two.
      expect(
        () => compilePredicateTree(
            const LeafPredicate('name', 'between', <Object?>['a'])),
        throwsA(isA<ArgumentError>()
            .having((e) => e.message, 'message', contains('exactly 2'))),
      );
    });

    test('an empty inValues predicate is rejected', () {
      expect(
        () => compilePredicateTree(
            const LeafPredicate('name', 'inValues', <Object?>[])),
        throwsA(isA<ArgumentError>()
            .having((e) => e.message, 'message', contains('at least one'))),
      );
    });

    test('eq(null) never reaches the compiler', () {
      expect(
        () => compilePredicateTree(
            const LeafPredicate('name', 'eq', <Object?>[null])),
        throwsA(isA<ArgumentError>()
            .having((e) => e.message, 'message', contains('isNull'))),
      );
    });

    test('empty composite predicates are rejected', () {
      expect(
        () => compilePredicateTree(const AllPredicate(<PredicateNode>[])),
        throwsA(isA<ArgumentError>()
            .having((e) => e.message, 'message', contains('at least one'))),
      );
      expect(
        () => compilePredicateTree(const AnyPredicate(<PredicateNode>[])),
        throwsA(isA<ArgumentError>()
            .having((e) => e.message, 'message', contains('at least one'))),
      );
    });

    test('LIKE wildcards are escaped inside contains predicates', () {
      final (sql, args) = compilePredicateTree(
          const LeafPredicate('name', 'contains', <Object?>['100%_x']));
      expect(sql, contains('LIKE ?'));
      expect(args, ['%100\\%\\_x%'],
          reason: '% and _ are escaped and the needle is wrapped in %');
    });

    test('LIKE wildcards are escaped inside startsWith/endsWith predicates',
        () {
      final (startSql, startArgs) = compilePredicateTree(
          const LeafPredicate('name', 'startsWith', <Object?>['100%_x']));
      expect(startArgs, ['100\\%\\_x%'],
          reason: 'startsWith appends one trailing % to the escaped needle');
      expect(startSql, contains('LIKE ?'));

      final (endSql, endArgs) = compilePredicateTree(
          const LeafPredicate('name', 'endsWith', <Object?>['100%_x']));
      expect(endArgs, ['%100\\%\\_x'],
          reason: 'endsWith prepends one leading % to the escaped needle');
      expect(endSql, contains('LIKE ?'));
    });

    test('a malformed tree through the builder surfaces the same errors', () {
      final q = QueryBuilder.compileOnly(widgetsSchema());
      expect(
        () =>
            q.wherePredicate(const LeafPredicate('name', 'bogus', <Object?>[])),
        throwsA(isA<ArgumentError>()),
      );
    });
  });
}
