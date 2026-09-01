import 'dart:js_interop';
import 'dart:js_interop_unsafe';

import 'package:localpocket/src/api/api.dart';
import 'package:localpocket/src/typed/typed.dart';
import 'package:web/web.dart' as web;

/// Browser smoke for the destination facade over the worker runtime in the
/// no-COOP/COEP environment: capability reporting must reflect the LIVE
/// worker engine (a real SQLite version, FTS5 for FTS stores, WAL correctly
/// absent), and a store write/read must round-trip.
final class Environment extends StoreDef<Environment> {
  Environment._() : super(name: 'environment', version: 1);
  static final Environment store = Environment._();

  static final value = store.schema.text('value').req();

  @override
  List<FieldDef<Environment, Object?>> get fields => [value];

  @override
  List<IndexSpec> get indexes => const [];

  @override
  FtsSpec? get fts => null;
}

Future<void> main() async {
  void report(String status, [String? detail]) {
    globalContext.setProperty(
        '__compatibility_environment_smoke'.toJS, status.toJS);
    if (detail != null) {
      globalContext.setProperty(
          '__compatibility_environment_smoke_detail'.toJS, detail.toJS);
    }
  }

  try {
    final crossOriginIsolated =
        globalContext.getProperty('crossOriginIsolated'.toJS)?.dartify();
    if (crossOriginIsolated == true) {
      throw StateError('Smoke requires the no-COOP/COEP environment.');
    }
    final sharedArrayBuffer =
        globalContext.getProperty('SharedArrayBuffer'.toJS)?.dartify();
    if (sharedArrayBuffer != null) {
      // Presence is allowed; the implementation must not require it. The
      // browser matrix still runs with the no-header path.
    }

    final path = 'environment_${DateTime.now().microsecondsSinceEpoch}';
    final pocket = await LocalPocket.open(
      LocalPocketOptions(
        path: path,
        stores: [Environment.store],
        bootstrap: const BootstrapOptions(
          workerAssetPath: 'assets/localpocket_worker.js',
          wasmAssetPath: 'assets/sqlite3.wasm',
        ),
      ),
    );
    try {
      final caps = await pocket.capabilities;
      if (!caps.isWeb) {
        throw StateError('Web database is not worker-backed.');
      }
      if (caps.walSupported) {
        throw StateError('Web database incorrectly reports WAL support.');
      }
      // Capability reporting must reflect the LIVE worker engine, not a
      // hard-coded facade matrix: a real SQLite version must be reconciled
      // from the worker probe (never empty/unknown), and FTS5 must be
      // reported so FTS stores can be opened.
      if (caps.sqliteVersion.isEmpty) {
        throw StateError(
            'Web capabilities did not reconcile a live SQLite version.');
      }
      if (!caps.hasFts5) {
        throw StateError(
            'Web capabilities must report FTS5 to support FTS stores.');
      }
      if (web.window.navigator.onLine == false) {
        // Offline startup is valid; record the state through the smoke result.
      }
      final store = pocket.store(Environment.store);
      await store.put(
          [Writes.id('envcheck0000001'), Environment.value.set('reload-safe')]);
      final read = await store.get('envcheck0000001');
      if (read == null || read(Environment.value) != 'reload-safe') {
        throw StateError('Environment smoke write/read failed.');
      }
    } finally {
      await pocket.close();
    }

    report(
        'passed',
        'browser=${web.window.navigator.userAgent}; online=${web.window.navigator.onLine}; '
            'origin=${web.window.location.origin}; crossOriginIsolated=$crossOriginIsolated; '
            'sharedArrayBufferPresent=${sharedArrayBuffer != null}');
  } catch (error, stack) {
    report('failed', '$error\n$stack');
  }
}
