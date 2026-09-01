import 'dart:async';
import 'dart:convert';

import 'package:localpocket/src/internal/raw_surface.dart';

/// A scriptable fake [HttpTransport] for adapter tests.
///
/// Each method consumes its script in order (an [HttpResponse],
/// [StreamedHttpResponse], or an error to throw); when the script is empty it
/// falls back to a default 200 / empty response. Every request is recorded so
/// tests can assert exact URLs, headers, query parameters, and multipart
/// contents.
class FakeTransport implements HttpTransport {
  final List<HttpRequest> sends = [];
  final List<HttpRequest> streams = [];
  final List<HttpMultipartRequest> multiparts = [];
  final List<Object> _sendScript = [];
  final List<Object> _streamScript = [];
  final List<Object> _multipartScript = [];
  int closeCalls = 0;

  /// When true, [sendMultipart] drains every file stream and records the
  /// consumed bytes (and any stream error becomes an [HttpTransportException]).
  bool readFilesOnMultipart = false;
  final List<List<int>> multipartConsumed = [];

  // ------------------------------------------------------------- scripting --

  /// Scripts a buffered response for the next [send].
  void sendStatus(int status,
          [String body = '{}', Map<String, String> headers = const {}]) =>
      _sendScript.add(HttpResponse(status, headers, body));

  void sendError(Object e) => _sendScript.add(e);

  /// Scripts a streamed response for the next [openStream].
  void streamStatus(int status, [Map<String, String> headers = const {}]) =>
      _streamScript
          .add(StreamedHttpResponse(status, headers, const Stream.empty()));

  void streamData(int status, List<int> bytes,
          [Map<String, String> headers = const {}]) =>
      _streamScript
          .add(StreamedHttpResponse(status, headers, Stream.value(bytes)));

  void streamResponse(StreamedHttpResponse r) => _streamScript.add(r);

  void streamError(Object e) => _streamScript.add(e);

  /// Scripts a buffered response for the next [sendMultipart].
  void multipartStatus(int status,
          [String body = '{}', Map<String, String> headers = const {}]) =>
      _multipartScript.add(HttpResponse(status, headers, body));

  void multipartError(Object e) => _multipartScript.add(e);

  // ------------------------------------------------------------------ impl --

  @override
  Future<HttpResponse> send(HttpRequest request) async {
    sends.add(request);
    if (_sendScript.isEmpty) return const HttpResponse(200, {}, '{}');
    final next = _sendScript.removeAt(0);
    if (next is HttpResponse) return next;
    throw next;
  }

  @override
  Future<StreamedHttpResponse> openStream(HttpRequest request) async {
    streams.add(request);
    if (_streamScript.isEmpty) {
      return StreamedHttpResponse(200, const {}, const Stream.empty());
    }
    final next = _streamScript.removeAt(0);
    if (next is StreamedHttpResponse) return next;
    throw next;
  }

  @override
  Future<HttpResponse> sendMultipart(HttpMultipartRequest request) async {
    multiparts.add(request);
    if (readFilesOnMultipart) {
      try {
        for (final file in request.files) {
          final stream = await file.streamFactory();
          final bytes =
              await stream.fold<List<int>>([], (a, c) => [...a, ...c]);
          multipartConsumed.add(bytes);
        }
      } catch (e) {
        throw HttpTransportException('multipart file stream failed', e);
      }
    }
    if (_multipartScript.isEmpty) return const HttpResponse(200, {}, '{}');
    final next = _multipartScript.removeAt(0);
    if (next is HttpResponse) return next;
    throw next;
  }

  @override
  void close() => closeCalls++;

  /// A valid remote-record JSON body for [sendStatus].
  static String recordBody(String id,
          {String store = 'widgets',
          Map<String, Object?>? data,
          List<String>? imgs,
          String updated = '2026-08-15 10:00:00.000Z'}) =>
      jsonEncode({
        'id': id,
        'store': store,
        'updated': updated,
        'data': data ?? {'id': id, 'name': 'n'},
        if (imgs != null) 'imgs': imgs,
      });
}
