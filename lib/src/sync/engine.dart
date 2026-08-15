import 'dart:async';

import 'package:meta/meta.dart';

import '../core/change_bus.dart';
import '../core/local_pocket.dart';
import 'puller.dart';
import 'pusher.dart';
import 'status.dart';
import 'sweeper.dart';
import 'sync_backend.dart';
import 'sync_config.dart';
import 'sync_store.dart';
import '../files/file_sync_lane.dart';

/// Coordinates pull, visibility sweep, push, realtime hints, and file sync.
///
/// A typical application creates one engine for an open [LocalPocket]:
///
/// ```dart
/// final engine = SyncEngine(pocket: db, backend: backend);
/// await engine.start();
/// // Local writes continue to work offline.
/// final report = await engine.syncNow();
/// await engine.stop();
/// ```
///
/// Cycles are serialized and always pull before pushing so local merges use the
/// freshest remote base.
///
/// - Cycles are serialized (never overlapping).
/// - Pull-before-push: remote state lands first, so pushes work from the
///   freshest base.
/// - Auth loss pauses; connectivity loss parks; everything stays local-first.
class SyncEngine {
  final LocalPocket pocket;
  final SyncBackend backend;
  final SyncConfig config;

  late final SyncStore syncStore;
  late final Puller puller;
  late final Sweeper sweeper;
  late final Pusher pusher;
  late final FileSyncLane fileLane;

  SyncEngineState _state = SyncEngineState.closed;
  bool _started = false;
  bool _offline = false;
  bool _authInvalid = false;
  bool _paused = false;

  final StreamController<SyncEngineState> _stateController =
      StreamController<SyncEngineState>.broadcast();
  final StreamController<SyncStatus> _statusController =
      StreamController<SyncStatus>.broadcast();

  StreamSubscription<ChangeSet>? _changesSub;
  StreamSubscription<BackendHint>? _hintsSub;
  Timer? _syncTimer;
  Timer? _pushTimer;
  Timer? _settleTimer;

  /// Cycles are chained so no two run concurrently.
  Future<SyncReport> _cycleTail = Future.value(const SyncReport());

  SyncReport? lastReport;

  /// What each trigger scheduled, for tests.
  @visibleForTesting
  final List<String> debugActions = [];

  /// Creates a synchronization engine for [pocket] and [backend].
  SyncEngine({
    required this.pocket,
    required this.backend,
    SyncConfig? config,
  }) : config = config ?? const SyncConfig() {
    syncStore = SyncStore(pocket, backend.scopeId);
    fileLane = FileSyncLane(
      pocket: pocket,
      backend: backend,
      config: this.config,
      blobStore: pocket.blobStore,
    );
    puller = Puller(pocket, backend, this.config, syncStore,
        fileLane: fileLane);
    sweeper = Sweeper(pocket, backend, this.config, syncStore, puller);
    pusher = Pusher(pocket, backend, this.config, syncStore,
        onAuthError: _onAuthError);
  }

  /// Current lifecycle state.
  SyncEngineState get state => _state;

  /// Stream of lifecycle-state changes.
  Stream<SyncEngineState> get stateChanges => _stateController.stream;

  /// Stream of user-facing synchronization status snapshots.
  Stream<SyncStatus> get status => _statusController.stream;

  /// Whether [start] has been called and [stop] has not completed.
  bool get isRunning => _started;

  // ---------------------------------------------------------------- lifecycle

  /// Opens the engine: subscribes to local writes and backend hints, starts the
  /// periodic timer, and runs an initial cycle.
  Future<void> start() async {
    if (_started) return;
    _started = true;
    _transition(SyncEngineState.opening);
    // Adapter warm-up (batch probe etc.) before any push decision.
    try {
      await backend.prepare();
      pusher.batchEnabled = backend.capabilities.batchEnabled;
    } catch (_) {}
    _changesSub = pocket.changes.listen(handleLocalWrite);
    _hintsSub = backend.hints().listen(handleHint);
    _syncTimer = Timer.periodic(config.syncInterval, (_) => handleTimer());
    _transition(_effectiveIdle());
    await syncNow();
  }

