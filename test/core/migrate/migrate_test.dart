import 'package:localpocket/localpocket.dart';
import 'package:sqlite3/sqlite3.dart' as sqlite;
import 'package:test/test.dart';

import '../../support/helpers.dart';

/// Store schema migration tests.
void main() {
  CollectionSchema<Object?> v2Schema({
    List<StoreMigration> migrations = const [],
    Map<int, DocumentMigration> documentMigrations = const {},
  }) {
    return CollectionSchema(
      name: 'widgets',
      version: 2,
      fields: [...widgetsSchema().fields, Field.text('nickname')],
      indexes: widgetsSchema().indexes,
      migrations: migrations,
      documentMigrations: documentMigrations,
    );
  }

  Future<void> insertBulk(LocalPocket pocket, int n, {int chunk = 5000}) async {
    for (var start = 0; start < n; start += chunk) {
      final end = start + chunk > n ? n : start + chunk;
      await pocket.transaction((tx) async {
        for (var i = start; i < end; i++) {
          final id = generateRecordId();
          await tx
              .collection('widgets')
              .put(record(id: id, name: 'row-$i', qty: i, phone: 'p$i'));
        }
      });
    }
  }

  group('migrations', () {
    test('empty db to v1', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);

      final stores = await pocket.db
          .query('lp_stores', where: 'store = ?', whereArgs: ['widgets']);
      expect(stores, hasLength(1));
      expect(stores.first['schema_ver'], 1);
      expect(stores.first['table_name'], 'widgets');

      final migrations =
          await pocket.db.query('lp_migrations', orderBy: 'version ASC');
      expect(migrations.map((r) => r['name']), contains('core:v1'));
      expect(migrations.map((r) => r['name']), contains('create:widgets'));

      final tables = await pocket.db.rawQuery(
          "SELECT name FROM sqlite_master WHERE type='table' AND name='widgets'");
      expect(tables, hasLength(1));
    });

    test('empty migration list rejects v1 to v2 upgrade', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);

      final v1 = await openPocket(path: t.path);
      await v1
          .collection('widgets')
          .put(record(id: generateRecordId(), name: 'x', qty: 1));
      await v1.close();

      await expectLater(
        openPocket(
          path: t.path,
          stores: [v2Schema(migrations: const [])],
        ),
        throwsA(
          isA<SchemaRegistrationError>().having(
            (e) => e.message,
            'message',
            contains('Missing migration steps for "widgets"'),
          ),
        ),
      );
    });

    test('v1 to v2 additive preserves all rows', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);

      final v1 = await openPocket(path: t.path);
      final ids = <String>[];
      await v1.transaction((tx) async {
        for (var i = 0; i < 5; i++) {
          final id = generateRecordId();
          ids.add(id);
          await tx
              .collection('widgets')
              .put(record(id: id, name: 'n$i', qty: i));
        }
      });
      await v1.close();

      final v2 = await openPocket(path: t.path, stores: [
        v2Schema(migrations: [
          StoreMigration(toVersion: 2, addedFields: [Field.text('nickname')]),
        ])
      ]);
      addTearDown(v2.close);

      for (final id in ids) {
        final r = await v2.collection('widgets').get(id);
        expect(r, isNotNull);
        expect(r!['name'], isNotNull);
        expect(r['nickname'], isNull, reason: 'new column starts NULL');
      }
      final stores = await v2.db
          .query('lp_stores', where: 'store = ?', whereArgs: ['widgets']);
      expect(stores.first['schema_ver'], 2);
    });

    test('additive resume skips a column that already exists', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);

      final v1 = await openPocket(path: t.path);
      final id = generateRecordId();
      await v1
          .collection('widgets')
          .put(record(id: id, name: 'x', qty: 1));
      await v1.close();

      // Simulate a crash between the ALTER and the ledger bump: the column
      // exists on disk but lp_stores.schema_ver is still 1 and no migration
      // row was recorded. Reopening re-runs the migration and must skip the
      // already-present column instead of failing with "duplicate column".
      final conn = sqlite.sqlite3.open(t.path);
      conn.execute('ALTER TABLE "widgets" ADD COLUMN "nickname" TEXT');
      conn.execute('PRAGMA wal_checkpoint(TRUNCATE)');
      conn.close();

      final v2 = await openPocket(path: t.path, stores: [
        v2Schema(migrations: [
          StoreMigration(toVersion: 2, addedFields: [Field.text('nickname')]),
        ])
      ]);
      addTearDown(v2.close);

      final stores = await v2.db
          .query('lp_stores', where: 'store = ?', whereArgs: ['widgets']);
      expect(stores.first['schema_ver'], 2,
          reason: 'the migration completes despite the pre-existing column');
      expect((await v2.collection('widgets').get(id))!['name'], 'x',
          reason: 'the row survives the resume');
      final ledger = await v2.db.rawQuery(
          "SELECT name FROM lp_migrations WHERE name = 'migrate:widgets:v2'");
      expect(ledger, hasLength(1));
    });

    test('backfill chunking 10k per txn resumes after crash', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);

      final v1 = await openPocket(path: t.path);
      await insertBulk(v1, 25000);
      await v1.close();

      // Crash after the first committed backfill chunk (10k rows).
      final hooks = TestHooks();
      var chunks = 0;
      hooks.migrationCrashPoint = (marker) {
        if (marker.contains('backfill:widgets:2')) {
          chunks++;
          if (chunks == 1) throw StateError('simulated crash after chunk 1');
        }
      };
      await expectLater(
          openPocket(
              path: t.path,
              stores: [
                v2Schema(migrations: [
                  StoreMigration(
                      toVersion: 2,
                      addedFields: [Field.text('nickname')],
                      transform: (oldRow) => {'nickname': 'n${oldRow['id']}'}),
                ])
              ],
              testHooks: hooks),
          throwsA(isA<StateError>()));

      // Reopen without the crash hook: resumes from the persisted cursor.
      final v2 = await openPocket(path: t.path, stores: [
        v2Schema(migrations: [
          StoreMigration(
              toVersion: 2,
              addedFields: [Field.text('nickname')],
              transform: (oldRow) => {'nickname': 'n${oldRow['id']}'}),
        ])
      ]);
      addTearDown(v2.close);

      final total =
          firstInt(await v2.db.rawQuery('SELECT COUNT(*) AS c FROM widgets'))!;
      expect(total, 25000);
      final nulls = firstInt(await v2.db.rawQuery(
          "SELECT COUNT(*) AS c FROM widgets WHERE nickname IS NULL"))!;
      expect(nulls, 0, reason: 'backfill completed for all rows');
      final sample = await v2.db
          .rawQuery('SELECT id, nickname FROM widgets ORDER BY rowid LIMIT 3');
      for (final r in sample) {
        expect(r['nickname'], 'n${r['id']}');
      }
    });

    test('rebuild 12 step preserves rows indexes fks', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);

      final v1 = await openPocket(path: t.path);
      final ids = <String>[];
      await v1.transaction((tx) async {
        for (var i = 0; i < 20; i++) {
          final id = generateRecordId();
          ids.add(id);
          await tx
              .collection('widgets')
              .put(record(id: id, name: 'n$i', qty: i));
        }
      });
      await v1.close();

      final v2 = await openPocket(path: t.path, stores: [
        v2Schema(migrations: [
          StoreMigration(
              toVersion: 2,
              destructive: true,
              transform: (oldRow) =>
                  {...oldRow, 'nickname': 'r${oldRow['id']}'}),
        ])
      ]);
      addTearDown(v2.close);

      expect(await v2.collection('widgets').query().count(), 20);
      final sample = await v2.collection('widgets').query().limit(20).fetch();
      for (final r in sample.items) {
        expect(r['nickname'], 'r${r['id']}');
      }
      // Indexes recreated
      final indexes = await v2.db.rawQuery(
          "SELECT name FROM sqlite_master WHERE type='index' AND tbl_name='widgets' AND name LIKE 'ix_%'");
      expect(indexes, isNotEmpty);
      // Ledger
      final ledger = await v2.db.rawQuery(
          "SELECT name FROM lp_migrations WHERE name = 'migrate:widgets:v2'");
      expect(ledger, hasLength(1));
    });

    test('destructive without backup refused', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);

      final v1 = await openPocket(path: t.path);
      await v1
          .collection('widgets')
          .put(record(id: generateRecordId(), name: 'x'));
      await v1.close();

      await expectLater(
          openPocket(path: t.path, destructiveBackup: false, stores: [
            v2Schema(migrations: [
              StoreMigration(toVersion: 2, destructive: true),
            ])
          ]),
          throwsA(isA<DestructiveMigrationRefusedError>()));
    });

    test('migration ledger rows recorded', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);

      final v1 = await openPocket(path: t.path);
      await v1
          .collection('widgets')
          .put(record(id: generateRecordId(), name: 'x'));
      await v1.close();

      final v2 = await openPocket(path: t.path, stores: [
        v2Schema(migrations: [
          StoreMigration(toVersion: 2, addedFields: [Field.text('nickname')]),
        ])
      ]);
      addTearDown(v2.close);

      final rows = await v2.db.query('lp_migrations', orderBy: 'version ASC');
      expect(rows, isNotEmpty);
      final names = rows.map((r) => r['name']).toList();
      expect(names, contains('core:v1'));
      expect(names, contains('create:widgets'));
      expect(names, contains('migrate:widgets:v2'));
      for (final r in rows) {
        expect(r['applied_at'], isA<int>());
        expect(r['duration_ms'], isA<int>());
      }
    });

    test('doc migration pure deterministic idempotent never pushed', () async {
      Map<String, Object?> migrateLabelsToTags(Map<String, Object?> doc) {
        final tags = doc['labels'];
        final result = {...doc}..remove('labels');
        if (tags is List) result['tags'] = tags;
        return result;
      }

      final pocket = await openPocket(stores: [
        v2Schema(documentMigrations: {2: migrateLabelsToTags})
      ]);
      addTearDown(pocket.close);

      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'x', extra: {
            'labels': ['a', 'b']
          }));
      final opBefore = await pocket.outbox.readOp(pocket.db, 'widgets', id);

      // Simulate a record written by an older client (schema_ver 1).
      await pocket.db.execute(
          'UPDATE lp_sync_row SET schema_ver = 1 WHERE store = ? AND record_id = ?',
          ['widgets', id]);

      final r1 = await pocket.collection('widgets').get(id);
      expect(r1!['labels'], isNull);
      expect(r1['tags'], ['a', 'b']);

      // Idempotent: applying the migration twice equals once.
      final once = migrateLabelsToTags({
        'labels': ['a', 'b']
      });
      final twice = migrateLabelsToTags(migrateLabelsToTags({
        'labels': ['a', 'b']
      }));
      expect(twice, once);

      // get() again: deterministic, same result.
      final r2 = await pocket.collection('widgets').get(id);
      expect(r2!['tags'], ['a', 'b']);

      // Never pushed: outbox untouched.
      final opAfter = await pocket.outbox.readOp(pocket.db, 'widgets', id);
      expect(opAfter!.opId, opBefore!.opId);
      expect(await pocket.outbox.outboxCount(), 1);
    });
  });
}
