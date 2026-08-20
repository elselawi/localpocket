import 'dart:async';

import 'package:localpocket/src/core/query/query_builder/query_builder.dart';
import 'package:localpocket/src/core/query/query_builder/query_forwarder.dart';
import 'package:localpocket/src/core/schema.dart';
import 'package:localpocket/src/web/conversions.dart';
import 'package:localpocket/src/web/facade.dart';
import 'package:localpocket/src/web/facade/send_plan.dart';
import 'package:localpocket/src/web/protocol.dart';

import 'web_query_forwarder.dart';

/// Main-thread query builder that forwards the full native query language to
/// the engine compiler. The core [QueryBuilder] is the single hand-maintained
/// copy of the query language; the web facade holds a compile-only instance and
/// sends the resulting plans to the worker.
class WebQueryBuilder
    with
        QueryForwarder<WebQueryBuilder>,
        WebCompiledQueryForwarder<WebQueryBuilder> {
  final LocalPocket _pocket;
  final CollectionSchema schema;
  final QueryBuilder _core;

  WebQueryBuilder(this._pocket, this.schema)
      : _core = QueryBuilder.compileOnly(schema);

  @override
  LocalPocket get pocket => _pocket;

  @override
  QueryBuilder get queryCore => _core;

  String get store => schema.name;

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
