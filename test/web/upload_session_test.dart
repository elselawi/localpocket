import 'dart:typed_data';

import 'package:localpocket/src/core/errors.dart';
import 'package:localpocket/src/web/lifecycle.dart';
import 'package:test/test.dart';

void main() {
  group('UploadSessionRegistry', () {
    test('creates and retrieves active session', () {
      final registry = UploadSessionRegistry(
        maxConcurrentUploads: 2,
        maxFileBytes: 1024 * 1024,
        maxChunkBytes: 256 * 1024,
      );

      final session = registry.begin(
        uploadId: 1,
        store: 'tasks',
        recordId: 'task000000000001',
        field: 'imgs',
        name: 'test.png',
        expectedSize: 100,
        expectedSha256: null,
      );

      expect(registry.activeSessionCount, 1);
      expect(registry.get(1), same(session));
      expect(session.uploadId, 1);
    });

    test('enforces maxConcurrentUploads', () {
      final registry = UploadSessionRegistry(
        maxConcurrentUploads: 2,
        maxFileBytes: 1024 * 1024,
        maxChunkBytes: 256 * 1024,
      );

      registry.begin(
        uploadId: 1,
        store: 'tasks',
        recordId: 'rec1',
        expectedSize: 10,
      );
      registry.begin(
        uploadId: 2,
        store: 'tasks',
        recordId: 'rec2',
        expectedSize: 10,
      );

      expect(
        () => registry.begin(
          uploadId: 3,
          store: 'tasks',
          recordId: 'rec3',
          expectedSize: 10,
        ),
        throwsA(isA<ValidationException>().having(
          (e) => e.message,
          'message',
          contains('Maximum concurrent uploads exceeded'),
        )),
      );
    });

    test('validates file size limits', () {
      final registry = UploadSessionRegistry(
        maxConcurrentUploads: 5,
        maxFileBytes: 1000,
        maxChunkBytes: 256,
      );

      expect(
        () => registry.begin(
          uploadId: 1,
          store: 'tasks',
          recordId: 'rec1',
          expectedSize: -1,
        ),
        throwsA(isA<ValidationException>().having(
          (e) => e.message,
          'message',
          contains('Invalid file size'),
        )),
      );

      expect(
        () => registry.begin(
          uploadId: 2,
          store: 'tasks',
          recordId: 'rec2',
          expectedSize: 1001,
        ),
        throwsA(isA<ValidationException>().having(
          (e) => e.message,
          'message',
          contains('Invalid file size'),
        )),
      );
    });

    test('appends chunks and checks chunk size limits and overflow', () {
      final registry = UploadSessionRegistry(
        maxConcurrentUploads: 2,
        maxFileBytes: 1000,
        maxChunkBytes: 50,
      );

      registry.begin(
        uploadId: 1,
        store: 'tasks',
        recordId: 'rec1',
        expectedSize: 60,
      );

      // Oversized chunk rejected and session aborted/cleaned up
      expect(
        () => registry.addChunk(
          uploadId: 1,
          chunk: Uint8List(51),
        ),
        throwsA(isA<ValidationException>().having(
          (e) => e.message,
          'message',
          contains('Chunk too large'),
        )),
      );
      // Session should be removed on error so memory does not leak
      expect(registry.get(1), isNull);
      expect(registry.activeSessionCount, 0);

      // New session with overflow test
      registry.begin(
        uploadId: 2,
        store: 'tasks',
        recordId: 'rec2',
        expectedSize: 30,
      );
      registry.addChunk(uploadId: 2, chunk: Uint8List(20));

      expect(
        () => registry.addChunk(uploadId: 2, chunk: Uint8List(15)),
        throwsA(isA<ValidationException>().having(
          (e) => e.message,
          'message',
          contains('exceeds declared size'),
        )),
      );
      // Session removed on overflow
      expect(registry.get(2), isNull);
    });

    test('abort removes the session and releases memory', () {
      final registry = UploadSessionRegistry();

      registry.begin(
        uploadId: 1,
        store: 'tasks',
        recordId: 'rec1',
        expectedSize: 100,
      );
      registry.addChunk(uploadId: 1, chunk: Uint8List(50));
      expect(registry.activeSessionCount, 1);

      final aborted = registry.abort(1);
      expect(aborted, isTrue);
      expect(registry.activeSessionCount, 0);
      expect(registry.get(1), isNull);

      // Aborting nonexistent session returns false
      expect(registry.abort(1), isFalse);
    });

    test('takeForFinish removes session and validates exact size match', () {
      final registry = UploadSessionRegistry();

      registry.begin(
        uploadId: 1,
        store: 'tasks',
        recordId: 'rec1',
        expectedSize: 40,
      );
      registry.addChunk(uploadId: 1, chunk: Uint8List(20));

      // Underflow when finishing
      expect(
        () => registry.takeForFinish(1),
        throwsA(isA<ValidationException>().having(
          (e) => e.message,
          'message',
          contains('Upload size mismatch'),
        )),
      );
      // Session removed on finish failure so it does not leak
      expect(registry.get(1), isNull);
      expect(registry.activeSessionCount, 0);

      // Exact match success
      registry.begin(
        uploadId: 2,
        store: 'tasks',
        recordId: 'rec2',
        expectedSize: 30,
      );
      registry.addChunk(uploadId: 2, chunk: Uint8List(30));
      final finished = registry.takeForFinish(2);

      expect(finished.uploadId, 2);
      expect(finished.receivedBytes, 30);
      expect(registry.activeSessionCount, 0);
    });

    test('clear removes all sessions', () {
      final registry = UploadSessionRegistry();
      registry.begin(uploadId: 1, store: 's', recordId: 'r', expectedSize: 10);
      registry.begin(uploadId: 2, store: 's', recordId: 'r', expectedSize: 10);
      expect(registry.activeSessionCount, 2);

      registry.clear();
      expect(registry.activeSessionCount, 0);
    });
  });
}
