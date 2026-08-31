import 'dart:async';

import '../sync/status.dart';
import 'protocol.dart';

/// Fails every worker-owned stream with a [DatabaseWorkerClosedException]
/// without closing the controllers.
///
/// The facade's graceful `close()` owns controller disposal. An unexpected
/// worker close only reports the terminal error and clears registrations, so
/// the later graceful teardown can close each controller exactly once.
void failWorkerStreams({
  required StreamController<SyncStatus> syncStatusController,
  required StreamController<void> authRequiredController,
  Object? error,
}) {
  final terminalError = error ??
      DatabaseWorkerClosedException('The database worker closed unexpectedly.');
  if (!syncStatusController.isClosed) {
    syncStatusController.addError(terminalError);
  }
  if (!authRequiredController.isClosed) {
    authRequiredController.addError(terminalError);
  }
}

/// Validates web open configuration before asset loading and worker initialization.
///
/// Throws [UnsupportedError] if unsupported options (like whole-database encryption
/// via SQLCipher) are requested on web.
void validateWebOpenConfig({required String path, required bool encrypted}) {
  if (encrypted) {
    throw UnsupportedError('SQLCipher is unsupported on web platform.');
  }
  if (path == ':memory:') {
    throw UnsupportedError(
      'Web platform does not support in-memory databases (:memory:). '
      'Use an explicitly named database path instead.',
    );
  }
}

/// Coordinates web database shutdown so the worker receives its close request
/// before the page-side facade becomes closed.
Future<void> closeWebResources({
  required Future<void> Function() sendWorkerClose,
  required void Function() markClosed,
  required Future<void> Function() disposePageResources,
}) async {
  try {
    await sendWorkerClose();
  } catch (_) {
    // Page-side disposal must still run when the worker is already gone or
    // rejects the close request.
  } finally {
    markClosed();
  }
  await disposePageResources();
}

/// Tracks pending watch registrations and unregistrations across the asynchronous
/// worker boundary to prevent watcher leaks on early subscription cancellation.
class WatchSubscriptionTracker {
  final Set<int> _inFlightRegistrations = {};
  final Set<int> _inFlightUnregistrations = {};

  /// Runs [register] while tracking [watchId] as in-flight. If an unregistration
  /// request occurred while [register] was awaiting, [unregister] is invoked immediately.
  Future<void> runRegistration({
    required int watchId,
    required Future<void> Function() register,
    required Future<void> Function() unregister,
  }) async {
    _inFlightRegistrations.add(watchId);
    try {
      await register();
    } finally {
      _inFlightRegistrations.remove(watchId);
      if (_inFlightUnregistrations.remove(watchId)) {
        await unregister();
      }
    }
  }

  /// Requests unregistration for [watchId]. If [watchId] is currently in-flight
  /// during registration, delays cancellation until registration finishes.
  Future<void> requestUnregistration({
    required int watchId,
    required Future<void> Function() unregister,
  }) async {
    if (_inFlightRegistrations.contains(watchId)) {
      _inFlightUnregistrations.add(watchId);
      return;
    }
    await unregister();
  }

  /// Returns whether [watchId] is still in the middle of registration.
  bool isRegistrationInFlight(int watchId) =>
      _inFlightRegistrations.contains(watchId);

  /// Returns whether an unregistration request is pending for [watchId].
  bool isUnregistrationPending(int watchId) =>
      _inFlightUnregistrations.contains(watchId);
}
