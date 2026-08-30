part of 'contract.dart';

/// A fully serializable read request for one store: predicate, scope, order,
/// projection, and pagination.
///
/// The requested result shape is expressed by the request variant
/// (query/count/ids/…), and the kernel compiles the spec — SQL never crosses
/// a runtime boundary, and the kernel owns page facts (boundaries, cursors,
/// hasNext/hasPrev).
final class QuerySpecData {
  const QuerySpecData({
    this.where = const [],
    this.orGroups = const [],
    this.order = const [],
    this.limit,
    this.all = false,
    this.select,
    this.includeArchived = false,
    this.includeHidden = false,
    this.cursor,
    this.backward = false,
  });

  final List<QueryConditionData> where;
  final List<List<QueryConditionData>> orGroups;
  final List<QueryOrderTermData> order;
  final int? limit;
  final bool all;
  final List<String>? select;
  final bool includeArchived;
  final bool includeHidden;

  /// Opaque continuation token minted by the kernel.
  final String? cursor;

  /// Whether the window is consumed backward (previous page).
  final bool backward;

  Map<String, Object?> toJson() => {
        'where': [for (final c in where) c.toJson()],
        'orGroups': [
          for (final g in orGroups) [for (final c in g) c.toJson()],
        ],
        'order': [for (final o in order) o.toJson()],
        if (limit != null) 'limit': limit,
        'all': all,
        if (select != null) 'select': select,
        'includeArchived': includeArchived,
        'includeHidden': includeHidden,
        if (cursor != null) 'cursor': cursor,
        'backward': backward,
      };

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
        if (groupsRaw is List)
          for (final g in groupsRaw) conditions(g),
      ],
      order: [
        if (orderRaw is List)
          for (final o in orderRaw) QueryOrderTermData.fromJson(o),
      ],
      limit: limitRaw is int ? limitRaw : null,
      all: m['all'] == true,
      select:
          selectRaw is List ? [for (final s in selectRaw) s.toString()] : null,
      includeArchived: m['includeArchived'] == true,
      includeHidden: m['includeHidden'] == true,
      cursor: cursorRaw is String ? cursorRaw : null,
      backward: m['backward'] == true,
    );
  }
}

/// One comparison predicate.
final class QueryConditionData {
  const QueryConditionData(this.field, this.op, {this.value, this.values});

  final String field;
  final QueryConditionOp op;
  final Object? value;

  /// Values for the `inValues` operator.
  final List<Object?>? values;

  Map<String, Object?> toJson() => {
        'field': field,
        'op': op.name,
        if (values != null)
          'values': [for (final v in values!) encodeWireValue(v)]
        else
          'value': encodeWireValue(value),
      };

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
  eq,
  neq,
  gt,
  gte,
  lt,
  lte,
  inValues,
  between,
  startsWith,
  endsWith,
  contains,
  isNull,
  isNotNull,
}

/// One ordering term.
final class QueryOrderTermData {
  const QueryOrderTermData(this.field, {this.desc = false});
  final String field;
  final bool desc;

  Map<String, Object?> toJson() => {'field': field, 'desc': desc};

  static QueryOrderTermData fromJson(Object? raw) {
    if (raw is! Map) throw WireException('Malformed order term.');
    final m = raw.map((k, v) => MapEntry(k.toString(), v));
    final field = m['field'];
    if (field is! String) throw WireException('Malformed order term.');
    return QueryOrderTermData(field, desc: m['desc'] == true);
  }
}

enum AggregateFn { sum, avg, min, max }

/// A serializable full-text search request.
final class SearchSpecData {
  const SearchSpecData({
    required this.term,
    this.limit,
    this.all = false,
    this.includeArchived = false,
    this.includeHidden = false,
  });

  final String term;
  final int? limit;
  final bool all;
  final bool includeArchived;
  final bool includeHidden;

  Map<String, Object?> toJson() => {
        'term': term,
        if (limit != null) 'limit': limit,
        'all': all,
        'includeArchived': includeArchived,
        'includeHidden': includeHidden,
      };

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
