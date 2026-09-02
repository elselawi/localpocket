part of 'contract.dart';

/// Base of every runtime command. [R] is the result family it must be answered
/// with; runtimes verify the correlation so a result can't be mispaired.
sealed class Request<R extends Result> {
  const Request();

  /// Stable wire tag, independent of Dart class names or minification.
  String get tag;

  /// The result tag this request must be answered with.
  String get resultTag;

  /// Serializes the request into its wire map (the envelope carries the tag).
  Map<String, Object?> toJson();
}

// lifecycle

/// {@template localpocket.open_request}
/// Registers stores on an open runtime; matching manifest fingerprints verify
/// both sides compiled the same schema.
/// {@endtemplate}
final class OpenRequest extends Request<OkResult> {
  /// {@macro localpocket.open_request}
  const OpenRequest({required this.stores, required this.manifestFingerprints});

  /// The serialized store definitions to register.
  final List<Map<String, Object?>> stores;

  /// Store name → fingerprint; a mismatch is rejected.
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

/// {@template localpocket.capabilities_request}
/// Asks the runtime which capabilities it supports.
/// {@endtemplate}
final class CapabilitiesRequest extends Request<CapabilitiesResult> {
  /// {@macro localpocket.capabilities_request}
  const CapabilitiesRequest();

  @override
  String get tag => 'capabilities';
  @override
  String get resultTag => CapabilitiesResult.tagValue;
  @override
  Map<String, Object?> toJson() => const {};
}

/// {@template localpocket.health_request}
/// Liveness probe for the runtime; answered with an empty ok result.
/// {@endtemplate}
final class HealthRequest extends Request<HealthResult> {
  /// {@macro localpocket.health_request}
  const HealthRequest();

  @override
  String get tag => 'health';
  @override
  String get resultTag => HealthResult.tagValue;
  @override
  Map<String, Object?> toJson() => const {};
}

/// {@template localpocket.close_request}
/// Flushes and closes the runtime; the host must not send further requests
/// afterwards.
/// {@endtemplate}
final class CloseRequest extends Request<OkResult> {
  /// {@macro localpocket.close_request}
  const CloseRequest();

  @override
  String get tag => 'close';
  @override
  String get resultTag => OkResult.tagValue;
  @override
  Map<String, Object?> toJson() => const {};
}

// store reads

/// {@template localpocket.get_request}
/// Fetches one record from a store by id.
/// {@endtemplate}
final class GetRequest extends Request<RowResult> {
  /// {@macro localpocket.get_request}
  const GetRequest({required this.store, required this.id, this.session});

  /// Store to read from.
  final String store;

  /// Record id to fetch.
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

/// {@template localpocket.rows_request}
/// Fetches several records by id in one round trip.
/// {@endtemplate}
final class RowsRequest extends Request<RowsResult> {
  /// {@macro localpocket.rows_request}
  const RowsRequest({required this.store, required this.ids, this.session});

  /// Store to read from.
  final String store;

  /// Record ids to fetch (the result preserves this order).
  final List<String> ids;

  /// Interactive transaction session to execute in, if any.
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

// store writes

/// {@template localpocket.mutate_request}
/// Applies a single [Mutation] to a store.
/// {@endtemplate}
final class MutateRequest extends Request<MutationResult> {
  /// {@macro localpocket.mutate_request}
  const MutateRequest(
      {required this.store, required this.mutation, this.session});

  /// Store the mutation applies to.
  final String store;

  /// The mutation to apply.
  final Mutation mutation;

  /// Interactive transaction session to execute in, if any.
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

// queries and search

/// {@template localpocket.query_request}
/// Runs a structured read ([QuerySpecData]) and returns the matching rows.
/// {@endtemplate}
final class QueryRequest extends Request<QueryRowsResult> {
  /// {@macro localpocket.query_request}
  const QueryRequest({required this.store, required this.spec, this.session});

  /// Store to read from.
  final String store;

  /// The read spec defining the result set.
  final QuerySpecData spec;

  /// Interactive transaction session to execute in, if any.
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

/// {@template localpocket.count_request}
/// Counts the records a [QuerySpecData] read matches.
/// {@endtemplate}
final class CountRequest extends Request<CountResult> {
  /// {@macro localpocket.count_request}
  const CountRequest({required this.store, required this.spec, this.session});

