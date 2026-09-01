import 'dart:async';
import 'dart:js_interop';

import 'package:sqlite3_web/sqlite3_web.dart';

import '../runtime/remote_runtime_client.dart';
import '../platform/web/page/assets.dart';
import '../platform/web/crypto.dart';
import '../platform/web/page/connector.dart';
import '../platform/web/page/open_core.dart';
import '../platform/web/page/lifecycle.dart';
import 'local_pocket.dart';
import 'options.dart';

/// Opens the facade on the web: the kernel runs in the dedicated database
/// worker and the page holds only the typed contract client.
///
/// The worker boots the kernel from the serialized open options (stores,
/// document limit, field cipher), so the manifest handshake happens before
/// any store is used and every later command is one contract envelope over
/// the worker transport. No SQL is compiled or executed on the page, and no
/// kernel is opened in-process.
Future<LocalPocket> openPlatform(LocalPocketOptions options) async {
  validateWebOpenConfig(path: options.path, encrypted: false);

  final schemas = [
    for (final def in options.stores) def.collectionSchema,
  ];

  // Field-level encryption: the configured cipher is serialized into the
  // open options so the worker reconstructs an AesGcmFieldCipher with the
  // same key. The key crosses postMessage into the same-origin trusted
  // worker; an unserializable configuration throws a typed error here,
  // never silently degrades.
  final cipherEnvelope = buildFieldCipherEnvelope(
    stores: schemas,
    fieldCipher: options.encryption?.fieldCipher,
  );

  // Worker asset: primary path, falling back to the plain root asset when
  // running from a dev/test harness where the package asset 404s. Wasm
  // asset: primary path, then the root `assets/sqlite3.wasm`, then the
  // packaged path as a final plain-path fallback.
  final workerResolved = await resolveAssetAsBlobUrl(
    load: loadAssetAsBlobUrl,
    primary: options.bootstrap.workerAssetPath ??
        'assets/packages/localpocket/assets/localpocket_worker.js',
    mimeType: 'application/javascript',
    fallbacks: const [],
    lastResort: 'assets/localpocket_worker.js',
  );
  final wasmResolved = await resolveAssetAsBlobUrl(
    load: loadAssetAsBlobUrl,
    primary: options.bootstrap.wasmAssetPath ??
        'assets/packages/localpocket/assets/sqlite3.wasm',
    mimeType: 'application/wasm',
    fallbacks: const ['assets/sqlite3.wasm'],
    lastResort: 'assets/packages/localpocket/assets/sqlite3.wasm',
  );

  late RemoteRuntimeClient runtime;
  final webSqlite = WebSqlite.open(
    workers: DedicatedOnlyConnector(workerResolved.url),
    wasmModule: wasmResolved.url,
    handleCustomRequest: (raw) async {
      if (raw != null) {
        final value = raw.dartify();
        if (value is Map) runtime.handleWorkerEvent(value);
      }
      return null;
    },
  );

  // The worker resolves this database's OPFS directory from the original
  // name (it sees only the fixed in-VFS path `/database`).
  final openArgs = {
    'stores': [for (final s in schemas) s.toJson()],
    'maxDocBytes': options.maxDocumentBytes,
    'destructiveBackup': true,
    'backupDbName': options.path,
    if (cipherEnvelope != null) 'fieldCipher': cipherEnvelope,
  };

  final connectResult = await webSqlite.connectToRecommended(
    options.path,
    additionalOptions: openArgs.jsify(),
  );

  runtime = RemoteRuntimeClient(
    transport: (envelope) async {
      final raw = await connectResult.database.customRequest(envelope.jsify());
      return raw?.dartify();
    },
    requestTimeout: options.bootstrap.requestTimeout,
  );

  // Worker death ends the event stream; later sends fail through the
  // transport's own closed classification.
  unawaited(connectResult.database.closed.then((_) => runtime.close()));

  return LocalPocket.internal(runtime);
}
