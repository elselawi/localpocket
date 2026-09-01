import 'dart:convert';

import 'package:localpocket/src/kernel/canonical_json.dart';
import 'package:localpocket/src/kernel/codec.dart';
import 'package:localpocket/src/kernel/database_adapter.dart';
import 'package:localpocket/src/kernel/ddl_compiler.dart';
import 'package:localpocket/src/kernel/errors.dart';
import 'package:localpocket/src/kernel/hashing.dart';
import 'package:localpocket/src/kernel/local_pocket.dart';
import 'package:localpocket/src/kernel/query_plan.dart';
import 'package:localpocket/src/kernel/query/query_builder/predicate_tree.dart';
import 'package:localpocket/src/kernel/query/query_builder/query_dsl.dart';
import 'package:localpocket/src/kernel/schema.dart';
import 'package:localpocket/src/kernel/sql_utils.dart';
import 'package:localpocket/src/kernel/store.dart';
import 'package:localpocket/src/kernel/watch.dart';
import 'package:collection/collection.dart';
import 'package:meta/meta.dart';

/// {@template localpocket.where_clause}
/// A SQL predicate and its bound arguments.
/// {@endtemplate}
class WhereClause {
  /// Creates a clause with parameterized SQL and its arguments.
  ///
  /// {@macro localpocket.where_clause}
  const WhereClause(this.sql, this.args);

  /// The parameterized SQL fragment.
  final String sql;

  /// Values bound to the SQL placeholders.
  final List<Object?> args;
}

/// {@template localpocket.order_clause}
/// A field ordering term.
/// {@endtemplate}
class OrderClause {
  /// {@macro localpocket.order_clause}
  const OrderClause(this.field, {this.desc = false});

  /// The field to order by.
  final String field;

  /// Whether to sort in descending order.
  final bool desc;
}

class _CursorData {
  const _CursorData(this.values);

  final List<Object?> values;
}

/// {@template localpocket.query_builder}
/// Parameterized query builder. No user input is ever string
/// interpolated into SQL; values travel as bound parameters.
/// {@endtemplate}
class QueryBuilder implements QueryFilterDsl<QueryBuilder> {
  /// Internal: constructed by [Collection].
  /// Internal constructor used by [Collection.query].
  ///
  /// {@macro localpocket.query_builder}
  QueryBuilder.internal(this._pocket, StoreTable table,
      {DatabaseExecutor? executor})
      : _schema = table.schema,
        _executor = executor,
        _where = [],
        _orGroups = [],
        _structuredFilters = [],
        _order = [],
        _limit = null,
        _all = false,
        _select = null,
        _includeArchived = false,
        _includeHidden = false,
        _cursor = null,
        _backward = false,
        _suppressIdTiebreak = false;

  /// Compile-only constructor used by the web query-plan spike.
  ///
  /// {@macro localpocket.query_builder}
  QueryBuilder.compileOnly(CollectionSchema<Object?> schema)
      : _pocket = null,
        _schema = schema,
        _executor = null,
        _where = [],
        _orGroups = [],
        _structuredFilters = [],
        _order = [],
        _limit = null,
        _all = false,
        _select = null,
        _includeArchived = false,
        _includeHidden = false,
        _cursor = null,
        _backward = false,
        _suppressIdTiebreak = false;

  QueryBuilder._(
    this._pocket,
    this._schema,
    this._executor,
    this._where,
    this._orGroups,
    this._order,
    this._limit,
    this._all,
    this._select,
    this._includeArchived,
    this._includeHidden,
    this._cursor,
    this._backward,
    this._suppressIdTiebreak,
    this._structuredFilters,
  );

  final LocalPocket? _pocket;
  final CollectionSchema<Object?> _schema;

  /// The execution context's executor. Non-null only when this builder was
  /// created from a transaction-scoped [Collection] — the query then runs
  /// through the TRANSACTION executor and can never fall back to the outer
  /// database.
  final DatabaseExecutor? _executor;

  /// Structural pin for tests: the executor this query will run through.
  /// Null means the outer database (root context).
  @visibleForTesting
  DatabaseExecutor? get debugExecutor => _executor;

  /// Runs one query through this builder's execution context: the transaction
  /// executor when bound, otherwise the outer database. Hook and perf
  /// bookkeeping is preserved on both paths.
  Future<List<Map<String, Object?>>> _runQuery(String sql,
      [List<Object?>? args]) {
    final pocket = _requirePocket;
    final executor = _executor;
    if (executor == null) return pocket.traceQuery(sql, args);
    pocket.testHooks?.onQuery?.call(sql);
    pocket.perf.recordQuery();
    return executor.rawQuery(sql, args ?? const []);
  }

  final List<WhereClause> _where;
  final List<WhereClause> _orGroups;

  /// Structured mirror of [_where]/[_orGroups] recorded at DSL call time:
  /// one [PredicateNode] per `where`/`orWhere`/`wherePredicate` call, in call
  /// order. Consumed by the web facade's spec lowering while the page-side
  /// compiled-plan transport exists; never used for compilation itself.
  final List<PredicateNode> _structuredFilters;
  final List<OrderClause> _order;
  final int? _limit;
  final bool _all;
  final List<String>? _select;
  final bool _includeArchived;
  final bool _includeHidden;
  final String? _cursor;

