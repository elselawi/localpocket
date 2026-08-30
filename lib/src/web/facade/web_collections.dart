import 'dart:async';

import 'package:localpocket/src/contract/contract.dart' as contract;
import 'package:localpocket/src/core/change_bus.dart';
import 'package:localpocket/src/core/schema.dart';
import 'package:localpocket/src/web/facade/facade_host.dart';
import 'package:localpocket/src/web/facade/query/web_query_builder.dart';
import 'package:localpocket/src/web/facade/search/web_search_builder.dart';
import 'package:localpocket/src/web/facade/web_contract_crud_forwarder.dart';

/// {@template localpocket.web_collection}
/// Main-thread collection proxy.
/// {@endtemplate}
class WebCollection with ChangeBusAwareStore, WebContractCrudForwarder {
  /// Creates a collection facade bound to [pocket] for [schema].
  ///
  /// {@macro localpocket.web_collection}
  WebCollection.ins(this._pocket, this.schema);

  final WebFacadeHost _pocket;

  /// Runtime schema for the collection exposed by this facade.
  final CollectionSchema<Object?> schema;

  @override
  WebFacadeHost get pocket => _pocket;

  @override
  String get name => schema.name;

  @override
  Stream<RecordChangeEvent> get recordEvents => _pocket.events;

  /// Watches a single record by [id] over the typed contract. The kernel
  /// mints the subscription id and emits one-row snapshots (an empty snapshot
  /// means the record is absent) on the shared runtime stream.
  Stream<Map<String, Object?>?> watchOne(String id) {
    late final StreamController<Map<String, Object?>?> controller;
    final watchId = _pocket.nextRequestId++;

    controller = StreamController<Map<String, Object?>?>(
      onListen: () => _pocket.watchTracker.runRegistration(
        watchId: watchId,
        register: () async {
          try {
            final started = await _pocket.contractRuntime
                .send(contract.WatchOneRequest(store: name, id: id));
            _subscriptions[watchId] = (
              subscription: started.subscription,
              // ignore: cancel_subscriptions
              listener: _pocket.contractRuntime.events.listen((e) {
                if (e is contract.WatchSnapshot &&
                    e.subscription == started.subscription &&
                    !controller.isClosed) {
                  controller.add(e.items.isEmpty ? null : e.items.first);
                }
              }),
            );
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
    final registration = _subscriptions.remove(watchId);
    if (registration == null) return;
    await registration.listener.cancel();
    try {
      await _pocket.contractRuntime.send(
          contract.WatchCancelRequest(subscription: registration.subscription));
    } catch (_) {}
  }

  /// Contract subscription registration per facade watch id (id + listener).
  final Map<int,
          ({String subscription, StreamSubscription<contract.Event> listener})>
      _subscriptions = {};

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
