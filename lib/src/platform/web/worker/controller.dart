import 'dart:async';
import 'dart:js_interop';

import 'package:path/path.dart' as p;
import 'package:sqlite3/common.dart';
// ignore: implementation_imports
import 'package:sqlite3/src/wasm/js_interop/new_file_system_access.dart';
// ignore: implementation_imports
import 'package:sqlite3/src/wasm/sqlite3.dart';
import 'package:sqlite3_web/sqlite3_web.dart';
import 'package:web/web.dart' show FileSystemDirectoryHandle;

import '../../../kernel/capabilities.dart';
import '../../../kernel/database_adapter.dart';
import '../../../kernel/errors.dart';
import '../../../kernel/local_pocket.dart';
import '../../../kernel/kernel_context.dart' show defaultTxSessionTtl;
import '../../../kernel/page_callbacks.dart' show attachStorePolicy;
import '../../../kernel/schema.dart';
import 'blob_store.dart';
import '../../../adapters/pocketbase/backend.dart'
    show PocketBaseSyncBackendFactory;
import '../crypto.dart';
import 'open_options.dart'
    show hasEncryptedFieldsWithoutCipher, parseOpenOptions, rawOpenOption;
import '../page/protocol.dart';
import 'worker_engine.dart';

/// {@template localpocket.local_pocket_database_controller}
/// Database controller that opens the SQLite connection in the dedicated worker
/// and boots the existing [LocalPocket] engine around it.
/// {@endtemplate}
final class LocalPocketDatabaseController extends DatabaseController {
  /// Creates the web database controller.
  ///
  /// {@macro localpocket.local_pocket_database_controller}
  const LocalPocketDatabaseController();

  @override
  Future<JSAny?> handleCustomRequest(
    ClientConnection connection,
    CustomClientRequest request,
  ) async =>
      {'kind': 'ready'}.jsify();

