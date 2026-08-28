/// TypedPocket wiring base: lifecycle mechanics that consumers otherwise
/// hand-roll — future-memoized open (no double-open race), guarded access
/// before opening, retryable failed opens, close/reopen cycles, and
/// per-definition handle caching. File-backed cases prove persistence
/// survives a reopen.
library;

import 'dart:io';

import 'package:localpocket/typed.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import 'support/tasks.dart';

/// A wired application database exercising the subclass contract: declare
/// [path], [stores], and one-line handle getters.
final class AppDb extends TypedPocket {
  AppDb(super.path);

  @override
  StoreDefs get stores => [Tasks.instance];

  TypedCollection<Tasks> get tasks => handle(Tasks.instance);
}

void main() {
  group('TypedPocket', () {
    test('guards every access before open with an actionable StateError', () {
      final db = AppDb(inMemoryDatabasePath);
      expect(() => db.pocket, throwsStateError);
      expect(() => db.tasks, throwsStateError);
      expect(db.isOpen, isFalse);
    });

    test('concurrent opens share one future; repeats return the same handle',
        () async {
      final db = AppDb(inMemoryDatabasePath);
      addTearDown(db.close);

      final first = db.open();
      final second = db.open(); // Same event-loop turn: must reuse _opening.
      final results = await Future.wait([first, second]);
      expect(identical(results[0], results[1]), isTrue);
      expect(identical(await db.open(), results[0]), isTrue);
      expect(db.isOpen, isTrue);
    });

    test('declared stores exist at first use; raw coexistence holds', () async {
      final db = AppDb(inMemoryDatabasePath);
      addTearDown(db.close);
      await db.open();

      final id = rid('pckbase', 1);
      await db.tasks.put([Writes.id(id), Tasks.title.set('Hi')]);
      await db.tasks.patch(id, [Tasks.title.set('Hello')]);

      // Typed read through the cached handle.
      final row = await db.tasks.get(id);
      expect(row!(Tasks.title), 'Hello');

      // Raw surface over the same rows remains reachable via pocket.
      final raw =
          (await db.pocket.collection('tasks').get(id))!['title'] as String;
      expect(raw, 'Hello');
    });

    test('handles are cached by definition identity', () async {
      final db = AppDb(inMemoryDatabasePath);
      addTearDown(db.close);
      await db.open();

      expect(identical(db.tasks, db.handle(Tasks.instance)), isTrue);
      expect(identical(db.tasks, db.tasks), isTrue);
      // The engine registry backs the guarantee on the raw surface too:
      expect(
        identical(
          db.pocket.store(Tasks.instance),
          db.pocket.store(Tasks.instance),
        ),
        isTrue,
      );
      // TypedPocket shares the engine cache rather than shadowing it:
      expect(identical(db.tasks, db.pocket.store(Tasks.instance)), isTrue);
    });

    test('engine wrapper cache expires at close, bindings survive', () async {
      final temp = await tempDbPath();
      addTearDown(temp.cleanup);
      final db = AppDb(temp.path);
      const id = 'regcache0000001';

      await db.open();
      await db.tasks.put([Writes.id(id), Tasks.title.set('a')]);
      final before = db.tasks;
      await db.close();
      await db.open();

      final after = db.tasks;
      expect(identical(before, after), isFalse);
      expect((await after.get(id))!(Tasks.title), 'a');
      await db.close();
    });

    test('a failed open is not memoized: the next call retries', () async {
      final temp = await tempDbPath();
      addTearDown(temp.cleanup);

      // SQLite cannot create nested directories: an absent parent fails the
      // open on every platform.
      final parent = File(temp.path).parent.path;
      final badDb = AppDb('$parent${Platform.pathSeparator}missing_dir'
          '${Platform.pathSeparator}app.db');
      await expectLater(badDb.open(), throwsA(anything));
      expect(badDb.isOpen, isFalse);

      badDb.path = temp.path;
      final opened = await badDb.open();
      expect(opened, same(badDb.pocket));
    });

    test('openTyped registers definitions directly, no .schema ceremony',
        () async {
      final db =
          await openTyped(path: inMemoryDatabasePath, stores: [Tasks.instance]);
      addTearDown(db.close);

      final id = rid('pcktyped', 1);
      await db.store(Tasks.instance).put([
        Writes.id(id),
        Tasks.title.set('sugar'),
      ]);
      expect(
        (await db.collection('tasks').get(id))!['title'],
        'sugar',
      );
    });

    test('close is idempotent; reopen rebuilds handles over persisted data',
        () async {
      final temp = await tempDbPath();
      addTearDown(temp.cleanup);
      final db = AppDb(temp.path);

      final id = rid('pckbase', 2);
      await db.open();
      await db.tasks.put([Writes.id(id), Tasks.title.set('kept')]);

      final tasksBefore = db.tasks;
      await db.close();
      await db.close(); // Idempotent.
      expect(db.isOpen, isFalse);

      await db.open();
      final tasksAfter = db.tasks;
      // The cache was cleared: fresh wrappers over the fresh connection.
      expect(identical(tasksBefore, tasksAfter), isFalse);

      final row = await tasksAfter.get(id);
      expect(row!(Tasks.title), 'kept');

      await db.close();
    });
  });
}
