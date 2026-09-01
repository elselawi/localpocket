import 'dart:convert';

import 'package:localpocket/src/kernel/errors.dart';
import 'package:localpocket/src/kernel/ids.dart';
import 'package:localpocket/src/kernel/local_pocket.dart';
import 'package:localpocket/src/kernel/query/query_builder/query_builder.dart';
import 'package:localpocket/src/kernel/query/search_builder/search_builder.dart';
import 'package:localpocket/src/kernel/schema.dart';
import 'package:localpocket/src/kernel/store.dart';
import 'package:localpocket/src/kernel/compiled_query_runner.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';

/// Abstraction allowing test bodies to run over either native QueryBuilder or
/// the compiled-plan execution runner without duplicating test logic.
abstract class QueryHarness {
  LocalPocket get pocket;
  Collection get col;
  CollectionSchema<Object?> get schema;

  QueryHandle query();

  /// FTS search over this harness's collection.
  SearchHandle search(String term);

  Future<void> seed({
    String prefix = 'n',
    int count = 10,
    int Function(int)? qty,
    double Function(int)? price,
  }) async {
    await Future.wait([
      for (var i = 0; i < count; i++)
        col.put(record(
          id: generateRecordId(),
          name: '$prefix$i',
          qty: qty == null ? i : qty(i),
          price: price == null ? null : price(i),
        )),
    ]);
  }

  Future<List<Map<String, Object?>>> walkAll(QueryHandle Function() build,
      {int limit = 3}) async {
    final out = <Map<String, Object?>>[];
    String? cursor;
    var guard = 0;
    while (true) {
      final q = build();
      final page = cursor == null
          ? await q.limit(limit).fetch()
          : await q.limit(limit).keysetAfter(cursor);
      out.addAll(page.items);
      cursor = page.nextCursor;
      guard++;
      if (guard > 500) {
        throw StateError('keyset pagination did not terminate '
            '(guard at ${out.length} rows)');
      }
      if (cursor == null) break;
    }
    return out;
  }

  /// Walks the query forward to the final window, then continues backward
  /// from that window's first row; returns every row in declared order. One
  /// pass exercises both cursor directions and their exactness flags.
  Future<List<Map<String, Object?>>> walkFullBothDirections(
    QueryHandle Function() build, {
    int limit = 3,
  }) async {
    String? cursor;
    String? lastPrev;
    List<Map<String, Object?>> finalRows = const [];
    var guard = 0;
    while (true) {
      final q = build();
      final page = cursor == null
          ? await q.limit(limit).fetch()
          : await q.limit(limit).keysetAfter(cursor);
      // Only the FINAL window's rows stay: the backward continuation from
      // its first row re-covers every earlier page.
      finalRows = page.items;
      lastPrev = page.prevCursor;
      if (!page.hasNext) break;
      cursor = page.nextCursor;
      if (++guard > 500) {
        throw StateError('forward walk did not terminate');
      }
    }
    final backwardPages = <List<Map<String, Object?>>>[];
    var prev = lastPrev;
    while (prev != null) {
      final page = await build().limit(limit).keysetBefore(prev);
      backwardPages.add(page.items);
      prev = page.prevCursor;
      if (++guard > 1000) {
        throw StateError('backward walk did not terminate');
      }
    }
    return [
      for (final p in backwardPages.reversed) ...p,
      ...finalRows,
    ];
  }
}

/// Unified query handle implemented by both native and compiled execution.
abstract class QueryHandle {
  QueryHandle where(
    String field, {
    Object? eq,
    Object? neq,
    Object? gt,
    Object? gte,
    Object? lt,
    Object? lte,
    List<Object?>? inValues,
    (Object?, Object?)? between,
    String? startsWith,
    String? endsWith,
    String? contains,
    bool? isNull,
    bool? isNotNull,
  });

  QueryHandle orWhere(List<Map<String, Object?>> groups);
  QueryHandle orderBy(String field, {bool desc = false});
  QueryHandle limit(int n);
  QueryHandle all();
  QueryHandle select(List<String> fields);
  QueryHandle includeArchived();
  QueryHandle includeHidden();

  Future<Page> fetch();
  Future<Page> keysetAfter(String cursor);
  Future<Page> keysetBefore(String cursor);
  Future<int> count();
  Future<int> countDistinct(String field);
  Future<List<Object?>> distinct(String field);
  Future<num?> sum(String field);
  Future<num?> min(String field);
  Future<num?> max(String field);
  Future<num?> avg(String field);
  Future<List<String>> ids();
  Future<String> explain();
  (String, List<Object?>) debugCompile();
}

/// Unified FTS search handle implemented by both native and compiled execution.
abstract class SearchHandle {
  SearchHandle limit(int n);
  SearchHandle all();
  SearchHandle includeArchived();
  SearchHandle includeHidden();
  Future<List<SearchResult>> fetch();
}

class NativeSearchHandle implements SearchHandle {
  NativeSearchHandle(this._builder);
  final SearchBuilder _builder;

  @override
  SearchHandle limit(int n) {
    _builder.limit(n);
    return this;
  }

  @override
  SearchHandle all() {
    _builder.all();
    return this;
  }

  @override
  SearchHandle includeArchived() {
    _builder.includeArchived();
    return this;
  }

  @override
  SearchHandle includeHidden() {
    _builder.includeHidden();
    return this;
  }

  @override
  Future<List<SearchResult>> fetch() => _builder.fetch();
}

class CompiledSearchHandle implements SearchHandle {
  CompiledSearchHandle(this._pocket, CollectionSchema schema, String term)
      : _builder = SearchBuilder.compileOnly(schema, term);
  final LocalPocket _pocket;
  final SearchBuilder _builder;

  @override
  SearchHandle limit(int n) {
    _builder.limit(n);
    return this;
  }

  @override
  SearchHandle all() {
    _builder.all();
    return this;
  }

  @override
  SearchHandle includeArchived() {
    _builder.includeArchived();
    return this;
  }

  @override
  SearchHandle includeHidden() {
    _builder.includeHidden();
    return this;
  }

  @override
  Future<List<SearchResult>> fetch() async {
    final res = await executeCompiledQuery(
      _pocket,
      (sql, args) => _pocket.traceQuery(sql, args),
      _builder.compilePlan(),
    );
    return [
      for (final raw in (res['results'] as List))
        SearchResult(
          id: (raw as Map)['id'] as String,
          score: ((raw)['score'] as num).toDouble(),
        )
    ];
  }
}

class NativeQueryHandle implements QueryHandle {
  NativeQueryHandle(this._builder);
  QueryBuilder _builder;

  @override
  QueryHandle where(
    String field, {
    Object? eq,
    Object? neq,
    Object? gt,
    Object? gte,
    Object? lt,
    Object? lte,
    List<Object?>? inValues,
    (Object?, Object?)? between,
    String? startsWith,
    String? endsWith,
    String? contains,
    bool? isNull,
    bool? isNotNull,
  }) {
    // QueryBuilder is immutable: every DSL method returns a new copy that
    // must be retained, or the predicate is silently dropped.
    _builder = _builder.where(
      field,
      eq: eq,
      neq: neq,
      gt: gt,
      gte: gte,
      lt: lt,
      lte: lte,
      inValues: inValues,
      between: between,
      startsWith: startsWith,
      endsWith: endsWith,
      contains: contains,
      isNull: isNull,
      isNotNull: isNotNull,
    );
    return this;
  }

  @override
  QueryHandle orWhere(List<Map<String, Object?>> groups) {
    _builder = _builder.orWhere(groups);
    return this;
  }

  @override
  QueryHandle orderBy(String field, {bool desc = false}) {
    _builder = _builder.orderBy(field, desc: desc);
    return this;
  }

  @override
  QueryHandle limit(int n) {
    _builder = _builder.limit(n);
    return this;
  }

  @override
  QueryHandle all() {
    _builder = _builder.all();
    return this;
  }