  /// Backward-consume mode: the compiled ORDER BY and keyset predicate flip,
  /// the cursor's `pv` tuple seeds the walk, and returned rows are re-reversed
  /// into the query's declared order.
  final bool _backward;
  final bool _suppressIdTiebreak;

  QueryBuilder _copyWith({
    List<WhereClause>? where,
    List<WhereClause>? orGroups,
    List<PredicateNode>? structuredFilters,
    List<OrderClause>? order,
    int? limit,
    bool? all,
    List<String>? select,
    bool? includeArchived,
    bool? includeHidden,
    String? cursor,
    bool? backward,
    bool? suppressIdTiebreak,
  }) =>
      QueryBuilder._(
        _pocket,
        _schema,
        _executor,
        where ?? List<WhereClause>.from(_where),
        orGroups ?? List<WhereClause>.from(_orGroups),
        order ?? List<OrderClause>.from(_order),
        limit ?? _limit,
        all ?? _all,
        select ?? (_select == null ? null : List<String>.from(_select!)),
        includeArchived ?? _includeArchived,
        includeHidden ?? _includeHidden,
        cursor ?? _cursor,
        backward ?? _backward,
        suppressIdTiebreak ?? _suppressIdTiebreak,
        structuredFilters ?? List<PredicateNode>.from(_structuredFilters),
      );

  /// Name of the collection being queried.
  String get store => _schema.name;

  /// Whether the query has an explicit ordering term.
  bool get hasExplicitOrder => _order.isNotEmpty;

  /// Whether the query has an explicit result limit.
  bool get hasLimit => _limit != null;

  /// Internal: validates that a field is queryable.
  void _checkQueryable(String field) {
    for (final f in _schema.fields) {
      if (f.name == field) {
        if (f.encrypted) {
          throw SchemaRegistrationError(
              'Field "$field" is encrypted and cannot be queried or sorted.');
        }
        return;
      }
    }
    // The synthetic `id`/`archived` and the internal `hidden` column are real
    // SQL columns, so they are queryable even though not declared.
    if (field == 'id' || field == 'archived' || field == 'hidden') return;
    throw ValidationException('Unknown field "$field" for query.',
        field: field);
  }

  /// Adds one or more predicates for [field].
  ///
  /// Values are bound as SQL parameters. Multiple supplied operators are
  /// combined with `AND`.
  ///
  /// [between] is INCLUSIVE on both ends (`>= start AND <= end`), matching
  /// SQL `BETWEEN` and most query DSLs. Records whose value equals `end` ARE
  /// matched. For a half-open `[start, end)` window, use `gte:`/`lt:`
  /// explicitly.
  @override
  QueryBuilder where(
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
    _checkQueryable(field);
    final col = DdlCompiler.quote(field);
    final clauses = <WhereClause>[];
    if (eq != null) clauses.add(WhereClause('$col = ?', [eq]));
    if (neq != null) clauses.add(WhereClause('$col <> ?', [neq]));
    if (gt != null) clauses.add(WhereClause('$col > ?', [gt]));
    if (gte != null) clauses.add(WhereClause('$col >= ?', [gte]));
    if (lt != null) clauses.add(WhereClause('$col < ?', [lt]));
    if (lte != null) clauses.add(WhereClause('$col <= ?', [lte]));
    if (inValues != null) {
      clauses.add(WhereClause(
          '$col IN (${List.filled(inValues.length, '?').join(', ')})',
          inValues));
    }
    if (between != null) {
      clauses.add(
          WhereClause('$col >= ? AND $col <= ?', [between.$1, between.$2]));
    }
    if (startsWith != null) {
      clauses.add(WhereClause(
          "$col LIKE ? ESCAPE '\\'", ['${escapeLikePattern(startsWith)}%']));
    }
    if (endsWith != null) {
      clauses.add(WhereClause(
          "$col LIKE ? ESCAPE '\\'", ['%${escapeLikePattern(endsWith)}']));
    }
    if (contains != null) {
      clauses.add(WhereClause(
          "$col LIKE ? ESCAPE '\\'", ['%${escapeLikePattern(contains)}%']));
    }
    if (isNull == true) clauses.add(WhereClause('$col IS NULL', const []));
    if (isNotNull == true) {
      clauses.add(WhereClause('$col IS NOT NULL', const []));
    }
    final copy = _copyWith();
    copy._where.addAll(clauses);
    // Structured mirror for the web spec lowering: one node per supplied
    // operator, in the same order the clauses were added. Operators the tree
    // compiler does not spell (`neq`, `isNotNull`) capture as negations.
    copy._structuredFilters.addAll([
      if (eq != null) LeafPredicate(field, 'eq', [eq]),
      if (neq != null) NotPredicate(LeafPredicate(field, 'eq', [neq])),
      if (gt != null) LeafPredicate(field, 'gt', [gt]),
      if (gte != null) LeafPredicate(field, 'gte', [gte]),
      if (lt != null) LeafPredicate(field, 'lt', [lt]),
      if (lte != null) LeafPredicate(field, 'lte', [lte]),
      if (inValues != null) LeafPredicate(field, 'inValues', inValues),
      if (between != null)
        LeafPredicate(field, 'between', [between.$1, between.$2]),
      if (startsWith != null) LeafPredicate(field, 'startsWith', [startsWith]),
      if (endsWith != null) LeafPredicate(field, 'endsWith', [endsWith]),
      if (contains != null) LeafPredicate(field, 'contains', [contains]),
      if (isNull == true) LeafPredicate(field, 'isNull', const []),
      if (isNotNull == true)
        NotPredicate(LeafPredicate(field, 'isNull', const [])),
    ]);
    return copy;
  }

