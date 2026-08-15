import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';

/// Outbox pruning retention policy: which sync states survive `pruneOutbox`,
/// maxEntries boundaries, orphaned rows, and deterministic ordering.
void main() {
  Future<void> insertOutboxRow(
    LocalPocket pocket,
    String id,
    String syncState,
    int createdAt,
  ) async {
    final opId = 'op-$id';
    await pocket.db.execute(
        'INSERT INTO lp_sync_row (store, record_id, remote_updated, '
        'last_seen_at, base_updated, base_hash, base_json, sync_state, '
        'dirty_fields, local_rev, access_state, op_id, attempt_count, '
        'next_retry_at, last_error, schema_ver) '
        'VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [
          'widgets',
          id,
          null,
          null,
          null,
          '',
          null,
          syncState,
          '[]',
          1,
          'visible',
          opId,
          0,
          0,
          null,
          1
        ]);
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
          null,
          '',
          '[]',
          opId,
          createdAt,
          createdAt,
          null
        ]);
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
        'dirty and conflict rows survive; clean/error/quarantine are evicted '
        'when over the cap (documented)', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final dirty = generateRecordId();
      final conflict = generateRecordId();
      final clean = generateRecordId();
      final error = generateRecordId();
      final quarantine = generateRecordId();

      await insertOutboxRow(pocket, dirty, 'dirty', 1000);
      await insertOutboxRow(pocket, conflict, 'conflict', 2000);
      await insertOutboxRow(pocket, clean, 'clean', 3000);
      await insertOutboxRow(pocket, error, 'error', 4000);
      await insertOutboxRow(pocket, quarantine, 'quarantine', 5000);

      // Cap below the count forces eviction of eligible rows.
      final pruned = await pocket.pruneOutbox(maxEntries: 1);
      expect(pruned, greaterThanOrEqualTo(3));

      final remaining = await outboxIds(pocket);
      // Dirty + conflict are always preserved for recovery.
      expect(remaining, contains(dirty));
      expect(remaining, contains(conflict));
      // Clean rows are orphaned and removed; error/quarantine are evicted when
      // over the cap (documented current policy — they are not excluded).
      expect(remaining, isNot(contains(clean)));
      expect(remaining, isNot(contains(error)));
      expect(remaining, isNot(contains(quarantine)));
    });

    test('maxEntries at or above the current count evicts nothing', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final error = generateRecordId();
      final dirty = generateRecordId();
      await insertOutboxRow(pocket, error, 'error', 1000);
      await insertOutboxRow(pocket, dirty, 'dirty', 2000);

      expect(await pocket.pruneOutbox(maxEntries: 2), 0);
      expect(await outboxIds(pocket), {error, dirty});
      expect(await pocket.pruneOutbox(maxEntries: 5), 0);
      expect(await outboxIds(pocket), {error, dirty});
    });

    test('maxEntries zero and negative evict all eligible rows', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final error = generateRecordId();
      final dirty = generateRecordId();
      await insertOutboxRow(pocket, error, 'error', 1000);
      await insertOutboxRow(pocket, dirty, 'dirty', 2000);

      // zero
      await pocket.pruneOutbox(maxEntries: 0);
      expect(await outboxIds(pocket), {dirty},
          reason: 'dirty rows are never evicted, even at maxEntries 0');
      await pocket.pruneOutbox(maxEntries: -1);
      expect(await outboxIds(pocket), {dirty},
          reason: 'negative maxEntries behaves like zero');
    });

    test('orphaned outbox rows (missing sync row) are always removed',
        () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final withSync = generateRecordId();
      final orphan = generateRecordId();
      await insertOutboxRow(pocket, withSync, 'dirty', 1000);
      // Orphaned: no lp_sync_row entry.
      await pocket.db.execute(
          'INSERT INTO lp_outbox (store, record_id, kind, payload_json, '
          'base_updated, base_hash, dirty_fields, op_id, created_at, updated_at, '
          'depends_on_op) '
          'VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
          [
            'widgets',
            orphan,
            'upsert',
            '{"id":"$orphan"}',
            null,
            '',
            '[]',
            'op-$orphan',
            2000,
            2000,
            null
          ]);

      // A high cap would otherwise keep everything.
      final pruned = await pocket.pruneOutbox(maxEntries: 100);
      expect(pruned, 1);
      expect(await outboxIds(pocket), {withSync});
    });

    test('eviction is deterministic by oldest created_at first', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final newest = generateRecordId();
      final middle = generateRecordId();
      final oldest = generateRecordId();
      // All error-state rows are eligible; ordering must be by created_at.
      await insertOutboxRow(pocket, middle, 'error', 2000);
      await insertOutboxRow(pocket, newest, 'error', 3000);
      await insertOutboxRow(pocket, oldest, 'error', 1000);

      // Cap of 1 keeps exactly one row: the newest.
      await pocket.pruneOutbox(maxEntries: 1);
      final remaining = await outboxIds(pocket);
      expect(remaining, {newest},
          reason: 'oldest eligible rows are evicted in created_at order');
    });

    test('pruneOutbox removes only the outbox row, never the sync row',
        () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final error = generateRecordId();
      await insertOutboxRow(pocket, error, 'error', 1000);

      await pocket.pruneOutbox(maxEntries: 0);
      // The outbox row is gone but the sync row remains for visibility.
      expect(await outboxIds(pocket), isEmpty);
      expect(await syncIds(pocket), contains(error));
    });
  });
}
