// A complete, runnable walkthrough of the typed API.
//
// Every section below mirrors a README section; run it with
// `dart run api_full_example.dart`.
// ignore_for_file: avoid_print
import 'package:localpocket/localpocket.dart';

enum TaskStatus { todo, inProgress, done }

final class Tasks extends StoreDef<Tasks> {
  // ----- start with defining store name ----- //
  // define store name and schema version
  Tasks._() : super(name: 'tasks', version: 1);
  // instantiate store as a static member
  static final Tasks store = Tasks._();

  // ----- define the schema per field ----- //
  static final title = store.schema
      .text(
        // field name
        'title',
        // unique constraint
        uniqueWhenActive: true,
      )
      .req(); // makes it required

  // Enums:
  static final status = store.schema.enumOf(
    'status',
    TaskStatus.values,
    wire: const {
      // overwriting the textual (string) representation of the enum
      TaskStatus.inProgress: 'in_progress',
      TaskStatus.todo: 'to_do'
      // unmapped values fallback to `.name`
    },
  );

  // ... defining schema for the rest of the fields ...
  static final priority = store.schema.integer('priority');
  static final done = store.schema.boolean('done');
  static final dueAt = store.schema.dateTime('due_at');
  // refer to the table below for more field types

  // ----- define the ordered registry ----- //
  // declares which fields exist and in
  // what order they become columns
  @override
  List<FieldDef<Tasks, Object?>> get fields =>
      [title, status, priority, done, dueAt];

  // ----- define indexing ----- //
  @override
  List<IndexSpec> get indexes => [
        indexSpec<Tasks>(
          [status, priority],
          scope: IndexScope.notArchived,
          unique: true,
        ),
      ];

  // ----- define search specs ----- //
  @override
  FtsSpec? get fts => ftsSpec<Tasks>(
        [title],
        fuzzy: true,
        normalize: const FtsNormalization(rules: {'à': 'a', 'ä': 'a'}),
      );

  // Archived records that were never pushed to the remote are dropped
  // entirely on archive (there is no remote delete to record). Set true to
  // keep such records archived locally instead.
  // default: false
  @override
  bool get keepUnsyncedArchives => true;

  // Whether remote file references on this
  // store should be prefetched during sync pulls.
  // default: false
  @override
  bool get prefetchFiles => true;
}

// define a helper type for the row
typedef Task = TypedRow<Tasks>;

// define and extension that maps each field in the row to a class member

extension TaskReads on TypedRow<Tasks> {
  String get title => this(Tasks.title);

  // this can also have default values
  TaskStatus get status => this(Tasks.status) ?? TaskStatus.todo;
  bool get isDone => this(Tasks.done) ?? false;
  int get priority => this(Tasks.priority) ?? 0;

  // nullable fields can be accessed directly
  DateTime? get dueAt => this(Tasks.dueAt);

  // you can add fields based on whatever computations you want
  String get taskColor => status == TaskStatus.todo ? 'red' : 'blue';
}

// finally ...
// define common operations on your store
// the following example is quite verbose
// to show you the syntax and composability of the queries

extension TaskStore on TypedCollection<Tasks> {
  // ---- point reads
  Future<Task?> readTask(String id) => get(id);

  // ---- helper condiitions
  Cond<Tasks> get notDone => ~Tasks.done.eq(true);
  Cond<Tasks> get shipped => Tasks.done.eq(true);
  Cond<Tasks> get openOrOverdue =>
      (~Tasks.done.eq(true)) | Tasks.dueAt.lt(DateTime.now());

  // ---- queries: one shape, every terminal, any boolean tree
  Future<List<Task>> notDoneTasks({int limit = 50}) async => (await query(
        where: [notDone],
        orderBy: [Tasks.priority.desc],
        limit: limit,
      ))
          .items;

  Future<List<Task>> highPriority({int limit = 50}) async => (await query(
        where: [
          // Precedence: & binds tighter than | — parens make it explicit.
          (Tasks.priority.gt(0) & Tasks.priority.lt(2)) | shipped,
          Tasks.dueAt.lt(DateTime.now()) | Tasks.dueAt.eq(null),
        ],
        orderBy: [Tasks.priority.desc],
        limit: limit,
      ))
          .items;

  // An OR of ANDs — the shape a separate "OR group" could never express.
  Future<List<Task>> workable({int limit = 50}) async => (await query(
        where: [
          Tasks.title.startsWith('Draft') |
              (Tasks.status.eq(TaskStatus.inProgress) & notDone),
        ],
        limit: limit,
      ))
          .items;

  Future<List<Task>> dueThisWeek() async {
    final now = DateTime.now().toUtc();
    return (await query(
      limit: Limits.unbounded,
      where: [
        Tasks.dueAt.between(now, now.add(const Duration(days: 7))),
        notDone,
      ],
      orderBy: [Tasks.dueAt.asc],
    ))
        .items;
  }

  // Runtime-assembled filters: the where list ANDs its elements, and each
  // element may itself be a composed tree.
  Future<List<Task>> matching(
    List<Cond<Tasks>> filters, {
    int limit = 50,
  }) async =>
      (await query(
        where: filters,
        orderBy: [Tasks.priority.desc],
        limit: limit,
      ))
          .items;

  // ---- writes: field-native values
  Future<void> newTask(String title, {int priority = 0}) => put([
        Tasks.title.set(title),
        Tasks.priority.set(priority),
        Tasks.done.set(false),
      ]);

