import 'package:localpocket/localpocket.dart';

import 'file_ref.dart';
import 'drivers/files_ops_native.dart'
    if (dart.library.js_interop) 'drivers/files_ops_web.dart';

/// Normalizes [FileRef] (native) vs raw map (web) into a shared list.
Future<List<PlaygroundFileRef>> listFiles(
  LocalPocket db, {
  required String store,
  required String recordId,
  String field = 'notes',
}) => listFilesImpl(db, store: store, recordId: recordId, field: field);

/// Attaches [bytes] to a record, returning the created reference name/hash.
Future<String> attachBytes(
  LocalPocket db, {
  required String store,
  required String recordId,
  required List<int> bytes,
  String field = 'notes',
  String name = 'note.txt',
  String? expectedSha256,
}) => attachBytesImpl(
  db,
  store: store,
  recordId: recordId,
  bytes: bytes,
  field: field,
  name: name,
  expectedSha256: expectedSha256,
);

/// Reads the bytes of the file at [index] for a record.
Future<List<int>> openBytes(
  LocalPocket db, {
  required String store,
  required String recordId,
  String field = 'notes',
  int index = 0,
}) => openBytesImpl(
  db,
  store: store,
  recordId: recordId,
  field: field,
  index: index,
);
