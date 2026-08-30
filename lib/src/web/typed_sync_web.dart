/// Web adapter: the typed sync host over the worker-backed facade verbs.
/// The real [SyncEngine] runs inside the worker (started by `sync_start`);
/// this adapter is pure delegation and token bridging — no sync logic.
///
/// Pure Dart (no `dart:js_interop`): depends only on [WebSyncSurface], so
/// VM tests can drive it against a fake surface.
library;

import 'dart:async';

import 'package:meta/meta.dart';

import '../pocketbase/auth.dart' show TokenProvider;
import '../sync/status.dart';
import '../typed/typed_pocket.dart';
import '../typed/typed_sync_host.dart';
import 'facade/web_sync_surface.dart';
import 'sync_status_codec.dart';

/// {@template localpocket.pocket_base_sync_engine_web}
/// Web [PocketBaseSyncHost]: drives the worker-side engine through the
/// facade's sync verbs.
///
/// - The worker derives its store names from the registered stores, so no
///   store list crosses the wire.
/// - The [TokenProvider] stays on the page: its initial token crosses as a
///   string, and [authRequired] events trigger an in-page refresh that is
///   pushed back with `updateAuth`.
/// - [startRealtime] is a documented no-op: the worker opens the SSE
///   connection during `sync_start`.
/// {@endtemplate}
final class PocketBaseSyncEngine implements PocketBaseSyncHost {
  /// Creates a web sync host around [db]'s open facade. Prefer
  /// [attachPocketBaseSync].
  ///
  /// {@macro localpocket.pocket_base_sync_engine_web}
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
        _surface = db.pocket as WebSyncSurface,
        _baseUrl = baseUrl,
        _tokenProvider = tokenProvider,
        _identity = identity;

  /// Drives an arbitrary [surface] — the VM-test seam for this adapter (the
  /// production facade is JS-bound and cannot load on the VM).
  @visibleForTesting
  PocketBaseSyncEngine.forSurface(
    WebSyncSurface surface, {
    required Uri baseUrl,
    required TokenProvider tokenProvider,
    String? identity,
  })  : _db = null,
        _surface = surface,
        _baseUrl = baseUrl,
        _tokenProvider = tokenProvider,
        _identity = identity;

  final TypedPocket? _db;
  final WebSyncSurface _surface;
  final Uri _baseUrl;
  final TokenProvider _tokenProvider;
  final String? _identity;

  StreamSubscription<void>? _authSub;
  bool _started = false;

  @override
  bool get isRunning => _started;

  @override
  Stream<SyncStatus> get status => _surface.syncStatus.map(decodeSyncStatus);

  @override
  Stream<void> get authRequired => _surface.authRequired;

  @override
  Future<void> start() async {
    if (_started) return;
    final token = await _tokenProvider.currentToken();
    await _surface.startSync(
      baseUrl: _baseUrl.toString(),
      scopeId: _identity,
      token: token.value,
    );
    _started = true;
    _authSub = _surface.authRequired.listen((_) => unawaited(_refreshAuth()));
  }

  Future<void> _refreshAuth() async {
    try {
      final current = await _tokenProvider.currentToken();
      final refreshed = await _tokenProvider.refreshToken(current);
      await _surface.updateAuth(refreshed.value);
    } catch (_) {
      // A failed refresh parks sync in authRequired; the status stream
      // already reports it. There is nothing safe to do without a token.
    }
  }

  @override
  Future<SyncReport> syncNow() => _surface.syncNow();

  @override
  Future<void> pause() => _surface.pauseSync();

  @override
  Future<void> resume() => _surface.resumeSync();

  @override
  Future<void> setConnectivity(bool online) => _surface.setConnectivity(online);

  @override
  Future<void> startRealtime() async {
    // Documented no-op: the worker opened the SSE connection during
    // `sync_start` (worker_engine_sync.dart). The page cannot open a second
    // connection. Kept for native/web parity of the host surface.
  }

  @override
  Future<void> updateAuth(String? token) => _surface.updateAuth(token);

  @override
  Future<void> stop() async {
    final db = _db;
    if (db != null) TypedSyncRegistry.forget(db);
    if (!_started) return;
    await _authSub?.cancel();
    _authSub = null;
    _started = false;
    await _surface.stopSync();
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
