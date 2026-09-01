/// Page-only helpers to materialize `blob:` URLs from a stored hash.
///
/// `URL.createObjectURL` is window-scope work; these must run on the main
/// thread, never inside the dedicated worker.
library;

import 'dart:async';
import 'dart:js_interop';
import 'dart:typed_data';
import 'package:web/web.dart' as web;

import '../../../kernel/files/blob_store.dart';

/// Creates a page-usable `blob:` URL for [hash] by reading the bytes back from
/// [store] on the main thread.
Future<String> createObjectUrlFromStore(
  BlobStore store,
  String hash, {
  String mimeType = 'application/octet-stream',
}) async {
  final stream = await store.open(hash);
  final builder = BytesBuilder(copy: false);
  await for (final chunk in stream) {
    builder.add(chunk);
  }
  final bytes = builder.takeBytes();
  final jsBuffer = bytes.buffer.toJS;
  final blob = web.Blob([jsBuffer].toJS, web.BlobPropertyBag(type: mimeType));
  return web.URL.createObjectURL(blob);
}

/// Revokes a `blob:` URL previously created by [createObjectUrlFromStore].
void revokeObjectUrl(String url) {
  try {
    web.URL.revokeObjectURL(url);
  } catch (_) {}
}
