import 'dart:async';

import 'package:meta/meta.dart';

import '../../kernel/change_bus.dart';
import '../../kernel/local_pocket.dart';
import 'apply_lane.dart';
import 'puller.dart';
import 'pusher.dart';
import 'status.dart';
import 'sweeper.dart';
import 'sync_backend.dart';
import 'sync_config.dart';
import 'sync_store.dart';
import '../files/file_sync.dart';

/// {@template localpocket.sync_engine}
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
/// Cycles are serialized (never overlapping) and always pull before pushing
/// so local merges use the freshest remote base. Auth loss pauses;
/// connectivity loss parks; everything stays local-first.
/// {@endtemplate}
class SyncEngine {
  /// Creates a synchronization engine for [pocket] and [backend].
  ///
  /// When [config] is omitted the engine inherits the pocket's injected clock
  /// so bookkeeping and scheduling stay on one clock.
  ///
  /// {@macro localpocket.sync_engine}
  SyncEngine({
    required this.pocket,
    required this.backend,
    SyncConfig? config,
    this.onAuthRequired,
  }) : config = config ?? SyncConfig(now: pocket.now) {
    syncStore = SyncStore(pocket, backend.scopeId);
    fileLane = FileSyncLane(
      pocket: pocket,
      backend: backend,
      config: this.config,
      blobStore: pocket.blobStore,
    );
    puller = Puller(pocket, backend, this.config, syncStore,
        fileLane: fileLane, applyLane: _applyLane);
    sweeper = Sweeper(pocket, backend, this.config, syncStore, puller);
    pusher = Pusher(pocket, backend, this.config, syncStore,
        onAuthError: _onAuthError);
  }

  /// The local pocket whose writes, outbox, and metadata this engine manages.
  final LocalPocket pocket;

  /// The remote backend that provides pull, push, hint, and file-sync work.
  final SyncBackend backend;

  /// The synchronization settings used for debounce windows, polling, and time.
  final SyncConfig config;

  /// Called when the backend reports that authentication is required again.
  ///
  /// The engine transitions to [SyncEngineState.authRequired] before invoking
  /// this callback.
  final FutureOr<void> Function()? onAuthRequired;

  /// Sync bookkeeping for cursor state, pending records, and status counters.
  late final SyncStore syncStore;

  /// Pull coordinator for applying remote records and continuing large stores.
  late final Puller puller;

  /// Visibility sweeper that re-checks hidden and permission-scoped records.
  late final Sweeper sweeper;

  /// Pusher responsible for flushing local writes to the backend.
  late final Pusher pusher;

  /// File transfer lane for blob upload and download synchronization.
  late final FileSyncLane fileLane;

  SyncEngineState _state = SyncEngineState.closed;
  bool _started = false;
  bool _offline = false;
  bool _authInvalid = false;
  bool _paused = false;

  // Re-created on restart: [stop] closes them, [start] opens fresh ones so a
  // restarted engine keeps delivering state/status events.
  StreamController<SyncEngineState> _stateController =
      StreamController<SyncEngineState>.broadcast();
  StreamController<SyncStatusData> _statusController =
      StreamController<SyncStatusData>.broadcast();

  /// Most recent cycle error, surfaced via [SyncStatusData.lastError]. Cleared on
  /// the next error-free cycle.
  String? _lastError;

  /// When the most recent cycle completed (success or error).
  DateTime? _lastSyncAt;

  /// Time of the most recent ERROR-FREE cycle, when available.
  DateTime? _lastSuccessfulSyncAt;

  /// Set when the next full cycle must run a forced (full-scan) visibility
  /// sweep — consumed by exactly one cycle so concurrent
  /// [markAuthValid]/[invalidateVisibility] calls never double-sweep.
  bool _forceSweepPending = false;

  /// Monotonic lifecycle generation: incremented on every start/stop so a
  /// stale async chain (cycle, fast-path, status emission) from a previous
  /// lifecycle can never affect the current one after a restart.
  int _generation = 0;

  bool _isCurrent(int generation) => _started && generation == _generation;

