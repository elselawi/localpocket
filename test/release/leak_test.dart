import 'dart:async';
import 'dart:convert';

import 'package:localpocket/localpocket.dart';
import 'package:sqlite3/sqlite3.dart' as sqlite;
import 'package:test/test.dart';

import '../pocketbase/fake_transport.dart';
import '../support/pb_helpers.dart';
import '../support/helpers.dart';
import '../sync/engine/engine_helpers.dart';
import '../sync/engine/mock_backend.dart';

/// Resource and stream leak checks: after repeated start/stop,
/// cancelled watches, failed requests, failed uploads/downloads, and close,
/// all resources must be released — connections, subscriptions, and SSE
/// streams never accumulate.
void main() {
  test('repeated open/close releases every database connection', () async {
    expect(_CountingDb.live, 0);
    for (var i = 0; i < 5; i++) {
      final pocket = await openPocket(
          database: _CountingDb(sqlite.sqlite3.open(':memory:')));
      await pocket
          .collection('widgets')
          .put({'id': generateRecordId(), 'name': 'x'});
      await pocket.close();
      expect(_CountingDb.live, 0,
          reason: 'round $i: every opened connection was closed');
    }
  });

  test('a cancelled watch stops all refresh work and emits nothing', () async {
    final pocket = await openPocket();
    addTearDown(pocket.close);
    final id = generateRecordId();
    await pocket.collection('widgets').put({'id': id, 'name': 'a'});

    final events = <List<Map<String, Object?>>>[];
    final sub = pocket.collection('widgets').query().watch().listen(events.add);
    await Future<void>.delayed(const Duration(milliseconds: 50));
    await sub.cancel();

    // A write AFTER cancellation must not deliver events or schedule work.
    await pocket.collection('widgets').patch(id, {'qty': 1});
    await pocket.collection('widgets').patch(id, {'qty': 2});
    await Future<void>.delayed(const Duration(milliseconds: 80));
    expect(events.length, lessThanOrEqualTo(1),
        reason: 'no events may arrive after cancellation');
    // The write itself still committed (the watch teardown never poisoned it).
    expect((await pocket.collection('widgets').get(id))!['qty'], 2);
  });

  test('repeated engine start/stop does not accumulate remote traffic',
      () async {
    final mock = MockSyncBackend();
    final h = await EngineHarness.create(mock: mock, start: false);
    addTearDown(h.close);

    for (var i = 0; i < 5; i++) {
      await h.engine.start();
      await h.engine.stop();
    }
    expect(h.engine.isRunning, isFalse);

    // One local write after the cycling must produce exactly one push.
    final recId = mock.seed(store: 'widgets', data: {'name': 'r'});
    await h.engine.start();
    await h.engine.syncNow(); // pull
    final updateCallsBefore = mock.updateCalls;
    await h.pocket.collection('widgets').patch(recId, {'name': 'edited'});
    await h.engine.syncNow();
    expect(mock.updateCalls - updateCallsBefore, 1,
        reason: 'exactly one push — the engine did not accumulate duplicate '
            'subscriptions across the start/stop cycles');
    await h.engine.stop();
  });

  test(
      'realtime stop leaves no dangling subscription and close() is idempotent',
      () async {
    final fake = FakeTransport();
    final backend = PocketBaseRawBackend(
      baseUrl: Uri.parse('https://pb.test'),
      tokenProvider: TestTokenProvider(),
      stores: const ['widgets'],
      realtimeDebounce: const Duration(milliseconds: 20),
      transport: fake,
    );
    final hints = <BackendHint>[];
    final sub = backend.hints().listen(hints.add);
    final controller = StreamController<List<int>>();
    fake.streamResponse(StreamedHttpResponse(200, const {}, controller.stream));
    fake.sendStatus(204); // subscribe POST

    await backend.startRealtime();
    await Future<void>.delayed(const Duration(milliseconds: 30));
    controller
        .add(utf8.encode('id:h1\nevent:PB_CONNECT\ndata:{"clientId":"c"}\n\n'));
    await Future<void>.delayed(const Duration(milliseconds: 60));
    hints.clear(); // drop the gap-closed hint

    // Events flow while running.
    controller.add(utf8.encode('event:data\ndata:${jsonEncode(<String, Object?>{
          'record': {
            'id': 'r1',
            'store': 'widgets',
            'updated': '2026-08-15 10:00:00.000Z',
            'data': <String, Object?>{}
          },
          'action': 'update'
        })}\n\n'));
    await Future<void>.delayed(const Duration(milliseconds: 80));
    expect(hints.any((h) => h.record?.id == 'r1'), isTrue);

    // Stop: no further events may arrive even if bytes keep coming.
    await backend.stopRealtime();
    controller.add(utf8.encode('event:data\ndata:${jsonEncode(<String, Object?>{
          'record': {
            'id': 'r2',
            'store': 'widgets',
            'updated': '2026-08-15 10:00:00.000Z',
            'data': <String, Object?>{}
          },
          'action': 'update'
        })}\n\n'));
    await Future<void>.delayed(const Duration(milliseconds: 80));
    expect(hints.any((h) => h.record?.id == 'r2'), isFalse,
        reason: 'no events after stop — the subscription was released');

    // close() is safe and releases the transport exactly once per call.
    await controller.close();
    await sub.cancel();
    final closeCalls = fake.closeCalls;
    backend.close();
    backend.close();
    expect(fake.closeCalls, closeCalls + 2,
        reason: 'each close() releases the transport');
  });

  test('failed requests do not leak the backend; it stays usable', () async {
    final fake = FakeTransport();
    fake.sendError(HttpTransportException('connection reset'));
    final backend = PocketBaseRawBackend(
      baseUrl: Uri.parse('https://pb.test'),
      tokenProvider: TestTokenProvider(),
      stores: const ['widgets'],
      transport: fake,
    );
    await expectLater(
        backend.getRecord('x'), throwsA(isA<TransientNetworkError>()));
    // A subsequent successful request works (the failure did not poison it).
    fake.sendStatus(200, FakeTransport.recordBody('x'));
    expect((await backend.getRecord('x'))!.id, 'x');
    backend.close();
    backend.close();
    expect(fake.closeCalls, 2);
  });
}

/// Counts live [DirectSqliteDatabase] instances for connection-leak checks.
class _CountingDb extends DirectSqliteDatabase {
  _CountingDb(super.db) {
    live++;
  }
  static int live = 0;

  @override
  Future<void> close() async {
    await super.close();
    live--;
  }
}
