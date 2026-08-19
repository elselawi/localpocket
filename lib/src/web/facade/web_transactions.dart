import 'package:localpocket/src/core/query.dart';
import 'package:localpocket/src/core/schema.dart';
import 'package:localpocket/src/core/store.dart';
import 'package:localpocket/src/web/conversions.dart';
import 'package:localpocket/src/web/facade.dart';
import 'package:localpocket/src/web/facade/page_from_compiled.dart';
import 'package:localpocket/src/web/facade/send_plan.dart';
import 'package:localpocket/src/web/protocol.dart';

class WebTx {
  final LocalPocket _pocket;
  final int sessionId;

  WebTx.ins(this._pocket, this.sessionId);

  WebTxCollection collection(String name) {
    return WebTxCollection._(_pocket, _pocket.schemaFor(name), sessionId);
  }

  WebTxQueryBuilder query(String store) =>
      WebTxQueryBuilder._(_pocket, _pocket.schemaFor(store), sessionId);

  WebTxSearchQueryBuilder search(String store, String term) =>
      WebTxSearchQueryBuilder._(
          _pocket, _pocket.schemaFor(store), sessionId, term);

  /// Nested transaction implemented as a savepoint on the active session.
  Future<T> transaction<T>(Future<T> Function(WebTx tx) action) async {
    final spRes = (await _pocket
        .send(WireOp.txSavepoint, {'sessionId': sessionId})) as Map;
    final savepoint = spRes['savepoint'] as String;

    try {
      final res = await action(this);
      await _pocket.send(
          WireOp.txRelease, {'sessionId': sessionId, 'savepoint': savepoint});
      return res;
    } catch (e) {
      try {
        await _pocket.send(WireOp.txRollbackTo,
            {'sessionId': sessionId, 'savepoint': savepoint});
      } catch (_) {}
      rethrow;
    }
  }
}

class WebTxQueryBuilder {
  final LocalPocket _pocket;
  final CollectionSchema schema;
  final int sessionId;
  final QueryBuilder _core;

  WebTxQueryBuilder._(this._pocket, this.schema, this.sessionId)
      : _core = QueryBuilder.compileOnly(schema);

