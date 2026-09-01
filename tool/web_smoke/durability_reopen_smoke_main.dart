import 'dart:js_interop';
import 'dart:js_interop_unsafe';

import 'package:localpocket/src/api/api.dart';
import 'package:localpocket/src/typed/typed.dart';

/// Browser smoke for the destination facade over the worker runtime: proves
/// that a 2000-row batch survives a worker reopen in OPFS/IndexedDB, that a
/// point read returns the persisted record contents, and that repeated
/// open/close cycles stay stable.
final class Durability extends StoreDef<Durability> {
  Durability._() : super(name: 'durability', version: 1);
  static final Durability store = Durability._();

  static final value = store.schema.text('value').req();
  static final batch = store.schema.integer('batch');

  @override
  List<FieldDef<Durability, Object?>> get fields => [value, batch];

  @override
  List<IndexSpec> get indexes => const [];

  @override
  FtsSpec? get fts => null;
}

Future<void> main() async {
  var stage = 'start';
  void mark(String next) => stage = next;
  void report(String status, [String? detail]) {
    globalContext.setProperty('__durability_reopen_smoke'.toJS, status.toJS);
    if (detail != null) {
      globalContext.setProperty(
          '__durability_reopen_smoke_detail'.toJS, detail.toJS);
    }
  }

  try {
    final path = 'durability_reopen_${DateTime.now().microsecondsSinceEpoch}';
    final ids = [
      for (var i = 0; i < 2000; i++) 'durab${i.toString().padLeft(10, '0')}'
    ];
    mark('open-initial');
    final pocket = await LocalPocket.open(
      LocalPocketOptions(
        path: path,
        stores: [Durability.store],
        bootstrap: const BootstrapOptions(
          workerAssetPath: 'assets/localpocket_worker.js',
          wasmAssetPath: 'assets/sqlite3.wasm',
        ),
      ),
    );
    try {
      final store = pocket.store(Durability.store);
      mark('large-put');
      await store.putAll([
        for (var i = 0; i < 2000; i++)
          [
            Writes.id(ids[i]),
            Durability.value.set('value-$i'),
            Durability.batch.set(1),
          ]
      ]);
      final count = await store
          .count(const QuerySpec<Durability>(limit: Limits.unbounded));
      if (count != ids.length) {
        throw StateError('Large batch count mismatch before reopen: $count');
      }
    } finally {
      await pocket.close();
    }

    mark('reopen');
    final reopened = await LocalPocket.open(
      LocalPocketOptions(
        path: path,
        stores: [Durability.store],
        bootstrap: const BootstrapOptions(
          workerAssetPath: 'assets/localpocket_worker.js',
          wasmAssetPath: 'assets/sqlite3.wasm',
        ),
      ),
    );
    try {
      final store = reopened.store(Durability.store);
      final count = await store
          .count(const QuerySpec<Durability>(limit: Limits.unbounded));
      if (count != ids.length) {
        throw StateError('OPFS/IndexedDB reopen count mismatch: $count');
      }
      final sample = await store.get(ids[1500]);
      if (sample == null || sample(Durability.value) != 'value-1500') {
        throw StateError('Reopened record contents mismatch: $sample');
      }
    } finally {
      await reopened.close();
    }

    mark('cycles');
    for (var i = 0; i < 3; i++) {
      final cycle = await LocalPocket.open(
        LocalPocketOptions(
          path: 'durability_cycle_$i',
          stores: [Durability.store],
          bootstrap: const BootstrapOptions(
            workerAssetPath: 'assets/localpocket_worker.js',
            wasmAssetPath: 'assets/sqlite3.wasm',
          ),
        ),
      );
      await cycle.close();
      await cycle.close();
    }

    report('passed');
  } catch (error, stack) {
    report('failed', 'stage=$stage\n$error\n$stack');
  }
}
