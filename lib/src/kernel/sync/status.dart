/// Engine state machine + user-visible status.
library;

/// Lifecycle state of a [SyncEngine].
enum SyncEngineState {
  /// Created but not started (or stopped).
  closed,

  /// A start call is initializing the backend.
  opening,

  /// Started but the network is unreachable or disabled.
  offline,

  /// The backend rejected the current token; a fresh one is required.
  authRequired,

  /// Started, connected, and nothing to do.
  idle,

  /// A pull cycle is running.
  pulling,

  /// A push cycle is running.
  pushing,

  /// Waiting out a backoff after a failed cycle.
  backoff,

  /// Cycles are parked by request (manual `syncNow` still works).
  paused,

  /// A full resync (sweep from scratch) is running.
  fullResync,
}

/// {@template localpocket.sync_report}
/// Result of one manual/triggered sync cycle.
/// {@endtemplate}
class SyncReport {
  /// Creates a sync-cycle report.
  ///
  /// {@macro localpocket.sync_report}
  const SyncReport({
    this.pulled = const {},
    this.swept = const {},
    this.pushed = 0,
    this.deadLettered = 0,
    this.blocked = 0,
    this.discarded = 0,
    this.hadError = false,
  });

  /// Number of records pulled by collection.
  final Map<String, int> pulled;

  /// Number of records scanned by sweep by collection.
  final Map<String, int> swept;

  /// Number of successfully pushed records.
  final int pushed;

  /// Number of operations moved to dead-letter storage.
  final int deadLettered;

  /// Number of operations parked in the recoverable `blocked` state.
  final int blocked;

  /// Number of local edits discarded in favor of the remote deletion
  /// (`MissingRemotePolicy.discardLocal`).
  final int discarded;

  /// Whether the cycle encountered an error.
  final bool hadError;

  @override
  String toString() =>
      'SyncReport(pulled: $pulled, swept: $swept, pushed: $pushed, '
      'deadLettered: $deadLettered, blocked: $blocked, '
      'discarded: $discarded, hadError: $hadError)';
}

/// {@template localpocket.sync_status}
/// Current synchronization status suitable for a status indicator.
/// {@endtemplate}
class SyncStatus {
  /// Creates a sync-status snapshot.
  ///
  /// {@macro localpocket.sync_status}
  const SyncStatus({
    required this.state,
    required this.pending,
    required this.conflicts,
    required this.hidden,
    this.blocked = 0,
    this.lastError,
    this.lastSyncAt,
    this.lastSuccessfulSyncAt,
  });

  /// Current engine state.
  final SyncEngineState state;

  /// Number of pending local operations.
  final int pending;

  /// Number of unresolved conflicts.
  final int conflicts;

  /// Number of hidden local records.
  final int hidden;

  /// Number of records parked in the recoverable `blocked` state.
  final int blocked;

  /// Most recent error, when available.
  final String? lastError;

  /// Time of the most recent completed sync cycle, whether or not it had
  /// errors (i.e. an "attempt").
  final DateTime? lastSyncAt;

  /// Time of the most recent ERROR-FREE completed sync cycle, when available.
  /// Prefer this over [lastSyncAt] for "last successfully synced" indicators.
  final DateTime? lastSuccessfulSyncAt;
}
