import 'dart:convert';

import 'package:localpocket/localpocket.dart';
import 'package:localpocket/pocketbase.dart';
import 'package:localpocket/sync.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import 'mock_pb_server.dart';
import 'pb_helpers.dart';

/// Auth lifecycle tests.
void main() {
  group('auth lifecycle', () {
    test('tokens never in sqlite or logs', () async {
      final server = await MockPbServer().start();
      final tokens = TestTokenProvider(tokenValue: 'supersecret-token-xyz');
      final h = await PbEngineHarness.create(server: server, tokens: tokens);
      addTearDown(() async {
        await h.close();
        await server.stop();
      });

      await h.pocket.collection('widgets').put(record(name: 'a'));
      await h.engine.syncNow();

      // The token traveled in the Authorization header (and the realtime
      // subscribe POST body), but never in any record payload...
      expect(server.receivedTokens['header'],
          contains('Bearer supersecret-token-xyz'));
      for (final r in server.records.values) {
        expect(jsonEncode(r.data), isNot(contains('supersecret-token-xyz')));
      }
      // ...and never in SQLite, across every table.
      expect(await dbContains(h.pocket, 'supersecret-token-xyz'), isFalse);
    });

    test('single flight refresh under concurrent 401', () async {
      final server = await MockPbServer().start();
      server.authRequired = true;
      server.validToken = 'fresh-token';
      final tokens = TestTokenProvider(
          tokenValue: 'stale-token',
          refreshTo: 'fresh-token',
          refreshDelay: const Duration(milliseconds: 40));
      final backend = PocketBaseBackend(
        baseUrl: server.baseUrl,
        tokenProvider: tokens,
        stores: const [],
      );
      addTearDown(() async {
        backend.close();
        await server.stop();
      });

      // Five concurrent creates: every one 401s once with the stale token,
      // then shares a single refresh and retries.
      final futures = [
        for (var i = 0; i < 5; i++)
          backend.createRecord(
              id: generateRecordId(),
              store: 'widgets',
              dataJson: '{"name":"x$i"}'),
      ];
      await Future.wait(futures);
      expect(tokens.refreshCalls, 1, reason: 'single-flight refresh');
      expect(server.createCalls, 10, reason: '5 first attempts + 5 retries');
      expect(server.records.length, 5);
    });

    test('proactive refresh at 75pct', () async {
      final server = await MockPbServer().start();
      server.authRequired = true;
      server.validToken = 'fresh-token';
      final now = DateTime.now();
      final tokens = TestTokenProvider(
          tokenValue: 'old-token',
          refreshTo: 'fresh-token',
          issuedAt: now.subtract(const Duration(seconds: 9)),
          expiresAt: now.add(const Duration(seconds: 1)));
      // 1 s left of a 10 s lifetime -> remainingFraction 0.1 < 0.25.
      expect(
          Token('x',
                  expiresAt: now.add(const Duration(seconds: 1)),
                  issuedAt: now.subtract(const Duration(seconds: 9)))
              .needsProactiveRefresh,
          isTrue);

      final backend = PocketBaseBackend(
        baseUrl: server.baseUrl,
        tokenProvider: tokens,
        stores: const [],
      );
      addTearDown(() async {
        backend.close();
        await server.stop();
      });

      await backend.createRecord(
          id: generateRecordId(), store: 'widgets', dataJson: '{"name":"x"}');
      // The refresh happened BEFORE the request: only one request, with the
      // fresh token, and zero 401s.
      expect(tokens.refreshCalls, 1, reason: 'proactive refresh');
      expect(server.createCalls, 1);
      expect(server.lastAuthHeader, 'Bearer fresh-token');
    });

    test('401 refresh retry once then pause', () async {
      final server = await MockPbServer().start();
      server.authRequired = true;
      server.validToken = 'never-valid';
      addTearDown(() => server.stop());

      // (a) One request: 401 -> refresh once -> retry once -> still 401 ->
      // AuthError (never a silent retry loop).
      final tokens =
          TestTokenProvider(tokenValue: 'bad', refreshTo: 'also-bad');
      final backend = PocketBaseBackend(
          baseUrl: server.baseUrl, tokenProvider: tokens, stores: const []);
      addTearDown(backend.close);
      await expectLater(
        backend.createRecord(
            id: generateRecordId(), store: 'widgets', dataJson: '{"name":"x"}'),
        throwsA(isA<AuthError>()),
      );
      expect(tokens.refreshCalls, 1, reason: 'refresh attempted once');
      expect(server.createCalls, 2, reason: 'original + exactly one retry');

      // (b) The engine pauses on the same condition (never rewrites rows).
      final h = await PbEngineHarness.create(
          server: server,
          tokens:
              TestTokenProvider(tokenValue: 'bad2', refreshTo: 'also-bad2'));
      addTearDown(h.close);
      await h.engine.syncNow();
      expect(h.engine.state, SyncEngineState.authRequired);
      expect(await h.pocket.collection('widgets').query().all().count(), 0);
    });

    test('scope change invalidates cursors', () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      server.seed(store: 'widgets', data: {'name': 'r1'});
      server.seed(store: 'widgets', data: {'name': 'r2'});

      // Different identities -> different sync scopes.
      final alice = PocketBaseBackend(
          baseUrl: server.baseUrl,
          tokenProvider: TestTokenProvider(identityValue: 'alice'),
          stores: const ['widgets']);
      final bob = PocketBaseBackend(
          baseUrl: server.baseUrl,
          tokenProvider: TestTokenProvider(identityValue: 'bob'),
          stores: const ['widgets']);
      addTearDown(() {
        alice.close();
        bob.close();
      });
      expect(alice.scopeId, isNot(bob.scopeId));

      // Alice's engine pulls and commits her cursor.
      final pocket = await openPocket(stores: [widgetsSchema()]);
      addTearDown(() => pocket.close());
      final engineA = SyncEngine(pocket: pocket, backend: alice);
      await engineA.start();
      await engineA.syncNow();
      await engineA.stop();
      expect(await pocket.collection('widgets').query().all().count(), 2);

      // Bob's engine on the SAME pocket has no cursor -> fresh bootstrap
      // (the per-scope cursor was never written for bob).
      final storeB = SyncStore(pocket, bob.scopeId);
      expect(await storeB.readCursor('widgets'), isNull,
          reason: 'cursor is identity-scoped; bob starts clean');
      final engineB = SyncEngine(pocket: pocket, backend: bob);
      await engineB.start();
      await engineB.syncNow();
      await engineB.stop();
      expect(await pocket.collection('widgets').query().all().count(), 2,
          reason: 'fresh pull is idempotent');
    });
  });
}
