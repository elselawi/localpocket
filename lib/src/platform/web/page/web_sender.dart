/// Pure-Dart core of the facade's request/response loop over the worker
/// transport (`Database.customRequest`).
///
/// Everything here is wire-Dart (no `dart:js_interop`), so it is VM-testable
/// with an injectable transport. The JS-bound facade supplies the transport
/// and the worker-closed callback; this class owns envelope construction,
/// error classification, and closed-state bookkeeping.
library;

import 'protocol.dart';

/// True when a transport error message indicates the worker process has
/// closed (any marker the upstream transport can surface). The facade maps
/// such errors to [DatabaseWorkerClosedException] instead of leaking them.
bool isWorkerClosedMessage(String message) =>
    message.contains('Channel to database worker is closed') ||
    message.contains('worker is closed') ||
    message.contains('Worker closed');

/// {@template localpocket.web_sender}
/// Sends typed [WebRequest] envelopes over an injectable transport and
/// decodes the [WebResponse].
///
/// - A send after close fails immediately with [DatabaseWorkerClosedException].
/// - A worker-closed transport error marks the sender closed (invoking
///   [onWorkerClosed] once) and rethrows as [DatabaseWorkerClosedException].
/// - With [requestTimeout] set, a stalled transport call fails with a typed
///   [DatabaseWorkerTimeoutException]; the sender stays usable.
/// - A null or non-map transport result is rejected as
///   [ProtocolEnvelopeException]; an error response is decoded through
///   [decodeError] to its closest typed local exception.
/// {@endtemplate}
class WebSender {
  /// {@macro localpocket.web_sender}
  WebSender({
    required Future<Object?> Function(WebRequest request) transport,
    void Function()? onWorkerClosed,
    this.requestTimeout,
  })  : _transport = transport,
        _onWorkerClosed = onWorkerClosed;

  final Future<Object?> Function(WebRequest request) _transport;
  final void Function()? _onWorkerClosed;

  /// Optional per-request timeout; a request exceeding it fails with a typed
  /// [DatabaseWorkerTimeoutException] while the sender stays open (the wedged
  /// response is abandoned). `null` disables the timeout.
  final Duration? requestTimeout;

  /// Monotonic id shared by watch registrations and request envelopes.
  int nextRequestId = 1;

  bool _closed = false;

  /// Whether the sender (and therefore the facade) is closed.
  bool get isClosed => _closed;

  /// Sends one op request to the worker and returns its decoded response;
  /// throws typed exceptions when closed or timed out.
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
      rawResponse = await _withTimeout(_transport(req), req);
    } on DatabaseWorkerTimeoutException {
      // A timeout is not a transport failure: never reclassify it as a
      // worker-close, and never close the sender.
      rethrow;
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
    // A mismatched reply id can never be trusted; fail typed instead of
    // decoding it against the wrong call.
    if (resp.requestId != req.requestId) {
      throw ProtocolEnvelopeException(
          'Response id ${resp.requestId} does not match request id '
          '${req.requestId}.');
    }
    if (resp.isError) {
      throw decodeError(resp.error!);
    }
    return resp.result;
  }

  /// Applies [requestTimeout] to a transport future, converting a timeout
  /// into a typed [DatabaseWorkerTimeoutException]. A null [requestTimeout]
  /// returns the future untouched.
  Future<Object?> _withTimeout(Future<Object?> future, WebRequest req) {
    final timeout = requestTimeout;
    if (timeout == null) return future;
    return future.timeout(timeout, onTimeout: () {
      throw DatabaseWorkerTimeoutException(
        requestId: req.requestId,
        op: req.op,
        timeout: timeout,
      );
    });
  }

  /// Marks the sender closed and invokes the worker-closed callback (stream
  /// teardown) exactly once. Idempotent.
  void markWorkerClosed() {
    if (_closed) return;
    _closed = true;
    _onWorkerClosed?.call();
  }

  /// Marks the sender closed WITHOUT the worker-closed callback — the
  /// facade's graceful close tears down page resources itself.
  void markClosedLocal() {
    _closed = true;
  }
}
