import 'dart:async';

import '../contract/contract.dart';
import '../platform/web/page/protocol.dart' as wire;
import '../platform/web/page/web_sender.dart';
import 'runtime_client.dart';

/// The remote runtime: the typed contract carried over the worker transport.
///
/// Sends are [ContractCodec] envelopes answered by the worker's kernel;
/// timeouts, worker-closed classification, and response-version checks live
/// in the page's `WebSender`. Application failures reconstruct as typed
/// kernel errors via the contract error codec; transport failures surface as
/// the sender's typed exceptions.
final class RemoteRuntimeClient implements RuntimeClient {
  /// Creates a remote runtime over [transport], which sends one wire envelope
  /// map and resolves with the raw response map. [onWorkerClosed] fires once
  /// when the worker is gone; [requestTimeout] bounds each send.
  RemoteRuntimeClient({
    required Future<Object?> Function(Map<String, Object?> envelope) transport,
    void Function()? onWorkerClosed,
    Duration? requestTimeout,
  }) : _sender = WebSender(
          transport: (wire.WebRequest request) => transport(request.toJson()),
          onWorkerClosed: onWorkerClosed,
          requestTimeout: requestTimeout,
        );

  final WebSender _sender;
  final _events = StreamController<Event>.broadcast();

  /// Feeds one worker event envelope into the event stream (called by the
  /// transport embedder). Non-contract envelopes are ignored (not-yet-cutover
  /// families share the sink); malformed contract envelopes are dropped
  /// rather than killing the broadcast stream — transport corruption, not a
  /// caller bug. Any decoder failure (typed wire errors and unexpected
  /// decoder bugs alike) is contained here so one malformed event can never
  /// break event delivery for well-formed successors.
  void handleWorkerEvent(Map<Object?, Object?> event) {
    final map = _stringKeyed(event);
    if (map['op'] != wire.WireOp.contractEvent) return;
    final encoded = map['event'];
    if (encoded is! Map) return;
    try {
      _events.add(ContractCodec.decodeEvent(_stringKeyed(encoded)));
    } on Object {
      // Drop and keep the stream alive for well-formed successors. Contract
      // decoders throw WireException for malformed payloads; anything else
      // would be a decoder bug — contained all the same, since neither may
      // kill the broadcast stream or surface inside a caller callback.
    }
  }

  @override
  Future<R> send<R extends Result>(Request<R> request) async {
    final outcome = await _sender.send(wire.WireOp.contractRequest, {
      'request': ContractCodec.encodeRequest(request),
    });
    if (outcome is! Map) {
      throw wire.ProtocolEnvelopeException('Malformed contract reply.');
    }
    final map = _stringKeyed(outcome);
    final error = map['error'];
    if (error != null) {
      if (error is! Map) {
        // A present but wrong-typed error field is a protocol problem of its
        // own — reporting it as a missing result would misdiagnose it.
        throw wire.ProtocolEnvelopeException(
            'Contract reply has a malformed "error" field.');
      }
      // Application failure: reconstruct the typed kernel error.
      throw decodeError(_stringKeyed(error));
    }
    final encoded = map['result'];
    if (encoded is! Map) {
      throw wire.ProtocolEnvelopeException(
          'Contract reply requires a "result" or "error" map.');
    }
    // decodeResult verifies the result family actually answers the request.
    return ContractCodec.decodeResult(request, _stringKeyed(encoded)) as R;
  }

  @override
  Stream<Event> get events => _events.stream;

  @override
  Future<void> close() async {
    // Graceful close: the embedder owns page teardown; just mark the sender
    // closed (no worker-closed callback).
    _sender.markClosedLocal();
    await _events.close();
  }

  static Map<String, Object?> _stringKeyed(Map<Object?, Object?> raw) =>
      {for (final e in raw.entries) e.key.toString(): e.value};
}
