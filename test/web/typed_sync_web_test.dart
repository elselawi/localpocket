import 'dart:async';

import 'package:localpocket/src/pocketbase/auth.dart';
import 'package:localpocket/src/sync/status.dart';
import 'package:localpocket/src/web/facade/web_sync_surface.dart';
import 'package:localpocket/src/web/typed_sync_web.dart';
import 'package:test/test.dart';

class FakeTokens implements TokenProvider {
  FakeTokens(this.value);

  String value;
  int refreshes = 0;

  @override
  Future<Token> currentToken() async => Token(value);

  @override
  Future<Token> refreshToken(Token current) async {
    refreshes++;
    return Token('refreshed-$value');
  }

  @override
  String? get identity => 'test-user';
}

class RecordingSyncSurface implements WebSyncSurface {
  String? startedBaseUrl;
  String? startedScopeId;
  String? startedToken;
  int startCalls = 0;
  int stopCalls = 0;
  int pauseCalls = 0;
  int resumeCalls = 0;
  bool? lastConnectivity;
  String? updatedToken;
  final SyncReport report = const SyncReport(pushed: 3, discarded: 1);
  final StreamController<Map<String, Object?>> statusController =
      StreamController<Map<String, Object?>>.broadcast();
  final StreamController<void> authController =
      StreamController<void>.broadcast();

  @override
  Future<void> startSync(
      {String? baseUrl, String? scopeId, String? token}) async {
    startCalls++;
    startedBaseUrl = baseUrl;
    startedScopeId = scopeId;
    startedToken = token;
  }

  @override
  Future<void> stopSync() async {
    stopCalls++;
  }

  @override
  Future<SyncReport> syncNow() async => report;

  @override
  Future<void> pauseSync() async {
    pauseCalls++;
  }

  @override
  Future<void> resumeSync() async {
    resumeCalls++;
  }

  @override
  Future<void> setConnectivity(bool online) async {
    lastConnectivity = online;
  }

  @override
  Future<void> updateAuth(String? token) async {
    updatedToken = token;
  }

  @override
  Stream<Map<String, Object?>> get syncStatus => statusController.stream;

  @override
  Stream<void> get authRequired => authController.stream;
}

void main() {
  late RecordingSyncSurface surface;
  late FakeTokens tokens;
  late PocketBaseSyncEngine host;

  setUp(() {
    surface = RecordingSyncSurface();
    tokens = FakeTokens('tok');
    host = PocketBaseSyncEngine.forSurface(
      surface,
      baseUrl: Uri.parse('https://pb.example.com'),
      tokenProvider: tokens,
      identity: 'user-1',
    );
  });

  tearDown(() async {
    await surface.statusController.close();
    await surface.authController.close();
  });

  test('start maps config to startSync and is idempotent', () async {
    await host.start();
    expect(surface.startCalls, 1);
    expect(surface.startedBaseUrl, 'https://pb.example.com');
    expect(surface.startedScopeId, 'user-1');
    expect(surface.startedToken, 'tok');
    expect(host.isRunning, isTrue);
    await host.start();
    expect(surface.startCalls, 1);
  });

  test('authRequired refreshes in-page and pushes the new token', () async {
    await host.start();
    surface.authController.add(null);
    await pumpEventQueue();
    await pumpEventQueue();
    await pumpEventQueue();
    expect(tokens.refreshes, 1);
    expect(surface.updatedToken, 'refreshed-tok');
  });

  test('lifecycle verbs delegate to the surface', () async {
    await host.start();
    final report = await host.syncNow();
    expect(report.pushed, 3);
    await host.pause();
    await host.resume();
    await host.setConnectivity(false);
    await host.startRealtime(); // documented no-op on web
    await host.updateAuth('new-token');
    expect(surface.pauseCalls, 1);
    expect(surface.resumeCalls, 1);
    expect(surface.lastConnectivity, isFalse);
    expect(surface.updatedToken, 'new-token');
  });

  test('status stream decodes wire snapshots', () async {
    final future = expectLater(
      host.status,
      emits(predicate<SyncStatus>(
          (s) => s.state == SyncEngineState.pulling && s.pending == 7)),
    );
    surface.statusController.add(const {
      'state': 'pulling',
      'pending': 7,
      'conflicts': 0,
      'hidden': 0,
    });
    await future;
  });

  test('stop is idempotent and closes the auth bridge', () async {
    await host.start();
    await host.stop();
    expect(surface.stopCalls, 1);
    expect(host.isRunning, isFalse);
    await host.stop();
    expect(surface.stopCalls, 1);
  });
}