  /// Stops timers, realtime subscriptions, and in-flight sync coordination.
  Future<void> stop() async {
    if (!_started) return;
    _started = false;
    _syncTimer?.cancel();
    _pushTimer?.cancel();
    _settleTimer?.cancel();
    // Drain any cycle already chained by a trigger that fired mid-shutdown so
    // no DB work outlives the pocket (teardown race).
    await _cycleTail;
    // ... and any status emission still querying the (soon-closed) DB.
    await _statusTail;
    await _changesSub?.cancel();
    await _hintsSub?.cancel();
    if (!_stateController.isClosed) _stateController.close();
    if (!_statusController.isClosed) _statusController.close();
    _state = SyncEngineState.closed;
  }

  SyncEngineState _effectiveIdle() {
    if (_paused) return SyncEngineState.paused;
    if (_offline) return SyncEngineState.offline;
    if (_authInvalid) return SyncEngineState.authRequired;
    return SyncEngineState.idle;
  }

  void _transition(SyncEngineState next) {
    if (!_started) {
      _state = next;
      return;
    }
    _state = next;
    if (!_stateController.isClosed) _stateController.add(next);
    _emitStatus();
  }

  Future<void> _statusTail = Future.value();

  Future<void> _emitStatus() {
    _statusTail = _statusTail.then((_) => _doEmitStatus());
    return _statusTail;
  }

  Future<void> _doEmitStatus() async {
    if (!_started) return;
    final counts = await syncStore.countAllStatus();
    final pending = counts.pending;
    final conflicts = counts.conflicts;
    final hidden = counts.hidden;
    if (!_statusController.isClosed) {
      _statusController.add(SyncStatus(
        state: _state,
        pending: pending,
        conflicts: conflicts,
        hidden: hidden,
        lastError: null,
      ));
    }
  }

  // ------------------------------------------------------------------ triggers

  /// A local write committed → debounced push.
  @visibleForTesting
  void handleLocalWrite(ChangeSet cs) {
    if (!_started || _paused || _authInvalid || _offline) return;
    debugActions.add('push');
    _scheduleCycle(config.pushDebounce);
  }

  /// A backend doorbell → debounced pull of that store (+ push). A `changed`
  /// hint carrying a full record takes the fast-path: applied directly
  /// when the local row is clean and the event is newer — never advancing the
  /// cursor; anything else falls back to the REST pull.
  @visibleForTesting
  void handleHint(BackendHint hint) {
    if (!_started) return;
    final rec = hint.record;
    if (rec != null && hint.kind == BackendHintKind.changed) {
      debugActions.add('fast:${hint.store}');
      unawaited(_fastPath(rec));
      return;
    }
    debugActions.add('pull:${hint.store}');
    _scheduleCycle(config.pushDebounce, stores: [hint.store]);
  }

  Future<void> _fastPath(RemoteRecord rec) async {
    if (!_started || _paused || _authInvalid || _offline) {
      _scheduleCycle(config.pushDebounce, stores: [rec.store]);
      return;
    }
    var applied = false;
    try {
      applied = await puller.fastPathApply(rec);
    } catch (_) {
      applied = false;
    }
    if (!applied) {
      _scheduleCycle(config.pushDebounce, stores: [rec.store]);
    }
  }

  /// Periodic timer → full cycle.
  @visibleForTesting
  void handleTimer() {
    if (!_started) return;
    debugActions.add('cycle');
    _runExclusiveCycle();
  }

  /// Manual `db.sync.now()` → full cycle, returns a report.
  Future<SyncReport> syncNow() {
    debugActions.add('cycle');
    return _runExclusiveCycle();
  }

  void _scheduleCycle(Duration debounce, {List<String>? stores}) {
    _pushTimer?.cancel();
    _pushTimer = Timer(debounce, () {
      if (stores == null) {
        _runExclusiveCycle();
      } else {
        _runExclusiveCycle(pullOnly: stores);
      }
    });
  }

