/// Typed query surface seam: the delegated builder interface every concrete
/// adapter (the native collection, the web facade, a worker-bound session)
/// implements.
library;

import 'package:localpocket/src/core/store.dart';

/// The delegating query surface `TypedCollection`'s terminals forward to.
/// Each concrete adapter wraps one builder and mutates it in place; the
/// typed layer never re-implements execution, planning, or validation.
/// Implement it to adapt another backend (the package's web facade does).
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
  /// [field]. the database's validation runs unchanged.
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
  /// operators create these values and `TypedCollection`'s composer
  /// forwards them.
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
