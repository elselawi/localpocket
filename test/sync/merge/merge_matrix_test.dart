import 'dart:math';

import 'package:localpocket/src/internal/raw_surface.dart';
import 'package:test/test.dart';

/// Merge matrix tests.
///
/// Exhaustive small-domain triples property test over 1 000 seeds:
/// for all `(base, local, remote)` triples over typed values:
/// `l == r -> l`, `l == b -> r`, `r == b -> l`, else resolver (default remote wins).
void main() {
  group('exhaustive small domain triples', () {
    test('exhaustive small domain triples', () {
      // The expected outcome under the current spec: the classic three-way
      // rules per path, with nested String-keyed maps merging per-key.
      Object? expectedMerge(Object? b, Object? l, Object? r) {
        if (deepEquals(l, r)) return l;
        if (deepEquals(l, b)) return r;
        if (deepEquals(r, b)) return l;
        if (l is Map &&
            r is Map &&
            l.keys.every((k) => k is String) &&
            r.keys.every((k) => k is String) &&
            (b == null || (b is Map && b.keys.every((k) => k is String)))) {
          final bMap = b == null ? null : Map<String, Object?>.from(b as Map);
          final lMap = Map<String, Object?>.from(l);
          final rMap = Map<String, Object?>.from(r);
          return <String, Object?>{
            for (final key in {...?bMap?.keys, ...lMap.keys, ...rMap.keys})
              key: expectedMerge(bMap?[key], lMap[key], rMap[key]),
          };
        }
        return r;
      }

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
              // Both changed: per-key recursive merge (nested maps) or
              // remote wins (everything else).
              expect(deepEquals(mergedVal, expectedMerge(b, l, r)), isTrue,
                  reason: 'both changed -> per-key/remote ($b, $l, $r)');
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
          expect(deepEquals(outcome.merged['val'], expectedMerge(b, l, r)),
              isTrue);
        }

        // Disjoint keys survive
        expect(outcome.merged['local_only'], seed);
        expect(outcome.merged['remote_only'], seed * 2);
      }
    });
  });

  group('key presence and absence branches', () {
    test('key deleted on both sides becomes present-with-null', () {
      // base holds the key, both sides drop it: merged keeps it as null.
      final res = merge3Way(
          base: {'val': 'x'}, local: <String, Object?>{}, remote: const {});
      expect(res.merged.containsKey('val'), isTrue);
      expect(res.merged['val'], isNull,
          reason:
              'a union key always appears, with null when both sides drop it');
    });

    test('key only in local survives', () {
      final res = merge3Way(
          base: <String, Object?>{},
          local: {'local_only': 7},
          remote: const {});
      expect(res.merged['local_only'], 7);
    });

    test('key only in remote survives', () {
      final res = merge3Way(
          base: <String, Object?>{},
          local: <String, Object?>{},
          remote: {'remote_only': 9});
      expect(res.merged['remote_only'], 9);
    });

    test('local drops the key, remote changes it -> remote wins', () {
      // base = {val: 'x'}; local deletes val; remote changes val.
      final res = merge3Way(
          base: {'val': 'x'}, local: <String, Object?>{}, remote: {'val': 'y'});
      expect(res.merged['val'], 'y');
    });

    test('remote drops the key, local changes it -> remote drop wins', () {
      // base = {val: 'x'}; local changes val; remote deletes val.
      // Both sides changed (1->y and 1->null) -> default remote wins, so the
      // deletion wins over the local edit.
      final res = merge3Way(
          base: {'val': 'x'}, local: {'val': 'y'}, remote: <String, Object?>{});
      expect(res.merged.containsKey('val'), isTrue);
      expect(res.merged['val'], isNull,
          reason: 'a remote deletion beats a local edit under remote-wins');
    });

    test('key missing from base and unchanged on both sides stays null', () {
      final res = merge3Way(
          base: <String, Object?>{},
          local: <String, Object?>{'absent': null},
          remote: <String, Object?>{'absent': null});
      expect(res.merged.containsKey('absent'), isTrue);
      expect(res.merged['absent'], isNull);
    });

    test('distinct keys on all three sides are all present', () {
      final res = merge3Way(
          base: {'b': 1}, local: {'l': 2, 'b': 1}, remote: {'r': 3, 'b': 1});
      expect(res.merged.keys.toSet(), {'b', 'l', 'r'});
      expect(res.merged['b'], 1);
      expect(res.merged['l'], 2);
      expect(res.merged['r'], 3);
    });
  });

  group('field-type branches', () {
    final types = <String, Object?>{
      'null': null,
      'true': true,
      'false': false,
      'int0': 0,
      'int1': 1,
      'intNeg': -1,
      'bigInt': 1 << 53,
      'double': 2.5,
      'negZero': -0.0,
      'onePointZero': 1.0,
      'emptyString': '',
      'string': 'hello',
      'emptyList': <Object?>[],
      'list': <Object?>[1, 'a', true],
      'emptyMap': <String, Object?>{},
      'nestedMap': {
        'a': {
          'b': [1, 2]
        }
      },
      'intKeyMap': {1: 'a', 2: 'b'},
    };

    void runBranch(
        String name, Object? b, Object? l, Object? r, Object? expected) {
      final res =
          merge3Way(base: {'val': b}, local: {'val': l}, remote: {'val': r});
      expect(deepEquals(res.merged['val'], expected), isTrue,
          reason:
              '$name branch (b=${_short(b)}, l=${_short(l)}, r=${_short(r)}) -> ${_short(expected)}');
    }

    for (final entry in types.entries) {
      final v = entry.value;
      test('l == r branch keeps the value (${entry.key})', () {
        // Separate instances with equal content, not the same reference.
        final lCopy = _clone(v);
        final rCopy = _clone(v);
        runBranch('l==r', v, lCopy, rCopy, lCopy);
      });

      test('l == b branch adopts remote (${entry.key})', () {
        final bCopy = _clone(v);
        runBranch('l==b', bCopy, _clone(v), 'remote-val', 'remote-val');
      });

      test('r == b branch keeps local (${entry.key})', () {
        final bCopy = _clone(v);
        runBranch('r==b', bCopy, 'local-val', _clone(v), 'local-val');
      });
    }

    test('both-changed branch: default remote wins across types', () {
      // Two genuinely different values on both sides.
      const pairs = <(Object?, Object?)>[
        (1, 2),
        (true, false),
        ('a', 'b'),
        (<Object?>[1], <Object?>[2]),
        ({'x': 1}, {'x': 2}),
        ({1: 'a'}, {1: 'b'}),
        (null, 'non-null'),
      ];
      for (final (l, r) in pairs) {
        final res = merge3Way(
            base: <String, Object?>{}, local: {'val': l}, remote: {'val': r});
        expect(deepEquals(res.merged['val'], r), isTrue,
            reason: 'both changed -> remote wins for $_short(l)/$_short(r)');
      }
    });

    test('deep-equal distinct instances take the l == r branch', () {
      // Map instances with equal content but different identity.
      final l = {
        'nested': {
          'list': [1, 2, 3]
        }
      };
      final r = {
        'nested': {
          'list': [1, 2, 3]
        }
      };
      expect(identical(l, r), isFalse, reason: 'distinct instances');
      final res = merge3Way(base: const {}, local: {'m': l}, remote: {'m': r});
      expect(deepEquals(res.merged['m'], l), isTrue);
      // And the merged value is the LOCAL instance (l wins on l==r).
      expect(identical(res.merged['m'], l), isTrue);
    });

    test('nested maps merge per-key: additions from both sides survive', () {
      final base = {
        'cfg': {'a': 1, 'b': 2}
      };
      final local = {
        'cfg': {'a': 1, 'b': 2, 'l': true}
      };
      final remote = {
        'cfg': {'a': 1, 'b': 2, 'r': true}
      };
      // Per-key recursion: unchanged keys follow their sides, and each
      // side's own additions survive as nested keys.
      final res = merge3Way(base: base, local: local, remote: remote);
      expect(res.merged['cfg'], {'a': 1, 'b': 2, 'l': true, 'r': true},
          reason: 'nested maps merge per-key (each side\'s nested additions '
              'survive)');
    });

    test('maps with non-string keys deep-compare correctly', () {
      final l = {1: 'a', 2: 'b'};
      final r = {1: 'a', 2: 'b'};
      // l == r (deep equal) even with int keys.
      final res1 = merge3Way(base: const {}, local: {'m': l}, remote: {'m': r});
      expect(deepEquals(res1.merged['m'], l), isTrue);

      // Both changed with int-keyed maps -> remote wins whole.
      final r2 = {1: 'x'};
      final res2 =
          merge3Way(base: const {}, local: {'m': l}, remote: {'m': r2});
      expect(deepEquals(res2.merged['m'], r2), isTrue);
    });
  });

  group('dirty sets and input immutability', () {
    test('dirtyLocal/dirtyRemote reflect actual base diffs (dot-notation)', () {
      final base = {
        'name': 'n',
        'meta': {'a': 1, 'b': 2},
        'qty': 5
      };
      final local = {
        'name': 'n2',
        'meta': {'a': 1, 'b': 3},
        'qty': 5
      };
      final remote = {
        'name': 'n',
        'meta': {'a': 9, 'b': 2},
        'qty': 5
      };

      final res = merge3Way(base: base, local: local, remote: remote);
      expect(res.dirtyLocal, containsAll(['name', 'meta', 'meta.b']));
      expect(res.dirtyLocal, isNot(contains('qty')));
      expect(res.dirtyRemote, containsAll(['meta', 'meta.a']));
      expect(res.dirtyRemote, isNot(contains('name')));
      expect(res.dirtyRemote, isNot(contains('qty')));
    });

    test('dirty sets are ordered deterministically and are Sets', () {
      final res = merge3Way(
          base: {'a': 1, 'b': 2},
          local: {'a': 1, 'b': 9, 'c': 3},
          remote: {'a': 7, 'b': 2, 'd': 4});
      expect(res.dirtyLocal, isA<Set<String>>());
      expect(res.dirtyLocal, {'b', 'c'});
      expect(res.dirtyRemote, {'a', 'd'});
    });

    test('merge does not mutate any input map (deep)', () {
      final base = {
        'name': 'n',
        'meta': {
          'a': [1, 2],
          'b': {'deep': true}
        },
        'list': [1, 2],
      };
      final local = {
        'name': 'local',
        'meta': {
          'a': [1, 2],
          'b': {'deep': true}
        },
        'local_only': 1,
      };
      final remote = {
        'name': 'remote',
        'meta': {
          'a': [9],
          'b': {'deep': false}
        },
        'remote_only': 2,
      };
      final baseBefore = _clone(base);
      final localBefore = _clone(local);
      final remoteBefore = _clone(remote);

      merge3Way(base: base, local: local, remote: remote);

      expect(base, equals(baseBefore), reason: 'base not mutated');
      expect(local, equals(localBefore), reason: 'local not mutated');
      expect(remote, equals(remoteBefore), reason: 'remote not mutated');
    });

    test('field-resolver path does not mutate inputs either', () {
      final base = {'n': 0};
      final local = {'n': 5};
      final remote = {'n': 3};
      final baseBefore = _clone(base);
      final localBefore = _clone(local);
      final remoteBefore = _clone(remote);

      merge3Way(
        base: base,
        local: local,
        remote: remote,
        policy: const MergePolicy(fieldOverrides: {'n': CounterResolver()}),
      );

      expect(base, equals(baseBefore));
      expect(local, equals(localBefore));
      expect(remote, equals(remoteBefore));
    });

    test('merged key presence matches the union of all three sides', () {
      final res = merge3Way(
          base: {'a': 1, 'b': 1},
          local: {'b': 2, 'c': 3},
          remote: {'c': 3, 'd': 4});
      expect(res.merged.keys.toSet(), {'a', 'b', 'c', 'd'});
      // 'a' is base-only and dropped by both sides -> present as null.
      expect(res.merged.containsKey('a'), isTrue);
      expect(res.merged['a'], isNull);
      // 'b' changed locally (1->2) but remote DROPPED it (1->null): both
      // sides changed -> default remote wins, so the drop wins.
      expect(res.merged['b'], isNull,
          reason: 'a remote deletion beats a local edit under remote-wins');
      expect(res.merged['c'], 3, reason: 'both agree on the new value');
      expect(res.merged['d'], 4, reason: 'remote-only key kept');
    });
  });

  group('MergeEngine parity and async adapters', () {
    test('MergeEngine.runSync and runAsync agree for branch-heavy cases',
        () async {
      final cases = <({
        Map<String, Object?> base,
        Map<String, Object?> local,
        Map<String, Object?> remote,
        MergePolicy? policy
      })>[
        (
          base: {'title': 'old', 'count': 3},
          local: {'title': 'local', 'count': 4},
          remote: {'title': 'remote', 'count': 5},
          policy: null,
        ),
        (
          base: {'archived': false, 'name': 'v0'},
          local: {'archived': true, 'name': 'v1'},
          remote: {'archived': false, 'name': 'v0'},
          policy: const MergePolicy(editsUnarchive: true),
        ),
        (
          base: {
            'tags': ['a', 'b']
          },
          local: {
            'tags': ['a', 'c']
          },
          remote: {
            'tags': ['b', 'd']
          },
          policy: const MergePolicy(
              fieldOverrides: {'tags': SetUnionWithDeletionWinsResolver()}),
        ),
        (
          base: {'score': 10},
          local: {'score': 15},
          remote: {'score': 12},
          policy:
              const MergePolicy(fieldOverrides: {'score': CounterResolver()}),
        ),
        (
          base: {'value': 'start'},
          local: {'value': 'local'},
          remote: {'value': 'remote'},
          policy: const MergePolicy(
            fieldOverrides: {'value': LocalWinsResolver()},
          ),
        ),
      ];

      for (final testCase in cases) {
        final sync = MergeEngine.runSync(
          base: testCase.base,
          local: testCase.local,
          remote: testCase.remote,
          store: 'patients',
          recordId: 'rec-1',
          policy: testCase.policy,
        );
        final async = await MergeEngine.runAsync(
          base: testCase.base,
          local: testCase.local,
          remote: testCase.remote,
          store: 'patients',
          recordId: 'rec-1',
          policy: testCase.policy,
        );

        expect(sync.merged, equals(async.merged));
        expect(sync.needsReview, equals(async.needsReview));
        expect(sync.dirtyLocal, equals(async.dirtyLocal));
        expect(sync.dirtyRemote, equals(async.dirtyRemote));
      }
    });

    test(
        'sync merge rejects async custom resolvers in both collection and field positions',
        () {
      final asyncCollection = CustomResolver((ctx) async => MergeResult(
            merged: {'value': 'collection'},
          ));
      final asyncField = CustomResolver((ctx) async => MergeResult(
            merged: {'value': 'field'},
          ));

      expect(
        () => merge3Way(
          base: {'value': 'base'},
          local: {'value': 'local'},
          remote: {'value': 'remote'},
          policy: MergePolicy(collectionResolver: asyncCollection),
        ),
        throwsA(isA<StateError>()),
      );

      expect(
        () => merge3Way(
          base: {'value': 'base'},
          local: {'value': 'local'},
          remote: {'value': 'remote'},
          policy: MergePolicy(fieldOverrides: {'value': asyncField}),
        ),
        throwsA(isA<StateError>()),
      );
    });

    test(
        'async merge accepts async custom resolvers and keeps review fallback semantics',
        () async {
      final asyncField = CustomResolver((ctx) async => MergeResult(
            merged: {'value': 'field'},
          ));
      final asyncReview = CustomResolver((ctx) async => MergeResult(
            merged: {'value': 'ignored'},
            needsReview: true,
          ));
      final asyncCollection = CustomResolver((ctx) async => MergeResult(
            merged: {'value': 'collection', 'extra': 'ok'},
          ));

      final fieldRes = await merge3WayAsync(
        base: {'value': 'base'},
        local: {'value': 'local'},
        remote: {'value': 'remote'},
        policy: MergePolicy(fieldOverrides: {'value': asyncField}),
      );
      expect(fieldRes.merged['value'], 'field');

      final reviewRes = await merge3WayAsync(
        base: {'value': 'base'},
        local: {'value': 'local'},
        remote: {'value': 'remote'},
        policy: MergePolicy(fieldOverrides: {'value': asyncReview}),
      );
      expect(reviewRes.needsReview, isTrue);
      expect(reviewRes.merged['value'], 'remote');

      final collectionRes = await merge3WayAsync(
        base: {'value': 'base'},
        local: {'value': 'local'},
        remote: {'value': 'remote'},
        policy: MergePolicy(collectionResolver: asyncCollection),
      );
      expect(collectionRes.merged['value'], 'collection');
      expect(collectionRes.merged['extra'], 'ok');
    });

    test('MergeEngine respects collection precedence over field overrides', () {
      final collection = CustomResolver((ctx) => MergeResult(
            merged: {'value': 'collection'},
          ));
      final field = const LocalWinsResolver();

      final res = MergeEngine.runSync(
        base: {'value': 'base'},
        local: {'value': 'local'},
        remote: {'value': 'remote'},
        policy: MergePolicy(
          collectionResolver: collection,
          fieldOverrides: {'value': field},
        ),
      );

      expect(res.merged['value'], 'collection');
    });

    test('dirty tracking includes nested paths and missing-key unions', () {
      final base = {
        'meta': {'a': 1, 'b': 2},
        'baseOnly': true,
        'shared': 'x',
      };
      final local = {
        'meta': {'a': 1, 'b': 3, 'c': 4},
        'shared': 'x',
      };
      final remote = {
        'meta': {'a': 9, 'b': 2},
        'shared': 'y',
      };

      final res = MergeEngine.runSync(
        base: base,
        local: local,
        remote: remote,
      );

      expect(res.dirtyLocal, containsAll(['meta', 'meta.b', 'meta.c']));
      expect(res.dirtyRemote, containsAll(['meta', 'meta.a', 'shared']));
      expect(res.merged.containsKey('baseOnly'), isTrue);
      expect(res.merged['baseOnly'], isNull);
    });

    test(
        'archive branch with both sides changed can still be resolved by a field override',
        () {
      final policy = const MergePolicy(
        fieldOverrides: {'archived': LocalWinsResolver()},
      );

      final res = MergeEngine.runSync(
        base: {'archived': false},
        local: {'archived': true},
        remote: {'archived': false},
        policy: policy,
      );

      expect(res.merged['archived'], true);
    });
  });
}

String _short(Object? v) {
  if (v is Map) return 'Map(${v.length})';
  if (v is List) return 'List(${v.length})';
  return '$v';
}

Object? _clone(Object? v) {
  if (v is List) return [for (final e in v) _clone(e)];
  if (v is Map) {
    return {for (final e in v.entries) e.key: _clone(e.value)};
  }
  return v;
}
