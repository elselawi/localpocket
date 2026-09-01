/// Typed row reads: the engine is the source of
/// truth — every test writes through the raw path and reads through the
/// typed path (or vice versa), so the typed layer can never silently
/// diverge from the raw surface.
library;

import 'dart:async';

import 'package:localpocket/src/internal/raw_surface.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import 'support/secrets.dart';
import 'support/tasks.dart';

Future<LocalPocket> openTasks() =>
    LocalPocket.open(path: ':memory:', stores: [Tasks.store.collectionSchema]);

/// Creates a file-backed `tasks` v1 table with an OPTIONAL title, inserts a
/// row with a null title (impossible through a NOT NULL column), and
/// reopens the same file with the typed schema — the corruption path a
/// typed reader must surface.
Future<LocalPocket> pocketWithNullTitle() async {
  final t = await tempDbPath();
  addTearDown(t.cleanup);
  final raw = await LocalPocket.open(
    path: t.path,
    stores: [
      CollectionSchema<Object?>(
        name: 'tasks',
        version: 1,
        fields: [Field.text('title')],
      ),
    ],
  );
  await raw.collection('tasks').put({'id': 'rowcase58000001', 'title': null});
  // Drop the persisted manifest so the reopen exercises the LEGACY adoption
  // path (a manifest-less database): the raw fixture deliberately declares a
  // different same-version schema than the typed one, which the manifest
  // manifest comparison would (correctly) refuse.
  await raw.db.execute("DELETE FROM lp_meta WHERE k = 'schema_manifest:tasks'");
  await raw.close();
  return LocalPocket.open(path: t.path, stores: [Tasks.store.collectionSchema]);
}

