import 'dart:io';
import 'dart:typed_data';

import 'package:localpocket/localpocket.dart';
import 'package:sqlite3/sqlite3.dart' as sqlite;
import 'package:test/test.dart';

import '../support/fixtures/tasks_store.dart';

/// Public facade coverage for whole-database encryption: the UNIFIED
/// `nativeDatabaseFactory` + `databaseEncryption` contract on
/// [LocalPocketOptions].
///
/// NATIVE-ONLY `nativeDatabaseFactory` + `databaseEncryption` contract on
/// [LocalPocketOptions].
///
/// Native contract: LocalPocket applies the config's key (`PRAGMA key`) to
/// the engine the factory opens, verifies the engine actually HAS a cipher
/// codec (`PRAGMA cipher_version` for SQLCipher, `PRAGMA cipher` for
/// SQLite3MultipleCiphers — a plain engine silently accepts both as unknown
/// and returns no rows), and fails the open typed when the engine cannot
/// honor the config. Web rejects the whole route up front (code cannot
/// cross the worker boundary; the OPFS VFS does not support cipher engines)
/// — covered by the web open gates. Kernel-level behavior (encrypted bytes,
/// reopen durability) is additionally proven in
/// `test/kernel/cipher/sqlcipher_test.dart`.
void main() {
  group('facade whole-db encryption contract', () {
    test('databaseEncryption without a factory fails the open typed', () async {
      await expectLater(
        LocalPocket.open(LocalPocketOptions(
          path: 'no_factory_key.db',
          stores: [Tasks.store],
          databaseEncryption: const DatabaseEncryptionConfig(
              engineCipher: 'sqlcipher', key: 'p@ss'),
        )),
        throwsA(isA<ValidationException>()
            .having((e) => e.message, 'message', contains('requires'))),
      );
    });

    test('encrypted: true without a factory fails the open typed', () async {
      await expectLater(
        LocalPocket.open(LocalPocketOptions(
          path: 'no_factory_flag.db',
          stores: [Tasks.store],
          encrypted: true,
        )),
        throwsA(isA<ValidationException>().having(
            (e) => e.message, 'message', contains('nativeDatabaseFactory'))),
      );
    });

    test(
        'databaseEncryption against a PLAIN engine fails typed (the silent '
        'no-op is classed out)', () async {
      final tempDir =
          await Directory.systemTemp.createTemp('lp_facade_cipher_');
      addTearDown(() => tempDir.delete(recursive: true));
      final dbPath = '${tempDir.path}${Platform.pathSeparator}plain.db';

      await expectLater(
        LocalPocket.open(LocalPocketOptions(
          path: dbPath,
          stores: [Tasks.store],
          // A factory that opens a PLAIN (unencrypted) engine on purpose:
          // plain SQLite silently accepts `PRAGMA key`, so the unified key
          // path must probe the codec and fail typed instead of leaving
          // the database quietly plaintext.
          nativeDatabaseFactory: (p) => _PlainDatabase.open(p),
          databaseEncryption: const DatabaseEncryptionConfig(
              engineCipher: 'sqlcipher', key: 'p@ss'),
        )),
        throwsA(isA<ValidationException>()
            .having((e) => e.message, 'message', contains('cipher codec'))),
      );
    });

    test('databaseEncryption routes the key in; sealed file at close',
        () async {
      final tempDir =
          await Directory.systemTemp.createTemp('lp_facade_cipher_');
      addTearDown(() => tempDir.delete(recursive: true));
      final dbPath = '${tempDir.path}${Platform.pathSeparator}sealed.db';

      final openedPaths = <String>[];
      final db = await LocalPocket.open(LocalPocketOptions(
        path: dbPath,
        stores: [Tasks.store],
        nativeDatabaseFactory: (path) {
          openedPaths.add(path);
          return _SealedDatabase.open(path, key: 'vault-passphrase');
        },
        databaseEncryption: const DatabaseEncryptionConfig(
            engineCipher: 'sqlcipher', key: 'vault-passphrase'),
      ));
      addTearDown(db.close);

      expect(openedPaths, [dbPath],
          reason: 'the facade invokes the factory with options.path');
      final tasks = db.store(Tasks.store);
      final created =
          await tasks.put([Tasks.title.set('sealed'), Tasks.priority.set(1)]);
      expect((await tasks.get(created.id))!(Tasks.title), 'sealed');
      await db.close();

      final header =
          String.fromCharCodes(File(dbPath).readAsBytesSync().sublist(0, 16));
      expect(header, isNot(equals('SQLite format 3\x00')),
          reason: 'the whole file is sealed by the engine at close');
    });

    test('field encryption and whole-db encryption compose', () async {
      final tempDir =
          await Directory.systemTemp.createTemp('lp_facade_cipher_');
      addTearDown(() => tempDir.delete(recursive: true));
      final dbPath = '${tempDir.path}${Platform.pathSeparator}sealed.db';

      final key = Uint8List(32);
      final db = await LocalPocket.open(LocalPocketOptions(
        path: dbPath,
        stores: [Tasks.store],
        encryption: EncryptionConfig.aesGcm256(key: key),
        nativeDatabaseFactory: (p) => _SealedDatabase.open(p, key: 'vault'),
        databaseEncryption: const DatabaseEncryptionConfig(
            engineCipher: 'sqlcipher', key: 'vault'),
      ));
      addTearDown(db.close);

      final tasks = db.store(Tasks.store);
      final created = await tasks.put([Tasks.title.set('double-sealed')]);
      expect((await tasks.get(created.id))!(Tasks.title), 'double-sealed');
    });
  });
}

