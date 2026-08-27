import 'database_adapter.dart';

/// Platform profile. The core never imports `dart:io`; the app tells us which
enum PlatformProfile { native, web }

/// Probing result of the SQLite engine.
class SqliteCapabilities {
  const SqliteCapabilities({
    required this.sqliteVersion,
    required this.hasStrict,
    required this.walSupported,
    required this.hasFts5,
    required this.platform,
  });

  /// SQLite engine version reported by the connection.
  final String sqliteVersion;

  /// Whether STRICT tables are supported.
  final bool hasStrict;

  /// Whether WAL mode is available for this connection.
  final bool walSupported;

  /// Whether FTS5 is compiled into SQLite.
  final bool hasFts5;

  /// Platform profile used during capability probing.
  final PlatformProfile platform;

  /// Read-heavy mmap is only meaningful on native with WAL.
  bool get hasMmap => platform == PlatformProfile.native && walSupported;

  /// Parses a SQLite version string into `(major, minor, patch)`.
  static (int, int, int) parseVersion(String v) {
    final m = RegExp(r'(\d+)\.(\d+)(?:\.(\d+))?').firstMatch(v);
    if (m == null) return (0, 0, 0);
    return (
      int.parse(m.group(1)!),
      int.parse(m.group(2)!),
      int.tryParse(m.group(3) ?? '') ?? 0,
    );
  }

  /// Returns whether SQLite version [v] is at least [major].[minor].
  static bool versionAtLeast(String v, int major, int minor) {
    final (ma, mi, _) = parseVersion(v);
    return ma > major || (ma == major && mi >= minor);
  }

  /// Capability matrix for a given version string (used by goldens). `hasFts5`
  /// is a compile-time option and is assumed present in the standard profile;
  /// the live probe checks `compile_options` instead.
  static SqliteCapabilities forVersion(
    String v, {
    PlatformProfile platform = PlatformProfile.native,
    bool hasFts5 = true,
  }) =>
      SqliteCapabilities(
        sqliteVersion: v,
        hasStrict: versionAtLeast(v, 3, 37),
        walSupported: platform == PlatformProfile.native,
        hasFts5: hasFts5,
        platform: platform,
      );

  /// Serializes this capability snapshot for diagnostics.
  Map<String, Object?> toJson() => {
        'sqlite_version': sqliteVersion,
        'has_strict': hasStrict,
        'wal_supported': walSupported,
        'has_fts5': hasFts5,
        'platform': platform.name,
      };

  /// Stable one-line serialization used by the capability-matrix golden.
  String toMatrixLine() =>
      '$sqliteVersion ${platform.name}: strict=$hasStrict wal=$walSupported '
      'mmap=$hasMmap fts5=$hasFts5';

  /// Live probe against an open connection.
  static Future<SqliteCapabilities> probe(
      Database db, PlatformProfile platform) async {
    final version = (await db.rawQuery('SELECT sqlite_version() AS v'))
        .first['v']! as String;
    final compileOptions = (await db.rawQuery('PRAGMA compile_options'))
        .map((r) => r.values.first)
        .whereType<String>()
        .toList();
    bool hasFts5 = compileOptions.any((o) => o.contains('ENABLE_FTS5'));
    if (!hasFts5) {
      // Some wasm builds omit the compile-options diagnostics entirely
      // (`PRAGMA compile_options` returns no rows) even though FTS5 is
      // compiled in. When the flag is not visible, probe FTS5 directly with a
      // throwaway virtual table so support is reported truthfully instead of
      // falsely disabled (which would reject FTS stores on web).
      try {
        await db.execute(
            'CREATE VIRTUAL TABLE lp__fts5_probe USING fts5(lp__probe)');
        await db.execute('DROP TABLE lp__fts5_probe');
        hasFts5 = true;
      } catch (_) {
        hasFts5 = false;
      }
    }
    String? journalMode;
    if (platform == PlatformProfile.native) {
      try {
        final rows = await db.rawQuery('PRAGMA journal_mode');
        if (rows.isNotEmpty) journalMode = rows.first.values.first as String?;
      } catch (_) {
        journalMode = null;
      }
    }
    return SqliteCapabilities(
      sqliteVersion: version,
      hasStrict: versionAtLeast(version, 3, 37),
      walSupported: platform == PlatformProfile.native && journalMode == 'wal',
      hasFts5: hasFts5,
      platform: platform,
    );
  }
}