  /// Store to read from.
  final String store;

  /// The read spec defining the counted result set.
  final QuerySpecData spec;

  /// Interactive transaction session to execute in, if any.
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

/// {@template localpocket.count_distinct_request}
/// Counts the distinct values of a field across the records a read matches.
/// {@endtemplate}
final class CountDistinctRequest extends Request<CountResult> {
  /// {@macro localpocket.count_distinct_request}
  const CountDistinctRequest({
    required this.store,
    required this.field,
    required this.spec,
    this.session,
  });

  /// Store to read from.
  final String store;

  /// Field whose distinct values are counted.
  final String field;

  /// The read spec scoping the count.
  final QuerySpecData spec;

  /// Interactive transaction session to execute in, if any.
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

/// {@template localpocket.distinct_request}
/// Lists the distinct values of a field across the records a read matches.
/// {@endtemplate}
final class DistinctRequest extends Request<DistinctResult> {
  /// {@macro localpocket.distinct_request}
  const DistinctRequest({
    required this.store,
    required this.field,
    this.spec = const QuerySpecData(),
    this.session,
  });

  /// Store to read from.
  final String store;

  /// Field whose distinct values are returned.
  final String field;

  /// The read spec scoping the distinct scan ([QuerySpecData.limit] caps the
  /// returned values; the kernel applies its default cap when unset).
  final QuerySpecData spec;

  /// Interactive transaction session to execute in, if any.
  final String? session;

  @override
  String get tag => 'distinct';
  @override
  String get resultTag => DistinctResult.tagValue;

  @override
  Map<String, Object?> toJson() => {
        'store': store,
        'field': field,
        'spec': spec.toJson(),
        if (session != null) 'session': session,
      };
}

/// {@template localpocket.ids_request}
/// Returns only the record ids a [QuerySpecData] read matches.
/// {@endtemplate}
final class IdsRequest extends Request<IdsResult> {
  /// {@macro localpocket.ids_request}
  const IdsRequest({required this.store, required this.spec, this.session});

  /// Store to read from.
  final String store;

  /// The read spec defining the result set.
  final QuerySpecData spec;

  /// Interactive transaction session to execute in, if any.
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

/// {@template localpocket.aggregate_request}
/// Computes one aggregate over a field across the records a read matches.
/// {@endtemplate}
final class AggregateRequest extends Request<AggregateResult> {
  /// {@macro localpocket.aggregate_request}
  const AggregateRequest({
    required this.store,
    required this.fn,
    required this.field,
    required this.spec,
    this.session,
  });

  /// Store to read from.
  final String store;

  /// Aggregate function to compute.
  final AggregateFn fn;

  /// Field the aggregate is computed over.
  final String field;

  /// The read spec scoping the aggregate.
  final QuerySpecData spec;

  /// Interactive transaction session to execute in, if any.
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

/// {@template localpocket.explain_request}
/// Returns the compiled plan for a [QuerySpecData] read without executing it.
/// {@endtemplate}
final class ExplainRequest extends Request<ExplainResult> {
  /// {@macro localpocket.explain_request}
  const ExplainRequest({required this.store, required this.spec, this.session});

  /// Store the plan targets.
  final String store;

  /// The read spec to compile.
  final QuerySpecData spec;

  /// Interactive transaction session to compile for, if any.
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

/// {@template localpocket.search_request}
/// Runs an FTS search ([SearchSpecData]) and returns scored hits.
/// {@endtemplate}
final class SearchRequest extends Request<SearchHitsResult> {
  /// {@macro localpocket.search_request}
  const SearchRequest({required this.store, required this.spec, this.session});

  /// Store to search.
  final String store;

  /// The search spec (terms, limit, ...).
  final SearchSpecData spec;

  /// Interactive transaction session to execute in, if any.
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

// interactive transactions

/// {@template localpocket.transaction_durability}
/// Commit durability for an interactive transaction.
/// {@endtemplate}
enum TransactionDurability {
  /// {@macro localpocket.transaction_durability}
  /// WAL default: app-crash-safe, cheap commits.
  normal,

