import 'database_adapter.dart';

/// An explicit execution context.
///
/// Every operation that can run inside a transaction receives one. A context
/// is either the ROOT context (operations on the outer database executor) or a
/// TRANSACTION context (operations bound to the transaction's executor). The
/// outer executor can never be selected by an accidental fallback: every
/// context — root or transaction — carries its own executor, and a store
/// obtained from a transaction permanently carries that context (plan Rule 5).
final class ExecutionContext {
  /// Creates the root (outer-database) context.
  const ExecutionContext.root(this.executor)
      : kind = ExecutionContextKind.root,
        readOnly = false;

  /// Creates a context bound to a transaction's executor.
  const ExecutionContext.transaction({
    required this.executor,
    required this.readOnly,
  }) : kind = ExecutionContextKind.transaction;

  /// The kind of this context.
  final ExecutionContextKind kind;

  /// The executor this context's operations run through. Never null: a root
  /// context carries the outer database executor, a transaction context the
  /// transaction's executor.
  final DatabaseExecutor executor;

  /// Whether mutations are rejected in this context.
  final bool readOnly;

  /// Whether this is the root (outer-database) context.
  bool get isRoot => kind == ExecutionContextKind.root;

  /// Whether this context is bound to a transaction.
  bool get isTransaction => kind == ExecutionContextKind.transaction;

  /// The executor to run queries through.
  DatabaseExecutor get queryExecutor => executor;
}

/// The two context kinds.
enum ExecutionContextKind {
  /// Operations on the outer database executor.
  root,

  /// Operations bound to a transaction's executor.
  transaction,
}
