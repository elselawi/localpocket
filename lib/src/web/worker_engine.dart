/// The engine worker's request-execution core: a small typed-envelope loop.
///
/// The worker parses the wire envelope, dispatches it (the `open` handshake
/// or one typed contract request through the kernel's own command handler),
/// and replies; every kernel event broadcasts as a `contract_event`
/// envelope. This library is pure Dart (no `dart:js_interop`, no `dart:io`)
/// so it is unit-testable on the VM with a real in-memory engine, which the
/// browser smokes under `tool/web_smoke` cannot provide (`dart test` vs
/// Playwright).
///
/// The JS boundary stays in `controller.dart`: `LocalPocketWorkerDatabase`
/// converts the incoming `JSAny` payload to a Dart map, calls
/// [WorkerEngine.handleRequest], and converts the resulting [WorkerReply]
/// back to `JSAny`. Worker→client events (committed facts, watch snapshots,
/// conflict snapshots, file chunks, sync status, auth required) flow through
/// [WorkerEventSink], which the controller adapts to
/// `ClientConnection.customRequest`.
///
/// ## File organization
///
/// - `worker_engine.dart` (this file) — the [WorkerEngineHost] base plus
///   [WorkerEngine], the public entry point with the envelope parse, dispatch
///   table, and per-op routing.
/// - `worker_engine_crud.dart` — store registration (`open`).
///
/// Everything else travels as typed contract requests: reads, writes,
/// transaction sessions, watches, maintenance, capabilities, conflicts,
/// files, sync, auth, and close are answered by the kernel command handler —
/// the same handler the direct runtime calls, with no worker-side
/// reinterpretation and no worker-owned feature state.
library;

import 'dart:async';

import 'package:sqlite3/common.dart';

import '../contract/contract.dart' as contract;
import '../kernel/database_adapter.dart';
import '../kernel/errors.dart';
import '../kernel/local_pocket.dart';
import '../kernel/schema_manifest.dart';
import '../kernel/schema.dart';
import 'protocol.dart';
import 'wire_args.dart';

part 'worker_engine_crud.dart';

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
/// Shared engine state (library-internal base).
///
/// Holds the real [LocalPocket] engine, the set of connected event sinks,
/// and the contract-event broadcast subscription. Every feature surface
/// (sync, files, conflicts, transactions, watches) is kernel-owned: the
/// worker holds no feature state of its own.
///
/// [WorkerEngine] extends this class; the `open` handshake lives in the
/// `worker_engine_crud.dart` part (`on WorkerEngineHost`, same library).
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

  final Set<WorkerEventSink> _connections = {};

  /// Broadcasts every kernel event to the connected sinks. The subscription
  /// lives for the whole worker and completes when the kernel's event stream
  /// closes (the kernel close).
  // ignore: cancel_subscriptions
  StreamSubscription<contract.Event>? _contractEventSubscription;

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
}

/// {@template localpocket.worker_engine}
/// The engine worker's small envelope loop.
///
/// Parse the wire envelope → dispatch (`open` handshake or one typed
/// contract request through the kernel's own command handler) → reply, and
/// broadcast every kernel event as a `contract_event` envelope. There is no
/// worker-side reinterpretation, no worker-owned feature state, and no
/// worker-owned close: closing the runtime is the kernel's `CloseRequest`,
/// identical on the direct, loopback, and remote paths.
/// {@endtemplate}
final class WorkerEngine extends WorkerEngineHost with WorkerCrudHandlers {
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
  /// the browser worker runs. [sink] is registered for contract-event
  /// broadcast (idempotent per connection) and receives watcher/sync/conflicts
  /// events.
  Future<WorkerReply> handleRequest(
    WorkerEventSink sink,
    Map<String, Object?> payload,
  ) async {
    _connections.add(sink);
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
    WireOp.open: _handleOpen,
    WireOp.contractRequest: _handleContract,
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
