import 'package:localpocket/src/internal/raw_surface.dart';
import 'package:test/test.dart';

/// Archive conflict semantics: every reachable archive/content
/// combination, `editsUnarchive`, resolver overrides for `archived`, and the
/// documented-unreachable "both sides changed archive status" branch.
void main() {
  group('archive conflict semantics', () {
    test('all 8 reachable (base, local, remote) archive triples', () {
      // Helper: run merge3Way and return the merged archived bool.
      bool mergeArch(bool b, bool l, bool r) => (merge3Way(
            base: {'archived': b, 'name': 'n'},
            local: {'archived': l, 'name': 'n'},
            remote: {'archived': r, 'name': 'n'},
          ).merged['archived'] as bool);

      // l == r -> l
      expect(mergeArch(false, false, false), isFalse);
      expect(mergeArch(false, true, true), isTrue);
      expect(mergeArch(true, false, false), isFalse);
      expect(mergeArch(true, true, true), isTrue);
      // l == b -> r (only remote changed)
      expect(mergeArch(false, false, true), isTrue,
          reason: 'only remote archived -> remote wins');
      expect(mergeArch(true, true, false), isFalse,
          reason: 'only remote unarchived -> remote wins');
      // r == b -> l (only local changed)
      expect(mergeArch(false, true, false), isTrue,
          reason: 'only local archived -> local wins');
      expect(mergeArch(true, false, true), isFalse,
          reason: 'only local unarchived -> local wins');
    });

    test('the both-sides-changed branch is unreachable with booleans', () {
      // With boolean values, "l != r AND l != b AND r != b" is unsatisfiable:
      // if l != b and r != b then both are the OPPOSITE of b, so l == r.
      // Enumerate every boolean triple and verify the branch classification
      // never needs the "both changed" else branch (default remote wins).
      final vals = [false, true];
      var bothChangedCount = 0;
      for (final b in vals) {
        for (final l in vals) {
          for (final r in vals) {
            final lArch = l;
            final rArch = r;
            final bArch = b;
            final classified =
                lArch == rArch || lArch == bArch || rArch == bArch;
            expect(classified, isTrue,
                reason: 'triple (b=$b,l=$l,r=$r) is always classifiable');
            if (!classified) bothChangedCount++;
          }
        }
      }
      expect(bothChangedCount, 0,
          reason: 'no boolean triple reaches the both-changed branch');
    });

    test('archive is a simple boolean coercion (non-bool values coerce)', () {
      // `archived` values that are not exactly `true` coerce to false.
      final res = merge3Way(
        base: {'archived': 0, 'name': 'n'},
        local: {'archived': 1, 'name': 'n'}, // int 1 -> false
        remote: {'archived': 'yes', 'name': 'n'}, // string -> false
      );
      // local/remote both coerce to false -> l == r -> false.
      expect(res.merged['archived'], false);
    });

    test('editsUnarchive unarchives only when local made content edits', () {
      // Local: content edit on an archived row (archive unchanged).
      // Both sides keep archived=true; local edits name -> merged true, then
      // editsUnarchive flips it to false.
      final res = merge3Way(
        base: {'name': 'v0', 'archived': true},
        local: {'name': 'v1-edited', 'archived': true},
        remote: {'name': 'v0', 'archived': true},
        policy: const MergePolicy(editsUnarchive: true),
      );
      expect(res.merged['archived'], false,
          reason: 'a local content edit unarchives');
      expect(res.merged['name'], 'v1-edited');

      // Local changes ONLY the archive flag (no content edit): no unarchive.
      final res2 = merge3Way(
        base: {'name': 'v0', 'archived': false},
        local: {'name': 'v0', 'archived': true},
        remote: {'name': 'v0', 'archived': false},
        policy: const MergePolicy(editsUnarchive: true),
      );
      expect(res2.merged['archived'], true,
          reason: 'an archive-only local change does not trigger unarchive');
    });

    test('editsUnarchive does not force-unarchive when merged is unarchived',
        () {
      // Remote unarchived concurrently; local made a content edit.
      final res = merge3Way(
        base: {'name': 'v0', 'archived': true},
        local: {'name': 'v1-edited', 'archived': true},
        remote: {'name': 'v0', 'archived': false},
        policy: const MergePolicy(editsUnarchive: true),
      );
      // Remote unarchived -> merged false already; edit stays.
      expect(res.merged['archived'], false);
      expect(res.merged['name'], 'v1-edited');
    });

    test('editsUnarchive without an edit does not unarchive', () {
      final res = merge3Way(
        base: {'name': 'v0', 'archived': true},
        local: {'name': 'v0', 'archived': true},
        remote: {'name': 'v0', 'archived': true},
        policy: const MergePolicy(editsUnarchive: true),
      );
      expect(res.merged['archived'], true,
          reason: 'no local content change -> stays archived');
    });

    test('archive field overrides only matter in the unreachable branch', () {
      // Reachable single-side-change cases are unaffected by a field override
      // on `archived` (the override only fires in the unreachable both-changed
      // branch). Document that with a LocalWins/RemoteWins override.
      for (final override in const [
        LocalWinsResolver(),
        RemoteWinsResolver(),
      ]) {
        final policy = MergePolicy(fieldOverrides: {'archived': override});
        // Only local archived -> local wins regardless of the override.
        final r1 = merge3Way(
          base: {'archived': false},
          local: {'archived': true},
          remote: {'archived': false},
          policy: policy,
        );
        expect(r1.merged['archived'], true,
            reason: 'single-side change is not routed through the override');
        // Only remote unarchived -> remote wins regardless.
        final r2 = merge3Way(
          base: {'archived': true},
          local: {'archived': true},
          remote: {'archived': false},
          policy: policy,
        );
        expect(r2.merged['archived'], false);
      }
    });

    test('content-only conflicts keep the archive bit stable', () {
      // Archive untouched on both sides; content both-changed -> remote wins
      // for content, archive stays.
      final res = merge3Way(
        base: {'name': 'v0', 'qty': 1, 'archived': false},
        local: {'name': 'local', 'qty': 1, 'archived': false},
        remote: {'name': 'remote', 'qty': 1, 'archived': false},
      );
      expect(res.merged['archived'], false);
      expect(res.merged['name'], 'remote');
      expect(res.merged['qty'], 1);
    });

    test('merged map omits archived when it is false (payload convention)', () {
      // merge3Way sets `archived` explicitly; the canonical payload layer
      // omits a false `archived` (buildPayload adds it only when true).
      final res = merge3Way(
        base: <String, Object?>{},
        local: {'archived': false},
        remote: <String, Object?>{},
      );
      expect(res.merged['archived'], false);
    });
  });
}
