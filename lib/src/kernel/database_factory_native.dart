import 'package:sqlite3/sqlite3.dart' as sqlite;

import '../files/native_backup_file.dart';
import 'database_adapter.dart';

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
