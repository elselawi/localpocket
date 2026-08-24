/// Backend-agnostic wire test infrastructure.
///
/// Scenarios are written ONCE against [WireServer] and run against BOTH the
/// in-process `MockPbServer` (hermetic, untagged) and the LIVE PocketBase
/// server in `test/secret.dart` (tagged `real`) via [wireTest]. The test body
/// is never duplicated — only the server implementation differs. Scenarios
/// that rely on fault injection that only the mock can do (poison batches,
/// forced status codes, server restarts, garbage SSE) simply register
/// `live: false`.
library;

import 'dart:convert';

import 'package:localpocket/localpocket.dart';
import 'package:localpocket/pocketbase.dart';
import 'package:localpocket/sync.dart';
import 'package:test/test.dart';

import '../../secret.dart';
import '../../support/helpers.dart';
import '../../support/mock_pb_server.dart';
import '../../support/pb_helpers.dart';
import '../real/real_helpers.dart';

/// Resolves [storeBuilders] against [store], defaulting to the canonical
/// widgets schema when no builders were supplied (so the store name is always
/// the server's own, on the mock and live alike).
List<CollectionSchema> _resolveSchemas(
    List<CollectionSchema Function(String)>? storeBuilders, String store) {
  final builders = storeBuilders ?? const <CollectionSchema Function(String)>[];
  final out = <CollectionSchema>[];
  for (final build in builders) {
    out.add(build(store));
  }
  if (builders.isEmpty) out.add(widgetsSchema(name: store));
  return out;
}

/// One client bound to a [WireServer]: the pocket + engine a scenario drives.
class WireClient {

  WireClient(this.pocket, this.engine, this.backend, this.tokenProvider,
      this.blobStore, this.store);
  final LocalPocket pocket;
  final SyncEngine engine;
  final PocketBaseBackend backend;
  final TokenProvider tokenProvider;
  final BlobStore? blobStore;
  final String store;
}

/// The canonical config for shared wire scenarios — tuned to run correctly on
/// both the in-process mock and the live server (manual cycles, sane backoff).
SyncConfig wireConfig({
  Duration? pushDebounce,
  int maxPage = 200,
  int maxPagesPerPass = 100,
  Duration? sweepInterval,
  int bucketsPerSweep = 2,
  Duration? purgeHiddenAfter,
}) =>
    SyncConfig(
      maxPage: maxPage,
      maxPagesPerPass: maxPagesPerPass,
      rewind: const Duration(seconds: 10),
      sweepInterval: sweepInterval ?? const Duration(days: 365),
      bucketsPerSweep: bucketsPerSweep,
      syncInterval: const Duration(days: 365),
      pushDebounce: pushDebounce ?? const Duration(days: 365),
      connectivitySettle: Duration.zero,
      maxBatch: 250,
      maxAttempts: 8,
      backoffBase: const Duration(milliseconds: 100),
      backoffCap: const Duration(seconds: 30),
      purgeHiddenAfter: purgeHiddenAfter,
      jitter: (_) => 1.0,
    );

/// Backend-agnostic server facade. Scenarios use ONLY these operations (plus
/// the public LocalPocket/SyncEngine APIs) so the same body runs against the
/// mock and the live server.
abstract class WireServer {
  /// The local store name this server's records live in (`'widgets'` on the
  /// mock; a unique per-run store on the live server).
  String get store;

  /// A sibling store on the SAME server, for multi-store scenarios
  /// a fixed name on the mock, a unique per-run store on the live
  /// server that [close] also cleans up.
  String get siblingStore;

  /// Opens the server (the mock binds its HTTP port; the live server is a
  /// no-op since auth is lazy).
  Future<void> start();

  /// Builds a fresh client bound to this server. [storeBuilders] lets custom
  /// schemas be (re)named to the server's store. Defaults to the canonical
  /// widgets schema. [maxBatch] overrides the backend's advertised batch
  /// ceiling (scenarios that intentionally exceed a server's request cap).
  Future<WireClient> createClient({
    String? path,
    bool autoStart = true,
    SyncConfig? config,
    List<CollectionSchema Function(String store)>? storeBuilders,
    BlobStore? blobStore,
    FieldCipher? fieldCipher,
    int maxDocBytes = 1900000,
    String? identity,
    List<String>? storesList,
    int? maxBatch,
  });

