import 'dart:async';

import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

/// ChangeBus lifecycle, broadcast, and overflow-contract tests.
void main() {
  group('ChangeBus', () {
    test('delivers to multiple listeners', () async {
      final bus = ChangeBus();
      final received1 = <ChangeSet>[];
      final received2 = <ChangeSet>[];
      final sub1 = bus.stream.listen(received1.add);
      final sub2 = bus.stream.listen(received2.add);

      bus.emit(const ChangeSet('widgets', {'a', 'b'}));
      bus.emit(const ChangeSet('orders', {'x'}));

      await Future<void>.delayed(Duration.zero);
      expect(received1, hasLength(2));
      expect(received2, hasLength(2));
      expect(received1[0].store, 'widgets');
      expect(received1[0].ids, {'a', 'b'});
      expect(received1[1].store, 'orders');
      expect(received2[1].ids, {'x'});

      await sub1.cancel();
      await sub2.cancel();
      bus.close();
    });

    test('emission with no listeners drops silently', () async {
      final bus = ChangeBus();
      expect(() => bus.emit(const ChangeSet('w', {'a'})), returnsNormally);
      // Still usable: a later listener receives subsequent events.
      final received = <ChangeSet>[];
      final sub = bus.stream.listen(received.add);
      bus.emit(const ChangeSet('w', {'b'}));
      await Future<void>.delayed(Duration.zero);
      expect(received, hasLength(1));
      expect(received.single.ids, {'b'});
      await sub.cancel();
      bus.close();
    });

    test('emit after close is a no-op and does not throw', () async {
      final bus = ChangeBus();
      final received = <ChangeSet>[];
      final sub = bus.stream.listen(received.add);
      bus.close();
      expect(() => bus.emit(const ChangeSet('w', {'a'})), returnsNormally);
      expect(() => bus.emit(const ChangeSet('w', {'b'})), returnsNormally);
      await Future<void>.delayed(Duration.zero);
      expect(received, isEmpty);
      await sub.cancel();
    });

    test('close completes the stream once', () async {
      final bus = ChangeBus();
      final done = expectLater(bus.stream, emitsDone);
      bus.close();
      await done;
    });

    test('close is idempotent and never throws', () async {
      final bus = ChangeBus();
      bus.close();
      expect(() => bus.close(), returnsNormally);
      expect(() => bus.close(), returnsNormally);
    });

    test('listeners receive the same ChangeSet object (shared ids set)',
        () async {
      final bus = ChangeBus();
      final idsSeen = <Set<String>>[];
      Set<String>? secondListenerIds;
      final sub1 = bus.stream.listen((cs) => idsSeen.add(cs.ids));
      final sub2 = bus.stream.listen((cs) => secondListenerIds = cs.ids);

      final ids = <String>{'a'};
      bus.emit(ChangeSet('w', ids));

      await Future<void>.delayed(Duration.zero);
      expect(idsSeen, hasLength(1));
      expect(identical(idsSeen.single, secondListenerIds), isTrue,
          reason: 'broadcast delivers the same ChangeSet instance to all');
      // Documented aliasing: one listener mutating the shared ids set is
      // visible to the other listener (and to the emitter's original set).
      idsSeen.single.add('mutated');
      expect(secondListenerIds, contains('mutated'));
      expect(ids, contains('mutated'));

      await sub1.cancel();
      await sub2.cancel();
      bus.close();
    });

    test('empty ids set means unknown / external change (documented)',
        () async {
      final bus = ChangeBus();
      final received = <ChangeSet>[];
      final sub = bus.stream.listen(received.add);
      bus.emit(const ChangeSet('w', {}));
      await Future<void>.delayed(Duration.zero);
      expect(received.single.ids, isEmpty);
      await sub.cancel();
      bus.close();
    });

    test('maxPendingEvents is declared but overflow is not enforced', () async {
      // The public API declares maxPendingEvents and ChangeBusOverflowError,
      // but the current broadcast implementation has no pending queue cap:
      // emitting more than maxPendingEvents neither throws
      // ChangeBusOverflowError nor drops events. This test locks in the
      // documented no-overflow behavior so the unused API is not ambiguous.
      expect(ChangeBus.maxPendingEvents, 10000);

      final bus = ChangeBus();
      var received = 0;
      final sub = bus.stream.listen((_) => received++);

      const total = ChangeBus.maxPendingEvents + 1;
      for (var i = 0; i < total; i++) {
        bus.emit(ChangeSet('w', {'$i'}));
      }
      // The emission loop must not throw.
      bus.close();
      await Future<void>.delayed(Duration.zero);
      expect(received, total,
          reason: 'no event may be dropped by an overflow cap');
      await sub.cancel();
    });

    test('events are delivered asynchronously in emission order', () async {
      final bus = ChangeBus();
      final stores = <String>[];
      final sub = bus.stream.listen((cs) => stores.add(cs.store));
      for (var i = 0; i < 50; i++) {
        bus.emit(ChangeSet('s$i', {'$i'}));
      }
      bus.close();
      await Future<void>.delayed(Duration.zero);
      expect(stores, hasLength(50));
      expect(stores.first, 's0');
      expect(stores.last, 's49');
      await sub.cancel();
    });

    test('ChangeSet is immutable in store but ids is a mutable reference', () {
      const cs = ChangeSet('widgets', {'a'});
      expect(cs.store, 'widgets');
      expect(cs.ids, {'a'});
    });
  });
}
