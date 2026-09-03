import 'dart:async';
import 'dart:convert';
import 'dart:typed_data';

import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../support/fixtures/tasks_store.dart';

void main() {
  LocalPocketOptions blobOptions() => LocalPocketOptions(
        path: ':memory:',
        stores: [Tasks.store],
        blobStore: MemoryBlobStore(),
      );

  group('bounded upload streaming', () {
    test('a declared-length source streams without buffering', () async {
      final db = await LocalPocket.open(blobOptions());
      addTearDown(db.close);
      final tasks = db.store(Tasks.store);
      final row = await tasks.put([Tasks.title.set('doc')]);

      final bytes = List<int>.generate(5000, (i) => i % 251);
      final ref = await tasks.files.attach(
        recordId: row.id,
        source: FileSource.stream(
          Stream<List<int>>.fromIterable([
            bytes.sublist(0, 700), // awkward chunk boundaries vs the
            bytes.sublist(700, 1023), // session's chunk size
            bytes.sublist(1023),
          ]),
          length: bytes.length,
          name: 'blob.bin',
        ),
        field: 'imgs',
        allowVolatileBlobs: true,
      );
      expect(ref.hash, isNotEmpty);

      final stream = await tasks.files.open(ref);
      final got =
          (await stream.fold<List<int>>([], (p, c) => [...p, ...c])).toList();
      expect(got, bytes);
    });

    test('a declared-length mismatch fails with an aborted session', () async {
      final db = await LocalPocket.open(blobOptions());
      addTearDown(db.close);
      final tasks = db.store(Tasks.store);
      final row = await tasks.put([Tasks.title.set('doc')]);

      await expectLater(
        tasks.files.attach(
          recordId: row.id,
          source: FileSource.stream(
            Stream<List<int>>.fromIterable([utf8.encode('short')]),
            length: 100, // lies
            name: 'blob.bin',
          ),
          field: 'imgs',
          allowVolatileBlobs: true,
        ),
        throwsStateError,
      );
      expect(await tasks.files.list(recordId: row.id, field: 'imgs'), isEmpty);
    });

    test('a byte-list source round-trips identically', () async {
      final db = await LocalPocket.open(blobOptions());
      addTearDown(db.close);
      final tasks = db.store(Tasks.store);
      final row = await tasks.put([Tasks.title.set('doc')]);

      final bytes = Uint8List.fromList(utf8.encode('hello attachment'));
      final ref = await tasks.files.attach(
        recordId: row.id,
        source: FileSource.bytes(bytes, name: 'greeting.txt'),
        field: 'imgs',
        allowVolatileBlobs: true,
      );
      final stream = await tasks.files.open(ref);
      final got =
          (await stream.fold<List<int>>([], (p, c) => [...p, ...c])).toList();
      expect(got, bytes);
    });
  });

  group('download close', () {
    test('cancelling a download mid-stream closes it without hanging',
        () async {
      final db = await LocalPocket.open(blobOptions());
      addTearDown(db.close);
      final tasks = db.store(Tasks.store);
      final row = await tasks.put([Tasks.title.set('doc')]);
      final ref = await tasks.files.attach(
        recordId: row.id,
        source: FileSource.bytes(utf8.encode('x' * 64), name: 'x.bin'),
        field: 'imgs',
        allowVolatileBlobs: true,
      );

      // Consume the first chunk, then abandon the subscription: the cancel
      // path sends the typed close request to the kernel, which releases the
      // stream's credit window (an abandoned stream must not stay parked).
      final stream = await tasks.files.open(ref);
      final got = <int>[];
      final sub = stream.listen(got.addAll);
      await Future<void>.delayed(Duration.zero);
      await sub.cancel();

      // The database stays fully usable afterwards.
      final again = await tasks.files.open(ref);
      final bytes =
          (await again.fold<List<int>>([], (p, c) => [...p, ...c])).toList();
      expect(bytes, utf8.encode('x' * 64));
    });
  });
}
