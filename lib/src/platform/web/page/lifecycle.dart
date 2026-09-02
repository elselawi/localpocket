import 'dart:async';

import '../../../kernel/sync/status.dart';
import 'protocol.dart';

/// Fails every worker-owned stream with a [DatabaseWorkerClosedException]
/// without closing the controllers. The graceful `close()` owns controller
/// disposal; an unexpected worker close only reports the terminal error and
/// clears registrations so teardown still closes each controller exactly once.
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

/// A queued unregistration: the captured worker-cancel callback plus the
/// completer that resolves the requester's future once the callback ran.
class _DeferredUnregistration {
  _DeferredUnregistration(this.unregister);

  final Future<void> Function() unregister;
  final Completer<void> completer = Completer<void>();
}

/// Tracks pending watch registrations and unregistrations across the asynchronous
/// worker boundary to prevent watcher leaks on early subscription cancellation.
class WatchSubscriptionTracker {
  final Set<int> _inFlightRegistrations = {};
  final Map<int, _DeferredUnregistration> _deferredUnregistrations = {};

  /// Runs [register] while tracking [watchId] as in-flight. If an unregistration
  /// request occurred while [register] was awaiting, the callback captured by
  /// that request is invoked before [runRegistration] completes.
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
      final deferred = _deferredUnregistrations.remove(watchId);
      if (deferred != null) {
        try {
          await deferred.unregister();
          deferred.completer.complete();
        } catch (e, st) {
          deferred.completer.completeError(e, st);
          rethrow;
        }
      }
    }
  }

  /// Requests unregistration for [watchId]. If [watchId] is currently in-flight
  /// during registration, the cancellation is queued behind it and the returned
  /// future completes only AFTER the deferred unregister callback has run —
  /// awaiting it therefore always means the worker-side cancellation is done,
  /// never merely queued.
  Future<void> requestUnregistration({
    required int watchId,
    required Future<void> Function() unregister,
  }) async {
    if (_inFlightRegistrations.contains(watchId)) {
      final deferred = _DeferredUnregistration(unregister);
      _deferredUnregistrations[watchId] = deferred;
      return deferred.completer.future;
    }
    await unregister();
  }

  /// Returns whether [watchId] is still in the middle of registration.
  bool isRegistrationInFlight(int watchId) =>
      _inFlightRegistrations.contains(watchId);

  /// Returns whether an unregistration request is pending for [watchId].
  bool isUnregistrationPending(int watchId) =>
      _deferredUnregistrations.containsKey(watchId);
}
