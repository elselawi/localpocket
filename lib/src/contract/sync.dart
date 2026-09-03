part of 'contract.dart';

// Sync crosses the boundary as typed commands and committed-fact events.
// Status rides BOTH paths: pushed as [SyncStatusEvent] and pullable via
// [SyncStatusRequest] (`closed` when the engine never started). Auth is
// explicit: tokens cross only via [SyncUpdateAuthRequest] (never persisted or
// logged); a rejected token surfaces as [AuthRequiredEvent].

/// The engine status snapshot: the state machine position, the
/// pending/conflict/hidden/blocked counters, and the sync timestamps.
///
/// {@template localpocket.sync_status}
/// Current synchronization status suitable for a status indicator.
/// {@endtemplate}
final class SyncStatusData {
  /// {@macro localpocket.sync_status}
  const SyncStatusData({
    required this.state,
    required this.pending,
    required this.conflicts,
    required this.hidden,
    this.blocked = 0,
    this.lastError,
    this.lastSyncAt,
    this.lastSuccessfulSyncAt,
  });

  /// Decodes from its wire map; a present-but-wrong-typed value is rejected
  /// instead of silently reading as "never synced".
  factory SyncStatusData.fromJson(Map<String, Object?> json) => SyncStatusData(
        state: _engineState(json['state']),
        pending: _int(json['pending']),
        conflicts: _int(json['conflicts']),
        hidden: _int(json['hidden']),
        blocked: _int(json['blocked']),
        lastError: _optWireString(json['lastError'], 'lastError'),
        lastSyncAt: _optWireDateTime(json['lastSyncAt'], 'lastSyncAt'),
        lastSuccessfulSyncAt: _optWireDateTime(
            json['lastSuccessfulSyncAt'], 'lastSuccessfulSyncAt'),
      );

  /// The status reported before any sync engine has started.
  static const SyncStatusData closed = SyncStatusData(
    state: SyncEngineState.closed,
    pending: 0,
    conflicts: 0,
    hidden: 0,
  );

  /// The engine state machine position.
  final SyncEngineState state;

  /// Records with pending local work.
  final int pending;

  /// Records with an open conflict.
  final int conflicts;

  /// Records hidden from the default query scope.
  final int hidden;

  /// Operations parked in the recoverable `blocked` state.
  final int blocked;

  /// Description of the most recent engine error.
  final String? lastError;

  /// Time of the most recent completed sync cycle (an attempt).
  final DateTime? lastSyncAt;

  /// Time of the most recent ERROR-FREE completed sync cycle.
  final DateTime? lastSuccessfulSyncAt;

  /// Serializes the snapshot into its wire map (DateTimes ride pre-encoded).
  Map<String, Object?> toJson() => {
        'state': state.name,
        'pending': pending,
        'conflicts': conflicts,
        'hidden': hidden,
        'blocked': blocked,
        if (lastError != null) 'lastError': lastError,
        if (lastSyncAt != null) 'lastSyncAt': lastSyncAt,
        if (lastSuccessfulSyncAt != null)
          'lastSuccessfulSyncAt': lastSuccessfulSyncAt,
      };
}

/// One-cycle report (pulled/swept per store, pushed, dead-letter, blocked,
/// discarded, error flag). COMPLETE by contract: every field survives the
/// codec.
///
/// {@template localpocket.sync_report}
/// Result of one manual/triggered sync cycle.
/// {@endtemplate}
final class SyncReportData {
  /// {@macro localpocket.sync_report}
  const SyncReportData({
    this.pulled = const {},
    this.swept = const {},
    this.pushed = 0,
    this.deadLettered = 0,
    this.blocked = 0,
    this.discarded = 0,
    this.hadError = false,
  });

  /// Decodes a report from its wire map.
  factory SyncReportData.fromJson(Map<String, Object?> json) => SyncReportData(
        pulled: _intMap(json['pulled']),
        swept: _intMap(json['swept']),
        pushed: _int(json['pushed']),
        deadLettered: _int(json['deadLettered']),
        blocked: _int(json['blocked']),
        discarded: _int(json['discarded']),
        hadError: json['hadError'] == true,
      );

  /// Records pulled by store.
  final Map<String, int> pulled;

  /// Records scanned by the sweep, by store.
  final Map<String, int> swept;

  /// Successfully pushed records.
  final int pushed;

  /// Operations moved to dead-letter storage.
  final int deadLettered;

