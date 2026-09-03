/// The kernel context: the shared dependency set every kernel service
/// receives. Services depend on this, never on the concrete facade; native
/// and web construct it identically.
///
/// This is a real library (not a hub part) precisely so that promoted
/// services can import their explicit dependency set instead of inheriting
/// the hub's whole private surface.
library;

import 'capabilities.dart' show SqliteCapabilities;
import 'change_bus.dart' show ChangeBus;
import 'cipher.dart' show CryptoProvider, FieldCipher;
import 'database_adapter.dart' show Database;
import 'execution_context.dart' show ExecutionContext;
import 'file_service.dart' show LocalPocketFiles;
import 'files/blob_store.dart' show BlobStore;
import 'local_pocket.dart' show KernelDatabase, StoreTable, TestHooks;
import 'mutation_service.dart' show MutationService;
import 'perf_counters.dart' show PerfCounters;
import 'read_service.dart' show ReadService;
import 'sync/conflicts.dart' show Conflicts;
import 'sync/op_queue.dart' show OpQueue;
import 'sync/outbox.dart' show Outbox;
import 'transaction_coordinator.dart' show TransactionCoordinator;
import 'write_queue.dart' show WriteQueue;

/// How long an interactive transaction session may sit without any
/// session-scoped command before the kernel force-rolls it back. Reads and
/// writes share the write queue, so an abandoned session would otherwise
/// hold the sole queue slot forever and wedge the whole database.
const Duration defaultTxSessionTtl = Duration(minutes: 5);

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
    this.txSessionTtl = defaultTxSessionTtl,
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

  /// The root execution context: every outer-database operation runs through
  /// this explicit context — there is no executor fallback anywhere in the
  /// kernel (plan Rule 5).
  late final ExecutionContext executionContext = ExecutionContext.root(db);

  /// Capabilities detected for the active SQLite connection.
  final SqliteCapabilities capabilities;

  /// Serializes WRITE-side operations that use the owned connection:
  /// mutations, transaction sessions, and maintenance. Point READS (a
  /// `get`/`query` outside a transaction) run directly on the connection and
  /// are deliberately NOT queued here — on the single shared connection they
  /// may observe uncommitted rows from an in-progress commit group within
  /// this isolate (the write-queue + direct-read-snapshot model). Reads
  /// issued through the transaction coordinator's `read()` ARE queued.
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

  /// Idle deadline for interactive transaction sessions (see
  /// [defaultTxSessionTtl]); a session silent longer than this is
  /// force-rolled back so the write queue can never wedge permanently.
  final Duration txSessionTtl;

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
