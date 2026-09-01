/// Typed writes: the
/// typed layer performs no validation of its own — every case is pinned
/// against the engine's raw behavior.
library;

import 'package:localpocket/src/internal/raw_surface.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import 'support/tasks.dart';

Future<LocalPocket> openTasks({int maxDocBytes = 1900000}) => LocalPocket.open(
    path: ':memory:',
    stores: [Tasks.store.collectionSchema],
    maxDocBytes: maxDocBytes);

Future<List<String>> allIds(LocalPocket db) =>
    db.collection('tasks').query().all().ids();

void main() {
  group('typed writes', () {
    test('case 73: put without a Writes.id generates a [a-z0-9]{15} id',
        () async {
      final db = await openTasks();
      addTearDown(db.close);
      await db.store(Tasks.store).put([Tasks.title.set('generated')]);
      final ids = await allIds(db);
      expect(ids, hasLength(1));
      expect(ids.single, matches(RegExp(r'^[a-z0-9]{15}$')));
    });

    test('case 74: a malformed Writes.id surfaces the engine error unchanged',
        () async {
      final db = await openTasks();
      addTearDown(db.close);
      await expectLater(
        () =>
            db.store(Tasks.store).put([Writes.id('BAD'), Tasks.title.set('x')]),
        throwsA(isA<ValidationException>()
            .having((e) => e.field, 'field', 'id')
            .having(
                (e) => e.message, 'message', contains('Invalid record id'))),
      );
    });

    test('case 75: omitting a .req() field throws the engine required error',
        () async {
      final db = await openTasks();
      addTearDown(db.close);
      await expectLater(
        () => db.store(Tasks.store).put([Tasks.priority.set(Priority.low)]),
        throwsA(isA<ValidationException>()
            .having((e) => e.message, 'message', 'Field "title" is required.')
            .having((e) => e.field, 'field', 'title')),
      );
    });

    test('case 76: enum writes encode to wire strings', () async {
      final db = await openTasks();
      addTearDown(db.close);
      const id = 'wrtcase76000001';
      await db.store(Tasks.store).put([
        Writes.id(id),
        Tasks.title.set('x'),
        Tasks.role.set(Role.admin),
      ]);
      final raw = await db.collection('tasks').get(id);
      expect(raw!['role'], 'admin');
      expect(raw['role'], isNot(isA<Enum>()));
    });

    test('case 77: dateTime writes encode to UTC epoch milliseconds', () async {
      final db = await openTasks();
      addTearDown(db.close);
      const id = 'wrtcase77000001';
      final local = DateTime(2026, 9, 1, 12, 0, 0); // local zone
      await db.store(Tasks.store).put([
        Writes.id(id),
        Tasks.title.set('x'),
        Tasks.dueAt.set(local),
      ]);
      final raw = await db.collection('tasks').get(id);
      expect(raw!['dueAt'], local.toUtc().millisecondsSinceEpoch);
      final rec = (await db.store(Tasks.store).get(id))!;
      expect(rec(Tasks.dueAt), local.toUtc());
    });

    test(
        'case 78: Writes.extra lands in the logical map and round-trips '
        'through extra', () async {
      final db = await openTasks();
      addTearDown(db.close);
      const id = 'wrtcase78000001';
      await db.store(Tasks.store).put([
        Writes.id(id),
        Tasks.title.set('x'),
        Writes.extra('legacy_key', 'kept'),
      ]);
      final raw = await db.collection('tasks').get(id);
      expect(raw!['legacy_key'], 'kept');
      final rec = (await db.store(Tasks.store).get(id))!;
      expect(rec.extra['legacy_key'], 'kept');
    });

    test('case 79: patch touches only the set field', () async {
      final db = await openTasks();
      addTearDown(db.close);
      const id = 'wrtcase79000001';
      await db.store(Tasks.store).put([
        Writes.id(id),
        Tasks.title.set('x'),
        Tasks.priority.set(Priority.low),
        Tasks.count.set(7),
      ]);
      await db.store(Tasks.store).patch(id, [Tasks.done.set(true)]);
      final raw = await db.collection('tasks').get(id);
      expect(raw!['done'], isTrue);
      expect(raw['title'], 'x');
      expect(raw['priority'], 'low');
      expect(raw['count'], 7);
    });

    test('case 80: patch on a missing id throws RecordNotFoundException',
        () async {
      final db = await openTasks();
      addTearDown(db.close);
      await expectLater(
        () => db
            .store(Tasks.store)
            .patch('wrtcase80000001', [Tasks.done.set(true)]),
        throwsA(isA<RecordNotFoundException>()),
      );
    });

    test('case 81: putAll is one batch; an error rolls back the whole batch',
        () async {
      final db = await openTasks();
      addTearDown(db.close);
      await expectLater(
        () => db.store(Tasks.store).putAll([
          [Tasks.title.set('a')],
          [Tasks.priority.set(Priority.low)], // title omitted
        ]),
        throwsA(isA<ValidationException>()),
      );
      expect(await allIds(db), isEmpty,
          reason: 'the first record must roll back with the batch');
      // patchAll: same all-or-nothing semantics.
      const id = 'wrtcase81000001';
      await db.store(Tasks.store).put([Writes.id(id), Tasks.title.set('a')]);
      await expectLater(
        () => db.store(Tasks.store).patchAll({
          id: [Tasks.done.set(true)],
          'wrtcase81000002': [Tasks.done.set(true)], // missing
        }),
        throwsA(isA<RecordNotFoundException>()),
      );
      final raw = await db.collection('tasks').get(id);
      expect(raw!['done'], isNot(true),
          reason: 'the first patch must roll back with the batch');
    });

    test('case 82: archive/restore/purge pass through', () async {
      final db = await openTasks();
      addTearDown(db.close);
      const id = 'wrtcase82000001';
      await db.store(Tasks.store).put([Writes.id(id), Tasks.title.set('x')]);
      // Ack so the archive keeps the row locally (engine semantics).
      await db.outbox
          .ack('tasks', id, serverUpdated: '2026-01-01 00:00:00.000Z');
      await db.store(Tasks.store).archive(id);
      expect((await db.collection('tasks').get(id))!['archived'], isTrue);
      await db.store(Tasks.store).restore(id);
      expect((await db.collection('tasks').get(id))!['archived'], isFalse);
      await db.store(Tasks.store).purge(id);
      expect(await db.collection('tasks').get(id), isNull);
    });

    test(
        'case 83: the facade performs no validation of its own — the '
        'engine\'s size-cap message surfaces unchanged', () async {
      final db = await openTasks(maxDocBytes: 128);
      addTearDown(db.close);
      await expectLater(
        () => db.store(Tasks.store).put([Tasks.title.set('x' * 500)]),
        throwsA(isA<ValidationException>()
            .having((e) => e.message, 'message', contains('max size'))
            .having((e) => e.field, 'field', isNull)),
      );
    });

    test('case 84: tx.store performs the same mutations atomically', () async {
      final db = await openTasks();
      addTearDown(db.close);
      await db.transaction((tx) async {
        await tx.store(Tasks.store).put([Tasks.title.set('tx-a')]);
        await tx.store(Tasks.store).put([Tasks.title.set('tx-b')]);
      });
      expect(await allIds(db), hasLength(2));

      // A failing transaction rolls back its typed writes:
      await expectLater(
        db.transaction((tx) async {
          await tx.store(Tasks.store).put([Tasks.title.set('tx-c')]);
          throw StateError('boom');
        }),
        throwsStateError,
      );
      expect(await allIds(db), hasLength(2));
    });
  });

  group('write edge cases', () {
    test('Writes.extra rejects declared-field keys at apply time', () async {
      final db = await openTasks();
      addTearDown(db.close);
      await expectLater(
        db.store(Tasks.store).put([Writes.extra('title', 'sneaky')]),
        throwsA(isA<ValidationException>()
            .having((e) => e.field, 'field', 'title')),
      );
      expect(await allIds(db), isEmpty);
    });

    test('system keys cannot be smuggled through Writes.extra', () async {
      final db = await openTasks();
      addTearDown(db.close);
      for (final key in ['id', 'archived', 'hidden', 'extra']) {
        await expectLater(
          db.store(Tasks.store).put([Writes.extra(key, 'sneaky')]),
          throwsA(
              isA<ValidationException>().having((e) => e.field, 'field', key)),
          reason: key,
        );
      }
    });

    test('a Writes.id inside patch is rejected — ids are immutable', () async {
      final db = await openTasks();
      addTearDown(db.close);
      final id = rid('wrtec', 74);
      await db.store(Tasks.store).put([Writes.id(id), Tasks.title.set('x')]);
      await expectLater(
        () => db
            .store(Tasks.store)
            .patch(id, [Writes.id(id), Tasks.done.set(true)]),
        throwsArgumentError,
      );
    });

    test('duplicate Writes.id values in one put are rejected', () async {
      final db = await openTasks();
      addTearDown(db.close);
      final id = rid('wrtec', 745);
      await expectLater(
        () => db.store(Tasks.store).put([
          Writes.id(id),
          Writes.id(id),
          Tasks.title.set('x'),
        ]),
        throwsArgumentError,
      );
    });

    test('setting the same field twice: last write wins', () async {
      final db = await openTasks();
      addTearDown(db.close);
      final id = rid('wrtec', 75);
      await db.store(Tasks.store).put([
        Writes.id(id),
        Tasks.title.set('first'),
        Tasks.title.set('second'),
      ]);
      expect((await db.collection('tasks').get(id))!['title'], 'second');
    });

    test('patch with an empty write list is the engine no-op', () async {
      final db = await openTasks();
      addTearDown(db.close);
      final id = rid('wrtec', 76);
      await db.store(Tasks.store).put([Writes.id(id), Tasks.title.set('x')]);
      await db.store(Tasks.store).patch(id, []);
      expect((await db.collection('tasks').get(id))!['title'], 'x');
    });

    test('put on an existing id fully replaces per engine semantics', () async {
      final db = await openTasks();
      addTearDown(db.close);
      final id = rid('wrtec', 77);
      await db.store(Tasks.store).put([
        Writes.id(id),
        Tasks.title.set('a'),
        Tasks.priority.set(Priority.low),
      ]);
      await db.store(Tasks.store).put([Writes.id(id), Tasks.title.set('b')]);
      final raw = await db.collection('tasks').get(id);
      expect(raw!['title'], 'b');
      // The engine's decoded map always carries every declared field; the
      // replaced value decodes as null.
      expect(raw['priority'], isNull, reason: 'upsert replaces, not merges');
    });

    test('unicode, empty, and very-long text values pass through', () async {
      final db = await openTasks();
      addTearDown(db.close);
      final id = rid('wrtec', 78);
      await db.store(Tasks.store).put([
        Writes.id(id),
        Tasks.title.set('üñí ✓ ${'z' * 5000}'),
      ]);
      final raw = await db.collection('tasks').get(id);
      expect(raw!['title'], 'üñí ✓ ${'z' * 5000}');
      await db.store(Tasks.store).put([Writes.id(id), Tasks.title.set('')]);
      expect((await db.collection('tasks').get(id))!['title'], '');
    });

    test('pre-1970 dateTime stores a negative epoch and decodes correctly',
        () async {
      final db = await openTasks();
      addTearDown(db.close);
      final id = rid('wrtec', 79);
      final before = DateTime.utc(1960, 4, 12);
      await db.store(Tasks.store).put([
        Writes.id(id),
        Tasks.title.set('x'),
        Tasks.dueAt.set(before),
      ]);
      final raw = await db.collection('tasks').get(id);
      expect(raw!['dueAt'], isNegative);
      final rec = (await db.store(Tasks.store).get(id))!;
      expect(rec(Tasks.dueAt), before);
    });

    test('putAll duplicate ids inside a batch: last write wins', () async {
      final db = await openTasks();
      addTearDown(db.close);
      final id = rid('wrtec', 80);
      await db.store(Tasks.store).putAll([
        [Writes.id(id), Tasks.title.set('first')],
        [Writes.id(id), Tasks.title.set('second')],
      ]);
      final ids = await allIds(db);
      expect(ids, [id]);
      expect((await db.collection('tasks').get(id))!['title'], 'second');
    });

    test('uniqueWhenActive scoping stays the engine\'s', () async {
      final db = await LocalPocket.open(
        path: ':memory:',
        stores: [
          CollectionSchema<Object?>(
            name: 'codes',
            version: 1,
            fields: [
              Field.text('code', required: true, uniqueWhenActive: true),
            ],
          ),
        ],
      );
      addTearDown(db.close);
      final codes = db.collection('codes');
      final a = rid('wrteca', 811);
      final b = rid('wrteca', 812);
      await codes.put({'id': a, 'code': 'x'});
      await expectLater(codes.put({'id': b, 'code': 'x'}),
          throwsA(isA<UniqueConstraintException>()));
      // Uniqueness is active-only: archiving the first record frees 'x'.
      // (Ack first so the archived row stays locally — engine semantics.)
      await db.outbox
          .ack('codes', a, serverUpdated: '2026-01-01 00:00:00.000Z');
      await codes.archive(a);
      await codes.put({'id': b, 'code': 'x'});
      // Restoring it again collides with the active record.
      await expectLater(
          codes.restore(a), throwsA(isA<UniqueConstraintException>()));
    });
  });
}
