import 'dart:io';

import 'package:test/test.dart';

/// Static import-boundary enforcement.
///
/// The destination architecture (Phase 10) is one-directional:
///
///   kernel <-- runtime <-- api/facade
///     ^                    |
///     |                    `-- adapters/pocketbase (injected; kernel and
///     |                        runtime never import it — only the web worker
///     |                        and web open path wire/check the concrete
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
///       are the two pinned files below (the web worker's backend-factory
///       wiring, and the web open path that rejects non-PocketBase
///       factories). Everything else under `lib/src/` must not reference
///       the adapter.
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

  test('the only adapter touch-points are the pinned two (R3)', () {
    // Everything under lib/src must not reference the adapter except these
    // two documented touch-points:
    //  - lib/src/platform/web/worker/controller.dart  wires the concrete
    //    PocketBaseSyncBackendFactory into the worker's sync start
    //  - lib/src/platform/web/open_web.dart  rejects a caller-configured
    //    non-PocketBase sync backend factory instead of silently ignoring it
    // (Token/TokenProvider live on the kernel sync seam; the api layer no
    // longer reaches into the adapter for them.)
    const allowed = {
      'lib/src/platform/web/worker/controller.dart',
      'lib/src/platform/web/open_web.dart',
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

  test('the api layer never imports web SDKs or the web platform (R5)', () {
    // Plan §5.1: the public API layer imports no dart:io, dart:js_interop,
    // package:web, or platform implementation files. The browser specifics
    // live under lib/src/platform/web/ and are reached ONLY through the
    // conditional export in lib/src/api/open_platform.dart.
    final api = _filesUnder('lib/src/api');
    for (final f in api) {
      final imports = _imports(f);
      for (final i in imports) {
        final isWebSdk = i.startsWith('dart:js') ||
            i.startsWith('dart:html') ||
            i.startsWith('package:web/');
        expect(isWebSdk, isFalse,
            reason: '$f must not import "$i" (api -> web SDK)');
        expect(i.contains('platform/web'), isFalse,
            reason: '$f must not import "$i" (api -> platform/web)');
      }
    }
  });

  test('the platform open dispatch is pinned to the conditional export (R6)',
      () {
    // The single sanctioned api -> platform reference is the conditional
    // export that chooses the open implementation. Pin it so the dispatch
    // point cannot move or multiply.
    final dispatch = File('lib/src/api/open_platform.dart').readAsStringSync();
    expect(dispatch.contains("export '../platform/native/open_native.dart'"),
        isTrue,
        reason:
            'open_platform.dart must conditionally export the native opener');
    expect(
        dispatch.contains(
            "if (dart.library.js_interop) '../platform/web/open_web.dart'"),
        isTrue,
        reason: 'open_platform.dart must conditionally export the web opener');
    // And no other api file imports or exports the platform open
    // implementations (doc mentions are fine; references are not).
    final refPattern = RegExp(
        r"""^\s*(import|export)\s+'[^']*(open_native|open_web)\.dart'""",
        multiLine: true);
    for (final f in _filesUnder('lib/src/api')) {
      if (f == 'lib/src/api/open_platform.dart') continue;
      expect(refPattern.allMatches(File(f).readAsStringSync()), isEmpty,
          reason: '$f must not reference the platform open implementations');
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