  /// OR-group of equality predicates, e.g.
  /// `orWhere([{'name': 'a'}, {'qty': 1}])` → `(("name" = ?) OR ("qty" = ?))`.
  ///
  /// Empty groups and empty lists are ignored (no-op): `orWhere([])` adds no
  /// predicate rather than emitting invalid SQL.
  @override
  QueryBuilder orWhere(List<Map<String, Object?>> groups) {
    final groupSqls = <String>[];
    final args = <Object?>[];
    for (final g in groups) {
      final parts = <String>[];
      g.forEach((f, v) {
        _checkQueryable(f);
        parts.add('${DdlCompiler.quote(f)} = ?');
        args.add(v);
      });
      if (parts.isEmpty) continue;
      groupSqls.add('(${parts.join(' AND ')})');
    }
    if (groupSqls.isEmpty) return this;
    final copy = _copyWith();
    copy._orGroups.add(WhereClause('(${groupSqls.join(' OR ')})', args));
    // Structured mirror: one OR node whose arms are the per-group ANDs.
    copy._structuredFilters.add(AnyPredicate([
      for (final g in groups)
        if (g.isNotEmpty)
          AllPredicate([
            for (final e in g.entries) LeafPredicate(e.key, 'eq', [e.value]),
          ]),
    ]));
    return copy;
  }

  /// Adds one predicate-tree clause, e.g. the typed layer's `&`/`|`/`~`
  /// algebra lowered to [PredicateNode] values.
  ///
  /// The tree compiles into **one** self-contained WHERE clause: composites
  /// are parenthesized at every boundary, so the fragment composes safely
  /// with the scope flags, the other AND clauses, and the keyset predicate.
  /// Every field is validated (unknown and encrypted fields throw) and every
  /// value travels as a bound parameter — LIKE needles are escaped here.
  ///
  /// ```dart
  /// builder.wherePredicate(AnyPredicate([
  ///   LeafPredicate('done', 'eq', [false]),
  ///   NotPredicate(LeafPredicate('count', 'gt', [9])),
  /// ]));
  /// ```
  @override
  QueryBuilder wherePredicate(PredicateNode node) {
    _validatePredicateFields(node);
    final (sql, args) = compilePredicateTree(node);
    final copy = _copyWith();
    copy._where.add(WhereClause(sql, args));
    copy._structuredFilters.add(node);
    return copy;
  }

  void _validatePredicateFields(PredicateNode node) {
    switch (node) {
      case LeafPredicate(:final field):
        _checkQueryable(field);
      case NotPredicate(:final child):
        _validatePredicateFields(child);
      case AllPredicate(:final children) || AnyPredicate(:final children):
        for (final child in children) {
          _validatePredicateFields(child);
        }
    }
  }

  /// Adds an ordering term. An `id` tie-breaker is added automatically.
  @override
  QueryBuilder orderBy(String field, {bool desc = false}) {
    _checkQueryable(field);
    final copy = _copyWith();
    copy._order.add(OrderClause(field, desc: desc));
    return copy;
  }

  /// Restricts the maximum number of records returned by [fetch].
  ///
  /// A limit is required unless [all] is selected. Use modest limits for UI
  /// screens and keyset pagination for large collections.
  @override
  QueryBuilder limit(int n) {
    if (n < 0) {
      throw ValidationException('Limit must be non-negative, got $n.');
    }
    return _copyWith(limit: n);
  }

  /// Explicitly opt out of a limit.
  /// Removes the mandatory result limit.
  ///
  /// Use with care for large collections because all matching rows are
  /// materialized in memory.
  @override
  QueryBuilder all() => _copyWith(all: true);

  /// Selects only [fields] from each record.
  ///
  /// ```dart
  /// final page = await db.collection('users')
  ///     .query()
  ///     .select(['id', 'display_name'])
  ///     .limit(25)
  ///     .fetch();
  /// ```
  ///
  /// Projection of undeclared overflow keys falls back to full decoding.
  @override
  QueryBuilder select(List<String> fields) =>
      _copyWith(select: List<String>.from(fields));

  /// Includes records marked as archived.
  @override
  QueryBuilder includeArchived() => _copyWith(includeArchived: true);

  /// Includes records hidden by synchronization visibility state.
  @override
  QueryBuilder includeHidden() => _copyWith(includeHidden: true);

  List<OrderClause> get _effectiveOrder {
    final o = [..._order];
    if (!_suppressIdTiebreak && (o.isEmpty || o.last.field != 'id')) {
      o.add(const OrderClause('id', desc: false));
    }
    return o;
  }

  /// The order the running SQL sorts by: the declared order, flipped end to
  /// end (including the implicit `id` tiebreak) when consuming a cursor
  /// backward. Flipping preserves the field sequence, so cursor tuples minted
  /// in the forward order index identically into the flipped order.
  List<OrderClause> get _consumeOrder => _backward
      ? [for (final o in _effectiveOrder) OrderClause(o.field, desc: !o.desc)]
      : _effectiveOrder;

  List<String> get _sortSignature =>
      [for (final o in _effectiveOrder) '${o.field}:${o.desc ? 'd' : 'a'}'];

