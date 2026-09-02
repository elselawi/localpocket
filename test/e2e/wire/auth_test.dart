import 'package:localpocket/src/adapters/pocketbase/auth.dart';
import 'package:localpocket/src/adapters/pocketbase/transport.dart';
import 'package:localpocket/src/kernel/sync/status.dart';
import 'package:localpocket/src/kernel/sync/sync_backend.dart';
import 'package:test/test.dart';

import '../../support/secret.dart';
import '../../support/helpers.dart';
import '../../support/pb_helpers.dart' show TestTokenProvider, dbContains;
import '../real/real_helpers.dart' show RealPbTokenProvider;
import '../support/wire_server.dart';

/// Auth & token lifecycle at the wire level (tests.md #13-17): a single
/// source of scenarios run against BOTH the in-process MockPbServer and the
/// LIVE PocketBase server via [wireTest].
///
/// Unified (mock + live):
/// - tokens never persist to SQLite (full-table scan finds no secret);
/// - a hard auth failure parks the engine in `SyncEngineState.authRequired`
///   (edits stay local-first) and `markAuthValid()` drains everything;
/// - two clients with DIFFERENT `identity` values get different sync scopes.
///
/// Mock-only (fault injection the live server cannot do):
/// - `authRequired` server: full handshake carries the Bearer token (and the
///   SSE realtime handshake authenticates);
/// - 401 -> exactly ONE refresh -> retry succeeds (no loop).
///
/// Live-only (inspects the real superuser handshake):
/// - superuser login produces a working bearer, a bogus bearer can NEVER
///   write, and the valid session keeps converging.
void main() {
  group('E2E auth over the wire', () {
    wireTest('token never persisted to SQLite', (s) async {
      final a = await s.createClient();
      final token = await a.tokenProvider.currentToken();
      await a.pocket.collection(a.store).put(record(name: 'leak-check'));
      final report = await a.engine.syncNow();
      expect(report.hadError, isFalse);
      expect(await a.engine.syncStore.countPending(), 0,
          reason: 'the write converged to the server');
      expect(await dbContains(a.pocket, token.value), isFalse,
          reason: 'tokens live only in transport memory');
    });

    wireTest('authRequired server: handshake carries the Bearer token',
        (s) async {
      final mock = (s as MockWireServer).mock;
      mock.authRequired = true;
      mock.validToken = 'secret-e2e-token';
      final a = await s.createClientWithTokenProvider(
          tokens: () => TestTokenProvider(
              tokenValue: 'secret-e2e-token',
              refreshTo: 'secret-e2e-token',
              identityValue: 'u1'));

      await a.pocket.collection(a.store).put(record(name: 'authed'));
      final report = await a.engine.syncNow();
      expect(report.hadError, isFalse,
          reason: 'the provider token satisfies the auth-enforcing server');
      expect(mock.records.length, 1);
      expect(await a.engine.syncStore.countPending(), 0);
      expect(
          mock.receivedTokens['header'], contains('Bearer secret-e2e-token'));

      // The SSE realtime handshake authenticates too.
      await a.backend.startRealtime();
      await Future<void>.delayed(const Duration(milliseconds: 200));
      expect(mock.realtimeConnects, greaterThanOrEqualTo(1));
      expect(mock.subscribePosts, greaterThanOrEqualTo(1),
          reason: 'the subscribe POST went through authenticated');
    }, live: false);

    wireTest('401 -> refresh once -> retry succeeds (no loop)', (s) async {
      final mock = (s as MockWireServer).mock;
      mock.authRequired = true;
      mock.validToken = 'fresh-token'; // only the REFRESHED token works
      final tokens = TestTokenProvider(
          tokenValue: 'stale-token', refreshTo: 'fresh-token');
      final a = await s.createClientWithTokenProvider(tokens: () => tokens);

      await a.pocket.collection(a.store).put(record(name: 'refresh-me'));
      final report = await a.engine.syncNow();

      expect(report.hadError, isFalse,
          reason: 'one refresh produced a working token');
      expect(tokens.refreshCalls, 1, reason: 'exactly one refresh');
      expect(mock.receivedTokens['header'], contains('Bearer stale-token'),
          reason: 'the original attempt used the stale token');
      expect(mock.receivedTokens['header'], contains('Bearer fresh-token'),
          reason: 'the retry used the refreshed token');
      expect(mock.records.length, 1,
          reason: 'the push converged on the refreshed credential');
      expect(await a.engine.syncStore.countPending(), 0);
      expect(a.engine.state, isNot(SyncEngineState.authRequired),
          reason: 'never parked — the retry succeeded');
    }, live: false);

    wireTest('auth failure parks engine and markAuthValid recovers', (s) async {
      final gated = _GatedTokens(s);
      final a = await s.createClientWithTokenProvider(tokens: () => gated);

      // The start cycle hit the failing provider: parked, nothing on server.
      expect(a.engine.state, SyncEngineState.authRequired,
          reason: 'a failing provider parks the engine');

      // Local-first edits keep working while unauthorized.
      await a.pocket.collection(a.store).put(record(name: 'held'));
      await a.pocket.collection(a.store).put(record(name: 'still-local'));
      expect(await a.pocket.collection(a.store).query().all().count(), 2);

      // Parked cycles are no-ops (empty report, no crash).
      final parked = await a.engine.syncNow();
      expect(parked.pulled, isEmpty);
      expect(parked.hadError, isFalse);
      expect(await s.countRecords(a.store), 0,
          reason: 'nothing was pushed while unauthorized');

      // Recovery: markAuthValid resumes and drains both edits.
      gated.healthy = true;
      await a.engine.markAuthValid();
      expect(a.engine.state, SyncEngineState.idle);
      var guard = 0;
      while (await a.engine.syncStore.countPending() > 0) {
        await a.engine.syncNow();
        guard++;
        if (guard > 20) fail('drain did not converge after recovery');
      }
      expect(await s.countRecords(a.store), 2,
          reason: 'both offline edits drained after recovery');
    });

    wireTest('different identities get isolated sync scopes', (s) async {
      final a = await s.createClient(identity: 'alice');
      final b = await s.createClient(identity: 'bob');

      // Client-side isolation: distinct identities derive DISTINCT scopeIds.
      expect(a.backend.scopeId, isNot(b.backend.scopeId),
          reason: 'scopeId = hash(baseUrl|identity)');

      final id = await s.createRecord(s.store, {'name': 'shared'});
      await a.engine.syncNow();
      await b.engine.syncNow();
      // Both scopes track the same store independently.
      final cursorA = await a.engine.syncStore.readCursor(s.store);
      final cursorB = await b.engine.syncStore.readCursor(s.store);
      expect(cursorA, isNotNull);
      expect(cursorB, isNotNull);

      // Convergence is unaffected: both clients hold the record cleanly.
      expect((await a.pocket.collection(s.store).get(id)), isNotNull);
      expect((await b.pocket.collection(s.store).get(id)), isNotNull);
    });

    liveOnly('superuser login: real bearer on the wire, bogus cannot write',
        (s) async {
      final a = await s.createClient();
      final token = await a.tokenProvider.currentToken();
      expect(token.value, isNotEmpty);
      expect(token.value, isNot(contains(testPBPassword)),
          reason: 'the password never travels in the token');
      expect((a.tokenProvider as RealPbTokenProvider).logins, 1,
          reason: 'a single superuser login');

      // The token authenticates a real create + a full engine cycle.
      final id = await s.createRecord(s.store, {'name': 'authed'});
      await a.pocket.collection(a.store).put(record(name: 'local'));
      final report = await a.engine.syncNow();
      expect(report.hadError, isFalse);
      expect(await a.engine.syncStore.countPending(), 0);

      // The token value never reached any SQLite table.
      expect(await dbContains(a.pocket, token.value), isFalse,
          reason: 'tokens live only in transport memory');

      // A garbage bearer can NEVER land a record on the live server.
      final bogus = await s.tokens.transport.send(HttpRequest(
        method: 'POST',
        url: Uri.parse(testPBServer).resolve('/api/collections/data/records'),
        headers: const {
          'Authorization': 'Bearer bogus-stale-token',
          'Content-Type': 'application/json',
        },
        body:
            '{"id":"aaaaaaaaaaaaaaa","store":"${s.store}","data":{"name":"evil"}}',
      ));
      expect(bogus.status, isNot(inInclusiveRange(200, 299)),
          reason: 'a garbage bearer never writes to the server');
      expect(await s.countRecords(s.store), 2,
          reason: 'the rejected write landed nothing');

      // The VALID session still converges normally after the attack.
      await a.pocket.collection(a.store).put(record(name: 'after-attack'));
      final after = await a.engine.syncNow();
      expect(after.hadError, isFalse);
      expect(a.engine.state, isNot(SyncEngineState.authRequired));
      expect(await a.engine.syncStore.countPending(), 0);
      expect((await a.pocket.collection(a.store).get(id)), isNotNull);
    });
  });
}

/// A provider that throws a typed [AuthError] until marked healthy — models
/// an expired/revoked session that the app later restores. Once healthy it
/// delegates to the live credential provider when running against the real
/// server, or emits a mock-accepted token when hermetic.
class _GatedTokens implements TokenProvider {
  _GatedTokens(WireServer s) : _inner = s is RealWireServer ? s.tokens : null;
  final RealPbTokenProvider? _inner;
  bool healthy = false;

  @override
  String get identity => 'gated-user';

  @override
  Future<Token> currentToken() async {
    if (!healthy) throw AuthError('session revoked');
    final inner = _inner;
    if (inner case final provider?) return provider.currentToken();
    return Token('recovered-token');
  }

  @override
  Future<Token> refreshToken(Token current) async {
    if (!healthy) throw AuthError('session revoked');
    final inner = _inner;
    if (inner case final provider?) return provider.refreshToken(current);
    return Token('recovered-token');
  }
}
