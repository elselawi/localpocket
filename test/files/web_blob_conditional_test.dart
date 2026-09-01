import 'dart:io';

import 'package:localpocket/src/platform/native/blob_store.dart';
import 'package:test/test.dart';

/// Platform blob-store split.
///
/// After the files-layer collapse the native filesystem store lives at
/// `platform/native/blob_store.dart` (dart:io) and the web store at
/// `platform/web/worker/blob_store.dart` (pure Dart, OPFS). There is no web
/// `NativeBlobStore` placeholder and no conditional export anymore — web
/// applications inject a `WebBlobStore`, native applications a
/// `NativeBlobStore`.
void main() {
  group('platform blob-store split', () {
    test('native blob store is the real dart:io store on VM', () async {
      // On the VM the store must be the dart:io-backed one (its constructor
      // creates the blob/tmp directories).
      final dir = Directory.systemTemp.createTempSync('lp_web_cond_');
      addTearDown(() => dir.deleteSync(recursive: true));
      final store = NativeBlobStore(dir.path);
      expect(store, isNotNull);
      expect(await store.listHashes(), isEmpty);
    });

    test('the web worker store is pure Dart (no dart:io)', () {
      final webImpl = File('lib/src/platform/web/worker/blob_store.dart')
          .readAsStringSync();
      expect(webImpl.contains("import 'dart:io'"), isFalse,
          reason: 'no dart:io symbol may load on web');
      expect(webImpl.contains('class WebBlobStore'), isTrue);
    });

    test('the collapsed files-layer shim is gone', () {
      expect(File('lib/src/files/native_blob_store_platform.dart').existsSync(),
          isFalse);
      expect(File('lib/src/files/native_blob_store_web.dart').existsSync(),
          isFalse);
      expect(
          File('lib/src/files/native_blob_store.dart').existsSync(), isFalse);
    });
  });
}
