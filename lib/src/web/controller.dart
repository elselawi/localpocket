import 'dart:async';
import 'dart:js_interop';
import 'dart:typed_data';

import 'package:sqlite3/common.dart';
// ignore: implementation_imports
import 'package:sqlite3/src/wasm/sqlite3.dart';
import 'package:sqlite3_web/sqlite3_web.dart';

import '../core/capabilities.dart';
import '../core/change_bus.dart';
import '../core/codec.dart';
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
import 'protocol.dart';

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
  final int watchId;
  final Future<void> Function() cancel;

  _ActiveWatcher(this.watchId, this.cancel);
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

/// Active bounded-chunk upload session (§ file upload).
class _UploadSession {
  final int uploadId;
  final String store;
  final String recordId;
  final String field;
  final String name;
  final int expectedSize;
  final String? expectedSha256;
  int receivedBytes = 0;
  final List<Uint8List> chunks = [];

  _UploadSession({
    required this.uploadId,
    required this.store,
    required this.recordId,
    required this.field,
    required this.name,
    required this.expectedSize,
    this.expectedSha256,
  });
}

/// Maximum chunk size for bounded file uploads (256 KiB).
const int _maxUploadChunkBytes = 262144;

/// The worker database wrapping [CommonDatabase] and hosting the full
/// [LocalPocket] engine.
final class LocalPocketWorkerDatabase extends WorkerDatabase {
  final CommonDatabase rawDatabase;
  final DirectSqliteDatabase databaseAdapter;
  final LocalPocket pocket;