  /// Operations parked in the recoverable `blocked` state.
  final int blocked;

  /// Local edits discarded in favor of the remote deletion.
  final int discarded;

  /// Whether the cycle encountered an error.
  final bool hadError;

  @override
  String toString() =>
      'SyncReport(pulled: $pulled, swept: $swept, pushed: $pushed, '
      'deadLettered: $deadLettered, blocked: $blocked, '
      'discarded: $discarded, hadError: $hadError)';

  /// Serializes the report into its wire map.
  Map<String, Object?> toJson() => {
        'pulled': pulled,
        'swept': swept,
        'pushed': pushed,
        'deadLettered': deadLettered,
        'blocked': blocked,
        'discarded': discarded,
        'hadError': hadError,
      };
}

// sync requests

/// Starts the sync engine (and its realtime connection — start OWNS realtime,
/// there is no separate realtime command). Stops a running engine first.
///
/// {@template localpocket.sync_start_request}
/// {@endtemplate}
final class SyncStartRequest extends Request<SyncStartResult> {
  /// {@macro localpocket.sync_start_request}
  const SyncStartRequest({required this.baseUrl, this.scopeId, this.token});

  /// Base URL of the sync backend.
  final String baseUrl;

  /// Identifies this client in the sync identity; defaults engine-side.
  final String? scopeId;

  /// The initial bearer token, if already held. Never persisted or logged.
  final String? token;

  @override
  String get tag => 'syncStart';
  @override
  String get resultTag => SyncStartResult.tagValue;

  @override
  Map<String, Object?> toJson() => {
        'baseUrl': baseUrl,
        if (scopeId != null) 'scopeId': scopeId,
        if (token != null) 'token': token,
      };
}

/// Stops the sync engine and its realtime connection.
///
/// {@template localpocket.sync_stop_request}
/// {@endtemplate}
final class SyncStopRequest extends Request<OkResult> {
  /// {@macro localpocket.sync_stop_request}
  const SyncStopRequest();

  @override
  String get tag => 'syncStop';
  @override
  String get resultTag => OkResult.tagValue;
  @override
  Map<String, Object?> toJson() => const {};
}

/// Runs one full sync cycle immediately and returns its complete report.
///
/// {@template localpocket.sync_now_request}
/// {@endtemplate}
final class SyncNowRequest extends Request<SyncReportResult> {
  /// {@macro localpocket.sync_now_request}
  const SyncNowRequest();

  @override
  String get tag => 'syncNow';
  @override
  String get resultTag => SyncReportResult.tagValue;
  @override
  Map<String, Object?> toJson() => const {};
}

/// Parks periodic and event-driven cycles (manual `syncNow` still works).
///
/// {@template localpocket.sync_pause_request}
/// {@endtemplate}
final class SyncPauseRequest extends Request<OkResult> {
  /// {@macro localpocket.sync_pause_request}
  const SyncPauseRequest();

  @override
  String get tag => 'syncPause';
  @override
  String get resultTag => OkResult.tagValue;
  @override
  Map<String, Object?> toJson() => const {};
}

/// Resumes parked cycles.
///
/// {@template localpocket.sync_resume_request}
/// {@endtemplate}
final class SyncResumeRequest extends Request<OkResult> {
  /// {@macro localpocket.sync_resume_request}
  const SyncResumeRequest();

  @override
  String get tag => 'syncResume';
  @override
  String get resultTag => OkResult.tagValue;
  @override
  Map<String, Object?> toJson() => const {};
}

/// Replaces the bearer token after a refresh or login — the ONLY channel a
/// token crosses; unblocks an auth-required engine.
///
/// {@template localpocket.sync_update_auth_request}
/// {@endtemplate}
final class SyncUpdateAuthRequest extends Request<OkResult> {
  /// {@macro localpocket.sync_update_auth_request}
  const SyncUpdateAuthRequest({this.token});

  /// The new bearer token, or null to clear. Never persisted or logged.
  final String? token;

  @override
  String get tag => 'syncUpdateAuth';
  @override
  String get resultTag => OkResult.tagValue;
  @override
  Map<String, Object?> toJson() => {if (token != null) 'token': token};
}

/// Informs the engine of online/offline connectivity changes.
///
/// {@template localpocket.sync_set_connectivity_request}
/// {@endtemplate}
final class SyncSetConnectivityRequest extends Request<OkResult> {
  /// {@macro localpocket.sync_set_connectivity_request}
  const SyncSetConnectivityRequest({required this.online});

