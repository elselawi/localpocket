import 'dart:async';

import 'package:localpocket/src/core/change_bus.dart';
import 'package:localpocket/src/core/query.dart';
import 'package:localpocket/src/core/schema.dart';
import 'package:localpocket/src/core/store.dart';
import 'package:localpocket/src/web/conversions.dart';
import 'package:localpocket/src/web/facade.dart';
import 'package:localpocket/src/web/facade/page_from_compiled.dart';
import 'package:localpocket/src/web/facade/send_plan.dart';
import 'package:localpocket/src/web/protocol.dart';

/// Main-thread collection proxy.
class WebCollection with ChangeBusAwareStore {
  final LocalPocket _pocket;
  final CollectionSchema schema;

  WebCollection.ins(this._pocket, this.schema);

  LocalPocket get pocket => _pocket;

  @override
  String get name => schema.name;

  @override
  Stream<RecordChangeEvent> get recordEvents => _pocket.events;

  Future<Map<String, Object?>?> get(String id) async {
    final res = await _pocket.send(WireOp.get, {'store': name, 'id': id});
    if (res == null) return null;
    final decoded = decodeWireValue(res);
    if (decoded is Map) {
      return decoded.map((k, v) => MapEntry(k.toString(), v));
    }
    return null;
  }

  Future<void> put(Map<String, Object?> record) async {
    await _pocket.send(WireOp.mutateBatch, {
      'store': name,
      'mutations': [
        {'action': 'put', 'record': encodeWireValue(record)}
      ],
    });
  }

  Future<void> putAll(List<Map<String, Object?>> records) async {
    await _pocket.send(WireOp.mutateBatch, {
      'store': name,
      'mutations': records
          .map((r) => {'action': 'put', 'record': encodeWireValue(r)})
          .toList(),
    });
  }

  Future<void> patch(String id, Map<String, Object?> changes) async {
    await _pocket.send(WireOp.mutateBatch, {
      'store': name,
      'mutations': [
        {'action': 'patch', 'id': id, 'record': encodeWireValue(changes)}
      ],
    });
  }

  Future<void> archive(String id) async {
    await _pocket.send(WireOp.mutateBatch, {
      'store': name,
      'mutations': [
        {'action': 'archive', 'id': id}
      ],
    });
  }

  Future<void> restore(String id) async {
    await _pocket.send(WireOp.mutateBatch, {
      'store': name,
      'mutations': [
        {'action': 'restore', 'id': id}
      ],
    });
  }

  Future<void> purge(String id) async {
    await _pocket.send(WireOp.mutateBatch, {
      'store': name,
      'mutations': [
        {'action': 'purge', 'id': id}
      ],
    });
  }

  /// Watches a single record by [id].
  Stream<Map<String, Object?>?> watchOne(String id) {
    late final StreamController<Map<String, Object?>?> controller;
    final watchId = _pocket.nextRequestId++;

    controller = StreamController<Map<String, Object?>?>(
      onListen: () => _pocket.watchTracker.runRegistration(
        watchId: watchId,
        register: () async {
          _pocket.workerStreams[watchId] = controller;
          try {
            final res = (await _pocket.send(WireOp.watchOne, {
              'watchId': watchId,
              'store': name,
              'id': id,
            })) as Map;
            final item = decodeWireValue(res['item']) as Map<String, Object?>?;
            if (!controller.isClosed) {
              controller.add(item);
            }
          } catch (e) {
            if (!controller.isClosed) controller.addError(e);
          }
        },
        unregister: () => _cancelWatch(watchId),
      ),
      onCancel: () => _pocket.watchTracker.requestUnregistration(
        watchId: watchId,
        unregister: () => _cancelWatch(watchId),
      ),
    );
    return controller.stream;
  }

  Future<void> _cancelWatch(int watchId) async {
    _pocket.workerStreams.remove(watchId);
    try {
      await _pocket.send(WireOp.watchCancel, {'watchId': watchId});
    } catch (_) {}
  }

  WebQueryBuilder query() => WebQueryBuilder._(_pocket, schema);

  /// Starts a full-text search on the collection's configured FTS fields.
  ///
  /// Mirrors native `Collection.search(String term)`: the schema must define
  /// [FtsSpec] and the SQLite engine must provide FTS5. Plans compile via
  /// `SearchQueryBuilder.compileOnly` and travel as the single `compiled_query`
  /// envelope.
  WebSearchQueryBuilder search(String term) =>
      WebSearchQueryBuilder._(_pocket, schema, term);
}

/// Main-thread query builder that forwards the full native query language to
/// the engine compiler. The core [QueryBuilder] is the single hand-maintained
/// copy of the query language; the web facade holds a compile-only instance
/// and sends the resulting plans to the worker.
class WebQueryBuilder {
  final LocalPocket _pocket;
  final CollectionSchema schema;
  final QueryBuilder _core;

  WebQueryBuilder._(this._pocket, this.schema)
      : _core = QueryBuilder.compileOnly(schema);

  String get store => schema.name;

