/// The kernel read service: a wrapper around the compiled-plan runner
/// (`executeCompiledQuery`) and the one query compiler. Native and the web
/// worker reach the SAME read path through this service; neither side owns
/// SQL execution semantics.
library;

import 'compiled_query_runner.dart';
import 'kernel_context.dart';
import 'query_plan.dart';

/// {@template localpocket.page}
/// The result of a paginated query.
///
/// Cursors are bidirectional and carry the same payload: [Page.nextCursor]
/// continues forward ([QueryBuilder.keysetAfter]) and [Page.prevCursor] backward
/// ([QueryBuilder.keysetBefore]). They are `null` when there is no adjacent
/// page ([Page.hasNext]/[Page.hasPrev] false).
/// {@endtemplate}
class Page {
  /// Creates a query page.
  ///
  /// {@macro localpocket.page}
  const Page({
    required this.items,
    required this.hasNext,
    this.nextCursor,
    this.prevCursor,
    this.hasPrev = false,
  });

  /// Records in this page, in the requested order.
  final List<Map<String, Object?>> items;

  /// Cursor for the next keyset page, or `null` when this is the last page.
  final String? nextCursor;

  /// Cursor for the previous keyset page, or `null` when no row precedes
  /// this window.
  final String? prevCursor;

  /// Whether a row was observed after this window (limit+1 check forward,
  /// one-row probe on backward fetches).
  final bool hasNext;

  /// Whether a row was observed before this window: exact for backward
  /// fetches, a mint-time fact for forward continuations.
  final bool hasPrev;
}

/// {@template localpocket.read_service}
/// The kernel read owner: query execution and result shaping.
/// {@endtemplate}
class ReadService {
  /// Internal: constructed by [KernelDatabase].
  ///
  /// {@macro localpocket.read_service}
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
