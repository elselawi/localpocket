import 'dart:async';

import 'package:localpocket/localpocket.dart';
import 'package:localpocket/src/contract/contract.dart' as contract;
import 'package:localpocket/src/runtime/remote_runtime_client.dart';
import 'package:localpocket/src/web/conversions.dart';
import 'package:localpocket/src/web/protocol.dart';
import 'package:localpocket/src/web/worker_engine.dart';
import 'package:sqlite3/sqlite3.dart' as sqlite;
import 'package:test/test.dart';

import '../../support/helpers.dart';

/// Recording [WorkerEventSink]: captures every worker→client event the engine
/// emits (record events, watcher snapshots, sync status, auth required) so
/// tests can assert on them.
class RecordingSink implements WorkerEventSink {
  final List<Map<String, Object?>> events = [];

  @override
  void emit(Map<String, Object?> event) => events.add(event);

  /// Events with the given [op], in arrival order.
  List<Map<String, Object?>> byOp(String op) =>
      events.where((e) => e['op'] == op).toList();

  /// Clears recorded events (e.g. between phases of one test).
  void clear() => events.clear();
}

/// A unit-level worker harness: a real [WorkerEngine] driven through
/// [WorkerEngine.handleRequest] with a real in-memory SQLite engine.
///
/// This is the VM analog of the browser smokes — every wire envelope crosses
/// the same parse → dispatch → handler → reply path the worker runs, but
/// without `dart:js_interop`, so it runs under `dart test`.
class WorkerHarness {
  WorkerHarness._({
    required this.rawDb,
    required this.pocket,
    required this.engine,
    required this.sink,
  });

  /// The native in-memory database the engine executes against.
  final sqlite.Database rawDb;

  /// The LocalPocket engine (same construction the worker `openDatabase`
  /// performs, minus the web-only blob store / wasm specifics).
  final LocalPocket pocket;

  /// The request-execution core under test.
  final WorkerEngine engine;

  /// The sink the engine emits worker→client events through.
  final RecordingSink sink;

  int _counter = 0;

  /// Opens a harness with the canonical `widgets` schema (or [stores]) and an
  /// in-memory blob store. [path] backs the engine with a real database file
  /// instead of an in-memory one; [sink] replaces the default recording sink
  /// (a subclass may forward events elsewhere while keeping the recording
  /// behavior).
  static Future<WorkerHarness> open({
    List<CollectionSchema>? stores,
    BlobStore? blobStore,
    FieldCipher? fieldCipher,
    int Function()? now,
    TestHooks? testHooks,
    int maxDocBytes = 1900000,
    PlatformProfile platform = PlatformProfile.native,
    String path = ':memory:',
    RecordingSink? sink,
  }) async {
    final rawDb = path == ':memory:'
        ? sqlite.sqlite3.openInMemory()
        : sqlite.sqlite3.open(path);
    final adapter = DirectSqliteDatabase(rawDb);
    final pocket = await LocalPocket.open(
      path: ':memory:',
      database: adapter,
      stores: stores ?? [widgetsSchema()],
      platform: platform,
      blobStore: blobStore ?? MemoryBlobStore(),
      fieldCipher: fieldCipher,
      now: now,
      testHooks: testHooks,
      maxDocBytes: maxDocBytes,
    );
    final engine = WorkerEngine(
      rawDatabase: rawDb,
      databaseAdapter: adapter,
      pocket: pocket,
    );
    return WorkerHarness._(
      rawDb: rawDb,
      pocket: pocket,
      engine: engine,
      sink: sink ?? RecordingSink(),
    );
  }

  /// Builds a request with the next request id.
  WebRequest req(String op, {Map<String, Object?> args = const {}}) =>
      WebRequest(
        version: webProtocolVersion,
        requestId: _counter++,
        op: op,
        args: args,
      );

  /// Feeds [request] through the full engine envelope path and returns the
  /// reply (success or error) — never throws.
  Future<WorkerReply> send(WebRequest request) =>
      engine.handleRequest(sink, request.toJson());

  /// Feeds a raw (possibly malformed) payload map straight through the engine
  /// envelope path — mirrors the worker's `_dartifyPayload` output.
  Future<WorkerReply> sendRaw(Map<String, Object?> payload) =>
      engine.handleRequest(sink, payload);

  /// Sends and asserts the request succeeds, returning the decoded result.
  Future<Object?> sendOk(WebRequest request) async {
    final reply = await send(request);
    expect(reply, isA<WorkerSuccess>(),
        reason: 'Expected success for ${request.op}, got $reply');
    return (reply as WorkerSuccess).result;
  }

  /// Sends and asserts the request fails with [code] (default any error),
  /// returning the [WorkerError] for further assertion.
  Future<WorkerError> sendError(WebRequest request, {String? code}) async {
    final reply = await send(request);
    expect(reply, isA<WorkerError>(),
        reason: 'Expected error for ${request.op}, got $reply');
    final err = reply as WorkerError;
    if (code != null) {
      expect(err.code, code,
          reason: 'Expected wire error code $code, got ${err.code} '
              '(${err.message})');
    }
    return err;
  }

  /// Convenience: a single put through a contract mutate request (the same
  /// envelope the facade's CRUD surface sends).
  Future<void> put(
    String store,
    Map<String, Object?> record, {
    String? id,
  }) async {
    final full = {...record, if (id != null) 'id': id};
    await runtime.send(contract.MutateRequest(
      store: store,
      mutation: contract.MutationPut(full),
    ));
  }

  /// Convenience: fetch a single record through a contract get request.
  Future<Map<String, Object?>?> get(String store, String id) async =>
      (await runtime.send(contract.GetRequest(store: store, id: id))).row;

  /// The typed contract runtime over [customRequest] — the same binding the
  /// page-side facade creates over its worker transport.
  late final RemoteRuntimeClient runtime = RemoteRuntimeClient(
    transport: customRequest,
  );

  /// Feeds one wire envelope through the JS boundary's exact path: parse →
  /// dispatch → reply → response envelope. This is the transport a page-side
  /// remote runtime binds to; the returned map is what `jsify()` would hand
  /// to `Database.customRequest` in the browser.
  Future<Object?> customRequest(Map<String, Object?> envelope) async {
    final reply = await engine.handleRequest(sink, envelope);
    if (reply is WorkerSuccess) {
      return WebResponse.success(
        version: webProtocolVersion,
        requestId: reply.requestId,
        result: reply.result,
      ).toJson();
    }
    final err = reply as WorkerError;
    return WebResponse.error(
      version: webProtocolVersion,
      requestId: err.requestId,
      error: WebError(
        code: err.code,
        message: err.message,
        details: err.details,
      ),
    ).toJson();
  }

  /// Sends the close request and returns the reply.
  Future<WorkerReply> close() async {
    final reply = await send(req(WireOp.close));
    return reply;
  }
}
