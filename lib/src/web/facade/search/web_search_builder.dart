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
  final WebFacadeHost _pocket;
  final CollectionSchema schema;
  @override
  final String term;
  final SearchBuilder _core;

  WebSearchBuilder(this._pocket, this.schema, this.term)
      : _core = SearchBuilder.compileOnly(schema, term);

  @override
  WebFacadeHost get pocket => _pocket;

  @override
  SearchBuilder get searchCore => _core;
}
