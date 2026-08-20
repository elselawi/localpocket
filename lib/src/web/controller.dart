import 'dart:async';
import 'dart:js_interop';
import 'dart:typed_data';

import 'package:localpocket/src/web/compiled_watcher.dart';
import 'package:sqlite3/common.dart';
// ignore: implementation_imports
import 'package:sqlite3/src/wasm/sqlite3.dart';
import 'package:sqlite3_web/sqlite3_web.dart';

import '../core/capabilities.dart';
import '../core/change_bus.dart';
import '../core/compiled_query_runner.dart';
import '../core/database_adapter.dart';
import '../core/errors.dart';
import '../core/local_pocket.dart';
import '../core/query_plan.dart';
import '../core/canonical_json.dart';
import '../core/hashing.dart';
import '../core/schema.dart';
import '../core/transaction.dart';
import '../core/watch.dart';
import '../files/files_api.dart' show FileRef;
import '../files/web_blob_store.dart';
import '../pocketbase/auth.dart';
import '../pocketbase/backend.dart';
import '../sync/engine.dart';
import '../sync/status.dart';
import 'cipher_bridge.dart';
import 'conflicts_bridge.dart';
import 'conversions.dart';
import 'lifecycle.dart';
import 'protocol.dart';
import 'wire_args.dart';

/// Database controller that opens the SQLite connection in the dedicated worker
/// and boots the existing [LocalPocket] engine around it.
final class LocalPocketDatabaseController extends DatabaseController {
  const LocalPocketDatabaseController();

  @override
  Future<JSAny?> handleCustomRequest(
    ClientConnection connection,
    CustomClientRequest request,
  ) async {
    return {'kind': 'ready'}.jsify();
  }

  @override
  Future<WorkerDatabase> openDatabase(
    WasmSqlite3 sqlite3,
    String path,
    String vfs,
    JSAny? additionalData,
  ) async {
    final rawDb = sqlite3.open(path, vfs: vfs);

    // Assert journal mode TRUNCATE immediately after open per §6.8
    rawDb.execute('PRAGMA journal_mode=TRUNCATE');
    final mode = rawDb.select('PRAGMA journal_mode').first.columnAt(0);
    if (mode.toString().toLowerCase() != 'truncate') {
      rawDb.close();
      throw StateError('journal_mode read-back was $mode, expected truncate');
    }

    final db = DirectSqliteDatabase(rawDb);

    // Parse options from additionalData
    final options = _parseOpenOptions(additionalData);
    final stores = (options['stores'] as List<CollectionSchema>?) ?? [];
    final maxDocBytes = (options['maxDocBytes'] as int?) ?? 1900000;
    final destructiveBackup = (options['destructiveBackup'] as bool?) ?? true;

    // Field cipher bridge: reconstruct the engine cipher from the serialized
    // envelope. Parsing is intentionally OUTSIDE `_parseOpenOptions`, which
    // swallows malformed options — a malformed cipher envelope must fail
    // loudly, never be silently dropped.
    final fieldCipher =
        parseFieldCipherEnvelope(_rawOpenOption(additionalData, 'fieldCipher'));

    // Reject encrypted stores opened without a cipher at open time. A web open
    // must never silently produce stores that cannot be written.
    final hasEncryptedFields =
        stores.any((s) => s.fields.any((f) => f.encrypted));
    if (hasEncryptedFields && fieldCipher == null) {
      throw ValidationException(
          'Store declares encrypted fields but no fieldCipher was provided.');
    }

    // Worker-owned blob store backs LocalPocket.files + the sync file lane.
    // OPFS access uses @JS('navigator') (no window dependency), so it is safe
    // inside this dedicated worker; it degrades to an in-memory store when OPFS
    // is unavailable.
    final blobStore = WebBlobStore();

    // Boot the LocalPocket engine around this DirectSqliteDatabase
    final pocket = await LocalPocket.open(
      path: path,
      database: db,
      stores: stores,
      platform: PlatformProfile.web,
      blobStore: blobStore,
      fieldCipher: fieldCipher,
      maxDocBytes: maxDocBytes,
      destructiveBackup: destructiveBackup,
    );

    return LocalPocketWorkerDatabase(
      rawDatabase: rawDb,
      databaseAdapter: db,
      pocket: pocket,
    );
  }

  static Map<String, Object?> _parseOpenOptions(JSAny? data) {
    if (data == null) return {};
    try {
      final dartVal = data.dartify();
      if (dartVal is Map) {
        final stringMap = _deepStringMap(dartVal);
        final result = <String, Object?>{};
        if (stringMap['stores'] is List) {
          result['stores'] =
              (stringMap['stores'] as List).map((s) => parseSchema(s)).toList();
        }
        if (stringMap['maxDocBytes'] is int) {
          result['maxDocBytes'] = stringMap['maxDocBytes'];
        }
        if (stringMap['destructiveBackup'] is bool) {
          result['destructiveBackup'] = stringMap['destructiveBackup'];
        }
        return result;
      }
    } catch (_) {}
    return {};
  }

  /// Reads a single raw option from `additionalData` WITHOUT swallowing
  /// errors. Used for options whose malformed values must fail loudly (e.g.
  /// the field-cipher envelope) rather than silently degrading to defaults.
  static Object? _rawOpenOption(JSAny? data, String key) {
    if (data == null) return null;
    try {
      final dartVal = data.dartify();
      if (dartVal is Map) {
        return _deepStringMap(dartVal)[key];
      }
    } catch (_) {}
    return null;
  }

