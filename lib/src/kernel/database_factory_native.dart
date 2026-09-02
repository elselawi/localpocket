import 'package:sqlite3/sqlite3.dart' as sqlite;

import '../platform/native/backup_store.dart';
import 'database_adapter.dart';

/// Opens the platform (native FFI) SQLite database at [path] and wires the
/// platform file hooks into the adapter.
Future<Database> openPlatformDatabase(String path) async {
  final raw = path == ':memory:'
      ? sqlite.sqlite3.openInMemory()
      : sqlite.sqlite3.open(path);
  final db = DirectSqliteDatabase(raw);
  // Wire the destructive-migration backup file hooks. dart:io lives in the
  // files layer (`native_backup_file.dart`), keeping core web-clean.
  db.backupFileExists = backupFileExists;
  db.backupFileDeleter = deleteBackupFile;
  return db;
}
