part of 'contract.dart';

/// {@template localpocket.result}
/// Base of every named runtime result.
/// {@endtemplate}
sealed class Result {
  /// {@macro localpocket.result}
  const Result();

  /// Stable wire tag, independent of Dart class names or minification.
  String get tag;

  /// Serializes the result into its wire map (the envelope carries the tag).
  Map<String, Object?> toJson();
}

/// {@template localpocket.ok_result}
/// A generic success acknowledgement.
/// {@endtemplate}
final class OkResult extends Result {
  /// {@macro localpocket.ok_result}
  const OkResult();

  /// Stable wire tag for this result type.
  static const String tagValue = 'ok';
  @override
  String get tag => tagValue;
  @override
  Map<String, Object?> toJson() => const {};
}

/// Capability snapshot from the ACTIVE runtime — authoritative, never guessed.
///
/// {@template localpocket.capabilities_result}
/// {@endtemplate}
final class CapabilitiesResult extends Result {
  /// {@macro localpocket.capabilities_result}
  const CapabilitiesResult({
    required this.sqliteVersion,
    required this.hasStrict,
    required this.walSupported,
    required this.hasFts5,
    required this.isWeb,
    this.storage = 'file',
    this.durable = true,
    this.journal = 'unknown',
  });

  /// Stable wire tag for this result type.
  static const String tagValue = 'capabilities';
  @override
  String get tag => tagValue;

  /// The SQLite library version the runtime runs on.
  final String sqliteVersion;

  /// Whether STRICT tables are supported.
  final bool hasStrict;

  /// Whether WAL journaling is supported.
  final bool walSupported;

  /// Whether FTS5 full-text search is available.
  final bool hasFts5;

  /// Whether the runtime runs in a web browser.
  final bool isWeb;

  /// Where the runtime keeps the database ('opfs' on web, 'file' native).
  final String storage;

  /// Whether attachment bytes survive a restart (`false` = volatile store).
  final bool durable;

  /// The live journal mode reported by the engine.
  final String journal;

  @override
  Map<String, Object?> toJson() => {
        'sqliteVersion': sqliteVersion,
        'hasStrict': hasStrict,
        'walSupported': walSupported,
        'hasFts5': hasFts5,
        'isWeb': isWeb,
        'storage': storage,
        'durable': durable,
        'journal': journal,
      };
}

/// Liveness and engine identity.
///
/// {@template localpocket.health_result}
/// {@endtemplate}
final class HealthResult extends Result {
  /// {@macro localpocket.health_result}
  const HealthResult({required this.ok, required this.sqliteVersion});

  /// Stable wire tag for this result type.
  static const String tagValue = 'health';
  @override
  String get tag => tagValue;

  /// Whether the runtime is healthy.
  final bool ok;

  /// The SQLite library version the runtime runs on.
  final String sqliteVersion;

  @override
  Map<String, Object?> toJson() => {'ok': ok, 'sqliteVersion': sqliteVersion};
}

/// One decoded record, or a miss.
///
/// {@template localpocket.row_result}
/// {@endtemplate}
final class RowResult extends Result {
  /// {@macro localpocket.row_result}
  const RowResult(this.row);

  /// Stable wire tag for this result type.
  static const String tagValue = 'row';
  @override
  String get tag => tagValue;

  /// Null when the record does not exist.
  final Map<String, Object?>? row;

  @override
  Map<String, Object?> toJson() => {'row': row};
}

/// One decoded record per requested id, in request order (duplicates kept).
///
/// {@template localpocket.rows_result}
/// {@endtemplate}
final class RowsResult extends Result {
  /// {@macro localpocket.rows_result}
  const RowsResult(this.rows);

  /// Stable wire tag for this result type.
  static const String tagValue = 'rows';
  @override
  String get tag => tagValue;

  /// One entry per requested id; null entries mark absent records.
  final List<Map<String, Object?>?> rows;

  @override
  Map<String, Object?> toJson() => {'rows': rows};
}

/// Acknowledgement of a mutation, with the ids it is known to have affected.
///
/// {@template localpocket.mutation_result}
/// {@endtemplate}
final class MutationResult extends Result {
  /// {@macro localpocket.mutation_result}
  const MutationResult({this.ids = const []});

