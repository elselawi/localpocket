import 'dart:async';
import 'dart:io';

import 'package:localpocket/src/adapters/pocketbase/backend.dart';
import 'package:localpocket/src/kernel/errors.dart' show RemoteOnlyError;
import 'package:localpocket/src/kernel/files/blob_store.dart';
import 'package:localpocket/src/kernel/ids.dart';
import 'package:test/test.dart';

import '../adapters/pocketbase/fake_transport.dart';
import '../support/pb_helpers.dart';
import '../support/helpers.dart';

/// Public API / documentation contract tests.
///
/// Every README promise must either work end-to-end or be protected here so a
/// silent divergence is caught. Where a promise is already covered elsewhere,
/// this test pins the promise phrase in the README and a compact probe of the
/// implementation so the two cannot drift unnoticed.
void main() {
  group('documentation contract', () {
    test('README documents that sync start owns realtime', () async {
      final readme = await File('README.md').readAsString();
      expect(readme, contains('owns realtime'),
          reason: 'the README must tell apps that start() owns realtime');
      expect(readme, contains('no separate realtime command'),
          reason: 'the README must say realtime is not a separate command');
      expect(readme, isNot(contains('startRealtime()')),
          reason: 'the README must not teach a deleted startRealtime command');
      // Sync start OWNS realtime: the backend factory opens the SSE
      // connection when it builds the engine's backend. Pin that wiring in
      // source and pin the seam's behavior directly.
      final backendSrc =
          await File('lib/src/adapters/pocketbase/backend.dart').readAsString();
      expect(backendSrc, contains('Sync start owns realtime'),
          reason: 'the factory comment must state who owns realtime');
      expect(backendSrc, contains('await backend.startRealtime()'),
          reason: 'the factory must open realtime when it builds the backend');
      final fake = FakeTransport();
      fake.streamStatus(200);
      fake.sendStatus(204); // subscribe POST
      final backend = PocketBaseRawBackend(
        baseUrl: Uri.parse('https://pb.test'),
        tokenProvider: TestTokenProvider(),
        stores: const ['widgets'],
        transport: fake,
      );
      addTearDown(backend.close);
      await backend.startRealtime();
      await Future<void>.delayed(const Duration(milliseconds: 40));
      expect(fake.streams, hasLength(1),
          reason: 'the realtime seam opens the SSE connection');
    });

    test('files.open on a remote_only ref throws the documented error',
        () async {
      final readme = await File('README.md').readAsString();
      expect(readme.toLowerCase(),
          anyOf(contains('files.open'), contains('download it first')),
          reason: 'the README documents the remote-only open contract');
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final pocket = await openPocket(
          path: t.path,
          blobStore: MemoryBlobStore(),
          stores: [widgetsSchema()]);
      addTearDown(pocket.close);
      final recId = generateRecordId();
      await pocket.collection('widgets').put({'id': recId, 'name': 'w'});
      // A remote_only ref (no local bytes yet).
      await pocket.db.insert('lp_file_refs', {
        'ref_id': generateRecordId(),
        'store': 'widgets',
        'record_id': recId,
        'field': 'imgs',
        'hash': 'unknown_remote.png',
        'remote_name': 'remote.png',
        'state': 'remote_only',
      });
      await expectLater(
          pocket.files.open(store: 'widgets', recordId: recId),
          throwsA(isA<RemoteOnlyError>()
              .having((e) => e.message, 'message', contains('remote_only'))),
          reason: 'remote_only files must be downloaded before open');
    });

    test('thumbnail is available only on backend.downloadFile(thumb:)',
        () async {
      // The files API itself exposes no thumbnail; the backend download path
      // forwards `thumb` to the wire as a query parameter.
      final fake = FakeTransport();
      fake.streamData(200, const [1, 2, 3]);
      final backend = PocketBaseRawBackend(
        baseUrl: Uri.parse('https://pb.test'),
        tokenProvider: TestTokenProvider(),
        stores: const ['widgets'],
        transport: fake,
      );
      addTearDown(backend.close);
      final stream = await backend.downloadFile(
          recordId: 'r1', filename: 'img.png', thumb: '120x120');
      await stream.drain<void>();
      expect(fake.streams.single.url.queryParameters['thumb'], '120x120');
    });

    test('purge is a hard delete of the row and its blob references', () async {
      final readme = await File('README.md').readAsString();
      expect(readme.toLowerCase(), contains('hard purge'));
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final store = MemoryBlobStore();
      final pocket = await openPocket(
          path: t.path, blobStore: store, stores: [widgetsSchema()]);
      addTearDown(pocket.close);
      final recId = generateRecordId();
      await pocket.collection('widgets').put({'id': recId, 'name': 'w'});
      final ref = await pocket.files.attach(
          store: 'widgets',
          recordId: recId,
          bytes: Stream.value(const [1, 2, 3]),
          allowVolatileBlobs: true);
      await pocket.collection('widgets').purge(recId);

      expect(await pocket.collection('widgets').get(recId), isNull,
          reason: 'hard delete removes the domain row');
      expect(
          await pocket.files.list(store: 'widgets', recordId: recId), isEmpty,
          reason: 'blob references are dropped');
      final blob = (await pocket.db
              .query('lp_blobs', where: 'hash = ?', whereArgs: [ref.hash]))
          .single;
      expect(blob['refcount'], 0, reason: 'refcount released for GC');
      expect(await store.exists(ref.hash), isTrue,
          reason: 'bytes remain until GC reclaims them');
    });

    test(
        'README warns that concurrent edits on PocketBase are '
        'last-write-wins', () async {
      final readme = (await File('README.md').readAsString()).toLowerCase();
      expect(readme, contains('last-write-wins'),
          reason: 'the README must name the last-write-wins resolution');
      expect(readme, contains('concurrent'),
          reason: 'the README must warn about concurrent edits');
      expect(readme.toLowerCase(), contains('pocketbase'),
          reason: 'the warning must call out the PocketBase backend');
      // The wire-level gap is documented where the write happens.
      final backendSource =
          await File('lib/src/adapters/pocketbase/backend.dart').readAsString();
      expect(
        backendSource,
        contains('LAST-WRITE-WINS'),
        reason: 'PocketBaseBackend.updateRecord must document the ignored '
            'baseUpdated',
      );
    });
  });
}
