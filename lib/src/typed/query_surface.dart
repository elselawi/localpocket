/// Typed query surface seam: the delegated builder interface every concrete
/// adapter (the native collection, the web facade, a worker-bound session)
/// implements.
library;

import 'package:localpocket/src/kernel/query/query_builder/predicate_tree.dart';
import 'package:localpocket/src/kernel/store.dart';

/// The delegating query surface `TypedCollection`'s terminals forward to.
/// Each concrete adapter wraps one builder and mutates it in place; the
/// typed layer never re-implements execution, planning, or validation.
/// Implement it to adapt another backend (the package's web facade does).
abstract interface class TypedQuerySurface {
  /// Executes the query and returns one page of decoded logical rows.
  Future<Page> fetch({String? cursor});

  /// Executes the query after [cursor] (keyset pagination).
  Future<Page> keysetAfter(String cursor);

  /// Executes the query immediately before the window [cursor] was minted
  /// from (backward keyset pagination). Rows come back in the query's
  /// declared order.
  Future<Page> keysetBefore(String cursor);

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

  /// Adds one predicate-tree clause: a `Cond` tree (`&`/`|`/`~`) lowered to
  /// engine [PredicateNode] values. The builder validates every field and
  /// compiles the tree into one self-contained, fully parameterized WHERE
  /// fragment.
  void wherePredicate(PredicateNode node);

  /// Applies an ordering term on [field].
  void orderBy(String field, {bool desc = false});

  /// Applies a projection of SQL column names.
  void select(List<String> fields);

  /// Applies pagination/scope flags (all optional — leave null to keep
  /// current settings). A [Limits.unbounded] limit means "no page size":
  /// implementations must expand it to their no-LIMIT path instead of
  /// passing the raw value to the builder.
  void pageOptions({
    required int limit,
    bool? includeArchived,
    bool? includeHidden,
  });

  /// Compiled SQL + args of the current builder — the parity oracle.
  (String, List<Object?>) debugCompile();

  /// Watches the raw query results.
  Stream<List<Map<String, Object?>>> watch();
}
