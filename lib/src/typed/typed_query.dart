/// Typed query builder and typed pages.
///
/// This layer only encodes descriptor values and wraps engine results. SQL
/// compilation, validation, pagination, execution, and watch invalidation all
/// remain owned by the raw query builder behind [TypedQuerySurface].
library;

import 'package:localpocket/localpocket.dart';

import 'cond.dart';
import 'field_def.dart';
import 'query_surface.dart';
import 'store_def.dart';
import 'typed_row.dart';

/// One page of typed rows returned by [TypedQuery.fetch] or
/// [TypedQuery.keysetAfter].
final class TypedPage<S extends StoreDef<S>> {
  /// Creates a typed page from wrapped [items] and the engine's opaque page
  /// metadata.
  const TypedPage({
    required this.items,
    required this.nextCursor,
    required this.hasMore,
  });

  /// Rows in this page.
  final List<TypedRow<S>> items;

  /// Opaque keyset cursor for the next page, or `null` at the end.
  final String? nextCursor;

  /// Whether the engine observed another row after this page.
  final bool hasMore;
}

/// A typed, fluent query over store definition [S].
final class TypedQuery<S extends StoreDef<S>> {
  /// Creates a query over [surface]. Facade adapters use this constructor;
  /// native callers receive queries from `TypedCollection.query()`.
  TypedQuery(this.def, this._surface);

  /// Wraps the native engine [builder].
  factory TypedQuery.native(S def, QueryBuilder builder) =>
      TypedQuery<S>(def, _NativeTypedQuerySurface(builder));

  /// The canonical store definition this query is bound to.
  final S def;

  final TypedQuerySurface _surface;
  Set<String>? _projected;

  /// Returns the universal equality-family predicate builder for [field].
  ///
  /// This is deliberately curried: `query.where(Tasks.done)(eq: false)`.
  /// Inferring [V] from the field alone prevents Dart from widening it using
  /// a wrong-typed named argument (`String` + `int` → `Object`), exactly like
  /// the curried `Draft.set` API.
  TypedWhere<S, V> where<V>(FieldDef<S, V> field) {
    _checkOwner(field.owner, field.name);
    return TypedWhere<S, V>._(this, field);
  }

  /// Adds the kind-scoped [condition] produced by a descriptor's `.gt`,
  /// `.gte`, `.lt`, `.lte`, `.startsWith`, `.endsWith`, or `.contains`.
  TypedQuery<S> whereCond(Cond<S> condition) {
    _checkOwner(condition.owner, condition.field);
    final value = condition.args.isEmpty ? null : condition.args.first;
    if (condition.operator == 'eq') {
      _surface.where(condition.field, eq: value);
      return this;
    }
    _surface.whereRange(
      condition.field,
      gt: condition.operator == 'gt' ? value : null,
      gte: condition.operator == 'gte' ? value : null,
      lt: condition.operator == 'lt' ? value : null,
      lte: condition.operator == 'lte' ? value : null,
      startsWith: condition.operator == 'startsWith' ? value as String? : null,
      endsWith: condition.operator == 'endsWith' ? value as String? : null,
      contains: condition.operator == 'contains' ? value as String? : null,
    );
    return this;
  }

  /// Adds an OR group of equality conditions. Each condition must use the
  /// `eq` operator; empty input delegates to the engine's existing no-op.
  TypedQuery<S> orWhere(List<Cond<S>> conditions) {
    final groups = <Map<String, Object?>>[];
    for (final condition in conditions) {
      _checkOwner(condition.owner, condition.field);
      if (condition.operator != 'eq') {
        throw ArgumentError.value(condition.operator, 'conditions',
            'orWhere accepts equality conditions only.');
      }
      groups.add(<String, Object?>{
        condition.field: condition.args.isEmpty ? null : condition.args.first,
      });
    }
    _surface.orWhere(groups);
    return this;
  }

  /// Adds an ordering term. The engine supplies its normal id tiebreaker.
  TypedQuery<S> orderBy<V>(FieldDef<S, V> field, {bool desc = false}) {
    _checkOwner(field.owner, field.name);
    _surface.orderBy(field.name, desc: desc);
    return this;
  }

  /// Selects only [fields]. Wrapped rows retain this projection set and throw
  /// [ValidationException] when an unselected descriptor is read.
  TypedQuery<S> select(List<FieldDef<S, Object?>> fields) {
    for (final field in fields) {
      _checkOwner(field.owner, field.name);
    }
    final names = <String>{for (final field in fields) field.name};
    _projected = names;
    _surface.select(names.toList(growable: false));
    return this;
  }

  /// Restricts the maximum number of rows returned.
  TypedQuery<S> limit(int n) {
    _surface.pageOptions(limit: n);
    return this;
  }

  /// Explicitly opts out of a result limit.
  TypedQuery<S> all() {
    _surface.pageOptions(all: true);
    return this;
  }

  /// Includes archived rows.
  TypedQuery<S> includeArchived() {
    _surface.pageOptions(includeArchived: true);
    return this;
  }

  /// Includes rows hidden by synchronization visibility state.
  TypedQuery<S> includeHidden() {
    _surface.pageOptions(includeHidden: true);
    return this;
  }

  /// Executes the query and wraps the engine page without changing cursor
  /// or `hasMore` semantics.
  Future<TypedPage<S>> fetch() async => _wrapPage(await _surface.fetch());