  /// In-flight realtime fast-path applies are chained so [stop] can wait for
  /// them and no DB work outlives the pocket (teardown race).
  Future<void> _fastPathTail = Future.value();

  /// Shared remote-application lane: every transaction writing remote state
  /// (pull pages, sweep batches, hidden marks, fast-path applies) is
  /// serialized here. Network work stays outside the lane.
  final ApplyLane _applyLane = ApplyLane();

  StreamSubscription<ChangeSet>? _changesSub;
  StreamSubscription<BackendHint>? _hintsSub;
  Timer? _syncTimer;
  Timer? _pushTimer;
  // Page-limit auto-continuation. MUST be a dedicated timer: the pull's own
  // applied writes re-arm the debounce timer via handleLocalWrite, which
  // would cancel a pending continuation before it fires.
  Timer? _catchupTimer;
  Timer? _settleTimer;

  /// Debounced trigger bookkeeping: a pending full cycle, or the accumulated
  /// stores of pending pull-only hints (merged so no hint is lost when two
  /// stores hint inside one debounce window).
  bool _pendingFull = false;
  final Set<String> _pendingPullOnly = {};

  /// Cycles are chained so no two run concurrently.
  Future<SyncReportData> _cycleTail = Future.value(const SyncReportData());

  /// The most recent sync report produced by the engine.
  SyncReportData? lastReport;

  /// What each trigger scheduled, for tests.
  @visibleForTesting
  final List<String> debugActions = [];

  /// Current lifecycle state.
  SyncEngineState get state => _state;

  /// Stream of lifecycle-state changes.
  Stream<SyncEngineState> get stateChanges => _stateController.stream;

  /// Stream of user-facing synchronization status snapshots.
  Stream<SyncStatusData> get status => _statusController.stream;

  /// Whether [start] has been called and [stop] has not completed.
  bool get isRunning => _started;

  // ---------------------------------------------------------------- lifecycle

  /// Opens the engine: subscribes to local writes and backend hints, starts the
  /// periodic timer, and runs an initial cycle. Restarting a stopped engine
  /// re-opens fresh state/status streams.
  Future<void> start() async {
    if (_started) return;
    final generation = ++_generation;
    // A restarted engine gets fresh streams: [stop] closed the previous ones.
    if (_stateController.isClosed || _statusController.isClosed) {
      _stateController = StreamController<SyncEngineState>.broadcast();
      _statusController = StreamController<SyncStatusData>.broadcast();
    }
    _started = true;
    await _transition(SyncEngineState.opening);
    // Adapter warm-up (batch probe etc.) before any push decision.
    try {
      await backend.prepare();
      if (!_isCurrent(generation)) return;
      pusher.batchEnabled = backend.capabilities.batchEnabled;
    } catch (_) {
      if (!_isCurrent(generation)) return;
    }
    try {
      _changesSub = pocket.changes.listen(handleLocalWrite);
      _hintsSub = backend.hints().listen(handleHint);
    } catch (_) {
      // A synchronous subscription failure must not leave a half-started
      // engine: roll back to closed so [start] can be retried.
      await stop();
      rethrow;
    }
    _syncTimer = Timer.periodic(config.syncInterval, (_) => handleTimer());
    await _transition(_effectiveIdle());
    if (_isCurrent(generation)) {
      await syncNow();
    }
  }

  /// Stops timers, realtime subscriptions, and in-flight sync coordination.
  Future<void> stop() async {
    if (!_started) return;
    _started = false;
    _generation++;
    _syncTimer?.cancel();
    _pushTimer?.cancel();
    _catchupTimer?.cancel();
    _settleTimer?.cancel();
    // Drain any cycle already chained by a trigger that fired mid-shutdown so
    // no DB work outlives the pocket (teardown race).
    await _cycleTail;
    // ... and any realtime fast-path apply that was still in flight.
    await _fastPathTail;
    // ... and any remote apply still in the shared lane (cycles enqueue
    // applies while they drain, so the lane is drained after both tails).
    await _applyLane.idle;
    // ... and any status emission still querying the (soon-closed) DB.
    await _statusTail;
    await _changesSub?.cancel();
    await _hintsSub?.cancel();
    // Emit the final `closed` transition before closing the stream so
    // subscribers observe the terminal state.
    if (!_stateController.isClosed) {
      _state = SyncEngineState.closed;
      _stateController.add(SyncEngineState.closed);
      await _stateController.close();
    } else {
      _state = SyncEngineState.closed;
    }
    if (!_statusController.isClosed) await _statusController.close();
    _state = SyncEngineState.closed;
  }

