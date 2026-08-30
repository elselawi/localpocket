import 'dart:async';
import 'dart:convert';
import 'dart:js_interop';
import 'dart:js_interop_unsafe';

import 'package:localpocket/src/core/schema.dart';
import 'package:localpocket/src/files/web_blob_object_url.dart';
import 'package:localpocket/src/files/web_blob_store.dart';
import 'package:localpocket/src/web/facade.dart';

Future<void> main() async {
  void report(String status, [String? detail]) {
    globalContext.setProperty('__file_lifecycle_smoke'.toJS, status.toJS);
    if (detail != null) {
      globalContext.setProperty(
          '__file_lifecycle_smoke_detail'.toJS, detail.toJS);
    }
  }

  Future<void> expectError(Future<void> Function() action) async {
    Object? error;
    try {
      await action();
    } catch (e) {
      error = e;
    }
    if (error == null) throw StateError('Expected file operation failure.');
  }

  try {
    final schema = CollectionSchema<Object?>(
      name: 'file_items',
      version: 1,
      fields: [Field.text('title')],
    );
    final pocket = await LocalPocket.open(
      path: 'file_lifecycle_${DateTime.now().microsecondsSinceEpoch}',
      stores: [schema],
    );
    try {
      final data = List<int>.generate(262144, (i) => (i * 17) & 0xff);
      // WebKit (Playwright on Windows) has no OPFS: the worker's blob store
      // degrades to a volatile in-memory fallback there, and attach refuses
      // unless the caller accepts volatility. The smoke exercises lifecycle
      // mechanics, so it accepts volatility only when storage isn't durable.
      final allowVolatile = !await pocket.files.isBlobStorageDurable;
      final first = await pocket.files.attach(
        store: 'file_items',
        recordId: 'fileitem0000001',
        byteArray: data,
        name: 'first.bin',
        expectedSize: data.length,
        allowVolatileBlobs: allowVolatile,
      );
      final duplicate = await pocket.files.attach(
        store: 'file_items',
        recordId: 'fileitem0000001',
        byteArray: data,
        name: 'duplicate.bin',
        allowVolatileBlobs: allowVolatile,
      );
      if (first['hash'] != duplicate['hash'] ||
          first['refId'] != duplicate['refId']) {
        throw StateError('Identical attachment was not deduplicated.');
      }

      final secondRef = await pocket.files.attach(
        store: 'file_items',
        recordId: 'fileitem0000002',
        byteArray: data,
        name: 'shared.bin',
        allowVolatileBlobs: allowVolatile,
      );
      if (secondRef['hash'] != first['hash']) {
        throw StateError('Shared content hash was not reused.');
      }

      final listed = await pocket.files
          .list(store: 'file_items', recordId: 'fileitem0000001');
      if (listed.length != 1) {
        throw StateError('Deduplicated list mismatch: $listed');
      }

      await pocket.files.remove(
        store: 'file_items',
        recordId: 'fileitem0000001',
        refId: first['refId'] as String,
      );
      final removed = await pocket.files
          .list(store: 'file_items', recordId: 'fileitem0000001');
      if (removed.length != 1 || removed.single['state'] != 'pending_remove') {
        throw StateError(
            'Remote-named ref did not enter pending_remove: $removed');
      }
      final stillShared = await pocket.files.open(
        store: 'file_items',
        recordId: 'fileitem0000002',
        refId: secondRef['refId'] as String,
      );
      if (stillShared.length != data.length) {
        throw StateError('Removing one shared reference deleted the blob.');
      }

      await expectError(() => pocket.files
          .attach(
            store: 'file_items',
            recordId: 'fileitem0000003',
            byteArray: [1, 2, 3],
            expectedSize: 4,
          )
          .then((_) {}));
      await expectError(() => pocket.files
          .attach(
            store: 'file_items',
            recordId: 'fileitem0000003',
            byteArray: [1, 2, 3],
            expectedSha256: '0' * 64,
          )
          .then((_) {}));

      final empty = await pocket.files.attach(
        store: 'file_items',
        recordId: 'fileitem0000003',
        byteArray: const [],
        name: 'empty.bin',
        expectedSize: 0,
        allowVolatileBlobs: allowVolatile,
      );
      if (empty['hash'] is! String) {
        throw StateError('Empty file hash missing.');
      }

      final capEvicted = await pocket.files.enforceStorageCap(maxBytes: 1);
      if (capEvicted < 0) {
        throw StateError('Storage cap returned negative count.');
      }
      final cleaned = await pocket.files.gc(blobGrace: Duration.zero);
      if (cleaned < 0) throw StateError('GC returned negative count.');
    } finally {
      await pocket.close();
    }

    final rawStore = WebBlobStore();
    final rawData = utf8.encode('object url lifecycle ✓');
    final hash = await rawStore.put(Stream.value(rawData));
    final url =
        await createObjectUrlFromStore(rawStore, hash, mimeType: 'text/plain');
    if (!url.startsWith('blob:')) throw StateError('Invalid object URL: $url');
    revokeObjectUrl(url);
    await rawStore.delete(hash);

    report('passed');
  } catch (error, stack) {
    report('failed', '$error\n$stack');
  }
}
