/// Typed CRUD: `TypedCollection` wraps a native `Collection` or a web
/// `WebCollection` behind one thin map-level seam.
library;

import 'package:localpocket/localpocket.dart';

// Imported directly: the raw record-map seam types are hidden from the
// public barrel by design (see typed.dart).
import 'query_surface.dart';
import 'typed_search.dart' show TypedSearchSurface;

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
/// Reads return [TypedRow]s; writes are field-native [Write] values
/// (`Tasks.title.set('x')`) and every query terminal accepts the same
/// condition values built beside the descriptors — everything is then
/// handled by the database exactly as hand-written maps are: storage,
/// validation, encryption, outbox, and sync behavior are unchanged.
final class TypedCollection<S extends StoreDef<S>> {
  /// Creates a typed collection over a custom [surface]. The web facade
  /// uses this constructor directly; native callers use [TypedCollection.native].
  TypedCollection(this.def, TypedStoreSurface surface) : _surface = surface;

  /// Wraps a native database [Collection].
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
  ///   where: [Tasks.done.eq(false), Tasks.priority.gt(0)], // ANDed
  ///   anyOf: [Tasks.title.eq('Draft it'), Tasks.done.eq(true)], // OR group
  ///   orderBy: [Tasks.priority.desc],
  ///   limit: 50,
  /// );
  /// ```
  ///
  /// - [where] predicates are ANDed. Conditions carry their store, so a
  ///   foreign store's condition is a compile error.
  /// - [anyOf] is the OR group. the database lowers each alternative to a
  ///   field-equality binding, so the slot only accepts [EqCond] values —
  ///   a range condition cannot enter it. An alternative that carries
  ///   `eq(null)` (IS NULL) cannot be expressed by the database's OR group
  ///   and throws [ArgumentError]; put such a condition in [where] instead.
  /// - [orderBy] terms come from a descriptor's `asc`/`desc` getters.
  /// - [limit] is required unless [all] is set — the database's
  ///   `MissingLimitError` still applies at execution time.
  /// - [select] projects columns; reading an unselected field from the
  ///   resulting rows throws.
  ///
  /// `count`, `countDistinct`, `distinct`, `ids`, `explain`, `sum`, `min`,
  /// `max`, `avg`, and `watch` accept the same condition slots, so the
  /// predicate shape is identical across every terminal.
  Future<TypedPage<S>> query({
    List<Cond<S>> where = const [],
    List<EqCond<S>> anyOf = const [],
    List<OrderTerm<S>> orderBy = const [],
    int? limit,
    bool all = false,
    bool includeArchived = false,
    bool includeHidden = false,
    List<FieldDef<S, Object?>> select = const [],
  }) async {
    final projected = _projectedOf(select);
    final page = await _compose(
      where: where,
      anyOf: anyOf,
      orderBy: orderBy,
      limit: limit,
      all: all,
      includeArchived: includeArchived,
      includeHidden: includeHidden,
      select: select,
    ).fetch();
    return _wrapPage(page, projected);
  }

  /// Runs the same query shape after the opaque keyset [cursor] (from a
  /// previous page's [TypedPage.nextCursor]).
  Future<TypedPage<S>> queryAfter(
    String cursor, {
    List<Cond<S>> where = const [],
    List<EqCond<S>> anyOf = const [],
    List<OrderTerm<S>> orderBy = const [],
    int? limit,
    bool all = false,
    bool includeArchived = false,
    bool includeHidden = false,
    List<FieldDef<S, Object?>> select = const [],
  }) async {
    final projected = _projectedOf(select);
    final page = await _compose(
      where: where,
      anyOf: anyOf,
      orderBy: orderBy,
      limit: limit,
      all: all,
      includeArchived: includeArchived,
      includeHidden: includeHidden,
      select: select,
    ).keysetAfter(cursor);
    return _wrapPage(page, projected);
  }

  /// Counts matching records. Ordering, limits, and projections do not
  /// apply, so their slots are absent.
  Future<int> count({
    List<Cond<S>> where = const [],
    List<EqCond<S>> anyOf = const [],
    bool includeArchived = false,
    bool includeHidden = false,
  }) =>
      _compose(
        where: where,
        anyOf: anyOf,
        includeArchived: includeArchived,
        includeHidden: includeHidden,
      ).count();

  /// Counts distinct values of [field] under the same predicate slots.
  Future<int> countDistinct<V>(
    FieldDef<S, V> field, {
    List<Cond<S>> where = const [],
    List<EqCond<S>> anyOf = const [],
    bool includeArchived = false,
    bool includeHidden = false,
  }) {
    _checkOwner(field.owner, field.name);
    return _compose(
      where: where,
      anyOf: anyOf,
      includeArchived: includeArchived,
      includeHidden: includeHidden,
    ).countDistinct(field.name);
  }