  SyncEngineState _effectiveIdle() {
    if (_paused) return SyncEngineState.paused;
    if (_offline) return SyncEngineState.offline;
    if (_authInvalid) return SyncEngineState.authRequired;
    return SyncEngineState.idle;
  }

  Future<void> _transition(SyncEngineState next) async {
    if (!_started) {
      _state = next;
      return;
    }
    _state = next;
    if (!_stateController.isClosed) _stateController.add(next);
    await _emitStatus();
  }

  Future<void> _statusTail = Future.value();

  Future<void> _emitStatus() {
    _statusTail = _statusTail.then((_) => _doEmitStatus());
    return _statusTail;
  }

  Future<void> _doEmitStatus() async {
    final generation = _generation;
    if (!_isCurrent(generation)) return;
    int pending = 0;
    int conflicts = 0;
    int hidden = 0;
    int blocked = 0;
    try {
      final counts = await syncStore.countAllStatus();
      pending = counts.pending;
      conflicts = counts.conflicts;
      hidden = counts.hidden;
      blocked = counts.blocked;
    } catch (_) {
      // The status snapshot is best-effort: a failed count query must never
      // poison the status chain or crash the engine.
    }
    if (!_statusController.isClosed) {
      _statusController.add(SyncStatusData(
        state: _state,
        pending: pending,
        conflicts: conflicts,
        hidden: hidden,
        blocked: blocked,
        lastError: _lastError,
        lastSyncAt: _lastSyncAt,
        lastSuccessfulSyncAt: _lastSuccessfulSyncAt,
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
  /// hint carrying a full record takes the fast-path (applied directly when
  /// the local row is clean and newer — never advancing the cursor);
  /// anything else falls back to the REST pull.
  @visibleForTesting
  void handleHint(BackendHint hint) {
    if (!_started) return;
    // A hint for an unmanaged store must NEVER schedule a cycle: pulling it
    // throws a non-SyncError StateError that aborts the whole cycle and
    // wedges the engine in `pulling`. Drop it here.
    if (!pocket.storeNames.contains(hint.store)) return;
    final rec = hint.record;
    if (rec != null && hint.kind == BackendHintKind.changed) {
      debugActions.add('fast:${hint.store}');
      _fastPathTail = _fastPathTail.then((_) => _fastPath(rec));
      return;
    }
    debugActions.add('pull:${hint.store}');
    _scheduleCycle(config.pushDebounce, stores: [hint.store]);
  }

  Future<void> _fastPath(RemoteRecord rec) async {
    final generation = _generation;
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
    if (!_isCurrent(generation)) return; // stale lifecycle
    if (!applied) {
      _scheduleCycle(config.pushDebounce, stores: [rec.store]);
    }
  }

  /// Periodic timer → full cycle.
  @visibleForTesting
  void handleTimer() {
    if (!_started) return;
    debugActions.add('cycle');
    unawaited(_runExclusiveCycle());
  }

  /// Manual `db.sync.now()` → full cycle, returns a report.
  Future<SyncReportData> syncNow() {
    debugActions.add('cycle');
    return _runExclusiveCycle();
  }

  void _scheduleCycle(Duration debounce, {List<String>? stores}) {
    _pushTimer?.cancel();
    if (stores == null) {
      // A full cycle is a superset of any pending pull-only hint: remember it
      // so the accumulated hints are not lost when the full cycle fires.
      _pendingFull = true;
    } else {
      // Merge stores so two hints in one debounce window both survive.
      _pendingPullOnly.addAll(stores);
    }
    _pushTimer = Timer(debounce, () {
      final full = _pendingFull;
      final pullOnly = _pendingPullOnly.toList();
      _pendingFull = false;
      _pendingPullOnly.clear();
      if (full || pullOnly.isEmpty) {
        unawaited(_runExclusiveCycle());
      } else {
        unawaited(_runExclusiveCycle(pullOnly: pullOnly));
      }
    });
  }

  /// Immediately continues a store whose pull stopped at the per-pass page
  /// cap, so a large store drains without waiting for the next interval.
  /// Uses [_catchupTimer] so the re-armed debounce cannot cancel it.
  void _scheduleCatchup(List<String> stores) {
    _catchupTimer?.cancel();
    _catchupTimer = Timer(Duration.zero, () {
      _catchupTimer = null;
      if (!_started) return;
      unawaited(_runExclusiveCycle(pullOnly: stores));
    });
  }

  // ------------------------------------------------------------------- state

  void _onAuthError() {
    _authInvalid = true;
    unawaited(_transition(SyncEngineState.authRequired));
    final callback = onAuthRequired;
    if (callback != null) {
      unawaited(Future<void>.sync(callback));
    }
  }

  /// The token became valid again: resume with a forced full
  /// sweep — visibility may have changed while unauthorized — and requeue any
  /// blocked pushes so the next cycle retries them.
  Future<void> markAuthValid() async {
    if (!_authInvalid) return;
    _authInvalid = false;
    _forceSweepPending = true;
    await pocket.outbox.requeueBlocked();
    await _transition(_effectiveIdle());
    await syncNow();
  }

  /// Connectivity changes. Reconnect settles before syncing.
  Future<void> setConnectivity(bool up) async {
    _offline = !up;
    if (up) {
      _settleTimer?.cancel();
      _settleTimer = Timer(config.connectivitySettle, () async {
        await _transition(_effectiveIdle());
        await syncNow();
      });
    } else {
      await _transition(SyncEngineState.offline);
    }
  }

  /// Pauses automatic synchronization while leaving local CRUD available.
  Future<void> pause() async {
    _paused = true;
    await _transition(SyncEngineState.paused);
  }

  /// Resumes synchronization and immediately schedules a cycle.
  Future<void> resume() async {
    if (!_paused) return;
    _paused = false;
    await _transition(_effectiveIdle());
    await syncNow();
  }

  /// Clears identity-scoped cursors and re-bootstraps every collection.
  ///
  /// Use after changing the remote identity or repairing cursor state.
  Future<void> fullResync() async {
    await _transition(SyncEngineState.fullResync);
    for (final store in pocket.storeNames) {
      await syncStore.clearCursor(store);
    }
    await syncNow();
  }

  /// The app knows permissions changed (e.g. user joined a clinic): requeue
  /// any blocked pushes (they may now be permitted) and force a full sweep.
  Future<void> invalidateVisibility() async {
    await pocket.outbox.requeueBlocked();
    _forceSweepPending = true;
    await syncNow();
  }

  // ------------------------------------------------------------------- cycle

  Future<SyncReportData> _runExclusiveCycle({List<String>? pullOnly}) {
    // A full cycle pulls every store anyway, so a pending page-limit catchup
    // would only re-pull the same store redundantly.
    if (pullOnly == null) _catchupTimer?.cancel();
    final result = _cycleTail.then((_) => _doCycle(pullOnly: pullOnly));
    _cycleTail = result.then<SyncReportData>((_) => const SyncReportData(),
        onError: (Object _) => const SyncReportData());
    return result;
  }

  Future<SyncReportData> _doCycle({List<String>? pullOnly}) async {
    final generation = _generation;
    if (!_isCurrent(generation)) return const SyncReportData();
    if (_paused || _authInvalid || _offline) {
      await _transition(_effectiveIdle());
      return const SyncReportData();
    }

    final pulled = <String, int>{};
    final swept = <String, int>{};
    var hadError = false;
    // A push is only safe against freshly-pulled remote state; a failed
    // pull defers the push to the next fully-pulled cycle.
    var pullFailed = false;
    // Stores whose pull hit the per-pass page cap with a full page:
    // continued immediately (page-limit auto-continuation).
    final hitLimitStores = <String>[];

    await _transition(SyncEngineState.pulling);
    final stores = pullOnly ?? pocket.storeNames.toList();
    for (final store in stores) {
      try {
        final pr = await puller.pullStore(store);
        pulled[store] = pr.applied;
        if (pr.hitPageLimit && pr.applied > 0) hitLimitStores.add(store);
      } on AuthError {
        _onAuthError();
        break;
      } on SyncError catch (e) {
        hadError = true;
        pullFailed = true;
        _lastError = e.message;
      }
    }
    if (_authInvalid) {
      await _transition(SyncEngineState.authRequired);
      lastReport = SyncReportData(pulled: pulled, hadError: true);
      return lastReport!;
    }

    if (pullOnly == null) {
      try {
        final force = _forceSweepPending;
        _forceSweepPending = false;
        final reports = await sweeper.sweepIfDue(force: force);
        for (final s in reports) {
          swept[s.store] = (swept[s.store] ?? 0) + s.scanned;
        }
      } on SyncError catch (e) {
        hadError = true;
        _lastError = e.message;
      }
    }

    await _transition(SyncEngineState.pushing);
    var pushReport = const PushReport();
    if (pullFailed) {
      // Do not push against stale remote state (see `pullFailed` above): the
      // local outbox stays dirty and is pushed on the next fully-pulled cycle.
      _lastError ??= 'pull failed; push deferred';
    } else {
      try {
        pushReport = await pusher.pushPending();
        if (pushReport.hadError && _lastError == null) {
          // Surface the sync-row-recorded failure so SyncStatus.lastError
          // carries the real message.
          final errRows =
              await pocket.db.rawQuery('SELECT last_error FROM lp_sync_row '
                  'WHERE last_error IS NOT NULL '
                  'ORDER BY local_rev DESC, rowid DESC LIMIT 1');
          if (errRows.isNotEmpty && errRows.first['last_error'] is String) {
            _lastError = errRows.first['last_error']! as String;
          } else {
            _lastError = 'push failed';
          }
        }
      } on AuthError {
        _onAuthError();
      } on SyncError catch (e) {
        hadError = true;
        _lastError = e.message;
      }
    }

    try {
      final fileReport = await fileLane.syncFiles();
      hadError = hadError || fileReport.hadError;
      if (fileReport.hadError && _lastError == null) {
        _lastError = 'file sync failed';
      }
    } catch (e) {
      hadError = true;
      _lastError = '$e';
    }
    // A stale cycle (from a previous lifecycle) must not mutate the new
    // lifecycle's status or schedule work.
    if (!_isCurrent(generation)) return const SyncReportData();
    // Page-limit exhaustion: catch up immediately (only when the pull made
    // progress, so a stuck store cannot busy-loop the engine).
    if (hitLimitStores.isNotEmpty) {
      _scheduleCatchup(hitLimitStores);
    }
    // A completed cycle is a heartbeat; a transient failure parks the
    // engine in `backoff` until the next error-free cycle.
    final cycleHadError = hadError || pushReport.hadError;
    final now = DateTime.fromMillisecondsSinceEpoch(config.now());
    _lastSyncAt = now;
    if (!cycleHadError) {
      _lastSuccessfulSyncAt = now;
      _lastError = null;
    }
    final idle = _effectiveIdle();
    await _transition(cycleHadError && idle == SyncEngineState.idle
        ? SyncEngineState.backoff
        : idle);
    lastReport = SyncReport(
      pulled: pulled,
      swept: swept,
      pushed: pushReport.pushed,
      deadLettered: pushReport.deadLettered,
      blocked: pushReport.blocked,
      discarded: pushReport.discarded,
      hadError: cycleHadError,
    );
    return lastReport!;
  }
}
