/// Part of `local_pocket.dart` — the kernel context.
///
/// The shared dependency set every kernel service receives (destination:
/// `src/kernel/kernel_context.dart`). `KernelContext` carries the database
/// executor, the compiled store tables, the clock, capabilities, the change
/// publisher, and the outbox/op-queue/file ports. Services depend on THIS —
/// never on the concrete database facade. Native and the web worker construct
/// it identically through `KernelDatabase.open`; the worker supplies its
/// WASM/OPFS adapters below the same ports.
part of 'local_pocket.dart';

/// The shared dependency set every kernel service receives.
final class KernelContext {
  /// Internal: constructed by [KernelDatabase].
  KernelContext({
    required this.database,
    required this.db,
    required this.capabilities,
    required this.writeQueue,
    required this.perf,
    required this.maxDocBytes,
    required this.destructiveBackup,
    required this.now,
    required this.groupCommitWindow,
    this.testHooks,
    this.blobStore,
    this.fieldCipher,
    this.cryptoProvider,
  });

  /// The owning kernel database. Services should prefer the narrow fields
  /// below; this reference exists for the legacy raw/typed migration clients
  /// (Collection/Tx) until those clients are retired.
  final KernelDatabase database;

  /// The SQLite database executor (platform-supplied port).
  final Database db;

  /// Capabilities detected for the active SQLite connection.
  final SqliteCapabilities capabilities;

  /// Serializes all operations that use the owned connection.
  final WriteQueue writeQueue;

  /// Performance counters.
  final PerfCounters perf;

  /// Maximum canonical document size accepted by local writes.
  final int maxDocBytes;

  /// Whether destructive migrations may create their backup copy.
  final bool destructiveBackup;

  /// Injectable clock (epoch ms) for persistence bookkeeping.
  final int Function() now;

  /// Optional test-only crash and tracing hooks.
  final TestHooks? testHooks;

  /// Blob store used by the files port, when configured.
  final BlobStore? blobStore;

  /// Default field cipher, when configured.
  final FieldCipher? fieldCipher;

  /// Per-field cipher provider, when configured.
  final CryptoProvider? cryptoProvider;

  /// Coalescing window for group commit (zero = end-of-turn only).
  final Duration groupCommitWindow;

  /// The compiled per-store tables (schema registry).
  Map<String, StoreTable> get tables => database.tablesForKernel;

  /// The change publisher (post-commit invalidation + record events).
  ChangeBus get changeBus => database.changeBus;

  /// Durable record-state synchronization queue.
  Outbox get outbox => database.outbox;

  /// Durable queue for effects such as file uploads and removals.
  OpQueue get opQueue => database.opQueue;

  /// Conflict inspection and resolution port.
  Conflicts get conflicts => database.conflicts;

  /// File attachment and blob lifecycle port.
  LocalPocketFiles get files => database.files;

  /// The transaction coordinator (durability, group commit, read txs).
  TransactionCoordinator get transactions => database.transactionCoordinator;

  /// The kernel mutation owner.
  MutationService get mutations => database.mutations;

  /// The kernel read owner.
  ReadService get reads => database.reads;

  /// Executes SQL, notifying the test hooks observer.
  Future<void> traceExecute(String sql, [List<Object?>? arguments]) =>
      database.traceExecute(sql, arguments);

  /// Runs a raw query, notifying the test hooks observer.
  Future<List<Map<String, Object?>>> traceQuery(String sql,
          [List<Object?>? arguments]) =>
      database.traceQuery(sql, arguments);

  /// Throws when a handle-level operation is attempted inside a transaction.
  void guardOutsideTx() => database.guardOutsideTxForKernel();
}