  static CollectionSchema<Object?> parseSchema(Object? raw) {
    if (raw is! Map) {
      throw FormatException('Schema must be a map: $raw');
    }
    final rawMap = _deepStringMap(raw);
    return CollectionSchema<Object?>.fromJson(rawMap);
  }

  static Map<String, Object?> _deepStringMap(Map raw) {
    final out = <String, Object?>{};
    raw.forEach((k, v) {
      final key = k.toString();
      if (v is Map) {
        out[key] = _deepStringMap(v);
      } else if (v is List) {
        out[key] =
            v.map((item) => item is Map ? _deepStringMap(item) : item).toList();
      } else {
        out[key] = v;
      }
    });
    return out;
  }
}

/// Active interactive transaction session state in the worker (§7.1).
class _TxSession {
  final int sessionId;
  final Completer<void> completer;
  final Tx tx;
  final List<String> savepoints = [];

  _TxSession({
    required this.sessionId,
    required this.completer,
    required this.tx,
  });
}

/// Active watcher registration in the worker (§7.2).
class _ActiveWatcher {
  final Future<void> Function() cancel;

  _ActiveWatcher(this.cancel);
}

/// Minimal worker-owned token bridge. The page remains responsible for refresh;
/// the current bearer value is replaced through sync_update_auth.
final class _WebTokenProvider implements TokenProvider {
  String? value;
  final String identityValue;

  _WebTokenProvider(this.value, this.identityValue);

  @override
  Future<Token> currentToken() async => Token(value ?? '');

  @override
  Future<Token> refreshToken(Token current) async => Token(value ?? '');

  @override
  String get identity => identityValue;
}

/// The worker database wrapping [CommonDatabase] and hosting the full
/// [LocalPocket] engine.
final class LocalPocketWorkerDatabase extends WorkerDatabase {
  final CommonDatabase rawDatabase;
  final DirectSqliteDatabase databaseAdapter;
  final LocalPocket pocket;

  _TxSession? _activeSession;
  int _nextSessionId = 1;
  final Map<int, _ActiveWatcher> _watchers = {};
  final UploadSessionRegistry _uploadSessions = UploadSessionRegistry();
  int _nextUploadId = 1;
  SyncEngine? _syncEngine;
  _WebTokenProvider? _tokenProvider;
  StreamSubscription<SyncStatus>? _syncStatusSubscription;
  SyncStatus? _lastSyncStatus;
  final Set<ClientConnection> _connections = {};
  StreamSubscription<RecordChangeEvent>? _eventSubscription;

  LocalPocketWorkerDatabase({
    required this.rawDatabase,
    required this.databaseAdapter,
    required this.pocket,
  });

  @override
  CommonDatabase get database => rawDatabase;

  @override
  Future<JSAny?> handleCustomRequest(
    ClientConnection connection,
    CustomClientDatabaseRequest request,
  ) async {
    _connections.add(connection);
    _eventSubscription ??= pocket.events.listen((event) {
      for (final conn in _connections) {
        unawaited(conn.customRequest({
          'v': webProtocolVersion,
          'op': WireOp.recordEvent,
          'event': encodeWireValue(event.toJson()),
        }.jsify()));
      }
    });

    final rawPayload = request.request;
    if (rawPayload == null) {
      return _encodeError(0, WireErrorCode.protocolEnvelope, 'Payload is null');
    }

    final dartMap = _dartifyPayload(rawPayload);
    if (dartMap == null) {
      return _encodeError(
          0, WireErrorCode.protocolEnvelope, 'Payload must be a map');
    }

    final WebRequest req;
    try {
      req = WebRequest.fromJson(dartMap);
    } catch (e) {
      return _encodeError(0, WireErrorCode.protocolEnvelope, e.toString());
    }

    if (req.version != webProtocolVersion) {
      return _encodeError(
        req.requestId,
        WireErrorCode.protocolMismatch,
        'Version mismatch: expected $webProtocolVersion, got ${req.version}',
        {'expected': webProtocolVersion, 'actual': req.version},
      );
    }

    try {
      final result = await _dispatch(connection, req, request);
      final response = WebResponse.success(
        version: webProtocolVersion,
        requestId: req.requestId,
        result: result,
      );
      return response.toJson().jsify();
    } catch (e) {
      return _encodeError(
        req.requestId,
        WireErrorCode.localpocket,
        e.toString(),
        {'type': stableWireErrorType(e)},
      );
    }
  }

  static Map<String, Object?>? _dartifyPayload(JSAny payload) {
    try {
      final d = payload.dartify();
      if (d is Map) {
        return d.map((k, v) => MapEntry(k.toString(), v));
      }
    } catch (_) {}
    return null;
  }

  static JSAny? _encodeError(
    int requestId,
    String code,
    String message, [
    Map<String, Object?>? details,
  ]) {
    final resp = WebResponse.error(
      version: webProtocolVersion,
      requestId: requestId,
      error: WebError(code: code, message: message, details: details),
    );
    return resp.toJson().jsify();
  }

