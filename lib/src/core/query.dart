import 'dart:convert';

import 'package:collection/collection.dart';

import 'codec.dart';
import 'ddl_compiler.dart';
import 'errors.dart';
import 'local_pocket.dart';
import 'schema.dart';
import 'sql_utils.dart';
import 'store.dart';
import 'watch.dart';

class WhereClause {
  final String sql;
  final List<Object?> args;
  const WhereClause(this.sql, this.args);
}

class OrderClause {
  final String field;
  final bool desc;
  const OrderClause(this.field, {this.desc = false});
}

class _CursorData {
  final List<Object?> values;
  const _CursorData(this.values);
}

/// Parameterized query builder. No user input is ever string
/// interpolated into SQL; values travel as bound parameters.
class QueryBuilder {
  final LocalPocket _pocket;
  final CollectionSchema _schema;

  final List<WhereClause> _where = [];
  final List<WhereClause> _orGroups = [];
  final List<OrderClause> _order = [];
  int? _limit;
  bool _all = false;
  List<String>? _select;
  bool _includeArchived = false;
  bool _includeHidden = false;
  String? _cursor;

  /// Internal: constructed by [Collection].
  /// Internal constructor used by [Collection.query].
  QueryBuilder.internal(this._pocket, StoreTable table)
      : _schema = table.schema;

  /// Name of the collection being queried.
  String get store => _schema.name;

  void _checkQueryable(String field) {
    for (final f in _schema.fields) {
      if (f.name == field && f.encrypted) {
        throw SchemaRegistrationError(
            'Field "$field" is encrypted and cannot be queried or sorted.');
      }
    }
  }

