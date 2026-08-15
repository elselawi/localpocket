import 'dart:async';
import 'dart:io';

import 'package:localpocket/src/files/native_blob_store_platform.dart'
    as platform_store;
import 'package:localpocket/src/files/native_blob_store_web.dart' as web_store;
import 'package:test/test.dart';

/// Conditional web blob implementation.
///
/// The VM test verifies (a) that `native_blob_store_platform.dart` resolves to
/// the dart:io implementation on VM, (b) that the web implementation itself is
/// pure Dart (no `dart:io`) and every method raises the documented
/// `UnsupportedError`, and (c) that a web target would select the web file
/// (verified structurally from the conditional-export source).
void main() {
  group('conditional web blob implementation', () {
    test('platform export resolves to the native store on VM', () async {
      // On VM the conditional export selects native_blob_store.dart, so the
      // class must be the dart:io-backed one (its constructor creates dirs).
      final dir = Directory.systemTemp.createTempSync('lp_web_cond_');
      addTearDown(() => dir.deleteSync(recursive: true));
      final store = platform_store.NativeBlobStore(dir.path);
      expect(store, isNotNull);
      expect(await store.listHashes(), isEmpty);
    });

    test(
        'web store is a pure-Dart class (no dart:io) — every method throws '
        'UnsupportedError', () async {
      final store = web_store.NativeBlobStore('/unused');
      // Constructing the web stub must not throw (it has no side effects).
      expect(store, isNotNull);

      await expectLater(
        store.put(const Stream.empty()),
        throwsA(isA<UnsupportedError>()),
      );
      await expectLater(
        store.open('a' * 64),
        throwsA(isA<UnsupportedError>()),
      );
      await expectLater(
        store.delete('a' * 64),
        throwsA(isA<UnsupportedError>()),
      );
      await expectLater(
        store.exists('a' * 64),
        throwsA(isA<UnsupportedError>()),
      );
      await expectLater(
        store.size('a' * 64),
        throwsA(isA<UnsupportedError>()),
      );
      await expectLater(
        store.cleanTmp(),
        throwsA(isA<UnsupportedError>()),
      );
      await expectLater(
        store.listHashes(),
        throwsA(isA<UnsupportedError>()),
      );
    });

    test('the conditional export selects the web file for non-io targets', () {
      // Structural check: the platform shim must be a pure conditional export
      // pointing at the web implementation for non-io platforms.
      final shim = File('lib/src/files/native_blob_store_platform.dart')
          .readAsStringSync();
      expect(shim, contains("export 'native_blob_store_web.dart'"));
      expect(shim, contains("if (dart.library.io) 'native_blob_store.dart'"));
    });

    test('the web store file contains no dart:io import', () {
      final webImpl =
          File('lib/src/files/native_blob_store_web.dart').readAsStringSync();
      expect(webImpl.contains("import 'dart:io'"), isFalse,
          reason: 'no dart:io symbol may load on web');
      expect(webImpl.contains('UnsupportedError'), isTrue);
    });
  });
}