  late final Map<String, Future<Object?> Function(ClientConnection, WebRequest)>
      _handlers = {
    WireOp.health: _handleHealth,
    WireOp.capabilities: _handleCapabilities,
    WireOp.get: _handleGet,
    WireOp.mutateBatch: _handleMutateBatch,
    WireOp.compiledQuery: _handleCompiledQuery,
    WireOp.open: _handleOpen,
    WireOp.analyze: _handleAnalyze,
    WireOp.walCheckpoint: _handleWalCheckpoint,
    WireOp.vacuum: _handleVacuum,
    WireOp.pruneOutbox: _handlePruneOutbox,
    WireOp.compact: _handleCompact,
    WireOp.runMaintenance: _handleRunMaintenance,
    WireOp.txBegin: _handleTxBegin,
    WireOp.txGet: _handleTxGet,
    WireOp.txMutateBatch: _handleTxMutateBatch,
    WireOp.txSavepoint: _handleTxSavepoint,
    WireOp.txRollbackTo: _handleTxRollbackTo,
    WireOp.txRelease: _handleTxRelease,
    WireOp.txCommit: _handleTxCommit,
    WireOp.txRollback: _handleTxRollback,
    WireOp.watchQuery: _handleWatchQuery,
    WireOp.watchOne: _handleWatchOne,
    WireOp.watchCancel: _handleWatchCancel,
    WireOp.syncStart: _handleSyncStart,
    WireOp.syncStop: _handleSyncStop,
    WireOp.syncNow: _handleSyncNow,
    WireOp.syncPause: _handleSyncPause,
    WireOp.syncResume: _handleSyncResume,
    WireOp.syncSetConnectivity: _handleSyncSetConnectivity,
    WireOp.syncUpdateAuth: _handleSyncUpdateAuth,
    WireOp.syncStatus: _handleSyncStatus,
    WireOp.fileUploadBegin: _handleFileUploadBegin,
    WireOp.fileUploadChunk: _handleFileUploadChunk,
    WireOp.fileUploadFinish: _handleFileUploadFinish,
    WireOp.fileUploadAbort: _handleFileUploadAbort,
    WireOp.fileList: _handleFileList,
    WireOp.fileOpen: _handleFileOpen,
    WireOp.fileRemove: _handleFileRemove,
    WireOp.fileGc: _handleFileGc,
    WireOp.fileEnforceStorageCap: _handleFileEnforceStorageCap,
    WireOp.conflictsList: _handleConflictsList,
    WireOp.conflictsGet: _handleConflictsGet,
    WireOp.conflictsResolve: _handleConflictsResolve,
    WireOp.conflictsAcceptLocal: _handleConflictsAcceptLocal,
    WireOp.conflictsAcceptRemote: _handleConflictsAcceptRemote,
    WireOp.conflictsWatch: _handleConflictsWatch,
    WireOp.close: _handleClose,
  };

  Future<Object?> _dispatch(
    ClientConnection connection,
    WebRequest req,
    CustomClientDatabaseRequest clientReq,
  ) async {
    // Note: `clientReq` is passed by sqlite3_web's handleCustomRequest. It is
    // part of the dispatch context interface, while `req` contains our decoded
    // protocol payload.
    final handler = _handlers[req.op];
    if (handler == null) {
      throw ProtocolEnvelopeException('Unhandled operation: ${req.op}');
    }
    return handler(connection, req);
  }

  Future<Object?> _handleHealth(
      ClientConnection connection, WebRequest req) async {
    final v = rawDatabase.select('SELECT sqlite_version() AS v').first['v'];
    final mode = rawDatabase.select('PRAGMA journal_mode').first.columnAt(0);
    return {
      'ok': true,
      'sqliteVersion': v,
      'journalMode': mode,
    };
  }

  Future<Object?> _handleCapabilities(
      ClientConnection connection, WebRequest req) async {
    // Report the LIVE engine capabilities probed against this worker's actual
    // SQLite build (SqliteCapabilities.probe runs during worker open), not a
    // hard-coded matrix that could drift from a changed WASM asset or an
    // alternate build. `walSupported` is always false on web (TRUNCATE mode).
    final caps = pocket.capabilities;
    final journalMode =
        rawDatabase.select('PRAGMA journal_mode').first.columnAt(0);
    return {
      'storage': 'opfs',
      'durable': true,
      'persistent': true,
      'journal': journalMode,
      'multiTabStorage': true,
      'multiTabSync': false,
      'worker': true,
      // live engine capability snapshot (see SqliteCapabilities.toJson)
      'sqliteVersion': caps.sqliteVersion,
      'hasStrict': caps.hasStrict,
      'walSupported': caps.walSupported,
      'hasFts5': caps.hasFts5,
    };
  }

  Future<Object?> _handleGet(
      ClientConnection connection, WebRequest req) async {
    final w = WireArgs(req.args);
    final store = w.requireString('store', op: 'get');
    final id = w.requireString('id', op: 'get');
    final col = pocket.collection(store);
    final doc = await col.get(id);
    return encodeWireValue(doc);
  }

  Future<Object?> _handleMutateBatch(
      ClientConnection connection, WebRequest req) async {
    final w = WireArgs(req.args);
    final store = w.requireString('store', op: 'mutate_batch');
    final mutations =
        w.requireList('mutations', op: 'mutate_batch').cast<Map>();

    if (mutations.length == 1) {
      final m = mutations.first;
      final action = m['action'] as String;
      final record = decodeWireValue(m['record']) as Map<String, Object?>?;
      final id = m['id'] as String?;
      final col = pocket.collection(store);
      switch (action) {
        case 'put':
          await col.put(record!);
        case 'patch':
          await col.patch(id!, record!);
        case 'archive':
          await col.archive(id!);
        case 'restore':
          await col.restore(id!);
        case 'purge':
          await col.purge(id!);
        default:
          throw ValidationException('Unknown mutation action: $action');
      }
      return {'ok': true};
    }

    await pocket.transaction((tx) async {
      final txCol = tx.collection(store);
      for (final m in mutations) {
        final action = m['action'] as String;
        final record = decodeWireValue(m['record']) as Map<String, Object?>?;
        final id = m['id'] as String?;

        switch (action) {
          case 'put':
            await txCol.put(record!);
          case 'patch':
            await txCol.patch(id!, record!);
          case 'archive':
            await txCol.archive(id!);
          case 'restore':
            await txCol.restore(id!);
          case 'purge':
            await txCol.purge(id!);
          default:
            throw ValidationException('Unknown mutation action: $action');
        }
      }
    });
    return {'ok': true};
  }

