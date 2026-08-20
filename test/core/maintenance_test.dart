import 'dart:convert';

import 'package:localpocket/localpocket.dart';
import 'package:sqlite3/sqlite3.dart' as sqlite3;
import 'package:test/test.dart';

import '../support/helpers.dart';

/// Maintenance operations: analyze, walCheckpoint, vacuum, compact,
/// runMaintenance, pruneOutbox, files.gc, and enforceStorageCap, including
/// race/safety behavior and cleanup completeness.
void main() {
  Future<void> seedCleanArchivedRow(LocalPocket pocket, String id,
      {required int lastSeenMs}) async {
    final col = pocket.collection('widgets');
    await col.put(record(id: id, name: 'archived-$id'));
    await pocket.outbox
        .ack('widgets', id, serverUpdated: '2026-01-01 00:00:00.000Z');
    await col.archive(id);
    // Archive dirtied the sync row; mark it clean again (the archived state is
    // now settled) and set the retention timestamp.
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

  group('maintenance basics', () {
    test('analyze runs with and without a store argument', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      await pocket.analyze();
      await pocket.analyze('widgets');
    });

    test('walCheckpoint runs when WAL is supported', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final pocket = await openPocket(path: t.path);
      addTearDown(pocket.close);
      await pocket
          .collection('widgets')
          .put(record(id: generateRecordId(), name: 'x'));
      await pocket.walCheckpoint();
    });

    test('walCheckpoint is a no-op when the engine lacks WAL support', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final executed = <String>[];
      final db = DirectSqliteDatabase(sqlite3.sqlite3.open(t.path));
      db.onExecute = (sql, _) => executed.add(sql);
      // A web-profile open never applies WAL, so the probe reports
      // walSupported == false — the guard branch is reachable.
      final pocket =
          await openPocket(path: t.path, database: db, platform: PlatformProfile.web);
      addTearDown(pocket.close);
      expect(pocket.capabilities.walSupported, isFalse,
          reason: 'web profile reports no WAL');

      executed.clear();
      await pocket.walCheckpoint();
      expect(
          executed.where((s) => s.contains('wal_checkpoint')).toList(), isEmpty,
          reason: 'walCheckpoint must not touch the engine without WAL');
    });

    test('vacuum with and without pages', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final pocket = await openPocket(path: t.path);
      addTearDown(pocket.close);
      for (var i = 0; i < 50; i++) {
        await pocket
            .collection('widgets')
            .put(record(id: generateRecordId(), name: 'n$i'));
      }
      await pocket.vacuum();
      await pocket.vacuum(pages: 1);
    });
  });

  group('compact', () {
    test('removes only clean synced archived rows older than the cutoff',
        () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      const now = 1800000000000;
      final old = generateRecordId();
      final recent = generateRecordId();
      final dirty = generateRecordId();
      final conflict = generateRecordId();

      await seedCleanArchivedRow(pocket, old, lastSeenMs: now - 200000000);
      await seedCleanArchivedRow(pocket, recent, lastSeenMs: now - 1000000);
      // A dirty archived row must never be compacted.
      await seedCleanArchivedRow(pocket, dirty, lastSeenMs: now - 200000000);
      await pocket.collection('widgets').patch(dirty, {'qty': 1});
      // A conflict row must never be compacted.
      await seedCleanArchivedRow(pocket, conflict, lastSeenMs: now - 200000000);
      await pocket.db.execute(
          'UPDATE lp_sync_row SET sync_state = ? WHERE store = ? AND record_id = ?',
          ['conflict', 'widgets', conflict]);
      // A clean visible (non-archived) row is untouched.
      final visible = generateRecordId();
      await pocket.collection('widgets').put(record(id: visible, name: 'v'));
      await pocket.outbox
          .ack('widgets', visible, serverUpdated: '2026-01-01 00:00:00.000Z');

      final removed = await pocket.compact('widgets',
          olderThan: const Duration(days: 1), nowMs: now);
      expect(removed, 1, reason: 'only the old clean archived row is removed');

      expect(await pocket.collection('widgets').get(old), isNull);
      expect(await pocket.collection('widgets').get(recent), isNotNull,
          reason: 'recent rows are kept');
      expect(await pocket.collection('widgets').get(dirty), isNotNull,
          reason: 'dirty rows are never compacted');
      expect(await pocket.collection('widgets').get(conflict), isNotNull,
          reason: 'conflict rows are never compacted');
      expect(await pocket.collection('widgets').get(visible), isNotNull);
    });

    test('cutoff boundary: last_seen_at equal to the cutoff is kept', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      const now = 1800000000000;
      const cutoff = now - 86400000; // 1 day
      final atCutoff = generateRecordId();
      final below = generateRecordId();
      await seedCleanArchivedRow(pocket, atCutoff, lastSeenMs: cutoff);
      await seedCleanArchivedRow(pocket, below, lastSeenMs: cutoff - 1);

      final removed = await pocket.compact('widgets',
          olderThan: const Duration(days: 1), nowMs: now);
      expect(removed, 1);
      expect(await pocket.collection('widgets').get(atCutoff), isNotNull,
          reason: 'last_seen_at == cutoff is strictly kept');
      expect(await pocket.collection('widgets').get(below), isNull);
    });

    test('compact removes file refs, queued ops, conflicts, and cache entries',
        () async {
      final blobStore = MemoryBlobStore();
      final pocket = await openPocket(blobStore: blobStore);
      addTearDown(pocket.close);
      const now = 1800000000000;
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'x'));
      await pocket.outbox
          .ack('widgets', id, serverUpdated: '2026-01-01 00:00:00.000Z');
      await pocket.files.attach(
        store: 'widgets',
        recordId: id,
        bytes: Stream.value(utf8.encode('compactable bytes')),
      );
      // Open conflict + queued file op for the record.
      await pocket.db.execute(
          'INSERT INTO lp_conflicts (store, record_id, base_json, local_json, '
          'remote_json, dirty_local, dirty_remote, detected_at) '
          'VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
          ['widgets', id, '{}', '{}', '{}', '["*"]', '["*"]', 0]);
      // Warm the point-read cache.
      expect(await pocket.collection('widgets').get(id), isNotNull);
      await pocket.collection('widgets').archive(id);
      await pocket.db.update(
          'lp_sync_row',
          {
            'sync_state': SyncState.clean.name,
            'access_state': AccessState.visible.name,
            'last_seen_at': now - 200000000,
          },
          where: 'store = ? AND record_id = ?',
          whereArgs: ['widgets', id]);

      await pocket.compact('widgets',
          olderThan: const Duration(days: 1), nowMs: now);

      expect(await pocket.collection('widgets').get(id), isNull);
      expect(await pocket.files.list(store: 'widgets', recordId: id), isEmpty);
      final conflicts = await pocket.db.rawQuery(
          'SELECT COUNT(*) c FROM lp_conflicts WHERE store = ? AND record_id = ?',
          ['widgets', id]);
      expect(conflicts.single['c'], 0);
      final ops = await pocket.db.rawQuery(
          "SELECT state FROM lp_op_queue WHERE store = 'widgets' AND record_id = ?",
          [id]);
      expect(ops.every((r) => r['state'] == 'done'), isTrue,
          reason: 'queued file ops are neutralized');
    });

    test('compact is safe while writes are in flight', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      const now = 1800000000000;
      final old = generateRecordId();
      await seedCleanArchivedRow(pocket, old, lastSeenMs: now - 200000000);

      // Concurrent writes must not be lost or corrupted by the compact pass.
      final writes = <Future<void>>[
        for (var i = 0; i < 20; i++)
          pocket
              .collection('widgets')
              .put(record(id: generateRecordId(), name: 'w$i')),
      ];
      final compactF = pocket.compact('widgets',
          olderThan: const Duration(days: 1), nowMs: now);
      await Future.wait([...writes, compactF]);
      expect(await pocket.collection('widgets').get(old), isNull);
      expect(await pocket.collection('widgets').query().count(), 20);
    });
  });
  test('compact emits RecordChangeEvent with action purge (EVT-01)', () async {
    final pocket = await openPocket();
    addTearDown(pocket.close);
    const now = 1800000000000;
    final id = generateRecordId();
    await seedCleanArchivedRow(pocket, id, lastSeenMs: now - 200000000);

    final events = <RecordChangeEvent>[];
    final sub = pocket.collection('widgets').events.listen(events.add);
    final localEvents = <RecordChangeEvent>[];
    final localSub = pocket.onLocal().listen(localEvents.add);

    final removed = await pocket.compact('widgets',
        olderThan: const Duration(days: 1), nowMs: now);
    expect(removed, 1);

    await Future<void>.delayed(Duration.zero);
    expect(events, hasLength(1));
    final event = events.single;
    expect(event.store, 'widgets');
    expect(event.id, id);
    expect(event.origin, ChangeOrigin.local);
    expect(event.action, ChangeAction.purge);
    expect(event.oldRecord, isNotNull);
    expect(event.oldRecord?['id'], id);
    expect(event.newRecord, isNull);
    expect(event.changedFields, contains('name'));

    expect(localEvents, hasLength(1));
    expect(localEvents.single.action, ChangeAction.purge);

    await sub.cancel();
    await localSub.cancel();
  });

  group('pruneOutbox', () {
    test('runs during queued writes without corruption', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final writes = <Future<void>>[
        for (var i = 0; i < 20; i++)
          col.put(record(id: generateRecordId(), name: 'w$i')),
      ];
      final pruneF = pocket.pruneOutbox();
      await Future.wait([...writes, pruneF]);
      // All writes are intact; the outbox holds one op per unsynced record.
      expect(await col.query().all().count(), 20);
      final outbox =
          await pocket.db.rawQuery('SELECT COUNT(*) c FROM lp_outbox');
      expect(outbox.single['c'], 20);
    });

    test('runMaintenance runs the full state machine', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final pocket = await openPocket(path: t.path);
      addTearDown(pocket.close);
      const now = 1800000000000;
      await seedCleanArchivedRow(pocket, generateRecordId(),
          lastSeenMs: now - 100000);
      await pocket
          .collection('widgets')
          .put(record(id: generateRecordId(), name: 'keep'));
      await pocket.runMaintenance(compactOlderThan: const Duration(days: 1));
      expect(await pocket.collection('widgets').query().all().count(), 1,
          reason: 'runMaintenance compacted the old archived row');
    });
  });

  group('files maintenance', () {
    test('gc deletes refcount-zero blobs older than the grace period',
        () async {
      final blobStore = MemoryBlobStore();
      final pocket = await openPocket(blobStore: blobStore);
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();
      await col.put(record(id: id, name: 'x'));
      await pocket.files.attach(
          store: 'widgets',
          recordId: id,
          bytes: Stream.value(utf8.encode('dead blob bytes')),
          name: 'a.txt');
      await pocket.files.attach(
          store: 'widgets',
          recordId: id,
          bytes: Stream.value(utf8.encode('live blob bytes')),
          name: 'b.txt');

      // Make the first blob unreferenced and old; keep the second referenced.
      final blobs = await pocket.db
          .rawQuery("SELECT hash FROM lp_blobs WHERE refcount = 1");
      await pocket.db.execute(
          'DELETE FROM lp_file_refs WHERE hash = ?', [blobs[0]['hash']]);
      await pocket.db.execute('UPDATE lp_blobs SET refcount = 0 WHERE hash = ?',
          [blobs[0]['hash']]);
      await pocket.db.execute(
          'UPDATE lp_blobs SET last_access = ? WHERE hash = ?', [
        DateTime.now().millisecondsSinceEpoch - (8 * 86400 * 1000),
        blobs[0]['hash']
      ]);

      final removed = await pocket.files.gc();
      expect(removed, greaterThanOrEqualTo(1));
      final remaining =
          await pocket.db.rawQuery('SELECT COUNT(*) c FROM lp_blobs');
      expect(remaining.single['c'], 1,
          reason: 'the referenced blob survives GC');
    });

    test('enforceStorageCap evicts LRU synced blobs but never pending uploads',
        () async {
      final blobStore = MemoryBlobStore();
      final pocket = await openPocket(blobStore: blobStore);
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');

      // Three blobs of distinct content.
      final recA = generateRecordId();
      final recB = generateRecordId();
      final recC = generateRecordId();
      await col.put(record(id: recA, name: 'a'));
      await col.put(record(id: recB, name: 'b'));
      await col.put(record(id: recC, name: 'c'));
      await pocket.files.attach(
          store: 'widgets',
          recordId: recA,
          bytes: Stream.value(utf8.encode('a' * 1000)),
          name: 'a');
      await pocket.files.attach(
          store: 'widgets',
          recordId: recB,
          bytes: Stream.value(utf8.encode('b' * 2000)),
          name: 'b');
      await pocket.files.attach(
          store: 'widgets',
          recordId: recC,
          bytes: Stream.value(utf8.encode('c' * 3000)),
          name: 'c');

      // Mark A and C synced (LRU: A oldest, C newest). B stays pending_upload.
      await pocket.db.execute(
          "UPDATE lp_file_refs SET state = 'synced' WHERE store = 'widgets' "
          'AND record_id = ?',
          [recA]);
      await pocket.db.execute(
          "UPDATE lp_file_refs SET state = 'synced' WHERE store = 'widgets' "
          'AND record_id = ?',
          [recC]);
      final nowMs = DateTime.now().millisecondsSinceEpoch;
      final blobs = await pocket.db
          .rawQuery("SELECT hash FROM lp_blobs ORDER BY size ASC");
      // Set distinct last_access: A oldest, C newest.
      await pocket.db.execute(
          'UPDATE lp_blobs SET last_access = ? WHERE size = ?',
          [nowMs - 10000, 1000]);
      await pocket.db.execute(
          'UPDATE lp_blobs SET last_access = ? WHERE size = ?', [nowMs, 3000]);
      expect(blobs, hasLength(3));

      // Cap below the total: evicts the LRU synced blob (A), never B.
      final evicted = await pocket.files
          .enforceStorageCap(maxBytes: 1000 + 2000 + 3000 - 1);
      expect(evicted, 1);
      final refA = (await pocket.db.rawQuery(
              "SELECT state FROM lp_file_refs WHERE store = 'widgets' AND record_id = ?",
              [recA]))
          .single;
      expect(refA['state'], 'remote_only');
      // B (pending_upload) was never evicted even though it is LRU after A.
      final refB = (await pocket.db.rawQuery(
              "SELECT state FROM lp_file_refs WHERE store = 'widgets' AND record_id = ?",
              [recB]))
          .single;
      expect(refB['state'], 'pending_upload');
    });
  });
}
