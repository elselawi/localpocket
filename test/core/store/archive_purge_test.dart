import 'dart:convert';

import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';

/// Archive / restore / purge boundary coverage: missing rows, repeated ops,
/// unsynced combinations, keepUnsyncedArchives, visibility, files/outbox/sync/
/// conflicts/op-queue cleanup, cache invalidation, notifications, idempotency,
/// and cross-store purge safety.
void main() {
  group('archive/restore/purge boundaries', () {
    test('archive and restore of missing rows throw RecordNotFoundException',
        () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();
      await expectLater(
          col.archive(id), throwsA(isA<RecordNotFoundException>()));
      await expectLater(
          col.restore(id), throwsA(isA<RecordNotFoundException>()));
    });

    test('purge of a missing row is an idempotent no-op', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();
      // No throw on the first or second purge.
      await col.purge(id);
      await col.purge(id);
      await col.purge(id);
      expect(await col.query().all().count(), 0);
    });

    test('repeated archive and restore are stable', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();
      await col.put(record(id: id, name: 'x'));
      await pocket.outbox
          .ack('widgets', id, serverUpdated: '2026-01-01 00:00:00.000Z');

      await col.archive(id);
      await col.archive(id);
      expect((await col.get(id))!['archived'], isTrue);
      expect(await col.query().count(), 0);

      await col.restore(id);
      await col.restore(id);
      expect((await col.get(id))!['archived'], isFalse);
      expect(await col.query().count(), 1);
    });

    test('unsynced create then archive vanishes the row (no base)', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();
      await col.put(record(id: id, name: 'unsynced'));

      await col.archive(id);
      // A never-remote row vanishes: no domain, outbox, or sync row.
      expect(await col.get(id), isNull);
      expect(await col.query().all().count(), 0);
      expect(await pocket.outbox.readOp(pocket.db, 'widgets', id), isNull);
      expect(await pocket.outbox.readSyncRow(pocket.db, 'widgets', id), isNull);
    });

    test('keepUnsyncedArchives preserves an archived unsynced create',
        () async {
      final pocket =
          await openPocket(stores: [widgetsSchema(keepUnsyncedArchives: true)]);
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();
      await col.put(record(id: id, name: 'unsynced'));

      await col.archive(id);
      final doc = await col.get(id);
      expect(doc!['archived'], isTrue);
      expect(await col.query().includeArchived().count(), 1);
      // Still pushable: an upsert op remains.
      final op = await pocket.outbox.readOp(pocket.db, 'widgets', id);
      expect(op, isNotNull);
      expect(op!.kind, OutboxKind.upsert);
    });

    test('archive of a synced row creates an archive op and dirty sync row',
        () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();
      await col.put(record(id: id, name: 'synced'));
      await pocket.outbox
          .ack('widgets', id, serverUpdated: '2026-01-01 00:00:00.000Z');

      await col.archive(id);
      final op = await pocket.outbox.readOp(pocket.db, 'widgets', id);
      expect(op!.kind, OutboxKind.archive);
      final sr = await pocket.outbox.readSyncRow(pocket.db, 'widgets', id);
      expect(sr!.syncState, SyncState.dirty);

      // Restore flips the op kind and keeps the row.
      await col.restore(id);
      final op2 = await pocket.outbox.readOp(pocket.db, 'widgets', id);
      expect(op2!.kind, OutboxKind.restore);
      expect((await col.get(id))!['archived'], isFalse);
    });

    test('archived and hidden rows are excluded from default queries',
        () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final visible = generateRecordId();
      final archived = generateRecordId();
      final hidden = generateRecordId();
      await col.put(record(id: visible, name: 'v'));
      await col.put(record(id: archived, name: 'a'));
      await col.put(record(id: hidden, name: 'h'));
      await pocket.outbox
          .ack('widgets', archived, serverUpdated: '2026-01-01 00:00:00.000Z');
      await pocket.outbox
          .ack('widgets', hidden, serverUpdated: '2026-01-01 00:00:00.000Z');
      await col.archive(archived);
      await pocket.db
          .execute('UPDATE widgets SET hidden = 1 WHERE id = ?', [hidden]);

      expect(await col.query().all().count(), 1);
      expect(await col.query().includeArchived().count(), 2);
      expect(await col.query().includeArchived().includeHidden().count(), 3);
      expect(await col.query().includeHidden().count(), 2);
    });

    test('purge removes domain, outbox, sync, and emits a notification',
        () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final emitted = <ChangeSet>[];
      final sub = pocket.changes.listen(emitted.add);
      addTearDown(sub.cancel);
      final col = pocket.collection('widgets');
      final id = generateRecordId();
      await col.put(record(id: id, name: 'x'));
      await pocket.outbox
          .ack('widgets', id, serverUpdated: '2026-01-01 00:00:00.000Z');
      await col.archive(id);

      await col.purge(id);
      expect(await col.get(id), isNull);
      expect(await col.query().includeArchived().count(), 0);
      expect(await pocket.outbox.readOp(pocket.db, 'widgets', id), isNull);
      expect(await pocket.outbox.readSyncRow(pocket.db, 'widgets', id), isNull);
      await Future<void>.delayed(const Duration(milliseconds: 30));
      expect(emitted.any((cs) => cs.store == 'widgets' && cs.ids.contains(id)),
          isTrue);
    });

    test('purge cancels file ops, drops refs, and decrements blob refcount',
        () async {
      final blobStore = MemoryBlobStore();
      final pocket = await openPocket(blobStore: blobStore);
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();
      await col.put(record(id: id, name: 'with-file'));
      final ref = await pocket.files.attach(
        store: 'widgets',
        recordId: id,
        bytes: Stream.value(utf8.encode('attachment bytes')),
      );

      // Sanity: ref and blob exist before purge.
      expect(await pocket.files.list(store: 'widgets', recordId: id),
          hasLength(1));
      final hash = ref.hash;

      await col.purge(id);
      expect(await pocket.files.list(store: 'widgets', recordId: id), isEmpty);
      final blob = (await pocket.db
              .rawQuery('SELECT refcount FROM lp_blobs WHERE hash = ?', [hash]))
          .first;
      expect(blob['refcount'], 0);
      // Queued file op is neutralized (not left pending).
      final ops = await pocket.db.rawQuery(
          "SELECT state FROM lp_op_queue WHERE store = 'widgets' AND record_id = ?",
          [id]);
      expect(ops, isNotEmpty, reason: 'the queued file op is recorded');
      expect(ops.every((r) => r['state'] == 'done'), isTrue,
          reason: "purge neutralizes the record's file operations");
      // A later drain can never pick up the neutralized op.
      final drained = await pocket.opQueue.drain();
      expect(drained.where((o) => o.recordId == id), isEmpty);
    });

    test('archive/restore invalidates the point-read cache', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();
      await col.put(record(id: id, name: 'cached'));
      await pocket.outbox
          .ack('widgets', id, serverUpdated: '2026-01-01 00:00:00.000Z');

      // Warm the cache.
      expect((await col.get(id))!['archived'], isFalse);

      await col.archive(id);
      expect((await col.get(id))!['archived'], isTrue,
          reason: 'cache must be invalidated by archive');

      await col.restore(id);
      expect((await col.get(id))!['archived'], isFalse,
          reason: 'cache must be invalidated by restore');

      await col.purge(id);
      expect(await col.get(id), isNull,
          reason: 'cache must be invalidated by purge');
    });

    test(
        'purge is idempotent and does not remove a same-id row in another '
        'store', () async {
      final other = CollectionSchema<Object?>(
          name: 'other', version: 1, fields: [Field.text('name')]);
      final pocket = await openPocket(stores: [other, widgetsSchema()]);
      addTearDown(pocket.close);

      final sharedId = generateRecordId();
      await pocket.collection('other').put({'id': sharedId, 'name': 'o'});
      await pocket.collection('widgets').put(record(id: sharedId, name: 'w'));

      await pocket.collection('widgets').purge(sharedId);
      // Second purge of the already-gone widgets row: no-op.
      await pocket.collection('widgets').purge(sharedId);

      expect(await pocket.collection('widgets').get(sharedId), isNull);
      final otherDoc = await pocket.collection('other').get(sharedId);
      expect(otherDoc!['name'], 'o',
          reason: 'purge in one store must not touch the same id elsewhere');
    });

    test('purge of a conflict-bearing record clears its conflict row',
        () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();
      await col.put(record(id: id, name: 'conflicted'));
      // Simulate an open conflict row.
      await pocket.db.execute(
          'INSERT INTO lp_conflicts (store, record_id, base_json, local_json, '
          'remote_json, dirty_local, dirty_remote, detected_at) '
          'VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
          ['widgets', id, '{}', '{}', '{}', '["*"]', '["*"]', 0]);

      await col.purge(id);
      final conflicts = await pocket.db.rawQuery(
          'SELECT COUNT(*) c FROM lp_conflicts WHERE store = ? AND record_id = ?',
          ['widgets', id]);
      expect(conflicts.single['c'], 0,
          reason: 'purge removes the associated conflict row');
    });
  });
}
