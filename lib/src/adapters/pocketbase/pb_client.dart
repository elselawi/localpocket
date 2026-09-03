/// PocketBase wire client: list/get/create/update/batch over [HttpTransport]
/// with token injection, single-flight 401 refresh-retry, and typed error
/// mapping. Raw JSON in, typed errors out.
library;

import 'dart:convert';

import '../../kernel/sync/sync_backend.dart';
import 'auth.dart';
import 'field_names.dart';
import 'filter_builder.dart';
import 'transport.dart';

/// {@template localpocket.pb_client}
/// Low-level PocketBase wire client for records, batches, and files.
/// {@endtemplate}
class PbClient {
  /// Creates a PocketBase client over [transport].
  ///
  /// {@macro localpocket.pb_client}
  PbClient(
      {required this.transport,
      required this.baseUrl,
      required this.auth,
      this.fieldNames = const PbFieldNames()});

  /// HTTP transport used for all requests.
  final HttpTransport transport;

  /// PocketBase server base URL.
  final Uri baseUrl;

  /// Authentication manager used to inject and refresh bearer tokens.
  final AuthManager auth;

  /// The wire-field configuration: collection and record field names.
  final PbFieldNames fieldNames;

  /// Returns the currently usable authentication token. A caller-supplied
  /// [TokenProvider] that throws is surfaced as a typed [AuthError] — never
  /// a raw exception escaping into the sync engine.
  Future<Token> authToken() async {
    try {
      return await auth.token();
    } on Object catch (e) {
      throw AuthError('token provider failed: $e');
    }
  }

  // ------------------------------------------------------------------ list --

