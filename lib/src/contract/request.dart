part of 'contract.dart';

/// Base of every runtime command. [R] is the exact result family the request
/// produces; runtimes verify the correlation so a valid result for the wrong
/// operation can never be accepted.
sealed class Request<R extends Result> {
  const Request();

  /// Stable wire tag, independent of Dart class names or minification.
  String get tag;

  /// The result tag this request must be answered with.
  String get resultTag;

  Map<String, Object?> toJson();
}

// ---------------------------------------------------------------------------
// lifecycle
// ---------------------------------------------------------------------------

/// Registers additional stores on an open runtime. Each store travels as its
/// serialized definition; the matching manifest fingerprints let the runtime
/// verify that both sides compiled the same schema before anything is used.
final class OpenRequest extends Request<OkResult> {
  const OpenRequest({required this.stores, required this.manifestFingerprints});

  final List<Map<String, Object?>> stores;
  final Map<String, String> manifestFingerprints;

  @override
  String get tag => 'open';
  @override
  String get resultTag => OkResult.tagValue;

  @override
  Map<String, Object?> toJson() => {
        'stores': stores,
        'manifestFingerprints': manifestFingerprints,
      };
}

final class CapabilitiesRequest extends Request<CapabilitiesResult> {
  const CapabilitiesRequest();

  @override
  String get tag => 'capabilities';
  @override
  String get resultTag => CapabilitiesResult.tagValue;
  @override
  Map<String, Object?> toJson() => const {};
}

final class HealthRequest extends Request<HealthResult> {
  const HealthRequest();

  @override
  String get tag => 'health';
  @override
  String get resultTag => HealthResult.tagValue;
  @override
  Map<String, Object?> toJson() => const {};
}

final class CloseRequest extends Request<OkResult> {
  const CloseRequest();

  @override
  String get tag => 'close';
  @override
  String get resultTag => OkResult.tagValue;
  @override
  Map<String, Object?> toJson() => const {};
}

// ---------------------------------------------------------------------------
// store reads
// ---------------------------------------------------------------------------

final class GetRequest extends Request<RowResult> {
  const GetRequest({required this.store, required this.id, this.session});

  final String store;
  final String id;

  /// Interactive transaction session this request executes in, if any.
  final String? session;

  @override
  String get tag => 'get';
  @override
  String get resultTag => RowResult.tagValue;

  @override
  Map<String, Object?> toJson() => {
        'store': store,
        'id': id,
        if (session != null) 'session': session,
      };
}

final class RowsRequest extends Request<RowsResult> {
  const RowsRequest({required this.store, required this.ids, this.session});

  final String store;
  final List<String> ids;
  final String? session;

  @override
  String get tag => 'rows';
  @override
  String get resultTag => RowsResult.tagValue;

  @override
  Map<String, Object?> toJson() => {
        'store': store,
        'ids': ids,
        if (session != null) 'session': session,
      };
}

// ---------------------------------------------------------------------------
// store writes
// ---------------------------------------------------------------------------

final class MutateRequest extends Request<MutationResult> {
  const MutateRequest(
      {required this.store, required this.mutation, this.session});

  final String store;
  final Mutation mutation;
  final String? session;

  @override
  String get tag => 'mutate';
  @override
  String get resultTag => MutationResult.tagValue;

  @override
  Map<String, Object?> toJson() => {
        'store': store,
        'mutation': _encodeMutation(mutation),
        if (session != null) 'session': session,
      };
}

// ---------------------------------------------------------------------------
// queries and search
// ---------------------------------------------------------------------------

final class QueryRequest extends Request<QueryRowsResult> {
  const QueryRequest({required this.store, required this.spec, this.session});

  final String store;
  final QuerySpecData spec;
  final String? session;

  @override
  String get tag => 'query';
  @override
  String get resultTag => QueryRowsResult.tagValue;

  @override
  Map<String, Object?> toJson() => {
        'store': store,
        'spec': spec.toJson(),
        if (session != null) 'session': session,
      };
}

final class CountRequest extends Request<CountResult> {
  const CountRequest({required this.store, required this.spec, this.session});

