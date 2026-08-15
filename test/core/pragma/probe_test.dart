import 'package:localpocket/localpocket.dart';
import 'package:sqlite3/common.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';

/// Capability probe and pragma tests.
void main() {
  group('capability probe & pragmas', () {
    test('capability matrix for sqlite 3.37 3.39 3.44', () async {
      final golden = await readGolden('test/goldens/capability_matrix.golden');

      final lines = <String>[
        for (final v in ['3.35.0', '3.37.0', '3.39.4', '3.44.2'])
          SqliteCapabilities.forVersion(v).toMatrixLine(),
        SqliteCapabilities.forVersion('3.35.0', platform: PlatformProfile.web)
            .toMatrixLine(),
        SqliteCapabilities.forVersion('3.44.2', platform: PlatformProfile.web)
            .toMatrixLine(),
      ];
      expect(lines.join('\n').trim(), golden.trim());
    });

    test('web profile skips wal and mmap', () async {
      final nativeT = await tempDbPath();
      addTearDown(nativeT.cleanup);
      final webT = await tempDbPath();
      addTearDown(webT.cleanup);

      final native = await openPocket(path: nativeT.path);
      addTearDown(native.close);
      final web =
          await openPocket(path: webT.path, platform: PlatformProfile.web);
      addTearDown(web.close);

      // Native: WAL + mmap applied.
      expect(native.capabilities.walSupported, isTrue);
      expect(native.capabilities.hasMmap, isTrue);
      final nativeJournal = await native.db.rawQuery('PRAGMA journal_mode');
      expect(nativeJournal.first.values.first.toString(), 'wal');
      final nativeMmap =
          firstInt(await native.db.rawQuery('PRAGMA mmap_size'))!;
      expect(nativeMmap, 67108864);

      // Web: WAL + mmap never applied.
      expect(web.capabilities.walSupported, isFalse);
      expect(web.capabilities.hasMmap, isFalse);
      final webMmap = firstInt(await web.db.rawQuery('PRAGMA mmap_size'))!;
      expect(webMmap, 0, reason: 'web profile never sets mmap_size');
    });

    test('busy timeout and optimize applied', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final pocket = await openPocket(path: t.path);

      final busy = firstInt(await pocket.db.rawQuery('PRAGMA busy_timeout'))!;
      expect(busy, 5000);
      final fk = firstInt(await pocket.db.rawQuery('PRAGMA foreign_keys'))!;
      expect(fk, 1);

      expect(pocket.optimizeRanOnClose, isFalse);
      await pocket.close();
      expect(pocket.optimizeRanOnClose, isTrue,
          reason: 'PRAGMA optimize runs on close');
    });

    test('downgrade guard refuses newer schema', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final v2 =
          await openPocket(path: t.path, stores: [widgetsSchema(version: 2)]);
      await v2.close();

      await expectLater(
          openPocket(path: t.path, stores: [widgetsSchema(version: 1)]),
          throwsA(isA<SchemaTooNewError>()));
    });
  });

  group('SqliteCapabilities.parseVersion', () {
    test('standard version strings', () {
      expect(SqliteCapabilities.parseVersion('3.44.2'), (3, 44, 2));
      expect(SqliteCapabilities.parseVersion('3.37.0'), (3, 37, 0));
      expect(SqliteCapabilities.parseVersion('3.0.0'), (3, 0, 0));
      expect(SqliteCapabilities.parseVersion('1.0.1'), (1, 0, 1));
    });

    test('missing patch component defaults to 0', () {
      expect(SqliteCapabilities.parseVersion('3.44'), (3, 44, 0));
      expect(SqliteCapabilities.parseVersion('3.7'), (3, 7, 0));
    });

    test('prefixes and suffixes are tolerated', () {
      expect(
          SqliteCapabilities.parseVersion('SQLite 3.44.2 2023-11-01 12:34:56'),
          (3, 44, 2));
      expect(SqliteCapabilities.parseVersion('3.44.2-beta1'), (3, 44, 2));
      expect(SqliteCapabilities.parseVersion('3.5.6b1'), (3, 5, 6));
      expect(SqliteCapabilities.parseVersion('v3.5'), (3, 5, 0));
      expect(SqliteCapabilities.parseVersion('3.44.2.1'), (3, 44, 2),
          reason: 'extra version suffix is ignored');
      expect(
          SqliteCapabilities.parseVersion('version 3.8.1 (custom)'), (3, 8, 1));
    });

    test('malformed and empty strings yield (0,0,0)', () {
      expect(SqliteCapabilities.parseVersion(''), (0, 0, 0));
      expect(SqliteCapabilities.parseVersion('abc'), (0, 0, 0));
      expect(SqliteCapabilities.parseVersion('3'), (0, 0, 0));
      expect(SqliteCapabilities.parseVersion('3.'), (0, 0, 0));
      expect(SqliteCapabilities.parseVersion('.44'), (0, 0, 0));
      expect(SqliteCapabilities.parseVersion('   '), (0, 0, 0));
      expect(SqliteCapabilities.parseVersion('three.four.four'), (0, 0, 0));
    });

    test('large version components are parsed without overflow', () {
      expect(
          SqliteCapabilities.parseVersion('9999999999.8888888888.7777777777'),
          (9999999999, 8888888888, 7777777777));
      expect(SqliteCapabilities.parseVersion('99999.99999'), (99999, 99999, 0));
    });
  });

  group('SqliteCapabilities.versionAtLeast', () {
    test('equal and boundary versions', () {
      expect(SqliteCapabilities.versionAtLeast('3.44.2', 3, 44), isTrue);
      expect(SqliteCapabilities.versionAtLeast('3.44', 3, 44), isTrue);
      expect(SqliteCapabilities.versionAtLeast('3.37.0', 3, 37), isTrue);
      expect(SqliteCapabilities.versionAtLeast('4.0', 3, 44), isTrue,
          reason: 'greater major version wins');
      expect(SqliteCapabilities.versionAtLeast('3.44.2', 4, 0), isFalse);
      expect(SqliteCapabilities.versionAtLeast('3.43.9', 3, 44), isFalse);
      expect(SqliteCapabilities.versionAtLeast('3.36', 3, 37), isFalse);
      expect(SqliteCapabilities.versionAtLeast('3.44', 3, 45), isFalse);
    });

    test('patch level does not influence the minor comparison', () {
      expect(SqliteCapabilities.versionAtLeast('3.44.0', 3, 44), isTrue);
      expect(SqliteCapabilities.versionAtLeast('3.44.99', 3, 44), isTrue);
      expect(SqliteCapabilities.versionAtLeast('3.43.99', 3, 44), isFalse);
    });

    test('malformed versions are treated as 0.0', () {
      expect(SqliteCapabilities.versionAtLeast('', 3, 37), isFalse);
      expect(SqliteCapabilities.versionAtLeast('garbage', 3, 37), isFalse);
      expect(SqliteCapabilities.versionAtLeast('1', 1, 0), isFalse);
    });
  });

  group('SqliteCapabilities.toJson and hasMmap', () {
    test('toJson exposes every field', () {
      final caps = SqliteCapabilities(
        sqliteVersion: '3.44.2',
        hasStrict: true,
        walSupported: true,
        hasFts5: true,
        platform: PlatformProfile.native,
      );
      expect(caps.toJson(), {
        'sqlite_version': '3.44.2',
        'has_strict': true,
        'wal_supported': true,
        'has_fts5': true,
        'platform': 'native',
      });
    });

    test('toJson web platform name', () {
      final caps = SqliteCapabilities(
        sqliteVersion: '3.35.0',
        hasStrict: false,
        walSupported: false,
        hasFts5: true,
        platform: PlatformProfile.web,
      );
      expect(caps.toJson()['platform'], 'web');
    });

    test('hasMmap requires native platform AND WAL', () {
      SqliteCapabilities caps({
        required PlatformProfile platform,
        required bool wal,
      }) =>
          SqliteCapabilities(
            sqliteVersion: '3.44.2',
            hasStrict: true,
            walSupported: wal,
            hasFts5: true,
            platform: platform,
          );

      expect(caps(platform: PlatformProfile.native, wal: true).hasMmap, isTrue);
      expect(
          caps(platform: PlatformProfile.native, wal: false).hasMmap, isFalse);
      expect(caps(platform: PlatformProfile.web, wal: true).hasMmap, isFalse);
      expect(caps(platform: PlatformProfile.web, wal: false).hasMmap, isFalse);
    });
  });

  group('SqliteCapabilities.probe', () {
    test('native probe with FTS5 and WAL', () async {
      final caps = await SqliteCapabilities.probe(
        _FakeProbeDatabase(
          version: '3.44.2',
          compileOptions: ['COMPILER=gcc', 'ENABLE_FTS5', 'THREADSAFE=1'],
          journalMode: 'wal',
        ),
        PlatformProfile.native,
      );
      expect(caps.sqliteVersion, '3.44.2');
      expect(caps.hasStrict, isTrue);
      expect(caps.hasFts5, isTrue);
      expect(caps.walSupported, isTrue);
      expect(caps.hasMmap, isTrue);
    });

    test('native probe without FTS5 compile option', () async {
      final caps = await SqliteCapabilities.probe(
        _FakeProbeDatabase(
          version: '3.44.2',
          compileOptions: ['COMPILER=gcc', 'THREADSAFE=1'],
          journalMode: 'wal',
        ),
        PlatformProfile.native,
      );
      expect(caps.hasFts5, isFalse);
      expect(caps.walSupported, isTrue);
    });

    test('native probe with empty compile options', () async {
      final caps = await SqliteCapabilities.probe(
        _FakeProbeDatabase(
          version: '3.37.0',
          compileOptions: const [],
          journalMode: 'wal',
        ),
        PlatformProfile.native,
      );
      expect(caps.hasFts5, isFalse);
      expect(caps.hasStrict, isTrue);
    });

    test('journal_mode unavailable degrades WAL support', () async {
      final caps = await SqliteCapabilities.probe(
        _FakeProbeDatabase(
          version: '3.44.2',
          compileOptions: ['ENABLE_FTS5'],
          journalMode: null, // rawQuery throws
        ),
        PlatformProfile.native,
      );
      expect(caps.walSupported, isFalse);
      expect(caps.hasMmap, isFalse);
      expect(caps.hasFts5, isTrue);
    });

    test('non-wal journal mode means no WAL/mmap', () async {
      final caps = await SqliteCapabilities.probe(
        _FakeProbeDatabase(
          version: '3.44.2',
          compileOptions: ['ENABLE_FTS5'],
          journalMode: 'delete',
        ),
        PlatformProfile.native,
      );
      expect(caps.walSupported, isFalse);
      expect(caps.hasMmap, isFalse);
    });

    test('journal_mode returns a non-string value', () async {
      final caps = await SqliteCapabilities.probe(
        _FakeProbeDatabase(
          version: '3.44.2',
          compileOptions: ['ENABLE_FTS5'],
          journalMode: 'not-a-string', // simulate int result
        ),
        PlatformProfile.native,
      );
      expect(caps.walSupported, isFalse);
    });

    test('web probe never queries journal_mode and never enables WAL',
        () async {
      final db = _FakeProbeDatabase(
        version: '3.44.2',
        compileOptions: ['ENABLE_FTS5'],
        journalMode: 'wal',
      );
      final caps = await SqliteCapabilities.probe(db, PlatformProfile.web);
      expect(caps.walSupported, isFalse);
      expect(caps.hasMmap, isFalse);
      expect(caps.hasFts5, isTrue);
      expect(caps.hasStrict, isTrue);
      expect(db.journalModeQueried, isFalse,
          reason: 'web profile must not run PRAGMA journal_mode');
    });
  });
}

