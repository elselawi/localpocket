import 'dart:async';
import 'dart:io';

import 'package:localpocket/src/kernel/files/blob_store.dart' show BlobStore;
import 'package:localpocket/src/platform/native/blob_store.dart';
import 'package:localpocket/src/platform/web/native_blob_store_stub.dart'
    as web_stub;
import 'package:test/test.dart';

/// Platform blob-store split.
///
/// After the files-layer collapse the native filesystem store lives at
/// `platform/native/blob_store.dart` (dart:io); the web worker store at
/// `platform/web/worker/blob_store.dart` (pure Dart, OPFS); and the web
/// declaration of `NativeBlobStore` at
/// `platform/web/native_blob_store_stub.dart` (pure Dart, inert).
///
/// The barrel re-exports `NativeBlobStore` through the api layer's conditional
/// seam (`lib/src/api/blob_store_platform.dart`) — the barrel itself must stay
/// free of `dart:io`. Because both targets declare the same name, app code can
/// pass `NativeBlobStore(...)` unconditionally: native opens use it, web opens
/// drop it in favour of the worker's own store.
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

    test('the barrel reaches NativeBlobStore through the conditional seam', () {
      // The barrel must export the seam, never the dart:io file directly (a
      // plain export would break every web build), and the seam's web branch
      // must be pure Dart.
      final barrel = File('lib/localpocket.dart').readAsStringSync();
      expect(
          barrel.contains("export 'src/api/blob_store_platform.dart'"), isTrue,
          reason: 'the barrel exports NativeBlobStore through the seam');
      expect(barrel.contains('platform/native/blob_store.dart'), isFalse,
          reason: 'the barrel must not reference the dart:io store directly');

      final seam =
          File('lib/src/api/blob_store_platform.dart').readAsStringSync();
      expect(
          seam.contains("export '../platform/native/blob_store.dart'"), isTrue,
          reason: 'the seam conditionally exports the native store');
      expect(
          seam.contains(
              "if (dart.library.js_interop) '../platform/web/native_blob_store_stub.dart'"),
          isTrue,
          reason: 'the seam swaps in the web stub on the JS target');

      final stub = File('lib/src/platform/web/native_blob_store_stub.dart')
          .readAsStringSync();
      expect(stub.contains("import 'dart:io'"), isFalse,
          reason: 'the web stub must stay pure Dart');
      expect(stub.contains('class NativeBlobStore extends BlobStore'), isTrue,
          reason: 'the web declaration must be a real BlobStore instance, or '
              'options.blobStore would not compile on web');
    });

    test('the web declaration is constructible but inert', () async {
      // Shared app code names NativeBlobStore on every target: on web the open
      // drops it, so constructing one must be harmless — and using one must
      // fail loudly rather than pretend to store bytes.
      final store = web_stub.NativeBlobStore('ignored-root');
      expect(store, isA<BlobStore>(),
          reason: 'it is what options.blobStore receives on web');
      expect(store.rootDir, 'ignored-root');
      expect(await store.isDurable, isFalse,
          reason: 'it stores nothing itself');
      expect(() => store.put(const Stream.empty()), throwsUnsupportedError);
      expect(() => store.open('0' * 64), throwsUnsupportedError);
      expect(() => store.delete('0' * 64), throwsUnsupportedError);
      expect(() => store.exists('0' * 64), throwsUnsupportedError);
      expect(() => store.size('0' * 64), throwsUnsupportedError);
      expect(() => store.cleanTmp(), throwsUnsupportedError);
      expect(() => store.listHashes(), throwsUnsupportedError);
    });

    test('the web open drops NativeBlobStore but rejects other stores', () {
      // The rule lives in one place and is narrow: the native spelling of "the
      // durable store" is dropped (the worker's store is durable too), while
      // any other store stays a typed error — dropping a MemoryBlobStore would
      // silently grant durability, and a custom store's bytes would land where
      // the caller cannot reach them.
      final openWeb =
          File('lib/src/platform/web/open_web.dart').readAsStringSync();
      expect(openWeb.contains('options.blobStore is! NativeBlobStore'), isTrue,
          reason: 'the drop must be exact and explicit');
      expect(openWeb.contains('ValidationException'), isTrue,
          reason: 'every other supplied store must still fail typed');
    });
  });
}