  /// Builds a client whose credential provider is supplied by the test
  /// (custom token providers, gated providers, etc.). Backends are wired to
  /// the same server/store as [createClient].
  Future<WireClient> createClientWithTokenProvider({
    required TokenProvider Function() tokens,
    String? path,
    bool autoStart = true,
    SyncConfig? config,
    List<CollectionSchema Function(String)>? storeBuilders,
  });

  // ---- server-side operations (the "other side" of the wire) ----

  /// Creates a record directly on the server; returns its id.
  Future<String> createRecord(String store, Map<String, Object?> data,
      {String? id});

  /// Replaces the server-side data of [id].
  Future<void> updateRecord(String store, String id, Map<String, Object?> data);

  /// Hard-deletes [id] on the server.
  Future<void> deleteRecord(String store, String id);

  /// Reads the server-side record: `{data, imgs, updated}` or null.
  Future<Map<String, Object?>?> readRecord(String store, String id);

  /// Counts every record of [store] on the server.
  Future<int> countRecords(String store);

  /// Schedules a cleanup hook (e.g. deleting a temp DB file) that runs AFTER
  /// every client has been closed by [close].
  void onClose(Future<void> Function() hook);

  /// Stops every client, tears the server down and (live) cleans the store.
  Future<void> close();
}

/// Hermetic variant: wraps the in-process `MockPbServer` + `PbEngineHarness`.
class MockWireServer extends WireServer {
  final MockPbServer mock = MockPbServer();
  final List<Future<void> Function()> _clientClosers = [];
  final List<Future<void> Function()> _closeHooks = [];
  bool _started = false;

  @override
  String get store => 'widgets';

  @override
  String get siblingStore => 'widgets_b';

  @override
  Future<void> start() async {
    if (!_started) {
      await mock.start();
      _started = true;
    }
  }

  @override
  Future<WireClient> createClient({
    String? path,
    bool autoStart = true,
    SyncConfig? config,
    List<CollectionSchema Function(String)>? storeBuilders,
    BlobStore? blobStore,
    FieldCipher? fieldCipher,
    int maxDocBytes = 1900000,
    String? identity,
    List<String>? storesList,
    int? maxBatch,
  }) async {
    await start();
    final h = await PbEngineHarness.create(
      server: mock,
      path: path,
      start: autoStart,
      config: config ?? wireConfig(),
      stores: _resolveSchemas(storeBuilders, 'widgets'),
      storesList: storesList ?? const ['widgets'],
      blobStore: blobStore,
      fieldCipher: fieldCipher,
      maxDocBytes: maxDocBytes,
      identity: identity,
      maxBatch: maxBatch,
    );
    _clientClosers.add(h.close);
    return WireClient(
        h.pocket, h.engine, h.backend, h.tokens, blobStore, 'widgets');
  }

  @override
  Future<WireClient> createClientWithTokenProvider({
    required TokenProvider Function() tokens,
    String? path,
    bool autoStart = true,
    SyncConfig? config,
    List<CollectionSchema Function(String)>? storeBuilders,
  }) async {
    await start();
    final t = tokens();
    final backend = PocketBaseBackend(
      baseUrl: mock.baseUrl,
      tokenProvider: t,
      stores: const ['widgets'],
    );
    final pocket = await openPocket(
        stores: _resolveSchemas(storeBuilders, 'widgets'), path: path);
    final engine = SyncEngine(
        pocket: pocket, backend: backend, config: config ?? wireConfig());
    if (autoStart) await engine.start();
    _clientClosers.add(() async {
      await engine.stop();
      backend.close();
      await pocket.close();
    });
    return WireClient(pocket, engine, backend, t, null, 'widgets');
  }

  @override
  Future<String> createRecord(String store, Map<String, Object?> data,
      {String? id}) async {
    await start();
    return mock.seed(store: store, data: data, id: id);
  }