  int? _resolveLimit() {
    if (_all) return null;
    if (_limit == null) {
      throw MissingLimitError('Query on "$name" requires .limit(n) or .all().');
    }
    return _limit;
  }

  /// Name of the collection being queried.
  String get name => _schema.name;

  LocalPocket get _requirePocket =>
      _pocket ?? (throw StateError('This query is compile-only.'));

  /// Exposes internals needed by the watch layer (public because watches live
  /// in a separate library).
  int? get limitValue => _limit;

  /// Whether the query explicitly opts out of a result limit.
  bool get allMode => _all;

  /// Whether the query has a projection.
  bool get isProjection => _select != null;

  // --------------------------------------- web spec-lowering snapshot ------

  /// The structured filter nodes recorded by `where`/`orWhere`/
  /// `wherePredicate`, in call order. Consumed by the web facade's spec
  /// lowering; removed together with the page-side compiled-plan transport.
  List<PredicateNode> get filterNodes => List.unmodifiable(_structuredFilters);

  /// The declared ordering terms (the implicit `id` tie-breaker is added by
  /// the compiler, never recorded here).
  List<OrderClause> get orderNodes => List.unmodifiable(_order);

  /// The archived-scope flag.
  bool get includeArchivedFlag => _includeArchived;

  /// The hidden-scope flag.
  bool get includeHiddenFlag => _includeHidden;

  /// The projected field list, or null for a full-row read.
  List<String>? get selectFields =>
      _select == null ? null : List.unmodifiable(_select!);

  // ------------------------------------------------------------- compiling --

  /// Bounded cache of compiled SQL templates keyed by query shape:
  /// avoids re-quoting columns and re-joining fragments
  /// on the hot path. Values are the SQL without the LIMIT clause — the limit
  /// is appended dynamically because it varies per call. The key is built from
  /// shape components (store, scope, where/or fragments, columns, order), so
  /// argument values never pollute the cache.
  /// Insertion-ordered cache with true LRU semantics (promote-on-hit): the
  /// most recently used template is moved to the tail on every hit, so a hot
  /// query is never evicted just because it was inserted early.
  static final Map<String, String> _sqlTemplateCache = {};

  static String _cachedSqlTemplate(String key, String Function() build) {
    final hit = _sqlTemplateCache.remove(key);
    if (hit != null) {
      // Promote to the most-recently-used tail.
      _sqlTemplateCache[key] = hit;
      return hit;
    }
    final sql = build();
    if (_sqlTemplateCache.length >= 512) {
      _sqlTemplateCache.remove(_sqlTemplateCache.keys.first);
    }
    _sqlTemplateCache[key] = sql;
    return sql;
  }

  (String, List<Object?>) _compile({
    bool forCount = false,
    bool countDistinct = false,
    String? aggregate,
    String? aggField,
    String? distinctField,
    int? limitOverride,
  }) {
    final where = <String>[];
    final args = <Object?>[];

    final scope = <String>[];
    if (!_includeArchived) scope.add('archived = 0');
    if (!_includeHidden) scope.add('hidden = 0');
    if (scope.isNotEmpty) where.add(scope.join(' AND '));
    for (final c in _where) {
      where.add(c.sql);
      args.addAll(c.args);
    }
    for (final c in _orGroups) {
      where.add(c.sql);
      args.addAll(c.args);
    }
    if (_cursor != null) {
      final data = _decodeCursor(_cursor!);
      final (ks, ksArgs) = _keysetPredicate(_consumeOrder, data.values);
      where.add(ks);
      args.addAll(ksArgs);
    }
    final whereSql = where.isEmpty ? '' : ' WHERE ${where.join(' AND ')}';

    final columns = distinctField != null
        ? 'DISTINCT ${DdlCompiler.quote(distinctField)}'
        : forCount
            ? (countDistinct
                ? 'COUNT(DISTINCT ${DdlCompiler.quote(aggField!)}) AS c'
                : 'COUNT(*) AS c')
            : (aggregate != null
                ? '$aggregate(${DdlCompiler.quote(aggField!)}) AS v'
                : _selectColumns);

    final effOrder = distinctField != null
        ? [
            for (final o in _order)
              if (o.field == distinctField) o
          ]
        : _consumeOrder;
    final orderSql = (forCount || aggregate != null)
        ? ''
        : (effOrder.isEmpty
            ? ''
            : ' ORDER BY ${effOrder.map((o) => '${DdlCompiler.quote(o.field)} ${o.desc ? 'DESC' : 'ASC'}').join(', ')}');

    final shapeKey = '$name|a:$_includeArchived|h:$_includeHidden|'
        'w:${where.join('|')}|c:$columns|o:$orderSql|cd:$countDistinct|'
        'fc:$forCount|ag:$aggregate|af:$aggField|df:$distinctField';
    final baseSql = _cachedSqlTemplate(
        shapeKey,
        () =>
            'SELECT $columns FROM ${DdlCompiler.quote(_schema.name)}$whereSql$orderSql');

    final limit = distinctField != null
        ? (_all ? null : (_limit ?? 1000))
        : (forCount || aggregate != null)
            ? null
            : (limitOverride ?? _resolveLimit());
    final limitSql = limit == null ? '' : ' LIMIT $limit';

    return ('$baseSql$limitSql', args);
  }

