import 'dart:async';
import 'dart:convert';
import 'dart:js_interop';
import 'dart:js_interop_unsafe';

import 'package:localpocket/src/platform/web/page/object_urls.dart';
import 'package:localpocket/src/platform/web/worker/blob_store.dart';

Future<void> main() async {
  void report(String status, [String? detail]) {
    globalContext.setProperty('__blob_smoke'.toJS, status.toJS);
    if (detail != null) {
      globalContext.setProperty('__blob_smoke_detail'.toJS, detail.toJS);
    }
  }

  try {
    final blobStore = WebBlobStore();

    // 1. Put raw attachment bytes
    final sampleBytes =
        utf8.encode('Image attachment content from web blob store');
    final hash = await blobStore.put(
      Stream.value(sampleBytes),
      expectedSize: sampleBytes.length,
    );

    // 2. Check exists and size
    final exists = await blobStore.exists(hash);
    if (!exists) throw StateError('Blob was not stored');

    final size = await blobStore.size(hash);
    if (size != sampleBytes.length) {
      throw StateError('Expected size ${sampleBytes.length}, got $size');
    }

    // 3. Read back bytes
    final stream = await blobStore.open(hash);
    final readBytes = await stream.fold<List<int>>([], (p, e) => p..addAll(e));
    if (utf8.decode(readBytes) !=
        'Image attachment content from web blob store') {
      throw StateError('Read bytes did not match original');
    }

    // 4. Create Object URL on the main thread
    final objectUrl =
        await createObjectUrlFromStore(blobStore, hash, mimeType: 'text/plain');
    if (!objectUrl.startsWith('blob:')) {
      throw StateError('Expected blob: URL, got $objectUrl');
    }

    // Revoke URL
    revokeObjectUrl(objectUrl);

    // 5. Delete blob
    await blobStore.delete(hash);
    final existsAfterDelete = await blobStore.exists(hash);
    if (existsAfterDelete) throw StateError('Blob still exists after delete');

    report('passed',
        'WebBlobStore put, open, Object URL, and delete passed in browser.');
  } catch (e, stack) {
    report('failed', '$e\n$stack');
  }
}
