import 'dart:convert';
import 'dart:io';

import 'package:localpocket/pocketbase.dart';
import 'package:localpocket/sync.dart';
import 'package:test/test.dart';

import '../../secret.dart' show testPBServer;
import '../../support/helpers.dart' show record;
import '../../support/pb_helpers.dart' show TestTokenProvider;
import '../support/wire_server.dart';

/// PocketBase auth wire-contract quirks (tests.md section 7, items 36-39).
/// A single source of scenarios run against BOTH the in-process MockPbServer
/// and the LIVE PocketBase server via [wireTest].
///
/// - invalid superuser creds answer a NON-2xx with a message body (the mock
///   returns the real-PB shape `400 "Failed to authenticate."`), and the
///   typed failure (`AuthError` → engine parks in `authRequired`) NEVER
///   depends on that message text;
/// - (live probe) `auth-refresh` requires the token in the Authorization
///   HEADER — the body copy in `RealPbTokenProvider` is redundant and was
///   dropped (pinned empirically);
/// - (mock) clock-injected expiry + two clients sharing one token provider:
///   each client's AuthManager refreshes EXACTLY once (proactive at 75 %, and
///   once more per 401 burst) — no thundering herd across the wire.
///
/// Item 39 (per-IP rate limiting → 429 + `Retry-After`) is NOT duplicated:
/// `robustness_test.dart`'s 'push honors Retry-After (429): deferred, then
/// converges' already pins the engine-level 429 + `Retry-After` backoff path
/// at the wire e2e level (mock `forceWriteStatus=429` + `forceRetryAfter`),
/// and a live drain-survives-429 is impractical on the shared server (it may
/// throttle a hammering drain).
void main() {
  /// Raw HTTP request against either backend (no adapter), returning
  /// `(status, bodyText)` — the other side of the wire, for pinning server
  /// response shapes verbatim.
  Future<(int, String)> rawSend(
    WireServer s,
    String method,
    String path, {
    Map<String, String> query = const {},
    Object? body,
    bool auth = true,
  }) async {
    await s.start(); // the mock binds its HTTP port here (live: no-op)
    final client = HttpClient();
    try {
      final base = s is MockWireServer
          ? Uri.parse(s.mock.baseUrl.toString())
          : Uri.parse(testPBServer);
      final uri = base.resolve(path).replace(queryParameters: query);
      final req = switch (method) {
        'GET' => await client.getUrl(uri),
        'POST' => await client.postUrl(uri),
        'PATCH' => await client.openUrl('PATCH', uri),
        'DELETE' => await client.openUrl('DELETE', uri),
        _ => throw ArgumentError(method),
      };
      if (body != null) req.headers.contentType = ContentType.json;
      if (auth && s is RealWireServer) {
        final token = await s.tokens.currentToken();
        req.headers.set('Authorization', 'Bearer ${token.value}');
      }
      if (body != null) req.write(jsonEncode(body));
      final res = await req.close();
      final text = res.contentLength == 0
          ? ''
          : await res.transform(utf8.decoder).join();
      return (res.statusCode, text);
    } finally {
      client.close(force: true);
    }
  }

  group('E2E PB wire-contract quirks — auth', () {
    // -------------------------------------------------------------- #36 --
    wireTest(
        'invalid superuser creds answer a typed login failure, independent '
        'of the message text', (s) async {
      // RAW WIRE: bad creds against `_superusers` → a non-2xx; the mock
      // mirrors the real-PB shape exactly (400 "Failed to authenticate.").
      final (status, body) = await rawSend(
        s,
        'POST',
        '/api/collections/_superusers/auth-with-password',
        body: {'identity': 'nobody@example.com', 'password': 'wrong'},
        auth: false,
      );
      expect(status, isNot(inInclusiveRange(200, 299)),
          reason: 'invalid creds never authenticate');
      if (s is MockWireServer) {
        final decoded = jsonDecode(body) as Map<String, Object?>;
        expect(decoded['message'], 'Failed to authenticate.');
      } else {
        expect(body, isNotEmpty);
      }

      // ENGINE: a provider that performs the REAL login POST and maps ANY
      // non-2xx to a typed `AuthError` (never parsing the body text) parks
      // the engine in `authRequired` — message-independent end-to-end.
      final loginTokens = _LoginProbeTokens(s);
      final a =
          await s.createClientWithTokenProvider(tokens: () => loginTokens);
      expect(a.engine.state, SyncEngineState.authRequired,
          reason: 'a failed login surfaces as a typed AuthError, parked — the '
              'engine never inspects the message text');

      // Local-first edits keep working while unauthorized.
      await a.pocket.collection(s.store).put(record(name: 'held'));
      final parked = await a.engine.syncNow();
      expect(parked.pulled, isEmpty);
      expect(await s.countRecords(s.store), 0,
          reason: 'nothing was pushed while unauthorized');

      // Recovery: once the login succeeds, markAuthValid drains everything.
      loginTokens.healthy = true;
      await a.engine.markAuthValid();
      expect(a.engine.state, isNot(SyncEngineState.authRequired));
      var guard = 0;
      while (await a.engine.syncStore.countPending() > 0) {
        await a.engine.syncNow();
        guard++;
        if (guard > 20) fail('drain did not converge after login recovery');
      }
      expect(await s.countRecords(s.store), 1,
          reason: 'the offline edit drained after the login recovered');
    });

    // -------------------------------------------------------------- #37 --
    liveOnly(
        'auth-refresh needs the token in the HEADER; the body copy is '
        'redundant', (s) async {
      final token = await s.tokens.currentToken();

      // HEADER-only refresh: the token in the Authorization header alone
      // works — PB's `auth-refresh` binds RequireSameCollectionContextAuth
      // and never reads the body.
      final headerOnly = await s.tokens.transport.send(HttpRequest(
        method: 'POST',
        url: Uri.parse(testPBServer)
            .resolve('/api/collections/_superusers/auth-refresh'),
        headers: {'Authorization': 'Bearer ${token.value}'},
      ));
      expect(headerOnly.status, 200,
          reason: 'header-only auth-refresh succeeds');

      // BODY-only refresh (no Authorization header) is NOT authenticated.
      final bodyOnly = await s.tokens.transport.send(HttpRequest(
        method: 'POST',
        url: Uri.parse(testPBServer)
            .resolve('/api/collections/_superusers/auth-refresh'),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({'token': token.value}),
      ));
      expect(bodyOnly.status, isNot(inInclusiveRange(200, 299)),
          reason: 'the token in the body alone never authenticates');

      // Neither → also rejected.
      final none = await s.tokens.transport.send(HttpRequest(
        method: 'POST',
        url: Uri.parse(testPBServer)
            .resolve('/api/collections/_superusers/auth-refresh'),
      ));
      expect(none.status, isNot(inInclusiveRange(200, 299)));

      // PIN: `RealPbTokenProvider` refreshes with the header only — a
      // successful refresh must NOT fall back to a fresh login (the body
      // copy was dropped as redundant).
      final loginsBefore = s.tokens.logins;
      final refreshed = await s.tokens.refreshToken(token);
      expect(refreshed.value, isNotEmpty);
      expect(s.tokens.logins, loginsBefore,
          reason:
              'the header-only refresh succeeded — no login fallback needed');
      expect(s.tokens.refreshes, greaterThanOrEqualTo(1));
    });

    // -------------------------------------------------------------- #38 --
    wireTest(
        'near-expiry tokens refresh proactively exactly once per client; a '
        'server-side 401 burst refreshes once more — no thundering herd '
        'across two clients', (s) async {
      final mock = (s as MockWireServer).mock;
      mock.authRequired = true;
      mock.validToken = 'fresh-token'; // only the REFRESHED token works

      // ONE shared clock-injected provider for BOTH clients: the initial
      // token is near expiry (10 s lifetime, 1 s left → remainingFraction
      // 0.1 < 0.25) so each client's AuthManager refreshes PROACTIVELY
      // before its first request; the refresh latency lets the two clients'
      // start traffic overlap the in-flight refresh.
      final shared = _TtlTokens();
      final a = await s.createClientWithTokenProvider(tokens: () => shared);
      final b = await s.createClientWithTokenProvider(tokens: () => shared);

      // Exactly ONE refresh per client's AuthManager (single-flight across
      // the concurrent start traffic): two clients → two refreshes, and the
      // refresh happened BEFORE any request (zero 401s on the first cycle).
      expect(shared.refreshCalls, 2,
          reason: 'one proactive refresh per client — no thundering herd');
      expect(a.engine.state, isNot(SyncEngineState.authRequired));
      expect(b.engine.state, isNot(SyncEngineState.authRequired));
      expect(mock.receivedTokens['header'], contains('Bearer fresh-token'),
          reason: 'the proactive refresh preceded every request');

      // Both clients stay usable on the refreshed credential.
      await a.pocket.collection(s.store).put(record(name: 'from-a'));
      await b.pocket.collection(s.store).put(record(name: 'from-b'));
      final ra = await a.engine.syncNow();
      final rb = await b.engine.syncNow();
      expect(ra.hadError, isFalse);
      expect(rb.hadError, isFalse);
      expect(await a.engine.syncStore.countPending(), 0);
      expect(await b.engine.syncStore.countPending(), 0);
      expect(await s.countRecords(s.store), 2);
      expect(shared.refreshCalls, 2,
          reason: 'the fresh tokens were reused — no extra refreshes');

      // Server-side session rotation: the next cycle 401s on both clients;
      // each client's single-flight refresh fires EXACTLY once more and both
      // converge on the rotated credential.
      mock.validToken = 'rotated-token';
      shared.refreshTo = 'rotated-token';
      final ra2 = await a.engine.syncNow();
      final rb2 = await b.engine.syncNow();
      expect(ra2.hadError, isFalse);
      expect(rb2.hadError, isFalse);
      expect(shared.refreshCalls, 4,
          reason: 'one 401-driven refresh per client — the burst never herds');
      // The last request of each retried cycle carried the ROTATED token
      // (the pull route only sets `lastAuthHeader` — `receivedTokens` records
      // only write/realtime routes).
      expect(mock.lastAuthHeader, 'Bearer rotated-token',
          reason: 'the 401-refresh-retry converged on the rotated credential');
      expect(await a.engine.syncStore.countPending(), 0);
      expect(await b.engine.syncStore.countPending(), 0);
    }, live: false);
  });
}

