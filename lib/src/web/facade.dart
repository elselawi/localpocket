import 'dart:async';
import 'dart:js_interop';
import 'dart:typed_data';

import 'package:localpocket/src/web/facade/facade_host.dart';
import 'package:localpocket/src/web/facade/open_core.dart';
import 'package:localpocket/src/web/facade/web_collections.dart';
import 'package:localpocket/src/web/facade/web_conflicts.dart';
import 'package:localpocket/src/web/facade/web_files.dart';
import 'package:localpocket/src/web/facade/web_storage_capabilities.dart';
import 'package:localpocket/src/web/facade/web_transactions.dart';
import 'package:sqlite3_web/sqlite3_web.dart';
import 'package:web/web.dart' as web;

import '../core/capabilities.dart';
import '../core/change_bus.dart';
import '../core/perf_counters.dart';
import '../core/schema.dart';
import '../sync/conflicts.dart';
import 'assets.dart';
import 'cipher_bridge.dart';
import 'connector.dart';
import 'conversions.dart';
import 'lifecycle.dart';
import 'protocol.dart';
import 'web_sender.dart';

/// Web facade for a worker-owned LocalPocket database on the browser.
class LocalPocket with ChangeBusAwareLP implements WebFacadeHost {
  /// Creates a web facade around an already connected worker database.
  LocalPocket._({
    required this.path,
    required Database remoteDb,
    required WebSqlite webSqlite,
    required List<String> blobUrlsToRevoke,
    required this.capabilities,
    required this.storageCapabilities,
    required List<CollectionSchema<Object?>> stores,
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
    );
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

  /// Performance counters for this facade.
  final PerfCounters perf = PerfCounters();
  @override
  final Map<int, StreamController<dynamic>> workerStreams = {};
  @override
  final WatchSubscriptionTracker watchTracker = WatchSubscriptionTracker();

  /// Optional per-watch transform applied to a worker event value before it is
  /// added to the matching [workerStreams] controller. Used by watch types
  /// whose wire payload needs structural decoding (e.g. conflicts -> typed
  /// [ConflictRecord] lists).
  @override
  final Map<int, Object? Function(Object?)> workerEventDecoders = {};
  final StreamController<Map<String, Object?>> _syncStatusController =
      StreamController<Map<String, Object?>>.broadcast();
  final StreamController<void> _authRequiredController =
      StreamController<void>.broadcast();

  /// Pure-Dart request/response core over the worker transport.
  late final WebSender _sender;

  /// Opens or creates a database on web by spawning the dedicated engine worker.
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
    );

    unawaited(connectResult.database.closed.then((_) {
      pocket._markWorkerClosed();
    }));

