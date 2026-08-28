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

import '../core/capabilities.dart';
import '../core/database_adapter.dart';
import '../core/errors.dart';
import '../core/local_pocket.dart';
import '../core/schema.dart';
import '../files/web_blob_store.dart';
import 'cipher_bridge.dart';
import 'open_options.dart';
import 'protocol.dart';
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

    // Wire the destructive-migration backup file hooks to OPFS. sqlite3_web
    // persists each database under `drift_db/<name>` in OPFS; VACUUM INTO
    // writes the `.bak` next to the database in that same directory. The
    // `backupDbName` option carries the original DB name from the facade (the
    // in-worker path here is the fixed `/database`).
    final backupDbName =
        (rawOpenOption(additionalData?.dartify(), 'backupDbName') as String?) ??
            path;
    db.backupFileExists =
        (backupPath) => _opfsFileExists(backupDbName, backupPath);
    db.backupFileDeleter =
        (backupPath) => _removeOpfsFile(backupDbName, backupPath);

    try {
      // Assert journal mode TRUNCATE immediately after open per §6.8.
      rawDb.execute('PRAGMA journal_mode=TRUNCATE');
      final mode = rawDb.select('PRAGMA journal_mode').first.columnAt(0);
      if (mode.toString().toLowerCase() != 'truncate') {
        throw StateError('journal_mode read-back was $mode, expected truncate');
      }
      // Parse options from additionalData (pure-Dart parser in
      // `open_options.dart`).
      final options = parseOpenOptions(additionalData?.dartify());
      final stores = (options['stores'] as List<CollectionSchema>?) ?? [];
      final maxDocBytes = (options['maxDocBytes'] as int?) ?? 1900000;
      final destructiveBackup = (options['destructiveBackup'] as bool?) ?? true;

      // Field cipher bridge: reconstruct the engine cipher from the serialized
      // envelope. Parsing is intentionally OUTSIDE `parseOpenOptions`, which
      // swallows malformed options — a malformed cipher envelope must fail
      // loudly, never be silently dropped.
      final fieldCipher = parseFieldCipherEnvelope(
          rawOpenOption(additionalData?.dartify(), 'fieldCipher'));

      // Reject encrypted stores opened without a cipher at open time. A web
      // open must never silently produce stores that cannot be written.
      if (hasEncryptedFieldsWithoutCipher(stores, fieldCipher)) {
        throw ValidationException(
            'Store declares encrypted fields but no fieldCipher was provided.');
      }

      // Worker-owned blob store backs LocalPocket.files + the sync file lane.
      // OPFS access uses @JS('navigator') (no window dependency), so it is
      // safe inside this dedicated worker; it degrades to an in-memory store
      // when OPFS is unavailable.
      final blobStore = WebBlobStore();

      // Boot the LocalPocket engine around this DirectSqliteDatabase.
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
      handedToPocket = true;

      return LocalPocketWorkerDatabase(
        rawDatabase: rawDb,
        databaseAdapter: db,
        pocket: pocket,
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
/// This class is the thin JS boundary over the pure-Dart [WorkerEngine]:
/// it converts the incoming `JSAny` payload to a Dart map, forwards worker
/// events to the owning [ClientConnection], and converts the engine's
/// [WorkerReply] back into a wire [WebResponse]. All request handling lives
/// in `worker_engine.dart` so it is unit-testable on the VM against a real
/// in-memory engine.
/// {@endtemplate}
final class LocalPocketWorkerDatabase extends WorkerDatabase {
  /// Creates a worker database around an initialized [LocalPocket] engine.
  ///
  /// {@macro localpocket.local_pocket_worker_database}
  LocalPocketWorkerDatabase({
    required this.rawDatabase,
    required this.databaseAdapter,
    required this.pocket,
  }) : _engine = WorkerEngine(
          rawDatabase: rawDatabase,
          databaseAdapter: databaseAdapter,
          pocket: pocket,
        );

  /// The underlying SQLite database exposed to the worker runtime.
  final CommonDatabase rawDatabase;

  /// The database adapter used by the [LocalPocket] engine.
  final DirectSqliteDatabase databaseAdapter;

  /// The local database engine hosted by this worker database.
  final LocalPocket pocket;

  final WorkerEngine _engine;

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

    final reply =
        await _engine.handleRequest(_ConnectionSink(connection), dartMap);
    return _encodeReply(reply);
  }

  static Map<String, Object?>? _dartifyPayload(JSAny payload) {
    try {
      final d = payload.dartify();
      if (d is Map) {
        // Recursively stringify ALL map keys (nested maps and lists of maps
        // included). dartify() preserves JS object key types as Object?, so
        // without this the worker's `Map<String, Object?>` casts (e.g. the
        // `mutations` list in mutate_batch) throw on dart2js. Mirrors the
        // deepStringMap used by parseSchema/open_options.
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
final class _ConnectionSink implements WorkerEventSink {
  /// {@macro localpocket.__connection_sink}
  _ConnectionSink(this.connection);

  final ClientConnection connection;

  @override
  void emit(Map<String, Object?> event) {
    unawaited(connection.customRequest(event.jsify()));
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