  @override
  Future<void> updateRecord(
      String store, String id, Map<String, Object?> data) async {
    mock.mutate(id, data);
  }

  @override
  Future<void> deleteRecord(String store, String id) async {
    mock.delete(id);
  }

  @override
  Future<Map<String, Object?>?> readRecord(String store, String id) async {
    final r = mock.records[id];
    return r == null
        ? null
        : {'data': r.data, 'imgs': r.imgs, 'updated': r.updated};
  }

  @override
  Future<int> countRecords(String store) async =>
      mock.records.values.where((r) => r.store == store).length;

  @override
  void onClose(Future<void> Function() hook) => _closeHooks.add(hook);

  @override
  Future<void> close() async {
    for (final close in _clientClosers) {
      try {
        await close();
      } catch (_) {}
    }
    _clientClosers.clear();
    for (final hook in _closeHooks) {
      try {
        await hook();
      } catch (_) {}
    }
    _closeHooks.clear();
    await mock.stop();
  }
}

/// Live variant: speaks raw HTTP to the server in `test/secret.dart`, with
/// clients built like `RealHarness`.
class RealWireServer extends WireServer {

  RealWireServer()
      : _tokens = RealPbTokenProvider(
          baseUrl: Uri.parse(testPBServer),
          email: testPBEmail,
          password: testPBPassword,
        );
  final RealPbTokenProvider _tokens;
  final String _store = uniqueStore();
  final List<Future<void> Function()> _clientClosers = [];
  final List<Future<void> Function()> _closeHooks = [];
  PocketBaseBackend? _opsBackend;

  @override
  String get store => _store;

  @override
  String get siblingStore => '${_store}_b';

  /// The live credential provider (for live-only scenarios that inspect the
  /// superuser login/refresh handshake directly).
  RealPbTokenProvider get tokens => _tokens;

  PocketBaseBackend get _backend => _opsBackend ??= PocketBaseBackend(
        baseUrl: Uri.parse(testPBServer),
        tokenProvider: _tokens,
        stores: [_store],
        transport: _tokens.transport,
      );

  @override
  Future<void> start() async {} // auth is lazy

  @override
  Future<WireClient> createClient({
    String? path,
    bool autoStart = true,
    SyncConfig? config,
    List<CollectionSchema Function(String)>? storeBuilders,
    BlobStore? blobStore,
    FieldCipher? fieldCipher,
    int maxDocBytes = 1900000,
    String? identity,
    List<String>? storesList,
    int? maxBatch,
  }) async {
    final h = await RealHarness.create(
      store: _store,
      path: path,
      start: autoStart,
      config: config ?? wireConfig(),
      stores: _resolveSchemas(storeBuilders, _store),
      blobStore: blobStore,
      fieldCipher: fieldCipher,
      identity: identity,
      storesList: storesList,
      maxBatch: maxBatch,
    );
    _clientClosers.add(h.close);
    return WireClient(
        h.pocket, h.engine, h.backend, h.tokens, blobStore, _store);
  }

  @override
  Future<WireClient> createClientWithTokenProvider({
    required TokenProvider Function() tokens,
    String? path,
    bool autoStart = true,
    SyncConfig? config,
    List<CollectionSchema Function(String)>? storeBuilders,
  }) async {
    final t = tokens();
    final backend = PocketBaseBackend(
      baseUrl: Uri.parse(testPBServer),
      tokenProvider: t,
      stores: [_store],
      transport: t is RealPbTokenProvider ? t.transport : null,
    );
    final pocket = await openPocket(
        stores: _resolveSchemas(storeBuilders, _store), path: path);
    final engine = SyncEngine(
        pocket: pocket, backend: backend, config: config ?? wireConfig());
    if (autoStart) await engine.start();
    _clientClosers.add(() async {
      await engine.stop();
      backend.close();
      await pocket.close();
    });
    return WireClient(pocket, engine, backend, t, null, _store);
  }

