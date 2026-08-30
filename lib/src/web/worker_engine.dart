/// Pure-Dart request-execution core for the engine-in-worker web stack.
///
/// Everything the worker does with a `WebRequest` — CRUD, compiled-plan
/// execution, transactions, watches, sync, files, conflicts, close — lives
/// here against a real `LocalPocket` engine. This library is pure Dart (no
/// `dart:js_interop`, no `dart:io`) so it is unit-testable on the VM with a
/// real in-memory engine, which the browser smokes under `tool/web_smoke`
/// cannot provide (`dart test` vs Playwright).
///
/// The JS boundary stays in `controller.dart`: `LocalPocketWorkerDatabase`
/// converts the incoming `JSAny` payload to a Dart map, calls
/// [WorkerEngine.handleRequest], and converts the resulting [WorkerReply]
/// back to `JSAny`. Worker→client events (record events, watcher snapshots,
/// sync status, auth required) flow through [WorkerEventSink], which the
/// controller adapts to `ClientConnection.customRequest`.
///
/// ## File organization
///
/// This one library is split across `part` files so each wire feature area
/// stays navigable while [WorkerEngine] remains the only public type (tests
/// import only this file). The engine is a [WorkerEngineHost] base (state +
/// cross-area helpers) plus area handler mixins declared in the parts:
///
/// - `worker_engine.dart` (this file) — the [WorkerEngineHost] base: the
///   engine, all worker-owned session state, the compiled-query core shared
///   by reads and watches, cross-cutting teardown (`close`, `stopSync`), and
///   the shared helpers that two or more areas depend on; plus
///   [WorkerEngine], the public entry point with the envelope parse,
///   dispatch table, and per-op routing.
/// - `worker_engine_crud.dart` — store registration (`open`).
/// - `worker_engine_maintenance.dart` — health/capabilities + maintenance.
/// - `worker_engine_tx.dart` — interactive transaction sessions.
/// - `worker_engine_watch.dart` — single-record watchers (`watch_one`).
/// - `worker_engine_sync.dart` — sync engine lifecycle + auth.
/// - `worker_engine_files.dart` — chunked upload + file metadata RPCs.
/// - `worker_engine_conflicts.dart` — conflict inspection + resolution.
///
/// ## DRY rule (anti-drift)
///
/// Any helper used by two or more areas lives on [WorkerEngineHost] — never
/// copied into a mixin: `_applyMutation` (`tx_mutate_batch`),
/// `_emitWorkerEvent` (`watch_one`/`conflicts_watch`), `_requireSession`
/// (every `tx_*` handler + compiled-query tx reads), `_parseCompiledPlan`
/// (`compiled_query`), and `_stopSync` (sync handlers + `close`). The mixins
/// are `on WorkerEngineHost` and share one library with it, so they access
/// its private state directly with zero plumbing. Keeping each shared wire
/// contract in exactly one place is what stops the areas from drifting apart.
library;

import 'dart:async';
import 'dart:typed_data';

import 'package:sqlite3/common.dart';

import '../contract/contract.dart' as contract;
import '../core/change_bus.dart';
import '../core/database_adapter.dart';
import '../core/errors.dart';
import '../core/hashing.dart';
import '../core/canonical_json.dart';
import '../core/local_pocket.dart';
import '../core/query_plan.dart';
import '../core/schema_manifest.dart';
import '../core/schema.dart';
import '../core/store.dart';
import '../core/watch.dart';
import '../files/files_api.dart' show FileRef;
import '../pocketbase/auth.dart';
import '../pocketbase/backend.dart';
import '../sync/engine.dart';
import '../sync/status.dart';
import '../core/transaction.dart';
import 'conflicts_bridge.dart';
import 'conversions.dart';
import 'lifecycle.dart';
import 'protocol.dart';
import 'sync_status_codec.dart';
import 'wire_args.dart';

