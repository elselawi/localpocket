import 'dart:async';
import 'dart:js_interop';

import 'package:sqlite3_web/sqlite3_web.dart';
import 'package:web/web.dart' as web;

import '../core/capabilities.dart';
import '../core/change_bus.dart';
import '../core/perf_counters.dart';
import '../core/query.dart' show QueryBuilder, SearchQueryBuilder, SearchResult;
import '../core/query_plan.dart';
import '../core/schema.dart';
import '../core/store.dart';
import 'assets.dart';
import 'connector.dart';
import 'conversions.dart';
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
  final String path;
  final Database _remoteDb;
  final WebSqlite _webSqlite;
  final List<String> _blobUrlsToRevoke;
  final SqliteCapabilities capabilities;
  final WebStorageCapabilities storageCapabilities;
  final Map<String, CollectionSchema> _storeMap = {};
  final ChangeBus changeBus = ChangeBus();
  final PerfCounters perf = PerfCounters();
  final Map<int, StreamController<dynamic>> _workerStreams = {};
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
    final wasmPath = wasmAssetPath ?? 'assets/sqlite3.wasm';
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
      wasmBlobUrl = 'assets/sqlite3.wasm';
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

    final openArgs = {
      'stores': stores.map((s) => s.toJson()).toList(),
      'maxDocBytes': maxDocBytes,
      'destructiveBackup': destructiveBackup,
    };

    final ConnectToRecommendedResult connectResult;
    if (path == ':memory:') {
      final db = await webSqlite.connect(
        ':memory:',
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

    final resp = WebResponse.fromJson(dartMap);
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
      stream.add(decodeWireValue(event['value']));
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

  Stream<ChangeSet> get changes => changeBus.stream;

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
      onListen: () async {
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
      onCancel: () async {
        _pocket._workerStreams.remove(watchId);
        try {
          await _pocket._send(WireOp.watchCancel, {'watchId': watchId});
        } catch (_) {}
      },
    );
    return controller.stream;
  }

  WebQueryBuilder query() => WebQueryBuilder._(_pocket, schema);
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

  WebSearchQueryBuilder search(String term) =>
      WebSearchQueryBuilder._(_pocket, schema, term);

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
      onListen: () async {
        _pocket._workerStreams[watchId] = controller;
        try {
          final res = await _sendCompiledPlan(_pocket, plan, watchId: watchId);
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
      onCancel: () async {
        _pocket._workerStreams.remove(watchId);
        try {
          await _pocket._send(WireOp.watchCancel, {'watchId': watchId});
        } catch (_) {}
      },
    );
    return controller.stream;
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

  WebTxSearchQueryBuilder._(
      this._pocket, this.schema, this.sessionId, this.term);

  WebTxSearchQueryBuilder limit(int n) {
    _limit = n;
    return this;
  }

  Future<List<SearchResult>> fetch() async {
    if (term.trim().isEmpty) return const [];
    final core = SearchQueryBuilder.compileOnly(schema, term);
    if (_limit != null) core.limit(_limit!);
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
