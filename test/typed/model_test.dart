/// TypedModel domain wrappers: the base stores the row snapshot and
/// forwards system columns (`id`, `archived`, `extra`); subclass getters
/// stay compile-checked through `row(def.field)`. Mirrors the documented
/// `Task` recipe end-to-end, including snapshot semantics across writes.
library;

import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import 'support/tasks.dart';

/// The canonical recipe: positional tear-off ctor, typed intent getters,
/// one derived computation.
final class Task extends TypedModel<Tasks> {
  Task(super.row);

  String get title => row(Tasks.title);
  Priority? get priority => row(Tasks.priority);
  bool get isDone => row(Tasks.done) ?? false;

  String get upperTitle => '${id.substring(0, 2)}:${title.toUpperCase()}';
}

Future<LocalPocket> openTasks() => LocalPocket.open(
    path: ':memory:', stores: [Tasks.instance.collectionSchema]);

void main() {
  group('TypedModel', () {
    test('base forwards system columns; subclass getters type-check', () async {
      final db = await openTasks();
      addTearDown(db.close);
      final id = rid('mdlcase', 1);

      await db.store(Tasks.instance).put([
        Writes.id(id),
        Tasks.title.set('Ship it'),
        Tasks.done.set(false),
      ]);

      final task = Task((await db.store(Tasks.instance).get(id))!);
      expect(task.id, id);
      expect(task.archived, isFalse);
      expect(task.title, 'Ship it');
      expect(task.isDone, isFalse); // null descriptor ?? false
      expect(task.upperTitle, '${id.substring(0, 2)}:SHIP IT');
    });

    test('models wrap immutable snapshots: later writes do not leak in',
        () async {
      final db = await openTasks();
      addTearDown(db.close);
      final id = rid('mdlcase', 2);
      final c = db.store(Tasks.instance);

      await c.put([Writes.id(id), Tasks.title.set('before')]);
      final stale = Task((await c.get(id))!);

      await c.patch(id, [Tasks.title.set('after')]);

      expect(stale.title, 'before'); // wrapper held its snapshot
      expect((await c.get(id))!(Tasks.title), 'after');
      // A fresh wrap sees the committed state:
      expect(Task((await c.get(id))!).title, 'after');
    });
  });
}
