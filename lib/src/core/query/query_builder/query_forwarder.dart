import 'package:localpocket/src/core/query/query_builder/query_builder.dart';
import 'package:localpocket/src/core/query/query_builder/query_dsl.dart';

/// Mixin for delegating fluent query filter methods to an underlying [QueryBuilder].
mixin QueryForwarder<T extends Object> implements QueryFilterDsl<T> {
  /// The underlying compiler/core query builder.
  QueryBuilder get queryCore;

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
    queryCore.where(
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
    queryCore.orWhere(groups);
    return this as T;
  }

  @override
  T orderBy(String field, {bool desc = false}) {
    queryCore.orderBy(field, desc: desc);
    return this as T;
  }

  @override
  T limit(int n) {
    queryCore.limit(n);
    return this as T;
  }

  @override
  T all() {
    queryCore.all();
    return this as T;
  }

  @override
  T select(List<String> fields) {
    queryCore.select(fields);
    return this as T;
  }

  @override
  T includeArchived() {
    queryCore.includeArchived();
    return this as T;
  }

  @override
  T includeHidden() {
    queryCore.includeHidden();
    return this as T;
  }
}