  /// Whether the network is currently reachable.
  final bool online;

  @override
  String get tag => 'syncSetConnectivity';
  @override
  String get resultTag => OkResult.tagValue;
  @override
  Map<String, Object?> toJson() => {'online': online};
}

/// Reads the current status snapshot (`closed` when sync never started).
/// Pushed snapshots ride [SyncStatusEvent].
///
/// {@template localpocket.sync_status_request}
/// {@endtemplate}
final class SyncStatusRequest extends Request<SyncStatusResult> {
  /// {@macro localpocket.sync_status_request}
  const SyncStatusRequest();

  @override
  String get tag => 'syncStatus';
  @override
  String get resultTag => SyncStatusResult.tagValue;
  @override
  Map<String, Object?> toJson() => const {};
}

// sync results

/// The engine state the start request left the runtime in.
///
/// {@template localpocket.sync_start_result}
/// {@endtemplate}
final class SyncStartResult extends Result {
  /// {@macro localpocket.sync_start_result}
  const SyncStartResult({required this.state});

  /// Stable wire tag for this result type.
  static const String tagValue = 'syncStart';
  @override
  String get tag => tagValue;

  /// The engine state machine position after the start.
  final SyncEngineState state;

  @override
  Map<String, Object?> toJson() => {'state': state.name};
}

/// One completed sync cycle's report.
///
/// {@template localpocket.sync_report_result}
/// {@endtemplate}
final class SyncReportResult extends Result {
  /// {@macro localpocket.sync_report_result}
  const SyncReportResult({required this.report});

  /// Stable wire tag for this result type.
  static const String tagValue = 'syncReport';
  @override
  String get tag => tagValue;

  /// The completed cycle's report.
  final SyncReportData report;

  @override
  Map<String, Object?> toJson() => {'report': report.toJson()};
}

/// The current status snapshot.
///
/// {@template localpocket.sync_status_result}
/// {@endtemplate}
final class SyncStatusResult extends Result {
  /// {@macro localpocket.sync_status_result}
  const SyncStatusResult({required this.status});

  /// Stable wire tag for this result type.
  static const String tagValue = 'syncStatus';
  @override
  String get tag => tagValue;

  /// The current status snapshot.
  final SyncStatusData status;

  @override
  Map<String, Object?> toJson() => {'status': status.toJson()};
}

// sync events

/// A pushed status snapshot from the engine's status stream.
///
/// {@template localpocket.sync_status_event}
/// {@endtemplate}
final class SyncStatusEvent extends Event {
  /// {@macro localpocket.sync_status_event}
  const SyncStatusEvent({required this.status});

  /// Stable wire tag for this event type.
  static const String tagValue = 'syncStatusEvent';
  @override
  String get tag => tagValue;

  /// The pushed status snapshot.
  final SyncStatusData status;

  @override
  Map<String, Object?> toJson() =>
      // DateTimes aren't event-safe: the status map travels pre-encoded so
      // timestamps survive the transport untouched.
      {'status': encodeWireValue(status.toJson())};
}

/// The engine's token was rejected and no refresh produced a valid one: the
/// caller must fetch a fresh token and push it via [SyncUpdateAuthRequest].
///
/// {@template localpocket.auth_required_event}
/// {@endtemplate}
final class AuthRequiredEvent extends Event {
  /// {@macro localpocket.auth_required_event}
  const AuthRequiredEvent();

  /// Stable wire tag for this event type.
  static const String tagValue = 'authRequired';
  @override
  String get tag => tagValue;
  @override
  Map<String, Object?> toJson() => const {};
}

SyncEngineState _engineState(Object? raw) {
  if (raw is String) {
    for (final state in SyncEngineState.values) {
      if (state.name == raw) return state;
    }
  }
  throw WireException('Malformed sync status state: $raw');
}

int _int(Object? value) {
  if (value is int) return value;
  throw WireException('Malformed sync counter: $value');
}

Map<String, int> _intMap(Object? value) {
  if (value == null) return const {};
  if (value is! Map) throw WireException('Malformed sync map counter.');
  final out = <String, int>{};
  for (final entry in value.entries) {
    if (entry.key is! String || entry.value is! int) {
      throw WireException('Malformed sync map counter.');
    }
    out[entry.key! as String] = entry.value! as int;
  }
  return out;
}
