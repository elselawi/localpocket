import 'dart:async';
import 'dart:js_interop';
import 'dart:typed_data';

import 'package:sqlite3_web/sqlite3_web.dart';
import 'package:web/web.dart' as web;

import '../core/capabilities.dart';
import '../core/change_bus.dart';
import '../core/perf_counters.dart';
import '../core/query.dart' show QueryBuilder, SearchQueryBuilder, SearchResult;
import '../core/query_plan.dart';
import '../core/schema.dart';
import '../core/store.dart';
import '../sync/conflicts.dart';
import 'assets.dart';
import 'cipher_bridge.dart';
import 'conflicts_bridge.dart';
import 'connector.dart';
import 'conversions.dart';
import 'lifecycle.dart';
import 'protocol.dart';

/// Sends an engine-compiled [QueryPlan] to the worker as the single read
/// envelope and returns the decoded response map.
Future<Map<String, Object?>> _sendCompiledPlan(
  LocalPocket pocket,
  QueryPlan plan, {
  int? sessionId,
  int? pageLimit,
  int? watchId,
}) async {
  final res = await pocket
      ._send(watchId != null ? WireOp.watchQuery : WireOp.compiledQuery, {
    'type': plan.typeName,
    'operation': plan.operation,
    'compilerVersion': plan.compilerVersion,
    'store': plan.store,
    'schemaVersion': plan.schemaVersion,
    'schemaFingerprint': plan.schemaFingerprint,
    'argumentCount': plan.argumentCount,
    'sql': plan.sql,
    'args': plan.args.map(encodeWireValue).toList(),
    'limit': plan.limit,
    'projection': plan.projection,
    'decodeColumns': plan.decodeColumns,
    'shape': plan.shape,
    if (sessionId != null) 'sessionId': sessionId,
    if (pageLimit != null) 'pageLimit': pageLimit,
    if (watchId != null) 'watchId': watchId,
  });
  return (res as Map).map((k, v) => MapEntry(k.toString(), v));
}

/// Decodes a page response produced by the worker's compiled `query` path.
Page _pageFromCompiled(QueryBuilder core, Map<String, Object?> res) {
  final items = (res['items'] as List).map((i) {
    final d = decodeWireValue(i) as Map;
    return d.map((k, v) => MapEntry(k.toString(), v));
  }).toList();
  final hasMore = res['hasMore'] as bool;
  final rawLast = res['lastRow'];
  return Page(
    items: items,
    hasMore: hasMore,
    nextCursor: hasMore && rawLast is Map
        ? core.cursorForCompiledRow(
            rawLast.map((k, v) => MapEntry(k.toString(), decodeWireValue(v))))
        : null,
  );
}

/// Main-thread public `LocalPocket` implementation for web.
///
/// Dispatches public-API requests (`WebRequest`) to the dedicated engine worker
/// over `Database.customRequest`.
class WebStorageCapabilities {
  final String storage;
  final bool durable;
  final bool persistent;
  final bool multiTabStorage;
  final bool multiTabSync;
  final bool worker;

  const WebStorageCapabilities({
    required this.storage,
    required this.durable,
    required this.persistent,
    required this.multiTabStorage,
    required this.multiTabSync,
    required this.worker,
  });

  Map<String, Object?> toJson() => {
        'storage': storage,
        'durable': durable,
        'persistent': persistent,
        'multiTabStorage': multiTabStorage,
        'multiTabSync': multiTabSync,
        'worker': worker,
      };
}

class LocalPocket {
  static int _memoryDatabaseSequence = 0;

  final String path;
  final Database _remoteDb;
  final WebSqlite _webSqlite;
  final List<String> _blobUrlsToRevoke;
  SqliteCapabilities capabilities;
  WebStorageCapabilities storageCapabilities;
  final Map<String, CollectionSchema> _storeMap = {};
  final ChangeBus changeBus = ChangeBus();
  final PerfCounters perf = PerfCounters();
  final Map<int, StreamController<dynamic>> _workerStreams = {};
  final WatchSubscriptionTracker _watchTracker = WatchSubscriptionTracker();

  /// Optional per-watch transform applied to a worker event value before it is
  /// added to the matching [_workerStreams] controller. Used by watch types
  /// whose wire payload needs structural decoding (e.g. conflicts -> typed
  /// [ConflictRecord] lists).
  final Map<int, Object? Function(Object?)> _workerEventDecoders = {};
  final StreamController<Map<String, Object?>> _syncStatusController =
      StreamController<Map<String, Object?>>.broadcast();
  final StreamController<void> _authRequiredController =
      StreamController<void>.broadcast();

  bool _closed = false;
  int _nextRequestId = 1;

  LocalPocket._({
    required this.path,
    required Database remoteDb,
    required WebSqlite webSqlite,
    required List<String> blobUrlsToRevoke,
    required this.capabilities,
    required this.storageCapabilities,
    required List<CollectionSchema> stores,
  })  : _remoteDb = remoteDb,
        _webSqlite = webSqlite,
        _blobUrlsToRevoke = blobUrlsToRevoke {
    for (final s in stores) {
      _storeMap[s.name] = s;
    }
  }