void main() {
  group('typed reads', () {
    test('case 50: call form returns the declared static type and value',
        () async {
      final db = await openTasks();
      addTearDown(db.close);
      const id = 'rowcase50000001';
      await db.collection('tasks').put({
        'id': id,
        'title': 'Ship it',
        'priority': 'low',
        'role': 'admin',
      });

      final rec = (await db.store(Tasks.store).get(id))!;
      final String title = rec(Tasks.title); // statically String
      expect(title, 'Ship it');
      expect(rec(Tasks.role), Role.admin);
    });

    test('case 51: .get alias returns nullable types, null when unset',
        () async {
      final db = await openTasks();
      addTearDown(db.close);
      const id = 'rowcase51000001';
      await db.collection('tasks').put({'id': id, 'title': 'x'});

      final rec = (await db.store(Tasks.store).get(id))!;
      final int? count = rec.get(Tasks.count); // statically int?
      expect(count, isNull);
      final Priority? priority = rec.get(Tasks.priority);
      expect(priority, isNull);
    });

    test('case 52: id and archived read the system columns', () async {
      final db = await openTasks();
      addTearDown(db.close);
      const id = 'rowcase52000001';
      await db.collection('tasks').put({'id': id, 'title': 'x'});
      // A synced row survives archive locally (unsynced creates vanish —
      // the engine's keepUnsyncedArchives rule); ack marks it synced.
      await db.outbox
          .ack('tasks', id, serverUpdated: '2026-01-01 00:00:00.000Z');
      await db.collection('tasks').archive(id);

      final rec = (await db.store(Tasks.store).get(id))!;
      expect(rec.id, id);
      expect(rec.archived, isTrue);
    });

    test(
        'case 53: extra exposes undeclared keys, excludes declared and '
        'system columns', () async {
      final db = await openTasks();
      addTearDown(db.close);
      const id = 'rowcase53000001';
      await db.collection('tasks').put({
        'id': id,
        'title': 'x',
        'legacy_flag': true,
        'nested': {
          'a': [1, 2]
        },
      });

      final rec = (await db.store(Tasks.store).get(id))!;
      expect(rec.extra, {
        'legacy_flag': true,
        'nested': {
          'a': [1, 2]
        },
      });
      expect(rec.extra.keys, isNot(contains('title')));
      expect(rec.extra.keys, isNot(contains('id')));
      expect(rec.extra.keys, isNot(contains('archived')));
      expect(rec.extra.keys, isNot(contains('priority')));
    });

    test('case 54: enum decodes from its wire string', () async {
      final db = await openTasks();
      addTearDown(db.close);
      const id = 'rowcase54000001';
      await db
          .collection('tasks')
          .put({'id': id, 'title': 'x', 'role': 'admin', 'priority': 'high'});

      final rec = (await db.store(Tasks.store).get(id))!;
      expect(rec(Tasks.role), Role.admin);
      expect(rec(Tasks.priority), Priority.high);
    });

    test(
        'case 55: unknown stored enum string throws ValidationException on '
        'typed read, no silent default', () async {
      final db = await openTasks();
      addTearDown(db.close);
      const id = 'rowcase55000001';
      await db
          .collection('tasks')
          .put({'id': id, 'title': 'x', 'role': 'admin'});
      // Bypass the engine's CHECK constraint (corruption tolerated by the
      // raw path, surfaced by the typed path):
      await db.db.execute('PRAGMA ignore_check_constraints = ON');
      await db.db.execute(
          'UPDATE "tasks" SET role = ? WHERE id = ?', ['superuser', id]);
      await db.db.execute('PRAGMA ignore_check_constraints = OFF');

      // The raw path tolerates the off-contract value…
      final raw = await db.collection('tasks').get(id);
      expect(raw!['role'], 'superuser');
      // …the typed path refuses to default silently.
      final rec = (await db.store(Tasks.store).get(id))!;
      expect(
        () => rec(Tasks.role),
        throwsA(
            isA<ValidationException>().having((e) => e.field, 'field', 'role')),
      );
    });

    test('case 56: date/dateTime decode UTC epoch milliseconds', () async {
      final db = await openTasks();
      addTearDown(db.close);
      const id = 'rowcase56000001';
      const epoch = 1751366400000;
      await db
          .collection('tasks')
          .put({'id': id, 'title': 'x', 'dueDay': epoch, 'dueAt': epoch});

      final rec = (await db.store(Tasks.store).get(id))!;
      expect(rec(Tasks.dueDay), epoch);
      final DateTime due = rec(Tasks.dueAt)!;
      expect(due, DateTime.fromMillisecondsSinceEpoch(epoch, isUtc: true));
      expect(due.isUtc, isTrue);
    });

    test('case 57: reading a field excluded by select throws naming it',
        () async {
      final db = await openTasks();
      addTearDown(db.close);
      const id = 'rowcase57000001';
      await db
          .collection('tasks')
          .put({'id': id, 'title': 'x', 'role': 'admin'});

      final raw = await db.collection('tasks').get(id);
      final projected =
          TypedRow<Tasks>(Tasks.store, raw!, projected: {'title'});
      expect(projected(Tasks.title), 'x');
      expect(
        () => projected(Tasks.role),
        throwsA(isA<ValidationException>()
            .having((e) => e.field, 'field', 'role')
            .having((e) => e.message, 'message', contains('role'))),
      );
      expect(
        () => projected.archived,
        throwsA(isA<ValidationException>()
            .having((e) => e.field, 'field', 'archived')),
      );
      expect(
        () => projected.id,
        throwsA(
            isA<ValidationException>().having((e) => e.field, 'field', 'id')),
      );
    });

    test(
        'case 58: required value missing in a corrupt row throws the '
        'package-standard message', () async {
      final db = await pocketWithNullTitle();
      addTearDown(db.close);
      final rec = (await db.store(Tasks.store).get('rowcase58000001'))!;
      expect(
        () => rec(Tasks.title),
        throwsA(isA<ValidationException>()
            .having((e) => e.message, 'message', 'Field "title" is required.')
            .having((e) => e.field, 'field', 'title')),
      );
    });

    test('case 59: asMap returns the live logical map (mutations visible)',
        () async {
      final db = await openTasks();
      addTearDown(db.close);
      const id = 'rowcase59000001';
      await db.collection('tasks').put({'id': id, 'title': 'x'});

      final rec = (await db.store(Tasks.store).get(id))!;
      expect(rec.asMap()['title'], 'x');
      rec.asMap()['count'] = 7;
      expect(rec(Tasks.count), 7);
    });

    test('case 60: TypedRow does not implement Map', () async {
      final db = await openTasks();
      addTearDown(db.close);
      const id = 'rowcase60000001';
      await db.collection('tasks').put({'id': id, 'title': 'x'});

      final rec = (await db.store(Tasks.store).get(id))!;
      expect(rec is! Map, isTrue);
    });

    test('case 61: no per-read copy — the row wraps the map by reference',
        () async {
      final db = await openTasks();
      addTearDown(db.close);
      const id = 'rowcase61000001';
      await db.collection('tasks').put({'id': id, 'title': 'x'});

      // The engine's LRU point-read cache deep-clones BETWEEN separate gets
      // (engine behavior, untouched); the typed layer's guarantee is that it
      // wraps whatever map it receives by reference.
      final map = await db.collection('tasks').get(id);
      final row = TypedRow<Tasks>(Tasks.store, map!);
      expect(identical(row.asMap(), map), isTrue);
      // And through TypedCollection.get the same wrapping holds:
      final viaCollection = await db.store(Tasks.store).get(id);
      expect(identical(viaCollection!.asMap(), viaCollection.asMap()), isTrue);
    });

    test('case 62: null in a .req() field never reads as a silent null',
        () async {
      final db = await pocketWithNullTitle();
      addTearDown(db.close);
      final rec = (await db.store(Tasks.store).get('rowcase58000001'))!;
      expect(() => rec(Tasks.title), throwsA(isA<ValidationException>()));
    });

    test('case 63: stored 0/1 in a bool column decodes to bool', () async {
      final db = await openTasks();
      addTearDown(db.close);
      const id = 'rowcase63000001';
      await db.collection('tasks').put({'id': id, 'title': 'x'});
      await db.db.execute('UPDATE "tasks" SET done = 1 WHERE id = ?', [id]);
      // Out-of-band SQL bypasses the point-read cache; invalidate it.
      db.notifyExternalChange({'tasks'});

      final rec = (await db.store(Tasks.store).get(id))!;
      expect(rec(Tasks.done), isTrue);
      await db.db.execute('UPDATE "tasks" SET done = 0 WHERE id = ?', [id]);
      db.notifyExternalChange({'tasks'});
      final rec2 = (await db.store(Tasks.store).get(id))!;
      expect(rec2(Tasks.done), isFalse);
    });

    test('case 64: negative and far-future epochs decode correctly', () async {
      final db = await openTasks();
      addTearDown(db.close);
      const id = 'rowcase64000001';
      await db.collection('tasks').put({
        'id': id,
        'title': 'x',
        'done': true,
        'dueAt': -1000000,
      });
      final rec = (await db.store(Tasks.store).get(id))!;
      expect(rec(Tasks.dueAt),
          DateTime.fromMillisecondsSinceEpoch(-1000000, isUtc: true));

      const far = 32503680000000; // year 3000
      await db.collection('tasks').patch(id, {'dueAt': far});
      final rec2 = (await db.store(Tasks.store).get(id))!;
      expect(rec2(Tasks.dueAt),
          DateTime.fromMillisecondsSinceEpoch(far, isUtc: true));
    });

    test(
        'case 65: an off-contract string in a date column surfaces a clear '
        'error, never a silent epoch parse', () async {
      // A table where dueAt was created as TEXT (an older, incompatible
      // definition) holds an ISO string; the typed reader must not guess.
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final raw = await LocalPocket.open(
        path: t.path,
        stores: [
          CollectionSchema<Object?>(
            name: 'tasks',
            version: 1,
            fields: [
              Field.text('title', required: true),
              Field.text('dueAt'),
            ],
          ),
        ],
      );
      await raw.collection('tasks').put({
        'id': 'rowcase65000001',
        'title': 'x',
        'dueAt': '2026-09-01T00:00:00Z'
      });
      // Drop the persisted manifest: the raw fixture deliberately declares a
      // different same-version schema (legacy adoption path — see case 58).
      await raw.db
          .execute("DELETE FROM lp_meta WHERE k = 'schema_manifest:tasks'");
      await raw.close();
      final db = await LocalPocket.open(
          path: t.path, stores: [Tasks.store.collectionSchema]);
      addTearDown(db.close);

      final rec = (await db.store(Tasks.store).get('rowcase65000001'))!;
      expect(
        () => rec(Tasks.dueAt),
        throwsA(isA<ValidationException>()
            .having((e) => e.field, 'field', 'dueAt')),
      );
    });

    test(
        'case 66: an extra key colliding with a declared field follows the '
        'engine codec exactly', () async {
      final db = await openTasks();
      addTearDown(db.close);
      const id = 'rowcase66000001';
      await db.collection('tasks').put({'id': id, 'title': 'real'});
      await db.db.execute('UPDATE "tasks" SET extra = ? WHERE id = ?',
          ['{"title":"sneaky","other":1}', id]);

      final rec = (await db.store(Tasks.store).get(id))!;
      final raw = await db.collection('tasks').get(id);
      // The typed layer mirrors the raw decoded map bit-for-bit (the codec
      // merges extra last, so the extra value shadows the column value).
      expect(rec.asMap(), raw);
      expect(rec(Tasks.title), raw!['title']);
      // `extra` never re-exposes a declared name:
      expect(rec.extra, {'other': 1});
    });

    test('case 67: extra is lossless (nested maps, lists, null, unicode)',
        () async {
      final db = await openTasks();
      addTearDown(db.close);
      const id = 'rowcase67000001';
      final payload = {
        'deep': {
          'list': [1, null, 'ü'],
        },
        'nul': null,
        'unicode': 'héllo wörld ✓',
      };
      await db.collection('tasks').put({'id': id, 'title': 'x', ...payload});

      final rec = (await db.store(Tasks.store).get(id))!;
      expect(rec.extra, payload);
    });

    test(
        'case 68: wrong-key decrypt errors surface unchanged (no typed '
        'masking)', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final key1 = List<int>.generate(32, (i) => (i * 7 + 13) % 256);
      final key2 = List<int>.generate(32, (i) => (i * 5 + 3) % 256);
      final a = await LocalPocket.open(
        path: t.path,
        stores: [SecretNotes.store.collectionSchema],
        fieldCipher: AesGcmFieldCipher(key1),
      );
      await a
          .collection('secretnotes')
          .put({'id': 'rowcase68000001', 'name': 'n', 'note': 'secret'});
      await a.close();

      final b = await LocalPocket.open(
        path: t.path,
        stores: [SecretNotes.store.collectionSchema],
        fieldCipher: AesGcmFieldCipher(key2),
      );
      addTearDown(b.close);
      Object? rawError;
      try {
        await b.collection('secretnotes').get('rowcase68000001');
      } catch (e) {
        rawError = e;
      }
      Object? typedError;
      try {
        final rec = await b.store(SecretNotes.store).get('rowcase68000001');
        rec!(SecretNotes.note);
      } catch (e) {
        typedError = e;
      }
      expect(rawError, isNotNull);
      expect(typedError.runtimeType, rawError.runtimeType);
    });

    test('case 69: a fetched row is a snapshot, not a live DB view', () async {
      final db = await openTasks();
      addTearDown(db.close);
      const id = 'rowcase69000001';
      await db.collection('tasks').put({'id': id, 'title': 'before'});

      final rec = (await db.store(Tasks.store).get(id))!;
      await db.collection('tasks').patch(id, {'title': 'after'});
      expect(rec(Tasks.title), 'before');
      final fresh = (await db.store(Tasks.store).get(id))!;
      expect(fresh(Tasks.title), 'after');
    });

    test('case 70: typed watchOne emits rows and null after purge', () async {
      final db = await openTasks();
      addTearDown(db.close);
      const id = 'rowcase70000001';
      await db.collection('tasks').put({'id': id, 'title': 'x'});

      final stream = db.store(Tasks.store).watchOne(id);
      final iterator = StreamIterator<TypedRow<Tasks>?>(stream);
      addTearDown(iterator.cancel);
      expect(await iterator.moveNext(), isTrue);
      expect(iterator.current!.id, id);

      await db.store(Tasks.store).purge(id);
      expect(await iterator.moveNext(), isTrue);
      expect(iterator.current, isNull);
    });

    test(
        'case 71: a json field holding a List (raw path) read through a Map '
        'descriptor throws a clear ValidationException', () async {
      final db = await openTasks();
      addTearDown(db.close);
      const id = 'rowcase71000001';
      await db.collection('tasks').put({
        'id': id,
        'title': 'x',
        'meta': {'k': 'v'}
      });
      await db.db.execute(
          'UPDATE "tasks" SET meta = ? WHERE id = ?', ['["a","b"]', id]);

      // The raw path tolerates a List in a json field…
      final raw = await db.collection('tasks').get(id);
      expect(raw!['meta'], ['a', 'b']);
      // …the typed surface is the stricter one.
      final rec = (await db.store(Tasks.store).get(id))!;
      expect(
        () => rec(Tasks.meta),
        throwsA(
            isA<ValidationException>().having((e) => e.field, 'field', 'meta')),
      );
    });

    test(
        'case 72: jsonList holding off-contract elements is a typed decode '
        'error, not a silent cast', () async {
      final db = await openTasks();
      addTearDown(db.close);
      const id = 'rowcase72000001';
      await db.collection('tasks').put({
        'id': id,
        'title': 'x',
        'tags': ['a']
      });
      await db.db
          .execute('UPDATE "tasks" SET tags = ? WHERE id = ?', ['[1,2]', id]);

      final rec = (await db.store(Tasks.store).get(id))!;
      expect(
        () => rec(Tasks.tags),
        throwsA(
            isA<ValidationException>().having((e) => e.field, 'field', 'tags')),
      );
    });

    test('case 73: a corrupt system column value surfaces a typed error', () {
      // A row whose stored id is not a string (only possible through
      // corruption) must never leak a raw cast.
      final corrupt = TypedRow<Tasks>(Tasks.store, {'id': 123, 'title': 'x'});
      expect(
        () => corrupt.id,
        throwsA(isA<ValidationException>()
            .having((e) => e.message, 'message', contains('no valid id value'))
            .having((e) => e.field, 'field', 'id')),
      );
    });
  });
}
