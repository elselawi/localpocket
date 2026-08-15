import 'dart:io';
import 'dart:typed_data';

import 'package:localpocket/localpocket.dart';
import 'package:sqlite3/sqlite3.dart' as sqlite;
import 'package:test/test.dart';

import '../support/helpers.dart';

void main() {
  group('SQLCipher integration', () {
    test('encrypted factory opens and file is ciphertext', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);

      final encDb = _MockSqlCipherDatabase.open(t.path,
          password: 'vault-master-key-1234');
      final pocket = await openPocket(
        path: t.path,
        database: encDb,
        encrypted: true,
      );

      final id = generateRecordId();
      await pocket.collection('widgets').put({
        'id': id,
        'name': 'Encrypted Widget',
        'qty': 42,
      });
      await pocket.close();

      // Read raw file on disk
      final file = File(t.path);
      final rawBytes = await file.readAsBytes();
      expect(rawBytes.length, greaterThan(16));

      // Standard SQLite unencrypted header is "SQLite format 3\000"
      final header = String.fromCharCodes(rawBytes.sublist(0, 16));
      expect(header, isNot(equals('SQLite format 3\x00')),
          reason:
              'Encrypted database file on disk must be ciphertext without SQLite format 3 header');
    });

    test('wrong key fails loudly', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);

      final encDbCorrect =
          _MockSqlCipherDatabase.open(t.path, password: 'correct-password');
      final pocket = await openPocket(
        path: t.path,
        database: encDbCorrect,
        encrypted: true,
      );
      final id = generateRecordId();
      await pocket
          .collection('widgets')
          .put({'id': id, 'name': 'Item', 'qty': 1});
      await pocket.close();

      // Try opening with wrong key
      expect(
        () =>
            _MockSqlCipherDatabase.open(t.path, password: 'wrong-password-999'),
        throwsA(isA<Exception>()),
      );

      // Re-opening with correct key succeeds
      final encDbReopen =
          _MockSqlCipherDatabase.open(t.path, password: 'correct-password');
      final pocketReopen = await openPocket(
        path: t.path,
        database: encDbReopen,
        encrypted: true,
      );
      addTearDown(pocketReopen.close);
      final doc = await pocketReopen.collection('widgets').get(id);
      expect(doc!['name'], 'Item');
    });

    test('web encrypted factory throws unsupported', () async {
      expect(
        () => LocalPocket.open(
          path: 'test.db',
          stores: [widgetsSchema()],
          platform: PlatformProfile.web,
          encrypted: true,
        ),
        throwsA(isA<UnsupportedError>().having(
          (e) => e.message,
          'message',
          contains('SQLCipher is unsupported on web'),
        )),
      );
    });

    test('full CRUD survives process-close and reopen with the right key',
        () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);

      // Process A: create encrypted DB, full CRUD.
      final encA = _MockSqlCipherDatabase.open(t.path,
          password: 'vault-master-key-1234');
      final pA =
          await openPocket(path: t.path, database: encA, encrypted: true);
      final id = generateRecordId();
      await pA.collection('widgets').put({
        'id': id,
        'name': 'durable',
        'qty': 7,
        'price': 1.5,
        'active': true,
        'meta': {
          'nested': [1, 2]
        },
        'tags': ['a', 'b'],
      });
      await pA.collection('widgets').patch(id, {'qty': 8});
      expect((await pA.collection('widgets').get(id))!['qty'], 8);
      await pA.close();

      // "Process" B: reopen with the correct key.
      final encB = _MockSqlCipherDatabase.open(t.path,
          password: 'vault-master-key-1234');
      final pB =
          await openPocket(path: t.path, database: encB, encrypted: true);
      final doc = await pB.collection('widgets').get(id);
      expect(doc!['name'], 'durable');
      expect(doc['qty'], 8, reason: 'patch was durable');
      expect(doc['meta'], {
        'nested': [1, 2]
      });
      expect(doc['tags'], ['a', 'b']);
      expect(await pB.collection('widgets').query().count(), 1);

      // Close "process" B so the mock re-encrypts, then verify the file on
      // disk is still ciphertext (no plaintext header).
      await pB.close();
      final raw = await File(t.path).readAsBytes();
      final header = String.fromCharCodes(raw.sublist(0, 16));
      expect(header, isNot(equals('SQLite format 3\x00')));
    });

    test('encrypted database runs FTS search across reopen', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);

      final schema = widgetsSchema(fts: const FtsSpec(['name']));
      final encA = _MockSqlCipherDatabase.open(t.path,
          password: 'vault-master-key-1234');
      final pA = await openPocket(
          path: t.path, database: encA, encrypted: true, stores: [schema]);
      final id = generateRecordId();
      await pA
          .collection('widgets')
          .put({'id': id, 'name': 'Encrypted FTS hit'});
      final hits =
          await pA.collection('widgets').search('FTS').limit(10).fetch();
      expect(hits.map((h) => h.id), contains(id));
      await pA.close();

      final encB = _MockSqlCipherDatabase.open(t.path,
          password: 'vault-master-key-1234');
      final pB = await openPocket(
          path: t.path, database: encB, encrypted: true, stores: [schema]);
      addTearDown(pB.close);
      final hitsAfter =
          await pB.collection('widgets').search('FTS').limit(10).fetch();
      expect(hitsAfter.map((h) => h.id), contains(id),
          reason: 'FTS tables survive encryption + reopen');
    });

    test('encrypted database applies additive migrations', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);

      final v1 = widgetsSchema(version: 1);
      final encA = _MockSqlCipherDatabase.open(t.path,
          password: 'vault-master-key-1234');
      final pA = await openPocket(
          path: t.path, database: encA, encrypted: true, stores: [v1]);
      final id = generateRecordId();
      await pA.collection('widgets').put({'id': id, 'name': 'before-migrate'});
      await pA.close();

      // Reopen with v2 adding a field via an additive migration.
      final v2 = widgetsSchema(
        version: 2,
        migrations: [
          StoreMigration(toVersion: 2, addedFields: [Field.text('nickname')]),
        ],
      );
      final encB = _MockSqlCipherDatabase.open(t.path,
          password: 'vault-master-key-1234');
      final pB = await openPocket(
          path: t.path, database: encB, encrypted: true, stores: [v2]);
      addTearDown(pB.close);
      await pB.collection('widgets').patch(id, {'nickname': 'nick'});
      expect((await pB.collection('widgets').get(id))!['nickname'], 'nick');
      expect(
          (await pB.collection('widgets').get(id))!['name'], 'before-migrate',
          reason: 'pre-migration data intact');
    });

    test('pragmas (WAL, foreign_keys, busy_timeout) apply on encrypted DB',
        () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final enc = _MockSqlCipherDatabase.open(t.path,
          password: 'vault-master-key-1234');
      final p = await openPocket(path: t.path, database: enc, encrypted: true);
      addTearDown(p.close);
      expect(firstInt(await p.db.rawQuery('PRAGMA foreign_keys'))!, 1);
      expect(firstInt(await p.db.rawQuery('PRAGMA busy_timeout'))!, 5000);
      // WAL may or may not be active depending on the driver; it must not
      // crash and the capability probe must succeed.
      expect(p.capabilities.walSupported, isA<bool>());
      expect(p.capabilities.hasMmap, isA<bool>());
    });

    test('encrypted: true is a marker + web guard, not an encryptor', () async {
      // The `encrypted` flag alone does NOT encrypt: with a plain (non-
      // encrypted) injected Database the flag is accepted and the DB opens
      // normally. The app must inject a REAL encrypted database (e.g. a
      // SQLCipher-backed `Database`) to get encryption at rest.
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final plain = sqlite.sqlite3.open(t.path);
      final pocket = await openPocket(
        path: t.path,
        database: DirectSqliteDatabase(plain),
        encrypted: true,
      );
      addTearDown(pocket.close);
      final id = generateRecordId();
      await pocket.collection('widgets').put({'id': id, 'name': 'plain'});
      expect((await pocket.collection('widgets').get(id))!['name'], 'plain');

      // The file is PLAINTEXT SQLite (the flag did not encrypt it).
      final raw = await File(t.path).readAsBytes();
      final header = String.fromCharCodes(raw.sublist(0, 16));
      expect(header, equals('SQLite format 3\x00'),
          reason: 'a plain injected database stays plaintext — encryption is '
              'the injected database\'s job, not the flag\'s');
    });
  });
}

