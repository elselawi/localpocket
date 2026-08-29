/// Typed CRUD: `TypedCollection` wraps a native `Collection` or a web
/// `WebCollection` behind one thin map-level seam.
library;

// Imported directly: the raw record-map seam types are hidden from the
// public barrel by design (see typed.dart).
import 'package:localpocket/src/core/ddl_compiler.dart';
import 'package:localpocket/src/core/errors.dart';
import 'package:localpocket/src/core/query/query_builder/predicate_tree.dart';
import 'package:localpocket/src/core/query/query_builder/query_builder.dart';
import 'package:localpocket/src/core/query/search_builder/search_builder.dart';
import 'package:localpocket/src/core/store.dart';
import 'package:localpocket/src/typed/cond.dart';
import 'package:localpocket/src/typed/field_def.dart';
import 'package:localpocket/src/typed/limits.dart';
import 'package:localpocket/src/typed/store_def.dart';
import 'package:localpocket/src/typed/typed_query.dart';
import 'package:localpocket/src/typed/typed_row.dart';
import 'package:localpocket/src/typed/write.dart';
import 'package:localpocket/src/typed/typed_search.dart';
import 'package:localpocket/src/typed/query_surface.dart';

/// The map-level surface `TypedCollection` delegates to, absorbing the
/// native/web difference. Implement it to adapt another backend (the
/// package's web facade does exactly that).
///
/// Every method mirrors the matching database method's shape exactly; the
/// typed layer adds no validation and no new operations.
abstract interface class TypedStoreSurface {
  /// Reads one record, or `null` when absent.
  Future<Map<String, Object?>?> get(String id);

  /// Inserts or replaces one record.
  Future<void> put(Map<String, Object?> record);

  /// Inserts or replaces records in one batch.
  Future<void> putAll(List<Map<String, Object?>> records);

  /// Inserts, or merges one record's fields into an existing record.
  Future<void> upsert(Map<String, Object?> record);

