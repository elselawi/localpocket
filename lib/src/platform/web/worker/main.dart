import 'package:sqlite3_web/sqlite3_web.dart';

import 'controller.dart';

/// Entrypoint for the precompiled LocalPocket database worker (spawned by
/// `sqlite3_web` as a dedicated worker). Hosts the full engine (CRUD,
/// migrations, FTS, transactions, watches) and communicates with the
/// main-thread facade strictly over public-API envelopes.
void main() {
  WebSqlite.workerEntrypoint(
    controller: const LocalPocketDatabaseController(),
  );
}