  @override
  QueryHandle select(List<String> fields) {
    _builder = _builder.select(fields);
    return this;
  }

  @override
  QueryHandle includeArchived() {
    _builder = _builder.includeArchived();
    return this;
  }

  @override
  QueryHandle includeHidden() {
    _builder = _builder.includeHidden();
    return this;
  }

  @override
  Future<Page> fetch() => _builder.fetch();

  @override
  Future<Page> keysetAfter(String cursor) => _builder.keysetAfter(cursor);

  @override
  Future<Page> keysetBefore(String cursor) => _builder.keysetBefore(cursor);

  @override
  Future<int> count() => _builder.count();

  @override
  Future<int> countDistinct(String field) => _builder.countDistinct(field);

  @override
  Future<List<Object?>> distinct(String field) => _builder.distinct(field);

  @override
  Future<num?> sum(String field) => _builder.sum(field);

  @override
  Future<num?> min(String field) => _builder.min(field);

  @override
  Future<num?> max(String field) => _builder.max(field);

  @override
  Future<num?> avg(String field) => _builder.avg(field);

  @override
  Future<List<String>> ids() => _builder.ids();

  @override
  Future<String> explain() => _builder.explain();

  @override
  (String, List<Object?>) debugCompile() => _builder.debugCompile();
}

class CompiledQueryHandle implements QueryHandle {
  CompiledQueryHandle(this._pocket, CollectionSchema schema)
      : _builder = QueryBuilder.compileOnly(schema);
  final LocalPocket _pocket;
  QueryBuilder _builder;

  @override
  QueryHandle where(
    String field, {
    Object? eq,
    Object? neq,
    Object? gt,
    Object? gte,
    Object? lt,
    Object? lte,
    List<Object?>? inValues,
    (Object?, Object?)? between,
    String? startsWith,
    String? endsWith,
    String? contains,
    bool? isNull,
    bool? isNotNull,
  }) {
    // QueryBuilder is immutable: every DSL method returns a new copy that
    // must be retained, or the predicate is silently dropped.
    _builder = _builder.where(
      field,
      eq: eq,
      neq: neq,
      gt: gt,
      gte: gte,
      lt: lt,
      lte: lte,
      inValues: inValues,
      between: between,
      startsWith: startsWith,
      endsWith: endsWith,
      contains: contains,
      isNull: isNull,
      isNotNull: isNotNull,
    );
    return this;
  }

  @override
  QueryHandle orWhere(List<Map<String, Object?>> groups) {
    _builder = _builder.orWhere(groups);
    return this;
  }

  @override
  QueryHandle orderBy(String field, {bool desc = false}) {
    _builder = _builder.orderBy(field, desc: desc);
    return this;
  }

  @override
  QueryHandle limit(int n) {
    _builder = _builder.limit(n);
    return this;
  }

  @override
  QueryHandle all() {
    _builder = _builder.all();
    return this;
  }

  @override
  QueryHandle select(List<String> fields) {
    _builder = _builder.select(fields);
    return this;
  }

  @override
  QueryHandle includeArchived() {
    _builder = _builder.includeArchived();
    return this;
  }

  @override
  QueryHandle includeHidden() {
    _builder = _builder.includeHidden();
    return this;
  }

  @override
  Future<Page> fetch({String? cursor}) async {
    final limit = _builder.limitValue;
    final allMode = _builder.allMode;
    final plan = _builder.compilePlan(
      limitOverride: allMode || limit == null ? null : limit + 1,
      cursor: cursor,
    );
    final res = await executeCompiledQuery(
      _pocket,
      (sql, args) => _pocket.traceQuery(sql, args),
      plan,
      pageLimit: allMode ? null : limit,
    );
    final items = (res['items'] as List).cast<Map<String, Object?>>();
    final hasNext = res['hasNext'] as bool;
    final last = res['lastRow'] as Map<String, Object?>?;
    final first = res['firstRow'] as Map<String, Object?>?;
    final nextCursor = hasNext && last != null && first != null
        ? _builder.cursorForCompiledRow(last, first)
        : null;
    final hasPrev = cursor != null && items.isNotEmpty;
    return Page(
      items: items,
      nextCursor: nextCursor,
      hasNext: hasNext,
      hasPrev: hasPrev,
      prevCursor: hasPrev && last != null && first != null
          ? _builder.cursorForCompiledRow(last, first)
          : null,
    );
  }

  @override
  Future<Page> keysetAfter(String cursor) => fetch(cursor: cursor);

  @override
  Future<Page> keysetBefore(String cursor) async {
    final limit = _builder.limitValue;
    final allMode = _builder.allMode;
    final plan = _builder.compilePlan(
      limitOverride: allMode || limit == null ? null : limit + 1,
      cursor: cursor,
      backward: true,
    );
    final res = await executeCompiledQuery(
      _pocket,
      (sql, args) => _pocket.traceQuery(sql, args),
      plan,
      pageLimit: allMode ? null : limit,
    );
    final itemsR = (res['items'] as List).cast<Map<String, Object?>>();
    final hasPrev = res['hasNext'] as bool;
    if (itemsR.isEmpty) {
      return const Page(items: [], hasNext: false, hasPrev: false);
    }
    final last = res['lastRow'] as Map<String, Object?>?;
    final first = res['firstRow'] as Map<String, Object?>?;
    // The compiled walk runs the flipped order: its first row is the
    // window's last row in the declared order, and vice versa.
    final bidirectional = _builder.cursorForCompiledRow(first!, last!);
    final probePlan =
        _builder.compilePlan(limitOverride: 1, cursor: bidirectional);
    final probeRes = await executeCompiledQuery(
      _pocket,
      (sql, args) => _pocket.traceQuery(sql, args),
      probePlan,
      pageLimit: 1,
    );
    final hasNext = ((probeRes['items'] as List?) ?? const []).isNotEmpty;
    return Page(
      items: itemsR.reversed.toList(),
      hasNext: hasNext,
      nextCursor: hasNext ? bidirectional : null,
      hasPrev: hasPrev,
      prevCursor: hasPrev ? bidirectional : null,
    );
  }

  @override
  Future<int> count() async {
    final res = await executeCompiledQuery(
      _pocket,
      (sql, args) => _pocket.traceQuery(sql, args),
      _builder.compileCountPlan(),
    );
    return res['value'] as int;
  }

  @override
  Future<int> countDistinct(String field) async {
    final res = await executeCompiledQuery(
      _pocket,
      (sql, args) => _pocket.traceQuery(sql, args),
      _builder.compileCountDistinctPlan(field),
    );
    return res['value'] as int;
  }

  @override
  Future<List<Object?>> distinct(String field) async {
    final res = await executeCompiledQuery(
      _pocket,
      (sql, args) => _pocket.traceQuery(sql, args),
      _builder.compileDistinctPlan(field),
    );
    return (res['values'] as List).cast<Object?>();
  }

  @override
  Future<num?> sum(String field) => _aggregate('SUM', field);

  @override
  Future<num?> min(String field) => _aggregate('MIN', field);

  @override
  Future<num?> max(String field) => _aggregate('MAX', field);

  @override
  Future<num?> avg(String field) => _aggregate('AVG', field);

  Future<num?> _aggregate(String fn, String field) async {
    final res = await executeCompiledQuery(
      _pocket,
      (sql, args) => _pocket.traceQuery(sql, args),
      _builder.compileAggregatePlan(fn, field),
    );
    return res['value'] as num?;
  }

  @override
  Future<List<String>> ids() async {
    final res = await executeCompiledQuery(
      _pocket,
      (sql, args) => _pocket.traceQuery(sql, args),
      _builder.compileIdsPlan(),
    );
    return (res['ids'] as List).cast<String>();
  }

  @override
  Future<String> explain() async {
    final res = await executeCompiledQuery(
      _pocket,
      (sql, args) => _pocket.traceQuery(sql, args),
      _builder.compileExplainPlan(),
    );
    return res['plan'] as String;
  }

