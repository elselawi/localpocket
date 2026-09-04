/// The public database facade: one entry point over the runtime contract.
///
/// Opening compiles the store definitions into schemas, brings up the
/// kernel, and wraps its command handler in a runtime client. Every call on
/// the facade and everything reachable from it is one typed contract command
/// — the same commands a remote runtime would carry, byte for byte.
library;

import '../kernel/local_pocket.dart' as kernel show KernelDatabase;
import '../kernel/transaction_coordinator.dart' as kernel show DurabilityClass;
import '../kernel/database_adapter.dart' show Database;
import '../kernel/ids.dart' show generateRecordId;
import '../contract/contract.dart';
import '../runtime/runtime_client.dart';
import '../schema/store_def.dart';
import 'events.dart';
import 'open_platform.dart';
import 'options.dart';
import 'row.dart';
import 'store.dart';
import 'sync.dart';
import 'transaction.dart';

/// {@template localpocket.local_pocket}
/// {@template localpocket.local_pocket}
/// A local-first database with PocketBase sync.
///
/// Open one with [LocalPocket.open], obtain typed stores with
/// `db.store(Tasks.store)`, run interactive transactions with
/// [transaction] and [read], and listen for committed facts on [changes].
/// {@endtemplate}
/// {@endtemplate}
final class LocalPocket {
  /// Binds the facade to an already-running runtime (library-internal seam:
  /// platform openers construct it once their runtime is up).
  ///
  /// [onClose] runs after the close command so the platform opener can tear
  /// down its own resources — on web it disposes the worker connection to
  /// flush OPFS, without which committed blob data can be lost.
  ///
  /// {@macro localpocket.local_pocket}
  LocalPocket.internal(
    this._runtime, {
    Iterable<StoreDef<Object?>> stores = const [],
    Future<void> Function()? onClose,
  })  : _onClose = onClose,
        _decoders = {
          for (final s in stores)
            s.name: s.accept(
              <T extends StoreDef<T>>(def) => (map) => Row<T>(def, map),
            ),
        };

  /// Mints one client-side record id (PocketBase-compatible, creation-ordered
  /// so id-index inserts stay append-only). The id format is engine-owned;
  /// the facade exposes this seam so writes can carry their id — `put`
  /// assigns one when the caller omits it — without reaching into engine
  /// internals.
  static String newRecordId() => generateRecordId();

  /// Opens a database on the current platform: the direct in-process runtime
  /// on native targets, the typed contract over the dedicated worker on web.
  static Future<LocalPocket> open(LocalPocketOptions options) =>
      openPlatform(options);

  /// Opens a database over a caller-supplied runtime — the seam that lets
  /// the conformance harness prove every facade body over the worker path.
  static Future<LocalPocket> openWith(
    LocalPocketOptions options,
    RuntimeClient Function(CommandHandler handler) createRuntime,
  ) async {
    // Whole-db encryption config is validated, never silently ignored: the
    // key must have an engine (the native factory) to be applied against.
    // Web rejects the whole route up front (see open_web.dart) — this is
    // the native path applying the key.
    if (options.databaseEncryption != null &&
        options.nativeDatabaseFactory == null) {
      throw ValidationException(
          'databaseEncryption requires nativeDatabaseFactory: whole-file '
          'encryption is provided by the engine the factory opens (a '
          'SQLCipher-style build); this config only carries the key that '
          'LocalPocket applies via `PRAGMA key`.');
    }
    final schemas = [
      for (final def in options.stores) def.compiledSchema,
    ];
    // Apply the key to the caller's engine BEFORE the kernel opens anything
    // against it: with a cipher-enabled binary the file is ciphertext until
    // `PRAGMA key` authenticates. The probe is portable across engines:
    // `cipher_version` is SQLCipher's marker, `cipher` (read-back) is
    // SQLite3MultipleCiphers'; a plain engine silently ignores both and
    // returns no rows (the same silent-acceptance hole `PRAGMA key` has).
    final Database? nativeDb =
        options.nativeDatabaseFactory?.call(options.path);
    final dbKey = options.databaseEncryption;
    if (nativeDb != null && dbKey != null) {
      await nativeDb.execute("PRAGMA key = '${_sqlQuoteLiteral(dbKey.key)}'");
      final hasCodec = await nativeDb.rawQuery('PRAGMA cipher_version').then(
                (rows) => rows.isNotEmpty,
                onError: (_) => false,
              ) ||
          await nativeDb.rawQuery('PRAGMA cipher').then(
                (rows) => rows.isNotEmpty,
                onError: (_) => false,
              );
      if (!hasCodec) {
        try {
          await nativeDb.close();
        } catch (_) {}
        throw ValidationException(
            'databaseEncryption was configured but the engine opened by '
            'nativeDatabaseFactory has no cipher codec (PRAGMA '
            'cipher_version returned nothing). Supply a SQLCipher or '
            'SQLite3MultipleCiphers build of the SQLite binary.');
      }
    }
    final db = await kernel.KernelDatabase.open(
      path: options.path,
      database: nativeDb,
      stores: schemas,
      fieldCipher: options.encryption?.fieldCipher,
      maxDocBytes: options.maxDocumentBytes,
      // The injected closure wins; [clockOffsetMs] shifts whichever base
      // clock is in effect (injected or system) so the data-style offset
      // behaves identically on native and on the worker runtime.
      now: _effectiveNow(options),
      syncBackendFactory: options.syncBackendFactory,
      blobStore: options.blobStore,
      groupCommitWindow: options.groupCommitWindow,
      txSessionTtl: options.txSessionTtl,
    );
    try {
      return LocalPocket.internal(
        createRuntime(db.commands),
        stores: options.stores,
      );
    } catch (e, st) {
      try {
        await db.close();
      } catch (_) {
        // Cleanup must never replace the original open error.
      }
      Error.throwWithStackTrace(e, st);
    }
  }