  @override
  Future<WorkerDatabase> openDatabase(
    WasmSqlite3 sqlite3,
    String path,
    String vfs,
    JSAny? additionalData,
  ) async {
    final rawDb = sqlite3.open(path, vfs: vfs);
    final db = DirectSqliteDatabase(rawDb);
    var handedToPocket = false;

    try {
      // Whole-db encryption is NATIVE-ONLY: the page never sends a key
      // envelope; if one were present it would be a code reality mismatch
      // (the facade rejects databaseEncryption before reaching the worker),
      // so nothing is applied here. See the OPFS VFS limitation in the
      // DatabaseEncryptionConfig docs.

      // Wire OPFS backup hooks (destructive migrations). sqlite3_web
      // persists each database under `drift_db/<name>`; VACUUM INTO writes
      // the `.bak` there. `backupDbName` carries the original DB name (the
      // in-worker path is the fixed `/database`). Validated INSIDE the
      // cleanup try so a malformed name still closes the raw handle in the
      // catch below instead of leaking a pinned OPFS database.
      final rawBackupDbName =
          rawOpenOption(additionalData?.dartify(), 'backupDbName');
      if (rawBackupDbName != null && rawBackupDbName is! String) {
        throw ProtocolEnvelopeException('"backupDbName" must be a string.');
      }
      final backupDbName = rawBackupDbName as String? ?? path;
      db.backupFileExists =
          (backupPath) => _opfsFileExists(backupDbName, backupPath);
      db.backupFileDeleter =
          (backupPath) => _removeOpfsFile(backupDbName, backupPath);

      // Assert journal mode TRUNCATE immediately after open.
      rawDb.execute('PRAGMA journal_mode=TRUNCATE');
      final mode = rawDb.select('PRAGMA journal_mode').first.columnAt(0);
      if (mode.toString().toLowerCase() != 'truncate') {
        throw StateError('journal_mode read-back was $mode, expected truncate');
      }
      // Parse options (pure-Dart parser in `open_options.dart`).
      final options = parseOpenOptions(additionalData?.dartify());
      final stores = (options['stores'] as List<CollectionSchema>?) ?? [];
      final maxDocBytes = (options['maxDocBytes'] as int?) ?? 1900000;
      final destructiveBackup = (options['destructiveBackup'] as bool?) ?? true;
      final storePolicies =
          options['storePolicies'] as Map<String, Object?>? ?? const {};
      // Durability and callback tuning cross as millisecond ints. Absent
      // keys fall back to the kernel defaults; present keys were already
      // strict-validated by `parseOpenOptions`.
      final groupCommitWindowMs = options['groupCommitWindowMs'] as int?;
      final txSessionTtlMs = options['txSessionTtlMs'] as int?;
      final callbackTimeoutMs = options['callbackTimeoutMs'] as int?;
      final clockOffsetMs = options['clockOffsetMs'] as int?;

      // The page-callback bridge: executable schema features (conflict
      // resolvers, validators, migration hooks) round-trip to the page
      // through it; the schemas must attach their channel-backed members
      // before the engine boots so manifest fingerprints match the page's.
      // The timeout mirrors the page→worker request bound when provided.
      final callbackBridge = WorkerCallbackBridge(
        timeout: callbackTimeoutMs == null
            ? pageCallbackTimeout
            : Duration(milliseconds: callbackTimeoutMs),
      );
      final attachedStores = [
        for (final s in stores)
          attachStorePolicy(
            s,
            storePolicies[s.name],
            invoker: callbackBridge,
          ),
      ];

      // Cipher parsing is intentionally OUTSIDE `parseOpenOptions`, which
      // validates open-option keys individually — the cipher envelope has
      // its own structure and must fail loudly on malformed values, never
      // be silently dropped.
      final fieldCipher = parseFieldCipherEnvelope(
          rawOpenOption(additionalData?.dartify(), 'fieldCipher'));

      // A web open must never silently produce stores that cannot be written.
      if (hasEncryptedFieldsWithoutCipher(stores, fieldCipher)) {
        throw ValidationException(
            'Store declares encrypted fields but no fieldCipher was provided.');
      }

      // Worker-owned blob store backs LocalPocket.files + the sync file lane.
      // @JS('navigator') OPFS access is safe in a dedicated worker (no window
      // dependency); degrades to an in-memory store when OPFS is unavailable.
      final blobStore = WebBlobStore();

      // The PocketBase backend factory lets the kernel's sync start command
      // build its backend without importing the adapter here.
      final pocket = await LocalPocket.open(
        path: path,
        database: db,
        stores: attachedStores,
        platform: PlatformProfile.web,
        blobStore: blobStore,
        fieldCipher: fieldCipher,
        maxDocBytes: maxDocBytes,
        destructiveBackup: destructiveBackup,
        groupCommitWindow: groupCommitWindowMs == null
            ? Duration.zero
            : Duration(milliseconds: groupCommitWindowMs),
        txSessionTtl: txSessionTtlMs == null
            ? defaultTxSessionTtl
            : Duration(milliseconds: txSessionTtlMs),
        // The data-style clock shift: the worker applies the offset on top
        // of its system clock (the `now` closure itself cannot cross).
        now: clockOffsetMs == null || clockOffsetMs == 0
            ? null
            : () => DateTime.now().millisecondsSinceEpoch + clockOffsetMs,
        syncBackendFactory: const PocketBaseSyncBackendFactory(),
        callbackInvoker: callbackBridge,
      );
      handedToPocket = true;

      return LocalPocketWorkerDatabase(
        rawDatabase: rawDb,
        databaseAdapter: db,
        pocket: pocket,
        callbackBridge: callbackBridge,
      );
    } catch (_) {
      if (!handedToPocket) {
        rawDb.close();
      }
      rethrow;
    }
  }
}

/// {@template localpocket.local_pocket_worker_database}
/// The worker database wrapping [CommonDatabase] and hosting the full
/// [LocalPocket] engine.
///
/// Thin JS boundary over the pure-Dart [WorkerEngine]: converts the incoming
/// `JSAny` payload to a Dart map, forwards worker events to the owning
/// [ClientConnection], and encodes the engine's [WorkerReply] as a wire
/// [WebResponse]. All request handling lives in `worker_engine.dart` so it
/// is unit-testable on the VM.
/// {@endtemplate}
final class LocalPocketWorkerDatabase extends WorkerDatabase {
  /// Creates a worker database around an initialized [LocalPocket] engine.
  ///
  /// {@macro localpocket.local_pocket_worker_database}
  LocalPocketWorkerDatabase({
    required this.rawDatabase,
    required this.databaseAdapter,
    required this.pocket,
    required this.callbackBridge,
  }) : _engine = WorkerEngine(
          rawDatabase: rawDatabase,
          databaseAdapter: databaseAdapter,
          pocket: pocket,
          callbackBridge: callbackBridge,
        );

  /// The underlying SQLite database exposed to the worker runtime.
  final CommonDatabase rawDatabase;

  /// The database adapter used by the [LocalPocket] engine.
  final DirectSqliteDatabase databaseAdapter;

  /// The local database engine hosted by this worker database.
  final LocalPocket pocket;

  /// Routes kernel callback invocations to connected pages.
  final WorkerCallbackBridge callbackBridge;

  final WorkerEngine _engine;