  String get _selectColumns {
    if (_select == null) return '*';
    // Projection of undeclared overflow keys falls back to full decoding:
    // SELECT * so the undeclared keys (stored in the extra JSON column) can be
    // unpacked by the full decoder. Referencing a nonexistent SQL column
    // would otherwise surface a raw "no such column" error.
    if (!_allProjectedDeclared()) return '*';
    final cols = <String>[..._select!];
    for (final o in _effectiveOrder) {
      if (!cols.contains(o.field)) cols.add(o.field);
    }
    return cols.map(DdlCompiler.quote).join(', ');
  }

  _CursorData _decodeCursor(String cursor) {
    Object? storeName;
    Object? schemaVer;
    Object? shape;
    List<String> sort;
    List<Object?> values;
    try {
      final m = jsonDecode(utf8.decode(base64Url.decode(cursor)))
          as Map<String, Object?>;
      storeName = m['store'];
      schemaVer = m['schemaVer'];
      shape = m['shape'];
      sort = List<String>.from(m['sort'] as List? ?? const []);
      // Forward consumption continues from the window's last row (`values`);
      // backward consumption continues from its first row (`pv`). Both tuples
      // are minted over the same forward sort signature.
      final raw = _backward ? m['pv'] : m['values'];
      values = List<Object?>.from(raw as List? ?? const []);
    } catch (_) {
      // Any malformed cursor (bad base64, invalid UTF-8/JSON, wrong field
      // types) is a stale cursor, never a FormatException/TypeError.
      throw StaleCursorError('Malformed cursor.');
    }
    final expectedSort = _sortSignature;
    if (storeName != _schema.name ||
        schemaVer != _schema.version ||
        shape != _shapeFingerprint ||
        !const ListEquality<String>().equals(sort, expectedSort) ||
        values.length != expectedSort.length) {
      throw StaleCursorError(
          'Cursor does not match this query shape (store/schema/sort/filters).');
    }
    // Values must be scalars; anything else (maps, lists, ...) could only
    // come from a hand-crafted cursor and would leak an untyped binding error.
    for (final v in values) {
      if (v != null &&
          v is! bool &&
          v is! int &&
          v is! double &&
          v is! String) {
        throw StaleCursorError('Malformed cursor.');
      }
    }
    return _CursorData(values);
  }

  /// Fingerprint of every query-shape component that a keyset cursor is only
  /// valid for: scope flags, WHERE/OR predicates (structure *and* bound
  /// values) and projection. A cursor produced by a differently-shaped query
  /// must be rejected with [StaleCursorError] instead of silently returning a
  /// wrong page.
  String get _shapeFingerprint => jsonEncode({
        'a': _includeArchived,
        'h': _includeHidden,
        'w': [
          for (final c in _where) [c.sql, c.args],
          for (final c in _orGroups) [c.sql, c.args],
        ],
        'p': _select,
      });

  /// Compiles the keyset predicate for [values] under [order].
  ///
  /// Row-value fast path: when every sort column has the same direction —
  /// and that direction is ASC — and no cursor value is NULL, `(a, b) > (?, ?)`
  /// is exactly equivalent to the OR-chain below (verified on SQLite 3.53.4)
  /// and reads as one compact predicate. The fast path is deliberately NOT
  /// taken for uniform-DESC orders: `(a, b) < (?, ?)` evaluates to NULL for
  /// rows whose sort value is NULL, so a nullable column's trailing NULL
  /// group (which sorts LAST under DESC and must be kept) would be silently
  /// dropped; those queries use the NULL-aware OR-chain. Mixed directions
  /// and NULL cursor values always use the OR-chain.
  (String, List<Object?>) _keysetPredicate(
      List<OrderClause> order, List<Object?> values) {
    // Row-value fast path: uniform ASC directions with no NULL cursor value.
    final uniform = order.every((o) => o.desc == order.first.desc);
    final noNull = values.every((v) => v != null);
    if (order.length >= 2 && uniform && !order.first.desc && noNull) {
      final cols =
          [for (final o in order) DdlCompiler.quote(o.field)].join(', ');
      final op = order.first.desc ? '<' : '>';
      final ph = List.filled(values.length, '?').join(', ');
      return ('($cols) $op ($ph)', values);
    }

    // Null-aware OR-chain. SQLite sorts NULLs FIRST in ASC and LAST in DESC.
    // For a NULL cursor value in an ASC column, all non-NULL values still
    // follow, so the comparison becomes `IS NOT NULL`; for a NULL cursor value
    // in a DESC column, nothing follows, so that alternative is dropped.
    // Equality with a NULL cursor value becomes `IS NULL` so the chain can
    // continue within the NULL group.
    final clauses = <String>[];
    final args = <Object?>[];
    for (var i = 0; i < order.length; i++) {
      final parts = <String>[];
      final clauseArgs = <Object?>[];
      var viable = true;
      for (var j = 0; j <= i; j++) {
        final col = DdlCompiler.quote(order[j].field);
        final v = values[j];
        if (j == i) {
          if (v == null) {
            if (order[j].desc) {
              // DESC: NULLs sort last, so nothing follows this row — but the
              // chain may still continue within the NULL group via the next
              // position (`$col IS NULL AND ...`).
              viable = false;
              break;
            }
            parts.add('$col IS NOT NULL');
          } else {
            final op = order[j].desc ? '<' : '>';
            if (order[j].desc) {
              // DESC: NULLs sort after every non-NULL value, so the trailing
              // NULL group must be kept: `col < ?` alone would drop it.
              parts.add('($col $op ? OR $col IS NULL)');
            } else {
              parts.add('$col $op ?');
            }
            clauseArgs.add(v);
          }
        } else if (v == null) {
          parts.add('$col IS NULL');
        } else {
          parts.add('$col = ?');
          clauseArgs.add(v);
        }
      }
      if (viable) {
        clauses.add('(${parts.join(' AND ')})');
        args.addAll(clauseArgs);
      }
    }
    if (clauses.isEmpty) return ('0', const []);
    return ('(${clauses.join(' OR ')})', args);
  }