  /// Returns distinct values of [field] decoded through its descriptor.
  /// the database caps unbounded distinct scans at 1000 rows unless [all] or
  /// [limit] opts out explicitly.
  Future<List<V>> distinct<V>(
    FieldDef<S, V> field, {
    List<Cond<S>> where = const [],
    List<EqCond<S>> anyOf = const [],
    int? limit,
    bool all = false,
    bool includeArchived = false,
    bool includeHidden = false,
  }) async {
    _checkOwner(field.owner, field.name);
    final raws = await _compose(
      where: where,
      anyOf: anyOf,
      limit: limit,
      all: all,
      includeArchived: includeArchived,
      includeHidden: includeHidden,
    ).distinct(field.name);
    return <V>[for (final raw in raws) decodeStored(field, raw)];
  }

  /// Returns matching record ids. [limit] (or [all]) is required — the
  /// database's `MissingLimitError` still applies.
  Future<List<String>> ids({
    List<Cond<S>> where = const [],
    List<EqCond<S>> anyOf = const [],
    List<OrderTerm<S>> orderBy = const [],
    int? limit,
    bool all = false,
    bool includeArchived = false,
    bool includeHidden = false,
  }) =>
      _compose(
        where: where,
        anyOf: anyOf,
        orderBy: orderBy,
        limit: limit,
        all: all,
        includeArchived: includeArchived,
        includeHidden: includeHidden,
      ).ids();

  /// Returns the delegated query plan explanation.
  Future<String> explain({
    List<Cond<S>> where = const [],
    List<EqCond<S>> anyOf = const [],
    List<OrderTerm<S>> orderBy = const [],
    int? limit,
    bool all = false,
    bool includeArchived = false,
    bool includeHidden = false,
    List<FieldDef<S, Object?>> select = const [],
  }) =>
      _compose(
        where: where,
        anyOf: anyOf,
        orderBy: orderBy,
        limit: limit,
        all: all,
        includeArchived: includeArchived,
        includeHidden: includeHidden,
        select: select,
      ).explain();

  /// Returns the sum of numeric [field] under the same predicate slots.
  Future<num?> sum(
    NumericFieldDef<S> field, {
    List<Cond<S>> where = const [],
    List<EqCond<S>> anyOf = const [],
    bool includeArchived = false,
    bool includeHidden = false,
  }) =>
      _aggregate('sum', field,
          where: where,
          anyOf: anyOf,
          includeArchived: includeArchived,
          includeHidden: includeHidden);

  /// Returns the minimum of numeric [field] under the same predicate slots.
  Future<num?> min(
    NumericFieldDef<S> field, {
    List<Cond<S>> where = const [],
    List<EqCond<S>> anyOf = const [],
    bool includeArchived = false,
    bool includeHidden = false,
  }) =>
      _aggregate('min', field,
          where: where,
          anyOf: anyOf,
          includeArchived: includeArchived,
          includeHidden: includeHidden);

  /// Returns the maximum of numeric [field] under the same predicate slots.
  Future<num?> max(
    NumericFieldDef<S> field, {
    List<Cond<S>> where = const [],
    List<EqCond<S>> anyOf = const [],
    bool includeArchived = false,
    bool includeHidden = false,
  }) =>
      _aggregate('max', field,
          where: where,
          anyOf: anyOf,
          includeArchived: includeArchived,
          includeHidden: includeHidden);

  /// Returns the average of numeric [field] under the same predicate slots.
  Future<num?> avg(
    NumericFieldDef<S> field, {
    List<Cond<S>> where = const [],
    List<EqCond<S>> anyOf = const [],
    bool includeArchived = false,
    bool includeHidden = false,
  }) =>
      _aggregate('avg', field,
          where: where,
          anyOf: anyOf,
          includeArchived: includeArchived,
          includeHidden: includeHidden);