  _TxSession? _activeSession;
  int _nextSessionId = 1;
  final Map<int, _ActiveWatcher> _watchers = {};
  final Map<int, _UploadSession> _uploadSessions = {};
  int _nextUploadId = 1;
  SyncEngine? _syncEngine;
  _WebTokenProvider? _tokenProvider;
  StreamSubscription<SyncStatus>? _syncStatusSubscription;
  SyncStatus? _lastSyncStatus;

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
        {'type': e.runtimeType.toString()},
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
    WireOp.fileProbe: _handleFileProbe,
    WireOp.fileUploadBegin: _handleFileUploadBegin,
    WireOp.fileUploadChunk: _handleFileUploadChunk,
    WireOp.fileUploadFinish: _handleFileUploadFinish,
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
    return {
      'storage': 'opfs',
      'durable': true,
      'persistent': true,
      'journal': 'truncate',
      'multiTabStorage': true,
      'multiTabSync': false,
      'worker': true,
    };
  }

  Future<Object?> _handleGet(
      ClientConnection connection, WebRequest req) async {
    final store = req.args['store'] as String;
    final id = req.args['id'] as String;
    final col = pocket.collection(store);
    final doc = await col.get(id);
    return encodeWireValue(doc);
  }

  Future<Object?> _handleMutateBatch(
      ClientConnection connection, WebRequest req) async {
    final store = req.args['store'] as String;
    final mutations = (req.args['mutations'] as List).cast<Map>();

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
    final storesRaw = req.args['stores'] as List?;
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
    final store = req.args['store'] as String?;
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
    final pages = req.args['pages'] as int?;
    await pocket.vacuum(pages: pages);
    return {'ok': true};
  }

  Future<Object?> _handlePruneOutbox(
      ClientConnection connection, WebRequest req) async {
    final maxEntries = req.args['maxEntries'] as int? ?? 10000;
    final pruned = await pocket.pruneOutbox(maxEntries: maxEntries);
    return {'pruned': pruned};
  }

  Future<Object?> _handleCompact(
      ClientConnection connection, WebRequest req) async {
    final store = req.args['store'] as String;
    final olderThanMs = req.args['olderThanMs'] as int;
    final count = await pocket.compact(store,
        olderThan: Duration(milliseconds: olderThanMs));
    return {'compacted': count};
  }

  Future<Object?> _handleRunMaintenance(
      ClientConnection connection, WebRequest req) async {
    final olderThanMs = req.args['compactOlderThanMs'] as int? ??
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
    final sess = _requireSession(req.args['sessionId'] as int?);
    final store = req.args['store'] as String;
    final id = req.args['id'] as String;
    final doc = await sess.tx.collection(store).get(id);
    return encodeWireValue(doc);
  }

  Future<Object?> _handleTxMutateBatch(
      ClientConnection connection, WebRequest req) async {
    final sess = _requireSession(req.args['sessionId'] as int?);
    final store = req.args['store'] as String;
    final mutations = (req.args['mutations'] as List).cast<Map>();
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
    final sess = _requireSession(req.args['sessionId'] as int?);
    final spName = 'lp_sp_wire_${sess.savepoints.length}';
    sess.savepoints.add(spName);
    await sess.tx.executor.execute('SAVEPOINT $spName');
    return {'savepoint': spName};
  }

  Future<Object?> _handleTxRollbackTo(
      ClientConnection connection, WebRequest req) async {
    final sess = _requireSession(req.args['sessionId'] as int?);
    final spName = req.args['savepoint'] as String;
    await sess.tx.executor.execute('ROLLBACK TO $spName');
    return {'ok': true};
  }

  Future<Object?> _handleTxRelease(
      ClientConnection connection, WebRequest req) async {
    final sess = _requireSession(req.args['sessionId'] as int?);
    final spName = req.args['savepoint'] as String;
    await sess.tx.executor.execute('RELEASE $spName');
    sess.savepoints.remove(spName);
    return {'ok': true};
  }

  Future<Object?> _handleTxCommit(
      ClientConnection connection, WebRequest req) async {
    final sess = _requireSession(req.args['sessionId'] as int?);
    _activeSession = null;
    sess.completer.complete();
    return {'ok': true};
  }

  Future<Object?> _handleTxRollback(
      ClientConnection connection, WebRequest req) async {
    final sess = _requireSession(req.args['sessionId'] as int?);
    _activeSession = null;
    sess.completer.completeError(RemoteLocalPocketException(
        code: 'rollback', message: 'Transaction rolled back.'));
    return {'ok': true};
  }

  Future<Object?> _handleWatchQuery(
      ClientConnection connection, WebRequest req) async {
    final watchId = req.args['watchId'] as int;
    final plan = _parseCompiledPlan(req.args);
    final watcher = _CompiledWatcher(
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
    watcher.start();
    _watchers[watchId] = _ActiveWatcher(watchId, () async {
      watcher.dispose();
    });
    final initialItems = await watcher.initial();
    return {
      'watchId': watchId,
      'items': initialItems.map(encodeWireValue).toList(),
    };
  }

  Future<Object?> _handleWatchOne(
      ClientConnection connection, WebRequest req) async {
    final watchId = req.args['watchId'] as int;
    final store = req.args['store'] as String;
    final id = req.args['id'] as String;
    final table = pocket.requireTable(store);
    final watcher = OneWatcher(pocket, table, id);
    final sub = watcher.start().listen((item) {
      unawaited(connection.customRequest({
        'v': webProtocolVersion,
        'op': WireOp.workerEvent,
        'watchId': watchId,
        'value': encodeWireValue(item),
      }.jsify()));
    });
    _watchers[watchId] = _ActiveWatcher(watchId, () async {
      sub.cancel();
    });
    final doc = await pocket.collection(store).get(id);
    return {
      'watchId': watchId,
      'item': encodeWireValue(doc),
    };
  }

  Future<Object?> _handleWatchCancel(
      ClientConnection connection, WebRequest req) async {
    final wid = req.args['watchId'] as int;
    final watcher = _watchers.remove(wid);
    if (watcher != null) {
      await watcher.cancel();
    }
    return {'ok': true};
  }

  Future<Object?> _handleSyncStart(
      ClientConnection connection, WebRequest req) async {
    final baseUrl = req.args['baseUrl'] as String?;
    if (baseUrl == null || baseUrl.isEmpty) {
      throw ValidationException('syncStart requires baseUrl.');
    }
    await _stopSync();
    final token = req.args['token'] as String?;
    final scopeId = req.args['scopeId'] as String? ?? 'web-sync';
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
    final online = req.args['online'];
    if (online is! bool) throw ValidationException('online must be bool.');
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
    provider.value = req.args['token'] as String?;
    await engine.markAuthValid();
    return {'ok': true};
  }

  Future<Object?> _handleSyncStatus(
      ClientConnection connection, WebRequest req) async {
    return _lastSyncStatus == null
        ? {'state': SyncEngineState.closed.name}
        : _encodeSyncStatus(_lastSyncStatus!);
  }

  /// Temporary task-2 spike: prove the worker-owned blob store round-trips
  /// bytes inside the dedicated worker. Calls `pocket.files.attach` then
  /// `pocket.files.open`, and compares the re-read bytes to the original.
  /// Replaced by real file RPC in task 4.
  Future<Object?> _handleFileProbe(
      ClientConnection connection, WebRequest req) async {
    final store = req.args['store'] as String;
    final recordId = req.args['recordId'] as String;
    final bytes = decodeWireValue(req.args['bytes']) as List<int>;

    final ref = await pocket.files.attach(
      store: store,
      recordId: recordId,
      bytes: Stream.value(bytes),
      expectedSize: bytes.length,
    );

    final stream = await pocket.files.open(
      store: store,
      recordId: recordId,
      refId: ref.refId,
    );
    final readBack = <int>[];
    await for (final chunk in stream) {
      readBack.addAll(chunk);
    }

    final listed = await pocket.files.list(
      store: store,
      recordId: recordId,
    );

    return {
      'hash': ref.hash,
      'state': ref.state,
      'refCount': listed.length,
      'readBack': readBack,
      'match':
          bytes.length == readBack.length && _intListEquals(bytes, readBack),
    };
  }

  static bool _intListEquals(List<int> a, List<int> b) {
    if (a.length != b.length) return false;
    for (var i = 0; i < a.length; i++) {
      if (a[i] != b[i]) return false;
    }
    return true;
  }

  Future<Object?> _handleFileUploadBegin(
      ClientConnection connection, WebRequest req) async {
    final uploadId = _nextUploadId++;
    final session = _UploadSession(
      uploadId: uploadId,
      store: req.args['store'] as String,
      recordId: req.args['recordId'] as String,
      field: req.args['field'] as String? ?? 'imgs',
      name: req.args['name'] as String? ?? 'blob.bin',
      expectedSize: req.args['size'] as int,
      expectedSha256: req.args['expectedSha256'] as String?,
    );
    // Max ~4 GiB. Do NOT use (1 << 32): in dart2js that is 1 (JS shift is mod 32).
    const maxFileBytes = 4294967296; // 2^32
    if (session.expectedSize < 0 || session.expectedSize > maxFileBytes) {
      throw ValidationException('Invalid file size: ${session.expectedSize}');
    }
    _uploadSessions[uploadId] = session;
    return {'uploadId': uploadId};
  }

  Future<Object?> _handleFileUploadChunk(
      ClientConnection connection, WebRequest req) async {
    final uploadId = req.args['uploadId'] as int;
    final session = _uploadSessions[uploadId];
    if (session == null) {
      throw ValidationException('Unknown upload session: $uploadId');
    }
    final bytes = decodeWireValue(req.args['chunk']) as List<int>;
    if (bytes.length > _maxUploadChunkBytes) {
      throw ValidationException(
          'Chunk too large: ${bytes.length} > $_maxUploadChunkBytes');
    }
    session.chunks.add(Uint8List.fromList(bytes));
    session.receivedBytes += bytes.length;
    if (session.receivedBytes > session.expectedSize) {
      throw ValidationException(
          'Upload exceeds declared size ${session.expectedSize}');
    }
    return {'ok': true};
  }

  Future<Object?> _handleFileUploadFinish(
      ClientConnection connection, WebRequest req) async {
    final uploadId = req.args['uploadId'] as int;
    final session = _uploadSessions.remove(uploadId);
    if (session == null) {
      throw ValidationException('Unknown upload session: $uploadId');
    }
    if (session.receivedBytes != session.expectedSize) {
      throw ValidationException(
          'Upload size mismatch: expected ${session.expectedSize} '
          'but got ${session.receivedBytes}');
    }

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
    final refs = await pocket.files.list(
      store: req.args['store'] as String,
      recordId: req.args['recordId'] as String,
      field: req.args['field'] as String? ?? 'imgs',
    );
    return {'refs': refs.map(_encodeFileRef).toList()};
  }

  Future<Object?> _handleFileOpen(
      ClientConnection connection, WebRequest req) async {
    final stream = await pocket.files.open(
      store: req.args['store'] as String,
      recordId: req.args['recordId'] as String,
      field: req.args['field'] as String? ?? 'imgs',
      index: req.args['index'] as int? ?? 0,
      refId: req.args['refId'] as String?,
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
    await pocket.files.remove(
      store: req.args['store'] as String,
      recordId: req.args['recordId'] as String,
      field: req.args['field'] as String? ?? 'imgs',
      index: req.args['index'] as int? ?? 0,
      refId: req.args['refId'] as String?,
    );
    return {'ok': true};
  }

  Future<Object?> _handleFileGc(
      ClientConnection connection, WebRequest req) async {
    final cleaned = await pocket.files.gc(
      blobGrace: Duration(
          milliseconds: req.args['blobGraceMs'] as int? ??
              const Duration(days: 7).inMilliseconds),
      tmpGrace: Duration(
          milliseconds: req.args['tmpGraceMs'] as int? ??
              const Duration(hours: 24).inMilliseconds),
    );
    return {'cleaned': cleaned};
  }

  Future<Object?> _handleFileEnforceStorageCap(
      ClientConnection connection, WebRequest req) async {
    final evicted = await pocket.files
        .enforceStorageCap(maxBytes: req.args['maxBytes'] as int);
    return {'evicted': evicted};
  }

  Future<Object?> _handleConflictsList(
      ClientConnection connection, WebRequest req) async {
    final store = req.args['store'] as String?;
    final conflicts = await pocket.conflicts.listOpen(store: store);
    return {'conflicts': conflicts.map(encodeConflictRecord).toList()};
  }

  Future<Object?> _handleConflictsGet(
      ClientConnection connection, WebRequest req) async {
    final store = req.args['store'] as String;
    final id = req.args['id'] as String;
    final conflict = await pocket.conflicts.get(store, id);
    return conflict == null ? null : encodeConflictRecord(conflict);
  }

  Future<Object?> _handleConflictsResolve(
      ClientConnection connection, WebRequest req) async {
    final store = req.args['store'] as String;
    final id = req.args['id'] as String;
    final merged = decodeWireValue(req.args['merged']) as Map<String, Object?>;
    await pocket.conflicts.resolve(store: store, id: id, merged: merged);
    return {'ok': true};
  }

  Future<Object?> _handleConflictsAcceptLocal(
      ClientConnection connection, WebRequest req) async {
    final store = req.args['store'] as String;
    final id = req.args['id'] as String;
    await pocket.conflicts.acceptLocal(store, id);
    return {'ok': true};
  }

  Future<Object?> _handleConflictsAcceptRemote(
      ClientConnection connection, WebRequest req) async {
    final store = req.args['store'] as String;
    final id = req.args['id'] as String;
    await pocket.conflicts.acceptRemote(store, id);
    return {'ok': true};
  }

  Future<Object?> _handleConflictsWatch(
      ClientConnection connection, WebRequest req) async {
    final watchId = req.args['watchId'] as int;
    final store = req.args['store'] as String?;
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
    _watchers[watchId] = _ActiveWatcher(watchId, () async {
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
    if (_activeSession != null && !_activeSession!.completer.isCompleted) {
      _activeSession!.completer
          .completeError(DatabaseWorkerClosedException('Database closed.'));
    }
    _activeSession = null;
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

/// Compiled-plan watch: re-executes a validated plan when the store's rows
/// change, dedupes identical snapshots, and coalesces bursts on a 16 ms
/// latest-wins window (mirrors [QueryWatcher] semantics).
///
/// Perf note: every refresh re-runs the plan and SHA-256 hashes ALL result
/// rows — O(N) re-query + re-hash. This matches the native `QueryWatcher`,
/// which also re-runs `fetch()` and hashes every row per refresh (it is not
/// incremental either). `tool/watch_refresh_benchmark.dart` confirms both
/// paths scale linearly with identical constants (compiled ≈ 0.44×–1.08× of
/// native across 100–10k rows). If full-snapshot watches ever need to scale
/// past that, the shared future work is incremental id-based invalidation,
/// not a web-only change.
class _CompiledWatcher {
  final LocalPocket _pocket;
  final CollectionSchema _schema;
  final String _sql;
  final List<Object?> _params;
  final List<String>? _projection;
  final List<String>? _decodeColumns;
  final void Function(List<Map<String, Object?>> items) _emit;
  final Duration coalesceWindow = const Duration(milliseconds: 16);

  StreamSubscription<ChangeSet>? _sub;
  Timer? _timer;
  bool _running = false;
  bool _dirty = false;
  String? _digest;

  _CompiledWatcher(this._pocket, this._schema, this._sql, this._params,
      this._projection, this._decodeColumns, this._emit);

  void start() {
    _sub = _pocket.changes.listen(_onChange);
  }

  Future<List<Map<String, Object?>>> initial() async {
    final items = await _run();
    _digest = _digestOf(items);
    return items;
  }

  void _onChange(ChangeSet cs) {
    if (cs.store != _schema.name) return;
    if (_running) {
      _dirty = true;
      return;
    }
    _timer?.cancel();
    _timer = Timer(coalesceWindow, _refresh);
  }

  Future<void> _refresh() async {
    _running = true;
    _pocket.perf.watchRefreshes++;
    try {
      final items = await _run();
      final digest = _digestOf(items);
      if (digest != _digest) {
        _digest = digest;
        _pocket.perf.watchEmissions++;
        _emit(items);
      }
    } catch (_) {
      // A failed refresh must not kill the watcher; the next change retries.
    } finally {
      _running = false;
      if (_dirty) {
        _dirty = false;
        _timer?.cancel();
        _timer = Timer(coalesceWindow, _refresh);
      }
    }
  }

  Future<List<Map<String, Object?>>> _run() async {
    final rows = await _pocket.traceQuery(_sql, _params);
    final columns = _decodeColumns;
    final decoded = columns != null
        ? decodeDbRowsProjected(_schema, rows,
            columns: columns,
            cipher: _pocket.fieldCipher,
            cryptoProvider: _pocket.cryptoProvider)
        : decodeDbRows(_schema, rows,
            cipher: _pocket.fieldCipher,
            cryptoProvider: _pocket.cryptoProvider);
    final projection = _projection;
    if (projection == null) return decoded;
    return [
      for (final row in decoded)
        {
          for (final k in projection)
            if (row.containsKey(k)) k: row[k]
        }
    ];
  }

  String _digestOf(List<Map<String, Object?>> items) {
    final parts = <String>[];
    for (final r in items) {
      parts.add(canonicalize(r));
    }
    final joined = parts.join('|');
    _pocket.perf.watchDigestBytes += joined.length;
    return sha256Hex(joined);
  }

  void dispose() {
    _timer?.cancel();
    _sub?.cancel();
  }
}