/// A provider that performs the REAL `_superusers` login POST (invalid creds)
/// and maps any non-2xx to a typed [AuthError] — the message body is never
/// parsed. Once [healthy], it delegates to a valid credential so the engine
/// can drain.
class _LoginProbeTokens implements TokenProvider {
  _LoginProbeTokens(this.s);
  final WireServer s;
  bool healthy = false;

  @override
  String get identity => 'login-probe';

  @override
  Future<Token> currentToken() async {
    if (healthy) {
      if (s is RealWireServer) {
        return (s as RealWireServer).tokens.currentToken();
      }
      return Token('mock-superuser-token'); // the mock accepts any token
    }
    // Perform the REAL login POST with invalid credentials; ANY non-2xx is a
    // typed login failure (message-INDEPENDENT by design).
    await s.start();
    final client = HttpClient();
    try {
      final base = s is MockWireServer
          ? Uri.parse((s as MockWireServer).mock.baseUrl.toString())
          : Uri.parse(testPBServer);
      final req = await client.postUrl(
          base.resolve('/api/collections/_superusers/auth-with-password'));
      req.headers.contentType = ContentType.json;
      req.write(jsonEncode(
          {'identity': 'nobody@example.com', 'password': 'wrong-password'}));
      final res = await req.close();
      await res.drain<void>();
      if (res.statusCode < 200 || res.statusCode >= 300) {
        throw AuthError('login failed (status ${res.statusCode})');
      }
      return Token('mock-superuser-token');
    } finally {
      client.close(force: true);
    }
  }

  @override
  Future<Token> refreshToken(Token current) => currentToken();
}

/// A clock-injected provider: the INITIAL token is near expiry (10 s
/// lifetime, 1 s left → remainingFraction 0.1 < 0.25) so the AuthManager
/// refreshes PROACTIVELY; the refreshed token carries a FRESH lifetime so
/// the proactive rule stops — exactly one refresh per manager per phase.
class _TtlTokens extends TestTokenProvider {
  _TtlTokens()
      : super(
          tokenValue: 'stale-token',
          refreshTo: 'fresh-token',
          issuedAt: DateTime.now().subtract(const Duration(seconds: 9)),
          expiresAt: DateTime.now().add(const Duration(seconds: 1)),
          refreshDelay: const Duration(milliseconds: 250),
        );

  @override
  Future<Token> refreshToken(Token current) async {
    refreshCalls++;
    if (refreshDelay > Duration.zero) {
      await Future<void>.delayed(refreshDelay);
    }
    // A real provider returns a token with a FRESH lifetime — the proactive
    // rule stops after one refresh per manager.
    return Token(refreshTo);
  }
}
