/// Wire protocol between the web facade (main thread) and the engine worker.
///
/// Only public-API envelopes cross this boundary; SQL never does. Values are
/// structured-clone-safe Dart values. Every envelope carries the integer
/// [webProtocolVersion]; a mismatch must fail with a typed exception.
library;

export '../../../contract/contract.dart'
    show
        DatabaseWorkerClosedException,
        DatabaseWorkerTimeoutException,
        ProtocolEnvelopeException,
        ProtocolMismatchException;

// Envelope fields are documented above; per-constant docs would add noise.
// ignore_for_file: public_member_api_docs

import '../../../contract/contract.dart';

/// Protocol version for every envelope. Bump on incompatible changes.
/// v2: all reads are compiled query plans. v3: response `hasMore` → `hasNext`
/// (direction-explicit pagination) plus `firstRow` for backward cursor minting.
const int webProtocolVersion = 3;

/// Names of supported operations. Unknown operations are rejected with a
/// typed [ProtocolEnvelopeException] rather than silently ignored.
class WireOp {
  static const String open = 'open';

  /// Typed contract envelope: requests travel as the contract codec encodes
  /// them, and the kernel answers through the same handler the direct runtime
  /// uses. The only other op is `open` (worker-side store re-registration).
  static const String contractRequest = 'contract_request';

  /// Committed facts and watch snapshots, contract-event encoded.
  static const String contractEvent = 'contract_event';

  static bool isKnown(String op) => _known.contains(op);

  /// Immutable list of operations used by worker dispatch tables.
  static Iterable<String> get allKnown => _known;

  static const Set<String> _known = {
    open,
    contractRequest,
    contractEvent,
  };
}

/// Stable error codes sent across the wire.
class WireErrorCode {
  /// The other end speaks a different protocol version.
  static const String protocolMismatch = 'protocol_mismatch';

  /// The worker or tab hosting the database is gone.
  static const String workerClosed = 'worker_closed';

  /// The envelope was malformed or requested an unknown operation.
  static const String protocolEnvelope = 'protocol_envelope';

  /// The operation was aborted.
  static const String aborted = 'aborted';

  /// A typed LocalPocket error (validation, storage, ...) was thrown remotely.
  static const String localpocket = 'localpocket';

  /// Fallback category when an unclassified remote exception occurs.
  static const String unknown = 'unknown';
}

/// Maps an arbitrary error object to a stable, minification-safe wire error
/// category string.
String stableWireErrorType(Object error) => canonicalErrorType(error);

/// Worker→page callback RPC vocabulary: the reverse request/response channel
/// the worker uses to execute page-registered schema callbacks (conflict
/// resolvers, validators, migration hooks). The page answers each request
/// envelope with a result envelope through the same custom-request response.
abstract final class CallbackRpc {
  /// `kind` of a worker→page callback request.
  static const String requestKind = 'callback_rpc';

  /// `kind` of the page's answer.
  static const String resultKind = 'callback_rpc_result';

  /// Request/result correlation id.
  static const String rpcId = 'rpcId';

  /// Callback channel name (see `kernel/page_callbacks.dart`).
  static const String channel = 'channel';

  /// Channel arguments.
  static const String args = 'args';

  /// Success flag on the result envelope.
  static const String ok = 'ok';

  /// Response value on a successful result envelope.
  static const String value = 'value';

  /// Failure message on a failed result envelope.
  static const String error = 'error';
}

/// {@template localpocket.web_request}
/// A request envelope sent from the facade to the worker.
/// {@endtemplate}
class WebRequest {
  /// {@macro localpocket.web_request}
  const WebRequest({
    required this.version,
    required this.requestId,
    required this.op,
    this.args = const {},
  });

  final int version;
  final int requestId;
  final String op;
  final Map<String, Object?> args;

  Map<String, Object?> toJson() => {
        'v': version,
        'i': requestId,
        'op': op,
        'a': args,
      };

  /// Parses a wire-safe Dart map; throws [ProtocolEnvelopeException] on any
  /// malformed field — never a cast error.
  static WebRequest fromJson(Map<String, Object?> json) {
    final version = json['v'];
    final requestId = json['i'];
    final op = json['op'];
    final args = json['a'];
    if (version is! int) {
      throw ProtocolEnvelopeException('Request "v" must be an int.');
    }
    if (requestId is! int || requestId < 0) {
      throw ProtocolEnvelopeException(
          'Request "i" must be a non-negative int.');
    }
    if (op is! String || !WireOp.isKnown(op)) {
      throw ProtocolEnvelopeException('Unknown request operation: $op');
    }
    if (args is! Map) {
      throw ProtocolEnvelopeException('Request "a" must be a map.');
    }
    return WebRequest(
      version: version,
      requestId: requestId,
      op: op,
      args: args.map((k, v) => MapEntry(k.toString(), v)),
    );
  }
}

