import 'database_adapter.dart';

/// An explicit execution context.
///
/// Every operation that can run inside a transaction receives one. A context
/// is either the ROOT context (operations on the outer database executor) or a
/// TRANSACTION context (operations bound to the transaction's executor). The
/// outer executor can never be selected by an accidental fallback: a
/// transaction context always carries its own executor.
final class ExecutionContext {
  const ExecutionContext.root()
      : kind = ExecutionContextKind.root,
        executor = null,
        readOnly = false;

  const ExecutionContext.transaction({
    required this.executor,
    required this.readOnly,
  }) : kind = ExecutionContextKind.transaction;

  /// The kind of this context.
  final ExecutionContextKind kind;

  /// The executor this context's operations run through. Null only for the
  /// root context (the service then uses the outer database executor).
  final DatabaseExecutor? executor;

  /// Whether mutations are rejected in this context.
  final bool readOnly;

  /// Whether this is the root (outer-database) context.
  bool get isRoot => kind == ExecutionContextKind.root;

  /// Whether this context is bound to a transaction.
  bool get isTransaction => kind == ExecutionContextKind.transaction;

  /// The executor to run queries through: the transaction executor when
  /// bound, otherwise null (the caller falls back to the outer database).
  DatabaseExecutor? get queryExecutor => executor;
}

/// The two context kinds.
enum ExecutionContextKind { root, transaction }
