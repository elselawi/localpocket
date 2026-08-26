/// Realtime: the SSE connection to PocketBase.
///
/// Wire shape: `GET /api/realtime` → `PB_CONNECT:<clientId>` handshake
/// → `POST /api/realtime {clientId, subscriptions}` (token in header AND body)
/// → `event:data` frames `{record, action}` with the full embedded record.
///
/// Missed events are never replayed after a gap (live-verified); every
/// (re)connect therefore reports a gap so the engine re-pulls all stores.
/// The connection auto-reconnects with exponential backoff + jitter (capped)
/// that resets to the base delay after a successful connect.
library;

import 'dart:async';
import 'dart:convert';
import 'dart:math';
import 'dart:typed_data';

import '../sync/sync_backend.dart';
import 'auth.dart';
import 'pb_client.dart';
import 'transport.dart';

/// A parsed realtime event carrying the full embedded record.
class PbRealtimeEvent {
  /// Creates a realtime event with an [action] and its associated [record].
  const PbRealtimeEvent(this.action, this.record);

  /// The event action (`create`, `update`, or `delete`).
  final String action; // create | update | delete

  /// The remote record payload carried by the event.
  final RemoteRecord record;
}

/// Raw SSE text events decoded from the byte stream.
class _SseFrame {
  _SseFrame({this.clientId, this.data});

  final String? clientId; // PB_CONNECT handshake
  final Map<String, Object?>? data; // parsed event data
}

/// Realtime SSE connection manager to PocketBase.
class PbRealtime {
  /// Creates a new realtime SSE client.
  PbRealtime({
    required this.client,
    required this.collectionNames,
    required this.onGapClosed,
    required this.onEvent,
    this.backoffBase = const Duration(milliseconds: 200),
    this.backoffCap = const Duration(minutes: 5),
    Duration Function(int attempt)? delayFor,
    double Function(int attempt)? jitter,
  })  : jitter = jitter ?? _defaultJitter,
        delayFor = delayFor ??
            _exponentialBackoff(
                backoffBase, backoffCap, jitter ?? _defaultJitter);

  /// PocketBase HTTP client for auth token resolution and transport.
  final PbClient client;

  /// Remote collection names to subscribe to (PB realtime is per-collection,
  /// e.g. ['data'] — NOT the local store names).
  final List<String> collectionNames;

  /// Base delay for the first reconnect after a failure (default 200 ms).
  final Duration backoffBase;

  /// Upper bound for the exponential reconnect backoff (default 5 minutes).
  final Duration backoffCap;

  /// Jitter source, `0.5..1.5` (default uniform). Inject for determinism.
  final double Function(int attempt) jitter;

  /// Reconnect delay for the given failed-connect [attempt] (below 1 treated
  /// as 1). Defaults to exponential backoff mirroring `SyncConfig.delayFor`
  /// (`min(base * 2^(attempt-1), cap) * jitter`); inject for deterministic
  /// tests.
  final Duration Function(int attempt) delayFor;

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

  /// Total number of successful stream connections established.
  int get connectCount => _connectCount;

  /// Starts the realtime connection loop.
  Future<void> start() async {
    if (_running) return;
    _running = true;
    unawaited(_runLoop());
  }

  /// Stops the realtime connection loop and cancels any active subscription.
  Future<void> stop() async {
    _running = false;
    await _sub?.cancel();
    _sub = null;
    final session = _sessionDone;
    if (session != null && !session.isCompleted) {
      session.complete();
    }
  }

  Future<void> _runLoop() async {
    // Consecutive failed connect attempts. Any successful connect resets the
    // backoff to the base delay; failures grow it exponentially (with jitter,
    // capped) so a down server never triggers a reconnect storm.
    var attempt = 0;
    while (_running) {
      try {
        await _connectOnce();
        attempt = 0;
      } catch (_) {
        // Transport or protocol failure: back off and reconnect.
        attempt++;
      }
      if (!_running) break;
      await Future<void>.delayed(delayFor(attempt));
    }
  }

  static double _defaultJitter(int attempt) => 0.5 + Random().nextDouble();

  /// Default reconnect backoff, mirroring `SyncConfig.delayFor`:
  /// `min(base * 2^(attempt-1), cap) * jitter`, with jitter clamped to
  /// `0.5..1.5` and attempts below 1 treated as 1. Overflow-safe.
  static Duration Function(int attempt) _exponentialBackoff(
          Duration base, Duration cap, double Function(int attempt) jitter) =>
      (int attempt) {
        final n = attempt < 1 ? 1 : attempt;
        final baseUs = base.inMicroseconds < 0 ? 0 : base.inMicroseconds;
        final capUs = cap.inMicroseconds < 0 ? 0 : cap.inMicroseconds;
        var exp = baseUs > capUs ? capUs : baseUs;
        for (var i = 1; i < n && exp < capUs; i++) {
          final doubled = exp * 2;
          exp = doubled > capUs ? capUs : doubled;
        }
        final j = jitter(n).clamp(0.5, 1.5).toDouble();
        return Duration(microseconds: (exp * j).round());
      };

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
    // A stop() raced in while the connect was in flight: close the stream
    // without leaving a dangling subscription or a session that never ends.
    if (!_running) {
      final orphan = res.stream.listen((_) {});
      await orphan.cancel();
      return;
    }
    _connectCount++;
    _sessionDone = Completer<void>();

