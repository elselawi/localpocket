import 'package:localpocket/src/kernel/local_pocket.dart' as kernel
    show KernelDatabase;
import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import '../support/fixtures/tasks_store.dart';

LocalPocketOptions options({String path = ':memory:'}) =>
    LocalPocketOptions(path: path, stores: [Tasks.store]);

void main() {
  group('LocalPocket facade', () {
    test('open + capabilities match the underlying engine', () async {
      final db = await LocalPocket.open(options());
      addTearDown(db.close);

      final caps = await db.capabilities;
      expect(caps.isWeb, isFalse);
      expect(caps.sqliteVersion, isNotEmpty);

      final raw = await openPocket(path: ':memory:');
      addTearDown(raw.close);
      final rawCaps = raw.kernel.capabilities;
      expect(caps.sqliteVersion, rawCaps.sqliteVersion);
      expect(caps.hasStrict, rawCaps.hasStrict);
      expect(caps.walSupported, rawCaps.walSupported);
      expect(caps.hasFts5, rawCaps.hasFts5);
    });

    test('close fails subsequent sends with a typed error', () async {
      final db = await LocalPocket.open(options());
      await db.close();
      expect(
        db.store(Tasks.store).get('whatever'),
        throwsA(isA<StateError>()),
      );
      expect(db.capabilities, throwsA(isA<StateError>()));
      // Closing twice is idempotent.
      await db.close();
    });

    test(
        'a failing openWith surfaces the original error, never a cleanup '
        'failure', () async {
      await expectLater(
        LocalPocket.openWith(
          options(),
          (handler) => throw StateError('runtime boom'),
        ),
        throwsA(isA<StateError>()
            .having((e) => e.message, 'message', 'runtime boom')),
      );
    });

    test(
        'a corrupt row distinguishes a missing required field from a null '
        'one', () {
      final absent = Row(Tasks.store, {'id': 'x', 'archived': false});
      final nulled = Row(Tasks.store, {
        'id': 'x',
        'archived': false,
        'title': null,
      });

      expect(
        () => absent(Tasks.title),
        throwsA(isA<ValidationException>()
            .having((e) => e.message, 'message', contains('missing'))),
      );
      expect(
        () => nulled(Tasks.title),
        throwsA(isA<ValidationException>()
            .having((e) => e.message, 'message', contains('holds null'))),
      );
    });

    test('put returns the created row; get/getAll read it back', () async {
      final db = await LocalPocket.open(options());
      addTearDown(db.close);
      final tasks = db.store(Tasks.store);

      final created = await tasks.put([
        Tasks.title.set('Ship it'),
        Tasks.done.set(false),
        Tasks.priority.set(3),
      ]);
      expect(created.id, isNotEmpty);
      expect(created(Tasks.title), 'Ship it');
      expect(created(Tasks.done), false);
      expect(created(Tasks.priority), 3);
      expect(created.archived, isFalse);

      final row = await tasks.get(created.id);
      expect(row, isNotNull);
      expect(row!(Tasks.title), 'Ship it');

      final rows = await tasks.getAll([created.id, created.id]);
      expect(rows, hasLength(2), reason: 'one row per id occurrence');
      expect(rows[0]!.id, created.id);
      expect(rows[1]!.id, created.id);
    });

    test('upsert, patch, patchAll, archive, restore, purge', () async {
      final db = await LocalPocket.open(options());
      addTearDown(db.close);
      final tasks = db.store(Tasks.store);

      final created = await tasks.put([Tasks.title.set('a')]);
      final id = created.id;

      final upserted = await tasks
          .upsert([Writes.id(id), Tasks.title.set('b'), Tasks.done.set(true)]);
      expect(upserted(Tasks.title), 'b');
      expect(upserted(Tasks.done), true);

      final patched = await tasks.patch(id, [Tasks.priority.set(7)]);
      expect(patched(Tasks.title), 'b', reason: 'patch keeps other fields');
      expect(patched(Tasks.priority), 7);

      await tasks.patchAll({
        id: [Tasks.priority.set(8)]
      });
      expect((await tasks.get(id))!(Tasks.priority), 8);

      await tasks.archive(id);
      final archivedRow = await tasks.get(id);
      expect(archivedRow!.archived, isTrue,
          reason: 'get returns the archived record');
      final archived = await tasks
          .query(QuerySpec<Tasks>(
            where: [Tasks.title.eq('b')],
            includeArchived: true,
            limit: 10,
          ))
          .then((p) => p.items.single);
      expect(archived.archived, isTrue);

      await tasks.restore(id);
      expect((await tasks.get(id))!.archived, isFalse);

      await tasks.purge(id);
      expect(await tasks.get(id), isNull);
    });

    test('patch rejects id writes and unknown records', () async {
      final db = await LocalPocket.open(options());
      addTearDown(db.close);
      final tasks = db.store(Tasks.store);

      final created = await tasks.put([Tasks.title.set('x')]);
      expect(
        tasks.patch(created.id, [Writes.id('nope')]),
        throwsA(isA<ArgumentError>()),
      );
      expect(
        tasks.patch('missing-id', [Tasks.title.set('y')]),
        throwsA(isA<RecordNotFoundException>()),
      );
    });

    test('rows are immutable snapshots with defensive extras', () async {
      final db = await LocalPocket.open(options());
      addTearDown(db.close);
      final tasks = db.store(Tasks.store);

      final row = await tasks.put([
        Tasks.title.set('snap'),
        Writes.extra('color', 'blue'),
      ]);

      // toJson is a defensive (unmodifiable) copy.
      final map = row.toJson();
      expect(
        () => map['title'] = 'mutated',
        throwsA(isA<UnsupportedError>()),
      );
      expect(row(Tasks.title), 'snap');
      expect(row.extra.containsKey('new_key'), isFalse);

      // extra is an unmodifiable defensive snapshot.
      final extra = row.extra;
      expect(
        () => extra['color'] = 'red',
        throwsA(isA<UnsupportedError>()),
      );
      expect(row.extra['color'], 'blue');

      expect(map['id'], row.id);
    });

    test('projected-out fields throw FieldNotSelectedError', () async {
      final db = await LocalPocket.open(options());
      addTearDown(db.close);
      final tasks = db.store(Tasks.store);

      final created = await tasks.put([
        Tasks.title.set('projected'),
        Tasks.priority.set(2),
      ]);

      final page = await tasks.query(QuerySpec<Tasks>(
        where: [Tasks.store.id.eq(created.id)],
        select: [Tasks.title],
        limit: 10,
      ));
      final row = page.items.single;
      expect(row(Tasks.title), 'projected');
      expect(
        () => row(Tasks.priority),
        throwsA(isA<FieldNotSelectedError>()),
      );
      expect(
        () => row.archived,
        throwsA(isA<FieldNotSelectedError>()),
      );
    });

    test('corrupt stored values surface typed errors', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);

      final db = await LocalPocket.open(options(path: t.path));
      final created = await db.store(Tasks.store).put([
        Tasks.title.set('corrupt-me'),
      ]);
      await db.close();

      // Corrupt the JSON-list column out-of-band via a raw kernel
      // connection: the kernel's JSON decode succeeds (a map), the typed
      // list codec refuses it.
      final raw = await kernel.KernelDatabase.open(path: t.path, stores: []);
      await raw.traceExecute('UPDATE "tasks" SET "tags" = ? WHERE "id" = ?',
          ['{"a": 1}', created.id]);
      await raw.close();

      final reopened = await LocalPocket.open(options(path: t.path));
      addTearDown(reopened.close);
      final row = await reopened.store(Tasks.store).get(created.id);
      expect(row, isNotNull);
      expect(
        () => row!(Tasks.tags),
        throwsA(isA<ValidationException>()),
      );
    });

    test('committed changes flow as events', () async {
      final db = await LocalPocket.open(options());
      addTearDown(db.close);

      final events = <ChangeNotification>[];
      final sub = db.changes.listen(events.add);
      addTearDown(sub.cancel);

      final created = await db.store(Tasks.store).put([
        Tasks.title.set('eventful'),
      ]);
      await _waitFor(() => events.any((e) => e.ids.contains(created.id)));
      expect(events.last.storeName, 'tasks');
    });
  });
}

Future<void> _waitFor(bool Function() predicate,
    {Duration timeout = const Duration(seconds: 5)}) async {
  final deadline = DateTime.now().add(timeout);
  while (DateTime.now().isBefore(deadline)) {
    if (predicate()) return;
    await Future<void>.delayed(const Duration(milliseconds: 10));
  }
  fail('Timed out waiting for condition.');
}
