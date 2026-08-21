import 'package:localpocket/src/core/query/query_builder/query_builder.dart';
import 'package:localpocket/src/web/conversions.dart';
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

  Map<String, Object?> planArgs(String op) {
    final (opSent, args) = fake.sent.where((s) => s.$1 == op).single;
    expect(opSent, op);
    return args;
  }

  group('fetch', () {
    test('compiles with limit+1, sends pageLimit, and builds a Page',
        () async {
      final r1 = {'id': 'a', 'name': 'apple'};
      fake.responses[WireOp.compiledQuery] = {
        'items': [encodeWireValue(r1)],
        'hasMore': false,
      };

      final page = await WebQueryBuilder(fake, widgetsSchema())
          .limit(10)
          .fetch();

      final args = planArgs(WireOp.compiledQuery);
      expect(args['operation'], 'query');
      expect(args['limit'], 11, reason: 'page compile fetches limit + 1');
      expect(args['pageLimit'], 10);
      expect(args['sql'], contains('LIMIT 11'));

      expect(page.items, hasLength(1));
      expect(page.items.single['name'], 'apple');
      expect(page.hasMore, isFalse);
      expect(page.nextCursor, isNull);
    });

    test('an empty result is an empty page', () async {
      fake.responses[WireOp.compiledQuery] = {
        'items': <Object?>[],
        'hasMore': false,
      };
      final page = await WebQueryBuilder(fake, widgetsSchema())
          .limit(5)
          .fetch();
      expect(page.items, isEmpty);
      expect(page.hasMore, isFalse);
      expect(page.nextCursor, isNull);
    });

    test('hasMore with a wire-encoded lastRow produces a nextCursor',
        () async {
      final r1 = {'id': 'a', 'name': 'apple'};
      fake.responses[WireOp.compiledQuery] = {
        'items': [encodeWireValue(r1)],
        'hasMore': true,
        'lastRow': encodeWireValue({'name': 'apple', 'id': 'a'}),
      };
      final page = await WebQueryBuilder(fake, widgetsSchema())
          .orderBy('name')
          .limit(5)
          .fetch();
      expect(page.hasMore, isTrue);
      expect(page.nextCursor, isNotNull);
    });

    test('keysetAfter passes the cursor through to the compiled plan',
        () async {
      // Build a cursor with the same query shape as the facade builder.
      final core = QueryBuilder.compileOnly(widgetsSchema())
          .orderBy('name')
          .limit(10);
      final cursor = core.cursorForCompiledRow({'name': 'apple', 'id': 'a'});

      fake.responses[WireOp.compiledQuery] = {
        'items': <Object?>[],
        'hasMore': false,
      };
      final page = await WebQueryBuilder(fake, widgetsSchema())
          .orderBy('name')
          .limit(10)
          .keysetAfter(cursor);

      expect(page.hasMore, isFalse);
      final args = planArgs(WireOp.compiledQuery);
      // The keyset predicate is baked into the plan SQL and the last-row sort
      // values are bound as args (cursor passed through).
      expect(args['sql'], contains('>'));
      expect(args['args'], contains('apple'));
      expect(args['args'], contains('a'));
    });
  });

  group('scalar reads', () {
    test('count reads the value key and defaults to 0 when missing', () async {
      fake.responses[WireOp.compiledQuery] = {'value': 7};
      expect(await WebQueryBuilder(fake, widgetsSchema()).count(), 7);
      expect(planArgs(WireOp.compiledQuery)['operation'], 'count');

      fake.responses[WireOp.compiledQuery] = {};
      expect(await WebQueryBuilder(fake, widgetsSchema()).count(), 0);
    });

    test('countDistinct reads the value key', () async {
      fake.responses[WireOp.compiledQuery] = {'value': 3};
      final n = await WebQueryBuilder(fake, widgetsSchema()).countDistinct('qty');
      expect(n, 3);
      expect(planArgs(WireOp.compiledQuery)['operation'], 'countDistinct');
    });

    test('distinct decodes every wire value', () async {
      fake.responses[WireOp.compiledQuery] = {
        'values': [encodeWireValue('a'), encodeWireValue('b')],
      };
      final values =
          await WebQueryBuilder(fake, widgetsSchema()).distinct('name');
      expect(values, ['a', 'b']);
      expect(planArgs(WireOp.compiledQuery)['operation'], 'distinct');
    });

    test('distinct on an empty result set is empty', () async {
      fake.responses[WireOp.compiledQuery] = {'values': <Object?>[]};
      final values =
          await WebQueryBuilder(fake, widgetsSchema()).distinct('name');
      expect(values, isEmpty);
    });

    test('ids returns the id strings', () async {
      fake.responses[WireOp.compiledQuery] = {
        'ids': ['a', 'b', 'c'],
      };
      final ids = await WebQueryBuilder(fake, widgetsSchema()).all().ids();
      expect(ids, ['a', 'b', 'c']);
      expect(planArgs(WireOp.compiledQuery)['operation'], 'ids');
    });

    test('explain returns the plan string', () async {
      fake.responses[WireOp.compiledQuery] = {'plan': 'SCAN widgets'};
      final plan =
          await WebQueryBuilder(fake, widgetsSchema()).limit(5).explain();
      expect(plan, 'SCAN widgets');
      expect(planArgs(WireOp.compiledQuery)['operation'], 'explain');
    });
  });

  group('aggregates', () {
    test('sum/avg/min/max return the numeric value from the value key',
        () async {
      fake.responses[WireOp.compiledQuery] = {'value': 12.5};
      final builder = WebQueryBuilder(fake, widgetsSchema());
      expect(await builder.sum('qty'), 12.5);
      expect(planArgs(WireOp.compiledQuery)['operation'], 'sum');
      expect(await builder.avg('qty'), 12.5);
      expect(await builder.min('qty'), 12.5);
      expect(await builder.max('qty'), 12.5);
    });

    test('aggregates return null when the value row is absent', () async {
      fake.responses[WireOp.compiledQuery] = {'value': null};
      final builder = WebQueryBuilder(fake, widgetsSchema());
      expect(await builder.sum('qty'), isNull);
      expect(await builder.avg('qty'), isNull);
      expect(await builder.min('qty'), isNull);
      expect(await builder.max('qty'), isNull);
    });

    test('an int value is preserved as a num', () async {
      fake.responses[WireOp.compiledQuery] = {'value': 42};
      expect(await WebQueryBuilder(fake, widgetsSchema()).sum('qty'), 42);
    });
  });
}
