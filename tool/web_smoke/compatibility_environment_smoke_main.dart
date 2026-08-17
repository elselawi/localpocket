import 'dart:js_interop';
import 'dart:js_interop_unsafe';

import 'package:localpocket/src/core/schema.dart';
import 'package:localpocket/src/web/facade.dart';
import 'package:web/web.dart' as web;

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

    final schema = CollectionSchema<Object?>(
      name: 'environment',
      version: 1,
      fields: [Field.text('value', required: true)],
    );
    final path = 'environment_${DateTime.now().microsecondsSinceEpoch}';
    final pocket = await LocalPocket.open(path: path, stores: [schema]);
    try {
      if (!pocket.storageCapabilities.worker) {
        throw StateError('Web database is not worker-backed.');
      }
      if (pocket.capabilities.walSupported) {
        throw StateError('Web database incorrectly reports WAL support.');
      }
      if (pocket.storageCapabilities.multiTabSync) {
        throw StateError('Unsupported multi-tab sync was reported.');
      }
      if (web.window.navigator.onLine == false) {
        // Offline startup is valid; record the state through the smoke result.
      }
      await pocket.collection('environment').put({
        'id': 'envcheck0000001',
        'value': 'reload-safe',
      });
      final read =
          await pocket.collection('environment').get('envcheck0000001');
      if (read?['value'] != 'reload-safe') {
        throw StateError('Environment smoke write/read failed.');
      }
      if (pocket.storageCapabilities.storage.isEmpty) {
        throw StateError('Storage capability did not report a backend.');
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