/// A hermetic cipher-engine mock with an encrypted-fields codec signature:
/// `PRAGMA cipher_version` returns a row (like a real SQLCipher build), and
/// `PRAGMA key` records the applied key. The whole file is XOR-sealed while
/// closed — a wrong key throws [StorageError] at open, like a real engine.
class _SealedDatabase extends DirectSqliteDatabase {
  _SealedDatabase._(super.rawDb, {required String path, required this.key})
      : _path = path;

  final String _path;
  final String? key;

  static Uint8List? _xor(Uint8List input, String key) {
    final k = Uint8List.fromList(key.codeUnits);
    final out = Uint8List(input.length);
    for (var i = 0; i < input.length; i++) {
      out[i] = input[i] ^ k[i % k.length] ^ 0x5A;
    }
    return out;
  }

  static _SealedDatabase open(String path, {required String? key}) {
    final file = File(path);
    if (file.existsSync()) {
      final sealed = file.readAsBytesSync();
      if (sealed.isNotEmpty) {
        final opened = key == null ? null : _xor(sealed, key);
        final header = key == null
            ? String.fromCharCodes(sealed.sublist(0, 16))
            : String.fromCharCodes(opened!.sublist(0, 16));
        if (header != 'SQLite format 3\x00') {
          throw StorageError(
              'file is not a database: wrong key or corrupted file.');
        }
        if (opened != null) {
          file.writeAsBytesSync(opened);
        }
      }
    }
    return _SealedDatabase._(sqlite.sqlite3.open(path), path: path, key: key);
  }

  @override
  Future<List<Map<String, Object?>>> rawQuery(String sql,
      [List<Object?> parameters = const []]) async {
    if (key != null && sql.startsWith('PRAGMA cipher_version')) {
      return [
        {'cipher_version': 'mock-cipher-1.0'}
      ];
    }
    return super.rawQuery(sql, parameters);
  }

  @override
  Future<void> close() async {
    await super.close();
    final file = File(_path);
    if (key != null && await file.exists()) {
      final plaintext = await file.readAsBytes();
      await file.writeAsBytes(_xor(plaintext, key!)!);
    }
  }
}

/// A plain engine mock: no codec signature (cipher_version/cipher return
/// nothing) and no sealing — exactly what a default `sqlite3.open` gives.
class _PlainDatabase extends DirectSqliteDatabase {
  _PlainDatabase._(super.rawDb);

  static _PlainDatabase open(String path) =>
      _PlainDatabase._(sqlite.sqlite3.open(path));

  @override
  Future<List<Map<String, Object?>>> rawQuery(String sql,
      [List<Object?> parameters = const []]) async {
    if (sql.startsWith('PRAGMA cipher_version') ||
        sql.startsWith('PRAGMA cipher')) {
      return const [];
    }
    return super.rawQuery(sql, parameters);
  }
}