  /// Watches the query shape and wraps each raw result row. The underlying
  /// `QueryWatcher` remains the sole invalidation/coalescing mechanism.
  Stream<List<TypedRow<S>>> watch({
    List<Cond<S>> where = const [],
    List<EqCond<S>> anyOf = const [],
    List<OrderTerm<S>> orderBy = const [],
    int? limit,
    bool all = false,
    bool includeArchived = false,
    bool includeHidden = false,
    List<FieldDef<S, Object?>> select = const [],
  }) {
    final projected = _projectedOf(select);
    return _compose(
      where: where,
      anyOf: anyOf,
      orderBy: orderBy,
      limit: limit,
      all: all,
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
    List<Cond<S>> where = const [],
    List<EqCond<S>> anyOf = const [],
    List<OrderTerm<S>> orderBy = const [],
    int? limit,
    bool all = false,
    bool includeArchived = false,
    bool includeHidden = false,
    List<FieldDef<S, Object?>> select = const [],
  }) =>
      _compose(
        where: where,
        anyOf: anyOf,
        orderBy: orderBy,
        limit: limit,
        all: all,
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
    int? limit,
    bool all = false,
    bool includeArchived = false,
    bool includeHidden = false,
  }) =>
      executeSearch<S>(
        _surface.search(term),
        get,
        limit: limit,
        all: all,
        includeArchived: includeArchived,
        includeHidden: includeHidden,
      );

  // -----------------------------------------------------------------------
  // composition: every terminal lowers its named slots onto the delegated
  // surface exactly once — there is no builder to lose or double-apply.
  // -----------------------------------------------------------------------

  TypedQuerySurface _compose({
    List<Cond<S>> where = const [],
    List<EqCond<S>> anyOf = const [],
    List<OrderTerm<S>> orderBy = const [],
    int? limit,
    bool all = false,
    bool includeArchived = false,
    bool includeHidden = false,
    List<FieldDef<S, Object?>> select = const [],
  }) {
    final surface = _surface.query();
    for (final condition in where) {
      _routeCondition(surface, condition);
    }
    if (anyOf.isNotEmpty) {
      final groups = <Map<String, Object?>>[];
      for (final condition in anyOf) {
        _checkOwner(condition.owner, condition.field);
        final value = condition.args.single;
        if (value == null) {
          throw ArgumentError.value(
            condition.field,
            'anyOf',
            'An OR alternative cannot express IS NULL. Move the '
                'field.eq(null) condition into `where:` instead.',
          );
        }
        groups.add(<String, Object?>{condition.field: value});
      }
      surface.orWhere(groups);
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
      all: all,
      includeArchived: includeArchived,
      includeHidden: includeHidden,
    );
    return surface;
  }

  /// Routes one descriptor-built condition onto the surface. Every operator
  /// the descriptors can build has an explicit route here; an unknown
  /// operator is an [ArgumentError], never a silently dropped predicate.
  void _routeCondition(TypedQuerySurface surface, Cond<S> condition) {
    _checkOwner(condition.owner, condition.field);
    final value = condition.args.isEmpty ? null : condition.args.first;
    switch (condition.operator) {
      case 'eq':
        // `eq(null)` is the documented IS NULL shorthand: SQL `= NULL`
        // never matches, so the null form must not reach the builder as an
        // equality binding.
        if (value == null) {
          surface.where(condition.field, isNull: true);
        } else {
          surface.where(condition.field, eq: value);
        }
      case 'neq':
        // `neq(null)` is the documented IS NOT NULL shorthand.
        if (value == null) {
          surface.where(condition.field, isNotNull: true);
        } else {
          surface.where(condition.field, neq: value);
        }
      case 'inValues':
        surface.where(condition.field, inValues: condition.args);
      case 'between':
        if (condition.args.length != 2) {
          throw ArgumentError.value(
            condition.args,
            'condition.args',
            'A between condition carries exactly two encoded arguments.',
          );
        }
        surface.where(
          condition.field,
          between: (condition.args[0], condition.args[1]),
        );
      case 'isNull':
        surface.where(condition.field, isNull: true);
      case 'isNotNull':
        surface.where(condition.field, isNotNull: true);
      case 'gt' || 'gte' || 'lt' || 'lte':
        surface.whereRange(
          condition.field,
          gt: condition.operator == 'gt' ? value : null,
          gte: condition.operator == 'gte' ? value : null,
          lt: condition.operator == 'lt' ? value : null,
          lte: condition.operator == 'lte' ? value : null,
        );
      case 'startsWith' || 'endsWith' || 'contains':
        surface.whereRange(
          condition.field,
          startsWith:
              condition.operator == 'startsWith' ? value as String? : null,
          endsWith: condition.operator == 'endsWith' ? value as String? : null,
          contains: condition.operator == 'contains' ? value as String? : null,
        );
      default:
        throw ArgumentError.value(
          condition.operator,
          'condition.operator',
          'Unknown typed condition operator.',
        );
    }
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
    required List<EqCond<S>> anyOf,
    required bool includeArchived,
    required bool includeHidden,
  }) {
    _checkOwner(field.owner, field.name);
    return _compose(
      where: where,
      anyOf: anyOf,
      includeArchived: includeArchived,
      includeHidden: includeHidden,
    ).aggregate(fn, field.name);
  }

  Set<String>? _projectedOf(List<FieldDef<S, Object?>> select) =>
      select.isEmpty ? null : <String>{for (final field in select) field.name};

  TypedPage<S> _wrapPage(Page page, Set<String>? projected) => TypedPage<S>(
        items: <TypedRow<S>>[
          for (final row in page.items)
            TypedRow<S>(def, row, projected: projected),
        ],
        nextCursor: page.nextCursor,
        hasMore: page.hasMore,
      );
}
