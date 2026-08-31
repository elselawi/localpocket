import 'dart:async';
import 'dart:js_interop';

import 'package:localpocket/src/runtime/remote_runtime_client.dart';
import 'package:localpocket/src/web/facade/facade_host.dart';
import 'package:localpocket/src/web/facade/open_core.dart';
import 'package:localpocket/src/web/facade/query/web_query_builder.dart';
import 'package:localpocket/src/web/facade/search/web_search_builder.dart';
import 'package:localpocket/src/web/facade/web_collections.dart';
import 'package:localpocket/src/web/facade/web_conflicts.dart';
import 'package:localpocket/src/web/facade/web_contract_events.dart';
import 'package:localpocket/src/web/facade/web_files.dart';
import 'package:localpocket/src/web/facade/web_storage_capabilities.dart';
import 'package:localpocket/src/web/facade/web_transactions.dart';
import 'package:sqlite3_web/sqlite3_web.dart';
import 'package:web/web.dart' as web;

import '../core/capabilities.dart';
import '../core/change_bus.dart';
import '../core/errors.dart';
import '../core/perf_counters.dart';
import '../core/query/query_builder/predicate_tree.dart';
import '../core/query/search_builder/search_builder.dart';
import '../core/schema.dart';
import '../core/schema_manifest.dart';
import '../core/store.dart';
import '../contract/contract.dart' as contract;
import '../sync/status.dart';
import '../typed/query_surface.dart';
import '../typed/typed.dart';
import '../typed/typed_collection.dart' show TypedStoreSurface;
import '../typed/typed_search.dart' show TypedSearchSurface;
import '../typed/sync_engine_remote.dart' show RemoteSyncSurface;
import 'assets.dart';
import 'cipher_bridge.dart';
import 'connector.dart';
import 'lifecycle.dart';
import 'protocol.dart';
import 'web_sender.dart';

