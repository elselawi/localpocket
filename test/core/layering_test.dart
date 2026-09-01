import 'dart:io';

import 'package:test/test.dart';

/// Static import-boundary enforcement.
///
/// The destination architecture (Phase 10) is one-directional:
///
///   kernel <-- runtime <-- api/facade
///     ^                    |
///     |                    `-- adapters/pocketbase (injected; kernel and
///     |                        runtime never import it — only the api token
///     |                        bridge and the web worker wire the concrete
///     |                        adapter)
///     `-- kernel/files (common file API) + platform/ (I/O lives here)
///
/// The rules that are actually enforceable and checked here:
///   R1  `lib/src/kernel/**` (which includes `kernel/sync/**`) never imports
///       `pocketbase` (neither `../adapters/pocketbase/...` nor a pocketbase
///       barrel). `lib/src/runtime/**` is held to the same rule: the runtimes
///       talk to the `SyncBackend`/`SyncBackendFactory` seams, never the
///       concrete adapter.
///   R2  `lib/src/kernel/**` (which includes `kernel/sync/**`) never imports
///       `dart:io`, `dart:html`, `dart:js*`, or `package:http` — it must stay
///       web-clean and transport-free.
///   R3  The ONLY adapter touch-points outside `lib/src/adapters/pocketbase/**`
///       are the three pinned files below (the api token-bridge re-export +
///       import, and the web worker's backend-factory wiring). Everything
///       else under `lib/src/` must not reference the adapter.
///   R4  The public barrel `lib/localpocket.dart` stays free of `dart:io`
///       and `package:http`, and there are no auxiliary barrels.
///
/// dart:io is allowed ONLY in the native platform implementations
/// (`lib/src/platform/native/**`).
///
/// Deliberate, documented exception: `lib/src/kernel/local_pocket.dart` (and
/// `lib/src/kernel/store.dart`) import `sync/` and `files/` because
/// `LocalPocket` is the hub that OWNS the outbox, op queue, conflicts, and
/// files API. That coupling is pinned here so it stays an intentional choice,
/// never an accident — while the reverse (pocketbase pulled into kernel/sync)
/// remains forbidden.
///
/// The native database factory (`lib/src/kernel/database_factory_native.dart`)
/// also imports `../platform/native/backup_store.dart` so the destructive-migration
/// backup file hooks can use `dart:io` from the platform layer (kernel stays
/// web-clean; the web worker wires its own OPFS hooks instead).
void main() {
  final kernel = _filesUnder('lib/src/kernel');
  final runtime = _filesUnder('lib/src/runtime');
  final allSrc = _filesUnder('lib/src');

  test('kernel and runtime never import the pocketbase adapter (R1)', () {
    for (final f in [...kernel, ...runtime]) {
      final imports = _imports(f);
      for (final i in imports) {
        expect(
            i.startsWith('../adapters/pocketbase/') ||
                i.contains('pocketbase.dart'),
            isFalse,
            reason: '$f must not import "$i" (kernel/runtime -> pocketbase)');
      }
    }
  });

  test('kernel never imports dart:io / http / web (R2)', () {
    const forbidden = [
      'dart:io',
      'dart:html',
      'dart:js',
      'dart:js_interop',
      'dart:wasm',
      'package:http',
    ];
    for (final f in kernel) {
      final imports = _imports(f);
      for (final i in imports) {
        for (final bad in forbidden) {
          expect(i == bad || i.startsWith('$bad/'), isFalse,
              reason: '$f must not import "$i"');
        }
      }
    }
  });

  test('the only adapter touch-points are the pinned three (R3)', () {
    // Everything under lib/src must not reference the adapter except these
    // three documented touch-points:
    //  - lib/src/api/api.dart        token-bridge re-export (Token/TokenProvider)
    //  - lib/src/api/sync.dart       token-bridge import for PocketBaseSyncOptions
    //  - lib/src/platform/web/worker/controller.dart  wires the concrete
    //    PocketBaseSyncBackendFactory into the worker's sync start
    const allowed = {
      'lib/src/api/api.dart',
      'lib/src/api/sync.dart',
      'lib/src/platform/web/worker/controller.dart',
    };
    final refPattern =
        RegExp(r"""^\s*(import|export)\s+'[^']*pocketbase""", multiLine: true);
    for (final f in allSrc) {
      if (allowed.contains(f)) {
        // The pinned files must actually reference the adapter (so the
        // exception cannot be silently dropped without updating this test).
        expect(
            File(f).readAsStringSync().contains('adapters/pocketbase'), isTrue,
            reason: '$f is pinned as an adapter touch-point but no longer '
                'references the adapter');
        continue;
      }
      final refs = refPattern
          .allMatches(File(f).readAsStringSync())
          .map((m) => m.group(1)!)
          .toList();
      expect(refs, isEmpty, reason: '$f must not reference the adapter');
    }
    // The adapter has no public barrel: `lib/pocketbase.dart` is gone with
    // the auxiliary barrels (Phase 9).
    expect(File('lib/pocketbase.dart').existsSync(), isFalse,
        reason: 'the pocketbase adapter is internal-only after Phase 9');
  });

  test('public barrel entrypoint is web-clean (R4)', () {
    final f = File('lib/localpocket.dart');
    final content = f.readAsStringSync();
    for (final bad in ['dart:io', 'package:http', 'dart:html', 'dart:js']) {
      expect(content.contains("import '$bad'"), isFalse,
          reason: 'lib/localpocket.dart must not import $bad');
    }
    // The auxiliary barrels (typed/sync/pocketbase) are deleted; the one
    // supported application barrel is `lib/localpocket.dart`.
    for (final aux in [
      'lib/typed.dart',
      'lib/sync.dart',
      'lib/pocketbase.dart'
    ]) {
      expect(File(aux).existsSync(), isFalse,
          reason: '$aux must not exist after the barrel switch');
    }
  });

  test('pinned exception: the hub kernel files may import sync and files', () {
    // This is the DOCUMENTED exception: LocalPocket owns the sync/file
    // sub-systems. If this is ever refactored away, update this test.
    final hub = File('lib/src/kernel/local_pocket.dart').readAsStringSync();
    expect(hub.contains("import 'sync/"), isTrue,
        reason: 'LocalPocket (the hub) intentionally wires sync');
    expect(
        hub.contains("import 'files/") ||
            hub.contains("import 'file_service.dart'"),
        isTrue,
        reason: 'LocalPocket (the hub) intentionally wires files');
  });

  test('the native platform implementations are the only dart:io consumers',
      () {
    // dart:io is allowed ONLY in lib/src/platform/native/**.
    const allowedIoConsumers = {
      'lib/src/platform/native/blob_store.dart',
      'lib/src/platform/native/backup_store.dart',
    };
    for (final f in allSrc) {
      final hasIo = _imports(f).any((i) => i.startsWith('dart:io'));
      if (hasIo) {
        expect(allowedIoConsumers.contains(f), isTrue,
            reason: 'only the native platform implementations may import '
                'dart:io');
      }
    }
  });
}

Iterable<String> _filesUnder(String dir) => Directory(dir)
    .listSync(recursive: true)
    .whereType<File>()
    .where((f) => f.path.endsWith('.dart'))
    .map((f) => f.path.replaceAll('\\', '/'));

List<String> _imports(String file) {
  final content = File(file).readAsStringSync();
  return RegExp(r'''^\s*import\s+'([^']+)';''', multiLine: true)
      .allMatches(content)
      .map((m) => m.group(1)!)
      .toList();
}
