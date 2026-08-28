import 'package:localpocket/src/web/facade/web_files.dart';
import 'package:localpocket/src/web/protocol.dart';
import 'package:test/test.dart';

import 'support/fake_facade_host.dart';

void main() {
  late FakeFacadeHost fake;
  late WebLocalPocketFiles files;

  setUp(() {
    fake = FakeFacadeHost({});
    files = WebLocalPocketFiles.ins(fake);
  });

  test('byteArray is uploaded directly as the payload with the defaults',
      () async {
    final result = await files.attach(
      store: 'widgets',
      recordId: 'rec1',
      byteArray: [1, 2, 3],
    );

    expect(result, isA<Map<String, Object?>>());
    expect(fake.filesUploadCalls, hasLength(1));
    final call = fake.filesUploadCalls.single;
    expect(call.store, 'widgets');
    expect(call.recordId, 'rec1');
    expect(call.bytes, [1, 2, 3]);
    expect(call.field, 'imgs');
    expect(call.name, 'blob.bin', reason: 'the default name is blob.bin');
    expect(call.expectedSize, isNull);
    expect(call.expectedSha256, isNull);
  });

  test('a bytes stream is fully collected before being uploaded', () async {
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

    final call = fake.filesUploadCalls.single;
    expect(call.bytes, [1, 2, 3, 4, 5]);
    expect(call.name, 'photo.png');
    expect(call.expectedSize, 5);
    expect(call.expectedSha256, 'deadbeef');
  });

  test(
      'providing neither bytes nor byteArray throws ArgumentError and never '
      'delegates', () async {
    await expectLater(
      files.attach(store: 'widgets', recordId: 'rec3'),
      throwsA(isA<ArgumentError>()),
    );
    expect(fake.filesUploadCalls, isEmpty);
  });

  test('byteArray takes precedence over a bytes stream when both are given',
      () async {
    await files.attach(
      store: 'widgets',
      recordId: 'rec4',
      byteArray: [9, 8],
      bytes: Stream.fromIterable([
        [1, 2]
      ]),
    );
    expect(fake.filesUploadCalls.single.bytes, [9, 8]);
  });

  test('attach forwards allowVolatileBlobs to the host', () async {
    // Default: the flag stays false (the worker refuses volatile stores).
    await files.attach(store: 'widgets', recordId: 'rec5', byteArray: [1]);
    expect(fake.filesUploadCalls.single.allowVolatileBlobs, isFalse);

    // Explicit opt-in is forwarded so the worker's attach accepts the
    // volatile in-memory fallback.
    await files.attach(
      store: 'widgets',
      recordId: 'rec6',
      byteArray: [1],
      allowVolatileBlobs: true,
    );
    expect(fake.filesUploadCalls.last.allowVolatileBlobs, isTrue);
  });

  test('isBlobStorageDurable reports the worker-owned store durability',
      () async {
    // The worker replies that its WebBlobStore is OPFS-backed.
    fake.responses[WireOp.fileStorageStatus] = {'durable': true};
    expect(await files.isBlobStorageDurable, isTrue);
    expect(fake.sentOps, contains(WireOp.fileStorageStatus));

    // Volatile in-memory fallback reports non-durable.
    fake.sent.clear();
    fake.responses[WireOp.fileStorageStatus] = {'durable': false};
    expect(await files.isBlobStorageDurable, isFalse);
    expect(fake.sentOps, contains(WireOp.fileStorageStatus));
  });

  test('isBlobStorageDurable degrades to false on a malformed reply',
      () async {
    fake.responses[WireOp.fileStorageStatus] = {'durable': 'yes'};
    expect(await files.isBlobStorageDurable, isFalse);
    fake.responses[WireOp.fileStorageStatus] = null;
    expect(await files.isBlobStorageDurable, isFalse);
  });

  test('list forwards store, recordId, and the field default', () async {
    final refs = await files.list(store: 'widgets', recordId: 'rec-list');
    expect(refs, isEmpty);
    expect(fake.filesListCalls, hasLength(1));
    final call = fake.filesListCalls.single;
    expect(call.store, 'widgets');
    expect(call.recordId, 'rec-list');
    expect(call.field, 'imgs', reason: 'the default field is imgs');

    await files.list(store: 'widgets', recordId: 'rec-list', field: 'docs');
    expect(fake.filesListCalls.last.field, 'docs');
  });

  test('open forwards index/refId and returns the raw bytes', () async {
    final bytes = await files.open(
      store: 'widgets',
      recordId: 'rec-open',
      field: 'imgs',
      index: 2,
      refId: 'ref_abc',
    );
    expect(bytes, isEmpty);
    expect(fake.filesOpenCalls, hasLength(1));
    final call = fake.filesOpenCalls.single;
    expect(call.store, 'widgets');
    expect(call.recordId, 'rec-open');
    expect(call.index, 2);
    expect(call.refId, 'ref_abc');
    expect(call.field, 'imgs');
  });

  test('remove forwards index/refId and completes', () async {
    await files.remove(
      store: 'widgets',
      recordId: 'rec-remove',
      index: 1,
      refId: 'ref_xyz',
    );
    expect(fake.filesRemoveCalls, hasLength(1));
    final call = fake.filesRemoveCalls.single;
    expect(call.store, 'widgets');
    expect(call.recordId, 'rec-remove');
    expect(call.index, 1);
    expect(call.refId, 'ref_xyz');
  });

  test('gc forwards the grace durations (defaults and overrides)', () async {
    await files.gc();
    expect(fake.filesGcCalls, hasLength(1));
    var call = fake.filesGcCalls.single;
    expect(call.blobGrace, const Duration(days: 7));
    expect(call.tmpGrace, const Duration(hours: 24));

    await files.gc(
      blobGrace: const Duration(days: 1),
      tmpGrace: const Duration(minutes: 5),
    );
    call = fake.filesGcCalls.last;
    expect(call.blobGrace, const Duration(days: 1));
    expect(call.tmpGrace, const Duration(minutes: 5));
  });

  test('enforceStorageCap forwards maxBytes and returns the evicted count',
      () async {
    final evicted = await files.enforceStorageCap(maxBytes: 1024);
    expect(evicted, 0);
    expect(fake.filesEnforceStorageCapCalls, hasLength(1));
    expect(fake.filesEnforceStorageCapCalls.single.maxBytes, 1024);
  });
}
