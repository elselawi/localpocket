import 'dart:async';

import 'package:localpocket/src/core/change_bus.dart';
import 'package:localpocket/src/core/schema.dart';
import 'package:localpocket/src/web/conversions.dart';
import 'package:localpocket/src/web/facade.dart';
import 'package:localpocket/src/web/facade/query/web_query_builder.dart';
import 'package:localpocket/src/web/facade/search/web_search_builder.dart';
import 'package:localpocket/src/web/facade/web_collection_mixin.dart';
import 'package:localpocket/src/web/protocol.dart';

/// Main-thread collection proxy.
class WebCollection with ChangeBusAwareStore, WireCollectionMixin {
  final LocalPocket _pocket;
  final CollectionSchema schema;

  WebCollection.ins(this._pocket, this.schema);

  @override
  LocalPocket get pocket => _pocket;

  @override
  String get name => schema.name;

  @override
  String get getOp => WireOp.get;

  @override
  String get mutateOp => WireOp.mutateBatch;

  @override
  Stream<RecordChangeEvent> get recordEvents => _pocket.events;

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

  WebQueryBuilder query() => WebQueryBuilder(_pocket, schema);

  /// Starts a full-text search on the collection's configured FTS fields.
  ///
  /// Mirrors native `Collection.search(String term)`: the schema must define
  /// [FtsSpec] and the SQLite engine must provide FTS5. Plans compile via
  /// `SearchQueryBuilder.compileOnly` and travel as the single `compiled_query`
  /// envelope.
  WebSearchBuilder search(String term) =>
      WebSearchBuilder(_pocket, schema, term);
}
