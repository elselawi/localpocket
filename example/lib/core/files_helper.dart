import 'package:localpocket/localpocket.dart';

import 'file_ref.dart';
import 'drivers/files_ops_native.dart'
    if (dart.library.js_interop) 'drivers/files_ops_web.dart';

/// Lists the [PlaygroundFileRef]s attached to a record through [files].
Future<List<PlaygroundFileRef>> listFiles<S extends StoreDef<S>>(
  Files<S> files, {
  required String recordId,
  String field = 'notes',
}) => listFilesImpl<S>(files, recordId: recordId, field: field);

/// Attaches [bytes] to a record, returning the created reference name/hash.
Future<String> attachBytes<S extends StoreDef<S>>(
  Files<S> files, {
  required String recordId,
  required List<int> bytes,
  String field = 'notes',
  String name = 'note.txt',
  String? expectedSha256,
}) => attachBytesImpl<S>(
  files,
  recordId: recordId,
  bytes: bytes,
  field: field,
  name: name,
  expectedSha256: expectedSha256,
);

/// Reads the bytes of the file at [index] for a record.
Future<List<int>> openBytes<S extends StoreDef<S>>(
  Files<S> files, {
  required String recordId,
  String field = 'notes',
  int index = 0,
}) => openBytesImpl<S>(
  files,
  recordId: recordId,
  field: field,
  index: index,
);