  Future<void> newTaskWithId(String id, String title) =>
      put([Writes.id<Tasks>(id), Tasks.title.set(title)]);

  Future<void> markDone(String id) => patch(id, [Tasks.done.set(true)]);

  // null clears an optional field; on a .req() field it would not compile.
  Future<void> clearPriority(String id) =>
      patch(id, [Tasks.priority.set(null)]);

  Future<void> rename(String id, String newTitle) =>
      patch(id, [Tasks.title.set(newTitle)]);

  Future<void> seed(List<String> titles) => putAll([
        for (var i = 0; i < titles.length; i++)
          [
            Writes.id<Tasks>('task${(i + 1).toString().padLeft(11, '0')}'),
            Tasks.title.set(titles[i]),
            Tasks.priority.set(i),
            Tasks.status.set(TaskStatus.todo),
            Tasks.done.set(false),
          ],
      ]);

  Future<void> markAllDone(List<String> ids) => patchAll({
        for (final id in ids) id: [Tasks.done.set(true)],
      });

  // ---- lifecycle
  Future<void> archiveTask(String id) => archive(id);
  Future<void> restoreTask(String id) => restore(id);
  Future<void> deleteTask(String id) => purge(id);

  // ---- search: hits come straight back
  Future<void> printSearch(String term) async {
    for (final hit in await search(term, limit: 10)) {
      final row = await hit.fetch();
      print(
        '  hit id=${hit.id} score=${hit.score.toStringAsFixed(3)} '
        'title=${row?.title}',
      );
    }
  }

  // ---- stats: the same predicate slots on every terminal
  Future<void> printStats() async {
    final open = await count(where: [notDone]);
    final load = await sum(Tasks.priority, where: [notDone]);
    final states = await distinct(Tasks.status);
    final hot = await ids(
      where: [Tasks.priority.gt(0) & ~Tasks.title.startsWith('Draft')],
      limit: 100,
    );
    print('open=$open load=$load states=$states hot=${hot.length}');
  }

  // ---- reactive: the same trees drive watches
  Stream<List<Task>> watchOpen() => watch(
        where: [openOrOverdue],
        orderBy: [Tasks.dueAt.asc],
        limit: 50,
      );

  // ---- keyset pagination
  Future<void> printAllPages() async {
    var page = await query(orderBy: [Tasks.priority.asc], limit: 2);
    while (true) {
      for (final t in page.items) {
        print('  ${t.id}: ${t.title}');
      }
      if (!page.hasNext) break;
      // next() reuses the captured shape — no slots to re-state. hasNext
      // being true means next() returns a page, never null.
      page = (await page.next())!;
    }
  }

  // ---- projection: reading an unselected field throws
  Future<List<String>> openTitles() async => [
        for (final row in (await query(
          where: [notDone],
          select: [Tasks.title],
          limit: 100,
        ))
            .items)
          row.title,
      ];
}

final class AppDb extends TypedPocket {
  AppDb(super.path);

  @override
  StoreDefs get stores => [Tasks.store];

  TypedCollection<Tasks> get tasks => handle(Tasks.store);
}

// 1. The library ships NO ready-made token provider — you implement the
//    3-method interface. (The old README's `TokenProvider.staticToken(...)`
//    does not exist; the example app hand-writes exactly this.)
class StaticTokenProvider implements TokenProvider {
  StaticTokenProvider(this.value);
  final String value;

  @override
  Future<Token> currentToken() async => Token(value);

  @override
  Future<Token> refreshToken(Token current) async => Token(value);

  @override
  String? get identity => 'user-123'; // must be STABLE across token refreshes
}

// Two-way sync with PocketBase over REST
// with SSE realtime as an explicit opt-in hint layer.

// first we need to define a token provider
class MyTokenProvider implements TokenProvider {
  // define `currentToken`
  // this will grab the latest token, from a secure storage
  @override
  Future<Token> currentToken() async {
    // `expiresAt` and `issuedAt` are optional
    // but they are useful if you want
    // this library to handle scheduling for token refreshes
    final expiresAt = DateTime.now().add(const Duration(days: 7));
    final issuesAt = DateTime.now().subtract(const Duration(days: 2));
    return Token(
      'token',
      expiresAt: expiresAt,
      issuedAt: issuesAt,
    );
  }

  // when you define `expiresAt` and `issuedAt` (above)
  // the library will call this method
  // this method supposed to grab a fresh token using the current one
  @override
  Future<Token> refreshToken(Token current) async {
    final expiresAt = DateTime.now().add(const Duration(days: 7));
    final issuesAt = DateTime.now();
    return Token(
      'token',
      expiresAt: expiresAt,
      issuedAt: issuesAt,
    );
  }

  // The stable identity the token belongs to
  // (used for the sync scope id).
  @override
  String? get identity => 'user-001';
}

void main() async {
  final db = AppDb('app.db'); // your TypedPocket subclass
  await db.open();

  final myTokenProvider = MyTokenProvider();

  final sync = attachPocketBaseSync(
    db: db,
    baseUrl: Uri.parse('https://pb.example.com'),
    tokenProvider: myTokenProvider,
    identity: 'user-123',
  );

  sync.status.listen((status) {
    print('${status.state} — ${status.pending} pending');
  });

  await sync.start();
  await sync.startRealtime();
  final report = await sync.syncNow();
  await sync.stop();

  report;
}
