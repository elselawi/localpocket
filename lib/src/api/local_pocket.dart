/// The public database facade: one entry point over the runtime contract.
///
/// Opening compiles the store definitions into schemas, brings up the
/// kernel, and wraps its command handler in a runtime client. Every call on
/// the facade and everything reachable from it is one typed contract command
/// — the same commands a remote runtime would carry, byte for byte.
library;

import '../kernel/local_pocket.dart' as kernel
    show DurabilityClass, KernelDatabase;
import '../contract/contract.dart';
import '../runtime/runtime_client.dart';
import '../schema/store_def.dart';
import 'events.dart';
import 'open_platform.dart';
import 'options.dart';
import 'store.dart';
import 'sync.dart';
import 'transaction.dart';

/// {@template localpocket.local_pocket}
/// A local-first database with PocketBase sync.
///
/// Open one with [LocalPocket.open], obtain typed stores with
/// `db.store(Tasks.store)`, run interactive transactions with
/// [transaction] and [read], and listen for committed facts on [changes].
/// {@endtemplate}
final class LocalPocket {
  /// Binds the facade to an already-running runtime. Library-internal seam:
  /// the platform openers (`open_native.dart`, `open_web.dart`) construct the
  /// facade once their runtime is up — on web the kernel lives behind the
  /// worker transport, so nothing is opened in-process.
  ///
  /// [onClose] runs at [close] time after the close command, letting a
  /// platform opener tear down its own resources — on web this disposes the
  /// worker connection so the OPFS file handle is flushed (the sqlite3_web
  /// `Database.dispose()`), without which committed blob data can be lost on
  /// some browsers when the page tears down.
  LocalPocket.internal(this._runtime, {Future<void> Function()? onClose})
      : _onClose = onClose;

  /// Opens a database on the current platform: the direct in-process runtime
  /// on native targets, the typed contract over the dedicated worker on web.
  static Future<LocalPocket> open(LocalPocketOptions options) =>
      openPlatform(options);

  /// Opens a database over a caller-supplied runtime — the seam that lets
  /// the same facade run against the wire round-trip runtime, and the
  /// conformance harness prove every facade body over the worker path.
  static Future<LocalPocket> openWith(
    LocalPocketOptions options,
    RuntimeClient Function(CommandHandler handler) createRuntime,
  ) async {
    final schemas = [
      for (final def in options.stores) def.compiledSchema,
    ];
    final db = await kernel.KernelDatabase.open(
      path: options.path,
      stores: schemas,
      fieldCipher: options.encryption?.fieldCipher,
      maxDocBytes: options.maxDocumentBytes,
      now: options.now == null
          ? null
          : () => options.now!().millisecondsSinceEpoch,
      wasmAssetPath: options.bootstrap.wasmAssetPath,
      workerAssetPath: options.bootstrap.workerAssetPath,
      syncBackendFactory: options.syncBackendFactory,
      blobStore: options.blobStore,
    );
    try {
      return LocalPocket.internal(createRuntime(db.commands));
    } catch (_) {
      await db.close();
      rethrow;
    }
  }

  final RuntimeClient _runtime;
  final Future<void> Function()? _onClose;
  bool _closed = false;

  /// The engine's capabilities as observed at open time.
  Future<EngineCapabilities> get capabilities async {
    _ensureOpen();
    final result = await _send(const CapabilitiesRequest());
    return EngineCapabilities(
      sqliteVersion: result.sqliteVersion,
      hasStrict: result.hasStrict,
      walSupported: result.walSupported,
      hasFts5: result.hasFts5,
      isWeb: result.isWeb,
      storage: result.storage,
      durable: result.durable,
      journal: result.journal,
    );
  }

  /// A typed view over one store.
  Store<S> store<S extends StoreDef<S>>(S def) => Store<S>.internal(
        runtime: _runtime,
        def: def,
        ensureOpen: _ensureOpen,
      );

  /// Runs [action] inside one write transaction and commits when it
  /// completes.
  ///
  /// The returned future resolves only after the commit has succeeded, so
  /// everything awaited inside the body — and every event the body's writes
  /// cause — is ordered before it. A body that throws (or a commit that
  /// fails) rolls the session back and rethrows the original error.
  ///
  /// [durability] trades commit latency for power-loss safety: [normal]
  /// relies on the WAL default, [full] flushes on every commit.
  Future<T> transaction<T>(
    Future<T> Function(Transaction tx) action, {
    kernel.DurabilityClass durability = kernel.DurabilityClass.normal,
  }) =>
      _runSession(
        action,
        TransactionBeginRequest(
          readOnly: false,
          durability: durability == kernel.DurabilityClass.full
              ? TransactionDurability.full
              : TransactionDurability.normal,
        ),
      );

  /// Runs [action] inside one read-only transaction. Writes through the
  /// session's stores fail with [ReadOnlyTxError].
  Future<T> read<T>(Future<T> Function(Transaction tx) action) =>
      _runSession(action, const TransactionBeginRequest(readOnly: true));

  /// Committed changes across every store: one notification per committed
  /// record change, carrying the record payloads (old/new state, origin,
  /// action, and touched fields) exactly as the contract's committed-change
  /// event delivers them on every runtime.
  Stream<ChangeNotification> get changes => _runtime.events
      .where((event) => event is CommittedChange)
      .cast<CommittedChange>()
      .map((event) => ChangeNotification(
            storeName: event.store,
            id: event.id,
            origin: event.origin,
            action: event.action,
            oldRecord:
                event.oldRecord == null ? null : Map.of(event.oldRecord!),
            newRecord:
                event.newRecord == null ? null : Map.of(event.newRecord!),
            changedFields: Set.of(event.changedFields),
          ));

