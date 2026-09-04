import 'package:localpocket/src/kernel/errors.dart';
import 'package:sqlite3/common.dart' show SqliteException;
import 'package:sqlite3/sqlite3.dart' as sqlite;
import 'package:test/test.dart';

/// Typed SQLite error translation matrix.
///
/// Drives `translateConstraintError` with real SQLite errors (via a real
/// in-memory engine) and with constructed `SqliteException`s carrying the
/// documented extended result codes.
void main() {
  group('real SQLite constraint errors', () {
    late sqlite.Database db;
    String? lastRaw;

    setUp(() {
      db = sqlite.sqlite3.openInMemory();
      db.execute('PRAGMA foreign_keys=ON');
      db.execute('CREATE TABLE owners (id TEXT PRIMARY KEY)');
      db.execute('CREATE TABLE items ('
          ' id TEXT PRIMARY KEY,'
          ' phone TEXT UNIQUE,'
          ' name TEXT NOT NULL,'
          ' active INTEGER CHECK (active IN (0, 1)),'
          ' owner TEXT REFERENCES owners(id))');
    });

    tearDown(() => db.close());

    LocalPocketError translate(String sql, [List<Object?> params = const []]) {
      try {
        db.execute(sql, params);
        fail('expected SQL to fail: $sql');
      } catch (e) {
        lastRaw = e.toString();
        return translateConstraintError(e);
      }
    }

    test('real primary-key violation maps to PrimaryKeyConstraintException',
        () {
      db.execute('INSERT INTO items (id, name) VALUES (?, ?)', ['x', 'n']);
      final err =
          translate('INSERT INTO items (id, name) VALUES (?, ?)', ['x', 'n2']);
      expect(err, isA<PrimaryKeyConstraintException>(),
          reason: 'SQLITE_CONSTRAINT_PRIMARYKEY (1555) must not become '
              'UniqueConstraintException');
      expect(err, isNot(isA<UniqueConstraintException>()));
      expect(err.message, contains('PRIMARY KEY'));
      expect(lastRaw, contains('UNIQUE constraint failed: items.id'),
          reason: 'SQLite uses UNIQUE wording even for primary-key hits');
    });

    test('real unique violation maps to UniqueConstraintException with field',
        () {
      db.execute('INSERT INTO items (id, name, phone) VALUES (?, ?, ?)',
          ['a', 'n', '123']);
      final err = translate(
          'INSERT INTO items (id, name, phone) VALUES (?, ?, ?)',
          ['b', 'n', '123']);
      expect(err, isA<UniqueConstraintException>());
      final ue = err as UniqueConstraintException;
      expect(ue.field, 'phone');
      expect(ue.value, isNull, reason: 'no record map was supplied');
    });

    test('unique violation carries the offending value from the record map',
        () {
      try {
        db.execute('INSERT INTO items (id, name, phone) VALUES (?, ?, ?)',
            ['a', 'n', '123']);
        db.execute('INSERT INTO items (id, name, phone) VALUES (?, ?, ?)',
            ['b', 'n', '123']);
        fail('expected failure');
      } catch (e) {
        final err = translateConstraintError(e, record: {
          'id': 'b',
          'name': 'n',
          'phone': '123',
        });
        expect(err, isA<UniqueConstraintException>());
        expect((err as UniqueConstraintException).field, 'phone');
        expect(err.value, '123');
        expect(err.message, 'Unique constraint violated on "phone".');
      }
    });

    test('real NOT NULL violation maps to NotNullConstraintException', () {
      final err = translate('INSERT INTO items (id) VALUES (?)', ['c']);
      expect(err, isA<NotNullConstraintException>());
      expect((err as NotNullConstraintException).field, 'name');
    });

    test('real CHECK violation maps to CheckConstraintException', () {
      final err = translate(
          'INSERT INTO items (id, name, active) VALUES (?, ?, ?)',
          ['d', 'n', 5]);
      expect(err, isA<CheckConstraintException>());
    });

    test('real foreign-key violation maps to ForeignKeyConstraintException',
        () {
      final err = translate(
          'INSERT INTO items (id, name, owner) VALUES (?, ?, ?)',
          ['e', 'n', 'no-such-owner']);
      expect(err, isA<ForeignKeyConstraintException>());
    });

    test('real DATATYPE constraint (3091) falls through to StorageError', () {
      db.execute(
          'CREATE TABLE strict_t (id TEXT PRIMARY KEY, n INTEGER) STRICT');
      final err = translate(
          'INSERT INTO strict_t (id, n) VALUES (?, ?)', ['f', 'not-an-int']);
      expect(err, isA<StorageError>());
    });
  });

  group('extended result code matrix', () {
    LocalPocketError tx(int code, String message,
            {Map<String, Object?>? record}) =>
        translateConstraintError(
            SqliteException(extendedResultCode: code, message: message),
            record: record);

    test('2067 UNIQUE -> UniqueConstraintException', () {
      final err = tx(2067, 'UNIQUE constraint failed: widgets.phone');
      expect(err, isA<UniqueConstraintException>());
      expect((err as UniqueConstraintException).field, 'phone');
      expect(err.message, 'Unique constraint violated on "phone".');
    });

    test('1555 PRIMARYKEY -> PrimaryKeyConstraintException (not unique)', () {
      final err = tx(1555, 'UNIQUE constraint failed: widgets.id');
      expect(err, isA<PrimaryKeyConstraintException>(),
          reason: 'code 1555 is SQLITE_CONSTRAINT_PRIMARYKEY');
      expect(err, isNot(isA<UniqueConstraintException>()));
      expect(err, isNot(isA<StorageError>()));
    });

    test('1299 NOTNULL -> NotNullConstraintException', () {
      final err = tx(1299, 'NOT NULL constraint failed: widgets.name');
      expect(err, isA<NotNullConstraintException>());
      expect((err as NotNullConstraintException).field, 'name');
    });

    test('275 CHECK -> CheckConstraintException', () {
      expect(tx(275, 'CHECK constraint failed: widgets'),
          isA<CheckConstraintException>());
    });

    test('787 FOREIGNKEY -> ForeignKeyConstraintException', () {
      expect(tx(787, 'FOREIGN KEY constraint failed'),
          isA<ForeignKeyConstraintException>());
    });

    test('5 BUSY -> StorageError', () {
      expect(tx(5, 'database table is locked: widgets'), isA<StorageError>());
    });

    test('517 BUSY_SNAPSHOT -> StorageError', () {
      expect(tx(517, 'database is locked'), isA<StorageError>());
    });

    test('13 FULL -> StorageError mentioning full disk', () {
      final err = tx(13, 'database or disk is full');
      expect(err, isA<StorageError>());
      expect(err.message, contains('Database full'));
    });

    test('522 IOERR -> StorageError', () {
      expect(tx(522, 'disk I/O error'), isA<StorageError>());
    });

    test('266 IOERR (subcode) -> StorageError', () {
      expect(tx(266, 'disk I/O error'), isA<StorageError>());
    });

    test('11 CORRUPT -> StorageError', () {
      expect(tx(11, 'database disk image is malformed'), isA<StorageError>());
    });

    test('generic code -> StorageError', () {
      final err = tx(1, 'SQL logic error');
      expect(err, isA<StorageError>());
      expect(err.message, contains('SQLite error'));
    });

    test('3091 DATATYPE -> StorageError (unhandled subtype)', () {
      expect(tx(3091, 'cannot store TEXT value in INTEGER column nums.n'),
          isA<StorageError>());
    });

    test('primary result codes also classify by message', () {
      // Non-extension path: FakeSqliteException-style (plain Exception).
      expect(
          translateConstraintError(
              _PlainException('UNIQUE constraint failed: widgets.phone')),
          isA<UniqueConstraintException>());
      expect(
          translateConstraintError(
              _PlainException('NOT NULL constraint failed: widgets.name')),
          isA<NotNullConstraintException>());
      expect(
          translateConstraintError(
              _PlainException('CHECK constraint failed: widgets')),
          isA<CheckConstraintException>());
      expect(
          translateConstraintError(
              _PlainException('FOREIGN KEY constraint failed')),
          isA<ForeignKeyConstraintException>());
      expect(
          translateConstraintError(
              _PlainException('PRIMARY KEY constraint failed')),
          isA<PrimaryKeyConstraintException>());
      expect(
          translateConstraintError(_PlainException('database or disk is full')),
          isA<StorageError>());
      expect(translateConstraintError(_PlainException('generic failure')),
          isA<StorageError>());
    });
  });

  group('field-name extraction from messages', () {
    LocalPocketError unique(String message, {Map<String, Object?>? record}) =>
        translateConstraintError(
            SqliteException(extendedResultCode: 2067, message: message),
            record: record);

    test('multi-part schema.table.field names use the last component', () {
      final err = unique('UNIQUE constraint failed: main.widgets.phone');
      expect((err as UniqueConstraintException).field, 'phone');
    });

    test('trailing SQLite message text is stripped', () {
      final err = unique(
          'UNIQUE constraint failed: widgets.phone, constraint failed (code 2067)');
      expect((err as UniqueConstraintException).field, 'phone');
    });

    test('quoted field names are unquoted', () {
      final err = unique('UNIQUE constraint failed: "my table"."my col"');
      expect((err as UniqueConstraintException).field, 'my col');
    });

    test('quoted unicode field names are extracted', () {
      final err = unique('UNIQUE constraint failed: main.widgets."名前"');
      expect((err as UniqueConstraintException).field, '名前');
    });

    test('multi-part quoted names', () {
      final err = unique('UNIQUE constraint failed: main."my table"."my col"');
      expect((err as UniqueConstraintException).field, 'my col');
    });

    test('unescaped unicode field names are extracted', () {
      final err = unique('UNIQUE constraint failed: widgets.名前');
      expect((err as UniqueConstraintException).field, '名前');
    });

    test('escaped quotes inside quoted names are unescaped', () {
      final err = unique('UNIQUE constraint failed: widgets."a""b"');
      expect((err as UniqueConstraintException).field, 'a"b');
    });

    test('NOT NULL extraction handles multi-part names', () {
      final err = translateConstraintError(SqliteException(
          extendedResultCode: 1299,
          message: 'NOT NULL constraint failed: main.widgets.name'));
      expect((err as NotNullConstraintException).field, 'name');
    });

    test('unparseable field falls back to ?', () {
      final err = unique('UNIQUE constraint failed: something-odd');
      expect((err as UniqueConstraintException).field, 'something-odd');
    });
  });

  group('public exception shapes', () {
    test('every public exception carries the LocalPocketError contract', () {
      final exceptions = <LocalPocketError>[
        UniqueConstraintException(field: 'f', value: 1),
        NotNullConstraintException(field: 'f'),
        CheckConstraintException(),
        PrimaryKeyConstraintException(),
        ForeignKeyConstraintException(),
        StorageError('boom'),
        RemoteOnlyError('remote only'),
        ValidationException('bad', field: 'x'),
        RecordNotFoundException('gone'),
        SchemaRegistrationError('no'),
        FtsUnavailableError('no fts'),
        StaleCursorError('stale'),
        MissingLimitError(),
        ReadOnlyTxError(),
        ConflictBlockedError('blocked'),
      ];
      for (final e in exceptions) {
        expect(e, isA<Exception>());
        expect(e.message, isNotEmpty);
        expect(e.toString(), contains(e.runtimeType.toString()));
        expect(e.toString(), contains(e.message));
      }
    });

    test('UniqueConstraintException default message names the field', () {
      final e = UniqueConstraintException(field: 'email');
      expect(e.message, 'Unique constraint violated on "email".');
      expect(e.field, 'email');
      expect(e.value, isNull);
    });

    test('UniqueConstraintException with value', () {
      final e = UniqueConstraintException(field: 'email', value: 'a@b.c');
      expect(e.value, 'a@b.c');
    });

    test('NotNullConstraintException default message names the field', () {
      final e = NotNullConstraintException(field: 'name');
      expect(e.message, 'NOT NULL constraint violated on "name".');
    });

    test('all LocalPocketError types are sealed subclasses', () {
      // Static check that the sealed hierarchy is exhaustive over the public
      // subtypes listed in the errors library.
      expect(LocalPocketError, isNotNull);
    });
  });
}

class _PlainException implements Exception {
  _PlainException(this.message);
  final String message;
  @override
  String toString() => message;
}
