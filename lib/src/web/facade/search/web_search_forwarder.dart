import 'package:localpocket/src/core/query/search_builder/search_builder.dart';
import 'package:localpocket/src/core/query/search_builder/search_forwarder.dart';
import 'package:localpocket/src/web/facade.dart';
import 'package:localpocket/src/web/facade/send_plan.dart';

/// Mixin implementing search execution for web search query builders
/// by sending engine-compiled search plans to the worker.
mixin WebCompiledSearchForwarder<T extends Object> on SearchForwarder<T> {
  /// LocalPocket instance connected to the web worker.
  LocalPocket get pocket;

  /// Optional transaction session identifier.
  int? get sessionId => null;

  /// The search term.
  String get term;

  /// Executes the FTS search query and returns ranked results.
  Future<List<SearchResult>> fetch() async {
    if (term.trim().isEmpty) return const [];
    final res = await sendCompiledPlan(pocket, searchCore.compilePlan(),
        sessionId: sessionId);
    return ((res['results'] as List?) ?? const []).map((raw) {
      final row = (raw as Map).map((k, v) => MapEntry(k.toString(), v));
      return SearchResult(
        id: row['id'] as String,
        score: (row['score'] as num).toDouble(),
      );
    }).toList();
  }
}
