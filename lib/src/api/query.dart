/// Query vocabulary for the facade: declarative specs, pages, cursors, and
/// full-text search.
///
/// A [QuerySpec] is a value: predicate, order, projection, scope, and page
/// size. Every terminal lowers it into the runtime's fully serializable
/// query data — SQL never crosses a runtime boundary, and the kernel owns
/// the page facts (boundaries, cursors, hasNext/hasPrev).
library;

import '../contract/contract.dart';
import '../typed/cond.dart';
import '../typed/field_def.dart';
import '../typed/limits.dart';
import '../typed/store_def.dart';
import 'row.dart';

/// {@template localpocket.query_spec}
/// One declarative read: predicate, order, projection, scope, page size.
///
/// `where` is an AND-list of [Cond] trees — the list elements AND together,
/// and each element may itself be an arbitrarily deep boolean expression
/// built with `&`, `|`, and `~`. [limit] is required by the paging
/// terminals (`query`, `ids`, `watch`, search); pass [Limits.unbounded] to
/// run without a page size. A limit on a non-paging terminal (`count`,
/// aggregates) is accepted and passed through to the kernel.
/// {@endtemplate}
final class QuerySpec<S extends StoreDef<S>> {
  /// {@macro localpocket.query_spec}
  const QuerySpec({
    this.where = const [],
    this.orderBy = const [],
    this.select = const [],
    this.limit,
    this.includeArchived = false,
    this.includeHidden = false,
  });

  /// AND-list of predicate trees.
  final List<Cond<S>> where;

  /// Order terms ([FieldDef.asc] / [FieldDef.desc]).
  final List<OrderTerm<S>> orderBy;

  /// Projection: only these fields are carried in the resulting rows.
  /// Reading anything else from a projected row throws
  /// [FieldNotSelectedError].
  final List<FieldDef<S, Object?>> select;

  /// Page size, or [Limits.unbounded] for no page size.
  final int? limit;

  /// Include archived records.
  final bool includeArchived;

  /// Include records hidden by synchronization visibility state.
  final bool includeHidden;
}

/// {@template localpocket.search_spec}
/// One declarative full-text search: term, page size, scope.
/// {@endtemplate}
final class SearchSpec<S extends StoreDef<S>> {
  /// {@macro localpocket.search_spec}
  const SearchSpec({
    required this.term,
    this.limit,
    this.includeArchived = false,
    this.includeHidden = false,
  });

  /// The search term.
  final String term;

  /// Page size, or [Limits.unbounded] for no page size.
  final int? limit;

  /// Include archived records.
  final bool includeArchived;

  /// Include records hidden by synchronization visibility state.
  final bool includeHidden;
}

/// {@template localpocket.cursor}
/// An opaque continuation token minted by the kernel for one page of one
/// query shape. It is meaningful only to the same store, order, and scope it
/// was minted under — replaying it against a different shape fails with
/// [StaleCursorError].
/// {@endtemplate}
final class Cursor<S extends StoreDef<S>> {
  const Cursor.internal(this._token);

  /// The opaque kernel-minted token.
  final String _token;

  /// The opaque token, for the layer that assembles continuations.
  String get token => _token;

  @override
  String toString() => 'Cursor(…)';
}

/// {@template localpocket.page}
/// One page of typed rows plus the kernel-owned continuation facts.
///
/// [next] and [prev] consume the page's own cursors; they return `null`
/// when there is nothing to continue into.
/// {@endtemplate}
final class Page<S extends StoreDef<S>> {
  Page.internal({
    required this.items,
    required this.hasNext,
    required this.hasPrev,
    required this.nextCursor,
    required this.prevCursor,
    required Future<Page<S>?> Function(Cursor<S> cursor, bool backward)
        continuation,
  }) : _continuation = continuation;

  /// The rows of this page, in the requested order.
  final List<Row<S>> items;

  /// Whether the database observed a row after this window.
  final bool hasNext;

  /// Whether rows were observed before this window.
  final bool hasPrev;

  /// Cursor for the next keyset page, or `null` on the last page.
  final Cursor<S>? nextCursor;

  /// Cursor for the previous keyset page, or `null` at the start.
  final Cursor<S>? prevCursor;

  final Future<Page<S>?> Function(Cursor<S> cursor, bool backward)
      _continuation;

  /// The page after this one, or `null` when this is the last page.
  Future<Page<S>?> next() {
    final cursor = nextCursor;
    return cursor == null ? Future.value(null) : _continuation(cursor, false);
  }

  /// The page before this one, or `null` when nothing precedes this window.
  Future<Page<S>?> prev() {
    final cursor = prevCursor;
    return cursor == null ? Future.value(null) : _continuation(cursor, true);
  }
}

/// {@template localpocket.search_hit}
/// One full-text search hit: the record id, its relevance score, and a lazy
/// typed fetch of the record.
/// {@endtemplate}
final class SearchHit<S extends StoreDef<S>> {
  SearchHit.internal(this.id, this.score, this._fetchRow);

  /// The record id.
  final String id;

  /// The hit's relevance score.
  final double score;

  final Future<Row<S>?> Function() _fetchRow;

  /// Fetches the record this hit points at (null when it vanished between
  /// the search and the fetch).
  Future<Row<S>?> fetch() => _fetchRow();

  @override
  String toString() => 'SearchHit($id, $score)';
}

