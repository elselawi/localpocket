/// Typed `getAll`: bulk point reads through one `id IN (...)` query. The
/// typed layer adds no validation of its own — every case is pinned against
/// the engine's raw behavior (mirroring `get`).
library;

import 'package:localpocket/src/internal/raw_surface.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import 'support/tasks.dart';

Future<LocalPocket> openTasks() =>
    LocalPocket.open(path: ':memory:', stores: [Tasks.store.collectionSchema]);

/// The shared `Tasks` def drops never-synced archives; this local def keeps
/// them so the archive-visibility parity with `get` is observable.
final class KeepTasks extends StoreDef<KeepTasks> {
  KeepTasks._() : super(name: 'keeptasks', version: 1);
  static final KeepTasks store = KeepTasks._();

  late final _title = schema.text('title').req();
  static TextFieldReq<KeepTasks> get title => store._title;

  @override
  List<FieldDef<KeepTasks, Object?>> get fields => [_title];

  @override
  bool get keepUnsyncedArchives => true;
}

void main() {
  group('typed getAll', () {
    test('returns rows in ids order', () async {
      final db = await openTasks();
      addTearDown(db.close);
      final ids = [rid('ga', 1), rid('ga', 2), rid('ga', 3)];
      final tasks = db.store(Tasks.store);
      for (final id in ids) {
        await tasks.put([Writes.id(id), Tasks.title.set(id)]);
      }

      final rows = await tasks.getAll(ids.reversed.toList());

      expect([for (final row in rows) row.id], ids.reversed.toList());
      expect([for (final row in rows) row(Tasks.title)], ids.reversed.toList());
    });

    test('drops absent ids; duplicate ids return once per occurrence',
        () async {
      final db = await openTasks();
      addTearDown(db.close);
      final id = rid('ga', 4);
      final tasks = db.store(Tasks.store);
      await tasks.put([Writes.id(id), Tasks.title.set('only')]);

      final rows = await tasks.getAll([id, 'nope0000000000a', id]);

      expect([for (final row in rows) row.id], [id, id]);
      expect(rows.first(Tasks.title), 'only');
      expect(rows.last(Tasks.title), 'only');
    });

    test('empty input returns empty without querying', () async {
      final db = await openTasks();
      addTearDown(db.close);
      expect(await db.store(Tasks.store).getAll(const []), isEmpty);
    });

    test('includes archived rows like get; query excludes them by default',
        () async {
      final db = await LocalPocket.open(
          path: ':memory:', stores: [KeepTasks.store.collectionSchema]);
      addTearDown(db.close);
      final id = rid('kga', 1);
      final tasks = db.store(KeepTasks.store);
      await tasks.put([Writes.id(id), KeepTasks.title.set('archived')]);
      await tasks.archive(id);

      // get parity: point reads ignore the archive flag.
      expect((await tasks.get(id))!.archived, isTrue);

      // getAll mirrors get; query needs includeArchived to see the row.
      expect((await tasks.query(limit: Limits.unbounded)).items, isEmpty);
      final rows = await tasks.getAll([id]);
      expect(rows, hasLength(1));
      expect(rows.single.archived, isTrue);
    });
  });
}