  Future<Object?> _handleCompiledQuery(
      ClientConnection connection, WebRequest req) async {
    return _dispatchCompiledQuery(req.args);
  }

  Future<Object?> _handleOpen(
      ClientConnection connection, WebRequest req) async {
    final storesRaw = WireArgs(req.args).optionalList('stores');
    if (storesRaw != null) {
      for (final s in storesRaw) {
        final schema = LocalPocketDatabaseController.parseSchema(s);
        // Defense in depth: never register an encrypted store when the engine
        // has no field cipher — the facade already rejects this at open.
        final hasEncrypted = schema.fields.any((f) => f.encrypted);
        if (hasEncrypted && pocket.fieldCipher == null) {
          throw ValidationException(
              'Store "${schema.name}" declares encrypted fields but no '
              'fieldCipher was provided.');
        }
        if (!pocket.storeNames.contains(schema.name)) {
          await pocket.registerStore(schema);
        }
      }
    }
    return {'ok': true};
  }

  Future<Object?> _handleAnalyze(
      ClientConnection connection, WebRequest req) async {
    final store = WireArgs(req.args).optionalString('store');
    await pocket.analyze(store);
    return {'ok': true};
  }

  Future<Object?> _handleWalCheckpoint(
      ClientConnection connection, WebRequest req) async {
    await pocket.walCheckpoint();
    return {'ok': true};
  }

  Future<Object?> _handleVacuum(
      ClientConnection connection, WebRequest req) async {
    final pages = WireArgs(req.args).optionalInt('pages');
    await pocket.vacuum(pages: pages);
    return {'ok': true};
  }

  Future<Object?> _handlePruneOutbox(
      ClientConnection connection, WebRequest req) async {
    final maxEntries = WireArgs(req.args).optionalInt('maxEntries') ?? 10000;
    final pruned = await pocket.pruneOutbox(maxEntries: maxEntries);
    return {'pruned': pruned};
  }

  Future<Object?> _handleCompact(
      ClientConnection connection, WebRequest req) async {
    final w = WireArgs(req.args);
    final store = w.requireString('store', op: 'compact');
    final olderThanMs = w.requireInt('olderThanMs', op: 'compact');
    final nowMs = w.optionalInt('nowMs');
    final count = await pocket.compact(store,
        olderThan: Duration(milliseconds: olderThanMs), nowMs: nowMs);
    return {'compacted': count};
  }

  Future<Object?> _handleRunMaintenance(
      ClientConnection connection, WebRequest req) async {
    final olderThanMs = WireArgs(req.args).optionalInt('compactOlderThanMs') ??
        const Duration(days: 90).inMilliseconds;
    await pocket.runMaintenance(
        compactOlderThan: Duration(milliseconds: olderThanMs));
    return {'ok': true};
  }

  Future<Object?> _handleTxBegin(
      ClientConnection connection, WebRequest req) async {
    if (_activeSession != null) {
      throw StateError(
          'A transaction session is already active on this database.');
    }
    final sessId = _nextSessionId++;
    final completer = Completer<void>();
    final readyCompleter = Completer<void>();

    unawaited(pocket.transaction((tx) async {
      _activeSession = _TxSession(
        sessionId: sessId,
        completer: completer,
        tx: tx,
      );
      readyCompleter.complete();
      await completer.future;
    }).catchError((_) {
      _activeSession = null;
    }));

    await readyCompleter.future;
    return {'sessionId': sessId};
  }

  Future<Object?> _handleTxGet(
      ClientConnection connection, WebRequest req) async {
    final sess = _requireSession(WireArgs(req.args).optionalInt('sessionId'));
    final w = WireArgs(req.args);
    final store = w.requireString('store', op: 'tx_get');
    final id = w.requireString('id', op: 'tx_get');
    final doc = await sess.tx.collection(store).get(id);
    return encodeWireValue(doc);
  }

  Future<Object?> _handleTxMutateBatch(
      ClientConnection connection, WebRequest req) async {
    final sess = _requireSession(WireArgs(req.args).optionalInt('sessionId'));
    final w = WireArgs(req.args);
    final store = w.requireString('store', op: 'tx_mutate_batch');
    final mutations =
        w.requireList('mutations', op: 'tx_mutate_batch').cast<Map>();
    final txCol = sess.tx.collection(store);
    for (final m in mutations) {
      final action = m['action'] as String;
      final record = decodeWireValue(m['record']) as Map<String, Object?>?;
      final id = m['id'] as String?;
      switch (action) {
        case 'put':
          await txCol.put(record!);
        case 'patch':
          await txCol.patch(id!, record!);
        case 'archive':
          await txCol.archive(id!);
        case 'restore':
          await txCol.restore(id!);
        case 'purge':
          await txCol.purge(id!);
        default:
          throw ValidationException('Unknown mutation action: $action');
      }
    }
    return {'ok': true};
  }