/// {@template localpocket.web_response}
/// A response envelope sent from the worker back to the facade.
/// {@endtemplate}
class WebResponse {
  /// {@macro localpocket.web_response}
  const WebResponse.success({
    required this.version,
    required this.requestId,
    this.result,
  }) : error = null;

  /// {@macro localpocket.web_response}
  const WebResponse.error({
    required this.version,
    required this.requestId,
    required this.error,
  }) : result = null;

  final int version;
  final int requestId;

  /// The structured-clone-safe result on success, or null.
  final Object? result;

  /// Non-null when this response carries an error.
  final WebError? error;

  bool get isError => error != null;

  Map<String, Object?> toJson() => {
        'v': version,
        'i': requestId,
        if (isError) 'e': error!.toJson() else 'r': result,
      };

  /// Parses a wire-safe Dart map, checking [expectedVersion] here so every
  /// response path enforces the protocol version, not just the worker path.
  static WebResponse fromJson(Map<String, Object?> json,
      {int? expectedVersion}) {
    final version = json['v'];
    final requestId = json['i'];
    if (version is! int) {
      throw ProtocolEnvelopeException('Response "v" must be an int.');
    }
    if (expectedVersion != null && version != expectedVersion) {
      throw ProtocolMismatchException(
          expected: expectedVersion, actual: version);
    }
    if (requestId is! int || requestId < 0) {
      throw ProtocolEnvelopeException(
          'Response "i" must be a non-negative int.');
    }
    final hasError = json.containsKey('e');
    final hasResult = json.containsKey('r');
    if (hasError == hasResult) {
      throw ProtocolEnvelopeException(
          'Response must contain exactly one of "r" or "e".');
    }
    if (hasError) {
      final e = json['e'];
      if (e is! Map) {
        throw ProtocolEnvelopeException('Response "e" must be a map.');
      }
      return WebResponse.error(
        version: version,
        requestId: requestId,
        error: WebError.fromJson(e.map((k, v) => MapEntry(k.toString(), v))),
      );
    }
    return WebResponse.success(
        version: version, requestId: requestId, result: json['r']);
  }
}

/// {@template localpocket.web_error}
/// Structured error payload carried inside a [WebResponse].
/// {@endtemplate}
class WebError {
  /// {@macro localpocket.web_error}
  const WebError({
    required this.code,
    required this.message,
    this.details,
  });

  final String code;
  final String message;
  final Map<String, Object?>? details;

  Map<String, Object?> toJson() => {
        'c': code,
        'm': message,
        if (details != null) 'd': details!,
      };

  static WebError fromJson(Map<String, Object?> json) {
    final code = json['c'];
    final message = json['m'];
    if (code is! String) {
      throw ProtocolEnvelopeException('Error "c" must be a string.');
    }
    if (message is! String) {
      throw ProtocolEnvelopeException('Error "m" must be a string.');
    }
    final d = json['d'];
    Map<String, Object?>? details;
    if (d != null) {
      if (d is! Map) {
        throw ProtocolEnvelopeException('Error "d" must be a map.');
      }
      final rawDetails = d as Map<Object?, Object?>;
      details = rawDetails.map(
        (key, value) => MapEntry(key.toString(), value),
      );
    }
    return WebError(code: code, message: message, details: details);
  }
}

// The worker transport exception vocabulary (ProtocolEnvelopeException and
// friends) is defined beside the canonical classifier in the contract layer
// so the worker and page projections name the same types; the definitions
// are re-exported from this library for its consumers.

/// {@template localpocket.remote_local_pocket_exception}
/// A typed LocalPocket error that crossed the wire from the worker.
/// {@endtemplate}
final class RemoteLocalPocketException implements Exception {
  /// {@macro localpocket.remote_local_pocket_exception}
  RemoteLocalPocketException({
    required this.code,
    required this.message,
    this.details,
  });

  final String code;
  final String message;
  final Map<String, Object?>? details;

  @override
  String toString() => 'RemoteLocalPocketException[$code]: $message';
}

/// Converts a wire error into the closest typed local exception.
Object decodeError(WebError error) {
  switch (error.code) {
    case WireErrorCode.protocolMismatch:
      final details = error.details;
      final expected = details?['expected'];
      final actual = details?['actual'];
      return ProtocolMismatchException(
        expected: expected is int ? expected : webProtocolVersion,
        actual: actual is int ? actual : -1,
      );
    case WireErrorCode.workerClosed:
      return DatabaseWorkerClosedException(error.message);
    case WireErrorCode.aborted:
      return ProtocolEnvelopeException('Operation aborted.');
    case WireErrorCode.localpocket:
      final type = error.details?['type'];
      return RemoteLocalPocketException(
        code: type is String ? type : 'unknown',
        message: error.message,
        details: error.details,
      );
    default:
      return RemoteLocalPocketException(
          code: error.code, message: error.message);
  }
}