  String _makeCursor(
      Map<String, Object?> lastFullRow, Map<String, Object?> firstFullRow) {
    final order = _effectiveOrder;
    final payload = {
      'store': _schema.name,
      'schemaVer': _schema.version,
      'sort': _sortSignature,
      'shape': _shapeFingerprint,
      'values': [for (final o in order) lastFullRow[o.field]],
      'pv': [for (final o in order) firstFullRow[o.field]],
    };
    return base64UrlEncode(utf8.encode(jsonEncode(payload)));
  }

  // -------------------------------------------------------------- execution --

  /// Executes the query and returns one page of records.
  ///
  /// In backward mode ([keysetBefore]) the SQL walks the flipped order, the
  /// returned rows are re-reversed into the declared order, and [Page.hasPrev]
  /// is exact (limit+1 check) while [Page.hasNext] is answered by a one-row
  /// forward probe from the window's last row.
  Future<Page> fetch({int? internalLimit}) async {
    final limit = internalLimit ?? _resolveLimit();
    // A zero limit is a degenerate (but legal) page: nothing to return and
    // nothing to paginate from.
    if (limit == 0) {
      return const Page(
          items: [], nextCursor: null, hasNext: false, hasPrev: false);
    }
    final (sql, args) =
        _compile(limitOverride: limit == null ? null : limit + 1);
    final pocket = _pocket;
    if (pocket == null) {
      throw StateError('A compile-only QueryBuilder cannot execute fetch().');
    }
    final rows = await _runQuery(sql, args);
    var hasNext = limit != null && rows.length > limit;
    var hasPrev = _cursor != null;
    final pageRows = limit == null ? rows : rows.take(limit).toList();

    // In-process, projection-aware decode: one-shot
    // Isolate.run per page was measured 1.8–5.6× slower than in-process at
    // every page size, so fetch() never spawns a per-page isolate. When a
    // select() only touches declared columns, only those columns (plus the
    // sort keys the keyset cursor needs) are unpacked.
    final List<Map<String, Object?>> decoded;
    if (_select != null && _allProjectedDeclared()) {
      decoded = decodeDbRowsProjected(
        _schema,
        pageRows,
        columns: [..._select!, ..._projectionOrderFields()],
        cipher: _requirePocket.fieldCipher,
        cryptoProvider: _requirePocket.cryptoProvider,
      );
    } else {
      decoded = decodeDbRows(
        _schema,
        pageRows,
        cipher: _requirePocket.fieldCipher,
        cryptoProvider: _requirePocket.cryptoProvider,
      );
    }
    // A backward fetch walks the flipped order; re-reverse the window so
    // items and cursor tuples are always in the query's declared order.
    if (_backward && decoded.isNotEmpty) {
      final reversed = decoded.reversed.toList();
      decoded
        ..clear()
        ..addAll(reversed);
    }
    if (_backward) {
      // Rows before the window were observed iff the flipped walk overflowed
      // the limit; rows after the window need their own one-row probe.
      hasPrev = hasNext;
      hasNext = await _probeForwardAfter(decoded);
    } else {
      // A consumed cursor proves its anchor row existed at mint time.
      hasPrev = hasPrev && decoded.isNotEmpty;
    }

    final items = <Map<String, Object?>>[];
    for (final full in decoded) {
      if (_select != null) {
        items.add({
          for (final k in _select!)
            if (full.containsKey(k)) k: full[k]
        });
      } else {
        items.add(full);
      }
    }
    String? nextCursor;
    String? prevCursor;
    if (decoded.isNotEmpty) {
      // Both boundary tuples go into every minted payload, so one cursor
      // string serves either direction; the nullness of each field encodes
      // whether that side observed more rows.
      if (hasNext) nextCursor = _makeCursor(decoded.last, decoded.first);
      if (hasPrev) prevCursor = _makeCursor(decoded.last, decoded.first);
    }
    return Page(
      items: items,
      nextCursor: nextCursor,
      hasNext: hasNext,
      prevCursor: prevCursor,
      hasPrev: hasPrev,
    );
  }

  /// One-row existence probe for backward pages: does any row match the
  /// query shape strictly AFTER the window's last row (declared order)?
  Future<bool> _probeForwardAfter(List<Map<String, Object?>> decodedO) async {
    final pocket = _pocket;
    if (decodedO.isEmpty || pocket == null) return false;
    final last = decodedO.last;
    final (ks, ksArgs) = _keysetPredicate(
        _effectiveOrder, [for (final o in _effectiveOrder) last[o.field]]);
    final where = <String>[];
    final args = <Object?>[];
    final scope = <String>[];
    if (!_includeArchived) scope.add('archived = 0');
    if (!_includeHidden) scope.add('hidden = 0');
    if (scope.isNotEmpty) where.add(scope.join(' AND '));
    for (final c in _where) {
      where.add(c.sql);
      args.addAll(c.args);
    }
    for (final c in _orGroups) {
      where.add(c.sql);
      args.addAll(c.args);
    }
    where.add(ks);
    args.addAll(ksArgs);
    final sql = 'SELECT 1 FROM ${DdlCompiler.quote(_schema.name)}'
        ' WHERE ${where.join(' AND ')} LIMIT 1';
    final rows = await _runQuery(sql, args);
    return rows.isNotEmpty;
  }