/// Web facade for a worker-owned LocalPocket database on the browser.
class LocalPocket
    with ChangeBusAwareLP
    implements WebFacadeHost, RemoteSyncSurface {
  /// Creates a web facade around an already connected worker database.
  LocalPocket._({
    required this.path,
    required Database remoteDb,
    required WebSqlite webSqlite,
    required List<String> blobUrlsToRevoke,
    required this.capabilities,
    required this.storageCapabilities,
    required List<CollectionSchema<Object?>> stores,
    Duration? requestTimeout,
  })  : _remoteDb = remoteDb,
        _webSqlite = webSqlite,
        _blobUrlsToRevoke = blobUrlsToRevoke {
    for (final s in stores) {
      _storeMap[s.name] = s;
    }
    _sender = WebSender(
      transport: (req) async {
        final raw = await _remoteDb.customRequest(req.toJson().jsify());
        return raw?.dartify();
      },
      onWorkerClosed: _failWorkerStreams,
      requestTimeout: requestTimeout,
    );
    // The shared contract runtime exists for the facade's whole life: every
    // committed fact flows through its event stream, so the record-event
    // streams are bound here too, and the sync status/auth notifications are
    // fed from the same stream. One committed envelope feeds them all.
    _contractRuntime = _buildContractRuntime();
    bindRecordEventStream(runtime: _contractRuntime!, changeBus: changeBus);
    _contractRuntime!.events.listen((event) {
      if (event is contract.SyncStatusEvent) {
        if (!_syncStatusController.isClosed) {
          _syncStatusController.add(event.status.toSyncStatus());
        }
      } else if (event is contract.AuthRequiredEvent) {
        if (!_authRequiredController.isClosed) {
          _authRequiredController.add(null);
        }
      }
    });
  }

  /// The shared contract runtime over the worker transport.
  RemoteRuntimeClient _buildContractRuntime() {
    late final RemoteRuntimeClient runtime;
    runtime = RemoteRuntimeClient(
      transport: (envelope) async {
        final raw = await _remoteDb.customRequest(envelope.jsify());
        return raw?.dartify();
      },
      onWorkerClosed: () {
        unawaited(runtime.close());
      },
      requestTimeout: _sender.requestTimeout,
    );
    return runtime;
  }

  /// Filesystem path identifying the worker-owned database.
  final String path;
  final Database _remoteDb;
  final WebSqlite _webSqlite;
  final List<String> _blobUrlsToRevoke;

  /// Capabilities reported by the active SQLite implementation.
  SqliteCapabilities capabilities;

  /// Browser storage capabilities available to this facade.
  WebStorageCapabilities storageCapabilities;
  final Map<String, CollectionSchema<Object?>> _storeMap = {};

  /// The typed store registry backing [store] (and `WebTx.store`): one per
  /// facade, keyed by store name, enforced by reference identity.
  @override
  final TypedStoreRegistry typedRegistry = TypedStoreRegistry();

  /// Performance counters for this facade.
  final PerfCounters perf = PerfCounters();
  @override
  final WatchSubscriptionTracker watchTracker = WatchSubscriptionTracker();

  final StreamController<SyncStatus> _syncStatusController =
      StreamController<SyncStatus>.broadcast();
  final StreamController<void> _authRequiredController =
      StreamController<void>.broadcast();

  /// Pure-Dart request/response core over the worker transport.
  late final WebSender _sender;

  /// The shared contract runtime backing the query/search/watch families and
  /// the committed-fact event stream. Built at construction.
  RemoteRuntimeClient? _contractRuntime;

  @override
  RemoteRuntimeClient get contractRuntime {
    final existing = _contractRuntime;
    if (existing != null) return existing;
    final runtime = _buildContractRuntime();
    _contractRuntime = runtime;
    return runtime;
  }

  /// Opens or creates a database on web by spawning the dedicated engine worker.
  ///
  /// [requestTimeout] bounds how long a single request waits for the worker.
  /// A request that exceeds it throws a [DatabaseWorkerTimeoutException]
  /// without closing the facade. The worker is never auto-respawned: if it
  /// crashes, the facade surfaces [DatabaseWorkerClosedException] and stays
  /// closed — recovery means calling [open] again.
  static Future<LocalPocket> open({
    required String path,
    required List<CollectionSchema<Object?>> stores,
    Object? database,
    PlatformProfile platform = PlatformProfile.web,
    bool encrypted = false,
    Object? fieldCipher,
    Object? cryptoProvider,
    int maxDocBytes = 1900000,
    bool destructiveBackup = true,
    String? wasmAssetPath,
    String? workerAssetPath,
    Duration? requestTimeout,
  }) async {
    validateWebOpenConfig(path: path, encrypted: encrypted);

    final wasmPath =
        wasmAssetPath ?? 'assets/packages/localpocket/assets/sqlite3.wasm';
    final workerPath = workerAssetPath ??
        'assets/packages/localpocket/assets/localpocket_worker.js';

    final blobUrls = <String>[];
    String workerBlobUrl;
    String wasmBlobUrl;

    // Worker asset: primary path, falling back to the plain root asset when
    // running from a dev/test harness where the package asset 404s.
    final workerResolved = await resolveAssetAsBlobUrl(
      load: loadAssetAsBlobUrl,
      primary: workerPath,
      mimeType: 'application/javascript',
      fallbacks: const [],
      lastResort: 'assets/localpocket_worker.js',
    );
    workerBlobUrl = workerResolved.url;
    if (workerResolved.fetched) blobUrls.add(workerBlobUrl);

    // Wasm asset: primary path, then the root `assets/sqlite3.wasm`, then the
    // packaged path as a final plain-path fallback.
    final wasmResolved = await resolveAssetAsBlobUrl(
      load: loadAssetAsBlobUrl,
      primary: wasmPath,
      mimeType: 'application/wasm',
      fallbacks: const ['assets/sqlite3.wasm'],
      lastResort: 'assets/packages/localpocket/assets/sqlite3.wasm',
    );
    wasmBlobUrl = wasmResolved.url;
    if (wasmResolved.fetched) blobUrls.add(wasmBlobUrl);

    late LocalPocket pocket;
    final webSqlite = WebSqlite.open(
      workers: DedicatedOnlyConnector(workerBlobUrl),
      wasmModule: wasmBlobUrl,
      handleCustomRequest: (raw) async {
        if (raw != null) {
          pocket._handleWorkerEvent(raw);
        }
        return null;
      },
    );

    // Field-level encryption: serialize the cipher into `openArgs` so the
    // worker reconstructs an `AesGcmFieldCipher` with the same key. The key
    // crosses postMessage into the same-origin trusted worker; a cipher
    // configuration that cannot be serialized throws a typed error here
    // (never silently ignored).
    final cipherEnvelope = buildFieldCipherEnvelope(
      fieldCipher: fieldCipher,
      cryptoProvider: cryptoProvider,
      stores: stores,
    );

    final openArgs = {
      'stores': stores.map((s) => s.toJson()).toList(),
      'maxDocBytes': maxDocBytes,
      'destructiveBackup': destructiveBackup,
      // Lets the worker resolve this database's OPFS directory so it can
      // remove a stale destructive-migration backup (the worker sees only the
      // fixed in-VFS path `/database`).
      'backupDbName': path,
      if (cipherEnvelope != null) 'fieldCipher': cipherEnvelope,
    };

    final connectResult = await webSqlite.connectToRecommended(
      path,
      additionalOptions: openArgs.jsify(),
    );

    final implementation = connectResult.implementation;
    final storageName = implementation.storage.name;
    final persistent = await _requestPersistence();
    final storageCaps = WebStorageCapabilities(
      storage: storageName,
      durable: storageName == 'opfs',
      persistent: persistent,
      multiTabStorage: true,
      multiTabSync: false,
      worker: true,
    );
    const caps = SqliteCapabilities(
      sqliteVersion: '3.53.3',
      hasStrict: true,
      walSupported: false,
      hasFts5: true,
      platform: PlatformProfile.web,
    );
    pocket = LocalPocket._(
      path: path,
      remoteDb: connectResult.database,
      webSqlite: webSqlite,
      blobUrlsToRevoke: blobUrls,
      capabilities: caps,
      storageCapabilities: storageCaps,
      stores: stores,
      requestTimeout: requestTimeout,
    );

    unawaited(connectResult.database.closed.then((_) {
      pocket._markWorkerClosed();
    }));

    // Explicitly send open envelope with schemas to ensure registration.
    // The page also sends its computed manifest fingerprints; the
    // worker verifies each against its own compilation, so both runtimes
    // provably mean the same schema before any store is used.
    // Fail fast FIRST on executable features that could never survive the
    // worker boundary — the schema is never silently reduced.
    for (final s in stores) {
      final unsupported = SchemaManifest.compile(s).unsupportedFeatures;
      if (unsupported.isNotEmpty) {
        throw UnsupportedSchemaFeatureError(
            'Store "${s.name}" declares executable features that cannot '
            'run on the worker runtime: ${unsupported.join(', ')}.');
      }
    }
    await pocket.send(WireOp.open, {
      'stores': stores.map((s) => s.toJson()).toList(),
      'manifestFingerprints': {
        for (final s in stores) s.name: SchemaManifest.compile(s).fingerprint,
      },
      'maxDocBytes': maxDocBytes,
      'destructiveBackup': destructiveBackup,
    });

    // Reconcile the facade's capability snapshot against the worker's LIVE
    // capabilities. The worker probes the actual SQLite build during open
    // (SqliteCapabilities.probe), so a changed WASM asset, alternate build, or
    // storage restriction is reflected here instead of trusting a hard-coded
    // facade matrix. Falls back to the facade's initial values on any failure
    // so open() does not fail just because capability discovery glitched.
    try {
      final remote = await pocket.contractRuntime
          .send(const contract.CapabilitiesRequest());
      final reconciled = reconcileOpenCapabilities(
        capabilities: pocket.capabilities,
        storage: pocket.storageCapabilities,
        remote: {
          'sqliteVersion': remote.sqliteVersion,
          'hasStrict': remote.hasStrict,
          'walSupported': remote.walSupported,
          'hasFts5': remote.hasFts5,
          'storage': remote.storage,
          'durable': remote.durable,
          'journal': remote.journal,
        },
      );
      pocket.capabilities = reconciled.capabilities;
      pocket.storageCapabilities = reconciled.storage;
    } catch (_) {
      // Keep the facade's initial hard-coded fallback snapshot.
    }

    return pocket;
  }

  static Future<bool> _requestPersistence() => requestPersistenceWithFallback(
        () async =>
            (await web.window.navigator.storage.persist().toDart).toDart,
      );

  /// Names of the stores registered with this facade.
  Iterable<String> get storeNames => _storeMap.keys;

  @override
  int get nextRequestId => _sender.nextRequestId;

  @override
  set nextRequestId(int value) => _sender.nextRequestId = value;

  /// Sends a typed WebRequest to the worker and decodes the response.
  ///
  /// Delegates to the pure-Dart [WebSender] core: closed detection, closed
  /// marker classification, envelope validation, and error decoding all live
  /// there and are unit-tested on the VM.
  @override
  Future<Object?> send(String op,
          [Map<String, Object?> args = const {}]) async =>
      _sender.send(op, args);

  void _markWorkerClosed() => _sender.markWorkerClosed();

  void _failWorkerStreams() {
    failWorkerStreams(
      syncStatusController: _syncStatusController,
      authRequiredController: _authRequiredController,
    );
  }

  void _handleWorkerEvent(JSAny raw) {
    try {
      final value = raw.dartify();
      if (value is! Map) return;
      final event = value.map((k, v) => MapEntry(k.toString(), v));
      _contractRuntime?.handleWorkerEvent(event);
    } catch (_) {
      // A malformed unsolicited event must not tear down unrelated requests.
      // The contract runtime guards its own decode path; the status/auth
      // streams fail through `_failWorkerStreams` when the worker goes away.
    }
  }

  @override
  CollectionSchema<Object?> schemaFor(String store) =>
      _storeMap[store] ??
      (throw StateError('No store "$store" registered in this LocalPocket.'));

  /// Returns a collection proxy for the registered store [name].
  WebCollection collection(String name) =>
      WebCollection.ins(this, schemaFor(name));

  /// Returns a typed handle for the store definition [def].
  ///
  /// Mirrors the native `LocalPocket.store`: the first bind stores [def] in
  /// this facade's typed registry (reference identity), and the store's
  /// schema must have been registered at [open] (`stores:`). Inside a web
  /// transaction, use `tx.store(def)` instead.
  TypedCollection<S> store<S extends StoreDef<S>>(S def) {
    if (_sender.isClosed) {
      throw DatabaseWorkerClosedException('LocalPocket is closed.');
    }
    final registered = schemaFor(def.name);
    def.verifyRegisteredSchema(registered);
    typedRegistry.bind(def);
    return typedRegistry.cachedCollection<S>(
      def,
      () => TypedCollection<S>(
        def,
        _WebTypedSurface(WebCollection.ins(this, registered)),
      ),
    );
  }

  WebLocalPocketFiles? _files;

  /// Page-facing file attachment and blob lifecycle API (worker-owned store).
  WebLocalPocketFiles get files => _files ??= WebLocalPocketFiles.ins(this);

  WebConflicts? _conflicts;

  /// Conflict inspection, watch, and resolution API (worker-owned engine).
  ///
  /// Mirrors the native `pocket.conflicts` surface: `listOpen`, `get`,
  /// `watch`, `resolve`, `acceptLocal`, `acceptRemote`.
  WebConflicts get conflicts => _conflicts ??= WebConflicts.ins(this);

  /// Runs [action] in an interactive transaction session. The session is
  /// kernel-minted and settles only after the real commit/rollback has run.
  Future<T> transaction<T>(Future<T> Function(WebTx tx) action) async {
    final begun = await contractRuntime
        .send(const contract.TransactionBeginRequest(readOnly: false));
    final tx = WebTx.ins(this, begun.session);

    try {
      final result = await action(tx);
      await contractRuntime
          .send(contract.TransactionCommitRequest(session: begun.session));
      return result;
    } catch (e) {
      try {
        await contractRuntime
            .send(contract.TransactionRollbackRequest(session: begun.session));
      } catch (_) {}
      rethrow;
    }
  }

  /// Updates query statistics for [store], or for all stores when omitted.
  Future<void> analyze([String? store]) async {
    await contractRuntime.send(contract.AnalyzeRequest(store: store));
  }

  /// Runs a passive WAL checkpoint in the worker.
  Future<void> walCheckpoint() async {
    await contractRuntime.send(const contract.WalCheckpointRequest());
  }

  /// Reclaims unused database pages.
  ///
  /// The typed contract runs the kernel's full `VACUUM`; the [pages] hint is
  /// not carried (`VacuumRequest.pages` is a deferred contract field).
  Future<void> vacuum({int? pages}) async {
    await contractRuntime.send(const contract.VacuumRequest());
  }

  /// Removes orphaned or settled (clean) entries from the sync outbox.
  ///
  /// Pending ops are never evicted: the op is the only record of an unsynced
  /// local edit. [maxEntries] is retained for API compatibility but no longer
  /// bounds the outbox.
  Future<int> pruneOutbox({int maxEntries = 10000}) async {
    final res = await contractRuntime.send(const contract.PruneOutboxRequest());
    return res.removed;
  }

  /// Compacts archived records in [store] older than [olderThan].
  ///
  /// The contract carries no `nowMs` override (a deferred field); the kernel
  /// clock decides "older than".
  Future<int> compact(String store,
      {required Duration olderThan, int? nowMs}) async {
    final res = await contractRuntime.send(contract.CompactRequest(
      store: store,
      olderThanMs: olderThan.inMilliseconds,
    ));
    return res.removed;
  }

  /// Runs maintenance tasks for the worker-owned database.
  Future<void> runMaintenance(
      {Duration compactOlderThan = const Duration(days: 90)}) async {
    await contractRuntime.send(contract.RunMaintenanceRequest(
        compactOlderThanMs: compactOlderThan.inMilliseconds));
  }

  // -------------------------------------------------- Sync & auth controls

  /// Starts the synchronization engine in the worker with the given credentials.
  ///
  /// Sync start owns realtime: the engine opens its SSE connection as part of
  /// the start command. Note: Supported configuration is one tab running sync.
  Future<void> startSync(
      {String? baseUrl, String? scopeId, String? token}) async {
    if (baseUrl == null || baseUrl.isEmpty) {
      throw ValidationException('syncStart requires baseUrl.');
    }
    await contractRuntime.send(contract.SyncStartRequest(
      baseUrl: baseUrl,
      scopeId: scopeId,
      token: token,
    ));
  }

  /// Stops the synchronization engine in the worker.
  Future<void> stopSync() async {
    await contractRuntime.send(const contract.SyncStopRequest());
  }

  /// Triggers a manual synchronization cycle immediately and returns the
  /// typed cycle report from the worker-owned engine.
  Future<SyncReport> syncNow() async {
    final res = await contractRuntime.send(const contract.SyncNowRequest());
    return res.report.toSyncReport();
  }

  /// Updates the authentication token on the worker after a refresh or login.
  Future<void> updateAuth(String? token) async {
    await contractRuntime.send(contract.SyncUpdateAuthRequest(token: token));
  }

  /// Pauses periodic and event-driven sync cycles.
  Future<void> pauseSync() async {
    await contractRuntime.send(const contract.SyncPauseRequest());
  }

  /// Resumes synchronization cycles.
  Future<void> resumeSync() async {
    await contractRuntime.send(const contract.SyncResumeRequest());
  }

  /// Informs the sync engine of online/offline connectivity changes.
  Future<void> setConnectivity(bool online) async {
    await contractRuntime
        .send(contract.SyncSetConnectivityRequest(online: online));
  }

  /// Worker-owned synchronization status snapshots, pushed as contract
  /// events from the engine's status stream.
  Stream<SyncStatus> get syncStatus => _syncStatusController.stream;

  /// Emits when the worker cannot refresh a rejected sync token.
  Stream<void> get authRequired => _authRequiredController.stream;

  /// Closes the database and releases browser resources.
  ///
  /// ONE close behavior for every runtime: the facade sends the contract
  /// `CloseRequest`, and the KERNEL stops sync, settles watches, upload
  /// sessions, and transactions, and shuts the engine down. The worker keeps
  /// its envelope loop and boot handshake; the page disposes its transport
  /// and controller resources either way.
  Future<void> close() async {
    if (_sender.isClosed) return;
    await closeWebResources(
      sendWorkerClose: () async {
        await contractRuntime.send(const contract.CloseRequest());
        await contractRuntime.close();
      },
      markClosed: () {
        _sender.markClosedLocal();
        changeBus.close();
        typedRegistry.clearHandles();
      },
      disposePageResources: () async {
        await _syncStatusController.close();
        await _authRequiredController.close();
        for (final url in _blobUrlsToRevoke) {
          try {
            web.URL.revokeObjectURL(url);
          } catch (_) {}
        }
        await _remoteDb.dispose();
        _webSqlite.close();
      },
    );
  }
}