    final parser = _SseParser();
    var handshaken = false;
    var failed = false;
    _sub = res.stream.listen(
      (chunk) {
        final frames = parser.feed(chunk);
        for (final f in frames) {
          // Frame handling is serialized so the subscribe POST always
          // precedes any event processing. A bad frame or a throwing callback
          // must never poison the tail with an unhandled rejection.
          _frameTail = _frameTail.then((_) async {
            if (failed) return;
            try {
              await _handleFrame(f, token);
            } catch (_) {
              // The subscribe POST failed (e.g. 401/5xx): the handshake
              // never completed, so onGapClosed must NOT fire and no frame
              // from this session may be trusted. End the session; _runLoop
              // reconnects with a fresh token.
              failed = true;
              await _sub?.cancel();
              if (!_sessionDone!.isCompleted) _sessionDone!.complete();
              return;
            }
            // Gap-close bookkeeping runs only after a successful handshake;
            // a failed subscribe never reports a closed gap.
            if (!handshaken && f.clientId != null) {
              handshaken = true;
              onGapClosed();
            }
          }).catchError((Object _) {});
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
    if (failed) {
      // The subscribe POST never succeeded, so this attempt must count as a
      // failure: throwing makes _runLoop grow the reconnect backoff instead
      // of resetting it to the base delay.
      throw HttpTransportException('realtime subscribe failed');
    }
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
    if (record is! Map<dynamic, dynamic>) return;
    try {
      final parsed = _parseRecord(record);
      onEvent(PbRealtimeEvent(action, parsed));
    } catch (_) {
      // Malformed event: ignore; the periodic pull is the backstop.
    }
  }

  RemoteRecord _parseRecord(Map<dynamic, dynamic> raw) {
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
      imgs: imgs is List ? imgs.whereType<String>().toList() : const [],
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
///
/// Raw bytes are buffered and decoded LINE by line, so a multibyte UTF-8
/// sequence split across chunk boundaries is reassembled before decoding —
/// decoding each chunk independently would corrupt it into U+FFFD.
class _SseParser {
  final BytesBuilder _buffer = BytesBuilder();
  String? _event;
  final List<String> _data = <String>[];

  List<_SseFrame> feed(List<int> bytes) {
    _buffer.add(bytes);
    final data = _buffer.takeBytes();
    final frames = <_SseFrame>[];
    var start = 0;
    while (true) {
      final nl = _indexOfNewline(data, start);
      if (nl < 0) break;
      final lineBytes = data.sublist(start, nl);
      start = nl + 1;
      // A complete line: 0x0A is never a UTF-8 continuation byte, so a valid
      // multibyte sequence never spans a line boundary. Whole-line decoding
      // therefore preserves Unicode regardless of how the chunks were split.
      final line = utf8.decode(lineBytes, allowMalformed: true).trimRight();
      final frame = _dispatchLine(line);
      if (frame != null) frames.add(frame);
    }
    if (start < data.length) _buffer.add(data.sublist(start));
    return frames;
  }

  int _indexOfNewline(List<int> data, int start) {
    for (var i = start; i < data.length; i++) {
      if (data[i] == 0x0a) return i;
    }
    return -1;
  }

  void _resetFrameState() {
    _event = null;
    _data.clear();
  }

  _SseFrame? _flushFrame() {
    if (_data.isEmpty) {
      _resetFrameState();
      return null;
    }

    final event = _event;
    final payload = _data.join('\n');
    _resetFrameState();

    try {
      final decoded = jsonDecode(payload);
      if (decoded is Map<dynamic, dynamic>) {
        final map = Map<String, Object?>.from(decoded);
        final clientId = map['clientId'];
        if (event == 'PB_CONNECT' && clientId is String) {
          return _SseFrame(clientId: clientId);
        }
        return _SseFrame(data: map);
      }
    } catch (_) {}
    return null;
  }

  _SseFrame? _dispatchLine(String line) {
    if (line.isEmpty) return _flushFrame();
    if (line.startsWith('PB_CONNECT:')) {
      // Legacy plain-line handshake.
      _resetFrameState();
      return _SseFrame(clientId: line.substring('PB_CONNECT:'.length).trim());
    }
    if (line.startsWith(':')) {
      // Ignore comments/keepalive frames; they never carry event payload state.
      return null;
    }
    if (line.startsWith('event:')) {
      _event = line.substring('event:'.length).trim();
      return null;
    }
    if (line.startsWith('data:')) {
      final value = line.substring('data:'.length).trim();
      if (value.isNotEmpty) _data.add(value);
      return null;
    }
    // retry / blank / other metadata are ignored and do not affect active state.
    return null;
  }
}
