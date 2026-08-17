import 'dart:typed_data';

import 'package:localpocket/src/sync/conflicts.dart';
import 'package:localpocket/src/web/conflicts_bridge.dart';
import 'package:localpocket/src/web/conversions.dart';
import 'package:localpocket/src/web/protocol.dart';
import 'package:test/test.dart';

ConflictRecord sampleConflict({
  String store = 'widgets',
  String id = 'widget000000001',
  bool withResolved = false,
}) =>
    ConflictRecord(
      store: store,
      recordId: id,
      base: {
        'name': 'base_name',
        'qty': 10,
        'tags': ['a', 'b']
      },
      local: {'name': 'local_name', 'qty': 11},
      remote: {'name': 'remote_name', 'qty': 20},
      dirtyLocal: {'name'},
      dirtyRemote: {'name', 'qty'},
      detectedAt: 1789000000000,
      resolved: withResolved ? {'name': 'merged_name', 'qty': 15} : null,
    );

void main() {
  group('conflicts wire ops', () {
    test('conflictsList envelope round-trip', () {
      const req = WebRequest(
        version: webProtocolVersion,
        requestId: 1,
        op: WireOp.conflictsList,
        args: {'store': 'widgets'},
      );
      final decoded = WebRequest.fromJson(req.toJson());
      expect(decoded.op, WireOp.conflictsList);
      expect(decoded.args['store'], 'widgets');
    });

    test('conflictsList with no store filter round-trip', () {
      const req = WebRequest(
        version: webProtocolVersion,
        requestId: 2,
        op: WireOp.conflictsList,
      );
      final decoded = WebRequest.fromJson(req.toJson());
      expect(decoded.op, WireOp.conflictsList);
      expect(decoded.args.containsKey('store'), isFalse);
    });

    test('conflictsGet envelope round-trip', () {
      const req = WebRequest(
        version: webProtocolVersion,
        requestId: 3,
        op: WireOp.conflictsGet,
        args: {'store': 'widgets', 'id': 'widget000000001'},
      );
      final decoded = WebRequest.fromJson(req.toJson());
      expect(decoded.op, WireOp.conflictsGet);
      expect(decoded.args['store'], 'widgets');
      expect(decoded.args['id'], 'widget000000001');
    });

    test('conflictsResolve envelope round-trips a wire-encoded merged doc', () {
      final merged = {'name': 'merged_name', 'qty': 42};
      final req = WebRequest(
        version: webProtocolVersion,
        requestId: 4,
        op: WireOp.conflictsResolve,
        args: {
          'store': 'widgets',
          'id': 'widget000000001',
          'merged': encodeWireValue(merged),
        },
      );
      final decoded = WebRequest.fromJson(req.toJson());
      expect(decoded.op, WireOp.conflictsResolve);
      expect(decoded.args['store'], 'widgets');
      final mergedBack = decodeWireValue(decoded.args['merged']) as Map;
      expect(mergedBack['name'], 'merged_name');
      expect(mergedBack['qty'], 42);
    });

    test(
        'conflictsAcceptLocal / conflictsAcceptRemote / conflictsWatch '
        'envelope round-trips', () {
      for (final op in [
        WireOp.conflictsAcceptLocal,
        WireOp.conflictsAcceptRemote,
        WireOp.conflictsWatch,
      ]) {
        final args = <String, Object?>{
          'store': 'widgets',
          'id': 'widget000000001',
        };
        if (op == WireOp.conflictsWatch) {
          args['watchId'] = 99;
        }
        final req = WebRequest(
          version: webProtocolVersion,
          requestId: 5,
          op: op,
          args: args,
        );
        final decoded = WebRequest.fromJson(req.toJson());
        expect(decoded.op, op);
        expect(decoded.args['store'], 'widgets');
        if (op == WireOp.conflictsWatch) {
          expect(decoded.args['watchId'], 99);
        }
      }
    });

    test('all conflicts ops are known to the protocol', () {
      for (final op in [
        WireOp.conflictsList,
        WireOp.conflictsGet,
        WireOp.conflictsResolve,
        WireOp.conflictsAcceptLocal,
        WireOp.conflictsAcceptRemote,
        WireOp.conflictsWatch,
      ]) {
        expect(WireOp.isKnown(op), isTrue, reason: '$op must be known');
      }
    });
  });

  group('ConflictRecord wire bridge', () {
    test('encode/decode round-trip preserves every field', () {
      final original = sampleConflict(withResolved: true);
      final encoded = encodeConflictRecord(original);
      final decoded =
          decodeConflictRecord(encoded.map((k, v) => MapEntry(k, v)));

      expect(decoded.store, original.store);
      expect(decoded.recordId, original.recordId);
      expect(decoded.base, original.base);
      expect(decoded.local, original.local);
      expect(decoded.remote, original.remote);
      expect(decoded.dirtyLocal, original.dirtyLocal);
      expect(decoded.dirtyRemote, original.dirtyRemote);
      expect(decoded.detectedAt, original.detectedAt);
      expect(decoded.resolved, original.resolved);
    });

    test('no resolved field round-trips as null', () {
      final original = sampleConflict();
      final decoded = decodeConflictRecord(
          encodeConflictRecord(original).map((k, v) => MapEntry(k, v)));
      expect(decoded.resolved, isNull);
    });

    test('dirty sets are sorted and decode as real Set<String>', () {
      final original = ConflictRecord(
        store: 's',
        recordId: 'r1',
        base: const {},
        local: const {'x': 1},
        remote: const {'x': 2},
        dirtyLocal: {'z', 'a', 'm'},
        dirtyRemote: {'q'},
        detectedAt: 1,
      );
      final decoded = decodeConflictRecord(
          encodeConflictRecord(original).map((k, v) => MapEntry(k, v)));
      expect(decoded.dirtyLocal, isA<Set<String>>());
      expect(decoded.dirtyLocal, {'a', 'm', 'z'});
      expect(decoded.dirtyRemote, {'q'});
    });

    test('nested wire types (DateTime/BigInt/bytes) survive the round-trip',
        () {
      final now = DateTime.utc(2026, 8, 17, 10, 30);
      final big = BigInt.parse('99999999999999999999999999');
      final bytes = Uint8List.fromList(List<int>.generate(16, (i) => i));
      final original = ConflictRecord(
        store: 's',
        recordId: 'r2',
        base: {'created': now, 'count': big},
        local: {'blob': bytes, 'count': big},
        remote: const {},
        dirtyLocal: {'blob'},
        dirtyRemote: const {},
        detectedAt: 2,
      );
      final encoded = encodeConflictRecord(original);
      // The nested values must be tagged, not raw.
      expect((encoded['base'] as Map)['created'], isA<Map>());
      final decoded =
          decodeConflictRecord(encoded.map((k, v) => MapEntry(k, v)));

      final decodedBase = decoded.base;
      expect(decodedBase['created'], isA<DateTime>());
      expect(decodedBase['created'], now);
      expect(decodedBase['count'], isA<BigInt>());
      // Operational BigInt check (hard rule: decoded BigInts must be usable).
      expect(decodedBase['count'] is BigInt, isTrue);
      expect((decodedBase['count'] as BigInt) + BigInt.one, big + BigInt.one);
      expect((decodedBase['count'] as BigInt).compareTo(big), 0);
      final decodedLocal = decoded.local;
      expect(decodedLocal['blob'], isA<Uint8List>());
      expect(decodedLocal['blob'] as Uint8List, bytes);
      expect((decodedLocal['count'] as BigInt).compareTo(big), 0);
    });

    test('decoded documents are usable as normal maps (operational)', () {
      final original = sampleConflict();
      final decoded = decodeConflictRecord(
          encodeConflictRecord(original).map((k, v) => MapEntry(k, v)));
      // mutate a nested map after decode
      decoded.local['name'] = 'mutated';
      expect(decoded.local['name'], 'mutated');
      expect(original.local['name'], 'local_name',
          reason: 'decode must not alias the encoded maps');
    });

    test('malformed conflict rows fail loudly with FormatException', () {
      expect(
        () => decodeConflictRecord({'store': 1, 'record_id': 'x'}),
        throwsA(isA<FormatException>()),
      );
      expect(
        () => decodeConflictRecord({
          'store': 's',
          'record_id': 'x',
          'base': 'not-a-map',
          'local': const {},
          'remote': const {},
          'dirty_local': <String>[],
          'dirty_remote': <String>[],
          'detected_at': 1,
        }),
        throwsA(isA<FormatException>()),
      );
      expect(
        () => decodeConflictRecord({
          'store': 's',
          'record_id': 'x',
          'base': const {},
          'local': const {},
          'remote': const {},
          'dirty_local': 'nope',
          'dirty_remote': <String>[],
          'detected_at': 1,
        }),
        throwsA(isA<FormatException>()),
      );
    });
  });
}
