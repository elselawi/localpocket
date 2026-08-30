import 'dart:async';

import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';

/// Phase 1 — refactor plan §4.6: ordered watch snapshots must remain ordered.
/// An explicitly ordered query digests its rows IN ORDER, so a pure re-order
/// (same set, same rows, new positions) emits; an unordered query may digest
/// canonically. The web compiled watcher previously hardcoded `ordered: false`
/// and silently missed reorder-only changes (fixed alongside; the web side is
/// pinned in test/web/phase1_plan_bridge_test.dart).
void main() {
  group('snapshot digest ordering policy', () {
    final rows = [
      {'id': 'a', 'qty': 1},
      {'id': 'b', 'qty': 2},
    ];
    final reordered = [
      {'id': 'b', 'qty': 2},
      {'id': 'a', 'qty': 1},
    ];

    test('unordered digest is order-insensitive', () {
      expect(computeSnapshotDigest(rows), computeSnapshotDigest(reordered));
    });

    test('ordered digest is order-sensitive', () {
      expect(computeSnapshotDigest(rows, ordered: true),
          isNot(computeSnapshotDigest(reordered, ordered: true)));
    });
  });

  group('native ordered watch', () {
    late LocalPocket pocket;

    setUp(() async => pocket = await openPocket());
    tearDown(() => pocket.close());

    test('a pure re-order emits on an ordered watch', () async {
      final col = pocket.collection('widgets');
      final a = generateRecordId();
      final b = generateRecordId();
      await col.put(record(name: 'a', qty: 1, id: a));
      await col.put(record(name: 'b', qty: 2, id: b));

      final emissions = <List<Map<String, Object?>>>[];
      final sub = col
          .query()
          .orderBy('qty', desc: true)
          .limit(50)
          .watch()
          .listen(emissions.add);
      addTearDown(sub.cancel);
      await _waitFor(() => emissions.isNotEmpty);
      expect(emissions.first.map((r) => r['id']).toList(), [b, a]);

      // Same set, same rows, new positions: b drops below a.
      await col.put(record(name: 'b', qty: 0, id: b));
      await _waitFor(
        () => emissions.any((page) =>
            page.isNotEmpty && page.first['id'] == a && page.length == 2),
        timeout: const Duration(seconds: 5),
        reason: 'ordered watch must emit on a pure reorder (§4.6)',
      );
      expect(emissions.last.map((r) => r['id']).toList(), [a, b]);
    });

    test('an unrelated row does not re-emit an unchanged ordered snapshot',
        () async {
      final col = pocket.collection('widgets');
      await col.put(record(name: 'a', qty: 1, id: generateRecordId()));

      final emissions = <List<Map<String, Object?>>>[];
      final sub = col
          .query()
          .where('name', eq: 'a')
          .orderBy('qty', desc: true)
          .limit(50)
          .watch()
          .listen(emissions.add);
      addTearDown(sub.cancel);
      await _waitFor(() => emissions.isNotEmpty);

      final count = emissions.length;
      await col.put(record(name: 'unrelated', qty: 1));
      await Future<void>.delayed(const Duration(milliseconds: 150));
      expect(emissions.length, count,
          reason: 'dedupe still applies to ordered watches');
    });
  });
}

Future<void> _waitFor(
  bool Function() predicate, {
  Duration timeout = const Duration(seconds: 5),
  String reason = 'condition',
}) async {
  final deadline = DateTime.now().add(timeout);
  while (DateTime.now().isBefore(deadline)) {
    if (predicate()) return;
    await Future<void>.delayed(const Duration(milliseconds: 10));
  }
  fail('Timed out waiting for: $reason');
}
