// Final API compile fixture — JavaScript/worker target (Phase 0 deliverable,
// plan §12 Phase 0.5).
//
// The point of this file is that it is *nearly identical* to
// `final_api_vm.dart`: the destination API is common Dart, and the only
// web-specific behavior lives in `BootstrapOptions` (worker/WASM asset paths)
// plus deployment, not in a second public class. When Phase 5 lands, this
// file compiles with `dart compile js` (or the worker entry pipeline) to
// prove the page-side public surface never drags in kernel semantics.
//
// Differences from the VM fixture:
//   1. `workerAssetPath` / `wasmAssetPath` are set (deployment config).
//   2. file streaming prefers explicit bounded sources (page-side object
//      URLs are exercised by browser tests, not this fixture).
//   3. capabilities honestly reflect the web runtime (e.g. volatile blobs).
//
// It must NOT compile today; it becomes active in Phase 5/9.

import 'package:localpocket/localpocket.dart';

final class Notes extends StoreDef<Notes> {
  Notes._() : super(name: 'notes', version: 1);
  static final Notes store = Notes._();

  static final body = store.schema.text('body').req();

  @override
  List<FieldDef<Notes, Object?>> get fields => [body];

  @override
  List<IndexSpec> get indexes => const [];

  @override
  FtsSpec? get fts => null;

  @override
  ValidatorSpec get validator => const ValidatorSpec.rules([]);

  @override
  ConflictPolicySpec get conflictPolicy => const ConflictPolicySpec.remoteWins();

  @override
  List<MigrationSpec> get migrations => const [];
}

Future<LocalPocket> openOnWeb() {
  return LocalPocket.open(
    LocalPocketOptions(
      path: 'app.db',
      stores: [Notes.store],
      bootstrap: const BootstrapOptions(
        workerAssetPath: 'assets/localpocket_worker.js',
        wasmAssetPath: 'assets/sqlite3.wasm',
        requestTimeout: Duration(seconds: 30),
      ),
    ),
  );
}

Future<void> exerciseOnWeb() async {
  final db = await openOnWeb();
  final notes = db.store(Notes.store);

  final created = await notes.put([Notes.body.set('hello from the page')]);
  final row = await notes.get(created.id);
  final String body = row!(Notes.body);

  final page = await notes.query(
    QuerySpec<Notes>(
      where: [Notes.body.startsWith('hello')],
      orderBy: [Notes.id.asc],
      limit: 20,
    ),
  );
  page.hasNext;
  final next = await page.next();

  await db.transaction((tx) async {
    final txNotes = tx.store(Notes.store);
    await txNotes.patch(created.id, [Notes.body.set(body)]);
  });

  final sub = notes
      .watch(QuerySpec<Notes>(limit: 50))
      .listen((page) => page.items);
  await sub.cancel();

  // Web capabilities are the worker handshake's truth, never a page guess.
  final caps = db.capabilities;
  caps.durableBlobs; // may be false for the volatile fallback — allowed.

  await db.close();
}