  /// One sink per connection, keyed on sink identity, so each connection
  /// registers exactly once — a fresh sink per request would grow the set
  /// and deliver every event N times.
  final Map<ClientConnection, WorkerEventSink> _connectionSinks = {};

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

    WorkerEventSink sink;
    final existing = _connectionSinks[connection];
    if (existing != null) {
      sink = existing;
    } else {
      sink = _ConnectionSink(connection);
      _connectionSinks[connection] = sink;
      // When the owning tab/connection goes away, drop the sink from the
      // engine's broadcast set so dead connections stop receiving events
      // and the registries cannot grow without bound.
      unawaited(connection.closed.then((_) {
        _connectionSinks.remove(connection);
        _engine.removeSink(sink);
      }));
    }
    final reply = await _engine.handleRequest(sink, dartMap);
    return _encodeReply(reply);
  }

  static Map<String, Object?>? _dartifyPayload(JSAny payload) {
    try {
      final d = payload.dartify();
      if (d is Map) {
        // Recursively stringify ALL map keys: dartify() preserves JS key
        // types as Object?, so without this the worker's Map<String, Object?>
        // casts (e.g. `mutations` in mutate_batch) throw on dart2js. Mirrors
        // the deepStringMap used by parseSchema/open_options.
        return deepStringMap(d);
      }
    } catch (_) {}
    return null;
  }

  static JSAny? _encodeReply(WorkerReply reply) {
    if (reply is WorkerSuccess) {
      final response = WebResponse.success(
        version: webProtocolVersion,
        requestId: reply.requestId,
        result: reply.result,
      );
      return response.toJson().jsify();
    }
    final err = reply as WorkerError;
    return _encodeError(err.requestId, err.code, err.message, err.details);
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
}

/// {@template localpocket.__connection_sink}
/// Adapts a [ClientConnection] (JS-interop) to the pure-Dart
/// [WorkerEventSink] the engine emits through.
/// {@endtemplate}
final class _ConnectionSink implements WorkerEventSink, WorkerCallbackChannel {
  /// {@macro localpocket.__connection_sink}
  _ConnectionSink(this.connection);

  /// Maximum in-flight worker→page event deliveries per connection. Above
  /// this the sink drops new events so a blocked tab or a busy session can
  /// never grow the postMessage queue without bound. Watch snapshots are
  /// latest-wins (a superseded drop is fine — the next refresh carries the
  /// current state); sync status streams tolerate loss by design.
  static const int _maxInFlight = 128;

  final ClientConnection connection;
  int _inFlight = 0;

  @override
  void emit(Map<String, Object?> event) {
    if (_inFlight >= _maxInFlight) return;
    _inFlight++;
    // Delivery is best-effort: a connection that closed mid-flight must not
    // surface an unhandled async error inside the worker.
    unawaited(connection.customRequest(event.jsify()).then<void>((_) {
      _inFlight--;
    }, onError: (_) {
      _inFlight--;
    }));
  }

  @override
  Future<Object?> call(Map<String, Object?> message) async {
    final raw = await connection.customRequest(message.jsify());
    return raw?.dartify();
  }
}

/// Resolves the OPFS directory that hosts this database's files. sqlite3_web
/// persists each database under `drift_db/<name>` in the origin-private
/// storage; the destructive-migration `.bak` (written by `VACUUM INTO`) lives
/// in that same directory. Returns null when OPFS is unavailable.
Future<FileSystemDirectoryHandle?> _opfsDatabaseDir(String dbName) async {
  final storage = storageManager;
  if (storage == null) return null;
  try {
    var dir = await storage.directory;
    for (final segment in [...p.split('drift_db'), ...p.split(dbName)]) {
      if (segment.isEmpty) continue;
      dir = await dir.getDirectory(segment);
    }
    return dir;
  } catch (_) {
    return null;
  }
}

/// Reports whether the destructive-migration backup file at [backupPath]
/// exists in OPFS (best-effort; false when OPFS is unavailable).
Future<bool> _opfsFileExists(String dbName, String backupPath) async {
  final dir = await _opfsDatabaseDir(dbName);
  if (dir == null) return false;
  try {
    await dir.openFile(p.basename(backupPath));
    return true;
  } catch (_) {
    return false;
  }
}

/// Removes the destructive-migration backup file at [backupPath] from OPFS
/// (best-effort no-op when OPFS is unavailable or the entry is missing).
Future<void> _removeOpfsFile(String dbName, String backupPath) async {
  final dir = await _opfsDatabaseDir(dbName);
  if (dir == null) return;
  try {
    await dir.remove(p.basename(backupPath));
  } catch (_) {
    // Entry missing or OPFS unavailable — nothing to remove.
  }
}