/// A configurable fake [Database] whose `rawQuery` answers exactly the
/// statements `SqliteCapabilities.probe` issues.
class _FakeProbeDatabase implements Database {
  final String version;
  final List<String> compileOptions;
  final String? journalMode;
  bool journalModeQueried = false;

  _FakeProbeDatabase({
    required this.version,
    required this.compileOptions,
    required this.journalMode,
  });

  @override
  Future<List<Map<String, Object?>>> rawQuery(String sql,
      [List<Object?> parameters = const []]) async {
    if (sql.startsWith('SELECT sqlite_version')) {
      return [
        {'v': version}
      ];
    }
    if (sql.startsWith('PRAGMA compile_options')) {
      return [
        for (final o in compileOptions) {'compile_options': o}
      ];
    }
    if (sql.startsWith('PRAGMA journal_mode')) {
      journalModeQueried = true;
      if (journalMode == null) throw Exception('journal_mode unavailable');
      return [
        {'journal_mode': journalMode}
      ];
    }
    throw UnimplementedError('unexpected probe SQL: $sql');
  }

  @override
  bool get isOpen => true;

  @override
  Future<void> close() async {}

  @override
  Future<int> delete(String table, {String? where, List<Object?>? whereArgs}) =>
      throw UnimplementedError();

  @override
  Future<void> execute(String sql, [List<Object?> parameters = const []]) =>
      throw UnimplementedError();

