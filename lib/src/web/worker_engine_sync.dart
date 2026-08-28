/// Part of `worker_engine.dart` — sync engine lifecycle + auth (§8).
///
/// Wire handlers for `sync_start/stop/now/pause/resume/set_connectivity/
/// update_auth/status`. `sync_start` builds a `PocketBaseBackend` and the
/// core `SyncEngine`, forwards status/auth-required events to the client, and
/// starts realtime. Cross-cutting teardown (`WorkerEngineHost._stopSync`)
/// lives in the main file because `close` must stop sync too — one
/// implementation, no drift.
part of 'worker_engine.dart';

/// {@template localpocket.__web_token_provider}
/// Minimal worker-owned token bridge. The page remains responsible for
/// refresh; the current bearer value is replaced through sync_update_auth.
/// {@endtemplate}
final class _WebTokenProvider implements TokenProvider {

  /// {@macro localpocket.__web_token_provider}
  _WebTokenProvider(this.value, this.identityValue);
  String? value;
  final String identityValue;

  @override
  Future<Token> currentToken() async => Token(value ?? '');

  @override
  Future<Token> refreshToken(Token current) async => Token(value ?? '');

  @override
  String get identity => identityValue;
}

/// Sync + auth handlers (see the file doc above).
mixin WorkerSyncHandlers on WorkerEngineHost {
  Future<Object?> _handleSyncStart(WorkerEventSink sink, WebRequest req) async {
    final w = WireArgs(req.args);
    final baseUrl = w.optionalString('baseUrl');
    if (baseUrl == null || baseUrl.isEmpty) {
      throw ValidationException('syncStart requires baseUrl.');
    }
    await _stopSync();
    final token = w.optionalString('token');
    final scopeId = w.optionalString('scopeId') ?? 'web-sync';
    final provider = _WebTokenProvider(token, scopeId);
    final backend = PocketBaseBackend(
      baseUrl: Uri.parse(baseUrl),
      tokenProvider: provider,
      stores: pocket.storeNames.toList(),
      identity: scopeId,
    );
    late SyncEngine engine;
    engine = SyncEngine(
      pocket: pocket,
      backend: backend,
      onAuthRequired: () async {
        sink.emit({
          'v': webProtocolVersion,
          'op': WireOp.authRequired,
        });
      },
    );
    _tokenProvider = provider;
    _syncEngine = engine;
    _syncStatusSubscription = engine.status.listen((status) {
      _lastSyncStatus = status;
      sink.emit({
        'v': webProtocolVersion,
        'op': WireOp.syncStatus,
        'status': _encodeSyncStatus(status),
      });
    });
    await engine.start();
    await backend.startRealtime();
    return {'ok': true, 'state': engine.state.name};
  }

  Future<Object?> _handleSyncStop(WorkerEventSink sink, WebRequest req) async {
    await _stopSync();
    return {'ok': true};
  }

  Future<Object?> _handleSyncNow(WorkerEventSink sink, WebRequest req) async {
    final engine = _syncEngine;
    if (engine == null) throw StateError('Sync is not started.');
    final report = await engine.syncNow();
    return _encodeSyncReport(report);
  }

  Future<Object?> _handleSyncPause(WorkerEventSink sink, WebRequest req) async {
    final engine = _syncEngine;
    if (engine == null) throw StateError('Sync is not started.');
    await engine.pause();
    return {'ok': true};
  }

  Future<Object?> _handleSyncResume(
      WorkerEventSink sink, WebRequest req) async {
    final engine = _syncEngine;
    if (engine == null) throw StateError('Sync is not started.');
    await engine.resume();
    return {'ok': true};
  }

  Future<Object?> _handleSyncSetConnectivity(
      WorkerEventSink sink, WebRequest req) async {
    final engine = _syncEngine;
    if (engine == null) throw StateError('Sync is not started.');
    final online = WireArgs(req.args).requireBool(
      'online',
      op: 'sync_set_connectivity',
    );
    await engine.setConnectivity(online);
    return {'ok': true};
  }

  Future<Object?> _handleSyncUpdateAuth(
      WorkerEventSink sink, WebRequest req) async {
    final provider = _tokenProvider;
    final engine = _syncEngine;
    if (provider == null || engine == null) {
      throw StateError('Sync is not started.');
    }
    provider.value = WireArgs(req.args).optionalString('token');
    await engine.markAuthValid();
    return {'ok': true};
  }

  Future<Object?> _handleSyncStatus(
      WorkerEventSink sink, WebRequest req) async => _lastSyncStatus == null
        ? {'state': SyncEngineState.closed.name}
        : _encodeSyncStatus(_lastSyncStatus!);

  static Map<String, Object?> _encodeSyncStatus(SyncStatus status) => {
        'state': status.state.name,
        'pending': status.pending,
        'conflicts': status.conflicts,
        'hidden': status.hidden,
        'blocked': status.blocked,
        if (status.lastError != null) 'lastError': status.lastError,
        if (status.lastSyncAt != null)
          'lastSyncAt': encodeWireValue(status.lastSyncAt),
        if (status.lastSuccessfulSyncAt != null)
          'lastSuccessfulSyncAt': encodeWireValue(status.lastSuccessfulSyncAt),
      };

  static Map<String, Object?> _encodeSyncReport(SyncReport report) => {
        'pulled': report.pulled,
        'swept': report.swept,
        'pushed': report.pushed,
        'deadLettered': report.deadLettered,
        'discarded': report.discarded,
        'hadError': report.hadError,
      };
}
