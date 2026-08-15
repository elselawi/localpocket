import 'dart:async';
import 'dart:convert';

import 'package:localpocket/pocketbase.dart';
import 'package:test/test.dart';

import 'fake_transport.dart';
import 'pb_helpers.dart';

/// SSE parser byte/frame matrix: frame splitting at every byte
/// boundary, multibyte UTF-8 split across chunks, CRLF/LF, comments, blank /
/// retry / id lines, multiple data lines, both handshake shapes, and
/// malformed frames. Driven through [PbRealtime] over a fake transport.
void main() {
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

  final handshake = 'id:h1\nevent:PB_CONNECT\ndata:{"clientId":"cid-123"}\n\n';

  String eventFrame(String id, String name,
          {String action = 'update', String? store}) =>
      'event:data\ndata:${jsonEncode({
            'record': {
              'id': id,
              'store': store ?? 'widgets',
              'updated': '2026-08-15 10:00:00.000Z',
              'data': {'id': id, 'name': name},
            },
            'action': action,
          })}\n\n';

  test('frame split at every byte boundary yields one event', () async {
    final fake = FakeTransport();
    final events = <PbRealtimeEvent>[];
    final rt = realtime(fake, onEvent: events.add);
    final controller = StreamController<List<int>>();
    fake.streamResponse(StreamedHttpResponse(200, const {}, controller.stream));
    await rt.start();

    final frame = utf8.encode(handshake + eventFrame('r1', 'n1'));
    for (final b in frame) {
      controller.add([b]);
    }
    await controller.close();
    await Future<void>.delayed(const Duration(milliseconds: 60));
    await rt.stop();

    expect(events, hasLength(1));
    expect(events.single.record.id, 'r1');
    expect(events.single.record.data['name'], 'n1');
    expect(events.single.action, 'update');
  });

  test('multibyte UTF-8 split across chunk boundaries is preserved', () async {
    final fake = FakeTransport();
    final events = <PbRealtimeEvent>[];
    final rt = realtime(fake, onEvent: events.add);
    final controller = StreamController<List<int>>();
    fake.streamResponse(StreamedHttpResponse(200, const {}, controller.stream));
    await rt.start();

    final name = 'héllo 世界 🚀';
    final full = handshake + eventFrame('r1', name);
    final frame = utf8.encode(full);
    // Split INSIDE the first byte of 世: byte offset of the char start + 1.
    final worldIndex = full.indexOf('世界');
    final split = utf8.encode(full.substring(0, worldIndex)).length + 1;
    controller.add(frame.sublist(0, split));
    controller.add(frame.sublist(split));
    await controller.close();
    await Future<void>.delayed(const Duration(milliseconds: 60));
    await rt.stop();

    expect(events, hasLength(1));
    expect(events.single.record.data['name'], name,
        reason: 'no replacement characters from the mid-char split');
    expect(events.single.record.data['name'], isNot(contains('\uFFFD')));
  });

  test('CRLF and LF line endings both parse', () async {
    final fake = FakeTransport();
    final events = <PbRealtimeEvent>[];
    final rt = realtime(fake, onEvent: events.add);
    final controller = StreamController<List<int>>();
    fake.streamResponse(StreamedHttpResponse(200, const {}, controller.stream));
    await rt.start();

    final crlfHandshake =
        'id:h1\r\nevent:PB_CONNECT\r\ndata:{"clientId":"c1"}\r\n\r\n';
    final crlfEvent = eventFrame('r2', 'n2').replaceAll('\n', '\r\n');
    controller.add(utf8.encode(crlfHandshake + crlfEvent));
    await controller.close();
    await Future<void>.delayed(const Duration(milliseconds: 60));
    await rt.stop();

    expect(events.single.record.id, 'r2');
    expect(events.single.record.data['name'], 'n2');
  });

  test('comments, blank, retry, and id lines are ignored', () async {
    final fake = FakeTransport();
    final events = <PbRealtimeEvent>[];
    final gaps = <int>[];
    final rt =
        realtime(fake, onEvent: events.add, onGapClosed: () => gaps.add(1));
    final controller = StreamController<List<int>>();
    fake.streamResponse(StreamedHttpResponse(200, const {}, controller.stream));
    await rt.start();

    final text = ': a comment\nretry: 3000\nid: ignored-id\n\n'
        '$handshake${eventFrame('r3', 'n3')}';
    controller.add(utf8.encode(text));
    await controller.close();
    await Future<void>.delayed(const Duration(milliseconds: 60));
    await rt.stop();

    expect(events.single.record.id, 'r3');
    expect(gaps, hasLength(1), reason: 'exactly one handshake gap close');
  });

  test('multiple data lines are independent frames (pinned behavior)',
      () async {
    final fake = FakeTransport();
    final events = <PbRealtimeEvent>[];
    final rt = realtime(fake, onEvent: events.add);
    final controller = StreamController<List<int>>();
    fake.streamResponse(StreamedHttpResponse(200, const {}, controller.stream));
    await rt.start();

    final text = '$handshake'
        'event:data\ndata:${jsonEncode({
          'record': {
            'id': 'a',
            'store': 'widgets',
            'updated': '2026-08-15 10:00:00.000Z',
            'data': {'id': 'a'}
          },
          'action': 'update'
        })}\n'
        'data:${jsonEncode({
          'record': {
            'id': 'b',
            'store': 'widgets',
            'updated': '2026-08-15 10:00:00.000Z',
            'data': {'id': 'b'}
          },
          'action': 'update'
        })}\n\n';
    controller.add(utf8.encode(text));
    await controller.close();
    await Future<void>.delayed(const Duration(milliseconds: 60));
    await rt.stop();

    // Each data: line produces its own frame (PB always uses one data line
    // per event; this pins the current behavior rather than SSE accumulation).
    expect(events.map((e) => e.record.id), ['a', 'b']);
  });

  test('legacy PB_CONNECT line triggers the subscribe POST', () async {
    final fake = FakeTransport();
    final gaps = <int>[];
    final rt = realtime(fake, onGapClosed: () => gaps.add(1), onEvent: (_) {});
    final controller = StreamController<List<int>>();
    fake.streamResponse(StreamedHttpResponse(200, const {}, controller.stream));
    await rt.start();

    controller.add(utf8.encode('PB_CONNECT:legacy-client\n\n'));
    await Future<void>.delayed(const Duration(milliseconds: 40));
    expect(fake.sends, hasLength(1), reason: 'subscribe POST was sent');
    expect(fake.sends.single.method, 'POST');
    expect(fake.sends.single.url.path, '/api/realtime');
    expect(fake.sends.single.body, contains('legacy-client'));
    await controller.close();
    await rt.stop();
    expect(gaps, hasLength(1));
  });

  test('standard handshake sends the subscribe POST with clientId', () async {
    final fake = FakeTransport();
    final gaps = <int>[];
    final rt = realtime(fake, onGapClosed: () => gaps.add(1), onEvent: (_) {});
    final controller = StreamController<List<int>>();
    fake.streamResponse(StreamedHttpResponse(200, const {}, controller.stream));
    await rt.start();

    controller.add(utf8.encode(handshake));
    await Future<void>.delayed(const Duration(milliseconds: 40));
    expect(fake.sends, hasLength(1));
    final body = jsonDecode(fake.sends.single.body!) as Map;
    expect(body['clientId'], 'cid-123');
    expect(body['subscriptions'], ['data']);
    expect(fake.sends.single.headers['Authorization'], startsWith('Bearer '));
    await controller.close();
    await rt.stop();
    expect(gaps, hasLength(1));
  });

  test('malformed JSON and malformed client ids are ignored safely', () async {
    final fake = FakeTransport();
    final events = <PbRealtimeEvent>[];
    final rt = realtime(fake, onEvent: events.add);
    final controller = StreamController<List<int>>();
    fake.streamResponse(StreamedHttpResponse(200, const {}, controller.stream));
    await rt.start();

    final text = 'event:data\ndata:{not json}\n\n'
        'event:PB_CONNECT\ndata:{"clientId":123}\n\n'
        'event:data\ndata:{"record":{"id":"ok","updated":"2026-08-15 10:00:00.000Z"},"action":"update"}\n\n';
    controller.add(utf8.encode(text));
    await Future<void>.delayed(const Duration(milliseconds: 60));
    // The malformed data line and the malformed handshake produced nothing;
    // only the valid event arrived. The malformed handshake also never sent a
    // subscribe POST.
    expect(events, hasLength(1));
    expect(events.single.record.id, 'ok');
    expect(fake.sends, isEmpty, reason: 'no subscribe for a bad clientId');
    await controller.close();
    await rt.stop();
  });

  test('multiple frames in one chunk deliver in order', () async {
    final fake = FakeTransport();
    final events = <PbRealtimeEvent>[];
    final rt = realtime(fake, onEvent: events.add);
    final controller = StreamController<List<int>>();
    fake.streamResponse(StreamedHttpResponse(200, const {}, controller.stream));
    await rt.start();

    final burst = handshake +
        eventFrame('e1', 'n1') +
        eventFrame('e2', 'n2', action: 'delete') +
        eventFrame('e3', 'n3');
    controller.add(utf8.encode(burst));
    await controller.close();
    await Future<void>.delayed(const Duration(milliseconds: 60));
    await rt.stop();

    expect(events.map((e) => e.record.id), ['e1', 'e2', 'e3']);
    expect(events.map((e) => e.action), ['update', 'delete', 'update']);
  });
}
