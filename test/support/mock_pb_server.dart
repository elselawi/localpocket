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

import 'package:localpocket/src/core/ids.dart'
    show generateRecordId, recordIdPattern;
import 'package:localpocket/src/sync/sync_backend.dart' show formatPbTimestamp;

class PbRecord {
  PbRecord({
    required this.id,
    required this.store,
    required this.data,
    required this.updated,
    this.imgs = const [],
    this.serverHidden = false,
    this.hideFromList = false,
    this.banned = false,
  });

  String id;
  String store;
  Map<String, Object?> data;
  String updated;
  List<String> imgs;
  bool serverHidden; // list/view rule revoked
  bool hideFromList; // list rule only: still GET-able by id (404 on view)
  bool banned; // rejects writes (for poison testing)

  Map<String, Object?> toJson() => {
        'id': id,
        // Real PB echoes collectionId/collectionName on every record payload;
        // normalization must drop these unknown top-level keys.
        'collectionId': 'data',
        'collectionName': 'data',
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
  _MultipartPart(this.name, this.filename, this.bytes);
  final String name;
  final String? filename;
  final List<int> bytes;
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

  /// Mirrors real PB: a batch request with more than this many ops is
  /// rejected with a 400 and the client binary-splits until every op lands
  /// (the live pb.apexo.app server caps at 101).
  int maxBatchRequests = 101;

  /// Mirrors real PB's whole-request body-size cap for the batch endpoint
  /// (32 MB default) — distinct from the per-record [maxDataBytes] ceiling.
  int maxBatchBodyBytes = 33554432;

  /// Mirrors real PB's `_superusers` login route: credentials matching
  /// [superuserEmail]/[superuserPassword] mint a working bearer token.
  String superuserEmail = 'admin@example.com';
  String superuserPassword = 'secret';

  int listCalls = 0;
  int viewCalls = 0;
  int createCalls = 0;
  int updateCalls = 0;
  int batchCalls = 0;
  int realtimeConnects = 0;
  int subscribePosts = 0;
  final List<String> subscribeBodies = [];
  final List<String> batchBodies = [];

  /// Bodies of batch requests that were ACCEPTED (answered 200) — lets an
  /// e2e pin that post-split requests respect the whole-body byte cap.
  final List<String> batchAcceptedBodies = [];

  /// Batch items whose body carried a per-item `Authorization` header. Real
  /// PB IGNORES inner auth headers — every item shares the outer request's
  /// Authorization. A compliant adapter never sends them; the recorder lets
  /// an e2e pin that.
  final List<String> batchItemAuthHeaders = [];

  String? lastFilter;
  String? lastBody;
  String? lastAuthHeader;

  /// Recorders for wire-contract assertions (PB pagination quirks).
  String? lastSort;
  int? lastPerPage;
  int? lastPage;
  int? lastTotalItems;
  int? lastTotalPages;
  String? lastFields;

  /// Invoked after every list response with the current [listCalls] count —
  /// lets a test commit a record (e.g. one with a backdated timestamp)
  /// between the pages of a pull.
  void Function(int listCalls)? onListCall;

  HttpServer? _server;
  final List<HttpResponse> _sseResponses = [];
  final List<Completer<void>> _sseHolders = [];
  final int _clockBase = DateTime.utc(2026, 1, 1).millisecondsSinceEpoch;
  int _tick = 0;
  int _realtimeSeq = 0;

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

  /// List-rule flip only: the record leaves every list response (so pulls
  /// and sweeps never see it) but stays GET-able by id.
  void hideFromListsOnly(String id) => records[id]!.hideFromList = true;

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
        unawaited(res.flush());
      } catch (_) {}
    }
  }

  void pushRaw(String text) {
    for (final res in List<HttpResponse>.of(_sseResponses)) {
      try {
        res.write(text);
        unawaited(res.flush());
      } catch (_) {}
    }
  }

  void closeSse() {
    for (final res in List<HttpResponse>.of(_sseResponses)) {
      try {
        unawaited(res.close());
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
      if (path == '/api/collections/_superusers/auth-with-password') {
        if (method != 'POST') {
          req.response.statusCode = 405;
          await req.response.close();
          return;
        }
        await _handleSuperuserLogin(req);
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
        } else if (method == 'DELETE') {
          // Real PB: DELETE answers 204 with an empty body — never parsed as
          // JSON by the backend.
          records.remove(id);
          req.response.statusCode = 204;
          await req.response.close();
        } else {
          req.response.statusCode = 405;
          await req.response.close();
        }
        return;
      }
      final fileMatch =
          RegExp(r'^/api/files/data/([^/]+)/(.+)$').firstMatch(path);
      if (fileMatch != null && method == 'GET') {
        await _handleFileDownload(req, Uri.decodeComponent(fileMatch.group(1)!),
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

  /// Real PB `_superusers/auth-with-password`: mints a bearer token when the
  /// identity/password match [superuserEmail]/[superuserPassword], otherwise
  /// a 400 "Failed to authenticate." (the AuthError mapping must not depend
  /// on the body text).
  Future<void> _handleSuperuserLogin(HttpRequest req) async {
    final body =
        jsonDecode(await utf8.decoder.bind(req).join()) as Map<String, Object?>;
    if (body['identity'] == superuserEmail &&
        body['password'] == superuserPassword) {
      return _sendJson(req, 200, {
        'token': 'superuser-token',
        'record': {'id': 'su_001', 'email': superuserEmail},
      });
    }
    return _sendJson(req, 400, {'message': 'Failed to authenticate.'});
  }

  Future<void> _handleList(HttpRequest req) async {
    listCalls++;
    if (!_authed(req)) return _sendJson(req, 401, {'message': 'Unauthorized'});
    final q = req.uri.queryParameters;
    lastFilter = q['filter'];
    lastSort = q['sort'] ?? 'updated,id';
    final filter = q['filter'] ?? '';
    final sort = q['sort'] ?? 'updated,id';
    // Real PB pagination quirks: perPage defaults to 30 and is capped at 500
    // (anything above is a 400); `page` beyond the last page is an EMPTY
    // items array, never an error; `skipTotal=1` answers totalItems and
    // totalPages as -1 (a naive client looping on totalPages would loop
    // forever).
    final perPage = int.tryParse(q['perPage'] ?? '') ?? 30;
    final page = int.tryParse(q['page'] ?? '') ?? 1;
    final skipTotal = q['skipTotal'] == '1';
    final fields = q['fields'];
    lastPerPage = perPage;
    lastPage = page;
    if (perPage < 1 || perPage > 500) {
      return _sendJson(req, 400, {
        'message':
            'Invalid perPage value: $perPage (must be between 1 and 500).'
      });
    }

    final list = records.values
        .where((r) =>
            !r.serverHidden && !r.hideFromList && _matchesFilter(r, filter))
        .toList();

    if (sort == 'id') {
      list.sort((a, b) => a.id.compareTo(b.id));
    } else {
      // Real PB orders by `updated,id` — the explicit id tiebreak is what
      // makes the sort stable for same-millisecond timestamps.
      list.sort((a, b) {
        final u = a.updated.compareTo(b.updated);
        if (u != 0) return u;
        return a.id.compareTo(b.id);
      });
    }

    final paged = page < 1
        ? <PbRecord>[]
        : list.skip((page - 1) * perPage).take(perPage).toList();
    final items = fields == null
        ? paged.map((r) => r.toJson()).toList()
        : paged.map((r) => _project(r, fields)).toList();
    lastTotalItems = skipTotal ? -1 : list.length;
    lastTotalPages = skipTotal ? -1 : (list.length / perPage).ceil();
    lastFields = fields;
    await _sendJson(req, 200, {
      'page': page,
      'perPage': perPage,
      'totalItems': lastTotalItems,
      'totalPages': lastTotalPages,
      'items': items,
    });
    // Post-response hook: lets a test commit a record (e.g. one with a
    // backdated timestamp) between the pages of a pull.
    onListCall?.call(listCalls);
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

  /// Matches `field='v'`, `field>='v'`, `field>'v'` AND `field~'v'` (the
  /// tilde and the comparison op are captured separately — the op is empty
  /// for `~`).
  final _predRe = RegExp(
      r'''^([A-Za-z_][A-Za-z0-9_]*)(~?)([>=<]*)\s*'((?:[^'\\]|\\.)*)'$''');

  bool _evalPredicate(PbRecord r, String pred) {
    final m = _predRe.firstMatch(pred);
    if (m == null) return true; // unknown syntax: be permissive
    final field = m.group(1)!;
    final tilde = m.group(2)!;
    final op = m.group(3)!;
    final value = _unescape(m.group(4)!);
    final actual = _fieldValue(r, field);
    if (actual == null) return false;
    if (tilde == '~') {
      // Real PB's `~` auto-wraps in %...% ONLY when the value carries no
      // `%` already; a literal `%` is a LIKE wildcard. The sweep's bucket
      // probe (`id~'a%'`) is a PREFIX match precisely because PB does NOT
      // re-wrap an already-suffixed value.
      if (value.contains('%')) {
        final pattern = value.split('%').map(RegExp.escape).join('.*');
        return RegExp('^$pattern\$').hasMatch(actual);
      }
      return actual.contains(value);
    }
    switch (op) {
      case '=':
        return actual == value;
      case '>=':
        return actual.compareTo(value) >= 0;
      case '>':
        return actual.compareTo(value) > 0;
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

  /// Mirrors real PB's filter escaping (verified live): `\` is an escape ONLY
  /// before `'` (`\'` → `'`); a backslash before any other character is a
  /// LITERAL backslash — `\\` stays two backslashes and `\x` stays `\x`.
  /// Single left-to-right pass.
  String _unescape(String s) {
    final b = StringBuffer();
    for (var i = 0; i < s.length; i++) {
      final c = s[i];
      if (c == '\\' && i + 1 < s.length && s[i + 1] == "'") {
        b.write("'");
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
    final store = body['store'] as String? ?? '';
    final id = body['id'] as String? ?? generateRecordId();
    // Real PB enforces the record-id shape ([a-z0-9]{15}) regardless of any
    // declared pattern: uppercase / wrong-length ids are a 400.
    if (!recordIdPattern.hasMatch(id)) {
      return _sendJson(req, 400, {
        'message': 'Failed to create record.',
        'data': {
          'id': {
            'code': 'validation_invalid_pk',
            'message': 'The record primary key must be [a-z0-9] and 15 chars.',
          }
        },
      });
    }
    final data = body['data'] is Map
        ? Map<String, Object?>.from(body['data']! as Map)
        : <String, Object?>{};
    // PB server-managed timestamps: a client-sent `updated` (top-level in the
    // body) is ignored — the server stamps its own on write.
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
      final raw = await req
          .fold<List<int>>(<int>[], (acc, chunk) => acc..addAll(chunk));
      // Derive the boundary from the BODY's first line (`--<boundary>\r\n`):
      // dart:io's Content-Type parameter parsing can mangle the boundary
      // value, so the actual delimiter used in the body is authoritative.
      final firstCrlf = _indexOf(raw, utf8.encode('\r\n'), 0);
      final firstLine = firstCrlf < 0
          ? ''
          : utf8.decode(raw.sublist(0, firstCrlf), allowMalformed: true);
      final boundary = firstLine.startsWith('--') ? firstLine.substring(2) : '';
      final parts = _parseMultipart(raw, boundary);
      for (final part in parts) {
        if (part.name == 'imgs-' && part.filename == null) {
          final names =
              (jsonDecode(utf8.decode(part.bytes)) as List).cast<String>();
          // Real PB deletes the physical files when their names leave the
          // record's field (a later download answers 404).
          for (final n in names) {
            fileBytes.remove('${r.id}/$n');
          }
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
        ? Map<String, Object?>.from(body['data']! as Map)
        : r.data;
    // PB server-managed timestamps: a client-sent `updated` is ignored and
    // the server stamps its own below.
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
    final rawBody = await utf8.decoder.bind(req).join();
    final body = jsonDecode(rawBody) as Map<String, Object?>;
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
    // Real PB batch ceilings: the request COUNT and the whole-request BODY
    // SIZE are server settings — exceeding either is a 400 (the per-record
    // data ceiling is a separate check below).
    if (requests.length > maxBatchRequests) {
      return _sendJson(req, 400, {
        'message':
            'The request contains more than $maxBatchRequests batch requests.'
      });
    }
    if (utf8.encode(rawBody).length > maxBatchBodyBytes) {
      return _sendJson(req, 400, {
        'message': 'The request body size exceeds the maximum allowed size.'
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
      if (r.containsKey('headers') || r.containsKey('Authorization')) {
        // Real PB silently drops these; we just RECORD the violation.
        batchItemAuthHeaders.add(jsonEncode(r));
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
      // Real PB enforces the record-id shape on batch items too: one bad id
      // fails the WHOLE request transactionally (validated up front).
      final reqId = bodyMap['id'];
      if (reqId is! String || !recordIdPattern.hasMatch(reqId)) {
        return _sendJson(req, 400, {
          'message': 'One or more requests failed.',
          'data': {
            'id': {
              'code': 'validation_invalid_pk',
              'message':
                  'The record primary key must be [a-z0-9] and 15 chars.',
            }
          },
        });
      }
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
      final id = op['id']! as String;
      final existing = records[id];
      if (existing != null && existing.banned) {
        _rollback(applied);
        return _sendJson(req, 400, {'message': 'One or more requests failed.'});
      }
      final rec = existing ??
          PbRecord(
              id: id,
              store: op['store']! as String,
              data: {},
              updated: nextUpdated());
      rec.data = op['data']! as Map<String, Object?>;
      rec.updated = nextUpdated();
      if (existing == null) records[id] = rec;
      applied[id] = rec;
    }

    final results = [
      for (final op in ops)
        {'body': records[op['id']]!.toJson(), 'status': 200},
    ];
    batchAcceptedBodies.add(rawBody);
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
    // Every (re)connect mints a FRESH clientId — the server drops all prior
    // subscriptions with the old connection, so the client MUST re-subscribe.
    final clientId = List.generate(
            36, (_) => 'abcdefghijklmnopqrstuvwxyz012345'[_realtimeSeq % 36])
        .join();
    _realtimeSeq++;
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
      if (pos + 1 < body.length && body[pos] == 0x2d && body[pos + 1] == 0x2d) {
        break; // final `--boundary--`
      }
      if (pos + 1 < body.length && body[pos] == 0x0d && body[pos + 1] == 0x0a) {
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
