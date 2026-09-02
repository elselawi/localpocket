part of 'contract.dart';

/// A fully serializable read request for one store (predicate, scope, order,
/// projection, pagination). The result shape is chosen by the request variant;
/// the kernel compiles the spec — SQL never crosses a runtime boundary, and
/// the kernel owns page facts (cursors, hasNext/hasPrev).
///
/// {@template localpocket.query_spec_data}
/// {@endtemplate}
final class QuerySpecData {
  /// {@macro localpocket.query_spec_data}
  const QuerySpecData({
    this.where = const [],
    this.orGroups = const [],
    this.predicate,
    this.order = const [],
    this.limit,
    this.all = false,
    this.select,
    this.includeArchived = false,
    this.includeHidden = false,
    this.cursor,
    this.backward = false,
  });

  /// Conjunctive conditions every row must satisfy.
  final List<QueryConditionData> where;

  /// Groups where at least one whole group must match (groups AND, members
  /// of a group OR).
  final List<List<QueryConditionData>> orGroups;

  /// Authoritative filter when present; the flat [where]/[orGroups] lists
  /// remain for callers needing only conjunctions of simple comparisons.
  final PredicateSpecData? predicate;

  /// Ordering terms applied in sequence.
  final List<QueryOrderTermData> order;

  /// Maximum number of rows in the returned page.
  final int? limit;

  /// When true, drops the default `limit` cap and returns every match.
  final bool all;

  /// Field projection; null returns whole documents.
  final List<String>? select;

  /// Whether archived records participate in the read.
  final bool includeArchived;

  /// Whether hidden records participate in the read.
  final bool includeHidden;

  /// Opaque continuation token minted by the kernel.
  final String? cursor;

  /// Whether the window is consumed backward (previous page).
  final bool backward;

  /// Serializes the spec into its wire map.
  Map<String, Object?> toJson() => {
        'where': [for (final c in where) c.toJson()],
        'orGroups': [
          for (final g in orGroups) [for (final c in g) c.toJson()],
        ],
        if (predicate != null) 'predicate': predicate!.toJson(),
        'order': [for (final o in order) o.toJson()],
        if (limit != null) 'limit': limit,
        'all': all,
        if (select != null) 'select': select,
        'includeArchived': includeArchived,
        'includeHidden': includeHidden,
        if (cursor != null) 'cursor': cursor,
        'backward': backward,
      };

  /// Decodes a spec from its wire map; throws [WireException] when malformed.
  static QuerySpecData fromJson(Object? raw) {
    if (raw is! Map) throw WireException('Malformed query spec.');
    final m = raw.map((k, v) => MapEntry(k.toString(), v));
    List<QueryConditionData> conditions(Object? v) {
      if (v is! List) throw WireException('Malformed query conditions.');
      return [for (final c in v) QueryConditionData.fromJson(c)];
    }

    final whereRaw = m['where'];
    final groupsRaw = m['orGroups'];
    final orderRaw = m['order'];
    final selectRaw = m['select'];
    final limitRaw = m['limit'];
    final cursorRaw = m['cursor'];
    return QuerySpecData(
      where: conditions(whereRaw),
      orGroups: [
        // Absence is the documented empty default; a present wrong-typed
        // group list can never silently degrade the filter.
        if (groupsRaw != null && groupsRaw is! List)
          throw WireException('Malformed query orGroups.')
        else if (groupsRaw is List)
          for (final g in groupsRaw) conditions(g),
      ],
      predicate: !m.containsKey('predicate') || m['predicate'] == null
          ? null
          : m['predicate'] is Map
              ? PredicateSpecData.fromJson(m['predicate'])
              // A present wrong-typed predicate must never degrade into an
              // unfiltered query.
              : throw WireException('Malformed query predicate.'),
      order: [
        if (orderRaw != null && orderRaw is! List)
          throw WireException('Malformed query order.')
        else if (orderRaw is List)
          for (final o in orderRaw) QueryOrderTermData.fromJson(o),
      ],
      limit: limitRaw == null ? null : _wireInt(limitRaw, 'limit'),
      all: _optWireBool(m['all'], 'all', false),
      select: selectRaw == null ? null : _wireStringList(selectRaw, 'select'),
      includeArchived:
          _optWireBool(m['includeArchived'], 'includeArchived', false),
      includeHidden: _optWireBool(m['includeHidden'], 'includeHidden', false),
      cursor: _optWireString(cursorRaw, 'cursor'),
      backward: _optWireBool(m['backward'], 'backward', false),
    );
  }
}

