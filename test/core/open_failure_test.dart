import 'package:localpocket/localpocket.dart';
import 'package:sqlite3/sqlite3.dart' as sqlite;
import 'package:test/test.dart';

import '../support/helpers.dart';

/// Open/registration failure atomicity: no partial handle, no half-registered
/// store, clean connection teardown, and a consistent migration ledger.
void main() {
  group('injected Database failures during open', () {
    test('failure during pragmas closes the connection', () async {
      final db = _FailingDb(sqlite.sqlite3.openInMemory(),
          failOnPrefix: 'PRAGMA synchronous');
      await expectLater(
        LocalPocket.open(
            path: ':memory:', database: db, stores: [widgetsSchema()]),
        throwsA(isA<StateError>()),
      );
      expect(db.closeCount, 1, reason: 'open failure must close the handle');
      expect(db.isOpen, isFalse, reason: 'no partial handle escapes');
    });

    test('failure during capability probing closes the connection', () async {
      final db = _FailingDb(sqlite.sqlite3.openInMemory(),
          failOnPrefix: 'SELECT sqlite_version');
      await expectLater(
        LocalPocket.open(
            path: ':memory:', database: db, stores: [widgetsSchema()]),
        throwsA(isA<StateError>()),
      );
      expect(db.closeCount, 1);
      expect(db.isOpen, isFalse);
    });

    test('failure during system-table DDL closes the connection', () async {
      final db = _FailingDb(sqlite.sqlite3.openInMemory(),
          failOnPrefix: 'CREATE TABLE IF NOT EXISTS lp_migrations');
      await expectLater(
        LocalPocket.open(
            path: ':memory:', database: db, stores: [widgetsSchema()]),
        throwsA(isA<StateError>()),
      );
      expect(db.closeCount, 1);
      expect(db.isOpen, isFalse);
    });

    test('failure during store registration DDL closes the connection',
        () async {
      final db = _FailingDb(sqlite.sqlite3.openInMemory(),
          failOnPrefix: 'CREATE TABLE "widgets"');
      await expectLater(
        LocalPocket.open(
            path: ':memory:', database: db, stores: [widgetsSchema()]),
        throwsA(isA<StateError>()),
      );
      expect(db.closeCount, 1);
      expect(db.isOpen, isFalse);
    });
  });

  group('multi-store registration failures', () {
    test(
        'invalid DDL in one store after another registered leaves no '
        'half-registered store', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);

      final good = CollectionSchema<Object?>(
          name: 'good', version: 1, fields: [Field.text('a')]);
      final bad = CollectionSchema<Object?>(name: 'bad', version: 1, fields: [
        Field.text('a')
      ], indexes: const [
        IndexSpec(['ghost'])
      ]);
      await expectLater(
        LocalPocket.open(path: t.path, stores: [good, bad]),
        throwsA(isA<sqlite.SqliteException>()),
      );

      // Reopen with only the good store: ledger contains good, never bad.
      final pocket = await LocalPocket.open(path: t.path, stores: [good]);
      addTearDown(pocket.close);
      final stores = await pocket.db
          .rawQuery('SELECT store FROM lp_stores ORDER BY store');
      expect(stores.map((r) => r['store']).toList(), ['good']);
      final migs = await pocket.db
          .rawQuery('SELECT name FROM lp_migrations ORDER BY name');
      final names = migs.map((r) => r['name']).toList();
      expect(names, contains('create:good'));
      expect(names, isNot(contains('create:bad')));
      expect(await pocket.collection('good').query().all().count(), 0);
    });

    test('FTS registration failure propagates and leaves no handle', () async {
      // A duplicate column in the fts5 declaration is only rejected by
      // SQLite when the DDL executes.
      final schema = CollectionSchema<Object?>(
          name: 't',
          version: 1,
          fields: [Field.text('a')],
          fts: const FtsSpec(['a', 'a']));
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      await expectLater(
        LocalPocket.open(path: t.path, stores: [schema]),
        throwsA(isA<sqlite.SqliteException>()),
      );
    });

    test('encrypted field with unique/index configuration fails at open',
        () async {
      final uniqueEnc = CollectionSchema<Object?>(
          name: 't',
          version: 1,
          fields: [Field.text('s', encrypted: true, uniqueWhenActive: true)]);
      await expectLater(
        LocalPocket.open(path: ':memory:', stores: [uniqueEnc]),
        throwsA(isA<SchemaRegistrationError>()),
      );

      final indexedEnc =
          CollectionSchema<Object?>(name: 't', version: 1, fields: [
        Field.text('s', encrypted: true)
      ], indexes: const [
        IndexSpec(['s'])
      ]);
      await expectLater(
        LocalPocket.open(path: ':memory:', stores: [indexedEnc]),
        throwsA(isA<SchemaRegistrationError>()),
      );
    });

    test(
        'encrypted field without a cipher opens but writes fail with a '
        'typed error (documented)', () async {
      final schema = CollectionSchema<Object?>(
          name: 'enc',
          version: 1,
          fields: [Field.text('secret', encrypted: true)]);
      final pocket = await LocalPocket.open(path: ':memory:', stores: [schema]);
      addTearDown(pocket.close);
      // Registration does not require a cipher; the first encrypted write does.
      await expectLater(
        pocket.collection('enc').put({'id': generateRecordId(), 'secret': 'x'}),
        throwsA(isA<StateError>().having((e) => e.message, 'message',
            contains('no FieldCipher was provided'))),
      );
      expect(await pocket.collection('enc').query().all().count(), 0);
    });
  });

  group('same-version and duplicate-name registration', () {
    test(
        'same schema version with changed definitions reuses the old table '
        '(documented)', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final v1 = CollectionSchema<Object?>(
          name: 't', version: 1, fields: [Field.text('a')]);
      final p1 = await LocalPocket.open(path: t.path, stores: [v1]);
      await p1.collection('t').put({'id': generateRecordId(), 'a': 'x'});
      await p1.close();

      final changed = CollectionSchema<Object?>(
          name: 't', version: 1, fields: [Field.text('b')]);
      final p2 = await LocalPocket.open(path: t.path, stores: [changed]);
      addTearDown(p2.close);
      // No ALTER is issued for an equal version: the old columns survive.
      final cols = await p2.db.rawQuery('PRAGMA table_info("t")');
      final colNames = cols.map((c) => c['name']).toList();
      expect(colNames, contains('a'));
      expect(colNames, isNot(contains('b')));
      // Writing the new definition's field hits the missing column.
      await expectLater(
        p2.collection('t').put({'id': generateRecordId(), 'b': 'y'}),
        throwsA(isA<StorageError>()),
      );
    });

    test(
        'duplicate store names in one open: last definition wins the handle '
        'but the table keeps the first definition (documented)', () async {
      final a = CollectionSchema<Object?>(
          name: 'dup', version: 1, fields: [Field.text('a')]);
      final b = CollectionSchema<Object?>(
          name: 'dup', version: 1, fields: [Field.text('b')]);
      final pocket = await LocalPocket.open(path: ':memory:', stores: [a, b]);
      addTearDown(pocket.close);
      expect(pocket.storeNames, ['dup']);
      final cols = await pocket.db.rawQuery('PRAGMA table_info("dup")');
      final colNames = cols.map((c) => c['name']).toList();
      expect(colNames, contains('a'));
      expect(colNames, isNot(contains('b')));
      final stores = await pocket.db
          .rawQuery('SELECT store FROM lp_stores WHERE store = ?', ['dup']);
      expect(stores, hasLength(1), reason: 'one ledger row for one name');
    });
  });
}

/// A [Database] that fails (throws) once a statement starts with [failOnPrefix],
/// and records close calls. Wraps a real in-memory SQLite handle.
class _FailingDb extends DirectSqliteDatabase {
  _FailingDb(super.rawDb, {required this.failOnPrefix});
  final String failOnPrefix;
  int closeCount = 0;

  @override
  void executeSync(String sql, [List<Object?> parameters = const []]) {
    if (sql.startsWith(failOnPrefix)) {
      throw StateError('simulated failure on: $sql');
    }
    super.executeSync(sql, parameters);
  }

  @override
  Future<List<Map<String, Object?>>> rawQuery(String sql,
      [List<Object?> parameters = const []]) {
    if (sql.startsWith(failOnPrefix)) {
      throw StateError('simulated failure on: $sql');
    }
    return super.rawQuery(sql, parameters);
  }

  @override
  Future<void> close() async {
    closeCount++;
    await super.close();
  }
}