  WebTxQueryBuilder where(
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
    _core.where(
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

  WebTxQueryBuilder orWhere(List<Map<String, Object?>> groups) {
    _core.orWhere(groups);
    return this;
  }

  WebTxQueryBuilder orderBy(String field, {bool desc = false}) {
    _core.orderBy(field, desc: desc);
    return this;
  }

  WebTxQueryBuilder limit(int n) {
    _core.limit(n);
    return this;
  }

  WebTxQueryBuilder all() {
    _core.all();
    return this;
  }

  WebTxQueryBuilder select(List<String> fields) {
    _core.select(fields);
    return this;
  }

  WebTxQueryBuilder includeArchived() {
    _core.includeArchived();
    return this;
  }

  WebTxQueryBuilder includeHidden() {
    _core.includeHidden();
    return this;
  }

  Future<Page> fetch({String? cursor}) async {
    final limit = _core.limitValue;
    final allMode = _core.allMode;
    final plan = _core.compilePlan(
      limitOverride: allMode || limit == null ? null : limit + 1,
      cursor: cursor,
    );
    final res = await sendCompiledPlan(_pocket, plan,
        sessionId: sessionId, pageLimit: limit);
    return pageFromCompiled(_core, res);
  }

  Future<Page> keysetAfter(String cursor) => fetch(cursor: cursor);

  Future<int> count() async {
    final res = await sendCompiledPlan(_pocket, _core.compileCountPlan(),
        sessionId: sessionId);
    return (res['value'] as int?) ?? 0;
  }

  Future<int> countDistinct(String field) async {
    final res = await sendCompiledPlan(
        _pocket, _core.compileCountDistinctPlan(field),
        sessionId: sessionId);
    return (res['value'] as int?) ?? 0;
  }

  Future<List<Object?>> distinct(String field) async {
    final res = await sendCompiledPlan(
        _pocket, _core.compileDistinctPlan(field),
        sessionId: sessionId);
    return (res['values'] as List).map(decodeWireValue).toList();
  }

  Future<List<String>> ids() async {
    final res = await sendCompiledPlan(_pocket, _core.compileIdsPlan(),
        sessionId: sessionId);
    return (res['ids'] as List).cast<String>();
  }

  Future<String> explain() async {
    final res = await sendCompiledPlan(_pocket, _core.compileExplainPlan(),
        sessionId: sessionId);
    return res['plan'] as String;
  }

  Future<num?> _aggregate(String fn, String field) async {
    final res = await sendCompiledPlan(
        _pocket, _core.compileAggregatePlan(fn, field),
        sessionId: sessionId);
    final raw = res['value'];
    return raw == null ? null : raw as num;
  }

  Future<num?> sum(String field) => _aggregate('SUM', field);
  Future<num?> avg(String field) => _aggregate('AVG', field);
  Future<num?> min(String field) => _aggregate('MIN', field);
  Future<num?> max(String field) => _aggregate('MAX', field);
}

class WebTxSearchQueryBuilder {
  final LocalPocket _pocket;
  final CollectionSchema schema;
  final int sessionId;
  final String term;
  int? _limit;
  bool _all = false;
  bool _includeArchived = false;
  bool _includeHidden = false;

  WebTxSearchQueryBuilder._(
      this._pocket, this.schema, this.sessionId, this.term);

  WebTxSearchQueryBuilder limit(int n) {
    _limit = n;
    return this;
  }

  WebTxSearchQueryBuilder all() {
    _all = true;
    return this;
  }

  WebTxSearchQueryBuilder includeArchived() {
    _includeArchived = true;
    return this;
  }

  WebTxSearchQueryBuilder includeHidden() {
    _includeHidden = true;
    return this;
  }

  Future<List<SearchResult>> fetch() async {
    if (term.trim().isEmpty) return const [];
    final core = SearchQueryBuilder.compileOnly(schema, term);
    if (_limit != null) core.limit(_limit!);
    if (_all) core.all();
    if (_includeArchived) core.includeArchived();
    if (_includeHidden) core.includeHidden();
    final res = await sendCompiledPlan(_pocket, core.compilePlan(),
        sessionId: sessionId);
    return ((res['results'] as List?) ?? const []).map((raw) {
      final row = (raw as Map).map((k, v) => MapEntry(k.toString(), v));
      return SearchResult(
          id: row['id'] as String, score: (row['score'] as num).toDouble());
    }).toList();
  }
}

/// Main-thread collection bound to a transaction session.
class WebTxCollection {
  final LocalPocket _pocket;
  final CollectionSchema schema;
  final int sessionId;

  WebTxCollection._(this._pocket, this.schema, this.sessionId);

  String get name => schema.name;

  Future<Map<String, Object?>?> get(String id) async {
    final res = await _pocket
        .send(WireOp.txGet, {'sessionId': sessionId, 'store': name, 'id': id});
    if (res == null) return null;
    final decoded = decodeWireValue(res);
    if (decoded is Map) {
      return decoded.map((k, v) => MapEntry(k.toString(), v));
    }
    return null;
  }

  Future<void> put(Map<String, Object?> record) async {
    await _pocket.send(WireOp.txMutateBatch, {
      'sessionId': sessionId,
      'store': name,
      'mutations': [
        {'action': 'put', 'record': encodeWireValue(record)}
      ],
    });
  }

  Future<void> putAll(List<Map<String, Object?>> records) async {
    await _pocket.send(WireOp.txMutateBatch, {
      'sessionId': sessionId,
      'store': name,
      'mutations': records
          .map((record) => {'action': 'put', 'record': encodeWireValue(record)})
          .toList(),
    });
  }

  Future<void> patch(String id, Map<String, Object?> changes) async {
    await _pocket.send(WireOp.txMutateBatch, {
      'sessionId': sessionId,
      'store': name,
      'mutations': [
        {'action': 'patch', 'id': id, 'record': encodeWireValue(changes)}
      ],
    });
  }

  Future<void> archive(String id) async {
    await _pocket.send(WireOp.txMutateBatch, {
      'sessionId': sessionId,
      'store': name,
      'mutations': [
        {'action': 'archive', 'id': id}
      ],
    });
  }

  Future<void> restore(String id) async {
    await _pocket.send(WireOp.txMutateBatch, {
      'sessionId': sessionId,
      'store': name,
      'mutations': [
        {'action': 'restore', 'id': id}
      ],
    });
  }

  Future<void> purge(String id) async {
    await _pocket.send(WireOp.txMutateBatch, {
      'sessionId': sessionId,
      'store': name,
      'mutations': [
        {'action': 'purge', 'id': id}
      ],
    });
  }
}
