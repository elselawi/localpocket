import 'package:localpocket/localpocket.dart';
import 'package:localpocket/pocketbase.dart';
import 'package:localpocket/sync.dart';
import 'package:test/test.dart';

import '../pocketbase/mock_pb_server.dart';
import '../pocketbase/pb_helpers.dart';

/// Wire-contract findings reproduced against the in-process PocketBase-wire
/// server (real HTTP). Facts that need files or a live server's exact rule
/// semantics are deferred to the live suite.
void main() {
  group('contract facts (in-process)', () {
    test('json patch replaces whole data object', () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      final backend = PocketBaseBackend(
          baseUrl: server.baseUrl,
          tokenProvider: TestTokenProvider(),
          stores: const []);
      addTearDown(backend.close);

      final id = server.seed(store: 'widgets', data: {
        'id': '',
        'name': 'orig',
        'qty': 1,
        'meta': {'a': 1}
      });
      // Full-payload discipline: PATCH sends the ENTIRE data.
      await backend.updateRecord(id: id, dataJson: '{"name":"renamed"}');
      expect(server.records[id]!.data['name'], 'renamed');
      expect(server.records[id]!.data.containsKey('qty'), isFalse,
          reason: 'PATCH replaces the whole data object');
      expect(server.records[id]!.data.containsKey('meta'), isFalse);
    });

    test('custom 15-char id create ok', () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      final backend = PocketBaseBackend(
          baseUrl: server.baseUrl,
          tokenProvider: TestTokenProvider(),
          stores: const []);
      addTearDown(backend.close);

      final id = generateRecordId(); // 15 chars [a-z0-9]
      final rec = await backend.createRecord(
          id: id, store: 'widgets', dataJson: '{"name":"x"}');
      expect(rec.id, id, reason: 'client-supplied custom id honored');
      expect(server.records.containsKey(id), isTrue);
    });

    test('duplicate id 400 and error shape', () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      final backend = PocketBaseBackend(
          baseUrl: server.baseUrl,
          tokenProvider: TestTokenProvider(),
          stores: const []);
      addTearDown(backend.close);

      final id = generateRecordId();
      await backend.createRecord(
          id: id, store: 'widgets', dataJson: '{"name":"first"}');
      // The typed DuplicateIdError (not a generic PayloadError) proves the
      // wire 400 carried PB's `data.id.code == validation_not_unique` shape.
      await expectLater(
        backend.createRecord(
            id: id, store: 'widgets', dataJson: '{"name":"second"}'),
        throwsA(isA<DuplicateIdError>()),
      );
      expect(server.records.keys.where((k) => k == id).length, 1,
          reason: 'the first create is untouched');
    });

    test('batch transactional poison rolls back everything', () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      server.poisonEnabled = true;
      final backend = PocketBaseBackend(
          baseUrl: server.baseUrl,
          tokenProvider: TestTokenProvider(),
          stores: const []);
      addTearDown(backend.close);

      final goodId = generateRecordId();
      await expectLater(
        backend.pushBatch([
          PushOp(
              opId: 'good',
              store: 'widgets',
              id: goodId,
              dataJson: '{"name":"good"}',
              upsert: true),
          PushOp(
              opId: 'bad',
              store: 'widgets',
              id: generateRecordId(),
              dataJson: '{"name":"poison"}',
              upsert: true),
        ]),
        throwsA(isA<BatchFailedError>()),
      );
      expect(server.records.containsKey(goodId), isFalse,
          reason: 'one failing item rolls back everything');
    });
  });
}
