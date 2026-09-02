import 'dart:async';
import 'dart:js_interop';
import 'dart:js_interop_unsafe';

import 'package:localpocket/localpocket.dart';

/// A caller-owned token provider for the sync smoke. Token values never
/// persist; the fixture server accepts any bearer token.
final class _StaticToken implements TokenProvider {
  _StaticToken(this._token);
  final String _token;

  @override
  Future<Token> currentToken() async => Token(_token);

  @override
  Future<Token> refreshToken(Token current) async => Token(_token);

  @override
  String? get identity => 'browser-sync';
}

final class SyncItems extends StoreDef<SyncItems> {
  SyncItems._() : super(name: 'sync_items', version: 1);
  static final SyncItems store = SyncItems._();

  static final title = store.schema.text('title').req();
  static final done = store.schema.boolean('done');

  @override
  List<FieldDef<SyncItems, Object?>> get fields => [title, done];

  @override
  List<IndexSpec> get indexes => const [];

  @override
  FtsSpec? get fts => null;
}

Future<void> main() async {
  void report(String status, [String? detail]) {
    globalContext.setProperty('__sync_lifecycle_smoke'.toJS, status.toJS);
    if (detail != null) {
      globalContext.setProperty(
          '__sync_lifecycle_smoke_detail'.toJS, detail.toJS);
    }
  }

  try {
    final pocket = await LocalPocket.open(
      LocalPocketOptions(
        path: 'sync_lifecycle_${DateTime.now().microsecondsSinceEpoch}',
        stores: [SyncItems.store],
        bootstrap: const BootstrapOptions(
          workerAssetPath: 'assets/localpocket_worker.js',
          wasmAssetPath: 'assets/sqlite3.wasm',
        ),
      ),
    );
    try {
      final sync = pocket.attachPocketBaseSync(
        PocketBaseSyncOptions(
          baseUrl: Uri.parse('http://127.0.0.1:8125'),
          tokenProvider: _StaticToken('valid-token'),
          identity: 'smoke-account',
        ),
      );
      final statuses = <SyncStatus>[];
      final statusSub = sync.status.listen(statuses.add);
      await sync.start();
      await sync.syncNow();

      final store = pocket.store(SyncItems.store);
      final remote = await store.get('syncitem0000001');
      if (remote == null || remote(SyncItems.title) != 'remote seed') {
        throw StateError('Browser sync pull failed: $remote');
      }

      await store.put([
        Writes.id('syncitem0000002'),
        SyncItems.title.set('local push'),
        SyncItems.done.set(false),
      ]);
      await sync.syncNow();

      await sync.pause();
      await sync.resume();
      await sync.setConnectivity(false);
      await sync.setConnectivity(true);
      await sync.updateAuth('refreshed-token');
      if (statuses.isEmpty) {
        throw StateError('Sync status was not delivered through the worker.');
      }
      await sync.stop();
      await statusSub.cancel();
    } finally {
      await pocket.close();
    }
    report('passed');
  } catch (error, stack) {
    report('failed', '$error\n$stack');
  }
}