  Future<Object?> _handleTxSavepoint(
      ClientConnection connection, WebRequest req) async {
    final sess = _requireSession(WireArgs(req.args).optionalInt('sessionId'));
    final spName = 'lp_sp_wire_${sess.savepoints.length}';
    sess.savepoints.add(spName);
    await sess.tx.executor.execute('SAVEPOINT $spName');
    return {'savepoint': spName};
  }

  Future<Object?> _handleTxRollbackTo(
      ClientConnection connection, WebRequest req) async {
    final sess = _requireSession(WireArgs(req.args).optionalInt('sessionId'));
    final spName =
        WireArgs(req.args).requireString('savepoint', op: 'tx_rollback_to');
    // Mirror the native nested-transaction failure path (Tx._withSavepoint):
    // ROLLBACK TO discards the savepoint's work but leaves the savepoint
    // active, so it must also be RELEASEd and dropped from bookkeeping.
    // Otherwise stale names accumulate in sess.savepoints and subsequent
    // nested transactions (`lp_sp_wire_${sess.savepoints.length}`) can
    // collide or grow unbounded.
    await sess.tx.executor.execute('ROLLBACK TO $spName');
    await sess.tx.executor.execute('RELEASE $spName');
    sess.savepoints.remove(spName);
    return {'ok': true};
  }

  Future<Object?> _handleTxRelease(
      ClientConnection connection, WebRequest req) async {
    final sess = _requireSession(WireArgs(req.args).optionalInt('sessionId'));
    final spName =
        WireArgs(req.args).requireString('savepoint', op: 'tx_release');
    await sess.tx.executor.execute('RELEASE $spName');
    sess.savepoints.remove(spName);
    return {'ok': true};
  }

  Future<Object?> _handleTxCommit(
      ClientConnection connection, WebRequest req) async {
    final sess = _requireSession(WireArgs(req.args).optionalInt('sessionId'));
    _activeSession = null;
    sess.completer.complete();
    return {'ok': true};
  }

  Future<Object?> _handleTxRollback(
      ClientConnection connection, WebRequest req) async {
    final sess = _requireSession(WireArgs(req.args).optionalInt('sessionId'));
    _activeSession = null;
    sess.completer.completeError(RemoteLocalPocketException(
        code: 'rollback', message: 'Transaction rolled back.'));
    return {'ok': true};
  }

  Future<Object?> _handleWatchQuery(
      ClientConnection connection, WebRequest req) async {
    final watchId = WireArgs(req.args).requireInt('watchId', op: 'watch_query');
    final plan = _parseCompiledPlan(req.args);
    final watcher = CompiledWatcher(
      pocket,
      pocket.requireTable(plan.store).schema,
      plan.sql,
      plan.args,
      plan.projection,
      plan.decodeColumns,
      (items) {
        unawaited(connection.customRequest({
          'v': webProtocolVersion,
          'op': WireOp.workerEvent,
          'watchId': watchId,
          'value': encodeWireValue(items),
        }.jsify()));
      },
    );
    final registration = _ActiveWatcher(() async {
      watcher.dispose();
    });
    final initialItems = await initializeWebWatch<List<Map<String, Object?>>>(
      start: watcher.start,
      register: () => _watchers[watchId] = registration,
      initialize: watcher.initial,
      cleanup: () async {
        if (identical(_watchers[watchId], registration)) {
          _watchers.remove(watchId);
        }
        await registration.cancel();
      },
    );
    return {
      'watchId': watchId,
      'items': initialItems.map(encodeWireValue).toList(),
    };
  }

  Future<Object?> _handleWatchOne(
      ClientConnection connection, WebRequest req) async {
    final aw = WireArgs(req.args);
    final watchId = aw.requireInt('watchId', op: 'watch_one');
    final store = aw.requireString('store', op: 'watch_one');
    final id = aw.requireString('id', op: 'watch_one');
    final table = pocket.requireTable(store);
    final watcher = OneWatcher(pocket, table, id);
    late final StreamSubscription<Map<String, Object?>?> sub;
    final registration = _ActiveWatcher(() async {
      await sub.cancel();
    });
    final doc = await initializeWebWatch<Map<String, Object?>?>(
      start: () {
        sub = watcher.startStream().listen((item) {
          unawaited(connection.customRequest({
            'v': webProtocolVersion,
            'op': WireOp.workerEvent,
            'watchId': watchId,
            'value': encodeWireValue(item),
          }.jsify()));
        });
      },
      register: () => _watchers[watchId] = registration,
      initialize: () => pocket.collection(store).get(id),
      cleanup: () async {
        if (identical(_watchers[watchId], registration)) {
          _watchers.remove(watchId);
        }
        await registration.cancel();
      },
    );
    return {
      'watchId': watchId,
      'item': encodeWireValue(doc),
    };
  }

  Future<Object?> _handleWatchCancel(
      ClientConnection connection, WebRequest req) async {
    final wid = WireArgs(req.args).requireInt('watchId', op: 'watch_cancel');
    final watcher = _watchers.remove(wid);
    if (watcher != null) {
      await watcher.cancel();
    }
    return {'ok': true};
  }

