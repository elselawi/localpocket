import 'dart:math';

import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../support/mock_pb_server.dart';
import '../support/pb_helpers.dart';

/// Wire mapping tests.
void main() {
  group('wire mapping', () {
    test('error map each row to typed error', () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      final backend = PocketBaseRawBackend(
          baseUrl: server.baseUrl,
          tokenProvider: TestTokenProvider(),
          stores: const []);
      addTearDown(backend.close);

      // 401 -> AuthError.
      server.authRequired = true;
      await expectLater(
          backend.getRecord(generateRecordId()), throwsA(isA<AuthError>()));
      server.authRequired = false;

      // 404 on a targeted fetch -> NotFoundError (ambiguity).
      await expectLater(
          backend.getRecord(generateRecordId()), throwsA(isA<NotFoundError>()));

      // 403 on a write -> ForbiddenError.
      server.forceWriteStatus = 403;
      await expectLater(
        backend.createRecord(
            id: generateRecordId(), store: 'widgets', dataJson: '{}'),
        throwsA(isA<ForbiddenError>()),
      );

      // 400 validation -> PayloadError.
      server.forceWriteStatus = 400;
      await expectLater(
        backend.createRecord(
            id: generateRecordId(), store: 'widgets', dataJson: '{}'),
        throwsA(isA<PayloadError>()),
      );

      // 429 + Retry-After -> ServerBusyError carrying the header.
      server.forceWriteStatus = 429;
      server.forceRetryAfter = '7';
      await expectLater(
        backend.createRecord(
            id: generateRecordId(), store: 'widgets', dataJson: '{}'),
        throwsA(isA<ServerBusyError>()
            .having((e) => e.retryAfter, 'retryAfter', '7')),
      );
      server.forceWriteStatus = null;
      server.forceRetryAfter = null;

      // 500 -> ServerError.
      server.forceWriteStatus = 500;
      await expectLater(
        backend.createRecord(
            id: generateRecordId(), store: 'widgets', dataJson: '{}'),
        throwsA(isA<ServerError>()),
      );
      server.forceWriteStatus = null;

      // Network failure -> TransientNetworkError.
      final dead = PocketBaseRawBackend(
          baseUrl: Uri.parse('http://127.0.0.1:1'),
          tokenProvider: TestTokenProvider(),
          stores: const []);
      addTearDown(dead.close);
      await expectLater(
        dead.getRecord(generateRecordId()),
        throwsA(isA<TransientNetworkError>()),
      );
    });

    test('roundtrip property random json diff only mutated field', () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      final rng = Random(42);

      Map<String, Object?> randomJson(int depth) {
        final map = <String, Object?>{};
        for (var i = 0; i < 4; i++) {
          switch (rng.nextInt(4)) {
            case 0:
              map['k$i'] = 'v${rng.nextInt(1000)}';
            case 1:
              map['n$i'] = rng.nextInt(100000);
            case 2:
              map['b$i'] = rng.nextBool();
            default:
              map['j$i'] = depth > 0 ? randomJson(depth - 1) : [rng.nextInt(5)];
          }
        }
        return map;
      }

      for (var seed = 0; seed < 5; seed++) {
        final h = await PbEngineHarness.create(server: server);
        addTearDown(h.close);
        final data = <String, Object?>{
          'name': 'n$seed',
          'qty': seed,
          'meta': randomJson(2),
          'tags': ['a', 'b'],
        };
        final id = server.seed(store: 'widgets', data: data);
        final before = data;

        await h.engine.syncNow(); // pull
        await h.pocket.collection('widgets').patch(id, {'name': 'renamed'});
        await h.engine.syncNow(); // push

        final after = server.records[id]!.data;
        // Every non-mutated field is byte-identical; only `name` changed.
        for (final k in before.keys) {
          if (k == 'name') continue;
          expect(after[k], before[k], reason: 'seed $seed field $k preserved');
        }
        expect(after['name'], 'renamed');
      }
    });

    test('archived convention true or omitted never false', () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      final backend = PocketBaseRawBackend(
          baseUrl: server.baseUrl,
          tokenProvider: TestTokenProvider(),
          stores: const []);
      addTearDown(backend.close);

      final live = await backend.createRecord(
          id: generateRecordId(), store: 'widgets', dataJson: '{"name":"a"}');
      expect(live.data.containsKey('archived'), isFalse,
          reason: 'archived=false is OMITTED from the wire');

      final gone = await backend.createRecord(
          id: generateRecordId(),
          store: 'widgets',
          dataJson: '{"name":"b","archived":true}');
      expect(gone.data['archived'], isTrue);
    });

    test('data id must equal top level id asserted', () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      // A legacy/buggy writer stored data.id different from the record id.
      final badId = server
          .seed(store: 'widgets', data: {'id': 'other-id', 'name': 'bad'});
      final goodId = server.seed(store: 'widgets', data: {'name': 'good'});

      final h = await PbEngineHarness.create(server: server);
      addTearDown(h.close);
      await h.engine.syncNow();

      // The mismatched record is quarantined (asserted in normalizeRemote);
      // the good one applies and the store is not stalled.
      final bad =
          await h.pocket.outbox.readSyncRow(h.pocket.db, 'widgets', badId);
      expect(bad!.syncState, SyncState.quarantine);
      expect(await h.pocket.collection('widgets').get(goodId), isNotNull);
      final dl = await h.pocket.db.query('lp_dead_letter',
          where: 'kind = ?', whereArgs: ['map_failure']);
      expect(dl.length, 1);
      expect((dl.single['error'] as String).contains('data.id'), isTrue,
          reason: 'the assertion names the mismatched field');
    });
  });
}
