import 'dart:async';

import 'package:localpocket/src/api/api.dart';
import 'package:localpocket/src/adapters/pocketbase/backend.dart'
    show PocketBaseSyncBackendFactory;
import 'package:test/test.dart';

import '../support/mock_pb_server.dart';
import 'tasks_store.dart';

class _FakeTokens implements TokenProvider {
  _FakeTokens(this._value);
  final String _value;
  @override
  Future<Token> currentToken() async => Token(_value);
  @override
  Future<Token> refreshToken(Token current) async => Token(_value);
  @override
  String get identity => 'sync-test';
}

/// The PocketBase sync attachment on the destination facade over the direct
/// runtime: the host drives the kernel-owned engine through the contract, so
/// the same surface also runs over the loopback/remote runtimes (covered by
/// the conformance suite).
void main() {
  group('PocketBaseSync attachment on the destination facade', () {
    test('start drives the kernel engine; lifecycle verbs round-trip',
        () async {
      final server = await MockPbServer().start();
      addTearDown(server.stop);
      final db = await LocalPocket.open(LocalPocketOptions(
        path: ':memory:',
        stores: [Tasks.store],
        syncBackendFactory: const PocketBaseSyncBackendFactory(),
      ));
      addTearDown(db.close);

      final sync = db.attachPocketBaseSync(PocketBaseSyncOptions(
        baseUrl: server.baseUrl,
        tokenProvider: _FakeTokens('jwt'),
        identity: 'sync-test',
      ));
      expect(sync.isRunning, isFalse);

      await sync.start();
      expect(sync.isRunning, isTrue);

      final report = await sync.syncNow();
      expect(report.pushed, isA<int>());
      expect(report.deadLettered, isA<int>());
      expect(report.discarded, isA<int>());
      expect(report.hadError, isA<bool>());

      await sync.pause();
      await sync.resume();
      await sync.setConnectivity(false);
      await sync.setConnectivity(true);
      await sync.updateAuth('refreshed-jwt');

      await sync.stop();
      expect(sync.isRunning, isFalse);
    });

    test('a runtime without a sync backend fails start typed', () async {
      final db = await LocalPocket.open(LocalPocketOptions(
        path: ':memory:',
        stores: [Tasks.store],
      ));
      addTearDown(db.close);
      final sync = db.attachPocketBaseSync(PocketBaseSyncOptions(
        baseUrl: Uri.parse('http://127.0.0.1:9'),
        tokenProvider: _FakeTokens('jwt'),
      ));
      await expectLater(
        sync.start(),
        throwsA(isA<StateError>()
            .having((e) => e.message, 'message', contains('No sync backend'))),
      );
    });

    test('status pushes snapshots and authRequired fires on a 401 server',
        () async {
      final server = await MockPbServer().start();
      addTearDown(server.stop);
      server.authRequired = true;
      server.validToken = 'expected-token';
      final db = await LocalPocket.open(LocalPocketOptions(
        path: ':memory:',
        stores: [Tasks.store],
        syncBackendFactory: const PocketBaseSyncBackendFactory(),
      ));
      addTearDown(db.close);

      final sync = db.attachPocketBaseSync(PocketBaseSyncOptions(
        baseUrl: server.baseUrl,
        tokenProvider: _FakeTokens('wrong-token'),
      ));
      final auth = sync.authRequired.first;
      await sync.start();
      await auth.timeout(const Duration(seconds: 5));

      // A subsequent transition pushes a status snapshot (the stream only
      // carries live events; pause forces a fresh one).
      final statusFuture = sync.status.first;
      await sync.pause();
      final status = await statusFuture.timeout(const Duration(seconds: 5));
      expect(status.state, isA<Object>());
      expect(status.pending, isA<int>());
      await sync.stop();
    });
  });
}
