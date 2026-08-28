/// Typed `upsert` / `upsertAll`: field-native writes with create-or-merge
/// semantics. The typed layer adds no validation of its own — every case is
/// pinned against the engine's raw behavior (mirroring `put`/`putAll`).
library;

import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import 'support/tasks.dart';

Future<LocalPocket> openTasks() =>
    LocalPocket.open(path: ':memory:', stores: [Tasks.store.collectionSchema]);

Future<List<String>> allIds(LocalPocket db) =>
    db.collection('tasks').query().all().ids();

void main() {
  group('typed upsert', () {
    test('creates a record when missing, with Writes.id', () async {
      final db = await openTasks();
      addTearDown(db.close);
      final id = rid('upsert', 1);
      await db.store(Tasks.store).upsert([
        Writes.id(id),
        Tasks.title.set('created'),
      ]);
      expect((await db.collection('tasks').get(id))!['title'], 'created');
    });

    test('generates an id when Writes.id is omitted', () async {
      final db = await openTasks();
      addTearDown(db.close);
      await db.store(Tasks.store).upsert([Tasks.title.set('gen')]);
      final ids = await allIds(db);
      expect(ids, hasLength(1));
      expect(ids.single, matches(RegExp(r'^[a-z0-9]{15}$')));
    });

    test('merges only the listed fields and preserves the rest', () async {
      final db = await openTasks();
      addTearDown(db.close);
      final id = rid('upsert', 2);
      final tasks = db.store(Tasks.store);
      await tasks.put([
        Writes.id(id),
        Tasks.title.set('original'),
        Tasks.priority.set(Priority.high),
        Tasks.done.set(true),
      ]);

      await tasks.upsert([
        Writes.id(id),
        Tasks.priority.set(Priority.low),
      ]);

      final raw = await db.collection('tasks').get(id);
      expect(raw!['title'], 'original', reason: 'untouched field survives');
      expect(raw['priority'], 'low');
      expect(raw['done'], isTrue);
    });

    test('does not throw for a missing record where patch would', () async {
      final db = await openTasks();
      addTearDown(db.close);
      final id = rid('upsert', 3);
      final tasks = db.store(Tasks.store);
      await expectLater(tasks.patch(id, [Tasks.title.set('x')]),
          throwsA(isA<RecordNotFoundException>()));
      await tasks.upsert([Writes.id(id), Tasks.title.set('x')]);
      expect((await db.collection('tasks').get(id))!['title'], 'x');
    });

    test('throws on create when a required field is missing', () async {
      final db = await openTasks();
      addTearDown(db.close);
      final id = rid('upsert', 4);
      await expectLater(
        () => db.store(Tasks.store).upsert([
          Writes.id(id),
          Tasks.priority.set(Priority.normal), // title is required
        ]),
        throwsA(isA<ValidationException>()
            .having((e) => e.message, 'message', 'Field "title" is required.')
            .having((e) => e.field, 'field', 'title')),
      );
    });

    test('rejects a malformed Writes.id', () async {
      final db = await openTasks();
      addTearDown(db.close);
      await expectLater(
        () => db
            .store(Tasks.store)
            .upsert([Writes.id('BAD'), Tasks.title.set('x')]),
        throwsA(isA<ValidationException>()
            .having((e) => e.field, 'field', 'id')
            .having(
                (e) => e.message, 'message', contains('Invalid record id'))),
      );
    });

    test('encodes field-native values through the boundary codec', () async {
      final db = await openTasks();
      addTearDown(db.close);
      final id = rid('upsert', 5);
      final local = DateTime(2026, 9, 1, 12, 0, 0);
      await db.store(Tasks.store).upsert([
        Writes.id(id),
        Tasks.title.set('x'),
        Tasks.role.set(Role.admin),
        Tasks.dueAt.set(local),
        Tasks.estimate.set(2.5),
      ]);
      final raw = await db.collection('tasks').get(id);
      expect(raw!['role'], 'admin');
      expect(raw['estimate'], 2.5);
      expect(raw['dueAt'], local.toUtc().millisecondsSinceEpoch);
    });

    test('typed upsertAll merges and creates in one batch', () async {
      final db = await openTasks();
      addTearDown(db.close);
      final a = rid('upsert', 6);
      final b = rid('upsert', 7);
      final tasks = db.store(Tasks.store);
      await tasks
          .put([Writes.id(a), Tasks.title.set('a'), Tasks.done.set(false)]);

      await tasks.upsertAll([
        [Writes.id(a), Tasks.done.set(true)],
        [Writes.id(b), Tasks.title.set('b')],
      ]);

      final ra = (await db.collection('tasks').get(a))!;
      expect(ra['title'], 'a');
      expect(ra['done'], isTrue);
      expect((await db.collection('tasks').get(b))!['title'], 'b');
    });

    test('typed and raw upserts share the same merge storage', () async {
      final db = await openTasks();
      addTearDown(db.close);
      final id = rid('upsert', 8);
      await db.store(Tasks.store).upsert([
        Writes.id(id),
        Tasks.title.set('typed'),
      ]);
      // A raw upsert over the same id merges, not replaces.
      await db.collection('tasks').upsert({'id': id, 'priority': 'high'});
      expect((await db.collection('tasks').get(id))!['title'], 'typed');
      expect((await db.collection('tasks').get(id))!['priority'], 'high');
    });

    test('typed upsert inside a transaction', () async {
      final db = await openTasks();
      addTearDown(db.close);
      final id = rid('upsert', 9);
      await db.transaction((tx) async {
        final tTasks = tx.store(Tasks.store);
        await tTasks.put([Writes.id(id), Tasks.title.set('tx')]);
        await tTasks.upsert([
          Writes.id(id),
          Tasks.priority.set(Priority.high),
        ]);
      });
      final raw = await db.collection('tasks').get(id);
      expect(raw!['title'], 'tx');
      expect(raw['priority'], 'high');
    });
  });
}