  /// {@macro localpocket.transaction_durability}
  /// fsync per commit: power-loss-safe, slower.
  full,
}

/// {@template localpocket.transaction_begin_request}
/// Opens an interactive transaction; later requests carry the returned session
/// id until commit/rollback.
/// {@endtemplate}
final class TransactionBeginRequest extends Request<TransactionBeginResult> {
  /// {@macro localpocket.transaction_begin_request}
  const TransactionBeginRequest({
    required this.readOnly,
    this.durability = TransactionDurability.normal,
  });

  /// Whether the transaction only reads (writes are rejected inside it).
  final bool readOnly;

  /// Commit durability for the transaction.
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

/// {@template localpocket.transaction_commit_request}
/// Commits the interactive transaction identified by its session id.
/// {@endtemplate}
final class TransactionCommitRequest extends Request<OkResult> {
  /// {@macro localpocket.transaction_commit_request}
  const TransactionCommitRequest({required this.session});

  /// Transaction session id to commit.
  final String session;

  @override
  String get tag => 'txCommit';
  @override
  String get resultTag => OkResult.tagValue;

  @override
  Map<String, Object?> toJson() => {'session': session};
}

/// {@template localpocket.transaction_rollback_request}
/// Rolls back the interactive transaction identified by its session id.
/// {@endtemplate}
final class TransactionRollbackRequest extends Request<OkResult> {
  /// {@macro localpocket.transaction_rollback_request}
  const TransactionRollbackRequest({required this.session});

  /// Transaction session id to roll back.
  final String session;

  @override
  String get tag => 'txRollback';
  @override
  String get resultTag => OkResult.tagValue;

  @override
  Map<String, Object?> toJson() => {'session': session};
}

/// {@template localpocket.transaction_savepoint_request}
/// Creates a named savepoint inside an interactive transaction.
/// {@endtemplate}
final class TransactionSavepointRequest extends Request<OkResult> {
  /// {@macro localpocket.transaction_savepoint_request}
  const TransactionSavepointRequest(
      {required this.session, required this.name});

  /// Transaction session id to create the savepoint in.
  final String session;

  /// Name of the savepoint (unique inside the session).
  final String name;

  @override
  String get tag => 'txSavepoint';
  @override
  String get resultTag => OkResult.tagValue;

  @override
  Map<String, Object?> toJson() => {'session': session, 'name': name};
}

/// {@template localpocket.transaction_rollback_to_request}
/// Rolls back to a named savepoint, undoing every statement after it.
/// {@endtemplate}
final class TransactionRollbackToRequest extends Request<OkResult> {
  /// {@macro localpocket.transaction_rollback_to_request}
  const TransactionRollbackToRequest({
    required this.session,
    required this.name,
  });

  /// Transaction session id to roll back inside.
  final String session;

  /// Savepoint name to roll back to.
  final String name;

  @override
  String get tag => 'txRollbackTo';
  @override
  String get resultTag => OkResult.tagValue;

  @override
  Map<String, Object?> toJson() => {'session': session, 'name': name};
}

/// {@template localpocket.transaction_release_request}
/// Releases a named savepoint, folding its effects into the parent scope.
/// {@endtemplate}
final class TransactionReleaseRequest extends Request<OkResult> {
  /// {@macro localpocket.transaction_release_request}
  const TransactionReleaseRequest({required this.session, required this.name});

  /// Transaction session id holding the savepoint.
  final String session;

  /// Savepoint name to release.
  final String name;

  @override
  String get tag => 'txRelease';
  @override
  String get resultTag => OkResult.tagValue;

  @override
  Map<String, Object?> toJson() => {'session': session, 'name': name};
}

// watches

/// Watches one record; snapshots carry its current state (empty items =
/// absent).
///
/// {@template localpocket.watch_one_request}
/// {@endtemplate}
final class WatchOneRequest extends Request<WatchStartedResult> {
  /// {@macro localpocket.watch_one_request}
  const WatchOneRequest({required this.store, required this.id});

  /// Store the record lives in.
  final String store;

  /// Record id to watch.
  final String id;

  @override
  String get tag => 'watchOne';
  @override
  String get resultTag => WatchStartedResult.tagValue;

