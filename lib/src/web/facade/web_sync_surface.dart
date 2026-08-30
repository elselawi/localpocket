/// Pure-Dart sync surface the web adapter drives — declared separately from
/// the JS-bound `LocalPocket` facade so VM tests can drive the web sync
/// adapter against a fake, exactly like [WebFacadeHost].
library;

import 'dart:async';

import '../../sync/status.dart';

/// The main-thread sync verbs the web facade exposes (worker-backed).
abstract interface class WebSyncSurface {
  /// Starts the worker-side synchronization engine with the given
  /// credentials.
  Future<void> startSync({String? baseUrl, String? scopeId, String? token});

  /// Stops the worker-side synchronization engine.
  Future<void> stopSync();

  /// Triggers a manual synchronization cycle and returns its report.
  Future<SyncReport> syncNow();

  /// Pauses periodic and event-driven sync cycles in the worker.
  Future<void> pauseSync();

  /// Resumes synchronization cycles in the worker.
  Future<void> resumeSync();

  /// Informs the worker-side engine of online/offline connectivity changes.
  Future<void> setConnectivity(bool online);

  /// Replaces the authentication token held by the worker.
  Future<void> updateAuth(String? token);

  /// Worker-decoded sync status snapshots.
  Stream<Map<String, Object?>> get syncStatus;

  /// Fires when the worker reports that authentication is required again.
  Stream<void> get authRequired;
}