/// {@template localpocket.__web_typed_surface}
/// Web adapter for the typed layer's map-level seam: delegates verbatim to a
/// [WebCollection] (no `durability` parameter — same as the raw web surface).
/// {@endtemplate}
final class _WebTypedSurface implements TypedStoreSurface {
  /// {@macro localpocket.__web_typed_surface}
  _WebTypedSurface(this._collection);

  final WebCollection _collection;

  @override
  Future<Map<String, Object?>?> get(String id) => _collection.get(id);

  @override
  Future<void> put(Map<String, Object?> record) => _collection.put(record);

  @override
  Future<void> putAll(List<Map<String, Object?>> records) =>
      _collection.putAll(records);

  @override
  Future<void> upsert(Map<String, Object?> record) =>
      _collection.upsert(record);

  @override
  Future<void> upsertAll(List<Map<String, Object?>> records) =>
      _collection.upsertAll(records);

  @override
  Future<void> patch(String id, Map<String, Object?> changes) =>
      _collection.patch(id, changes);

  @override
  Future<void> patchAll(Map<String, Map<String, Object?>> patches) =>
      _collection.patchAll(patches);

  @override
  Future<void> archive(String id) => _collection.archive(id);

  @override
  Future<void> restore(String id) => _collection.restore(id);

  @override
  Future<void> purge(String id) => _collection.purge(id);