  /// Inserts or merges records in one batch.
  Future<void> upsertAll(List<Map<String, Object?>> records);

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

/// {@template localpocket.__native_surface}
/// Native adapter: delegates verbatim to a [Collection].
/// {@endtemplate}
final class _NativeSurface implements TypedStoreSurface {
  /// {@macro localpocket.__native_surface}
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
  void wherePredicate(PredicateNode node) {
    _builder = _builder.wherePredicate(node);
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
  void pageOptions({
    required int limit,
    bool? includeArchived,
    bool? includeHidden,
  }) {
    // The unbounded sentinel expands to the no-LIMIT path here, so the raw
    // value never reaches the builder's limit slot or compiled SQL.
    _builder =
        limit == Limits.unbounded ? _builder.all() : _builder.limit(limit);
    if (includeArchived ?? false) _builder = _builder.includeArchived();
    if (includeHidden ?? false) _builder = _builder.includeHidden();
  }

  @override
  Future<Page> fetch({String? cursor}) =>
      cursor == null ? _builder.fetch() : _builder.keysetAfter(cursor);

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

/// {@template localpocket.typed_collection}
/// Typed CRUD access to one store definition instance.
///
/// Obtained from `db.store(Tasks.store)` or `tx.store(Tasks.store)`;
/// the registry guarantees the canonical instance (reference identity).
/// Reads return [TypedRow]s; writes are field-native [Write] values
/// (`Tasks.title.set('x')`) and every query terminal accepts the same
/// condition values built beside the descriptors — everything is then
/// handled by the database exactly as hand-written maps are: storage,
/// validation, encryption, outbox, and sync behavior are unchanged.
/// {@endtemplate}
final class TypedCollection<S extends StoreDef<S>> {
  /// Creates a typed collection over a custom [surface]. The web facade
  /// uses this constructor directly; native callers use [TypedCollection.native].
  ///
  /// {@macro localpocket.typed_collection}
  TypedCollection(this.def, TypedStoreSurface surface) : _surface = surface;

  /// Wraps a native database [Collection].
  ///
  /// {@macro localpocket.typed_collection}
  factory TypedCollection.native(S def, Collection collection) =>

      /// {@macro localpocket.typed_collection}
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
  /// from the field-native [writes]. the database generates an id when no
  /// [Writes.id] value is present.
  ///
  /// ```dart
  /// await tasks.put([
  ///   Writes.id('tsk1234567890ab'), // optional
  ///   Tasks.title.set('Ship it'),
  ///   Tasks.priority.set(3),
  ///   Tasks.done.set(false),
  /// ]);
  /// ```
  Future<void> put(List<Write<S>> writes) async {
    await _surface.put(_buildRecord(writes, allowId: true));
  }

  /// Upserts a batch of records — one [Write] list per record — sequentially,
  /// in one transaction; the database's last-write-wins and rollback semantics
  /// apply unchanged. Each record may pin its id with [Writes.id].
  Future<void> putAll(List<List<Write<S>>> records) async {
    await _surface.putAll(<Map<String, Object?>>[
      for (final record in records) _buildRecord(record, allowId: true),
    ]);
  }

  /// Creates a record, or merges the field-native [writes] into the existing
  /// record with the same id, touching only the listed fields — unlike [put],
  /// fields not mentioned are preserved, and unlike [patch], the record is
  /// created when it doesn't exist. A [Writes.id] value is optional; the
  /// database generates an id when absent.
  ///
  /// ```dart
  /// await tasks.upsert([
  ///   Writes.id('tsk1234567890ab'), // optional
  ///   Tasks.title.set('Ship it'),
  /// ]);
  /// ```
  Future<void> upsert(List<Write<S>> writes) async {
    await _surface.upsert(_buildRecord(writes, allowId: true));
  }

  /// Upserts a batch of records — one [Write] list per record — sequentially,
  /// in one transaction: duplicate ids merge in order (last write wins) and
  /// the batch rolls back on the first failure. Each record may pin its id
  /// with [Writes.id].
  Future<void> upsertAll(List<List<Write<S>>> records) async {
    await _surface.upsertAll(<Map<String, Object?>>[
      for (final record in records) _buildRecord(record, allowId: true),
    ]);
  }

  /// Applies the field-native [writes] to the existing record with [id]
  /// without replacing unspecified fields. Throws [RecordNotFoundException]
  /// when the record does not exist; a [Writes.id] value inside [writes] is
  /// rejected — record ids are immutable.
  Future<void> patch(String id, List<Write<S>> writes) async {
    await _surface.patch(id, _buildRecord(writes, allowId: false));
  }

  /// Applies partial updates to many records in one batch, keyed by record
  /// id. A [Writes.id] value inside a patch is rejected — record ids are
  /// immutable.
  Future<void> patchAll(Map<String, List<Write<S>>> patches) async {
    await _surface.patchAll(<String, Map<String, Object?>>{
      for (final entry in patches.entries)
        entry.key: _buildRecord(entry.value, allowId: false),
    });
  }

  /// Soft-deletes the record with [id].
  ///
  /// A record that was never pushed to the remote is dropped entirely
  /// instead — there is no remote delete to record — unless
  /// [StoreDef.keepUnsyncedArchives] keeps it archived locally.
  Future<void> archive(String id) => _surface.archive(id);

  /// Removes the archive flag from the record with [id].
  Future<void> restore(String id) => _surface.restore(id);

  /// Hard-deletes the record with [id] and its metadata.
  Future<void> purge(String id) => _surface.purge(id);

  /// Watches the record at [id], re-emitting a [TypedRow] only when the
  /// record changes, and `null` after a purge — the database's coalescing
  /// cadence unchanged.
  Stream<TypedRow<S>?> watchOne(String id) => _surface
      .watchOne(id)
      .map((map) => map == null ? null : TypedRow<S>(def, map));

  /// Runs one typed query and returns its page directly — the single row
  /// query entry point, with no builder and nothing to chain.
  ///
  /// Strict typing is preserved because the slot values are typed values
  /// built beside the descriptors:
  ///
  /// ```dart
  /// final page = await tasks.query(
  ///   where: [
  ///     Tasks.done.eq(false), // one element: a leaf predicate
  ///     (Tasks.priority.gte(4) | Tasks.title.startsWith('Ship')) &
  ///         ~Tasks.title.eq('Draft'), // one element: a boolean tree
  ///   ],
  ///   orderBy: [Tasks.priority.desc],
  ///   limit: 50,
  /// );
  /// ```
  ///
  /// - [where] is an AND-list of [Cond] trees: the list elements AND
  ///   together, and each element may itself be an arbitrarily deep boolean
  ///   expression composed with `&` (AND), `|` (OR), and `~` (NOT). All
  ///   predicate operators participate — ranges, text matches, `inValues`,
  ///   `between`, and `eq(null)` (IS NULL) are all legal inside `|` and `~`.
  ///   Conditions carry their store, so a foreign store's condition is a
  ///   compile error.
  /// - [orderBy] terms come from a descriptor's `asc`/`desc` getters.
  /// - [limit] is required at compile time; pass [Limits.unbounded] to run
  ///   the read without a page size.
  /// - [select] projects columns; reading an unselected field from the
  ///   resulting rows throws.
  /// - [after] resumes a persisted cursor (a previous page's `nextCursor`)
  ///   under the exact same slots; a cursor minted by a different shape
  ///   throws [StaleCursorError]. In-session continuation never re-states
  ///   slots: [TypedPage.next] and [TypedPage.prev] reuse the captured
  ///   shape.
  ///
  /// `count`, `countDistinct`, `distinct`, `ids`, `explain`, `sum`, `min`,
  /// `max`, `avg`, and `watch` accept the same condition slots, so the
  /// predicate shape is identical across every terminal. Watchable queries
  /// are live snapshots and have no pagination surface.
  Future<TypedPage<S>> query({
    required int limit,
    List<Cond<S>> where = const [],
    List<OrderTerm<S>> orderBy = const [],
    bool includeArchived = false,
    bool includeHidden = false,
    List<FieldDef<S, Object?>> select = const [],
    String? after,
  }) async {
    final projected = _projectedOf(select);
    Future<TypedPage<S>> continueFrom(
      String cursor, {
      required bool backward,
    }) async {
      final surface = _compose(
        where: where,
        orderBy: orderBy,
        limit: limit,
        includeArchived: includeArchived,
        includeHidden: includeHidden,
        select: select,
      );
      final page = await (backward
          ? surface.keysetBefore(cursor)
          : surface.keysetAfter(cursor));
      return _wrapPage(page, projected, continueFrom);
    }

    final surface = _compose(
      where: where,
      orderBy: orderBy,
      limit: limit,
      includeArchived: includeArchived,
      includeHidden: includeHidden,
      select: select,
    );
    final page =
        await (after == null ? surface.fetch() : surface.keysetAfter(after));
    return _wrapPage(page, projected, continueFrom);
  }

  /// Counts matching records. Ordering, limits, and projections do not
  /// apply, so their slots are absent.
  Future<int> count({
    List<Cond<S>> where = const [],
    bool includeArchived = false,
    bool includeHidden = false,
  }) =>
      _compose(
        where: where,
        includeArchived: includeArchived,
        includeHidden: includeHidden,
        limit: Limits.unbounded,
      ).count();

  /// Counts distinct values of [field] under the same predicate slots.
  Future<int> countDistinct<V>(
    FieldDef<S, V> field, {
    List<Cond<S>> where = const [],
    bool includeArchived = false,
    bool includeHidden = false,
  }) {
    _checkOwner(field.owner, field.name);
    return _compose(
      where: where,
      includeArchived: includeArchived,
      includeHidden: includeHidden,
      limit: Limits.unbounded,
    ).countDistinct(field.name);
  }

  /// Returns distinct values of [field] decoded through its descriptor.
  /// the database caps unbounded distinct scans at [Limits.distinctDefault]
  /// rows; pass [Limits.unbounded] to lift the cap.
  Future<List<V>> distinct<V>(
    FieldDef<S, V> field, {
    int limit = Limits.distinctDefault,
    List<Cond<S>> where = const [],
    bool includeArchived = false,
    bool includeHidden = false,
  }) async {
    _checkOwner(field.owner, field.name);
    final raws = await _compose(
      where: where,
      limit: limit,
      includeArchived: includeArchived,
      includeHidden: includeHidden,
    ).distinct(field.name);
    return <V>[for (final raw in raws) decodeStored(field, raw)];
  }

  /// Returns matching record ids. [limit] is required at compile time;
  /// pass [Limits.unbounded] to opt out of the page size.
  Future<List<String>> ids({
    required int limit,
    List<Cond<S>> where = const [],
    List<OrderTerm<S>> orderBy = const [],
    bool includeArchived = false,
    bool includeHidden = false,
  }) =>
      _compose(
        where: where,
        orderBy: orderBy,
        limit: limit,
        includeArchived: includeArchived,
        includeHidden: includeHidden,
      ).ids();

  /// Returns the delegated query plan explanation.
  Future<String> explain({
    required int limit,
    List<Cond<S>> where = const [],
    List<OrderTerm<S>> orderBy = const [],
    bool includeArchived = false,
    bool includeHidden = false,
    List<FieldDef<S, Object?>> select = const [],
  }) =>
      _compose(
        where: where,
        orderBy: orderBy,
        limit: limit,
        includeArchived: includeArchived,
        includeHidden: includeHidden,
        select: select,
      ).explain();

  /// Returns the sum of numeric [field] under the same predicate slots.
  Future<num?> sum(
    NumericFieldDef<S> field, {
    List<Cond<S>> where = const [],
    bool includeArchived = false,
    bool includeHidden = false,
  }) =>
      _aggregate('sum', field,
          where: where,
          includeArchived: includeArchived,
          includeHidden: includeHidden);

  /// Returns the minimum of numeric [field] under the same predicate slots.
  Future<num?> min(
    NumericFieldDef<S> field, {
    List<Cond<S>> where = const [],
    bool includeArchived = false,
    bool includeHidden = false,
  }) =>
      _aggregate('min', field,
          where: where,
          includeArchived: includeArchived,
          includeHidden: includeHidden);

  /// Returns the maximum of numeric [field] under the same predicate slots.
  Future<num?> max(
    NumericFieldDef<S> field, {
    List<Cond<S>> where = const [],
    bool includeArchived = false,
    bool includeHidden = false,
  }) =>
      _aggregate('max', field,
          where: where,
          includeArchived: includeArchived,
          includeHidden: includeHidden);

  /// Returns the average of numeric [field] under the same predicate slots.
  Future<num?> avg(
    NumericFieldDef<S> field, {
    List<Cond<S>> where = const [],
    bool includeArchived = false,
    bool includeHidden = false,
  }) =>
      _aggregate('avg', field,
          where: where,
          includeArchived: includeArchived,
          includeHidden: includeHidden);

  /// Watches the query shape and wraps each raw result row. The underlying
  /// `QueryWatcher` remains the sole invalidation/coalescing mechanism.
  Stream<List<TypedRow<S>>> watch({
    required int limit,
    List<Cond<S>> where = const [],
    List<OrderTerm<S>> orderBy = const [],
    bool includeArchived = false,
    bool includeHidden = false,
    List<FieldDef<S, Object?>> select = const [],
  }) {
    final projected = _projectedOf(select);
    return _compose(
      where: where,
      orderBy: orderBy,
      limit: limit,
      includeArchived: includeArchived,
      includeHidden: includeHidden,
      select: select,
    ).watch().map((rows) => <TypedRow<S>>[
          for (final row in rows) TypedRow<S>(def, row, projected: projected),
        ]);
  }

  /// Exposes the database compiler verbatim for typed/raw SQL+args parity —
  /// the same slots as [query], evaluated without executing.
  (String, List<Object?>) debugCompile({
    required int limit,
    List<Cond<S>> where = const [],
    List<OrderTerm<S>> orderBy = const [],
    bool includeArchived = false,
    bool includeHidden = false,
    List<FieldDef<S, Object?>> select = const [],
  }) =>
      _compose(
        where: where,
        orderBy: orderBy,
        limit: limit,
        includeArchived: includeArchived,
        includeHidden: includeHidden,
        select: select,
      ).debugCompile();

  /// Runs one typed FTS search and returns its hits directly — the single
  /// search entry point, with no builder and nothing to chain.
  /// Construction errors such as [FtsUnavailableError] surface unchanged
  /// from the raw builder.
  Future<List<TypedSearchHit<S>>> search(
    String term, {
    required int limit,
    bool includeArchived = false,
    bool includeHidden = false,
  }) =>
      executeSearch<S>(
        _surface.search(term),
        get,
        limit: limit,
        includeArchived: includeArchived,
        includeHidden: includeHidden,
      );

  // -----------------------------------------------------------------------
  // composition: every terminal lowers its named slots onto the delegated
  // surface exactly once — there is no builder to lose or double-apply.
  // -----------------------------------------------------------------------

  TypedQuerySurface _compose({
    required int limit,
    List<Cond<S>> where = const [],
    List<OrderTerm<S>> orderBy = const [],
    bool includeArchived = false,
    bool includeHidden = false,
    List<FieldDef<S, Object?>> select = const [],
  }) {
    final surface = _surface.query();
    for (final condition in where) {
      surface.wherePredicate(_toNode(condition));
    }
    for (final term in orderBy) {
      _checkOwner(term.field.owner, term.field.name);
      surface.orderBy(term.field.name, desc: term.desc);
    }
    if (select.isNotEmpty) {
      for (final field in select) {
        _checkOwner(field.owner, field.name);
      }
      surface.select(<String>[for (final field in select) field.name]);
    }
    surface.pageOptions(
      limit: limit,
      includeArchived: includeArchived,
      includeHidden: includeHidden,
    );
    return surface;
  }

  /// Lowers one condition tree onto the engine's predicate nodes. The sealed
  /// [Cond] hierarchy makes this switch total: leaves, conjunctions,
  /// disjunctions, and negations are the only shapes a typed condition can
  /// have, so no operator can fall through unrouted.
  PredicateNode _toNode(Cond<S> condition) => switch (condition) {
        FieldCond<S>() => _leafNode(condition),
        AllCond<S>(:final children) => AllPredicate(<PredicateNode>[
            for (final child in children) _toNode(child),
          ]),
        AnyCond<S>(:final children) => AnyPredicate(<PredicateNode>[
            for (final child in children) _toNode(child),
          ]),
        NotCond<S>(:final child) => NotPredicate(_toNode(child)),
      };

  /// Lowers one leaf. The owner check is the runtime backstop for a cast
  /// that defeated the phantom store type; `eq(null)` is the documented
  /// IS NULL shorthand and is routed there (`= NULL` never matches).
  PredicateNode _leafNode(FieldCond<S> condition) {
    _checkOwner(condition.owner, condition.field);
    if (condition.operator == 'eq' && condition.args.single == null) {
      return LeafPredicate(condition.field, 'isNull', const <Object?>[]);
    }
    return LeafPredicate(condition.field, condition.operator, condition.args);
  }

  /// Lowers one record's field-native writes into the database's logical map.
  Map<String, Object?> _buildRecord(
    List<Write<S>> writes, {
    required bool allowId,
  }) {
    final record = <String, Object?>{};
    for (final write in writes) {
      if (write is FieldWrite<S>) {
        _checkOwner(write.owner, write.name);
        record[write.name] = write.encoded;
      } else if (write is IdWrite<S>) {
        if (!allowId) {
          throw ArgumentError.value(
            write.id,
            'writes',
            'Record ids are immutable: put/putAll assign them, '
                'patch/patchAll cannot change them.',
          );
        }
        if (record.containsKey('id')) {
          throw ArgumentError.value(
            write.id,
            'writes',
            'Duplicate id write in one record.',
          );
        }
        record['id'] = write.id;
      } else if (write is ExtraWrite<S>) {
        _validateExtraKey(write.key);
        record[write.key] = write.value;
      }
    }
    return record;
  }

  void _validateExtraKey(String key) {
    if (DdlCompiler.reservedColumns.contains(key) ||
        def.collectionSchema.declaredFieldNames.contains(key)) {
      throw ValidationException(
        'Key "$key" is declared or reserved and cannot be set as extra.',
        field: key,
      );
    }
  }

  void _checkOwner(Object? owner, String name) {
    if (!identical(owner, def)) {
      throw typedStoreMismatch(
        owner: owner,
        name: name,
        target: S,
        targetKind: 'handle',
      );
    }
  }

  Future<num?> _aggregate(
    String fn,
    NumericFieldDef<S> field, {
    required List<Cond<S>> where,
    required bool includeArchived,
    required bool includeHidden,
  }) {
    _checkOwner(field.owner, field.name);
    return _compose(
      where: where,
      includeArchived: includeArchived,
      includeHidden: includeHidden,
      limit: Limits.unbounded,
    ).aggregate(fn, field.name);
  }

  Set<String>? _projectedOf(List<FieldDef<S, Object?>> select) =>
      select.isEmpty ? null : <String>{for (final field in select) field.name};

  TypedPage<S> _wrapPage(
    Page page,
    Set<String>? projected,
    TypedPageLoader<S> loader,
  ) =>
      TypedPage<S>.internal(
        items: <TypedRow<S>>[
          for (final row in page.items)
            TypedRow<S>(def, row, projected: projected),
        ],
        hasNext: page.hasNext,
        hasPrev: page.hasPrev,
        nextCursor: page.nextCursor,
        prevCursor: page.prevCursor,
        loader: loader,
      );
}
