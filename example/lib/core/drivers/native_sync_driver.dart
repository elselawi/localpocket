import 'dart:async';

import 'package:flutter/foundation.dart';
import 'package:localpocket/localpocket.dart';

import '../sync_status.dart';
import 'sync_driver.dart';

/// Sync driver over the destination [PocketBaseSync] attachment: the
/// kernel-owned engine runs over the shared contract runtime, identically on
/// native and web.
class NativeSyncDriver implements SyncDriver {
  NativeSyncDriver(this._db);

  final LocalPocket _db;
  final ValueNotifier<PlaygroundSyncStatus> _status = ValueNotifier(
    PlaygroundSyncStatus.none(),
  );

  PocketBaseSync? _sync;
  bool _connected = false;

  @override
  ValueListenable<PlaygroundSyncStatus> get status => _status;

  @override
  bool get isConnected => _connected;

  @override
  Future<void> connect({required Uri baseUrl, String? token}) async {
    final tokens = StaticTokenProvider(token ?? '');
    final sync = _db.attachPocketBaseSync(
      PocketBaseSyncOptions(
        baseUrl: baseUrl,
        tokenProvider: tokens,
        identity: 'playground-account',
      ),
    );
    _sync = sync;
    sync.status.listen(_onStatus);
    _status.value = PlaygroundSyncStatus(
      state: 'opening',
      pending: 0,
      conflicts: 0,
      hidden: 0,
    );
    try {
      await sync.start();
      _connected = true;
      await sync.syncNow();
    } catch (e) {
      _status.value = PlaygroundSyncStatus(
        state: 'off',
        pending: 0,
        conflicts: 0,
        hidden: 0,
        lastError: '$e',
      );
      rethrow;
    }
  }

  void _onStatus(SyncStatus s) {
    _connected = s.state != SyncEngineState.closed;
    _status.value = PlaygroundSyncStatus(
      state: s.state.name,
      pending: s.pending,
      conflicts: s.conflicts,
      hidden: s.hidden,
      lastError: s.lastError,
      lastSyncAt: s.lastSyncAt,
    );
  }

  @override
  Future<void> syncNow() async {
    await _sync?.syncNow();
  }

  @override
  Future<void> disconnect() async {
    final s = _sync;
    if (s != null) {
      try {
        await s.stop();
      } catch (_) {}
    }
    _sync = null;
    _connected = false;
    _status.value = PlaygroundSyncStatus.none();
  }

  @override
  Future<void> dispose() async {
    await disconnect();
    _status.dispose();
  }
}
