import 'dart:async';
import 'dart:js_interop';

import 'package:sqlite3_web/sqlite3_web.dart';

import '../../api/local_pocket.dart';
import '../../api/options.dart';
import '../../adapters/pocketbase/backend.dart'
    show PocketBaseSyncBackendFactory;
import '../../contract/contract.dart';
import '../../kernel/schema_manifest.dart';
import '../../runtime/remote_runtime_client.dart';
import 'crypto.dart';
import 'page/assets.dart';
import 'page/connector.dart';
import 'page/lifecycle.dart';
import 'page/object_urls.dart';
import 'page/open_core.dart';

/// Opens the facade on the web: the kernel runs in the dedicated database
/// worker and the page holds only the typed contract client. The worker boots
/// the kernel from the serialized open options, so the manifest handshake
/// happens before any store is used and every later command is one contract
/// envelope. No SQL is compiled or executed on the page.
///
/// Selected by the conditional export in `lib/src/api/open_platform.dart`;
/// the api layer never imports platform code or the web SDK directly.
Future<LocalPocket> openPlatform(LocalPocketOptions options) async {
  validateWebOpenConfig(path: options.path, encrypted: false);

  // The worker boot configures the sync backend factory itself (code cannot
  // cross the worker boundary) — a caller-configured factory would be
  // silently ignored, so fail the open typed instead. The identity check
  // rejects not only foreign factory CLASSES but any foreign INSTANCE (a
  // PocketBaseSyncBackendFactory subclass or a non-const instance): only the
  // worker's own canonical const factory may configure the backend.
  const workerBackendFactory = PocketBaseSyncBackendFactory();
  if (options.syncBackendFactory != null &&
      !identical(options.syncBackendFactory, workerBackendFactory)) {
    throw ValidationException(
        'syncBackendFactory cannot cross the web worker boundary: the worker '
        'configures the PocketBase factory itself. Omit the option on web, or '
        'run the sync attachment on a native runtime for custom backends.');
  }
  // A caller-injected clock is code and cannot cross into the worker either;
  // the worker keeps the system clock. Rejecting keeps suites honest: an
  // injected `now` that passes on native but silently uses the real clock on
  // the worker leg would corrupt cross-runtime test parity.
  if (options.now != null) {
    throw ValidationException(
        'The injectable `now` clock cannot cross the web worker boundary: the '
        'worker uses the system clock. Omit the option on web (or run on a '
        'native runtime for an injected clock).');
  }
  // Same for a caller-provided blob store: the worker builds its own
  // OPFS-backed store, and a caller store object (with its methods) cannot
  // cross the boundary. Failing typed keeps attachment bytes where the caller
  // expects them instead of silently landing in a store it cannot reach.
  if (options.blobStore != null) {
    throw ValidationException(
        'A caller-provided blobStore cannot cross the web worker boundary: '
        'the worker builds its own OPFS-backed store. Omit the option on web '
        '(or run on a native runtime for a custom blob store).');
  }

  final schemas = [
    for (final def in options.stores) def.compiledSchema,
  ];

  // The cipher is serialized into the open options so the worker reconstructs
  // an AesGcmFieldCipher with the same key (crosses postMessage into the
  // same-origin trusted worker); unserializable configs throw typed here.
  final cipherEnvelope = buildFieldCipherEnvelope(
    stores: schemas,
    fieldCipher: options.encryption?.fieldCipher,
  );

  // Worker asset falls back to the plain root asset for dev/test harnesses
  // where the package asset 404s; wasm falls back to the root asset, then
  // the packaged plain path.
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

  RemoteRuntimeClient? runtimeRef;
  Future<void> Function()? disposeConnected;

  // The worker resolves this database's OPFS directory from the original
  // name (it sees only the fixed in-VFS path `/database`).
  final openArgs = {
    'stores': [for (final s in schemas) s.toJson()],
    'maxDocBytes': options.maxDocumentBytes,
    'destructiveBackup': true,
    'backupDbName': options.path,
    if (cipherEnvelope != null) 'fieldCipher': cipherEnvelope,
  };

  try {
    // Constructing the sqlite3_web factory can itself throw (an interop
    // failure building the connector); it sits INSIDE the cleanup try so a
    // failed open still releases the fetched worker/wasm blob URLs below —
    // they pin asset bytes for the page's lifetime otherwise.
    final webSqlite = WebSqlite.open(
      workers: DedicatedOnlyConnector(workerResolved.url),
      wasmModule: wasmResolved.url,
      handleCustomRequest: (raw) async {
        if (raw != null) {
          final value = raw.dartify();
          // Events cannot arrive before the runtime exists (they ride the
          // lazily-created event subscription), but an early worker→page
          // message must not touch an uninitialized variable.
          if (value is Map) runtimeRef?.handleWorkerEvent(value);
        }
        return null;
      },
    );
    // Spawn/handshake watchdog: a worker that never connects (blocked spawn,
    // wedged wasm instantiation) fails the open typed instead of hanging the
    // caller forever. The connect future is never left orphaned: on timeout
    // a late completion is disposed via the existing failure path.
    final connectResult = await guardWorkerSpawn(
      () => webSqlite.connectToRecommended(options.path,
          additionalOptions: openArgs.jsify()),
      timeout: options.bootstrap.spawnTimeout,
    );
    disposeConnected = () => connectResult.database.dispose();

    final runtime = RemoteRuntimeClient(
      transport: (envelope) async {
        final raw =
            await connectResult.database.customRequest(envelope.jsify());
        return raw?.dartify();
      },
      requestTimeout: options.bootstrap.requestTimeout,
    );
    runtimeRef = runtime;

    // Typed open handshake: the page sends the OpenRequest with the manifest
    // fingerprints it compiled; the kernel verifies page/worker schema identity
    // through the sealed contract before any application command runs. A
    // divergence fails the open, never surfaces mid-session.
    await runtime.send(OpenRequest(
      stores: [for (final s in schemas) s.toJson()],
      manifestFingerprints: {
        for (final s in schemas) s.name: SchemaManifest.compile(s).fingerprint,
      },
    ));

    // Worker death ends the event stream; later sends fail via the
    // transport's closed classification.
    unawaited(connectResult.database.closed.then((_) => runtime.close()));

    // On close, dispose the worker connection to flush the OPFS file handle
    // (sqlite3_web `Database.dispose()`); without it committed blob data can be
    // lost on some browsers. Then revoke fetched blob: URLs — they hold asset
    // bytes alive in the page for their lifetime, so repeated cycles would
    // otherwise leak. Plain-path fallbacks are never revoked.
    return LocalPocket.internal(
      runtime,
      stores: options.stores,
      onClose: () async {
        await connectResult.database.dispose();
        if (workerResolved.fetched) revokeObjectUrl(workerResolved.url);
        if (wasmResolved.fetched) revokeObjectUrl(wasmResolved.url);
      },
    );
  } catch (_) {
    // A failed open must release what it fetched: the blob: URLs pin the
    // worker JS / wasm bytes in the page for their lifetime, and a spawned
    // worker connection should be disposed best-effort. Retry loops would
    // otherwise accumulate both per attempt.
    if (disposeConnected != null) {
      try {
        await disposeConnected();
      } catch (_) {}
    }
    if (workerResolved.fetched) revokeObjectUrl(workerResolved.url);
    if (wasmResolved.fetched) revokeObjectUrl(wasmResolved.url);
    rethrow;
  }
}