  @override
  Future<String> createRecord(String store, Map<String, Object?> data,
      {String? id}) async {
    final rid = id ?? generateRecordId();
    await _backend.createRecord(
        id: rid, store: store, dataJson: jsonEncode(data));
    return rid;
  }

  @override
  Future<void> updateRecord(
      String store, String id, Map<String, Object?> data) async {
    await _backend.updateRecord(id: id, dataJson: jsonEncode(data));
  }

  @override
  Future<void> deleteRecord(String store, String id) async {
    final token = await _tokens.currentToken();
    final res = await _tokens.transport.send(HttpRequest(
      method: 'DELETE',
      url: Uri.parse(testPBServer).resolve('/api/collections/data/records/$id'),
      headers: {'Authorization': 'Bearer ${token.value}'},
    ));
    expect(res.status, 204, reason: 'PB answers 204 with an empty body');
  }

  @override
  Future<Map<String, Object?>?> readRecord(String store, String id) async {
    try {
      final r = await _backend.getRecord(id);
      return {'data': r!.data, 'imgs': r.imgs, 'updated': r.updated};
    } on NotFoundError {
      return null;
    }
  }

  @override
  Future<int> countRecords(String store) async {
    final token = await _tokens.currentToken();
    // Page over the real server: perPage caps at 500, so >500 records need
    // multiple pages (skipTotal=1 disables totalItems/totalPages).
    var count = 0;
    var page = 1;
    while (true) {
      final res = await _tokens.transport.send(HttpRequest(
        method: 'GET',
        url: Uri.parse(testPBServer)
            .resolve('/api/collections/data/records')
            .replace(queryParameters: {
          'filter': "(store='$store')",
          'perPage': '200',
          'page': '$page',
          'skipTotal': '1',
        }),
        headers: {'Authorization': 'Bearer ${token.value}'},
      ));
      expect(res.status, 200);
      final body = jsonDecode(res.body) as Map<String, Object?>;
      final items = body['items']! as List;
      count += items.length;
      if (items.length < 200) break;
      page++;
      if (page > 50) break; // safety valve
    }
    return count;
  }

  @override
  void onClose(Future<void> Function() hook) => _closeHooks.add(hook);

  @override
  Future<void> close() async {
    for (final close in _clientClosers) {
      try {
        await close();
      } catch (_) {}
    }
    _clientClosers.clear();
    for (final hook in _closeHooks) {
      try {
        await hook();
      } catch (_) {}
    }
    _closeHooks.clear();
    try {
      await cleanupStore(_tokens, _store);
    } catch (_) {}
    try {
      await cleanupStore(_tokens, siblingStore);
    } catch (_) {}
    _tokens.transport.close();
  }
}

/// Registers [body] against BOTH backends from a single source:
///  - `(mock)` — hermetic, runs in the default `dart test`;
///  - `(live)` — tagged `real`, skipped by default, hits pb.apexo.app.
///
/// [live] should be `false` only for scenarios that require fault injection
/// the live server cannot perform (poison, forced status, restart, garbage
/// SSE).
void wireTest(
  String name,
  Future<void> Function(WireServer s) body, {
  bool live = true,
  Timeout? timeout,
}) {
  test('$name (mock)', () async {
    final s = MockWireServer();
    addTearDown(() => s.close());
    await body(s);
  }, timeout: timeout ?? const Timeout(Duration(seconds: 60)));

  if (live) {
    test('$name (live)', () async {
      final s = RealWireServer();
      addTearDown(() => s.close());
      await body(s);
    },
        tags: ['real'],
        timeout: timeout ?? const Timeout(Duration(seconds: 120)));
  }
}

/// Registers a scenario that ONLY makes sense against the live server (e.g.
/// inspecting the real superuser login handshake) — tagged `real`, skipped by
/// default.
void liveOnly(
  String name,
  Future<void> Function(RealWireServer s) body, {
  Timeout? timeout,
}) {
  test(name, () async {
    final s = RealWireServer();
    addTearDown(() => s.close());
    await body(s);
  }, tags: ['real'], timeout: timeout ?? const Timeout(Duration(seconds: 120)));
}
