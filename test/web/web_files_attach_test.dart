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
}
