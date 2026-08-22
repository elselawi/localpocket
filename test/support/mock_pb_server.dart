/// An in-process PocketBase-wire server for tests.
///
/// Speaks the real PB HTTP contract (list/get/create/update, batch upsert,
/// SSE realtime) so the adapter is exercised over genuine HTTP — no real
/// server needed in CI. Scriptable: auth toggle, batch on/off, poison batch,
/// 2 MB ceiling, server-side permission flips, and an event pusher for SSE.
library;

import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:localpocket/localpocket.dart' show generateRecordId;
import 'package:localpocket/sync.dart';

class PbRecord {
  String id;
  String store;
  Map<String, Object?> data;
  String updated;
  List<String> imgs;
  bool serverHidden; // list/view rule revoked
  bool banned; // rejects writes (for poison testing)

  PbRecord({
    required this.id,
    required this.store,
    required this.data,
    required this.updated,
    this.imgs = const [],
    this.serverHidden = false,
    this.banned = false,
  });

  Map<String, Object?> toJson() => {
        'id': id,
        'store': store,
        'data': data,
        'imgs': imgs,
        'created': updated,
        'updated': updated,
        if (serverHidden) 'hiddenRule': true,
      };
}

/// A single multipart part: form field [name] (+ optional [filename] for
/// file parts) and its raw [bytes].
class _MultipartPart {
  final String name;
  final String? filename;
  final List<int> bytes;
  _MultipartPart(this.name, this.filename, this.bytes);
}

class MockPbServer {
  final Map<String, PbRecord> records = {};
  final Map<String, List<String>> receivedTokens = {};

  /// Uploaded file bytes keyed by `'<recordId>/<serverFilename>'` (the
  /// download route mirrors real PB: `GET /api/files/data/{id}/{filename}`).
  final Map<String, List<int>> fileBytes = {};

  bool authRequired = false;
  String validToken = 'valid-token';

  /// `POST /api/batch` answers 200 (enabled) or 403 (disabled).
  bool batchEnabled = true;

  /// When set, a batch item whose data JSON contains `"poison"` fails the
  /// whole batch transactionally.
  bool poisonEnabled = false;

  /// 2 MB ceiling on `data` payloads.
  int maxDataBytes = 2000000;

  /// When set, every create/update answers this status (error-mapping tests).
  int? forceWriteStatus;
  String? forceRetryAfter;

  /// When non-empty, each batch request consumes the next raw response
  /// `(status, body)` WITHOUT applying the requests. Enables response-contract
  /// tests (empty/short/long/duplicate/unknown-op/malformed-record bodies).
  final List<(int, Object?)> batchResponseScript = [];

  /// Artificial latency before every batch response (default zero). Used to
  /// hold a batch request in-flight so a test can stop the server MID-drain
  /// and observe the client's recovery.
  Duration batchLatency = Duration.zero;

  int listCalls = 0;
  int viewCalls = 0;
  int createCalls = 0;
  int updateCalls = 0;
  int batchCalls = 0;
  int realtimeConnects = 0;
  int subscribePosts = 0;
  final List<String> subscribeBodies = [];
  final List<String> batchBodies = [];

  String? lastFilter;
  String? lastBody;
  String? lastAuthHeader;

  HttpServer? _server;
  final List<HttpResponse> _sseResponses = [];
  final List<Completer<void>> _sseHolders = [];
  final int _clockBase = DateTime.utc(2026, 1, 1).millisecondsSinceEpoch;
  int _tick = 0;

  int get port => _server!.port;
  Uri get baseUrl => Uri.parse('http://127.0.0.1:$port');

  String nextUpdated() => formatPbTimestamp(DateTime.fromMillisecondsSinceEpoch(
      _clockBase + _tick++ * 1000,
      isUtc: true));

  Future<MockPbServer> start({int? port}) async {
    _server = await HttpServer.bind(InternetAddress.loopbackIPv4, port ?? 0,
        shared: true);
    _server!.listen(_handle);
    return this;
  }

  Future<void> stop() async {
    for (final res in List<HttpResponse>.of(_sseResponses)) {
      try {
        await res.close();
      } catch (_) {}
    }
    for (final h in List<Completer<void>>.of(_sseHolders)) {
      if (!h.isCompleted) h.complete();
    }
    _sseResponses.clear();
    _sseHolders.clear();
    await _server?.close(force: true);
    _server = null;
  }

