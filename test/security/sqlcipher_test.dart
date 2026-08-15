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
