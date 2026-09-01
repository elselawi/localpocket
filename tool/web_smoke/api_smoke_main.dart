import 'dart:async';
import 'dart:js_interop';
import 'dart:js_interop_unsafe';

import 'package:localpocket/localpocket.dart';

/// Browser smoke for the destination facade over the worker runtime: the
/// page holds the typed contract client only, and every command below is one
/// contract envelope into the worker's kernel command handler.
///
/// The runner reads `__api_smoke` ('passed' / 'failed'), `__api_smoke_progress`
/// and `__api_smoke_detail`.
final class Notes extends StoreDef<Notes> {
  Notes._() : super(name: 'notes', version: 1);
  static final Notes store = Notes._();

  static final title = store.schema.text('title').req();
  static final priority = store.schema.integer('priority');

  @override
  List<FieldDef<Notes, Object?>> get fields => [title, priority];

  @override
  List<IndexSpec> get indexes => const [];

  @override
  FtsSpec? get fts => store.ftsSpec([title]);
}

Future<void> main() async {
  var stage = 'start';
  void report(String status, [String? detail]) {
    globalContext.setProperty('__api_smoke'.toJS, status.toJS);
    if (detail != null) {
      globalContext.setProperty('__api_smoke_detail'.toJS, detail.toJS);
    }
  }

  void mark(String next) {
    stage = next;
    globalContext.setProperty('__api_smoke_progress'.toJS, next.toJS);
  }

  Future<void> waitFor(bool Function() predicate,
      {Duration timeout = const Duration(seconds: 10)}) async {
    final deadline = DateTime.now().add(timeout);
    while (DateTime.now().isBefore(deadline)) {
      if (predicate()) return;
      await Future<void>.delayed(const Duration(milliseconds: 20));
    }
    throw StateError('Timed out waiting for condition at stage "$stage"');
  }

  try {
    // 1. Open the destination facade: the kernel boots in the worker from the
    //    serialized open options; nothing opens in-process.
    mark('open');
    final db = await LocalPocket.open(
      LocalPocketOptions(
        path: 'api_smoke_db_v1',
        stores: [Notes.store],
        bootstrap: const BootstrapOptions(
          workerAssetPath: 'assets/localpocket_worker.js',
          wasmAssetPath: 'assets/sqlite3.wasm',
        ),
      ),
    );

    mark('capabilities');
    final caps = await db.capabilities;
    if (!caps.isWeb) {
      throw StateError('Expected web runtime capabilities, got $caps');
    }

    final notes = db.store(Notes.store);

    // 2. CRUD through the contract.
    mark('crud');
    final changes = <String>[];
    final changesSub = db.changes.listen((c) {
      for (final id in c.ids) {
        changes.add('${c.storeName}:$id');
      }
    });

    final a =
        await notes.put([Notes.title.set('first'), Notes.priority.set(1)]);
    final b =
        await notes.put([Notes.title.set('second'), Notes.priority.set(2)]);
    await notes.putAll([
      [Notes.title.set('third'), Notes.priority.set(3)],
      [Notes.title.set('fourth'), Notes.priority.set(4)],
    ]);
    final third = (await notes.query(QuerySpec<Notes>(
      where: [Notes.title.eq('third')],
      limit: 1,
    )))
        .items
        .single;
    await notes.upsert([Writes.id(b.id), Notes.priority.set(20)]);
    await waitFor(() => changes.length >= 4);

    final rowA = await notes.get(a.id);
    if (rowA == null || rowA(Notes.title) != 'first') {
      throw StateError('Point read mismatch: $rowA');
    }
    if (rowA(Notes.priority) != 1) {
      throw StateError('Upsert did not merge into $b');
    }
    final rowB = await notes.get(b.id);
    if (rowB == null || rowB(Notes.priority) != 20) {
      throw StateError('upsert should have set priority to 20: $rowB');
    }

    await notes.patch(a.id, [Notes.title.set('first-patched')]);
    final patched = await notes.get(a.id);
    if (patched == null || patched(Notes.title) != 'first-patched') {
      throw StateError('Patch mismatch: $patched');
    }

    // 3. Query with kernel-minted cursors: the page never shapes pages.
    mark('query');
    final page1 = await notes.query(QuerySpec<Notes>(
      orderBy: [Notes.priority.asc],
      limit: 2,
    ));
    if (page1.items.length != 2 || !page1.hasNext || page1.hasPrev) {
      throw StateError('First window mismatch: ${page1.items}');
    }
    final page2 = await page1.next();
    if (page2 == null || page2.items.length != 2 || !page2.hasPrev) {
      throw StateError('Second window mismatch: ${page2?.items}');
    }
    final count = await notes.count(const QuerySpec<Notes>(limit: 100));
    if (count != 4) {
      throw StateError('Count mismatch: $count');
    }

    // 4. Search over the store's FTS index.
    mark('search');
    final hits =
        await notes.search(const SearchSpec<Notes>(term: 'third', limit: 10));
    if (hits.isEmpty || hits.first.id != third.id) {
      throw StateError('Search mismatch: ${hits.map((h) => h.id)}');
    }

    // 5. Interactive transaction with a savepoint.
    mark('transaction');
    await db.transaction((tx) async {
      final txNotes = tx.store(Notes.store);
      await txNotes.put([Notes.title.set('in-tx'), Notes.priority.set(9)]);
      final sp = await tx.savepoint();
      await txNotes.put([Notes.title.set('doomed'), Notes.priority.set(10)]);
      await tx.rollbackTo(sp);
    }, durability: DurabilityClass.full);
    final kept = await notes.query(QuerySpec<Notes>(
      where: [Notes.title.eq('in-tx')],
      limit: 10,
    ));
    if (kept.items.length != 1) {
      throw StateError('Transaction row missing: ${kept.items}');
    }
    final doomed = await notes.query(QuerySpec<Notes>(
      where: [Notes.title.eq('doomed')],
      limit: 10,
    ));
    if (doomed.items.isNotEmpty) {
      throw StateError('Rolled-back savepoint leaked a row: ${doomed.items}');
    }

    // 6. Ordered watch: kernel-shaped snapshots, reorder re-emission.
    mark('watch');
    final snapshots = <List<String>>[];
    final watchSub = notes
        .watch(QuerySpec<Notes>(orderBy: [Notes.priority.asc], limit: 50))
        .listen((rows) => snapshots.add([for (final r in rows) r.id]));
    await waitFor(() => snapshots.isNotEmpty);
    await notes.patch(b.id, [Notes.priority.set(0)]);
    await waitFor(() => snapshots.last.isNotEmpty && snapshots.length >= 2);
    if (snapshots.last.first != b.id) {
      throw StateError('Reorder did not re-emit the window: b=${b.id} '
          'snapshots=$snapshots');
    }
    await watchSub.cancel();

    // 7. Close: later sends fail with a typed error.
    mark('close');
    await db.close();
    var failed = false;
    try {
      await notes.get(a.id);
    } on StateError {
      failed = true;
    }
    if (!failed) {
      throw StateError('Send after close should fail with a typed error');
    }
    await changesSub.cancel();

    report('passed');
  } catch (e, stack) {
    report('failed', 'stage "$stage": $e\n$stack');
    rethrow;
  }
}
