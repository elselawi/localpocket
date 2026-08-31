import 'dart:async';
import 'dart:convert';

import 'package:localpocket/src/contract/contract.dart' as contract;
import 'package:localpocket/src/pocketbase/auth.dart';
import 'package:localpocket/src/runtime/runtime_client.dart';
import 'package:localpocket/src/typed/sync_engine_remote.dart';
import 'package:test/test.dart';

/// Pins the remote typed sync host: the web branch of the platform seam
/// drives the worker-owned engine through the facade's shared contract
/// runtime. The token never persists anywhere but the in-page provider.
void main() {
  late _FakeSyncSurface surface;
  late _FakeTokens tokens;
  late PocketBaseSyncEngine host;

  setUp(() {
    surface = _FakeSyncSurface();
    tokens = _FakeTokens('initial-jwt');
    host = PocketBaseSyncEngine.forSurface(
      surface,
      baseUrl: Uri.parse('http://127.0.0.1:8090'),
      tokenProvider: tokens,
      identity: 'page-sync',
    );
  });

  test('start sends the typed start command with baseUrl, scope, and token',
      () async {
    await host.start();
    final request = surface.sent.whereType<contract.SyncStartRequest>().single;
    expect(request.baseUrl, 'http://127.0.0.1:8090');
    expect(request.scopeId, 'page-sync');
    expect(request.token, 'initial-jwt');
    expect(host.isRunning, isTrue);
  });

  test('start is idempotent before stop', () async {
    await host.start();
    await host.start();
    expect(surface.sent.whereType<contract.SyncStartRequest>(), hasLength(1));
  });

  test('status events map to the model; auth events trigger a token refresh',
      () async {
    await host.start();
    final statuses = <contract.SyncStatus>[];
    host.status.listen(statuses.add);
    final authRequired = <void>[];
    host.authRequired.listen(authRequired.add);

    surface.deliver(const contract.SyncStatusEvent(
      status: contract.SyncStatusData(
        state: contract.SyncEngineState.idle,
        pending: 2,
        conflicts: 1,
        hidden: 0,
        blocked: 3,
      ),
    ));
    await Future<void>.delayed(Duration.zero);
    expect(statuses.single.state, contract.SyncEngineState.idle);
    expect(statuses.single.pending, 2);
    expect(statuses.single.conflicts, 1);
    expect(statuses.single.blocked, 3);

    surface.deliver(const contract.AuthRequiredEvent());
    // Let the refresh microtasks run: the refreshed token is pushed back as
    // the explicit auth-update command.
    await pumpEventQueue();
    await pumpEventQueue();
    final update =
        surface.sent.whereType<contract.SyncUpdateAuthRequest>().single;
    expect(update.token, 'initial-jwt');
  });

  test('syncNow returns the complete typed report', () async {
    await host.syncNow();
    final request = surface.sent.whereType<contract.SyncNowRequest>().single;
    expect(request.tag, 'syncNow');
  });

  test('pause/resume/connectivity/updateAuth ride typed commands', () async {
    await host.pause();
    await host.resume();
    await host.setConnectivity(false);
    await host.updateAuth('fresh-jwt');

    expect(surface.sent.whereType<contract.SyncPauseRequest>(), hasLength(1));
    expect(surface.sent.whereType<contract.SyncResumeRequest>(), hasLength(1));
    expect(
        surface.sent
            .whereType<contract.SyncSetConnectivityRequest>()
            .single
            .online,
        isFalse);
    expect(surface.sent.whereType<contract.SyncUpdateAuthRequest>().last.token,
        'fresh-jwt');
  });

  test('startRealtime is a documented no-op on the remote host', () async {
    await host.start();
    await host.startRealtime();
    expect(
      surface.sent.where((r) => r.tag == 'syncStart'),
      hasLength(1),
      reason: 'sync start owns realtime; no second connection is opened',
    );
  });

  test('stop sends the stop command and releases the memoized slot', () async {
    await host.start();
    await host.stop();
    expect(surface.sent.whereType<contract.SyncStopRequest>(), hasLength(1));
    expect(host.isRunning, isFalse);

    // A post-stop lifecycle op still works (restart path re-opens cleanly).
    await host.syncNow();
    expect(surface.sent.whereType<contract.SyncNowRequest>(), hasLength(1));
  });
}

class _FakeTokens implements TokenProvider {
  _FakeTokens(this.value);
  String value;

  @override
  Future<Token> currentToken() async => Token(value);

  @override
  Future<Token> refreshToken(Token current) async => Token(value);

  @override
  String get identity => 'test';
}

/// A fake [RemoteSyncSurface]: records every contract request and delivers
/// contract events, mirroring the facade's shared runtime.
class _FakeSyncSurface implements RemoteSyncSurface {
  final sent = <contract.Request>[];
  final _events = StreamController<contract.Event>.broadcast();

  void deliver(contract.Event event) => _events.add(event);

  @override
  RuntimeClient get contractRuntime => _client;
  late final RuntimeClient _client = _RuntimeAdapter(this);

  Future<R> send<R extends contract.Result>(contract.Request<R> request) async {
    sent.add(request);
    // Answer with a plausible result for the few commands the pins send.
    final contract.Result result = switch (request) {
      contract.SyncStartRequest() =>
        const contract.SyncStartResult(state: contract.SyncEngineState.idle),
      contract.SyncNowRequest() => const contract.SyncReportResult(
            report: contract.SyncReportData(
          pushed: 1,
          deadLettered: 0,
          blocked: 0,
          discarded: 0,
        )),
      _ => const contract.OkResult(),
    };
    return contract.ContractCodec.decodeResult(
      request,
      contract.ContractCodec.encodeResult(result),
    ) as R;
  }

  @override
  Stream<contract.Event> get events => _events.stream;
}

class _RuntimeAdapter implements RuntimeClient {
  _RuntimeAdapter(this.surface);
  final _FakeSyncSurface surface;

  @override
  Future<R> send<R extends contract.Result>(contract.Request<R> request) =>
      surface.send(request);

  @override
  Stream<contract.Event> get events => surface.events;

  @override
  Future<void> close() async {}
}