  WebQueryBuilder where(
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

  WebQueryBuilder orWhere(List<Map<String, Object?>> groups) {
    _core.orWhere(groups);
    return this;
  }

  WebQueryBuilder orderBy(String field, {bool desc = false}) {
    _core.orderBy(field, desc: desc);
    return this;
  }

  WebQueryBuilder limit(int n) {
    _core.limit(n);
    return this;
  }

  WebQueryBuilder all() {
    _core.all();
    return this;
  }

  WebQueryBuilder select(List<String> fields) {
    _core.select(fields);
    return this;
  }

  WebQueryBuilder includeArchived() {
    _core.includeArchived();
    return this;
  }

  WebQueryBuilder includeHidden() {
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
    final res = await sendCompiledPlan(_pocket, plan, pageLimit: limit);
    return pageFromCompiled(_core, res);
  }

  Future<Page> keysetAfter(String cursor) => fetch(cursor: cursor);

  Future<int> count() async {
    final res = await sendCompiledPlan(_pocket, _core.compileCountPlan());
    return (res['value'] as int?) ?? 0;
  }

  Future<int> countDistinct(String field) async {
    final res =
        await sendCompiledPlan(_pocket, _core.compileCountDistinctPlan(field));
    return (res['value'] as int?) ?? 0;
  }

  Future<List<Object?>> distinct(String field) async {
    final res =
        await sendCompiledPlan(_pocket, _core.compileDistinctPlan(field));
    return (res['values'] as List).map(decodeWireValue).toList();
  }

  Future<List<String>> ids() async {
    final res = await sendCompiledPlan(_pocket, _core.compileIdsPlan());
    return (res['ids'] as List).cast<String>();
  }

  Future<String> explain() async {
    final res = await sendCompiledPlan(_pocket, _core.compileExplainPlan());
    return res['plan'] as String;
  }

  Future<num?> _aggregate(String fn, String field) async {
    final res =
        await sendCompiledPlan(_pocket, _core.compileAggregatePlan(fn, field));
    final raw = res['value'];
    return raw == null ? null : raw as num;
  }

  Future<double?> sum(String field) async =>
      (await _aggregate('SUM', field))?.toDouble();

  Future<double?> avg(String field) async =>
      (await _aggregate('AVG', field))?.toDouble();

  Future<num?> min(String field) => _aggregate('MIN', field);

  Future<num?> max(String field) => _aggregate('MAX', field);

  /// Watches query results reactively.
  Stream<List<Map<String, Object?>>> watch() {
    late final StreamController<List<Map<String, Object?>>> controller;
    final watchId = _pocket.nextRequestId++;

    // Native watch semantics: an unbounded watch query defaults to 50 rows.
    final limit = _core.limitValue;
    final allMode = _core.allMode;
    final plan =
        _core.compilePlan(limitOverride: allMode ? null : (limit ?? 50));

    controller = StreamController<List<Map<String, Object?>>>(
      onListen: () => _pocket.watchTracker.runRegistration(
        watchId: watchId,
        register: () async {
          _pocket.workerStreams[watchId] = controller;
          try {
            final res = await sendCompiledPlan(_pocket, plan, watchId: watchId);
            final items = ((res['items'] as List?) ?? const [])
                .map((i) => (decodeWireValue(i) as Map)
                    .map((k, v) => MapEntry(k.toString(), v)))
                .toList();
            if (!controller.isClosed) {
              controller.add(items);
            }
          } catch (e) {
            if (!controller.isClosed) controller.addError(e);
          }
        },
        unregister: () => _cancelWatch(watchId),
      ),
      onCancel: () => _pocket.watchTracker.requestUnregistration(
        watchId: watchId,
        unregister: () => _cancelWatch(watchId),
      ),
    );
    return controller.stream;
  }

  Future<void> _cancelWatch(int watchId) async {
    _pocket.workerStreams.remove(watchId);
    try {
      await _pocket.send(WireOp.watchCancel, {'watchId': watchId});
    } catch (_) {}
  }
}

/// Main-thread transaction handle (§7.1).
class WebSearchQueryBuilder {
  final LocalPocket _pocket;
  final CollectionSchema schema;
  final String term;
  int? _limit;
  bool _all = false;
  bool _includeArchived = false;
  bool _includeHidden = false;

  WebSearchQueryBuilder._(this._pocket, this.schema, this.term);

  WebSearchQueryBuilder limit(int n) {
    _limit = n;
    return this;
  }

  WebSearchQueryBuilder all() {
    _all = true;
    return this;
  }

  WebSearchQueryBuilder includeArchived() {
    _includeArchived = true;
    return this;
  }

  WebSearchQueryBuilder includeHidden() {
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
    final res = await sendCompiledPlan(_pocket, core.compilePlan());
    return ((res['results'] as List?) ?? const []).map((raw) {
      final row = (raw as Map).map((k, v) => MapEntry(k.toString(), v));
      return SearchResult(
        id: row['id'] as String,
        score: (row['score'] as num).toDouble(),
      );
    }).toList();
  }
}
