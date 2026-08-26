import 'package:localpocket/src/core/query/query_builder/query_builder.dart';
import 'package:localpocket/src/core/query/query_builder/query_forwarder.dart';
import 'package:localpocket/src/core/query/search_builder/search_builder.dart';
import 'package:localpocket/src/core/query/search_builder/search_forwarder.dart';
import 'package:localpocket/src/core/schema.dart';
import 'package:localpocket/src/core/store.dart';
import 'package:localpocket/src/typed/query_surface.dart';
import 'package:localpocket/src/typed/typed.dart';
import 'package:localpocket/src/typed/typed_collection.dart'
    show TypedStoreSurface;
import 'package:localpocket/src/typed/typed_search.dart'
    show TypedSearchSurface;
import 'package:localpocket/src/web/conversions.dart';
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

  /// Scoped typed store access bound to this transaction.
  ///
  /// Binds against the **same** typed registry as the facade's `store` — a
  /// transaction can never shadow the canonical definition instance.
  TypedCollection<S> store<S extends StoreDef<S>>(S def) {
    final registered = _pocket.schemaFor(def.name);
    def.verifyRegisteredSchema(registered);
    _pocket.typedRegistry.bind(def);
    return TypedCollection<S>(
      def,
      _WebTxTypedSurface(WebTxCollection._(_pocket, registered, sessionId)),
    );
  }

  /// Creates a query builder bound to this transaction.
  WebTxQueryBuilder query(String store) =>
      WebTxQueryBuilder._(_pocket, _pocket.schemaFor(store), sessionId);

  /// Creates a full-text search builder bound to this transaction.
  WebTxSearchQueryBuilder search(String store, String term) =>
      WebTxSearchQueryBuilder._(
          _pocket, _pocket.schemaFor(store), sessionId, term);

  /// Runs [action] in a nested transaction implemented as a savepoint.
  Future<T> transaction<T>(Future<T> Function(WebTx tx) action) async {
    final spRes = decodeWireValue(
        await _pocket.send(WireOp.txSavepoint, {'sessionId': sessionId}));
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

/// Web transaction adapter for the typed layer's map-level seam. The worker
/// transaction surface has no `watchOne` — reading through a typed
/// transaction-bound handle mirrors the raw `WebTxCollection` exactly.
final class _WebTxTypedSurface implements TypedStoreSurface {
  _WebTxTypedSurface(this._collection);

  final WebTxCollection _collection;

  @override
  Future<Map<String, Object?>?> get(String id) => _collection.get(id);

  @override
  Future<void> put(Map<String, Object?> record) => _collection.put(record);

  @override
  Future<void> putAll(List<Map<String, Object?>> records) =>
      _collection.putAll(records);

  @override
  Future<void> patch(String id, Map<String, Object?> changes) =>
      _collection.patch(id, changes);

  @override
  Future<void> patchAll(Map<String, Map<String, Object?>> patches) =>
      _collection.patchAll(patches);

  @override
  Future<void> archive(String id) => _collection.archive(id);

  @override
  Future<void> restore(String id) => _collection.restore(id);

  @override
  Future<void> purge(String id) => _collection.purge(id);

  @override
  Stream<Map<String, Object?>?> watchOne(String id) => throw UnsupportedError(
      'watchOne is unavailable inside a web transaction session.');

  @override
  TypedQuerySurface query() => _WebTxTypedQuerySurface(WebTxQueryBuilder._(
      _collection._pocket, _collection.schema, _collection.sessionId));

  @override
  TypedSearchSurface search(String term) =>
      _WebTxTypedSearchSurface(WebTxSearchQueryBuilder._(_collection._pocket,
          _collection.schema, _collection.sessionId, term));
}

final class _WebTxTypedQuerySurface implements TypedQuerySurface {
  _WebTxTypedQuerySurface(this._builder);

  final WebTxQueryBuilder _builder;

  @override
  void where(String field,
      {Object? eq,
      Object? neq,
      List<Object?>? inValues,
      (Object?, Object?)? between,
      bool? isNull,
      bool? isNotNull}) {
    _builder.where(field,
        eq: eq,
        neq: neq,
        inValues: inValues,
        between: between,
        isNull: isNull,
        isNotNull: isNotNull);
  }

  @override
  void whereRange(String field,
      {Object? gt,
      Object? gte,
      Object? lt,
      Object? lte,
      String? startsWith,
      String? endsWith,
      String? contains}) {
    _builder.where(field,
        gt: gt,
        gte: gte,
        lt: lt,
        lte: lte,
        startsWith: startsWith,
        endsWith: endsWith,
        contains: contains);
  }

  @override
  void orWhere(List<Map<String, Object?>> groups) {
    _builder.orWhere(groups);
  }

  @override
  void orderBy(String field, {bool desc = false}) {
    _builder.orderBy(field, desc: desc);
  }

  @override
  void select(List<String> fields) {
    _builder.select(fields);
  }

  @override
  void pageOptions(
      {int? limit,
      bool all = false,
      bool? includeArchived,
      bool? includeHidden}) {
    if (limit != null) _builder.limit(limit);
    if (all) _builder.all();
    if (includeArchived ?? false) _builder.includeArchived();
    if (includeHidden ?? false) _builder.includeHidden();
  }

  @override
  Future<Page> fetch({String? cursor}) => _builder.fetch(cursor: cursor);

  @override
  Future<Page> keysetAfter(String cursor) => _builder.keysetAfter(cursor);

  @override
  Future<int> count() => _builder.count();

  @override
  Future<int> countDistinct(String field) => _builder.countDistinct(field);

  @override
  Future<List<Object?>> distinct(String field) => _builder.distinct(field);

  @override
  Future<List<String>> ids() => _builder.ids();

  @override
  Future<String> explain() => _builder.explain();

  @override
  Future<num?> aggregate(String fn, String field) => switch (fn) {
        'sum' => _builder.sum(field),
        'min' => _builder.min(field),
        'max' => _builder.max(field),
        'avg' => _builder.avg(field),
        _ => throw ArgumentError.value(fn, 'fn', 'Unknown aggregate.'),
      };

  @override
  (String, List<Object?>) debugCompile() => _builder.queryCore.debugCompile();

  @override
  Stream<List<Map<String, Object?>>> watch() => throw UnsupportedError(
      'query watch is unavailable inside a web transaction session.');
}

final class _WebTxTypedSearchSurface implements TypedSearchSurface {
  _WebTxTypedSearchSurface(this._builder);

  final WebTxSearchQueryBuilder _builder;

  @override
  void limit(int n) {
    _builder.limit(n);
  }

  @override
  void all() {
    _builder.all();
  }

  @override
  void includeArchived() {
    _builder.includeArchived();
  }

  @override
  void includeHidden() {
    _builder.includeHidden();
  }

  @override
  Future<List<SearchResult>> fetch() => _builder.fetch();

  @override
  (String, List<Object?>) debugCompile() => _builder.searchCore.debugCompile();
}