  final String store;
  final QuerySpecData spec;
  final String? session;

  @override
  String get tag => 'count';
  @override
  String get resultTag => CountResult.tagValue;

  @override
  Map<String, Object?> toJson() => {
        'store': store,
        'spec': spec.toJson(),
        if (session != null) 'session': session,
      };
}

final class CountDistinctRequest extends Request<CountResult> {
  const CountDistinctRequest({
    required this.store,
    required this.field,
    required this.spec,
    this.session,
  });

  final String store;
  final String field;
  final QuerySpecData spec;
  final String? session;

  @override
  String get tag => 'countDistinct';
  @override
  String get resultTag => CountResult.tagValue;

  @override
  Map<String, Object?> toJson() => {
        'store': store,
        'field': field,
        'spec': spec.toJson(),
        if (session != null) 'session': session,
      };
}

final class DistinctRequest extends Request<DistinctResult> {
  const DistinctRequest({
    required this.store,
    required this.field,
    this.limit,
    this.session,
  });

  final String store;
  final String field;

  /// Cap on the number of distinct values returned; `null` lets the kernel
  /// apply its default cap for unbounded distinct scans.
  final int? limit;
  final String? session;

  @override
  String get tag => 'distinct';
  @override
  String get resultTag => DistinctResult.tagValue;

  @override
  Map<String, Object?> toJson() => {
        'store': store,
        'field': field,
        if (limit != null) 'limit': limit,
        if (session != null) 'session': session,
      };
}

final class IdsRequest extends Request<IdsResult> {
  const IdsRequest({required this.store, required this.spec, this.session});

  final String store;
  final QuerySpecData spec;
  final String? session;

  @override
  String get tag => 'ids';
  @override
  String get resultTag => IdsResult.tagValue;

  @override
  Map<String, Object?> toJson() => {
        'store': store,
        'spec': spec.toJson(),
        if (session != null) 'session': session,
      };
}

final class AggregateRequest extends Request<AggregateResult> {
  const AggregateRequest({
    required this.store,
    required this.fn,
    required this.field,
    required this.spec,
    this.session,
  });

  final String store;
  final AggregateFn fn;
  final String field;
  final QuerySpecData spec;
  final String? session;

  @override
  String get tag => 'aggregate';
  @override
  String get resultTag => AggregateResult.tagValue;

  @override
  Map<String, Object?> toJson() => {
        'store': store,
        'fn': fn.name,
        'field': field,
        'spec': spec.toJson(),
        if (session != null) 'session': session,
      };
}

final class ExplainRequest extends Request<ExplainResult> {
  const ExplainRequest({required this.store, required this.spec, this.session});

  final String store;
  final QuerySpecData spec;
  final String? session;

  @override
  String get tag => 'explain';
  @override
  String get resultTag => ExplainResult.tagValue;

  @override
  Map<String, Object?> toJson() => {
        'store': store,
        'spec': spec.toJson(),
        if (session != null) 'session': session,
      };
}

final class SearchRequest extends Request<SearchHitsResult> {
  const SearchRequest({required this.store, required this.spec, this.session});

  final String store;
  final SearchSpecData spec;
  final String? session;

  @override
  String get tag => 'search';
  @override
  String get resultTag => SearchHitsResult.tagValue;

  @override
  Map<String, Object?> toJson() => {
        'store': store,
        'spec': spec.toJson(),
        if (session != null) 'session': session,
      };
}

// ---------------------------------------------------------------------------
// interactive transactions
// ---------------------------------------------------------------------------

/// Commit durability for an interactive transaction: [normal] relies on the
/// WAL default (app-crash-safe, cheap commits), [full] forces an fsync per
/// commit (power-loss-safe, slower).
enum TransactionDurability { normal, full }

final class TransactionBeginRequest extends Request<TransactionBeginResult> {
  const TransactionBeginRequest({
    required this.readOnly,
    this.durability = TransactionDurability.normal,
  });

  final bool readOnly;
  final TransactionDurability durability;

  @override
  String get tag => 'txBegin';
  @override
  String get resultTag => TransactionBeginResult.tagValue;

