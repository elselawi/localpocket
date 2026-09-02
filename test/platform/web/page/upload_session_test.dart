import 'dart:typed_data';

import 'package:localpocket/src/kernel/errors.dart';
import 'package:localpocket/src/kernel/local_pocket.dart';
import 'package:test/test.dart';

void main() {
  group('FileUploadSessionRegistry', () {
    test('creates and retrieves active session', () {
      final registry = FileUploadSessionRegistry(
        maxConcurrentUploads: 2,
        maxFileBytes: 1024 * 1024,
        maxChunkBytes: 256 * 1024,
      );

      final session = registry.begin(
        sessionId: 'u1',
        store: 'tasks',
        recordId: 'task000000000001',
        field: 'attachments',
        name: 'test.png',
        expectedSize: 100,
        expectedSha256: null,
      );

      expect(registry.activeSessionCount, 1);
      expect(registry.get('u1'), same(session));
      expect(session.sessionId, 'u1');
    });

    test('enforces maxConcurrentUploads', () {
      final registry = FileUploadSessionRegistry(
        maxConcurrentUploads: 2,
        maxFileBytes: 1024 * 1024,
        maxChunkBytes: 256 * 1024,
      );

      registry.begin(
        sessionId: 'u1',
        store: 'tasks',
        recordId: 'rec1',
        expectedSize: 10,
      );
      registry.begin(
        sessionId: 'u2',
        store: 'tasks',
        recordId: 'rec2',
        expectedSize: 10,
      );

      expect(
        () => registry.begin(
          sessionId: 'u3',
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
      final registry = FileUploadSessionRegistry(
        maxConcurrentUploads: 5,
        maxFileBytes: 1000,
        maxChunkBytes: 256,
      );

      expect(
        () => registry.begin(
          sessionId: 'u1',
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
          sessionId: 'u2',
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
      final registry = FileUploadSessionRegistry(
        maxConcurrentUploads: 2,
        maxFileBytes: 1000,
        maxChunkBytes: 50,
      );

      registry.begin(
        sessionId: 'u1',
        store: 'tasks',
        recordId: 'rec1',
        expectedSize: 60,
      );

      // Oversized chunk rejected and session aborted/cleaned up
      expect(
        () => registry.addChunk(
          sessionId: 'u1',
          chunk: Uint8List(51),
        ),
        throwsA(isA<ValidationException>().having(
          (e) => e.message,
          'message',
          contains('Chunk too large'),
        )),
      );
      // Session should be removed on error so memory does not leak
      expect(registry.get('u1'), isNull);
      expect(registry.activeSessionCount, 0);

      // New session with overflow test
      registry.begin(
        sessionId: 'u2',
        store: 'tasks',
        recordId: 'rec2',
        expectedSize: 30,
      );
      registry.addChunk(sessionId: 'u2', chunk: Uint8List(20));

      expect(
        () => registry.addChunk(sessionId: 'u2', chunk: Uint8List(15)),
        throwsA(isA<ValidationException>().having(
          (e) => e.message,
          'message',
          contains('exceeds declared size'),
        )),
      );
      // Session removed on overflow
      expect(registry.get('u2'), isNull);
    });

    test('abort removes the session and releases memory', () {
      final registry = FileUploadSessionRegistry();

      registry.begin(
        sessionId: 'u1',
        store: 'tasks',
        recordId: 'rec1',
        expectedSize: 100,
      );
      registry.addChunk(sessionId: 'u1', chunk: Uint8List(50));
      expect(registry.activeSessionCount, 1);

      final aborted = registry.abort('u1');
      expect(aborted, isTrue);
      expect(registry.activeSessionCount, 0);
      expect(registry.get('u1'), isNull);

      // Aborting nonexistent session returns false
      expect(registry.abort('u1'), isFalse);
    });

    test('takeForFinish removes session and validates exact size match', () {
      final registry = FileUploadSessionRegistry();

      registry.begin(
        sessionId: 'u1',
        store: 'tasks',
        recordId: 'rec1',
        expectedSize: 40,
      );
      registry.addChunk(sessionId: 'u1', chunk: Uint8List(20));

      // Underflow when finishing
      expect(
        () => registry.takeForFinish('u1'),
        throwsA(isA<ValidationException>().having(
          (e) => e.message,
          'message',
          contains('Upload size mismatch'),
        )),
      );
      // Session removed on finish failure so it does not leak
      expect(registry.get('u1'), isNull);
      expect(registry.activeSessionCount, 0);

      // Exact match success
      registry.begin(
        sessionId: 'u2',
        store: 'tasks',
        recordId: 'rec2',
        expectedSize: 30,
      );
      registry.addChunk(sessionId: 'u2', chunk: Uint8List(30));
      final finished = registry.takeForFinish('u2');

      expect(finished.sessionId, 'u2');
      expect(finished.receivedBytes, 30);
      expect(registry.activeSessionCount, 0);
    });

    test('clear removes all sessions', () {
      final registry = FileUploadSessionRegistry();
      registry.begin(sessionId: 'u1', store: 's', recordId: 'r', expectedSize: 10);
      registry.begin(sessionId: 'u2', store: 's', recordId: 'r', expectedSize: 10);
      expect(registry.activeSessionCount, 2);

      registry.clear();
      expect(registry.activeSessionCount, 0);
    });

    test('enforces the aggregate byte quota across sessions', () {
      final registry = FileUploadSessionRegistry(
        maxConcurrentUploads: 4,
        maxFileBytes: 1000,
        maxTotalBytes: 1500,
        maxChunkBytes: 256,
      );

      registry.begin(
        sessionId: 'u1',
        store: 's',
        recordId: 'r1',
        expectedSize: 1000,
      );
      registry.begin(
        sessionId: 'u2',
        store: 's',
        recordId: 'r2',
        expectedSize: 500,
      );
      expect(registry.totalDeclaredBytes, 1500);

      expect(
        () => registry.begin(
          sessionId: 'u3',
          store: 's',
          recordId: 'r3',
          expectedSize: 1,
        ),
        throwsA(isA<ValidationException>().having(
          (e) => e.message,
          'message',
          contains('Aggregate upload quota exceeded'),
        )),
      );

      // Releasing a session frees its reservation for new uploads.
      registry.abort('u1');
      expect(registry.totalDeclaredBytes, 500);
      registry.begin(
        sessionId: 'u3',
        store: 's',
        recordId: 'r3',
        expectedSize: 1000,
      );
      expect(registry.totalDeclaredBytes, 1500);
    });

    test('expired sessions stop reserving aggregate quota on next begin', () {
      var clock = DateTime(2026, 1, 1, 12);
      final registry = FileUploadSessionRegistry(
        maxConcurrentUploads: 2,
        maxFileBytes: 1500,
        maxTotalBytes: 1500,
        sessionTtl: const Duration(minutes: 5),
        now: () => clock,
      );

      registry.begin(
        sessionId: 'u1',
        store: 's',
        recordId: 'r1',
        expectedSize: 1000,
      );
      registry.begin(
        sessionId: 'u2',
        store: 's',
        recordId: 'r2',
        expectedSize: 500,
      );

      // Both sessions are stale by now; begin() sweeps them before checking
      // the quota, so a fresh full-quota session fits.
      clock = clock.add(const Duration(minutes: 6));
      final fresh = registry.begin(
        sessionId: 'u3',
        store: 's',
        recordId: 'r3',
        expectedSize: 1500,
      );
      expect(fresh.sessionId, 'u3');
      expect(registry.activeSessionCount, 1);
      expect(registry.totalDeclaredBytes, 1500);
    });

    test('addChunk on an expired session throws and removes the session', () {
      var clock = DateTime(2026, 1, 1, 12);
      final registry = FileUploadSessionRegistry(
        maxFileBytes: 1000,
        sessionTtl: const Duration(minutes: 5),
        now: () => clock,
      );

      registry.begin(
        sessionId: 'u1',
        store: 's',
        recordId: 'r1',
        expectedSize: 10,
      );
      clock = clock.add(const Duration(minutes: 5, seconds: 1));

      expect(
        () => registry.addChunk(sessionId: 'u1', chunk: Uint8List(1)),
        throwsA(isA<ValidationException>().having(
          (e) => e.message,
          'message',
          contains('expired'),
        )),
      );
      expect(registry.get('u1'), isNull);
      expect(registry.activeSessionCount, 0);
      expect(registry.totalDeclaredBytes, 0);
    });

    test('each accepted chunk refreshes the session TTL', () {
      var clock = DateTime(2026, 1, 1, 12);
      final registry = FileUploadSessionRegistry(
        maxFileBytes: 1000,
        sessionTtl: const Duration(minutes: 5),
        now: () => clock,
      );

      registry.begin(
        sessionId: 'u1',
        store: 's',
        recordId: 'r1',
        expectedSize: 10,
      );

      // Both chunks arrive within a refreshed TTL window and are accepted.
      clock = clock.add(const Duration(minutes: 4));
      registry.addChunk(sessionId: 'u1', chunk: Uint8List(1));
      clock = clock.add(const Duration(minutes: 4));
      registry.addChunk(sessionId: 'u1', chunk: Uint8List(1));

      // t+13:01 exceeds the last refresh (t+8) by more than the TTL → expired.
      clock = clock.add(const Duration(minutes: 5, seconds: 1));
      expect(
        () => registry.addChunk(sessionId: 'u1', chunk: Uint8List(1)),
        throwsA(isA<ValidationException>().having(
          (e) => e.message,
          'message',
          contains('expired'),
        )),
      );
    });

    test('takeForFinish on an expired session throws and releases it', () {
      var clock = DateTime(2026, 1, 1, 12);
      final registry = FileUploadSessionRegistry(
        maxFileBytes: 1000,
        sessionTtl: const Duration(minutes: 5),
        now: () => clock,
      );

      registry.begin(
        sessionId: 'u1',
        store: 's',
        recordId: 'r1',
        expectedSize: 10,
      );
      registry.addChunk(sessionId: 'u1', chunk: Uint8List(10));
      clock = clock.add(const Duration(minutes: 6));

      expect(
        () => registry.takeForFinish('u1'),
        throwsA(isA<ValidationException>().having(
          (e) => e.message,
          'message',
          contains('expired'),
        )),
      );
      expect(registry.activeSessionCount, 0);
    });

    test('expireStaleSessions removes only expired sessions', () {
      var clock = DateTime(2026, 1, 1, 12);
      final registry = FileUploadSessionRegistry(
        maxConcurrentUploads: 2,
        maxFileBytes: 1000,
        sessionTtl: const Duration(minutes: 5),
        now: () => clock,
      );

      registry.begin(
        sessionId: 'u1',
        store: 's',
        recordId: 'r1',
        expectedSize: 100,
      );
      registry.begin(
        sessionId: 'u2',
        store: 's',
        recordId: 'r2',
        expectedSize: 200,
      );
      clock = clock.add(const Duration(minutes: 4));
      registry.addChunk(sessionId: 'u2', chunk: Uint8List(1)); // refresh 2 only

      clock = clock.add(const Duration(minutes: 2));
      expect(registry.expireStaleSessions(), 1);
      expect(registry.get('u1'), isNull);
      expect(registry.get('u2'), isNotNull);
      expect(registry.activeSessionCount, 1);
      expect(registry.totalDeclaredBytes, 200);

      // A still-live session finishes normally.
      registry.addChunk(sessionId: 'u2', chunk: Uint8List(199));
      expect(registry.takeForFinish('u2').receivedBytes, 200);
      expect(registry.totalDeclaredBytes, 0);
    });

    test('normal upload works under quota and TTL', () {
      var clock = DateTime(2026, 1, 1);
      final registry = FileUploadSessionRegistry(
        maxConcurrentUploads: 2,
        maxFileBytes: 1000,
        maxTotalBytes: 1000,
        sessionTtl: const Duration(minutes: 5),
        now: () => clock,
      );

      registry.begin(
        sessionId: 'u1',
        store: 's',
        recordId: 'r1',
        expectedSize: 4,
      );
      clock = clock.add(const Duration(minutes: 1));
      registry.addChunk(sessionId: 'u1', chunk: Uint8List(2));
      registry.addChunk(sessionId: 'u1', chunk: Uint8List(2));

      final finished = registry.takeForFinish('u1');
      expect(finished.receivedBytes, 4);
      expect(finished.chunks.map((c) => c.length), [2, 2]);
      expect(registry.activeSessionCount, 0);
      expect(registry.totalDeclaredBytes, 0);
    });
  });
}
