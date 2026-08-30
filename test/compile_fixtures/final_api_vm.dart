// Destination public API compile fixture — VM vocabulary.
//
// This file is the executable definition of the destination public API for
// everything the runtime contract already carries: opening, typed stores,
// immutable rows, declarative queries with kernel-owned pages, aggregates,
// search, interactive transactions, watches, committed-fact events, and
// maintenance. The analyzer is the gate: this file must stay at zero issues.
//
// It imports the facade library directly because the barrel switch has not
// landed yet; when it does, this import flips to
// `package:localpocket/localpocket.dart` unchanged in body.
//
// Deliberately out of scope until the corresponding command families enter
// the contract: sync attachment, files, and conflicts (see the handoff's
// out-of-scope list). They activate with the web remote cutover fixture.
import 'dart:typed_data';

import 'package:localpocket/src/api/api.dart';
import 'package:localpocket/src/typed/typed.dart';

final class Tasks extends StoreDef<Tasks> {
  Tasks._() : super(name: 'tasks', version: 1);
  static final Tasks store = Tasks._();

  static final title = store.schema.text('title').req();
  static final done = store.schema.boolean('done');
  static final priority = store.schema.integer('priority');
  static final dueAt = store.schema.dateTime('due_at');
  static final tags = store.schema.jsonList<String>('tags');

  @override
  List<FieldDef<Tasks, Object?>> get fields =>
      [title, done, priority, dueAt, tags];

  @override
  List<IndexSpec> get indexes => [store.indexSpec([done, priority])];

  @override
  FtsSpec? get fts => store.ftsSpec([title]);
}

Future<LocalPocket> _open() async {
  final key = Uint8List(32);
  return LocalPocket.open(
    LocalPocketOptions(
      path: 'app.db',
      stores: [Tasks.store],
      encryption: EncryptionConfig.aesGcm256(key: key),
      bootstrap: const BootstrapOptions(
        workerAssetPath: null,
        wasmAssetPath: null,
        requestTimeout: Duration(seconds: 30),
      ),
    ),
  );
}

Future<void> exerciseAll() async {
  final db = await _open();
  final tasks = db.store(Tasks.store);

  // -- CRUD ------------------------------------------------------------------
  final created = await tasks.put([
    Tasks.title.set('Ship it'),
    Tasks.done.set(false),
    Tasks.priority.set(3),
  ]);
  final id = created.id;

  final row = await tasks.get(id);
  if (row != null) {
    row(Tasks.title);
    row(Tasks.done);
    row.id;
    row.archived;
    row.extra;
  }

  await tasks.getAll([id, id]);
  await tasks.upsert([Writes.id(id), Tasks.priority.set(4)]);
  await tasks.patch(id, [Tasks.done.set(true)]);
  await tasks.patchAll({
    id: [Tasks.done.set(true)],
  });
  await tasks.archive(id);
  await tasks.restore(id);
  await tasks.purge(id);

  // -- Queries and pagination ------------------------------------------------
  final page = await tasks.query(
    QuerySpec<Tasks>(
      where: [
        Tasks.done.eq(false),
        (Tasks.priority.gte(2) & Tasks.title.startsWith('Ship')) |
            Tasks.title.eq('Draft'),
      ],
      orderBy: [Tasks.priority.desc, Tasks.store.id.asc],
      select: [Tasks.title, Tasks.priority],
      limit: 20,
    ),
  );
  page.hasNext;
  page.hasPrev;
  final Cursor<Tasks>? nextCursor = page.nextCursor;
  // ignore: unnecessary_statements
  nextCursor?.token;
  final Page<Tasks>? nextPage = await page.next();
  final Page<Tasks>? prevPage = await nextPage?.prev();
  // ignore: unnecessary_statements
  prevPage;

  await tasks.count(
    QuerySpec<Tasks>(
      where: [Tasks.done.eq(false)],
      limit: Limits.unbounded,
    ),
  );
  await tasks.countDistinct(
    Tasks.priority,
    where: [Tasks.done.eq(false)],
  );
  await tasks.distinct(Tasks.priority, limit: 100);
  await tasks.ids(QuerySpec<Tasks>(limit: 10));
  await tasks.sum(Tasks.priority, where: const []);
  await tasks.min(Tasks.priority, where: const []);
  await tasks.max(Tasks.priority, where: const []);
  await tasks.avg(Tasks.priority, where: const []);

  // -- Search ----------------------------------------------------------------
  final hits = await tasks.search(
    const SearchSpec<Tasks>(term: 'ship', limit: 20),
  );
  for (final hit in hits) {
    hit.score;
    await hit.fetch();
  }

  // -- Transactions ----------------------------------------------------------
  await db.transaction((tx) async {
    final txTasks = tx.store(Tasks.store);
    await txTasks.put([Tasks.title.set('inside tx')]);
    final txPage = await txTasks.query(
      QuerySpec<Tasks>(where: [Tasks.done.eq(false)], limit: 10),
    );
    txPage.items;
  }, durability: DurabilityClass.normal);
  await db.read((tx) async => tx.store(Tasks.store).get(id));

  // -- Watches and events ----------------------------------------------------
  final sub = tasks
      .watch(QuerySpec<Tasks>(
        where: [Tasks.done.eq(false)],
        orderBy: [Tasks.priority.desc],
        limit: 50,
      ))
      .listen((rows) => rows.length);
  await sub.cancel();

  final recordSub = tasks.changes.listen((change) {
    change.storeName;
    change.ids;
  });
  await recordSub.cancel();

  final dbSub = db.changes.listen((change) {
    change.storeName;
    change.ids;
  });
  await dbSub.cancel();

  // -- Maintenance and capabilities -------------------------------------------
  await db.capabilities;
  await db.analyze(Tasks.store);
  await db.compact(Tasks.store);
  await db.pruneOutbox();
  await db.walCheckpoint();
  await db.vacuum();

  await db.close();
}

Future<void> main() => exerciseAll();
