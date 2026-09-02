import 'dart:async';

import 'package:localpocket/src/kernel/database_adapter.dart';
import 'package:localpocket/src/kernel/ids.dart';
import 'package:sqlite3/sqlite3.dart' as sqlite;
import 'package:test/test.dart';

import '../support/helpers.dart';

/// Direct database adapter behavior: conflict algorithms, empty/edge inserts
/// and updates, quoting, bound arguments, raw queries, transactions, nested
/// transactions, statement-cache limits, and handle lifecycle.
void main() {
  DirectSqliteDatabase openDb([String? sql]) {
    final raw = sqlite.sqlite3.openInMemory();
    final db = DirectSqliteDatabase(raw);
    if (sql != null) db.executeSync(sql);
    return db;
  }

  group('DirectSqliteDatabase basics', () {
    test('selectSync and executeSync work and round-trip data', () async {
      final db = openDb('CREATE TABLE t (id TEXT PRIMARY KEY, v TEXT)');
      await db.execute('INSERT INTO t (id, v) VALUES (?, ?)', ['a', 'one']);
      final rows = db.selectSync('SELECT id, v FROM t WHERE id = ?', ['a']);
      expect(rows.single['id'], 'a');
      expect(rows.single['v'], 'one');

      db.executeSync('UPDATE t SET v = ? WHERE id = ?', ['two', 'a']);
      expect(db.selectSync('SELECT v FROM t WHERE id = ?', ['a']).single['v'],
          'two');

      db.executeSync('DELETE FROM t WHERE id = ?', ['a']);
      expect(db.selectSync('SELECT COUNT(*) c FROM t').single['c'], 0);
    });

    test('rawQuery returns column-name maps and bound args are positional',
        () async {
      final db = openDb('CREATE TABLE t (id TEXT PRIMARY KEY, v TEXT)');
      await db.execute('INSERT INTO t (id, v) VALUES (?, ?)', ['x', 'hello']);
      final rows = await db.rawQuery('SELECT * FROM t WHERE v = ?', ['hello']);
      expect(rows, hasLength(1));
      expect(rows.single['id'], 'x');
      expect(await db.rawQuery('SELECT * FROM t WHERE v = ?', ['missing']),
          isEmpty);
    });

    test('query() quotes the table name and supports spaced identifiers',
        () async {
      final db = openDb('CREATE TABLE "my table" ("col one" TEXT, v TEXT)');
      await db.insert('my table', {'col one': 'a', 'v': 'b'});
      final rows = await db.query('my table',
          columns: ['"col one"'], where: 'v = ?', whereArgs: ['b']);
      expect(rows.single['col one'], 'a');
    });

    test('insert/update/delete quote table and column identifiers', () async {
      final db = openDb('CREATE TABLE "weird tbl" ("odd col" TEXT, n INTEGER)');
      await db.insert('weird tbl', {'odd col': 'v', 'n': 1});
      final n = await db.update('weird tbl', {'odd col': 'w'},
          where: 'n = ?', whereArgs: [1]);
      expect(n, 1);
      expect(db.selectSync('SELECT * FROM "weird tbl"').single['odd col'], 'w');
      final d = await db.delete('weird tbl', where: 'n = ?', whereArgs: [1]);
      expect(d, 1);
      expect(
          db.selectSync('SELECT COUNT(*) c FROM "weird tbl"').single['c'], 0);
    });

    test('insert returns the rowid', () async {
      final db = openDb('CREATE TABLE t (v TEXT)');
      final r1 = await db.insert('t', {'v': 'a'});
      final r2 = await db.insert('t', {'v': 'b'});
      expect(r2, greaterThan(r1));
    });
  });

  group('empty and unmatched operations', () {
    test('empty insert without nullColumnHack throws ArgumentError', () async {
      final db = openDb('CREATE TABLE t (v TEXT)');
      await expectLater(
          db.insert('t', const {}), throwsA(isA<ArgumentError>()));
    });

    test('empty insert with nullColumnHack inserts a null row', () async {
      final db = openDb('CREATE TABLE t (v TEXT)');
      await db.insert('t', const {}, nullColumnHack: 'v');
      final rows = db.selectSync('SELECT * FROM t');
      expect(rows, hasLength(1));
      expect(rows.single['v'], isNull);
    });

    test('empty update returns 0 and changes nothing', () async {
      final db = openDb('CREATE TABLE t (v TEXT)');
      await db.insert('t', {'v': 'a'});
      expect(await db.update('t', const {}), 0);
      expect(db.selectSync('SELECT COUNT(*) c FROM t').single['c'], 1);
    });

    test('unmatched update/delete return zero counts', () async {
      final db = openDb('CREATE TABLE t (id TEXT PRIMARY KEY, v TEXT)');
      await db.insert('t', {'id': 'a', 'v': 'x'});
      expect(
          await db.update('t', {'v': 'y'},
              where: 'id = ?', whereArgs: ['nope']),
          0);
      expect(await db.delete('t', where: 'id = ?', whereArgs: ['nope']), 0);
      expect(db.selectSync('SELECT COUNT(*) c FROM t').single['c'], 1);
    });

    test('delete with no where removes all rows', () async {
      final db = openDb('CREATE TABLE t (v TEXT)');
      await db.insert('t', {'v': 'a'});
      await db.insert('t', {'v': 'b'});
      expect(await db.delete('t'), 2);
      expect(db.selectSync('SELECT COUNT(*) c FROM t').single['c'], 0);
    });
  });

  group('query SQL building', () {
    DirectSqliteDatabase aggDb() {
      final db = openDb(
          'CREATE TABLE sales (id TEXT PRIMARY KEY, region TEXT, amount INTEGER)');
      db.executeSync("INSERT INTO sales VALUES ('a','east',5)");
      db.executeSync("INSERT INTO sales VALUES ('b','east',10)");
      db.executeSync("INSERT INTO sales VALUES ('c','west',30)");
      return db;
    }

    test('groupBy builds a GROUP BY clause and returns grouped rows', () async {
      final db = aggDb();
      final recorder = <String>[];
      db.onQuery = (sql, _) => recorder.add(sql);
      final rows = await db.query('sales',
          columns: ['region', 'SUM(amount) AS total'], groupBy: 'region');
      expect(recorder.single, contains(' GROUP BY region'));
      expect({for (final r in rows) r['region']: r['total']},
          {'east': 15, 'west': 30});
      await db.close();
    });

    test('having filters grouped results after aggregation', () async {
      final db = aggDb();
      final recorder = <String>[];
      db.onQuery = (sql, _) => recorder.add(sql);
      final rows = await db.query('sales',
          columns: ['region', 'SUM(amount) AS total'],
          groupBy: 'region',
          having: 'SUM(amount) > 25');
      final sql = recorder.single;
      expect(sql, contains(' GROUP BY region'));
      expect(sql, contains(' HAVING SUM(amount) > 25'));
      expect(rows, hasLength(1));
      expect(rows.single['region'], 'west');
      expect(rows.single['total'], 30);
      await db.close();
    });

    test('distinct: true emits SELECT DISTINCT and deduplicates rows',
        () async {
      final db = aggDb();
      final recorder = <String>[];
      db.onQuery = (sql, _) => recorder.add(sql);
      final rows = await db.query('sales', columns: ['region'], distinct: true);
      expect(recorder.single, startsWith('SELECT DISTINCT '));
      expect(rows.map((r) => r['region']).toList(), hasLength(2));
      await db.close();
    });

    test('empty groupBy and having strings are omitted', () async {
      final db = aggDb();
      final recorder = <String>[];
      db.onQuery = (sql, _) => recorder.add(sql);
      await db.query('sales', groupBy: '', having: '');
      expect(recorder.single, isNot(contains('GROUP BY')));
      expect(recorder.single, isNot(contains('HAVING')));
      await db.close();
    });

    test(
        'distinct, groupBy, having, orderBy, limit and offset compose in '
        'stable clause order', () async {
      final db = aggDb();
      final recorder = <String>[];
      db.onQuery = (sql, _) => recorder.add(sql);
      await db.query('sales',
          columns: ['region'],
          distinct: true,
          groupBy: 'region',
          having: 'SUM(amount) > 0',
          orderBy: 'region',
          limit: 1,
          offset: 1);
      final sql = recorder.single;
      expect(sql, startsWith('SELECT DISTINCT '));
      expect(sql, contains(' GROUP BY region'));
      expect(sql, contains(' HAVING SUM(amount) > 0'));
      expect(sql, contains(' ORDER BY region'));
      expect(sql, contains(' LIMIT 1'));
      expect(sql, contains(' OFFSET 1'));
      expect(sql.indexOf(' GROUP BY'), lessThan(sql.indexOf(' HAVING')));
      expect(sql.indexOf(' HAVING'), lessThan(sql.indexOf(' ORDER BY')));
      expect(sql.indexOf(' ORDER BY'), lessThan(sql.indexOf(' LIMIT')));
      expect(sql.indexOf(' LIMIT'), lessThan(sql.indexOf(' OFFSET')));
      await db.close();
    });
  });

  group('ConflictAlgorithm', () {
    const createTable = 'CREATE TABLE t (id TEXT PRIMARY KEY, v TEXT)';

    test('abort rejects the conflicting insert and keeps prior state',
        () async {
      final db = openDb(createTable);
      await db.insert('t', {'id': 'a', 'v': '1'});
      await expectLater(
        db.insert('t', {'id': 'a', 'v': '2'},
            conflictAlgorithm: ConflictAlgorithm.abort),
        throwsA(isA<sqlite.SqliteException>()),
      );
      expect(db.selectSync('SELECT v FROM t WHERE id = ?', ['a']).single['v'],
          '1');
      // Connection remains usable.
      await db.insert('t', {'id': 'b', 'v': 'b'});
      expect(db.selectSync('SELECT COUNT(*) c FROM t').single['c'], 2);
    });

    test('ignore skips the conflicting insert without error', () async {
      final db = openDb(createTable);
      await db.insert('t', {'id': 'a', 'v': '1'});
      await db.insert('t', {'id': 'a', 'v': '2'},
          conflictAlgorithm: ConflictAlgorithm.ignore);
      expect(
          db.selectSync('SELECT v FROM t WHERE id = ?', ['a']).single['v'], '1',
          reason: 'OR IGNORE keeps the original row');
      expect(db.selectSync('SELECT COUNT(*) c FROM t').single['c'], 1);
    });

    test('replace overwrites the conflicting row', () async {
      final db = openDb(createTable);
      await db.insert('t', {'id': 'a', 'v': '1'});
      await db.insert('t', {'id': 'a', 'v': '2'},
          conflictAlgorithm: ConflictAlgorithm.replace);
      expect(db.selectSync('SELECT v FROM t WHERE id = ?', ['a']).single['v'],
          '2');
      expect(db.selectSync('SELECT COUNT(*) c FROM t').single['c'], 1);
    });

    test('fail keeps prior rows of the same statement', () async {
      final db = openDb(createTable);
      await expectLater(
        db.execute(
            "INSERT OR FAIL INTO t VALUES ('a','a'),('b','b'),('a','dup')"),
        throwsA(isA<sqlite.SqliteException>()),
      );
      // SQLITE_FAIL stops at the failing row but keeps earlier rows.
      expect(db.selectSync('SELECT id FROM t ORDER BY id'), [
        {'id': 'a'},
        {'id': 'b'}
      ]);
    });

    test('abort rolls back the whole statement', () async {
      final db = openDb(createTable);
      await expectLater(
        db.execute(
            "INSERT OR ABORT INTO t VALUES ('x','x'),('y','y'),('x','dup')"),
        throwsA(isA<sqlite.SqliteException>()),
      );
      expect(db.selectSync('SELECT COUNT(*) c FROM t').single['c'], 0,
          reason: 'OR ABORT rolls back the entire statement');
    });

    test('ignore skips duplicates in a multi-row insert', () async {
      final db = openDb(createTable);
      await db.execute(
          "INSERT OR IGNORE INTO t VALUES ('p','p'),('q','q'),('p','dup')");
      expect(db.selectSync('SELECT id FROM t ORDER BY id'), [
        {'id': 'p'},
        {'id': 'q'}
      ]);
    });

    test('replace deduplicates in a multi-row insert', () async {
      final db = openDb(createTable);
      await db.execute(
          "INSERT OR REPLACE INTO t VALUES ('p','p'),('q','q'),('p','replaced')");
      expect(db.selectSync('SELECT id, v FROM t ORDER BY id'), [
        {'id': 'p', 'v': 'replaced'},
        {'id': 'q', 'v': 'q'},
      ]);
    });

    test('rollback outside a transaction behaves like abort', () async {
      final db = openDb(createTable);
      await db.insert('t', {'id': 'a', 'v': '1'});
      await expectLater(
        db.insert('t', {'id': 'a', 'v': '2'},
            conflictAlgorithm: ConflictAlgorithm.rollback),
        throwsA(isA<sqlite.SqliteException>()),
      );
      expect(db.selectSync('SELECT v FROM t WHERE id = ?', ['a']).single['v'],
          '1');
    });

    test('rollback inside a transaction aborts the whole transaction',
        () async {
      final db = openDb(createTable);
      await expectLater(
        db.transaction((txn) async {
          await txn.insert('t', {'id': 'r1', 'v': 'a'});
          await txn.insert('t', {'id': 'r1', 'v': 'dup'},
              conflictAlgorithm: ConflictAlgorithm.rollback);
        }),
        throwsA(isA<sqlite.SqliteException>()),
      );
      // OR ROLLBACK rolled back the enclosing transaction entirely.
      expect(db.selectSync('SELECT COUNT(*) c FROM t').single['c'], 0);
      // Connection is back in autocommit and usable.
      await db.insert('t', {'id': 'r2', 'v': 'ok'});
      expect(db.selectSync('SELECT COUNT(*) c FROM t').single['c'], 1);
    });

    test('conflict algorithms apply to updates too', () async {
      final db = openDb(createTable);
      await db.insert('t', {'id': 'a', 'v': '1'});
      await db.insert('t', {'id': 'b', 'v': '2'});
      await db.execute('CREATE UNIQUE INDEX ux_v ON t(v)');

      // Updating a to b's unique value conflicts; OR IGNORE keeps the old row.
      await db.update('t', {'v': '2'},
          where: 'id = ?',
          whereArgs: ['a'],
          conflictAlgorithm: ConflictAlgorithm.ignore);
      expect(
          db.selectSync('SELECT v FROM t WHERE id = ?', ['a']).single['v'], '1',
          reason: 'OR IGNORE leaves the conflicting row untouched');

      // OR REPLACE deletes the conflicting row and writes the new one.
      await db.update('t', {'v': '2'},
          where: 'id = ?',
          whereArgs: ['a'],
          conflictAlgorithm: ConflictAlgorithm.replace);
      expect(db.selectSync('SELECT v FROM t WHERE id = ?', ['a']).single['v'],
          '2');
      expect(db.selectSync('SELECT COUNT(*) c FROM t').single['c'], 1,
          reason: 'OR REPLACE removes the row that held the conflicting value');
    });

    test('insert with ConflictAlgorithm.fail throws and keeps the prior row',
        () async {
      final db = openDb(createTable);
      await db.insert('t', {'id': 'a', 'v': '1'});
      await expectLater(
        db.insert('t', {'id': 'a', 'v': '2'},
            conflictAlgorithm: ConflictAlgorithm.fail),
        throwsA(isA<sqlite.SqliteException>()),
      );
      expect(db.selectSync('SELECT v FROM t WHERE id = ?', ['a']).single['v'],
          '1');
      // Connection remains usable after the failed insert.
      await db.insert('t', {'id': 'b', 'v': 'b'});
      expect(db.selectSync('SELECT COUNT(*) c FROM t').single['c'], 2);
    });

    test('update with ConflictAlgorithm.abort throws and keeps the row',
        () async {
      final db = openDb(createTable);
      await db.insert('t', {'id': 'a', 'v': '1'});
      await db.insert('t', {'id': 'b', 'v': '2'});
      await db.execute('CREATE UNIQUE INDEX ux_v ON t(v)');
      await expectLater(
        db.update('t', {'v': '2'},
            where: 'id = ?',
            whereArgs: ['a'],
            conflictAlgorithm: ConflictAlgorithm.abort),
        throwsA(isA<sqlite.SqliteException>()),
      );
      expect(db.selectSync('SELECT v FROM t WHERE id = ?', ['a']).single['v'],
          '1');
      expect(db.selectSync('SELECT COUNT(*) c FROM t').single['c'], 2);
    });

    test('update with ConflictAlgorithm.fail throws and keeps the row',
        () async {
      final db = openDb(createTable);
      await db.insert('t', {'id': 'a', 'v': '1'});
      await db.insert('t', {'id': 'b', 'v': '2'});
      await db.execute('CREATE UNIQUE INDEX ux_v ON t(v)');
      await expectLater(
        db.update('t', {'v': '2'},
            where: 'id = ?',
            whereArgs: ['a'],
            conflictAlgorithm: ConflictAlgorithm.fail),
        throwsA(isA<sqlite.SqliteException>()),
      );
      expect(db.selectSync('SELECT v FROM t WHERE id = ?', ['a']).single['v'],
          '1');
      expect(db.selectSync('SELECT COUNT(*) c FROM t').single['c'], 2);
    });

    test('update with ConflictAlgorithm.rollback aborts the whole transaction',
        () async {
      final db = openDb(createTable);
      await db.insert('t', {'id': 'a', 'v': '1'});
      await db.insert('t', {'id': 'b', 'v': '2'});
      await db.execute('CREATE UNIQUE INDEX ux_v ON t(v)');
      await expectLater(
        db.transaction((txn) async {
          // An innocuous prior write inside the transaction.
          await txn.update('t', {'v': '5'}, where: 'id = ?', whereArgs: ['a']);
          // Conflicts with b's unique v = '2'.
          await txn.update('t', {'v': '2'},
              where: 'id = ?',
              whereArgs: ['a'],
              conflictAlgorithm: ConflictAlgorithm.rollback);
        }),
        throwsA(isA<sqlite.SqliteException>()),
      );
      // OR ROLLBACK reverts the earlier update in the same transaction too.
      expect(db.selectSync('SELECT v FROM t WHERE id = ?', ['a']).single['v'],
          '1');
      expect(db.selectSync('SELECT v FROM t WHERE id = ?', ['b']).single['v'],
          '2');
    });
  });

  group('transactions', () {
    test('commit persists all writes', () async {
      final db = openDb('CREATE TABLE t (id TEXT PRIMARY KEY, v TEXT)');
      final result = await db.transaction((txn) async {
        await txn.insert('t', {'id': 'a', 'v': 'a'});
        await txn.insert('t', {'id': 'b', 'v': 'b'});
        return 'done';
      });
      expect(result, 'done');
      expect(db.selectSync('SELECT COUNT(*) c FROM t').single['c'], 2);
    });

    test('rollback discards all writes on error', () async {
      final db = openDb('CREATE TABLE t (id TEXT PRIMARY KEY, v TEXT)');
      await expectLater(
        db.transaction((txn) async {
          await txn.insert('t', {'id': 'a', 'v': 'a'});
          throw StateError('boom');
        }),
        throwsA(isA<StateError>()),
      );
      expect(db.selectSync('SELECT COUNT(*) c FROM t').single['c'], 0);
    });

    test('transaction uses BEGIN IMMEDIATE', () async {
      final recorder = <String>[];
      final raw = sqlite.sqlite3.openInMemory();
      final db = DirectSqliteDatabase(raw);
      db.onExecute = (sql, _) => recorder.add(sql);
      await db.execute('CREATE TABLE t (id TEXT PRIMARY KEY, v TEXT)');
      recorder.clear();
      await db.transaction((txn) async {
        await txn.insert('t', {'id': 'a', 'v': 'a'});
      });
      expect(recorder, contains('BEGIN IMMEDIATE'));
      expect(recorder, contains('COMMIT'));
      expect(recorder, isNot(contains('BEGIN EXCLUSIVE')));
      await db.close();
    });

    test('exclusive transaction uses BEGIN EXCLUSIVE', () async {
      final recorder = <String>[];
      final raw = sqlite.sqlite3.openInMemory();
      final db = DirectSqliteDatabase(raw);
      db.onExecute = (sql, _) => recorder.add(sql);
      await db.execute('CREATE TABLE t (id TEXT PRIMARY KEY, v TEXT)');
      recorder.clear();
      await db.transaction((txn) async {
        await txn.insert('t', {'id': 'a', 'v': 'a'});
      }, exclusive: true);
      expect(recorder, contains('BEGIN EXCLUSIVE'));
      await db.close();
    });

    test('nested direct transaction fails clearly without breaking the outer',
        () async {
      final db = openDb('CREATE TABLE t (id TEXT PRIMARY KEY, v TEXT)');
      await db.transaction((txn) async {
        await txn.insert('t', {'id': 'a', 'v': 'a'});
        await expectLater(
          db.transaction((t2) async {
            await t2.insert('t', {'id': 'b', 'v': 'b'});
          }),
          throwsA(isA<sqlite.SqliteException>()),
        );
        // Outer transaction still usable and commits.
        await txn.insert('t', {'id': 'c', 'v': 'c'});
      });
      final ids = db
          .selectSync('SELECT id FROM t ORDER BY id')
          .map((r) => r['id'])
          .toList();
      expect(ids, ['a', 'c'],
          reason: 'nested BEGIN failure must not roll back the outer txn');
      expect(ids, isNot(contains('b')));
    });
  });

  group('statement cache limits', () {
    DirectSqliteDatabase cacheDb() {
      final db = openDb('CREATE TABLE t (id INTEGER PRIMARY KEY, v TEXT)');
      for (var i = 0; i < 400; i++) {
        db.executeSync('INSERT INTO t (id, v) VALUES (?, ?)', [i, 'v$i']);
      }
      return db;
    }

    test('255 distinct prepared statements stay cached and correct', () async {
      final db = cacheDb();
      final sqls = <String>[
        for (var i = 0; i < 255; i++) 'SELECT v FROM t WHERE id = $i'
      ];
      for (var i = 0; i < sqls.length; i++) {
        expect(db.selectSync(sqls[i]).single['v'], 'v$i');
      }
      // Re-running every statement after the cache filled still works.
      for (var i = 0; i < sqls.length; i++) {
        expect(db.selectSync(sqls[i]).single['v'], 'v$i');
      }
      await db.close();
    });

    test('256th statement is cached without eviction of correctness', () async {
      final db = cacheDb();
      final sqls = <String>[
        for (var i = 0; i < 256; i++) 'SELECT v FROM t WHERE id = $i'
      ];
      for (var i = 0; i < sqls.length; i++) {
        expect(db.selectSync(sqls[i]).single['v'], 'v$i');
      }
      await db.close();
    });

    test('more than 256 statements evict the oldest and stay correct',
        () async {
      final db = cacheDb();
      final sqls = <String>[
        for (var i = 0; i < 300; i++) 'SELECT v FROM t WHERE id = $i'
      ];
      // Fill beyond the 256-entry cache.
      for (var i = 0; i < 300; i++) {
        expect(db.selectSync(sqls[i]).single['v'], 'v$i');
      }
      // Evicted statements can be re-prepared and every statement is correct.
      for (var i = 0; i < 300; i++) {
        expect(db.selectSync(sqls[i]).single['v'], 'v$i');
      }
      await db.close();
    });

    test('getPreparedStatement reuses the same handle for identical SQL',
        () async {
      final db = cacheDb();
      final a = db.getPreparedStatement('SELECT v FROM t WHERE id = 1');
      final b = db.getPreparedStatement('SELECT v FROM t WHERE id = 1');
      expect(identical(a, b), isTrue);
      expect(a.select().single['v'], 'v1');
      await db.close();
    });

    test(
        'selectSync and executeSync continue using prepared statements after 256 statements',
        () async {
      final db = cacheDb();
      // Fill statement cache beyond 256 items
      for (var i = 0; i < 300; i++) {
        db.selectSync('SELECT v FROM t WHERE id = $i');
      }

      // After 300 queries, selectSync for a specific query should populate and reuse the cached prepared statement
      const targetQuery = 'SELECT v FROM t WHERE id = 100';
      db.selectSync(targetQuery);
      final cachedStmt = db.getPreparedStatement(targetQuery);

      // Querying again should return the expected result using the cached statement
      final res = db.selectSync(targetQuery);
      expect(res.single['v'], 'v100');
      expect(
          identical(db.getPreparedStatement(targetQuery), cachedStmt), isTrue);

      // Also verify executeSync with statements after 256 statements
      const targetUpdate = 'UPDATE t SET v = ? WHERE id = 100';
      db.executeSync(targetUpdate, ['v100_updated']);
      final cachedUpdateStmt = db.getPreparedStatement(targetUpdate);
      db.executeSync(targetUpdate, ['v100_updated2']);
      expect(identical(db.getPreparedStatement(targetUpdate), cachedUpdateStmt),
          isTrue);
      expect(db.selectSync(targetQuery).single['v'], 'v100_updated2');

      await db.close();
    });

    test('LRU promotion keeps a hot statement cached under eviction pressure',
        () async {
      final db = cacheDb();
      // Fill the 256-entry cache with distinct statements (insertion order
      // 0..255). ids 1000+ do not exist in `t`; we only need the statements.
      const first = 'SELECT v FROM t WHERE id = 0';
      for (var i = 0; i < 256; i++) {
        db.selectSync('SELECT v FROM t WHERE id = $i');
      }
      // Refresh the FIRST statement: promote-on-hit moves it to the
      // most-recently-used tail of the LRU chain.
      final hot = db.getPreparedStatement(first);

      // Insert 255 more distinct statements; each insertion evicts the current
      // least-recently-used entry. Without promote-on-hit (plain FIFO) the
      // first statement would be evicted on the very first insert.
      for (var i = 1000; i < 1255; i++) {
        db.selectSync('SELECT v FROM t WHERE id = $i');
      }

      expect(identical(db.getPreparedStatement(first), hot), isTrue,
          reason: 'a promoted statement survives eviction (true LRU)');
      expect(db.selectSync(first).single['v'], 'v0',
          reason: 'the surviving statement is still correct');
      await db.close();
    });
  });

  group('handle lifecycle', () {
    test('repeated close is idempotent and safe', () async {
      final db = openDb('CREATE TABLE t (v TEXT)');
      await db.close();
      expect(db.isOpen, isFalse);
      await db.close();
      await db.close();
      expect(db.isOpen, isFalse);
    });

    test('prepare and cached statements fail after close', () async {
      final db = openDb('CREATE TABLE t (v TEXT)');
      final stmt = db.prepare('SELECT 1');
      await db.close();
      expect(db.isOpen, isFalse);
      expect(() => db.prepare('SELECT 1'), throwsA(anything));
      expect(() => db.getPreparedStatement('SELECT 1'), throwsA(anything));
      expect(() => db.selectSync('SELECT 1'), throwsA(anything));
      expect(() => db.executeSync('SELECT 1'), throwsA(anything));
      // The previously prepared statement handle is also dead.
      expect(() => stmt.select(), throwsA(anything));
      stmt.close();
    });

    test('close while a prepared statement handle is in use', () async {
      final db = openDb('CREATE TABLE t (v TEXT)');
      final stmt = db.prepare('SELECT v FROM t');
      expect(stmt.select(), isEmpty);
      await db.close();
      expect(() => stmt.select(), throwsA(anything));
    });

    test('LocalPocket operations after close fail cleanly', () async {
      final pocket = await openPocket();
      await pocket.close();
      final id = generateRecordId();
      // Collection CRUD and transactions surface an error, not a hang.
      await expectLater(
          pocket.collection('widgets').put({'id': id, 'name': 'x'}),
          throwsA(anything));
      await expectLater(pocket.transaction((tx) async {}), throwsA(anything));
      await expectLater(pocket.read((tx) async {}), throwsA(anything));
      await expectLater(
          pocket.collection('widgets').get(id), throwsA(anything));
    });

    test('database close while a transaction is active errors on commit',
        () async {
      final db = openDb('CREATE TABLE t (id TEXT PRIMARY KEY, v TEXT)');
      final gate = Completer<void>();
      final txFuture = db.transaction((txn) async {
        await txn.insert('t', {'id': 'a', 'v': 'a'});
        await gate.future; // hold the transaction open
      });
      await Future<void>.delayed(const Duration(milliseconds: 20));
      await db.close();
      gate.complete();
      // Either the commit or the rollback path errors on the closed handle.
      await expectLater(txFuture, throwsA(anything));
    });
  });
}
