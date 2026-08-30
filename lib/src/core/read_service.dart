/// Part of `local_pocket.dart` — the read service (Phase 2 of the final
/// refactoring plan, plan §12 step 7).
///
/// A wrapper around the existing compiled-plan runner (`executeCompiledQuery`)
/// and, from Phase 6, the one query compiler. Native and the web worker reach
/// the SAME read path through this service; neither side owns SQL execution
/// semantics. Destination file: `src/kernel/read_service.dart` (Phase 10).
part of 'local_pocket.dart';

/// The kernel read owner: query execution and result shaping.
class ReadService {
  /// Internal: constructed by [KernelDatabase].
  ReadService(this.context);

  /// The shared kernel dependencies.
  final KernelContext context;

  /// Executes a validated compiled [plan] and shapes the named result
  /// envelope exactly as the web worker does. This is the single execution
  /// path for engine-compiled query plans — the web worker and the VM parity
  /// tests both go through here, so plan execution cannot drift between
  /// platforms. [run] executes raw SQL with bound parameters (the outer
  /// database, or a transaction session's executor).
  Future<Map<String, Object?>> executeCompiled(
    QueryPlan plan, {
    required Future<List<Map<String, Object?>>> Function(
            String sql, List<Object?> params)
        run,
    int? pageLimit,
  }) =>
      executeCompiledQuery(context.database, run, plan, pageLimit: pageLimit);
}
