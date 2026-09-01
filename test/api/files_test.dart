import 'dart:convert';

import 'package:localpocket/src/api/api.dart';
import 'package:localpocket/src/files/blob_store.dart' show MemoryBlobStore;
import 'package:localpocket/src/typed/write.dart';
import 'package:test/test.dart';

import 'tasks_store.dart';

/// Files on the store facade over the direct runtime: attach, list, streamed
/// open, remove, and the store-less blob lifecycle verbs. The behavior is
/// pinned by the kernel file service (`lib/src/files/files_api.dart`) — this
/// suite proves the destination surface rides it unchanged.
void main() {
  group('Files on the store facade', () {
    test('attach/list/open/remove round-trip over the direct runtime',
        () async {
      final db = await LocalPocket.open(LocalPocketOptions(
        path: ':memory:',
        stores: [Tasks.store],
        blobStore: MemoryBlobStore(),
      ));
      addTearDown(db.close);
      final files = db.store(Tasks.store).files;

      final created =
          await db.store(Tasks.store).put([Tasks.title.set('with file')]);
      final id = created.id;
      final payload = utf8.encode('hello files');
      final ref = await files.attach(
        recordId: id,
        source: FileSource.bytes(payload, name: 'note.txt'),
        allowVolatileBlobs: true,
      );

      expect(ref.store, 'tasks');
      expect(ref.recordId, id);
      expect(ref.field, 'imgs');
      expect(ref.state, 'pending_upload');
      expect(ref.remoteName, 'note.txt');
      expect(ref.hash, isNotEmpty);

      final refs = await files.list(recordId: id);
      expect(refs, hasLength(1));
      expect(refs.single.refId, ref.refId);
      expect(refs.single.state, 'pending_upload');

      final stream = await files.open(ref);
      final bytes = await stream.expand((c) => c).toList();
      expect(utf8.decode(bytes), 'hello files');

      await files.remove(ref);
      final after = await files.list(recordId: id);
      expect(after.single.state, 'pending_remove');
    });

    test('a stream source with a declared length streams the same payload',
        () async {
      final db = await LocalPocket.open(LocalPocketOptions(
        path: ':memory:',
        stores: [Tasks.store],
        blobStore: MemoryBlobStore(),
      ));
      addTearDown(db.close);
      final files = db.store(Tasks.store).files;
      final id =
          (await db.store(Tasks.store).put([Tasks.title.set('streamed')])).id;

      final payload = utf8.encode('streamed attachment');
      final ref = await files.attach(
        recordId: id,
        source: FileSource.stream(
          Stream.value(payload),
          length: payload.length,
          name: 's.bin',
        ),
        allowVolatileBlobs: true,
      );
      expect(ref.remoteName, 's.bin');

      final bytes = await (await files.open(ref)).expand((c) => c).toList();
      expect(utf8.decode(bytes), 'streamed attachment');
    });

    test('a declared length that disagrees with the bytes fails typed',
        () async {
      final db = await LocalPocket.open(LocalPocketOptions(
        path: ':memory:',
        stores: [Tasks.store],
        blobStore: MemoryBlobStore(),
      ));
      addTearDown(db.close);
      final files = db.store(Tasks.store).files;
      final id = (await db.store(Tasks.store).put([Tasks.title.set('x')])).id;

      await expectLater(
        files.attach(
          recordId: id,
          source: FileSource.stream(
            Stream.value(utf8.encode('short')),
            length: 100,
          ),
          allowVolatileBlobs: true,
        ),
        throwsA(isA<StateError>()
            .having((e) => e.message, 'message', contains('Size mismatch'))),
      );
    });

    test(
        'a volatile blob store reports honest durability and refuses '
        'attachment without opt-in', () async {
      final db = await LocalPocket.open(LocalPocketOptions(
        path: ':memory:',
        stores: [Tasks.store],
        blobStore: MemoryBlobStore(),
      ));
      addTearDown(db.close);
      final files = db.store(Tasks.store).files;
      expect(await files.isBlobStorageDurable, isFalse,
          reason: 'the test blob store is a volatile MemoryBlobStore');

      final id = (await db.store(Tasks.store).put([Tasks.title.set('x')])).id;
      await expectLater(
        files.attach(
          recordId: id,
          source: FileSource.bytes([1, 2, 3]),
        ),
        throwsA(isA<StateError>()
            .having((e) => e.message, 'message', contains('volatile'))),
      );
    });

    test('a database without a blob store fails attach typed', () async {
      final db = await LocalPocket.open(LocalPocketOptions(
        path: ':memory:',
        stores: [Tasks.store],
      ));
      addTearDown(db.close);
      final files = db.store(Tasks.store).files;
      expect(await files.isBlobStorageDurable, isFalse);

      final id = (await db.store(Tasks.store).put([Tasks.title.set('x')])).id;
      await expectLater(
        files.attach(
          recordId: id,
          source: FileSource.bytes([1]),
          allowVolatileBlobs: true,
        ),
        throwsA(isA<StateError>()),
      );
    });

    test('gc and enforceStorageCap return the kernel counters', () async {
      final db = await LocalPocket.open(LocalPocketOptions(
        path: ':memory:',
        stores: [Tasks.store],
        blobStore: MemoryBlobStore(),
      ));
      addTearDown(db.close);
      final files = db.store(Tasks.store).files;

      final gc = await files.gc(
        blobGrace: Duration.zero,
        tmpGrace: Duration.zero,
      );
      expect(gc, isA<int>());
      final cap = await files.enforceStorageCap(maxBytes: 1024);
      expect(cap, isA<int>());
    });

    test('files on the store facade use an immutable FileRef', () async {
      const ref = FileRef(
        refId: 'r1',
        store: 'tasks',
        recordId: 'rec',
        field: 'imgs',
        hash: 'h',
        state: 'pending_upload',
      );
      expect(ref.refId, 'r1');
      expect(ref.remoteName, isNull);
      expect(ref.nextRetryAt, 0);
      expect(ref.toString(), contains('r1'));
    });
  });
}
