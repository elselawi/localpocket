import 'dart:typed_data';

import 'package:localpocket/localpocket.dart';

import '../file_ref.dart';

/// Native: `files.list` returns typed [FileRef] objects.
Future<List<PlaygroundFileRef>> listFilesImpl(
  LocalPocket db, {
  required String store,
  required String recordId,
  String field = 'notes',
}) async {
  final refs = await db.files.list(
    store: store,
    recordId: recordId,
    field: field,
  );
  return [
    for (final r in refs)
      PlaygroundFileRef(
        refId: r.refId,
        remoteName: r.remoteName,
        state: r.state,
        lastError: r.lastError,
      ),
  ];
}

/// Native attach: streams [bytes].
Future<String> attachBytesImpl(
  LocalPocket db, {
  required String store,
  required String recordId,
  required List<int> bytes,
  String field = 'notes',
  String name = 'note.txt',
  String? expectedSha256,
}) async {
  final ref = await db.files.attach(
    store: store,
    recordId: recordId,
    bytes: Stream.value(Uint8List.fromList(bytes)),
    field: field,
    name: name,
    expectedSize: bytes.length,
    expectedSha256: expectedSha256,
  );
  return ref.refId;
}

/// Native open: returns a byte stream.
Future<List<int>> openBytesImpl(
  LocalPocket db, {
  required String store,
  required String recordId,
  String field = 'notes',
  int index = 0,
}) async {
  final stream = await db.files.open(
    store: store,
    recordId: recordId,
    field: field,
    index: index,
  );
  final builder = BytesBuilder();
  await for (final chunk in stream) {
    builder.add(chunk);
  }
  return builder.takeBytes().toList();
}
