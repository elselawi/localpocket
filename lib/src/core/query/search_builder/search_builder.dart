import 'dart:convert';

import 'package:localpocket/src/core/canonical_json.dart';
import 'package:localpocket/src/core/database_adapter.dart';
import 'package:localpocket/src/core/ddl_compiler.dart';
import 'package:localpocket/src/core/errors.dart';
import 'package:localpocket/src/core/hashing.dart';
import 'package:localpocket/src/core/local_pocket.dart';
import 'package:localpocket/src/core/query_plan.dart';
import 'package:localpocket/src/core/query/search_builder/search_dsl.dart';
import 'package:localpocket/src/core/schema.dart';
import 'package:meta/meta.dart';
import 'package:sqlite3/common.dart';

/// {@template localpocket.search_result}
/// A ranked search result from an FTS5 full-text search.
/// {@endtemplate}
class SearchResult {
  /// Creates a ranked search result.
  ///
  /// {@macro localpocket.search_result}
  const SearchResult({required this.id, required this.score});

  /// ID of the matching record.
  final String id;

  /// SQLite FTS ranking score.
  final double score;

  @override
  String toString() => 'SearchResult(id: $id, score: $score)';

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is SearchResult && other.id == id && other.score == score;

  @override
  int get hashCode => Object.hash(id, score);
}

/// {@template localpocket.search_builder}
/// Search builder for FTS5 full-text search.
/// {@endtemplate}
class SearchBuilder implements SearchFilterDsl<SearchBuilder> {
  /// Internal constructor used by [Collection.search].
  ///
  /// {@macro localpocket.search_builder}
  SearchBuilder.internal(this._pocket, this._schema, this._term,
      {DatabaseExecutor? executor})
      : _executor = executor {
    if (_schema.fts == null) {
      throw FtsUnavailableError(
          'Store "${_schema.name}" does not have FTS enabled.');
    }
    final pocket = _pocket;
    if (pocket != null && !pocket.capabilities.hasFts5) {
      throw FtsUnavailableError('FTS5 is not available on this SQLite engine.');
    }
  }

  /// Compile-only constructor used by the web search-plan transport.
  ///
  /// {@macro localpocket.search_builder}
  SearchBuilder.compileOnly(CollectionSchema<Object?> schema, String term)
      : _pocket = null,
        _schema = schema,
        _executor = null,
        _term = term {
    if (_schema.fts == null) {
      throw FtsUnavailableError(
          'Store "${_schema.name}" does not have FTS enabled.');
    }
  }

  final LocalPocket? _pocket;
  final CollectionSchema<Object?> _schema;

  /// The execution context's executor. Non-null only when created from a
  /// transaction-scoped [Collection] — the search then runs through the
  /// TRANSACTION executor and can never fall back to the outer database
  ///.
  final DatabaseExecutor? _executor;

  /// Structural pin for tests: the executor this search will run through.
  @visibleForTesting
  DatabaseExecutor? get debugExecutor => _executor;
  final String _term;
  int? _limit;
  bool _all = false;
  bool _includeArchived = false;
  bool _includeHidden = false;

  /// Limits the number of ranked matches returned by [fetch].
  @override
  SearchBuilder limit(int n) {
    if (n < 0) {
      throw ValidationException('Limit must be non-negative, got $n.');
    }
    _limit = n;
    return this;
  }

  /// Returns all matching FTS results instead of requiring a limit.
  @override
  SearchBuilder all() {
    _all = true;
    return this;
  }

  @override
  SearchBuilder includeArchived() {
    _includeArchived = true;
    return this;
  }

  @override
  SearchBuilder includeHidden() {
    _includeHidden = true;
    return this;
  }

  int? _resolveLimit() {
    if (_all) return null;
    if (_limit == null) {
      throw MissingLimitError(
          'Search on "${_schema.name}" requires .limit(n) or .all().');
    }
    return _limit;
  }

  // --------------------------------------- web spec-lowering snapshot ------

  /// The store this search targets.
  String get store => _schema.name;

  /// The configured result limit, or null when unset or in all-mode.
  int? get limitValue => _limit;

