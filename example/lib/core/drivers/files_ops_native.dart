import 'dart:typed_data';

import 'package:localpocket/localpocket.dart';

import '../file_ref.dart';

/// `store.files` returns typed [FileRef] objects on every platform.
Future<List<PlaygroundFileRef>> listFilesImpl<S extends StoreDef<S>>(
  Files<S> files, {
  required String recordId,
  String field = 'notes',
}) async {
  final refs = await files.list(recordId: recordId, field: field);
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

/// Attaches [bytes] to a record, returning the created reference name/hash.
///
/// The playground's native demo uses a volatile in-memory blob store, so the
/// attachment explicitly opts into volatile blobs.
Future<String> attachBytesImpl<S extends StoreDef<S>>(
  Files<S> files, {
  required String recordId,
  required List<int> bytes,
  String field = 'notes',
  String name = 'note.txt',
  String? expectedSha256,
}) async {
  final ref = await files.attach(
    recordId: recordId,
    source: FileSource.bytes(bytes, name: name),
    field: field,
    allowVolatileBlobs: true,
  );
  return ref.refId;
}

/// Opens the bytes of the file at [index] for a record.
Future<List<int>> openBytesImpl<S extends StoreDef<S>>(
  Files<S> files, {
  required String recordId,
  String field = 'notes',
  int index = 0,
}) async {
  final refs = await files.list(recordId: recordId, field: field);
  final stream = await files.open(refs[index]);
  final builder = BytesBuilder();
  await for (final chunk in stream) {
    builder.add(chunk);
  }
  return builder.takeBytes().toList();
}
