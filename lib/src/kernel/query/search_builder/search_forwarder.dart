import 'package:localpocket/src/kernel/query/search_builder/search_builder.dart';
import 'package:localpocket/src/kernel/query/search_builder/search_dsl.dart';

/// Mixin for delegating fluent search filter methods to [SearchBuilder].
mixin SearchForwarder<T extends Object> implements SearchFilterDsl<T> {
  /// The underlying compiler/core search builder.
  SearchBuilder get searchCore;

  @override
  T limit(int n) {
    searchCore.limit(n);
    return this as T;
  }

  @override
  T all() {
    searchCore.all();
    return this as T;
  }

  @override
  T includeArchived() {
    searchCore.includeArchived();
    return this as T;
  }

  @override
  T includeHidden() {
    searchCore.includeHidden();
    return this as T;
  }
}
