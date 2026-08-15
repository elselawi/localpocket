/// Realtime: the SSE connection to PocketBase.
///
/// Wire shape: `GET /api/realtime` → `PB_CONNECT:<clientId>` handshake
/// → `POST /api/realtime {clientId, subscriptions}` (token in header AND body)
/// → `event:data` frames `{record, action}` with the full embedded record.
///
/// Missed events are never replayed after a gap (live-verified); every
/// (re)connect therefore reports a gap so the engine re-pulls all stores.
/// The connection auto-reconnects with a fixed backoff.
library;

import 'dart:async';
import 'dart:convert';

import '../sync/sync_backend.dart';
import 'auth.dart';
import 'pb_client.dart';
import 'transport.dart';

/// A parsed realtime event carrying the full embedded record.
class PbRealtimeEvent {
  final String action; // create | update | delete
  final RemoteRecord record;
  const PbRealtimeEvent(this.action, this.record);
}

/// Raw SSE text events decoded from the byte stream.
class _SseFrame {
  final String? clientId; // PB_CONNECT handshake
  final Map<String, Object?>? data; // parsed event data
  _SseFrame({this.clientId, this.data});
}

class PbRealtime {
  final PbClient client;

  /// Remote collection names to subscribe to (PB realtime is per-collection,
  /// e.g. ['data'] — NOT the local store names).
  final List<String> collectionNames;
  final Duration reconnectDelay;

  /// Called after every successful handshake (including the first connect) —
  /// a gap has just closed, so all stores must be re-pulled.
  final void Function() onGapClosed;

  /// Called for every parsed event frame.
  final void Function(PbRealtimeEvent event) onEvent;

  bool _running = false;
  StreamSubscription<List<int>>? _sub;
  Completer<void>? _sessionDone;
  Future<void> _frameTail = Future.value();
  int _connectCount = 0;

  PbRealtime({
    required this.client,
    required this.collectionNames,
    required this.onGapClosed,
    required this.onEvent,
    this.reconnectDelay = const Duration(seconds: 1),
  });

  int get connectCount => _connectCount;

  Future<void> start() async {
    if (_running) return;
    _running = true;
    _runLoop();
  }

  Future<void> stop() async {
    _running = false;
    await _sub?.cancel();
    _sub = null;
    _sessionDone?.complete();
  }

  Future<void> _runLoop() async {
    while (_running) {
      try {
        await _connectOnce();
      } catch (_) {
        // Transport or protocol failure: back off and reconnect.
      }
      if (!_running) break;
      await Future<void>.delayed(reconnectDelay);
    }
  }

  Future<void> _connectOnce() async {
    final token = await client.authToken();
    final req = HttpRequest(
      method: 'GET',
      url: client.baseUrl.resolve('/api/realtime'),
      headers: {'Authorization': 'Bearer ${token.value}'},
    );
    final res = await client.transport.openStream(req);
    if (res.status != 200) {
      throw HttpTransportException('realtime connect status ${res.status}');
    }
    _connectCount++;
    _sessionDone = Completer<void>();

    final parser = _SseParser();
    var handshaken = false;
    _sub = res.stream.listen(
      (chunk) {
        final frames = parser.feed(chunk);
        for (final f in frames) {
          // Serialize frame handling (the subscribe POST must precede any
          // event processing).
          _frameTail = _frameTail.then((_) async {
            await _handleFrame(f, token);
            // A gap has just closed the moment the handshake completes —
            // every store must be re-pulled.
            if (!handshaken && f.clientId != null) {
              handshaken = true;
              onGapClosed();
            }
          });
        }
      },
      onDone: () {
        if (!_sessionDone!.isCompleted) _sessionDone!.complete();
      },
      onError: (Object _) {
        if (!_sessionDone!.isCompleted) _sessionDone!.complete();
      },
    );
    await _sessionDone!.future;
    _sub = null;
  }

  Future<void> _handleFrame(_SseFrame frame, Token token) async {
    final clientId = frame.clientId;
    if (clientId != null) {
      // Handshake: subscribe with token in header AND body.
      final sub = await client.transport.send(HttpRequest(
        method: 'POST',
        url: client.baseUrl.resolve('/api/realtime'),
        headers: {
          'Authorization': 'Bearer ${token.value}',
          'Content-Type': 'application/json',
        },
        body: jsonEncode({
          'clientId': clientId,
          'subscriptions': collectionNames,
        }),
      ));
      if (sub.status != 204 && sub.status != 200) {
        throw HttpTransportException('realtime subscribe status ${sub.status}');
      }
      return;
    }
    final data = frame.data;
    if (data == null) return;
    final action = data['action'];
    if (action is! String) return;
    final record = data['record'];
    if (record is! Map) return;
    try {
      final parsed = _parseRecord(record);
      onEvent(PbRealtimeEvent(action, parsed));
    } catch (_) {
      // Malformed event: ignore; the periodic pull is the backstop.
    }
  }

  RemoteRecord _parseRecord(Map raw) {
    final id = raw['id'];
    final store = raw['store'];
    final updated = raw['updated'];
    final data = raw['data'];
    final imgs = raw['imgs'];
    return RemoteRecord(
      id: id is String ? id : '',
      store: store is String ? store : '',
      updated: updated is String ? updated : '',
      data: data is Map ? Map<String, Object?>.from(data) : const {},
      imgs: imgs is List ? imgs.cast<String>() : const [],
    );
  }
}

/// Incremental SSE text parser: `event:`, `data:`, `:` comments, and the
/// `PB_CONNECT` handshake.
///
/// Handshake wire (live-verified, PB v0.23+):
/// ```
/// id:Gx9jhrjifrA0oYWdBaGVHEdbSLVPPDU4wWUyKEG9
/// event:PB_CONNECT
/// data:{"clientId":"Gx9jhrjifrA0oYWdBaGVHEdbSLVPPDU4wWUyKEG9"}
/// ```
/// Older servers sent a bare `PB_CONNECT:<clientId>` line; both are handled.
class _SseParser {
  final StringBuffer _buffer = StringBuffer();
  String? _event;

  List<_SseFrame> feed(List<int> bytes) {
    _buffer.write(utf8.decode(bytes, allowMalformed: true));
    final text = _buffer.toString();
    final frames = <_SseFrame>[];
    var start = 0;
    while (true) {
      final nl = text.indexOf('\n', start);
      if (nl < 0) break;
      final line = text.substring(start, nl).trimRight();
      start = nl + 1;
      final frame = _dispatchLine(line);
      if (frame != null) frames.add(frame);
    }
    _buffer.clear();
    if (start < text.length) _buffer.write(text.substring(start));
    return frames;
  }

  _SseFrame? _dispatchLine(String line) {
    if (line.startsWith('PB_CONNECT:')) {
      // Legacy plain-line handshake.
      return _SseFrame(clientId: line.substring('PB_CONNECT:'.length).trim());
    }
    if (line.startsWith('event:')) {
      _event = line.substring('event:'.length).trim();
      return null;
    }
    if (line.startsWith('data:')) {
      final json = line.substring('data:'.length).trim();
      if (json.isEmpty) return null;
      try {
        final decoded = jsonDecode(json);
        if (decoded is Map) {
          final map = Map<String, Object?>.from(decoded);
          final event = _event;
          _event = null;
          final clientId = map['clientId'];
          if (event == 'PB_CONNECT' && clientId is String) {
            return _SseFrame(clientId: clientId);
          }
          return _SseFrame(data: map);
        }
      } catch (_) {}
      return null;
    }
    return null; // comments / retry / id / blank
  }
}
