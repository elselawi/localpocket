import 'dart:async';
import 'dart:io';
import 'package:sqlite3/sqlite3.dart' as sqlite;

import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';

/// Transaction tests.
void main() {
  group('transactions', () {
    test('rollback discards outbox intent', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final id = generateRecordId();

      await expectLater(pocket.transaction((tx) async {
        await tx.collection('widgets').put(record(id: id, name: 'x'));
        throw StateError('boom');
      }), throwsA(isA<StateError>()));

      expect(await pocket.collection('widgets').get(id), isNull);
      expect(await pocket.outbox.readOp(pocket.db, 'widgets', id), isNull);
      expect(await pocket.outbox.readSyncRow(pocket.db, 'widgets', id), isNull);
    });

    test('savepoint nested rollback', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final a = generateRecordId();
      final b = generateRecordId();

      await pocket.transaction((tx) async {
        await tx.collection('widgets').put(record(id: a, name: 'a'));
        await expectLater(tx.transaction((tx2) async {
          await tx2.collection('widgets').put(record(id: b, name: 'b'));
          throw StateError('nested fail');
        }), throwsA(isA<StateError>()));
        // Outer transaction continues and commits.
      });

      expect(await pocket.collection('widgets').get(a), isNotNull);
      expect(await pocket.collection('widgets').get(b), isNull,
          reason: 'savepoint rolled back');
    });

    test('db calls inside tx throw', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      await pocket.transaction((tx) async {
        expect(() => pocket.collection('widgets'), throwsStateError);
        await expectLater(
            () => pocket.transaction((_) async {}), throwsStateError);
        await expectLater(() => pocket.read((_) async {}), throwsStateError);
      });
    });

    test('no network inside tx enforced', () async {
      // The core and sync layers never import dart:io or an HTTP client, and
      // the Tx surface exposes no network members.
      for (final dir in ['lib/src/core', 'lib/src/sync']) {
        final files = Directory(dir)
            .listSync(recursive: true)
            .whereType<File>()
            .where((f) => f.path.endsWith('.dart'));
        for (final f in files) {
          final content = await f.readAsString();
          expect(content, isNot(contains("import 'dart:io'")),
              reason: '${f.path} must not import dart:io');
          expect(content, isNot(contains("package:http/")),
              reason: '${f.path} must not import http');
        }
      }
      final txApi = await File('lib/src/core/transaction.dart').readAsString();
      expect(txApi, isNot(contains('http')));
      expect(txApi, isNot(contains('Client')));
    });

    test('begin immediate no deadlock under reader', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final pocket = await openPocket(path: t.path);
      addTearDown(pocket.close);

      final conn2 = sqlite.sqlite3.open(t.path);
      addTearDown(conn2.close);
      conn2.execute('BEGIN');
      try {
        // WAL: a reader does not block the writer's BEGIN IMMEDIATE.
        await pocket
            .collection('widgets')
            .put(record(id: generateRecordId(), name: 'x'))
            .timeout(const Duration(seconds: 5));
      } finally {
        conn2.execute('COMMIT');
      }
    });

    test('dirty txns use synchronous full', () async {
      // File-backed: durability classes are meaningful (fsync) only on disk.
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final recorder = StatementRecorder();
      final hooks = TestHooks(onExecute: recorder.record);
      final pocket = await openPocket(path: t.path, testHooks: hooks);
      addTearDown(pocket.close);
      recorder.statements.clear();

      await pocket
          .collection('widgets')
          .put(record(id: generateRecordId(), name: 'x'));

      expect(recorder.statements, contains('PRAGMA synchronous=FULL'));
      expect(recorder.statements, contains('PRAGMA synchronous=NORMAL'));
      expect(
          recorder.statements.indexOf('PRAGMA synchronous=FULL') <
              recorder.statements.lastIndexOf('PRAGMA synchronous=NORMAL'),
          isTrue,
          reason: 'FULL is set for the write, NORMAL restored afterwards');
    });

    test('read snapshot isolation', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'v1'));

      final emitted = <ChangeSet>[];
      final sub = pocket.changes.listen(emitted.add);
      addTearDown(sub.cancel);

      final result = await pocket.read((tx) async {
        final a = await tx.collection('widgets').get(id);
        final b = await tx.collection('widgets').get(id);
        return [a, b];
      });
      expect(result[0]!['name'], 'v1');
      expect(result[1]!['name'], 'v1');

      // read() emits no notifications.
      expect(emitted, isEmpty);

      // Writes through a read-only Tx are rejected.
      await expectLater(pocket.read((tx) async {
        await tx.collection('widgets').put(record(id: id, name: 'nope'));
      }), throwsA(isA<ReadOnlyTxError>()));
    });

    test('notifications emitted only after commit', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final emitted = <ChangeSet>[];
      final sub = pocket.changes.listen(emitted.add);
      addTearDown(sub.cancel);
      final id = generateRecordId();

      final txFuture = pocket.transaction((tx) async {
        await tx.collection('widgets').put(record(id: id, name: 'x'));
        await Future<void>.delayed(const Duration(milliseconds: 20));
        expect(emitted, isEmpty, reason: 'no emission before commit');
      });
      await txFuture;
      await Future<void>.delayed(Duration.zero);
      expect(emitted, hasLength(1));
      expect(emitted.single.store, 'widgets');
      expect(emitted.single.ids, contains(id));
    });
  });

  group('read transaction serialization', () {
    test('a read held open queues a writer instead of failing', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final gate = Completer<void>();
      final readF = pocket.read((tx) async {
        await gate.future;
      });
      await Future<void>.delayed(const Duration(milliseconds: 50));

      final id = generateRecordId();
      var writeDone = false;
      final writeF =
          pocket.collection('widgets').put(record(id: id, name: 'x'));
      writeF.whenComplete(() => writeDone = true);
      await Future<void>.delayed(const Duration(milliseconds: 100));
      expect(writeDone, isFalse,
          reason: 'the writer must queue behind the open read, not fail');

      gate.complete();
      await readF;
      await writeF.timeout(const Duration(seconds: 5));
      expect(await pocket.collection('widgets').get(id), isNotNull,
          reason: 'the writer completes after the read releases');
    });

    test('two concurrent reads both complete without error', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final results = await Future.wait([
        pocket.read((tx) => tx.collection('widgets').query().all().count()),
        pocket.read((tx) => tx.collection('widgets').query().all().count()),
      ]);
      expect(results, [0, 0]);
    });

    test('multiple reads interleave correctly with writes', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      for (var i = 0; i < 5; i++) {
        final results = await Future.wait<Object?>([
          pocket.read((tx) => tx.collection('widgets').query().all().count()),
          pocket
              .collection('widgets')
              .put(record(id: generateRecordId(), name: 'n$i')),
          pocket.read((tx) => tx.collection('widgets').query().all().count()),
        ]);
        expect(results[0], i, reason: 'read before the write sees $i rows');
        expect(results[2], i + 1,
            reason: 'read after the write sees $i+1 rows');
      }
    });

    test('a read that throws does not poison the write queue', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      await expectLater(
        pocket.read((tx) async => throw StateError('read boom')),
        throwsA(isA<StateError>()),
      );
      await pocket
          .collection('widgets')
          .put(record(id: generateRecordId(), name: 'ok'));
      expect(await pocket.collection('widgets').query().all().count(), 1,
          reason: 'later writes still commit after a failed read');
    });

    test('a read does not toggle durability pragmas', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final recorder = <String>[];
      final db = DirectSqliteDatabase(sqlite.sqlite3.open(t.path));
      db.onExecute = (sql, _) => recorder.add(sql);
      final pocket = await openPocket(path: t.path, database: db);
      addTearDown(pocket.close);
      recorder.clear();

      await pocket.read((tx) async {});
      expect(recorder.where((s) => s.contains('PRAGMA synchronous')), isEmpty,
          reason: 'read-only transactions never change durability');
    });
  });

  group('nested savepoint notifications', () {
    test('rollback of a savepoint does not leak ChangeSets or row counts',
        () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final emitted = <ChangeSet>[];
      final sub = pocket.changes.listen(emitted.add);
      addTearDown(sub.cancel);
      final a = generateRecordId();
      final b = generateRecordId();
      final rowsBefore = pocket.perf.rowsWritten;

      await pocket.transaction((tx) async {
        await tx.collection('widgets').put(record(id: a, name: 'a'));
        await expectLater(
          tx.transaction((tx2) async {
            await tx2.collection('widgets').put(record(id: b, name: 'b'));
            throw StateError('nested fail');
          }),
          throwsA(isA<StateError>()),
        );
      });

      await Future<void>.delayed(const Duration(milliseconds: 50));
      expect(await pocket.collection('widgets').get(b), isNull);
      expect(emitted, hasLength(1));
      expect(emitted.single.ids, contains(a));
      expect(emitted.single.ids, isNot(contains(b)),
          reason: 'the rolled-back id must not appear in any ChangeSet');
      expect(pocket.perf.rowsWritten - rowsBefore, 1,
          reason: 'rolled-back rows must not be counted');
    });

    test('rollback of a savepoint causes no watch refresh or emission',
        () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final a = generateRecordId();
      final b = generateRecordId();
      final events = <int>[];
      final sub = col
          .query()
          .limit(10)
          .watch()
          .listen((items) => events.add(items.length));
      addTearDown(sub.cancel);
      await Future<void>.delayed(const Duration(milliseconds: 60));
      expect(events, [0]);

      await pocket.transaction((tx) async {
        await tx.collection('widgets').put(record(id: a, name: 'a'));
        await expectLater(
          tx.transaction((tx2) async {
            await tx2.collection('widgets').put(record(id: b, name: 'b'));
            throw StateError('nested fail');
          }),
          throwsA(isA<StateError>()),
        );
      });
      await Future<void>.delayed(const Duration(milliseconds: 120));
      expect(events, [0, 1],
          reason: 'only the committed A causes an emission; B is invisible');
    });

    test('nested savepoint success commits both levels', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final a = generateRecordId();
      final b = generateRecordId();
      await pocket.transaction((tx) async {
        await tx.collection('widgets').put(record(id: a, name: 'a'));
        await tx.transaction((tx2) async {
          await tx2.collection('widgets').put(record(id: b, name: 'b'));
        });
      });
      expect(await pocket.collection('widgets').get(a), isNotNull);
      expect(await pocket.collection('widgets').get(b), isNotNull);
    });

    test('sibling savepoints are independent', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final a = generateRecordId();
      final b = generateRecordId();
      final c = generateRecordId();
      await pocket.transaction((tx) async {
        await tx.collection('widgets').put(record(id: a, name: 'a'));
        await expectLater(
          tx.transaction((tx2) async {
            await tx2.collection('widgets').put(record(id: b, name: 'b'));
            throw StateError('first sibling fails');
          }),
          throwsA(isA<StateError>()),
        );
        // The second sibling runs after the first rolled back.
        await tx.transaction((tx2) async {
          await tx2.collection('widgets').put(record(id: c, name: 'c'));
        });
      });
      expect(await pocket.collection('widgets').get(a), isNotNull);
      expect(await pocket.collection('widgets').get(b), isNull);
      expect(await pocket.collection('widgets').get(c), isNotNull);
    });

    test('savepoint names are deterministic and nested', () async {
      final recorded = <String>[];
      final db = DirectSqliteDatabase(sqlite.sqlite3.openInMemory());
      db.onExecute = (sql, _) => recorded.add(sql);
      final pocket = await openPocket(database: db, path: ':memory:');
      addTearDown(pocket.close);
      recorded.clear();

      await pocket.transaction((tx) async {
        await tx.transaction((tx2) async {});
        await tx.transaction((tx2) async {
          await tx2.transaction((tx3) async {});
        });
      });
      expect(recorded.where((s) => s.startsWith('SAVEPOINT')).toList(),
          ['SAVEPOINT lp_sp0', 'SAVEPOINT lp_sp1', 'SAVEPOINT lp_sp1_0']);
      expect(recorded.where((s) => s.startsWith('RELEASE')).toList(),
          ['RELEASE lp_sp0', 'RELEASE lp_sp1_0', 'RELEASE lp_sp1']);
    });

    test('outer rollback discards nested success', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final emitted = <ChangeSet>[];
      final sub = pocket.changes.listen(emitted.add);
      addTearDown(sub.cancel);
      final a = generateRecordId();
      final b = generateRecordId();

      await expectLater(
        pocket.transaction((tx) async {
          await tx.collection('widgets').put(record(id: a, name: 'a'));
          await tx.transaction((tx2) async {
            await tx2.collection('widgets').put(record(id: b, name: 'b'));
          });
          throw StateError('outer fails');
        }),
        throwsA(isA<StateError>()),
      );
      await Future<void>.delayed(const Duration(milliseconds: 50));
      expect(await pocket.collection('widgets').get(a), isNull);
      expect(await pocket.collection('widgets').get(b), isNull);
      expect(emitted, isEmpty, reason: 'a rolled-back outer emits nothing');
    });
  });

  group('read-only transaction edge cases', () {
    test('nested transaction inside a read throws StateError', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      await expectLater(
        pocket.read((tx) async {
          await tx.transaction((tx2) async {});
        }),
        throwsA(isA<StateError>()),
      );
    });

    test('every mutation method on a read-only Tx throws ReadOnlyTxError',
        () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'x'));

      await pocket.read((tx) async {
        final col = tx.collection('widgets');
        await expectLater(col.put(record(id: generateRecordId(), name: 'y')),
            throwsA(isA<ReadOnlyTxError>()));
        await expectLater(
            col.putAll([record(id: generateRecordId(), name: 'z')]),
            throwsA(isA<ReadOnlyTxError>()));
        await expectLater(
            col.patch(id, {'name': 'p'}), throwsA(isA<ReadOnlyTxError>()));
        await expectLater(col.archive(id), throwsA(isA<ReadOnlyTxError>()));
        await expectLater(col.restore(id), throwsA(isA<ReadOnlyTxError>()));
        await expectLater(col.purge(id), throwsA(isA<ReadOnlyTxError>()));
      });
      // Nothing changed.
      expect((await pocket.collection('widgets').get(id))!['name'], 'x');
      expect(await pocket.collection('widgets').query().all().count(), 1);
    });

    test('local pocket calls from a read zone are rejected', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      await pocket.read((tx) async {
        expect(() => pocket.collection('widgets'), throwsStateError);
        // _guardOutsideTx throws synchronously, so use closures.
        await expectLater(
            () => pocket.transaction((tx2) async {}), throwsStateError);
        await expectLater(() => pocket.read((tx2) async {}), throwsStateError);
      });
    });

    test('reads emit no change notifications', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final emitted = <ChangeSet>[];
      final sub = pocket.changes.listen(emitted.add);
      addTearDown(sub.cancel);
      await pocket.read((tx) async {
        await tx
            .collection('widgets')
            .put(record(id: generateRecordId(), name: 'x'));
      }).catchError((_) {});
      await Future<void>.delayed(const Duration(milliseconds: 30));
      expect(emitted, isEmpty);
    });
  });
}