  // ------------------------------------------------------------- seeding --

  String seed({
    required String store,
    Map<String, Object?>? data,
    String? id,
    String? updated,
    List<String>? imgs,
  }) {
    final rid = id ?? generateRecordId();
    records[rid] = PbRecord(
      id: rid,
      store: store,
      data: data ?? const {},
      updated: updated ?? nextUpdated(),
      imgs: imgs ?? const [],
    );
    return rid;
  }

  void mutate(String id, Map<String, Object?> data) {
    final rec = records[id]!;
    rec.data = data;
    rec.updated = nextUpdated();
  }

  void delete(String id) => records.remove(id);

  /// Permission flip: the record vanishes from list AND view.
  void hideServerSide(String id) => records[id]!.serverHidden = true;

  /// Permission restored: visible again, keeping its (possibly stale) updated.
  void restoreServerSide(String id) => records[id]!.serverHidden = false;

  /// Pushes a realtime event to every connected SSE client.
  void pushEvent(
      {required Map<String, Object?> record, required String action}) {
    final frame = 'event:data\ndata:${jsonEncode({
          'record': record,
          'action': action
        })}\n\n';
    for (final res in List<HttpResponse>.of(_sseResponses)) {
      try {
        res.write(frame);
        res.flush();
      } catch (_) {}
    }
  }

  void pushRaw(String text) {
    for (final res in List<HttpResponse>.of(_sseResponses)) {
      try {
        res.write(text);
        res.flush();
      } catch (_) {}
    }
  }

  void closeSse() {
    for (final res in List<HttpResponse>.of(_sseResponses)) {
      try {
        res.close();
      } catch (_) {}
    }
    for (final h in List<Completer<void>>.of(_sseHolders)) {
      if (!h.isCompleted) h.complete();
    }
    _sseResponses.clear();
    _sseHolders.clear();
  }

  // ------------------------------------------------------------- routing --

  Future<void> _handle(HttpRequest req) async {
    final path = req.uri.path;
    final method = req.method;
    try {
      if (path == '/api/realtime' && method == 'GET') {
        await _handleRealtime(req);
        return;
      }
      if (path == '/api/realtime' && method == 'POST') {
        subscribePosts++;
        subscribeBodies.add(await utf8.decoder.bind(req).join());
        req.response.statusCode = 204;
        await req.response.close();
        return;
      }
      if (path == '/api/batch') {
        await _handleBatch(req);
        return;
      }
      if (path == '/api/collections/data/records') {
        if (method == 'GET') {
          await _handleList(req);
        } else if (method == 'POST') {
          await _handleCreate(req);
        } else {
          req.response.statusCode = 405;
          await req.response.close();
        }
        return;
      }
      final recordMatch =
          RegExp(r'^/api/collections/data/records/([^/]+)$').firstMatch(path);
      if (recordMatch != null) {
        final id = Uri.decodeComponent(recordMatch.group(1)!);
        if (method == 'GET') {
          await _handleView(req, id);
        } else if (method == 'PATCH') {
          await _handlePatch(req, id);
        } else {
          req.response.statusCode = 405;
          await req.response.close();
        }
        return;
      }
      final fileMatch =
          RegExp(r'^/api/files/data/([^/]+)/(.+)$').firstMatch(path);
      if (fileMatch != null && method == 'GET') {
        await _handleFileDownload(req,
            Uri.decodeComponent(fileMatch.group(1)!),
            Uri.decodeComponent(fileMatch.group(2)!));
        return;
      }
      req.response.statusCode = 404;
      await req.response.close();
    } catch (_) {
      // Never let one bad request kill the server.
      try {
        req.response.statusCode = 500;
        await req.response.close();
      } catch (_) {}
    }
  }

  bool _authed(HttpRequest req) {
    lastAuthHeader = req.headers.value('authorization');
    if (!authRequired) return true;
    final h = req.headers.value('authorization') ?? '';
    return h == 'Bearer $validToken';
  }

  void _recordToken(HttpRequest req) {
    final h = req.headers.value('authorization');
    if (h != null) {
      receivedTokens.putIfAbsent('header', () => []).add(h);
    }
  }

  // ------------------------------------------------------------- list --

  Future<void> _handleList(HttpRequest req) async {
    listCalls++;
    if (!_authed(req)) return _sendJson(req, 401, {'message': 'Unauthorized'});
    final q = req.uri.queryParameters;
    lastFilter = q['filter'];
    final filter = q['filter'] ?? '';
    final sort = q['sort'] ?? 'updated,id';
    final perPage = int.tryParse(q['perPage'] ?? '200') ?? 200;
    final fields = q['fields'];

    var list = records.values
        .where((r) => !r.serverHidden && _matchesFilter(r, filter))
        .toList();

    if (sort == 'id') {
      list.sort((a, b) => a.id.compareTo(b.id));
    } else {
      list.sort((a, b) {
        final u = a.updated.compareTo(b.updated);
        if (u != 0) return u;
        return a.id.compareTo(b.id);
      });
    }

    final page = list.take(perPage).toList();
    final items = fields == null
        ? page.map((r) => r.toJson()).toList()
        : page.map((r) => _project(r, fields)).toList();
    await _sendJson(req, 200, {
      'page': 1,
      'perPage': perPage,
      'totalItems': list.length,
      'totalPages': (list.length / perPage).ceil(),
      'items': items,
    });
  }

  Map<String, Object?> _project(PbRecord r, String fields) {
    final names = fields.split(',').map((s) => s.trim()).toSet();
    final json = r.toJson();
    return {
      for (final n in names)
        if (json.containsKey(n)) n: json[n],
    };
  }

  /// Minimal PB filter evaluator for the shapes the adapter emits:
  /// `(f='v' && g>='v' [&& h>'v'])` and `(f='v' && id~'a%' [&& id>'v'])`.
  bool _matchesFilter(PbRecord r, String filter) {
    if (filter.isEmpty) return true;
    final inner = filter.trim();
    final noParens = inner.startsWith('(') && inner.endsWith(')')
        ? inner.substring(1, inner.length - 1)
        : inner;
    final parts = _splitAnd(noParens);
    for (final part in parts) {
      if (!_evalPredicate(r, part.trim())) return false;
    }
    return true;
  }

  List<String> _splitAnd(String s) {
    final parts = <String>[];
    var depth = 0;
    var start = 0;
    for (var i = 0; i < s.length; i++) {
      final c = s[i];
      if (c == '(') depth++;
      if (c == ')') depth--;
      if (depth == 0 && c == '&' && i + 1 < s.length && s[i + 1] == '&') {
        parts.add(s.substring(start, i));
        i++;
        start = i + 1;
      }
    }
    parts.add(s.substring(start));
    return parts;
  }

  final _predRe =
      RegExp(r'''^([A-Za-z_][A-Za-z0-9_]*)~?([>=<]+)\s*'((?:[^'\\]|\\.)*)'$''');

  bool _evalPredicate(PbRecord r, String pred) {
    final m = _predRe.firstMatch(pred);
    if (m == null) return true; // unknown syntax: be permissive
    final field = m.group(1)!;
    final op = m.group(2)!;
    final value = _unescape(m.group(3)!);
    final actual = _fieldValue(r, field);
    if (actual == null) return false;
    switch (op) {
      case '=':
        return actual == value;
      case '>=':
        return actual.compareTo(value) >= 0;
      case '>':
        return actual.compareTo(value) > 0;
      case '~':
        if (value.endsWith('%')) {
          return actual.startsWith(value.substring(0, value.length - 1));
        }
        return actual.contains(value);
    }
    return false;
  }

  String? _fieldValue(PbRecord r, String field) {
    switch (field) {
      case 'id':
        return r.id;
      case 'store':
        return r.store;
      case 'updated':
        return r.updated;
    }
    return null;
  }

  /// Decodes one escape: `\\` → `\` and `\'` → `'` (and `\x` → `x`), in a
  /// single left-to-right pass so escaped backslashes never re-interpret the
  /// following escape.
  String _unescape(String s) {
    final b = StringBuffer();
    for (var i = 0; i < s.length; i++) {
      final c = s[i];
      if (c == '\\' && i + 1 < s.length) {
        b.write(s[i + 1]);
        i++;
      } else {
        b.write(c);
      }
    }
    return b.toString();
  }

  // ------------------------------------------------------------- view --

  Future<void> _handleView(HttpRequest req, String id) async {
    viewCalls++;
    if (!_authed(req)) return _sendJson(req, 401, {'message': 'Unauthorized'});
    final r = records[id];
    if (r == null || r.serverHidden) {
      return _sendJson(
          req, 404, {'message': 'The requested resource wasn\'t found.'});
    }
    await _sendJson(req, 200, r.toJson());
  }

  // ------------------------------------------------------------- create --

  Future<void> _handleCreate(HttpRequest req) async {
    createCalls++;
    _recordToken(req);
    if (!_authed(req)) return _sendJson(req, 401, {'message': 'Unauthorized'});
    if (forceWriteStatus != null) {
      final res = req.response;
      res.statusCode = forceWriteStatus!;
      if (forceRetryAfter != null) {
        res.headers.set('Retry-After', forceRetryAfter!);
      }
      res.headers.contentType = ContentType.json;
      res.write(jsonEncode({'message': 'forced status'}));
      await res.close();
      return;
    }
    final body =
        jsonDecode(await utf8.decoder.bind(req).join()) as Map<String, Object?>;
    lastBody = jsonEncode(body);
    final id = body['id'] as String? ?? generateRecordId();
    final store = body['store'] as String? ?? '';
    final data = body['data'] is Map
        ? Map<String, Object?>.from(body['data'] as Map)
        : <String, Object?>{};
    if (_jsonSize(data) > maxDataBytes) {
      return _sendJson(req, 400, {
        'message': 'Payload too large',
        'data': {
          'data': {'code': 'too_large'}
        }
      });
    }
    if (records.containsKey(id)) {
      return _sendJson(req, 400, {
        'message': 'Failed to create record.',
        // Real PB v0.23+ duplicate-id shape (live-verified).
        'data': {
          'id': {
            'code': 'validation_pk_invalid',
            'message': 'The record primary key is invalid or already exists.',
          }
        },
      });
    }
    final rec = PbRecord(
      id: id,
      store: store,
      data: data,
      updated: nextUpdated(),
    );
    records[id] = rec;
    await _sendJson(req, 200, rec.toJson());
  }

  // ------------------------------------------------------------- patch --

  Future<void> _handlePatch(HttpRequest req, String id) async {
    updateCalls++;
    _recordToken(req);
    if (!_authed(req)) return _sendJson(req, 401, {'message': 'Unauthorized'});
    if (forceWriteStatus != null) {
      final res = req.response;
      res.statusCode = forceWriteStatus!;
      if (forceRetryAfter != null) {
        res.headers.set('Retry-After', forceRetryAfter!);
      }
      res.headers.contentType = ContentType.json;
      res.write(jsonEncode({'message': 'forced status'}));
      await res.close();
      return;
    }
    final r = records[id];
    if (r == null) {
      return _sendJson(
          req, 404, {'message': 'The requested resource wasn\'t found.'});
    }
    // Multipart uploads (real PB file modifier contract): `imgs+` FILE parts
    // APPEND server-renamed files, `imgs-` removes by name, `data` merges.
    final ct = req.headers.contentType;
    if (ct?.mimeType == 'multipart/form-data') {
      final raw =
          await req.fold<List<int>>(<int>[], (acc, chunk) => acc..addAll(chunk));
      // Derive the boundary from the BODY's first line (`--<boundary>\r\n`):
      // dart:io's Content-Type parameter parsing can mangle the boundary
      // value, so the actual delimiter used in the body is authoritative.
      final firstCrlf = _indexOf(raw, utf8.encode('\r\n'), 0);
      final firstLine = firstCrlf < 0
          ? ''
          : utf8.decode(raw.sublist(0, firstCrlf), allowMalformed: true);
      final boundary =
          firstLine.startsWith('--') ? firstLine.substring(2) : '';
      final parts = _parseMultipart(raw, boundary);
      for (final part in parts) {
        if (part.name == 'imgs-' && part.filename == null) {
          final names =
              (jsonDecode(utf8.decode(part.bytes)) as List).cast<String>();
          r.imgs = r.imgs.where((n) => !names.contains(n)).toList();
        } else if (part.name == 'imgs+' && part.filename != null) {
          final renamed = 'file_${_tick}_${part.filename}';
          fileBytes['${r.id}/$renamed'] = part.bytes;
          r.imgs = [...r.imgs, renamed];
        } else if (part.name == 'data' && part.filename == null) {
          final data = jsonDecode(utf8.decode(part.bytes));
          if (data is Map) {
            r.data = {
              ...r.data,
              ...Map<String, Object?>.from(data),
            };
          }
        }
      }
      r.updated = nextUpdated(); // file changes re-deliver on the next pull
      await _sendJson(req, 200, r.toJson());
      return;
    }
    final body =
        jsonDecode(await utf8.decoder.bind(req).join()) as Map<String, Object?>;
    lastBody = jsonEncode(body);
    final data = body['data'] is Map
        ? Map<String, Object?>.from(body['data'] as Map)
        : r.data;
    if (_jsonSize(data) > maxDataBytes) {
      return _sendJson(req, 400, {
        'message': 'Payload too large',
        'data': {
          'data': {'code': 'too_large'}
        }
      });
    }
    r.data = data;
    r.updated = nextUpdated();
    await _sendJson(req, 200, r.toJson());
  }

  // ------------------------------------------------------------- batch --

  Future<void> _handleBatch(HttpRequest req) async {
    batchCalls++;
    if (batchLatency > Duration.zero) {
      await Future<void>.delayed(batchLatency);
    }
    _recordToken(req);
    if (!_authed(req)) return _sendJson(req, 401, {'message': 'Unauthorized'});
    final body =
        jsonDecode(await utf8.decoder.bind(req).join()) as Map<String, Object?>;
    lastBody = jsonEncode(body);
    batchBodies.add(jsonEncode(body));
    if (!batchEnabled) {
      return _sendJson(req, 403, {'message': 'The batch API is disabled.'});
    }
    final requests = body['requests'];
    if (requests is! List || requests.isEmpty) {
      return _sendJson(req, 200, {
        'data': {'results': <Object?>[]}
      });
    }

    // Validate every request first (transactional).
    final ops = <Map<String, Object?>>[];
    for (final r in requests) {
      if (r is! Map) continue;
      final method = r['method'];
      final url = r['url'];
      final bodyMap = r['body'];
      if (method != 'PUT' ||
          url != '/api/collections/data/records' ||
          bodyMap is! Map) {
        return _sendJson(req, 400, {'message': 'Unsupported batch request.'});
      }
      final dataJson = jsonEncode(bodyMap['data']);
      if (poisonEnabled && dataJson.contains('"poison"')) {
        return _sendJson(req, 400, {
          'message': 'One or more requests failed.',
          'data': {
            'batch': {'code': 'batch_failed'}
          },
        });
      }
      final data = bodyMap['data'] is Map
          ? Map<String, Object?>.from(bodyMap['data'] as Map)
          : <String, Object?>{};
      if (_jsonSize(data) > maxDataBytes) {
        return _sendJson(req, 400, {'message': 'Payload too large'});
      }
      ops.add({
        'id': bodyMap['id'] as String,
        'store': bodyMap['store'] as String,
        'data': data,
        'dataJson': dataJson,
      });
    }

    // Response-contract scripting: return a canned body without applying.
    if (batchResponseScript.isNotEmpty) {
      final (status, body) = batchResponseScript.removeAt(0);
      return _sendJson(req, status, body ?? <Object?>[]);
    }

    // Apply all atomically (roll back everything on any failure).
    final applied = <String, PbRecord>{};
    for (final op in ops) {
      final id = op['id'] as String;
      final existing = records[id];
      if (existing != null && existing.banned) {
        _rollback(applied);
        return _sendJson(req, 400, {'message': 'One or more requests failed.'});
      }
      final rec = existing ??
          PbRecord(
              id: id,
              store: op['store'] as String,
              data: {},
              updated: nextUpdated());
      rec.data = op['data'] as Map<String, Object?>;
      rec.updated = nextUpdated();
      if (existing == null) records[id] = rec;
      applied[id] = rec;
    }

    final results = [
      for (final op in ops)
        {'body': records[op['id']]!.toJson(), 'status': 200},
    ];
    // Real PB batch response: a top-level array of {body, status}.
    await _sendJson(req, 200, results);
  }

  void _rollback(Map<String, PbRecord> applied) {
    for (final id in applied.keys) {
      records.remove(id);
    }
  }

  // ------------------------------------------------------------- realtime --

  Future<void> _handleRealtime(HttpRequest req) async {
    realtimeConnects++;
    _recordToken(req);
    if (!_authed(req)) return _sendJson(req, 401, {'message': 'Unauthorized'});
    final res = req.response;
    res.statusCode = 200;
    res.headers.contentType =
        ContentType('text', 'event-stream', charset: 'utf-8');
    res.headers.set('Cache-Control', 'no-cache');
    res.contentLength = -1; // chunked: deliver frames incrementally
    res.bufferOutput =
        false; // without this, dart:io buffers chunks until close
    // Real PB v0.23+ handshake (live-verified): an SSE event carrying the
    // 36-char clientId in `data` (older servers used a bare PB_CONNECT line).
    final clientId =
        List.generate(36, (_) => 'abcdefghijklmnopqrstuvwxyz012345'[_tick % 36])
            .join();
    res.write(
        'id:$clientId\nevent:PB_CONNECT\ndata:{"clientId":"$clientId"}\n\n');
    await res.flush();
    // Hold the connection open with a completer (awaiting `res.done` would
    // close the stream before the client reads — dart:io behavior). The
    // holder is released by closeSse()/stop().
    final holder = Completer<void>();
    _sseResponses.add(res);
    _sseHolders.add(holder);
    await holder.future;
    _sseResponses.remove(res);
    _sseHolders.remove(holder);
    try {
      await res.close();
    } catch (_) {}
  }

  // ------------------------------------------------------------- files --

  Future<void> _handleFileDownload(
      HttpRequest req, String recordId, String filename) async {
    if (!_authed(req)) return _sendJson(req, 401, {'message': 'Unauthorized'});
    final bytes = fileBytes['$recordId/$filename'];
    if (bytes == null) {
      return _sendJson(
          req, 404, {'message': 'The requested resource wasn\'t found.'});
    }
    req.response.statusCode = 200;
    req.response.headers.contentType = ContentType.binary;
    req.response.add(bytes);
    await req.response.close();
  }

  // --------------------------------------------------------------- utils --

  /// Minimal `multipart/form-data` parser sufficient for the adapter's file
  /// uploads: split on `--boundary`, read `Content-Disposition` headers, keep
  /// the raw content bytes (binary-safe).
  List<_MultipartPart> _parseMultipart(List<int> body, String boundary) {
    final parts = <_MultipartPart>[];
    final delim = utf8.encode('--$boundary');
    final crlfDelim = [...utf8.encode('\r\n'), ...delim];
    final headerSep = utf8.encode('\r\n\r\n');
    var pos = _indexOf(body, delim, 0);
    if (pos < 0) return parts;
    pos += delim.length;
    while (true) {
      if (pos + 1 < body.length &&
          body[pos] == 0x2d &&
          body[pos + 1] == 0x2d) {
        break; // final `--boundary--`
      }
      if (pos + 1 < body.length &&
          body[pos] == 0x0d &&
          body[pos + 1] == 0x0a) {
        pos += 2;
      } else if (pos < body.length && body[pos] == 0x0a) {
        pos += 1;
      }
      final headerEnd = _indexOf(body, headerSep, pos);
      if (headerEnd < 0) break;
      final headerText =
          utf8.decode(body.sublist(pos, headerEnd), allowMalformed: true);
      String? name;
      String? filename;
      // Case-insensitive: the adapter's multipart writes `content-type` BEFORE
      // `content-disposition` and uses lowercase header names.
      final cd = RegExp(
              r'content-disposition: form-data; name="([^"]*)"(?:; filename="([^"]*)")?',
              caseSensitive: false)
          .firstMatch(headerText);
      if (cd != null) {
        name = cd.group(1);
        filename = cd.group(2);
      }
      pos = headerEnd + headerSep.length;
      final next = _indexOf(body, crlfDelim, pos);
      if (next < 0) break;
      if (name != null) {
        parts.add(_MultipartPart(name, filename, body.sublist(pos, next)));
      }
      pos = next + crlfDelim.length;
    }
    return parts;
  }

  int _indexOf(List<int> haystack, List<int> needle, int start) {
    for (var i = start; i <= haystack.length - needle.length; i++) {
      var match = true;
      for (var j = 0; j < needle.length; j++) {
        if (haystack[i + j] != needle[j]) {
          match = false;
          break;
        }
      }
      if (match) return i;
    }
    return -1;
  }

  int _jsonSize(Map<String, Object?> data) =>
      utf8.encode(jsonEncode(data)).length;

  Future<void> _sendJson(HttpRequest req, int status, Object body) async {
    req.response.statusCode = status;
    req.response.headers.contentType = ContentType.json;
    req.response.write(jsonEncode(body));
    await req.response.close();
  }
}
