// Destination public API compile fixture — WEB vocabulary.
//
// The VM twin (`final_api_vm.dart`) proves the API against the in-process
// runtime; THIS fixture proves the same API surface against the web runtime:
// the worker/wasm bootstrap paths, the browser-only configuration rules, and
// everything else a worker-backed [LocalPocket] exposes. It imports ONLY the
// public barrel and must stay at zero analyzer issues, and it must COMPILE
// for JavaScript (`dart compile js`) — the page never sees dart:io.
//
// Compile gates: `dart analyze test/support/compile_fixtures/` (part of the ordinary
// suite) and the `gate`-tagged js-compile test under `test/platform/web/`.
import 'dart:typed_data';

import 'package:localpocket/localpocket.dart';

/// Compile-only token provider: proves the sync attachment vocabulary
/// compiles without wiring real auth.
final class FixtureTokens implements TokenProvider {
  @override
  Future<Token> currentToken() async => Token('fixture-token');

  @override
  Future<Token> refreshToken(Token current) async => Token('fixture-token');

  @override
  String get identity => 'fixture-user';
}

final class Tasks extends StoreDef<Tasks> {
  Tasks._() : super(name: 'tasks', version: 1);
  static final Tasks store = Tasks._();

  static final title = store.schema.text('title').req();
  static final done = store.schema.boolean('done');
  static final priority = store.schema.integer('priority');

  @override
  List<FieldDef<Tasks, Object?>> get fields => [title, done, priority];

  @override
  List<IndexSpec> get indexes => [
        store.indexSpec([done, priority])
      ];

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
        // Web-specific bootstrap: worker and wasm asset paths, and the
        // request timeout that bounds every contract round-trip.
        workerAssetPath: 'assets/localpocket_worker.js',
        wasmAssetPath: 'assets/sqlite3.wasm',
        requestTimeout: Duration(seconds: 30),
      ),
      maxDocumentBytes: 1900000,
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

  // -- Queries and pagination (kernel-shaped pages, opaque cursors) ----------
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
  final List<Row<Tasks>> items = page.items;
  // ignore: unnecessary_statements
  items.length;
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
  await tasks.ids(QuerySpec<Tasks>(limit: 10));
  await tasks.sum(Tasks.priority, where: const []);

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
  });
  await db.read((tx) async => tx.store(Tasks.store).get(id));

  // -- Watches and committed-fact events -------------------------------------
  final sub = tasks
      .watch(QuerySpec<Tasks>(
        where: [Tasks.done.eq(false)],
        orderBy: [Tasks.priority.desc],
        limit: 50,
      ))
      .listen((rows) => rows.length);
  await sub.cancel();

  final dbSub = db.changes.listen((change) {
    change.storeName;
    change.id;
    change.origin;
    change.action;
    // ignore: unnecessary_statements
    change.oldRecord;
    // ignore: unnecessary_statements
    change.newRecord;
  });
  await dbSub.cancel();

  // -- Capabilities: the worker's open handshake is authoritative (Rule 8) ---
  final caps = await db.capabilities;
  caps.isWeb;
  caps.storage;
  caps.durable;
  caps.journal;
  caps.hasFts5;

  // -- Files: bounded chunked upload sessions over the contract --------------
  final files = tasks.files;
  final ref = await files.attach(
    recordId: id,
    field: 'attachment',
    source: FileSource.stream(
      Stream.value([1, 2, 3]),
      length: 3,
      name: 'report.bin',
    ),
    allowVolatileBlobs: true,
  );
  ref.refId;
  ref.hash;
  ref.state;
  ref.remoteName;
  final List<FileRef> refs =
      await files.list(recordId: id, field: 'attachment');
  // ignore: unnecessary_statements
  refs.length;
  final Stream<List<int>> bytes = await files.open(ref);
  // ignore: unawaited_futures
  bytes.drain<void>();
  await files.remove(ref);
  await files.gc();
  await files.enforceStorageCap(maxBytes: 1024);
  final bool durable = await files.isBlobStorageDurable;
  // ignore: unnecessary_statements
  durable;

  // -- Conflicts ---------------------------------------------------------------
  final conflicts = tasks.conflicts;
  final List<Conflict<Tasks>> openConflicts = await conflicts.listOpen();
  // ignore: unnecessary_statements
  openConflicts.length;
  final Conflict<Tasks>? one = await conflicts.get(id);
  one?.recordId;
  one?.local(Tasks.title);
  one?.remoteDeleted;
  final sub2 = conflicts.watch().listen((list) => list.length);
  await sub2.cancel();
  await conflicts.resolve(id, merged: [
    Tasks.title.set('Chosen by the user'),
    Tasks.done.set(true),
  ]);
  await conflicts.acceptLocal(id);
  await conflicts.acceptRemote(id);

  // -- PocketBase sync attachment (start owns realtime, one host per db) ----
  final sync = db.attachPocketBaseSync(
    PocketBaseSyncOptions(
      baseUrl: Uri.parse('https://pb.example.com'),
      tokenProvider: FixtureTokens(),
      identity: 'account-42',
    ),
  );
  await sync.start();
  await sync.syncNow();
  await sync.pause();
  await sync.resume();
  await sync.stop();

  // -- Maintenance -------------------------------------------------------------
  await db.analyze(Tasks.store);
  await db.compact(Tasks.store);
  await db.pruneOutbox();
  await db.walCheckpoint();
  await db.vacuum();

  await db.close();
}

Future<void> main() => exerciseAll();
