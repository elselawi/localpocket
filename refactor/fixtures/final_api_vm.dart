// Final API compile fixture — VM (Phase 0 deliverable, plan §12 Phase 0.5).
//
// This file is the executable definition of the destination public API. It
// must NOT compile today (the destination types do not exist yet); it lives
// outside lib/ test/ tool/ so the analyzer ignores it. In Phase 5 it becomes
// a compile target for the vertical slice, and in Phase 9 it is wired into
// the public API gate (tool/public_api_gate.dart) as a golden fixture for
// both VM and JavaScript (`final_api_web.dart` carries the web-specific
// differences, which are deliberately almost none).
//
// Compilation contract:
//   - imports ONLY `package:localpocket/localpocket.dart`;
//   - uses no raw maps, no builders, no platform types, no `Typed*` names;
//   - exercises every vocabulary item from refactor/naming_and_policy.md §1;
//   - the compile-fail corpus (test/compile_fail/) asserts the negatives.
//
// When Phase 5 lands, remove this header and enable it in the gate.

import 'dart:typed_data';

import 'package:localpocket/localpocket.dart';

final class Tasks extends StoreDef<Tasks> {
  Tasks._() : super(name: 'tasks', version: 1);
  static final Tasks store = Tasks._();

  static final title = store.schema.text('title').req();
  static final done = store.schema.boolean('done');
  static final priority = store.schema.integer('priority');
  static final dueAt = store.schema.dateTime('due_at');
  static final tags = store.schema.jsonList('tags');
  static final attachment = store.schema.text('attachment');

  @override
  List<FieldDef<Tasks, Object?>> get fields =>
      [title, done, priority, dueAt, tags];

  @override
  List<IndexSpec> get indexes => [
        store.indexSpec([done, priority])
      ];

  @override
  FtsSpec? get fts => store.ftsSpec([title]);

  @override
  ValidatorSpec get validator => const ValidatorSpec.rules([
        ValidatorRule.nonEmpty('title'),
      ]);

  @override
  ConflictPolicySpec get conflictPolicy =>
      const ConflictPolicySpec.remoteWins();

  @override
  List<MigrationSpec> get migrations => const [];
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
    final String title = row(Tasks.title);
    final bool? done = row(Tasks.done);
    row.id;
    row.archived;
    row.extra;
  }

  final rows = await tasks.getAll([id, id]);
  await tasks.upsert([Writes.id(id), Tasks.priority.set(4)]);
  await tasks.patch(id, [Tasks.done.set(true)]);
  await tasks.patchAll({
    id: [Tasks.done.set(true)]
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
      orderBy: [Tasks.priority.desc, Tasks.id.asc],
      select: [Tasks.title, Tasks.priority],
      limit: 20,
    ),
  );
  page.hasNext;
  page.hasPrev;
  final Cursor<Tasks>? nextCursor = page.nextCursor;
  final Page<Tasks>? nextPage = await page.next();
  final Page<Tasks>? prevPage = await nextPage?.prev();

  await tasks.count(
    QuerySpec<Tasks>(
      where: [Tasks.done.eq(false)],
      limit: Limits.unbounded,
    ),
  );
  await tasks.countDistinct(Tasks.priority,
      where: [Tasks.done.eq(false)], limit: Limits.unbounded);
  await tasks.distinct(Tasks.priority, limit: 100);
  await tasks.ids(QuerySpec<Tasks>(limit: 10));
  await tasks.sum(Tasks.priority, where: const []);
  await tasks.min(Tasks.priority, where: const []);
  await tasks.max(Tasks.priority, where: const []);
  await tasks.avg(Tasks.priority, where: const []);

  // -- Search ----------------------------------------------------------------
  final hits = await tasks.search(
    SearchSpec<Tasks>(term: 'ship', limit: 20, includeArchived: false),
  );
  for (final hit in hits) {
    final Tasks task = hit.fetch();
    hit.snippet;
    hit.score;
  }

  // -- Transactions ----------------------------------------------------------
  await db.transaction((tx) async {
    final txTasks = tx.store(Tasks.store);
    await txTasks.put([Tasks.title.set('inside tx')]);
    final txPage = await txTasks.query(
      QuerySpec<Tasks>(where: [Tasks.done.eq(false)], limit: 10),
    );
    txPage.items;
  });
  await db.read((tx) async => tx.store(Tasks.store).get(id));

  // -- Watches and events ----------------------------------------------------
  final sub = tasks
      .watch(QuerySpec<Tasks>(
        where: [Tasks.done.eq(false)],
        orderBy: [Tasks.priority.desc],
        limit: 50,
      ))
      .listen((page) => page.items);
  sub.cancel();

  final recordSub = tasks.events.listen((event) {
    event.oldRecord;
    event.newRecord;
  });
  recordSub.cancel();

  final dbSub = db.changes.listen((change) {
    change.storeName;
    change.revision;
  });
  dbSub.cancel();

  // -- Sync ------------------------------------------------------------------
  final sync = db.attachPocketBaseSync(
    PocketBaseSyncOptions(
      baseUrl: Uri.parse('https://pb.example.com'),
      tokenProvider: _TokenBridge(),
      identity: 'account-42',
    ),
  );
  await sync.start();
  final report = await sync.syncNow();
  report.blocked;
  report.discarded;
  await sync.pause();
  await sync.resume();
  await sync.stop();
  sync.status.listen(print);
  sync.authRequired.listen((_) async {});

  // -- Files and conflicts ---------------------------------------------------
  final files = tasks.files;
  final ref = await files.attach(
    recordId: id,
    field: 'attachment',
    source: FileSource.stream(
      Stream<List<int>>.empty(),
      length: 0,
      name: 'report.pdf',
    ),
  );
  await files.list(id, field: 'attachment');
  final stream = await files.open(ref);
  await for (final chunk in stream) {
    chunk.length;
  }
  await files.remove(ref);

  final conflicts = tasks.conflicts;
  final open = await conflicts.listOpen();
  for (final conflict in open) {
    conflict.id;
    conflict.local;
    conflict.remote;
  }
  await conflicts.resolve(
    open.first.id,
    merged: [Tasks.title.set('Chosen by the user'), Tasks.done.set(true)],
  );
  await conflicts.acceptLocal(open.first.id);
  await conflicts.acceptRemote(open.first.id);

  // -- Maintenance and capabilities -------------------------------------------
  db.capabilities;
  await db.flush();
  await db.analyze(Tasks.store);
  await db.compact(Tasks.store);
  await db.pruneOutbox();
  await db.walCheckpoint();
  await db.vacuum();
  await db.backup();

  await db.close();
}

final class _TokenBridge implements TokenProvider {
  @override
  Future<String> currentToken() async => 'token';
}
