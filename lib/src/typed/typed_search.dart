/// Typed full-text search results over the engine's `SearchBuilder`.
///
/// Search compilation and execution remain engine-owned. The typed layer
/// wraps `SearchResult` metadata and provides an explicit `fetch()` point read
/// on each hit.
library;

import 'package:localpocket/localpocket.dart';

import 'store_def.dart';
import 'typed_row.dart';

/// Delegating search surface implemented by native and web facade adapters.
abstract interface class TypedSearchSurface {
  /// Applies a result limit.
  void limit(int n);

  /// Explicitly opts out of a result limit.
  void all();

  /// Includes archived rows.
  void includeArchived();

  /// Includes sync-hidden rows.
  void includeHidden();

  /// Executes the FTS query.
  Future<List<SearchResult>> fetch();

  /// Compiled search SQL + args, exposed for parity tests.
  (String, List<Object?>) debugCompile();
}

/// A typed FTS hit: the engine's id/score plus an explicit point-read.
final class TypedSearchHit<S extends StoreDef<S>> {
  TypedSearchHit._(this.id, this.score, this._fetch);

  /// Matching record id.
  final String id;

  /// SQLite FTS ranking score.
  final double score;

  final Future<TypedRow<S>?> Function(String id) _fetch;

  /// Fetches the current record by [id], or `null` if it has since been
  /// purged.
  Future<TypedRow<S>?> fetch() => _fetch(id);
}

/// Typed delegating FTS builder for store [S].
final class TypedSearch<S extends StoreDef<S>> {
  /// Creates a typed search over [surface].
  TypedSearch(this._surface, this._fetchOne);

  final TypedSearchSurface _surface;
  final Future<TypedRow<S>?> Function(String id) _fetchOne;

  /// Limits ranked matches.
  TypedSearch<S> limit(int n) {
    _surface.limit(n);
    return this;
  }

  /// Returns all ranked matches.
  TypedSearch<S> all() {
    _surface.all();
    return this;
  }

  /// Includes archived matches.
  TypedSearch<S> includeArchived() {
    _surface.includeArchived();
    return this;
  }

  /// Includes sync-hidden matches.
  TypedSearch<S> includeHidden() {
    _surface.includeHidden();
    return this;
  }

  /// Executes the search and wraps each engine [SearchResult].
  Future<List<TypedSearchHit<S>>> fetch() async => <TypedSearchHit<S>>[
        for (final hit in await _surface.fetch())
          TypedSearchHit<S>._(hit.id, hit.score, _fetchOne),
      ];

  /// Exposes the engine search compiler verbatim for parity tests.
  (String, List<Object?>) debugCompile() => _surface.debugCompile();
}
