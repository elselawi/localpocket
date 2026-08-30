// RUNTIME PROBE (browser): does the single consumer sync pattern
//   AppDb extends TypedPocket + attachPocketBaseSync(db: db)
// actually RUN on web (not just compile), and does the AppDb-based typed
// round-trip work through the same wiring?
//
// Reports two globals the smoke runner reads:
//   __typed_sync_runtime_smoke   -> combined verdict (runner signal)
//   __typed_sync_runtime_facade  -> AppDb-based typed round-trip verdict
import 'dart:js_interop';
import 'dart:js_interop_unsafe';

import 'package:localpocket/localpocket.dart';

void report(String key, String status, [String? detail]) {
  globalContext.setProperty(key.toJS, status.toJS);
  if (detail != null) {
    globalContext.setProperty('${key}_detail'.toJS, detail.toJS);
  }
}

class StaticTokens implements TokenProvider {
  @override
  Future<Token> currentToken() async => Token('probe-token');

  @override
  Future<Token> refreshToken(Token current) async => Token('probe-token');

  @override
  String? get identity => 'user-123';
}

final class Tasks extends StoreDef<Tasks> {
  Tasks._() : super(name: 'tasks', version: 1);
  static final Tasks store = Tasks._();
  static final title = store.schema.text('title').req();

  @override
  List<FieldDef<Tasks, Object?>> get fields => [title];
}

final class AppDb extends TypedPocket {
  AppDb(super.path);

  @override
  StoreDefs get stores => [Tasks.store];

  @override
  String? get wasmAssetPath => '/assets/sqlite3.wasm';

  @override
  String? get workerAssetPath => '/assets/localpocket_worker.js';

  TypedCollection<Tasks> get tasks => handle(Tasks.store);
}

Future<void> main() async {
  const userKey = '__typed_sync_runtime_smoke';
  const facadeKey = '__typed_sync_runtime_facade';

  String? userDetail;
  String? facadeDetail;
  var userOk = false;
  var facadeOk = false;

  // ---- Phase 1: the single consumer pattern, verbatim shape --------------
  final db = AppDb('typed_sync_probe_${DateTime.now().microsecondsSinceEpoch}');
  try {
    await db.open();
    final sync = attachPocketBaseSync(
      db: db,
      baseUrl: Uri.parse('http://127.0.0.1:8125'),
      tokenProvider: StaticTokens(),
      identity: 'user-123',
    );
    sync.status.listen((_) {});
    await sync.start();
    await sync.startRealtime();
    await sync.syncNow();
    await sync.stop();
    userOk = true;
    userDetail = 'TypedPocket + PocketBaseSyncEngine ran in the page on web.';
  } catch (e, st) {
    userDetail =
        '${e.runtimeType}: $e\n    at ${st.toString().split('\n').take(3).join(' | ')}';
  } finally {
    try {
      await db.close();
    } catch (_) {}
  }

  // ---- Phase 2: AppDb-based typed round-trip (was facade-based) ----------
  final typedDb = AppDb('typed_probe_${DateTime.now().microsecondsSinceEpoch}');
  try {
    await typedDb.open();
    await typedDb.tasks.put([
      Writes.id<Tasks>('tskprobe0000001'),
      Tasks.title.set('web'),
    ]);
    final row = await typedDb.tasks.get('tskprobe0000001');
    final read = row?.call(Tasks.title);
    if (read != 'web') {
      throw StateError('typed round-trip mismatch: $read');
    }
    facadeOk = true;
    facadeDetail = 'AppDb open + typed put/get ran in the browser.';
  } catch (e, st) {
    facadeDetail =
        '${e.runtimeType}: $e\n    at ${st.toString().split('\n').take(3).join(' | ')}';
  } finally {
    try {
      await typedDb.close();
    } catch (_) {}
  }

  report(facadeKey, facadeOk ? 'passed' : 'failed', facadeDetail);
  final combined = userOk && facadeOk;
  final combinedDetail = combined
      ? userDetail
      : [
          if (!userOk) 'user pattern: $userDetail',
          if (!facadeOk) 'facade contrast: $facadeDetail',
        ].join(' | ');
  report(userKey, combined ? 'passed' : 'failed', combinedDetail);
}