part 'worker_engine_conflicts.dart';
part 'worker_engine_crud.dart';
part 'worker_engine_files.dart';
part 'worker_engine_maintenance.dart';
part 'worker_engine_sync.dart';
part 'worker_engine_tx.dart';
part 'worker_engine_watch.dart';

/// Sink for worker→client events.
///
/// The engine never references `ClientConnection` (a JS-interop type); the
/// worker adapter (`controller.dart`) supplies a sink that forwards each event
/// to the owning connection, and VM tests supply a recording sink.
abstract interface class WorkerEventSink {
  /// Delivers a structured-clone-safe event envelope to the client.
  void emit(Map<String, Object?> event);
}

/// {@template localpocket.worker_reply}
/// Outcome of handling one worker request envelope.
/// {@endtemplate}
sealed class WorkerReply {
  /// Creates a reply for [requestId].
  ///
  /// {@macro localpocket.worker_reply}
  const WorkerReply(this.requestId);

  /// The request identifier from the incoming envelope.
  final int requestId;
}

/// {@template localpocket.worker_success}
/// The request completed; [result] is the structured-clone-safe success value.
/// {@endtemplate}
final class WorkerSuccess extends WorkerReply {
  /// Creates a successful reply.
  ///
  /// {@macro localpocket.worker_success}
  const WorkerSuccess(super.requestId, this.result);

  /// The structured-clone-safe success value.
  final Object? result;
}

/// {@template localpocket.worker_error}
/// The request failed; [code]/[message]/[details] mirror [WebError].
/// {@endtemplate}
final class WorkerError extends WorkerReply {
  /// Creates a failed reply.
  ///
  /// {@macro localpocket.worker_error}
  const WorkerError(
    super.requestId,
    this.code,
    this.message, [
    this.details,
  ]);

  /// The wire error code.
  final String code;

  /// The human-readable error message.
  final String message;

  /// Optional structured error details.
  final Map<String, Object?>? details;
}

/// Parses a raw schema map into a typed [CollectionSchema].
///
/// Shared by the worker open path (`controller.dart`), the `open` wire
/// handler, and the web option parser (`open_options.dart`) so all use one
/// VM-testable parser.
CollectionSchema<Object?> parseSchema(Object? raw) {
  if (raw is! Map) {
    throw FormatException('Schema must be a map: $raw');
  }
  final rawMap = deepStringMap(raw);
  return CollectionSchema<Object?>.fromJson(rawMap);
}

/// Recursively stringifies map keys (and nested map keys) so an arbitrary
/// wire map can be indexed by String regardless of the JS-interop key type.
///
/// Shared by [parseSchema] and the web option parser (`open_options.dart`).
Map<String, Object?> deepStringMap(Map<Object?, Object?> raw) {
  final out = <String, Object?>{};
  raw.forEach((k, v) {
    final key = k.toString();
    if (v is Map) {
      out[key] = deepStringMap(v);
    } else if (v is List) {
      out[key] =
          v.map((item) => item is Map ? deepStringMap(item) : item).toList();
    } else {
      out[key] = v;
    }
  });
  return out;
}

/// {@template localpocket.worker_engine_host}
/// Shared engine state + cross-area helpers (library-internal base).
///
/// Holds the real [LocalPocket] engine, the worker-owned session state
/// (interactive transactions, watcher registrations, chunked upload sessions,
/// the sync engine), the compiled-query core shared by reads and watches,
/// cross-cutting teardown, and the shared helpers that two or more handler
/// areas depend on (see the library doc's DRY rule).
///
/// [WorkerEngine] extends this class and mixes in the area handler mixins
/// from the `part` files; those mixins are `on WorkerEngineHost`, so they can
/// touch this state directly (same library) without exposing any of it
/// through the public type.
/// {@endtemplate}
abstract class WorkerEngineHost {
  /// Creates a worker engine host backed by [pocket].
  ///
  /// {@macro localpocket.worker_engine_host}
  WorkerEngineHost({
    required this.rawDatabase,
    required this.databaseAdapter,
    required this.pocket,
  });

