import 'package:localpocket/src/web/facade/web_files.dart';
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
}
