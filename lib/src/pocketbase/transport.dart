/// Minimal HTTP transport seam. The adapter talks to PocketBase
/// through [HttpTransport] so the whole wire layer is testable in-process and
/// swappable per platform (native `dart:io` today; a browser `fetch` transport
/// can be added for web without touching the adapter).
library;

import 'dart:convert';

import 'package:http/http.dart' as http;

/// Buffered HTTP request used by [HttpTransport].
class HttpRequest {
  /// HTTP method.
  final String method;

  /// Destination URL.
  final Uri url;

  /// Request headers.
  final Map<String, String> headers;

  /// Optional UTF-8 request body.
  final String? body;

  /// Creates an HTTP request.
  const HttpRequest({
    required this.method,
    required this.url,
    this.headers = const {},
    this.body,
  });
}

/// A streamed multipart file. The length is required by package:http so the
/// multipart body can be sent without buffering the file contents.
class HttpMultipartFile {
  final String field;
  final String filename;
  final int length;
  final Future<Stream<List<int>>> Function() streamFactory;

  const HttpMultipartFile({
    required this.field,
    required this.filename,
    required this.length,
    required this.streamFactory,
  });
}

/// Multipart HTTP request with replayable streamed files.
class HttpMultipartRequest {
  /// HTTP method, normally `PATCH` for PocketBase file updates.
  final String method;

  /// Destination URL.
  final Uri url;

  /// Request headers.
  final Map<String, String> headers;

  /// Text form fields.
  final Map<String, String> fields;

  /// Streamed multipart files.
  final List<HttpMultipartFile> files;

  /// Creates a multipart request.
  const HttpMultipartRequest({
    required this.method,
    required this.url,
    this.headers = const {},
    this.fields = const {},
    this.files = const [],
  });
}

/// Buffered HTTP response.
class HttpResponse {
  /// HTTP status code.
  final int status;

  /// Response headers.
  final Map<String, String> headers;

  /// UTF-8 response body.
  final String body;

  /// Creates an HTTP response value.
  const HttpResponse(this.status, this.headers, this.body);
}

/// A network failure at the transport level (DNS, connection reset, timeout).
class HttpTransportException implements Exception {
  final String message;
  final Object? cause;
  HttpTransportException(this.message, [this.cause]);
  @override
  String toString() => 'HttpTransportException: $message';
}

/// A streaming response (for SSE). The byte stream delivers the body without
/// buffering; it ends when the server closes the connection.
class StreamedHttpResponse {
  final int status;
  final Map<String, String> headers;
  final Stream<List<int>> stream;
  StreamedHttpResponse(this.status, this.headers, this.stream);
}

/// Platform-neutral HTTP transport abstraction.
///
/// Implement this interface to use a browser `fetch` client, a test fake, or a
/// platform-specific networking stack. [openStream] is used for SSE and file
/// downloads; [sendMultipart] is used for streamed attachment uploads.
abstract class HttpTransport {
  /// Sends a buffered request and buffers its response.
  Future<HttpResponse> send(HttpRequest request);

  /// Sends a multipart request without buffering file contents in Dart.
  ///
  /// Each [HttpMultipartFile.streamFactory] must create a fresh stream so the
  /// request can be retried after authentication refresh.
  Future<HttpResponse> sendMultipart(HttpMultipartRequest request) =>
      throw UnsupportedError(
          'Streaming multipart is not supported by this transport.');

  /// Opens a request and returns headers plus a live response body stream.
  ///
  /// ```dart
  /// final response = await transport.openStream(
  ///   HttpRequest(method: 'GET', url: uri),
  /// );
  /// await for (final chunk in response.stream) {
  ///   consume(chunk);
  /// }
  /// ```
  ///
  /// This is used for realtime SSE and streamed downloads. Throws
  /// [HttpTransportException] on transport errors; HTTP error statuses are
  /// returned, not thrown.
  /// on transport errors; HTTP error statuses are returned, not thrown.
  Future<StreamedHttpResponse> openStream(HttpRequest request);

  void close();
}

/// Default transport backed by `package:http` (persistent connection, gzip,
/// per-request [timeout] in seconds).
/// `package:http` implementation of [HttpTransport].
class PackageHttpTransport implements HttpTransport {
  final http.Client _client;

  /// Maximum time allowed for each request operation.
  final Duration timeout;

  /// Creates an HTTP transport, optionally using [client].
  PackageHttpTransport(
      {http.Client? client, this.timeout = const Duration(seconds: 30)})
      : _client = client ?? http.Client();

  @override
  Future<HttpResponse> send(HttpRequest request) async {
    try {
      final streamed = await openStream(request);
      final body =
          await streamed.stream.transform(utf8.decoder).join().timeout(timeout);
      return HttpResponse(streamed.status, streamed.headers, body);
    } on HttpTransportException {
      rethrow;
    } catch (e) {
      // Body consumption failures (stream error, timeout, malformed UTF-8)
      // surface as transport exceptions, never raw errors.
      throw HttpTransportException(
          'HTTP ${request.method} ${request.url} body failed', e);
    }
  }

  @override
  Future<HttpResponse> sendMultipart(HttpMultipartRequest request) async {
    try {
      final multipart = http.MultipartRequest(request.method, request.url)
        ..headers.addAll(request.headers)
        ..fields.addAll(request.fields);
      for (final file in request.files) {
        multipart.files.add(http.MultipartFile(
          file.field,
          await file.streamFactory(),
          file.length,
          filename: file.filename,
        ));
      }
      final response = await _client.send(multipart).timeout(timeout);
      final body =
          await response.stream.transform(utf8.decoder).join().timeout(timeout);
      return HttpResponse(response.statusCode, response.headers, body);
    } on HttpTransportException {
      rethrow;
    } catch (e) {
      // A throwing stream factory or a failing body decode is a transport
      // failure, never a raw error.
      throw HttpTransportException(
          'HTTP multipart ${request.method} ${request.url} failed', e);
    }
  }

  @override
  Future<StreamedHttpResponse> openStream(HttpRequest request) async {
    final req = http.Request(request.method, request.url);
    req.headers.addAll(request.headers);
    if (request.body != null) req.body = request.body!;
    try {
      final streamed = await _client.send(req).timeout(timeout);
      final headers = <String, String>{};
      streamed.headers.forEach((k, v) => headers[k] = v);
      return StreamedHttpResponse(
          streamed.statusCode, headers, streamed.stream);
    } on HttpTransportException {
      rethrow;
    } catch (e) {
      throw HttpTransportException(
          'HTTP ${request.method} ${request.url} failed', e);
    }
  }

  @override
  void close() => _client.close();
}
