// A complete, runnable walkthrough of the destination public API.
//
// Every section below mirrors a README section; run it with
// `dart run api_full_example.dart`. One import — the public barrel — gives
// the whole API: opening, typed stores, immutable rows, declarative queries
// with kernel-owned pages, search, transactions, typed record events, files,
// conflicts, capabilities, maintenance, and the PocketBase sync attachment.
// ignore_for_file: avoid_print
import 'dart:convert';

import 'package:localpocket/localpocket.dart';

enum TaskStatus { todo, inProgress, done }

final class Tasks extends StoreDef<Tasks> {
  // Store name and schema version: the version is the migration boundary.
  Tasks._() : super(name: 'tasks', version: 1);
  static final Tasks store = Tasks._();

  // Fields: descriptors ARE the schema. `.req()` makes a field required;
  // `uniqueWhenActive` adds a partial unique constraint.
  static final title = store.schema.text('title', uniqueWhenActive: true).req();
  static final status = store.schema.enumOf('status', TaskStatus.values);
  static final priority = store.schema.integer('priority');
  static final done = store.schema.boolean('done');

  // An index over the fields queries filter and sort on.
  @override
  List<IndexSpec> get indexes => [store.indexSpec([done, priority])];

  // Full-text search over the title.
  @override
  FtsSpec? get fts => store.ftsSpec([title]);

  @override
  List<FieldDef<Tasks, Object?>> get fields => [title, status, priority, done];
}

