import 'package:localpocket/src/kernel/sync/merge.dart';
import 'package:test/test.dart';

/// Contract pins for the merge policy semantics that the audit called out.
///
/// These tests do not assert "nice to have" behaviour — they pin the exact
/// current semantics of the production merge engine so a future refactor that
/// changes any of them fails loudly:
///
/// - a collection resolver replaces the whole merge (its output wins
///   wholesale, so a collection remote-wins resolver drops local-only fields);
/// - `MergeContext.dirtyLocal`/`dirtyRemote` are exposed so a collection
///   resolver can be field-aware (and a canonical field-aware resolver is
///   pinned here as the recommended pattern);
/// - `fieldOverrides` follow into nested fields: a dotted path fires at its
///   exact key, a top-level key governs its nested children, and a policy-less
///   nested map merges per-key (remote wins at each nested level);
/// - `SetUnionWithDeletionWinsResolver` re-add identity (no tombstone →
///   deletion wins) and its element-equality edges (2 vs 2.0 collapse; nested
///   maps stay identity-based);
/// - `AppendOnlyListResolver` dedupes identical events by content (or by an
///   optional identity function) and `AppendOnlyLinesResolver` owns the exact
///   string-mode line transforms (trim / split-lines / blank-line drop).
void main() {
  group('collection resolver replaces the whole merge', () {
    test('a collection remote-wins resolver drops local-only fields', () async {
      // Base: title/priority. Local edits both; remote only edited `title`.
      // `RemoteWinsResolver` spreads `{...base, ...local, ...remote}` so the
      // remote value wins EVERY field — including `priority`, which remote
      // never touched. The local-only change is dropped by design.
      final base = {'title': 'A', 'priority': 1};
      final local = {'title': 'B', 'priority': 2};
      final remote = {'title': 'C', 'priority': 1};

      final res = await merge3WayAsync(
        base: base,
        local: local,
        remote: remote,
        policy: const MergePolicy(collectionResolver: RemoteWinsResolver()),
      );

      expect(res.merged['title'], 'C', reason: 'the conflict resolves remote');
      expect(res.merged['priority'], 1,
          reason: 'remote wins even the field it did not change — the '
              'local-only priority edit (2) is dropped: a collection resolver '
              'replaces the whole merge');
      expect(res.needsReview, isFalse);
    });

    test('MergeContext exposes dirtyLocal and dirtyRemote to resolvers', () async {
      final base = {
        'name': 'n',
        'meta': {'a': 1, 'b': 2},
        'qty': 5,
      };
      final local = {
        'name': 'n2',
        'meta': {'a': 1, 'b': 3},
        'qty': 5,
      };
      final remote = {
        'name': 'n',
        'meta': {'a': 9, 'b': 2},
        'qty': 5,
      };

      Set<String>? seenLocal;
      Set<String>? seenRemote;
      String? seenStore;
      String? seenRecordId;
      final policy = MergePolicy(
        collectionResolver: CustomResolver((ctx) {
          seenLocal = ctx.dirtyLocal;
          seenRemote = ctx.dirtyRemote;
          seenStore = ctx.store;
          seenRecordId = ctx.recordId;
          return MergeResult(merged: {...ctx.remote});
        }),
      );

      await merge3WayAsync(
        base: base,
        local: local,
        remote: remote,
        store: 'patients',
        recordId: 'rec-1',
        policy: policy,
      );

      expect(seenLocal, isA<Set<String>>());
      expect(seenLocal, containsAll(['name', 'meta', 'meta.b']),
          reason: 'local touched name and meta.b; qty is untouched');
      expect(seenLocal, isNot(contains('qty')));
      expect(seenRemote, containsAll(['meta', 'meta.a']),
          reason: 'remote touched meta.a; name and qty are untouched');
      expect(seenRemote, isNot(contains('name')));
      expect(seenStore, 'patients');
      expect(seenRecordId, 'rec-1');
    });

    test('a field-aware collection resolver keeps local-only changes', () async {
      // The recommended pattern for a collection resolver that means "remote
      // wins conflicts": consult `ctx.dirtyLocal`/`ctx.dirtyRemote` and only
      // let remote win fields it actually changed.
      MergeResult fieldAwareRemoteWins(MergeContext ctx) {
        final merged = <String, Object?>{};
        final keys = {
          ...ctx.base.keys,
          ...ctx.local.keys,
          ...ctx.remote.keys,
        };
        for (final k in keys) {
          final localOnly =
              ctx.dirtyLocal.contains(k) && !ctx.dirtyRemote.contains(k);
          final bothChanged =
              ctx.dirtyLocal.contains(k) && ctx.dirtyRemote.contains(k);
          if (bothChanged) {
            merged[k] = ctx.remote[k]; // remote wins conflicts
          } else if (localOnly) {
            merged[k] = ctx.local[k]; // local-only change survives
          } else {
            merged[k] = ctx.remote[k];
          }
        }
        return MergeResult(merged: merged);
      }

      // Same shape as the audit example: local edits title AND priority;
      // remote edits only title.
      final base = {'title': 'A', 'priority': 1};
      final local = {'title': 'B', 'priority': 2};
      final remote = {'title': 'C', 'priority': 1};

      final res = await merge3WayAsync(
        base: base,
        local: local,
        remote: remote,
        policy: MergePolicy(
            collectionResolver: CustomResolver(
          fieldAwareRemoteWins,
        )),
      );

      expect(res.merged['title'], 'C',
          reason: 'the both-changed title conflict resolves remote');
      expect(res.merged['priority'], 2,
          reason: 'the local-only priority change survives (remote never '
              'touched it)');
    });
  });

  group('field overrides follow into nested fields', () {
    final base = {
      'meta': {'name': 'n0', 'city': 'c0'}
    };
    final local = {
      'meta': {'name': 'nL', 'city': 'cL'}
    };
    final remote = {
      'meta': {'name': 'nR', 'city': 'c0'}
    };

    test('a dotted-path override fires at its exact nested key', () async {
      // `meta.name` changed on both sides while `meta.city` changed only
      // locally: the dotted override resolves `name`, and the per-key rules
      // keep the local-only city change.
      final res = await merge3WayAsync(
        base: base,
        local: local,
        remote: remote,
        policy: const MergePolicy(
          fieldOverrides: {'meta.name': LocalWinsResolver()},
        ),
      );

      final meta = res.merged['meta']! as Map<String, Object?>;
      expect(meta['name'], 'nL',
          reason: 'the dotted override resolved the nested conflict local');
      expect(meta['city'], 'cL',
          reason: 'the nested local-only change survives (per-key merge)');
    });

    test('a top-level override governs its nested children', () async {
      final res = await merge3WayAsync(
        base: base,
        local: local,
        remote: remote,
        policy: const MergePolicy(
          fieldOverrides: {'meta': LocalWinsResolver()},
        ),
      );

      final meta = res.merged['meta']! as Map<String, Object?>;
      expect(meta['name'], 'nL',
          reason: 'the top-level policy followed into the nested conflict');
      expect(meta['city'], 'cL',
          reason: 'the nested local-only change survives');
    });

    test('a dotted override beats the top-level policy at its exact key', () async {
      // Both nested keys conflict; the dotted override flips `name` back to
      // local while `city` still follows the top-level remote policy.
      final res = await merge3WayAsync(
        base: base,
        local: local,
        remote: {
          'meta': {'name': 'nR', 'city': 'cR'}
        },
        policy: const MergePolicy(fieldOverrides: {
          'meta': RemoteWinsResolver(),
          'meta.name': LocalWinsResolver(),
        }),
      );

      final meta = res.merged['meta']! as Map<String, Object?>;
      expect(meta['name'], 'nL',
          reason: 'the more specific dotted key wins at its exact path');
      expect(meta['city'], 'cR',
          reason: 'the remaining nested conflict follows the top-level key');
    });

    test('without a policy nested maps merge per-key (remote wins per key)',
        () async {
      final res = await merge3WayAsync(base: base, local: local, remote: remote);

      final meta = res.merged['meta']! as Map<String, Object?>;
      expect(meta['name'], 'nR', reason: 'both-changed nested key -> remote');
      expect(meta['city'], 'cL', reason: 'local-only nested key -> local');
    });

    test('a type change on one side keeps the nested value atomic', () async {
      final res = await merge3WayAsync(
        base: base,
        local: local,
        remote: {
          'meta': 'scalar-replacement',
        },
      );

      expect(res.merged['meta'], 'scalar-replacement',
          reason: 'a non-map side cannot be recursed; remote wins whole');
    });
  });

  group('set union delete/re-add identity', () {
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

    test('a remotely re-added element loses to the local removal', () async {
      // Base [a]; local removes a; remote re-adds a. There is no tombstone,
      // so the re-added element is indistinguishable from the original and
      // the local removal wins — the union drops it.
      final m = await mergeTags(['a'], [], ['a']);
      expect(m, isEmpty,
          reason: 'deletion wins over a re-add of the same value');
    });

    test('a new element equal to the removed one is treated as a re-add', () async {
      // Remote re-adds `a` AND adds a genuinely new `b`. `a` is treated as
      // the removed original (value identity — no tombstone), so only `b`
      // (a true addition) survives.
      final m = await mergeTags(['a'], [], ['a', 'b']);
      expect(m, ['b'],
          reason: 'a new element with the same value is indistinguishable '
              'from a re-add and is dropped; only the truly new element '
              'survives');
    });
  });

  group('set union element equality', () {
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

    test('int 2 and double 2.0 are the same element', () async {
      // Engine level: deepEquals treats 2 == 2.0 as equal, so a 2-only local
      // and a 2.0-only remote AGREE and merge to a single element.
      final agreed = await mergeTags(<Object?>[], [2], [2.0]);
      expect(agreed, [2],
          reason: '2 and 2.0 are the same element (canonical num identity)');

      // Resolver level: under a genuine two-sided change, a 2.0 re-add
      // collapses into the existing 2 instead of adding a second element.
      final m = await mergeTags(<Object?>[], [2], [2.0, 'x']);
      expect(m, [2, 'x'],
          reason: 'the set-union resolver treats 2.0 as the same element as '
              '2 and does not append it again');
    });

    test('equal-content nested maps stay distinct elements', () async {
      // Unlike primitives (2 vs 2.0), non-primitive elements use Dart Set
      // identity: two equal-content but distinct map instances are DIFFERENT
      // elements. This pins the current pre-canonicalize behaviour so a
      // switch to structural/canonical identity is visible and enforced.
      final localMap = {'x': 1};
      final remoteMap = {'x': 1};
      expect(identical(localMap, remoteMap), isFalse);

      final m = await mergeTags(<Object?>[], [localMap], [remoteMap, 'y']);
      expect(m, hasLength(3),
          reason: 'each side\'s distinct map instance survives as its own '
              'element (identity, not structural, equality)');
      expect(m, contains(localMap));
      expect(m, contains(remoteMap));
      expect(m, contains('y'));
    });

    test('a one-sided duplicate survives verbatim (no resolver pass)', () async {
      // remote == base, so the engine\'s r == b branch takes the local list
      // wholesale — the set-union resolver never runs and the duplicate 2.0
      // is NOT collapsed into 2.
      final m = await mergeTags([2], [2, 2.0], [2]);
      expect(m, [2, 2.0],
          reason: 'canonical collapse only happens when the resolver actually '
              'runs, i.e. on a genuine two-sided change');
    });
  });

  group('append-only identical-event dedup', () {
    Future<List<Object?>> mergeLog(
        List<Object?>? b, List<Object?>? l, List<Object?>? r) async {
      final res = await merge3WayAsync(
        base: {'log': b},
        local: {'log': l},
        remote: {'log': r},
        policy: const MergePolicy(
            fieldOverrides: {'log': AppendOnlyListResolver()}),
      );
      return (res.merged['log'] as List).cast<Object?>();
    }

    test('identical events appended on both sides collapse to one', () async {
      // The documented contract: the same event appended independently by
      // both sides is one element. (Distinct events that happen to look
      // identical need an identity hook, which does not exist yet — this
      // pins the current content-dedup behaviour.)
      final m = await mergeLog(<Object?>[], ['approved'], ['approved']);
      expect(m, ['approved'],
          reason: 'identical events from both sides are one element');
    });

    test('the resolver dedups an identical event across all three sides', () async {
      // A genuine two-sided change (local and remote both add their own
      // event) runs the resolver, which collapses the repeated 'approved'
      // present in base, local, AND remote into a single element.
      final m = await mergeLog(
          ['approved'], ['approved', 'local2'], ['approved', 'remote2']);
      expect(m, ['approved', 'local2', 'remote2'],
          reason: 'under a two-sided change the resolver dedups the '
              'identical event across base, local, and remote');
    });

    test('a one-sided duplicate survives verbatim (no resolver pass)', () async {
      // remote == base, so the engine\'s r == b branch takes the local list
      // wholesale — the append-only resolver never runs and the local
      // duplicate survives.
      final m = await mergeLog(['approved'], ['approved', 'approved'], ['approved']);
      expect(m, ['approved', 'approved'],
          reason: 'content dedup only applies when the resolver actually '
              'runs, i.e. on a genuine two-sided change');
    });
  });

  group('append-only text transforms', () {
    Future<String> mergeNotes(String? b, String? l, String? r) async =>
        (await merge3WayAsync(
          base: {'notes': b},
          local: {'notes': l},
          remote: {'notes': r},
          policy: const MergePolicy(
              fieldOverrides: {'notes': AppendOnlyLinesResolver()}),
        ))
            .merged['notes'] as String;

    test('whole-value leading and trailing whitespace is trimmed', () async {
      expect(await mergeNotes('  alpha  ', ' beta ', ''), 'alpha\nbeta',
          reason: 'each line (here the entire value) is trimmed before '
              'joining');
    });

    test('embedded newlines are split into separate lines and deduped', () async {
      // A multi-line addition is line-split; the resulting lines dedup
      // against the existing base lines.
      expect(await mergeNotes('a', 'a\nb\nc', ''), 'a\nb\nc',
          reason: 'the multi-line addition is split and its `a` dedups '
              'against base');
      expect(await mergeNotes('a\nb', 'x\ny', ''), 'a\nb\nx\ny');
    });

    test('string mode splits lines while list mode keeps items atomic', () async {
      // Same content, two modes: a string value 'x\ny' becomes two lines,
      // whereas a list item 'x\ny' is a single atomic element that is never
      // split.
      expect(await mergeNotes('', 'x\ny', ''), 'x\ny',
          reason: 'string mode splits on newlines (and rejoins)');

      final res = await merge3WayAsync(
        base: {'log': <Object?>[]},
        local: {
          'log': ['x\ny']
        },
        remote: {'log': <Object?>[]},
        policy: const MergePolicy(
            fieldOverrides: {'log': AppendOnlyListResolver()}),
      );
          final m = (res.merged['log'] as List).cast<Object?>();
      expect(m, ['x\ny'],
          reason: 'list mode appends the item atomically — the embedded '
              'newline stays inside the element');
    });
  });

  group('append-only list identity', () {
    Future<List<Object?>> mergeLog(
        List<Object?>? b, List<Object?>? l, List<Object?>? r) async {
      final res = await merge3WayAsync(
        base: {'log': b},
        local: {'log': l},
        remote: {'log': r},
        policy: MergePolicy(fieldOverrides: {
          'log': AppendOnlyListResolver(
              identity: (item) => (item as Map)['id'] as String),
        }),
      );
      return (res.merged['log'] as List).cast<Object?>();
    }

    test('identical-looking events with distinct ids both survive', () async {
      final m = await mergeLog(const [], [
        {'id': 'e1', 'kind': 'approved'}
      ], [
        {'id': 'e2', 'kind': 'approved'}
      ]);
      expect(m, hasLength(2),
          reason: 'distinct event ids keep both identical-looking events');
      expect(m[0], {'id': 'e1', 'kind': 'approved'});
      expect(m[1], {'id': 'e2', 'kind': 'approved'});
    });

    test('the same id dedups across base, local, and remote', () async {
      final m = await mergeLog([
        {'id': 'e1', 'kind': 'approved'}
      ], [
        {'id': 'e1', 'kind': 'approved'},
        {'id': 'e2', 'kind': 'approved'}
      ], [
        {'id': 'e2', 'kind': 'approved'}
      ]);
      expect(m, hasLength(2),
          reason: 'the shared id collapses while distinct ids survive');
    });

    test('equal content with different ids stays distinct', () async {
      final m = await mergeLog(const [], [
        {'id': 'a', 'kind': 'x'}
      ], [
        {'id': 'b', 'kind': 'x'}
      ]);
      expect(m, hasLength(2),
          reason: 'identity keys win over content equality');
    });

    test('the first occurrence per id wins (base, then local, then remote)',
        () async {
      final m = await mergeLog([
        {'id': 'e1', 'kind': 'from-base'}
      ], [
        {'id': 'e1', 'kind': 'from-local'}
      ], [
        {'id': 'e1', 'kind': 'from-remote'}
      ]);
      expect(
          m,
          [
            {'id': 'e1', 'kind': 'from-base'}
          ],
          reason: 'the base occurrence is kept, later ones are duplicates');
    });
  });
}
