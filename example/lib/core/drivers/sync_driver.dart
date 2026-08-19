import 'package:flutter/foundation.dart';

import '../sync_status.dart';

/// Platform-neutral interface for driving PocketBase sync.
///
/// On native this is implemented by an in-process [SyncEngine]; on web the
/// engine runs inside the worker and the facade's `startSync` surface drives it.
abstract class SyncDriver {
  /// Live sync status (a [ValueNotifier]).
  ValueListenable<PlaygroundSyncStatus> get status;

  /// Whether a connect request has succeeded.
  bool get isConnected;

  /// Connects to [baseUrl] with an optional [token].
  Future<void> connect({required Uri baseUrl, String? token});

  /// Disconnects (best-effort).
  Future<void> disconnect();

  /// Triggers an immediate sync cycle.
  Future<void> syncNow();

  /// Releases resources.
  Future<void> dispose();
}
