import 'dart:async';

import 'package:localpocket/src/contract/contract.dart';

/// The caller side of the runtime boundary. The public API talks to this
/// interface only; it never knows whether the kernel is reached directly or
/// through a transport.
abstract interface class RuntimeClient {
  /// Sends one typed command and returns its typed result. The runtime
  /// verifies the result family actually answers the request.
  Future<R> send<R extends Result>(Request<R> request);

  /// Committed facts and watch snapshots emitted by the kernel.
  Stream<Event> get events;

  /// Shuts the runtime down. Pending requests and streams fail afterwards.
  Future<void> close();
}

/// Direct runtime: calls the kernel handler in-process. Requests are not
/// serialized — the typed objects travel as-is.
final class LocalRuntimeClient implements RuntimeClient {
  LocalRuntimeClient(this._handler);

  final CommandHandler _handler;

  @override
  Future<R> send<R extends Result>(Request<R> request) async {
    final result = await _handler.handle(request);
    _checkCorrelation(request, result);
    return result as R;
  }

  @override
  Stream<Event> get events => _handler.events;

  @override
  Future<void> close() => _handler.close();
}

/// Loopback runtime: exercises the REAL wire contract on the VM. Every
/// command is encoded into its wire envelope, decoded back, handed to the
/// kernel as the decoded value, and the result travels back through the
/// result codec with tag correlation. No JavaScript or browser needed — this
/// is the cheap conformance harness that keeps native and remote runtimes
/// honest.
final class LoopbackRuntimeClient implements RuntimeClient {
  LoopbackRuntimeClient(this._handler);

  final CommandHandler _handler;

  @override
  Future<R> send<R extends Result>(Request<R> request) async {
    // Encode → decode: the kernel only ever sees what survived the wire.
    final decoded =
        ContractCodec.decodeRequest(ContractCodec.encodeRequest(request));
    final result = await _handler.handle(decoded);
    // Encode → decode with correlation: the caller only ever accepts the
    // result family that answers its request.
    final decodedResult =
        ContractCodec.decodeResult(request, ContractCodec.encodeResult(result));
    return decodedResult as R;
  }

  @override
  Stream<Event> get events => _handler.events
      .map((e) => ContractCodec.decodeEvent(ContractCodec.encodeEvent(e)));

  @override
  Future<void> close() => _handler.close();
}

void _checkCorrelation(Request<dynamic> request, Result result) {
  final expected = ContractCodec.requestResultTags[request.tag];
  if (expected == null) {
    throw WireException('Unknown request tag: ${request.tag}');
  }
  if (result.tag != expected) {
    throw WireException(
        'Result tag "${result.tag}" does not answer request "${request.tag}" '
        '(expected "$expected").');
  }
}