  /// Executes the same query shape after the opaque [cursor].
  Future<TypedPage<S>> keysetAfter(String cursor) async =>
      _wrapPage(await _surface.keysetAfter(cursor));

  /// Counts matching records.
  Future<int> count() => _surface.count();

  /// Counts distinct values of [field].
  Future<int> countDistinct<V>(FieldDef<S, V> field) {
    _checkOwner(field.owner, field.name);
    return _surface.countDistinct(field.name);
  }

  /// Returns distinct values decoded through [field].
  Future<List<V>> distinct<V>(FieldDef<S, V> field) async {
    _checkOwner(field.owner, field.name);
    return <V>[
      for (final raw in await _surface.distinct(field.name))
        _decodeDistinct(field, raw),
    ];
  }

  /// Returns matching record ids. The engine still requires `.limit()` or
  /// `.all()`.
  Future<List<String>> ids() => _surface.ids();

  /// Returns the delegated query plan explanation.
  Future<String> explain() => _surface.explain();

  /// Returns the sum of numeric [field].
  Future<num?> sum(NumericFieldDef<S> field) => _aggregate('sum', field);

  /// Returns the minimum of numeric [field].
  Future<num?> min(NumericFieldDef<S> field) => _aggregate('min', field);

  /// Returns the maximum of numeric [field].
  Future<num?> max(NumericFieldDef<S> field) => _aggregate('max', field);

  /// Returns the average of numeric [field].
  Future<num?> avg(NumericFieldDef<S> field) => _aggregate('avg', field);

  /// Exposes the engine compiler verbatim for typed/raw SQL+args parity.
  (String, List<Object?>) debugCompile() => _surface.debugCompile();

  /// Watches this query and wraps each raw result row. The underlying
  /// `QueryWatcher` remains the sole invalidation/coalescing mechanism.
  Stream<List<TypedRow<S>>> watch() => _surface.watch().map(
        (rows) => <TypedRow<S>>[
          for (final row in rows) TypedRow<S>(def, row, projected: _projected),
        ],
      );

  Future<num?> _aggregate(String fn, NumericFieldDef<S> field) {
    _checkOwner(field.owner, field.name);
    return _surface.aggregate(fn, field.name);
  }

  V _decodeDistinct<V>(FieldDef<S, V> field, Object? raw) {
    try {
      return field.decode(raw);
    } on ValidationException {
      rethrow;
    } catch (error) {
      throw ValidationException(
        'Distinct value for field "${field.name}" could not be decoded: '
        '$error',
        field: field.name,
      );
    }
  }

  TypedPage<S> _wrapPage(Page page) => TypedPage<S>(
        items: <TypedRow<S>>[
          for (final row in page.items)
            TypedRow<S>(def, row, projected: _projected),
        ],
        nextCursor: page.nextCursor,
        hasMore: page.hasMore,
      );

  void _checkOwner(Object? owner, String field) {
    if (!identical(owner, def)) {
      throw TypedStoreMismatchError('Field "$field" belongs to store '
          '${owner.runtimeType}, but this query targets $S. Cross-store '
          'queries are compile errors; a cast has defeated the type system.');
    }
  }
}

/// The second half of curried universal `where`: [V] was inferred from the
/// descriptor alone before this call's named values are type-checked.
final class TypedWhere<S extends StoreDef<S>, V> {
  TypedWhere._(this._query, this._field);

  final TypedQuery<S> _query;
  final FieldDef<S, V> _field;

  /// Adds equality-family predicates and returns the original query for
  /// fluent chaining. `eq: null` remains the raw engine's no-op; use
  /// `isNull: true` for SQL `IS NULL`.
  TypedQuery<S> call({
    V? eq,
    V? neq,
    List<V>? inValues,
    (V, V)? between,
    bool? isNull,
    bool? isNotNull,
  }) {
    _query._surface.where(
      _field.name,
      eq: eq == null ? null : _field.encode(eq as V),
      neq: neq == null ? null : _field.encode(neq as V),
      inValues: inValues == null
          ? null
          : <Object?>[for (final value in inValues) _field.encode(value)],
      between: between == null
          ? null
          : (_field.encode(between.$1), _field.encode(between.$2)),
      isNull: isNull,
      isNotNull: isNotNull,
    );
    return _query;
  }
}

final class _NativeTypedQuerySurface implements TypedQuerySurface {
  _NativeTypedQuerySurface(this._builder);

  QueryBuilder _builder;

  @override
  void where(
    String field, {
    Object? eq,
    Object? neq,
    List<Object?>? inValues,
    (Object?, Object?)? between,
    bool? isNull,
    bool? isNotNull,
  }) {
    _builder = _builder.where(
      field,
      eq: eq,
      neq: neq,
      inValues: inValues,
      between: between,
      isNull: isNull,
      isNotNull: isNotNull,
    );
  }

  @override
  void whereRange(
    String field, {
    Object? gt,
    Object? gte,
    Object? lt,
    Object? lte,
    String? startsWith,
    String? endsWith,
    String? contains,
  }) {
    _builder = _builder.where(
      field,
      gt: gt,
      gte: gte,
      lt: lt,
      lte: lte,
      startsWith: startsWith,
      endsWith: endsWith,
      contains: contains,
    );
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
  void pageOptions({
    int? limit,
    bool all = false,
    bool? includeArchived,
    bool? includeHidden,
  }) {
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
