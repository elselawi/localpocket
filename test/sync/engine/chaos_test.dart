import 'package:localpocket/src/internal/raw_surface.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';
import 'engine_helpers.dart';
import 'mock_backend.dart';

/// Scripted chaos against `MockSyncBackend`.
/// Covers dropped / duplicated / reordered pages, 401 and 429 storms, and lost
/// create/update responses.
void main() {
  Future<SyncRowState?> sr(LocalPocket pocket, String id) =>
      pocket.outbox.readSyncRow(pocket.db, 'widgets', id);

  Future<List<Map<String, Object?>>> deadLetters(LocalPocket pocket) =>
      pocket.db.query('lp_dead_letter', orderBy: 'at ASC');

  group('chaos scripts', () {
    test('chaos_dropped_pages_resume_from_committed_cursor', () async {
      final h = await EngineHarness.create(config: testConfig(maxPage: 5));
      addTearDown(h.close);

      for (var i = 0; i < 12; i++) {
        h.mock.seed(store: 'widgets', data: {'name': 'r$i'});
      }
      final all = await h.mock.listChanges('widgets', perPage: 200);
      final page1 = all.sublist(0, 5).toList();
      h.mock.script('listChanges', [MockReturn(page1), MockDrop()]);

      final report = await h.engine.syncNow();
      // Page 1 committed (cursor advanced); the drop stops the pass.
      expect(await h.pocket.collection('widgets').query().all().count(), 5);
      expect(report.hadError, isTrue);

      // Next pass resumes from the committed cursor — nothing is lost or duped.
      await h.engine.syncNow();
      expect(await h.pocket.collection('widgets').query().all().count(), 12);
    });

    test('chaos_duplicated_pages_are_idempotent', () async {
      final h = await EngineHarness.create(config: testConfig(maxPage: 3));
      addTearDown(h.close);

      for (var i = 0; i < 8; i++) {
        h.mock.seed(store: 'widgets', data: {'name': 'r$i'});
      }
      final all = await h.mock.listChanges('widgets', perPage: 200);
      final page1 = all.sublist(0, 3).toList();
      final rest = all.sublist(3).toList();
      // A buggy/retrying server re-serves the same page before continuing.
      h.mock.script('listChanges', [
        MockReturn(page1),
        MockReturn(page1),
        MockReturn(rest),
      ]);

      await h.engine.syncNow();
      expect(await h.pocket.collection('widgets').query().all().count(), 8,
          reason: 'no duplicates from re-served pages');
    });

    test('chaos_reordered_pages_sweep_self_heals', () async {
      final h = await EngineHarness.create(config: testConfig(maxPage: 3));
      addTearDown(h.close);

      final ids = <String>[];
      for (var i = 0; i < 6; i++) {
        ids.add(h.mock.seed(
            store: 'widgets',
            id: 'a${generateRecordId().substring(1)}',
            data: {'name': 'r$i'}));
      }
      final all = await h.mock.listChanges('widgets', perPage: 200);
      final last3 = all.sublist(3).toList();
      final first3 = all.sublist(0, 3).toList();
      // The server serves the newest page first, then the older one: the pull
      // cursor advances past the earlier records, so the rewind window never
      // re-applies them (a cursor-based `<=` skip is the pull's idempotency
      // AND purge-finality authority — never the rewind).
      h.mock.script('listChanges', [MockReturn(last3), MockReturn(first3)]);
      await h.engine.syncNow();
      expect(await h.pocket.collection('widgets').query().all().count(), 3,
          reason: 'newest page applied; older records missed by the pull');

      // The anti-entropy sweep heals the miss: never-applied rows get a
      // targeted fetch regardless of their position relative to the cursor.
      await h.engine.sweeper.sweepBucket('widgets', 0);
      expect(await h.pocket.collection('widgets').query().all().count(), 6);
      for (final id in ids) {
        expect(await h.pocket.collection('widgets').get(id), isNotNull);
      }
    });

    test('chaos_401_storm_pauses_then_resumes_no_data_loss', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);

      final ids = <String>[];
      for (var i = 0; i < 6; i++) {
        ids.add(h.mock.seed(
            store: 'widgets',
            id: 'a${generateRecordId().substring(1)}',
            data: {'name': 'r$i'}));
      }

      // 401 on every call: the engine parks in authRequired.
      h.mock.authValid = false;
      await h.engine.syncNow();
      expect(h.engine.state, SyncEngineState.authRequired);
      expect(await h.pocket.collection('widgets').query().all().count(), 0,
          reason: 'nothing rewritten while unauthorized');

      // Local writes keep working offline-first.
      await h.pocket.collection('widgets').put(record(name: 'local-edit'));

      // Refresh: forced full sweep + cycle drain everything.
      h.mock.authValid = true;
      await h.engine.markAuthValid();
      await Future<void>.delayed(const Duration(milliseconds: 40));
      expect(h.engine.state, SyncEngineState.idle);
      expect(await h.pocket.collection('widgets').query().all().count(),
          ids.length + 1);
      expect(h.mock.records.length, ids.length + 1,
          reason: 'local edit pushed too');
    });

    test('chaos_429_storm_throttles_lane_then_retries', () async {
      final h = await EngineHarness.create(
          config: testConfig(
              backoffBase: Duration.zero,
              pushDebounce: const Duration(days: 365)));
      addTearDown(h.close);

      final id = generateRecordId();
      await h.pocket.collection('widgets').put(record(id: id, name: 'x'));
      // Three busy responses in a row (429 storm), then the lane clears.
      h.mock.script('createRecord', [
        MockThrow(ServerBusyError()),
        MockThrow(ServerBusyError()),
        MockThrow(ServerBusyError()),
      ]);

      await h.engine.syncNow();
      var row = await sr(h.pocket, id);
      expect(row!.attemptCount, 1);
      await h.engine.syncNow();
      row = await sr(h.pocket, id);
      expect(row!.attemptCount, 2);
      await h.engine.syncNow();
      row = await sr(h.pocket, id);
      expect(row!.attemptCount, 3);

      // Storm over: the op is delivered on the next pass.
      await h.engine.syncNow();
      expect(h.mock.records.containsKey(id), isTrue);
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
      expect(await deadLetters(h.pocket), isEmpty);
    });

    test('chaos_lost_create_response_duplicate_get_ack', () async {
      final h = await EngineHarness.create(
          config: testConfig(
              backoffBase: Duration.zero,
              pushDebounce: const Duration(days: 365)));
      addTearDown(h.close);

      final id = generateRecordId();
      await h.pocket.collection('widgets').put(record(id: id, name: 'x'));

      // The POST lands server-side but the response is lost.
      h.mock.lostCreateResponse = true;
      await h.engine.syncNow();
      expect(h.mock.records.containsKey(id), isTrue);
      final row = await sr(h.pocket, id);
      expect(row!.syncState, SyncState.dirty, reason: 'retry pending');

      // Retry: the server reports a duplicate; GET verifies and ACKs.
      h.mock.lostCreateResponse = false;
      h.mock.script('listChanges', [MockReturn(const <RemoteRecord>[])]);
      await h.engine.syncNow();
      expect(h.mock.createCalls, 2);
      expect(h.mock.getCalls, greaterThanOrEqualTo(1),
          reason: 'verify by GET after the duplicate');
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
      expect(await h.pocket.outbox.readOp(h.pocket.db, 'widgets', id), isNull);
      expect(await deadLetters(h.pocket), isEmpty);
    });

    test('chaos_lost_update_response_hash_ack_noop', () async {
      final h = await EngineHarness.create(
          config: testConfig(
              backoffBase: Duration.zero,
              pushDebounce: const Duration(days: 365)));
      addTearDown(h.close);

      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'qty': 5});

      // The PATCH lands server-side but the response is lost.
      h.mock.lostUpdateResponse = true;
      await h.engine.syncNow();
      expect(h.mock.records[id]!.data['qty'], 5);
      final row = await sr(h.pocket, id);
      expect(row!.syncState, SyncState.dirty, reason: 'retry pending');

      // Retry: GET shows updated != base, hash == payload -> ACK no-op.
      h.mock.lostUpdateResponse = false;
      h.mock.script('listChanges', [MockReturn(const <RemoteRecord>[])]);
      await h.engine.syncNow();
      final updateCalls = h.mock.updateCalls;
      expect(updateCalls, 1, reason: 'no second write needed');
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
      expect(await deadLetters(h.pocket), isEmpty);
    });
  });
}
