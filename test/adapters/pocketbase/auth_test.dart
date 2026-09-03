import 'dart:convert';

import 'package:localpocket/src/adapters/pocketbase/auth.dart';
import 'package:localpocket/src/adapters/pocketbase/backend.dart';
import 'package:localpocket/src/kernel/ids.dart';
import 'package:localpocket/src/kernel/sync/engine.dart';
import 'package:localpocket/src/kernel/sync/status.dart';
import 'package:localpocket/src/kernel/sync/sync_backend.dart';
import 'package:localpocket/src/kernel/sync/sync_store.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';
import '../../support/mock_pb_server.dart';
import '../../support/pb_helpers.dart';

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
      final backend = PocketBaseRawBackend(
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

      final backend = PocketBaseRawBackend(
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
      final backend = PocketBaseRawBackend(
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
      final alice = PocketBaseRawBackend(
          baseUrl: server.baseUrl,
          tokenProvider: TestTokenProvider(identityValue: 'alice'),
          stores: const ['widgets']);
      final bob = PocketBaseRawBackend(
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

  group('auth token boundary and provider failures', () {
    test('Token.isExpired: exact expiry is not expired, past is', () {
      final now = DateTime.now();
      expect(Token('x', expiresAt: now).isExpired, isFalse,
          reason: 'isAfter is strict: exactly-at-expiry is still valid');
      expect(
          Token('x', expiresAt: now.subtract(const Duration(seconds: 1)))
              .isExpired,
          isTrue);
      expect(Token('x').isExpired, isFalse, reason: 'no expiry');
    });

    test('remainingFraction: no-expiry, zero/negative lifetimes clamp', () {
      final now = DateTime.now();
      expect(Token('x').remainingFraction, 1.0, reason: 'no expiry -> fresh');
      // Zero/negative lifetime -> 0.0.
      final zero = Token('x', expiresAt: now, issuedAt: now);
      expect(zero.remainingFraction, 0.0);
      final negative = Token('x',
          expiresAt: now.subtract(const Duration(seconds: 5)),
          issuedAt: now.add(const Duration(seconds: 5)));
      expect(negative.remainingFraction, 0.0);
      expect(negative.needsProactiveRefresh, isTrue);
      // Issued after expiry -> 0.0, and past expiry -> expired.
      final late = Token('x',
          expiresAt: now.subtract(const Duration(seconds: 1)), issuedAt: now);
      expect(late.remainingFraction, 0.0);
      expect(late.isExpired, isTrue);
      // A fully-fresh token is never proactively refreshed.
      expect(
          Token('x', expiresAt: now.add(const Duration(hours: 1)))
              .needsProactiveRefresh,
          isFalse);
    });

    test('proactive-refresh boundary is strictly below 25%', () {
      // Lifetime 100s, elapsed 74.99s -> remaining fraction 0.2501 (not due).
      final near = DateTime.now();
      final justAbove = Token('x',
          expiresAt: near.add(const Duration(seconds: 25, milliseconds: 10)),
          issuedAt:
              near.subtract(const Duration(seconds: 74, milliseconds: 990)));
      expect(justAbove.remainingFraction, closeTo(0.2501, 0.0001));
      expect(justAbove.needsProactiveRefresh, isFalse,
          reason: 'fraction >= 0.25 is not due');

      // Elapsed 75.01s -> fraction 0.2499 (due).
      final justBelow = Token('x',
          expiresAt: near.add(const Duration(seconds: 24, milliseconds: 990)),
          issuedAt:
              near.subtract(const Duration(seconds: 75, milliseconds: 10)));
      expect(justBelow.remainingFraction, closeTo(0.2499, 0.0001));
      expect(justBelow.needsProactiveRefresh, isTrue,
          reason: 'fraction < 0.25 is due');
    });

    test('initial concurrent token() shares one currentToken() call', () async {
      final provider = _ScriptedProvider();
      final auth = AuthManager(provider);
      final tokens =
          await Future.wait([for (var i = 0; i < 5; i++) auth.token()]);
      expect(provider.currentCalls, 1, reason: 'single-flight initial load');
      expect(tokens.map((t) => t.value).toSet(), {'initial'});
      expect(provider.refreshCalls, 0);
    });

    test('refreshNow() before token() loads then refreshes', () async {
      final provider = _ScriptedProvider();
      final auth = AuthManager(provider);
      final fresh = await auth.refreshNow();
      expect(fresh.value, 'refreshed');
      expect(provider.currentCalls, 1);
      expect(provider.refreshCalls, 1);
      // Subsequent token() returns the cached refreshed token without a
      // fresh load or another refresh.
      final t = await auth.token();
      expect(t.value, 'refreshed');
      expect(provider.currentCalls, 1);
      expect(provider.refreshCalls, 1);
    });

    test('proactive provider failure propagates and leaves a retryable state',
        () async {
      final now = DateTime.now();
      final provider = _ScriptedProvider(
        value: 'stale',
        expiresAt: now.add(const Duration(seconds: 1)),
        issuedAt: now.subtract(const Duration(seconds: 9)),
        refreshError: StateError('provider down'),
      );
      final auth = AuthManager(provider);
      // First token() loads and (proactively) refreshes -> the refresh throws.
      await expectLater(auth.token(), throwsA(isA<StateError>()));
      expect(provider.refreshCalls, 1);
      expect(provider.currentCalls, 1);

      // The failure is cleaned up: the next call retries the refresh.
      provider.refreshError = null;
      final t = await auth.token();
      expect(t.value, 'refreshed');
      expect(provider.refreshCalls, 2,
          reason: 'failure did not poison the cache');
    });

    test('forced refresh failure keeps the cached token and retries later',
        () async {
      final provider = _ScriptedProvider(refreshError: StateError('down'));
      final auth = AuthManager(provider);
      await auth.token(); // cache 'initial'
      await expectLater(auth.refreshNow(), throwsA(isA<StateError>()));
      expect(provider.refreshCalls, 1);

      provider.refreshError = null;
      final fresh = await auth.refreshNow();
      expect(fresh.value, 'refreshed');
      expect(provider.refreshCalls, 2);
    });

    test('concurrent forced refreshes are single-flight', () async {
      final provider =
          _ScriptedProvider(refreshDelay: const Duration(milliseconds: 30));
      final auth = AuthManager(provider);
      await auth.token();
      final results =
          await Future.wait([for (var i = 0; i < 5; i++) auth.refreshNow()]);
      expect(provider.refreshCalls, 1, reason: 'single-flight refresh');
      expect(results.map((t) => t.value).toSet(), {'refreshed'});
    });

    test('invalidate() during an in-flight refresh completes cleanly',
        () async {
      final provider =
          _ScriptedProvider(refreshDelay: const Duration(milliseconds: 40));
      final auth = AuthManager(provider);
      await auth.token();
      final inflight = auth.refreshNow();
      auth.invalidate(); // mid-flight
      final fresh = await inflight;
      expect(fresh.value, 'refreshed');
      expect(provider.refreshCalls, 1);
      // The in-flight refresh repopulated the cache.
      expect((await auth.token()).value, 'refreshed');
    });

    test('invalidate() forces a reload on the next token()', () async {
      final provider = _ScriptedProvider();
      final auth = AuthManager(provider);
      await auth.token();
      auth.invalidate();
      expect((await auth.token()).value, 'initial');
      expect(provider.currentCalls, 2, reason: 'invalidated -> reloaded');
    });

    test('no shared default identity; scope construction throws without one',
        () async {
      expect(TestTokenProvider(identityValue: 'alice').identity, 'alice');

      // A provider that does not expose a stable identity reports null —
      // token values rotate on refresh, so there is no stable fingerprint to
      // fall back to. The old shared 'token-identity' constant silently merged
      // every account on one server into a single sync scope.
      final defaulted = _DefaultIdentityProvider();
      expect(defaulted.identity, isNull,
          reason: 'no shared default identity (cross-account scope collision)');

      // Without any identity, building a sync scope must fail loudly instead
      // of sharing a scope across accounts.
      final unset = PocketBaseRawBackend(
          baseUrl: Uri.parse('https://pb.test'),
          tokenProvider: _DefaultIdentityProvider(),
          stores: const []);
      addTearDown(() => unset.close());
      // The loud failure is a typed SyncError, not a raw StateError.
      expect(() => unset.scopeId, throwsA(isA<SyncIdentityError>()),
          reason: 'a missing identity is a loud error, not a shared scope');

      final a = PocketBaseRawBackend(
          baseUrl: Uri.parse('https://pb.test'),
          tokenProvider: TestTokenProvider(identityValue: 'same'),
          stores: const []);
      final b = PocketBaseRawBackend(
          baseUrl: Uri.parse('https://pb.test'),
          tokenProvider: TestTokenProvider(identityValue: 'same'),
          stores: const []);
      final c = PocketBaseRawBackend(
          baseUrl: Uri.parse('https://pb.test'),
          tokenProvider: TestTokenProvider(identityValue: 'other'),
          stores: const []);
      addTearDown(() {
        a.close();
        b.close();
        c.close();
      });
      expect(a.scopeId, b.scopeId, reason: 'same baseUrl+identity');
      expect(a.scopeId, isNot(c.scopeId), reason: 'identity changes the scope');
    });
  });
}

/// A scriptable [TokenProvider] with call counters and failure injection.
class _ScriptedProvider implements TokenProvider {
  _ScriptedProvider({
    this.value = 'initial',
    this.expiresAt,
    this.issuedAt,
    this.refreshError,
    this.refreshDelay = Duration.zero,
  });
  String value;
  DateTime? expiresAt;
  DateTime? issuedAt;
  int currentCalls = 0;
  int refreshCalls = 0;
  Object? refreshError;
  Duration refreshDelay;

  @override
  String get identity => 'user-1';

  @override
  Future<Token> currentToken() async {
    currentCalls++;
    return Token(value, expiresAt: expiresAt, issuedAt: issuedAt);
  }

  @override
  Future<Token> refreshToken(Token current) async {
    refreshCalls++;
    if (refreshDelay > Duration.zero) {
      await Future<void>.delayed(refreshDelay);
    }
    final err = refreshError;
    if (err != null) throw err;
    return Token('refreshed', expiresAt: expiresAt, issuedAt: issuedAt);
  }
}

/// A provider that does not override [TokenProvider.identity].
class _DefaultIdentityProvider extends TokenProvider {
  @override
  Future<Token> currentToken() async => Token('x');
  @override
  Future<Token> refreshToken(Token current) async => Token('y');
}
