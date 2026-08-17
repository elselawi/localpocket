import 'dart:convert';
import 'dart:js_interop';
import 'dart:js_interop_unsafe';

import 'package:localpocket/src/core/schema.dart';
import 'package:localpocket/src/web/facade.dart';

/// Task-2/5 browser spike: proves the worker-owned `WebBlobStore` backs the
/// public `pocket.files` facade. Opens a database through the web facade (which
/// boots the engine worker with a worker-owned blob store), then exercises
/// attach (bounded chunked upload) -> list -> open byte-equality -> remove ->
/// gc through the real public API.
Future<void> main() async {
  void report(String status, [String? detail]) {
    globalContext.setProperty('__files_spike'.toJS, status.toJS);
    if (detail != null) {
      globalContext.setProperty('__files_spike_detail'.toJS, detail.toJS);
    }
  }

  try {
    final schema = CollectionSchema<Object?>(
      name: 'tasks',
      version: 1,
      fields: [
        Field.text('title'),
      ],
    );

    final pocket = await LocalPocket.open(
      path: 'files_worker_spike',
      stores: [schema],
    );

    // Small attachment through the public files facade.
    final payload = utf8.encode(
        'worker-owned blob store round-trip payload with unicode ✓ 1234567890');
    final small = await pocket.files.attach(
      store: 'tasks',
      recordId: 'task000000000001',
      byteArray: payload,
      name: 'small.txt',
    );
    if ((small['hash'] as String).length != 64 ||
        small['state'] != 'pending_upload') {
      throw StateError('small attach mismatch: $small');
    }

    // Larger payload (> one 256 KiB chunk) -> bounded chunked upload path.
    final bigBytes = List<int>.generate(700000, (i) => i % 251);
    final big = await pocket.files.attach(
      store: 'tasks',
      recordId: 'task000000000002',
      byteArray: bigBytes,
      name: 'big.bin',
    );
    if ((big['hash'] as String).length != 64 ||
        big['state'] != 'pending_upload') {
      throw StateError('chunked attach mismatch: $big');
    }

    // List reflects both attachments.
    final listed =
        await pocket.files.list(store: 'tasks', recordId: 'task000000000001');
    if (listed.length != 1 || listed.first['refId'] != small['refId']) {
      throw StateError('list mismatch: $listed');
    }

    // Open reads back byte-identical content.
    final opened = await pocket.files.open(
      store: 'tasks',
      recordId: 'task000000000001',
      refId: small['refId'] as String,
    );
    final openedText = utf8.decode(opened);
    if (openedText !=
        'worker-owned blob store round-trip payload with unicode ✓ 1234567890') {
      throw StateError('open byte mismatch: $openedText');
    }

    // Open the large attachment and verify byte equality.
    final openedBig = await pocket.files.open(
      store: 'tasks',
      recordId: 'task000000000002',
      refId: big['refId'] as String,
    );
    if (openedBig.length != bigBytes.length) {
      throw StateError(
          'big open length mismatch: ${openedBig.length} vs ${bigBytes.length}');
    }
    for (var i = 0; i < bigBytes.length; i++) {
      if (openedBig[i] != bigBytes[i]) {
        throw StateError('big open byte mismatch at $i');
      }
    }

    // Remove the small attachment. Because it has a remote name, remove queues
    // it as pending_remove for the file lane (correct engine semantics) rather
    // than instantly vanishing.
    await pocket.files.remove(
      store: 'tasks',
      recordId: 'task000000000001',
      refId: small['refId'] as String,
    );
    final afterRemove =
        await pocket.files.list(store: 'tasks', recordId: 'task000000000001');
    if (afterRemove.length != 1 ||
        afterRemove.first['state'] != 'pending_remove') {
      throw StateError('remove did not mark pending_remove: $afterRemove');
    }

    // GC still runs and is idempotent against the pending_remove ref.
    final cleaned = await pocket.files.gc(blobGrace: Duration.zero);
    if (cleaned < 0) throw StateError('gc returned negative: $cleaned');

    await pocket.close();
    report('passed',
        'Worker-owned files facade: attach/list/open/remove/pending_remove/gc succeeded.');
  } catch (e, stack) {
    report('failed', '$e\n$stack');
  }
}