  Future<Object?> _handleSyncStart(
      ClientConnection connection, WebRequest req) async {
    final w = WireArgs(req.args);
    final baseUrl = w.optionalString('baseUrl');
    if (baseUrl == null || baseUrl.isEmpty) {
      throw ValidationException('syncStart requires baseUrl.');
    }
    await _stopSync();
    final token = w.optionalString('token');
    final scopeId = w.optionalString('scopeId') ?? 'web-sync';
    final provider = _WebTokenProvider(token, scopeId);
    final backend = PocketBaseBackend(
      baseUrl: Uri.parse(baseUrl),
      tokenProvider: provider,
      stores: pocket.storeNames.toList(),
      identity: scopeId,
    );
    late SyncEngine engine;
    engine = SyncEngine(
      pocket: pocket,
      backend: backend,
      onAuthRequired: () async {
        unawaited(connection.customRequest({
          'v': webProtocolVersion,
          'op': WireOp.authRequired,
        }.jsify()));
      },
    );
    _tokenProvider = provider;
    _syncEngine = engine;
    _syncStatusSubscription = engine.status.listen((status) {
      _lastSyncStatus = status;
      unawaited(connection.customRequest({
        'v': webProtocolVersion,
        'op': WireOp.syncStatus,
        'status': _encodeSyncStatus(status),
      }.jsify()));
    });
    await engine.start();
    await backend.startRealtime();
    return {'ok': true, 'state': engine.state.name};
  }

  Future<Object?> _handleSyncStop(
      ClientConnection connection, WebRequest req) async {
    await _stopSync();
    return {'ok': true};
  }

  Future<Object?> _handleSyncNow(
      ClientConnection connection, WebRequest req) async {
    final engine = _syncEngine;
    if (engine == null) throw StateError('Sync is not started.');
    final report = await engine.syncNow();
    return _encodeSyncReport(report);
  }

  Future<Object?> _handleSyncPause(
      ClientConnection connection, WebRequest req) async {
    final engine = _syncEngine;
    if (engine == null) throw StateError('Sync is not started.');
    await engine.pause();
    return {'ok': true};
  }

  Future<Object?> _handleSyncResume(
      ClientConnection connection, WebRequest req) async {
    final engine = _syncEngine;
    if (engine == null) throw StateError('Sync is not started.');
    await engine.resume();
    return {'ok': true};
  }

  Future<Object?> _handleSyncSetConnectivity(
      ClientConnection connection, WebRequest req) async {
    final engine = _syncEngine;
    if (engine == null) throw StateError('Sync is not started.');
    final online = WireArgs(req.args).requireBool(
      'online',
      op: 'sync_set_connectivity',
    );
    await engine.setConnectivity(online);
    return {'ok': true};
  }

  Future<Object?> _handleSyncUpdateAuth(
      ClientConnection connection, WebRequest req) async {
    final provider = _tokenProvider;
    final engine = _syncEngine;
    if (provider == null || engine == null) {
      throw StateError('Sync is not started.');
    }
    provider.value = WireArgs(req.args).optionalString('token');
    await engine.markAuthValid();
    return {'ok': true};
  }

  Future<Object?> _handleSyncStatus(
      ClientConnection connection, WebRequest req) async {
    return _lastSyncStatus == null
        ? {'state': SyncEngineState.closed.name}
        : _encodeSyncStatus(_lastSyncStatus!);
  }

  Future<Object?> _handleFileUploadBegin(
      ClientConnection connection, WebRequest req) async {
    final w = WireArgs(req.args);
    final uploadId = _nextUploadId++;
    _uploadSessions.begin(
      uploadId: uploadId,
      store: w.requireString('store', op: 'file_upload_begin'),
      recordId: w.requireString('recordId', op: 'file_upload_begin'),
      field: w.optionalString('field') ?? 'imgs',
      name: w.optionalString('name') ?? 'blob.bin',
      expectedSize: w.requireInt('size', op: 'file_upload_begin'),
      expectedSha256: w.optionalString('expectedSha256'),
    );
    return {'uploadId': uploadId};
  }

  Future<Object?> _handleFileUploadChunk(
      ClientConnection connection, WebRequest req) async {
    final uploadId =
        WireArgs(req.args).requireInt('uploadId', op: 'file_upload_chunk');
    final bytes = decodeWireValue(req.args['chunk']) as List<int>;
    _uploadSessions.addChunk(
      uploadId: uploadId,
      chunk: Uint8List.fromList(bytes),
    );
    return {'ok': true};
  }

  Future<Object?> _handleFileUploadFinish(
      ClientConnection connection, WebRequest req) async {
    final uploadId =
        WireArgs(req.args).requireInt('uploadId', op: 'file_upload_finish');
    final session = _uploadSessions.takeForFinish(uploadId);

    // Reassemble the byte stream from the bounded chunks.
    Stream<List<int>> stream() async* {
      for (final chunk in session.chunks) {
        yield chunk;
      }
    }

    final ref = await pocket.files.attach(
      store: session.store,
      recordId: session.recordId,
      bytes: stream(),
      field: session.field,
      name: session.name,
      expectedSize: session.expectedSize,
      expectedSha256: session.expectedSha256,
    );

    return {
      'refId': ref.refId,
      'hash': ref.hash,
      'state': ref.state,
      'remoteName': ref.remoteName,
    };
  }

  Future<Object?> _handleFileUploadAbort(
      ClientConnection connection, WebRequest req) async {
    final uploadId =
        WireArgs(req.args).requireInt('uploadId', op: 'file_upload_abort');
    _uploadSessions.abort(uploadId);
    return {'ok': true};
  }