  @override
  (String, List<Object?>) debugCompile() => _builder.debugCompile();
}

class NativeQueryHarness extends QueryHarness {
  NativeQueryHarness(this.pocket, this.col, this.schema);
  @override
  final LocalPocket pocket;
  @override
  final Collection col;
  @override
  final CollectionSchema<Object?> schema;

  @override
  QueryHandle query() => NativeQueryHandle(col.query());

  @override
  SearchHandle search(String term) => NativeSearchHandle(col.search(term));
}

class CompiledQueryHarness extends QueryHarness {
  CompiledQueryHarness(this.pocket, this.col, this.schema);
  @override
  final LocalPocket pocket;
  @override
  final Collection col;
  @override
  final CollectionSchema<Object?> schema;

  @override
  QueryHandle query() => CompiledQueryHandle(pocket, schema);

  @override
  SearchHandle search(String term) =>
      CompiledSearchHandle(pocket, schema, term);
}

List<String> idsOf(List<Map<String, Object?>> rows) =>
    [for (final r in rows) r['id']! as String];

String encodeCursor(Map<String, Object?> payload) =>
    base64UrlEncode(utf8.encode(jsonEncode(payload)));

/// Reusable suite covering all query edges for both Native and Compiled harnesses.
///
/// [vaultHarnessProvider] supplies a field-encrypted harness for the encrypted
/// field edges; [ftsHarnessProvider] supplies an FTS harness for search edges.
void runQueryEdgesCorpus(
  QueryHarness Function() harnessProvider, {
  Future<QueryHarness> Function()? vaultHarnessProvider,
  Future<QueryHarness> Function()? ftsHarnessProvider,
}) {
  late QueryHarness h;
  late QueryHarness vh;
  late QueryHarness fh;

  setUp(() {
    h = harnessProvider();
  });
  if (vaultHarnessProvider != null) {
    setUp(() async {
      vh = await vaultHarnessProvider();
      addTearDown(() => vh.pocket.close());
    });
  }
  if (ftsHarnessProvider != null) {
    setUp(() async {
      fh = await ftsHarnessProvider();
      addTearDown(() => fh.pocket.close());
    });
  }

  group('predicate operator matrix', () {
    test('comparison operators eq neq gt gte lt lte', () async {
      await h.col.put(record(id: generateRecordId(), name: 'a', qty: 1));
      await h.col.put(record(id: generateRecordId(), name: 'b', qty: 5));
      await h.col.put(record(id: generateRecordId(), name: 'c', qty: 10));
      await h.col.put(record(id: generateRecordId(), name: 'd', qty: 20));

      Future<List<Object?>> qtys(QueryHandle q) async =>
          [for (final r in (await q.limit(10).fetch()).items) r['qty']];

      expect(await qtys(h.query().where('qty', eq: 5)), [5]);
      expect((await qtys(h.query().where('qty', neq: 5))).toSet(), {1, 10, 20});
      expect(
          await qtys(h.query().where('qty', gt: 5).orderBy('qty')), [10, 20]);
      expect(await qtys(h.query().where('qty', gte: 5).orderBy('qty')),
          [5, 10, 20]);
      expect(await qtys(h.query().where('qty', lt: 10).orderBy('qty')), [1, 5]);
      expect(await qtys(h.query().where('qty', lte: 10).orderBy('qty')),
          [1, 5, 10]);

      expect(await qtys(h.query().where('name', neq: 'a')), hasLength(3));
      expect(await qtys(h.query().where('name', gt: 'a')), hasLength(3));
      final ltNames = await h.query().where('name', lt: 'b').limit(10).fetch();
      expect(ltNames.items.map((r) => r['name']), ['a']);
    });

    test('inValues empty and non-empty', () async {
      await h.col.put(record(id: generateRecordId(), name: 'a', qty: 1));
      await h.col.put(record(id: generateRecordId(), name: 'b', qty: 2));
      await h.col.put(record(id: generateRecordId(), name: 'c', qty: 3));

      final q =
          h.query().where('qty', inValues: [1, 3]).orderBy('qty').limit(10);
      expect((await q.fetch()).items.map((r) => r['qty']).toList(), [1, 3]);
      final (sql, args) = q.debugCompile();
      expect(sql, contains('IN (?, ?)'));
      expect(args, [1, 3]);

      final empty =
          await h.query().where('qty', inValues: <Object?>[]).limit(10).fetch();
      expect(empty.items, isEmpty);
    });

    test('between is inclusive [start, end]', () async {
      for (final d in [0, 9, 10, 19, 20, 29, 30]) {
        await h.col.put(record(id: generateRecordId(), name: 'n$d', qty: d));
      }
      final page = await h
          .query()
          .where('qty', between: (10, 30))
          .orderBy('qty')
          .limit(10)
          .fetch();
      // Both boundaries are matched; only strictly-outside rows are dropped.
      expect(page.items.map((r) => r['qty']).toList(), [10, 19, 20, 29, 30]);
    });

    test('isNull and isNotNull', () async {
      await h.col.put(record(id: generateRecordId(), name: 'with', qty: 5));
      await h.col
          .put(record(id: generateRecordId(), name: 'without', qty: null));

      final nulls =
          await h.query().where('qty', isNull: true).limit(10).fetch();
      expect(nulls.items.map((r) => r['name']), ['without']);

      final nonNulls =
          await h.query().where('qty', isNotNull: true).limit(10).fetch();
      expect(nonNulls.items.map((r) => r['name']), ['with']);

      final (sql, _) =
          h.query().where('qty', isNull: true).limit(10).debugCompile();
      expect(sql, contains('"qty" IS NULL'));
      final (sql2, _) =
          h.query().where('qty', isNotNull: true).limit(10).debugCompile();
      expect(sql2, contains('"qty" IS NOT NULL'));
    });

    test('like modes startsWith endsWith contains', () async {
      await h.col
          .put(record(id: generateRecordId(), name: 'alpha beta', qty: 1));
      await h.col
          .put(record(id: generateRecordId(), name: 'beta gamma', qty: 2));
      await h.col
          .put(record(id: generateRecordId(), name: 'gamma alpha', qty: 3));

      final starts =
          await h.query().where('name', startsWith: 'alp').limit(10).fetch();
      expect(starts.items.map((r) => r['name']), ['alpha beta']);

      final ends =
          await h.query().where('name', endsWith: 'mma').limit(10).fetch();
      expect(ends.items.map((r) => r['name']), ['beta gamma']);

      final contains =
          await h.query().where('name', contains: 'eta').limit(10).fetch();
      expect(contains.items.map((r) => r['name']).toSet(),
          {'alpha beta', 'beta gamma'});
    });

    test('like escaping literal wildcards and control chars', () async {
      await h.col.put(record(id: generateRecordId(), name: r'A\B', qty: 1));
      await h.col.put(record(id: generateRecordId(), name: '50% off', qty: 2));
      await h.col
          .put(record(id: generateRecordId(), name: 'snake_case', qty: 3));
      await h.col
          .put(record(id: generateRecordId(), name: 'line\nbreak', qty: 4));
      await h.col.put(record(id: generateRecordId(), name: 'plain', qty: 5));

      var found =
          await h.query().where('name', contains: '_').limit(10).fetch();
      expect(found.items.map((r) => r['name']), ['snake_case']);

      found = await h.query().where('name', contains: '%').limit(10).fetch();
      expect(found.items.map((r) => r['name']), ['50% off']);

      found = await h.query().where('name', contains: r'\').limit(10).fetch();
      expect(found.items.map((r) => r['name']), [r'A\B']);

      found = await h.query().where('name', contains: '\n').limit(10).fetch();
      expect(found.items.map((r) => r['name']), ['line\nbreak']);

      found = await h.query().where('name', contains: '%').limit(10).fetch();
      expect(found.items, hasLength(1));

      final (sql, args) =
          h.query().where('name', startsWith: r'A%B_C').limit(5).debugCompile();
      expect(args.first, r'A\%B\_C%');
      expect(sql, contains(r"ESCAPE '\'"));
    });

    test('multiple operators on one field AND-combined', () async {
      await h.col.put(record(id: generateRecordId(), name: 'a', qty: 1));
      await h.col.put(record(id: generateRecordId(), name: 'b', qty: 5));
      await h.col.put(record(id: generateRecordId(), name: 'c', qty: 9));

      final page = await h
          .query()
          .where('qty', gte: 1, lt: 9)
          .orderBy('qty')
          .limit(10)
          .fetch();
      expect(page.items.map((r) => r['qty']), [1, 5]);

      final (sql, args) =
          h.query().where('qty', gte: 1, lt: 9).limit(10).debugCompile();
      expect(sql, contains('"qty" >= ?'));
      expect(sql, contains('"qty" < ?'));
      expect(args, [1, 9]);
    });

    test('empty or-groups are no-ops and mixed and/or composes', () async {
      await h.col.put(record(id: generateRecordId(), name: 'a', qty: 1));
      await h.col.put(record(id: generateRecordId(), name: 'b', qty: 2));
      await h.col.put(record(id: generateRecordId(), name: 'c', qty: 3));

      final none =
          await h.query().orWhere(<Map<String, Object?>>[]).limit(10).fetch();
      expect(none.items, hasLength(3));
      final emptyGroup =
          await h.query().orWhere([<String, Object?>{}]).limit(10).fetch();
      expect(emptyGroup.items, hasLength(3));

      final mixed = await h
          .query()
          .orWhere([
            {'name': 'a'},
            {'qty': 3},
          ])
          .where('qty', gte: 1)
          .limit(10)
          .fetch();
      expect(mixed.items.map((r) => r['name']).toSet(), {'a', 'c'});

      final grouped = await h
          .query()
          .orWhere([
            {'name': 'a', 'qty': 1},
            {'qty': 3},
          ])
          .limit(10)
          .fetch();
      expect(grouped.items.map((r) => r['name']).toSet(), {'a', 'c'});
    });
  });

  group('unknown and encrypted query fields', () {
    test('unknown fields rejected before SQL', () async {
      await h.col.put(record(id: generateRecordId(), name: 'a', qty: 1));

      expect(
          () => h.query().where('nope', eq: 1),
          throwsA(isA<ValidationException>()
              .having((e) => e.field, 'field', 'nope')
              .having((e) => e.message, 'message', contains('Unknown field'))));
      expect(
          () => h.query().orderBy('nope'),
          throwsA(isA<ValidationException>()
              .having((e) => e.field, 'field', 'nope')));
      expect(
          () => h.query().orWhere([
                {'nope': 1}
              ]),
          throwsA(isA<ValidationException>()
              .having((e) => e.field, 'field', 'nope')));

      await expectLater(
          h.query().countDistinct('nope'), throwsA(isA<ValidationException>()));
      await expectLater(
          h.query().distinct('nope'), throwsA(isA<ValidationException>()));
      await expectLater(
          h.query().sum('nope'), throwsA(isA<ValidationException>()));
      await expectLater(
          h.query().min('nope'), throwsA(isA<ValidationException>()));
      await expectLater(
          h.query().max('nope'), throwsA(isA<ValidationException>()));
      await expectLater(
          h.query().avg('nope'), throwsA(isA<ValidationException>()));

      final someId = (await h.query().limit(1).ids()).single;
      final byId = await h.query().where('id', eq: someId).limit(10).fetch();
      expect(byId.items, hasLength(1));
      expect(byId.items.single['id'], someId);
      expect(await h.query().where('archived', eq: false).count(),
          greaterThanOrEqualTo(1));
    });
  });

  group('limits scopes ordering cursor modes', () {
    test('limit edge cases', () async {
      await h.seed(count: 5);
      final zero = await h.query().limit(0).fetch();
      expect(zero.items, isEmpty);
      expect(zero.hasNext, isFalse);
      expect(zero.nextCursor, isNull);

      expect(() => h.query().limit(-1), throwsA(isA<ValidationException>()));

      final repeated = await h.query().limit(1).limit(4).fetch();
      expect(repeated.items, hasLength(4));

      final all = await h.query().limit(1).all().fetch();
      expect(all.items, hasLength(5));
      expect(all.hasNext, isFalse);

      final all2 = await h.query().all().limit(1).fetch();
      expect(all2.items, hasLength(5));

      await expectLater(h.query().fetch(), throwsA(isA<MissingLimitError>()));
    });

    test('default id tiebreaker and explicit id ordering', () async {
      final names = ['z', 'a', 'm', 'b'];
      for (final n in names) {
        await h.col.put(record(id: generateRecordId(), name: n, qty: 1));
      }
      final (sql, _) = h.query().orderBy('name').limit(5).debugCompile();
      expect(sql, contains('ORDER BY "name" ASC, "id" ASC'));

      final (sql2, _) = h.query().orderBy('id').limit(5).debugCompile();
      expect(sql2, contains('ORDER BY "id" ASC'));
      expect('ORDER BY "id" ASC'.allMatches(sql2), hasLength(1));

      final walked = await h.walkAll(() => h.query().orderBy('name'), limit: 2);
      final expected = await h.query().orderBy('name').all().fetch();
      expect(idsOf(walked), idsOf(expected.items));
    });

    test('mixed direction ordering', () async {
      for (var i = 0; i < 8; i++) {
        await h.col
            .put(record(id: generateRecordId(), name: 'n$i', qty: i % 3));
      }
      final (sql, _) = h
          .query()
          .orderBy('qty', desc: true)
          .orderBy('name')
          .limit(5)
          .debugCompile();
      expect(sql, contains('ORDER BY "qty" DESC, "name" ASC, "id" ASC'));

      final walked = await h.walkAll(
          () => h.query().orderBy('qty', desc: true).orderBy('name'),
          limit: 3);
      final expected = await h
          .query()
          .orderBy('qty', desc: true)
          .orderBy('name')
          .all()
          .fetch();
      expect(idsOf(walked), idsOf(expected.items));
    });

    test('archived and hidden scope combos', () async {
      final visible = generateRecordId();
      final archived = generateRecordId();
      final hidden = generateRecordId();
      await h.col.put(record(id: visible, name: 'visible', qty: 1));
      await h.col.put(record(id: archived, name: 'archived', qty: 1));
      await h.col.put(record(id: hidden, name: 'hidden', qty: 1));
      await h.pocket.db
          .execute('UPDATE widgets SET archived = 1 WHERE id = ?', [archived]);
      await h.pocket.db
          .execute('UPDATE widgets SET hidden = 1 WHERE id = ?', [hidden]);

      Future<Set<String>> ids(QueryHandle q) async =>
          (await q.limit(10).fetch())
              .items
              .map((r) => r['id'] as String)
              .toSet();

      expect(await ids(h.query()), {visible});
      expect(await ids(h.query().includeArchived()), {visible, archived});
      expect(await ids(h.query().includeHidden()), {visible, hidden});
      expect(await ids(h.query().includeArchived().includeHidden()),
          {visible, archived, hidden});
      expect(await h.query().count(), 1);
      expect(await h.query().includeArchived().count(), 2);
      expect(await h.query().includeArchived().includeHidden().count(), 3);
      final walked =
          await h.walkAll(() => h.query().includeArchived(), limit: 2);
      expect(idsOf(walked).toSet(), {visible, archived});
    });

    test('ids and explain respect filters and ordering', () async {
      await h.seed(count: 6);
      final ids = await h
          .query()
          .where('qty', gte: 2)
          .orderBy('qty', desc: true)
          .limit(3)
          .ids();
      expect(ids, hasLength(3));
      final rows = await h
          .query()
          .where('qty', gte: 2)
          .orderBy('qty', desc: true)
          .limit(3)
          .fetch();
      expect(ids, [for (final r in rows.items) r['id']]);

      final plan = await h
          .query()
          .where('qty', gte: 2)
          .orderBy('qty')
          .limit(3)
          .explain();
      expect(plan, isNotEmpty);
    });

    test('projection + keyset cursor combination', () async {
      await h.seed(count: 12);
      final walked = await h.walkAll(
          () => h.query().select(['id', 'name']).orderBy('qty'),
          limit: 4);
      expect(walked, hasLength(12));
      for (final r in walked) {
        expect(r.keys.toSet(), {'id', 'name'},
            reason: 'projection must not leak other columns');
      }
      final expected =
          await h.query().select(['id', 'name']).orderBy('qty').all().fetch();
      expect(idsOf(walked), idsOf(expected.items));
    });
  });

  group('cursor shape validation and malformed cursors', () {
    test('cursor rejected across different filters, scope and projection',
        () async {
      await h.seed(count: 8);
      final base =
          await h.query().where('qty', gte: 0).orderBy('qty').limit(3).fetch();
      final cursor = base.nextCursor!;

      await expectLater(
          h
              .query()
              .where('name', eq: 'n1')
              .orderBy('qty')
              .limit(3)
              .keysetAfter(cursor),
          throwsA(isA<StaleCursorError>()));
      await expectLater(
          h
              .query()
              .where('qty', gte: 1)
              .orderBy('qty')
              .limit(3)
              .keysetAfter(cursor),
          throwsA(isA<StaleCursorError>()));
      await expectLater(
          h
              .query()
              .orWhere([
                {'qty': 1},
                {'qty': 2},
              ])
              .orderBy('qty')
              .limit(3)
              .keysetAfter(cursor),
          throwsA(isA<StaleCursorError>()));
      await expectLater(
          h
              .query()
              .includeArchived()
              .where('qty', gte: 0)
              .orderBy('qty')
              .limit(3)
              .keysetAfter(cursor),
          throwsA(isA<StaleCursorError>()));
      await expectLater(
          h
              .query()
              .select(['id', 'name'])
              .where('qty', gte: 0)
              .orderBy('qty')
              .limit(3)
              .keysetAfter(cursor),
          throwsA(isA<StaleCursorError>()));

      final again = await h
          .query()
          .where('qty', gte: 0)
          .orderBy('qty')
          .limit(3)
          .keysetAfter(cursor);
      expect(again.items, isNotEmpty);
    });

    test('cursor rejected across sort direction and column', () async {
      await h.seed(count: 6);
      final desc = (await h.query().orderBy('qty', desc: true).limit(2).fetch())
          .nextCursor!;
      await expectLater(h.query().orderBy('qty').limit(2).keysetAfter(desc),
          throwsA(isA<StaleCursorError>()));
      final byName =
          (await h.query().orderBy('name').limit(2).fetch()).nextCursor!;
      await expectLater(h.query().orderBy('qty').limit(2).keysetAfter(byName),
          throwsA(isA<StaleCursorError>()));
    });

    test('malformed cursors all become StaleCursorError', () async {
      await h.seed(count: 4);
      final valid =
          (await h.query().orderBy('qty').limit(2).fetch()).nextCursor!;
      final decoded = (jsonDecode(utf8.decode(base64Url.decode(valid))) as Map)
          .cast<String, Object?>();

      final malformed = <String, String>{
        'not base64': '!!!not-base64!!!',
        'bad utf8': base64UrlEncode([0xff, 0xfe, 0x00, 0x80]),
        'not json': base64UrlEncode(utf8.encode('just a string')),
        'not map': base64UrlEncode(utf8.encode('[1, 2, 3]')),
        'empty map': encodeCursor({}),
        'sort not list': encodeCursor({...decoded, 'sort': 'qty:a'}),
        'sort wrong types': encodeCursor({
          ...decoded,
          'sort': [1, 2]
        }),
        'values not list': encodeCursor({...decoded, 'values': 5}),
        'values wrong types': encodeCursor({
          ...decoded,
          'values': [
            {'nested': true},
            3
          ],
        }),
        'values count mismatch': encodeCursor({
          ...decoded,
          'values': [1],
        }),
        'wrong store': encodeCursor({...decoded, 'store': 'other'}),
        'wrong schemaVer': encodeCursor({...decoded, 'schemaVer': 99}),
        'wrong sort': encodeCursor({
          ...decoded,
          'sort': ['name:a', 'id:a']
        }),
      };

      for (final entry in malformed.entries) {
        await expectLater(
          h.query().orderBy('qty').limit(2).keysetAfter(entry.value),
          throwsA(isA<StaleCursorError>()),
          reason: '${entry.key} must surface as StaleCursorError',
        );
      }

      final withExtra = encodeCursor({...decoded, 'extra': 'ignored'});
      final ok = await h.query().orderBy('qty').limit(2).keysetAfter(withExtra);
      expect(ok.items, isNotEmpty);

      final withNull = encodeCursor({
        ...decoded,
        'values': [null, 'someid']
      });
      final ok2 = await h.query().orderBy('qty').limit(2).keysetAfter(withNull);
      expect(ok2.items, isNotEmpty);
    });
  });

  group('nullable keyset pagination', () {
    test('ascending walk with nulls first matches unpaged order', () async {
      for (var i = 0; i < 12; i++) {
        await h.col.put(record(
          id: generateRecordId(),
          name: 'n$i',
          qty: i % 3 == 0 ? null : i,
        ));
      }
      final walked = await h.walkAll(() => h.query().orderBy('qty'), limit: 3);
      final expected = await h.query().orderBy('qty').all().fetch();
      expect(idsOf(walked), idsOf(expected.items),
          reason: 'no dup/skip/premature termination');
      final nullCount = walked.take(4).where((r) => r['qty'] == null).length;
      expect(nullCount, 4);
    });

    test('descending walk with nulls last matches unpaged order', () async {
      for (var i = 0; i < 12; i++) {
        await h.col.put(record(
          id: generateRecordId(),
          name: 'n$i',
          qty: i % 3 == 0 ? null : i,
        ));
      }
      final walked =
          await h.walkAll(() => h.query().orderBy('qty', desc: true), limit: 4);
      final expected = await h.query().orderBy('qty', desc: true).all().fetch();
      expect(idsOf(walked), idsOf(expected.items));
      final lastFour = walked.skip(walked.length - 4).toList();
      expect(lastFour.every((r) => r['qty'] == null), isTrue);
    });

    test('all-null pages do not loop and do not skip', () async {
      for (var i = 0; i < 9; i++) {
        await h.col.put(record(id: generateRecordId(), name: 'n$i', qty: null));
      }
      final walked = await h.walkAll(() => h.query().orderBy('qty'), limit: 3);
      expect(walked, hasLength(9));
      expect(idsOf(walked).toSet(), hasLength(9), reason: 'no duplicates');
      final expected = await h.query().orderBy('qty').all().fetch();
      expect(idsOf(walked), idsOf(expected.items));
    });

    test('multi-column walk with null in secondary key', () async {
      for (var i = 0; i < 10; i++) {
        await h.col.put(record(
          id: generateRecordId(),
          name: 'n$i',
          qty: i % 3,
          size: i % 2 == 0 ? null : (['S', 'M', 'L'][i % 3]),
        ));
      }
      final walked = await h
          .walkAll(() => h.query().orderBy('qty').orderBy('size'), limit: 3);
      final expected =
          await h.query().orderBy('qty').orderBy('size').all().fetch();
      expect(idsOf(walked), idsOf(expected.items));

      final walkedDesc = await h.walkAll(
          () =>
              h.query().orderBy('qty', desc: true).orderBy('size', desc: true),
          limit: 3);
      final expectedDesc = await h
          .query()
          .orderBy('qty', desc: true)
          .orderBy('size', desc: true)
          .all()
          .fetch();
      expect(idsOf(walkedDesc), idsOf(expectedDesc.items));
    });

    test('repeated values and id tiebreak under nulls', () async {
      for (var i = 0; i < 20; i++) {
        await h.col.put(record(
          id: generateRecordId(),
          name: 'n$i',
          qty: i % 4 == 0 ? null : i % 3,
        ));
      }
      for (final desc in [false, true]) {
        final walked = await h
            .walkAll(() => h.query().orderBy('qty', desc: desc), limit: 5);
        final expected =
            await h.query().orderBy('qty', desc: desc).all().fetch();
        expect(idsOf(walked), idsOf(expected.items),
            reason: 'desc=$desc complete and ordered');
        expect(idsOf(walked).toSet(), hasLength(20), reason: 'no dups');
      }
    });
  });

  group('backward keyset pagination and cursor direction', () {
    test('uniform-DESC walk over a nullable column keeps the trailing NULLs',
        () async {
      // Regression: the row-value fast path `(a, id) < (?, ?)` once fired for
      // uniform-DESC orders and silently dropped rows whose sort value is
      // NULL (they sort last under DESC). The OR-chain must handle them.
      for (var i = 0; i < 12; i++) {
        await h.col.put(record(
          id: generateRecordId(),
          name: 'n$i',
          qty: i % 3 == 0 ? null : i,
        ));
      }
      final walked = await h.walkAll(
          () => h.query().orderBy('qty', desc: true).orderBy('id', desc: true),
          limit: 4);
      final expected = await h
          .query()
          .orderBy('qty', desc: true)
          .orderBy('id', desc: true)
          .all()
          .fetch();
      expect(idsOf(walked), idsOf(expected.items),
          reason: 'uniform-DESC continuation must include the NULL tail');
      final nullCount = walked.where((r) => r['qty'] == null).length;
      expect(nullCount, 4);
    });

    test('row-value fast path is uniform-ASC only', () async {
      await h.seed(count: 6);
      final cursor =
          (await h.query().orderBy('qty').limit(2).fetch()).nextCursor!;
      // The consuming shape must match the minting shape; the backward
      // direction is a compile-mode of the SAME shape, not a different one.
      final asc =
          h.col.query().orderBy('qty').limit(3).compilePlan(cursor: cursor).sql;
      expect(asc, contains('("qty", "id") > (?, ?)'),
          reason: 'uniform-ASC keeps the compact row-value predicate');
      final backward = h.col
          .query()
          .orderBy('qty')
          .limit(3)
          .compilePlan(cursor: cursor, backward: true)
          .sql;
      expect(backward, contains('ORDER BY "qty" DESC, "id" DESC'),
          reason: 'the backward compile flips every direction');
      expect(backward, isNot(contains('("qty", "id") < (?, ?)')),
          reason: 'uniform-DESC must use the NULL-aware chain');
      expect(backward, contains('OR "qty" IS NULL'));
    });

    test('one both-directions pass reconstructs the full order', () async {
      for (var i = 0; i < 11; i++) {
        await h.col.put(record(
          id: generateRecordId(),
          name: 'n$i',
          qty: i % 4,
        ));
      }
      final walked = await h.walkFullBothDirections(
          () => h.query().orderBy('qty', desc: true),
          limit: 3);
      final expected = await h.query().orderBy('qty', desc: true).all().fetch();
      expect(idsOf(walked), idsOf(expected.items),
          reason: 'forward + backward union = full declared order, no dups');
    });

    test('backward walk with nulls and mixed directions', () async {
      for (var i = 0; i < 15; i++) {
        await h.col.put(record(
          id: generateRecordId(),
          name: 'n$i',
          qty: i % 3 == 0 ? null : i % 5,
          size: i % 2 == 0 ? null : (['S', 'M', 'L'][i % 3]),
        ));
      }
      for (final spec in [
        () => h.query().orderBy('qty'),
        () => h.query().orderBy('qty', desc: true),
        () => h.query().orderBy('qty').orderBy('size', desc: true),
        () => h.query().orderBy('qty', desc: true).orderBy('size'),
      ]) {
        final walked = await h.walkFullBothDirections(spec, limit: 4);
        final expected = await spec.call().all().fetch();
        expect(idsOf(walked), idsOf(expected.items),
            reason: 'complete ordered union per order spec');
      }
    });

    test('anchored pages: prev of page N is page N-1 with exact flags',
        () async {
      await h.seed(count: 10);
      final pages = <Page>[];
      String? cursor;
      while (true) {
        final q = h.query().orderBy('qty');
        final page = cursor == null
            ? await q.limit(3).fetch()
            : await q.limit(3).keysetAfter(cursor);
        pages.add(page);
        if (!page.hasNext) break;
        cursor = page.nextCursor;
      }
      expect(pages, hasLength(4));
      // First page: nothing observed before it.
      expect(pages.first.hasPrev, isFalse);
      expect(pages.first.prevCursor, isNull);
      for (var i = 1; i < pages.length; i++) {
        expect(pages[i].hasPrev, isTrue, reason: 'page $i consumed a cursor');
        expect(pages[i].prevCursor, isNotNull);
        final prev = await h
            .query()
            .orderBy('qty')
            .limit(3)
            .keysetBefore(pages[i].prevCursor!);
        expect(idsOf(prev.items), idsOf(pages[i - 1].items),
            reason: 'prev(page ${i + 1}) == page $i');
        expect(prev.hasNext, isTrue, reason: 'rows exist after the window');
        expect(prev.hasPrev, i > 1,
            reason: 'exact: only page 1 has nothing before it');
      }
      // The last page: nothing after it.
      expect(pages.last.hasNext, isFalse);
      expect(pages.last.nextCursor, isNull);
    });

    test('backward page anchored on the first row is terminal', () async {
      await h.seed(count: 6);
      final first = await h.query().orderBy('qty').limit(2).fetch();
      expect(first.prevCursor, isNull);
      // Any cursor can be consumed backward (the payload is bidirectional):
      // anchoring on the second page's prevCursor walks to the first page,
      // and anchoring on the first row of the store returns an empty page.
      final second = await h
          .query()
          .orderBy('qty')
          .limit(2)
          .keysetAfter(first.nextCursor!);
      final beforeFirst = await h
          .query()
          .orderBy('qty')
          .limit(2)
          .keysetBefore(second.prevCursor!);
      expect(idsOf(beforeFirst.items), idsOf(first.items));
      final decoded = (jsonDecode(utf8.decode(base64Url.decode(
              (await h.query().orderBy('qty').limit(2).fetch()).nextCursor!))))
          as Map;
      final atStart = encodeCursor({
        ...decoded.cast<String, Object?>(),
        'values': [null, first.items.first['id']],
        'pv': [null, first.items.first['id']],
      });
      final terminal =
          await h.query().orderBy('qty').limit(2).keysetBefore(atStart);
      expect(terminal.items, isEmpty);
      expect(terminal.hasNext, isFalse);
      expect(terminal.hasPrev, isFalse);
    });

    test('projection and filters survive backward walks', () async {
      await h.seed(count: 9);
      final walked = await h.walkFullBothDirections(
          () => h
              .query()
              .where('qty', gte: 2)
              .select(['id', 'name']).orderBy('qty', desc: true),
          limit: 2);
      final expected = await h
          .query()
          .where('qty', gte: 2)
          .select(['id', 'name'])
          .orderBy('qty', desc: true)
          .all()
          .fetch();
      expect(idsOf(walked), idsOf(expected.items));
      for (final r in walked) {
        expect(r.keys.toSet(), {'id', 'name'});
      }
    });

    test('backward consumption validates shape and payload', () async {
      await h.seed(count: 8);
      final base = await h.query().orderBy('qty').limit(3).fetch();
      final cursor = base.nextCursor!;

      // A differently-shaped builder rejects the cursor in both directions.
      await expectLater(h.query().orderBy('name').limit(3).keysetBefore(cursor),
          throwsA(isA<StaleCursorError>()));
      await expectLater(
          h
              .query()
              .orderBy('qty')
              .where('qty', gte: 1)
              .limit(3)
              .keysetBefore(cursor),
          throwsA(isA<StaleCursorError>()));

      // A legacy-style payload without the `pv` tuple cannot walk backward.
      final decoded = (jsonDecode(utf8.decode(base64Url.decode(cursor))) as Map)
          .cast<String, Object?>();
      final noPv = encodeCursor({...decoded}..remove('pv'));
      await expectLater(h.query().orderBy('qty').limit(3).keysetBefore(noPv),
          throwsA(isA<StaleCursorError>()));
      // Forward consumption of the same legacy payload still works.
      final legacy = await h.query().orderBy('qty').limit(3).keysetAfter(noPv);
      expect(legacy.items, isNotEmpty);

      // Both cursor fields of a page carry the same bidirectional payload.
      final second =
          await h.query().orderBy('qty').limit(3).keysetAfter(cursor);
      final decodedSecond =
          (jsonDecode(utf8.decode(base64Url.decode(second.nextCursor!))) as Map)
              .cast<String, Object?>();
      expect(second.prevCursor, isNotNull);
      expect(decodedSecond['pv'], isA<List>());
      expect((decodedSecond['values']! as List).length,
          (decodedSecond['sort']! as List).length);
    });

    test('empty store and empty pages carry no continuation', () async {
      final empty = await h.query().orderBy('qty').limit(3).fetch();
      expect(empty.items, isEmpty);
      expect(empty.hasNext, isFalse);
      expect(empty.hasPrev, isFalse);
      expect(empty.nextCursor, isNull);
      expect(empty.prevCursor, isNull);

      // An after-page whose tail vanished is terminal in both directions.
      await h.seed(count: 2);
      final p1 = await h.query().orderBy('qty').limit(1).fetch();
      final p2 =
          await h.query().orderBy('qty').limit(1).keysetAfter(p1.nextCursor!);
      expect(p2.items, hasLength(1));
      expect(p2.hasNext, isFalse);
      expect(p2.hasPrev, isTrue);
      final back =
          await h.query().orderBy('qty').limit(1).keysetBefore(p2.prevCursor!);
      expect(idsOf(back.items), idsOf(p1.items));
    });
  });

  group('projection and extra-key contract', () {
    test('declared projections expose only requested keys', () async {
      await h.col
          .put(record(id: generateRecordId(), name: 'a', qty: 7, price: 1.5));
      final page = await h.query().select(['name']).limit(10).fetch();
      expect(page.items.single.keys.toSet(), {'name'});

      final idPage = await h.query().select(['id']).limit(10).fetch();
      expect(idPage.items.single.keys.toSet(), {'id'});

      final idArch =
          await h.query().select(['id', 'archived']).limit(10).fetch();
      expect(idArch.items.single.keys.toSet(), {'id', 'archived'});
    });

    test('order field not selected still drives cursor but stays hidden',
        () async {
      for (var i = 0; i < 8; i++) {
        await h.col.put(record(id: generateRecordId(), name: 'n$i', qty: i));
      }
      final walked = await h
          .walkAll(() => h.query().select(['name']).orderBy('qty'), limit: 3);
      expect(walked, hasLength(8));
      for (final r in walked) {
        expect(r.keys.toSet(), {'name'},
            reason: 'order column must not leak into items');
      }
      final expected =
          await h.query().select(['name']).orderBy('qty').all().fetch();
      expect([for (final r in walked) r['name']],
          [for (final r in expected.items) r['name']]);
    });

    test('projected null values keep their key', () async {
      await h.col.put(record(id: generateRecordId(), name: 'a', qty: null));
      final page = await h.query().select(['name', 'qty']).limit(10).fetch();
      expect(page.items.single, {'name': 'a', 'qty': null});
    });

    test('undeclared extra keys fall back to full decode', () async {
      await h.col.put(
          record(id: generateRecordId(), name: 'with extra', qty: 1, extra: {
        'ghost': 'here',
        'nested': {'a': 1}
      }));
      await h.col.put(record(id: generateRecordId(), name: 'plain', qty: 2));

      final (sql, _) =
          h.query().select(['ghost', 'name']).limit(10).debugCompile();
      expect(sql, contains('SELECT *'));

      final page = await h.query().select(['ghost', 'name']).limit(10).fetch();
      final byName = {for (final r in page.items) r['name']: r};
      expect(byName['with extra']!['ghost'], 'here');
      expect(byName['plain']!.containsKey('ghost'), isFalse,
          reason: 'absent extra keys are not synthesized');

      final full = await h.query().limit(10).fetch();
      final fullByName = {for (final r in full.items) r['name']: r};
      expect(fullByName['with extra']!['nested'], {'a': 1});
      expect(fullByName['with extra']!['ghost'], 'here');

      final (sql2, _) =
          h.query().select(['name', 'qty']).limit(10).debugCompile();
      expect(sql2, isNot(contains('SELECT *')));
      expect(sql2, contains('"name", "qty"'));
    });

    test('empty select returns empty maps but paginates', () async {
      for (var i = 0; i < 5; i++) {
        await h.col.put(record(id: generateRecordId(), name: 'n$i', qty: i));
      }
      final page = await h.query().select(<String>[]).limit(3).fetch();
      expect(page.items, everyElement(isA<Map<String, Object?>>()));
      expect(page.items.every((r) => r.isEmpty), isTrue);
      expect(page.hasNext, isTrue);
      final page2 = await h
          .query()
          .select(<String>[])
          .limit(3)
          .keysetAfter(page.nextCursor!);
      expect(page2.items, hasLength(2));
      expect(page2.hasNext, isFalse);
    });
  });

  group('aggregates and distinct edge cases', () {
    test('empty table semantics', () async {
      final q = h.query();
      expect(await q.count(), 0);
      expect(await q.countDistinct('qty'), 0);
      expect(await q.sum('qty'), isNull);
      expect(await q.min('qty'), isNull);
      expect(await q.max('qty'), isNull);
      expect(await q.avg('qty'), isNull);
      expect(await q.distinct('qty'), isEmpty);
    });

    test('all-null field: nulls ignored, never coerced to zero', () async {
      for (var i = 0; i < 4; i++) {
        await h.col.put(record(id: generateRecordId(), name: 'n$i', qty: null));
      }
      final q = h.query();
      expect(await q.count(), 4);
      expect(await q.countDistinct('qty'), 0,
          reason: 'COUNT(DISTINCT) ignores NULLs');
      final d = await q.distinct('qty');
      expect(d, [null], reason: 'NULL is itself a distinct value');
      expect(await q.sum('qty'), isNull);
      expect(await q.min('qty'), isNull);
      expect(await q.max('qty'), isNull);
      expect(await q.avg('qty'), isNull);
    });

    test('nulls are skipped in mixed aggregates', () async {
      await h.col.put(record(id: generateRecordId(), name: 'a', qty: null));
      await h.col.put(record(id: generateRecordId(), name: 'b', qty: 5));
      await h.col.put(record(id: generateRecordId(), name: 'c', qty: 15));
      final q = h.query();
      expect(await q.sum('qty'), 20);
      expect(await q.avg('qty'), 10.0);
      expect(await q.min('qty'), 5);
      expect(await q.max('qty'), 15);
    });

    test('mixed int and real fields', () async {
      await h.col
          .put(record(id: generateRecordId(), name: 'a', qty: 1, price: 1.5));
      await h.col
          .put(record(id: generateRecordId(), name: 'b', qty: 2, price: 2.5));
      final q = h.query();
      expect(await q.sum('qty'), 3);
      expect(await q.avg('qty'), 1.5);
      expect(await h.query().sum('price'), 4.0);
      expect(await h.query().avg('price'), 2.0);
      expect(await h.query().min('price'), 1.5);
      expect(await h.query().max('price'), 2.5);
    });

    test('bool and date fields aggregate numerically', () async {
      await h.col.put(record(
          id: generateRecordId(), name: 'a', active: true, madeOn: 1000));
      await h.col.put(record(
          id: generateRecordId(), name: 'b', active: false, madeOn: 2000));
      await h.col.put(record(
          id: generateRecordId(), name: 'c', active: true, madeOn: 3000));
      final q = h.query();
      expect(await q.sum('active'), 2);
      expect(await q.avg('active'), closeTo(0.6666, 0.001));
      expect(await q.min('made_on'), 1000);
      expect(await q.max('made_on'), 3000);
    });

    test('nonnumeric and synthetic fields rejected for aggregates', () async {
      await h.col.put(record(id: generateRecordId(), name: 'a', qty: 1));
      for (final field in [
        'name',
        'meta',
        'tags',
        'size',
        'owner_id',
        'id',
        'archived'
      ]) {
        await expectLater(
          h.query().sum(field),
          throwsA(isA<ValidationException>()
              .having((e) => e.field, 'field', field)),
          reason: 'sum($field) rejected',
        );
        await expectLater(
            h.query().min(field), throwsA(isA<ValidationException>()));
        await expectLater(
            h.query().max(field), throwsA(isA<ValidationException>()));
        await expectLater(
            h.query().avg(field), throwsA(isA<ValidationException>()));
      }
      expect(await h.query().countDistinct('name'), 1);
      expect(await h.query().distinct('name'), ['a']);
    });

    test('distinct never returns duplicates and honours order/limit', () async {
      await h.col.put(record(id: generateRecordId(), name: 'b', qty: 1));
      await h.col.put(record(id: generateRecordId(), name: 'a', qty: 2));
      await h.col.put(record(id: generateRecordId(), name: 'b', qty: 3));
      await h.col.put(record(id: generateRecordId(), name: 'c', qty: 4));
      await h.col.put(record(id: generateRecordId(), name: 'a', qty: 5));

      final ordered = await h.query().orderBy('name').distinct('name');
      expect(ordered, ['a', 'b', 'c']);

      final orderedDesc =
          await h.query().orderBy('name', desc: true).distinct('name');
      expect(orderedDesc, ['c', 'b', 'a']);

      final otherOrder = await h.query().orderBy('qty').distinct('name');
      expect(otherOrder.toSet(), {'a', 'b', 'c'});
      expect(otherOrder, hasLength(3), reason: 'still distinct');

      final limited = await h.query().limit(2).distinct('name');
      expect(limited, hasLength(2));
      expect(limited.toSet().length, 2);

      for (var i = 0; i < 1050; i++) {
        await h.col.put(record(id: generateRecordId(), name: 'x$i', qty: i));
      }
      final capped = await h.query().distinct('name');
      expect(capped, hasLength(1000));
    });

    test('distinct with all() bypasses the default 1000-value cap', () async {
      for (var i = 0; i < 1005; i++) {
        await h.col.put(record(id: generateRecordId(), name: 'v$i', qty: i));
      }
      final capped = await h.query().distinct('name');
      expect(capped, hasLength(1000), reason: 'no limit caps at 1000');

      final all = await h.query().all().distinct('name');
      expect(all, hasLength(1005), reason: 'all() removes the implicit cap');

      // all() wins even when a limit is also present.
      final allLimited = await h.query().limit(5).all().distinct('name');
      expect(allLimited, hasLength(1005));
    });

    test('aggregates respect filters and scope', () async {
      final normal = generateRecordId();
      final archived = generateRecordId();
      await h.col.put(record(id: normal, name: 'n', qty: 10));
      await h.col.put(record(id: archived, name: 'a', qty: 20));
      await h.pocket.db
          .execute('UPDATE widgets SET archived = 1 WHERE id = ?', [archived]);

      expect(await h.query().sum('qty'), 10);
      expect(await h.query().includeArchived().sum('qty'), 30);
      expect(await h.query().count(), 1);
      expect(await h.query().includeArchived().count(), 2);

      expect(await h.query().includeArchived().where('qty', gte: 15).sum('qty'),
          20);
      expect(
          await h
              .query()
              .includeArchived()
              .where('qty', gte: 15)
              .countDistinct('name'),
          1);
      expect(
          await h
              .query()
              .includeArchived()
              .where('qty', gte: 15)
              .distinct('name'),
          ['a']);
    });
  });

  group('encrypted, search, and cursor fixture edges', () {
    test('encrypted fields rejected for every query entry point', () async {
      expect(
          () => vh.query().where('secret', eq: 'x'),
          throwsA(isA<SchemaRegistrationError>()
              .having((e) => e.message, 'message', contains('encrypted'))));
      expect(() => vh.query().orderBy('secret'),
          throwsA(isA<SchemaRegistrationError>()));
      expect(
          () => vh.query().orWhere([
                {'secret': 'x'}
              ]),
          throwsA(isA<SchemaRegistrationError>()));
      await expectLater(vh.query().countDistinct('secret'),
          throwsA(isA<SchemaRegistrationError>()));
      await expectLater(vh.query().distinct('secret'),
          throwsA(isA<SchemaRegistrationError>()));
      await expectLater(
          vh.query().sum('count'), throwsA(isA<SchemaRegistrationError>()));
      await expectLater(
          vh.query().min('count'), throwsA(isA<SchemaRegistrationError>()));
      await expectLater(
          vh.query().max('count'), throwsA(isA<SchemaRegistrationError>()));
      await expectLater(
          vh.query().avg('count'), throwsA(isA<SchemaRegistrationError>()));
    });

    test('encrypted fields decrypt under projection', () async {
      await vh.col.put({
        'id': generateRecordId(),
        'label': 'l',
        'secret': 's3cr3t',
      });
      final page =
          await vh.query().select(['label', 'secret']).limit(10).fetch();
      expect(page.items.single, {'label': 'l', 'secret': 's3cr3t'});
    });

    test('search requires a limit or all', () async {
      await expectLater(
          fh.search('x').fetch(), throwsA(isA<MissingLimitError>()));
      final limited = await fh.search('x').limit(10).fetch();
      expect(limited, isEmpty);
    });

    test('search returns ranked matches', () async {
      await fh.col.put({
        'id': generateRecordId(),
        'title': 'sqlite engine',
        'body': 'database storage',
      });
      await fh.col.put({
        'id': generateRecordId(),
        'title': 'web worker',
        'body': 'transport layer',
      });
      final results = await fh.search('database').limit(10).fetch();
      expect(results, hasLength(1));
      expect(results.single.id, isNotEmpty);
      // bm25 ranking is meaningful even when tiny-corpus scores are negative.
      expect(results.single.score, isA<double>());
    });

    test('cursor rejected across store and schema version', () async {
      for (var i = 0; i < 4; i++) {
        await h.col.put(record(id: generateRecordId(), name: 'n$i', qty: i));
      }
      final cursor =
          (await h.query().orderBy('qty').limit(2).fetch()).nextCursor!;

      final pocket2 = await openPocket(
          stores: [widgetsSchema(), widgetsSchema(name: 'widgets2')]);
      addTearDown(pocket2.close);
      final other = pocket2.collection('widgets2');
      await other.put(record(id: generateRecordId(), name: 'x', qty: 1));
      await expectLater(
          other.query().orderBy('qty').limit(2).keysetAfter(cursor),
          throwsA(isA<StaleCursorError>()));

      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final v1 =
          await openPocket(path: t.path, stores: [widgetsSchema(version: 1)]);
      for (var i = 0; i < 4; i++) {
        await v1
            .collection('widgets')
            .put(record(id: generateRecordId(), name: 'v1_$i', qty: i));
      }
      final v1Cursor = (await v1
              .collection('widgets')
              .query()
              .orderBy('qty')
              .limit(2)
              .fetch())
          .nextCursor!;
      await v1.close();

      final v2 = await openPocket(
        path: t.path,
        stores: [
          widgetsSchema(
            version: 2,
            migrations: [StoreMigration(toVersion: 2)],
          ),
        ],
      );
      addTearDown(v2.close);
      await expectLater(
          v2
              .collection('widgets')
              .query()
              .orderBy('qty')
              .limit(2)
              .keysetAfter(v1Cursor),
          throwsA(isA<StaleCursorError>()));
    });
  });
}
