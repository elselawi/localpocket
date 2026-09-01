import 'package:localpocket/src/internal/raw_surface.dart';

import '../file_ref.dart';

/// Web: `files.list` returns raw maps keyed like [FileRef]. The facade's
/// `LocalPocket.files` carries `attach(byteArray:)` and `open()` returning
/// bytes directly. We use a `dynamic` receive so this file compiles on native
/// targets too and resolves to the web facade at runtime.
Future<List<PlaygroundFileRef>> listFilesImpl(
  dynamic db, {
  required String store,
  required String recordId,
  String field = 'notes',
}) async {
  final dynamic refs = await db.files.list(
    store: store,
    recordId: recordId,
    field: field,
  );
  return [
    for (final r in refs)
      PlaygroundFileRef(
        refId: (r['refId'] as String?) ?? '',
        remoteName: r['remoteName'] as String?,
        state: (r['state'] as String?) ?? 'unknown',
        lastError: r['lastError'] as String?,
      ),
  ];
}

/// Web attach: provides bytes as a byteArray.
Future<String> attachBytesImpl(
  dynamic db, {
  required String store,
  required String recordId,
  required List<int> bytes,
  String field = 'notes',
  String name = 'note.txt',
  String? expectedSha256,
}) async {
  final dynamic ref = await db.files.attach(
    store: store,
    recordId: recordId,
    byteArray: bytes,
    field: field,
    name: name,
    expectedSize: bytes.length,
    expectedSha256: expectedSha256,
  );
  return (ref['refId'] as String?) ?? '';
}

/// Web open: returns bytes directly.
Future<List<int>> openBytesImpl(
  dynamic db, {
  required String store,
  required String recordId,
  String field = 'notes',
  int index = 0,
}) async {
  final dynamic bytes = await db.files.open(
    store: store,
    recordId: recordId,
    field: field,
    index: index,
  );
  return bytes.toList();
}
