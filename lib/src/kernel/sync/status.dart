/// Engine state machine + the vocabulary the sync surface is named from.
///
/// The status/report models are the contract layer's codec-backed classes
/// (`SyncStatusData`, `SyncReportData`) — one class per concept, shared by
/// the engine's status stream and every internal consumer. The historical
/// names are preserved as type aliases so every existing caller (and the
/// public barrel) keeps compiling unchanged.
library;

import '../../contract/contract.dart' show SyncReportData, SyncStatusData;
export '../../contract/contract.dart' show SyncReportData, SyncStatusData;

/// Historical name for [SyncStatusData].
typedef SyncStatus = SyncStatusData;

/// Historical name for [SyncReportData].
typedef SyncReport = SyncReportData;

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