  /// Adds one or more predicates for [field].
  ///
  /// Values are bound as SQL parameters. Multiple supplied operators are
  /// combined with `AND`.
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
      clauses
          .add(WhereClause('$col >= ? AND $col < ?', [between.$1, between.$2]));
    }
    if (startsWith != null) {
      clauses.add(WhereClause(
          "$col LIKE ? ESCAPE '\\'", ['${_escapeLike(startsWith)}%']));
    }
    if (endsWith != null) {
      clauses.add(WhereClause(
          "$col LIKE ? ESCAPE '\\'", ['%${_escapeLike(endsWith)}']));
    }
    if (contains != null) {
      clauses.add(WhereClause(
          "$col LIKE ? ESCAPE '\\'", ['%${_escapeLike(contains)}%']));
    }
    if (isNull == true) clauses.add(WhereClause('$col IS NULL', const []));
    if (isNotNull == true) {
      clauses.add(WhereClause('$col IS NOT NULL', const []));
    }
    _where.addAll(clauses);
    return this;
  }

  /// OR-group of equality predicates, e.g.
  /// `orWhere([{'name': 'a'}, {'qty': 1}])` → `(("name" = ?) OR ("qty" = ?))`.
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
      groupSqls.add('(${parts.join(' AND ')})');
    }
    _orGroups.add(WhereClause('(${groupSqls.join(' OR ')})', args));
    return this;
  }

  static String _escapeLike(String s) =>
      s.replaceAll(r'\', r'\\').replaceAll('%', r'\%').replaceAll('_', r'\_');

  /// Adds an ordering term. An `id` tie-breaker is added automatically.
  QueryBuilder orderBy(String field, {bool desc = false}) {
    _checkQueryable(field);
    _order.add(OrderClause(field, desc: desc));
    return this;
  }

  /// Restricts the maximum number of records returned by [fetch].
  ///
  /// A limit is required unless [all] is selected. Use modest limits for UI
  /// screens and keyset pagination for large collections.
  QueryBuilder limit(int n) {
    _limit = n;
    return this;
  }

  /// Explicitly opt out of a limit.
  /// Removes the mandatory result limit.
  ///
  /// Use with care for large collections because all matching rows are
  /// materialized in memory.
  QueryBuilder all() {
    _all = true;
    return this;
  }

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
  QueryBuilder select(List<String> fields) {
    _select = fields;
    return this;
  }

  /// Includes records marked as archived.
  QueryBuilder includeArchived() {
    _includeArchived = true;
    return this;
  }

  /// Includes records hidden by synchronization visibility state.
  QueryBuilder includeHidden() {
    _includeHidden = true;
    return this;
  }

  List<OrderClause> get _effectiveOrder {
    final o = [..._order];
    if (o.isEmpty || o.last.field != 'id') {
      o.add(const OrderClause('id', desc: false));
    }
    return o;
  }

  List<String> get _sortSignature =>
      [for (final o in _effectiveOrder) '${o.field}:${o.desc ? 'd' : 'a'}'];

  int? _resolveLimit() {
    if (_all) return null;
    if (_limit == null) {
      throw MissingLimitError(
          'Query on "$name" requires .limit(n) or .all().');
    }
    return _limit;
  }

  String get name => _schema.name;

  /// Exposes internals needed by the watch layer (public because watches live
  /// in a separate library).
  int? get limitValue => _limit;
  bool get allMode => _all;
  bool get isProjection => _select != null;

  // ------------------------------------------------------------- compiling --

  /// Bounded cache of compiled SQL templates keyed by query shape:
  /// avoids re-quoting columns and re-joining fragments
  /// on the hot path. Values are the SQL without the LIMIT clause — the limit
  /// is appended dynamically because it varies per call. The key is built from
  /// shape components (store, scope, where/or fragments, columns, order), so
  /// argument values never pollute the cache.
  static final Map<String, String> _sqlTemplateCache = {};

  static String _cachedSqlTemplate(String key, String Function() build) {
    final hit = _sqlTemplateCache[key];
    if (hit != null) return hit;
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
      final (ks, ksArgs) = _keysetPredicate(data);
      where.add(ks);
      args.addAll(ksArgs);
    }
    final whereSql = where.isEmpty ? '' : ' WHERE ${where.join(' AND ')}';

    final columns = forCount
        ? (countDistinct
            ? 'COUNT(DISTINCT ${DdlCompiler.quote(aggField!)}) AS c'
            : 'COUNT(*) AS c')
        : (aggregate != null
            ? '$aggregate(${DdlCompiler.quote(aggField!)}) AS v'
            : _selectColumns);

    final orderSql = (forCount || aggregate != null)
        ? ''
        : ' ORDER BY ${_effectiveOrder.map((o) => '${DdlCompiler.quote(o.field)} ${o.desc ? 'DESC' : 'ASC'}').join(', ')}';

    final shapeKey = '$name|a:$_includeArchived|h:$_includeHidden|'
        'w:${where.join('|')}|c:$columns|o:$orderSql|cd:$countDistinct|'
        'fc:$forCount|ag:$aggregate|af:$aggField';
    final baseSql = _cachedSqlTemplate(
        shapeKey,
        () =>
            'SELECT $columns FROM ${DdlCompiler.quote(_schema.name)}$whereSql$orderSql');

    final limit = (forCount || aggregate != null)
        ? null
        : (limitOverride ?? _resolveLimit());
    final limitSql = limit == null ? '' : ' LIMIT $limit';

    return ('$baseSql$limitSql', args);
  }

  String get _selectColumns {
    if (_select == null) return '*';
    final cols = <String>[..._select!];
    for (final o in _effectiveOrder) {
      if (!cols.contains(o.field)) cols.add(o.field);
    }
    return cols.map(DdlCompiler.quote).join(', ');
  }

  _CursorData _decodeCursor(String cursor) {
    final jsonStr = utf8.decode(base64Url.decode(cursor));
    final m = jsonDecode(jsonStr) as Map<String, Object?>;
    final storeName = m['store'];
    final schemaVer = m['schemaVer'];
    final sort = (m['sort'] as List).cast<String>();
    final values = (m['values'] as List).cast<Object?>();
    final expectedSort = _sortSignature;
    if (storeName != _schema.name ||
        schemaVer != _schema.version ||
        !const ListEquality<String>().equals(sort, expectedSort) ||
        values.length != expectedSort.length) {
      throw StaleCursorError(
          'Cursor does not match this query shape (store/schema/sort).');
    }
    return _CursorData(values);
  }

  (String, List<Object?>) _keysetPredicate(_CursorData data) {
    final order = _effectiveOrder;
    final values = data.values;

    // Row-value fast path: when every sort column has the
    // same direction and no cursor value is NULL, `(a, b) > (?, ?)` is exactly
    // equivalent to the OR-chain below (verified on SQLite 3.53.4) and reads
    // as one compact predicate. NULL values and mixed directions fall back to
    // the OR-chain to preserve the existing (documented) semantics.
    final uniform = order.every((o) => o.desc == order.first.desc);
    final noNull = values.every((v) => v != null);
    if (order.length >= 2 && uniform && noNull) {
      final cols =
          [for (final o in order) DdlCompiler.quote(o.field)].join(', ');
      final op = order.first.desc ? '<' : '>';
      final ph = List.filled(values.length, '?').join(', ');
      return ('($cols) $op ($ph)', values);
    }

    final clauses = <String>[];
    final args = <Object?>[];
    for (var i = 0; i < order.length; i++) {
      final parts = <String>[];
      for (var j = 0; j <= i; j++) {
        final col = DdlCompiler.quote(order[j].field);
        final op = order[j].desc ? '<' : '>';
        if (j == i) {
          parts.add('$col $op ?');
          args.add(values[j]);
        } else {
          parts.add('$col = ?');
          args.add(values[j]);
        }
      }
      clauses.add('(${parts.join(' AND ')})');
    }
    return ('(${clauses.join(' OR ')})', args);
  }

  String _makeCursor(Map<String, Object?> lastFullRow) {
    final order = _effectiveOrder;
    final values = [for (final o in order) lastFullRow[o.field]];
    final payload = {
      'store': _schema.name,
      'schemaVer': _schema.version,
      'sort': _sortSignature,
      'values': values,
    };
    return base64UrlEncode(utf8.encode(jsonEncode(payload)));
  }

  // -------------------------------------------------------------- execution --

  /// Executes the query and returns one page of records.
  Future<Page> fetch() async {
    final limit = _resolveLimit();
    final (sql, args) =
        _compile(limitOverride: limit == null ? null : limit + 1);
    final rows = await _pocket.traceQuery(sql, args);
    final hasMore = limit != null && rows.length > limit;
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
        cipher: _pocket.fieldCipher,
        cryptoProvider: _pocket.cryptoProvider,
      );
    } else {
      decoded = decodeDbRows(
        _schema,
        pageRows,
        cipher: _pocket.fieldCipher,
        cryptoProvider: _pocket.cryptoProvider,
      );
    }

    final items = <Map<String, Object?>>[];
    Map<String, Object?>? lastFull;
    for (final full in decoded) {
      lastFull = full;
      if (_select != null) {
        items.add({
          for (final k in _select!)
            if (full.containsKey(k)) k: full[k]
        });
      } else {
        items.add(full);
      }
    }
    String? cursor;
    if (hasMore && lastFull != null) {
      cursor = _makeCursor(lastFull);
    }
    return Page(items: items, nextCursor: cursor, hasMore: hasMore);
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
  Future<Page> keysetAfter(String cursor) {
    _cursor = cursor;
    return fetch();
  }

  /// Counts records matching the current filters.
  Future<int> count() async {
    final (sql, args) = _compile(forCount: true);
    final rows = await _pocket.traceQuery(sql, args);
    return firstIntValue(rows) ?? 0;
  }

  /// Counts distinct values of [field] matching the current filters.
  Future<int> countDistinct(String field) async {
    _checkQueryable(field);
    final (sql, args) =
        _compile(forCount: true, countDistinct: true, aggField: field);
    final rows = await _pocket.traceQuery(sql, args);
    return firstIntValue(rows) ?? 0;
  }

  /// Returns the distinct values of [field] matching the current filters.
  Future<List<Object?>> distinct(String field) async {
    _checkQueryable(field);
    final saved = _select;
    _select = [field];
    final limit = _all ? null : (_limit ?? 1000);
    try {
      final (sql, args) = _compile(limitOverride: limit);
      final distinctSql = sql.replaceFirst('SELECT ', 'SELECT DISTINCT ');
      final rows = await _pocket.traceQuery(distinctSql, args);
      return [for (final r in rows) r[field]];
    } finally {
      _select = saved;
    }
  }

  Future<num?> _aggregate(String fn, String field) async {
    _checkQueryable(field);
    final (sql, args) = _compile(aggregate: fn, aggField: field);
    final rows = await _pocket.traceQuery(sql, args);
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
    final saved = _select;
    _select = ['id'];
    try {
      final (sql, args) = _compile();
      final rows = await _pocket.traceQuery(sql, args);
      return [for (final r in rows) r['id'] as String];
    } finally {
      _select = saved;
    }
  }

  /// Returns SQLite's `EXPLAIN QUERY PLAN` output for this query.
  ///
  /// This is useful when deciding whether a declared [IndexSpec] matches a
  /// production query shape.
  Future<String> explain() async {
    final limit = _resolveLimit();
    final (sql, args) = _compile(limitOverride: limit);
    final rows = await _pocket.traceQuery('EXPLAIN QUERY PLAN $sql', args);
    return rows.map((r) => r['detail']).join('\n');
  }

  /// Compiled SQL + args, for tests and goldens.
  (String, List<Object?>) debugCompile() => _compile();

  /// Reactive stream of query results.
  /// Watches this query and emits after committed matching changes.
  Stream<List<Map<String, Object?>>> watch() =>
      QueryWatcher(_pocket, this).start();
}

