import 'package:localpocket/src/contract/contract.dart';
import 'package:localpocket/src/core/query/search_builder/search_builder.dart';
import 'package:localpocket/src/core/query/search_builder/search_forwarder.dart';
import 'package:localpocket/src/runtime/remote_runtime_client.dart';
import 'package:localpocket/src/web/facade/facade_host.dart';

/// Mixin implementing search execution for web search builders by sending a
/// typed search request through the shared contract runtime. The kernel owns
/// term normalization, compilation, and ranking.
mixin WebContractSearchForwarder<T extends Object> on SearchForwarder<T> {
  /// WebFacadeHost instance connected to the web worker.
  WebFacadeHost get pocket;

  /// Transaction session the search participates in, or null for the root
  /// path. The session id is kernel-minted (string).
  String? get session => null;

  /// The search term.
  String get term;

  RemoteRuntimeClient get _runtime => pocket.contractRuntime;

  /// Executes the FTS search query and returns ranked results.
  Future<List<SearchResult>> fetch() async {
    if (term.trim().isEmpty) return const [];
    final res = await _runtime.send(SearchRequest(
      store: searchCore.store,
      spec: SearchSpecData(
        term: term,
        limit: searchCore.limitValue,
        all: searchCore.allMode,
        includeArchived: searchCore.includeArchivedFlag,
        includeHidden: searchCore.includeHiddenFlag,
      ),
      session: session,
    ));
    return [
      for (final h in res.hits) SearchResult(id: h.id, score: h.score),
    ];
  }
}
