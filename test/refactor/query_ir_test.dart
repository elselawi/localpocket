import 'package:localpocket/src/contract/contract.dart';
import 'package:localpocket/src/kernel/query/cursor.dart';
import 'package:localpocket/src/kernel/query/ir.dart';
import 'package:test/test.dart';

void main() {
  group('QueryIR (plan §6.6)', () {
    test('compiles a valid read and stamps the IR version', () {
      final ir = QueryIR.compile(
        store: 'tasks',
        spec: const QuerySpecData(limit: 10),
        schemaFingerprint: 'fp',
      );
      expect(ir.version, queryIrVersion);
      expect(ir.store, 'tasks');
      expect(ir.schemaFingerprint, 'fp');
    });

    test('rejects an empty store name', () {
      expect(
        () => QueryIR.compile(
            store: '', spec: const QuerySpecData(), schemaFingerprint: 'fp'),
        throwsArgumentError,
      );
    });

    test('rejects a negative page size', () {
      expect(
        () => QueryIR.compile(
            store: 'tasks',
            spec: const QuerySpecData(limit: -1),
            schemaFingerprint: 'fp'),
        throwsArgumentError,
      );
    });
  });

  group('KeysetCursorCodec identity (plan Rule 6)', () {
    const codec = KeysetCursorCodec(
      store: 'tasks',
      schemaVersion: 1,
      sortSignature: ['done', 'id'],
      shapeFingerprint: 'shape',
    );

    test('round-trips the forward and backward tuples', () {
      final token = codec.encode(forward: [true, 'b'], backward: [false, 'a']);
      expect(codec.decode(token, backward: false), [true, 'b']);
      expect(codec.decode(token, backward: true), [false, 'a']);
    });

    test('rejects a foreign shape, store, or IR version', () {
      final token = codec.encode(forward: [true, 'b'], backward: [false, 'a']);
      expect(
        () => const KeysetCursorCodec(
          store: 'other',
          schemaVersion: 1,
          sortSignature: ['done', 'id'],
          shapeFingerprint: 'shape',
        ).decode(token, backward: false),
        throwsA(isA<StaleCursorError>()),
      );
      expect(
        () => const KeysetCursorCodec(
          store: 'tasks',
          schemaVersion: 2,
          sortSignature: ['done', 'id'],
          shapeFingerprint: 'shape',
        ).decode(token, backward: false),
        throwsA(isA<StaleCursorError>()),
      );
      expect(
        () => const KeysetCursorCodec(
          store: 'tasks',
          schemaVersion: 1,
          sortSignature: ['done'],
          shapeFingerprint: 'shape',
        ).decode(token, backward: false),
        throwsA(isA<StaleCursorError>()),
      );
      // A hand-crafted token without the IR stamp is stale, not a crash.
      expect(
        () => codec.decode('aW52YWxpZA==', backward: false),
        throwsA(isA<StaleCursorError>()),
      );
    });
  });
}