  /// Attaches a PocketBase sync host to this database.
  ///
  /// The host drives the shared contract runtime: [PocketBaseSync.start]
  /// starts the kernel-owned sync engine and its realtime connection. The
  /// [PocketBaseSyncOptions.tokenProvider] stays caller-owned and its token
  /// crosses only through the sync start and auth-update commands. The same
  /// host behaves identically on native and web — sync start owns realtime,
  /// so there is no separate realtime command on this surface.
  ///
  /// One database owns ONE sync host: the first call creates it, later calls
  /// return the same host (a second independent host would race its own
  /// start/stop state against the shared runtime). Attaching with different
  /// options than the existing host's throws a [StateError].
  PocketBaseSync attachPocketBaseSync(PocketBaseSyncOptions options) {
    _ensureOpen();
    final existing = _syncHost;
    if (existing != null) {
      if (existing.options.baseUrl != options.baseUrl ||
          existing.options.identity != options.identity) {
        throw StateError(
            'This database already has a PocketBase sync host attached '
            '(${existing.options.baseUrl} / ${existing.options.identity ?? '<anonymous>'}). '
            'One database owns one sync host; close it before attaching '
            'another.');
      }
      return existing;
    }
    return _syncHost = PocketBaseSync.internal(_runtime, options);
  }

  PocketBaseSync? _syncHost;

  /// Runs the database's query planner across its indexes.
  Future<void> analyze([StoreDef<Object?>? store]) =>
      _sendOk(AnalyzeRequest(store: store?.name));

  /// Checkpoints the write-ahead log.
  Future<void> walCheckpoint() => _sendOk(const WalCheckpointRequest());

  /// Rebuilds the database file to reclaim space.
  Future<void> vacuum() => _sendOk(const VacuumRequest());

  /// Drops pushed sync-intent entries that no longer need retrying, and
  /// returns how many were removed.
  Future<int> pruneOutbox() async {
    final result = await _send(const PruneOutboxRequest());
    return result.removed;
  }

  /// Drops superseded history rows of [store] older than [olderThan], and
  /// returns how many were removed.
  Future<int> compact(
    StoreDef<Object?> store, {
    Duration olderThan = Duration.zero,
  }) async {
    final result = await _send(CompactRequest(
      store: store.name,
      olderThanMs: olderThan.inMilliseconds,
    ));
    return result.removed;
  }

  /// Closes the database. Subsequent sends fail with a typed error; live
  /// event and watch streams end. The platform opener's [LocalPocket.internal
  /// onClose] hook (web: dispose the worker connection so OPFS is flushed)
  /// runs after the close command.
  Future<void> close() async {
    if (_closed) return;
    try {
      await _send(const CloseRequest());
    } finally {
      _closed = true;
      final onClose = _onClose;
      if (onClose != null) {
        await onClose();
      }
      await _runtime.close();
    }
  }

  // -- internals ------------------------------------------------------------

  Future<T> _runSession<T>(
    Future<T> Function(Transaction tx) action,
    TransactionBeginRequest begin,
  ) async {
    final begun = await _send(begin);
    final tx = Transaction.internal(
      runtime: _runtime,
      session: begun.session,
      ensureOpen: _ensureOpen,
    );
    try {
      final value = await action(tx);
      await _send(TransactionCommitRequest(session: begun.session));
      return value;
    } catch (error) {
      try {
        await _send(TransactionRollbackRequest(session: begun.session));
      } catch (_) {
        // The original error is the one worth surfacing; the session is
        // already gone kernel-side.
      }
      rethrow;
    }
  }

  Future<void> _sendOk(Request<OkResult> request) {
    _ensureOpen();
    return _runtime.send(request);
  }

  Future<R> _send<R extends Result>(Request<R> request) {
    _ensureOpen();
    return _runtime.send(request);
  }

  void _ensureOpen() {
    if (_closed) {
      throw StateError('LocalPocket has been closed.');
    }
  }
}

/// {@template localpocket.engine_capabilities}
/// What the underlying engine supports, as observed at open time.
///
/// Every value is the ACTIVE runtime's honest report (plan Rule 8): on web
/// the worker's open handshake is authoritative, and the page never guesses.
/// {@endtemplate}
final class EngineCapabilities {
  const EngineCapabilities({
    required this.sqliteVersion,
    required this.hasStrict,
    required this.walSupported,
    required this.hasFts5,
    required this.isWeb,
    this.storage = 'file',
    this.durable = true,
    this.journal = 'unknown',
  });

  /// The engine's SQLite version string.
  final String sqliteVersion;

  /// Whether STRICT tables are supported.
  final bool hasStrict;

  /// Whether the write-ahead log is available.
  final bool walSupported;

  /// Whether FTS5 is available.
  final bool hasFts5;

  /// Whether the kernel runs in a browser worker.
  final bool isWeb;

  /// Where the runtime keeps the database: `'file'` natively, `'opfs'` on
  /// web.
  final String storage;

  /// Whether attachment bytes survive a restart. `false` when the blob store
  /// degrades to volatile memory (e.g. OPFS unavailable and the volatile
  /// fallback accepted).
  final bool durable;

  /// The live journal mode reported by the engine (e.g. `'wal'`).
  final String journal;

  @override
  String toString() =>
      'EngineCapabilities($sqliteVersion, fts5: $hasFts5, storage: $storage, '
      'durable: $durable, journal: $journal)';
}
