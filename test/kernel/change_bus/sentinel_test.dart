import 'dart:async';

import 'package:localpocket/src/kernel/change_bus.dart';
import 'package:localpocket/src/kernel/ids.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';

/// One omitted-value sentinel: every omitted-value comparison in the
/// change/event layer uses a single canonical sentinel instance.
///
/// Before the fix, `change_bus.dart` carried TWO different sentinel objects
/// (`const Object _sentinelUnset` and `class _SentinelUnset`), and
/// `onFieldTransition` used the wrong one as its default — so the no-arg
/// "any transition of this field" convenience could never match anything.
/// These tests pin the unified single-sentinel contract.
void main() {
  group('RecordChangeEvent omitted-value sentinel', () {
    test('matches() without from/to means "any transition of field"', () {
      const event = RecordChangeEvent(
        store: 'widgets',
        id: 'a',
        origin: ChangeOrigin.local,
        action: ChangeAction.update,
        changedFields: {'qty'},
      );
      expect(event.matches(field: 'qty'), isTrue,
          reason: 'no from/to = any transition');
      expect(event.matches(field: 'qty', from: 1), isFalse,
          reason: 'from=1 does not match a null old value');
    });

    test('explicit null matches create/purge transitions, absent does not', () {
      const created = RecordChangeEvent(
        store: 'widgets',
        id: 'a',
        origin: ChangeOrigin.local,
        action: ChangeAction.create,
        changedFields: {'qty'},
      );
      // oldRecord is null here; an ABSENT `from` must not demand equality
      // with null — only an EXPLICIT `from: null` does.
      expect(created.matches(field: 'qty'), isTrue);
      expect(created.matches(field: 'qty', from: null), isTrue);
      expect(created.matches(field: 'qty', from: 1), isFalse);
    });

    test('onFieldTransition(field) with no args receives ANY change of field',
        () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');

      final received = <RecordChangeEvent>[];
      final sub = col.onFieldTransition('qty').listen(received.add);
      addTearDown(sub.cancel);

      final id = generateRecordId();
      await col.put(record(name: 'apple', qty: 1));
      await col.put(record(name: 'apple', qty: 2, id: id));
      await _pump();

      expect(received, hasLength(2),
          reason: 'create AND update both transition qty');
    });

    test('onFieldTransition(field, from: v) filters on the old value',
        () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();
      await col.put(record(name: 'apple', qty: 1, id: id));

      final ones = <RecordChangeEvent>[];
      final sub = col.onFieldTransition('qty', from: 1).listen(ones.add);
      addTearDown(sub.cancel);

      await col.put(record(name: 'apple', qty: 2, id: id));
      await col.put(record(name: 'apple', qty: 3, id: id));
      await _pump();

      expect(ones, hasLength(1),
          reason: 'only the 1→2 transition has old value 1');
      expect(ones.single.isFieldTransition('qty', from: 1, to: 2), isTrue);
    });

    test('onFieldTransition with BOTH sides specified and no match stays empty',
        () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();
      await col.put(record(name: 'apple', qty: 1, id: id));

      final none = <RecordChangeEvent>[];
      final sub =
          col.onFieldTransition('qty', from: 99, to: 100).listen(none.add);
      addTearDown(sub.cancel);

      await col.put(record(name: 'apple', qty: 2, id: id));
      await _pump();
      expect(none, isEmpty);
    });
  });
}

Future<void> _pump() async {
  // Broadcast streams deliver asynchronously; a couple of event-loop turns
  // make the assertions deterministic without fixed sleeps.
  for (var i = 0; i < 6; i++) {
    await Future<void>.delayed(Duration.zero);
  }
  await Future<void>.delayed(const Duration(milliseconds: 20));
}
