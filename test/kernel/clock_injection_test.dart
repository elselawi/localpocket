import 'package:localpocket/src/kernel/ids.dart';
import 'package:localpocket/src/kernel/schema.dart';
import 'package:localpocket/src/kernel/sync/engine.dart';
import 'package:localpocket/src/kernel/sync/status.dart';
import 'package:localpocket/src/kernel/sync/sync_tables.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import '../support/engine_helpers.dart';
import '../support/mock_backend.dart';

/// Clock injection: every persistence/engine timestamp should come
/// from the single injectable clock (`LocalPocket.now`, adopted by
/// `SyncConfig.now`), never from a raw `DateTime.now()`, so tests are fully
/// deterministic. A fake mutable clock pins every value; if any path leaked a
/// wall-clock read these assertions would fail.
void main() {
  test('outbox created_at/updated_at use the injected clock', () async {
    var clock = 1700000000000;
    final pocket = await openPocket(now: () => clock);
    addTearDown(pocket.close);
    final id = generateRecordId();
    await pocket.collection('widgets').put(record(id: id, name: 'x'));

    Future<Map<String, Object?>> row() async =>
        (await pocket.db.query('lp_outbox',
                where: 'store = ? AND record_id = ?',
                whereArgs: ['widgets', id]))
            .single;

    expect((await row())['created_at'], clock);
    expect((await row())['updated_at'], clock);

    // A later edit advances updated_at but keeps the first-write created_at.
    clock += 5000;
    await pocket.collection('widgets').patch(id, {'name': 'y'});
    expect((await row())['created_at'], 1700000000000,
        reason: 'created_at keeps the first-write clock value');
    expect((await row())['updated_at'], clock,
        reason: 'updated_at reflects the later clock value');
  });

  test('outbox ack writes last_seen_at from the injected clock', () async {
    var clock = 1700000000000;
    final pocket = await openPocket(now: () => clock);
    addTearDown(pocket.close);
    final id = generateRecordId();
    await pocket.collection('widgets').put(record(id: id, name: 'x'));

    clock += 100000;
    await pocket.outbox
        .ack('widgets', id, serverUpdated: '2026-01-01 00:00:00.000Z');
    final sr = (await pocket.db.query('lp_sync_row',
            where: 'store = ? AND record_id = ?', whereArgs: ['widgets', id]))
        .single;
    expect(sr['last_seen_at'], clock,
        reason: 'settlement last-seen uses the injected clock');
  });

  test('dead-letter at timestamp uses the injected clock', () async {
    var clock = 1700000000000;
    final pocket = await openPocket(now: () => clock);
    addTearDown(pocket.close);
    final id = generateRecordId();
    await pocket.collection('widgets').put(record(id: id, name: 'x'));

    clock += 5000;
    await pocket.outbox.markDeadLetter(
        store: 'widgets',
        id: id,
        kind: 'test',
        error: 'boom',
        payloadJson: '{}');
    final row = (await pocket.db.query('lp_dead_letter')).single;
    expect(row['at'], clock,
        reason: 'dead-letter timestamp uses the injected clock');
  });

  test('op queue created_at uses the injected clock', () async {
    const clock = 1700000000000;
    final pocket = await openPocket(now: () => clock);
    addTearDown(pocket.close);
    await pocket.opQueue.enqueue(
        store: 'widgets',
        recordId: generateRecordId(),
        kind: OpQueueKind.fileUpload,
        payload: {'ref_id': 'x'});
    final row = (await pocket.db.query('lp_op_queue')).single;
    expect(row['created_at'], clock,
        reason: 'op-queue enqueue uses the injected clock');
  });

  test('store registration created_at uses the injected clock', () async {
    const clock = 1700000000000;
    final pocket = await openPocket(now: () => clock);
    addTearDown(pocket.close);
    final row = (await pocket.db
            .query('lp_stores', where: 'store = ?', whereArgs: ['widgets']))
        .single;
    expect(row['created_at'], clock,
        reason: 'store registration uses the injected clock');
  });

  test('migration ledger applied_at uses the injected clock', () async {
    final t = await tempDbPath();
    addTearDown(t.cleanup);

    var clock = 1700000000000;
    final v1 = await openPocket(path: t.path, now: () => clock);
    await v1
        .collection('widgets')
        .put(record(id: generateRecordId(), name: 'x', qty: 1));
    await v1.close();

    // Reopen with a one-step additive migration under a new clock value.
    clock = 1750000000000;
    final v2 = await openPocket(path: t.path, now: () => clock, stores: [
      widgetsSchema(
        version: 2,
        extraFields: [Field.text('nickname')],
        migrations: [
          StoreMigration(toVersion: 2, addedFields: [Field.text('nickname')]),
        ],
      ),
    ]);
    addTearDown(v2.close);

    final created = (await v2.db.query('lp_migrations',
            where: 'name = ?', whereArgs: ['create:widgets']))
        .single;
    expect(created['applied_at'], 1700000000000,
        reason: 'store-creation ledger row uses the clock at open time');

    final migrated = (await v2.db.query('lp_migrations',
            where: 'name = ?', whereArgs: ['migrate:widgets:v2']))
        .single;
    expect(migrated['applied_at'], clock,
        reason: 'migration ledger rows use the injected clock');
  });

  test('compact defaults its cutoff to the injected clock', () async {
    const clock = 1800000000000;
    final pocket = await openPocket(now: () => clock);
    addTearDown(pocket.close);

    Future<void> seedCleanArchivedRow(String id, int lastSeenMs) async {
      final col = pocket.collection('widgets');
      await col.put(record(id: id, name: 'archived-$id'));
      await pocket.outbox
          .ack('widgets', id, serverUpdated: '2026-01-01 00:00:00.000Z');
      await col.archive(id);
      await pocket.db.update(
          'lp_sync_row',
          {
            'sync_state': SyncState.clean.name,
            'access_state': AccessState.visible.name,
            'last_seen_at': lastSeenMs,
          },
          where: 'store = ? AND record_id = ?',
          whereArgs: ['widgets', id]);
    }

    final old = generateRecordId();
    final recent = generateRecordId();
    await seedCleanArchivedRow(old, clock - 200000000);
    await seedCleanArchivedRow(recent, clock - 1000);

    // No explicit nowMs: the cutoff must come from the injected clock.
    final removed =
        await pocket.compact('widgets', olderThan: const Duration(days: 1));
    expect(removed, 1,
        reason: 'only the row older than clock - 1 day is compacted');
    expect(await pocket.collection('widgets').get(old), isNull);
    expect(await pocket.collection('widgets').get(recent), isNotNull,
        reason: 'the recent row is kept');
  });

  test('SyncEngine inherits the pocket clock when no config is given',
      () async {
    var clock = 1700000000000;
    final pocket = await openPocket(now: () => clock);
    addTearDown(pocket.close);
    final engine = SyncEngine(pocket: pocket, backend: MockSyncBackend());
    expect(engine.config.now(), clock,
        reason: 'the default engine config uses the pocket clock');
    clock += 7000;
    expect(engine.config.now(), clock,
        reason: 'the shared clock advances together');
  });

  test('engine lastSyncAt derives from the injected clock', () async {
    var clock = 1700000000000;
    final h = await EngineHarness.create(now: () => clock);
    addTearDown(h.close);
    final id = generateRecordId();
    await h.pocket.collection('widgets').put(record(id: id, name: 'x'));

    final statuses = <SyncStatus>[];
    final sub = h.engine.status.listen(statuses.add);
    clock += 2000;
    await h.engine.syncNow();
    await Future<void>.delayed(Duration.zero);

    expect(statuses.last.lastSyncAt, DateTime.fromMillisecondsSinceEpoch(clock),
        reason: 'the cycle-completion timestamp uses the injected clock');
    await sub.cancel();
  });
}
