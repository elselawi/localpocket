import 'package:localpocket/src/kernel/ids.dart';
import 'package:localpocket/src/kernel/local_pocket.dart';
import 'package:localpocket/src/kernel/sync/sync_tables.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';

/// Local-first invariant tests.
void main() {
  const t0 = '2026-01-01 00:00:00.000Z';

  group('local-first invariant', () {
    test('write and outbox commit atomically', () async {
      // Crash after the domain write, before outbox bookkeeping.
      final hooks1 = TestHooks()
        ..mutationCrashPoint = (m) {
          if (m == 'after-domain-write') throw StateError('crash@1');
        };
      final p1 = await openPocket(testHooks: hooks1);
      addTearDown(p1.close);
      final id1 = generateRecordId();
      await expectLater(
          p1.collection('widgets').put(record(id: id1, name: 'x')),
          throwsA(isA<StateError>()));
      expect(await p1.collection('widgets').get(id1), isNull);
      expect(await p1.outbox.readOp(p1.db, 'widgets', id1), isNull);
      expect(await p1.outbox.readSyncRow(p1.db, 'widgets', id1), isNull);

      // Crash after outbox bookkeeping, before commit.
      final hooks2 = TestHooks()
        ..mutationCrashPoint = (m) {
          if (m == 'after-outbox') throw StateError('crash@2');
        };
      final p2 = await openPocket(testHooks: hooks2);
      addTearDown(p2.close);
      final id2 = generateRecordId();
      await expectLater(
          p2.collection('widgets').put(record(id: id2, name: 'x')),
          throwsA(isA<StateError>()));
      expect(await p2.collection('widgets').get(id2), isNull);
      expect(await p2.outbox.readOp(p2.db, 'widgets', id2), isNull);

      // No crash: everything commits together.
      final p3 = await openPocket();
      addTearDown(p3.close);
      final id3 = generateRecordId();
      await p3.collection('widgets').put(record(id: id3, name: 'x'));
      expect(await p3.collection('widgets').get(id3), isNotNull);
      expect(await p3.outbox.readOp(p3.db, 'widgets', id3), isNotNull);
      expect(await p3.outbox.readSyncRow(p3.db, 'widgets', id3), isNotNull);
    });

    test('1000 edits one outbox row', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'a'));
      await pocket.outbox.ack('widgets', id, serverUpdated: t0);

      for (var i = 1; i <= 1000; i++) {
        await pocket.collection('widgets').patch(id, {'qty': i});
      }
      expect(await pocket.outbox.outboxCount(), 1);
      final sr = await pocket.outbox.readSyncRow(pocket.db, 'widgets', id);
      // Monotonic per-record revision: create(1) + 1000 edits.
      expect(sr!.localRev, 1001);
    });

    test('dirty row always has base', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'a'));
      await pocket.outbox.ack('widgets', id, serverUpdated: t0);
      await pocket.collection('widgets').patch(id, {'qty': 1});

      final sr = await pocket.outbox.readSyncRow(pocket.db, 'widgets', id);
      expect(sr!.syncState, SyncState.dirty);
      expect(sr.baseJson, isNotNull);
      expect(sr.baseHash, isNotEmpty);
      expect(sr.baseUpdated, t0);

      final op = await pocket.outbox.readOp(pocket.db, 'widgets', id);
      expect(op!.baseHash, isNotEmpty);
    });

    test('clean row never has base', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'a'));
      await pocket.outbox.ack('widgets', id, serverUpdated: t0);

      final sr = await pocket.outbox.readSyncRow(pocket.db, 'widgets', id);
      expect(sr!.syncState, SyncState.clean);
      expect(sr.baseJson, isNull);
      expect(sr.baseHash, isNull);
      expect(sr.baseUpdated, isNull);
      expect(await pocket.outbox.readOp(pocket.db, 'widgets', id), isNull);
    });

    test('vanish cleans file refs and refcounts', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'a'));

      // Two refs (different fields) share one content blob -> refcount 2.
      await pocket.outbox.registerFileRef(
          store: 'widgets',
          recordId: id,
          field: 'attachments',
          hash: 'abc123',
          size: 10);
      await pocket.outbox.registerFileRef(
          store: 'widgets',
          recordId: id,
          field: 'thumbs',
          hash: 'abc123',
          size: 10);
      var refs = await pocket.db
          .query('lp_file_refs', where: 'record_id = ?', whereArgs: [id]);
      expect(refs, hasLength(2));
      var blob = await pocket.db
          .query('lp_blobs', where: 'hash = ?', whereArgs: ['abc123']);
      expect(blob.first['refcount'], 2);

      // Vanish (unsynced create + archive).
      await pocket.collection('widgets').archive(id);

      refs = await pocket.db
          .query('lp_file_refs', where: 'record_id = ?', whereArgs: [id]);
      expect(refs, isEmpty);
      blob = await pocket.db
          .query('lp_blobs', where: 'hash = ?', whereArgs: ['abc123']);
      expect(blob.first['refcount'], 0);
    });

    test('local rev monotonic', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'a'));
      await pocket.collection('widgets').patch(id, {'qty': 1});
      await pocket.collection('widgets').patch(id, {'qty': 2});

      final sr = await pocket.outbox.readSyncRow(pocket.db, 'widgets', id);
      expect(sr!.localRev, 3);
    });

    test('crash after commit before push resumes drain', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);

      final pocket = await openPocket(path: t.path);
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'a'));
      // "Crash": close without ever pushing.
      await pocket.close();

      // Reopen: pending outbox op is durable and drainable.
      final reopened = await openPocket(path: t.path);
      addTearDown(reopened.close);
      final ops = await reopened.outbox.drain();
      expect(ops, hasLength(1));
      expect(ops.single.recordId, id);
      final sr = await reopened.outbox.readSyncRow(reopened.db, 'widgets', id);
      expect(sr!.syncState, SyncState.dirty);

      await reopened.outbox.ack('widgets', id, serverUpdated: t0);
      expect(await reopened.outbox.drain(), isEmpty);
      final cleaned =
          await reopened.outbox.readSyncRow(reopened.db, 'widgets', id);
      expect(cleaned!.syncState, SyncState.clean);

      // And the row is still queryable.
      expect(await reopened.collection('widgets').get(id), isNotNull);
      final total = firstInt(
          await reopened.db.rawQuery('SELECT COUNT(*) AS c FROM widgets'))!;
      expect(total, 1);
    });
  });
}
