import 'package:localpocket/src/kernel/query/search_builder/search_builder.dart';
import 'package:localpocket/src/kernel/query/search_builder/search_forwarder.dart';
import 'package:localpocket/src/kernel/schema.dart';
import 'package:localpocket/src/web/facade/facade_host.dart';

import 'web_contract_forwarder.dart';

/// {@template localpocket.web_search_builder}
/// Main-thread search query builder. The core [SearchBuilder] holds the
/// structured search state; the facade lowers it into a serializable spec
/// and the kernel compiles it.
/// {@endtemplate}
class WebSearchBuilder
    with
        SearchForwarder<WebSearchBuilder>,
        WebContractSearchForwarder<WebSearchBuilder> {
  /// Creates a web search builder bound to [pocket], [schema], and [term].
  ///
  /// {@macro localpocket.web_search_builder}
  WebSearchBuilder(this._pocket, this.schema, this.term)
      : _core = SearchBuilder.compileOnly(schema, term);

  final WebFacadeHost _pocket;

  /// Schema backing this search builder.
  final CollectionSchema<Object?> schema;
  @override
  final String term;
  final SearchBuilder _core;

  @override
  WebFacadeHost get pocket => _pocket;

  @override
  SearchBuilder get searchCore => _core;
}