  /// The underlying SQLite database.
  final CommonDatabase rawDatabase;

  /// The adapter used by the LocalPocket engine.
  final DirectSqliteDatabase databaseAdapter;

  /// The LocalPocket engine served by this worker.
  final LocalPocket pocket;

  _TxSession? _activeSession;
  int _nextSessionId = 1;
  final Map<int, _ActiveWatcher> _watchers = {};
  final UploadSessionRegistry _uploadSessions = UploadSessionRegistry();
  Timer? _uploadExpiryTimer;
  int _nextUploadId = 1;
  SyncEngine? _syncEngine;
  _WebTokenProvider? _tokenProvider;
  StreamSubscription<SyncStatus>? _syncStatusSubscription;
  SyncStatus? _lastSyncStatus;
  final Set<WorkerEventSink> _connections = {};
  StreamSubscription<RecordChangeEvent>? _eventSubscription;
  StreamSubscription<contract.Event>? _contractEventSubscription;

  // ------------------------------------------------------- compiled-query --

  /// The single read operation: an engine-compiled query plan (SQL + bound
  /// args + schema fingerprint). Every query, aggregate, search, and
  /// transaction read travels as this envelope.
  ///
  /// Kept on the base (not in a part) because `watch_query` shares the plan
  /// parser and executor — the read path must be identical for on-demand
  /// fetches and watcher refreshes.
  Future<Object?> _handleCompiledQuery(
          WorkerEventSink sink, WebRequest req) async =>
      _dispatchCompiledQuery(req.args);

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
    // EVERY field the page sends must survive the
    // temporary compiled-plan bridge. `decodeColumns` drives the
    // projection-aware decoder in the runner/watcher; dropping it silently
    // disabled projected decoding on web.
    final decodeColumnsRaw = args['decodeColumns'];
    final typeName = type! as String;
    return QueryPlan(
      typeName: typeName,
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
      decodeColumns:
          decodeColumnsRaw is List ? decodeColumnsRaw.cast<String>() : null,
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
    // The worker reaches the SAME kernel read
    // service native uses — plan execution cannot drift between platforms.
    return pocket.reads.executeCompiled(plan, run: run, pageLimit: pageLimit);
  }

  // ------------------------------------------------------ cross-cutting --

  /// Shuts the whole worker down: stops sync, cancels every watcher, clears
  /// upload sessions, fails an in-flight transaction session, unsubscribes
  /// from the change bus, and closes the engine.
  ///
  /// Lives on the base (not in any area part) because teardown must reach
  /// into every area's state; keeping it in one place guarantees a single
  /// shutdown order that `close` and worker teardown can rely on.
  Future<Object?> _handleClose(WorkerEventSink sink, WebRequest req) async {
    await _stopSync();
    for (final w in _watchers.values) {
      await w.cancel();
    }
    _watchers.clear();
    _uploadExpiryTimer?.cancel();
    _uploadExpiryTimer = null;
    _uploadSessions.clear();
    if (_activeSession != null && !_activeSession!.completer.isCompleted) {
      _activeSession!.completer
          .completeError(DatabaseWorkerClosedException('Database closed.'));
    }
    _activeSession = null;
    await _eventSubscription?.cancel();
    _eventSubscription = null;
    await _contractEventSubscription?.cancel();
    _contractEventSubscription = null;
    _connections.clear();
    await pocket.close();
    return {'ok': true};
  }

  // --------------------------------------------------- typed contract wire --