/// A ranked search result from an FTS5 full-text query.
class SearchResult {
  /// ID of the matching record.
  final String id;

  /// SQLite FTS ranking score.
  final double score;

  /// Creates a ranked search result.
  const SearchResult({required this.id, required this.score});

  @override
  String toString() => 'SearchResult(id: $id, score: $score)';

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is SearchResult && other.id == id && other.score == score;

  @override
  int get hashCode => Object.hash(id, score);
}

/// Query builder for FTS5 full-text search.
class SearchQueryBuilder {
  final LocalPocket _pocket;
  final CollectionSchema _schema;
  final String _term;
  int? _limit;
  bool _all = false;
  bool _includeArchived = false;
  bool _includeHidden = false;

  SearchQueryBuilder.internal(this._pocket, this._schema, this._term) {
    if (_schema.fts == null) {
      throw FtsUnavailableError(
          'Store "${_schema.name}" does not have FTS enabled.');
    }
    if (!_pocket.capabilities.hasFts5) {
      throw FtsUnavailableError(
          'FTS5 is not available on this SQLite engine.');
    }
  }

  /// Limits the number of ranked matches returned by [fetch].
  SearchQueryBuilder limit(int n) {
    _limit = n;
    return this;
  }

  /// Returns all matching FTS results instead of requiring a limit.
  SearchQueryBuilder all() {
    _all = true;
    return this;
  }

