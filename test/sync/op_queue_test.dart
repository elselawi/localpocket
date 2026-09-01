import 'package:localpocket/src/internal/raw_surface.dart';
import 'package:sqlite3/sqlite3.dart' as sqlite;
import 'package:test/test.dart';

import '../support/helpers.dart';

/// `lp_op_queue.op_id` uniqueness contract.
///
/// `OpQueue.enqueue` always mints a fresh random 32-hex op id, so a collision
/// is not a user-reachable path — the `UNIQUE` column is a defensive backstop.
/// The pin: a duplicate op id fails with the RAW SQLite UNIQUE exception
/// (never translated into a typed [LocalPocketError]), because the op-queue
/// insert path deliberately bypasses `translateConstraintError`.
void main() {
  test('enqueue mints a distinct 32-hex op id per operation', () async {
    final pocket = await openPocket();
    addTearDown(pocket.close);

    await pocket.opQueue.enqueue(
        store: 'widgets',
        recordId: 'r1',
        kind: OpQueueKind.fileUpload,
        payload: {'field': 'imgs'});
    await pocket.opQueue.enqueue(
        store: 'widgets',
        recordId: 'r2',
        kind: OpQueueKind.fileRemove,
        payload: {'field': 'imgs'});

    final rows = await pocket.db.query('lp_op_queue', orderBy: 'seq ASC');
    expect(rows, hasLength(2));
    expect(rows[0]['op_id'], isNot(rows[1]['op_id']),
        reason: 'two enqueues never share an op id');
    for (final row in rows) {
      expect(row['op_id'] as String, matches(RegExp(r'^[0-9a-f]{32}$')),
          reason: 'op ids are 32 lowercase hex characters');
    }
  });

  test('a colliding op id fails with the raw UNIQUE SqliteException', () async {
    final pocket = await openPocket();
    addTearDown(pocket.close);
    const opId = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
    final row = <String, Object?>{
      'op_id': opId,
      'store': 'widgets',
      'record_id': 'r1',
      'kind': 'fileUpload',
      'payload_json': '{}',
      'state': 'pending',
      'created_at': 0,
    };
    await pocket.db.insert('lp_op_queue', row);

    // A second row with the same op id hits the UNIQUE backstop.
    Object? caught;
    try {
      await pocket.db.insert('lp_op_queue', {...row, 'record_id': 'r2'});
    } catch (e) {
      caught = e;
    }
    expect(caught, isA<sqlite.SqliteException>(),
        reason: 'the collision surfaces as the raw SQLite exception');
    final ex = caught as sqlite.SqliteException;
    expect(ex.extendedResultCode, 2067,
        reason: 'SQLITE_CONSTRAINT_UNIQUE extended code');
    expect(caught, isNot(isA<LocalPocketError>()),
        reason: 'the op-queue insert path does not translate the constraint '
            'error into a typed LocalPocketError');
  });
}