  /// Answers one typed contract request through the kernel's own command
  /// handler — the same handler the direct runtime calls. There is no
  /// worker-side reinterpretation: payloads, results, and errors travel in
  /// the contract codec's wire form, so a remote send cannot drift from a
  /// native one.
  ///
  /// Application failures are returned inside the reply as a contract-encoded
  /// error so the caller reconstructs the typed kernel error; envelope-level
  /// failures (a malformed request payload) throw and fall through to the
  /// transport error framing.
  Future<Object?> _handleContract(WorkerEventSink sink, WebRequest req) async {
    final raw = req.args['request'];
    if (raw is! Map) {
      throw ProtocolEnvelopeException(
          'Contract envelope requires a "request" map.');
    }
    final request = contract.ContractCodec.decodeRequest(deepStringMap(raw));
    try {
      final result = await pocket.commands.handle(request);
      return {'result': contract.ContractCodec.encodeResult(result)};
    } catch (e) {
      return {'error': contract.encodeError(e)};
    }
  }

  /// Stops the active sync engine and its realtime connection, clearing the
  /// token bridge and cached status. Shared by `sync_start` (restart), every
  /// `sync_stop`, and `close` — one implementation, so sync teardown cannot
  /// drift between the sync handlers and shutdown.
  Future<void> _stopSync() async {
    final engine = _syncEngine;
    _syncEngine = null;
    await _syncStatusSubscription?.cancel();
    _syncStatusSubscription = null;
    if (engine != null) {
      final backend = engine.backend;
      await engine.stop();
      if (backend is PocketBaseRawBackend) {
        await backend.stopRealtime();
        backend.close();
      }
    }
    _tokenProvider = null;
    _lastSyncStatus = null;
  }

  // ------------------------------------------------------ shared helpers --

