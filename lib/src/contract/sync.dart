part of 'contract.dart';

// The sync family crosses the runtime boundary as typed commands and
// committed-fact events. Status snapshots ride BOTH paths: pushed as
// [SyncStatusEvent] envelopes (the engine's status stream) and pullable as a
// [SyncStatusRequest] result (the current snapshot, `closed` when the engine
// never started). Auth is explicit: the token crosses only via
// [SyncUpdateAuthRequest] — it is never persisted or logged — and the engine
// reports a rejected token as [AuthRequiredEvent].

/// Wire-safe snapshot of [SyncStatus]: the engine state machine position,
/// the pending/conflict/hidden/blocked counters, and the sync timestamps.
final class SyncStatusData {
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

  factory SyncStatusData.fromJson(Map<String, Object?> json) => SyncStatusData(
        state: _engineState(json['state']),
        pending: _int(json['pending']),
        conflicts: _int(json['conflicts']),
        hidden: _int(json['hidden']),
        blocked: _int(json['blocked']),
        lastError: json['lastError'] as String?,
        lastSyncAt: json['lastSyncAt'] is DateTime
            ? json['lastSyncAt']! as DateTime
            : null,
        lastSuccessfulSyncAt: json['lastSuccessfulSyncAt'] is DateTime
            ? json['lastSuccessfulSyncAt']! as DateTime
            : null,
      );

  /// The snapshot of the live [SyncStatus] model.
  factory SyncStatusData.of(SyncStatus status) => SyncStatusData(
        state: status.state,
        pending: status.pending,
        conflicts: status.conflicts,
        hidden: status.hidden,
        blocked: status.blocked,
        lastError: status.lastError,
        lastSyncAt: status.lastSyncAt,
        lastSuccessfulSyncAt: status.lastSuccessfulSyncAt,
      );

  /// The status reported before any sync engine has started.
  static const SyncStatusData closed = SyncStatusData(
    state: SyncEngineState.closed,
    pending: 0,
    conflicts: 0,
    hidden: 0,
  );

  final SyncEngineState state;
  final int pending;
  final int conflicts;
  final int hidden;
  final int blocked;
  final String? lastError;

  /// Time of the most recent completed sync cycle (an attempt).
  final DateTime? lastSyncAt;

  /// Time of the most recent ERROR-FREE completed sync cycle.
  final DateTime? lastSuccessfulSyncAt;

  SyncStatus toSyncStatus() => SyncStatus(
        state: state,
        pending: pending,
        conflicts: conflicts,
        hidden: hidden,
        blocked: blocked,
        lastError: lastError,
        lastSyncAt: lastSyncAt,
        lastSuccessfulSyncAt: lastSuccessfulSyncAt,
      );

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

/// Wire-safe one-cycle report: pulled/swept per-store counters, the pushed
/// total, dead-letter and blocked op counts, discarded local edits, and
/// whether the cycle hit an error. COMPLETE by contract: every field the
/// model exposes survives the codec.
final class SyncReportData {
  const SyncReportData({
    this.pulled = const {},
    this.swept = const {},
    this.pushed = 0,
    this.deadLettered = 0,
    this.blocked = 0,
    this.discarded = 0,
    this.hadError = false,
  });

  factory SyncReportData.fromJson(Map<String, Object?> json) => SyncReportData(
        pulled: _intMap(json['pulled']),
        swept: _intMap(json['swept']),
        pushed: _int(json['pushed']),
        deadLettered: _int(json['deadLettered']),
        blocked: _int(json['blocked']),
        discarded: _int(json['discarded']),
        hadError: json['hadError'] == true,
      );

