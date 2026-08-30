import 'package:localpocket/src/contract/contract.dart';
import 'package:localpocket/src/core/query/query_builder/predicate_tree.dart';
import 'package:localpocket/src/core/query/query_builder/query_builder.dart';
import 'package:localpocket/src/core/query/query_builder/query_forwarder.dart';
import 'package:localpocket/src/core/store.dart';
import 'package:localpocket/src/runtime/remote_runtime_client.dart';
import 'package:localpocket/src/web/facade/facade_host.dart';

/// Lowers a core [PredicateNode] into the serializable contract predicate
/// tree. The core tree spells the same leaf operators the contract does;
/// negations carry through verbatim.
PredicateSpecData lowerPredicateNode(PredicateNode node) => switch (node) {
      LeafPredicate(:final field, :final operator, :final args) =>
        LeafSpecData(QueryConditionData(
          field,
          _opFor(operator),
          value: _singleValueOp(operator) ? args.single : null,
          values: _multiValueOp(operator) ? args : null,
        )),
      NotPredicate(:final child) => NotSpecData(lowerPredicateNode(child)),
      AllPredicate(:final children) =>
        AllSpecData([for (final c in children) lowerPredicateNode(c)]),
      AnyPredicate(:final children) =>
        AnySpecData([for (final c in children) lowerPredicateNode(c)]),
    };

QueryConditionOp _opFor(String operator) => switch (operator) {
      'eq' => QueryConditionOp.eq,
      'gt' => QueryConditionOp.gt,
      'gte' => QueryConditionOp.gte,
      'lt' => QueryConditionOp.lt,
      'lte' => QueryConditionOp.lte,
      'inValues' => QueryConditionOp.inValues,
      'between' => QueryConditionOp.between,
      'isNull' => QueryConditionOp.isNull,
      'startsWith' => QueryConditionOp.startsWith,
      'endsWith' => QueryConditionOp.endsWith,
      'contains' => QueryConditionOp.contains,
      _ => throw ArgumentError.value(operator, 'operator', 'Unknown leaf.'),
    };

bool _singleValueOp(String operator) => switch (operator) {
      'eq' ||
      'gt' ||
      'gte' ||
      'lt' ||
      'lte' ||
      'startsWith' ||
      'endsWith' ||
      'contains' =>
        true,
      _ => false,
    };

bool _multiValueOp(String operator) =>
    operator == 'inValues' || operator == 'between';

/// Lowers a web facade [QueryBuilder] into a serializable contract spec. The
/// structured filter snapshot, declared order, projection, scope flags, and
/// limit are carried verbatim; the kernel compiles the spec, so no SQL or
/// cursor minting happens on the page.
QuerySpecData lowerBuilderToSpec(
  QueryBuilder core, {
  String? cursor,
  bool backward = false,
}) {
  final nodes = core.filterNodes;
  final PredicateSpecData? predicate;
  if (nodes.isEmpty) {
    predicate = null;
  } else if (nodes.length == 1) {
    predicate = lowerPredicateNode(nodes.single);
  } else {
    predicate = AllSpecData([for (final n in nodes) lowerPredicateNode(n)]);
  }
  return QuerySpecData(
    predicate: predicate,
    order: [
      for (final o in core.orderNodes)
        QueryOrderTermData(o.field, desc: o.desc),
    ],
    limit: core.limitValue,
    all: core.allMode,
    select: core.selectFields,
    includeArchived: core.includeArchivedFlag,
    includeHidden: core.includeHiddenFlag,
    cursor: cursor,
    backward: backward,
  );
}

/// Maps a contract query-page result onto the raw page model the web facade
/// exposes. Every fact (boundaries, both cursors) is kernel-minted.
Page pageFromContractRows(QueryRowsResult res) => Page(
      items: res.items,
      hasNext: res.hasNext,
      hasPrev: res.hasPrev,
      nextCursor: res.nextCursor,
      prevCursor: res.prevCursor,
    );

/// Mixin implementing terminal execution methods for web query builders by
/// sending typed query requests through the shared contract runtime. The
/// kernel owns compilation, result shaping, and cursor minting; the page
/// only lowers the builder state and wraps the named result.
mixin WebContractQueryForwarder<T extends Object> on QueryForwarder<T> {
  /// WebFacadeHost instance connected to the web worker.
  WebFacadeHost get pocket;

  /// Transaction session the reads participate in, or null for the root
  /// path. The session id is kernel-minted (string).
  String? get session => null;

  RemoteRuntimeClient get _runtime => pocket.contractRuntime;

  QueryRequest _request(QuerySpecData spec) =>
      QueryRequest(store: queryCore.store, spec: spec, session: session);

  /// Executes the query and returns one page of records.
  Future<Page> fetch({String? cursor}) async {
    final res = await _runtime
        .send(_request(lowerBuilderToSpec(queryCore, cursor: cursor)));
    return pageFromContractRows(res);
  }

  /// Fetches the page after [cursor] using keyset pagination.
  Future<Page> keysetAfter(String cursor) => fetch(cursor: cursor);

  /// Fetches the page immediately before the window [cursor] was minted
  /// from, using backward keyset pagination. The kernel flips the order,
  /// walks the cursor's previous tuple, and reports exact page facts.
  Future<Page> keysetBefore(String cursor) async {
    final res = await _runtime.send(_request(
        lowerBuilderToSpec(queryCore, cursor: cursor, backward: true)));
    return pageFromContractRows(res);
  }

  /// Counts records matching the current filters.
  Future<int> count() async => (await _runtime.send(CountRequest(
          store: queryCore.store, spec: _spec(), session: session)))
      .value;

  /// Counts distinct values of [field] matching the current filters.
  Future<int> countDistinct(String field) async =>
      (await _runtime.send(CountDistinctRequest(
              store: queryCore.store,
              field: field,
              spec: _spec(),
              session: session)))
          .value;

  /// Returns the distinct values of [field] matching the current filters.
  Future<List<Object?>> distinct(String field) async =>
      (await _runtime.send(DistinctRequest(
              store: queryCore.store,
              field: field,
              spec: _spec(),
              session: session)))
          .values;

  /// Returns IDs matching the current query.
  Future<List<String>> ids() async => (await _runtime.send(
          IdsRequest(store: queryCore.store, spec: _spec(), session: session)))
      .ids;

  /// Returns SQLite's `EXPLAIN QUERY PLAN` output for this query.
  Future<String> explain() async => (await _runtime.send(ExplainRequest(
          store: queryCore.store, spec: _spec(), session: session)))
      .plan;

  Future<num?> _aggregate(AggregateFn fn, String field) async =>
      (await _runtime.send(AggregateRequest(
              store: queryCore.store,
              fn: fn,
              field: field,
              spec: _spec(),
              session: session)))
          .value;

  /// Returns the sum of a numeric [field].
  Future<num?> sum(String field) => _aggregate(AggregateFn.sum, field);

  /// Returns the minimum value of a numeric [field].
  Future<num?> min(String field) => _aggregate(AggregateFn.min, field);

  /// Returns the maximum value of a numeric [field].
  Future<num?> max(String field) => _aggregate(AggregateFn.max, field);

  /// Returns the average value of a numeric [field].
  Future<num?> avg(String field) => _aggregate(AggregateFn.avg, field);

  QuerySpecData _spec() => lowerBuilderToSpec(queryCore);
}