  @override
  void executeSync(String sql, [List<Object?> parameters = const []]) =>
      throw UnimplementedError();

  @override
  CommonPreparedStatement getPreparedStatement(String sql) =>
      throw UnimplementedError();

  @override
  Future<int> insert(String table, Map<String, Object?> values,
          {String? nullColumnHack, ConflictAlgorithm? conflictAlgorithm}) =>
      throw UnimplementedError();

  @override
  CommonPreparedStatement prepare(String sql) => throw UnimplementedError();

  @override
  Future<List<Map<String, Object?>>> query(
    String table, {
    bool? distinct,
    List<String>? columns,
    String? where,
    List<Object?>? whereArgs,
    String? groupBy,
    String? having,
    String? orderBy,
    int? limit,
    int? offset,
  }) =>
      throw UnimplementedError();

  @override
  List<Map<String, Object?>> selectSync(String sql,
          [List<Object?> parameters = const []]) =>
      throw UnimplementedError();

  @override
  Future<T> transaction<T>(Future<T> Function(DatabaseExecutor txn) action,
          {bool? exclusive}) =>
      throw UnimplementedError();

  @override
  Future<int> update(String table, Map<String, Object?> values,
          {String? where,
          List<Object?>? whereArgs,
          ConflictAlgorithm? conflictAlgorithm}) =>
      throw UnimplementedError();
}
