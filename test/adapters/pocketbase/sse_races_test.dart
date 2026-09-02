import 'dart:async';
import 'dart:convert';

import 'package:localpocket/src/adapters/pocketbase/auth.dart';
import 'package:localpocket/src/adapters/pocketbase/pb_client.dart';
import 'package:localpocket/src/adapters/pocketbase/sse.dart';
import 'package:localpocket/src/adapters/pocketbase/transport.dart';
import 'package:test/test.dart';

import 'fake_transport.dart';
import '../../support/pb_helpers.dart';

/// Realtime SSE handshake / auth / stop races and event validation /
/// ordering, driven through [PbRealtime] over a fake transport.
void main() {
  const handshake = 'id:h1\nevent:PB_CONNECT\ndata:{"clientId":"cid"}\n\n';

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
      Duration backoffBase = const Duration(seconds: 10),
      Duration backoffCap = const Duration(minutes: 5),
      Duration Function(int attempt)? delayFor,
      double Function(int attempt)? jitter}) {
    final client = PbClient(
      transport: fake,
      baseUrl: Uri.parse('https://pb.test'),
      auth: AuthManager(TestTokenProvider()),
    );
    return PbRealtime(
      client: client,
      collectionNames: const ['data'],
      backoffBase: backoffBase,
      backoffCap: backoffCap,
      delayFor: delayFor,
      jitter: jitter ?? (_) => 1.0,
      onGapClosed: onGapClosed ?? () {},
      onEvent: onEvent,
    );
  }

  group('realtime handshake, auth, and stop races', () {
    test('subscribe 204/200 closes the gap and delivers events', () async {
      for (final status in [204, 200]) {
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
        expect(events, hasLength(1), reason: 'subscribe $status: event flows');
        expect(events.single.record.id, 'r1');
      }
    });

    test('subscribe 401/403/500 never closes the gap and reconnects', () async {
      for (final status in [401, 403, 500]) {
        final fake = FakeTransport();
        // A 401 costs one refresh-retry inside the session before the
        // session counts as failed; 403/500 fail immediately.
        if (status == 401) {
          fake.sendStatus(status, '{"message":"x"}');
        }
        fake.sendStatus(status, '{"message":"x"}');
        final events = <PbRealtimeEvent>[];
        final gaps = <int>[];
        final rt = realtime(fake,
            onEvent: events.add,
            onGapClosed: () => gaps.add(1),
            backoffBase: const Duration(milliseconds: 20));
        final first = StreamController<List<int>>();
        fake.streamResponse(StreamedHttpResponse(200, const {}, first.stream));
        await rt.start();
        first.add(utf8.encode(handshake + eventFrame('r1')));
        await Future<void>.delayed(const Duration(milliseconds: 80));

        // A failed subscribe must NOT report a closed gap, and no frame from
        // the failed session may be trusted (the pull is the backstop).
        expect(gaps, isEmpty,
            reason: 'subscribe $status: no false gap-closed signal');
        expect(events, isEmpty,
            reason: 'subscribe $status: failed session delivers nothing');

        // The session ended and the loop reconnected (default empty stream).
        await Future<void>.delayed(const Duration(milliseconds: 60));
        expect(rt.connectCount, greaterThanOrEqualTo(2),
            reason: 'subscribe $status: failed session reconnects');
        await first.close();
        await rt.stop();
      }
    });

    test('subscribe 401 refreshes once and the session recovers in place',
        () async {
      final fake = FakeTransport();
      final controller = StreamController<List<int>>();
      fake.streamResponse(
          StreamedHttpResponse(200, const {}, controller.stream));
      fake.sendStatus(401, '{"message":"unauthorized"}'); // first subscribe
      fake.sendStatus(204); // refresh-retry succeeds

      final events = <PbRealtimeEvent>[];
      final gaps = <int>[];
      final auth = AuthManager(TestTokenProvider());
      final client = _CountingClient(
        transport: fake,
        baseUrl: Uri.parse('https://pb.test'),
        auth: auth,
      );
      final rt = PbRealtime(
        client: client,
        collectionNames: const ['data'],
        jitter: (_) => 1.0,
        onGapClosed: () => gaps.add(1),
        onEvent: events.add,
      );
      await rt.start();
      controller.add(utf8.encode(handshake + eventFrame('r1')));
      await Future<void>.delayed(const Duration(milliseconds: 80));

      // The revoked token was refreshed and the subscribe retried inside the
      // same session — no reconnect, no lost gap signal.
      expect(auth.refreshCount, 1, reason: 'exactly one refresh on 401');
      expect(rt.connectCount, 1,
          reason: 'the session recovers in place, without reconnecting');
      expect(client.authTokenCalls, 1,
          reason: 'no extra token fetch for the refresh-retry');
      expect(gaps, hasLength(1), reason: 'the gap closes on the handshake');
      expect(events.single.record.id, 'r1');
      await controller.close();
      await rt.stop();
    });

    test('subscribe 401 that survives the refresh-retry reconnects', () async {
      final fake = FakeTransport();
      final first = StreamController<List<int>>();
      fake.streamResponse(StreamedHttpResponse(200, const {}, first.stream));
      fake.sendStatus(401, '{"message":"unauthorized"}'); // first subscribe
      fake.sendStatus(401, '{"message":"unauthorized"}'); // refresh-retry

      final events = <PbRealtimeEvent>[];
      final gaps = <int>[];
      final rt = realtime(fake,
          onEvent: events.add,
          onGapClosed: () => gaps.add(1),
          backoffBase: const Duration(milliseconds: 20));
      await rt.start();
      first.add(utf8.encode(handshake + eventFrame('r1')));
      await Future<void>.delayed(const Duration(milliseconds: 80));
      expect(gaps, isEmpty,
          reason: 'a failed subscribe never reports a closed gap');
      expect(events, isEmpty,
          reason: 'no events are trusted from a failed session');

      // The loop reconnected after the failed session.
      await Future<void>.delayed(const Duration(milliseconds: 60));
      expect(rt.connectCount, greaterThanOrEqualTo(2));
      await first.close();
      await rt.stop();
    });

    test('connect 401 refreshes once and retries before counting a failure',
        () async {
      final fake = FakeTransport();
      fake.streamStatus(401); // first connect: revoked token
      final auth = AuthManager(TestTokenProvider());
      final events = <PbRealtimeEvent>[];
      final client = PbClient(
        transport: fake,
        baseUrl: Uri.parse('https://pb.test'),
        auth: auth,
      );
      final rt = PbRealtime(
        client: client,
        collectionNames: const ['data'],
        jitter: (_) => 1.0,
        onGapClosed: () {},
        onEvent: events.add,
      );
      final controller = StreamController<List<int>>();
      fake.streamResponse(
          StreamedHttpResponse(200, const {}, controller.stream));
      await rt.start();
      await Future<void>.delayed(const Duration(milliseconds: 200));
      expect(auth.refreshCount, 1,
          reason: 'a 401 connect refreshes once before the attempt fails');
      expect(rt.connectCount, 1, reason: 'the refresh-retry connects');
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
          onEvent: events.add, backoffBase: const Duration(milliseconds: 20));
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
          onEvent: events.add, backoffBase: const Duration(milliseconds: 20));
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
        backoffBase: const Duration(seconds: 10),
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
          onEvent: events.add, backoffBase: const Duration(milliseconds: 20));
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
    test(
        'records missing or mistyping id/updated are dropped, '
        'and the connection stays usable', () async {
      final fake = FakeTransport();
      final events = <PbRealtimeEvent>[];
      final rt = realtime(fake, onEvent: events.add);
      final controller = StreamController<List<int>>();
      fake.streamResponse(
          StreamedHttpResponse(200, const {}, controller.stream));
      await rt.start();

      // Missing everything; non-string id AND null updated; missing updated.
      const text = '$handshake'
          'event:data\ndata:{"record":{},"action":"update"}\n\n'
          'event:data\ndata:{"record":{"id":5,"store":["x"],"updated":null,"data":"nope","imgs":[1,2,"ok.png"]},"action":"update"}\n\n'
          'event:data\ndata:{"record":{"id":"r3","store":"widgets"},"action":"update"}\n\n'
          // Same policy as the list path: a malformed record is a protocol
          // error dropped at the realtime tail; the periodic pull is the
          // backstop. A later well-formed frame must still deliver.
          'event:data\ndata:{"record":{"id":"r4","store":"widgets","updated":"2026-08-15 10:00:00.000Z","data":{"id":"r4"}},"action":"update"}\n\n';
      controller.add(utf8.encode(text));
      await controller.close();
      await Future<void>.delayed(const Duration(milliseconds: 60));
      await rt.stop();

      expect(events, hasLength(1));
      expect(events.single.record.id, 'r4');
    });

    test('projected fields are tolerated with their defaults', () async {
      final fake = FakeTransport();
      final events = <PbRealtimeEvent>[];
      final rt = realtime(fake, onEvent: events.add);
      final controller = StreamController<List<int>>();
      fake.streamResponse(
          StreamedHttpResponse(200, const {}, controller.stream));
      await rt.start();

      // Valid id/updated; no store, non-map data, and mixed-type attachments
      // entries fall back to their defaults / are filtered.
      const text = '$handshake'
          'event:data\ndata:{"record":{"id":"r1","updated":"2026-08-15 10:00:00.000Z","data":"nope","imgs":[1,2,"ok.png"]},"action":"update"}\n\n';
      controller.add(utf8.encode(text));
      await controller.close();
      await Future<void>.delayed(const Duration(milliseconds: 60));
      await rt.stop();

      expect(events, hasLength(1));
      expect(events.single.record.id, 'r1');
      expect(events.single.record.store, '',
          reason: 'an absent store field tolerates to empty');
      expect(events.single.record.data, isEmpty,
          reason: 'a non-map data field tolerates to empty');
      expect(events.single.record.attachments, ['ok.png'],
          reason: 'non-string attachments entries filtered');
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
        backoffBase: const Duration(seconds: 10),
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

  group('realtime reconnect backoff', () {
    test('delayFor grows exponentially, capped, with jitter in bounds', () {
      final rt = realtime(FakeTransport(),
          onEvent: (_) {},
          backoffBase: const Duration(seconds: 1),
          backoffCap: const Duration(seconds: 8),
          jitter: (_) => 1.0);
      expect(rt.delayFor(1), const Duration(seconds: 1));
      expect(rt.delayFor(2), const Duration(seconds: 2));
      expect(rt.delayFor(3), const Duration(seconds: 4));
      expect(rt.delayFor(4), const Duration(seconds: 8),
          reason: 'doubling is capped at backoffCap');
      expect(rt.delayFor(100), const Duration(seconds: 8),
          reason: 'the cap holds for large attempts');
      expect(rt.delayFor(0), const Duration(seconds: 1),
          reason: 'attempts below 1 behave as attempt 1');
    });

    test('delayFor clamps jitter to 0.5..1.5', () {
      final low = realtime(FakeTransport(),
          onEvent: (_) {},
          backoffBase: const Duration(seconds: 1),
          jitter: (_) => 0.1).delayFor(1);
      final high = realtime(FakeTransport(),
          onEvent: (_) {},
          backoffBase: const Duration(seconds: 1),
          jitter: (_) => 9.9).delayFor(1);
      expect(low, const Duration(milliseconds: 500),
          reason: 'jitter below 0.5 clamps to 0.5');
      expect(high, const Duration(milliseconds: 1500),
          reason: 'jitter above 1.5 clamps to 1.5');
    });

    test('failed connects grow the backoff; a success resets to the base',
        () async {
      final fake = FakeTransport();
      fake.streamError(HttpTransportException('down'));
      fake.streamError(HttpTransportException('down'));
      final recorded = <int>[];
      final controller = StreamController<List<int>>();
      fake.streamResponse(
          StreamedHttpResponse(200, const {}, controller.stream));
      final rt = realtime(fake, onEvent: (_) {}, delayFor: (attempt) {
        recorded.add(attempt);
        return Duration.zero; // no real waiting
      });
      await rt.start();
      await Future<void>.delayed(const Duration(milliseconds: 50));

      // Two consecutive failures request delays for attempt 1 then 2
      // (growing); the third attempt connects (success).
      expect(recorded, [1, 2],
          reason: 'backoff grows across consecutive failures');
      expect(rt.connectCount, 1, reason: 'the third attempt connected');

      // Ending the healthy session reconnects with the RESET (base) delay:
      // the next attempt is 0, not 3 — no growth after a successful connect.
      await controller.close();
      await Future<void>.delayed(const Duration(milliseconds: 30));
      expect(recorded.take(3), [1, 2, 0],
          reason: 'a successful connect resets the backoff to the base');
      expect(recorded.skip(2).every((attempt) => attempt == 0), isTrue,
          reason: 'the backoff never grows again after a success');
      await rt.stop();
    });
  });

  group('realtime frame-tail diagnostics and record validation', () {
    test('a throwing gap-close callback is recorded, never silently dropped',
        () async {
      final fake = FakeTransport();
      fake.sendStatus(204, '{"message":"x"}');
      final events = <PbRealtimeEvent>[];
      final rt = realtime(fake,
          onEvent: events.add,
          onGapClosed: () => throw StateError('gap bookkeeping broke'));
      final controller = StreamController<List<int>>();
      fake.streamResponse(
          StreamedHttpResponse(200, const {}, controller.stream));
      await rt.start();
      controller.add(utf8.encode(handshake + eventFrame('r1')));
      await Future<void>.delayed(const Duration(milliseconds: 50));

      expect(rt.lastUnexpectedError, isA<StateError>(),
          reason: 'the unexpected callback failure is observable');
      expect(rt.lastUnexpectedTrace, isNotNull);
      expect(rt.connectCount, 1,
          reason: 'a bookkeeping failure does not tear down the session');

      // The tail survives: a well-formed frame behind it still delivers.
      controller.add(utf8.encode(eventFrame('r2')));
      await Future<void>.delayed(const Duration(milliseconds: 50));
      expect(events.map((e) => e.record.id), ['r1', 'r2'],
          reason: 'the session and the stream stay healthy');

      await controller.close();
      await rt.stop();
    });

    test('a realtime record without id/updated is dropped, never normalized',
        () async {
      final fake = FakeTransport();
      fake.sendStatus(204, '{"message":"x"}');
      final events = <PbRealtimeEvent>[];
      final rt = realtime(fake, onEvent: events.add);
      final controller = StreamController<List<int>>();
      fake.streamResponse(
          StreamedHttpResponse(200, const {}, controller.stream));
      await rt.start();
      final missingId = eventFrame('ignored', record: {
        'store': 'widgets',
        'updated': '2026-08-15 10:00:00.000Z',
        'data': {'name': 'n'},
      });
      final missingUpdated = eventFrame('ignored', record: {
        'id': 'r9',
        'store': 'widgets',
        'data': {'name': 'n'},
      });
      controller.add(utf8.encode(handshake + missingId + missingUpdated));
      await Future<void>.delayed(const Duration(milliseconds: 50));
      expect(events, isEmpty,
          reason: 'malformed records never reach the fast path');
      expect(rt.lastUnexpectedError, isNull,
          reason: 'a dropped malformed event is expected handling, not an '
              'unexpected failure');
      await controller.close();
      await rt.stop();
    });
  });
}

/// A [PbClient] that counts how many times the realtime layer asks for a
/// token — one fetch per connection attempt.
class _CountingClient extends PbClient {
  _CountingClient(
      {required super.transport, required super.baseUrl, required super.auth});

  /// Number of [authToken] calls (one per `_connectOnce` attempt).
  int authTokenCalls = 0;

  @override
  Future<Token> authToken() {
    authTokenCalls++;
    return super.authToken();
  }
}

/// Delegates to a [FakeTransport] but records when [send] is invoked.
class _RecordingTransport extends HttpTransport {
  _RecordingTransport(this.inner, this.onSend);
  final HttpTransport inner;
  final void Function() onSend;

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
  _GateTransport(this.inner, this.gate);
  final HttpTransport inner;
  final Completer<void> gate;

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