  /// Applies one wire mutation to [col].
  ///
  /// [m] is a single element of a `mutations` array: `action` plus the
  /// action's `id`/`record`. `tx_mutate_batch` is the only caller, so the
  /// action vocabulary stays in exactly one place. Unknown actions fail with a typed
  /// [ValidationException] — never a silent no-op. Malformed elements (a
  /// non-map, a non-string `action`/`id`, or a `record` that does not decode
  /// to a map) fail with a typed [ProtocolEnvelopeException] — never a raw
  /// cast error.
  Future<void> _applyMutation(Collection col, Object? m) async {
    if (m is! Map) {
      throw ProtocolEnvelopeException('Mutation element must be a map, got '
          '${m == null ? 'null' : m.runtimeType}.');
    }
    final w = WireArgs(m.map((k, v) => MapEntry(k.toString(), v)));
    final action = w.requireString('action');
    final id = w.optionalString('id');
    final rawRecord = m['record'];
    final Map<String, Object?>? record;
    if (rawRecord != null) {
      final decoded = decodeWireValue(rawRecord);
      if (decoded is! Map) {
        throw ProtocolEnvelopeException(
            'Mutation "record" must decode to a map, got '
            '${decoded.runtimeType}.');
      }
      record = decoded.map((k, v) => MapEntry(k.toString(), v));
    } else {
      record = null;
    }
    switch (action) {
      case 'put':
        await col.put(record!);
      case 'upsert':
        await col.upsert(record!);
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
  }

  /// Emits a worker→client `worker_event` snapshot envelope for [watchId].
  ///
  /// Shared by `watch_query`, `watch_one`, and `conflicts_watch` so the
  /// envelope shape (protocol version, op, watch id, encoded value) stays in
  /// one place.
  void _emitWorkerEvent(WorkerEventSink sink, int watchId, Object? value) {
    sink.emit({
      'v': webProtocolVersion,
      'op': WireOp.workerEvent,
      'watchId': watchId,
      'value': encodeWireValue(value),
    });
  }

  /// Resolves the single active transaction session, rejecting requests that
  /// target a missing or foreign session id with a [StateError]. Shared by
  /// every `tx_*` handler and the transaction-read path of compiled queries.
  _TxSession _requireSession(int? sessionId) {
    if (sessionId == null ||
        _activeSession == null ||
        _activeSession!.sessionId != sessionId) {
      throw StateError('No active transaction session matching ID $sessionId.');
    }
    return _activeSession!;
  }
}

/// {@template localpocket.worker_engine}
/// The full request-execution core of the engine worker.
///
/// This is the only public type of this library (tests and the JS boundary
/// import only this file). It extends [WorkerEngineHost] (state + shared
/// helpers) and mixes in the per-area handler mixins declared in the `part`
/// files listed in the library doc. This class owns the envelope
/// parse/version check ([handleRequest]) and the op → handler dispatch table
/// (`_handlers`), which need the complete method set assembled from every
/// mixin.
/// {@endtemplate}
final class WorkerEngine extends WorkerEngineHost
    with
        WorkerCrudHandlers,
        WorkerMaintenanceHandlers,
        WorkerTxHandlers,
        WorkerWatchHandlers,
        WorkerSyncHandlers,
        WorkerFilesHandlers,
        WorkerConflictsHandlers {
  /// Creates a worker request-execution engine.
  ///
  /// {@macro localpocket.worker_engine}
  WorkerEngine({
    required super.rawDatabase,
    required super.databaseAdapter,
    required super.pocket,
  });

  /// Handles one request envelope (the decoded wire payload) and returns the
  /// reply to encode on the wire.
  ///
  /// Envelope parsing, protocol-version checking, and typed error
  /// categorization all happen here so VM tests exercise the exact same path
  /// the browser worker runs. [sink] is registered for record-event broadcast
  /// (idempotent per connection) and receives watcher/sync/conflicts events.
  Future<WorkerReply> handleRequest(
    WorkerEventSink sink,
    Map<String, Object?> payload,
  ) async {
    _connections.add(sink);
    _eventSubscription ??= pocket.events.listen((event) {
      final envelope = <String, Object?>{
        'v': webProtocolVersion,
        'op': WireOp.recordEvent,
        'event': encodeWireValue(event.toJson()),
      };
      for (final conn in _connections) {
        conn.emit(envelope);
      }
    });
    _contractEventSubscription ??= pocket.commands.events.listen((event) {
      final envelope = <String, Object?>{
        'v': webProtocolVersion,
        'op': WireOp.contractEvent,
        'event': contract.ContractCodec.encodeEvent(event),
      };
      for (final conn in _connections) {
        conn.emit(envelope);
      }
    });

    final WebRequest req;
    try {
      req = WebRequest.fromJson(payload);
    } catch (e) {
      return WorkerError(
        0,
        WireErrorCode.protocolEnvelope,
        e.toString(),
      );
    }

    if (req.version != webProtocolVersion) {
      return WorkerError(
        req.requestId,
        WireErrorCode.protocolMismatch,
        'Version mismatch: expected $webProtocolVersion, got ${req.version}',
        {'expected': webProtocolVersion, 'actual': req.version},
      );
    }

    try {
      final result = await _dispatch(sink, req);
      return WorkerSuccess(req.requestId, result);
    } catch (e) {
      return WorkerError(
        req.requestId,
        WireErrorCode.localpocket,
        e.toString(),
        {'type': stableWireErrorType(e)},
      );
    }
  }

  late final Map<String, Future<Object?> Function(WorkerEventSink, WebRequest)>
      _handlers = {
    WireOp.health: _handleHealth,
    WireOp.capabilities: _handleCapabilities,
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
    WireOp.fileStorageStatus: _handleFileStorageStatus,
    WireOp.conflictsList: _handleConflictsList,
    WireOp.conflictsGet: _handleConflictsGet,
    WireOp.conflictsResolve: _handleConflictsResolve,
    WireOp.conflictsAcceptLocal: _handleConflictsAcceptLocal,
    WireOp.conflictsAcceptRemote: _handleConflictsAcceptRemote,
    WireOp.conflictsWatch: _handleConflictsWatch,
    WireOp.contractRequest: _handleContract,
    WireOp.close: _handleClose,
  };

  Future<Object?> _dispatch(
    WorkerEventSink sink,
    WebRequest req,
  ) async {
    final handler = _handlers[req.op];
    if (handler == null) {
      throw ProtocolEnvelopeException('Unhandled operation: ${req.op}');
    }
    return handler(sink, req);
  }
}
