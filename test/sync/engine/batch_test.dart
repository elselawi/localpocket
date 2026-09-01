import 'dart:async';

import 'package:localpocket/src/internal/raw_surface.dart';
import 'package:test/test.dart';

import '../../support/mock_pb_server.dart';
import '../../support/pb_helpers.dart';
import '../../support/helpers.dart';
import 'engine_helpers.dart';
import 'mock_backend.dart';

/// Pusher batch-capability, response-contract, and binary-split accounting.
void main() {
  Future<SyncRowState?> sr(LocalPocket pocket, String id) =>
      pocket.outbox.readSyncRow(pocket.db, 'widgets', id);

  Future<List<Map<String, Object?>>> deadLetters(LocalPocket pocket) =>
      pocket.db.query('lp_dead_letter', orderBy: 'at ASC');

  group('batch capability and size negotiation', () {
    test('requests are clamped to the backend maxBatch', () async {
      final mock = MockSyncBackend()..batchEnabled = true;
      final h = await EngineHarness.create(
          mock: mock, config: testConfig(maxBatch: 100));
      addTearDown(h.close);
      mock.maxBatch = 3;

      for (var i = 0; i < 7; i++) {
        await h.pocket.collection('widgets').put(record(name: 'n$i', qty: i));
      }
      final report = await h.engine.syncNow();

      expect(report.pushed, 7, reason: 'all records eventually drain');
      expect(mock.batchCalls, 3, reason: '7 ops / 3 per batch = 3 requests');
      expect(mock.batchSizes, [3, 3, 1],
          reason: 'each request stays within the negotiated maximum');
      expect(await h.engine.syncStore.countPending(), 0);
    });

    test('non-positive backend maxBatch falls back to the config limit',
        () async {
      final mock = MockSyncBackend()..batchEnabled = true;
      final h = await EngineHarness.create(
          mock: mock, config: testConfig(maxBatch: 25));
      addTearDown(h.close);
      mock.maxBatch = 0; // "no explicit ceiling"

      for (var i = 0; i < 4; i++) {
        await h.pocket.collection('widgets').put(record(name: 'n$i'));
      }
      await h.engine.syncNow();

      expect(mock.batchCalls, 1);
      expect(mock.batchSizes, [4], reason: 'config limit applies');
      expect(await h.engine.syncStore.countPending(), 0);
    });

    test('capability changing after start is honored live', () async {
      final mock = MockSyncBackend()..batchEnabled = true;
      final h = await EngineHarness.create(mock: mock);
      addTearDown(h.close);

      for (var i = 0; i < 5; i++) {
        await h.pocket.collection('widgets').put(record(name: 'n$i'));
      }
      mock.maxBatch = 2; // shrinks after the engine started
      await h.engine.syncNow();

      expect(mock.batchSizes, [2, 2, 1]);
      expect(await h.engine.syncStore.countPending(), 0);
    });

    test('config maxBatch smaller than the capability is respected', () async {
      final mock = MockSyncBackend()..batchEnabled = true;
      final h = await EngineHarness.create(
          mock: mock, config: testConfig(maxBatch: 5));
      addTearDown(h.close);
      mock.maxBatch = 2;

      for (var i = 0; i < 5; i++) {
        await h.pocket.collection('widgets').put(record(name: 'n$i'));
      }
      await h.engine.syncNow();

      expect(mock.batchSizes, [2, 2, 1],
          reason: 'min(config, capability) wins');
      expect(await h.engine.syncStore.countPending(), 0);
    });

    test('a 403 on the batch endpoint disables batch and falls back per-record',
        () async {
      final mock = MockSyncBackend()..batchEnabled = true;
      final h = await EngineHarness.create(mock: mock);
      addTearDown(h.close);
      final id1 = generateRecordId();
      final id2 = generateRecordId();
      await h.pocket.collection('widgets').put(record(id: id1, name: 'a'));
      await h.pocket.collection('widgets').put(record(id: id2, name: 'b'));

      // The batch endpoint returns 403 (not the capability probe): the pusher
      // must disable batch for the session and push each op per-record.
      h.mock
          .script('pushBatch', [MockThrow(ForbiddenError('batch forbidden'))]);
      final report = await h.engine.syncNow();

      expect(h.engine.pusher.batchEnabled, isFalse,
          reason: 'a 403 on the batch endpoint disables batch for the session');
      expect(report.pushed, 2,
          reason: 'both ops still push via the per-record fallback');
      expect(report.hadError, isFalse);
      expect(h.mock.batchCalls, 1, reason: 'exactly one batch attempt');
      expect(h.mock.createCalls, 2,
          reason: 'each op falls back to a per-record create');
      expect((await sr(h.pocket, id1))!.syncState, SyncState.clean);
      expect((await sr(h.pocket, id2))!.syncState, SyncState.clean);
      expect(h.mock.records.containsKey(id1), isTrue);
      expect(h.mock.records.containsKey(id2), isTrue);

      // The session stays in per-record mode: later cycles never re-batch.
      final id3 = generateRecordId();
      await h.pocket.collection('widgets').put(record(id: id3, name: 'c'));
      final report2 = await h.engine.syncNow();
      expect(report2.pushed, 1);
      expect(h.mock.batchCalls, 1,
          reason: 'batch stays disabled for the session');
      expect(h.mock.createCalls, 3);
    });
  });

  group('batch response contract matrix', () {
    Future<(EngineHarness, List<String>)> threeCreates() async {
      final mock = MockSyncBackend()..batchEnabled = true;
      final h = await EngineHarness.create(mock: mock);
      final ids = <String>[];
      for (var i = 0; i < 3; i++) {
        final id = generateRecordId();
        ids.add(id);
        await h.pocket.collection('widgets').put(record(id: id, name: 'n$i'));
      }
      return (h, ids);
    }

    Future<String> opIdFor(EngineHarness h, String id) async =>
        (await h.pocket.outbox.readOp(h.pocket.db, 'widgets', id))!.opId;

    test('empty response leaves every op pending (retryable)', () async {
      final (h, ids) = await threeCreates();
      addTearDown(h.close);
      h.mock.script('pushBatch', [MockReturn(const <PushResult>[])]);

      final report = await h.engine.syncNow();
      expect(report.pushed, 0);
      expect(report.deadLettered, 0);
      expect(report.hadError, isFalse);
      for (final id in ids) {
        expect((await sr(h.pocket, id))!.syncState, SyncState.dirty,
            reason: '$id not settled by an empty response');
        expect(await h.pocket.outbox.readOp(h.pocket.db, 'widgets', id),
            isNotNull);
      }
      expect(await deadLetters(h.pocket), isEmpty);

      // A healthy retry converges.
      h.mock.script('pushBatch', const []);
      await h.engine.syncNow();
      expect(await h.engine.syncStore.countPending(), 0);
    });

    test('shorter response settles only the ops it names', () async {
      final (h, ids) = await threeCreates();
      addTearDown(h.close);
      final op0 = await opIdFor(h, ids[0]);
      const updated = '2026-02-03 04:05:06.000Z';
      h.mock.script('pushBatch', [
        MockReturn([
          PushResult(
              opId: op0,
              ok: true,
              record: RemoteRecord(
                  id: ids[0],
                  store: 'widgets',
                  updated: updated,
                  data: {'id': ids[0], 'name': 'n0'}),
              pushedJson: null)
        ])
      ]);

      await h.engine.syncNow();
      expect((await sr(h.pocket, ids[0]))!.syncState, SyncState.clean);
      for (final id in ids.skip(1)) {
        expect((await sr(h.pocket, id))!.syncState, SyncState.dirty,
            reason: 'op not named in the response stays pending');
      }
      expect(await deadLetters(h.pocket), isEmpty);

      // The unnamed ops drain on the next cycle.
      h.mock.script('pushBatch', const []);
      await h.engine.syncNow();
      expect(await h.engine.syncStore.countPending(), 0);
    });

    test('unknown op in the response retries the whole request', () async {
      var clock = 1000000;
      final mock = MockSyncBackend()..batchEnabled = true;
      final h = await EngineHarness.create(
          mock: mock,
          config: testConfig(
              backoffBase: const Duration(seconds: 1), now: () => clock));
      addTearDown(h.close);
      final ids = <String>[];
      for (var i = 0; i < 3; i++) {
        final id = generateRecordId();
        ids.add(id);
        await h.pocket.collection('widgets').put(record(id: id, name: 'n$i'));
      }
      final op0 = await opIdFor(h, ids[0]);
      h.mock.script('pushBatch', [
        MockReturn([
          PushResult(
              opId: op0,
              ok: true,
              record: RemoteRecord(
                  id: ids[0],
                  store: 'widgets',
                  updated: '2026-02-03 04:05:06.000Z',
                  data: {'id': ids[0], 'name': 'n0'}),
              pushedJson: null),
          // A response entry for an op we never sent: contract violation.
          PushResult(
              opId: 'never-sent',
              ok: true,
              record: RemoteRecord(
                  id: 'x',
                  store: 'widgets',
                  updated: '2026-02-03 04:05:06.000Z',
                  data: {'id': 'x', 'name': 'x'}),
              pushedJson: null),
        ])
      ]);

      final report = await h.engine.syncNow();
      expect(report.hadError, isTrue,
          reason: 'unknown-op response is a protocol violation');
      // Every op was retried with backoff: none settled, none dead-lettered.
      for (final id in ids) {
        expect((await sr(h.pocket, id))!.syncState, SyncState.dirty,
            reason: 'op $id retried, never acked by an unknown op');
        expect((await sr(h.pocket, id))!.attemptCount, 1,
            reason: 'op $id recorded a retry');
      }
      expect(await deadLetters(h.pocket), isEmpty);

      // Healthy retry converges once the backoff window elapses.
      clock += 2000;
      h.mock.script('pushBatch', const []);
      await h.engine.syncNow();
      expect(await h.engine.syncStore.countPending(), 0);
    });

    test('duplicate opId in the response retries the whole request', () async {
      var clock = 1000000;
      final mock = MockSyncBackend()..batchEnabled = true;
      final h = await EngineHarness.create(
          mock: mock,
          config: testConfig(
              backoffBase: const Duration(seconds: 1), now: () => clock));
      addTearDown(h.close);
      final ids = <String>[];
      for (var i = 0; i < 3; i++) {
        final id = generateRecordId();
        ids.add(id);
        await h.pocket.collection('widgets').put(record(id: id, name: 'n$i'));
      }
      final op0 = await opIdFor(h, ids[0]);
      final rec = RemoteRecord(
          id: ids[0],
          store: 'widgets',
          updated: '2026-02-03 04:05:06.000Z',
          data: {'id': ids[0], 'name': 'n0'});
      h.mock.script('pushBatch', [
        MockReturn([
          PushResult(opId: op0, ok: true, record: rec, pushedJson: null),
          PushResult(opId: op0, ok: true, record: rec, pushedJson: null),
          PushResult(
              opId: await opIdFor(h, ids[1]),
              ok: true,
              record: RemoteRecord(
                  id: ids[1],
                  store: 'widgets',
                  updated: '2026-02-03 04:05:06.000Z',
                  data: {'id': ids[1], 'name': 'n1'}),
              pushedJson: null),
        ])
      ]);

      final report = await h.engine.syncNow();
      expect(report.hadError, isTrue,
          reason: 'duplicate-op response is a protocol violation');
      // Every op was retried with backoff: none settled, none dead-lettered.
      for (final id in ids) {
        expect((await sr(h.pocket, id))!.syncState, SyncState.dirty,
            reason: 'op $id retried, never acked by a duplicate op');
        expect((await sr(h.pocket, id))!.attemptCount, 1,
            reason: 'op $id recorded a retry');
      }
      expect(await deadLetters(h.pocket), isEmpty);

      // Healthy retry converges once the backoff window elapses.
      clock += 2000;
      h.mock.script('pushBatch', const []);
      await h.engine.syncNow();
      expect(await h.engine.syncStore.countPending(), 0);
    });

    test('per-item failures dead-letter only the failing ops', () async {
      final (h, ids) = await threeCreates();
      addTearDown(h.close);
      h.mock.script('pushBatch', [
        MockReturn([
          PushResult(
              opId: await opIdFor(h, ids[0]),
              ok: true,
              record: RemoteRecord(
                  id: ids[0],
                  store: 'widgets',
                  updated: '2026-02-03 04:05:06.000Z',
                  data: {'id': ids[0], 'name': 'n0'}),
              pushedJson: null),
          PushResult(
              opId: await opIdFor(h, ids[1]),
              ok: false,
              error: 'server rejected n1'),
          // ok but no record: also a per-item failure.
          PushResult(
              opId: await opIdFor(h, ids[2]),
              ok: true,
              record: null,
              error: 'no record'),
        ])
      ]);

      final report = await h.engine.syncNow();
      expect(report.pushed, 1);
      expect(report.deadLettered, 2);
      expect((await sr(h.pocket, ids[0]))!.syncState, SyncState.clean);
      final dl = await deadLetters(h.pocket);
      expect(dl.map((r) => r['record_id']).toSet(), {ids[1], ids[2]});
    });

    test('non-map batch entries raise ProtocolError at the client level',
        () async {
      // Client-level: the adapter requires one JSON-object entry per request
      // and maps back by index; a non-map entry is a protocol violation, not
      // something to silently skip.
      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      server.batchEnabled = true;
      server.batchResponseScript.add((
        200,
        [
          'not-a-map',
          {'body': <String, Object?>{}, 'status': 'not-an-int'},
        ]
      ));
      final backend = PocketBaseRawBackend(
          baseUrl: server.baseUrl,
          tokenProvider: TestTokenProvider(),
          stores: const []);
      addTearDown(backend.close);
      await backend.prepare();

      await expectLater(
        backend.pushBatch([
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
        ]),
        throwsA(isA<ProtocolError>()),
      );
      expect(server.records, isEmpty,
          reason: 'scripted response: nothing applied');
    });
  });

  group('binary-split accounting', () {
    test('poison batch reports accurate pushed/deadLettered counts', () async {
      final h = await EngineHarness.create(
          mock: MockSyncBackend()..batchEnabled = true);
      addTearDown(h.close);

      final good = <String>[];
      for (var i = 0; i < 3; i++) {
        final id = generateRecordId();
        good.add(id);
        await h.pocket.collection('widgets').put(record(id: id, name: 'g$i'));
      }
      final bad = generateRecordId();
      await h.pocket
          .collection('widgets')
          .put(record(id: bad, name: 'bad', meta: {'x': 'poison'}));

      final report = await h.engine.syncNow();
      expect(report.pushed, 3,
          reason: 'clean ops in the split halves are counted as pushed');
      expect(report.deadLettered, 1,
          reason: 'the poison op is counted as dead-lettered');
      expect(await h.engine.syncStore.countPending(), 0);
      for (final id in good) {
        expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
      }
      final dl = await deadLetters(h.pocket);
      expect(dl.single['record_id'], bad);
      expect(dl.single['kind'], 'batch_poison');
    });

    test('single-item poison dead-letters with no split', () async {
      final h = await EngineHarness.create(
          mock: MockSyncBackend()..batchEnabled = true);
      addTearDown(h.close);

      final id = generateRecordId();
      await h.pocket
          .collection('widgets')
          .put(record(id: id, name: 'x', meta: {'x': 'poison'}));

      final report = await h.engine.syncNow();
      expect(report.pushed, 0);
      expect(report.deadLettered, 1);
      final dl = await deadLetters(h.pocket);
      expect(dl.single['kind'], 'batch_poison');
      expect(await h.engine.syncStore.countPending(), 0);
    });

    test('transient failure in one half leaves it pending, other half settles',
        () async {
      final h = await EngineHarness.create(
          mock: MockSyncBackend()..batchEnabled = true);
      addTearDown(h.close);

      final ids = <String>[];
      for (var i = 0; i < 4; i++) {
        final id = generateRecordId();
        ids.add(id);
        await h.pocket.collection('widgets').put(record(id: id, name: 'n$i'));
      }
      // Full batch poisons -> split; first half drops (transient), second
      // half succeeds.
      h.mock.script('pushBatch', [
        MockThrow(BatchFailedError('poison in batch')),
        MockDrop(),
      ]);

      final report = await h.engine.syncNow();
      expect(report.pushed, 2, reason: 'second half settled and counted');
      expect(report.deadLettered, 0);
      expect(report.hadError, isTrue);
      // First half: still pending (retryable), never dropped.
      final pending = await h.engine.syncStore.countPending();
      expect(pending, 2, reason: 'transient half left pending');
      expect(await deadLetters(h.pocket), isEmpty);

      // Healthy retry drains the pending half.
      h.mock.script('pushBatch', const []);
      await h.engine.syncNow();
      expect(await h.engine.syncStore.countPending(), 0);
    });

    test('mixed per-item results in a split half report accurate counts',
        () async {
      final h = await EngineHarness.create(
          mock: MockSyncBackend()..batchEnabled = true);
      addTearDown(h.close);

      final ids = <String>[];
      for (var i = 0; i < 2; i++) {
        final id = generateRecordId();
        ids.add(id);
        await h.pocket.collection('widgets').put(record(id: id, name: 'n$i'));
      }
      final poison = generateRecordId();
      await h.pocket
          .collection('widgets')
          .put(record(id: poison, name: 'p', meta: {'x': 'poison'}));

      // 3 ops -> split 1/2: the first half contains the poison alone? The
      // halves are (op0) and (op1, poison) or similar — script so that the
      // second-level split reports one success and one failure.
      h.mock.script('pushBatch', [MockThrow(BatchFailedError('poison'))]);

      final report = await h.engine.syncNow();
      expect(report.pushed + report.deadLettered, 3,
          reason: 'every op accounted for across recursive splits');
      expect(await h.engine.syncStore.countPending(), 0);
      final dl = await deadLetters(h.pocket);
      expect(dl.length, 1);
      expect(dl.single['record_id'], poison);
    });

    test('duplicate opId in a split half leaves that half pending', () async {
      final h = await EngineHarness.create(
          mock: MockSyncBackend()..batchEnabled = true);
      addTearDown(h.close);
      final ids = <String>[];
      for (var i = 0; i < 4; i++) {
        final id = generateRecordId();
        ids.add(id);
        await h.pocket.collection('widgets').put(record(id: id, name: 'n$i'));
      }
      final op0 =
          (await h.pocket.outbox.readOp(h.pocket.db, 'widgets', ids[0]))!.opId;
      final rec0 = RemoteRecord(
          id: ids[0],
          store: 'widgets',
          updated: '2026-02-03 04:05:06.000Z',
          data: {'id': ids[0], 'name': 'n0'});
      // Full batch poisons -> binary split. The FIRST half echoes the same
      // opId twice (protocol violation); the second half uses default success.
      h.mock.script('pushBatch', [
        MockThrow(BatchFailedError('poison in batch')),
        MockReturn([
          PushResult(opId: op0, ok: true, record: rec0, pushedJson: null),
          PushResult(opId: op0, ok: true, record: rec0, pushedJson: null),
        ]),
      ]);

      final report = await h.engine.syncNow();
      expect(report.hadError, isTrue,
          reason: 'a duplicate-op half is a protocol violation');
      expect(report.pushed, 2, reason: 'the healthy half settles');
      // The duplicate half is left pending (retryable), never dead-lettered.
      expect(await h.engine.syncStore.countPending(), 2);
      expect(await deadLetters(h.pocket), isEmpty);

      h.mock.script('pushBatch', const []);
      await h.engine.syncNow();
      expect(await h.engine.syncStore.countPending(), 0);
    });

    test('unknown opId in a split half leaves that half pending', () async {
      final h = await EngineHarness.create(
          mock: MockSyncBackend()..batchEnabled = true);
      addTearDown(h.close);
      final ids = <String>[];
      for (var i = 0; i < 4; i++) {
        final id = generateRecordId();
        ids.add(id);
        await h.pocket.collection('widgets').put(record(id: id, name: 'n$i'));
      }
      final rec0 = RemoteRecord(
          id: ids[0],
          store: 'widgets',
          updated: '2026-02-03 04:05:06.000Z',
          data: {'id': ids[0], 'name': 'n0'});
      // First half answers with an opId that was never sent.
      h.mock.script('pushBatch', [
        MockThrow(BatchFailedError('poison in batch')),
        MockReturn([
          PushResult(
              opId: 'never-sent', ok: true, record: rec0, pushedJson: null),
        ]),
      ]);

      final report = await h.engine.syncNow();
      expect(report.hadError, isTrue,
          reason: 'an unknown-op half is a protocol violation');
      expect(report.pushed, 2, reason: 'the healthy half settles');
      expect(await h.engine.syncStore.countPending(), 2,
          reason: 'the unknown-op half is left pending');
      expect(await deadLetters(h.pocket), isEmpty);

      h.mock.script('pushBatch', const []);
      await h.engine.syncNow();
      expect(await h.engine.syncStore.countPending(), 0);
    });
  });
}
