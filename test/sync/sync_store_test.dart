import 'package:localpocket/src/internal/raw_surface.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';

/// SyncStore cursor/sweep state isolation (`lp_sync_state`).
///
/// Cursor and sweep columns are separate read-modify-write state, scoped by
/// (scope, store). One scope must never read or overwrite another scope, and
/// neither a cursor write nor a sweep write may clobber the other's columns.
void main() {
  group('SyncStore cursor/sweep isolation', () {
    late LocalPocket pocket;
    late SyncStore storeA;
    late SyncStore storeB;

    setUp(() async {
      pocket = await openPocket();
      storeA = SyncStore(pocket, 'scope-a');
      storeB = SyncStore(pocket, 'scope-b');
    });

    tearDown(() => pocket.close());

    test('empty reads return null and untouched sweep defaults', () async {
      expect(await storeA.readCursor('widgets'), isNull);
      final sweep = await storeA.readSweep('widgets');
      expect(sweep.bucket, -1);
      expect(sweep.lastSweepAt, isNull);

      // No rows are created by a read.
      final rows = await pocket.db.query('lp_sync_state');
      expect(rows, isEmpty);
    });

    test('writeCursor then writeSweep preserves both column groups', () async {
      await storeA.writeCursor(pocket.db, 'widgets',
          updated: '2026-01-01 00:00:00.000Z', id: 'id1');
      await storeA.writeSweep(pocket.db, 'widgets', bucket: 5, sweepAt: 42);

      final cursor = await storeA.readCursor('widgets');
      expect(cursor, isNotNull);
      expect(cursor!.updated, '2026-01-01 00:00:00.000Z');
      expect(cursor.id, 'id1');

      final sweep = await storeA.readSweep('widgets');
      expect(sweep.bucket, 5);
      expect(sweep.lastSweepAt, 42);
    });

    test('writeSweep then writeCursor preserves both column groups', () async {
      await storeA.writeSweep(pocket.db, 'widgets', bucket: 3, sweepAt: 10);
      await storeA.writeCursor(pocket.db, 'widgets',
          updated: '2026-02-02 00:00:00.000Z', id: 'id2');

      final sweep = await storeA.readSweep('widgets');
      expect(sweep.bucket, 3, reason: 'sweep not clobbered by cursor write');
      expect(sweep.lastSweepAt, 10);
      final cursor = await storeA.readCursor('widgets');
      expect(cursor!.updated, '2026-02-02 00:00:00.000Z');
    });

    test('repeated cursor writes only update the cursor columns', () async {
      await storeA.writeCursor(pocket.db, 'widgets', updated: 'u1', id: 'i1');
      await storeA.writeSweep(pocket.db, 'widgets', bucket: 7, sweepAt: 99);
      await storeA.writeCursor(pocket.db, 'widgets', updated: 'u2', id: 'i2');

      expect((await storeA.readCursor('widgets'))!.updated, 'u2');
      final sweep = await storeA.readSweep('widgets');
      expect(sweep.bucket, 7);
      expect(sweep.lastSweepAt, 99);
    });

    test('two stores stay isolated in one scope', () async {
      // Use a second store with a different name to prove key isolation.
      final pocket2 = await openPocket(
          stores: [widgetsSchema(), widgetsSchema(name: 'widgets2')]);
      addTearDown(pocket2.close);
      final s = SyncStore(pocket2, 'scope-a');

      await s.writeCursor(pocket2.db, 'widgets', updated: 'u-w', id: 'i-w');
      await s.writeSweep(pocket2.db, 'widgets2', bucket: 1, sweepAt: 1);

      expect((await s.readCursor('widgets'))!.updated, 'u-w');
      expect(await s.readCursor('widgets2'), isNull,
          reason: 'cursor written for widgets must not leak to widgets2');
      expect((await s.readSweep('widgets2')).bucket, 1);
      expect((await s.readSweep('widgets')).bucket, -1,
          reason: 'sweep written for widgets2 must not leak to widgets');
    });

    test('two scopes sharing one db never read or overwrite each other',
        () async {
      await storeA.writeCursor(pocket.db, 'widgets', updated: 'uA', id: 'iA');
      await storeA.writeSweep(pocket.db, 'widgets', bucket: 1, sweepAt: 10);

      // Scope B starts empty.
      expect(await storeB.readCursor('widgets'), isNull);
      expect((await storeB.readSweep('widgets')).bucket, -1);

      // Scope B writes its own state.
      await storeB.writeCursor(pocket.db, 'widgets', updated: 'uB', id: 'iB');
      await storeB.writeSweep(pocket.db, 'widgets', bucket: 2, sweepAt: 20);

      // Scope A is untouched.
      expect((await storeA.readCursor('widgets'))!.updated, 'uA');
      expect((await storeA.readSweep('widgets')).bucket, 1);
      expect((await storeA.readSweep('widgets')).lastSweepAt, 10);
      // Scope B has its own.
      expect((await storeB.readCursor('widgets'))!.updated, 'uB');
      expect((await storeB.readSweep('widgets')).bucket, 2);
      expect((await storeB.readSweep('widgets')).lastSweepAt, 20);
    });

    test(
        'clearCursor clears only the cursor columns and is a no-op on '
        'missing rows', () async {
      // Missing row: no error, no row created.
      await storeA.clearCursor('widgets');
      expect(await storeA.readCursor('widgets'), isNull);
      expect(await pocket.db.query('lp_sync_state'), isEmpty);

      // Existing row: cursor cleared, sweep preserved.
      await storeA.writeCursor(pocket.db, 'widgets', updated: 'u1', id: 'i1');
      await storeA.writeSweep(pocket.db, 'widgets', bucket: 4, sweepAt: 8);
      await storeA.clearCursor('widgets');

      expect(await storeA.readCursor('widgets'), isNull);
      final sweep = await storeA.readSweep('widgets');
      expect(sweep.bucket, 4, reason: 'sweep survives clearCursor');
      expect(sweep.lastSweepAt, 8);
    });

    test('status counts on an empty table are zero (SUM() null-safe)',
        () async {
      expect(await storeA.countPending(), 0);
      expect(await storeA.countConflicts(), 0);
      expect(await storeA.countHidden(), 0);
      final all = await storeA.countAllStatus();
      expect(all.pending, 0);
      expect(all.conflicts, 0);
      expect(all.hidden, 0);
    });

    test('status counts reflect populated rows', () async {
      final a = generateRecordId();
      final b = generateRecordId();
      final c = generateRecordId();
      await pocket.collection('widgets').put(record(id: a, name: 'a'));
      await pocket.collection('widgets').put(record(id: b, name: 'b'));
      await pocket.collection('widgets').put(record(id: c, name: 'c'));

      // a: clean + hidden, b: conflict, c: dirty.
      await pocket.outbox.setSyncState('widgets', a, SyncState.clean);
      await pocket.outbox.setSyncState('widgets', b, SyncState.conflict);
      await pocket.db.execute(
          "UPDATE lp_sync_row SET access_state = 'hidden' WHERE record_id = ?",
          [a]);

      final all = await storeA.countAllStatus();
      expect(all.pending, 1, reason: 'only b is dirty/in-flight');
      expect(all.conflicts, 1);
      expect(all.hidden, 1);
      expect(await storeA.countPending(), 1);
      expect(await storeA.countConflicts(), 1);
      expect(await storeA.countHidden(), 1);
    });
  });
}