Future<void> main() async {
  // -- Opening ----------------------------------------------------------------
  //
  // One options object; the same call compiles on mobile, desktop, and web.
  // On web the kernel runs in the dedicated worker (typed contract over the
  // wire); here on the VM it runs in-process over the direct runtime.
  final db = await LocalPocket.open(
    LocalPocketOptions(
      path: ':memory:',
      stores: [Tasks.store],
      blobStore: MemoryBlobStore(),
    ),
  );
  final tasks = db.store(Tasks.store);

  // -- Typed CRUD ---------------------------------------------------------------
  //
  // Writes are lists of typed field writes; reads return immutable rows.
  final created = await tasks.put([
    Tasks.title.set('Ship the refactor'),
    Tasks.status.set(TaskStatus.inProgress),
    Tasks.priority.set(2),
    Tasks.done.set(false),
  ]);
  print('created: ${created.id} -> ${created(Tasks.title)}');

  await tasks.patch(created.id, [Tasks.priority.set(1)]);
  final fetched = await tasks.get(created.id);
  print('after patch: priority=${fetched!(Tasks.priority)}');

  // Upsert merges only the fields present (addressed by id); archive is the
  // soft-delete state machine. Archiving a record whose server-side
  // existence was never confirmed DROPS it locally (the remote has nothing
  // to reconcile) — that is the default `keepUnsyncedArchives: false`
  // policy; override it on the store to keep such rows for `restore()`.
  await tasks.upsert([Writes.id(created.id), Tasks.done.set(true)]);
  await tasks.archive(created.id);
  // Re-create the demo record for the sections below.
  await tasks.put([
    Writes.id(created.id),
    Tasks.title.set('Ship the refactor'),
    Tasks.done.set(false),
    Tasks.priority.set(2),
  ]);

  // -- Queries: declarative specs, kernel-owned pages ---------------------------
  //
  // No SQL ever crosses a boundary: the kernel compiles the spec, shapes the
  // page, and mints opaque cursors. hasNext/hasPrev are exact facts, not
  // guesses.
  final open = await tasks.query(
    QuerySpec<Tasks>(
      where: [
        Tasks.done.eq(false),
        (Tasks.priority.gte(1) & Tasks.title.startsWith('Ship')) |
            Tasks.title.eq('Draft'),
      ],
      orderBy: [Tasks.priority.desc, Tasks.store.id.asc],
      select: [Tasks.title, Tasks.priority],
      limit: 20,
    ),
  );
  print(
      'open tasks: ${open.items.map((r) => r(Tasks.title)).toList()} '
      '(hasNext: ${open.hasNext}, hasPrev: ${open.hasPrev})');
  final nextPage = await open.next();
  print('next page: ${nextPage?.items.length ?? 0} rows');

  print('open count: ${await tasks.count(
        QuerySpec<Tasks>(
          where: [Tasks.done.eq(false)],
          limit: Limits.unbounded,
        ),
      )}');

  // -- Full-text search ----------------------------------------------------------
  for (final hit
      in await tasks.search(const SearchSpec<Tasks>(term: 'ship', limit: 10))) {
    print('hit: ${hit.id} score=${hit.score}');
  }

  // -- Transactions ---------------------------------------------------------------
  //
  // One transaction type on every platform; the body's writes and their
  // events commit atomically.
  await db.transaction((tx) async {
    final txTasks = tx.store(Tasks.store);
    await txTasks.put([Tasks.title.set('inside tx'), Tasks.done.set(true)]);
    final page = await txTasks.query(
      QuerySpec<Tasks>(where: [Tasks.done.eq(true)], limit: 10),
    );
    print('rows inside tx: ${page.items.length}');
  });
  final readOnly =
      await db.read((tx) async => tx.store(Tasks.store).get(created.id));
  print('read-only tx sees: ${readOnly!(Tasks.title)}');

  // -- Watches and typed record events ---------------------------------------------
  //
  // One internal committed-change envelope feeds every feed: `changes`
  // (coarse) and `events` (typed old/new rows).
  final events = <RecordChange<Tasks>>[];
  final recordSub = tasks.events.listen(events.add);
  final watcherSub = tasks
      .watch(QuerySpec<Tasks>(
        where: [Tasks.done.eq(false)],
        orderBy: [Tasks.priority.desc],
        limit: 50,
      ))
      .listen((rows) => print('watch snapshot: ${rows.length} rows'));

  await tasks.put([Tasks.title.set('watched'), Tasks.done.set(false)]);
  await Future<void>.delayed(Duration.zero);
  await Future<void>.delayed(Duration.zero);
  for (final change in events) {
    print('event: ${change.action.name} "${change.newRecord!(Tasks.title)}" '
        'changed=${change.changedFields.toList()}');
  }
  await watcherSub.cancel();
  await recordSub.cancel();

  // -- Files -----------------------------------------------------------------------
  //
  // Bounded, content-addressed attachments. Bytes stream in bounded chunks
  // (a declared length keeps memory flat); downloads are credit-windowed and
  // closeable.
  final payload = utf8.encode('attachment bytes');
  final ref = await tasks.files.attach(
    recordId: created.id,
    field: 'attachment',
    source: FileSource.stream(
      Stream<List<int>>.fromIterable([
        payload.sublist(0, 4),
        payload.sublist(4),
      ]),
      length: payload.length,
      name: 'notes.bin',
    ),
    allowVolatileBlobs: true,
  );
  print('attached: ${ref.refId} hash=${ref.hash.substring(0, 8)}…');
  final bytes = await (await tasks.files.open(ref))
      .fold<List<int>>([], (p, c) => [...p, ...c]);
  print('downloaded ${bytes.length} bytes');
  print(
      'files: ${(await tasks.files.list(recordId: created.id, field: 'attachment')).length}');
  await tasks.files.remove(ref);

  // -- Conflicts --------------------------------------------------------------------
  //
  // Conflicts are first-class rows: list, get, watch, resolve, accept either
  // side. Resolution is an explicit command, never a silent overwrite.
  final conflicts = tasks.conflicts;
  print('open conflicts: ${(await conflicts.listOpen()).length}');

  // -- Capabilities and maintenance ---------------------------------------------------
  //
  // Capabilities describe reality — the active runtime's honest report.
  final caps = await db.capabilities;
  print('capabilities: sqlite ${caps.sqliteVersion}, fts5=${caps.hasFts5}, '
      'storage=${caps.storage}, journal=${caps.journal}');

  await db.analyze(Tasks.store);
  await db.walCheckpoint();
  final removed = await db.pruneOutbox();
  print('pruned $removed outbox entries');

  // -- Synchronization ------------------------------------------------------------------
  //
  // One sync host per database; start() owns the engine and its realtime
  // connection. The token provider stays caller-owned.
  final sync = db.attachPocketBaseSync(
    PocketBaseSyncOptions(
      baseUrl: Uri.parse('https://pb.example.com'),
      tokenProvider: _DemoTokens(),
      identity: 'account-42',
    ),
  );
  print('sync host attached: ${sync.options.baseUrl} (not started here)');

  await db.close();
  print('done.');
}

final class _DemoTokens implements TokenProvider {
  @override
  Future<Token> currentToken() async => Token('demo-token');

  @override
  Future<Token> refreshToken(Token current) async => Token('demo-token');

  @override
  String? get identity => null;
}
