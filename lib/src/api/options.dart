/// Opening options for the public facade: where the database lives, which
/// stores it holds, how it is encrypted, and how the remote runtime (web
/// worker) is bootstrapped.
///
/// Everything here is plain Dart: paths are strings and assets are asset
/// paths, so the same options compile on mobile, desktop, and web.
library;

import 'dart:typed_data';

import '../kernel/cipher.dart';
import '../kernel/database_adapter.dart' show Database;
import '../kernel/kernel_context.dart' show defaultTxSessionTtl;
import '../kernel/files/blob_store.dart' show BlobStore;
import '../kernel/page_callbacks.dart' show StorePageCallbacks;
import '../kernel/sync/sync_backend.dart' show SyncBackendFactory;
import '../schema/store_def.dart';

/// Re-exported so callers configuring durability can name it from the same
/// import as the rest of the facade vocabulary.
export '../kernel/transaction_coordinator.dart' show DurabilityClass;

/// {@template localpocket.local_pocket_options}
/// Everything [LocalPocket.open] needs to bring up a database.
/// {@endtemplate}
final class LocalPocketOptions {
  /// {@macro localpocket.local_pocket_options}
  const LocalPocketOptions({
    required this.path,
    this.stores = const [],
    this.encryption,
    this.databaseEncryption,
    this.nativeDatabaseFactory,
    this.bootstrap = const BootstrapOptions(),
    this.maxDocumentBytes = 1900000,
    this.now,
    this.clockOffsetMs = 0,
    this.groupCommitWindow = Duration.zero,
    this.txSessionTtl = defaultTxSessionTtl,
    this.syncBackendFactory,
    this.blobStore,
    this.pageCallbacks,
  });

  /// Database file path (`:memory:` opens an in-memory database).
  final String path;

  /// The store definitions to create/verify at open time. One canonical
  /// instance per store — declaring the same store name twice, or rebinding
  /// a name to a different definition instance, is rejected.
  final List<StoreDef<Object?>> stores;

  /// Field-level encryption configuration, or `null` for plaintext storage.
  final EncryptionConfig? encryption;

  /// Whole-database (file-level) encryption configuration, or `null` for a
  /// plaintext database file.
  ///
  /// LocalPocket applies the key uniformly on every platform: it executes
  /// the engine's `PRAGMA key` before anything else touches the file.
  ///
  /// NATIVE-ONLY: requires [nativeDatabaseFactory] to open the cipher-enabled
  /// engine (a SQLCipher or SQLite3MultipleCiphers build — the config only
  /// CARRIES the key; LocalPocket applies it and verifies the engine
  /// reports a codec via the cipher probes). `engineCipher` names the
  /// engine flavor (`'sqlcipher'`, `'sqlite3mc'`) for diagnostics.
  ///
  /// WEB: rejected with a typed error — sqlite3_web's OPFS VFS does not
  /// support cipher engines. Use [encryption] (field-level) on web.
  final DatabaseEncryptionConfig? databaseEncryption;

  /// Builds the SQLite engine this database runs on (NATIVE ONLY).
  ///
  /// The default builds a plain (unencrypted) SQLite database from the
  /// bundled `package:sqlite3` binary. Supply a factory that opens the
  /// file through an engine binary compiled WITH whole-database encryption
  /// (a SQLCipher or SQLite3MultipleCiphers build of `package:sqlite3`,
  /// wired per its build-hook documentation) and set
  /// [databaseEncryption]: LocalPocket applies the key and verifies the
  /// engine's cipher codec itself. The web open rejects a supplied factory
  /// with a typed error — engine code cannot cross the worker boundary and
  /// web whole-file encryption is not supported (OPFS VFS limitation).
  final Database Function(String path)? nativeDatabaseFactory;

  /// Remote-runtime bootstrap settings (web worker assets). Ignored on
  /// native targets, where the runtime runs in-process.
  final BootstrapOptions bootstrap;

  /// Upper bound for one persisted document, in bytes.
  final int maxDocumentBytes;

