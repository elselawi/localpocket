part of 'contract.dart';

/// Base of every named runtime result.
sealed class Result {
  const Result();

  /// Stable wire tag, independent of Dart class names or minification.
  String get tag;

  Map<String, Object?> toJson();
}

/// A generic success acknowledgement.
final class OkResult extends Result {
  const OkResult();

  static const String tagValue = 'ok';
  @override
  String get tag => tagValue;
  @override
  Map<String, Object?> toJson() => const {};
}

/// The capability snapshot reported by the ACTIVE runtime — authoritative,
/// never guessed by the caller side.
final class CapabilitiesResult extends Result {
  const CapabilitiesResult({
    required this.sqliteVersion,
    required this.hasStrict,
    required this.walSupported,
    required this.hasFts5,
    required this.isWeb,
  });

  static const String tagValue = 'capabilities';
  @override
  String get tag => tagValue;

  final String sqliteVersion;
  final bool hasStrict;
  final bool walSupported;
  final bool hasFts5;
  final bool isWeb;

  @override
  Map<String, Object?> toJson() => {
        'sqliteVersion': sqliteVersion,
        'hasStrict': hasStrict,
        'walSupported': walSupported,
        'hasFts5': hasFts5,
        'isWeb': isWeb,
      };
}

/// Liveness and engine identity.
final class HealthResult extends Result {
  const HealthResult({required this.ok, required this.sqliteVersion});

  static const String tagValue = 'health';
  @override
  String get tag => tagValue;

  final bool ok;
  final String sqliteVersion;

  @override
  Map<String, Object?> toJson() => {'ok': ok, 'sqliteVersion': sqliteVersion};
}

/// One decoded record, or a miss.
final class RowResult extends Result {
  const RowResult(this.row);
  static const String tagValue = 'row';
  @override
  String get tag => tagValue;

  /// Null when the record does not exist.
  final Map<String, Object?>? row;

  @override
  Map<String, Object?> toJson() => {'row': row};
}

/// One decoded record per requested id, in request order (duplicates kept).
final class RowsResult extends Result {
  const RowsResult(this.rows);
  static const String tagValue = 'rows';
  @override
  String get tag => tagValue;

  final List<Map<String, Object?>?> rows;

  @override
  Map<String, Object?> toJson() => {'rows': rows};
}

/// Acknowledgement of a mutation, with the ids it is known to have affected.
final class MutationResult extends Result {
  const MutationResult({this.ids = const []});
  static const String tagValue = 'mutation';
  @override
  String get tag => tagValue;

  final List<String> ids;

  @override
  Map<String, Object?> toJson() => {'ids': ids};
}

/// A complete page: kernel-shaped rows plus every pagination fact.
final class QueryRowsResult extends Result {
  const QueryRowsResult({
    required this.items,
    required this.hasNext,
    required this.hasPrev,
    required this.nextCursor,
    required this.prevCursor,
  });

  static const String tagValue = 'queryRows';
  @override
  String get tag => tagValue;

  final List<Map<String, Object?>> items;
  final bool hasNext;
  final bool hasPrev;
  final String? nextCursor;
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

final class CountResult extends Result {
  const CountResult(this.value);
  static const String tagValue = 'count';
  @override
  String get tag => tagValue;

  final int value;

  @override
  Map<String, Object?> toJson() => {'value': value};
}

final class DistinctResult extends Result {
  const DistinctResult(this.values);
  static const String tagValue = 'distinct';
  @override
  String get tag => tagValue;

  final List<Object?> values;

  @override
  Map<String, Object?> toJson() => {'values': values};
}

final class IdsResult extends Result {
  const IdsResult(this.ids);
  static const String tagValue = 'ids';
  @override
  String get tag => tagValue;

  final List<String> ids;

  @override
  Map<String, Object?> toJson() => {'ids': ids};
}

final class AggregateResult extends Result {
  const AggregateResult(this.value);
  static const String tagValue = 'aggregate';
  @override
  String get tag => tagValue;

  /// Null when no rows matched.
  final num? value;

  @override
  Map<String, Object?> toJson() => {'value': value};
}

final class ExplainResult extends Result {
  const ExplainResult(this.plan);
  static const String tagValue = 'explain';
  @override
  String get tag => tagValue;

  final String plan;

  @override
  Map<String, Object?> toJson() => {'plan': plan};
}

final class SearchHitsResult extends Result {
  const SearchHitsResult(this.hits);
  static const String tagValue = 'searchHits';
  @override
  String get tag => tagValue;

  final List<SearchHitData> hits;

  @override
  Map<String, Object?> toJson() => {
        'hits': [for (final h in hits) h.toJson()]
      };
}

/// One ranked full-text match.
final class SearchHitData {
  const SearchHitData({required this.id, required this.score});
  final String id;
  final double score;

  Map<String, Object?> toJson() => {'id': id, 'score': score};

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
final class ConflictsResult extends Result {
  const ConflictsResult(this.conflicts);
  static const String tagValue = 'conflicts';
  @override
  String get tag => tagValue;

  final List<ConflictData> conflicts;

  @override
  Map<String, Object?> toJson() => {
        'conflicts': [for (final c in conflicts) c.toJson()],
      };
}

/// The conflict for one record, or none.
final class ConflictResult extends Result {
  const ConflictResult(this.conflict);
  static const String tagValue = 'conflict';
  @override
  String get tag => tagValue;

  final ConflictData? conflict;

  @override
  Map<String, Object?> toJson() => {
        'conflict': conflict?.toJson(),
      };
}

/// Handshake for an interactive transaction: the session id must ride every
/// subsequent command that participates in the transaction.
final class TransactionBeginResult extends Result {
  const TransactionBeginResult({required this.session});
  static const String tagValue = 'txBegin';
  @override
  String get tag => tagValue;

  final String session;

  @override
  Map<String, Object?> toJson() => {'session': session};
}

/// A live watch registration.
final class WatchStartedResult extends Result {
  const WatchStartedResult({required this.subscription});
  static const String tagValue = 'watchStarted';
  @override
  String get tag => tagValue;

  final String subscription;

  @override
  Map<String, Object?> toJson() => {'subscription': subscription};
}

final class PruneOutboxResult extends Result {
  const PruneOutboxResult({required this.removed});
  static const String tagValue = 'pruneOutbox';
  @override
  String get tag => tagValue;

  final int removed;

  @override
  Map<String, Object?> toJson() => {'removed': removed};
}

final class CompactResult extends Result {
  const CompactResult({required this.removed});
  static const String tagValue = 'compact';
  @override
  String get tag => tagValue;

  final int removed;

  @override
  Map<String, Object?> toJson() => {'removed': removed};
}