  /// Lists records using the supplied incremental or prefix cursor.
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
      filter = sweepFilter(store, idPrefix,
          fromId: fromId, storeField: fieldNames.storeField);
    } else {
      final from = fromUpdated ?? '1970-01-01 00:00:00.000Z';
      final base = pullFilter(store, from, storeField: fieldNames.storeField);
      filter = fromId == null ? base : pullPageFilter(base, from, fromId);
    }
    final query = <String, String>{
      'filter': filter,
      'sort': idPrefix == null ? 'updated,id' : 'id',
      // Defense-in-depth: the engine clamps to [pbMaxPage] already, but the
      // wire contract rejects anything above it with a 400 — never send it.
      'perPage': '${perPage.clamp(1, pbMaxPage).toInt()}',
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

  /// Fetches one record by ID.
  Future<RemoteRecord?> getRecord(String id) async {
    final uri = _record(id);
    final res = await _sendAuth('GET', uri);
    if (res.status == 404) throw NotFoundError();
    _expectStatus(res, [200], uri);
    return _parseRecord(_decode(res));
  }

  /// Creates one record with the supplied stable ID and JSON payload.
  Future<RemoteRecord> createRecord({
    required String id,
    required String store,
    required String dataJson,
  }) async {
    final uri = _records();
    final res = await _sendAuth('POST', uri,
        body: jsonEncode({
          'id': id,
          fieldNames.storeField: store,
          fieldNames.dataField: jsonDecode(dataJson),
        }));
    if (res.status == 400 && _isDuplicateId(res)) {
      throw DuplicateIdError(_errorMessage(res));
    }
    _expectStatus(res, [200, 201], uri);
    return _parseRecord(_decode(res));
  }

  /// Duplicate-id shapes (live-verified): PB v0.23+ returns
  /// `data.id.code == 'validation_pk_invalid'`; older builds return
  /// `validation_not_unique`. Any other 400 is a plain validation failure.
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

  /// Updates one record with a JSON payload.
  Future<RemoteRecord> updateRecord({
    required String id,
    required String dataJson,
    String? baseUpdated,
  }) async {
    // [baseUpdated] exists only for contract parity: PocketBase has no
    // conditional writes, so it is ignored here. Concurrent GET → merge →
    // PATCH on a real PB server silently overwrites fields and BOTH clients
    // settle clean — last-write-wins at the wire. The client-side 3-way merge
    // only protects time-serialized pushes or backends that throw
    // [RemoteVersionConflict]; strict OCC must be enforced server-side (PB
    // hook or custom endpoint). See README "Concurrent edits & last-write-wins".
    final uri = _record(id);
    final res = await _sendAuth('PATCH', uri,
        body: jsonEncode({fieldNames.dataField: jsonDecode(dataJson)}));
    _expectStatus(res, [200], uri);
    return _parseRecord(_decode(res));
  }

  /// Updates one record's fields and/or file attachments.
  Future<RemoteRecord> updateRecordFiles({
    required String id,
    String? dataJson,
    Map<String, HttpMultipartFile>? uploads,
    List<String>? keepNames,
    List<String>? removeNames,
  }) async {
    final uri = _record(id);
    final fields = <String, String>{};
    if (dataJson != null) fields[fieldNames.dataField] = dataJson;
    if (keepNames != null) {
      fields['${fieldNames.attachmentsField}+'] = keepNames.join(',');
    }
    if (removeNames != null) {
      fields['${fieldNames.attachmentsField}-'] = jsonEncode(removeNames);
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

  /// Opens a streamed download for a record attachment.
  Future<Stream<List<int>>> downloadFile({
    required String recordId,
    required String filename,
    String? thumb,
  }) async {
    final query = <String, String>{if (thumb != null) 'thumb': thumb};
    final base = baseUrl.resolve(
        '/api/files/${fieldNames.collection}/${Uri.encodeComponent(recordId)}/${Uri.encodeComponent(filename)}');
    final uri = query.isEmpty ? base : base.replace(queryParameters: query);
    final response =
        await _openStreamAuth(HttpRequest(method: 'GET', url: uri));
    if (response.status != 200) {
      // Release the un-consumed body so the transport can reuse the socket.
      try {
        await response.stream
            .listen((_) {})
            .cancel()
            .timeout(const Duration(seconds: 5));
      } catch (_) {}
      throw _mapError(HttpResponse(response.status, response.headers, ''), uri);
    }
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
          'url': '/api/collections/${fieldNames.collection}/records',
          'body': {
            'id': op.id,
            fieldNames.storeField: op.store,
            fieldNames.dataField: jsonDecode(op.dataJson),
          },
        },
    ];
    final res =
        await _sendAuth('POST', uri, body: jsonEncode({'requests': requests}));
    if (res.status == 403) throw ForbiddenError(_errorMessage(res));
    if (res.status == 400) throw BatchFailedError(_errorMessage(res));
    _expectStatus(res, [200], uri);

    // Live-verified: PB batch responds with a top-level array of
    // `{body, status}`, one per request in order. The older
    // `{data:{results:[...]}}` envelope is also accepted for compatibility.
    Object? decoded;
    try {
      decoded = jsonDecode(res.body);
    } on FormatException catch (e) {
      throw ProtocolError('Batch response is not valid JSON: ${e.message}');
    }
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
    // PB answers in REQUEST ORDER (it cannot echo client opIds), so results
    // map back by index. This order-trust is part of the adapter's wire
    // contract with PocketBase (pinned by the batch tests): a future server
    // or proxy that reorders responses would need server-side identifiers
    // before this mapping can change. The array must match the request count
    // exactly: a partial array mapped by index could settle the wrong op.
    if (results.length != ops.length) {
      throw ProtocolError(
          'Batch response has ${results.length} results for ${ops.length} requests.');
    }
    final parsed = <PushResult>[];
    for (var i = 0; i < ops.length; i++) {
      final entry = results[i];
      if (entry is! Map) {
        throw ProtocolError('Batch response entry $i is not a JSON object.');
      }
      parsed.add(_parsePushResult(entry, ops[i].opId));
    }
    return parsed;
  }

  /// Batch capability probe: 403/404/405/501 = the route is disabled or
  /// absent (an old server or one with the batch API turned off) → the
  /// engine falls back to per-record push. 200/3xx/400 (an ENABLED server
  /// answers the empty batch) = enabled. 401 after the refresh-retry is an
  /// auth failure; 408/429/5xx are transient. Both are typed errors so
  /// `prepare()` can re-probe instead of caching a wrong capability.
  ///
  /// Known limit: the probe cannot detect a server that HAS `/api/batch`
  /// but lacks the non-stock collection-level PUT-upsert that [pushBatch]
  /// relies on — such a server dead-letters batches and needs a manual
  /// retry with batch mode disabled.
  Future<bool> probeBatch() async {
    final uri = baseUrl.resolve('/api/batch');
    final res = await _sendAuth('POST', uri,
        body: jsonEncode({'requests': <Object?>[]}));
    if (res.status == 403 ||
        res.status == 404 ||
        res.status == 405 ||
        res.status == 501) {
      return false;
    }
    if (res.status == 401) throw AuthError(_errorMessage(res));
    if (res.status == 408 || res.status == 429 || res.status >= 500) {
      throw TransientNetworkError('batch probe status ${res.status}');
    }
    return true;
  }

  // --------------------------------------------------------------- helpers --

  Uri _records() =>
      baseUrl.resolve('/api/collections/${fieldNames.collection}/records');

  // Must build the full path: `_records().resolve(id)` would resolve against
  // the last segment and drop `records`.
  Uri _record(String id) => baseUrl.resolve(
      '/api/collections/${fieldNames.collection}/records/${Uri.encodeComponent(id)}');

  /// Sends with the bearer token; on 401 refreshes once and retries.
  /// Transport failures map to [TransientNetworkError] for the engine.
  Future<HttpResponse> _sendAuth(String method, Uri uri, {String? body}) =>
      _withAuthRetry((token) => _send(method, uri, token: token, body: body),
          (res) => res.status);

  Future<HttpResponse> _sendMultipartAuth(HttpMultipartRequest request) =>
      _withAuthRetry((token) {
        final authorized = HttpMultipartRequest(
          method: request.method,
          url: request.url,
          headers: {...request.headers, 'Authorization': 'Bearer $token'},
          fields: request.fields,
          files: request.files,
        );
        return transport.sendMultipart(authorized);
      }, (res) => res.status);

  Future<StreamedHttpResponse> _openStreamAuth(HttpRequest request) =>
      _withAuthRetry((token) {
        final authorized = HttpRequest(
          method: request.method,
          url: request.url,
          headers: {...request.headers, 'Authorization': 'Bearer $token'},
          body: request.body,
        );
        return transport.openStream(authorized);
      }, (res) => res.status);

  Future<T> _withAuthRetry<T>(
    Future<T> Function(String token) sendFn,
    int Function(T res) getStatus,
  ) async {
    try {
      final token = await _authToken();
      var res = await sendFn(token.value);
      if (getStatus(res) == 401) {
        final fresh = await _authRefresh();
        res = await sendFn(fresh.value);
      }
      return res;
    } on HttpTransportException catch (e) {
      throw TransientNetworkError(e.message);
    }
  }

  Future<Token> _authToken() async {
    try {
      return await auth.token();
    } on Object catch (e) {
      throw AuthError('token provider failed: $e');
    }
  }

  /// Forces a token refresh (401 / realtime re-auth path). A caller-supplied
  /// [TokenProvider] that throws surfaces as a typed [AuthError].
  Future<Token> refreshAuthToken() async {
    try {
      return await auth.refreshNow();
    } on Object catch (e) {
      throw AuthError('token refresh failed: $e');
    }
  }

  Future<Token> _authRefresh() async => refreshAuthToken();

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

  /// Parses one remote record from a list or realtime payload.
  ///
  /// Wire policy: ABSENT optional fields default (projected sweep responses
  /// legitimately omit `store`/`data`/attachments), but a PRESENT-BUT-
  /// WRONG-TYPED field is a [ProtocolError] — silently defaulting it would
  /// make a misconfigured store field parse every event with `store: ''`
  /// and drop them all while realtime looks healthy.
  static RemoteRecord parseRecord(Object? raw, PbFieldNames fieldNames) {
    if (raw is! Map) throw ProtocolError('Record is not a JSON object.');
    final id = raw['id'];
    final updated = raw['updated'];
    if (id is! String || updated is! String) {
      throw ProtocolError('Record missing id/updated.');
    }
    final sf = fieldNames.storeField;
    final storeVal = raw[sf];
    final String store;
    if (!raw.containsKey(sf) || storeVal == null) {
      store = '';
    } else if (storeVal is String) {
      store = storeVal;
    } else {
      throw ProtocolError('Record field "$sf" is present but not a string.');
    }
    final df = fieldNames.dataField;
    final dataVal = raw[df];
    final Map<String, Object?> data;
    if (!raw.containsKey(df) || dataVal == null) {
      data = const {};
    } else if (dataVal is Map) {
      data = Map<String, Object?>.from(dataVal);
    } else {
      throw ProtocolError('Record field "$df" is present but not an object.');
    }
    final af = fieldNames.attachmentsField;
    final attVal = raw[af];
    final List<String> attachments;
    if (!raw.containsKey(af) || attVal == null) {
      attachments = const [];
    } else if (attVal is List) {
      for (var i = 0; i < attVal.length; i++) {
        if (attVal[i] is! String) {
          throw ProtocolError(
              'Record field "$af"[$i] is present but not a string.');
        }
      }
      attachments = attVal.cast<String>().toList();
    } else {
      throw ProtocolError('Record field "$af" is present but not a list.');
    }
    // data passes through verbatim; the engine's `normalizeRemote`
    // quarantines mismatches instead of failing the whole store.
    return RemoteRecord(
      id: id,
      store: store,
      updated: updated,
      data: data,
      attachments: attachments,
    );
  }

  RemoteRecord _parseRecord(Object? raw) => parseRecord(raw, fieldNames);

  /// Real PB batch item shape: `{body: <record>, status: <int>}`.
  PushResult _parsePushResult(Map<Object?, Object?> r, String opId) {
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

  String? _errorFromItem(Map<Object?, Object?> r) {
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
