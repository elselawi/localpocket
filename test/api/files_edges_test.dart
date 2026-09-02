import 'dart:async';
import 'dart:typed_data';

import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../support/fixtures/tasks_store.dart';

/// File-API edges not covered by the streaming suites: the value identity of
/// [FileRef], the buffered (no declared length) upload path, and the abort
/// path when a declared size disagrees with the bytes.
void main() {
  late LocalPocket db;
  late Store<Tasks> tasks;

  setUp(() async {
    db = await LocalPocket.open(LocalPocketOptions(
      path: ':memory:',
      stores: [Tasks.store],
      blobStore: MemoryBlobStore(),
    ));
    tasks = db.store(Tasks.store);
  });
  tearDown(() => db.close());

  Uint8List payload(int length, [int start = 0]) {
    final bytes = Uint8List(length);
    for (var i = 0; i < length; i++) {
      bytes[i] = (start + i) & 0xFF;
    }
    return bytes;
  }

  group('FileRef value identity', () {
    test('equality keys on refId and state', () async {
      final id = (await tasks.put([Tasks.title.set('with-file')])).id;
      final ref = await tasks.files.attach(
        recordId: id,
        source: FileSource.bytes(payload(64), name: 'a.bin'),
        allowVolatileBlobs: true,
      );
      final listed = (await tasks.files.list(recordId: id)).single;

      expect(ref, equals(listed));
      expect(ref.hashCode, listed.hashCode);
      expect(ref == Object(), isFalse);
      expect(ref.toString(), contains(ref.refId));
      expect(ref.toString(), contains(ref.state));
    });
  });

  group('buffered upload path', () {
    test('a stream without a declared length buffers, chunks, and finishes',
        () async {
      final id = (await tasks.put([Tasks.title.set('buffered')])).id;
      // Smaller than one chunk window plus an exact-multiple boundary.
      final bytes = payload(300);

      final ref = await tasks.files.attach(
        recordId: id,
        source: FileSource.stream(
          Stream<List<int>>.fromIterable([
            bytes.sublist(0, 7),
            bytes.sublist(7, 100),
            bytes.sublist(100),
          ]),
          name: 'buffered.bin',
        ),
        allowVolatileBlobs: true,
      );

      expect(ref.state, anyOf('pending_upload', 'synced'));
      final listed = (await tasks.files.list(recordId: id)).single;
      expect(listed.hash, ref.hash);

      final chunks = await (await tasks.files.open(ref)).toList();
      expect([for (final c in chunks) ...c], bytes);
    });

    test('a declared length that disagrees with the bytes aborts loudly',
        () async {
      final id = (await tasks.put([Tasks.title.set('mismatch')])).id;
      await expectLater(
        tasks.files.attach(
          recordId: id,
          source: FileSource.stream(
            Stream.value(payload(64)),
            length: 100,
            name: 'short.bin',
          ),
          allowVolatileBlobs: true,
        ),
        throwsA(isA<StateError>()),
      );
      // The kernel must not retain the partial upload as a visible ref.
      expect(await tasks.files.list(recordId: id), isEmpty);
    });

    test('a mid-upload source failure aborts the session', () async {
      final id = (await tasks.put([Tasks.title.set('crash')])).id;
      Stream<List<int>> broken() async* {
        yield payload(32);
        throw StateError('source vanished');
      }

      await expectLater(
        tasks.files.attach(
          recordId: id,
          source: FileSource.stream(broken(), name: 'broken.bin'),
          allowVolatileBlobs: true,
        ),
        throwsA(isA<StateError>()),
      );
      expect(await tasks.files.list(recordId: id), isEmpty,
          reason: 'the aborted session leaves no visible reference');
    });

    test('cancelling an open download releases the stream', () async {
      final id = (await tasks.put([Tasks.title.set('cancel')])).id;
      final ref = await tasks.files.attach(
        recordId: id,
        source: FileSource.bytes(payload(4096), name: 'cancel.bin'),
        allowVolatileBlobs: true,
      );

      final stream = await tasks.files.open(ref);
      final got = <int>[];
      final sub = stream.listen(got.addAll);
      await sub.cancel(); // explicit cancel: releases the kernel stream
      // The handle stays usable afterwards.
      expect((await tasks.files.list(recordId: id)), isNotEmpty);
    });

    test('a paused consumer stops the credit flow, not buffers forever',
        () async {
      final id = (await tasks.put([Tasks.title.set('slow')])).id;
      // Larger than the kernel download window: the kernel pauses its source
      // until the facade credits the consumed bytes back, so a paused
      // consumer must leave the stream unfinished instead of the facade
      // crediting on arrival and letting the buffer grow.
      final bytes = payload(1048576 + 4096);
      final ref = await tasks.files.attach(
        recordId: id,
        source: FileSource.bytes(bytes, name: 'slow.bin'),
        allowVolatileBlobs: true,
      );

      final stream = await tasks.files.open(ref);
      final got = <int>[];
      var done = false;
      late final StreamSubscription<List<int>> sub;
      sub = stream.listen(
        (chunk) {
          got.addAll(chunk);
          // Consume the first arrival, then stop pulling: the consumer
          // wedges.
          sub.pause();
        },
        onDone: () => done = true,
      );
      addTearDown(sub.cancel);

      // While paused, the stream must NOT complete: credits go out only
      // when the consumer keeps up, so the terminal event stays pending.
      await Future<void>.delayed(const Duration(milliseconds: 150));
      expect(got, isNotEmpty, reason: 'the first window was delivered');
      expect(done, isFalse,
          reason: 'a paused consumer must not be credited on arrival');

      // Resuming drains the rest to a terminal completion.
      await Future<void>.delayed(const Duration(milliseconds: 50));
      sub.resume();
      final deadline = DateTime.now().add(const Duration(seconds: 5));
      while (!done && DateTime.now().isBefore(deadline)) {
        await Future<void>.delayed(const Duration(milliseconds: 10));
      }
      expect(done, isTrue, reason: 'resuming completes the stream');
      expect(got.length, bytes.length);
    });
  });
}
