import 'package:localpocket/src/core/query/query_builder/query_builder.dart';
import 'package:localpocket/src/core/query/query_builder/query_forwarder.dart';
import 'package:localpocket/src/core/query/search_builder/search_builder.dart';
import 'package:localpocket/src/core/query/search_builder/search_forwarder.dart';
import 'package:localpocket/src/core/schema.dart';
import 'package:localpocket/src/web/facade/facade_host.dart';
import 'package:localpocket/src/web/facade/query/web_query_forwarder.dart';
import 'package:localpocket/src/web/facade/search/web_search_forwarder.dart';
import 'package:localpocket/src/web/facade/web_collection_mixin.dart';
import 'package:localpocket/src/web/protocol.dart';

/// A transaction session on the web worker.
class WebTx {
  /// Creates a transaction facade for [sessionId].
  WebTx.ins(this._pocket, this.sessionId);

  final WebFacadeHost _pocket;

  /// Identifier of the worker-side transaction session.
  final int sessionId;

  /// Returns a collection facade bound to this transaction.
  WebTxCollection collection(String name) =>
      WebTxCollection._(_pocket, _pocket.schemaFor(name), sessionId);

  /// Creates a query builder bound to this transaction.
  WebTxQueryBuilder query(String store) =>
      WebTxQueryBuilder._(_pocket, _pocket.schemaFor(store), sessionId);

  /// Creates a full-text search builder bound to this transaction.
  WebTxSearchQueryBuilder search(String store, String term) =>
      WebTxSearchQueryBuilder._(
          _pocket, _pocket.schemaFor(store), sessionId, term);

  /// Runs [action] in a nested transaction implemented as a savepoint.
  Future<T> transaction<T>(Future<T> Function(WebTx tx) action) async {
    final spRes =
        await _pocket.send(WireOp.txSavepoint, {'sessionId': sessionId});
    if (spRes is! Map) {
      throw StateError('Transaction savepoint response was malformed.');
    }
    final savepointValue = spRes['savepoint'];
    if (savepointValue is! String) {
      throw StateError('Transaction savepoint response was malformed.');
    }
    final savepoint = savepointValue;

    try {
      final res = await action(this);
      await _pocket.send(
          WireOp.txRelease, {'sessionId': sessionId, 'savepoint': savepoint});
      return res;
    } catch (_) {
      try {
        await _pocket.send(WireOp.txRollbackTo,
            {'sessionId': sessionId, 'savepoint': savepoint});
      } catch (_) {}
      rethrow;
    }
  }
}

/// Query builder bound to a web transaction session.
class WebTxQueryBuilder
    with
        QueryForwarder<WebTxQueryBuilder>,
        WebCompiledQueryForwarder<WebTxQueryBuilder> {
  WebTxQueryBuilder._(this._pocket, this.schema, this.sessionId)
      : _core = QueryBuilder.compileOnly(schema);

  final WebFacadeHost _pocket;

  /// Schema of the collection queried by this builder.
  final CollectionSchema<Object?> schema;
  @override
  final int sessionId;
  QueryBuilder _core;

  @override
  WebFacadeHost get pocket => _pocket;

  @override
  QueryBuilder get queryCore => _core;

  @override
  set queryCore(QueryBuilder value) => _core = value;
}

/// Full-text search builder bound to a web transaction session.
class WebTxSearchQueryBuilder
    with
        SearchForwarder<WebTxSearchQueryBuilder>,
        WebCompiledSearchForwarder<WebTxSearchQueryBuilder> {
  WebTxSearchQueryBuilder._(
      this._pocket, this.schema, this.sessionId, this.term)
      : _core = SearchBuilder.compileOnly(schema, term);

  final WebFacadeHost _pocket;

  /// Schema of the collection searched by this builder.
  final CollectionSchema<Object?> schema;
  @override
  final int sessionId;
  @override
  final String term;
  final SearchBuilder _core;

  @override
  WebFacadeHost get pocket => _pocket;

  @override
  SearchBuilder get searchCore => _core;
}

/// Main-thread collection bound to a transaction session.
class WebTxCollection with WireCollectionMixin {
  WebTxCollection._(this._pocket, this.schema, this.sessionId);

  final WebFacadeHost _pocket;

  /// Schema of the collection exposed by this facade.
  final CollectionSchema<Object?> schema;
  @override
  final int sessionId;

  @override
  WebFacadeHost get pocket => _pocket;

  @override
  String get name => schema.name;

  @override
  String get getOp => WireOp.txGet;

  @override
  String get mutateOp => WireOp.txMutateBatch;
}
