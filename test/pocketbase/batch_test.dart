import 'package:localpocket/localpocket.dart';
import 'package:localpocket/pocketbase.dart';
import 'package:localpocket/sync.dart';
import 'package:test/test.dart';

import 'mock_pb_server.dart';
import 'pb_helpers.dart';

/// Batch probe and upsert tests.
void main() {
  group('batch probe & upsert', () {
    test('probe 200 enables batch', () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      final backend = PocketBaseBackend(
          baseUrl: server.baseUrl,
          tokenProvider: TestTokenProvider(),
          stores: const []);
      addTearDown(backend.close);

      expect(backend.capabilities.batchEnabled, isFalse, reason: 'pre-probe');
      await backend.prepare();
      expect(backend.capabilities.batchEnabled, isTrue,
          reason: 'probe 200 enables batch');
    });

    test('probe 403 disables never reprobe', () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      server.batchEnabled = false; // probe answers 403
      final backend = PocketBaseBackend(
          baseUrl: server.baseUrl,
          tokenProvider: TestTokenProvider(),
          stores: const []);
      addTearDown(backend.close);

      await backend.prepare();
      expect(backend.capabilities.batchEnabled, isFalse);

      // The server later enables batch, but a disabled adapter never re-probes.
      server.batchEnabled = true;
      await backend.prepare();
      expect(backend.capabilities.batchEnabled, isFalse,
          reason: '403 disables permanently (no re-probe)');
      expect(server.batchCalls, 1, reason: 'exactly one probe attempt');
    });

    test('upsert put creates and updates by existence', () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      final existing = server.seed(store: 'widgets', data: {'name': 'old'});
      final backend = PocketBaseBackend(
          baseUrl: server.baseUrl,
          tokenProvider: TestTokenProvider(),
          stores: const []);
      addTearDown(backend.close);

      final newId = generateRecordId();
      final results = await backend.pushBatch([
        PushOp(
            opId: 'op-new',
            store: 'widgets',
            id: newId,
            dataJson: '{"name":"brand-new","qty":1}',
            upsert: true),
        PushOp(
            opId: 'op-upd',
            store: 'widgets',
            id: existing,
            dataJson: '{"name":"updated","qty":2}',
            baseUpdated: 'x',
            upsert: true),
      ]);

      expect(results.length, 2);
      expect(results.every((r) => r.ok), isTrue);
      // Create-or-update by existence.
      expect(server.records[newId]!.data['name'], 'brand-new');
      expect(server.records[existing]!.data['name'], 'updated');
      expect(server.records[existing]!.data['qty'], 2);
    });

    test('transactional failure rolls back', () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      server.poisonEnabled = true;
      final goodId = generateRecordId();
      final backend = PocketBaseBackend(
          baseUrl: server.baseUrl,
          tokenProvider: TestTokenProvider(),
          stores: const []);
      addTearDown(backend.close);

      await expectLater(
        backend.pushBatch([
          PushOp(
              opId: 'op-good',
              store: 'widgets',
              id: goodId,
              dataJson: '{"name":"good"}',
              upsert: true),
          PushOp(
              opId: 'op-bad',
              store: 'widgets',
              id: generateRecordId(),
              dataJson: '{"name":"poison"}',
              upsert: true),
        ]),
        throwsA(isA<BatchFailedError>()),
      );
      // Transactional: one bad item -> NOTHING applied.
      expect(server.records.containsKey(goodId), isFalse,
          reason: 'the good op was rolled back with the poison one');
      expect(server.records.length, 0);
    });
  });
}
