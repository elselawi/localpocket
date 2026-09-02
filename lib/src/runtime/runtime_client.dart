import 'dart:async';

import 'package:localpocket/src/contract/contract.dart';

/// The caller side of the runtime boundary: the public API only ever talks
/// to this interface, regardless of how the kernel is reached.
abstract interface class RuntimeClient {
  /// Sends one typed command; the runtime verifies the result family answers
  /// the request.
  Future<R> send<R extends Result>(Request<R> request);

  /// Committed facts and watch snapshots emitted by the kernel.
  Stream<Event> get events;

  /// Shuts the runtime down. Pending requests and streams fail afterwards.
  Future<void> close();
}

/// Direct runtime: calls the kernel handler in-process; requests travel
/// as-is, unserialized.
final class LocalRuntimeClient implements RuntimeClient {
  /// Creates a direct client over [handler].
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

/// Loopback runtime: exercises the REAL wire contract on the VM — every
/// command is encode/decode round-tripped through [ContractCodec] with tag
/// correlation. The cheap conformance harness keeping native and remote
/// runtimes honest.
final class LoopbackRuntimeClient implements RuntimeClient {
  /// Creates a loopback client over [handler].
  LoopbackRuntimeClient(this._handler);

  final CommandHandler _handler;

  @override
  Future<R> send<R extends Result>(Request<R> request) async {
    // Encode → decode: the kernel only ever sees what survived the wire.
    final decoded =
        ContractCodec.decodeRequest(ContractCodec.encodeRequest(request));
    final result = await _handler.handle(decoded);
    // Encode → decode with correlation: only the answering result family is
    // accepted.
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
