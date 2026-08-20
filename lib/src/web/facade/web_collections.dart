import 'dart:async';

import 'package:localpocket/src/core/change_bus.dart';
import 'package:localpocket/src/core/schema.dart';
import 'package:localpocket/src/web/conversions.dart';
import 'package:localpocket/src/web/facade.dart';
import 'package:localpocket/src/web/facade/query/web_query_builder.dart';
import 'package:localpocket/src/web/facade/search/web_search_builder.dart';
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
