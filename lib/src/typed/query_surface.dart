/// Typed query surface seam: the delegated builder interface every concrete
/// adapter (native `Collection.query()`, the web facade builder, a worker-bound
/// session) implements so `TypedQuery` stays builder-free.
library;

import 'package:localpocket/localpocket.dart';

/// The delegating query surface `TypedQuery` forwards to. Each concrete
/// adapter wraps one builder flavor and mutates it in place.
///
/// The typed layer delegates to the engine; it never re-implements
/// execution, planning, or validation. It is public only because the web
/// facade implements it from another library.
abstract interface class TypedQuerySurface {
  /// Executes the query and returns one page of decoded logical rows.
  Future<Page> fetch({String? cursor});

  /// Executes the query after [cursor] (keyset pagination).
  Future<Page> keysetAfter(String cursor);

  /// Counts matching records.
  Future<int> count();

  /// Counts distinct values of [field].
  Future<int> countDistinct(String field);

  /// Returns the distinct values of [field].
  Future<List<Object?>> distinct(String field);

  /// Returns matching ids.
  Future<List<String>> ids();

  /// Returns SQLite's EXPLAIN QUERY PLAN output.
  Future<String> explain();

  /// Executes one numeric aggregate ([fn] is `sum`/`min`/`max`/`avg`) over
  /// [field]. The engine's validation runs unchanged.
  Future<num?> aggregate(String fn, String field);

  /// Applies equality operators for [field].
  void where(
    String field, {
    Object? eq,
    Object? neq,
    List<Object?>? inValues,
    (Object?, Object?)? between,
    bool? isNull,
    bool? isNotNull,
  });

  /// Applies range and text operators for [field]. Kind-scoped descriptor
  /// methods create these values and `TypedQuery.whereCond` forwards them.
  void whereRange(
    String field, {
    Object? gt,
    Object? gte,
    Object? lt,
    Object? lte,
    String? startsWith,
    String? endsWith,
    String? contains,
  });

  /// Applies an OR-equality group (field-name → wire value).
  void orWhere(List<Map<String, Object?>> groups);

  /// Applies an ordering term on [field].
  void orderBy(String field, {bool desc = false});

  /// Applies a projection of SQL column names.
  void select(List<String> fields);

  /// Applies pagination/scope flags (all optional — leave null to keep
  /// current settings).
  void pageOptions({
    int? limit,
    bool all = false,
    bool? includeArchived,
    bool? includeHidden,
  });

  /// Compiled SQL + args of the current builder — the parity oracle.
  (String, List<Object?>) debugCompile();

  /// Watches the raw query results.
  Stream<List<Map<String, Object?>>> watch();
}
