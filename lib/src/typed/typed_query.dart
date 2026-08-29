/// The typed page result: wrapped rows plus bidirectional keyset metadata
/// and `next()`/`prev()` continuations.
///
/// There is no query builder in the typed layer. Query construction lives
/// entirely in `TypedCollection`'s named-argument terminals (`query`,
/// `count`, `ids`, `watch`, ...) — each accepts the same condition trees
/// built beside the descriptors (`Cond` composed with `&`/`|`/`~`, plus
/// `OrderTerm`) and returns its result directly. Pagination never re-states
/// the shape: a page captures the slots it was fetched with, so `next()` and
/// `prev()` re-run them verbatim, and `query(after:)` resumes a persisted
/// cursor with the same loud shape validation.
library;

import 'store_def.dart';
import 'typed_row.dart';

/// Continuation seam: re-runs a captured query shape from [cursor]. Created
/// by `TypedCollection`; pages obtained outside a typed collection carry no
/// loader and their `next()`/`prev()` return null.
typedef TypedPageLoader<S extends StoreDef<S>> = Future<TypedPage<S>?>
    Function(String cursor, {required bool backward});

/// {@template localpocket.typed_page}
/// One page of typed rows returned by `TypedCollection.query`.
/// {@endtemplate}
final class TypedPage<S extends StoreDef<S>> {
  /// Internal: created by `TypedCollection`. Pass [loader] to enable
  /// [next] and [prev]; without one the page is a plain data holder.
  ///
  /// {@macro localpocket.typed_page}
  TypedPage.internal({
    required this.items,
    required this.hasNext,
    required this.hasPrev,
    required this.nextCursor,
    required this.prevCursor,
    TypedPageLoader<S>? loader,
  }) : _loader = loader;

  /// Rows in this page, in the query's declared order.
  final List<TypedRow<S>> items;

  /// Whether the database observed a row after this window when the page was
  /// built. A snapshot fact, not a promise: rows can disappear before
  /// [next] runs, in which case [next] returns a terminal empty page.
  final bool hasNext;

  /// Whether the database observed a row before this window. Exact for pages
  /// fetched with [prev]; for forward continuations it is a mint-time fact
  /// (the consumed cursor's anchor row existed when that cursor was minted).
  final bool hasPrev;

  /// Opaque keyset cursor continuing after this window, or `null` on the
  /// last page. Persist it and resume later with `query(after: ...)`.
  final String? nextCursor;

  /// Opaque keyset cursor continuing before this window, or `null` when
  /// nothing was observed before it (the first page).
  final String? prevCursor;

  final TypedPageLoader<S>? _loader;

  /// Fetches the next page with the exact query shape this page was fetched
  /// with — no slots to re-state, so a shape mismatch cannot happen by
  /// construction. Returns `null` when [hasNext] is false; returns a
  /// terminal empty page when the observed rows vanished in between.
  Future<TypedPage<S>?> next() => _walk(backward: false);

  /// Fetches the page immediately before this one with the same captured
  /// query shape. Returns `null` when [hasPrev] is false.
  Future<TypedPage<S>?> prev() => _walk(backward: true);

  Future<TypedPage<S>?> _walk({required bool backward}) {
    final loader = _loader;
    final cursor = backward ? prevCursor : nextCursor;
    final has = backward ? hasPrev : hasNext;
    if (loader == null || cursor == null || !has) return Future.value(null);
    return loader(cursor, backward: backward);
  }
}