  static Map<String, Object?> _encodeFileRef(FileRef ref) => {
        'refId': ref.refId,
        'store': ref.store,
        'recordId': ref.recordId,
        'field': ref.field,
        'hash': ref.hash,
        if (ref.remoteName != null) 'remoteName': ref.remoteName,
        'state': ref.state,
        'nextRetryAt': ref.nextRetryAt,
        'attemptCount': ref.attemptCount,
        if (ref.lastError != null) 'lastError': ref.lastError,
      };

  Future<Object?> _handleFileList(
      ClientConnection connection, WebRequest req) async {
    final w = WireArgs(req.args);
    final refs = await pocket.files.list(
      store: w.requireString('store', op: 'file_list'),
      recordId: w.requireString('recordId', op: 'file_list'),
      field: w.optionalString('field') ?? 'imgs',
    );
    return {'refs': refs.map(_encodeFileRef).toList()};
  }

  Future<Object?> _handleFileOpen(
      ClientConnection connection, WebRequest req) async {
    final w = WireArgs(req.args);
    final stream = await pocket.files.open(
      store: w.requireString('store', op: 'file_open'),
      recordId: w.requireString('recordId', op: 'file_open'),
      field: w.optionalString('field') ?? 'imgs',
      index: w.optionalInt('index') ?? 0,
      refId: w.optionalString('refId'),
    );
    final allBytes = <int>[];
    await for (final chunk in stream) {
      allBytes.addAll(chunk);
    }
    return {
      'bytes': encodeWireValue(Uint8List.fromList(allBytes)),
      'size': allBytes.length,
    };
  }

  Future<Object?> _handleFileRemove(
      ClientConnection connection, WebRequest req) async {
    final w = WireArgs(req.args);
    await pocket.files.remove(
      store: w.requireString('store', op: 'file_remove'),
      recordId: w.requireString('recordId', op: 'file_remove'),
      field: w.optionalString('field') ?? 'imgs',
      index: w.optionalInt('index') ?? 0,
      refId: w.optionalString('refId'),
    );
    return {'ok': true};
  }

  Future<Object?> _handleFileGc(
      ClientConnection connection, WebRequest req) async {
    final w = WireArgs(req.args);
    final cleaned = await pocket.files.gc(
      blobGrace: Duration(
          milliseconds: w.optionalInt('blobGraceMs') ??
              const Duration(days: 7).inMilliseconds),
      tmpGrace: Duration(
          milliseconds: w.optionalInt('tmpGraceMs') ??
              const Duration(hours: 24).inMilliseconds),
    );
    return {'cleaned': cleaned};
  }

  Future<Object?> _handleFileEnforceStorageCap(
      ClientConnection connection, WebRequest req) async {
    final w = WireArgs(req.args);
    final evicted = await pocket.files.enforceStorageCap(
        maxBytes: w.requireInt('maxBytes', op: 'file_enforce_storage_cap'));
    return {'evicted': evicted};
  }

  Future<Object?> _handleConflictsList(
      ClientConnection connection, WebRequest req) async {
    final store = WireArgs(req.args).optionalString('store');
    final conflicts = await pocket.conflicts.listOpen(store: store);
    return {'conflicts': conflicts.map(encodeConflictRecord).toList()};
  }

  Future<Object?> _handleConflictsGet(
      ClientConnection connection, WebRequest req) async {
    final w = WireArgs(req.args);
    final store = w.requireString('store', op: 'conflicts_get');
    final id = w.requireString('id', op: 'conflicts_get');
    final conflict = await pocket.conflicts.get(store, id);
    return conflict == null ? null : encodeConflictRecord(conflict);
  }

  Future<Object?> _handleConflictsResolve(
      ClientConnection connection, WebRequest req) async {
    final w = WireArgs(req.args);
    final store = w.requireString('store', op: 'conflicts_resolve');
    final id = w.requireString('id', op: 'conflicts_resolve');
    final merged = decodeWireValue(req.args['merged']) as Map<String, Object?>;
    await pocket.conflicts.resolve(store: store, id: id, merged: merged);
    return {'ok': true};
  }

  Future<Object?> _handleConflictsAcceptLocal(
      ClientConnection connection, WebRequest req) async {
    final w = WireArgs(req.args);
    final store = w.requireString('store', op: 'conflicts_accept_local');
    final id = w.requireString('id', op: 'conflicts_accept_local');
    await pocket.conflicts.acceptLocal(store, id);
    return {'ok': true};
  }

  Future<Object?> _handleConflictsAcceptRemote(
      ClientConnection connection, WebRequest req) async {
    final w = WireArgs(req.args);
    final store = w.requireString('store', op: 'conflicts_accept_remote');
    final id = w.requireString('id', op: 'conflicts_accept_remote');
    await pocket.conflicts.acceptRemote(store, id);
    return {'ok': true};
  }

  Future<Object?> _handleConflictsWatch(
      ClientConnection connection, WebRequest req) async {
    final w = WireArgs(req.args);
    final watchId = w.requireInt('watchId', op: 'conflicts_watch');
    final store = w.optionalString('store');
    // The engine's own conflicts watch drives the stream: it emits the
    // initial list immediately on listen and then on every change (add,
    // resolve, modify), so every emission is forwarded as a worker event and
    // no initial snapshot is returned in the request response.
    final sub = pocket.conflicts.watch(store: store).listen((conflicts) {
      unawaited(connection.customRequest({
        'v': webProtocolVersion,
        'op': WireOp.workerEvent,
        'watchId': watchId,
        'value': encodeWireValue(conflicts.map(encodeConflictRecord).toList()),
      }.jsify()));
    });
    _watchers[watchId] = _ActiveWatcher(() async {
      sub.cancel();
    });
    return {'watchId': watchId};
  }

