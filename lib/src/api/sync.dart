/// PocketBase sync attachment for the public facade.
///
/// `LocalPocket.attachPocketBaseSync` returns one [PocketBaseSync] host;
/// [PocketBaseSync.start] starts the kernel-owned engine and its realtime
/// connection (sync start owns realtime — there is no separate realtime
/// command). The host works identically on native (direct runtime) and web
/// (worker runtime); the sync logic lives in the kernel's [SyncEngine].
library;

import 'dart:async';

import '../contract/contract.dart';
import '../kernel/sync/sync_backend.dart' show TokenProvider;
import '../runtime/runtime_client.dart';

/// {@template localpocket.pocket_base_sync_options}
/// Configuration for [LocalPocket.attachPocketBaseSync].
///
/// The [tokenProvider] stays caller-owned: its current value crosses only
/// through the sync start and auth-update commands — never persisted, never
/// logged. [identity] scopes the engine's bookkeeping; it is REQUIRED:
/// sync start fails typed when omitted, because a shared default would
/// collapse every account of the same server into one sync scope.
/// {@endtemplate}
final class PocketBaseSyncOptions {
  /// {@macro localpocket.pocket_base_sync_options}
  const PocketBaseSyncOptions({
    required this.baseUrl,
    required this.tokenProvider,
    this.identity,
  });

  /// The PocketBase server origin.
  final Uri baseUrl;

  /// Supplies and refreshes the bearer token for the sync session.
  final TokenProvider tokenProvider;

  /// Stable identity for sync-scoped bookkeeping (account id). Must be
  /// stable per account; sync start fails typed when omitted.
  final String? identity;
}

/// {@template localpocket.pocket_base_sync}
/// {@template localpocket.pocket_base_sync}
/// One synchronization host for a [LocalPocket].
///
/// Obtain one through `db.attachPocketBaseSync(...)`. [start] owns the
/// engine lifecycle and its realtime connection (restartable: `start()`
/// after `stop()` re-opens fresh streams); [status] emits [SyncStatus]
/// snapshots and [authRequired] fires when the backend reports the token is
/// no longer accepted — fetch a fresh one and push it with [updateAuth].
/// {@endtemplate}
/// {@endtemplate}
final class PocketBaseSync {
  /// Internal: created by the attachment on the database.
  ///
  /// {@macro localpocket.pocket_base_sync}
  PocketBaseSync.internal(this._runtime, this._options);

  final RuntimeClient _runtime;
  final PocketBaseSyncOptions _options;
  bool _started = false;

  /// The options this host was attached with. One database owns one host;
  /// the attachment compares these when the same database attaches again.
  PocketBaseSyncOptions get options => _options;

  /// Whether [start] has completed and [stop] has not been called since.
  bool get isRunning => _started;

  /// User-facing synchronization status snapshots, pushed by the engine.
  Stream<SyncStatusData> get status => _runtime.events
      .where((event) => event is SyncStatusEvent)
      .cast<SyncStatusEvent>()
      .map((event) => event.status);

  /// Fires when the backend reports that authentication is required again:
  /// refresh the token through the caller-owned provider and push it with
  /// [updateAuth].
  Stream<void> get authRequired => _runtime.events
      .where((event) => event is AuthRequiredEvent)
      .cast<AuthRequiredEvent>()
      .map((event) {});

  /// Starts the sync engine (and its realtime connection). Idempotent and
  /// restartable: calling it again after [stop] re-opens fresh streams.
  Future<void> start() async {
    if (_started) return;
    final token = await _options.tokenProvider.currentToken();
    await _runtime.send(SyncStartRequest(
      baseUrl: _options.baseUrl.toString(),
      scopeId: _options.identity,
      token: token.value.isEmpty ? null : token.value,
    ));
    _started = true;
  }

  /// Stops the sync engine and its realtime connection. Idempotent.
  Future<void> stop() async {
    if (!_started) return;
    _started = false;
    await _runtime.send(const SyncStopRequest());
  }

  /// Runs one full pull → sweep → push cycle immediately and returns its
  /// complete report.
  Future<SyncReportData> syncNow() async =>
      (await _runtime.send(const SyncNowRequest())).report;

  /// Parks periodic and event-driven cycles (manual [syncNow] still works).
  Future<void> pause() => _runtime.send(const SyncPauseRequest());

  /// Resumes parked cycles.
  Future<void> resume() => _runtime.send(const SyncResumeRequest());

  /// Informs the engine of online/offline connectivity changes.
  Future<void> setConnectivity(bool online) =>
      _runtime.send(SyncSetConnectivityRequest(online: online));

  /// Replaces the bearer token the engine holds after a refresh or login.
  /// This is the only channel a token crosses; it unblocks an auth-required
  /// engine.
  Future<void> updateAuth(String? token) =>
      _runtime.send(SyncUpdateAuthRequest(token: token));
}
