import 'package:localpocket/src/core/query/search_builder/search_builder.dart';
import 'package:localpocket/src/core/query/search_builder/search_forwarder.dart';
import 'package:localpocket/src/core/schema.dart';
import 'package:localpocket/src/web/facade/facade_host.dart';

import 'web_search_forwarder.dart';

/// Main-thread search query builder.
class WebSearchBuilder
    with
        SearchForwarder<WebSearchBuilder>,
        WebCompiledSearchForwarder<WebSearchBuilder> {
  /// Creates a web search builder bound to [pocket], [schema], and [term].
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
