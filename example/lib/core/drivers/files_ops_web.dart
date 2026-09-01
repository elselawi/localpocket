import 'dart:typed_data';

import 'package:localpocket/localpocket.dart';

import '../file_ref.dart';

/// Web files driver. The destination [Files] surface is platform-neutral: it
/// rides the shared contract runtime over the worker, so this is identical to
/// the native driver.
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
  );
  return ref.refId;
}

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
