/// PocketBase wire client: list/get/create/update/batch
/// over [HttpTransport] with token injection, single-flight 401 refresh-retry,
/// and typed error mapping. Raw JSON in, typed errors out.
library;

import 'dart:convert';

import '../sync/sync_backend.dart';
import 'auth.dart';
import 'filter_builder.dart';
import 'transport.dart';

class PbClient {
  final HttpTransport transport;
  final Uri baseUrl;
  final AuthManager auth;

  PbClient(
      {required this.transport, required this.baseUrl, required this.auth});

  Future<Token> authToken() => auth.token();

  // ------------------------------------------------------------------ list --

  Future<List<RemoteRecord>> listRecords(
    String store, {
    String? fromUpdated,
    String? fromId,
    String? idPrefix,
    int perPage = 200,
    List<String>? fields,
  }) async {
    String filter;
    if (idPrefix != null) {
      filter = sweepFilter(store, idPrefix, fromId: fromId);
    } else {
      final base = pullFilter(store, fromUpdated ?? '1970-01-01 00:00:00.000Z');
      filter = fromId == null ? base : pullPageFilter(base, fromId);
    }
    final query = <String, String>{
      'filter': filter,
      'sort': idPrefix == null ? 'updated,id' : 'id',
      'perPage': '$perPage',
      'skipTotal': '1',
      if (fields != null) 'fields': fields.join(','),
    };
    final uri = _records().replace(queryParameters: query);
    final res = await _sendAuth('GET', uri);
    _expectStatus(res, [200], uri);
    final body = _decode(res);
    final items = body['items'];
    if (items is! List) {
      throw ProtocolError('List response has no items array.');
    }
    return items.map((e) => _parseRecord(e)).toList();
  }

  Future<RemoteRecord?> getRecord(String id) async {
    final uri = _record(id);
    final res = await _sendAuth('GET', uri);
    if (res.status == 404) throw NotFoundError();
    _expectStatus(res, [200], uri);
    return _parseRecord(_decode(res));
  }

  Future<RemoteRecord> createRecord({
    required String id,
    required String store,
    required String dataJson,
  }) async {
    final uri = _records();
    final res = await _sendAuth('POST', uri,
        body: jsonEncode({
          'id': id,
          'store': store,
          'data': jsonDecode(dataJson),
        }));
    if (res.status == 400 && _isDuplicateId(res)) {
      throw DuplicateIdError(_errorMessage(res));
    }
    _expectStatus(res, [200, 201], uri);
    return _parseRecord(_decode(res));
  }

  /// Duplicate-id shapes (live-verified): PB v0.23+ returns
  /// `data.id.code == 'validation_pk_invalid'` (the id is the PK); older
  /// builds return `validation_not_unique`. Any other 400 is a plain
  /// validation failure (PayloadError).
  bool _isDuplicateId(HttpResponse res) {
    try {
      final body = _decode(res);
      final data = body['data'];
      if (data is Map) {
        final idField = data['id'];
        if (idField is Map) {
          final code = idField['code'];
          return code == 'validation_not_unique' ||
              code == 'validation_pk_invalid';
        }
      }
    } catch (_) {}
    return false;
  }

  Future<RemoteRecord> updateRecord({
    required String id,
    required String dataJson,
  }) async {
    final uri = _record(id);
    final res = await _sendAuth('PATCH', uri,
        body: jsonEncode({'data': jsonDecode(dataJson)}));
    _expectStatus(res, [200], uri);
    return _parseRecord(_decode(res));
  }

  Future<RemoteRecord> updateRecordFiles({
    required String id,
    String? dataJson,
    Map<String, HttpMultipartFile>? uploads,
    List<String>? keepNames,
    List<String>? removeNames,
  }) async {
    final uri = _record(id);
    final fields = <String, String>{};
    if (dataJson != null) fields['data'] = dataJson;
    if (keepNames != null) {
      fields['imgs+'] = keepNames.join(',');
    }
    if (removeNames != null) {
      fields['imgs-'] = jsonEncode(removeNames);
    }
    final res = await _sendMultipartAuth(
      HttpMultipartRequest(
        method: 'PATCH',
        url: uri,
        fields: fields,
        files: uploads?.values.toList() ?? const [],
      ),
    );
    _expectStatus(res, [200], uri);
    return _parseRecord(_decode(res));
  }

  Future<Stream<List<int>>> downloadFile({
    required String recordId,
    required String filename,
    String? thumb,
  }) async {
    final query = <String, String>{if (thumb != null) 'thumb': thumb};
    final base = baseUrl.resolve(
        '/api/files/data/${Uri.encodeComponent(recordId)}/${Uri.encodeComponent(filename)}');
    final uri = query.isEmpty ? base : base.replace(queryParameters: query);
    final response =
        await _openStreamAuth(HttpRequest(method: 'GET', url: uri));
    _expectStatus(
        HttpResponse(response.status, response.headers, ''), [200], uri);
    return response.stream;
  }

