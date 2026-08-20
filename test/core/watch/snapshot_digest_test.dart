import 'package:localpocket/src/core/watch.dart' show computeSnapshotDigest;
import 'package:test/test.dart';

void main() {
  group('computeSnapshotDigest ordering semantics', () {
    final snapshotA = <Map<String, Object?>>[
      {'id': 'a', 'name': 'alpha', 'priority': 1},
      {'id': 'b', 'name': 'beta', 'priority': 2},
      {'id': 'c', 'name': 'gamma', 'priority': 3},
    ];
    final snapshotB = <Map<String, Object?>>[
      {'id': 'b', 'name': 'beta', 'priority': 2},
      {'id': 'a', 'name': 'alpha', 'priority': 1},
      {'id': 'c', 'name': 'gamma', 'priority': 3},
    ];

    test('unordered digest ignores row order by default', () {
      final digestA = computeSnapshotDigest(snapshotA);
      final digestB = computeSnapshotDigest(snapshotB);
      expect(digestA, equals(digestB));
    });

    test('unordered digest ignores row order when ordered is false', () {
      final digestA = computeSnapshotDigest(snapshotA, ordered: false);
      final digestB = computeSnapshotDigest(snapshotB, ordered: false);
      expect(digestA, equals(digestB));
    });

    test('ordered digest preserves row order differences', () {
      final digestA = computeSnapshotDigest(snapshotA, ordered: true);
      final digestB = computeSnapshotDigest(snapshotB, ordered: true);
      expect(digestA, isNot(equals(digestB)));
    });
  });
}