  factory SyncReportData.of(SyncReport report) => SyncReportData(
        pulled: report.pulled,
        swept: report.swept,
        pushed: report.pushed,
        deadLettered: report.deadLettered,
        blocked: report.blocked,
        discarded: report.discarded,
        hadError: report.hadError,
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

  SyncReport toSyncReport() => SyncReport(
        pulled: pulled,
        swept: swept,
        pushed: pushed,
        deadLettered: deadLettered,
        blocked: blocked,
        discarded: discarded,
        hadError: hadError,
      );

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

// ---------------------------------------------------------------------------
// sync requests
// ---------------------------------------------------------------------------

/// Starts the sync engine (and its realtime connection): sync start OWNS
/// realtime — there is no separate realtime start command. Restarts cleanly:
/// a running engine is stopped first.
final class SyncStartRequest extends Request<SyncStartResult> {
  const SyncStartRequest({required this.baseUrl, this.scopeId, this.token});

  final String baseUrl;

  /// Identifies this client in the sync identity; defaults engine-side.
  final String? scopeId;

  /// The initial bearer token, if the caller already holds one. Never
  /// persisted or logged.
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
final class SyncStopRequest extends Request<OkResult> {
  const SyncStopRequest();

  @override
  String get tag => 'syncStop';
  @override
  String get resultTag => OkResult.tagValue;
  @override
  Map<String, Object?> toJson() => const {};
}

/// Runs one full sync cycle immediately and returns its complete report.
final class SyncNowRequest extends Request<SyncReportResult> {
  const SyncNowRequest();

  @override
  String get tag => 'syncNow';
  @override
  String get resultTag => SyncReportResult.tagValue;
  @override
  Map<String, Object?> toJson() => const {};
}

/// Parks periodic and event-driven cycles (manual `syncNow` still works).
final class SyncPauseRequest extends Request<OkResult> {
  const SyncPauseRequest();

  @override
  String get tag => 'syncPause';
  @override
  String get resultTag => OkResult.tagValue;
  @override
  Map<String, Object?> toJson() => const {};
}

/// Resumes parked cycles.
final class SyncResumeRequest extends Request<OkResult> {
  const SyncResumeRequest();

  @override
  String get tag => 'syncResume';
  @override
  String get resultTag => OkResult.tagValue;
  @override
  Map<String, Object?> toJson() => const {};
}

/// Replaces the bearer token the engine holds after a refresh or login. This
/// is the ONLY channel a token crosses; it unblocks an auth-required engine.
final class SyncUpdateAuthRequest extends Request<OkResult> {
  const SyncUpdateAuthRequest({this.token});

  final String? token;

  @override
  String get tag => 'syncUpdateAuth';
  @override
  String get resultTag => OkResult.tagValue;
  @override
  Map<String, Object?> toJson() => {if (token != null) 'token': token};
}

/// Informs the engine of online/offline connectivity changes.
final class SyncSetConnectivityRequest extends Request<OkResult> {
  const SyncSetConnectivityRequest({required this.online});

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
final class SyncStatusRequest extends Request<SyncStatusResult> {
  const SyncStatusRequest();

  @override
  String get tag => 'syncStatus';
  @override
  String get resultTag => SyncStatusResult.tagValue;
  @override
  Map<String, Object?> toJson() => const {};
}

// ---------------------------------------------------------------------------
// sync results
// ---------------------------------------------------------------------------

/// The engine state the start request left the runtime in.
final class SyncStartResult extends Result {
  const SyncStartResult({required this.state});
  static const String tagValue = 'syncStart';
  @override
  String get tag => tagValue;

  final SyncEngineState state;

  @override
  Map<String, Object?> toJson() => {'state': state.name};
}

/// One completed sync cycle's report.
final class SyncReportResult extends Result {
  const SyncReportResult({required this.report});
  static const String tagValue = 'syncReport';
  @override
  String get tag => tagValue;

  final SyncReportData report;

  @override
  Map<String, Object?> toJson() => {'report': report.toJson()};
}

/// The current status snapshot.
final class SyncStatusResult extends Result {
  const SyncStatusResult({required this.status});
  static const String tagValue = 'syncStatus';
  @override
  String get tag => tagValue;

  final SyncStatusData status;

  @override
  Map<String, Object?> toJson() => {'status': status.toJson()};
}

// ---------------------------------------------------------------------------
// sync events
// ---------------------------------------------------------------------------

/// A pushed status snapshot from the engine's status stream.
final class SyncStatusEvent extends Event {
  const SyncStatusEvent({required this.status});

  static const String tagValue = 'syncStatusEvent';
  @override
  String get tag => tagValue;

  final SyncStatusData status;

  @override
  Map<String, Object?> toJson() =>
      // DateTimes are not event-safe: the status map travels pre-encoded so
      // the timestamps survive the transport untouched.
      {'status': encodeWireValue(status.toJson())};
}

/// The engine's token was rejected and a refresh did not (yet) produce a
/// valid one: the caller must fetch a fresh token and push it with
/// [SyncUpdateAuthRequest].
final class AuthRequiredEvent extends Event {
  const AuthRequiredEvent();

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