  // ------------------------------------------------------------------- state

  void _onAuthError() {
    _authInvalid = true;
    _transition(SyncEngineState.authRequired);
  }

  /// The token became valid again: resume with a forced full
  /// sweep — visibility may have changed while unauthorized.
  Future<void> markAuthValid() async {
    if (!_authInvalid) return;
    _authInvalid = false;
    _transition(_effectiveIdle());
    await sweeper.sweepIfDue(force: true);
    await syncNow();
  }

  /// Connectivity changes. Reconnect settles before syncing.
  Future<void> setConnectivity(bool up) async {
    _offline = !up;
    if (up) {
      _settleTimer?.cancel();
      _settleTimer = Timer(config.connectivitySettle, () async {
        _transition(_effectiveIdle());
        await syncNow();
      });
    } else {
      _transition(SyncEngineState.offline);
    }
  }

  /// Pauses automatic synchronization while leaving local CRUD available.
  Future<void> pause() async {
    _paused = true;
    _transition(SyncEngineState.paused);
  }

  /// Resumes synchronization and immediately schedules a cycle.
  Future<void> resume() async {
    if (!_paused) return;
    _paused = false;
    _transition(_effectiveIdle());
    await syncNow();
  }

  /// Clears identity-scoped cursors and re-bootstraps every collection.
  ///
  /// Use after changing the remote identity or repairing cursor state.
  Future<void> fullResync() async {
    _transition(SyncEngineState.fullResync);
    for (final store in pocket.storeNames) {
      await syncStore.clearCursor(store);
    }
    await syncNow();
  }

  /// The app knows permissions changed (e.g. user joined a clinic).
  Future<void> invalidateVisibility() async {
    await sweeper.sweepIfDue(force: true);
    await syncNow();
  }

  // ------------------------------------------------------------------- cycle

  Future<SyncReport> _runExclusiveCycle({List<String>? pullOnly}) {
    final result = _cycleTail.then((_) => _doCycle(pullOnly: pullOnly));
    _cycleTail = result.then<SyncReport>((_) => const SyncReport(),
        onError: (Object _) => const SyncReport());
    return result;
  }

  Future<SyncReport> _doCycle({List<String>? pullOnly}) async {
    if (!_started) return const SyncReport();
    if (_paused || _authInvalid || _offline) {
      _transition(_effectiveIdle());
      return const SyncReport();
    }

    final pulled = <String, int>{};
    final swept = <String, int>{};
    var hadError = false;

    _transition(SyncEngineState.pulling);
    final stores = pullOnly ?? pocket.storeNames.toList();
    for (final store in stores) {
      try {
        final pr = await puller.pullStore(store);
        pulled[store] = pr.applied;
      } on AuthError {
        _onAuthError();
        break;
      } on SyncError {
        hadError = true;
      }
    }
    if (_authInvalid) {
      _transition(SyncEngineState.authRequired);
      lastReport = SyncReport(pulled: pulled, hadError: true);
      return lastReport!;
    }

    if (pullOnly == null) {
      try {
        final reports = await sweeper.sweepIfDue();
        for (final s in reports) {
          swept[s.store] = (swept[s.store] ?? 0) + s.scanned;
        }
      } on SyncError {
        hadError = true;
      }
    }

    _transition(SyncEngineState.pushing);
    var pushReport = const PushReport();
    try {
      pushReport = await pusher.pushPending();
    } on AuthError {
      _onAuthError();
    } on SyncError {
      hadError = true;
    }

    try {
      await fileLane.syncFiles();
    } catch (_) {
      hadError = true;
    }
    _transition(_effectiveIdle());
    lastReport = SyncReport(
      pulled: pulled,
      swept: swept,
      pushed: pushReport.pushed,
      deadLettered: pushReport.deadLettered,
      hadError: hadError || pushReport.hadError,
    );
    return lastReport!;
  }
}
