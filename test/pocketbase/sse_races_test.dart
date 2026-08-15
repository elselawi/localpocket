import 'dart:async';
import 'dart:convert';

import 'package:localpocket/pocketbase.dart';
import 'package:test/test.dart';

import 'fake_transport.dart';
import 'pb_helpers.dart';

/// Realtime SSE handshake / auth / stop races and event validation /
/// ordering, driven through [PbRealtime] over a fake transport.
void main() {
  final handshake = 'id:h1\nevent:PB_CONNECT\ndata:{"clientId":"cid"}\n\n';

  String eventFrame(String id,
          {String action = 'update',
          String? store,
          Map<String, Object?>? record}) =>
      'event:data\ndata:${jsonEncode({
            'record': record ??
                {
                  'id': id,
                  'store': store ?? 'widgets',
                  'updated': '2026-08-15 10:00:00.000Z',
                  'data': {'id': id, 'name': 'n'},
                },
            'action': action,
          })}\n\n';

  PbRealtime realtime(FakeTransport fake,
      {required void Function(PbRealtimeEvent) onEvent,
      void Function()? onGapClosed,
      Duration reconnectDelay = const Duration(seconds: 10)}) {
    final client = PbClient(
      transport: fake,
      baseUrl: Uri.parse('https://pb.test'),
      auth: AuthManager(TestTokenProvider()),
    );
    return PbRealtime(
      client: client,
      collectionNames: const ['data'],
      reconnectDelay: reconnectDelay,
      onGapClosed: onGapClosed ?? () {},
      onEvent: onEvent,
    );
  }

  group('realtime handshake, auth, and stop races', () {
    test('subscribe statuses: 204/200 ok; 401/403/500 non-fatal', () async {
      for (final status in [204, 200, 401, 403, 500]) {
        final fake = FakeTransport();
        fake.sendStatus(status, '{"message":"x"}');
        final events = <PbRealtimeEvent>[];
        final gaps = <int>[];
        final rt =
            realtime(fake, onEvent: events.add, onGapClosed: () => gaps.add(1));
        final controller = StreamController<List<int>>();
        fake.streamResponse(
            StreamedHttpResponse(200, const {}, controller.stream));
        await rt.start();
        controller.add(utf8.encode(handshake + eventFrame('r1')));
        await Future<void>.delayed(const Duration(milliseconds: 50));
        await controller.close();
        await Future<void>.delayed(const Duration(milliseconds: 50));
        await rt.stop();

        expect(gaps, hasLength(1), reason: 'subscribe $status: gap closes');
        // 204/200 -> fully subscribed; 401/403/500 -> the failure is
        // swallowed (no crash, no double-completer), and events still flow
        // (the periodic pull remains the backstop).
        expect(events, hasLength(1), reason: 'subscribe $status: no crash');
        expect(events.single.record.id, 'r1');
      }
    });

    test('connect 401 is retried until a 200 arrives', () async {
      final fake = FakeTransport();
      fake.streamStatus(401);
      fake.streamStatus(401);
      final events = <PbRealtimeEvent>[];
      final rt = realtime(fake,
          onEvent: events.add,
          reconnectDelay: const Duration(milliseconds: 20));
      final controller = StreamController<List<int>>();
      fake.streamResponse(
          StreamedHttpResponse(200, const {}, controller.stream));
      await rt.start();
      await Future<void>.delayed(const Duration(milliseconds: 200));
      expect(rt.connectCount, 1, reason: 'retried the 401s, then connected');
      controller.add(utf8.encode(handshake + eventFrame('r1')));
      await controller.close();
      await Future<void>.delayed(const Duration(milliseconds: 40));
      await rt.stop();
      expect(events.single.record.id, 'r1');
    });

    test('reconnect after repeated stream failures', () async {
      final fake = FakeTransport();
      fake.streamError(HttpTransportException('reset'));
      fake.streamError(HttpTransportException('reset'));
      fake.streamError(HttpTransportException('reset'));
      final events = <PbRealtimeEvent>[];
      final rt = realtime(fake,
          onEvent: events.add,
          reconnectDelay: const Duration(milliseconds: 20));
      final controller = StreamController<List<int>>();
      fake.streamResponse(
          StreamedHttpResponse(200, const {}, controller.stream));
      await rt.start();
      await Future<void>.delayed(const Duration(milliseconds: 250));
      expect(rt.connectCount, 1, reason: 'three failures then a success');
      controller.add(utf8.encode(handshake + eventFrame('r1')));
      await controller.close();
      await Future<void>.delayed(const Duration(milliseconds: 40));
      await rt.stop();
      expect(events.single.record.id, 'r1');
    });

    test('callback exceptions never poison the frame tail', () async {
      final fake = FakeTransport();
      final events = <PbRealtimeEvent>[];
      var throws = true;
      final rt = realtime(fake, onEvent: (e) {
        if (throws) {
          throws = false;
          throw StateError('callback exploded');
        }
        events.add(e);
      });
      final controller = StreamController<List<int>>();
      fake.streamResponse(
          StreamedHttpResponse(200, const {}, controller.stream));
      await rt.start();
      controller
          .add(utf8.encode(handshake + eventFrame('r1') + eventFrame('r2')));
      await controller.close();
      await Future<void>.delayed(const Duration(milliseconds: 60));
      await rt.stop();
      // The first callback threw; the second frame still processed.
      expect(events, hasLength(1));
      expect(events.single.record.id, 'r2');
    });

    test('stream error completes the session and reconnects', () async {
      final fake = FakeTransport();
      final events = <PbRealtimeEvent>[];
      final rt = realtime(fake,
          onEvent: events.add,
          reconnectDelay: const Duration(milliseconds: 20));
      final first = StreamController<List<int>>();
      final second = StreamController<List<int>>();
      fake.streamResponse(StreamedHttpResponse(200, const {}, first.stream));
      fake.streamResponse(StreamedHttpResponse(200, const {}, second.stream));
      await rt.start();
      await Future<void>.delayed(const Duration(milliseconds: 30));
      first.addError(StateError('boom'));
      await first.close();
      await Future<void>.delayed(const Duration(milliseconds: 120));
      expect(rt.connectCount, 2, reason: 'reconnected after the error');
      second.add(utf8.encode(handshake + eventFrame('r1')));
      await second.close();
      await Future<void>.delayed(const Duration(milliseconds: 40));
      await rt.stop();
      expect(events.single.record.id, 'r1');
    });

    test('stop during an in-flight connect leaves no dangling session',
        () async {
      final fake = FakeTransport();
      final gate = Completer<void>();
      final controller = StreamController<List<int>>();
      fake.streamResponse(
          StreamedHttpResponse(200, const {}, controller.stream));
      final gated = _GateTransport(fake, gate);
      final client = PbClient(
        transport: gated,
        baseUrl: Uri.parse('https://pb.test'),
        auth: AuthManager(TestTokenProvider()),
      );
      final rt = PbRealtime(
        client: client,
        collectionNames: const ['data'],
        reconnectDelay: const Duration(seconds: 10),
        onGapClosed: () {},
        onEvent: (_) {},
      );
      await rt.start();
      await Future<void>.delayed(const Duration(milliseconds: 20));
      // Stop while the connect is still awaiting openStream.
      await rt.stop();
      gate.complete(); // the late connect is now released
      await Future<void>.delayed(const Duration(milliseconds: 40));
      controller.add(utf8.encode(handshake + eventFrame('r1')));
      await controller.close();
      await Future<void>.delayed(const Duration(milliseconds: 40));
      expect(rt.connectCount, 0, reason: 'never counted a cancelled connect');
    });

    test('no events after stop', () async {
      final fake = FakeTransport();
      final events = <PbRealtimeEvent>[];
      final rt = realtime(fake, onEvent: events.add);
      final controller = StreamController<List<int>>();
      fake.streamResponse(
          StreamedHttpResponse(200, const {}, controller.stream));
      await rt.start();
      await Future<void>.delayed(const Duration(milliseconds: 20));
      await rt.stop();
      controller.add(utf8.encode(handshake + eventFrame('r1')));
      await controller.close();
      await Future<void>.delayed(const Duration(milliseconds: 60));
      expect(events, isEmpty, reason: 'post-stop bytes are never delivered');
    });

    test('natural completion followed by stop has no double-complete error',
        () async {
      final fake = FakeTransport();
      final rt = realtime(fake, onEvent: (_) {});
      final controller = StreamController<List<int>>();
      fake.streamResponse(
          StreamedHttpResponse(200, const {}, controller.stream));
      await rt.start();
      await Future<void>.delayed(const Duration(milliseconds: 20));
      await controller.close(); // natural completion
      await Future<void>.delayed(const Duration(milliseconds: 40));
      await rt.stop(); // must not throw (no double-complete)
      expect(rt.connectCount, 1);
    });

    test('old connection completion does not disturb the new connection',
        () async {
      final fake = FakeTransport();
      final events = <PbRealtimeEvent>[];
      final rt = realtime(fake,
          onEvent: events.add,
          reconnectDelay: const Duration(milliseconds: 20));
      final first = StreamController<List<int>>();
      final second = StreamController<List<int>>();
      fake.streamResponse(StreamedHttpResponse(200, const {}, first.stream));
      fake.streamResponse(StreamedHttpResponse(200, const {}, second.stream));
      await rt.start();
      await Future<void>.delayed(const Duration(milliseconds: 30));
      await first.close(); // old session ends naturally
      await Future<void>.delayed(const Duration(milliseconds: 120));
      expect(rt.connectCount, 2);
      second.add(utf8.encode(handshake + eventFrame('fresh')));
      await second.close();
      await Future<void>.delayed(const Duration(milliseconds: 40));
      await rt.stop();
      expect(events.single.record.id, 'fresh',
          reason: 'the new session delivers; the old one never leaks events');
    });
  });

  group('realtime event validation and ordering', () {
    test('missing/invalid id, store, updated, data, imgs are tolerated',
        () async {
      final fake = FakeTransport();
      final events = <PbRealtimeEvent>[];
      final rt = realtime(fake, onEvent: events.add);
      final controller = StreamController<List<int>>();
      fake.streamResponse(
          StreamedHttpResponse(200, const {}, controller.stream));
      await rt.start();

      final text = '$handshake'
          'event:data\ndata:{"record":{},"action":"update"}\n\n'
          'event:data\ndata:{"record":{"id":5,"store":["x"],"updated":null,"data":"nope","imgs":[1,2,"ok.png"]},"action":"update"}\n\n';
      controller.add(utf8.encode(text));
      await controller.close();
      await Future<void>.delayed(const Duration(milliseconds: 60));
      await rt.stop();

      expect(events, hasLength(2));
      expect(events[0].record.id, '', reason: 'missing id -> empty string');
      expect(events[0].record.store, '');
      expect(events[0].record.updated, '');
      expect(events[0].record.data, isEmpty);
      expect(events[1].record.id, '', reason: 'non-string id -> empty');
      expect(events[1].record.imgs, ['ok.png'],
          reason: 'non-string imgs entries filtered');
    });

    test('event actions outside create/update/delete still delivered',
        () async {
      final fake = FakeTransport();
      final events = <PbRealtimeEvent>[];
      final rt = realtime(fake, onEvent: events.add);
      final controller = StreamController<List<int>>();
      fake.streamResponse(
          StreamedHttpResponse(200, const {}, controller.stream));
      await rt.start();
      controller
          .add(utf8.encode(handshake + eventFrame('r1', action: 'banana')));
      await controller.close();
      await Future<void>.delayed(const Duration(milliseconds: 60));
      await rt.stop();
      expect(events.single.action, 'banana',
          reason:
              'PbRealtime relays the raw action; the backend decides policy');
    });

    test('rapid events for multiple stores arrive in frame order', () async {
      final fake = FakeTransport();
      final order = <String>[];
      final rt = realtime(fake,
          onEvent: (e) => order.add('${e.action}:${e.record.id}'));
      final controller = StreamController<List<int>>();
      fake.streamResponse(
          StreamedHttpResponse(200, const {}, controller.stream));
      await rt.start();
      controller.add(utf8.encode(handshake +
          eventFrame('a1', store: 'storeA') +
          eventFrame('b1', store: 'storeB') +
          eventFrame('a2', store: 'storeA')));
      await controller.close();
      await Future<void>.delayed(const Duration(milliseconds: 60));
      await rt.stop();
      expect(order, ['update:a1', 'update:b1', 'update:a2']);
    });

    test('subscribe completes before any event callback runs', () async {
      final fake = FakeTransport();
      final log = <String>[];
      final recording = _RecordingTransport(fake, () => log.add('subscribe'));
      final client = PbClient(
        transport: recording,
        baseUrl: Uri.parse('https://pb.test'),
        auth: AuthManager(TestTokenProvider()),
      );
      final rt = PbRealtime(
        client: client,
        collectionNames: const ['data'],
        reconnectDelay: const Duration(seconds: 10),
        onGapClosed: () {},
        onEvent: (_) => log.add('event'),
      );
      final controller = StreamController<List<int>>();
      fake.streamResponse(
          StreamedHttpResponse(200, const {}, controller.stream));
      await rt.start();
      controller.add(utf8.encode(handshake + eventFrame('r1')));
      await controller.close();
      await Future<void>.delayed(const Duration(milliseconds: 60));
      await rt.stop();
      expect(log, ['subscribe', 'event'],
          reason: 'the subscribe POST is issued before event processing');
    });

    test('malformed event frames are ignored safely', () async {
      final fake = FakeTransport();
      final events = <PbRealtimeEvent>[];
      final rt = realtime(fake, onEvent: events.add);
      final controller = StreamController<List<int>>();
      fake.streamResponse(
          StreamedHttpResponse(200, const {}, controller.stream));
      await rt.start();
      final text = '$handshake'
          'event:data\ndata:{"record":"not-a-map","action":"update"}\n\n'
          'event:data\ndata:{"record":{},"action":123}\n\n'
          'event:data\ndata:{broken\n\n'
          '${eventFrame('good')}';
      controller.add(utf8.encode(text));
      await controller.close();
      await Future<void>.delayed(const Duration(milliseconds: 60));
      await rt.stop();
      expect(events.single.record.id, 'good',
          reason: 'only the well-formed event was delivered');
    });
  });
}

/// Delegates to a [FakeTransport] but records when [send] is invoked.
class _RecordingTransport extends HttpTransport {
  final HttpTransport inner;
  final void Function() onSend;
  _RecordingTransport(this.inner, this.onSend);

  @override
  Future<HttpResponse> send(HttpRequest request) async {
    onSend();
    return inner.send(request);
  }

  @override
  Future<StreamedHttpResponse> openStream(HttpRequest request) =>
      inner.openStream(request);

  @override
  void close() => inner.close();
}

/// Delegates to a transport but holds [openStream] until the gate completes.
class _GateTransport extends HttpTransport {
  final HttpTransport inner;
  final Completer<void> gate;
  _GateTransport(this.inner, this.gate);

  @override
  Future<StreamedHttpResponse> openStream(HttpRequest request) async {
    await gate.future;
    return inner.openStream(request);
  }

  @override
  Future<HttpResponse> send(HttpRequest request) => inner.send(request);

  @override
  void close() => inner.close();
}
