import 'dart:async';
import 'dart:js_interop';
import 'dart:typed_data';

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
  final Map<int, StreamController<dynamic>> workerStreams = {};
  final WatchSubscriptionTracker watchTracker = WatchSubscriptionTracker();

  /// Optional per-watch transform applied to a worker event value before it is
  /// added to the matching [workerStreams] controller. Used by watch types
  /// whose wire payload needs structural decoding (e.g. conflicts -> typed
  /// [ConflictRecord] lists).
  final Map<int, Object? Function(Object?)> workerEventDecoders = {};
  final StreamController<Map<String, Object?>> _syncStatusController =
      StreamController<Map<String, Object?>>.broadcast();
  final StreamController<void> _authRequiredController =
      StreamController<void>.broadcast();

  bool _closed = false;

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
      final remote = await pocket.send(WireOp.capabilities) as Map;
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

  Iterable<String> get storeNames => _storeMap.keys;

  int nextRequestId = 1;

  /// Sends a typed WebRequest to the worker and decodes the response.
  Future<Object?> send(String op,
      [Map<String, Object?> args = const {}]) async {
    if (_closed) {
      throw DatabaseWorkerClosedException('LocalPocket is closed.');
    }
    final req = WebRequest(
      version: webProtocolVersion,
      requestId: nextRequestId++,
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

  void _markWorkerClosed() {
    if (_closed) return;
    _closed = true;
    final error = DatabaseWorkerClosedException(
        'The database worker closed unexpectedly.');
    for (final stream in workerStreams.values) {
      if (!stream.isClosed) stream.addError(error);
    }
    workerStreams.clear();
    workerEventDecoders.clear();
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
      final stream = workerStreams[watchId];
      if (stream == null || stream.isClosed) return;
      if (event['error'] != null) {
        stream.addError(RemoteLocalPocketException(
          code: 'watch',
          message: event['error'].toString(),
        ));
        return;
      }
      final eventValue = decodeWireValue(event['value']);
      final decoder = workerEventDecoders[watchId];
      stream.add(decoder != null ? decoder(eventValue) : eventValue);
    } catch (e, stack) {
      // A malformed unsolicited event must not tear down unrelated requests.
      for (final stream in workerStreams.values) {
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
    return WebCollection.ins(this, schemaFor(name));
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

  /// Runs [action] in an interactive transaction session (§7.1).
  Future<T> transaction<T>(Future<T> Function(WebTx tx) action) async {
    final beginRes = (await send(WireOp.txBegin)) as Map;
    final sessionId = beginRes['sessionId'] as int;
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

  Future<void> analyze([String? store]) async {
    await send(WireOp.analyze, {'store': store});
  }

  Future<void> walCheckpoint() async {
    await send(WireOp.walCheckpoint);
  }

  Future<void> vacuum({int? pages}) async {
    await send(WireOp.vacuum, {'pages': pages});
  }

  Future<int> pruneOutbox({int maxEntries = 10000}) async {
    final res =
        (await send(WireOp.pruneOutbox, {'maxEntries': maxEntries})) as Map;
    return (res['pruned'] as int?) ?? 0;
  }

  Future<int> compact(String store,
      {required Duration olderThan, int? nowMs}) async {
    final res = (await send(WireOp.compact, {
      'store': store,
      'olderThanMs': olderThan.inMilliseconds,
      if (nowMs != null) 'nowMs': nowMs,
    })) as Map;
    return (res['compacted'] as int?) ?? 0;
  }

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
    })) as Map;
    final uploadId = beginRes['uploadId'] as int;

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
    final res = (await send(WireOp.fileList, {
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
    final res = (await send(WireOp.fileOpen, {
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
    await send(WireOp.fileRemove, {
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
    final res = (await send(WireOp.fileGc, {
      'blobGraceMs': blobGrace.inMilliseconds,
      'tmpGraceMs': tmpGrace.inMilliseconds,
    })) as Map;
    return (res['cleaned'] as int?) ?? 0;
  }

  /// Enforces the storage cap via LRU eviction of synced blobs.
  Future<int> filesEnforceStorageCap({required int maxBytes}) async {
    final res = (await send(WireOp.fileEnforceStorageCap, {
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
      await send(WireOp.close);
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
