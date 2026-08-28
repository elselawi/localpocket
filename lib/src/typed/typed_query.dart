/// The typed page result: wrapped rows plus keyset-cursor metadata.
///
/// There is no query builder in the typed layer. Query construction lives
/// entirely in `TypedCollection`'s named-argument terminals (`query`,
/// `queryAfter`, `count`, `ids`, `watch`, ...) — each accepts the same
/// condition values built beside the descriptors (`Cond`/`EqCond`/
/// `OrderTerm`) and returns its result directly.
library;

import 'store_def.dart';
import 'typed_row.dart';

/// {@template localpocket.typed_page}
/// One page of typed rows returned by `TypedCollection.query` and
/// `TypedCollection.queryAfter`.
/// {@endtemplate}
final class TypedPage<S extends StoreDef<S>> {
  /// Creates a typed page from wrapped [items] and the database's opaque page
  /// metadata.
  ///
  /// {@macro localpocket.typed_page}
  const TypedPage({
    required this.items,
    required this.nextCursor,
    required this.hasMore,
  });

  /// Rows in this page.
  final List<TypedRow<S>> items;

  /// Opaque keyset cursor for the next page, or `null` at the end.
  final String? nextCursor;

  /// Whether the database observed another row after this page.
  final bool hasMore;
}