/// Hermetic mock of an encrypted Database (e.g. SQLCipher wrapper)
class _MockSqlCipherDatabase extends DirectSqliteDatabase {
  final String _path;
  final String password;

  _MockSqlCipherDatabase._(
    super.rawDb, {
    required String path,
    required this.password,
  }) : _path = path;

  static Uint8List _xorBytes(Uint8List input, String password) {
    final keyBytes = Uint8List.fromList(password.codeUnits);
    final out = Uint8List(input.length);
    for (var i = 0; i < input.length; i++) {
      out[i] = input[i] ^ keyBytes[i % keyBytes.length] ^ 0xAA;
    }
    return out;
  }

  static _MockSqlCipherDatabase open(String path, {required String password}) {
    final file = File(path);
    if (file.existsSync()) {
      final ciphertext = file.readAsBytesSync();
      if (ciphertext.isNotEmpty) {
        final decrypted = _xorBytes(ciphertext, password);
        final header = String.fromCharCodes(decrypted.sublist(0, 16));
        if (header != 'SQLite format 3\x00') {
          throw StorageError(
              'file is not a database: wrong SQLCipher key or corrupted ciphertext.');
        }
        file.writeAsBytesSync(decrypted);
      }
    }
    final raw = sqlite.sqlite3.open(path);
    return _MockSqlCipherDatabase._(raw, path: path, password: password);
  }

  @override
  Future<void> close() async {
    await super.close();
    final file = File(_path);
    if (await file.exists()) {
      final plaintext = await file.readAsBytes();
      final encrypted = _xorBytes(plaintext, password);
      await file.writeAsBytes(encrypted);
    }
  }
}
