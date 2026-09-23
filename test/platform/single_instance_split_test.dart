import 'dart:io';

import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

/// Platform single-instance claim split and VM behaviour.
///
/// On VM/native targets, [LocalPocket.claimSingleInstance] returns `true`
/// unconditionally because multi-process / multi-window contention is managed
/// at the SQLite engine level.
///
/// On web targets, the conditional seam swaps in the Web Locks API
/// implementation (`lib/src/platform/web/single_instance.dart`) which prevents
/// multiple tabs on the same origin from concurrently opening the same OPFS
/// file and wedging the origin.
void main() {
  group('platform single-instance split', () {
    test('claimSingleInstance returns true on VM', () async {
      expect(await LocalPocket.claimSingleInstance('app.db'), isTrue);
      // Repeated claims for the same path succeed.
      expect(await LocalPocket.claimSingleInstance('app.db'), isTrue);
      // Claims for different paths succeed.
      expect(await LocalPocket.claimSingleInstance('another.db'), isTrue);
    });

    test('claimSingleInstance is callable before LocalPocket.open', () async {
      final claimed = await LocalPocket.claimSingleInstance('pre_open.db');
      expect(claimed, isTrue);
    });

    test('the seam conditionally exports native and web implementations', () {
      final seam =
          File('lib/src/api/single_instance_platform.dart').readAsStringSync();
      expect(
        seam.contains("export '../platform/native/single_instance.dart'"),
        isTrue,
        reason: 'the seam must conditionally export the native implementation',
      );
      expect(
        seam.contains(
            "if (dart.library.js_interop) '../platform/web/single_instance.dart'"),
        isTrue,
        reason: 'the seam must swap in the web implementation on JS/WASM',
      );
    });

    test('native implementation stays clean of web SDKs and dart:io', () {
      final nativeImpl =
          File('lib/src/platform/native/single_instance.dart').readAsStringSync();
      expect(nativeImpl.contains("import 'dart:io'"), isFalse,
          reason: 'native single_instance does not need dart:io');
      expect(nativeImpl.contains('package:web'), isFalse,
          reason: 'native single_instance must never import package:web');
      expect(nativeImpl.contains('dart:js'), isFalse,
          reason: 'native single_instance must never import dart:js*');
      expect(nativeImpl.contains('dart:html'), isFalse,
          reason: 'native single_instance must never import dart:html');
    });

    test('web implementation does not import dart:io', () {
      final webImpl =
          File('lib/src/platform/web/single_instance.dart').readAsStringSync();
      expect(webImpl.contains("import 'dart:io'"), isFalse,
          reason: 'web single_instance must stay free of dart:io');
    });
  });
}
