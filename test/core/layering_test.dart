import 'dart:io';

import 'package:test/test.dart';

/// Static import-boundary enforcement.
///
/// The documented architecture (see the PocketBase adapter under
/// `lib/src/pocketbase/`) is one-directional:
///
///   core  <--  sync  <--  pocketbase (adapter)
///                    ^
///                    `--- files (platform I/O lives here)
///
/// The rules that are actually enforceable and checked here:
///   R1  `lib/src/core/**` and `lib/src/kernel/sync/**` never import
///       `pocketbase` (neither `../pocketbase/...` nor a pocketbase barrel).
///   R2  `lib/src/core/**` and `lib/src/kernel/sync/**` never import `dart:io`,
///       `dart:html`, `dart:js*`, or `package:http` — they must stay
///       web-clean and transport-free.
///   R3  Nothing outside `lib/src/pocketbase/**` may import `pocketbase`.
///   R4  The public barrel `lib/localpocket.dart` stays free of `dart:io`
///       and `package:http`.
///
/// Deliberate, documented exception: `lib/src/core/local_pocket.dart` and
/// `lib/src/core/store.dart` import `../sync/` and `../files/` because
/// `LocalPocket` is the hub that OWNS the outbox, op queue, conflicts, and
/// files API. That coupling is pinned here so it stays an intentional choice,
/// never an accident — while the reverse (pocketbase pulled into core/sync)
/// remains forbidden.
///
/// The native database factory (`lib/src/core/database_factory_native.dart`)
/// also imports `../files/native_backup_file.dart` so the destructive-migration
/// backup file hooks can use `dart:io` from the files layer (core stays
/// web-clean; the web worker wires its own OPFS hooks instead).
void main() {
  final core = _filesUnder('lib/src/core');
  final sync = _filesUnder('lib/src/kernel/sync');
  final pocketbase = _filesUnder('lib/src/pocketbase');
  final files = _filesUnder('lib/src/files');
  final allSrc = [...core, ...sync, ...pocketbase, ...files];

  test('core and sync never import the pocketbase adapter (R1)', () {
    for (final f in [...core, ...sync]) {
      final imports = _imports(f);
      for (final i in imports) {
        expect(i.startsWith('../pocketbase/') || i.contains('pocketbase.dart'),
            isFalse,
            reason: '$f must not import "$i" (core/sync -> pocketbase)');
      }
    }
  });

  test('core and sync never import dart:io / http / web (R2)', () {
    const forbidden = [
      'dart:io',
      'dart:html',
      'dart:js',
      'dart:js_interop',
      'dart:wasm',
      'package:http',
    ];
    for (final f in [...core, ...sync]) {
      final imports = _imports(f);
      for (final i in imports) {
        for (final bad in forbidden) {
          expect(i == bad || i.startsWith('$bad/'), isFalse,
              reason: '$f must not import "$i"');
        }
      }
    }
  });

  test('nothing outside the adapter imports pocketbase (R3)', () {
    for (final f in [...core, ...sync, ...files]) {
      for (final i in _imports(f)) {
        expect(i.contains('pocketbase'), isFalse,
            reason: '$f must not import "$i"');
      }
    }
    // The adapter has no public barrel: `lib/pocketbase.dart` is gone with
    // the auxiliary barrels (Phase 9). Only `src/pocketbase/**` may be
    // imported, by tests/internal surfaces.
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

  test('pinned exception: the hub core files may import sync and files', () {
    // This is the DOCUMENTED exception: LocalPocket owns the sync/file
    // sub-systems. If this is ever refactored away, update this test.
    final hub = File('lib/src/core/local_pocket.dart').readAsStringSync();
    expect(hub.contains("import '../kernel/sync/"), isTrue,
        reason: 'LocalPocket (the hub) intentionally wires sync');
    expect(hub.contains("import '../files/"), isTrue,
        reason: 'LocalPocket (the hub) intentionally wires files');
  });

  test('files platform implementations are the only dart:io consumers', () {
    // dart:io is allowed ONLY in the native platform implementations.
    const allowedIoConsumers = {
      'lib/src/files/native_blob_store.dart',
      'lib/src/files/native_backup_file.dart',
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