  /// Injectable wall clock (tests). `null` uses the system clock.
  final DateTime Function()? now;

  /// Fixed millisecond offset applied on top of the system clock for all
  /// persistence bookkeeping (outbox timestamps, conflicts, compaction
  /// cutoffs), or `0` for the unshifted system clock.
  ///
  /// DATA, not code: unlike [now] (a closure that cannot cross the web
  /// worker boundary and is rejected on web), this plain integer crosses
  /// the open envelope on every platform — the worker applies it to its
  /// system clock. Use it for deterministic-clock tests and for far-future
  /// or far-past fixtures that must behave identically on web and native.
  final int clockOffsetMs;

  /// Coalescing window for group commit: when positive, mutations from
  /// separate turns may share one SQLite transaction (one fsync) if they
  /// arrive within the window; zero (the default) commits at end-of-turn
  /// only. See the engine docs for the read-your-writes guarantee.
  final Duration groupCommitWindow;

  /// Idle deadline for interactive transaction sessions: a session silent
  /// longer than this is force-rolled back so it cannot wedge the single
  /// write queue slot forever.
  final Duration txSessionTtl;

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

  /// Per-store page callbacks that executable schema features resolve to on
  /// the worker runtime, keyed by store name.
  ///
  /// Conflict resolvers, validators, document migrations, and backfill
  /// transforms are code and cannot be serialized to the database worker;
  /// structurally-representable resolvers (the closure-free built-ins) run
  /// in the worker as-is, everything else is invoked on the page through
  /// the callback channel.
  ///
  /// Optional: every executable member not registered here is
  /// auto-collected under a deterministic id (`'<store>:collectionResolver'`,
  /// `'<store>:field:<path>'`, `'<store>:validator'`,
  /// `'<store>:documentMigration:<version>'`, `'<store>:transform:<toVersion>'`)
  /// and served automatically; explicit entries win on id conflict. Each
  /// entry must still cover exactly what the store's definition declares —
  /// a mismatch fails the open with a typed error. Natively this map is
  /// unused: hooks execute in-process.
  final Map<String, StorePageCallbacks>? pageCallbacks;
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

/// {@template localpocket.database_encryption_config}
/// Whole-database (file-level) at-rest encryption: the key the database
/// ENGINE applies (SQLCipher / SQLite3MultipleCiphers), NOT a Dart-side
/// encryptor. Field-level secrets stay in [EncryptionConfig].
///
/// NATIVE-ONLY: honored with [LocalPocketOptions.nativeDatabaseFactory] and
/// rejected on web (the OPFS VFS does not support cipher engines).
/// {@endtemplate}
final class DatabaseEncryptionConfig {
  /// {@macro localpocket.database_encryption_config}
  const DatabaseEncryptionConfig({
    required this.key,
    this.engineCipher = 'sqlcipher',
  });

  /// The passphrase/key the engine's `PRAGMA key` applies. Kept as a plain
  /// string: SQLCipher/MC accept text passphrases (and raw hex with
  /// `x'...'` prefixes handled by the caller's engine convention).
  final String key;

  /// Which engine flavor to configure:
  /// - `'sqlcipher'` — standard SQLCipher `PRAGMA key = '<key>'`;
  /// - `'sqlite3mc'` — SQLite3MultipleCiphers `PRAGMA key = '<key>'`
  ///   (MC's default cipher/chacha settings).
  final String engineCipher;
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
    this.spawnTimeout = const Duration(seconds: 60),
  });

  /// Asset path of the bundled database worker script.
  final String? workerAssetPath;

  /// Asset path of the SQLite WebAssembly module.
  final String? wasmAssetPath;

  /// Wall-clock bound for one request crossing the runtime boundary.
  final Duration requestTimeout;

  /// Wall-clock bound for spawning the database worker and completing its
  /// connect handshake (web only). A spawn wedged past this bound fails the
  /// open with a `DatabaseWorkerTimeoutException` instead of hanging the
  /// caller forever. Zero disables the bound.
  final Duration spawnTimeout;
}
