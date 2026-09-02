import 'dart:convert';
import 'dart:typed_data';

import 'package:localpocket/src/kernel/files/blob_store.dart';
import 'package:localpocket/src/kernel/ids.dart';
import 'package:localpocket/src/kernel/schema.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';

/// File-service GC edges: refs whose owning record vanished out-of-band
/// (raw SQL deletion — the purged path normally releases refs itself), and
/// the orphan-healing pass over blob-store blobs with no metadata row.
void main() {
  group('orphaned reference cleanup', () {
    test('refs without a living record are collected and their blobs released',
        () async {
      final dbPath = await tempDbPath();
      final blobStore = MemoryBlobStore();
      final pocket = await openPocket(
        path: dbPath.path,
        blobStore: blobStore,
        stores: [
          CollectionSchema(
            name: 'widgets',
            version: 1,
            fields: [Field.text('name')],
          ),
        ],
      );
      addTearDown(() async {
        await pocket.close();
        await dbPath.cleanup();
      });

      final recId = generateRecordId();
      await pocket.collection('widgets').put({'id': recId, 'name': 'w'});
      final ref = await pocket.files.attach(
        store: 'widgets',
        recordId: recId,
        bytes: Stream.value(utf8.encode('doomed content')),
        allowVolatileBlobs: true,
      );
      expect((await pocket.files.list(store: 'widgets', recordId: recId)),
          hasLength(1));

      // Out-of-band record deletion (bypassing purge's own ref release):
      // the ref now points at a record that no longer exists.
      await pocket.traceExecute('DELETE FROM widgets WHERE id = ?', [recId]);

      await pocket.files.gc(blobGrace: Duration.zero);

      expect(
        await pocket.traceQuery(
            'SELECT ref_id FROM lp_file_refs WHERE ref_id = ?', [ref.refId]),
        isEmpty,
        reason: 'the orphaned reference is collected',
      );
      final blobMeta = await pocket.traceQuery(
          'SELECT refcount FROM lp_blobs WHERE hash = ?', [ref.hash]);
      if (blobMeta.isNotEmpty) {
        expect(blobMeta.first['refcount'], 0,
            reason: 'the collected ref releases its blob pin');
      }
    });

    test('a blob on disk with no metadata row heals after the grace period',
        () async {
      final dbPath = await tempDbPath();
      final blobStore = MemoryBlobStore();
      final pocket = await openPocket(
        path: dbPath.path,
        blobStore: blobStore,
        stores: [
          CollectionSchema(
            name: 'widgets',
            version: 1,
            fields: [Field.text('name')],
          ),
        ],
      );
      addTearDown(() async {
        await pocket.close();
        await dbPath.cleanup();
      });

      // A crash between put and the metadata transaction leaves a blob on
      // disk with no lp_blobs row: simulate by writing directly to the store.
      final orphanKey = Uint8List.fromList(List.filled(32, 9));
      final orphanHash = await blobStore.put(
        Stream.value([1, 2, 3]),
        key: _hashOf(orphanKey),
      );
      expect(await blobStore.exists(orphanHash), isTrue);

      await pocket.files.gc(blobGrace: Duration.zero);

      expect(await blobStore.exists(orphanHash), isFalse,
          reason: 'the metadata-less blob is healed once its grace expires');
    });
  });
}

/// A valid 64-char lowercase-hex placeholder; gc never validates contents.
String _hashOf(Uint8List bytes) =>
    bytes.map((b) => b.toRadixString(16).padLeft(2, '0')).join();