  /// Escapes [value] for a single-quoted SQL string literal.
  static String _sqlQuoteLiteral(String value) => value.replaceAll("'", "''");

  /// The kernel clock for [options]: the injected [LocalPocketOptions.now]
  /// closure when supplied, shifted by [LocalPocketOptions.clockOffsetMs];
  /// null leaves the kernel on its default system clock.
  static int Function()? _effectiveNow(LocalPocketOptions options) {
    final injected = options.now;
    final offset = options.clockOffsetMs;
    if (injected == null && offset == 0) return null;
    return () =>
        (injected?.call() ?? DateTime.now()).millisecondsSinceEpoch + offset;
  }

  final RuntimeClient _runtime;
  final Map<String, Row<dynamic> Function(Map<String, Object?>)> _decoders;
  final Future<void> Function()? _onClose;
  bool _closed = false;
  Future<void>? _closing;

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
  /// completes. The returned future resolves only after the commit succeeds,
  /// so the body and the events it causes are ordered before it; a body
  /// that throws (or a failed commit) rolls back and rethrows.
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
  /// record change, with old/new payloads, origin, action, and touched
  /// fields.
  Stream<DatabaseRecordChange> get changes => _runtime.events
          .where((event) => event is CommittedChange)
          .cast<CommittedChange>()
          .map((event) {
        final decode = _decoders[event.store];
        return DatabaseRecordChange(
          storeName: event.store,
          id: event.id,
          origin: event.origin,
          action: event.action,
          oldRecord:
              event.oldRecord == null ? null : decode?.call(event.oldRecord!),
          newRecord:
              event.newRecord == null ? null : decode?.call(event.newRecord!),
          changedFields: Set.of(event.changedFields),
        );
      });

  /// Attaches a PocketBase sync host to this database.
  ///
  /// The host drives the shared contract runtime: [PocketBaseSync.start]
  /// starts the kernel-owned sync engine and its realtime connection. The
  /// [PocketBaseSyncOptions.tokenProvider] stays caller-owned; its token
  /// crosses only the sync start and auth-update commands. Sync start owns
  /// realtime — there is no separate realtime command on this surface.
  ///
  /// One database owns ONE sync host: the first call creates it, later calls
  /// return the same host, and attaching with different baseUrl/identity
  /// throws a [StateError].
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

  /// Closes the database. Subsequent sends fail with a `StateError`; live
  /// event and watch streams end. The platform opener's onClose hook (web:
  /// flush OPFS via the worker connection) runs after the close command.
  ///
  /// Concurrent calls coalesce: every caller awaits the same in-flight close,
  /// and a repeat after completion returns that same completed future. If the
  /// onClose hook throws, the runtime teardown still runs; the first error is
  /// what surfaces.
  Future<void> close() => _closing ??= _closeOnce();

  Future<void> _closeOnce() async {
    try {
      await _send(const CloseRequest());
    } finally {
      _closed = true;
      try {
        await _onClose?.call();
      } finally {
        await _runtime.close();
      }
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
        // Surface the original error; the session is already gone.
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
/// What the underlying engine supports, as observed at open time — the
/// active runtime's honest report; on web the worker's handshake is
/// authoritative.
/// {@endtemplate}
final class EngineCapabilities {
  /// {@macro localpocket.engine_capabilities}
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

  /// Whether attachment bytes survive a restart; `false` when the blob
  /// store degraded to volatile memory.
  final bool durable;

  /// The live journal mode reported by the engine (e.g. `'wal'`).
  final String journal;

  @override
  String toString() =>
      'EngineCapabilities($sqliteVersion, fts5: $hasFts5, storage: $storage, '
      'durable: $durable, journal: $journal)';
}
