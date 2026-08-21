import 'package:localpocket/src/core/query/search_builder/search_builder.dart';
import 'package:localpocket/src/core/schema.dart';
import 'package:localpocket/src/web/facade/search/web_search_builder.dart';
import 'package:localpocket/src/web/protocol.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import 'support/fake_facade_host.dart';

void main() {
  late FakeFacadeHost fake;
  final ftsSchema = widgetsSchema(fts: FtsSpec(['name']));

  setUp(() {
    fake = FakeFacadeHost({'widgets': ftsSchema});
  });

  test('an empty or whitespace-only term returns const [] without sending',
      () async {
    for (final term in <String>['', '   ', '\t\n']) {
      fake.sent.clear();
      final results = await WebSearchBuilder(fake, ftsSchema, term).fetch();
      expect(results, const <SearchResult>[]);
      expect(fake.sent, isEmpty,
          reason: 'no plan may be sent for a blank search term');
    }
  });

  test('a non-blank term compiles via the core and sends compiled_query',
      () async {
    fake.responses[WireOp.compiledQuery] = <String, Object?>{
      'results': [
        {'id': 'a', 'score': 1},
        {'id': 'b', 'score': 2.5},
      ],
    };
    final results =
        await WebSearchBuilder(fake, ftsSchema, 'engines').limit(10).fetch();

    final (op, args) = fake.sent.single;
    expect(op, WireOp.compiledQuery);
    expect(args['operation'], 'search');
    expect(args['store'], 'widgets');
    expect(args['sql'], contains('MATCH ?'));

    expect(results, hasLength(2));
    expect(results[0], const SearchResult(id: 'a', score: 1.0),
        reason: 'an int score must be coerced to double');
    expect(results[1], const SearchResult(id: 'b', score: 2.5));
  });

  test('missing or empty results decode to an empty list', () async {
    fake.responses[WireOp.compiledQuery] = {'results': null};
    final nullResults =
        await WebSearchBuilder(fake, ftsSchema, 'engines').limit(5).fetch();
    expect(nullResults, isEmpty);

    fake.responses[WireOp.compiledQuery] = {'results': <Object?>[]};
    final emptyResults =
        await WebSearchBuilder(fake, ftsSchema, 'engines').limit(5).fetch();
    expect(emptyResults, isEmpty);
  });
}