  /// True when every projected column is a declared field (or the synthetic
  /// `id`/`archived`), so the projection-aware decoder is semantically
  /// identical to full decode. Projections that reference undeclared `extra`
  /// keys fall back to full decode.
  bool _allProjectedDeclared() {
    for (final k in _select!) {
      if (k == 'id' || k == 'archived') continue;
      if (_schema.fieldByName(k) == null) return false;
    }
    return true;
  }

  /// Sort columns (other than the always-present `id` tiebreaker) that the
  /// keyset cursor needs and therefore must be unpacked by the projection
  /// decoder.
  List<String> _projectionOrderFields() => [
        for (final o in _effectiveOrder)
          if (o.field != 'id' && o.field != 'archived') o.field
      ];

  /// Fetches the page after [cursor] using keyset pagination.
  ///
  /// Use the `nextCursor` from a previous [fetch] call with the same filters,
  /// projection, and ordering. A cursor from another query shape throws
  /// [StaleCursorError].
  Future<Page> keysetAfter(String cursor) => _copyWith(cursor: cursor).fetch();

  /// Fetches the page immediately before the window [cursor] was minted
  /// from, using backward keyset pagination.
  ///
  /// Consumes the cursor's `pv` (first-row) tuple: the SQL walks the flipped
  /// order, the returned rows are re-reversed into the declared order, and
  /// [Page.hasPrev] is exact while [Page.hasNext] is answered by a one-row
  /// forward probe. A cursor from another query shape throws
  /// [StaleCursorError].
  Future<Page> keysetBefore(String cursor) =>
      _copyWith(cursor: cursor, backward: true).fetch();

  /// Counts records matching the current filters.
  Future<int> count() async {
    final (sql, args) = _compile(forCount: true);
    final rows = await _runQuery(sql, args);
    return firstIntValue(rows) ?? 0;
  }

  /// Counts distinct values of [field] matching the current filters.
  Future<int> countDistinct(String field) async {
    _checkQueryable(field);
    final (sql, args) =
        _compile(forCount: true, countDistinct: true, aggField: field);
    final rows = await _runQuery(sql, args);
    return firstIntValue(rows) ?? 0;
  }

  /// Returns the distinct values of [field] matching the current filters.
  ///
  /// Ordering is honoured only for order clauses on [field] itself; ordering
  /// by another column (or the implicit `id` tiebreaker) would make DISTINCT
  /// meaningless, so those clauses are dropped. Distinct results are otherwise
  /// unordered, so callers should not rely on a stable order.
  Future<List<Object?>> distinct(String field) async {
    _checkQueryable(field);
    final copy = _copyWith(
      select: [field],
      order: [
        for (final o in _order)
          if (o.field == field) o
      ],
      suppressIdTiebreak: true,
    );
    final limit = copy._all ? null : (copy._limit ?? 1000);
    final (sql, args) = copy._compile(limitOverride: limit);
    final distinctSql = sql.replaceFirst('SELECT ', 'SELECT DISTINCT ');
    final rows = await copy._runQuery(distinctSql, args);
    return [for (final r in rows) r[field]];
  }

  /// Whether [field] can be aggregated numerically. Only declared numeric
  /// kinds (int/real/bool/date) qualify: text and JSON fields would either
  /// coerce silently (SUM→0.0) or leak a raw cast error (MIN/MAX→String).
  bool _isNumericField(String field) {
    final f = _schema.fieldByName(field);
    if (f == null) return false;
    return switch (f.kind) {
      FieldKind.int ||
      FieldKind.real ||
      FieldKind.bool ||
      FieldKind.date =>
        true,
      _ => false,
    };
  }

  Future<num?> _aggregate(String fn, String field) async {
    _checkQueryable(field);
    if (!_isNumericField(field)) {
      throw ValidationException(
          'Field "$field" is not numeric and cannot be aggregated.',
          field: field);
    }
    final (sql, args) = _compile(aggregate: fn, aggField: field);
    final rows = await _runQuery(sql, args);
    final v = rows.isEmpty ? null : rows.first['v'];
    return v as num?;
  }

  /// Returns the sum of a numeric [field] for matching records.
  Future<num?> sum(String field) => _aggregate('SUM', field);

  /// Returns the minimum value of a numeric [field].
  Future<num?> min(String field) => _aggregate('MIN', field);

  /// Returns the maximum value of a numeric [field].
  Future<num?> max(String field) => _aggregate('MAX', field);

  /// Returns the average value of a numeric [field].
  Future<num?> avg(String field) => _aggregate('AVG', field);

  /// Returns IDs matching the current query.
  Future<List<String>> ids() async {
    final copy = _copyWith(select: ['id']);
    final (sql, args) = copy._compile();
    final rows = await copy._runQuery(sql, args);
    return [for (final r in rows) r['id']! as String];
  }

