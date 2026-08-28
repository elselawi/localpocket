import 'package:localpocket/src/core/query/query_builder/predicate_tree.dart';

/// Common interface for fluent query construction across native and web query builders.
abstract interface class QueryFilterDsl<Self extends Object> {
  /// Adds one or more predicates for [field].
  Self where(
    String field, {
    Object? eq,
    Object? neq,
    Object? gt,
    Object? gte,
    Object? lt,
    Object? lte,
    List<Object?>? inValues,
    (Object?, Object?)? between,
    String? startsWith,
    String? endsWith,
    String? contains,
    bool? isNull,
    bool? isNotNull,
  });

  /// OR-group of equality predicates.
  Self orWhere(List<Map<String, Object?>> groups);

  /// Adds one predicate-tree clause (the typed layer's `&`/`|`/`~` algebra
  /// lowered to [PredicateNode] values). Compiles into one self-contained,
  /// fully parameterized WHERE fragment.
  Self wherePredicate(PredicateNode node);

  /// Adds an ordering term.
  Self orderBy(String field, {bool desc = false});

  /// Restricts the maximum number of records returned.
  Self limit(int n);

  /// Explicitly opts out of a limit.
  Self all();

  /// Selects only [fields] from each record.
  Self select(List<String> fields);

  /// Includes records marked as archived.
  Self includeArchived();

  /// Includes records hidden by synchronization visibility state.
  Self includeHidden();
}
