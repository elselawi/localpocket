import 'package:sqlite3/sqlite3.dart' as sqlite;

import 'database_adapter.dart';

Future<Database> openPlatformDatabase(String path) async {
  final raw = path == ':memory:'
      ? sqlite.sqlite3.openInMemory()
      : sqlite.sqlite3.open(path);
  return DirectSqliteDatabase(raw);
}
