import 'package:localpocket/src/core/query/query_builder/query_forwarder.dart';
import 'package:localpocket/src/core/store.dart';
import 'package:localpocket/src/web/conversions.dart';
import 'package:localpocket/src/web/facade/facade_host.dart';
import 'package:localpocket/src/web/facade/query/page_from_compiled.dart';
import 'package:localpocket/src/web/facade/send_plan.dart';

/// Mixin implementing terminal execution methods for web query builders
/// by sending engine-compiled plans to the worker.
mixin WebCompiledQueryForwarder<T extends Object> on QueryForwarder<T> {
  /// WebFacadeHost instance connected to the web worker.
  WebFacadeHost get pocket;

  /// Optional transaction session identifier.
  int? get sessionId => null;

  /// Executes the query and returns one page of records.
  Future<Page> fetch({String? cursor}) async {
    final limit = queryCore.limitValue;
    final allMode = queryCore.allMode;
    final plan = queryCore.compilePlan(
      limitOverride: allMode || limit == null ? null : limit + 1,
      cursor: cursor,
    );
    final res = await sendCompiledPlan(pocket, plan,
        sessionId: sessionId, pageLimit: limit);
    return pageFromCompiled(queryCore, res);
  }

  /// Fetches the page after [cursor] using keyset pagination.
  Future<Page> keysetAfter(String cursor) => fetch(cursor: cursor);

  /// Counts records matching the current filters.
  Future<int> count() async {
    final res = await sendCompiledPlan(pocket, queryCore.compileCountPlan(),
        sessionId: sessionId);
    return (res['value'] as int?) ?? 0;
  }

  /// Counts distinct values of [field] matching the current filters.
  Future<int> countDistinct(String field) async {
    final res = await sendCompiledPlan(
        pocket, queryCore.compileCountDistinctPlan(field),
        sessionId: sessionId);
    return (res['value'] as int?) ?? 0;
  }

  /// Returns the distinct values of [field] matching the current filters.
  Future<List<Object?>> distinct(String field) async {
    final res = await sendCompiledPlan(
        pocket, queryCore.compileDistinctPlan(field),
        sessionId: sessionId);
    return (res['values']! as List).map(decodeWireValue).toList();
  }

  /// Returns IDs matching the current query.
  Future<List<String>> ids() async {
    final res = await sendCompiledPlan(pocket, queryCore.compileIdsPlan(),
        sessionId: sessionId);
    return (res['ids']! as List).cast<String>();
  }

  /// Returns SQLite's `EXPLAIN QUERY PLAN` output for this query.
  Future<String> explain() async {
    final res = await sendCompiledPlan(pocket, queryCore.compileExplainPlan(),
        sessionId: sessionId);
    return res['plan']! as String;
  }

  Future<num?> _aggregate(String fn, String field) async {
    final res = await sendCompiledPlan(
        pocket, queryCore.compileAggregatePlan(fn, field),
        sessionId: sessionId);
    final raw = res['value'];
    return raw == null ? null : raw as num;
  }

  /// Returns the sum of a numeric [field] for matching records.
  Future<num?> sum(String field) => _aggregate('SUM', field);

  /// Returns the average value of a numeric [field].
  Future<num?> avg(String field) => _aggregate('AVG', field);

  /// Returns the minimum value of a numeric [field].
  Future<num?> min(String field) => _aggregate('MIN', field);

  /// Returns the maximum value of a numeric [field].
  Future<num?> max(String field) => _aggregate('MAX', field);
}