  @override
  Map<String, Object?> toJson() => {'store': store, 'id': id};
}

/// {@template localpocket.watch_request}
/// Watches a [QuerySpecData] read: snapshots carry the matching rows, initially
/// and on every commit that changes them.
/// {@endtemplate}
final class WatchRequest extends Request<WatchStartedResult> {
  /// {@macro localpocket.watch_request}
  const WatchRequest({required this.store, required this.spec});

  /// Store to watch.
  final String store;

  /// The read spec defining the watched result set.
  final QuerySpecData spec;

  @override
  String get tag => 'watch';
  @override
  String get resultTag => WatchStartedResult.tagValue;

  @override
  Map<String, Object?> toJson() => {'store': store, 'spec': spec.toJson()};
}

/// {@template localpocket.watch_cancel_request}
/// Cancels a subscription (a watch or a conflicts watch).
/// {@endtemplate}
final class WatchCancelRequest extends Request<OkResult> {
  /// {@macro localpocket.watch_cancel_request}
  const WatchCancelRequest({required this.subscription});

  /// Id of the subscription to cancel.
  final String subscription;

  @override
  String get tag => 'watchCancel';
  @override
  String get resultTag => OkResult.tagValue;

  @override
  Map<String, Object?> toJson() => {'subscription': subscription};
}

// maintenance

/// {@template localpocket.analyze_request}
/// Runs SQLite ANALYZE, optionally scoped to a single store.
/// {@endtemplate}
final class AnalyzeRequest extends Request<OkResult> {
  /// {@macro localpocket.analyze_request}
  const AnalyzeRequest({this.store});

  /// Store to analyze, or all stores when null.
  final String? store;

  @override
  String get tag => 'analyze';
  @override
  String get resultTag => OkResult.tagValue;

  @override
  Map<String, Object?> toJson() => {if (store != null) 'store': store};
}

/// {@template localpocket.wal_checkpoint_request}
/// Runs a WAL checkpoint on the runtime database.
/// {@endtemplate}
final class WalCheckpointRequest extends Request<OkResult> {
  /// {@macro localpocket.wal_checkpoint_request}
  const WalCheckpointRequest();

  @override
  String get tag => 'walCheckpoint';
  @override
  String get resultTag => OkResult.tagValue;
  @override
  Map<String, Object?> toJson() => const {};
}

/// {@template localpocket.vacuum_request}
/// Runs SQLite VACUUM on the runtime database.
/// {@endtemplate}
final class VacuumRequest extends Request<OkResult> {
  /// {@macro localpocket.vacuum_request}
  const VacuumRequest();

  @override
  String get tag => 'vacuum';
  @override
  String get resultTag => OkResult.tagValue;
  @override
  Map<String, Object?> toJson() => const {};
}

/// {@template localpocket.prune_outbox_request}
/// Deletes settled outbox ops (rows whose records are clean or gone).
/// {@endtemplate}
final class PruneOutboxRequest extends Request<PruneOutboxResult> {
  /// {@macro localpocket.prune_outbox_request}
  const PruneOutboxRequest();

  @override
  String get tag => 'pruneOutbox';
  @override
  String get resultTag => PruneOutboxResult.tagValue;
  @override
  Map<String, Object?> toJson() => const {};
}

/// {@template localpocket.compact_request}
/// Hard-deletes archived records in a store older than a cutoff.
/// {@endtemplate}
final class CompactRequest extends Request<CompactResult> {
  /// {@macro localpocket.compact_request}
  const CompactRequest({required this.store, required this.olderThanMs});

  /// Store to compact.
  final String store;

  /// Cutoff in epoch ms: archived records older than this are removed.
  final int olderThanMs;

  @override
  String get tag => 'compact';
  @override
  String get resultTag => CompactResult.tagValue;

  @override
  Map<String, Object?> toJson() => {'store': store, 'olderThanMs': olderThanMs};
}

/// Full maintenance pass: WAL checkpoint, outbox prune, compaction of archived
/// records older than [compactOlderThanMs].
///
/// {@template localpocket.run_maintenance_request}
/// {@endtemplate}
final class RunMaintenanceRequest extends Request<OkResult> {
  /// {@macro localpocket.run_maintenance_request}
  const RunMaintenanceRequest({required this.compactOlderThanMs});