  /// Whether the search explicitly opted out of a result limit.
  bool get allMode => _all;

  /// The archived-scope flag.
  bool get includeArchivedFlag => _includeArchived;

  /// The hidden-scope flag.
  bool get includeHiddenFlag => _includeHidden;

  (String, List<Object?>) _compile({int? limitOverride}) {
    // Query-side parity: the term passes through the same normalization the
    // write-side triggers applied, so declared equivalences (e.g. Arabic alef
    // forms) match regardless of which form is searched. The normalized term
    // rides in plan args — no UDF needed at query time.
    final normalizedTerm = _schema.fts!.normalize.normalize(_term);
    _validateSearchTerm(normalizedTerm);
    if (_schema.fts!.fuzzy) {
      _validateFuzzyTerm(normalizedTerm);
    }
    final store = _schema.name;
    final ftsTable = '${store}_fts';
    final where = <String>['${DdlCompiler.quote(ftsTable)} MATCH ?'];
    final args = <Object?>[normalizedTerm];

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

  /// Compiles a typed plan for the web search-plan transport.
  QueryPlan compilePlan({int? limitOverride}) {
    final (sql, args) = _compile(limitOverride: limitOverride);
    return QueryPlan(
      operation: 'search',
      compilerVersion: queryCompilerVersion,
      store: _schema.name,
      schemaVersion: _schema.version,
      schemaFingerprint: sha256Hex(canonicalize(_schema.toJson())),
      sql: sql,
      args: List<Object?>.unmodifiable(args),
      limit: limitOverride ?? _resolveLimit(),
      projection: null,
      shape: jsonEncode(
          {'term': _term, 'a': _includeArchived, 'h': _includeHidden}),
    );
  }

  static void _validateSearchTerm(String term) {
    final trimmed = term.trim();
    if (trimmed.isEmpty) return;
    // Reject the expression forms that SQLite FTS5 reports as syntax errors.
    // This runs for native and compile-only/web paths so both boundaries expose
    // the same typed ValidationException.
    if (trimmed.contains('"') ||
        RegExp(r'(^|\s)(AND|OR|NOT)(\s|$)', caseSensitive: false)
            .hasMatch(trimmed) ||
        trimmed.startsWith('-') ||
        RegExp(r'\b(AND|OR|NOT)\s*$', caseSensitive: false).hasMatch(trimmed)) {
      throw ValidationException('Invalid search term: $term');
    }
  }

  /// Validates the fuzzy-mode length contract. The trigram tokenizer indexes
  /// contiguous 3-character sequences; a shorter query cannot match any row,
  /// so it is rejected with a typed error instead of silently returning zero
  /// results. Multi-term queries are checked per token.
  static void _validateFuzzyTerm(String term) {
    for (final token in term.split(RegExp(r'\s+'))) {
      if (token.isNotEmpty && token.runes.length < 3) {
        throw ValidationException(
            'Fuzzy search terms must be at least 3 characters '
            '(trigram index): "$token".');
      }
    }
  }

  /// Executes the FTS search and returns ranked results.
  ///
  /// ```dart
  /// final matches = await db.collection('articles')
  ///     .search('sqlite performance')
  ///     .limit(10)
  ///     .fetch();
  /// ```
  ///
  /// An empty or whitespace-only term is a valid no-op that returns no
  /// results. Terms that FTS5 rejects (malformed expressions, unbalanced
  /// quotes, bare operators) throw a typed [ValidationException] instead of a
  /// raw SQLite error.
  Future<List<SearchResult>> fetch() async {
    if (_term.trim().isEmpty) return const [];
    final pocket = _pocket;
    if (pocket == null) {
      throw StateError('A compile-only SearchBuilder cannot execute fetch().');
    }
    final (sql, args) = _compile();
    try {
      final executor = _executor;
      final rows = executor == null
          ? await pocket.traceQuery(sql, args)
          : await executor.rawQuery(sql, args);
      return [
        for (final r in rows)
          SearchResult(
            id: r['id']! as String,
            score: (r['score']! as num).toDouble(),
          )
      ];
    } on SqliteException catch (e) {
      throw ValidationException('Invalid search term: ${e.message}');
    }
  }
}
