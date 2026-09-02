import 'dart:async';
import 'dart:convert';

import 'package:localpocket/src/kernel/errors.dart';
import 'package:localpocket/src/kernel/file_service.dart';
import 'package:localpocket/src/kernel/files/blob_store.dart';
import 'package:localpocket/src/kernel/ids.dart';
import 'package:localpocket/src/kernel/local_pocket.dart';
import 'package:localpocket/src/kernel/schema.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';

/// Files API no-store and record-boundary behavior, duplicate
/// attachment / refcount, and remove-before-upload cancellation
///.
void main() {
  Future<LocalPocket> pocketWithStore({BlobStore? blobStore}) async {
    final dbPath = await tempDbPath();
    final pocket = await openPocket(
      path: dbPath.path,
      blobStore: blobStore,
      stores: [
        CollectionSchema(
          name: 'widgets',
          version: 1,
          fields: [Field.text('name', required: true)],
        ),
      ],
    );
    addTearDown(() async {
      await pocket.close();
      await dbPath.cleanup();
    });
    return pocket;
  }

  group('files API no-store behavior', () {
    test('attach and open require a configured blob store', () async {
      final pocket = await pocketWithStore(); // no blob store
      final rec = generateRecordId();
      await pocket.collection('widgets').put({'id': rec, 'name': 'w'});

      await expectLater(
        pocket.files.attach(
            store: 'widgets', recordId: rec, bytes: Stream.value([1, 2, 3])),
        throwsA(isA<StateError>()),
      );
      await expectLater(
        pocket.files.open(store: 'widgets', recordId: rec),
        throwsA(isA<StateError>()),
      );
    });

    test('list, remove, gc, and enforceStorageCap are safe without a store',
        () async {
      final pocket = await pocketWithStore();
      final rec = generateRecordId();
      await pocket.collection('widgets').put({'id': rec, 'name': 'w'});

      expect(await pocket.files.list(store: 'widgets', recordId: rec), isEmpty);
      // remove on a ref-less record is a no-op.
      await pocket.files.remove(store: 'widgets', recordId: rec);
      // gc with no store only cleans tmp (nothing) and returns 0.
      expect(await pocket.files.gc(blobGrace: Duration.zero), 0);
      expect(await pocket.files.enforceStorageCap(maxBytes: 0), 0);
    });
  });

  group('files API record boundaries', () {
    test('attach validation failure leaves no ref/op rows', () async {
      final store = MemoryBlobStore();
      final pocket = await pocketWithStore(blobStore: store);
      final rec = generateRecordId();
      await pocket.collection('widgets').put({'id': rec, 'name': 'w'});

      await expectLater(
        pocket.files.attach(
          store: 'widgets',
          recordId: rec,
          bytes: Stream.value(utf8.encode('data')),
          expectedSha256: 'f' * 64, // wrong digest
        ),
        throwsA(isA<StateError>()),
      );

      // No ref, no op, no blob row left behind.
      expect(await pocket.files.list(store: 'widgets', recordId: rec), isEmpty);
      expect(
          await pocket.db.query('lp_op_queue',
              where: "store = 'widgets' AND record_id = ?", whereArgs: [rec]),
          isEmpty);
      expect(await store.listHashes(), isEmpty,
          reason: 'failed put published nothing');
    });

    test('attach to a missing record still records the ref (documented)',
        () async {
      final store = MemoryBlobStore();
      final pocket = await pocketWithStore(blobStore: store);
      final ghost = generateRecordId();

      final ref = await pocket.files.attach(
        store: 'widgets',
        recordId: ghost,
        bytes: Stream.value(utf8.encode('ghost file')),
        allowVolatileBlobs: true,
      );
      expect(ref.state, 'pending_upload');
      // The blob exists locally and opens even though the record never did.
      expect(await store.exists(ref.hash), isTrue);
      final stream = await pocket.files
          .open(store: 'widgets', recordId: ghost, refId: ref.refId);
      final bytes = await stream.fold<List<int>>([], (a, b) => [...a, ...b]);
      expect(bytes, utf8.encode('ghost file'));
    });

    test('unknown store is tolerated by the files API', () async {
      final pocket = await pocketWithStore(blobStore: MemoryBlobStore());
      final rec = generateRecordId();
      await pocket.collection('widgets').put({'id': rec, 'name': 'w'});
      // `nosuch` is not a registered collection, but refs live in a system
      // table, so list works and returns empty.
      expect(await pocket.files.list(store: 'nosuch', recordId: rec), isEmpty);
      await pocket.files.remove(store: 'nosuch', recordId: rec); // no-op
    });

    test('invalid index and missing refId raise clear errors', () async {
      final pocket = await pocketWithStore(blobStore: MemoryBlobStore());
      final rec = generateRecordId();
      await pocket.collection('widgets').put({'id': rec, 'name': 'w'});
      final ref = await pocket.files.attach(
        store: 'widgets',
        recordId: rec,
        bytes: Stream.value(utf8.encode('file')),
        allowVolatileBlobs: true,
      );

      await expectLater(
        pocket.files.open(store: 'widgets', recordId: rec, index: 5),
        throwsA(isA<RangeError>()),
      );
      await expectLater(
        pocket.files.open(store: 'widgets', recordId: rec, refId: 'nope'),
        throwsA(isA<StateError>()),
      );
      await expectLater(
        pocket.files.remove(store: 'widgets', recordId: rec, refId: 'nope'),
        throwsA(isA<StateError>()),
      );

      // refId selection works.
      final stream = await pocket.files
          .open(store: 'widgets', recordId: rec, refId: ref.refId);
      expect(stream, isNotNull);
    });

    test('open of a remote_only ref requires a prior download', () async {
      final pocket = await pocketWithStore(blobStore: MemoryBlobStore());
      final rec = generateRecordId();
      await pocket.collection('widgets').put({'id': rec, 'name': 'w'});

      // Simulate a remote-only ref (evicted content).
      final refId = generateRecordId();
      await pocket.db.insert('lp_file_refs', {
        'ref_id': refId,
        'store': 'widgets',
        'record_id': rec,
        'field': 'attachments',
        'hash': 'a' * 64,
        'remote_name': 'remote.png',
        'state': 'remote_only',
      });

      await expectLater(
        pocket.files.open(store: 'widgets', recordId: rec),
        throwsA(isA<StateError>()),
      );
    });

    test('repeated remove is idempotent', () async {
      final pocket = await pocketWithStore(blobStore: MemoryBlobStore());
      final rec = generateRecordId();
      await pocket.collection('widgets').put({'id': rec, 'name': 'w'});
      final ref = await pocket.files.attach(
        store: 'widgets',
        recordId: rec,
        bytes: Stream.value(utf8.encode('x')),
        allowVolatileBlobs: true,
      );

      await pocket.files.remove(store: 'widgets', recordId: rec);
      expect(await pocket.files.list(store: 'widgets', recordId: rec), isEmpty);
      // Second remove: no refs -> no-op.
      await pocket.files.remove(store: 'widgets', recordId: rec);
      expect(await pocket.files.list(store: 'widgets', recordId: rec), isEmpty);
      expect(ref.hash, isNotEmpty);
    });
  });

  group('duplicate attachment / refcount', () {
    test(
        'identical bytes twice on one record+field -> one ref, one op, '
        'refcount 1', () async {
      final store = MemoryBlobStore();
      final pocket = await pocketWithStore(blobStore: store);
      final rec = generateRecordId();
      await pocket.collection('widgets').put({'id': rec, 'name': 'w'});
      final bytes = utf8.encode('same content');

      final ref1 = await pocket.files.attach(
          store: 'widgets',
          recordId: rec,
          bytes: Stream.value(bytes),
          allowVolatileBlobs: true);
      final ref2 = await pocket.files.attach(
          store: 'widgets',
          recordId: rec,
          bytes: Stream.value(bytes),
          allowVolatileBlobs: true);

      expect(ref2.refId, ref1.refId,
          reason: 'dedup returns the SAME logical ref');
      final refs = await pocket.files.list(store: 'widgets', recordId: rec);
      expect(refs.length, 1, reason: 'one lp_file_refs row');
      expect(
          await pocket.db.query('lp_op_queue',
              where: "kind = 'fileUpload' AND record_id = ?", whereArgs: [rec]),
          hasLength(1),
          reason: 'one upload operation');
      final blob = (await pocket.db
              .query('lp_blobs', where: 'hash = ?', whereArgs: [ref1.hash]))
          .single;
      expect(blob['refcount'], 1, reason: 'blob refcount is exactly 1');

      // Remove once -> refcount drops to zero and the blob is GC-able.
      await pocket.files.remove(store: 'widgets', recordId: rec);
      expect(await pocket.files.list(store: 'widgets', recordId: rec), isEmpty);
      expect(
          (await pocket.db
                  .query('lp_blobs', where: 'hash = ?', whereArgs: [ref1.hash]))
              .single['refcount'],
          0);
    });

    test('same hash on different fields -> separate refs, shared blob',
        () async {
      final pocket = await pocketWithStore(blobStore: MemoryBlobStore());
      final rec = generateRecordId();
      await pocket.collection('widgets').put({'id': rec, 'name': 'w'});
      final bytes = utf8.encode('shared bytes');

      await pocket.files.attach(
          store: 'widgets',
          recordId: rec,
          bytes: Stream.value(bytes),
          allowVolatileBlobs: true);
      await pocket.files.attach(
          store: 'widgets',
          recordId: rec,
          field: 'gallery',
          bytes: Stream.value(bytes),
          allowVolatileBlobs: true);

      // list() defaults to the `attachments` field; query the raw table for all.
      final all = await pocket.db.query('lp_file_refs',
          where: "store = 'widgets' AND record_id = ?", whereArgs: [rec]);
      expect(all.length, 2,
          reason: 'different fields are distinct logical references');
      expect(all.map((r) => r['hash']).toSet().length, 1,
          reason: 'same content hash');
      final blob = (await pocket.db.query('lp_blobs')).single;
      expect(blob['refcount'], 2, reason: 'shared blob counts both refs');
    });

    test('same hash on different records -> separate refs, shared blob',
        () async {
      final pocket = await pocketWithStore(blobStore: MemoryBlobStore());
      final a = generateRecordId();
      final b = generateRecordId();
      await pocket.collection('widgets').put({'id': a, 'name': 'a'});
      await pocket.collection('widgets').put({'id': b, 'name': 'b'});
      final bytes = utf8.encode('shared across records');

      final ra = await pocket.files.attach(
          store: 'widgets',
          recordId: a,
          bytes: Stream.value(bytes),
          allowVolatileBlobs: true);
      final rb = await pocket.files.attach(
          store: 'widgets',
          recordId: b,
          bytes: Stream.value(bytes),
          allowVolatileBlobs: true);

      expect(ra.hash, rb.hash);
      expect((await pocket.db.query('lp_blobs')).single['refcount'], 2);
      // Removing one ref leaves the other intact.
      await pocket.files.remove(store: 'widgets', recordId: a);
      expect(
          (await pocket.db
                  .query('lp_blobs', where: 'hash = ?', whereArgs: [ra.hash]))
              .single['refcount'],
          1);
      expect(
          await pocket.files.list(store: 'widgets', recordId: b), hasLength(1));
    });
  });

  group('remove-before-upload cancellation', () {
    test(
        'attach then remove before sync: no upload, no op, no ref, '
        'refcount 0', () async {
      final store = MemoryBlobStore();
      final pocket = await pocketWithStore(blobStore: store);
      final rec = generateRecordId();
      await pocket.collection('widgets').put({'id': rec, 'name': 'w'});
      final ref = await pocket.files.attach(
        store: 'widgets',
        recordId: rec,
        bytes: Stream.value(utf8.encode('never uploaded')),
        allowVolatileBlobs: true,
      );

      await pocket.files.remove(store: 'widgets', recordId: rec);

      expect(await pocket.files.list(store: 'widgets', recordId: rec), isEmpty);
      // The pending upload op was neutralized (done) so it can never run.
      final ops = await pocket.db.query('lp_op_queue',
          where: "kind = 'fileUpload' AND record_id = ?", whereArgs: [rec]);
      expect(ops, isNotEmpty, reason: 'the op row remains for the audit trail');
      expect(ops.every((o) => o['state'] == 'done'), isTrue,
          reason: 'the upload op is cancelled with the ref');
      expect(
          (await pocket.db
                  .query('lp_blobs', where: 'hash = ?', whereArgs: [ref.hash]))
              .single['refcount'],
          0);
      // The blob bytes remain until GC, but nothing references them.
      expect(await store.exists(ref.hash), isTrue);
    });

    test('attach then purge before sync: refs and ops fully removed', () async {
      final store = MemoryBlobStore();
      final pocket = await pocketWithStore(blobStore: store);
      final rec = generateRecordId();
      await pocket.collection('widgets').put({'id': rec, 'name': 'w'});
      final ref = await pocket.files.attach(
        store: 'widgets',
        recordId: rec,
        bytes: Stream.value(utf8.encode('purged before upload')),
        allowVolatileBlobs: true,
      );

      await pocket.collection('widgets').purge(rec);

      expect(await pocket.files.list(store: 'widgets', recordId: rec), isEmpty);
      final ops = await pocket.db.query('lp_op_queue',
          where: "kind = 'fileUpload' AND record_id = ?", whereArgs: [rec]);
      expect(ops, isNotEmpty);
      expect(ops.every((o) => o['state'] == 'done'), isTrue,
          reason: 'purge neutralizes the pending upload op');
      expect(
          (await pocket.db
                  .query('lp_blobs', where: 'hash = ?', whereArgs: [ref.hash]))
              .single['refcount'],
          0);
    });
  });

  group('FileRef row-model corruption', () {
    test('fromRow wraps malformed rows in a typed StorageError', () {
      // Parity with SyncRowState/OutboxOp/OpQueueRow/ConflictRecord: a corrupt
      // lp_file_refs row raises a typed StorageError, never a raw TypeError.
      expect(
          () => FileRef.fromRow({'ref_id': 123}),
          throwsA(isA<StorageError>().having(
              (e) => e.message, 'message', contains('Corrupt lp_file_refs'))));
      for (final row in [
        // Missing required columns.
        {'ref_id': 'ok', 'store': 'widgets'},
        // Wrong-typed required columns.
        {
          'ref_id': 'ok',
          'store': 5,
          'record_id': 'r',
          'field': 'attachments',
          'hash': 'h',
          'state': 'x'
        },
        {
          'ref_id': 'ok',
          'store': 'widgets',
          'record_id': 'r',
          'field': 'attachments',
          'hash': 'h',
          'state': 9
        },
        {
          'ref_id': 'ok',
          'store': 'widgets',
          'record_id': 'r',
          'field': 3,
          'hash': 'h',
          'state': 'x'
        },
      ]) {
        expect(() => FileRef.fromRow(row), throwsA(isA<StorageError>()));
      }

      // A well-formed row still parses (optional columns default safely).
      final ok = FileRef.fromRow({
        'ref_id': 'ok',
        'store': 'widgets',
        'record_id': 'r',
        'field': 'attachments',
        'hash': 'a' * 64,
        'remote_name': 'f.png',
        'state': 'synced',
        'next_retry_at': 5,
        'attempt_count': 2,
        'last_error': null,
      });
      expect(ok.remoteName, 'f.png');
      expect(ok.attemptCount, 2);
      expect(ok.nextRetryAt, 5);
    });
  });

  group('blob last-access touch', () {
    test('open() advances lp_blobs.last_access on the read', () async {
      var clock = 1000000;
      final dbPath = await tempDbPath();
      final pocket = await openPocket(
        path: dbPath.path,
        blobStore: MemoryBlobStore(),
        stores: [
          CollectionSchema(
            name: 'widgets',
            version: 1,
            fields: [Field.text('name', required: true)],
          ),
        ],
        now: () => clock,
      );
      addTearDown(() async {
        await pocket.close();
        await dbPath.cleanup();
      });
      final rec = generateRecordId();
      await pocket.collection('widgets').put({'id': rec, 'name': 'w'});
      final ref = await pocket.files.attach(
          store: 'widgets',
          recordId: rec,
          bytes: Stream.value(utf8.encode('file')),
          allowVolatileBlobs: true);
      expect(
          (await pocket.db
                  .query('lp_blobs', where: 'hash = ?', whereArgs: [ref.hash]))
              .single['last_access'],
          1000000,
          reason: 'attach stamps last_access with the current clock');

      // Rewind the stored last_access, then read: open() must re-touch it.
      clock += 5000;
      await pocket.db.execute(
          'UPDATE lp_blobs SET last_access = 0 WHERE hash = ?', [ref.hash]);
      final stream = await pocket.files.open(store: 'widgets', recordId: rec);
      await stream.drain<void>();

      expect(
          (await pocket.db
                  .query('lp_blobs', where: 'hash = ?', whereArgs: [ref.hash]))
              .single['last_access'],
          1005000,
          reason: 'open() re-touches last_access with the current clock');
    });
  });
}