  // ---------------------------------------------------------------- batch --

  /// Upsert batch: PUT /records with `{id, store, data}` in the body;
  /// the server creates or updates by existence.
  Future<List<PushResult>> pushBatch(List<PushOp> ops) async {
    final uri = baseUrl.resolve('/api/batch');
    final requests = [
      for (final op in ops)
        {
          'method': 'PUT',
          'url': '/api/collections/data/records',
          'body': {
            'id': op.id,
            'store': op.store,
            'data': jsonDecode(op.dataJson),
          },
        },
    ];
    final res =
        await _sendAuth('POST', uri, body: jsonEncode({'requests': requests}));
    if (res.status == 403) throw ForbiddenError(_errorMessage(res));
    if (res.status == 400) throw BatchFailedError(_errorMessage(res));
    _expectStatus(res, [200], uri);

    // Real PB batch response (live-verified): a top-level JSON array of
    // `{body, status}` — one per request, in request order. (The adapter also
    // accepts the older `{data:{results:[...]}}` envelope for compatibility.)
    final decoded = jsonDecode(res.body);
    List<Object?> results;
    if (decoded is List) {
      results = decoded;
    } else if (decoded is Map) {
      final data = decoded['data'];
      final inner = (data is Map ? data['results'] : decoded['results']);
      if (inner is! List) {
        throw ProtocolError('Batch response has no results array.');
      }
      results = inner;
    } else {
      throw ProtocolError('Batch response is not a list or envelope.');
    }
    // PB answers by REQUEST ORDER (it cannot echo client opIds), so results
    // map back by index — never by a server-supplied id.
    return [
      for (var i = 0; i < results.length && i < ops.length; i++)
        if (results[i] is Map) _parsePushResult(results[i] as Map, ops[i].opId),
    ];
  }

  /// Batch capability probe: 403 = the batch API is disabled; 200/3xx/400
  /// (a server that answers the empty batch, e.g. 400 = rejected by an ENABLED
  /// server) = enabled. A still-401 after the refresh-retry is an auth
  /// failure; 408/429/5xx are transient. Both are surfaced as typed errors so
  /// `prepare()` can re-probe on the next start instead of caching a wrong
  /// capability.
  Future<bool> probeBatch() async {
    final uri = baseUrl.resolve('/api/batch');
    final res = await _sendAuth('POST', uri,
        body: jsonEncode({'requests': <Object?>[]}));
    if (res.status == 403) return false;
    if (res.status == 401) throw AuthError(_errorMessage(res));
    if (res.status == 408 || res.status == 429 || res.status >= 500) {
      throw TransientNetworkError('batch probe status ${res.status}');
    }
    return true;
  }

  // --------------------------------------------------------------- helpers --

  Uri _records() => baseUrl.resolve('/api/collections/data/records');

  /// NOTE: must build the full path — `_records().resolve(id)` would resolve
  /// against the last segment and drop `records`.
  Uri _record(String id) => baseUrl
      .resolve('/api/collections/data/records/${Uri.encodeComponent(id)}');

  /// Sends with the bearer token; on 401 refreshes once and retries.
  /// Transport failures map to [TransientNetworkError] for the engine.
  Future<HttpResponse> _sendAuth(String method, Uri uri, {String? body}) async {
    try {
      final token = await auth.token();
      var res = await _send(method, uri, token: token.value, body: body);
      if (res.status == 401) {
        final fresh = await auth.refreshNow();
        res = await _send(method, uri, token: fresh.value, body: body);
      }
      return res;
    } on HttpTransportException catch (e) {
      throw TransientNetworkError(e.message);
    }
  }

  Future<HttpResponse> _sendMultipartAuth(HttpMultipartRequest request) async {
    try {
      final token = await auth.token();
      var authorized = HttpMultipartRequest(
        method: request.method,
        url: request.url,
        headers: {...request.headers, 'Authorization': 'Bearer ${token.value}'},
        fields: request.fields,
        files: request.files,
      );
      var res = await transport.sendMultipart(authorized);
      if (res.status == 401) {
        final fresh = await auth.refreshNow();
        authorized = HttpMultipartRequest(
          method: request.method,
          url: request.url,
          headers: {
            ...request.headers,
            'Authorization': 'Bearer ${fresh.value}'
          },
          fields: request.fields,
          files: request.files,
        );
        res = await transport.sendMultipart(authorized);
      }
      return res;
    } on HttpTransportException catch (e) {
      throw TransientNetworkError(e.message);
    }
  }

