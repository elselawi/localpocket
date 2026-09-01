import 'dart:async';

import 'package:localpocket/src/kernel/change_bus.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';

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

  group('RecordChangeEvent', () {
    test('getters and field checks work correctly', () {
      final event = RecordChangeEvent(
        store: 'tasks',
        id: 't1',
        origin: ChangeOrigin.local,
        action: ChangeAction.update,
        oldRecord: {
          'id': 't1',
          'title': 'Old',
          'done': false,
          'tags': ['a']
        },
        newRecord: {
          'id': 't1',
          'title': 'New',
          'done': true,
          'tags': ['a', 'b']
        },
        changedFields: {'title', 'done', 'tags'},
      );

      expect(event.isLocal, isTrue);
      expect(event.isRemote, isFalse);
      expect(event.isResolution, isFalse);

      final rendered = event.toString();
      expect(rendered, contains('RecordChangeEvent'));
      expect(rendered, contains('local'));
      expect(rendered, contains('update'));
      expect(rendered, contains('tasks/t1'));
      expect(rendered, contains('title'));

      expect(event.hasFieldChange('title'), isTrue);
      expect(event.hasFieldChange('done'), isTrue);
      expect(event.hasFieldChange('tags'), isTrue);
      expect(event.hasFieldChange('missing'), isFalse);

      expect(event.oldValue('title'), 'Old');
      expect(event.newValue('title'), 'New');
      expect(event.oldValue('missing'), isNull);

      // Transition matching
      expect(event.isFieldTransition('done', from: false, to: true), isTrue);
      expect(event.isFieldTransition('done', from: true, to: false), isFalse);
      expect(event.isFieldTransition('done', to: true), isTrue);
      expect(event.isFieldTransition('done', from: false), isTrue);
      expect(event.isFieldTransition('title', to: 'New'), isTrue);
      expect(event.isFieldTransition('tags', to: ['a', 'b']), isTrue);
      expect(event.isFieldTransition('missing', to: 'anything'), isFalse);
    });

    test('field transition handles null values explicitly', () {
      final event = RecordChangeEvent(
        store: 'tasks',
        id: 't2',
        origin: ChangeOrigin.remote,
        action: ChangeAction.update,
        oldRecord: {'id': 't2', 'assignedTo': null},
        newRecord: {'id': 't2', 'assignedTo': 'alice'},
        changedFields: {'assignedTo'},
      );

      expect(event.isRemote, isTrue);
      expect(event.isFieldTransition('assignedTo', from: null, to: 'alice'),
          isTrue);
      expect(event.isFieldTransition('assignedTo', from: 'bob', to: 'alice'),
          isFalse);
    });

    test('equality and hashCode support deep collection comparison', () {
      final e1 = RecordChangeEvent(
        store: 'tasks',
        id: 't1',
        origin: ChangeOrigin.local,
        action: ChangeAction.create,
        oldRecord: null,
        newRecord: {
          'title': 'Task 1',
          'meta': {'priority': 1}
        },
        changedFields: {'title', 'meta'},
      );

      final e2 = RecordChangeEvent(
        store: 'tasks',
        id: 't1',
        origin: ChangeOrigin.local,
        action: ChangeAction.create,
        oldRecord: null,
        newRecord: {
          'title': 'Task 1',
          'meta': {'priority': 1}
        },
        changedFields: {'title', 'meta'},
      );

      final e3 = RecordChangeEvent(
        store: 'tasks',
        id: 't1',
        origin: ChangeOrigin.remote,
        action: ChangeAction.create,
        oldRecord: null,
        newRecord: {
          'title': 'Task 1',
          'meta': {'priority': 1}
        },
        changedFields: {'title', 'meta'},
      );

      expect(e1, equals(e2));
      expect(e1.hashCode, equals(e2.hashCode));
      expect(e1, isNot(equals(e3)));
    });

    test('toJson and fromJson round-trip accurately', () {
      final event = RecordChangeEvent(
        store: 'tasks',
        id: 't1',
        origin: ChangeOrigin.resolution,
        action: ChangeAction.update,
        oldRecord: {'title': 'A', 'done': false},
        newRecord: {'title': 'B', 'done': true},
        changedFields: {'title', 'done'},
      );

      final json = event.toJson();
      final restored = RecordChangeEvent.fromJson(json);

      expect(restored.store, 'tasks');
      expect(restored.id, 't1');
      expect(restored.origin, ChangeOrigin.resolution);
      expect(restored.action, ChangeAction.update);
      expect(restored.oldRecord, {'title': 'A', 'done': false});
      expect(restored.newRecord, {'title': 'B', 'done': true});
      expect(restored.changedFields, {'title', 'done'});
      expect(restored, equals(event));
    });

    test('fromJson tolerates missing record maps and changedFields', () {
      final restored = RecordChangeEvent.fromJson({
        'store': 'tasks',
        'id': 't1',
        'origin': 'local',
        'action': 'create',
      });

      expect(restored.oldRecord, isNull);
      expect(restored.newRecord, isNull);
      expect(restored.changedFields, isEmpty);
      expect(restored.store, 'tasks');
      expect(restored.id, 't1');
      expect(restored.origin, ChangeOrigin.local);
      expect(restored.action, ChangeAction.create);
    });

    test('fromJson coerces record map keys to strings', () {
      final restored = RecordChangeEvent.fromJson({
        'store': 'tasks',
        'id': 't1',
        'origin': 'remote',
        'action': 'update',
        'oldRecord': {1: 'int-key', 'name': 'old'},
        'newRecord': {'name': 'new'},
        'changedFields': ['name'],
      });

      expect(restored.oldRecord, {'1': 'int-key', 'name': 'old'});
      expect(restored.newRecord, {'name': 'new'});
      expect(restored.changedFields, {'name'});
    });

    test('create and purge events round-trip without record maps', () {
      final created = RecordChangeEvent(
        store: 'tasks',
        id: 't1',
        origin: ChangeOrigin.local,
        action: ChangeAction.create,
        newRecord: {'title': 'A'},
        changedFields: {'title'},
      );
      final createJson = created.toJson();
      expect(createJson, isNot(contains('oldRecord')));
      final restoredCreate = RecordChangeEvent.fromJson(createJson);
      expect(restoredCreate, equals(created));
      expect(restoredCreate.oldRecord, isNull);
      expect(restoredCreate.newRecord, {'title': 'A'});

      final purged = RecordChangeEvent(
        store: 'tasks',
        id: 't1',
        origin: ChangeOrigin.remote,
        action: ChangeAction.purge,
        oldRecord: {'title': 'A'},
        changedFields: const {},
      );
      final purgeJson = purged.toJson();
      expect(purgeJson, isNot(contains('newRecord')));
      final restoredPurge = RecordChangeEvent.fromJson(purgeJson);
      expect(restoredPurge, equals(purged));
      expect(restoredPurge.newRecord, isNull);
      expect(restoredPurge.oldRecord, {'title': 'A'});
    });

    test('changedFields round-trip as a sorted string set', () {
      final event = RecordChangeEvent(
        store: 'tasks',
        id: 't1',
        origin: ChangeOrigin.resolution,
        action: ChangeAction.update,
        changedFields: {'zeta', 'alpha'},
      );
      expect(event.toJson()['changedFields'], ['alpha', 'zeta']);
      final restored = RecordChangeEvent.fromJson(event.toJson());
      expect(restored.changedFields, {'alpha', 'zeta'});
      expect(restored, equals(event));
    });

    test('Stream extension methods filter correctly', () async {
      final controller = StreamController<RecordChangeEvent>.broadcast();
      final stream = controller.stream;

      final localEvents = <RecordChangeEvent>[];
      final remoteEvents = <RecordChangeEvent>[];
      final resolutionEvents = <RecordChangeEvent>[];
      final tasksEvents = <RecordChangeEvent>[];
      final doneTransitions = <RecordChangeEvent>[];

      final actionEvents = <RecordChangeEvent>[];
      final fieldEvents = <RecordChangeEvent>[];

      stream.whereLocal().listen(localEvents.add);
      stream.whereRemote().listen(remoteEvents.add);
      stream.whereResolution().listen(resolutionEvents.add);
      stream.whereStore('tasks').listen(tasksEvents.add);
      stream.whereAction(ChangeAction.update).listen(actionEvents.add);
      stream.whereField('done').listen(fieldEvents.add);
      stream
          .whereFieldTransition('done', from: false, to: true)
          .listen(doneTransitions.add);

      final e1 = RecordChangeEvent(
        store: 'tasks',
        id: 't1',
        origin: ChangeOrigin.local,
        action: ChangeAction.update,
        oldRecord: {'done': false},
        newRecord: {'done': true},
        changedFields: {'done'},
      );
      final e2 = RecordChangeEvent(
        store: 'users',
        id: 'u1',
        origin: ChangeOrigin.remote,
        action: ChangeAction.create,
        oldRecord: null,
        newRecord: {'name': 'Alice'},
        changedFields: {'name'},
      );
      final e3 = RecordChangeEvent(
        store: 'tasks',
        id: 't2',
        origin: ChangeOrigin.resolution,
        action: ChangeAction.update,
        oldRecord: {'done': true},
        newRecord: {'done': false},
        changedFields: {'done'},
      );

      controller.add(e1);
      controller.add(e2);
      controller.add(e3);

      await Future<void>.delayed(Duration.zero);

      expect(localEvents, [e1]);
      expect(remoteEvents, [e2]);
      expect(resolutionEvents, [e3]);
      expect(tasksEvents, [e1, e3]);
      expect(actionEvents, [e1, e3], reason: 'both e1 and e3 are updates');
      expect(fieldEvents, [e1, e3], reason: 'both touch the done field');
      expect(doneTransitions, [e1]);

      await controller.close();
    });

    test(
        'shared record-event match helper supports origin/action/store/field filters',
        () {
      final event = RecordChangeEvent(
        store: 'tasks',
        id: 't1',
        origin: ChangeOrigin.local,
        action: ChangeAction.update,
        oldRecord: {'done': false, 'title': 'Old'},
        newRecord: {'done': true, 'title': 'New'},
        changedFields: {'done', 'title'},
      );

      expect(
        event.matches(
          store: 'tasks',
          origin: ChangeOrigin.local,
          action: ChangeAction.update,
          field: 'done',
        ),
        isTrue,
      );
      expect(
        event.matches(
          store: 'tasks',
          origin: ChangeOrigin.remote,
          action: ChangeAction.update,
          field: 'done',
        ),
        isFalse,
      );
      expect(
        event.matches(
          store: 'tasks',
          action: ChangeAction.update,
          field: 'done',
          from: false,
          to: true,
        ),
        isTrue,
      );

      final filtered = Stream.fromIterable([event])
          .whereMatches(
            origin: ChangeOrigin.local,
            action: ChangeAction.update,
            field: 'done',
          )
          .toList();

      expect(filtered, completion([event]));
    });
  });

  group('ChangeBusAware conveniences', () {
    test('hasListener and hasEventListeners track active subscriptions',
        () async {
      final bus = ChangeBus();
      expect(bus.hasListener, isFalse);
      expect(bus.hasEventListeners, isFalse);

      final sub = bus.stream.listen((_) {});
      final sub2 = bus.events.listen((_) {});
      await Future<void>.delayed(Duration.zero);
      expect(bus.hasListener, isTrue,
          reason: 'either stream listener makes hasListener true');
      expect(bus.hasEventListeners, isTrue);

      await sub.cancel();
      await sub2.cancel();
      bus.close();
    });

    test('LocalPocket-level onLocal and onRemote filter across collections',
        () async {
      final db = await openPocket();
      addTearDown(db.close);

      final local = <RecordChangeEvent>[];
      final remote = <RecordChangeEvent>[];
      final localSub = db.onLocal().listen(local.add);
      final remoteSub = db.onRemote().listen(remote.add);
      addTearDown(localSub.cancel);
      addTearDown(remoteSub.cancel);

      db.changeBus.emitEvent(RecordChangeEvent(
        store: 'widgets',
        id: 'a',
        origin: ChangeOrigin.local,
        action: ChangeAction.create,
        newRecord: {'name': 'x'},
        changedFields: {'name'},
      ));
      db.changeBus.emitEvent(RecordChangeEvent(
        store: 'widgets',
        id: 'b',
        origin: ChangeOrigin.remote,
        action: ChangeAction.update,
        oldRecord: {'name': 'y'},
        newRecord: {'name': 'z'},
        changedFields: {'name'},
      ));

      await Future<void>.delayed(Duration.zero);
      expect(local, hasLength(1), reason: 'only the local-origin event');
      expect(local.single.id, 'a');
      expect(remote, hasLength(1), reason: 'only the remote-origin event');
      expect(remote.single.id, 'b');
    });

    test('collection-level onLocal and onFieldChange filter one store',
        () async {
      final db = await openPocket();
      addTearDown(db.close);
      final col = db.collection('widgets');

      final locals = <RecordChangeEvent>[];
      final fieldChanges = <RecordChangeEvent>[];
      final localSub = col.onLocal().listen(locals.add);
      final fieldSub = col.onFieldChange('name').listen(fieldChanges.add);
      addTearDown(localSub.cancel);
      addTearDown(fieldSub.cancel);

      // A foreign-store event must not reach the collection-level filters.
      db.changeBus.emitEvent(RecordChangeEvent(
        store: 'orders',
        id: 'o1',
        origin: ChangeOrigin.local,
        action: ChangeAction.update,
        oldRecord: {'name': 'x'},
        newRecord: {'name': 'y'},
        changedFields: {'name'},
      ));
      db.changeBus.emitEvent(RecordChangeEvent(
        store: 'widgets',
        id: 'a',
        origin: ChangeOrigin.local,
        action: ChangeAction.update,
        oldRecord: {'name': 'x', 'qty': 1},
        newRecord: {'name': 'y', 'qty': 1},
        changedFields: {'name'},
      ));

      await Future<void>.delayed(Duration.zero);
      expect(locals, hasLength(1), reason: 'the orders event is filtered out');
      expect(locals.single.id, 'a');
      expect(fieldChanges, hasLength(1), reason: 'the name change matches');
      expect(fieldChanges.single.id, 'a');
    });
  });
}
