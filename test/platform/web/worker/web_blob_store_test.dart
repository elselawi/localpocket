import 'dart:async';
import 'dart:convert';

import 'package:crypto/crypto.dart';
import 'package:localpocket/src/kernel/files/blob_store.dart';
import 'package:test/test.dart';

void main() {
  group('BlobStore in-memory contract (basis for WebBlobStore fallback)', () {
    late MemoryBlobStore store;

    setUp(() {
      store = MemoryBlobStore();
    });

    test('put and open round-trip bytes', () async {
      final data = utf8.encode('Hello WebBlobStore!');
      final hash = await store.put(Stream.value(data));
      expect(hash, sha256.convert(data).toString());

      final stream = await store.open(hash);
      final bytes = await stream.fold<List<int>>([], (p, e) => p..addAll(e));
      expect(utf8.decode(bytes), 'Hello WebBlobStore!');
    });

    test('validates expectedSize and expectedSha256', () async {
      final data = utf8.encode('Test content');
      final correctHash = sha256.convert(data).toString();

      // Mismatched size throws
      expect(
        () => store.put(Stream.value(data), expectedSize: 999),
        throwsStateError,
      );

      // Mismatched SHA-256 throws
      expect(
        () => store.put(Stream.value(data), expectedSha256: '0' * 64),
        throwsStateError,
      );

      // Correct validation succeeds
      final hash = await store.put(
        Stream.value(data),
        expectedSize: data.length,
        expectedSha256: correctHash,
      );
      expect(hash, correctHash);
    });

    test('exists, size, delete, and listHashes', () async {
      final data = utf8.encode('Attachment data');
      final hash = await store.put(Stream.value(data));

      expect(await store.exists(hash), isTrue);
      expect(await store.size(hash), data.length);
      expect(await store.listHashes(), [hash]);

      await store.delete(hash);
      expect(await store.exists(hash), isFalse);
      expect(await store.listHashes(), isEmpty);
    });

    test('rejects malformed hashes', () async {
      expect(() => store.open('short'), throwsArgumentError);
      expect(() => store.open('../traversal/1234'), throwsArgumentError);
      expect(() => store.delete('invalid!'), throwsArgumentError);
    });

    test('cleanTmp is safe and idempotent', () async {
      final count = await store.cleanTmp();
      expect(count, isNonNegative);
    });
  });
}
