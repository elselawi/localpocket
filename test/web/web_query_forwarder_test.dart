import 'package:localpocket/src/contract/contract.dart' as contract;
import 'package:localpocket/src/kernel/query/query_builder/predicate_tree.dart';
import 'package:localpocket/src/kernel/query/query_builder/query_builder.dart';
import 'package:localpocket/src/web/facade/query/web_query_builder.dart';
import 'package:localpocket/src/web/protocol.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import 'support/fake_facade_host.dart';

void main() {
  late FakeFacadeHost fake;

  setUp(() {
    fake = FakeFacadeHost({'widgets': widgetsSchema()});
  });

  /// The contract request the last facade call sent, decoded back through the
  /// codec (the exact reverse of the worker's envelope handling).
  T sentRequest<T extends contract.Request>() {
    final (op, args) = fake.sent.last;
    expect(op, WireOp.contractRequest);
    final encoded = args['request'];
    expect(encoded, isA<Map>());
    final request = contract.ContractCodec.decodeRequest(
        (encoded! as Map).cast<String, Object?>());
    expect(request, isA<T>());
    return request as T;
  }

  const emptyRows = contract.QueryRowsResult(
    items: [],
    hasNext: false,
    hasPrev: false,
    nextCursor: null,
    prevCursor: null,
  );

  group('fetch', () {
    test('sends a typed query spec and wraps the kernel page facts', () async {
      const r1 = {'id': 'a', 'name': 'apple'};
      fake.responses[WireOp.contractRequest] = FakeFacadeHost.contractReply(
        const contract.QueryRowsResult(
          items: [r1],
          hasNext: false,
          hasPrev: false,
          nextCursor: null,
          prevCursor: null,
        ),
      );

      final page =
          await WebQueryBuilder(fake, widgetsSchema()).limit(10).fetch();

      final req = sentRequest<contract.QueryRequest>();
      expect(req.spec.limit, 10);
      expect(req.spec.cursor, isNull);
      expect(req.spec.backward, isFalse);

      expect(page.items, hasLength(1));
      expect(page.items.single['name'], 'apple');
      expect(page.hasNext, isFalse);
      expect(page.nextCursor, isNull);
      expect(page.hasPrev, isFalse);
      expect(page.prevCursor, isNull);
    });

    test('an empty result is an empty page', () async {
      fake.responses[WireOp.contractRequest] =
          FakeFacadeHost.contractReply(emptyRows);
      final page =
          await WebQueryBuilder(fake, widgetsSchema()).limit(5).fetch();
      expect(page.items, isEmpty);
      expect(page.hasNext, isFalse);
      expect(page.nextCursor, isNull);
    });

    test('kernel-minted cursors ride the page verbatim', () async {
      fake.responses[WireOp.contractRequest] = FakeFacadeHost.contractReply(
        const contract.QueryRowsResult(
          items: [
            {'id': 'a', 'name': 'apple'},
          ],
          hasNext: true,
          hasPrev: true,
          nextCursor: 'next-token',
          prevCursor: 'prev-token',
        ),
      );
      final page = await WebQueryBuilder(fake, widgetsSchema())
          .orderBy('name')
          .limit(5)
          .fetch();
      expect(page.hasNext, isTrue);
      expect(page.nextCursor, 'next-token');
      expect(page.hasPrev, isTrue);
      expect(page.prevCursor, 'prev-token');
    });

    test('keysetAfter sends the cursor with backward:false', () async {
      final core =
          QueryBuilder.compileOnly(widgetsSchema()).orderBy('name').limit(10);
      final cursor = core.cursorForCompiledRow({
        'name': 'apple',
        'id': 'a'
      }, {
        'name': 'apricot',
        'id': 'b',
      });

      fake.responses[WireOp.contractRequest] = FakeFacadeHost.contractReply(
        const contract.QueryRowsResult(
          items: [],
          hasNext: false,
          hasPrev: true,
          nextCursor: null,
          prevCursor: 'prev-token',
        ),
      );
      final page = await WebQueryBuilder(fake, widgetsSchema())
          .orderBy('name')
          .limit(10)
          .keysetAfter(cursor);

      final req = sentRequest<contract.QueryRequest>();
      expect(req.spec.cursor, cursor);
      expect(req.spec.backward, isFalse);
      expect(page.hasPrev, isTrue);
      expect(page.prevCursor, 'prev-token');
    });

    test('keysetBefore sends the cursor with backward:true in one request',
        () async {
      final core =
          QueryBuilder.compileOnly(widgetsSchema()).orderBy('name').limit(10);
      final cursor = core.cursorForCompiledRow(
        {'name': 'apple', 'id': 'a'},
        {'name': 'apricot', 'id': 'b'},
      );

      fake.responses[WireOp.contractRequest] = FakeFacadeHost.contractReply(
        const contract.QueryRowsResult(
          items: [
            {'id': 'b', 'name': 'apple'},
            {'id': 'c', 'name': 'apricot'},
          ],
          hasNext: false,
          hasPrev: true,
          nextCursor: null,
          prevCursor: 'prev-token',
        ),
      );
      final page = await WebQueryBuilder(fake, widgetsSchema())
          .orderBy('name')
          .limit(2)
          .keysetBefore(cursor);

      final req = sentRequest<contract.QueryRequest>();
      expect(req.spec.cursor, cursor);
      expect(req.spec.backward, isTrue);

      final sends = fake.sent.where((s) => s.$1 == WireOp.contractRequest);
      expect(sends, hasLength(1),
          reason: 'the kernel answers backward walks in one round trip');
      expect(page.hasPrev, isTrue);
      expect(page.items.map((r) => r['id']).toList(), ['b', 'c'],
          reason: 'rows come back in the declared (forward) order');
      expect(page.prevCursor, 'prev-token');
      expect(page.hasNext, isFalse);
      expect(page.nextCursor, isNull);
    });
  });

  group('scalar reads', () {
    test('count sends a typed count request', () async {
      fake.responses[WireOp.contractRequest] =
          FakeFacadeHost.contractReply(const contract.CountResult(7));
      expect(await WebQueryBuilder(fake, widgetsSchema()).count(), 7);
      final req = sentRequest<contract.CountRequest>();
      expect(req.spec.limit, isNull);
    });

    test('countDistinct sends the field with the spec', () async {
      fake.responses[WireOp.contractRequest] =
          FakeFacadeHost.contractReply(const contract.CountResult(3));
      final n =
          await WebQueryBuilder(fake, widgetsSchema()).countDistinct('qty');
      expect(n, 3);
      final req = sentRequest<contract.CountDistinctRequest>();
      expect(req.field, 'qty');
    });

    test('distinct sends the field with the builder spec', () async {
      fake.responses[WireOp.contractRequest] = FakeFacadeHost.contractReply(
          const contract.DistinctResult(['a', 'b']));
      final values = await WebQueryBuilder(fake, widgetsSchema())
          .where('qty', gte: 3)
          .distinct('name');
      expect(values, ['a', 'b']);
      final req = sentRequest<contract.DistinctRequest>();
      expect(req.field, 'name');
      expect(req.spec.predicate, isA<contract.LeafSpecData>(),
          reason: 'the distinct scan honors the builder filters');
    });

    test('distinct on an empty result set is empty', () async {
      fake.responses[WireOp.contractRequest] =
          FakeFacadeHost.contractReply(const contract.DistinctResult([]));
      final values =
          await WebQueryBuilder(fake, widgetsSchema()).distinct('name');
      expect(values, isEmpty);
    });

    test('ids sends the spec and returns the id strings', () async {
      fake.responses[WireOp.contractRequest] = FakeFacadeHost.contractReply(
          const contract.IdsResult(['a', 'b', 'c']));
      final ids = await WebQueryBuilder(fake, widgetsSchema()).all().ids();
      expect(ids, ['a', 'b', 'c']);
      final req = sentRequest<contract.IdsRequest>();
      expect(req.spec.all, isTrue);
    });

    test('explain returns the kernel plan string', () async {
      fake.responses[WireOp.contractRequest] = FakeFacadeHost.contractReply(
          const contract.ExplainResult('SCAN widgets'));
      final plan =
          await WebQueryBuilder(fake, widgetsSchema()).limit(5).explain();
      expect(plan, 'SCAN widgets');
      sentRequest<contract.ExplainRequest>();
    });
  });

  group('aggregates', () {
    test('sum/avg/min/max send their aggregate variants', () async {
      fake.responses[WireOp.contractRequest] =
          FakeFacadeHost.contractReply(const contract.AggregateResult(12.5));
      final builder = WebQueryBuilder(fake, widgetsSchema());
      expect(await builder.sum('qty'), 12.5);
      expect(sentRequest<contract.AggregateRequest>().fn,
          contract.AggregateFn.sum);
      expect(await builder.avg('qty'), 12.5);
      expect(await builder.min('qty'), 12.5);
      expect(await builder.max('qty'), 12.5);
    });

    test('aggregates return null when the value is absent', () async {
      fake.responses[WireOp.contractRequest] =
          FakeFacadeHost.contractReply(const contract.AggregateResult(null));
      final builder = WebQueryBuilder(fake, widgetsSchema());
      expect(await builder.sum('qty'), isNull);
      expect(await builder.avg('qty'), isNull);
      expect(await builder.min('qty'), isNull);
      expect(await builder.max('qty'), isNull);
    });

    test('an int value is preserved as a num', () async {
      fake.responses[WireOp.contractRequest] =
          FakeFacadeHost.contractReply(const contract.AggregateResult(42));
      expect(await WebQueryBuilder(fake, widgetsSchema()).sum('qty'), 42);
    });
  });

  group('QueryForwarder DSL delegation', () {
    test('where forwards every operator to the underlying core builder',
        () async {
      final builder = WebQueryBuilder(fake, widgetsSchema())
        ..where('name', eq: 'apple', neq: 'pear', contains: 'pp', isNull: null)
        ..all();
      // The where is baked into the core builder, not just sent.
      final (sql, args) = builder.queryCore.debugCompile();
      expect(sql, contains('"name" = ?'));
      expect(sql, contains('"name" <> ?'), reason: 'neq compiles to <>');
      expect(sql, contains('LIKE ?'));
      expect(args, containsAll(<Object?>['apple', 'pear', '%pp%']));
    });

    test('orWhere lowers into the spec predicate as an OR node', () async {
      fake.responses[WireOp.contractRequest] =
          FakeFacadeHost.contractReply(emptyRows);
      final page = await WebQueryBuilder(fake, widgetsSchema())
          .orWhere(<Map<String, Object?>>[
            <String, Object?>{'name': 'apple'},
            <String, Object?>{'qty': 1},
          ])
          .all()
          .fetch();
      expect(page.items, isEmpty);
      final req = sentRequest<contract.QueryRequest>();
      expect(req.spec.predicate, isA<contract.AnySpecData>(),
          reason: 'an orWhere group lowers to an OR node');
    });

    test(
        'select, includeArchived, includeHidden, and all mutate the core '
        'builder in place', () {
      final builder = WebQueryBuilder(fake, widgetsSchema())
        ..select(['id', 'name'])
        ..includeArchived()
        ..includeHidden()
        ..all()
        ..orderBy('name', desc: true);
      final core = builder.queryCore;
      expect(core.allMode, isTrue, reason: 'all() flips the core to unbounded');
      final (sql, _) = core.debugCompile();
      expect(sql, contains('SELECT'), reason: 'select() projects columns');
      expect(sql, isNot(contains('archived = 0')),
          reason: 'includeArchived drops the archived scope flag');
      expect(sql, isNot(contains('hidden = 0')),
          reason: 'includeHidden drops the hidden scope flag');
      expect(sql, contains('DESC'), reason: 'orderBy(desc: true) is forwarded');
    });

    test('wherePredicate forwards a predicate node', () {
      final builder = WebQueryBuilder(fake, widgetsSchema())
        ..wherePredicate(const LeafPredicate('name', 'eq', ['apple']))
        ..all();
      final (sql, args) = builder.queryCore.debugCompile();
      expect(sql, contains('"name" = ?'));
      expect(args, ['apple']);
    });

    test('the fluent methods return the same builder instance', () {
      final builder = WebQueryBuilder(fake, widgetsSchema());
      expect(identical(builder.where('name', eq: 'x'), builder), isTrue);
      expect(identical(builder.orWhere(<Map<String, Object?>>[]), builder),
          isTrue);
      expect(identical(builder.all(), builder), isTrue);
      expect(identical(builder.select(['id']), builder), isTrue);
      expect(identical(builder.includeArchived(), builder), isTrue);
      expect(identical(builder.includeHidden(), builder), isTrue);
      expect(identical(builder.orderBy('name'), builder), isTrue);
      expect(identical(builder.limit(10), builder), isTrue);
    });
  });
}
