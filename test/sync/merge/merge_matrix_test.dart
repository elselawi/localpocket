import 'dart:math';
import 'package:localpocket/sync.dart';
import 'package:test/test.dart';

/// Merge matrix tests.
///
/// Exhaustive small-domain triples property test over 1 000 seeds:
/// for all `(base, local, remote)` triples over typed values:
/// `l == r -> l`, `l == b -> r`, `r == b -> l`, else resolver (default remote wins).
void main() {
  group('exhaustive small domain triples', () {
    test('exhaustive small domain triples', () {
      final domain = <Object?>[
        null,
        0,
        1,
        2,
        'a',
        'b',
        'c',
        true,
        false,
        <String>[],
        ['tag1'],
        ['tag1', 'tag2'],
        <String, Object?>{},
        {'x': 1},
      ];

      // 1. Exhaustive test over small domain elements
      for (final b in domain) {
        for (final l in domain) {
          for (final r in domain) {
            final base = {'val': b};
            final local = {'val': l};
            final remote = {'val': r};

            final outcome = merge3Way(base: base, local: local, remote: remote);
            final mergedVal = outcome.merged['val'];

            if (deepEquals(l, r)) {
              expect(deepEquals(mergedVal, l), isTrue,
                  reason: 'l == r -> l ($b, $l, $r)');
            } else if (deepEquals(l, b)) {
              expect(deepEquals(mergedVal, r), isTrue,
                  reason: 'l == b -> r ($b, $l, $r)');
            } else if (deepEquals(r, b)) {
              expect(deepEquals(mergedVal, l), isTrue,
                  reason: 'r == b -> l ($b, $l, $r)');
            } else {
              // Both changed: default resolver is RemoteWins
              expect(deepEquals(mergedVal, r), isTrue,
                  reason: 'both changed -> remote wins ($b, $l, $r)');
            }
          }
        }
      }

      // 2. Property over 1 000 random seeds / combinations
      final rng = Random(42);
      for (var seed = 0; seed < 1000; seed++) {
        final b = domain[rng.nextInt(domain.length)];
        final l = domain[rng.nextInt(domain.length)];
        final r = domain[rng.nextInt(domain.length)];

        final base = {'val': b, 'extra': 'base_extra_$seed'};
        final local = {'val': l, 'local_only': seed};
        final remote = {'val': r, 'remote_only': seed * 2};

        final outcome = merge3Way(base: base, local: local, remote: remote);

        if (deepEquals(l, r)) {
          expect(deepEquals(outcome.merged['val'], l), isTrue);
        } else if (deepEquals(l, b)) {
          expect(deepEquals(outcome.merged['val'], r), isTrue);
        } else if (deepEquals(r, b)) {
          expect(deepEquals(outcome.merged['val'], l), isTrue);
        } else {
          expect(deepEquals(outcome.merged['val'], r), isTrue);
        }

        // Disjoint keys survive
        expect(outcome.merged['local_only'], seed);
        expect(outcome.merged['remote_only'], seed * 2);
      }
    });
  });
}
