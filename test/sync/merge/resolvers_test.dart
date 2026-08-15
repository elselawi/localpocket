import 'package:localpocket/sync.dart';
import 'package:test/test.dart';

/// Conflict resolver tests.
void main() {
  group('resolvers', () {
    test('remote wins default', () {
      final base = {'title': 'old', 'status': 'draft'};
      final local = {'title': 'local_edit', 'status': 'draft'};
      final remote = {'title': 'remote_edit', 'status': 'draft'};

      final res = merge3Way(base: base, local: local, remote: remote);
      expect(res.merged['title'], 'remote_edit');
      expect(res.merged['status'], 'draft');
      expect(res.needsReview, isFalse);
    });

    test('local wins', () {
      final base = {'title': 'old', 'count': 0};
      final local = {'title': 'local_title', 'count': 0};
      final remote = {'title': 'remote_title', 'count': 0};

      final policy = MergePolicy(
        fieldOverrides: {'title': const LocalWinsResolver()},
      );

      final res = merge3Way(
        base: base,
        local: local,
        remote: remote,
        policy: policy,
      );
      expect(res.merged['title'], 'local_title');
    });

    test('set union or set with both sides removals', () {
      final base = {
        'tags': ['a', 'b', 'c', 'd'],
      };
      // Local adds 'e', removes 'a'
      final local = {
        'tags': ['b', 'c', 'd', 'e'],
      };
      // Remote adds 'f', removes 'b'
      final remote = {
        'tags': ['a', 'c', 'd', 'f'],
      };

      final policy = MergePolicy(
        fieldOverrides: {'tags': const SetUnionResolver()},
      );

      final res = merge3Way(
        base: base,
        local: local,
        remote: remote,
        policy: policy,
      );

      final mergedTags = (res.merged['tags'] as List).cast<String>();
      // 'a' was removed by local -> gone
      // 'b' was removed by remote -> gone
      // 'c' unchanged -> kept
      // 'd' unchanged -> kept
      // 'e' added by local -> present
      // 'f' added by remote -> present
      expect(mergedTags.toSet(), equals({'c', 'd', 'e', 'f'}));
    });

    test('counter base plus deltas', () {
      final base = {'count': 10, 'score': 100.0};
      // Local +5 to count, -10.0 to score
      final local = {'count': 15, 'score': 90.0};
      // Remote +3 to count, +20.0 to score
      final remote = {'count': 13, 'score': 120.0};

      final policy = MergePolicy(
        fieldOverrides: {
          'count': const CounterResolver(),
          'score': const CounterResolver(),
        },
      );

      final res = merge3Way(
        base: base,
        local: local,
        remote: remote,
        policy: policy,
      );

      // base(10) + deltaL(5) + deltaR(3) = 18
      expect(res.merged['count'], 18);
      // base(100.0) + deltaL(-10.0) + deltaR(20.0) = 110.0
      expect(res.merged['score'], 110.0);
    });

    test('append only dedup by content', () {
      final base = {
        'notes': 'Line 1\nLine 2',
        'log': ['evt1', 'evt2'],
      };
      final local = {
        'notes': 'Line 1\nLine 2\nLocal Line',
        'log': ['evt1', 'evt2', 'local_evt'],
      };
      final remote = {
        'notes': 'Line 1\nLine 2\nRemote Line',
        'log': ['evt1', 'evt2', 'remote_evt'],
      };

      final policy = MergePolicy(
        fieldOverrides: {
          'notes': const AppendOnlyResolver(),
          'log': const AppendOnlyResolver(),
        },
      );

      final res = merge3Way(
        base: base,
        local: local,
        remote: remote,
        policy: policy,
      );

      final mergedNotes = res.merged['notes'] as String;
      expect(mergedNotes.contains('Line 1'), isTrue);
      expect(mergedNotes.contains('Line 2'), isTrue);
      expect(mergedNotes.contains('Local Line'), isTrue);
      expect(mergedNotes.contains('Remote Line'), isTrue);

      final mergedLog = (res.merged['log'] as List).cast<String>();
      expect(mergedLog, containsAllInOrder(['evt1', 'evt2']));
      expect(mergedLog.toSet(),
          equals({'evt1', 'evt2', 'local_evt', 'remote_evt'}));
    });

    test('custom resolver invoked', () {
      final base = {'val': 'v0'};
      final local = {'val': 'v1_local'};
      final remote = {'val': 'v1_remote'};

      var customInvoked = false;
      final custom = CustomResolver((ctx) {
        customInvoked = true;
        return MergeResult(
          merged: {'val': 'custom_merged_${ctx.store}_${ctx.recordId}'},
        );
      });

      final policy = MergePolicy(collectionResolver: custom);

      final res = merge3Way(
        base: base,
        local: local,
        remote: remote,
        store: 'patients',
        recordId: 'rec123',
        policy: policy,
      );

      expect(customInvoked, isTrue);
      expect(res.merged['val'], 'custom_merged_patients_rec123');
    });

    test('precedence field collection default', () {
      final base = {'fieldA': 'a0', 'fieldB': 'b0'};
      final local = {'fieldA': 'a_loc', 'fieldB': 'b_loc'};
      final remote = {'fieldA': 'a_rem', 'fieldB': 'b_rem'};

      // Field override on fieldA takes local, default package behavior takes remote for fieldB
      final policy = MergePolicy(
        fieldOverrides: {'fieldA': const LocalWinsResolver()},
      );

      final res = merge3Way(
        base: base,
        local: local,
        remote: remote,
        policy: policy,
      );

      expect(res.merged['fieldA'], 'a_loc',
          reason: 'field override precedence');
      expect(res.merged['fieldB'], 'b_rem',
          reason: 'package default remote wins');
    });

    test('unresolved custom yields needs review', () {
      final base = {'note': 'base_note'};
      final local = {'note': 'local_note'};
      final remote = {'note': 'remote_note'};

      // Custom resolver returns null or needsReview=true -> escalated
      final custom = CustomResolver((ctx) => null);
      final policy = MergePolicy(collectionResolver: custom);

      final res = merge3Way(
        base: base,
        local: local,
        remote: remote,
        policy: policy,
      );

      expect(res.needsReview, isTrue);
    });
  });

  group('SetUnionResolver edge cases', () {
    List<Object?> mergeTags(
            List<Object?>? b, List<Object?>? l, List<Object?>? r) =>
        (merge3Way(
          base: {'tags': b},
          local: {'tags': l},
          remote: {'tags': r},
          policy:
              const MergePolicy(fieldOverrides: {'tags': SetUnionResolver()}),
        ).merged['tags'] as List)
            .cast<Object?>();

    test('duplicate values collapse', () {
      final m = mergeTags(['a', 'b'], ['a', 'b', 'b'], ['a', 'b', 'c']);
      expect(m.toSet(), {'a', 'b', 'c'});
      // Order: local first, then remote, then base, dedup on first occurrence.
      expect(m, ['a', 'b', 'c']);
    });

    test('null elements are treated as set members', () {
      final m = mergeTags(['a', null], ['a', null, 'b'], ['a', null, 'c']);
      expect(m.toSet(), {'a', null, 'b', 'c'});
    });

    test('a base element missing from one side is treated as removed', () {
      // Remote omits 'a' entirely -> remoteRemoved drops it even though local
      // kept it (concurrent-removal semantics).
      final m = mergeTags(['a', 'b'], ['a', 'b'], ['b', 'c']);
      expect(m.toSet(), {'b', 'c'},
          reason: "remote's omission of 'a' counts as a removal");
    });

    test('nested maps use identity semantics (documented)', () {
      // The resolver uses List.toSet()/contains which are identity-based for
      // non-primitive elements. Remote "replaces" the base map with an
      // equal-content but DIFFERENT instance -> from the identity view remote
      // removed the base element and added its own.
      final shared = {'x': 1};
      final m = mergeTags(
        ['k', shared],
        ['k', shared, 'x'],
        [
          'k',
          {'x': 1},
          'y'
        ],
      );
      expect(m.contains(shared), isFalse,
          reason: 'base instance is identity-removed by the remote replace');
      expect(m, [
        'k',
        'x',
        {'x': 1},
        'y'
      ]);
    });

    test('removals plus additions on both sides', () {
      // base: a b c d; local removes a adds e; remote removes b adds f.
      final m = mergeTags(
        ['a', 'b', 'c', 'd'],
        ['b', 'c', 'd', 'e'],
        ['a', 'c', 'd', 'f'],
      );
      expect(m.toSet(), {'c', 'd', 'e', 'f'});
    });

    test('ordering preserves local, then remote, then base appearance', () {
      final m = mergeTags(['a', 'b'], ['b', 'c', 'a'], ['a', 'b', 'd']);
      // Union set = {a,b,c,d}; appearance order: local(b,c,a), remote(d), base.
      expect(m, ['b', 'c', 'a', 'd']);
    });

    test('non-list inputs degrade to empty lists', () {
      final m = merge3Way(
        base: {'tags': 'not-a-list'},
        local: {
          'tags': ['x']
        },
        remote: {'tags': <Object?>[]},
        policy: const MergePolicy(fieldOverrides: {'tags': SetUnionResolver()}),
      );
      expect((m.merged['tags'] as List).cast<Object?>(), ['x']);
    });
  });

  group('AppendOnlyResolver edge cases', () {
    String mergeNotes(String? b, String? l, String? r) => (merge3Way(
          base: {'notes': b},
          local: {'notes': l},
          remote: {'notes': r},
          policy: const MergePolicy(
              fieldOverrides: {'notes': AppendOnlyResolver()}),
        ).merged['notes'] as String);

    test('empty and whitespace-only lines are skipped', () {
      // b: a, '', '  ', b ; l adds L; r adds c.
      expect(mergeNotes('a\n\n  \nb', 'a\nL', 'c'), 'a\nb\nL\nc');
    });

    test('lines differing only by whitespace collapse (trimmed dedup)', () {
      final m = mergeNotes('alpha', 'alpha\nLOCAL', '  alpha  \nREMOTE');
      expect(m, 'alpha\nLOCAL\nREMOTE');
    });

    test('newline endings are normalized', () {
      final m = mergeNotes('a\n', 'b', '');
      expect(m, 'a\nb');
    });

    test('order is base, local, then remote; first occurrence wins', () {
      final m = mergeNotes('a', 'b', 'c');
      expect(m, 'a\nb\nc');
      // A duplicate from a later side is dropped.
      expect(mergeNotes('a', 'a', 'a'), 'a');
    });

    test('deep-equal duplicates in list mode are dropped', () {
      final shared = {'x': 1};
      final m = (merge3Way(
        base: {
          'log': [shared]
        },
        local: {
          'log': [
            shared,
            {'x': 1}
          ]
        },
        remote: {
          'log': [
            {'x': 1},
            'evt'
          ]
        },
        policy:
            const MergePolicy(fieldOverrides: {'log': AppendOnlyResolver()}),
      ).merged['log'] as List)
          .cast<Object?>();
      // List mode uses deep equality: all three {'x':1} instances collapse.
      expect(m, [shared, 'evt']);
    });

    test('non-string list items are preserved by deep equality', () {
      final m = (merge3Way(
        base: {
          'log': [1, 2]
        },
        local: {
          'log': [1, 2, 2.0]
        },
        remote: {
          'log': [3]
        },
        policy:
            const MergePolicy(fieldOverrides: {'log': AppendOnlyResolver()}),
      ).merged['log'] as List)
          .cast<Object?>();
      // List mode dedups by DEEP equality: 2 and 2.0 are deep-equal, so 2.0
      // is dropped.
      expect(m, [1, 2, 3]);
    });

    test('nested values are appended as atomic items', () {
      final m = (merge3Way(
        base: {
          'log': [
            {'a': 1}
          ]
        },
        local: {
          'log': [
            {'a': 1},
            {'b': 2}
          ]
        },
        remote: {
          'log': [
            {'c': 3}
          ]
        },
        policy:
            const MergePolicy(fieldOverrides: {'log': AppendOnlyResolver()}),
      ).merged['log'] as List)
          .cast<Object?>();
      expect(m, [
        {'a': 1},
        {'b': 2},
        {'c': 3},
      ]);
    });
  });

  group('CounterResolver edge cases', () {
    Object? mergeCount(Object? b, Object? l, Object? r) => merge3Way(
          base: {'count': b},
          local: {'count': l},
          remote: {'count': r},
          policy:
              const MergePolicy(fieldOverrides: {'count': CounterResolver()}),
        ).merged['count'];

    test('int mixing stays int, int+double becomes double', () {
      // 10 + (5-10) + (3-10) = -2
      expect(mergeCount(10, 5, 3), -2);
      final d = mergeCount(10.0, 5, 3);
      expect(d, -2.0);
      expect(d is double, isTrue);
    });

    test('missing base counts as zero', () {
      expect(mergeCount(null, 5, 3), 8); // 0 + 5 + 3
      expect(mergeCount(null, null, 3), 3);
      expect(mergeCount(null, 5, null), 5);
    });

    test('negative deltas apply', () {
      expect(mergeCount(10, 3, 7), 0); // 10 + (3-10) + (7-10) = 0
      expect(mergeCount(0, -5, 2), -3);
    });

    test('nulls and nonnumeric inputs treat as zero', () {
      expect(mergeCount(null, null, null), isNull,
          reason:
              'all-null inputs short-circuit to the l==r branch (no resolver)');
      expect(mergeCount('not-a-number', 5, 3), 8); // base string -> 0
      // Both sides non-numeric -> each delta is -base, so result = -base.
      expect(mergeCount(10, 'x', 'y'), -10);
      // 10 + (null->0 - 10) + (8 - 10) = -2.
      expect(mergeCount(10, null, 8), -2);
    });

    test('overflow policy: huge ints stay int without throwing', () {
      final huge = 1 << 62;
      // 0 + (2^62 - 0) + (2^62 + 1 - 0) = 2^63 + 1 -> wraps under 64-bit
      // arithmetic (documented Dart int behavior; no exception).
      final m = mergeCount(0, huge, huge + 1);
      expect(m is int, isTrue, reason: 'all-int inputs keep int type');
      expect(m, huge * 2 + 1);
    });

    test('mixed types preserve double result', () {
      expect(mergeCount(0, 1, 1.5) is double, isTrue);
      expect(mergeCount(0, 1, 1.5), 2.5);
    });
  });
}