  /// Stable wire tag for this result type.
  static const String tagValue = 'mutation';
  @override
  String get tag => tagValue;

  /// Ids the mutation is known to have affected.
  final List<String> ids;

  @override
  Map<String, Object?> toJson() => {'ids': ids};
}

/// A complete page: kernel-shaped rows plus every pagination fact.
///
/// {@template localpocket.query_rows_result}
/// {@endtemplate}
final class QueryRowsResult extends Result {
  /// {@macro localpocket.query_rows_result}
  const QueryRowsResult({
    required this.items,
    required this.hasNext,
    required this.hasPrev,
    required this.nextCursor,
    required this.prevCursor,
  });

  /// Stable wire tag for this result type.
  static const String tagValue = 'queryRows';
  @override
  String get tag => tagValue;

  /// The rows of the page.
  final List<Map<String, Object?>> items;

  /// Whether another page follows in the forward direction.
  final bool hasNext;

  /// Whether another page precedes in the backward direction.
  final bool hasPrev;

  /// Opaque cursor for the next page, or null at the end.
  final String? nextCursor;

  /// Opaque cursor for the previous page, or null at the start.
  final String? prevCursor;

  @override
  Map<String, Object?> toJson() => {
        'items': items,
        'hasNext': hasNext,
        'hasPrev': hasPrev,
        if (nextCursor != null) 'nextCursor': nextCursor,
        if (prevCursor != null) 'prevCursor': prevCursor,
      };
}

/// {@template localpocket.count_result}
/// The number of records a read matches.
/// {@endtemplate}
final class CountResult extends Result {
  /// {@macro localpocket.count_result}
  const CountResult(this.value);

  /// Stable wire tag for this result type.
  static const String tagValue = 'count';
  @override
  String get tag => tagValue;

  /// The count.
  final int value;

  @override
  Map<String, Object?> toJson() => {'value': value};
}

/// {@template localpocket.distinct_result}
/// The distinct values of a field across the records a read matches.
/// {@endtemplate}
final class DistinctResult extends Result {
  /// {@macro localpocket.distinct_result}
  const DistinctResult(this.values);

  /// Stable wire tag for this result type.
  static const String tagValue = 'distinct';
  @override
  String get tag => tagValue;

  /// The distinct values, in encounter order.
  final List<Object?> values;

  @override
  Map<String, Object?> toJson() => {'values': values};
}

/// {@template localpocket.ids_result}
/// The record ids a read matches.
/// {@endtemplate}
final class IdsResult extends Result {
  /// {@macro localpocket.ids_result}
  const IdsResult(this.ids);

  /// Stable wire tag for this result type.
  static const String tagValue = 'ids';
  @override
  String get tag => tagValue;

  /// The matching record ids.
  final List<String> ids;

  @override
  Map<String, Object?> toJson() => {'ids': ids};
}

/// {@template localpocket.aggregate_result}
/// The value of one aggregate computation.
/// {@endtemplate}
final class AggregateResult extends Result {
  /// {@macro localpocket.aggregate_result}
  const AggregateResult(this.value);

  /// Stable wire tag for this result type.
  static const String tagValue = 'aggregate';
  @override
  String get tag => tagValue;

  /// Null when no rows matched.
  final num? value;

  @override
  Map<String, Object?> toJson() => {'value': value};
}

/// {@template localpocket.explain_result}
/// The compiled plan of a read.
/// {@endtemplate}
final class ExplainResult extends Result {
  /// {@macro localpocket.explain_result}
  const ExplainResult(this.plan);

  /// Stable wire tag for this result type.
  static const String tagValue = 'explain';
  @override
  String get tag => tagValue;

  /// The compiled plan description.
  final String plan;

  @override
  Map<String, Object?> toJson() => {'plan': plan};
}

/// {@template localpocket.search_hits_result}
/// The hits of an FTS search.
/// {@endtemplate}
final class SearchHitsResult extends Result {
  /// {@macro localpocket.search_hits_result}
  const SearchHitsResult(this.hits);

  /// Stable wire tag for this result type.
  static const String tagValue = 'searchHits';
  @override
  String get tag => tagValue;

  /// Hits, best match first.
  final List<SearchHitData> hits;

