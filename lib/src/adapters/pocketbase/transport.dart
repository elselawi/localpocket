/// Minimal HTTP transport seam: the adapter talks to PocketBase through
/// [HttpTransport], keeping the wire layer testable in-process and swappable
/// per platform (native `dart:io` today; a browser `fetch` transport can be
/// added without touching the adapter).
library;

import 'dart:convert';

import 'package:http/http.dart' as http;

/// {@template localpocket.http_request}
/// Buffered HTTP request used by [HttpTransport].
/// {@endtemplate}
class HttpRequest {
  /// Creates an HTTP request.
  ///
  /// {@macro localpocket.http_request}
  const HttpRequest({
    required this.method,
    required this.url,
    this.headers = const {},
    this.body,
  });

  /// HTTP method.
  final String method;

  /// Destination URL.
  final Uri url;

  /// Request headers.
  final Map<String, String> headers;

  /// Optional UTF-8 request body.
  final String? body;
}

/// {@template localpocket.http_multipart_file}
/// A streamed multipart file; [length] lets package:http send the body
/// without buffering the file contents.
/// {@endtemplate}
class HttpMultipartFile {
  /// Creates a streamed multipart file.
  ///
  /// {@macro localpocket.http_multipart_file}
  const HttpMultipartFile({
    required this.field,
    required this.filename,
    required this.length,
    required this.streamFactory,
  });

  /// Form field name for the file.
  final String field;

  /// Name sent to the server for the file.
  final String filename;

  /// Number of bytes produced by [streamFactory].
  final int length;

  /// Creates a fresh byte stream for each request attempt.
  final Future<Stream<List<int>>> Function() streamFactory;
}

/// {@template localpocket.http_multipart_request}
/// Multipart HTTP request with replayable streamed files.
/// {@endtemplate}
class HttpMultipartRequest {
  /// Creates a multipart request.
  ///
  /// {@macro localpocket.http_multipart_request}
  const HttpMultipartRequest({
    required this.method,
    required this.url,
    this.headers = const {},
    this.fields = const {},
    this.files = const [],
  });

  /// HTTP method (normally `PATCH` for PocketBase file updates).
  final String method;

  /// Destination URL.
  final Uri url;

  /// Request headers.
  final Map<String, String> headers;

  /// Text form fields.
  final Map<String, String> fields;

  /// Streamed multipart files.
  final List<HttpMultipartFile> files;
}

/// {@template localpocket.http_response}
/// Buffered HTTP response.
/// {@endtemplate}
class HttpResponse {
  /// Creates an HTTP response value.
  ///
  /// {@macro localpocket.http_response}
  const HttpResponse(this.status, this.headers, this.body);

  /// HTTP status code.
  final int status;

  /// Response headers.
  final Map<String, String> headers;

  /// UTF-8 response body.
  final String body;
}

/// {@template localpocket.http_transport_exception}
/// A network failure at the transport level (DNS, connection reset, timeout).
/// {@endtemplate}
class HttpTransportException implements Exception {
  /// Creates a transport exception with an optional underlying cause.
  ///
  /// {@macro localpocket.http_transport_exception}
  HttpTransportException(this.message, [this.cause]);

  /// Human-readable description of the failed operation.
  final String message;

  /// Underlying error, when one is available.
  final Object? cause;

  @override
  String toString() => 'HttpTransportException: $message';
}

/// {@template localpocket.streamed_http_response}
/// A streaming response (for SSE). The byte stream delivers the body without
/// buffering; it ends when the server closes the connection.
/// {@endtemplate}
class StreamedHttpResponse {
  /// Creates a streaming HTTP response.
  ///
  /// {@macro localpocket.streamed_http_response}
  StreamedHttpResponse(this.status, this.headers, this.stream);

  /// HTTP status code.
  final int status;

  /// Response headers.
  final Map<String, String> headers;

  /// Live response body byte stream.
  final Stream<List<int>> stream;
}

/// Platform-neutral HTTP transport abstraction.
///
/// Implement this to use a browser `fetch` client, a test fake, or a
/// platform-specific stack. [openStream] serves SSE and file downloads;
/// [sendMultipart] serves streamed attachment uploads.
abstract class HttpTransport {
  /// Sends a buffered request and buffers its response.
  Future<HttpResponse> send(HttpRequest request);

  /// Sends a multipart request without buffering file contents in Dart.
  /// Each [HttpMultipartFile.streamFactory] must create a fresh stream so
  /// the request can be retried after an auth refresh.
  Future<HttpResponse> sendMultipart(HttpMultipartRequest request) =>
      throw UnsupportedError(
          'Streaming multipart is not supported by this transport.');

  /// Opens a request and returns headers plus a live response body stream.
  /// Used for realtime SSE and streamed downloads. Throws
  /// [HttpTransportException] on transport errors; HTTP error statuses are
  /// returned, not thrown.
  Future<StreamedHttpResponse> openStream(HttpRequest request);

  /// Releases resources held by this transport.
  void close();
}

/// {@template localpocket.package_http_transport}
/// Default `package:http` implementation of [HttpTransport]
/// (persistent connection, gzip, per-request [timeout]).
/// {@endtemplate}
class PackageHttpTransport implements HttpTransport {
  /// Creates an HTTP transport, optionally using [client].
  ///
  /// {@macro localpocket.package_http_transport}
  PackageHttpTransport(
      {http.Client? client, this.timeout = const Duration(seconds: 30)})
      : _client = client ?? http.Client();

  final http.Client _client;

  /// Maximum time allowed for each request operation.
  final Duration timeout;

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
      // Body-consumption failures surface as transport exceptions.
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
      // Throwing stream factory or failing body decode = transport failure.
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
