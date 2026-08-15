/// Helpers for the LIVE PocketBase E2E suite (`test/e2e/real/`).
///
/// These tests hit the real server configured in `test/secret.dart`
/// (gitignored): `pb.apexo.app`, superuser `test@flutter.com`.
///
/// Every test runs in its own isolated remote `store` and cleans its records
/// up afterwards so the shared server stays tidy.
library;

import 'dart:convert';

import 'package:localpocket/localpocket.dart';
import 'package:localpocket/pocketbase.dart';
import 'package:localpocket/sync.dart';
import 'package:test/test.dart';

import '../../secret.dart';
import '../../support/helpers.dart';

/// Logs in against the `_superusers` collection with the test credentials and
/// refreshes via `auth-refresh` (token in header AND body).
class RealPbTokenProvider implements TokenProvider {
  final Uri baseUrl;
  final String email;
  final String password;
  final HttpTransport transport;
  Token? _token;
  String? _identity;
  int logins = 0;
  int refreshes = 0;

  RealPbTokenProvider({
    required this.baseUrl,
    required this.email,
    required this.password,
    HttpTransport? transport,
  }) : transport = transport ?? PackageHttpTransport();

  @override
  String get identity => _identity ?? 'superuser';

  Future<Token> _login() async {
    logins++;
    final res = await transport.send(HttpRequest(
      method: 'POST',
      url: baseUrl.resolve('/api/collections/_superusers/auth-with-password'),
      headers: const {'Content-Type': 'application/json'},
      body: jsonEncode({'identity': email, 'password': password}),
    ));
    if (res.status != 200) {
      throw StateError('Superuser login failed: ${res.status} ${res.body}');
    }
    final body = jsonDecode(res.body) as Map<String, Object?>;
    final token = body['token'];
    if (token is! String) throw StateError('Login response has no token.');
    final record = body['record'];
    _identity = (record is Map && record['id'] is String)
        ? record['id'] as String
        : null;
    return Token(token);
  }

  @override
  Future<Token> currentToken() async => _token ??= await _login();

  @override
  Future<Token> refreshToken(Token current) async {
    refreshes++;
    final res = await transport.send(HttpRequest(
      method: 'POST',
      url: baseUrl.resolve('/api/collections/_superusers/auth-refresh'),
      headers: {
        'Authorization': 'Bearer ${current.value}',
        'Content-Type': 'application/json',
      },
      body: jsonEncode({'token': current.value}),
    ));
    if (res.status == 200) {
      final body = jsonDecode(res.body) as Map<String, Object?>;
      final token = body['token'];
      if (token is String) {
        _token = Token(token);
        return _token!;
      }
    }
    // Token invalid server-side: fall back to a fresh login.
    return _login();
  }
}

/// A full adapter-backed engine harness pointed at the REAL server.
class RealHarness {
  final LocalPocket pocket;
  final PocketBaseBackend backend;
  final SyncEngine engine;
  final RealPbTokenProvider tokens;
  final String store;

  RealHarness(this.pocket, this.backend, this.engine, this.tokens, this.store);

  static Future<RealHarness> create({
    required String store,
    String? path,
    bool start = true,
    SyncConfig? config,
  }) async {
    final tokens = RealPbTokenProvider(
      baseUrl: Uri.parse(testPBServer),
      email: testPBEmail,
      password: testPBPassword,
    );
    final backend = PocketBaseBackend(
      baseUrl: Uri.parse(testPBServer),
      tokenProvider: tokens,
      stores: [store],
      transport: tokens.transport,
    );
    final pocket = await openPocket(
      stores: [widgetsSchema(name: store)],
      path: path,
    );
    final engine = SyncEngine(
      pocket: pocket,
      backend: backend,
      config: config ?? realConfig(),
    );
    if (start) await engine.start();
    return RealHarness(pocket, backend, engine, tokens, store);
  }

  Future<void> close() async {
    await engine.stop();
    backend.close();
    await pocket.close();
  }
}

/// Engine tuning for live tests: manual cycles, no surprise timers.
SyncConfig realConfig() => SyncConfig(
      maxPage: 200,
      maxPagesPerPass: 100,
      rewind: const Duration(seconds: 30),
      sweepInterval: const Duration(days: 365),
      syncInterval: const Duration(days: 365),
      pushDebounce: const Duration(days: 365),
      connectivitySettle: Duration.zero,
      maxBatch: 200,
      maxAttempts: 8,
      backoffBase: const Duration(milliseconds: 200),
      backoffCap: const Duration(seconds: 10),
      jitter: (_) => 1.0,
    );

/// A unique remote store name so concurrent runs never collide. The counter
/// guarantees uniqueness even for calls within the same millisecond.
int _storeSeq = 0;
String uniqueStore() {
  _storeSeq++;
  return 'e2e_${DateTime.now().millisecondsSinceEpoch.toRadixString(36)}_$_storeSeq';
}

/// Deletes every record in [store] (direct superuser HTTP) — polite cleanup
/// of the shared test server.
Future<void> cleanupStore(RealPbTokenProvider tokens, String store) async {
  final token = await tokens.currentToken();
  final base = Uri.parse(testPBServer);
  var fromId = '';
  while (true) {
    final filter = "(store='$store' && id>='$fromId')";
    final res = await tokens.transport.send(HttpRequest(
      method: 'GET',
      url: base
          .resolve('/api/collections/data/records')
          .replace(queryParameters: {
        'filter': filter,
        'sort': 'id',
        'perPage': '200',
        'skipTotal': '1',
      }),
      headers: {'Authorization': 'Bearer ${token.value}'},
    ));
    if (res.status != 200) break;
    final body = jsonDecode(res.body) as Map<String, Object?>;
    final items = body['items'];
    if (items is! List || items.isEmpty) break;
    for (final it in items) {
      final id = (it as Map)['id'];
      if (id is String) {
        await tokens.transport.send(HttpRequest(
          method: 'DELETE',
          url: base.resolve('/api/collections/data/records/$id'),
          headers: {'Authorization': 'Bearer ${token.value}'},
        ));
      }
    }
    final last = (items.last as Map)['id'] as String;
    if (last == fromId) break;
    fromId = last;
  }
}

/// Registers a teardown that stops the harness and cleans the remote store.
void registerCleanup(RealHarness h) {
  addTearDown(() async {
    await h.close();
    try {
      await cleanupStore(h.tokens, h.store);
    } catch (_) {
      // Never fail the suite on cleanup hiccups.
    }
  });
}

/// A second client for multi-client scenarios: its OWN database (the FFI
/// factory caches `:memory:` per path, so two clients would share one file).
Future<RealHarness> createSecondClient(String store) async {
  final db = await tempDbPath();
  final h = await RealHarness.create(store: store, path: db.path);
  addTearDown(() async {
    await h.close();
    await db.cleanup();
  });
  return h;
}