  @override
  Map<String, Object?> toJson() => {
        'readOnly': readOnly,
        'durability': durability.name,
      };
}

final class TransactionCommitRequest extends Request<OkResult> {
  const TransactionCommitRequest({required this.session});

  final String session;

  @override
  String get tag => 'txCommit';
  @override
  String get resultTag => OkResult.tagValue;

  @override
  Map<String, Object?> toJson() => {'session': session};
}

final class TransactionRollbackRequest extends Request<OkResult> {
  const TransactionRollbackRequest({required this.session});

  final String session;

  @override
  String get tag => 'txRollback';
  @override
  String get resultTag => OkResult.tagValue;

  @override
  Map<String, Object?> toJson() => {'session': session};
}

final class TransactionSavepointRequest extends Request<OkResult> {
  const TransactionSavepointRequest(
      {required this.session, required this.name});

  final String session;
  final String name;

  @override
  String get tag => 'txSavepoint';
  @override
  String get resultTag => OkResult.tagValue;

  @override
  Map<String, Object?> toJson() => {'session': session, 'name': name};
}

final class TransactionRollbackToRequest extends Request<OkResult> {
  const TransactionRollbackToRequest({
    required this.session,
    required this.name,
  });

  final String session;
  final String name;

  @override
  String get tag => 'txRollbackTo';
  @override
  String get resultTag => OkResult.tagValue;

  @override
  Map<String, Object?> toJson() => {'session': session, 'name': name};
}

final class TransactionReleaseRequest extends Request<OkResult> {
  const TransactionReleaseRequest({required this.session, required this.name});

  final String session;
  final String name;

  @override
  String get tag => 'txRelease';
  @override
  String get resultTag => OkResult.tagValue;

  @override
  Map<String, Object?> toJson() => {'session': session, 'name': name};
}

// ---------------------------------------------------------------------------
// watches
// ---------------------------------------------------------------------------

final class WatchRequest extends Request<WatchStartedResult> {
  const WatchRequest({required this.store, required this.spec});

  final String store;
  final QuerySpecData spec;

  @override
  String get tag => 'watch';
  @override
  String get resultTag => WatchStartedResult.tagValue;

  @override
  Map<String, Object?> toJson() => {'store': store, 'spec': spec.toJson()};
}

final class WatchCancelRequest extends Request<OkResult> {
  const WatchCancelRequest({required this.subscription});

  final String subscription;

  @override
  String get tag => 'watchCancel';
  @override
  String get resultTag => OkResult.tagValue;

  @override
  Map<String, Object?> toJson() => {'subscription': subscription};
}

// ---------------------------------------------------------------------------
// maintenance
// ---------------------------------------------------------------------------

final class AnalyzeRequest extends Request<OkResult> {
  const AnalyzeRequest({this.store});
  final String? store;

  @override
  String get tag => 'analyze';
  @override
  String get resultTag => OkResult.tagValue;

  @override
  Map<String, Object?> toJson() => {if (store != null) 'store': store};
}

final class WalCheckpointRequest extends Request<OkResult> {
  const WalCheckpointRequest();

  @override
  String get tag => 'walCheckpoint';
  @override
  String get resultTag => OkResult.tagValue;
  @override
  Map<String, Object?> toJson() => const {};
}

final class VacuumRequest extends Request<OkResult> {
  const VacuumRequest();

  @override
  String get tag => 'vacuum';
  @override
  String get resultTag => OkResult.tagValue;
  @override
  Map<String, Object?> toJson() => const {};
}

final class PruneOutboxRequest extends Request<PruneOutboxResult> {
  const PruneOutboxRequest();

  @override
  String get tag => 'pruneOutbox';
  @override
  String get resultTag => PruneOutboxResult.tagValue;
  @override
  Map<String, Object?> toJson() => const {};
}

final class CompactRequest extends Request<CompactResult> {
  const CompactRequest({required this.store, required this.olderThanMs});

  final String store;
  final int olderThanMs;

  @override
  String get tag => 'compact';
  @override
  String get resultTag => CompactResult.tagValue;

  @override
  Map<String, Object?> toJson() => {'store': store, 'olderThanMs': olderThanMs};
}