    // Explicitly send open envelope with schemas to ensure registration
    await pocket.send(WireOp.open, {
      'stores': stores.map((s) => s.toJson()).toList(),
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
      final remote = await pocket.send(WireOp.capabilities);
      final reconciled = reconcileOpenCapabilities(
        capabilities: pocket.capabilities,
        storage: pocket.storageCapabilities,
        remote: remote is Map
            ? remote.map((k, v) => MapEntry(k.toString(), v))
            : null,
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
      workerStreams: workerStreams,
      workerEventDecoders: workerEventDecoders,
      syncStatusController: _syncStatusController,
      authRequiredController: _authRequiredController,
    );
  }

  void _handleWorkerEvent(JSAny raw) {
    try {
      final value = raw.dartify();
      if (value is! Map) return;
      final event = value.map((k, v) => MapEntry(k.toString(), v));
      handleWorkerEventEnvelope(
        event,
        workerStreams: workerStreams,
        workerEventDecoders: workerEventDecoders,
        authRequiredController: _authRequiredController,
        syncStatusController: _syncStatusController,
        changeBus: changeBus,
      );
    } catch (e, stack) {
      // A malformed unsolicited event must not tear down unrelated requests.
      for (final stream in workerStreams.values) {
        if (!stream.isClosed) stream.addError(e, stack);
      }
    }
  }

  @override
  CollectionSchema<Object?> schemaFor(String store) =>
      _storeMap[store] ??
      (throw StateError('No store "$store" registered in this LocalPocket.'));

  /// Returns a collection proxy for the registered store [name].
  WebCollection collection(String name) =>
      WebCollection.ins(this, schemaFor(name));

  WebLocalPocketFiles? _files;

  /// Page-facing file attachment and blob lifecycle API (worker-owned store).
  WebLocalPocketFiles get files => _files ??= WebLocalPocketFiles.ins(this);

  WebConflicts? _conflicts;

  /// Conflict inspection, watch, and resolution API (worker-owned engine).
  ///
  /// Mirrors the native `pocket.conflicts` surface: `listOpen`, `get`,
  /// `watch`, `resolve`, `acceptLocal`, `acceptRemote`.
  WebConflicts get conflicts => _conflicts ??= WebConflicts.ins(this);

  /// Runs [action] in an interactive transaction session (§7.1).
  Future<T> transaction<T>(Future<T> Function(WebTx tx) action) async {
    final beginRes = (await send(WireOp.txBegin))! as Map<String, Object?>;
    final sessionId = beginRes['sessionId']! as int;
    final tx = WebTx.ins(this, sessionId);

    try {
      final result = await action(tx);
      await send(WireOp.txCommit, {'sessionId': sessionId});
      return result;
    } catch (e) {
      try {
        await send(WireOp.txRollback, {'sessionId': sessionId});
      } catch (_) {}
      rethrow;
    }
  }

  /// Updates query statistics for [store], or for all stores when omitted.
  Future<void> analyze([String? store]) async {
    await send(WireOp.analyze, {'store': store});
  }

  /// Runs a passive WAL checkpoint in the worker.
  Future<void> walCheckpoint() async {
    await send(WireOp.walCheckpoint);
  }

  /// Reclaims unused database pages, optionally limiting the number of [pages].
  Future<void> vacuum({int? pages}) async {
    await send(WireOp.vacuum, {'pages': pages});
  }

  /// Removes up to [maxEntries] acknowledged entries from the sync outbox.
  Future<int> pruneOutbox({int maxEntries = 10000}) async {
    final res = (await send(WireOp.pruneOutbox, {'maxEntries': maxEntries}))!
        as Map<String, Object?>;
    return (res['pruned'] as int?) ?? 0;
  }

  /// Compacts archived records in [store] older than [olderThan].
  Future<int> compact(String store,
      {required Duration olderThan, int? nowMs}) async {
    final res = (await send(WireOp.compact, {
      'store': store,
      'olderThanMs': olderThan.inMilliseconds,
      if (nowMs != null) 'nowMs': nowMs,
    }))! as Map<String, Object?>;
    return (res['compacted'] as int?) ?? 0;
  }

  /// Runs maintenance tasks for the worker-owned database.
  Future<void> runMaintenance(
      {Duration compactOlderThan = const Duration(days: 90)}) async {
    await send(WireOp.runMaintenance, {
      'compactOlderThanMs': compactOlderThan.inMilliseconds,
    });
  }

  // -------------------------------------------------- Sync & Auth Controls (§8, §12)

  /// Starts the synchronization engine in the worker with the given credentials.
  ///
  /// Note: Supported configuration is one tab running sync (§12).
  Future<void> startSync(
      {String? baseUrl, String? scopeId, String? token}) async {
    await send(WireOp.syncStart, {
      if (baseUrl != null) 'baseUrl': baseUrl,
      if (scopeId != null) 'scopeId': scopeId,
      if (token != null) 'token': token,
    });
  }

  /// Stops the synchronization engine in the worker.
  Future<void> stopSync() async {
    await send(WireOp.syncStop);
  }

  /// Triggers a manual synchronization cycle immediately.
  Future<void> syncNow() async {
    await send(WireOp.syncNow);
  }

  /// Updates the authentication token on the worker after a refresh or login.
  Future<void> updateAuth(String? token) async {
    await send(WireOp.syncUpdateAuth, {'token': token});
  }

  /// Pauses periodic and event-driven sync cycles.
  Future<void> pauseSync() async {
    await send(WireOp.syncPause);
  }

  /// Resumes synchronization cycles.
  Future<void> resumeSync() async {
    await send(WireOp.syncResume);
  }

  /// Informs the sync engine of online/offline connectivity changes.
  Future<void> setConnectivity(bool online) async {
    await send(WireOp.syncSetConnectivity, {'online': online});
  }

  /// Uploads [bytes] to a record attachment via bounded chunks (task 3).
  ///
  /// Splits the payload into <=256 KiB chunks so no single custom request
  /// carries a large byte list, then finishes and returns the created
  /// `FileRef` fields from the worker-owned store.
  static const int _fileChunkBytes = 262144;

  @override
  Future<Map<String, Object?>> filesUpload({
    required String store,
    required String recordId,
    required List<int> bytes,
    String field = 'imgs',
    String name = 'blob.bin',
    int? expectedSize,
    String? expectedSha256,
  }) async {
    if (expectedSize != null && expectedSize != bytes.length) {
      throw StateError(
          'Size mismatch: expected $expectedSize but got ${bytes.length}');
    }
    final beginRes = (await send(WireOp.fileUploadBegin, {
      'store': store,
      'recordId': recordId,
      'field': field,
      'name': name,
      'size': bytes.length,
      if (expectedSha256 != null) 'expectedSha256': expectedSha256,
    }))! as Map<String, Object?>;
    final uploadId = beginRes['uploadId']! as int;

    try {
      for (var offset = 0; offset < bytes.length; offset += _fileChunkBytes) {
        final end = (offset + _fileChunkBytes < bytes.length)
            ? offset + _fileChunkBytes
            : bytes.length;
        final chunk = Uint8List.fromList(bytes.sublist(offset, end));
        await send(WireOp.fileUploadChunk, {
          'uploadId': uploadId,
          'chunk': encodeWireValue(chunk),
        });
      }
      final res = (await send(WireOp.fileUploadFinish, {
        'uploadId': uploadId,
      }))! as Map;
      return res.map((k, v) => MapEntry(k.toString(), v));
    } catch (_) {
      // Best-effort abort prevents the worker's in-memory upload registry from
      // retaining a partial session after a chunk or finish failure.
      try {
        await send(WireOp.fileUploadAbort, {'uploadId': uploadId});
      } catch (_) {}
      rethrow;
    }
  }

  /// Lists file references attached to a record field (metadata RPC).
  @override
  Future<List<Map<String, Object?>>> filesList({
    required String store,
    required String recordId,
    String field = 'imgs',
  }) async {
    final res = (await send(WireOp.fileList, {
      'store': store,
      'recordId': recordId,
      'field': field,
    }))! as Map<String, Object?>;
    final refs = res['refs']! as List<Object?>;
    return refs
        .map((item) => (item! as Map<Object?, Object?>)
            .map((k, v) => MapEntry(k.toString(), v)))
        .toList();
  }

  /// Opens a file's bytes for a record (metadata RPC; full read-back).
  @override
  Future<Uint8List> filesOpen({
    required String store,
    required String recordId,
    String field = 'imgs',
    int index = 0,
    String? refId,
  }) async {
    final res = (await send(WireOp.fileOpen, {
      'store': store,
      'recordId': recordId,
      'field': field,
      'index': index,
      if (refId != null) 'refId': refId,
    }))! as Map<String, Object?>;
    final bytes = decodeWireValue(res['bytes']);
    if (bytes is! List) throw StateError('Malformed file bytes response');
    return Uint8List.fromList(bytes.cast<int>());
  }

  /// Removes a file reference from a record (metadata RPC).
  @override
  Future<void> filesRemove({
    required String store,
    required String recordId,
    String field = 'imgs',
    int index = 0,
    String? refId,
  }) async {
    await send(WireOp.fileRemove, {
      'store': store,
      'recordId': recordId,
      'field': field,
      'index': index,
      if (refId != null) 'refId': refId,
    });
  }

  /// Garbage-collects blobs in the worker-owned store.
  @override
  Future<int> filesGc({
    Duration blobGrace = const Duration(days: 7),
    Duration tmpGrace = const Duration(hours: 24),
  }) async {
    final res = (await send(WireOp.fileGc, {
      'blobGraceMs': blobGrace.inMilliseconds,
      'tmpGraceMs': tmpGrace.inMilliseconds,
    }))! as Map;
    return (res['cleaned'] as int?) ?? 0;
  }

  /// Enforces the storage cap via LRU eviction of synced blobs.
  @override
  Future<int> filesEnforceStorageCap({required int maxBytes}) async {
    final res = (await send(WireOp.fileEnforceStorageCap, {
      'maxBytes': maxBytes,
    }))! as Map;
    return (res['evicted'] as int?) ?? 0;
  }

  /// Worker-owned synchronization status snapshots.
  Stream<Map<String, Object?>> get syncStatus => _syncStatusController.stream;

  /// Emits when the worker cannot refresh a rejected sync token.
  Stream<void> get authRequired => _authRequiredController.stream;

  /// Closes the worker connection and releases browser resources.
  Future<void> close() async {
    if (_sender.isClosed) return;
    try {
      await send(WireOp.close);
    } catch (_) {}
    _sender.markClosedLocal();
    changeBus.close();
    await _syncStatusController.close();
    await _authRequiredController.close();
    for (final url in _blobUrlsToRevoke) {
      try {
        web.URL.revokeObjectURL(url);
      } catch (_) {}
    }
    await _remoteDb.dispose();
    _webSqlite.close();
  }
}
