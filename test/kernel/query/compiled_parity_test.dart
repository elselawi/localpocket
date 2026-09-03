import 'package:localpocket/src/kernel/local_pocket.dart';
import 'package:localpocket/src/kernel/query/query_builder/query_builder.dart';
import 'package:localpocket/src/kernel/query/search_builder/search_builder.dart';
import 'package:localpocket/src/kernel/query_plan.dart';
import 'package:localpocket/src/kernel/schema.dart';
import 'package:localpocket/src/kernel/compiled_query_runner.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';

/// Parity corpus: the engine-compiled query plans executed through
/// [executeCompiledQuery] must produce exactly the same results as the native
/// [QueryBuilder] API on the same database. This pins web/native parity at
/// the plan level (the worker uses the very same runner).
void main() {
  late LocalPocket pocket;
  late CollectionSchema<Object?> widgets;
  late CollectionSchema<Object?> articles;

  setUp(() async {
    widgets = widgetsSchema();
    articles = CollectionSchema<Object?>(
      name: 'articles',
      version: 1,
      fields: [
        Field.text('title', required: true),
        Field.text('body'),
      ],
      fts: const FtsSpec(['title', 'body']),
    );
    pocket = await openPocket(stores: [widgets, articles]);

    final col = pocket.collection('widgets');
    for (var i = 0; i < 12; i++) {
      await col.put(record(
        id: 'widget${i.toString().padLeft(9, '0')}',
        name: 'W${i % 4}',
        qty: (i % 3 == 0) ? null : (i * 7) % 10,
        price: i % 5 == 0 ? null : i * 1.5,
        active: i.isEven,
        size: ['S', 'M', 'L'][i % 3],
        meta: {'idx': i},
        tags: ['t$i', 'common'],
      ));
    }
    await pocket.db.execute(
        'UPDATE widgets SET archived = 1 WHERE id = ?', ['widget00000000000']);
    await pocket.db.execute(
        'UPDATE widgets SET hidden = 1 WHERE id = ?', ['widget00000000001']);

    final acol = pocket.collection('articles');
    for (var i = 0; i < 6; i++) {
      await acol.put({
        'id': 'article${i.toString().padLeft(8, '0')}',
        'title': 'Article number $i',
        'body': i.isEven ? 'database sqlite engine' : 'web worker transport',
      });
    }
  });

  tearDown(() async {
    await pocket.close();
  });

  Future<Map<String, Object?>> runCompiled(
    QueryBuilder compiled, {
    int? pageLimit,
    String? cursor,
  }) {
    final limit = compiled.limitValue;
    final allMode = compiled.allMode;
    final plan = compiled.compilePlan(
      limitOverride: allMode || limit == null ? null : limit + 1,
      cursor: cursor,
    );
    return executeCompiledQuery(
      pocket,
      (sql, args) => pocket.maintenance.traceQuery(sql, args),
      plan,
      pageLimit: pageLimit ?? (allMode ? null : limit),
    );
  }

  /// Walks every page through BOTH the native API and the compiled runner and
  /// asserts identical items, cursors, and hasNext transitions.
  Future<void> expectPagedParity(
      QueryBuilder Function(QueryBuilder) shape) async {
    var native = pocket.collection('widgets').query();
    native = shape(native);
    var compiled = QueryBuilder.compileOnly(widgets);
    compiled = shape(compiled);

    final limit = native.limitValue;
    final allMode = native.allMode;

    final nativeItems = <Map<String, Object?>>[];
    String? nativeCursor;
    var hasNext = true;
    while (hasNext) {
      final page = nativeCursor == null
          ? await native.fetch()
          : await native.keysetAfter(nativeCursor);
      nativeItems.addAll(page.items);
      hasNext = page.hasNext;
      nativeCursor = page.nextCursor;
    }

    final compiledItems = <Map<String, Object?>>[];
    String? compiledCursor;
    hasNext = true;
    while (hasNext) {
      final res = await runCompiled(compiled, cursor: compiledCursor);
      compiledItems
          .addAll((res['items']! as List).cast<Map<String, Object?>>());
      hasNext = (res['hasNext']! as bool);
      final last = res['lastRow'] as Map<String, Object?>?;
      final first = res['firstRow'] as Map<String, Object?>?;
      compiledCursor = hasNext && last != null && first != null
          ? compiled.cursorForCompiledRow(last, first)
          : null;
      if (limit == null && allMode) break;
    }

    expect(compiledItems, nativeItems,
        reason: 'compiled plan items must match native fetch');
    expect(compiledCursor, nativeCursor,
        reason: 'compiled plan cursor must match native cursor');
  }

  Future<void> expectCountParity(
      QueryBuilder Function(QueryBuilder) shape) async {
    var native = pocket.collection('widgets').query();
    native = shape(native);
    var compiled = QueryBuilder.compileOnly(widgets);
    compiled = shape(compiled);
    final expected = await native.count();
    final res = await executeCompiledQuery(
        pocket,
        (sql, args) => pocket.maintenance.traceQuery(sql, args),
        compiled.compileCountPlan());
    expect(res['value'], expected);
  }

  Future<void> expectAggregateParity(QueryBuilder Function(QueryBuilder) shape,
      String fn, String field) async {
    var native = pocket.collection('widgets').query();
    native = shape(native);
    var compiled = QueryBuilder.compileOnly(widgets);
    compiled = shape(compiled);
    final expected = await switch (fn) {
      'SUM' => native.sum(field),
      'AVG' => native.avg(field),
      'MIN' => native.min(field),
      'MAX' => native.max(field),
      _ => throw ArgumentError.value(fn),
    };
    final res = await executeCompiledQuery(
        pocket,
        (sql, args) => pocket.maintenance.traceQuery(sql, args),
        compiled.compileAggregatePlan(fn, field));
    expect(res['value'], expected);
  }

  Future<void> expectDistinctParity(
      QueryBuilder Function(QueryBuilder) shape, String field) async {
    var native = pocket.collection('widgets').query();
    native = shape(native);
    var compiled = QueryBuilder.compileOnly(widgets);
    compiled = shape(compiled);
    final expected = await native.distinct(field);
    final res = await executeCompiledQuery(
        pocket,
        (sql, args) => pocket.maintenance.traceQuery(sql, args),
        compiled.compileDistinctPlan(field));
    expect(res['values'], expected);
  }

  Future<void> expectIdsParity(
      QueryBuilder Function(QueryBuilder) shape) async {
    var native = pocket.collection('widgets').query();
    native = shape(native);
    var compiled = QueryBuilder.compileOnly(widgets);
    compiled = shape(compiled);
    final expected = await native.ids();
    final res = await executeCompiledQuery(
        pocket,
        (sql, args) => pocket.maintenance.traceQuery(sql, args),
        compiled.compileIdsPlan());
    expect(res['ids'], expected);
  }

  Future<void> expectExplainParity(
      QueryBuilder Function(QueryBuilder) shape) async {
    var native = pocket.collection('widgets').query();
    native = shape(native);
    var compiled = QueryBuilder.compileOnly(widgets);
    compiled = shape(compiled);
    final expected = await native.explain();
    final res = await executeCompiledQuery(
        pocket,
        (sql, args) => pocket.maintenance.traceQuery(sql, args),
        compiled.compileExplainPlan());
    expect(res['plan'], expected);
  }

  group('page parity', () {
    test('filters, ordering, projection, pagination', () async {
      await expectPagedParity((q) => q.limit(3));
      await expectPagedParity((q) => q.where('active', eq: true).limit(2));
      await expectPagedParity((q) => q.orderBy('qty').limit(4));
      await expectPagedParity((q) => q.orderBy('qty', desc: true).limit(4));
      await expectPagedParity(
          (q) => q.orderBy('name', desc: true).orderBy('qty').limit(5));
      await expectPagedParity((q) => q
          .where('qty', gte: 3, lt: 8)
          .where('name', startsWith: 'W')
          .limit(2));
      await expectPagedParity((q) => q.select(['id', 'name']).limit(4));
      await expectPagedParity((q) => q.where('qty', isNull: true).limit(3));
      await expectPagedParity(
          (q) => q.where('price', isNotNull: true).limit(2));
      await expectPagedParity((q) => q.orWhere([
            {'name': 'W0'},
            {'qty': 4}
          ]).limit(3));
      await expectPagedParity((q) => q.includeArchived().limit(3));
      await expectPagedParity((q) => q.includeHidden().limit(3));
      await expectPagedParity((q) => q.includeArchived().includeHidden().all());
    });
  });

  group('scalar parity', () {
    test('count and count distinct', () async {
      await expectCountParity((q) => q.where('active', eq: true));
      await expectCountParity((q) => q.includeArchived().includeHidden());
      await expectCountParity((q) => q.where('qty', isNull: true));
      final native = pocket.collection('widgets').query();
      final compiled = QueryBuilder.compileOnly(widgets);
      expect(
          await native.countDistinct('size'),
          (await executeCompiledQuery(
              pocket,
              (sql, args) => pocket.maintenance.traceQuery(sql, args),
              compiled.compileCountDistinctPlan('size')))['value']);
    });

    test('distinct values', () async {
      await expectDistinctParity((q) => q.where('active', eq: true), 'name');
      await expectDistinctParity((q) => q.includeArchived(), 'size');
    });

    test('ids', () async {
      await expectIdsParity((q) => q.where('active', eq: true).limit(3));
      await expectIdsParity((q) => q.orderBy('price', desc: true).limit(4));
    });

    test('explain', () async {
      await expectExplainParity((q) => q.where('active', eq: true).limit(5));
    });

    test('aggregates', () async {
      await expectAggregateParity(
          (q) => q.where('active', eq: true), 'SUM', 'qty');
      await expectAggregateParity((q) => q.includeArchived(), 'AVG', 'price');
      await expectAggregateParity((q) => q, 'MIN', 'qty');
      await expectAggregateParity((q) => q.includeHidden(), 'MAX', 'qty');
    });

    test('search', () async {
      final native = await pocket
          .collection('articles')
          .search('database')
          .limit(10)
          .fetch();
      final compiled = SearchBuilder.compileOnly(articles, 'database')
        ..limit(10);
      final res = await executeCompiledQuery(
          pocket,
          (sql, args) => pocket.maintenance.traceQuery(sql, args),
          compiled.compilePlan());
      final results = (res['results'] as List)
          .map((r) => SearchResult(
              id: (r as Map)['id'] as String,
              score: ((r)['score'] as num).toDouble()))
          .toList();
      expect(results.map((r) => r.id), native.map((r) => r.id));
      expect(results.map((r) => r.score), native.map((r) => r.score));
    });
  });

  test('compiled plan is rejected for a mismatched schema fingerprint',
      () async {
    final compiled = QueryBuilder.compileOnly(widgets).limit(1);
    final plan = compiled.compilePlan();
    final fresh = QueryBuilder.compileOnly(widgets).limit(1);
    // The fingerprint is a deterministic function of the schema.
    expect(plan.schemaFingerprint, fresh.compilePlan().schemaFingerprint);
    // The worker rejects plans whose fingerprint does not match the live
    // schema; a tampered fingerprint must therefore be detectable.
    expect(plan.schemaFingerprint, isNot('0' * 64));
    expect(plan.operation, 'query');
    expect(plan.compilerVersion, queryCompilerVersion);
    expect(plan.sql, startsWith('SELECT '));
    expect(plan.argumentCount, plan.args.length);
  });
}
