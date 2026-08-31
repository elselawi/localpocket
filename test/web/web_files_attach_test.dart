import 'dart:async';
import 'dart:typed_data';

import 'package:localpocket/src/contract/contract.dart' as contract;
import 'package:localpocket/src/web/facade/web_files.dart';
import 'package:localpocket/src/web/protocol.dart';
import 'package:test/test.dart';

import 'support/fake_facade_host.dart';

List<contract.Request> _sentRequests(FakeFacadeHost fake) => [
      for (final (op, args) in fake.sent)
        if (op == WireOp.contractRequest)
          contract.ContractCodec.decodeRequest(
              (args['request']! as Map).cast<String, Object?>()),
    ];

const contract.FileRefData _sampleRef = contract.FileRefData(
  refId: 'ref1',
  store: 'widgets',
  recordId: 'rec1',
  field: 'imgs',
  hash: 'h',
  state: 'pending_upload',
);

void main() {
  late FakeFacadeHost fake;
  late WebLocalPocketFiles files;

  setUp(() {
    fake = FakeFacadeHost({});
    files = WebLocalPocketFiles.ins(fake);
  });

  /// Answers every contract request with [responder]'s result.
  void respondWith(
      contract.Result Function(contract.Request request) responder) {
    fake.onSend = (op, args) async {
      if (op != WireOp.contractRequest) return null;
      final request = contract.ContractCodec.decodeRequest(
          (args['request']! as Map).cast<String, Object?>());
      return FakeFacadeHost.contractReply(responder(request));
    };
  }

  test('byteArray is uploaded via a bounded session with the defaults',
      () async {
    respondWith((request) => switch (request) {
          contract.FileBeginUploadRequest() =>
            const contract.FileUploadSessionResult(
                session: 'u1', maxChunkBytes: 2),
          contract.FileChunkRequest() => const contract.OkResult(),
          contract.FileFinishRequest() => contract.FileRefResult(_sampleRef),
          _ => const contract.OkResult(),
        });

    final result = await files.attach(
      store: 'widgets',
      recordId: 'rec1',
      byteArray: [1, 2, 3],
    );

    expect(result['refId'], 'ref1');
    final requests = _sentRequests(fake);
    final begin = requests.first as contract.FileBeginUploadRequest;
    expect(begin.store, 'widgets');
    expect(begin.recordId, 'rec1');
    expect(begin.size, 3);
    expect(begin.field, 'imgs', reason: 'the default field is imgs');
    expect(begin.name, 'blob.bin', reason: 'the default name is blob.bin');
    expect(begin.expectedSha256, isNull);
    expect(begin.allowVolatileBlobs, isFalse);

    // Two chunks of <= maxChunkBytes (2) carry the whole payload.
    final chunks = requests.whereType<contract.FileChunkRequest>().toList();
    expect(chunks, hasLength(2));
    expect(chunks.expand((c) => c.chunk), [1, 2, 3]);
    expect(chunks.every((c) => c.session == 'u1'), isTrue);
    expect(requests.last, isA<contract.FileFinishRequest>());
  });

  test('a bytes stream is fully collected before being uploaded', () async {
    respondWith((request) => switch (request) {
          contract.FileBeginUploadRequest() =>
            const contract.FileUploadSessionResult(
                session: 'u1', maxChunkBytes: 2),
          contract.FileChunkRequest() => const contract.OkResult(),
          contract.FileFinishRequest() => contract.FileRefResult(_sampleRef),
          _ => const contract.OkResult(),
        });

    await files.attach(
      store: 'widgets',
      recordId: 'rec2',
      bytes: Stream.fromIterable([
        [1, 2],
        [3, 4],
        [],
        [5],
      ]),
      name: 'photo.png',
      expectedSize: 5,
      expectedSha256: 'deadbeef',
      field: 'imgs',
    );

    final begin = _sentRequests(fake).first as contract.FileBeginUploadRequest;
    expect(begin.size, 5);
    expect(begin.name, 'photo.png');
    expect(begin.expectedSha256, 'deadbeef');
    expect(begin.field, 'imgs');
  });

  test(
      'providing neither bytes nor byteArray throws ArgumentError and never '
      'delegates', () async {
    await expectLater(
      files.attach(store: 'widgets', recordId: 'rec3'),
      throwsA(isA<ArgumentError>()),
    );
    expect(fake.sent, isEmpty);
  });

  test('byteArray takes precedence over a bytes stream when both are given',
      () async {
    respondWith((request) => switch (request) {
          contract.FileBeginUploadRequest() =>
            const contract.FileUploadSessionResult(
                session: 'u1', maxChunkBytes: 8),
          contract.FileChunkRequest() => const contract.OkResult(),
          contract.FileFinishRequest() => contract.FileRefResult(_sampleRef),
          _ => const contract.OkResult(),
        });
    await files.attach(
      store: 'widgets',
      recordId: 'rec4',
      byteArray: [9, 8],
      bytes: Stream.fromIterable([
        [1, 2]
      ]),
    );
    final chunks = _sentRequests(fake).whereType<contract.FileChunkRequest>();
    expect(chunks.expand((c) => c.chunk), [9, 8]);
  });

  test('attach forwards allowVolatileBlobs on the typed request', () async {
    respondWith((request) => switch (request) {
          contract.FileBeginUploadRequest() =>
            const contract.FileUploadSessionResult(
                session: 'u1', maxChunkBytes: 8),
          contract.FileChunkRequest() => const contract.OkResult(),
          contract.FileFinishRequest() => contract.FileRefResult(_sampleRef),
          _ => const contract.OkResult(),
        });

    // Default: the flag stays false (the worker refuses volatile stores).
    await files.attach(store: 'widgets', recordId: 'rec5', byteArray: [1]);
    expect(
        (_sentRequests(fake).first as contract.FileBeginUploadRequest)
            .allowVolatileBlobs,
        isFalse);

    // Explicit opt-in is forwarded so the finish accepts the volatile
    // in-memory fallback.
    fake.sent.clear();
    await files.attach(
      store: 'widgets',
      recordId: 'rec6',
      byteArray: [1],
      allowVolatileBlobs: true,
    );
    expect(
        (_sentRequests(fake).first as contract.FileBeginUploadRequest)
            .allowVolatileBlobs,
        isTrue);
  });

  test('an expectedSize mismatch fails before any request is sent', () async {
    await expectLater(
      files.attach(
        store: 'widgets',
        recordId: 'r',
        byteArray: [1],
        expectedSize: 5,
      ),
      throwsA(isA<StateError>()),
    );
    expect(fake.sent, isEmpty);
  });

  test('a failed chunk sends the typed abort and rethrows', () async {
    respondWith((request) {
      if (request is contract.FileBeginUploadRequest) {
        return const contract.FileUploadSessionResult(
            session: 'u1', maxChunkBytes: 8);
      }
      if (request is contract.FileChunkRequest) {
        throw StateError('chunk rejected');
      }
      return const contract.OkResult();
    });

    await expectLater(
      files.attach(store: 'widgets', recordId: 'rec7', byteArray: [1, 2, 3]),
      throwsA(isA<StateError>()),
    );
    expect(_sentRequests(fake).last, isA<contract.FileAbortRequest>());
  });

  test('isBlobStorageDurable reports the worker-owned store durability',
      () async {
    respondWith((request) => const contract.StorageStatusResult(durable: true));
    expect(await files.isBlobStorageDurable, isTrue);
    expect(_sentRequests(fake).single, isA<contract.StorageStatusRequest>());

    // Volatile in-memory fallback reports non-durable.
    fake.sent.clear();
    respondWith(
        (request) => const contract.StorageStatusResult(durable: false));
    expect(await files.isBlobStorageDurable, isFalse);
  });

  test('list forwards store, recordId, and the field default', () async {
    respondWith((request) => contract.FileRefsResult([
          contract.FileRefData(
            refId: 'r1',
            store: 'widgets',
            recordId: 'rec-list',
            field: 'imgs',
            hash: 'h',
            state: 'pending_upload',
          ),
        ]));

    final refs = await files.list(store: 'widgets', recordId: 'rec-list');
    expect(refs.single['refId'], 'r1');
    final req = _sentRequests(fake).single as contract.FilesListRequest;
    expect(req.store, 'widgets');
    expect(req.recordId, 'rec-list');
    expect(req.field, 'imgs', reason: 'the default field is imgs');

    fake.sent.clear();
    await files.list(store: 'widgets', recordId: 'rec-list', field: 'docs');
    expect((_sentRequests(fake).single as contract.FilesListRequest).field,
        'docs');
  });

  test(
      'open streams chunk events, credits them back, and tolerates a chunk '
      'that overtakes the open reply', () async {
    const streamId = 'f1';
    respondWith((request) {
      if (request is contract.FileOpenRequest) {
        expect(request.store, 'widgets');
        expect(request.recordId, 'rec-open');
        expect(request.index, 2);
        expect(request.refId, 'ref_abc');
        expect(request.field, 'imgs');
        // Chunk events can overtake the open reply (they travel a different
        // channel); the facade must buffer and not lose them.
        fake.deliverContractEvent(contract.FileChunkEvent(
            stream: streamId, chunk: Uint8List.fromList([1, 2])));
        scheduleMicrotask(() {
          fake.deliverContractEvent(contract.FileChunkEvent(
              stream: streamId, chunk: Uint8List.fromList([3, 4])));
          fake.deliverContractEvent(contract.FileChunkEvent(
              stream: streamId, chunk: Uint8List(0), last: true));
        });
        return contract.FileOpenResult(stream: streamId);
      }
      return const contract.OkResult();
    });

    final bytes = await files.open(
      store: 'widgets',
      recordId: 'rec-open',
      field: 'imgs',
      index: 2,
      refId: 'ref_abc',
    );

    expect(bytes, [1, 2, 3, 4]);
    // Every non-terminal chunk was credited back so the worker keeps
    // streaming under the credit window.
    final credits =
        _sentRequests(fake).whereType<contract.FileCreditRequest>().toList();
    expect(credits.map((c) => c.stream), everyElement(streamId));
    expect(credits.map((c) => c.bytes), everyElement(2));
  });

  test('a failed download stream surfaces the error typed', () async {
    respondWith((request) {
      if (request is contract.FileOpenRequest) {
        scheduleMicrotask(() {
          fake.deliverContractEvent(contract.FileChunkEvent(
            stream: 'f1',
            chunk: Uint8List(0),
            last: true,
            error: 'blob vanished',
          ));
        });
        return const contract.FileOpenResult(stream: 'f1');
      }
      return const contract.OkResult();
    });

    await expectLater(
      files.open(store: 'widgets', recordId: 'rec-err'),
      throwsA(isA<StateError>()
          .having((e) => e.message, 'message', contains('blob vanished'))),
    );
  });

  test('remove/gc/enforceStorageCap ride typed requests', () async {
    respondWith((request) => switch (request) {
          contract.FileGcRequest() => const contract.FileGcResult(cleaned: 3),
          contract.EnforceStorageCapRequest() =>
            const contract.FileCapResult(evicted: 2),
          _ => const contract.OkResult(),
        });

    await files.remove(
      store: 'widgets',
      recordId: 'rec-remove',
      index: 1,
      refId: 'ref_xyz',
    );
    final rm = _sentRequests(fake).single as contract.FileRemoveRequest;
    expect(rm.store, 'widgets');
    expect(rm.recordId, 'rec-remove');
    expect(rm.index, 1);
    expect(rm.refId, 'ref_xyz');
    fake.sent.clear();

    expect(await files.gc(), 3);
    var req = _sentRequests(fake).single as contract.FileGcRequest;
    expect(req.blobGraceMs, const Duration(days: 7).inMilliseconds);
    expect(req.tmpGraceMs, const Duration(hours: 24).inMilliseconds);

    fake.sent.clear();
    expect(
      await files.gc(
        blobGrace: const Duration(days: 1),
        tmpGrace: const Duration(minutes: 5),
      ),
      3,
    );
    req = _sentRequests(fake).single as contract.FileGcRequest;
    expect(req.blobGraceMs, const Duration(days: 1).inMilliseconds);
    expect(req.tmpGraceMs, const Duration(minutes: 5).inMilliseconds);

    fake.sent.clear();
    expect(await files.enforceStorageCap(maxBytes: 1024), 2);
    expect(
        (_sentRequests(fake).single as contract.EnforceStorageCapRequest)
            .maxBytes,
        1024);
  });
}