  /// Returns SQLite's `EXPLAIN QUERY PLAN` output for this query.
  ///
  /// This is useful when deciding whether a declared [IndexSpec] matches a
  /// production query shape.
  Future<String> explain() async {
    final limit = _resolveLimit();
    final (sql, args) = _compile(limitOverride: limit);
    final rows = await _runQuery('EXPLAIN QUERY PLAN $sql', args);
    return rows.map((r) => r['detail']).join('\n');
  }

  /// Compiled SQL + args, for tests and goldens.
  (String, List<Object?>) debugCompile() => _compile();

  /// Compiles a typed plan for the web transport.
  ///
  /// The plan contains only compiler-owned SQL and bound arguments. It is not
  /// an arbitrary raw-SQL escape hatch. [backward] flips the ORDER BY and
  /// seeds the keyset predicate from the cursor's first-row (`pv`) tuple for
  /// backward (previous-page) walks.
  QueryPlan compilePlan(
      {int? limitOverride, String? cursor, bool backward = false}) {
    final query = cursor == null && !backward
        ? this
        : _copyWith(cursor: cursor, backward: backward);
    final (sql, args) = query._compile(limitOverride: limitOverride);
    return query._plan('query', sql, args,
        limit: limitOverride ?? query._resolveLimit(),
        projection:
            query._select == null ? null : List.unmodifiable(query._select!));
  }

  /// Compiles a COUNT plan for the web transport.
  QueryPlan compileCountPlan() {
    final (sql, args) = _compile(forCount: true);
    return _plan('count', sql, args);
  }

  /// Compiles a COUNT(DISTINCT [field]) plan for the web transport.
  QueryPlan compileCountDistinctPlan(String field) {
    _checkQueryable(field);
    final (sql, args) =
        _compile(forCount: true, countDistinct: true, aggField: field);
    return _plan('countDistinct', sql, args);
  }

  /// Compiles a DISTINCT [field] plan for the web transport.
  QueryPlan compileDistinctPlan(String field) {
    _checkQueryable(field);
    final (sql, args) = _compile(distinctField: field);
    return _plan('distinct', sql, args);
  }

  /// Compiles an ID-list plan for the web transport.
  QueryPlan compileIdsPlan() {
    final query = _copyWith(select: ['id']);
    final (sql, args) = query._compile();
    return query._plan('ids', sql, args, projection: const ['id']);
  }

  /// Compiles an EXPLAIN QUERY PLAN plan for the web transport. The worker
  /// wraps the validated SELECT in `EXPLAIN QUERY PLAN`.
  QueryPlan compileExplainPlan() {
    final limit = _resolveLimit();
    final (sql, args) = _compile(limitOverride: limit);
    return _plan('explain', sql, args, limit: limit);
  }

  /// Compiles an aggregate plan for the web transport. [fn] is one of
  /// `SUM`, `AVG`, `MIN`, `MAX`.
  QueryPlan compileAggregatePlan(String fn, String field) {
    _checkQueryable(field);
    if (!_isNumericField(field)) {
      throw ValidationException(
          'Field "$field" is not numeric and cannot be aggregated.',
          field: field);
    }
    final (sql, args) = _compile(aggregate: fn, aggField: field);
    final operation = switch (fn) {
      'SUM' => 'sum',
      'AVG' => 'avg',
      'MIN' => 'min',
      'MAX' => 'max',
      _ => throw ArgumentError.value(fn, 'fn', 'Unknown aggregate function.'),
    };
    return _plan(operation, sql, args);
  }

  QueryPlan _plan(String operation, String sql, List<Object?> args,
      {int? limit, List<String>? projection}) {
    // Projection-aware decode columns mirror the native fetch path: only
    // declared projected columns plus the keyset sort columns are unpacked.
    // Projections touching undeclared extra keys keep full decode (SELECT *).
    final List<String>? decodeColumns;
    if (operation == 'query' && _select != null && _allProjectedDeclared()) {
      decodeColumns = <String>[
        ..._select!,
        for (final f in _projectionOrderFields())
          if (!_select!.contains(f)) f,
      ];
    } else {
      decodeColumns = null;
    }
    return QueryPlan(
      operation: operation,
      compilerVersion: queryCompilerVersion,
      store: _schema.name,
      schemaVersion: _schema.version,
      schemaFingerprint: sha256Hex(canonicalize(_schema.toJson())),
      sql: sql,
      args: List<Object?>.unmodifiable(args),
      limit: limit,
      projection: projection == null ? null : List.unmodifiable(projection),
      decodeColumns: decodeColumns,
      shape: _shapeFingerprint,
    );
  }

  /// Creates the next bidirectional keyset cursor from the window's boundary
  /// rows returned by the compiled-query worker path. [rowLast] is the last
  /// row of the window in the query's declared order, [rowFirst] the first.
  /// The payload carries both tuples, so the same string serves
  /// [keysetAfter] and [keysetBefore].
  String cursorForCompiledRow(
          Map<String, Object?> rowLast, Map<String, Object?> rowFirst) =>
      _makeCursor(rowLast, rowFirst);

  /// Reactive stream of query results.
  /// Watches this query and emits after committed matching changes.
  Stream<List<Map<String, Object?>>> watch() =>
      QueryWatcher(_requirePocket, this).startStream();
}
