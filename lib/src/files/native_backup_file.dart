/// Native (`dart:io`) hooks for the destructive-migration backup file.
///
/// Lives in the `files` layer — the designated platform-I/O home (see
/// `test/core/layering_test.dart` and `test/core/tx/tx_test.dart`) — so the
/// core (`lib/src/core/`) stays web-clean. The native database factory wires
/// these onto [DirectSqliteDatabase.backupFileExists]/[backupFileDeleter];
/// the web worker wires its own OPFS implementation instead.
library;

import 'dart:io';

/// Reports whether the backup file at [path] exists.
Future<bool> backupFileExists(String path) async => File(path).existsSync();

/// Removes the backup file at [path] if present (no-op when absent).
Future<void> deleteBackupFile(String path) async {
  final f = File(path);
  if (f.existsSync()) f.deleteSync();
}
