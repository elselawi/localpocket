import 'package:localpocket/src/kernel/sync/merge.dart';
import 'package:test/test.dart';

/// Conflict resolver tests.
void main() {
  group('resolvers', () {
    test('remote wins default', () async {
      final base = {'title': 'old', 'status': 'draft'};
      final local = {'title': 'local_edit', 'status': 'draft'};
      final remote = {'title': 'remote_edit', 'status': 'draft'};

      final res = await merge3WayAsync(base: base, local: local, remote: remote);
      expect(res.merged['title'], 'remote_edit');
      expect(res.merged['status'], 'draft');
      expect(res.needsReview, isFalse);
    });

    test('local wins', () async {
      final base = {'title': 'old', 'count': 0};
      final local = {'title': 'local_title', 'count': 0};
      final remote = {'title': 'remote_title', 'count': 0};

      final policy = MergePolicy(
        fieldOverrides: {'title': const LocalWinsResolver()},
      );

      final res = await merge3WayAsync(
        base: base,
        local: local,
        remote: remote,
        policy: policy,
      );
      expect(res.merged['title'], 'local_title');
    });

    test('set union or set with both sides removals', () async {
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
        fieldOverrides: {'tags': const SetUnionWithDeletionWinsResolver()},
      );

      final res = await merge3WayAsync(
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

    test('counter base plus deltas', () async {
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

      final res = await merge3WayAsync(
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

    test('append only dedup by content', () async {
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
          'notes': const AppendOnlyLinesResolver(),
          'log': const AppendOnlyListResolver(),
        },
      );

      final res = await merge3WayAsync(
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

    test('custom resolver invoked', () async {
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

      final res = await merge3WayAsync(
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

    test('precedence field collection default', () async {
      final base = {'fieldA': 'a0', 'fieldB': 'b0'};
      final local = {'fieldA': 'a_loc', 'fieldB': 'b_loc'};
      final remote = {'fieldA': 'a_rem', 'fieldB': 'b_rem'};

      // Field override on fieldA takes local, default package behavior takes remote for fieldB
      final policy = MergePolicy(
        fieldOverrides: {'fieldA': const LocalWinsResolver()},
      );

      final res = await merge3WayAsync(
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

    test('unresolved custom yields needs review', () async {
      final base = {'note': 'base_note'};
      final local = {'note': 'local_note'};
      final remote = {'note': 'remote_note'};

      // Custom resolver returns null or needsReview=true -> escalated
      final custom = CustomResolver((ctx) => null);
      final policy = MergePolicy(collectionResolver: custom);

      final res = await merge3WayAsync(
        base: base,
        local: local,
        remote: remote,
        policy: policy,
      );

      expect(res.needsReview, isTrue);
    });

    test(
        'declined collection resolver preserves remote-only and local-only '
        'changes', () async {
      // Base: name/phone/city. Local changed only `phone`; remote changed
      // only `city`. A naive `{...base, ...remote, ...local}` fallback would
      // overwrite the remote-only `city` with the stale base value.
      final base = {'name': 'Alice', 'phone': '111', 'city': 'London'};
      final local = {'name': 'Alice', 'phone': '222', 'city': 'London'};
      final remote = {'name': 'Alice', 'phone': '111', 'city': 'Paris'};

      final policy =
          MergePolicy(collectionResolver: CustomResolver((ctx) => null));

      final res = await merge3WayAsync(
        base: base,
        local: local,
        remote: remote,
        policy: policy,
      );

      expect(res.needsReview, isTrue);
      expect(res.merged['phone'], '222', reason: 'local-only change preserved');
      expect(res.merged['city'], 'Paris',
          reason: 'remote-only change preserved (not overwritten by base)');
      expect(res.merged['name'], 'Alice');

      // A field changed on BOTH sides differently still escalates and the
      // review preview takes remote (the record stays in review).
      final both = await merge3WayAsync(
        base: {'v': 1},
        local: {'v': 2},
        remote: {'v': 3},
        policy: MergePolicy(collectionResolver: CustomResolver((ctx) => null)),
      );
      expect(both.needsReview, isTrue);
      expect(both.merged['v'], 3);
    });
  });

  group('SetUnionWithDeletionWinsResolver edge cases', () {
    Future<List<Object?>> mergeTags(
        List<Object?>? b, List<Object?>? l, List<Object?>? r) async {
      final res = await merge3WayAsync(
        base: {'tags': b},
        local: {'tags': l},
        remote: {'tags': r},
        policy: const MergePolicy(
            fieldOverrides: {'tags': SetUnionWithDeletionWinsResolver()}),
      );
      return (res.merged['tags'] as List).cast<Object?>();
    }

    test('duplicate values collapse', () async {
      final m = await mergeTags(['a', 'b'], ['a', 'b', 'b'], ['a', 'b', 'c']);
      expect(m.toSet(), {'a', 'b', 'c'});
      // Order: local first, then remote, then base, dedup on first occurrence.
      expect(m, ['a', 'b', 'c']);
    });

    test('null elements are treated as set members', () async {
      final m = await mergeTags(['a', null], ['a', null, 'b'], ['a', null, 'c']);
      expect(m.toSet(), {'a', null, 'b', 'c'});
    });

    test('a base element missing from one side is treated as removed', () async {
      // Remote omits 'a' entirely -> remoteRemoved drops it even though local
      // kept it (concurrent-removal semantics).
      final m = await mergeTags(['a', 'b'], ['a', 'b'], ['b', 'c']);
      expect(m.toSet(), {'b', 'c'},
          reason: "remote's omission of 'a' counts as a removal");
    });

    test('nested maps use identity semantics (documented)', () async {
      // The resolver uses List.toSet()/contains which are identity-based for
      // non-primitive elements. Remote "replaces" the base map with an
      // equal-content but DIFFERENT instance -> from the identity view remote
      // removed the base element and added its own.
      final shared = {'x': 1};
      final m = await mergeTags(
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

    test('removals plus additions on both sides', () async {
      // base: a b c d; local removes a adds e; remote removes b adds f.
      final m = await mergeTags(
        ['a', 'b', 'c', 'd'],
        ['b', 'c', 'd', 'e'],
        ['a', 'c', 'd', 'f'],
      );
      expect(m.toSet(), {'c', 'd', 'e', 'f'});
    });

    test('ordering preserves local, then remote, then base appearance', () async {
      final m = await mergeTags(['a', 'b'], ['b', 'c', 'a'], ['a', 'b', 'd']);
      // Union set = {a,b,c,d}; appearance order: local(b,c,a), remote(d), base.
      expect(m, ['b', 'c', 'a', 'd']);
    });

    test('non-list inputs degrade to empty lists', () async {
      final m = await merge3WayAsync(
        base: {'tags': 'not-a-list'},
        local: {
          'tags': ['x']
        },
        remote: {'tags': <Object?>[]},
        policy: const MergePolicy(
            fieldOverrides: {'tags': SetUnionWithDeletionWinsResolver()}),
      );
      expect((m.merged['tags'] as List).cast<Object?>(), ['x']);
    });
  });

  group('append-only resolvers edge cases', () {
    Future<String> mergeNotes(String? b, String? l, String? r) async =>
        (await merge3WayAsync(
          base: {'notes': b},
          local: {'notes': l},
          remote: {'notes': r},
          policy: const MergePolicy(
              fieldOverrides: {'notes': AppendOnlyLinesResolver()}),
        ))
            .merged['notes'] as String;

    test('empty and whitespace-only lines are skipped', () async {
      // b: a, '', '  ', b ; l adds L; r adds c.
      expect(await mergeNotes('a\n\n  \nb', 'a\nL', 'c'), 'a\nb\nL\nc');
    });

    test('lines differing only by whitespace collapse (trimmed dedup)',
        () async {
      final m = await mergeNotes('alpha', 'alpha\nLOCAL', '  alpha  \nREMOTE');
      expect(m, 'alpha\nLOCAL\nREMOTE');
    });

    test('newline endings are normalized', () async {
      final m = await mergeNotes('a\n', 'b', '');
      expect(m, 'a\nb');
    });

    test('order is base, local, then remote; first occurrence wins',
        () async {
      final m = await mergeNotes('a', 'b', 'c');
      expect(m, 'a\nb\nc');
      // A duplicate from a later side is dropped.
      expect(await mergeNotes('a', 'a', 'a'), 'a');
    });

    test('deep-equal duplicates in list mode are dropped', () async {
      final shared = {'x': 1};
      final res = await merge3WayAsync(
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
        policy: const MergePolicy(
            fieldOverrides: {'log': AppendOnlyListResolver()}),
      );
          final m = (res.merged['log'] as List).cast<Object?>();
      // List mode uses deep equality: all three {'x':1} instances collapse.
      expect(m, [shared, 'evt']);
    });

    test('non-string list items are preserved by deep equality', () async {
      final res = await merge3WayAsync(
        base: {
          'log': [1, 2]
        },
        local: {
          'log': [1, 2, 2.0]
        },
        remote: {
          'log': [3]
        },
        policy: const MergePolicy(
            fieldOverrides: {'log': AppendOnlyListResolver()}),
      );
          final m = (res.merged['log'] as List).cast<Object?>();
      // List mode dedups by DEEP equality: 2 and 2.0 are deep-equal, so 2.0
      // is dropped.
      expect(m, [1, 2, 3]);
    });

    test('nested values are appended as atomic items', () async {
      final res = await merge3WayAsync(
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
        policy: const MergePolicy(
            fieldOverrides: {'log': AppendOnlyListResolver()}),
      );
          final m = (res.merged['log'] as List).cast<Object?>();
      expect(m, [
        {'a': 1},
        {'b': 2},
        {'c': 3},
      ]);
    });
  });

  group('CounterResolver edge cases', () {
    Future<Object?> mergeCount(Object? b, Object? l, Object? r) async {
      final res = await merge3WayAsync(
        base: {'count': b},
        local: {'count': l},
        remote: {'count': r},
        policy:
            const MergePolicy(fieldOverrides: {'count': CounterResolver()}),
      );
      return res.merged['count'];
    }

    test('int mixing stays int, int+double becomes double', () async {
      // 10 + (5-10) + (3-10) = -2
      expect(await mergeCount(10, 5, 3), -2);
      final d = await mergeCount(10.0, 5, 3);
      expect(d, -2.0);
      expect(d is double, isTrue);
    });

    test('missing base counts as zero', () async {
      expect(await mergeCount(null, 5, 3), 8); // 0 + 5 + 3
      expect(await mergeCount(null, null, 3), 3);
      expect(await mergeCount(null, 5, null), 5);
    });

    test('negative deltas apply', () async {
      expect(await mergeCount(10, 3, 7), 0); // 10 + (3-10) + (7-10) = 0
      expect(await mergeCount(0, -5, 2), -3);
    });

    test('nulls and nonnumeric inputs treat as zero', () async {
      expect(await mergeCount(null, null, null), isNull,
          reason:
              'all-null inputs short-circuit to the l==r branch (no resolver)');
      expect(await mergeCount('not-a-number', 5, 3), 8); // base string -> 0
      // Both sides non-numeric -> each delta is -base, so result = -base.
      expect(await mergeCount(10, 'x', 'y'), -10);
      // 10 + (null->0 - 10) + (8 - 10) = -2.
      expect(await mergeCount(10, null, 8), -2);
    });

    test('overflow policy: huge ints stay int without throwing', () async {
      const huge = 1 << 62;
      // 0 + (2^62 - 0) + (2^62 + 1 - 0) = 2^63 + 1 -> wraps under 64-bit
      // arithmetic (documented Dart int behavior; no exception).
      final m = await mergeCount(0, huge, huge + 1);
      expect(m is int, isTrue, reason: 'all-int inputs keep int type');
      expect(m, huge * 2 + 1);
    });

    test('mixed types preserve double result', () async {
      expect((await mergeCount(0, 1, 1.5)) is double, isTrue);
      expect(await mergeCount(0, 1, 1.5), 2.5);
    });

    test('optional min/max bounds clamp domain-invalid values', () async {
      // Both sides decrement below zero -> negative inventory is clamped to 0.
      final low =(await merge3WayAsync(
        base: {'count': 10},
        local: {'count': 5},
        remote: {'count': 4},
        policy: const MergePolicy(
            fieldOverrides: {'count': CounterResolver(min: 0)}),
      )).merged['count'];
      expect(low, 0, reason: '10 + (5-10) + (4-10) = -1 clamped to min 0');

      // Overflow above a cap is clamped to the max.
      final high =(await merge3WayAsync(
        base: {'count': 90},
        local: {'count': 100},
        remote: {'count': 95},
        policy: const MergePolicy(
            fieldOverrides: {'count': CounterResolver(max: 100)}),
      )).merged['count'];
      expect(high, 100,
          reason: '90 + (100-90) + (95-90) = 105 clamped to max 100');

      // A single-sided bound leaves the other side unconstrained.
      final oneSided =(await merge3WayAsync(
        base: {'count': 1},
        local: {'count': 2},
        remote: {'count': 3},
        policy: const MergePolicy(
            fieldOverrides: {'count': CounterResolver(min: 0)}),
      )).merged['count'];
      expect(oneSided, 4, reason: '1 + (2-1) + (3-1) = 4 (no max bound)');
    });

    test('clamps apply to double bounds and negative minimums', () async {
      // Double bound: the clamped result is a double.
      final d =(await merge3WayAsync(
        base: {'count': 10.0},
        local: {'count': 5},
        remote: {'count': 4},
        policy: const MergePolicy(
            fieldOverrides: {'count': CounterResolver(min: 0.5)}),
      )).merged['count'];
      expect(d, 0.5, reason: '10 + (5-10) + (4-10) = -1 clamped to min 0.5');

      // Negative minimums are allowed and clamp upward.
      final neg =(await merge3WayAsync(
        base: {'count': 0},
        local: {'count': -4},
        remote: {'count': -2},
        policy: const MergePolicy(
            fieldOverrides: {'count': CounterResolver(min: -5)}),
      )).merged['count'];
      expect(neg, -5, reason: '0 + (-4) + (-2) = -6 clamped to min -5');

      // Both bounds: an overflowing result is clamped to the max.
      final both =(await merge3WayAsync(
        base: {'count': 100},
        local: {'count': 110},
        remote: {'count': 105},
        policy: const MergePolicy(
            fieldOverrides: {'count': CounterResolver(min: 0, max: 100)}),
      )).merged['count'];
      expect(both, 100, reason: '100 + 10 + 5 = 115 clamped to max 100');

      // A result within bounds is untouched even when bounds are configured.
      final within =(await merge3WayAsync(
        base: {'count': 10},
        local: {'count': 12},
        remote: {'count': 13},
        policy: const MergePolicy(
            fieldOverrides: {'count': CounterResolver(min: 0, max: 100)}),
      )).merged['count'];
      expect(within, 15, reason: '10 + 2 + 3 = 15 (within bounds)');
    });
  });

  group('declined collection resolver conservative merge', () {
    Future<Map<String, Object?>> declineMerge(Map<String, Object?> base,
        Map<String, Object?> local, Map<String, Object?> remote) async {
      final res = await merge3WayAsync(
        base: base,
        local: local,
        remote: remote,
        policy:
            MergePolicy(collectionResolver: CustomResolver((ctx) => null)),
      );
      return res.merged;
    }

    test('local-only added keys are preserved', () async {
      final merged = await declineMerge(
        {'name': 'A'},
        {'name': 'A', 'local_only': 1},
        {'name': 'A'},
      );
      expect(merged['local_only'], 1,
          reason: 'a key added locally is not dropped by the fallback');
    });

    test('remote-only added keys are preserved', () async {
      final merged = await declineMerge(
        {'name': 'A'},
        {'name': 'A'},
        {'name': 'A', 'remote_only': 2},
      );
      expect(merged['remote_only'], 2,
          reason: 'a key added remotely is not overwritten by the base');
    });

    test('a base key dropped on both sides stays present as null', () async {
      final merged = await declineMerge({'k': 'v'}, {}, {});
      expect(merged.containsKey('k'), isTrue,
          reason: 'the union key is always present');
      expect(merged['k'], isNull,
          reason: 'both sides dropped k, so it resolves to null');
    });

    test('both sides agreeing on a changed value wins', () async {
      final merged = await declineMerge(
        {'name': 'A'},
        {'name': 'B'},
        {'name': 'B'},
      );
      expect(merged['name'], 'B');
    });

    test('local wins only fields it actually changed', () async {
      final merged = await declineMerge(
        {'name': 'Alice', 'phone': '111', 'city': 'London'},
        {'name': 'Alice', 'phone': '222', 'city': 'London'},
        {'name': 'Alice', 'phone': '111', 'city': 'Paris'},
      );
      expect(merged['phone'], '222',
          reason: 'local-only phone change preserved');
      expect(merged['city'], 'Paris',
          reason: 'remote-only city change preserved (not base)');
      expect(merged['name'], 'Alice');
    });

    test('nested maps are compared as a whole (top-level contract)', () async {
      final merged = await declineMerge(
        {
          'meta': {'a': 1, 'b': 2}
        },
        {
          'meta': {'a': 1, 'b': 2}
        },
        {
          'meta': {'a': 1, 'b': 2, 'c': 3}
        },
      );
      expect(merged['meta'], {'a': 1, 'b': 2, 'c': 3},
          reason: 'local unchanged (l == base) -> remote nested map wins');
    });

    test('a field changed on both sides differently escalates to review', () async {
      final res = await merge3WayAsync(
        base: {'v': 1},
        local: {'v': 2},
        remote: {'v': 3},
        policy: MergePolicy(collectionResolver: CustomResolver((ctx) => null)),
      );
      expect(res.needsReview, isTrue);
      expect(res.merged['v'], 3,
          reason: 'review preview takes remote on a both-changed field');
    });

    test('computeDirtyFields treats non-String-keyed maps atomically', () {
      // A map with int keys would crash `Map<String, Object?>.from`; the
      // guard treats it as an opaque value and only marks the parent dirty.
      final dirty = computeDirtyFields(
        {
          'm': {1: 'a', 2: 'b'}
        },
        {
          'm': {1: 'x', 2: 'b'}
        },
      );
      expect(dirty, {'m'},
          reason: 'non-JSON maps are not recursed (no meta.m sub-paths)');

      // String-keyed maps still recurse to dot-notation sub-paths.
      final nested = computeDirtyFields(
        {
          'meta': {'name': 'a', 'city': 'x'}
        },
        {
          'meta': {'name': 'b', 'city': 'x'}
        },
      );
      expect(nested, containsAll(['meta', 'meta.name']));
    });
  });

  group('record-level resolvers and async paths', () {
    test('concrete resolvers arbitrate whole records as collectionResolver',
        () async {
      const base = {'v': 0};
      const local = {'v': 1};
      const remote = {'v': 2};

      for (final resolver in <ConflictResolver>[
        const LocalWinsResolver(),
        const RemoteWinsResolver(),
        const SetUnionWithDeletionWinsResolver(),
        const CounterResolver(),
        const AppendOnlyListResolver(),
        const AppendOnlyLinesResolver(),
      ]) {
        final res = await merge3WayAsync(
          base: base,
          local: local,
          remote: remote,
          policy: MergePolicy(collectionResolver: resolver),
        );
        expect(res.merged['v'], resolver is LocalWinsResolver ? 1 : 2,
            reason: '${resolver.runtimeType} arbitrates a genuine conflict');
      }
    });

    test(
        'a generic ConflictResolver field override falls back to remote '
        'wins', () async {
      final res = await merge3WayAsync(
        base: {'v': 0},
        local: {'v': 1},
        remote: {'v': 2},
        policy: const MergePolicy(fieldOverrides: {'v': _FallbackResolver()}),
      );
      expect(res.merged['v'], 2,
          reason: 'an unclassified ConflictResolver field override defaults '
              'to remote wins');
    });

    test('MergeContext computes dirty sets when not supplied', () async {
      final ctx = MergeContext(
        store: 's',
        recordId: 'r',
        base: {'a': 1, 'b': 2},
        local: {'a': 1, 'b': 3},
        remote: {'a': 1, 'b': 2},
      );
      expect(ctx.dirtyLocal, {'b'}, reason: 'only the locally-changed key');
      expect(ctx.dirtyRemote, isEmpty, reason: 'remote equals base');
    });

    test('merge3WayAsync resolves through an async collection resolver',
        () async {
      final res = await merge3WayAsync(
        base: {'v': 0},
        local: {'v': 1},
        remote: {'v': 2},
        store: 's',
        recordId: 'r',
        policy: MergePolicy(
          collectionResolver: CustomResolver((ctx) async =>
              MergeResult(merged: {'v': 99, 'store': ctx.store})),
        ),
      );
      expect(res.merged['v'], 99);
      expect(res.merged['store'], 's');
    });

    test('async field resolver on a nested map path resolves the child',
        () async {
      final res = await merge3WayAsync(
        base: {
          'meta': {'name': 'a', 'qty': 1}
        },
        local: {
          'meta': {'name': 'b', 'qty': 1}
        },
        remote: {
          'meta': {'name': 'c', 'qty': 1}
        },
        policy: MergePolicy(
          fieldOverrides: {
            'meta.name': CustomResolver(
                (ctx) async => MergeResult(merged: {'name': 'custom'})),
          },
        ),
      );
      expect(res.merged['meta'], {'name': 'custom', 'qty': 1},
          reason: 'the async dotted-path resolver governs the nested child');
    });

    test('async field resolver declining a nested field escalates to review',
        () async {
      final res = await merge3WayAsync(
        base: {
          'meta': {'name': 'a'}
        },
        local: {
          'meta': {'name': 'b'}
        },
        remote: {
          'meta': {'name': 'c'}
        },
        policy: MergePolicy(
          fieldOverrides: {
            'meta.name': CustomResolver((ctx) async => null),
          },
        ),
      );
      expect(res.needsReview, isTrue);
      expect((res.merged['meta'] as Map)['name'], 'c',
          reason: 'a declined async field override takes remote and '
              'escalates');
    });

    test('a sync CustomResolver field override resolving wins the field', () async {
      final res = await merge3WayAsync(
        base: {'v': 0},
        local: {'v': 1},
        remote: {'v': 2},
        policy: MergePolicy(
          fieldOverrides: {
            'v': CustomResolver((ctx) => MergeResult(merged: {'v': 9})),
          },
        ),
      );
      expect(res.merged['v'], 9);
      expect(res.needsReview, isFalse);
    });

    test(
        'a sync CustomResolver field override declining takes remote and '
        'escalates', () async {
      final res = await merge3WayAsync(
        base: {'v': 0},
        local: {'v': 1},
        remote: {'v': 2},
        policy: MergePolicy(
          fieldOverrides: {
            'v': CustomResolver((ctx) => null),
          },
        ),
      );
      expect(res.needsReview, isTrue);
      expect(res.merged['v'], 2,
          reason: 'a declined field override falls back to remote');
    });
  });
}

/// A generic [ConflictResolver] subclass that is none of the concrete
/// record/field resolvers — pins the unclassified field-override fallback.
class _FallbackResolver extends ConflictResolver {
  const _FallbackResolver();

  @override
  MergeResult resolve(MergeContext ctx) =>
      const RemoteWinsResolver().resolve(ctx);
}
