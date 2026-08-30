/// The platform-neutral typed sync host: one surface, two thin platform
/// adapters (native `SyncEngine` wrapper / web facade-verb wrapper) selected
/// by the seam in `sync_engine_platform.dart`.
///
/// Consumers never see the seam: they construct the host once with
/// [attachPocketBaseSync] and get identical behavior on native and web. The
/// sync LOGIC is never duplicated — it always lives in [SyncEngine], which
/// runs in-process on the VM and inside the web worker in the browser.
library;

import 'dart:async';

import '../sync/status.dart';
import 'typed_pocket.dart';

/// {@template localpocket.pocket_base_sync_host}
/// Synchronization lifecycle surface shared by native and web.
///
/// Obtain one through `attachPocketBaseSync(...)` from the package barrel —
/// never construct platform adapters directly in application code. The
/// surface is deliberately the intersection of what both platforms can
/// honor:
///
/// - [start]/[stop] own the engine lifecycle (restartable: `start()` after
///   `stop()` re-opens fresh streams).
/// - [syncNow] runs one full pull → sweep → push cycle and returns its
///   [SyncReport].
/// - [status] emits [SyncStatus] snapshots; [authRequired] fires when the
///   backend reports the token is no longer accepted (refresh it, then call
///   [updateAuth]).
/// - [startRealtime] is the explicit owner of the SSE connection on native;
///   on web it is a documented no-op because the worker opens realtime
///   during `start()`.
/// {@endtemplate}
abstract interface class PocketBaseSyncHost {
  /// Starts the engine (and, on web, its worker-side realtime connection).
  ///
  /// Idempotent and restartable: calling it again after [stop] re-opens
  /// fresh streams.
  Future<void> start();

  /// Stops timers, realtime, and in-flight cycles. Idempotent.
  Future<void> stop();

  /// Runs one full synchronization cycle immediately and returns its report.
  Future<SyncReport> syncNow();

  /// Parks periodic and event-driven cycles (manual [syncNow] still works).
  Future<void> pause();

  /// Resumes parked cycles.
  Future<void> resume();

  /// Informs the engine of online/offline connectivity changes.
  Future<void> setConnectivity(bool online);

  /// Opens the realtime SSE connection explicitly.
  ///
  /// Native: [start] never opens SSE — this is the explicit owner of the
  /// connection. Web: the worker opens realtime during [start]; this is a
  /// no-op kept for platform parity.
  Future<void> startRealtime();

  /// Informs the engine the token became valid again.
  ///
  /// Web: forwards the new token string to the worker, which resumes with a
  /// forced full sweep. Native: the consumer-owned [TokenProvider] already
  /// holds the new token, so only the engine is unblocked (the [token]
  /// argument is unused on native).
  Future<void> updateAuth(String? token);

  /// User-facing synchronization status snapshots.
  Stream<SyncStatus> get status;

  /// Fires when the backend reports that authentication is required again.
  Stream<void> get authRequired;

  /// Whether [start] has completed and [stop] has not been called since.
  bool get isRunning;
}

/// One live [PocketBaseSyncHost] per [TypedPocket].
///
/// Two hosts on one database would drive two engines against the same
/// outbox (double-pushed writes), so [attachPocketBaseSync] memoizes the
/// host per `db` and [PocketBaseSyncHost.stop] releases the slot (the next
/// attach returns a fresh host — the config-refresh path). The registry is
/// weak-keyed ([Expando]): entries vanish with the database object and can
/// never leak it.
final class TypedSyncRegistry {
  TypedSyncRegistry._();

  static final Expando<PocketBaseSyncHost> _hosts =
      Expando<PocketBaseSyncHost>('localpocket.typedSyncHost');

  /// The live host for [db], or `null`.
  static PocketBaseSyncHost? forDb(TypedPocket db) => _hosts[db];

  /// Registers [host] as the live host for [db].
  static void track(TypedPocket db, PocketBaseSyncHost host) =>
      _hosts[db] = host;

  /// Releases the slot for [db].
  static void forget(TypedPocket db) => _hosts[db] = null;
}

/// Returns the live host for [db], creating one with [create] on first use.
///
/// Shared by both platform adapters so the memoization behavior cannot
/// drift between them.
T memoizedSyncHost<T extends PocketBaseSyncHost>(
  TypedPocket db,
  T Function() create,
) {
  final existing = TypedSyncRegistry.forDb(db);
  if (existing is T) return existing;
  final host = create();
  TypedSyncRegistry.track(db, host);
  return host;
}