// ---------------------------------------------------------------------------
// lowering: specs → fully serializable contract data
// ---------------------------------------------------------------------------

/// Lowers one spec into contract data. [requireLimit] marks the paging
/// terminals: they refuse to run without a page size or an explicit
/// unbounded, mirroring the kernel's own refusal to guess limits.
QuerySpecData lowerQuerySpec<S extends StoreDef<S>>(
  QuerySpec<S> spec,
  S def, {
  bool requireLimit = false,
  String? cursor,
  bool backward = false,
}) {
  final unbounded = spec.limit == Limits.unbounded;
  final limit = unbounded ? null : spec.limit;
  if (requireLimit && limit == null && !unbounded) {
    throw MissingLimitError();
  }
  return QuerySpecData(
    predicate: lowerPredicate(spec.where, def),
    order: [
      for (final term in spec.orderBy) _orderTerm(term, def),
    ],
    select: spec.select.isEmpty
        ? null
        : [
            for (final field in spec.select) _fieldName(field, def),
          ],
    limit: limit,
    all: unbounded,
    includeArchived: spec.includeArchived,
    includeHidden: spec.includeHidden,
    cursor: cursor,
    backward: backward,
  );
}

/// Lowers one search spec into contract data.
SearchSpecData lowerSearchSpec<S extends StoreDef<S>>(
  SearchSpec<S> spec,
  S def, {
  bool requireLimit = false,
}) {
  final unbounded = spec.limit == Limits.unbounded;
  final limit = unbounded ? null : spec.limit;
  if (requireLimit && limit == null && !unbounded) {
    throw MissingLimitError();
  }
  return SearchSpecData(
    term: spec.term,
    limit: limit,
    all: unbounded,
    includeArchived: spec.includeArchived,
    includeHidden: spec.includeHidden,
  );
}

/// Builds a no-page-size spec for the aggregate terminals (aggregates never
/// paginate, so they always run unbounded).
QuerySpecData lowerAggregateSpec<S extends StoreDef<S>>(
  List<Cond<S>> where,
  S def, {
  bool includeArchived = false,
  bool includeHidden = false,
}) =>
    QuerySpecData(
      predicate: lowerPredicate(where, def),
      all: true,
      includeArchived: includeArchived,
      includeHidden: includeHidden,
    );

/// Lowers an AND-list of condition trees into one serializable predicate
/// tree. An empty list carries no predicate (match everything).
PredicateSpecData? lowerPredicate<S extends StoreDef<S>>(
  List<Cond<S>> where,
  S def,
) {
  if (where.isEmpty) return null;
  final children = [
    for (final condition in where) _predicateNode(condition, def)
  ];
  return children.length == 1 ? children.single : AllSpecData(children);
}

PredicateSpecData _predicateNode<S extends StoreDef<S>>(
  Cond<S> condition,
  S def,
) =>
    switch (condition) {
      FieldCond<S>() => _leaf(condition, def),
      AllCond<S>(:final children) => AllSpecData([
          for (final child in children) _predicateNode(child, def),
        ]),
      AnyCond<S>(:final children) => AnySpecData([
          for (final child in children) _predicateNode(child, def),
        ]),
      NotCond<S>(:final child) => NotSpecData(_predicateNode(child, def)),
    };

/// Lowers one leaf. The owner check is the runtime backstop for a cast that
/// defeated the phantom store type; `eq(null)` is the documented IS NULL
/// shorthand and is routed there (`= NULL` never matches).
PredicateSpecData _leaf<S extends StoreDef<S>>(FieldCond<S> condition, S def) {
  _checkOwner(condition.owner, def, condition.field);
  final op = _opByName(condition.operator, condition.field);
  if (op == QueryConditionOp.eq && condition.args.single == null) {
    return LeafSpecData(QueryConditionData(
      condition.field,
      QueryConditionOp.isNull,
    ));
  }
  if (op == QueryConditionOp.inValues || op == QueryConditionOp.between) {
    return LeafSpecData(QueryConditionData(condition.field, op,
        values: List<Object?>.unmodifiable(condition.args)));
  }
  return LeafSpecData(QueryConditionData(
    condition.field,
    op,
    value: condition.args.isEmpty ? null : condition.args.single,
  ));
}

QueryConditionOp _opByName(String name, String field) {
  for (final op in QueryConditionOp.values) {
    if (op.name == name) return op;
  }
  throw ArgumentError.value(
    name,
    field,
    'Unknown condition operator.',
  );
}

QueryOrderTermData _orderTerm<S extends StoreDef<S>>(
  OrderTerm<S> term,
  S def,
) {
  _checkOwner(term.field.owner, def, term.field.name);
  return QueryOrderTermData(term.field.name, desc: term.desc);
}

String _fieldName<S extends StoreDef<S>>(FieldDef<S, Object?> field, S def) {
  _checkOwner(field.owner, def, field.name);
  return field.name;
}

void _checkOwner<S extends StoreDef<S>>(Object? owner, S def, String name) {
  if (!identical(owner, def)) {
    throw typedStoreMismatch(
      owner: owner,
      name: name,
      target: S,
      targetKind: 'handle',
    );
  }
}

/// The projection set a spec implies: the selected field names, or `null`
/// when the spec projects nothing (full rows).
Set<String>? projectedOf<S extends StoreDef<S>>(QuerySpec<S> spec) =>
    spec.select.isEmpty
        ? null
        : <String>{for (final field in spec.select) field.name};
