import 'package:localpocket/src/internal/raw_surface.dart';
import 'package:test/test.dart';

void main() {
  final tasksSchema = CollectionSchema<Object?>(
    name: 'tasks',
    version: 1,
    keepUnsyncedArchives: true,
    fields: [
      Field.text('title', required: true),
      Field.bool('done'),
      Field.text('assignedTo'),
      Field.int('priority'),
    ],
  );

  final notesSchema = CollectionSchema<Object?>(
    name: 'notes',
    version: 1,
    fields: [
      Field.text('content', required: true),
    ],
  );

  group('Local Mutation Hooks', () {
    late LocalPocket db;

    setUp(() async {
      db = await LocalPocket.open(
        path: ':memory:',
        stores: [tasksSchema, notesSchema],
      );
    });

    tearDown(() async {
      await db.close();
    });

    test('put emits ChangeAction.create on new record', () async {
      final events = <RecordChangeEvent>[];
      final sub = db.collection('tasks').events.listen(events.add);

      await db.collection('tasks').put({
        'id': 'task00000000001',
        'title': 'Buy groceries',
        'done': false,
      });

      await Future<void>.delayed(Duration.zero);
      expect(events, hasLength(1));
      final event = events.single;
      expect(event.store, 'tasks');
      expect(event.id, 'task00000000001');
      expect(event.origin, ChangeOrigin.local);
      expect(event.action, ChangeAction.create);
      expect(event.oldRecord, isNull);
      expect(event.newRecord?['title'], 'Buy groceries');
      expect(event.newRecord?['done'], false);
      expect(event.changedFields, contains('title'));
      expect(event.changedFields, contains('done'));
      expect(event.isLocal, isTrue);

      await sub.cancel();
    });

    test('put emits ChangeAction.update on existing record', () async {
      await db.collection('tasks').put({
        'id': 'task00000000001',
        'title': 'Buy groceries',
        'done': false,
      });

      final events = <RecordChangeEvent>[];
      final sub = db.collection('tasks').events.listen(events.add);

      await db.collection('tasks').put({
        'id': 'task00000000001',
        'title': 'Buy groceries and milk',
        'done': false,
      });

      await Future<void>.delayed(Duration.zero);
      expect(events, hasLength(1));
      final event = events.single;
      expect(event.origin, ChangeOrigin.local);
      expect(event.action, ChangeAction.update);
      expect(event.oldRecord?['title'], 'Buy groceries');
      expect(event.newRecord?['title'], 'Buy groceries and milk');
      expect(event.changedFields, {'title'});

      await sub.cancel();
    });

    test('patch emits update with old and new record states', () async {
      await db.collection('tasks').put({
        'id': 'task00000000001',
        'title': 'Original title',
        'done': false,
        'priority': 1,
      });

      final events = <RecordChangeEvent>[];
      final sub = db.collection('tasks').events.listen(events.add);

      await db.collection('tasks').patch('task00000000001', {
        'done': true,
        'priority': 2,
      });

      await Future<void>.delayed(Duration.zero);
      expect(events, hasLength(1));
      final event = events.single;
      expect(event.action, ChangeAction.update);
      expect(event.oldRecord?['done'], false);
      expect(event.oldRecord?['priority'], 1);
      expect(event.oldRecord?['title'], 'Original title');
      expect(event.newRecord?['done'], true);
      expect(event.newRecord?['priority'], 2);
      expect(event.newRecord?['title'], 'Original title');
      expect(event.changedFields, {'done', 'priority'});

      await sub.cancel();
    });

    test('archive and restore emit archive and restore actions', () async {
      await db.collection('tasks').put({
        'id': 'task00000000001',
        'title': 'Archive me',
        'done': false,
      });

      final events = <RecordChangeEvent>[];
      final sub = db.collection('tasks').events.listen(events.add);

      await db.collection('tasks').archive('task00000000001');
      await db.collection('tasks').restore('task00000000001');

      await Future<void>.delayed(Duration.zero);
      expect(events, hasLength(2));
      expect(events[0].action, ChangeAction.archive);
      expect(events[0].oldRecord?['archived'], false);
      expect(events[0].newRecord?['archived'], true);
      expect(events[0].changedFields, {'archived'});

      expect(events[1].action, ChangeAction.restore);
      expect(events[1].oldRecord?['archived'], true);
      expect(events[1].newRecord?['archived'], false);
      expect(events[1].changedFields, {'archived'});

      await sub.cancel();
    });

    test('purge emits purge action with oldRecord populated and newRecord null',
        () async {
      await db.collection('tasks').put({
        'id': 'task00000000001',
        'title': 'Purge me',
        'done': false,
      });

      final events = <RecordChangeEvent>[];
      final sub = db.collection('tasks').events.listen(events.add);

      await db.collection('tasks').purge('task00000000001');

      await Future<void>.delayed(Duration.zero);
      expect(events, hasLength(1));
      final event = events.single;
      expect(event.action, ChangeAction.purge);
      expect(event.oldRecord?['title'], 'Purge me');
      expect(event.newRecord, isNull);
      expect(event.changedFields, contains('title'));

      await sub.cancel();
    });

    test('putAll emits create events for all batched records', () async {
      final events = <RecordChangeEvent>[];
      final sub = db.collection('tasks').events.listen(events.add);

      await db.collection('tasks').putAll([
        {
          'id': 'task00000000001',
          'title': 'Task 1',
          'done': false,
        },
        {
          'id': 'task00000000002',
          'title': 'Task 2',
          'done': true,
        },
      ]);

      await Future<void>.delayed(Duration.zero);
      expect(events, hasLength(2));
      expect(events[0].id, 'task00000000001');
      expect(events[0].action, ChangeAction.create);
      expect(events[1].id, 'task00000000002');
      expect(events[1].action, ChangeAction.create);

      await sub.cancel();
    });

    test('onFieldTransition catches specific state change like done: false -> true',
        () async {
      await db.collection('tasks').put({
        'id': 'task00000000001',
        'title': 'Task 1',
        'done': false,
      });

      final transitions = <RecordChangeEvent>[];
      final sub = db
          .collection('tasks')
          .onFieldTransition('done', from: false, to: true)
          .listen(transitions.add);

      // Mutate something else -> not emitted
      await db.collection('tasks').patch('task00000000001', {'title': 'Updated'});

      // Complete the task -> emitted!
      await db.collection('tasks').patch('task00000000001', {'done': true});

      // Complete again with same state -> not emitted
      await db.collection('tasks').patch('task00000000001', {'title': 'Again'});

      await Future<void>.delayed(Duration.zero);
      expect(transitions, hasLength(1));
      expect(transitions.single.oldRecord?['done'], false);
      expect(transitions.single.newRecord?['done'], true);

      await sub.cancel();
    });

    test('convenience filters onLocal and onFieldChange work across collections',
        () async {
      final localTaskChanges = <RecordChangeEvent>[];
      final sub = db.onLocal(store: 'tasks', field: 'done').listen(localTaskChanges.add);

      await db.collection('tasks').put({
        'id': 'task00000000001',
        'title': 'Task 1',
        'done': false,
      });

      await db.collection('notes').put({
        'id': 'note00000000001',
        'content': 'Hello note',
      });

      await db.collection('tasks').patch('task00000000001', {'done': true});

      await Future<void>.delayed(Duration.zero);
      // First is create with done: false, second is patch with done: true
      expect(localTaskChanges, hasLength(2));
      expect(localTaskChanges.every((e) => e.store == 'tasks'), isTrue);

      await sub.cancel();
    });

    test('transactions only emit events upon successful commit', () async {
      final events = <RecordChangeEvent>[];
      final sub = db.events.listen(events.add);

      await db.transaction((tx) async {
        await tx.collection('tasks').put({
          'id': 'task00000000001',
          'title': 'Task In Tx',
          'done': false,
        });
        await tx.collection('notes').put({
          'id': 'note00000000001',
          'content': 'Note In Tx',
        });
      });

      await Future<void>.delayed(Duration.zero);
      expect(events, hasLength(2));
      expect(events[0].store, 'tasks');
      expect(events[1].store, 'notes');

      await sub.cancel();
    });

    test('rolled-back transaction or savepoint drops buffered events', () async {
      final events = <RecordChangeEvent>[];
      final sub = db.events.listen(events.add);

      // Top level rollback
      try {
        await db.transaction((tx) async {
          await tx.collection('tasks').put({
            'id': 'task00000000001',
            'title': 'Will Rollback',
            'done': false,
          });
          throw Exception('Aborting transaction');
        });
      } catch (_) {}

      await Future<void>.delayed(Duration.zero);
      expect(events, isEmpty, reason: 'rolled-back transaction emits no events');

      // Nested savepoint rollback
      await db.transaction((tx) async {
        await tx.collection('tasks').put({
          'id': 'task00000000002',
          'title': 'Committed in outer Tx',
          'done': false,
        });

        try {
          await tx.transaction((nested) async {
            await nested.collection('tasks').put({
              'id': 'task00000000003',
              'title': 'Rolled back in nested savepoint',
              'done': false,
            });
            throw Exception('Rollback savepoint');
          });
        } catch (_) {}
      });

      await Future<void>.delayed(Duration.zero);
      expect(events, hasLength(1));
      expect(events.single.id, 'task00000000002');

      await sub.cancel();
    });
  });
}
