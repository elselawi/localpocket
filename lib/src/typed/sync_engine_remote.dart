/// Remote (web) adapter: the typed sync host over the shared contract
/// runtime. The real [SyncEngine] runs inside the worker kernel (started by
/// the sync start command); this adapter is pure delegation and token
/// bridging — no sync logic.
///
/// Pure Dart (no `dart:js_interop`): depends only on [RemoteSyncSurface], so
/// VM tests can drive it against a fake surface.
library;

import 'dart:async';

import 'package:meta/meta.dart';

import '../contract/contract.dart';
import '../adapters/pocketbase/auth.dart' show TokenProvider;
import '../runtime/runtime_client.dart';
import 'typed_pocket.dart';
import 'typed_sync_host.dart';

/// The minimal seam the remote sync host drives: the facade's shared contract
/// runtime.
abstract interface class RemoteSyncSurface {
  /// The one contract runtime every builder and event stream of the facade
  /// observes.
  RuntimeClient get contractRuntime;
}

/// {@template localpocket.pocket_base_sync_engine_remote}
/// Remote [PocketBaseSyncHost]: drives the worker-side engine through the
/// facade's contract runtime.
///
/// - The worker derives its store names from the registered stores, so no
///   store list crosses the boundary.
/// - The [TokenProvider] stays on the page: its initial token crosses as a
///   string on the start command, and [AuthRequiredEvent] events trigger an
///   in-page refresh that is pushed back with the auth-update command. The
///   token is never persisted or logged.
/// - [startRealtime] is a documented no-op: the worker opens the SSE
///   connection during the start command (sync start owns realtime).
/// {@endtemplate}
final class PocketBaseSyncEngine implements PocketBaseSyncHost {
  /// Creates a remote sync host around [db]'s open facade. Prefer
  /// [attachPocketBaseSync].
  ///
  /// {@macro localpocket.pocket_base_sync_engine_remote}
  ///
  /// The cast keeps the shared source valid under the VM analyzer, where the
  /// platform seam resolves [TypedPocket.pocket] to the core class; on web
  /// builds `pocket` IS the facade, so the cast always succeeds where this
  /// adapter actually runs.
  PocketBaseSyncEngine({
    required TypedPocket db,
    required Uri baseUrl,
    required TokenProvider tokenProvider,
    String? identity,
  })  : _db = db,
        _surface = db.pocket as RemoteSyncSurface,
        _baseUrl = baseUrl,
        _tokenProvider = tokenProvider,
        _identity = identity;

  /// Drives an arbitrary [surface] — the VM-test seam for this adapter (the
  /// production facade is JS-bound and cannot load on the VM).
  @visibleForTesting
  PocketBaseSyncEngine.forSurface(
    RemoteSyncSurface surface, {
    required Uri baseUrl,
    required TokenProvider tokenProvider,
    String? identity,
  })  : _db = null,
        _surface = surface,
        _baseUrl = baseUrl,
        _tokenProvider = tokenProvider,
        _identity = identity;

  final TypedPocket? _db;
  final RemoteSyncSurface _surface;
  final Uri _baseUrl;
  final TokenProvider _tokenProvider;
  final String? _identity;

  StreamSubscription<void>? _authSub;
  bool _started = false;

  @override
  bool get isRunning => _started;

  @override
  Stream<SyncStatus> get status => _surface.contractRuntime.events
      .where((event) => event is SyncStatusEvent)
      .cast<SyncStatusEvent>()
      .map((SyncStatusEvent event) => event.status.toSyncStatus());

  @override
  Stream<void> get authRequired => _surface.contractRuntime.events
      .where((event) => event is AuthRequiredEvent)
      .cast<AuthRequiredEvent>()
      .map((AuthRequiredEvent event) {});

  @override
  Future<void> start() async {
    if (_started) return;
    final token = await _tokenProvider.currentToken();
    await _surface.contractRuntime.send(SyncStartRequest(
      baseUrl: _baseUrl.toString(),
      scopeId: _identity,
      token: token.value.isEmpty ? null : token.value,
    ));
    _started = true;
    _authSub = authRequired.listen((_) => unawaited(_refreshAuth()));
  }

  Future<void> _refreshAuth() async {
    try {
      final current = await _tokenProvider.currentToken();
      final refreshed = await _tokenProvider.refreshToken(current);
      await _surface.contractRuntime
          .send(SyncUpdateAuthRequest(token: refreshed.value));
    } catch (_) {
      // A failed refresh parks sync in authRequired; the status stream
      // already reports it. There is nothing safe to do without a token.
    }
  }

  @override
  Future<SyncReport> syncNow() async =>
      (await _surface.contractRuntime.send(const SyncNowRequest()))
          .report
          .toSyncReport();

  @override
  Future<void> pause() =>
      _surface.contractRuntime.send(const SyncPauseRequest());

  @override
  Future<void> resume() =>
      _surface.contractRuntime.send(const SyncResumeRequest());

  @override
  Future<void> setConnectivity(bool online) =>
      _surface.contractRuntime.send(SyncSetConnectivityRequest(online: online));

  @override
  Future<void> startRealtime() async {
    // Documented no-op: the worker opened the SSE connection during the
    // start command (sync start owns realtime). The page cannot open a
    // second connection. Kept for native/web parity of the host surface.
  }

  @override
  Future<void> updateAuth(String? token) =>
      _surface.contractRuntime.send(SyncUpdateAuthRequest(token: token));

  @override
  Future<void> stop() async {
    final db = _db;
    if (db != null) TypedSyncRegistry.forget(db);
    if (!_started) return;
    await _authSub?.cancel();
    _authSub = null;
    _started = false;
    await _surface.contractRuntime.send(const SyncStopRequest());
  }
}

/// Returns the live [PocketBaseSyncEngine] for [db], creating it on first
/// use. While a host is live, every call returns the identical instance;
/// after [PocketBaseSyncHost.stop], the next call creates a fresh one (the
/// config-refresh path).
PocketBaseSyncEngine attachPocketBaseSync({
  required TypedPocket db,
  required Uri baseUrl,
  required TokenProvider tokenProvider,
  String? identity,
}) =>
    memoizedSyncHost(
      db,
      () => PocketBaseSyncEngine(
        db: db,
        baseUrl: baseUrl,
        tokenProvider: tokenProvider,
        identity: identity,
      ),
    );
