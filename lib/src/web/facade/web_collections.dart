import 'dart:async';

import 'package:localpocket/src/core/change_bus.dart';
import 'package:localpocket/src/core/schema.dart';
import 'package:localpocket/src/web/conversions.dart';
import 'package:localpocket/src/web/facade/facade_host.dart';
import 'package:localpocket/src/web/facade/query/web_query_builder.dart';
import 'package:localpocket/src/web/facade/search/web_search_builder.dart';
import 'package:localpocket/src/web/facade/web_collection_mixin.dart';
import 'package:localpocket/src/web/protocol.dart';

/// Main-thread collection proxy.
class WebCollection with ChangeBusAwareStore, WireCollectionMixin {
  /// Creates a collection facade bound to [pocket] for [schema].
  WebCollection.ins(this._pocket, this.schema);

  final WebFacadeHost _pocket;

  /// Runtime schema for the collection exposed by this facade.
  final CollectionSchema<Object?> schema;

  @override
  WebFacadeHost get pocket => _pocket;

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
            final raw = await _pocket.send(WireOp.watchOne, {
              'watchId': watchId,
              'store': name,
              'id': id,
            });
            if (raw is! Map) {
              if (!controller.isClosed) {
                controller.add(null);
              }
              return;
            }
            final decoded = decodeWireValue(raw['item']);
            final item = decoded is Map
                ? decoded.map((k, v) => MapEntry(k.toString(), v))
                : null;
            if (!controller.isClosed) {
              controller.add(item);
            }
          } catch (e) {
            if (!controller.isClosed) controller.addError(e);
          }
        },
        unregister: () => _cancelWatch(watchId),
      ),
      onCancel: () async {
        await _pocket.watchTracker.requestUnregistration(
          watchId: watchId,
          unregister: () async {
            await _cancelWatch(watchId);
            if (!controller.isClosed) {
              await controller.close();
            }
          },
        );
      },
    );
    return controller.stream;
  }

  Future<void> _cancelWatch(int watchId) async {
    _pocket.workerStreams.remove(watchId);
    try {
      await _pocket.send(WireOp.watchCancel, {'watchId': watchId});
    } catch (_) {}
  }

  /// Builds a query against this collection.
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
