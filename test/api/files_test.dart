import 'dart:convert';

import 'package:crypto/crypto.dart' show sha256;
import 'package:localpocket/src/api/api.dart';
import 'package:localpocket/src/adapters/pocketbase/backend.dart'
    show PocketBaseSyncBackendFactory;
import 'package:localpocket/src/kernel/errors.dart'
    show RemoteOnlyError, ValidationException;
import 'package:localpocket/src/kernel/files/blob_store.dart'
    show MemoryBlobStore;
import 'package:localpocket/src/api/writes.dart';
import 'package:test/test.dart';

import '../support/mock_pb_server.dart';
import '../support/fixtures/tasks_store.dart';

/// Files on the store facade over the direct runtime: attach, list, streamed
/// open, remove, and the store-less blob lifecycle verbs. The behavior is
/// pinned by the kernel file service (`lib/src/kernel/file_service.dart`) — this
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
      // remote_name is recorded only by upload completion — a pending ref
      // has never reached the remote.
      expect(ref.remoteName, isNull);
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
      // A never-uploaded ref vanishes on remove: no pending_remove state and
      // no remote delete op against a nonexistent attachment.
      expect(after, isEmpty);
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
      // remote_name stays null until upload completion adopts the filename.
      expect(ref.remoteName, isNull);

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
        throwsA(isA<ValidationException>()
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

    test('download without a started sync host fails typed', () async {
      final db = await LocalPocket.open(LocalPocketOptions(
        path: ':memory:',
        stores: [Tasks.store],
        blobStore: MemoryBlobStore(),
      ));
      addTearDown(db.close);
      final files = db.store(Tasks.store).files;
      final id = (await db.store(Tasks.store).put([Tasks.title.set('x')])).id;

      final ref = await files.attach(
        recordId: id,
        source: FileSource.bytes([1, 2, 3], name: 'a.bin'),
        allowVolatileBlobs: true,
      );
      // Download rides the sync engine's file lane: without a started sync
      // host it fails typed instead of hanging or silently no-oping.
      await expectLater(
        files.download(ref),
        throwsA(isA<ValidationException>()),
      );
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

    group('open(fetch: true)', () {
      final tokens = _FetchTokens();

      /// Opens a pocket with a started sync host against a fresh mock
      /// server. Returns (db, sync, server).
      Future<(LocalPocket, PocketBaseSync, MockPbServer)> syncedPocket() async {
        final server = await MockPbServer().start();
        addTearDown(server.stop);
        final db = await LocalPocket.open(LocalPocketOptions(
          path: ':memory:',
          stores: [Tasks.store],
          blobStore: MemoryBlobStore(),
          syncBackendFactory: const PocketBaseSyncBackendFactory(),
        ));
        addTearDown(db.close);
        final sync = db.attachPocketBaseSync(PocketBaseSyncOptions(
          baseUrl: server.baseUrl,
          tokenProvider: tokens,
          identity: 'files-fetch-test',
        ));
        await sync.start();
        return (db, sync, server);
      }

      test('hydrates a cap-evicted attachment and streams the bytes', () async {
        final (db, sync, _) = await syncedPocket();
        final files = db.store(Tasks.store).files;

        final id =
            (await db.store(Tasks.store).put([Tasks.title.set('doc')])).id;
        final bytes = utf8.encode('fetch-on-open payload');
        final ref = await files.attach(
          recordId: id,
          source: FileSource.bytes(bytes, name: 'doc.bin'),
          allowVolatileBlobs: true,
        );

        // Push the record and its upload; the server mints the remote name.
        final report = await sync.syncNow();
        expect(report.hadError, isFalse);
        final uploaded = await files.list(recordId: id);
        expect(uploaded.single.state, 'synced');
        expect(uploaded.single.remoteName, isNotNull);

        // A second attachment (older last_access) keeps the target ref the
        // LRU-eviction victim when the cap lands.
        final keepId =
            (await db.store(Tasks.store).put([Tasks.title.set('keep')])).id;
        final keepRef = await files.attach(
          recordId: keepId,
          source: FileSource.bytes(List.filled(64, 7), name: 'keep.bin'),
          allowVolatileBlobs: true,
        );
        await files
            .open(keepRef)
            .then((s) => s.fold<List<int>>(<int>[], (a, c) => a..addAll(c)));

        final evicted = await files.enforceStorageCap(maxBytes: 0);
        expect(evicted, 1, reason: 'exactly the doc.bin blob was evicted');
        final evictedRef = (await files.list(recordId: id)).single;
        expect(evictedRef.refId, ref.refId);
        expect(evictedRef.state, 'remote_only');

        // Plain open still refuses; fetch hydrates first and streams.
        await expectLater(
          files.open(evictedRef),
          throwsA(isA<RemoteOnlyError>()),
        );
        final stream = await files.open(evictedRef, fetch: true);
        final roundTripped = await stream
            .fold<List<int>>(<int>[], (acc, chunk) => acc..addAll(chunk));
        expect(roundTripped, bytes);

        // The ref settled synced again; a fetch replay is a local no-op.
        final after = (await files.list(recordId: id)).single;
        expect(after.state, 'synced');
        expect(after.hash, sha256.convert(bytes).toString());
      });
    });
  });
}

/// A fixed token provider for the fetch tests' sync host.
class _FetchTokens implements TokenProvider {
  @override
  Future<Token> currentToken() async => Token('fetch-test-token');
  @override
  Future<Token> refreshToken(Token current) async => Token('fetch-test-token');
  @override
  String get identity => 'files-fetch-test';
}
