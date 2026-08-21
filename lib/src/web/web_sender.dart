/// Pure-Dart core of the facade's request/response loop over the worker
/// transport (`Database.customRequest`).
///
/// Everything here is wire-Dart (no `dart:js_interop`, no `dart:io`), so it
/// is unit-testable on the VM with an injectable transport. The JS-bound
/// facade (`facade.dart`) supplies the transport (which calls
/// `customRequest(...).jsify()`/`.dartify()`) and the worker-closed callback
/// (which tears down worker-owned streams); this class owns the envelope
/// construction, error classification, and closed-state bookkeeping so the
/// facade itself stays a thin adapter.
library;

import 'protocol.dart';

/// True when a transport error message indicates the worker process has
/// closed, matching every marker the upstream transport can surface.
///
/// The facade maps such errors to [DatabaseWorkerClosedException] (and marks
/// the worker closed) rather than leaking a raw transport error.
bool isWorkerClosedMessage(String message) =>
    message.contains('Channel to database worker is closed') ||
    message.contains('worker is closed') ||
    message.contains('Worker closed');

/// Sends typed [WebRequest] envelopes over an injectable transport and
/// decodes the [WebResponse].
///
/// - A send after close fails immediately with [DatabaseWorkerClosedException].
/// - A transport error whose message matches [isWorkerClosedMessage] marks the
///   sender closed (invoking [onWorkerClosed] once) and is rethrown as a typed
///   [DatabaseWorkerClosedException].
/// - A null transport result and a non-map transport result are both rejected
///   with [ProtocolEnvelopeException].
/// - A response carrying an error is decoded through [decodeError] so wire
///   errors surface as their closest typed local exception.
class WebSender {
  WebSender({
    required Future<Object?> Function(WebRequest request) transport,
    void Function()? onWorkerClosed,
  })  : _transport = transport,
        _onWorkerClosed = onWorkerClosed;

  final Future<Object?> Function(WebRequest request) _transport;
  final void Function()? _onWorkerClosed;

  /// Monotonic id shared by watch registrations and request envelopes.
  int nextRequestId = 1;

  bool _closed = false;

  /// Whether the sender (and therefore the facade) is closed.
  bool get isClosed => _closed;

  Future<Object?> send(String op,
      [Map<String, Object?> args = const {}]) async {
    if (_closed) {
      throw DatabaseWorkerClosedException('LocalPocket is closed.');
    }
    final req = WebRequest(
      version: webProtocolVersion,
      requestId: nextRequestId++,
      op: op,
      args: args,
    );

    final Object? rawResponse;
    try {
      rawResponse = await _transport(req);
    } on Exception catch (e) {
      final message = e.toString();
      if (isWorkerClosedMessage(message)) {
        markWorkerClosed();
        throw DatabaseWorkerClosedException(message);
      }
      rethrow;
    }

    if (rawResponse == null) {
      throw ProtocolEnvelopeException('Null response from worker.');
    }
    if (rawResponse is! Map) {
      throw ProtocolEnvelopeException('Malformed response map from worker.');
    }
    final dartMap = rawResponse.map((k, v) => MapEntry(k.toString(), v));

    final resp = WebResponse.fromJson(
      dartMap,
      expectedVersion: webProtocolVersion,
    );
    if (resp.isError) {
      throw decodeError(resp.error!);
    }
    return resp.result;
  }

  /// Marks the sender closed and invokes the worker-closed callback (stream
  /// teardown) exactly once. Idempotent.
  void markWorkerClosed() {
    if (_closed) return;
    _closed = true;
    _onWorkerClosed?.call();
  }

  /// Marks the sender closed WITHOUT the worker-closed callback — used by the
  /// facade's own graceful close path, which tears down page resources
  /// itself.
  void markClosedLocal() {
    _closed = true;
  }
}
