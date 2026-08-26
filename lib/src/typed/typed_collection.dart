/// Typed CRUD: `TypedCollection` wraps a native `Collection` or a web
/// `WebCollection` behind one thin map-level seam.
library;

import 'package:localpocket/localpocket.dart';

import 'draft.dart';
import 'query_surface.dart';
import 'store_def.dart';
import 'typed_query.dart';
import 'typed_row.dart';
import 'typed_search.dart';

/// The map-level surface `TypedCollection` delegates to — the internal seam
/// that absorbs the native/web collection difference. It is public only
/// because the web facade implements it from another library.
///
/// Every method mirrors the matching engine method's shape exactly; the
/// typed layer adds no validation and no new wire operations.
abstract interface class TypedStoreSurface {
  /// Reads one record, or `null` when absent.
  Future<Map<String, Object?>?> get(String id);

  /// Inserts or replaces one record.
  Future<void> put(Map<String, Object?> record);

  /// Inserts or replaces records in one batch.
  Future<void> putAll(List<Map<String, Object?>> records);

  /// Applies partial changes to an existing record.
  Future<void> patch(String id, Map<String, Object?> changes);

  /// Applies partial changes to many records in one batch.
  Future<void> patchAll(Map<String, Map<String, Object?>> patches);

  /// Soft-deletes a record.
  Future<void> archive(String id);

  /// Removes the archive flag.
  Future<void> restore(String id);

  /// Hard-deletes a record and its metadata.
  Future<void> purge(String id);

  /// Watches one record, re-emitting only on change.
  Stream<Map<String, Object?>?> watchOne(String id);

  /// Creates the raw query delegation surface.
  TypedQuerySurface query();

  /// Creates the raw FTS delegation surface for [term].
  TypedSearchSurface search(String term);
}

/// Native adapter: delegates verbatim to a [Collection].
final class _NativeSurface implements TypedStoreSurface {
  _NativeSurface(this._collection);

  final Collection _collection;

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
  Stream<Map<String, Object?>?> watchOne(String id) => _collection.watchOne(id);

  @override
  TypedQuerySurface query() =>
      _NativeCollectionQuerySurface(_collection.query());

  @override
  TypedSearchSurface search(String term) =>
      _NativeCollectionSearchSurface(_collection.search(term));
}

final class _NativeCollectionQuerySurface implements TypedQuerySurface {
  _NativeCollectionQuerySurface(this._builder);

  QueryBuilder _builder;

  @override
  void where(String field,
      {Object? eq,
      Object? neq,
      List<Object?>? inValues,
      (Object?, Object?)? between,
      bool? isNull,
      bool? isNotNull}) {
    _builder = _builder.where(field,
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
    _builder = _builder.where(field,
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
    _builder = _builder.orWhere(groups);
  }

  @override
  void orderBy(String field, {bool desc = false}) {
    _builder = _builder.orderBy(field, desc: desc);
  }

  @override
  void select(List<String> fields) {
    _builder = _builder.select(fields);
  }

  @override
  void pageOptions(
      {int? limit,
      bool all = false,
      bool? includeArchived,
      bool? includeHidden}) {
    if (limit != null) _builder = _builder.limit(limit);
    if (all) _builder = _builder.all();
    if (includeArchived ?? false) _builder = _builder.includeArchived();
    if (includeHidden ?? false) _builder = _builder.includeHidden();
  }

  @override
  Future<Page> fetch({String? cursor}) =>
      cursor == null ? _builder.fetch() : _builder.keysetAfter(cursor);

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
  (String, List<Object?>) debugCompile() => _builder.debugCompile();

  @override
  Stream<List<Map<String, Object?>>> watch() => _builder.watch();
}

final class _NativeCollectionSearchSurface implements TypedSearchSurface {
  _NativeCollectionSearchSurface(this._builder);

  final SearchBuilder _builder;

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
  (String, List<Object?>) debugCompile() => _builder.debugCompile();
}

/// Typed CRUD access to one store definition instance.
///
/// Obtained from `db.store(Tasks.instance)` or `tx.store(Tasks.instance)`;
/// the registry guarantees the canonical instance (reference identity).
/// Reads return [TypedRow]s; writes go through [Draft] builders and are
/// then handled by the engine exactly as hand-written maps are — storage,
/// validation, encryption, outbox, and sync behavior are unchanged.
final class TypedCollection<S extends StoreDef<S>> {
  /// Creates a typed collection over a custom [surface]. The web facade
  /// uses this constructor directly; native callers use [TypedCollection.native].
  TypedCollection(this.def, TypedStoreSurface surface) : _surface = surface;

  /// Wraps a native engine [Collection].
  factory TypedCollection.native(S def, Collection collection) =>
      TypedCollection<S>(def, _NativeSurface(collection));

  /// The canonical store definition this handle is bound to.
  final S def;

  final TypedStoreSurface _surface;

  /// Reads one record by id, or `null` when absent.
  Future<TypedRow<S>?> get(String id) async {
    final map = await _surface.get(id);
    return map == null ? null : TypedRow<S>(def, map);
  }

  /// Creates a record (or replaces the existing record with the same id)
  /// from the [build] draft. The engine generates an id when none was set.
  Future<void> put(void Function(Draft<S>) build) async {
    final draft = Draft<S>(def);
    build(draft);
    await _surface.put(draft.build());
  }

  /// Upserts a batch of records from [builds], sequentially, in one
  /// transaction; the engine's last-write-wins and rollback semantics apply
  /// unchanged.
  Future<void> putAll(List<void Function(Draft<S>)> builds) async {
    final records = <Map<String, Object?>>[];
    for (final build in builds) {
      final draft = Draft<S>(def);
      build(draft);
      records.add(draft.build());
    }
    await _surface.putAll(records);
  }

  /// Applies the [build] changes to the existing record with [id] without
  /// replacing unspecified fields. Throws [RecordNotFoundException] when the
  /// record does not exist.
  Future<void> patch(String id, void Function(Draft<S>) build) async {
    final draft = Draft<S>(def);
    build(draft);
    await _surface.patch(id, draft.build());
  }

  /// Applies partial updates to many records in one batch.
  Future<void> patchAll(Map<String, void Function(Draft<S>)> patches) async {
    final built = <String, Map<String, Object?>>{};
    for (final e in patches.entries) {
      final draft = Draft<S>(def);
      e.value(draft);
      built[e.key] = draft.build();
    }
    await _surface.patchAll(built);
  }

  /// Soft-deletes the record with [id].
  Future<void> archive(String id) => _surface.archive(id);

  /// Removes the archive flag from the record with [id].
  Future<void> restore(String id) => _surface.restore(id);

  /// Hard-deletes the record with [id] and its metadata.
  Future<void> purge(String id) => _surface.purge(id);

  /// Watches the record at [id], re-emitting a [TypedRow] only when the
  /// record changes, and `null` after a purge — the engine's coalescing
  /// cadence unchanged.
  Stream<TypedRow<S>?> watchOne(String id) => _surface
      .watchOne(id)
      .map((map) => map == null ? null : TypedRow<S>(def, map));

  /// Starts a typed query delegated to the underlying engine/facade builder.
  TypedQuery<S> query() => TypedQuery<S>(def, _surface.query());

  /// Starts a typed FTS search. Construction errors such as
  /// [FtsUnavailableError] surface unchanged from the raw builder.
  TypedSearch<S> search(String term) => TypedSearch<S>(
        _surface.search(term),
        get,
      );
}
