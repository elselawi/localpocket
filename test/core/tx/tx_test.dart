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
}
