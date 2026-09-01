import 'dart:async';

import 'package:localpocket/src/internal/raw_surface.dart';
import 'package:localpocket/src/contract/contract.dart' as contract;
import 'package:localpocket/src/runtime/remote_runtime_client.dart';
import 'package:localpocket/src/typed/registry.dart';
import 'package:localpocket/src/web/conversions.dart';
import 'package:localpocket/src/web/facade/facade_host.dart';
import 'package:localpocket/src/web/facade/web_contract_events.dart';
import 'package:localpocket/src/web/lifecycle.dart';
import 'package:localpocket/src/web/protocol.dart';

/// In-memory [WebFacadeHost] for driving the facade proxy classes on the VM.
///
/// Records every sent envelope, returns canned responses (either a fixed
/// per-op map or a per-call handler), and exposes the same worker-event
/// delivery path the production facade uses (via `handleWorkerEventEnvelope`),
/// so watch tests exercise the real decode/dispatch logic.
class FakeFacadeHost implements WebFacadeHost {
  FakeFacadeHost(this.schemas);

  final Map<String, CollectionSchema<Object?>> schemas;

  /// Every envelope sent through [send], in order: (op, args).
  final List<(String, Map<String, Object?>)> sent = [];

  /// Fixed per-op responses. A missing key makes [send] return null (which
  /// mirrors the worker's null result, e.g. a `get` of a missing record).
  final Map<String, Object?> responses = {};

  /// Per-call responder; when set it takes precedence over [responses].
  Future<Object?> Function(String op, Map<String, Object?> args)? onSend;

  @override
  final WatchSubscriptionTracker watchTracker = WatchSubscriptionTracker();
  @override
  final TypedStoreRegistry typedRegistry = TypedStoreRegistry();
  final ChangeBus changeBus = ChangeBus();

  final StreamController<Map<String, Object?>> syncStatusController =
      StreamController<Map<String, Object?>>.broadcast();
  final StreamController<void> authRequiredController =
      StreamController<void>.broadcast();

  /// Closes the fake host's streams and change bus.
  Future<void> close() async {
    changeBus.close();
    await Future.wait([
      syncStatusController.close(),
      authRequiredController.close(),
    ]);
  }

  @override
  int nextRequestId = 1000;

  /// The shared contract runtime over this fake's [send] — the same binding
  /// the production facade creates over its worker transport. Contract sends
  /// are recorded in [sent] like every other envelope, and the change bus is
  /// bound to the contract's committed-change stream exactly as the
  /// production facade binds it.
  @override
  late final RemoteRuntimeClient contractRuntime = _buildContractRuntime();

  RemoteRuntimeClient _buildContractRuntime() {
    final runtime = RemoteRuntimeClient(
      transport: (envelope) async => send(envelope['op']! as String,
          (envelope['a']! as Map).cast<String, Object?>()),
    );
    bindRecordEventStream(runtime: runtime, changeBus: changeBus);
    return runtime;
  }

  /// The wire-success envelope for a contract [result] — the shape the
  /// worker's contract handler returns inside a [WebResponse].
  static Map<String, Object?> contractReply(contract.Result result) => {
        'v': webProtocolVersion,
        'i': 0,
        'r': {
          'result': contract.ContractCodec.encodeResult(result),
        },
      };

  /// The wire-success envelope for a contract application [error] (the
  /// worker returns contract errors inside a SUCCESS reply).
  static Map<String, Object?> contractErrorReply(Object error) => {
        'v': webProtocolVersion,
        'i': 0,
        'r': {
          'error': contract.encodeError(error),
        },
      };

  /// Delivers one contract event through the runtime's event stream, exactly
  /// as the worker's `contract_event` broadcast would.
  void deliverContractEvent(contract.Event event) {
    contractRuntime.handleWorkerEvent({
      'v': webProtocolVersion,
      'op': WireOp.contractEvent,
      'event': contract.ContractCodec.encodeEvent(event),
    });
  }

  @override
  Stream<RecordChangeEvent> get events => changeBus.events;

  @override
  Future<Object?> send(String op,
      [Map<String, Object?> args = const {}]) async {
    sent.add((op, args));
    if (onSend != null) return onSend!(op, args);
    return responses[op];
  }

  @override
  CollectionSchema schemaFor(String store) {
    final s = schemas[store];
    if (s == null) {
      throw StateError('No store "$store" registered in this LocalPocket.');
    }
    return s;
  }

  /// The ops sent so far (shorthand for assertions).
  List<String> get sentOps => [for (final (op, _) in sent) op];
}
