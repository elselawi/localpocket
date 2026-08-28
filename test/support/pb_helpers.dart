/// Shared helpers for the PocketBase adapter tests.
library;

import 'package:localpocket/localpocket.dart';

import 'helpers.dart';
import 'mock_pb_server.dart';

/// A controllable token provider for auth tests.
class TestTokenProvider implements TokenProvider {

  TestTokenProvider({
    this.tokenValue = 'token-a',
    this.refreshTo = 'token-b',
    this.identityValue = 'user-1',
    this.expiresAt,
    this.issuedAt,
    this.refreshDelay = Duration.zero,
  });
  String tokenValue;
  String refreshTo;
  String identityValue;
  DateTime? expiresAt;
  DateTime? issuedAt;
  int refreshCalls = 0;

  /// Artificial refresh latency so concurrent 401s overlap the in-flight
  /// refresh (the in-process server otherwise serializes sub-ms responses).
  Duration refreshDelay;

  @override
  String get identity => identityValue;

  @override
  Future<Token> currentToken() async =>
      Token(tokenValue, expiresAt: expiresAt, issuedAt: issuedAt);

  @override
  Future<Token> refreshToken(Token current) async {
    refreshCalls++;
    if (refreshDelay > Duration.zero) {
      await Future<void>.delayed(refreshDelay);
    }
    return Token(refreshTo, expiresAt: expiresAt, issuedAt: issuedAt);
  }
}

/// A full adapter-backed engine harness (pocket + backend + engine).
class PbEngineHarness {

  PbEngineHarness(
      this.pocket, this.backend, this.engine, this.server, this.tokens);
  final LocalPocket pocket;
  final PocketBaseBackend backend;
  final SyncEngine engine;
  final MockPbServer server;
  final TestTokenProvider tokens;

  static Future<PbEngineHarness> create({
    required MockPbServer server,
    List<CollectionSchema>? stores,
    TestTokenProvider? tokens,
    String? identity,
    List<String>? storesList,
    bool start = true,
    SyncConfig? config,
    String? path,
    int maxDocBytes = 1900000,
    BlobStore? blobStore,
    FieldCipher? fieldCipher,
    int? maxBatch,
  }) async {
    final t = tokens ?? TestTokenProvider();
    final backend = PocketBaseBackend(
      baseUrl: server.baseUrl,
      tokenProvider: t,
      stores: storesList ?? const ['widgets'],
      identity: identity,
      maxBatch: maxBatch ?? 25,
    );
    final pocket = await openPocket(
        stores: stores ?? [widgetsSchema()],
        path: path,
        maxDocBytes: maxDocBytes,
        blobStore: blobStore,
        fieldCipher: fieldCipher);
    final engine = SyncEngine(
      pocket: pocket,
      backend: backend,
      config: config ?? testConfigPb(),
    );
    if (start) await engine.start();
    return PbEngineHarness(pocket, backend, engine, server, t);
  }

  Future<void> close() async {
    await engine.stop();
    backend.close();
    await pocket.close();
  }
}

/// Config with a long push debounce so cycles are manual.
SyncConfig testConfigPb() => SyncConfig(
      maxPage: 200,
      maxPagesPerPass: 100,
      rewind: const Duration(seconds: 5),
      sweepInterval: const Duration(days: 365),
      syncInterval: const Duration(days: 365),
      pushDebounce: const Duration(days: 365),
      connectivitySettle: Duration.zero,
      maxBatch: 25,
      maxAttempts: 8,
      backoffBase: const Duration(milliseconds: 50),
      backoffCap: const Duration(minutes: 5),
      jitter: (_) => 1.0,
    );

/// Scans every table (system + domain) for [needle] — tokens must never
/// appear in SQLite.
Future<bool> dbContains(LocalPocket pocket, String needle) async {
  final tables = (await pocket.db.rawQuery(
    "SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'",
  ))
      .map((r) => r['name'] as String)
      .toList();
  for (final t in tables) {
    final rows = await pocket.db.query(t);
    for (final row in rows) {
      if (row.values.any((v) => v is String && v.contains(needle))) {
        return true;
      }
    }
  }
  return false;
}
