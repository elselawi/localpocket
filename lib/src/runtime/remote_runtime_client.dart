import 'dart:async';

import '../contract/contract.dart';
import '../web/protocol.dart' as wire;
import '../web/web_sender.dart';
import 'runtime_client.dart';

/// The remote runtime: the typed contract carried across the worker
/// transport.
///
/// Every send is one contract envelope — the same [ContractCodec] encoding
/// the loopback runtime exercises on the VM — answered by the worker's kernel
/// command handler. Every event arrives as a contract-encoded envelope
/// through [handleWorkerEvent]. Request bookkeeping (per-request timeout,
/// worker-closed classification, response-version checking) is delegated to
/// the page's `WebSender`, so this class adds only the contract framing:
/// application failures reconstruct as typed kernel errors via the contract
/// error codec, transport failures surface as the sender's typed exceptions.
final class RemoteRuntimeClient implements RuntimeClient {
  /// Creates a remote runtime over [transport], which sends one wire envelope
  /// map and resolves with the raw response map (the same shape the JS
  /// boundary's `Database.customRequest` delivers). [onWorkerClosed] fires
  /// once when the transport fails in a way that means the worker is gone;
  /// [requestTimeout] bounds each send.
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

  /// Feeds one worker event envelope into the event stream. The transport
  /// embedder calls this for every event the worker emits.
  ///
  /// Envelopes that are not contract events are ignored (families that have
  /// not cut over still speak their own envelopes on the same sink), and a
  /// malformed contract envelope is dropped rather than allowed to kill the
  /// broadcast stream — the worker encodes these envelopes itself, so a
  /// malformed one means transport corruption, not a caller bug.
  void handleWorkerEvent(Map<Object?, Object?> event) {
    final map = _stringKeyed(event);
    if (map['op'] != wire.WireOp.contractEvent) return;
    final encoded = map['event'];
    if (encoded is! Map) return;
    try {
      _events.add(ContractCodec.decodeEvent(_stringKeyed(encoded)));
    } on WireException {
      // Drop and keep the stream alive for well-formed successors.
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
    if (error is Map) {
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
    // Graceful close: the embedder tears down page resources itself, so the
    // sender is only marked closed (no worker-closed callback).
    _sender.markClosedLocal();
    await _events.close();
  }

  static Map<String, Object?> _stringKeyed(Map<Object?, Object?> raw) =>
      {for (final e in raw.entries) e.key.toString(): e.value};
}
