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

class WebTx {
  final WebFacadeHost _pocket;
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

class WebTxQueryBuilder
    with
        QueryForwarder<WebTxQueryBuilder>,
        WebCompiledQueryForwarder<WebTxQueryBuilder> {
  final WebFacadeHost _pocket;
  final CollectionSchema schema;
  @override
  final int sessionId;
  QueryBuilder _core;

  WebTxQueryBuilder._(this._pocket, this.schema, this.sessionId)
      : _core = QueryBuilder.compileOnly(schema);

  @override
  WebFacadeHost get pocket => _pocket;

  @override
  QueryBuilder get queryCore => _core;

  @override
  set queryCore(QueryBuilder value) => _core = value;
}

class WebTxSearchQueryBuilder
    with
        SearchForwarder<WebTxSearchQueryBuilder>,
        WebCompiledSearchForwarder<WebTxSearchQueryBuilder> {
  final WebFacadeHost _pocket;
  final CollectionSchema schema;
  @override
  final int sessionId;
  @override
  final String term;
  final SearchBuilder _core;

  WebTxSearchQueryBuilder._(
      this._pocket, this.schema, this.sessionId, this.term)
      : _core = SearchBuilder.compileOnly(schema, term);

  @override
  WebFacadeHost get pocket => _pocket;

  @override
  SearchBuilder get searchCore => _core;
}

/// Main-thread collection bound to a transaction session.
class WebTxCollection with WireCollectionMixin {
  final WebFacadeHost _pocket;
  final CollectionSchema schema;
  @override
  final int sessionId;

  WebTxCollection._(this._pocket, this.schema, this.sessionId);

  @override
  WebFacadeHost get pocket => _pocket;

  @override
  String get name => schema.name;

  @override
  String get getOp => WireOp.txGet;

  @override
  String get mutateOp => WireOp.txMutateBatch;
}
