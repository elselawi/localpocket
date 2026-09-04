import 'database_adapter.dart';

/// Web database creation is intentionally not implemented through the native
/// sqlite3 connection factory. The browser entry point must use the
/// sqlite3_web worker transport and a public-API proxy.
Future<Database> openSqliteDatabase(String path) {
  throw UnsupportedError(
    'The web database factory requires the sqlite3_web worker entry point. '
    'Use the web facade to open LocalPocket.',
  );
}