  SearchQueryBuilder includeArchived() {
    _includeArchived = true;
    return this;
  }

  SearchQueryBuilder includeHidden() {
    _includeHidden = true;
    return this;
  }

  int? _resolveLimit() {
    if (_all) return null;
    if (_limit == null) {
      throw MissingLimitError(
          'Search query on "${_schema.name}" requires .limit(n) or .all().');
    }
    return _limit;
  }

  (String, List<Object?>) _compile({int? limitOverride}) {
    final store = _schema.name;
    final ftsTable = '${store}_fts';
    final where = <String>['${DdlCompiler.quote(ftsTable)} MATCH ?'];
    final args = <Object?>[_term];

    if (!_includeArchived) where.add('b.archived = 0');
    if (!_includeHidden) where.add('b.hidden = 0');

    final whereSql = ' WHERE ${where.join(' AND ')}';
    final limit = limitOverride ?? _resolveLimit();
    final limitSql = limit == null ? '' : ' LIMIT $limit';

    final sql = 'SELECT b.id, rank AS score '
        'FROM ${DdlCompiler.quote(ftsTable)} '
        'JOIN ${DdlCompiler.quote(store)} b ON b.rowid = ${DdlCompiler.quote(ftsTable)}.rowid'
        '$whereSql ORDER BY rank$limitSql';
    return (sql, args);
  }

  /// Compiled SQL + args, for tests.
  (String, List<Object?>) debugCompile() => _compile();

  /// Executes the FTS query and returns ranked results.
  ///
  /// ```dart
  /// final matches = await db.collection('articles')
  ///     .search('sqlite performance')
  ///     .limit(10)
  ///     .fetch();
  /// ```
  Future<List<SearchResult>> fetch() async {
    final (sql, args) = _compile();
    final rows = await _pocket.traceQuery(sql, args);
    return [
      for (final r in rows)
        SearchResult(
          id: r['id'] as String,
          score: (r['score'] as num).toDouble(),
        )
    ];
  }
}
