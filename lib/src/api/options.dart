/// Opening options for the public facade: where the database lives, which
/// stores it holds, how it is encrypted, and how the remote runtime (web
/// worker) is bootstrapped.
///
/// Everything here is plain Dart: paths are strings and assets are asset
/// paths, so the same options compile on mobile, desktop, and web.
library;

import 'dart:typed_data';

import '../kernel/cipher.dart';
import '../kernel/files/blob_store.dart' show BlobStore;
import '../kernel/sync/sync_backend.dart' show SyncBackendFactory;
import '../schema/store_def.dart';

/// Re-exported so callers configuring durability can name it from the same
/// import as the rest of the facade vocabulary.
export '../kernel/local_pocket.dart' show DurabilityClass;

/// {@template localpocket.local_pocket_options}
/// Everything [LocalPocket.open] needs to bring up a database.
/// {@endtemplate}
final class LocalPocketOptions {
  /// {@macro localpocket.local_pocket_options}
  const LocalPocketOptions({
    required this.path,
    this.stores = const [],
    this.encryption,
    this.bootstrap = const BootstrapOptions(),
    this.maxDocumentBytes = 1900000,
    this.now,
    this.syncBackendFactory,
    this.blobStore,
  });

  /// Database file path (`:memory:` opens an in-memory database).
  final String path;

  /// The store definitions to create/verify at open time. One canonical
  /// instance per store — declaring the same store name twice, or rebinding
  /// a name to a different definition instance, is rejected.
  final List<StoreDef<Object?>> stores;

  /// Field-level encryption configuration, or `null` for plaintext storage.
  final EncryptionConfig? encryption;

  /// Remote-runtime bootstrap settings (web worker assets). Ignored on
  /// native targets, where the runtime runs in-process.
  final BootstrapOptions bootstrap;

  /// Upper bound for one persisted document, in bytes.
  final int maxDocumentBytes;

  /// Injectable wall clock (tests). `null` uses the system clock.
  final DateTime Function()? now;

  /// Builds the sync backend the kernel uses for sync start commands, or
  /// `null` when sync is not used on this database.
  ///
  /// Primarily the native wiring: on web the worker configures its own
  /// backend (a non-PocketBase factory fails the web open typed instead of
  /// being silently ignored). A runtime without a factory fails sync start
  /// with a `StateError`.
  final SyncBackendFactory? syncBackendFactory;

  /// The blob store holding attachment bytes for this database, or `null`
  /// when files are not used.
  ///
  /// On web the worker resolves its own store (OPFS with a volatile fallback);
  /// natively this is the storage adapter. Without one, file operations fail
  /// with a `StateError`.
  final BlobStore? blobStore;
}

/// {@template localpocket.encryption_config}
/// At-rest encryption for record fields.
/// {@endtemplate}
final class EncryptionConfig {
  const EncryptionConfig._(this.fieldCipher);

  /// AES-256-GCM field encryption keyed by [key] (32 bytes). The key never
  /// leaves this object — handed only to the kernel's field cipher.
  static EncryptionConfig aesGcm256({required Uint8List key}) =>
      EncryptionConfig._(AesGcmFieldCipher(key));

  /// The field cipher the kernel uses for encrypted fields.
  final FieldCipher fieldCipher;
}

/// {@template localpocket.bootstrap_options}
/// Remote-runtime bootstrap: where the worker script and SQLite WebAssembly
/// assets live, and how long a round-trip may take before it fails.
/// {@endtemplate}
final class BootstrapOptions {
  /// {@macro localpocket.bootstrap_options}
  const BootstrapOptions({
    this.workerAssetPath,
    this.wasmAssetPath,
    this.requestTimeout = const Duration(seconds: 30),
  });

  /// Asset path of the bundled database worker script.
  final String? workerAssetPath;

  /// Asset path of the SQLite WebAssembly module.
  final String? wasmAssetPath;

  /// Wall-clock bound for one request crossing the runtime boundary.
  final Duration requestTimeout;
}