  @override
  Stream<Map<String, Object?>?> watchOne(String id) => _collection.watchOne(id);

  @override
  TypedQuerySurface query() => _WebTypedQuerySurface(_collection.query());

  @override
  TypedSearchSurface search(String term) =>
      _WebTypedSearchSurface(_collection.search(term));
}

final class _WebTypedQuerySurface implements TypedQuerySurface {
  _WebTypedQuerySurface(this._builder);

  final WebQueryBuilder _builder;

  @override
  void wherePredicate(PredicateNode node) {
    _builder.wherePredicate(node);
  }

  @override
  void orderBy(String field, {bool desc = false}) {
    _builder.orderBy(field, desc: desc);
  }

  @override
  void select(List<String> fields) {
    _builder.select(fields);
  }

  @override
  void pageOptions({
    required int limit,
    bool? includeArchived,
    bool? includeHidden,
  }) {
    // The unbounded sentinel expands to the no-LIMIT path here, so the raw
    // value never crosses the worker wire as a page size.
    if (limit == Limits.unbounded) {
      _builder.all();
    } else {
      _builder.limit(limit);
    }
    if (includeArchived ?? false) _builder.includeArchived();
    if (includeHidden ?? false) _builder.includeHidden();
  }

  @override
  Future<Page> fetch({String? cursor}) => _builder.fetch(cursor: cursor);

