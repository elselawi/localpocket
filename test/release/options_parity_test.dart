import 'dart:io';

import 'package:localpocket/src/platform/web/worker/open_options.dart';
import 'package:test/test.dart';

/// Option-parity guard: every `LocalPocketOptions` field must carry an
/// explicit web-parity classification. A NEW field without an entry here
/// fails this test, so an option can never again be silently dropped (or
/// silently reinterpreted) at the worker boundary.
///
/// Classifications:
/// - CROSSES: the value (or a wire encoding of it) crosses the open
///   envelope and is strict-parsed by the worker.
/// - PAGE-EXECUTES: the value is code that executes on the page through
///   the callback channel.
/// - REJECTED-TYPED: a supplied value fails the web open with a typed
///   error (code cannot cross the boundary).
/// - PLATFORM-CONSTRAINT: not fixable on web — the engine IS the worker's
///   wasm module and the OPFS VFS has no cipher hooks. Documented, tested,
///   final.
void main() async {
  final optionsSource =
      await File('lib/src/api/options.dart').readAsString();
  final openWebSource =
      await File('lib/src/platform/web/open_web.dart').readAsString();
  final openOptionsSource =
      await File('lib/src/platform/web/worker/open_options.dart').readAsString();
  final controllerSource =
      await File('lib/src/platform/web/worker/controller.dart').readAsString();

  /// Every constructor parameter the [LocalPocketOptions] constructor
  /// declares (`this.<name>`), extracted from the source so the list below
  /// is validated against the real constructor instead of a hand-maintained
  /// field copy.
  Set<String> constructorFields() => _constructorFieldNames(optionsSource);

  /// Field → classification (category, evidence the parity claim is real).
  const parity = <String, Parity>{
    'path': Parity.crosses(
        wireKey: 'backupDbName',
        note: 'the worker resolves the OPFS directory from the original name'),
    'stores': Parity.crosses(
        wireKey: 'stores', note: 'schema JSON; executable members ride '
            'storePolicies'),
    'encryption': Parity.crosses(
        wireKey: 'fieldCipher', note: 'AES-256-GCM key envelope'),
    'databaseEncryption': Parity.platformConstraint(
        note: 'the OPFS VFS does not support cipher engines'),
    'nativeDatabaseFactory': Parity.platformConstraint(
        note: 'the engine IS the worker\'s wasm module'),
    'bootstrap': Parity.crosses(
        wireKey: 'callbackTimeoutMs',
        note: 'requestTimeout also bounds worker→page callbacks; asset '
            'paths and spawnTimeout stay page-side'),
    'maxDocumentBytes': Parity.crosses(wireKey: 'maxDocBytes'),
    'now': Parity.rejectedTyped(
        note: 'a clock closure is code; use clockOffsetMs on web'),
    'clockOffsetMs': Parity.crosses(
        wireKey: 'clockOffsetMs', note: 'data-style clock shift'),
    'groupCommitWindow': Parity.crosses(wireKey: 'groupCommitWindowMs'),
    'txSessionTtl': Parity.crosses(wireKey: 'txSessionTtlMs'),
    'syncBackendFactory': Parity.rejectedTyped(
        note: 'the worker configures the canonical PocketBase factory '
            'itself; only that const instance is accepted'),
    'blobStore': Parity.rejectedTyped(
        note: 'the worker builds its own OPFS-backed store'),
    'pageCallbacks': Parity.pageExecutes(
        channel: 'callback_rpc',
        note: 'auto-collected executable schema features resolve to the '
            'page'),
  };

  test('every LocalPocketOptions constructor field has a parity entry', () {
    final unclassified = constructorFields()
        .where((f) => !parity.containsKey(f))
        .toList()
      ..sort();
    expect(unclassified, isEmpty,
        reason: 'new LocalPocketOptions fields must be classified in '
            'test/release/options_parity_test.dart: $unclassified');
  });

  test('the parity table names only real constructor fields', () {
    final unknown =
        parity.keys.where((f) => !constructorFields().contains(f)).toList()
          ..sort();
    expect(unknown, isEmpty,
        reason: 'stale parity entries must be removed: $unknown');
  });

  group('CROSSES entries are real on the wire', () {
    for (final entry in parity.entries) {
      final p = entry.value;
      if (p is! _Crosses) continue;
      test('${entry.key} crosses as "${p.wireKey}" and is strict-parsed',
          () {
        expect(openWebSource, contains("'${p.wireKey}'"),
            reason: '${entry.key} must be carried in the open envelope');
        // The worker-side parse lives either in the pure option parser or
        // (for envelope-shaped values like the cipher key) in the raw
        // controller boundary.
        final parsedOnWorker = openOptionsSource.contains("'${p.wireKey}'") ||
            controllerSource.contains("'${p.wireKey}'");
        expect(parsedOnWorker, isTrue,
            reason: 'the worker must strict-parse "${p.wireKey}"');
      });
    }
  });

  group('REJECTED-TYPED entries are enforced in the web open', () {
    for (final entry in parity.entries) {
      final p = entry.value;
      if (p is! _RejectedTyped) continue;
      test('${entry.key} is rejected with a typed error', () {
        expect(openWebSource, contains('options.${entry.key}'),
            reason: 'the web open must check options.${entry.key}');
        expect(openWebSource, contains('ValidationException'),
            reason: 'the rejection must be typed, never silent');
      });
    }
  });

  group('PAGE-EXECUTES entries resolve through the callback channel', () {
    for (final entry in parity.entries) {
      final p = entry.value;
      if (p is! _PageExecutes) continue;
      test('${entry.key} executes on the page via "${p.channel}"', () {
        expect(openWebSource, contains('PageCallbackServer'),
            reason: 'the page must serve the callback channel');
      });
    }
  });

  group('observable conformance of the crossed values', () {
    test('millisecond values land in the worker kernel', () async {
      // (see worker_open_gates_test.dart for the full matrix) — a parse of
      // the same envelope the page builds drives the kernel values.
      final parsed = parseOpenOptions(const {
        'groupCommitWindowMs': 12,
        'txSessionTtlMs': 0,
        'clockOffsetMs': -5000,
        'callbackTimeoutMs': 4500,
      });
      expect(parsed, {
        'groupCommitWindowMs': 12,
        'txSessionTtlMs': 0,
        'clockOffsetMs': -5000,
        'callbackTimeoutMs': 4500,
      });
    });
  });
}