/// {@template localpocket.query_condition_data}
/// One comparison predicate.
/// {@endtemplate}
final class QueryConditionData {
  /// {@macro localpocket.query_condition_data}
  const QueryConditionData(this.field, this.op, {this.value, this.values});

  /// Field the comparison applies to.
  final String field;

  /// Comparison operator.
  final QueryConditionOp op;

  /// Comparison value (ignored by [QueryConditionOp.inValues]).
  final Object? value;

  /// Values for the `inValues` operator.
  final List<Object?>? values;

  /// Serializes the condition into its wire map.
  Map<String, Object?> toJson() => {
        'field': field,
        'op': op.name,
        if (values != null)
          'values': [for (final v in values!) encodeWireValue(v)]
        else
          'value': encodeWireValue(value),
      };

  /// Decodes a condition from its wire map; throws [WireException] when
  /// malformed or the operator is unknown.
  static QueryConditionData fromJson(Object? raw) {
    if (raw is! Map) throw WireException('Malformed query condition.');
    final m = raw.map((k, v) => MapEntry(k.toString(), v));
    final field = m['field'];
    final opName = m['op'];
    if (field is! String || opName is! String) {
      throw WireException('Malformed query condition.');
    }
    final op =
        QueryConditionOp.values.where((o) => o.name == opName).firstOrNull;
    if (op == null) throw WireException('Unknown query operator: $opName');
    return QueryConditionData(
      field,
      op,
      value: decodeWireValue(m['value']),
      values: m['values'] is List
          ? [for (final v in m['values'] as List) decodeWireValue(v)]
          : null,
    );
  }
}

/// Predicate operators mirroring the condition DSL.
enum QueryConditionOp {
  /// Equality.
  eq,

  /// Inequality.
  neq,

  /// Strictly greater than.
  gt,

  /// Greater than or equal.
  gte,

  /// Strictly less than.
  lt,

  /// Less than or equal.
  lte,

  /// Membership in a list of values.
  inValues,

  /// Inclusive range between two values.
  between,

  /// Prefix match.
  startsWith,

  /// Suffix match.
  endsWith,

  /// Substring match.
  contains,

  /// Field is absent or null.
  isNull,

  /// Field is present and non-null.
  isNotNull,
}

/// One node of a serializable boolean predicate tree (leaf / not / all / any),
/// mirroring the kernel's predicate algebra so structure survives a runtime
/// boundary; the kernel compiles it, SQL never does.
///
/// {@template localpocket.predicate_spec_data}
/// {@endtemplate}
sealed class PredicateSpecData {
  /// {@macro localpocket.predicate_spec_data}
  const PredicateSpecData();

  /// Serializes the node into its wire map.
  Map<String, Object?> toJson();

  /// Decodes a node from its wire map; throws [WireException] when malformed
  /// or the kind is unknown.
  static PredicateSpecData fromJson(Object? raw) {
    if (raw is! Map) throw WireException('Malformed predicate tree.');
    final m = raw.map((k, v) => MapEntry(k.toString(), v));
    List<PredicateSpecData> children(Object? v) {
      if (v is! List) throw WireException('Malformed predicate children.');
      return [for (final c in v) PredicateSpecData.fromJson(c)];
    }

    switch (m['kind']) {
      case 'leaf':
        return LeafSpecData(QueryConditionData.fromJson(m));
      case 'not':
        return NotSpecData(PredicateSpecData.fromJson(m['child']));
      case 'all':
        return AllSpecData(children(m['children']));
      case 'any':
        return AnySpecData(children(m['children']));
      default:
        throw WireException('Unknown predicate node kind: ${m['kind']}');
    }
  }
}

/// One comparison leaf. Values are wire-encoded through the condition codec.
///
/// {@template localpocket.leaf_spec_data}
/// {@endtemplate}
final class LeafSpecData extends PredicateSpecData {
  /// {@macro localpocket.leaf_spec_data}
  const LeafSpecData(this.condition);

