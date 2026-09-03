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
  }) {
    _sender = WebSender(
      transport: (wire.WebRequest request) => transport(request.toJson()),
      onWorkerClosed: () {
        // Worker death must end live event and watch streams too — the
        // runtime close contract ("streams fail afterwards") holds on the
        // worker-death path, not only on an explicit close().
        unawaited(close());
        onWorkerClosed?.call();
      },
      requestTimeout: requestTimeout,
    );
  }

  late final WebSender _sender;
  final _events = StreamController<Event>.broadcast();

  /// Feeds one worker event envelope into the event stream (called by the
  /// transport embedder). Non-contract envelopes are ignored (not-yet-cutover
  /// families share the sink); malformed contract envelopes are dropped
  /// rather than killing the broadcast stream — transport corruption, not a
  /// caller bug. Any decoder failure (typed wire errors and unexpected
  /// decoder bugs alike) is contained here so one malformed event can never
  /// break event delivery for well-formed successors.
  void handleWorkerEvent(Map<Object?, Object?> event) {
    // Events must never be injected into a closed controller: add/addError
    // on a closed broadcast controller throws. The teardown window between
    // worker death and this runtime's close() is exactly when strays arrive.
    // The method is synchronous, so a single guard covers every injection.
    if (_events.isClosed) return;
    final map = _stringKeyed(event);
    if (map['op'] != wire.WireOp.contractEvent) return;
    // Defense-in-depth: a stale worker asset with a request-compatible but
    // event-incompatible codec must not silently dead every watch/sync
    // stream while requests keep succeeding — surface a loud protocol error
    // into the stream instead.
    final version = map['v'];
    if (version is! int || version != wire.webProtocolVersion) {
      _events.addError(wire.ProtocolEnvelopeException(
          'Event envelope version mismatch: expected ${wire.webProtocolVersion}, '
          'got $version'));
      return;
    }
    final encoded = map['event'];
    if (encoded is! Map) {
      // A shape change with a matching version is exactly the failure the
      // version check exists to prevent — surface it instead of silently
      // dead-ending every watch/sync stream. (Only the controller being
      // closed short-circuits here; the method is synchronous so the top
      // guard covers the whole body.)
      _events.addError(wire.ProtocolEnvelopeException(
          'Malformed contract event envelope: "event" is not a map.'));
      return;
    }
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
      // Application failure: reconstruct the typed kernel error (the
      // contract codec's decodeError — web_sender imports, never exports,
      // the page protocol's own decodeError, so unqualified resolution is
      // unambiguous here).
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
