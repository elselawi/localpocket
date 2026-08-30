import 'package:localpocket/src/contract/contract.dart' as contract;
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
          reason: 'no request may be sent for a blank search term');
    }
  });

  test('a non-blank term sends a typed search spec and decodes the hits',
      () async {
    fake.responses[WireOp.contractRequest] = FakeFacadeHost.contractReply(
      const contract.SearchHitsResult([
        contract.SearchHitData(id: 'a', score: 1),
        contract.SearchHitData(id: 'b', score: 2.5),
      ]),
    );
    final results =
        await WebSearchBuilder(fake, ftsSchema, 'engines').limit(10).fetch();

    final (op, args) = fake.sent.single;
    expect(op, WireOp.contractRequest);
    final encoded = args['request']! as Map;
    final req = contract.ContractCodec
        .decodeRequest(encoded.cast<String, Object?>())
        as contract.SearchRequest;
    expect(req.store, 'widgets');
    expect(req.spec.term, 'engines');
    expect(req.spec.limit, 10);

    expect(results, hasLength(2));
    expect(results[0], const SearchResult(id: 'a', score: 1.0),
        reason: 'an int score must be coerced to double');
    expect(results[1], const SearchResult(id: 'b', score: 2.5));
  });

  test('missing or empty hits decode to an empty list', () async {
    fake.responses[WireOp.contractRequest] =
        FakeFacadeHost.contractReply(const contract.SearchHitsResult([]));
    final empty = await WebSearchBuilder(fake, ftsSchema, 'engines')
        .limit(5)
        .fetch();
    expect(empty, isEmpty);
  });

  group('SearchForwarder delegation', () {
    test('all opts out of the result limit in the compiled SQL', () async {
      final builder = WebSearchBuilder(fake, ftsSchema, 'engines')..all();
      final (sql, _) = builder.searchCore.debugCompile();
      expect(sql, isNot(contains('LIMIT')),
          reason: 'all() leaves the compiled search unbounded');
      expect(sql, contains('MATCH ?'));
    });

    test('includeArchived and includeHidden drop their scope flags', () async {
      // A limit is required before the search can compile.
      final archived = WebSearchBuilder(fake, ftsSchema, 'engines')
        ..includeArchived()
        ..limit(5);
      expect(archived.searchCore.debugCompile().$1, isNot(contains('archived')),
          reason: 'includeArchived removes the archived scope predicate');

      final hidden = WebSearchBuilder(fake, ftsSchema, 'engines')
        ..includeHidden()
        ..limit(5);
      expect(hidden.searchCore.debugCompile().$1, isNot(contains('hidden')),
          reason: 'includeHidden removes the hidden scope predicate');

      // Default: both scope flags are present.
      final defaults = WebSearchBuilder(fake, ftsSchema, 'engines')..limit(5);
      final defaultSql = defaults.searchCore.debugCompile().$1;
      expect(defaultSql, contains('archived = 0'));
      expect(defaultSql, contains('hidden = 0'));
    });

    test('the fluent methods return the same builder instance', () {
      final builder = WebSearchBuilder(fake, ftsSchema, 'engines');
      expect(identical(builder.limit(5), builder), isTrue);
      expect(identical(builder.all(), builder), isTrue);
      expect(identical(builder.includeArchived(), builder), isTrue);
      expect(identical(builder.includeHidden(), builder), isTrue);
    });
  });
}
