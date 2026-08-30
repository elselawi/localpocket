import 'dart:async';

import 'package:localpocket/src/contract/contract.dart';
import 'package:localpocket/src/core/query/query_builder/query_builder.dart';
import 'package:localpocket/src/core/query/query_builder/query_forwarder.dart';
import 'package:localpocket/src/core/schema.dart';
import 'package:localpocket/src/web/facade/facade_host.dart';

import 'web_contract_forwarder.dart';

/// {@template localpocket.web_query_builder}
/// Main-thread query builder that forwards the full native query language to
/// the kernel over the typed contract. The core [QueryBuilder] holds the
/// structured query state; the facade lowers it into a serializable spec and
/// the kernel compiles it — the page never builds or ships SQL.
/// {@endtemplate}
class WebQueryBuilder
    with QueryForwarder<WebQueryBuilder>, WebContractQueryForwarder<WebQueryBuilder> {
  /// Creates a web query builder bound to [pocket] for [schema].
  ///
  /// {@macro localpocket.web_query_builder}
  WebQueryBuilder(this._pocket, this.schema)
      : _core = QueryBuilder.compileOnly(schema);

  final WebFacadeHost _pocket;
  QueryBuilder _core;

  /// Schema backing this query builder.
  final CollectionSchema<Object?> schema;

  @override
  WebFacadeHost get pocket => _pocket;

  @override
  QueryBuilder get queryCore => _core;

  @override
  set queryCore(QueryBuilder value) => _core = value;

  /// Returns the collection name this query targets.
  String get store => schema.name;

  /// Watches query results reactively over the typed contract. The kernel
  /// mints the subscription id and emits [WatchSnapshot] events on the shared
  /// runtime stream; an unbounded watch defaults to 50 rows, matching native
  /// watch semantics.
  Stream<List<Map<String, Object?>>> watch() {
    late final StreamController<List<Map<String, Object?>>> controller;
    final watchId = _pocket.nextRequestId++;

    final spec = lowerBuilderToSpec(_core);
    final watchSpec = QuerySpecData(
      predicate: spec.predicate,
      order: spec.order,
      limit: spec.all ? null : (spec.limit ?? 50),
      all: spec.all,
      select: spec.select,
      includeArchived: spec.includeArchived,
      includeHidden: spec.includeHidden,
    );

    controller = StreamController<List<Map<String, Object?>>>(
      onListen: () => _pocket.watchTracker.runRegistration(
        watchId: watchId,
        register: () async {
          try {
            final started = await _pocket.contractRuntime
                .send(WatchRequest(store: schema.name, spec: watchSpec));
            _subscriptions[watchId] = (
              id: started.subscription,
              // ignore: cancel_subscriptions
              listener: _pocket.contractRuntime.events.listen((e) {
                if (e is WatchSnapshot &&
                    e.subscription == started.subscription &&
                    !controller.isClosed) {
                  controller.add(e.items);
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
      await _pocket.contractRuntime
          .send(WatchCancelRequest(subscription: registration.id));
    } catch (_) {}
  }

  /// Contract subscription registration per facade watch id (id + listener).
  final Map<int, ({String id, StreamSubscription<Event> listener})>
      _subscriptions = {};
}