  @override
  Future<Page> keysetAfter(String cursor) => _builder.keysetAfter(cursor);

  @override
  Future<Page> keysetBefore(String cursor) => _builder.keysetBefore(cursor);

  @override
  Future<int> count() => _builder.count();

  @override
  Future<int> countDistinct(String field) => _builder.countDistinct(field);

  @override
  Future<List<Object?>> distinct(String field) => _builder.distinct(field);

  @override
  Future<List<String>> ids() => _builder.ids();

  @override
  Future<String> explain() => _builder.explain();

  @override
  Future<num?> aggregate(String fn, String field) => switch (fn) {
        'sum' => _builder.sum(field),
        'min' => _builder.min(field),
        'max' => _builder.max(field),
        'avg' => _builder.avg(field),
        _ => throw ArgumentError.value(fn, 'fn', 'Unknown aggregate.'),
      };

  @override
  (String, List<Object?>) debugCompile() => _builder.queryCore.debugCompile();

  @override
  Stream<List<Map<String, Object?>>> watch() => _builder.watch();
}

final class _WebTypedSearchSurface implements TypedSearchSurface {
  _WebTypedSearchSurface(this._builder);

  final WebSearchBuilder _builder;

  @override
  void limit(int n) {
    _builder.limit(n);
  }

  @override
  void all() {
    _builder.all();
  }

  @override
  void includeArchived() {
    _builder.includeArchived();
  }

  @override
  void includeHidden() {
    _builder.includeHidden();
  }

  @override
  Future<List<SearchResult>> fetch() => _builder.fetch();

  @override
  (String, List<Object?>) debugCompile() => _builder.searchCore.debugCompile();
}