  /// Opens or creates a database on web by spawning the dedicated engine worker.
  static Future<LocalPocket> open({
    required String path,
    required List<CollectionSchema> stores,
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
    final wasmPath =
        wasmAssetPath ?? 'assets/packages/localpocket/assets/sqlite3.wasm';
    final workerPath = workerAssetPath ??
        'assets/packages/localpocket/assets/localpocket_worker.js';

    final blobUrls = <String>[];
    String workerBlobUrl;
    String wasmBlobUrl;

    try {
      workerBlobUrl =
          await loadAssetAsBlobUrl(workerPath, 'application/javascript');
      blobUrls.add(workerBlobUrl);
    } catch (_) {
      // Fallback if running from root test / dev harness
      workerBlobUrl = 'assets/localpocket_worker.js';
    }

    try {
      wasmBlobUrl = await loadAssetAsBlobUrl(wasmPath, 'application/wasm');
      blobUrls.add(wasmBlobUrl);
    } catch (_) {
      try {
        wasmBlobUrl =
            await loadAssetAsBlobUrl('assets/sqlite3.wasm', 'application/wasm');
        blobUrls.add(wasmBlobUrl);
      } catch (_) {
        wasmBlobUrl = 'assets/packages/localpocket/assets/sqlite3.wasm';
      }
    }

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

    final ConnectToRecommendedResult connectResult;
    if (path == ':memory:') {
      // sqlite3_web uses the database name as a worker identifier even for
      // in-memory storage. The SQLite ':memory:' sentinel is not a valid
      // worker database name and causes a null JS database response. Keep the
      // public path contract while using a unique worker-safe name internally.
      final memoryName = 'localpocket_memory_${++_memoryDatabaseSequence}';
      final db = await webSqlite.connect(
        memoryName,
        DatabaseImplementation.inMemoryShared,
        additionalOptions: openArgs.jsify(),
      );
      connectResult = ConnectToRecommendedResult(
        database: db,
        features: await webSqlite.runFeatureDetection(),
        implementation: DatabaseImplementation.inMemoryShared,
      );
    } else {
      connectResult = await webSqlite.connectToRecommended(
        path,
        additionalOptions: openArgs.jsify(),
      );
    }

    if (encrypted) {
      throw UnsupportedError('SQLCipher is unsupported on web platform.');
    }

    final implementation = connectResult.implementation;
    final storageName = implementation.storage.name;
    final persistent = await _requestPersistence();
    final storageCaps = WebStorageCapabilities(
      storage: path == ':memory:' ? 'memory' : storageName,
      durable: path != ':memory:' && storageName == 'opfs',
      persistent: path != ':memory:' && persistent,
      multiTabStorage: path != ':memory:',
      multiTabSync: false,
      worker: true,
    );
    final caps = SqliteCapabilities(
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
    await pocket._send(WireOp.open, {
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
      final remote = await pocket._send(WireOp.capabilities) as Map;
      final remoteMap = remote.map((k, v) => MapEntry(k.toString(), v));
      final caps = SqliteCapabilities(
        sqliteVersion: remoteMap['sqliteVersion'] as String? ??
            pocket.capabilities.sqliteVersion,
        hasStrict:
            remoteMap['hasStrict'] as bool? ?? pocket.capabilities.hasStrict,
        walSupported: remoteMap['walSupported'] as bool? ??
            pocket.capabilities.walSupported,
        hasFts5: remoteMap['hasFts5'] as bool? ?? pocket.capabilities.hasFts5,
        platform: PlatformProfile.web,
      );
      pocket.capabilities = caps;
      pocket.storageCapabilities = WebStorageCapabilities(
        storage: remoteMap['storage'] as String? ??
            pocket.storageCapabilities.storage,
        durable:
            remoteMap['durable'] as bool? ?? pocket.storageCapabilities.durable,
        persistent: remoteMap['persistent'] as bool? ??
            pocket.storageCapabilities.persistent,
        multiTabStorage: remoteMap['multiTabStorage'] as bool? ??
            pocket.storageCapabilities.multiTabStorage,
        multiTabSync: remoteMap['multiTabSync'] as bool? ??
            pocket.storageCapabilities.multiTabSync,
        worker:
            remoteMap['worker'] as bool? ?? pocket.storageCapabilities.worker,
      );
    } catch (_) {
      // Keep the facade's initial hard-coded fallback snapshot.
    }

    return pocket;
  }

  static Future<bool> _requestPersistence() async {
    try {
      // Firefox can hold this promise pending on a permission prompt that may
      // never be answered (e.g. headless). Treat an unanswered prompt as
      // not-persistent rather than hanging open() forever.
      final result = await web.window.navigator.storage
          .persist()
          .toDart
          .timeout(const Duration(seconds: 10), onTimeout: () => false.toJS);
      return result.toDart;
    } catch (_) {
      return false;
    }
  }

  /// Sends a typed WebRequest to the worker and decodes the response.
  Future<Object?> _send(String op,
      [Map<String, Object?> args = const {}]) async {
    if (_closed) {
      throw DatabaseWorkerClosedException('LocalPocket is closed.');
    }
    final req = WebRequest(
      version: webProtocolVersion,
      requestId: _nextRequestId++,
      op: op,
      args: args,
    );

    final JSAny? rawResponse;
    try {
      rawResponse = await _remoteDb.customRequest(req.toJson().jsify());
    } on Exception catch (e) {
      final message = e.toString();
      if (message.contains('Channel to database worker is closed') ||
          message.contains('worker is closed') ||
          message.contains('Worker closed')) {
        _markWorkerClosed();
        throw DatabaseWorkerClosedException(message);
      }
      rethrow;
    }

    if (rawResponse == null) {
      throw ProtocolEnvelopeException('Null response from worker.');
    }
    final dartMap = (rawResponse.dartify() as Map?)
        ?.map((k, v) => MapEntry(k.toString(), v));
    if (dartMap == null) {
      throw ProtocolEnvelopeException('Malformed response map from worker.');
    }

    final resp = WebResponse.fromJson(
      dartMap,
      expectedVersion: webProtocolVersion,
    );
    if (resp.isError) {
      throw decodeError(resp.error!);
    }
    return resp.result;
  }

  Iterable<String> get storeNames => _storeMap.keys;

  void _markWorkerClosed() {
    if (_closed) return;
    _closed = true;
    final error = DatabaseWorkerClosedException(
        'The database worker closed unexpectedly.');
    for (final stream in _workerStreams.values) {
      if (!stream.isClosed) stream.addError(error);
    }
    _workerStreams.clear();
    _workerEventDecoders.clear();
    if (!_syncStatusController.isClosed) _syncStatusController.addError(error);
    if (!_authRequiredController.isClosed) {
      _authRequiredController.addError(error);
    }
  }

  void _handleWorkerEvent(JSAny raw) {
    try {
      final value = raw.dartify();
      if (value is! Map) return;
      final event = value.map((k, v) => MapEntry(k.toString(), v));
      if (event['v'] != webProtocolVersion) {
        return;
      }
      if (event['op'] == WireOp.authRequired) {
        if (!_authRequiredController.isClosed) {
          _authRequiredController.add(null);
        }
        return;
      }
      if (event['op'] == WireOp.syncStatus) {
        final status = event['status'];
        if (status is Map && !_syncStatusController.isClosed) {
          _syncStatusController.add(
              status.map((k, v) => MapEntry(k.toString(), decodeWireValue(v))));
        }
        return;
      }
      if (event['op'] == WireOp.recordEvent) {
        final rawEvent = event['event'];
        if (rawEvent is Map) {
          final decoded = (decodeWireValue(rawEvent) as Map)
              .map((k, v) => MapEntry(k.toString(), v));
          final recordEvent = RecordChangeEvent.fromJson(decoded);
          changeBus.emitEvent(recordEvent);
        }
        return;
      }
      if (event['op'] != WireOp.workerEvent) {
        return;
      }
      final watchId = event['watchId'];
      if (watchId is! int) return;
      final stream = _workerStreams[watchId];
      if (stream == null || stream.isClosed) return;
      if (event['error'] != null) {
        stream.addError(RemoteLocalPocketException(
          code: 'watch',
          message: event['error'].toString(),
        ));
        return;
      }
      final eventValue = decodeWireValue(event['value']);
      final decoder = _workerEventDecoders[watchId];
      stream.add(decoder != null ? decoder(eventValue) : eventValue);
    } catch (e, stack) {
      // A malformed unsolicited event must not tear down unrelated requests.
      for (final stream in _workerStreams.values) {
        if (!stream.isClosed) stream.addError(e, stack);
      }
    }
  }

  CollectionSchema schemaFor(String store) {
    final s = _storeMap[store];
    if (s == null) {
      throw StateError('No store "$store" registered in this LocalPocket.');
    }
    return s;
  }

  WebCollection collection(String name) {
    return WebCollection._(this, schemaFor(name));
  }

  WebLocalPocketFiles? _files;

  /// Page-facing file attachment and blob lifecycle API (worker-owned store).
  WebLocalPocketFiles get files => _files ??= WebLocalPocketFiles._(this);

  WebConflicts? _conflicts;

  /// Conflict inspection, watch, and resolution API (worker-owned engine).
  ///
  /// Mirrors the native `pocket.conflicts` surface: `listOpen`, `get`,
  /// `watch`, `resolve`, `acceptLocal`, `acceptRemote`.
  WebConflicts get conflicts => _conflicts ??= WebConflicts._(this);

  /// Runs [action] in an interactive transaction session (§7.1).
  Future<T> transaction<T>(Future<T> Function(WebTx tx) action) async {
    final beginRes = (await _send(WireOp.txBegin)) as Map;
    final sessionId = beginRes['sessionId'] as int;
    final tx = WebTx._(this, sessionId);

    try {
      final result = await action(tx);
      await _send(WireOp.txCommit, {'sessionId': sessionId});
      return result;
    } catch (e) {
      try {
        await _send(WireOp.txRollback, {'sessionId': sessionId});
      } catch (_) {}
      rethrow;
    }
  }

  Future<void> analyze([String? store]) async {
    await _send(WireOp.analyze, {'store': store});
  }

  Future<void> walCheckpoint() async {
    await _send(WireOp.walCheckpoint);
  }

  Future<void> vacuum({int? pages}) async {
    await _send(WireOp.vacuum, {'pages': pages});
  }

  Future<int> pruneOutbox({int maxEntries = 10000}) async {
    final res =
        (await _send(WireOp.pruneOutbox, {'maxEntries': maxEntries})) as Map;
    return (res['pruned'] as int?) ?? 0;
  }

  Future<int> compact(String store,
      {required Duration olderThan, int? nowMs}) async {
    final res = (await _send(WireOp.compact, {
      'store': store,
      'olderThanMs': olderThan.inMilliseconds,
      if (nowMs != null) 'nowMs': nowMs,
    })) as Map;
    return (res['compacted'] as int?) ?? 0;
  }

  Future<void> runMaintenance(
      {Duration compactOlderThan = const Duration(days: 90)}) async {
    await _send(WireOp.runMaintenance, {
      'compactOlderThanMs': compactOlderThan.inMilliseconds,
    });
  }

  // -------------------------------------------------- Sync & Auth Controls (§8, §12)

  /// Starts the synchronization engine in the worker with the given credentials.
  ///
  /// Note: Supported configuration is one tab running sync (§12).
  Future<void> startSync(
      {String? baseUrl, String? scopeId, String? token}) async {
    await _send(WireOp.syncStart, {
      if (baseUrl != null) 'baseUrl': baseUrl,
      if (scopeId != null) 'scopeId': scopeId,
      if (token != null) 'token': token,
    });
  }

  /// Stops the synchronization engine in the worker.
  Future<void> stopSync() async {
    await _send(WireOp.syncStop);
  }

  /// Triggers a manual synchronization cycle immediately.
  Future<void> syncNow() async {
    await _send(WireOp.syncNow);
  }

  /// Updates the authentication token on the worker after a refresh or login.
  Future<void> updateAuth(String? token) async {
    await _send(WireOp.syncUpdateAuth, {'token': token});
  }

  /// Pauses periodic and event-driven sync cycles.
  Future<void> pauseSync() async {
    await _send(WireOp.syncPause);
  }

  /// Resumes synchronization cycles.
  Future<void> resumeSync() async {
    await _send(WireOp.syncResume);
  }

  /// Informs the sync engine of online/offline connectivity changes.
  Future<void> setConnectivity(bool online) async {
    await _send(WireOp.syncSetConnectivity, {'online': online});
  }

  /// Uploads [bytes] to a record attachment via bounded chunks (task 3).
  ///
  /// Splits the payload into <=256 KiB chunks so no single custom request
  /// carries a large byte list, then finishes and returns the created
  /// `FileRef` fields from the worker-owned store.
  static const int _fileChunkBytes = 262144;

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
    final beginRes = (await _send(WireOp.fileUploadBegin, {
      'store': store,
      'recordId': recordId,
      'field': field,
      'name': name,
      'size': bytes.length,
      if (expectedSha256 != null) 'expectedSha256': expectedSha256,
    })) as Map;
    final uploadId = beginRes['uploadId'] as int;

    try {
      for (var offset = 0; offset < bytes.length; offset += _fileChunkBytes) {
        final end = (offset + _fileChunkBytes < bytes.length)
            ? offset + _fileChunkBytes
            : bytes.length;
        final chunk = Uint8List.fromList(bytes.sublist(offset, end));
        await _send(WireOp.fileUploadChunk, {
          'uploadId': uploadId,
          'chunk': encodeWireValue(chunk),
        });
      }
      final res = (await _send(WireOp.fileUploadFinish, {
        'uploadId': uploadId,
      })) as Map;
      return res.map((k, v) => MapEntry(k.toString(), v));
    } catch (e) {
      // Best-effort abort: a partial upload session is discarded by the worker
      // once it fails; no durable state is left behind.
      rethrow;
    }
  }

  /// Lists file references attached to a record field (metadata RPC).
  Future<List<Map<String, Object?>>> filesList({
    required String store,
    required String recordId,
    String field = 'imgs',
  }) async {
    final res = (await _send(WireOp.fileList, {
      'store': store,
      'recordId': recordId,
      'field': field,
    })) as Map;
    return ((res['refs'] as List).cast<Map>())
        .map((m) => m.map((k, v) => MapEntry(k.toString(), v)))
        .toList();
  }

  /// Opens a file's bytes for a record (metadata RPC; full read-back).
  Future<Uint8List> filesOpen({
    required String store,
    required String recordId,
    String field = 'imgs',
    int index = 0,
    String? refId,
  }) async {
    final res = (await _send(WireOp.fileOpen, {
      'store': store,
      'recordId': recordId,
      'field': field,
      'index': index,
      if (refId != null) 'refId': refId,
    })) as Map;
    final bytes = decodeWireValue(res['bytes']);
    if (bytes is! List) throw StateError('Malformed file bytes response');
    return Uint8List.fromList(bytes.cast<int>());
  }

  /// Removes a file reference from a record (metadata RPC).
  Future<void> filesRemove({
    required String store,
    required String recordId,
    String field = 'imgs',
    int index = 0,
    String? refId,
  }) async {
    await _send(WireOp.fileRemove, {
      'store': store,
      'recordId': recordId,
      'field': field,
      'index': index,
      if (refId != null) 'refId': refId,
    });
  }

  /// Garbage-collects blobs in the worker-owned store.
  Future<int> filesGc({
    Duration blobGrace = const Duration(days: 7),
    Duration tmpGrace = const Duration(hours: 24),
  }) async {
    final res = (await _send(WireOp.fileGc, {
      'blobGraceMs': blobGrace.inMilliseconds,
      'tmpGraceMs': tmpGrace.inMilliseconds,
    })) as Map;
    return (res['cleaned'] as int?) ?? 0;
  }

  /// Enforces the storage cap via LRU eviction of synced blobs.
  Future<int> filesEnforceStorageCap({required int maxBytes}) async {
    final res = (await _send(WireOp.fileEnforceStorageCap, {
      'maxBytes': maxBytes,
    })) as Map;
    return (res['evicted'] as int?) ?? 0;
  }

  Stream<ChangeSet> get changes => changeBus.stream;

  /// Emits detailed committed record change events (old vs new, origin, action, changedFields).
  Stream<RecordChangeEvent> get events => changeBus.events;

  /// Convenience stream for listening to local record changes across collections.
  Stream<RecordChangeEvent> onLocal({
    String? store,
    String? field,
    ChangeAction? action,
  }) {
    return events.where((e) {
      if (!e.isLocal) return false;
      if (store != null && e.store != store) return false;
      if (action != null && e.action != action) return false;
      if (field != null && !e.hasFieldChange(field)) return false;
      return true;
    });
  }

  /// Convenience stream for listening to remote record changes across collections.
  Stream<RecordChangeEvent> onRemote({
    String? store,
    String? field,
    ChangeAction? action,
  }) {
    return events.where((e) {
      if (!e.isRemote) return false;
      if (store != null && e.store != store) return false;
      if (action != null && e.action != action) return false;
      if (field != null && !e.hasFieldChange(field)) return false;
      return true;
    });
  }

  /// Worker-owned synchronization status snapshots.
  Stream<Map<String, Object?>> get syncStatus => _syncStatusController.stream;

  /// Emits when the worker cannot refresh a rejected sync token.
  Stream<void> get authRequired => _authRequiredController.stream;

  Future<void> close() async {
    if (_closed) return;
    _closed = true;
    changeBus.close();
    await _syncStatusController.close();
    await _authRequiredController.close();
    try {
      await _send(WireOp.close);
    } catch (_) {}
    for (final url in _blobUrlsToRevoke) {
      try {
        web.URL.revokeObjectURL(url);
      } catch (_) {}
    }
    await _remoteDb.dispose();
    _webSqlite.close();
  }
}

/// Main-thread collection proxy.
class WebCollection {
  final LocalPocket _pocket;
  final CollectionSchema schema;

  WebCollection._(this._pocket, this.schema);

  String get name => schema.name;

  Future<Map<String, Object?>?> get(String id) async {
    final res = await _pocket._send(WireOp.get, {'store': name, 'id': id});
    if (res == null) return null;
    final decoded = decodeWireValue(res);
    if (decoded is Map) {
      return decoded.map((k, v) => MapEntry(k.toString(), v));
    }
    return null;
  }

  Future<void> put(Map<String, Object?> record) async {
    await _pocket._send(WireOp.mutateBatch, {
      'store': name,
      'mutations': [
        {'action': 'put', 'record': encodeWireValue(record)}
      ],
    });
  }

  Future<void> putAll(List<Map<String, Object?>> records) async {
    await _pocket._send(WireOp.mutateBatch, {
      'store': name,
      'mutations': records
          .map((r) => {'action': 'put', 'record': encodeWireValue(r)})
          .toList(),
    });
  }

  Future<void> patch(String id, Map<String, Object?> changes) async {
    await _pocket._send(WireOp.mutateBatch, {
      'store': name,
      'mutations': [
        {'action': 'patch', 'id': id, 'record': encodeWireValue(changes)}
      ],
    });
  }

  Future<void> archive(String id) async {
    await _pocket._send(WireOp.mutateBatch, {
      'store': name,
      'mutations': [
        {'action': 'archive', 'id': id}
      ],
    });
  }

  Future<void> restore(String id) async {
    await _pocket._send(WireOp.mutateBatch, {
      'store': name,
      'mutations': [
        {'action': 'restore', 'id': id}
      ],
    });
  }

  Future<void> purge(String id) async {
    await _pocket._send(WireOp.mutateBatch, {
      'store': name,
      'mutations': [
        {'action': 'purge', 'id': id}
      ],
    });
  }

  /// Watches a single record by [id].
  Stream<Map<String, Object?>?> watchOne(String id) {
    late final StreamController<Map<String, Object?>?> controller;
    final watchId = _pocket._nextRequestId++;

    controller = StreamController<Map<String, Object?>?>(
      onListen: () => _pocket._watchTracker.runRegistration(
        watchId: watchId,
        register: () async {
          _pocket._workerStreams[watchId] = controller;
          try {
            final res = (await _pocket._send(WireOp.watchOne, {
              'watchId': watchId,
              'store': name,
              'id': id,
            })) as Map;
            final item = decodeWireValue(res['item']) as Map<String, Object?>?;
            if (!controller.isClosed) {
              controller.add(item);
            }
          } catch (e) {
            if (!controller.isClosed) controller.addError(e);
          }
        },
        unregister: () => _cancelWatch(watchId),
      ),
      onCancel: () => _pocket._watchTracker.requestUnregistration(
        watchId: watchId,
        unregister: () => _cancelWatch(watchId),
      ),
    );
    return controller.stream;
  }

  Future<void> _cancelWatch(int watchId) async {
    _pocket._workerStreams.remove(watchId);
    try {
      await _pocket._send(WireOp.watchCancel, {'watchId': watchId});
    } catch (_) {}
  }

  /// Stream of committed record change events for this collection.
  Stream<RecordChangeEvent> get events =>
      _pocket.events.where((e) => e.store == name);

  /// Convenience stream for listening to local record changes on this collection.
  Stream<RecordChangeEvent> onLocal({String? field, ChangeAction? action}) {
    return events.where((e) {
      if (!e.isLocal) return false;
      if (action != null && e.action != action) return false;
      if (field != null && !e.hasFieldChange(field)) return false;
      return true;
    });
  }

  /// Convenience stream for listening to remote record changes on this collection.
  Stream<RecordChangeEvent> onRemote({String? field, ChangeAction? action}) {
    return events.where((e) {
      if (!e.isRemote) return false;
      if (action != null && e.action != action) return false;
      if (field != null && !e.hasFieldChange(field)) return false;
      return true;
    });
  }

  /// Convenience stream for listening to resolution record changes on this collection.
  Stream<RecordChangeEvent> onResolution(
      {String? field, ChangeAction? action}) {
    return events.where((e) {
      if (!e.isResolution) return false;
      if (action != null && e.action != action) return false;
      if (field != null && !e.hasFieldChange(field)) return false;
      return true;
    });
  }

  /// Convenience stream for listening to changes on a specific field.
  Stream<RecordChangeEvent> onFieldChange(
    String field, {
    ChangeOrigin? origin,
    ChangeAction? action,
  }) {
    return events.where((e) {
      if (origin != null && e.origin != origin) return false;
      if (action != null && e.action != action) return false;
      return e.hasFieldChange(field);
    });
  }

  /// Convenience stream for listening to a specific field transition from [from] to [to].
  Stream<RecordChangeEvent> onFieldTransition(
    String field, {
    Object? from = const _SentinelUnset(),
    Object? to = const _SentinelUnset(),
    ChangeOrigin? origin,
    ChangeAction? action,
  }) {
    return events.where((e) {
      if (origin != null && e.origin != origin) return false;
      if (action != null && e.action != action) return false;
      return e.isFieldTransition(field, from: from, to: to);
    });
  }

  WebQueryBuilder query() => WebQueryBuilder._(_pocket, schema);

  /// Starts a full-text search on the collection's configured FTS fields.
  ///
  /// Mirrors native `Collection.search(String term)`: the schema must define
  /// [FtsSpec] and the SQLite engine must provide FTS5. Plans compile via
  /// `SearchQueryBuilder.compileOnly` and travel as the single `compiled_query`
  /// envelope.
  WebSearchQueryBuilder search(String term) =>
      WebSearchQueryBuilder._(_pocket, schema, term);
}

/// Main-thread query builder that forwards the full native query language to
/// the engine compiler. The core [QueryBuilder] is the single hand-maintained
/// copy of the query language; the web facade holds a compile-only instance
/// and sends the resulting plans to the worker.
class WebQueryBuilder {
  final LocalPocket _pocket;
  final CollectionSchema schema;
  final QueryBuilder _core;

  WebQueryBuilder._(this._pocket, this.schema)
      : _core = QueryBuilder.compileOnly(schema);

  String get store => schema.name;

  WebQueryBuilder where(
    String field, {
    Object? eq,
    Object? neq,
    Object? gt,
    Object? gte,
    Object? lt,
    Object? lte,
    List<Object?>? inValues,
    (Object?, Object?)? between,
    String? startsWith,
    String? endsWith,
    String? contains,
    bool? isNull,
    bool? isNotNull,
  }) {
    _core.where(
      field,
      eq: eq,
      neq: neq,
      gt: gt,
      gte: gte,
      lt: lt,
      lte: lte,
      inValues: inValues,
      between: between,
      startsWith: startsWith,
      endsWith: endsWith,
      contains: contains,
      isNull: isNull,
      isNotNull: isNotNull,
    );
    return this;
  }

  WebQueryBuilder orWhere(List<Map<String, Object?>> groups) {
    _core.orWhere(groups);
    return this;
  }

  WebQueryBuilder orderBy(String field, {bool desc = false}) {
    _core.orderBy(field, desc: desc);
    return this;
  }

  WebQueryBuilder limit(int n) {
    _core.limit(n);
    return this;
  }

  WebQueryBuilder all() {
    _core.all();
    return this;
  }

  WebQueryBuilder select(List<String> fields) {
    _core.select(fields);
    return this;
  }

  WebQueryBuilder includeArchived() {
    _core.includeArchived();
    return this;
  }

  WebQueryBuilder includeHidden() {
    _core.includeHidden();
    return this;
  }

  Future<Page> fetch({String? cursor}) async {
    final limit = _core.limitValue;
    final allMode = _core.allMode;
    final plan = _core.compilePlan(
      limitOverride: allMode || limit == null ? null : limit + 1,
      cursor: cursor,
    );
    final res = await _sendCompiledPlan(_pocket, plan, pageLimit: limit);
    return _pageFromCompiled(_core, res);
  }

  Future<Page> keysetAfter(String cursor) => fetch(cursor: cursor);

  Future<int> count() async {
    final res = await _sendCompiledPlan(_pocket, _core.compileCountPlan());
    return (res['value'] as int?) ?? 0;
  }

  Future<int> countDistinct(String field) async {
    final res =
        await _sendCompiledPlan(_pocket, _core.compileCountDistinctPlan(field));
    return (res['value'] as int?) ?? 0;
  }

  Future<List<Object?>> distinct(String field) async {
    final res =
        await _sendCompiledPlan(_pocket, _core.compileDistinctPlan(field));
    return (res['values'] as List).map(decodeWireValue).toList();
  }

  Future<List<String>> ids() async {
    final res = await _sendCompiledPlan(_pocket, _core.compileIdsPlan());
    return (res['ids'] as List).cast<String>();
  }

  Future<String> explain() async {
    final res = await _sendCompiledPlan(_pocket, _core.compileExplainPlan());
    return res['plan'] as String;
  }

  Future<num?> _aggregate(String fn, String field) async {
    final res =
        await _sendCompiledPlan(_pocket, _core.compileAggregatePlan(fn, field));
    final raw = res['value'];
    return raw == null ? null : raw as num;
  }

  Future<double?> sum(String field) async =>
      (await _aggregate('SUM', field))?.toDouble();

  Future<double?> avg(String field) async =>
      (await _aggregate('AVG', field))?.toDouble();

  Future<num?> min(String field) => _aggregate('MIN', field);

  Future<num?> max(String field) => _aggregate('MAX', field);

  /// Watches query results reactively.
  Stream<List<Map<String, Object?>>> watch() {
    late final StreamController<List<Map<String, Object?>>> controller;
    final watchId = _pocket._nextRequestId++;

    // Native watch semantics: an unbounded watch query defaults to 50 rows.
    final limit = _core.limitValue;
    final allMode = _core.allMode;
    final plan =
        _core.compilePlan(limitOverride: allMode ? null : (limit ?? 50));

    controller = StreamController<List<Map<String, Object?>>>(
      onListen: () => _pocket._watchTracker.runRegistration(
        watchId: watchId,
        register: () async {
          _pocket._workerStreams[watchId] = controller;
          try {
            final res =
                await _sendCompiledPlan(_pocket, plan, watchId: watchId);
            final items = ((res['items'] as List?) ?? const [])
                .map((i) => (decodeWireValue(i) as Map)
                    .map((k, v) => MapEntry(k.toString(), v)))
                .toList();
            if (!controller.isClosed) {
              controller.add(items);
            }
          } catch (e) {
            if (!controller.isClosed) controller.addError(e);
          }
        },
        unregister: () => _cancelWatch(watchId),
      ),
      onCancel: () => _pocket._watchTracker.requestUnregistration(
        watchId: watchId,
        unregister: () => _cancelWatch(watchId),
      ),
    );
    return controller.stream;
  }

  Future<void> _cancelWatch(int watchId) async {
    _pocket._workerStreams.remove(watchId);
    try {
      await _pocket._send(WireOp.watchCancel, {'watchId': watchId});
    } catch (_) {}
  }
}

/// Main-thread transaction handle (§7.1).
class WebSearchQueryBuilder {
  final LocalPocket _pocket;
  final CollectionSchema schema;
  final String term;
  int? _limit;
  bool _all = false;
  bool _includeArchived = false;
  bool _includeHidden = false;

  WebSearchQueryBuilder._(this._pocket, this.schema, this.term);

  WebSearchQueryBuilder limit(int n) {
    _limit = n;
    return this;
  }

  WebSearchQueryBuilder all() {
    _all = true;
    return this;
  }

  WebSearchQueryBuilder includeArchived() {
    _includeArchived = true;
    return this;
  }

  WebSearchQueryBuilder includeHidden() {
    _includeHidden = true;
    return this;
  }

  Future<List<SearchResult>> fetch() async {
    if (term.trim().isEmpty) return const [];
    final core = SearchQueryBuilder.compileOnly(schema, term);
    if (_limit != null) core.limit(_limit!);
    if (_all) core.all();
    if (_includeArchived) core.includeArchived();
    if (_includeHidden) core.includeHidden();
    final res = await _sendCompiledPlan(_pocket, core.compilePlan());
    return ((res['results'] as List?) ?? const []).map((raw) {
      final row = (raw as Map).map((k, v) => MapEntry(k.toString(), v));
      return SearchResult(
        id: row['id'] as String,
        score: (row['score'] as num).toDouble(),
      );
    }).toList();
  }
}

class WebTx {
  final LocalPocket _pocket;
  final int sessionId;

  WebTx._(this._pocket, this.sessionId);

  WebTxCollection collection(String name) {
    return WebTxCollection._(_pocket, _pocket.schemaFor(name), sessionId);
  }

  WebTxQueryBuilder query(String store) =>
      WebTxQueryBuilder._(_pocket, _pocket.schemaFor(store), sessionId);

  WebTxSearchQueryBuilder search(String store, String term) =>
      WebTxSearchQueryBuilder._(
          _pocket, _pocket.schemaFor(store), sessionId, term);

  /// Nested transaction implemented as a savepoint on the active session.
  Future<T> transaction<T>(Future<T> Function(WebTx tx) action) async {
    final spRes = (await _pocket
        ._send(WireOp.txSavepoint, {'sessionId': sessionId})) as Map;
    final savepoint = spRes['savepoint'] as String;

    try {
      final res = await action(this);
      await _pocket._send(
          WireOp.txRelease, {'sessionId': sessionId, 'savepoint': savepoint});
      return res;
    } catch (e) {
      try {
        await _pocket._send(WireOp.txRollbackTo,
            {'sessionId': sessionId, 'savepoint': savepoint});
      } catch (_) {}
      rethrow;
    }
  }
}

class WebTxQueryBuilder {
  final LocalPocket _pocket;
  final CollectionSchema schema;
  final int sessionId;
  final QueryBuilder _core;

  WebTxQueryBuilder._(this._pocket, this.schema, this.sessionId)
      : _core = QueryBuilder.compileOnly(schema);

  WebTxQueryBuilder where(
    String field, {
    Object? eq,
    Object? neq,
    Object? gt,
    Object? gte,
    Object? lt,
    Object? lte,
    List<Object?>? inValues,
    (Object?, Object?)? between,
    String? startsWith,
    String? endsWith,
    String? contains,
    bool? isNull,
    bool? isNotNull,
  }) {
    _core.where(
      field,
      eq: eq,
      neq: neq,
      gt: gt,
      gte: gte,
      lt: lt,
      lte: lte,
      inValues: inValues,
      between: between,
      startsWith: startsWith,
      endsWith: endsWith,
      contains: contains,
      isNull: isNull,
      isNotNull: isNotNull,
    );
    return this;
  }

  WebTxQueryBuilder orWhere(List<Map<String, Object?>> groups) {
    _core.orWhere(groups);
    return this;
  }

  WebTxQueryBuilder orderBy(String field, {bool desc = false}) {
    _core.orderBy(field, desc: desc);
    return this;
  }

  WebTxQueryBuilder limit(int n) {
    _core.limit(n);
    return this;
  }

  WebTxQueryBuilder all() {
    _core.all();
    return this;
  }

  WebTxQueryBuilder select(List<String> fields) {
    _core.select(fields);
    return this;
  }

  WebTxQueryBuilder includeArchived() {
    _core.includeArchived();
    return this;
  }

  WebTxQueryBuilder includeHidden() {
    _core.includeHidden();
    return this;
  }

  Future<Page> fetch({String? cursor}) async {
    final limit = _core.limitValue;
    final allMode = _core.allMode;
    final plan = _core.compilePlan(
      limitOverride: allMode || limit == null ? null : limit + 1,
      cursor: cursor,
    );
    final res = await _sendCompiledPlan(_pocket, plan,
        sessionId: sessionId, pageLimit: limit);
    return _pageFromCompiled(_core, res);
  }

  Future<Page> keysetAfter(String cursor) => fetch(cursor: cursor);

  Future<int> count() async {
    final res = await _sendCompiledPlan(_pocket, _core.compileCountPlan(),
        sessionId: sessionId);
    return (res['value'] as int?) ?? 0;
  }

  Future<int> countDistinct(String field) async {
    final res = await _sendCompiledPlan(
        _pocket, _core.compileCountDistinctPlan(field),
        sessionId: sessionId);
    return (res['value'] as int?) ?? 0;
  }

  Future<List<Object?>> distinct(String field) async {
    final res = await _sendCompiledPlan(
        _pocket, _core.compileDistinctPlan(field),
        sessionId: sessionId);
    return (res['values'] as List).map(decodeWireValue).toList();
  }

  Future<List<String>> ids() async {
    final res = await _sendCompiledPlan(_pocket, _core.compileIdsPlan(),
        sessionId: sessionId);
    return (res['ids'] as List).cast<String>();
  }

  Future<String> explain() async {
    final res = await _sendCompiledPlan(_pocket, _core.compileExplainPlan(),
        sessionId: sessionId);
    return res['plan'] as String;
  }

  Future<num?> _aggregate(String fn, String field) async {
    final res = await _sendCompiledPlan(
        _pocket, _core.compileAggregatePlan(fn, field),
        sessionId: sessionId);
    final raw = res['value'];
    return raw == null ? null : raw as num;
  }

  Future<num?> sum(String field) => _aggregate('SUM', field);
  Future<num?> avg(String field) => _aggregate('AVG', field);
  Future<num?> min(String field) => _aggregate('MIN', field);
  Future<num?> max(String field) => _aggregate('MAX', field);
}

class WebTxSearchQueryBuilder {
  final LocalPocket _pocket;
  final CollectionSchema schema;
  final int sessionId;
  final String term;
  int? _limit;
  bool _all = false;
  bool _includeArchived = false;
  bool _includeHidden = false;

  WebTxSearchQueryBuilder._(
      this._pocket, this.schema, this.sessionId, this.term);

  WebTxSearchQueryBuilder limit(int n) {
    _limit = n;
    return this;
  }

  WebTxSearchQueryBuilder all() {
    _all = true;
    return this;
  }

  WebTxSearchQueryBuilder includeArchived() {
    _includeArchived = true;
    return this;
  }

  WebTxSearchQueryBuilder includeHidden() {
    _includeHidden = true;
    return this;
  }

  Future<List<SearchResult>> fetch() async {
    if (term.trim().isEmpty) return const [];
    final core = SearchQueryBuilder.compileOnly(schema, term);
    if (_limit != null) core.limit(_limit!);
    if (_all) core.all();
    if (_includeArchived) core.includeArchived();
    if (_includeHidden) core.includeHidden();
    final res = await _sendCompiledPlan(_pocket, core.compilePlan(),
        sessionId: sessionId);
    return ((res['results'] as List?) ?? const []).map((raw) {
      final row = (raw as Map).map((k, v) => MapEntry(k.toString(), v));
      return SearchResult(
          id: row['id'] as String, score: (row['score'] as num).toDouble());
    }).toList();
  }
}

/// Main-thread collection bound to a transaction session.
class WebTxCollection {
  final LocalPocket _pocket;
  final CollectionSchema schema;
  final int sessionId;

  WebTxCollection._(this._pocket, this.schema, this.sessionId);

  String get name => schema.name;

  Future<Map<String, Object?>?> get(String id) async {
    final res = await _pocket
        ._send(WireOp.txGet, {'sessionId': sessionId, 'store': name, 'id': id});
    if (res == null) return null;
    final decoded = decodeWireValue(res);
    if (decoded is Map) {
      return decoded.map((k, v) => MapEntry(k.toString(), v));
    }
    return null;
  }

  Future<void> put(Map<String, Object?> record) async {
    await _pocket._send(WireOp.txMutateBatch, {
      'sessionId': sessionId,
      'store': name,
      'mutations': [
        {'action': 'put', 'record': encodeWireValue(record)}
      ],
    });
  }

  Future<void> putAll(List<Map<String, Object?>> records) async {
    await _pocket._send(WireOp.txMutateBatch, {
      'sessionId': sessionId,
      'store': name,
      'mutations': records
          .map((record) => {'action': 'put', 'record': encodeWireValue(record)})
          .toList(),
    });
  }

  Future<void> patch(String id, Map<String, Object?> changes) async {
    await _pocket._send(WireOp.txMutateBatch, {
      'sessionId': sessionId,
      'store': name,
      'mutations': [
        {'action': 'patch', 'id': id, 'record': encodeWireValue(changes)}
      ],
    });
  }

  Future<void> archive(String id) async {
    await _pocket._send(WireOp.txMutateBatch, {
      'sessionId': sessionId,
      'store': name,
      'mutations': [
        {'action': 'archive', 'id': id}
      ],
    });
  }

  Future<void> restore(String id) async {
    await _pocket._send(WireOp.txMutateBatch, {
      'sessionId': sessionId,
      'store': name,
      'mutations': [
        {'action': 'restore', 'id': id}
      ],
    });
  }

  Future<void> purge(String id) async {
    await _pocket._send(WireOp.txMutateBatch, {
      'sessionId': sessionId,
      'store': name,
      'mutations': [
        {'action': 'purge', 'id': id}
      ],
    });
  }
}

/// Page-facing file attachment and blob lifecycle API over the worker-owned
/// store. Mirrors the native `LocalPocketFiles` public surface; every method
/// dispatches a metadata RPC (or bounded-chunk upload) that delegates to the
/// engine's `pocket.files` in the worker.
///
/// Object-URL materialization is intentionally NOT here: `URL.createObjectURL`
/// is window-only work (see `web_blob_object_url.dart`).
class WebLocalPocketFiles {
  final LocalPocket _pocket;

  WebLocalPocketFiles._(this._pocket);

  Future<List<Map<String, Object?>>> list({
    required String store,
    required String recordId,
    String field = 'imgs',
  }) =>
      _pocket.filesList(store: store, recordId: recordId, field: field);

  /// Attaches [byteArray] (or [bytes]) to a record, streaming via bounded
  /// chunks so no single custom request carries a large byte list.
  Future<Map<String, Object?>> attach({
    required String store,
    required String recordId,
    Stream<List<int>>? bytes,
    List<int>? byteArray,
    String field = 'imgs',
    String? name,
    int? expectedSize,
    String? expectedSha256,
  }) async {
    final List<int> payload;
    if (byteArray != null) {
      payload = byteArray;
    } else if (bytes != null) {
      final collected = <int>[];
      await for (final chunk in bytes) {
        collected.addAll(chunk);
      }
      payload = collected;
    } else {
      throw ArgumentError('Either bytes or byteArray must be provided');
    }
    return _pocket.filesUpload(
      store: store,
      recordId: recordId,
      bytes: payload,
      field: field,
      name: name ?? 'blob.bin',
      expectedSize: expectedSize,
      expectedSha256: expectedSha256,
    );
  }

  Future<Uint8List> open({
    required String store,
    required String recordId,
    String field = 'imgs',
    int index = 0,
    String? refId,
  }) =>
      _pocket.filesOpen(
          store: store,
          recordId: recordId,
          field: field,
          index: index,
          refId: refId);

  Future<void> remove({
    required String store,
    required String recordId,
    String field = 'imgs',
    int index = 0,
    String? refId,
  }) =>
      _pocket.filesRemove(
          store: store,
          recordId: recordId,
          field: field,
          index: index,
          refId: refId);

  Future<int> gc({
    Duration blobGrace = const Duration(days: 7),
    Duration tmpGrace = const Duration(hours: 24),
  }) =>
      _pocket.filesGc(blobGrace: blobGrace, tmpGrace: tmpGrace);

  Future<int> enforceStorageCap({required int maxBytes}) =>
      _pocket.filesEnforceStorageCap(maxBytes: maxBytes);
}

class _SentinelUnset {
  const _SentinelUnset();
}

/// Main-thread conflicts API over the worker-owned engine.
///
/// Mirrors the native `Conflicts` surface exactly: listing, point reads,
/// a broadcast watch stream, and the three resolution paths. Every method
/// dispatches a typed wire op that delegates to `pocket.conflicts` in the
/// worker.
class WebConflicts {
  final LocalPocket _pocket;

  WebConflicts._(this._pocket);

  /// Lists all currently open / unresolved conflicts, optionally filtered by
  /// [store]. Sorted by detection time (ascending), matching native.
  Future<List<ConflictRecord>> listOpen({String? store}) async {
    final res = (await _pocket._send(WireOp.conflictsList, {
      if (store != null) 'store': store,
    })) as Map;
    return ((res['conflicts'] as List?) ?? const [])
        .map((raw) => decodeConflictRecord(
            (raw as Map).map((k, v) => MapEntry(k.toString(), v))))
        .toList();
  }

  /// Returns the conflict for [store]/[id], or null when none is open.
  Future<ConflictRecord?> get(String store, String id) async {
    final res =
        await _pocket._send(WireOp.conflictsGet, {'store': store, 'id': id});
    if (res == null) return null;
    return decodeConflictRecord(
        (res as Map).map((k, v) => MapEntry(k.toString(), v)));
  }

  /// Watches open conflicts, emitting a new [List<ConflictRecord>] whenever
  /// conflicts are added, resolved, or modified. Broadcast, like native.
  Stream<List<ConflictRecord>> watch({String? store}) {
    late final StreamController<List<ConflictRecord>> controller;
    final watchId = _pocket._nextRequestId++;

    controller = StreamController<List<ConflictRecord>>.broadcast(
      onListen: () => _pocket._watchTracker.runRegistration(
        watchId: watchId,
        register: () async {
          _pocket._workerStreams[watchId] = controller;
          // Transform raw wire lists into typed ConflictRecords. The worker's
          // native conflicts watch emits the initial list immediately on
          // listen, so no initial snapshot is returned in the request response.
          _pocket._workerEventDecoders[watchId] = (raw) {
            final list = (raw as List).cast<Map>();
            return [
              for (final m in list)
                decodeConflictRecord(m.map((k, v) => MapEntry(k.toString(), v)))
            ];
          };
          try {
            await _pocket._send(WireOp.conflictsWatch, {
              'watchId': watchId,
              if (store != null) 'store': store,
            });
          } catch (e) {
            if (!controller.isClosed) controller.addError(e);
          }
        },
        unregister: () => _cancelWatch(watchId),
      ),
      onCancel: () => _pocket._watchTracker.requestUnregistration(
        watchId: watchId,
        unregister: () => _cancelWatch(watchId),
      ),
    );
    return controller.stream;
  }

  Future<void> _cancelWatch(int watchId) async {
    _pocket._workerStreams.remove(watchId);
    _pocket._workerEventDecoders.remove(watchId);
    try {
      await _pocket._send(WireOp.watchCancel, {'watchId': watchId});
    } catch (_) {}
  }

  /// Resolves the open conflict for [store]/[id] with [merged].
  Future<void> resolve({
    required String store,
    required String id,
    required Map<String, Object?> merged,
  }) async {
    await _pocket._send(WireOp.conflictsResolve, {
      'store': store,
      'id': id,
      'merged': encodeWireValue(merged),
    });
  }

  /// Accepts the local version to resolve the conflict.
  Future<void> acceptLocal(String store, String id) async {
    await _pocket
        ._send(WireOp.conflictsAcceptLocal, {'store': store, 'id': id});
  }

  /// Accepts the remote version to resolve the conflict.
  Future<void> acceptRemote(String store, String id) async {
    await _pocket
        ._send(WireOp.conflictsAcceptRemote, {'store': store, 'id': id});
  }
}