  /// Cutoff in epoch milliseconds passed to the compaction step.
  final int compactOlderThanMs;

  @override
  String get tag => 'runMaintenance';
  @override
  String get resultTag => OkResult.tagValue;
  @override
  Map<String, Object?> toJson() => {'compactOlderThanMs': compactOlderThanMs};
}

// conflicts

/// Lists open conflicts (optionally filtered by [store]), oldest first.
///
/// {@template localpocket.conflicts_list_request}
/// {@endtemplate}
final class ConflictsListRequest extends Request<ConflictsResult> {
  /// {@macro localpocket.conflicts_list_request}
  const ConflictsListRequest({this.store});

  /// Optional store filter (all stores when null).
  final String? store;

  @override
  String get tag => 'conflictsList';
  @override
  String get resultTag => ConflictsResult.tagValue;
  @override
  Map<String, Object?> toJson() => {if (store != null) 'store': store};
}

/// Reads the conflict for [store]/[id], or none.
///
/// {@template localpocket.conflict_get_request}
/// {@endtemplate}
final class ConflictGetRequest extends Request<ConflictResult> {
  /// {@macro localpocket.conflict_get_request}
  const ConflictGetRequest({required this.store, required this.id});

  /// Store the conflict belongs to.
  final String store;

  /// Record id in conflict.
  final String id;

  @override
  String get tag => 'conflictGet';
  @override
  String get resultTag => ConflictResult.tagValue;
  @override
  Map<String, Object?> toJson() => {'store': store, 'id': id};
}

/// Resolves the conflict for [store]/[id] with an app-selected [merged] doc.
///
/// {@template localpocket.resolve_conflict_request}
/// {@endtemplate}
final class ResolveConflictRequest extends Request<OkResult> {
  /// {@macro localpocket.resolve_conflict_request}
  const ResolveConflictRequest({
    required this.store,
    required this.id,
    required this.merged,
  });

  /// Store the conflict belongs to.
  final String store;

  /// Record id in conflict.
  final String id;

  /// The application-merged document to persist as the resolution.
  final Map<String, Object?> merged;

  @override
  String get tag => 'conflictsResolve';
  @override
  String get resultTag => OkResult.tagValue;
  @override
  Map<String, Object?> toJson() => {'store': store, 'id': id, 'merged': merged};
}

/// Accepts the local version as the resolution for [store]/[id].
///
/// {@template localpocket.accept_local_request}
/// {@endtemplate}
final class AcceptLocalRequest extends Request<OkResult> {
  /// {@macro localpocket.accept_local_request}
  const AcceptLocalRequest({required this.store, required this.id});

  /// Store the conflict belongs to.
  final String store;

  /// Record id in conflict.
  final String id;

  @override
  String get tag => 'conflictsAcceptLocal';
  @override
  String get resultTag => OkResult.tagValue;
  @override
  Map<String, Object?> toJson() => {'store': store, 'id': id};
}

/// Accepts the remote version as the resolution for [store]/[id].
///
/// {@template localpocket.accept_remote_request}
/// {@endtemplate}
final class AcceptRemoteRequest extends Request<OkResult> {
  /// {@macro localpocket.accept_remote_request}
  const AcceptRemoteRequest({required this.store, required this.id});

  /// Store the conflict belongs to.
  final String store;

  /// Record id in conflict.
  final String id;

  @override
  String get tag => 'conflictsAcceptRemote';
  @override
  String get resultTag => OkResult.tagValue;
  @override
  Map<String, Object?> toJson() => {'store': store, 'id': id};
}

/// Watches open conflicts: snapshots carry the current list, initially and on
/// every add/resolve/modify.
///
/// {@template localpocket.conflicts_watch_request}
/// {@endtemplate}
final class ConflictsWatchRequest extends Request<WatchStartedResult> {
  /// {@macro localpocket.conflicts_watch_request}
  const ConflictsWatchRequest({this.store});

  /// Optional store filter (all stores when null).
  final String? store;

  @override
  String get tag => 'conflictsWatch';
  @override
  String get resultTag => WatchStartedResult.tagValue;
  @override
  Map<String, Object?> toJson() => {if (store != null) 'store': store};
}
