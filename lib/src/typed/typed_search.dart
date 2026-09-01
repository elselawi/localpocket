/// Typed full-text search results.
///
/// Search compilation and execution stay with the database. The typed layer
/// wraps the hit metadata and provides an explicit `fetch()` point read on
/// each hit. The single entry point is `TypedCollection.search(term,
/// limit: ..., ...)` — there is no search builder in the typed layer.
library;

import 'package:localpocket/src/kernel/query/search_builder/search_builder.dart';
import 'package:localpocket/src/api/limits.dart';
import 'package:localpocket/src/schema/store_def.dart';
import 'package:localpocket/src/typed/typed_row.dart';

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

/// A typed FTS hit: the database's id/score plus an explicit point-read.
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

/// Runs one typed FTS search through [surface] — the implementation behind
/// `TypedCollection.search`.
Future<List<TypedSearchHit<S>>> executeSearch<S extends StoreDef<S>>(
  TypedSearchSurface surface,
  Future<TypedRow<S>?> Function(String id) fetchOne, {
  required int limit,
  bool includeArchived = false,
  bool includeHidden = false,
}) async {
  // The unbounded sentinel expands to the no-LIMIT path here, so the raw
  // value never reaches the search builder or compiled SQL.
  if (limit == Limits.unbounded) {
    surface.all();
  } else {
    surface.limit(limit);
  }

  if (includeArchived) {
    surface.includeArchived();
  }
  if (includeHidden) {
    surface.includeHidden();
  }
  return <TypedSearchHit<S>>[
    for (final hit in await surface.fetch())
      TypedSearchHit<S>._(hit.id, hit.score, fetchOne),
  ];
}
