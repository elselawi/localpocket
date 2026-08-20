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

  group('batch response contract (client level)', () {
    Future<PocketBaseBackend> backend(MockPbServer server) async {
      final b = PocketBaseBackend(
          baseUrl: server.baseUrl,
          tokenProvider: TestTokenProvider(),
          stores: const []);
      addTearDown(b.close);
      await b.prepare();
      return b;
    }

    List<PushOp> twoOps() => [
          PushOp(
              opId: 'a',
              store: 'widgets',
              id: generateRecordId(),
              dataJson: '{"name":"a"}',
              upsert: true),
          PushOp(
              opId: 'b',
              store: 'widgets',
              id: generateRecordId(),
              dataJson: '{"name":"b"}',
              upsert: true),
        ];

    Map<String, Object?> item(String id, String name, {int status = 200}) => {
          'body': {
            'id': id,
            'store': 'widgets',
            'updated': '2026-02-03 04:05:06.000Z',
            'data': {'id': id, 'name': name},
          },
          'status': status,
        };

    test('shorter response is a ProtocolError (exact coverage required)',
        () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      final op0 = generateRecordId();
      server.batchResponseScript.add((
        200,
        [item(op0, 'a')],
      ));
      final b = await backend(server);

      await expectLater(
        b.pushBatch(twoOps()),
        throwsA(isA<ProtocolError>()),
        reason: 'one result for two requests: a missing response is detected',
      );
    });

    test('longer response is a ProtocolError (exact coverage required)',
        () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      final a = generateRecordId();
      final b2 = generateRecordId();
      final c = generateRecordId();
      server.batchResponseScript.add((
        200,
        [
          item(a, 'a'),
          item(b2, 'b'),
          item(c, 'c'),
        ],
      ));
      final b = await backend(server);

      await expectLater(
        b.pushBatch(twoOps()),
        throwsA(isA<ProtocolError>()),
        reason: 'three results for two requests: extra entries are a server bug',
      );
    });

    test('malformed record body raises ProtocolError', () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      server.batchResponseScript.add((
        200,
        [
          {
            'body': {'not': 'a record'},
            'status': 200
          },
        ],
      ));
      final b = await backend(server);

      await expectLater(b.pushBatch(twoOps()), throwsA(isA<ProtocolError>()));
    });

    test('non-list / non-envelope body raises ProtocolError', () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      server.batchResponseScript.add((200, {'not': 'a list'}));
      final b = await backend(server);

      await expectLater(b.pushBatch(twoOps()), throwsA(isA<ProtocolError>()));
    });

    test('per-item 422 maps to a dead-letterable failure with the message',
        () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      server.batchResponseScript.add((
        200,
        [
          {
            'body': null,
            'status': 422,
            'response': {'message': 'validation failed'}
          },
          {'body': null, 'status': 200},
        ],
      ));
      final b = await backend(server);

      final results = await b.pushBatch(twoOps());
      expect(results.length, 2);
      expect(results[0].ok, isFalse);
      expect(results[0].error, contains('validation failed'));
      expect(results[1].ok, isTrue,
          reason: '200 body parses even with null body');
    });

    test('429 maps to ServerBusyError (lane throttling)', () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      server.batchResponseScript.add((429, {'message': 'slow down'}));
      final b = await backend(server);

      await expectLater(b.pushBatch(twoOps()), throwsA(isA<ServerBusyError>()));
    });

    test('500 maps to ServerError', () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      server.batchResponseScript.add((500, {'message': 'boom'}));
      final b = await backend(server);

      await expectLater(b.pushBatch(twoOps()), throwsA(isA<ServerError>()));
    });

    test('422 at the endpoint maps to ProtocolError', () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      server.batchResponseScript.add((422, {'message': 'weird'}));
      final b = await backend(server);

      await expectLater(b.pushBatch(twoOps()), throwsA(isA<ProtocolError>()));
    });

    test('403 maps to ForbiddenError (batch disabled server-side)', () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      server.batchResponseScript.add((403, {'message': 'disabled'}));
      final b = await backend(server);

      await expectLater(b.pushBatch(twoOps()), throwsA(isA<ForbiddenError>()));
    });

    test('400 maps to BatchFailedError (poison validation)', () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      server.batchResponseScript.add((
        400,
        {
          'message': 'One or more requests failed.',
          'data': {
            'batch': {'code': 'batch_failed'}
          },
        },
      ));
      final b = await backend(server);

      await expectLater(
          b.pushBatch(twoOps()), throwsA(isA<BatchFailedError>()));
    });

    test('401 after refresh raises AuthError', () async {
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      server.authRequired = true;
      server.validToken = 'never-valid'; // even the refreshed token is rejected
      final b = await backend(server);

      await expectLater(b.pushBatch(twoOps()), throwsA(isA<AuthError>()));
    });
  });
}
