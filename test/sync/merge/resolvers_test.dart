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
}
