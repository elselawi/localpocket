import 'package:localpocket/src/contract/contract.dart' as contract;
import 'package:localpocket/src/core/query/query_builder/predicate_tree.dart';
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
import 'package:localpocket/src/web/facade/facade_host.dart';
import 'package:localpocket/src/web/facade/search/web_contract_forwarder.dart'
    show WebContractSearchForwarder;
import 'package:localpocket/src/web/facade/query/web_contract_forwarder.dart'
    show WebContractQueryForwarder;
import 'package:localpocket/src/web/facade/web_contract_crud_forwarder.dart';

/// {@template localpocket.web_tx}
/// A transaction session on the web worker.
/// {@endtemplate}
class WebTx {
  /// Creates a transaction facade for [session].
  ///
  /// {@macro localpocket.web_tx}
  WebTx.ins(this._pocket, this.session);

  final WebFacadeHost _pocket;

  /// Identifier of the kernel-side transaction session (kernel-minted).
  final String session;

  int _savepointCounter = 0;

  /// Returns a collection facade bound to this transaction.
  WebTxCollection collection(String name) =>
      WebTxCollection._(_pocket, _pocket.schemaFor(name), session);

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
      _WebTxTypedSurface(WebTxCollection._(_pocket, registered, session)),
    );
  }

  /// Creates a query builder bound to this transaction.
  WebTxQueryBuilder query(String store) =>
      WebTxQueryBuilder._(_pocket, _pocket.schemaFor(store), session);

  /// Creates a full-text search builder bound to this transaction.
  WebTxSearchQueryBuilder search(String store, String term) =>
      WebTxSearchQueryBuilder._(
          _pocket, _pocket.schemaFor(store), session, term);

  /// Runs [action] in a nested transaction implemented as a savepoint.
  Future<T> transaction<T>(Future<T> Function(WebTx tx) action) async {
    final name = 'sp${++_savepointCounter}';
    await _pocket.contractRuntime.send(
        contract.TransactionSavepointRequest(session: session, name: name));
    try {
      final res = await action(this);
      await _pocket.contractRuntime.send(
          contract.TransactionReleaseRequest(session: session, name: name));
      return res;
    } catch (_) {
      try {
        await _pocket.contractRuntime.send(
            contract.TransactionRollbackToRequest(
                session: session, name: name));
      } catch (_) {}
      rethrow;
    }
  }
}

/// Query builder bound to a web transaction session.
class WebTxQueryBuilder
    with
        QueryForwarder<WebTxQueryBuilder>,
        WebContractQueryForwarder<WebTxQueryBuilder> {
  WebTxQueryBuilder._(this._pocket, this.schema, this.session)
      : _core = QueryBuilder.compileOnly(schema);

  final WebFacadeHost _pocket;

  /// Schema of the collection queried by this builder.
  final CollectionSchema<Object?> schema;
  @override
  final String session;
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
        WebContractSearchForwarder<WebTxSearchQueryBuilder> {
  WebTxSearchQueryBuilder._(this._pocket, this.schema, this.session, this.term)
      : _core = SearchBuilder.compileOnly(schema, term);

  final WebFacadeHost _pocket;

  /// Schema of the collection searched by this builder.
  final CollectionSchema<Object?> schema;
  @override
  final String session;
  @override
  final String term;
  final SearchBuilder _core;

  @override
  WebFacadeHost get pocket => _pocket;

  @override
  SearchBuilder get searchCore => _core;
}

/// Main-thread collection bound to a transaction session.
class WebTxCollection with WebContractCrudForwarder {
  WebTxCollection._(this._pocket, this.schema, this.session);

  final WebFacadeHost _pocket;

  /// Schema of the collection exposed by this facade.
  final CollectionSchema<Object?> schema;
  @override
  final String session;

  @override
  WebFacadeHost get pocket => _pocket;

  @override
  String get name => schema.name;
}

/// {@template localpocket.__web_tx_typed_surface}
/// Web transaction adapter for the typed layer's map-level seam. The worker
/// transaction surface has no `watchOne` — reading through a typed
/// transaction-bound handle mirrors the raw `WebTxCollection` exactly.
/// {@endtemplate}
final class _WebTxTypedSurface implements TypedStoreSurface {
  /// {@macro localpocket.__web_tx_typed_surface}
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
  Future<void> upsert(Map<String, Object?> record) =>
      _collection.upsert(record);

  @override
  Future<void> upsertAll(List<Map<String, Object?>> records) =>
      _collection.upsertAll(records);

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
      _collection._pocket, _collection.schema, _collection.session));

  @override
  TypedSearchSurface search(String term) =>
      _WebTxTypedSearchSurface(WebTxSearchQueryBuilder._(
          _collection._pocket, _collection.schema, _collection.session, term));
}

final class _WebTxTypedQuerySurface implements TypedQuerySurface {
  _WebTxTypedQuerySurface(this._builder);

  final WebTxQueryBuilder _builder;

  @override
  void wherePredicate(PredicateNode node) {
    _builder.wherePredicate(node);
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
  void pageOptions({
    required int limit,
    bool? includeArchived,
    bool? includeHidden,
  }) {
    // The unbounded sentinel expands to the no-LIMIT path here, so the raw
    // value never crosses the worker wire as a page size.
    if (limit == Limits.unbounded) {
      _builder.all();
    } else {
      _builder.limit(limit);
    }
    if (includeArchived ?? false) _builder.includeArchived();
    if (includeHidden ?? false) _builder.includeHidden();
  }

  @override
  Future<Page> fetch({String? cursor}) => _builder.fetch(cursor: cursor);

  @override
  Future<Page> keysetAfter(String cursor) => _builder.keysetAfter(cursor);

  @override
  Future<Page> keysetBefore(String cursor) => _builder.keysetBefore(cursor);

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
