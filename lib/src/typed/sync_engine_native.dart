/// Native VM adapter: the typed sync host over a real in-process
/// [SyncEngine] driving a [PocketBaseSync] backend. Pure delegation — no
/// sync logic lives here.
library;

import 'dart:async';

import '../pocketbase/auth.dart' show TokenProvider;
import '../sync/engine.dart';
import '../sync/status.dart';
import 'typed_pocket.dart';
import 'typed_sync.dart';
import 'typed_sync_host.dart';

/// {@template localpocket.pocket_base_sync_engine}
/// Native [PocketBaseSyncHost]: wraps a [SyncEngine] driving a
/// [PocketBaseSync] backend for [db].
///
/// Obtain one through `attachPocketBaseSync` so the package can guarantee at
/// most one live host per [TypedPocket] (two engines on one outbox would
/// double-push writes). The host is restartable: `start()` after `stop()`
/// re-opens fresh streams on the same engine.
///
/// The store manifest stays single-sourced: the backend derives its
/// `storeNames` from `db.stores` — call sites never re-list stores.
/// {@endtemplate}
final class PocketBaseSyncEngine implements PocketBaseSyncHost {
  /// Creates a native sync host for [db]. Prefer [attachPocketBaseSync].
  ///
  /// {@macro localpocket.pocket_base_sync_engine}
  PocketBaseSyncEngine({
    required TypedPocket db,
    required Uri baseUrl,
    required TokenProvider tokenProvider,
    String? identity,
  })  : _db = db,
        _backend = PocketBaseSync(
          baseUrl: baseUrl,
          tokenProvider: tokenProvider,
          db: db,
          identity: identity,
        );

  final TypedPocket _db;
  final PocketBaseSync _backend;
  SyncEngine? _engine;
  final StreamController<void> _authController =
      StreamController<void>.broadcast();

  /// Status relay: listenable before [start] (web parity) and re-wired on
  /// every restart, since the engine opens a fresh status stream per start.
  final StreamController<SyncStatus> _statusController =
      StreamController<SyncStatus>.broadcast();
  StreamSubscription<SyncStatus>? _engineStatusSub;

  SyncEngine _requireEngine() =>
      _engine ??
      (throw StateError(
          'Sync is not started. Call start() before using the sync host.'));

  @override
  bool get isRunning => _engine?.isRunning ?? false;

  @override
  Stream<SyncStatus> get status => _statusController.stream;

  @override
  Stream<void> get authRequired => _authController.stream;

  @override
  Future<void> start() async {
    final engine = _engine ??= SyncEngine(
      pocket: _db.pocket,
      backend: _backend,
      onAuthRequired: () {
        if (!_authController.isClosed) _authController.add(null);
      },
    );
    _engineStatusSub ??= engine.status.listen(
      _statusController.add,
      onError: (Object error, StackTrace stack) {
        if (_statusController.hasListener) {
          _statusController.addError(error, stack);
        }
      },
    );
    // SyncEngine.start() is idempotent and restartable: it returns early
    // when already running and re-opens fresh streams after a stop.
    await engine.start();
  }

  @override
  Future<SyncReport> syncNow() async => _requireEngine().syncNow();

  @override
  Future<void> pause() async => _requireEngine().pause();

  @override
  Future<void> resume() async => _requireEngine().resume();

  @override
  Future<void> setConnectivity(bool online) async =>
      _requireEngine().setConnectivity(online);

  @override
  Future<void> startRealtime() async {
    _requireEngine();
    // Idempotent: PBBackend.startRealtime() guards re-entry.
    await _backend.startRealtime();
  }

  @override
  Future<void> updateAuth(String? token) async {
    // Native: the consumer owns the TokenProvider — the new token already
    // lives there; this only unblocks the engine (forced sweep + requeue of
    // blocked pushes).
    await _requireEngine().markAuthValid();
  }

  @override
  Future<void> stop() async {
    TypedSyncRegistry.forget(_db);
    final engine = _engine;
    if (engine == null) return;
    await engine.stop();
    // The engine closed its status stream (the relay already delivered the
    // terminal `closed` state); re-subscribe on the next start(), which
    // opens a fresh engine stream.
    await _engineStatusSub?.cancel();
    _engineStatusSub = null;
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
