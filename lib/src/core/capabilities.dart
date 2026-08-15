import 'database_adapter.dart';

/// Platform profile. The core never imports `dart:io`; the app tells us which
/// profile to assume so capability probing can skip WAL/mmap on web.
enum PlatformProfile { native, web }

/// Probing result of the SQLite engine.
class SqliteCapabilities {
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

  /// Creates a capability snapshot.
  const SqliteCapabilities({
    required this.sqliteVersion,
    required this.hasStrict,
    required this.walSupported,
    required this.hasFts5,
    required this.platform,
  });

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
  }) {
    return SqliteCapabilities(
      sqliteVersion: v,
      hasStrict: versionAtLeast(v, 3, 37),
      walSupported: platform == PlatformProfile.native,
      hasFts5: hasFts5,
      platform: platform,
    );
  }

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
  static Future<SqliteCapabilities> probe(Database db, PlatformProfile platform) async {
    final version =
        (await db.rawQuery('SELECT sqlite_version() AS v')).first['v'] as String;
    final compileOptions =
        (await db.rawQuery('PRAGMA compile_options')).map((r) => r.values.first.toString()).toList();
    final hasFts5 = compileOptions.any((o) => o.contains('ENABLE_FTS5'));
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
