import 'package:localpocket/src/internal/raw_surface.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import '../sync/invariants_oracle.dart';

/// Outbox pruning retention policy: `pruneOutbox` removes only ops whose sync
/// row is `clean` (settled) or missing (orphaned). Ops for every pending state
/// — dirty, inFlight, conflict, blocked, error — are always retained because
/// the op is the only record of the unsynced edit. `maxEntries` is retained
/// for API compatibility but never evicts pending work.
void main() {
  Future<void> insertDomainRow(LocalPocket pocket, String id) async {
    await pocket.db.execute(
        'INSERT INTO widgets (id, name) VALUES (?, ?)', [id, 'name-$id']);
  }

  Future<void> insertSyncRow(
    LocalPocket pocket,
    String id,
    String syncState, {
    String? opId,
    int? remoteUpdated,
    int? baseUpdated,
    String baseHash = '',
    String? baseJson,
    String? lastError,
    int nextRetryAt = 0,
  }) async {
    await pocket.db.execute(
        'INSERT INTO lp_sync_row (store, record_id, remote_updated, '
        'last_seen_at, base_updated, base_hash, base_json, sync_state, '
        'dirty_fields, local_rev, access_state, op_id, attempt_count, '
        'next_retry_at, last_error, schema_ver) '
        'VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [
          'widgets',
          id,
          remoteUpdated,
          null,
          baseUpdated,
          baseHash,
          baseJson,
          syncState,
          '[]',
          1,
          'visible',
          opId,
          0,
          nextRetryAt,
          lastError,
          1
        ]);
  }

  Future<void> insertOutboxOp(
    LocalPocket pocket,
    String id,
    String opId,
    int createdAt, {
    int? baseUpdated,
    String baseHash = '',
  }) async {
    await pocket.db.execute(
        'INSERT INTO lp_outbox (store, record_id, kind, payload_json, '
        'base_updated, base_hash, dirty_fields, op_id, created_at, updated_at, '
        'depends_on_op) '
        'VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [
          'widgets',
          id,
          'upsert',
          '{"id":"$id"}',
          baseUpdated,
          baseHash,
          '[]',
          opId,
          createdAt,
          createdAt,
          null
        ]);
  }

  /// Seeds a record in [syncState] with the matching domain row and outbox op,
  /// shaped the way production writes them so the sync-invariants oracle
  /// accepts every fixture.
  Future<void> seedRecord(
    LocalPocket pocket,
    String id,
    String syncState,
    int createdAt, {
    int? remoteUpdated,
    int? baseUpdated,
    String baseHash = '',
    String? baseJson,
    String? lastError,
    int nextRetryAt = 0,
    bool withDomain = true,
    bool withOp = true,
  }) async {
    if (withDomain) {
      await insertDomainRow(pocket, id);
    }
    final opId = 'op-$id';
    await insertSyncRow(pocket, id, syncState,
        opId: withOp ? opId : null,
        remoteUpdated: remoteUpdated,
        baseUpdated: baseUpdated,
        baseHash: baseHash,
        baseJson: baseJson,
        lastError: lastError,
        nextRetryAt: nextRetryAt);
    if (withOp) {
      await insertOutboxOp(pocket, id, opId, createdAt,
          baseUpdated: baseUpdated, baseHash: baseHash);
    }
  }

  Future<Set<String>> outboxIds(LocalPocket pocket) async {
    final rows = await pocket.db.rawQuery(
        'SELECT record_id FROM lp_outbox WHERE store = ?', ['widgets']);
    return {for (final r in rows) r['record_id'] as String};
  }

  Future<Set<String>> syncIds(LocalPocket pocket) async {
    final rows = await pocket.db.rawQuery(
        'SELECT record_id FROM lp_sync_row WHERE store = ?', ['widgets']);
    return {for (final r in rows) r['record_id'] as String};
  }

  group('pruneOutbox retention policy', () {
    test(
        'non-clean ops always survive; only clean and orphaned ops are '
        'removed', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final dirty = generateRecordId();
      final inFlight = generateRecordId();
      final conflict = generateRecordId();
      final error = generateRecordId();
      final blocked = generateRecordId();
      final clean = generateRecordId();
      final quarantine = generateRecordId();
      final orphan = generateRecordId();

      await seedRecord(pocket, dirty, 'dirty', 1000);
      await seedRecord(pocket, inFlight, 'inFlight', 2000);
      await seedRecord(pocket, conflict, 'conflict', 3000,
          baseUpdated: 3000, baseHash: 'c-hash', baseJson: '{"name":"c"}');
      await seedRecord(pocket, error, 'error', 4000, lastError: 'boom');
      await seedRecord(pocket, blocked, 'blocked', 5000, lastError: '403');
      // Clean row whose op was never drained (stale op left behind).
      await insertDomainRow(pocket, clean);
      await insertSyncRow(pocket, clean, 'clean', remoteUpdated: 6000);
      await insertOutboxOp(pocket, clean, 'op-$clean', 6000);
      // Quarantine rows never carry an op (pull-side, no local work).
      await insertSyncRow(pocket, quarantine, 'quarantine',
          lastError: 'bad payload', nextRetryAt: 9999);
      // Orphaned op: no sync row and no domain row.
      await insertOutboxOp(pocket, orphan, 'op-$orphan', 7000);

      // A cap below the count must NOT evict any pending op.
      final pruned = await pocket.pruneOutbox(maxEntries: 1);
      expect(pruned, 2, reason: 'only the stale clean op and the orphan op');

      final remaining = await outboxIds(pocket);
      expect(remaining, {dirty, inFlight, conflict, error, blocked},
          reason: 'pending ops are never evicted, even under a cap of 1');
      expect(remaining, isNot(contains(clean)));
      expect(remaining, isNot(contains(orphan)));

      // Sync rows are never touched.
      expect(
          await syncIds(pocket),
          containsAll(
              [dirty, inFlight, conflict, error, blocked, clean, quarantine]));

      // The sync-invariants oracle passes for every record after pruning —
      // no dangling op_id, no op left behind for a clean row.
      for (final id in [
        dirty,
        inFlight,
        conflict,
        error,
        blocked,
        clean,
        quarantine,
        orphan
      ]) {
        await expectSyncInvariants(pocket, 'widgets', id);
      }
    });

    test('maxEntries at or above the current count evicts nothing', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final error = generateRecordId();
      final dirty = generateRecordId();
      await seedRecord(pocket, error, 'error', 1000, lastError: 'boom');
      await seedRecord(pocket, dirty, 'dirty', 2000);

      expect(await pocket.pruneOutbox(maxEntries: 2), 0);
      expect(await outboxIds(pocket), {error, dirty});
      expect(await pocket.pruneOutbox(maxEntries: 5), 0);
      expect(await outboxIds(pocket), {error, dirty});
    });

    test('maxEntries zero and negative still never evict pending ops',
        () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final error = generateRecordId();
      final dirty = generateRecordId();
      await seedRecord(pocket, error, 'error', 1000, lastError: 'boom');
      await seedRecord(pocket, dirty, 'dirty', 2000);

      // zero
      expect(await pocket.pruneOutbox(maxEntries: 0), 0);
      expect(await outboxIds(pocket), {error, dirty},
          reason: 'pending ops survive even at maxEntries 0');
      // negative
      expect(await pocket.pruneOutbox(maxEntries: -1), 0);
      expect(await outboxIds(pocket), {error, dirty},
          reason: 'negative maxEntries never evicts pending ops');
    });

    test('orphaned outbox rows (missing sync row) are always removed',
        () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final withSync = generateRecordId();
      final orphan = generateRecordId();
      await seedRecord(pocket, withSync, 'dirty', 1000);
      // Orphaned: no lp_sync_row entry.
      await insertOutboxOp(pocket, orphan, 'op-$orphan', 2000);

      final pruned = await pocket.pruneOutbox(maxEntries: 100);
      expect(pruned, 1);
      expect(await outboxIds(pocket), {withSync});
      await expectSyncInvariants(pocket, 'widgets', orphan);
    });

    test('error ops are never evicted, regardless of age or cap', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final newest = generateRecordId();
      final middle = generateRecordId();
      final oldest = generateRecordId();
      // Oldest-first ordering used to select eviction victims; with the
      // clean-only policy even the oldest dead-lettered edit must survive.
      await seedRecord(pocket, middle, 'error', 2000, lastError: 'boom');
      await seedRecord(pocket, newest, 'error', 3000, lastError: 'boom');
      await seedRecord(pocket, oldest, 'error', 1000, lastError: 'boom');

      await pocket.pruneOutbox(maxEntries: 1);
      expect(await outboxIds(pocket), {oldest, middle, newest},
          reason: 'error ops are dead-lettered unsynced edits; all survive');
      for (final id in [oldest, middle, newest]) {
        await expectSyncInvariants(pocket, 'widgets', id);
      }
    });

    test('pruneOutbox never removes a pending op or its sync row', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final error = generateRecordId();
      await seedRecord(pocket, error, 'error', 1000, lastError: 'boom');

      await pocket.pruneOutbox(maxEntries: 0);
      // Both the op (the only record of the pending edit) and the sync row
      // survive, and the op_id still mirrors the op.
      expect(await outboxIds(pocket), {error});
      expect(await syncIds(pocket), contains(error));
      await expectSyncInvariants(pocket, 'widgets', error);
    });
  });
}
