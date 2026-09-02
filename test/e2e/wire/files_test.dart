import 'dart:async';

import 'package:localpocket/src/kernel/files/blob_store.dart';
import 'package:localpocket/src/kernel/ids.dart';
import 'package:localpocket/src/kernel/schema.dart';
import 'package:localpocket/src/kernel/sync/sync_tables.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';
import '../support/wire_server.dart';

/// Files & binaries over the wire (tests.md #28-30) — a single source of
/// scenarios run against BOTH the in-process MockPbServer and the LIVE
/// PocketBase server via [wireTest]. The engine's real file lane runs over
/// genuine HTTP on both backends (multipart `imgs+` uploads, server-side
/// renames, `GET /api/files/data/...` downloads, `imgs-` removals).
///
/// Unified (mock + live):
/// - `pocket.files.attach` stores bytes locally (`pending_upload`) and the
///   engine's `fileLane.syncFiles()` uploads them via multipart; the server
///   RENAMES the file and the returned name is adopted into
///   `lp_file_refs.remote_name`. A second client pulls the record, the
///   puller `observeRemoteFiles` records `remote_only` refs, and the prefetch
///   lane downloads the exact bytes;
/// - attaching to a NEVER-REMOTE create sets the file op's `depends_on_op`
///   to the record's outbox op — the file is held until the record's create
///   is pushed, then both settle in the same cycle;
/// - removing an attachment on A sends `imgs-`, the server drops the name,
///   and B reaps its ref via the remote-shrink reconciliation on the next
///   pull — including when the LAST file is removed (empty `imgs`), the
///   regression that the production puller fix landed for.
void main() {
  /// The canonical file-sync schema: `prefetchFiles: true` so a pull eagerly
  /// downloads remote-only refs (no manual `downloadFile` needed).
  CollectionSchema<Object?> fileSchema(String store) => CollectionSchema(
        name: store,
        version: 1,
        fields: [Field.text('name', required: true), Field.int('qty')],
        prefetchFiles: true,
      );

  Future<List<int>> readAll(Stream<List<int>> stream) async =>
      stream.fold<List<int>>(<int>[], (acc, chunk) => acc..addAll(chunk));

  /// Two isolated file-enabled clients (own DB + blob store) bound to [s].
  Future<(WireClient, WireClient)> twoClients(WireServer s) async {
    final dbA = await tempDbPath();
    final dbB = await tempDbPath();
    final a = await s.createClient(
        path: dbA.path,
        storeBuilders: [fileSchema],
        blobStore: MemoryBlobStore());
    final b = await s.createClient(
        path: dbB.path,
        storeBuilders: [fileSchema],
        blobStore: MemoryBlobStore());
    s.onClose(() => dbA.cleanup());
    s.onClose(() => dbB.cleanup());
    return (a, b);
  }

  /// The current server-side `imgs` list for [id].
  Future<List<Object?>> remoteImgs(WireServer s, String id) async =>
      (await s.readRecord(s.store, id))!['imgs']! as List;

  group('E2E files over the wire', () {
    wireTest(
        'attach on A uploads via multipart; B prefetch-downloads the '
        'bytes', (s) async {
      final (a, b) = await twoClients(s);

      // A: create the record, then attach a small binary.
      final id = generateRecordId();
      await a.pocket.collection(s.store).put(record(id: id, name: 'file-1'));
      await a.engine.syncNow();
      expect(await remoteImgs(s, id), isEmpty);

      final bytes = List<int>.generate(2048, (i) => i % 251);
      final ref = await a.pocket.files.attach(
          store: s.store,
          recordId: id,
          bytes: Stream.value(bytes),
          name: 'probe.bin',
          allowVolatileBlobs: true);
      expect(ref.state, 'pending_upload');

      // A's cycle uploads via multipart; the server renames + stores bytes.
      await a.engine.syncNow();
      expect(await a.engine.syncStore.countPending(), 0);
      final attachments = await remoteImgs(s, id);
      expect(attachments, hasLength(1),
          reason: 'the upload appended one server-renamed file');
      if (s is MockWireServer) {
        final remoteName = attachments.single! as String;
        expect(s.mock.fileBytes.containsKey('$id/$remoteName'), isTrue);
        expect(s.mock.fileBytes['$id/$remoteName'], bytes,
            reason: 'the exact bytes landed on the server');
      }
      // A's ref settled with the server-minted remote name.
      final refsA = await a.pocket.files.list(store: s.store, recordId: id);
      expect(refsA.single.state, 'synced');
      expect(refsA.single.remoteName, attachments.single);

      // B pulls: observeRemoteFiles records the ref, prefetch downloads it.
      await b.engine.syncNow();
      final refsB = await b.pocket.files.list(store: s.store, recordId: id);
      expect(refsB, hasLength(1));
      expect(refsB.single.state, 'synced',
          reason: 'the prefetch lane downloaded the remote file');
      final stream = await b.pocket.files.open(store: s.store, recordId: id);
      expect(await readAll(stream), bytes,
          reason: 'B recovered the exact bytes over the wire');
      expect(await b.pocket.blobStore!.exists(refsB.single.hash), isTrue);
    });

    wireTest('file op waits on the record create (depends_on_op), then settles',
        (s) async {
      final (a, _) = await twoClients(s);

      // A brand-new unsynced record, then an attach — the file op must be
      // gated on the record's create op.
      final id = generateRecordId();
      await a.pocket.collection(s.store).put(record(id: id, name: 'pending'));
      final ref = await a.pocket.files.attach(
          store: s.store,
          recordId: id,
          bytes: Stream.value([1, 2, 3, 4, 5]),
          name: 'a.bin',
          allowVolatileBlobs: true);
      expect(ref.state, 'pending_upload');

      final outbox = await a.pocket.db.query('lp_outbox',
          columns: ['op_id'],
          where: 'store = ? AND record_id = ?',
          whereArgs: [s.store, id]);
      final recordOpId = outbox.single['op_id'] as String;
      final queue = await a.pocket.db.query('lp_op_queue',
          columns: ['op_id', 'kind', 'depends_on_op'],
          where: 'store = ? AND record_id = ?',
          whereArgs: [s.store, id]);
      final fileOp = queue.singleWhere((r) => r['kind'] == 'fileUpload');
      expect(fileOp['depends_on_op'], recordOpId,
          reason: 'the file op is gated on the never-remote create op');

      // While the create is unsynced, the op queue holds the file op.
      final drained = await a.pocket.opQueue.drain(limit: 10);
      expect(drained.where((op) => op.kind == OpQueueKind.fileUpload), isEmpty,
          reason: 'the file op is blocked until the record create drains');

      // ONE cycle pushes the record first, releases the dependency, then
      // uploads the file — both settle together.
      await a.engine.syncNow();
      expect(await a.engine.syncStore.countPending(), 0);
      final after = await a.pocket.db.query('lp_op_queue',
          columns: ['kind', 'state'],
          where: 'store = ? AND record_id = ?',
          whereArgs: [s.store, id]);
      expect(
          after.singleWhere((r) => r['kind'] == 'fileUpload')['state'], 'done',
          reason: 'the file op settled in the same cycle as the create');
      expect(
          (await s.readRecord(s.store, id))!['data']! as Map<String, Object?>,
          containsPair('name', 'pending'),
          reason: 'the record create landed');
      expect(await remoteImgs(s, id), hasLength(1),
          reason: 'the file upload landed after the create');
      final refsA = await a.pocket.files.list(store: s.store, recordId: id);
      expect(refsA.single.state, 'synced');
    });

    wireTest('removing a named attachment propagates: B reaps the removed ref',
        (s) async {
      final (a, b) = await twoClients(s);

      // A attaches TWO files to one record.
      final id = generateRecordId();
      await a.pocket.collection(s.store).put(record(id: id, name: 'multi'));
      await a.engine.syncNow();
      await a.pocket.files.attach(
          store: s.store,
          recordId: id,
          bytes: Stream.value(List<int>.filled(64, 1)),
          name: 'one.bin',
          allowVolatileBlobs: true);
      await a.pocket.files.attach(
          store: s.store,
          recordId: id,
          bytes: Stream.value(List<int>.filled(64, 2)),
          name: 'two.bin',
          allowVolatileBlobs: true);
      await a.engine.syncNow();
      expect(await remoteImgs(s, id), hasLength(2));
      final keptName = (await remoteImgs(s, id)).last;

      // B pulls both files.
      await b.engine.syncNow();
      expect(await b.pocket.files.list(store: s.store, recordId: id),
          hasLength(2));

      // A removes ONE named attachment.
      final refsA0 = await a.pocket.files.list(store: s.store, recordId: id);
      await a.pocket.files
          .remove(store: s.store, recordId: id, refId: refsA0.first.refId);
      final refsA1 = await a.pocket.files.list(store: s.store, recordId: id);
      expect(refsA1, hasLength(2),
          reason: 'one ref marked for removal, the other kept');
      expect(refsA1.singleWhere((r) => r.state == 'pending_remove').refId,
          refsA0.first.refId,
          reason: "A's chosen ref transitions to pending_remove");
      await a.engine.syncNow();
      expect(await remoteImgs(s, id), [keptName],
          reason: 'the server dropped the removed name');
      expect(
          await a.pocket.files.list(store: s.store, recordId: id), hasLength(1),
          reason: "A's removed ref is gone after the remove op settled");

      // B pulls: the remote-shrink reconciliation reaps the removed ref.
      await b.engine.syncNow();
      final refsB = await b.pocket.files.list(store: s.store, recordId: id);
      expect(refsB, hasLength(1),
          reason: 'B dropped the removed attachment after sync');
      expect(refsB.single.remoteName, keptName);
      // The surviving file still opens with its original bytes.
      final stream = await b.pocket.files.open(store: s.store, recordId: id);
      expect(await readAll(stream), List<int>.filled(64, 2));
    });

    wireTest('peer reaps even when the LAST file is removed (empty attachments)',
        (s) async {
      // Regression pin: the remote-shrink reconciliation previously only ran
      // when the pulled record's `attachments` was non-empty, so removing the ONLY
      // file on a record left the peer's stale ref (and its blob) behind
      // forever. lib/src/kernel/sync/puller.dart now observes remote files even for
      // empty `imgs` when the record exists locally.
      final (a, b) = await twoClients(s);

      final id = generateRecordId();
      await a.pocket.collection(s.store).put(record(id: id, name: 'solo'));
      await a.engine.syncNow();
      final bytes = List<int>.filled(128, 9);
      final ref = await a.pocket.files.attach(
          store: s.store,
          recordId: id,
          bytes: Stream.value(bytes),
          name: 'only.bin',
          allowVolatileBlobs: true);
      await a.engine.syncNow();
      expect(await remoteImgs(s, id), hasLength(1));

      // B downloads the only file.
      await b.engine.syncNow();
      final refsB0 = await b.pocket.files.list(store: s.store, recordId: id);
      expect(refsB0, hasLength(1));
      expect(refsB0.single.state, 'synced');

      // A removes it -> the server's `imgs` becomes EMPTY.
      await a.pocket.files
          .remove(store: s.store, recordId: id, refId: ref.refId);
      await a.engine.syncNow();
      expect(await remoteImgs(s, id), isEmpty,
          reason: 'the last file was removed server-side');

      // B pulls; even with empty `imgs` the shrink reaps the stale ref.
      await b.engine.syncNow();
      final refsB1 = await b.pocket.files.list(store: s.store, recordId: id);
      expect(refsB1, isEmpty,
          reason: 'B reaped the ref of the last-removed file');
      // The blob is released: opening fails (no ref) and the blob refcount
      // was decremented by the shrink.
      final blobRow = await b.pocket.db.query('lp_blobs',
          columns: ['refcount'],
          where: 'hash = ?',
          whereArgs: [refsB0.single.hash]);
      if (blobRow.isNotEmpty) {
        expect(blobRow.single['refcount'] as int, 0,
            reason: 'the shrink released the blob refcount');
      }
      expect(await b.pocket.collection(s.store).get(id), isNotNull,
          reason: 'the record itself survives');
    });
  });
}