  Future<Object?> _handleClose(
      ClientConnection connection, WebRequest req) async {
    await _stopSync();
    for (final w in _watchers.values) {
      await w.cancel();
    }
    _watchers.clear();
    _uploadSessions.clear();
    if (_activeSession != null && !_activeSession!.completer.isCompleted) {
      _activeSession!.completer
          .completeError(DatabaseWorkerClosedException('Database closed.'));
    }
    _activeSession = null;
    await _eventSubscription?.cancel();
    _eventSubscription = null;
    _connections.clear();
    await pocket.close();
    return {'ok': true};
  }

  Future<void> _stopSync() async {
    final engine = _syncEngine;
    _syncEngine = null;
    await _syncStatusSubscription?.cancel();
    _syncStatusSubscription = null;
    if (engine != null) {
      final backend = engine.backend;
      await engine.stop();
      if (backend is PocketBaseBackend) {
        await backend.stopRealtime();
        backend.close();
      }
    }
    _tokenProvider = null;
    _lastSyncStatus = null;
  }

  static Map<String, Object?> _encodeSyncStatus(SyncStatus status) => {
        'state': status.state.name,
        'pending': status.pending,
        'conflicts': status.conflicts,
        'hidden': status.hidden,
        if (status.lastError != null) 'lastError': status.lastError,
        if (status.lastSyncAt != null)
          'lastSyncAt': encodeWireValue(status.lastSyncAt),
      };

  static Map<String, Object?> _encodeSyncReport(SyncReport report) => {
        'pulled': report.pulled,
        'swept': report.swept,
        'pushed': report.pushed,
        'deadLettered': report.deadLettered,
        'hadError': report.hadError,
      };

  _TxSession _requireSession(int? sessionId) {
    if (sessionId == null ||
        _activeSession == null ||
        _activeSession!.sessionId != sessionId) {
      throw StateError('No active transaction session matching ID $sessionId.');
    }
    return _activeSession!;
  }

  static const Set<String> _compiledOperations = {
    'query',
    'count',
    'countDistinct',
    'distinct',
    'ids',
    'explain',
    'sum',
    'avg',
    'min',
    'max',
    'search',
  };

  /// Parses and validates a compiled query plan envelope. The plan is a typed
  /// compiler artifact: operation vocabulary, compiler version, schema
  /// version + fingerprint, argument count, and the `SELECT ` prefix are all
  /// checked before the SQL is ever executed.
  QueryPlan _parseCompiledPlan(Map<String, Object?> args) {
    final type = args['type'];
    final operation = args['operation'];
    final compilerVersion = args['compilerVersion'];
    final store = args['store'];
    final schemaVersion = args['schemaVersion'];
    final schemaFingerprint = args['schemaFingerprint'];
    final argumentCount = args['argumentCount'];
    final sql = args['sql'];
    final parameters = args['args'];
    if (type != QueryPlan.type ||
        operation is! String ||
        !_compiledOperations.contains(operation) ||
        compilerVersion != queryCompilerVersion ||
        store is! String ||
        schemaVersion is! int ||
        schemaFingerprint is! String ||
        argumentCount is! int ||
        sql is! String ||
        parameters is! List) {
      throw ProtocolEnvelopeException(
          'Malformed or stale compiled query plan.');
    }
    final schema = pocket.requireTable(store).schema;
    final expectedFingerprint = sha256Hex(canonicalize(schema.toJson()));
    if (schema.version != schemaVersion ||
        expectedFingerprint != schemaFingerprint ||
        parameters.length != argumentCount ||
        !sql.startsWith('SELECT ')) {
      throw ProtocolEnvelopeException(
          'Stale or mismatched compiled query plan.');
    }
    final projectionRaw = args['projection'];
    final limitRaw = args['limit'];
    final shapeRaw = args['shape'];
    return QueryPlan(
      typeName: type as String,
      operation: operation,
      compilerVersion: queryCompilerVersion,
      store: store,
      schemaVersion: schemaVersion,
      schemaFingerprint: schemaFingerprint,
      sql: sql,
      args:
          List<Object?>.unmodifiable(parameters.map(decodeWireValue).toList()),
      limit: limitRaw is int ? limitRaw : null,
      projection: projectionRaw is List ? projectionRaw.cast<String>() : null,
      shape: shapeRaw is String ? shapeRaw : '',
    );
  }

  Future<Map<String, Object?>> _dispatchCompiledQuery(
      Map<String, Object?> args) async {
    final plan = _parseCompiledPlan(args);

    final Future<List<Map<String, Object?>>> Function(
        String sql, List<Object?> params) run;
    final sessionId = args['sessionId'];
    if (sessionId is int) {
      final session = _requireSession(sessionId);
      run = (sql, params) => session.tx.executor.rawQuery(sql, params);
    } else {
      run = (sql, params) => pocket.traceQuery(sql, params);
    }

    final pageLimitRaw = args['pageLimit'];
    final pageLimit = pageLimitRaw is int ? pageLimitRaw : null;
    return executeCompiledQuery(pocket, run, plan, pageLimit: pageLimit);
  }
}
