import 'dart:async';

import 'package:localpocket/pocketbase.dart';
import 'package:localpocket/sync.dart';
import 'package:test/test.dart';

import 'fake_transport.dart';
import '../support/mock_pb_server.dart';
import '../support/pb_helpers.dart';

/// PocketBase backend prepare/close lifecycle: probing, capability
/// negotiation, page-size behavior, and realtime lifecycle / close hygiene.
void main() {
  group('backend prepare/close lifecycle', () {
    test('concurrent prepare() probes exactly once', () async {
      final fake = FakeTransport();
      fake.sendStatus(200, '[]');
      final b = PocketBaseRawBackend(
        baseUrl: Uri.parse('https://pb.example.test'),
        tokenProvider: TestTokenProvider(),
        stores: const ['widgets'],
        transport: fake,
      );
      addTearDown(b.close);
      await Future.wait([b.prepare(), b.prepare(), b.prepare()]);
      expect(fake.sends.length, 1, reason: 'one probe despite concurrency');
      expect(b.capabilities.batchEnabled, isTrue);
    });

    test('transient probe failure is retried on the next prepare', () async {
      final fake = FakeTransport();
      fake.sendStatus(500, '{"message":"boom"}');
      final b = PocketBaseRawBackend(
        baseUrl: Uri.parse('https://pb.example.test'),
        tokenProvider: TestTokenProvider(),
        stores: const ['widgets'],
        transport: fake,
      );
      addTearDown(b.close);
      await b.prepare();
      expect(b.capabilities.batchEnabled, isFalse);
      expect(fake.sends.length, 1);

      // The next prepare re-probes (the failure was transient).
      fake.sendStatus(200, '[]');
      await b.prepare();
      expect(b.capabilities.batchEnabled, isTrue);
      expect(fake.sends.length, 2);
    });

    test('permanent 403 disablement never re-probes', () async {
      final fake = FakeTransport();
      fake.sendStatus(403, '{"message":"disabled"}');
      final b = PocketBaseRawBackend(
        baseUrl: Uri.parse('https://pb.example.test'),
        tokenProvider: TestTokenProvider(),
        stores: const ['widgets'],
        transport: fake,
      );
      addTearDown(b.close);
      await b.prepare();
      await b.prepare();
      await b.prepare();
      expect(fake.sends.length, 1, reason: '403 -> permanent, no re-probe');
      expect(b.capabilities.batchEnabled, isFalse);
    });

    test('capability values follow the negotiated probe and constructor',
        () async {
      final fake = FakeTransport();
      fake.sendStatus(400, '{"message":"empty batch rejected"}');
      final b = PocketBaseRawBackend(
        baseUrl: Uri.parse('https://pb.example.test'),
        tokenProvider: TestTokenProvider(),
        stores: const ['widgets'],
        maxPage: 77,
        maxBatch: 13,
        transport: fake,
      );
      addTearDown(b.close);
      expect(b.capabilities.batchEnabled, isFalse, reason: 'pre-probe');
      await b.prepare();
      expect(b.capabilities.batchEnabled, isTrue,
          reason: '400 means the batch endpoint is alive');
      expect(b.capabilities.maxPage, 77);
      expect(b.capabilities.maxBatch, 13);
    });

    test('page size is forwarded to the wire perPage parameter', () async {
      final fake = FakeTransport();
      fake.sendStatus(200, '{"items":[]}');
      final b = PocketBaseRawBackend(
        baseUrl: Uri.parse('https://pb.example.test'),
        tokenProvider: TestTokenProvider(),
        stores: const ['widgets'],
        transport: fake,
      );
      addTearDown(b.close);
      await b.listChanges('widgets', perPage: 42);
      expect(fake.sends.single.url.queryParameters['perPage'], '42');
    });

    test('close() is idempotent and closes the hints stream', () async {
      final fake = FakeTransport();
      final b = PocketBaseRawBackend(
        baseUrl: Uri.parse('https://pb.example.test'),
        tokenProvider: TestTokenProvider(),
        stores: const ['widgets'],
        transport: fake,
      );
      var done = false;
      b.hints().listen((_) {}, onDone: () => done = true);
      b.close();
      b.close();
      b.close();
      await Future<void>.delayed(Duration.zero);
      expect(done, isTrue, reason: 'hints stream closed on close()');
      expect(fake.closeCalls, 3, reason: 'transport close called each time');
    });

    test('repeated start/stopRealtime creates fresh connections', () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      final b = PocketBaseRawBackend(
        baseUrl: server.baseUrl,
        tokenProvider: TestTokenProvider(),
        stores: const ['widgets'],
      );
      addTearDown(b.close);

      await b.startRealtime();
      await Future<void>.delayed(const Duration(milliseconds: 120));
      expect(server.realtimeConnects, 1);
      await b.stopRealtime();
      await b.stopRealtime(); // idempotent
      await b.startRealtime();
      await Future<void>.delayed(const Duration(milliseconds: 120));
      expect(server.realtimeConnects, 2, reason: 'a new connection after stop');
    });

    test('natural SSE completion followed by stop is clean', () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      final b = PocketBaseRawBackend(
        baseUrl: server.baseUrl,
        tokenProvider: TestTokenProvider(),
        stores: const ['widgets'],
      );
      addTearDown(b.close);
      await b.startRealtime();
      await Future<void>.delayed(const Duration(milliseconds: 120));
      // The server ends the SSE stream naturally.
      server.closeSse();
      await Future<void>.delayed(const Duration(milliseconds: 300));
      // stop after natural completion must not throw (no double-complete).
      await b.stopRealtime();
      expect(b.hints().isBroadcast, isTrue);
    });

    test('hints after close are dropped, never delivered', () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      final b = PocketBaseRawBackend(
        baseUrl: server.baseUrl,
        tokenProvider: TestTokenProvider(),
        stores: const ['widgets'],
        realtimeDebounce: const Duration(milliseconds: 20),
      );
      await b.startRealtime();
      await Future<void>.delayed(const Duration(milliseconds: 120));
      b.close();
      final hints = <BackendHint>[];
      b.hints().listen(hints.add); // closed stream: never delivers
      server.pushEvent(
        record: {
          'id': 'r9',
          'store': 'widgets',
          'data': {'name': 'x'},
          'updated': server.nextUpdated()
        },
        action: 'update',
      );
      await Future<void>.delayed(const Duration(milliseconds: 150));
      expect(hints, isEmpty, reason: 'no hints after close');
    });

    test('gap-closed hints cover every listed store', () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      final b = PocketBaseRawBackend(
        baseUrl: server.baseUrl,
        tokenProvider: TestTokenProvider(),
        stores: const ['widgets', 'owners'],
        realtimeDebounce: const Duration(milliseconds: 20),
      );
      addTearDown(b.close);
      final hints = <BackendHint>[];
      final sub = b.hints().listen(hints.add);
      await b.startRealtime();
      await Future<void>.delayed(const Duration(milliseconds: 200));
      await sub.cancel();
      expect(hints.map((h) => h.store), containsAll(['widgets', 'owners']),
          reason: 'a gap close hints every configured store');
      expect(hints.map((h) => h.store), isNot(contains('ghosts')),
          reason: 'no hint for a store that was never configured');
    });

    test('an event for an unknown store is dropped at the source (no hint)',
        () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      final b = PocketBaseRawBackend(
        baseUrl: server.baseUrl,
        tokenProvider: TestTokenProvider(),
        stores: const ['widgets'],
        realtimeDebounce: const Duration(milliseconds: 20),
      );
      addTearDown(b.close);
      final hints = <BackendHint>[];
      final sub = b.hints().listen(hints.add);
      await b.startRealtime();
      await Future<void>.delayed(const Duration(milliseconds: 150));
      hints.clear();
      server.pushEvent(
        record: {
          'id': 'r1',
          'store': 'ghosts', // not in the configured stores
          'data': {'name': 'x'},
          'updated': server.nextUpdated()
        },
        action: 'update',
      );
      await Future<void>.delayed(const Duration(milliseconds: 150));
      await sub.cancel();
      expect(hints.any((h) => h.store == 'ghosts'), isFalse,
          reason: 'the remote collection carries every store, but events for '
              'stores this backend does not manage are dropped — relaying '
              'them made the engine schedule a pull cycle for an '
              'unregistered store, which crashed the whole cycle '
              '(StateError from requireTable)');

      // A DELETE event for the same foreign store is dropped before the
      // verify-GET too: no wasted view request, no hint.
      final viewsBefore = server.viewCalls;
      server.pushEvent(
        record: {
          'id': 'r1',
          'store': 'ghosts',
          'data': {'name': 'x'},
          'updated': server.nextUpdated()
        },
        action: 'delete',
      );
      await Future<void>.delayed(const Duration(milliseconds: 150));
      expect(server.viewCalls, viewsBefore,
          reason: 'the foreign delete event never triggered a verify-GET');
      expect(hints.any((h) => h.store == 'ghosts'), isFalse,
          reason: 'the foreign delete event yielded no hint either');
    });

    test('authChanged hints are treated as pull doorbells by the engine',
        () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      final h = await PbEngineHarness.create(
        server: server,
        config: SyncConfig(
          maxPage: 200,
          maxPagesPerPass: 100,
          rewind: const Duration(seconds: 5),
          sweepInterval: const Duration(days: 365),
          syncInterval: const Duration(days: 365),
          pushDebounce: const Duration(milliseconds: 20),
          connectivitySettle: Duration.zero,
          maxBatch: 25,
          maxAttempts: 8,
          backoffBase: const Duration(milliseconds: 50),
          backoffCap: const Duration(minutes: 5),
          jitter: (_) => 1.0,
        ),
      );
      addTearDown(h.close);
      server.seed(store: 'widgets', data: {'name': 'remote'});
      // A doorbell hint (no record) of any non-changed kind schedules a pull.
      h.engine.handleHint(
          const BackendHint('widgets', BackendHintKind.authChanged));
      await Future<void>.delayed(const Duration(milliseconds: 250));
      expect(await h.pocket.collection('widgets').query().all().count(), 1,
          reason: 'authChanged drives a pull');
    });
  });
}
