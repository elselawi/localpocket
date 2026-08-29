import 'package:localpocket/src/core/query/query_builder/predicate_tree.dart';
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
    test('compiles with limit+1, sends pageLimit, and builds a Page', () async {
      final r1 = {'id': 'a', 'name': 'apple'};
      fake.responses[WireOp.compiledQuery] = {
        'items': [encodeWireValue(r1)],
        'hasNext': false,
      };

      final page =
          await WebQueryBuilder(fake, widgetsSchema()).limit(10).fetch();

      final args = planArgs(WireOp.compiledQuery);
      expect(args['operation'], 'query');
      expect(args['limit'], 11, reason: 'page compile fetches limit + 1');
      expect(args['pageLimit'], 10);
      expect(args['sql'], contains('LIMIT 11'));

      expect(page.items, hasLength(1));
      expect(page.items.single['name'], 'apple');
      expect(page.hasNext, isFalse);
      expect(page.nextCursor, isNull);
    });

    test('an empty result is an empty page', () async {
      fake.responses[WireOp.compiledQuery] = {
        'items': <Object?>[],
        'hasNext': false,
      };
      final page =
          await WebQueryBuilder(fake, widgetsSchema()).limit(5).fetch();
      expect(page.items, isEmpty);
      expect(page.hasNext, isFalse);
      expect(page.nextCursor, isNull);
    });

    test('hasNext with wire-encoded boundary rows produces a nextCursor',
        () async {
      final r1 = {'id': 'a', 'name': 'apple'};
      fake.responses[WireOp.compiledQuery] = {
        'items': [encodeWireValue(r1)],
        'hasNext': true,
        'lastRow': encodeWireValue({'name': 'apple', 'id': 'a'}),
        'firstRow': encodeWireValue({'name': 'apple', 'id': 'a'}),
      };
      final page = await WebQueryBuilder(fake, widgetsSchema())
          .orderBy('name')
          .limit(5)
          .fetch();
      expect(page.hasNext, isTrue);
      expect(page.nextCursor, isNotNull);
      expect(page.hasPrev, isFalse);
      expect(page.prevCursor, isNull);
    });

    test('keysetAfter passes the cursor through to the compiled plan',
        () async {
      // Build a cursor with the same query shape as the facade builder.
      final core =
          QueryBuilder.compileOnly(widgetsSchema()).orderBy('name').limit(10);
      final cursor = core.cursorForCompiledRow({
        'name': 'apple',
        'id': 'a'
      }, {
        'name': 'apricot',
        'id': 'b',
      });

      fake.responses[WireOp.compiledQuery] = {
        'items': <Object?>[],
        'hasNext': false,
      };
      final page = await WebQueryBuilder(fake, widgetsSchema())
          .orderBy('name')
          .limit(10)
          .keysetAfter(cursor);

      expect(page.hasNext, isFalse);
      final args = planArgs(WireOp.compiledQuery);
      // The keyset predicate is baked into the plan SQL and the last-row sort
      // values are bound as args (cursor passed through).
      expect(args['sql'], contains('>'));
      expect(args['args'], contains('apple'));
      expect(args['args'], contains('a'));
    });

    test('keysetBefore compiles the flipped walk, reverses, and probes',
        () async {
      final core =
          QueryBuilder.compileOnly(widgetsSchema()).orderBy('name').limit(10);
      final cursor = core.cursorForCompiledRow(
        {'name': 'apple', 'id': 'a'},
        {'name': 'apricot', 'id': 'b'},
      );

      // First send: the backward window (walks the flipped order, so the
      // worker's first row is the window's last row in declared order).
      // Second send: the one-row forward probe from the window's last row.
      var call = 0;
      fake.onSend = (op, args) async {
        call++;
        if (call == 1) {
          return {
            'items': [
              encodeWireValue({'id': 'c', 'name': 'apricot'}),
              encodeWireValue({'id': 'b', 'name': 'apple'}),
            ],
            'hasNext': true,
            'firstRow': encodeWireValue({'name': 'apricot', 'id': 'c'}),
            'lastRow': encodeWireValue({'name': 'apple', 'id': 'b'}),
          };
        }
        return {
          'items': <Object?>[],
          'hasNext': false,
          'firstRow': null,
          'lastRow': null,
        };
      };
      final page = await WebQueryBuilder(fake, widgetsSchema())
          .orderBy('name')
          .limit(2)
          .keysetBefore(cursor);

      final sends =
          fake.sent.where((s) => s.$1 == WireOp.compiledQuery).toList();
      expect(sends, hasLength(2));
      final windowArgs = sends[0].$2;
      expect(windowArgs['sql'], contains('ORDER BY "name" DESC, "id" DESC'),
          reason: 'the backward window flips every direction');
      expect(windowArgs['args'], contains('apricot'),
          reason: 'the pv tuple seeds the walk');
      expect(page.hasPrev, isTrue,
          reason: 'the window reported an overflow row');
      expect(page.items.map((r) => r['id']).toList(), ['b', 'c'],
          reason: 'rows come back in the declared (forward) order');

      final probeArgs = sends[1].$2;
      expect(probeArgs['sql'], contains('ORDER BY "name" ASC, "id" ASC'),
          reason: 'the probe is a forward keyset read');
      expect(probeArgs['args'], contains('apricot'),
          reason: 'the probe anchors at the window last-row tuple');
      expect(probeArgs['sql'], contains('LIMIT 1'));
      expect(page.hasNext, isFalse,
          reason: 'the probe found no row after the window');
      expect(page.nextCursor, isNull);
      expect(page.prevCursor, isNotNull);
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
      final n =
          await WebQueryBuilder(fake, widgetsSchema()).countDistinct('qty');
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

    test('orWhere forwards a group list to the compiled plan', () async {
      fake.responses[WireOp.compiledQuery] = {
        'items': <Object?>[],
        'hasNext': false,
      };
      final page = await WebQueryBuilder(fake, widgetsSchema())
          .orWhere(<Map<String, Object?>>[
            <String, Object?>{'name': 'apple'},
            <String, Object?>{'qty': 1},
          ])
          .all()
          .fetch();
      expect(page.items, isEmpty);
      final args = planArgs(WireOp.compiledQuery);
      expect(args['sql'], contains('OR'));
      expect(args['args'], containsAll(<Object?>['apple', 1]));
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
