import 'package:localpocket/src/core/query/query_builder/predicate_tree.dart';
import 'package:localpocket/src/core/query/query_builder/query_builder.dart';
import 'package:localpocket/src/core/query/query_builder/query_dsl.dart';

/// Mixin for delegating fluent query filter methods to an underlying [QueryBuilder].
mixin QueryForwarder<T extends Object> implements QueryFilterDsl<T> {
  /// The underlying compiler/core query builder.
  ///
  /// Settable because [QueryBuilder] is immutable — every DSL method returns a
  /// copy, so forwarding must reassign the core or the call would be a silent
  /// no-op.
  QueryBuilder get queryCore;
  set queryCore(QueryBuilder value);

  @override
  T where(
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
  }) {
    queryCore = queryCore.where(
      field,
      eq: eq,
      neq: neq,
      gt: gt,
      gte: gte,
      lt: lt,
      lte: lte,
      inValues: inValues,
      between: between,
      startsWith: startsWith,
      endsWith: endsWith,
      contains: contains,
      isNull: isNull,
      isNotNull: isNotNull,
    );
    return this as T;
  }

  @override
  T orWhere(List<Map<String, Object?>> groups) {
    queryCore = queryCore.orWhere(groups);
    return this as T;
  }

  @override
  T wherePredicate(PredicateNode node) {
    queryCore = queryCore.wherePredicate(node);
    return this as T;
  }

  @override
  T orderBy(String field, {bool desc = false}) {
    queryCore = queryCore.orderBy(field, desc: desc);
    return this as T;
  }

  @override
  T limit(int n) {
    queryCore = queryCore.limit(n);
    return this as T;
  }

  @override
  T all() {
    queryCore = queryCore.all();
    return this as T;
  }

  @override
  T select(List<String> fields) {
    queryCore = queryCore.select(fields);
    return this as T;
  }

  @override
  T includeArchived() {
    queryCore = queryCore.includeArchived();
    return this as T;
  }

  @override
  T includeHidden() {
    queryCore = queryCore.includeHidden();
    return this as T;
  }
}
