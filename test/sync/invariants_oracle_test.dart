import 'package:localpocket/src/kernel/ids.dart';
import 'package:localpocket/src/kernel/local_pocket.dart';
import 'package:localpocket/src/kernel/schema.dart';
import 'package:localpocket/src/kernel/sync/engine.dart';
import 'package:localpocket/src/kernel/sync/merge.dart';
import 'package:localpocket/src/kernel/sync/sync_backend.dart';
import 'package:localpocket/src/kernel/sync/sync_tables.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import 'engine/engine_helpers.dart';
import 'engine/mock_backend.dart';
import 'invariants_oracle.dart';

/// The sync invariants oracle.
///
/// [expectSyncInvariants] is the reusable helper; these tests prove it
/// accepts every legitimate state (clean, dirty, conflict, error, quarantine,
/// blocked, hidden, dead-lettered, re-visible, purged) and that it bites on
/// corrupted states. The soak test then drives a multi-record chaos run —
/// concurrent patches, fast-path hints, pull conflicts, push 404/403,
/// quarantine, sweep hide/unhide, purge, maintenance and an engine restart —
/// running the oracle across ALL rows after every step.
void main() {
  // An id in sweep bucket 0 (first char 'a').
  String bucketAId() => 'a${generateRecordId().substring(1)}';

  Future<SyncRowState?> sr(LocalPocket pocket, String id) =>
      pocket.outbox.readSyncRow(pocket.db, 'widgets', id);

  /// Runs the oracle and expects it to FAIL on the given record (proving the
  /// oracle is not vacuous — it catches real corruption).
  Future<void> expectOracleToFail(LocalPocket pocket, String store, String id,
      {Map<String, int>? lastSeenTracker}) async {
    var threw = false;
    try {
      await expectSyncInvariants(pocket, store, id,
          lastSeenTracker: lastSeenTracker);
    } catch (_) {
      threw = true;
    }
    expect(threw, isTrue, reason: 'the oracle must flag $store/$id');
  }

  /// A schema whose merges always escalate to a conflict (needs review).
  CollectionSchema conflictSchema() => CollectionSchema(
        name: 'widgets2',
        version: 1,
        fields: [
          Field.text('name', required: true),
          Field.int('qty'),
        ],
        conflictPolicy: ConflictPolicy(
          collectionResolver: CustomResolver((ctx) => null),
        ),
      );

  group('the oracle accepts every legitimate state', () {
    test('a clean pulled row satisfies the oracle', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow();

      final tracker = <String, int>{};
      await expectSyncInvariants(h.pocket, 'widgets', id,
          lastSeenTracker: tracker);
      // A second pass must not see a regression either.
      await expectSyncInvariants(h.pocket, 'widgets', id,
          lastSeenTracker: tracker);
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
    });

    test('dirty, error and blocked rows satisfy the oracle', () async {
      // dirty
      {
        final h = await EngineHarness.create();
        addTearDown(h.close);
        final id =
            h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
        await h.engine.syncNow();
        await h.pocket.collection('widgets').patch(id, {'name': 'local'});
        expect((await sr(h.pocket, id))!.syncState, SyncState.dirty);
        await expectSyncInvariants(h.pocket, 'widgets', id);
      }
      // error (dead-lettered: push-side validation failure)
      {
        final h = await EngineHarness.create();
        addTearDown(h.close);
        final id =
            h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
        await h.engine.syncNow();
        await h.pocket.collection('widgets').patch(id, {'name': 'local'});
        h.mock.script('updateRecord', [MockThrow(PayloadError('400'))]);
        await h.engine.syncNow();
        expect((await sr(h.pocket, id))!.syncState, SyncState.error);
        await expectSyncInvariants(h.pocket, 'widgets', id);
      }
      // blocked (push-side 403)
      {
        final h = await EngineHarness.create();
        addTearDown(h.close);
        final id =
            h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
        await h.engine.syncNow();
        await h.pocket.collection('widgets').patch(id, {'name': 'local'});
        h.mock.script('getRecord', [MockThrow(ForbiddenError())]);
        await h.engine.syncNow();
        expect((await sr(h.pocket, id))!.syncState, SyncState.blocked);
        await expectSyncInvariants(h.pocket, 'widgets', id);
      }
    });

    test('a pull-conflict row satisfies the oracle', () async {
      final h = await EngineHarness.create(stores: [conflictSchema()]);
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets2', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow();
      await h.pocket.collection('widgets2').patch(id, {'name': 'local'});
      h.mock.mutate(id, {'id': id, 'name': 'remote', 'qty': 1});
      await h.engine.syncNow();

      final row =
          await h.pocket.outbox.readSyncRow(h.pocket.db, 'widgets2', id);
      expect(row!.syncState, SyncState.conflict);
      await expectSyncInvariants(h.pocket, 'widgets2', id);
      // The conflicted remote is captured as the resolution base.
      expect(row.baseUpdated, isNotNull);
    });

    test('a quarantine row satisfies the oracle', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      // A malformed remote (missing the required `name`) is quarantined.
      final badId = h.mock.seed(store: 'widgets', data: {'qty': 1});
      await h.engine.syncNow();

      final row = await sr(h.pocket, badId);
      expect(row!.syncState, SyncState.quarantine);
      await expectSyncInvariants(h.pocket, 'widgets', badId);
      // Documented exception: no domain row, no outbox op for a quarantine.
      expect(await h.pocket.collection('widgets').get(badId), isNull);
    });

    test('a hidden row with local work satisfies the oracle', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id =
          h.mock.seed(store: 'widgets', data: {'name': 'v1'}, id: bucketAId());
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'local'});
      h.mock.delete(id);
      await h.engine.sweeper.sweepBucket('widgets', 0);

      final row = await sr(h.pocket, id);
      expect(row!.accessState, AccessState.hidden);
      expect(row.syncState, SyncState.dirty);
      await expectSyncInvariants(h.pocket, 'widgets', id);
    });

    test('an in-flight row satisfies the oracle', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'local'});
      await h.pocket.outbox.setSyncState('widgets', id, SyncState.inFlight);

      expect((await sr(h.pocket, id))!.syncState, SyncState.inFlight);
      await expectSyncInvariants(h.pocket, 'widgets', id);
    });

    test('a never-remote local create satisfies the oracle', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = generateRecordId();
      await h.pocket.collection('widgets').put(record(id: id, name: 'x'));

      final row = await sr(h.pocket, id);
      expect(row!.syncState, SyncState.dirty);
      expect(row.baseUpdated, isNull,
          reason: 'a create-path dirty row has no base (never remote)');
      await expectSyncInvariants(h.pocket, 'widgets', id);
    });

    test('a clean hidden row satisfies the oracle', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id =
          h.mock.seed(store: 'widgets', data: {'name': 'v1'}, id: bucketAId());
      await h.engine.syncNow();
      h.mock.delete(id);
      await h.engine.sweeper.sweepBucket('widgets', 0);

      final row = await sr(h.pocket, id);
      expect(row!.accessState, AccessState.hidden);
      expect(row.syncState, SyncState.clean,
          reason: 'hiding never changes the sync state');
      await expectSyncInvariants(h.pocket, 'widgets', id);
    });

    test('a dead-lettered create satisfies the oracle', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = generateRecordId();
      await h.pocket.collection('widgets').put(record(id: id, name: 'x'));
      h.mock.script('createRecord', [MockThrow(PayloadError('400'))]);

      final report = await h.engine.syncNow();
      expect(report.deadLettered, 1);
      final row = await sr(h.pocket, id);
      expect(row!.syncState, SyncState.error);
      expect(row.baseUpdated, isNull,
          reason: 'a create-path dead letter keeps the (absent) base');
      await expectSyncInvariants(h.pocket, 'widgets', id);
    });

    test('a purged record (no rows on either side) satisfies the oracle',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').purge(id);

      expect(await h.pocket.collection('widgets').get(id), isNull);
      expect(await sr(h.pocket, id), isNull);
      await expectSyncInvariants(h.pocket, 'widgets', id);
    });
  });

  group('the oracle catches corrupted state', () {
    test('an orphaned domain row is flagged', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = generateRecordId();
      await h.pocket
          .collection('widgets')
          .put({'id': id, 'name': 'orphan', 'qty': 1});
      await h.pocket.db.execute(
          'DELETE FROM lp_sync_row WHERE store = ? AND record_id = ?',
          ['widgets', id]);
      await expectOracleToFail(h.pocket, 'widgets', id);
    });

    test('a stray outbox op on a clean row is flagged', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'local'});
      // Corrupt: force the row clean while its outbox op remains.
      await h.pocket.db.execute(
          'UPDATE lp_sync_row SET sync_state = ? '
          'WHERE store = ? AND record_id = ?',
          ['clean', 'widgets', id]);
      await expectOracleToFail(h.pocket, 'widgets', id);
    });

    test('a diverged hidden bit is flagged', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow();
      // Corrupt: hide the domain row without the sync row's access_state.
      await h.pocket.db
          .execute('UPDATE widgets SET hidden = 1 WHERE id = ?', [id]);
      await expectOracleToFail(h.pocket, 'widgets', id);
    });

    test('a regressed last_seen_at is flagged', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow();
      final tracker = <String, int>{};
      await expectSyncInvariants(h.pocket, 'widgets', id,
          lastSeenTracker: tracker);
      // Corrupt: push the retention clock far into the past.
      await h.pocket.db.execute(
          'UPDATE lp_sync_row SET last_seen_at = 1 WHERE record_id = ?', [id]);
      await expectOracleToFail(h.pocket, 'widgets', id,
          lastSeenTracker: tracker);
    });

    test('a watermark that exceeds the base is flagged', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'local'});
      // Corrupt: advance the applied watermark past the recorded base.
      await h.pocket.db.execute(
          'UPDATE lp_sync_row SET remote_updated = ? WHERE record_id = ?',
          ['9999-01-01 00:00:00.000Z', id]);
      await expectOracleToFail(h.pocket, 'widgets', id);
    });

    test('a missing base on a conflict row is flagged', () async {
      final h = await EngineHarness.create(stores: [conflictSchema()]);
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets2', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow();
      await h.pocket.collection('widgets2').patch(id, {'name': 'local'});
      h.mock.mutate(id, {'id': id, 'name': 'remote', 'qty': 1});
      await h.engine.syncNow();
      expect(
          (await h.pocket.outbox.readSyncRow(h.pocket.db, 'widgets2', id))!
              .syncState,
          SyncState.conflict);
      // Corrupt: clear the captured resolution base.
      await h.pocket.db.execute(
          'UPDATE lp_sync_row SET base_updated = NULL '
          'WHERE store = ? AND record_id = ?',
          ['widgets2', id]);
      await expectOracleToFail(h.pocket, 'widgets2', id);
    });

    test('a stray sync row without a domain row is flagged', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow();
      // Corrupt: delete the domain row, leaving the sync row behind.
      await h.pocket.db.execute('DELETE FROM widgets WHERE id = ?', [id]);
      await expectOracleToFail(h.pocket, 'widgets', id);
    });

    test('an outbox op without a sync row is flagged', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = generateRecordId();
      await h.pocket.db.execute(
          'INSERT INTO lp_outbox '
          '(store, record_id, kind, payload_json, base_hash, dirty_fields, '
          'op_id, created_at, updated_at) '
          "VALUES (?, ?, 'upsert', '{}', '', '[]', 'orphan-op', 0, 0)",
          ['widgets', id]);
      await expectOracleToFail(h.pocket, 'widgets', id);
    });

    test('a quarantine row carrying an outbox op is flagged', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final badId = h.mock.seed(store: 'widgets', data: {'qty': 1});
      await h.engine.syncNow();
      expect((await sr(h.pocket, badId))!.syncState, SyncState.quarantine);
      // Corrupt: give the quarantine row a (never legitimate) outbox op.
      await h.pocket.db.execute(
          'INSERT INTO lp_outbox '
          '(store, record_id, kind, payload_json, base_hash, dirty_fields, '
          'op_id, created_at, updated_at) '
          "VALUES (?, ?, 'upsert', '{}', '', '[]', 'quarantine-op', 0, 0)",
          ['widgets', badId]);
      await expectOracleToFail(h.pocket, 'widgets', badId);
    });

    test('a clean row carrying base_json is flagged', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow();
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
      // Corrupt: a clean row must not hold a resolution base.
      await h.pocket.db.execute(
          'UPDATE lp_sync_row SET base_json = ? WHERE record_id = ?',
          ['{}', id]);
      await expectOracleToFail(h.pocket, 'widgets', id);
    });

    test('a conflict row without its outbox op is flagged', () async {
      final h = await EngineHarness.create(stores: [conflictSchema()]);
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets2', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow();
      await h.pocket.collection('widgets2').patch(id, {'name': 'local'});
      h.mock.mutate(id, {'id': id, 'name': 'remote', 'qty': 1});
      await h.engine.syncNow();
      expect(
          (await h.pocket.outbox.readSyncRow(h.pocket.db, 'widgets2', id))!
              .syncState,
          SyncState.conflict);
      // Corrupt: drop the outbox op the conflict resolution depends on.
      await h.pocket.db.execute(
          'DELETE FROM lp_outbox WHERE store = ? AND record_id = ?',
          ['widgets2', id]);
      await expectOracleToFail(h.pocket, 'widgets2', id);
    });

    test('a blocked row with a retry timer is flagged', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'local'});
      h.mock.script('getRecord', [MockThrow(ForbiddenError())]);
      await h.engine.syncNow();
      expect((await sr(h.pocket, id))!.syncState, SyncState.blocked);
      // Corrupt: a blocked row must wait on permission recovery, not a timer.
      await h.pocket.db.execute(
          'UPDATE lp_sync_row SET next_retry_at = 5 WHERE record_id = ?', [id]);
      await expectOracleToFail(h.pocket, 'widgets', id);
    });

    test('an error row without last_error is flagged', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'local'});
      h.mock.script('updateRecord', [MockThrow(PayloadError('400'))]);
      await h.engine.syncNow();
      expect((await sr(h.pocket, id))!.syncState, SyncState.error);
      // Corrupt: an error row must explain itself.
      await h.pocket.db.execute(
          'UPDATE lp_sync_row SET last_error = NULL WHERE record_id = ?', [id]);
      await expectOracleToFail(h.pocket, 'widgets', id);
    });

    test('a conflict row whose sync row is not in conflict is flagged',
        () async {
      final h = await EngineHarness.create(stores: [conflictSchema()]);
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets2', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow();
      await h.pocket.collection('widgets2').patch(id, {'name': 'local'});
      h.mock.mutate(id, {'id': id, 'name': 'remote', 'qty': 1});
      await h.engine.syncNow();
      expect(
          await h.pocket.db
              .query('lp_conflicts', where: 'record_id = ?', whereArgs: [id]),
          isNotEmpty);
      // Corrupt: flip the sync row out of conflict while the conflict row stays.
      await h.pocket.db.execute(
          "UPDATE lp_sync_row SET sync_state = 'dirty' "
          'WHERE store = ? AND record_id = ?',
          ['widgets2', id]);
      await expectOracleToFail(h.pocket, 'widgets2', id);
    });

    test('a dirty row with an empty base_hash is flagged', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'local'});
      expect((await sr(h.pocket, id))!.baseUpdated, isNotNull);
      // Corrupt: a real base must carry a real hash.
      await h.pocket.db.execute(
          'UPDATE lp_sync_row SET base_hash = ? WHERE record_id = ?', ['', id]);
      await expectOracleToFail(h.pocket, 'widgets', id);
    });

    test('a sync row whose op_id does not mirror the outbox op is flagged',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'local'});
      final op = await h.pocket.outbox.readOp(h.pocket.db, 'widgets', id);
      // Corrupt: point the sync row at a different op than the outbox holds.
      await h.pocket.db.execute(
          'UPDATE lp_sync_row SET op_id = ? WHERE record_id = ?',
          ['not-${op!.opId}', id]);
      await expectOracleToFail(h.pocket, 'widgets', id);
    });

    test('a clean row without its applied watermark is flagged', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow();
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
      // Corrupt: a clean row must know which remote version it applied.
      await h.pocket.db.execute(
          'UPDATE lp_sync_row SET remote_updated = NULL WHERE record_id = ?',
          [id]);
      await expectOracleToFail(h.pocket, 'widgets', id);
    });

    test('a dirty row whose outbox base diverges from the sync row is flagged',
        () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'local'});
      // Corrupt: the outbox op and the sync row must share one base version.
      await h.pocket.db.execute(
          'UPDATE lp_outbox SET base_updated = ? WHERE record_id = ?',
          ['9999-01-01 00:00:00.000Z', id]);
      await expectOracleToFail(h.pocket, 'widgets', id);
    });
  });

  group('op-queue dependency invariant', () {
    test('a pending dependency on an existing outbox op passes', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'local'});
      final op = await h.pocket.outbox.readOp(h.pocket.db, 'widgets', id);

      await h.pocket.opQueue.enqueue(
        store: 'widgets',
        recordId: id,
        kind: OpQueueKind.fileUpload,
        payload: const {'ref_id': 'r1'},
        dependsOnOp: op!.opId,
      );
      await expectSyncInvariants(h.pocket, 'widgets', id);
    });

    test('a released dependency on a settled record passes', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow(); // clean: no outbox op

      // A file op whose record op has long settled: the dependency is gone but
      // the record is clean, so the file op is released — never stranded.
      await h.pocket.opQueue.enqueue(
        store: 'widgets',
        recordId: id,
        kind: OpQueueKind.fileUpload,
        payload: const {'ref_id': 'r2'},
        dependsOnOp: 'settled-op-id',
      );
      await expectSyncInvariants(h.pocket, 'widgets', id);
    });

    test('a dangling dependency on a still-pending record fails', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1', 'qty': 1});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'local'});

      // Corrupt: a file op whose dependency vanished while the record still
      // has pending work.
      await h.pocket.opQueue.enqueue(
        store: 'widgets',
        recordId: id,
        kind: OpQueueKind.fileUpload,
        payload: const {'ref_id': 'r3'},
        dependsOnOp: 'nonexistent-op',
      );
      await expectOracleToFail(h.pocket, 'widgets', id);
    });
  });

  group('sync invariants under a scripted chaos run', () {
    test(
        'the oracle holds across patches, hints, conflicts, 404/403, '
        'quarantine, sweep, purge, maintenance and restart', () async {
      var nowMs = 1000000000;
      final tracker = <String, int>{};
      final h = await EngineHarness.create(
        config: testConfig(
          sweepInterval: const Duration(days: 365),
          purgeHiddenAfter: const Duration(days: 30),
          jitter: (_) => 1.0,
          now: () => nowMs,
        ),
        stores: [widgetsSchema(), conflictSchema()],
        now: () => nowMs,
      );
      addTearDown(h.close);

      Future<void> step(String label) async {
        await expectAllSyncInvariants(h.pocket, lastSeenTracker: tracker);
      }

      final ids = <String>[];
      for (var i = 0; i < 6; i++) {
        ids.add(h.mock.seed(
          store: 'widgets',
          data: {'name': 'r$i', 'qty': i},
          id: bucketAId(),
        ));
      }
      final conflictId = h.mock.seed(
        store: 'widgets2',
        data: {'name': 'c0', 'qty': 0},
        id: bucketAId(),
      );

      // 0. Initial pull.
      await h.engine.syncNow();
      await step('initial pull');

      // 1. Concurrent local patches (three dirty rows).
      nowMs += 1000;
      for (final id in ids.take(3)) {
        await h.pocket.collection('widgets').patch(id, {'name': 'edited-$id'});
      }
      await step('concurrent local patches');

      // 2. A transient push failure keeps the first op dirty (persisted
      //    backoff); the other two settle clean.
      nowMs += 1000;
      h.mock.script('updateRecord', [MockThrow(TransientNetworkError())]);
      await h.engine.syncNow();
      await step('transient push failure');

      // 3. Fast-path hints: applied on a clean row, deferred on a dirty one.
      nowMs += 1000;
      h.engine.handleHint(BackendHint(
        'widgets',
        BackendHintKind.changed,
        RemoteRecord(
          id: ids[3],
          store: 'widgets',
          updated: h.mock.nextUpdated(),
          data: {'name': 'hinted-clean'},
        ),
      ));
      h.engine.handleHint(BackendHint(
        'widgets',
        BackendHintKind.changed,
        RemoteRecord(
          id: ids[0],
          store: 'widgets',
          updated: h.mock.nextUpdated(),
          data: {'name': 'hinted-dirty'},
        ),
      ));
      await Future<void>.delayed(const Duration(milliseconds: 20));
      await step('fast-path hints');

      // 4. Remote edits applied by the pull.
      nowMs += 1000;
      h.mock.mutate(ids[4], {'id': ids[4], 'name': 'remote-v2', 'qty': 4});
      h.mock.mutate(ids[5], {'id': ids[5], 'name': 'remote-v2', 'qty': 5});
      await h.engine.syncNow();
      await step('remote edits pulled');

      // 5. A pull conflict on the conflict store.
      nowMs += 1000;
      await h.pocket
          .collection('widgets2')
          .patch(conflictId, {'name': 'local'});
      h.mock.mutate(conflictId, {'id': conflictId, 'name': 'remote', 'qty': 0});
      await h.engine.syncNow();
      await step('pull conflict escalated');

      // 6. A push-side validation failure dead-letters the oldest pending op
      //    to error; the freshly-patched record still pushes clean.
      nowMs += 1000;
      await h.pocket.collection('widgets').patch(ids[4], {'name': 'dl'});
      h.mock.script('updateRecord', [MockThrow(PayloadError('400'))]);
      await h.engine.syncNow();
      await step('push-side validation dead-letter');

      // 7. A push-side 403 parks the newest edit in blocked.
      nowMs += 1000;
      await h.pocket.collection('widgets').patch(ids[5], {'name': 'blk'});
      h.mock.script('getRecord', [MockThrow(ForbiddenError())]);
      await h.engine.syncNow();
      await step('push-side 403 blocked');

      // 8. A malformed remote is quarantined without stalling the store.
      nowMs += 1000;
      final malformedId =
          h.mock.seed(store: 'widgets', data: {'qty': 1}, id: bucketAId());
      await h.engine.syncNow();
      await step('malformed remote quarantined');

      // 9. The sweep hides records that vanished remotely — one clean, one
      //    carrying local work.
      nowMs += 1000;
      await h.pocket
          .collection('widgets')
          .patch(ids[3], {'name': 'hidden-edit'}); // dirty before the hide
      h.mock.delete(ids[1]);
      h.mock.delete(ids[2]);
      h.mock.delete(ids[3]);
      await h.engine.sweeper.sweepBucket('widgets', 0);
      await step('sweep hides vanished records');

      // 10. A re-listed record is unhidden by the sweep and refreshed.
      nowMs += 1000;
      h.mock.seed(
          store: 'widgets', data: {'name': 'back-again', 'qty': 1}, id: ids[1]);
      await h.engine.sweeper.sweepBucket('widgets', 0);
      await step('re-visible record unhidden');

      // 11. Long-hidden clean rows are purged past the cutoff; rows with
      //     local work are never purged. Then full maintenance.
      nowMs += const Duration(days: 400).inMilliseconds;
      await h.engine.sweeper.sweepBucket('widgets', 0);
      await h.pocket.runMaintenance(compactOlderThan: const Duration(days: 90));
      await step('purge + maintenance');

      // 12. An engine restart: a fresh engine picks up the surviving state.
      await h.engine.stop();
      final engine2 = SyncEngine(
        pocket: h.pocket,
        backend: h.mock,
        config: testConfig(
          purgeHiddenAfter: const Duration(days: 30),
          jitter: (_) => 1.0,
          now: () => nowMs,
        ),
      );
      addTearDown(engine2.stop);
      await engine2.start();
      await engine2.syncNow();
      await step('engine restart');

      // 13. A final local edit leaves a dirty row the oracle checks last.
      nowMs += 1000;
      await h.pocket
          .collection('widgets')
          .patch(ids[0], {'name': 'final-edit'});
      await step('final local edit');

      // The final cross-section: every surviving state is still valid and the
      // oracle's documented states are represented.
      expect(
          (await h.pocket.outbox.readSyncRow(h.pocket.db, 'widgets', ids[0]))!
              .syncState,
          SyncState.dirty,
          reason: 'the final local edit leaves a dirty row');
      expect(
          (await h.pocket.outbox.readSyncRow(h.pocket.db, 'widgets', ids[4]))!
              .syncState,
          SyncState.error,
          reason: 'the 404-dead-lettered row survives as error');
      expect(
          (await h.pocket.outbox.readSyncRow(h.pocket.db, 'widgets', ids[5]))!
              .syncState,
          SyncState.blocked,
          reason: 'the 403-parks row survives as blocked');
      expect(
          (await h.pocket.outbox
                  .readSyncRow(h.pocket.db, 'widgets2', conflictId))!
              .syncState,
          SyncState.conflict,
          reason: 'the conflict survives the restart');
      expect(
          (await h.pocket.outbox
                  .readSyncRow(h.pocket.db, 'widgets', malformedId))!
              .syncState,
          SyncState.quarantine,
          reason: 'the quarantine survives the restart');
      expect(await h.pocket.collection('widgets').get(ids[2]), isNull,
          reason: 'the clean hidden row was purged past the cutoff');
    });
  });
}
