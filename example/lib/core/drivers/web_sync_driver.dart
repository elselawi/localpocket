import 'dart:async';

import 'package:flutter/foundation.dart';
import 'package:localpocket/src/internal/raw_surface.dart';

import '../sync_status.dart';
import 'sync_driver.dart';

/// Web sync driver. The engine runs inside the worker; this drives it through
/// the facade's `startSync` / `syncStatus` surface.
///
/// The facade `LocalPocket` (on web) carries worker-side sync methods. We use
/// a `dynamic` receive so this file compiles cleanly on native targets too
/// (where those methods don't exist) while resolving to the web facade at
/// runtime.
class WebSyncDriver implements SyncDriver {
  WebSyncDriver(this._db);

  final LocalPocket _db;
  final ValueNotifier<PlaygroundSyncStatus> _status = ValueNotifier(
    PlaygroundSyncStatus.none(),
  );

  StreamSubscription<dynamic>? _sub;
  bool _connected = false;

  dynamic get _facade => _db; // on web this is the facade LocalPocket

  @override
  ValueListenable<PlaygroundSyncStatus> get status => _status;

  @override
  bool get isConnected => _connected;

  @override
  Future<void> connect({required Uri baseUrl, String? token}) async {
    // Engine lives in the worker; pass scope url + token.
    await _facade.startSync(
      baseUrl: baseUrl.toString(),
      scopeId: baseUrl.toString(),
      token: token ?? '',
    );
    _connected = true;
    _status.value = PlaygroundSyncStatus(
      state: 'opening',
      pending: 0,
      conflicts: 0,
      hidden: 0,
    );
    await _sub?.cancel();
    _sub = _facade.syncStatus.listen(
      (dynamic m) {
        if (m is Map) {
          _connected = true;
          _status.value = PlaygroundSyncStatus(
            state: (m['state'] as String?) ?? 'idle',
            pending: (m['pending'] as int?) ?? 0,
            conflicts: (m['conflicts'] as int?) ?? 0,
            hidden: (m['hidden'] as int?) ?? 0,
            lastError: m['lastError'] as String?,
            lastSyncAt: m['lastSyncAt'] as DateTime?,
          );
        }
      },
      onError: (Object e) {
        _status.value = PlaygroundSyncStatus(
          state: 'off',
          pending: 0,
          conflicts: 0,
          hidden: 0,
          lastError: '$e',
        );
      },
    );
  }

  @override
  Future<void> syncNow() async {
    await _facade.syncNow();
  }

  @override
  Future<void> disconnect() async {
    await _sub?.cancel();
    _sub = null;
    try {
      await _facade.stopSync();
    } catch (_) {}
    _connected = false;
    _status.value = PlaygroundSyncStatus.none();
  }

  @override
  Future<void> dispose() async {
    await disconnect();
    _status.dispose();
  }
}