  /// The comparison to evaluate.
  final QueryConditionData condition;

  @override
  Map<String, Object?> toJson() => {
        'kind': 'leaf',
        ...condition.toJson(),
      };
}

/// A negation — SQL `NOT (...)`.
///
/// {@template localpocket.not_spec_data}
/// {@endtemplate}
final class NotSpecData extends PredicateSpecData {
  /// {@macro localpocket.not_spec_data}
  const NotSpecData(this.child);

  /// The node to negate.
  final PredicateSpecData child;

  @override
  Map<String, Object?> toJson() => {'kind': 'not', 'child': child.toJson()};
}

/// A conjunction — the children AND together.
///
/// {@template localpocket.all_spec_data}
/// {@endtemplate}
final class AllSpecData extends PredicateSpecData {
  /// {@macro localpocket.all_spec_data}
  const AllSpecData(this.children);

  /// The nodes to AND together.
  final List<PredicateSpecData> children;

  @override
  Map<String, Object?> toJson() => {
        'kind': 'all',
        'children': [for (final c in children) c.toJson()],
      };
}

/// A disjunction — the children OR together.
///
/// {@template localpocket.any_spec_data}
/// {@endtemplate}
final class AnySpecData extends PredicateSpecData {
  /// {@macro localpocket.any_spec_data}
  const AnySpecData(this.children);

  /// The nodes to OR together.
  final List<PredicateSpecData> children;

  @override
  Map<String, Object?> toJson() => {
        'kind': 'any',
        'children': [for (final c in children) c.toJson()],
      };
}

/// {@template localpocket.query_order_term_data}
/// One ordering term.
/// {@endtemplate}
final class QueryOrderTermData {
  /// {@macro localpocket.query_order_term_data}
  const QueryOrderTermData(this.field, {this.desc = false});

  /// Field to order by.
  final String field;

  /// Whether the order is descending (default ascending).
  final bool desc;

  /// Serializes the term into its wire map.
  Map<String, Object?> toJson() => {'field': field, 'desc': desc};

  /// Decodes a term from its wire map; throws [WireException] when malformed.
  static QueryOrderTermData fromJson(Object? raw) {
    if (raw is! Map) throw WireException('Malformed order term.');
    final m = raw.map((k, v) => MapEntry(k.toString(), v));
    final field = m['field'];
    if (field is! String) throw WireException('Malformed order term.');
    return QueryOrderTermData(field, desc: m['desc'] == true);
  }
}

/// Aggregate functions the kernel can compute over a numeric field.
enum AggregateFn {
  /// Sum of the field values.
  sum,

  /// Mean of the field values.
  avg,

  /// Smallest field value.
  min,

  /// Largest field value.
  max,
}

/// {@template localpocket.search_spec_data}
/// A serializable full-text search request.
/// {@endtemplate}
final class SearchSpecData {
  /// {@macro localpocket.search_spec_data}
  const SearchSpecData({
    required this.term,
    this.limit,
    this.all = false,
    this.includeArchived = false,
    this.includeHidden = false,
  });

  /// The search term (FTS5 query syntax).
  final String term;

  /// Maximum number of hits to return.
  final int? limit;

  /// When true, drops the default hit cap and returns every match.
  final bool all;

  /// Whether archived records participate in the search.
  final bool includeArchived;

  /// Whether hidden records participate in the search.
  final bool includeHidden;

  /// Serializes the spec into its wire map.
  Map<String, Object?> toJson() => {
        'term': term,
        if (limit != null) 'limit': limit,
        'all': all,
        'includeArchived': includeArchived,
        'includeHidden': includeHidden,
      };

  /// Decodes a spec from its wire map; throws [WireException] when malformed.
  static SearchSpecData fromJson(Object? raw) {
    if (raw is! Map) throw WireException('Malformed search spec.');
    final m = raw.map((k, v) => MapEntry(k.toString(), v));
    final term = m['term'];
    if (term is! String) throw WireException('Malformed search term.');
    final limit = m['limit'];
    return SearchSpecData(
      term: term,
      limit: limit is int ? limit : null,
      all: m['all'] == true,
      includeArchived: m['includeArchived'] == true,
      includeHidden: m['includeHidden'] == true,
    );
  }
}