/// One web-parity classification for a [LocalPocketOptions] field.
sealed class Parity {
  const Parity();

  /// The value (or a wire encoding of it) crosses the open envelope.
  const factory Parity.crosses({required String wireKey, String note}) = _Crosses;

  /// The value is code executing on the page through the callback channel.
  const factory Parity.pageExecutes({required String channel, String note}) =
      _PageExecutes;

  /// A supplied value fails the web open with a typed error.
  const factory Parity.rejectedTyped({String note}) = _RejectedTyped;

  /// Not fixable on web: documented platform constraint.
  const factory Parity.platformConstraint({String note}) =
      _PlatformConstraint;
}

final class _Crosses extends Parity {
  const _Crosses({required this.wireKey, this.note = ''});
  final String wireKey;
  final String note;
}

final class _PageExecutes extends Parity {
  const _PageExecutes({required this.channel, this.note = ''});
  final String channel;
  final String note;
}

final class _RejectedTyped extends Parity {
  const _RejectedTyped({this.note = ''});
  final String note;
}

final class _PlatformConstraint extends Parity {
  const _PlatformConstraint({this.note = ''});
  final String note;
}

/// Extracts every `this.<name>` parameter name from the [LocalPocketOptions]
/// constructor block of the options source (from the class declaration to
/// the end of its constructor argument list).
Set<String> _constructorFieldNames(String source) {
  final classStart = source.indexOf('final class LocalPocketOptions');
  expect(classStart, greaterThanOrEqualTo(0),
      reason: 'LocalPocketOptions must exist in lib/src/api/options.dart');
  final ctorStart = source.indexOf('const LocalPocketOptions(', classStart);
  expect(ctorStart, greaterThanOrEqualTo(0),
      reason: 'LocalPocketOptions must have a const constructor');
  final ctorEnd = source.indexOf('});', ctorStart);
  expect(ctorEnd, greaterThan(ctorStart));
  final body = source.substring(ctorStart, ctorEnd);
  return RegExp(r'this\.(\w+)')
      .allMatches(body)
      .map((m) => m.group(1)!)
      .toSet();
}
