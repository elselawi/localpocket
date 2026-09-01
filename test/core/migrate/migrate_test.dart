import 'dart:io';

import 'package:localpocket/src/internal/raw_surface.dart';
import 'package:localpocket/src/kernel/migrator.dart';
import 'package:path/path.dart' as p;
import 'package:sqlite3/sqlite3.dart' as sqlite;
import 'package:test/test.dart';

import '../../support/helpers.dart';

/// Store schema migration tests.
void main() {
  CollectionSchema<Object?> v2Schema({
    List<StoreMigration> migrations = const [],
    Map<int, DocumentMigration> documentMigrations = const {},
  }) =>
      CollectionSchema(
        name: 'widgets',
        version: 2,
        fields: [...widgetsSchema().fields, Field.text('nickname')],
        indexes: widgetsSchema().indexes,
        migrations: migrations,
        documentMigrations: documentMigrations,
      );

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
      await v1.collection('widgets').put(record(id: id, name: 'x', qty: 1));
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
          'SELECT COUNT(*) AS c FROM widgets WHERE nickname IS NULL'))!;
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

    test(
        'destructive migration resumes over a stale backup with no completed '
        'marker', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);

      final v1 = await openPocket(path: t.path);
      final id = generateRecordId();
      await v1.collection('widgets').put(record(id: id, name: 'x'));
      await v1.close();

      // A backup with no `done` marker is a stale artifact from an
      // interrupted (or legacy, marker-less) run. VACUUM INTO refuses to
      // overwrite an existing target, so the rebuild clears the stale file and
      // restarts instead of refusing forever.
      final backup = Migrator.backupPath(t.path, 'widgets', 2);
      File(backup).writeAsStringSync('stale backup');
      addTearDown(() {
        final f = File(backup);
        if (f.existsSync()) f.deleteSync();
      });

      final v2 = await openPocket(path: t.path, stores: [
        v2Schema(migrations: [
          StoreMigration(toVersion: 2, destructive: true),
        ])
      ]);
      addTearDown(v2.close);

      final stores = await v2.db
          .query('lp_stores', where: 'store = ?', whereArgs: ['widgets']);
      expect(stores.first['schema_ver'], 2,
          reason: 'the stale backup did not block the migration');
      expect(await v2.collection('widgets').get(id), isNotNull);
      // The stale sentinel file was replaced by a fresh backup safety net.
      expect(File(backup).existsSync(), isTrue);
      final conn = sqlite.sqlite3.open(backup);
      final c = conn.select('SELECT COUNT(*) AS c FROM widgets').first['c'];
      conn.close();
      expect(c, 1,
          reason: 'the fresh backup is a real database, not the stale '
              'sentinel');
    });

    test(
        'backupPath with a bare relative db path stays in the current '
        'directory', () {
      expect(Migrator.backupPath('test.db', 'widgets', 2),
          'test.db.v2.widgets.bak',
          reason: 'dirname of a bare filename is "." so no directory is '
              'prefixed');
      expect(Migrator.backupPath('data/db.sqlite', 'notes', 3),
          p.join('data', 'db.sqlite.v3.notes.bak'));
      expect(Migrator.backupPath('/tmp/x/test.db', 'widgets', 2),
          p.join('/tmp/x', 'test.db.v2.widgets.bak'));
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

  group('migration edge contracts', () {
    test(
        'destructive rebuild recreates FTS: rows and search survive the '
        'rename', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);

      final v1 = await openPocket(path: t.path, stores: [
        widgetsSchema(fts: const FtsSpec(['name']))
      ]);
      final ids = <String>[];
      for (var i = 0; i < 6; i++) {
        final id = generateRecordId();
        ids.add(id);
        await v1
            .collection('widgets')
            .put(record(id: id, name: 'widget$i', qty: i));
      }
      // Sanity: the FTS index works before the rebuild.
      expect(
          (await v1.collection('widgets').search('widget3').limit(10).fetch())
              .single
              .id,
          ids[3]);
      await v1.close();

      final v2 = widgetsSchema(
        version: 2,
        extraFields: [Field.text('nickname')],
        fts: const FtsSpec(['name']),
        migrations: [
          StoreMigration(
            toVersion: 2,
            destructive: true,
            transform: (oldRow) => {...oldRow, 'nickname': 'n${oldRow['id']}'},
          )
        ],
      );
      final migrated = await openPocket(path: t.path, stores: [v2]);
      addTearDown(migrated.close);

      // Every row survived the backup / drop / rename cycle.
      expect(await migrated.collection('widgets').query().count(), 6);
      // The intermediate rebuild table was cleaned up (no half-renamed table).
      final leftovers = await migrated.db.rawQuery(
          "SELECT name FROM sqlite_master WHERE type='table' AND name LIKE 'widgets__new_%'");
      expect(leftovers, isEmpty);
      // The dropped-and-recreated FTS table was repopulated ('rebuild') and is
      // searchable again.
      final results = await migrated
          .collection('widgets')
          .search('widget3')
          .limit(10)
          .fetch();
      expect(results, hasLength(1));
      expect(results.single.id, ids[3]);
      // The recreated FTS triggers keep the index in sync for later writes.
      await migrated.collection('widgets').patch(ids[4], {'name': 'freshterm'});
      expect(
          await migrated
              .collection('widgets')
              .search('freshterm')
              .limit(10)
              .fetch(),
          hasLength(1));
      expect(
          await migrated
              .collection('widgets')
              .search('widget4')
              .limit(10)
              .fetch(),
          isEmpty,
          reason: 'the superseded term no longer matches after the update');
    });

    test(
        'additive migration of an encrypted field emits TEXT and ciphertext '
        'round-trips across reopen', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final cipher =
          AesGcmFieldCipher(List<int>.generate(32, (i) => (i * 3 + 5) % 256));

      final v1 = await openPocket(path: t.path, fieldCipher: cipher);
      final id = generateRecordId();
      await v1.collection('widgets').put(record(id: id, name: 'x'));
      await v1.close();

      final v2 = widgetsSchema(
        version: 2,
        extraFields: [Field.text('secret', encrypted: true)],
        migrations: [
          StoreMigration(
              toVersion: 2,
              addedFields: [Field.text('secret', encrypted: true)]),
        ],
      );
      final migrated =
          await openPocket(path: t.path, stores: [v2], fieldCipher: cipher);

      // The ADD COLUMN emitted TEXT (encrypted fields store base64 ciphertext,
      // which a STRICT INTEGER/REAL column would reject).
      final cols = await migrated.db.rawQuery('PRAGMA table_info(widgets)');
      final secretCol = cols.firstWhere((c) => c['name'] == 'secret');
      expect(secretCol['type'], 'TEXT');

      // Ciphertext round-trips: write through the migrated column, close,
      // reopen with the same cipher, and read the plaintext back.
      await migrated.collection('widgets').patch(id, {'secret': 'classified'});
      final raw = await migrated.db
          .rawQuery('SELECT secret FROM widgets WHERE id = ?', [id]);
      expect(raw.single['secret'], isNot(contains('classified')),
          reason: 'the column stores ciphertext, never the plaintext');
      await migrated.close();

      final reopened =
          await openPocket(path: t.path, stores: [v2], fieldCipher: cipher);
      addTearDown(reopened.close);
      expect((await reopened.collection('widgets').get(id))!['secret'],
          'classified',
          reason: 'ciphertext round-trips across reopen');
    });

    test(
        'additive migration transform backfills encrypted rows (cipher '
        'threaded through decode/encode)', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final cipher =
          AesGcmFieldCipher(List<int>.generate(32, (i) => (i * 3 + 5) % 256));

      // v1 already has an encrypted column holding ciphertext.
      final v1Schema = widgetsSchema(
          version: 1, extraFields: [Field.text('secret', encrypted: true)]);
      final v1 = await openPocket(
          path: t.path, stores: [v1Schema], fieldCipher: cipher);
      final id = generateRecordId();
      await v1
          .collection('widgets')
          .put(record(id: id, name: 'x', extra: {'secret': 'classified'}));
      await v1.close();

      // v2 adds a plaintext column whose backfill transform reads every row —
      // decoding the encrypted `secret` column. Before the cipher was threaded
      // into the migrator this threw
      // `StateError('Field "secret" is encrypted but no FieldCipher...')`.
      final v2Schema = widgetsSchema(
        version: 2,
        extraFields: [
          Field.text('secret', encrypted: true),
          Field.text('nickname'),
        ],
        migrations: [
          StoreMigration(
            toVersion: 2,
            addedFields: [Field.text('nickname')],
            transform: (oldRow) => {'nickname': 'nick-${oldRow['name']}'},
          ),
        ],
      );
      final migrated = await openPocket(
          path: t.path, stores: [v2Schema], fieldCipher: cipher);
      addTearDown(migrated.close);

      // The backfill completed and decoded the encrypted column: the plaintext
      // round-trips and the store still holds ciphertext, never the plaintext.
      final doc = await migrated.collection('widgets').get(id);
      expect(doc!['nickname'], 'nick-x',
          reason: 'backfill transform ran over the encrypted row');
      expect(doc['secret'], 'classified');
      final raw = await migrated.db
          .rawQuery('SELECT secret FROM widgets WHERE id = ?', [id]);
      expect(raw.single['secret'], isNot(contains('classified')),
          reason: 'encrypted column stores ciphertext, never the plaintext');
    });

    test(
        'destructive rebuild propagates the cipher: encrypted store survives '
        'the rebuild and round-trips after reopen', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final backup = Migrator.backupPath(t.path, 'widgets', 2);
      addTearDown(() {
        final f = File(backup);
        if (f.existsSync()) f.deleteSync();
      });
      final cipher =
          AesGcmFieldCipher(List<int>.generate(32, (i) => (i * 3 + 5) % 256));

      final v1Schema = widgetsSchema(
          version: 1, extraFields: [Field.text('secret', encrypted: true)]);
      final v1 = await openPocket(
          path: t.path, stores: [v1Schema], fieldCipher: cipher);
      final id = generateRecordId();
      await v1
          .collection('widgets')
          .put(record(id: id, name: 'x', extra: {'secret': 'classified'}));
      await v1.close();

      final v2Schema = widgetsSchema(
        version: 2,
        extraFields: [
          Field.text('secret', encrypted: true),
          Field.text('nickname'),
        ],
        migrations: [
          StoreMigration(
            toVersion: 2,
            destructive: true,
            transform: (oldRow) =>
                {...oldRow, 'nickname': 'nick-${oldRow['name']}'},
          ),
        ],
      );
      final migrated = await openPocket(
          path: t.path, stores: [v2Schema], fieldCipher: cipher);
      addTearDown(migrated.close);

      final doc = await migrated.collection('widgets').get(id);
      expect(doc!['nickname'], 'nick-x');
      expect(doc['secret'], 'classified');
      final raw = await migrated.db
          .rawQuery('SELECT secret FROM widgets WHERE id = ?', [id]);
      expect(raw.single['secret'], isNot(contains('classified')),
          reason: 'the rebuilt column stores ciphertext, never the plaintext');

      // Round-trips after reopen with the same cipher.
      await migrated.close();
      final reopened = await openPocket(
          path: t.path, stores: [v2Schema], fieldCipher: cipher);
      addTearDown(reopened.close);
      expect((await reopened.collection('widgets').get(id))!['secret'],
          'classified');
    });

    test(
        'a transform emitting a wrong-typed value throws ValidationException '
        'and leaves the ledger untouched; the corrected transform completes '
        'exactly once', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);

      final v1 = await openPocket(path: t.path);
      await v1.transaction((tx) async {
        for (var i = 0; i < 3; i++) {
          final id = generateRecordId();
          await tx
              .collection('widgets')
              .put(record(id: id, name: 'n$i', qty: i));
        }
      });
      await v1.close();

      StoreMigration migration({bool wrongType = false}) => StoreMigration(
            toVersion: 2,
            addedFields: [Field.text('nickname')],
            transform: (oldRow) => {
              'nickname': 'nick-${oldRow['name']}',
              if (wrongType) 'qty': 'not-an-int',
            },
          );

      // The transform writes a String into the int `qty` column — the normal
      // CRUD path rejects that, so the backfill must too (typed, not silent).
      await expectLater(
        openPocket(path: t.path, stores: [
          v2Schema(migrations: [migration(wrongType: true)])
        ]),
        throwsA(isA<ValidationException>()
            .having((e) => e.message, 'message', contains('"qty"'))),
      );

      // Ledger-consistent failure: schema_ver unchanged, no migration row.
      final probe = await openPocket(path: t.path);
      var stores = await probe.db
          .query('lp_stores', where: 'store = ?', whereArgs: ['widgets']);
      expect(stores.first['schema_ver'], 1,
          reason: 'the failed attempt did not advance schema_ver');
      expect(
          await probe.db.rawQuery(
              "SELECT name FROM lp_migrations WHERE name = 'migrate:widgets:v2'"),
          isEmpty,
          reason: 'no half-applied ledger row for the failed step');
      await probe.close();

      // Corrected transform completes exactly once.
      final v2 = await openPocket(path: t.path, stores: [
        v2Schema(migrations: [migration(wrongType: false)])
      ]);
      addTearDown(v2.close);
      stores = await v2.db
          .query('lp_stores', where: 'store = ?', whereArgs: ['widgets']);
      expect(stores.first['schema_ver'], 2);
      final ledger = await v2.db.rawQuery(
          "SELECT name FROM lp_migrations WHERE name = 'migrate:widgets:v2'");
      expect(ledger, hasLength(1),
          reason: 'the retry recorded exactly once — no duplicate ledger row');
      final all = await v2.collection('widgets').query().all().fetch();
      for (final r in all.items) {
        expect(r['nickname'], 'nick-${r['name']}');
      }
    });

    test(
        'a destructive rebuild transform emitting a wrong-typed value throws '
        'ValidationException; corrected retry completes', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final backup = Migrator.backupPath(t.path, 'widgets', 2);
      addTearDown(() {
        final f = File(backup);
        if (f.existsSync()) f.deleteSync();
      });

      final v1 = await openPocket(path: t.path);
      final id = generateRecordId();
      await v1.collection('widgets').put(record(id: id, name: 'x', qty: 1));
      await v1.close();

      StoreMigration migration(Object nickname) => StoreMigration(
            toVersion: 2,
            destructive: true,
            transform: (oldRow) => {...oldRow, 'nickname': nickname},
          );

      // nickname is a text field; an int from the transform is rejected.
      await expectLater(
        openPocket(path: t.path, stores: [
          v2Schema(migrations: [migration(42)])
        ]),
        throwsA(isA<ValidationException>()
            .having((e) => e.message, 'message', contains('"nickname"'))),
      );

      // schema_ver untouched by the failed rebuild.
      final probe = await openPocket(path: t.path);
      final stores = await probe.db
          .query('lp_stores', where: 'store = ?', whereArgs: ['widgets']);
      expect(stores.first['schema_ver'], 1);
      await probe.close();

      // The resume marker lets the corrected retry rebuild cleanly.
      final v2 = await openPocket(path: t.path, stores: [
        v2Schema(migrations: [migration('nick-x')])
      ]);
      addTearDown(v2.close);
      expect((await v2.collection('widgets').get(id))!['nickname'], 'nick-x');
    });

    test(
        'additive migration refuses a required (NOT NULL) column on a '
        'populated table', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);

      final v1 = await openPocket(path: t.path);
      await v1
          .collection('widgets')
          .put(record(id: generateRecordId(), name: 'x'));
      await v1.close();

      // A required additive column has no backfill contract: the migration
      // refuses up front with a typed error instead of a raw NOT NULL failure.
      await expectLater(
          openPocket(path: t.path, stores: [
            v2Schema(migrations: [
              StoreMigration(
                  toVersion: 2,
                  addedFields: [Field.text('must_have', required: true)]),
            ])
          ]),
          throwsA(isA<SchemaRegistrationError>().having((e) => e.message,
              'message', contains('cannot add a required column'))));

      // The refusal happened before any DDL: the store stays at v1 and the
      // column was never added (a retry is not poisoned).
      final reopened = await openPocket(path: t.path);
      addTearDown(reopened.close);
      final stores = await reopened.db
          .query('lp_stores', where: 'store = ?', whereArgs: ['widgets']);
      expect(stores.first['schema_ver'], 1);
      final cols = await reopened.db.rawQuery('PRAGMA table_info(widgets)');
      expect(cols.map((c) => c['name']), isNot(contains('must_have')));
    });

    test('destructive rebuild resumes after a crash mid-rebuild', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final backup = Migrator.backupPath(t.path, 'widgets', 2);
      addTearDown(() {
        final f = File(backup);
        if (f.existsSync()) f.deleteSync();
      });

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

      StoreMigration migration() => StoreMigration(
            toVersion: 2,
            destructive: true,
            transform: (oldRow) => {...oldRow, 'nickname': 'r${oldRow['id']}'},
          );

      // Kill the rebuild after the backup and the __new_ copy, before the
      // destructive drop/rename: a stale .bak and a half-built __new_ table
      // now sit on disk, exactly like an app crash mid-migration.
      final hooks = TestHooks();
      hooks.migrationCrashPoint = (marker) {
        if (marker.contains('rebuild:widgets:2')) {
          throw StateError('simulated crash mid-rebuild');
        }
      };
      await expectLater(
          openPocket(
              path: t.path,
              stores: [
                v2Schema(migrations: [migration()])
              ],
              testHooks: hooks),
          throwsA(isA<StateError>()));

      // The interrupted run left both stale artifacts; schema_ver stayed 1
      // and no ledger row was recorded.
      final probe = await openPocket(path: t.path);
      var stores = await probe.db
          .query('lp_stores', where: 'store = ?', whereArgs: ['widgets']);
      expect(stores.first['schema_ver'], 1,
          reason: 'the crashed rebuild did not advance schema_ver');
      expect(File(backup).existsSync(), isTrue,
          reason: 'stale backup from the interrupted run');
      final halfBuilt = await probe.db.rawQuery(
          "SELECT name FROM sqlite_master WHERE type='table' AND name LIKE 'widgets__new_%'");
      expect(halfBuilt, isNotEmpty,
          reason: 'half-built __new_ table from the interrupted run');
      await probe.close();

      // Reopen WITHOUT the crash hook: the rebuild resumes, completes exactly
      // once, and cleans up the stale artifacts.
      final v2 = await openPocket(path: t.path, stores: [
        v2Schema(migrations: [migration()])
      ]);
      addTearDown(v2.close);

      stores = await v2.db
          .query('lp_stores', where: 'store = ?', whereArgs: ['widgets']);
      expect(stores.first['schema_ver'], 2,
          reason: 'the resumed rebuild completes');
      final ledger = await v2.db.rawQuery(
          "SELECT name FROM lp_migrations WHERE name = 'migrate:widgets:v2'");
      expect(ledger, hasLength(1),
          reason: 'the resumed migration recorded exactly one ledger row');
      expect(await v2.collection('widgets').query().count(), 20);
      final sample = await v2.collection('widgets').query().limit(20).fetch();
      for (final r in sample.items) {
        expect(r['nickname'], 'r${r['id']}');
      }
      for (final id in ids) {
        expect(await v2.collection('widgets').get(id), isNotNull);
      }
      final leftovers = await v2.db.rawQuery(
          "SELECT name FROM sqlite_master WHERE type='table' AND name LIKE 'widgets__new_%'");
      expect(leftovers, isEmpty,
          reason: 'no half-built table remains after the resume');
      expect(File(backup).existsSync(), isTrue,
          reason: 'a fresh backup safety net exists after the resume');
    });

    test(
        'destructive rebuild resumes in place after a crash between the '
        'drop and the rename', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final backup = Migrator.backupPath(t.path, 'widgets', 2);
      addTearDown(() {
        final f = File(backup);
        if (f.existsSync()) f.deleteSync();
      });

      final v1 = await openPocket(path: t.path);
      final ids = <String>[];
      await v1.transaction((tx) async {
        for (var i = 0; i < 8; i++) {
          final id = generateRecordId();
          ids.add(id);
          await tx
              .collection('widgets')
              .put(record(id: id, name: 'n$i', qty: i));
        }
      });
      await v1.close();

      StoreMigration migration() => StoreMigration(
            toVersion: 2,
            destructive: true,
            transform: (oldRow) => {...oldRow, 'nickname': 'r${oldRow['id']}'},
          );

      // Crash right before the destructive drop/rename, then simulate the
      // crash having actually landed BETWEEN the DROP and the RENAME: the old
      // table is gone and __new_ alone holds the (already transformed) data.
      final hooks = TestHooks();
      hooks.migrationCrashPoint = (marker) {
        if (marker.contains('rebuild:widgets:2')) {
          throw StateError('simulated crash mid-rebuild');
        }
      };
      await expectLater(
          openPocket(
              path: t.path,
              stores: [
                v2Schema(migrations: [migration()])
              ],
              testHooks: hooks),
          throwsA(isA<StateError>()));
      final conn = sqlite.sqlite3.open(t.path);
      conn.execute('DROP TABLE "widgets"');
      conn.execute('PRAGMA wal_checkpoint(TRUNCATE)');
      conn.close();

      // Reopen: the rebuild must finish in place (rename __new_ → widgets,
      // recreate indexes, verify) instead of restarting against the now
      // missing source table.
      final v2 = await openPocket(path: t.path, stores: [
        v2Schema(migrations: [migration()])
      ]);
      addTearDown(v2.close);

      expect(
          (await v2.db.query('lp_stores',
                  where: 'store = ?', whereArgs: ['widgets']))
              .first['schema_ver'],
          2,
          reason: 'the in-place resume completes the migration');
      expect(await v2.collection('widgets').query().count(), 8,
          reason: 'data survived from the half-built __new_ table');
      final sample = await v2.collection('widgets').query().limit(8).fetch();
      for (final r in sample.items) {
        expect(r['nickname'], 'r${r['id']}',
            reason: 'the transform result survived the drop/rename crash');
      }
      for (final id in ids) {
        expect(await v2.collection('widgets').get(id), isNotNull);
      }
      final indexes = await v2.db.rawQuery(
          "SELECT name FROM sqlite_master WHERE type='index' AND tbl_name='widgets' AND name LIKE 'ix_%'");
      expect(indexes, isNotEmpty,
          reason: 'indexes are recreated on the in-place resume');
      final leftovers = await v2.db.rawQuery(
          "SELECT name FROM sqlite_master WHERE type='table' AND name LIKE 'widgets__new_%'");
      expect(leftovers, isEmpty);
      expect(File(backup).existsSync(), isTrue,
          reason: 'the completed backup is kept as the safety net');
    });

    test(
        'destructive migration refuses a completed backup from a prior run '
        'until it is removed', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final backup = Migrator.backupPath(t.path, 'widgets', 2);
      addTearDown(() {
        final f = File(backup);
        if (f.existsSync()) f.deleteSync();
      });

      final v1 = await openPocket(path: t.path);
      final id = generateRecordId();
      await v1.collection('widgets').put(record(id: id, name: 'x'));
      await v1.close();

      // Complete the destructive migration normally: marker `done` + backup.
      final migrated = await openPocket(path: t.path, stores: [
        v2Schema(migrations: [StoreMigration(toVersion: 2, destructive: true)])
      ]);
      expect(File(backup).existsSync(), isTrue);
      await migrated.close();

      // Simulate a crash between the `done` marker and the schema_ver bump:
      // the rebuild completed but the bookkeeping did not, so the migration
      // re-runs on the next open.
      final conn = sqlite.sqlite3.open(t.path);
      conn.execute(
          "UPDATE lp_stores SET schema_ver = 1 WHERE store = 'widgets'");
      conn.execute(
          "DELETE FROM lp_migrations WHERE name = 'migrate:widgets:v2'");
      conn.execute('PRAGMA wal_checkpoint(TRUNCATE)');
      conn.close();

      // The completed backup (a DIFFERENT run's safety net) is never
      // overwritten: the re-run refuses loudly instead of destroying it.
      await expectLater(
          openPocket(path: t.path, stores: [
            v2Schema(
                migrations: [StoreMigration(toVersion: 2, destructive: true)])
          ]),
          throwsA(isA<DestructiveMigrationRefusedError>().having(
              (e) => e.message, 'message', contains('already completed'))));

      // Removing the completed backup makes the migration resumable again.
      File(backup).deleteSync();
      final reopened = await openPocket(path: t.path, stores: [
        v2Schema(migrations: [StoreMigration(toVersion: 2, destructive: true)])
      ]);
      addTearDown(reopened.close);
      expect(
          (await reopened.db.query('lp_stores',
                  where: 'store = ?', whereArgs: ['widgets']))
              .first['schema_ver'],
          2,
          reason: 'the migration resumes once the completed backup is removed');
      expect(await reopened.collection('widgets').query().count(), 1);
      expect(await reopened.collection('widgets').get(id), isNotNull);
    });

    test(
        'a failing backfill leaves schema_ver and ledger untouched; a retry '
        'completes exactly once', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);

      final v1 = await openPocket(path: t.path);
      await v1.transaction((tx) async {
        for (var i = 0; i < 3; i++) {
          final id = generateRecordId();
          await tx.collection('widgets').put(record(id: id, name: 'n$i'));
        }
      });
      await v1.close();

      StoreMigration migration(bool throwOnRow) => StoreMigration(
            toVersion: 2,
            addedFields: [Field.text('nickname')],
            transform: (oldRow) {
              if (throwOnRow && oldRow['name'] == 'n1') {
                throw StateError('backfill boom');
              }
              return {'nickname': 'nick-${oldRow['name']}'};
            },
          );

      // First attempt fails mid-backfill (a logic error in the transform).
      await expectLater(
          openPocket(path: t.path, stores: [
            v2Schema(migrations: [migration(true)])
          ]),
          throwsA(isA<StateError>()));

      // Ledger-consistent failure: schema_ver is unchanged and the failed
      // step recorded no migration row.
      final probe = await openPocket(path: t.path);
      var stores = await probe.db
          .query('lp_stores', where: 'store = ?', whereArgs: ['widgets']);
      expect(stores.first['schema_ver'], 1,
          reason: 'the failed attempt did not advance schema_ver');
      expect(
          await probe.db.rawQuery(
              "SELECT name FROM lp_migrations WHERE name = 'migrate:widgets:v2'"),
          isEmpty,
          reason: 'no half-applied ledger row for the failed step');
      await probe.close();

      // Retry with the fixed transform completes exactly once.
      final v2 = await openPocket(path: t.path, stores: [
        v2Schema(migrations: [migration(false)])
      ]);
      addTearDown(v2.close);
      stores = await v2.db
          .query('lp_stores', where: 'store = ?', whereArgs: ['widgets']);
      expect(stores.first['schema_ver'], 2);
      final ledger = await v2.db.rawQuery(
          "SELECT name FROM lp_migrations WHERE name = 'migrate:widgets:v2'");
      expect(ledger, hasLength(1),
          reason: 'the retry recorded exactly once — no duplicate ledger row');
      final nulls = firstInt(await v2.db.rawQuery(
          'SELECT COUNT(*) AS c FROM widgets WHERE nickname IS NULL'))!;
      expect(nulls, 0, reason: 'the backfill completed for every row');
      final all = await v2.collection('widgets').query().all().fetch();
      for (final r in all.items) {
        expect(r['nickname'], 'nick-${r['name']}');
      }
    });

    test(
        'destructive rebuild completes cleanly while a second connection '
        'holds a read transaction', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final backup = Migrator.backupPath(t.path, 'widgets', 2);
      addTearDown(() {
        final f = File(backup);
        if (f.existsSync()) f.deleteSync();
      });

      final v1 = await openPocket(path: t.path);
      final ids = <String>[];
      for (var i = 0; i < 5; i++) {
        final id = generateRecordId();
        ids.add(id);
        await v1.collection('widgets').put(record(id: id, name: 'n$i'));
      }
      await v1.close();

      // A second connection (another app instance) holds the DB open with an
      // active read transaction during the rebuild.
      final conn = sqlite.sqlite3.open(t.path);
      conn.execute('BEGIN');
      conn.select('SELECT COUNT(*) AS c FROM widgets');

      final migrated = await openPocket(path: t.path, stores: [
        v2Schema(migrations: [StoreMigration(toVersion: 2, destructive: true)])
      ]);
      addTearDown(migrated.close);

      // WAL allows the rebuild past a concurrent reader: no half-renamed
      // table, no lost rows, and the VACUUM INTO backup is in place.
      expect(
          (await migrated.db.query('lp_stores',
                  where: 'store = ?', whereArgs: ['widgets']))
              .first['schema_ver'],
          2);
      expect(await migrated.collection('widgets').query().count(), 5);
      final leftovers = await migrated.db.rawQuery(
          "SELECT name FROM sqlite_master WHERE type='table' AND name LIKE 'widgets__new_%'");
      expect(leftovers, isEmpty);
      expect(File(backup).existsSync(), isTrue,
          reason: 'the backup safety net exists after the rebuild');
      for (final id in ids) {
        expect(await migrated.collection('widgets').get(id), isNotNull);
      }
      // The second connection remains usable (fresh statements re-prepare
      // against the new schema).
      expect(conn.select('SELECT COUNT(*) AS c FROM widgets').first['c'], 5);
      conn.close();
    });

    test(
        'destructive rebuild fails before any destructive step while a '
        'second connection holds the write lock', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final backup = Migrator.backupPath(t.path, 'widgets', 2);
      addTearDown(() {
        final f = File(backup);
        if (f.existsSync()) f.deleteSync();
      });

      final v1 = await openPocket(path: t.path);
      final ids = <String>[];
      for (var i = 0; i < 5; i++) {
        final id = generateRecordId();
        ids.add(id);
        await v1.collection('widgets').put(record(id: id, name: 'n$i'));
      }
      await v1.close();

      final conn = sqlite.sqlite3.open(t.path);
      conn.execute('BEGIN IMMEDIATE');
      conn.execute('UPDATE widgets SET qty = 99 WHERE rowid = 1');

      // The rebuild needs the write lock: a concurrent writer blocks it at the
      // very first schema write (after the backup), BEFORE any drop/rename —
      // the original table is never half-renamed and no data is lost. The
      // busy error surfaces as a typed DestructiveMigrationRefusedError (never
      // a silent half-state, never a leaked SqliteException), and the marker
      // stays `rebuilding` so the next open resumes.
      await expectLater(
          openPocket(path: t.path, stores: [
            v2Schema(
                migrations: [StoreMigration(toVersion: 2, destructive: true)])
          ]),
          throwsA(isA<DestructiveMigrationRefusedError>()));

      // Release the writer and confirm the store is untouched.
      conn.execute('ROLLBACK');
      conn.close();
      final reopened = await openPocket(path: t.path);
      addTearDown(reopened.close);
      expect(
          (await reopened.db.query('lp_stores',
                  where: 'store = ?', whereArgs: ['widgets']))
              .first['schema_ver'],
          1,
          reason: 'the failed rebuild never advanced schema_ver');
      expect(await reopened.collection('widgets').query().count(), 5);
      final leftovers = await reopened.db.rawQuery(
          "SELECT name FROM sqlite_master WHERE type='table' AND name LIKE 'widgets__new_%'");
      expect(leftovers, isEmpty,
          reason: 'the failure happened at the first write, before the create');
      for (final id in ids) {
        expect(await reopened.collection('widgets').get(id), isNotNull);
      }

      // The interrupted attempt left a stale backup and the `rebuilding`
      // marker. Under the resumable contract the retry clears the stale
      // artifacts and restarts the rebuild instead of refusing.
      final resumed = await openPocket(path: t.path, stores: [
        v2Schema(migrations: [StoreMigration(toVersion: 2, destructive: true)])
      ]);
      addTearDown(resumed.close);
      expect(
          (await resumed.db.query('lp_stores',
                  where: 'store = ?', whereArgs: ['widgets']))
              .first['schema_ver'],
          2,
          reason: 'the resumed rebuild completes after the writer releases');
      expect(await resumed.collection('widgets').query().count(), 5);
      final leftovers2 = await resumed.db.rawQuery(
          "SELECT name FROM sqlite_master WHERE type='table' AND name LIKE 'widgets__new_%'");
      expect(leftovers2, isEmpty,
          reason: 'the resumed rebuild leaves no half-built table');
      expect(File(backup).existsSync(), isTrue,
          reason: 'a fresh backup safety net exists after the resumed rebuild');
      for (final id in ids) {
        expect(await resumed.collection('widgets').get(id), isNotNull);
      }
    });
  });
}
