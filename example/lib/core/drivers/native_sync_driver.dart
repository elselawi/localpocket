import 'dart:async';

import 'package:flutter/foundation.dart';
import 'package:localpocket/localpocket.dart';

import '../sync_status.dart';
import 'sync_driver.dart';

/// A [TokenProvider] that supplies a fixed bearer token.
class StaticTokenProvider implements TokenProvider {
  StaticTokenProvider(this.value);

  String value;

  @override
  Future<Token> currentToken() async => Token(value);

  @override
  Future<Token> refreshToken(Token current) async => Token(value);

  @override
  String get identity => _fingerprint(value);

  static String _fingerprint(String v) {
    var h = 0x811c9dc5;
    for (final code in v.codeUnits) {
      h ^= code;
      h = (h * 0x01000193) & 0x7fffffff;
    }
    return h.toRadixString(16);
  }
}

/// Native in-process sync driver backed by [SyncEngine].
class NativeSyncDriver implements SyncDriver {
  NativeSyncDriver(this._db);

  final LocalPocket _db;
  final ValueNotifier<PlaygroundSyncStatus> _status = ValueNotifier(
    PlaygroundSyncStatus.none(),
  );

  SyncEngine? _engine;
  bool _connected = false;

  @override
  ValueListenable<PlaygroundSyncStatus> get status => _status;

  @override
  bool get isConnected => _connected;

  @override
  Future<void> connect({required Uri baseUrl, String? token}) async {
    final tokens = StaticTokenProvider(token ?? '');
    final backend = PocketBaseBackend(
      baseUrl: baseUrl,
      tokenProvider: tokens,
      stores: const ['users', 'tasks', 'posts', 'metrics', 'secrets'],
    );
    final engine = SyncEngine(
      pocket: _db,
      backend: backend,
      config: const SyncConfig(
        syncInterval: Duration(minutes: 1),
        pushDebounce: Duration(milliseconds: 200),
      ),
    );
    _engine = engine;
    engine.status.listen(_onStatus);
    _status.value = PlaygroundSyncStatus(
      state: 'opening',
      pending: 0,
      conflicts: 0,
      hidden: 0,
    );
    try {
      await engine.start();
      _connected = true;
      await engine.syncNow();
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
    await _engine?.syncNow();
  }

  @override
  Future<void> disconnect() async {
    final e = _engine;
    if (e != null) {
      try {
        await e.stop();
      } catch (_) {}
    }
    _engine = null;
    _connected = false;
    _status.value = PlaygroundSyncStatus.none();
  }

  @override
  Future<void> dispose() async {
    await disconnect();
    _status.dispose();
  }
}