  @override
  Map<String, Object?> toJson() => {
        'hits': [for (final h in hits) h.toJson()]
      };
}

/// One ranked full-text match.
///
/// {@template localpocket.search_hit_data}
/// {@endtemplate}
final class SearchHitData {
  /// {@macro localpocket.search_hit_data}
  const SearchHitData({required this.id, required this.score});

  /// Record id of the match.
  final String id;

  /// Relevance score, higher is better.
  final double score;

  /// Serializes the hit into its wire map.
  Map<String, Object?> toJson() => {'id': id, 'score': score};

  /// Decodes a hit from its wire map; throws [WireException] when malformed.
  static SearchHitData fromJson(Object? raw) {
    if (raw is! Map) throw WireException('Malformed search hit.');
    final m = raw.map((k, v) => MapEntry(k.toString(), v));
    final id = m['id'];
    final score = m['score'];
    if (id is! String || score is! num) {
      throw WireException('Malformed search hit.');
    }
    return SearchHitData(id: id, score: score.toDouble());
  }
}

/// The list of open conflicts, sorted by detection time (ascending).
///
/// {@template localpocket.conflicts_result}
/// {@endtemplate}
final class ConflictsResult extends Result {
  /// {@macro localpocket.conflicts_result}
  const ConflictsResult(this.conflicts);

  /// Stable wire tag for this result type.
  static const String tagValue = 'conflicts';
  @override
  String get tag => tagValue;

  /// The open conflicts.
  final List<ConflictData> conflicts;

  @override
  Map<String, Object?> toJson() => {
        'conflicts': [for (final c in conflicts) c.toJson()],
      };
}

/// The conflict for one record, or none.
///
/// {@template localpocket.conflict_result}
/// {@endtemplate}
final class ConflictResult extends Result {
  /// {@macro localpocket.conflict_result}
  const ConflictResult(this.conflict);

  /// Stable wire tag for this result type.
  static const String tagValue = 'conflict';
  @override
  String get tag => tagValue;

  /// The conflict, or null when none is open.
  final ConflictData? conflict;

  @override
  Map<String, Object?> toJson() => {
        'conflict': conflict?.toJson(),
      };
}

/// Handshake for an interactive transaction.
///
/// {@template localpocket.transaction_begin_result}
/// {@endtemplate}
final class TransactionBeginResult extends Result {
  /// {@macro localpocket.transaction_begin_result}
  const TransactionBeginResult({required this.session});

  /// Stable wire tag for this result type.
  static const String tagValue = 'txBegin';
  @override
  String get tag => tagValue;

  /// Session id to ride every command inside the transaction.
  final String session;

  @override
  Map<String, Object?> toJson() => {'session': session};
}

/// A live watch registration.
///
/// {@template localpocket.watch_started_result}
/// {@endtemplate}
final class WatchStartedResult extends Result {
  /// {@macro localpocket.watch_started_result}
  const WatchStartedResult({required this.subscription});

  /// Stable wire tag for this result type.
  static const String tagValue = 'watchStarted';
  @override
  String get tag => tagValue;

  /// Id of the new subscription (cancel it with a watchCancel request).
  final String subscription;

  @override
  Map<String, Object?> toJson() => {'subscription': subscription};
}

/// {@template localpocket.prune_outbox_result}
/// Outcome of an outbox prune.
/// {@endtemplate}
final class PruneOutboxResult extends Result {
  /// {@macro localpocket.prune_outbox_result}
  const PruneOutboxResult({required this.removed});

  /// Stable wire tag for this result type.
  static const String tagValue = 'pruneOutbox';
  @override
  String get tag => tagValue;

  /// Number of outbox ops removed.
  final int removed;

  @override
  Map<String, Object?> toJson() => {'removed': removed};
}

/// {@template localpocket.compact_result}
/// Outcome of a compaction pass.
/// {@endtemplate}
final class CompactResult extends Result {
  /// {@macro localpocket.compact_result}
  const CompactResult({required this.removed});

  /// Stable wire tag for this result type.
  static const String tagValue = 'compact';
  @override
  String get tag => tagValue;

  /// Number of archived records removed.
  final int removed;

  @override
  Map<String, Object?> toJson() => {'removed': removed};
}