  Future<StreamedHttpResponse> _openStreamAuth(HttpRequest request) async {
    try {
      final token = await auth.token();
      var authorized = HttpRequest(
        method: request.method,
        url: request.url,
        headers: {...request.headers, 'Authorization': 'Bearer ${token.value}'},
        body: request.body,
      );
      var res = await transport.openStream(authorized);
      if (res.status == 401) {
        final fresh = await auth.refreshNow();
        authorized = HttpRequest(
          method: request.method,
          url: request.url,
          headers: {
            ...request.headers,
            'Authorization': 'Bearer ${fresh.value}'
          },
          body: request.body,
        );
        res = await transport.openStream(authorized);
      }
      return res;
    } on HttpTransportException catch (e) {
      throw TransientNetworkError(e.message);
    }
  }

  Future<HttpResponse> _send(String method, Uri uri,
      {required String token, String? body}) async {
    final headers = <String, String>{
      'Authorization': 'Bearer $token',
      if (body != null) 'Content-Type': 'application/json',
    };
    return transport.send(
        HttpRequest(method: method, url: uri, headers: headers, body: body));
  }

  void _expectStatus(HttpResponse res, List<int> ok, Uri uri) {
    if (ok.contains(res.status)) return;
    throw _mapError(res, uri);
  }

  SyncError _mapError(HttpResponse res, Uri uri) {
    final status = res.status;
    final retryAfter = res.headers['retry-after'];
    final msg = _errorMessage(res);
    switch (status) {
      case 401:
        return AuthError(msg);
      case 403:
        return ForbiddenError(msg);
      case 404:
        return NotFoundError(msg);
      case 408 || 429:
        return ServerBusyError(retryAfter, msg);
      case 400:
        return PayloadError(msg);
      default:
        if (status >= 500) return ServerError(msg);
        return ProtocolError('Unexpected status $status for $uri: $msg');
    }
  }

  String _errorMessage(HttpResponse res) {
    try {
      final body = _decode(res);
      final message = body['message'];
      if (message is String && message.isNotEmpty) return message;
      final data = body['data'];
      if (data is Map && data.isNotEmpty) return jsonEncode(data);
    } catch (_) {}
    return res.body.length <= 500 ? res.body : res.body.substring(0, 500);
  }

  Map<String, Object?> _decode(HttpResponse res) {
    Object? decoded;
    try {
      decoded = jsonDecode(res.body);
    } on FormatException catch (e) {
      throw ProtocolError('Response is not valid JSON: ${e.message}');
    }
    if (decoded is Map) return Map<String, Object?>.from(decoded);
    throw ProtocolError('Expected a JSON object, got ${decoded.runtimeType}.');
  }

  RemoteRecord _parseRecord(Object? raw) {
    if (raw is! Map) throw ProtocolError('Record is not a JSON object.');
    final id = raw['id'];
    final store = raw['store'];
    final updated = raw['updated'];
    if (id is! String || updated is! String) {
      throw ProtocolError('Record missing id/updated.');
    }
    // `store` may be absent on projected sweep responses (fields=id,updated).
    final storeStr = store is String ? store : '';
    // data.id is normalized by the engine's `normalizeRemote` (a mismatch
    // becomes a MapFailure and quarantines that record — never fails the
    // whole store). The adapter passes data through verbatim.
    final data = raw['data'];
    final dataMap =
        data is Map ? Map<String, Object?>.from(data) : <String, Object?>{};
    final imgs = raw['imgs'];
    return RemoteRecord(
      id: id,
      store: storeStr,
      updated: updated,
      data: dataMap,
      imgs: imgs is List ? imgs.whereType<String>().toList() : const <String>[],
    );
  }

  /// Real PB batch item shape: `{body: <record>, status: <int>}`.
  PushResult _parsePushResult(Map r, String opId) {
    final status = r['status'];
    final ok = status == 200 || status == 201;
    final body = r['body'];
    return PushResult(
      opId: opId,
      ok: ok,
      record: ok && body is Map ? _parseRecord(body) : null,
      error: ok ? null : _errorFromItem(r),
      pushedJson: ok && body is Map ? jsonEncode(body['data']) : null,
    );
  }

  String? _errorFromItem(Map r) {
    final response = r['response'];
    if (response is Map) {
      final message = response['message'];
      if (message is String && message.isNotEmpty) return message;
    }
    final message = r['message'];
    if (message is String && message.isNotEmpty) return message;
    final status = r['status'];
    return status == null ? 'batch item failed' : 'batch item failed ($status)';
  }
}
